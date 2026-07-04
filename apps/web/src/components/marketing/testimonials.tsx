"use client";

import { Quote } from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";

const testimonials = [
  {
    quote:
      "We replaced four systems with FleetOS. Dispatch that took my team two hours every morning now takes twenty minutes — the AI suggestions are right more often than we are.",
    name: "Marcus Reeves",
    role: "Owner · 38-truck fleet, Texas",
    initials: "MR",
  },
  {
    quote:
      "The document AI alone pays for it. Rate cons become loads in seconds, PODs attach themselves, and invoicing happens the same day we deliver.",
    name: "Danielle Ortiz",
    role: "Fleet Manager · Midwest carrier",
    initials: "DO",
  },
  {
    quote:
      "I finally know my real cost per mile, per lane, per customer — live. We dropped two lanes that were quietly losing money for a year.",
    name: "James Whitfield",
    role: "Dispatch Manager · Southeast regional",
    initials: "JW",
  },
  {
    quote:
      "As a broker, the portal is night and day. Live tracking links, instant PODs, no more check calls. My shippers think we upgraded our whole company.",
    name: "Sofia Nakamura",
    role: "Freight Broker · Pacific Northwest",
    initials: "SN",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Operators who switched don't look back"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={(i % 2) * 0.1}>
              <figure className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-colors hover:border-white/20">
                <Quote className="h-6 w-6 text-indigo-400/50" />
                <blockquote className="mt-4 text-pretty text-base leading-relaxed text-slate-300">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
