import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Ny kursplan i svenska – vad ändras?",
  description: "Skolverkets förslag till ny kursplan i svenska för den tioåriga grundskolan (remiss 2026): stadier, nyheter och hur läromedlet är anpassat.",
};

const KALLOR: [string, string, string][] = [
  ["Jämförelse Lgr22 och förslaget – svenska (Söraskolans AI)", "https://soraskolans-ai.vercel.app/laroplan/svenska", "Punkt för punkt: vad som är oförändrat, ändrat, flyttat och nytt."],
  ["Skolverkets remiss: förslag på nya läroplaner och kursplaner", "https://www.skolverket.se/om-skolverket/det-har-gor-skolverket/skolverkets-remisser/remisser/2026-11-09-remiss-forslag-pa-nya-laroplaner-och-kursplaner-for-grundskolan-anpassade-grundskolan-specialskolan-och-sameskolan", "Alla dokument, tidplan och hur man svarar på remissen."],
  ["Förslaget till kursplan i svenska (PDF)", "https://www.skolverket.se/download/18.76a8bb051a1a1b6316b9b16/1793969941839/Svenska%20%E2%80%93%20grundskola.pdf", "Hela kursplanen som den ser ut i förslaget."],
];

const STADIER: { stadium: string; idag: string; mal: string[]; nytt: string[]; har: [string, string][] }[] = [
  {
    stadium: "Årskurs 1, 2 och 3–4",
    idag: "motsvarar förskoleklass och åk 1–3 i Lgr22",
    mal: ["Mål för varje årskurs i åk 1 och 2, sedan för stadiet åk 3–4.", "I slutet av åk 2: läsa ord, korta meningar och enkla texter och skriva enkla meningar med rak ordföljd."],
    nytt: [
      "Systematisk läsinlärning: fonologisk och fonemisk medvetenhet, språklekar och en bestämd ordning för bokstäverna.",
      "Högfrekventa ord, korta och långa vokaler, dubbelteckning och ljudstridig stavning.",
      "Handskrift: pennfattning, skrivriktning och bokstävernas placering på skrivlinjen.",
      "Morfologisk medvetenhet: dela upp och bygga ord.",
      "Skrivande som verktyg för att tänka och lära.",
      "Medvetenhet om att generativ AI kan skapa och ändra texter, bilder och ljud.",
    ],
    har: [["Ljud, bokstäver och ord", "/lagstadiet/arbetsomraden/ljud-bokstaver-och-ord"], ["Skriva för hand", "/lagstadiet/arbetsomraden/skriva-for-hand"], ["Lyssna, följa och ge instruktioner", "/lagstadiet/arbetsomraden/lyssna-folja-och-ge-instruktioner"], ["Grammatik – lektionsplaner åk 1–4", "/lagstadiet/grammatik/planering/1"]],
  },
  {
    stadium: "Årskurs 5–7",
    idag: "motsvarar åk 4–6 i Lgr22",
    mal: ["Mål i slutet av stadiet för läsning, skrivande och muntlig kommunikation."],
    nytt: [
      "Grammatiska begrepp: tempus, huvud- och hjälpverb, bestämdhet, komparation och en introduktion till satsdelar.",
      "Skriva för att lära: skriva för hand för att minnas, nyckelord, begrepp och korta reflektionstexter.",
      "Digitalt skrivande: tangentbord, dokument och ordbehandling – och hur rättstavning och AI påverkar en självständig skrivförmåga.",
      "Läsning på skärm jämfört med papper, källkritik och generativ AI.",
      "Myter och sagor (flyttat hit från lågstadiet), lyrik och betydelsefulla barn- och ungdomsboksförfattare.",
    ],
    har: [["Skriva för att lära", "/mellanstadiet/arbetsomraden/skriva-for-att-lara"], ["Skriva och läsa digitalt", "/mellanstadiet/arbetsomraden/skriva-och-lasa-digitalt"], ["Berättelsens byggstenar", "/mellanstadiet/arbetsomraden/berattelsens-byggstenar"], ["Sant eller falskt?", "/mellanstadiet/arbetsomraden/sant-eller-falskt"], ["Grammatik – lektionsplaner åk 5–7", "/mellanstadiet/grammatik/planering/5"]],
  },
  {
    stadium: "Årskurs 8–10",
    idag: "motsvarar åk 7–9 i Lgr22",
    mal: ["Mål i slutet av stadiet, bland annat ett eget avsnitt om språk och litteratur."],
    nytt: [
      "Språkets struktur: samtliga ordklasser, satsdelar, meningsbyggnad och textbindning.",
      "Språkhistoria, AI:s påverkan på språket, dialekter, nordiska språk, minoritetsspråk och teckenspråk.",
      "Skönlitteratur: noveller, ungdomsromaner, klassiker, lyrik och dramatik i historiskt sammanhang.",
      "Källkritik med algoritmer och generativ AI, digitala och multimediala texter.",
      "Ansvarsfull kommunikation utifrån yttrandefrihet och integritet.",
    ],
    har: [["Svenskans historia", "/hogstadiet/arbetsomraden/svenskans-historia"], ["Dialekter och språklig variation", "/hogstadiet/arbetsomraden/dialekter-och-sprakbruk"], ["Skönlitteratur", "/hogstadiet/arbetsomraden/skonlitteratur-hela-verk-och-klassiker"], ["Digitala texter och ansvar", "/hogstadiet/arbetsomraden/digitala-texter-och-ansvar"], ["Grammatik – lektionsplaner åk 8–10", "/hogstadiet/grammatik/planering/8"]],
  },
];

