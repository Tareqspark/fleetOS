"use client";

import {
  LayoutDashboard,
  Route,
  Container,
  Map as MapIcon,
  Truck,
  Users,
} from "lucide-react";

const trucks = [
  { left: "18%", top: "32%" },
  { left: "34%", top: "58%" },
  { left: "52%", top: "26%" },
  { left: "66%", top: "48%" },
  { left: "80%", top: "34%" },
];

const loads = [
  { id: "LD-2417", lane: "Chicago, IL → Dallas, TX", status: "In Transit", pct: 68 },
  { id: "LD-2418", lane: "Atlanta, GA → Miami, FL", status: "Dispatched", pct: 12 },
  { id: "LD-2419", lane: "Phoenix, AZ → Denver, CO", status: "In Transit", pct: 45 },
];

export function HeroDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c1a] shadow-2xl shadow-indigo-950/60">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
        <div className="mx-auto flex h-6 w-72 items-center justify-center rounded-md bg-white/5 text-[10px] text-slate-500">
          app.fleetos.ai/dashboard
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="hidden w-40 shrink-0 border-r border-white/5 p-3 sm:block">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Route, label: "Dispatch" },
            { icon: Container, label: "Loads" },
            { icon: MapIcon, label: "Live Map" },
            { icon: Truck, label: "Trucks" },
            { icon: Users, label: "Drivers" },
          ].map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`mb-1 flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-medium ${
                active
                  ? "bg-indigo-500/15 text-indigo-300"
                  : "text-slate-500"
              }`}
            >
              <Icon className="h-3 w-3" />
              {label}
            </div>
          ))}
        </div>

        {/* main */}
        <div className="min-w-0 flex-1 p-4">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Revenue Today", value: "$18,240", delta: "+12%", up: true },
              { label: "Loads in Transit", value: "24", delta: "+3", up: true },
              { label: "Fleet Utilization", value: "87%", delta: "+5%", up: true },
              { label: "Cost / Mile", value: "$1.62", delta: "-4%", up: true },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-lg border border-white/5 bg-white/[0.03] p-3"
              >
                <p className="text-[10px] font-medium text-slate-500">
                  {k.label}
                </p>
                <p className="mt-0.5 text-base font-bold text-white">
                  {k.value}
                </p>
                <p className="text-[10px] font-semibold text-emerald-400">
                  {k.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-5">
            {/* revenue chart */}
            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3 lg:col-span-2">
              <p className="text-[10px] font-medium text-slate-500">
                Revenue · Last 30 days
              </p>
              <svg viewBox="0 0 300 90" className="mt-2 w-full">
                <defs>
                  <linearGradient id="heroChart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 C30,62 45,48 70,52 C95,56 110,38 140,34 C170,30 185,44 210,36 C235,28 255,16 300,12 L300,90 L0,90 Z"
                  fill="url(#heroChart)"
                />
                <path
                  d="M0,70 C30,62 45,48 70,52 C95,56 110,38 140,34 C170,30 185,44 210,36 C235,28 255,16 300,12"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* live map */}
            <div className="relative overflow-hidden rounded-lg border border-white/5 bg-[#0d1024] p-3 lg:col-span-3">
              <p className="text-[10px] font-medium text-slate-500">
                Live Fleet Map · 42 trucks active
              </p>
              <div className="relative mt-2 h-[104px]">
                {/* faux roads */}
                <svg
                  viewBox="0 0 400 100"
                  className="absolute inset-0 h-full w-full opacity-30"
                >
                  <path
                    d="M0,60 C80,50 120,70 200,55 C280,40 320,60 400,45"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M40,0 C55,40 45,70 70,100 M200,0 C190,35 210,70 195,100 M330,0 C345,40 325,75 340,100"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                </svg>
                {trucks.map((t, i) => (
                  <span
                    key={i}
                    className="absolute flex h-2.5 w-2.5"
                    style={{ left: t.left, top: t.top }}
                  >
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60"
                      style={{ animationDelay: `${i * 0.6}s` }}
                    />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* dispatch rows */}
          <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.03] p-3">
            <p className="text-[10px] font-medium text-slate-500">
              Active Loads
            </p>
            <div className="mt-2 space-y-2">
              {loads.map((l) => (
                <div key={l.id} className="flex items-center gap-3">
                  <span className="w-14 shrink-0 text-[10px] font-semibold text-indigo-300">
                    {l.id}
                  </span>
                  <span className="hidden flex-1 truncate text-[10px] text-slate-400 sm:block">
                    {l.lane}
                  </span>
                  <div className="h-1 w-24 overflow-hidden rounded-full bg-white/10 sm:w-40">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                  <span className="w-16 shrink-0 text-right text-[10px] font-medium text-slate-300">
                    {l.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
