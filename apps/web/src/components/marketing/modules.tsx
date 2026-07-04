"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { marketingModules } from "@/lib/marketing-modules";
import { FadeIn, SectionHeading } from "./motion";

export function Modules() {
  return (
    <section id="modules" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Modules"
          title="A full ERP, not a feature list"
          subtitle={`${marketingModules.length} production modules sharing one database, one design system, and one AI brain. Click any module to explore it.`}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {marketingModules.map((m, i) => (
            <FadeIn key={m.slug} delay={(i % 6) * 0.05}>
              <Link
                href={`/modules/${m.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-gradient-to-b hover:from-indigo-500/10 hover:to-transparent hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <m.icon className="h-6 w-6 text-slate-400 transition-colors group-hover:text-indigo-300" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                  {m.name}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <Link
            href="/modules"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Explore all modules in depth
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
