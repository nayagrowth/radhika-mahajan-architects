import os
import sys
import shutil
import tarfile
import subprocess
import time

BASE_DIR = r"D:\Projects\RMA"
STANDALONE_DIR = os.path.join(BASE_DIR, ".next", "standalone")
STATIC_SRC = os.path.join(BASE_DIR, ".next", "static")
STATIC_DEST = os.path.join(STANDALONE_DIR, ".next", "static")
PUBLIC_SRC = os.path.join(BASE_DIR, "public")
PUBLIC_DEST = os.path.join(STANDALONE_DIR, "public")
TAR_FILE = os.path.join(BASE_DIR, "rma-standalone.tar.gz")
COMPOSE_FILE = os.path.join(BASE_DIR, "docker-compose.prod.yml")

def run(cmd, check=True):
    print(f"--> Running: {cmd}")
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.stdout:
        print(res.stdout.strip())
    if res.stderr:
        print("STDERR:", res.stderr.strip(), file=sys.stderr)
    if check and res.returncode != 0:
        raise RuntimeError(f"Command failed with return code {res.returncode}: {cmd}")
    return res

def main():
    print("=== Step 1: Copying static assets and public directory ===")
    os.makedirs(os.path.dirname(STATIC_DEST), exist_ok=True)
    if os.path.exists(STATIC_DEST):
        shutil.rmtree(STATIC_DEST)
    shutil.copytree(STATIC_SRC, STATIC_DEST)
    print(f"Copied {STATIC_SRC} -> {STATIC_DEST}")

    if os.path.exists(PUBLIC_DEST):
        shutil.rmtree(PUBLIC_DEST)
    shutil.copytree(PUBLIC_SRC, PUBLIC_DEST)
    print(f"Copied {PUBLIC_SRC} -> {PUBLIC_DEST}")

    print("=== Step 2: Writing Dockerfile ===")
    dockerfile_content = """FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0 PORT=3000
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --chown=nextjs:nodejs . ./
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
"""
    dockerfile_path = os.path.join(STANDALONE_DIR, "Dockerfile")
    with open(dockerfile_path, "w", encoding="utf-8") as f:
        f.write(dockerfile_content)
    print(f"Wrote Dockerfile to {dockerfile_path}")

    print("=== Step 3: Creating tar.gz archive ===")
    if os.path.exists(TAR_FILE):
        os.remove(TAR_FILE)
    
    with tarfile.open(TAR_FILE, "w:gz") as tar:
        for root, dirs, files in os.walk(STANDALONE_DIR):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, STANDALONE_DIR)
                tar.add(full_path, arcname=rel_path)
    
    tar_size_mb = os.path.getsize(TAR_FILE) / (1024 * 1024)
    print(f"Created {TAR_FILE} ({tar_size_mb:.2f} MB)")

    print("=== Step 4: Creating remote directory on nivi ===")
    run('ssh nivi "mkdir -p /home/nivi/apps/rma-web"')

    print("=== Step 5: Uploading tar bundle and compose file ===")
    run(f'scp "{TAR_FILE}" nivi:/home/nivi/apps/rma-web/rma-standalone.tar.gz')
    run(f'scp "{COMPOSE_FILE}" nivi:/home/nivi/apps/rma-web/docker-compose.prod.yml')

    print("=== Step 6: Extracting, Building & Starting Docker Container on Server ===")
    remote_script = (
        'set -e\n'
        'cd /home/nivi/apps/rma-web\n'
        'tar -xzf rma-standalone.tar.gz\n'
        'rm -f rma-standalone.tar.gz\n'
        'echo "Building Docker image rma-web-image:latest..."\n'
        'docker build -t rma-web-image:latest .\n'
        'echo "Starting container via docker compose..."\n'
        'docker stop rma-web 2>/dev/null || true\n'
        'docker rm rma-web 2>/dev/null || true\n'
        'docker compose -f docker-compose.prod.yml up -d rma-web\n'
        'echo "Pruning unused images..."\n'
        'docker image prune -f || true\n'
    )
    
    # Run the remote script
    p = subprocess.Popen(['ssh', 'nivi', 'bash -s'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = p.communicate(input=remote_script)
    print("REMOTE OUTPUT:\n", out)
    if err:
        print("REMOTE STDERR:\n", err)
    if p.returncode != 0:
        raise RuntimeError(f"Remote deployment script failed with code {p.returncode}")

    print("=== Step 7: Verifying Live Health Endpoint ===")
    time.sleep(5)
    for attempt in range(1, 15):
        try:
            res = subprocess.run(['ssh', 'nivi', 'curl -s -o /dev/null -w "%{http_code}" https://rma.preview.nayagrowth.com/api/health || echo "0"'], capture_output=True, text=True)
            status = res.stdout.strip()
            print(f"Attempt {attempt}: https://rma.preview.nayagrowth.com/api/health -> HTTP {status}")
            if status == "200":
                print("\n✅ DEPLOYMENT SUCCESSFUL! Site is LIVE and HEALTHY at https://rma.preview.nayagrowth.com/")
                return
        except Exception as e:
            print(f"Attempt {attempt} failed: {e}")
        time.sleep(3)

    print("⚠️ Health check timed out, checking container logs...")
    res = subprocess.run(['ssh', 'nivi', 'docker logs --tail 30 rma-web'], capture_output=True, text=True)
    print(res.stdout)

if __name__ == '__main__':
    main()
