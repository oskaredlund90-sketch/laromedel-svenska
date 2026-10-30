"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Check, ChevronLeft, Printer, RotateCcw, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  arRatt,
  arRattMening,
  facitText,
  utskriftsText,
  visaAlternativ,
  type Del,
  type Hafte,
  type Lucka,
  type Uppgift,
} from "@/lib/haften/typer";

type Svar = Record<string, string>;

const nyckel = (u: Uppgift, i: number) => `${u.id}:${i}`;

function rattaUppgift(u: Uppgift, svar: Svar, skiftlage: boolean): boolean[] {
  if (u.typ === "ratta") return [arRattMening(svar[nyckel(u, 0)] ?? "", u.ratt)];
  return u.bitar
    .filter((b): b is Lucka => typeof b !== "string")
    // Obesvarat är alltid fel – även när rätt svar är "inget".
    .map((l, i) => nyckel(u, i) in svar && arRatt(svar[nyckel(u, i)], l.svar, skiftlage));
}

export function HafteVy({ hafte }: { hafte: Hafte }) {
  const [medFacit, setMedFacit] = useState(true);

  const skrivUt = (facit: boolean) => {
    setMedFacit(facit);
    // Vänta en renderingsrunda så att facit-läget hinner slå igenom.
    setTimeout(() => window.print(), 50);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
      {/* ---------- Webbvy ---------- */}
      <div className="print:hidden">
        <Link href="/ovningshaften" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
          <ChevronLeft className="h-4 w-4" /> Alla övningshäften
        </Link>
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {hafte.omrade} · Steg {hafte.steg} · {hafte.antalUppgifter} uppgifter
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{hafte.titel}</h1>
        <p className="mt-1 text-lg text-neutral-600 dark:text-neutral-400">{hafte.underrubrik}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => skrivUt(false)}>
            <Printer className="h-4 w-4" /> Skriv ut
          </Button>
          <Button variant="outline" size="sm" onClick={() => skrivUt(true)}>
            <Printer className="h-4 w-4" /> Skriv ut med facit
          </Button>
        </div>

        <Regel hafte={hafte} />

        <div className="space-y-8">
          {hafte.delar.map((d) => (
            <DelVy key={d.rubrik} del={d} />
          ))}
        </div>
      </div>

      {/* ---------- Utskrift ---------- */}
      <Utskrift hafte={hafte} medFacit={medFacit} />
    </div>
  );
}

