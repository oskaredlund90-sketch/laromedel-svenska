import { notFound } from "next/navigation";
import Link from "next/link";
import { PenLine, Lightbulb, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
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
    </div>
  );
}
