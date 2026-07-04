# PRODUCT.md — FleetOS AI

The product definition document. What FleetOS is, who it serves, how it's built, and where it's going.

**Document map:** this file defines the product. [Features.md](Features.md) is the canonical feature checklist (*what*, with build status). [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) is the phased roadmap (*when*). [CLAUDE.md](CLAUDE.md) holds working conventions for AI-assisted development. When these disagree, fix the disagreement — don't work around it.

---

## 1. Vision

**FleetOS AI is the operating system for the American trucking company.**

Trucking is a $900B+ US industry run mostly on disconnected software: a TMS from 2009, a GPS portal, QuickBooks, spreadsheets for settlements, and a filing cabinet for compliance. Every gap between those tools costs real money — empty miles, late invoices, missed renewals, unprofitable lanes nobody noticed.

FleetOS replaces the entire stack with one platform where every module shares the same data, the same live map, and the same AI. The AI layer is not a chatbot bolted on top; it reads documents, suggests dispatches, predicts failures, and answers questions across the whole operation — with human approval and full audit trails.

**North star:** a 20-truck company runs its entire back office — dispatch, tracking, billing, compliance, payroll — with one person and FleetOS.

**Positioning vs. competitors:** Samsara and Motive own hardware/telematics but are weak ERPs. AscendTMS and older TMSs manage records but have no AI and dated UX. Fleetio does maintenance only. FleetOS competes as the *unified, AI-native ERP* with best-in-class UX (Linear/Stripe quality) — hardware-agnostic, integrating with the telematics customers already have.

## 2. Target Customers

| Segment | Fleet size | What they buy FleetOS for |
|---|---|---|
| Owner-operators | 1–5 trucks | Replace spreadsheets; invoicing, IFTA, compliance in one place |
| Small carriers | 5–25 trucks | First real dispatch board; stop losing money between tools |
| Mid-size carriers | 25–150 trucks | AI dispatch, fuel/maintenance analytics, portals, multi-user RBAC |
| Enterprise carriers | 150–1000+ trucks | Scale, SSO, API, custom workflows, dedicated support |
| Freight brokers | n/a | Broker portal, carrier visibility, load posting |
| Dispatch services | manage others' fleets | Multi-company support, per-client isolation |
| Repair shops / vendors | n/a | Vendor portal: work orders, invoices, payments |

Primary market: US interstate trucking (FMCSA-regulated). Buyer personas: the owner (economics), the dispatcher (daily driver of the product), the safety manager (compliance), the accountant (money flows).

## 3. Problems Solved

1. **Tool fragmentation** — 5–10 disconnected systems → one platform, one login, one source of truth.
2. **Manual dispatch** — phone-and-whiteboard assignment → drag-and-drop board with AI suggestions and conflict blocking.
3. **Zero real-time visibility** — "call the driver" → live map, geofence events, shareable tracking links.
4. **Slow cash cycle** — delivery-to-invoice measured in weeks → same-day invoicing with PODs auto-attached.
5. **Compliance risk** — expired documents discovered at roadside → continuous audit-readiness with proactive alerts.
6. **Unknown economics** — profit discovered at tax time → live profit per mile, per lane, per truck, per customer.
7. **Fuel leakage** — theft and idle waste invisible → GPS-matched transactions and MPG analytics.
8. **Maintenance surprises** — breakdowns strand loads → preventive schedules + AI failure prediction.
9. **Paperwork drowning** — rate cons and BOLs re-keyed by hand → AI document extraction in seconds.
10. **Settlement pain** — weekend spreadsheet marathons → automated driver settlements from actual miles.

## 4. Core Modules

Twenty-one modules in six clusters (full detail: [Features.md](Features.md); marketing pages: `/modules/[slug]`).

- **Operations:** Dispatch · Load Management · GPS Tracking · Route Planning
- **Assets & People:** Fleet (trucks/trailers) · Driver Management · HR · Inventory/Parts
- **Money:** Accounting (invoices, settlements) · Fuel Management · Analytics · Reports
- **Risk:** Compliance & Safety · Maintenance · Document Management
- **Relationships:** CRM · Customer Portal · Broker Portal · Vendor Portal · Notifications
- **Intelligence:** AI Copilot · Automation Engine

Every module ships as a full vertical slice (DB → API → UI → seed data) and shares platform primitives: the data table, filter bar, entity timeline, document panel, and command palette.

## 5. User Roles (RBAC)

