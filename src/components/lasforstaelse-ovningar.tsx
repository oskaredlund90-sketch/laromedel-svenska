"use client";

import { useState, useMemo, useCallback } from "react";
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";
import {
  getReadingTexts,
  LEVEL_LABELS,
  type ReadingText,
  type QuestionLevel,
} from "@/lib/data/lasforstaelse";
import { recordQuizResult, recordActivity } from "@/lib/progress";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface LasforstaelseOvningarProps {
  ageGroup: AgeGroup;
}

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const LEVEL_COLORS: Record<QuestionLevel, string> = {
  hitta: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  tolka: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  reflektera:
    "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
};

const LEVEL_BORDER: Record<QuestionLevel, string> = {
  hitta: "border-sky-400 dark:border-sky-500",
  tolka: "border-amber-400 dark:border-amber-500",
  reflektera: "border-violet-400 dark:border-violet-500",
};

function emptyLevelScores(): Record<
  QuestionLevel,
  { correct: number; total: number }
> {
  return {
    hitta: { correct: 0, total: 0 },
    tolka: { correct: 0, total: 0 },
    reflektera: { correct: 0, total: 0 },
  };
}

function getResultEmoji(pct: number): string {
  if (pct >= 90) return "\u{1F3C6}";
  if (pct >= 70) return "\u2B50";
  if (pct >= 50) return "\u{1F44D}";
  return "\u{1F4AA}";
}

