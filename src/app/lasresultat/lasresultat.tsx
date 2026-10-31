"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, CircleDashed, Lightbulb, Lock, Printer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { packaUppJson } from "@/lib/aterkoppling/kodning";
import { stadieForArskurs } from "@/lib/aterkoppling/feltyper";
import {
  LASFORMAGOR,
  LASRESULTAT_PREFIX,
  arRattning,
  nivaFor,
  summera,
  type Niva,
  type Rattning,
} from "@/lib/lasprov/typer";

const NIVA: Record<Niva, { namn: string; stapel: string; bricka: string }> = {
  trana: { namn: "Behöver träna", stapel: "bg-amber-500", bricka: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" },
  pagang: { namn: "På god väg", stapel: "bg-sky-500", bricka: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300" },
  saker: { namn: "Säker", stapel: "bg-emerald-500", bricka: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
};

export function Lasresultat() {
  const [data, setData] = useState<Rattning | null>(null);
  const [fel, setFel] = useState(false);

  useEffect(() => {
    packaUppJson(window.location.hash, LASRESULTAT_PREFIX)
      .then((d) => (arRattning(d) ? setData(d) : setFel(true)))
      .catch(() => setFel(true));
  }, []);

  if (fel) return <div className="mx-auto max-w-2xl px-4 py-16 text-neutral-600">Länken kunde inte läsas. Be din lärare skicka den igen.</div>;
  if (!data) return <div className="mx-auto max-w-2xl px-4 py-16 text-neutral-500">Laddar …</div>;

  const { totalt, max, perFormaga } = summera(data);
  const svagast = [...perFormaga].sort((a, b) => a.andel - b.andel)[0];
  const stadie = stadieForArskurs(data.arskurs ?? 6);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Läsförståelse{data.steg ? ` · ${data.steg.replace("steg", "Steg ")}` : ""}</p>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{data.titel}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-3 print:hidden">
        <Button variant="outline" size="sm" onClick={() => window.print()}>
          <Printer className="h-4 w-4" /> Skriv ut
        </Button>
        <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
          <Lock className="h-3.5 w-3.5" /> Resultatet finns bara i din länk – inget sparas på sajten.
        </span>
      </div>

      <Card className="mt-8">
        <CardContent className="p-6 sm:p-8">
          <p className="text-sm text-neutral-500">Ditt resultat</p>
          <p className="text-4xl font-bold text-neutral-900 dark:text-white">
            {totalt} av {max} poäng
          </p>
          {data.helhet && <p className="mt-3 whitespace-pre-line text-neutral-800 dark:text-neutral-200">{data.helhet}</p>}
          {data.larare && <p className="mt-2 text-sm text-neutral-500">/ {data.larare}</p>}
        </CardContent>
      </Card>

      <h2 className="mt-10 mb-4 text-xl font-semibold text-neutral-900 dark:text-white">Dina läsförmågor</h2>
      <div className="space-y-4">
        {perFormaga.map((f) => {
          const info = LASFORMAGOR[f.formaga];
          const niva = nivaFor(f.andel);
          return (
            <Card key={f.formaga} className={cn(f.formaga === svagast?.formaga && niva !== "saker" && "border-neutral-900 dark:border-white")}>
              <CardContent className="space-y-3 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{info.namn}</h3>
                  <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", NIVA[niva].bricka)}>{NIVA[niva].namn}</span>
                </div>
                <div>
                  <div className="mb-1 flex justify-end text-sm font-semibold tabular-nums text-neutral-900 dark:text-white">
                    {f.poang}/{f.maxpoang} p
                  </div>
                  <div className="h-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <div className={cn("h-full rounded-full", NIVA[niva].stapel)} style={{ width: `${Math.round(f.andel * 100)}%` }} />
                  </div>
                </div>
                {niva !== "saker" && (
                  <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/60">
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      <Lightbulb className="h-4 w-4 text-amber-500" /> Så tränar du
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                      {info.tips.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <h2 className="mt-10 mb-4 text-xl font-semibold text-neutral-900 dark:text-white">Fråga för fråga</h2>
      <ol className="space-y-3">
        {data.svar.map((s) => {
          const fullt = s.poang >= s.maxpoang;
          return (
            <li key={s.nr} className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
              <div className="mb-1 flex items-start justify-between gap-3">
                <p className="flex items-start gap-2 font-medium text-neutral-900 dark:text-white">
                  {fullt ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />}
                  <span>
                    {s.nr}. {s.fraga ?? ""}
                  </span>
                </p>
                <span className="shrink-0 tabular-nums text-neutral-600 dark:text-neutral-400">
                  {s.poang}/{s.maxpoang} p · {LASFORMAGOR[s.formaga].kort}
                </span>
              </div>
              {s.kommentar && <p className="pl-6 text-neutral-700 dark:text-neutral-300">{s.kommentar}</p>}
            </li>
          );
        })}
      </ol>

      <Card className="mt-10 print:hidden">
        <CardContent className="space-y-3 p-6">
          <h2 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <BookOpenCheck className="h-5 w-5" /> Träna vidare
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link href={`/${stadie}/lastraning`} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
              Lästräning per förmåga
            </Link>
            <Link href={`/${stadie}/lasstrategier`} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
              Lässtrategier
            </Link>
            <Link href={`/${stadie}/lasforstaelse`} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
              Fler texter med frågor
            </Link>
          </div>
          <Link href="/bli-battre" className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400">
            Hur kan jag bli bättre på svenska? <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
