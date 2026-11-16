import type { AgeGroup } from "@/lib/supabase/types";
import { ExampleCard, Ex, Intro, Minneslista, P, Section, Tabell, Tip, Vidare, Warning, minst } from "./delar";

export function StavningGenomgang({ stadie }: { stadie: AgeGroup }) {
  const s = stadie;
  return (
    <>
      <Intro>
        {s === "lagstadiet"
          ? "Många ord stavas som de låter – men inte alla. Här lär du dig några regler som hjälper dig att stava rätt."
          : "Svensk stavning följer ofta uttalet, men ett ljud kan stavas på flera sätt. Med några regler, kunskap om ordets byggstenar och de vanligaste undantagen blir du en säkrare stavare."}
      </Intro>

      <Section title="Kort och lång vokal – dubbelteckning">
        <ExampleCard title="Kort vokal = dubbel konsonant">
          <Tabell
            rubriker={["Lång vokal", "Kort vokal"]}
            rader={[
              ["glas", "glass"],
              ["tak", "tack"],
              ["vila", "villa"],
              ["hopa", "hoppa"],
            ]}
          />
          <P>Lyssna på vokalen. Är den kort, skriver du ofta två konsonanter efter: hoppa, glass, komma.</P>
          {minst(s, "mellanstadiet") && <Tip>K-ljudet efter kort vokal skrivs ck: tack, ficka, rocka.</Tip>}
        </ExampleCard>
        {minst(s, "mellanstadiet") && (
          <Warning>
            Undantag med m och n: i slutet av ord skrivs oftast bara ett m eller n: <em>hem, rum, vem, fram, man, min</em>. Men när ordet böjs kommer
            dubbelteckningen tillbaka: <em>hemma, rummet, mannen</em>.
          </Warning>
        )}
      </Section>

      <Section title="Ljud som kan stavas på flera sätt">
        <div className="grid gap-4 sm:grid-cols-2">
          <ExampleCard title="Sje-ljudet">
            <Ex>sj: sjö, sjunga</Ex>
            <Ex>sk före e, i, y, ä, ö: sked, skina, skön</Ex>
            <Ex>stj: stjärna, stjäla</Ex>
            {minst(s, "mellanstadiet") && <Ex>skj: skjorta, skjuta · sch: dusch</Ex>}
            {minst(s, "mellanstadiet") && <Ex>-tion i slutet av ord: lektion, station, information</Ex>}
            {minst(s, "hogstadiet") && <Ex>-sion: version, explosion · ch, sh: choklad, show</Ex>}
          </ExampleCard>
          <ExampleCard title="Tje-ljudet">
            <Ex>tj: tjugo, tjej</Ex>
            <Ex>k före e, i, y, ä, ö: kyrka, kind, kär</Ex>
            <Ex>kj: kjol, kjortel{minst(s, "mellanstadiet") ? " · ch: check" : ""}</Ex>
          </ExampleCard>
          {minst(s, "mellanstadiet") && (
            <ExampleCard title="J-ljudet">
              <Ex>j: ja, jul · g: göra, ge</Ex>
              <Ex>hj: hjärta, hjälp · lj: ljus, ljuga</Ex>
              <Ex>dj: djur, djup · gj: gjorde</Ex>
              <P>De vanligaste orden med hj, lj, dj och gj får man lära sig utantill.</P>
            </ExampleCard>
          )}
          <ExampleCard title="Ng och nk">
            <Ex>ring, lång, sjunga</Ex>
            <Ex>bank, tänka, sjunka</Ex>
            <P>Ng-ljudet stavas ng. Före k skrivs bara n: tänka (inte tängka).</P>
          </ExampleCard>
          {minst(s, "mellanstadiet") && (
            <ExampleCard title="O eller å?">
              <Ex>Å-ljud skrivet med o: sova, komma, son, mormor</Ex>
              <Ex>Å-ljud skrivet med å: båt, gå, måla, sång</Ex>
              <P>Många vanliga ord har å-ljud men stavas med o. Lär dig dem som ordbilder.</P>
            </ExampleCard>
          )}
        </div>
      </Section>

      <Section title="Stor eller liten bokstav">
        <Tabell
          rubriker={["Stor bokstav", "Liten bokstav"]}
          rader={[
            ["Första ordet i en mening", "Veckodagar: måndag"],
            ["Namn på personer och djur: Lisa, Sigge", "Månader: april"],
            ["Platser och länder: Sverige, Malmö", minst(s, "mellanstadiet") ? "Språk och folk: svenska, norrmän" : "Högtider: jul, påsk"],
            ...(minst(s, "mellanstadiet") ? [["Gator och byggnader: Storgatan, Globen", "Högtider och helgdagar: jul, påsk, midsommarafton"]] : []),
            ...(minst(s, "hogstadiet")
              ? [
                  ["Organisationer: Förenta nationerna, Riksdagen", "Nationaliteter och adjektiv av namn: svensk, engelsk"],
                  ["Titlar på böcker och filmer – bara första ordet: Röda rummet, Bröderna Lejonhjärta", "Titlar före namn: kung Carl Gustaf, doktor Ek"],
                ]
              : []),
          ]}
        />
      </Section>

      {minst(s, "hogstadiet") && (
        <Section title="Stava med hjälp av roten">
          <P>
            Roten stavas oftast likadant i alla ord som bildas av den. Är du osäker på ett ord – leta upp roten och en annan form av ordet.
          </P>
          <Ex>glad → glatt (d + t blir tt), känna → kände (nn blir n före en konsonant)</Ex>
          <Ex>skriv → beskriva, skrivare, beskrivning – roten stavas likadant</Ex>
          <Ex>damm → dammet, dammig: två m hörs i de böjda formerna, därför två m även i damm</Ex>
          <Vidare href={`/${s}/grammatik/morfem`}>Mer om rot, prefix och suffix i Ordets byggstenar</Vidare>
        </Section>
      )}

      {minst(s, "mellanstadiet") && (
        <Section title="Sammansatta ord skrivs ihop">
          <Ex>fotbollsmatch – inte fotbolls match</Ex>
          <Ex>rökfri (utan rök) – rök fri (röken är gratis)</Ex>
          <P>Särskrivning kan ändra betydelsen. Om orden tillsammans betecknar en sak, skriv ihop dem.</P>
          <Vidare href={`/${s}/grammatik/morfem`}>Ordets byggstenar – stava med hjälp av morfem</Vidare>
        </Section>
      )}

      {minst(s, "hogstadiet") && (
        <Section title="Vanliga förväxlingar">
          <Tabell
            rubriker={["Ord", "Används", "Exempel"]}
            rader={[
              ["de / dem", "de = subjekt, dem = objekt", "De såg dem. (Byt mot vi/oss: vi = de, oss = dem.)"],
              ["var / vart", "var = plats, vart = riktning", "Var bor du? Vart ska du?"],
              ["då / så", "då = vid den tiden, så = följd", "Då kom han. Det regnade, så vi gick in."],
              ["hen / hon / han", "hen när könet är okänt eller oviktigt", "En elev glömde sin väska. Hen …"],
              ["egentligen / igentligen", "rätt stavning: egentligen", "Jag ville egentligen stanna."],
            ]}
          />
        </Section>
      )}

      {minst(s, "gymnasiet") && (
        <Section title="Språkriktighet">
          <ExampleCard title="Lånord och försvenskning">
            <Ex>mejl (e-post), tejp, dejt, juice/jos, schampo</Ex>
            <P>Språkrådet rekommenderar ofta försvenskade stavningar när ordet blivit vanligt. Välj en stavning och håll fast vid den.</P>
          </ExampleCard>
          <ExampleCard title="Sammansättningar med bindestreck och tre konsonanter">
            <Ex>FN-möte, 1900-talet, tv-serie, e-post, Malmö–Köpenhamn (tankstreck)</Ex>
            <Ex>natt + tåg = nattåg · glass + skål = glasskål</Ex>
            <P>När tre likadana konsonanter möts i en sammansättning skrivs bara två. Med bindestreck kan alla tre stå: natt-tåg.</P>
          </ExampleCard>
        </Section>
      )}

      <Minneslista
        punkter={
          s === "lagstadiet"
            ? ["Kort vokal – två konsonanter: hoppa, glass.", "Sj-ljud: sjö, sked, stjärna. Tj-ljud: tjugo, kyrka.", "Namn och meningsbörjan har stor bokstav."]
            : [
                "Kort vokal → dubbel konsonant (men oftast bara ett m eller n sist i ordet).",
                "Ett ljud – flera stavningar: lär dig de vanligaste orden som ordbilder.",
                "Veckodagar, månader och språk skrivs med liten bokstav.",
                "Sammansatta ord skrivs ihop.",
                ...(minst(s, "hogstadiet") ? ["De/dem: byt mot vi/oss. Var = plats, vart = riktning."] : []),
              ]
        }
      />
    </>
  );
}
