import type { AgeGroup } from "@/lib/supabase/types";

export interface TeacherGuide {
  title: string;
  slug: string;
  description: string;
  estimatedTime: string;
  topics: string[];
  ageGroup: AgeGroup;
  syfte: string;
  kopplingKursplan: string;
  forberedelser: string[];
  genomforande: { steg: string; beskrivning: string }[];
  uppfoljning: string[];
  bedomningsstod: string[];
}

export const TEACHER_GUIDES: TeacherGuide[] = [
  // ─── Lågstadiet ────────────────────────────────────────────
  {
    title: "Högläsning och boksamtal",
    slug: "hoglasning-och-boksamtal",
    description:
      "Strukturerade högläsningsstunder med fördjupande boksamtal som utvecklar elevernas ordförråd och läsförståelse.",
    estimatedTime: "40–60 min",
    topics: ["Läsförståelse", "Muntlig kommunikation", "Ordförråd"],
    ageGroup: "lagstadiet",
    syfte:
      "Syftet med lektionen är att eleverna ska utveckla sin förmåga att lyssna aktivt, reflektera kring en text och uttrycka sina tankar muntligt. Genom högläsning får eleverna möta ett rikare språk än det de själva producerar, vilket stärker ordförråd och textförståelse. Boksamtalet ger varje elev möjlighet att öva på att formulera och motivera sina åsikter i en trygg miljö.",
    kopplingKursplan:
      "Lektionen knyter an till det centrala innehållet i svenska för årskurs 1–3: lässtrategier för att förstå och tolka texter, att samtala om texters innehåll och budskap, samt att lyssna och återberätta. Den stödjer kunskapskraven kring att läsa bekanta och elevnära texter med flyt och visa grundläggande läsförståelse.",
    forberedelser: [
      "Välj en bilderbok eller kort kapitelbok som passar gruppens nivå. Boken bör ha tydliga karaktärer och ett tema som väcker frågor.",
      "Förbered 4–5 öppna frågor av typen: Vad tror du händer sen? Varför gjorde karaktären så? Har du varit med om något liknande?",
      "Ordna sittplatser så att alla elever kan se bilderna – en halvcirkel på mattan fungerar bra.",
      "Ha whiteboard eller blädderblock redo för att skriva upp nya ord som dyker upp i texten.",
    ],
    genomforande: [
      {
        steg: "Före läsningen (5–10 min)",
        beskrivning:
          "Visa bokens omslag och läs titeln högt. Låt eleverna para-prata i 1 minut: Vad tror ni boken handlar om? Samla några förslag på tavlan. Introducera 2–3 nya ord som kommer i texten och förklara dem med hjälp av bilder eller kroppsspråk.",
      },
      {
        steg: "Under läsningen (15–20 min)",
        beskrivning:
          "Läs med inlevelse och variera rösten för olika karaktärer. Stanna vid förutbestämda ställen och ställ korta frågor: Vad tror ni händer nu? Vad känner karaktären? Peka på bilderna och låt eleverna beskriva vad de ser. Skriv upp nya eller svåra ord som dyker upp på tavlan.",
      },
      {
        steg: "Boksamtal (10–15 min)",
        beskrivning:
          "Ställ öppna frågor som uppmuntrar till reflektion: Vilken del tyckte du bäst om? Finns det något du skulle vilja ändra i berättelsen? Använd EPA-modellen (enskilt–par–alla) – eleverna tänker först själva, pratar sedan med en kompis och delar sist med hela gruppen. Bekräfta alla svar och bygg vidare på elevernas idéer.",
      },
      {
        steg: "Avslutning (5–10 min)",
        beskrivning:
          "Gå igenom de nya orden på tavlan. Låt eleverna rita sin favoritscen eller skriva en mening om boken i sin läslogg. Berätta kort vad ni ska läsa nästa gång för att skapa förväntan.",
      },
    ],
    uppfoljning: [
      "Låt eleverna återberätta boken för en kompis eller i liten grupp vid ett senare tillfälle.",
      "Uppmuntra eleverna att låna liknande böcker i skolbiblioteket.",
      "Följ upp de nya orden under veckan – använd dem i andra sammanhang.",
      "Återkom till boken vid nästa boksamtal och jämför med en ny text.",
    ],
    bedomningsstod: [
      "Kan eleven återberätta huvuddragen i berättelsen?",
      "Deltar eleven aktivt i boksamtalet och uttrycker egna tankar?",
      "Kan eleven koppla texten till egna erfarenheter?",
      "Visar eleven förståelse för nya ord och begrepp?",
      "Lyssnar eleven på andras idéer och bygger vidare på dem?",
    ],
  },
  {
    title: "Bokstäver och ljud",
    slug: "bokstaver-och-ljud",
    description:
      "Multisensorisk undervisning i fonemisk medvetenhet och bokstavskännedom genom lek och rörelse.",
    estimatedTime: "30–45 min",
    topics: ["Fonologisk medvetenhet", "Avkodning", "Skrivutveckling"],
    ageGroup: "lagstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin fonologiska medvetenhet och lära sig koppla bokstäver till ljud. Genom att använda flera sinnen – syn, hörsel, känsel och rörelse – befästs kunskapen djupare och fler elever får möjlighet att lyckas oavsett inlärningsstil.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 1–3: sambandet mellan ljud och bokstav, att forma bokstäver för hand, enkla skrivregler och stavning. Den stödjer kunskapskraven kring att skriva enkla texter med läslig handstil och grundläggande stavning.",
    forberedelser: [
      "Välj 2–3 bokstäver/ljud att arbeta med under lektionen. Blanda gärna en ny bokstav med repetition av tidigare.",
      "Förbered stationer: sandlåda eller saltbricka för att skriva i, lera för att forma bokstäver, bokstavskort med bilder.",
      "Skriv ut eller förbered arbetsblad med bokstaven i olika storlekar (stor, liten, punkterad för spårning).",
      "Förbered en kort sång eller ramsa kopplad till bokstaven.",
    ],
    genomforande: [
      {
        steg: "Samling och introduktion (5–10 min)",
        beskrivning:
          "Presentera dagens bokstav/ljud. Säg ljudet tydligt och låt eleverna upprepa. Visa hur munnen ser ut när man säger ljudet – använd en spegel om möjligt. Sjung en bokstavssång eller säg en ramsa där ljudet återkommer ofta. Fråga eleverna: Vilka ord börjar på det här ljudet?",
      },
      {
        steg: "Stationsarbete (15–20 min)",
        beskrivning:
          "Dela in eleverna i smågrupper som roterar mellan stationerna: 1) Skriv bokstaven i sand eller salt – känn hur formen ser ut. 2) Forma bokstaven i lera. 3) Spåra bokstaven på arbetsbladet och skriv den själv. 4) Para ihop bokstavskort med bildkort som börjar på samma ljud. Ge ca 4–5 minuter per station. Cirkulera och stöd eleverna individuellt.",
      },
      {
        steg: "Ljudjakt (5–10 min)",
        beskrivning:
          "Gå på en kort ljudjakt i klassrummet eller närmaste omgivning. Eleverna letar efter föremål som börjar på dagens ljud. Samla föremålen på ett bord och benämn dem gemensamt. Klappa stavelserna i varje ord.",
      },
      {
        steg: "Avslutning (5 min)",
        beskrivning:
          "Samla gruppen. Repetera dagens ljud och bokstav. Låt varje elev säga ett ord som innehåller ljudet. Förhandsgranska vad ni gör nästa gång.",
      },
    ],
    uppfoljning: [
      "Skicka hem en liten läxa där eleven letar efter bokstaven i tidningar eller förpackningar hemma.",
      "Bygg en ordvägg i klassrummet som växer med nya ord för varje bokstav.",
      "Använd digitala verktyg som LetterSchool eller Skolstil för extraträning.",
      "Återkom till bokstaven regelbundet genom morgonrutiner eller startaktiviteter.",
    ],
    bedomningsstod: [
      "Kan eleven identifiera bokstavens ljud?",
      "Kan eleven forma bokstaven korrekt (stor och liten)?",
      "Kan eleven ge exempel på ord som börjar med ljudet?",
      "Kan eleven koppla bokstaven till rätt ljud i en mängd bokstäver?",
      "Kan eleven höra ljudet i olika positioner i ett ord (början, mitten, slut)?",
    ],
  },
  {
    title: "Skriv en saga",
    slug: "skriv-en-saga",
    description:
      "Eleverna skapar egna sagor med hjälp av berättelsekartor och stödstrukturer som utvecklar deras skrivförmåga.",
    estimatedTime: "2–3 lektioner",
    topics: ["Berättande text", "Skrivande", "Kreativitet"],
    ageGroup: "lagstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att skriva berättande texter med en tydlig struktur. Genom att använda stödstrukturer som berättelsekartor får alla elever – oavsett skrivnivå – verktyg att organisera sina tankar och bygga en sammanhängande berättelse.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 1–3: att skriva berättande texter med tydlig handling, enkla skrivstrategier, samt stora och små bokstäver och punkt. Den stödjer kunskapskraven kring att skriva enkla texter med läslig handstil och grundläggande stavning.",
    forberedelser: [
      "Förbered berättelsekartor med fält för: huvudperson, plats, problem, händelser (1–3 st), lösning.",
      "Läs eller visa en känd saga som modelltext (t.ex. Guldlock och de tre björnarna).",
      "Förbered sagokort med bilder av karaktärer, platser och magiska föremål som inspiration.",
      "Ha ordlistor tillgängliga med vanliga sagaord: det var en gång, plötsligt, till slut, lycklig.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Planera sagan (30–40 min)",
        beskrivning:
          "Börja med att läsa en kort saga och identifiera dess delar gemensamt: Vem är huvudpersonen? Var händer det? Vad är problemet? Hur löser det sig? Visa berättelsekartan på tavlan och fyll i den gemensamt för den lästa sagan. Dela sedan ut tomma berättelsekartor. Låt eleverna dra eller välja sagokort för inspiration. Eleverna fyller i sin karta – de som inte skriver än kan rita.",
      },
      {
        steg: "Lektion 2: Skriv sagan (30–40 min)",
        beskrivning:
          "Modellera hur man skriver en berättelse utifrån en berättelsekarta – skriv inledningen gemensamt på tavlan. Visa hur man använder punkt och stor bokstav. Eleverna skriver sin egen saga med berättelsekartan som stöd. Cirkulera och stöd individuellt: hjälp med stavning, uppmuntra att ljuda, påminn om punkt och stor bokstav. Elever som skriver snabbt kan lägga till detaljer och beskrivningar.",
      },
      {
        steg: "Lektion 3: Dela och fira (20–30 min)",
        beskrivning:
          "Eleverna ritar en illustration till sin saga. I par eller smågrupper läser eller berättar eleverna sin saga för varandra. Några frivilliga delar sin saga med hela klassen. Samla sagorna i en gemensam sagobok eller häng upp dem på en utställning i klassrummet.",
      },
    ],
    uppfoljning: [
      "Skapa en sagohörna i klassrummet där elevernas sagor finns tillgängliga att läsa.",
      "Låt eleverna skriva en uppföljare – vad händer sen?",
      "Bjud in en annan klass eller föräldrar till en sagouppläsning.",
      "Använd elevernas sagor som läsmaterial vid fri läsning.",
    ],
    bedomningsstod: [
      "Har sagan en tydlig inledning, handling och avslutning?",
      "Finns det en huvudperson och en plats?",
      "Har eleven använt punkt och stor bokstav?",
      "Kan eleven berätta om sin saga muntligt?",
      "Visar eleven kreativitet och egna idéer i berättelsen?",
    ],
  },

  // ─── Mellanstadiet ─────────────────────────────────────────
  {
    title: "Lässtrategier i grupp",
    slug: "lasstrategier-i-grupp",
    description:
      "Reciprok undervisning där eleverna tränar fyra lässtrategier: förutspå, ställa frågor, reda ut oklarheter och sammanfatta.",
    estimatedTime: "45–60 min",
    topics: ["Lässtrategier", "Samarbete", "Läsförståelse"],
    ageGroup: "mellanstadiet",
    syfte:
      "Syftet är att eleverna ska tillägna sig och kunna använda fyra centrala lässtrategier – att förutspå, ställa frågor, reda ut oklarheter och sammanfatta – för att aktivt bearbeta och förstå texter. Genom att arbeta i strukturerade grupper utvecklar eleverna både sin läsförståelse och sin förmåga att samarbeta kring texter.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 4–6: lässtrategier för att förstå och tolka texter från olika medier, att urskilja texters budskap och avsändare, samt att samtala om och diskutera texter. Den stödjer kunskapskraven kring att läsa skönlitteratur och sakprosa med flyt och använda lässtrategier.",
    forberedelser: [
      "Välj en text på lämplig nivå – gärna en artikel eller ett bokkapitel som alla elever har tillgång till.",
      "Dela in texten i 3–4 avsnitt som grupperna ska läsa steg för steg.",
      "Förbered rollkort för de fyra lässtrategierna: Spågumman (förutspår), Reportern (ställer frågor), Detektiven (reder ut oklarheter), Cowboyen (fångar in/sammanfattar).",
      "Dela in klassen i grupper om 4 elever. Variera grupperna så att elever med olika styrkor blandas.",
    ],
    genomforande: [
      {
        steg: "Introduktion (10 min)",
        beskrivning:
          "Presentera eller repetera de fyra lässtrategierna med hjälp av rollkorten. Modellera varje strategi kort med ett enkelt textexempel på tavlan. Förklara turordningen i gruppen: alla läser tyst, sedan arbetar man med sin roll i tur och ordning.",
      },
      {
        steg: "Gruppläsning – avsnitt 1 (10–15 min)",
        beskrivning:
          "Alla läser det första avsnittet tyst. Spågumman berättar vad hen tror kommer hända härnäst och motiverar. Reportern ställer 2–3 frågor om texten – både sådana man hittar svaret på och sådana man måste fundera kring. Detektiven lyfter ord eller meningar som var svåra att förstå och gruppen hjälps åt att reda ut dem. Cowboyen sammanfattar det viktigaste med egna ord.",
      },
      {
        steg: "Gruppläsning – avsnitt 2–3 (15–20 min)",
        beskrivning:
          "Byt roller så att varje elev får prova en ny strategi. Upprepa samma procedur med nästa avsnitt. Cirkulera mellan grupperna och lyssna. Ställ stödfrågor om det behövs: Kan du utveckla det? Vad i texten fick dig att tänka så?",
      },
      {
        steg: "Helklassamtal (10 min)",
        beskrivning:
          "Samla klassen. Låt en representant från varje grupp dela sin sammanfattning. Diskutera: Vilken strategi var lättast? Svårast? Vilken hjälpte er mest att förstå texten? Koppla tillbaka till syftet med strategierna.",
      },
    ],
    uppfoljning: [
      "Använd strategierna regelbundet vid textläsning i alla ämnen.",
      "Låt eleverna reflektera i en läslogg: Vilken strategi använde jag idag? Hur hjälpte den mig?",
      "Inför en stategivägg i klassrummet där eleverna kan se rollkorten.",
      "Låt eleverna lära yngre elever om strategierna.",
    ],
    bedomningsstod: [
      "Kan eleven använda alla fyra strategier med stöd?",
      "Kan eleven sammanfatta en text med egna ord?",
      "Ställer eleven relevanta frågor som visar att hen tänker kring texten?",
      "Kan eleven identifiera och reda ut oklarheter med hjälp av sammanhanget?",
      "Bidrar eleven aktivt i gruppens arbete med texten?",
    ],
  },
  {
    title: "Faktatexter och källkritik",
    slug: "faktatexter-och-kallkritik",
    description:
      "Eleverna lär sig skriva faktatexter och granska källor kritiskt genom praktiska övningar med riktiga texter.",
    estimatedTime: "2–3 lektioner",
    topics: ["Faktatexter", "Källkritik", "Informationssökning"],
    ageGroup: "mellanstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att söka information, granska källor kritiskt och skriva faktatexter med tydlig struktur. I en tid med stora informationsflöden är källkritik en avgörande kompetens som behöver tränas tidigt och praktiskt.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 4–6: informationssökning i böcker och på internet, att skriva faktatexter med beskrivningar och förklaringar, samt att granska informationens trovärdighet och resonera om källors tillförlitlighet. Den stödjer kunskapskraven kring att söka, välja ut och sammanställa information från ett avgränsat urval av källor.",
    forberedelser: [
      "Förbered 3–4 texter om samma ämne (t.ex. ett djur eller en historisk händelse) med varierande trovärdighet: en från NE, en från Wikipedia, en bloggtext och gärna en uppenbart falsk eller överdriven text.",
      "Skriv ut eller dela källkritikchecklistan: Vem skriver? Varför? När? Stämmer det med andra källor?",
      "Förbered en mall för faktatext med rubrik, inledning, fakta (minst tre underrubriker) och avslutning.",
      "Se till att eleverna har tillgång till 2–3 tillförlitliga källor att använda som underlag för sitt skrivande.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Källkritik (40–50 min)",
        beskrivning:
          "Börja med att visa en påhittad nyhet eller en uppenbart felaktig text och fråga klassen: Tror ni på det här? Varför/varför inte? Introducera källkritikchecklistan. Dela ut de förberedda texterna om samma ämne. I par granskar eleverna texterna med hjälp av checklistan och fyller i ett bedömningsschema. Avsluta med klassgenomgång: Vilken källa litar ni mest på? Varför?",
      },
      {
        steg: "Lektion 2: Samla och strukturera (40–50 min)",
        beskrivning:
          "Eleverna väljer ett eget ämne (eller tilldelas ett) och söker information i 2–3 godkända källor. De antecknar fakta i en tankekarta eller punktlista. De fyller i mallen för faktatext: vilken information ska vara under vilken underrubrik? Betona att de ska skriva med egna ord – inte kopiera. Visa skillnaden mellan att kopiera och att omformulera med ett konkret exempel.",
      },
      {
        steg: "Lektion 3: Skriv och granska (40–50 min)",
        beskrivning:
          "Eleverna skriver sin faktatext utifrån sin plan. Påminn om att texten ska ha rubrik, inledning, faktaavsnitt med underrubriker och en kort avslutning. I par granskar eleverna varandras texter med hjälp av en checklista: Är informationen korrekt? Är texten tydlig? Finns underrubriker? Är det egna ord? Eleverna reviderar sin text baserat på kamratens återkoppling.",
      },
    ],
    uppfoljning: [
      "Gör en gemensam faktabok eller digital presentation av klassens faktatexter.",
      "Fortsätt träna källkritik i andra ämnen – till exempel SO och NO.",
      "Inför en källkritikruta i alla skrivuppgifter: Vilka källor använde du? Varför valde du dem?",
      "Diskutera aktuella nyheter och granska dem gemensamt i klassen.",
    ],
    bedomningsstod: [
      "Kan eleven förklara varför en källa är trovärdig eller inte?",
      "Kan eleven använda källkritikchecklistan självständigt?",
      "Har elevens faktatext en tydlig struktur med rubrik och underrubriker?",
      "Har eleven skrivit med egna ord?",
      "Kan eleven ange vilka källor som använts?",
    ],
  },
  {
    title: "Kamratrespons på texter",
    slug: "kamratrespons-pa-texter",
    description:
      "Eleverna lär sig ge och ta emot konstruktiv återkoppling på varandras texter med hjälp av strukturerade responscheman.",
    estimatedTime: "45–60 min",
    topics: ["Skrivande", "Textbearbetning", "Kommunikation"],
    ageGroup: "mellanstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att bearbeta egna texter utifrån respons samt att ge konstruktiv och specifik återkoppling på andras texter. Genom kamratrespons tränar eleverna även sin förmåga att läsa texter kritiskt och att kommunicera om skrivande på ett respektfullt sätt.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 4–6: att ge och ta emot respons på texter, att bearbeta och förbättra sin text efter respons, samt att skriva texter av olika slag. Den stödjer kunskapskraven kring att skriva texter med tydligt innehåll och i huvudsak fungerande struktur.",
    forberedelser: [
      "Förbered ett responsschema med fokusområden: Innehåll (Är det intressant? Förstår jag allt?), Struktur (Finns inledning, mitten, avslutning?), Språk (Flyter texten? Finns det fina formuleringar?).",
      "Skriv en kort exempeltext med avsiktliga förbättringsmöjligheter som ni kan använda för att modellera respons.",
      "Se till att alla elever har en text redo att få respons på – gärna en text de skrivit tidigare under veckan.",
      "Förbered Two Stars and a Wish-lappar eller post-it-lappar i två färger (en för stjärnor, en för önskningar).",
    ],
    genomforande: [
      {
        steg: "Modellering (10–15 min)",
        beskrivning:
          "Visa exempeltexten på tavlan eller storskärm. Läs igenom den gemensamt. Modellera hur man ger respons: börja med att lyfta det som fungerar bra (vara specifik – inte bara säga att det är bra, utan vad som är bra och varför). Visa sedan hur man formulerar en förbättring som ett önskemål: Jag önskar att du berättar mer om... istället för Det här var dåligt. Använd responschemat och fyll i det gemensamt.",
      },
      {
        steg: "Pararbete med respons (20–25 min)",
        beskrivning:
          "Eleverna sitter i par. Elev A läser tyst elev B:s text medan elev B väntar. Elev A fyller i responschemat: minst två stjärnor (det som fungerar bra) och en önskning (förslag på förbättring). Elev A berättar sin respons muntligt för elev B. Byt roller. Cirkulera och lyssna på responssamtalen – uppmuntra specifik och konstruktiv återkoppling.",
      },
      {
        steg: "Bearbetning (10–15 min)",
        beskrivning:
          "Eleverna bearbetar sin egen text utifrån den respons de fått. De behöver inte ändra allt – de väljer själva vad de vill förbättra. Betona att det är författaren som bestämmer över sin text. Uppmuntra eleverna att markera vad de ändrat med en annan färg.",
      },
      {
        steg: "Reflektion (5 min)",
        beskrivning:
          "Avsluta med en kort reflektion i helklass: Vad var det bästa rådet du fick? Var det lätt eller svårt att ge respons? Vad ska vi tänka på nästa gång?",
      },
    ],
    uppfoljning: [
      "Inför kamratrespons som ett naturligt steg i alla skrivprocesser.",
      "Variera formen: ibland muntlig respons, ibland skriftlig, ibland digital.",
      "Utveckla responschemat efter hand med fler fokusområden.",
      "Låt eleverna reflektera i sin skrivlogg: Vad lärde jag mig av att ge/få respons idag?",
    ],
    bedomningsstod: [
      "Kan eleven ge specifik och konstruktiv respons med hjälp av responschemat?",
      "Kan eleven ta emot respons och använda den för att förbättra sin text?",
      "Formulerar eleven sina önskemål respektfullt och tydligt?",
      "Visar eleven förståelse för skillnaden mellan innehåll, struktur och språk i sin respons?",
      "Deltar eleven aktivt och engagerat i responssamtalet?",
    ],
  },

  // ─── Högstadiet ────────────────────────────────────────────
  {
    title: "Argumenterande text",
    slug: "argumenterande-text",
    description:
      "Eleverna lär sig att skriva argumenterande texter med tes, argument och motargument genom strukturerad undervisning.",
    estimatedTime: "3–4 lektioner",
    topics: ["Argumentation", "Skrivande", "Kritiskt tänkande"],
    ageGroup: "hogstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att formulera en tes, underbygga den med relevanta argument och bemöta motargument. Argumenterande skrivande är en central kompetens i samhällslivet och en viktig del av svenskämnets skrivundervisning.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 7–9: argumenterande texter och hur de är uppbyggda med tes, argument, motargument och slutsats, samt språkliga strategier för att uttrycka ståndpunkter och bemöta andras argument. Den stödjer kunskapskraven kring att skriva texter med tydlig tes och underbyggda argument.",
    forberedelser: [
      "Välj 2–3 debattämnen som engagerar eleverna – t.ex. skoluniform, betyg i lägre åldrar, mobilförbud i skolan.",
      "Förbered modelltexten: en kort argumenterande text som ni kan analysera gemensamt.",
      "Skriv ut en mall för argumenterande text med plats för: tes, argument 1–3 (med stöd), motargument, bemötande av motargument, avslutning/slutsats.",
      "Förbered en ordbank med argumenterande signalord: för det första, dessutom, å andra sidan, trots att, sammanfattningsvis.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Analysera och förstå (45 min)",
        beskrivning:
          "Börja med en snabb mentometeromröstning om ett debattämne för att engagera eleverna. Läs modelltexten gemensamt och markera med färgkoder: tes (röd), argument (grön), motargument (blå), slutsats (gul). Diskutera: Vad gör texten övertygande? Vad kunde förbättras? Analysera argumentens styrka – skilj mellan åsikt och fakta, känslomässiga och logiska argument.",
      },
      {
        steg: "Lektion 2: Planera och debattera (45 min)",
        beskrivning:
          "Eleverna väljer sitt ämne och tar ställning. De brainstormar argument och motargument i en tankekarta. Genomför en kort muntlig debatt i par eller små grupper – detta ger eleverna fler argument att använda i sin text. Eleverna fyller i mallen: tes, tre argument med stöd, minst ett motargument med bemötande, och planerad slutsats.",
      },
      {
        steg: "Lektion 3: Skriv (45 min)",
        beskrivning:
          "Modellera inledningen gemensamt på tavlan – visa hur man kan börja med en fråga, ett påstående eller en kort anekdot. Eleverna skriver sin text utifrån sin plan. Påminn om signalorden och uppmuntra eleverna att använda dem. Cirkulera och ge individuellt stöd: Kan du utveckla det argumentet? Har du tänkt på vad någon som tycker tvärtom skulle säga?",
      },
      {
        steg: "Lektion 4: Kamratrespons och bearbetning (45 min)",
        beskrivning:
          "Eleverna byter texter i par. De ger respons med fokus på: Är tesen tydlig? Är argumenten övertygande? Har motargument bemötts? Är texten sammanhållen? Eleverna bearbetar sin text utifrån responsen. Avsluta med att några elever läser upp sin text eller delar sin starkaste argument med klassen.",
      },
    ],
    uppfoljning: [
      "Arrangera en klassdebatt där eleverna använder sina texter som underlag.",
      "Låt eleverna skriva insändare till en (riktig eller fiktiv) tidning.",
      "Analysera argumenterande texter i media – tidningsartiklar, debattinlägg, reklamtexter.",
      "Koppla till samhällskunskap och diskutera argumentation i politiska texter.",
    ],
    bedomningsstod: [
      "Har texten en tydlig tes som uttrycker elevens ståndpunkt?",
      "Är argumenten relevanta och underbyggda med stöd (fakta, exempel, erfarenhet)?",
      "Har eleven bemött minst ett motargument?",
      "Är texten sammanhållen med fungerande inledning och avslutning?",
      "Använder eleven signalord och varierat språk?",
    ],
  },
  {
    title: "Litteraturanalys",
    slug: "litteraturanalys",
    description:
      "Eleverna fördjupar sig i skönlitteratur genom att analysera tema, karaktärer, berättarperspektiv och språkliga verkningsmedel.",
    estimatedTime: "3–4 lektioner",
    topics: ["Skönlitteratur", "Analys", "Tolkning"],
    ageGroup: "hogstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att analysera och tolka skönlitteratur på djupet. Genom att undersöka tema, karaktärer, berättarperspektiv och språkliga verkningsmedel lär sig eleverna att gå bortom handlingen och förstå hur en text skapar mening.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 7–9: skönlitteratur från olika tider och kulturer, berättarperspektiv och berättarröster, tema och motiv, samt hur författare använder språkliga verkningsmedel. Den stödjer kunskapskraven kring att göra sammanfattningar och visa läsförståelse, samt att tolka och resonera om texters budskap.",
    forberedelser: [
      "Välj en novell eller ett bokutdrag som hela klassen läser – texten bör ha tydligt tema, intressanta karaktärer och språkliga detaljer att analysera (t.ex. Hjalmar Söderberg, Tove Jansson eller en modern YA-författare).",
      "Förbered analysverktyg: en mall med rubriker för handling, tema, karaktärer, berättarperspektiv och språk.",
      "Skriv ut eller förbered stödfrågor för varje analysområde.",
      "Välj ut 2–3 nyckelcitat från texten som ni kan analysera gemensamt.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Läs och reagera (45 min)",
        beskrivning:
          "Läs texten gemensamt – antingen högläsning eller tyst läsning. Börja med en öppen reaktion: Vad är ert första intryck? Vad väckte känslor? Var det något ni inte förstod? Låt eleverna skriva en snabb loggbok (5 min fritt skrivande om sina tankar). Diskutera handlingen kort: Vad händer? Vem handlar det om? Var och när utspelar sig berättelsen?",
      },
      {
        steg: "Lektion 2: Fördjupad analys (45 min)",
        beskrivning:
          "Gå igenom analysverktygen: tema (vad handlar texten egentligen om?), karaktärsanalys (hur beskrivs karaktärerna – direkt och indirekt?), berättarperspektiv (vem berättar? allvetande eller begränsat?). Arbeta med nyckelcitaten gemensamt: Vad berättar det här citatet? Vilken effekt har ordvalen? Varför har författaren valt att skriva just så? Eleverna arbetar i par med att fylla i analysmallen.",
      },
      {
        steg: "Lektion 3: Språkliga verkningsmedel (45 min)",
        beskrivning:
          "Fokusera på hur författaren använder språket: bildspråk (liknelser, metaforer), upprepning, meningsbyggnad (korta vs. långa meningar), kontraster, symbolik. Eleverna letar efter exempel i texten och diskuterar effekten. Modellera hur man skriver en kort analystext: citera, analysera, tolka. Eleverna påbörjar sin egen analystext.",
      },
      {
        steg: "Lektion 4: Skriv och diskutera (45 min)",
        beskrivning:
          "Eleverna skriver färdigt sin analystext. Genomför ett litterärt samtal (bokcirkelformat) där eleverna delar sina tolkningar. Lyft att det inte finns ett rätt svar – det viktiga är att man kan motivera sin tolkning med stöd i texten. Avsluta med en metareflektion: Vad har du lärt dig om att läsa på djupet?",
      },
    ],
    uppfoljning: [
      "Inför en läslogg där eleverna regelbundet reflekterar över sin läsning med analystermer.",
      "Jämför texten med en annan text med liknande tema – vad skiljer sig?",
      "Låt eleverna skriva en alternativ slutscen eller byta berättarperspektiv som kreativ övning.",
      "Använd analysverktygen vid filmvisning – analysera en kort filmscen på samma sätt.",
    ],
    bedomningsstod: [
      "Kan eleven identifiera och resonera kring textens tema?",
      "Kan eleven analysera karaktärer med stöd i texten?",
      "Kan eleven identifiera berättarperspektiv och förklara dess effekt?",
      "Kan eleven ge exempel på språkliga verkningsmedel och diskutera deras effekt?",
      "Använder eleven citat och hänvisningar till texten i sin analys?",
    ],
  },
  {
    title: "Kritisk läsning av medier",
    slug: "kritisk-lasning-av-medier",
    description:
      "Eleverna utvecklar förmågan att kritiskt granska medieinnehåll och förstå hur texter i sociala medier och nyheter påverkar oss.",
    estimatedTime: "2–3 lektioner",
    topics: ["Mediekritik", "Källkritik", "Samhälle"],
    ageGroup: "hogstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla en kritisk medvetenhet om hur medieinnehåll – från nyhetsartiklar till sociala medier – är konstruerat för att påverka. De lär sig identifiera avsändare, syfte, målgrupp och retoriska grepp i olika medieformat.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 7–9: kritisk granskning av hur information och åsikter framförs i olika medier, texters avsändare och syfte, samt reklam och propaganda. Den stödjer kunskapskraven kring att granska och värdera informationens trovärdighet.",
    forberedelser: [
      "Samla 5–6 exempel på medieinnehåll: en nyhetsartikel, ett inlägg från sociala medier, en reklamtext, en opinionstext, ett klickbete och gärna ett deepfake-exempel eller manipulerad bild.",
      "Förbered analysramen AVSÄNDARE: Avsändare, Vem riktar sig texten till?, Syfte, Ämne, Notera språkliga grepp, Dra slutsatser, Andra perspektiv, Rimligt att lita på?, Evidens/belägg.",
      "Ordna stationer i klassrummet med olika medieexempel, eller förbered ett digitalt dokument.",
      "Se till att eleverna har tillgång till datorer eller surfplattor för egen sökning.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Introduktion och analys (45 min)",
        beskrivning:
          "Börja med ett klickbete eller en manipulerad bild och fråga klassen om de tror på det. Diskutera varför det är lätt att luras. Introducera analysramen AVSÄNDARE. Analysera nyhetsartikeln och reklamtexten gemensamt med hjälp av ramverket. Låt eleverna diskutera i par: Vad skiljer en nyhet från en åsikt? Hur märker man skillnaden?",
      },
      {
        steg: "Lektion 2: Stationsarbete (45 min)",
        beskrivning:
          "Eleverna arbetar i grupper och roterar mellan stationer med olika medieexempel. Vid varje station analyserar de texten/bilden/inlägget med hjälp av analysramen. De dokumenterar sina analyser i ett gemensamt dokument. Avsluta med en klassgenomgång: Vilket innehåll var svårast att bedöma? Varför?",
      },
      {
        steg: "Lektion 3: Egen analys och presentation (45 min)",
        beskrivning:
          "Eleverna väljer ett eget medieinnehåll att analysera kritiskt – det kan vara en TikTok, ett Instagraminlägg, en YouTube-video eller en nyhetsartikel. De skriver en kort analystext med hjälp av analysramen. Eleverna presenterar sina analyser i smågrupper eller för klassen. Avsluta med en diskussion: Hur kan vi bli bättre på att granska det vi ser och läser varje dag?",
      },
    ],
    uppfoljning: [
      "Inför en veckovis medieanalys där klassen granskar en aktuell text eller ett inlägg.",
      "Låt eleverna skapa egna medietexter (reklam, nyheter) och analysera varandras.",
      "Bjud in en journalist eller mediekunnig gästföreläsare.",
      "Koppla till samhällskunskap och diskutera mediernas roll i demokratin.",
    ],
    bedomningsstod: [
      "Kan eleven identifiera avsändare och syfte i medieinnehåll?",
      "Kan eleven skilja mellan nyheter, åsikter och reklam?",
      "Kan eleven identifiera retoriska och språkliga grepp i medietexter?",
      "Kan eleven resonera om trovärdigheten hos olika medieinnehåll?",
      "Kan eleven presentera sin analys på ett tydligt och strukturerat sätt?",
    ],
  },

  // ─── Gymnasiet ─────────────────────────────────────────────
  {
    title: "Vetenskapligt skrivande",
    slug: "vetenskapligt-skrivande",
    description:
      "Eleverna tränar på att skriva vetenskapliga texter med korrekt struktur, referenshantering och akademiskt språk.",
    estimatedTime: "4–5 lektioner",
    topics: ["Vetenskapligt skrivande", "Referenshantering", "Akademiskt språk"],
    ageGroup: "gymnasiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att skriva vetenskapliga texter med korrekt struktur och formellt språk. De lär sig att formulera frågeställningar, använda och referera till källor enligt vedertagna normer och dra välgrundade slutsatser. Dessa färdigheter är avgörande för framgång i högre studier.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i Svenska 3: vetenskapliga texter och hur de är uppbyggda, referatskrivande, citat- och referensteknik, samt formellt språk. Den stödjer kunskapskraven kring att skriva vetenskapliga texter med tydlig disposition, korrekt referenshantering och vedertaget formellt språk.",
    forberedelser: [
      "Förbered en kort vetenskaplig exempeltext (t.ex. en gymnasieuppsats eller ett förenklat akademiskt abstract) som ni kan analysera gemensamt.",
      "Skriv ut eller dela en guide till Harvardmodellen eller APA-stil för referenshantering.",
      "Förbered en mall för vetenskaplig text: inledning med bakgrund och frågeställning, metod, resultat, diskussion, källförteckning.",
      "Samla 4–5 vetenskapliga artiklar eller trovärdiga källor inom valbart ämnesområde.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Struktur och kännetecken (50 min)",
        beskrivning:
          "Läs och analysera exempeltexten gemensamt. Identifiera delarna: inledning, syfte/frågeställning, metod, resultat, diskussion, källförteckning. Diskutera vad som skiljer vetenskapligt skrivande från andra texttyper: objektivitet, precision, beläggens roll, formellt språk. Eleverna får ett ämnesområde och formulerar en preliminär frågeställning i par.",
      },
      {
        steg: "Lektion 2: Referenshantering (50 min)",
        beskrivning:
          "Gå igenom referenshantering: varför refererar vi? skillnaden mellan citat, referat och parafras. Visa konkret hur man refererar enligt valt system (Harvard/APA). Eleverna övar med praktiska exempel: Skriv om detta stycke som referat med korrekt referens. Diskutera plagiering: vad det är, varför det är allvarligt, och hur man undviker det.",
      },
      {
        steg: "Lektion 3: Akademiskt språk (50 min)",
        beskrivning:
          "Analysera språket i vetenskapliga texter: passiv form, hedging (tycks, verkar, torde), nominaliseringar, formell ordnivå. Eleverna arbetar med omskrivningsövningar: gör om vardagliga formuleringar till akademiskt språk. Genomgång av vanliga språkliga fallgropar: personliga pronomen, talspråk, vaga formuleringar. Eleverna påbörjar sin text med fokus på inledning och frågeställning.",
      },
      {
        steg: "Lektion 4–5: Skriv, granska och bearbeta (2 x 50 min)",
        beskrivning:
          "Eleverna skriver sin vetenskapliga text med stöd av mallen. Genomför en strukturerad kamratgranskning med fokus på: Är frågeställningen tydlig? Finns korrekta referenser? Är språket tillräckligt formellt? Är dispositionen logisk? Eleverna bearbetar och lämnar in sin slutversion. Avsluta med en klassreflektion: Vad är den största skillnaden mellan vetenskapligt och annat skrivande?",
      },
    ],
    uppfoljning: [
      "Koppla till gymnasiearbetet – använd samma krav och struktur där.",
      "Låt eleverna granska riktiga vetenskapliga artiklar och bedöma deras kvalitet.",
      "Inför löpande övningar i referenshantering i andra skrivuppgifter.",
      "Diskutera hur AI-verktyg kan användas (och inte användas) i vetenskapligt skrivande.",
    ],
    bedomningsstod: [
      "Har texten en tydlig och avgränsad frågeställning?",
      "Följer texten den vetenskapliga strukturen med alla delar?",
      "Är referenshanteringen korrekt och konsekvent?",
      "Är språket formellt, precist och sakligt?",
      "Drar eleven välgrundade slutsatser baserade på sitt material?",
    ],
  },
  {
    title: "Retorikanalys",
    slug: "retorikanalys",
    description:
      "Eleverna analyserar retoriska tal och texter med fokus på ethos, pathos, logos och andra retoriska verkningsmedel.",
    estimatedTime: "3–4 lektioner",
    topics: ["Retorik", "Analys", "Muntlig framställning"],
    ageGroup: "gymnasiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att analysera retoriska strategier i tal och texter. Genom att förstå hur talare och skribenter använder ethos, pathos och logos kan eleverna både bli mer kritiska mottagare av retoriska budskap och bättre kommunikatörer själva.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i Svenska 1 och 2: retorikens grunder med ethos, pathos och logos, samt retoriska verkningsmedel och strategier i tal och skrift. Den stödjer kunskapskraven kring att analysera retoriska situationer och verkningsmedel.",
    forberedelser: [
      "Välj 2–3 kända tal att analysera – gärna med video. Förslag: Martin Luther Kings I Have a Dream, Greta Thunbergs FN-tal, ett riksdagstal eller ett TED-talk.",
      "Förbered en analysmodell med retoriska begrepp: retorisk situation (talare, publik, syfte, sammanhang), ethos/pathos/logos, stilfigurer (anafor, klimax, retorisk fråga, trikolon), dispositionens delar.",
      "Skriv ut eller dela ett analysschema där eleverna kan anteckna under genomlyssning.",
      "Förbered korta videoklipp (2–5 min) som kan visas och analyseras gemensamt.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Retoriska grunder (50 min)",
        beskrivning:
          "Introducera eller repetera retorikens grunder: den retoriska situationen, ethos (trovärdighet), pathos (känslor), logos (logik). Visa ett kort tal (2–3 min) utan förkunskap och låt eleverna diskutera: Var talet övertygande? Varför? Visa talet igen och analysera det gemensamt med hjälp av ethos/pathos/logos. Eleverna identifierar exempel på var och en i talet.",
      },
      {
        steg: "Lektion 2: Stilfigurer och verkningsmedel (50 min)",
        beskrivning:
          "Gå igenom vanliga stilfigurer med exempel: anafor, klimax, antites, retorisk fråga, trikolon, allitteration, metafor. Eleverna arbetar i par med att identifiera stilfigurer i utdrag från kända tal. Diskutera effekten: Varför använder talaren just den stilfiguren? Vad skulle hända om man tog bort den? Visa det andra talet och låt eleverna analysera det självständigt med hjälp av analyschemat.",
      },
      {
        steg: "Lektion 3: Skriva retorikanalys (50 min)",
        beskrivning:
          "Modellera hur man skriver en retorikanalys: inledning med presentation av talet och dess kontext, analysavsnitt uppdelat efter retoriska medel, avslutande bedömning av talets effektivitet. Visa hur man citerar från ett tal och analyserar citatet. Eleverna väljer ett tal (kan vara ett av de analyserade eller ett eget) och påbörjar sin analystext.",
      },
      {
        steg: "Lektion 4: Färdigställ och presentera (50 min)",
        beskrivning:
          "Eleverna skriver färdigt sin retorikanalys. Kamratrespons med fokus på: Är analysen kopplad till retoriska begrepp? Finns citat och analys av dem? Bedömer eleven talets effektivitet? Några elever presenterar sina analyser muntligt för klassen – detta blir i sig en retorisk situation att reflektera över.",
      },
    ],
    uppfoljning: [
      "Låt eleverna hålla egna tal med medveten användning av retoriska verkningsmedel.",
      "Analysera reklam, politiska debatter eller influencer-innehåll med samma verktyg.",
      "Genomför en retoriktävling i klassen med kamrater som domare.",
      "Diskutera etiska aspekter: Var går gränsen mellan retorik och manipulation?",
    ],
    bedomningsstod: [
      "Kan eleven identifiera och förklara ethos, pathos och logos i ett tal?",
      "Kan eleven identifiera och namnge stilfigurer och resonera om deras effekt?",
      "Kan eleven analysera den retoriska situationen (talare, publik, syfte, sammanhang)?",
      "Skriver eleven en strukturerad analystext med citat och analys?",
      "Kan eleven bedöma talets effektivitet med stöd i sin analys?",
    ],
  },
  {
    title: "Litteraturhistoria",
    slug: "litteraturhistoria",
    description:
      "En tematisk resa genom de stora litterära epokerna med fokus på hur samhälle, idéer och litteratur hänger samman.",
    estimatedTime: "6–8 lektioner",
    topics: ["Litteraturhistoria", "Epoker", "Textanalys"],
    ageGroup: "gymnasiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förståelse för litteraturens utveckling från antiken till idag och förstå hur samhällsförändringar, idéströmningar och litterära uttryck hänger samman. Genom att läsa och analysera texter från olika epoker utvecklar eleverna en litteraturhistorisk medvetenhet och djupare förståelse för samtida litteratur.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i Svenska 2: skönlitteratur och sakprosa från olika epoker, centrala litterära verk och författarskap, samt hur litteraturen speglar samhälle och kultur. Den stödjer kunskapskraven kring att sätta in texter i litteraturhistoriska sammanhang.",
    forberedelser: [
      "Välj 5–6 texter/utdrag som representerar olika epoker: antiken, romantiken, realismen, modernismen, postmodernismen och samtid.",
      "Förbered en tidslinje (fysisk eller digital) som ska fyllas på under arbetet.",
      "Samla bakgrundsinformation om varje epok: tidsperiod, samhällskontext, centrala idéer, typiska drag i litteraturen, viktiga författare.",
      "Förbered diskussionsfrågor som kopplar epokens idéer till samtiden.",
    ],
    genomforande: [
      {
        steg: "Lektion 1–2: Översikt och tidiga epoker (2 x 50 min)",
        beskrivning:
          "Ge en övergripande introduktion till varför vi studerar litteraturhistoria: hur litteratur speglar och påverkar samhället. Presentera tidslinjen och arbetsmetoden. Arbeta med antiken och romantiken: läs ett kort utdrag ur vardera epoken, presentera samhällskontexten och diskutera: Vad handlar texten om? Hur speglar den sin tid? Eleverna fyller i tidslinjen och gör korta anteckningar om varje epok.",
      },
      {
        steg: "Lektion 3–4: Realism och modernism (2 x 50 min)",
        beskrivning:
          "Presentera realismen som reaktion på romantiken – hur samhällsförändringar ledde till nytt berättande. Läs ett utdrag (t.ex. Strindberg, Ibsen) och analysera realistiska drag. Gå vidare till modernismen: visa hur första världskrigets trauma förändrade litteraturen. Läs ett modernistiskt utdrag (t.ex. Edith Södergran, Kafka) och jämför med det realistiska – vad har förändrats och varför?",
      },
      {
        steg: "Lektion 5–6: Samtid och fördjupning (2 x 50 min)",
        beskrivning:
          "Diskutera postmodernism och samtida litteratur: fragmentering, intertextualitet, autofiktionens framväxt. Eleverna väljer en epok att fördjupa sig i. De läser ytterligare en text från sin valda epok och skriver en kort analys som kopplar texten till dess historiska kontext. Presentationer i smågrupper där eleverna delar sina fördjupningar.",
      },
      {
        steg: "Lektion 7–8: Syntes och examination (2 x 50 min)",
        beskrivning:
          "Eleverna skriver en jämförande uppsats eller genomför en muntlig presentation där de jämför två texter från olika epoker. Fokus: Hur speglar texterna sina respektive tider? Vilka likheter och skillnader finns? Avslutande klassdiskussion: Vad kan vi lära oss om vår egen tid genom att studera litteraturhistoria?",
      },
    ],
    uppfoljning: [
      "Låt eleverna skapa en gemensam digital tidslinje med texter, bilder och analyser.",
      "Inför ett bokval med förslag från olika epoker som eleverna läser självständigt.",
      "Besök en teater – se en klassisk pjäs och diskutera den i sitt litteraturhistoriska sammanhang.",
      "Diskutera: Vilken epok lever vi i nu? Vilka drag har samtidslitteraturen?",
    ],
    bedomningsstod: [
      "Kan eleven placera texter i rätt litteraturhistorisk epok?",
      "Kan eleven beskriva de viktigaste dragen i varje epok?",
      "Kan eleven koppla litterära verk till sin samhälleliga och kulturella kontext?",
      "Kan eleven jämföra texter från olika epoker och resonera om likheter och skillnader?",
      "Kan eleven resonera om hur litteraturen speglar och påverkar samhället?",
    ],
  },
];

export function getGuidesForAgeGroup(ageGroup: string): TeacherGuide[] {
  return TEACHER_GUIDES.filter((g) => g.ageGroup === ageGroup);
}

export function getGuideBySlug(
  ageGroup: string,
  slug: string
): TeacherGuide | undefined {
  return TEACHER_GUIDES.find((g) => g.ageGroup === ageGroup && g.slug === slug);
}