function Regel({ hafte }: { hafte: Hafte }) {
  return (
    <Card className="my-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30">
      <CardContent className="p-6">
        <p className="mb-2 flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <BookOpen className="h-4 w-4 text-amber-600" /> Kom ihåg
        </p>
        <ul className="list-disc space-y-1 pl-5 text-neutral-800 dark:text-neutral-200">
          {hafte.regel.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function DelVy({ del }: { del: Del }) {
  const [svar, setSvar] = useState<Svar>({});
  const [rattad, setRattad] = useState(false);
  const satt = (k: string, v: string) => setSvar((s) => ({ ...s, [k]: v }));

  const resultat = rattad ? del.uppgifter.map((u) => rattaUppgift(u, svar, !!del.skiftlage)) : null;
  const ratt = resultat?.flat().filter(Boolean).length ?? 0;
  const totalt = resultat?.flat().length ?? 0;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{del.rubrik}</h2>
          {rattad && (
            <span className="text-sm font-semibold tabular-nums text-neutral-900 dark:text-white">
              {ratt} av {totalt} rätt
            </span>
          )}
        </div>
        <p className="mb-5 text-neutral-700 dark:text-neutral-300">{del.instruktion}</p>

        <ol className="space-y-3">
          {del.uppgifter.map((u, ui) => (
            <li key={u.id} className="flex gap-3">
              <span className="w-7 shrink-0 pt-1.5 text-right text-sm tabular-nums text-neutral-400">{ui + 1}.</span>
              <div className="min-w-0 flex-1">
                {u.typ === "ratta" ? (
                  <RattaRad u={u} svar={svar} satt={satt} resultat={resultat?.[ui]} />
                ) : (
                  <LuckRad u={u} svar={svar} satt={satt} resultat={resultat?.[ui]} />
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {!rattad ? (
            <Button onClick={() => setRattad(true)}>
              <Check className="h-4 w-4" /> Rätta {del.rubrik.toLowerCase()}
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => setRattad(false)}>
                Ändra mina svar
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setSvar({});
                  setRattad(false);
                }}
              >
                <RotateCcw className="h-4 w-4" /> Börja om
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function LuckRad({
  u,
  svar,
  satt,
  resultat,
}: {
  u: Extract<Uppgift, { typ: "val" | "skriv" }>;
  svar: Svar;
  satt: (k: string, v: string) => void;
  resultat?: boolean[];
}) {
  let li = -1;
  return (
    <p className="leading-9 text-neutral-900 dark:text-neutral-100">
      {u.bitar.map((b, bi) => {
        if (typeof b === "string") return <span key={bi}>{b}</span>;
        li++;
        const k = nyckel(u, li);
        const ok = resultat?.[li];
        const rattat = resultat !== undefined;
        if (b.alternativ) {
          return (
            <span key={bi} className="mx-0.5 inline-flex flex-wrap gap-1 align-middle">
              {b.alternativ.map((a) => {
                const vald = k in svar && svar[k] === a;
                return (
                  <button
                    key={a}
                    type="button"
                    disabled={rattat}
                    onClick={() => satt(k, a)}
                    className={cn(
                      "rounded-md border px-2.5 py-0.5 text-sm font-medium transition-colors",
                      !rattat && (vald ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-300 hover:border-neutral-500 dark:border-neutral-700"),
                      rattat && vald && (ok ? "border-emerald-600 bg-emerald-600 text-white" : "border-red-500 bg-red-500 text-white"),
                      rattat && !vald && b.svar.includes(a) && "border-emerald-600 text-emerald-700 dark:text-emerald-400",
                      rattat && !vald && !b.svar.includes(a) && "border-neutral-200 text-neutral-400 dark:border-neutral-800",
                    )}
                  >
                    {visaAlternativ(a)}
                  </button>
                );
              })}
            </span>
          );
        }
        return (
          <span key={bi} className="mx-0.5 inline-flex items-center gap-1 align-middle">
            <input
              value={svar[k] ?? ""}
              onChange={(e) => satt(k, e.target.value)}
              readOnly={rattat}
              aria-label={`Lucka ${li + 1}`}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              style={{ width: `${Math.max(5, b.svar[0].length + 2)}ch` }}
              className={cn(
                "rounded-md border bg-white px-2 py-0.5 text-sm dark:bg-neutral-900",
                !rattat && "border-neutral-300 dark:border-neutral-700",
                rattat && (ok ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950" : "border-red-500 bg-red-50 dark:bg-red-950"),
              )}
            />
            {rattat && !ok && <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{b.svar[0]}</span>}
          </span>
        );
      })}
      {u.ledtrad && <span className="ml-1 text-sm text-neutral-500">({u.ledtrad})</span>}
    </p>
  );
}

function RattaRad({
  u,
  svar,
  satt,
  resultat,
}: {
  u: Extract<Uppgift, { typ: "ratta" }>;
  svar: Svar;
  satt: (k: string, v: string) => void;
  resultat?: boolean[];
}) {
  const k = nyckel(u, 0);
  const rattat = resultat !== undefined;
  const ok = resultat?.[0];
  return (
    <div className="space-y-1.5">
      <p className="text-neutral-900 dark:text-neutral-100">{u.fel}</p>
      <div className="flex items-center gap-2">
        <input
          value={svar[k] ?? ""}
          onChange={(e) => satt(k, e.target.value)}
          readOnly={rattat}
          placeholder="Skriv meningen rätt"
          spellCheck={false}
          className={cn(
            "w-full rounded-md border bg-white px-3 py-1.5 text-sm dark:bg-neutral-900",
            !rattat && "border-neutral-300 dark:border-neutral-700",
            rattat && (ok ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950" : "border-red-500 bg-red-50 dark:bg-red-950"),
          )}
        />
        {rattat && (ok ? <Check className="h-4 w-4 shrink-0 text-emerald-600" /> : <X className="h-4 w-4 shrink-0 text-red-500" />)}
      </div>
      {rattat && !ok && <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{u.ratt[0]}</p>}
    </div>
  );
}

function Utskrift({ hafte, medFacit }: { hafte: Hafte; medFacit: boolean }) {
  return (
    <div className="hidden text-[11pt] leading-relaxed text-black print:block">
      <div className="mb-4 flex justify-between border-b border-black pb-2">
        <div>
          <p className="text-[9pt]">
            {hafte.omrade} · Steg {hafte.steg} · {hafte.antalUppgifter} uppgifter
          </p>
          <h1 className="text-[18pt] font-bold">{hafte.titel}</h1>
          <p>{hafte.underrubrik}</p>
        </div>
        <p className="self-end text-[10pt]">Namn: ______________________</p>
      </div>
      <div className="mb-4 border border-black p-3">
        <p className="font-semibold">Kom ihåg</p>
        <ul className="list-disc pl-5">
          {hafte.regel.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
      {hafte.delar.map((d) => (
        <section key={d.rubrik} className="mb-4">
          <h2 className="mt-2 text-[13pt] font-bold">{d.rubrik}</h2>
          <p className="mb-2 italic">{d.instruktion}</p>
          <ol className={cn("list-decimal pl-6", d.typ !== "ratta" && "columns-2 gap-8")}>
            {d.uppgifter.map((u) => (
              <li key={u.id} className="mb-1 break-inside-avoid">
                {u.typ === "ratta" ? (
                  <>
                    {u.fel}
                    <br />
                    <span className="mt-2 block border-b border-dotted border-black">&nbsp;</span>
                  </>
                ) : (
                  <>
                    {utskriftsText(u)}
                    {u.ledtrad && ` (${u.ledtrad})`}
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>
      ))}
      {medFacit && (
        <div className="break-before-page">
          <h1 className="mb-2 text-[16pt] font-bold">Facit – {hafte.titel}</h1>
          {hafte.delar.map((d) => (
            <section key={d.rubrik} className="mb-3">
              <h2 className="font-bold">{d.rubrik}</h2>
              <ol className="columns-3 gap-6 pl-6 text-[9pt]">
                {d.uppgifter.map((u) => (
                  <li key={u.id} className="break-inside-avoid">
                    {facitText(u)}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
