"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { QuizCard, MatchCard } from "@/components/exercise-cards";
import { ExerciseRunner } from "@/components/exercise-runner";
import { Badge } from "@/components/ui/badge";
import type {
  NordiskaSprakExercise,
  NordiskaSprakReadingComp,
} from "@/lib/data/nordiska-sprak-ovningar";

// ---------------------------------------------------------------------------
// Labels & colors
// ---------------------------------------------------------------------------

const TYPE_LABELS: Record<string, string> = {
  quiz: "Flerval",
  match: "Para ihop",
  "reading-comprehension": "Grannspråksförståelse",
};

const TYPE_COLORS: Record<string, string> = {
  quiz: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  match: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "reading-comprehension":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

// ---------------------------------------------------------------------------
// ReadingComprehensionCard
// ---------------------------------------------------------------------------

function ReadingComprehensionCard({
  exercise,
  onDone,
}: {
  exercise: NordiskaSprakReadingComp;
  onDone: (correct: boolean) => void;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [reported, setReported] = useState(false);

  const allAnswered =
    Object.keys(answers).length === exercise.questions.length;

  // Report result once when all questions are answered
  if (allAnswered && !reported) {
    const allCorrect = exercise.questions.every(
      (q, i) => answers[i] === q.correct,
    );
    onDone(allCorrect);
    setReported(true);
  }

  function handleSelect(qIdx: number, optIdx: number) {
    if (qIdx in answers) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  }

  const languageLabel =
    exercise.language === "danska" ? "Danska" : "Norska";

  return (
    <div>
      <p className="mb-3 font-medium text-neutral-900 dark:text-white">
        {exercise.instruction}
      </p>

      {/* Text box */}
      <div className="mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="mb-2">
          <Badge
            className={
              exercise.language === "danska"
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            }
          >
            {languageLabel}
          </Badge>
        </div>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 italic">
          {exercise.text}
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {exercise.questions.map((q, qIdx) => {
          const answered = qIdx in answers;
          const isCorrect = answers[qIdx] === q.correct;

          return (
            <div key={qIdx}>
              <p className="mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                {qIdx + 1}. {q.prompt}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  let style =
                    "cursor-pointer border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-500";
                  if (answered) {
                    if (oIdx === q.correct)
                      style =
                        "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-600";
                    else if (oIdx === answers[qIdx])
                      style =
                        "border-red-500 bg-red-50 dark:bg-red-950 dark:border-red-600";
                    else
                      style =
                        "border-neutral-200 dark:border-neutral-700 opacity-60";
                  }
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
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
                  className={`mt-3 rounded-lg p-3 text-sm ${
                    isCorrect
                      ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                      : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"
                  }`}
                >
                  {isCorrect ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4"
                        aria-hidden="true"
                      />{" "}
                      Rätt!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <XCircle className="h-4 w-4" aria-hidden="true" />{" "}
                      Fel.
                    </span>
                  )}
                  <p className="mt-1">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function NordiskaSprakOvningar({
  exercises,
}: {
  exercises: NordiskaSprakExercise[];
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
          case "reading-comprehension":
            return (
              <ReadingComprehensionCard
                exercise={exercise}
                onDone={onDone}
              />
            );
        }
      }}
    />
  );
}
