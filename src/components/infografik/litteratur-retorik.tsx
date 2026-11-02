import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";

/* ---------------- Litteraturbegrepp ---------------- */

const KURVA: { namn: string; text: string; x: number; y: number; ankare?: "start" | "end" }[] = [
  { namn: "Anslag", text: "Första meningarna väcker nyfikenhet.", x: 40, y: 150 },
  { namn: "Presentation", text: "Vi lär känna person, miljö och problem.", x: 140, y: 140 },
  { namn: "Konfliktupptrappning", text: "Problemet växer, spänningen ökar.", x: 280, y: 95, ankare: "start" },
  { namn: "Klimax", text: "Spänningen är som störst – vändpunkten.", x: 420, y: 25 },
  { namn: "Avtoning", text: "Konflikten löses eller lämnas öppen.", x: 560, y: 145, ankare: "end" },
];

const PERSPEKTIV: { namn: string; ex: string; vet: string; farg: Farg }[] = [
  { namn: "Jag-berättare", ex: "Jag öppnade dörren och frös till.", vet: "Vet bara vad jaget ser, tänker och känner.", farg: "rosa" },
  { namn: "Tredjeperson, begränsad", ex: "Sara öppnade dörren. Hon frös till.", vet: "Följer en person – vi vet vad hon tänker.", farg: "bla" },
  { namn: "Allvetande berättare", ex: "Sara frös – utan att veta att Ali redan var där.", vet: "Vet allt om alla, även framtiden.", farg: "lila" },
];

const TEKNIKER: [string, string, Farg][] = [
  ["Tillbakablick", "Berättelsen hoppar bakåt i tiden.", "gul"],
  ["Framåtblick", "Läsaren får veta något som händer senare.", "orange"],
  ["Parallellhandling", "Två händelseförlopp berättas omväxlande.", "turkos"],
  ["Öppet slut", "Läsaren får själv fundera på hur det går.", "gron"],
  ["Symbol", "En sak som står för något större (en duva = fred).", "indigo"],
  ["Miljöbeskrivning", "Platsen speglar stämningen eller personen.", "gra"],
];

