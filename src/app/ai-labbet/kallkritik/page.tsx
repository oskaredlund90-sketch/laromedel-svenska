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
  title: "Kallkritik och AI",
  description:
    "Granska AI-genererad text kritiskt. Lar dig varfor AI kan ha fel och hur du kontrollerar.",
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
          Kallkritik och AI
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          AI-verktyg kan ge imponerande svar, men de kan ocksa ha fundamentalt
          fel. Lar dig granska AI-genererad information med samma kritiska blick
          som du anvander for andra kallor.
        </p>
      </div>

      {/* 1. Varfor AI kan ha fel */}
      <Section title="Varfor AI kan ha fel &mdash; hallucinationer">
        <div className="flex items-start gap-3 mb-4">
          <Ghost className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            AI-sprakmodeller som ChatGPT ar traanade att producera text som
            <em> later</em> ratt och sammanhangande. Men de &quot;vet&quot; inte
            om det de sager ar sant. De kan med stor sjalvsakerhet producera
            information som ar helt paaahittad. Detta kallas{" "}
            <strong>hallucinationer</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Vad ar en hallucination?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                En AI-hallucination ar nar en sprakmodell genererar information
                som later trovaardig men som ar felaktig eller helt paaahittad.
                Det kan vara falska kallor, felaktiga artal, uppdiktade citat
                eller personer som inte existerar. Problemet ar att
                hallucinationerna ofta presenteras med samma sjalvsakerhet som
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
                  <strong>Paaahittade kallor:</strong> AI kan referera till
                  bocker, artiklar eller studier som aldrig publicerats.
                  Titlarna later realistiska men existerar inte.
                </li>
                <li>
                  <strong>Felaktiga fakta:</strong> Artal, statistik och
                  historiska detaljer kan vara felaktiga. AI blandar ibland ihop
                  liknande handelser eller personer.
                </li>
                <li>
                  <strong>Foraldrad information:</strong> AI:ns traaningsdata
                  har ett slutdatum. Den vet inte vad som hant efter det, men
                  kan anda generera svar om aktuella handelser &mdash; felaktigt.
                </li>
                <li>
                  <strong>Logiska felslut:</strong> AI kan dra felaktiga
                  slutsatser fran korrekt information, eller bygga argument som
                  later logiska men innehaller brister.
                </li>
                <li>
                  <strong>Sjalvsaker ton:</strong> AI markerar sallan att den
                  ar osaker. Ett fel presenteras ofta lika sakert som en
                  korrekt uppgift.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Warning>
          <strong>Viktigt:</strong> Ju mer specifik och detaljerad en AI-text
          ar, desto lattare ar det att tro pa den. Men detaljer ar just det som
          AI ofta hittar pa. Jamfor alltid mot oberoende kallor.
        </Warning>
      </Section>

      {/* 2. Kontrollera AI-genererad information */}
      <Section title="Kontrollera AI-genererad information">
        <div className="flex items-start gap-3 mb-4">
          <Search className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Har ar en steg-for-steg-metod for att kontrollera om det AI sager
            stammer.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="mb-3 font-semibold text-neutral-900 dark:text-white">
              Checklista: Sa kontrollerar du AI-svar
            </h3>
            <ol className="ml-4 list-decimal space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                <strong>Identifiera pastaenden.</strong> Bryt ner svaret i
                enskilda pastaenden eller fakta. Vad sager AI egentligen?
              </li>
              <li>
                <strong>Sok i oberoende kallor.</strong> Kontrollera varje
                viktigt pastaende mot minst en annan kalla:
                uppslagsverk, nyhetsartiklar, laarobocker eller officiella
                webbplatser.
              </li>
              <li>
                <strong>Kontrollera kallhanvisningar.</strong> Om AI anger
                kallor, sok upp dem. Existerar boken/artikeln? Ar
                forfattaren riktig? Stammer sidhanvisningar?
              </li>
              <li>
                <strong>Var extra forsiktig med siffror.</strong> Artal,
                procenttal, befolkningsstatistik och liknande ar omraden dar
                AI ofta gor fel. Dubbelkolla alla siffror.
              </li>
              <li>
                <strong>Fraga AI om sjalv.</strong> Anvand promptar som
                &quot;Hur saker ar du pa detta?&quot; eller &quot;Markera vad
                du ar osaker pa.&quot; Det garanterar inte korrekthet, men kan
                avsloja osakerheter.
              </li>
              <li>
                <strong>Jamfor flera AI-svar.</strong> Stall samma fraga tva
                gangar, eller anvand olika AI-verktyg. Om svaren skiljer sig
                at, bor du undersoka vidare.
              </li>
            </ol>
          </div>

          <Tip>
            <strong>Tumregel:</strong> Ju viktigare informationen ar for din
            uppgift, desto noggrannare maste du kontrollera den. I en skoluppgift
            dar du bedoms pa korrekthet ar det sarskilt viktigt.
          </Tip>
        </div>
      </Section>

      {/* 3. TRAASK-modellen */}
      <Section title="TRAASK-modellen applicerad pa AI">
        <div className="flex items-start gap-3 mb-4">
          <Scale className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            TRAASK ar en kallkritisk modell som anvands i svensk skola. Har
            tillaampar vi den pa AI-genererade svar. Varje bokstav star for en
            aspekt att granska.
          </p>
        </div>

        <div className="space-y-5">
          <TraaskLetter
            letter="T"
            title="Trovaardighet"
            aiDescription="Hur trovaardig ar AI-verktyget? AI ar inte en expert &mdash; det ar en sprakmodell som forutsager nasta ord. Det har ingen faktisk kunskap, bara monster fran traaningsdata. Bedoom varje svar kritiskt, oavsett hur sakert det later."
          />
          <TraaskLetter
            letter="R"
            title="Relevans"
            aiDescription="Ar AI-svaret relevant for din fraga? AI kan ibland svamla ut pa tangerande amnen eller ge ett svar som later bra men inte besvarar det du fraaagade. Las kritiskt: svarar AI pa din faktiska fraga?"
          />
          <TraaskLetter
            letter="A"
            title="Aktualitet"
            aiDescription="AI:ns traaningsdata har ett slutdatum. Information om aktuella handelser, ny forskning eller senaste statistik kan vara foraldrad eller felaktig. Kontrollera alltid aktualiteten hos tidskanslig information."
          />
          <TraaskLetter
            letter="A"
            title="Avsandare"
            aiDescription="Vem star bakom AI-verktyget? Olika foretag (OpenAI, Google, Anthropic) har olika prioriteringar. AI kan vara traanad att undvika vissa amnen eller framstalla saker pa ett visst satt. Fundera over vems perspektiv som dominerar."
          />
          <TraaskLetter
            letter="S"
            title="Syfte"
            aiDescription="Vad ar syftet med AI:ns svar? AI ar designad att ge svar som tillfredsstaller anvandaren, inte nodvandigtvis att ge det mest korrekta svaret. Den kan aven vara influerad av kommersiella intressen."
          />
          <TraaskLetter
            letter="K"
            title="Kalla"
            aiDescription="Vilka kallor baseras svaret pa? AI anger sallan sina kallor. Nar den gor det kan de vara paaahittade. Kraven pa att kontrollera mot oberoende kallor ar annu starkare for AI-genererad text an for traditionella kallor."
          />
        </div>

        <Tip>
          <strong>Minnesregel:</strong> TRAASK fungerare lika bra for AI-svar
          som for tidningsartiklar och webbsidor. Skillnaden ar att AI kräver
          EXTRA noggrannhet, eftersom den ar designad att lata trovaardig &mdash;
          oavsett om informationen stammer eller inte.
        </Tip>
      </Section>

      {/* 4. AI-bias och perspektiv */}
      <Section title="AI-bias och perspektiv">
        <div className="flex items-start gap-3 mb-4">
          <Eye className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            AI-verktyg ar inte neutrala. De speglar de data de tranats pa,
            och dessa data innehaller samhallets fördomar och obalanser.
          </p>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Vad ar AI-bias?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Bias (snedvridning) innebar att AI systematiskt ger vissa
                perspektiv, grupper eller asikter mer plats an andra. Om
                traaningsdata innehaller mer text fran en viss kultur, tid
                eller perspektiv, kommer AI:ns svar att paverkas av detta.
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
                  <strong>Kulturell bias:</strong> AI-verktyg ar oftast traanade
                  pa mest engelskt material. Svar om svensk kultur, historia
                  och samhalle kan praaaglas av amerikanska perspektiv.
                </li>
                <li>
                  <strong>Könsbias:</strong> AI kan forstarka stereotypa
                  kopplingar, till exempel mellan kon och yrken, egenskaper
                  eller roller i berattelser.
                </li>
                <li>
                  <strong>Historisk bias:</strong> Traaningsdata speglar
                  historiska fördomar. AI kan ge en forenklad eller ensidig
                  bild av historiska handelser och grupper.
                </li>
                <li>
                  <strong>Representation:</strong> Vissa grupper, spraak och
                  perspektiv ar underrepresenterade i traaningsdata, vilket
                  leder till saamre kvalitet pa svar om dessa amnen.
                </li>
                <li>
                  <strong>Bekraaftelsebias:</strong> AI tenderar att ge svar
                  som bekraaftar det anvandaren verkar vilja hora, istallet
                  for att utmana eller nyansera.
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
            <h3 className="mb-3 font-semibold text-neutral-900 dark:text-white">
              Sa hanterar du AI-bias
            </h3>
            <ol className="ml-4 list-decimal space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                Var medveten om att AI inte ar neutral. Fraaga dig: vems
                perspektiv representeras har?
              </li>
              <li>
                Be uttryckligen om alternativa perspektiv: &quot;Ge mig detta
                fran bade svenskt och internationellt perspektiv.&quot;
              </li>
              <li>
                Jamfor AI-svar med kallor som representerar olika
                perspektiv.
              </li>
              <li>
                Utmana AI:ns svar: &quot;Finns det andra satt att se pa
                detta?&quot; eller &quot;Vilka perspektiv saknas har?&quot;
              </li>
              <li>
                Var sarskilt uppmaarksam vid kansliga amnen som kultur,
                identitet, politik och historia.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* 5. Praktiska ovningar */}
      <Section title="Praktiska ovningar">
        <div className="flex items-start gap-3 mb-6">
          <ClipboardCheck className="mt-1 h-5 w-5 shrink-0 text-neutral-500" />
          <p className="text-neutral-700 dark:text-neutral-300">
            Traaana din kallkritiska formaga med dessa ovningar. For varje
            ovning: anvand ett AI-verktyg, analysera svaret och dokumentera vad
            du hittar.
          </p>
        </div>

        <div className="space-y-3">
          <ExerciseCard
            number={1}
            title="Faktajakt"
            description="Stall en faktafraga till AI om ett amne du redan kan mycket om (till exempel en bok du last eller ett historiskt amne du studerat). Jamfor AI:ns svar med dina kunskaper. Hur manga fel hittar du?"
          />
          <ExerciseCard
            number={2}
            title="Hallucinationsjakt"
            description="Be AI rekommendera tre vetenskapliga artiklar om ett amne. Sok sedan upp varje artikel: existerar den? Finns forfattaren? Ar tidskriften riktig? Dokumentera vad som stammer och vad som ar paaahittat."
          />
          <ExerciseCard
            number={3}
            title="TRAASK-analys av AI-svar"
            description="Stall en fraga om ett aktuellt amne till AI. Utvardera svaret med TRAASK-modellen. Skriv en kort analys (150-200 ord) dar du bedomer svarets trovaardighet pa varje punkt."
          />
          <ExerciseCard
            number={4}
            title="Perspektivjamforelse"
            description="Stall samma fraga pa svenska och engelska. Jamfor svaren: skiljer de sig at? Pa vilka satt? Vad kan det bero pa? Dokumentera skillnader och fundera over vad de sager om AI-bias."
          />
          <ExerciseCard
            number={5}
            title="Ledande fragor"
            description="Stall samma fraga till AI men med olika formuleringar: en neutral, en som lutar at 'ja' och en som lutar at 'nej'. Till exempel: 'Ar laxor bra?', 'Ar det sant att laxor forbattrar inlarning?', 'Stammer det att laxor ar skadliga?'. Jamfor svaren."
          />
          <ExerciseCard
            number={6}
            title="Biaskartlaggning"
            description="Be AI beskriva en typisk larare, laakare och ingenjor. Analysera svaren: vilka kon, aaldrar och bakgrunder beskrivs? Finns det stereotyper? Diskutera varfor AI svarar som den gor."
          />
          <ExerciseCard
            number={7}
            title="Nyhetsverifiering"
            description="Be AI sammanfatta en aktuell nyhet. Jamfor sedan med minst tva nyhetskaallor. Vad stammer? Vad saknas? Har AI lagt till nagot som inte finns i originalnyheterna?"
          />
        </div>

        <Tip>
          <strong>Fordjupning:</strong> Arbeta i par eller smaagrupper med
          ovningarna. Diskutera era resultat och jamfor era analyser. Kallkritik
          ar en fardighet som utvecklas genom ovning och diskussion.
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
              information med sjalvsaker ton.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              <strong>Kontrollera alltid</strong> AI-svar mot oberoende kallor,
              sarskilt fakta, kallhanvisningar och siffror.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              Anvand <strong>TRAASK-modellen</strong> for att systematiskt
              granska AI-genererad information.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              Var medveten om <strong>AI-bias</strong>: AI ar inte neutral utan
              speglar sina traaningsdata.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <p>
              <strong>Ova regelbundet</strong> pa att granska AI-svar &mdash;
              kallkritik ar en fardighet som kraver traning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
