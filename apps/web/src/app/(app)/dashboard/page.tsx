import type { Metadata } from "next";
import {
  DollarSign,
  Truck,
  Users,
  Container,
  Wrench,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = { title: "Dashboard" };

const kpis = [
  { label: "Today's Revenue", value: "—", icon: DollarSign },
  { label: "Loads in Transit", value: "—", icon: Container },
  { label: "Available Drivers", value: "—", icon: Users },
  { label: "Truck Utilization", value: "—", icon: Truck },
  { label: "Maintenance Alerts", value: "—", icon: Wrench },
  { label: "Profit / Mile", value: "—", icon: TrendingUp },
];

async function getApiHealth() {
  try {
    const res = await fetch(
      `${process.env.API_ORIGIN ?? "http://localhost:4100"}/api/v1/health`,
      { cache: "no-store" },
    );
    if (!res.ok) return null;
    return (await res.json()) as { status: string; version: string };
  } catch {
    return null;
  }
}

export default async function DashboardPage() {
  const health = await getApiHealth();

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Your fleet at a glance.
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium ${
            health ? "text-green-600 dark:text-green-400" : "text-destructive"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              health ? "bg-green-500" : "bg-destructive"
            }`}
          />
          API {health ? `connected (v${health.version})` : "offline"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {label}
              </p>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
        Live truck map, activity feed, and AI insights land here as modules are
        built (Phases 2–7).
      </div>
    </div>
  );
}
