import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BookA, Lightbulb, AlertTriangle, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
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

/* ------------------------------------------------------------------ */
/*  Topic content                                                      */
/* ------------------------------------------------------------------ */

function OrdklasserContent() {
  const wordClasses = [
    {
      name: "Substantiv",
      def: "Ord som betecknar saker, personer, djur, platser eller abstrakta begrepp.",
      examples: "hund, bok, karlek, Sverige, larare",
      tip: "Kan man satta en/ett eller den/det framfor? Da ar det ett substantiv.",
    },
    {
      name: "Verb",
      def: "Ord som uttrycker handlingar, skeenden eller tillstand.",
      examples: "springa, tanka, finns, sover, har",
      tip: "Kan man satta att framfor ordet? Att springa, att tanka - da ar det ett verb.",
    },
    {
      name: "Adjektiv",
      def: "Ord som beskriver egenskaper hos substantiv.",
      examples: "stor, vacker, snabb, svensk, intressant",
      tip: "Kan man jamfora ordet? Stor - storre - storst? Da ar det ett adjektiv.",
    },
    {
      name: "Adverb",
      def: "Ord som beskriver hur, var, nar eller i vilken grad nagot sker. Modifierar verb, adjektiv eller andra adverb.",
      examples: "snabbt, har, aldrig, mycket, kanske",
      tip: "Adverb svarar ofta pa fragor som hur? var? nar? Manga adverb slutar pa -t (snabbt, vackert).",
    },
    {
      name: "Pronomen",
      def: "Ord som ersatter eller syftar pa substantiv.",
      examples: "jag, du, han, hon, den, det, vi, de, sig, min, denna",
      tip: "Pronomen fungerar som substitut for substantiv och hjalper oss undvika upprepningar.",
    },
    {
      name: "Preposition",
      def: "Ord som anger forhallandet mellan andra ord, ofta rumsliga eller tidsliga relationer.",
      examples: "i, pa, till, fran, med, under, efter, om",
      tip: "Prepositioner foljs nastan alltid av ett substantiv eller pronomen: i huset, pa bordet, med henne.",
    },
    {
      name: "Konjunktion",
      def: "Ord som binder samman ord, fraser eller satser.",
      examples: "och, men, eller, for, att, eftersom, om",
      tip: "Samordnande konjunktioner (och, men, eller) binder likvardiga led. Underordnande konjunktioner (att, eftersom, om) inleder bisatser.",
    },
    {
      name: "Interjektion",
      def: "Utrop som uttrycker kanslor eller reaktioner. Star ofta fristaende.",
      examples: "oj, hej, aj, tja, hurra, usch",
      tip: "Interjektioner foljs ofta av utropstecken och kan bilda egna meningar: Oj! Hej! Aj!",
    },
    {
      name: "Artikel",
      def: "Ord som bestammer substantivets form (bestamd eller obestamd).",
      examples: "en, ett, den, det, de",
      tip: "Svenska har bade fristaende artiklar (en bok) och slutartiklar (boken). Slutartiklarna raknas till substantivets bojning.",
    },
    {
      name: "Rakneord",
      def: "Ord som anger antal (grundtal) eller ordning (ordningstal).",
      examples: "en, tva, tre, hundra | forsta, andra, tredje",
      tip: "Grundtal svarar pa fragan hur manga? Ordningstal svarar pa vilken i ordningen?",
    },
  ];

  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        I svenskan finns det tio ordklasser. Att kunna identifiera ordklasser
        hjalper dig att forsta hur spraket ar uppbyggt och gor det lattare att
        skriva korrekt.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {wordClasses.map((wc) => (
          <ExampleCard key={wc.name} title={wc.name}>
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">{wc.def}</p>
            <Ex>{wc.examples}</Ex>
            <Tip>{wc.tip}</Tip>
          </ExampleCard>
        ))}
      </div>

      <Section title="Testa dig sjalv">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          Vilka ordklasser finns i meningen nedan? Forsok identifiera varje ord.
        </p>
        <Ex>Den lilla katten sov lugnt pa den mjuka soffan igar.</Ex>
        <Tip>
          <strong>Losning:</strong> Den (artikel) lilla (adjektiv) katten (substantiv)
          sov (verb) lugnt (adverb) pa (preposition) den (artikel) mjuka (adjektiv)
          soffan (substantiv) igar (adverb).
        </Tip>
      </Section>
    </>
  );
}

function MeningsbyggnadContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Att forsta hur meningar byggs upp hjalper dig att skriva tydligare och
        mer varierat. Har gar vi igenom grundlaggande satsanalys.
      </p>

      <Section title="Huvudsats">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          En huvudsats ar en mening som kan sta sjalvstandigt. Den innehaller
          minst ett subjekt och ett predikat (verb). I en huvudsats kommer
          verbet (predikatet) pa andra plats - detta kallas V2-regeln.
        </p>
        <ExampleCard title="Ordfoljd i huvudsats">
          <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Fundament + Verb + Subjekt + Resten
          </p>
          <Ex>Jag (S) laser (V) en bok.</Ex>
          <Ex>Igar (F) kopte (V) jag (S) en ny jacka.</Ex>
          <Ex>I skolan (F) lar (V) vi (S) oss mycket.</Ex>
          <Tip>
            Verbet star alltid pa plats 2 i en huvudsats. Om nagot annat an
            subjektet star forst (t.ex. en tidsbestamning) flyttar subjektet
            efter verbet. Detta kallas omvand ordfoljd eller inversion.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Bisats">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          En bisats kan inte sta ensam utan ar beroende av en huvudsats. Bisatser
          inleds ofta av en subjunktion (att, som, eftersom, om, nar, medan).
        </p>
        <ExampleCard title="Ordfoljd i bisats">
          <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Subjunktion + Subjekt + (inte) + Verb + Resten
          </p>
          <Ex>Jag vet att han inte kommer idag.</Ex>
          <Ex>Hon stannade hemma eftersom hon var sjuk.</Ex>
          <Ex>Om du inte studerar, klarar du inte provet.</Ex>
          <Warning>
            Vanligt fel: Att anvanda huvudsatsordfoljd i bisats.
            Fel: &quot;...att han kommer inte.&quot;
            Ratt: &quot;...att han inte kommer.&quot;
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="BIFF-regeln">
        <ExampleCard title="Inte i bisats">
          <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
            BIFF-regeln hjalper dig minnas var negationen (inte) och andra
            satsadverb placeras i en bisats: <strong>B</strong>isats -
            <strong>I</strong>nte <strong>F</strong>ore <strong>F</strong>inita verbet.
          </p>
          <div className="space-y-1">
            <Ex>Huvudsats: Han kommer inte idag.</Ex>
            <Ex>Bisats: ...att han inte kommer idag.</Ex>
          </div>
          <Tip>
            I huvudsatsen kommer &quot;inte&quot; efter verbet. I bisatsen kommer
            &quot;inte&quot; fore verbet. BIFF-regeln galler aven andra satsadverb
            som &quot;aldrig&quot;, &quot;alltid&quot;, &quot;kanske&quot; och &quot;ofta&quot;.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Satsdelar">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          Nar du analyserar en mening identifierar du satsdelarna. Har ar de vanligaste:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="Subjekt (S)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Den eller det som utfor handlingen. Svarar pa fragan: Vem/Vad + verbet?
            </p>
            <Ex><strong>Katten</strong> sover. (Vem sover? Katten.)</Ex>
          </ExampleCard>
          <ExampleCard title="Predikat (V)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Verbet i satsen - det som hander.
            </p>
            <Ex>Katten <strong>sover</strong>.</Ex>
          </ExampleCard>
          <ExampleCard title="Objekt (O)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Den eller det som handlingen riktas mot. Svarar pa: Vem/Vad + verbet + subjektet?
            </p>
            <Ex>Jag laser <strong>boken</strong>.</Ex>
          </ExampleCard>
          <ExampleCard title="Adverbial (A)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Bestamning som anger tid, plats, satt etc.
            </p>
            <Ex>Jag laser boken <strong>pa kvallen</strong>.</Ex>
          </ExampleCard>
        </div>
      </Section>
    </>
  );
}

function SkiljeteckenContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Skiljetecken hjalper lasaren att forsta textens struktur och rytm.
        Korrekt anvandning av skiljetecken gor stor skillnad for lasbarheten.
      </p>

      <Section title="Punkt (.)">
        <ExampleCard title="Grundregel">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Punkt markerar slutet pa ett pastaende eller en uppmaning.
            Anvands aven i forkortningar.
          </p>
          <Ex>Det var en vacker dag.</Ex>
          <Ex>Stang dorren.</Ex>
          <Ex>t.ex.  bl.a.  osv.</Ex>
          <Tip>Skriv inte punkt efter rubriker, punktlistor eller titlar.</Tip>
        </ExampleCard>
      </Section>

      <Section title="Komma (,)">
        <ExampleCard title="Viktiga kommaregler">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Kommatecken skapar pauser och tydliggor satsers granser.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>1. Fore samordnande konjunktioner vid satsradning:</strong></p>
            <Ex>Hon laste boken, och han lagade mat.</Ex>
            <p><strong>2. Vid inskjutna bisatser:</strong></p>
            <Ex>Hunden, som var trott, la sig ner.</Ex>
            <p><strong>3. Vid upprakningar:</strong></p>
            <Ex>Vi kopte applen, bananer, mjolk och brod.</Ex>
            <p><strong>4. Efter inledande bisats:</strong></p>
            <Ex>Nar solen gick ner, blev det kallt.</Ex>
          </div>
          <Warning>
            Vanligt fel: Komma mellan subjekt och predikat.
            Fel: &quot;Eleven som kom sist, fick vanta.&quot;
            Ratt: &quot;Eleven som kom sist fick vanta.&quot;
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Kolon (:)">
        <ExampleCard title="Anvandning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Kolon inleder forklaringar, upprakningar eller citat.
          </p>
          <Ex>Han behovde tre saker: mod, talamod och tur.</Ex>
          <Ex>Lararen sa: &quot;Sitt ner!&quot;</Ex>
          <Ex>Klockan var 08:30.</Ex>
          <Tip>
            Efter kolon skriver man liten bokstav, utom om det foljs av
            en hel mening eller ett citat.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Semikolon (;)">
        <ExampleCard title="Anvandning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Semikolon markerar en starkare paus an komma men svagare an punkt.
            Binder samman tva huvudsatser som hanger ihop.
          </p>
          <Ex>Han var trott; anda fortsatte han springa.</Ex>
          <Ex>Solen sken; faglarna sjong.</Ex>
          <Tip>
            Semikolon anvands sallan i modern svenska. Det kan ofta ersattas
            med punkt eller komma + konjunktion. Anvand det sparsamt.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Utropstecken (!)">
        <ExampleCard title="Anvandning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Markerar utrop, starka kanslor eller uppmaningar.
          </p>
          <Ex>Vilken fin dag!</Ex>
          <Ex>Sluta!</Ex>
          <Ex>Grattis pa fodelsedagen!</Ex>
          <Warning>
            Anvand utropstecken sparsamt i formella texter. Flera utropstecken
            i rad (!!!) hor inte hemma i sakprosa.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Fragetecken (?)">
        <ExampleCard title="Anvandning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Avslutar direkta fragor.
          </p>
          <Ex>Vad heter du?</Ex>
          <Ex>Kommer du imorgon?</Ex>
          <Tip>
            Indirekta fragor avslutas med punkt, inte fragetecken:
            &quot;Jag undrar vad hon heter.&quot;
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Citattecken (&quot; &quot;)">
        <ExampleCard title="Anvandning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Omsluter direkta citat, titlar och ord som anvands i
            speciell betydelse.
          </p>
          <Ex>&quot;Jag kommer snart&quot;, sa hon.</Ex>
          <Ex>Har du last &quot;Roda rummet&quot;?</Ex>
          <Tip>
            I svensk typografi anvands oftast &quot;raka citattecken&quot; eller
            typografiska citattecken. Punkt och komma placeras utanfor
            citattecknen om citatet inte ar en hel mening.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Tankstreck (&ndash;)">
        <ExampleCard title="Anvandning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Tankstreck (&ndash;) anvands vid inskott, repliker och
            intervall. Forvaxla inte med bindestreck (-).
          </p>
          <Ex>Han var &ndash; trots sin alder &ndash; mycket pigg.</Ex>
          <Ex>&ndash; Kom hit! ropade hon.</Ex>
          <Ex>Klockan 8&ndash;17.</Ex>
          <Warning>
            Tankstreck (&ndash;) och bindestreck (-) ar olika tecken.
            Bindestreck anvands i sammansattningar: &quot;t-shirt&quot;, &quot;e-post&quot;.
            Tankstreck anvands for inskott och intervall.
          </Warning>
        </ExampleCard>
      </Section>
    </>
  );
}

function StavningContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Svensk stavning har vissa monster och regler som ar bra att kanna till.
        Har tar vi upp de vanligaste stavningsreglerna och fallgroparna.
      </p>

      <Section title="ng och nk">
        <ExampleCard title="Regler">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ljuden ng och nk stavas alltid med bara tva bokstaver i svenskan,
            aldrig med dubbelt n.
          </p>
          <Ex>lang, sang, ring, kung (inte &quot;lnng&quot;)</Ex>
          <Ex>tanka, bank, skank, drank (inte &quot;tannka&quot;)</Ex>
          <Tip>
            Fore ng och nk skriver man alltid enkelt n, aldrig nn.
            Jamfor: tanka (nk) men tanna (nn) - de har olika ljud.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Sje-ljudet">
        <ExampleCard title="Manga stavningar - ett ljud">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sje-ljudet (som i &quot;sjo&quot;) kan stavas pa manga olika satt i svenskan.
            Det finns ingen enkel regel - man maste ofta lara sig orden.
          </p>
          <div className="space-y-1">
            <Ex>sj: sjo, sjuk, sjunga</Ex>
            <Ex>sk (fore e, i, y, o, a): skon, skina, skylt</Ex>
            <Ex>skj: skjuta, skjorta</Ex>
            <Ex>stj: stjarna, stjala</Ex>
            <Ex>sch: schema, schack</Ex>
            <Ex>ch: chef, chans</Ex>
            <Ex>sh: show, shampoo (lanord)</Ex>
            <Ex>g (i vissa ord): garage, generad</Ex>
          </div>
          <Warning>
            Sje-ljudet ar en av de svaraste stavningsutmaningarna i svenskan.
            Nar du ar osaker, sla upp ordet i en ordlista.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Tje-ljudet">
        <ExampleCard title="Stavningsvarianter">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Tje-ljudet (som i &quot;kok&quot;) kan ocksa stavas pa flera satt.
          </p>
          <div className="space-y-1">
            <Ex>k (fore e, i, y, o, a): kor, kyla, kalla</Ex>
            <Ex>kj: kjol, kjortel</Ex>
            <Ex>tj: tjuv, tjata, tjock</Ex>
          </div>
          <Tip>
            Bokstaven k uttalas som tje-ljud framfor mjuka vokaler (e, i, y, o, a)
            men som k framfor harda vokaler (a, o, u, a).
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Dubbelteckning">
        <ExampleCard title="Kort vokal = dubbel konsonant">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            En av de viktigaste stavningsreglerna i svenskan: efter en kort
            (betonad) vokal skrivs konsonanten dubbel.
          </p>
          <div className="space-y-1">
            <Ex>Kort vokal: hatt, buss, kall, stall</Ex>
            <Ex>Lang vokal: hat, hus, kal, stal(a)</Ex>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Jamfor:</p>
            <Ex>glas (langt a) &ndash; glass (kort a)</Ex>
            <Ex>vik (langt i) &ndash; vick(a) (kort i)</Ex>
            <Ex>tak (langt a) &ndash; tack (kort a)</Ex>
          </div>
          <Tip>
            Lyssna pa vokalen! Ar den kort? Skriv dubbel konsonant efter.
            Ar den lang? Skriv enkel konsonant. Undantag finns, t.ex. &quot;och&quot;, &quot;av&quot;.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Stumma bokstaver">
        <ExampleCard title="Bokstaver som inte uttalas">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Vissa bokstaver skrivs men uttalas inte i modern svenska.
          </p>
          <div className="space-y-1">
            <Ex>Stumt d: jord, bord, vard, fjard</Ex>
            <Ex>Stumt g: och, nog, dag, vag</Ex>
            <Ex>Stumt h: hjalpa, hjarta, hjul, hjalte</Ex>
            <Ex>Stumt l: Karl, varld, Karlstad</Ex>
            <Ex>Stumt t: det, ont, stort (i talsprak)</Ex>
          </div>
          <Warning>
            Glom inte de stumma bokstaverna nar du stavar! De syns inte
            i uttalet men maste finnas med i skrift.
          </Warning>
        </ExampleCard>
      </Section>
    </>
  );
}

function OrdbildningContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Ordbildning handlar om hur nya ord skapas i svenskan. Genom att forsta
        ordbildning kan du lattare lista ut vad okanda ord betyder och bygga
        ditt ordforrad.
      </p>

      <Section title="Sammansattning">
        <ExampleCard title="Att satta ihop ord">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sammansattning ar det vanligaste sattet att bilda nya ord i svenskan.
            Tva eller flera ord slas ihop till ett nytt ord.
          </p>
          <div className="space-y-1">
            <Ex>bok + hylla = bokhylla</Ex>
            <Ex>sol + sken = solsken</Ex>
            <Ex>fotboll + s + plan = fotbollsplan</Ex>
            <Ex>barn + bok + s + hylla = barnbokshylla</Ex>
          </div>
          <Tip>
            Sammansatta ord skrivs ihop i svenskan. &quot;Fotbollsplan&quot; (ett ord),
            inte &quot;fotbolls plan&quot; (tva ord). Sarskrivning raknas som ett av de
            vanligaste stavfelen.
          </Tip>
          <Warning>
            <strong>Sarskrivning andrar betydelsen!</strong> Jamfor:
            &quot;sjukhusmat&quot; (mat pa sjukhus) och &quot;sjukt husmat&quot; (annorlunda betydelse).
            &quot;Rokfri&quot; (utan rok) och &quot;rok fri&quot; (roken ar fri).
          </Warning>
        </ExampleCard>

        <ExampleCard title="Foge-s och foge-e">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ibland behovs en bindningsbokstav (foge) mellan ordleden.
          </p>
          <div className="space-y-1">
            <Ex>Foge-s: tidning-s-artikel, arbete-s-plats</Ex>
            <Ex>Foge-e: barn-e-barn (barnbarn), gat-e-sten (gatsten)</Ex>
          </div>
          <Tip>
            Det finns ingen enkel regel for nar foge-s behovs. Lyssna pa
            hur ordet uttalas - om det finns ett s-ljud mellan leden
            ska det skrivas med foge-s.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Avledning (prefix och suffix)">
        <ExampleCard title="Prefix (forstavelser)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ett prefix laggs till framfor ett ord och andrar dess betydelse.
          </p>
          <div className="space-y-1">
            <Ex>o- (negation): o-mojlig, o-van, o-lycklig</Ex>
            <Ex>miss- (fel): miss-forsta, miss-lyckad</Ex>
            <Ex>for- (intensifiering/forandring): for-stora, for-klara</Ex>
            <Ex>be- (gora till): be-skriva, be-arbeta</Ex>
            <Ex>an- (riktning): an-komma, an-gripa</Ex>
          </div>
        </ExampleCard>

        <ExampleCard title="Suffix (andelser)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ett suffix laggs till efter ett ord och kan andra ordklass och betydelse.
          </p>
          <div className="space-y-1">
            <Ex>-lig (adjektiv): moj-lig, van-lig, tyd-lig</Ex>
            <Ex>-het (substantiv): fri-het, sanning-het, skon-het</Ex>
            <Ex>-tion (substantiv): informa-tion, situa-tion</Ex>
            <Ex>-bar (adjektiv): drick-bar, las-bar, anvand-bar</Ex>
            <Ex>-skap (substantiv): van-skap, land-skap, egen-skap</Ex>
          </div>
          <Tip>
            Suffix kan andra ordklass: &quot;van&quot; (substantiv) + &quot;-lig&quot; = &quot;vanlig&quot; (adjektiv).
            &quot;fri&quot; (adjektiv) + &quot;-het&quot; = &quot;frihet&quot; (substantiv).
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Forkortningar">
        <ExampleCard title="Vanliga typer">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Forkortningar gor texter mer kompakta. Det finns olika typer:
          </p>
          <div className="space-y-1">
            <Ex>Med punkt: t.ex. (till exempel), bl.a. (bland annat), osv. (och sa vidare)</Ex>
            <Ex>Utan punkt: AB (aktiebolag), TV, EU, FN</Ex>
            <Ex>Initialforkortningar: SJ, SAS, IKEA</Ex>
          </div>
          <Tip>
            Vanliga forkortningar med punkt: t.ex., bl.a., s.k. (sa kallad),
            d.v.s. (det vill saga), m.m. (med mera), o.s.v. (och sa vidare).
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Lanord">
        <ExampleCard title="Ord fran andra sprak">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Svenskan har lanat ord fran manga sprak genom historien.
          </p>
          <div className="space-y-1">
            <Ex>Tyska: arbeta, handel, slakt, frukost</Ex>
            <Ex>Franska: restaurang, parfym, balkong, garage</Ex>
            <Ex>Engelska: mejl, dejt, jobb, tajming</Ex>
            <Ex>Nordiska grannsprak: fjall (norska), smorgasbord</Ex>
          </div>
          <Tip>
            Manga engelska lanord anpassas till svensk stavning med tiden:
            &quot;mail&quot; blir &quot;mejl&quot;, &quot;juice&quot; blir &quot;juice/jos&quot;.
            Svenska Akademien rekommenderar ofta forsvenskade stavningar.
          </Tip>
        </ExampleCard>
      </Section>
    </>
  );
}

function TextbindningContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Textbindning handlar om hur meningar och stycken hanger ihop. God
        textbindning gor texten flytande och latt att folja. Dalig textbindning
        gor texten hackig och svar att forsta.
      </p>

      <Section title="Sambandsord (konnektiver)">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          Sambandsord visar forhallandet mellan satser och meningar.
          De delas in i grupper efter funktion:
        </p>

        <ExampleCard title="Additiva sambandsord (lagger till)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar att information laggs till.
          </p>
          <Ex>och, dessutom, aven, ocksa, vidare, likasa, ytterligare</Ex>
          <Ex>Han spelar gitarr. Dessutom sjunger han i en kor.</Ex>
        </ExampleCard>

        <ExampleCard title="Adversativa sambandsord (motsatter)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar kontrast eller motsattning.
          </p>
          <Ex>men, dock, daremot, a andra sidan, trots det, emellertid, anda</Ex>
          <Ex>Solen sken. Trots det var det kallt ute.</Ex>
        </ExampleCard>

        <ExampleCard title="Kausala sambandsord (orsak och verkan)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar orsak, anledning eller foljd.
          </p>
          <Ex>eftersom, darfor, alltsa, foljaktligen, pa grund av, till foljd av</Ex>
          <Ex>Hon missade bussen. Darfor kom hon sent till skolan.</Ex>
        </ExampleCard>

        <ExampleCard title="Temporala sambandsord (tid)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar tidssamband och ordningsfoljd.
          </p>
          <Ex>sedan, darefter, forst, slutligen, medan, till slut, samtidigt</Ex>
          <Ex>Forst at vi frukost. Darefter gick vi till skolan.</Ex>
        </ExampleCard>
      </Section>

      <Section title="Referensbindning">
        <ExampleCard title="Att syfta tillbaka">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Referensbindning innebar att man syftar tillbaka pa nagot som
            redan namnts, med hjalp av pronomen, synonymer eller overordnade begrepp.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Pronomen:</strong></p>
            <Ex>Lisa gick till skolan. Hon var glad.</Ex>
            <p><strong>Synonymer:</strong></p>
            <Ex>Bilen stannade. Fordonet hade fatt motorstopp.</Ex>
            <p><strong>Overordnat begrepp:</strong></p>
            <Ex>Rosor och tulpaner fyllde tradgarden. Blommorna doftade underbart.</Ex>
          </div>
          <Warning>
            Vanligt fel: Oklara syftningar med pronomen.
            &quot;Lisa traffade Sara. Hon var glad.&quot; - Vem var glad? Lisa eller Sara?
            Var tydlig med vem pronomen syftar pa.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Tematisk bindning">
        <ExampleCard title="Tema och rema">
          <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
            Varje mening har ett tema (kand information, det man talar om) och
            ett rema (ny information, det man sager om temat). God textbindning
            bygger pa att koppla nytt till redan kant.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Konstant tema (samma amne):</strong></p>
            <Ex>Katten satt pa mattan. Katten tvattade sig. Katten somnade.</Ex>
            <p><strong>Linear progression (rema blir tema):</strong></p>
            <Ex>Vi besokte en stad. Staden hade ett vackert torg. Torget var fullt av manniskor.</Ex>
          </div>
          <Tip>
            Blanda garna olika typer av bindning i din text. Konstant tema
            kan bli enformigt, medan linear progression driver texten framat
            och skapar sammanhang.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Praktiska tips">
        <ExampleCard title="Checklista for textbindning">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- Anvand sambandsord for att visa hur meningar hanger ihop.</li>
            <li>- Variera mellan olika typer av sambandsord.</li>
            <li>- Syfta tillbaka med pronomen, synonymer och overordnade begrepp.</li>
            <li>- Placera kand information forst i meningen och ny information sist.</li>
            <li>- Las texten hogt - flyter den bra eller hackar det?</li>
            <li>- Be nagon annan lasa - forstar de sambanden?</li>
          </ul>
        </ExampleCard>
      </Section>
    </>
  );
}

function StilistikContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Stilistik handlar om hur man medvetet valjer sprakliga medel for att
        uppna en viss effekt. Genom att beharska stilistiska verktyg kan du
        anpassa ditt skrivande till olika sammanhang och syften.
      </p>

      <Section title="Stilfigurer">
        <ExampleCard title="Vanliga stilfigurer">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <p><strong>Liknelse (simile):</strong> Jamforelse med &quot;som&quot; eller &quot;likt&quot;.</p>
              <Ex>Hon sprang som vinden.</Ex>
            </div>
            <div>
              <p><strong>Metafor:</strong> Overford betydelse utan &quot;som&quot;.</p>
              <Ex>Livet ar en resa.</Ex>
            </div>
            <div>
              <p><strong>Personifiering:</strong> Ger manskliga egenskaper till icke-manskligt.</p>
              <Ex>Vinden viskade bland loven.</Ex>
            </div>
            <div>
              <p><strong>Hyperbol:</strong> Overdrift for effekt.</p>
              <Ex>Jag har sagt det tusen ganger.</Ex>
            </div>
            <div>
              <p><strong>Anafor:</strong> Upprepning av ord i borjan av meningar.</p>
              <Ex>Jag sag. Jag kom. Jag segrade.</Ex>
            </div>
            <div>
              <p><strong>Allitteration:</strong> Upprepning av begynnelseljud.</p>
              <Ex>Peter Plansen plockade potatis.</Ex>
            </div>
          </div>
        </ExampleCard>
      </Section>

      <Section title="Sprakniva och ton">
        <ExampleCard title="Formellt och informellt sprak">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              Spraknivan anpassas efter mottagare, syfte och sammanhang.
            </p>
            <div>
              <p><strong>Formellt:</strong></p>
              <Ex>Undertecknad onskar harmed framfora sin synpunkt i arendet.</Ex>
            </div>
            <div>
              <p><strong>Neutralt:</strong></p>
              <Ex>Jag vill dela mina tankar om fragan.</Ex>
            </div>
            <div>
              <p><strong>Informellt:</strong></p>
              <Ex>Jag tankte saga vad jag tycker om det har.</Ex>
            </div>
          </div>
          <Tip>
            Tanka pa sammanhang: en uppsats kraver formellare sprak an ett
            blogginlagg. Men aven formellt sprak ska vara klart och tydligt
            - undvik onodigt krangligt sprak.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Retoriska grepp">
        <ExampleCard title="Att overtyga med sprak">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <p><strong>Retorisk fraga:</strong> En fraga dar svaret ar underforstadd.</p>
              <Ex>Vem vill inte ha en batttre framtid?</Ex>
            </div>
            <div>
              <p><strong>Tretal:</strong> Tre ord eller fraser i foljd for rytm och betoning.</p>
              <Ex>Vi kom, vi sag, vi segrade.</Ex>
            </div>
            <div>
              <p><strong>Kontrast (antites):</strong> Motstaende begrepp stalld mot varandra.</p>
              <Ex>Det var den basta av tider, det var den varsta av tider.</Ex>
            </div>
          </div>
          <Tip>
            Retoriska grepp ar sarskilt anvandbare i argumenterande och
            ovetygande texter. Anvand dem medvetet men inte for ofta -
            da forlorar de sin effekt.
          </Tip>
        </ExampleCard>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic registry                                                     */
