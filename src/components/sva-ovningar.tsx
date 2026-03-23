"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowRight,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getSvaExercises,
  SVA_CATEGORY_LABELS,
  type SvaCategory,
  type SvaExercise,
} from "@/lib/data/sva-ovningar";
import { recordQuizResult, recordActivity } from "@/lib/progress";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface SvaOvningarProps {
  ageGroup: AgeGroup;
}

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const CATEGORIES: SvaCategory[] = [
  "prepositioner",
  "genus",
  "ordfoljd",
  "vanliga-fel",
  "partikelverb",
  "utokad-ordfoljd",
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function SvaOvningar({ ageGroup }: SvaOvningarProps) {
  const [activeCategory, setActiveCategory] =
    useState<SvaCategory>("prepositioner");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedFillIn, setSelectedFillIn] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resultRecorded, setResultRecorded] = useState(false);

  /* -- Exercises for active category -- */
  const exercises = useMemo(
    () => getSvaExercises(activeCategory, ageGroup),
    [activeCategory, ageGroup],
  );

  /* -- Reset when category or ageGroup changes -- */
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setSelectedFillIn(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setAnswered(false);
    setIsCorrect(false);
    setFinished(false);
    setResultRecorded(false);
  }, [activeCategory, ageGroup]);

  /* -- Handle category change -- */
  const handleCategoryChange = useCallback((cat: SvaCategory) => {
    setActiveCategory(cat);
  }, []);

  /* -- Handle answer for multiple-choice -- */
  const handleSelectOption = useCallback(
    (index: number, exercise: SvaExercise) => {
      if (answered) return;
      if (exercise.type !== "multiple-choice") return;
      setSelectedOption(index);
      setAnswered(true);
      const correct = index === exercise.correct;
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
    [answered],
  );

  /* -- Handle answer for fill-in-blank -- */
  const handleSelectFillIn = useCallback(
    (option: string, exercise: SvaExercise) => {
      if (answered) return;
      if (exercise.type !== "fill-in-blank") return;
      setSelectedFillIn(option);
      setAnswered(true);
      const correct = option === exercise.correct;
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
    [answered],
  );

  /* -- Navigate to next exercise -- */
  const handleNext = useCallback(() => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setSelectedFillIn(null);
      setAnswered(false);
      setIsCorrect(false);
    } else {
      setFinished(true);
    }
  }, [currentIndex, exercises.length]);

  /* -- Record result when finished -- */
  useEffect(() => {
    if (finished && !resultRecorded) {
      recordQuizResult({
        ageGroup,
        score,
        total: exercises.length,
        bestStreak,
      });
      recordActivity();
      setResultRecorded(true);
    }
  }, [finished, resultRecorded, ageGroup, score, exercises.length, bestStreak]);

  /* -- Retry category -- */
  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setSelectedFillIn(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setAnswered(false);
    setIsCorrect(false);
    setFinished(false);
    setResultRecorded(false);
  }, []);

  /* -- No exercises available -- */
  if (exercises.length === 0) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Inga SVA-övningar tillgängliga för denna kategori och årskurs.
        </p>
      </div>
    );
  }

  /* -- Results screen -- */
  if (finished) {
    const percentage = Math.round((score / exercises.length) * 100);
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
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        {/* Category tabs (always visible) */}
        <CategoryTabs
          active={activeCategory}
          onChange={handleCategoryChange}
        />

        <div className="p-8 text-center">
          <div className="text-5xl">{emoji}</div>
          <h3 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
            {message}
          </h3>
          <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
            Du fick{" "}
            <span className="font-bold text-neutral-900 dark:text-white">
              {score} av {exercises.length}
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
      </div>
    );
  }

  /* -- Current exercise -- */
  const currentExercise = exercises[currentIndex];
  if (!currentExercise) return null;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Category tabs */}
      <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />

      {/* Progress bar */}
      <div className="border-b border-neutral-100 px-6 py-3 dark:border-neutral-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500 dark:text-neutral-400">
            Fråga {currentIndex + 1} av {exercises.length}
          </span>
          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <ChevronRight className="h-3.5 w-3.5" />
                {streak} i rad!
              </span>
            )}
            <span className="font-medium text-neutral-900 dark:text-white" aria-live="polite">
              {score} rätt
            </span>
          </div>
        </div>
        <div
          className="mt-2 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800"
          role="progressbar"
          aria-valuenow={currentIndex + (answered ? 1 : 0)}
          aria-valuemin={0}
          aria-valuemax={exercises.length}
          aria-label={`Framsteg: ${currentIndex + (answered ? 1 : 0)} av ${exercises.length} övningar`}
        >
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 dark:from-amber-500 dark:to-amber-400"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / exercises.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Exercise content */}
      <div className="p-6">
        {currentExercise.type === "multiple-choice" && (
          <MultipleChoiceBlock
            key={`mc-${currentIndex}-${activeCategory}`}
            exercise={currentExercise}
            answered={answered}
            isCorrect={isCorrect}
            selectedIndex={selectedOption}
            onSelect={(i) => handleSelectOption(i, currentExercise)}
          />
        )}
        {currentExercise.type === "fill-in-blank" && (
          <FillInBlankBlock
            key={`fib-${currentIndex}-${activeCategory}`}
            exercise={currentExercise}
            answered={answered}
            isCorrect={isCorrect}
            selected={selectedFillIn}
            onSelect={(opt) => handleSelectFillIn(opt, currentExercise)}
          />
        )}

        {/* Next button */}
        {answered && (
          <div className="mt-6 flex justify-end">
            <Button onClick={handleNext} size="sm">
              {currentIndex === exercises.length - 1
                ? "Visa resultat"
                : "Nästa"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                             */
/* -------------------------------------------------------------------------- */

function CategoryTabs({
  active,
  onChange,
}: {
  active: SvaCategory;
  onChange: (cat: SvaCategory) => void;
}) {
  return (
    <div className="border-b border-neutral-100 px-6 py-4 dark:border-neutral-800">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="SVA-kategorier">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => onChange(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            }`}
          >
            {SVA_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---- Multiple Choice ---- */

function MultipleChoiceBlock({
  exercise,
  answered,
  isCorrect,
  selectedIndex,
  onSelect,
}: {
  exercise: Extract<SvaExercise, { type: "multiple-choice" }>;
  answered: boolean;
  isCorrect: boolean;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {exercise.instruction}
      </h4>
      <p className="mb-5 text-lg text-neutral-800 dark:text-neutral-200">
        {exercise.prompt}
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
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
              onClick={() => onSelect(i)}
              disabled={answered}
              className={`flex min-h-[44px] w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${style}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {answered && isThisCorrect && (
                <>
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <span className="sr-only">Rätt svar</span>
                </>
              )}
              {answered && i === selectedIndex && !isCorrect && (
                <>
                  <XCircle className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" aria-hidden="true" />
                  <span className="sr-only">Fel svar</span>
                </>
              )}
            </button>
          );
        })}
      </div>
      {answered && exercise.explanation && (
        <p className="mt-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800/50 dark:text-neutral-400" aria-live="polite">
          {exercise.explanation}
        </p>
      )}
    </div>
  );
}

/* ---- Fill-in-blank ---- */

function FillInBlankBlock({
  exercise,
  answered,
  isCorrect,
  selected,
  onSelect,
}: {
  exercise: Extract<SvaExercise, { type: "fill-in-blank" }>;
  answered: boolean;
  isCorrect: boolean;
  selected: string | null;
  onSelect: (option: string) => void;
}) {
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
              onClick={() => onSelect(option)}
              disabled={answered}
              className={`min-h-[44px] rounded-lg border px-5 py-2 text-sm font-medium transition-colors ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {answered && exercise.explanation && (
        <p className="mt-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800/50 dark:text-neutral-400" aria-live="polite">
          {exercise.explanation}
        </p>
      )}
    </div>
  );
}
