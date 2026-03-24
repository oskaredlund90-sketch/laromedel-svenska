"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { QuizCard, MatchCard } from "@/components/exercise-cards";
import { ExerciseRunner } from "@/components/exercise-runner";
import type { LasstrategiExercise, LasstrategiApplication } from "@/lib/data/lasstrategier-ovningar";

// ---------------------------------------------------------------------------
// StrategyApplicationCard
// ---------------------------------------------------------------------------

function StrategyApplicationCard({
  exercise,
  onDone,
}: {
  exercise: LasstrategiApplication;
  onDone: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === exercise.correct;

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    onDone(idx === exercise.correct);
  }

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-neutral-600 dark:text-neutral-400">
        {exercise.instruction}
      </p>

      {/* Text passage */}
      <div className="mb-5 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/50">
        <p className="text-sm italic leading-relaxed text-neutral-800 dark:text-neutral-200">
          {exercise.text}
        </p>
      </div>

      {/* Prompt */}
      <p className="mb-4 font-medium text-neutral-900 dark:text-white">
        {exercise.prompt}
      </p>

      {/* Options */}
      <div className="space-y-2">
        {exercise.options.map((opt, i) => {
          let style =
            "cursor-pointer border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-500";
          if (answered) {
            if (i === exercise.correct)
              style =
                "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-600";
            else if (i === selected)
              style =
                "border-red-500 bg-red-50 dark:bg-red-950 dark:border-red-600";
            else
              style =
                "border-neutral-200 dark:border-neutral-700 opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-all ${style}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-neutral-800 dark:text-neutral-200">
                {opt}
              </span>
              {answered && i === exercise.correct && (
                <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              )}
              {answered && i === selected && i !== exercise.correct && (
                <XCircle className="ml-auto h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className={`mt-4 rounded-lg border p-4 ${
            isCorrect
              ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950"
              : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
          }`}
        >
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Type labels & colors
// ---------------------------------------------------------------------------

const TYPE_LABELS: Record<string, string> = {
  quiz: "Flerval",
  match: "Para ihop",
  "strategy-application": "Tillämpa strategi",
};

const TYPE_COLORS: Record<string, string> = {
  quiz: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  match: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "strategy-application":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function LasstrategierOvningar({
  exercises,
}: {
  exercises: LasstrategiExercise[];
}) {
  return (
    <ExerciseRunner
      exercises={exercises}
      typeLabels={TYPE_LABELS}
      typeColors={TYPE_COLORS}
      renderExercise={(exercise, onDone) => {
        switch (exercise.type) {
          case "quiz":
            return <QuizCard exercise={exercise} onDone={onDone} />;
          case "match":
            return <MatchCard exercise={exercise} onDone={onDone} />;
          case "strategy-application":
            return (
              <StrategyApplicationCard exercise={exercise} onDone={onDone} />
            );
        }
      }}
    />
  );
}
