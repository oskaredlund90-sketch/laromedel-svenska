import { notFound } from "next/navigation";
import {
  Lightbulb,
  MessageCircle,
  Mic,
  Ear,
  Users,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { getTalaLyssnaExercises } from "@/lib/data/tala-lyssna-ovningar";
import { TalaLyssnaOvningar } from "@/components/tala-lyssna-ovningar";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      <div className="text-sm text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </div>
  );
}

function NumberedStep({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
          {title}
        </h4>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {children}
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
      <span>{children}</span>
    </li>
  );
}

function IconTipCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardContent className="flex gap-4 pt-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          {icon}
        </div>
        <div>
          <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
            {title}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {children}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Level descriptions                                                 */
/* ------------------------------------------------------------------ */

const LEVEL_DESCRIPTIONS: Record<AgeGroup, string> = {
  lagstadiet:
    "Lär dig att prata inför klassen och bli en riktigt bra lyssnare. Här finns enkla tips som hjälper dig!",
  mellanstadiet:
    "Bygg upp dina presentationer steg för steg, lär dig ge bra respons och bli bättre på att samtala i grupp.",
  hogstadiet:
    "Utveckla din presentationsteknik, lär dig argumentera och debattera, och fördjupa ditt aktiva lyssnande.",
  gymnasiet:
    "Akademiska presentationer, retorisk medvetenhet, seminarieteknik och avancerad analys av muntlig kommunikation.",
};

/* ------------------------------------------------------------------ */
/*  Lågstadiet content                                                */
/* ------------------------------------------------------------------ */

