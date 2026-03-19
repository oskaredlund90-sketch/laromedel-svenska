import { notFound } from "next/navigation";
import Link from "next/link";
import { PenLine, Lightbulb, AlertTriangle, Dumbbell } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { SkrivverkstadOvningar } from "@/components/skrivverkstad-ovningar";
import type { AgeGroup } from "@/lib/supabase/types";
import { type ReactNode } from "react";

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

function ExampleCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">{children}</div>
    </div>
  );
}

function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">{children}</div>
    </div>
  );
}

function Ex({ children }: { children: ReactNode }) {
  return (
    <p className="my-1 rounded bg-neutral-100 px-3 py-1.5 font-mono text-sm dark:bg-neutral-800">
      {children}
    </p>
  );
}

function ExampleBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {title}
      </p>
      <div className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 italic">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Template content                                                   */
/* ------------------------------------------------------------------ */

function BerattendeTextContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        En berättande text underhåller, engagerar och tar läsaren med på en resa.
        Här lär du dig hur du bygger upp en berättelse med tydlig struktur,
        levande karaktärer och spännande handling.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Fånga läsarens intresse direkt. Presentera huvudpersonen, platsen och
              tiden. Ge en antydan om vad berättelsen ska handla om.
            </p>
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Tekniker:</p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Mitt-i-handlingen (in medias res)</li>
              <li>- En fråga eller gåta</li>
              <li>- En stämningsfull miljöbeskrivning</li>
              <li>- Dialog som väcker nyfikenhet</li>
            </ul>
            <ExampleBlock title="Exempel: In medias res">
              Hjärtat bultade så hårt att hon var säker på att alla kunde höra det.
              Dörren framför henne stod på glänt, och ljuset därinne flackade oroligt.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="2. Uppbyggnad">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Utveckla handlingen. Skapa problem och hinder för huvudpersonen.
              Bygg upp spänningen steg för steg.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Introducera konflikten</li>
              <li>- Låt huvudpersonen möta utmaningar</li>
              <li>- Höj insatserna gradvis</li>
              <li>- Varva handling med beskrivning och dialog</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="3. Klimax">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Berättelsens mest spännande punkt. Konflikten når sin höjdpunkt
              och avgörs.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Den mest dramatiska scenen</li>
              <li>- Huvudpersonen ställs inför ett avgörande val</li>
              <li>- Kort, snabba meningar skapar tempo</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="4. Avslutning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Runda av berättelsen. Visa hur konflikten lösts och vad som
              förändrats.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Knyt ihop lösa trådar</li>
              <li>- Visa hur huvudpersonen har förändrats</li>
              <li>- Kan vara öppen eller sluten</li>
              <li>- Undvik att allt löser sig &quot;för lätt&quot;</li>
            </ul>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Karaktärer">
        <ExampleCard title="Levande karaktärer">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Bra karaktärer har djup - de har drömmar, rädslor och
            egenheter. Visa vilka de är genom handling och dialog,
            inte bara genom att berätta det.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Visa, berätta inte:</strong></p>
          </div>
          <ExampleBlock title="Berätta (svagare)">
            Erik var nervös inför provet.
          </ExampleBlock>
          <ExampleBlock title="Visa (starkare)">
            Erik trummade med fingrarna mot bänken och kastade en blick på klockan
            igen. Fem minuter kvar. Han svalde och torkade de fuktiga händerna
            mot byxbenen.
          </ExampleBlock>
          <Tip>
            Ge varje karaktär minst en egenhet eller vana som gör dem
            minnesvärda: ett speciellt sätt att prata, en nervös tic, ett
            klädesplagg de alltid bär.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Dialog">
        <ExampleCard title="Skriv bra dialog">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Dialog gör texten levande och bryter av berättandet. Varje karaktär
            ska ha sin egen röst.
          </p>
          <ExampleBlock title="Exempel på dialog">
            &ndash; Var har du varit? frågade mamma med armarna i kors.
            {"\n"}&ndash; Hos Alex, mumlade Nora utan att möta hennes blick.
            {"\n"}&ndash; Klockan är halv tolv, Nora.
            {"\n"}&ndash; Jag vet. Förlåt.
          </ExampleBlock>
          <div className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Tips för dialog:</strong></p>
            <ul className="space-y-1">
              <li>- Använd tankstreck (&ndash;) före varje replik</li>
              <li>- Variera inquit-fraser: sa, frågade, mumlade, viskade</li>
              <li>- Lägg till kroppsspråk och handlingar mellan replikerna</li>
              <li>- Alla behöver inte prata likadant - anpassa efter karaktären</li>
            </ul>
          </div>
          <Warning>
            Vanligt fel: Att använda för avancerade inquit-fraser.
            &quot;Sa&quot; och &quot;frågade&quot; räcker långt. Undvik &quot;exklamerade&quot;,
            &quot;proklamerade&quot; och liknande i vardagsberättelser.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Miljöbeskrivning">
        <ExampleCard title="Skapa stämning med sinnen">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Använd alla fem sinnen (syn, hörsel, lukt, smak, känsel) för
            att göra miljön levande. Miljöbeskrivningen ska förstärka stämningen.
          </p>
          <ExampleBlock title="Kuslig stämning">
            Grinden gnisslade när hon sköt upp den. Trädgården låg öde; de
            vissna löven virvlade över grusgången som bruna skelett.
            Luften luktade fukt och ruttnande äpplen.
          </ExampleBlock>
          <ExampleBlock title="Varm och trygg stämning">
            Köket badade i gult ljus. Doften av nybakat bröd blandades med
            kanel och det svaga brummandet från radion på bänken. Hon
            lindade händerna runt den varma koppen.
          </ExampleBlock>
          <Tip>
            Väv in miljöbeskrivningar naturligt i handlingen. Undvik långa
            beskrivande stycken som bromsar tempot. Koppla sinnena till
            karaktärens känslor.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Platt inledning:</strong> Undvik &quot;Jag vaknade och det var en vanlig dag.&quot; Börja där det blir intressant.</li>
            <li>- <strong>Allt löser sig för lätt:</strong> Konflikten behöver kännas äkta och lösningen trovärdig.</li>
            <li>- <strong>Bara handling, ingen känsla:</strong> Visa vad karaktärerna tänker och känner.</li>
            <li>- <strong>Tempushopp:</strong> Välj presens eller preteritum och håll dig till det.</li>
            <li>- <strong>Ingen röd tråd:</strong> Varje scen ska driva handlingen framåt.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function ArgumenterandeTextContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        En argumenterande text syftar till att övertyga läsaren om en åsikt
        eller ståndpunkt. Den kräver tydlig struktur, starka argument och
        saklig ton.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning med tes">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Presentera ämnet och formulera din tes - den åsikt du vill
              försvara. Tesen ska vara tydlig och ta ställning.
            </p>
            <ExampleBlock title="Exempel på tes">
              Alla elever borde få en timmes fysisk aktivitet per dag i skolan.
              Det skulle förbättra både hälsa och inlärning.
            </ExampleBlock>
            <Tip>
              En bra tes är specifik och möjlig att argumentera för och emot.
              &quot;Mobbning är dåligt&quot; är för vagt. &quot;Skolan borde införa
              obligatorisk schemalagd rasttid med vuxennärvaro för att motverka
              mobbning&quot; är bättre.
            </Tip>
          </ExampleCard>

          <ExampleCard title="2. Argument">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Presentera 2-4 argument som stöder din tes. Varje argument
              bör stödjas av fakta, exempel eller expertutlåtanden.
            </p>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p><strong>Typer av argument:</strong></p>
              <ul className="space-y-1">
                <li>- <strong>Faktaargument:</strong> Baserat på forskning och statistik</li>
                <li>- <strong>Erfarenhetsargument:</strong> Bygger på egna eller andras erfarenheter</li>
                <li>- <strong>Auktoritetsargument:</strong> Hänvisar till experter</li>
                <li>- <strong>Värdeargument:</strong> Bygger på gemensamma värderingar</li>
              </ul>
            </div>
          </ExampleCard>

          <ExampleCard title="3. Motargument">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Ta upp och bemöt motargument. Det visar att du har tänkt
              igenom frågan från olika sidor och stärker din trovärdighet.
            </p>
            <ExampleBlock title="Exempel">
              Vissa menar att det inte finns tid i schemat för mer fysisk
              aktivitet. Men forskning visar att elever som rör sig mer
              faktiskt presterar bättre i andra ämnen, vilket gör att tiden
              inte &quot;försvinner&quot; utan investeras.
            </ExampleBlock>
            <Warning>
              Vanligt fel: Att göra motargumenten till &quot;halmgubbar&quot; - det vill säga
              att presentera motargumenten i försvagad form. Var ärlig med
              motståndarens bästa argument och bemöt dem serioust.
            </Warning>
          </ExampleCard>

          <ExampleCard title="4. Slutsats">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Sammanfatta dina viktigaste argument och upprepa tesen i ny
              form. Gärna med en blick framåt eller uppmaning till handling.
            </p>
            <ExampleBlock title="Exempel">
              Sammanfattningsvis finns det starka skäl - både hälsomässiga
              och pedagogiska - för att ge elever mer fysisk aktivitet i skolan.
              Det är dags att vi slutar se rörelse som ett avbrott från lärandet
              och i stället ser det som en förutsättning.
            </ExampleBlock>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Argumentationsteknik">
        <ExampleCard title="Stärk dina argument">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Etos (trovärdighet):</strong> Visa att du är påläst och seriös.
              Hänvisa till pålitliga källor.</p>
            <Ex>Enligt Folkhälsomyndigheten rör sig svenska barn allt mindre...</Ex>

            <p><strong>Logos (logik):</strong> Bygg logiska resonemangskedjor.
              Om A, så B, och därför C.</p>
            <Ex>Om eleverna rör sig mer, förbättras koncentrationen. Med bättre
              koncentration höjs resultaten. Alltså leder mer rörelse till bättre
              skolresultat.</Ex>

            <p><strong>Patos (känsla):</strong> Använd känslor för att engagera,
              men överdriva inte.</p>
            <Ex>Tänk dig en skola där barn får springa, leka och röra sig varje dag
              - en skola där de ser fram emot att gå dit.</Ex>
          </div>
          <Tip>
            En bra argumenterande text kombinerar alla tre - etos, logos och patos.
            Men i sakprosa bör logos och etos väga tyngst.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Textbindning i argumenterande text">
        <ExampleCard title="Viktiga sambandsord">
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Lägga till argument:</strong></p>
            <Ex>dessutom, vidare, ytterligare ett skäl är, för det andra</Ex>
            <p><strong>Visa kontrast/motargument:</strong></p>
            <Ex>å andra sidan, visserligen ... men, trots att, emellertid</Ex>
            <p><strong>Visa orsak och följd:</strong></p>
            <Ex>därför, följaktligen, detta leder till, som en konsekvens</Ex>
            <p><strong>Sammanfatta:</strong></p>
            <Ex>sammanfattningsvis, sammantaget, allt detta visar att</Ex>
          </div>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Oklar tes:</strong> Läsaren ska tidigt förstå vad du argumenterar för.</li>
            <li>- <strong>Bara tyckande:</strong> &quot;Jag tycker att...&quot; är inte ett argument. Underbygg med fakta.</li>
            <li>- <strong>Upprepning:</strong> Tre olika argument är bättre än samma argument tre gånger.</li>
            <li>- <strong>Ignorera motargument:</strong> Det försvagar din text om du inte bemöter dem.</li>
            <li>- <strong>Känsloargument utan substans:</strong> Patos utan logos håller inte.</li>
            <li>- <strong>Generaliseringar:</strong> &quot;Alla vet att...&quot; och &quot;Det är uppenbart&quot; är inte argument.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function UtredandeTextContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        En utredande text undersöker en fråga från flera sidor, analyserar
        information och drar slutsatser. Till skillnad från en argumenterande text
        ska den utredande texten vara objektiv och balanserad.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning med frågeställning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Presentera ämnet och formulera en tydlig frågeställning.
              Ge nödvändig bakgrund så att läsaren förstår sammanhanget.
            </p>
            <ExampleBlock title="Exempel">
              Hur påverkar sociala medier ungdomars psykiska hälsa? Under de
              senaste tio åren har användningen av sociala medier bland unga ökat
              dramatiskt, och frågan om dess effekter är aktuell.
            </ExampleBlock>
            <Tip>
              Frågeställningen styr hela texten. Den ska vara öppen (inte gå att
              besvara med bara ja eller nej) och tillräckligt avgränsad för att
              kunna besvaras.
            </Tip>
          </ExampleCard>

          <ExampleCard title="2. Bakgrund">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Ge läsaren den information som behövs för att förstå frågan.
              Definiera viktiga begrepp och presentera relevant fakta.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Historisk bakgrund vid behov</li>
              <li>- Definitioner av centrala begrepp</li>
              <li>- Relevant statistik eller forskning</li>
              <li>- Avgränsning: vad utredningen inte behandlar</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="3. Analys / Utredningsdel">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Kärnan i texten. Presentera olika perspektiv, undersök orsaker
              och konsekvenser, och väg olika argument mot varandra.
            </p>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p><strong>Organisera med tydliga rubriker. Exempel:</strong></p>
              <ul className="space-y-1">
                <li>- Perspektiv 1: Positiva effekter av sociala medier</li>
                <li>- Perspektiv 2: Negativa effekter</li>
                <li>- Vad säger forskningen?</li>
                <li>- Sammanvägning av olika perspektiv</li>
              </ul>
            </div>
          </ExampleCard>

          <ExampleCard title="4. Slutsats">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Besvara frågeställningen baserat på din utredning. Slutsatsen
              ska följa logiskt från analysen.
            </p>
            <ExampleBlock title="Exempel">
              Sammanfattningsvis visar utredningen att sociala medier har
              både positiva och negativa effekter på ungdomars psykiska hälsa.
              Den avgörande faktorn tycks vara hur mycket tid som spenderas
              och på vilket sätt plattformarna används.
            </ExampleBlock>
            <Warning>
              Slutsatsen ska inte innehålla ny information. Den sammanfattar
              och drar slutsatser från det som redan presenterats.
            </Warning>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Akademiskt förhållningssätt">
        <ExampleCard title="Objektivitet och källhantering">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Håll objektiv ton:</strong></p>
            <ul className="space-y-1">
              <li>- Undvik &quot;jag tycker&quot; - presentera fakta och låt läsaren dra slutsatser</li>
              <li>- Använd distanserade formuleringar: &quot;forskning visar&quot;, &quot;det finns indikationer på&quot;</li>
              <li>- Presentera båda sidor rättvist, även om du lutar åt en sida</li>
            </ul>

            <p><strong>Referera till källor:</strong></p>
            <Ex>Enligt en studie från Karolinska Institutet (2023)...</Ex>
            <Ex>Statistik från SCB visar att...</Ex>
            <Ex>Forskaren Anna Svensson menar att...</Ex>

            <p><strong>Markera osäkerhet:</strong></p>
            <Ex>Det finns indikationer på att... / Det tyder på att...</Ex>
            <Ex>En möjlig förklaring är... / Resultaten pekar mot...</Ex>
          </div>
          <Tip>
            Skilj på fakta och tolkning. Skriv &quot;Studien visar att 70 % av
            ungdomarna använder sociala medier dagligen&quot; (fakta) istället för
            &quot;Alla ungdomar sitter på sociala medier hela tiden&quot; (generalisering).
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Språk och stil">
        <ExampleCard title="Formellt språk">
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Använd:</strong></p>
            <ul className="space-y-1">
              <li>- Formella sambandsord: emellertid, vidare, följaktligen</li>
              <li>- Passivformer: &quot;undersökningen genomfördes&quot; istället för &quot;jag undersökte&quot;</li>
              <li>- Precist språk: undvik vaga ord som &quot;grej&quot;, &quot;massa&quot;</li>
            </ul>
            <p><strong>Undvik:</strong></p>
            <ul className="space-y-1">
              <li>- Talspråk och slang</li>
              <li>- Retoriska frågor (hör hemma i argumenterande text)</li>
              <li>- Starka värdeladdade ord</li>
              <li>- Förkortningar som &quot;typ&quot;, &quot;liksom&quot;, &quot;osv&quot;</li>
            </ul>
          </div>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Ingen tydlig frågeställning:</strong> Utan fråga vet varken du eller läsaren vad texten undersöker.</li>
            <li>- <strong>Ensidig:</strong> En utredande text måste belysa fler än en sida.</li>
            <li>- <strong>Påståenden utan belägg:</strong> Alla påståenden ska kunna stödjas med källor.</li>
            <li>- <strong>Blanda samman fakta och åsikt:</strong> Var tydlig med vad som är vetenskapligt belagt och vad som är tolkning.</li>
            <li>- <strong>Slutsats som inte följer av analysen:</strong> Slutsatsen ska bygga på det du har presenterat, inget annat.</li>
            <li>- <strong>För brett ämne:</strong> Avgränsa! &quot;Klimatförändringen&quot; är för brett; &quot;Hur påverkar klimatförändringen Östersjöns ekosystem?&quot; är lagom.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function KronikaContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        En krönika är en personlig text som blandar åsikter med berättande.
        Krönikören utgår ofta från en vardaglig händelse och lyfter den till
        ett större perspektiv - med humor, ironi eller eftertanke.
      </p>

      <Section title="Vad kännetecknar en krönika?">
        <ExampleCard title="Krönikans särdrag">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Personlig röst:</strong> Du skriver som du själv. Krönikören är synlig i texten.</li>
            <li>- <strong>Utgångspunkt i vardagen:</strong> Ofta börjar krönikan med en konkret händelse eller observation.</li>
            <li>- <strong>Från litet till stort:</strong> Det vardagliga kopplas till en större fråga eller insikt.</li>
            <li>- <strong>Underhållande:</strong> Humor, ironi och kvickhet är vanliga verktyg.</li>
            <li>- <strong>Åsikt utan att argumentera traditionellt:</strong> Du tar ställning, men genom berättelsen snarare än genom logiska argument.</li>
          </ul>
        </ExampleCard>
      </Section>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Krok">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Börja med något som fångar läsaren. En konkret situation, en
              rolig iakttagelse eller en provocerande tanke.
            </p>
            <ExampleBlock title="Exempel">
              Igår stod jag i kö på ICA i exakt tjugotre minuter. Jag vet
              det för jag hann räkna alla chokladkakor i hyllan bredvid.
              Tre gånger.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="2. Berättelse och reflektion">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Utveckla berättelsen och väv in dina tankar och reflektioner.
              Varva det konkreta med det allmänna.
            </p>
            <ExampleBlock title="Exempel">
              Det slog mig att köande kanske är den mest svenska av alla
              sysselsättningar. Vi köar till allt. Vi är världsmästare i att stå
              still och vänta på vår tur.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="3. Fördjupning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Koppla det personliga till ett större sammanhang. Vad säger din
              erfarenhet om samhället, människan eller tillvaron?
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Lyft perspektivet</li>
              <li>- Lägg in en oväntad vändning</li>
              <li>- Kommentera ett samhällsfenomen</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="4. Avslutning med poäng">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Avsluta med en poäng, en tankställare eller en cirkelkomposition
              som knyter an till inledningen.
            </p>
            <ExampleBlock title="Exempel">
              Så nästa gång du står i kö, se det inte som bortkastad tid.
              Se det som en påminnelse om att du lever i ett land där
              folk fortfarande har tålamod nog att vänta på sin tur.
            </ExampleBlock>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Språk och stil">
        <ExampleCard title="Hitta din röst">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Blandad stil:</strong> Krönikan blandar talspråk med skriftspråk.
              Du kan vara ledig utan att vara slarvig.</p>

            <p><strong>Humor och ironi:</strong></p>
            <ul className="space-y-1">
              <li>- Överdrifter för komisk effekt</li>
              <li>- Understatement (underdrift)</li>
              <li>- Självironi</li>
              <li>- Oväntade jämförelser</li>
            </ul>

            <p><strong>Retoriska grepp:</strong></p>
            <ul className="space-y-1">
              <li>- Retoriska frågor (till skillnad från utredande text är de välkomna här)</li>
              <li>- Direkt tilltal till läsaren</li>
              <li>- Korta, klatschiga meningar blandat med längre resonemang</li>
              <li>- Upprepning för effekt</li>
            </ul>
          </div>
          <Tip>
            Läs krönikor av svenska krönikörer för att hitta inspiration.
            Lägg märke till hur de blandar det personliga med det allmänna och
            hur de bygger upp sina texter mot en poäng.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Skillnad mot andra texttyper">
        <ExampleCard title="Krönika vs. debattartikel vs. dagbok">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Krönika:</strong> Personlig, underhållande, blandar berättande med
              reflektion. Har en poäng men &quot;bevisar&quot; den inte med argument.</p>
            <p><strong>Debattartikel:</strong> Argumenterande, saklig, bygger på tes och argument.
              Mer formell ton.</p>
            <p><strong>Dagbok:</strong> Helt privat, ingen tydlig läsare, ingen bearbetad poäng.</p>
          </div>
          <Warning>
            Vanligt fel: Att skriva en krönika som bara är en berättelse utan
            poäng, eller en åsiktstext utan berättelse. Krönikan behöver båda.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Ingen personlig röst:</strong> Krönikan ska låta som du, inte som en lärobok.</li>
            <li>- <strong>Bara rolig, ingen substans:</strong> Humor utan poäng blir ytlig.</li>
            <li>- <strong>Bara allvarlig, ingen underhållning:</strong> Då blir det en debattartikel.</li>
            <li>- <strong>Ingen koppling litet-stort:</strong> Stanna inte vid det personliga - lyft det.</li>
            <li>- <strong>Ingen avslutande poäng:</strong> Läsaren ska komma ifrån texten med en tanke.</li>
            <li>- <strong>Överdrivet talspråk:</strong> Ledig stil är inte samma sak som slarvigt språk.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function FaktatextContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        En faktatext informerar läsaren om ett ämne på ett sakligt och objektivt
        sätt. Syftet är att förmedla kunskap - inte att underhålla eller
        övertyga. Faktatexter finns överallt: i läroböcker, uppslagsverk,
        tidningsartiklar och rapporter.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Rubrik och inledning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Rubriken ska vara tydlig och informativ. Inledningen ger en
              överblick över ämnet och väcker läsarens intresse.
            </p>
            <ExampleBlock title="Exempel">
              Isbjörnen - Arktis hotade rovdjur{"\n\n"}
              Isbjörnen är världens största landlevande rovdjur och en symbol
              för Arktis. Men klimatförändringarna hotar dess livsmiljö.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="2. Brödtext med underrubriker">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Dela upp texten i tydliga avsnitt med underrubriker. Varje avsnitt
              behandlar en aspekt av ämnet.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- En tanke per stycke</li>
              <li>- Logisk ordning: från allmänt till specifikt</li>
              <li>- Använd ämnesmeningar i varje stycke</li>
              <li>- Stöd påståenden med fakta och exempel</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="3. Källhantering">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Ange var du hämtat din information. Det ger texten trovärdighet
              och gör det möjligt för läsaren att kontrollera uppgifterna.
            </p>
            <Ex>Enligt Naturvårdsverket (2024) finns det cirka 3 000 isbjörnar i Svalbardområdet.</Ex>
            <Ex>Källa: WWF, &quot;Isbjörnens status&quot;, publicerad 2024-01-15.</Ex>
          </ExampleCard>

          <ExampleCard title="4. Avslutning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Sammanfatta de viktigaste punkterna. Kan innehålla en framåtblick
              eller en koppling till ett större sammanhang.
            </p>
            <ExampleBlock title="Exempel">
              Isbjörnen står inför stora utmaningar, men internationella insatser
              för att skydda dess livsmiljö ger hopp. Framtiden beror på hur
              världen hanterar klimatförändringarna.
            </ExampleBlock>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Källkritik och objektivitet">
        <ExampleCard title="Granska dina källor">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              Inte all information är tillförlitlig. Innan du använder en källa,
              ställ dig dessa frågor:
            </p>
            <ul className="space-y-1">
              <li>- <strong>Vem</strong> står bakom informationen? Är det en expert, en myndighet eller en okänd bloggare?</li>
              <li>- <strong>När</strong> publicerades den? Är informationen aktuell?</li>
              <li>- <strong>Varför</strong> publicerades den? Finns det ett dolt syfte, som reklam eller propaganda?</li>
              <li>- <strong>Stämmer det</strong> med andra källor? Kan du hitta samma uppgift på flera ställen?</li>
            </ul>
          </div>
          <Tip>
            Använd Skolverkets källkritiska kriterier: äkthet, tid, beroende
            och tendens. Ju fler kriterier en källa uppfyller, desto mer
            tillförlitlig är den.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Språk och stil">
        <ExampleCard title="Tydligt och sakligt språk">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Klarhet:</strong> Skriv korta, tydliga meningar. Förklara
              svåra begrepp första gången de dyker upp.</p>
            <p><strong>Precision:</strong> Använd exakta siffror och begrepp
              istället för vaga uttryck.</p>
            <Ex>Isbjörnen väger 350-700 kg (inte &quot;isbjörnen väger jättemycket&quot;).</Ex>
            <p><strong>Objektivitet:</strong> Undvik värdeladdade ord och
              personliga åsikter. Låt fakta tala.</p>
          </div>
          <Warning>
            Undvik talspråk i faktatexter. Skriv &quot;ungefär&quot; istället för
            &quot;typ&quot;, &quot;eftersom&quot; istället för &quot;för att&quot; (i betydelsen
            orsak), och &quot;mycket&quot; istället för &quot;jätte-&quot;.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Inga källor:</strong> Uppgifter utan källa tappar trovärdighet.</li>
            <li>- <strong>Ostrukturerad text:</strong> Utan underrubriker blir texten svårläst.</li>
            <li>- <strong>Åsikter istället för fakta:</strong> En faktatext ska informera, inte övertyga.</li>
            <li>- <strong>Kopierat text:</strong> Skriv om med egna ord - plagiat är aldrig acceptabelt.</li>
            <li>- <strong>Svåra ord utan förklaring:</strong> Tänk på din målgrupp och förklara facktermer.</li>
            <li>- <strong>Osammanhängande stycken:</strong> Använd sambandsord för att binda ihop texten.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function HistoriskTextContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        En historisk text berättar om händelser, personer eller epoker ur det
        förflutna. Den kan vara strikt saklig eller använda berättande
        tekniker för att göra historien levande - men den måste alltid vara
        förankrad i fakta.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning och scensättning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Placera läsaren i tid och rum. Ge en bild av sammanhanget och
              väck nyfikenhet på vad som ska komma.
            </p>
            <ExampleBlock title="Exempel">
              Stockholm, november 1520. Stortorget var tyst när gryningen kom,
              men innan dagen var slut skulle platsen vara dränkt i blod. Det
              som hände gick till historien som Stockholms blodbad.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="2. Bakgrund">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Förklara vad som ledde fram till händelsen. Vilka var de
              viktigaste orsakerna och aktörerna?
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Politiska, sociala och ekonomiska orsaker</li>
              <li>- Viktiga personer och deras roller</li>
              <li>- Tidigare händelser som påverkade utvecklingen</li>
              <li>- Konflikter och maktförhållanden</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="3. Berättelse och handling">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Berätta vad som hände, steg för steg. Använd en tydlig
              kronologisk ordning eller tematisk uppdelning.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Följ tidslinjen eller organisera tematiskt</li>
              <li>- Lyft fram avgörande ögonblick</li>
              <li>- Använd konkreta detaljer för att göra texten levande</li>
              <li>- Blanda översikt med närbild</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="4. Avslutning och reflektion">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Beskriv konsekvenserna och vad händelsen betydde i ett längre
              perspektiv. Reflektera över dess relevans idag.
            </p>
            <ExampleBlock title="Exempel">
              Stockholms blodbad blev en vändpunkt. Upproret som följde ledde
              till att Gustav Vasa valdes till kung och Sverige blev en
              självständig nation. Händelsen påminner oss om hur våld och
              maktmissbruk kan få oväntade konsekvenser.
            </ExampleBlock>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Perspektiv och berättarröst">
        <ExampleCard title="Välja perspektiv">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Första person (vittne):</strong> Du skriver som om du
              var på plats. Skapar närhet och inlevelse, men kräver att du
              skiljer tydligt på fakta och fiktion.</p>
            <p><strong>Tredje person (historiker):</strong> Du beskriver
              händelserna utifrån. Mer objektivt och vanligast i skolarbeten.</p>
          </div>
          <ExampleBlock title="Första person">
            Jag stod i folkmassan på Stortorget och kunde inte tro mina ögon.
            Soldaterna ledde fram männen en efter en...
          </ExampleBlock>
          <ExampleBlock title="Tredje person">
            Folket på Stortorget tvingades bevittna hur soldaterna ledde
            fram de dömda männen. Enligt samtida källor var stämningen
            fylld av skräck.
          </ExampleBlock>
        </ExampleCard>
      </Section>

      <Section title="Fakta och fiktion">
        <ExampleCard title="Var går gränsen?">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              I en historisk text är det viktigt att skilja på vad vi vet
              och vad vi antar. Du kan göra texten levande med detaljer,
              men du får inte hitta på händelser eller förvränga fakta.
            </p>
            <p><strong>Tillåtet:</strong> Beskriva väder, stämningar och
              miljöer baserat på historiska källor och rimliga antaganden.</p>
            <p><strong>Inte tillåtet:</strong> Hitta på dialoger som
              förändrar historiens innebörd, eller flytta händelser i tid
              för att det passar bättre.</p>
          </div>
          <Warning>
            Se upp med anakronismer - saker som inte fanns under den tidsperiod
            du skriver om. Kontrollera alltid att mat, kläder, teknologi och
            språkbruk stämmer med epoken.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Anakronismer:</strong> Kontrollera att detaljer stämmer med tidsperioden.</li>
            <li>- <strong>Ingen kontext:</strong> Förklara varför händelsen var viktig, inte bara vad som hände.</li>
            <li>- <strong>Bara årtal och namn:</strong> Gör texten levande med scener och detaljer.</li>
            <li>- <strong>Ensidigt perspektiv:</strong> Försök belysa flera sidor av en historisk händelse.</li>
            <li>- <strong>Fakta och fiktion blandas:</strong> Var tydlig med vad som är känt och vad som är tolkning.</li>
            <li>- <strong>Modern moral på historiska händelser:</strong> Försök förstå handlingar i sin tids kontext.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function PoesiContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Poesi är en konstform där varje ord räknas. Dikter kan uttrycka
        känslor, måla bilder och fånga ögonblick på ett sätt som prosa
        inte kan. Här utforskar du rim, rytm och bildspråk och lär dig
        att skriva egna dikter.
      </p>

      <Section title="Versformer">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="Fri vers">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Ingen fast form, inget rimmönster, ingen bestämd rytm.
              Friheten ställer högre krav på varje ordval.
            </p>
            <Ex>
              Morgonen{"\n"}
              kryper in genom persiennerna{"\n"}
              och lägger sig som remsor{"\n"}
              av ljus på golvet.
            </Ex>
          </ExampleCard>

          <ExampleCard title="Bunden vers">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Följer ett fast mönster med rim och rytm. Traditionell
              diktform som kräver hantverksskicklighet.
            </p>
            <Ex>
              Nu grönska alla dalar (A){"\n"}
              och grönskas alla hagar (B){"\n"}
              och vårens vindar talar (A){"\n"}
              om ljusa sommardagar. (B)
            </Ex>
          </ExampleCard>

          <ExampleCard title="Haiku">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Japansk diktform: tre rader med 5-7-5 stavelser.
              Fångar ett ögonblick i naturen.
            </p>
            <Ex>
              Löven faller ner{"\n"}
              Tyst landar de på vattnet{"\n"}
              Ringar sprider sig
            </Ex>
          </ExampleCard>

          <ExampleCard title="Sonett">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              14 rader med fast rimmönster. En klassisk form som ofta
              tar upp kärlek, skönhet eller tidens gång.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Shakespearesonett: 3 kvartetter + 1 kuplett</li>
              <li>- Italiensk sonett: 1 oktav + 1 sextett</li>
              <li>- Avslutande rader ger ofta en vändning</li>
            </ul>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Rim och rytm">
        <ExampleCard title="Rimmönster">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Parrim (AA BB):</strong> Två rader i rad som rimmar.</p>
            <Ex>Solen sjunker i det blå (A){"\n"}Nu är det dags att sova gå (A)</Ex>

            <p><strong>Korsrim (AB AB):</strong> Varannan rad rimmar.</p>
            <Ex>Vinden viskar i mitt hår (A){"\n"}Molnen seglar vitt mot blått (B){"\n"}Sommaren som aldrig går (A){"\n"}Värmen som jag aldrig glömt (B)</Ex>

            <p><strong>Omslutande rim (ABBA):</strong> Första och fjärde raden rimmar, liksom andra och tredje.</p>
            <Ex>Natten sänker sig så still (A){"\n"}Stjärnorna de lyser klart (B){"\n"}Månen visar vägen snart (B){"\n"}Dit jag allra helst vill (A)</Ex>
          </div>
          <Tip>
            Läs dikten högt! Rim och rytm är ljud - du hör om det
            fungerar bättre än du ser det på papper.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Bildspråk">
        <ExampleCard title="Poetiska verktyg">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Liknelse:</strong> Jämförelse med &quot;som&quot; eller &quot;lik&quot;.</p>
          </div>
          <ExampleBlock title="Liknelse">
            Hennes ögon var som två mörka sjöar.
          </ExampleBlock>

          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Metafor:</strong> Direkt jämförelse utan &quot;som&quot;.</p>
          </div>
          <ExampleBlock title="Metafor">
            Livet är en resa utan karta.
          </ExampleBlock>

          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Personifikation:</strong> Ge mänskliga egenskaper till
              döda ting eller abstrakta begrepp.</p>
          </div>
          <ExampleBlock title="Personifikation">
            Vinden viskade hemligheter genom trädkronorna.
          </ExampleBlock>

          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Symbol:</strong> Ett konkret föremål som representerar
              något abstrakt.</p>
          </div>
          <ExampleBlock title="Symbol">
            Den vissna rosen låg kvar på bordet. (rosen = kärlek som tagit slut)
          </ExampleBlock>
        </ExampleCard>
      </Section>

      <Section title="Att skriva dikt">
        <ExampleCard title="Praktiska råd">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Börja med en känsla eller bild:</strong> Vad vill du
              förmedla? Utgå från något konkret - ett minne, en plats, ett
              ögonblick.</p>
            <p><strong>Välj dina ord med omsorg:</strong> I en dikt bär varje
              ord vikt. Stryk det som inte behövs.</p>
            <p><strong>Lyssna på språket:</strong> Prova olika ordföljder,
              radbrytninar och pauser. Radbrytningen påverkar hur dikten
              andas.</p>
            <p><strong>Skriv om, om, om:</strong> Dikter skrivs sällan
              färdigt i första utkastet. Varje omskrivning gör den starkare.</p>
          </div>
          <Warning>
            Undvik klichéer som &quot;röd som en ros&quot;, &quot;tårar som regn&quot; eller
            &quot;hjärtat brast&quot;. Hitta dina egna bilder - det är då dikten
            blir personlig och kraftfull.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Tvingade rim:</strong> Offra inte meningen för rimmets skull. Bättre att bryta mönstret än att skriva nonsens.</li>
            <li>- <strong>Klichéer:</strong> Hitta egna bilder istället för utslitna uttryck.</li>
            <li>- <strong>Förklara för mycket:</strong> Låt bilderna tala. Dikten ska visa, inte berätta.</li>
            <li>- <strong>Ingen röd tråd:</strong> Även en dikt behöver en riktning eller ett tema.</li>
            <li>- <strong>Glömma ljudet:</strong> Läs alltid dikten högt - rytmen och klangen är en del av dikten.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function RecensionContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        En recension är en text där du granskar och bedömer ett verk - till
        exempel en bok, film, serie, datorspel eller musikalbum. En bra
        recension ger läsaren tillräckligt med information för att avgöra
        om verket är värt deras tid, utan att avslöja för mycket.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Presentera verket: titel, skapare, genre och utgivningsår.
              Fånga läsarens intresse med en kärnfull öppning.
            </p>
            <ExampleBlock title="Exempel">
              Med &quot;Bäckahästen&quot; visar Camilla Sten att svensk skräck har en
              självklar plats i den moderna litteraturen. Romanen blandar
              nordisk folktro med psykologisk spänning på ett sätt som
              fastnar i minnet.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="2. Sammanfattning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Beskriv verkets handling eller innehåll kort och utan att
              avslöja avgörande vändningar. Ge läsaren en bild av vad
              det handlar om.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Berätta vad, inte hur det slutar</li>
              <li>- Håll det kort: 3-5 meningar räcker ofta</li>
              <li>- Fokusera på grundpremissen</li>
              <li>- Nämn genre och ton</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="3. Analys och omdöme">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Kärnan i recensionen. Lyft fram vad som fungerar och vad
              som inte gör det. Motivera alltid ditt omdöme.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Karaktärer: Är de trovärdiga och intressanta?</li>
              <li>- Handling: Är den engagerande och logisk?</li>
              <li>- Stil/teknik: Språk, bild, ljud, gameplay?</li>
              <li>- Tema: Vad handlar verket om på djupet?</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="4. Avslutning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Sammanfatta ditt omdöme och ge en tydlig rekommendation.
              Vem passar verket för?
            </p>
            <ExampleBlock title="Exempel">
              &quot;Bäckahästen&quot; är en stark roman som passar dig som gillar
              skräck med djup. Vill du ha en bok som får dig att kolla
              under sängen innan du somnar? Då är det här rätt val.
            </ExampleBlock>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Argumentation i recensionen">
        <ExampleCard title="Motivera ditt omdöme">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              Det räcker inte att säga att något är bra eller dåligt.
              Du måste förklara varför. Stöd varje påstående med
              konkreta exempel från verket.
            </p>
          </div>
          <ExampleBlock title="Svagt (bara tyckande)">
            Boken var jättebra och spännande.
          </ExampleBlock>
          <ExampleBlock title="Starkt (motiverat)">
            Spänningen byggs upp skickligt genom korta kapitel och
            cliffhangers som gör att man inte kan sluta läsa. Särskilt
            scenerna vid sjön skapar en nästan fysisk känsla av obehag.
          </ExampleBlock>
          <Tip>
            En bra tumregel: för varje åsikt du uttrycker, ge minst ett
            konkret exempel. Det visar att du faktiskt har tänkt igenom
            ditt omdöme.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Olika typer av recensioner">
        <ExampleCard title="Anpassa efter verket">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Bokrecension:</strong> Fokusera på språk, karaktärer,
              handling och teman. Hur är berättarrösten?</p>
            <p><strong>Filmrecension:</strong> Bedöm manus, skådespeleri,
              regi, foto och musik. Hur fungerar helheten?</p>
            <p><strong>Spelrecension:</strong> Lyft gameplay, grafik, story
              och spelbarhet. Är det värt priset?</p>
            <p><strong>Musikrecension:</strong> Analysera text, melodi,
              produktion och känsla. Hur fungerar albumet som helhet?</p>
          </div>
          <Warning>
            Spoilervarning! Avslöja aldrig slutet eller avgörande
            vändningar utan att varna läsaren. Skriv &quot;SPOILERVARNING&quot;
            om du måste diskutera viktiga detaljer i handlingen.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Bara sammanfattning:</strong> En recension kräver analys och omdöme, inte bara en handlingsbeskrivning.</li>
            <li>- <strong>Omotiverade åsikter:</strong> &quot;Den var bra&quot; säger ingenting. Förklara varför.</li>
            <li>- <strong>Spoilers:</strong> Avslöja inte slutet eller avgörande vändningar.</li>
            <li>- <strong>Bara positivt eller bara negativt:</strong> En trovärdig recension lyfter fram både styrkor och svagheter.</li>
            <li>- <strong>Personangrepp:</strong> Kritisera verket, inte personen bakom det.</li>
            <li>- <strong>Ingen målgrupp:</strong> Hjälp läsaren avgöra om verket passar just dem.</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Template registry                                                  */
