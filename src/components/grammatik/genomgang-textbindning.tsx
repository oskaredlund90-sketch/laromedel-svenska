import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Minneslista, P, Section, Tabell, Tip, Vidare, Warning, minst } from "./delar";

export function TextbindningGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "En text är fler meningar som hör ihop. Små ord som först, sedan och han eller hon hjälper läsaren att följa med."
          : "Textbindning är allt som får meningar och stycken att hänga ihop till en text. Det finns tre sorters bindning: sambandsmarkörer som visar hur meningarna hänger ihop, referensbindning där ord syftar tillbaka och tematisk bindning där texten håller sig till och för ämnet vidare."}
      </Intro>

      {s !== "lagstadiet" && (
        <Section title="Tre sorters bindning">
          <Tabell
            rubriker={["Bindning", "Vad är det?", "Exempel"]}
            rader={[
              ["Sambandsmarkörer", "ord som visar hur meningarna hänger ihop", "därför, men, dessutom, till slut"],
              ["Referensbindning", "ord som syftar på något som redan sagts", "Leo … han … pojken"],
              ["Tematisk bindning", "texten håller sig till ämnet och kopplar nytt till känt", "en borg → borgen → där"],
            ]}
          />
        </Section>
      )}

      <Section title="Sambandsmarkörer">
        <ExampleCard title={s === "lagstadiet" ? "Ord som visar ordningen" : "Ord som visar hur meningarna hänger ihop"}>
          {s === "lagstadiet" ? (
            <>
              <Ex>Först vaknade jag. Sedan åt jag frukost. Till slut gick jag till skolan.</Ex>
              <P>Andra bra ord: efter det, på kvällen, nästa dag, men, därför.</P>
            </>
          ) : (
            <Tabell
              rubriker={["Funktion", "Sambandsmarkörer"]}
              rader={[
                [minst(s, "hogstadiet") ? "Tid (temporala)" : "Tid", "först, sedan, därefter, samtidigt, till slut"],
                [minst(s, "hogstadiet") ? "Tillägg (additiva)" : "Tillägg", "och, dessutom, även, vidare"],
                [minst(s, "hogstadiet") ? "Motsats (adversativa)" : "Motsats", "men, däremot, ändå, å andra sidan"],
                [minst(s, "hogstadiet") ? "Orsak och följd (kausala)" : "Orsak och följd", "eftersom, därför, alltså, följaktligen"],
                ...(minst(s, "hogstadiet") ? [["Exempel och sammanfattning", "till exempel, sammanfattningsvis, kort sagt"]] : []),
                ...(minst(s, "gymnasiet") ? [["Textens uppbyggnad (metatext)", "inledningsvis, i det följande, avslutningsvis"]] : []),
              ]}
            />
          )}
          {minst(s, "hogstadiet") && (
            <P>
              Orden inom parentes är de fackord som används om sambanden: temporal (tid), additiv (tillägg), adversativ (motsats) och kausal
              (orsak).
            </P>
          )}
          {minst(s, "mellanstadiet") && <Tip>Variera! Börja inte varje mening med och sen. Sambanden mellan orsak och följd finns i ett eget avsnitt.</Tip>}
          {minst(s, "mellanstadiet") && <Vidare href={`/${s}/grammatik/samband`}>Orsak, följd och villkor</Vidare>}
        </ExampleCard>
      </Section>

      <Section title={s === "lagstadiet" ? "Han, hon, den – ord som pekar tillbaka" : "Referensbindning"}>
        <ExampleCard title="Syfta tillbaka i stället för att upprepa">
          <Ex>Elsa har en hund. Elsa går ut med hunden. Elsa tycker om hunden.</Ex>
          <Ex>Elsa har en hund. Hon går ut med den varje dag. Hon tycker om den.</Ex>
          {minst(s, "mellanstadiet") && (
            <P>
              Du kan syfta tillbaka med pronomen (hon, den, de), med en synonym (hunden → valpen) eller med ett ord för hela gruppen (äpplen och
              päron → frukten).
            </P>
          )}
          {minst(s, "hogstadiet") && (
            <>
              <P>
                En <strong>sammanfattande referens</strong> syftar på ett helt resonemang: <em>Havet blir varmare och isarna smälter. Förändringarna
                påverkar miljontals människor.</em>
              </P>
              <P>
                Första gången något nämns står det ofta i obestämd form (<em>en hund</em>), sedan i bestämd form (<em>hunden</em>) – det är också
                referensbindning.
              </P>
            </>
          )}
          <Warning>
            {s === "lagstadiet"
              ? "Om det finns två personer kan han eller hon bli otydligt. Skriv namnet igen om läsaren kan bli osäker."
              : "Se upp med otydliga syftningar: Sara träffade Moa. Hon var arg. – Vem var arg? Skriv namnet om det kan missförstås."}
          </Warning>
        </ExampleCard>
      </Section>

      {minst(s, "mellanstadiet") && (
        <Section title="Tematisk bindning">
          <ExampleCard title="Håll dig till ämnet – och för det vidare">
            <P>
              {minst(s, "hogstadiet")
                ? "Varje mening har ett tema – det kända som meningen utgår från – och ett rema – det nya. Ofta blir det nya i en mening temat i nästa. Då flyter texten framåt."
                : "Varje ny mening ska ta upp något från meningen innan. Då känns texten som en kedja."}
            </P>
            <Ex>Vi besökte en borg. Borgen byggdes på 1300-talet. Där bodde en kung i tvåhundra år.</Ex>
            {minst(s, "hogstadiet") && (
              <>
                <P>Två vanliga mönster:</P>
                <Ex>Konstant tema: Maskrosen är vanlig. Den blommar på våren. Den sprider frön med vinden.</Ex>
                <Ex>Kedja (rema → tema): Vi köpte en karta. Kartan visade en stig. Stigen ledde till sjön.</Ex>
              </>
            )}
            {minst(s, "gymnasiet") && (
              <P>
                Svenskan har slutfokus – ny och viktig information placeras sist. Tema–rema-kedjor, kärnmeningar och metatext skapar tillsammans den röda
                tråden i en längre text.
              </P>
            )}
          </ExampleCard>
        </Section>
      )}

      <Section title="Stycken">
        <ExampleCard title={s === "lagstadiet" ? "Ny rad när något nytt händer" : "Ett stycke – ett delämne"}>
          <P>
            {s === "lagstadiet"
              ? "När något nytt händer i berättelsen börjar du på en ny rad. Då blir texten lättare att läsa."
              : "Börja ett nytt stycke när något nytt börjar: ny tid, ny plats, ny person eller ett nytt delämne. Markera stycket med blankrad eller indrag."}
          </P>
          {minst(s, "hogstadiet") && (
            <P>
              I faktatexter och argumenterande texter inleds stycket ofta med en kärnmening som säger vad stycket handlar om. Resten av stycket
              utvecklar, förklarar och ger exempel.
            </P>
          )}
          <Vidare href={`/${s}/skrivverkstad/styckeindelning`}>Öva styckeindelning i skrivverkstaden</Vidare>
        </ExampleCard>
      </Section>

      <Minneslista
        punkter={
          s === "lagstadiet"
            ? ["Använd först, sedan och till slut.", "Skriv han, hon eller den i stället för att upprepa.", "Ny rad när något nytt händer."]
            : [
                "Sambandsmarkörer visar hur meningarna hänger ihop – variera dem.",
                "Syfta tillbaka med pronomen, synonymer och sammanfattande ord – men tydligt.",
                "Låt varje mening ta upp något från den förra.",
                "Ett stycke = ett delämne.",
              ]
        }
      />
    </>
  );
}
