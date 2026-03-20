"use client";

import { useState, useMemo, useCallback } from "react";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface PunctuationExercise {
  id: string;
  /** The correct text with proper punctuation */
  correct: string;
  /** The text stripped of punctuation (student version) */
  stripped: string;
  /** Positions where punctuation should be inserted (char index in stripped) */
  slots: PunctuationSlot[];
  hint?: string;
}

interface PunctuationSlot {
  /** Index in stripped text AFTER which the punctuation goes */
  afterIndex: number;
  /** The correct punctuation mark */
  mark: string;
}

/* -------------------------------------------------------------------------- */
/*  Exercise data per age group                                                */
/* -------------------------------------------------------------------------- */

const EXERCISES: Record<AgeGroup, PunctuationExercise[]> = {
  lagstadiet: [
    {
      id: "lag-1",
      correct: "Katten sover. Hunden leker.",
      stripped: "Katten sover Hunden leker",
      slots: [
        { afterIndex: 12, mark: "." },
        { afterIndex: 25, mark: "." },
      ],
      hint: "Det finns två meningar. Var slutar den första?",
    },
    {
      id: "lag-2",
      correct: "Vad heter du? Jag heter Ella.",
      stripped: "Vad heter du Jag heter Ella",
      slots: [
        { afterIndex: 12, mark: "?" },
        { afterIndex: 28, mark: "." },
      ],
      hint: "En mening är en fråga.",
    },
    {
      id: "lag-3",
      correct: "Titta! En stor fågel flyger!",
      stripped: "Titta En stor fågel flyger",
      slots: [
        { afterIndex: 5, mark: "!" },
        { afterIndex: 26, mark: "!" },
      ],
    },
    {
      id: "lag-4",
      correct: "Mamma sa: ”Kom hit.”",
      stripped: "Mamma sa Kom hit",
      slots: [
        { afterIndex: 8, mark: ":" },
        { afterIndex: 16, mark: "." },
      ],
    },
    {
      id: "lag-5",
      correct: "Det är måndag. Vi ska till skolan.",
      stripped: "Det är måndag Vi ska till skolan",
      slots: [
        { afterIndex: 14, mark: "." },
        { afterIndex: 33, mark: "." },
      ],
    },
    {
      id: "lag-6",
      correct: "Vill du ha glass? Ja, tack!",
      stripped: "Vill du ha glass Ja tack",
      slots: [
        { afterIndex: 16, mark: "?" },
        { afterIndex: 18, mark: "," },
        { afterIndex: 24, mark: "!" },
      ],
    },
  ],

  mellanstadiet: [
    {
      id: "mel-1",
      correct: "Anna sprang hem, öppnade dörren och ropade: ”Jag är hemma!”",
      stripped: "Anna sprang hem öppnade dörren och ropade Jag är hemma",
      slots: [
        { afterIndex: 15, mark: "," },
        { afterIndex: 38, mark: ":" },
        { afterIndex: 52, mark: "!" },
      ],
    },
    {
      id: "mel-2",
      correct: "Vi köpte äpplen, bananer, mjölk och bröd.",
      stripped: "Vi köpte äpplen bananer mjölk och bröd",
      slots: [
        { afterIndex: 16, mark: "," },
        { afterIndex: 24, mark: "," },
        { afterIndex: 40, mark: "." },
      ],
    },
    {
      id: "mel-3",
      correct: "Har du sett filmen? Den var jättebra, tyckte jag.",
      stripped: "Har du sett filmen Den var jättebra tyckte jag",
      slots: [
        { afterIndex: 17, mark: "?" },
        { afterIndex: 35, mark: "," },
        { afterIndex: 46, mark: "." },
      ],
    },
    {
      id: "mel-4",
      correct: "Det var mörkt ute. Träden vajade, och vinden yläde.",
      stripped: "Det var mörkt ute Träden vajade och vinden yläde",
      slots: [
        { afterIndex: 16, mark: "." },
        { afterIndex: 30, mark: "," },
        { afterIndex: 49, mark: "." },
      ],
    },
    {
      id: "mel-5",
      correct: "Följande saker behövs: penna, sudd och linjäl.",
      stripped: "Följande saker behövs penna sudd och linjäl",
      slots: [
        { afterIndex: 22, mark: ":" },
        { afterIndex: 28, mark: "," },
        { afterIndex: 45, mark: "." },
      ],
    },
    {
      id: "mel-6",
      correct: "Vilken fin dag! Ska vi gå ut och leka?",
      stripped: "Vilken fin dag Ska vi gå ut och leka",
      slots: [
        { afterIndex: 13, mark: "!" },
        { afterIndex: 37, mark: "?" },
      ],
    },
  ],

  hogstadiet: [
    {
      id: "hog-1",
      correct: "Enligt forskningen, som publicerades i mars, har klimatförändringarna ökat.",
      stripped: "Enligt forskningen som publicerades i mars har klimatförändringarna ökat",
      slots: [
        { afterIndex: 17, mark: "," },
        { afterIndex: 40, mark: "," },
        { afterIndex: 72, mark: "." },
      ],
    },
    {
      id: "hog-2",
      correct: "Hon frågade: ”Varför kom du inte?” Ingen svarade.",
      stripped: "Hon frågade Varför kom du inte Ingen svarade",
      slots: [
        { afterIndex: 12, mark: ":" },
        { afterIndex: 31, mark: "?" },
        { afterIndex: 47, mark: "." },
      ],
    },
    {
      id: "hog-3",
      correct: "Trots regnet – som öste ner – fortsatte matchen.",
      stripped: "Trots regnet som öste ner fortsatte matchen",
      slots: [
        { afterIndex: 12, mark: "–" },
        { afterIndex: 24, mark: "–" },
        { afterIndex: 44, mark: "." },
      ],
      hint: "Här kan tankstreck användas för inskjutna bisatser.",
    },
    {
      id: "hog-4",
      correct: "Det finns tre alternativ: studera, jobba eller resa.",
      stripped: "Det finns tre alternativ studera jobba eller resa",
      slots: [
        { afterIndex: 24, mark: ":" },
        { afterIndex: 32, mark: "," },
        { afterIndex: 50, mark: "." },
      ],
    },
    {
      id: "hog-5",
      correct: "Lektorn, som hade undervitat i årtionden, gick i pension.",
      stripped: "Lektorn som hade undervitat i årtionden gick i pension",
      slots: [
        { afterIndex: 7, mark: "," },
        { afterIndex: 39, mark: "," },
        { afterIndex: 54, mark: "." },
      ],
    },
    {
      id: "hog-6",
      correct: "Vad menar du? Jag förstår inte; förklara närmare.",
      stripped: "Vad menar du Jag förstår inte förklara närmare",
      slots: [
        { afterIndex: 12, mark: "?" },
        { afterIndex: 29, mark: ";" },
        { afterIndex: 47, mark: "." },
      ],
      hint: "Semikolon binder samman närliggande tankar.",
    },
  ],

  gymnasiet: [
    {
      id: "gym-1",
      correct: "Problemet är, som Svensson (2024) påpekar, att forskningen är otillräcklig.",
      stripped: "Problemet är som Svensson (2024) påpekar att forskningen är otillräcklig",
      slots: [
        { afterIndex: 12, mark: "," },
        { afterIndex: 39, mark: "," },
        { afterIndex: 72, mark: "." },
      ],
    },
    {
      id: "gym-2",
      correct: "Två perspektiv dominerar: det historiska och det sociologiska; båda har brister.",
      stripped: "Två perspektiv dominerar det historiska och det sociologiska båda har brister",
      slots: [
        { afterIndex: 23, mark: ":" },
        { afterIndex: 56, mark: ";" },
        { afterIndex: 75, mark: "." },
      ],
    },
    {
      id: "gym-3",
      correct: "Författaren menar att ”samhället står vid ett vägskäl”, vilket är en träffande beskrivning.",
      stripped: "Författaren menar att samhället står vid ett vägskäl vilket är en träffande beskrivning",
      slots: [
        { afterIndex: 50, mark: "," },
        { afterIndex: 84, mark: "." },
      ],
    },
    {
      id: "gym-4",
      correct: "Resultatet – som var oväntat – ledde till en omprövning av teorin; dock krävs fler studier.",
      stripped: "Resultatet som var oväntat ledde till en omprövning av teorin dock krävs fler studier",
      slots: [
        { afterIndex: 10, mark: "–" },
        { afterIndex: 26, mark: "–" },
        { afterIndex: 56, mark: ";" },
        { afterIndex: 80, mark: "." },
      ],
    },
    {
      id: "gym-5",
      correct: "Är det verkligen rimligt? Snarare bör man, som Andersson föreslår, ompröva hela ansatsen.",
      stripped: "Är det verkligen rimligt Snarare bör man som Andersson föreslår ompröva hela ansatsen",
      slots: [
        { afterIndex: 24, mark: "?" },
        { afterIndex: 43, mark: "," },
        { afterIndex: 65, mark: "," },
        { afterIndex: 87, mark: "." },
      ],
    },
    {
      id: "gym-6",
      correct: "Sammanfattningsvis: analysen visar att sambandet är komplext, mångfacetterat och svårtöverskådligt.",
      stripped: "Sammanfattningsvis analysen visar att sambandet är komplext mångfacetterat och svårtöverskådligt",
      slots: [
        { afterIndex: 18, mark: ":" },
        { afterIndex: 59, mark: "," },
        { afterIndex: 96, mark: "." },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function SkiljeteckenClient({ ageGroup }: { ageGroup: AgeGroup }) {
  const exercises = EXERCISES[ageGroup];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<number, string>>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [completed, setCompleted] = useState(0);

  const exercise = exercises[currentIndex];
  const exerciseAnswers = answers[exercise.id] ?? {};
  const isChecked = checked[exercise.id] ?? false;

  const PUNCTUATION_OPTIONS = useMemo(() => {
    if (ageGroup === "lagstadiet") return [".", "?", "!", ",", ":"];
    if (ageGroup === "mellanstadiet") return [".", "?", "!", ",", ":", ";"];
    return [".", "?", "!", ",", ":", ";", "–"];
  }, [ageGroup]);

  const isCorrect = useCallback(
    (slotIdx: number): boolean | null => {
      if (!isChecked) return null;
      const slot = exercise.slots[slotIdx];
      return exerciseAnswers[slotIdx] === slot.mark;
    },
    [isChecked, exercise, exerciseAnswers]
  );

  const allCorrect = useMemo(() => {
    if (!isChecked) return false;
    return exercise.slots.every((slot, i) => exerciseAnswers[i] === slot.mark);
  }, [isChecked, exercise, exerciseAnswers]);

  const handleSelect = (slotIdx: number, mark: string) => {
    if (isChecked) return;
    setAnswers((prev) => ({
      ...prev,
      [exercise.id]: { ...prev[exercise.id], [slotIdx]: mark },
    }));
  };

  const handleCheck = () => {
    setChecked((prev) => ({ ...prev, [exercise.id]: true }));
    const correct = exercise.slots.every(
      (slot, i) => exerciseAnswers[i] === slot.mark
    );
    if (correct) setCompleted((c) => c + 1);
  };

  const handleReset = () => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[exercise.id];
      return copy;
    });
    setChecked((prev) => {
      const copy = { ...prev };
      delete copy[exercise.id];
      return copy;
    });
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  // Build the display: split the stripped text at slot positions
  const renderText = () => {
    const parts: React.ReactNode[] = [];
    const sorted = [...exercise.slots].sort(
      (a, b) => a.afterIndex - b.afterIndex
    );
    let lastIdx = 0;

    sorted.forEach((slot, slotIdx) => {
      // Text before this slot
      parts.push(
        <span key={`t-${slotIdx}`}>
          {exercise.stripped.slice(lastIdx, slot.afterIndex)}
        </span>
      );
      lastIdx = slot.afterIndex;

      // The slot button
      const answer = exerciseAnswers[slotIdx];
      const correctness = isCorrect(slotIdx);

      parts.push(
        <span key={`s-${slotIdx}`} className="relative inline-block mx-0.5">
          {answer ? (
            <span
              className={`inline-flex items-center justify-center rounded px-1.5 py-0.5 text-base font-bold transition-colors ${
                correctness === true
                  ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                  : correctness === false
                    ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                    : "bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"
              }`}
            >
              {answer}
              {correctness === false && (
                <span className="ml-1 text-xs font-normal">({slot.mark})</span>
              )}
            </span>
          ) : (
            <select
              value=""
              onChange={(e) => handleSelect(slotIdx, e.target.value)}
              className="inline-block h-7 w-10 rounded border-2 border-dashed border-neutral-400 bg-neutral-50 text-center text-base font-bold text-neutral-900 transition-colors hover:border-neutral-600 focus:border-neutral-600 focus:outline-none dark:border-neutral-500 dark:bg-neutral-800 dark:text-white dark:hover:border-neutral-300"
            >
              <option value="" disabled>
                _
              </option>
              {PUNCTUATION_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          )}
        </span>
      );
    });

    // Remaining text
    parts.push(
      <span key="end">{exercise.stripped.slice(lastIdx)}</span>
    );

    return parts;
  };

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          Text {currentIndex + 1} av {exercises.length}
        </span>
        <span>
          {completed} av {exercises.length} rätt
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-300"
          style={{ width: `${(completed / exercises.length) * 100}%` }}
        />
      </div>

      {/* Exercise card */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Placera ut skiljetecken
        </p>

        <div className="mb-6 text-lg leading-relaxed text-neutral-900 dark:text-neutral-100">
          {renderText()}
        </div>

        {exercise.hint && !isChecked && (
          <p className="mb-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
            💡 {exercise.hint}
          </p>
        )}

        {isChecked && (
          <div
            className={`mb-4 flex items-center gap-2 rounded-lg p-3 text-sm ${
              allCorrect
                ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
            }`}
          >
            {allCorrect ? (
              <>
                <CheckCircle className="h-5 w-5" />
                Rätt! Alla skiljetecken är korrekt placerade.
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5" />
                Inte helt rätt. Rätt svar visas med grönt, fel med rött (korrekt svar inom parentes).
              </>
            )}
          </div>
        )}

        {isChecked && (
          <div className="mb-4 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Korrekt text
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {exercise.correct}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {!isChecked && (
            <Button
              onClick={handleCheck}
              disabled={
                Object.keys(exerciseAnswers).length < exercise.slots.length
              }
              className="gap-1"
            >
              <CheckCircle className="h-4 w-4" />
              Kontrollera
            </Button>
          )}

          {isChecked && (
            <Button variant="outline" onClick={handleReset} className="gap-1">
              <RotateCcw className="h-4 w-4" />
              Försök igen
            </Button>
          )}

          {isChecked && currentIndex < exercises.length - 1 && (
            <Button onClick={handleNext} className="gap-1">
              Nästa text
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Completed all */}
      {completed === exercises.length && (
        <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
          <Trophy className="h-8 w-8 text-green-600 dark:text-green-400" />
          <div>
            <p className="text-lg font-semibold text-green-800 dark:text-green-200">
              Grattis!
            </p>
            <p className="text-sm text-green-700 dark:text-green-300">
              Du har klarat alla texter. Bra jobbat med skiljetecknen!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