/* ------------------------------------------------------------------ */

const TEMPLATES: Record<
  string,
  {
    title: string;
    description: string;
    content: () => ReactNode;
    levels: string[];
  }
> = {
  "berattande-text": {
    title: "Berättande text",
    description: "Skriv spännande berättelser med levande karaktärer och miljöer",
    content: BerattendeTextContent,
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  "argumenterande-text": {
    title: "Argumenterande text",
    description: "Övertygande texter med tes, argument och motargument",
    content: ArgumenterandeTextContent,
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  "utredande-text": {
    title: "Utredande text",
    description: "Undersök och analysera frågor objektivt och balanserat",
    content: UtredandeTextContent,
    levels: ["hogstadiet", "gymnasiet"],
  },
  kronika: {
    title: "Krönika",
    description: "Personliga texter med humor, berättande och eftertanke",
    content: KronikaContent,
    levels: ["hogstadiet", "gymnasiet"],
  },
  faktatext: {
    title: "Faktatext",
    description: "Skriv tydliga och välstrukturerade faktatexter med korrekta källor",
    content: FaktatextContent,
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  "historisk-text": {
    title: "Historisk text",
    description: "Berätta om historiska händelser i modern berättande form",
    content: HistoriskTextContent,
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  poesi: {
    title: "Poesi",
    description: "Utforska rim, rytm och bildspråk — skriv egna dikter",
    content: PoesiContent,
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  recension: {
    title: "Recension",
    description: "Granska och bedöm böcker, filmer och spel med tydlig argumentation",
    content: RecensionContent,
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string; template: string }>;
}

export async function generateStaticParams() {
  const params: { arskurs: string; template: string }[] = [];
  for (const group of AGE_GROUPS) {
    for (const [slug, t] of Object.entries(TEMPLATES)) {
      if (t.levels.includes(group.slug)) {
        params.push({ arskurs: group.slug, template: slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { arskurs, template } = await params;
  const t = TEMPLATES[template];
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!t || !group) return {};
  return { title: `${t.title} – Skrivverkstad – ${group.label}` };
}

export default async function WritingTemplatePage({ params }: Props) {
  const { arskurs, template } = await params;
  const t = TEMPLATES[template];
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);

  if (!t || !group) {
    notFound();
  }

  // Verify this template is available for this age group
  if (!t.levels.includes(arskurs)) {
    notFound();
  }

  const Content = t.content;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href={`/${arskurs}`} className="hover:underline">
          {group.label}
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href={`/${arskurs}/skrivverkstad`} className="hover:underline">
          Skrivverkstad
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-neutral-900 dark:text-white">{t.title}</span>
      </nav>

      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <PenLine className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
          </div>
          <Badge variant="secondary">{group.label}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.title}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {t.description}
        </p>
      </div>

      <Content />

      {/* Interactive writing exercises */}
      <div className="mt-12 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Dumbbell className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Övningar
          </h2>
        </div>
        <SkrivverkstadOvningar
          template={template}
          ageGroup={arskurs as AgeGroup}
        />
      </div>
    </div>
  );
}
