import { notFound } from "next/navigation";
import Link from "next/link";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import {
  Sparkles,
  MessageSquare,
  PenLine,
  ShieldCheck,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Props {
  params: Promise<{ arskurs: string }>;
}

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

/* ── Stadiespecifikt innehåll ─────────────────────────────────────────── */

interface AiContent {
  intro: string;
  whatIsAi: string;
  goodPrompts: { bad: string; good: string; why: string }[];
  doList: string[];
  dontList: string[];
  exercises: { title: string; description: string }[];
}

const AI_CONTENT: Record<string, AiContent> = {
  lagstadiet: {
    intro:
      "AI är som en smart robot som kan skriva texter och svara på frågor. Men roboten vet inte alltid rätt! Här lär du dig hur du kan använda AI på ett bra sätt.",
    whatIsAi:
      "AI står för artificiell intelligens. Det betyder att en dator har lärt sig av massor med texter och kan skriva egna svar. Men AI kan inte tänka på riktigt – den gissar bara vad som låter bra. Därför kan den ibland ha fel!",
    goodPrompts: [
      {
        bad: "Skriv om djur",
        good: "Hjälp mig hitta på fem roliga fakta om katter som jag kan använda i min faktatext",
        why: "Ju mer du berättar vad du vill ha, desto bättre svar får du!",
      },
      {
        bad: "Vad betyder ord?",
        good: "Kan du förklara vad ordet 'modig' betyder och ge tre exempelmeningar som en 8-åring förstår?",
        why: "Berätta hur gammalt du är så får du svar som passar dig.",
      },
    ],
    doList: [
      "Be AI förklara svåra ord",
      "Fråga AI om idéer till din berättelse",
      "Kolla alltid med din lärare om det AI skriver stämmer",
      "Skriv alltid texten själv – AI kan bara hjälpa dig tänka",
    ],
    dontList: [
      "Kopiera text som AI skrivit och låtsas att du skrev den",
      "Tro att allt AI säger är sant",
      "Skriva ditt riktiga namn eller adress till AI",
      "Använda AI på prov utan att fråga läraren",
    ],
    exercises: [
      {
        title: "Fråga om ett djur",
        description:
          "Välj ett djur du tycker om. Skriv en fråga till AI där du berättar exakt vad du vill veta. Jämför sedan svaret med en faktabok – stämmer allt?",
      },
      {
        title: "Förbättra en fråga",
        description:
          "Prova att skriva \"Berätta om rymden\". Titta på svaret. Skriv sedan en bättre fråga, t.ex. \"Berätta tre roliga saker om månen för barn i åk 2\". Blev svaret bättre?",
      },
      {
        title: "Hitta felet",
        description:
          "Be AI skriva fem fakta om Sverige. Kolla sedan med din lärare eller i en bok – kan du hitta något som AI hade fel om?",
      },
    ],
  },

  mellanstadiet: {
    intro:
      "AI-verktyg som ChatGPT kan vara till stor hjälp i skolarbetet – men bara om du använder dem rätt. Här lär du dig skriva bra frågor till AI, vara källkritisk och undvika fusk.",
    whatIsAi:
      "AI (artificiell intelligens) är datorprogram som tränats på enorma mängder text från internet. De kan skapa nya texter, svara på frågor och hjälpa dig tänka. Men AI förstår inte vad den skriver – den sätter ihop ord som brukar höra ihop. Det betyder att svaren kan låta övertygande men ändå vara helt fel.",
    goodPrompts: [
      {
        bad: "Hjälp mig med min text",
        good: "Jag skriver en faktatext om vikingarna för åk 5. Kan du ge mig feedback på min inledning? Fokusera på om jag har en tydlig tes och bra faktameningar.",
        why: "Berätta vad du skriver, vilken årskurs du går i och vad du vill ha hjälp med.",
      },
      {
        bad: "Förklara grammatik",
        good: "Förklara skillnaden mellan adjektiv och adverb med tre exempel som passar en mellanstadieelev. Ge mig sedan en övning där jag får testa själv.",
        why: "Be om exempel och övningar – då lär du dig istället för att bara läsa.",
      },
      {
        bad: "Skriv en berättelse om en hund",
        good: "Hjälp mig brainstorma idéer till en spännande berättelse om en hund som hittar en hemlig dörr. Ge mig fem förslag på vad som kan hända, så väljer jag själv.",
        why: "Låt AI ge idéer, men skriv berättelsen själv!",
      },
    ],
    doList: [
      "Använd AI för att brainstorma och få idéer",
      "Be AI förklara saker du inte förstår",
      "Dubbelkolla AI:s fakta mot andra källor",
      "Be om feedback på text du redan skrivit själv",
      "Fråga din lärare om du är osäker på vad som är okej",
    ],
    dontList: [
      "Kopiera AI-text rakt av – det är fusk",
      "Lita blint på AI:s fakta – den hittar ibland på saker",
      "Dela personlig information (namn, adress, skola)",
      "Använda AI på prov eller bedömningar utan tillåtelse",
      "Låta AI skriva hela din text åt dig",
    ],
    exercises: [
      {
        title: "Förbättra tre frågor",
        description:
          "Ta dessa dåliga frågor och gör dem bättre: 1) \"Skriv om Sverige\" 2) \"Förklara verb\" 3) \"Hjälp mig med läxan\". Testa sedan dina förbättrade frågor och se om svaren blir mer användbara.",
      },
      {
        title: "Faktakoll-utmaningen",
        description:
          "Be AI skriva tio fakta om ett land du valt. Undersök sedan varje faktapåstående med hjälp av NE.se eller en annan källa. Hur många stämde? Hur många var fel eller överdrivna?",
      },
      {
        title: "Brainstorma – inte fuska",
        description:
          "Du ska skriva en argumenterande text om skärmtid. Be AI ge dig fem argument för och fem emot. Välj sedan de tre bästa och skriv texten helt själv med egna ord.",
      },
      {
        title: "Testa olika roller",
        description:
          "Ställ samma fråga till AI tre gånger men be den svara som: 1) en forskare, 2) en journalist, 3) en elev i åk 5. Hur skiljer sig svaren? Vilket hjälpte dig mest?",
      },
    ],
  },

  hogstadiet: {
    intro:
      "AI-verktyg förändrar hur vi arbetar med text och information. Som högstadieelev behöver du kunna använda AI smart – som ett verktyg för lärande, inte som en genväg. Här lär du dig promptteknik, källkritik av AI och var gränsen mellan hjälp och fusk går.",
    whatIsAi:
      "Stora språkmodeller (LLM:er) som ChatGPT är tränade på miljarder texter från internet. De genererar text genom att förutsäga nästa ord baserat på mönster. Det innebär att de kan producera välformulerade svar som låter auktoritativa – men de har ingen förståelse för innehållet. De kan \"hallucinera\": hitta på källor, blanda ihop fakta och presentera felaktigheter med stor övertygelse.",
    goodPrompts: [
      {
        bad: "Analysera dikten",
        good: "Jag läser 'Ångest' av Pär Lagerkvist. Kan du ställa mig fem fördjupande frågor om diktens bildspråk och tema? Jag vill öva på att analysera själv, inte få ett färdigt svar.",
        why: "Be AI ställa frågor istället för att ge svar – då tränar du din egen analysförmåga.",
      },
      {
        bad: "Skriv en argumentation om sociala medier",
        good: "Jag skriver en argumenterande text om sociala mediers påverkan på unga för åk 9. Jag har skrivit min inledning och tes. Kan du ge feedback på: 1) Är min tes tydlig? 2) Är min inledning engagerande? 3) Vilka motargument bör jag bemöta?",
        why: "Ge AI din text först och be om specifik feedback – inte en färdig text.",
      },
      {
        bad: "Vad är retorik?",
        good: "Förklara etos, patos och logos med exempel från modern reklam. Ge sedan tre korta övningar där jag får identifiera vilket retoriskt grepp som används.",
        why: "Be om konkreta exempel och övningar kopplade till det du arbetar med.",
      },
    ],
    doList: [
      "Använd AI som sparringpartner – be den ifrågasätta dina argument",
      "Be om feedback på text du redan skrivit",
      "Dubbelkolla alla fakta och källor AI anger",
      "Experimentera med olika prompttekniker för bättre svar",
      "Var transparent mot läraren om hur du använt AI",
    ],
    dontList: [
      "Låta AI skriva din text – det är plagiat",
      "Lita på att AI:s källor existerar (den hittar på referenser)",
      "Använda AI på nationella prov eller examinationer",
      "Dela personuppgifter eller känslig information",
      "Skicka in AI-genererad text utan egen bearbetning",
    ],
    exercises: [
      {
        title: "Hallucinationsjakt",
        description:
          "Be AI rekommendera fem svenska romaner från 2000-talet med författare och årtal. Verifiera varje bok: finns den? Stämmer författaren och årtalet? Dokumentera vad som var korrekt och vad som var påhittat.",
      },
      {
        title: "Promptlabbet",
        description:
          "Välj ett ämne (t.ex. klimatförändringar). Skriv tre versioner av samma fråga: en vag, en medelbra och en riktigt specifik. Jämför svaren. Analysera vad som gjorde den bästa prompten mest användbar.",
      },
      {
        title: "AI som kritisk vän",
        description:
          "Skriv en kort argumenterande text (200 ord). Be sedan AI hitta svagheter i din argumentation. Granska AI:s kritik – håller du med? Förbättra din text baserat på den feedback du tycker var relevant.",
      },
      {
        title: "Perspektivtest",
        description:
          "Be AI beskriva en historisk händelse (t.ex. kolonialismen) ur tre olika perspektiv. Analysera: vilka perspektiv saknas? Vilka fördomar kan AI ha? Jämför med läroboken.",
      },
      {
        title: "Källkritik i praktiken",
        description:
          "Be AI skriva ett kort referat om ett aktuellt ämne. Identifiera minst tre påståenden som behöver verifieras. Sök upp primärkällor för varje påstående och dokumentera vad som stämde.",
      },
    ],
  },

  gymnasiet: {
    intro:
      "AI-verktyg är kraftfulla instrument för akademiskt arbete – men de kräver kritiskt tänkande och etisk medvetenhet. Här fördjupar du dig i promptteknik, källkritik av AI-genererat innehåll och gränsdragningen mellan legitimt verktygsanvändande och akademisk ohederlighet.",
    whatIsAi:
      "Stora språkmodeller (LLM) bygger på transformer-arkitektur och tränas på enorma textkorpusar. De genererar text genom statistisk prediktion – de beräknar sannolikheten för nästa token givet kontexten. Detta innebär att de saknar faktisk förståelse, intentionalitet och verklighetsförankring. De kan producera sofistikerade formuleringar som maskerar fundamentala felaktigheter. Fenomenet \"hallucination\" – att AI genererar påhittad information med hög konfidens – är ett inneboende problem, inte en bugg.",
    goodPrompts: [
      {
        bad: "Analysera Strindbergs verk",
        good: "Jag skriver en litterär analys av 'Fröken Julie' med fokus på naturalism och klasskonflikter. Jag har identifierat tre centrala teman. Kan du agera opponent: granska min analys, identifiera luckor i min argumentation och föreslå alternativa tolkningar jag bör bemöta?",
        why: "Använd AI som akademisk opponent – det stärker din analys mer än att be om svar.",
      },
      {
        bad: "Skriv en uppsats om språkförändringar",
        good: "Jag skriver en utredande text om hur sociala medier påverkar svenskt skriftspråk. Texten ska följa akademisk struktur med tes, evidens och slutsats. Kan du: 1) Granska min disposition och föreslå förbättringar, 2) Peka på var jag behöver starkare evidens, 3) Föreslå motargument jag bör adressera?",
        why: "Be AI granska din struktur och argumentation – inte skriva åt dig.",
      },
      {
        bad: "Vad är stilistik?",
        good: "Jämför prosastilen i Hjalmar Söderbergs 'Doktor Glas' och Sara Lidmans 'Hjortronlandet'. Ge tre specifika stilistiska skillnader med textexempel, och förklara hur stilistiska val speglar respektive författares kontext. Notera: jag vill verifiera dina citat mot originaltexterna.",
        why: "Signalera att du tänker verifiera – det gör AI mer försiktig med påhittade citat.",
      },
    ],
    doList: [
      "Använd AI som akademisk sparringpartner och opponent",
      "Be om feedback på struktur, argumentation och språk i text du skrivit",
      "Verifiera alla faktapåståenden, citat och källhänvisningar",
      "Experimentera med avancerade prompttekniker (chain-of-thought, rollspel, begränsningar)",
      "Dokumentera och var transparent med hur du använt AI i arbetsprocessen",
      "Testa AI:s begränsningar genom att medvetet utmana dess svar",
    ],
    dontList: [
      "Använda AI-genererad text utan substantiell egen bearbetning – det är akademisk ohederlighet",
      "Lita på AI:s källhänvisningar – de är ofta fabricerade",
      "Använda AI på prov, nationella prov eller examinationer utan explicit tillåtelse",
      "Dela personuppgifter, provfrågor eller upphovsrättsskyddat material",
      "Presentera AI:s analys som din egen – dina egna slutsatser är det centrala",
      "Anta att AI:s svar representerar akademisk konsensus",
    ],
    exercises: [
      {
        title: "Akademisk opponent",
        description:
          "Skriv en tes för en utredande text. Be AI agera opponent och ifrågasätta din tes ur tre perspektiv. Granska AI:s invändningar kritiskt: vilka är substantiella? Vilka bygger på felaktiga premisser? Revidera din tes baserat på din egen bedömning.",
      },
      {
        title: "Avancerad hallucinationsjakt",
        description:
          "Be AI skriva ett stycke om en svensk författares verk med citat och sekundärkällor. Verifiera systematiskt: Existerar citaten? Finns sekundärkällorna? Stämmer tolkningarna med etablerad litteraturvetenskap? Dokumentera dina fynd.",
      },
      {
        title: "Promptoptimering",
        description:
          "Välj ett komplext ämne. Skriv fem versioner av samma fråga med olika tekniker: direkt fråga, chain-of-thought, rollbaserad, med begränsningar, med motexempel. Analysera hur varje teknik påverkar svarets kvalitet och användbarhet.",
      },
      {
        title: "Bias-analys",
        description:
          "Be AI analysera en samhällsfråga (t.ex. invandring, klimatpolitik). Identifiera systematiska snedvridningar i svaret. Vilka perspektiv saknas? Hur påverkas svaret av träningsdata? Jämför med vetenskapliga källor.",
      },
      {
        title: "Etisk gränsdragning",
        description:
          "Diskutera med en klasskamrat: var går gränsen mellan att använda AI som verktyg och akademisk ohederlighet? Ta fram tre scenarier som är tydligt okej, tre som är tydligt fusk, och tre gråzonsfall. Motivera era ställningstaganden.",
      },
    ],
  },
};

/* ── Metadata & params ────────────────────────────────────────────────── */

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `AI i svenskan – ${group.label}`,
    description: `Lär dig använda AI-verktyg smart i svenskämnet – anpassat för ${group.label.toLowerCase()}.`,
  };
}

