import { notFound } from "next/navigation";
import { Lightbulb, Clock, Languages } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getSprakhistoriaExercises } from "@/lib/data/sprakhistoria-ovningar";
import { SprakhistoriaOvningar } from "@/components/sprakhistoria-ovningar";

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

function TimelineBadge({ years }: { years: string }) {
  return (
    <div className="flex items-center gap-2">
      <Clock className="h-4 w-4 text-neutral-400" />
      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {years}
      </span>
    </div>
  );
}

function PeriodCard({
  title,
  years,
  badgeLabel,
  context,
  characteristics,
  keyEvents,
  connection,
}: {
  title: string;
  years: string;
  badgeLabel: string;
  context: string;
  characteristics: string[];
  keyEvents: { name: string; description: string }[];
  connection: string;
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-neutral-300 dark:bg-neutral-700" />
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <TimelineBadge years={years} />
          </div>
          <Badge variant="secondary">{badgeLabel}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Historisk kontext
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {context}
          </p>
        </div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Viktiga drag
          </h4>
          <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            {characteristics.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
            Viktiga händelser och texter
          </h4>
          <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            {keyEvents.map((e) => (
              <li key={e.name} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <span>
                  <strong className="text-neutral-800 dark:text-neutral-200">
                    {e.name}
                  </strong>{" "}
                  &ndash; {e.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Tip>
          <strong>Koppling till idag:</strong> {connection}
        </Tip>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Högstadiet period data                                             */
/* ------------------------------------------------------------------ */

const HOGSTADIET_PERIODS = [
  {
    title: "Runsvenska",
    years: "ca 800\u20131225",
    badgeLabel: "Period 1",
    context:
      "Under vikingatiden och den tidiga medeltiden var det talade språket det viktigaste. Skrift användes främst i form av runinskrifter på stenar, trästycken och metallföremål. Runinskrifterna är våra äldsta bevarade källor till det svenska språket.",
    characteristics: [
      "Runalfabetet (futharken) användes för inskrifter \u2014 först den äldre futharken med 24 tecken, sedan den yngre med 16",
      "Språket hade ett kasussystem med fyra kasus: nominativ, genitiv, dativ och ackusativ",
      "Ordförrådet var i huvudsak germanskt med få lånord",
      "Dialekterna i Norden var fortfarande ömsesidigt begripliga \u2014 man talar ibland om \u201Dnordiska\u201D snarare än separata språk",
      "Vikingatidens handelskontakter bidrog med enstaka lånord från keltiska, slaviska och arabiska språk",
    ],
    keyEvents: [
      {
        name: "Rökstenen (ca 800)",
        description:
          "En av de mest imponerande runstenarna med över 700 runtecken. Texten berättar om heroiska bragder och visar att språket redan hade ett rikt ordförråd.",
      },
      {
        name: "Kristnandet (ca 1000)",
        description:
          "När Sverige kristnades kom latinet som kyrkospråk och skriftkultur, vilket på sikt skulle påverka det svenska skriftspråket grundläggande.",
      },
      {
        name: "Runstenstraditionen",
        description:
          "Över 2 500 runstenar har hittats i Sverige \u2014 fler än i något annat land. De berättar om resor, arv, och visar att även kvinnor lät resa stenar.",
      },
    ],
    connection:
      "Många svenska ortnamn har sitt ursprung i runsvensk tid (t.ex. Uppsala, Sigtuna). Runinskrifter är en unik historisk källa som ger oss direkt tillgång till vikingatidens språk och tankevärldar.",
  },
  {
    title: "Fornsvenska",
    years: "ca 1225\u20131526",
    badgeLabel: "Period 2",
    context:
      "Med kristendomens etablering och framväxten av statsförvaltning började man skriva längre texter på svenska. Det latinska alfabetet ersatte runorna. Hansaförbundets inflytande ledde till en massiv invasion av tyska lånord.",
    characteristics: [
      "Övergången från runalfabet till latinskt alfabet möjliggjorde längre texter",
      "Kasussystemet började förenklas \u2014 dativ och ackusativ smälte samman",
      "Tyska lånord strömmade in via Hansans handelskontakter: arbeta, betala, fru, herrskap, verkstad",
      "Landskapslagarna tillhör de äldsta bevarade texterna på svenska",
      "Religiösa texter översattes från latin till svenska",
    ],
    keyEvents: [
      {
        name: "Landskapslagarna (1200-talet)",
        description:
          "De äldsta svenska lagtexterna, skrivna på folkspråket. Varje landskap hade sina lagar, t.ex. Västgötalagen (ca 1225) som är den äldsta bevarade texten på svenska.",
      },
      {
        name: "Heliga Birgittas Uppenbarelser (1300-talet)",
        description:
          "Birgittas visioner skrevs ner på latin och översattes till svenska. De spreds över hela Europa och är ett tidigt exempel på svensk prosa.",
      },
      {
        name: "Hansans inflytande (1300\u20131400-talet)",
        description:
          "Tyska köpmän dominerade handeln och med dem kom tusentals tyska lånord. Uppskattningsvis en tredjedel av svenska ordförrådet har tyskt ursprung.",
      },
      {
        name: "Erikskrönikan (1320-talet)",
        description:
          "En rimkrönika som berättar om svensk historia. Viktig som källa och som exempel på fornsvensk litteratur.",
      },
    ],
    connection:
      "Många vardagliga svenska ord som frukost, billig och snickare är tyska lånord från denna period. Lagstiftningstraditionen från landskapslagarna lever kvar i det svenska rättssystemet.",
  },
  {
    title: "Äldre nysvenska",
    years: "ca 1526\u20131732",
    badgeLabel: "Period 3",
    context:
      "Reformationen och boktryckarkonsten förändrade språket i grunden. Gustav Vasas bibelöversättning 1541 blev den första stora boken på svenska och fick enorm betydelse för skriftspråkets standardisering.",
    characteristics: [
      "Boktryckarkonsten (från 1480-talet) möjliggjorde spridning av texter till en bredare publik",
      "Bibelöversättningen 1541 etablerade en skriftspråksnorm och enade dialekterna i skrift",
      "Kasussystemet fortsatte att förenklas \u2014 i talspråket försvann kasusformerna nästan helt",
      "Latin dominerade fortfarande i lärdomsvärlden, men svenskan användes alltmer i förvaltning",
      "Språklig centralisering: Stockholms- och Mälardalsdialekterna blev norm för skriftspråket",
    ],
    keyEvents: [
      {
        name: "Gustav Vasas bibel (1541)",
        description:
          "Den första fullständiga bibelöversättningen till svenska. Blev normerande för stavning och grammatik och lästes i alla svenska kyrkor.",
      },
      {
        name: "Boktryckarkonsten i Sverige (1483)",
        description:
          "Den första boken trycktes i Sverige. Trycket möjliggjorde standardisering av stavning och spridning av texter utanför klostren.",
      },
      {
        name: "Stormaktstiden",
        description:
          "Under 1600-talet växte Sverige till en stormakt. Behovet av en enhetlig förvaltning drev på språklig standardisering.",
      },
    ],
    connection:
      "Bibelöversättningen 1541 lade grunden för modernt svenskt skriftspråk. Många av de uttryck vi använder dagligen \u2014 som \u201Dsyndabock\u201D och \u201Dbarmhärtig\u201D \u2014 kommer från bibelspråket.",
  },
  {
    title: "Yngre nysvenska",
    years: "ca 1732\u20131906",
    badgeLabel: "Period 4",
    context:
      "Upplysningen, pressen och Svenska Akademiens grundande bidrog till att språket växte som kultur- och vetenskapsspråk. Dagstidningar, romaner och debatt på svenska blev allt vanligare.",
    characteristics: [
      "Svenska Akademien grundades 1786 med uppdrag att vårda det svenska språket",
      "Dagstidningar växte fram och spred ett enhetligt skriftspråk",
      "Franskans inflytande ökade bland överklassen: byrå, balkong, möbler, garderob",
      "Stavningen var fortfarande oenhetlig \u2014 många ord kunde stavas på flera sätt",
      "Nationalromantiken på 1800-talet lyfte fram svenskan som nationalspråk och kulturidentitet",
    ],
    keyEvents: [
      {
        name: "Svenska Akademien (1786)",
        description:
          "Gustav III grundade akademien för att främja det svenska språket. SAOL (ordlistan) och SAOB (ordboken) är två av deras viktigaste verk.",
      },
      {
        name: "Then Swänska Argus (1732\u20131734)",
        description:
          "Olof von Dalins tidskrift markerar början av modern svensk press och ett nytt, ledigare skriftspråk.",
      },
      {
        name: "Franska lånord",
        description:
          "Under 1700- och 1800-talet lånade svenskan många ord från franskan, särskilt inom kultur, mat och mode: restaurang, dessert, elegant.",
      },
      {
        name: "Allmänna folkskolan (1842)",
        description:
          "Folkskolan gjorde att alla barn lärde sig läsa och skriva, vilket ökade behovet av ett standardiserat skriftspråk.",
      },
    ],
    connection:
      "Svenska Akademiens ordlista (SAOL) används fortfarande som rättesnöre för svensk stavning. Franskans lånord hör vi dagligen i ord som byrå, balkong och restaurang.",
  },
  {
    title: "Nusvenska",
    years: "1906\u2013",
    badgeLabel: "Period 5",
    context:
      "Stavningsreformen 1906 moderniserade skriftspråket markant. Under 1900-talet genomgick svenskan stora förändringar: du-reformen, engelska lånords intåg och digitaliseringens påverkan på språk och kommunikation.",
    characteristics: [
      "Stavningsreformen 1906: hv blev v (hvad \u2192 vad), dt blev t (godt \u2192 gott), f ersatte fv (hufvud \u2192 huvud)",
      "Du-reformen på 1960-talet: bortfallet av tilltalsordet \u201DNi\u201D till förmån för \u201Ddu\u201D",
      "Engelska lånord strömmar in, särskilt från 1940-talet: jobb, dejt, mejl, podcast, streama",
      "Nya kommunikationsformer: sms-språk, chattspråk, emojier, sociala medier",
      "Språklagstiftning: sedan 2009 är svenska huvudspråk i Sverige enligt språklagen",
    ],
    keyEvents: [
      {
        name: "Stavningsreformen (1906)",
        description:
          "Riksdagen beslutade om en genomgripande stavningsreform som moderniserade skriftspråket och gjorde det mer logiskt och lättläst.",
      },
      {
        name: "Du-reformen (1960-talet)",
        description:
          "Sverige gick från komplicerade tilltalsnormer med titlar till att alla kallas \u201Ddu\u201D. En enorm social och språklig förändring som speglade jämställdhetssträvanden.",
      },
      {
        name: "Språklagen (2009)",
        description:
          "För första gången i historien slog lag fast att svenska är huvudspråk i Sverige. Lagen slår även fast att alla har rätt till språk och att nationella minoritetsspråk ska skyddas.",
      },
      {
        name: "Digitaliseringen (1990-talet\u2013)",
        description:
          "Internet, sms och sociala medier har förändrat hur vi skriver och kommunicerar. Nya ord skapas snabbare än någonsin och gränser mellan talat och skrivet språk suddas ut.",
      },
    ],
    connection:
      "Vi lever mitt i nusvenskans fortsatta utveckling. Varje år lägger SAOL till nya ord \u2014 som padel, swisha och klimatångest. Språket formas av alla som använder det, inklusive dig.",
  },
];

/* ------------------------------------------------------------------ */
/*  Gymnasiet: deeper period data                                      */
/* ------------------------------------------------------------------ */

const GYMNASIET_PERIODS = [
  {
    title: "Runsvenska",
    years: "ca 800\u20131225",
    badgeLabel: "Period 1",
    context:
      "Runsvenskan är den äldsta dokumenterade formen av svenska. Språket tillhörde den östnordiska grenen av de germanska språken och stod nära danskan, medan västnordiskan (norska och isländskan) hade andra utvecklingsdrag. Runinskrifterna ger oss unika språkliga data från en tid då de flesta europeiska folkspråk saknade skriftliga källor.",
    characteristics: [
      "Två runrader användes: den äldre futharken (24 tecken, ca 200\u2013700 e.Kr.) och den yngre futharken (16 tecken, från ca 700 e.Kr.)",
      "Rikt kasussystem med fyra kasus: nominativ, genitiv, dativ, ackusativ \u2014 både substantiv och adjektiv böjdes efter kasus, genus och numerus",
      "Verben hade både konjunktiv och indikativ i presens och preteritum, samt dualisformer (vi två)",
      "Vokalsystemet var rikt med nasal- och långvokaler som senare försvann",
      "Ordföljden var friare än i modern svenska tack vare kasusmarkering \u2014 subjekt, objekt och predikat kunde stå i varierande ordning",
      "Språket var fortfarande ömsesidigt begripligt med danska och norska \u2014 man talar om \u201Durnordiska\u201D för den äldsta perioden och \u201Dfornnordiska\u201D för den yngre",
    ],
    keyEvents: [
      {
        name: "Rökstenen (ca 800)",
        description:
          "Med över 700 runtecken är Rökstenen världens längsta runinskrift. Den innehåller heroiskt diktspråk med allitterationer och kenningar, och vittnar om ett sofistikerat berättande på ett tidigt stadium av språket.",
      },
      {
        name: "Språkexempel: Äldre runinskrifter",
        description:
          "Inskriften på Jarlabankes bro (1000-talet) lyder i moderniserad form: \u201DJarlabanke lät resa denna sten åt sig själv medan han levde.\u201D Originalet visar kasusanvändning och ordformer som är avlägsna från modern svenska.",
      },
      {
        name: "Kristnandet och latinska impulser",
        description:
          "Kristnandet runt år 1000 förde med sig latinet som kyrkospråk. Tidiga lån från latin: kyrka, präst, mässa. Latinets dominans i skriftkultur skulle fördröja utvecklingen av svensk prosa i sekler.",
      },
      {
        name: "Den yngre futharkens problem",
        description:
          "Minskningen från 24 till 16 runtecken skapade tvetydigheter \u2014 samma runa kunde stå för flera ljud. Detta är en viktig orsak till att forskare ibland tolkar runinskrifter på olika sätt.",
      },
    ],
    connection:
      "Studiet av runsvenska ger insikter i språkförändringens mekanismer: ljudutvecklingar, grammatisk förenkling och kontaktlingvistik. Ortnamn som Uppsala (forntida kultplats) och Sigtuna (tidig stadsbildning) speglar runsvenskans ordförråd. Runsvenskan visar också att skriftkultur inte kräver ett alfabet \u2014 futharkens symbolsystem fyllde samma funktion.",
  },
  {
    title: "Fornsvenska",
    years: "ca 1225\u20131526",
    badgeLabel: "Period 2",
    context:
      "Övergången till latinskt alfabet och uppkomsten av längre prosatexter markerar fornsvenskans början. Perioden präglas av två stora yttre krafter: kyrkans latinkultur och Hansaförbundets enorma ekonomiska och språkliga inflytande. Medellågtyskan blev ett prestige- och handelsspråk som fundamentalt omformade svenskans ordförråd och syntax.",
    characteristics: [
      "Kasussystemet förenklades successivt: distinktionen dativ/ackusativ försvann i de flesta dialekter under perioden",
      "Bestämda artikeln utvecklades: \u201Dhuset\u201D (slutartikel) blev standard \u2014 detta saknas i många andra europeiska språk och är en särnordisk innovation",
      "Medellågtyska lånord var massiva: uppskattningsvis 40 % av svenska ordförrådet har tyskt ursprung. Det gällde både vardagliga ord (arbeta, betala, billig) och abstrakta (begripa, avsikt, framtid)",
      "Även tyska affix lånades in: be-, an-, för-, -skap, -het, -aktig, -bar, -mässig, vilka är produktiva än idag",
      "Ordföljden stabiliserades mot SVO-mönster (subjekt\u2013verb\u2013objekt) som i modern svenska",
      "Skriftspråksnormen varierade kraftigt mellan regioner \u2014 texter från Västergötland skiljer sig markant från texter från Uppland",
    ],
    keyEvents: [
      {
        name: "Västgötalagen (ca 1225)",
        description:
          "Den äldsta bevarade texten på svenska, nedtecknad med latinskt alfabet. Lagtexten visar ett språk i övergångsfas med både äldre kasusformer och nyare drag. Texten är en ovärderlig källa för forskare.",
      },
      {
        name: "Hansans språkliga påverkan",
        description:
          "Tyska köpmän dominerade i städerna och många invandrare från tyska områden bosatte sig i Sverige. Resultatet var inte bara lånord utan även språkstrukturell påverkan: konjunktioner som \u201Datt\u201D och \u201Deftersom\u201D, samt prefix och suffix.",
      },
      {
        name: "Språkexempel: Fornsvensk lag",
        description:
          "Ur Västgötalagen: \u201DSverigher ä äldra\u2026\u201D (Sverige är att välja\u2026, dvs. konungen väljs av svearna). Texten visar typiska fornsvenska drag: verbändelse -er i presens, annan ordföljd och ordformer som är svårbegripliga för moderna läsare.",
      },
      {
        name: "Birgittinsk prosa",
        description:
          "Birgittas uppenbarelser och de texter som producerades vid Vadstena kloster representerar den högsta prosan på fornsvenska och visar hur religiöst språk kunde vara stilistiskt medvetet.",
      },
    ],
    connection:
      "Fornsvenska perioden förklarar varför moderna svenska har så många tyska lånord att vi inte ens märker dem. Kasusförenkling och framväxten av bestämda artikeln är processer som förklarar hur modern svenska blev analytiskt snarare än syntetiskt. Debatten om språklig påverkan från invandring återkom i varje period av språkhistorien.",
  },
  {
    title: "Äldre nysvenska",
    years: "ca 1526\u20131732",
    badgeLabel: "Period 3",
    context:
      "Reformationen och boktryckarkonsten förändrade språkets roll i samhället fundamentalt. Gustav Vasas bibelöversättning 1541 blev den största normerande händelsen i svensk språkhistoria. Under stormaktstiden användes latinet alltjämt i universitetsvärlden, men svenskan etablerades alltmer som förvaltningsspråk.",
    characteristics: [
      "Bibeln 1541 satte en skriftspråksnorm som gällde i över 300 år och enade dialekterna i skrift",
      "Kasussystemet försvann i praktiken i talspråket \u2014 kvar blev bara rester i fasta uttryck (t.ex. \u201Dtill sjöss\u201D, \u201Di mannaminne\u201D)",
      "Boktrycket stabiliserade stavning och grammatik \u2014 tryckta texter blev norm",
      "Stormaktstidens förvaltning krävde ett standardiserat skriftspråk för centralstyrning",
      "Ortoepin (rätt uttal) och ortografin (rätt stavning) blev debattämnen bland lärda",
      "Språkliga puriststrävanden: vissa författare ville rensa ut lånord och ersätta med inhemska ord",
    ],
    keyEvents: [
      {
        name: "Nya Testamentet (1526) och hela Bibeln (1541)",
        description:
          "Bibelöversättningen är den viktigaste händelsen i svensk språkhistoria. Den var den första boken som många svenskar hörde regelbundet (i kyrkan) och skapade en gemensam språklig referensram. Översättarna valde medvetet ett språk som var begripligt för folket men ändå högtidligt.",
      },
      {
        name: "Boktryckarkonsten (från 1483)",
        description:
          "Tryckpressen var avgörande för språkstandardisering: tryckare måste fatta beslut om stavning, och tryckta texter spreds bredare än handskrifter. Variationen minskade successivt.",
      },
      {
        name: "Samuel Columbus och språkdebatten",
        description:
          "1600-talets språkintresserade diskuterade hur svenskan borde vara. Columbus argumenterade för naturlighet i språkbruket medan andra ville renodla språket efter latinska mönster.",
      },
      {
        name: "Georg Stiernhielm: Hercules (1658)",
        description:
          "Stiernhielm, kallad den svenska skaldekonstens fader, ville visa att svenskan var ett lika värdigt diktspråk som latinet. Han använde fornnordiska ord medvetet för att höja språkets prestige.",
      },
    ],
    connection:
      "Debatten om språklig standardisering fortsätter än idag: Ska vi rätta stavning strikt? Hur hanterar vi dialektala skillnader? Ska lånord välkomnas eller motverkas? Frågan om bibelspråk som norm har sin parallell i frågor om vilken sorts svenska som ska läras ut i skolan.",
  },
  {
    title: "Yngre nysvenska",
    years: "ca 1732\u20131906",
    badgeLabel: "Period 4",
    context:
      "Denna period såg framväxten av moderna medier, allmän utbildning och språkinstitutioner som aktivt formade språknormen. Franskan ersatte latinet som prestigespråk bland överklassen, och med nationalromantiken växte ett medvetet intresse för det svenska språkets historia och identitet.",
    characteristics: [
      "Franskans inflytande på ordförråd och fraseologi, särskilt 1700-talet: byrå, balkong, frisyr, paraply, restaurang, garderob",
      "Svenska Akademien (1786) grundades för att främja språklig vård \u2014 SAOL (ordlista) och SAOB (ordbok) blev centrala normeringsinstrument",
      "Folkskolan (1842) spred läskunnighet och skapade behov av enhetlig stavning",
      "Dagstidningar och romaner på svenska skapade en bredare läsarpublik",
      "Språkdebatten intensifierades: progressiva ville förenkla stavningen, konservativa ville bevara traditionen",
      "Nationalromantiken lyfte fram svenska språkets ålder och värdighet \u2014 göticismen drog paralleller till fornnordiskan",
    ],
    keyEvents: [
      {
        name: "Then Swänska Argus (1732\u20131734)",
        description:
          "Olof von Dalins tidskrift markerar början av modernt svenskt prosaspråk: kortare meningar, ledigare stil, humor och satir på svenska. Språket rör sig bort från bibelns högtidlighet.",
      },
      {
        name: "Svenska Akademien (1786)",
        description:
          "Gustav III grundade akademien efter franskt mönster. Dess normering av språket genom ordlistan (SAOL, första upplagan 1874) och ordboken (SAOB, påbörjad 1898) är fortfarande central.",
      },
      {
        name: "Folkskolan (1842)",
        description:
          "Den allmänna folkskolan betydde att alla barn lärde sig läsa och skriva. Behovet av en gemensam stavningsnorm blev akut, och debatten om stavningsreform intensifierades.",
      },
      {
        name: "Stavningsdebatten (1800-talets slut)",
        description:
          "Reformivrare som Adolf Noreen argumenterade för att stavningen skulle närma sig talspråket: varför skriva \u201Dhvad\u201D när man säger \u201Dvad\u201D? Konservativa ville bevara den historiska stavningen. Konflikten pågick i årtionden.",
      },
    ],
    connection:
      "Frågan om vem som äger språknormen är lika aktuell idag. Ska SAOL bestämma vad som är \u201Drätt\u201D svenska? Har sociala medier gjort språkförändringar snabbare? Debatten om skolans roll i språkvården är en direkt fortsättning på 1800-talets diskussioner.",
  },
  {
    title: "Nusvenska",
    years: "1906\u2013",
    badgeLabel: "Period 5",
    context:
      "Stavningsreformen 1906 är den konventionella startpunkten för nusvenskan. Under 1900- och 2000-talet har språket genomgått dramatiska förändringar: demokratisering av tilltalet (du-reformen), engelskt språkligt inflytande, invandringens språkliga bidrag och digitaliseringens omvandling av kommunikationsmönstren.",
    characteristics: [
      "Stavningsreformen 1906: hv \u2192 v (hvad \u2192 vad), dt \u2192 t (godt \u2192 gott), fv \u2192 v (hufvud \u2192 huvud), f \u2192 v i vissa ord",
      "Du-reformen (1960-talet): de invecklade tilltalsnormerna med titlar ersattes av generellt \u201Ddu\u201D \u2014 en social revolution som speglade jämställdhetssträvanden",
      "Engelska lånord i vågor: 1940-talet (jazz, film, team), 1980-talet (dator, mjukvara), 2000-talet (mejl, blogg, streama, padda)",
      "Språkpolitik formaliserades: Språklagen 2009, Språkrådet, Klarspråk i myndigheter",
      "Multietniskt ungdomsspråk (Rinkebysvenska/förtortsspråk) utmanar och berikar normen",
      "Digitalt språk: emojier, förkortningar, röstmeddelanden suddar ut gränsen mellan tal och skrift",
      "Genusneutral språkutveckling: pronomenet \u201Dhen\u201D togs in i SAOL 2015",
    ],
    keyEvents: [
      {
        name: "Stavningsreformen (1906)",
        description:
          "En genomgripande reform som beslutades av riksdagen efter årtionden av debatt. Reformen berodde på demokratiseringssträvanden: det gamla stavningssättet var svårt att lära sig och gynnande de högre klasserna.",
      },
      {
        name: "Du-reformen (1960-talet)",
        description:
          "Generaldirektören på Medicinalverket, Bror Rexed, började tilltala alla med \u201Ddu\u201D 1967. Det spred sig snabbt i hela samhället. Reformen saknade formellt beslut men är en av de största sociala språkförändringarna i Sverige.",
      },
      {
        name: "Språklagen (2009)",
        description:
          "För första gången fastslog svensk lag att svenska är Sveriges huvudspråk. Lagen skyddar även finska, meänkieli, samiska, romani chib och jiddisch som nationella minoritetsspråk.",
      },
      {
        name: "Hen i SAOL (2015)",
        description:
          "Det genusneutrala pronomenet \u201Dhen\u201D lades till i SAOL. Debatten om hen är ett modernt exempel på hur språkförändring är kopplad till samhällsförändring.",
      },
      {
        name: "Digitaliseringens språk",
        description:
          "Internet, sms och sociala medier har skapat nya genrer och kommunikationsformer. Twittersvenska, poddspråk och chattspråk är exempel på hur teknologi driver språkförändring snabbare än någonsin.",
      },
    ],
    connection:
      "Vi är mitt i nusvenskans utveckling. Varje generation formar språket genom nya ord, uttryck och kommunikationsvanor. Att studera språkhistoria ger perspektiv på att förändring är naturlig och att dagens debatter \u2014 om lånord, språkvård och \u201Drätt\u201D svenska \u2014 har förekommit i varje period.",
  },
];

/* ------------------------------------------------------------------ */
/*  Level descriptions                                                 */
/* ------------------------------------------------------------------ */

const LEVEL_DESCRIPTIONS: Record<string, string> = {
  hogstadiet:
    "Från runinskrifter till internetspråk \u2014 så har det svenska språket förändrats genom tiderna. En översikt över fem språkhistoriska perioder.",
  gymnasiet:
    "Fördjupad språkhistoria med språkexempel, grammatisk utveckling, lånordshistorik och språkpolitiska perspektiv. Från urnordiskans kasussystem till nusvenskans digitalspråk.",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export function generateStaticParams() {
  return AGE_GROUPS.filter(
    (g) => g.slug !== "lagstadiet" && g.slug !== "mellanstadiet"
  ).map((g) => ({
    arskurs: g.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Språkhistoria \u2013 ${group.label}`,
    description: `Svensk språkhistoria anpassad för ${group.label.toLowerCase()}.`,
  };
}

export default async function SprakhistoriaPage({ params }: Props) {
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
  const exercises = getSprakhistoriaExercises(level);
  const periods =
    level === "gymnasiet" ? GYMNASIET_PERIODS : HOGSTADIET_PERIODS;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Languages className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Språkhistoria
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      {/* Timeline overview */}
      <Section title="Tidslinje">
        <div className="mb-8 flex flex-wrap gap-2">
          {periods.map((p) => (
            <a
              key={p.title}
              href={`#${p.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm transition-all hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <Badge variant="secondary">{p.badgeLabel}</Badge>
              <span className="font-medium text-neutral-800 dark:text-neutral-200">
                {p.title}
              </span>
              <span className="text-neutral-400 dark:text-neutral-500">
                {p.years}
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Period cards */}
      <div className="space-y-8">
        {periods.map((period) => (
          <div
            key={period.title}
            id={period.title.toLowerCase().replace(/\s+/g, "-")}
          >
            <PeriodCard {...period} />
          </div>
        ))}
      </div>

      {/* Gymnasiet: extra analysis sections */}
      {level === "gymnasiet" && (
        <>
          {/* Loanword history */}
          <div className="mt-12">
            <Section title="Lånordshistorik i detalj">
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Det svenska ordförrådet bär spåren av varje period av
                språkhistorien. Lånorden avslöjar vilka folk och kulturer som
                påverkat Sverige.
              </p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Latinska lånord (kristnandet\u20131700-tal)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Latinet var kyrkans och lärdomens språk i över 500 år.
                      Tidiga lån: kyrka, präst, skola, fönster, bok. Senare
                      vetenskapliga lån: universitet, professor, grammatik.
                      Många latinska lån kom indirekt via tyskan.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Tyska lånord (1300\u20131500-tal)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Hansans inflytande är den största enskilda lånordsvägen i
                      språkhistorien. Vardagsord: arbeta, betala, billig,
                      borgerlig, frukost, handla, snickare. Abstrakta: avsikt,
                      begripa, framtid, trakta, verkligen. Även
                      ordbildningsmönster lånades: prefix som be-, an-, för- och
                      suffix som -het, -skap, -aktig, -bar.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Franska lånord (1700\u20131800-tal)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Frankrike var Europas kulturella centrum. Svenska
                      överklassen talade franska och språkets prestige avspeglas
                      i lånorden: balkong, byrå, dessert, garderob, kostym,
                      paraply, restaurang, parfym, elegant, modern. Många
                      franska lån har blivit så naturliga att vi inte tänker på
                      dem som främmande.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Engelska lånord (1900-tal\u2013)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Engelskan dominerar den moderna lånordsvägen. Tidiga lån
                      (1900-talet): sport, film, jazz, strejk. Teknik
                      (1980-tal): dator, mjukvara, surfplatta. Digitalt
                      (2000-tal): mejl, blogg, podda, streama, googla. Debatten
                      om engelska lån är aktuell: är de ett hot mot svenskan
                      eller en naturlig del av språkutvecklingen?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>

          {/* Language policy */}
          <div className="mt-12">
            <Section title="Språkpolitik och språkvård">
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Språket är aldrig bara ett kommunikationsverktyg \u2014 det är
                också en politisk fråga om makt, identitet och tillhörighet.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Språkplanering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Medveten påverkan på språkutvecklingen genom normer,
                      ordlistor och utbildning. Institutet för språk och
                      folkminnen är den svenska myndigheten för detta.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Klarspråk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Myndigheter ska skriva begripligt. Klarspråkskravet i
                      språklagen innebär att offentlig svenska ska vara vårdad,
                      enkel och begriplig för alla medborgare.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Minoritetsspråk
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Sverige har fem erkända nationella minoritetsspråk:
                      finska, meänkieli, samiska, romani chib och jiddisch.
                      Språklagen ger dessa språk särskilt skydd.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Språk och makt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Vem bestämmer vad som är \u201Dkorrekt\u201D svenska?
                      Historiskt har språknormen satts av överklassen. Idag
                      debatteras dialekters status, multietniskt ungdomsspråk
                      och tillgången till akademisk svenska.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>

          {/* Grammatical evolution */}
          <div className="mt-12">
            <Section title="Grammatisk utveckling: från syntetiskt till analytiskt språk">
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Svenska har gått från ett syntetiskt språk (där grammatiska
                relationer uttrycks med ändelser) till ett analytiskt språk (där
                ordföljden och hjälpord gör det jobbet). Här är de viktigaste
                förändringarna.
              </p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Kasusförenkling
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Runsvenskan hade fyra kasus. Under fornsvenskan smälte
                      dativ och ackusativ samman. I modern svenska finns kasus
                      bara kvar i pronomen (jag/mig, han/honom) och fasta
                      uttryck (till sjöss, i mannaminne). Istället använder vi
                      prepositioner och ordföljd för att markera grammatiska
                      roller.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Ordföljdsförändringar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Runsvenskan hade relativt fri ordföljd tack vare
                      kasusmarkeringen. När kasussystemet försvann blev
                      ordföljden fastare: SVO (subjekt\u2013verb\u2013objekt) i
                      huvudsatser och V2-regeln (verbet på andra plats) är nu
                      grundläggande. Bisatsernas ordföljd (BIFF-regeln: bisats,
                      inte, fundament, finit verb) utvecklades också under denna
                      period.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Verbsystemet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Konjunktiven (önskeformen) var levande i fornsvenskan men
                      har i modern svenska nästan helt försvunnit \u2014 kvar är
                      fasta uttryck som \u201Dleve kungen\u201D och \u201Dvore
                      det inte för\u2026\u201D. Pluralformer av verb (vi gingo,
                      de kommo) försvann ur skriftspråket 1945 efter officiellt
                      beslut.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>
        </>
      )}

      {/* Study tips */}
      <div className="mt-12">
        <Section title="Tips för studier">
          {level === "hogstadiet" && (
            <>
              <Tip>
                <strong>Så använder du den här sidan:</strong> Börja med
                tidslinjen högst upp för att få en översikt. Klicka på en period
                för att hoppa dit. Lägg märke till hur varje period bygger på
                den föregående.
              </Tip>
              <Tip>
                <strong>Koppla till vardagen:</strong> Titta på orden du
                använder dagligen. Hur många är egentligen lånord? Pröva att
                hitta tre tyska, tre franska och tre engelska lånord i en vanlig
                tidningsartikel.
              </Tip>
              <Tip>
                <strong>Jämför med litteraturhistoria:</strong> Språkhistorien
                och litteraturhistorien hänger ihop. När du läser om en
                litteraturhistorisk epok, fundera på hur språket såg ut då.
              </Tip>
            </>
          )}
          {level === "gymnasiet" && (
            <>
              <Tip>
                <strong>Så använder du den här sidan:</strong> Börja med
                tidslinjen för en översikt. Fördjupa dig sedan i
                lånordshistorik, språkpolitik och grammatisk utveckling för att
                förstå de största drivkrafterna i språkförändringen.
              </Tip>
              <Tip>
                <strong>Språkvetenskaplig analys:</strong> Välj en kort text
                från en äldre period (t.ex. Västgötalagen) och försök
                identifiera typiska drag: kasusformer, annan ordföljd, ord som
                försvunnit. Jämför med en modern text i samma genre (t.ex. en
                lagtext).
              </Tip>
              <Tip>
                <strong>Debatt:</strong> Diskutera i klassen: Är engelska lånord
                ett hot mot svenskan eller en naturlig utveckling? Använd
                argument från språkhistorien \u2014 när i historien har folk
                oroat sig för lånord förut, och vad hände?
              </Tip>
              <Tip>
                <strong>Interdisciplinärt:</strong> Koppla språkhistorien till
                samhällskunskap (språkpolitik, makt), historia (stormaktstiden,
                reformationen) och filosofi (vad är språkets relation till
                tanken?).
              </Tip>
            </>
          )}
        </Section>
      </div>

      {/* Interactive exercises */}
      {exercises.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
            Övningar
          </h2>
          <SprakhistoriaOvningar exercises={exercises} />
        </section>
      )}
    </div>
  );
}
