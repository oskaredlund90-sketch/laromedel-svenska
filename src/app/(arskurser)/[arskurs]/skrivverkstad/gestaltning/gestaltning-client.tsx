"use client";

import { useState, useMemo } from "react";
import { ArrowRight, ArrowLeft, Eye, EyeOff, Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

interface GapData {
  /** What kind of word/phrase to add */
  label: string;
  /** A suggested/example answer to compare with */
  suggestion: string;
}

interface GestaltningExercise {
  id: string;
  /** Title/theme for this text */
  title: string;
  /** The text template with {0}, {1}, etc. as placeholders */
  template: string;
  /** Info about each gap */
  gaps: GapData[];
  /** The full "author version" with descriptions filled in */
  fullText: string;
}

/* -------------------------------------------------------------------------- */
/*  Exercise data                                                              */
/* -------------------------------------------------------------------------- */

const EXERCISES: Record<AgeGroup, GestaltningExercise[]> = {
  lagstadiet: [
    {
      id: "lag-g1",
      title: "P\u00e5 v\u00e4g till skolan",
      template: "Det var en {0} morgon. Solen lyste p\u00e5 den {1} himlen. Ella gick p\u00e5 den {2} v\u00e4gen. Hon k\u00e4nde sig {3}.",
      gaps: [
        { label: "Hur var morgonen?", suggestion: "kall och dimming" },
        { label: "Beskriv himlen", suggestion: "klarbl\u00e5" },
        { label: "Hur var v\u00e4gen?", suggestion: "leriga, gruset knastrade" },
        { label: "Hur k\u00e4nde sig Ella?", suggestion: "glad och pigg" },
      ],
      fullText: "Det var en kall och dimmig morgon. Solen lyste p\u00e5 den klarbl\u00e5 himlen. Ella gick p\u00e5 den leriga v\u00e4gen d\u00e4r gruset knastrade. Hon k\u00e4nde sig glad och pigg.",
    },
    {
      id: "lag-g2",
      title: "Katten p\u00e5 taket",
      template: "En {0} katt satt p\u00e5 det {1} taket. Den tittade ner med sina {2} \u00f6gon. Nedanf\u00f6r stod en {3} hund och sk\u00e4llde.",
      gaps: [
        { label: "Beskriv katten", suggestion: "randig, lurvig" },
        { label: "Beskriv taket", suggestion: "r\u00f6da, snedvridna" },
        { label: "Beskriv \u00f6gonen", suggestion: "gula, glittrande" },
        { label: "Beskriv hunden", suggestion: "liten, vit" },
      ],
      fullText: "En randig, lurvig katt satt p\u00e5 det r\u00f6da, snedvridna taket. Den tittade ner med sina gula, glittrande \u00f6gon. Nedanf\u00f6r stod en liten, vit hund och sk\u00e4llde.",
    },
    {
      id: "lag-g3",
      title: "I parken",
      template: "Barnen lekte i den {0} parken. Blommorna var {1}. F\u00e5glarna sjöng {2} visor. Det luktade {3}.",
      gaps: [
        { label: "Beskriv parken", suggestion: "stora, gr\u00f6na" },
        { label: "Hur s\u00e5g blommorna ut?", suggestion: "r\u00f6da och gula" },
        { label: "Hur l\u00e5t visorna?", suggestion: "glada, melodiska" },
        { label: "Vad luktade det?", suggestion: "sommar och nyslaget gr\u00e4s" },
      ],
      fullText: "Barnen lekte i den stora, gr\u00f6na parken. Blommorna var r\u00f6da och gula. F\u00e5glarna sjöng glada, melodiska visor. Det luktade sommar och nyslaget gr\u00e4s.",
    },
  ],

  mellanstadiet: [
    {
      id: "mel-g1",
      title: "Stormen",
      template: "Vinden bl\u00e5ste {0} genom tr\u00e4den. Regnet piskade {1} mot fönstren. Himlen var {2}. Inne i stugan brann elden {3} i den {4} braskaminen.",
      gaps: [
        { label: "Hur bl\u00e5ste vinden?", suggestion: "vilt och yl\u00e4nde" },
        { label: "Hur piskade regnet?", suggestion: "h\u00e5rt, som sm\u00e5 stenar" },
        { label: "Beskriv himlen", suggestion: "svartgr\u00e5 och hotfull" },
        { label: "Hur brann elden?", suggestion: "varmt och sprakande" },
        { label: "Beskriv braskaminen", suggestion: "gamla, r\u00f6stiga" },
      ],
      fullText: "Vinden bl\u00e5ste vilt och yl\u00e4nde genom tr\u00e4den. Regnet piskade h\u00e5rt, som sm\u00e5 stenar, mot fönstren. Himlen var svartgr\u00e5 och hotfull. Inne i stugan brann elden varmt och sprakande i den gamla, r\u00f6stiga braskaminen.",
    },
    {
      id: "mel-g2",
      title: "P\u00e5 marknaden",
      template: "Marknaden var {0}. \u00d6verallt hördes {1} röster. St\u00e5nden var fyllda med {2} varor. Doften av {3} blandades med lukten av {4}.",
      gaps: [
        { label: "Beskriv marknaden", suggestion: "fullpackad och f\u00e4rgsprakande" },
        { label: "Beskriv rösterna", suggestion: "h\u00f6ga, iv\u00e4riga" },
        { label: "Beskriv varorna", suggestion: "glittrande smycken och mjuka tyger" },
        { label: "Vad luktade det gott?", suggestion: "nybakat bröd" },
        { label: "Vad var den andra lukten?", suggestion: "kryddor fr\u00e5n fj\u00e4rran l\u00e4nder" },
      ],
      fullText: "Marknaden var fullpackad och f\u00e4rgsprakande. \u00d6verallt hördes höga, ivriga röster. St\u00e5nden var fyllda med glittrande smycken och mjuka tyger. Doften av nybakat bröd blandades med lukten av kryddor fr\u00e5n fj\u00e4rran l\u00e4nder.",
    },
    {
      id: "mel-g3",
      title: "Morgonen vid sj\u00f6n",
      template: "Dimman l\u00e5g {0} \u00f6ver sj\u00f6n. Vattnet var {1}. En {2} \u00e4nka gled {3} \u00f6ver ytan. Solen steg {4} bakom skogen.",
      gaps: [
        { label: "Hur l\u00e5g dimman?", suggestion: "t\u00e4t som ett vitt t\u00e4cke" },
        { label: "Beskriv vattnet", suggestion: "spegelblank och m\u00f6rkt" },
        { label: "Beskriv \u00e4nkan", suggestion: "ensam, gr\u00e5brun" },
        { label: "Hur gled den?", suggestion: "tyst och majest\u00e4tiskt" },
        { label: "Hur steg solen?", suggestion: "l\u00e5ngsamt, som en gl\u00f6dande skiva" },
      ],
      fullText: "Dimman l\u00e5g t\u00e4t som ett vitt t\u00e4cke \u00f6ver sj\u00f6n. Vattnet var spegelblank och m\u00f6rkt. En ensam, gr\u00e5brun \u00e4nka gled tyst och majest\u00e4tiskt \u00f6ver ytan. Solen steg l\u00e5ngsamt, som en gl\u00f6dande skiva, bakom skogen.",
    },
  ],

  hogstadiet: [
    {
      id: "hog-g1",
      title: "Den \u00f6vergivna fabriken",
      template: "Fabriken stod {0} vid v\u00e4gens \u00e4nde. Fönstren var {1}. Inne i den {2} hallen ekade varje steg {3}. Golvet var t\u00e4ckt av {4} och fr\u00e5n taket h\u00e4ngde {5}.",
      gaps: [
        { label: "Beskriv fabrikens utseende", suggestion: "\u00f6dslig och förfallen" },
        { label: "Beskriv fönstren", suggestion: "krossade, med skarpa glasrester som glittrade" },
        { label: "Beskriv hallen", suggestion: "v\u00e4ldiga, kalla" },
        { label: "Hur ekade stegen?", suggestion: "ihåligt, som ett dov t hjärtslag" },
        { label: "Vad l\u00e5g p\u00e5 golvet?", suggestion: "damm, rostiga metallbitar och torra l\u00f6v" },
        { label: "Vad h\u00e4ngde fr\u00e5n taket?", suggestion: "t\u00e4ta spindelv\u00e4v som vajande gardiner" },
      ],
      fullText: "Fabriken stod \u00f6dslig och f\u00f6rfallen vid v\u00e4gens \u00e4nde. F\u00f6nstren var krossade, med skarpa glasrester som glittrade. Inne i den v\u00e4ldiga, kalla hallen ekade varje steg ih\u00e5ligt, som ett dovt hj\u00e4rtslag. Golvet var t\u00e4ckt av damm, rostiga metallbitar och torra l\u00f6v, och fr\u00e5n taket h\u00e4ngde t\u00e4ta spindelv\u00e4v som vajande gardiner.",
    },
    {
      id: "hog-g2",
      title: "M\u00f6tet",
      template: "Han stod {0} i d\u00f6rr\u00f6ppningen. Hans ansikte var {1}. N\u00e4r han talade var r\u00f6sten {2}. Orden f\u00f6ll {3} i det {4} rummet.",
      gaps: [
        { label: "Hur stod personen?", suggestion: "or\u00f6rlig, med h\u00e4nderna knutna" },
        { label: "Beskriv ansiktet", suggestion: "blekt, med sammanpressade l\u00e4ppar" },
        { label: "Beskriv r\u00f6sten", suggestion: "l\u00e5g och darrig, knappt h\u00f6rbar" },
        { label: "Hur f\u00f6ll orden?", suggestion: "tungt, som stenar i vatten" },
        { label: "Beskriv rummet", suggestion: "tyst, sp\u00e4nningsfyllda" },
      ],
      fullText: "Han stod or\u00f6rlig, med h\u00e4nderna knutna, i d\u00f6rr\u00f6ppningen. Hans ansikte var blekt, med sammanpressade l\u00e4ppar. N\u00e4r han talade var r\u00f6sten l\u00e5g och darrig, knappt h\u00f6rbar. Orden f\u00f6ll tungt, som stenar i vatten, i det tysta, sp\u00e4nningsfyllda rummet.",
    },
    {
      id: "hog-g3",
      title: "Stadspromenaden",
      template: "Gatorna var {0}. Neonljusen reflekterades {1} i de {2} asfalten. Fr\u00e5n restaurangerna strömmade {3} dofter. Människorna rörde sig {4}, var och en innesluten i sin {5} v\u00e4rld.",
      gaps: [
        { label: "Beskriv gatorna", suggestion: "pulserande av liv, trots den sena timmen" },
        { label: "Hur reflekterades ljusen?", suggestion: "i brokiga m\u00f6nster" },
        { label: "Beskriv asfalten", suggestion: "regnv\u00e5ta, blankpolerade" },
        { label: "Beskriv dofterna", suggestion: "v\u00e4rma dofter av vitl\u00f6k och rosmarin" },
        { label: "Hur rörde sig m\u00e4nniskorna?", suggestion: "snabbt och m\u00e5linriktat" },
        { label: "Beskriv v\u00e4rlden", suggestion: "egen, slutna" },
      ],
      fullText: "Gatorna var pulserande av liv, trots den sena timmen. Neonljusen reflekterades i brokiga m\u00f6nster i den regnv\u00e5ta, blankpolerade asfalten. Fr\u00e5n restaurangerna strömmade varma dofter av vitl\u00f6k och rosmarin. M\u00e4nniskorna rörde sig snabbt och m\u00e5linriktat, var och en innesluten i sin egen, slutna v\u00e4rld.",
    },
  ],

  gymnasiet: [
    {
      id: "gym-g1",
      title: "F\u00f6rel\u00e4sningssalen",
      template: "F\u00f6rel\u00e4sningssalen fylldes {0} av studenter. Professorns röst var {1} n\u00e4r hon beskrev {2} konsekvenser. Ljuset fr\u00e5n projektorn kastade {3} skuggor. Utanf\u00f6r f\u00f6nstret l\u00e5g campus {4}, som om det {5}.",
      gaps: [
        { label: "Hur fylldes salen?", suggestion: "l\u00e5ngsamt, som en stigande flod" },
        { label: "Beskriv r\u00f6sten", suggestion: "allvarlig, med en underton av uppgivenhet" },
        { label: "Beskriv konsekvenserna", suggestion: "de \u00f6desdigra, n\u00e4rmast oåterkalleliga" },
        { label: "Beskriv skuggorna", suggestion: "flackande, oregelbundna" },
        { label: "Beskriv campus", suggestion: "h\u00f6stligt \u00f6de" },
        { label: "Avsluta liknelsen", suggestion: "hade gl\u00f6mt att det var vardag" },
      ],
      fullText: "F\u00f6rel\u00e4sningssalen fylldes l\u00e5ngsamt, som en stigande flod, av studenter. Professorns r\u00f6st var allvarlig, med en underton av uppgivenhet, n\u00e4r hon beskrev de \u00f6desdigra, n\u00e4rmast o\u00e5terkalleliga konsekvenserna. Ljuset fr\u00e5n projektorn kastade flackande, oregelbundna skuggor. Utanf\u00f6r f\u00f6nstret l\u00e5g campus h\u00f6stligt \u00f6de, som om det hade gl\u00f6mt att det var vardag.",
    },
    {
      id: "gym-g2",
      title: "Återkomsten",
      template: "Huset l\u00e5g d\u00e4r, {0}, precis som hon mindes det. Tr\u00e4dg\u00e5rden hade blivit {1}. D\u00f6rren \u00f6ppnades med ett {2} ljud. Innanf\u00f6r v\u00e4ntade {3} — en p\u00e5minnelse om att tiden \u00e4r {4}.",
      gaps: [
        { label: "Beskriv huset", suggestion: "or\u00f6rt av \u00e5ren, med flagnad f\u00e4rg och sneda f\u00f6nsterluckor" },
        { label: "Beskriv tr\u00e4dg\u00e5rden", suggestion: "f\u00f6rvildad, en djungel av ogr\u00e4s och vilda rosor" },
        { label: "Beskriv ljudet", suggestion: "l\u00e5ngsamt, gnisslande" },
        { label: "Vad v\u00e4ntade innanf\u00f6r?", suggestion: "en f\u00e4rgf\u00f6r\u00e4ndrad tapet och lukten av inst\u00e4ngdhet" },
        { label: "Hur \u00e4r tiden?", suggestion: "ob\u00f6nh\u00f6rlig och aldrig st\u00e5r still" },
      ],
      fullText: "Huset l\u00e5g d\u00e4r, or\u00f6rt av \u00e5ren, med flagnad f\u00e4rg och sneda f\u00f6nsterluckor, precis som hon mindes det. Tr\u00e4dg\u00e5rden hade blivit f\u00f6rvildad, en djungel av ogr\u00e4s och vilda rosor. D\u00f6rren \u00f6ppnades med ett l\u00e5ngsamt, gnisslande ljud. Innanf\u00f6r v\u00e4ntade en f\u00e4rgf\u00f6r\u00e4ndrad tapet och lukten av inst\u00e4ngdhet — en p\u00e5minnelse om att tiden \u00e4r ob\u00f6nh\u00f6rlig och aldrig st\u00e5r still.",
    },
    {
      id: "gym-g3",
      title: "Essäinledningen",
      template: "Det moderna samhällets relation till naturen är {0}. Vi lever i en tid d\u00e4r {1}, samtidigt som {2}. Denna paradox framst\u00e5r som {3} n\u00e4r man betraktar {4}.",
      gaps: [
        { label: "Beskriv relationen med en metafor", suggestion: "en f\u00f6rsummad tr\u00e4dg\u00e5rd — vi vet att den kr\u00e4ver sk\u00f6tsel men v\u00e4nder bort blicken" },
        { label: "Beskriv v\u00e5r tid", suggestion: "teknologin ger oss o\u00e4ndliga m\u00f6jligheter" },
        { label: "Beskriv kontrasten", suggestion: "jordens resurser kr\u00e4mper under v\u00e5r konsumtion" },
        { label: "Beskriv paradoxen", suggestion: "s\u00e4rskilt sl\u00e5ende och om\u00f6jlig att ignorera" },
        { label: "Vad betraktas?", suggestion: "statistiken \u00f6ver global uppv\u00e4rmning och samtidig ekonomisk tillv\u00e4xt" },
      ],
      fullText: "Det moderna samh\u00e4llets relation till naturen \u00e4r en f\u00f6rsummad tr\u00e4dg\u00e5rd — vi vet att den kr\u00e4ver sk\u00f6tsel men v\u00e4nder bort blicken. Vi lever i en tid d\u00e4r teknologin ger oss o\u00e4ndliga m\u00f6jligheter, samtidigt som jordens resurser kr\u00e4mper under v\u00e5r konsumtion. Denna paradox framst\u00e5r som s\u00e4rskilt sl\u00e5ende och om\u00f6jlig att ignorera n\u00e4r man betraktar statistiken \u00f6ver global uppv\u00e4rmning och samtidig ekonomisk tillv\u00e4xt.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function GestaltningClient({ ageGroup }: { ageGroup: AgeGroup }) {
  const exercises = EXERCISES[ageGroup];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputs, setInputs] = useState<Record<string, string[]>>({});
  const [showSuggestion, setShowSuggestion] = useState<Record<string, boolean>>({});

  const exercise = exercises[currentIndex];
  const currentInputs = inputs[exercise.id] ?? exercise.gaps.map(() => "");
  const isSuggestionVisible = showSuggestion[exercise.id] ?? false;

  const filledCount = currentInputs.filter((v) => v.trim().length > 0).length;
  const allFilled = filledCount === exercise.gaps.length;

  const setInput = (gapIdx: number, value: string) => {
    setInputs((prev) => {
      const current = prev[exercise.id] ?? exercise.gaps.map(() => "");
      const updated = [...current];
      updated[gapIdx] = value;
      return { ...prev, [exercise.id]: updated };
    });
  };

  const toggleSuggestion = () => {
    setShowSuggestion((prev) => ({
      ...prev,
      [exercise.id]: !prev[exercise.id],
    }));
  };

  const handleReset = () => {
    setInputs((prev) => {
      const copy = { ...prev };
      delete copy[exercise.id];
      return copy;
    });
    setShowSuggestion((prev) => {
      const copy = { ...prev };
      delete copy[exercise.id];
      return copy;
    });
  };

  // Build the rendered text with inputs
  const renderedText = useMemo(() => {
    const parts: React.ReactNode[] = [];
    const regex = /\{(\d+)\}/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(exercise.template)) !== null) {
      // Text before placeholder
      if (match.index > lastIndex) {
        parts.push(
          <span key={`t-${lastIndex}`}>
            {exercise.template.slice(lastIndex, match.index)}
          </span>
        );
      }

      const gapIdx = parseInt(match[1], 10);
      const value = currentInputs[gapIdx] ?? "";
      const gap = exercise.gaps[gapIdx];

      parts.push(
        <span key={`g-${gapIdx}`} className="inline-block">
          {value.trim() ? (
            <span className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-900 dark:bg-amber-900/30 dark:text-amber-200">
              {value}
            </span>
          ) : (
            <span className="inline-block rounded border-2 border-dashed border-neutral-400 bg-neutral-50 px-2 py-0.5 text-sm text-neutral-500 dark:border-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              [{gap.label}]
            </span>
          )}
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < exercise.template.length) {
      parts.push(
        <span key="end">{exercise.template.slice(lastIndex)}</span>
      );
    }

    return parts;
  }, [exercise, currentInputs]);

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          Text {currentIndex + 1} av {exercises.length}
        </span>
        <span>{filledCount} av {exercise.gaps.length} ifyllda</span>
      </div>

      {/* Exercise card */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
          {exercise.title}
        </h2>

        {/* Preview text */}
        <div className="mb-6 rounded-lg bg-neutral-50 p-4 text-base leading-relaxed text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
          {renderedText}
        </div>

        {/* Input fields */}
        <div className="mb-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Fyll i beskrivningar
          </p>
          {exercise.gaps.map((gap, idx) => (
            <div key={idx}>
              <label className="mb-1 block text-sm text-neutral-600 dark:text-neutral-400">
                {idx + 1}. {gap.label}
              </label>
              <input
                type="text"
                value={currentInputs[idx] ?? ""}
                onChange={(e) => setInput(idx, e.target.value)}
                placeholder={`T.ex. ${gap.suggestion}`}
                className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm transition-colors focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-neutral-500"
              />
              {isSuggestionVisible && (
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <Sparkles className="mr-1 inline h-3 w-3" />
                  F\u00f6rslag: <em>{gap.suggestion}</em>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={toggleSuggestion}
            className="gap-1"
          >
            {isSuggestionVisible ? (
              <>
                <EyeOff className="h-4 w-4" />
                D\u00f6lj f\u00f6rslag
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                Visa f\u00f6rslag
              </>
            )}
          </Button>

          <Button variant="outline" onClick={handleReset} className="gap-1">
            <RotateCcw className="h-4 w-4" />
            Rensa
          </Button>

          {currentIndex > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentIndex((i) => i - 1)}
              className="gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              F\u00f6reg\u00e5ende
            </Button>
          )}

          {currentIndex < exercises.length - 1 && (
            <Button
              onClick={() => setCurrentIndex((i) => i + 1)}
              className="gap-1"
            >
              N\u00e4sta text
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Show full "author version" when requested */}
      {isSuggestionVisible && allFilled && (
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Exempeltext (en m\u00f6jlig version)
          </p>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 italic">
            {exercise.fullText}
          </p>
          <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
            Kom ih\u00e5g: det finns inget &quot;r\u00e4tt svar&quot; h\u00e4r. Dina beskrivningar \u00e4r minst lika bra om de \u00e4r kreativa och passande!
          </p>
        </div>
      )}
    </div>
  );
}
