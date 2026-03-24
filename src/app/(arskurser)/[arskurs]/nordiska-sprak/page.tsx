import { notFound } from "next/navigation";
import { Globe, Lightbulb, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getNordiskaSprakExercises } from "@/lib/data/nordiska-sprak-ovningar";
import { NordiskaSprakOvningar } from "@/components/nordiska-sprak-ovningar";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </div>
  );
}

function LanguageCard({
  name,
  speakers,
  region,
  description,
  color,
}: {
  name: string;
  speakers: string;
  region: string;
  description: string;
  color: string;
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className={`absolute left-0 top-0 h-full w-1 ${color}`} />
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge variant="secondary">{speakers}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <strong>Område:</strong> {region}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Minority language data                                             */
/* ------------------------------------------------------------------ */

const MINORITY_LANGUAGES = [
  {
    name: "Finska",
    speakers: "ca 200 000\u2013250 000",
    region: "Tornedalen, Mälardalen, storstadsområden",
    description:
      "Finska har talats i Sverige i hundratals år, framför allt i Tornedalen och Norrbotten. Under 1900-talet invandrade dessutom många finsktalande till industriorterna. Finska tillhör den finsk-ugriska språkfamiljen och är alltså inte alls besläktat med svenska. Det är det största minoritetsspråket i Sverige.",
    color: "bg-blue-400 dark:bg-blue-600",
  },
  {
    name: "Meänkieli",
    speakers: "ca 30 000\u201370 000",
    region: "Tornedalen (Norrbotten)",
    description:
      "Meänkieli (tornedalsfinska) är nära besläktat med finska men har utvecklats självständigt i Tornedalen sedan gränsen mellan Sverige och Finland drogs 1809. Språket erkändes som ett eget språk (inte en finsk dialekt) år 2000. Namnet betyder \u201Dvårt språk\u201D.",
    color: "bg-cyan-400 dark:bg-cyan-600",
  },
  {
    name: "Samiska",
    speakers: "ca 15 000\u201325 000",
    region: "Norra Sverige (Sápmi), från Dalarna till Treriksröset",
    description:
      "Samiska är ursprungsfolkets språk och har talats i norra Skandinavien i tusentals år. Det finns flera varieteter: nordsamiska, lulesamiska, sydsamiska med flera. Samiska tillhör den finsk-ugriska språkfamiljen. Många varieteter är hotade, och revitaliseringsarbete pågår med bland annat samiskspråkiga förskolor och media.",
    color: "bg-red-400 dark:bg-red-600",
  },
  {
    name: "Romani chib",
    speakers: "ca 30 000\u201350 000",
    region: "Spritt över hela Sverige, inget geografiskt kärnområde",
    description:
      "Romani chib är romernas språk och tillhör de indoariska språken inom den indoeuropeiska språkfamiljen. Språket har funnits i Sverige sedan 1500-talet. Det finns flera varieteter, bland annat kelderasch- och lovariromani. Historiskt har romerna utsatts för förföljelse och deras språk förtryckts.",
    color: "bg-orange-400 dark:bg-orange-600",
  },
  {
    name: "Jiddisch",
    speakers: "ca 2 000\u20134 000",
    region: "Spritt över hela Sverige, främst i storstäder",
    description:
      "Jiddisch är ett germanskt språk med inslag av hebreiska, arameiska och slaviska språk. Det utvecklades bland judiska samhällen i Central- och Östeuropa under medeltiden. Jiddisch har talats i Sverige sedan 1700-talet. Förintelsen decimerade antalet talare dramatiskt. Språket har en rik litterär tradition.",
    color: "bg-purple-400 dark:bg-purple-600",
  },
];

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export function generateStaticParams() {
  return AGE_GROUPS.filter(
    (g) => g.slug !== "lagstadiet" && g.slug !== "mellanstadiet",
  ).map((g) => ({
    arskurs: g.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Nordiska språk & minoritetsspråk \u2013 ${group.label}`,
    description: `Lär dig om de nordiska språken och Sveriges nationella minoritetsspråk, anpassat för ${group.label.toLowerCase()}.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function NordiskaSprakPage({ params }: Props) {
  const { arskurs } = await params;

  if (
    !VALID_AGE_GROUPS.has(arskurs) ||
    arskurs === "lagstadiet" ||
    arskurs === "mellanstadiet"
  ) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const level = arskurs as AgeGroup;
  const exercises = getNordiskaSprakExercises(level);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Globe className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Nordiska språk &amp; minoritetsspråk
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {level === "hogstadiet"
            ? "Utforska hur de nordiska språken hänger ihop och lär dig om Sveriges fem nationella minoritetsspråk."
            : "Fördjupa dig i nordisk språkförståelse, språkpolitik och minoritetsspråkens rättigheter och historia."}
        </p>
      </div>

      {/* ============================================================= */}
      {/*  NORDISKA SPRÅKFAMILJEN                                        */}
      {/* ============================================================= */}

      <Section title="Den nordiska språkfamiljen">
        <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
          <p>
            De nordiska språken tillhör den nordgermanska grenen av de
            indoeuropeiska språken. Under vikingatiden talade man i hela Norden
            ett språk som kallas fornnordiska. Med tiden utvecklades det till
            fem separata språk:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Card>
              <CardContent className="py-4">
                <p className="mb-1 font-semibold text-neutral-900 dark:text-white">
                  Fastlandsnordiska (östnordiska)
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Svenska, danska</strong> och <strong>norska</strong>{" "}
                  (bokmål/nynorsk). Dessa tre är relativt lika varandra och
                  talarna kan ofta förstå varandra.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-4">
                <p className="mb-1 font-semibold text-neutral-900 dark:text-white">
                  Önordiska (västnordiska)
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Isländska</strong> och <strong>färöiska</strong>.
                  Dessa har bevarat fler drag från fornnordiskan och är mycket
                  svårare att förstå för svenskar.
                </p>
              </CardContent>
            </Card>
          </div>

          {level === "hogstadiet" && (
            <>
              <p>
                Att svenska, danska och norska talare kan förstå varandra
                kallas <strong>ömsesidig begriplighet</strong>. Det fungerar
                bäst mellan svenska och norska. Danskan kan vara svårare att
                förstå på grund av uttalet, men skriftbilden liknar svenska
                mycket.
              </p>
              <Tip>
                <strong>Visste du?</strong> Isländska elever kan fortfarande
                läsa vikingasagor i original, eftersom isländskan har förändrats
                så lite sedan medeltiden.
              </Tip>
            </>
          )}

          {level === "gymnasiet" && (
            <>
              <p>
                Uppdelningen i öst- och västnordiska skedde gradvis under
                tidig medeltid. Öst- och västnordiska skiljer sig bland annat
                i hur diftonger behandlades: västnordiskan bevarade
                fornnordiska diftonger (isländska <em>steinn</em>), medan
                östnordiskan monoftongerade dem (svenska <em>sten</em>).
              </p>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-base">
                    Ömsesidig begriplighet och asymmetri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <p>
                    Forskning visar att graden av förståelse mellan
                    skandinaviska språk är asymmetrisk. Norrmän förstår
                    generellt svenska och danska bättre än vad svenskar och
                    danskar förstår varandra. Orsakerna inkluderar:
                  </p>
                  <ul className="space-y-1 pl-4">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      Norrmän exponeras mer för svenska och dansk media
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      Norska ligger mitt emellan svenska och danska
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      Danskt uttal har genomgått kraftig konsonantreduktion
                      som gör det svårare att förstå
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      Unga skandinaver väljer allt oftare engelska i stället
                      för att använda sitt eget språk
                    </li>
                  </ul>
                  <Tip>
                    <strong>Skandinavisk debatt:</strong> Nordiska ministerrådet
                    har uttryckt oro för att den nordiska språkförståelsen
                    minskar, särskilt bland unga. Ska man satsa på
                    grannspråksundervisning eller acceptera engelska som
                    skandinaviskt kontaktspråk?
                  </Tip>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-base">
                    Norska: bokmål och nynorsk
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <p>
                    Norge har en unik språksituation med två officiella
                    skriftspråk. <strong>Bokmål</strong> utvecklades ur danskt
                    skriftspråk under den danska unionen (1380{"\u2013"}1814)
                    och förnorskades gradvis. <strong>Nynorsk</strong> skapades
                    av Ivar Aasen på 1800-talet genom att samla in och
                    systematisera norska dialekter.
                  </p>
                  <p>
                    Ungefär 85 % av norrmännen använder bokmål som
                    huvudskriftspråk. Frågan om bokmål vs. nynorsk är
                    fortfarande en levande språkpolitisk debatt i Norge.
                  </p>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </Section>

      {/* ============================================================= */}
      {/*  NATIONELLA MINORITETSSPRÅK                                    */}
      {/* ============================================================= */}

      <Section title="De nationella minoritetsspråken">
        <div className="mb-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <p>
            Sverige har fem erkända nationella minoritetsspråk:{" "}
            <strong>finska, meänkieli, samiska, romani chib</strong> och{" "}
            <strong>jiddisch</strong>. De skyddas av lag sedan år 2000, och
            sedan 2009 stärker språklagen och lagen om nationella minoriteter
            deras ställning ytterligare.
          </p>
          {level === "gymnasiet" && (
            <p>
              Erkännandet bygger på Europarådets ramkonvention om nationella
              minoriteter och den europeiska stadgan om landsdels- eller
              minoritetsspråk. Språken valdes ut baserat på att de har talats
              i Sverige under lång tid och att talarna utgör en tydlig grupp
              med önskan att bevara sin identitet.
            </p>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {MINORITY_LANGUAGES.map((lang) => (
            <LanguageCard key={lang.name} {...lang} />
          ))}
        </div>

        {level === "gymnasiet" && (
          <div className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Minoritetsspråkens rättigheter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <p>
                  Lagen om nationella minoriteter ger talare av finska,
                  meänkieli och samiska rätt att använda sitt språk i kontakt
                  med myndigheter inom så kallade <strong>förvaltningsområden</strong>{" "}
                  {"\u2014"} kommuner som anmält sig frivilligt. Inom dessa
                  områden har man också rätt till förskola och äldreomsorg
                  på minoritetsspråket.
                </p>
                <p>
                  Romani chib och jiddisch har inte förvaltningsområden men
                  skyddas ändå av lagen. Staten har ansvar för att främja
                  dessa språk genom kulturstöd och utbildning.
                </p>
                <Tip>
                  <strong>Språkbyte och revitalisering:</strong> När en grupp
                  successivt övergår till majoritetsspråket kallas det
                  språkbyte (<em>language shift</em>). Alla fem
                  minoritetsspråken är i varierande grad hotade. Aktiva
                  revitaliseringsinsatser inkluderar språkbad i förskolan,
                  minoritetsspråkig media och mentorprogram där äldre talare
                  för kunskap vidare till yngre generationer.
                </Tip>
              </CardContent>
            </Card>
          </div>
        )}
      </Section>

      {/* ============================================================= */}
      {/*  GRANNSPRÅKSFÖRSTÅELSE                                         */}
      {/* ============================================================= */}

      <Section title="Grannspråksförståelse">
        <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          {level === "hogstadiet" && (
            <>
              <p>
                Att kunna förstå danska och norska utan att ha studerat dem
                är en unik fördel som vi skandinaver har. Det kräver lite
                övning, men belöningen är stor {"\u2014"} du får tillgång till
                grannländernas kultur, litteratur och media.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Card>
                  <CardContent className="py-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-neutral-400" />
                      <p className="font-semibold text-neutral-900 dark:text-white">
                        Tips för att förstå danska
                      </p>
                    </div>
                    <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                      <li className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        Fokusera på skriftbilden {"\u2014"} den liknar svenska
                        mer än uttalet gör
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        Lär dig vanliga danska ord som skiljer sig: hyggelig
                        (trevlig), sjov (rolig), dreng (pojke)
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        Titta på danska tv-serier med dansk text
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-neutral-400" />
                      <p className="font-semibold text-neutral-900 dark:text-white">
                        Tips för att förstå norska
                      </p>
                    </div>
                    <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                      <li className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        Norska låter ofta ganska likt svenska {"\u2014"} lyssna
                        aktivt och gissa utifrån sammanhanget
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        Akta dig för falska vänner: gøy (kul), morsom
                        (rolig), hytte (stuga)
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        Läs norska nyheter eller böcker {"\u2014"} de är
                        förvånansvärt lätta att förstå
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {level === "gymnasiet" && (
            <>
              <p>
                Grannspråksförståelsen är en av de mest unika aspekterna av den
                skandinaviska språkgemenskapen. Den bygger på en kombination av
                lingvistisk närhet, historiska band och kulturell gemenskap. Men
                forskning visar att förståelsen minskar, särskilt bland yngre
                generationer.
              </p>
              <Card className="mt-3">
                <CardHeader>
                  <CardTitle className="text-base">
                    Faktorer som påverkar grannspråksförståelsen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 font-semibold text-neutral-800 dark:text-neutral-200">
                        Underlättar
                      </p>
                      <ul className="space-y-1">
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          Exponering för grannspråk via media och resor
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          Motivation och positiv attityd till grannspråk
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          Undervisning om grannspråk i skolan
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          Geografisk närhet (gränstrakter)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-neutral-800 dark:text-neutral-200">
                        Försvårar
                      </p>
                      <ul className="space-y-1">
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                          Bristande exponering, särskilt bland unga
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                          Engelskans dominans som kontaktspråk
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                          Uttalsskillnader (särskilt danskt uttal)
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                          Falska vänner och skilda ordförråd
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Tip>
                <strong>Språkpolitisk fråga:</strong> Nordiska ministerrådet
                har arbetat för att bevara den skandinaviska
                grannspråksförståelsen, bland annat genom satsningen{" "}
                &quot;Nordisk språkförståelse&quot;. Diskutera: Vems ansvar
                är det att upprätthålla grannspråksförståelsen {"\u2014"}{" "}
                individens, skolans eller statens?
              </Tip>
            </>
          )}
        </div>
      </Section>

      {/* ============================================================= */}
      {/*  STUDY TIPS                                                    */}
      {/* ============================================================= */}

      <Section title="Tips för studier">
        {level === "hogstadiet" && (
          <>
            <Tip>
              <strong>Öva grannspråksförståelse:</strong> Prova att läsa en
              kort nyhet på norska eller danska varje vecka. NRK (Norge) och
              DR (Danmark) har bra webbsidor. Skriv ner ord du inte förstår
              och jämför med svenska.
            </Tip>
            <Tip>
              <strong>Utforska minoritetsspråken:</strong> Lyssna på musik
              eller titta på korta videoklipp på samiska, finska eller romani
              chib. Hur låter det? Kan du gissa vad det handlar om?
            </Tip>
            <Tip>
              <strong>Gör övningarna:</strong> Testa dina kunskaper med
              övningarna längst ner på sidan. Grannspråksövningarna hjälper
              dig träna på att läsa danska och norska.
            </Tip>
          </>
        )}
        {level === "gymnasiet" && (
          <>
            <Tip>
              <strong>Jämförande analys:</strong> Välj en kort text på
              svenska och hitta samma text (eller liknande) på danska och
              norska. Identifiera systematiska skillnader i ordförråd,
              stavning och grammatik.
            </Tip>
            <Tip>
              <strong>Språkpolitisk debatt:</strong> Diskutera i klassen:
              Bör Sverige göra mer för att skydda minoritetsspråken? Vilka
              åtgärder är mest effektiva: lagstiftning, skolundervisning
              eller mediesatsningar?
            </Tip>
            <Tip>
              <strong>Fördjupning:</strong> Undersök ett av minoritetsspråken
              närmare. Vilka historiska händelser har påverkat språkets
              ställning? Hur ser situationen ut idag jämfört med för 50 år
              sedan?
            </Tip>
            <Tip>
              <strong>Interdisciplinärt:</strong> Koppla nordisk
              språkförståelse till samhällskunskap (nordiskt samarbete, EU),
              historia (unioner, gränsdragningar) och filosofi (vad innebär
              det att förlora sitt språk?).
            </Tip>
          </>
        )}
      </Section>

      {/* ============================================================= */}
      {/*  EXERCISES                                                     */}
      {/* ============================================================= */}

      {exercises.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
            Övningar
          </h2>
          <NordiskaSprakOvningar exercises={exercises} />
        </section>
      )}
    </div>
  );
}
