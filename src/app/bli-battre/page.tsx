import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Brain, CalendarCheck, ExternalLink, Mountain, NotebookPen, Sparkles, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Lasraknare } from "./lasraknare";

export const metadata: Metadata = {
  title: "Hur kan jag bli bättre på svenska?",
  description: "Läsning är den bästa träningen – för svenskan och för alla andra ämnen. Fakta, tips och ett sätt att komma igång.",
};

const SIFFROR = [
  {
    siffra: "50 000 – 15 000",
    text: "En 17-åring som läser mycket kan ungefär 50 000 ord. En 17-åring som nästan aldrig läser kan ungefär 15 000–17 000. Skillnaden är tiotusentals ord.",
    kalla: "Myrberg & Lundberg (uppskattning)",
    url: "https://www.bonnierforlagen.se/wp-content/uploads/2020/12/Ho%CC%88gla%CC%88sning_A5_digital.pdf",
  },
  {
    siffra: "8 000 – 9 000",
    text: "ordfamiljer behöver man kunna för att förstå 98 % av orden i en dagstidning eller en roman – och då förstå texten utan att behöva slå upp ord.",
    kalla: "Skolverket, Läslyftet (Nation)",
    url: "https://www.skolverket.se/download/18.645f1c0e17821f1d15c3829/1623222894776/artikel-5-ordforradets-betydelse-2.pdf",
  },
  {
    siffra: "1,8 miljoner",
    text: "ord om året mötte elever som läste ungefär 20 minuter om dagen. De som läste några få minuter mötte bara en bråkdel så många.",
    kalla: "Anderson, Wilson & Fielding (1988)",
    url: "https://core.ac.uk/download/4826438.pdf",
  },
];

const FORSTA = [
  { siffra: "6 000–7 000", text: "ordfamiljer räcker ofta för att hänga med i ett vanligt samtal eller en film." },
  { siffra: "8 000–9 000", text: "behövs för att läsa en tidning eller en roman utan att fastna." },
  { siffra: "50 000+", text: "ord kan den som läser mycket – och då är det lätt att förstå både nyheter, läroböcker och avtal." },
];


const TIPS = [
  {
    rubrik: "Välj en bok som är lagom",
    text: "Läs en sida. Finns det fler än fem ord du inte förstår är boken för svår just nu. För lätt är bättre än för svårt – det viktiga är att du läser.",
  },
  {
    rubrik: "Läs varje dag – samma tid",
    text: "Gör det till en vana, som att borsta tänderna. Till exempel 20 minuter innan du somnar. Ställ in en timer om det hjälper.",
  },
  {
    rubrik: "Lägg undan mobilen",
    text: "Lägg telefonen i ett annat rum medan du läser. Hjärnan behöver lugn för att komma in i en berättelse.",
  },
  {
    rubrik: "Lyssna och läs samtidigt",
    text: "Ljudbok + bok samtidigt är ett bra sätt att komma igång – du hör hur orden låter och ser hur de stavas.",
  },
  {
    rubrik: "Prata om det du läser",
    text: "Berätta för någon vad som händer i boken. Då minns du mer, och du tränar på att sammanfatta.",
  },
  {
    rubrik: "Byt bok utan dåligt samvete",
    text: "Ge en bok 30 sidor. Är den fortfarande tråkig – byt! Det finns en bok för alla, men man hittar den inte alltid direkt.",
  },
];

