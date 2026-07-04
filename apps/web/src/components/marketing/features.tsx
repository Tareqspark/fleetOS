"use client";

import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Route,
  MapPin,
  Contact,
  Receipt,
  Wrench,
  ShieldCheck,
  Fuel,
  Users,
  BarChart3,
  Workflow,
  Bot,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "./motion";

/* ---------- mini visuals for bento panels ---------- */

function MiniDispatch() {
  const rows = [
    { id: "LD-2417", pct: 68, status: "In Transit" },
    { id: "LD-2418", pct: 12, status: "Dispatched" },
    { id: "LD-2419", pct: 45, status: "In Transit" },
  ];
  return (
    <div className="mt-5 space-y-2.5 rounded-xl border border-white/5 bg-black/30 p-4">
      {rows.map((r) => (
        <div key={r.id} className="flex items-center gap-3">
          <span className="w-14 shrink-0 text-[11px] font-semibold text-indigo-300">
            {r.id}
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
              style={{ width: `${r.pct}%` }}
            />
          </div>
          <span className="w-20 shrink-0 text-right text-[11px] font-medium text-slate-400">
            {r.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function MiniMap() {
  const dots = [
    { left: "16%", top: "38%" },
    { left: "42%", top: "62%" },
    { left: "58%", top: "28%" },
    { left: "78%", top: "50%" },
  ];
  return (
    <div className="relative mt-5 h-28 overflow-hidden rounded-xl border border-white/5 bg-[#0d1024]">
      <svg viewBox="0 0 300 100" className="absolute inset-0 h-full w-full opacity-30">
        <path
          d="M0,55 C60,45 100,65 160,50 C220,35 260,55 300,42"
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
        />
        <path
          d="M70,0 C80,35 65,70 85,100 M210,0 C200,40 220,70 205,100"
          fill="none"
          stroke="#1e293b"
          strokeWidth="1"
        />
      </svg>
      {dots.map((d, i) => (
        <span key={i} className="absolute flex h-2.5 w-2.5" style={d}>
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
        </span>
      ))}
    </div>
  );
}

function MiniChat() {
  return (
    <div className="mt-5 space-y-2">
      <div className="ml-auto w-fit max-w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1.5 text-[11px] text-white">
        Cheapest fuel stop on I-40?
      </div>
      <div className="w-fit max-w-full rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-slate-300">
        Love's #612, exit 187 — $0.14/gal under network avg. Added to route.
      </div>
    </div>
  );
}

function MiniLedger() {
  return (
    <div className="mt-5 rounded-xl border border-white/5 bg-black/30 p-4">
      <p className="text-[11px] text-slate-500">Profit per mile · live</p>
      <p className="mt-1 text-2xl font-bold text-white">$1.94</p>
      <p className="text-[11px] font-medium text-emerald-400">
        Invoice #1042 sent · paid in 3 days
      </p>
    </div>
  );
}

function MiniFlow() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-1.5">
      {["Delivered", "Invoice", "Notify", "Archive"].map((s, i, a) => (
        <span key={s} className="flex items-center gap-1.5">
          <span className="rounded-md border border-violet-400/25 bg-violet-500/10 px-2 py-1 text-[11px] font-medium text-violet-200">
            {s}
          </span>
          {i < a.length - 1 ? (
            <ArrowRight className="h-3 w-3 text-slate-600" />
          ) : null}
        </span>
      ))}
    </div>
  );
}

/* ---------- data ---------- */

const bento = [
  {
    icon: Route,
    title: "Dispatch",
    slug: "dispatch",
    desc: "Drag-and-drop board with conflict detection, live statuses, and AI-suggested assignments.",
    visual: <MiniDispatch />,
    span: "lg:col-span-2",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    slug: "gps-tracking",
    desc: "Every truck on one live map — geofences, replay, behavior.",
    visual: <MiniMap />,
    span: "",
  },
  {
    icon: Bot,
    title: "AI Copilot",
    slug: "ai-copilot",
    desc: "An assistant on every screen that answers and acts.",
    visual: <MiniChat />,
    span: "",
  },
  {
    icon: Receipt,
    title: "Accounting",
    slug: "accounting",
    desc: "Invoices, settlements, and QuickBooks sync — automatic.",
    visual: <MiniLedger />,
    span: "",
  },
  {
    icon: Workflow,
    title: "Automation",
    slug: "automation",
    desc: "Workflows that invoice, notify, and assign while you sleep.",
    visual: <MiniFlow />,
    span: "",
  },
];

const rest = [
  { icon: Truck, title: "Fleet Management", slug: "fleet", desc: "Trucks & trailers with full lifecycle history" },
  { icon: Users, title: "Driver Management", slug: "drivers", desc: "CDL, medical, safety scores, settlements" },
  { icon: Wrench, title: "Maintenance", slug: "maintenance", desc: "Preventive schedules & failure prediction" },
  { icon: ShieldCheck, title: "Compliance", slug: "compliance", desc: "FMCSA, IFTA, HOS — audit-ready daily" },
  { icon: Fuel, title: "Fuel", slug: "fuel", desc: "MPG analytics, theft detection, IFTA ledgers" },
  { icon: Contact, title: "CRM", slug: "crm", desc: "Customers & brokers with profit attached" },
  { icon: BarChart3, title: "Reports", slug: "reports", desc: "Every number, exportable & schedulable" },
];

/* ---------- section ---------- */

export function Features() {
  return (
    <section id="platform" className="relative scroll-mt-20 pb-28 pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 30%, rgba(99,102,241,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bento.map((b, i) => (
            <FadeIn key={b.slug} delay={(i % 3) * 0.08} className={b.span}>
              <Link
                href={`/modules/${b.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <b.icon className="h-5 w-5 text-indigo-300" />
                    <h3 className="text-lg font-semibold text-white">
                      {b.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-400" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {b.desc}
                </p>
                <div className="mt-auto">{b.visual}</div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* compact capability list */}
        <FadeIn delay={0.1} className="mt-14">
          <div className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              And the rest of the operation
            </h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {rest.map((r) => (
              <Link
                key={r.slug}
                href={`/modules/${r.slug}`}
                className="group flex items-center gap-4 border-b border-white/5 py-4 transition-colors hover:border-indigo-400/30"
              >
                <r.icon className="h-4.5 w-4.5 shrink-0 text-slate-500 transition-colors group-hover:text-indigo-300" />
                <span className="text-sm font-semibold text-white">
                  {r.title}
                </span>
                <span className="hidden flex-1 truncate text-sm text-slate-500 md:block">
                  {r.desc}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-700 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-400" />
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
