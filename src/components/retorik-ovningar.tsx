"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getRetorikExercises,
  RETORIK_CATEGORY_LABELS,
  type RetorikCategory,
  type RetorikExercise,
  type RetorikQuiz,
  type RetorikMatch,
  type RetorikAnalysis,
} from "@/lib/data/retorik-ovningar";
import { recordQuizResult, recordActivity } from "@/lib/progress";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const CATEGORIES: RetorikCategory[] = [
  "ethos-pathos-logos",
  "retoriska-grepp",
  "argumentationsanalys",
  "debatt",
];

/* -------------------------------------------------------------------------- */
/*  Quiz renderer                                                              */
/* -------------------------------------------------------------------------- */

function QuizRenderer({
  exercise,
  answered,
  selectedIndex,
  onSelect,
}: {
  exercise: RetorikQuiz;
  answered: boolean;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}) {
  return (
    <div>
      <p className="mb-5 text-lg text-neutral-800 dark:text-neutral-200">
        {exercise.prompt}
      </p>
      <div className="flex flex-col gap-2">
        {exercise.options.map((option, i) => {
          const isCorrect = i === exercise.correct;
          let style =
            "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

          if (answered) {
            if (isCorrect) {
              style =
                "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
            } else if (i === selectedIndex) {
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
              className={`min-h-[44px] rounded-lg border px-4 py-2 text-left text-sm font-medium transition-colors ${style}`}
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

/* -------------------------------------------------------------------------- */
/*  Match renderer                                                             */
/* -------------------------------------------------------------------------- */

function MatchRenderer({
  exercise,
  answered,
  onComplete,
}: {
  exercise: RetorikMatch;
  answered: boolean;
  onComplete: (correct: boolean) => void;
}) {
  const shuffledRight = useMemo(
    () => {
      const rights = exercise.pairs.map((p) => p.right);
      const copy = [...rights];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },
    [exercise]
  );
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setSelectedLeft(null);
    setMatches({});
    setChecked(false);
  }, [exercise]);

  const handleLeftClick = (i: number) => {
    if (checked) return;
    setSelectedLeft(i === selectedLeft ? null : i);
  };

  const handleRightClick = (j: number) => {
    if (checked || selectedLeft === null) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: j }));
    setSelectedLeft(null);
  };

  const handleCheck = () => {
    if (checked) return;
    setChecked(true);
    const allCorrect = exercise.pairs.every(
      (pair, i) => shuffledRight[matches[i]] === pair.right
    );
    onComplete(allCorrect);
  };

  const getLeftStyle = (i: number) => {
    if (i === selectedLeft)
      return "border-neutral-900 bg-neutral-100 ring-2 ring-neutral-900 dark:border-white dark:bg-neutral-800 dark:ring-white";
    if (matches[i] !== undefined && !checked)
      return "border-neutral-400 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800";
    if (checked) {
      const isCorrect = shuffledRight[matches[i]] === exercise.pairs[i].right;
      return isCorrect
        ? "bg-emerald-50 border-emerald-500 dark:bg-emerald-950 dark:border-emerald-400"
        : "bg-red-50 border-red-500 dark:bg-red-950 dark:border-red-400";
    }
    return "border-neutral-200 bg-white hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600";
  };

  return (
    <div>
      <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-400">
        Klicka på ett begrepp till vänster, sedan på rätt match till höger.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {exercise.pairs.map((pair, i) => (
            <button
              key={i}
              onClick={() => handleLeftClick(i)}
              disabled={checked}
              className={`min-h-[44px] rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${getLeftStyle(i)}`}
            >
              {pair.left}
              {matches[i] !== undefined && !checked && (
                <span className="ml-2 text-xs text-neutral-400">
                  → {shuffledRight[matches[i]]}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {shuffledRight.map((text, j) => {
            const usedBy = Object.entries(matches).find(([, v]) => v === j);
            const used = !!usedBy && !checked;
            return (
              <button
                key={j}
                onClick={() => handleRightClick(j)}
                disabled={checked || selectedLeft === null}
                className={`min-h-[44px] rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                  used
                    ? "border-neutral-400 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800"
                    : selectedLeft !== null && !checked
                      ? "border-neutral-200 bg-white hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                      : "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
                }`}
              >
                {text}
              </button>
            );
          })}
        </div>
      </div>
      {!checked && Object.keys(matches).length === exercise.pairs.length && (
        <button
          onClick={handleCheck}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Rätta
        </button>
      )}
      {checked && (
        <div className="mt-4 rounded-lg bg-neutral-50 p-3 text-sm dark:bg-neutral-900" aria-live="polite">
          {exercise.pairs.every((pair, i) => shuffledRight[matches[i]] === pair.right) ? (
            <span className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Alla rätt!
            </span>
          ) : (
            <div>
              <span className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <XCircle className="h-4 w-4" aria-hidden="true" /> Inte alla rätt.
              </span>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Rätt svar:{" "}
                {exercise.pairs.map((p) => `${p.left} → ${p.right}`).join(", ")}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Analysis renderer                                                          */
/* -------------------------------------------------------------------------- */

function AnalysisRenderer({
  exercise,
  answered,
  selectedIndex,
  onSelect,
}: {
  exercise: RetorikAnalysis;
  answered: boolean;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}) {
  return (
    <div>
      <div className="mb-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm leading-relaxed text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
        {exercise.text}
      </div>
      <p className="mb-4 text-lg font-medium text-neutral-800 dark:text-neutral-200">
        {exercise.question}
      </p>
      <div className="flex flex-col gap-2">
        {exercise.options.map((option, i) => {
          const isCorrect = i === exercise.correct;
          let style =
            "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

          if (answered) {
            if (isCorrect) {
              style =
                "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
            } else if (i === selectedIndex) {
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
              className={`min-h-[44px] rounded-lg border px-4 py-2 text-left text-sm font-medium transition-colors ${style}`}
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

/* -------------------------------------------------------------------------- */
/*  Main component                                                             */
/* -------------------------------------------------------------------------- */

export function RetorikOvningar({ ageGroup }: { ageGroup: AgeGroup }) {
  const [activeCategory, setActiveCategory] = useState<RetorikCategory>(CATEGORIES[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resultRecorded, setResultRecorded] = useState(false);

  const exercises = useMemo(
    () => getRetorikExercises(activeCategory, ageGroup),
    [activeCategory, ageGroup]
  );

  // Reset when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(false);
    setFinished(false);
    setSelectedIndex(null);
    setResultRecorded(false);
  }, [activeCategory, ageGroup]);

  const handleCategoryChange = useCallback((cat: RetorikCategory) => {
    setActiveCategory(cat);
  }, []);

  const handleQuizAnswer = useCallback(
    (index: number) => {
      if (answered) return;
      const ex = exercises[currentIndex];
      if (!ex || ex.type === "match") return;
      setSelectedIndex(index);
      setAnswered(true);
      const correct = index === ex.correct;
      setIsCorrect(correct);
      if (correct) setScore((s) => s + 1);
    },
    [answered, exercises, currentIndex]
  );

  const handleMatchComplete = useCallback(
    (correct: boolean) => {
      if (answered) return;
      setAnswered(true);
      setIsCorrect(correct);
      if (correct) setScore((s) => s + 1);
    },
    [answered]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
      setIsCorrect(false);
      setSelectedIndex(null);
    } else {
      setFinished(true);
    }
  }, [currentIndex, exercises.length]);

  // Record result when finished
  useEffect(() => {
    if (finished && !resultRecorded) {
      recordQuizResult({
        ageGroup,
        score,
        total: exercises.length,
        bestStreak: 0,
      });
      recordActivity();
      setResultRecorded(true);
    }
  }, [finished, resultRecorded, ageGroup, score, exercises.length]);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setIsCorrect(false);
    setFinished(false);
    setSelectedIndex(null);
    setResultRecorded(false);
  }, []);

  /* ---- Results screen ---- */
  if (finished && exercises.length > 0) {
    const percentage = Math.round((score / exercises.length) * 100);
    const message =
      percentage >= 90
        ? "Fantastiskt!"
        : percentage >= 70
          ? "Bra jobbat!"
          : percentage >= 50
            ? "Helt okej!"
            : "Fortsatt öva!";

    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Trophy className="mx-auto h-12 w-12 text-amber-500" />
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
          <Badge variant="secondary" className="mt-3">
            {RETORIK_CATEGORY_LABELS[activeCategory]}
          </Badge>
          <div className="mt-6">
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <RotateCcw className="h-4 w-4" />
              Gör om
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ---- Main UI ---- */
  return (
    <Card>
      <CardHeader>
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Retorikkategorier">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => handleCategoryChange(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              {RETORIK_CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        {exercises.length === 0 ? (
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-800">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Inga övningar tillgängliga för denna kategori.
            </p>
          </div>
        ) : (
          <>
            {/* Progress bar + score */}
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-neutral-500 dark:text-neutral-400">
                Övning {currentIndex + 1} av {exercises.length}
              </span>
              <span className="font-medium text-neutral-900 dark:text-white" aria-live="polite">
                {score} rätt
              </span>
            </div>
            <div
              className="mb-6 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"
              role="progressbar"
              aria-valuenow={currentIndex + (answered ? 1 : 0)}
              aria-valuemin={0}
              aria-valuemax={exercises.length}
              aria-label={`Framsteg: ${currentIndex + (answered ? 1 : 0)} av ${exercises.length} övningar`}
            >
              <div
                className="h-full rounded-full bg-neutral-900 transition-all duration-300 dark:bg-white"
                style={{
                  width: `${((currentIndex + (answered ? 1 : 0)) / exercises.length) * 100}%`,
                }}
              />
            </div>

            {/* Feedback icon */}
            {answered && (
              <div className="mb-4 flex items-center gap-2" aria-live="polite">
                {isCorrect ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> Rätt!
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 dark:text-red-400">
                    <XCircle className="h-5 w-5" aria-hidden="true" /> Fel
                  </span>
                )}
              </div>
            )}

            {/* Exercise content */}
            {(() => {
              const ex = exercises[currentIndex];
              if (!ex) return null;

              switch (ex.type) {
                case "quiz":
                  return (
                    <QuizRenderer
                      exercise={ex}
                      answered={answered}
                      selectedIndex={selectedIndex}
                      onSelect={handleQuizAnswer}
                    />
                  );
                case "match":
                  return (
                    <MatchRenderer
                      exercise={ex}
                      answered={answered}
                      onComplete={handleMatchComplete}
                    />
                  );
                case "analysis":
                  return (
                    <AnalysisRenderer
                      exercise={ex}
                      answered={answered}
                      selectedIndex={selectedIndex}
                      onSelect={handleQuizAnswer}
                    />
                  );
                default:
                  return null;
              }
            })()}

            {/* Next button */}
            {answered && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  {currentIndex < exercises.length - 1 ? "Nästa" : "Se resultat"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
