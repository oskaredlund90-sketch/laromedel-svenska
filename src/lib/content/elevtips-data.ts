import type { AgeGroup } from "@/lib/supabase/types";

export interface ElevTip {
  slug: string;
  title: string;
  summary: string;
  emoji: string;
  tags: string[];
  intro: string;
  steps: { title: string; body: string }[];
  exercise: { title: string; description: string };
}

export const ELEVTIPS: Record<AgeGroup, ElevTip[]> = {
  lagstadiet: [
    {
      slug: "las-varje-dag",
      title: "Läs varje dag",
      summary: "Bli en bättre läsare genom att läsa lite varje dag.",
      emoji: "\uD83D\uDCD6",
      tags: ["Läsning", "Vardagsvanor"],
      intro:
        "Visste du att om du läser bara 15 minuter varje dag blir du jättebra på att läsa? Det spelar ingen roll vad du läser \u2013 serietidningar, sagoböcker eller faktaböcker. Huvudsaken är att du läser!",
      steps: [
        {
          title: "Välj en bok du tycker om",
          body: "Gå till biblioteket eller titta hemma. Välj en bok med en bild på framsidan som ser spännande ut. Det är lättare att läsa om boken handlar om något du gillar.",
        },
        {
          title: "Hitta en lugn stund",
          body: "Sätt dig i soffan, i sängen eller på golvet. Stäng av teven och lägg undan surfplattan. Nu är det läsdags!",
        },
        {
          title: "Läs i 15 minuter",
          body: "Du kan be en vuxen sätta en timer. Läs sakta och titta på bilderna. Om du inte förstår ett ord, fråga någon eller gissa utifrån bilden.",
        },
        {
          title: "Berätta vad du läst",
          body: "När du har läst klart, berätta för någon vad boken handlade om. Då kommer du ihåg bättre!",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Gör en läsdagbok! Rita en sol för varje dag du läser i en vecka. Kan du fylla hela veckan med solar? Om du läser sju dagar i rad har du klarat utmaningen!",
      },
    },
    {
      slug: "skriv-en-saga",
      title: "Skriv en saga",
      summary: "Lär dig skriva egna berättelser med en början, mitten och ett slut.",
      emoji: "\u270D\uFE0F",
      tags: ["Skrivande", "Berättelser"],
      intro:
        "Alla kan skriva en saga! En saga har en början, en mitten och ett slut. I din saga kan vad som helst hända \u2013 drakar kan flyga, hundar kan prata och du kan vara hjälten!",
      steps: [
        {
          title: "Hitta på en huvudperson",
          body: "Vem handlar din saga om? Det kan vara en prinsessa, en robot, ett djur eller dig själv. Ge din person ett namn.",
        },
        {
          title: "Skriv en början",
          body: "Börja med \u201cDet var en gång\u2026\u201d. Berätta var din person bor och vad hen gör. Till exempel: \u201cDet var en gång en katt som hette Smulan. Hon bodde i en röd stuga.\u201d",
        },
        {
          title: "Hitta på ett problem",
          body: "I mitten av sagan händer något spännande. Kanske försvinner något, eller så dyker det upp ett monster. Till exempel: \u201cEn dag hittade Smulan en hemlig dörr i källaren.\u201d",
        },
        {
          title: "Skriv ett slut",
          body: "Hur löser din person problemet? Skriv ett slut som gör dig glad. Till exempel: \u201cBakom dörren fanns en skattkista full med godis. Smulan delade med alla sina vänner.\u201d",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Skriv en saga om ett djur som hittar något magiskt. Din saga ska vara minst fem meningar lång. Rita en bild till din saga och visa den för en kompis!",
      },
    },
    {
      slug: "sa-stavas-det",
      title: "Så stavas det",
      summary: "Knep för att komma ihåg hur ord stavas.",
      emoji: "\uD83D\uDD24",
      tags: ["Stavning", "Ordkunskap"],
      intro:
        "Ibland är det svårt att stava rätt. Men det finns smarta knep som hjälper dig! Ju mer du övar, desto lättare blir det. Här får du tips som gör stavning roligare.",
      steps: [
        {
          title: "Lyssna på ordet",
          body: "Säg ordet högt och lyssna noga. Dela upp det i bitar. Ordet \u201celefant\u201d blir: e-le-fant. Skriv en bit i taget.",
        },
        {
          title: "Skriv ordet många gånger",
          body: "Ta ett papper och skriv ordet fem gånger. Titta, täck över det och skriv igen. Kolla om du stavade rätt.",
        },
        {
          title: "Hitta på en ramsa",
          body: "Gör en rolig ramsa för svåra ord. Till exempel: \u201cOch stavas med c-h, det ska jag komma ihåg!\u201d",
        },
        {
          title: "Läs mycket",
          body: "Ju mer du läser, desto fler ord lär du dig stava. Dina ögon vänjer sig vid hur orden ser ut.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj fem ord som du tycker är svåra att stava. Skriv varje ord tre gånger. Hitta på en ramsa för det svåraste ordet. Testa sedan att stava alla fem ord utan att titta!",
      },
    },
  ],
  mellanstadiet: [
    {
      slug: "mindmap-for-skrivande",
      title: "Mindmap för skrivande",
      summary: "Använd en mindmap för att planera ditt skrivande innan du börjar.",
      emoji: "\uD83E\uDDE0",
      tags: ["Skrivande", "Planering"],
      intro:
        "Har du någon gång suttit framför ett tomt papper och inte vetat vad du ska skriva? En mindmap hjälper dig att samla dina tankar och idéer innan du börjar skriva. Det är som en karta över dina idéer!",
      steps: [
        {
          title: "Skriv ämnet i mitten",
          body: "Ta ett stort papper och skriv ämnet du ska skriva om i mitten. Rita en ring runt det. Till exempel: \u201cMin sommar\u201d.",
        },
        {
          title: "Dra ut grenar med huvudidéer",
          body: "Rita streck ut från mitten. Vid varje streck skriver du en sak du vill berätta om. Till exempel: \u201cresan till mormor\u201d, \u201cbadsjön\u201d, \u201cnya kompisar\u201d.",
        },
        {
          title: "Lägg till detaljer",
          body: "Från varje gren drar du ut mindre streck med detaljer. Under \u201cbadsjön\u201d kanske du skriver: \u201cvarmt vatten\u201d, \u201choppade från bryggan\u201d, \u201cåt glass efteråt\u201d.",
        },
        {
          title: "Bestäm ordningen",
          body: "Numrera dina grenar i den ordning du vill skriva om dem. Nu har du en plan! Börja skriva en text utifrån din mindmap.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Gör en mindmap om ämnet \u201cMitt favoritdjur\u201d. Skriv djuret i mitten och skapa minst fyra grenar (t.ex. utseende, beteende, var det bor, varför du gillar det). Skriv sedan en kort text utifrån din mindmap.",
      },
    },
    {
      slug: "las-snabbare-och-battre",
      title: "Läs snabbare och bättre",
      summary: "Strategier för att förstå det du läser och läsa mer effektivt.",
      emoji: "\u26A1",
      tags: ["Läsning", "Lässtrategier"],
      intro:
        "Att läsa handlar inte bara om att läsa fort \u2013 det handlar om att förstå det du läser. Med rätt strategier kan du både läsa snabbare och komma ihåg mer. Här lär du dig hur!",
      steps: [
        {
          title: "Läs rubriker och bilder först",
          body: "Innan du läser hela texten, titta på rubriker, underrubriker och bilder. Det ger dig en uppfattning om vad texten handlar om, och då förstår du lättare det du läser.",
        },
        {
          title: "Ställ frågor till texten",
          body: "Fråga dig själv: Vad handlar det här om? Vad tror jag händer sen? Varför gör personen så? När du ställer frågor läser du mer aktivt och kommer ihåg bättre.",
        },
        {
          title: "Sammanfatta stycken",
          body: "Efter varje stycke, stanna och tänk: Vad var det viktigaste i det här stycket? Försök säga det med egna ord, i en eller två meningar.",
        },
        {
          title: "Slå upp svåra ord",
          body: "Om du stöter på ett ord du inte förstår, försök först gissa vad det betyder utifrån sammanhanget. Om du fortfarande inte förstår, slå upp det. Skriv gärna upp det nya ordet.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en text ur din svenskbok. Läs först alla rubriker och titta på bilderna. Skriv tre saker du tror texten handlar om. Läs sedan texten och sammanfatta varje stycke med en mening. Stämde dina gissningar?",
      },
    },
    {
      slug: "bygg-ditt-ordforrad",
      title: "Bygg ditt ordförråd",
      summary: "Tips för att lära dig nya ord och använda dem i ditt skrivande.",
      emoji: "\uD83D\uDCDA",
      tags: ["Ordkunskap", "Skrivande"],
      intro:
        "Ju fler ord du kan, desto bättre kan du uttrycka dig \u2013 både när du skriver och när du pratar. Att bygga sitt ordförråd är som att samla verktyg i en verktygslåda. Fler verktyg betyder att du kan bygga häftigare saker!",
      steps: [
        {
          title: "Ha en orddagbok",
          body: "Skaffa ett litet häfte där du skriver nya ord du stöter på. Skriv ordet, vad det betyder och en exempelmening. Titta i häftet ibland och repetera.",
        },
        {
          title: "Använd synonymer",
          body: "Istället för att alltid skriva \u201cbra\u201d, prova \u201cutmärkt\u201d, \u201cfantastiskt\u201d eller \u201cförträffligt\u201d. Sök efter synonymer på nätet eller i en synonymordbok.",
        },
        {
          title: "Läs olika typer av texter",
          body: "Läs inte bara samma typ av bok. Prova att läsa en tidningsartikel, en dikt, en faktatext och en berättelse. Olika texter lär dig olika ord.",
        },
        {
          title: "Testa orden i egna meningar",
          body: "Varje gång du lär dig ett nytt ord, skriv tre egna meningar med det ordet. Då fastnar det i minnet mycket bättre.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Starta en orddagbok denna vecka! Skriv minst tre nya ord varje dag. Vid veckans slut ska du ha minst 15 nya ord. Välj sedan fem av orden och skriv en kort berättelse där alla fem ord finns med.",
      },
    },
  ],
  hogstadiet: [
    {
      slug: "essatekniker",
      title: "Essätekniker",
      summary: "Lär dig skriva välstrukturerade och övertygande essäer.",
      emoji: "\uD83D\uDCDD",
      tags: ["Skrivande", "Essä", "Argumentation"],
      intro:
        "En essä är en av de vanligaste texttyperna du kommer att skriva i skolan. En bra essä kräver en tydlig struktur, starka argument och ett personligt perspektiv. Här lär du dig grunderna för att skriva essäer som imponerar.",
      steps: [
        {
          title: "Formulera en tydlig tes",
          body: "Din tes är det påstående eller den åsikt du vill argumentera för. Den ska vara specifik och tydlig. Istället för \u201cSociala medier påverkar ungdomar\u201d, skriv \u201cSociala medier har en negativ inverkan på ungdomars självkänsla\u201d. Tesen placeras oftast i slutet av inledningen.",
        },
        {
          title: "Planera dina argument",
          body: "Varje argument ska ha en egen paragraf med: ett påstående, en förklaring och ett bevis eller exempel. Sikta på minst tre argument som stödjer din tes. Tänk också på motargument du kan bemöta.",
        },
        {
          title: "Skriv en engagerande inledning",
          body: "Inledningen ska fånga läsaren. Börja med en fråga, ett citat, ett överraskande faktum eller en kort berättelse. Presentera sedan ämnet och avsluta inledningen med din tes.",
        },
        {
          title: "Avsluta med kraft",
          body: "I avslutningen sammanfattar du dina argument och kopplar tillbaka till tesen. Avsluta gärna med en tankeväckande mening som ger läsaren något att fundera på. Tillför inte nya argument i avslutningen.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Skriv en kort essä (ca 300 ord) om ämnet: \u201cBör mobiltelefoner vara tillåtna i klassrummet?\u201d. Följ strukturen: inledning med tes, tre argumenterande stycken och en avslutning. Be en kompis eller lärare ge feedback.",
      },
    },
    {
      slug: "referatskrivning",
      title: "Referatskrivning",
      summary: "Så skriver du ett bra referat av en text eller bok.",
      emoji: "\uD83D\uDCCB",
      tags: ["Skrivande", "Referat", "Läsning"],
      intro:
        "Ett referat är en sammanfattning av någon annans text med dina egna ord. Det visar att du förstått innehållet och kan plocka ut det viktigaste. Referatskrivning är en viktig färdighet som du har nytta av i hela din skoltid \u2013 och även senare.",
      steps: [
        {
          title: "Läs texten noggrant",
          body: "Läs hela texten en gång utan att anteckna. Läs den sedan en gång till och stryk under eller markera nyckelmeningar och viktiga begrepp. Fokusera på huvudbudskapet, inte detaljerna.",
        },
        {
          title: "Skriv stödord",
          body: "Stäng boken eller vänd på pappret. Skriv ner de viktigaste punkterna med egna ord i punktform. Om du inte kommer ihåg, läs delen igen. Stödorden hjälper dig att inte kopiera texten ordagrant.",
        },
        {
          title: "Formulera referatet",
          body: "Skriv referatet utifrån dina stödord. Använd referatmarkörer som \u201cFörfattaren menar att\u2026\u201d, \u201cI texten framgår att\u2026\u201d eller \u201cEnligt artikeln\u2026\u201d. Håll dig till textens innehåll \u2013 lägg inte till egna åsikter.",
        },
        {
          title: "Kontrollera och redigera",
          body: "Jämför ditt referat med originaltexten. Har du fått med det viktigaste? Har du använt egna formuleringar? Kontrollera att du inte kopierat meningar rakt av. Ange alltid källan.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en artikel från en dagstidning (papperstidning eller på nätet). Läs den två gånger och skriv stödord. Skriv sedan ett referat på ungefär 150 ord. Använd minst tre olika referatmarkörer. Visa ditt referat för en klasskamrat \u2013 förstår hen vad artikeln handlade om?",
      },
    },
    {
      slug: "grammatiktips-for-battre-texter",
      title: "Grammatiktips för bättre texter",
      summary: "Vanliga grammatikfel och hur du undviker dem i ditt skrivande.",
      emoji: "\u2705",
      tags: ["Grammatik", "Skrivande", "Språkregler"],
      intro:
        "Grammatik kan kännas tråkigt, men rätt grammatik gör faktiskt dina texter tydligare och mer professionella. Här går vi igenom de vanligaste grammatikfelen som elever gör \u2013 och hur du enkelt undviker dem.",
      steps: [
        {
          title: "De, dem eller dom?",
          body: "Byt ut mot \u201cvi\u201d och \u201doss\u201d. Om \u201cvi\u201d passar, skriv \u201cde\u201d. Om \u201coss\u201d passar, skriv \u201cdem\u201d. Exempel: \u201cDe (vi) gick till skolan.\u201d \u201cJag såg dem (oss) i parken.\u201d I talspråk säger vi ofta \u201cdom\u201d, men i skrift skiljer vi på de och dem.",
        },
        {
          title: "Skilj på var, vart och vad",
          body: "\u201cVar\u201d handlar om en plats: \u201cVar bor du?\u201d \u201cVart\u201d handlar om riktning: \u201cVart ska du?\u201d Blanda inte ihop dem! Tänk: \u201cvar = befinner sig\u201d och \u201cvart = på väg till\u201d.",
        },
        {
          title: "Kommatering",
          body: "Använd komma före bindeord som \u201cmen\u201d, \u201coch\u201d (när det binder ihop huvudsatser), samt efter inledande bisatser. Exempel: \u201cOm det regnar i morgon, stannar vi hemma.\u201d Komma hjälper läsaren att andas rätt i texten.",
        },
        {
          title: "Läs din text högt",
          body: "Det bästa sättet att hitta fel är att läsa texten högt för dig själv. Då hör du om meningar är för långa, om ord saknas eller om något låter konstigt. Markera allt som låter fel och rätta det.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Ta en text du nyligen skrivit (ett prov, en uppsats eller en inlämning). Gå igenom texten och sök specifikt efter: 1) Rätt användning av de/dem, 2) Var/vart, 3) Kommatering. Markera och rätta alla fel du hittar. Läs sedan texten högt och se om du hittar fler saker att förbättra.",
      },
    },
  ],
  gymnasiet: [
    {
      slug: "uppsatsskrivning-steg-for-steg",
      title: "Uppsatsskrivning steg för steg",
      summary:
        "En systematisk guide till att skriva välstrukturerade och analytiska uppsatser.",
      emoji: "\uD83C\uDFAF",
      tags: ["Skrivande", "Uppsats", "Akademiskt skrivande"],
      intro:
        "Uppsatsen är den texttyp som i störst utsträckning mäter din förmåga att analysera, argumentera och uttrycka dig i skrift. Oavsett om det handlar om det nationella provet eller en fördjupningsuppgift krävs en genomtänkt struktur, ett nyanserat resonemang och en medveten stilnivå. Här presenteras en beprövad arbetsmetod.",
      steps: [
        {
          title: "Avgränsning och frågeställning",
          body: "Börja med att precisera din frågeställning. En för bred fråga (\u201cVad är demokrati?\u201d) leder till ytlig behandling. Avgränsa istället: \u201cPå vilka sätt hotas den demokratiska debatten av sociala mediers algoritmer?\u201d. En tydlig frågeställning styr hela uppsatsen och gör det enklare att hålla en röd tråd.",
        },
        {
          title: "Materialinsamling och källkritik",
          body: "Samla material från flera olika typer av källor: vetenskapliga artiklar, debattinlägg, statistik och skönlitterära exempel. Värdera varje källa utifrån trovärdighet, aktualitet, tendens och relevans. Notera källinformation direkt \u2013 det sparar tid vid referenshantering.",
        },
        {
          title: "Disposition och styckeindelning",
          body: "Gör en disposition innan du börjar skriva. Varje stycke ska ha en enda huvudpoäng. Använd en tydlig styckestruktur: kärnmening \u2192 utveckling/bevis \u2192 analys \u2192 övergång till nästa stycke. Varje stycke bör logiskt leda till nästa.",
        },
        {
          title: "Inledning och avslutning",
          body: "Inledningen ska kontextualisera ämnet, väcka intresse och presentera frågeställningen. Avslutningen ska inte bara sammanfatta \u2013 den ska syntetisera dina resonemang och eventuellt vidga perspektivet. En stark avslutning lyfter uppsatsen från beskrivande till analytisk.",
        },
        {
          title: "Bearbetning och språklig finslipning",
          body: "Första utkastet är aldrig klart. Granska logiken i din argumentation, variationen i ditt ordval och precisionen i dina formuleringar. Kontrollera referenserna. Låt gärna en kurskamrat läsa och ge återkoppling. Revidering är en central del av skrivprocessen.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj ett aktuellt samhällsämne och formulera en avgränsad frågeställning. Gör en disposition med minst fem stycken (inledning, tre argumenterande/analyserande stycken, avslutning). Skriv sedan uppsatsen (600\u2013800 ord). Låt den vila en dag, revidera och be en kurskamrat om feedback.",
      },
    },
    {
      slug: "muntlig-presentation",
      title: "Muntlig presentation",
      summary:
        "Tekniker för att hålla engagerande och välstrukturerade presentationer.",
      emoji: "\uD83C\uDFA4",
      tags: ["Muntlighet", "Presentation", "Retorik"],
      intro:
        "Att kunna presentera muntligt \u2013 tydligt, engagerande och övertygande \u2013 är en av de viktigaste kompetenserna du utvecklar under gymnasietiden. Det handlar inte bara om vad du säger, utan om hur du säger det. Retorikens klassiska principer är lika relevanta idag som för tvåtusen år sedan.",
      steps: [
        {
          title: "Analysera din målgrupp och syfte",
          body: "Innan du skapar din presentation: Vilka ska lyssna? Vad vet de redan om ämnet? Vad vill du att de ska tänka, känna eller göra efteråt? Anpassa både innehåll och tonläge efter mottagaren. En presentation för klassen kräver en annan approach än en presentation för en extern jury.",
        },
        {
          title: "Bygg en tydlig struktur",
          body: "Använd trestegsmodellen: inledning (fånga uppmärksamheten, presentera ämnet), mittdel (2\u20134 huvudpunkter med konkreta exempel) och avslutning (sammanfatta och ge en stark slutpoäng). Signalera övergångar tydligt: \u201cNu går jag vidare till\u2026\u201d, \u201cLåt mig sammanfatta\u2026\u201d.",
        },
        {
          title: "Använd retoriska verktyg",
          body: "Ethos (trovärdighet): visa att du kan ämnet. Pathos (känsla): använd personliga exempel och berättelser. Logos (logik): presentera fakta och statistik. Blanda dessa för att övertyga på flera plan. Retoriska frågor och tretal (\u201csnabbare, smartare, bättre\u201d) är effektiva stilfigurer.",
        },
        {
          title: "Öva på framförandet",
          body: "Öva framför spegeln eller spela in dig själv. Tala lugnt, variera tempo och volym, håll ögonkontakt (inte med dina anteckningar). Använd pauser medvetet \u2013 en kort paus efter en viktig poäng ger den tid att landa. Kroppsspråket ska stödja ditt budskap, inte distrahera.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Förbered en tre minuter lång presentation om ett ämne du brinner för. Använd högst tre stödord (inte manus!). Spela in dig själv med mobilen och analysera: Håller du ögonkontakt? Varierar du rösten? Använder du pauser? Gör om presentationen baserat på vad du ser och hör. Håll sedan presentationen för en kompis och be om ärlig feedback.",
      },
    },
    {
      slug: "kallkritik-pa-natet",
      title: "Källkritik på nätet",
      summary:
        "Verktyg och metoder för att kritiskt granska digitala källor.",
      emoji: "\uD83D\uDD0D",
      tags: ["Källkritik", "Digitalt", "Informationssökning"],
      intro:
        "I en tid av informationsöverflöd, fejkade nyheter och AI-genererat innehåll är källkritik inte bara en skoluppgift \u2013 det är en demokratisk nödvändighet. Förmågan att skilja tillförlitlig information från desinformation är avgörande, både i dina studier och som samhällsmedborgare.",
      steps: [
        {
          title: "Tillämpa TRAASK-modellen",
          body: "Granska varje källa utifrån: Trovärdighet (Vem står bakom?), Relevans (Är informationen relevant för din frågeställning?), Aktualitet (När publicerades det?), Avsändare (Vad har avsändaren för intressen och motiv?), Samstämmighet (Stöds informationen av andra oberoende källor?) och Kunskap (Bygger informationen på expertkunskap?).",
        },
        {
          title: "Identifiera bias och tendens",
          body: "All information har en avsändare med ett perspektiv. Ställ dig frågan: Vad vill texten att jag ska tycka? Vilka perspektiv utelämnas? Används laddade ord? Stöds påståendena med verifierbar evidens? Var särskilt kritisk mot information som bekräftar det du redan tror \u2013 så kallad bekräftelsebias.",
        },
        {
          title: "Verifiera med lateral reading",
          body: "Istället för att bara granska källan inifrån (vertikal läsning), öppna nya flikar och sök information om avsändaren och påståendena (lateral läsning). Vad säger andra trovärdiga källor? Är organisationen bakom webbplatsen seriös? Denna metod används av professionella faktakontrollanter.",
        },
        {
          title: "Hantera AI-genererat innehåll",
          body: "AI-verktyg kan producera övertygande men felaktig text. Var uppmärksam på tecken som vaga källhänvisningar, generisk formulering och påståenden som låter rimliga men saknar specifik evidens. Verifiera alltid påståenden mot primärkällor. Att AI har skrivit något gör det inte automatiskt sant.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Sök på ett kontroversiellt ämne (t.ex. \u201ckärnkraft\u201d eller \u201csociala medier och psykisk hälsa\u201d) och hitta tre olika källor: en vetenskaplig, en journalistisk och en från en intresseorganisation. Analysera var och en med TRAASK-modellen. Jämför dem: Vilka perspektiv lyfts? Vilka utelämnas? Vilken källa är mest tillförlitlig för en skoluppgift, och varför? Skriv en kort reflektion (200 ord).",
      },
    },
  ],
};
