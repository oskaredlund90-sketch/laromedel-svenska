"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FARG, type Farg } from "./ram";

/** Ett ord i meningen och dess ordklass (null = visas inte på det här stadiet / skiljetecken). */
export type DetektivOrd = [string, string | null];

export function Ordklassdetektiv({ mening, ordklasser }: { mening: DetektivOrd[]; ordklasser: Record<string, { namn: string; farg: Farg }> }) {
  const [visade, setVisade] = useState<Set<number>>(new Set());
  const allaVisas = mening.every(([, k], i) => !k || visade.has(i));

  return (
    <div>
      <div className="flex flex-wrap items-end gap-x-1.5 gap-y-3">
        {mening.map(([ord, k], i) => {
          const skiljetecken = /^[.,!?]$/.test(ord);
          if (skiljetecken) return <span key={i} className="-ml-1.5 text-xl">{ord}</span>;
          const info = k ? ordklasser[k] : null;
          const visas = visade.has(i);
          return (
            <button
              key={i}
              type="button"
              disabled={!info}
              onClick={() => setVisade((v) => new Set(v).add(i))}
              className="flex flex-col items-center"
            >
              <span
                className={cn(
                  "rounded-md border-2 px-2 py-1 text-xl transition-colors",
                  info && visas ? FARG[info.farg] : "border-dashed border-neutral-300 dark:border-neutral-700",
                  !info && "border-transparent text-neutral-400",
                )}
              >
                {ord}
              </span>
              <span className="mt-1 h-4 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">{info && visas ? info.namn : ""}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex gap-3 text-sm">
        <button
          type="button"
          onClick={() => setVisade(allaVisas ? new Set() : new Set(mening.map((_, i) => i)))}
          className="rounded-full border border-neutral-300 px-3 py-1 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          {allaVisas ? "Börja om" : "Visa alla"}
        </button>
      </div>
    </div>
  );
}
