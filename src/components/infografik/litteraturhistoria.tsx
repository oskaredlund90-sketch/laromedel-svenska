import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";

interface Epok {
  namn: string;
  fran: number;
  till: number;
  ar: string;
  kannetecken: string[];
  namnkunniga: string[];
  farg: Farg;
  /** Bar-färg för den proportionella tidsaxeln. */
  bar: string;
}

const EPOKER: Epok[] = [
  { namn: "Medeltiden", fran: 1200, till: 1500, ar: "ca 1200–1500", kannetecken: ["Kyrkan styr", "Latin och fornsvenska", "Ballader"], namnkunniga: ["Heliga Birgitta", "Erikskrönikan"], farg: "gra", bar: "bg-neutral-400" },
  { namn: "Stormaktstiden och 1700-talet", fran: 1600, till: 1800, ar: "ca 1600–1800", kannetecken: ["Plikt och religion", "Upplysning och förnuft", "Satir och visor"], namnkunniga: ["Bellman", "Dalin", "Lenngren"], farg: "gul", bar: "bg-amber-400" },
  { namn: "Romantiken", fran: 1810, till: 1850, ar: "ca 1810–1850", kannetecken: ["Känsla och fantasi", "Natur och historia", "Geniet"], namnkunniga: ["Tegnér", "Geijer", "Almqvist"], farg: "rosa", bar: "bg-pink-400" },
  { namn: "Realismen", fran: 1850, till: 1890, ar: "ca 1850–1890", kannetecken: ["Verkligheten som den är", "Samhällskritik", "Debatt"], namnkunniga: ["Strindberg", "Benedictsson"], farg: "bla", bar: "bg-sky-500" },
  { namn: "Sekelskiftet och modernismen", fran: 1890, till: 1940, ar: "ca 1890–1940", kannetecken: ["Skönhet och hembygd", "Nya former", "Arbetarlitteratur"], namnkunniga: ["Lagerlöf", "Söderberg", "Boye", "Martinson"], farg: "lila", bar: "bg-violet-500" },
  { namn: "Efterkrigstiden", fran: 1940, till: 1970, ar: "ca 1940–1970", kannetecken: ["Ångest efter kriget", "Barnboken blomstrar", "Politisk 60-tal"], namnkunniga: ["Astrid Lindgren", "Tranströmer"], farg: "gron", bar: "bg-emerald-500" },
  { namn: "Nutida litteratur", fran: 1970, till: 2026, ar: "ca 1970–nu", kannetecken: ["Deckare", "Identitet och migration", "Många röster"], namnkunniga: ["Mankell", "Khemiri", "Stridsberg", "Backman"], farg: "orange", bar: "bg-orange-500" },
];

const EPOKER_MELLAN: Epok[] = [
  { ...EPOKER[0], namn: "Den äldsta litteraturen", fran: 1200, till: 1800, ar: "ca 1200–1800", kannetecken: ["Religiösa texter", "Lagar", "Visor"], namnkunniga: ["Heliga Birgitta", "Bellman"] },
  { ...EPOKER[2], kannetecken: ["Känslor", "Natur", "Hjältesagor"], namnkunniga: ["Tegnér"] },
  { ...EPOKER[3], namn: "Realismen och det moderna genombrottet", till: 1900, ar: "ca 1850–1900", kannetecken: ["Verkligheten", "Orättvisor"], namnkunniga: ["Strindberg", "Lagerlöf"] },
  { ...EPOKER[6], namn: "1900-talet och vår tid", fran: 1900, ar: "ca 1900–nu", kannetecken: ["Barnböcker", "Deckare", "Dikter"], namnkunniga: ["Astrid Lindgren", "Tranströmer", "Mankell"] },
];

const BARNBOCKER = [
  { ar: 1910, bok: "Tomtebobarnen", av: "Elsa Beskow", farg: "gron" as Farg },
  { ar: 1945, bok: "Pippi Långstrump", av: "Astrid Lindgren", farg: "orange" as Farg },
  { ar: 1972, bok: "God natt, Alfons Åberg", av: "Gunilla Bergström", farg: "bla" as Farg },
  { ar: 1984, bok: "Pannkakstårtan", av: "Sven Nordqvist", farg: "gul" as Farg },
];

export function LitteraturhistoriaInfografik({ stadie }: { stadie: AgeGroup }) {
  if (stadie === "lagstadiet")
    return (
      <Infografik titel="Barnböckernas tidslinje" ingress="Böcker som barn i Sverige har läst i över hundra år.">
        <ol className="relative grid gap-4 sm:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-1 rounded-full bg-neutral-200 sm:block dark:bg-neutral-700" />
          {BARNBOCKER.map((b) => (
            <li key={b.bok} className="relative">
              <p className="relative z-10 mx-auto mb-3 flex h-12 w-20 items-center justify-center rounded-full bg-neutral-900 font-bold text-white dark:bg-white dark:text-neutral-900">{b.ar}</p>
              <div className={`rounded-xl border-2 p-3 text-center ${FARG[b.farg]}`}>
                <p className="font-bold">{b.bok}</p>
                <p className="text-sm">{b.av}</p>
              </div>
            </li>
          ))}
        </ol>
      </Infografik>
    );

  const epoker = stadie === "mellanstadiet" ? EPOKER_MELLAN : EPOKER;
  const start = 1200;
  const slut = 2026;
  const pos = (ar: number) => ((ar - start) / (slut - start)) * 100;

  return (
    <Infografik titel="Litteraturens epoker" ingress="Varje epok svarade på sin tid. Lär dig ordningen, ett par kännetecken och några namn per epok.">
      {/* Proportionell tidsaxel */}
      <div className="mb-8">
        <div className="relative h-5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
          {epoker.map((e) => (
            <div key={e.namn} title={`${e.namn} ${e.ar}`} className={`absolute top-0 h-full ${e.bar}`} style={{ left: `${pos(e.fran)}%`, width: `${pos(e.till) - pos(e.fran)}%` }} />
          ))}
        </div>
        <div className="relative mt-1 h-4 text-xs text-neutral-500">
          {[1200, 1400, 1600, 1800, 2000].map((ar) => (
            <span key={ar} className="absolute -translate-x-1/2" style={{ left: `${pos(ar)}%` }}>
              {ar}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-neutral-500">Lägg märke till hur epokerna blir kortare och kortare – ju närmare vår tid, desto snabbare förändras litteraturen.</p>
      </div>

      {/* Epokkort */}
      <ol className="relative space-y-4 border-l-4 border-neutral-200 pl-6 dark:border-neutral-700">
        {epoker.map((e, i) => (
          <li key={e.namn} className="relative">
            <span className={`absolute -left-[38px] top-3 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${e.bar}`}>{i + 1}</span>
            <div className={`rounded-xl border-2 p-4 ${FARG[e.farg]}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-lg font-bold">{e.namn}</p>
                <p className="text-sm font-medium opacity-80">{e.ar}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {e.kannetecken.map((k) => (
                  <span key={k} className="rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-semibold dark:bg-black/30">
                    {k}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-sm">
                <span className="opacity-70">Läs:</span> {e.namnkunniga.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {stadie !== "mellanstadiet" && (
        <p className="mt-6 text-sm text-neutral-500">
          Minnesregel för ordningen: <b>M</b>unkar <b>S</b>jöng <b>R</b>oliga <b>R</b>im <b>S</b>ent <b>E</b>fter <b>N</b>atten – Medeltid, Stormaktstid,
          Romantik, Realism, Sekelskifte, Efterkrigstid, Nutid.
        </p>
      )}
    </Infografik>
  );
}
