import type { Metadata } from "next";
import { MarketingNav } from "@/components/marketing/nav";
import { Hero } from "@/components/marketing/hero";
import { TrustedBy } from "@/components/marketing/trusted-by";
import { Problems } from "@/components/marketing/problems";
import { Features } from "@/components/marketing/features";
import { AiSection } from "@/components/marketing/ai-section";
import { Showcase } from "@/components/marketing/showcase";
import { Modules } from "@/components/marketing/modules";
import { Comparison } from "@/components/marketing/comparison";
import { Integrations } from "@/components/marketing/integrations";
import { Metrics } from "@/components/marketing/metrics";
import { Testimonials } from "@/components/marketing/testimonials";
import { Pricing } from "@/components/marketing/pricing";
import { Faq } from "@/components/marketing/faq";
import { FinalCta, MarketingFooter } from "@/components/marketing/final-cta";

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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#05060f] text-white antialiased selection:bg-indigo-500/30">
      <MarketingNav />
      <main>
        <Hero />
        <TrustedBy />
        <Problems />
        <Features />
        <AiSection />
        <Showcase />
        <Modules />
        <Comparison />
        <Integrations />
        <Metrics />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <MarketingFooter />
    </div>
  );
}
