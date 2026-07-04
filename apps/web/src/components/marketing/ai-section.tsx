"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Route,
  TrendingUp,
  Fuel,
  ShieldCheck,
  Wrench,
  ScanText,
  MessageSquareText,
  BarChart3,
  Mic,
  Sparkles,
} from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";

const capabilities = [
  {
    icon: Route,
    title: "AI Dispatcher",
    desc: "Suggests the best driver and truck for every load — HOS, location, and deadhead considered.",
  },
  {
    icon: TrendingUp,
    title: "AI Profit Analysis",
    desc: "Knows your true cost per mile and flags unprofitable lanes before you book them.",
  },
  {
    icon: ScanText,
    title: "AI Document OCR",
    desc: "Drop in a rate con or BOL — FleetOS reads it and creates the load in seconds.",
  },
  {
    icon: Wrench,
    title: "Maintenance Prediction",
    desc: "Telemetry + history models predict failures before they strand a truck.",
  },
  {
    icon: Fuel,
    title: "AI Fuel Optimization",
    desc: "Best fuel stops on route, idle-waste alerts, and anomaly detection on every card swipe.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Assistant",
    desc: "Tracks every expiry and violation, and answers 'are we audit-ready?' honestly.",
  },
  {
    icon: BarChart3,
    title: "Natural Language Reports",
    desc: "\"Show profit per mile by lane last quarter\" — answered with a chart, not a support ticket.",
  },
  {
    icon: Mic,
    title: "Voice Commands",
    desc: "Hands-free operation for the road. Coming soon.",
    soon: true,
  },
];

const chat = [
  {
    role: "user",
    text: "Which trucks are unassigned tomorrow near Dallas?",
  },
  {
    role: "ai",
    text: "3 trucks within 150 mi: #T-104 (Dallas), #T-118 (Fort Worth), #T-131 (Waco). T-104's driver has 9.5h HOS available — best fit for load LD-2431 to Houston. Assign it?",
  },
  { role: "user", text: "Yes, assign and notify the driver." },
  {
    role: "ai",
    text: "Done. LD-2431 assigned to T-104 / M. Alvarez. Rate con attached, SMS sent, ETA 14:20 CT. Estimated profit: $1.94/mi.",
  },
];

export function AiSection() {
  return (
    <section id="ai" className="relative scroll-mt-20 overflow-hidden py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 45%, rgba(124,58,237,0.16), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Centerpiece"
          title="Meet your AI Fleet Manager"
          subtitle="Not a chatbot bolted onto old software. FleetOS AI sits inside every module, sees your entire operation, and takes action — with your approval."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* chat visualization */}
          <FadeIn className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent blur-2xl"
            />
            <div className="relative rounded-2xl border border-white/10 bg-[#0a0c1a]/90 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30">
                  <Bot className="h-4.5 w-4.5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    FleetOS Copilot
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online · watching 42 trucks
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {chat.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
                          : "border border-white/10 bg-white/5 text-slate-300"
                      }`}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span className="text-sm text-slate-500">
                  Ask anything about your fleet…
                </span>
              </div>
            </div>
          </FadeIn>

          {/* capability grid */}
          <div className="order-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-2">
            {capabilities.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-violet-400/30 hover:bg-white/[0.05]">
                  <div className="flex items-center justify-between">
                    <c.icon className="h-5 w-5 text-violet-300" />
                    {"soon" in c && c.soon ? (
                      <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                        Soon
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {c.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
