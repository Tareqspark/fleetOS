"use client";

import { Counter, FadeIn } from "./motion";

const metrics = [
  { value: 1, suffix: "", label: "Unified Platform" },
  { value: 30, suffix: "+", label: "Modules" },
  { value: 300, suffix: "+", label: "Features" },
  { value: 100, suffix: "%", label: "Cloud Native" },
  { value: 24, suffix: "/7", label: "Access Anywhere" },
];

export function Metrics() {
  return (
    <section className="relative py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.1), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.08} className="text-center">
              <p className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                <Counter to={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">
                {m.label}
              </p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3} className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300">
            ⚡ AI-powered end to end
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
