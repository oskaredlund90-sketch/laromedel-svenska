"use client";

import { QuizCard, MatchCard, TimelineCard } from "@/components/exercise-cards";
import { ExerciseRunner } from "@/components/exercise-runner";
import type { SprakhistoriaExercise } from "@/lib/data/sprakhistoria-ovningar";

const TYPE_LABELS: Record<string, string> = {
  quiz: "Flerval",
  match: "Para ihop",
  timeline: "Tidslinje",
};

const TYPE_COLORS: Record<string, string> = {
  quiz: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  match: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  timeline:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

export function SprakhistoriaOvningar({
  exercises,
}: {
  exercises: SprakhistoriaExercise[];
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
          case "timeline":
            return <TimelineCard exercise={exercise} onDone={onDone} />;
        }
      }}
    />
  );
}