export function LitteraturbegreppInfografik({ stadie }: { stadie: AgeGroup }) {
  return (
    <Infografik titel="Så är en berättelse byggd" ingress="Den dramaturgiska kurvan, berättarperspektiven och berättartekniker – samma verktyg i nästan alla romaner och filmer.">
      <div>
        <svg viewBox="0 0 620 190" className="h-auto w-full" role="img" aria-label="Dramaturgiska kurvan">
          <polyline points={KURVA.map((k) => `${k.x},${k.y}`).join(" ")} fill="none" strokeWidth="4" strokeLinejoin="round" className="stroke-rose-500" />
          {KURVA.map((k) => (
            <g key={k.namn}>
              <circle cx={k.x} cy={k.y} r="7" className="fill-white stroke-rose-500" strokeWidth="3" />
              <text x={k.x + (k.ankare === "start" ? 10 : k.ankare === "end" ? 12 : 0)} y={k.y + 28} textAnchor={k.ankare === "start" ? "start" : k.ankare === "end" ? "end" : "middle"} className="fill-neutral-800 text-[13px] font-bold dark:fill-neutral-100">
                {k.namn}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <ol className="mt-2 grid gap-2 text-sm sm:grid-cols-5">
        {KURVA.map((k, i) => (
          <li key={k.namn} className="rounded-lg bg-white p-2 dark:bg-neutral-900">
            <b>
              {i + 1}. {k.namn}
            </b>
            <br />
            <span className="text-neutral-600 dark:text-neutral-400">{k.text}</span>
          </li>
        ))}
      </ol>

      <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Vem berättar?</p>
      <div className="grid gap-3 md:grid-cols-3">
        {PERSPEKTIV.map((p) => (
          <div key={p.namn} className={`rounded-xl border-2 p-4 ${FARG[p.farg]}`}>
            <p className="font-bold">{p.namn}</p>
            <p className="mt-1 font-serif italic">”{p.ex}”</p>
            <p className="mt-2 text-sm opacity-80">{p.vet}</p>
          </div>
        ))}
      </div>

      <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Berättartekniker</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TEKNIKER.slice(0, stadie === "gymnasiet" ? 6 : 4).map(([namn, text, farg]) => (
          <div key={namn} className={`rounded-xl border-2 p-3 ${FARG[farg]}`}>
            <p className="font-bold">{namn}</p>
            <p className="text-sm">{text}</p>
          </div>
        ))}
      </div>
    </Infografik>
  );
}

/* ---------------- Retorik ---------------- */

const ARBETSGANG: { namn: string; latin: string; text: string }[] = [
  { namn: "Förberedelse", latin: "intellectio", text: "Vem är publiken? Vad är syftet?" },
  { namn: "Insamling", latin: "inventio", text: "Samla fakta och argument." },
  { namn: "Ordning", latin: "dispositio", text: "Inledning, huvuddel, avslutning." },
  { namn: "Formulering", latin: "elocutio", text: "Välj ord, bilder och stilfigurer." },
  { namn: "Inlärning", latin: "memoria", text: "Öva – stödord i stället för manus." },
  { namn: "Framförande", latin: "actio", text: "Röst, blick och kroppsspråk." },
];

export function RetorikInfografik({ stadie }: { stadie: AgeGroup }) {
  const enkel = stadie === "mellanstadiet";
  return (
    <Infografik titel="Så övertygar du" ingress="Tre sätt att påverka publiken – och en arbetsgång som gör talet färdigt.">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_1.2fr]">
        <svg viewBox="0 0 300 260" className="mx-auto h-auto w-full max-w-xs" role="img" aria-label="Retorikens triangel: ethos, pathos, logos">
          <polygon points="150,20 280,240 20,240" className="fill-neutral-100 stroke-neutral-400 dark:fill-neutral-800" strokeWidth="3" />
          <circle cx="150" cy="30" r="30" className="fill-sky-500" />
          <text x="150" y="35" textAnchor="middle" className="fill-white text-[15px] font-bold">Ethos</text>
          <circle cx="40" cy="225" r="30" className="fill-rose-500" />
          <text x="40" y="230" textAnchor="middle" className="fill-white text-[15px] font-bold">Pathos</text>
          <circle cx="260" cy="225" r="30" className="fill-emerald-600" />
          <text x="260" y="230" textAnchor="middle" className="fill-white text-[15px] font-bold">Logos</text>
          <text x="150" y="160" textAnchor="middle" className="fill-neutral-700 text-[14px] font-semibold dark:fill-neutral-200">Publiken</text>
        </svg>
        <div className="space-y-3">
          <div className={`rounded-xl border-2 p-3 ${FARG.bla}`}>
            <b>Ethos – trovärdighet.</b> {enkel ? "Visa att du vet vad du pratar om." : "Varför ska publiken lita på dig? Kunskap, erfarenhet, ärlighet."}
          </div>
          <div className={`rounded-xl border-2 p-3 ${FARG.rod}`}>
            <b>Pathos – känslor.</b> {enkel ? "Berätta ett exempel som berör." : "Väck känslor med berättelser, bilder och starka ord."}
          </div>
          <div className={`rounded-xl border-2 p-3 ${FARG.gron}`}>
            <b>Logos – förnuft.</b> {enkel ? "Ge fakta och skäl." : "Fakta, statistik och logiska resonemang."}
          </div>
        </div>
      </div>

      <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
        {enkel ? "Så bygger du ett tal" : "Retorikens arbetsgång"}
      </p>
      {enkel ? (
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Inledning", "Fånga publiken och säg vad du tycker.", "gul"],
            ["Argument", "Två eller tre skäl – det starkaste sist.", "bla"],
            ["Avslutning", "Upprepa din åsikt och avsluta starkt.", "gron"],
          ].map(([namn, text, farg]) => (
            <div key={namn} className={`rounded-xl border-2 p-4 ${FARG[farg as Farg]}`}>
              <p className="font-bold">{namn}</p>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      ) : (
        <ol className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {ARBETSGANG.map((a, i) => (
            <li key={a.namn} className="relative rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
              <span className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">{i + 1}</span>
              <p className="font-bold text-neutral-900 dark:text-white">{a.namn}</p>
              <p className="text-xs italic text-neutral-500">{a.latin}</p>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{a.text}</p>
            </li>
          ))}
        </ol>
      )}

      {stadie === "gymnasiet" && (
        <>
          <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Argumentationskedjan</p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {(
              [
                ["Tes", "rosa"],
                ["Argument", "bla"],
                ["Belägg", "gron"],
                ["Motargument", "orange"],
                ["Bemötande", "lila"],
                ["Slutsats", "gra"],
              ] as [string, Farg][]
            ).map(([namn, farg], i) => (
              <span key={namn} className="flex items-center gap-2">
                {i > 0 && <span className="text-neutral-400">→</span>}
                <span className={`rounded-lg border-2 px-3 py-1.5 font-semibold ${FARG[farg]}`}>{namn}</span>
              </span>
            ))}
          </div>
        </>
      )}
    </Infografik>
  );
}
