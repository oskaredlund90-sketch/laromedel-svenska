import type { AgeGroup } from "@/lib/supabase/types";
import { FARG, Infografik, type Farg } from "./ram";

/* ---------------- Källkritik ---------------- */

const KRITERIER: { namn: string; fraga: string; enkel: string; farg: Farg }[] = [
  { namn: "Äkthet", fraga: "Är källan det den utger sig för att vara? Kan bilden vara manipulerad?", enkel: "Vem har gjort det här – på riktigt?", farg: "bla" },
  { namn: "Tid", fraga: "När publicerades det? Gäller uppgifterna fortfarande?", enkel: "När skrevs det? Är det gammalt?", farg: "gul" },
  { namn: "Beroende", fraga: "Är det en förstahandskälla? Har andra bara skrivit av varandra?", enkel: "Säger andra källor samma sak?", farg: "gron" },
  { namn: "Tendens", fraga: "Vill avsändaren påverka, sälja eller underhålla? Vems intressen gynnas?", enkel: "Varför har någon gjort det här?", farg: "rod" },
];

const STEG: [string, string][] = [
  ["Stanna", "Känner du starka känslor? Dela inte direkt."],
  ["Kolla avsändaren", "Vem ligger bakom? Sök på namnet."],
  ["Hitta fler källor", "Vad skriver seriösa medier om samma sak?"],
  ["Spåra ursprunget", "Var kom bilden, citatet eller siffran ifrån först?"],
];

