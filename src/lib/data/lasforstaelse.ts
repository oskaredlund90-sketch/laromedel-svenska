import type { AgeGroup } from "@/lib/supabase/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type QuestionLevel = "hitta" | "tolka" | "reflektera";

export interface ReadingQuestion {
  id: string;
  level: QuestionLevel;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface ReadingText {
  id: string;
  ageGroup: AgeGroup;
  title: string;
  passage: string;
  questions: ReadingQuestion[];
}

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------

export const LEVEL_LABELS: Record<QuestionLevel, string> = {
  hitta: "Hitta i texten",
  tolka: "Tolka och dra slutsatser",
  reflektera: "Reflektera och värdera",
};

// ---------------------------------------------------------------------------
// Data — Lågstadiet
// ---------------------------------------------------------------------------

const lagstadietTexts: ReadingText[] = [
  {
    id: "las-lag-1",
    ageGroup: "lagstadiet",
    title: "Ekorren i parken",
    passage:
      "Nora och hennes bror Albin gick till parken en solig höstdag. Löven på träden hade blivit gula och röda. " +
      "Plötsligt stannade Albin och pekade. På en stubbe satt en liten ekorre. Den höll en ekollon i sina små tassar " +
      "och åt snabbt med små rörelser. Nora tog ett steg framåt, men ekorren tittade upp och sprang iväg. " +
      "Den klättrade uppför en stor ek och försvann in i ett hål högt upp i stammen. " +
      '"Varför sprang den?" frågade Nora. ' +
      '"Den blev rädd," sa Albin. "Men titta, den kikar på oss." ' +
      "Nora tittade upp. Ekorrens lilla huvud stack ut ur hålet. Den verkade nyfiken men vågade inte komma ner. " +
      "Barnen satte sig på en bänk och väntade. Efter en lång stund kom ekorren ner igen och hämtade ett nytt ekollon. " +
      "Den tittade på dem men sprang inte iväg den här gången. " +
      '"Den börjar lita på oss," viskade Albin.',
    questions: [
      {
        id: "las-lag-1-q1",
        level: "hitta",
        prompt: "Vad höll ekorren i sina tassar?",
        options: ["En nöt", "Ett ekollon", "En pinne", "Ett löv"],
        correct: 1,
        explanation:
          "I texten står det att ekorren höll \"en ekollon i sina små tassar\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-1-q2",
        level: "tolka",
        prompt: "Varför kom ekorren inte ner på en gång när barnen satt på bänken?",
        options: [
          "Den sov i sitt hål",
          "Den var fortfarande lite rädd för dem",
          "Den hade inga fler ekollon att hämta",
          "Albin skrämde den med ett ljud",
        ],
        correct: 1,
        explanation:
          "Ekorren gömde sig i hålet och kikade ut men vågade inte komma ner. Det visar att den fortfarande var försiktig och lite rädd.",
      },
      {
        id: "las-lag-1-q3",
        level: "reflektera",
        prompt: "Vad kan man lära sig av hur Nora och Albin betedde sig mot ekorren?",
        options: [
          "Att djur gillar att man springer mot dem",
          "Att man ska fånga djur och ta hem dem",
          "Att djur kan bli trygga om man är lugn och tålmodig",
          "Att ekorrar inte är rädda för människor",
        ],
        correct: 2,
        explanation:
          "Barnen satte sig stilla och väntade, och till slut vågade ekorren komma ner. Det visar att tålamod och lugn gör att djur kan känna sig tryggare.",
      },
    ],
  },

  {
    id: "las-lag-2",
    ageGroup: "lagstadiet",
    title: "Den nya i klassen",
    passage:
      "En dag kom det en ny elev till klass 2B. Han hette Sam och hade mörkt hår och stora bruna ögon. " +
      "Fröken sa att han hade flyttat från en annan stad. Sam sa ingenting. Han satte sig vid det tomma bordet längst bak. " +
      "På rasten stod Sam ensam vid staketet och tittade på de andra barnen som lekte. " +
      "Maja såg honom stå där. Hon sprang fram och frågade om han ville vara med och leka. " +
      "Sam skakade på huvudet och tittade ner i marken. Maja blev inte ledsen. Istället satte hon sig bredvid honom " +
      "vid staketet. De sa ingenting på en stund. " +
      '"Jag gillar din ryggsäck," sa Maja till slut. Den var blå med ett rymdskepp på. ' +
      "Sam tittade upp. Ett litet leende dök upp i hans ansikte. " +
      '"Jag gillar rymden," sa han tyst. ' +
      '"Jag med!" sa Maja. "Vill du se min bok om planeter efter rasten?" ' +
      "Sam nickade. Det var första gången han log den dagen.",
    questions: [
      {
        id: "las-lag-2-q1",
        level: "hitta",
        prompt: "Var stod Sam på rasten?",
        options: ["I sandlådan", "Vid staketet", "Vid gungan", "Inne i klassrummet"],
        correct: 1,
        explanation:
          "I texten står det att Sam stod \"ensam vid staketet\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-2-q2",
        level: "tolka",
        prompt: "Varför sa Sam nej först när Maja frågade om han ville leka?",
        options: [
          "Han tyckte inte om Maja",
          "Han var blyg och osäker i sin nya skola",
          "Han hade ont i magen",
          "Han ville hellre läsa en bok",
        ],
        correct: 1,
        explanation:
          "Sam var ny och kände ingen. Att titta ner i marken och inte vilja vara med visar att han var blyg och osäker, inte att han var elak eller ointresserad.",
      },
      {
        id: "las-lag-2-q3",
        level: "reflektera",
        prompt: "Vad var det som gjorde att Sam till slut vågade prata?",
        options: [
          "Fröken tvingade honom",
          "Maja gav inte upp utan var vänlig och tålmodig",
          "De andra barnen kom och hämtade honom",
          "Han blev hungrig och ville ha mat",
        ],
        correct: 1,
        explanation:
          "Maja sprang inte iväg när Sam sa nej. Hon satte sig bredvid honom och hittade något att prata om. Hennes tålamod och vänlighet gjorde att Sam kände sig trygg nog att öppna sig.",
      },
    ],
  },

  {
    id: "las-lag-3",
    ageGroup: "lagstadiet",
    title: "Mormors pannkakor",
    passage:
      "Varje söndag brukade Theo åka till mormor. Det bästa med söndagarna var mormors pannkakor. " +
      "Mormor gjorde alltid smeten själv. Hon vispade mjöl, ägg och mjölk i en stor bunke medan Theo fick röra. " +
      '"Du är min bästa hjälpreda," sa mormor och klappade honom på kinden. ' +
      "Sedan stekte mormor pannkakorna i en gammal svart panna. Pannkakorna blev alltid perfekt runda och gyllene. " +
      "Theo fick ha sylt och grädde på sina. Han tog alltid tre stycken. " +
      "En söndag var mormor förkyld. Theo och mamma bestämde sig för att göra pannkakor hemma istället. " +
      "De följde mormors recept, men pannkakorna blev inte riktigt likadana. De var lite tjockare och inte lika runda. " +
      '"De smakar inte som mormors," sa Theo ledset. ' +
      "Mamma kramade honom. \"Det är för att det saknas en hemlig ingrediens,\" sa hon. " +
      '"Vilken då?" frågade Theo. ' +
      '"Mormors kärlek," sa mamma och log.',
    questions: [
      {
        id: "las-lag-3-q1",
        level: "hitta",
        prompt: "Hur många pannkakor brukade Theo äta?",
        options: ["En", "Två", "Tre", "Fyra"],
        correct: 2,
        explanation:
          "I texten står det att Theo \"tog alltid tre stycken\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-3-q2",
        level: "tolka",
        prompt: "Varför blev inte pannkakorna likadana hemma?",
        options: [
          "De använde fel recept",
          "Mamma och Theo hade inte övat lika mycket som mormor",
          "De hade inget mjöl hemma",
          "Theo ville inte hjälpa till",
        ],
        correct: 1,
        explanation:
          "De följde samma recept, men mormor har stekt pannkakor många gånger och har övning. Det handlar också om att upplevelsen hos mormor gör att det känns speciellt.",
      },
      {
        id: "las-lag-3-q3",
        level: "reflektera",
        prompt: "Vad menade mamma med \"mormors kärlek\" som hemlig ingrediens?",
        options: [
          "Att mormor hade en hemlig krydda",
          "Att maten smakar bättre när någon man älskar lagar den med omtanke",
          "Att mormor köpte dyrare mjöl",
          "Att Theo bara fick äta pannkakor hos mormor",
        ],
        correct: 1,
        explanation:
          "Den hemliga ingrediensen är inte något man kan köpa. Mamma menar att det som gör mormors pannkakor speciella är känslan av att vara hos mormor och att mormor lagar maten med kärlek.",
      },
    ],
  },

  {
    id: "las-lag-4",
    ageGroup: "lagstadiet",
    title: "Den första snön",
    passage:
      "Astrid vaknade och det var tyst utanför fönstret. Det brukade höras bilar och fåglar, men idag var allt stilla. " +
      "Hon drog undan gardinen och flämtade till. Hela världen var vit! Snö täckte taken, gatan och trädgårdens buskar. " +
      "Det såg ut som om någon hade lagt ett stort vitt täcke över allting. " +
      "Astrid klädde på sig så fort hon kunde. Hon tog på mössa, vantar och sin tjocka jacka. " +
      "Ute var luften kall mot kinderna. Snön knarrade under hennes stövlar. " +
      "Astrid lade sig ner på rygg i snön och rörde armarna upp och ner. När hon reste sig försiktigt fanns det " +
      "en ängel i snön. Hon stod och tittade på den och log. " +
      "Grannens hund Sixten kom springande och hoppade rakt igenom snöängeln. " +
      "Astrid skrattade högt. Det var okej. Hon kunde alltid göra en ny. " +
      "Det var den bästa morgonen hela hösten.",
    questions: [
      {
        id: "las-lag-4-q1",
        level: "hitta",
        prompt: "Vad hade Astrid på sig när hon gick ut?",
        options: [
          "Shorts och t-shirt",
          "Mössa, vantar och tjock jacka",
          "Bara sin pyjamas",
          "Regnkläder och gummistövlar",
        ],
        correct: 1,
        explanation:
          "I texten står det att Astrid \"tog på mössa, vantar och sin tjocka jacka\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-4-q2",
        level: "tolka",
        prompt: "Varför var det så tyst utanför fönstret på morgonen?",
        options: [
          "Alla sov fortfarande",
          "Snön dämpar ljud och gör allt tystare",
          "Det var mitt i natten",
          "Fönstret var stängt",
        ],
        correct: 1,
        explanation:
          "Snö absorberar ljud, och det brukar bli ovanligt tyst när det har snöat. Astrid märkte att det var tystare än vanligt, och sedan såg hon att det hade snöat.",
      },
      {
        id: "las-lag-4-q3",
        level: "reflektera",
        prompt: "Varför blev inte Astrid ledsen när hunden förstörde snöängeln?",
        options: [
          "Hon hade inte lagt ner någon möda på ängeln",
          "Hon tyckte det var roligt och visste att hon kunde göra en ny",
          "Hon var rädd för hunden",
          "Hon ville gå in och äta frukost",
        ],
        correct: 1,
        explanation:
          "Astrid skrattade istället för att bli ledsen. Hon förstod att snöänglar är enkla att göra om, och det roliga var stunden, inte att ängeln skulle vara kvar för alltid.",
      },
    ],
  },

  {
    id: "las-lag-5",
    ageGroup: "lagstadiet",
    title: "Biblioteksmysteriet",
    passage:
      "I klass 2A hade någon lämnat en hemlig present i bokhyllan. Det var en liten bok med grönt omslag och guldbokstäver. " +
      "Ingen visste vem som hade lagt den där. Inuti stod det: \"Till den som hittar mig. Läs mig och skicka mig vidare.\" " +
      "Ines hittade boken först. Hon läste den på en eftermiddag. Den handlade om en flicka som reste till månen. " +
      "Nästa dag lade Ines tillbaka boken i hyllan med en lapp: \"Jag har läst den. Nu är det din tur!\" " +
      "Sedan hittade Kevin boken. Han läste den också och skrev en egen lapp: \"Bästa boken jag läst! Vem lade den här?\" " +
      "Snart hade halva klassen läst boken. Alla lapparna låg i en hög inuti omslaget. " +
      "Till slut berättade fröken att det var hon som hade lagt dit boken. " +
      '"Jag ville visa att en bok kan resa från person till person," sa hon. "Och att läsning är roligare när man delar den."',
    questions: [
      {
        id: "las-lag-5-q1",
        level: "hitta",
        prompt: "Vem hittade boken först?",
        options: ["Kevin", "Fröken", "Ines", "Ingen vet"],
        correct: 2,
        explanation:
          "I texten står det att \"Ines hittade boken först\". Svaret finns direkt i texten.",
      },
      {
        id: "las-lag-5-q2",
        level: "tolka",
        prompt: "Varför lade Ines tillbaka boken istället för att behålla den?",
        options: [
          "Hon tyckte inte om boken",
          "Fröken sa att hon måste lämna tillbaka den",
          "Hon ville att fler skulle få läsa den, som det stod i boken",
          "Hon hade redan en likadan bok hemma",
        ],
        correct: 2,
        explanation:
          "I boken stod det \"läs mig och skicka mig vidare\". Ines följde den uppmaningen och la till en egen lapp så att nästa person skulle bli nyfiken.",
      },
      {
        id: "las-lag-5-q3",
        level: "reflektera",
        prompt: "Varför tror du att fröken valde att göra det som ett mysterium istället för att bara ge klassen boken?",
        options: [
          "Hon hade glömt att berätta",
          "Mysteriet gjorde barnen mer nyfikna och ville läsa av egen vilja",
          "Hon ville att bara en elev skulle läsa boken",
          "Hon hade inte tid att prata om boken",
        ],
        correct: 1,
        explanation:
          "Genom att göra det till ett mysterium blev barnen nyfikna och ville själva upptäcka boken. Det gjorde läsningen till ett äventyr istället för en uppgift.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 6. Djur — "Ugglans natt"
  // -----------------------------------------------------------------------
  {
    id: "las-lag-6",
    ageGroup: "lagstadiet",
    title: "Ugglans natt",
    passage:
      "Det var natt i skogen och allt var tyst. Alla djuren sov utom ugglan som satt högt upp i en tall. " +
      "Hon vred på huvudet och lyssnade. Hennes stora ögon kunde se i mörkret nästan lika bra som på dagen. " +
      "Plötsligt hörde hon ett litet pip nere bland löven. En liten sork sprang över stigen. " +
      "Ugglan bredde ut sina breda vingar och gled tyst genom luften. Hennes fjädrar var så mjuka att de inte " +
      "gjorde något ljud alls. Men sorken hörde ändå något och gömde sig snabbt under en rot. " +
      "Ugglan landade på en gren och väntade tålmodigt. Hon var inte arg. Så är livet i skogen — " +
      "ibland lyckas man och ibland inte. Efter en stund flög hon vidare. " +
      "Långt borta hoade en annan uggla. Kanske var det hennes unge som övade sig att jaga för första gången. " +
      "Ugglan svarade med ett mjukt hoo-hoo och fortsatte sin tysta flygning genom natten.",
    questions: [
      {
        id: "las-lag-6-q1",
        level: "hitta",
        prompt: "Varför kunde ugglan flyga utan att göra ljud?",
        options: [
          "Hon flög väldigt högt upp",
          "Hennes fjädrar var så mjuka att de inte gav något ljud",
          "Hon använde magi",
          "Det blåste så mycket att ljudet försvann",
        ],
        correct: 1,
        explanation:
          "Texten säger att ugglans fjädrar var så mjuka att de inte gjorde något ljud alls.",
      },
      {
        id: "las-lag-6-q2",
        level: "tolka",
        prompt: "Varför blev inte ugglan arg när sorken gömde sig?",
        options: [
          "Hon var inte hungrig",
          "Hon förstod att det är naturligt att ibland missa i skogen",
          "Hon var rädd för sorken",
          "Hon ville bara leka",
        ],
        correct: 1,
        explanation:
          "Texten säger att \"så är livet i skogen — ibland lyckas man och ibland inte\". Ugglan accepterade det som hände.",
      },
      {
        id: "las-lag-6-q3",
        level: "reflektera",
        prompt: "Vad kan vi lära oss av hur ugglan hanterade att sorken kom undan?",
        options: [
          "Att man ska ge upp direkt om något inte fungerar",
          "Att man ska bli arg när det går dåligt",
          "Att det är okej att misslyckas ibland och försöka igen senare",
          "Att man aldrig ska jaga djur",
        ],
        correct: 2,
        explanation:
          "Ugglan blev inte upprörd utan flög vidare och fortsatte. Det visar att det är naturligt att misslyckas ibland och att man kan försöka igen.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 7. Natur — "Första snön"
  // -----------------------------------------------------------------------
  {
    id: "las-lag-7",
    ageGroup: "lagstadiet",
    title: "Första snön",
    passage:
      "Wilma vaknade tidigt en morgon i november. Något var annorlunda. Det var ljusare ute än vanligt och helt tyst. " +
      "Hon klättrade ur sängen och drog undan gardinen. Hela trädgården var vit! Snö låg som ett tjockt täcke " +
      "över gräsmattan, på taket och på pappas bil. " +
      "\"Mamma! Det har snöat!\" ropade Wilma och sprang nerför trappan. " +
      "Hon tog på sig overall, vantar och mössa så fort hon kunde. Stövlarna var lite för stora men det spelade ingen roll. " +
      "Ute knarrade snön under hennes fötter. Hon la sig ner och gjorde en snöängel genom att vifta med armar och ben. " +
      "Grannens katt satt på trappan och tittade förvånat på den vita marken. Den lyfte försiktigt en tass och " +
      "satte ner den i snön, men drog snabbt tillbaka den. Wilma skrattade. " +
      "\"Kom, det är inte farligt!\" sa hon. Men katten vände och gick in igen. " +
      "Wilma byggde en liten snögubbe med pinnar till armar och en morot till näsa. Det var den bästa morgonen på länge.",
    questions: [
      {
        id: "las-lag-7-q1",
        level: "hitta",
        prompt: "Vad använde Wilma som näsa till snögubben?",
        options: ["En sten", "En pinne", "En morot", "En knappp"],
        correct: 2,
        explanation:
          "I texten står det att Wilma byggde en snögubbe med \"en morot till näsa\".",
      },
      {
        id: "las-lag-7-q2",
        level: "tolka",
        prompt: "Varför drog katten tillbaka tassen från snön?",
        options: [
          "Katten var allergisk mot snö",
          "Snön var kall och katten tyckte inte om känslan",
          "Wilma skrämde katten",
          "Katten ville leka med snögubben istället",
        ],
        correct: 1,
        explanation:
          "Katten satte försiktigt ner tassen och drog tillbaka den snabbt. Snö är kallt och ovant för en katt, så den tyckte troligen inte om känslan.",
      },
      {
        id: "las-lag-7-q3",
        level: "reflektera",
        prompt: "Varför tror du att Wilma tyckte att det var \"den bästa morgonen på länge\"?",
        options: [
          "Hon fick vara hemma från skolan",
          "Första snön är spännande och hon fick leka ute i något nytt och vackert",
          "Hon fick en ny katt",
          "Mamma lagade pannkakor",
        ],
        correct: 1,
        explanation:
          "Första snön är en speciell händelse. Wilma fick uppleva något nytt och roligt — göra snöänglar och bygga snögubbe. Det gjorde morgonen extra fin.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 8. Vänskap — "Rastvakten"
  // -----------------------------------------------------------------------
  {
    id: "las-lag-8",
    ageGroup: "lagstadiet",
    title: "Rastvakten",
    passage:
      "I Edvins skola hade de något som hette rastvakt. Varje vecka fick två elever en gul väst och uppdraget att " +
      "se till att ingen var ensam på rasten. Edvin tyckte att det lät tråkigt. Han ville hellre spela fotboll. " +
      "Men den här veckan var det hans tur. Han tog på sig västen och gick ut på skolgården. " +
      "Först såg han ingenting speciellt. Alla verkade ha det bra. Men sedan fick han syn på Nova. " +
      "Hon satt ensam på en bänk och ritade i marken med en pinne. " +
      "\"Hej,\" sa Edvin. \"Vill du vara med och göra något?\" " +
      "Nova skakade på huvudet. \"Jag kan inte reglerna till fotboll,\" sa hon tyst. " +
      "\"Vi kan göra något annat,\" sa Edvin. \"Jag kan visa en lek som heter 'Havet är stormigt'.\" " +
      "De började leka, och snart ville fler barn vara med. Snart sprang åtta barn runt och skrattade. " +
      "Nova skrattade högst av alla. När rasten var slut sa hon: \"Tack, Edvin. Det var den roligaste rasten jag haft.\" " +
      "Edvin log. Rastvakten var inte alls tråkig. Det var faktiskt det bästa uppdraget han fått.",
    questions: [
      {
        id: "las-lag-8-q1",
        level: "hitta",
        prompt: "Vad var rastvaktens uppdrag?",
        options: [
          "Att städa skolgården",
          "Att se till att ingen var ensam på rasten",
          "Att dela ut mellanmål",
          "Att bestämma vilka lekar som skulle lekas",
        ],
        correct: 1,
        explanation:
          "Texten säger att rastvaktens uppdrag var att \"se till att ingen var ensam på rasten\".",
      },
      {
        id: "las-lag-8-q2",
        level: "tolka",
        prompt: "Varför ändrade Edvin sin åsikt om rastvakten?",
        options: [
          "Han fick slippa lektionerna",
          "Han upptäckte att det kändes bra att hjälpa någon och göra skillnad",
          "Han fick en belöning av fröken",
          "Han tyckte västen var snygg",
        ],
        correct: 1,
        explanation:
          "Edvin såg hur glad Nova blev och att han kunde göra skillnad. Därför tyckte han att rastvakten var det bästa uppdraget.",
      },
      {
        id: "las-lag-8-q3",
        level: "reflektera",
        prompt: "Varför är det viktigt att någon ser till att ingen är ensam på rasten?",
        options: [
          "Lärarna vill att alla springer hela tiden",
          "Alla barn behöver känna sig sedda och välkomna",
          "Man måste alltid leka i stora grupper",
          "Det är bara viktigt om det regnar",
        ],
        correct: 1,
        explanation:
          "Alla barn mår bra av att bli inkluderade. Nova satt ensam men blev glad när Edvin bjöd in henne. Det visar att en liten gest kan göra stor skillnad.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 9. Familj — "Mormors köksträdgård"
  // -----------------------------------------------------------------------
  {
    id: "las-lag-9",
    ageGroup: "lagstadiet",
    title: "Mormors köksträdgård",
    passage:
      "Varje sommar åkte Liam till mormor på landet. Det bästa var hennes köksträdgård. Där växte morötter, " +
      "ärtor, jordgubbar och stora solrosor som var högre än Liam. " +
      "\"Ska vi plocka jordgubbar?\" frågade mormor och gav honom en skål. " +
      "Liam kröp in bland plantorna. Jordgubbarna var röda och varma av solen. Han stoppade varannan i skålen " +
      "och varannan i munnen. Mormor låtsades inte se. " +
      "Efteråt satt de på verandan och åt jordgubbarna med grädde. Mormor berättade att hon hade lärt sig odla " +
      "av sin mormor när hon var liten. \"Då fanns det inga affärer nära, så man fick odla sin egen mat,\" sa hon. " +
      "\"Kan jag också lära mig?\" frågade Liam. " +
      "\"Självklart,\" sa mormor. \"Vi börjar med att så ärtor i morgon. Du får en egen rad.\" " +
      "Liam somnade den kvällen med jordiga händer och ett stort leende. Han tänkte på sina ärtor " +
      "och undrade hur lång tid det skulle ta innan de växte upp.",
    questions: [
      {
        id: "las-lag-9-q1",
        level: "hitta",
        prompt: "Vad skulle Liam och mormor så nästa dag?",
        options: ["Morötter", "Jordgubbar", "Ärtor", "Solrosor"],
        correct: 2,
        explanation:
          "Mormor sa att de skulle börja med att \"så ärtor i morgon\" och att Liam fick en egen rad.",
      },
      {
        id: "las-lag-9-q2",
        level: "tolka",
        prompt: "Varför låtsades mormor inte se att Liam åt jordgubbar direkt?",
        options: [
          "Hon hade dålig syn",
          "Hon tyckte det var helt okej och ville att han skulle njuta",
          "Hon var arg men ville inte visa det",
          "Hon var upptagen med något annat",
        ],
        correct: 1,
        explanation:
          "Mormor låtsades inte se för att hon tyckte det var gulligt och naturligt att Liam smakade på jordgubbarna. Hon ville att han skulle ha roligt.",
      },
      {
        id: "las-lag-9-q3",
        level: "reflektera",
        prompt: "Varför kan det vara viktigt att lära sig saker av äldre personer i familjen?",
        options: [
          "Äldre personer vet alltid bäst om allt",
          "Man slipper gå i skolan om man lär sig hemma",
          "Äldre har erfarenheter och kunskaper som kan föras vidare till nästa generation",
          "Det är bara viktigt om man bor på landet",
        ],
        correct: 2,
        explanation:
          "Mormor lärde sig av sin mormor, och nu lär Liam sig av sin mormor. Kunskaper och traditioner förs vidare genom generationer, och det berikar båda.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 10. Äventyr — "Skatten i sandlådan"
  // -----------------------------------------------------------------------
  {
    id: "las-lag-10",
    ageGroup: "lagstadiet",
    title: "Skatten i sandlådan",
    passage:
      "Maja hittade en gammal karta i ett av pappas böcker. Den såg ut som en riktig skattkarta med ett kryss och " +
      "en pil som pekade mot något som liknade en sandlåda. Maja visste direkt — det måste vara sandlådan i deras trädgård! " +
      "Hon hämtade sin spade och började gräva. Sanden var tung och det tog lång tid. " +
      "Hennes bror Kasper kom ut. \"Vad gör du?\" frågade han. " +
      "\"Jag letar efter en skatt!\" sa Maja och visade kartan. " +
      "Kasper hämtade sin egen spade och hjälpte till. De grävde och grävde. Till slut träffade Majas spade " +
      "något hårt. Det var en liten metallask. Inuti låg det glaskulor, ett armband och en lapp. " +
      "På lappen stod det: \"Till den som hittar min skatt. Jag gömde den sommaren 1995. Hälsningar, Emma.\" " +
      "\"Vem är Emma?\" frågade Kasper. " +
      "Maja tänkte efter. \"Kanske någon som bodde här innan oss.\" " +
      "De bestämde sig för att gömma en ny skatt i asken — sina finaste stenar och en egen lapp. " +
      "Sedan grävde de ner den igen. \"Nu kan någon hitta den om tjugo år,\" sa Kasper och log.",
    questions: [
      {
        id: "las-lag-10-q1",
        level: "hitta",
        prompt: "Vad låg i metallasken?",
        options: [
          "Pengar och en ring",
          "Glaskulor, ett armband och en lapp",
          "En gammal bok och en penna",
          "Stenar och en karta",
        ],
        correct: 1,
        explanation:
          "Texten berättar att det i asken låg \"glaskulor, ett armband och en lapp\".",
      },
      {
        id: "las-lag-10-q2",
        level: "tolka",
        prompt: "Varför bestämde sig Maja och Kasper för att gömma en ny skatt i asken?",
        options: [
          "De ville bli rika",
          "Mamma bad dem göra det",
          "De tyckte det var spännande att någon annan kunde hitta den i framtiden",
          "De ville inte ha glaskulorna",
        ],
        correct: 2,
        explanation:
          "Barnen tyckte att det var roligt att Emma hade gömt en skatt som de hittade efter många år. De ville ge samma upplevelse till någon annan.",
      },
      {
        id: "las-lag-10-q3",
        level: "reflektera",
        prompt: "Vad visar berättelsen om hur saker kan binda samman människor över tid?",
        options: [
          "Att man alltid ska gräva i sandlådor",
          "Att gamla saker är värdelösa",
          "Att något en person gör kan ge glädje till okända människor långt in i framtiden",
          "Att man inte ska gömma saker",
        ],
        correct: 2,
        explanation:
          "Emma gömde skatten 1995 utan att veta vem som skulle hitta den. Maja och Kasper blev glada och inspirerade. Det visar att handlingar kan skapa glädje över tid.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Mellanstadiet
// ---------------------------------------------------------------------------

const mellanstadietTexts: ReadingText[] = [
  // -----------------------------------------------------------------------
  // 1. Äventyr/mysterium
  // -----------------------------------------------------------------------
  {
    id: "las-mel-1",
    ageGroup: "mellanstadiet",
    title: "Ljuset i fyren",
    passage:
      "Alla i byn visste att fyren på Stormudden hade varit släckt i trettio år. Ingen bodde där längre, och stigen dit var " +
      "övervuxen av björnbär och nässlor. Ändå påstod fiskaren Gustav att han sett ett ljus i fyrtornet tre nätter i rad. " +
      "\"Jag vet vad jag såg,\" sa han på affären en morgon. Folk log och skakade på huvudet. " +
      "Men tolv-åriga Saga och hennes kompis Ville kunde inte släppa tanken. En lördag packade de ficklampor, " +
      "en karta och smörgåsar i sina ryggsäckar och cyklade ut mot udden. " +
      "Stigen var precis så igenvuxen som alla sagt. De fick lämna cyklarna och klättra över omkullfallna trädstammar. " +
      "Till slut stod de framför fyren. Dörren var inte låst — den hade rostat sönder vid gångjärnen. " +
      "Innanför var det fuktigt och mörkt. Spiraltrappan uppåt knakade under deras fötter. " +
      "Längst upp, i det runda rummet med de stora glasrutorna, hittade de förklaringen. " +
      "Någon hade ställt en liten solcellslampa på fönsterbrädan. Bredvid den låg ett slitet anteckningsblock. " +
      "På första sidan stod det: \"Jag tänder ljuset åt morfar. Han var fyrvaktare här i fyrtio år. Ingen ska glömma honom.\" " +
      "Under texten fanns ett namn: Emil, 14 år. Saga och Ville tittade på varandra. " +
      "De visste inte vem Emil var, men de förstod honom. " +
      "På vägen hem stannade Saga och plockade björnbär vid stigen. " +
      "\"Ska vi berätta för Gustav?\" frågade Ville. " +
      "Saga funderade. \"Ja,\" sa hon. \"Men inte för alla andra. Vissa hemligheter mår bäst av att bara delas med dem som bryr sig.\"",
    questions: [
      {
        id: "las-mel-1-q1",
        level: "hitta",
        prompt: "Hur länge hade fyren på Stormudden varit släckt?",
        options: ["Tio år", "Tjugo år", "Trettio år", "Fyrtio år"],
        correct: 2,
        explanation:
          "I textens första mening står det att fyren hade varit släckt i trettio år.",
      },
      {
        id: "las-mel-1-q2",
        level: "hitta",
        prompt: "Vad hittade Saga och Ville längst upp i fyren?",
        options: [
          "En gammal fyrlykta som fortfarande fungerade",
          "En solcellslampa och ett slitet anteckningsblock",
          "En ficklampa och en karta",
          "En trasig radio och en sovsäck",
        ],
        correct: 1,
        explanation:
          "Texten berättar att det stod en solcellslampa på fönsterbrädan och att ett slitet anteckningsblock låg bredvid.",
      },
      {
        id: "las-mel-1-q3",
        level: "tolka",
        prompt: "Varför hade Emil ställt en lampa i fyren?",
        options: [
          "Han ville skrämma byborna",
          "Han ville hedra sin morfar som hade arbetat där",
          "Han hade gått vilse och behövde ljus",
          "Han använde fyren som hemlig klubblokal",
        ],
        correct: 1,
        explanation:
          "Emils anteckning förklarar att hans morfar var fyrvaktare i fyrtio år och att han tände ljuset för att ingen skulle glömma honom. Det handlar om att hedra ett minne.",
      },
      {
        id: "las-mel-1-q4",
        level: "reflektera",
        prompt: "Varför ville Saga bara berätta för Gustav och inte för alla andra?",
        options: [
          "Hon var rädd att de andra skulle bli arga",
          "Hon tyckte att hemligheten förtjänade att skyddas, eftersom den var personlig för Emil",
          "Hon ville ha fyren för sig själv",
          "Hon trodde inte att de andra skulle förstå vägen dit",
        ],
        correct: 1,
        explanation:
          "Saga sa att vissa hemligheter mår bäst av att delas med dem som bryr sig. Gustav brydde sig — han hade sett ljuset och undrat. De andra hade bara skrattat. Saga ville skydda Emils fina gest.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. Realistisk vardag
  // -----------------------------------------------------------------------
  {
    id: "las-mel-2",
    ageGroup: "mellanstadiet",
    title: "Den nya eleven",
    passage:
      "Liam märkte henne direkt när hon steg in genom dörren till klassrummet. Hon hade mörkt, lockigt hår " +
      "och bar en röd jacka som var lite för stor. Fröken Lisa sa att hon hette Amira och att hon " +
      "hade flyttat från Göteborg. Amira fick platsen bredvid Liam. " +
      "De första dagarna sa hon nästan ingenting. På rasterna satt hon på bänken vid idrottshallen " +
      "och läste en bok. Liam ville prata med henne men visste inte vad han skulle säga. " +
      "Hans kompis Oscar sa: \"Varför sitter hon alltid ensam? Det är väl bara att gå dit.\" " +
      "Men Liam mindes hur det hade känts när han själv bytte skola i trean. Han visste att det " +
      "inte räckte med att någon sa hej en gång. Man behövde bli vald, om och om igen. " +
      "Nästa dag på lunchen ställde Liam sin bricka bredvid Amiras utan att fråga. " +
      "\"Vad läser du?\" frågade han. Hon höll upp boken: det var en berättelse om en flicka som seglade " +
      "ensam runt jorden. \"Den är bra,\" sa Amira. \"Hon blir rädd ibland men hon slutar aldrig.\" " +
      "Liam nickade. \"Låter som en tuff typ.\" " +
      "De pratade inte så mycket mer den dagen. Men dagen efter satte sig Liam där igen, och dagen efter det. " +
      "Den fjärde dagen hade Amira sparat en plats åt honom. " +
      "Det var en liten sak — en plats vid ett bord i en stökig matsal. Men Liam förstod att det " +
      "betydde något stort. Det betydde att han inte bara hade sagt hej. Han hade kommit tillbaka. " +
      "Och för någon som just börjat om på nytt var det precis det som behövdes.",
    questions: [
      {
        id: "las-mel-2-q1",
        level: "hitta",
        prompt: "Varifrån hade Amira flyttat?",
        options: ["Stockholm", "Malmö", "Göteborg", "Uppsala"],
        correct: 2,
        explanation:
          "Fröken Lisa berättade att Amira hade flyttat från Göteborg. Svaret finns direkt i texten.",
      },
      {
        id: "las-mel-2-q2",
        level: "tolka",
        prompt: "Varför tyckte Liam att det inte räckte med att säga hej en gång?",
        options: [
          "Han hade själv upplevt att byta skola och visste att man behöver bli vald flera gånger",
          "Han hade läst om det i en bok",
          "Fröken Lisa hade sagt det till honom",
          "Han ville inte verka för ivrig",
        ],
        correct: 0,
        explanation:
          "Texten berättar att Liam mindes hur det kändes när han själv bytte skola i trean. Hans egen erfarenhet gav honom förståelse för vad Amira behövde.",
      },
      {
        id: "las-mel-2-q3",
        level: "tolka",
        prompt: "Vad handlade boken som Amira läste om, och varför kan det vara betydelsefullt?",
        options: [
          "En flicka som seglade runt jorden — det kan spegla Amiras egen känsla av att vara ensam men inte ge upp",
          "En flicka som seglade runt jorden — Amira vill bli seglare",
          "En flicka som seglade runt jorden — den var en skoluppgift",
          "En flicka som seglade runt jorden — den låg på bänken av en slump",
        ],
        correct: 0,
        explanation:
          "Amira valde ut att flickan \"blir rädd ibland men aldrig slutar\". Det tyder på att hon kände igen sig i karaktären — själv i en ny situation men beredd att kämpa vidare.",
      },
      {
        id: "las-mel-2-q4",
        level: "reflektera",
        prompt: "Vad menar texten med att en sparad plats \"betydde något stort\"?",
        options: [
          "Att Amira var snål med platser",
          "Att platsen var den bästa i matsalen",
          "Att Amira genom den lilla gesten visade att hon räknade med Liam — att han blivit viktig för henne",
          "Att matsalen var så full att det var svårt att hitta plats",
        ],
        correct: 2,
        explanation:
          "Att spara en plats är en handling som säger: jag vill att du ska vara här. För Amira, som just börjat om, var det ett steg från ensamhet till gemenskap.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 3. Natur/vetenskap
  // -----------------------------------------------------------------------
  {
    id: "las-mel-3",
    ageGroup: "mellanstadiet",
    title: "Bävrarna vid Lillån",
    passage:
      "I skogen bakom Korsberga by rinner en å som heter Lillån. Den är inte bred — kanske tre meter " +
      "på det smalaste stället. Men våren 2024 hände något som förändrade hela området. Bävrar flyttade in. " +
      "Först märkte ingen något. Sedan upptäckte en bonde att vattnet steg på hans åkermark. " +
      "Han gick uppströms och hittade en damm byggd av grenar, lera och stenar. " +
      "Den var nästan en meter hög och sträckte sig tvärs över ån. " +
      "Bonden blev arg. Han ringde kommunen och ville att dammen skulle rivas. Men kommunekologen Anna kom " +
      "och förklarade något oväntat: bäverdammen var faktiskt bra för naturen. " +
      "\"Bakom dammen bildas en liten sjö,\" sa Anna. \"I den sjön börjar grodor leka, trollsländor kläckas " +
      "och växter rota sig. Fiskar får lugna vatten att växa upp i. Fåglar hittar nya platser att bygga bo.\" " +
      "Anna berättade också att bäverdammar hjälper till vid torka. Vattnet lagras istället för att rinna bort, " +
      "och det renas när det sakta sipprar genom jord och växter. " +
      "Bonden var fortfarande orolig för sin åker. Kommunen hjälpte till att gräva en liten kanal som " +
      "ledde bort en del av vattnet så att åkern inte svämmades över. Dammen fick stå kvar. " +
      "Ett halvår senare hade området kring Lillån fler fågelarter än någonsin. " +
      "Det som först såg ut som ett problem visade sig vara en gåva — byggd av ett djur " +
      "som inte hade en aning om att det hjälpte hela ekosystemet.",
    questions: [
      {
        id: "las-mel-3-q1",
        level: "hitta",
        prompt: "Vad var bäverdammen byggd av?",
        options: [
          "Bara lera",
          "Grenar, lera och stenar",
          "Träplankor och spik",
          "Sand och grus",
        ],
        correct: 1,
        explanation:
          "Texten beskriver att dammen var byggd av grenar, lera och stenar.",
      },
      {
        id: "las-mel-3-q2",
        level: "tolka",
        prompt: "Varför kallar texten bäverdammen en \"gåva\"?",
        options: [
          "Bävern gav dammen till bonden",
          "Dammen skapade livsmiljöer för många arter och renade vatten — den var värdefull för hela naturen",
          "Kommunen gav dammen till byn som present",
          "Dammen var dekorativ och fin att titta på",
        ],
        correct: 1,
        explanation:
          "Ordet \"gåva\" är bildsligt. Dammen gav naturen groddammar, fiskvatten, fågelbon och vattenrening — fördelar som ingen hade planerat.",
      },
      {
        id: "las-mel-3-q3",
        level: "tolka",
        prompt: "Hur löste kommunen konflikten mellan bondens behov och naturens?",
        options: [
          "De rev dammen",
          "De flyttade bävern till en annan å",
          "De grävde en kanal som ledde bort vatten från åkern men lät dammen stå kvar",
          "De betalade bonden för att sluta odla",
        ],
        correct: 2,
        explanation:
          "Kommunen hittade en kompromiss: en kanal som skyddade åkern utan att förstöra dammen. Både bonden och naturen fick det de behövde.",
      },
      {
        id: "las-mel-3-q4",
        level: "reflektera",
        prompt: "Vad kan vi lära oss av berättelsen om bävern och bonden?",
        options: [
          "Att djur alltid vet bäst",
          "Att det som först verkar vara ett problem kan visa sig ha stora fördelar om man undersöker det noga",
          "Att bönder inte ska bo nära åar",
          "Att kommunen alltid har rätt",
        ],
        correct: 1,
        explanation:
          "Berättelsen visar att bondens första reaktion var att riva dammen, men med kunskap och samarbete hittade man en lösning som var bättre för alla. Ibland behöver vi stanna upp och förstå innan vi agerar.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. Historisk
  // -----------------------------------------------------------------------
  {
    id: "las-mel-4",
    ageGroup: "mellanstadiet",
    title: "Barnen i gruvan",
    passage:
      "I mitten av 1800-talet var Sverige ett fattigt land. Många familjer hade inte råd att skicka alla barn till skolan. " +
      "Istället arbetade barnen — i fabriker, på bondgårdar och i gruvor. " +
      "I Bergslagen, mitt i Sverige, fanns hundratals gruvor där man bröt järnmalm. " +
      "Barnen som arbetade där kallades gruvpojkar, fast även flickor förekom. De kunde vara så unga som åtta år. " +
      "Deras jobb var att bära malm i tunga korgar genom smala gångar djupt under jorden. " +
      "Det var mörkt, kallt och fuktigt. Det enda ljuset kom från talgljus som fästs på väggarna. " +
      "Luften var dålig och dammet la sig i lungorna. " +
      "En dag i april 1852 skrev en präst i Norberg ett brev till kungen. " +
      "Prästen hette Johan Edvard Falk och han hade besökt en gruva och blivit förfärad. " +
      "Han beskrev hur barn med krökta ryggar släpade sten i mörker tolv timmar om dagen. " +
      "\"Dessa barn har ingen barndom,\" skrev han. \"De har bytt lekens glädje mot gruvans skugga.\" " +
      "Brevet ledde inte till omedelbar förändring. Men det lästes högt i riksdagen och " +
      "fick fler människor att börja tala om barns rättigheter. " +
      "År 1881, nästan trettio år senare, kom Sveriges första lag som begränsade barnarbete. " +
      "Barn under tolv år fick inte längre arbeta i gruvor eller fabriker. " +
      "Det tog lång tid. Men det började med en person som såg, reagerade och vägrade vara tyst. " +
      "Idag har svenska barn rätt att gå i skolan, leka och vara trygga. " +
      "Det är lätt att tro att det alltid har varit så. Men det har det inte.",
    questions: [
      {
        id: "las-mel-4-q1",
        level: "hitta",
        prompt: "Hur unga kunde barnen vara som arbetade i gruvorna?",
        options: ["Sex år", "Åtta år", "Tio år", "Tolv år"],
        correct: 1,
        explanation:
          "Texten anger att barnen kunde vara så unga som åtta år.",
      },
      {
        id: "las-mel-4-q2",
        level: "hitta",
        prompt: "Vilket år kom den första lagen som begränsade barnarbete i Sverige?",
        options: ["1852", "1865", "1881", "1900"],
        correct: 2,
        explanation:
          "Texten berättar att Sveriges första lag som begränsade barnarbete kom år 1881.",
      },
      {
        id: "las-mel-4-q3",
        level: "tolka",
        prompt: "Varför skrev prästen Johan Edvard Falk sitt brev till kungen?",
        options: [
          "Han ville ha mer pengar till sin kyrka",
          "Han blev upprörd över hur barnen behandlades och ville att det skulle förändras",
          "Han ville stänga gruvan för att den var olönsam",
          "Kungen hade bett om en rapport",
        ],
        correct: 1,
        explanation:
          "Texten säger att prästen blev \"förfärad\" och beskrev barnens situation i starka ord. Han drevs av medkänsla och vilja att förändra.",
      },
      {
        id: "las-mel-4-q4",
        level: "reflektera",
        prompt: "Varför avslutar texten med att det är \"lätt att tro att det alltid har varit så\"?",
        options: [
          "Författaren vill att vi ska sluta tänka på det",
          "Författaren vill påminna oss om att rättigheter inte kommer av sig själva utan måste kämpass för",
          "Författaren tycker att barn har det för bra idag",
          "Författaren vill att vi ska vara rädda",
        ],
        correct: 1,
        explanation:
          "Avslutningen uppmanar läsaren att inte ta sina rättigheter för givna. Skolan, leken och tryggheten är resultat av människor som stred för förändring.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 5. Fantasy/saga
  // -----------------------------------------------------------------------
  {
    id: "las-mel-5",
    ageGroup: "mellanstadiet",
    title: "Flickan som bytte skugga",
    passage:
      "I en liten by vid skogens kant levde Tuva, en flicka som alltid var tyst som en mus. " +
      "Hon vågade inte räcka upp handen i skolan, hon vågade inte sjunga och hon vågade absolut inte " +
      "säga emot när de andra bestämde. Hennes skugga var blek och liten, som om den knappt orkade hänga med henne. " +
      "En kväll när Tuva gick hem genom skogen hörde hon ett prassel i buskarna. " +
      "Fram klev en varelse som såg ut som en räv men med ögon som glödde grönt. " +
      "\"Jag är Skuggväxlaren,\" sa räven. \"Jag ser att din skugga är svag. Jag kan ge dig en ny — " +
      "stor och stark. Men du måste ge mig din röst i utbyte.\" " +
      "Tuva tvekade. Hon använde ju knappt sin röst ändå. Så hon nickade. " +
      "Räven blåste på henne och plötsligt var hennes skugga enorm. Den sträckte sig långt bakom henne " +
      "och såg ut som en jätte. Men när Tuva öppnade munnen kom inget ljud. " +
      "I skolan dagen efter gick alla undan för hennes stora skugga. Ingen retades med henne, " +
      "men ingen pratade med henne heller. Hon kunde inte svara när fröken frågade. " +
      "Hon kunde inte skratta åt Eriks vitsar. Hon kunde inte ropa på sin hund när hon kom hem. " +
      "Den tredje kvällen sprang Tuva tillbaka till skogen. Räven väntade. " +
      "\"Jag vill ha tillbaka min röst,\" formade hon med läpparna. " +
      "Räven lutade huvudet. \"Då förlorar du den stora skuggan.\" " +
      "Tuva nickade utan att tveka. Räven blåste igen, och rösten strömmade tillbaka som vatten. " +
      "Skuggan krympte. Men den var inte lika blek som förut. " +
      "\"Varför?\" frågade Tuva förvånat. Hennes röst lät klarare än hon mindes. " +
      "\"För att du valde den,\" sa räven. \"En skugga som man väljer själv är starkare än en man fått av någon annan.\" " +
      "Tuva gick hem genom skogen. Hon sjöng inte. Inte ännu. Men hon visste att hon skulle kunna.",
    questions: [
      {
        id: "las-mel-5-q1",
        level: "hitta",
        prompt: "Vad fick Tuva i utbyte mot sin röst?",
        options: [
          "Osynlighet",
          "En stor och stark skugga",
          "Förmågan att flyga",
          "Ett magiskt svärd",
        ],
        correct: 1,
        explanation:
          "Räven erbjöd Tuva en ny skugga — stor och stark — i utbyte mot hennes röst.",
      },
      {
        id: "las-mel-5-q2",
        level: "tolka",
        prompt: "Varför var Tuvas skugga \"blek och liten\" i början av berättelsen?",
        options: [
          "Det var molnigt och solen lyste svagt",
          "Skuggan var en bild för Tuvas brist på självförtroende",
          "Hon var kortare än de andra barnen",
          "Det var ett magiskt förhäxande",
        ],
        correct: 1,
        explanation:
          "Skuggan är en symbol. En blek, liten skugga speglar att Tuva inte vågade ta plats eller göra sig hörd. Det är en metafor för hennes osäkerhet.",
      },
      {
        id: "las-mel-5-q3",
        level: "tolka",
        prompt: "Varför ångrade sig Tuva trots att ingen retades med henne längre?",
        options: [
          "Den stora skuggan var för tung att bära",
          "Hon insåg att en röst är mer värd än att se mäktig ut — utan röst var hon mer ensam än förut",
          "Räven hade lurat henne och skuggan var ful",
          "Fröken blev arg på henne",
        ],
        correct: 1,
        explanation:
          "Den stora skuggan gav yttre styrka men tog bort möjligheten till kontakt. Tuva kunde inte svara, skratta eller ropa — och det var värre än att bli retad.",
      },
      {
        id: "las-mel-5-q4",
        level: "reflektera",
        prompt: "Vad menar räven med att \"en skugga man väljer själv är starkare än en man fått av någon annan\"?",
        options: [
          "Att magiska skuggor alltid är tillfälliga",
          "Att verkligt självförtroende kommer inifrån, från egna val, inte från yttre makt",
          "Att rävar ger dåliga skuggor",
          "Att man aldrig ska byta saker med djur i skogen",
        ],
        correct: 1,
        explanation:
          "Rävens ord sammanfattar berättelsens budskap: att mod och självkänsla inte kan ges av någon annan. När Tuva aktivt valde sin röst tillbaka visade hon mod — och det gjorde henne starkare på riktigt.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 6. Mysterium — "Det försvunna experimentet"
  // -----------------------------------------------------------------------
  {
    id: "las-mel-6",
    ageGroup: "mellanstadiet",
    title: "Det försvunna experimentet",
    passage:
      "Klara och hennes grupp hade jobbat i två veckor med sitt NO-experiment. De odlade bönor i tre olika krukor — " +
      "en med vanlig jord, en med sand och en med lera — för att se vilken som växte bäst. Varje dag mätte de " +
      "plantornas längd och skrev ner resultaten i ett häfte. " +
      "Men på måndagsmorgonen var krukorna borta. Bänken vid fönstret var tom. " +
      "\"Vem har tagit dem?\" frågade Klara förtvivlat. Fröken visste inte heller. " +
      "Klara bestämde sig för att ta reda på vad som hänt. Hon kollade papperskorgen — där låg jord. " +
      "Hon frågade vaktmästaren som berättade att han hade sett ljus i klassrummet på söndagskvällen. " +
      "\"Det är bara lärarna som har nyckel,\" sa han. " +
      "Klara tänkte efter. Vikarie-läraren Sven hade haft nyckel under helgen för att förbereda sin lektion. " +
      "Hon hittade honom i matsalen. \"Förlåt,\" sa Sven generat. \"Jag flyttade krukorna till fönsterbrädan " +
      "i korridoren för att jag behövde bänken. Sedan glömde jag säga till.\" " +
      "Krukorna stod precis där han sa. Bönorna levde fortfarande. Klara andades ut. " +
      "\"Nästa gång,\" sa hon till gruppen, \"sätter vi en lapp: Rör ej — pågående experiment.\" " +
      "De skrattade alla, och experimentet kunde fortsätta.",
    questions: [
      {
        id: "las-mel-6-q1",
        level: "hitta",
        prompt: "Vilka tre material odlade gruppen bönorna i?",
        options: [
          "Jord, grus och vatten",
          "Jord, sand och lera",
          "Sand, lera och kompost",
          "Jord, bark och sand",
        ],
        correct: 1,
        explanation:
          "Texten säger att de odlade bönor i tre krukor: en med vanlig jord, en med sand och en med lera.",
      },
      {
        id: "las-mel-6-q2",
        level: "hitta",
        prompt: "Vem hade flyttat krukorna?",
        options: [
          "Vaktmästaren",
          "Fröken",
          "Vikarie-läraren Sven",
          "En annan elev",
        ],
        correct: 2,
        explanation:
          "Vikarie-läraren Sven berättade att han hade flyttat krukorna för att han behövde bänken.",
      },
      {
        id: "las-mel-6-q3",
        level: "tolka",
        prompt: "Hur löste Klara mysteriet?",
        options: [
          "Hon gissade slumpmässigt",
          "Hon samlade ledtrådar steg för steg — jord i papperskorgen, vaktmästarens observation och vem som hade nyckel",
          "Sven kom och berättade direkt",
          "Fröken löste det åt henne",
        ],
        correct: 1,
        explanation:
          "Klara tänkte logiskt: hon hittade jord i papperskorgen, fick veta att ljus synts under helgen, och kom på att Sven hade haft nyckel. Steg för steg ledde det till svaret.",
      },
      {
        id: "las-mel-6-q4",
        level: "reflektera",
        prompt: "Vad kan man lära sig av Klaras sätt att hantera problemet?",
        options: [
          "Att man ska bli arg och skylla på alla",
          "Att det är bäst att ge upp om något går fel",
          "Att lugnt samla information och tänka logiskt hjälper en att lösa problem",
          "Att man aldrig ska lita på vuxna",
        ],
        correct: 2,
        explanation:
          "Istället för att bli ledsen eller arg började Klara leta efter ledtrådar. Hennes metodiska tänkande löste problemet.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 7. Sport — "Målvaktens val"
  // -----------------------------------------------------------------------
  {
    id: "las-mel-7",
    ageGroup: "mellanstadiet",
    title: "Målvaktens val",
    passage:
      "Amir hade alltid spelat forward i fotbollslaget. Han älskade att göra mål. Men en dag skadade sig lagets " +
      "målvakt, och tränaren frågade om någon kunde ställa sig i mål. Ingen räckte upp handen. " +
      "\"Amir, du har bra reflexer. Kan du prova?\" frågade tränaren. " +
      "Amir ville säga nej. Målvakt var tråkigt, tyckte han. Man stod bara still och väntade. " +
      "Men laget behövde honom, så han sa ja. " +
      "De första träningarna var svåra. Bollar flög förbi honom, och han kände sig klumpig i de stora handskarna. " +
      "Men sakta började han förstå positionen. Han lärde sig läsa spelarnas kroppar — en blick åt vänster " +
      "betydde ofta att skottet gick åt höger. Han lärde sig ropa instruktioner till försvararna. " +
      "I första matchen räddade han ett straff. Hela laget jublade och sprang mot honom. " +
      "\"Du är en naturlig målvakt!\" ropade tränaren. " +
      "Amir log. Han saknade att göra mål, det kunde han inte neka. Men att rädda ett mål gav en helt annan " +
      "känsla — som att vara lagets sista hopp och klara det. " +
      "När den ordinarie målvakten blev frisk frågade tränaren vad Amir ville. " +
      "\"Kan jag vara målvakt ibland och forward ibland?\" frågade han. " +
      "Tränaren nickade. \"Perfekt. En spelare som förstår flera positioner är guld värd.\"",
    questions: [
      {
        id: "las-mel-7-q1",
        level: "hitta",
        prompt: "Varför behövde laget en ny målvakt?",
        options: [
          "Den ordinarie målvakten hade slutat i laget",
          "Den ordinarie målvakten hade skadat sig",
          "Tränaren ville byta ut alla positioner",
          "Amir bad om att få byta position",
        ],
        correct: 1,
        explanation:
          "Texten berättar att lagets målvakt skadade sig, och tränaren behövde därför en ersättare.",
      },
      {
        id: "las-mel-7-q2",
        level: "tolka",
        prompt: "Vad menade tränaren med att \"en spelare som förstår flera positioner är guld värd\"?",
        options: [
          "Att Amir skulle få en guldmedalj",
          "Att det är värdefullt att kunna spela på olika platser eftersom man förstår spelet bättre",
          "Att målvakter alltid är bättre än forwards",
          "Att man måste kunna alla positioner för att få vara med i laget",
        ],
        correct: 1,
        explanation:
          "Tränaren menade att en spelare som har provat olika positioner förstår hela spelet bättre och kan bidra mer till laget.",
      },
      {
        id: "las-mel-7-q3",
        level: "tolka",
        prompt: "Hur lärde sig Amir att läsa spelarnas skott?",
        options: [
          "Tränaren visade honom en video",
          "Han observerade att en spelares blick ofta avslöjar åt vilket håll skottet går",
          "Han gissade varje gång",
          "De andra spelarna berättade vart de skulle skjuta",
        ],
        correct: 1,
        explanation:
          "Texten säger att Amir lärde sig läsa spelarnas kroppar — en blick åt vänster betydde ofta att skottet gick åt höger.",
      },
      {
        id: "las-mel-7-q4",
        level: "reflektera",
        prompt: "Vad kan berättelsen lära oss om att prova nya saker?",
        options: [
          "Man ska aldrig ändra på det man redan kan",
          "Att prova något nytt kan vara svårt i början men ge oväntad glädje och nya färdigheter",
          "Man ska alltid göra det tränaren säger utan att tänka själv",
          "Fotboll är den enda sporten där detta händer",
        ],
        correct: 1,
        explanation:
          "Amir trodde att målvakt var tråkigt men upptäckte att det gav en helt annan känsla. Genom att våga prova fick han en ny dimension i sitt spelande.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 8. Vetenskap — "Meteoriten i trädgården"
  // -----------------------------------------------------------------------
  {
    id: "las-mel-8",
    ageGroup: "mellanstadiet",
    title: "Meteoriten i trädgården",
    passage:
      "En morgon hittade Elsa en ovanlig sten i trädgården. Den var mörk, tung och hade en konstig yta som såg " +
      "smält ut. Hon hade aldrig sett något liknande. " +
      "\"Pappa, kan det vara en meteorit?\" frågade hon vid frukostbordet. " +
      "Pappa skrattade. \"Det är nog bara en vanlig sten, Elsa.\" " +
      "Men Elsa gav sig inte. Hon sökte på nätet och hittade en checklista för meteoriter: de är ofta tunga " +
      "för sin storlek, har en mörk skorpa som ser bränd ut, och dras till en magnet. " +
      "Elsa hämtade en kylskåpsmagnet. Den fastnade på stenen. Hennes hjärta bultade. " +
      "Hon mejlade en bild till en geolog på universitetet. Tre dagar senare kom svaret. " +
      "\"Din sten är med stor sannolikhet en järnmeteorit,\" skrev geologen. \"Den kan vara flera tusen år gammal " +
      "och kommer troligen från asteroidbältet mellan Mars och Jupiter. Jag skulle gärna vilja undersöka den närmare.\" " +
      "Elsa kunde knappt tro det. En sten från rymden — i deras trädgård! " +
      "Familjen åkte till universitetet och fick se stenen under mikroskop. Den hade ett mönster som kallas " +
      "Widmanstätten-struktur, som bara finns i meteoriter och tar miljontals år att bildas. " +
      "\"Du gjorde precis rätt,\" sa geologen till Elsa. \"Du var nyfiken, undersökte saken och sökte hjälp av en expert.\" " +
      "Elsa bestämde sig den dagen för att hon ville bli forskare när hon blev stor.",
    questions: [
      {
        id: "las-mel-8-q1",
        level: "hitta",
        prompt: "Vilka egenskaper hade stenen som tydde på att den var en meteorit?",
        options: [
          "Den var lätt, rund och glittrade",
          "Den var tung, hade en mörk bränd yta och drogs till en magnet",
          "Den var vit och hade kristaller",
          "Den var genomskinlig och luktig",
        ],
        correct: 1,
        explanation:
          "Texten beskriver att meteoriter är tunga, har en mörk bränd skorpa och dras till magneter — alla egenskaper Elsas sten hade.",
      },
      {
        id: "las-mel-8-q2",
        level: "hitta",
        prompt: "Varifrån trodde geologen att meteoriten kom?",
        options: [
          "Från månen",
          "Från asteroidbältet mellan Mars och Jupiter",
          "Från Saturnus ringar",
          "Från jorden själv",
        ],
        correct: 1,
        explanation:
          "Geologen skrev att stenen troligen kom från asteroidbältet mellan Mars och Jupiter.",
      },
      {
        id: "las-mel-8-q3",
        level: "tolka",
        prompt: "Varför skrattade pappa först när Elsa frågade om meteoriten?",
        options: [
          "Han tyckte stenar var roliga",
          "Han trodde det var osannolikt att en meteorit skulle hamna i deras trädgård",
          "Han visste redan att det var en meteorit",
          "Han ville inte att Elsa skulle bli forskare",
        ],
        correct: 1,
        explanation:
          "Pappa trodde att det var mycket osannolikt att en meteorit skulle hamna just i deras trädgård. Det lät för fantastiskt för att vara sant.",
      },
      {
        id: "las-mel-8-q4",
        level: "reflektera",
        prompt: "Vilken egenskap hos Elsa var viktigast för att hon skulle lyckas ta reda på sanningen?",
        options: [
          "Att hon var stark och kunde lyfta stenen",
          "Att hon var envis i sin nyfikenhet och inte gav upp trots att pappa tvivlade",
          "Att hon hade en magnet hemma",
          "Att hon bodde nära ett universitet",
        ],
        correct: 1,
        explanation:
          "Elsas viktigaste egenskap var att hon inte gav sig. Trots att pappa tvivlade fortsatte hon undersöka, söka information och kontakta en expert.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 9. Historia — "Brevet från 1918"
  // -----------------------------------------------------------------------
  {
    id: "las-mel-9",
    ageGroup: "mellanstadiet",
    title: "Brevet från 1918",
    passage:
      "Under renoveringen av farmors gamla hus hittade Hugo ett brev inuti väggen. Det hade ramlat ner bakom " +
      "en panel och låg dammigt i ett gulnat kuvert. Brevet var daterat den 5 november 1918. " +
      "Hugo läste högt för familjen: " +
      "\"Kära Astrid, kriget är äntligen slut. Jag kommer hem till jul. Jag har längtat varje dag. " +
      "Spara den sista biten av kaffet — vi ska dricka det tillsammans vid brasan. Din Erik.\" " +
      "Farmor blev alldeles tyst. \"Erik var min farfar,\" sa hon sakta. \"Han var soldat i första världskriget. " +
      "Astrid var min farmor. Jag visste att de hade skrivit brev till varandra, men jag har aldrig sett ett.\" " +
      "Hugo tittade på det tunna papperet. Det var över hundra år gammalt. Bläcket hade bleknat men gick " +
      "fortfarande att läsa. " +
      "\"Varför hamnade det i väggen?\" frågade han. " +
      "Farmor tänkte efter. \"Postgången var opålitlig under kriget. Kanske kom brevet fram först efter att " +
      "Erik redan var hemma. Och sedan la någon undan det och glömde det.\" " +
      "Hugo fotograferade brevet försiktigt. Han tänkte att han ville visa det i skolan. " +
      "\"Historia är inte bara i böcker,\" sa han till sin mamma. \"Det finns i vanliga hus också.\"",
    questions: [
      {
        id: "las-mel-9-q1",
        level: "hitta",
        prompt: "När var brevet skrivet?",
        options: [
          "5 november 1945",
          "5 november 1918",
          "5 december 1918",
          "5 november 1818",
        ],
        correct: 1,
        explanation:
          "Texten anger tydligt att brevet var daterat den 5 november 1918.",
      },
      {
        id: "las-mel-9-q2",
        level: "tolka",
        prompt: "Varför bad Erik att Astrid skulle spara kaffet?",
        options: [
          "Han tyckte inte om kaffe",
          "Under kriget var mat och dryck svårt att få tag på, så kaffe var värdefullt",
          "Han ville ge det till farmor",
          "Han drack aldrig kaffe ensam",
        ],
        correct: 1,
        explanation:
          "Under första världskriget var det ransonering och brist på varor som kaffe. Att dela den sista biten kaffe var därför något speciellt.",
      },
      {
        id: "las-mel-9-q3",
        level: "tolka",
        prompt: "Varför blev farmor alldeles tyst när hon hörde brevet?",
        options: [
          "Hon var arg på Hugo",
          "Hon blev rörd över att höra sina morföräldrars ord efter så lång tid",
          "Hon var trött",
          "Hon förstod inte vad brevet handlade om",
        ],
        correct: 1,
        explanation:
          "Farmor kände igen namnen som sina egna morföräldrar. Att plötsligt höra deras röster genom ett hundra år gammalt brev var gripande.",
      },
      {
        id: "las-mel-9-q4",
        level: "reflektera",
        prompt: "Hugo sa att \"historia inte bara finns i böcker\". Vad menade han?",
        options: [
          "Att skolböcker är tråkiga",
          "Att man inte behöver läsa om historia",
          "Att historia lever kvar i föremål, brev och platser runt omkring oss och känns mer verklig då",
          "Att hus alltid har brev i väggarna",
        ],
        correct: 2,
        explanation:
          "Hugo upptäckte att ett riktigt brev från en riktig person gav historien liv. Det blev personligt och verkligt på ett sätt som en lärobok inte alltid kan.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 10. Fantasi — "Biblioteket under trappan"
  // -----------------------------------------------------------------------
  {
    id: "las-mel-10",
    ageGroup: "mellanstadiet",
    title: "Biblioteket under trappan",
    passage:
      "Leo visste att det gamla stadsbiblioteket hade en källare, men dörren under trappan var alltid låst. " +
      "En regnig onsdag glömde bibliotekarien att låsa den. Leo såg den stå på glänt och kunde inte motstå. " +
      "Trappan ner var smal och brant. Luften luktade av gammalt papper och sten. " +
      "Längst ner fanns ett litet rum med hyllor från golv till tak. Böckerna var gamla — riktigt gamla. " +
      "Leo drog ut en bok med skinnpärm. Den var skriven för hand, med bläck och vacker stil. " +
      "\"Äventyr till havs — kapten Johanna Bergs loggbok, 1843\" stod det på första sidan. " +
      "Leo slog upp en sida i mitten. Kapten Johanna beskrev en storm utanför Azorerna. Vågorna var höga " +
      "som hus och besättningen bad till alla helgon. Men Johanna skrev lugnt och metodiskt: vindstyrka, " +
      "kurs, manövrer hon beordrade. " +
      "\"Vem är du?\" En röst fick Leo att hoppa till. Det var bibliotekarien. " +
      "\"Förlåt, dörren stod öppen...\" stammade Leo. " +
      "Bibliotekarien såg vilken bok han höll. Hennes ögon vidgades. \"Den har vi letat efter i åratal! " +
      "Johanna Berg var en av Sveriges första kvinnliga kaptener. Vi trodde loggboken hade gått förlorad.\" " +
      "Leo hjälpte bibliotekarien att bära upp böckerna. Loggboken fick en egen monter i entrén. " +
      "Och på skylten stod det: \"Återfunnen av Leo Sjöberg, 11 år.\"",
    questions: [
      {
        id: "las-mel-10-q1",
        level: "hitta",
        prompt: "Vem hade skrivit loggboken som Leo hittade?",
        options: [
          "En bibliotekarie från 1900-talet",
          "Kapten Johanna Berg, år 1843",
          "Leo Sjöbergs farfar",
          "En okänd sjöman",
        ],
        correct: 1,
        explanation:
          "På första sidan stod det \"Äventyr till havs — kapten Johanna Bergs loggbok, 1843\".",
      },
      {
        id: "las-mel-10-q2",
        level: "tolka",
        prompt: "Vad berättar Johannas sätt att skriva under stormen om henne som person?",
        options: [
          "Att hon inte brydde sig om besättningen",
          "Att hon var lugn, professionell och modig även i farliga situationer",
          "Att hon inte förstod hur farlig stormen var",
          "Att hon bara skrev ner vad andra sa åt henne",
        ],
        correct: 1,
        explanation:
          "Medan besättningen bad till helgon skrev Johanna lugnt och metodiskt om vind, kurs och manövrer. Det visar att hon var samlad och professionell.",
      },
      {
        id: "las-mel-10-q3",
        level: "tolka",
        prompt: "Varför vidgades bibliotekariens ögon när hon såg boken?",
        options: [
          "Hon var arg för att Leo var i källaren",
          "Hon kände igen boken som en viktig historisk skrift som de trott var förlorad",
          "Hon var rädd för gamla böcker",
          "Hon hade aldrig sett en bok förut",
        ],
        correct: 1,
        explanation:
          "Bibliotekarien sa att de hade letat efter loggboken i åratal. Att den plötsligt dök upp var en stor överraskning.",
      },
      {
        id: "las-mel-10-q4",
        level: "reflektera",
        prompt: "Varför tror du att biblioteket gav loggboken en egen monter i entrén?",
        options: [
          "Boken var väldigt vacker",
          "De ville straffa Leo för att han gått in i källaren",
          "Boken berättar en viktig historia om en kvinna som bröt normer, och den förtjänade att synas",
          "De hade ingen hylla kvar",
        ],
        correct: 2,
        explanation:
          "Johanna Berg var en av Sveriges första kvinnliga kaptener. Hennes loggbok är historiskt viktig och inspirerande, och förtjänade att visas upp.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Högstadiet
// ---------------------------------------------------------------------------

const hogstadietTexts: ReadingText[] = [
  // --- 6. Litterär fiktion ---
  {
    id: "las-hog-1",
    ageGroup: "hogstadiet",
    title: "Huset vid sjön",
    passage:
      "Sommarstugan hade stått tom i tre år när Alva äntligen vågade återvända. Grinden gnisslade " +
      "på samma sätt som förr, men ogräset hade vuxit sig högt mellan grusstenarna på gången och " +
      "de vita knutarna hade grånats av väder och vind. Hon stannade på trappen och lät blicken " +
      "vandra över sjön. Vattnet låg blankt och stilla i augustivärmen, precis som det hade gjort " +
      "den sista kvällen med farmor. De hade suttit på bryggan med fötterna i vattnet och farmor " +
      "hade berättat om krigsåren, om hur hon som sjuttonåring gömt sig i en källare i Warszawa " +
      "medan granater slog ner i gatan utanför. Alva hade lyssnat med vidöppna ögon, men inte " +
      "förstått. Inte på riktigt. Man kan inte förstå rädsla man aldrig känt, hade farmor sagt " +
      "och strukit henne över håret. Men du kan bära berättelsen vidare. Det är nog. " +
      "Nu stod Alva i hallen och kände doften av trä och gammalt tyg. Farmors yllekofta hängde " +
      "fortfarande på kroken vid dörren, som om hon bara hade gått ut för att vattna pelargonerna. " +
      "Alva tryckte ansiktet mot tyget och andades in. Lukten var svag men omistlig — lavendel, " +
      "kanel och någonting som inte hade något namn, bara en känsla av att vara hemma. På köksbordet " +
      "låg ett kuvert med hennes namn skrivet i farmors kantiga handstil. Brevet var daterat tre " +
      "veckor före hennes död, som om hon hade vetat. Alva satte sig vid bordet och lät fingrarna " +
      "följa bokstäverna innan hon öppnade det. Kära Alva, stod det. Du kommer hit när du är redo, " +
      "och då vill jag att du ska veta: det här huset är inte en plats. Det är ett minne som vägrar " +
      "försvinna. Ta hand om det, inte för min skull, utan för din egen. Världen kommer att försöka " +
      "få dig att glömma varifrån du kommer. Låt den inte lyckas. " +
      "Alva vek ihop brevet och lade det mot bröstet. Genom fönstret såg hon en häger lyfta från " +
      "vassarna vid stranden, långsamt och tungt, som om den bar hela sjöns tystnad på sina vingar. " +
      "Hon grät inte. I stället gick hon ut på bryggan, satte sig på samma plats som den där kvällen " +
      "och lät fötterna sjunka ner i det svala vattnet. Sjön tog emot henne utan frågor. Solen " +
      "sjönk sakta och himlen färgades i nyanser av koppar och lavendel. Alva tänkte att farmor " +
      "hade haft rätt: man behöver inte förstå allt man bär. Det räcker att man bär det vidare.",
    questions: [
      {
        id: "las-hog-1-q1",
        level: "tolka",
        prompt: "Vad symboliserar farmors yllekofta som fortfarande hänger på kroken?",
        options: [
          "Att ingen har städat stugan på länge",
          "Att farmors närvaro lever kvar trots hennes frånvaro",
          "Att Alva borde ta med sig koftan hem",
          "Att farmor var slarvig och glömde sina saker",
        ],
        correct: 1,
        explanation:
          "Koftan beskrivs som om farmor bara gått ut en stund. Det är en symbol för att " +
          "farmors närvaro finns kvar i huset — en bild av minne och fortsatt samhörighet trots döden.",
      },
      {
        id: "las-hog-1-q2",
        level: "reflektera",
        prompt: "Varför valde Alva att sätta sig på bryggan i slutet av texten?",
        options: [
          "Hon ville bada i sjön",
          "Hon återskapade minnet av den sista kvällen med farmor för att bearbeta sin sorg",
          "Hon väntade på att någon skulle komma och hälsa på",
          "Hon var trött efter resan och behövde vila",
        ],
        correct: 1,
        explanation:
          "Alva upprepar den sista gemensamma stunden med farmor — fötterna i vattnet, samma plats. " +
          "Det är ett sätt att knyta an till minnet och finna tröst, en del av hennes sorgeprocess.",
      },
      {
        id: "las-hog-1-q3",
        level: "tolka",
        prompt:
          "Farmor säger: \"Man kan inte förstå rädsla man aldrig känt.\" Vad menar hon?",
        options: [
          "Att Alva är för ung för att höra om kriget",
          "Att empati för andras lidande har gränser och att verklig förståelse kräver egen erfarenhet",
          "Att farmor inte vill prata om sina upplevelser",
          "Att rädsla är en känsla som bara finns i krig",
        ],
        correct: 1,
        explanation:
          "Farmor reflekterar över att det finns en skillnad mellan att höra om lidande och att ha " +
          "upplevt det. Samtidigt säger hon att det räcker att bära berättelsen vidare — man behöver " +
          "inte ha känt samma rädsla för att hålla minnet levande.",
      },
      {
        id: "las-hog-1-q4",
        level: "reflektera",
        prompt:
          "Texten avslutas med att Alva tänker att \"det räcker att man bär det vidare\". Vad betyder det i ett större sammanhang?",
        options: [
          "Att det är viktigt att ärva sommarstugor",
          "Att minnen och berättelser från tidigare generationer har värde även om vi inte fullt ut förstår dem",
          "Att man inte ska tänka på svåra saker",
          "Att Alva ska skriva en bok om farmor",
        ],
        correct: 1,
        explanation:
          "Textens centrala tema handlar om minnesbevarande och generationsöverbryggande berättande. " +
          "Man behöver inte ha levt genom samma erfarenheter för att ge dem vidare — det är " +
          "berättelsens kraft.",
      },
      {
        id: "las-hog-1-q5",
        level: "hitta",
        prompt: "Hur länge hade sommarstugan stått tom innan Alva återvände?",
        options: ["Ett år", "Två år", "Tre år", "Fem år"],
        correct: 2,
        explanation:
          "I textens första mening står det att stugan hade stått tom i tre år. Det är en uppgift " +
          "som går att hitta direkt i texten.",
      },
    ],
  },

  // --- 7. Realistisk/socialrealism ---
  {
    id: "las-hog-2",
    ageGroup: "hogstadiet",
    title: "Allt det osynliga",
    passage:
      "Varje morgon vaknade Yasmin till ljudet av grannens TV genom väggen. Lägenheten på " +
      "Bergsgatan var liten — två rum och kök — och väggarna var så tunna att hon kunde höra " +
      "när grannen hostade, när hans telefon ringde, när han pratade med sin katt. Hennes mamma " +
      "hade redan gått till sitt första jobb vid sex, det på äldreboendet, och skulle sedan gå " +
      "vidare till kvällspasset på restaurangen. De såg varandra en timme om dagen, ibland mindre. " +
      "Yasmin gjorde frukost själv — två skivor knäckebröd med margarin och en kopp te. Hon hade " +
      "lärt sig att hushålla tidigt. Pengarna räckte om man var noga, om man inte slösade, om man " +
      "inte fick för sig att önska sig saker. " +
      "I skolan satt hon längst fram i klassrummet. Inte för att hon var plugghäst, som Rasmus " +
      "brukade säga med ett snett leende, utan för att det var det enda sättet att stänga ute " +
      "bruset. Om hon satt längst fram kunde hon koncentrera sig på läraren, på orden, på det som " +
      "stod i boken. Bakom henne pågick ett ständigt mummel av skvaller, skratt och avbrott — en " +
      "social koreografi hon aldrig riktigt lärt sig stegen till. På rasterna stod hon ofta vid " +
      "fönstret i korridoren och läste. Inte för att hon inte ville ha vänner. Tvärtom. Men att " +
      "närma sig en grupp krävde en sorts lätthet som hon inte ägde. Hennes ryggsäck var för tung " +
      "av saker ingen kunde se. " +
      "En dag i november stannade Freja vid fönstret. Vad läser du, frågade hon och lutade sig " +
      "mot karmen som om det var den mest naturliga saken i världen. Yasmin visade omslaget — en " +
      "roman av Khaled Hosseini. Freja nickade och sa att hon hade läst den förra sommaren, att " +
      "den hade fått henne att gråta på tåget. De pratade i tio minuter. Det var inte mycket, men " +
      "för Yasmin var det som att någon hade öppnat ett fönster i ett rum som stått stängt för länge. " +
      "Luften strömmade in och hon märkte att hon hade hållit andan utan att veta om det. " +
      "Freja började sätta sig bredvid henne på rasterna. De pratade om böcker, ibland om annat. " +
      "Yasmin berättade inte allt — inte om mammas dubbla pass, inte om margarinskivorna, inte om " +
      "väggarna som var för tunna. Men hon berättade tillräckligt för att inte känna sig helt osynlig " +
      "längre. Och det, tänkte hon en kväll när hon satt i köket och väntade på att mamma skulle " +
      "komma hem, kanske var det viktigaste: att någon ser att man finns. Inte allt man bär. Bara " +
      "att man finns.",
    questions: [
      {
        id: "las-hog-2-q1",
        level: "tolka",
        prompt:
          "Vad menar berättaren med att Yasmins ryggsäck var \"för tung av saker ingen kunde se\"?",
        options: [
          "Att hon hade för många skolböcker",
          "Att hon bar på osynliga bördor som ekonomisk utsatthet och ensamhet",
          "Att hon hade dålig rygg",
          "Att hon gömde saker i sin väska",
        ],
        correct: 1,
        explanation:
          "Metaforen om den tunga ryggsäcken syftar på Yasmins osynliga bördor: fattigdom, ensamhet " +
          "och ansvar. Det är saker som inte syns utanpå men som påverkar hennes vardag.",
      },
      {
        id: "las-hog-2-q2",
        level: "tolka",
        prompt:
          "Varför berättar Yasmin inte allt för Freja — inte om margarinskivorna eller mammas jobb?",
        options: [
          "Hon vill inte att Freja ska tycka synd om henne eller definieras av sin ekonomiska situation",
          "Hon har glömt att berätta",
          "Hon tycker inte det är intressant",
          "Freja har redan sagt att hon inte vill höra om sådant",
        ],
        correct: 0,
        explanation:
          "Yasmin väljer medvetet vad hon delar. Det handlar om att hon vill mötas som person, inte " +
          "som ett socialt problem. Att berätta 'tillräckligt' innebär att hon styr berättelsen om sig själv.",
      },
      {
        id: "las-hog-2-q3",
        level: "reflektera",
        prompt:
          "Texten slutar med tanken att det viktigaste är \"att någon ser att man finns\". Vilken syn på gemenskap uttrycker det?",
        options: [
          "Att man måste ha många vänner för att må bra",
          "Att bli sedd och erkänd som människa är ett grundläggande behov, även utan att dela allt",
          "Att det är bäst att vara ensam",
          "Att vänskap handlar om att berätta alla sina hemligheter",
        ],
        correct: 1,
        explanation:
          "Textens avslutande reflektion pekar på att gemenskap inte kräver total öppenhet — det " +
          "räcker att bli sedd. Det uttrycker ett existentiellt behov av tillhörighet.",
      },
      {
        id: "las-hog-2-q4",
        level: "hitta",
        prompt: "Vilken bok läste Yasmin när Freja stannade vid fönstret?",
        options: [
          "En roman av Astrid Lindgren",
          "En roman av Khaled Hosseini",
          "En diktsamling av Karin Boye",
          "En deckare av Stieg Larsson",
        ],
        correct: 1,
        explanation:
          "Texten anger uttryckligen att Yasmin visade omslaget på en roman av Khaled Hosseini. " +
          "Det är en uppgift som finns direkt i texten.",
      },
      {
        id: "las-hog-2-q5",
        level: "tolka",
        prompt:
          "Bilden av att \"någon öppnat ett fönster i ett rum som stått stängt för länge\" — vad beskriver den?",
        options: [
          "Att det var varmt i korridoren",
          "Att samtalet med Freja bröt igenom Yasmins isolering och gav henne lättnad",
          "Att skolan behövde bättre ventilation",
          "Att Yasmin öppnade ett riktigt fönster",
        ],
        correct: 1,
        explanation:
          "Bilden är en metafor för hur Freja bryter Yasmins ensamhet. Det stängda rummet " +
          "representerar hennes isolering och den friska luften symboliserar kontakt och lättnad.",
      },
    ],
  },

  // --- 8. Argumenterande/debatttext ---
  {
    id: "las-hog-3",
    ageGroup: "hogstadiet",
    title: "Skärmen som stängde ute världen",
    passage:
      "Vi lever i en tid där den genomsnittliga tonåringen tillbringar mellan sex och åtta timmar " +
      "om dagen framför en skärm utanför skoltid. Sociala medier, strömningsplattformar och " +
      "mobilspel tävlar alla om vår uppmärksamhet, och de vinner. Frågan är vad vi förlorar. " +
      "Kritikerna menar att skärmtiden hotar ungas psykiska hälsa. Forskning från Karolinska " +
      "Institutet visar att ungdomar som använder sociala medier mer än tre timmar per dag löper " +
      "ökad risk för ångest och sömnstörningar. Jean Twenge, amerikansk psykolog, har i sin " +
      "forskning kopplat ökningen av smartphoneanvändning till stigande nivåer av depression bland " +
      "tonåringar sedan 2012. Sambanden är tydliga, även om orsakssambanden fortfarande debatteras. " +
      "Men bilden är inte entydig. Skärmen erbjuder också möjligheter som tidigare generationer " +
      "saknade. Ungdomar med nischade intressen — vare sig det gäller astrofysik, poesi eller " +
      "hantverkssmide — kan hitta gemenskaper på nätet som aldrig hade existerat i deras närmiljö. " +
      "HBTQ-ungdomar i mindre orter vittnar om att digitala rum var de enda platser där de kunde " +
      "vara sig själva innan de vågade vara öppna i den fysiska världen. Att avfärda all skärmtid " +
      "som skadlig är att blunda för denna verklighet. " +
      "Problemet är inte tekniken i sig utan vår relation till den. Algoritmerna på sociala medier " +
      "är konstruerade för att maximera engagemang, inte välmående. De matar oss med innehåll som " +
      "väcker starka känslor — upprördhet, avund, rädsla — eftersom det håller oss kvar längre. " +
      "En trettonåring som scrollar genom ett flöde av retuscherade bilder och iscenesatta liv " +
      "har sällan verktygen att genomskåda mekanismen. Resultatet blir en känsla av otillräcklighet " +
      "som smyger sig in utan att man ens märker det. " +
      "Lösningen ligger inte i totalförbud. Att förbjuda skärmar vore som att förbjuda böcker för " +
      "att en del av dem innehåller desinformation. I stället behöver vi digital bildning — en " +
      "undervisning som ger unga redskapen att förstå hur algoritmer fungerar, att kritiskt " +
      "granska det de ser och att medvetet välja hur de spenderar sin tid. Skolan har en nyckelroll " +
      "här. Dagens mediekunskap stannar ofta vid källkritik, men borde även omfatta algoritmförståelse, " +
      "uppmärksamhetsekonomi och personlig digital hälsa. " +
      "Vi kan inte vrida tillbaka klockan. Den digitala världen är här för att stanna och nästa " +
      "generation kommer att leva ännu mer uppkopplat än vi gör. Men vi kan bestämma oss för att " +
      "inte lämna ungdomar ensamma med teknik som är designad att utnyttja deras svagheter. " +
      "Det handlar inte om att vara teknikfientlig. Det handlar om att vara mänsklig.",
    questions: [
      {
        id: "las-hog-3-q1",
        level: "tolka",
        prompt:
          "Författaren jämför skärmförbud med att \"förbjuda böcker för att en del innehåller desinformation\". Vad vill hen visa med den jämförelsen?",
        options: [
          "Att böcker är farliga",
          "Att totalförbud är en oproportionerlig åtgärd som kastar bort det goda tillsammans med det dåliga",
          "Att skärmar och böcker är exakt samma sak",
          "Att desinformation inte är ett problem",
        ],
        correct: 1,
        explanation:
          "Jämförelsen är en analogi som syftar till att visa att ett totalförbud inte adresserar " +
          "det verkliga problemet. Precis som böcker har både bra och dåligt innehåll, har skärmar " +
          "både positiva och negativa sidor.",
      },
      {
        id: "las-hog-3-q2",
        level: "reflektera",
        prompt:
          "Texten nämner att HBTQ-ungdomar i mindre orter hittar trygghet i digitala rum. Hur förhåller sig detta argument till textens huvudtes?",
        options: [
          "Det motsäger hela texten",
          "Det är irrelevant för ämnet",
          "Det nyanserar argumentationen genom att visa att skärmtid inte bara är negativt",
          "Det visar att alla ungdomar mår bra av sociala medier",
        ],
        correct: 2,
        explanation:
          "Exemplet fungerar som ett motargument som författaren själv lyfter fram. Det nyanserar " +
          "diskussionen och stärker trovärdigheten genom att visa att frågan inte är svartvit.",
      },
      {
        id: "las-hog-3-q3",
        level: "hitta",
        prompt:
          "Vilken lösning föreslår författaren i stället för totalförbud?",
        options: [
          "Att ungdomar slutar använda internet",
          "Att föräldrar kontrollerar allt barnen gör",
          "Digital bildning i skolan — algoritmförståelse, mediekritik och digital hälsa",
          "Att sociala medier stängs ner",
        ],
        correct: 2,
        explanation:
          "Författaren argumenterar explicit för digital bildning som inkluderar algoritmförståelse, " +
          "uppmärksamhetsekonomi och personlig digital hälsa. Lösningen finns tydligt i texten.",
      },
      {
        id: "las-hog-3-q4",
        level: "tolka",
        prompt:
          "Vad menar texten med att algoritmerna \"maximerar engagemang, inte välmående\"?",
        options: [
          "Att algoritmerna är designade för att göra användarna lyckliga",
          "Att algoritmerna prioriterar att hålla kvar användaren på plattformen, oavsett hur det påverkar dem",
          "Att engagemang och välmående alltid är samma sak",
          "Att algoritmerna inte fungerar alls",
        ],
        correct: 1,
        explanation:
          "Texten förklarar att algoritmerna är konstruerade för att maximera den tid användaren " +
          "spenderar på plattformen genom att väcka starka känslor. Det är en affärsmodell, inte " +
          "en omsorg om användarens mående.",
      },
    ],
  },

  // --- 9. Faktabaserad/populärvetenskap ---
  {
    id: "las-hog-4",
    ageGroup: "hogstadiet",
    title: "Djupt under isen",
    passage:
      "Under Antarktis istäcke, dolt av kilometertjocka lager av frusen årtusenden, gömmer sig " +
      "en värld som forskarna länge trodde var omöjlig. Subglaciala sjöar — vattendrag som " +
      "existerar i flytande form trots att de omges av is — har de senaste decennierna förändrat " +
      "vår bild av livet på jorden och öppnat dörren till en av de mest fascinerande frågorna i " +
      "modern vetenskap: kan liv finnas på andra planeter? " +
      "Den mest kända av dessa sjöar är Vostoksjön, som ligger under nästan fyra kilometer is i " +
      "östra Antarktis. Den är ungefär lika stor som Vänern och har varit avskuren från resten " +
      "av världen i uppskattningsvis femton miljoner år. Trots den totala avsaknaden av solljus " +
      "och det enorma trycket från istäcket ovan har forskare hittat spår av DNA från tusentals " +
      "olika organismer i prover från sjöns iskanal. Några av dessa organismer tycks vara " +
      "extremofiler — livsformer som trivs under förhållanden som skulle döda de flesta andra. " +
      "Hur kan liv överleva under sådana omständigheter? En nyckel är geotermisk värme. Jordens " +
      "inre producerar ständigt värme genom radioaktivt sönderfall, och denna värme sipprar uppåt " +
      "genom berggrunden. Vid sjöns botten kan temperaturen vara strax ovanför fryspunkten, " +
      "tillräckligt för att hålla vattnet flytande. Dessutom kan kemiska processer i berggrunden " +
      "frigöra näringsämnen som enkla organismer kan utnyttja som energikälla, helt utan solljus. " +
      "Det kallas kemolitotrofi — ett sätt att leva som utmanar vår vardagliga föreställning om " +
      "vad liv behöver. " +
      "Upptäckten har direkta kopplingar till rymdforskningen. Jupiters måne Europa och Saturnus " +
      "måne Enceladus har båda underjordiska hav av flytande vatten under istäcken. Om liv kan " +
      "uppstå och bestå under Antarktis is, utan solljus och isolerat från atmosfären, då är det " +
      "inte längre orimligt att tänka sig att liknande ekosystem kan finnas på dessa himlakroppar. " +
      "NASA:s kommande Europa Clipper-uppdrag, planerat att nå Jupiter-systemet under 2030-talet, " +
      "ska bland annat undersöka sammansättningen av det vatten som sprutar ut genom sprickor i " +
      "Europas yta. " +
      "Men forskningen under Antarktis is är också en påminnelse om ödmjukhet. Varje gång vi " +
      "tror att vi har kartlagt livets gränser visar naturen att den har fler svar än vi har " +
      "frågor. De subglaciala sjöarna lär oss att liv är segare, mer uppfinningsrikt och mer " +
      "överraskande än vi någonsin hade föreställt oss. Och de påminner oss om att den mest " +
      "främmande världen vi känner till kanske inte ligger bland stjärnorna utan under våra egna " +
      "fötter.",
    questions: [
      {
        id: "las-hog-4-q1",
        level: "hitta",
        prompt: "Hur djupt under isen ligger Vostoksjön?",
        options: [
          "Under ungefär en kilometer is",
          "Under nästan fyra kilometer is",
          "Under tio kilometer is",
          "Direkt under ytan",
        ],
        correct: 1,
        explanation:
          "Texten anger att Vostoksjön ligger under nästan fyra kilometer is i östra Antarktis. " +
          "Det är en faktauppgift som finns direkt i texten.",
      },
      {
        id: "las-hog-4-q2",
        level: "tolka",
        prompt: "Vad innebär begreppet \"kemolitotrofi\" enligt texten?",
        options: [
          "Att organismer lever av solljus under isen",
          "Att organismer utvinner energi från kemiska processer i berggrunden, utan solljus",
          "Att organismer äter is för att överleva",
          "Att organismer odlas i laboratorium",
        ],
        correct: 1,
        explanation:
          "Texten förklarar kemolitotrofi som ett sätt att leva där organismer använder kemiska " +
          "processer i berggrunden som energikälla, helt utan solljus. Det utmanar den vanliga " +
          "bilden av att liv kräver solenergi.",
      },
      {
        id: "las-hog-4-q3",
        level: "tolka",
        prompt:
          "Varför kopplar texten samman de subglaciala sjöarna med rymdforskning?",
        options: [
          "Forskarna vill flytta sjöarna till rymden",
          "Om liv kan finnas under Antarktis is, stärker det möjligheten att liknande liv kan finnas på istäckta månar i solsystemet",
          "NASA har byggt en forskningsstation vid Vostoksjön",
          "Rymdforskning och polarforskning har samma budget",
        ],
        correct: 1,
        explanation:
          "Textens resonemang är analogiskt: om liv klarar extrema förhållanden under jordens is, " +
          "kan liknande ekosystem finnas under isen på Europa eller Enceladus. Det gör Antarktis " +
          "till ett testfall för astrobiologi.",
      },
      {
        id: "las-hog-4-q4",
        level: "reflektera",
        prompt:
          "Texten avslutas med att \"den mest främmande världen kanske inte ligger bland stjärnorna utan under våra egna fötter\". Vad vill författaren säga med det?",
        options: [
          "Att rymdforskning är onödig",
          "Att det fortfarande finns okända och häpnadsväckande miljöer på vår egen planet",
          "Att vi borde sluta utforska rymden",
          "Att Antarktis borde bli ett turistmål",
        ],
        correct: 1,
        explanation:
          "Avslutningen är en retorisk poäng om att jorden rymmer mer okänt än vi tror. Författaren " +
          "vill förmedla ödmjukhet inför naturens komplexitet och visa att upptäckarglädje inte " +
          "bara hör rymden till.",
      },
      {
        id: "las-hog-4-q5",
        level: "hitta",
        prompt: "Vilken storlek jämförs Vostoksjön med?",
        options: [
          "Mälaren",
          "Vänern",
          "Siljan",
          "Hjälmaren",
        ],
        correct: 1,
        explanation:
          "Texten anger att Vostoksjön är ungefär lika stor som Vänern. Det är en direkt jämförelse " +
          "som gör det lättare för svenska läsare att föreställa sig sjöns storlek.",
      },
    ],
  },

  // --- 10. Poesi/lyrisk prosa ---
  {
    id: "las-hog-5",
    ageGroup: "hogstadiet",
    title: "November",
    passage:
      "November kom utan förvarning, som den alltid gör. Den smög inte in — den föll som ett " +
      "tungt tyg över staden, drog för gardinerna och släckte ljuset. Träden stod nakna längs " +
      "alleerna, deras grenar som sprickiga händer sträckta mot en himmel som inte svarade. " +
      "Regnet hade ingen brådska. Det föll lodrätt och stilla, timme efter timme, som om det " +
      "hade bestämt sig för att aldrig sluta. " +
      "Det var i november jag lärde mig att tystnad kan vara högljudd. I lägenheten hördes " +
      "klockan på väggen, kylskåpets brummande, elementens klickande — ljud som under resten av " +
      "året försvann i vardagens brus men som nu steg fram och tog plats. Jag satt vid fönstret " +
      "och såg gatlyktorna tändas, en efter en, som om någon försökte räkna alla de dagar som " +
      "hade gått sedan sommaren. Ljuset var orange och svagt och nådde inte ända ner till trottoaren. " +
      "Det dröjde sig kvar i luften, hängde i dropparna, gav natten ett skimmer av gammal koppar. " +
      "Jag tänkte på alla människor som gick under de där lyktorna. De med snabba steg och hörlurar, " +
      "de som inte lyfte blicken. De med långsamma steg och tunga axlar, de som såg ut att bära " +
      "samma väder inuti sig som det var utanför. Och de som stannade, bara för en sekund, och " +
      "tittade upp mot himlen som om de väntade på något — kanske ljus, kanske svar, kanske bara " +
      "att novemberregnet skulle sluta falla. " +
      "Min farmor brukade säga att november är årets ärligaste månad. Ingen utsmyckning, ingen " +
      "glitter, inga löften. Bara det som är. Våren lovar och sommaren uppfyller, sa hon, men " +
      "november ber om ingenting och ger ingenting tillbaka. Och det finns en slags frihet i det. " +
      "När allt det vackra är borta och det enda som återstår är det nakna, det avskalade, det " +
      "grå — då finns det ingenting att leva upp till. Man kan bara vara. " +
      "Kanske hade hon rätt. Kanske finns det tröst i årets mörkaste rum, en slags vila i att " +
      "slippa förväntan. Jag satt kvar vid fönstret tills ljuset utanför blev för svagt för att " +
      "se igenom. Regnet fortsatte. Klockan tickade. Och jag märkte att jag inte kände mig ledsen, " +
      "bara stilla — som om november hade lagt handen på min axel och viskat att det var okej " +
      "att inte vara glad. Att det räcker att vara. " +
      "Jag släckte lampan och lät mörkret komma in. Det var inte otäckt. Det var som att vattnet " +
      "i en sjö blir helt stilla en sen kväll — ingenting rör sig, ingenting kräver uppmärksamhet, " +
      "och i den tystnaden kan man höra sitt eget hjärta slå. Jag andades in novembernatten och " +
      "kände att det fanns ett rum inuti mig som liknade den här månaden: avskalat, stilla och " +
      "alldeles tillräckligt.",
    questions: [
      {
        id: "las-hog-5-q1",
        level: "tolka",
        prompt:
          "Texten beskriver trädens grenar som \"sprickiga händer sträckta mot en himmel som inte svarade\". Vilken stämning skapar den bilden?",
        options: [
          "Glädje och förväntan",
          "En känsla av övergivenhet och stum vädjan",
          "Spänning och äventyr",
          "Romantik och kärlek",
        ],
        correct: 1,
        explanation:
          "Personifikationen — grenar som händer, en himmel som inte svarar — skapar en bild av " +
          "tyst bön utan gensvar. Det förstärker novembers känsla av tomhet och stilla sorg.",
      },
      {
        id: "las-hog-5-q2",
        level: "tolka",
        prompt:
          "Vad menar farmor med att november är \"årets ärligaste månad\"?",
        options: [
          "Att vädret alltid är exakt som prognosen säger",
          "Att november saknar utsmyckning och förväntningar — den visar verkligheten som den är",
          "Att alla talar sanning i november",
          "Att det är den bästa månaden att göra affärer",
        ],
        correct: 1,
        explanation:
          "Farmors utsaga handlar om att november inte förskönar tillvaron. Utan lövverk, blommor " +
          "eller sommarljus återstår bara det avskalade — och i det finns en ärlighet utan förställning.",
      },
      {
        id: "las-hog-5-q3",
        level: "reflektera",
        prompt:
          "Berättaren säger att november \"viskade att det var okej att inte vara glad\". Vad säger det om textens syn på mörker och melankoli?",
        options: [
          "Att man alltid ska vara ledsen i november",
          "Att melankoli och stillhet kan vara vilsamma tillstånd, inte bara negativa",
          "Att mörker är farligt och bör undvikas",
          "Att man inte ska bry sig om sina känslor",
        ],
        correct: 1,
        explanation:
          "Texten omvärderar melankolin — den framställs inte som något att fly ifrån utan som " +
          "ett tillstånd av vila och acceptans. Det är textens centrala budskap.",
      },
      {
        id: "las-hog-5-q4",
        level: "hitta",
        prompt:
          "Vilka vardagliga ljud beskrivs som extra tydliga i novembertystnaden?",
        options: [
          "Bilmotorer, hundskall och barnlek",
          "Klockan, kylskåpet och elementen",
          "Musik, TV och samtal",
          "Vinden, åskan och haglet",
        ],
        correct: 1,
        explanation:
          "Texten anger uttryckligen att klockan, kylskåpets brummande och elementens klickande " +
          "blev framträdande ljud som annars försvann i vardagens brus.",
      },
      {
        id: "las-hog-5-q5",
        level: "tolka",
        prompt:
          "Vilken stilfigur dominerar texten och vilken effekt har den?",
        options: [
          "Upprepning — den skapar rytm och stegrande känsla",
          "Personifikation — november framställs som en levande varelse med vilja och röst",
          "Ironi — texten menar egentligen motsatsen av det som sägs",
          "Hyperbol — texten överdriver medvetet",
        ],
        correct: 1,
        explanation:
          "November faller som ett tyg, lägger handen på berättarens axel och viskar. Genomgående " +
          "personifikation gör november till en närmast mänsklig figur, vilket skapar intimitet " +
          "och poetisk kraft.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 6. Social realism — "Korridoren"
  // -----------------------------------------------------------------------
  {
    id: "las-hog-6",
    ageGroup: "hogstadiet",
    title: "Korridoren",
    passage:
      "Klockan 07:52 varje morgon passerade Freja korridoren utanför sjuans skåp. Det var åtta minuter " +
      "innan lektionen började och korridoren var som tätast. Röster ekade mot kaklet, dörrar slog " +
      "och luften luktade av tvål och tuggummi. " +
      "Freja gick alltid fort med blicken rakt fram. Det hade blivit en strategi — om hon inte " +
      "mötte någons ögon behövde hon inte svara på frågor eller le tillbaka. Det hade fungerat sedan " +
      "hon bytte skola i höstas. " +
      "Ingen mobbade henne. Ingen var elak. Det var nästan värre så, tänkte hon ibland. Om någon hade " +
      "varit direkt otrevlig hade hon åtminstone haft något att peka på, något att berätta för en vuxen. " +
      "Nu var det bara tystnad. Inte ens hennes bänkgranne Tilda pratade med henne utanför lektionerna. " +
      "En dag halkade Freja på en vattenplump utanför NO-salen. Böckerna flög ur händerna och " +
      "pennskrinnet öppnade sig med ett brak. Pennor rullade åt alla håll. " +
      "Freja satt kvar på golvet. Hon kände tårarna komma men bet ihop. " +
      "Då satte sig någon ner bredvid henne. Tilda. Hon sa ingenting, bara började plocka upp pennor. " +
      "En annan kille som Freja inte kände namn på hjälpte också till. " +
      "\"Tack,\" sa Freja med tjock röst. " +
      "Tilda log lite. \"Vill du äta lunch med mig och Ronja idag?\" " +
      "Freja nickade. Det var inte en stor gest. Det var ingen dramatisk vändpunkt ur en film. " +
      "Men när hon gick in i NO-salen kände hon något hon inte känt på länge: att korridoren " +
      "kanske inte var lika lång som hon trott.",
    questions: [
      {
        id: "las-hog-6-q1",
        level: "hitta",
        prompt: "Vilken strategi använde Freja i korridoren?",
        options: [
          "Hon pratade med så många som möjligt",
          "Hon gick fort och undvek ögonkontakt",
          "Hon kom alltid sent för att undvika folk",
          "Hon hade alltid hörlurar i öronen",
        ],
        correct: 1,
        explanation:
          "Texten beskriver att Freja gick fort med blicken rakt fram och undvek att möta ögon. Det var hennes medvetna strategi.",
      },
      {
        id: "las-hog-6-q2",
        level: "tolka",
        prompt: "Vad menar Freja med att det var \"nästan värre\" att ingen var direkt otrevlig?",
        options: [
          "Hon ville bli mobbad",
          "Att bli ignorerad är svårt att sätta ord på och svårt att söka hjälp för",
          "Hon tyckte att elaka kommentarer var roliga",
          "Hon ville ha uppmärksamhet till varje pris",
        ],
        correct: 1,
        explanation:
          "Freja menar att utanförskap utan synlig mobbning är svårt att beskriva för vuxna. Det finns inget konkret att peka på, men ensamheten gör ändå ont.",
      },
      {
        id: "las-hog-6-q3",
        level: "tolka",
        prompt: "Varför är det betydelsefullt att Tilda inte sa något utan bara satte sig ner och hjälpte till?",
        options: [
          "Tilda kunde inte prata",
          "Handlingen visade omsorg utan att göra situationen pinsam — ibland säger gester mer än ord",
          "Tilda var blyg",
          "Det var en skolregel att man inte fick prata i korridoren",
        ],
        correct: 1,
        explanation:
          "Tilda visade medkänsla genom handling istället för ord. Det lät Freja behålla sin värdighet och skapade kontakt utan att det blev dramatiskt.",
      },
      {
        id: "las-hog-6-q4",
        level: "reflektera",
        prompt: "Vad menar textens sista mening om att \"korridoren kanske inte var lika lång som hon trott\"?",
        options: [
          "Korridoren hade blivit fysiskt kortare",
          "Freja gick snabbare",
          "Med en möjlig vänskap kändes den dagliga prövningen mindre överväldigande",
          "Hon hade hittat en genväg",
        ],
        correct: 2,
        explanation:
          "Korridoren är en metafor för Frejas ensamhet. Tildas gest gav hopp om tillhörighet, vilket fick den dagliga prövningen att kännas mer hanterbar.",
      },
      {
        id: "las-hog-6-q5",
        level: "reflektera",
        prompt: "Texten tar upp osynligt utanförskap. Varför kan det vara svårare att upptäcka än mobbing?",
        options: [
          "Det syns inte för att det inte finns en tydlig förövare eller händelse att reagera på",
          "Det drabbar inte lika många",
          "Lärare bryr sig inte om elever",
          "Utanförskap är inte lika allvarligt som mobbning",
        ],
        correct: 0,
        explanation:
          "Osynligt utanförskap saknar dramatiska händelser. Ingen gör något aktivt fel, men den drabbade lider ändå. Därför är det svårt för omgivningen att upptäcka och agera.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 7. Argumenterande — "Skärmfri skola?"
  // -----------------------------------------------------------------------
  {
    id: "las-hog-7",
    ageGroup: "hogstadiet",
    title: "Skärmfri skola?",
    passage:
      "Elever i årskurs nio debatterar: ska mobiltelefoner förbjudas helt under skoltid? " +
      "Argumenten haglar i klassrummet. " +
      "\"Forskning visar att bara vetskapen om att telefonen finns i fickan försämrar koncentrationen,\" " +
      "säger Li. \"Vi behöver inte titta på den. Den stjäl uppmärksamhet ändå.\" " +
      "\"Men vi lever i en digital värld,\" invänder Oscar. \"Att förbjuda teknik lär oss inte att hantera den. " +
      "Det är som att förbjuda socker istället för att lära sig äta balanserat.\" " +
      "Läraren ber dem granska varandras argument. Li refererar till en studie från University of Texas " +
      "där elever presterade sämre på minnestester när telefonen låg synlig på bänken jämfört med " +
      "när den var i ett annat rum. Oscar medger att studien är intressant men påpekar att den mätte " +
      "korttidsminne i labbmiljö, inte verklig skolprestation över tid. " +
      "Alma tar en mellanposition. \"Vad om vi har mobilen i skåpet under lektionerna men får använda den " +
      "på rasterna? Då får hjärnan vila från distraktioner när det behövs men vi lär oss också " +
      "att själva reglera vår användning.\" " +
      "Li nickar motvilligt. \"Det är en kompromiss jag kan acceptera. Men vem kontrollerar att alla " +
      "verkligen lämnar in sin telefon?\" " +
      "Oscar tillägger: \"Och vad händer med elever som har medicinska appar eller behöver telefonen " +
      "av tillgänglighetsskäl? Ett totalt förbud exkluderar dem.\" " +
      "Debatten slutar utan ett definitivt svar, men klassen har övat något som kanske är viktigare " +
      "än slutsatsen: förmågan att lyssna på motargument, ifrågasätta sina egna ståndpunkter " +
      "och söka kompromisser.",
    questions: [
      {
        id: "las-hog-7-q1",
        level: "hitta",
        prompt: "Vilken studie refererar Li till?",
        options: [
          "En svensk studie om social media",
          "En studie från University of Texas om minnestester och telefoner",
          "En EU-rapport om skolresultat",
          "En enkät bland svenska elever",
        ],
        correct: 1,
        explanation:
          "Li refererar till en studie från University of Texas där elever presterade sämre på minnestester när telefonen var synlig.",
      },
      {
        id: "las-hog-7-q2",
        level: "tolka",
        prompt: "Vad menar Oscar med jämförelsen mellan att förbjuda socker och att förbjuda telefoner?",
        options: [
          "Att socker och telefoner är lika farliga",
          "Att förbud inte lär oss självkontroll — det är bättre att lära sig hantera saker ansvarsfullt",
          "Att skolan borde förbjuda socker också",
          "Att elever äter för mycket socker",
        ],
        correct: 1,
        explanation:
          "Oscars analogi handlar om att förbud inte bygger långsiktig kompetens. Precis som med socker är det bättre att lära sig balansera sitt bruk.",
      },
      {
        id: "las-hog-7-q3",
        level: "tolka",
        prompt: "Varför är Oscars kritik av studien relevant?",
        options: [
          "Den visar att forskning alltid har fel",
          "Den påminner om att forskningsresultat från labbmiljö inte automatiskt gäller i verkliga klassrum",
          "Den bevisar att telefoner inte påverkar koncentrationen",
          "Den visar att Oscar inte gillar forskning",
        ],
        correct: 1,
        explanation:
          "Oscar poängterar att studien mätte korttidsminne i labb, inte långsiktig skolprestation. Det är en viktig skillnad som påverkar hur man kan använda resultaten.",
      },
      {
        id: "las-hog-7-q4",
        level: "reflektera",
        prompt: "Texten slutar med att debatten inte gav ett definitivt svar. Varför framställs det som positivt?",
        options: [
          "Läraren ville inte bestämma",
          "Eleverna gav upp",
          "Förmågan att lyssna på motargument och söka kompromisser värderas högre än att \"vinna\" debatten",
          "Frågan var inte viktig",
        ],
        correct: 2,
        explanation:
          "Texten lyfter fram att processen — att lyssna, ifrågasätta och kompromissa — är viktigare än att nå en slutgiltig sanning. Det är kärnan i demokratiskt samtal.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 8. Populärvetenskap — "Havets tysta katastrof"
  // -----------------------------------------------------------------------
  {
    id: "las-hog-8",
    ageGroup: "hogstadiet",
    title: "Havets tysta katastrof",
    passage:
      "Varje minut hamnar en lastbilsflak med plast i världens hav. Men det mest alarmerande är inte " +
      "de synliga plastpåsarna eller petflaskorna. Det är mikroplasten — fragment mindre än fem millimeter " +
      "som är nästan omöjliga att rensa bort. " +
      "Mikroplast bildas när större plastföremål bryts ner av solljus, vågor och vind. Men den kommer " +
      "också från oväntade källor: syntetiska kläder som släpper fibrer vid tvätt, bildäck som nöts mot " +
      "asfalten och kosmetika som innehåller plastkulor. En enda tvättmaskinscykel kan frigöra " +
      "hundratusentals fibrer så små att reningsverken inte fångar dem. " +
      "Konsekvenserna är alarmerande. Djurplankton, havets minsta organismer, förväxlar mikroplast " +
      "med mat. Plankton äts av småfiskar, småfiskar av större fiskar, och så vidare uppåt i " +
      "näringskedjan. Forskare vid Göteborgs universitet har hittat mikroplast i svensk torsk, " +
      "räkor och musslor. Det innebär att vi sannolikt äter plast utan att veta om det. " +
      "De kemiska aspekterna gör situationen ännu värre. Plastpartiklar binder till sig " +
      "miljögifter som PCB och DDT. När en fisk äter mikroplast med bundna gifter koncentreras " +
      "dessa ämnen i fiskens fettvävnad. Ju högre upp i näringskedjan, desto högre koncentration — " +
      "en process som kallas bioackumulation. " +
      "Vad kan göras? Forskare arbetar med biologisk nedbrytning genom enzymer som kan bryta ner " +
      "plast. Tvättfilter för syntetiska kläder testas. Och EU har förbjudit tillsatt mikroplast i " +
      "kosmetika sedan 2023. Men den plast som redan finns i haven kan ta hundratals år att försvinna. " +
      "Problemet visar hur sammanlänkade ekosystemen är. En syntetisk fleecetröja i Borlänge kan, " +
      "via en tvättmaskin och ett reningsverk, bidra till att en torsk i Nordsjön bär på miljögifter " +
      "som till slut hamnar på en middag i Malmö.",
    questions: [
      {
        id: "las-hog-8-q1",
        level: "hitta",
        prompt: "Vilka tre oväntade källor till mikroplast nämns i texten?",
        options: [
          "Plastpåsar, petflaskor och förpackningar",
          "Syntetiska kläder, bildäck och kosmetika",
          "Fiskebåtar, oljeplattformar och kryssningsfartyg",
          "Leksaker, sugrör och plastbestick",
        ],
        correct: 1,
        explanation:
          "Texten nämner tre oväntade källor: syntetiska kläder som släpper fibrer, bildäck som nöts och kosmetika med plastkulor.",
      },
      {
        id: "las-hog-8-q2",
        level: "tolka",
        prompt: "Vad innebär bioackumulation i detta sammanhang?",
        options: [
          "Att plast sjunker till havsbotten",
          "Att giftkoncentrationen ökar ju högre upp i näringskedjan organismen befinner sig",
          "Att biologiska organismer bryter ner plast naturligt",
          "Att plast sprids med havsströmmar",
        ],
        correct: 1,
        explanation:
          "Bioackumulation innebär att gifter anrikas uppåt i näringskedjan. Varje steg koncentrerar gifterna ytterligare, från plankton till stor fisk till människa.",
      },
      {
        id: "las-hog-8-q3",
        level: "tolka",
        prompt: "Varför kallar texten mikroplast för en \"tyst katastrof\"?",
        options: [
          "Plast gör inget ljud",
          "Mikroplast är osynlig för blotta ögat och svår att upptäcka, men orsakar storskalig skada",
          "Ingen forskar på ämnet",
          "Katastrofen påverkar bara hav, inte land",
        ],
        correct: 1,
        explanation:
          "Ordet \"tyst\" syftar på att mikroplast inte syns och att skadorna sker gradvis. Det är en katastrof som pågår utan att de flesta märker den.",
      },
      {
        id: "las-hog-8-q4",
        level: "reflektera",
        prompt: "Texten beskriver kedjan från fleecetröja i Borlänge till middag i Malmö. Varför inkluderas det exemplet?",
        options: [
          "För att visa att Borlänge och Malmö har dålig vattenrening",
          "För att göra det abstrakta problemet konkret och visa hur individens vardag hänger ihop med globala ekosystem",
          "För att kritisera svenska klädesvanor",
          "För att visa att det bara är Sverige som har problemet",
        ],
        correct: 1,
        explanation:
          "Exemplet gör problemet gripbart genom att visa en konkret kedja från vardagshandling till global konsekvens. Det visar att individuella val påverkar hela ekosystem.",
      },
      {
        id: "las-hog-8-q5",
        level: "reflektera",
        prompt: "Vilken begränsning hos de tekniska lösningarna framgår av texten?",
        options: [
          "De är för dyra",
          "De fungerar bara i laboratorier",
          "De kan minska ny plast men inte hantera de enorma mängder som redan finns i haven",
          "Politikerna vägrar genomföra dem",
        ],
        correct: 2,
        explanation:
          "Texten nämner att den plast som redan finns kan ta hundratals år att försvinna. Tekniska lösningar och förbud kan minska framtida utsläpp men löser inte det befintliga problemet.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 9. Lyrik — "Innanför orden"
  // -----------------------------------------------------------------------
  {
    id: "las-hog-9",
    ageGroup: "hogstadiet",
    title: "Innanför orden",
    passage:
      "Det finns ett utrymme innanför orden " +
      "där meningen bor innan den formulerats. " +
      "Där är ljuset annorlunda — " +
      "inte skarpare, men ärligare. " +
      "Som morgon bakom gardinerna " +
      "innan rummet bestämt sig för att vakna.\n\n" +
      "Jag letade länge efter det rätta ordet " +
      "för vad jag kände den sommaren " +
      "när du flyttade till en annan stad. " +
      "Saknad var för stort. " +
      "Sorg var för tungt. " +
      "Tomrum passade nästan " +
      "men det förutsätter att något har fyllts.\n\n" +
      "Det jag kände var snarare en tystnad " +
      "i det rum där din röst brukade vara. " +
      "Inte frånvaro av ljud — " +
      "utan närvaro av det som inte sägs. " +
      "Som en paus i musiken " +
      "som betyder mer än tonerna.\n\n" +
      "Ibland tror jag att vi uppfann språket " +
      "inte för att fånga det vi vet " +
      "utan för att ringa in det vi inte förstår. " +
      "Orden är staketet runt mysteriet — " +
      "inte mysteriet självt.\n\n" +
      "Och kanske är det därför " +
      "de viktigaste samtalen " +
      "pågår i mellanrummen, " +
      "i det som händer mellan meningarna, " +
      "i blicken som stannar en sekund för länge, " +
      "i handen som nästan rör vid din.",
    questions: [
      {
        id: "las-hog-9-q1",
        level: "hitta",
        prompt: "Vad hände \"den sommaren\" som dikten refererar till?",
        options: [
          "Berättaren reste utomlands",
          "Någon viktig flyttade till en annan stad",
          "Berättaren slutade skriva",
          "Det var en ovanligt varm sommar",
        ],
        correct: 1,
        explanation:
          "Dikten nämner tydligt \"den sommaren när du flyttade till en annan stad\" som den konkreta händelse som utlöser reflektionen.",
      },
      {
        id: "las-hog-9-q2",
        level: "tolka",
        prompt: "Varför avvisas orden \"saknad\", \"sorg\" och \"tomrum\" som beskrivningar av känslan?",
        options: [
          "Berättaren tycker inte om de orden",
          "Orden är för stora, tunga eller förutsätter erfarenheter som inte stämmer — känslan kräver mer precision",
          "Berättaren vill inte visa känslor",
          "Orden är förbjudna i dikter",
        ],
        correct: 1,
        explanation:
          "Dikten analyserar varje ord: saknad är \"för stort\", sorg \"för tungt\", tomrum förutsätter att något fyllts. Berättaren söker ett ord som fångar den specifika känslan exakt.",
      },
      {
        id: "las-hog-9-q3",
        level: "tolka",
        prompt: "Vad menar metaforen \"orden är staketet runt mysteriet — inte mysteriet självt\"?",
        options: [
          "Att ord är meningslösa",
          "Att språket kan avgränsa och peka mot det vi känner, men aldrig fullt ut fånga det",
          "Att staket alltid är gjorda av ord",
          "Att mysterier inte existerar",
        ],
        correct: 1,
        explanation:
          "Metaforen uttrycker att språket kan omringa och peka mot en känsla eller upplevelse, men att det alltid finns något kvar innanför som orden inte når.",
      },
      {
        id: "las-hog-9-q4",
        level: "reflektera",
        prompt: "Dikten hävdar att de viktigaste samtalen pågår \"i mellanrummen\". Håller du med om det?",
        options: [
          "Nej, bara det som sägs räknas i ett samtal",
          "Ja, men bara i dikter — inte i verkligheten",
          "Ja, kroppsspråk, pauser och blickar kan kommunicera djupare känslor än ord ensamma",
          "Nej, mellanrum i samtal är alltid pinsamma",
        ],
        correct: 2,
        explanation:
          "Dikten fångar insikten att mellanmänsklig kommunikation sker på flera plan. Blickar, tystnader och gester kan bära känslor som ord inte räcker till för att uttrycka.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 10. Historisk — "Industrialiseringens barn"
  // -----------------------------------------------------------------------
  {
    id: "las-hog-10",
    ageGroup: "hogstadiet",
    title: "Industrialiseringens barn",
    passage:
      "År 1870 var Sverige ett av Europas fattigaste länder. Hälften av befolkningen var jordbrukare " +
      "och missväxt kunde innebära svält. Under de följande femtio åren genomgick landet en förvandling " +
      "som brukar kallas det stora språnget. " +
      "Järnvägarna förändrade allt. Innan rälsen drogs fram tog en resa från Stockholm till Göteborg " +
      "flera dagar med häst och vagn. Med tåget tog det timmar. Plötsligt kunde varor fraktas snabbt " +
      "och billigt. Sågverk i Norrland kunde sälja timmer till England. Fabriker i Eskilstuna kunde " +
      "leverera verktyg till hela landet. " +
      "Men framsteget hade ett pris. Tusentals familjer lämnade landsbygden för att arbeta i fabrikerna. " +
      "De bodde trångt i nybyggda hyreskasernade arbetskvarter. Barnen arbetade ofta redan vid tio " +
      "års ålder — i tändsticksfabriker, glasbruk och textilindustri. Arbetet var farligt. " +
      "Tändsticksfabrikernas fosforånga orsakade käkbensnekros, en sjukdom där käkbenet bokstavligt " +
      "talat förstördes. " +
      "Det var inte självklart att situationen skulle förbättras. Förändringen kom underifrån. " +
      "Arbetare organiserade sig i fackföreningar trots att det länge var förbjudet. " +
      "Folkrörelserna — nykterhetsrörelsen, frikyrkorörelsen och arbetarrörelsen — byggde " +
      "studiecirklar och möteslokaler. Människor som aldrig haft en röst i samhället lärde sig " +
      "att debattera, formulera krav och organisera strejker. " +
      "År 1900 antog riksdagen den första lagen om minderårigas arbete. Barn under tolv fick inte " +
      "längre arbeta i fabriker, och arbetsdagen begränsades till sex timmar för barn under fjorton. " +
      "Lagstiftningen var ofullständig, men den markerade en princip: barndom är inte till för arbete. " +
      "Det tog ytterligare decennier innan barnarbete försvann helt. Men riktningen var satt. " +
      "De svenska välfärdsreformer vi ofta tar för givna — skolplikt, sjukvård, arbetsskydd — " +
      "växte ur en tid då ingenting av detta var givet.",
    questions: [
      {
        id: "las-hog-10-q1",
        level: "hitta",
        prompt: "Vilken sjukdom orsakades av fosforånga i tändsticksfabrikerna?",
        options: [
          "Tuberkulos",
          "Käkbensnekros",
          "Astma",
          "Kolera",
        ],
        correct: 1,
        explanation:
          "Texten nämner att tändsticksfabrikernas fosforånga orsakade käkbensnekros, en sjukdom som förstörde käkbenet.",
      },
      {
        id: "las-hog-10-q2",
        level: "hitta",
        prompt: "Vad bestämde riksdagen år 1900?",
        options: [
          "Att alla barn skulle gå i skola",
          "Att barn under tolv inte fick arbeta i fabriker",
          "Att alla fabriker skulle stängas",
          "Att Sverige skulle bli en republik",
        ],
        correct: 1,
        explanation:
          "Texten anger att riksdagen 1900 antog en lag som förbjöd barn under tolv att arbeta i fabriker.",
      },
      {
        id: "las-hog-10-q3",
        level: "tolka",
        prompt: "Varför var folkrörelsernas studiecirklar viktiga för förändringen?",
        options: [
          "De lärde människor att läsa bibeln",
          "De gav vanliga arbetare redskap att formulera krav, debattera och organisera sig politiskt",
          "De var ett sätt att underhålla sig efter jobbet",
          "De finansierade fabriker",
        ],
        correct: 1,
        explanation:
          "Studiecirklarna gav arbetare kunskaper och färdigheter att delta i samhällsdebatten. De lärde sig formulera krav och organisera kollektiv handling.",
      },
      {
        id: "las-hog-10-q4",
        level: "reflektera",
        prompt: "Texten avslutas med att välfärdsreformerna växte ur en tid då ingenting var givet. Vad vill författaren säga med det?",
        options: [
          "Att Sverige alltid har varit ett bra land att bo i",
          "Att rättigheter vi tar för givna idag inte uppstod av sig själva — de vanns genom kamp och förändring",
          "Att vi borde gå tillbaka till 1800-talet",
          "Att industrialiseringen bara var negativ",
        ],
        correct: 1,
        explanation:
          "Författaren vill att läsaren ska förstå att dagens rättigheter har en historia. Skolplikt, arbetsskydd och sjukvård var resultatet av människors kamp, inte självklarheter.",
      },
      {
        id: "las-hog-10-q5",
        level: "reflektera",
        prompt: "Hur kan man se industrialiseringen som både positiv och negativ utifrån texten?",
        options: [
          "Den var bara positiv — alla fick jobb",
          "Den var bara negativ — alla blev sjuka",
          "Den skapade ekonomiskt framsteg och sammankoppling men orsakade också farligt barnarbete, trångboddhet och exploatering",
          "Den påverkade bara Norrland",
        ],
        correct: 2,
        explanation:
          "Texten beskriver järnvägar, handel och ekonomisk tillväxt som positiva effekter, men också barnarbete, sjukdom och fattigdom. Det visar att historiska förändringar sällan är entydigt goda eller onda.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Gymnasiet
// ---------------------------------------------------------------------------

const gymnasietTexts: ReadingText[] = [
  {
    id: "las-gym-1",
    ageGroup: "gymnasiet",
    title: "Glasväggarna",
    passage:
      "Det var den sortens morgon då ljuset föll snett genom fönstret och fick dammkornen att likna " +
      "små planeter i omloppsbana. Karin stod vid diskbänken med händerna i det ljumma vattnet och " +
      "kände hur det bildade en hinna runt hennes fingrar, som en andra hud. Hon hade läst någonstans " +
      "att huden är kroppens största organ, att den väger flera kilo och att den förnyas helt vart " +
      "tjugosjunde dygn. Hon undrade om det betydde att hon bokstavligen var en annan människa nu " +
      "än den som hade stått här i köket för en månad sedan och hört Anders säga att han inte längre " +
      "visste vem hon var. Orden hade landat med en egendomlig precision, som en kirurg som hittar " +
      "exakt rätt nerv, och hon hade inte kunnat svara — inte för att hon saknade ord, utan för att " +
      "alla ord hon kunde tänka sig hade känts som approximationer av något som inte hade någon " +
      "exakt benämning.\n\n" +
      "Kaffet i kannan hade kallnat. Hon hällde det i vasken och såg den bruna vätskan blanda sig med " +
      "diskskummet till en grumlig virvel. Det var något med den rörelsen, det långsamma försvinnandet " +
      "ner i avloppet, som fick henne att tänka på hur minnen fungerar. Inte som fotografier, som folk " +
      "brukar säga, utan snarare som rinnande vatten — de formas om varje gång man tar i dem, förändras " +
      "av den som minns, tills det som återstår kanske bara är ett minne av ett minne, likt en kopia av " +
      "en kopia där originalet för länge sedan har bleknat bort. Hon försökte minnas den första kvällen " +
      "med Anders, restaurangen vid hamnen, hur lamporna hade speglats i vattnet. Men bilden var suddig " +
      "nu, överlagrad av allt som hade kommit sedan dess, och hon var inte säker på om ljusen verkligen " +
      "hade varit gula eller om det var ett tillägg hennes minne hade gjort i efterhand för att scenen " +
      "skulle stämma med hur den borde ha sett ut.\n\n" +
      "Anders hade alltid haft en förmåga att fylla rummen han befann sig i. Inte med ljud, nödvändigtvis, " +
      "utan med en sorts gravitationell närvaro som fick möblerna att verka orienterade mot honom. Han " +
      "hade en vana att ställa sig i dörröppningar snarare än att gå in i rum, som om han ville behålla " +
      "möjligheten att antingen stanna eller gå, och det hade gett honom en aura av ständig övergång " +
      "som Karin i början hade förväxlat med mystik men som hon senare förstod var en form av " +
      "otillgänglighet. När han försvann blev rummen inte tomma — de blev formlösa, som om väggarna " +
      "tappat sin funktion. Karin hade märkt att hon börjat möblera om. Inte för att det behövdes, " +
      "utan för att rummen behövde en ny logik, en ny geometri som inte pekade mot en frånvaro. " +
      "Soffan stod nu med ryggen mot fönstret istället för mot väggen, och bokhyllan hade hon " +
      "flyttat från vardagsrummet till sovrummet, där den stod som en tyst väktare vid sängens fotända.\n\n" +
      "Hon torkade händerna på kökshandduken och gick ut i hallen. Jackorna hängde på sina krokar " +
      "i en ordning som hon nu bestämde själv. Hans jacka var borta, förstås, men kroken satt kvar " +
      "som en fråga utan svar. Hon kunde ta ner den, eller hänga något nytt där. Istället lät hon " +
      "den vara — inte av sentimentalitet, tänkte hon, utan av samma skäl som man ibland låter en " +
      "mening stå oavslutad: för att det oavslutade rymmer fler möjligheter än det avslutade. " +
      "Det fanns en sorts tröst i det ofärdiga, en öppenhet som det slutgiltiga aldrig kunde erbjuda. " +
      "En stängd dörr är bara en stängd dörr, men en dörr på glänt är en berättelse som inte har " +
      "bestämt sig för sitt slut.\n\n" +
      "Utanför fönstret rörde sig grannen med sin hund längs trottoaren. Hunden stannade vid varje " +
      "lyktstolpe med den sortens andäktiga uppmärksamhet som människor sällan ägnar åt sina omgivningar. " +
      "Det var den typen av vardag som pågår oberoende av vad som händer innanför glasväggarna. Karin " +
      "tyckte om det uttrycket, glasväggar, för det beskrev exakt hur det kändes: att vara synlig men " +
      "avskild, att leva i samma värld som alla andra men bakom något genomskinligt och oöverskridligt. " +
      "Man kunde se ut och andra kunde se in, men beröringen uteblev — ljudet, värmen, den fysiska " +
      "närvaron av en annan människa filtrerades bort av det osynliga skiktet. Hon visste att det " +
      "inte skulle vara så för alltid. Huden förnyades, minnena förändrades, rummen fylldes med " +
      "ny mening. Men just nu, i den sneda morgonljusets tystnad, räckte det att stå stilla och " +
      "låta dammkornen cirkla som små planeter utan bana.",
    questions: [
      {
        id: "las-gym-1-q1",
        level: "tolka",
        prompt: "Vad symboliserar den tomma jackkroken i hallen?",
        options: [
          "En praktisk detalj som visar att Anders har flyttat",
          "Karins ilska mot Anders som lämnade henne",
          "Frånvaron efter en relation och det oavslutades potential",
          "Att Karin är oordentlig och inte städar",
        ],
        correct: 2,
        explanation:
          "Karin jämför den tomma kroken med en oavslutad mening som rymmer fler möjligheter. Kroken blir en symbol för hur frånvaro inte bara är tomhet utan även potentialitet — det obestämda tillståndet mellan förlusten och det som kan komma.",
      },
      {
        id: "las-gym-1-q2",
        level: "tolka",
        prompt: "Vilken funktion fyller metaforen om dammkorn som planeter i texten?",
        options: [
          "Den visar att Karin är intresserad av astronomi",
          "Den skapar en cirkulär struktur — texten öppnar och stänger med samma bild men med förändrad innebörd",
          "Den är en slumpmässig detalj för att skapa stämning",
          "Den illustrerar att Karin behöver städa sitt hem",
        ],
        correct: 1,
        explanation:
          "Dammkornen som planeter återkommer i slutet men med tillägget \"utan bana\", vilket speglar Karins förändrade tillstånd. I inledningen har kornen omloppsbana (ordning), i slutet saknar de bana (frihet eller vilsenhet). Det skapar en cirkulär struktur med förskjuten innebörd.",
      },
      {
        id: "las-gym-1-q3",
        level: "reflektera",
        prompt: "Texten hävdar att minnen fungerar som rinnande vatten snarare än fotografier. Stämmer detta påstående?",
        options: [
          "Sant — modern minnesforskning visar att minnen omformas varje gång de återkallas",
          "Falskt — minnen lagras exakt som de upplevdes",
        ],
        correct: 0,
        explanation:
          "Textens metafor har vetenskapligt stöd: minnesforskning visar att episodiska minnen rekonstrueras vid varje återkallande och påverkas av nuvarande sinnesstämning, nya erfarenheter och berättandet självt. Minnen är alltså dynamiska processer, inte statiska avbildningar.",
      },
      {
        id: "las-gym-1-q4",
        level: "tolka",
        prompt: "Vad innebär begreppet \"glasväggar\" i textens sammanhang?",
        options: [
          "Att Karin bor i ett modernt hus med glasfasad",
          "Att hon känner sig instängd i en relation",
          "Att hon upplever en paradox: att vara del av världen men ändå oåtkomligt separerad från den",
          "Att hon tycker om att titta på grannar genom fönstret",
        ],
        correct: 2,
        explanation:
          "Glasväggarna beskriver tillståndet att vara \"synlig men avskild\" — en existentiell paradox där man befinner sig mitt i världen men ändå är åtskild av något osynligt. Det är en bild för den isolering som kan följa efter förlust.",
      },
      {
        id: "las-gym-1-q5",
        level: "reflektera",
        prompt: "Vilken berättarteknisk effekt skapar texten genom att undvika direkt handling och i stället fokusera på Karins inre tankevärld?",
        options: [
          "Den gör texten tråkig och händelselös",
          "Den tvingar läsaren att bli medskapare — det yttre (disk, kaffe, jacka) blir symboliska lager som kräver tolkning, vilket speglar hur Karin själv bearbetar sin situation genom vardagliga föremål",
          "Den visar att författaren inte kan skriva dialoger",
          "Den är typisk för barnlitteratur",
        ],
        correct: 1,
        explanation:
          "Den medvetandeströmsliknande tekniken — där yttre detaljer blir ingångar till inre reflektion — gör läsaren till aktiv medskapare. Varje vardagsföremål (diskvattnet, kaffet, jackkroken) bär symbolisk vikt, och den yttre stillheten kontrasterar mot ett intensivt inre landskap.",
      },
    ],
  },
  {
    id: "las-gym-2",
    ageGroup: "gymnasiet",
    title: "Den tysta kulturrevolutionen",
    passage:
      "Någonstans mellan 2015 och 2025 hände något med det svenska kultursamtalet som vi fortfarande " +
      "inte riktigt har förstått. Det handlade inte om en enskild händelse utan om en gradvis förskjutning " +
      "av vad som betraktades som legitima sätt att tala, tänka och skapa. Författare som tidigare hade " +
      "fått lovord för sin förmåga att gestalta moraliskt komplicerade karaktärer blev plötsligt misstänkta " +
      "för att hysa de åsikter de beskrev. Skillnaden mellan att skildra och att förespråka kollapsade, " +
      "och med den kollapsade en av litteraturens mest grundläggande funktioner: att låta oss se världen " +
      "genom ögon som inte är våra egna. Konstnären blev sammanblandad med konstverket på ett sätt " +
      "som historiskt sett hör hemma i totalitära system, där staten granskar inte bara vad som sägs " +
      "utan vem som säger det och med vilken förmodad avsikt.\n\n" +
      "Parallellt skedde en förändring i kritikens funktion. Den estetiska bedömningen — frågan om ett " +
      "verk var väl konstruerat, stilistiskt intressant eller konstnärligt nyskapande — fick stå tillbaka " +
      "för den ideologiska granskningen. En roman bedömdes inte längre främst efter hur den berättade " +
      "utan efter vad den ansågs säga, och framför allt efter vem som sa det. Identiteten blev en " +
      "hermeneutisk nyckel: författarens bakgrund avgjorde vilka berättelser som uppfattades som " +
      "autentiska och vilka som betraktades som intrång. Litteraturkritikern som frågade om en text " +
      "var vacker eller skickligt komponerad riskerade att framstå som naiv, eller värre, som medvetet " +
      "undvikande av de verkligt viktiga frågorna — som om estetiken vore ett sätt att slippa etiken.\n\n" +
      "Det finns en stark moralisk intuition bakom denna utveckling. Historien är full av exempel på " +
      "hur privilegierade grupper har talat för, om och över andra. Kravet på representativitet och " +
      "medvetenhet om maktstrukturer är inte orimligt. Att den som själv har erfarenhet av marginalisering " +
      "bör ges plats och utrymme i kulturens rum är en rättvisefråga som förtjänar att tas på allvar. " +
      "Men det finns en skillnad mellan att bredda rummet och att begränsa det. När principen att " +
      "\"bara den som har upplevt något kan berätta om det\" drivs till sin logiska slutpunkt, upphör " +
      "empati och fantasi att vara konstnärliga dygder. Kvar blir en litteratur av vittnesmål — viktig " +
      "i sig, men inte tillräcklig som ensam genre för en hel kulturs berättande. Romanen har historiskt " +
      "fungerat som ett laboratorium för empati, en plats där läsaren övar sig i att förstå den andre. " +
      "Om författaren nekas den friheten, förlorar romanen sin särskilda kraft.\n\n" +
      "Man kan invända att pendeln alltid svänger, att varje kulturell rörelse möter sin motreaktion. " +
      "Det stämmer historiskt. Men den digitala erans särskilda dynamik — algoritmernas förstärkning av " +
      "moralisk upprördhet, den sociala sanktionens hastighet, avsaknaden av nyanser i ett medium " +
      "som belönar korthet — gör att denna pendelrörelse skapar djupare spår. Konsekvenserna sprider " +
      "sig med en hastighet som saknar historiskt prejudikat. En författare som gör ett kontroversiellt " +
      "uttalande på morgonen kan vara socialt ruinerad vid lunchtid. Självcensur är inte " +
      "bara en individuell handling; den är en kulturell. När författare, konstnärer och debattörer " +
      "börjar undvika ämnen inte för att de saknar intresse utan för att risken upplevs som för stor, " +
      "förlorar kulturen inte synliga verk utan osynliga — de texter som aldrig skrivs, de samtal " +
      "som aldrig förs, de perspektiv som aldrig testas.\n\n" +
      "Den tysta kulturrevolutionen handlar ytterst om en spänning mellan två värden som båda är " +
      "behjärtansvärda: rättvisa och frihet. Utmaningen är inte att välja det ena framför det andra " +
      "utan att bygga en offentlighet som rymmer båda — en offentlighet där kritik är möjlig utan " +
      "att bli bestraffning, och där konstnärlig frihet inte används som alibi för likgiltighet inför " +
      "maktens ojämna fördelning. Det kräver något som varken algoritmer eller " +
      "upprördhet kan leverera: tålamod, och en vilja att uthärda komplexitet utan att reducera " +
      "den till slagord.",
    questions: [
      {
        id: "las-gym-2-q1",
        level: "hitta",
        prompt: "Vilken tidsperiod placerar texten den kulturella förskjutningen i?",
        options: [
          "1990–2000",
          "2000–2010",
          "2015–2025",
          "2025–2035",
        ],
        correct: 2,
        explanation:
          "Texten anger explicit att förskjutningen skedde \"någonstans mellan 2015 och 2025\". Det är en direkt faktauppgift.",
      },
      {
        id: "las-gym-2-q2",
        level: "tolka",
        prompt: "Vad menar författaren med att \"skillnaden mellan att skildra och att förespråka kollapsade\"?",
        options: [
          "Att författare blev sämre på att skriva realistiska karaktärer",
          "Att en romankaraktärs åsikter började tillskrivas författaren själv, vilket underminerade fiktionens frihet att utforska perspektiv",
          "Att alla författare blev politiska aktivister",
          "Att skönlitteratur blev förbjuden",
        ],
        correct: 1,
        explanation:
          "Textens centrala argument är att förmågan att separera gestaltning från åsikt försvagades. En författare som skrev en moraliskt problematisk karaktär riskerade att själv anklagas för dessa värderingar, vilket begränsade fiktionens utrymme att utforska mänsklig komplexitet.",
      },
      {
        id: "las-gym-2-q3",
        level: "reflektera",
        prompt: "Författaren erkänner moraliska argument för den utveckling hen kritiserar. Vilken retorisk funktion fyller det?",
        options: [
          "Det visar att författaren egentligen håller med sina meningsmotståndare",
          "Det är ett försök att undvika kritik genom att vara otydlig",
          "Det stärker textens trovärdighet genom att visa att författaren förstår och respekterar motargumenten innan hen vidareutvecklar sin kritik (concessio)",
          "Det är ett stilistiskt misstag som försvagar argumentationen",
        ],
        correct: 2,
        explanation:
          "Att erkänna motståndarens poäng (concessio) är en klassisk retorisk strategi som stärker ethos — författaren framstår som rättvis och nyanserad, vilket gör den efterföljande kritiken mer övertygande. Det är inte otydlighet utan retorisk sofistikering.",
      },
      {
        id: "las-gym-2-q4",
        level: "tolka",
        prompt: "Vad menar texten med \"de texter som aldrig skrivs\"?",
        options: [
          "Att det finns osynliga böcker i bibliotek",
          "Att självcensur skapar en osynlig kulturell förlust — verk som aldrig skapas på grund av rädsla, vilket gör skadan omöjlig att mäta",
          "Att författare har slutat skriva helt",
          "Att alla intressanta ämnen redan har behandlats",
        ],
        correct: 1,
        explanation:
          "Textens mest sofistikerade argument gäller den osynliga förlusten: självcensuren manifesteras inte i dåliga böcker utan i frånvaron av böcker som aldrig fick existera. Förlusten är per definition omöjlig att kvantifiera, vilket gör den svårare att adressera.",
      },
      {
        id: "las-gym-2-q5",
        level: "reflektera",
        prompt: "Påstående: Textens grundhållning är att representativitetskrav alltid är skadliga för konsten.",
        options: [
          "Sant",
          "Falskt — texten argumenterar för att kraven har moralisk legitimitet men att de blir problematiska när de drivs till sin yttersta konsekvens",
        ],
        correct: 1,
        explanation:
          "Texten framställer inte representativitetskrav som grundlösa. Den erkänner explicit deras historiska och moraliska berättigande. Kritiken riktas mot absolutiseringen — när principen drivs så långt att den begränsar snarare än breddar det konstnärliga rummet. Det är en fråga om grad, inte om princip.",
      },
    ],
  },
  {
    id: "las-gym-3",
    ageGroup: "gymnasiet",
    title: "Medvetandets gåta",
    passage:
      "Bland alla vetenskapliga problem som återstår att lösa intar medvetandets natur en särställning. " +
      "Det är inte bara att vi saknar svaret — vi är inte ens överens om vad frågan innebär. Filosofen " +
      "David Chalmers formulerade 1995 distinktionen mellan det \"lätta\" och det \"svåra\" problemet. " +
      "De lätta problemen — som trots namnet är enormt komplicerade — handlar om att förklara hjärnans " +
      "informationsbearbetning: hur sinnesintryck registreras, hur uppmärksamhet styrs, hur beteende " +
      "koordineras. Dessa frågor är i princip besvaringsbara med neurovetenskap och avancerad hjärnavbildning. " +
      "Det svåra problemet är annorlunda. Det frågar varför det finns en subjektiv upplevelse överhuvudtaget. " +
      "Varför känns det som något att se rött, höra musik eller smaka kaffe? Varför producerar neurala " +
      "processer inte bara funktion utan också fenomen — en inre värld av upplevelser som bara den som " +
      "har dem kan komma åt?\n\n" +
      "Filosofen Thomas Nagel berörde samma mysterium i sin berömda uppsats från 1974 med titeln " +
      "\"Hur är det att vara en fladdermus?\" Hans poäng var inte zoologisk utan filosofisk: en " +
      "fladdermus navigerar med ekolod, en sinnesmodalitet vi saknar. Vi kan studera fladdermusens " +
      "hjärna, kartlägga varje neuron och synaps, och ändå aldrig veta hur det känns inifrån att " +
      "orientera sig med ultraljud. Det subjektiva perspektivet — vad filosofer kallar qualia — tycks " +
      "vara principiellt otillgängligt för tredjepersonsbeskrivningar. Vi kan mäta våglängden för rött " +
      "ljus, beskriva vilka receptorer som aktiveras och vilka hjärnregioner som svarar, men inget av " +
      "detta förklarar den specifika upplevelsen av rödhet — det unika, omistliga, icke-reducerbara " +
      "intrycket som uppstår när du ser en vallmo i motljus.\n\n" +
      "Mot detta står de eliminativa materialisterna, företrädda av bland andra Daniel Dennett, som " +
      "hävdar att det svåra problemet är en illusion skapad av felaktig begreppsbildning. Dennett " +
      "argumenterar att medvetandet inte är ett fenomen ovanpå de neurala processerna utan identiskt " +
      "med dem. Att söka efter medvetandet bortom hjärnans aktivitet är, enligt Dennett, som att " +
      "söka efter \"livskraften\" bortom cellernas biokemi — en vitalistisk rest som vetenskapen " +
      "borde ha gjort sig av med för länge sedan. Precis som biologin visade att \"liv\" inte " +
      "kräver en mystisk ingrediens utöver kemi, borde neurovetenskapen kunna visa att \"medvetande\" " +
      "inte kräver något utöver neural aktivitet.\n\n" +
      "Men Dennetts position har en besvärlig konsekvens. Om subjektiv upplevelse reduceras till " +
      "neural aktivitet, då är min upplevelse av smärta inget utöver de C-fibrer som avfyras. " +
      "Det verkar intuitivt fel. Smärtan tycks vara mer än sina neurologiska korrelat — den har " +
      "en obehagskvalitet som inte fångas av en beskrivning av elektriska signaler och kemiska " +
      "transmittorer. Filosofen John Searle har kallat detta \"den biologiska naturalismens\" position: " +
      "medvetandet är verkligt och subjektivt men uppstår ur biologiska processer, precis som " +
      "matsmältning uppstår ur magsäckens kemi utan att vara reducerbar till enskilda molekylrörelser. " +
      "Medvetandet är, enligt Searle, en systemegenskap — något som uppstår på en högre organisationsnivå " +
      "och som inte kan förstås genom att bara studera delarna var för sig.\n\n" +
      "Debatten rör sig i cirklar, och kanske är det poängen. Medvetandet tycks vara det fenomen " +
      "där vetenskapens tredjepersonsperspektiv och det levda livets förstapersonsperspektiv möts " +
      "och finner sig ömsesidigt otillräckliga. Varje ansats att reducera medvetandet till fysik " +
      "tycks missa den kvalitativa dimensionen, och varje ansats att göra det till något icke-fysiskt " +
      "hamnar i den dualistiska fällan att förklara hur det immateriella interagerar med materia. " +
      "Kanske behöver vi inte välja mellan Chalmers och Dennett utan erkänna att medvetandet kräver " +
      "en ny begreppsapparat — ett språk som ännu inte finns. Den österrikiske filosofen Ludwig " +
      "Wittgenstein skrev att språkets gränser är världens gränser. Om det stämmer, kanske " +
      "medvetandets gåta inte är en fråga som väntar på sitt svar utan en gräns som väntar på " +
      "ett nytt språk.",
    questions: [
      {
        id: "las-gym-3-q1",
        level: "hitta",
        prompt: "Vad kallade David Chalmers för det \"svåra problemet\"?",
        options: [
          "Att kartlägga hjärnans alla neuroner",
          "Att förklara varför subjektiv upplevelse existerar överhuvudtaget",
          "Att förstå hur fladdermusar använder ekolod",
          "Att bygga artificiell intelligens",
        ],
        correct: 1,
        explanation:
          "Texten förklarar att det svåra problemet frågar \"varför det finns en subjektiv upplevelse överhuvudtaget\" — inte hur hjärnan bearbetar information (det lätta problemet) utan varför det känns som något att ha upplevelser.",
      },
      {
        id: "las-gym-3-q2",
        level: "tolka",
        prompt: "Varför jämför Dennett sökandet efter medvetande bortom hjärnaktivitet med \"livskraft\" bortom cellernas biokemi?",
        options: [
          "Dennett anser att medvetandet bokstavligen är en livskraft",
          "Analogin med vitalism visar att det vi tror är ett separat fenomen kan vara en begreppsförvirring — liksom \"livskraft\" visade sig vara vanlig kemi, kan \"medvetande\" visa sig vara vanlig neurologi",
          "Dennett vill återuppliva vitalismen som vetenskaplig teori",
          "Det är en poetisk bild utan argumentativ funktion",
        ],
        correct: 1,
        explanation:
          "Dennetts analogi är strategisk: vitalismen antog att liv kräver en speciell kraft utöver kemi, men biologin visade att cellernas processer räcker. Dennett menar att medvetandet kan vara samma typ av begreppsförvirring — vi söker något extra där det kanske bara finns neurala processer.",
      },
      {
        id: "las-gym-3-q3",
        level: "tolka",
        prompt: "Vilken funktion har Wittgenstein-citatet i textens avslutande stycke?",
        options: [
          "Det sammanfattar Dennetts position",
          "Det avfärdar hela diskussionen som meningslös",
          "Det öppnar en tredje väg: kanske är medvetandeproblemet inte olösligt utan obeskrivligt med nuvarande begrepp, vilket kräver ny begreppsapparat snarare än nya experiment",
          "Det visar att Wittgenstein löste medvetandeproblemet",
        ],
        correct: 2,
        explanation:
          "Wittgenstein-citatet tjänar som textens lösningsförslag: om språkets gränser sammanfaller med tänkandets gränser, kan medvetandets gåta vara ett symtom på begreppslig otillräcklighet snarare än ett empiriskt problem. Det pekar bortom dikotomin Chalmers–Dennett.",
      },
      {
        id: "las-gym-3-q4",
        level: "reflektera",
        prompt: "Påstående: Nagels poäng om fladdermöss innebär att vetenskap aldrig kan förklara medvetandet.",
        options: [
          "Sant — Nagel hävdar att subjektiv upplevelse är principiellt otillgänglig för vetenskapen",
          "Falskt — Nagel visar att tredjepersonsbeskrivningar har en gräns, men det utesluter inte att andra metoder kan överbrygga den",
        ],
        correct: 1,
        explanation:
          "Nagels argument visar att det finns en aspekt av medvetandet som inte fångas av objektiva beskrivningar. Men texten själv antyder att problemet kanske kräver \"ett nytt språk\" snarare än att det är principiellt olösligt. Nagels poäng markerar en begränsning, inte nödvändigtvis en omöjlighet.",
      },
      {
        id: "las-gym-3-q5",
        level: "reflektera",
        prompt: "Textens struktur presenterar flera filosofiska positioner. Vilken hållning intar författaren själv?",
        options: [
          "Författaren stöder Dennetts eliminativa materialism entydigt",
          "Författaren föredrar Chalmers dualism utan reservation",
          "Författaren intager en meta-position: debatten avslöjar att våra nuvarande begrepp är otillräckliga, och lösningen kan ligga i ny begreppsbildning snarare än i någon av de existerande positionerna",
          "Författaren anser att medvetandefrågan är irrelevant",
        ],
        correct: 2,
        explanation:
          "Genom att presentera Chalmers, Nagel, Dennett och Searle utan att entydigt ställa sig bakom någon, och genom att avsluta med Wittgensteins tanke om språkets gränser, signalerar författaren att lösningen kanske ligger bortom den befintliga begreppsramen — en meta-filosofisk position.",
      },
    ],
  },
  {
    id: "las-gym-4",
    ageGroup: "gymnasiet",
    title: "Det bekväma mörkret",
    passage:
      "Det finns ett argument som sällan uttalas men som genomsyrar vår tids politiska debatt som en " +
      "tyst bas under melodin: att sanningen ibland är för besvärlig för demokratin. Politiker vet det. " +
      "Journalister vet det. Väljare, på något plan, vet det också. Ändå upprätthåller vi kollektivt " +
      "illusionen att demokratin vilar på informerade val. Det gör den inte — den vilar på tillräckligt " +
      "informerade val, och skillnaden mellan dessa två formuleringar rymmer en avgrund. Det fullständigt " +
      "informerade valet är en fiktion, en pedagogisk idealisering som ingen stat, inget utbildningssystem " +
      "och inget medium någonsin har realiserat. Frågan har aldrig varit om medborgare ska vara " +
      "felinformerade utan i vilken grad och på vilka sätt.\n\n" +
      "Retoriken har alltid förstått detta. Aristoteles delade övertalningsmedlen i logos, ethos och " +
      "pathos, men det var pathos — det emotionella tilltalet — som han erkände som mest verkningsfullt " +
      "inför stora folkförsamlingar. Inte för att folk var dumma, utan för att känslan bearbetar " +
      "information snabbare och kraftfullare än det analytiska tänkandet. Den som kan framkalla rädsla, " +
      "hopp eller indignation har ett försprång som ingen mängd statistik kan överbrygga. Modern " +
      "kognitionsforskning bekräftar detta: Daniel Kahnemans distinktion mellan System 1 (snabbt, " +
      "intuitivt) och System 2 (långsamt, analytiskt) visar att vi fattar de flesta beslut — inklusive " +
      "politiska — med den del av hjärnan som föredrar berättelser framför statistik och anekdoter " +
      "framför data. System 2, det reflekterande tänkandet, kräver ansträngning och är dessutom " +
      "biologiskt utformat att vara lat — det aktiveras bara när System 1 stöter på något oväntat.\n\n" +
      "Den retoriska konsekvensen är brutal i sin enkelhet. Den som vill vinna en debatt bör inte " +
      "presentera den mest korrekt nyanserade bilden av verkligheten utan den mest berättelsekompatibla. " +
      "En graf som visar att brottsligheten minskat med tolv procent över tio år förlorar mot en enskild " +
      "berättelse om ett offer vars liv förstördes. Inte för att berättelsen är mer sann, utan för att " +
      "den aktiverar evolutionärt djupare lager av mänsklig kognition. Vi är narrativa varelser, " +
      "formade av hundratusentals år av berättande vid lägereldar, och statistik är bara några " +
      "hundra år gammal. Evolutionärt sett har vi knappt hunnit packa upp den. Grafen talar till " +
      "den rationella hjärnan; berättelsen talar till den urgamla, den som minns att sabeltandstigern " +
      "som åt grannens barn var viktigare att komma ihåg än den genomsnittliga sannolikheten för ett " +
      "tigeranfall.\n\n" +
      "Vad ska vi göra med denna insikt? Det finns i huvudsak tre positioner. Cyniker menar att " +
      "systemet fungerar trots — eller kanske tack vare — den retoriska manipulationen, att " +
      "demokratins mekanism med konkurrerande retoriker paradoxalt nog leder till hyfsat rimliga " +
      "utfall genom en sorts marknadens osynliga hand. Idealister hävdar att lösningen är bättre " +
      "utbildning: lär folk kritiskt tänkande och källkritik, och de genomskådar retoriken. Realister, " +
      "slutligen, argumenterar för institutionella motmedel — oberoende medier, faktakontroll, " +
      "transparens — som inte eliminerar retoriken men åtminstone höjer kostnaden för att ljuga.\n\n" +
      "Själv lutar jag åt att ingen av dessa positioner räcker ensam. Cynismen är intellektuellt " +
      "bekväm men moraliskt bankrutt — den ber oss acceptera manipulation som ett naturtillstånd. " +
      "Idealismen underskattar djupet av våra kognitiva begränsningar; kritiskt tänkande är möjligt " +
      "men kräver resurser, tid och motivation som inte är jämnt fördelade i ett samhälle. " +
      "Och realismens institutioner eroderas just nu av samma teknologiska krafter som förstärker " +
      "retoriken: algoritmerna som belönar engagemang framför sanning och plattformarna som gör " +
      "varje medborgare till en potentiell avsändare utan någon av journalistikens etiska " +
      "begränsningar. Kvar står vi med en obekväm sanning: demokrati kräver medborgare som aktivt " +
      "kämpar mot sina egna kognitiva impulser, som väljer det svåra framför det enkla, det " +
      "nyanserade framför det slagkraftiga. Det är ett högt krav. Frågan är om det är för högt.",
    questions: [
      {
        id: "las-gym-4-q1",
        level: "hitta",
        prompt: "Vilka tre övertalningsmedel nämner texten från Aristoteles?",
        options: [
          "Metafor, liknelse och ironi",
          "Logos, ethos och pathos",
          "Tes, antites och syntes",
          "Kairos, chronos och topos",
        ],
        correct: 1,
        explanation:
          "Texten nämner explicit Aristoteles indelning i logos (det logiska argumentet), ethos (talarens trovärdighet) och pathos (det emotionella tilltalet) som de tre klassiska övertalningsmedlen.",
      },
      {
        id: "las-gym-4-q2",
        level: "tolka",
        prompt: "Varför beskriver texten statistik som evolutionärt \"knappt uppackad\"?",
        options: [
          "För att statistik uppfanns nyligen i biologisk mening",
          "Metaforen visar att människans kognitiva system formades under hundratusentals år av narrativt tänkande, medan kvantitativt tänkande är så nytt att hjärnan ännu inte har anpassat sig till det",
          "För att statistik är fel som metod",
          "För att vi inte undervisar tillräckligt i matematik",
        ],
        correct: 1,
        explanation:
          "Textens evolutionära argument är att berättelsen som kognitiv form har djupare rötter än den statistiska analysen. Hjärnan bearbetar narrativ naturligt (System 1) medan statistik kräver medveten ansträngning (System 2). Det förklarar varför anekdoten slår siffran i offentlig debatt.",
      },
      {
        id: "las-gym-4-q3",
        level: "tolka",
        prompt: "Vilken retorisk strategi använder författaren genom att avsluta med frågan \"Är det för högt?\"",
        options: [
          "En retorisk fråga som tvingar läsaren att själv ta ställning, vilket speglar textens krav på aktiv medborgerlighet",
          "En fråga som visar att författaren inte vet vad hen tycker",
          "Ett stilistiskt misstag — texter bör avslutas med svar, inte frågor",
          "En uppmaning att ge upp demokratin",
        ],
        correct: 0,
        explanation:
          "Den avslutande retoriska frågan är performativ: genom att inte ge ett svar tvingar texten läsaren att göra exakt det den argumenterar för — att tänka kritiskt och bilda sig en egen uppfattning. Formen speglar innehållet.",
      },
      {
        id: "las-gym-4-q4",
        level: "reflektera",
        prompt: "Textens författare presenterar tre positioner (cynism, idealism, realism) och avfärdar alla. Är detta en svaghet eller styrka i argumentationen?",
        options: [
          "Svaghet — en text som inte erbjuder en lösning är meningslös",
          "Styrka — genom att visa otillräckligheten i varje enskild lösning framträder problemets genuina komplexitet, och texten undviker den intellektuella ohederlighet som en enkel lösning skulle innebära",
          "Varken eller — det spelar ingen roll för textens kvalitet",
          "Svaghet — författaren borde ha valt cynismen som den mest realistiska positionen",
        ],
        correct: 1,
        explanation:
          "Att inte erbjuda en enkel lösning kan vara retoriskt kraftfullt om syftet är att synliggöra ett problems komplexitet. Texten argumenterar implicit att den som erbjuder enkla lösningar på demokratins retoriska problem just har fallit i den fälla texten beskriver.",
      },
      {
        id: "las-gym-4-q5",
        level: "tolka",
        prompt: "Påstående: Texten hävdar att demokratin borde ersättas med ett expertsstyre.",
        options: [
          "Sant",
          "Falskt — texten kritiserar demokratins sårbarheter men föreslår att medborgare ska kämpa mot sina kognitiva impulser, inte att systemet ska överges",
        ],
        correct: 1,
        explanation:
          "Texten identifierar demokratins svagheter utan att föreslå att den ska avskaffas. Den avslutar med att kravet ställs på medborgarna — att aktivt motverka sina kognitiva impulser. Det är en demokratisk lösning, inte en elitistisk.",
      },
    ],
  },
  {
    id: "las-gym-5",
    ageGroup: "gymnasiet",
    title: "Novemberljus",
    passage:
      "Över de öppna fälten drev dimman i tunna sjok, och den grå himlen vilade så lågt att man " +
      "nästan kunde nå den med handen. Det var den sortens novemberdag som gör att man förstår " +
      "varför nordiska folk uppfann sina gudamyter: i mötet mellan mörker och ljus, mellan det " +
      "synliga och det fördolda, föds berättelsen som ett försvar mot det oförklarliga. Fälten " +
      "sträckte sig i alla riktningar med en enformighet som var nära besläktad med skönhet — " +
      "den sortens skönhet som kräver tålamod, som inte avslöjar sig vid första anblicken utan " +
      "långsamt träder fram för den som är villig att stanna.\n\n" +
      "Elin hade gått i nästan en timme utan att möta någon. Stigen följde åsen i en lång, svag " +
      "kurva och nedanför bredde Mälardalen ut sig i ett töcknigt panorama av åkerlappar och " +
      "dungar. Längre bort kunde man ana kyrkbyn, en samling husformer som verkade lösas upp i " +
      "dimman som socker i vatten. Hon tänkte på hur landskapet förändrades med årstiderna — inte " +
      "bara ytligt, i färg och temperatur, utan i karaktär. Sommaren var extrovert och generös, " +
      "den visade allt, dolde inget, som en människa som inte kan hålla en hemlighet. Hösten var " +
      "melankolisk och skönhetsmedveten, en estets avskedsföreställning i guld och karmosin. " +
      "Men november var introvert, en årstid som hade vänt sig inåt, och det tilltalade henne " +
      "på ett sätt som hon inte kunde ha förklarat för tio år sedan.\n\n" +
      "Hon hade tagit med sig en bok men inte öppnat den. Det var Vilhelm Mobergs \"Utvandrarna\" — " +
      "en roman hon hade skjutit framför sig i flera år, som man skjuter upp ett svårt samtal man " +
      "vet att man förr eller senare måste ta. Hennes far hade sagt att man måste vara gammal nog " +
      "att ha förlorat något för att förstå den. Hon hade fnyst åt påståendet då, för tio år sedan, " +
      "med den sorts övertygelse som bara den som ännu inte har prövats kan bära. Nu, efter " +
      "skilsmässan och flytten från huset vid sjön — huset där barnen hade tagit sina första steg " +
      "och där äppelträdet i trädgården fortfarande bar frukt som ingen längre plockade — kände " +
      "hon en oväntad respekt för faderns ord. Kanske hade han inte menat att man behövde lida " +
      "för att förstå litteratur, utan att viss litteratur kräver att läsaren bär med sig en " +
      "tyngd, en erfarenhet av att något oåterkalleligt har hänt, för att orden ska landa med " +
      "sin fulla vikt.\n\n" +
      "Vinden drog till och dimman löstes upp i ett ögonblick, som ett förhänge som drogs åt " +
      "sidan av en osynlig hand. Plötsligt låg landskapet framför henne i ett oväntat ljus — " +
      "inte sol, exakt, utan en diffus ljusning som fick varje kontur att framträda med ovanlig " +
      "skärpa. Björkarna på åsen stod nakna och svarta mot den ljusnande himlen och deras grenars " +
      "filigranarbete avtecknade sig med en precision som sommarens lövverk aldrig tillät. Det " +
      "slog henne att det kanske var poängen med november: att avskalningen inte var en förlust " +
      "utan en form av klarhet. Att det som doldes av sommarens överflöd nu framträdde just för " +
      "att det hade blivit naket. Grenarna hade alltid funnits där, men det krävdes att löven " +
      "föll för att deras mönster skulle bli synligt.\n\n" +
      "Hon satte sig på en sten vid stigkanten och tog upp boken. De första meningarna handlade " +
      "om en man som betraktade sin jord och visste att den inte längre kunde föda hans familj. " +
      "Elin kände plötsligt hela den meningen — inte bara dess ord utan dess tyngd, marken som " +
      "inte räcker till, beslutet som inte kan undvikas, blicken ut över ett landskap som är " +
      "samtidigt älskat och otillräckligt. Hon läste vidare, och orden sjönk genom henne som " +
      "rötter genom jord, långsamt och oåterkalleligt. Landskapet omkring henne hade blivit " +
      "en del av läsningen, och läsningen en del av landskapet, tills gränsen mellan bok och " +
      "verklighet var lika otydlig som gränsen mellan dimma och luft. Hon tänkte: så här ska " +
      "det alltså kännas. Det var inte glädje. Det var inte sorg. Det var den tredje saken, den " +
      "som bara november och stora romaner kan framkalla — en stilla förvissning om att allt " +
      "som går förlorat lämnar efter sig en form, och att formen, ibland, är vackrare än det " +
      "som fyllde den.",
    questions: [
      {
        id: "las-gym-5-q1",
        level: "hitta",
        prompt: "Vilken bok bär Elin med sig på sin vandring?",
        options: [
          "Doktor Glas av Hjalmar Söderberg",
          "Utvandrarna av Vilhelm Moberg",
          "Röda rummet av August Strindberg",
          "Nils Holgerssons underbara resa av Selma Lagerlöf",
        ],
        correct: 1,
        explanation:
          "Texten anger explicit att Elin hade tagit med sig Vilhelm Mobergs \"Utvandrarna\". Det är en direkt faktauppgift.",
      },
      {
        id: "las-gym-5-q2",
        level: "tolka",
        prompt: "Vad menar texten med att november är \"introvert\"?",
        options: [
          "Att det regnar mycket i november",
          "Att november saknar estetiska kvaliteter",
          "Att november som årstid präglas av avskalning och inåtvändhet — naturen visar inte upp sig utan drar sig tillbaka, vilket skapar utrymme för reflektion och inre liv",
          "Att ingen vill vara ute i november",
        ],
        correct: 2,
        explanation:
          "Personifieringen av årstiderna (sommaren som extrovert, hösten som melankolisk, november som introvert) bygger en analogi mellan naturens cykler och mänskliga temperament. Novembers introversion speglar Elins inre tillstånd och skapar förutsättningen för hennes fördjupade läsupplevelse.",
      },
      {
        id: "las-gym-5-q3",
        level: "tolka",
        prompt: "Vilken parallell dras mellan novemberlandskapet och Elins livssituation?",
        options: [
          "Båda är kalla och obehagliga",
          "Liksom träden blir nakna och tydligare utan löv, har Elins förluster (skilsmässan, flytten) skapat en klarhet och mottaglighet som inte fanns när livet var \"lövtätt\"",
          "Elin vill flytta söderut för att slippa mörkret",
          "Landskapet påminner henne om hennes barndomshem",
        ],
        correct: 1,
        explanation:
          "Textens centrala metafor är att avskalning — i naturen som i livet — inte bara är förlust utan också klarhet. Björkarnas nakna grenar framträder tydligare utan löv, och Elin kan nu förstå Moberg just för att hon har förlorat tillräckligt. Landskapet speglar den inre processen.",
      },
      {
        id: "las-gym-5-q4",
        level: "reflektera",
        prompt: "Faderns påstående att man måste \"ha förlorat något\" för att förstå Utvandrarna — stödjer texten den tanken?",
        options: [
          "Nej, texten visar att Elin fortfarande inte förstår boken",
          "Ja, men texten nyanserar det: det handlar inte om att lidande är nödvändigt utan att viss erfarenhet ger ord en resonansbotten som gör att de \"landar med sin fulla vikt\"",
          "Texten nämner faderns åsikt men tar inte ställning",
          "Nej, texten menar att alla kan förstå alla böcker oavsett livserfarenhet",
        ],
        correct: 1,
        explanation:
          "Texten bekräftar faderns intuition men omformulerar den: Elin förstår att det inte handlar om lidande som krav utan om erfarenhet som resonansbotten. Orden \"sjönk genom henne som rötter genom jord\" visar att förståelsen nu är fysisk, kroppslig — inte bara intellektuell.",
      },
      {
        id: "las-gym-5-q5",
        level: "reflektera",
        prompt: "Textens sista mening beskriver \"en form som är vackrare än det som fyllde den\". Vilken estetisk och existentiell hållning uttrycker detta?",
        options: [
          "En nihilistisk syn: ingenting har något värde",
          "En ytlig optimism: allt ordnar sig till slut",
          "En hållning nära den japanska estetiken wabi-sabi: skönhet i det ofullständiga, det förgängliga och det avskalade — förlusten skapar inte bara tomhet utan en struktur som i sig rymmer skönhet",
          "En kristen syn på lidande som nödvändig prövning",
        ],
        correct: 2,
        explanation:
          "Den avslutande insikten — att det som gått förlorat lämnar en form som kan vara vackrare än det som fyllde den — uttrycker en estetik av avskalning besläktad med wabi-sabi. Det är varken optimism eller nihilism utan en tredje position: att finna mening och skönhet i själva frånvarons kontur.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 6. Filosofisk — "Det osynliga kontraktet"
  // -----------------------------------------------------------------------
  {
    id: "las-gym-6",
    ageGroup: "gymnasiet",
    title: "Det osynliga kontraktet",
    passage:
      "Vi föds in i en värld vi aldrig valde. Ingen frågade oss om vi ville ha ett personnummer, " +
      "ett medborgarskap, en plats i ett samhälle med lagar vi inte varit med om att stifta. " +
      "Ändå förväntas vi följa reglerna. Betala skatt. Stanna vid rött ljus. Respektera " +
      "andras egendom. Filosofen Jean-Jacques Rousseau kallade detta det sociala kontraktet: " +
      "en tyst överenskommelse mellan individ och samhälle, aldrig undertecknad men alltid bindande.\n\n" +
      "Men kan ett kontrakt vara giltigt om en av parterna aldrig samtyckt? Thomas Hobbes, " +
      "som verkade under det engelska inbördeskrigets kaos på 1600-talet, hade ett pragmatiskt svar: " +
      "alternativet är värre. Utan samhällets ordning, menade Hobbes, skulle tillvaron vara " +
      "\"ensam, fattig, otäck, brutal och kort\". Kontraktet är inte rättvist i strikt mening — " +
      "men det är rationellt. Vi accepterar begränsningar för att slippa kaos.\n\n" +
      "Rousseau var inte nöjd med den analysen. För honom handlade kontraktet inte bara om " +
      "överlevnad utan om frihet. Det goda samhället, argumenterade han, uppstår när medborgarna " +
      "aktivt deltar i att forma lagarna. Då är lydnad inte underkastelse utan självstyre: " +
      "jag lyder lagen för att det är min lag, skapad genom en process jag hade del i.\n\n" +
      "I praktiken vet vi att den ideala bilden sällan stämmer. Många medborgare saknar reellt " +
      "inflytande. Ungdomar under arton får inte rösta men förväntas följa alla lagar. " +
      "Marginaliserade grupper kan uppleva att kontraktet skyddar andras intressen men inte deras. " +
      "Sociologen Charles Mills har hävdat att det sociala kontraktet historiskt sett har varit " +
      "ett raskontrakt — en överenskommelse mellan privilegierade grupper som exkluderat andra.\n\n" +
      "Ändå kvarstår grundfrågan: om du inte accepterar kontraktet, vad föreslår du istället? " +
      "Total individuell frihet leder till den starkares rätt. Total kollektiv kontroll leder till " +
      "diktatur. Någonstans däremellan måste varje generation finna sin balans — och varje individ " +
      "avgöra hur mycket av sin frihet hon är villig att överlåta för tryggheten att leva bland andra.\n\n" +
      "Kanske är det viktigaste inte att kontraktet är perfekt, utan att det aldrig slutar " +
      "omförhandlas.",
    questions: [
      {
        id: "las-gym-6-q1",
        level: "hitta",
        prompt: "Hur beskrev Hobbes tillvaron utan samhällets ordning?",
        options: [
          "Fri, naturlig och harmonisk",
          "Ensam, fattig, otäck, brutal och kort",
          "Lugn men tråkig",
          "Kaotisk men kreativ",
        ],
        correct: 1,
        explanation:
          "Texten citerar Hobbes berömda beskrivning av naturtillståndet som \"ensam, fattig, otäck, brutal och kort\".",
      },
      {
        id: "las-gym-6-q2",
        level: "tolka",
        prompt: "Vad är den avgörande skillnaden mellan Hobbes och Rousseaus syn på kontraktet?",
        options: [
          "Hobbes trodde på demokrati, Rousseau på monarki",
          "Hobbes motiverade kontraktet med överlevnad och rädsla för kaos, Rousseau med aktivt deltagande och frihet",
          "De hade samma syn men levde i olika länder",
          "Rousseau ville avskaffa alla lagar",
        ],
        correct: 1,
        explanation:
          "Hobbes ser kontraktet som ett rationellt val för att undvika kaos. Rousseau kräver mer: att kontraktet bygger på aktivt medborgardeltagande och att lydnad är en form av självstyre.",
      },
      {
        id: "las-gym-6-q3",
        level: "tolka",
        prompt: "Vad innebär Charles Mills kritik av det sociala kontraktet?",
        options: [
          "Att kontrakt inte finns i verkligheten",
          "Att det historiskt sett har utformats av privilegierade grupper och exkluderat marginaliserade",
          "Att Rousseau hade helt rätt",
          "Att skatt borde avskaffas",
        ],
        correct: 1,
        explanation:
          "Mills menar att det sociala kontraktet inte har varit universellt utan har gynnat vissa grupper medan andra exkluderats — det har fungerat som ett raskontrakt.",
      },
      {
        id: "las-gym-6-q4",
        level: "reflektera",
        prompt: "Texten nämner att ungdomar under arton inte får rösta men förväntas följa lagar. Vilken principiell fråga reser det?",
        options: [
          "Att ungdomar borde slippa följa lagar",
          "Att det bryter mot kontraktets grundidé om samtycke — kan man kräva lydnad av någon utan att ge dem inflytande?",
          "Att rösträtten borde höjas till 21",
          "Att ungdomar inte förstår politik",
        ],
        correct: 1,
        explanation:
          "Om kontraktets legitimitet bygger på samtycke och deltagande, uppstår en spänning när en grupp måste följa regler utan att ha fått vara med och forma dem.",
      },
      {
        id: "las-gym-6-q5",
        level: "reflektera",
        prompt: "Textens slutsats är att det viktigaste är att kontraktet \"aldrig slutar omförhandlas\". Varför?",
        options: [
          "Eftersom lagar bör ändras varje år",
          "Eftersom ett statiskt kontrakt riskerar att bli orättvist när samhället förändras — ständig omförhandling säkrar att fler inkluderas",
          "Eftersom filosofer alltid tycker om att diskutera",
          "Eftersom det sociala kontraktet inte existerar",
        ],
        correct: 1,
        explanation:
          "Samhällen förändras. Grupper som exkluderades kan kräva inkludering. Nya utmaningar kräver nya svar. Omförhandling är processen genom vilken kontraktet hålls levande och rättvist.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 7. Essä — "Tiden vi inte mäter"
  // -----------------------------------------------------------------------
  {
    id: "las-gym-7",
    ageGroup: "gymnasiet",
    title: "Tiden vi inte mäter",
    passage:
      "Vi mäter allt numera. Steg per dag, skärmtid per vecka, sovkvalitet i procent. " +
      "Apparna på telefonen omvandlar tillvaron till datapunkter och erbjuder kurvor, diagram och " +
      "tröstande notiser: \"Du sov 12 procent bättre i natt.\" Men hur mäter man den där " +
      "söndagseftermiddagen när ingenting händer och just därför händer allt?\n\n" +
      "Jag tänker på min morfar, som kunde sitta på altanen i timmar utan att göra annat " +
      "än att titta på träden. Frågade man vad han gjorde svarade han: \"Jag sitter.\" " +
      "Inte \"jag vilar\" — det hade förutsatt att han innan hade ansträngt sig och behövde " +
      "återhämtning. Inte \"jag mediterar\" — det hade gjort sittandet till en metod, ett medel " +
      "mot stress med mätbara hälsoeffekter. Han satt. Punkten i meningen var viktig.\n\n" +
      "Det moderna produktivitetsidealet har gjort oss misstänksamma mot punkter. " +
      "Vi vill att meningar ska fortsätta: jag sitter och lyssnar på en podd, jag sitter och " +
      "planerar imorgon, jag sitter och reflekterar strategiskt. Tomrummet utan tillägg " +
      "uppfattas som slöseri. \"Vad har du gjort idag?\" frågar någon, och vi räknar upp " +
      "handlingar som bevis på att dagen haft mening.\n\n" +
      "Men den tyske filosofen Josef Pieper argumenterade i sin essä \"Muße und Kult\" från 1948 " +
      "att verklig ledighet inte är frånvaro av arbete utan en aktiv hållning av mottaglighet. " +
      "Den som vilar är passiv; den som har muße — ungefär \"kontemplativ ledighet\" — " +
      "är uppmärksam utan avsikt. Det är skillnaden mellan att sova och att vara vaken " +
      "utan agenda.\n\n" +
      "Det paradoxala är att detta tillstånd inte kan instrumentaliseras. I samma ögonblick " +
      "som du sitter på altanen för att bli mer kreativ eller sänka din kortisolnivå " +
      "har du redan omvandlat sittandet till ett medel. Du optimerar igen. " +
      "Den genuina muße uppstår först när du släpper alla mål, inklusive målet att släppa alla mål.\n\n" +
      "Min morfar förstod detta intuitivt. Han hade inget ord för det — han behövde inget. " +
      "Kanske var frånvaron av ordet det som möjliggjorde handlingen. I det ögonblick vi " +
      "namnger, kategoriserar och kvantifierar ett tillstånd börjar vi omärkligt styra det. " +
      "Den mätta sömnen är inte riktigt samma sömn. Den dokumenterade promenaden " +
      "är inte riktigt samma promenad.\n\n" +
      "Söndagseftermiddagen rinner ut. Inga notiser har dykt upp. Ingen data har samlats. " +
      "Och just i det omätta tomrummet har något hänt som jag aldrig kommer kunna rapportera — " +
      "men som jag känner i kroppen som en stilla, oförklarlig belåtenhet.",
    questions: [
      {
        id: "las-gym-7-q1",
        level: "hitta",
        prompt: "Vilken filosof och vilket verk refererar texten till?",
        options: [
          "Immanuel Kant, \"Kritik av det rena förnuftet\"",
          "Josef Pieper, \"Muße und Kult\" (1948)",
          "Jean-Paul Sartre, \"Varat och intet\"",
          "Simone de Beauvoir, \"Det andra könet\"",
        ],
        correct: 1,
        explanation:
          "Texten refererar till Josef Piepers essä \"Muße und Kult\" från 1948 och hans begrepp om kontemplativ ledighet.",
      },
      {
        id: "las-gym-7-q2",
        level: "tolka",
        prompt: "Varför är morfars svar \"Jag sitter\" med punkt viktigt för textens argumentation?",
        options: [
          "Det visar att morfar var lat",
          "Punkten markerar att sittandet är komplett i sig själv — det behöver inget tillägg, inget syfte och ingen rättfärdigande",
          "Det visar att morfar inte kunde prata",
          "Det är bara en språklig detalj utan betydelse",
        ],
        correct: 1,
        explanation:
          "Punkten symboliserar fullständighet. Morfar behövde inte legitimera sitt sittande med ett syfte. Det var inte ett medel utan ett tillstånd i sig.",
      },
      {
        id: "las-gym-7-q3",
        level: "tolka",
        prompt: "Vad menar författaren med att muße inte kan instrumentaliseras?",
        options: [
          "Att man inte kan använda musikinstrument medan man vilar",
          "Att i samma ögonblick man gör kontemplativ ledighet till ett medel för något annat förstörs den — den kräver frånvaro av mål",
          "Att man inte kan mäta tid",
          "Att filosofi alltid är opraktisk",
        ],
        correct: 1,
        explanation:
          "Muße kräver frånvaro av avsikt. Om man sitter stilla för att bli mer kreativ har man redan gjort det till produktivitet. Paradoxen är central i texten.",
      },
      {
        id: "las-gym-7-q4",
        level: "reflektera",
        prompt: "Författaren skriver att \"den mätta sömnen inte är riktigt samma sömn\". Vilken bredare kulturkritik uttrycker det?",
        options: [
          "Att sömnforskning är meningslös",
          "Att kvantifieringen av tillvaron subtilt förändrar vårt förhållande till upplevelser — medvetenheten om mätningen påverkar det som mäts",
          "Att man inte borde sova",
          "Att appar alltid visar fel data",
        ],
        correct: 1,
        explanation:
          "Kulturkritiken handlar om att kvantifiering inte är neutral. Att observera och mäta en upplevelse förändrar upplevelsen — vi börjar optimera istället för att leva.",
      },
      {
        id: "las-gym-7-q5",
        level: "reflektera",
        prompt: "Essän avslutas med en känsla som författaren \"aldrig kommer kunna rapportera\". Varför är det en passande avslutning?",
        options: [
          "Författaren har dåligt minne",
          "Det visar att essän misslyckades",
          "Det fullbordar tesen: det mest meningsfulla kan vara det som undandrar sig mätning och språk — texten gör själv det den argumenterar för",
          "Det är bara ett stilistiskt val utan djupare mening",
        ],
        correct: 2,
        explanation:
          "Avslutningen enacts textens tes. Det som författaren beskriver som mest värdefullt — den stilla belåtenheten — kan inte kvantifieras eller rapporteras. Texten demonstrerar sin egen poäng.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 8. Modernistisk fiktion — "Stationen"
  // -----------------------------------------------------------------------
  {
    id: "las-gym-8",
    ageGroup: "gymnasiet",
    title: "Stationen",
    passage:
      "Klockan på perrongen hade stannat vid kvart i tre. Ingen verkade ha lagt märke till det " +
      "förutom henne. De andra väntande tittade på sina telefoner eller stirrade in i den dis " +
      "som låg över rälsen som om den vore en gardin de väntade på skulle dras undan.\n\n" +
      "Hon hade kommit hit utan att riktigt veta varför. Inte för att resa — hon hade ingen biljett, " +
      "inget bagage, ingen destination. Stationer hade alltid dragit henne till sig. Det var platser " +
      "definierade av rörelse men upplevda i väntan. Alla som stod här var mellan något. " +
      "Mellan hemma och borta. Mellan det kända och det ännu okända. Ingen var riktigt närvarande " +
      "på en station; alla var redan mentalt på väg.\n\n" +
      "Utom hon. Hon var här. I det stillastående ögonblicket.\n\n" +
      "En kvinna med en röd kappa gick förbi och lämnade en doft av apelsin och regn. " +
      "En pojke sparkade på en kaffemugg och ljudet studsade mellan väggarna som en vilsen fågel. " +
      "En man läste tidningen med sådan intensitet att hon undrade om han sökte efter en mening " +
      "som gått förlorad inte i texten utan i livet.\n\n" +
      "Hon mindes att hennes mor hade sagt: \"Det farliga är inte att tågen inte kommer. " +
      "Det farliga är att du slutar vänta.\" Vid den tiden hade hon tolkat det som tålamod. " +
      "Nu förstod hon att det handlade om hopp — den envishet med vilken vi vänder ansiktet " +
      "mot det som ännu inte syns.\n\n" +
      "Disen lättade inte. Klockan stod still. Men någonstans bakom den grå slöjan hördes " +
      "ett avlägset mullrande som kunde vara ett tåg eller bara vinden som pressade sig " +
      "genom tunneln med en röst som påminde om något hon en gång känt men inte längre " +
      "kunde namnge.\n\n" +
      "Hon satte sig på bänken. Den var kall. Hon tänkte inte resa idag heller. " +
      "Men att vara här, i mellanrummet, bland alla som var på väg — det räckte. " +
      "Det var, insåg hon, det närmaste hon kunde komma tillhörighet utan att binda sig " +
      "vid något. En frihet som smakade salt, som tårar eller hav.",
    questions: [
      {
        id: "las-gym-8-q1",
        level: "hitta",
        prompt: "Varför hade huvudpersonen kommit till stationen?",
        options: [
          "Hon väntade på ett tåg till en annan stad",
          "Hon mötte någon som kom med tåget",
          "Hon hade ingen specifik anledning — hon drogs till stationer utan att veta varför",
          "Hon arbetade där",
        ],
        correct: 2,
        explanation:
          "Texten säger att hon kommit utan att riktigt veta varför. Hon hade ingen biljett, inget bagage, ingen destination.",
      },
      {
        id: "las-gym-8-q2",
        level: "tolka",
        prompt: "Vad symboliserar den stannande klockan?",
        options: [
          "Att stationen har dåligt underhåll",
          "Att huvudpersonen befinner sig utanför den vanliga tidens flöde — i ett ögonblick av stillhet mitt i rörelse",
          "Att tåget är försenat",
          "Att berättelsen utspelar sig i dåtid",
        ],
        correct: 1,
        explanation:
          "Klockan som stannat speglar huvudpersonens tillstånd: hon är den enda som inte är på väg någonstans. Hon existerar i ett stillastående nu medan alla andra rör sig.",
      },
      {
        id: "las-gym-8-q3",
        level: "tolka",
        prompt: "Vad menade moderns ord om att \"det farliga är att du slutar vänta\"?",
        options: [
          "Att tåg alltid är försenade",
          "Att man ska vara tålmodig i kön",
          "Att sluta vänta innebär att sluta hoppas — att ge upp förväntan på att något ska komma",
          "Att man aldrig ska ta bussen istället",
        ],
        correct: 2,
        explanation:
          "Modern talar metaforiskt om hopp. Att vänta är att rikta sig mot framtiden med förväntan. Att sluta vänta är att ge upp tron på att förändring kan ske.",
      },
      {
        id: "las-gym-8-q4",
        level: "reflektera",
        prompt: "Berättelsen beskriver stationen som en plats \"definierad av rörelse men upplevd i väntan\". Hur fungerar detta som metafor?",
        options: [
          "Det är bara en beskrivning av en tågstation",
          "Stationen blir en bild för tillvaron — vi är alla i transit mellan det vi var och det vi ska bli, och livet upplevs i mellanrummen",
          "Det handlar om att tåg rör sig",
          "Det är en kritik av kollektivtrafiken",
        ],
        correct: 1,
        explanation:
          "Stationen fungerar som existentiell metafor. Alla befinner sig mellan tillstånd. Livet består till stor del av väntan och mellanrum, inte av ankomster.",
      },
      {
        id: "las-gym-8-q5",
        level: "reflektera",
        prompt: "Den avslutande bilden — \"en frihet som smakade salt, som tårar eller hav\" — rymmer en dubbelhet. Vilken?",
        options: [
          "Att hav alltid är salt",
          "Att friheten i att inte binda sig är både befriande (havet som vidd) och smärtsam (tårar som förlust) — den är inte enbart positiv",
          "Att huvudpersonen gråter av glädje",
          "Att det är bra att inte binda sig",
        ],
        correct: 1,
        explanation:
          "Salt associeras till både hav (frihet, vidd) och tårar (sorg, förlust). Friheten att inte binda sig innebär samtidigt ensamhet. Denna dubbelhet sammanfattar hela textens tematik.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 9. Politisk debatt — "Klimatparadoxen"
  // -----------------------------------------------------------------------
  {
    id: "las-gym-9",
    ageGroup: "gymnasiet",
    title: "Klimatparadoxen",
    passage:
      "Det finns en besynnerlig paradox i den samtida klimatdebatten. Aldrig har vi haft mer kunskap " +
      "om vad som händer med jordens klimat, och aldrig har klyftan mellan kunskap och handling " +
      "varit större. FN:s klimatpanel konstaterar med \"mycket hög sannolikhet\" att mänsklig " +
      "aktivitet driver uppvärmningen. Ändå ökar de globala utsläppen.\n\n" +
      "Filosofen Clive Hamilton kallar detta \"det postmoderna tillståndet applicerat på " +
      "naturvetenskapen\": vi behandlar klimatforskning som om den vore en åsikt bland andra, " +
      "jämförbar med en politisk ståndpunkt. Men termodynamikens lagar bryr sig inte om " +
      "vår åsikt. Koldioxidmolekylens egenskaper förändras inte av en omröstning.\n\n" +
      "Varför handlar vi inte? Psykologen Daniel Kahneman, nobelpristagare i ekonomi, " +
      "pekar på flera kognitiva barriärer. Klimatförändringen är abstrakt, gradvis och global — " +
      "egenskaper som gör den närmast osynlig för vår evolutionärt anpassade hjärna, " +
      "som utvecklades för att reagera på omedelbara, konkreta hot som rovdjur och stormar. " +
      "Dessutom lider vi av hyperbolisk diskontering: vi värderar nutida bekvämlighet " +
      "oproportionerligt högre än framtida konsekvenser.\n\n" +
      "Men förklaringen är inte bara psykologisk. Den är strukturell. Statsvetaren Elinor Ostrom, " +
      "också nobelpristagare, visade att gemensamma resurser — som atmosfären — drabbas av " +
      "det som kallas allmänningens tragedi: varje aktör tjänar individuellt på att överutnyttja " +
      "resursen, även om det kollektiva resultatet är katastrofalt. Inget land vill bära " +
      "omställningskostnaden om andra inte gör det.\n\n" +
      "Samtidigt finns det röster som varnar för att klimatångest kan bli förlamande. " +
      "Statsvetaren och aktivisten Mary Robinson hävdar att klimatarbetet behöver en berättelse " +
      "om rättvisa, inte bara om katastrof. Om omställningen uppfattas som ett hot mot " +
      "livskvalitet kommer den att motarbetas. Om den istället ramas in som en möjlighet " +
      "till ett bättre samhälle — renare luft, grönare städer, rättvisare fördelning — " +
      "ökar sannolikheten för bred uppslutning.\n\n" +
      "Paradoxen kvarstår dock. Vi vet. Vi handlar inte tillräckligt. Och varje år som går " +
      "krymper fönstret för gradvis förändring, vilket ökar risken för att de åtgärder som " +
      "till slut krävs blir drastiska, kostsamma och potentiellt odemokratiska. " +
      "Den demokratiska utmaningen är således dubbel: att handla snabbt nog för att undvika " +
      "katastrof, men långsamt nog för att bevara den demokratiska process " +
      "som ger besluten legitimitet.",
    questions: [
      {
        id: "las-gym-9-q1",
        level: "hitta",
        prompt: "Vilka två nobelpristagare refereras i texten?",
        options: [
          "Albert Einstein och Marie Curie",
          "Daniel Kahneman och Elinor Ostrom",
          "Greta Thunberg och Al Gore",
          "Paul Crutzen och Mario Molina",
        ],
        correct: 1,
        explanation:
          "Texten refererar till psykologen Daniel Kahneman (nobelpris i ekonomi) och statsvetaren Elinor Ostrom (också nobelpristagare).",
      },
      {
        id: "las-gym-9-q2",
        level: "tolka",
        prompt: "Vad menar texten med att vi behandlar klimatforskning som \"en åsikt bland andra\"?",
        options: [
          "Att alla har rätt att tycka vad de vill",
          "Att naturvetenskapliga fakta felaktigt jämställs med politiska ståndpunkter, som om fysikens lagar vore förhandlingsbara",
          "Att forskning alltid är osäker",
          "Att klimatfrågan inte är viktig",
        ],
        correct: 1,
        explanation:
          "Texten kritiserar tendensen att behandla vetenskapliga slutsatser som åsikter. Koldioxidmolekylers egenskaper förändras inte av omröstning — det är inte en fråga om perspektiv.",
      },
      {
        id: "las-gym-9-q3",
        level: "tolka",
        prompt: "Hur bidrar begreppet \"allmänningens tragedi\" till att förklara handlingsförlamningen?",
        options: [
          "Det visar att tragedier alltid inträffar",
          "Det förklarar att varje aktör tjänar på att överutnyttja en gemensam resurs, även om alla förlorar på det kollektivt — ingen vill betala priset ensam",
          "Det handlar om teatertragedier",
          "Det visar att demokrati inte fungerar",
        ],
        correct: 1,
        explanation:
          "Allmänningens tragedi beskriver en strukturell fälla: individuell rationalitet leder till kollektiv katastrof. Inget land vill bära omställningskostnaden om andra inte gör detsamma.",
      },
      {
        id: "las-gym-9-q4",
        level: "reflektera",
        prompt: "Mary Robinson argumenterar för att klimatarbetet behöver en berättelse om rättvisa. Varför är narrativets roll central?",
        options: [
          "Människor gillar berättelser mer än fakta",
          "Hur vi ramar in ett problem avgör om människor ser det som hot eller möjlighet — och det påverkar handlingsvilja",
          "Robinson vill skriva en bok",
          "Fakta räcker alltid för att motivera handling",
        ],
        correct: 1,
        explanation:
          "Forskning visar att fakta ensamt sällan driver beteendeförändring. Om omställningen framställs som möjlighet istället för hot ökar den politiska och sociala acceptansen.",
      },
      {
        id: "las-gym-9-q5",
        level: "reflektera",
        prompt: "Textens avslutning beskriver en \"dubbel demokratisk utmaning\". Vilken grundläggande spänning handlar det om?",
        options: [
          "Att demokrati är ineffektivt och borde avskaffas",
          "Att det krävs snabb handling men att demokratiska processer tar tid — och att båda aspekterna är nödvändiga",
          "Att klimatfrågan inte kan lösas",
          "Att diktaturer är bättre på klimatpolitik",
        ],
        correct: 1,
        explanation:
          "Spänningen ligger i att klimathotet kräver snabba beslut, men att demokratiska processer kräver tid, debatt och legitimitet. Att offra demokratin för snabbhet kan leda till auktoritära lösningar.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 10. Naturlyrik — "Kärrets språk"
  // -----------------------------------------------------------------------
  {
    id: "las-gym-10",
    ageGroup: "gymnasiet",
    title: "Kärrets språk",
    passage:
      "De som aldrig gått in i ett kärr tror att det är tyst. " +
      "Det är det inte. Det har bara ett annat språk.\n\n" +
      "Först hör du andningen. Marken under fötterna andas — en fuktig, mjuk utandning " +
      "som stiger genom vitmossan varje gång du sätter ner foten. Torven rör sig under dig " +
      "som en sömn. Du går inte på fast mark utan på tusentals års samlade växtliv, " +
      "halvvägs mellan materia och minne.\n\n" +
      "Sedan vattnet. Det rör sig så långsamt att det knappt syns. Mörkt, brunfärgat av " +
      "humusämnen, med en yta som reflekterar himlen med den suddiga precision som hör " +
      "till drömmar. I vattnet lever organismer som var gamla redan innan människan uppfann " +
      "jordbruk: vitmossorna, som kan lagra tjugo gånger sin egen vikt i vatten och som " +
      "i sin dödprocess skapar den syrefria miljö som bevarar allt — pollen, frön, " +
      "ibland hela människokroppar, mumifierade av kärrets kemi.\n\n" +
      "Det är det som gör kärret till ett arkiv. Där andra ekosystem omsätter, bryter ner " +
      "och återvinner, bevarar kärret. En pollenanalys från ett svenskt kärr kan berätta " +
      "vilka träd som stod i skogen för åttatusen år sedan. Den kan visa när människan " +
      "började odla, när skogen höggs ner, när den växte tillbaka. Kärret minns " +
      "vad vi har glömt.\n\n" +
      "Men kärret är också sårbart. Dikade, torrlagda och uppodlade har Sveriges myrar " +
      "minskat med en fjärdedel sedan 1800-talet. Varje torrlagt kärr släpper lös kol " +
      "som legat bundet i årtusenden. Det som tog naturen tiotusen år att binda frigörs " +
      "på ett decennium. Paradoxen skarps: vi förstör det arkiv vi behöver för att förstå " +
      "vad vi förstör.\n\n" +
      "Jag stod vid kärrets kant en septembermorgon. Dimman låg så låg att tallarna " +
      "verkade växa ur inget. En trana ropade — det enda ljud som hördes tydligt, " +
      "en skarp ton mot mjukheten. Sedan tystnad igen. Men inte frånvaro. " +
      "Snarare en tystnad som var full. Som ett rum där någon nyss talat " +
      "och orden fortfarande hänger kvar i luften.\n\n" +
      "Kärret frågar inte efter vår uppmärksamhet. Det existerar med en tålmodighet " +
      "som överstiger vår förmåga att förstå tid. Det enda det begär — om vi kan tillåta " +
      "oss att läsa in en vilja i dess stumma kemi — är att lämnas i fred.",
    questions: [
      {
        id: "las-gym-10-q1",
        level: "hitta",
        prompt: "Hur mycket vatten kan vitmossa lagra i förhållande till sin egen vikt?",
        options: [
          "Fem gånger",
          "Tio gånger",
          "Tjugo gånger",
          "Femtio gånger",
        ],
        correct: 2,
        explanation:
          "Texten anger att vitmossor kan lagra tjugo gånger sin egen vikt i vatten.",
      },
      {
        id: "las-gym-10-q2",
        level: "tolka",
        prompt: "Vad menar författaren med att kärret är \"ett arkiv\"?",
        options: [
          "Att det finns böcker begravda i kärret",
          "Att kärrets syrefria miljö bevarar biologiskt material — pollen, frön, kroppar — som gör det möjligt att läsa tusentals års historia",
          "Att kärret är en turistattraktion",
          "Att man kan besöka kärr på museum",
        ],
        correct: 1,
        explanation:
          "Till skillnad från andra ekosystem som bryter ner material bevarar kärrets syrefria miljö biologiska spår. Pollenanalyser kan avslöja årtusenden av vegetationshistoria.",
      },
      {
        id: "las-gym-10-q3",
        level: "tolka",
        prompt: "Vilken paradox formulerar texten om förstörelsen av myrar?",
        options: [
          "Att myrar är fula men nyttiga",
          "Att vi förstör det arkiv som innehåller kunskapen om vad vi förstör — vi raderar historien vi behöver för att förstå våra misstag",
          "Att myrar luktar illa men innehåller vacker natur",
          "Att forskare studerar myrar men aldrig besöker dem",
        ],
        correct: 1,
        explanation:
          "Paradoxen är att kärret bevarar miljöhistoria som vi behöver för att förstå klimatförändringarna, men att vi förstör kärret genom samma verksamhet som orsakar förändringarna.",
      },
      {
        id: "las-gym-10-q4",
        level: "reflektera",
        prompt: "Texten blandar naturvetenskaplig information med lyrisk prosa. Vilken effekt har denna genreblandning?",
        options: [
          "Den förvirrar läsaren",
          "Den gör texten mindre trovärdig",
          "Den skapar en dubbelhet som talar till både intellekt och känsla — fakta ger tyngd åt det poetiska och det poetiska ger liv åt fakta",
          "Det är ett misstag av författaren",
        ],
        correct: 2,
        explanation:
          "Genreblandningen gör att läsaren engageras på flera plan. Vetenskapliga fakta om vitmossa och pollenanalys ger trovärdighet, medan den lyriska prosan skapar emotionell resonans.",
      },
      {
        id: "las-gym-10-q5",
        level: "reflektera",
        prompt: "Textens sista mening tillskriver kärret en vilja — \"att lämnas i fred\" — men tar samtidigt avstånd från det genom parentesen \"om vi kan tillåta oss att läsa in en vilja\". Vad uttrycker denna medvetna motsägelse?",
        options: [
          "Att författaren inte kan bestämma sig",
          "Att det är en retorisk strategi: personifikationen skapar empati för kärret men den intellektuella reservationen respekterar naturen som icke-mänsklig — spänningen mellan dessa hållningar är textens etiska kärna",
          "Att kärret verkligen har en vilja",
          "Att texten handlar om människor, inte natur",
        ],
        correct: 1,
        explanation:
          "Författaren använder personifikation medvetet men flaggar samtidigt att det är en projektion. Det skapar en etisk spänning: vi måste värna naturen utan att göra den till en spegel av oss själva.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// All texts
// ---------------------------------------------------------------------------

const ALL_READING_TEXTS: ReadingText[] = [
  ...lagstadietTexts,
  ...mellanstadietTexts,
  ...hogstadietTexts,
  ...gymnasietTexts,
];

// ---------------------------------------------------------------------------
// Helper — get texts with fallback chain
// ---------------------------------------------------------------------------

const AGE_GROUP_FALLBACKS: Record<AgeGroup, AgeGroup[]> = {
  lagstadiet: [],
  mellanstadiet: ["lagstadiet"],
  hogstadiet: ["mellanstadiet", "lagstadiet"],
  gymnasiet: ["hogstadiet", "mellanstadiet", "lagstadiet"],
};

export function getReadingTexts(ageGroup: AgeGroup): ReadingText[] {
  const exact = ALL_READING_TEXTS.filter((t) => t.ageGroup === ageGroup);
  if (exact.length > 0) return exact;

  for (const fallback of AGE_GROUP_FALLBACKS[ageGroup]) {
    const texts = ALL_READING_TEXTS.filter((t) => t.ageGroup === fallback);
    if (texts.length > 0) return texts;
  }

  return [];
}
