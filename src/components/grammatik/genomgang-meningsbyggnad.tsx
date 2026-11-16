import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Markerad, P, Section, Tabell, Tip, Warning, minst } from "./delar";
import { VariationGenomgang } from "./genomgang-variation";

export function MeningsbyggnadGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "En mening är en tanke som är klar. Den börjar med stor bokstav, slutar med punkt, frågetecken eller utropstecken och berättar om någon som gör något."
          : "När du förstår hur meningar är byggda kan du skriva tydligare och mer varierat. Svenskan har en fast regel för var verbet står – och en annan ordföljd i bisatser."}
      </Intro>

      {s === "lagstadiet" && (
        <Section title="En hel mening">
          <ExampleCard title="Någon gör något">
            <Markerad delar={[["Katten", "vem?"], ["sover", "vad händer?"], ["i soffan."]]} />
            <P>En hel mening behöver någon som gör något och något som händer. ”Sover i soffan.” är inte en hel mening – vem sover?</P>
          </ExampleCard>
          <ExampleCard title="Binda ihop meningar">
            <Ex>Jag åt frukost. Sedan gick jag till skolan.</Ex>
            <Ex>Jag ville gå ut, men det regnade.</Ex>
            <P>Skriv inte allt i en enda lång mening med och, och, och. Sätt punkt när tanken är klar.</P>
          </ExampleCard>
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <Section title="Huvudsats – verbet på plats två">
          <P>En huvudsats kan stå ensam. I en påståendesats står verbet alltid på plats två – oavsett vad som står först. I frågor utan frågeord och i uppmaningar står verbet först: <em>Kommer du? Stäng dörren!</em></P>
          <Tabell
            rubriker={["Plats 1", "Plats 2 – verb", "Subjekt", "Resten"]}
            rader={[
              ["Jag", "läser", "–", "en bok."],
              ["I går", "köpte", "jag", "en ny jacka."],
              ["I skolan", "lär", "vi", "oss mycket."],
            ]}
          />
          <Tip>Står något annat än subjektet först, hamnar subjektet efter verbet: I går köpte jag … Det kallas omvänd ordföljd.</Tip>
          <Warning>Vanligt fel: <em>I går jag köpte en jacka.</em> Rätt: <em>I går köpte jag en jacka.</em></Warning>
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <Section title="Bisats">
          <P>En bisats kan inte stå ensam. Den inleds ofta med ett litet ord som att, som, när, om, eftersom eller medan.</P>
          <Markerad delar={[["Vi gick in", "huvudsats"], ["när det började regna.", "bisats"]]} />
          <Markerad delar={[["Eftersom jag var hungrig", "bisats"], ["åt jag två mackor.", "huvudsats"]]} />
          <P>När bisatsen står först kommer verbet i huvudsatsen direkt efter: … åt jag.</P>
        </Section>
      )}

      {s === "mellanstadiet" && (
        <Section title="Inte i bisatsen">
          <Ex>Huvudsats: Han kommer inte.</Ex>
          <Ex>Bisats: Jag vet att han inte kommer.</Ex>
          <P>I en bisats står inte före verbet. På högstadiet lär du dig regeln som heter BIFF.</P>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="BIFF-regeln">
          <ExampleCard title="Bisats – Inte Före Finita verbet">
            <Tabell
              rubriker={["", "Ordföljd", "Exempel"]}
              rader={[
                ["Huvudsats", "subjekt + verb + inte", "Han kommer inte i dag."],
                ["Bisats", "subjunktion + subjekt + inte + verb", "… att han inte kommer i dag."],
              ]}
            />
            <P>Regeln gäller alla satsadverbial: inte, aldrig, alltid, kanske, säkert, tyvärr.</P>
            <Ex>Jag undrar varför hon aldrig svarar.</Ex>
            <Ex>Det är synd att du inte kan komma.</Ex>
            <Warning>Fel: … att han kommer inte. Rätt: … att han inte kommer.</Warning>
          </ExampleCard>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Tre sorters bisatser">
          <Tabell
            rubriker={["Bisats", "Inleds ofta med", "Exempel", "Fungerar som"]}
            rader={[
              ["Att-sats", "att", "Jag vet att du har rätt.", "subjekt eller objekt"],
              ["Relativsats", "som, där, vilket, vars", "Boken som jag läste var bra.", "attribut – beskriver ett ord"],
              ["Adverbiell bisats", "när, eftersom, om, trots att", "Vi gick hem när det blev mörkt.", "adverbial – när, varför, villkor"],
            ]}
          />
          <Tip>
            <em>Som</em> syftar på ett ord: <em>Studien, som publicerades i maj …</em> <em>Vilket</em> kan syfta på en hel sats:{" "}
            <em>Räntan höjdes, vilket drabbade många.</em>
          </Tip>
          <P>Alla tre följer BIFF-regeln. Adverbiella bisatser finns också i kapitlet om orsak, följd och villkor.</P>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Fördjupning: fler termer för bisatser">
          <Tabell
            rubriker={["Term", "Vad det är", "Exempel"]}
            rader={[
              ["Frågebisats", "en indirekt fråga – inleds med om eller ett frågeord (vem, vad, hur …)", "Jag undrar om hon har ringt. Vet du vem som kommer?"],
              ["Temporal bisats", "adverbiell bisats om tid", "När det blev mörkt gick vi hem."],
              ["Kausal bisats", "adverbiell bisats om orsak", "Vi stannade inne eftersom det regnade."],
              ["Konditionell bisats", "adverbiell bisats om villkor", "Om det regnar stannar vi inne."],
              ["Inskjuten bisats", "en bisats mitt i huvudsatsen, ofta inom kommatecken", "Studien, som publicerades i maj, väckte debatt."],
              ["Satsförkortning", "en infinitivfras som ersätter en bisats", "Hon gick ut för att handla. (= så att hon kunde handla)"],
              ["Anakoluti", "en mening som börjar på ett sätt och slutar på ett annat", "Den boken som jag läste, den var den bra."],
            ]}
          />
        </Section>
      )}

      <VariationGenomgang stadie={s} />
    </>
  );
}
