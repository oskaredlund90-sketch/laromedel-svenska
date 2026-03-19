"use client";

import { useState, useMemo, useCallback } from "react";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Zap,
  ArrowRight,
  Shuffle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WordRow } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type QuizMode = "definition" | "example" | "wordClass";

interface QuizQuestion {
  word: WordRow;
  options: string[];
  correctIndex: number;
  mode: QuizMode;
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const DIFFICULTY_STYLES: Record<string, string> = {
  enkel: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  medel: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  avancerad:
    "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
};

const MODE_LABELS: Record<QuizMode, string> = {
  definition: "Vad betyder ordet?",
  example: "Vilket ord passar i meningen?",
  wordClass: "Vilken ordklass?",
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Generate quiz questions from word data */
function generateQuestions(
  words: WordRow[],
  count: number
): QuizQuestion[] {
  if (words.length < 4) return [];

  const shuffled = shuffleArray(words);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));
  const modes: QuizMode[] = ["definition", "example", "wordClass"];

  return selected.map((word) => {
    const mode = modes[Math.floor(Math.random() * modes.length)];
    const others = words.filter((w) => w.id !== word.id);
    const distractors = shuffleArray(others).slice(0, 3);

    let correct: string;
    let wrongOptions: string[];

    switch (mode) {
      case "definition":
        correct = word.definition;
        wrongOptions = distractors.map((d) => d.definition);
        break;
      case "example":
        correct = word.word;
        wrongOptions = distractors.map((d) => d.word);
        break;
      case "wordClass":
        correct = word.word_class;
        // Get unique word classes for distractors
        const allClasses = [...new Set(words.map((w) => w.word_class))].filter(
          (c) => c !== word.word_class
        );
        wrongOptions = shuffleArray(allClasses).slice(0, 3);
        // Pad with common classes if not enough
        const fallbacks = ["substantiv", "verb", "adjektiv", "adverb"].filter(
          (c) => c !== word.word_class && !wrongOptions.includes(c)
        );
        while (wrongOptions.length < 3 && fallbacks.length > 0) {
          wrongOptions.push(fallbacks.shift()!);
        }
        break;
    }

    const allOptions = shuffleArray([correct, ...wrongOptions.slice(0, 3)]);
    const correctIndex = allOptions.indexOf(correct);

    return { word, options: allOptions, correctIndex, mode };
  });
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

interface VocabularyQuizProps {
  words: WordRow[];
  /** Number of questions per round */
  questionCount?: number;
}

export function VocabularyQuiz({
  words,
  questionCount = 10,
}: VocabularyQuizProps) {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const startQuiz = useCallback(() => {
    const q = generateQuestions(words, questionCount);
    setQuestions(q);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(false);
    setStreak(0);
    setBestStreak(0);
    setStarted(true);
  }, [words, questionCount]);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (answered) return;
      setSelectedOption(optionIndex);
      setAnswered(true);

      const isCorrect = optionIndex === questions[currentIndex].correctIndex;
      if (isCorrect) {
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
    [answered, questions, currentIndex]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  }, [currentIndex, questions.length]);

  const finished = answered && currentIndex === questions.length - 1;
  const question = questions[currentIndex];

