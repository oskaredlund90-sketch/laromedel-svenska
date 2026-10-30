"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Copy, Maximize2, Printer, RotateCcw, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KATEGORIER, arskursNamn, arskursSlug, type Kategori, type Vecka } from "@/lib/veckansord/typer";
import { blanda, classroomText, skapaForhor } from "@/lib/veckansord/forhor";
import { skolveckor } from "@/lib/veckansord/lasar";
import { useLasarsinstallning } from "@/lib/veckansord/installning";

type Flik = "ord" | "ova" | "forhor" | "mall";
type Utskrift = "veckoblad" | "forhor" | "facit" | "tommall";

const FLIKAR: { id: Flik; namn: string }[] = [
  { id: "ord", namn: "Orden" },
  { id: "ova", namn: "Öva" },
  { id: "forhor", namn: "Förhör" },
  { id: "mall", namn: "Elevmall" },
];

export function Veckovy({ arskurs, vecka, antalVeckor }: { arskurs: number; vecka: Vecka; antalVeckor: number }) {
  const [flik, setFlik] = useState<Flik>("ord");
  const [utskrift, setUtskrift] = useState<Utskrift>("veckoblad");
  const [tavla, setTavla] = useState(false);
  const [kopierat, setKopierat] = useState(false);
  const [inst] = useLasarsinstallning();
  const kalendervecka = useMemo(() => skolveckor(inst)[vecka.nummer - 1]?.kalendervecka, [inst, vecka.nummer]);
  const forhor = useMemo(() => skapaForhor(vecka), [vecka]);
  const slug = arskursSlug(arskurs);
  const rubrik = `Veckans ord – ${arskursNamn(arskurs)} – ${kalendervecka ? `vecka ${kalendervecka}` : `läsårsvecka ${vecka.nummer}`}`;

  const skrivUt = (u: Utskrift) => {
    setUtskrift(u);
    setTimeout(() => window.print(), 50);
  };

  if (tavla) return <Tavla vecka={vecka} rubrik={rubrik} stang={() => setTavla(false)} />;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:max-w-none print:p-0">
      <div className="print:hidden">
        <div className="mb-6 flex items-center justify-between text-sm">
          <Link href={`/veckans-ord/${slug}`} className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            <ChevronLeft className="h-4 w-4" /> Alla veckor
          </Link>
          <div className="flex gap-1">
            {vecka.nummer > 1 && (
              <Link href={`/veckans-ord/${slug}/${vecka.nummer - 1}`} className="rounded-md px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <ChevronLeft className="inline h-4 w-4" /> Förra
              </Link>
            )}
            {vecka.nummer < antalVeckor && (
              <Link href={`/veckans-ord/${slug}/${vecka.nummer + 1}`} className="rounded-md px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                Nästa <ChevronRight className="inline h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {arskursNamn(arskurs)} · {kalendervecka ? `Vecka ${kalendervecka}` : `Läsårsvecka ${vecka.nummer}`}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Veckans ord: {vecka.tema}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={() => setTavla(true)}>
            <Maximize2 className="h-4 w-4" /> Visa på tavlan
          </Button>
          <Button size="sm" variant="outline" onClick={() => skrivUt("veckoblad")}>
            <Printer className="h-4 w-4" /> Veckoblad
          </Button>
          <Button size="sm" variant="outline" onClick={() => skrivUt("forhor")}>
            <Printer className="h-4 w-4" /> Förhör
          </Button>
          <Button size="sm" variant="outline" onClick={() => skrivUt("facit")}>
            <Printer className="h-4 w-4" /> Förhör med facit
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              navigator.clipboard.writeText(classroomText({ arskurs, veckor: [vecka] }, vecka, kalendervecka)).then(() => {
                setKopierat(true);
                setTimeout(() => setKopierat(false), 1500);
              })
            }
          >
            <Copy className="h-4 w-4" /> {kopierat ? "Kopierat!" : "Kopiera till Classroom"}
          </Button>
        </div>

        <div role="tablist" className="mt-8 mb-6 grid grid-cols-4 gap-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800">
          {FLIKAR.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={flik === f.id}
              onClick={() => setFlik(f.id)}
              className={cn(
                "rounded-lg py-2 text-sm font-medium",
                flik === f.id ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-950 dark:text-white" : "text-neutral-600 dark:text-neutral-400",
              )}
            >
              {f.namn}
            </button>
          ))}
        </div>

        {flik === "ord" && <Ordkort vecka={vecka} />}
        {flik === "ova" && <Ova vecka={vecka} />}
        {flik === "forhor" && <ForhorVy vecka={vecka} skrivUt={skrivUt} />}
        {flik === "mall" && <MallVy skrivUt={skrivUt} />}
      </div>

      <Utskriftsvy utskrift={utskrift} vecka={vecka} rubrik={rubrik} forhor={forhor} />
    </div>
  );
}

