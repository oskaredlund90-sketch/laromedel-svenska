"use client";

import { useState, useMemo } from "react";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface VariationExercise {
  id: string;
  original: string;
  options: string[];
  correct: number;
  explanation: string;
}

/* -------------------------------------------------------------------------- */
/*  Exercise data per age group                                                */
/* -------------------------------------------------------------------------- */

const EXERCISES: Record<AgeGroup, VariationExercise[]> = {
  lagstadiet: [
    {
      id: "lag-1",
      original: "Jag gick till skolan. Jag åt lunch. Jag lekte på rasten.",
      options: [
        "Jag gick till skolan. Jag åt lunch. Jag lekte på rasten.",
        "På morgonen gick jag till skolan. Sedan åt jag lunch och lekte på rasten.",
        "Till skolan gick jag. Lunch åt jag. På rasten lekte jag.",
      ],
      correct: 1,
      explanation: "Genom att variera meningarnas början och binda ihop dem med \"sedan\" och \"och\" flyter texten bättre.",
    },
    {
      id: "lag-2",
      original: "Hunden sprang. Hunden skällde. Hunden var glad.",
      options: [
        "Hunden sprang och skällde glatt.",
        "Hunden sprang. Hunden skällde. Hunden var glad.",
        "Sprang gjorde hunden. Skällde gjorde hunden. Glad var hunden.",
      ],
      correct: 0,
      explanation: "Genom att slå ihop meningarna till en mening med \"och\" slipper vi upprepningen av \"Hunden\".",
    },
    {
      id: "lag-3",
      original: "Det var kallt. Det snöade. Det blåste.",
      options: [
        "Det var kallt och det snöade och det blåste.",
        "Ute var det kallt. Snön föll och vinden blåste.",
        "Det var kallt. Det snöade. Det blåste.",
      ],
      correct: 1,
      explanation: "Den bättre versionen varierar meningsstarten och använder olika ord istället för att upprepa \"det\".",
    },
    {
      id: "lag-4",
      original: "Anna har en katt. Anna matar katten. Anna tycker om katten.",
      options: [
        "Anna har en katt. Anna matar katten. Anna tycker om katten.",
        "Anna har en katt som hon matar varje dag. Hon tycker mycket om den.",
        "Katten har Anna. Matar gör Anna. Tycker om gör Anna.",
      ],
      correct: 1,
      explanation: "Att använda \"som\" och byta till \"hon\" gör texten mer varierad och naturlig.",
    },
    {
      id: "lag-5",
      original: "Vi åkte bil. Vi kom fram. Vi gick in.",
      options: [
        "Vi åkte bil och vi kom fram och vi gick in.",
        "Vi åkte bil. Vi kom fram. Vi gick in.",
        "Efter en lång bilresa kom vi äntligen fram och gick in.",
      ],
      correct: 2,
      explanation: "Meningen sammanfattar handlingarna smidigt med \"efter\" och \"äntligen\" som ger mer liv åt texten.",
    },
  ],

  mellanstadiet: [
    {
      id: "mel-1",
      original: "Han vaknade tidigt. Han åt frukost. Han gick till skolan. Han träffade sina kompisar.",
      options: [
        "Han vaknade tidigt. Han åt frukost. Han gick till skolan. Han träffade sina kompisar.",
        "Tidigt på morgonen vaknade han och åt frukost. Sedan gick han till skolan där han träffade sina kompisar.",
        "Vaknade tidigt, åt frukost, gick till skolan och träffade kompisar.",
      ],
      correct: 1,
      explanation: "Tidsuttrycket \"tidigt på morgonen\" som start och bindeord som \"sedan\" och \"där\" skapar bättre flyt.",
    },
    {
      id: "mel-2",
      original: "Stormen kom på natten. Stormen var kraftig. Stormen fällde träd. Stormen orsakade strömavbrott.",
      options: [
        "Stormen kom på natten. Stormen var kraftig. Stormen fällde träd. Stormen orsakade strömavbrott.",
        "Den kraftiga stormen kom på natten, fällde träd och orsakade strömavbrott.",
        "På natten kom det en storm. Den var kraftig. Den fällde träd. Den orsakade strömavbrott.",
      ],
      correct: 1,
      explanation: "Genom att flytta adjektivet \"kraftiga\" till första meningen och använda en uppräkning skapas en effektiv mening.",
    },
    {
      id: "mel-3",
      original: "Sverige har många sjöar. Sverige har stora skogar. Sverige har höga berg i väster.",
      options: [
        "I Sverige finns det sjöar, skogar och berg.",
        "Sverige har många sjöar. Sverige har stora skogar. Sverige har höga berg i väster.",
        "Med sina många sjöar, stora skogar och höga berg i väster är Sverige ett varierat land.",
      ],
      correct: 2,
      explanation: "Att inleda med \"med sina\" och samla beskrivningarna i en uppräkning ger en mer avancerad och varierad mening.",
    },
    {
      id: "mel-4",
      original: "Boken var spännande. Boken handlade om en resa. Boken var skriven av en känd författare.",
      options: [
        "Boken var spännande. Boken handlade om en resa. Boken var skriven av en känd författare.",
        "Den spännande boken, som var skriven av en känd författare, handlade om en resa.",
        "Boken var spännande och handlade om resa och var skriven av känd författare.",
      ],
      correct: 1,
      explanation: "Att använda en inskjuten bisats (\"som var skriven av\") och flytta adjektivet framför substantivet gör meningen mer elegant.",
    },
    {
      id: "mel-5",
      original: "Eleverna arbetade med projektet. Eleverna sökte information. Eleverna skrev en rapport.",
      options: [
        "Eleverna arbetade med projektet. Eleverna sökte information. Eleverna skrev en rapport.",
        "Eleverna arbetade med projektet och sökte information och skrev en rapport.",
        "Under projektarbetet sökte eleverna information och sammanställde sedan sina resultat i en rapport.",
      ],
      correct: 2,
      explanation: "Att börja med ett prepositionsuttryck och använda \"sedan\" ger meningsvariation och visar tidsföljd.",
    },
    {
      id: "mel-6",
      original: "Det regnade hela dagen. Det var blött överallt. Det var kallt ute.",
      options: [
        "Det regnade hela dagen. Det var blött överallt. Det var kallt ute.",
        "Regnet öste ner hela dagen och det var både blött och kallt ute.",
        "Det regnade och var blött och kallt hela dagen överallt ute.",
      ],
      correct: 1,
      explanation: "Att byta subjekt till \"regnet\" och använda \"både ... och\" skapar variation och bättre flyt.",
    },
  ],

  hogstadiet: [
    {
      id: "hog-1",
      original: "Forskarna undersökte problemet. Forskarna hittade nya bevis. Forskarna publicerade sina resultat.",
      options: [
        "Forskarna undersökte problemet. Forskarna hittade nya bevis. Forskarna publicerade sina resultat.",
        "Forskarna undersökte problemet, hittade nya bevis och publicerade sina resultat.",
        "Efter att ha undersökt problemet och hittat nya bevis publicerade forskarna sina resultat.",
      ],
      correct: 2,
      explanation: "Genom att använda en temporal bisats (\"efter att ha\") skapas en tydlig tidsföljd och en mer komplex meningsstruktur.",
    },
    {
      id: "hog-2",
      original: "Klimatförändringarna är allvarliga. Klimatförändringarna påverkar hela planeten. Klimatförändringarna kräver snabba åtgärder.",
      options: [
        "Klimatförändringarna är allvarliga och påverkar hela planeten och kräver snabba åtgärder.",
        "Klimatförändringarna, som påverkar hela planeten, är allvarliga och kräver snabba åtgärder.",
        "Klimatförändringarna är allvarliga. Klimatförändringarna påverkar hela planeten. Klimatförändringarna kräver snabba åtgärder.",
      ],
      correct: 1,
      explanation: "En relativsats (\"som påverkar hela planeten\") bryter monotonin och binder samman informationen elegant.",
    },
    {
      id: "hog-3",
      original: "Eleverna läste texten. Eleverna diskuterade texten. Eleverna skrev en analys av texten.",
      options: [
        "Först läste eleverna texten. Sedan diskuterade de den i grupper innan de avslutade med att skriva en analys.",
        "Eleverna läste texten. Eleverna diskuterade texten. Eleverna skrev en analys av texten.",
        "Eleverna läste och diskuterade och skrev en analys av texten.",
      ],
      correct: 0,
      explanation: "Tidsmarkörer (\"först\", \"sedan\", \"innan\") och pronomenvariation (\"de\", \"den\") skapar naturligt flyt.",
    },
    {
      id: "hog-4",
      original: "Ungdomar använder sociala medier. Ungdomar påverkas av sociala medier. Ungdomar bör vara källkritiska.",
      options: [
        "Ungdomar använder sociala medier. Ungdomar påverkas av sociala medier. Ungdomar bör vara källkritiska.",
        "Ungdomar som använder sociala medier påverkas dagligen, vilket gör det viktigt att vara källkritisk.",
        "Ungdomar använder och påverkas av sociala medier och bör vara källkritiska.",
      ],
      correct: 1,
      explanation: "Relativ- och satsförkortning (\"som använder\", \"vilket gör\") skapar en komplex mening med bättre flyt.",
    },
    {
      id: "hog-5",
      original: "Romanen utspelar sig under kriget. Romanen skildrar en familjs öde. Romanen väcker starka känslor.",
      options: [
        "Romanen, som utspelar sig under kriget, skildrar en familjs öde och väcker starka känslor hos läsaren.",
        "Romanen utspelar sig under kriget. Romanen skildrar en familjs öde. Romanen väcker starka känslor.",
        "Romanen utspelar sig under kriget och skildrar en familjs öde och väcker starka känslor.",
      ],
      correct: 0,
      explanation: "En inskjuten bisats och en samordnad predikatskärna gör meningen mer varierad utan att bli rörig.",
    },
  ],

  gymnasiet: [
    {
      id: "gym-1",
      original: "Studien visar att resultaten är tydliga. Studien bygger på omfattande data. Studien har fått stor uppmärksamhet.",
      options: [
        "Studien visar att resultaten är tydliga. Studien bygger på omfattande data. Studien har fått stor uppmärksamhet.",
        "Studien, som bygger på omfattande data, visar tydliga resultat och har därför fått stor uppmärksamhet.",
        "Studien visar tydliga resultat och bygger på data och har fått uppmärksamhet.",
      ],
      correct: 1,
      explanation: "Inskjuten relativsats och kausal koppling (\"därför\") binder samman informationen logiskt och varierat.",
    },
    {
      id: "gym-2",
      original: "Demokratin utmanas. Demokratin ifrågasätts av populistiska rörelser. Demokratin behöver försvaras.",
      options: [
        "Demokratin utmanas. Demokratin ifrågasätts av populistiska rörelser. Demokratin behöver försvaras.",
        "Demokratin utmanas av populistiska rörelser som ifrågasätter grundläggande värden, vilket understryker behovet av att försvara den.",
        "Demokratin utmanas och ifrågasätts och behöver försvaras.",
      ],
      correct: 1,
      explanation: "En kausal kedja med relativ- och konsekutivbisats skapar en nyanserad argumentation i en enda mening.",
    },
    {
      id: "gym-3",
      original: "Författaren använder metaforer. Författaren skapar en mörk stämning. Författaren vill väcka empati hos läsaren.",
      options: [
        "Författaren använder metaforer. Författaren skapar en mörk stämning. Författaren vill väcka empati hos läsaren.",
        "Genom att använda metaforer skapar författaren en mörk stämning som syftar till att väcka empati hos läsaren.",
        "Författaren använder metaforer och skapar mörk stämning och vill väcka empati.",
      ],
      correct: 1,
      explanation: "\"Genom att\" inleder med en satsförkortning som ger meningsvariation och visar orsak-verkan-samband.",
    },
    {
      id: "gym-4",
      original: "Argumentationen är svag. Argumentationen saknar stöd i forskning. Argumentationen övertygar inte läsaren.",
      options: [
        "Argumentationen är svag. Argumentationen saknar stöd i forskning. Argumentationen övertygar inte läsaren.",
        "Argumentationen, som saknar stöd i forskning, är svag och övertygar knappast läsaren.",
        "Argumentationen är svag och saknar stöd och övertygar inte.",
      ],
      correct: 1,
      explanation: "Relativsatsen specificerar svagheten, och \"knappast\" nyanserar påståendet på ett stilistiskt genomtänkt sätt.",
    },
    {
      id: "gym-5",
      original: "Globaliseringen har fördelar. Globaliseringen har nackdelar. Globaliseringen påverkar alla länder.",
      options: [
        "Trots sina fördelar medför globaliseringen även nackdelar, och dess påverkan sträcker sig till samtliga länder.",
        "Globaliseringen har fördelar. Globaliseringen har nackdelar. Globaliseringen påverkar alla länder.",
        "Globaliseringen har fördelar och nackdelar och påverkar alla länder.",
      ],
      correct: 0,
      explanation: "\"Trots sina\" som inledning och \"vars\" som sammanlänkare visar avancerad meningsvariation med koncessiv struktur.",
    },
    {
      id: "gym-6",
      original: "Texten analyserar maktstrukturer. Texten utgår från ett postkolonialt perspektiv. Texten bidrar med nya insikter.",
      options: [
        "Texten analyserar maktstrukturer. Texten utgår från ett postkolonialt perspektiv. Texten bidrar med nya insikter.",
        "Texten analyserar maktstrukturer och utgår från postkolonialt perspektiv och bidrar med insikter.",
        "Utifrån ett postkolonialt perspektiv analyserar texten maktstrukturer och bidrar därigenom med nya insikter.",
      ],
      correct: 2,
      explanation: "Att börja med perspektivet som prepositionsuttryck och använda \"därigenom\" skapar en logisk och varierad mening.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Fallback helper                                                            */
/* -------------------------------------------------------------------------- */

const FALLBACK_ORDER: AgeGroup[] = ["gymnasiet", "hogstadiet", "mellanstadiet", "lagstadiet"];

function getExercises(ageGroup: AgeGroup): VariationExercise[] {
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

export function MeningsvariationClient({ ageGroup }: { ageGroup: AgeGroup }) {
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
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Välj den mest varierade versionen
        </p>

        {/* Original text */}
        <div className="mb-4 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Originaltext
          </p>
          <p className="text-base italic text-neutral-700 dark:text-neutral-300">
            {exercise.original}
          </p>
        </div>

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
              Du har klarat alla övningar. Bra jobbat med meningsvariationen!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
