import type { LucideIcon } from "lucide-react";
import {
  Truck,
  Users,
  Container,
  Route,
  MapPin,
  Wrench,
  Fuel,
  Receipt,
  Contact,
  ShieldCheck,
  BarChart3,
  Workflow,
  UserCircle,
  Handshake,
  Store,
  Briefcase,
  Boxes,
  FileText,
  PieChart,
  BellRing,
  Bot,
} from "lucide-react";

export interface MarketingModule {
  slug: string;
  name: string;
  icon: LucideIcon;
  short: string;
  tagline: string;
  description: string;
  features: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
}

export const marketingModules: MarketingModule[] = [
  {
    slug: "dispatch",
    name: "Dispatch",
    icon: Route,
    short: "Drag-and-drop dispatch board with AI suggestions and conflict detection.",
    tagline: "Dispatch your whole fleet before your coffee gets cold",
    description:
      "A modern drag-and-drop dispatch board that sees everything: driver hours, truck locations, trailer availability, and load requirements. Assign in seconds — FleetOS blocks the mistakes before they happen.",
    features: [
      { title: "Drag-and-drop board", desc: "Assign loads to drivers, trucks, and trailers visually — no forms, no phone tag." },
      { title: "Conflict detection", desc: "Double-bookings, expired CDLs, trucks in maintenance, and HOS limits are blocked automatically." },
      { title: "AI assignment suggestions", desc: "The AI Dispatcher recommends the best driver and truck for every load based on location, hours, and cost." },
      { title: "Calendar & timeline views", desc: "See the week ahead per driver or per truck, and spot gaps before they become empty miles." },
      { title: "Live statuses & ETAs", desc: "Every load updates in real time across every dispatcher's screen — no refresh, no version conflicts." },
      { title: "Built-in messaging", desc: "Message drivers about their loads right from the board, with full conversation history per load." },
    ],
    stats: [
      { value: "80%", label: "less time spent dispatching" },
      { value: "14%", label: "average deadhead reduction" },
      { value: "0", label: "double-bookings possible" },
    ],
  },
  {
    slug: "fleet",
    name: "Fleet Management",
    icon: Truck,
    short: "Every truck and trailer — documents, inspections, and full lifecycle history.",
    tagline: "Every truck's entire life, on one screen",
    description:
      "VIN to sale, FleetOS keeps the complete record of every truck and trailer: specs, ownership, insurance, registration, inspections, assignments, and costs — with alerts before anything expires.",
    features: [
      { title: "Complete vehicle profiles", desc: "VIN, plates, DOT/MC numbers, engine, transmission, ownership, and lease records in one place." },
      { title: "Expiry alerts", desc: "Insurance, registration, and inspection renewals surface weeks ahead — never a lapsed document again." },
      { title: "Vehicle timeline", desc: "Every event — assignments, repairs, inspections, incidents — in one chronological feed per truck." },
      { title: "Documents & photos", desc: "Titles, insurance cards, inspection reports, and condition photos attached directly to each unit." },
      { title: "QR code labels", desc: "Scan a code on the truck to pull up its full profile from any phone." },
      { title: "Utilization & cost tracking", desc: "Know which trucks earn and which ones drain — revenue and cost per unit, always current." },
    ],
    stats: [
      { value: "100%", label: "document compliance visibility" },
      { value: "1", label: "source of truth per vehicle" },
      { value: "0", label: "surprise expirations" },
    ],
  },
  {
    slug: "drivers",
    name: "Driver Management",
    icon: Users,
    short: "CDL, medical cards, safety scores, and settlements in one profile.",
    tagline: "Keep every driver qualified, paid, and on the road",
    description:
      "Complete driver files that stay audit-ready by themselves: CDL and medical expiry tracking, drug tests, training, safety scores, and pay — connected to dispatch so unqualified drivers are never assigned.",
    features: [
      { title: "Qualification files", desc: "CDL class, endorsements, medical cards, drug tests, and background checks with automatic expiry alerts." },
      { title: "Safety scores", desc: "Violations, incidents, and telematics events roll up into a per-driver safety score you can coach against." },
      { title: "Pay & settlements", desc: "Per-mile, percentage, hourly, or flat pay structures feed directly into settlement statements." },
      { title: "Availability & assignment", desc: "See who's available, where they are, and what they're qualified to haul — live." },
      { title: "Performance metrics", desc: "On-time percentage, MPG, and revenue per driver, tracked automatically from real operations." },
      { title: "Driver timeline", desc: "Every load, document, violation, and note in one chronological record." },
    ],
    stats: [
      { value: "100%", label: "DQ-file audit readiness" },
      { value: "30s", label: "to answer 'who can take this load?'" },
      { value: "0", label: "unqualified assignments" },
    ],
  },
  {
    slug: "loads",
    name: "Load Management",
    icon: Container,
    short: "From rate con to paid invoice — the full load lifecycle with profit tracking.",
    tagline: "Every load, from rate con to cash in the bank",
    description:
      "Create loads in seconds — or let AI create them from a rate confirmation PDF. Track pickups, deliveries, multi-stop routes, documents, and profitability through the entire lifecycle.",
    features: [
      { title: "AI load creation", desc: "Drop a rate con PDF and FleetOS extracts the lane, rate, dates, and broker into a ready-to-dispatch load." },
      { title: "Multi-stop support", desc: "Pickups, deliveries, and intermediate stops with appointment windows and special instructions." },
      { title: "Full status workflow", desc: "Draft → booked → dispatched → in transit → delivered → invoiced → paid, with a timeline of every change." },
      { title: "Profit per load", desc: "Revenue minus fuel and driver pay, computed live — know your margin before you book." },
      { title: "Recurring & duplicate loads", desc: "Standing lanes and repeat customers take one click, not fifteen minutes of data entry." },
      { title: "Documents attached", desc: "Rate cons, BOLs, and PODs live on the load — invoicing pulls them automatically." },
    ],
    stats: [
      { value: "15s", label: "from rate con PDF to booked load" },
      { value: "$/mi", label: "live profit on every load" },
      { value: "100%", label: "paperwork attached at invoicing" },
    ],
  },
  {
    slug: "gps-tracking",
    name: "GPS Tracking",
    icon: MapPin,
    short: "Real-time positions, geofencing, route replay, and driver behavior.",
    tagline: "Know where every truck is — without calling anyone",
    description:
      "One live map for the whole fleet, fed by your ELD and GPS providers. Geofences, alerts, route replay, and driver behavior — visibility your customers can share with a tracking link.",
    features: [
      { title: "Live fleet map", desc: "Every truck and trailer with status, speed, and assigned load — clustered, searchable, real time." },
      { title: "Provider agnostic", desc: "Connects to Samsara, Motive, and other ELD/GPS providers — switch hardware without losing history." },
      { title: "Geofencing", desc: "Automatic arrival and departure events at shippers, receivers, and yards — with unauthorized-movement alerts." },
      { title: "Route replay", desc: "Rewind any truck's day minute by minute for claims, disputes, and coaching." },
      { title: "Driver behavior", desc: "Harsh braking, rapid acceleration, and speeding events feed safety scores automatically." },
      { title: "Customer tracking links", desc: "Share a live ETA link instead of answering check calls all day." },
    ],
    stats: [
      { value: "0", label: "check calls needed" },
      { value: "24/7", label: "fleet visibility" },
      { value: "100%", label: "of history replayable" },
    ],
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    icon: Wrench,
    short: "Preventive schedules, work orders, and AI failure prediction.",
    tagline: "Fix trucks on your schedule, not the roadside's",
    description:
      "Preventive maintenance driven by real mileage, work orders with full cost tracking, and AI that predicts failures from telemetry before they strand a load.",
    features: [
      { title: "Preventive schedules", desc: "Oil, brakes, tires, and inspections triggered by actual mileage or time — never missed, never guessed." },
      { title: "Work & repair orders", desc: "From defect to completed repair with mechanic assignment, parts, labor, and vendor invoices." },
      { title: "AI failure prediction", desc: "Telemetry and repair history flag components likely to fail — schedule the fix before the breakdown." },
      { title: "Cost per truck", desc: "Every maintenance dollar rolls up per unit, so you know when to repair and when to sell." },
      { title: "Maintenance calendar", desc: "Shop capacity and scheduled downtime visible to dispatch, so no load gets assigned to a truck in the bay." },
      { title: "Warranty tracking", desc: "Know what's covered before you pay for it." },
    ],
    stats: [
      { value: "-32%", label: "roadside breakdowns (typical)" },
      { value: "100%", label: "of costs tied to a unit" },
      { value: "0", label: "loads on trucks in the shop" },
    ],
  },
  {
    slug: "fuel",
    name: "Fuel Management",
    icon: Fuel,
    short: "Card transactions matched to GPS, MPG analytics, and theft detection.",
    tagline: "Your second-biggest cost, finally under control",
    description:
      "Fuel card transactions matched against GPS positions, MPG per truck and driver, idle waste, theft detection, and a state-by-state ledger that makes IFTA quarters painless.",
    features: [
      { title: "Fuel card integrations", desc: "EFS, WEX, and Comdata transactions import automatically and match to trucks and drivers." },
      { title: "Theft detection", desc: "Transactions that don't match the truck's GPS position get flagged the moment they post." },
      { title: "MPG analytics", desc: "Fuel efficiency per truck, per driver, per lane — spot the outliers costing you thousands." },
      { title: "Idle waste tracking", desc: "See exactly how much fuel burns at idle, by driver, with coaching-ready reports." },
      { title: "IFTA-ready ledger", desc: "Miles and gallons by state accumulate automatically — quarterly filing becomes a button, not a weekend." },
      { title: "Fuel stop optimization", desc: "AI recommends the cheapest in-network stations along each route." },
    ],
    stats: [
      { value: "5-8%", label: "typical fuel spend reduction" },
      { value: "1 click", label: "IFTA quarterly report" },
      { value: "100%", label: "transactions GPS-verified" },
    ],
  },
  {
    slug: "accounting",
    name: "Accounting",
    icon: Receipt,
    short: "Invoices from delivered loads, settlements, and QuickBooks sync.",
    tagline: "Deliver Friday, invoice Friday, paid faster",
    description:
      "Invoices generate themselves from delivered loads with PODs attached. Driver settlements compute from actual miles and pay structures. Everything syncs to QuickBooks.",
    features: [
      { title: "One-click invoicing", desc: "Delivered load → branded PDF invoice with BOL and POD attached → emailed to the broker, same day." },
      { title: "Driver settlements", desc: "Per-mile, percentage, hourly, or flat — with deductions, advances, and printable statements." },
      { title: "Aging & collections", desc: "See who owes what and how late, with automatic reminder workflows." },
      { title: "Expenses & bills", desc: "Categorized expenses with receipt capture and approval flows." },
      { title: "QuickBooks sync", desc: "Invoices, payments, and expenses flow to QuickBooks automatically — your accountant keeps their tools." },
      { title: "True profitability", desc: "P&L per truck, per driver, per lane, per customer — computed from real operational data, not estimates." },
    ],
    stats: [
      { value: "Same day", label: "delivery-to-invoice time" },
      { value: "-90%", label: "settlement prep time" },
      { value: "2-way", label: "QuickBooks synchronization" },
    ],
  },
  {
    slug: "compliance",
    name: "Compliance & Safety",
    icon: ShieldCheck,
    short: "FMCSA, IFTA, HOS, DVIR — audit-ready without the binders.",
    tagline: "Audit-ready every day, not just audit week",
    description:
      "Driver qualification files, drug testing programs, HOS violations, DVIRs, IFTA, and CSA scores — tracked continuously with alerts long before anything becomes a violation.",
    features: [
      { title: "Compliance dashboard", desc: "One screen showing exactly what's compliant, what's expiring, and what needs action now." },
      { title: "DQ file management", desc: "Every FMCSA-required driver document tracked with expiry alerts and audit-ready exports." },
      { title: "HOS violation log", desc: "ELD data surfaces hours-of-service violations with context, so you can coach instead of discover." },
      { title: "DVIR tracking", desc: "Defects flow straight into maintenance work orders — the loop regulators want to see, closed." },
      { title: "IFTA & IRP", desc: "State mileage and fuel ledgers accumulate automatically for painless quarterly and annual filings." },
      { title: "Incident management", desc: "Accidents, violations, and inspections documented with photos, reports, and outcomes." },
    ],
    stats: [
      { value: "100%", label: "audit readiness, continuously" },
      { value: "-75%", label: "compliance admin time" },
      { value: "0", label: "surprise expirations" },
    ],
  },
  {
    slug: "crm",
    name: "CRM",
    icon: Contact,
    short: "Customers, brokers, and lanes with profitability attached.",
    tagline: "Know which customers make you money — and which cost you",
    description:
      "Customers, brokers, shippers, and receivers with full contact history, contracts, and credit terms — plus the number no generic CRM can give you: profit per relationship.",
    features: [
      { title: "Customer & broker profiles", desc: "Contacts, facilities, credit terms, contracts, and every load you've ever run for them." },
      { title: "Profitability per customer", desc: "Revenue, margin, and payment speed per relationship — negotiate from data." },
      { title: "Lane history", desc: "Every lane you've run with rates over time, so you never quote blind." },
      { title: "Activity tracking", desc: "Calls, emails, and meetings logged against customers with follow-up reminders." },
      { title: "Leads & pipeline", desc: "Track prospective shippers and brokers from first call to first load." },
      { title: "Portal access", desc: "Give customers and brokers self-service tracking and documents — grow relationships without more phone time." },
    ],
    stats: [
      { value: "$/load", label: "margin visible per customer" },
      { value: "100%", label: "of rate history retained" },
      { value: "1 view", label: "of every relationship" },
    ],
  },
  {
    slug: "analytics",
    name: "Analytics",
    icon: BarChart3,
    short: "Live profit per mile, per lane, per truck — and an executive dashboard.",
    tagline: "The numbers that run a trucking company, live",
    description:
      "An executive dashboard with revenue, utilization, cost per mile, and every KPI that matters — computed continuously from real operations, not month-end spreadsheets.",
    features: [
      { title: "Executive dashboard", desc: "Revenue, profit, utilization, alerts, and the live fleet map — your business in thirty seconds." },
      { title: "Profit per mile", desc: "The industry's most important number, computed live per truck, driver, lane, and customer." },
      { title: "Utilization tracking", desc: "Idle trucks, empty miles, and available drivers — see waste as it happens, not next quarter." },
      { title: "Trend analysis", desc: "MPG, maintenance cost, and margin trends over time with anomaly highlighting." },
      { title: "Natural language queries", desc: "Ask 'show me unprofitable lanes last quarter' and get a chart, not a data export project." },
      { title: "Custom KPI cards", desc: "Arrange the dashboard around the numbers your operation actually runs on." },
    ],
    stats: [
      { value: "30s", label: "to understand your business" },
      { value: "Live", label: "not month-end" },
      { value: "∞", label: "questions you can ask in English" },
    ],
  },
  {
    slug: "automation",
    name: "Automation",
    icon: Workflow,
    short: "Trigger → condition → action workflows that work while you sleep.",
    tagline: "The back office that runs itself",
    description:
      "A visual workflow engine built into the platform: when a load delivers, invoice the customer, notify the broker, and schedule the next maintenance — automatically, every time.",
    features: [
      { title: "Visual workflow builder", desc: "Triggers, conditions, and actions assembled visually — no code, no consultants." },
      { title: "Event triggers", desc: "Load status changes, document expirations, geofence events, schedules, webhooks, and inbound email." },
      { title: "Powerful actions", desc: "Generate invoices, send SMS/email/Slack, assign drivers, create work orders, call webhooks, run AI steps." },
      { title: "Template gallery", desc: "Start from proven workflows like 'delivered → invoice → notify → archive POD' and customize." },
      { title: "Execution logs", desc: "Every run recorded with inputs, outputs, and automatic retries on failure." },
      { title: "AI-powered steps", desc: "Insert AI into any workflow: summarize, extract, classify, or draft — then act on the result." },
    ],
    stats: [
      { value: "10+ hrs", label: "saved per dispatcher per week" },
      { value: "100%", label: "consistency, every time" },
      { value: "0", label: "code required" },
    ],
  },
  {
    slug: "ai-copilot",
    name: "AI Copilot",
    icon: Bot,
    short: "An assistant on every screen that reads documents, answers, and acts.",
    tagline: "The team member who read every document and never sleeps",
    description:
      "FleetOS Copilot sits inside every module with full context of your operation. It reads rate cons, answers questions about your fleet, drafts emails, and takes action — with your approval.",
    features: [
      { title: "Ask anything", desc: "'Which trucks have inspections due this month?' answered instantly from your live data." },
      { title: "Document intelligence", desc: "Rate cons, BOLs, PODs, and fuel receipts read and turned into structured records in seconds." },
      { title: "Takes action", desc: "Assign loads, send notifications, and create records from chat — every action confirmed and audited." },
      { title: "Email assistant", desc: "Drafts broker updates, customer notifications, and collections emails in your voice." },
      { title: "Context aware", desc: "On a load page it knows that load; on a truck page it knows that truck. No re-explaining." },
      { title: "Guardrailed & audited", desc: "Tenant-isolated data access, human approval for actions, and a full log of everything AI touched." },
    ],
    stats: [
      { value: "24/7", label: "availability" },
      { value: "15s", label: "average answer time" },
      { value: "100%", label: "of AI actions audited" },
    ],
  },
  {
    slug: "customer-portal",
    name: "Customer Portal",
    icon: UserCircle,
    short: "Self-service tracking, ETAs, documents, and invoices for shippers.",
    tagline: "Give customers answers before they call",
    description:
      "A branded portal where your customers track shipments live, download PODs and invoices, and open support tickets — cutting your check calls to zero.",
    features: [
      { title: "Live shipment tracking", desc: "Real-time position and ETA for every active load — no login gymnastics, no phone calls." },
      { title: "Document self-service", desc: "PODs, BOLs, and invoices downloadable the moment they exist." },
      { title: "Invoice & payment visibility", desc: "Customers see what's owed and what's paid — fewer disputes, faster payment." },
      { title: "Claims & support tickets", desc: "Issues filed and tracked in one place instead of buried in email threads." },
      { title: "Notification preferences", desc: "Pickup, delivery, and delay alerts by email or SMS, per customer preference." },
      { title: "Your branding", desc: "Your logo and colors — FleetOS stays invisible to your customers." },
    ],
    stats: [
      { value: "-80%", label: "check calls" },
      { value: "24/7", label: "customer self-service" },
      { value: "+NPS", label: "happier shippers" },
    ],
  },
  {
    slug: "broker-portal",
    name: "Broker Portal",
    icon: Handshake,
    short: "Load posting, live tracking, PODs, and payments for broker partners.",
    tagline: "Become the carrier brokers prefer to work with",
    description:
      "Brokers post loads, watch them move in real time, and grab PODs the minute you deliver. The carriers who make brokers' lives easy get the next load — that's you now.",
    features: [
      { title: "Load creation", desc: "Brokers submit loads directly into your dispatch queue with all details structured." },
      { title: "Live tracking links", desc: "Real-time position and ETA without a single check call." },
      { title: "Instant PODs", desc: "Proof of delivery available for download the moment it's captured." },
      { title: "Invoice & payment status", desc: "Both sides see the same numbers — disputes drop, payments speed up." },
      { title: "Messaging", desc: "Load-level threads that keep every conversation attached to the freight it's about." },
      { title: "Shared history", desc: "Every load you've run together, with performance stats that win you the next one." },
    ],
    stats: [
      { value: "0", label: "check calls per load" },
      { value: "Instant", label: "POD delivery" },
      { value: "+Loads", label: "from preferred-carrier status" },
    ],
  },
  {
    slug: "vendor-portal",
    name: "Vendor Portal",
    icon: Store,
    short: "Work orders, invoice upload, and payment status for repair vendors.",
    tagline: "Repair shops and vendors, plugged into your workflow",
    description:
      "Send work orders to repair shops, tow companies, and inspection vendors electronically. They upload invoices; you approve and track payment — no fax machines involved.",
    features: [
      { title: "Electronic work orders", desc: "Dispatch repairs to vendors with unit details, defect notes, and photos attached." },
      { title: "Invoice upload", desc: "Vendors submit invoices against work orders — matched, approvable, and traceable." },
      { title: "Payment tracking", desc: "Vendors see approval and payment status without calling your office." },
      { title: "Vendor ratings", desc: "Track cost, speed, and quality per vendor — send work where it's done best." },
      { title: "Document exchange", desc: "Inspection certificates and repair records attached straight to the truck's history." },
      { title: "Multi-vendor network", desc: "Repair shops, tire vendors, tow companies, and inspectors — one consistent process." },
    ],
    stats: [
      { value: "-60%", label: "repair admin overhead" },
      { value: "100%", label: "invoices matched to work orders" },
      { value: "Rated", label: "every vendor, objectively" },
    ],
  },
  {
    slug: "hr",
    name: "HR",
    icon: Briefcase,
    short: "Employees, attendance, leave, and assets for your whole team.",
    tagline: "The office side of your company, organized",
    description:
      "Dispatchers, mechanics, and office staff need management too. Records, attendance, leave, documents, and company assets — integrated with payroll and the rest of FleetOS.",
    features: [
      { title: "Employee records", desc: "Profiles, documents, emergency contacts, and employment history for non-driver staff." },
      { title: "Attendance & leave", desc: "Time tracking and leave requests with approval flows and balances." },
      { title: "Asset tracking", desc: "Laptops, phones, fuel cards, and keys — who has what, since when." },
      { title: "Document management", desc: "Contracts, reviews, and certifications with expiry alerts like everything else in FleetOS." },
      { title: "Payroll integration", desc: "Attendance and pay data flow into accounting — one payroll process for drivers and staff." },
      { title: "Performance notes", desc: "Reviews and milestones tracked per employee." },
    ],
    stats: [
      { value: "1", label: "system for drivers and staff" },
      { value: "100%", label: "asset accountability" },
      { value: "0", label: "spreadsheet HR files" },
    ],
  },
  {
    slug: "inventory",
    name: "Inventory",
    icon: Boxes,
    short: "Parts, tires, and supplies with stock levels and purchase orders.",
    tagline: "The right part on the shelf when the truck needs it",
    description:
      "Parts, tires, oil, and filters tracked with stock levels, reorder points, and barcode scanning — consumed against work orders so maintenance costs stay honest.",
    features: [
      { title: "Parts catalog", desc: "Every part with numbers, suppliers, costs, and compatible units." },
      { title: "Stock levels & reorder points", desc: "Know what's on the shelf and get alerted before you run out mid-repair." },
      { title: "Purchase orders", desc: "Create, send, and receive POs with three-way matching against invoices." },
      { title: "Barcode & QR scanning", desc: "Receive and consume parts with a phone camera — counts stay accurate." },
      { title: "Work order consumption", desc: "Parts used flow to the work order and the truck's cost history automatically." },
      { title: "Supplier management", desc: "Prices and lead times per supplier, so every order goes to the best source." },
    ],
    stats: [
      { value: "-25%", label: "parts spend from visibility" },
      { value: "0", label: "repairs stalled on missing parts" },
      { value: "100%", label: "costs tied to trucks" },
    ],
  },
  {
    slug: "documents",
    name: "Documents",
    icon: FileText,
    short: "Every document OCR-searchable, versioned, and attached where it belongs.",
    tagline: "Find any document in three seconds, forever",
    description:
      "Insurance, permits, PODs, BOLs, contracts, and photos — stored once, attached everywhere they're relevant, OCR-searchable, and version-tracked with expiry alerts.",
    features: [
      { title: "Attach to anything", desc: "Documents link to trucks, drivers, loads, customers — one file, visible everywhere it matters." },
      { title: "OCR search", desc: "Search the text inside scanned PDFs and photos — find that BOL by the shipper's name on it." },
      { title: "Version history", desc: "Every revision kept; nothing overwritten, nothing lost." },
      { title: "Expiry tracking", desc: "Any document can carry an expiration date and alert schedule." },
      { title: "Folders & tags", desc: "Organize your way, find it every way." },
      { title: "Secure sharing", desc: "Time-limited links for auditors, brokers, and insurers — without email attachments." },
    ],
    stats: [
      { value: "3s", label: "to find any document" },
      { value: "100%", label: "OCR-indexed" },
      { value: "0", label: "lost paperwork" },
    ],
  },
  {
    slug: "reports",
    name: "Reports",
    icon: PieChart,
    short: "Every report exportable, schedulable, and query-able in English.",
    tagline: "Every answer your accountant, banker, or auditor asks for",
    description:
      "Revenue, fuel, safety, payroll, utilization, and more — filtered, exported to PDF, Excel, or CSV, delivered on a schedule, or generated by asking in plain English.",
    features: [
      { title: "Full report library", desc: "Revenue, profit, fuel, driver, maintenance, safety, compliance, dispatch, payroll, and utilization." },
      { title: "Export anywhere", desc: "PDF for the banker, Excel for the accountant, CSV for everything else." },
      { title: "Scheduled delivery", desc: "The Monday-morning ops report emails itself every Monday morning." },
      { title: "Natural language builder", desc: "Describe the report you need; FleetOS builds it." },
      { title: "Drill-down everywhere", desc: "Every number clicks through to the loads, trucks, and transactions behind it." },
      { title: "Saved views", desc: "Build a filtered report once, run it forever." },
    ],
    stats: [
      { value: "50+", label: "ready-made reports" },
      { value: "3", label: "export formats" },
      { value: "0", label: "spreadsheet assembly required" },
    ],
  },
  {
    slug: "notifications",
    name: "Notifications",
    icon: BellRing,
    short: "Email, SMS, Slack, Teams, and webhooks — with per-user preferences.",
    tagline: "The right alert, to the right person, on the right channel",
    description:
      "A unified notification center that routes what matters to email, SMS, Slack, Teams, or webhooks — with per-user preferences and custom alert rules, so signal never drowns in noise.",
    features: [
      { title: "Unified inbox", desc: "Every alert in one in-app center with read states and history." },
      { title: "Multi-channel delivery", desc: "Email, SMS via Twilio, Slack, Microsoft Teams, and webhooks to anything else." },
      { title: "Per-user preferences", desc: "Dispatch wants SMS, accounting wants email digests — everyone gets it their way." },
      { title: "Custom alert rules", desc: "Build alerts on any condition: ETA slips 30+ minutes, fuel transaction over $800, document expiring in 14 days." },
      { title: "Scheduled digests", desc: "Daily and weekly summaries instead of a hundred pings." },
      { title: "Escalation", desc: "Unacknowledged critical alerts escalate to the next person automatically." },
    ],
    stats: [
      { value: "5", label: "delivery channels" },
      { value: "100%", label: "critical alerts acknowledged" },
      { value: "-90%", label: "notification noise" },
    ],
  },
];

export function getModule(slug: string): MarketingModule | undefined {
  return marketingModules.find((m) => m.slug === slug);
}
