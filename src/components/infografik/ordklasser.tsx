import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";
import { Ordklassdetektiv, type DetektivOrd } from "./ordklassdetektiv";

export type Ordklass =
  | "substantiv"
  | "verb"
  | "adjektiv"
  | "adverb"
  | "pronomen"
  | "rakneord"
  | "preposition"
  | "konjunktion"
  | "subjunktion"
  | "interjektion";

interface Info {
  namn: string;
  farg: Farg;
  bojlig: boolean;
  test: string;
  exempel: string;
  /** Från vilket stadium ordklassen tas upp. */
  fran: AgeGroup;
}

export const ORDKLASSER: Record<Ordklass, Info> = {
  substantiv: { namn: "Substantiv", farg: "bla", bojlig: true, test: "Kan du sätta en eller ett framför?", exempel: "en hund, ett hus, Malmö, glädje", fran: "lagstadiet" },
  verb: { namn: "Verb", farg: "rod", bojlig: true, test: "Kan du sätta att eller jag framför?", exempel: "springa, läser, sov, har", fran: "lagstadiet" },
  adjektiv: { namn: "Adjektiv", farg: "gron", bojlig: true, test: "Kan du jämföra: stor – större – störst?", exempel: "glad, röd, snabb, spännande", fran: "lagstadiet" },
  pronomen: { namn: "Pronomen", farg: "lila", bojlig: true, test: "Kan ordet stå i stället för ett namn eller en sak?", exempel: "jag, hon, de, min, den här", fran: "mellanstadiet" },
  rakneord: { namn: "Räkneord", farg: "orange", bojlig: true, test: "Svarar ordet på hur många? eller vilken i ordningen?", exempel: "tre, hundra, första, tionde", fran: "mellanstadiet" },
  adverb: { namn: "Adverb", farg: "turkos", bojlig: false, test: "Svarar ordet på hur? var? när? hur mycket?", exempel: "snabbt, här, ofta, mycket", fran: "mellanstadiet" },
  preposition: { namn: "Preposition", farg: "gul", bojlig: false, test: "Visar ordet var något är? Tänk: katten ___ lådan.", exempel: "i, på, under, efter, med", fran: "mellanstadiet" },
  konjunktion: { namn: "Konjunktion", farg: "indigo", bojlig: false, test: "Binder ordet ihop två lika delar?", exempel: "och, men, eller, utan, för", fran: "mellanstadiet" },
  subjunktion: { namn: "Subjunktion", farg: "rosa", bojlig: false, test: "Inleder ordet en bisats?", exempel: "att, eftersom, när, om, fast", fran: "hogstadiet" },
  interjektion: { namn: "Interjektion", farg: "gra", bojlig: false, test: "Är ordet ett utrop eller ljud?", exempel: "oj, hej, aj, hurra, pang", fran: "hogstadiet" },
};

const ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const syns = (k: Ordklass, stadie: AgeGroup) => ORDNING.indexOf(ORDKLASSER[k].fran) <= ORDNING.indexOf(stadie);

const MENING_ENKEL: DetektivOrd[] = [
  ["Den", null], ["glada", "adjektiv"], ["hunden", "substantiv"], ["springer", "verb"], ["i", null], ["den", null], ["gröna", "adjektiv"], ["parken", "substantiv"], [".", null],
];
const MENING_FULL: DetektivOrd[] = [
  ["Min", "pronomen"], ["lilla", "adjektiv"], ["katt", "substantiv"], ["sov", "verb"], ["lugnt", "adverb"], ["på", "preposition"], ["soffan", "substantiv"],
  ["eftersom", "subjunktion"], ["det", "pronomen"], ["regnade", "verb"], [",", null], ["men", "konjunktion"], ["oj", "interjektion"], [",", null], ["två", "rakneord"],
  ["timmar", "substantiv"], ["senare", "adverb"], ["vaknade", "verb"], ["hon", "pronomen"], ["!", null],
];

function Kort({ k }: { k: Ordklass }) {
  const o = ORDKLASSER[k];
  return (
    <div className={`rounded-xl border-2 p-4 ${FARG[o.farg]}`}>
      <p className="text-lg font-bold">{o.namn}</p>
      <p className="mt-1 text-sm font-medium">{o.test}</p>
      <p className="mt-2 text-sm italic opacity-80">{o.exempel}</p>
    </div>
  );
}

export function OrdklasserInfografik({ stadie }: { stadie: AgeGroup }) {
  const alla = (Object.keys(ORDKLASSER) as Ordklass[]).filter((k) => syns(k, stadie));
  const bojliga = alla.filter((k) => ORDKLASSER[k].bojlig);
  const obojliga = alla.filter((k) => !ORDKLASSER[k].bojlig);
  const enkel = stadie === "lagstadiet";
  const mening = enkel
    ? MENING_ENKEL
    : MENING_FULL.map(([ord, k]): DetektivOrd => [ord, k && syns(k as Ordklass, stadie) ? k : null]);

  return (
    <Infografik
      titel={enkel ? "Tre viktiga ordklasser" : `${alla.length} ordklasser – och hur du känner igen dem`}
      ingress="Varje ordklass har ett eget test. Prova testet på ordet du är osäker på."
    >
      {enkel ? (
        <div className="grid gap-3 sm:grid-cols-3">
          {alla.map((k) => (
            <Kort key={k} k={k} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Böjliga ord – ändrar form</p>
            <p className="mb-3 text-sm text-neutral-500">katt → katter, sover → sov, glad → gladare</p>
            <div className="grid gap-3">
              {bojliga.map((k) => (
                <Kort key={k} k={k} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Oböjliga ord – ser alltid likadana ut</p>
            <p className="mb-3 text-sm text-neutral-500">på, och, eftersom, oj</p>
            <div className="grid gap-3">
              {obojliga.map((k) => (
                <Kort key={k} k={k} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-4 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="mb-1 font-semibold text-neutral-900 dark:text-white">Ordklassdetektiven</p>
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">Klicka på ett ord för att se vilken ordklass det är – eller visa alla färger på en gång.</p>
        <Ordklassdetektiv mening={mening} ordklasser={ORDKLASSER} />
      </div>

      {!enkel && (
        <p className="mt-4 text-sm text-neutral-500">
          Samma ord kan byta ordklass: <i>Jag åker <b>till</b> stan</i> (preposition) – <i>Jag vill ha en kaka <b>till</b></i> (adverb). Testa alltid ordet i
          just den meningen. Artiklarna <i>en, ett, den, det, de</i> räknas ibland som en egen ordklass.
        </p>
      )}
    </Infografik>
  );
}
