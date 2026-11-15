"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GrammarExercise } from "@/lib/data/grammatik-ovningar";
import { blandaFast, delaMarkera, delningar } from "@/lib/grammatik/ovningar/bygg";

const RUBRIK: Record<GrammarExercise["type"], string> = {
  "multiple-choice": "Välj rätt svar",
  "fill-in-blank": "Fyll i luckan",
  "error-correction": "Ringa in det som är rätt",
  categorization: "Sortera",
  "sentence-analysis": "Satsanalys",
  markera: "Stryk under",
  dela: "Dela orden",
  ordna: "Skriv i rätt ordning",
};

/** Instruktioner skrivna för skärmen görs om till papper. */
function papper(instruktion: string): string {
  return instruktion
    .replace(/Klicka mellan bokstäverna där en ny del börjar\.?/g, "Dra ett streck där en ny del börjar.")
    .replace(/Klicka mellan bokstäverna\.?/g, "Dra ett streck mellan delarna.")
    .replace(/Klicka igen för att ångra\.?/g, "")
    .replace(/^Klicka på/, "Stryk under")
    .replace(/^Markera satsdelarna/, "Skriv satsdelen under varje del")
    .replace(/^Gör en (fullständig )?satsanalys\.?/, "Skriv satsdelen under varje del.")
    .trim();
}

/** Standardinstruktioner som redan framgår av delens rubrik visas inte för varje uppgift. */
const STANDARD = new Set(["Välj rätt svar.", "Välj det ord som passar bäst.", "Ett ord eller en del av meningen är fel. Välj det som är rätt."]);

const bokstav = (i: number) => String.fromCharCode(65 + i);
const LINJE = "border-b border-dotted border-neutral-500";

