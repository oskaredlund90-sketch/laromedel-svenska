"use client";

import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Brain,
  Search,
  Lightbulb,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import type { AgeGroup } from "@/lib/supabase/types";
import {
  getAiExercises,
  type AiExercise,
  type HallucinationExercise,
  type SourceCritiqueExercise,
  type PromptImproveExercise,
} from "@/lib/data/ai-ovningar";

/* ── Tab config ───────────────────────────────────────────────────────── */

const EXERCISE_TYPE_LABELS: Record<AiExercise["type"], { label: string; icon: typeof Brain }> = {
  "hallucination": { label: "Hitta felet", icon: Search },
  "source-critique": { label: "Källkritik", icon: Brain },
  "prompt-improve": { label: "Förbättra prompten", icon: Lightbulb },
};

/* ── Hallucination component ──────────────────────────────────────────── */

function HallucinationGame({ exercise }: { exercise: HallucinationExercise }) {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index: number, answer: boolean) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  const allAnswered = Object.keys(answers).length === exercise.statements.length;
  const correctCount = exercise.statements.filter(
    (s, i) => answers[i] === s.isTrue
  ).length;

  const handleCheck = () => {
    setShowResults(true);

  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">{exercise.intro}</p>
      <div className="flex flex-col gap-3">
        {exercise.statements.map((statement, i) => {
          const answered = i in answers;
          const isCorrect = showResults && answers[i] === statement.isTrue;
          const isWrong = showResults && answers[i] !== statement.isTrue;

          return (
            <div
              key={i}
              className={`rounded-lg border p-4 transition-colors ${
                isCorrect
                  ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/30"
                  : isWrong
                    ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950/30"
                    : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
              }`}
            >
              <p className="mb-3 font-medium text-neutral-900 dark:text-white">
                {statement.text}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAnswer(i, true)}
                  disabled={showResults}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    answered && answers[i] === true
                      ? "bg-green-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-green-100 hover:text-green-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-green-900/30"
                  } disabled:opacity-60`}
                >
                  ✓ Sant
                </button>
                <button
                  onClick={() => handleAnswer(i, false)}
                  disabled={showResults}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    answered && answers[i] === false
                      ? "bg-red-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-red-100 hover:text-red-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-red-900/30"
                  } disabled:opacity-60`}
                >
                  ✗ Falskt
                </button>
              </div>
              {showResults && (
                <div className={`mt-3 flex items-start gap-2 text-sm ${isCorrect ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
                  {isCorrect ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0" />}
                  {statement.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {!showResults ? (
          <button
            onClick={handleCheck}
            disabled={!allAnswered}
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700 disabled:opacity-40"
          >
            Kontrollera svar
          </button>
        ) : (
          <>
            <div className="rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-medium dark:bg-neutral-800">
              {correctCount} av {exercise.statements.length} rätt
              {correctCount === exercise.statements.length && " 🎉"}
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <RotateCcw className="h-4 w-4" />
              Försök igen
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Source critique component ─────────────────────────────────────────── */

function SourceCritiqueGame({ exercise }: { exercise: SourceCritiqueExercise }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = exercise.questions[currentQ];

  const handleSelect = (index: number) => {
    if (showExplanation) return;
    setSelected(index);
    setShowExplanation(true);
    if (index === q.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 >= exercise.questions.length) {
      setFinished(true);

      return;
    }
    setCurrentQ((prev) => prev + 1);
    setSelected(null);
    setShowExplanation(false);
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="text-center">
        <div className="mb-4 text-4xl">{score === exercise.questions.length ? "🎉" : score >= exercise.questions.length / 2 ? "👍" : "💪"}</div>
        <p className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
          {score} av {exercise.questions.length} rätt
        </p>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          {score === exercise.questions.length
            ? "Perfekt! Du är en riktig källkritiker."
            : "Bra försök! Kom ihåg: dubbelkolla alltid AI-genererad text."}
        </p>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 mx-auto rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
        >
          <RotateCcw className="h-4 w-4" />
          Försök igen
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* AI-text */}
      <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
          AI-genererad text om {exercise.topic}
        </p>
        <p className="text-sm text-neutral-800 dark:text-neutral-200 italic">
          &ldquo;{exercise.aiText}&rdquo;
        </p>
      </div>

      {/* Fråga */}
      <p className="mb-1 text-xs text-neutral-500 dark:text-neutral-400">
        Fråga {currentQ + 1} av {exercise.questions.length}
      </p>
      <p className="mb-4 font-medium text-neutral-900 dark:text-white">{q.question}</p>

      <div className="flex flex-col gap-2">
        {q.options.map((option, i) => {
          const isSelected = selected === i;
          const isCorrectOption = i === q.correct;

          let style = "border-neutral-200 bg-white hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900";
          if (showExplanation && isCorrectOption) {
            style = "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/30";
          } else if (showExplanation && isSelected && !isCorrectOption) {
            style = "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950/30";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showExplanation}
              className={`rounded-lg border p-3 text-left text-sm transition-colors ${style} disabled:cursor-default`}
            >
              <span className="text-neutral-900 dark:text-white">{option}</span>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mt-4 rounded-lg bg-neutral-50 p-3 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
          <strong>Förklaring:</strong> {q.explanation}
        </div>
      )}

      {showExplanation && (
        <button
          onClick={handleNext}
          className="mt-4 flex items-center gap-1.5 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700"
        >
          {currentQ + 1 >= exercise.questions.length ? "Se resultat" : "Nästa fråga"}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

/* ── Prompt improve component ─────────────────────────────────────────── */

function PromptImproveGame({ exercise }: { exercise: PromptImproveExercise }) {
  const [userPrompt, setUserPrompt] = useState("");
  const [showTips, setShowTips] = useState(false);
  const [showExample, setShowExample] = useState(false);

  return (
    <div>
      <p className="mb-2 text-neutral-600 dark:text-neutral-400">{exercise.context}</p>

      {/* Dålig prompt */}
      <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">
          Dålig prompt
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 italic">&ldquo;{exercise.badPrompt}&rdquo;</p>
      </div>

      {/* Elevens försök */}
      <label className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
        Skriv en bättre version:
      </label>
      <textarea
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
        rows={4}
        placeholder="Skriv din förbättrade prompt här..."
        className="mb-4 w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500"
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setShowTips(true)}
          className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-900/50"
        >
          💡 Visa tips
        </button>
        {userPrompt.length > 10 && (
          <button
            onClick={() => setShowExample(true)}
            className="rounded-lg bg-violet-100 px-4 py-2 text-sm font-medium text-violet-800 transition-colors hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:hover:bg-violet-900/50"
          >
            Visa exempelsvar
          </button>
        )}
      </div>

      {showTips && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="mb-2 text-sm font-semibold text-amber-800 dark:text-amber-300">Tips:</p>
          <ul className="space-y-1">
            {exercise.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200">
                <span className="mt-0.5">💡</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showExample && (
        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/30">
          <p className="mb-2 text-sm font-semibold text-green-800 dark:text-green-300">Exempelsvar:</p>
          <p className="text-sm text-green-900 dark:text-green-200 italic">
            &ldquo;{exercise.exampleGoodPrompt}&rdquo;
          </p>
          <p className="mt-2 text-xs text-green-700 dark:text-green-400">
            Jämför med ditt svar – fick du med liknande detaljer?
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────────────── */

interface AiOvningarProps {
  ageGroup: AgeGroup;
}

export default function AiOvningar({ ageGroup }: AiOvningarProps) {
  const exercises = getAiExercises(ageGroup);
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = exercises[currentIndex];
  if (!current) return null;

  const typeInfo = EXERCISE_TYPE_LABELS[current.type];
  const TypeIcon = typeInfo.icon;

  return (
    <div>
      {/* Övningsflikar */}
      <div className="mb-6 flex flex-wrap gap-2">
        {exercises.map((ex, i) => {
          const info = EXERCISE_TYPE_LABELS[ex.type];
          const Icon = info.icon;
          const isActive = i === currentIndex;
          return (
            <button
              key={ex.id}
              onClick={() => setCurrentIndex(i)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              <Icon className="h-4 w-4" />
              {info.label}
            </button>
          );
        })}
      </div>

      {/* Övningsrubrik */}
      <div className="mb-4 flex items-center gap-2">
        <TypeIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {typeInfo.label}
        </h3>
      </div>

      {/* Övningsinnehåll */}
      {current.type === "hallucination" && <HallucinationGame exercise={current} />}
      {current.type === "source-critique" && <SourceCritiqueGame exercise={current} />}
      {current.type === "prompt-improve" && <PromptImproveGame exercise={current} />}
    </div>
  );
}
