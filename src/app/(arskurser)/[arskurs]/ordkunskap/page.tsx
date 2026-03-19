import { notFound } from "next/navigation";
import { BookA, Lightbulb } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { VeckansOrd } from "@/components/veckans-ord";
import type { AgeGroup } from "@/lib/supabase/types";

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

/* ------------------------------------------------------------------ */
/*  Level descriptions                                                 */
/* ------------------------------------------------------------------ */

const LEVEL_DESCRIPTIONS: Record<AgeGroup, string> = {
  lagstadiet:
    "Bygg ditt ordförråd! Här hittar du veckans ord och tips för att lära dig nya ord.",
  mellanstadiet:
    "Utöka ditt ordförråd med ordfamiljer, synonymer och sammansatta ord.",
  hogstadiet:
    "Akademiska ord, ordnyanser och etymologi. Stärk ditt språk för skola och vardag.",
  gymnasiet:
    "Avancerat ordförråd, stilnivåer, lånord och latinska/grekiska rötter.",
};

/* ------------------------------------------------------------------ */
/*  Tips and exercises per level                                       */
/* ------------------------------------------------------------------ */

const LAGSTADIET_TIPS = [
  {
    title: "Läs högt varje dag",
    content:
      "När du läser högt hör du hur orden låter. Be en vuxen läsa för dig också - då får du höra nya ord och kan fråga vad de betyder.",
  },
  {
    title: "Använd en bildordbok",
    content:
      "En bildordbok hjälper dig att koppla ihop ord med bilder. Peka på bilden och säg ordet. Försök använda ordet i en egen mening.",
  },
  {
    title: "Ordsamlaren",
    content:
      "Ha en liten bok där du skriver ner nya ord du lär dig. Skriv ordet, rita en bild och skriv en mening med ordet. Försök samla minst tre nya ord varje vecka!",
  },
  {
    title: "Ordlek: Jag tänker på...",
    content:
      "Spela ordlekar med kompisar eller familjen. Beskriv ett ord utan att säga det - kan de andra gissa? Till exempel: 'Det är ett djur som har lång hals och bor i Afrika' (giraff).",
  },
];

const MELLANSTADIET_TIPS = [
  {
    title: "Ordfamiljer",
    content:
      "Många ord hör ihop i familjer. Till exempel: skriva, skrivare, skrivbok, skrift, skriftlig. När du lär dig ett nytt ord, försök hitta andra ord i samma familj. Det hjälper dig att förstå och minnas fler ord.",
  },
  {
    title: "Synonymer och antonymer",
    content:
      "Synonymer är ord som betyder ungefär samma sak (glad - lycklig - nöjd). Antonymer är motsatsord (glad - ledsen). Övning: välj fem ord och skriv minst två synonymer och en antonym till varje.",
  },
  {
    title: "Sammansatta ord",
    content:
      "Svenskan är fullt av sammansatta ord! 'Fotboll' = fot + boll. 'Skolbok' = skola + bok. Övning: hur många sammansatta ord kan du bilda med ordet 'bok'? (bokhylla, bokstav, bokmål, bokhandel...)",
  },
  {
    title: "Ord i kontext",
    content:
      "När du läser och stöter på ett ord du inte förstår, försök först gissa vad det betyder genom att titta på sammanhanget. Läs meningen före och efter. Slå sedan upp ordet för att se om du gissade rätt.",
  },
  {
    title: "Övning: Byt ut ordet",
    content:
      "Ta en kort text och stryk under fem ord. Försök byta ut varje ord mot en synonym. Läs texten igen - ändras betydelsen? Lär dig att olika ord ger olika nyanser.",
  },
];

const HOGSTADIET_TIPS = [
  {
    title: "Akademiska ord",
    content:
      "I skolan möter du ofta akademiska ord som 'analysera', 'jämföra', 'sammanfatta', 'argumentera' och 'värdera'. Dessa ord är nyckeln till bra betyg. Övning: skriv en egen definition av varje ord och ge ett exempel på hur du använder det i en skoluppgift.",
  },
  {
    title: "Ordnyanser",
    content:
      "Orden 'tycka', 'tro' och 'veta' verkar lika men betyder olika saker. 'Tycka' är en åsikt, 'tro' är en gissning och 'veta' är säkert. Övning: skriv tre meningar där du använder rätt ord - 'Jag tycker att...', 'Jag tror att...', 'Jag vet att...'.",
  },
  {
    title: "Etymologi - ordens ursprung",
    content:
      "Att förstå var ett ord kommer ifrån hjälper dig att minnas det. Till exempel kommer 'telefon' från grekiskans 'tele' (fjärran) och 'phone' (ljud). Övning: slå upp fem ord och ta reda på deras ursprung. Ser du mönster?",
  },
  {
    title: "Stilnivåer",
    content:
      "Samma sak kan sägas på olika sätt beroende på situationen. Jämför: 'snacka' (vardagligt) - 'tala' (neutralt) - 'yttra sig' (formellt). Övning: välj fem vardagliga ord och hitta en neutral och en formell variant av varje.",
  },
  {
    title: "Övning: Ordbanken",
    content:
      "Skapa en ordbank i en anteckningsbok eller digitalt. För varje nytt ord: skriv definitionen, ordklassen, ett exempel, en synonym och en antonym. Gå igenom ordbanken varje vecka. Mål: 5 nya ord per vecka.",
  },
];

