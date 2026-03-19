import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, BookOpen, Lightbulb, ClipboardCheck, GraduationCap, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Svenska som andrasprak (SVA)",
  description:
    "Information och tips for dig som laser svenska som andrasprak. Strategier for ordforrad, grammatik och nationella prov.",
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const TIPS_SECTIONS = [
  {
    icon: BookOpen,
    title: "Bygg ditt ordforrad",
    items: [
      "Las mycket pa svenska – borja med enklare texter och oka svarighetsgraden.",
      "Skriv nya ord i en ordbok eller app. Skriv ordet, en exempelmening och en oversattning.",
      "Overgeneralera! Anvand nya ord i egna meningar, aven om det blir fel – det ar sa man lar sig.",
      "Gruppera ord efter tema (t.ex. mat, skola, kanslor) for att minnas dem battre.",
      "Lyssna pa svensk radio, poddar eller se pa svensk TV med undertexter.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Vanliga grammatikutmaningar",
    items: [
      "Genus (en/ett): Det finns inga tydliga regler. Lar dig genus tillsammans med varje nytt substantiv. Tips: cirka 75% av alla substantiv ar en-ord.",
      "Ordfoljd: Pa svenska kommer verbet alltid pa andra plats i huvudsatsen (V2-regeln). Exempel: 'Igar kopte jag en bok' – inte 'Igar jag kopte en bok'.",
      "Prepositioner: Svensk prepositionsanvandning skiljer sig fran de flesta sprak. 'Pa morgonen', 'i skolan', 'till jobbet' – lar dig hela fraser istallet for enskilda prepositioner.",
      "Partikelverb: 'Sta upp', 'ga ut', 'komma pa' – partikeln andrar verbets betydelse. Samla partikelverb i din ordbok!",
    ],
  },
  {
    icon: Languages,
    title: "Anvand ditt forstasprak som resurs",
    items: [
      "Jamfor grammatiken i ditt forstasprak med svenskan – likheter hjalper dig att minnas.",
      "Tanken i bada spraken nar du skriver – planera pa det sprak du tanker bast pa och oversatt sedan.",
      "Sla upp internationella ord (t.ex. 'television', 'politik') – de ar ofta lika pa manga sprak.",
      "Diskutera texter med andra som talar ditt sprak for att forsta innehallet djupare.",
      "Flersprakighet ar en styrka – den ger dig ett bredare perspektiv pa texter och sprak.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Tips for SVA nationella prov",
    items: [
      "SVA-proven bedomsbredare an SVE-proven: du bedoms pa hur val du kommunicerar, inte bara pa korrekt grammatik.",
      "Muntliga delprovet: Forbered dig genom att ova pa att tala i langre stunder om ett amne. Strukturera ditt tal med inledning, huvuddel och avslutning.",
      "Lasforstaelse: Las fragan noga fore du laser texten. Markera nyckelord. Du far oftast ga tillbaka till texten.",
      "Skriftliga delprovet: Fokusera pa att gora dig forstadd. Anvand sambandsord (dessutom, daremot, darfor att) for att binda ihop texten.",
      "Tidshantering: Dela upp tiden. Lagg inte all tid pa en uppgift – alla delarna ar viktiga.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function SvaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          <Globe className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Svenska som andrasprak (SVA)
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Tips, strategier och resurser for dig som laser SVA
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Vad ar SVA?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              <strong>Svenska som andrasprak (SVA)</strong> ar ett eget amne i den svenska skolan.
              Det ar till for elever som har ett annat forstasprak an svenska och behover extra stod
              for att utveckla sin svenska.
            </p>
            <p>
              SVA foljersamma kursplan som svenska (SVE) men med nagra viktiga skillnader.
              I SVA far du mer stod med sprakutveckling, och bedomningen tar hansyn till att du
              haller pa att lara dig spraket.
            </p>
            <p>
              Du som laser SVA har ratt till samma betyg och behorighetkrav som alla andra elever.
              SVA-betyg ar lika mycket vart som SVE-betyg.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key differences SVE vs SVA */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
          Skillnader mellan SVE och SVA
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">SVE (Svenska)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>For elever med svenska som forstasprak</li>
                <li>Fokus pa fordjupad sprakanalys och litteratur</li>
                <li>Bedomning av spraklig korrekthet och variation</li>
                <li>Nordiska sprak och sprakhistoria ingår</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">SVA (Svenska som andrasprak)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>For elever med annat forstasprak an svenska</li>
                <li>Fokus pa sprakutveckling och kommunikation</li>
                <li>Bedomning tar hansyn till att du lar dig spraket</li>
                <li>Jamforelser mellan svenska och andra sprak ingår</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips sections */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
          Tips for SVA-elever
        </h2>
        <div className="space-y-6">
          {TIPS_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    <CardTitle className="text-base">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 text-neutral-400">&#8226;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Useful resources */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
          Anvanda resurser
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
                <span>
                  <strong>Skolverket</strong> – Kursplaner och bedomningsstod for SVA pa{" "}
                  <a
                    href="https://www.skolverket.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-neutral-900 dark:hover:text-white"
                  >
                    skolverket.se
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
                <span>
                  <strong>Lasforstaelse</strong> – Var{" "}
                  <Link href="/ovningar" className="underline hover:text-neutral-900 dark:hover:text-white">
                    ovningssida
                  </Link>{" "}
                  har interaktiva fragor i grammatik, stavning och mer.
                </span>
              </li>
              <li className="flex gap-2">
                <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
                <span>
                  <strong>Grammatik</strong> – Se var{" "}
                  <Link href="/grammatik" className="underline hover:text-neutral-900 dark:hover:text-white">
                    grammatiksida
                  </Link>{" "}
                  for forklaringar av ordklasser, meningsbyggnad och mer.
                </span>
              </li>
              <li className="flex gap-2">
                <ClipboardCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
                <span>
                  <strong>Nationella prov</strong> – Information om proven finns pa var{" "}
                  <Link href="/nationella-prov" className="underline hover:text-neutral-900 dark:hover:text-white">
                    sida om nationella prov
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Encouragement banner */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-900/20">
        <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
          Kom ihag: att lara sig ett nytt sprak tar tid. Varje dag du ovar, blir du lite battre.
          Din flersprakighet ar en superkraft!
        </p>
      </div>
    </div>
  );
}
