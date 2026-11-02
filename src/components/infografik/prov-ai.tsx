import Link from "next/link";
import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";

function Etikett({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 first:mt-0 dark:text-neutral-400">{children}</p>;
}

/* ---------------- Nationella prov ---------------- */

type Del = { bokstav: string; namn: string; text: string; trana: { href: string; text: string }[]; farg: Farg };

/** Sammanfattar delproven så som de beskrivs längre ner på sidan. */
const DELPROV: Record<AgeGroup, { rubrik: string; nar?: string; delar: Del[] }> = {
  lagstadiet: {
    rubrik: "Provet i årskurs 3",
    nar: "Du gör delarna vid olika tillfällen – inte allt på en dag.",
    delar: [
      { bokstav: "", namn: "Läsa", text: "Läs texter och svara på frågor om vad som händer och vad ord betyder.", trana: [{ href: "lasforstaelse", text: "Läsförståelse" }], farg: "bla" },
      { bokstav: "", namn: "Skriva", text: "Skriv en berättelse med början, mitt och slut.", trana: [{ href: "skrivverkstad", text: "Skrivverkstad" }], farg: "gron" },
      { bokstav: "", namn: "Berätta", text: "Återberätta eller prata om ett ämne i en liten grupp.", trana: [{ href: "tala-lyssna", text: "Tala och lyssna" }], farg: "gul" },
    ],
  },
  mellanstadiet: {
    rubrik: "Provet i årskurs 6",
    delar: [
      { bokstav: "A", namn: "Tala", text: "Kort förberedd presentation och ett samtal i liten grupp.", trana: [{ href: "tala-lyssna", text: "Tala och lyssna" }], farg: "gul" },
      { bokstav: "B", namn: "Läsa", text: "Skönlitteratur och sakprosa – förstå, dra slutsatser, tolka.", trana: [{ href: "lasforstaelse", text: "Läsförståelse" }, { href: "lasstrategier", text: "Lässtrategier" }], farg: "bla" },
      { bokstav: "C", namn: "Skriva", text: "En längre berättande eller argumenterande text.", trana: [{ href: "skrivverkstad", text: "Skrivverkstad" }], farg: "gron" },
    ],
  },
  hogstadiet: {
    rubrik: "Provet i årskurs 9",
    nar: "Allt kretsar kring ett tema. A görs på hösten, B och C på bestämda datum i mars.",
    delar: [
      { bokstav: "A", namn: "Tala", text: "Förberett anförande och gruppdiskussion – anpassa till syfte och mottagare.", trana: [{ href: "tala-lyssna", text: "Tala och lyssna" }, { href: "retorik", text: "Retorik" }], farg: "gul" },
      { bokstav: "B", namn: "Läsa", text: "Läs texthäftet först, svara sedan på flerval och öppna frågor.", trana: [{ href: "lasforstaelse", text: "Läsförståelse" }], farg: "bla" },
      { bokstav: "C", namn: "Skriva", text: "Välj en av tre uppgifter, t.ex. krönika eller debattartikel. En kräver källor.", trana: [{ href: "skrivverkstad", text: "Skrivverkstad" }, { href: "kallkritik", text: "Källkritik" }], farg: "gron" },
    ],
  },
  gymnasiet: {
    rubrik: "Proven i Svenska 1 och Svenska 3",
    nar: "Båda proven har tre delprov. I Svenska 3 krävs mer källhantering och analys.",
    delar: [
      { bokstav: "A", namn: "Tala", text: "Sv 1: förberett tal. Sv 3: presentation med stöd av källor och medvetna retoriska grepp.", trana: [{ href: "retorik", text: "Retorik" }], farg: "gul" },
      { bokstav: "B", namn: "Läsa", text: "Sv 1: tolka och jämföra texter. Sv 3: litteraturanalys.", trana: [{ href: "litteraturbegrepp", text: "Litteraturbegrepp" }, { href: "lasforstaelse", text: "Läsförståelse" }], farg: "bla" },
      { bokstav: "C", namn: "Skriva", text: "Sv 1: utredande text. Sv 3: PM utifrån ett källmaterial.", trana: [{ href: "skrivverkstad", text: "Skrivverkstad" }, { href: "kallkritik", text: "Källkritik" }], farg: "gron" },
    ],
  },
};

export function NationellaProvInfografik({ stadie }: { stadie: AgeGroup }) {
  const p = DELPROV[stadie];
  return (
    <Infografik titel={p.rubrik} ingress={p.nar ?? "Provet har tre delar: tala, läsa och skriva."}>
      <div className="grid gap-3 md:grid-cols-3">
        {p.delar.map((d) => (
          <div key={d.namn} className={`flex flex-col rounded-xl border-2 p-4 ${FARG[d.farg]}`}>
            <div className="flex items-baseline gap-2">
              {d.bokstav && <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 font-bold dark:bg-black/30">{d.bokstav}</span>}
              <p className="text-xl font-bold">{d.namn}</p>
            </div>
            <p className="mt-2 text-sm">{d.text}</p>
            <p className="mt-auto pt-3 text-xs font-semibold uppercase opacity-80">Träna här</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {d.trana.map((t) => (
                <Link key={t.href} href={`/${stadie}/${t.href}`} className="rounded-md bg-white/80 px-2 py-0.5 text-sm font-medium underline-offset-2 hover:underline dark:bg-black/30">
                  {t.text} →
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Infografik>
  );
}

/* ---------------- AI i svenskan ---------------- */

const TRAFIKLJUS: { farg: Farg; lampa: string; rubrik: string; enkel: string[]; full: string[] }[] = [
  {
    farg: "gron",
    lampa: "bg-emerald-500",
    rubrik: "Grönt – AI hjälper dig att lära",
    enkel: ["Fråga vad ett ord betyder.", "Be om idéer att börja med."],
    full: ["Förklara ett svårt begrepp på ett enklare sätt.", "Ge idéer och frågor att fundera vidare på.", "Förhöra dig inför ett prov."],
  },
  {
    farg: "gul",
    lampa: "bg-amber-400",
    rubrik: "Gult – tänk själv och kolla",
    enkel: ["Be om tips på din egen text – och välj själv vad du ändrar."],
    full: ["Respons på din egen text – du bestämmer vad du ändrar.", "Fakta från AI – kontrollera i en annan källa.", "Fråga läraren vad som gäller i uppgiften."],
  },
  {
    farg: "rod",
    lampa: "bg-rose-500",
    rubrik: "Rött – då lär du dig inget",
    enkel: ["Låta AI skriva texten åt dig."],
    full: ["Låta AI skriva texten och lämna in den som din.", "Kopiera svar utan att förstå dem.", "Dela personuppgifter om dig själv eller andra."],
  },
];

const PROMPT: [string, string, Farg][] = [
  ["Roll", "Du är en lärare i svenska …", "lila"],
  ["Uppgift", "… förklara skillnaden mellan krönika och debattartikel …", "bla"],
  ["Sammanhang", "… för en elev i årskurs 8 …", "gul"],
  ["Format", "… i tre punkter med ett exempel var.", "gron"],
];

export function AiInfografik({ stadie }: { stadie: AgeGroup }) {
  const enkel = stadie === "lagstadiet";
  const avancerad = stadie === "hogstadiet" || stadie === "gymnasiet";
  return (
    <Infografik titel="AI – stöd eller fusk?" ingress="Det avgörande är vem som gör tänkandet. Använd AI så att du lär dig mer – inte mindre.">
      <div className="grid gap-3 md:grid-cols-3">
        {TRAFIKLJUS.map((t) => (
          <div key={t.rubrik} className={`rounded-xl border-2 p-4 ${FARG[t.farg]}`}>
            <span className={`mb-2 block h-6 w-6 rounded-full shadow ${t.lampa}`} aria-hidden />
            <p className="font-bold">{t.rubrik}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {(enkel ? t.enkel : t.full).map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {avancerad && (
        <>
          <Etikett>En bra prompt har fyra delar</Etikett>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {PROMPT.map(([del, ex, farg]) => (
              <div key={del} className={`rounded-xl border-2 p-3 ${FARG[farg]}`}>
                <p className="font-bold">{del}</p>
                <p className="font-serif text-sm italic">{ex}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <Etikett>Kom ihåg</Etikett>
      <p className="rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
        {enkel
          ? "AI kan ha fel. Fråga en vuxen eller kolla i en bok om du är osäker."
          : "AI gissar vilka ord som passar – den kan låta säker men ändå hitta på fakta, citat och källor. Kontrollera alltid det viktiga i en annan källa."}
      </p>
    </Infografik>
  );
}
