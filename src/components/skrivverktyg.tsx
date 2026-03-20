"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { PenLine, BarChart3, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";

interface SkrivverktygProps {
  template: string;
  ageGroup: AgeGroup;
}

interface TextAnalysis {
  words: number;
  sentences: number;
  paragraphs: number;
  avgSentenceLength: number;
  longestSentence: number;
}

function analyzeText(text: string): TextAnalysis {
  const trimmed = text.trim();

  if (!trimmed) {
    return {
      words: 0,
      sentences: 0,
      paragraphs: 0,
      avgSentenceLength: 0,
      longestSentence: 0,
    };
  }

  const words = trimmed.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Split on sentence-ending punctuation followed by whitespace or end of string
  const sentenceParts = trimmed
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const sentenceCount = sentenceParts.length;

  // Paragraphs: split on double newlines
  const paragraphs = trimmed
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const paragraphCount = paragraphs.length;

  // Compute words per sentence for avg and longest
  const sentenceWordCounts = sentenceParts.map(
    (s) => s.split(/\s+/).filter(Boolean).length
  );

  const avgSentenceLength =
    sentenceCount > 0
      ? Math.round((wordCount / sentenceCount) * 10) / 10
      : 0;

  const longestSentence =
    sentenceWordCounts.length > 0 ? Math.max(...sentenceWordCounts) : 0;

  return {
    words: wordCount,
    sentences: sentenceCount,
    paragraphs: paragraphCount,
    avgSentenceLength,
    longestSentence,
  };
}

function getFeedback(analysis: TextAnalysis): string[] {
  const { words, sentences, paragraphs, avgSentenceLength } = analysis;
  const tips: string[] = [];

  if (words === 0) {
    return ["Börja skriva för att se statistik om din text."];
  }

  if (words >= 250) {
    tips.push("Imponerande! Över 250 ord — fortsätt så!");
  } else if (words >= 100) {
    tips.push("Bra jobbat! Du har skrivit över 100 ord.");
  }

  if (avgSentenceLength > 20) {
    tips.push(
      "Dina meningar är ganska långa. Prova att dela upp några!"
    );
  }

  if (avgSentenceLength < 8 && sentences > 3) {
    tips.push(
      "Prova att variera meningslängden — blanda korta och långa meningar."
    );
  }

  if (words > 50 && paragraphs <= 1) {
    tips.push(
      "Tänk på att dela upp texten i stycken för bättre läsbarhet."
    );
  }

  return tips.length > 0 ? tips.slice(0, 2) : [];
}

export default function Skrivverktyg({ template, ageGroup }: SkrivverktygProps) {
  const storageKey = `skrivverktyg-draft-${template}-${ageGroup}`;
  const [text, setText] = useState("");
  const [saveIndicator, setSaveIndicator] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);

  // Load saved draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setText(saved);
      }
    } catch {
      // localStorage unavailable
    }
    mountedRef.current = true;
  }, [storageKey]);

  // Auto-save with 1s debounce
  const saveDraft = useCallback(
    (value: string) => {
      try {
        localStorage.setItem(storageKey, value);
        setSaveIndicator(true);
        setTimeout(() => setSaveIndicator(false), 2000);
      } catch {
        // localStorage unavailable or full
      }
    },
    [storageKey]
  );

  const handleChange = useCallback(
    (value: string) => {
      setText(value);

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        saveDraft(value);
      }, 1000);
    },
    [saveDraft]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const handleClear = useCallback(() => {
    if (!text.trim()) return;
    const confirmed = window.confirm(
      "Är du säker på att du vill rensa texten? Utkastet raderas."
    );
    if (confirmed) {
      setText("");
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  }, [text, storageKey]);

  const handleSave = useCallback(() => {
    saveDraft(text);
  }, [saveDraft, text]);

  const analysis = useMemo(() => analyzeText(text), [text]);
  const feedback = useMemo(() => getFeedback(analysis), [analysis]);

  const stats = [
    { label: "Ord", value: analysis.words },
    { label: "Meningar", value: analysis.sentences },
    { label: "Stycken", value: analysis.paragraphs },
    { label: "Snittlängd", value: analysis.avgSentenceLength },
    { label: "Längsta mening", value: `${analysis.longestSentence} ord` },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Text editor */}
      <div className="sm:col-span-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <PenLine className="h-4 w-4" />
            <span className="text-sm font-medium">Skrivyta</span>
          </div>
          <div className="flex items-center gap-2">
            {saveIndicator && (
              <span className="text-xs text-green-600 dark:text-green-400 animate-pulse">
                Utkast sparat
              </span>
            )}
            <Button variant="ghost" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4" />
              <span className="sr-only">Spara</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleClear}>
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Rensa</span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Börja skriva din text här..."
            className="w-full min-h-[300px] resize-y rounded-lg border border-neutral-200 bg-white p-4 text-base leading-relaxed text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-1 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600"
          />
          <span className="absolute bottom-3 right-3 text-xs text-neutral-400 dark:text-neutral-500 pointer-events-none">
            {text.length} tecken
          </span>
        </div>
      </div>

      {/* Analysis panel */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <BarChart3 className="h-4 w-4" />
          <span className="text-sm font-medium">Textanalys</span>
        </div>

        <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md bg-white dark:bg-neutral-800 p-3 text-center shadow-sm"
              >
                <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {feedback.length > 0 && (
          <div className="flex flex-col gap-2">
            {feedback.map((tip, i) => (
              <div
                key={i}
                className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-3 rounded-r-md"
              >
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
