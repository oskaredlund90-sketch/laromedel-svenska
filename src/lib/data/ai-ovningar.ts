import type { AgeGroup } from "@/lib/supabase/types";

/* ── Övningstyper ─────────────────────────────────────────────────────── */

export interface PromptImproveExercise {
  type: "prompt-improve";
  id: string;
  badPrompt: string;
  context: string;
  tips: string[];
  exampleGoodPrompt: string;
}

export interface HallucinationExercise {
  type: "hallucination";
  id: string;
  intro: string;
  statements: {
    text: string;
    isTrue: boolean;
    explanation: string;
  }[];
}

export interface SourceCritiqueExercise {
  type: "source-critique";
  id: string;
  aiText: string;
  topic: string;
  questions: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
}

export type AiExercise =
  | PromptImproveExercise
  | HallucinationExercise
  | SourceCritiqueExercise;

/* ── Övningsdata ──────────────────────────────────────────────────────── */

const EXERCISES: Record<string, AiExercise[]> = {
  lagstadiet: [
    {
      type: "hallucination",
      id: "lag-hall-1",
      intro: "En AI skrev fem fakta om Sverige. Men några stämmer inte! Klicka på de som du tror är SANT.",
      statements: [
        { text: "Sveriges huvudstad heter Stockholm.", isTrue: true, explanation: "Rätt! Stockholm är Sveriges huvudstad." },
        { text: "Sverige har ungefär 10 miljoner invånare.", isTrue: true, explanation: "Rätt! Sverige har ungefär 10,5 miljoner invånare." },
        { text: "Den svenska flaggan är röd och vit.", isTrue: false, explanation: "Fel! Den svenska flaggan är blå och gul." },
        { text: "I Sverige pratar man svenska.", isTrue: true, explanation: "Rätt! Svenska är Sveriges officiella språk." },
        { text: "Sveriges längsta flod heter Amazonfloden.", isTrue: false, explanation: "Fel! Amazonfloden finns i Sydamerika. Sveriges längsta flod heter Torne älv." },
      ],
    },
    {
      type: "hallucination",
      id: "lag-hall-2",
      intro: "En AI berättade om djur i Sverige. Vilka fakta stämmer?",
      statements: [
        { text: "Älgen är Sveriges största vilda djur.", isTrue: true, explanation: "Rätt! Älgen kan väga upp till 800 kg." },
        { text: "Det finns vilda lejon i Sverige.", isTrue: false, explanation: "Fel! Lejon lever i Afrika, inte i Sverige." },
        { text: "Igelkotten går i ide på vintern.", isTrue: true, explanation: "Rätt! Igelkotten sover hela vintern." },
        { text: "Ekorren har alltid blå päls.", isTrue: false, explanation: "Fel! Ekorren har rödbrun päls på sommaren och gråbrun på vintern." },
        { text: "Räven äter både bär och smådjur.", isTrue: true, explanation: "Rätt! Räven är allätare." },
      ],
    },
    {
      type: "prompt-improve",
      id: "lag-prompt-1",
      badPrompt: "Skriv om hundar",
      context: "Du vill skriva en faktatext om hundar i skolan.",
      tips: [
        "Berätta vilken sorts text du ska skriva",
        "Säg vad du vill veta om hundar",
        "Berätta hur gammal du är",
      ],
      exampleGoodPrompt: "Jag går i åk 2 och ska skriva en faktatext om hundar. Kan du berätta fem roliga fakta om hundar som jag kan använda? Skriv så en 8-åring förstår.",
    },
  ],

  mellanstadiet: [
    {
      type: "hallucination",
      id: "mel-hall-1",
      intro: "En AI skrev om vikingarna. Vilka påståenden är sanna?",
      statements: [
        { text: "Vikingarna levde ungefär 800–1100 e.Kr.", isTrue: true, explanation: "Rätt! Vikingatiden varade ca 793–1066." },
        { text: "Vikingarna hade alltid hornhjälmar.", isTrue: false, explanation: "Fel! Det finns inga bevis för att vikingarna bar hornhjälmar. Det är en myt." },
        { text: "Vikingarna reste till Nordamerika.", isTrue: true, explanation: "Rätt! Leif Eriksson nådde Nordamerika runt år 1000." },
        { text: "Vikingarna kunde bara segla, inte rida.", isTrue: false, explanation: "Fel! Vikingarna använde hästar och red ofta." },
        { text: "Runskrift var vikingarnas sätt att skriva.", isTrue: true, explanation: "Rätt! Runor ristades i sten, trä och ben." },
        { text: "Vikingarna uppfann krutet.", isTrue: false, explanation: "Fel! Krutet uppfanns i Kina, inte av vikingarna." },
      ],
    },
    {
      type: "source-critique",
      id: "mel-kalla-1",
      topic: "Klimatförändringar",
      aiText: "Klimatförändringar beror helt och hållet på naturliga orsaker som vulkanutbrott och solaktivitet. Forskare är oense om människans påverkan. Temperaturen har bara ökat med 0,1 grader sedan 1900.",
      questions: [
        {
          question: "Stämmer det att klimatförändringar beror 'helt och hållet' på naturliga orsaker?",
          options: ["Ja, det stämmer", "Nej, forskare är överens om att människan bidrar", "Det vet man inte"],
          correct: 1,
          explanation: "Det vetenskapliga samhället (IPCC) är i stort sett enigt: människans utsläpp av växthusgaser bidrar starkt till klimatförändringarna.",
        },
        {
          question: "AI:n skriver att temperaturen bara ökat med 0,1 grader. Stämmer det?",
          options: ["Ja, det stämmer", "Nej, den har ökat med ungefär 1,1 grader", "Den har minskat"],
          correct: 1,
          explanation: "Den globala medeltemperaturen har ökat med ungefär 1,1°C sedan förindustriell tid. AI:n underdrev kraftigt.",
        },
        {
          question: "Vad bör du göra med den här texten?",
          options: ["Lita på den – AI vet mycket", "Kolla fakta i andra källor, t.ex. SMHI eller NE", "Ignorera den helt"],
          correct: 1,
          explanation: "Du ska alltid dubbelkolla AI-text mot pålitliga källor. SMHI och NE är bra alternativ.",
        },
      ],
    },
    {
      type: "prompt-improve",
      id: "mel-prompt-1",
      badPrompt: "Hjälp mig med läxan",
      context: "Du ska skriva en argumenterande text om skärmtid för barn.",
      tips: [
        "Beskriv uppgiften – vad ska du skriva?",
        "Be om idéer eller feedback, inte en färdig text",
        "Berätta vilken årskurs du går i",
        "Säg vad du redan har gjort",
      ],
      exampleGoodPrompt: "Jag går i åk 5 och ska skriva en argumenterande text om huruvida barn borde ha begränsad skärmtid. Jag har valt att argumentera FÖR begränsad skärmtid. Kan du ge mig fyra starka argument som jag kan utveckla med egna ord?",
    },
  ],

  hogstadiet: [
    {
      type: "hallucination",
      id: "hog-hall-1",
      intro: "En AI rekommenderade svenska böcker. Men stämmer allt?",
      statements: [
        { text: "Astrid Lindgren skrev 'Pippi Långstrump' (1945).", isTrue: true, explanation: "Rätt! Pippi Långstrump publicerades 1945." },
        { text: "August Strindberg skrev romanen 'Doktor Glas' (1905).", isTrue: false, explanation: "Fel! 'Doktor Glas' skrevs av Hjalmar Söderberg, inte Strindberg." },
        { text: "Selma Lagerlöf var den första kvinnan att få Nobelpriset i litteratur.", isTrue: true, explanation: "Rätt! Selma Lagerlöf fick priset 1909." },
        { text: "Jonas Hassen Khemiri debuterade med 'Ett öga rött' (2003).", isTrue: true, explanation: "Rätt! Romanen handlar om en ung kille i förorten." },
        { text: "Vilhelm Moberg skrev trilogin 'Hunger, Skuld och Frihet'.", isTrue: false, explanation: "Fel! Mobergs utvandrarsvit heter 'Utvandrarna', 'Invandrarna', 'Nybyggarna' och 'Sista brevet till Sverige'." },
        { text: "Tove Jansson är känd för sina Mumin-böcker.", isTrue: true, explanation: "Rätt! Tove Jansson skapade Mumin och skrev både barnböcker och vuxenlitteratur." },
      ],
    },
    {
      type: "source-critique",
      id: "hog-kalla-1",
      topic: "Sociala medier och ungdomar",
      aiText: "Forskning visar entydigt att sociala medier orsakar depression hos ungdomar. En studie från Harvard 2024 visade att 85% av alla tonåringar som använder TikTok mer än en timme om dagen utvecklar ångest. Experter rekommenderar att alla under 18 förbjuds från sociala medier.",
      questions: [
        {
          question: "AI:n hänvisar till 'en studie från Harvard 2024'. Vad bör du göra?",
          options: ["Lita på det – Harvard är seriöst", "Söka upp studien och kontrollera att den finns", "Ignorera källan"],
          correct: 1,
          explanation: "AI hittar ofta på studier och källor som inte existerar ('hallucinationer'). Du måste alltid verifiera att källan faktiskt finns.",
        },
        {
          question: "Texten säger att forskningen 'entydigt' visar ett samband. Är det troligt?",
          options: ["Ja, forskningen är enig", "Nej, sambandet är mer komplicerat och forskare är inte helt eniga", "Det finns ingen forskning alls"],
          correct: 1,
          explanation: "Sambandet mellan sociala medier och psykisk ohälsa är omdiskuterat. Forskningen visar blandade resultat och det är inte 'entydigt'.",
        },
        {
          question: "Siffran '85%' – vad tyder den på?",
          options: ["Ett pålitligt forskningsresultat", "En trolig överdrift eller fabricering av AI", "En uppskattning som är ungefär rätt"],
          correct: 1,
          explanation: "Extremt höga procentsiffror i specifika påståenden är ofta påhittade av AI. Var extra skeptisk mot precisa siffror.",
        },
        {
          question: "Hur skulle du bedöma den här AI-textens trovärdighet?",
          options: ["Hög – den nämner forskning och Harvard", "Låg – den gör starka påståenden utan verifierbara källor", "Medel – den har rätt i stort"],
          correct: 1,
          explanation: "Att nämna kända institutioner gör inte texten automatiskt trovärdig. Stark retorik + oprecisa källor + extrema siffror = varningsflaggor.",
        },
      ],
    },
    {
      type: "prompt-improve",
      id: "hog-prompt-1",
      badPrompt: "Analysera dikten",
      context: "Du ska analysera Karin Boyes dikt 'I rörelse' och skriva en litterär analys.",
      tips: [
        "Nämn diktens titel och författare",
        "Be om hjälp att analysera, inte en färdig analys",
        "Specificera vad du vill fokusera på (bildspråk, tema, form)",
        "Signalera att du vill tänka själv",
      ],
      exampleGoodPrompt: "Jag ska analysera Karin Boyes dikt 'I rörelse'. Kan du ställa mig fem frågor om diktens bildspråk och tema som hjälper mig att tänka djupare? Jag vill inte ha en färdig analys – jag vill öva på att hitta tolkningar själv.",
    },
  ],

  gymnasiet: [
    {
      type: "hallucination",
      id: "gym-hall-1",
      intro: "En AI skrev om svensk litteraturhistoria. Identifiera vad som stämmer.",
      statements: [
        { text: "Naturalismen i Sverige representeras bland annat av August Strindberg.", isTrue: true, explanation: "Rätt! Strindbergs 'Fröken Julie' (1888) är ett centralt naturalistiskt verk." },
        { text: "Karin Boye skrev den dystopiska romanen 'Kallocain' (1940).", isTrue: true, explanation: "Rätt! Kallocain handlar om ett totalitärt samhälle och framtiden." },
        { text: "Carl Jonas Love Almqvist tillhörde den modernistiska eran på 1920-talet.", isTrue: false, explanation: "Fel! Almqvist levde 1793–1866 och tillhör romantiken/liberalismen, inte modernismen." },
        { text: "Edith Södergran är en finlandssvensk poet och en av modernismens pionjärer.", isTrue: true, explanation: "Rätt! Södergran debuterade 1916 med 'Dikter' och förnyade den nordiska poesin." },
        { text: "Nobelpriset i litteratur har aldrig gått till en svensk författare efter Lagerlöf.", isTrue: false, explanation: "Fel! Bland andra Harry Martinson och Eyvind Johnson fick Nobelpriset 1974." },
        { text: "Sara Lidmans 'Hjortronlandet' (1955) skildrar livet i norrländsk glesbygd.", isTrue: true, explanation: "Rätt! Lidman är känd för sina skildringar av Norrland." },
      ],
    },
    {
      type: "source-critique",
      id: "gym-kalla-1",
      topic: "AI och upphovsrätt",
      aiText: "Enligt en dom i EU-domstolen 2025 är all AI-genererad text fri att använda utan upphovsrättsliga begränsningar, eftersom AI inte är en juridisk person. Forskare vid Oxford menar att detta kan leda till att 40% av alla skribenter förlorar sina jobb inom fem år. Sverige har infört en ny lag som förbjuder AI-genererad text i akademiska uppsatser.",
      questions: [
        {
          question: "AI:n nämner 'en dom i EU-domstolen 2025'. Hur bör du förhålla dig?",
          options: ["Acceptera – EU-domstolen är en verklig institution", "Verifiera – AI fabricerar ofta rättsfall", "Ignorera juridiken helt"],
          correct: 1,
          explanation: "AI hittar ofta på specifika domar och juridiska beslut. Att institutionen är verklig betyder inte att det specifika fallet existerar.",
        },
        {
          question: "Påståendet att '40% av alla skribenter förlorar sina jobb inom fem år' – hur tolkar du det?",
          options: ["En rimlig prognos baserad på forskning", "Troligen fabricerad statistik – precisa prognoser om framtiden är osäkra", "En underdrift av problemet"],
          correct: 1,
          explanation: "Precisa framtidsprognoser från AI bör alltid ifrågasättas. De bygger på mönster i träningsdata, inte faktisk framtidskunskap.",
        },
        {
          question: "Texten påstår att Sverige 'infört en ny lag' om AI i akademiska uppsatser. Vad gör du?",
          options: ["Letar upp lagen på riksdagen.se", "Litar på AI – den borde veta svensk lag", "Skriver ett mejl till utbildningsministern"],
          correct: 0,
          explanation: "Sök alltid upp påstådda lagar i primärkällan (riksdagen.se, Skolverket). AI kan blanda ihop diskussioner med faktiska beslut.",
        },
      ],
    },
    {
      type: "prompt-improve",
      id: "gym-prompt-1",
      badPrompt: "Skriv en uppsats om språkförändringar",
      context: "Du skriver en utredande text om hur sociala medier påverkar det svenska skriftspråket.",
      tips: [
        "Definiera din tes och frågeställning",
        "Be om kritik, inte en färdig text",
        "Specificera akademisk nivå och struktur",
        "Be AI agera opponent eller bollplank",
      ],
      exampleGoodPrompt: "Jag skriver en utredande text (Svenska 3) om hur sociala medier påverkar det svenska skriftspråket. Min tes är att förkortningar och anglicismer leder till en kreolisering av svenskan. Kan du agera opponent: identifiera tre svagheter i min tes och föreslå motargument jag bör adressera? Ge gärna tips på vilken typ av evidens som skulle stärka min argumentation.",
    },
  ],
};

/* ── Helper ────────────────────────────────────────────────────────────── */

export function getAiExercises(ageGroup: AgeGroup): AiExercise[] {
  return EXERCISES[ageGroup] ?? EXERCISES.hogstadiet;
}
