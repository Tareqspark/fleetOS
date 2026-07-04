"use client";

import { Check } from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";

const plans = [
  {
    name: "Starter",
    price: "$35",
    unit: "per truck / month",
    desc: "For owner-operators and small fleets getting off spreadsheets.",
    features: [
      "Up to 10 trucks",
      "Dispatch & load management",
      "GPS tracking & live map",
      "Invoicing & settlements",
      "Compliance alerts",
      "Email support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Growth",
    price: "$55",
    unit: "per truck / month",
    desc: "For growing fleets that want the full AI advantage.",
    features: [
      "Unlimited trucks",
      "Everything in Starter",
      "AI Dispatcher & Copilot",
      "Document AI (rate cons, BOL, POD)",
      "Automation engine",
      "QuickBooks integration",
      "Customer & broker portals",
      "Priority support",
    ],
    cta: "Book a Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "annual agreement",
    desc: "For 100+ truck operations with custom requirements.",
    features: [
      "Everything in Growth",
      "SSO / SAML & custom roles",
      "Dedicated success manager",
      "Custom integrations & API",
      "SLA & priority infrastructure",
      "White-glove onboarding & migration",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with your fleet"
          subtitle="No setup fees. No per-user charges. Every plan includes the core platform."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 backdrop-blur transition-transform duration-300 hover:-translate-y-1 ${
                  p.featured
                    ? "border-indigo-400/40 bg-gradient-to-b from-indigo-500/15 via-white/[0.04] to-white/[0.02] shadow-2xl shadow-indigo-500/20"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {p.featured ? (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    {p.price}
                  </span>
                  <span className="text-sm text-slate-500">{p.unit}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {p.desc}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 rounded-xl px-5 py-3 text-center text-sm font-semibold transition-all ${
                    p.featured
                      ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110"
                      : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