/* ------------------------------------------------------------------ */

const TOPICS: Record<
  string,
  { title: string; description: string; content: () => ReactNode }
> = {
  ordklasser: {
    title: "Ordklasser",
    description: "De tio ordklasserna i svenskan",
    content: OrdklasserContent,
  },
  meningsbyggnad: {
    title: "Meningsbyggnad",
    description: "Huvudsats, bisats och BIFF-regeln",
    content: MeningsbyggnadContent,
  },
  skiljetecken: {
    title: "Skiljetecken",
    description: "Regler for punkt, komma, kolon och mer",
    content: SkiljeteckenContent,
  },
  stavning: {
    title: "Stavning",
    description: "Stavningsregler och vanliga fallgropar",
    content: StavningContent,
  },
  ordbildning: {
    title: "Ordbildning",
    description: "Sammansattning, avledning och lanord",
    content: OrdbildningContent,
  },
  textbindning: {
    title: "Textbindning",
    description: "Sambandsord och textuell sammanhallning",
    content: TextbindningContent,
  },
  stilistik: {
    title: "Stilistik",
    description: "Stilfigurer, ton och sprakniva",
    content: StilistikContent,
  },
};

/* ------------------------------------------------------------------ */
/*  Level-based topic filtering                                        */
/* ------------------------------------------------------------------ */

const TOPICS_BY_LEVEL: Record<AgeGroup, string[]> = {
  lagstadiet: ["ordklasser", "skiljetecken"],
  mellanstadiet: ["ordklasser", "skiljetecken", "meningsbyggnad", "stavning"],
  hogstadiet: [
    "ordklasser",
    "meningsbyggnad",
    "skiljetecken",
    "stavning",
    "ordbildning",
    "textbindning",
  ],
  gymnasiet: [
    "ordklasser",
    "meningsbyggnad",
    "skiljetecken",
    "stavning",
    "ordbildning",
    "textbindning",
    "stilistik",
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string; topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, topic } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const t = TOPICS[topic];
  if (!group || !t) return {};
  return {
    title: `${t.title} - Grammatik - ${group.label}`,
    description: `${t.description}. Anpassat for ${group.label.toLowerCase()}.`,
  };
}

export default async function GrammatikTopicPage({ params }: Props) {
  const { arskurs, topic } = await params;

  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) {
    notFound();
  }

  const allowedTopics = TOPICS_BY_LEVEL[arskurs as AgeGroup];
  if (!allowedTopics || !allowedTopics.includes(topic)) {
    notFound();
  }

  const t = TOPICS[topic];
  if (!t) {
    notFound();
  }

  const Content = t.content;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400"
      >
        <Link
          href={`/${arskurs}`}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          {group.label}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href={`/${arskurs}/grammatik`}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          Grammatik
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-neutral-900 dark:text-white font-medium">
          {t.title}
        </span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <BookA className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.title}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {t.description}
        </p>
      </div>

      {/* Content */}
      <Content />
    </div>
  );
}
