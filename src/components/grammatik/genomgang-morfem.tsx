import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Markerad, Minneslista, P, Section, Tabell, Tip, Vidare, minst } from "./delar";

export function MorfemGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "Många ord är byggda av mindre delar – som lego. Om du ser delarna blir det lättare att förstå och stava orden."
          : "Ord är byggda av byggstenar som kallas morfem: en rot som bär grundbetydelsen och delar som läggs till före eller efter. Den som ser byggstenarna kan lista ut vad nya ord betyder och stava dem säkrare – roten stavas nämligen oftast likadant i alla ord."}
      </Intro>

      <Section title="Sammansatta ord">
        <ExampleCard title={s === "lagstadiet" ? "Två ord blir ett" : "Det sista ordet bestämmer"}>
          <Markerad delar={[["sol", "ord 1"], ["+"], ["sken", "ord 2"], ["="], ["solsken"]]} />
          <Markerad delar={[["fot", "ord 1"], ["+"], ["boll", "ord 2"], ["="], ["fotboll"]]} />
          <P>
            {s === "lagstadiet"
              ? "Sammansatta ord skrivs ihop. Det sista ordet säger vad det är: en snögubbe är en gubbe av snö."
              : "Efterleden säger vad det är, förleden vilken sort: en äppelpaj är en paj, ett pajäpple är ett äpple. Sammansatta ord skrivs ihop."}
          </P>
          {minst(s, "mellanstadiet") && (
            <Tip>
              Ibland behövs ett s mellan leden, ett foge-s: fotboll<strong>s</strong>plan, tidning<strong>s</strong>artikel. Lyssna – hörs ett s,
              ska det skrivas.
            </Tip>
          )}
        </ExampleCard>
      </Section>

      <Section title={s === "lagstadiet" ? "Ordet och ändelsen" : "Rot och böjningsändelser"}>
        <ExampleCard title={s === "lagstadiet" ? "Ändelsen berättar något" : "Böjning ger nya former av samma ord"}>
          <Markerad delar={[["bil", "rot"], ["ar", "flera"]]} />
          <Markerad delar={[["hund", "rot"], ["en", "bestämd"]]} />
          <Markerad delar={[["lek", "rot"], ["te", "dåtid"]]} />
          <P>
            {s === "lagstadiet"
              ? "Stava först själva ordet. Lägg sedan till ändelsen: hopp + ar = hoppar."
              : "Böjningsändelser ändrar inte ordets betydelse eller ordklass – bara formen: antal, bestämdhet, tid eller grad."}
          </P>
          {minst(s, "mellanstadiet") && (
            <Tabell
              rubriker={["Ordklass", "Böjning", "Exempel"]}
              rader={[
                ["Substantiv", "plural, bestämd form, genitiv", "hund-ar-na-s"],
                ["Verb", "presens, preteritum, supinum", "hopp-ar, hopp-ade, hopp-at"],
                ["Adjektiv", "neutrum, plural, komparation", "stor-t, stor-a, stör-re, stör-st"],
              ]}
            />
          )}
        </ExampleCard>
      </Section>

      {minst(s, "mellanstadiet") && (
        <Section title="Prefix och suffix – avledningar">
          <div className="grid gap-4 sm:grid-cols-2">
            <ExampleCard title="Prefix – före roten">
              <Markerad delar={[["o", "prefix"], ["glad", "rot"]]} />
              <Tabell
                rubriker={["Prefix", "Betyder", "Exempel"]}
                rader={[
                  ["o-", "inte", "olycklig, omöjlig"],
                  ["miss-", "fel", "missförstå, misslyckas"],
                  ["be-", "göra till", "beskriva, befria"],
                  ["för-", "mer/förändring", "förstora, förklara"],
                  ...(minst(s, "hogstadiet") ? [["åter-", "igen", "återvinna, återfå"], ["an-", "riktning mot", "ankomma, angripa"], ["er-", "göra till, nå fram till", "erkänna, ersätta, erövra"]] : []),
                ]}
              />
            </ExampleCard>
            <ExampleCard title="Suffix – efter roten">
              <Markerad delar={[["vän", "rot"], ["lig", "suffix"]]} />
              <Tabell
                rubriker={["Suffix", "Bildar", "Exempel"]}
                rader={[
                  ["-lig", "adjektiv", "vänlig, tydlig"],
                  ["-het", "substantiv", "frihet, trygghet"],
                  ["-skap", "substantiv", "vänskap, kunskap"],
                  ["-are", "person", "läsare, bagare"],
                  ["-bar", "adjektiv: går att", "läsbar, ätbar"],
                  ...(minst(s, "hogstadiet") ? [["-ning/-ing", "substantiv av verb", "beskrivning, förklaring"]] : []),
                ]}
              />
            </ExampleCard>
          </div>
          <Tip>
            Suffix kan byta ordklass: <em>vän</em> (substantiv) → <em>vänlig</em> (adjektiv) → <em>vänlighet</em> (substantiv). Bygg vidare och se
            vad som händer!
          </Tip>
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <Section title="Stava med hjälp av roten">
          <P>Roten stavas oftast likadant i alla ord som bildas av den. Hitta roten – då vet du hur början av ordet stavas.</P>
          <Ex>glad → glatt (d + t blir tt)</Ex>
          <Ex>tänka → tänk + te = tänkte</Ex>
          <Ex>skriv → skriva, beskriva, skrivare, beskrivning</Ex>
          {minst(s, "hogstadiet") && (
            <>
              <Ex>känna → känd, kände (dubbelteckningen försvinner före en annan konsonant)</Ex>
              <Ex>hänsyn → hänsynsfull, hänsynslös (roten oförändrad)</Ex>
            </>
          )}
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Böjning eller avledning?">
          <Tabell
            rubriker={["", "Böjningsmorfem", "Avledningsmorfem"]}
            rader={[
              ["Vad gör det?", "ny form av samma ord", "nytt ord"],
              ["Byter ordklass?", "aldrig", "ofta"],
              ["Exempel", "bil-ar, hopp-ade, glad-are", "vän-lig, fri-het, läs-are"],
              ["Placering", "sist i ordet", "närmare roten"],
            ]}
          />
          <P>
            I <strong>vän-lig-ast-e</strong> är -lig en avledning (nytt adjektiv) och -ast och -e böjningar. Avledningen kommer alltid närmast roten.
          </P>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Fria och bundna morfem – och lånmorfem">
          <ExampleCard title="Morfemtyper">
            <P>Fria morfem kan stå som egna ord (hus, glad). Bundna kan inte stå ensamma (o-, -het, -ar).</P>
            <P>
              Samma morfem kan ha olika former, allomorfer: pluralen -ar, -or, -er, -n och noll (bil-ar, flick-or, katt-er, äpple-n, hus).
            </P>
          </ExampleCard>
          <ExampleCard title="Grekiska och latinska byggstenar i fackspråk">
            <Tabell
              rubriker={["Morfem", "Betydelse", "Exempel"]}
              rader={[
                ["bio-", "liv", "biologi, biografi"],
                ["-logi", "lära", "psykologi, ekologi"],
                ["tele-", "fjärran", "telefon, teleskop"],
                ["inter-", "mellan", "internationell, interaktion"],
                ["trans-", "över, genom", "transport, transparent"],
                ["-krati", "styre", "demokrati, byråkrati"],
              ]}
            />
            <P>Morfemen hjälper dig att förstå nya fackord i alla ämnen.</P>
          </ExampleCard>
        </Section>
      )}

      <p className="mb-8">
        <Vidare href={`/${s}/grammatik/stavning`}>Öva mer på stavning</Vidare>
        {minst(s, "mellanstadiet") && (
          <span className="ml-6">
            <Vidare href={`/${s}/grammatik/ordbildning`}>Ordbildning, förkortningar och lånord</Vidare>
          </span>
        )}
      </p>

      <Minneslista
        punkter={
          s === "lagstadiet"
            ? ["Sammansatta ord skrivs ihop: fotboll.", "Stava ordet först, lägg sedan till ändelsen: hopp + ar.", "-ar och -or kan betyda flera, -te och -de att det har hänt."]
            : [
                "Roten bär betydelsen – och stavas oftast likadant i alla ord.",
                "Prefix före roten, suffix efter.",
                "Böjning = ny form, avledning = nytt ord.",
                "Sammansatta ord skrivs ihop. Efterleden bestämmer vad det är.",
              ]
        }
      />
    </>
  );
}
