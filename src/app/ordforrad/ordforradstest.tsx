"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { arskursSlug } from "@/lib/veckansord/typer";
import {
  ANTAL_FRAGOR,
  MAX_NIVA,
  STARTNIVA,
  nastaNiva,
  nivaText,
  skapaFraga,
  uppskatta,
  type Fraga,
  type Svar,
  type Testord,
} from "@/lib/ordforrad/test";

const STADIER = [
  { id: "lagstadiet", namn: "Lågstadiet", text: "Åk 1–3" },
  { id: "mellanstadiet", namn: "Mellanstadiet", text: "Åk 4–6" },
  { id: "hogstadiet", namn: "Högstadiet", text: "Åk 7–9" },
  { id: "gymnasiet", namn: "Gymnasiet", text: "År 1–3" },
];

/** Hittar en fråga på nivån, eller närmaste nivå som har ord kvar. */
function nyFraga(bank: Testord[], niva: number, svar: Svar[]): Fraga | null {
  const anvanda = new Set(svar.map((s) => s.fraga.ord.ord));
  for (let d = 0; d <= MAX_NIVA; d++) {
    for (const n of [niva - d, niva + d]) {
      const f = skapaFraga(bank, n, anvanda);
      if (f) return f;
    }
  }
  return null;
}

export function Ordforradstest({ bank }: { bank: Testord[] }) {
  const [svar, setSvar] = useState<Svar[]>([]);
  const [fraga, setFraga] = useState<Fraga | null>(null);
  const [niva, setNiva] = useState(5);
  const [klar, setKlar] = useState(false);

  const starta = (stadie: string) => {
    const start = STARTNIVA[stadie];
    setNiva(start);
    setSvar([]);
    setKlar(false);
    setFraga(nyFraga(bank, start, []));
  };

  const svara = (val: number) => {
    if (!fraga) return;
    const nya = [...svar, { fraga, val }];
    setSvar(nya);
    const ny = nastaNiva(niva, val === fraga.ratt);
    setNiva(ny);
    const nasta = nya.length < ANTAL_FRAGOR ? nyFraga(bank, ny, nya) : null;
    if (!nasta) setKlar(true);
    setFraga(nasta);
  };

  if (klar) return <Resultatvy svar={svar} igen={() => { setFraga(null); setKlar(false); setSvar([]); }} />;

  if (!fraga) {
    return (
      <Card>
        <CardContent className="space-y-4 p-6">
          <p className="font-medium text-neutral-900 dark:text-white">Vilket stadium går du i?</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {STADIER.map((s) => (
              <button
                key={s.id}
                onClick={() => starta(s.id)}
                className="rounded-xl border border-neutral-200 p-4 text-left transition-colors hover:border-neutral-900 dark:border-neutral-800 dark:hover:border-white"
              >
                <p className="font-semibold text-neutral-900 dark:text-white">{s.namn}</p>
                <p className="text-sm text-neutral-500">{s.text}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <div className="mb-1 flex justify-between text-sm text-neutral-500">
          <span>
            Ord {svar.length + 1} av {ANTAL_FRAGOR}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div className="h-full rounded-full bg-neutral-900 transition-all dark:bg-white" style={{ width: `${(svar.length / ANTAL_FRAGOR) * 100}%` }} />
        </div>
      </div>
      <Card>
        <CardContent className="p-6 sm:p-8">
          <p className="mb-1 text-sm text-neutral-500">Vad betyder</p>
          <p className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">{fraga.ord.ord}</p>
          <div className="grid gap-2">
            {fraga.alternativ.map((a, i) => (
              <button
                key={a}
                onClick={() => svara(i)}
                className="rounded-lg border border-neutral-200 px-4 py-3 text-left text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-200 dark:hover:border-white dark:hover:bg-neutral-800"
              >
                {a}
              </button>
            ))}
            <button
              onClick={() => svara(-1)}
              className="rounded-lg px-4 py-2 text-left text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            >
              Jag vet inte
            </button>
          </div>
        </CardContent>
      </Card>
      <p className="mt-3 text-xs text-neutral-500">Gissa inte – välj hellre &quot;Jag vet inte&quot;. Då blir resultatet mer rättvisande.</p>
    </div>
  );
}

function Resultatvy({ svar, igen }: { svar: Svar[]; igen: () => void }) {
  const r = uppskatta(svar);
  const slug = arskursSlug(Math.min(12, r.niva + 1));
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 sm:p-8">
          <p className="text-sm text-neutral-500">Ditt ordförråd motsvarar ungefär</p>
          <p className="text-4xl font-bold text-neutral-900 dark:text-white">{nivaText(r.niva)}</p>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            {r.ratt} av {r.totalt} rätt. Resultatet är en uppskattning utifrån 25 ord – gör testet igen någon gång för att se din utveckling.
          </p>
          <div className="mt-4 flex gap-1" aria-hidden>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className={cn("h-2 flex-1 rounded-full", i < r.niva ? "bg-emerald-500" : "bg-neutral-200 dark:bg-neutral-800")} />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-xs text-neutral-500">
            <span>Åk 1</span>
            <span>Åk 9</span>
            <span>Gy 3</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-3 p-6">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Så växer ditt ordförråd</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            De flesta nya ord lär vi oss genom att läsa. Ju mer du läser, desto fler ord möter du – och desto lättare blir det att förstå
            texter i alla ämnen.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm">
              <Link href="/bli-battre">
                Hur kan jag bli bättre? <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href={`/veckans-ord/${slug}`}>Veckans ord på din nästa nivå</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {r.missade.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">Ord att lära dig</h2>
            <ul className="space-y-2">
              {r.missade.map((o) => (
                <li key={o.ord} className="text-neutral-800 dark:text-neutral-200">
                  <b>{o.ord}</b> – {o.forklaring}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Button variant="outline" onClick={igen}>
        <RotateCcw className="h-4 w-4" /> Gör testet igen
      </Button>
    </div>
  );
}