Built-in roles: **Super Admin** (platform staff), **Company Owner**, **Fleet Manager**, **Dispatcher**, **Driver**, **Safety Manager**, **Accountant**, **HR**, **Maintenance Manager**, **Broker** (external), **Customer** (external), **Vendor** (external), **Read Only**.

- Permissions follow a `module.action` scheme (`loads.create`, `invoices.approve`); roles are permission bundles.
- Companies can create custom roles with any permission combination.
- External roles (broker/customer/vendor) are hard-scoped to their own records — enforced at the query layer, not the UI.
- Every endpoint carries a permission guard; the UI hides what the user can't do.

## 6. Pricing Strategy

Per-truck-per-month SaaS, monthly or annual (2 months free annually). No per-user fees — seats are free so the whole team gets in the product (stickiness beats seat revenue at this stage).

| Plan | Price | Target | Key gates |
|---|---|---|---|
| Starter | $35/truck/mo | 1–10 trucks | Core ops: dispatch, tracking, invoicing, compliance alerts |
| Growth | $55/truck/mo | 10–150 trucks | + AI (dispatcher, copilot, document OCR), automation, portals, QuickBooks |
| Enterprise | Custom annual | 150+ trucks | + SSO, API, custom integrations, SLA, dedicated CSM |

- 14-day free trial, no credit card; demo-data sandbox on signup.
- AI usage: fair-use included per plan; heavy API-driven usage metered on Enterprise.
- Billing via Stripe; dunning, coupons, and trials managed in the SaaS admin panel (Phase 11).
- Pricing is a hypothesis until first 20 customers — revisit with real willingness-to-pay data.

## 7. Tech Stack

| Layer | Choice |
|---|---|
| Monorepo | Turborepo + pnpm workspaces |
| Frontend | Next.js (App Router), TypeScript strict, Tailwind CSS v4, shadcn/ui, Framer Motion |
| State/data | TanStack Query (server), Zustand (client), TanStack Table, dnd-kit |
| Backend | NestJS — modular monolith with microservice-ready boundaries |
| Database | PostgreSQL + Prisma · PostGIS (geo) · TimescaleDB (GPS telemetry, later) |
| Cache/queue | Redis + BullMQ |
| Realtime | Socket.IO via NestJS gateway |
| Auth | JWT + refresh rotation, TOTP 2FA, WebAuthn passkeys, org invitations |
| Files | S3-compatible storage (MinIO in dev) |
| AI | Claude API — `claude-fable-5` (reasoning), `claude-haiku-4-5` (high-volume extraction) |
| Maps | Mapbox GL JS behind a `MapProvider` abstraction |
| Billing / comms | Stripe · SendGrid · Twilio |
| Validation | Zod schemas in `packages/shared` — single source of truth for API + forms |
| Docs | OpenAPI generated from NestJS decorators |

## 8. Folder Architecture

```
apps/
  web/                    # Next.js — marketing site + all app portals
    src/app/              #   routes: marketing pages, (app)/dashboard, portals
    src/components/       #   ui/ (primitives), marketing/, per-module components
    src/lib/              #   utils, api client, marketing content data
  api/                    # NestJS backend
    src/<module>/         #   one folder per domain module:
                          #     *.module.ts / *.controller.ts / *.service.ts
                          #     dto/, guards/, events/
    prisma/               #   schema.prisma, migrations/, seed.ts
packages/
  shared/                 # Zod schemas, types, enums, constants (FE+BE)
  ui/                     # shared design-system components (extracted on 2nd consumer)
  config/                 # tsconfig/eslint/tailwind presets
```

Rules: web never imports from api (only HTTP + shared types). Domain logic lives in services, not controllers. New module = new NestJS module folder + shared schemas + web route group — never scattered across existing modules.

## 9. Development Roadmap

Full plan: [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md). Summary (web first; mobile deferred):

| Phase | Scope | Status |
|---|---|---|
| 0 | Monorepo, design system, app shell, CI | ✅ shipped |
| 0.5 | Marketing site (landing + module pages) | ✅ shipped |
| 1 | Auth, multi-tenancy, RBAC, audit logs | next |
| 2 | Fleet, trailers, drivers, documents, expiry alerts | |
| 3 | CRM-lite, loads, dispatch board, realtime | |
| 4 | GPS ingestion, live map, geofencing, routing | |
| 5 | Invoicing, settlements, fuel, QuickBooks | |
| 6 | Compliance, maintenance, parts inventory | |
| 7 | Executive dashboard, reports, notifications | |
| 8 | Portals (customer/broker/vendor), CRM full, HR | |
| 9 | AI platform (documents → copilot → dispatcher → predictions) | |
| 10 | Automation engine, integrations hub | |
| 11 | SaaS billing, admin panel, public API, hardening → **launch** | |

