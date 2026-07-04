# CLAUDE.md — FleetOS AI

## What This Project Is

FleetOS AI is an enterprise-grade, AI-powered Fleet Management ERP for the **US trucking industry**. It is not a GPS tracker — it is the complete operating system for trucking companies: dispatch, loads, fleet, drivers, compliance, accounting, CRM, maintenance, fuel, HR, warehouse, documents, reports, portals (broker/customer/vendor), automation engine, and an AI copilot layer across every module.

Competitors to beat on UX and capability: Samsara, Motive, Geotab, Fleetio, AscendTMS.

**`Features.md` is the complete, canonical feature list** — every module and feature with phase mapping and build status (checkboxes). Consult it before scoping any work; update its checkboxes when features ship. `PRODUCT.md` defines the product (vision, pricing, conventions, roadmap summary), `DEVELOPMENT_PLAN.md` says *when*, `Features.md` says *what*.

**Current scope: WEB APP ONLY.** Mobile apps (driver app, etc.) are deferred to a later phase. Do not build React Native / mobile code unless explicitly asked. Design APIs so a mobile client can consume them later.

## Target Users & Tenancy

- Customers: owner-operators (1 truck) up to enterprises (1000+ trucks), plus brokers, dispatch companies, repair shops, accountants.
- **Multi-tenant SaaS**: every company's data is isolated. Tenant hierarchy: Company → Branch → Department → Team → Region.
- **RBAC**: built-in roles (Super Admin, Company Owner, Fleet Manager, Dispatcher, Driver, Safety Manager, Accountant, HR, Maintenance Manager, Broker, Customer, Vendor, Read Only) plus custom roles with granular permissions.

## Tech Stack (decided — keep consistent)

| Layer | Choice |
|---|---|
| Monorepo | Turborepo + pnpm workspaces |
| Frontend | Next.js (App Router) + TypeScript (strict) |
| UI | Tailwind CSS + shadcn/ui, dark/light mode via `next-themes` |
| State/data | TanStack Query (server state), Zustand (client state) |
| Tables/DnD | TanStack Table, dnd-kit (dispatch board) |
| Charts | Recharts |
| Maps | Mapbox GL JS (primary), abstracted behind a `MapProvider` interface |
| Backend | NestJS (REST, modular monolith — microservice-ready boundaries) |
| Database | PostgreSQL + Prisma; PostGIS for geo; TimescaleDB later for GPS telemetry |
| Cache/queues | Redis + BullMQ |
| Realtime | WebSockets (Socket.IO) via a NestJS gateway |
| Auth | Auth.js / custom JWT + refresh tokens; TOTP 2FA; passkeys (WebAuthn); org invitations |
| Files | S3-compatible storage (AWS S3; local MinIO in dev) |
| AI | Claude API (`claude-fable-5` for complex reasoning, `claude-haiku-4-5-20251001` for high-volume extraction/OCR-assist) |
| Payments/billing | Stripe (SaaS subscriptions) |
| Email/SMS | SendGrid / Twilio |
| Validation | Zod shared between frontend and backend (`packages/shared`) |
| API docs | OpenAPI generated from NestJS decorators |

## Repository Layout

```
apps/
  web/          # Next.js app (all portals: main app, broker, customer, vendor, SaaS admin)
  api/          # NestJS backend
packages/
  shared/       # Zod schemas, shared types, constants, enums
  ui/           # Shared UI components / design tokens
  config/       # ESLint, TS, Tailwind presets
```

## Non-Negotiable Conventions

1. **Tenant isolation is sacred.** Every tenant-owned table has `companyId`. Every query must be scoped by tenant — enforced in a Prisma middleware/extension, never left to individual handlers. Cross-tenant data leaks are the worst class of bug in this codebase.
2. **RBAC on every endpoint.** Use permission guards/decorators (`@RequirePermission('loads.create')`). No unguarded routes except auth/public webhooks.
3. **Audit everything mutating.** Writes to core entities (loads, invoices, drivers, trucks, settlements) produce audit-log entries.
4. **Soft deletes** (`deletedAt`) for business entities; hard delete only for GDPR erasure flows.
5. **Money is integers (cents).** Never floats. Miles/gallons as `Decimal`.
6. **US trucking domain correctness matters**: VIN (17 chars), DOT/MC numbers, CDL classes (A/B/C), HOS rules (11-hour driving / 14-hour window / 70-hour cycle), IFTA quarters, ELD mandate, DVIR, FMCSA compliance. Don't invent rules — flag uncertainty rather than guessing regulations.
7. **All list endpoints**: pagination (cursor-based), filtering, sorting, and bulk-operation support from day one.
8. **IDs**: UUID v7 (time-ordered) for all primary keys.
9. **Dates in UTC** in the DB; display in the company's timezone (US timezones matter for HOS/appointments).
10. **Zod schemas live in `packages/shared`** and are the single source of truth for both API validation and frontend forms.

## Design System

Premium SaaS aesthetic — Linear / Stripe / Vercel / Ramp quality:
- Dark and light mode from day one, both first-class.
- Skeleton loaders for all async content; no layout shift.
- Rounded corners, generous whitespace, professional typography (Inter).
- Keyboard shortcuts + global command palette (`cmd+k`) with search-everywhere.
- Responsive: dashboards degrade gracefully to tablet/phone widths.
- Accessibility: semantic HTML, focus states, ARIA on interactive components.
- All strings through an i18n layer (English only for now, multi-language ready).

## Ports (this machine)

- Web (Next.js): **3000**
- API (NestJS): **4100** — do not use 3001 or 4000; other unrelated projects on this machine already listen there. Never kill processes on those ports.
- Postgres: 5432, Redis: 6379 (docker-compose; Docker not yet installed on this machine)

## Commands

Once scaffolded (keep this section updated):
```bash
pnpm install          # install all workspaces
pnpm dev              # run web + api in dev
pnpm build            # build all
pnpm lint             # lint all
pnpm test             # run tests
pnpm db:migrate       # prisma migrate dev
pnpm db:seed          # seed demo tenant/data
```

## Build Order

Scope lives in `Features.md` (update its checkboxes as features ship). Follow `DEVELOPMENT_PLAN.md` — phases are dependency-ordered (foundation → fleet/driver core → loads/dispatch → tracking → money → compliance → portals → AI/automation → SaaS admin). Don't start a later-phase module while its dependencies are unbuilt.

## Working Rules for Claude

- Web app only. If a task implies mobile, build the API/web side and note the mobile part as deferred.
- Prefer building shared primitives (data table, filter bar, entity timeline, document uploader, address input, status badge) once in `packages/ui` and reusing them — this ERP has dozens of near-identical CRUD screens.
- When adding a module, ship the full vertical slice: Prisma model → migration → NestJS module (service/controller/guards/DTO) → shared Zod schema → frontend pages → seed data.
- Seed data must be realistic US trucking data (real-looking VINs, lanes like "Chicago, IL → Dallas, TX", plausible rates per mile).
