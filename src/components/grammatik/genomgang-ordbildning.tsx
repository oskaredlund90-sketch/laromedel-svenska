import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Minneslista, P, Section, Tabell, Tip, Vidare, Warning, minst } from "./delar";

export function OrdbildningGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "mellanstadiet"
          ? "Nya ord bildas hela tiden. Det vanligaste sättet i svenskan är att sätta ihop ord som redan finns. Om du förstår hur orden är byggda kan du lista ut vad nya ord betyder."
          : "Ordförrådet växer genom sammansättning, avledning, förkortning och lån från andra språk. Att känna igen hur ord bildas hjälper dig att förstå nya ord, stava dem och välja rätt ord i rätt sammanhang."}
      </Intro>

      <Section title="Sammansättning">
        <ExampleCard title="Två eller flera ord blir ett">
          <Ex>bok + hylla = bokhylla</Ex>
          <Ex>barn + bok + hylla = barnbokshylla</Ex>
          <P>Det sista ordet (efterleden) säger vad det är. Det första (förleden) säger vilken sort.</P>
          <Warning>
            Särskrivning ändrar betydelsen: <em>en brun hårig hund</em> (brun och hårig) – <em>en brunhårig hund</em> (med brunt hår).
          </Warning>
        </ExampleCard>
        <ExampleCard title="Fogar mellan orden">
          <Tabell
            rubriker={["Fog", "Exempel"]}
            rader={[
              ["Ingen fog", "fotboll, solsken, bokhylla"],
              ["-s-", "tidningsartikel, arbetsplats, fotbollsplan"],
              ...(minst(s, "hogstadiet")
                ? [
                    ["-a-, -u-, -o-", "barnavård, gatubelysning, kyrkogård"],
                    ["Förleden kortas", "skola + gård = skolgård, gata + sten = gatsten"],
                  ]
                : [["Förleden kortas", "skola + gård = skolgård"]]),
            ]}
          />
          <Tip>Lyssna – hörs ett s mellan leden, skriv det: arbet<strong>s</strong>plats.</Tip>
        </ExampleCard>
      </Section>

      <Section title="Avledning">
        <P>Ett prefix före eller ett suffix efter ordet ger ett nytt ord – ofta med ny betydelse eller ny ordklass.</P>
        <Ex>o + vänlig = ovänlig · vän + skap = vänskap · läs + bar = läsbar</Ex>
        <Vidare href={`/${s}/grammatik/morfem`}>Prefix, suffix och rot i Ordets byggstenar</Vidare>
      </Section>

      <Section title="Förkortningar">
        <Tabell
          rubriker={["Typ", "Exempel"]}
          rader={[
            ["Med punkt", "t.ex. (till exempel), bl.a. (bland annat), m.m. (med mera), s.k. (så kallad)"],
            ["Initialord – läses bokstav för bokstav", "SVT, FN, EU, tv"],
            ...(minst(s, "hogstadiet")
              ? [
                  ["Akronymer – läses som ett ord", "Nato, Unicef, Saab"],
                  ["Kortord", "bil (automobil), kilo (kilogram), foto (fotografi)"],
                ]
              : []),
          ]}
        />
      </Section>

      {minst(s, "hogstadiet") && (
        <Section title="Lånord">
          <Tabell
            rubriker={["Språk", "Period", "Exempel"]}
            rader={[
              ["Latin och grekiska", "medeltiden och framåt", "skola, kyrka, biologi, demokrati"],
              ["Lågtyska", "1300–1500-talet (Hansan)", "handel, betala, köpman, borgmästare"],
              ["Franska", "1700-talet", "restaurang, paraply, fåtölj, frisör"],
              ["Engelska", "1900-talet och i dag", "jobb, mejl, dejt, streama"],
            ]}
          />
          <P>Lånord anpassas ofta till svensk stavning och böjning med tiden: e-mail → mejl, mailar → mejlar.</P>
          <Vidare href={`/${s}/sprakhistoria`}>Språkhistoria</Vidare>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Nyord och ordbildning i fackspråk">
          <Tabell
            rubriker={["Ordbildningssätt", "Exempel"]}
            rader={[
              ["Låneöversättning (översätter ordets delar)", "skyskrapa (skyscraper), hjärntvätt (brainwashing)"],
              ["Teleskopord (två ord smälter ihop)", "motell (motor + hotell), brunch (breakfast + lunch)"],
              ["Konversion (byter ordklass utan ändelse)", "en google → att googla, ett sms → att sms:a"],
              ["Nybildning av svenska morfem", "klimatsmart, coronatrött, flygskam"],
              ["Fackord av grekiska/latinska morfem", "fotosyntes, biodiversitet, infrastruktur"],
            ]}
          />
          <P>
            Språkrådet publicerar varje år en nyordslista. Fundera på vilka ord som blir kvar – och vilka svenska ord som kan ersätta engelska lån
            i formella texter.
          </P>
        </Section>
      )}

      <Minneslista
        punkter={[
          "Sammansatta ord skrivs ihop – efterleden säger vad det är.",
          "Hörs ett s mellan leden, skriv det.",
          "Prefix och suffix bildar nya ord: ovänlig, vänskap.",
          "Förkortningar med punkt: t.ex., bl.a., m.m.",
          ...(minst(s, "hogstadiet") ? ["Lånord kommer från latin, lågtyska, franska och engelska – och försvenskas med tiden."] : []),
        ]}
      />
    </>
  );
}