export function KallkritikInfografik({ stadie }: { stadie: AgeGroup }) {
  const enkel = stadie === "mellanstadiet";
  return (
    <Infografik titel="Granska källan" ingress={enkel ? "Fyra frågor att ställa innan du tror på något du läser eller ser." : "De fyra källkritiska kriterierna och fyra snabba steg för nätet."}>
      <div className="grid gap-3 sm:grid-cols-2">
        {KRITERIER.map((k) => (
          <div key={k.namn} className={`rounded-xl border-2 p-4 ${FARG[k.farg]}`}>
            <p className="text-lg font-bold">{enkel ? k.enkel : k.namn}</p>
            {!enkel && <p className="mt-1 text-sm">{k.fraga}</p>}
          </div>
        ))}
      </div>
      <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">På nätet – fyra snabba steg</p>
      <ol className="grid gap-2 sm:grid-cols-4">
        {STEG.map(([namn, text], i) => (
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

/* ---------------- Språkhistoria ---------------- */

const SPRAKEPOKER: { namn: string; ar: string; handelse: string; lan: string; ex: string; farg: Farg }[] = [
  { namn: "Runsvenska", ar: "ca 800–1225", handelse: "Runstenar ristas", lan: "Få lånord", ex: "”Ingrid lät resa denna sten …”", farg: "gra" },
  { namn: "Fornsvenska", ar: "ca 1225–1526", handelse: "Landskapslagarna skrivs ner", lan: "Latin, lågtyska (Hansan)", ex: "betala, språk, fönster", farg: "gul" },
  { namn: "Äldre nysvenska", ar: "1526–1732", handelse: "Nya testamentet på svenska 1526", lan: "Tyska, latin", ex: "fru, ära, regering", farg: "orange" },
  { namn: "Yngre nysvenska", ar: "1732–1906", handelse: "Dalins tidskrift Then Swänska Argus", lan: "Franska", ex: "trottoar, byrå, fåtölj", farg: "rosa" },
  { namn: "Nusvenska", ar: "1906–", handelse: "Stavningsreformen: hv → v, fv → v", lan: "Engelska", ex: "jobb, mejl, sajt", farg: "bla" },
];

export function SprakhistoriaInfografik() {
  return (
    <Infografik titel="Svenskans resa – 1 200 år på en bild" ingress="Varje epok börjar med en händelse som förändrade språket och fick sina lånord från ett nytt håll.">
      <ol className="grid gap-3 md:grid-cols-5">
        {SPRAKEPOKER.map((e, i) => (
          <li key={e.namn} className={`relative rounded-xl border-2 p-4 ${FARG[e.farg]}`}>
            {i < SPRAKEPOKER.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-neutral-400 md:block">›</span>}
            <p className="text-xs font-semibold opacity-80">{e.ar}</p>
            <p className="text-lg font-bold">{e.namn}</p>
            <p className="mt-2 text-sm">{e.handelse}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide opacity-70">Lån från</p>
            <p className="text-sm">{e.lan}</p>
            <p className="mt-1 font-serif text-sm italic">{e.ex}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="mb-2 font-semibold text-neutral-900 dark:text-white">Samma mening genom tiden</p>
        <ul className="space-y-1 font-serif text-sm text-neutral-800 dark:text-neutral-200">
          <li><span className="inline-block w-36 font-sans text-xs font-semibold uppercase text-neutral-500">Före 1906</span>Hvad hafver du gjort?</li>
          <li><span className="inline-block w-36 font-sans text-xs font-semibold uppercase text-neutral-500">I dag</span>Vad har du gjort?</li>
        </ul>
      </div>
    </Infografik>
  );
}

/* ---------------- Nordiska språk ---------------- */

const GRANNORD: { sv: string; da: string; no: string; falla?: string }[] = [
  { sv: "glass", da: "is", no: "is" },
  { sv: "flicka", da: "pige", no: "jente" },
  { sv: "rolig", da: "sjov", no: "morsom", falla: "rolig betyder lugn på danska och norska" },
  { sv: "frukost", da: "morgenmad", no: "frokost", falla: "frokost betyder lunch på danska" },
  { sv: "snäll", da: "rar", no: "snill", falla: "rar betyder konstig på norska" },
];

export function NordiskaInfografik() {
  return (
    <Infografik titel="Språkfamiljen i Norden" ingress="Svenska, danska och norska är så nära släkt att vi förstår varandra. Finska och samiska tillhör en helt annan familj.">
      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <p className={`mx-auto w-fit rounded-lg border-2 px-3 py-1 text-sm font-bold ${FARG.gra}`}>Indoeuropeiska → Germanska → Nordiska</p>
          <div className="mx-auto h-5 w-0.5 bg-neutral-300 dark:bg-neutral-600" />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className={`rounded-lg border-2 px-3 py-1 text-center text-sm font-bold ${FARG.bla}`}>Östnordiska</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                {["svenska", "danska"].map((s) => (
                  <span key={s} className={`rounded-full border px-2.5 py-0.5 text-sm ${FARG.bla}`}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className={`rounded-lg border-2 px-3 py-1 text-center text-sm font-bold ${FARG.gron}`}>Västnordiska</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                {["norska", "isländska", "färöiska"].map((s) => (
                  <span key={s} className={`rounded-full border px-2.5 py-0.5 text-sm ${FARG.gron}`}>{s}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Norskan räknas historiskt till västnordiskan men liknar i dag svenskan och danskan mest.</p>
        </div>
        <div className={`rounded-xl border-2 p-4 ${FARG.lila}`}>
          <p className="font-bold">Finsk-ugriska – inte släkt med svenskan</p>
          <p className="mt-1 text-sm">finska, meänkieli, samiska, estniska</p>
          <p className="mt-3 font-bold">Sveriges fem minoritetsspråk</p>
          <p className="mt-1 text-sm">finska · meänkieli · samiska · romani chib · jiddisch</p>
        </div>
      </div>

      <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Grannspråksfällor</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-neutral-500">
              <th className="p-2">Svenska</th>
              <th className="p-2">Danska</th>
              <th className="p-2">Norska</th>
              <th className="p-2">Se upp!</th>
            </tr>
          </thead>
          <tbody>
            {GRANNORD.map((g) => (
              <tr key={g.sv} className="border-t border-neutral-200 dark:border-neutral-800">
                <td className="p-2 font-semibold">{g.sv}</td>
                <td className="p-2">{g.da}</td>
                <td className="p-2">{g.no}</td>
                <td className="p-2 text-neutral-600 dark:text-neutral-400">{g.falla ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Infografik>
  );
}
