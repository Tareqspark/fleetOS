# FleetOS AI — Complete Feature List

The single source of truth for product scope. Every feature from the product spec, organized by module.
Legend: `[ ]` not started · `[~]` in progress · `[x]` shipped. **Phase** column maps to `DEVELOPMENT_PLAN.md`.
Scope note: **web app only for now** — the Driver Mobile App section is deferred but its server-side APIs are built alongside the related web modules.

---

## 1. Platform Foundation (Phase 0) — ✅ shipped

- [x] Turborepo monorepo (Next.js web, NestJS API, shared Zod package)
- [x] Design system base: dark mode, light mode, Inter typography, rounded cards
- [x] App shell: sidebar navigation, topbar, notifications button, user avatar
- [x] Command palette (⌘K) with go-to navigation
- [x] Swagger/OpenAPI docs at `/api/docs`
- [x] docker-compose (PostGIS + Redis), GitHub Actions CI
- [ ] Skeleton loading states (rolled out per module)
- [ ] Global search everywhere (entity search lands with each module)
- [ ] Keyboard shortcuts beyond ⌘K
- [ ] Multi-language ready (i18n layer; English first)
- [ ] Accessibility pass (WCAG 2.1 AA target)
- [ ] Drag & drop, live updates, charts, interactive maps (land with their modules)

## 2. Authentication & Identity (Phase 1)

- [ ] Email + password login with session management
- [ ] Registration with email verification
- [ ] Forgot / reset password
- [ ] Two-factor authentication (TOTP authenticator apps)
- [ ] Passkeys (WebAuthn)
- [ ] Social login (Google, Microsoft)
- [ ] JWT access + refresh token rotation
- [ ] Organization invitations (email invite → join company)
- [ ] Multi-company support (one user in many companies, company switcher)
- [ ] Device/session list with remote logout

## 3. Multi-Tenant Architecture (Phase 1)

- [ ] Company-level data isolation (every query tenant-scoped at ORM layer)
- [ ] Tenant hierarchy: Company → Branch → Department → Team → Region
- [ ] Per-company settings: timezone, units, branding, fiscal year
- [ ] Cross-tenant leak tests as a permanent CI gate

## 4. Roles & Permissions — RBAC (Phase 1)

- [ ] Built-in roles: Super Admin, Company Owner, Fleet Manager, Dispatcher, Driver, Safety Manager, Accountant, HR, Maintenance Manager, Broker, Customer, Vendor, Read Only
- [ ] Custom roles with granular permission matrix (`module.action` scheme)
- [ ] API guards on every endpoint + permission-aware UI (hidden nav/buttons)
- [ ] Audit log: who / what / when / before / after on all mutating actions

## 5. Fleet Management — Trucks (Phase 2)

- [ ] Truck profile: VIN (17-char validated), plate, DOT #, MC #, make, model, year, engine, transmission, axle config, fuel type
- [ ] Odometer & mileage tracking (manual + ELD-fed)
- [ ] Status lifecycle: active / in transit / idle / maintenance / out of service / sold
- [ ] Ownership & lease records
- [ ] Insurance, registration, inspection, warranty records with expiry alerts
- [ ] Assigned driver, assigned trailer, GPS device, ELD device, fuel card links
- [ ] Maintenance & repair history (fed by Phase 6 module)
- [ ] Photos, documents, attachments per truck
- [ ] QR code / barcode label per vehicle
- [ ] Vehicle timeline (every event in one feed)

## 6. Trailer Management (Phase 2)

- [ ] Types: dry van, flatbed, reefer, tanker, lowboy, container, chassis
- [ ] Specifications & capacity (length, weight rating, temp range for reefers)
- [ ] Inspection & maintenance records
- [ ] Documents, availability status, assignment history

## 7. Driver Management (Phase 2)

- [ ] Driver profile with photo, contact, emergency contacts, notes
- [ ] CDL: number, class (A/B/C), endorsements, expiry with alerts
- [ ] Medical card, drug tests, background checks, training records
- [ ] Safety score & violations/incidents history
- [ ] Availability status, current location, assigned truck/trailer
- [ ] Payroll settings (pay type: per-mile / percentage / hourly / flat)
- [ ] Performance metrics (on-time %, MPG, safety events)
- [ ] Documents wallet + driver timeline
- [ ] Driver app account provisioning (server-side; app itself deferred)

## 8. Document Management (Phase 2, grows continuously)

- [ ] Central store: insurance, registration, permits, invoices, bills, POD, BOL, photos, videos, contracts, certificates
- [ ] Folders, tags, link-to-any-entity
- [ ] Version history
- [ ] Expiry dates + renewal alert engine
- [ ] OCR full-text search (AI phase)
- [ ] S3 storage, virus scanning, signed URLs

## 9. CRM (Phase 3 lite → Phase 8 full)

- [ ] Customers, shippers, receivers, brokers with facility addresses
- [ ] Contacts & activity log (emails, calls, meetings)
- [ ] Leads & pipeline (Phase 8)
- [ ] Contracts & documents
- [ ] Customer portal access management

## 10. Load Management (Phase 3)

