# FleetOS AI — Web App Development Plan

Scope: **website + web app only**. Mobile apps come later — but every API is built mobile-ready (token auth, versioned REST, push-notification hooks stubbed).

Phases are dependency-ordered. Each phase ends with a working, demoable increment.

---

## Phase 0 — Foundation (Weeks 1–2)

Goal: monorepo that runs end-to-end with CI, design system, and the platform primitives every module needs.

- Turborepo + pnpm: `apps/web` (Next.js), `apps/api` (NestJS), `packages/shared|ui|config`
- PostgreSQL + Prisma + Redis via `docker-compose` for local dev
- Design system in `packages/ui`: tokens (colors, spacing, typography), dark/light theming, base components (Button, Input, Card, Dialog, Sheet, Toast, Badge, Skeleton, Tabs, DataTable, EmptyState)
- App shell: sidebar navigation, topbar, command palette (cmd+k), notifications drawer, responsive layout
- Platform primitives in `apps/api`: config, logging, error handling, request-context (tenant + user), OpenAPI setup, health checks
- CI: lint + typecheck + test + build on every push
- Seed script scaffold

**Exit criteria:** `pnpm dev` boots web + api; a themed shell page renders; CI green.

## Phase 1 — Auth, Tenancy & RBAC (Weeks 3–5)

Goal: the multi-tenant security core everything else sits on. This phase cannot be rushed.

- Registration, login, forgot password, email verification (SendGrid)
- JWT access + refresh token rotation; session management
- 2FA (TOTP) and passkeys (WebAuthn); social login (Google, Microsoft)
- Organizations: create company, invite members, accept invitations, multi-company membership + company switcher
- Tenant hierarchy models: Company → Branch → Department → Team → Region
- Prisma tenant-scoping middleware (every query auto-scoped by `companyId`)
- RBAC: built-in roles, custom roles, granular permission matrix, `@RequirePermission` guard, frontend `<Can>` component + permission-aware nav
- Audit log infrastructure (who/what/when/before/after)
- User profile + company settings pages

**Exit criteria:** two seeded companies cannot see each other's data (proven by tests); permissions gate both API and UI.

## Phase 2 — Fleet & Driver Core (Weeks 6–9)

Goal: the master data of the ERP — trucks, trailers, drivers, documents.

- **Trucks**: full profile (VIN, plate, DOT/MC, make/model/year, engine, transmission, axle, fuel type, odometer, ownership/lease, status), photos, QR/barcode, vehicle timeline
- **Trailers**: types (dry van, flatbed, reefer, tanker, lowboy, container, chassis), specs, capacity, availability, assignment history
- **Drivers**: profile, CDL info (class, expiry), medical card, drug tests, background check, training records, emergency contacts, notes, timeline, availability, safety-score placeholder
- **Assignments**: driver ↔ truck ↔ trailer with conflict detection and history
- **Document management v1**: upload to S3, folders, tags, version history, link documents to any entity, expiry dates on documents
- **Expiry engine**: renewal alerts for insurance, registration, inspection, CDL, medical card (in-app + email)
- Shared CRUD primitives hardened here: DataTable with server pagination/filter/sort/bulk-select, filter bar, entity detail layout with tabs + timeline, document panel

**Exit criteria:** a fleet manager can fully manage trucks, trailers, drivers, and their documents, and gets expiry alerts.

## Phase 3 — Loads & Dispatch (Weeks 10–14)

Goal: the operational heart — this is what dispatchers live in all day.

- **CRM-lite first** (dependency): customers, brokers, shippers/receivers, contacts, facility addresses
- **Loads**: create/import/duplicate/recurring; pickup + delivery + multi-stop; weight, commodity, temperature, hazmat flags; appointments; special instructions; rate, miles, fuel estimate, revenue; status workflow (draft → booked → dispatched → in transit → delivered → invoiced → paid); attachments (BOL, rate confirmation); load timeline
- **Dispatch board**: drag-and-drop (dnd-kit) assignment of loads to driver/truck/trailer; calendar and timeline views; conflict detection (double-booking, expired CDL, truck in maintenance); driver status column
- **Live updates**: WebSocket gateway — board and load statuses update in real time across sessions
- **Internal messaging v1**: dispatcher ↔ driver-record threads (web-based; feeds the future mobile app)
- Load profitability snapshot: revenue − (fuel estimate + driver pay estimate) per load, profit per mile

