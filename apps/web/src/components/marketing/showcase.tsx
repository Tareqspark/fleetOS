"use client";

import { FadeIn, SectionHeading } from "./motion";
import { HeroDashboard } from "./hero-dashboard";
import { Route, Map as MapIcon, DollarSign, BellRing } from "lucide-react";

const highlights = [
  {
    icon: Route,
    title: "Dispatch Board",
    desc: "Drag, drop, dispatched — with conflicts blocked automatically.",
  },
  {
    icon: MapIcon,
    title: "Live Tracking",
    desc: "Every truck, trailer, and load on one real-time map.",
  },
  {
    icon: DollarSign,
    title: "Revenue & Profit",
    desc: "Profit per mile computed live as loads move.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    desc: "ETA risks, expiring documents, and anomalies — before they cost you.",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Command Center"
          title="Your whole operation on one screen"
          subtitle="Real-time KPIs, live fleet map, dispatch statuses, and alerts — the dashboard your morning coffee deserves."
        />

        <FadeIn delay={0.15} className="relative mx-auto mt-14 max-w-5xl">
          <div
            aria-hidden
            className="absolute -inset-x-10 top-10 h-64 rounded-full bg-violet-500/15 blur-3xl"
          />
          <div className="relative">
            <HeroDashboard />
          </div>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.08}>
              <div className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10">
                  <h.icon className="h-4.5 w-4.5 text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {h.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