/* ── Page component ───────────────────────────────────────────────────── */

export default async function AiISvenskanPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const content = AI_CONTENT[arskurs] ?? AI_CONTENT.hogstadiet;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href={`/${arskurs}`} className="hover:text-neutral-900 dark:hover:text-white">
          {group.label}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900 dark:text-white">AI i svenskan</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
          <Sparkles className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          AI i svenskan
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
          {content.intro}
        </p>
      </div>

      {/* Vad är AI? */}
      <section className="mb-10">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Vad är AI egentligen?
            </h2>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300">{content.whatIsAi}</p>
        </div>
      </section>

      {/* Bra vs dåliga promptar */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-neutral-900 dark:text-white">
          <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          Så skriver du bra frågor till AI
        </h2>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Det du skriver till AI kallas en <strong>prompt</strong>. En bra prompt ger ett bra svar. Här ser du skillnaden:
        </p>
        <div className="flex flex-col gap-6">
          {content.goodPrompts.map((example, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="mb-3 flex items-start gap-2">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-red-600 dark:text-red-400">Dålig prompt</span>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400 italic">&ldquo;{example.bad}&rdquo;</p>
                </div>
              </div>
              <div className="mb-3 flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-green-600 dark:text-green-400">Bra prompt</span>
                  <p className="mt-1 text-neutral-900 dark:text-white">&ldquo;{example.good}&rdquo;</p>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Varför?</strong> {example.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gör / Gör inte */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-neutral-900 dark:text-white">
          <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          Regler för AI-användning
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Gör */}
          <div className="rounded-xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-950/30">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-800 dark:text-green-300">
              <CheckCircle2 className="h-5 w-5" />
              Gör så här
            </h3>
            <ul className="space-y-2">
              {content.doList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-900 dark:text-green-200">
                  <span className="mt-1 text-green-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Gör inte */}
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-950/30">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-800 dark:text-red-300">
              <AlertTriangle className="h-5 w-5" />
              Undvik detta
            </h3>
            <ul className="space-y-2">
              {content.dontList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-900 dark:text-red-200">
                  <span className="mt-1 text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Övningar */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-neutral-900 dark:text-white">
          <PenLine className="h-6 w-6 text-violet-600 dark:text-violet-400" />
          Prova själv
        </h2>
        <div className="flex flex-col gap-4">
          {content.exercises.map((exercise, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                  {i + 1}
                </span>
                {exercise.title}
              </h3>
              <p className="ml-9 text-neutral-600 dark:text-neutral-400">{exercise.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Länk till AI-labbet */}
      <section>
        <Link
          href="/ai-labbet"
          className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-amber-300 hover:bg-amber-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-700 dark:hover:bg-amber-950/30"
        >
          <Sparkles className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          <div className="flex-1">
            <p className="font-semibold text-neutral-900 dark:text-white">Vill du lära dig mer?</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Besök AI-labbet för fördjupande guider om promptteknik, skrivhjälp och källkritik.
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}
