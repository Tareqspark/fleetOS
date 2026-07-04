"use client";

import { ArrowRight, Truck } from "lucide-react";
import { FadeIn } from "./motion";

export function FinalCta() {
  return (
    <section id="cta" className="relative scroll-mt-20 px-6 py-28">
      <FadeIn className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-400/20 px-8 py-20 text-center sm:px-16">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 90% at 50% 110%, rgba(99,102,241,0.35), rgba(124,58,237,0.15) 45%, transparent 75%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 100%, black, transparent)",
            }}
          />
          <div className="relative">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Ready to transform your trucking business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-slate-400">
              Join the operators replacing ten tools with one AI platform. Setup
              in days, not months.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:sales@fleetos.ai?subject=FleetOS%20Demo%20Request"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:brightness-110"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Start Free Trial
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
            <Truck className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">
            FleetOS <span className="text-indigo-400">AI</span>
          </span>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} FleetOS AI. The operating system for
          modern trucking.
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="#platform" className="transition-colors hover:text-white">
            Platform
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a
            href="mailto:hello@fleetos.ai"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
