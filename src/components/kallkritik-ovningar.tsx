"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  type KallkritikExercise,
  type CredibilityRating,
  type SourceComparison,
  type FactCheck,
  type BiasDetection,
  KALLKRITIK_TYPE_LABELS,
} from "@/lib/data/kallkritik-ovningar";
import { recordQuizResult, recordActivity } from "@/lib/progress";
import type { AgeGroup } from "@/lib/supabase/types";

const TYPE_BADGE_COLORS: Record<KallkritikExercise["type"], string> = {
  "credibility-rating":
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "source-comparison":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "fact-check":
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "bias-detection":
    "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
};

interface KallkritikOvningarProps {
  exercises: KallkritikExercise[];
  ageGroup: AgeGroup;
}

function optionStyle(
  answered: boolean,
  isSelected: boolean,
  isCorrectOption: boolean,
  wasCorrect: boolean
) {
  if (!answered) {
    return "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";
  }
  if (isCorrectOption) {
    return "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-400 dark:text-emerald-300";
  }
  if (isSelected && !wasCorrect) {
    return "bg-red-50 border-red-500 text-red-700 dark:bg-red-950 dark:border-red-400 dark:text-red-300";
  }
  return "border-neutral-100 bg-neutral-50 opacity-50 dark:border-neutral-800 dark:bg-neutral-900";
}

function OptionList({
  options,
  correctIndex,
  answered,
  selectedIndex,
  onSelect,
}: {
  options: string[];
  correctIndex: number;
  answered: boolean;
  selectedIndex: number | null;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="space-y-2">
      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          disabled={answered}
          className={`flex min-h-[44px] w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${optionStyle(answered, i === selectedIndex, i === correctIndex, selectedIndex === correctIndex)}`}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
            {String.fromCharCode(65 + i)}
          </span>
          <span className="flex-1">{opt}</span>
          {answered && i === correctIndex && (
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
          )}
          {answered && i === selectedIndex && i !== correctIndex && (
            <XCircle className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
          )}
        </button>
      ))}
    </div>
  );
}

function CredibilityRatingView({ exercise }: { exercise: CredibilityRating }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
          Källa
        </h4>
        <p className="text-lg font-bold text-neutral-900 dark:text-white">
          {exercise.source}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          {exercise.description}
        </p>
      </CardContent>
    </Card>
  );
}

function SourceComparisonView({ exercise }: { exercise: SourceComparison }) {
  return (
    <div className="mb-4 grid gap-3 sm:grid-cols-2">
      {[exercise.sourceA, exercise.sourceB].map((src, i) => (
        <Card key={i}>
          <CardHeader>
            <p className="font-bold text-neutral-900 dark:text-white">
              {src.label}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {src.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function FactCheckView({ exercise }: { exercise: FactCheck }) {
  return (
    <div className="mb-4 rounded-lg border-l-4 border-purple-400 bg-purple-50 px-4 py-3 dark:border-purple-500 dark:bg-purple-950/30">
      <p className="text-sm font-medium text-purple-800 dark:text-purple-300">
        Påstående
      </p>
      <p className="mt-1 text-neutral-800 dark:text-neutral-200">
        {exercise.claim}
      </p>
    </div>
  );
}

function BiasDetectionView({ exercise }: { exercise: BiasDetection }) {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <p className="italic text-neutral-700 dark:text-neutral-300">
          &ldquo;{exercise.text}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}

export default function KallkritikOvningar({
  exercises,
  ageGroup,
}: KallkritikOvningarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [resultRecorded, setResultRecorded] = useState(false);

  // Reset selection when exercise changes
  useEffect(() => {
    setSelectedIndex(null);
    setAnswered(false);
  }, [currentIndex]);

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

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelectedIndex(i);
    setAnswered(true);
    if (i === currentExercise.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex >= exercises.length - 1) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setResultRecorded(false);
  };

  /* ---- Results screen ---- */

  if (finished) {
    const percentage = Math.round((score / exercises.length) * 100);
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
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
          {message}
        </h3>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Du fick{" "}
          <span className="font-bold text-neutral-900 dark:text-white">
            {score} av {exercises.length}
          </span>{" "}
          rätt ({percentage}%)
        </p>
        <div className="mt-2 h-2 w-48 mx-auto rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-2 rounded-full bg-emerald-500 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="mt-6">
          <Button onClick={handleRetry}>
            <RotateCcw className="h-4 w-4" />
            Gör om
          </Button>
        </div>
      </div>
    );
  }

  /* ---- Exercise screen ---- */

  const currentExercise = exercises[currentIndex];
  if (!currentExercise) return null;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Progress bar */}
      <div className="border-b border-neutral-100 px-6 py-3 dark:border-neutral-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500 dark:text-neutral-400">
            Övning {currentIndex + 1} av {exercises.length}
          </span>
          <span className="font-medium text-neutral-900 dark:text-white">
            {score} rätt
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-300"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / exercises.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type badge */}
        <Badge
          className={`mb-4 ${TYPE_BADGE_COLORS[currentExercise.type]}`}
        >
          {KALLKRITIK_TYPE_LABELS[currentExercise.type]}
        </Badge>

        {/* Instruction */}
        <h4 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
          {currentExercise.instruction}
        </h4>

        {/* Type-specific content */}
        {currentExercise.type === "credibility-rating" && (
          <CredibilityRatingView exercise={currentExercise as CredibilityRating} />
        )}
        {currentExercise.type === "source-comparison" && (
          <SourceComparisonView exercise={currentExercise as SourceComparison} />
        )}
        {currentExercise.type === "fact-check" && (
          <FactCheckView exercise={currentExercise as FactCheck} />
        )}
        {currentExercise.type === "bias-detection" && (
          <BiasDetectionView exercise={currentExercise as BiasDetection} />
        )}

        {/* Options */}
        <OptionList
          options={currentExercise.options}
          correctIndex={currentExercise.correct}
          answered={answered}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        />

        {/* Explanation */}
        {answered && currentExercise.explanation && (
          <p className="mt-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            {currentExercise.explanation}
          </p>
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