export default function BliBattrePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-12">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
          <TrendingUp className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Hur kan jag bli bättre på svenska?</h1>
        <p className="mt-4 text-xl text-neutral-700 dark:text-neutral-300">
          Det finns ett knep som slår alla andra: <b>läs</b>. Varje dag. Läsning gör dig bättre på svenska – och på nästan allt annat i
          skolan, eftersom du läser i alla ämnen.
        </p>
        <Link href="/varfor-svenska" className="mt-3 inline-block font-medium text-sky-700 hover:underline dark:text-sky-400">
          Varför behöver jag bli bättre på svenska? →
        </Link>
      </div>

      {/* Siffror */}
      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">Därför är läsning så viktigt</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {SIFFROR.map((s) => (
            <Card key={s.siffra}>
              <CardContent className="flex h-full flex-col p-5">
                <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">{s.siffra}</p>
                <p className="mt-2 flex-1 text-neutral-800 dark:text-neutral-200">{s.text}</p>
                <a href={s.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-neutral-500 hover:underline">
                  Källa: {s.kalla} <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          När du läser mycket lär du dig nya ord utan att tänka på det. Du ser hur meningar byggs och hur ord stavas. Du blir snabbare
          på att förstå texter – i SO, NO, matte och på prov. Det är därför forskare kallar läsning för grunden till allt annat lärande.
        </p>
      </section>

      {/* Hur många ord behövs? */}
      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">Hur många ord behöver man kunna?</h2>
        <div className="space-y-3">
          {FORSTA.map((f, i) => (
            <div key={f.siffra} className="flex items-center gap-4">
              <div className="h-3 rounded-full bg-emerald-500" style={{ width: `${[30, 45, 100][i]}%`, maxWidth: "60%" }} />
              <p className="text-neutral-800 dark:text-neutral-200">
                <b>{f.siffra}</b> {f.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-neutral-500">
          En ordfamilj är ett ord med alla sina former, t.ex. läsa, läser, läste, läsare. Siffrorna kommer från forskning om läsning och ordförråd
          (Nation 2006) och är ungefärliga.
        </p>
      </section>

      {/* Räknare */}
      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">Räkna själv</h2>
        <Lasraknare />
      </section>

      {/* Ärligt */}
      <section className="mb-14">
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30">
          <CardContent className="flex gap-4 p-6">
            <Mountain className="mt-1 h-8 w-8 shrink-0 text-amber-600" />
            <div className="space-y-3 text-neutral-800 dark:text-neutral-200">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Ärligt talat: det kan vara jobbigt i början</h2>
              <p>
                Att bli en bra läsare är som att börja träna. De första veckorna är tunga och det känns som att inget händer. Men varje
                gång du läser blir det lite lättare – du känner igen fler ord, läser snabbare och orkar längre.
              </p>
              <p>
                Det fungerar som en snöboll: den som läser lite tycker att det är jobbigt och läser ännu mindre. Den som läser mer blir
                bättre, tycker det blir roligare och läser ännu mer. Forskare kallar det <b>Matteuseffekten</b>. Det goda är att du själv
                bestämmer vilket håll din snöboll rullar åt.
              </p>
              <p className="font-semibold">Det tar tid. Men det är en av de bästa investeringar du kan göra – för skolan och för resten av livet.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tips */}
      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">Så kommer du igång</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {TIPS.map((t, i) => (
            <Card key={t.rubrik}>
              <CardContent className="p-5">
                <p className="mb-1 font-semibold text-neutral-900 dark:text-white">
                  {i + 1}. {t.rubrik}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">{t.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mer */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">Fler sätt att träna</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/mellanstadiet/lastraning#plan", ikon: CalendarCheck, titel: "Läsplan i 6 veckor", text: "Bygg en läsvana steg för steg. Välj ditt stadium på sidan." },
            { href: "/mellanstadiet/lastraning", ikon: BookOpen, titel: "Testa din läsförståelse", text: "Se vad du är bra på och vad du kan träna mer på." },
            { href: "/ordforrad", ikon: Brain, titel: "Testa ditt ordförråd", text: "Hur många ord kan du? Testa och se din nivå." },
            { href: "/veckans-ord", ikon: Sparkles, titel: "Veckans ord", text: "Nya ord varje vecka för din årskurs." },
            { href: "/ovningshaften", ikon: NotebookPen, titel: "Övningshäften", text: "Träna stavning, grammatik och skiljetecken." },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <l.ikon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">{l.titel}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{l.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
