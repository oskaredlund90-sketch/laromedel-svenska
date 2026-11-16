import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Markerad, Minneslista, P, Section, Tabell, Tip, Vidare, Warning, minst } from "./delar";

export function SatsdelarGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "En mening berättar om någon som gör något. Den som gör något och det som händer är meningens viktigaste delar."
          : "Satsdelar är de roller orden har i en mening: vem som gör något, vad som händer, vem eller vad det händer med och när, var och hur. När du kan satsdelarna kan du prata om hur meningar är byggda – och bygga dem på nya sätt."}
      </Intro>

      <Section title={s === "lagstadiet" ? "Vem gör något? Vad händer?" : "Subjekt och predikat – meningens kärna"}>
        <ExampleCard title={s === "lagstadiet" ? "Två frågor hittar kärnan" : "Predikatet är verbet eller verben, subjektet är den som gör"}>
          <P>
            {s === "lagstadiet"
              ? "Fråga först: Vad händer? Då hittar du verbet. Fråga sedan: Vem eller vad gör det? Då hittar du den som gör något."
              : "Börja med det böjda verbet – det är alltid en del av predikatet. Fråga sedan vem eller vad + verbet för att hitta subjektet."}
          </P>
          <Markerad delar={[["Hunden", s === "lagstadiet" ? "vem?" : "subjekt"], ["skäller", s === "lagstadiet" ? "vad händer?" : "predikat"]]} />
          <Markerad delar={[["Min lillasyster", s === "lagstadiet" ? "vem?" : "subjekt"], ["sover", s === "lagstadiet" ? "vad händer?" : "predikat"]]} />
          {s === "lagstadiet" && (
            <Tip>
              Den som gör något står inte alltid först. I <em>I dag spelar Ali fotboll</em> och <em>I korgen sover katten</em> kommer den som gör
              något efter verbet. Fråga: Vem sover? – Katten.
            </Tip>
          )}
          {minst(s, "mellanstadiet") && (
            <Tip>
              Subjektet kan vara flera ord (min lillasyster) och behöver inte stå först. I <em>I går köpte pappa en cykel</em> är pappa subjekt:
              Vem köpte? – Pappa.
            </Tip>
          )}
          {minst(s, "hogstadiet") && (
            <P>
              Predikatet kan bestå av flera verb: <strong>har ätit</strong>, <strong>ska åka</strong>, <strong>kan ha glömt</strong>. Det
              finita (böjda) verbet är det första: har, ska, kan. Alla verben tillsammans är predikatet.
            </P>
          )}
        </ExampleCard>
      </Section>

      {minst(s, "mellanstadiet") && (
        <Section title="Objekt och adverbial">
          <div className="grid gap-4 sm:grid-cols-2">
            <ExampleCard title="Objekt – det handlingen riktas mot">
              <P>Fråga: vem eller vad + predikat + subjekt?</P>
              <Markerad delar={[["Elin", "S"], ["läser", "P"], ["en bok", "O"]]} />
              <P>Vad läser Elin? – En bok.</P>
            </ExampleCard>
            <ExampleCard title="Adverbial – när, var, hur, varför">
              <P>Adverbial berättar om omständigheterna. En mening kan ha flera.</P>
              <Markerad delar={[["I går", "A"], ["åt", "P"], ["vi", "S"], ["glass", "O"], ["på stranden", "A"]]} />
              <P>När? – I går. Var? – På stranden.</P>
            </ExampleCard>
          </div>
          <Tip>
            Arbeta i den här ordningen: <strong>1.</strong> predikat <strong>2.</strong> subjekt <strong>3.</strong> objekt{" "}
            {minst(s, "hogstadiet") ? "och indirekt objekt " : ""}
            <strong>4.</strong> det som är kvar är oftast adverbial.
          </Tip>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Indirekt objekt och predikativ">
          <div className="grid gap-4 sm:grid-cols-2">
            <ExampleCard title="Indirekt objekt – mottagaren">
              <P>Står ofta mellan predikatet och objektet. Fråga: till eller åt vem?</P>
              <Markerad delar={[["Läraren", "S"], ["gav", "P"], ["eleverna", "IO"], ["en läxa", "O"]]} />
              <P>Vanliga verb: ge, skicka, visa, låna ut, berätta, önska.</P>
            </ExampleCard>
            <ExampleCard title="Predikativ – beskriver subjektet">
              <P>Står efter vara, bli, heta, verka, kallas, förefalla. Predikativet är samma sak som subjektet.</P>
              <Markerad delar={[["Maten", "S"], ["var", "P"], ["god", "PV"]]} />
              <Markerad delar={[["Hon", "S"], ["blev", "P"], ["läkare", "PV"]]} />
            </ExampleCard>
          </div>
          <Warning>
            Blanda inte ihop objekt och predikativ. <em>Hon träffade en läkare</em> – läkaren är någon annan (objekt). <em>Hon blev läkare</em> –
            hon själv (predikativ). Predikativet böjs efter subjektet: <em>Huset är rött, husen är röda.</em>
          </Warning>
          <ExampleCard title="Satsadverbial – inte, aldrig, kanske">
            <P>
              Satsadverbial säger något om hela satsen: inte, aldrig, alltid, kanske, tyvärr, förmodligen, säkert. De är viktiga för ordföljden i
              bisatser – se BIFF-regeln under Meningsbyggnad.
            </P>
            <Markerad delar={[["Hon", "S"], ["har", "P"], ["förmodligen", "A (satsadverbial)"], ["glömt", "P"], ["mötet", "O"]]} />
          </ExampleCard>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Fraser och attribut">
          <P>
            En satsdel kan vara ett enda ord eller en hel fras. En <strong>nominalfras</strong> har ett substantiv eller pronomen som huvudord.
            Orden runt huvudordet som beskriver det kallas <strong>attribut</strong>.
          </P>
          <Markerad delar={[["Den", "attribut"], ["lilla röda", "attribut"], ["stugan", "huvudord"], ["vid sjön", "attribut"]]} />
          <Tabell
            rubriker={["Attribut", "Exempel"]}
            rader={[
              ["Före huvudordet", "en spännande film, tre katter, Lisas cykel, min bror"],
              ["Efter huvudordet", "huset på hörnet, boken om rymden, en film som skrämde alla"],
            ]}
          />
          <Tip>
            Hela frasen är en satsdel: <em>Den lilla röda stugan vid sjön</em> brann ner – allt det är subjekt. Leta upp huvudordet när du ska
            böja verb och adjektiv rätt: <em>Resultaten av undersökningen var oväntade.</em>
          </Tip>
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Agent, formellt och egentligt subjekt">
          <div className="grid gap-4 sm:grid-cols-2">
            <ExampleCard title="Agent – vem gör det i passiv form?">
              <Markerad delar={[["Boken", "S"], ["skrevs", "P"], ["av Selma Lagerlöf", "agent"]]} />
              <P>Agenten inleds med av och anger den som utför handlingen. Ofta utelämnas den: Boken skrevs 1906.</P>
            </ExampleCard>
            <ExampleCard title="Formellt och egentligt subjekt">
              <Markerad delar={[["Det", "FS"], ["sitter", "P"], ["en fågel", "ES"], ["på taket", "A"]]} />
              <P>
                Det fyller subjektsplatsen, men den som faktiskt sitter är en fågel. Konstruktionen låter ny information komma senare i
                meningen.
              </P>
            </ExampleCard>
          </div>
          <ExampleCard title="Bisatser som satsdelar">
            <P>En hel bisats kan vara en satsdel. Analysera bisatsen som en enhet först – sedan dess inre delar.</P>
            <Tabell
              rubriker={["Mening", "Bisatsen är …"]}
              rader={[
                ["Att du kom gladde mig.", "subjekt"],
                ["Jag vet att du har rätt.", "objekt"],
                ["När det blev mörkt gick vi hem.", "adverbial"],
                ["Problemet är att tiden inte räcker.", "predikativ"],
              ]}
            />
          </ExampleCard>
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <Section title="Varför ska man kunna satsdelar?">
          <P>
            Satsdelarna hjälper dig att variera texten. Samma innehåll kan börja med olika satsdelar beroende på vad du vill lyfta fram:
          </P>
          <Ex>Vi åkte till fjällen i februari. (neutralt – subjektet först)</Ex>
          <Ex>I februari åkte vi till fjällen. (tiden först – passar när texten berättar i tidsordning)</Ex>
          {minst(s, "hogstadiet") && <Ex>Till fjällen åkte vi i februari – inte till Spanien. (platsen betonas)</Ex>}
          <Vidare href={`/${s}/grammatik/meningsbyggnad`}>Mer om ordföljd och variation i Meningsbyggnad</Vidare>
        </Section>
      )}

      <Minneslista
        punkter={
          s === "lagstadiet"
            ? ["Vad händer? → verbet (predikat).", "Vem eller vad gör det? → den som gör något (subjekt).", "En hel mening har båda."]
            : [
                "Leta upp predikatet (verbet) först.",
                "Subjekt: vem/vad + predikat?",
                "Objekt: vem/vad + predikat + subjekt?",
                ...(minst(s, "hogstadiet") ? ["Indirekt objekt = mottagaren. Predikativ = beskriver subjektet efter vara/bli."] : []),
                "Adverbial: när, var, hur, varför.",
                ...(minst(s, "gymnasiet") ? ["Agent: av + den som utför handlingen i passiv. Det kan vara formellt subjekt."] : []),
              ]
        }
      />
    </>
  );
}
