import type { Metadata } from "next";
import { Features } from "@/components/marketing/features";
import { Showcase } from "@/components/marketing/showcase";
import { Comparison } from "@/components/marketing/comparison";
import { Integrations } from "@/components/marketing/integrations";
import { FinalCta } from "@/components/marketing/final-cta";
import { FadeIn } from "@/components/marketing/motion";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Dispatch, GPS tracking, accounting, compliance, maintenance, and more — see how FleetOS AI's twelve core capabilities work as one unified system.",
};

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-4 pt-36">
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
              Platform
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Built as one system,{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                not stitched together
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
              Every capability below shares the same data, the same live map,
              and the same AI — so nothing falls through the cracks between
              tools.
            </p>
          </FadeIn>
        </div>
      </section>

      <Features />
      <Showcase />
      <Comparison />
      <Integrations />
      <FinalCta />
    </>
  );
}
