"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Clock } from "lucide-react";
import { HeroDashboard } from "./hero-dashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% -5%, rgba(99,102,241,0.28), transparent 65%), radial-gradient(ellipse 45% 35% at 85% 25%, rgba(139,92,246,0.14), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Introducing the AI era of fleet operations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl"
          >
            Run your entire trucking company from{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              one AI platform
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            Dispatch, tracking, compliance, accounting, maintenance, and an AI
            copilot that never sleeps — FleetOS AI replaces ten disconnected
            tools with the operating system modern trucking runs on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:brightness-110"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/platform#showcase"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Play className="h-4 w-4 text-indigo-400" />
              See FleetOS in Action
            </a>
          </motion.div>
        </div>

        {/* Dashboard mockup with floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div
            aria-hidden
            className="absolute -inset-x-8 -top-8 h-40 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <HeroDashboard />

          {/* floating KPI cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-16 hidden rounded-xl border border-white/10 bg-[#0b0d1d]/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl lg:block"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
              Monthly Revenue
            </div>
            <p className="mt-1 text-xl font-bold text-white">$482,940</p>
            <p className="text-xs font-medium text-emerald-400">
              +18.2% vs last month
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -right-8 top-40 hidden rounded-xl border border-white/10 bg-[#0b0d1d]/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl lg:block"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              AI Dispatcher
            </div>
            <p className="mt-1 text-sm font-semibold text-white">
              3 loads auto-assigned
            </p>
            <p className="text-xs text-slate-400">Deadhead reduced 14%</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-6 left-16 hidden rounded-xl border border-white/10 bg-[#0b0d1d]/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl lg:block"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Clock className="h-3.5 w-3.5 text-violet-400" />
              On-Time Delivery
            </div>
            <p className="mt-1 text-xl font-bold text-white">96.4%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