export default function NyKursplanPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">För lärare</p>
      <h1 className="mt-1 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Ny kursplan i svenska – vad ändras?</h1>
      <p className="mt-3 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
        Skolverket har lämnat förslag på nya läroplaner och kursplaner för en tioårig grundskola. Förslaget är på remiss och kan ändras. Här är det
        viktigaste för svenskämnet – och hur läromedlet redan är anpassat.
      </p>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="font-semibold text-neutral-900 dark:text-white">Tidplan enligt Skolverket</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Remiss: 9 november 2026 – 20 januari 2027.</li>
          <li>Färdiga förslag till regeringen: 14 maj 2027.</li>
          <li>Planerat införande: höstterminen 2028.</li>
          <li>Till dess gäller Lgr22. Kursplansidorna på sajten visar den gällande kursplanen.</li>
        </ul>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-neutral-900 dark:text-white">Det övergripande</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {[
          ["Tioårig grundskola", "Förskoleklassen blir årskurs 1. Stadierna blir åk 1, åk 2, åk 3–4, åk 5–7 och åk 8–10."],
          ["Mål för varje stadium", "Kursplanen beskriver vad eleverna ska kunna i slutet av varje stadium (åk 1 och 2: i slutet av årskursen), tillsammans med innehållet. I Lgr22 beskrivs i stället centralt innehåll och betygskriterier."],
          ["Undervisningsstrategier", "Kursplanen beskriver också hur undervisningen ska utformas: små steg, aktivera förkunskaper, återkommande repetition och minimerad belastning på arbetsminnet."],
          ["Mer kunskapsfokus", "Läsning, skrivande – även för hand – och kunskap om språkets struktur får större plats. Grammatiken undervisas både för sig och i elevernas egna texter."],
        ].map(([t, x]) => (
          <div key={t} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
            <p className="font-semibold text-neutral-900 dark:text-white">{t}</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{x}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-bold text-neutral-900 dark:text-white">Stadie för stadie</h2>
      <div className="mt-4 space-y-6">
        {STADIER.map((s) => (
          <section key={s.stadium} className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              {s.stadium} <span className="text-base font-normal text-neutral-500">– {s.idag}</span>
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
              {s.mal.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-neutral-900 dark:text-white">Nytt eller tydligare</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-300">
              {s.nytt.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-neutral-900 dark:text-white">På sajten</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {s.har.map(([t, h]) => (
                <Link key={h} href={h} className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800 hover:bg-sky-100 dark:bg-sky-950/40 dark:text-sky-300">
                  {t} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-bold text-neutral-900 dark:text-white">Gymnasiet</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Förslaget gäller grundskolan. Gymnasiets arbetsområden och grammatik utgår från ämnesplanen i svenska – men eleverna kommer på sikt från en
        grundskola med det nya innehållet. Startprovet för gymnasiet prövar det som enligt förslaget ska sitta efter åk 8–10 – för elever som gått enligt Lgr22 motsvarar det åk 7–9.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-neutral-900 dark:text-white">Läs mer</h2>
      <ul className="mt-4 space-y-3">
        {KALLOR.map(([t, h, x]) => (
          <li key={h} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
            <a href={h} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-sky-700 hover:underline dark:text-sky-400">
              {t} <ExternalLink className="h-4 w-4" />
            </a>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{x}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-neutral-500">Sammanfattningen är gjord av läromedlet och ersätter inte Skolverkets egna dokument.</p>
    </div>
  );
}
