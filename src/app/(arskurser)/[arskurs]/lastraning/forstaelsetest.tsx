"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Lightbulb, RotateCcw, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AgeGroup } from "@/lib/supabase/types";
import { getReadingTexts, type QuestionLevel, type ReadingText } from "@/lib/data/lasforstaelse";
import { FORMAGOR, NIVA_ETIKETT, nivaFor, valjTesttexter, type Niva } from "@/lib/lastraning/formagor";

const NIVA_FARG: Record<Niva, { stapel: string; bricka: string }> = {
  trana: { stapel: "bg-amber-500", bricka: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" },
  pagang: { stapel: "bg-sky-500", bricka: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300" },
  saker: { stapel: "bg-emerald-500", bricka: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
};

type Svar = Record<string, number>;

export function Forstaelsetest({ stadie, tillPlan }: { stadie: AgeGroup; tillPlan: () => void }) {
  const [texter, setTexter] = useState<ReadingText[] | null>(null);
  const [steg, setSteg] = useState(0);
  const [svar, setSvar] = useState<Svar>({});
  const klar = texter !== null && steg >= texter.length;

  const starta = () => {
    setTexter(valjTesttexter(getReadingTexts(stadie)));
    setSteg(0);
    setSvar({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!texter) {
    return (
      <Card>
        <CardContent className="space-y-4 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Testa din läsförståelse</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Du får läsa två till fyra texter och svara på frågor. Frågorna tränar tre olika förmågor:
          </p>
          <ul className="space-y-2">
            {FORMAGOR.map((f) => (
              <li key={f.id} className="text-sm text-neutral-700 dark:text-neutral-300">
                <span className="font-semibold text-neutral-900 dark:text-white">{f.namn}</span> – {f.beskrivning.toLowerCase()}
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Du får gärna titta i texten när du svarar. När du är klar får du veta hur det gick för varje förmåga och hur du kan
            träna. Inget sparas.
          </p>
          <Button onClick={starta} size="lg">
            Börja <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (klar) return <Resultat texter={texter} svar={svar} stadie={stadie} nyttTest={starta} tillPlan={tillPlan} />;

  const text = texter[steg];
  const allaBesvarade = text.questions.every((q) => svar[q.id] !== undefined);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          Text {steg + 1} av {texter.length}
        </span>
        <div className="flex gap-1.5">
          {texter.map((t, i) => (
            <span key={t.id} className={cn("h-1.5 w-8 rounded-full", i <= steg ? "bg-neutral-900 dark:bg-white" : "bg-neutral-200 dark:bg-neutral-700")} />
          ))}
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6 sm:p-8">
          <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">{text.title}</h2>
          <p className="whitespace-pre-line font-serif text-[17px] leading-8 text-neutral-800 dark:text-neutral-200">{text.passage}</p>
        </CardContent>
      </Card>

      <ol className="space-y-5">
        {text.questions.map((q, qi) => (
          <li key={q.id}>
            <fieldset>
              <legend className="mb-2 font-medium text-neutral-900 dark:text-white">
                {qi + 1}. {q.prompt}
              </legend>
              <div className="grid gap-2">
                {q.options.map((o, oi) => (
                  <label
                    key={oi}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors",
                      svar[q.id] === oi
                        ? "border-neutral-900 bg-neutral-50 dark:border-white dark:bg-neutral-800"
                        : "border-neutral-200 hover:border-neutral-400 dark:border-neutral-800",
                    )}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      checked={svar[q.id] === oi}
                      onChange={() => setSvar((s) => ({ ...s, [q.id]: oi }))}
                      className="mt-0.5 accent-neutral-900"
                    />
                    <span className="text-neutral-800 dark:text-neutral-200">{o}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {allaBesvarade ? "Alla frågor är besvarade." : "Svara på alla frågor för att gå vidare."}
        </p>
        <Button
          disabled={!allaBesvarade}
          onClick={() => {
            setSteg((s) => s + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {steg + 1 < texter.length ? "Nästa text" : "Se resultat"} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function Resultat({
  texter,
  svar,
  stadie,
  nyttTest,
  tillPlan,
}: {
  texter: ReadingText[];
  svar: Svar;
  stadie: AgeGroup;
  nyttTest: () => void;
  tillPlan: () => void;
}) {
  const [visaSvar, setVisaSvar] = useState(false);

  const perFormaga = useMemo(() => {
    const r: Record<QuestionLevel, { ratt: number; totalt: number }> = {
      hitta: { ratt: 0, totalt: 0 },
      tolka: { ratt: 0, totalt: 0 },
      reflektera: { ratt: 0, totalt: 0 },
    };
    for (const q of texter.flatMap((t) => t.questions)) {
      r[q.level].totalt++;
      if (svar[q.id] === q.correct) r[q.level].ratt++;
    }
    return r;
  }, [texter, svar]);

  const totaltRatt = Object.values(perFormaga).reduce((s, x) => s + x.ratt, 0);
  const totalt = Object.values(perFormaga).reduce((s, x) => s + x.totalt, 0);
  const svagast = [...FORMAGOR].sort(
    (a, b) => perFormaga[a.id].ratt / perFormaga[a.id].totalt - perFormaga[b.id].ratt / perFormaga[b.id].totalt,
  )[0];
  const svagastNiva = nivaFor(perFormaga[svagast.id].ratt, perFormaga[svagast.id].totalt);

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 sm:p-8">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Ditt resultat</p>
          <p className="text-4xl font-bold text-neutral-900 dark:text-white">
            {totaltRatt} av {totalt} rätt
          </p>
          {svagastNiva === "saker" ? (
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Du är säker på alla tre förmågorna. Utmana dig med svårare texter – eller testa din läshastighet!
            </p>
          ) : (
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              <span className="font-semibold">Ditt nästa steg:</span> träna på <span className="font-semibold">{svagast.namn.toLowerCase()}</span>. Läs tipsen nedan.
            </p>
          )}
        </CardContent>
      </Card>

      {FORMAGOR.map((f) => {
        const { ratt, totalt } = perFormaga[f.id];
        const niva = nivaFor(ratt, totalt);
        return (
          <Card key={f.id} className={cn(f.id === svagast.id && niva !== "saker" && "border-neutral-900 dark:border-white")}>
            <CardContent className="space-y-4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{f.namn}</h3>
                <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", NIVA_FARG[niva].bricka)}>{NIVA_ETIKETT[niva]}</span>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <span>{f.beskrivning}</span>
                  <span className="font-semibold tabular-nums text-neutral-900 dark:text-white">
                    {ratt}/{totalt}
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <div className={cn("h-full rounded-full", NIVA_FARG[niva].stapel)} style={{ width: `${(ratt / totalt) * 100}%` }} />
                </div>
              </div>
              <p className="text-neutral-800 dark:text-neutral-200">{f.respons[niva]}</p>
              {niva !== "saker" && (
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/60">
                  <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
                    <Lightbulb className="h-4 w-4 text-amber-500" /> Så tränar du
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                    {f.tips.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      <Card>
        <CardContent className="space-y-3 p-6">
          <h3 className="font-semibold text-neutral-900 dark:text-white">Träna mer</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={`/${stadie}/lasforstaelse`} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
              Fler texter med frågor
            </Link>
            <Link href={`/${stadie}/lasstrategier`} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
              Lässtrategier
            </Link>
            <button onClick={tillPlan} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
              Läsplan i 6 veckor
            </button>
          </div>
        </CardContent>
      </Card>

      <div>
        <button
          onClick={() => setVisaSvar((v) => !v)}
          className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          aria-expanded={visaSvar}
        >
          <ChevronDown className={cn("h-4 w-4 transition-transform", visaSvar && "rotate-180")} /> Se dina svar och förklaringar
        </button>
        {visaSvar && (
          <div className="mt-4 space-y-6">
            {texter.map((t) => (
              <div key={t.id}>
                <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">{t.title}</h4>
                <ol className="space-y-3">
                  {t.questions.map((q) => {
                    const ratt = svar[q.id] === q.correct;
                    return (
                      <li key={q.id} className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
                        <p className="mb-1 flex items-start gap-2 font-medium text-neutral-900 dark:text-white">
                          {ratt ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />}
                          {q.prompt}
                        </p>
                        {!ratt && <p className="text-neutral-600 dark:text-neutral-400">Ditt svar: {q.options[svar[q.id]]}</p>}
                        <p className="text-neutral-800 dark:text-neutral-200">Rätt svar: {q.options[q.correct]}</p>
                        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{q.explanation}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button variant="outline" onClick={nyttTest}>
        <RotateCcw className="h-4 w-4" /> Gör ett nytt test
      </Button>
    </div>
  );
}