  // Not enough words for a quiz
  if (words.length < 4) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Det behövs minst 4 ord för att starta ett quiz.
      </p>
    );
  }

  /* ---- Start screen ---- */
  if (!started) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
          <Zap className="h-8 w-8 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          Ordkunskaps-quiz
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
          Testa dina kunskaper! Du får {Math.min(questionCount, words.length)}{" "}
          frågor om ordets betydelse, användning och ordklass.
        </p>
        <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
          {words.length} ord i poolen
        </div>
        <Button onClick={startQuiz} className="mt-6">
          <Shuffle className="h-4 w-4" />
          Starta quiz
        </Button>
      </div>
    );
  }

  /* ---- Results screen ---- */
  if (finished && question) {
    const percentage = Math.round((score / questions.length) * 100);
    const emoji =
      percentage >= 90 ? "🏆" : percentage >= 70 ? "⭐" : percentage >= 50 ? "👍" : "💪";

    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="text-5xl">{emoji}</div>
        <h3 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          {percentage >= 90
            ? "Fantastiskt!"
            : percentage >= 70
              ? "Bra jobbat!"
              : percentage >= 50
                ? "Helt okej!"
                : "Fortsätt öva!"}
        </h3>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Du fick{" "}
          <span className="font-bold text-neutral-900 dark:text-white">
            {score} av {questions.length}
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
          <Button onClick={startQuiz} variant="default">
            <RotateCcw className="h-4 w-4" />
            Nytt quiz
          </Button>
        </div>
      </div>
    );
  }

  if (!question) return null;

  /* ---- Question screen ---- */
  const isCorrect = selectedOption === question.correctIndex;

  // Build prompt based on mode
  let prompt: React.ReactNode;
  switch (question.mode) {
    case "definition":
      prompt = (
        <>
          Vad betyder{" "}
          <span className="font-bold text-neutral-900 dark:text-white">
            {question.word.word}
          </span>
          ?
        </>
      );
      break;
    case "example":
      prompt = (
        <>
          Vilket ord passar bäst?
          <br />
          <span className="mt-1 block text-sm italic text-neutral-500 dark:text-neutral-400">
            &quot;{question.word.example.replace(
              new RegExp(question.word.word, "gi"),
              "______"
            )}
            &quot;
          </span>
        </>
      );
      break;
    case "wordClass":
      prompt = (
        <>
          Vilken ordklass tillhör{" "}
          <span className="font-bold text-neutral-900 dark:text-white">
            {question.word.word}
          </span>
          ?
        </>
      );
      break;
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Progress bar */}
      <div className="border-b border-neutral-100 px-6 py-3 dark:border-neutral-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500 dark:text-neutral-400">
            Fråga {currentIndex + 1} / {questions.length}
          </span>
          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Zap className="h-3.5 w-3.5" />
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
            className="h-1.5 rounded-full bg-neutral-900 transition-all duration-300 dark:bg-white"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
            {MODE_LABELS[question.mode]}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${DIFFICULTY_STYLES[question.word.difficulty] ?? DIFFICULTY_STYLES.medel}`}
          >
            {question.word.difficulty}
          </span>
        </div>

        <p className="mb-6 text-lg text-neutral-700 dark:text-neutral-300">
          {prompt}
        </p>

        {/* Options */}
        <div className="space-y-2">
          {question.options.map((option, i) => {
            let style =
              "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800";

            if (answered) {
              if (i === question.correctIndex) {
                style =
                  "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20";
              } else if (i === selectedOption && !isCorrect) {
                style =
                  "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20";
              } else {
                style =
                  "border-neutral-100 bg-neutral-50 opacity-50 dark:border-neutral-800 dark:bg-neutral-900";
              }
            } else if (i === selectedOption) {
              style =
                "border-neutral-400 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${style}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                  {String.fromCharCode(65 + i)}
                </span>
                <span
                  className={`flex-1 ${
                    answered && i === question.correctIndex
                      ? "font-medium text-green-800 dark:text-green-300"
                      : answered && i === selectedOption && !isCorrect
                        ? "text-red-800 line-through dark:text-red-300"
                        : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {option}
                </span>
                {answered && i === question.correctIndex && (
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                )}
                {answered && i === selectedOption && !isCorrect && (
                  <XCircle className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback + next */}
        {answered && (
          <div className="mt-4">
            {question.mode === "definition" && (
              <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="font-medium text-neutral-600 dark:text-neutral-300">
                  Exempel:
                </span>{" "}
                <em>&quot;{question.word.example}&quot;</em>
              </p>
            )}
            {question.mode === "example" && (
              <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="font-medium text-neutral-600 dark:text-neutral-300">
                  Definition:
                </span>{" "}
                {question.word.definition}
              </p>
            )}
            {question.word.etymology && (
              <p className="mb-3 text-xs text-neutral-400 dark:text-neutral-500">
                💡 {question.word.etymology}
              </p>
            )}

            {!finished && (
              <Button onClick={handleNext} className="mt-2">
                Nästa fråga
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
