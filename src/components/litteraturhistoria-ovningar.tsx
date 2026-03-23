"use client";

import { useState, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Shuffle, GripVertical, ArrowUpDown } from "lucide-react";
import type { LitExercise, QuizExercise, MatchExercise, TimelineExercise } from "@/lib/data/litteraturhistoria-ovningar";

// ---------------------------------------------------------------------------
// Quiz sub-component
// ---------------------------------------------------------------------------

function QuizCard({
  exercise,
  onDone,
}: {
  exercise: QuizExercise;
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
            else style = "border-neutral-200 dark:border-neutral-700 opacity-60";
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
          className={`mt-4 rounded-lg p-3 text-sm ${
            isCorrect
              ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
              : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"
          }`}
        >
          {isCorrect ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Rätt!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <XCircle className="h-4 w-4" /> Fel.
            </span>
          )}
          <p className="mt-1">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Match sub-component
// ---------------------------------------------------------------------------

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function MatchCard({
  exercise,
  onDone,
}: {
  exercise: MatchExercise;
  onDone: (correct: boolean) => void;
}) {
  const shuffledRight = useMemo(() => shuffle(exercise.pairs.map((p) => p.right)), [exercise]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  const allMatched = Object.keys(matches).length === exercise.pairs.length;

  function handleLeftClick(idx: number) {
    if (checked) return;
    setSelectedLeft(idx === selectedLeft ? null : idx);
  }

  function handleRightClick(idx: number) {
    if (checked || selectedLeft === null) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: idx }));
    setSelectedLeft(null);
  }

  function checkAnswers() {
    setChecked(true);
    const allCorrect = exercise.pairs.every((pair, i) => {
      return shuffledRight[matches[i]] === pair.right;
    });
    onDone(allCorrect);
  }

  function getLeftStyle(idx: number) {
    if (checked) {
      const correct = shuffledRight[matches[idx]] === exercise.pairs[idx].right;
      return correct
        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-600"
        : "border-red-500 bg-red-50 dark:bg-red-950 dark:border-red-600";
    }
    if (idx === selectedLeft)
      return "border-blue-500 bg-blue-50 dark:bg-blue-950 dark:border-blue-500 ring-2 ring-blue-300";
    if (idx in matches) return "border-neutral-400 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-600";
    return "border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 cursor-pointer";
  }

  function getRightStyle(idx: number) {
    const usedBy = Object.entries(matches).find(([, v]) => v === idx);
    if (checked && usedBy) {
      const leftIdx = Number(usedBy[0]);
      const correct = shuffledRight[idx] === exercise.pairs[leftIdx].right;
      return correct
        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-600"
        : "border-red-500 bg-red-50 dark:bg-red-950 dark:border-red-600";
    }
    if (usedBy) return "border-neutral-400 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-600";
    if (selectedLeft !== null)
      return "border-neutral-200 dark:border-neutral-700 hover:border-blue-400 cursor-pointer";
    return "border-neutral-200 dark:border-neutral-700";
  }

  return (
    <div>
      <p className="mb-4 font-medium text-neutral-900 dark:text-white">
        {exercise.instruction}
      </p>
      <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-400">
        Klicka på ett begrepp till vänster, sedan på rätt match till höger.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {exercise.pairs.map((pair, i) => (
            <button
              key={i}
              onClick={() => handleLeftClick(i)}
              disabled={checked}
              className={`w-full rounded-lg border p-3 text-left text-sm transition ${getLeftStyle(i)}`}
            >
              {pair.left}
              {i in matches && !checked && (
                <span className="ml-2 text-xs text-neutral-400">
                  → {shuffledRight[matches[i]]}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffledRight.map((text, i) => (
            <button
              key={i}
              onClick={() => handleRightClick(i)}
              disabled={checked || selectedLeft === null}
              className={`w-full rounded-lg border p-3 text-left text-sm transition ${getRightStyle(i)}`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      {allMatched && !checked && (
        <button
          onClick={checkAnswers}
          className="mt-4 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Rätta
        </button>
      )}
      {checked && (
        <div className="mt-4 rounded-lg bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
          {exercise.pairs.every((pair, i) => shuffledRight[matches[i]] === pair.right) ? (
            <span className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4" /> Alla rätt!
            </span>
          ) : (
            <div>
              <span className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <XCircle className="h-4 w-4" /> Inte alla rätt.
              </span>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Rätt svar:{" "}
                {exercise.pairs.map((p) => `${p.left} → ${p.right}`).join(", ")}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Timeline sub-component
// ---------------------------------------------------------------------------

function TimelineCard({
  exercise,
  onDone,
}: {
  exercise: TimelineExercise;
  onDone: (correct: boolean) => void;
}) {
  const shuffledItems = useMemo(() => shuffle(exercise.items), [exercise]);
  const [order, setOrder] = useState(shuffledItems);
  const [checked, setChecked] = useState(false);

  function moveUp(idx: number) {
    if (checked || idx === 0) return;
    const newOrder = [...order];
    [newOrder[idx - 1], newOrder[idx]] = [newOrder[idx], newOrder[idx - 1]];
    setOrder(newOrder);
  }

  function moveDown(idx: number) {
    if (checked || idx === order.length - 1) return;
    const newOrder = [...order];
    [newOrder[idx], newOrder[idx + 1]] = [newOrder[idx + 1], newOrder[idx]];
    setOrder(newOrder);
  }

  function checkAnswer() {
    setChecked(true);
    const correct = order.every((item, i) => {
      if (i === 0) return true;
      return item.year >= order[i - 1].year;
    });
    onDone(correct);
  }

  const isCorrectOrder = order.every((item, i) => {
    if (i === 0) return true;
    return item.year >= order[i - 1].year;
  });

  return (
    <div>
      <p className="mb-4 font-medium text-neutral-900 dark:text-white">
        {exercise.instruction}
      </p>
      <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-400">
        Flytta med pilarna för att ordna rätt.
      </p>
      <div className="space-y-2">
        {order.map((item, i) => {
          let style =
            "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900";
          if (checked) {
            const sorted = [...exercise.items].sort((a, b) => a.year - b.year);
            const correctPos = sorted.findIndex((s) => s.label === item.label);
            style =
              correctPos === i
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-600"
                : "border-red-500 bg-red-50 dark:bg-red-950 dark:border-red-600";
          }
          return (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-lg border p-3 transition ${style}`}
            >
              <GripVertical className="h-4 w-4 shrink-0 text-neutral-400" />
              <span className="flex-1 text-sm text-neutral-900 dark:text-white">
                {item.label}
              </span>
              {checked && (
                <span className="text-xs text-neutral-500">{item.year}</span>
              )}
              {!checked && (
                <div className="flex gap-1">
                  <button
                    onClick={() => moveUp(i)}
                    disabled={i === 0}
                    className="rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 disabled:opacity-30 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                  >
                    <ArrowUpDown className="h-3 w-3 rotate-180" />
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    disabled={i === order.length - 1}
                    className="rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 disabled:opacity-30 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                  >
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!checked && (
        <button
          onClick={checkAnswer}
          className="mt-4 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Rätta
        </button>
      )}
      {checked && (
        <div className="mt-4 rounded-lg bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
          {isCorrectOrder ? (
            <span className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4" /> Rätt ordning!
            </span>
          ) : (
            <div>
              <span className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <XCircle className="h-4 w-4" /> Inte rätt ordning.
              </span>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Rätt ordning:{" "}
                {[...exercise.items]
                  .sort((a, b) => a.year - b.year)
                  .map((i) => `${i.label} (${i.year})`)
                  .join(" → ")}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Type labels
// ---------------------------------------------------------------------------

const TYPE_LABELS: Record<string, string> = {
  quiz: "Flerval",
  match: "Para ihop",
  timeline: "Tidslinje",
};

const TYPE_COLORS: Record<string, string> = {
  quiz: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  match: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  timeline: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function LitteraturhistoriaOvningar({
  exercises,
}: {
  exercises: LitExercise[];
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [done, setDone] = useState(false);

  const exercise = exercises[currentIdx];

  const handleDone = useCallback(
    (correct: boolean) => {
      if (correct) setScore((s) => s + 1);
      setAnswered((a) => a + 1);
    },
    []
  );

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
            {pct >= 90 ? "Fantastiskt!" : pct >= 70 ? "Bra jobbat!" : pct >= 50 ? "Okej!" : "Fortsätt öva!"}
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
        <span>{score} rätt</span>
      </div>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
        <div
          className="h-full rounded-full bg-neutral-900 transition-all dark:bg-white"
          style={{ width: `${((currentIdx + 1) / exercises.length) * 100}%` }}
        />
      </div>

      <Card key={exercise.id}>
        <CardHeader className="flex flex-row items-center gap-3">
          <Badge className={TYPE_COLORS[exercise.type]}>
            {TYPE_LABELS[exercise.type]}
          </Badge>
        </CardHeader>
        <CardContent>
          {exercise.type === "quiz" && (
            <QuizCard exercise={exercise} onDone={handleDone} />
          )}
          {exercise.type === "match" && (
            <MatchCard exercise={exercise} onDone={handleDone} />
          )}
          {exercise.type === "timeline" && (
            <TimelineCard exercise={exercise} onDone={handleDone} />
          )}

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