- [ ] Create / import / duplicate / recurring loads
- [ ] Pickup, delivery, multiple stops with appointment windows
- [ ] Weight, commodity, temperature requirements, hazmat flags
- [ ] Special instructions, reference numbers
- [ ] Broker / customer linkage, rate, miles, fuel estimate, revenue
- [ ] Status workflow: draft → booked → dispatched → in transit → delivered → invoiced → paid (+ cancelled)
- [ ] Load timeline, attachments (rate con, BOL, POD)
- [ ] Per-load profit analysis (revenue − fuel − driver pay), profit per mile
- [ ] Invoices & payments linkage (Phase 5)

## 11. Dispatch Center (Phase 3)

- [ ] Drag-and-drop dispatch board (loads ↔ drivers/trucks/trailers)
- [ ] Calendar view & timeline view
- [ ] Conflict detection: double-booking, expired CDL/medical, truck in maintenance, HOS
- [ ] Automatic / AI-suggested assignment (AI phase)
- [ ] Driver status column, live GPS positions, ETAs
- [ ] Internal messaging & alerts
- [ ] Real-time board sync across sessions (WebSockets)

## 12. GPS Tracking & Telematics (Phase 4)

- [ ] Real-time truck tracking on clustered live map
- [ ] Provider-agnostic ingestion (Samsara/Motive ELD adapters + dev simulator)
- [ ] Route replay per truck/load
- [ ] Geofencing with enter/exit events
- [ ] Alerts: speeding, idle, unauthorized movement
- [ ] Driver behavior: harsh braking, rapid acceleration, overspeed
- [ ] Engine status, battery, fuel level, reefer temperature, door status
- [ ] Trailer tracking
- [ ] Live traffic overlay

## 13. Route Planning (Phase 4)

- [ ] Truck-legal routing: bridge/tunnel restrictions, hazmat routes, road closures
- [ ] AI route optimization (weather + traffic aware)
- [ ] Automatic ETA with delay alerts
- [ ] POI layers: truck parking, rest stops, fuel stations, repair shops
- [ ] Delivery-window aware planning

## 14. Maintenance Management (Phase 6)

- [ ] Preventive schedules: oil, brakes, tires, battery, transmission, inspections (mileage/time triggers)
- [ ] Work orders & repair orders with mechanic/vendor assignment
- [ ] Maintenance calendar
- [ ] Cost tracking rolled up to truck & fleet level
- [ ] Warranty tracking
- [ ] Parts consumption from warehouse inventory
- [ ] Predictive maintenance / AI failure prediction (AI phase)

## 15. Fuel Management (Phase 5)

- [ ] Fuel card integrations (EFS, WEX, Comdata — CSV import + API)
- [ ] Transaction ledger matched to trucks/drivers
- [ ] MPG & fuel consumption analytics per truck/driver
- [ ] Idle fuel waste tracking
- [ ] Fuel theft detection (transaction location vs GPS position)
- [ ] State-by-state mileage/fuel ledger (IFTA-ready)
- [ ] Fuel reports, forecast, optimization & best-station recommendation (AI phase)

## 16. Compliance & Safety (Phase 6)

- [ ] Compliance dashboard (FMCSA / DOT oriented)
- [ ] Driver qualification files, drug-test program tracking
- [ ] HOS violation log (from ELD data), DVIR records
- [ ] IFTA quarterly reports, IRP renewals
- [ ] Inspections, violations, accidents & incident management
- [ ] CSA score tracking
- [ ] Renewal alerts & document expiry across all entities
- [ ] Full audit logs

## 17. Accounting & Finance (Phase 5)

- [ ] Invoices: generate from delivered loads, PDF, email delivery, aging, partial payments
- [ ] Bills & expenses with categories and approval flow
- [ ] Driver settlements: per-mile / percentage / hourly / flat, deductions, advances, statements
- [ ] Broker & customer payment tracking
- [ ] Payroll (staff — Phase 8 HR ties in)
- [ ] Taxes: fuel tax (IFTA), 1099/W-2 exports
- [ ] General ledger
- [ ] QuickBooks integration; Xero later
- [ ] Financial reports: P&L, per-truck / per-driver / per-lane / per-customer profitability, cost per mile

## 18. Executive Dashboard & Analytics (Phase 7)

- [ ] KPIs: today's/monthly revenue, profit, expenses, truck utilization, idle trucks, available drivers, loads in transit/delivered, fuel cost, profit per mile, cost per mile, fuel efficiency
- [ ] Alert cards: maintenance, insurance/registration/inspection expiry, driver violations, accidents, ETA delays
- [ ] Live truck mini-map, recent activity feed, upcoming tasks
- [ ] AI insights panel
- [ ] Customizable card layout (drag to rearrange)

## 19. Reports Center (Phase 7)

- [ ] Report library: revenue, profit, fuel, driver, maintenance, safety, compliance, fleet, dispatch, payroll, invoices, broker, customer, vehicle, utilization
- [ ] Export PDF / Excel / CSV
- [ ] Scheduled reports by email
- [ ] Natural-language report builder (AI phase)

## 20. Notification Center (Phase 7)

