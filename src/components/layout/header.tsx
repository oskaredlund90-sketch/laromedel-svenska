"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/lagstadiet", label: "Lågstadiet" },
  { href: "/mellanstadiet", label: "Mellanstadiet" },
  { href: "/hogstadiet", label: "Högstadiet" },
  { href: "/gymnasiet", label: "Gymnasiet" },
  { href: "/nationella-prov", label: "Nationella prov" },
  { href: "/ai-labbet", label: "AI-labbet" },
  { href: "/grammatik", label: "Grammatik" },
  { href: "/skrivverkstad", label: "Skrivverkstad" },
  { href: "/ovningar", label: "Övningar" },
  { href: "/litteraturtips", label: "Litteraturtips" },
  { href: "/sva", label: "SVA" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <BookOpen className="h-6 w-6" />
          <span className="hidden sm:inline">Läromedel i Svenska</span>
          <span className="sm:hidden">Svenska</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
                pathname.startsWith(item.href)
                  ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname.startsWith(item.href)
                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
