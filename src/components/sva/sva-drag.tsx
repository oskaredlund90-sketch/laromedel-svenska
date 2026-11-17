import Link from "next/link";
import type { AgeGroup } from "@/lib/supabase/types";

/**
 * För läraren: typiska drag i texter av elever som läser svenska som andraspråk
 * och vad som gör SVA utmanande – med länkar till träning i läromedlet.
 */
const DRAG: { drag: string; exempel: string; varfor: string; trana: [string, string][] }[] = [
  {
    drag: "Verbet på plats två (inversion)",
    exempel: "I går jag åt pizza. → I går åt jag pizza.",
    varfor: "Få språk har regeln att verbet alltid står på andra plats. Felet syns särskilt när meningen börjar med tid eller plats.",
    trana: [["I går åt vi glass", "/ovningshaften/grammatik-3-ordfoljd"], ["Grammatik: Meningsbyggnad", "grammatik/meningsbyggnad"]],
  },
  {
    drag: "Inte och andra satsadverb i bisatser (BIFF)",
    exempel: "… eftersom jag gillar inte fisk. → … eftersom jag inte gillar fisk.",
    varfor: "Ordföljden skiljer sig mellan huvudsats och bisats – en svensk särregel som tar tid att automatisera.",
    trana: [["Jag gillar inte – eftersom jag inte gillar", "/ovningshaften/meningsbyggnad-2-bisats-inte"]],
  },
  {
    drag: "En eller ett – och kongruens",
    exempel: "ett stor hus, en äpple, huset är stor → ett stort hus, ett äpple, huset är stort",
    varfor: "Genus är oftast inte logiskt och måste läras ord för ord. Många språk saknar genus eller har andra system.",
    trana: [["En eller ett?", "/ovningshaften/genus-1-en-eller-ett"], ["En stor bil – ett stort hus", "/ovningshaften/genus-3-adjektiv"]],
  },
  {
    drag: "Bestämd och obestämd form",
    exempel: "Jag köpte bok. Den stora huset. → Jag köpte en bok. Det stora huset.",
    varfor: "Många språk saknar artiklar eller markerar bestämdhet på andra sätt, så artikeln fattas ofta eller blir fel. Svenskans dubbla bestämdhet (det stora huset) är ovanlig.",
    trana: [["Bilen eller bilet?", "/ovningshaften/genus-2-bestamd-form"]],
  },
  {
    drag: "Prepositioner",
    exempel: "Jag är intresserad på musik. Vi ses i måndag. → intresserad av, på måndag",
    varfor: "Prepositioner följer sällan logiska regler och skiljer sig mycket mellan språk. De måste läras i fasta uttryck.",
    trana: [["SVA-övningar: prepositioner (längre ned på sidan)", "sva"]],
  },
  {
    drag: "Verbformer och tempus",
    exempel: "Han springde. Jag ska går. Jag har skrev. → sprang, ska gå, har skrivit",
    varfor: "Starka verb övergeneraliseras till svaga böjningsmönster, och formen efter hjälpverb, att och har blandas ihop.",
    trana: [["Sprang, inte springde", "/ovningshaften/grammatik-2-starka-verb"], ["Att bli, inte att blir", "/ovningshaften/grammatik-4-verbform"]],
  },
  {
    drag: "Partikelverb, reflexiva verb och sin/hans",
    exempel: "Jag tycker musik. Han satte på stolen. Han tog hans väska (sin egen). → tycker om, satte sig, tog sin väska",
    varfor: "Små ord som om, upp, sig och sin bär betydelse och saknar ofta motsvarighet i andra språk.",
    trana: [["Grammatik: Ordklasser", "grammatik/ordklasser"], ["De eller dem?", "/ovningshaften/grammatik-1-de-dem"]],
  },
  {
    drag: "Uttal och stavning",
    exempel: "lång och kort vokal (glas – glass), u och y, sj- och tj-ljud, ö och u",
    varfor: "Svenskan har många vokaler och längdskillnader som avgör både betydelse och stavning (dubbelteckning).",
    trana: [["Grammatik: Stavning", "grammatik/stavning"]],
  },
  {
    drag: "Skolspråk och ordförråd",
    exempel: "Eleven klarar vardagssamtal men inte ord som orsak, jämföra, påverka, följaktligen eller ämnesbegrepp.",
    varfor: "Vardagsspråk tar ofta ett par år att utveckla, skolspråket betydligt längre – ofta fem år eller mer (Cummins). Det är lätt att överskatta elevens språk utifrån samtal.",
    trana: [["Veckans ord", "/veckans-ord"], ["Ordkunskap", "ordkunskap"]],
  },
  {
    drag: "Textbindning och genre",
    exempel: "Korta meningar utan sambandsord, oklara syftningar, texter som följer andra textnormer.",
    varfor: "Hur en berättelse, ett argument eller en faktatext ska byggas är kulturellt – och sällan uttalat.",
    trana: [["Grammatik: Textbindning", "grammatik/textbindning"], ["Skrivverkstad", "skrivverkstad"]],
  },
];

