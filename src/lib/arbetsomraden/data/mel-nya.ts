import type { Arbetsomrade } from "../typer";

export const SKRIVA_LARA_MEL: Arbetsomrade = {
  id: "skriva-for-att-lara",
  titel: "Skriva för att lära – anteckningar, nyckelord och begrepp",
  stadie: "mellanstadiet",
  arskurs: "5",
  ingress:
    "Skrivandet som verktyg för att minnas, tänka och förstå: eleverna lär sig skriva nyckelord och anteckningar för hand, definiera begrepp med egna ord och skriva korta reflektionstexter efter en genomgång – i svenska och i andra ämnen.",
  kursplan: [
    "Skrivandet som verktyg för lärande: att skriva för hand för att minnas, tänka och utveckla förståelsen av texter och annat innehåll.",
    "Att skriva nyckelord, definiera centrala begrepp och skriva korta reflektionstexter i anslutning till lärarens genomgångar.",
    "Att hämta och bearbeta innehåll ur texter och formulera det med egna ord, och skilja mellan egna och andras tankar.",
    "Att sammanfatta olika slags texter.",
  ],
  mal: ["Välja ut nyckelord ur en text eller genomgång.", "Föra enkla anteckningar för hand.", "Förklara ett begrepp med egna ord.", "Skriva en kort reflektion: Vad lärde jag mig? Vad är oklart?", "Sammanfatta en kort text med hjälp av sina anteckningar."],
  begrepp: [["nyckelord", "de viktigaste orden som bär innehållet"], ["anteckning", "korta ord och fraser för att minnas"], ["begrepp", "ett ord med en bestämd betydelse inom ett ämne"], ["definiera", "förklara vad ett begrepp betyder"], ["reflektion", "att tänka efter och skriva om vad man har lärt sig"], ["sammanfattning", "det viktigaste i en text, kort och med egna ord"]],
  lankar: [["Lässtrategier", "lasstrategier"], ["Läsförståelse", "lasforstaelse"], ["Elevtips", "elevtips"]],
  fortest: [
    { fraga: "Vad är ett nyckelord?", alternativ: ["ett av de viktigaste orden i en text", "ett lösenord", "det första ordet i en text"], ratt: 0 },
    { fraga: "Hur skriver man anteckningar?", alternativ: ["korta ord och fraser", "hela texten ordagrant", "bara rubriken"], ratt: 0 },
    { fraga: "Vad betyder att definiera ett begrepp?", alternativ: ["att förklara vad det betyder", "att stava det", "att översätta det"], ratt: 0 },
    { fraga: "Vad hör hemma i en sammanfattning?", alternativ: ["det viktigaste", "alla detaljer", "dina åsikter"], ratt: 0 },
    { fraga: "Varför kan det vara bra att skriva för hand?", alternativ: ["många minns bättre då", "det går snabbare", "det är obligatoriskt"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Hitta nyckelorden",
      mal: "Eleverna kan välja ut nyckelord ur en kort faktatext.",
      upplagg: ["Förtestet (10 min).", "Modellera: läs en kort text högt och stryk under nyckelorden – tänk högt (10 min).", "Eleverna gör samma sak med en ny text i par (15 min).", "Jämför: vilka ord valde ni och varför? (10 min)"],
      bilder: [
        { typ: "punkter", rubrik: "Nyckelord", punkter: ["Nyckelord är de ord som bär innehållet – ofta substantiv och verb.", "Hoppa över småord som och, att, en, på.", "Med bara nyckelorden ska du kunna berätta vad texten handlar om."] },
        { typ: "jamfor", rubrik: "Exempel", kolumner: ["Mening", "Nyckelord"], rader: [["Igelkotten sover hela vintern i ett bo av löv.", "igelkott – sover – vinter – bo av löv"], ["Den äter insekter, maskar och sniglar.", "äter insekter, maskar, sniglar"]] },
        { typ: "fraga", fraga: { fraga: "Vilket ord är ett nyckelord i ”Bina pollinerar blommorna i trädgården”?", alternativ: ["pollinerar", "i"], ratt: 0, forklaring: "Pollinerar bär innehållet – i är ett småord." } },
      ],
      elevtext: [{ rubrik: "Att välja nyckelord", stycken: ["När du läser en faktatext behöver du inte komma ihåg varje ord. Leta efter nyckelorden – de ord som bär innehållet. Det är ofta namn på saker (substantiv) och vad som händer (verb).", "Testa: täck över texten och berätta vad den handlar om med hjälp av bara nyckelorden."] }],
      uppgifter: ["Stryk under nyckelorden i texten du har fått.", "Skriv nyckelorden på en lapp. Berätta för en kompis vad texten handlar om utan att titta i texten."],
      lankar: [["Lässtrategier", "lasstrategier"]],
    },
    {
      titel: "Anteckna under en genomgång",
      mal: "Eleverna kan föra enkla anteckningar för hand under en genomgång.",
      upplagg: ["Visa en enkel anteckningsmall: ämne – nyckelord – fråga (5 min).", "Kort genomgång i ett ämne (t.ex. en djurart eller ett historiskt skeende) medan eleverna antecknar (10 min).", "Eleverna jämför sina anteckningar i par och fyller på (10 min).", "De skriver tre meningar ur minnet med hjälp av anteckningarna (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Anteckningsmall", kolumner: ["Del", "Skriv"], rader: [["Ämne", "vad genomgången handlar om"], ["Nyckelord", "de viktigaste orden, en rad var"], ["Fråga", "något du undrar över"]] },
        { typ: "punkter", rubrik: "Tips", punkter: ["Skriv korta ord – inte hela meningar.", "Använd pilar och tecken: → (leder till), = (betyder).", "Skriv gärna för hand – många upplever att det hjälper dem att minnas."] },
      ],
      elevtext: [{ rubrik: "Anteckningar", stycken: ["Anteckningar är korta ord och fraser som hjälper dig att minnas. Du behöver inte skriva hela meningar. Använd gärna pilar och tecken.", "När du skriver för hand måste du välja vad som är viktigast. Det hjälper många att minnas."] }],
      uppgifter: ["Anteckna under lärarens genomgång med mallen.", "Skriv tre meningar om innehållet med hjälp av dina anteckningar."],
    },
    {
      titel: "Begrepp med egna ord",
      mal: "Eleverna kan definiera ett begrepp med egna ord och ge ett exempel.",
      upplagg: ["Visa begreppsrutan (5 min).", "Gemensamt: definiera ett begrepp från ett annat ämne (10 min).", "Eleverna gör begreppsrutor för tre begrepp (20 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Begreppsrutan", kolumner: ["Ruta", "Exempel: fotosyntes"], rader: [["Det betyder", "växter gör näring av ljus, vatten och koldioxid"], ["Exempel", "ett blad i solen"], ["Inte samma som", "andning"], ["Rita", "en enkel bild"]] },
        { typ: "fraga", fraga: { fraga: "Vad är en bra definition?", alternativ: ["en kort förklaring med egna ord", "samma ord igen", "en lång berättelse"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Att förklara ett begrepp", stycken: ["Ett begrepp är ett ord med en bestämd betydelse i ett ämne, till exempel fotosyntes, demokrati eller adjektiv. När du definierar ett begrepp förklarar du det kort med egna ord och ger ett exempel."] }],
      uppgifter: ["Gör begreppsrutor för tre begrepp från ett ämne ni arbetar med.", "Förklara ett begrepp för en kompis utan att använda själva ordet."],
    },
    {
      titel: "Reflektera och sammanfatta",
      mal: "Eleverna kan skriva en kort reflektion och sammanfatta en text med egna ord.",
      upplagg: ["Visa reflektionsfrågorna (5 min).", "Efter en genomgång skriver eleverna en reflektion (10 min).", "Sammanfatta en kort text med hjälp av nyckelord (20 min).", "Repetera inför provet."],
      bilder: [
        { typ: "punkter", rubrik: "Reflektionsfrågor", punkter: ["Vad lärde jag mig i dag?", "Vad var svårt eller oklart?", "Vad vill jag veta mer om?"] },
        { typ: "punkter", rubrik: "Så sammanfattar du", punkter: ["Läs texten och stryk under nyckelorden.", "Skriv det viktigaste med egna ord – inga detaljer.", "Skriv kort: några meningar räcker.", "Skriv varifrån informationen kommer."] },
      ],
      elevtext: [{ rubrik: "Reflektion och sammanfattning", stycken: ["En reflektion är några meningar om vad du har lärt dig och vad du undrar över. Den hjälper dig och läraren att se vad som behöver tränas mer.", "En sammanfattning berättar det viktigaste i en text, kort och med egna ord."] }],
      uppgifter: ["Skriv en reflektion efter dagens genomgång med de tre frågorna.", "Sammanfatta en faktatext i högst fem meningar."],
      lankar: [["Läsförståelse", "lasforstaelse"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vilka ord är oftast nyckelord?", alternativ: ["substantiv och verb", "och, att, en", "bara rubriker"], ratt: 0 },
      { fraga: "Hur ser bra anteckningar ut?", alternativ: ["korta ord och fraser", "hela meningar ordagrant", "bara bilder"], ratt: 0 },
      { fraga: "Vad är en definition?", alternativ: ["en kort förklaring av vad ett begrepp betyder", "en sammanfattning av en bok", "en fråga"], ratt: 0 },
      { fraga: "Vad hör inte hemma i en sammanfattning?", alternativ: ["små detaljer", "det viktigaste", "egna ord"], ratt: 0 },
      { fraga: "Vilken fråga passar i en reflektion?", alternativ: ["Vad lärde jag mig i dag?", "Hur många sidor har boken?", "Vem satt bredvid mig?"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Läs texten som läraren ger dig. Skriv nyckelorden och sammanfatta texten i högst fem meningar.", bedomning: ["Relevanta nyckelord", "Det viktigaste kommer med", "Egna ord och kort"] },
      { fraga: "Förklara ett begrepp från ett annat ämne med egna ord och ge ett exempel.", bedomning: ["Korrekt förklaring", "Relevant exempel"] },
    ],
  },
  tips: ["Använd nyckelord och reflektioner i alla ämnen – samarbeta med kollegorna.", "Låt eleverna jämföra anteckningar för hand och på dator och diskutera vad som fungerar."],
};

export const DIGITALT_MEL: Arbetsomrade = {
  id: "skriva-och-lasa-digitalt",
  titel: "Skriva och läsa digitalt – ansvarsfullt",
  stadie: "mellanstadiet",
  arskurs: "6",
  ingress:
    "Tangentbord, dokument och ordbehandling – och att tänka efter: hur skiljer sig läsning på skärm från papper, hur påverkar rättstavning och AI det egna skrivandet, och hur skyddar man sig själv och andra på nätet?",
  kursplan: [
    "Att skriva och bearbeta texter digitalt: hitta på tangentbordet, de vanligaste symbolerna, skapa, namnge och spara dokument, typsnitt, textstorlek och rubriker.",
    "Hur rättstavningsprogram, grammatikkontroll och generativ AI kan påverka utvecklingen av en självständig skrivförmåga.",
    "Introduktion till läsning av digitala texter och hur läsning på skärm skiljer sig från tryckt text.",
    "Ansvarsfull kommunikation och skydd av personuppgifter och privatliv i digitala miljöer.",
  ],
  mal: ["Skriva med båda händerna på tangentbordet och hitta vanliga symboler.", "Skapa, namnge, spara och hitta ett dokument.", "Använda rubriker, typsnitt och textstorlek.", "Resonera om läsning på skärm och papper och om hjälpmedel i skrivandet.", "Veta vad personuppgifter är och hur man kommunicerar ansvarsfullt."],
  begrepp: [["ordbehandlare", "program för att skriva och redigera text"], ["dokument", "en fil med text som sparas"], ["typsnitt", "hur bokstäverna ser ut"], ["rättstavning", "funktion som markerar stavfel"], ["personuppgift", "uppgift som kan kopplas till en person: namn, adress, bild"], ["integritet", "rätten att bestämma över information om sig själv"]],
  lankar: [["AI i svenskan", "ai-i-svenskan"], ["Källkritik", "kallkritik"], ["Skrivverkstad", "skrivverkstad"]],
  fortest: [
    { fraga: "Vad är en personuppgift?", alternativ: ["uppgift som kan kopplas till en person", "ett lösenord till skolan", "en rubrik"], ratt: 0 },
    { fraga: "Vad är ett typsnitt?", alternativ: ["hur bokstäverna ser ut", "ett stavfel", "en sorts fil"], ratt: 0 },
    { fraga: "Vad är bra att göra innan du lägger ut en bild på en kompis?", alternativ: ["fråga om det är okej", "lägga ut den direkt", "redigera den"], ratt: 0 },
    { fraga: "Hittar rättstavningen alla fel?", alternativ: ["nej", "ja"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Tangentbordet",
      mal: "Eleverna kan placera händerna på tangentbordet och hitta vanliga symboler.",
      upplagg: ["Förtestet (10 min).", "Visa grundraden: vänster hand på a s d f, höger på j k l ö – tummarna på mellanslag (10 min).", "Skrivövning med ett tangentbordsprogram eller dikteringsövning (20 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Hitta på tangentbordet", punkter: ["Grundraden: vänster hand på a s d f, höger hand på j k l ö.", "Känn efter knopparna på f och j.", "Shift ger stor bokstav. Mellanslag med tummen.", "Vanliga symboler: punkt, komma, frågetecken, @, bindestreck."] },
        { typ: "fraga", fraga: { fraga: "Vilken tangent ger stor bokstav?", alternativ: ["Shift", "Enter", "Mellanslag"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Skriva med alla fingrar", stycken: ["Om du lär dig att skriva med alla fingrar går det snabbare, och du kan titta på skärmen i stället för på tangenterna. Börja med grundraden: a s d f och j k l ö."] }],
      uppgifter: ["Skriv meningen tre gånger utan att titta på tangenterna: Jag skriver snabbt och rätt.", "Skriv din e-postadress i skolan – var hittar du @?"],
    },
    {
      titel: "Dokument och ordbehandling",
      mal: "Eleverna kan skapa, namnge, spara och formatera ett dokument.",
      upplagg: ["Visa: skapa dokument, ge det ett tydligt namn, spara i rätt mapp (10 min).", "Eleverna skriver en kort faktatext med rubrik och underrubriker (25 min).", "Kamratkoll: går dokumentet att hitta? Är rubrikerna tydliga? (10 min)"],
      bilder: [
        { typ: "punkter", rubrik: "Ett bra dokument", punkter: ["Tydligt namn: ämne och datum, t.ex. Faktatext igelkott 2026-11-17.", "Spara i rätt mapp.", "Rubrik överst, underrubriker för varje del.", "Ett lättläst typsnitt i lagom storlek."] },
      ],
      elevtext: [{ rubrik: "Ordbehandling", stycken: ["I en ordbehandlare kan du skriva, ändra och flytta text. Ge dokumentet ett namn som gör det lätt att hitta, och spara det i rätt mapp. Använd rubriker för att dela in texten, och välj ett typsnitt som är lätt att läsa."] }],
      uppgifter: ["Skapa ett dokument med ett tydligt namn och spara det.", "Skriv en kort faktatext med rubrik och två underrubriker."],
    },
    {
      titel: "Skärm eller papper? Hjälpmedel eller fusk?",
      mal: "Eleverna kan resonera om skillnader mellan läsning på skärm och papper och om hur hjälpmedel påverkar skrivandet.",
      upplagg: ["Låt halva klassen läsa en text på papper och halva på skärm – jämför vad de minns (15 min).", "Genomgång (10 min).", "Diskussion om rättstavning och AI (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "Läsa på skärm", punkter: ["På skärmen är det lätt att skumma och bli störd av notiser och länkar.", "Forskning tyder på att många förstår längre faktatexter något bättre på papper.", "Tips: stäng av notiser och läs långsamt när texten är viktig."] },
        { typ: "punkter", rubrik: "Hjälpmedel i skrivandet", punkter: ["Rättstavningen hittar många fel – men inte alla (t.ex. de/dem).", "Om programmet alltid rättar åt dig lär du dig inte själv.", "AI kan skriva hela texter – men då är det inte du som lär dig skriva.", "Följ skolans regler för hjälpmedel och AI."] },
        { typ: "diskutera", fragor: ["När är det bra att använda rättstavning – och när är det bättre att låta bli?", "Är det fusk att låta AI skriva en text åt dig? Varför?"] },
      ],
      elevtext: [{ rubrik: "Läsa och skriva med skärm", stycken: ["När vi läser på skärm skummar vi ofta och blir lätt störda. Forskning tyder på att många förstår längre faktatexter något bättre på papper. Därför kan det vara klokt att skriva ut viktiga texter eller stänga av notiser.", "Rättstavning och AI kan vara bra hjälpmedel. Men om datorn alltid gör jobbet tränar du inte själv. Den som kan stava och skriva själv kan också se när datorn gör fel."] }],
      uppgifter: ["Skriv tre meningar om skillnaden mellan att läsa på skärm och på papper.", "Hitta två fel i en text som rättstavningen inte markerar.", "Skriv en kort text: När är det okej att använda AI i skolarbetet?"],
      lankar: [["AI i svenskan", "ai-i-svenskan"]],
    },
    {
      titel: "Ansvarsfull på nätet",
      mal: "Eleverna vet vad personuppgifter är och hur man kommunicerar ansvarsfullt digitalt.",
      upplagg: ["Genomgång (10 min).", "Fallbeskrivningar i grupp: Vad borde personen ha gjort? (20 min)", "Eleverna formulerar klassens regler för digital kommunikation (10 min).", "Repetera inför provet."],
      bilder: [
        { typ: "punkter", rubrik: "Skydda dig själv och andra", punkter: ["Personuppgifter: namn, adress, telefonnummer, bilder – dela inte med okända.", "Fråga alltid innan du lägger ut en bild på någon annan.", "Det du skriver på nätet kan spridas och finnas kvar länge.", "Skriv inget om någon som du inte skulle säga till personen själv."] },
        { typ: "diskutera", fragor: ["En kompis lägger ut en pinsam bild på dig. Vad gör du?", "Någon du inte känner frågar var du bor. Hur svarar du?"] },
      ],
      elevtext: [{ rubrik: "Ansvarsfull kommunikation", stycken: ["Personuppgifter är uppgifter som kan kopplas till dig, till exempel ditt namn, din adress eller bilder på dig. Var försiktig med vad du delar, särskilt med personer du inte känner.", "Det du skriver och lägger ut kan spridas snabbt och finnas kvar länge. Fråga alltid innan du lägger ut en bild på någon annan, och skriv aldrig något elakt om någon."] }],
      uppgifter: ["Skriv fem regler för hur man är schysst och säker på nätet.", "Läs fallbeskrivningen och skriv vad personen borde ha gjort."],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Var ska vänster pekfinger vila på tangentbordet?", alternativ: ["på f", "på j", "på a"], ratt: 0 },
      { fraga: "Vad är ett bra namn på ett dokument?", alternativ: ["Faktatext igelkott 2026-11-17", "Dokument1", "asdf"], ratt: 0 },
      { fraga: "Varför kan det vara svårare att läsa en lång text på skärm?", alternativ: ["man skummar och blir lätt störd", "bokstäverna är fel", "det går inte"], ratt: 0 },
      { fraga: "Vilket fel hittar rättstavningen ofta INTE?", alternativ: ["de i stället för dem", "hund stavat hnud", "skola stavat skoal"], ratt: 0 },
      { fraga: "Vilket är en personuppgift?", alternativ: ["din adress", "dagens väder", "huvudstaden i Norge"], ratt: 0 },
      { fraga: "Vad gör du innan du lägger ut en bild på en kompis?", alternativ: ["frågar om det är okej", "lägger ut den direkt"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Skriv ett resonemang: Vilka för- och nackdelar har rättstavning och AI när man lär sig skriva?", bedomning: ["Minst en fördel och en nackdel", "Motiveringar", "Kopplar till eget lärande"] },
      { fraga: "Ge tre råd till en yngre elev om hur man är ansvarsfull på nätet.", bedomning: ["Tre relevanta råd", "Tydligt formulerade"] },
    ],
  },
  tips: ["Lektion 1 kan återkomma som kort skrivträning under hela året.", "Koppla lektion 4 till skolans arbete mot kränkningar.", "Låt eleverna själva testa läsning på skärm och papper – det ger bra diskussioner."],
};

export const BERATTELSER_MEL: Arbetsomrade = {
  id: "berattelsens-byggstenar",
  titel: "Berättelsens byggstenar – myter, sagor och ungdomsböcker",
  stadie: "mellanstadiet",
  arskurs: "5",
  ingress:
    "Eleverna läser myter, sagor, dikter och ungdomslitteratur, lär sig hur berättelser är byggda – kronologi, tillbakablickar, miljö- och personbeskrivningar och dialog – och möter några betydelsefulla barn- och ungdomsboksförfattare. De använder byggstenarna i egna berättelser.",
  kursplan: [
    "Läsning av skönlitteratur från Sverige och övriga världen, däribland ungdomslitteratur, lyrik, myter och sagor.",
    "Kännedom om några betydelsefulla barn- och ungdomsboksförfattare och deras verk.",
    "Berättelsemönster och språkliga drag: kronologi, tillbakablickar, miljö- och personbeskrivningar och dialoger.",
    "Hur skönlitteratur kan spegla olika tider, livsvillkor och värderingar – och läsningens estetiska dimension.",
    "Att skriva berättande texter.",
  ],
  mal: ["Känna igen typiska drag i myter och sagor.", "Förklara kronologi och tillbakablick.", "Skriva miljö- och personbeskrivningar och dialog.", "Nämna några barn- och ungdomsboksförfattare och deras böcker.", "Samtala om vad en berättelse säger om sin tid och om människor."],
  begrepp: [["myt", "berättelse som förklarar hur världen blev till, ofta med gudar"], ["saga", "berättelse med fasta mönster: början, problem, lösning, ofta tre försök"], ["kronologi", "händelserna berättas i den ordning de hände"], ["tillbakablick", "berättelsen hoppar bakåt i tiden"], ["miljöbeskrivning", "beskrivning av var och när berättelsen utspelar sig"], ["personbeskrivning", "beskrivning av hur en person ser ut, är och känner"], ["dialog", "personer som pratar med varandra"], ["lyrik", "dikter"]],
  lankar: [["Litteraturhistoria", "litteraturhistoria"], ["Skrivverkstad", "skrivverkstad"], ["Textbank", "textbank"]],
  fortest: [
    { fraga: "Vad är en myt?", alternativ: ["en berättelse som förklarar världen, ofta med gudar", "en faktatext", "en dikt om naturen"], ratt: 0 },
    { fraga: "Vad betyder tillbakablick?", alternativ: ["berättelsen hoppar bakåt i tiden", "berättelsen slutar", "personen tittar bakåt"], ratt: 0 },
    { fraga: "Vem skrev Pippi Långstrump?", alternativ: ["Astrid Lindgren", "Selma Lagerlöf", "Elsa Beskow"], ratt: 0 },
    { fraga: "Vad är en dialog?", alternativ: ["personer som pratar med varandra", "en beskrivning av en miljö", "en sammanfattning"], ratt: 0 },
    { fraga: "Hur börjar många sagor?", alternativ: ["Det var en gång …", "Sammanfattningsvis …", "Enligt forskning …"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Myter och sagor",
      mal: "Eleverna kan känna igen typiska drag i myter och sagor.",
      upplagg: ["Förtestet (10 min).", "Läs högt en nordisk myt (t.ex. om Tor och Loke) och en folksaga (15 min).", "Jämför i tabellen (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Myt och saga", kolumner: ["Myt", "Saga"], rader: [["förklarar världen: åskan, årstiderna", "underhåller och lär ut något"], ["gudar och hjältar", "prinsessor, troll, djur som pratar"], ["Tor, Oden och Loke i nordisk mytologi", "Det var en gång … – och så levde de lyckliga"], ["varje folk har sina myter", "ofta tretal: tre bröder, tre försök"]] },
        { typ: "fraga", fraga: { fraga: "Varför berättade man myter förr?", alternativ: ["för att förklara saker man inte förstod", "för att sälja böcker", "för att lära sig stava"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Gamla berättelser", stycken: ["Myter är gamla berättelser som förklarar hur världen fungerar. I den nordiska mytologin skapar guden Tor åska när han slår med sin hammare Mjölner.", "Sagor har fasta mönster. De börjar ofta med Det var en gång, och mycket händer i tre: tre bröder, tre försök. Det goda vinner till slut."] }],
      uppgifter: ["Fyll i tabellen för myten och sagan ni har läst.", "Hitta på en egen myt som förklarar något i naturen, t.ex. varför det regnar."],
    },
    {
      titel: "Hur berättelser är byggda",
      mal: "Eleverna kan förklara kronologi och tillbakablick och känna igen dem i en text.",
      upplagg: ["Genomgång med bilderna (10 min).", "Läs ett utdrag med en tillbakablick (15 min).", "Eleverna gör en tidslinje för berättelsen (15 min)."],
      bilder: [
        { typ: "punkter", rubrik: "I vilken ordning?", punkter: ["Kronologiskt: händelserna berättas i den ordning de hände.", "Tillbakablick: berättelsen hoppar bakåt – ofta för att förklara varför någon känner eller gör något.", "Ledtrådar: verb i pluskvamperfekt (hade sett) och ord som för länge sedan, när hon var liten."] },
        { typ: "fraga", fraga: { fraga: "”Leo hade ramlat i sjön när han var fem år.” Vad är det?", alternativ: ["en tillbakablick", "en dialog", "en miljöbeskrivning"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Kronologi och tillbakablick", stycken: ["De flesta berättelser berättas kronologiskt – i den ordning saker händer. Ibland hoppar berättelsen bakåt i tiden. Det kallas tillbakablick. Den förklarar ofta varför en person är som den är."] }],
      uppgifter: ["Gör en tidslinje för berättelsen ni har läst. Markera tillbakablicken.", "Skriv en kort tillbakablick till en egen berättelse."],
    },
    {
      titel: "Miljö, personer och dialog",
      mal: "Eleverna kan skriva miljö- och personbeskrivningar och dialog med rätt skiljetecken.",
      upplagg: ["Läs exemplen på bilden (10 min).", "Eleverna skriver en miljöbeskrivning med alla sinnen (15 min).", "De skriver en kort dialog mellan två personer (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Visa – berätta inte bara", kolumner: ["Berättar", "Visar"], rader: [["Det var läskigt i skogen.", "Grenarna knakade och det luktade fuktig mossa. Något prasslade bakom mig."], ["Hon var arg.", "Hon smällde igen dörren så att tavlan skakade."]] },
        { typ: "punkter", rubrik: "Dialog", punkter: ["Ny rad när någon ny pratar.", "Talstreck eller citattecken.", "– Kommer du? frågade Moa.", "Dialogen visar hur personerna är."] },
      ],
      elevtext: [{ rubrik: "Gestalta", stycken: ["En bra beskrivning visar i stället för att bara berätta. Använd sinnena: vad ser, hör, luktar och känner personen? Låt personerna visa hur de känner genom vad de gör och säger."] }],
      uppgifter: ["Skriv en miljöbeskrivning med minst tre sinnen.", "Skriv en dialog på sex repliker mellan två personer som är oense."],
      lankar: [["Skrivverkstad", "skrivverkstad"]],
    },
    {
      titel: "Författare och dikter",
      mal: "Eleverna kan nämna några betydelsefulla barn- och ungdomsboksförfattare och samtala om vad böcker säger om sin tid.",
      upplagg: ["Presentera några författare med bokomslag (15 min).", "Läs en dikt högt och samtala (10 min).", "Eleverna väljer en bok av en av författarna att läsa (15 min) – gärna med skolbibliotekarien.", "Repetera inför provet."],
      bilder: [
        { typ: "jamfor", rubrik: "Några författare", kolumner: ["Författare", "Exempel på böcker"], rader: [["Astrid Lindgren", "Pippi Långstrump, Bröderna Lejonhjärta, Ronja rövardotter"], ["Selma Lagerlöf", "Nils Holgerssons underbara resa genom Sverige"], ["Maria Gripe", "Hugo och Josefin"], ["Ulf Stark", "Kan du vissla Johanna?"], ["Lennart Hellsing", "rim och dikter för barn"]] },
        { typ: "diskutera", fragor: ["Vad kan en bok från förr berätta om hur det var att vara barn då?", "Vilken bok skulle du rekommendera till en kompis – och varför?"] },
      ],
      elevtext: [{ rubrik: "Böcker från olika tider", stycken: ["Böcker speglar sin tid. I Astrid Lindgrens och Maria Gripes böcker kan man se hur barn levde i Sverige förr – och samtidigt känna igen sig i känslorna. Nils Holgerssons underbara resa skrevs av Selma Lagerlöf som en läsebok om Sveriges landskap."] }],
      uppgifter: ["Välj en av författarna och ta reda på tre saker om hen.", "Läs en bok av författaren och skriv en kort recension.", "Skriv en egen dikt om något i din vardag."],
      lankar: [["Litteraturhistoria", "litteraturhistoria"]],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad förklarar myter ofta?", alternativ: ["hur världen fungerar", "hur man stavar", "vägen till skolan"], ratt: 0 },
      { fraga: "Vad är typiskt för sagor?", alternativ: ["tretal och att det goda vinner", "fakta och källor", "inga personer"], ratt: 0 },
      { fraga: "Vad betyder kronologiskt?", alternativ: ["i den ordning det hände", "baklänges", "utan ordning"], ratt: 0 },
      { fraga: "”Hon smällde igen dörren.” Vad visar meningen?", alternativ: ["att hon är arg", "var hon bor", "vad klockan är"], ratt: 0 },
      { fraga: "Vem skrev Nils Holgerssons underbara resa genom Sverige?", alternativ: ["Selma Lagerlöf", "Astrid Lindgren", "Ulf Stark"], ratt: 0 },
      { fraga: "Hur skriver man dialog?", alternativ: ["ny rad och talstreck för varje ny talare", "allt på en rad", "utan skiljetecken"], ratt: 0 },
    ],
    oppna: [
      { fraga: "Skriv början på en berättelse (8–12 meningar) med en miljöbeskrivning, en personbeskrivning och en kort dialog.", bedomning: ["Miljöbeskrivning med sinnen", "Personbeskrivning som visar", "Dialog med korrekta skiljetecken"] },
      { fraga: "Berätta om en bok du har läst: vad handlar den om och vad säger den om människor eller om tiden den skrevs i?", bedomning: ["Sammanfattar handlingen", "Resonerar om tid, livsvillkor eller värderingar"] },
    ],
  },
  tips: ["Samarbeta med skolbibliotekarien om boktips.", "Lektion 3 passar ihop med skiljetecken (dialog) i grammatikboken.", "Läs gärna myter från elevernas olika kulturer."],
};