function LagstadietContent() {
  return (
    <>
      <Section title="Så pratar du inför klassen">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Att prata inför klassen kan kännas pirrigt, men det blir lättare varje
          gång du gör det. Här är fem tips som hjälper dig!
        </p>
        <div className="space-y-4">
          <IconTipCard
            icon={<Mic className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />}
            title="Prata tydligt"
          >
            Prata lagom högt så att alla i klassrummet hör dig. Tänk att du
            pratar till den som sitter längst bak. Ta det lugnt och prata inte
            för snabbt.
          </IconTipCard>
          <IconTipCard
            icon={<Users className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />}
            title="Titta på dem som lyssnar"
          >
            Försök titta på dina klasskamrater när du pratar. Du behöver inte
            titta på alla på en gång &ndash; välj en person i taget och flytta
            blicken ibland.
          </IconTipCard>
          <IconTipCard
            icon={<Star className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />}
            title="Förbered dig"
          >
            Tänk igenom vad du vill säga innan du börjar. Du kan rita en bild
            eller skriva några ord på ett kort som hjälper dig att komma ihåg.
          </IconTipCard>
          <IconTipCard
            icon={
              <CheckCircle2 className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            }
            title="Andas lugnt"
          >
            Om du känner dig nervös, ta ett djupt andetag innan du börjar. Det
            är helt okej att vara lite nervös &ndash; alla känner så ibland!
          </IconTipCard>
          <IconTipCard
            icon={
              <ArrowRight className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            }
            title="Avsluta tydligt"
          >
            Berätta när du är klar! Du kan säga &quot;Det var allt jag ville
            berätta&quot; eller &quot;Har ni några frågor?&quot; Då vet alla att
            du är färdig.
          </IconTipCard>
        </div>
      </Section>

      <Section title="Att vara en bra lyssnare">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Att lyssna är lika viktigt som att prata. Här är fyra saker som gör
          dig till en riktigt bra lyssnare.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
                <Ear className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              </div>
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Titta på den som pratar
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Vänd dig mot den som pratar och titta på personen. Då visar du
                att du lyssnar och bryr dig om vad de säger.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
                <MessageCircle className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              </div>
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Vänta på din tur
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Avbryt inte! Vänta tills den andra personen har pratat klart
                innan du säger något. Räck upp handen om du vill säga något.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
                <Lightbulb className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              </div>
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Tänk på det du hör
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Försök förstå vad den andra personen menar. Om du inte förstår
                kan du fråga: &quot;Vad menar du?&quot;
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
                <Star className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              </div>
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Visa att du lyssnar
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Nicka, le eller säg &quot;mm&quot; ibland. Då känner den som
                pratar att du verkligen lyssnar.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Hur gick det? Testa dig själv!">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Efter att du har pratat inför klassen, tänk efter:
        </p>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <ChecklistItem>
                Pratade jag tillräckligt högt så att alla hörde?
              </ChecklistItem>
              <ChecklistItem>
                Tittade jag på mina klasskamrater?
              </ChecklistItem>
              <ChecklistItem>
                Avslutade jag tydligt så att alla visste att jag var klar?
              </ChecklistItem>
            </ul>
          </CardContent>
        </Card>
        <Tip>
          <strong>Kom ihåg:</strong> Ingen behöver vara perfekt! Det viktigaste
          är att du vågar försöka. Ju fler gånger du övar, desto lättare blir
          det.
        </Tip>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Mellanstadiet content                                              */
/* ------------------------------------------------------------------ */

function MellanstadietContent() {
  return (
    <>
      <Section title="Bygg din presentation">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          En bra presentation har tre delar: inledning, mittdel och avslutning.
          Tänk på det som en smörgås &ndash; du behöver bröd på båda sidorna
          och gott pålägg i mitten!
        </p>
        <div className="space-y-5">
          <NumberedStep number={1} title="Inledning &ndash; fånga intresset">
            <p>
              Börja med något som väcker nyfikenhet. Du kan ställa en fråga till
              publiken, berätta en kort historia eller visa en bild. Berätta
              sedan vad din presentation handlar om.
            </p>
            <div className="mt-2 rounded-md bg-neutral-100 p-3 dark:bg-neutral-800">
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                Exempel:
              </p>
              <p className="text-sm italic text-neutral-700 dark:text-neutral-300">
                &quot;Visste ni att det finns över 8 miljoner djurarter i
                världen? Idag ska jag berätta om en av de mest fascinerande
                &ndash; havssköldpaddan.&quot;
              </p>
            </div>
          </NumberedStep>
          <NumberedStep number={2} title="Mittdel &ndash; berätta det viktigaste">
            <p>
              Här berättar du det viktigaste om ditt ämne. Dela upp innehållet i
              2&ndash;3 punkter så att det blir tydligt. Använd gärna exempel
              och bilder.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                Punkt 1: Hur ser havssköldpaddan ut?
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                Punkt 2: Var lever den?
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                Punkt 3: Varför är den hotad?
              </li>
            </ul>
          </NumberedStep>
          <NumberedStep number={3} title="Avslutning &ndash; sammanfatta och avsluta">
            <p>
              Sammanfatta det viktigaste du berättat. Du kan avsluta med en
              fråga till publiken eller berätta vad du tycker. Säg tydligt att du
              är klar!
            </p>
            <div className="mt-2 rounded-md bg-neutral-100 p-3 dark:bg-neutral-800">
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                Exempel:
              </p>
              <p className="text-sm italic text-neutral-700 dark:text-neutral-300">
                &quot;Nu vet ni lite mer om havssköldpaddan. Vad tycker ni
                &ndash; vad kan vi göra för att hjälpa den? Tack för att ni
                lyssnade!&quot;
              </p>
            </div>
          </NumberedStep>
        </div>
      </Section>

      <Section title="Ge och ta emot respons">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Att ge bra respons hjälper dina klasskamrater att bli bättre. Och att
          ta emot respons hjälper dig att utvecklas!
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Att ge respons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm font-medium text-neutral-900 dark:text-white">
                Metoden &quot;Två stjärnor och en önskan&quot;:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  Berätta två saker som var bra (&quot;Du pratade tydligt och
                  hade bra ögonkontakt&quot;)
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  Var specifik &ndash; säg inte bara &quot;bra&quot; utan förklara
                  vad som var bra
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  Ge ett förslag: &quot;Nästa gång kan du kanske visa en bild
                  till&quot;
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Att ta emot respons</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  Lyssna utan att avbryta
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  Försök att inte ta det personligt &ndash; responsen handlar om
                  presentationen, inte om dig som person
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  Ställ frågor om du inte förstår: &quot;Kan du förklara vad du
                  menar?&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  Tacka för responsen och bestäm själv vad du vill jobba med
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Samtalsregler">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Fem regler som gör alla gruppsamtal bättre:
        </p>
        <div className="space-y-3">
          {[
            {
              rule: "Lyssna aktivt",
              desc: "Titta på den som pratar, nicka och visa att du hör.",
            },
            {
              rule: "Vänta på din tur",
              desc: "Avbryt inte. Vänta tills den andra personen är klar.",
            },
            {
              rule: "Bygg vidare",
              desc: 'Anknyt till det som sagts: "Som du sa, och dessutom tycker jag att..."',
            },
            {
              rule: "Respektera olika åsikter",
              desc: "Du behöver inte hålla med, men visa respekt för andras tankar.",
            },
            {
              rule: "Bjud in alla",
              desc: 'Om någon inte har sagt något, fråga: "Vad tycker du?"',
            },
          ].map((item, i) => (
            <div
              key={item.rule}
              className="flex gap-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                {i + 1}
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white">
                  {item.rule}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Hur gick det? Testa dig själv!">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Fundera efter din nästa presentation:
        </p>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <ChecklistItem>
                Hade jag en tydlig inledning som fångade intresset?
              </ChecklistItem>
              <ChecklistItem>
                Var min mittdel ordnad i tydliga punkter?
              </ChecklistItem>
              <ChecklistItem>
                Avslutade jag med en sammanfattning?
              </ChecklistItem>
              <ChecklistItem>
                Tittade jag på publiken under presentationen?
              </ChecklistItem>
              <ChecklistItem>
                Pratade jag i lagom tempo och tillräckligt högt?
              </ChecklistItem>
            </ul>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Högstadiet content                                                */
/* ------------------------------------------------------------------ */

function HogstadietContent() {
  return (
    <>
      <Section title="Presentationsteknik">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          En bra presentation kräver planering, genomförande och reflektion. Här
          går vi igenom alla tre stegen.
        </p>

        <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          1. Planera
        </h3>
        <div className="mb-6 space-y-3">
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Syfte och publik
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Innan du börjar: Vad vill du att publiken ska veta, tycka eller
                göra efter ditt tal? Vilka är de? Anpassa ditt språk och
                innehåll efter publiken. En presentation för klasskamrater kan
                vara mer informell än en för skolledningen.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Strukturera med stödord
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Skriv stödord &ndash; inte hela meningar &ndash; på kort eller i
                din telefon. Ordna dem i en logisk ordning: inledning, huvuddel
                med 2&ndash;4 punkter och avslutning. Stödord gör att du pratar
                mer naturligt jämfört med att läsa från manus.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Inledning och avslutning
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Inledningen och avslutningen är det publiken minns bäst.
                Investera extra tid på dem. En stark inledning kan vara en
                retorisk fråga, en överraskande fakta eller en personlig
                historia. En stark avslutning sammanfattar och ger publiken
                något att tänka på.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          2. Genomföra
        </h3>
        <div className="mb-6 space-y-3">
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Röst och tempo
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Variera din röststyrka och ditt tempo. Sänk tempot vid viktiga
                poänger. Pauser är kraftfulla &ndash; de ger publiken tid att
                smälta information och skapar förväntan. Undvik utfyllnadsord
                som &quot;typ&quot;, &quot;liksom&quot; och &quot;eh&quot;.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Kroppsspråk och ögonkontakt
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Stå stadigt, använd öppna gester och sök ögonkontakt med olika
                delar av publiken. Ditt kroppsspråk kommunicerar lika mycket som
                dina ord. Undvik att stå med armarna i kors eller att titta ner
                i golvet.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Visuella hjälpmedel
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Bilder och nyckelord på skärm kan stärka ditt budskap, men
                undvik att fylla bilderna med text. Publiken ska lyssna på dig,
                inte läsa. Tumregel: max 5 ord per bild.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          3. Reflektera
        </h3>
        <Tip>
          <strong>Självreflektion efter talet:</strong> Vad gick bra? Vad var
          svårt? Be en kompis ge specifik respons och skriv ner en sak du vill
          förbättra till nästa gång. Det är så man utvecklas.
        </Tip>
      </Section>

      <Section title="Argumentera och debattera">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Att argumentera handlar om att uttrycka sin åsikt och stödja den med
          bevis och resonemang. I en debatt ställs olika åsikter mot varandra.
        </p>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bygg ett argument</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-4">
                <NumberedStep number={1} title="Tes">
                  Din huvudåsikt, klart formulerad. Exempel: &quot;Skoldagen bör
                  börja klockan 9.&quot;
                </NumberedStep>
                <NumberedStep number={2} title="Argument">
                  Skäl som stöder din tes. Använd fakta, exempel och
                  jämförelser. &quot;Forskning visar att tonåringar presterar
                  bättre när de får sova längre.&quot;
                </NumberedStep>
                <NumberedStep number={3} title="Bemöt motargument">
                  Visa att du förstår andra sidan och förklara varför din tes
                  ändå håller. &quot;Visst kan det bli svårt med
                  fritidsaktiviteter, men skolresultaten är viktigare.&quot;
                </NumberedStep>
                <NumberedStep number={4} title="Slutsats">
                  Sammanfatta varför din tes är den bästa ståndpunkten.
                </NumberedStep>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Debattstruktur</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <p>
                  <strong className="text-neutral-900 dark:text-white">
                    Moderatorn
                  </strong>{" "}
                  leder debatten, ger ordet och ser till att alla följer
                  reglerna.
                </p>
                <p>
                  <strong className="text-neutral-900 dark:text-white">
                    Debattörerna
                  </strong>{" "}
                  framför sina argument, lyssnar på motståndaren och bemöter
                  motargument. Man avbryter inte!
                </p>
                <p>
                  <strong className="text-neutral-900 dark:text-white">
                    Publiken
                  </strong>{" "}
                  lyssnar aktivt och kan ställa frågor i slutet. De kan också
                  bedöma vilka argument som var starkast.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tip>
          <strong>Att skilja på sak och person:</strong> I en debatt angriper
          man argument, aldrig person. Istället för &quot;Du har fel&quot;, säg
          &quot;Jag håller inte med om det argumentet, eftersom...&quot;
        </Tip>
      </Section>

      <Section title="Aktivt lyssnande">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Aktivt lyssnande är mer än att vara tyst medan någon pratar. Det
          handlar om att verkligen förstå och visa det.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Parafrasera
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Upprepa det du hört med egna ord: &quot;Om jag förstår dig rätt
                menar du att...&quot; Det visar att du lyssnar och ger talaren
                chans att förtydliga.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Ställ öppna frågor
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Frågor som börjar med &quot;hur&quot;, &quot;varför&quot; eller
                &quot;berätta mer om&quot; visar genuint intresse och ger
                djupare samtal.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Sammanfatta
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I slutet av ett samtal, sammanfatta de viktigaste punkterna.
                &quot;Vi verkar vara överens om att... men oense om...&quot;
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Visa med kroppen
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Nicka, luta dig framåt och ha ögonkontakt. Undvik att titta på
                mobilen eller göra annat. Ditt kroppsspråk visar om du verkligen
                lyssnar.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Bedöm dig själv">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Använd det här schemat för att utvärdera dina muntliga framställningar:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="py-2 pr-4 text-left font-semibold text-neutral-900 dark:text-white">
                  Område
                </th>
                <th className="py-2 pr-4 text-left font-semibold text-neutral-900 dark:text-white">
                  Grundläggande
                </th>
                <th className="py-2 pr-4 text-left font-semibold text-neutral-900 dark:text-white">
                  Utvecklat
                </th>
                <th className="py-2 text-left font-semibold text-neutral-900 dark:text-white">
                  Avancerat
                </th>
              </tr>
            </thead>
            <tbody className="text-neutral-600 dark:text-neutral-400">
              <tr className="border-b border-neutral-100 dark:border-neutral-800">
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Innehåll
                </td>
                <td className="py-2 pr-4">Har en tes och argument</td>
                <td className="py-2 pr-4">
                  Tydlig tes med relevanta argument och exempel
                </td>
                <td className="py-2">
                  Tydlig tes, starka argument, bemöter motargument
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800">
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Struktur
                </td>
                <td className="py-2 pr-4">
                  Har inledning och avslutning
                </td>
                <td className="py-2 pr-4">
                  Logisk ordning med tydliga övergångar
                </td>
                <td className="py-2">
                  Medveten disposition som styr publikens uppmärksamhet
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800">
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Språk
                </td>
                <td className="py-2 pr-4">Begripligt och korrekt</td>
                <td className="py-2 pr-4">
                  Varierat ordval, anpassat till publiken
                </td>
                <td className="py-2">
                  Medveten stilnivå, retoriska grepp
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Framförande
                </td>
                <td className="py-2 pr-4">
                  Viss ögonkontakt, hörbar
                </td>
                <td className="py-2 pr-4">
                  Bra tempo, tydligt kroppsspråk
                </td>
                <td className="py-2">
                  Engagerande, varierat tonfall, naturliga pauser
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Gymnasiet content                                                  */
/* ------------------------------------------------------------------ */

function GymnasietContent() {
  return (
    <>
      <Section title="Akademisk presentation">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          En akademisk presentation kräver tydlig struktur, retorisk
          medvetenhet och anpassning till en kunnig publik. Här bryter vi ner
          det i hanterbara delar.
        </p>

        <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Struktur och innehåll
        </h3>
        <div className="mb-6 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                Den retoriska arbetsprocessen
              </h4>
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                Den klassiska retorikens fem steg &ndash; partesmodellen &ndash;
                ger en beprövad metod:
              </p>
              <div className="space-y-3">
                <NumberedStep number={1} title="Inventio &ndash; Hitta material">
                  Samla fakta, argument och exempel. Analysera ditt ämne från
                  flera perspektiv. Fundera: vilka invändningar kan publiken ha?
                </NumberedStep>
                <NumberedStep number={2} title="Dispositio &ndash; Ordna innehållet">
                  Välj en tydlig struktur. Kronologisk ordning, problemlösning
                  eller tematisk uppdelning är vanliga mönster. Lägg starkaste
                  argumentet sist (klimax) eller först (antiklimaktisk ordning
                  om publiken har kort tålamod).
                </NumberedStep>
                <NumberedStep number={3} title="Elocutio &ndash; Formulera">
                  Välj stilnivå &ndash; formellt, sakligt men engagerande.
                  Använd retoriska figurer medvetet: tretal (trikolon),
                  upprepning (anafor), kontraster (antites). Anpassa
                  terminologin efter publiken.
                </NumberedStep>
                <NumberedStep number={4} title="Memoria &ndash; Memorera">
                  Lär dig strukturen, inte orden. Stödord på kort fungerar bättre
                  än manus. Öva på att tala fritt utifrån din disposition.
                </NumberedStep>
                <NumberedStep number={5} title="Actio &ndash; Framför">
                  Använd röst, kroppsspråk och blick medvetet. Variera tempo och
                  styrka. Pauser skapar eftertanke. Ögonkontakt bygger
                  förtroende.
                </NumberedStep>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Retorisk medvetenhet
        </h3>
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Ethos &ndash; trovärdighet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Visa att du behärskar ämnet genom att hänvisa till källor och ge
                nyanserade perspektiv. Var ärlig med vad du inte vet. Professionellt
                uppträdande stärker ditt ethos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Pathos &ndash; känsloappell
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Berättelser, levande exempel och konkreta bilder väcker
                känslor. I en akademisk kontext ska pathos användas med måtta
                och aldrig ersätta fakta &ndash; men det gör ditt budskap mer
                minnevärt.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Logos &ndash; logik och fakta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Bygg resonemang steg för steg. Använd statistik, forskning och
                konkreta exempel. Var medveten om logiska felslut som
                halmgubbar, falska dilemman och generaliseringar.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Kairos &ndash; rätt tid och plats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Anpassa ditt budskap till sammanhanget. Vad har hänt nyligen
                som gör ämnet aktuellt? Vilka förväntningar har publiken?
                Timing och kontextmedvetenhet skiljer ett bra tal från ett
                utmärkt.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
          Visuella hjälpmedel
        </h3>
        <Tip>
          <strong>Principer för presentationsbilder:</strong> Varje bild ska ha
          ett enda budskap. Använd bilder, diagram och nyckelord &ndash; inte
          fulltext. Hög kontrast och stor text. Bilderna stöder dig, de är inte
          ditt manus. Publiken ska lyssna, inte läsa.
        </Tip>
      </Section>

      <Section title="Paneldebatt och seminarium">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          I gymnasiet möter du olika format för muntlig kommunikation. Att
          behärska skillnaderna är viktigt.
        </p>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Paneldebatt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                I en paneldebatt sitter flera debattörer med olika perspektiv
                inför en publik. En moderator leder samtalet.
              </p>
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">
                  Tips som paneldeltagare:
                </p>
                <ul className="mt-1 space-y-1">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Förbered 2&ndash;3 kärnargument med stöd
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Lyssna på övriga och referera till deras argument
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Var koncis &ndash; du delar talutrymmet med andra
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Behåll lugnet vid oenighet &ndash; angrip argument, inte
                    person
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Seminarium</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                Ett seminarium är en strukturerad diskussion där deltagarna
                utforskar ett ämne tillsammans. Målet är gemensam förståelse,
                inte att vinna.
              </p>
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">
                  Förberedelse:
                </p>
                <ul className="mt-1 space-y-1">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Läs texten/materialet noggrant och skriv ner frågor och
                    reflektioner
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Markera nyckelstycken som du vill diskutera
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Formulera minst en egen tanke eller fråga att bidra med
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">
                  Under seminariet:
                </p>
                <ul className="mt-1 space-y-1">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Bygg vidare på andras tankar: &quot;Det du sa fick mig att
                    tänka på...&quot;
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Ställ fördjupande frågor: &quot;Kan du utveckla det?&quot;
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Referera till texten/materialet med specifika hänvisningar
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    Var beredd att ompröva din ståndpunkt
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Avancerad lyssnaranalys">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          Att analysera andras muntliga framställningar utvecklar din egen
          retoriska medvetenhet. Använd det här ramverket.
        </p>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Analysera ett tal &ndash; steg för steg
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <NumberedStep number={1} title="Kontext och syfte">
                Vem talar? Inför vilken publik? I vilken situation? Vad verkar
                syftet vara &ndash; informera, övertyga, underhålla?
              </NumberedStep>
              <NumberedStep number={2} title="Retoriska medel">
                Hur använder talaren ethos, pathos och logos? Vilka retoriska
                figurer (trikolon, anafor, retoriska frågor, kontraster)
                förekommer? Hur påverkar de budskapet?
              </NumberedStep>
              <NumberedStep number={3} title="Struktur och disposition">
                Hur är talet uppbyggt? Finns det en tydlig inledning, mittdel
                och avslutning? Hur leder talaren publiken genom innehållet?
              </NumberedStep>
              <NumberedStep number={4} title="Framförande">
                Hur använder talaren röst (tempo, styrka, pauser), kroppsspråk
                (gester, hållning, ögonkontakt) och eventuella hjälpmedel?
              </NumberedStep>
              <NumberedStep number={5} title="Helhetsbedömning">
                Hur väl uppnår talaren sitt syfte? Vad är särskilt effektivt?
                Vad hade kunnat göras annorlunda? Motivera dina bedömningar med
                specifika exempel.
              </NumberedStep>
            </CardContent>
          </Card>
        </div>
        <Tip>
          <strong>Praktisk övning:</strong> Välj ett känt tal (TED Talk, politisk
          debatt, rättegångsplädering) och analysera det med hjälp av stegen ovan.
          Jämför sedan med en klasskamrats analys &ndash; såg ni samma saker?
        </Tip>
      </Section>

      <Section title="Bedömningskriterier">
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          I Svenska 1&ndash;3 bedöms din muntliga förmåga enligt följande
          kriterier. Använd schemat för att förstå vad som krävs på olika
          nivåer.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="py-2 pr-4 text-left font-semibold text-neutral-900 dark:text-white">
                  Kriterium
                </th>
                <th className="py-2 pr-4 text-left font-semibold text-neutral-900 dark:text-white">
                  E-nivå
                </th>
                <th className="py-2 pr-4 text-left font-semibold text-neutral-900 dark:text-white">
                  C-nivå
                </th>
                <th className="py-2 text-left font-semibold text-neutral-900 dark:text-white">
                  A-nivå
                </th>
              </tr>
            </thead>
            <tbody className="text-neutral-600 dark:text-neutral-400">
              <tr className="border-b border-neutral-100 dark:border-neutral-800">
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Innehåll och argumentation
                </td>
                <td className="py-2 pr-4">
                  Enkla argument, viss anpassning till publiken
                </td>
                <td className="py-2 pr-4">
                  Utvecklade argument, tydlig anpassning till syfte och publik
                </td>
                <td className="py-2">
                  Nyanserade argument, bemöter motargument, stark
                  publikanpassning
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800">
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Struktur och disposition
                </td>
                <td className="py-2 pr-4">
                  Enkel men fungerande struktur
                </td>
                <td className="py-2 pr-4">
                  Genomtänkt disposition med tydliga övergångar
                </td>
                <td className="py-2">
                  Medveten och effektiv disposition som styr lyssnarens
                  upplevelse
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800">
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Språk och stil
                </td>
                <td className="py-2 pr-4">
                  Begripligt och i huvudsak korrekt
                </td>
                <td className="py-2 pr-4">
                  Varierat och anpassat, med viss retorisk medvetenhet
                </td>
                <td className="py-2">
                  Medveten stilnivå, retoriska grepp som förstärker budskapet
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-neutral-900 dark:text-white">
                  Framförande
                </td>
                <td className="py-2 pr-4">
                  Viss ögonkontakt, hörbar röst
                </td>
                <td className="py-2 pr-4">
                  Tydligt kroppsspråk, varierat tempo, engagerande
                </td>
                <td className="py-2">
                  Säkert, dynamiskt framförande med medvetna val av röst och
                  kropp
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Tip>
          <strong>Koppla till kurserna:</strong> I Svenska 1 fokuserar du på att
          kunna genomföra muntliga presentationer. I Svenska 2 fördjupar du
          retorisk analys och argumentation. I Svenska 3 förväntas du kunna
          genomföra och analysera avancerade muntliga framställningar med
          retorisk medvetenhet.
        </Tip>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ arskurs: string }>;
}

export function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Tala, lyssna och samtala \u2013 ${group.label}`,
    description: `Muntlig kommunikation anpassad för ${group.label.toLowerCase()}: presentationsteknik, lyssnande och samtal.`,
  };
}

export default async function TalaLyssnaPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const level = arskurs as AgeGroup;
  const exercises = getTalaLyssnaExercises(level);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <MessageCircle className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Tala, lyssna och samtala
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {LEVEL_DESCRIPTIONS[level]}
        </p>
      </div>

      {/* Level-specific guide content */}
      {level === "lagstadiet" && <LagstadietContent />}
      {level === "mellanstadiet" && <MellanstadietContent />}
      {level === "hogstadiet" && <HogstadietContent />}
      {level === "gymnasiet" && <GymnasietContent />}

      {/* Interactive exercises */}
      {exercises.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
            Övningar
          </h2>
          <TalaLyssnaOvningar exercises={exercises} />
        </section>
      )}
    </div>
  );
}
