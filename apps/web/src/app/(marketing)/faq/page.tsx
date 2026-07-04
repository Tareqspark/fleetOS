import type { Metadata } from "next";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about FleetOS AI onboarding, migration, GPS/ELD support, drivers on mobile, security, and workflow customization.",
};

export default function FaqPage() {
  return (
    <>
      <div className="pt-16" />
      <Faq />
      <FinalCta />
    </>
  );
}
