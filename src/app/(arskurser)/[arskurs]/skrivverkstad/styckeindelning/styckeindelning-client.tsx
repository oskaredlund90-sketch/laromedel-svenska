"use client";

import { useState, useMemo } from "react";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface StyckeText {
  id: string;
  sentences: string[];
  /** Indices where a paragraph break should go (between sentence i and i+1) */
  correctBreaks: number[];
}

/* -------------------------------------------------------------------------- */
/*  Exercise data per age group                                                */
/* -------------------------------------------------------------------------- */

const EXERCISES: Record<AgeGroup, StyckeText[]> = {
  lagstadiet: [
    {
      id: "lag-1",
      sentences: [
        "Solen sken på himlen.",
        "Det var en varm dag.",
        "Anna gick ut i trädgården.",
        "Hon såg en fjäril.",
        "Fjärilen var blå och fin.",
        "Den flög iväg över staketet.",
      ],
      correctBreaks: [1, 3],
    },
    {
      id: "lag-2",
      sentences: [
        "Katten heter Misse.",
        "Han är svart och vit.",
        "Misse gillar att jaga möss.",
        "En dag hittade han en mus i köket.",
        "Musen sprang under skåpet.",
        "Misse väntade länge.",
      ],
      correctBreaks: [1, 3],
    },
    {
      id: "lag-3",
      sentences: [
        "Vi åkte till stranden.",
        "Vattnet var kallt.",
        "Men vi badade ändå.",
        "Sedan åt vi glass.",
        "Jag valde jordgubb.",
        "Det var den bästa dagen.",
      ],
      correctBreaks: [2, 4],
    },
  ],

  mellanstadiet: [
    {
      id: "mel-1",
      sentences: [
        "Sverige är ett land i Norden.",
        "Det har ungefär tio miljoner invånare.",
        "Huvudstaden heter Stockholm.",
        "Landet har fyra tydliga årstider.",
        "Vintrarna kan vara mycket kalla.",
        "Somrarna är ofta varma och ljusa.",
        "Många turister besöker Sverige på sommaren.",
        "De vill uppleva midnattssolen.",
      ],
      correctBreaks: [2, 5],
    },
    {
      id: "mel-2",
      sentences: [
        "Fotboll är en populär sport.",
        "Den spelas i hela världen.",
        "I Sverige finns många fotbollsklubbar.",
        "Barnen tränar ofta efter skolan.",
        "De lär sig samarbete och teknik.",
        "En match pågår i 90 minuter.",
        "Laget som gör flest mål vinner.",
      ],
      correctBreaks: [1, 4],
    },
    {
      id: "mel-3",
      sentences: [
        "Rymden är oändligt stor.",
        "Det finns miljarder stjärnor.",
        "Vår sol är bara en av dem.",
        "Jorden kretsar runt solen.",
        "Det tar ett år för ett varv.",
        "Månen kretsar runt jorden.",
        "Den lyser upp natthimlen.",
        "Ibland kan vi se en månförmörkelse.",
      ],
      correctBreaks: [2, 4],
    },
  ],

  hogstadiet: [
    {
      id: "hog-1",
      sentences: [
        "Sociala medier har förändrat hur vi kommunicerar.",
        "Plattformar som Instagram och TikTok används dagligen av miljoner.",
        "Unga spenderar i genomsnitt flera timmar per dag på sina telefoner.",
        "Det finns både fördelar och nackdelar med denna utveckling.",
        "En fördel är att man kan hålla kontakten med vänner.",
        "Man kan också lära sig nya saker genom videor och artiklar.",
        "Samtidigt finns risker som nätmobbning och beroendeproblematik.",
        "Forskare varnar för att skärmtiden påverkar sömnen negativt.",
        "Det är viktigt att hitta en balans i sin användning.",
      ],
      correctBreaks: [2, 5],
    },
    {
      id: "hog-2",
      sentences: [
        "Under medeltiden var Sverige ett fattigt land.",
        "De flesta människor levde som bönder på landsbygden.",
        "Kyrkans makt var mycket stor.",
        "Under 1500-talet började stora förändringar ske.",
        "Gustav Vasa blev kung och bröt med påven.",
        "Sverige blev en protestantisk nation.",
        "Reformationen förändrade inte bara religionen utan också samhället.",
        "Kungens makt ökade på kyrkans bekostnad.",
      ],
      correctBreaks: [2, 5],
    },
  ],

  gymnasiet: [
    {
      id: "gym-1",
      sentences: [
        "Den globala uppvärmningen är en av vår tids största utmaningar.",
        "Sedan industrialiseringen har medeltemperaturen stigit med över en grad.",
        "Konsekvenserna syns redan i form av smältande isar och extremväder.",
        "Parisavtalet från 2015 satte målet att begränsa uppvärmningen till 1,5 grader.",
        "Trots detta har utsläppen fortsatt att öka.",
        "Många länder har inte uppfyllt sina löften.",
        "Kritiker menar att ekonomiska intressen prioriteras framför miljön.",
        "Samtidigt växer den gröna teknologisektorn snabbt.",
        "Solenergi och vindkraft blir allt billigare.",
        "Frågan är om omställningen går tillräckligt fort.",
      ],
      correctBreaks: [2, 5, 8],
    },
    {
      id: "gym-2",
      sentences: [
        "Artificiell intelligens utvecklas i snabb takt.",
        "Program som ChatGPT kan generera text som liknar mänskligt skrivande.",
        "Detta väcker frågor om originalitet och upphovsrätt.",
        "Inom utbildningen diskuteras AI:s roll intensivt.",
        "Vissa menar att AI kan vara ett värdefullt hjälpmedel.",
        "Andra oroar sig för att eleverna slutar tänka själva.",
        "I arbetslivet automatiseras allt fler uppgifter.",
        "Både enklare och mer kvalificerade jobb påverkas.",
        "Samhället behöver förbereda sig för dessa förändringar.",
        "Utbildningssystemet måste anpassas efter den nya verkligheten.",
      ],
      correctBreaks: [2, 5, 8],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Fallback helper                                                            */
/* -------------------------------------------------------------------------- */

const FALLBACK_ORDER: AgeGroup[] = ["gymnasiet", "hogstadiet", "mellanstadiet", "lagstadiet"];

function getExercises(ageGroup: AgeGroup): StyckeText[] {
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

export function StyckeindelningClient({ ageGroup }: { ageGroup: AgeGroup }) {
  const exercises = useMemo(() => getExercises(ageGroup), [ageGroup]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBreaks, setSelectedBreaks] = useState<Record<string, Set<number>>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [completed, setCompleted] = useState(0);

  const exercise = exercises[currentIndex];
  const breaks = selectedBreaks[exercise.id] ?? new Set<number>();
  const isChecked = checked[exercise.id] ?? false;

  const toggleBreak = (index: number) => {
    if (isChecked) return;
    setSelectedBreaks((prev) => {
      const current = new Set(prev[exercise.id] ?? []);
      if (current.has(index)) {
        current.delete(index);
      } else {
        current.add(index);
      }
      return { ...prev, [exercise.id]: current };
    });
  };

  const getBreakStatus = (index: number): "correct" | "wrong" | "missed" | null => {
    if (!isChecked) return null;
    const isSelected = breaks.has(index);
    const isCorrect = exercise.correctBreaks.includes(index);
    if (isSelected && isCorrect) return "correct";
    if (isSelected && !isCorrect) return "wrong";
    if (!isSelected && isCorrect) return "missed";
    return null;
  };

  const allCorrect = useMemo(() => {
    if (!isChecked) return false;
    const correct = exercise.correctBreaks;
    if (breaks.size !== correct.length) return false;
    return correct.every((b) => breaks.has(b));
  }, [isChecked, exercise, breaks]);

  const handleCheck = () => {
    setChecked((prev) => ({ ...prev, [exercise.id]: true }));
    const correct = exercise.correctBreaks;
    const perfect = breaks.size === correct.length && correct.every((b) => breaks.has(b));
    if (perfect) setCompleted((c) => c + 1);
  };

  const handleReset = () => {
    setSelectedBreaks((prev) => {
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

  const score = useMemo(() => {
    if (!isChecked) return null;
    const correct = exercise.correctBreaks;
    const hits = correct.filter((b) => breaks.has(b)).length;
    const falsePositives = [...breaks].filter((b) => !correct.includes(b)).length;
    return { hits, total: correct.length, falsePositives };
  }, [isChecked, exercise, breaks]);

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
          Klicka där det ska vara styckebrytning
        </p>

        <div className="mb-6 space-y-0">
          {exercise.sentences.map((sentence, i) => {
            const breakStatus = i < exercise.sentences.length - 1 ? getBreakStatus(i) : null;
            const isSelected = breaks.has(i);

            return (
              <div key={i}>
                <p className="text-base leading-relaxed text-neutral-900 dark:text-neutral-100">
                  {sentence}
                </p>

                {i < exercise.sentences.length - 1 && (
                  <button
                    type="button"
                    onClick={() => toggleBreak(i)}
                    disabled={isChecked}
                    className={`my-1 flex w-full items-center justify-center rounded transition-all ${
                      isChecked
                        ? breakStatus === "correct"
                          ? "h-8 border-2 border-green-400 bg-green-50 dark:border-green-600 dark:bg-green-900/30"
                          : breakStatus === "wrong"
                            ? "h-8 border-2 border-red-400 bg-red-50 dark:border-red-600 dark:bg-red-900/30"
                            : breakStatus === "missed"
                              ? "h-8 border-2 border-amber-400 bg-amber-50 dark:border-amber-600 dark:bg-amber-900/30"
                              : "h-1 bg-transparent"
                        : isSelected
                          ? "h-8 border-2 border-neutral-400 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-800"
                          : "h-1 border border-dashed border-neutral-300 hover:h-6 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {isChecked && breakStatus === "correct" && (
                      <span className="flex items-center gap-1 text-xs font-medium text-green-700 dark:text-green-300">
                        <CheckCircle className="h-3.5 w-3.5" /> Rätt styckebrytning
                      </span>
                    )}
                    {isChecked && breakStatus === "wrong" && (
                      <span className="flex items-center gap-1 text-xs font-medium text-red-700 dark:text-red-300">
                        <XCircle className="h-3.5 w-3.5" /> Ingen brytning här
                      </span>
                    )}
                    {isChecked && breakStatus === "missed" && (
                      <span className="flex items-center gap-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                        <XCircle className="h-3.5 w-3.5" /> Här ska det vara en brytning
                      </span>
                    )}
                    {!isChecked && isSelected && (
                      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        Styckebrytning (klicka för att ta bort)
                      </span>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Feedback */}
        {isChecked && score && (
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
                Rätt! Du hittade alla styckebrytningar.
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5" />
                {score.hits} av {score.total} rätt placerade.
                {score.falsePositives > 0 &&
                  ` ${score.falsePositives} felaktiga brytningar.`}
                {" "}Grönt = rätt, rött = fel, gult = saknad brytning.
              </>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {!isChecked && (
            <Button
              onClick={handleCheck}
              disabled={breaks.size === 0}
              className="gap-1"
            >
              <CheckCircle className="h-4 w-4" />
              Rätta
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
              Du har klarat alla texter. Bra jobbat med styckeindelningen!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
