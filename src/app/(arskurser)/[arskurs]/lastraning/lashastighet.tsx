"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowRight, Play, RotateCcw, Square, Shuffle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AgeGroup } from "@/lib/supabase/types";
import { getReadingTexts, type ReadingText } from "@/lib/data/lasforstaelse";
import { HASTIGHET, ordPerMinut, raknaOrd } from "@/lib/lastraning/formagor";

type Lage = "valj" | "laser" | "fragor" | "resultat";

interface Forsok {
  ordPerMinut: number;
  sekunder: number;
}

export function Lashastighet({ stadie }: { stadie: AgeGroup }) {
  const texter = useMemo(() => getReadingTexts(stadie), [stadie]);
  const [text, setText] = useState<ReadingText>(texter[0]);
  const [lage, setLage] = useState<Lage>("valj");
  const [forsok, setForsok] = useState<Forsok[]>([]);
  const [svar, setSvar] = useState<Record<string, number>>({});
  const start = useRef(0);

  const antalOrd = useMemo(() => raknaOrd(text.passage), [text]);
  // Förståelsefrågor: helst "hitta"-frågor, max tre.
  const fragor = useMemo(
    () => [...text.questions].sort((a, b) => Number(b.level === "hitta") - Number(a.level === "hitta")).slice(0, 3),
    [text],
  );
  const riktvarde = HASTIGHET[stadie];
  const forsta = forsok[0];
  const senaste = forsok[forsok.length - 1];
  const forstodda = fragor.filter((q) => svar[q.id] === q.correct).length;

  const valjText = (t: ReadingText) => {
    setText(t);
    setForsok([]);
    setSvar({});
    setLage("valj");
  };

  const borja = () => {
    start.current = performance.now();
    setLage("laser");
  };

  const sluta = () => {
    const ms = performance.now() - start.current;
    setForsok((f) => [...f, { ordPerMinut: ordPerMinut(antalOrd, ms), sekunder: Math.round(ms / 1000) }]);
    // Frågorna bara efter första läsningen – därefter är det upprepad läsning.
    setLage(forsok.length === 0 ? "fragor" : "resultat");
  };

  if (lage === "laser") {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">{text.title}</h2>
            <p className="whitespace-pre-line font-serif text-[17px] leading-8 text-neutral-800 dark:text-neutral-200">{text.passage}</p>
          </CardContent>
        </Card>
        <div className="sticky bottom-4 flex justify-center">
          <Button size="lg" onClick={sluta} className="shadow-lg">
            <Square className="h-4 w-4" /> Klar – jag har läst färdigt
          </Button>
        </div>
      </div>
    );
  }

  if (lage === "fragor") {
    return (
      <Card>
        <CardContent className="space-y-5 p-6 sm:p-8">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Förstod du texten?</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Svara utan att titta i texten. Snabb läsning räknas bara om du förstår.</p>
          </div>
          {fragor.map((q, i) => (
            <fieldset key={q.id}>
              <legend className="mb-2 font-medium text-neutral-900 dark:text-white">
                {i + 1}. {q.prompt}
              </legend>
              <div className="grid gap-2">
                {q.options.map((o, oi) => (
                  <label
                    key={oi}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm",
                      svar[q.id] === oi ? "border-neutral-900 dark:border-white" : "border-neutral-200 dark:border-neutral-800",
                    )}
                  >
                    <input type="radio" name={q.id} checked={svar[q.id] === oi} onChange={() => setSvar((s) => ({ ...s, [q.id]: oi }))} className="mt-0.5 accent-neutral-900" />
                    {o}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <Button disabled={fragor.some((q) => svar[q.id] === undefined)} onClick={() => setLage("resultat")}>
            Se resultat <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (lage === "resultat" && senaste) {
    const orimligt = senaste.ordPerMinut > riktvarde.max * 2;
    const tolkning = orimligt
      ? "Det där gick väldigt fort! Läste du verkligen hela texten? Testa igen och läs i ditt vanliga tempo."
      : forstodda < 2
        ? "Du läste snabbt men missade en del av innehållet. Sakta ner lite – förståelsen är viktigast."
        : senaste.ordPerMinut < riktvarde.min
          ? "Du läser lite långsammare än många i ditt stadie – men du förstod texten! Läs varje dag, så ökar tempot av sig självt."
          : senaste.ordPerMinut > riktvarde.max
            ? "Du läser snabbt och förstår det du läser. Utmana dig med längre och svårare texter."
            : "Du läser i ett bra tempo och förstår det du läser. Fortsätt läsa varje dag!";
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="space-y-4 p-6 sm:p-8">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{text.title} · {antalOrd} ord</p>
            <p className="text-5xl font-bold tabular-nums text-neutral-900 dark:text-white">
              {senaste.ordPerMinut} <span className="text-xl font-medium text-neutral-500">ord per minut</span>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Förståelse: {forstodda} av {fragor.length} rätt · {riktvarde.text}
            </p>
            <p className="text-neutral-800 dark:text-neutral-200">{tolkning}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-6">
            <h3 className="font-semibold text-neutral-900 dark:text-white">Träna flyt: läs samma text igen</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Upprepad läsning är ett av de bästa sätten att träna läsflyt. Läs texten igen – gärna högt – och se hur tempot ändras.
            </p>
            {forsok.length > 1 && (
              <ol className="space-y-1 text-sm">
                {forsok.map((f, i) => (
                  <li key={i} className="flex justify-between border-b border-neutral-100 py-1 dark:border-neutral-800">
                    <span>Läsning {i + 1}</span>
                    <span className="tabular-nums">
                      {f.ordPerMinut} ord/min · {f.sekunder} s
                    </span>
                  </li>
                ))}
              </ol>
            )}
            {forsok.length > 1 && forsta && !orimligt && (
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                {senaste.ordPerMinut > forsta.ordPerMinut
                  ? `Du läser ${senaste.ordPerMinut - forsta.ordPerMinut} ord per minut snabbare än första gången!`
                  : "Tempot är ungefär detsamma. Fokusera på att läsa jämnt och med inlevelse."}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              <Button onClick={borja}>
                <RotateCcw className="h-4 w-4" /> Läs igen
              </Button>
              <Button variant="outline" onClick={() => valjText(texter[Math.floor(Math.random() * texter.length)])}>
                <Shuffle className="h-4 w-4" /> Ny text
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card>
      <CardContent className="space-y-5 p-6 sm:p-8">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Hur snabbt läser du?</h2>
          <p className="mt-1 text-neutral-700 dark:text-neutral-300">
            Välj en text och tryck Start. Läs tyst i ditt vanliga tempo – inte så snabbt du kan – och tryck Klar när du är färdig.
            Sedan får du tre frågor om texten.
          </p>
        </div>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">Text</span>
          <select
            value={text.id}
            onChange={(e) => valjText(texter.find((t) => t.id === e.target.value)!)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
          >
            {texter.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title} ({raknaOrd(t.passage)} ord)
              </option>
            ))}
          </select>
        </label>
        <Button size="lg" onClick={borja}>
          <Play className="h-4 w-4" /> Start
        </Button>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Riktvärdena är ungefärliga och variationen är stor. Jämför helst med dig själv över tid. Inget sparas – skriv upp ditt resultat om du vill följa din utveckling.
        </p>
      </CardContent>
    </Card>
  );
}
