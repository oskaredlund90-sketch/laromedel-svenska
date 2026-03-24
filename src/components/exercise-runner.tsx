"use client";

import { useState, useCallback, type ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, RotateCcw } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ExerciseRunnerProps<T extends { type: string; id: string }> {
  exercises: T[];
  typeLabels: Record<string, string>;
  typeColors: Record<string, string>;
  renderExercise: (
    exercise: T,
    onDone: (correct: boolean) => void
  ) => ReactNode;
}

// ---------------------------------------------------------------------------
// ExerciseRunner — generic exercise shell with progress, score, next/restart
// ---------------------------------------------------------------------------

export function ExerciseRunner<T extends { type: string; id: string }>({
  exercises,
  typeLabels,
  typeColors,
  renderExercise,
}: ExerciseRunnerProps<T>) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [done, setDone] = useState(false);

  const exercise = exercises[currentIdx];

  const handleDone = useCallback((correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    setAnswered((a) => a + 1);
  }, []);

  function next() {
    if (currentIdx < exercises.length - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setCurrentIdx(0);
    setScore(0);
    setAnswered(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="mb-2 text-4xl font-bold text-neutral-900 dark:text-white">
            {score}/{exercises.length}
          </p>
          <p className="mb-1 text-lg text-neutral-600 dark:text-neutral-400">
            {pct >= 90
              ? "Fantastiskt!"
              : pct >= 70
                ? "Bra jobbat!"
                : pct >= 50
                  ? "Okej!"
                  : "Fortsätt öva!"}
          </p>
          <p className="mb-6 text-sm text-neutral-500">{pct} % rätt</p>
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <RotateCcw className="h-4 w-4" />
            Gör om
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-4 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          Övning {currentIdx + 1} av {exercises.length}
        </span>
        <span aria-live="polite">{score} rätt</span>
      </div>
      <div
        className="mb-6 h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700"
        role="progressbar"
        aria-valuenow={currentIdx + 1}
        aria-valuemin={0}
        aria-valuemax={exercises.length}
        aria-label={`Framsteg: ${currentIdx + 1} av ${exercises.length} övningar`}
      >
        <div
          className="h-full rounded-full bg-neutral-900 transition-all dark:bg-white"
          style={{
            width: `${((currentIdx + 1) / exercises.length) * 100}%`,
          }}
        />
      </div>

      <Card key={exercise.id}>
        <CardHeader className="flex flex-row items-center gap-3">
          <Badge className={typeColors[exercise.type] ?? ""}>
            {typeLabels[exercise.type] ?? exercise.type}
          </Badge>
        </CardHeader>
        <CardContent>
          {renderExercise(exercise, handleDone)}

          {answered > currentIdx && !done && (
            <button
              onClick={next}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {currentIdx < exercises.length - 1 ? "Nästa" : "Visa resultat"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