/** Veckans ord i kategorier (tema, ämnesord, stavningsord). */
function grupper(vecka: Vecka) {
  return (Object.keys(KATEGORIER) as Kategori[])
    .map((k) => ({ kategori: k, namn: KATEGORIER[k].namn, ord: vecka.ord.filter((o) => o.kategori === k) }))
    .filter((g) => g.ord.length > 0);
}

function Ordkort({ vecka }: { vecka: Vecka }) {
  return (
    <div className="space-y-8">
      {grupper(vecka).map((g) => (
        <section key={g.kategori}>
          <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            {g.namn} <span className="text-sm font-normal text-neutral-500">({g.ord.length})</span>
          </h2>
          <OrdkortGrupp ord={g.ord} />
        </section>
      ))}
    </div>
  );
}

function OrdkortGrupp({ ord }: { ord: Vecka["ord"] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {ord.map((o) => (
        <Card key={o.ord}>
          <CardContent className="space-y-2 p-5">
            <p className="text-xl font-bold text-neutral-900 dark:text-white">{o.ord}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{o.ordklass}</p>
            <p className="text-neutral-800 dark:text-neutral-200">{o.forklaring}</p>
            <p className="italic text-neutral-600 dark:text-neutral-400">{o.exempel}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

/** Öva: välj rätt ord till förklaringen. Inget sparas. */
function Ova({ vecka }: { vecka: Vecka }) {
  const [runda, setRunda] = useState(0);
  const fragor = useMemo(() => blanda(vecka.ord, vecka.nummer + runda * 31), [vecka, runda]);
  const [svar, setSvar] = useState<Record<number, string>>({});
  const ratt = fragor.filter((o, i) => svar[i] === o.ord).length;
  const klar = Object.keys(svar).length === fragor.length;

  return (
    <div className="space-y-4">
      {fragor.map((o, i) => (
        <Card key={`${runda}-${o.ord}`}>
          <CardContent className="p-5">
            <p className="mb-3 text-neutral-900 dark:text-white">{o.forklaring}</p>
            <div className="flex flex-wrap gap-2">
              {vecka.ord.filter((alt) => alt.kategori === o.kategori).map((alt) => {
                const vald = svar[i] === alt.ord;
                const besvarad = svar[i] !== undefined;
                return (
                  <button
                    key={alt.ord}
                    disabled={besvarad}
                    onClick={() => setSvar((s) => ({ ...s, [i]: alt.ord }))}
                    className={cn(
                      "rounded-md border px-3 py-1.5 text-sm",
                      !besvarad && "border-neutral-300 hover:border-neutral-500 dark:border-neutral-700",
                      besvarad && alt.ord === o.ord && "border-emerald-600 bg-emerald-600 text-white",
                      besvarad && vald && alt.ord !== o.ord && "border-red-500 bg-red-500 text-white",
                      besvarad && !vald && alt.ord !== o.ord && "border-neutral-200 text-neutral-400 dark:border-neutral-800",
                    )}
                  >
                    {alt.ord}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
      {klar && (
        <div className="flex items-center gap-4">
          <p className="font-semibold text-neutral-900 dark:text-white">
            {ratt} av {fragor.length} rätt {ratt === fragor.length ? "– snyggt!" : ""}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSvar({});
              setRunda((r) => r + 1);
            }}
          >
            <RotateCcw className="h-4 w-4" /> Igen
          </Button>
        </div>
      )}
    </div>
  );
}

function ForhorVy({ vecka, skrivUt }: { vecka: Vecka; skrivUt: (u: Utskrift) => void }) {
  const f = skapaForhor(vecka);
  return (
    <Card>
      <CardContent className="space-y-4 p-6 text-neutral-800 dark:text-neutral-200">
        <p>Förhöret har tre delar och fungerar likadant varje vecka, så att eleverna vet vad som väntar:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Koppla ihop orden med rätt förklaring ({f.koppla.ord.length} uppgifter).</li>
          <li>Skriv in rätt ord i meningarna ({f.luckor.length} uppgifter).</li>
          <li>Skriv en egen mening med {f.egnaMeningar.join(" och ")}.</li>
          {f.diktamen.length > 0 && <li>Diktamen: skriv stavningsorden som läraren läser upp ({f.diktamen.length} ord).</li>}
        </ol>
        <div className="flex gap-2">
          <Button onClick={() => skrivUt("forhor")}>
            <Printer className="h-4 w-4" /> Skriv ut förhöret
          </Button>
          <Button variant="outline" onClick={() => skrivUt("facit")}>
            <Printer className="h-4 w-4" /> Med facit
          </Button>
        </div>
        <p className="text-sm text-neutral-500">Bedömning: 1 poäng per rätt i del 1, 2 och 4. Del 3: 2 poäng per mening om ordet används rätt och meningen visar att eleven förstår ordet.</p>
      </CardContent>
    </Card>
  );
}

const MALL_KOLUMNER = ["Ordet", "Vad betyder det? (med egna ord)", "Exempel", "Min egen mening", "Synonym, motsats eller bild"];

function MallVy({ skrivUt }: { skrivUt: (u: Utskrift) => void }) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6 text-neutral-800 dark:text-neutral-200">
        <p>Så här arbetar eleverna med varje ord under veckan. Samma mall varje vecka gör att de känner igen arbetssättet:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li><b>Ordet</b> – skriv av ordet (med en/ett om det är ett substantiv).</li>
          <li><b>Vad betyder det?</b> – förklara med dina egna ord, inte ordbokens.</li>
          <li><b>Exempel</b> – skriv av exempelmeningen eller hitta ordet i en text.</li>
          <li><b>Min egen mening</b> – visa att du förstår ordet. Meningen ska handla om dig eller något du vet.</li>
          <li><b>Synonym, motsats eller bild</b> – ett ord som betyder ungefär samma sak, motsatsen, eller en teckning.</li>
        </ol>
        <div className="flex gap-2">
          <Button onClick={() => skrivUt("veckoblad")}>
            <Printer className="h-4 w-4" /> Veckoblad med mall
          </Button>
          <Button variant="outline" onClick={() => skrivUt("tommall")}>
            <Printer className="h-4 w-4" /> Tom mall
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Tavla({ vecka, rubrik, stang }: { vecka: Vecka; rubrik: string; stang: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] overflow-auto bg-white p-8 text-neutral-900 dark:bg-neutral-950 dark:text-white sm:p-14">
      <button onClick={stang} className="absolute right-6 top-6 rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Stäng">
        <X className="h-6 w-6" />
      </button>
      <p className="text-lg text-neutral-500">{rubrik}</p>
      <h1 className="mb-10 text-5xl font-bold">{vecka.tema}</h1>
      {grupper(vecka).map((g) => (
        <section key={g.kategori} className="mb-12">
          <p className="mb-4 text-lg font-semibold uppercase tracking-wide text-neutral-500">{g.namn}</p>
          <div className="grid gap-8 lg:grid-cols-2">
            {g.ord.map((o) => (
              <div key={o.ord}>
                <p className="text-4xl font-bold">{o.ord}</p>
                <p className="mt-2 text-2xl">{o.forklaring}</p>
                <p className="mt-1 text-xl italic text-neutral-500">{o.exempel}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function Utskriftsvy({
  utskrift,
  vecka,
  rubrik,
  forhor,
}: {
  utskrift: Utskrift;
  vecka: Vecka;
  rubrik: string;
  forhor: ReturnType<typeof skapaForhor>;
}) {
  const huvud = (titel: string) => (
    <div className="mb-4 flex items-end justify-between border-b border-black pb-2">
      <div>
        <p className="text-[9pt]">{rubrik}</p>
        <h1 className="text-[18pt] font-bold">{titel}</h1>
      </div>
      <p className="text-[10pt]">Namn: ______________________</p>
    </div>
  );

  const mall = (rader: { ord: string }[] | null) => (
    <table className="w-full border-collapse text-[9.5pt]">
      <thead>
        <tr>
          {MALL_KOLUMNER.map((k) => (
            <th key={k} className="border border-black p-1.5 text-left">{k}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(rader ?? Array.from({ length: 6 }, () => ({ ord: "" }))).map((r, i) => (
          <tr key={i} className="h-24 align-top">
            <td className="w-[16%] border border-black p-1.5 font-bold">{r.ord}</td>
            <td className="w-[22%] border border-black" />
            <td className="w-[20%] border border-black" />
            <td className="w-[26%] border border-black" />
            <td className="w-[16%] border border-black" />
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="hidden text-[11pt] leading-relaxed text-black print:block">
      {utskrift === "veckoblad" && (
        <>
          {huvud(`Veckans ord: ${vecka.tema}`)}
          {grupper(vecka).map((g) => (
            <section key={g.kategori} className="mb-3">
              <h2 className="text-[11pt] font-bold">{g.namn}</h2>
              <ul className="space-y-1">
                {g.ord.map((o) => (
                  <li key={o.ord}>
                    <b>{o.ord}</b> <span className="text-[9pt]">({o.ordklass})</span> – {o.forklaring} <i>{o.exempel}</i>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <div className="break-before-page">
            {huvud("Mina ord")}
            {mall(vecka.ord.filter((o) => o.kategori === "tema"))}
          </div>
        </>
      )}

      {utskrift === "tommall" && (
        <>
          {huvud("Mina ord")}
          {mall(null)}
        </>
      )}

      {(utskrift === "forhor" || utskrift === "facit") && (
        <>
          {huvud(`Förhör: ${vecka.tema}`)}
          <h2 className="font-bold">Del 1. Koppla ihop ordet med rätt förklaring. Skriv bokstaven på strecket.</h2>
          <div className="mb-4 mt-2 grid grid-cols-[1fr_2fr] gap-6">
            <ol className="list-[upper-alpha] pl-6">
              {forhor.koppla.ord.map((o) => (
                <li key={o} className="font-bold">{o}</li>
              ))}
            </ol>
            <ol className="list-decimal pl-6">
              {forhor.koppla.forklaringar.map((f) => (
                <li key={f}>____ {f}</li>
              ))}
            </ol>
          </div>
          <h2 className="font-bold">Del 2. Skriv rätt ord i meningen.</h2>
          <ol className="mb-4 mt-2 list-decimal space-y-2 pl-6">
            {forhor.luckor.map((l) => (
              <li key={l.fore + l.svar}>
                {l.fore}______________{l.efter}
              </li>
            ))}
          </ol>
          <h2 className="font-bold">Del 3. Skriv en egen mening med ordet.</h2>
          {forhor.egnaMeningar.map((o) => (
            <div key={o} className="mt-3">
              <p className="font-bold">{o}</p>
              <p className="mt-5 border-b border-black" />
              <p className="mt-6 border-b border-black" />
            </div>
          ))}
          {forhor.diktamen.length > 0 && (
            <>
              <h2 className="mt-5 font-bold">Del 4. Diktamen. Skriv orden som läraren läser upp.</h2>
              <ol className="mt-2 grid list-decimal grid-cols-2 gap-x-8 gap-y-4 pl-6">
                {forhor.diktamen.map((o) => (
                  <li key={o} className="border-b border-black">&nbsp;</li>
                ))}
              </ol>
            </>
          )}
          <p className="mt-6 text-[9pt]">
            Poäng: ____ / {forhor.koppla.ord.length + forhor.luckor.length + forhor.egnaMeningar.length * 2 + forhor.diktamen.length}
          </p>

          {utskrift === "facit" && (
            <div className="break-before-page">
              <h1 className="mb-2 text-[16pt] font-bold">Facit – {vecka.tema}</h1>
              <p className="font-bold">Del 1</p>
              <p>{forhor.koppla.facit.map((b, i) => `${i + 1}–${b}`).join(", ")}</p>
              <p className="mt-2 font-bold">Del 2</p>
              <ol className="list-decimal pl-6">
                {forhor.luckor.map((l) => (
                  <li key={l.svar + l.fore}>{l.svar}</li>
                ))}
              </ol>
              {forhor.diktamen.length > 0 && (
                <>
                  <p className="mt-2 font-bold">Del 4 – läs upp i den här ordningen</p>
                  <ol className="list-decimal pl-6">
                    {forhor.diktamen.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ol>
                </>
              )}
              <p className="mt-2 font-bold">Del 3</p>
              <p>2 poäng per mening: ordet används rätt och meningen visar att eleven förstår betydelsen. 1 poäng om ordet används men meningen är oklar.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

