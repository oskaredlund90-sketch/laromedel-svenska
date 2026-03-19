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
        En berattande text underhaller, engagerar och tar lasaren med pa en resa.
        Har lar du dig hur du bygger upp en berattelse med tydlig struktur,
        levande karaktarer och spannande handling.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Fanga lasarens intresse direkt. Presentera huvudpersonen, platsen och
              tiden. Ge en antydan om vad berattelsen ska handla om.
            </p>
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Tekniker:</p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Mitt-i-handlingen (in medias res)</li>
              <li>- En fraga eller gata</li>
              <li>- En stamningsfull miljobeskrivning</li>
              <li>- Dialog som vacker nyfikenhet</li>
            </ul>
            <ExampleBlock title="Exempel: In medias res">
              Hjartat bultade sa hart att hon var saker pa att alla kunde hora det.
              Dorren framfor henne stod pa glant, och ljuset darinne flackade oroligt.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="2. Uppbyggnad">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Utveckla handlingen. Skapa problem och hinder for huvudpersonen.
              Bygg upp spanningen steg for steg.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Introducera konflikten</li>
              <li>- Lat huvudpersonen mota utmaningar</li>
              <li>- Hoj insatserna gradvis</li>
              <li>- Varva handling med beskrivning och dialog</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="3. Klimax">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Berattelsens mest spannande punkt. Konflikten nar sin hojdpunkt
              och avgors.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Den mest dramatiska scenen</li>
              <li>- Huvudpersonen stalls infor ett avgorande val</li>
              <li>- Kort, snabba meningar skapar tempo</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="4. Avslutning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Runda av berattelsen. Visa hur konflikten losts och vad som
              forandrats.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Knyt ihop losa tradar</li>
              <li>- Visa hur huvudpersonen har forandrats</li>
              <li>- Kan vara oppen eller sluten</li>
              <li>- Undvik att allt loser sig &quot;for latt&quot;</li>
            </ul>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Karaktarer">
        <ExampleCard title="Levande karaktarer">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Bra karaktarer har djup - de har drommar, radslor och
            egenheter. Visa vilka de ar genom handling och dialog,
            inte bara genom att beratta det.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Visa, beratta inte:</strong></p>
          </div>
          <ExampleBlock title="Beratta (svagare)">
            Erik var nervos infor provet.
          </ExampleBlock>
          <ExampleBlock title="Visa (starkare)">
            Erik trummade med fingrarna mot banken och kastade en blick pa klockan
            igen. Fem minuter kvar. Han svalde och torkade de fuktiga handerna
            mot byxbenen.
          </ExampleBlock>
          <Tip>
            Ge varje karaktar minst en egenhet eller vana som gor dem
            minnesvarda: ett speciellt satt att prata, en nervos tic, ett
            kladesplagg de alltid bar.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Dialog">
        <ExampleCard title="Skriv bra dialog">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Dialog gor texten levande och bryter av berattandet. Varje karaktar
            ska ha sin egen rost.
          </p>
          <ExampleBlock title="Exempel pa dialog">
            &ndash; Var har du varit? fragade mamma med armarna i kors.
            {"\n"}&ndash; Hos Alex, mumlade Nora utan att mota hennes blick.
            {"\n"}&ndash; Klockan ar halv tolv, Nora.
            {"\n"}&ndash; Jag vet. Forlat.
          </ExampleBlock>
          <div className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Tips for dialog:</strong></p>
            <ul className="space-y-1">
              <li>- Anvand tankstreck (&ndash;) fore varje replik</li>
              <li>- Variera inquit-fraser: sa, fragade, mumlade, viskade</li>
              <li>- Lagg till kroppssprak och handlingar mellan replikerna</li>
              <li>- Alla behover inte prata likadant - anpassa efter karaktaren</li>
            </ul>
          </div>
          <Warning>
            Vanligt fel: Att anvanda for avancerade inquit-fraser.
            &quot;Sa&quot; och &quot;fragade&quot; racker langt. Undvik &quot;exklamerade&quot;,
            &quot;proklamerade&quot; och liknande i vardagsberattelser.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Miljobeskrivning">
        <ExampleCard title="Skapa stamning med sinnen">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Anvand alla fem sinnen (syn, horsel, lukt, smak, kansel) for
            att gora miljon levande. Miljobeskrivningen ska forsterka stamningen.
          </p>
          <ExampleBlock title="Kuslig stamning">
            Grinden gnisslade nar hon skot upp den. Tradgarden lag ode; de
            vissna loven virvlade over grusgangen som bruna skelett.
            Luften luktade fukt och ruttnande applen.
          </ExampleBlock>
          <ExampleBlock title="Varm och trygg stamning">
            Koket badade i gult ljus. Doften av nybakat brod blandades med
            kanel och det svaga brummandet fran radion pa banken. Hon
            lindade handerna runt den varma koppen.
          </ExampleBlock>
          <Tip>
            Vav in miljobeskrivningar naturligt i handlingen. Undvik langa
            beskrivande stycken som bromsar tempot. Koppla sinnena till
            karaktarens kanslor.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Platt inledning:</strong> Undvik &quot;Jag vaknade och det var en vanlig dag.&quot; Borja dar det blir intressant.</li>
            <li>- <strong>Allt loser sig for latt:</strong> Konflikten behover kannas akta och losningen trovarding.</li>
            <li>- <strong>Bara handling, ingen kansla:</strong> Visa vad karaktarerna tanker och kanner.</li>
            <li>- <strong>Tempushopp:</strong> Valj presens eller preteritum och hall dig till det.</li>
            <li>- <strong>Ingen rod trad:</strong> Varje scen ska driva handlingen framat.</li>
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
        En argumenterande text syftar till att overtyga lasaren om en asikt
        eller standpunkt. Den kraver tydlig struktur, starka argument och
        saklig ton.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning med tes">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Presentera amnet och formulera din tes - den asikt du vill
              forsvara. Tesen ska vara tydlig och ta stallning.
            </p>
            <ExampleBlock title="Exempel pa tes">
              Alla elever borde fa en timmes fysisk aktivitet per dag i skolan.
              Det skulle forbattra bade halsa och inlarning.
            </ExampleBlock>
            <Tip>
              En bra tes ar specifik och mojlig att argumentera for och emot.
              &quot;Mobbing ar daligt&quot; ar for vagt. &quot;Skolan borde infora
              obligatorisk schemalagd rasttid med vuxennarvaro for att motverka
              mobbning&quot; ar battre.
            </Tip>
          </ExampleCard>

          <ExampleCard title="2. Argument">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Presentera 2-4 argument som stoder din tes. Varje argument
              bor stodjas av fakta, exempel eller expertutlatanden.
            </p>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p><strong>Typer av argument:</strong></p>
              <ul className="space-y-1">
                <li>- <strong>Faktaargument:</strong> Baserat pa forskning och statistik</li>
                <li>- <strong>Erfarenhetsargument:</strong> Bygger pa egna eller andras erfarenheter</li>
                <li>- <strong>Auktoritetsargument:</strong> Hanvisar till experter</li>
                <li>- <strong>Vardeargument:</strong> Bygger pa gemensamma varderingar</li>
              </ul>
            </div>
          </ExampleCard>

          <ExampleCard title="3. Motargument">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Ta upp och bemot motargument. Det visar att du har tankt
              igenom fragan fran olika sidor och starker din trovardighet.
            </p>
            <ExampleBlock title="Exempel">
              Vissa menar att det inte finns tid i schemat for mer fysisk
              aktivitet. Men forskning visar att elever som ror sig mer
              faktiskt presterar battre i andra amnen, vilket gor att tiden
              inte &quot;forsvinner&quot; utan investeras.
            </ExampleBlock>
            <Warning>
              Vanligt fel: Att gora motargumenten till &quot;halmgubbar&quot; - det vill saga
              att presentera motargumenten i forsvagad form. Var arlig med
              motstandarens basta argument och bemot dem serioust.
            </Warning>
          </ExampleCard>

          <ExampleCard title="4. Slutsats">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Sammanfatta dina viktigaste argument och upprepa tesen i ny
              form. Garna med en blick framat eller uppmaning till handling.
            </p>
            <ExampleBlock title="Exempel">
              Sammanfattningsvis finns det starka skal - bade halsomassiga
              och pedagogiska - for att ge elever mer fysisk aktivitet i skolan.
              Det ar dags att vi slutar se rorelse som ett avbrott fran larandet
              och i stallet ser det som en forutsattning.
            </ExampleBlock>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Argumentationsteknik">
        <ExampleCard title="Stark dina argument">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Etos (trovardighet):</strong> Visa att du ar palast och serios.
              Hanvisa till palitliga kallor.</p>
            <Ex>Enligt Folkhalsomyndigheten ror sig svenska barn allt mindre...</Ex>

            <p><strong>Logos (logik):</strong> Bygg logiska resonemangskedjor.
              Om A, sa B, och darfor C.</p>
            <Ex>Om eleverna ror sig mer, forbattras koncentrationen. Med battre
              koncentration hojs resultaten. Alltsa leder mer rorelse till battre
              skolresultat.</Ex>

            <p><strong>Patos (kansla):</strong> Anvand kanslor for att engagera,
              men overdriva inte.</p>
            <Ex>Tank dig en skola dar barn far springa, leka och rora sig varje dag
              - en skola dar de ser fram emot att ga dit.</Ex>
          </div>
          <Tip>
            En bra argumenterande text kombinerar alla tre - etos, logos och patos.
            Men i sakprosa bor logos och etos vaga tyngst.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Textbindning i argumenterande text">
        <ExampleCard title="Viktiga sambandsord">
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Lagga till argument:</strong></p>
            <Ex>dessutom, vidare, ytterligare ett skal ar, for det andra</Ex>
            <p><strong>Visa kontrast/motargument:</strong></p>
            <Ex>a andra sidan, visserligen ... men, trots att, emellertid</Ex>
            <p><strong>Visa orsak och foljd:</strong></p>
            <Ex>darfor, foljaktligen, detta leder till, som en konsekvens</Ex>
            <p><strong>Sammanfatta:</strong></p>
            <Ex>sammanfattningsvis, sammantaget, allt detta visar att</Ex>
          </div>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Oklar tes:</strong> Lasaren ska tidigt forsta vad du argumenterar for.</li>
            <li>- <strong>Bara tyckande:</strong> &quot;Jag tycker att...&quot; ar inte ett argument. Underbygg med fakta.</li>
            <li>- <strong>Upprepning:</strong> Tre olika argument ar battre an samma argument tre ganger.</li>
            <li>- <strong>Ignorera motargument:</strong> Det forsvagar din text om du inte bemoter dem.</li>
            <li>- <strong>Kansloargument utan substans:</strong> Patos utan logos haller inte.</li>
            <li>- <strong>Generaliseringar:</strong> &quot;Alla vet att...&quot; och &quot;Det ar uppenbart&quot; ar inte argument.</li>
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
        En utredande text undersoker en fraga fran flera sidor, analyserar
        information och drar slutsatser. Till skillnad fran en argumenterande text
        ska den utredande texten vara objektiv och balanserad.
      </p>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Inledning med fragestallning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Presentera amnet och formulera en tydlig fragestallning.
              Ge nodvandig bakgrund sa att lasaren forstar sammanhanget.
            </p>
            <ExampleBlock title="Exempel">
              Hur paverkar sociala medier ungdomars psykiska halsa? Under de
              senaste tio aren har anvandningen av sociala medier bland unga okat
              dramatiskt, och fragan om dess effekter ar aktuell.
            </ExampleBlock>
            <Tip>
              Fragestallningen styr hela texten. Den ska vara oppen (inte ga att
              besvara med bara ja eller nej) och tillrackligt avgransad for att
              kunna besvaras.
            </Tip>
          </ExampleCard>

          <ExampleCard title="2. Bakgrund">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Ge lasaren den information som behovs for att forsta fragan.
              Definiera viktiga begrepp och presentera relevant fakta.
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Historisk bakgrund vid behov</li>
              <li>- Definitioner av centrala begrepp</li>
              <li>- Relevant statistik eller forskning</li>
              <li>- Avgransning: vad utredningen inte behandlar</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="3. Analys / Utredningsdel">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Karnan i texten. Presentera olika perspektiv, undersok orsaker
              och konsekvenser, och vag olika argument mot varandra.
            </p>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p><strong>Organisera med tydliga rubriker. Exempel:</strong></p>
              <ul className="space-y-1">
                <li>- Perspektiv 1: Positiva effekter av sociala medier</li>
                <li>- Perspektiv 2: Negativa effekter</li>
                <li>- Vad sager forskningen?</li>
                <li>- Sammanvagning av olika perspektiv</li>
              </ul>
            </div>
          </ExampleCard>

          <ExampleCard title="4. Slutsats">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Besvara fragestallningen baserat pa din utredning. Slutsatsen
              ska folja logiskt fran analysen.
            </p>
            <ExampleBlock title="Exempel">
              Sammanfattningsvis visar utredningen att sociala medier har
              bade positiva och negativa effekter pa ungdomars psykiska halsa.
              Den avgorande faktorn tycks vara hur mycket tid som spenderas
              och pa vilket satt plattformarna anvands.
            </ExampleBlock>
            <Warning>
              Slutsatsen ska inte innehalla ny information. Den sammanfattar
              och drar slutsatser fran det som redan presenterats.
            </Warning>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Akademiskt forhallningssatt">
        <ExampleCard title="Objektivitet och kallhantering">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Hall objektiv ton:</strong></p>
            <ul className="space-y-1">
              <li>- Undvik &quot;jag tycker&quot; - presentera fakta och lat lasaren dra slutsatser</li>
              <li>- Anvand distanserade formuleringar: &quot;forskning visar&quot;, &quot;det finns indikationer pa&quot;</li>
              <li>- Presentera bada sidor rattvist, aven om du lutar at en sida</li>
            </ul>

            <p><strong>Referera till kallor:</strong></p>
            <Ex>Enligt en studie fran Karolinska Institutet (2023)...</Ex>
            <Ex>Statistik fran SCB visar att...</Ex>
            <Ex>Forskaren Anna Svensson menar att...</Ex>

            <p><strong>Markera osakerhet:</strong></p>
            <Ex>Det finns indikationer pa att... / Det tyder pa att...</Ex>
            <Ex>En mojlig forklaring ar... / Resultaten pekar mot...</Ex>
          </div>
          <Tip>
            Skilj pa fakta och tolkning. Skriv &quot;Studien visar att 70 % av
            ungdomarna anvander sociala medier dagligen&quot; (fakta) istallet for
            &quot;Alla ungdomar sitter pa sociala medier hela tiden&quot; (generalisering).
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Sprak och stil">
        <ExampleCard title="Formellt sprak">
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Anvand:</strong></p>
            <ul className="space-y-1">
              <li>- Formella sambandsord: emellertid, vidare, foljaktligen</li>
              <li>- Passivformer: &quot;undersokningen genomfordes&quot; istallet for &quot;jag undersokte&quot;</li>
              <li>- Precist sprak: undvik vaga ord som &quot;grej&quot;, &quot;massa&quot;</li>
            </ul>
            <p><strong>Undvik:</strong></p>
            <ul className="space-y-1">
              <li>- Talsprak och slang</li>
              <li>- Retoriska fragor (hor hemma i argumenterande text)</li>
              <li>- Starka vardeladdade ord</li>
              <li>- Forkortningar som &quot;typ&quot;, &quot;liksom&quot;, &quot;osv&quot;</li>
            </ul>
          </div>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Ingen tydlig fragestallning:</strong> Utan fraga vet varken du eller lasaren vad texten undersoker.</li>
            <li>- <strong>Ensidig:</strong> En utredande text maste belysa fler an en sida.</li>
            <li>- <strong>Pastaenden utan belagg:</strong> Alla pastaenden ska kunna stodjas med kallor.</li>
            <li>- <strong>Blanda samman fakta och asikt:</strong> Var tydlig med vad som ar vetenskapligt belagt och vad som ar tolkning.</li>
            <li>- <strong>Slutsats som inte foljer av analysen:</strong> Slutsatsen ska bygga pa det du har presenterat, inget annat.</li>
            <li>- <strong>For brett amne:</strong> Avgransa! &quot;Klimatforandringen&quot; ar for brett; &quot;Hur paverkar klimatforandringen Ostersjons ekosystem?&quot; ar lagom.</li>
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
        En kronika ar en personlig text som blandar asikter med berattande.
        Kronikoren utgar ofta fran en vardaglig handelse och lyfter den till
        ett storre perspektiv - med humor, ironi eller eftertanke.
      </p>

      <Section title="Vad kannetecknar en kronika?">
        <ExampleCard title="Kronikans sardrag">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Personlig rost:</strong> Du skriver som du sjalv. Kronikoren ar synlig i texten.</li>
            <li>- <strong>Utgangspunkt i vardagen:</strong> Ofta borjar kronikan med en konkret handelse eller observation.</li>
            <li>- <strong>Fran litet till stort:</strong> Det vardagliga kopplas till en storre fraga eller insikt.</li>
            <li>- <strong>Underhallande:</strong> Humor, ironi och kvickhet ar vanliga verktyg.</li>
            <li>- <strong>Asikt utan att argumentera traditionellt:</strong> Du tar stallning, men genom berattelsen snarare an genom logiska argument.</li>
          </ul>
        </ExampleCard>
      </Section>

      <Section title="Struktur">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="1. Krok">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Borja med nagot som fangar lasaren. En konkret situation, en
              rolig iakttagelse eller en provocerande tanke.
            </p>
            <ExampleBlock title="Exempel">
              Igar stod jag i ko pa ICA i exakt tjugotre minuter. Jag vet
              det for jag hann rakna alla chokladkakor i hyllan bredvid.
              Tre ganger.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="2. Berattelse och reflektion">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Utveckla berattelsen och vav in dina tankar och reflektioner.
              Varva det konkreta med det allmanna.
            </p>
            <ExampleBlock title="Exempel">
              Det slog mig att koande kanske ar den mest svenska av alla
              sysselsattningar. Vi koar till allt. Vi ar varldsmastare i att sta
              still och vanta pa var tur.
            </ExampleBlock>
          </ExampleCard>

          <ExampleCard title="3. Fordjupning">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Koppla det personliga till ett storre sammanhang. Vad sager din
              erfarenhet om samhallet, manniskan eller tillvaron?
            </p>
            <ul className="mt-1 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>- Lyft perspektivet</li>
              <li>- Lagg in en ovantad vandning</li>
              <li>- Kommentera ett samhallsfenomen</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="4. Avslutning med poang">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Avsluta med en poang, en tankestallare eller en cirkelkomposition
              som knyter an till inledningen.
            </p>
            <ExampleBlock title="Exempel">
              Sa nasta gang du star i ko, se det inte som bortkastad tid.
              Se det som en paminnelse om att du lever i ett land dar
              folk fortfarande har talamod nog att vanta pa sin tur.
            </ExampleBlock>
          </ExampleCard>
        </div>
      </Section>

      <Section title="Sprak och stil">
        <ExampleCard title="Hitta din rost">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Blandad stil:</strong> Kronikan blandar talsprak med skriftsprak.
              Du kan vara ledig utan att vara slarvig.</p>

            <p><strong>Humor och ironi:</strong></p>
            <ul className="space-y-1">
              <li>- Overdrifter for komisk effekt</li>
              <li>- Understatement (underdrift)</li>
              <li>- Sjalvironi</li>
              <li>- Ovantade jamforelser</li>
            </ul>

            <p><strong>Retoriska grepp:</strong></p>
            <ul className="space-y-1">
              <li>- Retoriska fragor (till skillnad fran utredande text ar de valkomna har)</li>
              <li>- Direkt tilltal till lasaren</li>
              <li>- Korta, klatschiga meningar blandat med langre resonemang</li>
              <li>- Upprepning for effekt</li>
            </ul>
          </div>
          <Tip>
            Las kronikor av svenska kronikorer for att hitta inspiration.
            Lagg marke till hur de blandar det personliga med det allmanna och
            hur de bygger upp sina texter mot en poang.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Skillnad mot andra texttyper">
        <ExampleCard title="Kronika vs. debattartikel vs. dagbok">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Kronika:</strong> Personlig, underhallande, blandar berattande med
              reflektion. Har en poang men &quot;bevisar&quot; den inte med argument.</p>
            <p><strong>Debattartikel:</strong> Argumenterande, saklig, bygger pa tes och argument.
              Mer formell ton.</p>
            <p><strong>Dagbok:</strong> Helt privat, ingen tydlig lasare, ingen bearbetad poang.</p>
          </div>
          <Warning>
            Vanligt fel: Att skriva en kronika som bara ar en berattelse utan
            poang, eller en asiktstext utan berattelse. Kronikan behover bada.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Vanliga misstag att undvika">
        <ExampleCard title="Checklista">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- <strong>Ingen personlig rost:</strong> Kronikan ska lata som du, inte som en larobok.</li>
            <li>- <strong>Bara rolig, ingen substans:</strong> Humor utan poang blir ytlig.</li>
            <li>- <strong>Bara allvarlig, ingen underhallning:</strong> Da blir det en debattartikel.</li>
            <li>- <strong>Ingen koppling litet-stort:</strong> Stanna inte vid det personliga - lyft det.</li>
            <li>- <strong>Ingen avslutande poang:</strong> Lasaren ska komma ifran texten med en tanke.</li>
            <li>- <strong>Overdrivet talsprak:</strong> Ledig stil ar inte samma sak som slarvigt sprak.</li>
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
    title: "Berattande text",
    description: "Skriv spannande berattelser med levande karaktarer och miljoer",
    content: BerattendeTextContent,
    levels: ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  "argumenterande-text": {
    title: "Argumenterande text",
    description: "Overtygande texter med tes, argument och motargument",
    content: ArgumenterandeTextContent,
    levels: ["mellanstadiet", "hogstadiet", "gymnasiet"],
  },
  "utredande-text": {
    title: "Utredande text",
    description: "Undersok och analysera fragor objektivt och balanserat",
    content: UtredandeTextContent,
    levels: ["hogstadiet", "gymnasiet"],
  },
  kronika: {
    title: "Kronika",
    description: "Personliga texter med humor, berattande och eftertanke",
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
