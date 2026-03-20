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
    {
      slug: "lyssna-och-beratta",
      title: "Lyssna och berätta",
      summary: "Öva på att lyssna noga och sedan återberätta med egna ord.",
      emoji: "\uD83D\uDC42",
      tags: ["Lyssna", "Berätta", "Muntlighet"],
      intro:
        "Att lyssna är en superförmåga! När du lyssnar noga kan du komma ihåg och berätta om det du hört. Det hjälper dig i skolan, med kompisar och överallt. Här lär du dig att bli en riktigt bra lyssnare.",
      steps: [
        {
          title: "Lyssna med hela kroppen",
          body: "Titta på den som pratar. Sitt stilla och tänk på det du hör. Låtsas att dina öron är stora paraboler som fångar upp varje ord. Försök att inte tänka på annat medan du lyssnar.",
        },
        {
          title: "Tänk på vad som hände",
          body: "När berättelsen är slut, blunda en liten stund. Tänk: Vad hände först? Vad hände sedan? Vad hände sist? Försök se det som en film i huvudet.",
        },
        {
          title: "Berätta med egna ord",
          body: "Nu är det din tur! Berätta samma sak med dina egna ord. Du behöver inte komma ihåg allt perfekt. Det viktigaste är att du får med de stora händelserna.",
        },
        {
          title: "Jämför och prata om det",
          body: "Prata med den som berättade först. Fick du med det viktigaste? Missade du något? Det är helt okej att missa saker \u2013 nästa gång kommer du ihåg ännu mer!",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Be en vuxen läsa en kort saga eller berättelse för dig. Lyssna utan att avbryta. När sagan är slut, berätta den för någon annan med dina egna ord. Fråga sedan den som läste: Fick du med de viktigaste delarna?",
      },
    },
    {
      slug: "rim-och-ramsor",
      title: "Rim och ramsor",
      summary: "Lek med språket genom att hitta rim och skapa egna ramsor.",
      emoji: "\uD83C\uDFB6",
      tags: ["Rim", "Språklek", "Ordkunskap"],
      intro:
        "Att rimma är både roligt och bra för dig! När du rimmar lär du dig hur ord låter och hur de hänger ihop. Du tränar ditt öra och ditt språk samtidigt. Redo att bli en rimmästare?",
      steps: [
        {
          title: "Hitta rimpar",
          body: "Börja med ett enkelt ord, till exempel \u201ckatt\u201d. Vilka ord rimmar på katt? Matt, hatt, platt, ratt! Försök hitta så många rimord som möjligt. Du kan skriva ner dem eller säga dem högt.",
        },
        {
          title: "Lär dig en ramsa",
          body: "Öva på att säga en ramsa du redan kan, till exempel \u201cOlle Dansen\u201d eller \u201cImse vimse spindel\u201d. Klappa takten medan du säger den. Känn hur orden studsar fram och tillbaka.",
        },
        {
          title: "Skriv en egen ramsa",
          body: "Nu ska du göra en egen! Välj två rimord, till exempel \u201csol\u201d och \u201cstol\u201d. Hitta på två meningar som slutar med rimorden: \u201cUppe på himlen lyser en sol, nere i köket står en stol.\u201d",
        },
        {
          title: "Framför din ramsa",
          body: "Säg din ramsa högt för någon. Använd en rolig röst, klappa händerna eller stampa med foten i takt. Ramsor blir roligast när man framför dem!",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Skriv en ramsa med fyra rader som handlar om ett djur. De två första raderna ska rimma på varandra och de två sista ska rimma på varandra. Rita en bild av djuret bredvid din ramsa och läs den högt för klassen!",
      },
    },
    {
      slug: "bokstavsjakt",
      title: "Bokstavsjakt",
      summary: "Lär dig bokstäver och ljud genom att leta efter dem överallt.",
      emoji: "\uD83D\uDD0E",
      tags: ["Bokstäver", "Ljud", "Läsning"],
      intro:
        "Bokstäver finns överallt runt dig \u2013 på skyltar, förpackningar, böcker och skärmar. Genom att leta efter bokstäver och deras ljud tränar du dig på att läsa. Det är som en skattkarta där varje bokstav är en ledtråd!",
      steps: [
        {
          title: "Välj en bokstav",
          body: "Välj en bokstav, till exempel \u201cS\u201d. Säg ljudet som bokstaven gör: \u201csss\u201d. Tänk på hur det låter. Det är det ljudet du ska jaga!",
        },
        {
          title: "Leta överallt",
          body: "Titta runt omkring dig. Hittar du bokstaven på en mjölkförpackning? På en skylt? I en bok? Räkna hur många gånger du hittar den. Du kan leta hemma, i skolan eller utomhus.",
        },
        {
          title: "Hitta ord som börjar med bokstaven",
          body: "Nu ska du hitta saker som börjar med ljudet. Om du valde S: sol, sko, smör, stol. Säg ordet högt och lyssna efter S-ljudet i början. Kan du hitta fem saker?",
        },
        {
          title: "Gör en bokstavsteckning",
          body: "Rita bokstaven stort på ett papper. Fyll den med bilder på saker som börjar med den bokstaven. En S kan fyllas med solar, snöflingor, smultron och stjärnor!",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Gå på en bokstavsjakt hemma eller i skolan! Välj tre olika bokstäver. För varje bokstav ska du hitta fem saker som börjar med det ljudet och rita dem på ett papper. Visa din samling för en kompis \u2013 hittade du samma saker?",
      },
    },
    {
      slug: "lek-med-ord",
      title: "Lek med ord",
      summary: "Upptäck hur ord är uppbyggda genom att sätta ihop och dela isär dem.",
      emoji: "\uD83E\uDDE9",
      tags: ["Ordkunskap", "Sammansatta ord", "Språklek"],
      intro:
        "Svenska språket är fullt av roliga ord som är ihopsatta av andra ord. Visste du att \u201csmörgås\u201d består av \u201csmör\u201d och \u201cgås\u201d? Genom att leka med ord lär du dig hur språket fungerar \u2013 och det är riktigt kul!",
      steps: [
        {
          title: "Dela upp sammansatta ord",
          body: "Ta ett långt ord och dela det i bitar. \u201cFotbollsplan\u201d blir \u201cfot\u201d + \u201cboll\u201d + \u201cs\u201d + \u201cplan\u201d. \u201cSolsken\u201d blir \u201csol\u201d + \u201csken\u201d. Vilka ord gömmer sig inuti?",
        },
        {
          title: "Bygg nya ord",
          body: "Sätt ihop ord och skapa nya! Vad händer om du sätter ihop \u201cis\u201d och \u201cbjörn\u201d? Isbjörn! Prova med \u201cregn\u201d \u2013 regnbåge, regnkappa, regnskog. Hur många kan du göra?",
        },
        {
          title: "Hitta på tokiga ord",
          body: "Sätt ihop ord som inte brukar höra ihop. \u201cBananstol\u201d, \u201celefantsko\u201d, \u201cmorotsbåt\u201d. Vad skulle en morotsbåt vara? Rita din tokiga uppfinning!",
        },
        {
          title: "Ordkedja",
          body: "Spela ordkedja! Säg ett sammansatt ord, till exempel \u201csolros\u201d. Nästa person säger ett ord som börjar med sista delen: \u201crosbuske\u201d. Sedan \u201cbusksnår\u201d. Hur lång kedja klarar ni?",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Gör en ordsamlartavla! Hitta tio sammansatta ord i böcker, tidningar eller hemma. Skriv varje ord på tavlan och dela upp det i sina delar med olika färger. Hitta sedan på tre helt egna tokiga sammansatta ord och rita bilder av dem!",
      },
    },
    {
      slug: "las-hogt-for-nagon",
      title: "Läs högt för någon",
      summary: "Bli bättre på att läsa genom att läsa högt för andra.",
      emoji: "\uD83D\uDDE3\uFE0F",
      tags: ["Läsning", "Högläsning", "Muntlighet"],
      intro:
        "Att läsa högt är ett av de bästa sätten att bli en bättre läsare. Du tränar på att läsa ord rätt, att använda din röst och att förstå vad texten handlar om. Dessutom är det mysigt att läsa högt för någon!",
      steps: [
        {
          title: "Välj en bok och öva först",
          body: "Välj en bok som inte är för svår. Läs igenom en sida tyst för dig själv först. Om det finns svåra ord, öva på att säga dem. Då känner du dig säkrare när du läser högt.",
        },
        {
          title: "Läs tydligt och lagom fort",
          body: "Läs så att den som lyssnar hör varje ord. Läs inte för fort \u2013 det gör ingenting att det går sakta. Peka med fingret under orden om det hjälper dig att hålla koll på var du är.",
        },
        {
          title: "Använd din röst",
          body: "Gör rösten spännande! Om någon i boken är arg, låt din röst låta arg. Om det händer något läskigt, viskar du. Om någon ropar, höj rösten. Det gör berättelsen mycket roligare att lyssna på.",
        },
        {
          title: "Stanna och prata om boken",
          body: "Stanna ibland och fråga den som lyssnar: Vad tror du händer nu? Titta på bilderna tillsammans. Prata om vad ni tycker om berättelsen.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en bilderbok eller en enkel kapitelbok och läs högt för någon hemma \u2013 ett syskon, en förälder eller till och med ett gosedjur. Försök använda minst tre olika röster eller känslolägen. Fråga den som lyssnade: Vad var bäst med min högläsning?",
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
    {
      slug: "dagboksskrivande",
      title: "Dagboksskrivande",
      summary: "Utveckla ditt skrivande genom att skriva dagbok regelbundet.",
      emoji: "\uD83D\uDCD3",
      tags: ["Skrivande", "Vardagsvanor", "Reflektion"],
      intro:
        "En dagbok är ditt eget hemliga rum där du kan skriva precis vad du vill. Ingen rättar din stavning och det finns inget rätt eller fel. Genom att skriva dagbok regelbundet tränar du ditt skrivande utan att det känns som läxa. Dessutom lär du dig att sätta ord på dina tankar och känslor.",
      steps: [
        {
          title: "Skaffa en dagbok och bestäm en tid",
          body: "Välj ett häfte eller en anteckningsbok som blir din dagbok. Bestäm en fast tid varje dag, till exempel innan du somnar eller efter mellanmålet. Skriv minst fem minuter varje gång.",
        },
        {
          title: "Skriv om din dag",
          body: "Börja med att skriva vad du gjort idag. Vad hände i skolan? Vad åt du till lunch? Vem lekte du med på rasten? Beskriv med detaljer \u2013 inte bara \u201cDet var bra\u201d utan \u201cJag spelade fotboll med Alva och vi vann med 3\u20131\u201d.",
        },
        {
          title: "Skriv om tankar och känslor",
          body: "Berätta hur du kände dig. Blev du glad, ledsen, arg eller förvånad? Varför kände du så? Att skriva om känslor hjälper dig att förstå dig själv bättre och gör ditt skrivande mer levande.",
        },
        {
          title: "Prova olika sätt att skriva",
          body: "Dagboken behöver inte bara vara vanlig text. En dag kan du skriva en lista, en annan dag kan du rita och skriva bildtexter. Du kan skriva ett brev till dig själv i framtiden eller göra en topplista över dagens bästa händelser.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Starta en dagbok och skriv varje dag i en vecka. Prova att variera: dag 1 \u2013 skriv om din dag, dag 2 \u2013 skriv en topplista, dag 3 \u2013 beskriv en person du tycker om, dag 4 \u2013 skriv om något du drömmer om. Läs igenom hela veckan på söndag och se hur mycket du skrivit!",
      },
    },
    {
      slug: "argumentera-och-diskutera",
      title: "Argumentera och diskutera",
      summary: "Lär dig att framföra dina åsikter och lyssna på andras.",
      emoji: "\uD83D\uDCAC",
      tags: ["Argumentation", "Muntlighet", "Diskussion"],
      intro:
        "Att kunna argumentera betyder att du kan förklara vad du tycker och varför. Det handlar inte om att bråka utan om att kunna uttrycka din åsikt och lyssna på andras. Det är en viktig förmåga som du har nytta av hela livet, i skolan och utanför.",
      steps: [
        {
          title: "Bestäm vad du tycker",
          body: "Innan du kan argumentera måste du veta vad du tycker. Ta ställning! Till exempel: \u201cJag tycker att rasten borde vara längre.\u201d Det är din tes \u2013 det du vill övertyga andra om.",
        },
        {
          title: "Hitta skäl som stödjer din åsikt",
          body: "Tänk ut minst tre anledningar till varför du tycker som du gör. Till exempel: \u201cVi behöver röra på oss mer\u201d, \u201cVi hinner inte leka klart\u201d och \u201cVi mår bättre och lär oss mer efter en lång rast.\u201d Ju fler skäl, desto starkare blir din argumentation.",
        },
        {
          title: "Lyssna på motargument",
          body: "I en diskussion är det lika viktigt att lyssna som att prata. Vad tycker den andra personen? Kan du förstå varför? Visa att du lyssnar genom att säga: \u201cJag förstår att du tycker att\u2026, men jag tycker ändå att\u2026\u201d",
        },
        {
          title: "Sammanfatta och avsluta",
          body: "Avsluta diskussionen genom att upprepa det du tycker och ditt starkaste skäl. Det gör ingenting om ni inte håller med varandra \u2013 det viktiga är att ni lyssnat och respekterat varandras åsikter.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj ett ämne att diskutera med en kompis, till exempel \u201cVilken årstid är bäst?\u201d. Stå på varsin sida. Hitta tre argument var. Framför era argument i tur och ordning och lyssna på varandra. Rösta sedan \u2013 vem hade det starkaste argumentet?",
      },
    },
    {
      slug: "lassstrategier-for-faktatexter",
      title: "Lässtrategier för faktatexter",
      summary: "Så läser du och förstår faktatexter på ett smart sätt.",
      emoji: "\uD83E\uDDEA",
      tags: ["Läsning", "Lässtrategier", "Faktatexter"],
      intro:
        "Faktatexter ser annorlunda ut än berättelser. De har rubriker, faktarutor, bilder med bildtexter och ibland svåra ord. Med rätt strategier kan du förstå även svåra faktatexter. Här lär du dig hur du tar dig an en faktatext steg för steg.",
      steps: [
        {
          title: "Skumläs och skapa en överblick",
          body: "Börja med att bläddra igenom texten snabbt. Läs rubriker och underrubriker. Titta på bilder, kartor och diagram. Läs bildtexterna. Nu vet du ungefär vad texten handlar om innan du ens har läst den ordentligt.",
        },
        {
          title: "Ställ frågor innan du läser",
          body: "Skriv ner tre frågor som du hoppas få svar på. Till exempel: \u201cHur lever delfiner?\u201d, \u201cVad äter de?\u201d, \u201cVarför är de hotade?\u201d. När du läser med frågor i huvudet blir du en mer aktiv läsare.",
        },
        {
          title: "Markera nyckelord och svåra ord",
          body: "Läs texten noggrant. Stryk under eller markera de viktigaste orden i varje stycke. Om du stöter på ord du inte förstår, skriv ner dem. Försök förstå dem genom sammanhanget eller slå upp dem.",
        },
        {
          title: "Sammanfatta med egna ord",
          body: "Stäng boken. Skriv en kort sammanfattning med egna ord \u2013 ungefär tre till fem meningar. Fick du svar på dina frågor? Om inte, läs de delarna en gång till.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en faktatext ur din NO- eller SO-bok. Följ alla fyra steg: skumläs, ställ tre frågor, markera nyckelord och sammanfatta med egna ord. Jämför din sammanfattning med en kompis \u2013 fick ni med samma saker?",
      },
    },
    {
      slug: "presentationsteknik",
      title: "Presentationsteknik",
      summary: "Grundläggande tips för att hålla bra muntliga presentationer.",
      emoji: "\uD83D\uDCE2",
      tags: ["Muntlighet", "Presentation"],
      intro:
        "Att stå framför klassen och prata kan kännas nervöst, men med bra förberedelse går det mycket lättare. En bra presentation har en tydlig struktur, och du använder din röst och ditt kroppsspråk för att göra den intressant. Här lär du dig grunderna.",
      steps: [
        {
          title: "Planera din presentation",
          body: "Dela in din presentation i tre delar: en början där du berättar vad du ska prata om, en mitten där du berättar det viktiga, och ett slut där du sammanfattar. Skriv stödord på små kort \u2013 inte hela meningar, bara ord som hjälper dig komma ihåg.",
        },
        {
          title: "Öva hemma",
          body: "Stå upp och öva din presentation högt. Gör det minst tre gånger. Ta tid \u2013 är den för lång eller för kort? Öva framför en spegel eller be någon hemma lyssna. Ju mer du övar, desto säkrare känner du dig.",
        },
        {
          title: "Använd röst och kroppsspråk",
          body: "Prata tydligt och lagom högt så att alla hör. Titta på dem som lyssnar, inte ner i golvet eller på dina lappar. Stå stadigt och rör dig lugnt. Gör korta pauser mellan olika delar \u2013 det gör det lättare att följa med.",
        },
        {
          title: "Hantera nervositet",
          body: "Det är normalt att vara nervös! Ta tre djupa andetag innan du börjar. Börja med att titta på en kompis som du känner dig trygg med. Kom ihåg: alla vill att det ska gå bra för dig. Och ju fler gånger du presenterar, desto lättare blir det.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Förbered en kort presentation (2 minuter) om något du tycker om, till exempel ett husdjur, en hobby eller en favoritbok. Skriv stödord på kort och öva minst tre gånger hemma. Håll sedan presentationen för din familj eller en kompis. Be om feedback: Pratade du tydligt? Tittade du upp?",
      },
    },
    {
      slug: "kallkritik-for-barn",
      title: "Källkritik för barn",
      summary: "Lär dig att bedöma om det du läser på nätet och i böcker stämmer.",
      emoji: "\uD83E\uDD14",
      tags: ["Källkritik", "Digitalt", "Informationssökning"],
      intro:
        "Allt du läser på nätet är inte sant. Vem som helst kan skriva vad som helst på internet. Därför behöver du vara en informationsdetektiv som kontrollerar om det du läser verkligen stämmer. Här lär du dig hur!",
      steps: [
        {
          title: "Fråga: Vem har skrivit det?",
          body: "Kolla alltid vem som skrivit texten. Är det en expert, en tidning, en myndighet eller en okänd person? En text om rymden skriven av en rymdforskare är mer trovärdig än ett inlägg av \u201cCoolGansen99\u201d på ett forum.",
        },
        {
          title: "Fråga: Varför är texten skriven?",
          body: "Tänk på varför texten finns. Vill den informera, underhålla eller sälja något? En reklamsida om ett spel vill att du ska köpa spelet \u2013 då kanske de överdriver hur bra det är.",
        },
        {
          title: "Fråga: Är informationen aktuell?",
          body: "Kolla när texten skrevs. En faktatext om djur från 2005 kanske inte stämmer längre. Information kan bli gammal, särskilt om teknik och vetenskap. Försök hitta så ny information som möjligt.",
        },
        {
          title: "Dubbelkolla med en annan källa",
          body: "Hitta samma information på minst en till plats. Om bara en enda sida på hela internet påstår något, bör du vara misstänksam. Om flera trovärdiga sidor säger samma sak, är det troligen sant.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Sök på nätet efter information om ett djur du gillar. Hitta tre olika webbsidor som berättar om djuret. Skriv ner: Vem har skrivit? När skrevs det? Varför skrevs det? Jämför de tre sidorna \u2013 säger de samma sak? Vilken källa litar du mest på och varför?",
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
    {
      slug: "retoriska-knep",
      title: "Retoriska knep",
      summary: "Lär dig stilfigurer och retoriska grepp som gör dina texter och tal starkare.",
      emoji: "\uD83C\uDFAD",
      tags: ["Retorik", "Skrivande", "Muntlighet"],
      intro:
        "Retorik handlar om konsten att övertyga. Redan de gamla grekerna visste att rätt ord i rätt ordning kan förändra hur människor tänker och känner. Genom att lära dig retoriska knep kan du göra dina texter och presentationer mer kraftfulla och engagerande.",
      steps: [
        {
          title: "Lär dig de tre grundpelarna",
          body: "All retorik bygger på ethos (trovärdighet), pathos (känsla) och logos (logik). Ethos: Visa att du kan det du pratar om. Pathos: Väck känslor hos läsaren genom berättelser och målande exempel. Logos: Använd fakta, statistik och logiska resonemang. De starkaste texterna blandar alla tre.",
        },
        {
          title: "Använd stilfigurer",
          body: "Stilfigurer ger ditt språk kraft. Tretal: \u201cVi kom, vi såg, vi segrade.\u201d Anafor (upprepning): \u201cJag drömmer om en skola där alla trivs. Jag drömmer om en skola där alla lär sig.\u201d Retorisk fråga: \u201cKan vi verkligen acceptera detta?\u201d Kontrast: \u201cDet handlar inte om att vinna, utan om att delta.\u201d",
        },
        {
          title: "Anpassa till mottagaren",
          body: "En text till klasskamrater ser annorlunda ut än en text till rektorn. Tänk: Vem läser eller lyssnar? Vad vet de redan? Vilket tonläge passar? En argumentation om längre raster kräver ett sakligt språk till vuxna, men kan vara mer personlig i klassrådet.",
        },
        {
          title: "Öva genom att analysera andras texter",
          body: "Välj ett tal eller en debattartikel och markera alla retoriska grepp du hittar. Vilka stilfigurer används? Hur bygger avsändaren sin trovärdighet? Vilka känslor försöker texten väcka? Genom att analysera andra blir du bättre på att använda retoriken själv.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Skriv ett kort tal (ca 200 ord) där du argumenterar för något du brinner för, till exempel en förändring i skolan eller samhället. Använd medvetet minst tre retoriska knep: en retorisk fråga, ett tretal och en anafor. Markera dem i texten och håll sedan talet för en kompis.",
      },
    },
    {
      slug: "lasa-mellan-raderna",
      title: "Läsa mellan raderna",
      summary: "Lär dig att tolka det som inte sägs rakt ut i en text.",
      emoji: "\uD83D\uDD2E",
      tags: ["Läsning", "Tolkning", "Analys"],
      intro:
        "Ibland står det viktigaste i en text inte svart på vitt. Författare antyder, hintar och låter läsaren dra egna slutsatser. Att kunna läsa mellan raderna \u2013 att förstå det som inte sägs rakt ut \u2013 är en av de viktigaste läsförmågorna du kan utveckla.",
      steps: [
        {
          title: "Leta efter ledtrådar i texten",
          body: "När du läser, var uppmärksam på detaljer som verkar ha en djupare betydelse. Hur beskrivs miljön? Vilka ord väljer författaren? Om det står att \u201cdet var tyst i rummet och klockan tickade högt\u201d kanske författaren vill visa att karaktären känner sig ensam eller orolig, utan att skriva det rakt ut.",
        },
        {
          title: "Tänk på vad karaktärerna inte säger",
          body: "Ibland avslöjar en karaktärs tystnad lika mycket som deras ord. Om en karaktär byter samtalsämne, undviker en fråga eller svarar kort kan det betyda att ämnet är känsligt. Fråga dig: Varför reagerar karaktären så? Vad döljer hen?",
        },
        {
          title: "Koppla ihop detaljer",
          body: "Författare planterar ofta ledtrådar tidigt i texten som blir viktiga senare. Om det nämns att en karaktär alltid bär en viss ring, kan ringen ha en symbolisk betydelse. Försök koppla ihop detaljer och fundera på varför författaren valt att ta med just dem.",
        },
        {
          title: "Ställ dig frågan: Vad vill författaren att jag ska förstå?",
          body: "Efter att ha läst, tänk: Vad är textens budskap? Vilken känsla vill författaren förmedla? Det uttalade budskapet är det som sägs rakt ut, medan det outtalade budskapet är det du förstår genom att läsa mellan raderna. Båda är lika viktiga.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Läs en kort novell eller ett kapitel ur en bok. Skriv ner tre saker som inte sägs rakt ut men som du ändå förstår. Till exempel: Vad känner karaktären egentligen? Vad hintar författaren om framtiden? Varför väljer författaren just dessa ord? Diskutera dina tolkningar med en klasskamrat \u2013 såg ni samma saker?",
      },
    },
    {
      slug: "skriva-kronikor",
      title: "Skriva krönikor",
      summary: "Lär dig att skriva personliga och underhållande krönikor.",
      emoji: "\u270F\uFE0F",
      tags: ["Skrivande", "Krönika", "Personligt"],
      intro:
        "En krönika är en personlig text där du skriver om ett ämne utifrån dina egna tankar och upplevelser. Den blandrar fakta med humor, ironi eller allvar. Krönikan är en fri texttyp som ger dig utrymme att utveckla din egen röst som skribent.",
      steps: [
        {
          title: "Välj ett ämne som engagerar dig",
          body: "De bästa krönikorna handlar om något som berör skribenten. Det kan vara en vardagshändelse, en irritation, en observation eller en känsla. Tänk: Vad har jag upplevt nyligen som fick mig att reagera? En missad buss, en konstig trend, ett samtal som satte igång tankar \u2013 allt fungerar.",
        },
        {
          title: "Hitta din vinkel och din ton",
          body: "En krönika är inte en nyhetsartikel \u2013 din personliga vinkel är det centrala. Bestäm vilken ton du vill ha: humoristisk, eftertänksam, ironisk eller allvarlig? Du kan till exempel ta en vardaglig situation och överdriva den för komisk effekt, eller visa hur en liten detalj säger något stort om samhället.",
        },
        {
          title: "Bygg texten kring en röd tråd",
          body: "Även om en krönika är personlig behöver den struktur. Börja med en scen eller händelse som fångar läsaren. Utveckla ditt resonemang i mittdelen. Avsluta med en poäng eller en tanke som sitter kvar. Den röda tråden är ofta en känsla eller insikt som binder ihop texten.",
        },
        {
          title: "Låt din personlighet synas i språket",
          body: "I en krönika får du bryta mot reglerna lite. Du kan använda talspråk, korta meningar, utrop och direkta tilltal till läsaren. Varva långa resonemang med korta, kärnfulla meningar. Det skapar rytm och gör texten levande.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Skriv en krönika (ca 250 ord) om något som hänt dig nyligen och som du har starka känslor kring. Det kan vara något roligt, irriterande eller överraskande. Försök blanda personliga upplevelser med en allmän reflektion. Låt en kompis läsa \u2013 förstår hen din poäng? Känner hen din röst i texten?",
      },
    },
    {
      slug: "textanalys-steg-for-steg",
      title: "Textanalys steg för steg",
      summary: "En tydlig metod för att analysera texter på djupet.",
      emoji: "\uD83D\uDD2C",
      tags: ["Analys", "Läsning", "Metod"],
      intro:
        "Att analysera en text innebär att du undersöker hur den är uppbyggd, vilka val författaren gjort och varför. Det räcker inte att sammanfatta handlingen \u2013 du behöver gräva djupare. Här får du en steg-för-steg-metod som fungerar för de flesta texttyper.",
      steps: [
        {
          title: "Bestäm texttyp och syfte",
          body: "Börja med att identifiera vad det är för typ av text: novell, dikt, debattartikel, krönika? Varje texttyp har sina egna regler och konventioner. Fundera sedan på textens syfte: Vill den berätta, övertyga, informera eller underhålla? Syftet påverkar hur du analyserar den.",
        },
        {
          title: "Undersök innehåll och budskap",
          body: "Sammanfatta kort vad texten handlar om. Vad är huvudbudskapet? Finns det ett underliggande tema som inte sägs rakt ut? Till exempel kan en novell om en skoldag egentligen handla om utanförskap. Fundera på vad författaren vill att läsaren ska tänka eller känna.",
        },
        {
          title: "Analysera språk och stil",
          body: "Titta på vilka ord och uttryck författaren väljer. Är språket formellt eller vardagligt? Används bildspråk, liknelser eller metaforer? Hur ser meningsbyggnaden ut \u2013 korta, snabba meningar eller långa, flödande? Varje språkligt val skapar en viss effekt.",
        },
        {
          title: "Gör en samlad bedömning",
          body: "Knyt ihop din analys. Hur hänger innehåll, budskap och språk ihop? Varför tror du författaren valde just detta sätt att skriva? Vad tycker du fungerar bra och vad kunde förbättras? En bra textanalys visar att du förstår sambandet mellan form och innehåll.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en kort novell eller dikt ur din svenskbok. Analysera den med alla fyra steg och skriv ner dina tankar (ca 200\u2013300 ord). Använd formuleringen \u201cFörfattaren använder\u2026 vilket skapar en effekt av\u2026\u201d minst två gånger. Visa din analys för en lärare eller klasskamrat och diskutera era tolkningar.",
      },
    },
    {
      slug: "citera-och-referera",
      title: "Citera och referera",
      summary: "Lär dig att korrekt använda andras ord och tankar i dina texter.",
      emoji: "\uD83D\uDCCE",
      tags: ["Skrivande", "Källhantering", "Metod"],
      intro:
        "När du skriver skoltexter behöver du ofta använda information från andra källor. Att kunna citera och referera korrekt visar att du är en seriös skribent som respekterar andras arbete. Det skyddar dig också från att plagiera, det vill säga att omedvetet kopiera någon annans text.",
      steps: [
        {
          title: "Förstå skillnaden mellan citat och referat",
          body: "Ett citat är när du återger någons exakta ord inom citattecken. Ett referat är när du återberättar innehållet med dina egna ord. Citat används när den exakta formuleringen är viktig. Referat används när det är innehållet som är viktigt. I de flesta texter bör du använda mer referat än citat.",
        },
        {
          title: "Citera rätt",
          body: "Använd alltid citattecken runt den exakta texten. Ange vem som sagt det. Exempel: Enligt Astrid Lindgren var det viktigt att barn fick vara barn. Om du förkortar ett citat, markera det med tre punkter inom hakparenteser: \u201cBarnen [...] behöver frihet.\u201d Ändra aldrig orden i ett citat.",
        },
        {
          title: "Referera korrekt",
          body: "Skriv om innehållet med helt egna ord och meningsbyggnad. Använd referatmarkörer: \u201cFörfattaren hävdar att\u2026\u201d, \u201cEnligt rapporten\u2026\u201d, \u201cStudien visar att\u2026\u201d. Ange alltid källan, även om du skrivit om texten. Att byta ut enstaka ord i originaltexten räknas fortfarande som plagiat.",
        },
        {
          title: "Ange dina källor",
          body: "I slutet av din text ska du ha en källförteckning. Ange författare, titel, utgivningsår och var du hittat källan. Fråga din lärare vilket system ni ska använda. Grundregeln är enkel: läsaren ska kunna hitta tillbaka till exakt den källa du använt.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en kort artikel från en tidning. Skriv en text (ca 150 ord) där du använder minst ett korrekt citat och minst två referat från artikeln. Använd olika referatmarkörer och avsluta med en källhänvisning. Be din lärare kontrollera att du citerat och refererat korrekt.",
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
    {
      slug: "akademiskt-skrivande",
      title: "Akademiskt skrivande",
      summary: "Förbered dig för högskolans krav med akademisk skrivteknik.",
      emoji: "\uD83C\uDF93",
      tags: ["Skrivande", "Akademiskt", "Metod"],
      intro:
        "Akademiskt skrivande skiljer sig markant från det vardagliga skrivandet. Det präglas av saklighet, precision och ett systematiskt förhållningssätt till kunskap. Att behärska denna skrivform redan under gymnasiet ger dig ett försprång inför högre studier och tränar dig i att tänka analytiskt och strukturerat.",
      steps: [
        {
          title: "Anpassa register och ton",
          body: "Akademisk text kräver ett formellt språk utan talspråkliga uttryck, slang eller onödiga värdeladdade ord. Undvik \u201cjag tycker\u201d och \u201cman kan tänka sig\u201d. Skriv istället \u201cresultaten tyder på\u201d eller \u201cdet finns fog för att hävda\u201d. Var saklig och precis \u2013 varje ord ska bära mening.",
        },
        {
          title: "Bygg en vetenskaplig struktur",
          body: "En akademisk text följer ofta mönstret: inledning med syfte och frågeställning, bakgrund/teori, metod, resultat/analys och slutsats. Även kortare texter bör ha en tydlig frågeställning, ett resonemang uppbyggt med stöd i källor, och en slutsats som besvarar frågeställningen.",
        },
        {
          title: "Integrera källor korrekt",
          body: "I akademisk text är källhantering centralt. Integrera källor i ditt resonemang genom att referera, citera och kommentera. Använd ett konsekvent referenssystem (t.ex. Harvard eller Oxford). Skilj tydligt mellan dina egna resonemang och andras \u2013 att inte göra det räknas som plagiat, även om det sker oavsiktligt.",
        },
        {
          title: "Revidera med akademiska glasögon",
          body: "Granska din text kritiskt: Är resonemanget logiskt? Stöds alla påståenden av källor? Är språket tillräckligt precist? Saknas definitioner av centrala begrepp? En bra akademisk text kräver flera revideringsrundor. Låt gärna en kurskamrat opponera på din text innan du lämnar in.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj ett ämne från samhällskunskap eller svenska och formulera en akademisk frågeställning. Skriv en kort akademisk text (400\u2013500 ord) med inledning, två analyserande stycken med källhänvisningar och en slutsats. Använd formellt språk och minst tre källor. Be en kurskamrat granska: Är tonen akademisk? Stöds alla påståenden?",
      },
    },
    {
      slug: "litterar-analys",
      title: "Litterär analys",
      summary: "Fördjupa din förmåga att analysera skönlitteratur på gymnasienivå.",
      emoji: "\uD83D\uDCD6",
      tags: ["Analys", "Litteratur", "Skönlitteratur"],
      intro:
        "Litterär analys handlar om att undersöka hur en skönlitterär text är konstruerad och vilken effekt den skapar. Det räcker inte att berätta vad som händer i boken \u2013 du behöver analysera varför författaren gör sina val och hur de påverkar läsarens upplevelse. Denna förmåga är central både för det nationella provet och för fördjupade litteraturstudier.",
      steps: [
        {
          title: "Identifiera berättartekniska val",
          body: "Börja med att undersöka de grundläggande berättartekniska valen. Vem berättar? Vilken berättarsynvinkel används \u2013 allvetande, begränsad eller jag-perspektiv? Hur hanteras tid \u2013 kronologiskt, med tillbakablickar eller parallella tidslinjer? Dessa val formar hur läsaren uppfattar händelserna och karaktärerna.",
        },
        {
          title: "Analysera teman och motiv",
          body: "Identifiera textens centrala teman: Vad handlar texten om på ett djupare plan? Återkommande motiv \u2013 som objekt, platser, färger eller handlingar \u2013 förstärker ofta teman. En analys av temat ensamhet kan till exempel stödjas av återkommande bilder av stängda dörrar, tomma rum eller regn.",
        },
        {
          title: "Undersök språk och stil",
          body: "Analysera författarens språkliga val: ordval, bildspråk, symbolik, meningsbyggnad och rytm. Metaforer och liknelser är inte bara utsmyckning \u2013 de avslöjar textens djupare meningslager. Hur bidrar stilen till stämningen? Varför väljer författaren korta meningar i en viss scen och långa, flödande i en annan?",
        },
        {
          title: "Sätt texten i ett sammanhang",
          body: "En fördjupad analys relaterar texten till dess kontext: författarens övriga produktion, den litterära epoken, samhället den skrevs i eller universella mänskliga erfarenheter. Hur speglar texten sin tid? Vilka intertextuella kopplingar finns? Att kontextualisera visar analytisk mognad och gör din tolkning rikare.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en roman eller novellsamling ni arbetar med i kursen. Skriv en litterär analys (500\u2013600 ord) som fokuserar på ett tydligt avgränsat tema, till exempel ensamhet, makt eller identitet. Analysera minst tre textställen och koppla dem till temat med hjälp av berättarteknik och språkliga val. Avsluta med att relatera texten till dess tid eller vår egen. Diskutera din analys med en kurskamrat.",
      },
    },
    {
      slug: "sprakhistoria-i-praktiken",
      title: "Språkhistoria i praktiken",
      summary: "Förstå dagens svenska genom att utforska språkets historia.",
      emoji: "\uD83D\uDDFA\uFE0F",
      tags: ["Språkhistoria", "Ordkunskap", "Svenska"],
      intro:
        "Varför stavar vi som vi gör? Varför heter det \u201cäng\u201d men \u201cänga\u201d i vissa dialekter? Och varifrån kommer alla lånord? Genom att förstå svenskans historia \u2013 från runsvenska till modern svenska \u2013 får du en djupare förståelse för hur språket fungerar idag. Dessutom är språkhistoria ett centralt moment i Svenska 2 och 3.",
      steps: [
        {
          title: "Lär dig de stora epokerna",
          body: "Svenskans historia delas in i perioder: runsvenska (ca 800\u20131225), fornsvenska (1225\u20131526), äldre nysvenska (1526\u20131732) och yngre nysvenska/nusvenska (1732\u2013idag). Varje epok har sina särdrag. Gustav Vasas bibel (1541) standardiserade skriftspråket, och stavningsreformen 1906 avskaffade hv- och dt-stavning.",
        },
        {
          title: "Undersök ordets resa",
          body: "Välj vardagsord och spåra deras historia. \u201cFönster\u201d kommer från latinet (fenestra), via tyskan. \u201cOmbudsman\u201d är ett svenskt ord som lånats ut till andra språk. Genom att undersöka etymologi \u2013 ordets ursprung \u2013 ser du hur handel, religion, krig och kultur har format vårt ordförråd.",
        },
        {
          title: "Koppla till dagens språkförändringar",
          body: "Språket förändras ständigt. Engelska lånord som \u201cstreama\u201d och \u201cghosta\u201d följer samma mönster som tyska och franska lånord gjorde i äldre tid. Grammatiken förenklas: kasussystemet försvann under fornsvensk tid, och idag diskuteras hen och du-reformen. Se mönster \u2013 språkförändring är inte nytt.",
        },
        {
          title: "Använd kunskapen i analys",
          body: "I litteraturanalys kan språkhistorisk kunskap ge djup. Varför skriver Strindberg annorlunda än Engström? Hur speglar ordval en viss epok? I debattinlägg kan du argumentera om språkvård, lånord och dialekternas framtid med historisk förankring. Det ger dina resonemang tyngd.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj tio vardagsord (t.ex. skola, kyrka, krog, mjölk, telefon) och sök upp deras etymologi i en etymologisk ordbok eller paa Svenska Akademiens ordbok (saob.se). Sortera orden efter språk de lånats från. Skriv sedan en kort text (300 ord) om vad ordursprungen berättar om Sveriges historia och kontakter med omvärlden.",
      },
    },
    {
      slug: "debattinlagg-och-insandare",
      title: "Debattinlägg och insändare",
      summary: "Skriv slagkraftiga debattinlägg som publiceras och påverkar.",
      emoji: "\uD83D\uDCE3",
      tags: ["Skrivande", "Argumentation", "Debatt"],
      intro:
        "Debattinlägget och insändaren är texttyper med ett tydligt syfte: att påverka. Till skillnad från essän, som utforskar en fråga, tar debattinlägget ställning och försöker övertyga läsaren. Det är en texttyp du har nytta av långt efter gymnasiet \u2013 som medborgare, på arbetsplatsen och i det offentliga samtalet.",
      steps: [
        {
          title: "Formulera en skarp tes",
          body: "Ditt debattinlägg ska ha en glasklar tes \u2013 ett påstående som går att argumentera för och emot. Undvik vaga formuleringar. Istället för \u201cDet borde finnas mer idrott i skolan\u201d, skriv \u201cDaglig fysisk aktivitet bör vara obligatorisk på alla gymnasieprogram\u201d. Tesen ska vara det första läsaren möter.",
        },
        {
          title: "Bygg upp med starka argument",
          body: "Använd en blandning av argumenttyper: faktaargument (statistik, forskning), erfarenhetsargument (egna eller andras upplevelser) och auktoritetsargument (hänvisning till experter). Ordna argumenten strategiskt \u2013 börja starkt, avsluta starkast. Bemöt det starkaste motargumentet för att visa nyans.",
        },
        {
          title: "Skriv en slagkraftig inledning och avslutning",
          body: "Inledningen måste fånga direkt \u2013 redaktören som läser ditt inlägg avgör snabbt om det publiceras. Använd en retorisk fråga, ett personligt exempel eller en provocerande siffra. Avslutningen ska innehålla en tydlig uppmaning till handling: vad vill du att läsaren ska göra, tycka eller förändra?",
        },
        {
          title: "Anpassa till formatet och mottagaren",
          body: "Ett debattinlägg i en lokaltidning har andra konventioner än en debattartikel i riksmedia. Håll det kort (400\u2013600 ord för en insändare). Skriv i aktiv form, undvik akademisk jargong och var konkret. Använd mellanrubriker om utrymmet tillåter. Tänk på att du skriver för en bred publik, inte din lärare.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Skriv ett debattinlägg (400\u2013600 ord) om en fråga som engagerar dig, riktat till din lokaltidnings debattsida. Formulera en skarp tes och använd minst ett faktaargument och ett erfarenhetsargument. Be en kurskamrat läsa och besvara: Blev du övertygad? Varför/varför inte? Överväg att faktiskt skicka in det till tidningen.",
      },
    },
    {
      slug: "kritisk-lasning",
      title: "Kritisk läsning",
      summary: "Utveckla din förmåga att läsa och granska texter på djupet.",
      emoji: "\uD83E\uDDD0",
      tags: ["Läsning", "Analys", "Kritiskt tänkande"],
      intro:
        "Kritisk läsning innebär att du inte bara förstår vad en text säger, utan också värderar hur den säger det och varför. Du granskar avsändarens perspektiv, textens argument och dess underliggande antaganden. Denna förmåga är grundläggande för akademiska studier, samhällsengagemang och ett självständigt tänkande.",
      steps: [
        {
          title: "Identifiera textens perspektiv och antaganden",
          body: "Varje text bygger på outtalade antaganden. En artikel som diskuterar ekonomisk tillväxt som positivt antar att tillväxt är eftersträvansvärt \u2013 men stämmer det alltid? Identifiera vad texten tar för givet. Vilka värderingar ligger bakom? Vems perspektiv representeras och vems saknas? Att synliggöra antaganden är det första steget i kritisk läsning.",
        },
        {
          title: "Granska argumentationens kvalitet",
          body: "Analysera hur texten bygger sina resonemang. Finns det logiska brister? Vanliga tankefällor inkluderar: generaliseringar (att dra stora slutsatser av enstaka exempel), halmgubbar (att förvränga motståndares åsikter), falska dilemman (att presentera bara två alternativ) och auktoritetsargument utan substans. En kritisk läsare genomskådar svaga argument.",
        },
        {
          title: "Jämför med alternativa perspektiv",
          body: "Ingen enskild text ger hela bilden. Sök aktivt efter andra perspektiv på samma fråga. Hur beskriver andra avsändare samma fenomen? Vilken information utelämnar den ursprungliga texten? Genom att jämföra flera perspektiv kan du skapa en mer nyanserad förståelse och undvika att okritiskt ta över en enskild avsändares världsbild.",
        },
        {
          title: "Formulera din egen position",
          body: "Kritisk läsning handlar inte om att avfärda allt \u2013 det handlar om att bilda en välgrundad egen uppfattning. Efter att ha granskat texten, tagit del av alternativa perspektiv och identifierat styrkor och svagheter: Vad anser du? Stöds textens tes av tillräcklig evidens? Vilka delar håller du med om och vilka ifrågasätter du? En mogen kritisk läsare formulerar sin egen ståndpunkt.",
        },
      ],
      exercise: {
        title: "Prova själv!",
        description:
          "Välj en längre debattartikel eller essä ur en dagstidning. Läs den noggrant och besvara: 1) Vilka outtalade antaganden bygger texten på? 2) Finns det logiska brister i argumentationen? 3) Vilka perspektiv saknas? Sök sedan upp en text som representerar ett annat perspektiv. Skriv en kort jämförande reflektion (300 ord) där du värderar båda texterna och formulerar din egen position.",
      },
    },
  ],
};
