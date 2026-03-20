import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import {
  BookOpen,
  Languages,
  GraduationCap,
  MessageCircle,
  Mic,
  FileText,
  ArrowRight,
  Lightbulb,
  Globe,
  PenTool,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Age-group adapted content                                          */
/* ------------------------------------------------------------------ */

const VALID_AGE_GROUPS = AGE_GROUPS.map((g) => g.slug);

interface SvaSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: Record<AgeGroup, string[]>;
}

const SVA_INTRO: Record<AgeGroup, { heading: string; description: string }> = {
  lagstadiet: {
    heading: "Svenska som andrasprk (SVA) - Lgstadiet",
    description:
      "Vlkommen till SVA fr rskurs 1\u20133! Hr fr du hjlp att lra dig svenska p ett roligt och tryggt stt. Vi anvnder bilder, lekar och enkla texter fr att bygga upp ditt ordfrrd och din frstelse fr det svenska sprket.",
  },
  mellanstadiet: {
    heading: "Svenska som andrasprk (SVA) - Mellanstadiet",
    description:
      "Vlkommen till SVA fr rskurs 4\u20136! Hr utvecklar du din svenska med mer avancerade texter och vningar. Du lr dig att anvnda sprket bde i vardagen och i skolan, och fr verktyg fr att bli en skrare lsare och skribent.",
  },
  hogstadiet: {
    heading: "Svenska som andrasprk (SVA) - Hgstadiet",
    description:
      "Vlkommen till SVA fr rskurs 7\u20139! Hr frdjupar du dina sprkkunskaper infr nationella prov och vidare studier. Du trnar p akademiskt sprk, argumenterande texter och kritisk lsning \u2013 allt anpassat fr dig som lr dig svenska som andrasprk.",
  },
  gymnasiet: {
    heading: "Svenska som andrasprk (SVA) - Gymnasiet",
    description:
      "Vlkommen till SVA fr gymnasiet! Hr frbereder du dig fr hgre studier och yrkesliv. Kurserna SVA 1\u20133 ger dig verktyg fr avancerad textanalys, retorik och vetenskapligt skrivande \u2013 med srskillt std fr flersprkiga elever.",
  },
};

/* ------------------------------------------------------------------ */
/*  Ordfrrsbyggande                                                 */
/* ------------------------------------------------------------------ */

