import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Gemensam ram för infografikerna: rubrik, kort ingress och innehåll. Skrivs ut på egen sida. */
export function Infografik({ titel, ingress, children, className }: { titel: string; ingress?: string; children: ReactNode; className?: string }) {
  return (
    <figure
      className={cn(
        "mb-12 break-inside-avoid rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-5 shadow-sm sm:p-8 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950",
        className,
      )}
    >
      <figcaption className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Infografik</p>
        <p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{titel}</p>
        {ingress && <p className="mt-1 text-neutral-600 dark:text-neutral-400">{ingress}</p>}
      </figcaption>
      {children}
    </figure>
  );
}

/** Färgteman som fungerar i både ljust och mörkt läge. */
export const FARG = {
  rod: "bg-rose-100 text-rose-950 border-rose-300 dark:bg-rose-950/50 dark:text-rose-100 dark:border-rose-800",
  orange: "bg-orange-100 text-orange-950 border-orange-300 dark:bg-orange-950/50 dark:text-orange-100 dark:border-orange-800",
  gul: "bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-950/50 dark:text-amber-100 dark:border-amber-800",
  gron: "bg-emerald-100 text-emerald-950 border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-100 dark:border-emerald-800",
  turkos: "bg-teal-100 text-teal-950 border-teal-300 dark:bg-teal-950/50 dark:text-teal-100 dark:border-teal-800",
  bla: "bg-sky-100 text-sky-950 border-sky-300 dark:bg-sky-950/50 dark:text-sky-100 dark:border-sky-800",
  indigo: "bg-indigo-100 text-indigo-950 border-indigo-300 dark:bg-indigo-950/50 dark:text-indigo-100 dark:border-indigo-800",
  lila: "bg-violet-100 text-violet-950 border-violet-300 dark:bg-violet-950/50 dark:text-violet-100 dark:border-violet-800",
  rosa: "bg-pink-100 text-pink-950 border-pink-300 dark:bg-pink-950/50 dark:text-pink-100 dark:border-pink-800",
  gra: "bg-neutral-100 text-neutral-900 border-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600",
} as const;

export type Farg = keyof typeof FARG;
