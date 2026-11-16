import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Minneslista, P, Section, Tabell, Tip, Vidare, Warning, minst } from "./delar";

export function SambandGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "Ibland vill du berätta varför något händer, vad som händer sedan eller vad som måste hända först. Då använder du små ord som eftersom, så och om."
          : "Att visa samband är kärnan i att förklara och argumentera. Orsak svarar på varför, följd (konsekvens) på vad det leder till och villkor på vad som måste gälla. Samma samband kan uttryckas på flera sätt – med bisatser, sambandsord, prepositionsuttryck eller verb."}
      </Intro>

      <Section title="Tre samband">
        <div className="grid gap-4 sm:grid-cols-3">
          <ExampleCard title="Orsak – varför?">
            <Ex>Vi stannade inne eftersom det regnade.</Ex>
            <P>eftersom, för att{minst(s, "mellanstadiet") ? ", på grund av, då" : ""}</P>
          </ExampleCard>
          <ExampleCard title={s === "lagstadiet" ? "Följd – vad händer sedan?" : "Följd – vad leder det till?"}>
            <Ex>Det regnade, så vi stannade inne.</Ex>
            <P>så, därför{minst(s, "mellanstadiet") ? ", alltså, vilket gjorde att" : ""}</P>
          </ExampleCard>
          <ExampleCard title="Villkor – vad måste gälla?">
            <Ex>Om det regnar, stannar vi inne.</Ex>
            <P>om{minst(s, "mellanstadiet") ? ", ifall" : ""}{minst(s, "hogstadiet") ? ", förutsatt att, såvida inte, annars" : ""}</P>
          </ExampleCard>
        </div>
        <Tip>
          Samma händelse – tre samband. Lägg märke till att <strong>eftersom</strong> pekar bakåt mot orsaken, medan <strong>så</strong> och{" "}
          <strong>därför</strong> pekar framåt mot följden.
        </Tip>
        {minst(s, "hogstadiet") && (
          <ExampleCard title="Samband är inte alltid orsak">
            <Ex>Glassförsäljningen och antalet drunkningsolyckor ökar på sommaren.</Ex>
            <P>
              Två saker kan hänga ihop utan att den ena orsakar den andra. Här beror båda på en tredje sak: varmt väder. Innan du skriver
              <em> leder till</em> eller <em>därför</em> – fråga dig om det verkligen är en orsak, eller bara något som händer samtidigt.
            </P>
          </ExampleCard>
        )}
        {minst(s, "hogstadiet") && (
          <Warning>
            <strong>Så</strong> och <strong>så att</strong> är olika ord. <em>Det regnade, så vi stannade inne</em> – så är en konjunktion och
            följs av en huvudsats. <em>Vi tog med paraply så att vi inte skulle bli blöta</em> – så att är en subjunktion och inleder en bisats.
            Där gäller BIFF: <em>så att vi inte blev blöta</em>.
          </Warning>
        )}
      </Section>

      {minst(s, "mellanstadiet") && (
        <Section title="Orsaken först eller sist?">
          <P>Du bestämmer själv vad som ska komma först. Det som står sist får oftast mest tyngd.</P>
          <Ex>Matchen ställdes in eftersom planen var översvämmad. (orsaken betonas)</Ex>
          <Ex>Eftersom planen var översvämmad, ställdes matchen in. (följden betonas)</Ex>
          <Ex>Planen var översvämmad. Därför ställdes matchen in. (två meningar)</Ex>
          <Warning>
            När bisatsen står först kommer verbet direkt efter: <em>Eftersom det regnade <strong>stannade vi</strong> inne.</em> Inte: <em>…det
            regnade vi stannade inne.</em>
          </Warning>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Fyra sätt att uttrycka samma samband">
          <Tabell
            rubriker={["Sätt", "Orsak", "Följd"]}
            rader={[
              ["Bisats (subjunktion)", "Bussen var sen eftersom det snöade.", "Det snöade, så att bussen blev sen."],
              ["Sambandsord mellan meningar", "Bussen var sen. Det berodde på snön.", "Det snöade. Därför blev bussen sen."],
              ["Preposition + nominalfras", "Bussen var sen på grund av snön.", "Till följd av snön blev bussen sen."],
              ["Verb", "Förseningen berodde på snön.", "Snöfallet ledde till förseningar."],
            ]}
          />
          <P>
            Variera mellan sätten. Bisatser passar i berättande och muntligt språk, prepositionsuttryck och verb är vanliga i faktatexter och
            argumenterande texter.
          </P>
          <ExampleCard title="Motsats och medgivande">
            <P>Ibland händer något trots att man inte väntar sig det. Det kallas medgivande (koncession).</P>
            <Ex>Hon klarade provet trots att hon hade varit sjuk.</Ex>
            <Ex>Han var sjuk. Ändå spelade han matchen.</Ex>
            <Ex>Visserligen kostar det mycket, men vinsterna är större.</Ex>
          </ExampleCard>
          <Warning>
            Vanliga fel: <em>eftersom att</em> (skriv eftersom), <em>på grund av att det snöade</em> fungerar men <em>eftersom snön</em> gör det
            inte – eftersom kräver en sats, på grund av en nominalfras. I bisatsen gäller BIFF: <em>…eftersom bussen <strong>inte</strong>{" "}
            kom</em>.
          </Warning>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Exakta samband i sakprosa">
          <ExampleCard title="Samband är inte samma sak som orsak">
            <P>
              Att två saker följs åt (korrelation) betyder inte att den ena orsakar den andra (kausalitet). Glassförsäljning och drunkningsolyckor
              ökar båda på sommaren – värmen förklarar båda.
            </P>
            <Ex>Svagt: Sociala medier gör unga deprimerade.</Ex>
            <Ex>Exakt: Studien visar ett samband mellan mycket skärmtid och sämre sömn.</Ex>
          </ExampleCard>
          <ExampleCard title="Nominalisering och formella markörer">
            <Tabell
              rubriker={["Samband", "Formella uttryck"]}
              rader={[
                ["Orsak", "till följd av, med anledning av, beror på, orsakas av"],
                ["Följd", "således, följaktligen, därmed, medför, resulterar i"],
                ["Villkor", "förutsatt att, under förutsättning att, i händelse av, såvida inte"],
                ["Medgivande", "även om, trots att, visserligen … men, icke desto mindre"],
              ]}
            />
            <P>
              Villkor kan också uttryckas med omvänd ordföljd: <em>Kommer du, stannar jag</em> = Om du kommer … Kontrafaktiska villkor (som inte
              uppfylldes): <em>Hade regeringen agerat tidigare, hade krisen kunnat undvikas.</em>
            </P>
          </ExampleCard>
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <p className="mb-8">
          <Vidare href={`/${s}/grammatik/textbindning`}>Så binder du ihop hela texten – Textbindning</Vidare>
        </p>
      )}

      <Minneslista
        punkter={
          s === "lagstadiet"
            ? ["Eftersom = varför.", "Så och därför = vad som händer sedan.", "Om = något måste hända först."]
            : [
                "Orsak: eftersom, för att, på grund av.",
                "Följd: så, därför, vilket ledde till att.",
                "Villkor: om, ifall" + (minst(s, "hogstadiet") ? ", förutsatt att, annars." : "."),
                "Det som står sist i meningen betonas mest.",
                ...(minst(s, "hogstadiet") ? ["Variera: bisats, sambandsord, preposition eller verb."] : []),
              ]
        }
      />
    </>
  );
}
