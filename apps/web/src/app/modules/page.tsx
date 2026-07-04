import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { marketingModules } from "@/lib/marketing-modules";
import { MarketingNav } from "@/components/marketing/nav";
import { FinalCta, MarketingFooter } from "@/components/marketing/final-cta";
import { FadeIn } from "@/components/marketing/motion";

export const metadata: Metadata = {
  title: "Modules",
  description:
    "Explore every FleetOS AI module: dispatch, fleet, drivers, loads, GPS tracking, maintenance, fuel, accounting, compliance, CRM, analytics, automation, AI copilot, portals, and more.",
};

export default function ModulesIndexPage() {
  return (
    <div className="min-h-screen bg-[#05060f] text-white antialiased selection:bg-indigo-500/30">
      <MarketingNav />
      <main>
        <section className="relative overflow-hidden pb-16 pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% -5%, rgba(99,102,241,0.24), transparent 65%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <FadeIn>
              <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
                Modules
              </span>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                One platform.{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Every module your operation needs.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
                {marketingModules.length} production modules sharing one
                database, one design system, and one AI brain. Click any module
                to see what it does.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {marketingModules.map((m, i) => (
                <FadeIn key={m.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/modules/${m.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-indigo-500/10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/20 to-violet-500/10 transition-transform duration-300 group-hover:scale-110">
                      <m.icon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-white">
                      {m.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {m.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400">
                      Explore {m.name}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <MarketingFooter />
    </div>
  );
}
