/**
 * Student progress tracking using localStorage.
 *
 * Tracks:
 * - Words learned (seen / quizzed correctly)
 * - Quiz scores over time
 * - Streak (consecutive days active)
 * - Per-age-group stats
 */

import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface QuizResult {
  /** ISO date string */
  date: string;
  ageGroup: AgeGroup;
  score: number;
  total: number;
  /** Best streak within the quiz */
  bestStreak: number;
}

export interface WordProgress {
  /** word id or word string as key */
  wordId: string;
  /** Number of times seen */
  seen: number;
  /** Number of times answered correctly in quiz */
  correct: number;
  /** Number of times answered incorrectly */
  incorrect: number;
  /** ISO date string of last interaction */
  lastSeen: string;
}

export interface ProgressData {
  /** Version for future migrations */
  version: number;
  /** Quiz results, most recent first */
  quizResults: QuizResult[];
  /** Per-word progress, keyed by word string */
  words: Record<string, WordProgress>;
  /** ISO date strings of days the student was active */
  activeDays: string[];
  /** Current streak count */
  currentStreak: number;
  /** Best streak ever */
  bestStreak: number;
}

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const STORAGE_KEY = "laromedel-progress";
const CURRENT_VERSION = 1;
const MAX_QUIZ_RESULTS = 100;

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function createEmpty(): ProgressData {
  return {
    version: CURRENT_VERSION,
    quizResults: [],
    words: {},
    activeDays: [],
    currentStreak: 0,
    bestStreak: 0,
  };
}

/* -------------------------------------------------------------------------- */
/*  Core read/write                                                            */
/* -------------------------------------------------------------------------- */

export function getProgress(): ProgressData {
  if (typeof window === "undefined") return createEmpty();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmpty();
    const data = JSON.parse(raw) as ProgressData;
    // Basic version check — can add migrations later
    if (!data.version) return createEmpty();
    return data;
  } catch {
    return createEmpty();
  }
}

function saveProgress(data: ProgressData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or unavailable — ignore
  }
}

/* -------------------------------------------------------------------------- */
/*  Actions                                                                    */
/* -------------------------------------------------------------------------- */

/** Record that the student was active today, update streak */
export function recordActivity(): void {
  const data = getProgress();
  const todayStr = today();

  if (data.activeDays.includes(todayStr)) {
    // Already recorded today
    return;
  }

  data.activeDays.push(todayStr);

  // Update streak
  const yesterdayStr = yesterday();
  if (data.activeDays.includes(yesterdayStr)) {
    data.currentStreak += 1;
  } else {
    data.currentStreak = 1;
  }
  data.bestStreak = Math.max(data.bestStreak, data.currentStreak);

  saveProgress(data);
}

/** Record a completed quiz */
export function recordQuizResult(result: Omit<QuizResult, "date">): void {
  const data = getProgress();

  data.quizResults.unshift({
    ...result,
    date: new Date().toISOString(),
  });

  // Keep only the most recent results
  if (data.quizResults.length > MAX_QUIZ_RESULTS) {
    data.quizResults = data.quizResults.slice(0, MAX_QUIZ_RESULTS);
  }

  recordActivity();
  saveProgress(data);
}

/** Record that a word was seen */
export function recordWordSeen(wordId: string): void {
  const data = getProgress();

  if (!data.words[wordId]) {
    data.words[wordId] = {
      wordId,
      seen: 0,
      correct: 0,
      incorrect: 0,
      lastSeen: new Date().toISOString(),
    };
  }

  data.words[wordId].seen += 1;
  data.words[wordId].lastSeen = new Date().toISOString();

  saveProgress(data);
}

/** Record a correct quiz answer for a word */
export function recordWordCorrect(wordId: string): void {
  const data = getProgress();

  if (!data.words[wordId]) {
    data.words[wordId] = {
      wordId,
      seen: 0,
      correct: 0,
      incorrect: 0,
      lastSeen: new Date().toISOString(),
    };
  }

  data.words[wordId].correct += 1;
  data.words[wordId].lastSeen = new Date().toISOString();

  saveProgress(data);
}

/** Record an incorrect quiz answer for a word */
export function recordWordIncorrect(wordId: string): void {
  const data = getProgress();

  if (!data.words[wordId]) {
    data.words[wordId] = {
      wordId,
      seen: 0,
      correct: 0,
      incorrect: 0,
      lastSeen: new Date().toISOString(),
    };
  }

  data.words[wordId].incorrect += 1;
  data.words[wordId].lastSeen = new Date().toISOString();

  saveProgress(data);
}

/** Clear all progress data */
export function clearProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/* -------------------------------------------------------------------------- */
/*  Derived stats                                                              */
/* -------------------------------------------------------------------------- */

export interface ProgressStats {
  totalWordsLearned: number;
  totalQuizzesTaken: number;
  averageScore: number;
  currentStreak: number;
  bestStreak: number;
  recentQuizzes: QuizResult[];
  /** Words sorted by weakness (most incorrect first) */
  weakestWords: WordProgress[];
  /** Words sorted by strength (most correct first) */
  strongestWords: WordProgress[];
  /** Per age group stats */
  perGroup: Record<AgeGroup, { quizzes: number; avgScore: number }>;
  activeDaysCount: number;
}

export function getStats(): ProgressStats {
  const data = getProgress();

  const wordEntries = Object.values(data.words);
  const learned = wordEntries.filter((w) => w.correct >= 1);

  const avgScore =
    data.quizResults.length > 0
      ? data.quizResults.reduce((sum, r) => sum + r.score / r.total, 0) /
        data.quizResults.length
      : 0;

  // Per-group stats
  const groups: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
  const perGroup = {} as Record<AgeGroup, { quizzes: number; avgScore: number }>;
  for (const g of groups) {
    const groupQuizzes = data.quizResults.filter((r) => r.ageGroup === g);
    perGroup[g] = {
      quizzes: groupQuizzes.length,
      avgScore:
        groupQuizzes.length > 0
          ? groupQuizzes.reduce((s, r) => s + r.score / r.total, 0) / groupQuizzes.length
          : 0,
    };
  }

  // Sort words by weakness
  const weakest = [...wordEntries]
    .filter((w) => w.incorrect > 0)
    .sort((a, b) => b.incorrect / (b.correct + 1) - a.incorrect / (a.correct + 1))
    .slice(0, 10);

  const strongest = [...wordEntries]
    .filter((w) => w.correct > 0)
    .sort((a, b) => b.correct - a.correct)
    .slice(0, 10);

  return {
    totalWordsLearned: learned.length,
    totalQuizzesTaken: data.quizResults.length,
    averageScore: avgScore,
    currentStreak: data.currentStreak,
    bestStreak: data.bestStreak,
    recentQuizzes: data.quizResults.slice(0, 5),
    weakestWords: weakest,
    strongestWords: strongest,
    perGroup,
    activeDaysCount: data.activeDays.length,
  };
}
