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
      hint: "Det finns tv\u00e5 meningar. Var slutar den f\u00f6rsta?",
    },
    {
      id: "lag-2",
      correct: "Vad heter du? Jag heter Ella.",
      stripped: "Vad heter du Jag heter Ella",
      slots: [
        { afterIndex: 12, mark: "?" },
        { afterIndex: 28, mark: "." },
      ],
      hint: "En mening \u00e4r en fr\u00e5ga.",
    },
    {
      id: "lag-3",
      correct: "Titta! En stor f\u00e5gel flyger!",
      stripped: "Titta En stor f\u00e5gel flyger",
      slots: [
        { afterIndex: 5, mark: "!" },
        { afterIndex: 26, mark: "!" },
      ],
    },
    {
      id: "lag-4",
      correct: "Mamma sa: \u201dKom hit.\u201d",
      stripped: "Mamma sa Kom hit",
      slots: [
        { afterIndex: 8, mark: ":" },
        { afterIndex: 16, mark: "." },
      ],
    },
    {
      id: "lag-5",
      correct: "Det \u00e4r m\u00e5ndag. Vi ska till skolan.",
      stripped: "Det \u00e4r m\u00e5ndag Vi ska till skolan",
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
      correct: "Anna sprang hem, \u00f6ppnade d\u00f6rren och ropade: \u201dJag \u00e4r hemma!\u201d",
      stripped: "Anna sprang hem \u00f6ppnade d\u00f6rren och ropade Jag \u00e4r hemma",
      slots: [
        { afterIndex: 15, mark: "," },
        { afterIndex: 38, mark: ":" },
        { afterIndex: 52, mark: "!" },
      ],
    },
    {
      id: "mel-2",
      correct: "Vi k\u00f6pte \u00e4pplen, bananer, mj\u00f6lk och br\u00f6d.",
      stripped: "Vi k\u00f6pte \u00e4pplen bananer mj\u00f6lk och br\u00f6d",
      slots: [
        { afterIndex: 16, mark: "," },
        { afterIndex: 24, mark: "," },
        { afterIndex: 40, mark: "." },
      ],
    },
    {
      id: "mel-3",
      correct: "Har du sett filmen? Den var j\u00e4ttebra, tyckte jag.",
      stripped: "Har du sett filmen Den var j\u00e4ttebra tyckte jag",
      slots: [
        { afterIndex: 17, mark: "?" },
        { afterIndex: 35, mark: "," },
        { afterIndex: 46, mark: "." },
      ],
    },
    {
      id: "mel-4",
      correct: "Det var m\u00f6rkt ute. Tr\u00e4den vajade, och vinden yl\u00e4de.",
      stripped: "Det var m\u00f6rkt ute Tr\u00e4den vajade och vinden yl\u00e4de",
      slots: [
        { afterIndex: 16, mark: "." },
        { afterIndex: 30, mark: "," },
        { afterIndex: 49, mark: "." },
      ],
    },
    {
      id: "mel-5",
      correct: "F\u00f6ljande saker beh\u00f6vs: penna, sudd och linj\u00e4l.",
      stripped: "F\u00f6ljande saker beh\u00f6vs penna sudd och linj\u00e4l",
      slots: [
        { afterIndex: 22, mark: ":" },
        { afterIndex: 28, mark: "," },
        { afterIndex: 45, mark: "." },
      ],
    },
    {
      id: "mel-6",
      correct: "Vilken fin dag! Ska vi g\u00e5 ut och leka?",
      stripped: "Vilken fin dag Ska vi g\u00e5 ut och leka",
      slots: [
        { afterIndex: 13, mark: "!" },
        { afterIndex: 37, mark: "?" },
      ],
    },
  ],

  hogstadiet: [
    {
      id: "hog-1",
      correct: "Enligt forskningen, som publicerades i mars, har klimatf\u00f6r\u00e4ndringarna \u00f6kat.",
      stripped: "Enligt forskningen som publicerades i mars har klimatf\u00f6r\u00e4ndringarna \u00f6kat",
      slots: [
        { afterIndex: 17, mark: "," },
        { afterIndex: 40, mark: "," },
        { afterIndex: 72, mark: "." },
      ],
    },
    {
      id: "hog-2",
      correct: "Hon fr\u00e5gade: \u201dVarf\u00f6r kom du inte?\u201d Ingen svarade.",
      stripped: "Hon fr\u00e5gade Varf\u00f6r kom du inte Ingen svarade",
      slots: [
        { afterIndex: 12, mark: ":" },
        { afterIndex: 31, mark: "?" },
        { afterIndex: 47, mark: "." },
      ],
    },
    {
      id: "hog-3",
      correct: "Trots regnet \u2013 som \u00f6ste ner \u2013 fortsatte matchen.",
      stripped: "Trots regnet som \u00f6ste ner fortsatte matchen",
      slots: [
        { afterIndex: 12, mark: "\u2013" },
        { afterIndex: 24, mark: "\u2013" },
        { afterIndex: 44, mark: "." },
      ],
      hint: "H\u00e4r kan tankstreck anv\u00e4ndas f\u00f6r inskjutna bisatser.",
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
      correct: "Lektorn, som hade undervitat i \u00e5rtionden, gick i pension.",
      stripped: "Lektorn som hade undervitat i \u00e5rtionden gick i pension",
      slots: [
        { afterIndex: 7, mark: "," },
        { afterIndex: 39, mark: "," },
        { afterIndex: 54, mark: "." },
      ],
    },
    {
      id: "hog-6",
      correct: "Vad menar du? Jag f\u00f6rst\u00e5r inte; f\u00f6rklara n\u00e4rmare.",
      stripped: "Vad menar du Jag f\u00f6rst\u00e5r inte f\u00f6rklara n\u00e4rmare",
      slots: [
        { afterIndex: 12, mark: "?" },
        { afterIndex: 29, mark: ";" },
        { afterIndex: 47, mark: "." },
      ],
      hint: "Semikolon binder samman n\u00e4rliggande tankar.",
    },
  ],

  gymnasiet: [
    {
      id: "gym-1",
      correct: "Problemet \u00e4r, som Svensson (2024) p\u00e5pekar, att forskningen \u00e4r otillr\u00e4cklig.",
      stripped: "Problemet \u00e4r som Svensson (2024) p\u00e5pekar att forskningen \u00e4r otillr\u00e4cklig",
      slots: [
        { afterIndex: 12, mark: "," },
        { afterIndex: 39, mark: "," },
        { afterIndex: 72, mark: "." },
      ],
    },
    {
      id: "gym-2",
      correct: "Tv\u00e5 perspektiv dominerar: det historiska och det sociologiska; b\u00e5da har brister.",
      stripped: "Tv\u00e5 perspektiv dominerar det historiska och det sociologiska b\u00e5da har brister",
      slots: [
        { afterIndex: 23, mark: ":" },
        { afterIndex: 56, mark: ";" },
        { afterIndex: 75, mark: "." },
      ],
    },
    {
      id: "gym-3",
      correct: "F\u00f6rfattaren menar att \u201dsamh\u00e4llet st\u00e5r vid ett v\u00e4gsk\u00e4l\u201d, vilket \u00e4r en tr\u00e4ffande beskrivning.",
      stripped: "F\u00f6rfattaren menar att samh\u00e4llet st\u00e5r vid ett v\u00e4gsk\u00e4l vilket \u00e4r en tr\u00e4ffande beskrivning",
      slots: [
        { afterIndex: 50, mark: "," },
        { afterIndex: 84, mark: "." },
      ],
    },
    {
      id: "gym-4",
      correct: "Resultatet \u2013 som var ov\u00e4ntat \u2013 ledde till en ompr\u00f6vning av teorin; dock kr\u00e4vs fler studier.",
      stripped: "Resultatet som var ov\u00e4ntat ledde till en ompr\u00f6vning av teorin dock kr\u00e4vs fler studier",
      slots: [
        { afterIndex: 10, mark: "\u2013" },
        { afterIndex: 26, mark: "\u2013" },
        { afterIndex: 56, mark: ";" },
        { afterIndex: 80, mark: "." },
      ],
    },
    {
      id: "gym-5",
      correct: "\u00c4r det verkligen rimligt? Snarare b\u00f6r man, som Andersson f\u00f6resl\u00e5r, ompröva hela ansatsen.",
      stripped: "\u00c4r det verkligen rimligt Snarare b\u00f6r man som Andersson f\u00f6resl\u00e5r ompröva hela ansatsen",
      slots: [
        { afterIndex: 24, mark: "?" },
        { afterIndex: 43, mark: "," },
        { afterIndex: 65, mark: "," },
        { afterIndex: 87, mark: "." },
      ],
    },
    {
      id: "gym-6",
      correct: "Sammanfattningsvis: analysen visar att sambandet \u00e4r komplext, mångfacetterat och sv\u00e5rt\u00f6versk\u00e5dligt.",
      stripped: "Sammanfattningsvis analysen visar att sambandet \u00e4r komplext m\u00e5ngfacetterat och sv\u00e5rt\u00f6versk\u00e5dligt",
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
    return [".", "?", "!", ",", ":", ";", "\u2013"];
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
          {completed} av {exercises.length} r\u00e4tt
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
            \ud83d\udca1 {exercise.hint}
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
                R\u00e4tt! Alla skiljetecken \u00e4r korrekt placerade.
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5" />
                Inte helt r\u00e4tt. R\u00e4tt svar visas med gr\u00f6nt, fel med r\u00f6tt (korrekt svar inom parentes).
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
              F\u00f6rs\u00f6k igen
            </Button>
          )}

          {isChecked && currentIndex < exercises.length - 1 && (
            <Button onClick={handleNext} className="gap-1">
              N\u00e4sta text
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
