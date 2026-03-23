"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  BookText,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  getExercisesForTopic,
  type GrammarExercise,
  type MultipleChoiceExercise,
  type FillInBlankExercise,
  type ErrorCorrectionExercise,
  type CategorizationExercise,
  type SentenceAnalysisExercise,
} from "@/lib/data/grammatik-ovningar";
import { recordQuizResult, recordActivity } from "@/lib/progress";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export type GrammarTopic =
  | "ordklasser"
  | "meningsbyggnad"
  | "skiljetecken"
  | "stavning"
  | "ordbildning"
  | "textbindning"
  | "stilistik";

interface GrammatikOvningarProps {
  topic: GrammarTopic;
  ageGroup: AgeGroup;
}

type ExerciseType = GrammarExercise["type"];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const TAB_LABELS: Record<string, string> = {
  all: "Alla",
  "multiple-choice": "Flerval",
  "fill-in-blank": "Lucktext",
  "error-correction": "Rättstavning",
  categorization: "Kategorisering",
  "sentence-analysis": "Satsanalys",
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* -------------------------------------------------------------------------- */
/*  Sub-renderers                                                              */
/* -------------------------------------------------------------------------- */

interface RendererProps<T extends GrammarExercise> {
  exercise: T;
  answered: boolean;
  isCorrect: boolean;
  onAnswer: (correct: boolean) => void;
}

/* ---- MultipleChoice ---- */

function MultipleChoiceRenderer({
  exercise,
  answered,
  isCorrect,
  onAnswer,
}: RendererProps<MultipleChoiceExercise>) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [exercise]);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelectedIndex(index);
    const correct = index === exercise.correct;
    onAnswer(correct);
  };

  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {exercise.instruction}
      </h4>
      <p className="mb-5 text-lg text-neutral-800 dark:text-neutral-200">
        {exercise.prompt}
      </p>
      <div className="space-y-2">
        {exercise.options.map((option, i) => {
          const isThisCorrect = i === exercise.correct;
          let style =
            "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

          if (answered) {
            if (isThisCorrect) {
              style =
                "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
            } else if (i === selectedIndex && !isCorrect) {
              style =
                "bg-red-50 border-red-500 text-red-700 dark:bg-red-950 dark:border-red-400 dark:text-red-300";
            } else {
              style =
                "border-neutral-100 bg-neutral-50 opacity-50 dark:border-neutral-800 dark:bg-neutral-900";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`flex min-h-[44px] w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${style}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {answered && isThisCorrect && (
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              )}
              {answered && i === selectedIndex && !isCorrect && (
                <XCircle className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
              )}
            </button>
          );
        })}
      </div>
      {answered && exercise.explanation && (
        <p className="mt-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          {exercise.explanation}
        </p>
      )}
    </div>
  );
}

/* ---- FillInBlank ---- */

function FillInBlankRenderer({
  exercise,
  answered,
  isCorrect,
  onAnswer,
}: RendererProps<FillInBlankExercise>) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [exercise]);

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    const correct = option === exercise.correct;
    onAnswer(correct);
  };

  const renderedSentence = useMemo(() => {
    const parts = exercise.sentence.split("____");
    if (parts.length < 2) return exercise.sentence;
    return (
      <>
        {parts[0]}
        <span
          className={`inline-block min-w-[80px] rounded px-2 py-0.5 text-center font-medium ${
            !answered && !selected
              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
              : answered && isCorrect
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                : answered && !isCorrect
                  ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
          }`}
        >
          {selected ?? "____"}
        </span>
        {parts[1]}
      </>
    );
  }, [exercise.sentence, selected, answered, isCorrect]);

  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {exercise.instruction}
      </h4>
      <p className="mb-5 text-lg text-neutral-800 dark:text-neutral-200">
        {renderedSentence}
      </p>
      <div className="flex flex-wrap gap-2">
        {exercise.options.map((option, i) => {
          const isThisCorrect = option === exercise.correct;
          let style =
            "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

          if (answered) {
            if (isThisCorrect) {
              style =
                "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
            } else if (option === selected && !isCorrect) {
              style =
                "bg-red-50 border-red-500 text-red-700 dark:bg-red-950 dark:border-red-400 dark:text-red-300";
            } else {
              style =
                "border-neutral-100 bg-neutral-50 opacity-50 dark:border-neutral-800 dark:bg-neutral-900";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              disabled={answered}
              className={`min-h-[44px] rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {answered && exercise.explanation && (
        <p className="mt-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          {exercise.explanation}
        </p>
      )}
    </div>
  );
}

/* ---- ErrorCorrection ---- */

function ErrorCorrectionRenderer({
  exercise,
  answered,
  isCorrect,
  onAnswer,
}: RendererProps<ErrorCorrectionExercise>) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [exercise]);

  const options = useMemo(
    () => shuffleArray([exercise.errorWord, exercise.correctWord]),
    [exercise.errorWord, exercise.correctWord]
  );

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    const correct = option === exercise.correctWord;
    onAnswer(correct);
  };

  const highlightedSentence = useMemo(() => {
    const idx = exercise.sentence.indexOf(exercise.errorWord);
    if (idx === -1) return exercise.sentence;
    const before = exercise.sentence.slice(0, idx);
    const after = exercise.sentence.slice(idx + exercise.errorWord.length);
    return (
      <>
        {before}
        <span
          className={`inline-block rounded px-1 py-0.5 font-medium ${
            answered && isCorrect
              ? "bg-emerald-100 text-emerald-800 line-through dark:bg-emerald-900/40 dark:text-emerald-300"
              : answered && !isCorrect
                ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                : "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300"
          }`}
        >
          {answered && isCorrect ? exercise.errorWord : exercise.errorWord}
        </span>
        {after}
      </>
    );
  }, [exercise, answered, isCorrect]);

  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {exercise.instruction}
      </h4>
      <p className="mb-5 text-lg text-neutral-800 dark:text-neutral-200">
        {highlightedSentence}
      </p>
      <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
        Vilket alternativ är korrekt?
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option, i) => {
          const isThisCorrect = option === exercise.correctWord;
          let style =
            "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

          if (answered) {
            if (isThisCorrect) {
              style =
                "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
            } else if (option === selected && !isCorrect) {
              style =
                "bg-red-50 border-red-500 text-red-700 dark:bg-red-950 dark:border-red-400 dark:text-red-300";
            } else {
              style =
                "border-neutral-100 bg-neutral-50 opacity-50 dark:border-neutral-800 dark:bg-neutral-900";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              disabled={answered}
              className={`min-h-[44px] rounded-lg border px-5 py-2 text-sm font-medium transition-colors ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-4 space-y-2">
          {isCorrect && (
            <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Rättad mening:{" "}
              <span className="font-medium">
                {exercise.sentence.replace(
                  exercise.errorWord,
                  exercise.correctWord
                )}
              </span>
            </p>
          )}
          {exercise.explanation && (
            <p className="rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              {exercise.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/* ---- Categorization ---- */

function CategorizationRenderer({
  exercise,
  answered,
  isCorrect,
  onAnswer,
}: RendererProps<CategorizationExercise>) {
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAssignments({});
    setSelectedItem(null);
    setChecked(false);
  }, [exercise]);

  // correctMapping: Record<item, category> — derive items from it
  const allItems = useMemo(
    () => Object.keys(exercise.correctMapping),
    [exercise]
  );

  const shuffledItems = useMemo(() => shuffleArray(allItems), [allItems]);

  const unassignedItems = useMemo(
    () => shuffledItems.filter((item) => !assignments[item]),
    [shuffledItems, assignments]
  );

  const handleItemClick = (item: string) => {
    if (checked) return;
    if (assignments[item]) {
      // Remove assignment
      setAssignments((prev) => {
        const next = { ...prev };
        delete next[item];
        return next;
      });
      return;
    }
    setSelectedItem(item === selectedItem ? null : item);
  };

  const handleCategoryClick = (category: string) => {
    if (checked || !selectedItem) return;
    setAssignments((prev) => ({ ...prev, [selectedItem]: category }));
    setSelectedItem(null);
  };

  const handleCheck = () => {
    if (checked) return;
    setChecked(true);
    // Verify all assignments
    let allCorrect = true;
    for (const item of allItems) {
      const assignedCat = assignments[item];
      if (!assignedCat) {
        allCorrect = false;
        break;
      }
      const correctCat = exercise.correctMapping[item];
      if (assignedCat !== correctCat) {
        allCorrect = false;
        break;
      }
    }
    onAnswer(allCorrect);
  };

  const getItemStyle = (item: string) => {
    if (!checked) {
      if (item === selectedItem) {
        return "border-neutral-900 bg-neutral-100 dark:border-white dark:bg-neutral-800";
      }
      return "border-neutral-200 bg-white hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600";
    }
    // After check
    const assignedCat = assignments[item];
    const correctCat = exercise.correctMapping[item];
    if (assignedCat === correctCat) {
      return "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
    }
    return "bg-red-50 border-red-500 text-red-700 dark:bg-red-950 dark:border-red-400 dark:text-red-300";
  };

  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {exercise.instruction}
      </h4>

      {/* Category columns */}
      <div className="mb-4 grid gap-3" style={{ gridTemplateColumns: `repeat(${exercise.categories.length}, 1fr)` }}>
        {exercise.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            disabled={checked}
            className={`min-h-[44px] rounded-lg border-2 border-dashed px-3 py-2 text-center text-sm font-semibold transition-colors ${
              selectedItem && !checked
                ? "border-neutral-400 bg-neutral-50 hover:border-neutral-600 hover:bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-800 dark:hover:border-neutral-400"
                : "border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
            }`}
          >
            {cat}
            {/* Show assigned items */}
            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {Object.entries(assignments)
                .filter(([, c]) => c === cat)
                .map(([item]) => (
                  <span
                    key={item}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item);
                    }}
                    className={`inline-block cursor-pointer rounded border px-2 py-0.5 text-xs ${getItemStyle(item)}`}
                  >
                    {item}
                  </span>
                ))}
            </div>
          </button>
        ))}
      </div>

      {/* Unassigned items */}
      {unassignedItems.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {unassignedItems.map((item) => (
            <button
              key={item}
              onClick={() => handleItemClick(item)}
              disabled={checked}
              className={`min-h-[36px] rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${getItemStyle(item)}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Check button */}
      {!checked && (
        <Button
          onClick={handleCheck}
          disabled={Object.keys(assignments).length < allItems.length}
          className="mt-2"
        >
          Kontrollera
          <CheckCircle className="h-4 w-4" />
        </Button>
      )}

    </div>
  );
}

/* ---- SentenceAnalysis ---- */

function SentenceAnalysisRenderer({
  exercise,
  answered,
  isCorrect,
  onAnswer,
}: RendererProps<SentenceAnalysisExercise>) {
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setLabels({});
    setSelectedPart(null);
    setChecked(false);
  }, [exercise]);

  const handlePartClick = (part: string) => {
    if (checked) return;
    setSelectedPart(part === selectedPart ? null : part);
  };

  const handleRoleClick = (role: string) => {
    if (checked || !selectedPart) return;
    setLabels((prev) => ({ ...prev, [selectedPart]: role }));
    setSelectedPart(null);
  };

  const handleCheck = () => {
    if (checked) return;
    setChecked(true);
    let allCorrect = true;
    for (const part of exercise.parts) {
      if (labels[part.text] !== part.role) {
        allCorrect = false;
        break;
      }
    }
    onAnswer(allCorrect);
  };

  const getPartStyle = (partText: string) => {
    if (!checked) {
      if (partText === selectedPart) {
        return "border-neutral-900 bg-neutral-100 ring-2 ring-neutral-900 dark:border-white dark:bg-neutral-800 dark:ring-white";
      }
      if (labels[partText]) {
        return "border-neutral-400 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800";
      }
      return "border-neutral-200 bg-white hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600";
    }
    // After check
    const part = exercise.parts.find((p) => p.text === partText);
    if (part && labels[partText] === part.role) {
      return "bg-emerald-50 border-emerald-500 dark:bg-emerald-950 dark:border-emerald-400";
    }
    return "bg-red-50 border-red-500 dark:bg-red-950 dark:border-red-400";
  };

  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {exercise.instruction}
      </h4>
      <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
        {exercise.sentence}
      </p>

      {/* Parts as clickable chips */}
      <div className="mb-5 flex flex-wrap gap-2">
        {exercise.parts.map((part, i) => (
          <button
            key={i}
            onClick={() => handlePartClick(part.text)}
            disabled={checked}
            className={`relative min-h-[44px] rounded-lg border px-3 pb-2 pt-5 text-sm font-medium transition-colors ${getPartStyle(part.text)}`}
          >
            {labels[part.text] && (
              <span
                className={`absolute left-1/2 top-0.5 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold ${
                  checked
                    ? exercise.parts.find((p) => p.text === part.text)
                        ?.role === labels[part.text]
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {labels[part.text]}
              </span>
            )}
            {part.text}
          </button>
        ))}
      </div>

      {/* Role options */}
      <p className="mb-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
        Välj en roll:
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {exercise.roleOptions.map((role) => (
          <button
            key={role}
            onClick={() => handleRoleClick(role)}
            disabled={checked || !selectedPart}
            className={`min-h-[36px] rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedPart && !checked
                ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                : "border border-neutral-200 bg-neutral-50 text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Check button */}
      {!checked && (
        <Button
          onClick={handleCheck}
          disabled={
            Object.keys(labels).length < exercise.parts.length
          }
          className="mt-2"
        >
          Kontrollera
          <CheckCircle className="h-4 w-4" />
        </Button>
      )}

      {checked && (
        <div className="mt-4 space-y-2">
          {!isCorrect && (
            <div className="rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              <p className="mb-1 font-medium">Rätt svar:</p>
              <ul className="space-y-0.5">
                {exercise.parts.map((part, i) => (
                  <li key={i}>
                    <span className="font-medium">{part.text}</span>
                    {" = "}
                    {part.role}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main component                                                             */
/* -------------------------------------------------------------------------- */

export function GrammatikOvningar({ topic, ageGroup }: GrammatikOvningarProps) {
  const [exercises, setExercises] = useState<GrammarExercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [bestStreak, setBestStreak] = useState(0);
  const [streak, setStreak] = useState(0);
  const [resultRecorded, setResultRecorded] = useState(false);

  // Load exercises
  useEffect(() => {
    const data = getExercisesForTopic(topic, ageGroup);
    setExercises(data);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(false);
    setFinished(false);
    setActiveTab("all");
    setBestStreak(0);
    setStreak(0);
    setResultRecorded(false);
  }, [topic, ageGroup]);

  // Available exercise types for tabs
  const availableTypes = useMemo(() => {
    const types = new Set(exercises.map((e) => e.type));
    return Array.from(types);
  }, [exercises]);

  // Filtered exercises based on active tab
  const filteredExercises = useMemo(() => {
    if (activeTab === "all") return exercises;
    return exercises.filter((e) => e.type === activeTab);
  }, [exercises, activeTab]);

  // Handle tab change
  const handleTabChange = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      setCurrentIndex(0);
      setAnswered(false);
      setIsCorrect(false);
      setFinished(false);
    },
    []
  );

  // Handle answer from sub-renderer
  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (answered) return;
      setAnswered(true);
      setIsCorrect(correct);
      if (correct) {
        setScore((s) => s + 1);
        setStreak((s) => {
          const newStreak = s + 1;
          setBestStreak((best) => Math.max(best, newStreak));
          return newStreak;
        });
      } else {
        setStreak(0);
      }
    },
    [answered]
  );

  // Navigation
  const handleNext = useCallback(() => {
    if (currentIndex < filteredExercises.length - 1) {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
      setIsCorrect(false);
    } else {
      setFinished(true);
    }
  }, [currentIndex, filteredExercises.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setAnswered(false);
      setIsCorrect(false);
    }
  }, [currentIndex]);

  // Record result when finished
  useEffect(() => {
    if (finished && !resultRecorded) {
      recordQuizResult({
        ageGroup,
        score,
        total: filteredExercises.length,
        bestStreak,
      });
      recordActivity();
      setResultRecorded(true);
    }
  }, [finished, resultRecorded, ageGroup, score, filteredExercises.length, bestStreak]);

  // Reset / retry
  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(false);
    setFinished(false);
    setBestStreak(0);
    setStreak(0);
    setResultRecorded(false);
  }, []);

  // No exercises
  if (exercises.length === 0) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Inga övningar tillgängliga för detta ämne.
        </p>
      </div>
    );
  }

  // Results screen
  if (finished) {
    const percentage = Math.round((score / filteredExercises.length) * 100);
    const emoji =
      percentage >= 90
        ? "\uD83C\uDFC6"
        : percentage >= 70
          ? "\u2B50"
          : percentage >= 50
            ? "\uD83D\uDC4D"
            : "\uD83D\uDCAA";
    const message =
      percentage >= 90
        ? "Fantastiskt!"
        : percentage >= 70
          ? "Bra jobbat!"
          : percentage >= 50
            ? "Helt okej!"
            : "Fortsätt öva!";

    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="text-5xl">{emoji}</div>
        <h3 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          {message}
        </h3>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Du fick{" "}
          <span className="font-bold text-neutral-900 dark:text-white">
            {score} av {filteredExercises.length}
          </span>{" "}
          rätt ({percentage}%)
        </p>
        {bestStreak > 1 && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
            <Trophy className="h-4 w-4" />
            Bästa svit: {bestStreak} rätt i rad
          </div>
        )}
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={handleRetry} variant="default">
            <RotateCcw className="h-4 w-4" />
            Försök igen
          </Button>
        </div>
      </div>
    );
  }

  const currentExercise = filteredExercises[currentIndex];
  if (!currentExercise) return null;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Header */}
      <div className="border-b border-neutral-100 px-6 py-4 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
            Övningar
          </h3>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {filteredExercises.length} övningar
          </span>
        </div>

        {/* Tabs */}
        {availableTypes.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => handleTabChange("all")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTab === "all"
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              Alla
            </button>
            {availableTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTabChange(type)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === type
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                }`}
              >
                {TAB_LABELS[type] ?? type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="border-b border-neutral-100 px-6 py-3 dark:border-neutral-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500 dark:text-neutral-400">
            Övning {currentIndex + 1} av {filteredExercises.length}
          </span>
          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <ChevronRight className="h-3.5 w-3.5" />
                {streak} i rad!
              </span>
            )}
            <span className="font-medium text-neutral-900 dark:text-white">
              {score} rätt
            </span>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 dark:from-amber-500 dark:to-amber-400"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / filteredExercises.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Exercise content */}
      <div className="p-6">
        {currentExercise.type === "multiple-choice" && (
          <MultipleChoiceRenderer
            key={`mc-${currentIndex}`}
            exercise={currentExercise as MultipleChoiceExercise}
            answered={answered}
            isCorrect={isCorrect}
            onAnswer={handleAnswer}
          />
        )}
        {currentExercise.type === "fill-in-blank" && (
          <FillInBlankRenderer
            key={`fib-${currentIndex}`}
            exercise={currentExercise as FillInBlankExercise}
            answered={answered}
            isCorrect={isCorrect}
            onAnswer={handleAnswer}
          />
        )}
        {currentExercise.type === "error-correction" && (
          <ErrorCorrectionRenderer
            key={`ec-${currentIndex}`}
            exercise={currentExercise as ErrorCorrectionExercise}
            answered={answered}
            isCorrect={isCorrect}
            onAnswer={handleAnswer}
          />
        )}
        {currentExercise.type === "categorization" && (
          <CategorizationRenderer
            key={`cat-${currentIndex}`}
            exercise={currentExercise as CategorizationExercise}
            answered={answered}
            isCorrect={isCorrect}
            onAnswer={handleAnswer}
          />
        )}
        {currentExercise.type === "sentence-analysis" && (
          <SentenceAnalysisRenderer
            key={`sa-${currentIndex}`}
            exercise={currentExercise as SentenceAnalysisExercise}
            answered={answered}
            isCorrect={isCorrect}
            onAnswer={handleAnswer}
          />
        )}

        {/* Related text link */}
        {answered && currentExercise.relatedTextSlug && (
          <Link
            href={`/${ageGroup}/textbank/${currentExercise.relatedTextSlug}`}
            className="mt-3 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            <BookText className="h-4 w-4" />
            Relaterad text i textbanken
          </Link>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="outline"
            size="sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Föregående
          </Button>
          {answered && (
            <Button onClick={handleNext} size="sm">
              {currentIndex === filteredExercises.length - 1
                ? "Visa resultat"
                : "Nästa"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
