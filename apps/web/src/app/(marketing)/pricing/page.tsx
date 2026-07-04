import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Pricing } from "@/components/marketing/pricing";
import { Metrics } from "@/components/marketing/metrics";
import { FinalCta } from "@/components/marketing/final-cta";
import { FadeIn } from "@/components/marketing/motion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple per-truck pricing for FleetOS AI. Starter, Growth, and Enterprise plans — no setup fees, no per-user charges, 14-day free trial.",
};

export default function PricingPage() {
  return (
    <>
      <div className="pt-16" />
      <Pricing />
      <Metrics />
      <section className="pb-8 text-center">
        <FadeIn>
          <p className="text-sm text-slate-400">
            Questions about plans, migration, or onboarding?
          </p>
          <Link
            href="/faq"
            className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Read the FAQ
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </section>
      <FinalCta />
    </>
  );
}
