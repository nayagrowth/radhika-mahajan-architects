# DEPLOYMENT.md — RMA Web Platform

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