const GYMNASIET_TIPS = [
  {
    title: "Register och stilnivåer",
    content:
      "Språket har olika register: vardagligt, neutralt och formellt. I akademiskt skrivande använder du formellt register: 'undersökning' istället för 'koll', 'påverka' istället för 'ställa till det'. Övning: ta en vardaglig text (t.ex. ett sms) och skriv om den i formellt register.",
  },
  {
    title: "Latinska och grekiska rötter",
    content:
      "Många svenska ord har latinskt eller grekiskt ursprung. Kännedom om vanliga rötter hjälper dig att förstå okända ord. Exempel: 'bio' (liv), 'geo' (jord), 'psyko' (själ), 'krono' (tid), 'auto' (själv). Övning: lista tio ord som börjar med 'bio-' och förklara kopplingen till 'liv'.",
  },
  {
    title: "Lånord och språkpåverkan",
    content:
      "Svenska har lånord från många språk: tyska (arbete, borgare), franska (restaurang, polis), engelska (mejl, sajt). Övning: välj tio vanliga svenska ord och ta reda på vilket språk de kommer från. Vad säger det om Sveriges historia?",
  },
  {
    title: "Fackspråk och termer",
    content:
      "Varje ämne har sitt fackspråk. I litteraturvetenskapen talar vi om 'narrativ', 'fokalisering', 'metafor' och 'diegesis'. Övning: välj ett ämne (juridik, medicin, teknik) och samla tio facktermer. Förklara dem med egna ord.",
  },
  {
    title: "Övning: Ordanalys",
    content:
      "Välj ett ord (t.ex. 'demokrati'). Analysera: 1) Etymologi (demos = folk, kratos = styre). 2) Hur används det idag? 3) Vilka sammansättningar finns? (folkomröstning, folkstyre) 4) Finns det ett synonymt uttryck? 5) I vilka kontexter används det?",
  },
  {
    title: "Konnotation vs. denotation",
    content:
      "Denotation är ordets bokstavliga betydelse. Konnotation är de associationer och känslor ordet väcker. 'Hem' och 'bostad' betecknar samma sak, men 'hem' väcker varma känslor medan 'bostad' är neutralt. Övning: jämför konnotationerna hos 'barn/unge/avkomma', 'gammal/äldre/ålderstigen', 'död/avliden/bortgången'.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Ordkunskap - ${group.label}`,
    description: `Ordkunskap och ordförråd för ${group.label.toLowerCase()}.`,
  };
}

export default async function OrdkunskapPage({ params }: Props) {
  const { arskurs } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  const level = arskurs as AgeGroup;

  const tips =
    level === "lagstadiet"
      ? LAGSTADIET_TIPS
      : level === "mellanstadiet"
        ? MELLANSTADIET_TIPS
        : level === "hogstadiet"
          ? HOGSTADIET_TIPS
          : GYMNASIET_TIPS;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookA className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Ordkunskap
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      {/* Veckans ord */}
      <Section title="Veckans ord">
        <VeckansOrd />
      </Section>

      {/* Tips and exercises */}
      <Section title="Tips och övningar">
        <div className="space-y-4">
          {tips.map((tip) => (
            <Card key={tip.title}>
              <CardHeader>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {tip.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Level-specific extra sections */}
      {level === "lagstadiet" && (
        <Section title="Ordlek">
          <Tip>
            <strong>Rimlek:</strong> Kan du hitta ord som rimmar? Katt - hatt -
            matt - platt. Försök hitta så många rim som möjligt till orden: bok,
            sol, dag, natt, ring.
          </Tip>
          <Tip>
            <strong>Alfabet-leken:</strong> Kan du hitta ett djur för varje
            bokstav i alfabetet? A som apa, B som björn, C som...
          </Tip>
        </Section>
      )}

      {level === "mellanstadiet" && (
        <Section title="Utmaning">
          <Tip>
            <strong>Orddetektiven:</strong> Välj en sida ur en bok du läser
            just nu. Hitta tre ord du inte känner till. Försök gissa vad de
            betyder, och slå sedan upp dem. Var din gissning rätt?
          </Tip>
          <Tip>
            <strong>Sammansättningsrekordet:</strong> Vad är det längsta
            sammansatta ordet du kan hitta eller skapa? Kan du slå
            &quot;nordostpassatvindsbälte&quot;?
          </Tip>
        </Section>
      )}

      {level === "hogstadiet" && (
        <Section title="Fördjupning">
          <Tip>
            <strong>Språkhistoria:</strong> Svenska har förändrats mycket genom
            historien. Fornsvenska, äldre nysvenska och modern svenska ser helt
            olika ut. Slå upp en medeltida text och försök tolka den - hur
            många ord känner du igen?
          </Tip>
          <Tip>
            <strong>Ordets resa:</strong> Välj ett ord med utländskt ursprung
            (t.ex. &quot;garage&quot; från franskan) och spåra ordets resa från
            källspråket till svenskan. Har betydelsen ändrats på vägen?
          </Tip>
        </Section>
      )}

      {level === "gymnasiet" && (
        <Section title="Fördjupning">
          <Tip>
            <strong>Semantisk analys:</strong> Välj ett abstrakt ord som
            &quot;frihet&quot;, &quot;rättvisa&quot; eller
            &quot;demokrati&quot;. Analysera hur ordet används i tre olika
            texter (t.ex. en politisk debatt, en roman och en vetenskaplig
            artikel). Skiftar betydelsen?
          </Tip>
          <Tip>
            <strong>Språklig variation:</strong> Jämför hur samma budskap
            uttrycks i en tidningsartikel, ett blogginlägg och ett sms. Vilka
            ord väljs? Vilken meningsbyggnad? Vad säger det om register och
            mottagaranpassning?
          </Tip>
          <Tip>
            <strong>Nyord och språkförändring:</strong> Varje år listar
            Språkrådet nya ord i svenskan (t.ex.
            &quot;klimatångest&quot;, &quot;doomscrollning&quot;). Vad säger
            nyorden om vår tid? Hur bildas de (lån, sammansättning,
            avledning)?
          </Tip>
        </Section>
      )}
    </div>
  );
}
