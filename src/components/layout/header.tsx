"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

const AGE_GROUPS = [
  { href: "/lagstadiet", label: "Lågstadiet", short: "Åk 1–3" },
  { href: "/mellanstadiet", label: "Mellanstadiet", short: "Åk 4–6" },
  { href: "/hogstadiet", label: "Högstadiet", short: "Åk 7–9" },
  { href: "/gymnasiet", label: "Gymnasiet", short: "Gym" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect which age group is active based on path
  const activeGroup = AGE_GROUPS.find((g) => pathname.startsWith(g.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white"
        >
          <BookOpen className="h-5 w-5" />
          <span className="hidden sm:inline">Läromedel i Svenska</span>
          <span className="sm:hidden">Svenska</span>
        </Link>

        {/* Desktop: Age group tabs */}
        <nav className="hidden items-center gap-1 md:flex">
          {AGE_GROUPS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
                activeGroup?.href === item.href
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/sok"
            className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Sök"
          >
            <Search className="h-5 w-5" />
          </Link>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Öppna meny"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Välj stadie
          </p>
          <div className="flex flex-col gap-1">
            {AGE_GROUPS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  activeGroup?.href === item.href
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900"
                )}
              >
                {item.label}
                <span className="ml-2 text-xs opacity-60">{item.short}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
