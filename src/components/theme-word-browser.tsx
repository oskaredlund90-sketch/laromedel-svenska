"use client";

import { useState, useMemo } from "react";
import { Tag, Search } from "lucide-react";
import type { WordRow } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Theme labels with emoji                                                   */
/* -------------------------------------------------------------------------- */

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

const DIFFICULTY_STYLES: Record<string, string> = {
  enkel: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  medel: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  avancerad: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface ThemeWordBrowserProps {
  words: WordRow[];
  themes: string[];
}

export function ThemeWordBrowser({ words, themes }: ThemeWordBrowserProps) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWords = useMemo(() => {
    let result = words;

    if (selectedTheme) {
      result = result.filter((w) => w.theme === selectedTheme);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.definition.toLowerCase().includes(q)
      );
    }

    return result;
  }, [words, selectedTheme, searchQuery]);

  return (
    <div>
      {/* Theme filter chips */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTheme(null)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
            !selectedTheme
              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
          }`}
        >
          <Tag className="mr-1 inline h-3.5 w-3.5" />
          Alla teman ({words.length})
        </button>
        {themes.map((theme) => {
          const count = words.filter((w) => w.theme === theme).length;
          return (
            <button
              key={theme}
              onClick={() =>
                setSelectedTheme(theme === selectedTheme ? null : theme)
              }
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                theme === selectedTheme
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              {THEME_LABELS[theme] ?? theme} ({count})
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Sök bland ord..."
          className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-9 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600 dark:focus:ring-neutral-800"
        />
      </div>

      {/* Word count */}
      <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        {filteredWords.length} ord{selectedTheme ? ` i tema ${THEME_LABELS[selectedTheme] ?? selectedTheme}` : ""}
      </p>

      {/* Word grid */}
      {filteredWords.length === 0 ? (
        <p className="text-center text-neutral-500 dark:text-neutral-400">
          Inga ord hittades.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {word.word}
                </h4>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                  {word.word_class}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    DIFFICULTY_STYLES[word.difficulty] ?? DIFFICULTY_STYLES.medel
                  }`}
                >
                  {word.difficulty}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {word.definition}
              </p>
              <p className="mt-2 text-xs italic text-neutral-500 dark:text-neutral-500">
                &quot;{word.example}&quot;
              </p>
              {word.etymology && (
                <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                  💡 {word.etymology}
                </p>
              )}
              {word.theme && THEME_LABELS[word.theme] && (
                <span className="mt-2 inline-block rounded-full bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  {THEME_LABELS[word.theme]}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
