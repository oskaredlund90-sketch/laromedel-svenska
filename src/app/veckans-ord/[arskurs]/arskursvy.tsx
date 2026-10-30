"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Copy, Download, Printer, Settings2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { arskursNamn, arskursSlug, type Arskursord, type Vecka } from "@/lib/veckansord/typer";
import { aktuellLasarsvecka, skolveckor } from "@/lib/veckansord/lasar";
import { csv, kortText } from "@/lib/veckansord/forhor";
import { useLasarsinstallning } from "@/lib/veckansord/installning";

export function laddaNer(namn: string, innehall: string, typ: string) {
  const url = URL.createObjectURL(new Blob([innehall], { type: typ }));
  const a = document.createElement("a");
  a.href = url;
  a.download = namn;
  a.click();
  URL.revokeObjectURL(url);
}

export function Arskursvy({ data }: { data: Arskursord }) {
  const [inst, setInst] = useLasarsinstallning();
  const [visaInst, setVisaInst] = useState(false);
  const [utskrift, setUtskrift] = useState<"ht" | "vt">("ht");
  const [kopierat, setKopierat] = useState(false);
  const veckor = useMemo(() => skolveckor(inst), [inst]);
  const aktuell = useMemo(() => aktuellLasarsvecka(inst), [inst]);
  const slug = arskursSlug(data.arskurs);
  const halva = Math.ceil(data.veckor.length / 2);

  const skrivUt = (t: "ht" | "vt") => {
    setUtskrift(t);
    setTimeout(() => window.print(), 50);
  };

  const nummerFalt = (etikett: string, nyckel: keyof typeof inst, min: number, max: number) => (
    <label className="text-sm">
      <span className="mb-1 block text-neutral-600 dark:text-neutral-400">{etikett}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={inst[nyckel]}
        onChange={(e) => setInst({ ...inst, [nyckel]: Number(e.target.value) })}
        className="w-24 rounded-md border border-neutral-300 bg-white px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900"
      />
    </label>
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 print:max-w-none print:p-0">
      <div className="print:hidden">
        <Link href="/veckans-ord" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
          <ChevronLeft className="h-4 w-4" /> Alla årskurser
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Veckans ord – {arskursNamn(data.arskurs)}</h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          Läsåret {inst.startar}/{String(inst.startar + 1).slice(2)} · {data.veckor.length} veckor · {data.veckor[0]?.ord.length ?? 0} ord per vecka
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button size="sm" asChild>
            <Link href={`/veckans-ord/${slug}/${aktuell}`}>Den här veckans ord (v. {veckor[aktuell - 1]?.kalendervecka})</Link>
          </Button>
          <Button size="sm" variant="outline" onClick={() => skrivUt("ht")}>
            <Printer className="h-4 w-4" /> Skriv ut hösten
          </Button>
          <Button size="sm" variant="outline" onClick={() => skrivUt("vt")}>
            <Printer className="h-4 w-4" /> Skriv ut våren
          </Button>
          <Button size="sm" variant="outline" onClick={() => laddaNer(`veckans-ord-${slug}.csv`, csv(data), "text/csv;charset=utf-8")}>
            <Download className="h-4 w-4" /> Kalkylark (CSV)
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              navigator.clipboard.writeText(kortText(data.veckor)).then(() => {
                setKopierat(true);
                setTimeout(() => setKopierat(false), 1500);
              })
            }
          >
            <Copy className="h-4 w-4" /> {kopierat ? "Kopierat!" : "Kopiera till Quizlet/Kahoot"}
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setVisaInst((v) => !v)}>
            <Settings2 className="h-4 w-4" /> Läsår och lov
          </Button>
        </div>

        {visaInst && (
          <Card className="mt-4">
            <CardContent className="flex flex-wrap gap-4 p-5">
              {nummerFalt("Läsåret börjar år", "startar", 2024, 2035)}
              {nummerFalt("Skolstart (vecka)", "skolstart", 32, 36)}
              {nummerFalt("Höstlov (vecka)", "hostlov", 42, 46)}
              {nummerFalt("Sportlov (vecka)", "sportlov", 6, 11)}
              {nummerFalt("Påsklov (vecka)", "pasklov", 12, 18)}
              <p className="w-full text-xs text-neutral-500">Jullovet (v. 52–1) räknas alltid bort. Inställningen sparas bara i din webbläsare.</p>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {data.veckor.map((v) => {
            const sv = veckor[v.nummer - 1];
            return (
              <Link
                key={v.nummer}
                href={`/veckans-ord/${slug}/${v.nummer}`}
                className={cn(
                  "rounded-xl border bg-white p-4 transition-colors hover:border-neutral-400 dark:bg-neutral-900",
                  v.nummer === aktuell ? "border-emerald-500 ring-1 ring-emerald-500" : "border-neutral-200 dark:border-neutral-800",
                )}
              >
                <div className="flex items-baseline justify-between text-xs text-neutral-500">
                  <span>Läsårsvecka {v.nummer}</span>
                  <span>{sv ? `v. ${sv.kalendervecka}` : ""}{v.nummer === aktuell ? " · denna vecka" : ""}</span>
                </div>
                <p className="font-semibold text-neutral-900 dark:text-white">{v.tema}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {v.ord.filter((o) => o.kategori === "tema").map((o) => o.ord).join(" · ")}
                  {v.ord.length > 7 && <span className="text-neutral-400"> + {v.ord.length - v.ord.filter((o) => o.kategori === "tema").length} ord</span>}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <Ordlista
        rubrik={`Veckans ord – ${arskursNamn(data.arskurs)} – ${utskrift === "ht" ? "hösten" : "våren"} ${utskrift === "ht" ? inst.startar : inst.startar + 1}`}
        veckor={utskrift === "ht" ? data.veckor.slice(0, halva) : data.veckor.slice(halva)}
        kalender={(n) => veckor[n - 1]?.kalendervecka}
      />
    </div>
  );
}

function Ordlista({ rubrik, veckor, kalender }: { rubrik: string; veckor: Vecka[]; kalender: (n: number) => number | undefined }) {
  return (
    <div className="hidden text-[10pt] text-black print:block">
      <h1 className="mb-3 text-[16pt] font-bold">{rubrik}</h1>
      {veckor.map((v) => (
        <section key={v.nummer} className="mb-3 break-inside-avoid">
          <h2 className="border-b border-black text-[11pt] font-bold">
            Vecka {kalender(v.nummer) ?? v.nummer} – {v.tema}
          </h2>
          <ul className="mt-1">
            {v.ord.map((o) => (
              <li key={o.ord}>
                <b>{o.ord}</b> ({o.ordklass}) – {o.forklaring} <i>{o.exempel}</i>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
