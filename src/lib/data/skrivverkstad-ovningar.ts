import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SkrivverkstadTemplate =
  | "berattande-text"
  | "argumenterande-text"
  | "utredande-text"
  | "kronika"
  | "faktatext"
  | "historisk-text"
  | "poesi"
  | "recension";

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface StepGuideStep {
  title: string;
  instruction: string;
  example: string;
  placeholder: string;
}

export interface PeerReviewCategory {
  title: string;
  prompts: string[];
}

export interface WordBankCategory {
  title: string;
  words: string[];
}

export interface TemplateExercises {
  checklist: ChecklistItem[];
  stepGuide: StepGuideStep[];
  peerReview: PeerReviewCategory[];
  wordBank: WordBankCategory[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const EXERCISE_DATA: Record<
  string,
  Partial<Record<AgeGroup, TemplateExercises>>
> = {
  // =======================================================================
  // BERATTANDE TEXT
  // =======================================================================
  "berattande-text": {
    hogstadiet: {
      checklist: [
        { id: "berattande-hog-1", text: "Har du en tydlig inledning som fångar läsaren?" },
        { id: "berattande-hog-2", text: "Utvecklas karaktärerna under berättelsen?" },
        { id: "berattande-hog-3", text: "Använder du dialog för att driva handlingen framåt?" },
        { id: "berattande-hog-4", text: "Visar du istället för att berätta?" },
        { id: "berattande-hog-5", text: "Bygger du upp spänning mot ett klimax?" },
        { id: "berattande-hog-6", text: "Har du en avslutning som knyter ihop berättelsen?" },
      ],
      stepGuide: [
        {
          title: "Planera din berättelse",
          instruction: "Skissa upp karaktärer, miljö och en övergripande handling. Bestäm vem som berättar och vilken tidsform du ska använda.",
          example: "Huvudperson: Elsa, 14 år, nyinflyttad. Miljö: liten kuststad på vintern. Konflikt: vill passa in men upptäcker en hemlighet.",
          placeholder: "Beskriv dina karaktärer, miljö och grundläggande handling här...",
        },
        {
          title: "Skriv en fängslande inledning",
          instruction: "Börja mitt i handlingen eller med en stark bild som väcker nyfikenhet. Undvik att inleda med 'Det var en gång'.",
          example: "Vinden slet i jackan när Elsa klev av bussen. Ingen väntade på henne.",
          placeholder: "Skriv din inledning här — fånga läsaren direkt...",
        },
        {
          title: "Bygg upp handlingen",
          instruction: "Låt spänningen öka stegvis. Använd dialog, inre tankar och sinnliga beskrivningar för att skapa närvaro.",
          example: "'Du borde inte vara här,' viskade rösten bakom dörren. Elsa kände hjärtat slå snabbare.",
          placeholder: "Utveckla handlingen — lägg till hinder och vändpunkter...",
        },
        {
          title: "Skriv klimax",
          instruction: "Låt alla trådar mötas i berättelsens mest intensiva ögonblick. Höj tempot med korta meningar.",
          example: "Hon sprang. Stegen bakom henne ekade. Dörren var låst.",
          placeholder: "Beskriv berättelsens mest avgörande ögonblick...",
        },
        {
          title: "Avsluta berättelsen",
          instruction: "Knyt ihop lösa trådar. Avslutningen kan vara öppen eller sluten men bör kännas meningsfull.",
          example: "Elsa vände sig om en sista gång. Staden såg annorlunda ut nu — den var hennes.",
          placeholder: "Skriv en avslutning som ger läsaren något att tänka på...",
        },
      ],
      peerReview: [
        {
          title: "Innehåll",
          prompts: [
            "Är berättelsens tema tydligt?",
            "Känns karaktärerna trovärdiga och intressanta?",
            "Finns det en tydlig konflikt som driver handlingen?",
          ],
        },
        {
          title: "Struktur",
          prompts: [
            "Följer berättelsen en logisk ordning?",
            "Fungerar övergångarna mellan scener?",
            "Är tempot lagom — varken för snabbt eller för långsamt?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Används varierat och levande språk?",
            "Är dialogen naturlig och trovärdig?",
            "Finns det starka beskrivningar som väcker sinnen?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Vad är berättelsens största styrka?",
            "Vilken del skulle du vilja läsa mer av?",
            "Ge ett konkret förbättringsförslag.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Känsloord",
          words: ["förtvivlad", "euforisk", "bävande", "lättad", "ängslig", "hoppfull", "rasande", "likgiltig", "förkrossad", "tacksam"],
        },
        {
          title: "Rörelseord",
          words: ["smög", "rusade", "kravlade", "svävade", "stapplade", "gled", "störtade", "vacklade", "hoppade", "kröp"],
        },
        {
          title: "Tidsord",
          words: ["plötsligt", "samtidigt", "efter en stund", "i samma ögonblick", "så småningom", "utan förvarning", "långsamt", "omedelbart"],
        },
        {
          title: "Miljöbeskrivning",
          words: ["dimhöljd", "solstekt", "ödslig", "vindpinad", "lummig", "förfallen", "gnistrande", "dammig", "kuslig", "fridfull"],
        },
      ],
    },
    lagstadiet: {
      checklist: [
        { id: "berattande-lag-1", text: "Har din berättelse en början, en mitt och ett slut?" },
        { id: "berattande-lag-2", text: "Vet läsaren vem berättelsen handlar om?" },
        { id: "berattande-lag-3", text: "Händer det något spännande i berättelsen?" },
        { id: "berattande-lag-4", text: "Har du beskrivit var berättelsen utspelar sig?" },
        { id: "berattande-lag-5", text: "Har du använt pratminus när någon pratar?" },
        { id: "berattande-lag-6", text: "Har du läst igenom och rättat stavfel?" },
      ],
      stepGuide: [
        {
          title: "Bestäm vad berättelsen handlar om",
          instruction: "Välj en huvudperson och fundera på vad som ska hända. Rita gärna en enkel bild av personen.",
          example: "Min berättelse handlar om Nils, en katt som hittar en skattkarta.",
          placeholder: "Vem handlar din berättelse om och vad ska hända?",
        },
        {
          title: "Skriv början",
          instruction: "Berätta vem din huvudperson är och var berättelsen börjar.",
          example: "Nils var en randig katt som bodde i ett rött hus vid havet.",
          placeholder: "Börja din berättelse här — berätta om din huvudperson...",
        },
        {
          title: "Skriv mitten",
          instruction: "Nu händer det spännande! Beskriv problemet eller äventyret.",
          example: "En dag hittade Nils en gammal karta under sängen. Det stod 'X markerar platsen' på den.",
          placeholder: "Vad händer? Beskriv äventyret eller problemet...",
        },
        {
          title: "Skriv slutet",
          instruction: "Berätta hur det gick! Löste sig problemet? Vad hände sedan?",
          example: "Nils grävde på stranden och hittade en burk full med guldmynt. Han blev den rikaste katten i hela byn.",
          placeholder: "Hur slutar berättelsen? Berätta vad som hände till sist...",
        },
        {
          title: "Läs igenom och förbättra",
          instruction: "Läs din berättelse högt för dig själv. Låter det bra? Saknas något?",
          example: "Jag lade till att Nils var nervös när han grävde. Det blev mer spännande!",
          placeholder: "Skriv ner vad du ändrade eller förbättrade...",
        },
      ],
      peerReview: [
        {
          title: "Innehåll",
          prompts: [
            "Vad handlar berättelsen om?",
            "Vilken del tyckte du bäst om?",
            "Förstod du vad som hände?",
          ],
        },
        {
          title: "Struktur",
          prompts: [
            "Har berättelsen en tydlig början, mitt och slut?",
            "Kommer sakerna i rätt ordning?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Finns det fina beskrivningar i texten?",
            "Är meningarna lagom långa?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Vad var bäst med berättelsen?",
            "Har du ett tips på hur den kan bli ännu bättre?",
          ],
        },
      ],
      wordBank: [
        {
          title: "Känsloord",
          words: ["glad", "rädd", "arg", "ledsen", "förvånad", "modig", "nervös", "stolt", "nyfiken", "orolig"],
        },
        {
          title: "Rörelseord",
          words: ["sprang", "smög", "hoppade", "kröp", "dansade", "klättrade", "flög", "simmade", "gick", "rusade"],
        },
        {
          title: "Tidsord",
          words: ["plötsligt", "sedan", "efter det", "en dag", "till slut", "nästa morgon", "strax efter", "samma kväll"],
        },
        {
          title: "Miljöbeskrivning",
          words: ["mörk", "solig", "stor", "liten", "hemlig", "glittrande", "tyst", "bullrig", "vacker", "läskig"],
        },
      ],
    },
  },

  // =======================================================================
  // ARGUMENTERANDE TEXT
  // =======================================================================
  "argumenterande-text": {
    hogstadiet: {
      checklist: [
        { id: "argument-hog-1", text: "Har du en tydlig tes som uttrycker din ståndpunkt?" },
        { id: "argument-hog-2", text: "Stöds din tes av minst två starka argument?" },
        { id: "argument-hog-3", text: "Har du utvecklat varje argument med exempel eller fakta?" },
        { id: "argument-hog-4", text: "Bemöter du ett motargument?" },
        { id: "argument-hog-5", text: "Har du använt källhänvisningar för att stärka trovärdigheten?" },
        { id: "argument-hog-6", text: "Använder du sambandsord för att binda ihop texten?" },
        { id: "argument-hog-7", text: "Avslutar du med en tydlig slutsats som sammanfattar din ståndpunkt?" },
      ],
      stepGuide: [
        {
          title: "Formulera din tes",
          instruction: "Bestäm vad du vill argumentera för. Tesen ska vara en tydlig åsikt som går att diskutera.",
          example: "Alla elever borde få en timmes fysisk aktivitet varje skoldag.",
          placeholder: "Skriv din tes — vad vill du övertyga läsaren om?",
        },
        {
          title: "Samla argument",
          instruction: "Hitta minst tre argument som stöder din tes. Rangordna dem — starkast först eller sist.",
          example: "1. Förbättrar koncentrationen. 2. Minskar stress. 3. Forskning visar bättre skolresultat.",
          placeholder: "Lista dina argument med kort förklaring...",
        },
        {
          title: "Bemöt motargument",
          instruction: "Tänk på vad någon som inte håller med skulle säga. Visa att du förstår men förklara varför din tes ändå håller.",
          example: "Vissa menar att det tar tid från undervisningen, men studier visar att elever lär sig bättre efter rörelse.",
          placeholder: "Vilket är det starkaste motargumentet, och hur bemöter du det?",
        },
        {
          title: "Skriv en sammanhängande text",
          instruction: "Bind ihop dina argument med sambandsord. Varje stycke bör behandla ett argument.",
          example: "För det första... Dessutom... Å andra sidan... Sammanfattningsvis...",
          placeholder: "Skriv din argumenterande text här...",
        },
        {
          title: "Granska och förbättra",
          instruction: "Kontrollera att texten flyter bra, att argumenten är logiska och att du har källhänvisningar.",
          example: "Jag la till en källa från Folkhälsomyndigheten för att stärka mitt andra argument.",
          placeholder: "Anteckna vad du förbättrade i din text...",
        },
      ],
      peerReview: [
        {
          title: "Argumentation",
          prompts: [
            "Är tesen tydlig och tar ställning?",
            "Är argumenten övertygande och väl underbyggda?",
            "Bemöts motargument på ett bra sätt?",
          ],
        },
        {
          title: "Struktur",
          prompts: [
            "Följer texten en logisk ordning?",
            "Har varje stycke ett tydligt fokus?",
            "Fungerar inledning och avslutning?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Används sambandsord effektivt?",
            "Är tonen saklig och övertygande?",
            "Finns det källhänvisningar?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Blev du övertygad? Varför eller varför inte?",
            "Vilket argument var starkast?",
            "Ge ett förbättringsförslag.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Sambandsord",
          words: ["dessutom", "för det första", "å andra sidan", "följaktligen", "trots det", "vidare", "sammanfattningsvis", "däremot", "även", "slutligen"],
        },
        {
          title: "Argumentationsfraser",
          words: ["det råder ingen tvekan om att", "forskning visar att", "ett starkt skäl är", "det kan invändas att", "detta motbevisas dock av", "fakta talar för att"],
        },
        {
          title: "Värdeord",
          words: ["avgörande", "nödvändigt", "orimligt", "effektivt", "problematiskt", "grundläggande", "oacceptabelt", "fördelaktigt", "oroväckande", "lovande"],
        },
      ],
    },
  },

  // =======================================================================
  // UTREDANDE TEXT
  // =======================================================================
  "utredande-text": {
    hogstadiet: {
      checklist: [
        { id: "utredande-hog-1", text: "Har du en tydlig frågeställning som texten undersöker?" },
        { id: "utredande-hog-2", text: "Är texten saklig och objektiv i tonen?" },
        { id: "utredande-hog-3", text: "Har du använt och angett trovärdiga källor?" },
        { id: "utredande-hog-4", text: "Är texten uppdelad med underrubriker?" },
        { id: "utredande-hog-5", text: "Innehåller texten analys och inte bara fakta?" },
        { id: "utredande-hog-6", text: "Avslutar du med en slutsats som besvarar frågeställningen?" },
      ],
      stepGuide: [
        {
          title: "Formulera en frågeställning",
          instruction: "Välj en tydlig fråga som går att undersöka från flera håll. Den ska vara tillräckligt avgränsad.",
          example: "Hur påverkar sociala medier ungdomars självbild?",
          placeholder: "Skriv din frågeställning här...",
        },
        {
          title: "Samla och värdera källor",
          instruction: "Hitta minst tre trovärdiga källor. Anteckna vad varje källa säger och bedöm dess tillförlitlighet.",
          example: "Källa 1: Studie från Karolinska Institutet (2024). Källa 2: Artikel i Forskning & Framsteg.",
          placeholder: "Lista dina källor och vad de säger...",
        },
        {
          title: "Organisera med underrubriker",
          instruction: "Dela in texten i logiska avsnitt med underrubriker. Varje avsnitt belyser en aspekt av frågan.",
          example: "Rubriker: 'Bakgrund', 'Positiva effekter', 'Negativa effekter', 'Slutsats'.",
          placeholder: "Planera dina underrubriker och vad varje avsnitt ska ta upp...",
        },
        {
          title: "Skriv och analysera",
          instruction: "Presentera fakta från dina källor och analysera vad informationen betyder. Var objektiv.",
          example: "Studien visar att 60 % av ungdomarna jämför sig med andra online. Detta tyder på en koppling mellan skärmtid och självkänsla.",
          placeholder: "Skriv din utredande text med analys här...",
        },
        {
          title: "Sammanfatta och dra slutsatser",
          instruction: "Besvara din frågeställning baserat på det du undersökt. Var tydlig med vad du kommit fram till.",
          example: "Sammanfattningsvis visar undersökningen att sociala medier har både positiva och negativa effekter på ungdomars självbild.",
          placeholder: "Skriv din slutsats — vad har du kommit fram till?",
        },
      ],
      peerReview: [
        {
          title: "Innehåll",
          prompts: [
            "Besvaras frågeställningen?",
            "Är informationen relevant och korrekt?",
            "Finns det tillräckligt med fakta och analys?",
          ],
        },
        {
          title: "Struktur",
          prompts: [
            "Är texten logiskt uppdelad?",
            "Fungerar underrubrikerna?",
            "Finns det en tydlig inledning och slutsats?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Är tonen saklig och objektiv?",
            "Används akademiska uttryck korrekt?",
            "Finns det korrekta källhänvisningar?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Lärde du dig något nytt av texten?",
            "Är slutsatsen välgrundad?",
            "Ge ett förbättringsförslag.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Akademiska uttryck",
          words: ["enligt", "det framgår att", "undersökningen visar", "i jämförelse med", "syftet med", "resultatet tyder på", "sammanfattningsvis", "i relation till"],
        },
        {
          title: "Källhänvisningsfraser",
          words: ["enligt en studie av", "forskare vid", "rapporten visar att", "som framgår av", "statistik från", "utifrån undersökningen"],
        },
        {
          title: "Analysord",
          words: ["indikerar", "tyder på", "kan tolkas som", "möjlig förklaring", "konsekvensen blir", "i kontrast till", "det innebär att", "detta beror troligen på"],
        },
      ],
    },
  },

  // =======================================================================
  // KRONIKA
  // =======================================================================
  kronika: {
    hogstadiet: {
      checklist: [
        { id: "kronika-hog-1", text: "Har du en personlig röst och stil som skiner igenom?" },
        { id: "kronika-hog-2", text: "Använder du humor eller ironi på ett effektivt sätt?" },
        { id: "kronika-hog-3", text: "Innehåller texten reflektion och inte bara beskrivning?" },
        { id: "kronika-hog-4", text: "Går du från det konkreta till det allmänna?" },
        { id: "kronika-hog-5", text: "Har du en avslutning med en tydlig poäng?" },
        { id: "kronika-hog-6", text: "Är texten underhållande att läsa?" },
      ],
      stepGuide: [
        {
          title: "Hitta ditt ämne",
          instruction: "Utgå från något du upplevt eller observerat i vardagen. Det personliga blir universellt.",
          example: "Jag ska skriva om hur stressigt det är att välja lunch i skolmatsalen — det säger något om vår beslutsångest.",
          placeholder: "Vad vill du skriva om? Utgå från en vardaglig observation...",
        },
        {
          title: "Börja med en scen",
          instruction: "Dra in läsaren med en konkret situation. Beskriv vad som hände med detaljer.",
          example: "Klockan är 11:47 och kön slingrar sig genom korridoren. Lunchlådan eller maten? Jag fryser.",
          placeholder: "Beskriv en konkret scen som öppnar din krönika...",
        },
        {
          title: "Reflektera och vidga",
          instruction: "Gå från den konkreta scenen till en större tanke. Vad säger det om livet, samhället eller människor?",
          example: "Kanske handlar det inte om lunchen alls, utan om att vi lever i ett samhälle där valen aldrig tar slut.",
          placeholder: "Vad betyder din observation i ett större perspektiv?",
        },
        {
          title: "Hitta din ton",
          instruction: "Experimentera med humor, ironi eller allvar. Din personliga röst gör krönikan unik.",
          example: "Jag har blivit en människa som googlar 'bästa lunchen' klockan sju på morgonen. Det är dit vi har kommit.",
          placeholder: "Skriv vidare med din personliga ton och stil...",
        },
        {
          title: "Landa med en poäng",
          instruction: "Avsluta med en tanke som stannar kvar hos läsaren. Den kan vara rolig, tankeväckande eller överraskande.",
          example: "Imorgon tar jag det som finns närmast. Eller inte. Vi får se.",
          placeholder: "Skriv din avslutning — vad vill du att läsaren tänker efteråt?",
        },
      ],
      peerReview: [
        {
          title: "Personlig röst",
          prompts: [
            "Känns texten personlig och unik?",
            "Hör du skribentens egen röst?",
            "Fungerar tonen — humor, ironi eller allvar?",
          ],
        },
        {
          title: "Innehåll",
          prompts: [
            "Är ämnet intressant och relaterbart?",
            "Finns det reflektion, inte bara beskrivning?",
            "Går texten från konkret till allmänt?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Är språket levande och engagerande?",
            "Fungerar tempot i texten?",
            "Finns det formuleringar som fastnar?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Fick krönikan dig att tänka eller le?",
            "Vad var bäst?",
            "Ge ett konkret förbättringsförslag.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Reflektionsord",
          words: ["egentligen", "i grund och botten", "kanske", "det slår mig att", "sanningen är", "om man tänker efter", "ironiskt nog", "märkligt nog"],
        },
        {
          title: "Humoristiska uttryck",
          words: ["som om livet berodde på det", "naturligtvis", "helt absurt", "jag menar", "typiskt", "vem har inte", "låt oss vara ärliga", "spoiler alert"],
        },
        {
          title: "Vardagsfraser",
          words: ["det var en sån dag", "ni vet hur det är", "jag ska inte ljuga", "det började som vanligt", "och så plötsligt", "vi har alla varit där", "det är inte bara jag"],
        },
      ],
    },
  },

  // =======================================================================
  // FAKTATEXT
  // =======================================================================
  faktatext: {
    hogstadiet: {
      checklist: [
        { id: "fakta-hog-1", text: "Är texten saklig och fri från personliga åsikter?" },
        { id: "fakta-hog-2", text: "Har du en tydlig struktur med inledning, huvuddel och avslutning?" },
        { id: "fakta-hog-3", text: "Använder du underrubriker för att organisera innehållet?" },
        { id: "fakta-hog-4", text: "Har du angett varifrån du hämtat informationen?" },
        { id: "fakta-hog-5", text: "Förklarar du svåra begrepp?" },
        { id: "fakta-hog-6", text: "Är texten anpassad för din målgrupp?" },
      ],
      stepGuide: [
        {
          title: "Välj och avgränsa ämne",
          instruction: "Bestäm vad din faktatext ska handla om och avgränsa så det blir hanterbart.",
          example: "Ämne: Bin. Avgränsning: Varför bin är viktiga för ekosystemet.",
          placeholder: "Vad ska din faktatext handla om? Avgränsa ämnet...",
        },
        {
          title: "Samla information",
          instruction: "Använd trovärdiga källor och anteckna fakta. Kontrollera att uppgifterna stämmer i flera källor.",
          example: "Källa 1: NE.se — bin pollinerar 80 % av alla grödor. Källa 2: Naturvårdsverket.",
          placeholder: "Samla fakta från minst två trovärdiga källor...",
        },
        {
          title: "Skriv med underrubriker",
          instruction: "Organisera texten med tydliga underrubriker. Varje avsnitt behandlar en aspekt.",
          example: "Rubriker: 'Vad gör bin?', 'Hot mot bin', 'Så kan vi hjälpa'.",
          placeholder: "Skriv din faktatext med tydlig struktur...",
        },
        {
          title: "Förklara och förtydliga",
          instruction: "Förklara svåra ord och begrepp. Använd jämförelser om det underlättar förståelsen.",
          example: "Pollinering innebär att pollen förs från en blomma till en annan, ungefär som att leverera ett paket.",
          placeholder: "Gå igenom texten — behöver du förklara något begrepp?",
        },
        {
          title: "Granska och slutför",
          instruction: "Läs igenom texten. Är all information korrekt? Flyter texten bra? Finns källor angivna?",
          example: "Jag dubbelkollade siffran om pollinering och la till en källa.",
          placeholder: "Anteckna vad du kontrollerade och förbättrade...",
        },
      ],
      peerReview: [
        {
          title: "Innehåll",
          prompts: [
            "Är informationen korrekt och relevant?",
            "Lärde du dig något nytt?",
            "Saknas någon viktig aspekt?",
          ],
        },
        {
          title: "Struktur",
          prompts: [
            "Är texten logiskt uppbyggd?",
            "Fungerar underrubrikerna?",
            "Är inledningen intresseväckande?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Är texten saklig i tonen?",
            "Förklaras svåra begrepp?",
            "Är meningarna tydliga?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Är texten intressant att läsa?",
            "Passar den för målgruppen?",
            "Ge ett förbättringsförslag.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Sakprosauttryck",
          words: ["det innebär att", "ett exempel på detta är", "i praktiken", "statistik visar att", "en förklaring är", "i sammanhanget", "det beror på"],
        },
        {
          title: "Strukturord",
          words: ["inledningsvis", "vidare", "dessutom", "avslutningsvis", "till att börja med", "en annan aspekt", "slutligen", "sammanfattningsvis"],
        },
        {
          title: "Förklaringsord",
          words: ["det vill säga", "med andra ord", "detta kallas", "enkelt uttryckt", "till exempel", "jämfört med", "i likhet med", "till skillnad från"],
        },
      ],
    },
    lagstadiet: {
      checklist: [
        { id: "fakta-lag-1", text: "Handlar texten om fakta och inte om vad du tycker?" },
        { id: "fakta-lag-2", text: "Har du en rubrik som berättar vad texten handlar om?" },
        { id: "fakta-lag-3", text: "Har du delat in texten i stycken?" },
        { id: "fakta-lag-4", text: "Har du berättat var du hittade informationen?" },
        { id: "fakta-lag-5", text: "Förklarar du ord som kan vara svåra?" },
        { id: "fakta-lag-6", text: "Har du läst igenom och rättat eventuella fel?" },
      ],
      stepGuide: [
        {
          title: "Välj ett ämne",
          instruction: "Bestäm vad du vill skriva om. Det ska vara något du kan ta reda på fakta om.",
          example: "Jag vill skriva om delfiner.",
          placeholder: "Vad vill du skriva en faktatext om?",
        },
        {
          title: "Ta reda på fakta",
          instruction: "Läs om ditt ämne i en bok eller på en sida för barn. Skriv ner det viktigaste.",
          example: "Delfiner lever i havet. De andas luft. De lever i grupper.",
          placeholder: "Skriv ner fakta du hittat om ditt ämne...",
        },
        {
          title: "Skriv din text",
          instruction: "Skriv en text med det du lärt dig. Börja med att berätta vad ämnet är.",
          example: "Delfiner är djur som lever i havet. De är faktiskt inte fiskar utan däggdjur.",
          placeholder: "Skriv din faktatext här...",
        },
        {
          title: "Förklara svåra ord",
          instruction: "Finns det ord i din text som kan vara svåra? Förklara dem!",
          example: "Däggdjur betyder att mamman ger sina ungar mjölk.",
          placeholder: "Vilka ord behöver du förklara?",
        },
        {
          title: "Läs igenom",
          instruction: "Läs texten högt. Låter allt bra? Stämmer alla fakta?",
          example: "Jag ändrade 'fiskar' till 'däggdjur' för det var fel först.",
          placeholder: "Vad ändrade du när du läste igenom?",
        },
      ],
      peerReview: [
        {
          title: "Innehåll",
          prompts: [
            "Lärde du dig något nytt?",
            "Handlar texten om fakta?",
          ],
        },
        {
          title: "Struktur",
          prompts: [
            "Är texten lätt att följa?",
            "Finns det en bra rubrik?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Är texten lätt att förstå?",
            "Förklaras svåra ord?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Vad tyckte du bäst om?",
            "Har du ett tips till skribenten?",
          ],
        },
      ],
      wordBank: [
        {
          title: "Sakord",
          words: ["det betyder att", "till exempel", "det beror på", "en anledning är", "det kallas", "ett annat ord för"],
        },
        {
          title: "Strukturord",
          words: ["först", "sedan", "dessutom", "till sist", "en annan sak", "det viktigaste"],
        },
        {
          title: "Förklaringsord",
          words: ["det vill säga", "det är ungefär som", "det liknar", "tänk dig att", "det fungerar så att"],
        },
      ],
    },
  },

  // =======================================================================
  // HISTORISK TEXT
  // =======================================================================
  "historisk-text": {
    hogstadiet: {
      checklist: [
        { id: "historisk-hog-1", text: "Är de historiska fakta du använder korrekta och kontrollerade?" },
        { id: "historisk-hog-2", text: "Blandar du fakta med berättande på ett trovärdigt sätt?" },
        { id: "historisk-hog-3", text: "Är tidsperioden tydlig för läsaren?" },
        { id: "historisk-hog-4", text: "Har du beskrivit miljön så att läsaren förflyttas i tiden?" },
        { id: "historisk-hog-5", text: "Undviker du anakronismer (saker som inte fanns i den tiden)?" },
        { id: "historisk-hog-6", text: "Har du angett vilka källor du använt?" },
      ],
      stepGuide: [
        {
          title: "Välj tidsperiod och ämne",
          instruction: "Bestäm vilken tidsperiod du vill skriva om. Välj en händelse eller ett perspektiv att utgå från.",
          example: "Vikingatiden i Birka, ur en ung handelsmans perspektiv.",
          placeholder: "Vilken tid och plats skriver du om? Vems perspektiv?",
        },
        {
          title: "Researcha tidsperioden",
          instruction: "Ta reda på hur människor levde, vad de åt, hur de klädde sig och vad som hände historiskt.",
          example: "I Birka handlade man med päls och silver. Husen var av trä med torvtak.",
          placeholder: "Skriv ner fakta om hur livet var under din valda tidsperiod...",
        },
        {
          title: "Blanda fakta och berättande",
          instruction: "Väv in historiska fakta i en berättande text. Låt fakta komma naturligt genom karaktärernas upplevelser.",
          example: "Erik lade silvermynten på disken. Handelsmannen från Konstantinopel nickade godkännande.",
          placeholder: "Skriv din historiska text — blanda fakta med berättelse...",
        },
        {
          title: "Skapa autentisk miljö",
          instruction: "Beskriv lukter, ljud, färger och material som var typiska för tiden. Undvik moderna uttryck.",
          example: "Röken från eldstaden blandades med lukten av saltat kött och nyklippt ull.",
          placeholder: "Beskriv miljön med sinnliga detaljer från tidsperioden...",
        },
        {
          title: "Kontrollera fakta och avsluta",
          instruction: "Granska att allt stämmer historiskt. Avsluta med att ange dina källor.",
          example: "Jag kontrollerade att silvermynt verkligen användes i Birka via Historiska museet.",
          placeholder: "Vad kontrollerade du? Lista dina källor...",
        },
      ],
      peerReview: [
        {
          title: "Historisk korrekthet",
          prompts: [
            "Verkar de historiska fakta korrekta?",
            "Finns det anakronismer?",
            "Lärde du dig något om tidsperioden?",
          ],
        },
        {
          title: "Berättande",
          prompts: [
            "Väver texten ihop fakta och berättande bra?",
            "Känns karaktärerna trovärdiga för tidsperioden?",
            "Dras du in i berättelsen?",
          ],
        },
        {
          title: "Språk och miljö",
          prompts: [
            "Beskrivs miljön levande?",
            "Känner du dig förflyttad i tiden?",
            "Passar språket tidsperioden?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Vad fungerade bäst?",
            "Vad kunde förbättras?",
            "Ge ett konkret tips.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Tidsmarkörer",
          words: ["under denna tid", "i det förgångna", "århundraden tidigare", "vid den här epoken", "långt före vår tid", "i forntiden", "under medeltiden"],
        },
        {
          title: "Historiska uttryck",
          words: ["kungen beslutade", "folket samlades", "handeln blomstrade", "kriget bröt ut", "allianser slöts", "reformer genomfördes", "gränser drogs"],
        },
        {
          title: "Miljöbeskrivning",
          words: ["kullerstensgator", "fackelsken", "pergament", "rustning", "hästvagn", "medeltida", "stenhus", "vallgrav", "trätunnor", "lerkrus"],
        },
      ],
    },
  },

  // =======================================================================
  // POESI
  // =======================================================================
  poesi: {
    hogstadiet: {
      checklist: [
        { id: "poesi-hog-1", text: "Har du tänkt på rim eller medvetet valt att skriva fritt?" },
        { id: "poesi-hog-2", text: "Har dikten en rytm som stöder stämningen?" },
        { id: "poesi-hog-3", text: "Använder du bildspråk som metaforer eller liknelser?" },
        { id: "poesi-hog-4", text: "Är dina radbrytningar medvetna — skapar de pauser och effekt?" },
        { id: "poesi-hog-5", text: "Väcker dikten en känsla eller tanke hos läsaren?" },
        { id: "poesi-hog-6", text: "Har du läst dikten högt för att pröva klangen?" },
      ],
      stepGuide: [
        {
          title: "Hitta din känsla eller bild",
          instruction: "Börja med en känsla, ett minne eller en bild. Dikten behöver inte handla om allt — en detalj räcker.",
          example: "Jag vill fånga känslan av att stå vid havet i skymningen och känna sig liten.",
          placeholder: "Vad vill du fånga i din dikt? En känsla, en bild, ett ögonblick...",
        },
        {
          title: "Samla ord och bilder",
          instruction: "Skriv ner ord som passar din känsla. Tänk med alla sinnen: vad ser, hör, känner, luktar du?",
          example: "Ord: vågor, skymning, salt, andning, horisont, tyst, oändlig.",
          placeholder: "Samla ord och sinnesintryck som hör till din dikt...",
        },
        {
          title: "Forma rader",
          instruction: "Bygg rader av dina ord. Tänk på var du bryter raden — det styr tempot och känslan.",
          example: "Havet andas.\nJag står vid kanten\noch vet inte\nom jag är stor eller liten.",
          placeholder: "Skriv dina första rader — pröva var du bryter...",
        },
        {
          title: "Lägg till bildspråk",
          instruction: "Använd metaforer, liknelser eller personifieringar för att göra dikten starkare.",
          example: "Horisonten är en söm som håller ihop himmel och hav.",
          placeholder: "Utveckla din dikt med bildspråk...",
        },
        {
          title: "Läs högt och finslipa",
          instruction: "Läs dikten högt. Lyssna på rytmen. Ta bort ord som inte behövs — i dikter är varje ord viktigt.",
          example: "Jag tog bort 'väldigt' för det försvagade raden. 'Tyst' räcker.",
          placeholder: "Vad ändrade du efter att ha läst högt?",
        },
      ],
      peerReview: [
        {
          title: "Känsla och tema",
          prompts: [
            "Vilken känsla väckte dikten?",
            "Förstod du vad dikten handlar om?",
            "Finns det en bild som fastnade?",
          ],
        },
        {
          title: "Bildspråk",
          prompts: [
            "Används metaforer eller liknelser effektivt?",
            "Skapar bildspråket nya perspektiv?",
            "Finns det bilder som kan bli starkare?",
          ],
        },
        {
          title: "Form och rytm",
          prompts: [
            "Fungerar radbrytningarna?",
            "Har dikten en rytm som stöder innehållet?",
            "Passar formen diktens stämning?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Vilken rad var starkast?",
            "Vad tar du med dig efter att ha läst dikten?",
            "Ge ett förslag på hur dikten kan bli ännu bättre.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Bildspråk",
          words: ["som en", "likt", "i skuggan av", "ett hav av", "brinner som", "viskande", "i skepnad av", "gryningens ansikte"],
        },
        {
          title: "Rimord",
          words: ["natt–matt", "vind–kind", "ljus–hus", "skog–tog", "hav–grav", "dröm–ström", "tid–strid", "snö–sjö"],
        },
        {
          title: "Naturord",
          words: ["gryning", "skymning", "dimma", "storm", "dagg", "frost", "blommande", "vissna", "tidvatten", "stjärnfall"],
        },
        {
          title: "Känsloord",
          words: ["längtan", "saknad", "hopp", "ångest", "frid", "vemod", "lycka", "mod", "ensamhet", "glädje"],
        },
        {
          title: "Sinnesintryck",
          words: ["doft av", "smaken av", "ljuset genom", "ljudet av", "känslan av", "kylan mot", "värmen i", "mörkret runt"],
        },
      ],
    },
    lagstadiet: {
      checklist: [
        { id: "poesi-lag-1", text: "Rimmar din dikt? (Den behöver inte, men om du vill!)" },
        { id: "poesi-lag-2", text: "Har du försökt använda en liknelse (som en...)??" },
        { id: "poesi-lag-3", text: "Har du tänkt på var du byter rad?" },
        { id: "poesi-lag-4", text: "Väcker dikten en känsla?" },
        { id: "poesi-lag-5", text: "Har du läst dikten högt för att höra hur den låter?" },
      ],
      stepGuide: [
        {
          title: "Välj vad dikten ska handla om",
          instruction: "Välj en sak att skriva om. Det kan vara ett djur, en känsla, en årstid eller något du gillar.",
          example: "Jag vill skriva en dikt om regn.",
          placeholder: "Vad ska din dikt handla om?",
        },
        {
          title: "Samla ord",
          instruction: "Skriv ner alla ord du tänker på när du tänker på ditt ämne.",
          example: "Regn: droppar, plask, grått, paraply, pölar, regnbåge, blött.",
          placeholder: "Skriv ner ord som passar ditt ämne...",
        },
        {
          title: "Skriv rader",
          instruction: "Gör meningar av dina ord. Varje rad i en dikt kan vara kort!",
          example: "Dropparna dansar\npå fönstret mitt.\nDe sjunger en sång\nsom ingen hört.",
          placeholder: "Skriv dina rader här...",
        },
        {
          title: "Prova en liknelse",
          instruction: "Jämför något med något annat. Använd 'som' eller 'likt'.",
          example: "Regnet faller som små trummor på taket.",
          placeholder: "Skriv en liknelse som passar i din dikt...",
        },
        {
          title: "Läs högt",
          instruction: "Läs din dikt högt! Låter det bra? Du kan ändra ord som inte passar.",
          example: "Jag bytte 'blött' mot 'vått' för det lät bättre med 'grått'.",
          placeholder: "Vad ändrade du efter att ha läst högt?",
        },
      ],
      peerReview: [
        {
          title: "Innehåll",
          prompts: [
            "Vad handlar dikten om?",
            "Vilken känsla ger den dig?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Finns det fina ord eller bilder i dikten?",
            "Rimmar den? Låter det bra?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Vilken rad tyckte du bäst om?",
            "Har du ett tips till poeten?",
          ],
        },
      ],
      wordBank: [
        {
          title: "Bildspråk",
          words: ["som en", "likt", "liknar", "ser ut som", "känns som", "låter som"],
        },
        {
          title: "Rimord",
          words: ["sol–stol", "dag–sag", "natt–katt", "träd–blåd", "sten–ben", "sjö–snö", "vind–kind", "blå–gå"],
        },
        {
          title: "Naturord",
          words: ["sol", "regn", "snö", "vind", "blomma", "träd", "sjö", "berg", "himmel", "stjärna"],
        },
        {
          title: "Känsloord",
          words: ["glad", "ledsen", "arg", "rädd", "lugn", "modig", "ensam", "trygg", "förundrad", "lycklig"],
        },
      ],
    },
  },

  // =======================================================================
  // RECENSION
  // =======================================================================
  recension: {
    hogstadiet: {
      checklist: [
        { id: "recension-hog-1", text: "Har du presenterat verket (titel, upphovsperson, genre)?" },
        { id: "recension-hog-2", text: "Ger du en kort sammanfattning utan att avslöja för mycket?" },
        { id: "recension-hog-3", text: "Argumenterar du för din åsikt med konkreta exempel?" },
        { id: "recension-hog-4", text: "Tar du upp både styrkor och svagheter?" },
        { id: "recension-hog-5", text: "Har du en tydlig rekommendation i avslutningen?" },
        { id: "recension-hog-6", text: "Är tonen lagom personlig men ändå trovärdig?" },
      ],
      stepGuide: [
        {
          title: "Presentera verket",
          instruction: "Börja med att berätta vad du recenserar: titel, skapare, genre och när det kom ut.",
          example: "Stjärnlösa nätter av Arash Hejazi är en självbiografisk roman utgiven 2019.",
          placeholder: "Presentera verket du ska recensera...",
        },
        {
          title: "Sammanfatta utan att spoila",
          instruction: "Ge läsaren en bild av vad verket handlar om utan att avslöja viktiga vändpunkter.",
          example: "Boken följer en pojkes uppväxt i Iran under revolutionen och hans flykt till Sverige.",
          placeholder: "Skriv en kort sammanfattning — avslöja inte slutet!",
        },
        {
          title: "Analysera och värdera",
          instruction: "Lyft fram vad som fungerar och vad som inte gör det. Ge konkreta exempel från verket.",
          example: "Hejazis beskrivningar av Teherans gator är så levande att man känner lukten av kryddor. Däremot tappar boken tempo i mittdelen.",
          placeholder: "Vad är bra och vad kan förbättras? Ge exempel...",
        },
        {
          title: "Jämför gärna",
          instruction: "Sätt verket i ett sammanhang. Påminner det om något annat? Vad gör det unikt?",
          example: "Boken påminner om En läkare utan gränser men har ett mer poetiskt språk.",
          placeholder: "Kan du jämföra med något liknande verk?",
        },
        {
          title: "Ge din rekommendation",
          instruction: "Avsluta med en tydlig rekommendation. Vem bör läsa/se/höra detta och varför?",
          example: "Jag rekommenderar boken till alla som vill förstå vad det innebär att lämna sitt hemland.",
          placeholder: "Skriv din rekommendation — vem passar verket för?",
        },
      ],
      peerReview: [
        {
          title: "Presentation",
          prompts: [
            "Får du som läsare veta vad som recenseras?",
            "Ger sammanfattningen en bra bild utan spoilers?",
          ],
        },
        {
          title: "Argumentation",
          prompts: [
            "Stöds åsikterna av konkreta exempel?",
            "Tas både styrkor och svagheter upp?",
            "Är tonen saklig men personlig?",
          ],
        },
        {
          title: "Språk",
          prompts: [
            "Är texten välskriven och engagerande?",
            "Flyter texten bra?",
            "Används varierat språk?",
          ],
        },
        {
          title: "Helhetsintryck",
          prompts: [
            "Blev du nyfiken på verket?",
            "Är rekommendationen tydlig?",
            "Ge ett förbättringsförslag.",
          ],
        },
      ],
      wordBank: [
        {
          title: "Recensionsfraser",
          words: ["verket lyckas med", "en styrka är", "tyvärr brister", "det som utmärker", "jag rekommenderar", "en svaghet är", "det som fastnar", "värd att uppleva"],
        },
        {
          title: "Värderingsord",
          words: ["gripande", "välskriven", "förutsägbar", "originell", "ojämn", "tankeväckande", "medioker", "mästerlig", "överraskande", "platt"],
        },
        {
          title: "Jämförelseuttryck",
          words: ["påminner om", "i likhet med", "till skillnad från", "i jämförelse med", "i samma genre som", "sticker ut genom att", "delar tema med"],
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// getExercises
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Aliases for component compatibility
// ---------------------------------------------------------------------------

export type TemplateSlug = SkrivverkstadTemplate;
export type ChecklistaItem = ChecklistItem;
export type StegForStegStep = StepGuideStep;
export type KamratresponsCategory = PeerReviewCategory;
export type OrdbankCategory = WordBankCategory;
export type SkrivovningData = {
  checklista: ChecklistaItem[];
  stegForSteg: StegForStegStep[];
  kamratrespons: KamratresponsCategory[];
  ordbanken: OrdbankCategory[];
};

export function getSkrivovningar(
  template: TemplateSlug,
  ageGroup: AgeGroup,
): SkrivovningData | null {
  const data = getExercises(template, ageGroup);
  if (!data) return null;
  return {
    checklista: data.checklist,
    stegForSteg: data.stepGuide,
    kamratrespons: data.peerReview,
    ordbanken: data.wordBank,
  };
}

export function getExercises(
  template: string,
  ageGroup: AgeGroup,
): TemplateExercises | null {
  const templateData = EXERCISE_DATA[template];
  if (!templateData) return null;

  // Try exact match
  if (templateData[ageGroup]) return templateData[ageGroup]!;

  // Fallback chain — higher levels fall back to lower ones
  const fallbacks: Record<AgeGroup, AgeGroup[]> = {
    lagstadiet: [],
    mellanstadiet: ["lagstadiet"],
    hogstadiet: ["mellanstadiet", "lagstadiet"],
    gymnasiet: ["hogstadiet", "mellanstadiet", "lagstadiet"],
  };

  for (const fb of fallbacks[ageGroup]) {
    if (templateData[fb]) return templateData[fb]!;
  }

  // Return first available
  const keys = Object.keys(templateData) as AgeGroup[];
  return keys.length > 0 ? templateData[keys[0]]! : null;
}
