prod_compose = """services:
  rma-web:
    image: rma-web-image:latest
    container_name: rma-web
    restart: unless-stopped
    cpus: "0.50"
    mem_limit: 512m
    environment:
      NODE_ENV: production
      PORT: 3000
      HOSTNAME: 0.0.0.0
      NEXT_PUBLIC_SITE_ORIGIN: https://rma.preview.nayagrowth.com
      CONTACT_WEBHOOK_URL: https://api.nayagrowth.com/api/landing/intake/src_rma_web
    networks:
      - proxy_net
    healthcheck:
      test: ["CMD", "node", "-e", "fetch('http://127.0.0.1:3000/api/health').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 20s
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=proxy_net"
      - "traefik.http.routers.rma-web.rule=Host(`rma.preview.nayagrowth.com`)"
      - "traefik.http.routers.rma-web.entrypoints=websecure"
      - "traefik.http.routers.rma-web.tls.certresolver=letsencrypt"
      - "traefik.http.services.rma-web.loadbalancer.server.port=3000"
      - "traefik.http.middlewares.rma-security.headers.stsseconds=31536000"
      - "traefik.http.middlewares.rma-security.headers.stsincludesubdomains=true"
      - "traefik.http.middlewares.rma-security.headers.contenttypenosniff=true"
      - "traefik.http.middlewares.rma-security.headers.framedeny=true"
      - "traefik.http.middlewares.rma-security.headers.referrerpolicy=strict-origin-when-cross-origin"
      - "traefik.http.middlewares.rma-security.headers.permissionspolicy=camera=(), microphone=(), geolocation=()"
      - "traefik.http.routers.rma-web.middlewares=rma-security"

networks:
  proxy_net:
    external: true
"""
with open("D:/Projects/RMA/docker-compose.prod.yml", "w", encoding="utf-8") as f:
    f.write(prod_compose)

dev_compose = """services:
  rma-web:
    container_name: rma-web
    build:
      context: .
      dockerfile: Dockerfile
    image: rma-web:next
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - PORT=3000
    networks:
      - proxy_net
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.rma-web.rule=Host(`rma.preview.nayagrowth.com`)"
      - "traefik.http.routers.rma-web.entrypoints=websecure"
      - "traefik.http.routers.rma-web.tls.certresolver=letsencrypt"
      - "traefik.http.services.rma-web.loadbalancer.server.port=3000"

networks:
  proxy_net:
    external: true
"""
with open("D:/Projects/RMA/docker-compose.yml", "w", encoding="utf-8") as f:
    f.write(dev_compose)

print("Updated docker-compose files successfully!")
