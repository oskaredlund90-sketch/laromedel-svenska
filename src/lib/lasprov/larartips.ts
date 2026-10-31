import type { Lasformaga } from "./typer";

/** Lärartips per läsförmåga – vad som ska tränas och hur, för gruppöversikten i /lasprov. */
export interface Larartips {
  /** Vad eleverna behöver bli bättre på, i en mening. */
  mal: string;
  /** Konkreta upplägg för lektionen. */
  upplagg: { namn: string; gor: string }[];
  /** Kort start för nästa lektion (5–10 min). */
  snabbstart: string;
}

export const LARARTIPS: Record<Lasformaga, Larartips> = {
  H: {
    mal: "Eleverna behöver läsa frågan noga, söka tillbaka i texten i stället för att svara på minnet och svara på exakt det som efterfrågas.",
    upplagg: [
      {
        namn: "Tänk högt vid tavlan",
        gor: "Visa en fråga på tavlan. Ringa in nyckelordet, skumma texten efter det och stryk under meningen där svaret står. Säg varje steg högt. Låt eleverna göra samma sak med nästa fråga i par.",
      },
      {
        namn: "Bevisjakt",
        gor: "Eleverna skriver radnummer eller citat bredvid varje svar. Svar utan rad där det står ger inga poäng. Det tvingar fram att söka tillbaka i texten.",
      },
      {
        namn: "Räkna frågans krav",
        gor: "Innan eleverna svarar ringar de in hur många exempel frågan ber om (”två skäl”, ”tre saker”) och bockar av dem i svaret.",
      },
    ],
    snabbstart: "Fem snabba ”var står det?”-frågor på en kort text. Eleverna pekar ut raden innan de svarar.",
  },
  D: {
    mal: "Eleverna behöver koppla ihop två saker i texten till något som inte står rakt ut – ofta varför en person gör eller känner något.",
    upplagg: [
      {
        namn: "Ledtråd + ledtråd = slutsats",
        gor: "Rita en enkel formel på tavlan: ”Det står att … och att …, alltså …”. Modellera med en fråga och låt eleverna fylla i formeln själva på nästa.",
      },
      {
        namn: "Detektivkort",
        gor: "Ge korta textutdrag (3–4 meningar) där känslan eller orsaken inte sägs rakt ut. Eleverna gissar och visar vilka ord som avslöjade det.",
      },
      {
        namn: "På raden – mellan raderna",
        gor: "Sortera frågor tillsammans: står svaret på raden (hitta) eller mellan raderna (slutsats)? Eleverna lär sig känna igen när de måste tänka själva.",
      },
    ],
    snabbstart: "Läs upp en mening som ”Hon smällde igen dörren och kastade väskan på golvet.” Fråga: hur känner hon sig, och hur vet du det?",
  },
  S: {
    mal: "Eleverna behöver använda hela texten, ge en egen tolkning och alltid motivera med något från texten.",
    upplagg: [
      {
        namn: "Svarsmodellen Påstå – Bevisa – Förklara",
        gor: "Sätt upp modellen synligt: ett påstående, ett citat eller exempel från texten, och en förklaring av hur beviset stöder påståendet. Jämför ett svagt och ett starkt svar på samma fråga.",
      },
      {
        namn: "Tidslinje eller tankekarta",
        gor: "Eleverna samlar det som händer med en person i början, mitten och slutet innan de svarar på en fråga om förändring eller budskap.",
      },
      {
        namn: "Två tolkningar",
        gor: "Låt par komma fram till två olika rimliga tolkningar av samma fråga och motivera båda. Det visar att det inte finns ett enda rätt svar, men att motiveringen avgör.",
      },
    ],
    snabbstart: "Ge ett elevsvar utan motivering. Klassen lägger till ”eftersom det står att …” tillsammans.",
  },
  G: {
    mal: "Eleverna behöver se på texten utifrån – vilken sorts text det är, vem den riktar sig till och hur den är skriven – och ge ett motiverat omdöme.",
    upplagg: [
      {
        namn: "Författarens verktygslåda",
        gor: "Gå igenom en text och leta upp författarens val: rubrik, ordval, bilder, inledning, slut. Fråga för varje val: varför gjorde författaren så?",
      },
      {
        namn: "Jämför två texter",
        gor: "Ställ en faktatext och en berättelse (eller en reklam) om samma ämne bredvid varandra. Vad vill de, vem skriver de för, vad skiljer?",
      },
      {
        namn: "Omdöme med stöd",
        gor: "Träna meningen ”Jag tycker att texten är … eftersom …, till exempel …”. Ett omdöme utan exempel räknas inte.",
      },
    ],
    snabbstart: "Visa en rubrik och en bild från en artikel. Vad vill texten få läsaren att tycka?",
  },
};

/** Tips när många elever inte hinner klart. */
export const UTHALLIGHETSTIPS: string[] = [
  "Träna läsuthållighet: 15–20 minuters tyst läsning varje lektion i en bok på rätt nivå.",
  "Lär ut att svara kort på hitta-frågorna och lägga tiden på frågorna som ger mest poäng.",
  "Låt eleverna öva på ett provhäfte med tidtagning – hur långt hinner jag på 20 minuter?",
  "Elever som läser långsamt kan läsa samma text högt flera gånger (upprepad läsning) för att öka flytet.",
];
