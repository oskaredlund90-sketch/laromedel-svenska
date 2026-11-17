import type { AoFraga } from "@/lib/arbetsomraden/typer";

/**
 * Förtest och prov till lärarhandledningarna. Samma tre frågor används före och
 * efter lektionen (så syns vad eleverna har lärt sig). Provet har dessutom en
 * bedömningsuppgift som bedöms med handledningens bedömningsstöd.
 */
export interface HandledningProv {
  fragor: AoFraga[];
  uppgift: string;
}

const f = (fraga: string, alternativ: string[], ratt = 0): AoFraga => ({ fraga, alternativ, ratt });

export const HANDLEDNING_PROV: Record<string, HandledningProv> = {
  "hoglasning-och-boksamtal": {
    fragor: [
      f("Vad gör man i ett boksamtal?", ["pratar om boken man har läst", "läser tyst var för sig", "skriver av boken"]),
      f("Vad är en huvudperson?", ["den som berättelsen mest handlar om", "den som har skrivit boken", "den som har ritat bilderna"]),
      f("Vad kan du göra om du inte förstår ett ord?", ["fråga eller titta på bilden", "sluta läsa boken", "hoppa över resten av boken"]),
    ],
    uppgift: "Berätta om boken: Vad hände i början, i mitten och i slutet? Vad tyckte du – och varför?",
  },
  "bokstaver-och-ljud": {
    fragor: [
      f("Vilket ljud börjar ”mus” med?", ["m-ljudet", "u-ljudet", "s-ljudet"]),
      f("Vilket ord börjar på samma ljud som ”sol”?", ["sko", "bil", "hus"]),
      f("Vad blir l – a – m – p – a?", ["lampa", "palm", "lamp"]),
    ],
    uppgift: "Skriv eller rita tre saker som börjar på samma ljud som ditt namn.",
  },
  "skriv-en-saga": {
    fragor: [
      f("Hur börjar många sagor?", ["Det var en gång …", "Enligt forskning …", "Hej på dig!"]),
      f("Vad behöver en saga?", ["en början, ett problem och ett slut", "bara ett slut", "bara bilder"]),
      f("Vad är en huvudperson?", ["den som sagan mest handlar om", "den som läser sagan", "platsen där sagan händer"]),
    ],
    uppgift: "Skriv en kort saga med en början, ett problem och en lösning.",
  },
  "sagor-och-berattande": {
    fragor: [
      f("Hur börjar många sagor?", ["Det var en gång …", "Enligt nyheterna …", "Hej och välkomna!"]),
      f("Vad betyder det att återberätta?", ["berätta med egna ord vad som hände", "läsa högt ur boken", "hitta på ett nytt slut"]),
      f("Vad gör en bra lyssnare?", ["tittar på den som berättar", "pratar samtidigt", "tittar bort"]),
    ],
    uppgift: "Återberätta en saga för en kompis: vad hände i början, i mitten och i slutet?",
  },
  "ordkunskap-genom-lek": {
    fragor: [
      f("Vad är en synonym?", ["ett ord som betyder ungefär samma sak", "ett ord som betyder motsatsen", "ett mycket långt ord"]),
      f("Vad är motsatsen till ”varm”?", ["kall", "het", "ljum"]),
      f("Vilket ord hör till temat frukt?", ["päron", "stol", "buss"]),
    ],
    uppgift: "Välj tre nya ord från lektionen. Skriv en mening med varje ord.",
  },
  "att-skriva-sin-forsta-text": {
    fragor: [
      f("Hur börjar en mening?", ["med stor bokstav", "med punkt", "med liten bokstav"]),
      f("Vad sätter man sist i en mening som berättar något?", ["punkt", "frågetecken", "ingenting"]),
      f("Varför har man mellanrum mellan orden?", ["så att man ser var orden slutar", "för att det ska bli längre", "det behövs inte"]),
    ],
    uppgift: "Skriv tre meningar om en bild. Kontrollera stor bokstav, mellanrum och punkt.",
  },
  "lasstrategier-i-grupp": {
    fragor: [
      f("Vad gör man när man förutspår?", ["gissar vad som ska hända", "sammanfattar texten", "slår upp svåra ord"]),
      f("Vad är en sammanfattning?", ["det viktigaste i texten, kort", "alla detaljer i texten", "en ny berättelse"]),
      f("Vad kan du göra när du inte förstår ett stycke?", ["läsa om och ställa frågor till texten", "sluta läsa", "hoppa till slutet"]),
    ],
    uppgift: "Läs en kort text och använd två lässtrategier. Skriv vad du gjorde och vad du förstod.",
  },
  "faktatexter-och-kallkritik": {
    fragor: [
      f("Vem är avsändaren av en text?", ["den som står bakom texten", "den som läser texten", "texten själv"]),
      f("Varför ska man använda flera källor?", ["för att kontrollera att uppgifterna stämmer", "för att texten ska bli längre", "det behöver man inte"]),
      f("Hur skriver man om något man har läst?", ["med egna ord och anger källan", "kopierar texten", "skriver bara rubriken"]),
    ],
    uppgift: "Skriv en kort faktatext med uppgifter från två källor och ange källorna.",
  },
  "kamratrespons-pa-texter": {
    fragor: [
      f("Vad är bra respons?", ["konkret och vänlig, med ett tips", "att bara skriva ”bra”", "att skriva om hela texten"]),
      f("Vad är bra att börja responsen med?", ["något som fungerar i texten", "alla fel", "ett betyg"]),
      f("Vad gör du med responsen du får?", ["väljer vad du vill använda och bearbetar texten", "struntar i den", "blir arg på kamraten"]),
    ],
    uppgift: "Ge skriftlig respons på en kamrats text: två saker som fungerar och ett konkret tips.",
  },
  "muntlig-framstallning": {
    fragor: [
      f("Vilka delar har en presentation?", ["inledning, innehåll och avslutning", "bara innehåll", "bara bilder"]),
      f("Vad är stödord?", ["korta ord på en lapp som hjälper dig att minnas", "hela manuset", "ord som publiken säger"]),
      f("Vad gör en bra åhörare?", ["lyssnar aktivt och visar intresse", "pratar med grannen", "tittar i mobilen"]),
    ],
    uppgift: "Håll en presentation på 2–3 minuter med inledning, innehåll och avslutning. Använd stödord.",
  },
  "dikter-och-poesi": {
    fragor: [
      f("Vad är ett rim?", ["ord som låter likadant i slutet", "ord som börjar på samma bokstav", "ett långt ord"]),
      f("Vad är en liknelse?", ["en jämförelse med ”som”", "ett motsatsord", "en rubrik"]),
      f("Vad kallas en grupp rader i en dikt?", ["strof", "kapitel", "rubrik"]),
    ],
    uppgift: "Skriv en dikt med minst ett rim eller en liknelse.",
  },
  "mediakritik-och-reklam": {
    fragor: [
      f("Vad vill en reklam oftast?", ["få dig att köpa något", "informera neutralt", "berätta en saga"]),
      f("Vad är ett reklamknep?", ["ett sätt att få oss att vilja köpa, t.ex. en känd person eller ”bara i dag”", "en regel för hur reklam får se ut", "ett pris på en vara"]),
      f("Vad betyder det att ett inlägg är sponsrat?", ["någon har betalat för det", "det är gratis att läsa", "det är falskt"]),
    ],
    uppgift: "Analysera en reklam: avsändare, målgrupp, budskap och vilka knep den använder för att påverka.",
  },
  "argumenterande-text": {
    fragor: [
      f("Vad är en tes?", ["det påstående man vill övertyga om", "ett argument mot", "avslutningen"]),
      f("Vad är ett motargument?", ["ett argument mot den egna tesen", "det starkaste argumentet för tesen", "en rubrik"]),
      f("Vilka ord passar för att inleda ett argument?", ["För det första …", "Det var en gång …", "Hej allihopa!"]),
    ],
    uppgift: "Skriv en argumenterande text med tes, tre argument och ett motargument som du bemöter.",
  },
  litteraturanalys: {
    fragor: [
      f("Vad är en texts tema?", ["det övergripande ämnet eller budskapet", "titeln", "första kapitlet"]),
      f("Vad betyder berättarperspektiv?", ["vem som berättar", "var berättelsen utspelar sig", "hur lång texten är"]),
      f("Varför använder man citat i en analys?", ["för att visa stöd i texten", "för att texten ska bli längre", "för att slippa skriva själv"]),
    ],
    uppgift: "Analysera en novell med minst tre litterära begrepp och stöd dina tolkningar med citat.",
  },
  "kritisk-lasning-av-medier": {
    fragor: [
      f("Vad skiljer en nyhetstext från en opinionstext?", ["nyheten ska vara saklig, opinionstexten uttrycker åsikter", "ingenting", "opinionstexten är alltid kortare"]),
      f("Vad är syftet med en opinionstext?", ["att påverka läsaren med åsikter och argument", "att neutralt rapportera vad som hänt", "att sälja en vara"]),
      f("Vad gör du om en uppseendeväckande nyhet bara finns på en okänd sida?", ["kontrollerar om fler trovärdiga källor rapporterar den", "delar den direkt", "litar på den om den har många delningar"]),
    ],
    uppgift: "Jämför hur två medier rapporterar om samma händelse: vad är lika, vad skiljer sig och varför?",
  },
  "debatt-och-argumentation": {
    fragor: [
      f("Vad skiljer en debatt från ett bråk?", ["i en debatt används argument och respekt", "i en debatt får man skrika", "ingenting"]),
      f("Vad är ett personangrepp?", ["att angripa personen i stället för sakfrågan", "ett sakligt motargument", "ett citat"]),
      f("Hur bemöter man ett motargument?", ["förklarar varför det inte håller eller varför ens egna skäl väger tyngre", "låtsas att man inte hörde", "byter ämne"]),
    ],
    uppgift: "Delta i debatten och skriv sedan en reflektion: vilket argument var starkast – och varför?",
  },
  "kreativt-skrivande": {
    fragor: [
      f("Vad betyder gestaltning?", ["att visa i stället för att berätta", "att rita bilder", "att skriva en sammanfattning"]),
      f("Vad är en miljöbeskrivning?", ["en beskrivning av var och när något händer", "en beskrivning av en person", "en lista med ord"]),
      f("Vad visar Freytags pyramid?", ["hur spänningen byggs upp: inledning, stegring, klimax och upplösning", "hur man stavar svåra ord", "hur en dikt rimmar"]),
    ],
    uppgift: "Skriv en berättelse (cirka en sida) där du gestaltar en känsla utan att nämna den.",
  },
  "sprakhistoria-och-sprakforandring": {
    fragor: [
      f("Vilken period i svenskans historia började på 1500-talet?", ["äldre nysvenska", "runsvenska", "fornsvenska"]),
      f("Från vilket språk kom många lånord under Hansans tid?", ["tyska (lågtyska)", "franska", "engelska"]),
      f("Vilket språk lånar svenskan flest nya ord från i dag?", ["engelska", "latin", "franska"]),
    ],
    uppgift: "Beskriv två perioder i svenskans historia och vad i samhället som påverkade språket.",
  },
  "vetenskapligt-skrivande": {
    fragor: [
      f("Vad är en frågeställning?", ["de frågor en undersökning ska besvara", "en lista med källor", "en sammanfattning"]),
      f("Hur ser en källhänvisning ut i Harvardsystemet?", ["(Efternamn år, sida) i löptexten", "en fotnot", "bara en länk"]),
      f("Vilket språk passar i en vetenskaplig text?", ["sakligt och precist", "personligt och känslosamt", "talspråkligt"]),
    ],
    uppgift: "Skriv syfte, frågeställning och en disposition för en vetenskaplig text.",
  },
  retorikanalys: {
    fragor: [
      f("Vad är ethos?", ["talarens trovärdighet", "känslor", "sakliga skäl"]),
      f("Vad är pathos?", ["att väcka känslor", "talarens trovärdighet", "statistik"]),
      f("Vad är logos?", ["sakliga skäl och logik", "talarens kläder", "känslor"]),
    ],
    uppgift: "Analysera ett tal: hur används ethos, pathos och logos – och vilka två stilgrepp? Stöd analysen med citat.",
  },
  litteraturhistoria: {
    fragor: [
      f("Vilken litterär strömning förknippas med Strindbergs Röda rummet (1879)?", ["realismen och det moderna genombrottet", "romantiken", "antiken"]),
      f("Vad kännetecknar romantiken?", ["känslor, natur och fantasi", "vardagsrealism och samhällskritik", "korta meningar och slang"]),
      f("Vem skrev Förvandlingen, om en man som vaknar som en insekt?", ["Franz Kafka", "Henrik Ibsen", "Edith Södergran"]),
    ],
    uppgift: "Placera en text i sin litteraturhistoriska epok och motivera med drag i texten.",
  },
  essaskrivning: {
    fragor: [
      f("Vad kännetecknar en essä?", ["ett personligt och resonerande skrivande som utforskar en fråga", "en rapport med metod och resultat", "en novell"]),
      f("Vad är ofta en essäs utgångspunkt?", ["en fråga eller en iakttagelse", "en tabell", "en lista med källor"]),
      f("Hur använder en essä källor?", ["resonerar med källor och egna erfarenheter", "använder aldrig källor", "består bara av citat"]),
    ],
    uppgift: "Skriv en essä (2–3 sidor) som utforskar en fråga med stöd i minst två källor och egna iakttagelser.",
  },
  "textanalys-med-litteraturvetenskapliga-begrepp": {
    fragor: [
      f("Vad är fokalisering?", ["genom vems ögon och upplevelser händelserna skildras", "hur långa kapitlen är", "när boken skrevs"]),
      f("Vad är en heterodiegetisk berättare?", ["en berättare som inte själv är en person i berättelsen", "en jagberättare som är med i handlingen", "författaren själv"]),
      f("Vad är intertextualitet?", ["att en text anspelar på andra texter", "att en text är översatt", "att en text har många kapitel"]),
    ],
    uppgift: "Analysera en text med minst fyra litteraturvetenskapliga begrepp och stöd dina tolkningar med citat.",
  },
  "sprak-och-makt": {
    fragor: [
      f("Vad är klarspråk?", ["vårdat, enkelt och begripligt språk i offentlig verksamhet", "talspråk i skrift", "språk utan lånord"]),
      f("Vad är en härskarteknik?", ["ett sätt att trycka ned andra i ett samtal eller en grupp", "ett retoriskt stilgrepp", "en grammatisk regel"]),
      f("Hur kan ordval påverka en debatt?", ["orden kan rama in frågan på ett visst sätt", "ordval spelar ingen roll", "bara långa ord påverkar"]),
    ],
    uppgift: "Analysera hur språket används för att påverka i en politisk text eller debatt. Ge exempel på ordval och deras effekt.",
  },
};
