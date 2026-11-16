import type { Metadata } from "next";
import { type ReactNode } from "react";
import {
  ShieldCheck,
  Lightbulb,
  AlertTriangle,
  Ghost,
  Search,
  Scale,
  Eye,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Källkritik och AI",
  description:
    "Granska AI-genererad text kritiskt. Lär dig varför AI kan ha fel och hur du kontrollerar.",
};

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12">
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

function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
      <div className="text-sm text-amber-900 dark:text-amber-200">
        {children}
      </div>
    </div>
  );
}

function ExerciseCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-900 dark:text-amber-200">
            {number}
          </span>
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

function TraaskLetter({
  letter,
  title,
  aiDescription,
}: {
  letter: string;
  title: string;
  aiDescription: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-200 text-lg font-bold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        {letter}
      </span>
      <div>
        <h4 className="font-semibold text-neutral-900 dark:text-white">
          {title}
        </h4>
        <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
          {aiDescription}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function KallkritikPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900">
          <ShieldCheck className="h-6 w-6 text-amber-700 dark:text-amber-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Källkritik och AI
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          AI-verktyg kan ge imponerande svar, men de kan också ha fundamentalt
          fel. Lär dig granska AI-genererad information med samma kritiska blick
          som du använder för andra källor.
        </p>
      </div>

      {/* 1. Varför AI kan ha fel */}
      <Section title="Varför AI kan ha fel &mdash; hallucinationer">
        <div className="flex items-start gap-3 mb-4">
          <Ghost className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            AI-språkmodeller som ChatGPT är tränade att producera text som
            <em> låter</em> rätt och sammanhängande. Men de &quot;vet&quot; inte
            om det de säger är sant. De kan med stor självsäkerhet producera
            information som är helt påhittad. Detta kallas{" "}
            <strong>hallucinationer</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Vad är en hallucination?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En AI-hallucination är när en språkmodell genererar information
                som låter trovärdig men som är felaktig eller helt påhittad.
                Det kan vara falska källor, felaktiga årtal, uppdiktade citat
                eller personer som inte existerar. Problemet är att
                hallucinationerna ofta presenteras med samma självsäkerhet som
                korrekta fakta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Vanliga typer av AI-fel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Påhittade källor:</strong> AI kan referera till
                  böcker, artiklar eller studier som aldrig publicerats.
                  Titlarna låter realistiska men existerar inte.
                </li>
                <li>
                  <strong>Felaktiga fakta:</strong> Årtal, statistik och
                  historiska detaljer kan vara felaktiga. AI blandar ibland ihop
                  liknande händelser eller personer.
                </li>
                <li>
                  <strong>Föråldrad information:</strong> AI:ns träningsdata
                  har ett slutdatum. Den vet inte vad som hänt efter det, men
                  kan ändå generera svar om aktuella händelser &mdash; felaktigt.
                </li>
                <li>
                  <strong>Logiska felslut:</strong> AI kan dra felaktiga
                  slutsatser från korrekt information, eller bygga argument som
                  låter logiska men innehåller brister.
                </li>
                <li>
                  <strong>Självsäker ton:</strong> AI markerar sällan att den
                  är osäker. Ett fel presenteras ofta lika säkert som en
                  korrekt uppgift.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Warning>
          <strong>Viktigt:</strong> Ju mer specifik och detaljerad en AI-text
          är, desto lättare är det att tro på den. Men detaljer är just det som
          AI ofta hittar på. Jämför alltid mot oberoende källor.
        </Warning>
      </Section>

      {/* 2. Kontrollera AI-genererad information */}
      <Section title="Kontrollera AI-genererad information">
        <div className="flex items-start gap-3 mb-4">
          <Search className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Här är en steg-för-steg-metod för att kontrollera om det AI säger
            stämmer.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="mb-3 font-semibold text-neutral-900 dark:text-white">
              Checklista: Så kontrollerar du AI-svar
            </h3>
            <ol className="ml-4 list-decimal space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                <strong>Identifiera påståenden.</strong> Bryt ner svaret i
                enskilda påståenden eller fakta. Vad säger AI egentligen?
              </li>
              <li>
                <strong>Sök i oberoende källor.</strong> Kontrollera varje
                viktigt påstående mot minst en annan källa:
                uppslagsverk, nyhetsartiklar, läroböcker eller officiella
                webbplatser.
              </li>
              <li>
                <strong>Kontrollera källhänvisningar.</strong> Om AI anger
                källor, sök upp dem. Existerar boken/artikeln? Är
                författaren riktig? Stämmer sidhänvisningar?
              </li>
              <li>
                <strong>Var extra försiktig med siffror.</strong> Årtal,
                procenttal, befolkningsstatistik och liknande är områden där
                AI ofta gör fel. Dubbelkolla alla siffror.
              </li>
              <li>
                <strong>Fråga AI om själv.</strong> Använd promptar som
                &quot;Hur säker är du på detta?&quot; eller &quot;Markera vad
                du är osäker på.&quot; Det garanterar inte korrekthet, men kan
                avslöja osäkerheter.
              </li>
              <li>
                <strong>Jämför flera AI-svar.</strong> Ställ samma fråga två
                gångar, eller använd olika AI-verktyg. Om svaren skiljer sig
                åt, bör du undersöka vidare.
              </li>
            </ol>
          </div>

          <Tip>
            <strong>Tumregel:</strong> Ju viktigare informationen är för din
            uppgift, desto noggrannare måste du kontrollera den. I en skoluppgift
            där du bedöms på korrekthet är det särskilt viktigt.
          </Tip>
        </div>
      </Section>

      {/* 3. TRAASK-modellen */}
      <Section title="TRAASK-modellen applicerad på AI">
        <div className="flex items-start gap-3 mb-4">
          <Scale className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            TRAASK är en källkritisk modell som används i svensk skola. Här
            tillämpar vi den på AI-genererade svar. Varje bokstav står för en
            aspekt att granska.
          </p>
        </div>

        <div className="space-y-5">
          <TraaskLetter
            letter="T"
            title="Trovärdighet"
            aiDescription="Hur trovärdig är AI-verktyget? AI är inte en expert &mdash; det är en språkmodell som förutsäger nästa ord. Det har ingen faktisk kunskap, bara mönster från träningsdata. Bedöm varje svar kritiskt, oavsett hur säkert det låter."
          />
          <TraaskLetter
            letter="R"
            title="Relevans"
            aiDescription="Är AI-svaret relevant för din fråga? AI kan ibland svamla ut på tangerande ämnen eller ge ett svar som låter bra men inte besvarar det du frågade. Läs kritiskt: svarar AI på din faktiska fråga?"
          />
          <TraaskLetter
            letter="A"
            title="Aktualitet"
            aiDescription="AI:ns träningsdata har ett slutdatum. Information om aktuella händelser, ny forskning eller senaste statistik kan vara föråldrad eller felaktig. Kontrollera alltid aktualiteten hos tidskänslig information."
          />
          <TraaskLetter
            letter="A"
            title="Avsändare"
            aiDescription="Vem står bakom AI-verktyget? Olika företag (OpenAI, Google, Anthropic) har olika prioriteringar. AI kan vara tränad att undvika vissa ämnen eller framställa saker på ett visst sätt. Fundera över vems perspektiv som dominerar."
          />
          <TraaskLetter
            letter="S"
            title="Syfte"
            aiDescription="Vad är syftet med AI:ns svar? AI är designad att ge svar som tillfredsställer användaren, inte nödvändigtvis att ge det mest korrekta svaret. Den kan även vara influerad av kommersiella intressen."
          />
          <TraaskLetter
            letter="K"
            title="Källa"
            aiDescription="Vilka källor baseras svaret på? AI anger sällan sina källor. När den gör det kan de vara påhittade. Kraven på att kontrollera mot oberoende källor är ännu starkare för AI-genererad text än för traditionella källor."
          />
        </div>

        <Tip>
          <strong>Minnesregel:</strong> TRAASK fungerar lika bra för AI-svar
          som för tidningsartiklar och webbsidor. Skillnaden är att AI kräver
          EXTRA noggrannhet, eftersom den är designad att låta trovärdig &mdash;
          oavsett om informationen stämmer eller inte.
        </Tip>
      </Section>

      {/* 4. AI-bias och perspektiv */}
      <Section title="AI-bias och perspektiv">
        <div className="flex items-start gap-3 mb-4">
          <Eye className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            AI-verktyg är inte neutrala. De speglar de data de tränats på,
            och dessa data innehåller samhällets fördomar och obalanser.
          </p>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Vad är AI-bias?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Bias (snedvridning) innebär att AI systematiskt ger vissa
                perspektiv, grupper eller åsikter mer plats än andra. Om
                träningsdata innehåller mer text från en viss kultur, tid
                eller perspektiv, kommer AI:ns svar att påverkas av detta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Vanliga former av AI-bias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Kulturell bias:</strong> AI-verktyg är oftast tränade
                  på mest engelskt material. Svar om svensk kultur, historia
                  och samhälle kan präglas av amerikanska perspektiv.
                </li>
                <li>
                  <strong>Könsbias:</strong> AI kan förstärka stereotypa
                  kopplingar, till exempel mellan kön och yrken, egenskaper
                  eller roller i berättelser.
                </li>
                <li>
                  <strong>Historisk bias:</strong> Träningsdata speglar
                  historiska fördomar. AI kan ge en förenklad eller ensidig
                  bild av historiska händelser och grupper.
                </li>
                <li>
                  <strong>Representation:</strong> Vissa grupper, språk och
                  perspektiv är underrepresenterade i träningsdata, vilket
                  leder till sämre kvalitet på svar om dessa ämnen.
                </li>
                <li>
                  <strong>Bekräftelsebias:</strong> AI tenderar att ge svar
                  som bekräftar det användaren verkar vilja höra, istället
                  för att utmana eller nyansera.
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="mb-3 font-semibold text-neutral-900 dark:text-white">
              Så hanterar du AI-bias
            </h3>
            <ol className="ml-4 list-decimal space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                Var medveten om att AI inte är neutral. Fråga dig: vems
                perspektiv representeras här?
              </li>
              <li>
                Be uttryckligen om alternativa perspektiv: &quot;Ge mig detta
                från både svenskt och internationellt perspektiv.&quot;
              </li>
              <li>
                Jämför AI-svar med källor som representerar olika
                perspektiv.
              </li>
              <li>
                Utmana AI:ns svar: &quot;Finns det andra satt att se på
                detta?&quot; eller &quot;Vilka perspektiv saknas här?&quot;
              </li>
              <li>
                Var särskilt uppmärksam vid känsliga ämnen som kultur,
                identitet, politik och historia.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* 5. Praktiska övningar */}
      <Section title="Praktiska övningar">
        <div className="flex items-start gap-3 mb-6">
          <ClipboardCheck className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Träna din källkritiska förmåga med dessa övningar. För varje
            övning: använd ett AI-verktyg, analysera svaret och dokumentera vad
            du hittar.
          </p>
        </div>

        <div className="space-y-3">
          <ExerciseCard
            number={1}
            title="Faktajakt"
            description="Ställ en faktafråga till AI om ett ämne du redan kan mycket om (till exempel en bok du läst eller ett historiskt ämne du studerat). Jämför AI:ns svar med dina kunskaper. Hur många fel hittar du?"
          />
          <ExerciseCard
            number={2}
            title="Hallucinationsjakt"
            description="Be AI rekommendera tre vetenskapliga artiklar om ett ämne. Sök sedan upp varje artikel: existerar den? Finns författaren? Är tidskriften riktig? Dokumentera vad som stämmer och vad som är påhittat."
          />
          <ExerciseCard
            number={3}
            title="TRAASK-analys av AI-svar"
            description="Ställ en fråga om ett aktuellt ämne till AI. Utvärdera svaret med TRAASK-modellen. Skriv en kort analys (150-200 ord) där du bedömer svarets trovärdighet på varje punkt."
          />
          <ExerciseCard
            number={4}
            title="Perspektivjämförelse"
            description="Ställ samma fråga på svenska och engelska. Jämför svaren: skiljer de sig åt? På vilka sätt? Vad kan det bero på? Dokumentera skillnader och fundera över vad de säger om AI-bias."
          />
          <ExerciseCard
            number={5}
            title="Ledande frågor"
            description="Ställ samma fråga till AI men med olika formuleringar: en neutral, en som lutar åt 'ja' och en som lutar åt 'nej'. Till exempel: 'Är läxor bra?', 'Är det sant att läxor förbättrar inlärning?', 'Stämmer det att läxor är skadliga?'. Jämför svaren."
          />
          <ExerciseCard
            number={6}
            title="Biaskartläggning"
            description="Be AI beskriva en typisk lärare, läkare och ingenjör. Analysera svaren: vilka kön, åldrar och bakgrunder beskrivs? Finns det stereotyper? Diskutera varför AI svarar som den gör."
          />
          <ExerciseCard
            number={7}
            title="Nyhetsverifiering"
            description="Be AI sammanfatta en aktuell nyhet. Jämför sedan med minst två nyhetskällor. Vad stämmer? Vad saknas? Har AI lagt till något som inte finns i originalnyheterna?"
          />
        </div>

        <Tip>
          <strong>Fördjupning:</strong> Arbeta i par eller smågrupper med
          övningarna. Diskutera era resultat och jämför era analyser. Källkritik
          är en färdighet som utvecklas genom övning och diskussion.
        </Tip>
      </Section>

      {/* Summary */}
      <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Sammanfattning
        </h2>
        <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              AI kan <strong>hallucinera</strong> &mdash; producera felaktig
              information med självsäker ton.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              <strong>Kontrollera alltid</strong> AI-svar mot oberoende källor,
              särskilt fakta, källhänvisningar och siffror.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              Använd <strong>TRAASK-modellen</strong> för att systematiskt
              granska AI-genererad information.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              Var medveten om <strong>AI-bias</strong>: AI är inte neutral utan
              speglar sina träningsdata.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              <strong>Öva regelbundet</strong> på att granska AI-svar &mdash;
              källkritik är en färdighet som kräver träning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
