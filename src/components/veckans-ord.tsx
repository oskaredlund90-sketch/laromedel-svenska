"use client";

import { useState } from "react";
import { VECKANS_ORD } from "@/lib/data/veckans-ord";
import type { WordRow } from "@/lib/supabase/types";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Types & helpers                                                           */
/* -------------------------------------------------------------------------- */

export interface WordEntry {
  word: string;
  definition: string;
  wordClass: string;
  example: string;
  etymology?: string;
  difficulty: string;
  theme?: string;
}

function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

const DIFFICULTY_STYLES: Record<string, string> = {
  enkel: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  medel: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  avancerad: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
};

const THEME_LABELS: Record<string, string> = {
  natur: "🌿 Natur",
  känslor: "❤️ Känslor",
  kanslor: "❤️ Känslor",
  samhälle: "🏛️ Samhälle",
  samhalle: "🏛️ Samhälle",
  skola: "📚 Skola",
  kroppen: "🧬 Kroppen",
  teknik: "💻 Teknik",
  historia: "🏺 Historia",
  litteratur: "📖 Litteratur",
  vetenskap: "🔬 Vetenskap",
  vardagsliv: "🏠 Vardagsliv",
};

/** Convert WordRow (from Supabase) to WordEntry */
function wordRowToEntry(row: WordRow): WordEntry {
  return {
    word: row.word,
    definition: row.definition,
    wordClass: row.word_class,
    example: row.example,
    etymology: row.etymology ?? undefined,
    difficulty: row.difficulty,
    theme: row.theme,
  };
}

/** Convert local data to WordEntry */
function localToEntry(entry: typeof VECKANS_ORD[number]): WordEntry {
  return {
    word: entry.word,
    definition: entry.definition,
    wordClass: entry.wordClass,
    example: entry.example,
    etymology: entry.etymology,
    difficulty: entry.difficulty,
    theme: entry.theme,
  };
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface VeckansOrdProps {
  /** Pre-fetched words from Supabase (optional — falls back to local data) */
  words?: WordRow[];
}

export function VeckansOrd({ words }: VeckansOrdProps) {
  const [offset, setOffset] = useState(0);

  // Use Supabase data if provided, otherwise fall back to local
  const entries: WordEntry[] = words && words.length > 0
    ? words.map(wordRowToEntry)
    : VECKANS_ORD.map(localToEntry);

  if (entries.length === 0) return null;

  const week = getWeekNumber(new Date());
  const baseIndex = week % entries.length;
  const index = ((baseIndex + offset) % entries.length + entries.length) % entries.length;
  const entry = entries[index];

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-3 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Veckans ord
              </span>
              {entry.theme && THEME_LABELS[entry.theme] && (
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  {THEME_LABELS[entry.theme]}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setOffset((o) => o - 1)}
                aria-label="Föregående ord"
                className="rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setOffset((o) => o + 1)}
                aria-label="Nästa ord"
                className="rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Word + badges */}
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {entry.word}
              </h3>
              <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                {entry.wordClass}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${DIFFICULTY_STYLES[entry.difficulty] ?? DIFFICULTY_STYLES.medel}`}
              >
                {entry.difficulty}
              </span>
            </div>

            {/* Definition */}
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              {entry.definition}
            </p>

            {/* Example */}
            <div className="mt-4 flex gap-2 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/50">
              <Quote className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
              <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
                {entry.example}
              </p>
            </div>

            {/* Etymology */}
            {entry.etymology && (
              <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
                <span className="font-medium text-neutral-600 dark:text-neutral-400">
                  Visste du?
                </span>{" "}
                {entry.etymology}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
