"use client";

import { FadeIn, SectionHeading } from "./motion";

const integrations = [
  "QuickBooks",
  "Stripe",
  "Google Maps",
  "Mapbox",
  "Twilio",
  "Slack",
  "Microsoft Teams",
  "SendGrid",
  "Samsara",
  "Motive",
  "DAT",
  "Truckstop",
  "AWS",
];

export function Integrations() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Integrations"
          title="Plays well with the tools you already trust"
          subtitle="Native connections to accounting, telematics, load boards, maps, and communication platforms."
        />

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {integrations.map((name, i) => (
            <FadeIn key={name} delay={i * 0.03}>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur transition-all hover:border-indigo-400/40 hover:text-white">
                {name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
