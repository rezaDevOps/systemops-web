# systemops-web

Public corporate website for SystemOps.

- `/` — company homepage (CloudPilot + upcoming NIS2 and EU AI Act products)
- `/cloudpilot` — CloudPilot sales page

Static Next.js (App Router) site with TypeScript and plain CSS. No backend, database, analytics or cookies.
Fonts are self-hosted at build time via `next/font`.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

Deploys to Vercel with the default Next.js preset. No environment variables are required.
