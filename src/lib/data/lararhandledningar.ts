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

  {
    title: "Sagor och berättande",
    slug: "sagor-och-berattande",
    description:
      "Eleverna utforskar klassiska sagor, identifierar berättelsens delar och utvecklar sin fantasi genom att återberätta och dramatisera.",
    estimatedTime: "2–3 lektioner",
    topics: ["Berättande", "Sagor", "Muntlig kommunikation"],
    ageGroup: "lagstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förståelse för berättandets grundläggande struktur genom att arbeta med klassiska sagor. Sagor erbjuder tydliga mönster – en början, en mitt med problem och prövningar, och ett slut med en lösning – som ger eleverna verktyg att förstå och själva skapa berättelser. Genom att lyssna på, återberätta och dramatisera sagor stärks både den muntliga förmågan och läsförståelsen.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 1–3: berättande texters uppbyggnad med inledning, händelseförlopp och avslutning, att lyssna och återberätta, samt att samtala om texters innehåll och budskap. Den stödjer kunskapskraven kring att läsa och förstå elevnära texter samt att muntligt återberätta en handling.",
    forberedelser: [
      "Välj 2–3 klassiska sagor med tydlig struktur – t.ex. De tre bockarna Bruse, Rödluvan, Hans och Greta. Ha gärna bildstöd eller bilderbok.",
      "Förbered en stor berättelsekarta på tavlan eller blädderblock med fälten: Var? Vem? Problem? Vad händer? Hur slutar det?",
      "Ta fram rekvisita för enkel dramatisering – enkla hattar, tyger eller handdockor räcker.",
      "Förbered bildkort med sagofigurer, platser och magiska föremål för sorteringsövning.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Lyssna och förstå (30–40 min)",
        beskrivning:
          "Läs en saga högt med inlevelse. Stanna efter varje del och fråga: Vad hände just nu? Vad tror ni händer sen? Efter hela sagan fyller ni gemensamt i berättelsekartan på tavlan. Diskutera sagans delar: Var börjar berättelsen? Vad är problemet? Hur löser det sig? Låt eleverna para-prata: Vilken del tyckte du bäst om?",
      },
      {
        steg: "Lektion 2: Jämföra och sortera (30–40 min)",
        beskrivning:
          "Läs en andra saga och fyll i en ny berättelsekarta. Jämför de två sagorna: Vad är lika? Vad är olika? Har båda ett problem och en lösning? Eleverna arbetar i par med bildkorten – de sorterar karaktärer, platser och händelser och försöker bygga en egen sagosekvens. Gemensam genomgång: vilka mönster hittar vi i sagor?",
      },
      {
        steg: "Lektion 3: Dramatisera och återberätta (30–40 min)",
        beskrivning:
          "Dela in klassen i smågrupper om 3–4 elever. Varje grupp väljer en saga och förbereder en kort dramatisering. Ge 10–15 minuter för förberedelse med enkel rekvisita. Grupperna framför sina sagor för varandra. Avsluta med att eleverna ritar sin favoritsaga i rätt ordning (3–4 bilder) och återberättar för en kompis.",
      },
      {
        steg: "Avslutning och reflektion (10 min)",
        beskrivning:
          "Samla klassen och reflektera: Vad har alla sagor gemensamt? Varför tror ni att vi berättar sagor? Koppla till elevernas egna liv: Berättar någon sagor hemma hos er? Förhandsgranska att ni nästa gång ska skapa egna sagor.",
      },
    ],
    uppfoljning: [
      "Låt eleverna skapa egna sagor med hjälp av berättelsekartan som stöd.",
      "Bygg en sagohörna i klassrummet med böcker, rekvisita och berättelsekort.",
      "Bjud in äldre elever eller föräldrar som berättar sagor från olika kulturer.",
      "Spela in elevernas återberättande som ljudfiler och samla i en digital sagobok.",
    ],
    bedomningsstod: [
      "Kan eleven identifiera sagans huvudperson och plats?",
      "Kan eleven peka ut problemet i sagan och hur det löser sig?",
      "Kan eleven återberätta en saga i rätt ordning med egna ord?",
      "Deltar eleven aktivt i dramatiseringen och tar en roll?",
      "Kan eleven jämföra två sagor och hitta likheter och skillnader?",
    ],
  },
  {
    title: "Ordkunskap genom lek",
    slug: "ordkunskap-genom-lek",
    description:
      "Eleverna bygger sitt ordförråd genom lekfulla aktiviteter som ordlekar, ordsamlingar och temabaserade ordövningar.",
    estimatedTime: "30–45 min",
    topics: ["Ordförråd", "Ordlekar", "Språkutveckling"],
    ageGroup: "lagstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla och bredda sitt ordförråd genom lustfyllda och varierade aktiviteter. Ett rikt ordförråd är grunden för både läsförståelse och skrivförmåga. Genom att arbeta med temaord, synonymer, motsatsord och ordlekar i meningsfulla sammanhang befästs nya ord bättre än genom isolerad ordträning.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 1–3: ord och begrepp för att uttrycka känslor, kunskaper och åsikter, ordbilder och stavning, samt att samtala om ords betydelse. Den stödjer kunskapskraven kring att använda ett grundläggande ordförråd för att uttrycka sig i tal och skrift.",
    forberedelser: [
      "Välj ett tema för lektionens ordsamling – t.ex. vinterord, känsloord, rörelseord eller matord. Teman som knyter an till årstid eller pågående arbete fungerar bäst.",
      "Förbered ordkort (med bild och text) för 10–15 temaord. Ha gärna extra tomma kort där eleverna kan lägga till egna ord.",
      "Ställ i ordning stationer för ordlekar: memory med ord och bild, ordpussel, ordsortering (t.ex. sortera ord efter lång/kort vokal).",
      "Ha en stor ordsamlingsaffisch redo att hänga i klassrummet där nya ord samlas löpande.",
    ],
    genomforande: [
      {
        steg: "Samling och introduktion (5–10 min)",
        beskrivning:
          "Presentera dagens tema. Visa 3–4 av ordkorten och förklara orden med hjälp av bilder, gester eller korta meningar. Låt eleverna säga orden högt tillsammans. Spela en snabb runda av Jag tänker på ett ord – ge ledtrådar och låt eleverna gissa. Fråga: Vilka fler ord kan ni som passar temat?",
      },
      {
        steg: "Ordlekar i stationer (15–20 min)",
        beskrivning:
          "Dela in klassen i smågrupper som roterar mellan stationer: 1) Ordmemory – para ihop ord med bild. 2) Ordsortering – sortera temaord i kategorier (t.ex. kalla/varma känslor, stor/liten rörelse). 3) Rita och gissa – en elev ritar, de andra gissar ordet. 4) Meningsbygge – bygg meningar med temaorden med hjälp av ordkort. Ge ca 5 minuter per station.",
      },
      {
        steg: "Gemensam ordsamling (5–10 min)",
        beskrivning:
          "Samla klassen vid ordsamlingsaffischen. Gå igenom alla temaord och låt eleverna föreslå ytterligare ord. Skriv upp orden tillsammans. Öva att använda orden i meningar: Kan du säga en mening med ordet 'frusen'? Diskutera synonymer och motsatsord om det passar: Vad är motsatsen till kall?",
      },
      {
        steg: "Avslutning (5 min)",
        beskrivning:
          "Avsluta med en snabb omgång Ordet runt – varje elev säger ett temaord i tur och ordning så snabbt som möjligt utan att upprepa. Berätta att ordsamlingsaffischen stannar uppe och att eleverna får lägga till nya ord under veckan.",
      },
    ],
    uppfoljning: [
      "Använd temaorden i skrivövningar under veckan – skriv meningar eller korta texter med minst tre temaord.",
      "Inför ett nytt tema varje eller varannan vecka och bygg en ordvägg som växer.",
      "Låt eleverna skapa egna ordböcker där de samlar nya ord med bild och förklaring.",
      "Spela ordlekar regelbundet som startaktivitet eller avslutning på lektioner.",
    ],
    bedomningsstod: [
      "Kan eleven förklara betydelsen av de nya temaorden?",
      "Kan eleven använda temaorden i egna meningar?",
      "Deltar eleven aktivt i ordlekarna och bidrar med egna ordförslag?",
      "Kan eleven sortera ord i kategorier och motivera sin sortering?",
      "Visar eleven intresse för nya ord och använder dem i andra sammanhang?",
    ],
  },
  {
    title: "Att skriva sin första text",
    slug: "att-skriva-sin-forsta-text",
    description:
      "Stöttad skrivundervisning där eleverna med hjälp av bildstöd och mallar skriver sina första korta texter.",
    estimatedTime: "2–3 lektioner",
    topics: ["Skrivande", "Stöttning", "Textstruktur"],
    ageGroup: "lagstadiet",
    syfte:
      "Syftet är att alla elever ska få uppleva att de kan skriva en egen text, oavsett var de befinner sig i sin skrivutveckling. Genom tydliga stödstrukturer – bildstöd, gemensam skrivning, meningsstarare och enkla mallar – sänks tröskeln så att varje elev kan delta och lyckas. Lektionerna bygger på principen att skrivande är en process som börjar med att tala och tänka innan pennan sätts på papperet.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 1–3: att skriva enkla texter med läslig handstil och på dator, strategier för att skriva olika typer av texter, stora och små bokstäver samt punkt, och att bearbeta och förtydliga sina texter. Den stödjer kunskapskraven kring att skriva enkla texter med grundläggande struktur.",
    forberedelser: [
      "Förbered bildsekvenser (3–4 bilder som berättar en enkel historia) som skrivunderlag – t.ex. bilder av en dag på stranden, en utflykt i skogen eller ett djurs äventyr.",
      "Skriv ut skrivmallar med plats för bild och text, med meningsstartare: Först..., Sedan..., Till slut..., Jag kände mig...",
      "Förbered en gemensam modelltext på tavlan med samma mall som eleverna ska använda.",
      "Ha ordlistor tillgängliga med vanliga ord som eleverna kan behöva: och, men, för att, sedan, plötsligt.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Gemensam skrivning (30–40 min)",
        beskrivning:
          "Visa bildsekvensen på tavlan. Berätta tillsammans: Vad händer på den första bilden? Vad händer sen? Skriv en gemensam text på tavlan med hjälp av meningsstartarna – eleverna bidrar med innehållet, läraren skriver. Tänk högt: Nu börjar vi med 'Först' och stor bokstav. Vad ska vi skriva? Visa tydligt hur punkt och stor bokstav fungerar. Läs den färdiga texten högt tillsammans.",
      },
      {
        steg: "Lektion 2: Egen skrivning med stöd (30–40 min)",
        beskrivning:
          "Ge varje elev en bildsekvens (samma eller ny) och en skrivmall. Börja med att eleverna berättar sin historia muntligt för en kompis – detta hjälper dem att formulera sig innan de skriver. Eleverna skriver med hjälp av meningsstartarna och ordlistorna. Cirkulera och ge individuellt stöd: ljuda tillsammans, uppmuntra att skriva som det låter, påminn om punkt. Elever som inte skriver än kan rita och diktera för läraren.",
      },
      {
        steg: "Lektion 3: Illustrera och dela (20–30 min)",
        beskrivning:
          "Eleverna ritar en illustration till sin text. De övar på att läsa upp sin text för en kompis – kompisen lyssnar och säger en sak de tyckte om. Några frivilliga delar sin text med hela klassen. Samla alla texter och gör en utställning eller en gemensam bok.",
      },
      {
        steg: "Reflektion (5–10 min)",
        beskrivning:
          "Fråga eleverna: Var det lätt eller svårt att skriva? Vad är du mest stolt över i din text? Betona att alla texter är fina och att det viktigaste är att man vågade skriva. Förhandsgranska vad de ska skriva om nästa gång.",
      },
    ],
    uppfoljning: [
      "Inför regelbundna korta skrivstunder där eleverna skriver till bilder eller fria ämnen.",
      "Bygg vidare med fler meningsstartare och uppmuntra eleverna att skriva utan mall när de är redo.",
      "Skapa skrivarpar där eleverna stöttar varandra i skrivprocessen.",
      "Skicka hem en tom skrivmall så att eleverna kan skriva en text hemma med familjen.",
    ],
    bedomningsstod: [
      "Kan eleven formulera en enkel mening som hänger ihop med bilden?",
      "Använder eleven meningsstartarna som stöd i sitt skrivande?",
      "Visar eleven förståelse för stor bokstav och punkt?",
      "Kan eleven berätta sin text muntligt med en tydlig ordning?",
      "Vågar eleven pröva att skriva och visar uthållighet i skrivprocessen?",
      "Kan eleven lyssna på en kompis text och ge en positiv kommentar?",
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

  {
    title: "Muntlig framställning",
    slug: "muntlig-framstallning",
    description:
      "Eleverna lär sig att förbereda och hålla korta presentationer med tydlig struktur, kroppsspråk och ögonkontakt.",
    estimatedTime: "3–4 lektioner",
    topics: ["Muntlig framställning", "Presentationsteknik", "Självförtroende"],
    ageGroup: "mellanstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att förbereda och genomföra muntliga presentationer. Att kunna tala inför andra är en grundläggande kompetens som eleverna har nytta av i alla ämnen och i livet utanför skolan. Genom strukturerad träning i en trygg miljö bygger eleverna både kunskap och självförtroende.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 4–6: muntliga presentationer och muntligt berättande för olika mottagare, att anpassa språk och innehåll efter syfte och mottagare, samt att ge och ta emot respons. Den stödjer kunskapskraven kring att förbereda och genomföra muntliga redogörelser med inledning, innehåll och avslutning.",
    forberedelser: [
      "Förbered en lista med presentationsämnen som eleverna kan välja mellan – gärna ämnen nära deras vardag: mitt favoritdjur, en hobby, en bok jag läst, min familj, en plats jag besökt.",
      "Skriv ut en planeringsmall med rubriker: Inledning (fånga lyssnarnas intresse), Innehåll (2–3 punkter), Avslutning (sammanfatta eller avsluta med en fråga).",
      "Förbered ett enkelt responschema för åhörarna: Vad var bra? Vad vill jag veta mer om?",
      "Ordna klassrummet så att det finns en tydlig plats att stå och presentera, gärna med stol för nervösa elever.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Introduktion och modellering (40–50 min)",
        beskrivning:
          "Börja med att fråga eleverna: Vad gör en presentation bra? Samla idéer på tavlan. Håll en kort modellpresentation (2 min) och låt eleverna ge feedback utifrån sina egna kriterier. Diskutera konkreta tips: titta på åhörarna, tala tydligt och lagom högt, ha en tydlig början och slut, använda stödord istället för att läsa innantill. Eleverna väljer ämne och börjar fylla i planeringsmallen.",
      },
      {
        steg: "Lektion 2: Förbereda och öva (40–50 min)",
        beskrivning:
          "Eleverna färdigställer sin planering. De övar sin presentation i par – kompisen lyssnar och ger respons med hjälp av responschemat. Uppmuntra eleverna att öva utan att läsa innantill – stödord på små kort är okej. Cirkulera och lyssna, ge individuellt stöd. Påminn om kroppsspråk: stå stadigt, titta upp, andas lugnt. Eleverna reviderar sin presentation utifrån kompisens feedback.",
      },
      {
        steg: "Lektion 3–4: Presentationer (2 x 40 min)",
        beskrivning:
          "Eleverna håller sina presentationer inför klassen eller i halvklass (för att minska nervositeten). Varje presentation följs av positiv respons från åhörarna och en fråga. Läraren noterar styrkor och utvecklingsområden. Skapa en trygg stämning: applådera varje presentation, betona att alla gör sitt bästa och att nervositet är naturligt och okej.",
      },
      {
        steg: "Reflektion och utvärdering (10–15 min)",
        beskrivning:
          "Avsluta med gemensam reflektion: Hur kändes det att presentera? Vad gick bra? Vad vill du förbättra till nästa gång? Eleverna skriver en kort självutvärdering. Lyft goda exempel från presentationerna utan att peka ut enskilda elever negativt.",
      },
    ],
    uppfoljning: [
      "Inför korta muntliga presentationer regelbundet – t.ex. veckans bok, en nyhet eller en kort redovisning i SO/NO.",
      "Variera formatet: presentera i par, i grupp, med bildstöd, med rekvisita.",
      "Filma presentationer (med elevernas godkännande) så att de kan se sig själva och reflektera.",
      "Bjud in en annan klass att lyssna på presentationerna.",
    ],
    bedomningsstod: [
      "Har presentationen en tydlig inledning, innehåll och avslutning?",
      "Talar eleven tydligt och med lagom tempo?",
      "Har eleven ögonkontakt med åhörarna?",
      "Använder eleven stödord istället för att läsa innantill?",
      "Kan eleven svara på frågor om sitt ämne?",
      "Visar eleven förmåga att anpassa sitt språk efter situationen?",
    ],
  },
  {
    title: "Dikter och poesi",
    slug: "dikter-och-poesi",
    description:
      "Eleverna utforskar poesins värld genom att läsa, tolka och skriva egna dikter med fokus på rim, rytm och bildspråk.",
    estimatedTime: "3–4 lektioner",
    topics: ["Poesi", "Kreativt skrivande", "Bildspråk"],
    ageGroup: "mellanstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att läsa och tolka dikter samt att uttrycka sig kreativt genom eget poetiskt skrivande. Poesi ger eleverna tillgång till ett koncentrerat och lekfullt språk där de kan experimentera med ord, ljud och bilder. Genom att arbeta med dikter stärks elevernas språkliga medvetenhet och deras förmåga att uttrycka tankar och känslor.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 4–6: berättande och poetiska texter som belyser människors upplevelser och erfarenheter, språkliga drag och uppbyggnad i berättande och poetiska texter, samt bildspråk och ordval. Den stödjer kunskapskraven kring att läsa skönlitteratur med flyt och göra tolkningar av texters budskap.",
    forberedelser: [
      "Välj 5–6 dikter av varierande slag: en rolig dikt, en naturdikt, en känslosam dikt, en dikt med tydligt rim och en i fri vers. Anpassa urvalet efter elevgruppen – svenska barnlyrik från t.ex. Lennart Hellsing, Barbro Lindgren eller moderna poeter.",
      "Förbered ett poetikblad med begrepp: rim (slutrim, inrim), rytm, vers, strof, bildspråk (liknelse, metafor), upprepning.",
      "Skriv ut skrivmallar för olika diktformer: haiku (5-7-5 stavelser), akrostikon (begynnelsebokstäver bildar ett ord), liknelsedikt (... är som ...).",
      "Ordna ett mysigt läshörn eller dämpa belysningen – poesi mår bra av en speciell stämning.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Möta dikter (40–50 min)",
        beskrivning:
          "Läs flera dikter högt – variera röstläge och tempo. Låt eleverna bara lyssna och känna efter första gången. Läs om och fråga: Vilken dikt tyckte du om? Vad kände du? Såg du några bilder framför dig? Introducera grundbegreppen: rim, rytm, vers, strof. Eleverna arbetar i par med att hitta rim och upprepningar i dikterna. Avsluta med att eleverna väljer sin favoritdikt och övar på att läsa den högt med inlevelse.",
      },
      {
        steg: "Lektion 2: Bildspråk och tolkning (40–50 min)",
        beskrivning:
          "Fokusera på bildspråk: Vad är en liknelse? Vad är en metafor? Visa tydliga exempel i dikterna ni läst. Eleverna skapar egna liknelser: Glädje är som... Ilska är som... Vintern är som... Välj en dikt att tolka gemensamt: Vad handlar dikten om egentligen? Kan den betyda flera saker? Diskutera att tolkningar kan vara olika – det finns inte alltid ett rätt svar i poesi.",
      },
      {
        steg: "Lektion 3: Skriv egna dikter (40–50 min)",
        beskrivning:
          "Presentera de olika diktformerna och visa mallar. Modellera skrivandet: skriv en haiku och ett akrostikon gemensamt på tavlan. Eleverna väljer en eller flera diktformer och skriver egna dikter. Uppmuntra experiment: det behöver inte rimma, det viktigaste är att det känns rätt. Cirkulera och stöd individuellt – lyft fina formuleringar och uppmuntra de som tycker det är svårt.",
      },
      {
        steg: "Lektion 4: Poesiuppläsning (30–40 min)",
        beskrivning:
          "Ordna en poesiuppläsning i klassen. Eleverna läser upp sina dikter – frivilligt eller i par för den som tycker det är jobbigt. Uppmuntra att läsa med inlevelse. Åhörarna lyfter en sak de tyckte om i varje dikt. Samla alla dikter i en klassens diktsamling – digital eller fysisk.",
      },
    ],
    uppfoljning: [
      "Inför en dikt i veckan – läs en dikt varje måndag eller fredag som stämningssättare.",
      "Låt eleverna illustrera sina dikter och skapa en poesiutställning.",
      "Utforska spoken word och slampoesi – visa videoklipp och låt eleverna prova.",
      "Samarbeta med bildämnet och låt eleverna skapa konst inspirerad av dikter.",
    ],
    bedomningsstod: [
      "Kan eleven identifiera rim, rytm och bildspråk i dikter?",
      "Kan eleven förklara vad en dikt handlar om med egna ord?",
      "Kan eleven skriva en egen dikt med medvetet val av ord och form?",
      "Läser eleven dikter högt med inlevelse och anpassat tempo?",
      "Visar eleven förståelse för att dikter kan tolkas på olika sätt?",
      "Kan eleven använda begrepp som vers, strof, rim och metafor?",
    ],
  },
  {
    title: "Mediakritik och reklam",
    slug: "mediakritik-och-reklam",
    description:
      "Eleverna lär sig granska reklamtexter och medieinnehåll kritiskt och förstå hur reklam försöker påverka oss.",
    estimatedTime: "2–3 lektioner",
    topics: ["Mediakritik", "Reklam", "Kritiskt tänkande"],
    ageGroup: "mellanstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla en grundläggande förståelse för hur reklam och medieinnehåll är konstruerat för att påverka. Genom att analysera reklam från tidningar, tv och sociala medier lär sig eleverna att identifiera avsändare, syfte och målgrupp samt att ställa kritiska frågor. Denna förmåga är allt viktigare i en medievärld där barn dagligen möter stora mängder kommersiella budskap.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 4–6: texter som kombinerar ord och bild, att granska informationens trovärdighet, samt texters avsändare och syfte. Den stödjer kunskapskraven kring att granska och resonera om informationens trovärdighet och källors tillförlitlighet.",
    forberedelser: [
      "Samla 6–8 reklamexempel i olika format: en tidningsannons, en reklamfilm (kort klipp), ett sponsrat inlägg från sociala medier, en produktförpackning, en webbannons och gärna en influencer-reklam.",
      "Förbered analysfrågor på affisch eller utdelningsblad: Vem har gjort reklamen? Vad vill de att du ska göra? Vilka knep använder de? Vem riktar sig reklamen till? Vad berättar de INTE?",
      "Förbered material för elevernas egen reklamskapande: papper, färgpennor, tidningar att klippa i.",
      "Skriv ut en lista med vanliga reklamknep: kändisanvändning, känsloargument, före/efter, begränsat erbjudande, humor.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Vad är reklam? (40–50 min)",
        beskrivning:
          "Börja med att fråga eleverna: Var möter ni reklam? Samla svar på tavlan – de kommer förmodligen nämna TV, YouTube, TikTok, busshållplatser etc. Visa 2–3 reklamexempel och analysera dem gemensamt med hjälp av analysfrågorna. Introducera de vanliga reklamknepen. Låt eleverna diskutera i par: Har ni någon gång velat köpa något på grund av reklam? Vad var det som lockade?",
      },
      {
        steg: "Lektion 2: Granska och jämföra (40–50 min)",
        beskrivning:
          "Eleverna arbetar i grupper med varsin uppsättning reklamexempel. De analyserar varje reklam med hjälp av analysfrågorna och fyller i ett analysblad. Fokusera särskilt på reklam i sociala medier och influencer-samarbeten – diskutera vad som är reklam och vad som är äkta åsikt. Gemensam genomgång: Vilka knep var vanligast? Vilken reklam var svårast att genomskåda? Varför?",
      },
      {
        steg: "Lektion 3: Skapa egen reklam (40–50 min)",
        beskrivning:
          "Eleverna skapar en egen reklam för en påhittad eller riktig produkt. De ska medvetet använda minst två reklamknep. Eleverna presenterar sin reklam för klassen. Klassen analyserar: Vilka knep använde de? Var reklamen övertygande? Avsluta med en diskussion: Nu när vi vet hur reklam fungerar, vad ska vi tänka på när vi möter reklam i vardagen?",
      },
      {
        steg: "Avslutande reflektion (10 min)",
        beskrivning:
          "Eleverna skriver tre saker de lärt sig om reklam. Diskutera gemensamt: Är all reklam dålig? Finns det skillnad på reklam och information? Vad kan vi göra för att inte luras? Sammanfatta de viktigaste insikterna.",
      },
    ],
    uppfoljning: [
      "Inför en reklamanalys varje vecka – ta med ett aktuellt reklamexempel och granska det gemensamt.",
      "Koppla till SO och diskutera konsumentkunskap och reklamens roll i samhället.",
      "Låt eleverna dokumentera reklam de möter under en dag och analysera den.",
      "Bjud in någon som arbetar med reklam eller marknadsföring som gästföreläsare.",
    ],
    bedomningsstod: [
      "Kan eleven identifiera avsändare och syfte i en reklamtext?",
      "Kan eleven ge exempel på vanliga reklamknep och förklara hur de fungerar?",
      "Kan eleven skilja mellan reklam och annan information?",
      "Kan eleven resonera om varför en viss reklam riktar sig till en viss målgrupp?",
      "Visar eleven en kritisk hållning och ställer frågor om reklamens budskap?",
      "Kan eleven skapa en egen reklam med medveten användning av reklamknep?",
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

  {
    title: "Debatt och argumentation",
    slug: "debatt-och-argumentation",
    description:
      "Eleverna lär sig att delta i strukturerade debatter med tydliga roller, argument och motargument i en respektfull samtalsmiljö.",
    estimatedTime: "3–4 lektioner",
    topics: ["Debatt", "Argumentation", "Muntlig kommunikation"],
    ageGroup: "hogstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att argumentera muntligt, lyssna aktivt på andras argument och bemöta dem sakligt. Strukturerad debatt tränar både kritiskt tänkande och demokratisk kompetens – förmågan att föra en dialog även med den som tycker annorlunda. Genom att förbereda och genomföra debatter stärks elevernas självförtroende i muntliga situationer.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 7–9: att argumentera i olika samtalssituationer, att delta i samtal och diskussioner med sakliga argument, att lyssna, ställa frågor och framföra egna åsikter, samt att anpassa språk och innehåll efter syfte och mottagare. Den stödjer kunskapskraven kring att samtala och diskutera med fungerande argumentation.",
    forberedelser: [
      "Välj 3–4 debattämnen med tydligt ja/nej-sida som engagerar eleverna – t.ex. Borde sociala medier vara förbjudet under 15? Borde alla skolor ha skoluniform? Borde läxor avskaffas? Är det rätt att äta kött?",
      "Förbered regler för debatten: tidsgränser, turordning, respektfull ton, att man debatterar saken – inte personen.",
      "Skriv ut argumentationsmall med plats för: tes, tre argument med stöd, förväntat motargument, bemötande.",
      "Ordna klassrummet i debattformat: två lag mittemot varandra, publik i mitten, ordförande vid sidan.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Argumentationsgrunder (45 min)",
        beskrivning:
          "Diskutera: Vad är skillnaden mellan att bråka och att debattera? Samla elevernas tankar. Introducera grundbegreppen: tes, argument, stöd/bevis, motargument, bemötande. Visa ett kort debattklipp (t.ex. från Debatt i SVT eller en skoldebatt) och analysera: Vilka argument användes? Var de övertygande? Varför? Eleverna övar i par: ge ett argument för och ett emot ett enkelt påstående (t.ex. Glass är bättre än tårta).",
      },
      {
        steg: "Lektion 2: Förbered debatten (45 min)",
        beskrivning:
          "Dela in klassen i debattlag om 3–4 elever. Tilldela ämne och sida (för eller emot) – poängtera att man ibland måste argumentera för en sida man inte håller med om, och att det är en viktig övning. Lagen arbetar med argumentationsmallen: de formulerar sin tes, hittar tre starka argument med stöd och försöker förutse motståndarsidans argument. Cirkulera och utmana: Hur vet du det? Har du bevis? Vad skulle motståndaren säga?",
      },
      {
        steg: "Lektion 3: Genomför debatter (45 min)",
        beskrivning:
          "Utse en ordförande (läraren eller en elev) som håller i tider och turordning. Varje debatt följer strukturen: öppningsanförande (2 min/lag), fria argument (5 min), slutanförande (1 min/lag). Publiken antecknar argument de tycker är starka. Efter varje debatt utvärderar publiken: Vilket lag var mest övertygande? Vilket var det starkaste argumentet? Genomför 2–3 debatter.",
      },
      {
        steg: "Lektion 4: Reflektion och utvärdering (45 min)",
        beskrivning:
          "Gemensam reflektion: Vad gör ett argument starkt? Hur bemöter man ett argument man inte har svar på? Var det svårt att argumentera för en sida man inte håller med om? Vad lärde ni er? Eleverna skriver en kort reflektion om sin insats och vad de vill förbättra. Koppla till skrivande: de argument ni förberett kan användas i en argumenterande text.",
      },
    ],
    uppfoljning: [
      "Inför regelbundna korta debatter i klassen – t.ex. veckans debattfråga.",
      "Låt eleverna omvandla sina debattargument till argumenterande texter.",
      "Analysera politiska debatter eller debattartiklar i media med samma verktyg.",
      "Arrangera en debattkväll dit föräldrar eller andra klasser bjuds in.",
    ],
    bedomningsstod: [
      "Formulerar eleven en tydlig tes och relevanta argument?",
      "Underbygger eleven sina argument med stöd (fakta, exempel, erfarenhet)?",
      "Bemöter eleven motargument sakligt och konstruktivt?",
      "Lyssnar eleven aktivt på motståndaren och reagerar på det som sägs?",
      "Håller eleven en respektfull ton och debatterar saken – inte personen?",
      "Anpassar eleven sitt språk och sin framtoning efter debattsituationen?",
    ],
  },
  {
    title: "Kreativt skrivande",
    slug: "kreativt-skrivande",
    description:
      "Eleverna utvecklar sin berättarteknik genom att arbeta med visa-inte-berätta, dialog, miljöbeskrivningar och berättarperspektiv.",
    estimatedTime: "4–5 lektioner",
    topics: ["Kreativt skrivande", "Berättarteknik", "Skönlitterärt skrivande"],
    ageGroup: "hogstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att skriva gestaltande, levande berättelser genom att medvetet använda olika berättartekniska grepp. Kreativt skrivande ger eleverna verktyg att uttrycka sig personligt och konstnärligt, samtidigt som det stärker deras språkliga medvetenhet och förmåga att göra medvetna stilval. Genom att experimentera med språket i en friare form utvecklas även skrivlusten.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 7–9: skönlitterärt skrivande med variation av berättarperspektiv, språkliga stilmedel och textuppbyggnad, att använda skrivprocessens olika steg, samt att bearbeta texter mot ökad tydlighet och uttrycksfullhet. Den stödjer kunskapskraven kring att skriva berättande texter med gestaltande beskrivningar och berättargrepp.",
    forberedelser: [
      "Välj 3–4 korta textutdrag som illustrerar olika berättartekniker: ett med stark visa-inte-berätta, ett med levande dialog, ett med detaljrik miljöbeskrivning och ett med intressant berättarperspektiv.",
      "Förbered skrivövningar (snabbskrivning 5–10 min) för varje teknik.",
      "Skriv ut en verktygslåda för kreativt skrivande med tips och exempel för varje teknik.",
      "Förbered inspirationskort med bilder, första meningar, karaktärsbeskrivningar och situationer som startpunkt för skrivande.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Visa, inte berätta (45 min)",
        beskrivning:
          "Introducera principen visa-inte-berätta (show, don't tell) med ett konkret exempel: jämför 'Anna var rädd' med en gestaltande passage som visar rädsla genom fysiska reaktioner, tankar och handlingar. Analysera textutdraget gemensamt: var visar författaren istället för att berätta? Eleverna gör en snabbskrivning: skriv en kort scen som visar en känsla (arg, glad, nervös, ledsen) utan att nämna känslan. Dela och gissa varandras känslor i par.",
      },
      {
        steg: "Lektion 2: Dialog och miljöbeskrivning (45 min)",
        beskrivning:
          "Analysera dialogen i ett textutdrag: Hur avslöjar dialogen karaktärernas personlighet? Visa regler för dialogskrivning: replikstreck, inquit-fraser (sa, frågade, viskade), att bryta upp dialog med handling. Eleverna skriver en kort dialogscen mellan två karaktärer. Gå vidare till miljöbeskrivning: visa hur sinnesintryck (syn, hörsel, lukt, känsel, smak) gör en text levande. Eleverna beskriver en plats med alla sinnen.",
      },
      {
        steg: "Lektion 3: Berättarperspektiv och struktur (45 min)",
        beskrivning:
          "Presentera olika berättarperspektiv: förstaperson, tredjeperson begränsad, allvetande. Visa samma scen skriven ur olika perspektiv – diskutera effekten. Introducera berättelsestruktur: freytags pyramid med exposition, stigande handling, klimax, fallande handling, upplösning. Planera en egen berättelse: eleverna väljer perspektiv, huvudperson, konflikt och skissar en handlingskurva.",
      },
      {
        steg: "Lektion 4: Skriv din berättelse (45 min)",
        beskrivning:
          "Eleverna skriver sin berättelse med medveten användning av de tekniker de lärt sig. Uppmuntra dem att markera i marginalen vilken teknik de använder (V = visa-inte-berätta, D = dialog, M = miljöbeskrivning). Cirkulera och ge individuellt stöd – lyft goda exempel och ge konkreta förslag. De som blir klara kan läsa och ge respons på en kompis berättelse.",
      },
      {
        steg: "Lektion 5: Bearbetning och delning (45 min)",
        beskrivning:
          "Strukturerad kamratrespons med fokus på berättarteknik: Var i texten visar författaren istället för att berätta? Fungerar dialogen? Kan du se platsen framför dig? Eleverna bearbetar sin text. Avsluta med uppläsning av utdrag – frivilligt. Samla berättelserna i en antologi eller digital samling.",
      },
    ],
    uppfoljning: [
      "Inför regelbundna snabbskrivningar som uppvärmning i svensklektionerna.",
      "Starta en skrivarcirkel där intresserade elever delar och utvecklar sina texter.",
      "Låt eleverna analysera berättarteknik i de skönlitterära böcker de läser.",
      "Uppmuntra deltagande i skrivtävlingar som Boktjuvens novelltävling eller liknande.",
    ],
    bedomningsstod: [
      "Använder eleven visa-inte-berätta för att gestalta känslor och stämningar?",
      "Skriver eleven dialog som driver handlingen framåt och avslöjar karaktärers personlighet?",
      "Använder eleven sinnesintryck i sina miljöbeskrivningar?",
      "Har eleven gjort ett medvetet val av berättarperspektiv?",
      "Har berättelsen en tydlig struktur med konflikt och utveckling?",
      "Visar eleven förmåga att bearbeta sin text utifrån respons?",
    ],
  },
  {
    title: "Språkhistoria och språkförändring",
    slug: "sprakhistoria-och-sprakforandring",
    description:
      "Eleverna utforskar hur det svenska språket förändrats från runsvenska till dagens svenska och reflekterar över pågående språkförändring.",
    estimatedTime: "3–4 lektioner",
    topics: ["Språkhistoria", "Språkförändring", "Språksociologi"],
    ageGroup: "hogstadiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förståelse för det svenska språkets historia och hur språk ständigt förändras. Genom att se hur svenska har utvecklats från urnordiska och runsvenska till dagens moderna svenska får eleverna perspektiv på att språkförändring är naturligt och pågående. De lär sig också att reflektera över sin egen roll som språkanvändare och hur nya ord, slang och lånord förändrar språket idag.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i svenska för årskurs 7–9: svenska språkets historia med några viktiga händelser, nordiska språk och deras likheter och skillnader, samt hur språk förändras och varierar beroende på sammanhang och tid. Den stödjer kunskapskraven kring att resonera om svenska språkets historia, varianter och framtid.",
    forberedelser: [
      "Förbered en tidslinje över svenska språkets historia med de viktigaste perioderna: urnordiska, runsvenska, fornsvenska, äldre nysvenska, yngre nysvenska, nusvenska.",
      "Samla textexempel från olika perioder: en runinskription (med översättning), ett utdrag ur en medeltida lagtext, ett stycke av Bellman eller Strindberg och en modern text.",
      "Förbered en lista med ord som ändrat betydelse, lånord från olika språk (tyska, franska, engelska) och nyord.",
      "Ha tillgång till SAOL (Svenska Akademiens ordlista) eller SAOL online för övning i att slå upp ord.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Resa genom tiden (45 min)",
        beskrivning:
          "Börja med att visa en runinskription och fråga: Kan ni läsa det här? Det är svenska! Presentera tidslinjen och gå igenom perioderna med korta, engagerande exempel. Läs textexemplen högt – från äldst till nyast. Låt eleverna reagera: Vad förstår ni? Vad låter konstigt? Diskutera: Vad tror ni att en viking hade tyckt om er svenska? Eleverna fyller i tidslinjen med egna anteckningar.",
      },
      {
        steg: "Lektion 2: Lånord och påverkan (45 min)",
        beskrivning:
          "Fokusera på hur andra språk påverkat svenska: tyska under hansatiden (arbete, köpa, fönster), franska under stormaktstiden (möbel, paraply, fåtölj), engelska idag (cool, dejta, streama). Eleverna arbetar i grupper med att sortera lånord efter ursprungsspråk. Diskutera: Varför lånar vi ord? Är det bra eller dåligt? Jämför med hur Svenska Akademien och Språkrådet arbetar med språkvård idag.",
      },
      {
        steg: "Lektion 3: Levande språkförändring (45 min)",
        beskrivning:
          "Fokusera på att språkförändring pågår nu: slang, nyord (lista från Språkrådets nyordslista), engelskans påverkan, genuspronomen (hen). Eleverna samlar slangord och nya uttryck de själva använder. Diskutera: Vilka av era ord tror ni kommer finnas kvar om 50 år? Eleverna skriver en kort text om ett nyord eller slangord: vad det betyder, var det kommer ifrån, och varför det används.",
      },
      {
        steg: "Lektion 4: Presentation och framtidsblick (45 min)",
        beskrivning:
          "Eleverna presenterar sina texter om nyord/slangord. Avslutande diskussion: Hur tror ni att svenskan ser ut om 100 år? Kommer vi prata mer engelska? Kommer AI förändra språket? Eleverna skriver en kort framtidsvision om det svenska språket. Sammanfatta: Språk är levande – det förändras hela tiden, och ni är med och förändrar det.",
      },
    ],
    uppfoljning: [
      "Starta en ordsamling i klassrummet med nya ord och slang som dyker upp under terminen.",
      "Jämför svenska med norska och danska – läs texter och lyssna på språken.",
      "Besök Språkrådets webbplats och diskutera deras roll i språkvården.",
      "Ge eleverna i uppgift att intervjua äldre släktingar om ord och uttryck som inte längre används.",
    ],
    bedomningsstod: [
      "Kan eleven beskriva de viktigaste perioderna i svenska språkets historia?",
      "Kan eleven ge exempel på lånord och förklara deras ursprung?",
      "Kan eleven resonera om varför och hur språk förändras?",
      "Visar eleven förståelse för sambandet mellan samhällsförändringar och språkförändringar?",
      "Kan eleven reflektera över sin egen roll som språkanvändare och ge exempel på pågående språkförändring?",
      "Kan eleven jämföra svenska med andra nordiska språk och identifiera likheter?",
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
  {
    title: "Essäskrivning",
    slug: "essaskrivning",
    description:
      "Eleverna utvecklar det personliga essäuttrycket genom att utforska essäns form, röst och förhållande mellan det personliga och det allmängiltiga.",
    estimatedTime: "4–5 lektioner",
    topics: ["Essäskrivning", "Personligt skrivande", "Reflektion"],
    ageGroup: "gymnasiet",
    syfte:
      "Syftet är att eleverna ska utveckla sin förmåga att skriva essäer som förenar personlig reflektion med saklig kunskap. Essän är en unik texttyp som ger skribenten frihet att tänka högt, pröva idéer och röra sig mellan det personliga och det allmängiltiga. Genom essäskrivning stärker eleverna sin förmåga att formulera och utveckla tankar i skrift, hitta sin egen röst och våga ha en hållning i komplexa frågor.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i Svenska 2 och 3: skrivande av texter av vetenskaplig och utredande karaktär, att resonera och reflektera i skrift, samt att utveckla ett personligt och varierat skriftspråk. Den stödjer kunskapskraven kring att skriva texter med tydlig disposition, varierat språk och anpassning till texttyp och sammanhang.",
    forberedelser: [
      "Välj 2–3 essäer av kända essäister som modelltexter – t.ex. Montaigne (i översättning), Nina Burton, Lena Andersson, Steve Jobs Stanford-tal (som talad essä) eller Karin Boye.",
      "Förbered en kort presentation av essäns historia och kännetecken: det personliga anslaget, det undersökande förhållningssättet, rörelsen mellan erfarenhet och tanke.",
      "Skriv ut en analysram: röst (hur märks skribenten?), ämne (vad handlar det om?), struktur (hur rör sig texten?), förhållande personligt/allmängiltigt.",
      "Förbered en lista med möjliga essäämnen som inbjuder till reflektion: Mod, Att misslyckas, Hemkänsla, Skärmtid, Att bli vuxen, Tystnad.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Vad är en essä? (50 min)",
        beskrivning:
          "Presentera essän som texttyp – ordet kommer från franskans 'essayer' (att försöka/pröva). Det är en text som tänker högt, inte en text som redan vet svaret. Läs en kort essä eller ett essäutdrag gemensamt. Analysera med analysramen: Hur börjar den? Var märker vi skribentens röst? Hur rör sig texten mellan det personliga och det allmänna? Diskutera: Vad skiljer en essä från en debattartikel? Från en krönika? Eleverna skriver en snabb fritext (10 min): Berätta om en vardaglig sak som fick dig att tänka.",
      },
      {
        steg: "Lektion 2: Röst och reflektion (50 min)",
        beskrivning:
          "Fördjupning i essäns röst: det personliga tilltalet, det reflekterande tempot, att våga vara osäker och prövande. Analysera ett till essäutdrag och identifiera passager där skribenten reflekterar, associerar, byter perspektiv. Övning i par: Berätta en personlig erfarenhet kopplad till dagens essäämne. Kompisen ställer fördjupande frågor. Eleverna väljer sitt essäämne och börjar skriva ned associationer, minnen och tankar som tankekarta.",
      },
      {
        steg: "Lektion 3: Skrivande (50 min)",
        beskrivning:
          "Diskutera essäns struktur: den behöver inte vara linjär men ska ha en röd tråd. Visa hur man kan börja med en konkret scen, ett minne eller en fråga. Modellera en essäinledning gemensamt. Eleverna skriver sin essä – uppmuntra dem att vara personliga, att våga associera fritt och att inte censurera sig själva i första utkastet. Betona processen: det är i skrivandet man upptäcker vad man tänker.",
      },
      {
        steg: "Lektion 4: Kamratsamtal och bearbetning (50 min)",
        beskrivning:
          "Eleverna läser varandras essäer i par. Responsen fokuserar på: Var märker jag din röst? Var vill jag veta/höra mer? Rör sig texten mellan det personliga och det allmänna? Finns en röd tråd? Eleverna bearbetar sin essä. Betona att bearbetning av en essä handlar om att fördjupa tanken – inte bara rätta språkfel.",
      },
      {
        steg: "Lektion 5: Essäseminarium (50 min)",
        beskrivning:
          "Eleverna läser varandras färdiga essäer i smågrupper och diskuterar dem som i ett litterärt seminarium. Avslutande helklassdiskussion: Vad har ni lärt er om att skriva essä? Vad är det svåraste? Vad är det friaste? Hur skiljer sig essäskrivande från annat skrivande ni gjort?",
      },
    ],
    uppfoljning: [
      "Läs essäer regelbundet som del av kursen – bygg en essäantologi med klassens texter.",
      "Introducera den talande essän (spoken essay) som muntlig presentation.",
      "Koppla till litteraturhistorien: läs Montaigne, Emerson eller svenska essäister i kontext.",
      "Uppmuntra eleverna att skriva essäer som del av sitt gymnasiearbete eller i andra kurser.",
    ],
    bedomningsstod: [
      "Har essän ett personligt tilltal och en tydlig skrivarröst?",
      "Rör sig texten mellan det personliga/konkreta och det allmängiltiga/abstrakta?",
      "Visar eleven förmåga att reflektera, pröva idéer och utveckla tankar?",
      "Har essän en röd tråd trots eventuella associativa utvikningar?",
      "Är språket varierat, precist och anpassat till essäformen?",
      "Visar eleven mod att vara personlig och ha en egen hållning?",
    ],
  },
  {
    title: "Textanalys med litteraturvetenskapliga begrepp",
    slug: "textanalys-med-litteraturvetenskapliga-begrepp",
    description:
      "Eleverna fördjupar sin textanalys med hjälp av narratologiska och stilistiska begrepp som berättarröst, fokalisering, intertextualitet och stilnivå.",
    estimatedTime: "4–5 lektioner",
    topics: ["Textanalys", "Narratologi", "Stilanalys"],
    ageGroup: "gymnasiet",
    syfte:
      "Syftet är att eleverna ska tillägna sig ett precist begreppsapparat för att analysera litterära texter på en fördjupad nivå. Genom att använda narratologiska begrepp som fokalisering, berättartid och intertextualitet samt stilistiska begrepp som stilnivå, syntax och bildspråk får eleverna verktyg att formulera mer nyanserade och välgrundade tolkningar. Dessa begrepp förbereder eleverna för akademiska litteraturstudier.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i Svenska 2 och 3: skönlitteratur och sakprosa med fokus på texternas form och innehåll, litteraturvetenskapliga begrepp och analysmodeller, samt att tolka och resonera kring texter från olika epoker. Den stödjer kunskapskraven kring att analysera skönlitteratur med hjälp av adekvata begrepp och att formulera välgrundade tolkningar.",
    forberedelser: [
      "Välj 2–3 litterära texter med rik analytisk potential – gärna en novell med intressant berättarteknik (t.ex. Kafka, Borges, Hjalmar Söderberg, Sara Lidman) och ett romanutdrag med tydlig stilistisk prägel.",
      "Förbered en begreppslista med definitioner och exempel: fokalisering (intern/extern), berättartid (ordning, varaktighet, frekvens), berättarröst (homodiegetisk/heterodiegetisk), intertextualitet, fri indirekt diskurs, stilnivå, syntax, bildspråk.",
      "Skriv ut en analysmodell som strukturerar arbetet: 1) Vad berättas? 2) Hur berättas det? 3) Varför berättas det så? 4) Vilken effekt ger det?",
      "Förbered korta textutdrag som illustrerar varje begrepp tydligt.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Narratologiska grunder (50 min)",
        beskrivning:
          "Introducera narratologin som verktyg: skillnaden mellan vad som berättas (historia) och hur det berättas (diskurs). Gå igenom begreppen berättarröst och fokalisering med konkreta exempel. Visa samma händelse berättad med olika fokalisering – diskutera effekten. Eleverna analyserar ett kort textutdrag: Vem berättar? Vem ser? Varför har författaren valt denna lösning?",
      },
      {
        steg: "Lektion 2: Berättartid och struktur (50 min)",
        beskrivning:
          "Gå igenom berättartidens dimensioner: ordning (kronologisk, analepser/prolepser), varaktighet (scen, sammanfattning, paus, ellips) och frekvens (singulativ, iterativ). Analysera textutdrag gemensamt: hur hanterar författaren tiden? Var går det snabbt/långsamt och varför? Introducera fri indirekt diskurs och visa hur den sudddar gränsen mellan berättare och karaktär. Eleverna identifierar dessa drag i sin text.",
      },
      {
        steg: "Lektion 3: Stilanalys (50 min)",
        beskrivning:
          "Fokusera på textens stilistiska dimension: ordval och stilnivå (högt, neutralt, lågt), syntax (meningslängd, bisatser, fragment), bildspråk (metaforer, liknelser, symbolik), ljudmässiga effekter (allitteration, assonans). Jämför utdrag med olika stilar och diskutera: Vad signalerar stilen? Hur påverkar den läsarens upplevelse? Eleverna gör en detaljerad stilanalys av ett kort utdrag och presenterar för varandra.",
      },
      {
        steg: "Lektion 4: Intertextualitet och kontext (50 min)",
        beskrivning:
          "Introducera intertextualitet: hur texter refererar till, citerar eller omarbetar andra texter. Visa exempel – gärna en modern text som medvetet anspelar på en äldre. Diskutera: Vad tillför intertextualiteten? Måste man känna igen referensen? Koppla till litteraturhistorisk kontext: hur påverkar vetskapen om en texts tillkomsttid vår tolkning? Eleverna identifierar möjliga intertextuella kopplingar i texterna de arbetar med.",
      },
      {
        steg: "Lektion 5: Skriva fördjupad analys (50 min)",
        beskrivning:
          "Eleverna skriver en fördjupad analystext om en av de litterära texterna. De ska använda minst fyra litteraturvetenskapliga begrepp och koppla sin analys till en övergripande tolkning. Kamratrespons med fokus på: Används begreppen korrekt? Är tolkningen välgrundad och kopplad till texten? Finns det balans mellan beskrivning och analys? Bearbetning och inlämning.",
      },
    ],
    uppfoljning: [
      "Använd begreppen löpande i all litteraturundervisning under kursen.",
      "Låt eleverna jämföra analyser av samma text och diskutera hur olika begreppsval ger olika tolkningar.",
      "Läs litteraturvetenskapliga artiklar eller recensioner och identifiera vilka begrepp som används.",
      "Koppla till gymnasiearbetet för de som skriver inom litteratur.",
    ],
    bedomningsstod: [
      "Använder eleven narratologiska begrepp korrekt och funktionellt?",
      "Kan eleven analysera berättarperspektiv och fokalisering och förklara deras effekt?",
      "Kan eleven genomföra en stilanalys med relevant begreppsanvändning?",
      "Formulerar eleven en sammanhängande tolkning som bygger på textanalys?",
      "Visar eleven förståelse för sambandet mellan form och innehåll?",
      "Kan eleven identifiera och diskutera intertextuella kopplingar?",
    ],
  },
  {
    title: "Språk och makt",
    slug: "sprak-och-makt",
    description:
      "Eleverna utforskar språkets roll som maktmedel i samhället och analyserar hur språkpolitik, normer och språkbruk skapar och upprätthåller maktstrukturer.",
    estimatedTime: "4–5 lektioner",
    topics: ["Språk och makt", "Språkpolitik", "Språksociologi"],
    ageGroup: "gymnasiet",
    syfte:
      "Syftet är att eleverna ska utveckla en fördjupad förståelse för hur språk fungerar som maktmedel i samhället. Genom att analysera hur språknormer, språkpolitik och språkbruk skapar, upprätthåller och utmanar maktstrukturer utvecklar eleverna en kritisk språklig medvetenhet. De lär sig att se samband mellan språk och identitet, språk och demokrati, samt språk och social ojämlikhet.",
    kopplingKursplan:
      "Lektionen knyter an till centralt innehåll i Svenska 2 och 3: språkets betydelse för att utöva inflytande och för ens delaktighet i samhället, språklig variation i talat och skrivet språk med tonvikt på hur kön, social bakgrund och kulturell tillhörighet påverkar språket, samt språkvård och språkpolitik i Sverige och internationellt. Den stödjer kunskapskraven kring att resonera om språk och makt.",
    forberedelser: [
      "Samla exempel på språk och makt i praktiken: ett utdrag ur en politisk debatt, ett myndighetsbrev med svårt språk, ett exempel på härskartekniker, ett utdrag ur en reklamkampanj som spelar på språkliga normer, och ett exempel på hur minoritetsspråk behandlats historiskt.",
      "Förbered bakgrundsmaterial om Sveriges språklag (2009), de nationella minoritetsspråken, klarspråksarbetet och debatten om hen.",
      "Skriv ut nyckelbegrepp: språknorm, standardspråk, dialekt, sociolekt, register, språkpolitik, klarspråk, härskartekniker, språklig diskriminering.",
      "Förbered diskussionsfrågor som utmanar elevernas egna föreställningar om rätt och fel i språk.",
    ],
    genomforande: [
      {
        steg: "Lektion 1: Språk som maktverktyg (50 min)",
        beskrivning:
          "Börja provocerande: Visa ett myndighetsbrev fullt av facktermer och fråga: Är det här bra svenska? Vem gynnas av att det skrivs så? Diskutera grundtanken: den som behärskar språket har makt – i klassrummet, i samhällsdebatten, i rättsväsendet. Introducera nyckelbegreppen. Analysera exemplen gemensamt: Hur används språk för att inkludera eller exkludera? Eleverna diskuterar i grupper: Har ni själva upplevt att språk skapar makt eller utanförskap?",
      },
      {
        steg: "Lektion 2: Språknormer och status (50 min)",
        beskrivning:
          "Fördjupning i språknormer: Vad är korrekt svenska? Vem bestämmer? Diskutera skillnaden mellan standardspråk, dialekt, sociolekt och ungdomsspråk. Analysera: varför har vissa sätt att tala högre status? Undersök hur dialekter och brytning uppfattas – visa forskning om språkattityder. Diskutera: Är det fult att prata dialekt? Varför kan någon med brytning ha svårare att få jobb? Eleverna analyserar sitt eget språkbruk i olika situationer.",
      },
      {
        steg: "Lektion 3: Språkpolitik i Sverige (50 min)",
        beskrivning:
          "Presentera Sveriges språklag och dess syfte. Diskutera: Varför behövs en språklag? Vilka minoritetsspråk skyddas och varför? Undersök klarspråksarbetet: varför ska myndigheter skriva begripligt? Diskutera historiska exempel på språkförtryck: samiska språkförbudet, tornedalsfinska. Eleverna arbetar i grupper med att analysera ett konkret fall av språk och makt (valfritt: myndighetsspråk, mediespråk, språkdebatt).",
      },
      {
        steg: "Lektion 4: Språk, genus och identitet (50 min)",
        beskrivning:
          "Undersök hur språk och kön hänger samman: yrkestitlar, generiskt maskulinum, hen-debatten. Analysera härskartekniker som språkliga maktstrategier. Diskutera hur språk skapar och speglar identitet: vem får tala? vem blir lyssnad på? vems språk räknas? Eleverna analyserar ett samtal eller en debatt ur ett maktperspektiv: Vem talar mest? Vem avbryter? Vilka ord väljs?",
      },
      {
        steg: "Lektion 5: Syntes och presentation (50 min)",
        beskrivning:
          "Eleverna skriver en argumenterande eller utredande text om ett valfritt tema inom språk och makt. Alternativt håller de en kort muntlig presentation. Avslutande klassdiskussion: Vad kan vi göra i vardagen för att använda språket mer medvetet och rättvist? Hur kan kunskap om språk och makt stärka oss som medborgare?",
      },
    ],
    uppfoljning: [
      "Analysera aktuella språkdebatter i media löpande under kursen.",
      "Låt eleverna granska skolans egna texter (informationsbrev, regler) ur ett klarspråksperspektiv.",
      "Bjud in en språkvetare, politiker eller journalist för att diskutera språk och makt.",
      "Koppla till samhällskunskap och diskutera demokrati, yttrandefrihet och representation.",
    ],
    bedomningsstod: [
      "Kan eleven ge konkreta exempel på hur språk fungerar som maktmedel?",
      "Kan eleven resonera om sambandet mellan språknormer och social status?",
      "Visar eleven kunskap om Sveriges språkpolitik och språklag?",
      "Kan eleven analysera en text eller situation ur ett språk-och-makt-perspektiv?",
      "Formulerar eleven en välgrundad och nyanserad hållning i frågor om språk och makt?",
      "Visar eleven förmåga att reflektera över sitt eget språkbruk i relation till makt?",
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