**Exit criteria:** full load lifecycle from creation through delivered, on a live drag-and-drop board, with conflicts blocked.

## Phase 4 — Tracking, Maps & Routing (Weeks 15–18)

Goal: the live map and location intelligence. (Without the mobile app, positions come from ELD/GPS provider APIs + a simulator.)

- Mapbox integration behind a `MapProvider` abstraction
- GPS ingestion service: provider-agnostic webhook/poll adapters (Samsara, Motive ELD APIs), plus a **simulator** for dev/demo
- Telemetry storage (TimescaleDB or partitioned Postgres): position, speed, engine status, fuel level, temperature
- Live fleet map: clustered truck markers, status colors, truck detail popover, follow mode
- Route replay per truck/load
- Geofencing: zones, enter/exit events, unauthorized-movement alerts
- Behavior alerts: speeding, harsh braking, excessive idle
- **Route planning v1**: truck-legal routing (bridge/tunnel/hazmat restrictions via routing API), ETA calculation with traffic, automatic ETA-delay alerts, fuel stops / rest stops / truck parking layers
- Trailer tracking

**Exit criteria:** live map shows simulated + real feeds; geofence and speed alerts fire; loads show live ETA.

## Phase 5 — Money: Accounting, Fuel & Payroll (Weeks 19–23)

Goal: get paid, pay drivers, know your numbers.

- **Invoicing**: generate from delivered loads, PDF rendering, email delivery, payment status, partial payments, aging
- **Expenses & bills**: categories, vendor bills, receipts, approval flow
- **Driver settlements**: pay structures (per mile, percentage, hourly, flat), deductions, advances, settlement statements
- **Fuel management**: fuel card transaction import (EFS/WEX/Comdata CSV + API adapters), MPG per truck/driver, idle fuel waste, theft-detection heuristics (transaction location vs GPS position), IFTA-ready fuel/mileage-by-state ledger
- **Financial reports**: P&L, revenue/profit per truck, per driver, per lane, per customer; cost per mile / profit per mile
- QuickBooks integration (OAuth, chart-of-accounts mapping, invoice/payment sync); Xero later
- Stripe for receiving customer payments (optional per-tenant)

**Exit criteria:** delivered load → invoice → payment → driver settlement, with accurate per-mile economics on the dashboard.

## Phase 6 — Compliance & Maintenance (Weeks 24–27)

Goal: keep the fleet legal and running.

- **Compliance dashboard**: FMCSA/DOT-oriented — driver qualification files, drug-test tracking, HOS violation log (from ELD data), DVIR records, inspection tracking, violation/accident/incident management, CSA score tracking
- **IFTA**: quarterly fuel-tax reports from the Phase 5 state-mileage ledger; IRP renewals
- **Maintenance**: preventive schedules (mileage/time-based — oil, brakes, tires, battery, transmission, inspections), work orders, repair orders, mechanic/vendor assignment, cost tracking, maintenance calendar, warranty tracking
- **Warehouse/parts v1**: parts inventory (tires, oil, filters), stock levels, purchase orders, receiving, barcode/QR labels, suppliers
- Vendor management (repair shops, tow, inspection, fuel vendors)

**Exit criteria:** compliance dashboard shows real statuses with renewal alerts; maintenance work orders flow from schedule → completion → cost on the truck's record.

## Phase 7 — Executive Dashboard, Reports & Notifications (Weeks 28–30)

Goal: now that all data exists, surface it.

- **Executive dashboard**: revenue (today/month), profit, expenses, truck utilization, idle trucks, available drivers, loads in transit/delivered, maintenance + expiry alerts, fuel cost, violations, ETA delays, profit/cost per mile, MPG trend, live mini-map, activity feed, upcoming tasks — customizable card layout
- **Report center**: revenue, profit, fuel, driver, maintenance, safety, compliance, dispatch, payroll, utilization; export PDF/Excel/CSV; scheduled email reports
- **Notification center**: unified in-app inbox + channels (email, SMS via Twilio, Slack, Teams, webhooks), per-user preferences, custom alert rules

**Exit criteria:** owner logs in and understands the business in 30 seconds; any report exports and can be scheduled.

## Phase 8 — Portals & CRM Completion (Weeks 31–34)

Goal: external-facing surfaces (all web).

