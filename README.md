# FleetOS AI

AI-powered Fleet Management ERP for the US trucking industry — dispatch, loads, GPS tracking, compliance, accounting, maintenance, and an AI copilot in one platform.

## Docs

- [Features.md](Features.md) — complete feature list & build status
- [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) — phased roadmap
- [CLAUDE.md](CLAUDE.md) — architecture, stack & conventions

## Stack

Turborepo · Next.js 15 + Tailwind v4 (`apps/web`) · NestJS 11 (`apps/api`) · PostgreSQL/PostGIS + Prisma · Redis · shared Zod schemas (`packages/shared`)

## Getting Started

```bash
pnpm install
docker compose up -d   # Postgres + Redis
pnpm dev               # web on :3000, api on :4100 (docs at /api/docs)
```
