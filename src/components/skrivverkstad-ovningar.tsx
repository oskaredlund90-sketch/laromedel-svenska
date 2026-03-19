"use client";

import { useState, useCallback, useMemo } from "react";
import {
  CheckSquare,
  ListOrdered,
  MessageSquare,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Search,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";
import {
  getExercises,
  type TemplateExercises,
  type ChecklistItem,
  type StepGuideStep,
  type PeerReviewCategory,
  type WordBankCategory,
} from "@/lib/data/skrivverkstad-ovningar";

/* -------------------------------------------------------------------------- */
/*  Tab definitions                                                           */
/* -------------------------------------------------------------------------- */

type TabId = "checklista" | "steg" | "kamratrespons" | "ordbanken";

const TABS: { id: TabId; label: string; icon: typeof CheckSquare }[] = [
  { id: "checklista", label: "Checklista", icon: CheckSquare },
  { id: "steg", label: "Steg-för-steg", icon: ListOrdered },
  { id: "kamratrespons", label: "Kamratrespons", icon: MessageSquare },
  { id: "ordbanken", label: "Ordbanken", icon: BookOpen },
];

/* -------------------------------------------------------------------------- */
/*  ChecklistaTab                                                             */
/* -------------------------------------------------------------------------- */

function ChecklistaTab({ items }: { items: ChecklistItem[] }) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const reset = useCallback(() => setChecked(new Set()), []);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
          Checklista
        </h3>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {checked.size}/{items.length} avklarade
        </span>
      </div>

      <ul className="space-y-2">
        {items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full min-h-[44px] items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all duration-200 ${
                    isChecked
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-neutral-300 dark:border-neutral-600"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                <span
                  className={`text-sm transition-all duration-200 ${
                    isChecked
                      ? "text-emerald-600 line-through dark:text-emerald-400"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {item.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-4">
        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="h-3.5 w-3.5" />
          Återställ
        </Button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  StegForStegTab                                                            */
/* -------------------------------------------------------------------------- */

function StegForStegTab({ steps }: { steps: StepGuideStep[] }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [showExample, setShowExample] = useState(false);

  const step = steps[currentStep];
  if (!step) return null;

  return (
    <div>
      {/* Step indicators */}
      <div className="mb-4 flex items-center gap-1.5 overflow-x-auto pb-1">
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setCurrentStep(i);
              setShowExample(false);
            }}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors ${
              i === currentStep
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : i < currentStep
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  : "bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="mb-1 text-xs font-medium text-neutral-400 dark:text-neutral-500">
        Steg {currentStep + 1} av {steps.length}
      </div>
      <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-white">
        {step.title}
      </h3>

      {/* Instruction */}
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        {step.instruction}
      </p>

      {/* Collapsible example */}
      {step.example && (
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setShowExample((v) => !v)}
            className="flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
          >
            {showExample ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            Visa exempel
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              showExample ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-2 rounded-lg border border-neutral-100 bg-neutral-50 p-3 text-sm italic text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-400">
              {step.example}
            </div>
          </div>
        </div>
      )}

      {/* Textarea for notes */}
      <textarea
        value={notes[currentStep] ?? ""}
        onChange={(e) =>
          setNotes((prev) => ({ ...prev, [currentStep]: e.target.value }))
        }
        placeholder={step.placeholder ?? "Skriv dina anteckningar här..."}
        rows={4}
        className="w-full rounded-lg border border-neutral-200 p-3 text-sm transition-colors focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-neutral-500"
      />

      {/* Navigation */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setCurrentStep((s) => s - 1);
            setShowExample(false);
          }}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Föregående
        </Button>
        <Button
          size="sm"
          onClick={() => {
            setCurrentStep((s) => s + 1);
            setShowExample(false);
          }}
          disabled={currentStep === steps.length - 1}
        >
          Nästa
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  KamratresponsTab                                                          */
/* -------------------------------------------------------------------------- */

function KamratresponsTab({
  categories,
}: {
  categories: PeerReviewCategory[];
}) {
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [showSummary, setShowSummary] = useState(false);

  const toggleExpanded = useCallback((title: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }, []);

  const feedbackKey = (catTitle: string, promptIndex: number) =>
    `${catTitle}::${promptIndex}`;

  const filledFeedback = useMemo(() => {
    const entries: { category: string; prompt: string; text: string }[] = [];
    for (const cat of categories) {
      cat.prompts.forEach((prompt, i) => {
        const key = feedbackKey(cat.title, i);
        const text = feedback[key];
        if (text?.trim()) {
          entries.push({ category: cat.title, prompt, text: text.trim() });
        }
      });
    }
    return entries;
  }, [feedback, categories]);

  if (showSummary) {
    return (
      <div>
        <h3 className="mb-4 text-base font-semibold text-neutral-900 dark:text-white">
          Sammanfattning
        </h3>
        {filledFeedback.length === 0 ? (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Ingen feedback har fyllts i ännu.
          </p>
        ) : (
          <div className="space-y-4">
            {filledFeedback.map((entry, i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-100 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-800/50"
              >
                <div className="mb-1 text-xs font-medium text-neutral-400 dark:text-neutral-500">
                  {entry.category}
                </div>
                <div className="mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {entry.prompt}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {entry.text}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSummary(false)}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Tillbaka
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-neutral-900 dark:text-white">
        Kamratrespons
      </h3>

      <div className="space-y-2">
        {categories.map((cat) => {
          const isExpanded = expanded.has(cat.title);
          return (
            <div
              key={cat.title}
              className="rounded-lg border border-neutral-200 dark:border-neutral-700"
            >
              <button
                type="button"
                onClick={() => toggleExpanded(cat.title)}
                className="flex w-full min-h-[44px] items-center justify-between px-4 py-3 text-left text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
              >
                {cat.title}
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 shrink-0 text-neutral-400" />
                ) : (
                  <ChevronDown className="h-4 w-4 shrink-0 text-neutral-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3 border-t border-neutral-100 px-4 py-3 dark:border-neutral-800">
                  {cat.prompts.map((prompt, i) => {
                    const key = feedbackKey(cat.title, i);
                    return (
                      <div key={i}>
                        <label className="mb-1.5 block text-sm text-neutral-600 dark:text-neutral-400">
                          {prompt}
                        </label>
                        <textarea
                          value={feedback[key] ?? ""}
                          onChange={(e) =>
                            setFeedback((prev) => ({
                              ...prev,
                              [key]: e.target.value,
                            }))
                          }
                          rows={2}
                          className="w-full rounded-lg border border-neutral-200 p-3 text-sm transition-colors focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-neutral-500"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <Button size="sm" onClick={() => setShowSummary(true)}>
          <ClipboardCheck className="h-3.5 w-3.5" />
          Sammanfattning
        </Button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  OrdbankenTab                                                              */
/* -------------------------------------------------------------------------- */

function OrdbankenTab({ categories }: { categories: WordBankCategory[] }) {
  const [search, setSearch] = useState("");
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return categories;
    const q = search.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        words: cat.words.filter((w) => w.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.words.length > 0);
  }, [categories, search]);

  const handleCopy = useCallback((word: string) => {
    navigator.clipboard.writeText(word).then(() => {
      setCopiedWord(word);
      setTimeout(() => setCopiedWord(null), 1500);
    });
  }, []);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Sök ord..."
          className="w-full min-h-[44px] rounded-lg border border-neutral-200 py-2.5 pl-9 pr-3 text-sm transition-colors focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-neutral-500"
        />
      </div>

      {/* Categories & words */}
      {filtered.length === 0 ? (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Inga ord hittades.
        </p>
      ) : (
        <div className="space-y-4">
          {filtered.map((cat) => (
            <div key={cat.title}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.words.map((word) => (
                  <button
                    key={word}
                    type="button"
                    onClick={() => handleCopy(word)}
                    className="relative rounded-full border border-neutral-200 px-3 py-1 text-sm cursor-pointer transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                  >
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {word}
                    </span>

                    {/* Kopierad toast */}
                    {copiedWord === word && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-white shadow-lg animate-[kopieradFade_1.5s_ease-in-out_forwards] dark:bg-white dark:text-neutral-900">
                        Kopierad!
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CSS animation via style tag */}
      <style jsx>{`
        @keyframes kopieradFade {
          0% {
            opacity: 0;
            transform: translate(-50%, 4px);
          }
          15% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          75% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -4px);
          }
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */

interface SkrivverkstadOvningarProps {
  template: string;
  ageGroup: AgeGroup;
}

export function SkrivverkstadOvningar({
  template,
  ageGroup,
}: SkrivverkstadOvningarProps) {
  const exercises = getExercises(template, ageGroup);
  const [activeTab, setActiveTab] = useState<TabId>("checklista");

  if (!exercises) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Inga övningar tillgängliga.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
      {/* Tab bar */}
      <div className="mb-6 -mx-1 overflow-x-auto">
        <div className="flex gap-1.5 px-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "checklista" && (
        <ChecklistaTab items={exercises.checklist} />
      )}
      {activeTab === "steg" && <StegForStegTab steps={exercises.stepGuide} />}
      {activeTab === "kamratrespons" && (
        <KamratresponsTab categories={exercises.peerReview} />
      )}
      {activeTab === "ordbanken" && (
        <OrdbankenTab categories={exercises.wordBank} />
      )}
    </div>
  );
}
