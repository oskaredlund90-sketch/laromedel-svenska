import Link from "next/link";
import type { AgeGroup } from "@/lib/supabase/types";
import { FORMAGESIDOR } from "@/lib/lasprov/formagesidor";
import { FARG, Infografik, type Farg } from "./ram";

function Etikett({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 first:mt-0 dark:text-neutral-400">{children}</p>;
}

/* ---------------- Läsförståelse ---------------- */

const MINITEXT = "Ali tittade ut genom fönstret och suckade. Regnet öste ner. Fotbollsskorna stod packade vid dörren.";

const NIVAER: { niva: string; bild: string; formagor: { f: "H" | "D" | "S" | "G"; namn: string; exempel: string; svar: string; farg: Farg }[] }[] = [
  {
    niva: "På raden",
    bild: "Svaret står i texten.",
    formagor: [{ f: "H", namn: "Hitta", exempel: "Vad var det för väder?", svar: "Det regnade.", farg: "bla" }],
  },
  {
    niva: "Mellan raderna",
    bild: "Svaret finns inte ordagrant – du lägger ihop ledtrådar.",
    formagor: [
      { f: "D", namn: "Dra slutsatser", exempel: "Varför suckade Ali?", svar: "Han ville spela fotboll, men det regnar.", farg: "gul" },
      { f: "S", namn: "Tolka", exempel: "Hur tror du att Ali känner sig? Motivera.", svar: "Besviken – han suckar och skorna är redan packade.", farg: "orange" },
    ],
  },
  {
    niva: "Bortom raderna",
    bild: "Du tänker om texten: hur den är skriven och vad du tycker.",
    formagor: [{ f: "G", namn: "Granska", exempel: "Hur visar författaren Alis känslor utan att säga dem?", svar: "Genom vad han gör: suckar, tittar ut.", farg: "lila" }],
  },
];

export function LasforstaelseInfografik({ stadie }: { stadie: AgeGroup }) {
  const enkel = stadie === "lagstadiet";
  const signal = Object.fromEntries(FORMAGESIDOR.map((s) => [s.formaga, s]));
  return (
    <Infografik titel="Tre sätt att läsa en text" ingress="Frågor om en text kan ha svaret på raden, mellan raderna eller bortom raderna. Känner du igen frågan vet du hur du ska svara.">
      <blockquote className="mb-5 rounded-xl border-l-4 border-neutral-400 bg-white p-4 font-serif text-lg text-neutral-900 dark:bg-neutral-900 dark:text-white">{MINITEXT}</blockquote>

      <div className="grid gap-3 md:grid-cols-3">
        {NIVAER.map((n, i) => (
          <div key={n.niva} className="flex flex-col rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Steg {i + 1}</p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">{n.niva}</p>
            <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">{n.bild}</p>
            <div className="mt-auto space-y-2">
              {n.formagor.map((f) => (
                <div key={f.f} className={`rounded-lg border-2 p-3 text-sm ${FARG[f.farg]}`}>
                  {!enkel && <p className="text-xs font-bold uppercase opacity-80">{f.namn}</p>}
                  <p className="font-semibold">{f.exempel}</p>
                  <p className="mt-1 italic opacity-90">{f.svar}</p>
                  {!enkel && (
                    <p className="mt-2 text-xs opacity-80">
                      Signalord: {signal[f.f]?.signalord.slice(0, 3).join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Etikett>{enkel ? "Så svarar du" : "Ett starkt svar har tre delar"}</Etikett>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {(
          (enkel
            ? [
                ["Svara", "gul"],
                ["Visa var det står", "bla"],
              ]
            : [
                ["Svar", "gul"],
                ["Stöd från texten – ”det står att …”", "bla"],
                ["Förklaring – ”alltså …”", "gron"],
              ]) as [string, Farg][]
        ).map(([text, farg], i) => (
          <span key={text} className="flex items-center gap-2">
            {i > 0 && <span className="text-neutral-400">+</span>}
            <span className={`rounded-lg border-2 px-3 py-1.5 font-semibold ${FARG[farg]}`}>{text}</span>
          </span>
        ))}
      </div>

      {!enkel && (
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Träna en förmåga i taget:{" "}
          {FORMAGESIDOR.map((s, i) => (
            <span key={s.slug}>
              {i > 0 && " · "}
              <Link href={`/lasformagor/${s.slug}`} className="font-semibold underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white">
                {s.rubrik}
              </Link>
            </span>
          ))}
        </p>
      )}
    </Infografik>
  );
}

/* ---------------- Ordspråk och idiom ---------------- */

const TYPER: { namn: string; vad: string; ex: [string, string][]; farg: Farg; fran: AgeGroup }[] = [
  {
    namn: "Liknelse",
    vad: "Jämför med som.",
    ex: [
      ["tyst som en mus", "helt tyst"],
      ["stark som en björn", "mycket stark"],
    ],
    farg: "gul",
    fran: "lagstadiet",
  },
  {
    namn: "Ordspråk",
    vad: "En hel mening med ett råd eller en livsvisdom.",
    ex: [
      ["Övning ger färdighet.", "Den som tränar blir bättre."],
      ["Borta bra men hemma bäst.", "Det är skönast hemma."],
    ],
    farg: "bla",
    fran: "mellanstadiet",
  },
  {
    namn: "Idiom",
    vad: "Ett uttryck som betyder något annat än orden.",
    ex: [
      ["ha en räv bakom örat", "vara listig"],
      ["göra en höna av en fjäder", "överdriva"],
    ],
    farg: "lila",
    fran: "mellanstadiet",
  },
];

const URSPRUNG: { kalla: string; ex: string; bet: string; farg: Farg }[] = [
  { kalla: "Bibeln", ex: "kasta pärlor för svin", bet: "ge något fint till den som inte uppskattar det", farg: "orange" },
  { kalla: "Sjöfarten", ex: "ha vind i seglen", bet: "ha framgång", farg: "turkos" },
  { kalla: "Idrotten", ex: "kasta in handduken", bet: "ge upp (från boxningen)", farg: "rod" },
  { kalla: "Krigskonsten", ex: "gå i bräschen", bet: "gå först och ta störst risk (bräsch = hål i en mur)", farg: "gron" },
];

const ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];

export function OrdsprakInfografik({ stadie }: { stadie: AgeGroup }) {
  const typer = TYPER.filter((t) => ORDNING.indexOf(t.fran) <= ORDNING.indexOf(stadie));
  const enkel = stadie === "lagstadiet";
  return (
    <Infografik
      titel={enkel ? "Säg det med en bild" : "Liknelser, ordspråk och idiom"}
      ingress={enkel ? "En liknelse jämför med något annat – då blir det lätt att se det framför sig." : "Tre sorters bildspråk. Orden säger en sak – men betyder en annan."}
    >
      <div className={`grid gap-3 ${typer.length > 1 ? "md:grid-cols-3" : ""}`}>
        {typer.map((t) => (
          <div key={t.namn} className={`rounded-xl border-2 p-4 ${FARG[t.farg]}`}>
            <p className="text-lg font-bold">{t.namn}</p>
            <p className="text-sm opacity-80">{t.vad}</p>
            <ul className="mt-3 space-y-2">
              {t.ex.map(([uttryck, bet]) => (
                <li key={uttryck} className="rounded-md bg-white/70 p-2 text-sm dark:bg-black/30">
                  <p className="font-serif font-semibold italic">{uttryck}</p>
                  <p className="opacity-80">= {bet}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {!enkel && (
        <>
          <Etikett>Bokstavligt eller bildligt?</Etikett>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs font-semibold uppercase text-neutral-500">Bokstavligt</p>
              <p className="font-serif text-neutral-900 dark:text-white">Hon har en räv bakom örat.</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Det sitter ett djur bakom hennes öra. 🦊</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs font-semibold uppercase text-neutral-500">Bildligt</p>
              <p className="font-serif text-neutral-900 dark:text-white">Hon har en räv bakom örat.</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Hon är listig och har en plan.</p>
            </div>
          </div>
        </>
      )}

      {ORDNING.indexOf(stadie) >= ORDNING.indexOf("hogstadiet") && (
        <>
          <Etikett>Varifrån kommer uttrycken?</Etikett>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {URSPRUNG.map((u) => (
              <div key={u.kalla} className={`rounded-xl border-2 p-3 ${FARG[u.farg]}`}>
                <p className="text-xs font-bold uppercase opacity-80">{u.kalla}</p>
                <p className="font-serif font-semibold italic">{u.ex}</p>
                <p className="text-sm">= {u.bet}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </Infografik>
  );
}
