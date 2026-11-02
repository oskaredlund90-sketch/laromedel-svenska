import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";

function Etikett({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 first:mt-0 dark:text-neutral-400">{children}</p>;
}

function Ruta({ farg, rubrik, children }: { farg: Farg; rubrik: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border-2 p-4 ${FARG[farg]}`}>
      <p className="font-bold">{rubrik}</p>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}

/* ---------------- Tala och lyssna ---------------- */

export function TalaLyssnaInfografik({ stadie }: { stadie: AgeGroup }) {
  const enkel = stadie === "lagstadiet";
  return (
    <Infografik titel="Prata inför andra – och lyssna på riktigt" ingress="En bra presentation har en tydlig början, mitt och slut. En bra lyssnare visar att hen lyssnar.">
      <Etikett>Presentationen</Etikett>
      <div className="grid gap-3 sm:grid-cols-3">
        <Ruta farg="gul" rubrik="Inledning">{enkel ? "Säg vad du ska prata om." : "Fånga publiken: en fråga, en bild eller en överraskande fakta. Säg vad du ska ta upp."}</Ruta>
        <Ruta farg="bla" rubrik="Huvuddel">{enkel ? "Berätta två eller tre saker." : "Två till fyra delar i tydlig ordning. Exempel gör det lätt att minnas."}</Ruta>
        <Ruta farg="gron" rubrik="Avslutning">{enkel ? "Säg ”Tack för att ni lyssnade!”" : "Sammanfatta det viktigaste och avsluta så att publiken minns. Öppna för frågor."}</Ruta>
      </div>

      <Etikett>Röst och kropp</Etikett>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Ruta farg="lila" rubrik="Blicken">Titta på publiken – flytta blicken runt rummet.</Ruta>
        <Ruta farg="orange" rubrik="Rösten">Tala lugnt och tydligt. Pausa efter det viktiga.</Ruta>
        <Ruta farg="turkos" rubrik="Kroppen">Stå stadigt, händerna fria. Gester förstärker.</Ruta>
        <Ruta farg="gra" rubrik="Stödord">{enkel ? "En lapp med några ord som hjälp." : "Stödord på kort – aldrig hela manuset."}</Ruta>
      </div>

      <Etikett>Aktivt lyssnande</Etikett>
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ["Titta", "rosa"],
            ["Visa att du hänger med", "bla"],
            ["Låt talaren tala klart", "gul"],
            [enkel ? "Fråga" : "Ställ en följdfråga", "gron"],
            ...(enkel ? [] : [["Sammanfatta: ”Så du menar att …”", "lila"]]),
          ] as [string, Farg][]
        ).map(([text, farg], i) => (
          <span key={text} className="flex items-center gap-2">
            {i > 0 && <span className="text-neutral-400">→</span>}
            <span className={`rounded-lg border-2 px-3 py-1.5 text-sm font-semibold ${FARG[farg]}`}>{text}</span>
          </span>
        ))}
      </div>
    </Infografik>
  );
}

/* ---------------- Ordkunskap ---------------- */

const ORDNAT: Record<"enkel" | "full", { ord: string; grenar: { typ: string; ord: string; farg: Farg }[] }> = {
  enkel: {
    ord: "stor",
    grenar: [
      { typ: "Samma betydelse", ord: "jättestor, enorm", farg: "bla" },
      { typ: "Motsats", ord: "liten", farg: "rod" },
      { typ: "Jämför", ord: "större, störst", farg: "gul" },
      { typ: "I en mening", ord: "Elefanten är stor.", farg: "gron" },
    ],
  },
  full: {
    ord: "glad",
    grenar: [
      { typ: "Synonymer", ord: "lycklig, förtjust, uppspelt", farg: "bla" },
      { typ: "Antonym", ord: "ledsen, nedstämd", farg: "rod" },
      { typ: "Ordfamilj", ord: "glädje, glädjas, glädjande", farg: "gul" },
      { typ: "Sammansättning", ord: "glädjestrålande, livsglad", farg: "orange" },
      { typ: "Uttryck", ord: "glad i hågen, glad som en lärka", farg: "lila" },
      { typ: "Starkare och starkare", ord: "glad – lycklig – överlycklig", farg: "gron" },
    ],
  },
};

export function OrdkunskapInfografik({ stadie }: { stadie: AgeGroup }) {
  const n = ORDNAT[stadie === "lagstadiet" ? "enkel" : "full"];
  return (
    <Infografik titel="Lär dig ett ord på riktigt" ingress="Ett ord sitter först när du känner dess grannar – och har använt det själv.">
      <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <div className="grid gap-3">
          {n.grenar.slice(0, Math.ceil(n.grenar.length / 2)).map((g) => (
            <Ruta key={g.typ} farg={g.farg} rubrik={g.typ}>
              <i>{g.ord}</i>
            </Ruta>
          ))}
        </div>
        <p className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-neutral-900 font-serif text-3xl font-bold text-white shadow-lg dark:bg-white dark:text-neutral-900">{n.ord}</p>
        <div className="grid gap-3">
          {n.grenar.slice(Math.ceil(n.grenar.length / 2)).map((g) => (
            <Ruta key={g.typ} farg={g.farg} rubrik={g.typ}>
              <i>{g.ord}</i>
            </Ruta>
          ))}
        </div>
      </div>
      <Etikett>Fyra steg för ett nytt ord</Etikett>
      <ol className="grid gap-2 sm:grid-cols-4">
        {[
          ["Se och hör", "Läs ordet och säg det högt."],
          ["Förstå", "Vad betyder det? Titta på sammanhanget."],
          ["Förklara", "Säg betydelsen med egna ord."],
          ["Använd", "Skriv en egen mening – och använd ordet i veckan."],
        ].map(([namn, text], i) => (
          <li key={namn} className="rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">{i + 1}</span>
            <p className="font-bold text-neutral-900 dark:text-white">{namn}</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{text}</p>
          </li>
        ))}
      </ol>
    </Infografik>
  );
}

/* ---------------- SVA ---------------- */

const TIDSPREP: [string, string][] = [
  ["i dag, i morgon, i går", "dagar runt nu"],
  ["på måndag, på morgonen", "veckodagar och tid på dygnet"],
  ["i maj, i sommar", "månader och årstider"],
  ["om en vecka", "framtid – hur länge tills"],
  ["för en vecka sedan", "dåtid – hur länge sedan"],
  ["i två timmar", "hur länge något pågår"],
];

const REGISTER: [string, string][] = [
  ["typ", "ungefär, till exempel"],
  ["kolla", "undersöka, titta på"],
  ["fett bra", "mycket bra"],
  ["grej", "sak, företeelse"],
  ["snacka om", "diskutera"],
];

const PARTIKEL: [string, string, string][] = [
  ["hålla", "hålla med", "tycka likadant"],
  ["komma", "komma ihåg", "minnas"],
  ["ta", "ta upp", "nämna, diskutera"],
  ["se", "se ut", "verka, ha ett utseende"],
];

export function SvaInfografik({ stadie }: { stadie: AgeGroup }) {
  const ordning: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
  const minst = (f: AgeGroup) => ordning.indexOf(stadie) >= ordning.indexOf(f);
  return (
    <Infografik titel="Svenskans knepiga delar" ingress="Det här brukar vara svårast när man lär sig svenska – och det går att träna.">
      <div className="grid gap-3 md:grid-cols-2">
        <Ruta farg="rod" rubrik="Verbet på plats två">
          <p className="font-serif text-base">
            Jag <b>spelar</b> fotboll i dag.
            <br />I dag <b>spelar</b> jag fotboll.
          </p>
          <p className="mt-1 opacity-80">Börjar meningen med något annat än subjektet hamnar subjektet efter verbet.</p>
        </Ruta>
        <Ruta farg="bla" rubrik="En eller ett?">
          <p>
            Ungefär 3 av 4 substantiv är <b>en</b>-ord. Lär dig ordet tillsammans med artikeln: <i>en stol, ett bord</i>.
          </p>
          <p className="mt-1 opacity-80">Ord på -ing, -het, -else och -tion är oftast en-ord: en tidning, en frihet.</p>
        </Ruta>
      </div>

      {minst("mellanstadiet") && (
        <>
          <Etikett>Prepositioner för tid</Etikett>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {TIDSPREP.map(([ex, nar]) => (
              <div key={ex} className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="font-serif font-semibold text-neutral-900 dark:text-white">{ex}</p>
                <p className="text-xs text-neutral-500">{nar}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {minst("hogstadiet") && (
        <>
          <Etikett>Partikelverb – en liten partikel ändrar allt</Etikett>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {PARTIKEL.map(([verb, med, bet]) => (
              <Ruta key={med} farg="lila" rubrik={med}>
                <span className="opacity-70">{verb} ≠ {med}</span>
                <br />= {bet}
              </Ruta>
            ))}
          </div>
          <p className="mt-2 text-sm text-neutral-500">Partikeln är betonad: hålla <b>med</b>, komma <b>i</b>håg.</p>
        </>
      )}

      {minst("mellanstadiet") && (
        <>
          <Etikett>Vardagssvenska → skolsvenska</Etikett>
          <div className="grid gap-2 sm:grid-cols-5">
            {REGISTER.map(([vardag, skola]) => (
              <div key={vardag} className="rounded-lg border border-neutral-200 bg-white p-3 text-center dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-sm text-neutral-500 line-through">{vardag}</p>
                <p className="font-semibold text-neutral-900 dark:text-white">{skola}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </Infografik>
  );
}
