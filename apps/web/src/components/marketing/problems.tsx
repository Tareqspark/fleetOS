"use client";

import {
  FileX,
  PhoneCall,
  Timer,
  ShieldAlert,
  Unplug,
  EyeOff,
  Receipt,
  Fuel,
  Wrench,
  Calculator,
  ArrowDown,
} from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";

const pains = [
  { icon: FileX, label: "Lost paperwork" },
  { icon: PhoneCall, label: "Manual dispatching" },
  { icon: Timer, label: "Late deliveries" },
  { icon: ShieldAlert, label: "Compliance headaches" },
  { icon: Unplug, label: "Disconnected systems" },
  { icon: EyeOff, label: "Poor visibility" },
  { icon: Receipt, label: "Slow invoicing" },
  { icon: Fuel, label: "Fuel waste" },
  { icon: Wrench, label: "Maintenance surprises" },
  { icon: Calculator, label: "Manual payroll" },
];

export function Problems() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Problem"
          title="Managing a trucking company shouldn't require 10 different software tools"
          subtitle="Spreadsheets for settlements. A whiteboard for dispatch. Three logins for tracking. Paper for compliance. Every disconnected tool costs you money, time, and loads."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {pains.map((p, i) => (
            <FadeIn key={p.label} delay={i * 0.04}>
              <div className="group flex flex-col items-center gap-3 rounded-xl border border-red-400/10 bg-red-500/[0.04] px-4 py-6 text-center transition-colors hover:border-red-400/25 hover:bg-red-500/[0.08]">
                <p.icon className="h-5 w-5 text-red-400/70" />
                <span className="text-sm font-medium text-slate-300">
                  {p.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-14 flex flex-col items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/10">
            <ArrowDown className="h-4 w-4 animate-bounce text-indigo-400" />
          </div>
          <p className="text-center text-lg font-semibold text-white">
            FleetOS replaces all of it —{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              one platform, one login, one source of truth.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
