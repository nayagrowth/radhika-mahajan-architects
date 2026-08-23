# AGENTS.md — Radhika Mahajan Architects (RMA) Web Platform

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