- [ ] Unified in-app inbox
- [ ] Channels: email, SMS (Twilio), push (mobile later), Slack, Microsoft Teams, webhooks; WhatsApp later
- [ ] Per-user notification preferences
- [ ] Custom alert rules & scheduled notifications

## 21. Portals (Phase 8)

**Broker portal:** create load, live tracking, documents, POD, invoices, payments, messaging, history, notifications
**Customer portal:** track shipment + ETA, documents, invoices, payments, claims, support tickets, history
**Vendor portal:** work orders, invoice upload, payment status, ratings (repair shops, fuel vendors, tow companies, inspection vendors)

- [ ] Scoped external accounts with restricted roles
- [ ] All three portals share the web app with separate route groups

## 22. HR Module (Phase 8 v1; recruitment/benefits later)

- [ ] Employee records (non-driver staff), documents, assets
- [ ] Attendance & leave
- [ ] Payroll link to accounting
- [ ] Performance reviews, training (later)
- [ ] Recruitment & benefits (deferred)

## 23. Warehouse / Parts Inventory (Phase 6 v1)

- [ ] Parts, tires, oil, filters with stock levels & reorder points
- [ ] Purchase orders, receiving, transfers
- [ ] Barcode / QR labels
- [ ] Suppliers directory
- [ ] Consumption tied to work orders

## 24. AI Platform (Phase 9) — flagship

**Document intelligence:** rate-con/BOL/POD/fuel-receipt extraction to structured data, OCR search, auto-create load from PDF
**Copilot:** chat assistant on every screen with tenant-data tool access, natural-language reporting, voice commands (later)
**AI Dispatcher:** best driver/truck suggestions, schedule optimization, deadhead/empty-mile reduction, one-click accept
**Predictions:** delivery delays, predictive maintenance, accident risk, load & lane profitability, demand forecast
**Analysis:** fuel anomaly/fraud detection, profit analysis, customer insights, broker recommendation, best fuel station
**Assistants:** email drafting, conversation summarization, driver & safety coaching, compliance assistant, insurance renewal reminders
**Deferred:** voice assistant, AI phone calling

- [ ] AI service layer: tool registry, per-tenant guardrails, prompt/response logging, per-tenant cost tracking, human-approval flows

## 25. Automation Engine (Phase 10)

- [ ] Visual workflow builder: triggers → conditions → actions (n8n-style)
- [ ] Triggers: entity events (load created/status changed, document expiring), schedules, webhooks, inbound email, database events
- [ ] Actions: assign driver, send SMS/email/Slack, generate invoice, notify customer, schedule maintenance, create work order, call webhook, run AI step
- [ ] Template gallery + execution log with retries

## 26. Integrations Hub (Phases 4–10, as needed)

- [ ] Maps: Mapbox (primary), Google Maps, OpenStreetMap fallback
- [ ] Accounting: QuickBooks, Xero
- [ ] Comms: Twilio (SMS), SendGrid (email), Slack, Teams
- [ ] Payments: Stripe, PayPal (later)
- [ ] Storage: AWS S3 (primary), Google Drive / Dropbox / OneDrive export
- [ ] Telematics: ELD providers (Samsara, Motive), fuel cards, toll systems
- [ ] Freight: load boards (DAT, Truckstop), broker APIs
- [ ] Other: weather APIs, calendar APIs

## 27. SaaS Admin Panel (Phase 11)

- [ ] Plans, subscriptions, billing (Stripe), coupons, trials, dunning
- [ ] Organization & user management, impersonation (audited)
- [ ] Feature flags, announcements
- [ ] Support tickets
- [ ] System health, backups, webhook logs, API keys
- [ ] Platform analytics & revenue dashboard

## 28. Security & Compliance (Phase 1 baseline, Phase 11 hardening)

- [ ] RBAC everywhere, JWT + OAuth, MFA
- [ ] Encryption at rest & in transit
- [ ] Rate limiting, IP restrictions
- [ ] SSO (SAML/OIDC) for enterprise
- [ ] Audit & activity logs
- [ ] GDPR: data export & erasure
- [ ] SOC2-ready architecture: logging, backups, monitoring, access reviews

## 29. Public API (Phase 11)

- [ ] REST API with API keys, pagination, filtering, sorting, bulk operations
- [ ] Webhooks with signing & retry
- [ ] OpenAPI documentation, SDK-ready design
- [ ] GraphQL gateway (optional, demand-driven)

## 30. Performance & Scale Targets

- [ ] Horizontal scaling; microservice-ready module boundaries
- [ ] GPS ingestion designed for millions of updates/day (TimescaleDB path)
- [ ] Real-time sync via WebSockets at fleet scale
- [ ] High availability deployment; load tested at 1,000-truck dispatch board

## 31. Deferred — Mobile Apps (post-launch)

Driver app first: login, accept/reject load, navigation, DVIR inspection, fuel receipt / photo / POD / BOL upload, messaging, voice notes, emergency button, break timer, HOS clocks, offline mode, push notifications, digital signature, document scanner. Then dispatcher / fleet manager / owner / maintenance apps.
