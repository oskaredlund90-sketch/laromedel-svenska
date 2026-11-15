import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Markerad, Minneslista, P, Section, Tabell, Tip, Vidare, Warning, minst } from "./delar";

export function OrdklasserGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "Ord kan delas in i olika sorter. Tre viktiga sorter är substantiv, verb och adjektiv. De kallas ordklasser."
          : s === "mellanstadiet"
            ? "Alla ord hör till en ordklass. Om du vet vilken ordklass ett ord har, vet du också hur det böjs och hur det kan användas i en mening."
            : "Svenskan har tio ordklasser. Ordklassen avgörs av vad ordet betyder, hur det böjs och vilken uppgift det har i meningen. Samma ord kan byta ordklass beroende på hur det används."}
      </Intro>

      <Section title={s === "lagstadiet" ? "Tre ordklasser" : "De stora ordklasserna"}>
        <div className="grid gap-4 sm:grid-cols-3">
          <ExampleCard title="Substantiv – saker och namn">
            <P>Människor, djur, saker, platser{minst(s, "mellanstadiet") ? " och känslor" : ""}.</P>
            <Ex>hund, bok, Lisa, skola{minst(s, "mellanstadiet") ? ", glädje" : ""}</Ex>
            <Tip>Testa: kan du säga <strong>en</strong> eller <strong>ett</strong> framför? En hund, ett hus.</Tip>
          </ExampleCard>
          <ExampleCard title="Verb – det man gör">
            <P>Ord för det som händer eller det man gör.</P>
            <Ex>springa, läsa, sova, är</Ex>
            <Tip>Testa: kan du säga <strong>jag</strong> framför? Jag springer, jag läser.</Tip>
          </ExampleCard>
          <ExampleCard title="Adjektiv – beskriver">
            <P>Ord som berättar hur något är.</P>
            <Ex>stor, glad, röd, snabb</Ex>
            <Tip>Testa: passar ordet i <strong>en ___ sak</strong>? En stor sak, en röd sak.</Tip>
          </ExampleCard>
        </div>
      </Section>

      <Section title={s === "lagstadiet" ? "Ord kan ändra form" : "Böjning"}>
        <Tabell
          rubriker={["Ordklass", "Böjs efter", "Exempel"]}
          rader={
            s === "lagstadiet"
              ? [
                  ["Substantiv", "en eller flera", "en bil – två bilar"],
                  ["Verb", "nu eller förr", "jag leker – jag lekte"],
                  ["Adjektiv", "jämförelse", "stor – större – störst"],
                ]
              : [
                  ["Substantiv", "antal och bestämdhet", "bil – bilen – bilar – bilarna"],
                  ["Verb", "tid (tempus)", minst(s, "hogstadiet") ? "springa – springer – sprang – har sprungit" : "leka – leker – lekte – har lekt"],
                  ["Adjektiv", "genus, antal, jämförelse", "en stor – ett stort – stora · större – störst"],
                ]
          }
        />
        {minst(s, "mellanstadiet") && (
          <Tip>
            Adjektivet ska passa ihop med substantivet: <em>en röd bil, ett rött hus, två röda bilar, den röda bilen</em>.
          </Tip>
        )}
      </Section>

      {minst(s, "mellanstadiet") && (
        <Section title="Fler ordklasser">
          <Tabell
            rubriker={["Ordklass", "Vad gör ordet?", "Exempel"]}
            rader={[
              ["Pronomen", "ersätter eller pekar på ett substantiv", "jag, du, hon, den, det, vi, de, min, denna"],
              ["Preposition", "visar läge och förhållande", "i, på, under, bakom, till, från, med"],
              ["Adverb", "berättar hur, var, när eller hur mycket", "snabbt, här, i dag, mycket, inte"],
              ["Räkneord", "antal eller ordning", "tre, tjugo, första, tredje"],
              ...(minst(s, "hogstadiet")
                ? [
                    ["Konjunktion", "binder ihop likvärdiga led", "och, men, eller, för, så"],
                    ["Subjunktion", "inleder en bisats", "att, eftersom, när, om, medan, fast"],
                    ["Interjektion", "utrop och ljud", "aj, oj, hej, hurra, pang"],
                  ]
                : []),
            ]}
          />
          {s === "mellanstadiet" && (
            <P>På högstadiet lär du dig de tre sista ordklasserna: konjunktioner, subjunktioner och interjektioner.</P>
          )}
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Verbens former och tempus">
          <Tabell
            rubriker={["Form", "Exempel", "Används till"]}
            rader={[
              ["Infinitiv", "(att) skriva", "efter att och hjälpverb: vill skriva"],
              ["Presens", "skriver", "nu, ofta, alltid"],
              ["Preteritum", "skrev", "något som hänt"],
              ["Supinum", "(har) skrivit", "perfekt och pluskvamperfekt"],
              ["Imperativ", "skriv!", "uppmaningar"],
            ]}
          />
          <Tabell
            rubriker={["Tempus", "Exempel"]}
            rader={[
              ["Presens", "Jag skriver."],
              ["Preteritum", "Jag skrev."],
              ["Perfekt", "Jag har skrivit."],
              ["Pluskvamperfekt", "Jag hade skrivit."],
              ["Futurum", "Jag ska skriva. / Jag kommer att skriva."],
            ]}
          />
          <Warning>Håll samma tempus genom texten. Berättelser skrivs oftast i preteritum.</Warning>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Konjunktion eller subjunktion?">
          <Markerad delar={[["Jag ville gå ut"], ["men", "konjunktion"], ["det regnade."]]} />
          <Markerad delar={[["Jag stannade inne"], ["eftersom", "subjunktion"], ["det regnade."]]} />
          <P>
            Konjunktioner binder ihop två likvärdiga led (två huvudsatser, två ord). Subjunktioner inleder en bisats som inte kan stå ensam.
          </P>
          <Vidare href={`/${s}/grammatik/meningsbyggnad`}>Mer om huvudsats och bisats</Vidare>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Fördjupning: pronomen, particip och ordklassbyte">
          <ExampleCard title="Pronomenens grupper">
            <Tabell
              rubriker={["Typ", "Exempel"]}
              rader={[
                ["Personliga", "jag, mig, hon, henne, de, dem"],
                ["Possessiva", "min, din, hans, hennes, sin, deras"],
                ["Reflexiva", "sig, sin, sitt, sina"],
                ["Demonstrativa", "den här, denna, den, det"],
                ["Relativa", "som, vilken, vars"],
                ["Interrogativa", "vem, vad, vilken, hurdan"],
                ["Indefinita", "någon, ingen, alla, man, varje"],
              ]}
            />
            <Warning>
              <em>De</em> är subjektsform och <em>dem</em> objektsform: <em>De såg dem.</em> Sin syftar på subjektet: <em>Hon tog sin jacka</em>{" "}
              (sin egen), <em>Hon tog hennes jacka</em> (någon annans).
            </Warning>
          </ExampleCard>
          <ExampleCard title="Particip – verb som fungerar som adjektiv">
            <Ex>en springande hund (presens particip)</Ex>
            <Ex>en stängd dörr, ett målat hus (perfekt particip)</Ex>
            <P>Perfekt particip böjs som adjektiv: stängd – stängt – stängda.</P>
          </ExampleCard>
          <ExampleCard title="Samma ord – olika ordklass">
            <Ex>Hon är snabb. (adjektiv) – Hon springer snabbt. (adverb)</Ex>
            <Ex>Jag vet att du kommer. (subjunktion) – Det är svårt att veta. (infinitivmärke)</Ex>
            <Ex>Vi åt, så vi var mätta. (konjunktion) – Det var så kallt. (adverb)</Ex>
            <P>Avgör ordklassen utifrån vad ordet gör i just den meningen.</P>
          </ExampleCard>
        </Section>
      )}

      <Minneslista
        punkter={
          s === "lagstadiet"
            ? ["Substantiv: en hund, ett hus.", "Verb: jag springer.", "Adjektiv: en stor sak."]
            : [
                "Substantiv: en/ett framför. Verb: jag framför. Adjektiv: en ___ sak.",
                "Adjektivet böjs efter substantivet: en röd bil, ett rött hus.",
                ...(minst(s, "hogstadiet") ? ["Konjunktion binder likvärdiga led, subjunktion inleder bisats.", "Håll samma tempus genom texten."] : []),
                ...(minst(s, "gymnasiet") ? ["De = subjekt, dem = objekt. Sin syftar på subjektet."] : []),
              ]
        }
      />
    </>
  );
}
