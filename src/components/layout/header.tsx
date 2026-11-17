"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { bytStadium } from "@/lib/stadiebyte";
import type { AgeGroup } from "@/lib/supabase/types";

const AGE_GROUPS: { href: string; label: string; short: string; stadium?: AgeGroup }[] = [
  { href: "/lagstadiet", label: "Lågstadiet", short: "Åk 1–3", stadium: "lagstadiet" },
  { href: "/mellanstadiet", label: "Mellanstadiet", short: "Åk 4–6", stadium: "mellanstadiet" },
  { href: "/hogstadiet", label: "Högstadiet", short: "Åk 7–9", stadium: "hogstadiet" },
  { href: "/gymnasiet", label: "Gymnasiet", short: "Gym", stadium: "gymnasiet" },
  { href: "/ovningshaften", label: "Övningshäften", short: "Häften" },
  { href: "/veckans-ord", label: "Veckans ord", short: "Ord" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Stadieknapparna byter stadium men stannar på samma sida (grammatik → grammatik).
  const lank = (item: (typeof AGE_GROUPS)[number]) => (item.stadium ? bytStadium(pathname, "", item.stadium) : item.href);
  const byt = (e: React.MouseEvent, item: (typeof AGE_GROUPS)[number]) => {
    if (!item.stadium || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    router.push(bytStadium(pathname, window.location.search, item.stadium));
  };
  const [scrolled, setScrolled] = useState(false);

  // Detect which age group is active based on path
  const activeGroup = AGE_GROUPS.find((g) => pathname.startsWith(g.href));

  // Track scroll for header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/80 print:hidden backdrop-blur-sm transition-shadow duration-200 dark:bg-neutral-950/80",
        scrolled
          ? "border-neutral-200 shadow-sm dark:border-neutral-800"
          : "border-transparent dark:border-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" alt="" width={26} height={26} className="h-[26px] w-[26px]" />
          <span className="hidden sm:inline">Läromedel i Svenska</span>
          <span className="sm:hidden">Svenska</span>
        </Link>

        {/* Desktop: Age group tabs */}
        <nav className="hidden items-center gap-1 md:flex">
          {AGE_GROUPS.map((item) => (
            <Link
              key={item.href}
              href={lank(item)}
              onClick={(e) => byt(e, item)}
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
            aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu — slide-down animation */}
      {mobileOpen && (
        <nav className="animate-slide-down border-t border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Välj stadie
          </p>
          <div className="flex flex-col gap-1">
            {AGE_GROUPS.map((item) => (
              <Link
                key={item.href}
                href={lank(item)}
                onClick={(e) => byt(e, item)}
                className={cn(
                  "flex min-h-[48px] items-center rounded-md px-3 text-sm font-medium transition-colors",
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
