import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Minneslista, P, Section, Tabell, Tip, Vidare, minst } from "./delar";

/** Läggs sist i Meningsbyggnad: hur meningsbyggnaden kan varieras för olika syften. */
export function VariationGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  if (s === "lagstadiet")
    return (
      <>
        <Section title="Påstående, fråga och utrop">
          <ExampleCard title="Olika sorters meningar">
            <Ex>Hunden sover. (berättar något – punkt)</Ex>
            <Ex>Sover hunden? (frågar – frågetecken)</Ex>
            <Ex>Vad hunden sover mycket! (utrop – utropstecken)</Ex>
            <P>I en fråga kommer verbet ofta först: Sover hunden? Vill du leka?</P>
          </ExampleCard>
        </Section>
        <Minneslista punkter={["En mening börjar med stor bokstav.", "Den slutar med punkt, frågetecken eller utropstecken.", "Börja inte alla meningar med jag – pröva sedan, i dag eller efter skolan."]} />
      </>
    );

  return (
    <>
      <Section title="Ordföljd: verbet på plats två">
        <Tabell
          rubriker={["Plats 1 (fundament)", "Plats 2 (verb)", "Subjekt", "Resten"]}
          rader={[
            ["Vi", "åkte", "–", "till fjällen i februari."],
            ["I februari", "åkte", "vi", "till fjällen."],
            ["Till fjällen", "åkte", "vi", "i februari."],
          ]}
        />
        <P>Det du sätter först blir utgångspunkt för meningen. Verbet står alltid kvar på plats två i en påståendesats.</P>
      </Section>

      <Section title="Variera meningsbyggnaden för olika syften">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="Berätta – skapa tempo och spänning">
            <Ex>Det var mörkt. Tyst. Då hörde jag det.</Ex>
            <P>Korta meningar och enstaka ord ger tempo. Långa meningar saktar ner och beskriver.</P>
          </ExampleCard>
          <ExampleCard title="Förklara – visa samband">
            <Ex>Eftersom isen smälter, stiger havsnivån.</Ex>
            <P>Bisatser med eftersom, när och om visar hur saker hänger ihop.</P>
            <Vidare href={`/${s}/grammatik/samband`}>Orsak, följd och villkor</Vidare>
          </ExampleCard>
          <ExampleCard title="Argumentera – betona det viktigaste">
            <Ex>Det viktigaste skälet är att eleverna sover för lite.</Ex>
            <P>Lägg tyngden sist i meningen och börja gärna med en tydlig tes.</P>
          </ExampleCard>
          <ExampleCard title="Instruera – var tydlig">
            <Ex>Vispa äggen. Tillsätt mjölken. Låt smeten vila.</Ex>
            <P>Uppmaningar börjar med verbet (imperativ) och står ofta i kronologisk ordning.</P>
          </ExampleCard>
        </div>
        <Tip>Blanda korta och långa meningar. Läs texten högt – hör du rytmen? Om alla meningar börjar likadant, flytta en tid eller plats först.</Tip>
      </Section>

      {minst(s, "hogstadiet") && (
        <Section title="Vanliga fel i meningsbyggnaden">
          <Tabell
            rubriker={["Fel", "Exempel", "Rättat"]}
            rader={[
              ["Satsradning", "Det regnade, vi gick in.", "Det regnade, så vi gick in."],
              ["Fel ordföljd efter fundament", "I går jag åt glass.", "I går åt jag glass."],
              ["BIFF", "…att han kommer inte.", "…att han inte kommer."],
              ["Ofullständig mening", "Eftersom det var kallt.", "Vi gick in eftersom det var kallt."],
            ]}
          />
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Stilistiska grepp i meningsbyggnaden">
          <Tabell
            rubriker={["Grepp", "Exempel", "Effekt"]}
            rader={[
              ["Slutfokus", "Det som avgjorde var ett självmål i sista minuten.", "Det viktigaste hamnar sist"],
              ["Utbrytning", "Det var Anna som vann.", "Lyfter fram en del"],
              ["Formellt subjekt", "Det finns flera skäl att ifrågasätta studien.", "Ny information senare"],
              ["Passiv", "Provet rättades under veckan.", "Handlingen i fokus, inte den som utför"],
              ["Verbal- i stället för nominalstil", "Vi måste minska utsläppen.", "Lättare att läsa"],
            ]}
          />
        </Section>
      )}

      <Minneslista
        punkter={[
          "Verbet står på plats två i en huvudsats.",
          "I en bisats står inte före verbet (BIFF).",
          "Välj meningsbyggnad efter syftet: tempo, förklaring, betoning eller tydlighet.",
          "Blanda korta och långa meningar.",
        ]}
      />
    </>
  );
}