Sequencing principle: AI lands *after* the data it reasons over exists. Every phase ends demoable on the growing demo tenant ("Sunbelt Freight LLC").

## 10. Coding Standards

- **TypeScript strict everywhere.** No `any` without a comment explaining why. `noUncheckedIndexedAccess` stays on.
- **Zod at the boundary.** Every API input validated by a shared schema; types inferred, never hand-duplicated.
- **Vertical slices.** A feature PR contains schema + migration + API + UI + seed data + tests — not layers split across PRs.
- **Tenant isolation is non-negotiable.** Every tenant-owned query scoped by `companyId` via Prisma extension. New endpoints ship with a cross-tenant leak test.
- **Guards on every route.** `@RequirePermission('module.action')` — no unguarded endpoints except auth/webhooks.
- **Errors:** typed error responses `{ code, message, details? }`; never leak internals; 4xx for caller mistakes, 5xx only for ours.
- **Naming:** files kebab-case; components PascalCase; DB tables snake_case plural; enums as const string unions in `packages/shared`.
- **Money in integer cents. Distances/volumes as Decimal. Dates in UTC.** Formatting is a display concern.
- **Comments** explain constraints the code can't express — not what the next line does.
- **Tests:** services and money/compliance math unit-tested; tenant isolation and RBAC integration-tested; happy-path E2E per module. CI (build + typecheck + test) must be green to merge.
- **Reuse first.** Before building a table/filter/uploader/timeline, check the shared primitives. This ERP is 80% the same five screens.

## 11. Design System

Premium SaaS aesthetic — Linear / Stripe / Vercel / Ramp quality. Details:

- **Typography:** Inter, tight tracking on headings, `text-balance` for headlines.
- **Color:** neutral slate base; indigo→violet gradient as the brand accent; semantic green/red/amber for status. Dark and light mode first-class in the app (`next-themes`); marketing site commits to dark.
- **Surfaces:** rounded-xl/2xl cards, 1px `white/10`-style borders, subtle glassmorphism (`backdrop-blur` + translucent fills), generous whitespace.
- **Motion:** Framer Motion; fade-and-rise on scroll-into-view (once), hover lift on cards, 200–400ms, ease-out. Motion communicates hierarchy, never decorates for its own sake.
- **Loading:** skeleton loaders for all async content; zero layout shift; empty states and error states designed for every screen.
- **Interaction:** ⌘K command palette everywhere, keyboard shortcuts for dispatcher workflows, optimistic updates with rollback.
- **Accessibility:** semantic HTML, visible focus rings, ARIA on interactive components, WCAG 2.1 AA contrast target.
- **Data-heavy screens** (dispatch board, tables): density over whitespace — dispatchers live here 8 hours a day.

## 12. Database Conventions

- **IDs:** UUID v7 (time-ordered) primary keys, everywhere.
- **Tenancy:** every tenant-owned table has `companyId` + index. Scoping enforced by Prisma client extension — handlers cannot forget it.
- **Soft deletes:** `deletedAt` on business entities; hard delete only for GDPR erasure.
- **Timestamps:** `createdAt` / `updatedAt` on every table, UTC.
- **Money:** `Int` cents. **Miles/gallons:** `Decimal`. Never `Float` for anything business-meaningful.
- **Audit:** mutations on core entities (loads, invoices, drivers, trucks, settlements) write audit rows: actor, action, entity, before/after JSON, timestamp.
- **Enums:** Postgres enums mirrored as const unions in `packages/shared`; additive changes only, no renames.
- **Geo:** PostGIS `geography(Point)` for positions; GPS pings in an append-only telemetry table (TimescaleDB hypertable when volume demands).
- **Migrations:** Prisma Migrate; never edit applied migrations; destructive changes require an expand→migrate→contract sequence.
- **Naming:** snake_case tables/columns via `@@map`, camelCase in Prisma client.

## 13. API Conventions

