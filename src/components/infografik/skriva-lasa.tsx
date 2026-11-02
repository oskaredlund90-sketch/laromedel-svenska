import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";

function Etikett({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 first:mt-0 dark:text-neutral-400">{children}</p>;
}

/** Numrerade steg i en rad som bryts till en kolumn på mobil. */
function Steg({ steg }: { steg: { namn: string; text: string; farg: Farg }[] }) {
  return (
    <ol className="grid gap-2" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${steg.length > 4 ? 120 : 160}px, 1fr))` }}>
      {steg.map((s, i) => (
        <li key={s.namn} className={`rounded-xl border-2 p-3 ${FARG[s.farg]}`}>
          <span className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-sm font-bold dark:bg-black/30">{i + 1}</span>
          <p className="font-bold">{s.namn}</p>
          <p className="text-sm">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Skrivverkstad ---------------- */

const PROCESS: Record<"kort" | "mellan" | "lang", { namn: string; text: string; farg: Farg }[]> = {
  kort: [
    { namn: "Tänk", text: "Vad ska du skriva om? Rita eller skriv stödord.", farg: "gul" },
    { namn: "Skriv", text: "Skriv din text. Det får bli fel först.", farg: "bla" },
    { namn: "Läs igenom", text: "Stor bokstav, punkt – och låter det bra?", farg: "gron" },
  ],
  mellan: [
    { namn: "Planera", text: "Tankekarta eller stödord. Vem läser?", farg: "gul" },
    { namn: "Skriv utkast", text: "Få ner texten – putsa sedan.", farg: "orange" },
    { namn: "Respons", text: "Låt någon läsa: vad är bra, vad kan bli bättre?", farg: "rosa" },
    { namn: "Bearbeta", text: "Lägg till, stryk, flytta, byt ord.", farg: "bla" },
    { namn: "Korrekturläs", text: "Stavning, skiljetecken, stycken.", farg: "gron" },
  ],
  lang: [
    { namn: "Förstå uppgiften", text: "Syfte, mottagare, texttyp, bedömning.", farg: "gra" },
    { namn: "Planera", text: "Samla material, disposition, tes eller frågeställning.", farg: "gul" },
    { namn: "Skriv utkast", text: "Skriv hela texten utan att fastna.", farg: "orange" },
    { namn: "Respons", text: "Kamrat eller lärare – fråga om något specifikt.", farg: "rosa" },
    { namn: "Bearbeta", text: "Struktur först, sedan stycken, sist meningar.", farg: "bla" },
    { namn: "Korrekturläs", text: "Läs högt. Källor, citat och språkriktighet.", farg: "gron" },
  ],
};

const TEXTTYPER: { namn: string; syfte: string; delar: string[]; farg: Farg; fran: AgeGroup }[] = [
  { namn: "Berättande", syfte: "Underhålla och beröra", delar: ["Inledning", "Problem", "Höjdpunkt", "Upplösning"], farg: "rosa", fran: "lagstadiet" },
  { namn: "Faktatext", syfte: "Beskriva och informera", delar: ["Rubrik", "Inledning", "Stycken med mellanrubriker", "Avslutning"], farg: "bla", fran: "mellanstadiet" },
  { namn: "Argumenterande", syfte: "Övertyga", delar: ["Tes", "Argument", "Motargument + bemötande", "Avslutning"], farg: "rod", fran: "mellanstadiet" },
  { namn: "Instruerande", syfte: "Förklara hur man gör", delar: ["Mål", "Material", "Steg i ordning", "Resultat"], farg: "gul", fran: "hogstadiet" },
  { namn: "Utredande", syfte: "Undersöka en fråga från flera håll", delar: ["Frågeställning", "Bakgrund", "Olika perspektiv", "Slutsats"], farg: "lila", fran: "hogstadiet" },
];

const ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];

export function SkrivverkstadInfografik({ stadie }: { stadie: AgeGroup }) {
  const process = stadie === "lagstadiet" ? PROCESS.kort : stadie === "mellanstadiet" ? PROCESS.mellan : PROCESS.lang;
  const typer = TEXTTYPER.filter((t) => ORDNING.indexOf(t.fran) <= ORDNING.indexOf(stadie));
  return (
    <Infografik titel="Så blir en text till" ingress="Alla skribenter – även författare – skriver i flera steg. Och varje texttyp har sin egen byggnad.">
      <Etikett>Skrivprocessen</Etikett>
      <Steg steg={process} />
      <Etikett>{stadie === "lagstadiet" ? "En berättelse har" : "Texttyper och deras delar"}</Etikett>
      <div className="grid gap-3 md:grid-cols-2">
        {typer.map((t) => (
          <div key={t.namn} className={`rounded-xl border-2 p-4 ${FARG[t.farg]}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-lg font-bold">{t.namn}</p>
              <p className="text-xs font-semibold uppercase opacity-70">{t.syfte}</p>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-1 text-sm">
              {(stadie === "lagstadiet" ? ["Början", "Mitten – något händer", "Slut"] : t.delar).map((d, i) => (
                <span key={d} className="flex items-center gap-1">
                  {i > 0 && <span className="opacity-50">→</span>}
                  <span className="rounded-md bg-white/70 px-2 py-0.5 font-medium dark:bg-black/30">{d}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Infografik>
  );
}

/* ---------------- Lässtrategier ---------------- */

const FAS: { fas: string; farg: Farg; strategier: Record<"enkel" | "full", [string, string][]> }[] = [
  {
    fas: "Före",
    farg: "gul",
    strategier: {
      enkel: [["Titta på bilder och rubrik", "Vad tror du att det handlar om?"], ["Tänk på vad du redan vet", "Har du varit med om något liknande?"]],
      full: [["Förutspå", "Rubrik, bilder, baksida – vad handlar texten om?"], ["Aktivera förkunskaper", "Vad vet jag redan om ämnet?"], ["Bestäm syfte", "Varför läser jag – för nöjes skull eller för att lära mig?"]],
    },
  },
  {
    fas: "Under",
    farg: "bla",
    strategier: {
      enkel: [["Gör bilder i huvudet", "Se framför dig det du läser."], ["Stanna vid svåra ord", "Läs om, titta på ordet runtomkring, fråga."]],
      full: [["Ställ frågor", "Varför gör hon så? Vad kommer att hända?"], ["Skapa inre bilder", "Se miljön och personerna framför dig."], ["Reda ut oklarheter", "Läs om, slå upp ord, läs vidare och se om det klarnar."], ["Markera och anteckna", "Stryk under det viktigaste, skriv frågor i marginalen."]],
    },
  },
  {
    fas: "Efter",
    farg: "gron",
    strategier: {
      enkel: [["Berätta", "Berätta för en kompis vad du läste."], ["Vad tyckte du?", "Vad var bäst? Varför?"]],
      full: [["Sammanfatta", "Det viktigaste med egna ord på tre meningar."], ["Värdera", "Vad tycker jag? Håller budskapet?"], ["Koppla", "Påminner det om en annan text, mitt liv eller världen?"]],
    },
  },
];

export function LasstrategierInfografik({ stadie }: { stadie: AgeGroup }) {
  const niva = stadie === "lagstadiet" ? "enkel" : "full";
  return (
    <Infografik titel="Före – under – efter läsningen" ingress="Bra läsare gör saker innan de börjar, medan de läser och när de har läst klart.">
      <div className="grid gap-3 md:grid-cols-3">
        {FAS.map((f) => (
          <div key={f.fas} className={`rounded-xl border-2 p-4 ${FARG[f.farg]}`}>
            <p className="mb-3 text-2xl font-bold">{f.fas}</p>
            <ul className="space-y-3">
              {f.strategier[niva].map(([namn, text]) => (
                <li key={namn}>
                  <p className="font-semibold">{namn}</p>
                  <p className="text-sm opacity-90">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {stadie !== "lagstadiet" && (
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Snabbläsa eller djupläsa? <b>Skumma</b> för att få överblick, <b>skanna</b> för att hitta en uppgift och <b>närläs</b> när du ska förstå på djupet.
        </p>
      )}
    </Infografik>
  );
}
