import type { ReactNode } from "react";
import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";
import { OrdklasserInfografik } from "./ordklasser";

const ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const minst = (stadie: AgeGroup, fran: AgeGroup) => ORDNING.indexOf(stadie) >= ORDNING.indexOf(fran);

function Bit({ farg, etikett, children }: { farg: Farg; etikett?: string; children: ReactNode }) {
  return (
    <span className="inline-flex flex-col items-center">
      <span className={`rounded-lg border-2 px-3 py-1.5 text-lg ${FARG[farg]}`}>{children}</span>
      {etikett && <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">{etikett}</span>}
    </span>
  );
}

function Rubrik({ children }: { children: ReactNode }) {
  return <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 first:mt-0 dark:text-neutral-400">{children}</p>;
}

/* ---------------- Meningsbyggnad ---------------- */

const HUVUDSATS_KOL = [
  { namn: "Fundament", farg: "gul" as Farg },
  { namn: "Verb", farg: "rod" as Farg },
  { namn: "Subjekt", farg: "bla" as Farg },
  { namn: "Satsadverbial", farg: "lila" as Farg },
  { namn: "Resten", farg: "gra" as Farg },
];
const BISATS_KOL = [
  { namn: "Subjunktion", farg: "rosa" as Farg },
  { namn: "Subjekt", farg: "bla" as Farg },
  { namn: "Satsadverbial", farg: "lila" as Farg },
  { namn: "Verb", farg: "rod" as Farg },
  { namn: "Resten", farg: "gra" as Farg },
];

function Schema({ kol, rader }: { kol: { namn: string; farg: Farg }[]; rader: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-separate border-spacing-1 text-center">
        <thead>
          <tr>
            {kol.map((k) => (
              <th key={k.namn} className={`rounded-md border-2 px-2 py-1.5 text-xs font-bold uppercase tracking-wide ${FARG[k.farg]}`}>
                {k.namn}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rader.map((r) => (
            <tr key={r.join(" ")}>
              {r.map((c, i) => (
                <td key={i} className="rounded-md bg-white px-2 py-2 text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Meningsbyggnad({ stadie }: { stadie: AgeGroup }) {
  if (stadie === "lagstadiet")
    return (
      <Infografik titel="Så bygger du en mening" ingress="En mening berättar vem som gör något och vad hen gör.">
        <div className="flex flex-wrap items-start gap-2">
          <Bit farg="gul" etikett="Stor bokstav">K</Bit>
          <Bit farg="bla" etikett="Vem?">atten</Bit>
          <Bit farg="rod" etikett="Gör vad?">sover</Bit>
          <Bit farg="gra" etikett="Mer">på mattan</Bit>
          <Bit farg="gron" etikett="Punkt">.</Bit>
        </div>
        <p className="mt-6 text-neutral-700 dark:text-neutral-300">Fråga dig: <b>Vem?</b> – Katten. <b>Gör vad?</b> – Sover. Finns båda är det en mening.</p>
      </Infografik>
    );

  if (stadie === "mellanstadiet")
    return (
      <Infografik titel="Huvudsats och bisats" ingress="Huvudsatsen kan stå ensam. Bisatsen behöver en huvudsats att luta sig mot.">
        <div className="flex flex-wrap items-start gap-2">
          <Bit farg="bla" etikett="Subjekt">Jag</Bit>
          <Bit farg="rod" etikett="Predikat">stannar</Bit>
          <Bit farg="gra" etikett="Resten">inne</Bit>
          <span className="self-center px-2 text-2xl text-neutral-400">+</span>
          <Bit farg="rosa" etikett="Bisatsens början">eftersom</Bit>
          <Bit farg="gra" etikett="Bisats">det regnar.</Bit>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className={`rounded-xl border-2 p-4 ${FARG.bla}`}>
            <p className="font-bold">Huvudsats</p>
            <p className="text-sm">Kan stå ensam: <i>Jag stannar inne.</i></p>
          </div>
          <div className={`rounded-xl border-2 p-4 ${FARG.rosa}`}>
            <p className="font-bold">Bisats</p>
            <p className="text-sm">Kan inte stå ensam: <i>eftersom det regnar.</i> Börjar ofta med att, som, när, om, eftersom.</p>
          </div>
        </div>
      </Infografik>
    );

  return (
    <Infografik titel="Satsschemat" ingress="Huvudsats och bisats har olika ordföljd. Placera orden i rätt ruta så ser du var inte ska stå.">
      <Rubrik>Huvudsats – verbet på plats två</Rubrik>
      <Schema
        kol={HUVUDSATS_KOL}
        rader={[
          ["Jag", "läser", "", "inte", "serier."],
          ["Serier", "läser", "jag", "inte.", ""],
          ["I dag", "läser", "jag", "inte", "serier."],
        ]}
      />
      <Rubrik>Bisats – BIFF</Rubrik>
      <Schema kol={BISATS_KOL} rader={[["eftersom", "jag", "inte", "läser", "serier."], ["att", "hon", "alltid", "kommer", "för sent."]]} />
      <div className={`mt-6 rounded-xl border-2 p-4 text-lg ${FARG.lila}`}>
        <b>B</b>isatser: <b>I</b>nte <b>F</b>öre <b>F</b>inita verbet – <i>…eftersom jag <b>inte</b> läser</i>, inte <i>…eftersom jag läser inte</i>.
      </div>
    </Infografik>
  );
}

/* ---------------- Skiljetecken ---------------- */

const TECKEN: { tecken: string; namn: string; nar: string; ex: string; farg: Farg; fran: AgeGroup }[] = [
  { tecken: ".", namn: "Punkt", nar: "När meningen är slut.", ex: "Vi åker hem.", farg: "bla", fran: "lagstadiet" },
  { tecken: "?", namn: "Frågetecken", nar: "Efter en fråga.", ex: "Ska vi åka hem?", farg: "gron", fran: "lagstadiet" },
  { tecken: "!", namn: "Utropstecken", nar: "Efter utrop och uppmaningar.", ex: "Kom hit!", farg: "rod", fran: "lagstadiet" },
  { tecken: ",", namn: "Kommatecken", nar: "Vid uppräkning och före men. Ger en paus.", ex: "Jag köpte mjölk, bröd och ost.", farg: "gul", fran: "mellanstadiet" },
  { tecken: "– ”", namn: "Talstreck och citattecken", nar: "När någon pratar i en text.", ex: "– Hej, sa Ali.  ”Hej”, sa Ali.", farg: "lila", fran: "mellanstadiet" },
  { tecken: ":", namn: "Kolon", nar: "Före en uppräkning, förklaring eller ett citat.", ex: "Ta med: matsäck, vatten och mössa.", farg: "turkos", fran: "mellanstadiet" },
  { tecken: ";", namn: "Semikolon", nar: "Mellan två meningar som hör ihop.", ex: "Det regnade; matchen ställdes in.", farg: "indigo", fran: "hogstadiet" },
  { tecken: "–", namn: "Tankstreck", nar: "För en inskjuten tanke eller en överraskning.", ex: "Hon vann – igen.", farg: "orange", fran: "hogstadiet" },
];

function Skiljetecken({ stadie }: { stadie: AgeGroup }) {
  const t = TECKEN.filter((x) => minst(stadie, x.fran));
  return (
    <Infografik titel="Skiljetecknen på en sida" ingress="Skiljetecken visar läsaren när det ska bli paus, fråga eller utrop.">
      <div className="grid gap-3 sm:grid-cols-2">
        {t.map((x) => (
          <div key={x.namn} className={`flex gap-4 rounded-xl border-2 p-4 ${FARG[x.farg]}`}>
            <span className="w-14 shrink-0 text-center font-serif text-5xl font-bold leading-none">{x.tecken}</span>
            <div>
              <p className="font-bold">{x.namn}</p>
              <p className="text-sm">{x.nar}</p>
              <p className="mt-1 font-serif text-sm italic opacity-80">{x.ex}</p>
            </div>
          </div>
        ))}
      </div>
    </Infografik>
  );
}

/* ---------------- Stavning ---------------- */

const LJUD: { ljud: string; farg: Farg; satt: [string, string][]; fran: AgeGroup }[] = [
  { ljud: "j-ljudet", farg: "gul", fran: "lagstadiet", satt: [["j", "jul"], ["g", "göra"], ["gj", "gjorde"], ["hj", "hjärta"], ["dj", "djur"], ["lj", "ljus"]] },
  { ljud: "tj-ljudet", farg: "gron", fran: "mellanstadiet", satt: [["tj", "tjugo"], ["k", "kind"], ["kj", "kjol"]] },
  { ljud: "sj-ljudet", farg: "lila", fran: "mellanstadiet", satt: [["sj", "sjö"], ["sk", "sked"], ["skj", "skjorta"], ["stj", "stjärna"], ["sch", "dusch"], ["ch", "choklad"], ["g", "garage"]] },
];

function Stavning({ stadie }: { stadie: AgeGroup }) {
  return (
    <Infografik titel="Stavningens viktigaste regler" ingress="Lyssna på vokalen och på ljudet – de flesta stavfel går att lösa med de här reglerna.">
      <Rubrik>Kort eller lång vokal?</Rubrik>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl border-2 p-4 ${FARG.bla}`}>
          <p className="font-bold">Lång vokal → en konsonant</p>
          <p className="mt-1 font-serif text-2xl">ta<b>k</b> · fu<b>l</b> · gla<b>s</b></p>
          <div className="mt-2 h-2 w-3/4 rounded-full bg-sky-500" />
        </div>
        <div className={`rounded-xl border-2 p-4 ${FARG.rod}`}>
          <p className="font-bold">Kort vokal → två konsonanter</p>
          <p className="mt-1 font-serif text-2xl">ta<b>ck</b> · fu<b>ll</b> · gla<b>ss</b></p>
          <div className="mt-2 h-2 w-1/4 rounded-full bg-rose-500" />
        </div>
      </div>
      <p className="mt-2 text-sm text-neutral-500">Undantag att lära sig: <i>man, hon, han, den, vem, kom, dom</i> och ord som slutar på m: <i>hem, rum, glöm</i>.</p>

      <Rubrik>Samma ljud – olika stavning</Rubrik>
      <div className="grid gap-3 md:grid-cols-3">
        {LJUD.filter((l) => minst(stadie, l.fran)).map((l) => (
          <div key={l.ljud} className={`rounded-xl border-2 p-4 ${FARG[l.farg]}`}>
            <p className="mb-2 font-bold">{l.ljud}</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
              {l.satt.map(([s, ord]) => (
                <li key={s + ord}>
                  <b className="inline-block w-8">{s}</b> {ord}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {minst(stadie, "mellanstadiet") && (
        <>
          <Rubrik>Skriv ihop!</Rubrik>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-xl border-2 p-4 ${FARG.gron}`}>
              <p className="font-serif text-xl">en <b>brunhårig</b> sjuksköterska</p>
              <p className="text-sm">En sjuksköterska med brunt hår.</p>
            </div>
            <div className={`rounded-xl border-2 p-4 ${FARG.rod}`}>
              <p className="font-serif text-xl">en <b>brun hårig</b> sjuksköterska</p>
              <p className="text-sm">En brun sjuksköterska som är hårig!</p>
            </div>
          </div>
        </>
      )}
    </Infografik>
  );
}

/* ---------------- Ordbildning ---------------- */

function Ekvation({ delar, svar }: { delar: { t: string; farg: Farg; e?: string }[]; svar: string }) {
  return (
    <div className="flex flex-wrap items-start gap-2">
      {delar.map((d, i) => (
        <span key={i} className="flex items-start gap-2">
          {i > 0 && <span className="pt-2 text-xl text-neutral-400">+</span>}
          <Bit farg={d.farg} etikett={d.e}>{d.t}</Bit>
        </span>
      ))}
      <span className="pt-2 text-xl text-neutral-400">=</span>
      <span className="pt-1.5 font-serif text-2xl font-bold text-neutral-900 dark:text-white">{svar}</span>
    </div>
  );
}

function Ordbildning({ stadie }: { stadie: AgeGroup }) {
  return (
    <Infografik titel="Så bildas nya ord" ingress="Svenskan bygger nya ord som lego – genom att sätta ihop ord, lägga till delar eller låna från andra språk.">
      <Rubrik>Sammansättning</Rubrik>
      <div className="space-y-4">
        <Ekvation delar={[{ t: "sol", farg: "gul", e: "Förled" }, { t: "glasögon", farg: "bla", e: "Huvudled" }]} svar="solglasögon" />
        <Ekvation delar={[{ t: "fotboll", farg: "gul", e: "Förled" }, { t: "s", farg: "gra", e: "Fogbokstav" }, { t: "lag", farg: "bla", e: "Huvudled" }]} svar="fotbollslag" />
      </div>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Sista delen bestämmer: en <b>husbåt</b> är en båt, ett <b>båthus</b> är ett hus.</p>

      <Rubrik>Avledning</Rubrik>
      <div className="space-y-4">
        <Ekvation delar={[{ t: "o", farg: "rosa", e: "Prefix" }, { t: "vänlig", farg: "bla", e: "Ordstam" }]} svar="ovänlig" />
        <Ekvation delar={[{ t: "vänlig", farg: "bla", e: "Ordstam" }, { t: "het", farg: "gron", e: "Suffix" }]} svar="vänlighet" />
      </div>

      {minst(stadie, "hogstadiet") && (
        <>
          <Rubrik>Lånord – svenskans resa</Rubrik>
          <div className="grid gap-2 sm:grid-cols-5">
            {[
              { sprak: "Latin", tid: "medeltiden", ord: "skola, kyrka, präst", farg: "gul" as Farg },
              { sprak: "Lågtyska", tid: "1300–1500", ord: "fru, betala, språk", farg: "orange" as Farg },
              { sprak: "Franska", tid: "1700-talet", ord: "trottoar, byrå, parfym", farg: "rosa" as Farg },
              { sprak: "Engelska", tid: "1900-talet–", ord: "jobb, mejl, sajt", farg: "bla" as Farg },
              { sprak: "Arabiska, turkiska", tid: "via handel och i dag", ord: "kaffe, kiosk, yalla", farg: "gron" as Farg },
            ].map((l) => (
              <div key={l.sprak} className={`rounded-xl border-2 p-3 ${FARG[l.farg]}`}>
                <p className="font-bold">{l.sprak}</p>
                <p className="text-xs opacity-80">{l.tid}</p>
                <p className="mt-1 text-sm italic">{l.ord}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </Infografik>
  );
}

/* ---------------- Textbindning ---------------- */

const SAMBAND: { typ: string; fraga: string; ord: string; farg: Farg; fran: AgeGroup }[] = [
  { typ: "Tillägg", fraga: "Mer av samma", ord: "och, dessutom, även, också", farg: "bla", fran: "mellanstadiet" },
  { typ: "Tid", fraga: "I vilken ordning?", ord: "först, sedan, därefter, till sist", farg: "gul", fran: "mellanstadiet" },
  { typ: "Orsak", fraga: "Varför?", ord: "eftersom, därför att, på grund av", farg: "orange", fran: "mellanstadiet" },
  { typ: "Följd", fraga: "Vad blev resultatet?", ord: "därför, alltså, så, det ledde till", farg: "gron", fran: "mellanstadiet" },
  { typ: "Motsats", fraga: "Men å andra sidan …", ord: "men, däremot, trots att, ändå", farg: "rod", fran: "mellanstadiet" },
  { typ: "Exempel", fraga: "Visa hur", ord: "till exempel, bland annat, som", farg: "lila", fran: "mellanstadiet" },
  { typ: "Jämförelse", fraga: "Lika eller olika?", ord: "på samma sätt, likaså, jämfört med", farg: "turkos", fran: "hogstadiet" },
  { typ: "Sammanfattning", fraga: "Knyt ihop", ord: "sammanfattningsvis, kort sagt, slutligen", farg: "indigo", fran: "hogstadiet" },
];

function Textbindning({ stadie }: { stadie: AgeGroup }) {
  return (
    <Infografik titel="Sambandsord – textens lim" ingress="Välj sambandsord efter vad du vill visa: tid, orsak, motsats …">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SAMBAND.filter((s) => minst(stadie, s.fran)).map((s) => (
          <div key={s.typ} className={`rounded-xl border-2 p-4 ${FARG[s.farg]}`}>
            <p className="font-bold">{s.typ}</p>
            <p className="text-xs opacity-80">{s.fraga}</p>
            <p className="mt-2 text-sm italic">{s.ord}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 font-serif text-lg leading-9 dark:border-neutral-800 dark:bg-neutral-900">
        <span className={`rounded px-1 ${FARG.gul}`}>Först</span> blev det tyst i klassrummet.{" "}
        <span className={`rounded px-1 ${FARG.orange}`}>Eftersom</span> ingen visste svaret tittade alla ner.{" "}
        <span className={`rounded px-1 ${FARG.rod}`}>Men</span> plötsligt räckte Sara upp handen,{" "}
        <span className={`rounded px-1 ${FARG.gron}`}>så</span> läraren log.
      </div>
    </Infografik>
  );
}

/* ---------------- Stilistik ---------------- */

const STILFIGURER: [string, string, Farg][] = [
  ["Liknelse", "Han var stark som en björn.", "bla"],
  ["Metafor", "Hon är en klippa.", "lila"],
  ["Besjälning", "Vinden viskade i träden.", "gron"],
  ["Upprepning", "Vi kämpar, vi hoppas, vi vinner.", "gul"],
  ["Allitteration", "Sju sjösjuka sjömän …", "orange"],
  ["Överdrift", "Jag har sagt det tusen gånger!", "rod"],
  ["Kontrast", "Det var den bästa av tider, det var den värsta av tider.", "turkos"],
  ["Retorisk fråga", "Vem vill inte ha en bättre värld?", "rosa"],
];

function Stilistik() {
  return (
    <Infografik titel="Stilnivå och stilfigurer" ingress="Samma budskap kan sägas på många sätt. Välj stil efter mottagare och syfte.">
      <div className="relative">
        <div className="mb-2 h-2 rounded-full bg-gradient-to-r from-pink-400 via-neutral-300 to-indigo-500" />
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { niva: "Informell", vem: "Kompis", text: "Tja! Ses imorrn?", farg: "rosa" as Farg },
            { niva: "Neutral", vem: "Klassen", text: "Hej! Vi ses i morgon.", farg: "gra" as Farg },
            { niva: "Formell", vem: "Rektor, myndighet", text: "Vi ser fram emot att träffa er i morgon.", farg: "indigo" as Farg },
          ].map((s) => (
            <div key={s.niva} className={`rounded-xl border-2 p-4 ${FARG[s.farg]}`}>
              <p className="font-bold">{s.niva}</p>
              <p className="text-xs opacity-80">Till: {s.vem}</p>
              <p className="mt-2 font-serif italic">”{s.text}”</p>
            </div>
          ))}
        </div>
      </div>
      <Rubrik>Stilfigurer</Rubrik>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STILFIGURER.map(([namn, ex, farg]) => (
          <div key={namn} className={`rounded-xl border-2 p-3 ${FARG[farg]}`}>
            <p className="font-bold">{namn}</p>
            <p className="font-serif text-sm italic">{ex}</p>
          </div>
        ))}
      </div>
    </Infografik>
  );
}

/** Infografik för ett grammatikämne, anpassad efter stadium. */
export function GrammatikInfografik({ topic, stadie }: { topic: string; stadie: AgeGroup }) {
  switch (topic) {
    case "ordklasser":
      return <OrdklasserInfografik stadie={stadie} />;
    case "meningsbyggnad":
      return <Meningsbyggnad stadie={stadie} />;
    case "skiljetecken":
      return <Skiljetecken stadie={stadie} />;
    case "stavning":
      return <Stavning stadie={stadie} />;
    case "ordbildning":
      return <Ordbildning stadie={stadie} />;
    case "textbindning":
      return <Textbindning stadie={stadie} />;
    case "stilistik":
      return <Stilistik />;
    default:
      return null;
  }
}