function Uppgift({ e }: { e: GrammarExercise }) {
  switch (e.type) {
    case "multiple-choice":
      return (
        <>
          <p>{e.prompt}</p>
          <ul className="mt-1 space-y-0.5 pl-1">
            {e.options.map((o, i) => (
              <li key={i}>
                ☐ {bokstav(i)}. {o}
              </li>
            ))}
          </ul>
        </>
      );
    case "fill-in-blank":
      return (
        <>
          <p>{e.sentence.replace("____", "______________")}</p>
          <p className="text-[9.5pt] text-neutral-700">({e.options.join(" / ")})</p>
        </>
      );
    case "error-correction": {
      const [a, b] = blandaFast([e.errorWord, e.correctWord], e.id);
      const i = e.sentence.indexOf(e.errorWord);
      if (i < 0) return <p>{e.sentence} <strong>( {a} / {b} )</strong></p>;
      return (
        <p>
          {e.sentence.slice(0, i)}
          <strong>
            ( {a} / {b} )
          </strong>
          {e.sentence.slice(i + e.errorWord.length)}
        </p>
      );
    }
    case "categorization":
      return (
        <>
          <p className="mb-1">{blandaFast(e.items, e.id).join(" · ")}</p>
          <table className="w-full border-collapse text-[10pt]">
            <thead>
              <tr>
                {e.categories.map((k) => (
                  <th key={k} className="border border-neutral-500 px-2 py-1 text-left">
                    {k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(2, Math.ceil(e.items.length / e.categories.length) + 1) }).map((_, r) => (
                <tr key={r}>
                  {e.categories.map((k) => (
                    <td key={k} className="h-7 border border-neutral-500" />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    case "sentence-analysis":
      return (
        <>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {e.parts.map((p) => (
              <span key={p.text} className="inline-flex flex-col items-center">
                <span className="rounded border border-neutral-500 px-1.5">{p.text}</span>
                <span className={`mt-4 w-24 ${LINJE}`} />
              </span>
            ))}
          </div>
          <p className="mt-1 text-[9pt] text-neutral-700">Välj bland: {e.roleOptions.join(", ")}</p>
        </>
      );
    case "markera":
      return (
        <p className="leading-loose">
          {delaMarkera(e.text)
            .map((b) => b.fore + b.ord + b.efter)
            .join(" ")}
        </p>
      );
    case "dela":
      return <p className="font-mono text-[15pt] tracking-[0.35em]">{delningar(e.word).ord}</p>;
    case "ordna": {
      let delar = blandaFast(e.parts, e.id);
      if (delar.every((d, i) => d === e.parts[i])) delar = [...delar.slice(1), delar[0]];
      return (
        <>
          <div className={e.meningar ? "space-y-1" : "flex flex-wrap gap-2"}>
            {delar.map((d, i) => (
              <span key={i} className={e.meningar ? "block" : "rounded border border-neutral-500 px-1.5"}>
                {e.meningar ? `☐ ${d}` : d}
              </span>
            ))}
          </div>
          {e.meningar ? (
            <p className="mt-1 text-[9pt] text-neutral-700">Skriv 1, 2, 3 … i rutorna.</p>
          ) : (
            <p className={`mt-5 ${LINJE}`} />
          )}
        </>
      );
    }
  }
}

function facit(e: GrammarExercise): string {
  switch (e.type) {
    case "multiple-choice":
      return `${bokstav(e.correct)}. ${e.options[e.correct]}`;
    case "fill-in-blank":
      return e.correct;
    case "error-correction":
      return e.correctWord;
    case "categorization":
      return e.categories.map((k) => `${k}: ${e.items.filter((i) => e.correctMapping[i] === k).join(", ")}`).join(" | ");
    case "sentence-analysis":
      return e.parts.map((p) => `${p.text} = ${p.role}`).join(", ");
    case "markera":
      return delaMarkera(e.text)
        .filter((b) => b.ratt)
        .map((b) => b.ord)
        .join(", ");
    case "dela":
      return e.word.split("|").join(" | ");
    case "ordna":
      if (e.meningar) return e.parts.map((p, i) => `${i + 1}. ${p}`).join(" ");
      return e.parts.join(" ").replace(/^./, (c) => c.toUpperCase()) + (e.end ?? "");
  }
}

export function GrammatikUtskrift({ titel, stadium, ovningar }: { titel: string; stadium: string; ovningar: GrammarExercise[] }) {
  const [medFacit, setMedFacit] = useState(true);
  const typer = (Object.keys(RUBRIK) as GrammarExercise["type"][]).filter((t) => ovningar.some((e) => e.type === t));
  let nr = 0;
  const numrerade = typer.map((t) => ({ typ: t, lista: ovningar.filter((e) => e.type === t).map((e) => ({ e, nr: ++nr })) }));

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-4 print:hidden">
        <Button onClick={() => window.print()}>
          <Printer className="h-4 w-4" /> Skriv ut
        </Button>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={medFacit} onChange={(e) => setMedFacit(e.target.checked)} /> Facit på egen sida sist
        </label>
        <span className="text-sm text-neutral-500">{ovningar.length} uppgifter</span>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-[11pt] leading-relaxed text-black shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <div className="mb-5 flex justify-between gap-4 border-b border-black pb-2">
          <div>
            <p className="text-[9pt]">Grammatik · {stadium}</p>
            <h1 className="text-[18pt] font-bold">{titel}</h1>
          </div>
          <p className="self-end text-[10pt]">Namn: ______________________</p>
        </div>

        {numrerade.map(({ typ, lista }, di) => (
          <section key={typ} className="mb-5">
            <h2 className="mb-2 text-[13pt] font-bold">
              Del {bokstav(di)} – {RUBRIK[typ]}
            </h2>
            <ol className="space-y-3">
              {lista.map(({ e, nr }) => (
                <li key={e.id} className="break-inside-avoid">
                  <p className="text-[10pt] italic">
                    <span className="mr-1 font-bold not-italic">{nr}.</span>
                    {STANDARD.has(e.instruction) ? "" : papper(e.instruction)}
                  </p>
                  <div className="pl-5">
                    <Uppgift e={e} />
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        {medFacit && (
          <section className="mt-10 break-before-page border-t-2 border-black pt-4 print:mt-0 print:border-0 print:pt-0">
            <h2 className="mb-3 text-[14pt] font-bold">Facit – {titel}</h2>
            <ol className="space-y-1 text-[10pt]">
              {numrerade.flatMap(({ lista }) =>
                lista.map(({ e, nr }) => (
                  <li key={e.id}>
                    <strong>{nr}.</strong> {facit(e)}
                  </li>
                )),
              )}
            </ol>
          </section>
        )}
      </div>
    </div>
  );
}
