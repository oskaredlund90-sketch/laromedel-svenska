"use client";

import { useState, useMemo } from "react";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface CitatExercise {
  id: string;
  type: "convert" | "rules";
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

/* -------------------------------------------------------------------------- */
/*  Exercise data per age group                                                */
/* -------------------------------------------------------------------------- */

const EXERCISES: Record<AgeGroup, CitatExercise[]> = {
  lagstadiet: [
    {
      id: "lag-1",
      type: "rules",
      prompt: "Vilket alternativ har rätt citattecken?",
      options: [
        "Mamma sa kom hit.",
        "Mamma sa: \"Kom hit.\"",
        "Mamma sa - Kom hit.",
        "Mamma sa (Kom hit).",
      ],
      correct: 1,
      explanation: "Före ett citat skriver vi kolon, och citatet omges av citattecken (\").",
    },
    {
      id: "lag-2",
      type: "convert",
      prompt: "Skriv om till direkt tal: Pappa berättade att de skulle åka till stranden.",
      options: [
        "Pappa berättade: \"Vi ska åka till stranden.\"",
        "Pappa berättade att \"vi ska åka till stranden\".",
        "\"Vi ska åka till stranden\" berättade Pappa.",
        "Pappa sa stranden.",
      ],
      correct: 0,
      explanation: "Vid direkt tal använder vi kolon efter sägeverbet och citattecken runt det som sägs. \"De\" blir \"vi\" i direkt tal.",
    },
    {
      id: "lag-3",
      type: "rules",
      prompt: "Var ska punkten vara i ett citat?",
      options: [
        "Punkten ska vara utanför citattecknet: \"Hej\".",
        "Punkten ska vara innanför citattecknet: \"Hej.\"",
        "Det behövs ingen punkt i ett citat.",
        "Det ska vara punkt både innanför och utanför.",
      ],
      correct: 1,
      explanation: "I svenskan placeras punkten innanför citattecknet när citatet är en hel mening.",
    },
    {
      id: "lag-4",
      type: "convert",
      prompt: "Skriv om till indirekt tal: Läraren sa: \"Öppna era böcker.\"",
      options: [
        "Läraren sa att de skulle öppna sina böcker.",
        "Läraren sa: de ska öppna böcker.",
        "\"Öppna era böcker\" läraren sa.",
        "Läraren sa öppna böckerna.",
      ],
      correct: 0,
      explanation: "Vid indirekt tal tar vi bort citattecknen och kolon, lägger till \"att\" och ändrar pronomen (\"era\" blir \"sina\").",
    },
    {
      id: "lag-5",
      type: "rules",
      prompt: "Vilket ord använder vi ofta före ett citat?",
      options: [
        "Ett komma",
        "Ett kolon",
        "Ett utropstecken",
        "Ett frågetecken",
      ],
      correct: 1,
      explanation: "Före ett citat skriver vi oftast kolon (:) efter sägeverbet.",
    },
  ],

  mellanstadiet: [
    {
      id: "mel-1",
      type: "convert",
      prompt: "Skriv om till direkt tal: Sara berättade att hon hade vunnit tävlingen.",
      options: [
        "Sara berättade att: \"Jag har vunnit tävlingen.\"",
        "Sara berättade: \"Jag har vunnit tävlingen!\"",
        "\"Jag har vunnit tävlingen\" sa Sara.",
        "Sara sa: Jag har vunnit tävlingen.",
      ],
      correct: 1,
      explanation: "Kolon efter sägeverbet, citattecken runt talet, och \"hon hade\" ändras till \"jag har\" i direkt tal.",
    },
    {
      id: "mel-2",
      type: "rules",
      prompt: "Vilket alternativ visar korrekt användning av citat i en uppsats?",
      options: [
        "I boken står det att livet är kort.",
        "I boken står det: \"Livet är kort.\"",
        "I boken \"Livet är kort\".",
        "I boken: Livet är kort.",
      ],
      correct: 1,
      explanation: "När vi citerar en text använder vi kolon före citatet och sätter citattecken runt de exakta orden.",
    },
    {
      id: "mel-3",
      type: "convert",
      prompt: "Skriv om till indirekt tal: \"Kan du hjälpa mig?\" frågade Erik.",
      options: [
        "Erik frågade om han kunde hjälpa honom.",
        "Erik frågade: kan du hjälpa mig.",
        "Erik frågade \"kan du hjälpa mig?\"",
        "Erik sa att kan du hjälpa mig.",
      ],
      correct: 0,
      explanation: "I indirekt tal vid frågor använder vi \"om\" istället för frågetecken, och ändrar pronomen.",
    },
    {
      id: "mel-4",
      type: "rules",
      prompt: "Hur skriver man ett citat som avbryts mitt i en mening?",
      options: [
        "\"Jag tycker\", sa hon, \"att vi ska gå.\"",
        "\"Jag tycker\" sa hon \"att vi ska gå\".",
        "Jag tycker, sa hon, att vi ska gå.",
        "\"Jag tycker sa hon att vi ska gå.\"",
      ],
      correct: 0,
      explanation: "Vid avbrutet citat avslutar vi första delen med citattecken och komma, skriver sägeverbet, och fortsätter med nytt citattecken.",
    },
    {
      id: "mel-5",
      type: "convert",
      prompt: "Skriv om till direkt tal: Läraren förklarade att alla måste vara tysta under provet.",
      options: [
        "Läraren förklarade: \"Alla måste vara tysta under provet.\"",
        "\"Alla måste vara tysta under provet\" förklarade läraren.",
        "Läraren förklarade att \"alla måste vara tysta\".",
        "Läraren sa: alla var tysta under provet.",
      ],
      correct: 0,
      explanation: "Kolon efter sägeverbet, citattecken runt det direkta talet, och punkt innanför sista citattecknet.",
    },
    {
      id: "mel-6",
      type: "rules",
      prompt: "Vilken typ av anföringstecken används i svensk text?",
      options: [
        "Enkla citattecken: 'Hej.'",
        "Dubbla raka citattecken: \"Hej.\"",
        "Vinkelcitattecken: \u00abHej.\u00bb",
        "Alla tre är godkända i svensk text.",
      ],
      correct: 3,
      explanation: "I svensk text accepteras alla tre typerna, men de dubbla raka citattecknen (\") är vanligast i modern text.",
    },
  ],

  hogstadiet: [
    {
      id: "hog-1",
      type: "convert",
      prompt: "Skriv om till indirekt tal: \"Jag har aldrig sett något liknande\", sade forskaren, \"och jag tror inte att det kommer att hända igen.\"",
      options: [
        "Forskaren sade att han aldrig hade sett något liknande och att han inte trodde att det skulle hända igen.",
        "Forskaren sade: han har aldrig sett något liknande.",
        "Forskaren sade att \"han har aldrig sett något liknande\".",
        "Forskaren sade att aldrig sett liknande och inte hända igen.",
      ],
      correct: 0,
      explanation: "I indirekt tal ändras tempus (\"har sett\" \u2192 \"hade sett\"), pronomen (\"jag\" \u2192 \"han\") och citatmarkeringar tas bort.",
    },
    {
      id: "hog-2",
      type: "rules",
      prompt: "Hur markerar man ett utelämnat ord i ett citat?",
      options: [
        "Med tre punkter: \"Texten visar ... att problemet kvarstår.\"",
        "Med bindestreck: \"Texten visar - att problemet kvarstår.\"",
        "Med hakparenteser och punkter: \"Texten visar [...] att problemet kvarstår.\"",
        "Man får inte utelämna ord i ett citat.",
      ],
      correct: 2,
      explanation: "Hakparenteser med tre punkter [...] visar att man har utelämnat en del av originaltexten.",
    },
    {
      id: "hog-3",
      type: "rules",
      prompt: "Hur skriver man ett citat inuti ett annat citat?",
      options: [
        "Med dubbla citattecken inuti dubbla citattecken.",
        "Med enkla citattecken inuti dubbla: \"Hon sa: 'Gå hem.'\"",
        "Man kan inte ha citat inuti citat.",
        "Med kursiv stil inuti citatet.",
      ],
      correct: 1,
      explanation: "Vid citat inuti citat använder man enkla citattecken (\u2019 \u2019) inuti de dubbla citattecknen.",
    },
    {
      id: "hog-4",
      type: "convert",
      prompt: "Skriv om till direkt tal: Reportern rapporterade att vittnet hade sett en man fly från platsen.",
      options: [
        "Reportern rapporterade: Vittnet har sett en man fly.",
        "Reportern rapporterade: \"Vittnet har sett en man fly från platsen.\"",
        "\"Vittnet har sett en man fly från platsen\", rapporterade reportern.",
        "Reportern rapporterade att: \"vittnet har sett en man fly.\"",
      ],
      correct: 1,
      explanation: "Kolon efter sägeverbet, citattecken runt hela citatet, och tempus ändras tillbaka (\"hade sett\" \u2192 \"har sett\").",
    },
    {
      id: "hog-5",
      type: "rules",
      prompt: "Hur gör man när man vill ändra eller lägga till ord i ett citat för att det ska passa in grammatiskt?",
      options: [
        "Man ändrar orden utan att markera det.",
        "Man lägger till orden inom hakparenteser: \"[De] kom tidigt.\"",
        "Man skriver om hela citatet.",
        "Man använder parenteser: \"(De) kom tidigt.\"",
      ],
      correct: 1,
      explanation: "Hakparenteser [...] visar att skribenten har lagt till eller ändrat ord i citatet för att det ska passa grammatiskt.",
    },
  ],

  gymnasiet: [
    {
      id: "gym-1",
      type: "rules",
      prompt: "Enligt akademisk citatpraxis, hur introducerar man ett blockcitat (långt citat)?",
      options: [
        "Med citattecken och kolon, som vanligt.",
        "Med en inledande mening som avslutas med kolon, följt av indragen text utan citattecken.",
        "Med kursiv stil och citattecken.",
        "Med fet stil och hakparenteser.",
      ],
      correct: 1,
      explanation: "Blockcitat (vanligtvis citat längre än tre rader) skrivs som indragen text utan citattecken, efter en inledande mening med kolon.",
    },
    {
      id: "gym-2",
      type: "convert",
      prompt: "Skriv om till indirekt tal: \"Resultaten\", skriver Svensson (2024), \"tyder på att sambandet är mer komplext än vad man tidigare trott.\"",
      options: [
        "Svensson (2024) menar att resultaten tyder på att sambandet är mer komplext än vad man tidigare trott.",
        "Svensson (2024) skriver: resultaten tyder på samband.",
        "Enligt Svensson (2024) \"resultaten tyder på\" komplext samband.",
        "Svensson (2024) skriver att \"resultaten tyder på att sambandet är mer komplext\".",
      ],
      correct: 0,
      explanation: "Vid indirekt tal integreras citatet i den egna texten utan citattecken, med \"menar att\" som sägeuttryck.",
    },
    {
      id: "gym-3",
      type: "rules",
      prompt: "Hur markerar man betoning som inte finns i originaltexten när man citerar?",
      options: [
        "Man kursiverar ordet och skriver \"min kursivering\" efter citatet.",
        "Man skriver ordet med versaler.",
        "Man understryker ordet.",
        "Man kan inte lägga till betoning i ett citat.",
      ],
      correct: 0,
      explanation: "Man kan kursivera ord för betoning och skriver sedan \"min kursivering\" eller \"min emfas\" i en fotnot eller parentes.",
    },
    {
      id: "gym-4",
      type: "convert",
      prompt: "Integrera detta citat i en mening: \"Språket formar verkligheten\" (Eriksson, 2023).",
      options: [
        "Eriksson (2023) menar att: \"Språket formar verkligheten.\"",
        "Eriksson (2023) hävdar att \"språket formar verkligheten\" (s. 45).",
        "\"Språket formar verkligheten\" Eriksson (2023).",
        "Enligt Eriksson, 2023, språket formar verkligheten.",
      ],
      correct: 1,
      explanation: "Det integrerade citatet inleds med liten bokstav och blir en del av den egna meningen. Sidhänvisning i parentes.",
    },
    {
      id: "gym-5",
      type: "rules",
      prompt: "Vad är skillnaden mellan att citera och att parafrasera?",
      options: [
        "Det finns ingen skillnad.",
        "Att citera innebär att återge exakta ord med citattecken, att parafrasera innebär att återge innebörden med egna ord.",
        "Att citera är informellt, att parafrasera är formellt.",
        "Att citera kräver källhänvisning, att parafrasera gör det inte.",
      ],
      correct: 1,
      explanation: "Att citera = exakt ordföljd med citattecken. Att parafrasera = egna ord, ingen citattecken. Båda kräver källhänvisning.",
    },
    {
      id: "gym-6",
      type: "rules",
      prompt: "Vilket av dessa citat är korrekt formaterat enligt svensk standard?",
      options: [
        "Som Lindgren uttrycker det, \"barnet har rätt till en trygg uppväxt\" (2022, s. 34).",
        "Som Lindgren uttrycker det: \"Barnet har rätt till en trygg uppväxt\" (2022, s. 34).",
        "Som Lindgren (2022, s. 34) uttrycker det: \"Barnet har rätt till en trygg uppväxt.\"",
        "Som Lindgren uttrycker det: Barnet har rätt till en trygg uppväxt (2022).",
      ],
      correct: 2,
      explanation: "Källhänvisningen placeras efter författarnamnet, kolon före citatet, stort begynnelsebokstav och punkt innanför citattecknet.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Fallback helper                                                            */
/* -------------------------------------------------------------------------- */

const FALLBACK_ORDER: AgeGroup[] = ["gymnasiet", "hogstadiet", "mellanstadiet", "lagstadiet"];

function getExercises(ageGroup: AgeGroup): CitatExercise[] {
  const startIdx = FALLBACK_ORDER.indexOf(ageGroup);
  for (let i = startIdx; i < FALLBACK_ORDER.length; i++) {
    const data = EXERCISES[FALLBACK_ORDER[i]];
    if (data && data.length > 0) return data;
  }
  return EXERCISES.lagstadiet;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function CitatteknikClient({ ageGroup }: { ageGroup: AgeGroup }) {
  const exercises = useMemo(() => getExercises(ageGroup), [ageGroup]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [completed, setCompleted] = useState(0);

  const exercise = exercises[currentIndex];
  const answer = selected[exercise.id] ?? -1;
  const isChecked = checked[exercise.id] ?? false;
  const isCorrect = isChecked && answer === exercise.correct;

  const handleSelect = (optionIndex: number) => {
    if (isChecked) return;
    setSelected((prev) => ({ ...prev, [exercise.id]: optionIndex }));
  };

  const handleCheck = () => {
    setChecked((prev) => ({ ...prev, [exercise.id]: true }));
    if (answer === exercise.correct) setCompleted((c) => c + 1);
  };

  const handleReset = () => {
    setSelected((prev) => {
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

  const typeLabel = exercise.type === "convert" ? "Omskriving" : "Citatregler";

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          Övning {currentIndex + 1} av {exercises.length}
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
        <div className="mb-4 flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              exercise.type === "convert"
                ? "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300"
                : "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300"
            }`}
          >
            {typeLabel}
          </span>
        </div>

        {/* Prompt */}
        <p className="mb-5 text-base font-medium text-neutral-900 dark:text-neutral-100">
          {exercise.prompt}
        </p>

        {/* Options */}
        <div className="mb-6 space-y-3">
          {exercise.options.map((option, i) => {
            const isSelected = answer === i;
            const showCorrect = isChecked && i === exercise.correct;
            const showWrong = isChecked && isSelected && i !== exercise.correct;

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={isChecked}
                className={`w-full rounded-lg border-2 p-3 text-left text-sm transition-colors ${
                  showCorrect
                    ? "border-green-400 bg-green-50 text-green-900 dark:border-green-600 dark:bg-green-900/30 dark:text-green-200"
                    : showWrong
                      ? "border-red-400 bg-red-50 text-red-900 dark:border-red-600 dark:bg-red-900/30 dark:text-red-200"
                      : isSelected
                        ? "border-neutral-500 bg-neutral-100 text-neutral-900 dark:border-neutral-400 dark:bg-neutral-800 dark:text-neutral-100"
                        : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
                }`}
              >
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
                {showCorrect && <CheckCircle className="ml-2 inline h-4 w-4 text-green-600 dark:text-green-400" />}
                {showWrong && <XCircle className="ml-2 inline h-4 w-4 text-red-600 dark:text-red-400" />}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {isChecked && (
          <div
            className={`mb-4 rounded-lg p-3 text-sm ${
              isCorrect
                ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
            }`}
          >
            <div className="mb-1 flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Rätt!</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5" />
                  <span className="font-semibold">Inte riktigt.</span>
                </>
              )}
            </div>
            <p>{exercise.explanation}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {!isChecked && (
            <Button
              onClick={handleCheck}
              disabled={answer === -1}
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
              Nästa övning
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
              Du har klarat alla övningar. Bra jobbat med citatteknik!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
