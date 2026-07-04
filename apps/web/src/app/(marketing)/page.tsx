import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Bot, Boxes, Tag } from "lucide-react";
import { Hero } from "@/components/marketing/hero";
import { TrustedBy } from "@/components/marketing/trusted-by";
import { Problems } from "@/components/marketing/problems";
import { Metrics } from "@/components/marketing/metrics";
import { Testimonials } from "@/components/marketing/testimonials";
import { FinalCta } from "@/components/marketing/final-cta";
import { FadeIn, SectionHeading } from "@/components/marketing/motion";

export const metadata: Metadata = {
  title: "FleetOS AI — The AI Operating System for Modern Trucking Companies",
  description:
    "Run your entire trucking company from one AI platform. Dispatch, GPS tracking, compliance, accounting, maintenance, and an AI copilot — FleetOS AI replaces ten disconnected tools.",
  keywords: [
    "trucking software",
    "fleet management",
    "TMS",
    "AI dispatcher",
    "trucking ERP",
    "fleet tracking",
  ],
  openGraph: {
    title: "FleetOS AI — Run Your Entire Trucking Company From One AI Platform",
    description:
      "The AI operating system for modern trucking companies. Dispatch, tracking, compliance, accounting, and AI — unified.",
    type: "website",
    siteName: "FleetOS AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "FleetOS AI — The AI Operating System for Trucking",
    description:
      "Replace ten disconnected tools with one AI platform for dispatch, tracking, compliance, and accounting.",
  },
};

const explore = [
  {
    href: "/platform",
    icon: Layers,
    title: "Platform",
    desc: "Dispatch, tracking, accounting, compliance — see how twelve core capabilities work as one system.",
    cta: "Explore the platform",
  },
  {
    href: "/ai",
    icon: Bot,
    title: "AI",
    desc: "The AI dispatcher, copilot, document intelligence, and predictions that set FleetOS apart.",
    cta: "Meet your AI fleet manager",
  },
  {
    href: "/modules",
    icon: Boxes,
    title: "Modules",
    desc: "21 production modules, each with its own deep-dive page — from loads to vendor portals.",
    cta: "Browse all modules",
  },
  {
    href: "/pricing",
    icon: Tag,
    title: "Pricing",
    desc: "Simple per-truck pricing that scales from one truck to a thousand. No setup fees.",
    cta: "See pricing",
  },
];

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Problems />

      {/* Explore the product */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Explore FleetOS"
            title="One platform. Four ways in."
            subtitle="Everything has its own page — dive into whichever part of FleetOS matters most to you."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((e, i) => (
              <FadeIn key={e.href} delay={i * 0.08}>
                <Link
                  href={e.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/20 to-violet-500/10 transition-transform duration-300 group-hover:scale-110">
                    <e.icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {e.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {e.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400">
                    {e.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Metrics />
      <Testimonials />
      <FinalCta />
    </>
  );
}
