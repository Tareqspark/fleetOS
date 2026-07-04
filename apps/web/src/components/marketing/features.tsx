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
} from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";

const features = [
  {
    icon: Route,
    title: "Dispatch",
    slug: "dispatch",
    desc: "Drag-and-drop board with conflict detection, live statuses, and AI-suggested assignments.",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    slug: "gps-tracking",
    desc: "Real-time positions, geofencing, route replay, and driver behavior — on one live map.",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    slug: "fleet",
    desc: "Every truck and trailer: documents, inspections, ownership, and full lifecycle timelines.",
  },
  {
    icon: Users,
    title: "Driver Management",
    slug: "drivers",
    desc: "CDL, medical cards, safety scores, settlements, and performance in one profile.",
  },
  {
    icon: Receipt,
    title: "Accounting",
    slug: "accounting",
    desc: "Invoices from delivered loads, driver settlements, and QuickBooks sync — automatically.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    slug: "maintenance",
    desc: "Preventive schedules, work orders, and AI failure prediction before breakdowns happen.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    slug: "compliance",
    desc: "FMCSA, IFTA, HOS, DVIR, and expiry alerts — audit-ready without the binders.",
  },
  {
    icon: Fuel,
    title: "Fuel",
    slug: "fuel",
    desc: "Card transactions matched to GPS, MPG analytics, theft detection, and IFTA-ready ledgers.",
  },
  {
    icon: Contact,
    title: "CRM",
    slug: "crm",
    desc: "Customers, brokers, and lanes with profitability insights attached to every relationship.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    slug: "reports",
    desc: "Profit per mile, per truck, per lane — exportable, schedulable, and query-able in English.",
  },
  {
    icon: Workflow,
    title: "Automation",
    slug: "automation",
    desc: "Trigger → condition → action workflows that invoice, notify, and assign while you sleep.",
  },
  {
    icon: Bot,
    title: "AI Copilot",
    slug: "ai-copilot",
    desc: "An assistant on every screen that reads documents, answers questions, and takes action.",
  },
];

export function Features() {
  return (
    <section id="platform" className="relative scroll-mt-20 py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 30%, rgba(99,102,241,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Platform"
          title="Everything your operation needs. Nothing bolted on."
          subtitle="FleetOS was designed as one system from day one — every module shares the same data, the same map, and the same AI."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={(i % 3) * 0.08}>
              <Link
                href={`/modules/${f.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/20 to-violet-500/10 transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {f.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
