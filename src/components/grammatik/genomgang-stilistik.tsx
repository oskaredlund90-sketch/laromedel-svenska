import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Minneslista, P, Section, Tabell, Tip, Vidare, minst } from "./delar";

export function StilistikGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        Stilistik handlar om hur något sägs – inte bara vad. Samma innehåll kan skrivas på många sätt. Du väljer ord, meningsbyggnad och bilder
        efter vem du skriver till och vad du vill uppnå.
      </Intro>

      <Section title="Stilnivå – formellt och informellt">
        <Tabell
          rubriker={["Informellt", "Neutralt", "Formellt"]}
          rader={[
            ["Det var skitbra!", "Det var mycket bra.", "Resultatet var utmärkt."],
            ["Kolla på det här.", "Titta på det här.", "Granska följande."],
            ["Typ jättemånga", "många", "ett stort antal"],
            ["pga", "på grund av", "till följd av"],
          ]}
        />
        <P>
          En insändare, ett sms till en kompis och en utredning kräver olika stilnivå. Fundera på mottagare, syfte och situation innan du skriver.
        </P>
        <Tip>Formellt betyder inte krångligt. Den bästa formella texten är tydlig, saklig och lätt att läsa.</Tip>
      </Section>

      <Section title="Ordval och ton">
        <ExampleCard title="Neutrala och värdeladdade ord">
          <Ex>Neutralt: Han är sparsam. – Värdeladdat: Han är snål.</Ex>
          <Ex>Neutralt: en demonstration – Värdeladdat: ett upplopp</Ex>
          <P>Värdeladdade ord avslöjar skribentens inställning. I argumenterande texter kan de övertyga, i sakliga texter bör de undvikas.</P>
        </ExampleCard>
        {minst(s, "gymnasiet") && (
          <ExampleCard title="Denotation och konnotation">
            <P>
              Ordets denotation är den grundläggande betydelsen. Konnotationen är det ordet för med sig av känslor och associationer: <em>hem</em>{" "}
              och <em>bostad</em> betecknar samma sak men väcker olika känslor.
            </P>
          </ExampleCard>
        )}
      </Section>

      <Section title="Bildspråk och stilfigurer">
        <Tabell
          rubriker={["Stilfigur", "Vad är det?", "Exempel"]}
          rader={[
            ["Liknelse", "jämförelse med som", "Hon var snabb som en vessla."],
            ["Metafor", "jämförelse utan som", "Han är en klippa."],
            ["Besjälning", "döda ting får mänskliga egenskaper", "Vinden viskade i träden."],
            ["Överdrift (hyperbol)", "kraftig förstoring", "Jag har sagt det tusen gånger."],
            ["Upprepning", "ord eller fras återkommer", "Vi kämpar. Vi kämpar varje dag."],
            ["Kontrast (antites)", "motsatser ställs mot varandra", "Ute stormade det, inne var det stilla."],
            ["Anafor", "samma ord inleder flera meningar eller led", "Vi kämpar för klimatet. Vi kämpar för framtiden."],
            ["Klimax", "en stegring mot det starkaste", "Det var bra, mycket bra, helt fantastiskt."],
            ["Asyndes", "uppräkning utan och – ger tempo", "Han åt. Han drack. Han somnade."],
            ...(minst(s, "gymnasiet")
              ? [
                  ["Retorisk fråga", "fråga som inte väntar svar", "Vem vill inte leva i fred?"],
                  ["Tretal", "tre led för rytm och kraft", "Jag kom, jag såg, jag segrade."],
                  ["Allitteration", "samma ljud i början av ord", "sol, sand och semester"],
                  ["Ironi", "säger motsatsen till det man menar", "Vilket härligt väder! (i ösregn)"],
                  ["Eufemism", "mildare omskrivning", "gå bort (dö)"],
                ]
              : []),
          ]}
        />
        <Vidare href={`/${s}/ordsprak`}>Liknelser, ordspråk och idiom</Vidare>
      </Section>

      {minst(s, "gymnasiet") && (
        <Section title="Stil i olika genrer">
          <Tabell
            rubriker={["Genre", "Typiska drag"]}
            rader={[
              ["Vetenskaplig text", "saklig, exakt, passiv och nominalisering i måttlig mängd, källhänvisningar, metatext"],
              ["Nyhetsartikel", "det viktigaste först, korta stycken, neutral ton, citat"],
              ["Krönika och debattartikel", "personlig röst, retoriska grepp, tydlig tes"],
              ["Skönlitteratur", "gestaltning, bildspråk, varierad meningsrytm"],
            ]}
          />
          <Vidare href={`/${s}/grammatik/meningsbyggnad`}>Slutfokus, utbrytning och nominalstil</Vidare>
        </Section>
      )}

      <Minneslista
        punkter={[
          "Anpassa stilnivån efter mottagare, syfte och situation.",
          "Värdeladdade ord visar inställning – välj dem medvetet.",
          "Liknelse har som, metafor har inte som.",
          ...(minst(s, "gymnasiet") ? ["Retoriska figurer som anafor, tretal och retoriska frågor ger kraft åt tal och debatt."] : []),
        ]}
      />
    </>
  );
}