- **Base:** `/api/v1/...` — versioned from day one. REST, resource-oriented, plural nouns (`/loads`, `/loads/:id/stops`).
- **Auth:** `Authorization: Bearer <JWT>`; short-lived access + rotating refresh tokens; API keys for machine access (Phase 11).
- **Lists:** cursor pagination (`?cursor=&limit=`), filtering (`?status=in_transit&driverId=`), sorting (`?sort=-createdAt`), and bulk operations from day one.
- **Responses:** `{ data, meta? }` envelope; errors `{ error: { code, message, details? } }` with stable machine-readable codes.
- **Validation:** every body/query parsed by the shared Zod schema; 422 with field-level details on failure.
- **Idempotency:** mutating endpoints accept `Idempotency-Key` (critical for payments/invoicing).
- **Webhooks (outbound):** signed (HMAC), retried with backoff, logged and replayable.
- **Realtime:** Socket.IO namespaces per concern (`/dispatch`, `/tracking`), rooms per company — tenancy enforced at the gateway.
- **Docs:** OpenAPI generated from decorators, published at `/api/docs`; breaking changes bump the version, never mutate v1.

## 14. Future AI Roadmap

Phase 9 order (value ÷ effort), then beyond:

1. **Document intelligence** — rate con/BOL/POD/receipt → structured records; OCR search. The daily-hours saver; ships first.
2. **Copilot with tools** — chat on every screen, tenant-scoped tool registry, natural-language reporting, all actions audited + approved.
3. **AI Dispatcher** — ranked driver/truck suggestions on the board (HOS, deadhead, cost); one-click accept; learns from dispatcher overrides.
4. **Predictions** — delivery-delay risk, maintenance failure, load/lane profitability, demand forecast.
5. **Coaching & anomaly detection** — driver safety summaries, fuel fraud flags, accident-risk indicators.
6. **Assistants** — email drafting, thread summarization, compliance Q&A, broker recommendations.

**Later horizons:** voice copilot for drivers (hands-free, mobile app era) · AI phone agent for check calls and broker updates · autonomous workflows (AI executes multi-step operations under spending/approval limits) · cross-fleet benchmarks from anonymized aggregate data (opt-in) · rate intelligence on lane pricing.

**AI principles:** grounded only in tenant data (strict isolation in the tool layer) · human approval for consequential actions · every AI read/write logged · per-tenant cost tracking · model-agnostic service layer (Claude today, swappable tomorrow) · AI degrades gracefully — the platform is fully usable with AI off.

## 15. Security & Compliance Posture

- Tenant isolation at the ORM layer + RLS as a second net; cross-tenant tests as a permanent CI gate.
- Encryption in transit (TLS) and at rest; secrets in env/secret manager, never in code.
- MFA (TOTP/passkeys), rate limiting, IP allowlists (Enterprise), SSO via SAML/OIDC (Enterprise).
- Full audit + activity logs; GDPR export/erasure flows; SOC 2-ready practices (logging, backups, access reviews) from Phase 1, certification pursued post-launch.

## 16. Success Metrics

- **Product:** time-to-first-dispatched-load < 1 day from signup · same-day invoice rate > 80% · AI suggestion acceptance > 50% · weekly active dispatchers / licensed dispatchers > 90%.
- **Business:** logo retention > 95% annually (switching costs are real once data lives here) · net revenue retention > 110% via truck-count growth · CAC payback < 12 months.
- **Quality:** p95 API < 300ms · dispatch board updates < 1s end-to-end · zero cross-tenant incidents, ever.

## 17. Non-Goals (for now)

- **No mobile apps** until the web platform ships (APIs stay mobile-ready).
- **No hardware.** We integrate with ELD/GPS vendors; we don't build devices.
- **No freight brokerage/marketplace** — we serve carriers and brokers; we don't broker freight ourselves.
- **No international operations** (Canada/Mexico cross-border later; US-first correctness now).
- **No on-premise deployments.** Cloud multi-tenant only.
- **No custom per-customer forks.** Configurability yes; forks never.

## 18. Domain Glossary

| Term | Meaning |
|---|---|
| BOL | Bill of Lading — the freight contract/receipt document |
| POD | Proof of Delivery — signed confirmation the load arrived |
| Rate con | Rate confirmation — broker's contract stating the agreed rate |
| Deadhead | Miles driven empty (no revenue) |
| HOS | Hours of Service — FMCSA driving-time limits (11h driving / 14h window / 70h per 8 days) |
| ELD | Electronic Logging Device — federally mandated HOS recorder |
| DVIR | Driver Vehicle Inspection Report — daily pre/post-trip inspection |
| IFTA | International Fuel Tax Agreement — quarterly fuel tax by state miles |
| IRP | International Registration Plan — apportioned plate registration |
| CSA | Compliance, Safety, Accountability — FMCSA carrier scoring |
| DOT / MC number | Federal operating authority identifiers |
| CDL | Commercial Driver's License (classes A/B/C) |
| Settlement | Driver's pay statement for a period |
| Lane | A recurring origin→destination route |
