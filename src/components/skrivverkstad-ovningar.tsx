"use client";

import { useState, useCallback, useMemo } from "react";
import {
  CheckSquare,
  ListOrdered,
  MessageSquare,
  BookOpen,
  PenLine,
  ChevronDown,
  ChevronUp,
  Search,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Skrivverktyg from "@/components/skrivverktyg";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";
import {
  getSkrivovningar,
  type TemplateSlug,
  type SkrivovningData,
  type ChecklistaItem,
  type StegForStegStep,
  type KamratresponsCategory,
  type OrdbankCategory,
} from "@/lib/data/skrivverkstad-ovningar";

/* -------------------------------------------------------------------------- */
/*  Tab definitions                                                           */
/* -------------------------------------------------------------------------- */

type TabId = "checklista" | "steg" | "kamratrespons" | "ordbanken" | "skriv";

const TABS: { id: TabId; label: string; icon: typeof CheckSquare }[] = [
  { id: "checklista", label: "Checklista", icon: CheckSquare },
  { id: "steg", label: "Steg-för-steg", icon: ListOrdered },
  { id: "kamratrespons", label: "Kamratrespons", icon: MessageSquare },
  { id: "ordbanken", label: "Ordbanken", icon: BookOpen },
  { id: "skriv", label: "Skriv", icon: PenLine },
];

/* -------------------------------------------------------------------------- */
/*  ChecklistaTab                                                             */
/* -------------------------------------------------------------------------- */

function ChecklistaTab({ items }: { items: ChecklistaItem[] }) {
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

  const allDone = checked.size === items.length && items.length > 0;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
          Checklista
        </h3>
        <div className="flex items-center gap-2">
          {allDone && (
            <CheckCircle className="h-5 w-5 text-emerald-500" />
          )}
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {checked.size}/{items.length} avklarade
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
        <div
          className={`h-1.5 rounded-full transition-all duration-300 ${
            allDone
              ? "bg-emerald-500"
              : "bg-gradient-to-r from-amber-400 to-amber-500 dark:from-amber-500 dark:to-amber-400"
          }`}
          style={{
            width: `${items.length > 0 ? (checked.size / items.length) * 100 : 0}%`,
          }}
        />
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

      <div className="mt-4 flex items-center gap-3">
        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="h-3.5 w-3.5" />
          Återställ
        </Button>
        {allDone && (
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Alla avklarade!
          </span>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  StegForStegTab                                                            */
/* -------------------------------------------------------------------------- */

function StegForStegTab({ steps }: { steps: StegForStegStep[] }) {
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
        placeholder={step.placeholder || "Skriv dina anteckningar här..."}
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
  categories: KamratresponsCategory[];
}) {
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  // First category expanded by default
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(categories.length > 0 ? [categories[0].title] : [])
  );

  const toggleExpanded = useCallback((title: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }, []);

  const feedbackKey = (catTitle: string, questionIndex: number) =>
    `${catTitle}::${questionIndex}`;

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
                  {cat.prompts.map((question: string, i: number) => {
                    const key = feedbackKey(cat.title, i);
                    return (
                      <div key={i}>
                        <label className="mb-1.5 block text-sm text-neutral-600 dark:text-neutral-400">
                          {question}
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
                          placeholder="Skriv din feedback här..."
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
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  OrdbankenTab                                                              */
/* -------------------------------------------------------------------------- */

function OrdbankenTab({ categories }: { categories: OrdbankCategory[] }) {
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
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-white shadow-lg dark:bg-white dark:text-neutral-900 animate-fade-in-out">
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
  const data = getSkrivovningar(template as TemplateSlug, ageGroup);
  const [activeTab, setActiveTab] = useState<TabId>("checklista");

  if (!data) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Inga övningar tillgängliga.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      {/* Tab bar */}
      <div className="px-6 pt-4">
        <div className="flex gap-1 overflow-x-auto border-b border-neutral-200 dark:border-neutral-800">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex whitespace-nowrap items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
                    : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
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
      <div className="p-6">
        {activeTab === "checklista" && (
          <ChecklistaTab items={data.checklista} />
        )}
        {activeTab === "steg" && (
          <StegForStegTab steps={data.stegForSteg} />
        )}
        {activeTab === "kamratrespons" && (
          <KamratresponsTab categories={data.kamratrespons} />
        )}
        {activeTab === "ordbanken" && (
          <OrdbankenTab categories={data.ordbanken} />
        )}
        {activeTab === "skriv" && (
          <Skrivverktyg template={template} ageGroup={ageGroup} />
        )}
      </div>
    </div>
  );
}