export function SvaDrag({ stadie }: { stadie: AgeGroup }) {
  const href = (s: string) => (s.startsWith("/") ? s : `/${stadie}/${s}`);
  return (
    <section className="my-12 rounded-2xl border border-sky-200 bg-sky-50/50 p-5 dark:border-sky-900 dark:bg-sky-950/20">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-700 dark:text-sky-400">För läraren</p>
      <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">Typiska SVA-drag – och vad du tränar med</h2>
      <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">
        Dragen är normala steg i inlärningen, inte slarv. Elevens språk följer egna, systematiska regler (ett mellanspråk) som närmar sig
        svenskan. Rätta därför ett drag i taget och utgå från det eleven redan kan.
      </p>
      <div className="mt-5 space-y-3">
        {DRAG.map((d) => (
          <div key={d.drag} className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="font-semibold text-neutral-900 dark:text-white">{d.drag}</p>
            <p className="mt-1 text-sm italic text-sky-800 dark:text-sky-300">{d.exempel}</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{d.varfor}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {d.trana.map(([t, h]) => (
                <Link key={h} href={href(h)} className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-900 hover:bg-sky-200 dark:bg-sky-900/40 dark:text-sky-200">
                  {t} →
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-neutral-900 dark:text-white">Utmaningen med SVA</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {[
          ["Vardagsspråk ≠ skolspråk", "En elev som pratar obehindrat på rasten kan sakna det abstrakta skolspråket. Bedöm därför språket i skoluppgifter, inte i samtal."],
          ["Språk och innehåll samtidigt", "Eleven lär sig ämnet på ett språk hen fortfarande lär sig. Skilj på vad eleven kan och hur väl hen kan uttrycka det."],
          ["Alla lärare är språklärare", "Ämnesord och texttyper i alla ämnen behöver undervisas. Samarbeta med kollegor om ord och texter."],
          ["Modersmålet är en resurs", "Låt eleven jämföra med sitt modersmål, tänka och anteckna på det och använda det som stöd (transspråkande)."],
          ["Stöttning som tas bort", "Ge stöd – ordlistor, meningsstartare, modelltexter – och ta bort det successivt. Cirkelmodellen (Gibbons) bygger på detta."],
          ["Mycket ord, ofta", "Ordförrådet är den största enskilda faktorn för läsförståelse. Möt samma ord många gånger i olika sammanhang."],
        ].map(([t, x]) => (
          <div key={t} className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="font-semibold text-neutral-900 dark:text-white">{t}</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{x}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
        Förslaget till nya kursplaner har en egen kursplan i svenska som andraspråk.{" "}
        <Link href="/ny-kursplan" className="font-medium text-sky-700 hover:underline dark:text-sky-400">
          Läs om förslaget och länk till Skolverkets remiss
        </Link>
        .
      </p>
    </section>
  );
}