const VOCABULARY_CONTENT: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "Lra dig nya ord med bilder och frger \u2013 vi kopplar varje nytt ord till en bild s att det blir lttare att komma ihg.",
    "Temabaserat ordfrrd: kroppen, djur, mat, klder, skolan och familjen.",
    "Ordlekar som memory, bingo och rim-vningar hjlper dig att befsta nya ord.",
    "Enkel ordbok: sl upp ord du undrar ver och se hur de anvnds i meningar.",
    "vninga: Rita och skriv \u2013 kombinera teckning med att skriva ord.",
    "Tips: Sjung snger p svenska! Musik hjlper dig att minnas ord och uttal.",
  ],
  mellanstadiet: [
    "Bygg ut ditt ordfrrd med mmesord (synonymer) och motsatsord (antonymer).",
    "Lr dig mnesspecifika ord fr NO, SO och matematik p svenska.",
    "Anvnd ordkartor och tankekart fr att organisera nya ord i teman.",
    "Kontextledtrdar: lr dig lista ut vad ord betyder frn sammanhanget.",
    "Ordbildning: frst hur frstavelser och ndelser frndrar ords betydelse (t.ex. o-mist, van-lig).",
    "Skriv egna miniordlistor och anvnd dem nr du lser texter.",
    "Tips: Ls barnbcker p svenska \u2013 brja med tunna bcker och jobba uppat!",
  ],
  hogstadiet: [
    "Akademiska nyckelord: lr dig ord som analysera, jmfra, motivera, redogra.",
    "mnesvergrpande ordfrrd: vetenskapliga, samhllsvetenskapliga och litterra termer.",
    "Kollokationer: vilka ord hr ihop? (t.ex. fatta beslut, dra slutsats, ta stllning).",
    "Idiom och bildsprk: 'att kasta in handduken', 'lgga korten p bordet'.",
    "Strategier fr ordkunskap p nationella provet i SVA.",
    "Anvnd digitala ordlistor och krpusverktyg fr att utforska ordanvndning.",
    "Skapa personliga ordbanker med exempelmeningar frn texter du lser.",
  ],
  gymnasiet: [
    "Avancerat akademiskt ordfrrd fr hgskolefrberedande studier.",
    "Facksprk inom olika mnesomrden: juridik, ekonomi, naturvetenskap, humaniora.",
    "Nyansskillnader: nra synonymer med olika stilniv (t.ex. f/erhlla, men/dock/emellertid).",
    "Lr dig att anvnda Svenska Akademiens ordlista (SAOL) och Svensk ordbok (SO) effektivt.",
    "Ordfrrd fr retorik och argumentation: tes, antites, premiss, syllogism.",
    "Register och stilniv: att vlja rtt ord fr rtt sammanhang.",
    "Utfrlig lsning av facklitteratur och skn-litteratur fr att utka ordfrrd naturligt.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Grammatikutmaningar fr L2-inlrare                               */
/* ------------------------------------------------------------------ */

const GRAMMAR_CHALLENGES: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "En eller ett? Lr dig om svenskans tv genus med roliga bilder och ramsor.",
    "Verben: att vara, att ha, att g \u2013 de vanligaste verben i presens.",
    "Ordfjd: subjekt + verb + objekt (SVO) \u2013 s bygger vi meningar p svenska.",
    "Adjektiv och frger: stor/stort/stora \u2013 nr anvnder vi vilken form?",
    "Frgeord: vem, vad, var, nr, hur, varfr.",
    "Tips: Jmfr med ditt eget sprk! Vad r lika och vad r olika?",
  ],
  mellanstadiet: [
    "Bestmd och obestmd form: en bok / boken, ett hus / huset, bcker / bckerna.",
    "Verbformer: presens, preteritum, supinum \u2013 lr dig de fyra konjugationerna.",
    "Bisatsordfjd: varfr sger vi 'att jag inte r' istllet fr 'att jag r inte'?",
    "Prepositioner: i, p, till, frn, med, utan \u2013 vanliga prepositioner och hur de anvnds.",
    "Pronomen: jag/mig, du/dig, han/honom, hon/henne \u2013 subjekts- och objektsform.",
    "Sammansatta ord: frst hur 'fotbollsplan' bildas av fot + boll + plan.",
    "BIFF-regeln: bisats inuti framfr finita verbet \u2013 en viktig regel!",
  ],
  hogstadiet: [
    "Satsschema och inversionsregeln: varfr str verbet alltid p plats tv i pstenden?",
    "Relativsatser: 'boken som jag lste' \u2013 att binda ihop meningar elegant.",
    "Passiv form: 's-passiv och bli-passiv' (boken lses / boken blir lst).",
    "Konjunktioner och subjunktioner: samordnande vs underordnande bindning.",
    "Modala hjlpverb: kan, ska, mste, br, fr, vill \u2013 nyanser i betydelse.",
    "Partikelverb: 'st upp', 'g ut', 'komma ihg' \u2013 verb + partikel frndrar betydelsen.",
    "Vanliga fel att undvika: d/d, de/dem, sin/hans/hennes.",
  ],
  gymnasiet: [
    "Avancerad meningsbyggnad: nominaliseringar, satsfltor och inskjutna bisatser.",
    "Stilistisk variation: korta vs lnga meningar, aktiv vs passiv form.",
    "Textbindning: tematisk och logisk bindning med sambandsord och referensbindning.",
    "Grammatisk terminologi p svenska: behrskning av begrepp fr sprkanalys.",
    "Kontrastiv grammatik: systematisk jmfrelse mellan svenska och andra sprk.",
    "Informationsttthet: att skriva koncist med nominalfraser och sammansttningar.",
    "Grammatik fr vetenskapligt skrivande: opersonlig stil, hedging, citatteknik.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Modersmlet som resurs                                             */
/* ------------------------------------------------------------------ */

const FIRST_LANGUAGE_CONTENT: Record<AgeGroup, string[]> = {
  lagstadiet: [
    "Ditt hemsprk r en superkraft! Det hjlper dig att lra dig svenska snabbare.",
    "Jmfr ord p ditt sprk och p svenska \u2013 ibland liknar de varandra!",
    "Rita bilder och skriv ordet p bda sprken fr att minnas bttre.",
    "Frga hemma: be ngon frklara p ditt sprk nr du inte frstr p svenska.",
    "Flersprkiga bcker: ls bcker som finns p bde svenska och ditt sprk.",
  ],
  mellanstadiet: [
    "Anvnd ditt modersml fr att planera texter innan du skriver p svenska.",
    "Tvsprkiga ordlistor: skriv nya ord p bda sprken s att du bygger ordfrrd i bda.",
    "Jmfr grammatik: hur fungerar verb, substantiv och adjektiv p ditt sprk jmfrt med svenska?",
    "Transferstrategier: vilka kunskaper frn ditt modersml kan du verfra till svenska?",
    "Internationella ord: mnga ord finns i bde svenska och andra sprk (t.ex. telefon, musik, problem).",
    "Modermlsundervisning: om din skola erbjuder det \u2013 ta chansen! Det strker alla dina sprk.",
  ],
  hogstadiet: [
    "Kodvxling: att medvetet byta mellan sprk fr att tnka och lra effektivare.",
    "Anvnd ditt modersml som tankeverkyg vid avancerad lsning och analys.",
    "Kontrastiv analys: identifiera systematiska skillnader mellan sprken fr att undvika interferensfel.",
    "Kulturell kompetens: dina sprk ger dig unika perspektiv i textanalys och diskussioner.",
    "Flersprkig identitet: styrkan i att behrskar flera sprk i en globaliserad vrld.",
    "Akademiska ord har ofta samma rot i mnga sprk (latin/grekiska) \u2013 utnyttja det!",
  ],
  gymnasiet: [
    "Metasprklig medvetenhet: anvnd kunskapen om flera sprk fr djupare sprkanalys.",
    "Intersprk och interlanguage: frst din egna sprkinlrningsprocess.",
    "Flersprkighet som resurs i arbetslivet och p universitetet.",
    "Translanguaging: medveten anvndning av alla sprk i repertoaren fr lrande.",
    "Jmfrande litterra analyser: texter p originalsprk vs svenska verslagning.",
    "Att skriva akademiskt p ett andrasprk: strategier fr att uppn precis stilniv.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Tips fr nationella prov (hogstadiet + gymnasiet)                  */
/* ------------------------------------------------------------------ */

const NATIONAL_EXAM_TIPS: Record<"hogstadiet" | "gymnasiet", string[]> = {
  hogstadiet: [
    "Provet bestr av tre delar: lsa, skriva och muntligt \u2013 alla delar r lika viktiga.",
    "Lsdelen: trna p att lsa olika texttyper (fakta, argumentation, skn-litteratur) och svara p frgor.",
    "Skrivdelen: va p att skriva bde berttande och argumenterande texter med tydlig struktur.",
    "Muntliga delen: trna p att hlla korta presentationer och delta i samtal om givna mnen.",
    "Tidsfrvaltning: planera hur du frdelar tiden mellan uppgifterna.",
    "Ordlista: du fr anvnda ordlista p provet \u2013 va p att sl upp ord snabbt.",
    "Tidigare provuppgifter: va med gamla nationella prov fr SVA \u2013 du hittar dem p Skolverkets webbplats.",
    "Svar med egna ord: undvik att kopiera frn texterna, visa att du frstr innehllet.",
  ],
  gymnasiet: [
    "SVA-provet i gymnasiet: testar avancerad lsfrstelse, skriftlig frmga och muntlig presentation.",
    "Textanalys: va p att identifiera syfte, mlgrupp, sprkliga drag och argumentationsteknik.",
    "Kllkritik: bedm kllors trovrdighet och relevans \u2013 en viktig del av provet.",
    "Utredande text: va p att strukturera en utredande text med inledning, huvuddel och avslutning.",
    "Muntlig presentation: va p att presentera ett mne strukturerat med stud av talar-PM.",
    "Referera och citera: lr dig att korrekt referera till kllor i din text.",
    "Akademiska fraser: anvnd uttryck som 'enligt', 'dremot', 'sammantfattningsvis'.",
    "Bedmningsmatrisen: ls igenom Skolverkets bedmningskriterier s att du vet vad som frvntas.",
    "Skriv p rtt stilniv: undvik tallsprkliga uttryck i formella texter.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Vardagssvenska vs skolsvenska                                      */
/* ------------------------------------------------------------------ */

const REGISTER_CONTENT: Record<AgeGroup, { examples: string[]; tips: string[] }> = {
  lagstadiet: {
    examples: [
      "Vardagssvenska: 'Jag vill ha mer mat.' \u2192 Skolsvenska: 'Kan jag f mer mat, tack?'",
      "Vardagssvenska: 'Den var j cool!' \u2192 Skolsvenska: 'Den var mycket intressant.'",
      "Vardagssvenska: 'Vi gick till affren.' \u2192 Skolsvenska: 'Vi bskte matbutiken.'",
    ],
    tips: [
      "P rasten pratar vi vardagssvenska \u2013 det r helt okej!",
      "P lektionen trnar vi p skolsvenska \u2013 det hjlper dig i skolan.",
      "Bda typerna av svenska r viktiga att kunna!",
    ],
  },
  mellanstadiet: {
    examples: [
      "Vardagssvenska: 'Kolla, den hr boken r skitbra!' \u2192 Skolsvenska: 'Den hr boken r mycket underhllande.'",
      "Vardagssvenska: 'Han ba sprang ivg.' \u2192 Skolsvenska: 'Han sprang pltsligt ivg.'",
      "Vardagssvenska: 'Det var nting som hppnade.' \u2192 Skolsvenska: 'Det intrffade en hndelse.'",
    ],
    tips: [
      "Nr du skriver i skolan: undvik slang och frkortningar.",
      "Nr du pratar med kompisar: vardagssvenska r naturligt och bra vning!",
      "Ls bde skn-litteratur och faktatext fr att se skillnaderna.",
      "Tnk p vem du skriver eller pratar till \u2013 det avgr vilken stil du vljer.",
    ],
  },
  hogstadiet: {
    examples: [
      "Informellt: 'Folk tycker att...' \u2192 Formellt: 'Mnga anser att...'",
      "Informellt: 'Det r ju typ omjligt.' \u2192 Formellt: 'Det r i praktiken ogenomfrbart.'",
      "Informellt: 'Sen hppnade det grejer.' \u2192 Formellt: 'Drefter intrffade flera hndelser.'",
    ],
    tips: [
      "Lra dig att vxla mellan register beroende p situation och mlgrupp.",
      "Akademiska nyckelord hjer stilnivn: exempelvis, dock, fljaktligen, sammantfattningsvis.",
      "Undvik talsprkliga uttryck i uppsatser: ju, liksom, ba, typ.",
      "va p att skriva formella mejl till lrare och rektorer.",
      "Ls tidningsartiklar och jmfr med bloggar \u2013 lgg mrke till sprket.",
    ],
  },
  gymnasiet: {
    examples: [
      "Vardagligt: 'Den hr grejen r skitstor.' \u2192 Akademiskt: 'Detta fenomen r av betydande omfattning.'",
      "Vardagligt: 'Man kan typ sga att...' \u2192 Akademiskt: 'Det kan konstateras att...'",
      "Vardagligt: 'Det finns massa forskning.' \u2192 Akademiskt: 'Flertalet studier visar...'",
    ],
    tips: [
      "Akademiskt skrivande krver opersonlig stil: anvnd passiv form och nominaliseringar.",
      "Hedging: 'Det tycks', 'Det frefaller' \u2013 viktigt i vetenskaplig text.",
      "Stilbrott frsmrar texten: hll en jmn stilniv genom hela texten.",
      "Lr dig skillnaden mellan skn-litterrt sprk, journalistiskt sprk och akademiskt sprk.",
      "va p att variera meningslngd och meningstyp fr att skapa rytm i texten.",
      "Ls akademiska texter regelbundet fr att internalisera stilnivn.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Uttalsvningar (lagstadiet + mellanstadiet)                       */
/* ------------------------------------------------------------------ */

const PRONUNCIATION_CONTENT: Record<"lagstadiet" | "mellanstadiet", string[]> = {
  lagstadiet: [
    "Svenska vokaler: a, o, u, , e, i, y,  \u2013 va p att hra skillnaden.",
    "Svra ljud: sj-ljudet (sjuka, skjorta), tj-ljudet (tjugo, kyrka).",
    "Lr dig 'y'-ljudet: det finns inte i mnga sprk! va med ord som 'ny', 'by', 'sy'.",
    "Betoning och rytm: svenska har en speciell melodi \u2013 lyssna och hrma!",
    "Lnga och korta vokaler: 'tak' (lngt a) vs 'tack' (kort a) \u2013 det ndrar betydelsen!",
    "Sjung svenska barnsng fr att trna uttal och rytm.",
    "Spela in dig sjlv och lyssna \u2013 jmfr med hur lraren sger orden.",
  ],
  mellanstadiet: [
    "Prosodi: svenskans tv accenter (akut accent och grav accent) ger ord olika betydelse.",
    "Exempel: 'anden' (ankan) vs 'anden' (en ande) \u2013 betoningen gr skillnaden!",
    "Konsonantkluster: str, spr, skr \u2013 va p att sga dem i talflde.",
    "Retroflexer: rd, rt, rn, rs, rl \u2013 typiska fr svenska (rd, kart, barn).",
    "Satsmelodi: frgor gr upp i tonhjd, pstenden gr ner.",
    "Minimala par: va med ordpar dr bara ett ljud skiljer sig (t.ex. bar/br, hus/hns).",
    "Lyssna p ljudbcker och podcaster fr barn fr att trna hrfrstelse och uttal.",
    "Tips: Lsa hgt varje dag i 10 minuter frbttrar uttal mrkbart!",
  ],
};

/* ------------------------------------------------------------------ */
/*  Navigation cards                                                    */
/* ------------------------------------------------------------------ */

interface NavCard {
  title: string;
  description: string;
  href: (arskurs: string) => string;
  icon: React.ElementType;
}

const NAV_CARDS: NavCard[] = [
  {
    title: "Grammatik",
    description: "vningar och genomgngar i svensk grammatik",
    href: (a) => `/${a}/grammatik`,
    icon: PenTool,
  },
  {
    title: "Ordkunskap",
    description: "Bygg ditt ordfrrd med veckans ord och vningar",
    href: (a) => `/${a}/ordkunskap`,
    icon: BookOpen,
  },
  {
    title: "Textbank",
    description: "Texter p olika niver fr lsning och analys",
    href: (a) => `/${a}/textbank`,
    icon: FileText,
  },
  {
    title: "Kursplan SVA",
    description: "Se Skolverkets kursplan fr svenska som andrasprk",
    href: (a) => `/${a}/kursplan?amne=sva`,
    icon: GraduationCap,
  },
];

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return VALID_AGE_GROUPS.map((slug) => ({ arskurs: slug }));
}

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Svenska som andrasprk (SVA) \u2013 ${group.label}`,
    description: `Svenska som andrasprk fr ${group.label.toLowerCase()}. Ordfrrd, grammatik, uttal och tips fr flersprkiga elever.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Section component                                                   */
/* ------------------------------------------------------------------ */

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/40">
          <Icon className="h-5 w-5 text-amber-700 dark:text-amber-300" />
        </div>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-neutral-700 dark:text-neutral-300">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400 dark:bg-amber-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RegisterExample({ example }: { example: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 font-mono text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-300">
      {example}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function SvaPage({ params }: Props) {
  const { arskurs } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  const age = arskurs as AgeGroup;
  const intro = SVA_INTRO[age];
  const showPronunciation = age === "lagstadiet" || age === "mellanstadiet";
  const showExamTips = age === "hogstadiet" || age === "gymnasiet";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* ---- Hero / intro ---- */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/40">
            <Languages className="h-6 w-6 text-amber-700 dark:text-amber-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {intro.heading}
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {group.description}
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {intro.description}
        </p>
      </div>

      {/* ---- Quick-nav TOC ---- */}
      <nav className="mb-12 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Innehll p denna sida
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          <li>
            <a href="#ordforrad" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Ordfrrsbyggande
            </a>
          </li>
          <li>
            <a href="#grammatik" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Grammatikutmaningar fr SVA
            </a>
          </li>
          <li>
            <a href="#modersmal" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Modersmlet som resurs
            </a>
          </li>
          <li>
            <a href="#register" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
              Vardagssvenska vs skolsvenska
            </a>
          </li>
          {showPronunciation && (
            <li>
              <a href="#uttal" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
                Uttalsvningar
              </a>
            </li>
          )}
          {showExamTips && (
            <li>
              <a href="#prov" className="text-amber-700 underline-offset-2 hover:underline dark:text-amber-400">
                Tips fr nationella prov
              </a>
            </li>
          )}
        </ul>
      </nav>

      {/* ---- Main content sections ---- */}
      <div className="space-y-16">
        {/* 1. Ordfrrsbyggande */}
        <Section id="ordforrad" title="Ordfrrsbyggande" icon={BookOpen}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "Att lra sig nya ord r som att samla skatter. Ju fler ord du kan, desto lttare blir det att frst och gra dig frstdd p svenska."}
            {age === "mellanstadiet" &&
              "Ordfrrd r nyckeln till framgng i alla skolmnen. Hr fr du strategier fr att bygga ditt ordfrrd systematiskt och effektivt."}
            {age === "hogstadiet" &&
              "Ett rikt ordfrrd r avgrande fr att lyckats med bde nationella prov och vidare studier. Hr fr du verktyg fr att utveckla bde vardagligt och akademiskt ordfrrd."}
            {age === "gymnasiet" &&
              "P gymnasieniv frvntas du behrskar ett nyanserat och akademiskt ordfrrd. Hr fr du strategier fr att n dit."}
          </p>
          <ContentList items={VOCABULARY_CONTENT[age]} />
        </Section>

        {/* 2. Grammatikutmaningar */}
        <Section id="grammatik" title="Grammatikutmaningar fr SVA" icon={Lightbulb}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "Svensk grammatik kan vara knepig, men med rtt hjlp blir det lttare! Hr tittar vi p de vanligaste utmaningarna."}
            {age === "mellanstadiet" &&
              "Nr du lr dig svenska som andrasprk finns det srskilda grammatiska utmaningar. Hr tar vi upp de viktigaste."}
            {age === "hogstadiet" &&
              "Som SVA-elev mter du srskilda grammatiska utmaningar. Att frst dessa hjlper dig att skriva bttre och mer korrekt."}
            {age === "gymnasiet" &&
              "P gymnasieniv frvntas avancerad grammatisk kompetens. Hr fokuserar vi p de omrden som r srskilt utmanande fr L2-inlrare."}
          </p>
          <ContentList items={GRAMMAR_CHALLENGES[age]} />
          <div className="mt-6">
            <Link
              href={`/${arskurs}/grammatik`}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:hover:bg-amber-900/60"
            >
              <PenTool className="h-4 w-4" />
              G till grammatikvningar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>

        {/* 3. Modersmlet som resurs */}
        <Section id="modersmal" title="Anvnda modersmlet som resurs" icon={Globe}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "Visste du att ditt hemsprk hjlper dig att lra dig svenska? Dina sprk r inte i vgen fr varandra \u2013 de hjlper varandra!"}
            {age === "mellanstadiet" &&
              "Forskning visar att elever som anvnder sitt modersml aktivt lr sig andrasprket bttre. Ditt modersml r en brygga till svenskan."}
            {age === "hogstadiet" &&
              "Flersprkighet r en styrka, inte ett hinder. Hr fr du strategier fr att anvnda alla dina sprk som verktyg i lrandet."}
            {age === "gymnasiet" &&
              "P gymnasieniv kan du medvetet anvnda din flersprkiga kompetens fr djupare sprklig analys och bttre inlrning."}
          </p>
          <ContentList items={FIRST_LANGUAGE_CONTENT[age]} />
        </Section>

        {/* 4. Vardagssvenska vs skolsvenska */}
        <Section id="register" title="Vardagssvenska vs skolsvenska" icon={MessageCircle}>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {age === "lagstadiet" &&
              "I skolan pratar och skriver vi lite annorlunda n hemma eller p rasten. Det r bra att kunna bda stten!"}
            {age === "mellanstadiet" &&
              "Att kunna vxla mellan vardagligt och formellt sprk r en viktig frdighet. Hr lr du dig skillnaderna."}
            {age === "hogstadiet" &&
              "Att behrska olika sprkliga register r avgrande fr bde skolarbete och socialt umgnge. Lr dig att vxla medvetet."}
            {age === "gymnasiet" &&
              "P gymnasiet och i hgre studier frvntas du behrska akademisk svenska. Hr r guide till de olika stilniverna."}
          </p>

          <div className="mb-4 space-y-3">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              Exempel
            </h3>
            {REGISTER_CONTENT[age].examples.map((ex, i) => (
              <RegisterExample key={i} example={ex} />
            ))}
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium text-neutral-800 dark:text-neutral-200">
              Tips
            </h3>
            <ContentList items={REGISTER_CONTENT[age].tips} />
          </div>
        </Section>

        {/* 5. Uttalsvningar (lagstadiet + mellanstadiet) */}
        {showPronunciation && (
          <Section id="uttal" title="Uttalsvningar" icon={Mic}>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              {age === "lagstadiet" &&
                "Att lra sig hur svenska lter r lika viktigt som att lra sig nya ord. Hr trnar vi p ljud som kan vara svra."}
              {age === "mellanstadiet" &&
                "Bra uttal gr det lttare fr andra att frst dig. Hr fokuserar vi p de ljud och den melodi som gr svenskan speciell."}
            </p>
            <ContentList
              items={
                PRONUNCIATION_CONTENT[age as "lagstadiet" | "mellanstadiet"]
              }
            />
          </Section>
        )}

        {/* 6. Tips fr nationella prov (hogstadiet + gymnasiet) */}
        {showExamTips && (
          <Section id="prov" title="Tips fr nationella prov i SVA" icon={GraduationCap}>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              {age === "hogstadiet" &&
                "De nationella proven i SVA testar din frmga att lsa, skriva och samtala p svenska. Hr fr du tips fr att frbereda dig s bra som mjligt."}
              {age === "gymnasiet" &&
                "Nationella provet i SVA p gymnasiet stller hga krav p sprklig medvetenhet och akademisk frmga. Hr fr du konkreta strategier."}
            </p>
            <ContentList
              items={
                NATIONAL_EXAM_TIPS[age as "hogstadiet" | "gymnasiet"]
              }
            />
            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
              <p className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300">
                <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  Kom ihg: nationella provet r inte ngot man &quot;pluggar&quot; till ver en
                  natt. Det testar kunskaper du byggt upp ver lng tid. Brja trna tidigt
                  och jobba regelbundet!
                </span>
              </p>
            </div>
          </Section>
        )}
      </div>

      {/* ---- Kursplan-lnk ---- */}
      <div className="mt-16 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Kursplan fr SVA
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Ls Skolverkets kursplan fr svenska som andrasprk fr {group.label.toLowerCase()}.
            </p>
          </div>
        </div>
        <Link
          href={`/${arskurs}/kursplan?amne=sva`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
        >
          Visa kursplan
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* ---- Navigation cards ---- */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
          Utforska fler omrden
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {NAV_CARDS.map((card) => {
            const NavIcon = card.icon;
            return (
              <Link key={card.title} href={card.href(arskurs)} className="group">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <NavIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center justify-between">
                      <span>{card.description}</span>
                      <ArrowRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1" />
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
