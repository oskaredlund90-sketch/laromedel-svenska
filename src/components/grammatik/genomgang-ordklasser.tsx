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
            <Tip>Testa: kan du säga <strong>en</strong> eller <strong>ett</strong> framför? En hund, ett hus. Namn som Lisa och Malmö är också substantiv, fast testet inte fungerar på dem.</Tip>
          </ExampleCard>
          <ExampleCard title="Verb – det man gör eller det som händer">
            <P>Ord för det som händer eller det man gör.</P>
            <Ex>springa, läsa, sova, är</Ex>
            <Tip>Testa: kan du säga <strong>jag</strong> framför? Jag springer, jag läser.</Tip>
          </ExampleCard>
          <ExampleCard title="Adjektiv – beskriver">
            <P>Ord som berättar hur något är.</P>
            <Ex>stor, glad, röd, snabb</Ex>
            <Tip>Testa: passar ordet i <strong>en ___ katt</strong>? En stor katt, en glad katt.</Tip>
          </ExampleCard>
        </div>
      </Section>

      {minst(s, "hogstadiet") && (
        <Section title="När testen inte räcker – titta på böjningen">
          <P>
            Testen ovan fungerar för de flesta ord, men inte för alla. Abstrakta substantiv som <em>mod</em> och <em>demokrati</em>, verb som{" "}
            <em>vara</em>, <em>heta</em> och <em>kunna</em>, och adjektiv som <em>död</em> och <em>nuvarande</em> passar dåligt i testerna. Titta
            då på hur ordet böjs och vad det gör i meningen:
          </P>
          <Tabell
            rubriker={["Ordklass", "Böjs efter", "Exempel"]}
            rader={[
              ["Substantiv", "bestämd form och plural", "mod – modet, demokrati – demokratier"],
              ["Verb", "tempus", "vara – var – har varit, kan – kunde"],
              ["Adjektiv", "genus och antal (kongruens)", "en död fågel – ett dött träd – döda fåglar"],
            ]}
          />
          <P>
            <strong>Hjälpverb</strong> är också verb: <em>har, hade, ska, kan, vill, måste, får</em>. De står tillsammans med ett annat verb och
            visar till exempel tid eller vilja: <em>Vi har planerat. Hon ska åka.</em>
          </P>
        </Section>
      )}

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
              ["Konjunktion", "binder ihop likvärdiga led", "och, men, eller, för, så"],
              ...(minst(s, "hogstadiet")
                ? [
                    ["Subjunktion", "inleder en bisats", "att, eftersom, när, om, medan, fast"],
                    ["Interjektion", "utrop och ljud", "aj, oj, hej, hurra, pang"],
                  ]
                : []),
            ]}
          />
          {minst(s, "hogstadiet") && (
            <P>
              Artiklarna <em>en, ett</em> och <em>den, det, de</em> räknas i skolgrammatiken till pronomenen. Ordningstalen (första, andra) räknas
              här till räkneorden – i Svenska Akademiens grammatik räknas de som adjektiv, eftersom de böjs och används som adjektiv.
            </P>
          )}
          <Tip>
            <strong>De eller dem?</strong> De gör något: <em>De spelar fotboll.</em> Dem händer det något med: <em>Jag ser dem.</em> Testa att
            byta mot <em>vi</em> och <em>oss</em>: vi spelar → de spelar, jag ser oss → jag ser dem. Skriv inte <em>dom</em> i en text. Före ett adjektiv eller <em>flesta</em> blir det alltid de: <em>de nya filmerna, de flesta</em>.
          </Tip>
          {s === "mellanstadiet" && (
            <P>På högstadiet lär du dig de två sista ordklasserna: subjunktioner och interjektioner.</P>
          )}
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
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

      {minst(s, "mellanstadiet") && (
        <Section title="Kongruens – orden ska passa ihop">
          <P>
            Adjektiv{minst(s, "hogstadiet") ? " och particip" : ""} ska passa ihop med det substantiv de beskriver. Det kallas kongruens. Det
            gäller både när adjektivet står framför substantivet och när det kommer efter <em>är</em>, <em>var</em> eller <em>blir</em>.
          </P>
          <Tabell
            rubriker={["", "en-ord", "ett-ord", "flera"]}
            rader={[
              ["Framför substantivet", "en stor bil", "ett stort hus", "stora bilar"],
              ["Efter är/var/blir", "bilen är stor", "huset är stort", "bilarna är stora"],
              ...(minst(s, "hogstadiet") ? [["Particip", "dörren är stängd", "fönstret är stängt", "dörrarna är stängda"]] : []),
            ]}
          />
          <Warning>
            Vanliga fel: <em>Huset är stor</em> → <em>Huset är stort</em>. <em>Vi är glad</em> → <em>Vi är glada</em>. Fråga: vem eller vad
            är det som beskrivs?
          </Warning>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Sin eller hans, hennes, deras?">
          <ExampleCard title="Sin syftar tillbaka på subjektet">
            <Ex>Elsa tog sin jacka. (Elsas egen jacka)</Ex>
            <Ex>Elsa tog hennes jacka. (någon annans jacka)</Ex>
            <P>
              Använd <strong>sin, sitt, sina</strong> när ägaren är subjektet i samma sats. Använd <strong>hans, hennes, deras</strong> när ägaren
              är någon annan.
            </P>
            <Warning>
              Sin kan inte stå i subjektet: <em>Ali och sin syster kom</em> är fel. Skriv <em>Ali och hans syster kom</em>.
            </Warning>
          </ExampleCard>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Aktiv och passiv form">
          <div className="grid gap-4 sm:grid-cols-2">
            <ExampleCard title="Aktiv – den som gör något är subjekt">
              <Markerad delar={[["Kommunen", "S"], ["bygger", "P"], ["en ny skola", "O"]]} />
            </ExampleCard>
            <ExampleCard title="Passiv – det som påverkas är subjekt">
              <Markerad delar={[["En ny skola", "S"], ["byggs", "P"], ["av kommunen"]]} />
            </ExampleCard>
          </div>
          <Tabell
            rubriker={["Så bildas passiv", "Exempel"]}
            rader={[
              ["verbet + s", "byggs, byggdes, har byggts"],
              ["bli/vara + perfekt particip", "blev byggd, är byggd"],
            ]}
          />
          <Tip>
            Passiv passar i faktatexter när det viktiga är vad som händer: <em>Proven analyserades.</em> Men passiv kan också dölja vem som
            är ansvarig: <em>Misstag har begåtts.</em> – av vem?
          </Tip>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Partikelverb och particip">
          <div className="grid gap-4 sm:grid-cols-2">
            <ExampleCard title="Partikelverb – verb + betonat småord">
              <Ex>tycka om, ge upp, stänga av, komma fram, hålla med</Ex>
              <P>
                Partikeln är betonad och hör ihop med verbet. Den ändrar ofta betydelsen: <em>Jag tycker om glass</em> (gillar) – <em>Jag
                tycker att glass är gott</em>. Partikelverb skrivs isär.
              </P>
            </ExampleCard>
            <ExampleCard title="Particip – verb som fungerar som adjektiv">
              <Ex>en springande hund, ett skrattande barn (presens particip)</Ex>
              <Ex>en stängd dörr, ett målat hus (perfekt particip)</Ex>
              <P>Perfekt particip böjs som adjektiv: stängd – stängt – stängda.</P>
            </ExampleCard>
          </div>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Fördjupning: pronomen och ordklassbyte">
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
              <em>De</em> är subjektsform och <em>dem</em> objektsform: <em>De såg dem.</em> Med <em>varje</em> och <em>var och en</em> blir det
              singular: <em>Varje elev tar med sin dator</em> – inte <em>deras</em>.
            </Warning>
          </ExampleCard>
          <ExampleCard title="Verbets modus och aspekt">
            <Tabell
              rubriker={["Modus", "Används för", "Exempel"]}
              rader={[
                ["Indikativ", "det som är eller händer – den vanliga formen", "Hon läser. Han kom i går."],
                ["Imperativ", "uppmaningar", "Läs! Stäng dörren."],
                ["Konjunktiv", "önskan eller något overkligt – mest i fasta uttryck", "Leve kungen! Gud bevare oss! Om jag vore du …"],
              ]}
            />
            <P>
              Aspekt visar om en handling är pågående eller avslutad: <em>Hon höll på att läsa</em>, <em>Hon satt och läste</em> (pågående) – <em>Hon läste ut boken</em>{" "}
              (avslutad).
            </P>
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
            ? ["Substantiv: en hund, ett hus.", "Verb: jag springer.", "Adjektiv: en stor katt."]
            : [
                "Substantiv: en/ett framför. Verb: jag framför. Adjektiv: en ___ katt.",
                "Adjektivet böjs efter substantivet: en röd bil, ett rött hus.",
                "Kongruens: huset är stort, bilarna är stora.",
                ...(minst(s, "hogstadiet")
                  ? [
                      "Konjunktion binder likvärdiga led, subjunktion inleder bisats.",
                      "Sin syftar på subjektet: Elsa tog sin jacka. Sin står aldrig i subjektet.",
                      "Passiv: det som påverkas blir subjekt – skolan byggs.",
                      "Håll samma tempus genom texten.",
                    ]
                  : []),
                ...(minst(s, "gymnasiet") ? ["De = subjekt, dem = objekt. Varje elev … sin, inte deras."] : []),
              ]
        }
      />
    </>
  );
}
