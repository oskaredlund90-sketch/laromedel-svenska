import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Minneslista, P, Section, Tabell, Tip, Warning, minst } from "./delar";

export function SkiljeteckenGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "Skiljetecken visar var en mening slutar och hur den ska läsas. En mening börjar med stor bokstav och slutar med punkt, frågetecken eller utropstecken."
          : "Skiljetecken hjälper läsaren att förstå hur texten hänger ihop och var man ska göra pauser. Rätt skiljetecken gör texten lättare att läsa – fel skiljetecken kan ändra betydelsen."}
      </Intro>

      <Section title="Punkt, frågetecken och utropstecken">
        <div className="grid gap-4 sm:grid-cols-3">
          <ExampleCard title="Punkt .">
            <P>När du berättar något.</P>
            <Ex>Vi åker till mormor.</Ex>
          </ExampleCard>
          <ExampleCard title="Frågetecken ?">
            <P>När du frågar något.</P>
            <Ex>Vill du följa med?</Ex>
          </ExampleCard>
          <ExampleCard title="Utropstecken !">
            <P>När du ropar, blir glad, arg eller förvånad – eller ger en order.</P>
            <Ex>Akta dig!</Ex>
          </ExampleCard>
        </div>
        <Tip>
          {s === "lagstadiet"
            ? "Läs högt. Där rösten gör en lång paus och går ner sätter du punkt. Efter punkten börjar nästa mening med stor bokstav."
            : "Varje mening ska ha ett slut. Läs texten högt – där du gör en tydlig paus och tanken är klar sätter du punkt."}
        </Tip>
      </Section>

      {minst(s, "mellanstadiet") && (
        <Section title="Komma">
          <ExampleCard title="Vid uppräkning">
            <Ex>Vi köpte mjölk, bröd, ost och äpplen.</Ex>
            <P>Komma mellan orden – men inte före <em>och</em> i sista ledet.</P>
          </ExampleCard>
          <ExampleCard title="Före men">
            <Ex>Jag ville gå ut, men det regnade.</Ex>
          </ExampleCard>
          {minst(s, "hogstadiet") && (
            <>
              <ExampleCard title="Mellan huvudsatser och efter en inledande bisats">
                <Ex>Det började regna, så vi gick in.</Ex>
                <Ex>När vi kom hem, var middagen klar.</Ex>
                <P>Komma efter en inledande bisats är frivilligt men hjälper läsaren i långa meningar.</P>
              </ExampleCard>
              <ExampleCard title="Kring inskott">
                <Ex>Min bror, som är tolv år, spelar trummor.</Ex>
                <P>Om du kan stryka delen utan att meningen blir fel är det ett inskott – sätt komma på båda sidor.</P>
              </ExampleCard>
              <Warning>
                Komma kan inte ersätta punkt mellan två huvudsatser: <em>Det regnade, vi gick in.</em> är satsradning. Skriv <em>Det regnade. Vi gick
                in.</em> eller <em>Det regnade, så vi gick in.</em>
              </Warning>
            </>
          )}
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <Section title="Dialog">
          <ExampleCard title="Två sätt att skriva repliker">
            <Ex>– Kommer du? frågade Ali.</Ex>
            <Ex>– Ja, svarade Elsa.</Ex>
            <Ex>”Kommer du?” frågade Ali. ”Ja”, svarade Elsa.</Ex>
            <P>Ny talare – ny rad. Välj talstreck eller citattecken och håll dig till samma sätt genom hela texten.</P>
          </ExampleCard>
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <Section title="Kolon">
          <Ex>Ta med följande: matsäck, regnkläder och vattenflaska.</Ex>
          <Ex>Hon sa: ”Nu går vi.”</Ex>
          <P>Kolon står före en uppräkning, en förklaring eller ett citat.</P>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Semikolon, tankstreck och bindestreck">
          <Tabell
            rubriker={["Tecken", "Används", "Exempel"]}
            rader={[
              ["Semikolon ;", "mellan nära sammanhörande huvudsatser", "Det var sent; alla hade gått hem."],
              ["Tankstreck –", "inskott, paus eller kontrast", "Hon kom – till slut."],
              ["Tankstreck –", "mellan tal och platser (”till”)", "1990–2020, sidorna 4–8, Stockholm–Göteborg"],
              ["Bindestreck -", "i sammansättningar och vid avstavning", "FN-möte, e-post, 1800-talet"],
            ]}
          />
          <Tip>Tankstrecket (–) är längre än bindestrecket (-). Med tangentbordet: Alt + minus på Mac, Ctrl + minus på numeriska tangentbordet på Windows.</Tip>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Skrivregler i sakprosa">
          <Tabell
            rubriker={["Område", "Regel", "Exempel"]}
            rader={[
              ["Citat", "Svenska citattecken ” ”. Uteslutningar markeras med […]", "”Språket är […] ett verktyg” (Svensson, 2020, s. 14)."],
              ["Långa citat", "Blockcitat utan citattecken, indraget", "Mer än cirka tre rader citeras som ett eget stycke."],
              ["Siffror", "Tal upp till tolv skrivs ofta med bokstäver i löptext", "tre elever, 25 elever, 5 %"],
              ["Procent och enheter", "Mellanslag före tecknet", "12 %, 5 kg, 30 °C"],
              ["Datum", "Enligt standard eller med bokstäver", "2026-11-15 · den 15 november 2026"],
              ["Förkortningar", "Punkt efter varje led, inget mellanslag", "t.ex., bl.a., m.m., s.k."],
              ["Källhänvisning", "Författare, år och sida inom parentes", "(Lindgren, 2019, s. 45)"],
            ]}
          />
          <Warning>Undvik förkortningar i löptext när de kan skrivas ut – skriv till exempel hellre än t.ex. i formella texter.</Warning>
        </Section>
      )}

      <Minneslista
        punkter={
          s === "lagstadiet"
            ? ["Stor bokstav först i meningen.", "Punkt när du berättar, frågetecken när du frågar, utropstecken när du ropar."]
            : [
                "Punkt när tanken är klar – inte komma.",
                "Komma vid uppräkning (inte före och) och före men.",
                "Ny talare – ny rad.",
                ...(minst(s, "hogstadiet") ? ["Komma kring inskott. Semikolon binder ihop nära sammanhörande satser.", "Tankstreck (–) är inte samma sak som bindestreck (-)."] : []),
                ...(minst(s, "gymnasiet") ? ["Citat, siffror, datum och källor har egna skrivregler."] : []),
              ]
        }
      />
    </>
  );
}
