"use client";

import { useState, useCallback, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw, Dumbbell } from "lucide-react";
import type { AgeGroup } from "@/lib/supabase/types";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type Difficulty = "enkel" | "medel" | "svar";

interface Question {
  id: string;
  sentence: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: Difficulty;
}

interface Category {
  key: string;
  label: string;
  description: string;
  questions: Question[];
}

/* -------------------------------------------------------------------------- */
/*  Age-group configuration                                                   */
/* -------------------------------------------------------------------------- */

const AGE_GROUP_CONFIG: Record<
  AgeGroup,
  { allowedDifficulties: Difficulty[]; allowedCategories: string[]; label: string }
> = {
  lagstadiet: {
    allowedDifficulties: ["enkel"],
    allowedCategories: ["ordklasser", "stavning"],
    label: "Lågstadiet (åk 1-3)",
  },
  mellanstadiet: {
    allowedDifficulties: ["enkel", "medel"],
    allowedCategories: ["ordklasser", "skiljetecken", "stavning", "sambandsord"],
    label: "Mellanstadiet (åk 4-6)",
  },
  hogstadiet: {
    allowedDifficulties: ["enkel", "medel", "svar"],
    allowedCategories: ["ordklasser", "sambandsord", "skiljetecken", "stavning", "de-dem", "verbbojning"],
    label: "Högstadiet (åk 7-9)",
  },
  gymnasiet: {
    allowedDifficulties: ["enkel", "medel", "svar"],
    allowedCategories: ["ordklasser", "sambandsord", "skiljetecken", "stavning", "de-dem", "verbbojning"],
    label: "Gymnasiet",
  },
};

/* -------------------------------------------------------------------------- */
/*  Difficulty helpers                                                        */
/* -------------------------------------------------------------------------- */

const ALL_DIFFICULTY_OPTIONS: { value: Difficulty | "alla"; label: string }[] = [
  { value: "alla", label: "Alla" },
  { value: "enkel", label: "Enkel" },
  { value: "medel", label: "Medel" },
  { value: "svar", label: "Svår" },
];

