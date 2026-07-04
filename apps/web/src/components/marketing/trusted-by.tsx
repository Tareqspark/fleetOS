"use client";

import { FadeIn } from "./motion";

const logos = [
  "Sunbelt Freight",
  "Ridgeline Carriers",
  "BlueMile Logistics",
  "Ironway Transport",
  "Summit Haulage",
  "RedRock Trucking",
];

export function TrustedBy() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <p className="text-center text-sm font-medium text-slate-500">
            Built for growing trucking companies across the United States
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((name) => (
              <span
                key={name}
                className="text-base font-bold uppercase tracking-widest text-slate-600 transition-colors hover:text-slate-400"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
