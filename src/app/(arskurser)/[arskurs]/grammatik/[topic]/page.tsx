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
      examples: "hund, bok, kärlek, Sverige, lärare",
      tip: "Kan man sätta en/ett eller den/det framför? Då är det ett substantiv.",
    },
    {
      name: "Verb",
      def: "Ord som uttrycker handlingar, skeenden eller tillstånd.",
      examples: "springa, tänka, finns, sover, har",
      tip: "Kan man sätta att framför ordet? Att springa, att tänka - då är det ett verb.",
    },
    {
      name: "Adjektiv",
      def: "Ord som beskriver egenskaper hos substantiv.",
      examples: "stor, vacker, snabb, svensk, intressant",
      tip: "Kan man jämföra ordet? Stor - större - störst? Då är det ett adjektiv.",
    },
    {
      name: "Adverb",
      def: "Ord som beskriver hur, var, när eller i vilken grad något sker. Modifierar verb, adjektiv eller andra adverb.",
      examples: "snabbt, här, aldrig, mycket, kanske",
      tip: "Adverb svarar ofta på frågor som hur? var? när? Många adverb slutar på -t (snabbt, vackert).",
    },
    {
      name: "Pronomen",
      def: "Ord som ersätter eller syftar på substantiv.",
      examples: "jag, du, han, hon, den, det, vi, de, sig, min, denna",
      tip: "Pronomen fungerar som substitut för substantiv och hjälper oss undvika upprepningar.",
    },
    {
      name: "Preposition",
      def: "Ord som anger förhållandet mellan andra ord, ofta rumsliga eller tidsliga relationer.",
      examples: "i, på, till, från, med, under, efter, om",
      tip: "Prepositioner följs nästan alltid av ett substantiv eller pronomen: i huset, på bordet, med henne.",
    },
    {
      name: "Konjunktion",
      def: "Ord som binder samman ord, fraser eller satser.",
      examples: "och, men, eller, för, att, eftersom, om",
      tip: "Samordnande konjunktioner (och, men, eller) binder likvärdiga led. Underordnande konjunktioner (att, eftersom, om) inleder bisatser.",
    },
    {
      name: "Interjektion",
      def: "Utrop som uttrycker känslor eller reaktioner. Står ofta fristående.",
      examples: "oj, hej, aj, tja, hurra, usch",
      tip: "Interjektioner följs ofta av utropstecken och kan bilda egna meningar: Oj! Hej! Aj!",
    },
    {
      name: "Artikel",
      def: "Ord som bestämmer substantivets form (bestämd eller obestämd).",
      examples: "en, ett, den, det, de",
      tip: "Svenska har både fristående artiklar (en bok) och slutartiklar (boken). Slutartiklarna räknas till substantivets böjning.",
    },
    {
      name: "Räkneord",
      def: "Ord som anger antal (grundtal) eller ordning (ordningstal).",
      examples: "en, två, tre, hundra | första, andra, tredje",
      tip: "Grundtal svarar på frågan hur många? Ordningstal svarar på vilken i ordningen?",
    },
  ];

  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        I svenskan finns det tio ordklasser. Att kunna identifiera ordklasser
        hjälper dig att förstå hur språket är uppbyggt och gör det lättare att
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

      <Section title="Testa dig själv">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          Vilka ordklasser finns i meningen nedan? Försök identifiera varje ord.
        </p>
        <Ex>Den lilla katten sov lugnt på den mjuka soffan igår.</Ex>
        <Tip>
          <strong>Lösning:</strong> Den (artikel) lilla (adjektiv) katten (substantiv)
          sov (verb) lugnt (adverb) på (preposition) den (artikel) mjuka (adjektiv)
          soffan (substantiv) igår (adverb).
        </Tip>
      </Section>
    </>
  );
}

