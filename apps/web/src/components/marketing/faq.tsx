"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most fleets are live within a week. Import your trucks, drivers, and customers from spreadsheets or your old system, and our team handles document migration. Fleets under 10 trucks are often running the same day.",
  },
  {
    q: "Can I migrate from my existing software?",
    a: "Yes. We import from spreadsheets, AscendTMS, Fleetio, and most common TMS exports — loads, customers, trucks, drivers, and historical documents. Enterprise plans include white-glove migration.",
  },
  {
    q: "Does FleetOS support my GPS / ELD provider?",
    a: "FleetOS connects natively to Samsara and Motive, with more providers on the roadmap. If your provider has an API, our integration team can usually connect it — and our open API lets you push positions from anything.",
  },
  {
    q: "Can drivers use their mobile devices?",
    a: "A dedicated driver app (loads, navigation, DVIR, document scanning, HOS) is coming soon. Today, drivers can receive load details, links, and updates by SMS and email, and upload documents from any phone browser.",
  },
  {
    q: "How secure is FleetOS?",
    a: "Every company's data is fully isolated, encrypted in transit and at rest. We support two-factor authentication, passkeys, role-based access control, and full audit logs. Our architecture follows SOC 2 practices, with SSO available on Enterprise.",
  },
  {
    q: "Can I customize workflows?",
    a: "Yes — the built-in automation engine lets you build trigger → condition → action workflows without code: auto-generate invoices on delivery, alert customers on ETA changes, schedule maintenance by mileage, and much more.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-white">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
            open && "rotate-180 text-indigo-400",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.05}>
              <FaqItem q={f.q} a={f.a} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
