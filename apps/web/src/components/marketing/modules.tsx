"use client";

import {
  Truck,
  Users,
  Container,
  Wrench,
  Fuel,
  Receipt,
  Contact,
  ShieldCheck,
  BarChart3,
  Workflow,
  UserCircle,
  Handshake,
  Store,
  Briefcase,
  Boxes,
  FileText,
  PieChart,
  BellRing,
} from "lucide-react";
import { FadeIn, SectionHeading } from "./motion";

const modules = [
  { icon: Truck, label: "Fleet" },
  { icon: Users, label: "Drivers" },
  { icon: Container, label: "Loads" },
  { icon: Wrench, label: "Maintenance" },
  { icon: Fuel, label: "Fuel" },
  { icon: Receipt, label: "Accounting" },
  { icon: Contact, label: "CRM" },
  { icon: ShieldCheck, label: "Compliance" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Workflow, label: "Automation" },
  { icon: UserCircle, label: "Customer Portal" },
  { icon: Handshake, label: "Broker Portal" },
  { icon: Store, label: "Vendor Portal" },
  { icon: Briefcase, label: "HR" },
  { icon: Boxes, label: "Inventory" },
  { icon: FileText, label: "Documents" },
  { icon: PieChart, label: "Reports" },
  { icon: BellRing, label: "Notifications" },
];

export function Modules() {
  return (
    <section id="modules" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Modules"
          title="A full ERP, not a feature list"
          subtitle="Eighteen production modules sharing one database, one design system, and one AI brain."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {modules.map((m, i) => (
            <FadeIn key={m.label} delay={(i % 6) * 0.05}>
              <div className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-gradient-to-b hover:from-indigo-500/10 hover:to-transparent hover:shadow-lg hover:shadow-indigo-500/10">
                <m.icon className="h-6 w-6 text-slate-400 transition-colors group-hover:text-indigo-300" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                  {m.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