function getResultMessage(pct: number): string {
  if (pct >= 90) return "Fantastiskt! Du har utmärkt läsförståelse!";
  if (pct >= 70) return "Bra jobbat! Du förstår texten väl.";
  if (pct >= 50) return "Helt okej! Fortsätt öva så blir det ännu bättre.";
  return "Bra försök! Läs texten igen och testa en gång till.";
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function LasforstaelseOvningar({
  ageGroup,
}: LasforstaelseOvningarProps) {
  /* --- data --- */
  const texts = useMemo(() => getReadingTexts(ageGroup), [ageGroup]);

  /* --- state --- */
  const [selectedText, setSelectedText] = useState<ReadingText | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const [levelScores, setLevelScores] = useState<
    Record<QuestionLevel, { correct: number; total: number }>
  >(emptyLevelScores);

  /* --- derived --- */
  const currentQuestion = selectedText
    ? selectedText.questions[currentQuestionIndex] ?? null
    : null;
  const totalQuestions = selectedText?.questions.length ?? 0;
  const isCorrect =
    currentQuestion !== null && selectedOption === currentQuestion.correct;

  /* --- callbacks --- */
  const selectText = useCallback((text: ReadingText) => {
    setSelectedText(text);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setFinished(false);
    setLevelScores(emptyLevelScores());
  }, []);

  const backToList = useCallback(() => {
    setSelectedText(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setFinished(false);
    setLevelScores(emptyLevelScores());
  }, []);

  const handleSelectOption = useCallback(
    (index: number) => {
      if (answered || !currentQuestion) return;
      setSelectedOption(index);
      setAnswered(true);

      const correct = index === currentQuestion.correct;
      const level = currentQuestion.level;

      if (correct) {
        setScore((s) => s + 1);
        setStreak((s) => {
          const next = s + 1;
          setBestStreak((b) => Math.max(b, next));
          return next;
        });
      } else {
        setStreak(0);
      }

      setLevelScores((prev) => ({
        ...prev,
        [level]: {
          correct: prev[level].correct + (correct ? 1 : 0),
          total: prev[level].total + 1,
        },
      }));
    },
    [answered, currentQuestion],
  );

  const handleNext = useCallback(() => {
    if (!selectedText) return;

    if (currentQuestionIndex >= totalQuestions - 1) {
      /* Finished — record progress */
      setFinished(true);
      recordQuizResult({
        ageGroup,
        score,
        total: totalQuestions,
        bestStreak,
      });
      recordActivity();
      return;
    }

    setCurrentQuestionIndex((i) => i + 1);
    setSelectedOption(null);
    setAnswered(false);
  }, [
    selectedText,
    currentQuestionIndex,
    totalQuestions,
    ageGroup,
    score,
    bestStreak,
  ]);

  const handleRetry = useCallback(() => {
    if (!selectedText) return;
    selectText(selectedText);
  }, [selectedText, selectText]);

  /* ------------------------------------------------------------------ */
  /*  Screen 1 — Text selection                                          */
  /* ------------------------------------------------------------------ */

  if (!selectedText) {
    return (
      <div>
        <div className="mb-6 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
            Läsförståelse
          </h2>
        </div>

        {texts.length === 0 && (
          <p className="text-neutral-500 dark:text-neutral-400">
            Inga texter tillgängliga för denna årskurs ännu.
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {texts.map((text) => {
            /* Collect unique levels present in this text */
            const levels = Array.from(
              new Set(text.questions.map((q) => q.level)),
            );

            return (
              <button
                key={text.id}
                onClick={() => selectText(text)}
                className="rounded-lg border border-neutral-200 bg-white p-5 text-left transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
              >
                <h3 className="mb-2 text-base font-semibold text-neutral-900 dark:text-white">
                  {text.title}
                </h3>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  {levels.map((level) => (
                    <span
                      key={level}
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${LEVEL_COLORS[level]}`}
                    >
                      {LEVEL_LABELS[level]}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {text.questions.length} frågor
                </p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /*  Screen 3 — Results                                                 */
  /* ------------------------------------------------------------------ */

  if (finished) {
    const pct = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    const emoji = getResultEmoji(pct);
    const message = getResultMessage(pct);

    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-2 text-5xl">{emoji}</div>
        <h3 className="mb-1 text-2xl font-bold text-neutral-900 dark:text-white">
          {score} av {totalQuestions} rätt
        </h3>
        <p className="mb-6 text-neutral-500 dark:text-neutral-400">
          {message}
        </p>

        {/* Per-level breakdown */}
        <div className="mx-auto mb-8 flex max-w-md flex-wrap justify-center gap-3">
          {(["hitta", "tolka", "reflektera"] as const).map((level) => {
            const ls = levelScores[level];
            if (ls.total === 0) return null;
            return (
              <div
                key={level}
                className={`rounded-lg border px-4 py-2 text-sm font-medium ${LEVEL_COLORS[level]} ${LEVEL_BORDER[level]}`}
              >
                {LEVEL_LABELS[level]}: {ls.correct}/{ls.total}
              </div>
            );
          })}
        </div>

        {bestStreak > 1 && (
          <p className="mb-6 text-sm text-amber-600 dark:text-amber-400">
            Bästa svit: {bestStreak} rätt i rad!
          </p>
        )}

        <div className="flex justify-center gap-3">
          <Button onClick={handleRetry} variant="default">
            <RotateCcw className="h-4 w-4" />
            Försök igen
          </Button>
          <Button onClick={backToList} variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Välj en annan text
          </Button>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /*  Screen 2 — Reading + answering                                     */
  /* ------------------------------------------------------------------ */

  if (!currentQuestion) return null;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Header */}
      <div className="border-b border-neutral-100 px-6 py-4 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <button
            onClick={backToList}
            className="flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Alla texter
          </button>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            Fråga {currentQuestionIndex + 1} av {totalQuestions}
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="mt-3 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800"
          role="progressbar"
          aria-valuenow={currentQuestionIndex + (answered ? 1 : 0)}
          aria-valuemin={0}
          aria-valuemax={totalQuestions}
          aria-label={`Framsteg: ${currentQuestionIndex + (answered ? 1 : 0)} av ${totalQuestions} frågor`}
        >
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 transition-all duration-300 dark:from-sky-500 dark:to-sky-400"
            style={{
              width: `${((currentQuestionIndex + (answered ? 1 : 0)) / totalQuestions) * 100}%`,
            }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-sm">
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {selectedText.title}
          </h3>
          <span className="font-medium text-neutral-900 dark:text-white" aria-live="polite">
            {score} rätt
          </span>
        </div>
      </div>

      {/* Text passage */}
      <div className="px-6 pt-6">
        <div className="rounded-lg bg-neutral-50 p-6 leading-relaxed text-base text-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-200">
          {selectedText.passage.split("\n").map((para, i) => (
            <p key={i} className={i > 0 ? "mt-4" : ""}>
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${LEVEL_COLORS[currentQuestion.level]}`}
          >
            {LEVEL_LABELS[currentQuestion.level]}
          </span>
        </div>

        <h4 className="mb-4 text-lg font-medium text-neutral-900 dark:text-white">
          {currentQuestion.prompt}
        </h4>

        {/* Options */}
        <div className="space-y-2">
          {currentQuestion.options.map((option, i) => {
            const isThisCorrect = i === currentQuestion.correct;
            let style =
              "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

            if (answered) {
              if (isThisCorrect) {
                style =
                  "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
              } else if (i === selectedOption && !isCorrect) {
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
                onClick={() => handleSelectOption(i)}
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
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answered && currentQuestion.explanation && (
          <div
            aria-live="polite"
            className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
              isCorrect
                ? "border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                : "border-red-300 bg-red-100 text-red-800 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300"
            }`}
          >
            {currentQuestion.explanation}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-end">
          {answered && (
            <Button onClick={handleNext} size="sm">
              {currentQuestionIndex >= totalQuestions - 1
                ? "Se resultat"
                : "Nästa fråga"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
