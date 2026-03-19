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
    "Bygg ditt ordforrad! Har hittar du veckans ord och tips for att lara dig nya ord.",
  mellanstadiet:
    "Utoka ditt ordforrad med ordfamiljer, synonymer och sammansatta ord.",
  hogstadiet:
    "Akademiska ord, ordnyanser och etymologi. Stark ditt sprak for skola och vardag.",
  gymnasiet:
    "Avancerat ordforrad, stilnivaer, lanord och latinska/grekiska rotter.",
};

/* ------------------------------------------------------------------ */
/*  Tips and exercises per level                                       */
/* ------------------------------------------------------------------ */

const LAGSTADIET_TIPS = [
  {
    title: "Las hogt varje dag",
    content:
      "Nar du laser hogt hor du hur orden later. Be en vuxen lasa for dig ocksa - da far du hora nya ord och kan fraga vad de betyder.",
  },
  {
    title: "Anvand en bildordbok",
    content:
      "En bildordbok hjalper dig att koppla ihop ord med bilder. Peka pa bilden och sag ordet. Forsok anvanda ordet i en egen mening.",
  },
  {
    title: "Ordsamlaren",
    content:
      "Ha en liten bok dar du skriver ner nya ord du lar dig. Skriv ordet, rita en bild och skriv en mening med ordet. Forsok samla minst tre nya ord varje vecka!",
  },
  {
    title: "Ordlek: Jag tanker pa...",
    content:
      "Spela ordlekar med kompisar eller familjen. Beskriv ett ord utan att saga det - kan de andra gissa? Till exempel: 'Det ar ett djur som har lang hals och bor i Afrika' (giraff).",
  },
];

const MELLANSTADIET_TIPS = [
  {
    title: "Ordfamiljer",
    content:
      "Manga ord hor ihop i familjer. Till exempel: skriva, skrivare, skrivbok, skrift, skriftlig. Nar du lar dig ett nytt ord, forsok hitta andra ord i samma familj. Det hjalper dig att forsta och minnas fler ord.",
  },
  {
    title: "Synonymer och antonymer",
    content:
      "Synonymer ar ord som betyder ungefar samma sak (glad - lycklig - nojd). Antonymer ar motsatsord (glad - ledsen). Ovning: valj fem ord och skriv minst tva synonymer och en antonym till varje.",
  },
  {
    title: "Sammansatta ord",
    content:
      "Svenskan ar fullt av sammansatta ord! 'Fotboll' = fot + boll. 'Skolbok' = skola + bok. Ovning: hur manga sammansatta ord kan du bilda med ordet 'bok'? (bokhylla, bokstav, bokmal, bokhandel...)",
  },
  {
    title: "Ord i kontext",
    content:
      "Nar du laser och stoter pa ett ord du inte forstar, forsok forst gissa vad det betyder genom att titta pa sammanhanget. Las meningen fore och efter. Sla sedan upp ordet for att se om du gissade ratt.",
  },
  {
    title: "Ovning: Byt ut ordet",
    content:
      "Tag en kort text och stryka under fem ord. Forsok byta ut varje ord mot en synonym. Las texten igen - andras betydelsen? Lar dig att olika ord ger olika nyanser.",
  },
];

const HOGSTADIET_TIPS = [
  {
    title: "Akademiska ord",
    content:
      "I skolan moter du ofta akademiska ord som 'analysera', 'jaemfora', 'sammanfatta', 'argumentera' och 'vardera'. Dessa ord ar nyckeln till bra betyg. Ovning: skriv en egen definition av varje ord och ge ett exempel pa hur du anvander det i en skoluppgift.",
  },
  {
    title: "Ordnyanser",
    content:
      "Orden 'tycka', 'tro' och 'veta' verkar lika men betyder olika saker. 'Tycka' ar en asikt, 'tro' ar en gissning och 'veta' ar sakert. Ovning: skriv tre meningar dar du anvander ratt ord - 'Jag tycker att...', 'Jag tror att...', 'Jag vet att...'.",
  },
  {
    title: "Etymologi - ordens ursprung",
    content:
      "Att foersta var ett ord kommer ifran hjalper dig att minnas det. Till exempel kommer 'telefon' fran grekiskans 'tele' (fjarran) och 'phone' (ljud). Ovning: sla upp fem ord och ta reda pa deras ursprung. Ser du monster?",
  },
  {
    title: "Stilnivaer",
    content:
      "Samma sak kan sagas pa olika satt beroende pa situationen. Jemfor: 'snacka' (vardagligt) - 'tala' (neutralt) - 'yttra sig' (formellt). Ovning: valj fem vardagliga ord och hitta en neutral och en formell variant av varje.",
  },
  {
    title: "Ovning: Ordbanken",
    content:
      "Skapa en ordbank i en anteckningsbok eller digitalt. For varje nytt ord: skriv definitionen, ordklassen, ett exempel, en synonym och en antonym. Ga igenom ordbanken varje vecka. Mal: 5 nya ord per vecka.",
  },
];

