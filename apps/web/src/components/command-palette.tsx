"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  LayoutDashboard,
  Truck,
  Container,
  Users,
  Route,
  Map,
  Search,
} from "lucide-react";

const destinations = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dispatch", label: "Dispatch", icon: Route },
  { href: "/loads", label: "Loads", icon: Container },
  { href: "/tracking", label: "Live Map", icon: Map },
  { href: "/trucks", label: "Trucks", icon: Truck },
  { href: "/drivers", label: "Drivers", icon: Users },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-64 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:bg-accent/50"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search…</span>
        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close search"
        className="fixed inset-0 z-40 bg-black/40"
        onClick={() => setOpen(false)}
      />
      <div className="fixed left-1/2 top-24 z-50 w-full max-w-lg -translate-x-1/2 px-4">
        <Command className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          <Command.Input
            autoFocus
            placeholder="Go to…"
            className="w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>
            {destinations.map(({ href, label, icon: Icon }) => (
              <Command.Item
                key={href}
                value={label}
                onSelect={() => {
                  setOpen(false);
                  router.push(href);
                }}
                className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </div>
    </>
  );
}
