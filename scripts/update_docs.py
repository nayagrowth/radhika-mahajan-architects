agents_md = """# AGENTS.md — Radhika Mahajan Architects (RMA) Web Platform

## Scope
This repository houses the official public web experience for **Radhika Mahajan Architects (RMA)**.

## Architecture
1. `src/app`: Next.js App Router composition, metadata, layout, schema.org JSON-LD, sitemap, and robots.
2. `src/features/rma-*`: Feature modules for each narrative act and dedicated domain surface:
   - `rma-hero`: Act 1 luxury cover and editorial statement
   - `rma-identity`: Act 2 credentials, bio, and key statistics
   - `rma-presence`: Act 3 landmark developments and proof
   - `rma-mission`: Act 4 4-pillar studio manifesto
   - `rma-topics`: Act 5 practice areas and spatial capabilities
   - `rma-thinking`: Act 6 architectural journal & spatial walkthroughs
   - `rma-bridge`: Act 7 consultation bridge & intake CTA
   - `rma-about`: Studio story, philosophy, and history
   - `rma-media`: Built project registry and media contracts
3. `src/features/home-intro-story`: GSAP ScrollTrigger pinned timeline orchestrating Acts 1–4, followed by flowing Acts 5–7.
4. `src/content/articles`: Markdown-based architectural and spatial thought leadership articles.

## Verification
```bash
npm run lint
npm run typecheck
npm run build
```
"""
with open("D:/Projects/RMA/AGENTS.md", "w", encoding="utf-8") as f:
    f.write(agents_md)

deployment_md = """# DEPLOYMENT.md — RMA Web Platform

## Infrastructure
- **Server**: `93.127.199.24` (`nivi`)
- **Routing**: Traefik with automatic TLS (`letsencrypt`)
- **Domain**: `rma.preview.nayagrowth.com`
- **Container**: `rma-web` (port 3000, `proxy_net`)
- **Path**: `/home/nivi/apps/rma-web`

## Automated CI/CD
Push to `main` branch executes `.github/workflows/deploy.yml`:
1. Checks out repo & installs dependencies.
2. Runs linting and typecheck.
3. Builds standalone Next.js production bundle.
4. Rsyncs bundle & compose files to `/home/nivi/apps/rma-web`.
5. Rebuilds and restarts container.
6. Verifies live health endpoint at `https://rma.preview.nayagrowth.com/api/health`.
"""
with open("D:/Projects/RMA/DEPLOYMENT.md", "w", encoding="utf-8") as f:
    f.write(deployment_md)

print("Updated AGENTS.md and DEPLOYMENT.md successfully!")