const GYMNASIET_TIPS = [
  {
    title: "Register och stilnivaer",
    content:
      "Spraket har olika register: vardagligt, neutralt och formellt. I akademiskt skrivande anvander du formellt register: 'undersokning' istallet for 'koll', 'paverka' istallet for 'stalla till det'. Ovning: ta en vardaglig text (t.ex. ett sms) och skriv om den i formellt register.",
  },
  {
    title: "Latinska och grekiska rotter",
    content:
      "Manga svenska ord har latinskt eller grekiskt ursprung. Kannedom om vanliga rotter hjalper dig att forsta okanda ord. Exempel: 'bio' (liv), 'geo' (jord), 'psyko' (sjal), 'krono' (tid), 'auto' (sjalv). Ovning: lista tio ord som borjar med 'bio-' och forklara kopplingen till 'liv'.",
  },
  {
    title: "Lanord och sprakpaverkan",
    content:
      "Svenska har lanord fran manga sprak: tyska (arbete, borgare), franska (restaurang, polis), engelska (mejl, sajt). Ovning: valj tio vanliga svenska ord och ta reda pa vilket sprak de kommer fran. Vad sager det om Sveriges historia?",
  },
  {
    title: "Facksprak och termer",
    content:
      "Varje amne har sitt facksprak. I litteraturvetenskapen talar vi om 'narrativ', 'fokalisering', 'metafor' och 'diegesis'. Ovning: valj ett amne (juridik, medicin, teknik) och samla tio facktermer. Forklara dem med egna ord.",
  },
  {
    title: "Ovning: Ordanalys",
    content:
      "Valj ett ord (t.ex. 'demokrati'). Analysera: 1) Etymologi (demos = folk, kratos = styre). 2) Hur anvands det idag? 3) Vilka sammansattningar finns? (folkomrostning, folkstyre) 4) Finns det ett synonymt uttryck? 5) I vilka kontexter anvands det?",
  },
  {
    title: "Connotation vs. denotation",
    content:
      "Denotation ar ordets bokstavliga betydelse. Konnotation ar de associationer och kanslor ordet vackar. 'Hem' och 'bostad' betecknar samma sak, men 'hem' vacker varma kanslor medan 'bostad' ar neutralt. Ovning: jamfor konnotationerna hos 'barn/unge/avkomma', 'gammal/aldre/aalderstigen', 'dod/avliden/bortgangen'.",
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
    description: `Ordkunskap och ordforrad for ${group.label.toLowerCase()}.`,
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
      <Section title="Tips och ovningar">
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
            matt - platt. Forsok hitta sa manga rim som mojligt till orden: bok,
            sol, dag, natt, ring.
          </Tip>
          <Tip>
            <strong>Alfabet-leken:</strong> Kan du hitta ett djur for varje
            bokstav i alfabetet? A som apa, B som bjorn, C som...
          </Tip>
        </Section>
      )}

      {level === "mellanstadiet" && (
        <Section title="Utmaning">
          <Tip>
            <strong>Orddetektiven:</strong> Valj en sida ur en bok du laser
            just nu. Hitta tre ord du inte kanner till. Forsok gissa vad de
            betyder, och sla sedan upp dem. Var din gissning ratt?
          </Tip>
          <Tip>
            <strong>Sammansattningsrekordet:</strong> Vad ar det langsta
            sammansatta ordet du kan hitta eller skapa? Kan du sla
            &quot;nordostpassatvindsbelte&quot;?
          </Tip>
        </Section>
      )}

      {level === "hogstadiet" && (
        <Section title="Fordjupning">
          <Tip>
            <strong>Sprakhhistoria:</strong> Svenska har forandrats mycket genom
            historien. Fornsvenska, aldre nysvenska och modern svenska ser helt
            olika ut. Sla upp en medeltida text och forsok tolka den - hur
            manga ord kanner du igen?
          </Tip>
          <Tip>
            <strong>Ordets resa:</strong> Valj ett ord med utlandskt ursprung
            (t.ex. &quot;garage&quot; fran franskan) och spoora ordets resa fran
            kallspraket till svenskan. Har betydelsen andrats pa vagen?
          </Tip>
        </Section>
      )}

      {level === "gymnasiet" && (
        <Section title="Fordjupning">
          <Tip>
            <strong>Semantisk analys:</strong> Valj ett abstrakt ord som
            &quot;frihet&quot;, &quot;rattvisaa&quot; eller
            &quot;demokrati&quot;. Analysera hur ordet anvands i tre olika
            texter (t.ex. en politisk debatt, en roman och en vetenskaplig
            artikel). Skiftar betydelsen?
          </Tip>
          <Tip>
            <strong>Spraklig variation:</strong> Jamfor hur samma budskap
            uttrycks i en tidningsartikel, ett blogginlagg och ett sms. Vilka
            ord valjs? Vilken meningsbyggnad? Vad sager det om register och
            mottagaranpassning?
          </Tip>
          <Tip>
            <strong>Nyord och sprakforandring:</strong> Varje ar listar
            Sprakradet nya ord i svenskan (t.ex.
            &quot;klimatangest&quot;, &quot;doomscrollning&quot;). Vad sager
            nyorden om var tid? Hur bildas de (lan, sammansattning,
            avledning)?
          </Tip>
        </Section>
      )}
    </div>
  );
}
