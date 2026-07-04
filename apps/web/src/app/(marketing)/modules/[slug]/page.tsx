import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { marketingModules, getModule } from "@/lib/marketing-modules";
import { FinalCta } from "@/components/marketing/final-cta";
import { FadeIn } from "@/components/marketing/motion";

export function generateStaticParams() {
  return marketingModules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const mod = getModule((await params).slug);
  if (!mod) return {};
  return {
    title: mod.name,
    description: mod.short,
    openGraph: {
      title: `${mod.name} — FleetOS AI`,
      description: mod.short,
      type: "website",
      siteName: "FleetOS AI",
    },
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const mod = getModule((await params).slug);
  if (!mod) notFound();

  const idx = marketingModules.findIndex((m) => m.slug === mod.slug);
  const related = [1, 2, 3].map(
    (o) => marketingModules[(idx + o) % marketingModules.length]!,
  );

  return (
    <>
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% -5%, rgba(99,102,241,0.24), transparent 65%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <FadeIn>
              <Link
                href="/modules"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All modules
              </Link>
              <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/25 to-violet-500/10 shadow-xl shadow-indigo-500/20">
                <mod.icon className="h-7 w-7 text-indigo-300" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                {mod.name}
              </p>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                {mod.tagline}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400">
                {mod.description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#cta"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:brightness-110"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/modules"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  Explore All Modules
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-white/5 bg-white/[0.02] py-12">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
            {mod.stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="text-center">
                <p className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-400">
                  {s.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What {mod.name} does for you
              </h2>
            </FadeIn>
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mod.features.map((f, i) => (
                <FadeIn key={f.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05]">
                    <div className="h-2 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-12" />
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {f.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Related modules */}
        <section className="border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
              <h2 className="text-center text-2xl font-bold tracking-tight">
                Works better together
              </h2>
              <p className="mt-3 text-center text-sm text-slate-400">
                Every FleetOS module shares the same data, map, and AI.
              </p>
            </FadeIn>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r, i) => (
                <FadeIn key={r.slug} delay={i * 0.08}>
                  <Link
                    href={`/modules/${r.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-400/40"
                  >
                    <r.icon className="h-5 w-5 text-indigo-300" />
                    <h3 className="mt-3 text-sm font-semibold text-white">
                      {r.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-400">
                      {r.short}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-400">
                      Learn more
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
    </>
  );
}