function MeningsbyggnadContent() {
  return (
    <>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Att förstå hur meningar byggs upp hjälper dig att skriva tydligare och
        mer varierat. Här går vi igenom grundläggande satsanalys.
      </p>

      <Section title="Huvudsats">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          En huvudsats är en mening som kan stå självständigt. Den innehåller
          minst ett subjekt och ett predikat (verb). I en huvudsats kommer
          verbet (predikatet) på andra plats - detta kallas V2-regeln.
        </p>
        <ExampleCard title="Ordföljd i huvudsats">
          <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Fundament + Verb + Subjekt + Resten
          </p>
          <Ex>Jag (S) läser (V) en bok.</Ex>
          <Ex>Igår (F) köpte (V) jag (S) en ny jacka.</Ex>
          <Ex>I skolan (F) lär (V) vi (S) oss mycket.</Ex>
          <Tip>
            Verbet står alltid på plats 2 i en huvudsats. Om något annat än
            subjektet står först (t.ex. en tidsbestämning) flyttar subjektet
            efter verbet. Detta kallas omvänd ordföljd eller inversion.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Bisats">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          En bisats kan inte stå ensam utan är beroende av en huvudsats. Bisatser
          inleds ofta av en subjunktion (att, som, eftersom, om, när, medan).
        </p>
        <ExampleCard title="Ordföljd i bisats">
          <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Subjunktion + Subjekt + (inte) + Verb + Resten
          </p>
          <Ex>Jag vet att han inte kommer idag.</Ex>
          <Ex>Hon stannade hemma eftersom hon var sjuk.</Ex>
          <Ex>Om du inte studerar, klarar du inte provet.</Ex>
          <Warning>
            Vanligt fel: Att använda huvudsatsordföljd i bisats.
            Fel: &quot;...att han kommer inte.&quot;
            Rätt: &quot;...att han inte kommer.&quot;
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="BIFF-regeln">
        <ExampleCard title="Inte i bisats">
          <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
            BIFF-regeln hjälper dig minnas var negationen (inte) och andra
            satsadverb placeras i en bisats: <strong>B</strong>isats -
            <strong>I</strong>nte <strong>F</strong>öre <strong>F</strong>inita verbet.
          </p>
          <div className="space-y-1">
            <Ex>Huvudsats: Han kommer inte idag.</Ex>
            <Ex>Bisats: ...att han inte kommer idag.</Ex>
          </div>
          <Tip>
            I huvudsatsen kommer &quot;inte&quot; efter verbet. I bisatsen kommer
            &quot;inte&quot; före verbet. BIFF-regeln gäller även andra satsadverb
            som &quot;aldrig&quot;, &quot;alltid&quot;, &quot;kanske&quot; och &quot;ofta&quot;.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Satsdelar">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          När du analyserar en mening identifierar du satsdelarna. Här är de vanligaste:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="Subjekt (S)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Den eller det som utför handlingen. Svarar på frågan: Vem/Vad + verbet?
            </p>
            <Ex><strong>Katten</strong> sover. (Vem sover? Katten.)</Ex>
          </ExampleCard>
          <ExampleCard title="Predikat (V)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Verbet i satsen - det som händer.
            </p>
            <Ex>Katten <strong>sover</strong>.</Ex>
          </ExampleCard>
          <ExampleCard title="Objekt (O)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Den eller det som handlingen riktas mot. Svarar på: Vem/Vad + verbet + subjektet?
            </p>
            <Ex>Jag läser <strong>boken</strong>.</Ex>
          </ExampleCard>
          <ExampleCard title="Adverbial (A)">
            <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
              Bestämning som anger tid, plats, sätt etc.
            </p>
            <Ex>Jag läser boken <strong>på kvällen</strong>.</Ex>
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
        Skiljetecken hjälper läsaren att förstå textens struktur och rytm.
        Korrekt användning av skiljetecken gör stor skillnad för läsbarheten.
      </p>

      <Section title="Punkt (.)">
        <ExampleCard title="Grundregel">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Punkt markerar slutet på ett påstående eller en uppmaning.
            Används även i förkortningar.
          </p>
          <Ex>Det var en vacker dag.</Ex>
          <Ex>Stäng dörren.</Ex>
          <Ex>t.ex.  bl.a.  osv.</Ex>
          <Tip>Skriv inte punkt efter rubriker, punktlistor eller titlar.</Tip>
        </ExampleCard>
      </Section>

      <Section title="Komma (,)">
        <ExampleCard title="Viktiga kommaregler">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Kommatecken skapar pauser och tydliggör satsers gränser.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>1. Före samordnande konjunktioner vid satsradning:</strong></p>
            <Ex>Hon läste boken, och han lagade mat.</Ex>
            <p><strong>2. Vid inskjutna bisatser:</strong></p>
            <Ex>Hunden, som var trött, la sig ner.</Ex>
            <p><strong>3. Vid uppräkningar:</strong></p>
            <Ex>Vi köpte äpplen, bananer, mjölk och bröd.</Ex>
            <p><strong>4. Efter inledande bisats:</strong></p>
            <Ex>När solen gick ner, blev det kallt.</Ex>
          </div>
          <Warning>
            Vanligt fel: Komma mellan subjekt och predikat.
            Fel: &quot;Eleven som kom sist, fick vänta.&quot;
            Rätt: &quot;Eleven som kom sist fick vänta.&quot;
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Kolon (:)">
        <ExampleCard title="Användning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Kolon inleder förklaringar, uppräkningar eller citat.
          </p>
          <Ex>Han behövde tre saker: mod, tålamod och tur.</Ex>
          <Ex>Läraren sa: &quot;Sitt ner!&quot;</Ex>
          <Ex>Klockan var 08:30.</Ex>
          <Tip>
            Efter kolon skriver man liten bokstav, utom om det följs av
            en hel mening eller ett citat.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Semikolon (;)">
        <ExampleCard title="Användning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Semikolon markerar en starkare paus än komma men svagare än punkt.
            Binder samman två huvudsatser som hänger ihop.
          </p>
          <Ex>Han var trött; ändå fortsatte han springa.</Ex>
          <Ex>Solen sken; fåglarna sjöng.</Ex>
          <Tip>
            Semikolon används sällan i modern svenska. Det kan ofta ersättas
            med punkt eller komma + konjunktion. Använd det sparsamt.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Utropstecken (!)">
        <ExampleCard title="Användning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Markerar utrop, starka känslor eller uppmaningar.
          </p>
          <Ex>Vilken fin dag!</Ex>
          <Ex>Sluta!</Ex>
          <Ex>Grattis på födelsedagen!</Ex>
          <Warning>
            Använd utropstecken sparsamt i formella texter. Flera utropstecken
            i rad (!!!) hör inte hemma i sakprosa.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Frågetecken (?)">
        <ExampleCard title="Användning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Avslutar direkta frågor.
          </p>
          <Ex>Vad heter du?</Ex>
          <Ex>Kommer du imorgon?</Ex>
          <Tip>
            Indirekta frågor avslutas med punkt, inte frågetecken:
            &quot;Jag undrar vad hon heter.&quot;
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Citattecken (&quot; &quot;)">
        <ExampleCard title="Användning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Omsluter direkta citat, titlar och ord som används i
            speciell betydelse.
          </p>
          <Ex>&quot;Jag kommer snart&quot;, sa hon.</Ex>
          <Ex>Har du läst &quot;Röda rummet&quot;?</Ex>
          <Tip>
            I svensk typografi används oftast &quot;raka citattecken&quot; eller
            typografiska citattecken. Punkt och komma placeras utanför
            citattecknen om citatet inte är en hel mening.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Tankstreck (&ndash;)">
        <ExampleCard title="Användning">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Tankstreck (&ndash;) används vid inskott, repliker och
            intervall. Förväxla inte med bindestreck (-).
          </p>
          <Ex>Han var &ndash; trots sin ålder &ndash; mycket pigg.</Ex>
          <Ex>&ndash; Kom hit! ropade hon.</Ex>
          <Ex>Klockan 8&ndash;17.</Ex>
          <Warning>
            Tankstreck (&ndash;) och bindestreck (-) är olika tecken.
            Bindestreck används i sammansättningar: &quot;t-shirt&quot;, &quot;e-post&quot;.
            Tankstreck används för inskott och intervall.
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
        Svensk stavning har vissa mönster och regler som är bra att känna till.
        Här tar vi upp de vanligaste stavningsreglerna och fallgroparna.
      </p>

      <Section title="ng och nk">
        <ExampleCard title="Regler">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ljuden ng och nk stavas alltid med bara två bokstäver i svenskan,
            aldrig med dubbelt n.
          </p>
          <Ex>lång, sång, ring, kung (inte &quot;lnng&quot;)</Ex>
          <Ex>tänka, bank, skänk, dränk (inte &quot;tannka&quot;)</Ex>
          <Tip>
            Före ng och nk skriver man alltid enkelt n, aldrig nn.
            Jämför: tänka (nk) men tanna (nn) - de har olika ljud.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Sje-ljudet">
        <ExampleCard title="Många stavningar - ett ljud">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sje-ljudet (som i &quot;sjö&quot;) kan stavas på många olika sätt i svenskan.
            Det finns ingen enkel regel - man måste ofta lära sig orden.
          </p>
          <div className="space-y-1">
            <Ex>sj: sjö, sjuk, sjunga</Ex>
            <Ex>sk (före e, i, y, ö, ä): skön, skina, skylt</Ex>
            <Ex>skj: skjuta, skjorta</Ex>
            <Ex>stj: stjärna, stjäla</Ex>
            <Ex>sch: schema, schack</Ex>
            <Ex>ch: chef, chans</Ex>
            <Ex>sh: show, shampoo (lånord)</Ex>
            <Ex>g (i vissa ord): garage, generad</Ex>
          </div>
          <Warning>
            Sje-ljudet är en av de svåraste stavningsutmaningarna i svenskan.
            När du är osäker, slå upp ordet i en ordlista.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Tje-ljudet">
        <ExampleCard title="Stavningsvarianter">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Tje-ljudet (som i &quot;kök&quot;) kan också stavas på flera sätt.
          </p>
          <div className="space-y-1">
            <Ex>k (före e, i, y, ö, ä): kör, kyla, källa</Ex>
            <Ex>kj: kjol, kjortel</Ex>
            <Ex>tj: tjuv, tjata, tjock</Ex>
          </div>
          <Tip>
            Bokstaven k uttalas som tje-ljud framför mjuka vokaler (e, i, y, ö, ä)
            men som k framför hårda vokaler (a, o, u, å).
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
            <Ex>Kort vokal: hatt, buss, kall, ställ</Ex>
            <Ex>Lång vokal: hat, hus, kal, stål(a)</Ex>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Jämför:</p>
            <Ex>glas (långt a) &ndash; glass (kort a)</Ex>
            <Ex>vik (långt i) &ndash; vick(a) (kort i)</Ex>
            <Ex>tak (långt a) &ndash; tack (kort a)</Ex>
          </div>
          <Tip>
            Lyssna på vokalen! Är den kort? Skriv dubbel konsonant efter.
            Är den lång? Skriv enkel konsonant. Undantag finns, t.ex. &quot;och&quot;, &quot;av&quot;.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Stumma bokstäver">
        <ExampleCard title="Bokstäver som inte uttalas">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Vissa bokstäver skrivs men uttalas inte i modern svenska.
          </p>
          <div className="space-y-1">
            <Ex>Stumt d: jord, bord, värd, fjärd</Ex>
            <Ex>Stumt g: och, nog, dag, väg</Ex>
            <Ex>Stumt h: hjälpa, hjärta, hjul, hjälte</Ex>
            <Ex>Stumt l: Karl, värld, Karlstad</Ex>
            <Ex>Stumt t: det, ont, stort (i talspråk)</Ex>
          </div>
          <Warning>
            Glöm inte de stumma bokstäverna när du stavar! De syns inte
            i uttalet men måste finnas med i skrift.
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
        Ordbildning handlar om hur nya ord skapas i svenskan. Genom att förstå
        ordbildning kan du lättare lista ut vad okända ord betyder och bygga
        ditt ordförråd.
      </p>

      <Section title="Sammansättning">
        <ExampleCard title="Att sätta ihop ord">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sammansättning är det vanligaste sättet att bilda nya ord i svenskan.
            Två eller flera ord slås ihop till ett nytt ord.
          </p>
          <div className="space-y-1">
            <Ex>bok + hylla = bokhylla</Ex>
            <Ex>sol + sken = solsken</Ex>
            <Ex>fotboll + s + plan = fotbollsplan</Ex>
            <Ex>barn + bok + s + hylla = barnbokshylla</Ex>
          </div>
          <Tip>
            Sammansatta ord skrivs ihop i svenskan. &quot;Fotbollsplan&quot; (ett ord),
            inte &quot;fotbolls plan&quot; (två ord). Särskrivning räknas som ett av de
            vanligaste stavfelen.
          </Tip>
          <Warning>
            <strong>Särskrivning ändrar betydelsen!</strong> Jämför:
            &quot;sjukhusmat&quot; (mat på sjukhus) och &quot;sjukt husmat&quot; (annorlunda betydelse).
            &quot;Rökfri&quot; (utan rök) och &quot;rök fri&quot; (röken är fri).
          </Warning>
        </ExampleCard>

        <ExampleCard title="Foge-s och foge-e">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ibland behövs en bindningsbokstav (foge) mellan ordleden.
          </p>
          <div className="space-y-1">
            <Ex>Foge-s: tidning-s-artikel, arbete-s-plats</Ex>
            <Ex>Foge-e: barn-e-barn (barnbarn), gat-e-sten (gatsten)</Ex>
          </div>
          <Tip>
            Det finns ingen enkel regel för när foge-s behövs. Lyssna på
            hur ordet uttalas - om det finns ett s-ljud mellan leden
            ska det skrivas med foge-s.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Avledning (prefix och suffix)">
        <ExampleCard title="Prefix (förstavelser)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ett prefix läggs till framför ett ord och ändrar dess betydelse.
          </p>
          <div className="space-y-1">
            <Ex>o- (negation): o-möjlig, o-van, o-lycklig</Ex>
            <Ex>miss- (fel): miss-förstå, miss-lyckad</Ex>
            <Ex>för- (intensifiering/förändring): för-stora, för-klara</Ex>
            <Ex>be- (göra till): be-skriva, be-arbeta</Ex>
            <Ex>an- (riktning): an-komma, an-gripa</Ex>
          </div>
        </ExampleCard>

        <ExampleCard title="Suffix (ändelser)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Ett suffix läggs till efter ett ord och kan ändra ordklass och betydelse.
          </p>
          <div className="space-y-1">
            <Ex>-lig (adjektiv): möj-lig, van-lig, tyd-lig</Ex>
            <Ex>-het (substantiv): fri-het, sanning-het, skön-het</Ex>
            <Ex>-tion (substantiv): informa-tion, situa-tion</Ex>
            <Ex>-bar (adjektiv): drick-bar, läs-bar, använd-bar</Ex>
            <Ex>-skap (substantiv): vän-skap, land-skap, egen-skap</Ex>
          </div>
          <Tip>
            Suffix kan ändra ordklass: &quot;vän&quot; (substantiv) + &quot;-lig&quot; = &quot;vänlig&quot; (adjektiv).
            &quot;fri&quot; (adjektiv) + &quot;-het&quot; = &quot;frihet&quot; (substantiv).
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Förkortningar">
        <ExampleCard title="Vanliga typer">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Förkortningar gör texter mer kompakta. Det finns olika typer:
          </p>
          <div className="space-y-1">
            <Ex>Med punkt: t.ex. (till exempel), bl.a. (bland annat), osv. (och så vidare)</Ex>
            <Ex>Utan punkt: AB (aktiebolag), TV, EU, FN</Ex>
            <Ex>Initialförkortningar: SJ, SAS, IKEA</Ex>
          </div>
          <Tip>
            Vanliga förkortningar med punkt: t.ex., bl.a., s.k. (så kallad),
            d.v.s. (det vill säga), m.m. (med mera), o.s.v. (och så vidare).
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Lånord">
        <ExampleCard title="Ord från andra språk">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Svenskan har lånat ord från många språk genom historien.
          </p>
          <div className="space-y-1">
            <Ex>Tyska: arbeta, handel, släkt, frukost</Ex>
            <Ex>Franska: restaurang, parfym, balkong, garage</Ex>
            <Ex>Engelska: mejl, dejt, jobb, tajming</Ex>
            <Ex>Nordiska grannspråk: fjäll (norska), smörgåsbord</Ex>
          </div>
          <Tip>
            Många engelska lånord anpassas till svensk stavning med tiden:
            &quot;mail&quot; blir &quot;mejl&quot;, &quot;juice&quot; blir &quot;juice/jos&quot;.
            Svenska Akademien rekommenderar ofta försvenskade stavningar.
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
        Textbindning handlar om hur meningar och stycken hänger ihop. God
        textbindning gör texten flytande och lätt att följa. Dålig textbindning
        gör texten hackig och svår att förstå.
      </p>

      <Section title="Sambandsord (konnektiver)">
        <p className="mb-3 text-neutral-600 dark:text-neutral-400">
          Sambandsord visar förhållandet mellan satser och meningar.
          De delas in i grupper efter funktion:
        </p>

        <ExampleCard title="Additiva sambandsord (lägger till)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar att information läggs till.
          </p>
          <Ex>och, dessutom, även, också, vidare, likaså, ytterligare</Ex>
          <Ex>Han spelar gitarr. Dessutom sjunger han i en kör.</Ex>
        </ExampleCard>

        <ExampleCard title="Adversativa sambandsord (motsätter)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar kontrast eller motsättning.
          </p>
          <Ex>men, dock, däremot, å andra sidan, trots det, emellertid, ändå</Ex>
          <Ex>Solen sken. Trots det var det kallt ute.</Ex>
        </ExampleCard>

        <ExampleCard title="Kausala sambandsord (orsak och verkan)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar orsak, anledning eller följd.
          </p>
          <Ex>eftersom, därför, alltså, följaktligen, på grund av, till följd av</Ex>
          <Ex>Hon missade bussen. Därför kom hon sent till skolan.</Ex>
        </ExampleCard>

        <ExampleCard title="Temporala sambandsord (tid)">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Visar tidssamband och ordningsföljd.
          </p>
          <Ex>sedan, därefter, först, slutligen, medan, till slut, samtidigt</Ex>
          <Ex>Först åt vi frukost. Därefter gick vi till skolan.</Ex>
        </ExampleCard>
      </Section>

      <Section title="Referensbindning">
        <ExampleCard title="Att syfta tillbaka">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Referensbindning innebär att man syftar tillbaka på något som
            redan nämnts, med hjälp av pronomen, synonymer eller överordnade begrepp.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Pronomen:</strong></p>
            <Ex>Lisa gick till skolan. Hon var glad.</Ex>
            <p><strong>Synonymer:</strong></p>
            <Ex>Bilen stannade. Fordonet hade fått motorstopp.</Ex>
            <p><strong>Överordnat begrepp:</strong></p>
            <Ex>Rosor och tulpaner fyllde trädgården. Blommorna doftade underbart.</Ex>
          </div>
          <Warning>
            Vanligt fel: Oklara syftningar med pronomen.
            &quot;Lisa träffade Sara. Hon var glad.&quot; - Vem var glad? Lisa eller Sara?
            Var tydlig med vem pronomen syftar på.
          </Warning>
        </ExampleCard>
      </Section>

      <Section title="Tematisk bindning">
        <ExampleCard title="Tema och rema">
          <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
            Varje mening har ett tema (känd information, det man talar om) och
            ett rema (ny information, det man säger om temat). God textbindning
            bygger på att koppla nytt till redan känt.
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p><strong>Konstant tema (samma ämne):</strong></p>
            <Ex>Katten satt på mattan. Katten tvättade sig. Katten somnade.</Ex>
            <p><strong>Lineär progression (rema blir tema):</strong></p>
            <Ex>Vi besökte en stad. Staden hade ett vackert torg. Torget var fullt av människor.</Ex>
          </div>
          <Tip>
            Blanda gärna olika typer av bindning i din text. Konstant tema
            kan bli enformigt, medan lineär progression driver texten framåt
            och skapar sammanhang.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Praktiska tips">
        <ExampleCard title="Checklista för textbindning">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>- Använd sambandsord för att visa hur meningar hänger ihop.</li>
            <li>- Variera mellan olika typer av sambandsord.</li>
            <li>- Syfta tillbaka med pronomen, synonymer och överordnade begrepp.</li>
            <li>- Placera känd information först i meningen och ny information sist.</li>
            <li>- Läs texten högt - flyter den bra eller hackar det?</li>
            <li>- Be någon annan läsa - förstår de sambanden?</li>
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
        Stilistik handlar om hur man medvetet väljer språkliga medel för att
        uppnå en viss effekt. Genom att behärska stilistiska verktyg kan du
        anpassa ditt skrivande till olika sammanhang och syften.
      </p>

      <Section title="Stilfigurer">
        <ExampleCard title="Vanliga stilfigurer">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <p><strong>Liknelse (simile):</strong> Jämförelse med &quot;som&quot; eller &quot;likt&quot;.</p>
              <Ex>Hon sprang som vinden.</Ex>
            </div>
            <div>
              <p><strong>Metafor:</strong> Överförd betydelse utan &quot;som&quot;.</p>
              <Ex>Livet är en resa.</Ex>
            </div>
            <div>
              <p><strong>Personifiering:</strong> Ger mänskliga egenskaper till icke-mänskligt.</p>
              <Ex>Vinden viskade bland löven.</Ex>
            </div>
            <div>
              <p><strong>Hyperbol:</strong> Överdrift för effekt.</p>
              <Ex>Jag har sagt det tusen gånger.</Ex>
            </div>
            <div>
              <p><strong>Anafor:</strong> Upprepning av ord i början av meningar.</p>
              <Ex>Jag såg. Jag kom. Jag segrade.</Ex>
            </div>
            <div>
              <p><strong>Allitteration:</strong> Upprepning av begynnelseljud.</p>
              <Ex>Peter Plansen plockade potatis.</Ex>
            </div>
          </div>
        </ExampleCard>
      </Section>

      <Section title="Språknivå och ton">
        <ExampleCard title="Formellt och informellt språk">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              Språknivån anpassas efter mottagare, syfte och sammanhang.
            </p>
            <div>
              <p><strong>Formellt:</strong></p>
              <Ex>Undertecknad önskar härmed framföra sin synpunkt i ärendet.</Ex>
            </div>
            <div>
              <p><strong>Neutralt:</strong></p>
              <Ex>Jag vill dela mina tankar om frågan.</Ex>
            </div>
            <div>
              <p><strong>Informellt:</strong></p>
              <Ex>Jag tänkte säga vad jag tycker om det här.</Ex>
            </div>
          </div>
          <Tip>
            Tänk på sammanhang: en uppsats kräver formellare språk än ett
            blogginlägg. Men även formellt språk ska vara klart och tydligt
            - undvik onödigt krångligt språk.
          </Tip>
        </ExampleCard>
      </Section>

      <Section title="Retoriska grepp">
        <ExampleCard title="Att övertyga med språk">
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <p><strong>Retorisk fråga:</strong> En fråga där svaret är underförstått.</p>
              <Ex>Vem vill inte ha en bättre framtid?</Ex>
            </div>
            <div>
              <p><strong>Tretal:</strong> Tre ord eller fraser i följd för rytm och betoning.</p>
              <Ex>Vi kom, vi såg, vi segrade.</Ex>
            </div>
            <div>
              <p><strong>Kontrast (antites):</strong> Motstående begrepp ställda mot varandra.</p>
              <Ex>Det var den bästa av tider, det var den värsta av tider.</Ex>
            </div>
          </div>
          <Tip>
            Retoriska grepp är särskilt användbara i argumenterande och
            övertygande texter. Använd dem medvetet men inte för ofta -
            då förlorar de sin effekt.
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
    description: "Regler för punkt, komma, kolon och mer",
    content: SkiljeteckenContent,
  },
  stavning: {
    title: "Stavning",
    description: "Stavningsregler och vanliga fallgropar",
    content: StavningContent,
  },
  ordbildning: {
    title: "Ordbildning",
    description: "Sammansättning, avledning och lånord",
    content: OrdbildningContent,
  },
  textbindning: {
    title: "Textbindning",
    description: "Sambandsord och textuell sammanhållning",
    content: TextbindningContent,
  },
  stilistik: {
    title: "Stilistik",
    description: "Stilfigurer, ton och språknivå",
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
    description: `${t.description}. Anpassat för ${group.label.toLowerCase()}.`,
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
