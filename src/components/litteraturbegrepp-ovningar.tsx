"use client";

import { useState } from "react";
import { QuizCard, MatchCard } from "@/components/exercise-cards";
import { ExerciseRunner } from "@/components/exercise-runner";
import { CheckCircle2, XCircle } from "lucide-react";
import type {
  LittBegreppExercise,
  LittBegreppAnalysis,
} from "@/lib/data/litteraturbegrepp-ovningar";

// ---------------------------------------------------------------------------
// AnalysisCard — shows text excerpt + question
// ---------------------------------------------------------------------------

function AnalysisCard({
  exercise,
  onDone,
}: {
  exercise: LittBegreppAnalysis;
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
      <p className="mb-3 font-medium text-neutral-900 dark:text-white">
        {exercise.instruction}
      </p>

      {/* Text excerpt as styled blockquote */}
      <blockquote className="mb-4 border-l-4 border-teal-400 bg-teal-50 py-3 pl-4 pr-3 dark:border-teal-600 dark:bg-teal-950">
        <p className="text-sm italic text-neutral-800 dark:text-neutral-200">
          {exercise.textExcerpt}
        </p>
        <cite className="mt-2 block text-xs not-italic text-neutral-500 dark:text-neutral-400">
          — {exercise.textSource}
        </cite>
      </blockquote>

      <p className="mb-4 font-medium text-neutral-900 dark:text-white">
        {exercise.prompt}
      </p>

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
              className={`w-full rounded-lg p-3 text-left text-sm transition ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          aria-live="polite"
          className={`mt-4 rounded-lg p-3 text-sm ${
            isCorrect
              ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
              : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"
          }`}
        >
          {isCorrect ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Rätt!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <XCircle className="h-4 w-4" aria-hidden="true" /> Fel.
            </span>
          )}
          <p className="mt-1">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Labels and colors
// ---------------------------------------------------------------------------

const TYPE_LABELS: Record<string, string> = {
  quiz: "Flerval",
  match: "Para ihop",
  analysis: "Textanalys",
};

const TYPE_COLORS: Record<string, string> = {
  quiz: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  match: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  analysis:
    "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function LitteraturbegreppOvningar({
  exercises,
}: {
  exercises: LittBegreppExercise[];
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
          case "analysis":
            return <AnalysisCard exercise={exercise} onDone={onDone} />;
        }
      }}
    />
  );
}
