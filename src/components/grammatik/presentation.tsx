"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Eye, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Bild {
  lektion: number;
  innehall: ReactNode;
}

/**
 * Presentationen för en årskurs. Alla lektioners bilder finns i samma
 * presentation, men bara den valda lektionens bilder visas.
 * Piltangenter eller mellanslag bläddrar, F ger helskärm.
 */
export function Presentation({
  bilder,
  lektioner,
  startLektion,
}: {
  bilder: Bild[];
  lektioner: { nr: number; titel: string }[];
  startLektion: number;
}) {
  const [lektion, setLektion] = useState(startLektion);
  const [index, setIndex] = useState(0);
  const [helskarm, setHelskarm] = useState(false);
  const ram = useRef<HTMLDivElement>(null);
  const visade = lektion === 0 ? bilder : bilder.filter((b) => b.lektion === lektion);
  const antal = visade.length;

  const ga = useCallback((d: number) => setIndex((i) => Math.min(Math.max(i + d, 0), Math.max(antal - 1, 0))), [antal]);

  const vaxlaHelskarm = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen();
    else ram.current?.requestFullscreen();
  }, []);

  useEffect(() => {
    const tangent = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "SELECT") return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        ga(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        ga(-1);
      } else if (e.key === "f" || e.key === "F") vaxlaHelskarm();
    };
    const fs = () => setHelskarm(!!document.fullscreenElement);
    window.addEventListener("keydown", tangent);
    document.addEventListener("fullscreenchange", fs);
    return () => {
      window.removeEventListener("keydown", tangent);
      document.removeEventListener("fullscreenchange", fs);
    };
  }, [ga, vaxlaHelskarm]);

  const valjLektion = (nr: number) => {
    setLektion(nr);
    setIndex(0);
    const url = new URL(window.location.href);
    if (nr) url.searchParams.set("lektion", String(nr));
    else url.searchParams.delete("lektion");
    window.history.replaceState(null, "", url);
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <label className="text-sm text-neutral-500" htmlFor="lektion">
          Lektion
        </label>
        <select
          id="lektion"
          value={lektion}
          onChange={(e) => valjLektion(Number(e.target.value))}
          className="max-w-full rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        >
          {lektioner.map((l) => (
            <option key={l.nr} value={l.nr}>
              {l.nr}. {l.titel}
            </option>
          ))}
          <option value={0}>Alla bilder ({bilder.length})</option>
        </select>
        <span className="text-sm text-neutral-500">
          Bild {antal ? index + 1 : 0} av {antal} · ← → bläddrar · F = helskärm
        </span>
      </div>

      <div
        ref={ram}
        className={cn("relative", helskarm && "flex h-screen w-screen items-center justify-center bg-neutral-950")}
        onClick={(e) => {
          if (!helskarm) return;
          if ((e.target as HTMLElement).closest("button")) return;
          ga(e.clientX > window.innerWidth / 2 ? 1 : -1);
        }}
      >
        <div
          className={cn(
            "@container relative aspect-video overflow-hidden rounded-xl border border-neutral-200 bg-[#fbfaf7] text-neutral-900 shadow-sm dark:border-neutral-700",
            helskarm ? "w-[min(100vw,177.78vh)] rounded-none border-0" : "w-full",
          )}
        >
          {visade.map((b, i) => (
            <div key={i} className={cn("absolute inset-0 p-[5cqw]", i === index ? "block" : "hidden")}>
              {b.innehall}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => ga(-1)}
          disabled={index === 0}
          className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm disabled:opacity-40 dark:border-neutral-700"
        >
          <ChevronLeft className="h-4 w-4" /> Föregående
        </button>
        <button
          type="button"
          onClick={vaxlaHelskarm}
          className="inline-flex items-center gap-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
        >
          {helskarm ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />} Helskärm
        </button>
        <button
          type="button"
          onClick={() => ga(1)}
          disabled={index >= antal - 1}
          className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm disabled:opacity-40 dark:border-neutral-700"
        >
          Nästa <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/** Alternativen till en fråga – rätt svar och förklaring visas när läraren klickar. */
export function Svarsalternativ({ alternativ, ratt, forklaring }: { alternativ: string[]; ratt: number; forklaring?: string }) {
  const [visa, setVisa] = useState(false);
  return (
    <div>
      <ol className="grid gap-[1.2cqw]" style={{ gridTemplateColumns: alternativ.every((a) => a.length < 22) ? `repeat(${Math.min(alternativ.length, 4)}, minmax(0, 1fr))` : "1fr" }}>
        {alternativ.map((a, i) => (
          <li
            key={i}
            className={cn(
              "rounded-[1cqw] border-[0.25cqw] px-[1.6cqw] py-[1cqw] text-[2.6cqw] leading-tight transition-colors",
              visa && i === ratt ? "border-emerald-600 bg-emerald-50 font-bold text-emerald-900" : "border-neutral-300 bg-white",
              visa && i !== ratt && "opacity-50",
            )}
          >
            <span className="mr-[1cqw] font-bold text-sky-700">{String.fromCharCode(65 + i)}</span>
            {a}
          </li>
        ))}
      </ol>
      <div className="mt-[2cqw] min-h-[6cqw]">
        {visa ? (
          forklaring && <p className="text-[2.2cqw] leading-snug text-neutral-700">{forklaring}</p>
        ) : (
          <button
            type="button"
            onClick={() => setVisa(true)}
            className="inline-flex items-center gap-[0.8cqw] rounded-[1cqw] bg-sky-700 px-[2cqw] py-[1cqw] text-[2cqw] font-semibold text-white"
          >
            <Eye className="h-[2.2cqw] w-[2.2cqw]" /> Visa svaret
          </button>
        )}
      </div>
    </div>
  );
}
