"use client";

import { Check, X } from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";

const rows = [
  {
    label: "AI that dispatches, predicts & reads documents",
    old: "None, or a chatbot add-on",
    fleetos: "Native across every module",
  },
  {
    label: "Automation",
    old: "Manual work + Zapier duct tape",
    fleetos: "Built-in workflow engine",
  },
  {
    label: "Platform",
    old: "5–10 disconnected tools",
    fleetos: "One unified ERP",
  },
  {
    label: "Analytics",
    old: "Export to Excel and pray",
    fleetos: "Live profit per mile, per lane, per truck",
  },
  {
    label: "Speed",
    old: "Page reloads from 2009",
    fleetos: "Instant, real-time, keyboard-first",
  },
  {
    label: "Visibility",
    old: "Call the driver to find the truck",
    fleetos: "Live map + ETAs for every stakeholder",
  },
  {
    label: "Scalability",
    old: "Falls over past 20 trucks",
    fleetos: "1 truck to 1,000+ on the same plan",
  },
];

export function Comparison() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why FleetOS"
          title="Traditional software manages records. FleetOS runs operations."
        />

        <FadeIn delay={0.15} className="mt-14 overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-6 py-4 font-medium text-slate-400">
                    Capability
                  </th>
                  <th className="px-6 py-4 font-medium text-slate-400">
                    Traditional software
                  </th>
                  <th className="bg-gradient-to-b from-indigo-500/15 to-transparent px-6 py-4 font-semibold text-white">
                    FleetOS AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.label}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {r.label}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      <span className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" />
                        {r.old}
                      </span>
                    </td>
                    <td className="bg-indigo-500/[0.06] px-6 py-4 text-slate-200">
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {r.fleetos}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
