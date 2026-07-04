import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AiSection } from "@/components/marketing/ai-section";
import { FinalCta } from "@/components/marketing/final-cta";
import { FadeIn } from "@/components/marketing/motion";

export const metadata: Metadata = {
  title: "AI",
  description:
    "The AI Dispatcher, Copilot, document intelligence, and predictive analytics inside FleetOS AI — an AI fleet manager that sees your whole operation and takes action.",
};

const workflow = [
  {
    step: "01",
    title: "It reads",
    desc: "Rate cons, BOLs, PODs, and fuel receipts become structured records the moment they arrive — no data entry.",
  },
  {
    step: "02",
    title: "It thinks",
    desc: "Every suggestion is grounded in your live data: driver hours, truck positions, lane history, and real costs.",
  },
  {
    step: "03",
    title: "It acts",
    desc: "Assignments, invoices, and notifications — executed with your approval and logged in a full audit trail.",
  },
];

export default function AiPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-4 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% -5%, rgba(124,58,237,0.28), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
              FleetOS AI
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              An AI that actually{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                runs freight
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
              Not a chatbot bolted onto old software. FleetOS AI sits inside
              every module, sees your entire operation, and takes action — with
              your approval.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          {workflow.map((w, i) => (
            <FadeIn key={w.step} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent">
                  {w.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {w.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <AiSection />

      <section className="pb-8 text-center">
        <FadeIn>
          <Link
            href="/modules/ai-copilot"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Deep-dive: the AI Copilot module
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </section>

      <FinalCta />
    </>
  );
}
