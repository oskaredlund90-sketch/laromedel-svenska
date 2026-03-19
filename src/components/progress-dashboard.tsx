"use client";

import { useState, useEffect } from "react";
import {
  Trophy,
  Flame,
  BookOpen,
  Target,
  TrendingUp,
  AlertTriangle,
  Trash2,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStats, clearProgress, type ProgressStats } from "@/lib/progress";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function StatCard({
  icon,
  label,
  value,
  sub,
  color = "neutral",
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
  color?: "neutral" | "amber" | "green" | "rose" | "blue";
}) {
  const iconBg: Record<string, string> = {
    neutral: "bg-neutral-100 dark:bg-neutral-800",
    amber: "bg-amber-100 dark:bg-amber-900/30",
    green: "bg-green-100 dark:bg-green-900/30",
    rose: "bg-rose-100 dark:bg-rose-900/30",
    blue: "bg-blue-100 dark:bg-blue-900/30",
  };

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg[color]}`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {label}
          </p>
          <p className="text-2xl font-bold text-neutral-900 dark:text-white">
            {value}
          </p>
          {sub && (
            <p className="mt-0.5 text-xs text-neutral-400 dark:text-neutral-500">
              {sub}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({
  value,
  max,
  label,
}: {
  value: number;
  max: number;
  label: string;
}) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-neutral-600 dark:text-neutral-400">{label}</span>
        <span className="font-medium text-neutral-900 dark:text-white">
          {pct}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
        <div
          className="h-2 rounded-full bg-neutral-900 transition-all duration-500 dark:bg-white"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

const AGE_GROUP_LABELS: Record<string, string> = {
  lagstadiet: "Lågstadiet",
  mellanstadiet: "Mellanstadiet",
  hogstadiet: "Högstadiet",
  gymnasiet: "Gymnasiet",
};

export function ProgressDashboard() {
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    setStats(getStats());
  }, []);

  if (!stats) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm text-neutral-500">Laddar...</p>
      </div>
    );
  }

  const hasData =
    stats.totalQuizzesTaken > 0 || stats.totalWordsLearned > 0;

  if (!hasData) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
          <BarChart3 className="h-8 w-8 text-neutral-400" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          Inga framsteg ännu
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
          Börja med att göra ett quiz på ordkunskapssidan så sparas dina
          framsteg här. Du kan se hur många ord du lärt dig, dina
          quizresultat och din svit.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          }
          label="Ord inlärda"
          value={stats.totalWordsLearned}
          sub="minst 1 rätt i quiz"
          color="blue"
        />
        <StatCard
          icon={
            <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
          }
          label="Quiz gjorda"
          value={stats.totalQuizzesTaken}
          sub={`snitt ${Math.round(stats.averageScore * 100)}% rätt`}
          color="green"
        />
        <StatCard
          icon={
            <Flame className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          }
          label="Aktiv svit"
          value={`${stats.currentStreak} ${stats.currentStreak === 1 ? "dag" : "dagar"}`}
          sub={`bäst: ${stats.bestStreak} dagar`}
          color="amber"
        />
        <StatCard
          icon={
            <Trophy className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          }
          label="Aktiva dagar"
          value={stats.activeDaysCount}
          color="rose"
        />
      </div>

      {/* Per-group progress */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white">
          <TrendingUp className="h-5 w-5 text-neutral-500" />
          Resultat per stadie
        </h3>
        <div className="space-y-4">
          {(
            ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"] as const
          ).map((g) => {
            const gd = stats.perGroup[g];
            if (gd.quizzes === 0) return null;
            return (
              <ProgressBar
                key={g}
                label={`${AGE_GROUP_LABELS[g]} (${gd.quizzes} quiz)`}
                value={Math.round(gd.avgScore * 100)}
                max={100}
              />
            );
          })}
          {Object.values(stats.perGroup).every((g) => g.quizzes === 0) && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Gör quiz på ordkunskapssidan för att se resultat per stadie.
            </p>
          )}
        </div>
      </div>

      {/* Recent quiz results */}
      {stats.recentQuizzes.length > 0 && (
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Senaste quiz
          </h3>
          <div className="space-y-2">
            {stats.recentQuizzes.map((q, i) => {
              const pct = Math.round((q.score / q.total) * 100);
              const dateStr = new Date(q.date).toLocaleDateString("sv-SE", {
                day: "numeric",
                month: "short",
              });
              return (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 px-4 py-2.5 dark:border-neutral-800"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-400">{dateStr}</span>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {AGE_GROUP_LABELS[q.ageGroup]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">
                      {q.score}/{q.total}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        pct >= 80
                          ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                          : pct >= 50
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                            : "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300"
                      }`}
                    >
                      {pct}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Weak / strong words */}
      {(stats.weakestWords.length > 0 || stats.strongestWords.length > 0) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.weakestWords.length > 0 && (
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-white">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Öva mer på
              </h3>
              <ul className="space-y-1.5">
                {stats.weakestWords.slice(0, 5).map((w) => (
                  <li
                    key={w.wordId}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {w.wordId}
                    </span>
                    <span className="text-xs text-rose-600 dark:text-rose-400">
                      {w.incorrect} fel
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {stats.strongestWords.length > 0 && (
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-white">
                <Trophy className="h-4 w-4 text-green-500" />
                Dina starkaste ord
              </h3>
              <ul className="space-y-1.5">
                {stats.strongestWords.slice(0, 5).map((w) => (
                  <li
                    key={w.wordId}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {w.wordId}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400">
                      {w.correct} rätt
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Clear button */}
      <div className="flex justify-end">
        {confirmClear ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-500">Är du säker?</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                clearProgress();
                setStats(getStats());
                setConfirmClear(false);
              }}
            >
              Ja, radera
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setConfirmClear(false)}
            >
              Avbryt
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            className="text-neutral-400 hover:text-red-500"
            onClick={() => setConfirmClear(true)}
          >
            <Trash2 className="h-3.5 w-3.5" />
            Radera framsteg
          </Button>
        )}
      </div>
    </div>
  );
}