function difficultyBadge(d: Difficulty) {
  const map: Record<Difficulty, { bg: string; text: string; label: string }> = {
    enkel: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-300", label: "Enkel" },
    medel: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-300", label: "Medel" },
    svar: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-300", label: "Svår" },
  };
  const s = map[d];
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${s.bg} ${s.text}`}>
      {s.label}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data – 6 categories, ~25 questions each = ~150 total                     */
/* -------------------------------------------------------------------------- */

const ALL_CATEGORIES: Category[] = [
  /* ---- Ordklasser ---- */
  {
    key: "ordklasser",
    label: "Ordklasser",
    description: "Vilken ordklass tillhör det markerade ordet?",
    questions: [
      {
        id: "ok1",
        sentence: 'Katten **sov** på soffan.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 1,
        explanation: '"Sov" är ett verb eftersom det beskriver en handling.',
        difficulty: "enkel",
      },
      {
        id: "ok2",
        sentence: 'Den **stora** hunden skällde.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 2,
        explanation: '"Stora" är ett adjektiv eftersom det beskriver hur hunden är.',
        difficulty: "enkel",
      },
      {
        id: "ok3",
        sentence: '**Hon** läser en bok.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 3,
        explanation: '"Hon" är ett pronomen eftersom det ersätter ett substantiv.',
        difficulty: "enkel",
      },
      {
        id: "ok4",
        sentence: 'Vi sprang **snabbt** hem.',
        options: ["Adjektiv", "Verb", "Adverb", "Preposition"],
        correct: 2,
        explanation: '"Snabbt" är ett adverb eftersom det beskriver hur man sprang.',
        difficulty: "medel",
      },
      {
        id: "ok5",
        sentence: 'Bollen rullade **under** bordet.',
        options: ["Adverb", "Konjunktion", "Preposition", "Pronomen"],
        correct: 2,
        explanation: '"Under" är en preposition eftersom det anger var bollen rullade.',
        difficulty: "medel",
      },
      {
        id: "ok6",
        sentence: 'De åkte till Paris **och** London.',
        options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
        correct: 1,
        explanation: '"Och" är en konjunktion eftersom det binder samman två led.',
        difficulty: "enkel",
      },
      {
        id: "ok7",
        sentence: '**Tyvärr** kunde vi inte komma.',
        options: ["Adjektiv", "Adverb", "Konjunktion", "Interjektion"],
        correct: 1,
        explanation: '"Tyvärr" är ett adverb (satsadverb) som kommenterar hela satsen.',
        difficulty: "medel",
      },
      {
        id: "ok8",
        sentence: 'Det är **hans** bil.',
        options: ["Pronomen", "Adjektiv", "Substantiv", "Verb"],
        correct: 0,
        explanation: '"Hans" är ett possessivt pronomen som visar ägande.',
        difficulty: "medel",
      },
      {
        id: "ok9",
        sentence: '**Oj**, vilken fin tavla!',
        options: ["Adverb", "Konjunktion", "Preposition", "Interjektion"],
        correct: 3,
        explanation: '"Oj" är en interjektion – ett utrop som uttrycker känslor.',
        difficulty: "svar",
      },
      {
        id: "ok10",
        sentence: 'Boken som **jag** läste var spännande.',
        options: ["Substantiv", "Pronomen", "Konjunktion", "Adverb"],
        correct: 1,
        explanation: '"Jag" är ett personligt pronomen i subjektsform.',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "ok11",
        sentence: 'Jag har en **hund**.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 0,
        explanation: '"Hund" är ett substantiv – det är ett namn på ett djur. Substantiv är ord för saker, personer och djur.',
        difficulty: "enkel",
      },
      {
        id: "ok12",
        sentence: 'Lisa **äter** en smörgås.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 1,
        explanation: '"Äter" är ett verb – det talar om vad Lisa gör. Verb kallas ibland "görord".',
        difficulty: "enkel",
      },
      {
        id: "ok13",
        sentence: 'Den **röda** bilen kör fort.',
        options: ["Substantiv", "Verb", "Adjektiv", "Preposition"],
        correct: 2,
        explanation: '"Röda" är ett adjektiv – det beskriver bilens färg. Adjektiv talar om hur något är.',
        difficulty: "enkel",
      },
      {
        id: "ok14",
        sentence: '**Vi** leker i parken.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 3,
        explanation: '"Vi" är ett pronomen – det står i stället för namnen på personerna som leker.',
        difficulty: "enkel",
      },
      {
        id: "ok15",
        sentence: 'Pappa **springer** till bussen.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 1,
        explanation: '"Springer" är ett verb – det beskriver vad pappa gör. Fråga: "Vad gör pappa?" Svar: "Springer."',
        difficulty: "enkel",
      },
      {
        id: "ok16",
        sentence: 'Jag har en **liten** katt.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 2,
        explanation: '"Liten" är ett adjektiv – det beskriver hur katten är. Fråga: "Hurdan är katten?" Svar: "Liten."',
        difficulty: "enkel",
      },
      {
        id: "ok17",
        sentence: 'Mamma la boken **på** bordet.',
        options: ["Adverb", "Konjunktion", "Preposition", "Verb"],
        correct: 2,
        explanation: '"På" är en preposition – det visar var boken lades. Prepositioner talar om var något är eller sker.',
        difficulty: "enkel",
      },
      {
        id: "ok18",
        sentence: 'Vi sprang hem **men** det regnade.',
        options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
        correct: 1,
        explanation: '"Men" är en konjunktion – det binder ihop två satser och visar en motsats.',
        difficulty: "enkel",
      },
      {
        id: "ok19",
        sentence: 'Barnet sov **lugnt** i vagnen.',
        options: ["Adjektiv", "Substantiv", "Adverb", "Verb"],
        correct: 2,
        explanation: '"Lugnt" är ett adverb här – det beskriver hur barnet sov. Adverb beskriver verb, adjektiv eller andra adverb.',
        difficulty: "medel",
      },
      {
        id: "ok20",
        sentence: 'Den **gamle** mannen gick sakta.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 2,
        explanation: '"Gamle" är ett adjektiv i bestämd form som beskriver mannen. I bestämda formen får många adjektiv ändelsen -e.',
        difficulty: "medel",
      },
      {
        id: "ok21",
        sentence: 'Hon gick **förbi** utan att säga något.',
        options: ["Preposition", "Konjunktion", "Adverb", "Verb"],
        correct: 2,
        explanation: '"Förbi" är ett adverb här – det beskriver hur hon gick. Det finns inget substantiv efter, så det är inte en preposition.',
        difficulty: "medel",
      },
      {
        id: "ok22",
        sentence: '**Denna** bok är mycket spännande.',
        options: ["Pronomen", "Adjektiv", "Adverb", "Konjunktion"],
        correct: 0,
        explanation: '"Denna" är ett demonstrativt pronomen – det pekar ut en bestämd bok, precis som "den här".',
        difficulty: "svar",
      },
      {
        id: "ok23",
        sentence: 'Han är den **snällaste** läraren.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 2,
        explanation: '"Snällaste" är ett adjektiv i superlativ (högsta grad). Positiv: snäll, komparativ: snällare, superlativ: snällast(e).',
        difficulty: "svar",
      },
      {
        id: "ok24",
        sentence: '**Att** läsa är roligt.',
        options: ["Pronomen", "Konjunktion", "Subjunktion", "Preposition"],
        correct: 2,
        explanation: '"Att" är en subjunktion (infinitivmärke) här – det inleder en infinitivfras. Det binder samman "läsa" med resten av satsen.',
        difficulty: "svar",
      },
      {
        id: "ok25",
        sentence: 'Huset **vars** tak var rött låg vid sjön.',
        options: ["Pronomen", "Konjunktion", "Preposition", "Adverb"],
        correct: 0,
        explanation: '"Vars" är ett relativt pronomen i genitiv – det syftar tillbaka på "huset" och visar ägande (husets tak).',
        difficulty: "svar",
      },
    ],
  },

  /* ---- Sambandsord ---- */
  {
    key: "sambandsord",
    label: "Sambandsord",
    description: "Välj rätt sambandsord för att fylla i luckan.",
    questions: [
      {
        id: "sb1",
        sentence: "Jag ville gå ut, ___ det regnade.",
        options: ["men", "och", "så", "eller"],
        correct: 0,
        explanation: '"Men" visar en motsats – du ville gå ut trots regnet.',
        difficulty: "enkel",
      },
      {
        id: "sb2",
        sentence: "Hon studerade mycket. ___ fick hon bra betyg.",
        options: ["Men", "Dessutom", "Därför", "Fastän"],
        correct: 2,
        explanation: '"Därför" visar orsak och verkan – studier ledde till bra betyg.',
        difficulty: "enkel",
      },
      {
        id: "sb3",
        sentence: "Vi kan åka till stranden ___ till skogen.",
        options: ["men", "därför", "eller", "eftersom"],
        correct: 2,
        explanation: '"Eller" visar ett val mellan två alternativ.',
        difficulty: "enkel",
      },
      {
        id: "sb4",
        sentence: "Han var trött ___ han hade sovit dåligt.",
        options: ["men", "eftersom", "eller", "dessutom"],
        correct: 1,
        explanation: '"Eftersom" förklarar orsaken till att han var trött.',
        difficulty: "medel",
      },
      {
        id: "sb5",
        sentence: "Maten var god. ___ var den billig.",
        options: ["Men", "Dessutom", "Därför", "Trots att"],
        correct: 1,
        explanation: '"Dessutom" lägger till ytterligare information.',
        difficulty: "medel",
      },
      {
        id: "sb6",
        sentence: "___ hon var sjuk, gick hon till skolan.",
        options: ["Eftersom", "Trots att", "Därför att", "Dessutom"],
        correct: 1,
        explanation: '"Trots att" visar att något hände fast det var oväntat.',
        difficulty: "medel",
      },
      {
        id: "sb7",
        sentence: "Vi måste skynda oss, ___ annars missar vi bussen.",
        options: ["men", "för", "eller", "och"],
        correct: 1,
        explanation: '"För" ger en förklaring eller anledning.',
        difficulty: "medel",
      },
      {
        id: "sb8",
        sentence: "Först äter vi frukost. ___ går vi till skolan.",
        options: ["Därför", "Sedan", "Dessutom", "Fastän"],
        correct: 1,
        explanation: '"Sedan" visar tidsordning – vad som händer efter.',
        difficulty: "enkel",
      },
      {
        id: "sb9",
        sentence: "Han pluggade inte. ___ fick han underkänt.",
        options: ["Dessutom", "Trots det", "Följaktligen", "Snarare"],
        correct: 2,
        explanation: '"Följaktligen" är ett formellt ord som visar konsekvens.',
        difficulty: "svar",
      },
      {
        id: "sb10",
        sentence: "Filmen var lång. ___ var den väldigt underhållande.",
        options: ["Därför", "Även om", "Icke desto mindre", "På grund av"],
        correct: 2,
        explanation: '"Icke desto mindre" är ett formellt sambandsord som visar motsats trots föregående påstående.',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "sb11",
        sentence: "Jag gillar glass ___ tårta.",
        options: ["men", "och", "eller", "därför"],
        correct: 1,
        explanation: '"Och" används när man räknar upp saker man gillar – det lägger ihop två saker.',
        difficulty: "enkel",
      },
      {
        id: "sb12",
        sentence: "Det var kallt ute ___ jag tog på mig en jacka.",
        options: ["men", "eller", "så", "fast"],
        correct: 2,
        explanation: '"Så" visar vad som hände som följd av att det var kallt – det var kallt, och därför tog jag på mig en jacka.',
        difficulty: "enkel",
      },
      {
        id: "sb13",
        sentence: "Vill du ha saft ___ vatten?",
        options: ["och", "men", "eller", "så"],
        correct: 2,
        explanation: '"Eller" används när man väljer mellan två saker. Här får man välja mellan saft och vatten.',
        difficulty: "enkel",
      },
      {
        id: "sb14",
        sentence: "Jag ville sova, ___ jag var inte trött.",
        options: ["och", "men", "så", "eller"],
        correct: 1,
        explanation: '"Men" visar motsats – att vilja sova och att inte vara trött är motsatta saker.',
        difficulty: "enkel",
      },
      {
        id: "sb15",
        sentence: "Vi lekte ute. ___ gick vi in och åt.",
        options: ["Men", "Sedan", "Eller", "Därför"],
        correct: 1,
        explanation: '"Sedan" visar vad som hände i nästa steg – först lekte vi, sedan åt vi.',
        difficulty: "enkel",
      },
      {
        id: "sb16",
        sentence: "Han stannade hemma ___ han var sjuk.",
        options: ["men", "därför att", "eller", "dessutom"],
        correct: 1,
        explanation: '"Därför att" förklarar anledningen – varför stannade han hemma? Därför att han var sjuk.',
        difficulty: "medel",
      },
      {
        id: "sb17",
        sentence: "___ det regnade tog vi bussen istället för att gå.",
        options: ["Trots att", "Eftersom", "Men", "Dessutom"],
        correct: 1,
        explanation: '"Eftersom" anger orsaken först i meningen – regnet var anledningen till att vi tog bussen.',
        difficulty: "medel",
      },
      {
        id: "sb18",
        sentence: "Boken var bra. ___ var slutet lite överraskande.",
        options: ["Men", "Därför", "Eftersom", "Så"],
        correct: 0,
        explanation: '"Men" lägger till en kontrasterande kommentar – boken var bra, men slutet var annorlunda än väntat.',
        difficulty: "medel",
      },
      {
        id: "sb19",
        sentence: "Vi hade lite tid. ___ hann vi med allt.",
        options: ["Därför", "Ändå", "Dessutom", "Eftersom"],
        correct: 1,
        explanation: '"Ändå" visar att resultatet var oväntat – trots lite tid lyckades vi med allt.',
        difficulty: "medel",
      },
      {
        id: "sb20",
        sentence: "Först gick vi till affären, ___ till biblioteket.",
        options: ["men", "därefter", "därför", "eftersom"],
        correct: 1,
        explanation: '"Därefter" visar tidsordning precis som "sedan" – det talar om vad som hände i nästa steg.',
        difficulty: "medel",
      },
      {
        id: "sb21",
        sentence: "Resan var dyr. ___ var upplevelsen helt fantastisk.",
        options: ["Därför", "Å andra sidan", "Dessutom", "På grund av"],
        correct: 1,
        explanation: '"Å andra sidan" visar att man ser saken från ett annat perspektiv – det ger en motvikt till det första påståendet.',
        difficulty: "svar",
      },
      {
        id: "sb22",
        sentence: "Ekonomin försvagas. ___ ökar arbetslösheten.",
        options: ["Trots det", "Till följd av detta", "Å ena sidan", "Snarare"],
        correct: 1,
        explanation: '"Till följd av detta" är ett formellt sambandsord som visar att det ena är en konsekvens av det andra.',
        difficulty: "svar",
      },
      {
        id: "sb23",
        sentence: "Han påstod att han var oskyldig. Bevisningen talade ___ emot honom.",
        options: ["dessutom", "däremot", "följaktligen", "såldes"],
        correct: 1,
        explanation: '"Däremot" används för att kontrastera två påståenden – hans ord mot bevisningen.',
        difficulty: "svar",
      },
      {
        id: "sb24",
        sentence: "Forskningen visar tydliga resultat. ___ kan man dra slutsatsen att metoden fungerar.",
        options: ["Trots det", "Såldes", "Snarare", "Även om"],
        correct: 1,
        explanation: '"Såldes" är ett formellt sambandsord som drar en logisk slutsats från det som tidigare sagts.',
        difficulty: "svar",
      },
      {
        id: "sb25",
        sentence: "Det är inte frågan om att ge upp. ___ handlar det om att hitta nya vägar.",
        options: ["Dessutom", "Snarare", "Därför", "Trots att"],
        correct: 1,
        explanation: '"Snarare" används för att korrigera eller nyansera ett tidigare påstående – det är inte X, utan snarare Y.',
        difficulty: "svar",
      },
    ],
  },

  /* ---- Skiljetecken ---- */
  {
    key: "skiljetecken",
    label: "Skiljetecken",
    description: "Vilket skiljetecken saknas i meningen?",
    questions: [
      {
        id: "st1",
        sentence: "Vad heter du_",
        options: [".", "!", "?", ","],
        correct: 2,
        explanation: "Frågor avslutas alltid med frågetecken.",
        difficulty: "enkel",
      },
      {
        id: "st2",
        sentence: "Jag köpte mjölk_ bröd och ost.",
        options: [".", "!", ";", ","],
        correct: 3,
        explanation: "Kommatecken används för att separera delar i en uppräkning.",
        difficulty: "enkel",
      },
      {
        id: "st3",
        sentence: "Se upp_",
        options: [".", "!", "?", ","],
        correct: 1,
        explanation: "Utrop och varningar avslutas med utropstecken.",
        difficulty: "enkel",
      },
      {
        id: "st4",
        sentence: '"Hej_ sa Anna.',
        options: [",", ".", "!", "?"],
        correct: 0,
        explanation: "När repliken följs av en talstreck-fras används kommatecken.",
        difficulty: "medel",
      },
      {
        id: "st5",
        sentence: "Han älskar att läsa_ det är hans hobby.",
        options: [",", ".", ";", "!"],
        correct: 2,
        explanation: "Semikolon binder ihop två självständiga satser som hänger ihop.",
        difficulty: "medel",
      },
      {
        id: "st6",
        sentence: "Vi hade med oss allt_ tält, sovsäckar och mat.",
        options: [".", ":", ";", "!"],
        correct: 1,
        explanation: "Kolon används före en uppräkning eller förklaring.",
        difficulty: "medel",
      },
      {
        id: "st7",
        sentence: "Vilken vacker solnedgång_",
        options: [".", "?", ",", "!"],
        correct: 3,
        explanation: "Utrop avslutas med utropstecken även när de börjar med 'vilken'.",
        difficulty: "enkel",
      },
      {
        id: "st8",
        sentence: 'Han sa_ "Jag kommer snart."',
        options: [",", ":", ";", "."],
        correct: 1,
        explanation: "Kolon används före ett citat eller direkt anföringstal.",
        difficulty: "medel",
      },
      {
        id: "st9",
        sentence: "Stockholm_ Sveriges huvudstad_ ligger på fjorton öar.",
        options: ["– och –", ", och ,", ", och –", "( och )"],
        correct: 0,
        explanation: "Tankstreck används parvis för att rama in en inskjuten bisats (apposition).",
        difficulty: "svar",
      },
      {
        id: "st10",
        sentence: "Hon har bott i många länder_ Frankrike_ Spanien_ Japan och Brasilien.",
        options: [": , , ,", "; , , ,", ": ; ; ;", ", , , ,"],
        correct: 0,
        explanation: "Kolon före uppräkningen och kommatecken mellan leden.",
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "st11",
        sentence: "Jag heter Lisa_",
        options: ["!", "?", ".", ","],
        correct: 2,
        explanation: "En vanlig mening som berättar något avslutas med punkt. Det är ingen fråga och inget utrop.",
        difficulty: "enkel",
      },
      {
        id: "st12",
        sentence: "Hur gammal är du_",
        options: [".", "!", "?", ","],
        correct: 2,
        explanation: "Meningen börjar med ett frågeord (hur) och är en fråga – den avslutas därför med frågetecken.",
        difficulty: "enkel",
      },
      {
        id: "st13",
        sentence: "Akta dig_",
        options: [".", "?", ",", "!"],
        correct: 3,
        explanation: "Det är en varning eller ett utrop – sådana meningar avslutas med utropstecken för att visa att det är viktigt.",
        difficulty: "enkel",
      },
      {
        id: "st14",
        sentence: "Vi har en hund_ en katt och en hamster.",
        options: [".", "!", ";", ","],
        correct: 3,
        explanation: "Kommatecken används mellan saker i en uppräkning. Före 'och' behöver man inte komma.",
        difficulty: "enkel",
      },
      {
        id: "st15",
        sentence: "Vad glad jag blir_",
        options: [".", "?", "!", ","],
        correct: 2,
        explanation: "Meningen uttrycker en stark känsla – det är ett utrop och avslutas därför med utropstecken.",
        difficulty: "enkel",
      },
      {
        id: "st16",
        sentence: "Kan du komma imorgon_",
        options: [".", "!", "?", ","],
        correct: 2,
        explanation: "Även frågor som inte börjar med ett frågeord behöver frågetecken. 'Kan du...' är en fråga.",
        difficulty: "enkel",
      },
      {
        id: "st17",
        sentence: "När solen gått ner_ tände vi en brasa.",
        options: [".", ";", "!", ","],
        correct: 3,
        explanation: "Kommatecken används för att skilja bisatsen ('när solen gått ner') från huvudsatsen.",
        difficulty: "medel",
      },
      {
        id: "st18",
        sentence: 'Mamma frågar_ "Har du gjort läxan?"',
        options: [",", ":", ".", ";"],
        correct: 1,
        explanation: "Kolon sätter man före ett direkt citat – det signalerar att någon citeras.",
        difficulty: "medel",
      },
      {
        id: "st19",
        sentence: "Jag gillar att läsa_ skriva och rita.",
        options: [".", ";", "!", ","],
        correct: 3,
        explanation: "Kommatecken används mellan leden i en uppräkning av aktiviteter. Inget komma behövs före 'och'.",
        difficulty: "medel",
      },
      {
        id: "st20",
        sentence: "Vi hade två val_ stanna hemma eller gå ut.",
        options: [",", ":", ";", "."],
        correct: 1,
        explanation: "Kolon används före en förklaring av vad de två valen var.",
        difficulty: "medel",
      },
      {
        id: "st21",
        sentence: "Alla var där_ Anna_ Erik_ Sofia och Kalle.",
        options: [": , , ,", "; , , ,", ", , , ,", ": ; ; ;"],
        correct: 0,
        explanation: "Kolon före uppräkningen av namn, och kommatecken mellan namnen i listan.",
        difficulty: "medel",
      },
      {
        id: "st22",
        sentence: "Boken var tjock_ ändå läste hon ut den på en dag.",
        options: [",", ";", ":", "!"],
        correct: 1,
        explanation: "Semikolon passar här – det binder ihop två självständiga satser som står i kontrast till varandra.",
        difficulty: "svar",
      },
      {
        id: "st23",
        sentence: 'Författaren skriver_ "Att läsa är att resa utan att lämna rummet."',
        options: [",", ".", ":", ";"],
        correct: 2,
        explanation: "Kolon före ett direkt citat, även när citatet är längre. Kolon signalerar att någon citeras ordagrant.",
        difficulty: "svar",
      },
      {
        id: "st24",
        sentence: "Vetenskapen visar tydliga resultat_ däremot krävs mer forskning.",
        options: [",", ";", ":", "!"],
        correct: 1,
        explanation: "Semikolon används mellan två självständiga satser som har ett innehållsligt samband, här en kontrast.",
        difficulty: "svar",
      },
      {
        id: "st25",
        sentence: "Tre saker är viktiga i livet_ hälsa_ kärlek_ och mening.",
        options: [": , ,", "; , ,", ", , ,", ": ; ;"],
        correct: 0,
        explanation: "Kolon inleder uppräkningen av de tre sakerna, och kommatecken separerar dem. Komma före 'och' är valfritt men vanligt i längre uppräkningar.",
        difficulty: "svar",
      },
    ],
  },

  /* ---- Stavning ---- */
  {
    key: "stavning",
    label: "Stavning",
    description: "Vilket ord är rätt stavat?",
    questions: [
      {
        id: "sp1",
        sentence: "Välj rätt stavning:",
        options: ["defenetivt", "definitivt", "deffinitivt", "definitvt"],
        correct: 1,
        explanation: '"Definitivt" stavas med i-i-i och ett f.',
        difficulty: "medel",
      },
      {
        id: "sp2",
        sentence: "Välj rätt stavning:",
        options: ["inteligent", "intiligent", "intelligent", "intelegent"],
        correct: 2,
        explanation: '"Intelligent" stavas med dubbelt-l och -ent.',
        difficulty: "medel",
      },
      {
        id: "sp3",
        sentence: "Välj rätt stavning:",
        options: ["miljö", "miljö", "milje", "miljoe"],
        correct: 0,
        explanation: '"Miljö" stavas med ö.',
        difficulty: "enkel",
      },
      {
        id: "sp4",
        sentence: "Välj rätt stavning:",
        options: ["aggresiv", "aggressiv", "agressiv", "aggresiv"],
        correct: 1,
        explanation: '"Aggressiv" stavas med dubbelt-g och dubbelt-s.',
        difficulty: "medel",
      },
      {
        id: "sp5",
        sentence: "Välj rätt stavning:",
        options: ["restaurang", "restarang", "resturang", "restraurang"],
        correct: 0,
        explanation: '"Restaurang" – tänk på det franska ursprunget.',
        difficulty: "medel",
      },
      {
        id: "sp6",
        sentence: "Välj rätt stavning:",
        options: ["kanske", "канске", "kanshe", "kanskje"],
        correct: 0,
        explanation: '"Kanske" är rätt stavning.',
        difficulty: "enkel",
      },
      {
        id: "sp7",
        sentence: "Välj rätt stavning:",
        options: ["engagera", "engasjera", "engagera", "engachera"],
        correct: 0,
        explanation: '"Engagera" stavas med g-g (ej sj-ljud i stavningen).',
        difficulty: "medel",
      },
      {
        id: "sp8",
        sentence: "Välj rätt stavning:",
        options: ["necessär", "nessesär", "necessär", "nesessar"],
        correct: 2,
        explanation: '"Necessär" stavas med c och dubbelt-s.',
        difficulty: "svar",
      },
      {
        id: "sp9",
        sentence: "Välj rätt stavning:",
        options: ["parallell", "paralell", "parallell", "parelell"],
        correct: 0,
        explanation: '"Parallell" stavas med dubbelt-l i slutet och ett l i mitten.',
        difficulty: "svar",
      },
      {
        id: "sp10",
        sentence: "Välj rätt stavning:",
        options: ["chauffeur", "chaffeur", "chaufför", "chauffer"],
        correct: 2,
        explanation: '"Chaufför" är den svenska stavningen (ej den franska).',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "sp11",
        sentence: "Välj rätt stavning:",
        options: ["skola", "sqola", "skåla", "scola"],
        correct: 0,
        explanation: '"Skola" stavas med sk. På svenska skrivs sk-ljudet i början av ord oftast med bokstäverna s och k.',
        difficulty: "enkel",
      },
      {
        id: "sp12",
        sentence: "Välj rätt stavning:",
        options: ["jag", "jag", "jag", "jaq"],
        correct: 0,
        explanation: '"Jag" stavas med g i slutet. I svenskan används inte q på det sättet.',
        difficulty: "enkel",
      },
      {
        id: "sp13",
        sentence: "Välj rätt stavning:",
        options: ["mycket", "myket", "mycket", "mucket"],
        correct: 0,
        explanation: '"Mycket" stavas med ck – det är ett vanligt ord som är bra att memorera.',
        difficulty: "enkel",
      },
      {
        id: "sp14",
        sentence: "Välj rätt stavning:",
        options: ["människor", "männsikor", "meniskor", "manniskor"],
        correct: 0,
        explanation: '"Människor" stavas med ä och dubbelt-n. Tänk på grundformen "människa".',
        difficulty: "enkel",
      },
      {
        id: "sp15",
        sentence: "Välj rätt stavning:",
        options: ["naturligtvis", "naturligvis", "naturligtvis", "natturligtvis"],
        correct: 0,
        explanation: '"Naturligtvis" stavas med t – det kommer av "naturligt vis" (på ett naturligt sätt).',
        difficulty: "enkel",
      },
      {
        id: "sp16",
        sentence: "Välj rätt stavning:",
        options: ["garage", "garasje", "garrAge", "garrage"],
        correct: 0,
        explanation: '"Garage" stavas med g-e i slutet. Ordet kommer från franskan.',
        difficulty: "medel",
      },
      {
        id: "sp17",
        sentence: "Välj rätt stavning:",
        options: ["antagligen", "antaligen", "antagligen", "anntagligen"],
        correct: 0,
        explanation: '"Antagligen" stavas med g – det kommer av verbet "anta" plus ändelsen "-ligen".',
        difficulty: "medel",
      },
      {
        id: "sp18",
        sentence: "Välj rätt stavning:",
        options: ["egentligen", "egentlien", "egentligen", "egenteligen"],
        correct: 0,
        explanation: '"Egentligen" stavas med g och utan extra e. Tänk på att det bygger på "egentlig" plus -en.',
        difficulty: "medel",
      },
      {
        id: "sp19",
        sentence: "Välj rätt stavning:",
        options: ["korrektur", "korektur", "korrektyr", "korektyr"],
        correct: 0,
        explanation: '"Korrektur" stavas med dubbelt-r och -ur i slutet.',
        difficulty: "medel",
      },
      {
        id: "sp20",
        sentence: "Välj rätt stavning:",
        options: ["koncentration", "konsertration", "konsentration", "koncentrasion"],
        correct: 0,
        explanation: '"Koncentration" stavas med c (ej s) och -tion i slutet. Tänk på att c ger ett s-ljud här.',
        difficulty: "medel",
      },
      {
        id: "sp21",
        sentence: "Välj rätt stavning:",
        options: ["kommitté", "kommitte", "komite", "komité"],
        correct: 0,
        explanation: '"Kommitté" (eller "kommitté") stavas med dubbelt-m och dubbelt-t. Ordet kommer från franskans "comité".',
        difficulty: "svar",
      },
      {
        id: "sp22",
        sentence: "Välj rätt stavning:",
        options: ["renässans", "rennasans", "renasans", "renessans"],
        correct: 0,
        explanation: '"Renässans" stavas med ett n och dubbelt-s. Ordet är franskt och betyder "återfödelse".',
        difficulty: "svar",
      },
      {
        id: "sp23",
        sentence: "Välj rätt stavning:",
        options: ["psykologi", "sykologi", "psykoloji", "psykollogi"],
        correct: 0,
        explanation: '"Psykologi" stavas med p i början (stumt p) och g. Det kommer från grekiskans "psykhe" (själ) och "logos" (lära).',
        difficulty: "svar",
      },
      {
        id: "sp24",
        sentence: "Välj rätt stavning:",
        options: ["reumatism", "reumatism", "rumatism", "reumatizm"],
        correct: 0,
        explanation: '"Reumatism" stavas med eu och -ism. Det är ett grekiskt lånord.',
        difficulty: "svar",
      },
      {
        id: "sp25",
        sentence: "Välj rätt stavning:",
        options: ["chrysantemum", "krysantemum", "krysanthemum", "chrysanthemum"],
        correct: 1,
        explanation: '"Krysantemum" är den svenska stavningen – utan ch och th som i engelskans "chrysanthemum". På svenska försvenskas ofta grekiska/latinska stavningar.',
        difficulty: "svar",
      },
    ],
  },

  /* ---- De/dem/dom ---- */
  {
    key: "de-dem",
    label: "De/dem/dom",
    description: "Välj rätt form: de eller dem?",
    questions: [
      {
        id: "dd1",
        sentence: "___ gick till skolan.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" är subjektsform. Här är "de" subjekt i meningen (de som går).',
        difficulty: "enkel",
      },
      {
        id: "dd2",
        sentence: "Jag såg ___ på torget.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" är objektsform. Här är "dem" objekt (den/de jag såg).',
        difficulty: "enkel",
      },
      {
        id: "dd3",
        sentence: "Läraren gav ___ läxa.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" är objektsform. Läraren (subjekt) gav dem (indirekt objekt) läxa.',
        difficulty: "enkel",
      },
      {
        id: "dd4",
        sentence: "___ nya eleverna började idag.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" används framför adjektiv + substantiv (de nya eleverna). Tips: "de" = bestämningsord här.',
        difficulty: "medel",
      },
      {
        id: "dd5",
        sentence: "Boken som ___ läste var bra.",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" är subjektsform. "De" är subjekt i bisatsen (de som läste).',
        difficulty: "medel",
      },
      {
        id: "dd6",
        sentence: "Vi bjöd ___ på middag.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" är objektsform efter preposition. "På" styr objektsformen.',
        difficulty: "medel",
      },
      {
        id: "dd7",
        sentence: "Är det ___ som har vunnit?",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" är subjektsform. Trots att det står efter "det" är "de" subjekt (de som har vunnit).',
        difficulty: "medel",
      },
      {
        id: "dd8",
        sentence: "Alla ville träffa ___.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" är objektsform. "Dem" är direkt objekt (den/dem som alla ville träffa).',
        difficulty: "medel",
      },
      {
        id: "dd9",
        sentence: "___ som inte har biljett får inte gå in.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" är subjektsform. "De" är subjekt i huvudsatsen (de får inte gå in).',
        difficulty: "svar",
      },
      {
        id: "dd10",
        sentence: "För ___ som är intresserade finns mer information här.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" står efter prepositionen "för" och är därför objektsform.',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "dd11",
        sentence: "___ springer i parken.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" är subjektsform. Tips: byt ut mot "vi" eller "oss". "Vi springer" låter rätt, inte "oss springer". Därför: "de".',
        difficulty: "enkel",
      },
      {
        id: "dd12",
        sentence: "Hunden följer efter ___.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" är objektsform. Tips: byt ut mot "oss". "Hunden följer efter oss" låter rätt. Därför: "dem".',
        difficulty: "enkel",
      },
      {
        id: "dd13",
        sentence: "___ är mina bästa vänner.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" är subjektsform. "De" är subjekt – det är de som är vänner. Tips: "Vi är mina bästa vänner" låter rätt.',
        difficulty: "enkel",
      },
      {
        id: "dd14",
        sentence: "Mamma hämtade ___ från skolan.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" är objektsform. Mamma (subjekt) hämtade dem (objekt). Tips: "Mamma hämtade oss" låter rätt.',
        difficulty: "enkel",
      },
      {
        id: "dd15",
        sentence: "Var det ___ som ringde?",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" är subjektsform. "De" är subjekt i bisatsen (de som ringde). Tips: "Var det vi som ringde?" låter rätt.',
        difficulty: "enkel",
      },
      {
        id: "dd16",
        sentence: "___ vackra blommorna stod i vasen.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" är bestämningsord framför adjektiv + substantiv. Här står "de" framför "vackra blommorna" och är inte objekt.',
        difficulty: "medel",
      },
      {
        id: "dd17",
        sentence: "Vi skrev ett brev till ___.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" används efter prepositionen "till". Prepositioner styr alltid objektsform. Tips: "Vi skrev ett brev till oss" låter rätt.',
        difficulty: "medel",
      },
      {
        id: "dd18",
        sentence: "Jag tror att ___ har rätt.",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" är subjektsform. I bisatsen "att de har rätt" är "de" subjekt (de som har rätt).',
        difficulty: "medel",
      },
      {
        id: "dd19",
        sentence: "Chefen bad ___ stanna kvar.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" är objektsform. "Bad" styr objekt – chefen bad dem (inte de). Tips: "Chefen bad oss stanna kvar" låter rätt.',
        difficulty: "medel",
      },
      {
        id: "dd20",
        sentence: "Är ___ redo att gå?",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" är subjektsform. "De" är subjekt – det är de som är redo. Tips: "Är vi redo?" låter rätt, inte "Är oss redo?".',
        difficulty: "medel",
      },
      {
        id: "dd21",
        sentence: "Många av ___ hade rest långt.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" står efter prepositionen "av" och är därför objektsform. "Av oss" låter rätt.',
        difficulty: "svar",
      },
      {
        id: "dd22",
        sentence: "Enligt ___ jag talat med är förslaget bra.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" står efter prepositionen "enligt" och är därför objektsform, även om en bisats följer.',
        difficulty: "svar",
      },
      {
        id: "dd23",
        sentence: "Det var ___ som hade skrivit rapporten.",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" är subjektsform. Trots placeringen efter "det var" är "de" subjekt i satsen – det är de som hade skrivit.',
        difficulty: "svar",
      },
      {
        id: "dd24",
        sentence: "Bland ___ som deltog var flera kända författare.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" står efter prepositionen "bland" och är därför objektsform, även om det följs av en relativsats.',
        difficulty: "svar",
      },
      {
        id: "dd25",
        sentence: "Ingen av ___ förstod instruktionerna.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" står efter prepositionen "av". Prepositioner som av, för, bland, mellan, med styr alltid objektsform.',
        difficulty: "svar",
      },
    ],
  },

  /* ---- Verbböjning ---- */
  {
    key: "verbbojning",
    label: "Verbböjning",
    description: "Välj rätt form av verbet.",
    questions: [
      {
        id: "vb1",
        sentence: "Hon ___ på kontoret varje dag. (arbeta, presens)",
        options: ["arbetar", "arbetade", "arbetat", "arbeta"],
        correct: 0,
        explanation: '"Arbetar" är presensformen av "arbeta" (grupp 1: -ar).',
        difficulty: "enkel",
      },
      {
        id: "vb2",
        sentence: "Vi ___ hem sent igår. (komma, preteritum)",
        options: ["kommer", "kom", "kommit", "komma"],
        correct: 1,
        explanation: '"Kom" är preteritum av "komma" (oregelbundet verb).',
        difficulty: "enkel",
      },
      {
        id: "vb3",
        sentence: "De har ___ hela dagen. (springa, supinum)",
        options: ["springer", "sprang", "sprungit", "springa"],
        correct: 2,
        explanation: '"Sprungit" är supinum av "springa" – används med "har/hade".',
        difficulty: "medel",
      },
      {
        id: "vb4",
        sentence: "Barnet ___ glaset på golvet igår. (tappar, preteritum)",
        options: ["tappar", "tappade", "tappat", "tappa"],
        correct: 1,
        explanation: '"Tappade" är preteritum av "tappa" (grupp 1: -ade).',
        difficulty: "enkel",
      },
      {
        id: "vb5",
        sentence: "Jag har ___ brevet. (skriva, supinum)",
        options: ["skriver", "skrev", "skrivit", "skriven"],
        correct: 2,
        explanation: '"Skrivit" är supinum av "skriva" – används med "har".',
        difficulty: "medel",
      },
      {
        id: "vb6",
        sentence: "Han ___ en ny bil förra veckan. (köpa, preteritum)",
        options: ["köper", "köpte", "köpt", "köpa"],
        correct: 1,
        explanation: '"Köpte" är preteritum av "köpa" (grupp 2: -te).',
        difficulty: "medel",
      },
      {
        id: "vb7",
        sentence: "Vi hade ___ där förut. (vara, supinum)",
        options: ["är", "var", "varit", "vore"],
        correct: 2,
        explanation: '"Varit" är supinum av "vara" – används med "hade".',
        difficulty: "medel",
      },
      {
        id: "vb8",
        sentence: "De ___ oss om hjälp. (be, preteritum)",
        options: ["ber", "bad", "bett", "be"],
        correct: 1,
        explanation: '"Bad" är preteritum av "be" (oregelbundet: be – bad – bett).',
        difficulty: "svar",
      },
      {
        id: "vb9",
        sentence: "Hon har ___ dricka åt alla. (bjuda, supinum)",
        options: ["bjuder", "bjöd", "bjudit", "bjuden"],
        correct: 2,
        explanation: '"Bjudit" är supinum av "bjuda" (bjuda – bjöd – bjudit).',
        difficulty: "svar",
      },
      {
        id: "vb10",
        sentence: "Vi ___ inte vad som hände. (veta, preteritum)",
        options: ["vet", "visste", "vetat", "veta"],
        correct: 1,
        explanation: '"Visste" är preteritum av "veta" (oregelbundet: veta – visste – vetat).',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "vb11",
        sentence: "Jag ___ varje dag. (läsa, presens)",
        options: ["läsa", "läste", "läser", "läst"],
        correct: 2,
        explanation: '"Läser" är presensformen av "läsa" (grupp 2: -er). Presens används för saker som händer nu eller regelbundet.',
        difficulty: "enkel",
      },
      {
        id: "vb12",
        sentence: "Barnen ___ i trädgården igår. (leka, preteritum)",
        options: ["leker", "lekte", "lekt", "leka"],
        correct: 1,
        explanation: '"Lekte" är preteritum av "leka" (grupp 2: -te). Preteritum används för saker som hände i det förflutna.',
        difficulty: "enkel",
      },
      {
        id: "vb13",
        sentence: "Hunden ___ mycket mat varje dag. (äta, presens)",
        options: ["äter", "åt", "ätit", "äta"],
        correct: 0,
        explanation: '"Äter" är presensformen av "äta" (oregelbundet verb). Presens beskriver vad som händer just nu eller regelbundet.',
        difficulty: "enkel",
      },
      {
        id: "vb14",
        sentence: "Vi ___ till skolan varje morgon. (gå, presens)",
        options: ["går", "gick", "gått", "gå"],
        correct: 0,
        explanation: '"Går" är presensformen av "gå" (oregelbundet). "Varje morgon" visar att det är presens – något som sker regelbundet.',
        difficulty: "enkel",
      },
      {
        id: "vb15",
        sentence: "Mamma ___ en fin tårta igår. (baka, preteritum)",
        options: ["bakar", "bakade", "bakat", "baka"],
        correct: 1,
        explanation: '"Bakade" är preteritum av "baka" (grupp 1: -ade). Alla verb i grupp 1 får -ade i preteritum.',
        difficulty: "enkel",
      },
      {
        id: "vb16",
        sentence: "Hon har ___ en ny sång. (sjunga, supinum)",
        options: ["sjunger", "sjöng", "sjungit", "sjungen"],
        correct: 2,
        explanation: '"Sjungit" är supinum av "sjunga" (sjunga – sjöng – sjungit). Supinum används alltid med "har" eller "hade".',
        difficulty: "medel",
      },
      {
        id: "vb17",
        sentence: "Vi ___ hela natten. (dansa, preteritum)",
        options: ["dansar", "dansade", "dansat", "dansa"],
        correct: 1,
        explanation: '"Dansade" är preteritum av "dansa" (grupp 1: -ade). Tidsuttrycket "hela natten" visar att det är förfluten tid.',
        difficulty: "enkel",
      },
      {
        id: "vb18",
        sentence: "De har ___ bort alla kakor. (äta, supinum)",
        options: ["äter", "åt", "ätit", "äten"],
        correct: 2,
        explanation: '"Ätit" är supinum av "äta" (äta – åt – ätit). Med "har" används alltid supinumformen.',
        difficulty: "medel",
      },
      {
        id: "vb19",
        sentence: "Jag ___ till bussen varje dag. (springa, presens)",
        options: ["springer", "sprang", "sprungit", "springa"],
        correct: 0,
        explanation: '"Springer" är presensformen av "springa". "Varje dag" visar att det sker regelbundet, alltså presens.',
        difficulty: "medel",
      },
      {
        id: "vb20",
        sentence: "De hade ___ före oss. (anlända, supinum)",
        options: ["anlända", "anlände", "anlänt", "anländar"],
        correct: 2,
        explanation: '"Anlänt" är supinum av "anlända" (grupp 2: -t). Med "hade" används alltid supinum.',
        difficulty: "medel",
      },
      {
        id: "vb21",
        sentence: "Barnet ___ sin nallebjörn överallt. (bära, preteritum)",
        options: ["bar", "bär", "burit", "bära"],
        correct: 0,
        explanation: '"Bar" är preteritum av "bära" (oregelbundet: bära – bar – burit). Många starka verb byter vokal i preteritum.',
        difficulty: "medel",
      },
      {
        id: "vb22",
        sentence: "De ___ något konstigt i skogen. (se, preteritum)",
        options: ["ser", "såg", "sett", "se"],
        correct: 1,
        explanation: '"Såg" är preteritum av "se" (oregelbundet: se – såg – sett). "Se" är ett av de vanligaste oregelbundna verben.',
        difficulty: "svar",
      },
      {
        id: "vb23",
        sentence: "Hon har ___ på kontoret i tio år. (sitta, supinum)",
        options: ["sitter", "satt", "suttit", "sitta"],
        correct: 2,
        explanation: '"Suttit" är supinum av "sitta" (sitta – satt – suttit). Observera vokalväxlingen i-a-u som är typisk för starka verb.',
        difficulty: "svar",
      },
      {
        id: "vb24",
        sentence: "Publiken ___ när artisten kom in på scenen. (skrika, preteritum)",
        options: ["skriker", "skrek", "skrikit", "skrika"],
        correct: 1,
        explanation: '"Skrek" är preteritum av "skrika" (oregelbundet: skrika – skrek – skrikit). Vokalväxlingen i-e är vanlig i starka verb.',
        difficulty: "svar",
      },
      {
        id: "vb25",
        sentence: "Vi hade ___ att komma i tid men det gick inte. (försöka, supinum)",
        options: ["försöker", "försökte", "försökt", "försöka"],
        correct: 2,
        explanation: '"Försökt" är supinum av "försöka" (grupp 2: försöka – försökte – försökt). Med "hade" används alltid supinumformen.',
        difficulty: "svar",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function renderSentence(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="rounded bg-yellow-100 px-1 font-bold text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function encouragement(score: number, total: number) {
  const pct = score / total;
  if (pct === 1) return "Perfekt! Fantastiskt jobbat!";
  if (pct >= 0.8) return "Bra jobbat! Nästan alla rätt!";
  if (pct >= 0.6) return "Bra försök! Övning ger färdighet!";
  return "Fortsätt öva – du blir bättre för varje gång!";
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface OvningarClientProps {
  arskurs: AgeGroup;
}

export function OvningarClient({ arskurs }: OvningarClientProps) {
  const config = AGE_GROUP_CONFIG[arskurs];

  // Filter categories and questions based on age group
  const categories = useMemo(() => {
    return ALL_CATEGORIES
      .filter((cat) => config.allowedCategories.includes(cat.key))
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter((q) => config.allowedDifficulties.includes(q.difficulty)),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [config]);

  // Difficulty filter options scoped to allowed difficulties
  const difficultyOptions = useMemo(() => {
    const opts: { value: Difficulty | "alla"; label: string }[] = [{ value: "alla", label: "Alla" }];
    for (const opt of ALL_DIFFICULTY_OPTIONS) {
      if (opt.value !== "alla" && config.allowedDifficulties.includes(opt.value)) {
        opts.push(opt);
      }
    }
    return opts;
  }, [config]);

  const [activeCategory, setActiveCategory] = useState(categories[0]?.key ?? "");
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | "alla">("alla");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const category = categories.find((c) => c.key === activeCategory) ?? categories[0];

  const filteredQuestions = useMemo(
    () =>
      !category
        ? []
        : difficultyFilter === "alla"
          ? category.questions
          : category.questions.filter((q) => q.difficulty === difficultyFilter),
    [category, difficultyFilter]
  );

  const question = filteredQuestions[currentIndex];

  const handleCategoryChange = useCallback((key: string) => {
    setActiveCategory(key);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, []);

  const handleDifficultyChange = useCallback((d: Difficulty | "alla") => {
    setDifficultyFilter(d);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, []);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (answered || !question) return;
      setSelectedOption(optionIndex);
      setAnswered(true);
      if (optionIndex === question.correct) {
        setScore((s) => s + 1);
      }
    },
    [answered, question]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= filteredQuestions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  }, [currentIndex, filteredQuestions.length]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, []);

  if (categories.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-neutral-500 dark:text-neutral-400">Inga övningar tillgängliga för denna årskurs.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Page header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          <Dumbbell className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Övningar</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Interaktiva övningar i svenska för {config.label} – välj en kategori och börja!
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.key
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Difficulty filter */}
      {difficultyOptions.length > 2 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Svårighetsgrad:</span>
          {difficultyOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleDifficultyChange(opt.value)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                difficultyFilter === opt.value
                  ? "bg-neutral-700 text-white dark:bg-neutral-300 dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="ml-2 text-xs text-neutral-400">
            ({filteredQuestions.length} frågor)
          </span>
        </div>
      )}

      {/* Empty state */}
      {filteredQuestions.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-neutral-500 dark:text-neutral-400">
              Inga frågor matchar den valda svårighetsgraden i denna kategori.
            </p>
            <Button onClick={() => handleDifficultyChange("alla")} className="mt-4">
              Visa alla frågor
            </Button>
          </CardContent>
        </Card>
      ) : finished ? (
        /* Finished view */
        <Card>
          <CardHeader>
            <CardTitle>Resultat – {category.label}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-3xl font-bold text-neutral-900 dark:text-white">
              {score} / {filteredQuestions.length}
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {encouragement(score, filteredQuestions.length)}
            </p>
            <Button onClick={handleReset} className="mt-4 gap-2">
              <RotateCcw className="h-4 w-4" />
              Försök igen
            </Button>
          </CardContent>
        </Card>
      ) : question ? (
        /* Question view */
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base">{category.label}</CardTitle>
                {difficultyBadge(question.difficulty)}
              </div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                Fråga {currentIndex + 1} / {filteredQuestions.length}
              </span>
            </div>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {category.description}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Sentence / prompt */}
            <p className="text-lg text-neutral-900 dark:text-white">
              {renderSentence(question.sentence)}
            </p>

            {/* Options */}
            <div className="grid gap-2 sm:grid-cols-2">
              {question.options.map((option, idx) => {
                let optionClass =
                  "rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ";

                if (!answered) {
                  optionClass +=
                    "border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:border-neutral-500 dark:hover:bg-neutral-800 cursor-pointer";
                } else if (idx === question.correct) {
                  optionClass +=
                    "border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-900/30 dark:text-green-300";
                } else if (idx === selectedOption) {
                  optionClass +=
                    "border-red-300 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300";
                } else {
                  optionClass +=
                    "border-neutral-200 opacity-50 dark:border-neutral-700";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={answered}
                    className={optionClass}
                  >
                    <span className="flex items-center gap-2">
                      {answered && idx === question.correct && (
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                      )}
                      {answered && idx === selectedOption && idx !== question.correct && (
                        <XCircle className="h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                      )}
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {answered && (
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                {question.explanation}
              </div>
            )}

            {/* Next button */}
            {answered && (
              <div className="flex justify-end">
                <Button onClick={handleNext}>
                  {currentIndex + 1 >= filteredQuestions.length ? "Se resultat" : "Nästa fråga"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : null}

      {/* Progress bar */}
      {filteredQuestions.length > 0 && !finished && question && (
        <div className="mt-6">
          <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div
              className="h-full rounded-full bg-neutral-900 transition-all dark:bg-white"
              style={{
                width: `${((currentIndex + (answered ? 1 : 0)) / filteredQuestions.length) * 100}%`,
              }}
            />
          </div>
          <p className="mt-1 text-right text-xs text-neutral-400">
            {score} rätt hittills
          </p>
        </div>
      )}
    </div>
  );
}