- **CRM full**: leads, pipeline, activities (emails/calls/meetings), contracts
- **Customer portal**: track shipment + ETA, documents, invoices, payments, claims, support tickets
- **Broker portal**: post/create loads, live tracking, documents, POD, invoices, messaging
- **Vendor portal**: work orders, invoice upload, payment status, ratings
- Portal auth = scoped external accounts with heavily restricted RBAC roles
- **HR module v1**: employees (non-driver staff), attendance, leave, documents, assets

**Exit criteria:** a customer can self-serve tracking and invoices without calling dispatch.

## Phase 9 — AI Platform (Weeks 35–40)

Goal: the differentiator. Built on Claude API; every feature grounded in tenant data via an internal tool-use layer.

Priority order (value ÷ effort):
1. **Document intelligence** — extract rate confirmations, BOL, POD, fuel receipts from PDF/image into structured data (biggest daily time-saver); OCR search on the document store
2. **AI Copilot** — chat assistant on every screen with tool access to tenant data ("show unprofitable lanes last month", "which trucks have inspections due"), natural-language reporting
3. **AI Dispatcher** — recommend best driver/truck per load (HOS remaining, location, deadhead, cost), schedule optimization, empty-mile reduction; suggestions surface on the dispatch board with one-click accept
4. **Predictions** — delivery-delay prediction, predictive maintenance from telemetry + history, load-profitability prediction before booking, lane profitability, demand forecast
5. **Coaching & safety** — driver-behavior summaries, safety coaching notes, accident-risk flags
6. **Assistants** — email assistant (drafts to brokers/customers), conversation summarization, fraud/fuel-anomaly detection, broker recommendation
7. Voice/phone AI — deferred to post-launch

Infrastructure: AI service module in `apps/api` with tool registry, per-tenant data guardrails, prompt/response logging, cost tracking per tenant, human-approval flows for actions.

**Exit criteria:** dispatcher accepts AI load assignments; rate cons auto-create loads from PDF; copilot answers cross-module questions correctly.

## Phase 10 — Automation Engine & Integrations Hub (Weeks 41–44)

- Workflow builder (trigger → conditions → actions), n8n-style visual editor
- Triggers: entity events (load created, status changed, document expiring), schedules, webhooks, inbound email
- Actions: assign, notify (SMS/email/Slack), generate invoice, create work order, call webhook, run AI step
- Template gallery (e.g., "load delivered → generate invoice → email customer → notify Slack")
- Integrations hub UI: connect/disconnect QuickBooks, ELD providers, fuel cards, Stripe, Twilio, Slack, Google Drive/Dropbox, load boards (DAT/Truckstop), weather
- Execution log with retries and error surfacing

## Phase 11 — SaaS Admin, Billing & Hardening (Weeks 45–48)

- Subscription billing (Stripe): plans by fleet size/features, trials, coupons, seat counting, dunning
- Super-admin panel: organizations, users, feature flags, support tickets, announcements, system health, webhook logs, revenue analytics, impersonation (audited)
- Public REST API v1 + API keys + webhooks + OpenAPI docs; GraphQL gateway (optional, if demanded)
- Security hardening: rate limiting, IP restrictions, SSO (SAML/OIDC) for enterprise, penetration-test pass, SOC2-ready logging/backup posture, GDPR data-export/erasure
- Performance: load testing (GPS ingest at scale, dispatch board with 1000 trucks), query optimization, read replicas plan, horizontal-scaling runbook
- Marketing website + onboarding flow (guided setup wizard, demo data)

**Exit criteria: production launch.**

---

## Later (explicitly deferred)

- **Mobile apps** (Driver first — HOS, DVIR, POD upload, navigation, offline mode; then dispatcher/manager apps). APIs from Phases 1–4 are already designed for it.
- Voice/phone-call AI, WhatsApp channel
- Xero, additional load boards, toll systems
- Full recruitment/benefits HR, multi-language rollout, GraphQL public API

## Cross-Cutting Rules (every phase)

- Vertical slices: schema → API → shared Zod types → UI → seed data → tests, per module
- Tenant-isolation + permission tests are mandatory for every new endpoint
- Skeleton loading + empty states + error states for every screen — no exceptions
- Keep OpenAPI docs and seed data current as modules land
- Demo tenant ("Sunbelt Freight LLC", ~15 trucks) grows with every phase so the product is always demoable

## Suggested Team Shape

Solo/small team: follow phases sequentially (~11–12 months to launch). With 3–4 devs: Phases 4, 5, 6 can run in parallel after Phase 3, compressing to ~7–8 months. Phase 1's tenancy/RBAC core should be built by the most senior engineer regardless.
