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
    label: "Lagstadiet (ak 1-3)",
  },
  mellanstadiet: {
    allowedDifficulties: ["enkel", "medel"],
    allowedCategories: ["ordklasser", "skiljetecken", "stavning", "sambandsord"],
    label: "Mellanstadiet (ak 4-6)",
  },
  hogstadiet: {
    allowedDifficulties: ["enkel", "medel", "svar"],
    allowedCategories: ["ordklasser", "sambandsord", "skiljetecken", "stavning", "de-dem", "verbbojning"],
    label: "Hogstadiet (ak 7-9)",
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
  { value: "svar", label: "Svar" },
];

function difficultyBadge(d: Difficulty) {
  const map: Record<Difficulty, { bg: string; text: string; label: string }> = {
    enkel: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-300", label: "Enkel" },
    medel: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-300", label: "Medel" },
    svar: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-300", label: "Svar" },
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
    description: "Vilken ordklass tillhor det markerade ordet?",
    questions: [
      {
        id: "ok1",
        sentence: 'Katten **sov** pa soffan.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 1,
        explanation: '"Sov" ar ett verb eftersom det beskriver en handling.',
        difficulty: "enkel",
      },
      {
        id: "ok2",
        sentence: 'Den **stora** hunden skallde.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 2,
        explanation: '"Stora" ar ett adjektiv eftersom det beskriver hur hunden ar.',
        difficulty: "enkel",
      },
      {
        id: "ok3",
        sentence: '**Hon** laser en bok.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 3,
        explanation: '"Hon" ar ett pronomen eftersom det ersatter ett substantiv.',
        difficulty: "enkel",
      },
      {
        id: "ok4",
        sentence: 'Vi sprang **snabbt** hem.',
        options: ["Adjektiv", "Verb", "Adverb", "Preposition"],
        correct: 2,
        explanation: '"Snabbt" ar ett adverb eftersom det beskriver hur man sprang.',
        difficulty: "medel",
      },
      {
        id: "ok5",
        sentence: 'Bollen rullade **under** bordet.',
        options: ["Adverb", "Konjunktion", "Preposition", "Pronomen"],
        correct: 2,
        explanation: '"Under" ar en preposition eftersom det anger var bollen rullade.',
        difficulty: "medel",
      },
      {
        id: "ok6",
        sentence: 'De akte till Paris **och** London.',
        options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
        correct: 1,
        explanation: '"Och" ar en konjunktion eftersom det binder samman tva led.',
        difficulty: "enkel",
      },
      {
        id: "ok7",
        sentence: '**Tyvärr** kunde vi inte komma.',
        options: ["Adjektiv", "Adverb", "Konjunktion", "Interjektion"],
        correct: 1,
        explanation: '"Tyvarr" ar ett adverb (satsadverb) som kommenterar hela satsen.',
        difficulty: "medel",
      },
      {
        id: "ok8",
        sentence: 'Det ar **hans** bil.',
        options: ["Pronomen", "Adjektiv", "Substantiv", "Verb"],
        correct: 0,
        explanation: '"Hans" ar ett possessivt pronomen som visar agande.',
        difficulty: "medel",
      },
      {
        id: "ok9",
        sentence: '**Oj**, vilken fin tavla!',
        options: ["Adverb", "Konjunktion", "Preposition", "Interjektion"],
        correct: 3,
        explanation: '"Oj" ar en interjektion – ett utrop som uttrycker kanslor.',
        difficulty: "svar",
      },
      {
        id: "ok10",
        sentence: 'Boken som **jag** laste var spannande.',
        options: ["Substantiv", "Pronomen", "Konjunktion", "Adverb"],
        correct: 1,
        explanation: '"Jag" ar ett personligt pronomen i subjektsform.',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "ok11",
        sentence: 'Jag har en **hund**.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 0,
        explanation: '"Hund" ar ett substantiv – det ar ett namn pa ett djur. Substantiv ar ord for saker, personer och djur.',
        difficulty: "enkel",
      },
      {
        id: "ok12",
        sentence: 'Lisa **ater** en smorgos.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 1,
        explanation: '"Ater" ar ett verb – det talar om vad Lisa gor. Verb kallas ibland "gorord".',
        difficulty: "enkel",
      },
      {
        id: "ok13",
        sentence: 'Den **roda** bilen kor fort.',
        options: ["Substantiv", "Verb", "Adjektiv", "Preposition"],
        correct: 2,
        explanation: '"Roda" ar ett adjektiv – det beskriver bilens farg. Adjektiv talar om hur nagot ar.',
        difficulty: "enkel",
      },
      {
        id: "ok14",
        sentence: '**Vi** leker i parken.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 3,
        explanation: '"Vi" ar ett pronomen – det star i stallet for namnen pa personerna som leker.',
        difficulty: "enkel",
      },
      {
        id: "ok15",
        sentence: 'Pappa **springer** till bussen.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 1,
        explanation: '"Springer" ar ett verb – det beskriver vad pappa gor. Fraga: "Vad gor pappa?" Svar: "Springer."',
        difficulty: "enkel",
      },
      {
        id: "ok16",
        sentence: 'Jag har en **liten** katt.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 2,
        explanation: '"Liten" ar ett adjektiv – det beskriver hur katten ar. Fraga: "Hurdan ar katten?" Svar: "Liten."',
        difficulty: "enkel",
      },
      {
        id: "ok17",
        sentence: 'Mamma la boken **pa** bordet.',
        options: ["Adverb", "Konjunktion", "Preposition", "Verb"],
        correct: 2,
        explanation: '"Pa" ar en preposition – det visar var boken lades. Prepositioner talar om var nagot ar eller sker.',
        difficulty: "enkel",
      },
      {
        id: "ok18",
        sentence: 'Vi sprang hem **men** det regnade.',
        options: ["Preposition", "Konjunktion", "Adverb", "Pronomen"],
        correct: 1,
        explanation: '"Men" ar en konjunktion – det binder ihop tva satser och visar en motsats.',
        difficulty: "enkel",
      },
      {
        id: "ok19",
        sentence: 'Barnet sov **lugnt** i vagnen.',
        options: ["Adjektiv", "Substantiv", "Adverb", "Verb"],
        correct: 2,
        explanation: '"Lugnt" ar ett adverb har – det beskriver hur barnet sov. Adverb beskriver verb, adjektiv eller andra adverb.',
        difficulty: "medel",
      },
      {
        id: "ok20",
        sentence: 'Den **gamle** mannen gick sakta.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 2,
        explanation: '"Gamle" ar ett adjektiv i bestamt form som beskriver mannen. I bestamda formen far manga adjektiv andelsen -e.',
        difficulty: "medel",
      },
      {
        id: "ok21",
        sentence: 'Hon gick **forbi** utan att saga nagot.',
        options: ["Preposition", "Konjunktion", "Adverb", "Verb"],
        correct: 2,
        explanation: '"Forbi" ar ett adverb har – det beskriver hur hon gick. Det finns inget substantiv efter, sa det ar inte en preposition.',
        difficulty: "medel",
      },
      {
        id: "ok22",
        sentence: '**Denna** bok ar mycket spannande.',
        options: ["Pronomen", "Adjektiv", "Adverb", "Konjunktion"],
        correct: 0,
        explanation: '"Denna" ar ett demonstrativt pronomen – det pekar ut en bestamt bok, precis som "den har".',
        difficulty: "svar",
      },
      {
        id: "ok23",
        sentence: 'Han ar den **snallaste** lararen.',
        options: ["Substantiv", "Verb", "Adjektiv", "Adverb"],
        correct: 2,
        explanation: '"Snallaste" ar ett adjektiv i superlativ (hogsta grad). Positiv: snall, komparativ: snallare, superlativ: snallast(e).',
        difficulty: "svar",
      },
      {
        id: "ok24",
        sentence: '**Att** lasa ar roligt.',
        options: ["Pronomen", "Konjunktion", "Subjunktion", "Preposition"],
        correct: 2,
        explanation: '"Att" ar en subjunktion (infinitivmarke) har – det inleder en infinitivfras. Det binder samman "lasa" med resten av satsen.',
        difficulty: "svar",
      },
      {
        id: "ok25",
        sentence: 'Huset **vars** tak var rott lag vid sjon.',
        options: ["Pronomen", "Konjunktion", "Preposition", "Adverb"],
        correct: 0,
        explanation: '"Vars" ar ett relativt pronomen i genitiv – det syftar tillbaka pa "huset" och visar agande (husets tak).',
        difficulty: "svar",
      },
    ],
  },

  /* ---- Sambandsord ---- */
  {
    key: "sambandsord",
    label: "Sambandsord",
    description: "Valj ratt sambandsord for att fylla i luckan.",
    questions: [
      {
        id: "sb1",
        sentence: "Jag ville ga ut, ___ det regnade.",
        options: ["men", "och", "sa", "eller"],
        correct: 0,
        explanation: '"Men" visar en motsats – du ville ga ut trots regnet.',
        difficulty: "enkel",
      },
      {
        id: "sb2",
        sentence: "Hon studerade mycket. ___ fick hon bra betyg.",
        options: ["Men", "Dessutom", "Darfor", "Fastan"],
        correct: 2,
        explanation: '"Darfor" visar orsak och verkan – studier ledde till bra betyg.',
        difficulty: "enkel",
      },
      {
        id: "sb3",
        sentence: "Vi kan aka till stranden ___ till skogen.",
        options: ["men", "darfor", "eller", "eftersom"],
        correct: 2,
        explanation: '"Eller" visar ett val mellan tva alternativ.',
        difficulty: "enkel",
      },
      {
        id: "sb4",
        sentence: "Han var trott ___ han hade sovit daligt.",
        options: ["men", "eftersom", "eller", "dessutom"],
        correct: 1,
        explanation: '"Eftersom" forklarar orsaken till att han var trott.',
        difficulty: "medel",
      },
      {
        id: "sb5",
        sentence: "Maten var god. ___ var den billig.",
        options: ["Men", "Dessutom", "Darfor", "Trots att"],
        correct: 1,
        explanation: '"Dessutom" lagger till ytterligare information.',
        difficulty: "medel",
      },
      {
        id: "sb6",
        sentence: "___ hon var sjuk, gick hon till skolan.",
        options: ["Eftersom", "Trots att", "Darfor att", "Dessutom"],
        correct: 1,
        explanation: '"Trots att" visar att nagot hande fast det var ovantat.',
        difficulty: "medel",
      },
      {
        id: "sb7",
        sentence: "Vi maste skynda oss, ___ annars missar vi bussen.",
        options: ["men", "for", "eller", "och"],
        correct: 1,
        explanation: '"For" ger en forklaring eller anledning.',
        difficulty: "medel",
      },
      {
        id: "sb8",
        sentence: "Forst ater vi frukost. ___ gar vi till skolan.",
        options: ["Darfor", "Sedan", "Dessutom", "Fastan"],
        correct: 1,
        explanation: '"Sedan" visar tidsordning – vad som hander efter.',
        difficulty: "enkel",
      },
      {
        id: "sb9",
        sentence: "Han pluggade inte. ___ fick han underkant.",
        options: ["Dessutom", "Trots det", "Foljaktligen", "Snarare"],
        correct: 2,
        explanation: '"Foljaktligen" ar ett formellt ord som visar konsekvens.',
        difficulty: "svar",
      },
      {
        id: "sb10",
        sentence: "Filmen var lang. ___ var den valdigt underhallande.",
        options: ["Darfor", "Aven om", "Icke desto mindre", "Pa grund av"],
        correct: 2,
        explanation: '"Icke desto mindre" ar ett formellt sambandsord som visar motsats trots foregaende pastaende.',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "sb11",
        sentence: "Jag gillar glass ___ tarta.",
        options: ["men", "och", "eller", "darfor"],
        correct: 1,
        explanation: '"Och" anvands nar man rakar upp saker man gillar – det lagger ihop tva saker.',
        difficulty: "enkel",
      },
      {
        id: "sb12",
        sentence: "Det var kallt ute ___ jag tog pa mig en jacka.",
        options: ["men", "eller", "sa", "fast"],
        correct: 2,
        explanation: '"Sa" visar vad som hande som foljd av att det var kallt – det var kallt, och darfor tog jag pa mig en jacka.',
        difficulty: "enkel",
      },
      {
        id: "sb13",
        sentence: "Vill du ha saft ___ vatten?",
        options: ["och", "men", "eller", "sa"],
        correct: 2,
        explanation: '"Eller" anvands nar man valjer mellan tva saker. Har far man valja mellan saft och vatten.',
        difficulty: "enkel",
      },
      {
        id: "sb14",
        sentence: "Jag ville sova, ___ jag var inte trott.",
        options: ["och", "men", "sa", "eller"],
        correct: 1,
        explanation: '"Men" visar motsats – att vilja sova och att inte vara trott ar motsatta saker.',
        difficulty: "enkel",
      },
      {
        id: "sb15",
        sentence: "Vi lekte ute. ___ gick vi in och at.",
        options: ["Men", "Sedan", "Eller", "Darfor"],
        correct: 1,
        explanation: '"Sedan" visar vad som hande i nasta steg – forst lekte vi, sedan at vi.',
        difficulty: "enkel",
      },
      {
        id: "sb16",
        sentence: "Han stannade hemma ___ han var sjuk.",
        options: ["men", "darfor att", "eller", "dessutom"],
        correct: 1,
        explanation: '"Darfor att" forklarar anledningen – varfor stannade han hemma? Darfor att han var sjuk.',
        difficulty: "medel",
      },
      {
        id: "sb17",
        sentence: "___ det regnade tog vi bussen istallet for att ga.",
        options: ["Trots att", "Eftersom", "Men", "Dessutom"],
        correct: 1,
        explanation: '"Eftersom" anger orsaken forst i meningen – regnet var anledningen till att vi tog bussen.',
        difficulty: "medel",
      },
      {
        id: "sb18",
        sentence: "Boken var bra. ___ var slutet lite overraskande.",
        options: ["Men", "Darfor", "Eftersom", "Sa"],
        correct: 0,
        explanation: '"Men" lagger till en kontrasterande kommentar – boken var bra, men slutet var annorlunda an vantat.',
        difficulty: "medel",
      },
      {
        id: "sb19",
        sentence: "Vi hade lite tid. ___ hann vi med allt.",
        options: ["Darfor", "Anda", "Dessutom", "Eftersom"],
        correct: 1,
        explanation: '"Anda" visar att resultatet var ovantat – trots lite tid lyckades vi med allt.',
        difficulty: "medel",
      },
      {
        id: "sb20",
        sentence: "Forst gick vi till affaren, ___ till biblioteket.",
        options: ["men", "darefter", "darfor", "eftersom"],
        correct: 1,
        explanation: '"Darefter" visar tidsordning precis som "sedan" – det talar om vad som hande i nasta steg.',
        difficulty: "medel",
      },
      {
        id: "sb21",
        sentence: "Resan var dyr. ___ var upplevelsen helt fantastisk.",
        options: ["Darfor", "A andra sidan", "Dessutom", "Pa grund av"],
        correct: 1,
        explanation: '"A andra sidan" visar att man ser saken fran ett annat perspektiv – det ger en motvikt till det forsta pastaendet.',
        difficulty: "svar",
      },
      {
        id: "sb22",
        sentence: "Ekonomin forsvagas. ___ okar arbetslosheten.",
        options: ["Trots det", "Till foljd av detta", "A ena sidan", "Snarare"],
        correct: 1,
        explanation: '"Till foljd av detta" ar ett formellt sambandsord som visar att det ena ar en konsekvens av det andra.',
        difficulty: "svar",
      },
      {
        id: "sb23",
        sentence: "Han prastod att han var oskyldig. Bevisningen talade ___ emot honom.",
        options: ["dessutom", "daremot", "foljaktligen", "saledes"],
        correct: 1,
        explanation: '"Daremot" anvands for att kontrastera tva pastaenden – hans ord mot bevisningen.',
        difficulty: "svar",
      },
      {
        id: "sb24",
        sentence: "Forskningen visar tydliga resultat. ___ kan man dra slutsatsen att metoden fungerar.",
        options: ["Trots det", "Saledes", "Snarare", "Aven om"],
        correct: 1,
        explanation: '"Saledes" ar ett formellt sambandsord som drar en logisk slutsats fran det som tidigare sagts.',
        difficulty: "svar",
      },
      {
        id: "sb25",
        sentence: "Det ar inte fragan om att ge upp. ___ handlar det om att hitta nya vagar.",
        options: ["Dessutom", "Snarare", "Darfor", "Trots att"],
        correct: 1,
        explanation: '"Snarare" anvands for att korrigera eller nyansera ett tidigare pastaende – det ar inte X, utan snarare Y.',
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
        explanation: "Fragor avslutas alltid med fragetecken.",
        difficulty: "enkel",
      },
      {
        id: "st2",
        sentence: "Jag kopte mjolk_ brod och ost.",
        options: [".", "!", ";", ","],
        correct: 3,
        explanation: "Kommatecken anvands for att separera delar i en upprakning.",
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
        explanation: "Nar repliken foljs av en talstreck-fras anvands kommatecken.",
        difficulty: "medel",
      },
      {
        id: "st5",
        sentence: "Han alskar att lasa_ det ar hans hobby.",
        options: [",", ".", ";", "!"],
        correct: 2,
        explanation: "Semikolon binder ihop tva sjalvstandiga satser som hanger ihop.",
        difficulty: "medel",
      },
      {
        id: "st6",
        sentence: "Vi hade med oss allt_ talt, sovsackar och mat.",
        options: [".", ":", ";", "!"],
        correct: 1,
        explanation: "Kolon anvands fore en upprakning eller forklaring.",
        difficulty: "medel",
      },
      {
        id: "st7",
        sentence: "Vilken vacker solnedgang_",
        options: [".", "?", ",", "!"],
        correct: 3,
        explanation: "Utrop avslutas med utropstecken aven nar de borjar med 'vilken'.",
        difficulty: "enkel",
      },
      {
        id: "st8",
        sentence: 'Han sa_ "Jag kommer snart."',
        options: [",", ":", ";", "."],
        correct: 1,
        explanation: "Kolon anvands fore ett citat eller direkt anforingstal.",
        difficulty: "medel",
      },
      {
        id: "st9",
        sentence: "Stockholm_ Sveriges huvudstad_ ligger pa fjorton oar.",
        options: ["– och –", ", och ,", ", och –", "( och )"],
        correct: 0,
        explanation: "Tankstreck anvands parvis for att rama in en inskjuten bisats (apposition).",
        difficulty: "svar",
      },
      {
        id: "st10",
        sentence: "Hon har bott i manga lander_ Frankrike_ Spanien_ Japan och Brasilien.",
        options: [": , , ,", "; , , ,", ": ; ; ;", ", , , ,"],
        correct: 0,
        explanation: "Kolon fore upprakningen och kommatecken mellan leden.",
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "st11",
        sentence: "Jag heter Lisa_",
        options: ["!", "?", ".", ","],
        correct: 2,
        explanation: "En vanlig mening som beratter nagot avslutas med punkt. Det ar ingen fraga och inget utrop.",
        difficulty: "enkel",
      },
      {
        id: "st12",
        sentence: "Hur gammal ar du_",
        options: [".", "!", "?", ","],
        correct: 2,
        explanation: "Meningen borjar med ett frageord (hur) och ar en fraga – den avslutas darfor med fragetecken.",
        difficulty: "enkel",
      },
      {
        id: "st13",
        sentence: "Akta dig_",
        options: [".", "?", ",", "!"],
        correct: 3,
        explanation: "Det ar en varning eller ett utrop – sadar meningar avslutas med utropstecken for att visa att det ar viktigt.",
        difficulty: "enkel",
      },
      {
        id: "st14",
        sentence: "Vi har en hund_ en katt och en hamster.",
        options: [".", "!", ";", ","],
        correct: 3,
        explanation: "Kommatecken anvands mellan saker i en upprakning. Fore 'och' behover man inte komma.",
        difficulty: "enkel",
      },
      {
        id: "st15",
        sentence: "Vad glad jag blir_",
        options: [".", "?", "!", ","],
        correct: 2,
        explanation: "Meningen uttrycker en stark kansla – det ar ett utrop och avslutas darfor med utropstecken.",
        difficulty: "enkel",
      },
      {
        id: "st16",
        sentence: "Kan du komma imorgon_",
        options: [".", "!", "?", ","],
        correct: 2,
        explanation: "Aven fragor som inte borjar med ett frageord behover fragetecken. 'Kan du...' ar en fraga.",
        difficulty: "enkel",
      },
      {
        id: "st17",
        sentence: "Nar solen gatt ner_ tande vi en brasa.",
        options: [".", ";", "!", ","],
        correct: 3,
        explanation: "Kommatecken anvands for att skilja bisatsen ('nar solen gatt ner') fran huvudsatsen.",
        difficulty: "medel",
      },
      {
        id: "st18",
        sentence: 'Mamma fragar_ "Har du gjort laxan?"',
        options: [",", ":", ".", ";"],
        correct: 1,
        explanation: "Kolon satter man fore ett direkt citat – det signalerar att nagon citeras.",
        difficulty: "medel",
      },
      {
        id: "st19",
        sentence: "Jag gillar att lasa_ skriva och rita.",
        options: [".", ";", "!", ","],
        correct: 3,
        explanation: "Kommatecken anvands mellan leden i en upprakning av aktiviteter. Inget komma behoves fore 'och'.",
        difficulty: "medel",
      },
      {
        id: "st20",
        sentence: "Vi hade tva val_ stanna hemma eller ga ut.",
        options: [",", ":", ";", "."],
        correct: 1,
        explanation: "Kolon anvands fore en forklaring av vad de tva valen var.",
        difficulty: "medel",
      },
      {
        id: "st21",
        sentence: "Alla var dar_ Anna_ Erik_ Sofia och Kalle.",
        options: [": , , ,", "; , , ,", ", , , ,", ": ; ; ;"],
        correct: 0,
        explanation: "Kolon fore upprakningen av namn, och kommatecken mellan namnen i listan.",
        difficulty: "medel",
      },
      {
        id: "st22",
        sentence: "Boken var tjock_ anda laste hon ut den pa en dag.",
        options: [",", ";", ":", "!"],
        correct: 1,
        explanation: "Semikolon passar har – det binder ihop tva sjalvstandiga satser som star i kontrast till varandra.",
        difficulty: "svar",
      },
      {
        id: "st23",
        sentence: 'Forfattaren skriver_ "Att lasa ar att resa utan att lamna rummet."',
        options: [",", ".", ":", ";"],
        correct: 2,
        explanation: "Kolon fore ett direkt citat, aven nar citatet ar langre. Kolon signalerar att nagon citeras ordagrant.",
        difficulty: "svar",
      },
      {
        id: "st24",
        sentence: "Vetenskapen visar tydliga resultat_ daremot kravs mer forskning.",
        options: [",", ";", ":", "!"],
        correct: 1,
        explanation: "Semikolon anvands mellan tva sjalvstandiga satser som har ett innehallsligt samband, har en kontrast.",
        difficulty: "svar",
      },
      {
        id: "st25",
        sentence: "Tre saker ar viktiga i livet_ halsa_ karlek_ och mening.",
        options: [": , ,", "; , ,", ", , ,", ": ; ;"],
        correct: 0,
        explanation: "Kolon inleder upprakningen av de tre sakerna, och kommatecken separerar dem. Komma fore 'och' ar valfritt men vanligt i langre upprakningar.",
        difficulty: "svar",
      },
    ],
  },

  /* ---- Stavning ---- */
  {
    key: "stavning",
    label: "Stavning",
    description: "Vilket ord ar ratt stavat?",
    questions: [
      {
        id: "sp1",
        sentence: "Valj ratt stavning:",
        options: ["defenetivt", "definitivt", "deffinitivt", "definitvt"],
        correct: 1,
        explanation: '"Definitivt" stavas med i-i-i och ett f.',
        difficulty: "medel",
      },
      {
        id: "sp2",
        sentence: "Valj ratt stavning:",
        options: ["inteligent", "intiligent", "intelligent", "intelegent"],
        correct: 2,
        explanation: '"Intelligent" stavas med dubbelt-l och -ent.',
        difficulty: "medel",
      },
      {
        id: "sp3",
        sentence: "Valj ratt stavning:",
        options: ["miljo", "miljo", "milje", "miljoe"],
        correct: 0,
        explanation: '"Miljo" stavas med o.',
        difficulty: "enkel",
      },
      {
        id: "sp4",
        sentence: "Valj ratt stavning:",
        options: ["aggresiv", "aggressiv", "agressiv", "aggresiv"],
        correct: 1,
        explanation: '"Aggressiv" stavas med dubbelt-g och dubbelt-s.',
        difficulty: "medel",
      },
      {
        id: "sp5",
        sentence: "Valj ratt stavning:",
        options: ["restaurang", "restarang", "resturang", "restraurang"],
        correct: 0,
        explanation: '"Restaurang" – tank pa det franska ursprunget.',
        difficulty: "medel",
      },
      {
        id: "sp6",
        sentence: "Valj ratt stavning:",
        options: ["kanske", "kanске", "kanshe", "kanskje"],
        correct: 0,
        explanation: '"Kanske" ar ratt stavning.',
        difficulty: "enkel",
      },
      {
        id: "sp7",
        sentence: "Valj ratt stavning:",
        options: ["engagera", "engasjera", "engagera", "engachera"],
        correct: 0,
        explanation: '"Engagera" stavas med g-g (ej sj-ljud i stavningen).',
        difficulty: "medel",
      },
      {
        id: "sp8",
        sentence: "Valj ratt stavning:",
        options: ["necessar", "nessesar", "necessar", "nesessar"],
        correct: 2,
        explanation: '"Necessar" stavas med c och dubbelt-s.',
        difficulty: "svar",
      },
      {
        id: "sp9",
        sentence: "Valj ratt stavning:",
        options: ["parallell", "paralell", "parallell", "parelell"],
        correct: 0,
        explanation: '"Parallell" stavas med dubbelt-l i slutet och ett l i mitten.',
        difficulty: "svar",
      },
      {
        id: "sp10",
        sentence: "Valj ratt stavning:",
        options: ["chauffeur", "chaffeur", "chauffor", "chauffer"],
        correct: 2,
        explanation: '"Chauffor" ar den svenska stavningen (ej den franska).',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "sp11",
        sentence: "Valj ratt stavning:",
        options: ["skola", "sqola", "skåla", "scola"],
        correct: 0,
        explanation: '"Skola" stavas med sk. Pa svenska skrivs sk-ljudet i borjan av ord oftast med bokstaverna s och k.',
        difficulty: "enkel",
      },
      {
        id: "sp12",
        sentence: "Valj ratt stavning:",
        options: ["jag", "jag", "jag", "jaq"],
        correct: 0,
        explanation: '"Jag" stavas med g i slutet. I svenskan anvands inte q pa det sattet.',
        difficulty: "enkel",
      },
      {
        id: "sp13",
        sentence: "Valj ratt stavning:",
        options: ["mycket", "myket", "mycket", "mucket"],
        correct: 0,
        explanation: '"Mycket" stavas med ck – det ar ett vanligt ord som ar bra att memorera.',
        difficulty: "enkel",
      },
      {
        id: "sp14",
        sentence: "Valj ratt stavning:",
        options: ["manniskor", "manniskor", "meniskor", "manniskor"],
        correct: 0,
        explanation: '"Manniskor" stavas med a och dubbelt-n. Tank pa grundformen "manniska".',
        difficulty: "enkel",
      },
      {
        id: "sp15",
        sentence: "Valj ratt stavning:",
        options: ["naturligtvis", "naturligvis", "naturligtvis", "natturligtvis"],
        correct: 0,
        explanation: '"Naturligtvis" stavas med t – det kommer av "naturligt vis" (pa ett naturligt satt).',
        difficulty: "enkel",
      },
      {
        id: "sp16",
        sentence: "Valj ratt stavning:",
        options: ["garage", "garasje", "garrAge", "garrage"],
        correct: 0,
        explanation: '"Garage" stavas med g-e i slutet. Ordet kommer fran franskan.',
        difficulty: "medel",
      },
      {
        id: "sp17",
        sentence: "Valj ratt stavning:",
        options: ["antagligen", "antaligen", "antagligen", "anntagligen"],
        correct: 0,
        explanation: '"Antagligen" stavas med g – det kommer av verbet "anta" plus andelsen "-ligen".',
        difficulty: "medel",
      },
      {
        id: "sp18",
        sentence: "Valj ratt stavning:",
        options: ["egentligen", "egentlien", "egentligen", "egenteligen"],
        correct: 0,
        explanation: '"Egentligen" stavas med g och utan extra e. Tank pa att det bygger pa "egentlig" plus -en.',
        difficulty: "medel",
      },
      {
        id: "sp19",
        sentence: "Valj ratt stavning:",
        options: ["korrektur", "korektur", "korrektyr", "korektyr"],
        correct: 0,
        explanation: '"Korrektur" stavas med dubbelt-r och -ur i slutet.',
        difficulty: "medel",
      },
      {
        id: "sp20",
        sentence: "Valj ratt stavning:",
        options: ["koncentration", "konsertration", "konsentration", "koncentrasion"],
        correct: 0,
        explanation: '"Koncentration" stavas med c (ej s) och -tion i slutet. Tank pa att c ger ett s-ljud har.',
        difficulty: "medel",
      },
      {
        id: "sp21",
        sentence: "Valj ratt stavning:",
        options: ["kommitté", "kommitte", "komite", "komité"],
        correct: 0,
        explanation: '"Kommitte" (eller "kommitté") stavas med dubbelt-m och dubbelt-t. Ordet kommer fran franskans "comité".',
        difficulty: "svar",
      },
      {
        id: "sp22",
        sentence: "Valj ratt stavning:",
        options: ["renässans", "rennasans", "renasans", "renessans"],
        correct: 0,
        explanation: '"Renassans" stavas med ett n och dubbelt-s. Ordet ar franskt och betyder "aterfordelse".',
        difficulty: "svar",
      },
      {
        id: "sp23",
        sentence: "Valj ratt stavning:",
        options: ["psykologi", "sykologi", "psykoloji", "psykollogi"],
        correct: 0,
        explanation: '"Psykologi" stavas med p i borjan (stumt p) och g. Det kommer fran grekiskans "psykhe" (sjal) och "logos" (lara).',
        difficulty: "svar",
      },
      {
        id: "sp24",
        sentence: "Valj ratt stavning:",
        options: ["reumatism", "reumatism", "rumatism", "reumatizm"],
        correct: 0,
        explanation: '"Reumatism" stavas med eu och -ism. Det ar ett grekiskt lanord.',
        difficulty: "svar",
      },
      {
        id: "sp25",
        sentence: "Valj ratt stavning:",
        options: ["chrysantemum", "krysantemum", "krysanthemum", "chrysanthemum"],
        correct: 1,
        explanation: '"Krysantemum" ar den svenska stavningen – utan ch och th som i engelskans "chrysanthemum". Pa svenska forsvenskas ofta grekiska/latinska stavningar.',
        difficulty: "svar",
      },
    ],
  },

  /* ---- De/dem/dom ---- */
  {
    key: "de-dem",
    label: "De/dem/dom",
    description: "Valj ratt form: de eller dem?",
    questions: [
      {
        id: "dd1",
        sentence: "___ gick till skolan.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. Har ar "de" subjekt i meningen (de som gar).',
        difficulty: "enkel",
      },
      {
        id: "dd2",
        sentence: "Jag sag ___ pa torget.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" ar objektsform. Har ar "dem" objekt (den/de jag sag).',
        difficulty: "enkel",
      },
      {
        id: "dd3",
        sentence: "Lararen gav ___ laxa.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" ar objektsform. Lararen (subjekt) gav dem (indirekt objekt) laxa.',
        difficulty: "enkel",
      },
      {
        id: "dd4",
        sentence: "___ nya eleverna borjade idag.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" anvands framfor adjektiv + substantiv (de nya eleverna). Tips: "de" = bestamningsord har.',
        difficulty: "medel",
      },
      {
        id: "dd5",
        sentence: "Boken som ___ laste var bra.",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. "De" ar subjekt i bisatsen (de som laste).',
        difficulty: "medel",
      },
      {
        id: "dd6",
        sentence: "Vi bjod ___ pa middag.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" ar objektsform efter preposition. "Pa" styr objektsformen.',
        difficulty: "medel",
      },
      {
        id: "dd7",
        sentence: "Ar det ___ som har vunnit?",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. Trots att det star efter "det" ar "de" subjekt (de som har vunnit).',
        difficulty: "medel",
      },
      {
        id: "dd8",
        sentence: "Alla ville traffa ___.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" ar objektsform. "Dem" ar direkt objekt (den/dem som alla ville traffa).',
        difficulty: "medel",
      },
      {
        id: "dd9",
        sentence: "___ som inte har biljett far inte ga in.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. "De" ar subjekt i huvudsatsen (de far inte ga in).',
        difficulty: "svar",
      },
      {
        id: "dd10",
        sentence: "For ___ som ar intresserade finns mer information har.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" star efter prepositionen "for" och ar darfor objektsform.',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "dd11",
        sentence: "___ springer i parken.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. Tips: byt ut mot "vi" eller "oss". "Vi springer" later ratt, inte "oss springer". Darfor: "de".',
        difficulty: "enkel",
      },
      {
        id: "dd12",
        sentence: "Hunden foljer efter ___.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" ar objektsform. Tips: byt ut mot "oss". "Hunden foljer efter oss" later ratt. Darfor: "dem".',
        difficulty: "enkel",
      },
      {
        id: "dd13",
        sentence: "___ ar mina basta vanner.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. "De" ar subjekt – det ar de som ar vanner. Tips: "Vi ar mina basta vanner" later ratt.',
        difficulty: "enkel",
      },
      {
        id: "dd14",
        sentence: "Mamma hamtade ___ fran skolan.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" ar objektsform. Mamma (subjekt) hamtade dem (objekt). Tips: "Mamma hamtade oss" later ratt.',
        difficulty: "enkel",
      },
      {
        id: "dd15",
        sentence: "Var det ___ som ringde?",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. "De" ar subjekt i bisatsen (de som ringde). Tips: "Var det vi som ringde?" later ratt.',
        difficulty: "enkel",
      },
      {
        id: "dd16",
        sentence: "___ vackra blommorna stod i vasen.",
        options: ["De", "Dem"],
        correct: 0,
        explanation: '"De" ar bestamningsord framfor adjektiv + substantiv. Har star "de" framfor "vackra blommorna" och ar inte objekt.',
        difficulty: "medel",
      },
      {
        id: "dd17",
        sentence: "Vi skrev ett brev till ___.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" anvands efter prepositionen "till". Prepositioner styr alltid objektsform. Tips: "Vi skrev ett brev till oss" later ratt.',
        difficulty: "medel",
      },
      {
        id: "dd18",
        sentence: "Jag tror att ___ har ratt.",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. I bisatsen "att de har ratt" ar "de" subjekt (de som har ratt).',
        difficulty: "medel",
      },
      {
        id: "dd19",
        sentence: "Chefen bad ___ stanna kvar.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" ar objektsform. "Bad" styr objekt – chefen bad dem (inte de). Tips: "Chefen bad oss stanna kvar" later ratt.',
        difficulty: "medel",
      },
      {
        id: "dd20",
        sentence: "Ar ___ redo att ga?",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. "De" ar subjekt – det ar de som ar redo. Tips: "Ar vi redo?" later ratt, inte "Ar oss redo?".',
        difficulty: "medel",
      },
      {
        id: "dd21",
        sentence: "Manga av ___ hade rest langt.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" star efter prepositionen "av" och ar darfor objektsform. "Av oss" later ratt.',
        difficulty: "svar",
      },
      {
        id: "dd22",
        sentence: "Enligt ___ jag talat med ar forslaget bra.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" star efter prepositionen "enligt" och ar darfor objektsform, aven om en bisats foljer.',
        difficulty: "svar",
      },
      {
        id: "dd23",
        sentence: "Det var ___ som hade skrivit rapporten.",
        options: ["de", "dem"],
        correct: 0,
        explanation: '"De" ar subjektsform. Trots placeringen efter "det var" ar "de" subjekt i satsen – det ar de som hade skrivit.',
        difficulty: "svar",
      },
      {
        id: "dd24",
        sentence: "Bland ___ som deltog var flera kanda forfattare.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" star efter prepositionen "bland" och ar darfor objektsform, aven om det foljs av en relativsats.',
        difficulty: "svar",
      },
      {
        id: "dd25",
        sentence: "Ingen av ___ forstod instruktionerna.",
        options: ["de", "dem"],
        correct: 1,
        explanation: '"Dem" star efter prepositionen "av". Prepositioner som av, for, bland, mellan, med styr alltid objektsform.',
        difficulty: "svar",
      },
    ],
  },

  /* ---- Verbbojning ---- */
  {
    key: "verbbojning",
    label: "Verbbojning",
    description: "Valj ratt form av verbet.",
    questions: [
      {
        id: "vb1",
        sentence: "Hon ___ pa kontoret varje dag. (arbeta, presens)",
        options: ["arbetar", "arbetade", "arbetat", "arbeta"],
        correct: 0,
        explanation: '"Arbetar" ar presensformen av "arbeta" (grupp 1: -ar).',
        difficulty: "enkel",
      },
      {
        id: "vb2",
        sentence: "Vi ___ hem sent igar. (komma, preteritum)",
        options: ["kommer", "kom", "kommit", "komma"],
        correct: 1,
        explanation: '"Kom" ar preteritum av "komma" (oregelbundet verb).',
        difficulty: "enkel",
      },
      {
        id: "vb3",
        sentence: "De har ___ hela dagen. (springa, supinum)",
        options: ["springer", "sprang", "sprungit", "springa"],
        correct: 2,
        explanation: '"Sprungit" ar supinum av "springa" – anvands med "har/hade".',
        difficulty: "medel",
      },
      {
        id: "vb4",
        sentence: "Barnet ___ glaset pa golvet igar. (tappar, preteritum)",
        options: ["tappar", "tappade", "tappat", "tappa"],
        correct: 1,
        explanation: '"Tappade" ar preteritum av "tappa" (grupp 1: -ade).',
        difficulty: "enkel",
      },
      {
        id: "vb5",
        sentence: "Jag har ___ brevet. (skriva, supinum)",
        options: ["skriver", "skrev", "skrivit", "skriven"],
        correct: 2,
        explanation: '"Skrivit" ar supinum av "skriva" – anvands med "har".',
        difficulty: "medel",
      },
      {
        id: "vb6",
        sentence: "Han ___ en ny bil forra veckan. (kopa, preteritum)",
        options: ["koper", "kopte", "kopt", "kopa"],
        correct: 1,
        explanation: '"Kopte" ar preteritum av "kopa" (grupp 2: -te).',
        difficulty: "medel",
      },
      {
        id: "vb7",
        sentence: "Vi hade ___ dar forut. (vara, supinum)",
        options: ["ar", "var", "varit", "vore"],
        correct: 2,
        explanation: '"Varit" ar supinum av "vara" – anvands med "hade".',
        difficulty: "medel",
      },
      {
        id: "vb8",
        sentence: "De ___ oss om hjalp. (be, preteritum)",
        options: ["ber", "bad", "bett", "be"],
        correct: 1,
        explanation: '"Bad" ar preteritum av "be" (oregelbundet: be – bad – bett).',
        difficulty: "svar",
      },
      {
        id: "vb9",
        sentence: "Hon har ___ dricka at alla. (bjuda, supinum)",
        options: ["bjuder", "bjod", "bjudit", "bjuden"],
        correct: 2,
        explanation: '"Bjudit" ar supinum av "bjuda" (bjuda – bjod – bjudit).',
        difficulty: "svar",
      },
      {
        id: "vb10",
        sentence: "Vi ___ inte vad som hande. (veta, preteritum)",
        options: ["vet", "visste", "vetat", "veta"],
        correct: 1,
        explanation: '"Visste" ar preteritum av "veta" (oregelbundet: veta – visste – vetat).',
        difficulty: "svar",
      },
      /* --- New questions --- */
      {
        id: "vb11",
        sentence: "Jag ___ varje dag. (lasa, presens)",
        options: ["lasa", "laste", "laser", "last"],
        correct: 2,
        explanation: '"Laser" ar presensformen av "lasa" (grupp 2: -er). Presens anvands for saker som hander nu eller regelbundet.',
        difficulty: "enkel",
      },
      {
        id: "vb12",
        sentence: "Barnen ___ i tradgarden igar. (leka, preteritum)",
        options: ["leker", "lekte", "lekt", "leka"],
        correct: 1,
        explanation: '"Lekte" ar preteritum av "leka" (grupp 2: -te). Preteritum anvands for saker som hande i det forflutna.',
        difficulty: "enkel",
      },
      {
        id: "vb13",
        sentence: "Hunden ___ mycket mat varje dag. (ata, presens)",
        options: ["ater", "at", "atit", "ata"],
        correct: 0,
        explanation: '"Ater" ar presensformen av "ata" (oregelbundet verb). Presens beskriver vad som hander just nu eller regelbundet.',
        difficulty: "enkel",
      },
      {
        id: "vb14",
        sentence: "Vi ___ till skolan varje morgon. (ga, presens)",
        options: ["gar", "gick", "gatt", "ga"],
        correct: 0,
        explanation: '"Gar" ar presensformen av "ga" (oregelbundet). "Varje morgon" visar att det ar presens – nagot som sker regelbundet.',
        difficulty: "enkel",
      },
      {
        id: "vb15",
        sentence: "Mamma ___ en fin tarta igar. (baka, preteritum)",
        options: ["bakar", "bakade", "bakat", "baka"],
        correct: 1,
        explanation: '"Bakade" ar preteritum av "baka" (grupp 1: -ade). Alla verb i grupp 1 far -ade i preteritum.',
        difficulty: "enkel",
      },
      {
        id: "vb16",
        sentence: "Hon har ___ en ny sang. (sjunga, supinum)",
        options: ["sjunger", "sjong", "sjungit", "sjungen"],
        correct: 2,
        explanation: '"Sjungit" ar supinum av "sjunga" (sjunga – sjong – sjungit). Supinum anvands alltid med "har" eller "hade".',
        difficulty: "medel",
      },
      {
        id: "vb17",
        sentence: "Vi ___ hela natten. (dansa, preteritum)",
        options: ["dansar", "dansade", "dansat", "dansa"],
        correct: 1,
        explanation: '"Dansade" ar preteritum av "dansa" (grupp 1: -ade). Tidsuttrycket "hela natten" visar att det ar forfluten tid.',
        difficulty: "enkel",
      },
      {
        id: "vb18",
        sentence: "De har ___ bort alla kakor. (ata, supinum)",
        options: ["ater", "at", "atit", "aten"],
        correct: 2,
        explanation: '"Atit" ar supinum av "ata" (ata – at – atit). Med "har" anvands alltid supinumformen.',
        difficulty: "medel",
      },
      {
        id: "vb19",
        sentence: "Jag ___ till bussen varje dag. (springa, presens)",
        options: ["springer", "sprang", "sprungit", "springa"],
        correct: 0,
        explanation: '"Springer" ar presensformen av "springa". "Varje dag" visar att det sker regelbundet, alltsa presens.',
        difficulty: "medel",
      },
      {
        id: "vb20",
        sentence: "De hade ___ fore oss. (anlanda, supinum)",
        options: ["anlanda", "anlande", "anlant", "anlandar"],
        correct: 2,
        explanation: '"Anlant" ar supinum av "anlonda/anlonda" (grupp 2: -t). Med "hade" anvands alltid supinum.',
        difficulty: "medel",
      },
      {
        id: "vb21",
        sentence: "Barnet ___ sin nallebjorn overallt. (bora, preteritum)",
        options: ["bar", "bor", "burit", "bora"],
        correct: 0,
        explanation: '"Bar" ar preteritum av "bora" (oregelbundet: bora – bar – burit). Manga starka verb byter vokal i preteritum.',
        difficulty: "medel",
      },
      {
        id: "vb22",
        sentence: "De ___ nagot konstigt i skogen. (se, preteritum)",
        options: ["ser", "sag", "sett", "se"],
        correct: 1,
        explanation: '"Sag" ar preteritum av "se" (oregelbundet: se – sag – sett). "Se" ar ett av de vanligaste oregelbundna verben.',
        difficulty: "svar",
      },
      {
        id: "vb23",
        sentence: "Hon har ___ pa kontoret i tio ar. (sitta, supinum)",
        options: ["sitter", "satt", "suttit", "sitta"],
        correct: 2,
        explanation: '"Suttit" ar supinum av "sitta" (sitta – satt – suttit). Observera vokalvaxlingen i-a-u som ar typisk for starka verb.',
        difficulty: "svar",
      },
      {
        id: "vb24",
        sentence: "Publiken ___ nar artisten kom in pa scenen. (skrika, preteritum)",
        options: ["skriker", "skrek", "skrikit", "skrika"],
        correct: 1,
        explanation: '"Skrek" ar preteritum av "skrika" (oregelbundet: skrika – skrek – skrikit). Vokalvaxlingen i-e ar vanlig i starka verb.',
        difficulty: "svar",
      },
      {
        id: "vb25",
        sentence: "Vi hade ___ att komma i tid men det gick inte. (forska, supinum = forsoka)",
        options: ["forsoker", "forsokte", "forsokt", "forsoka"],
        correct: 2,
        explanation: '"Forsokt" ar supinum av "forsoka" (grupp 2: forsoka – forsokte – forsokt). Med "hade" anvands alltid supinumformen.',
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
  if (pct >= 0.8) return "Bra jobbat! Nastan alla ratt!";
  if (pct >= 0.6) return "Bra forsok! Ovning ger fardighet!";
  return "Fortsatt ova – du blir battre for varje gang!";
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
        <p className="text-neutral-500 dark:text-neutral-400">Inga ovningar tillgangliga for denna arskurs.</p>
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
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Ovningar</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Interaktiva ovningar i svenska for {config.label} – valj en kategori och borja!
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
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Svarighetsgrad:</span>
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
            ({filteredQuestions.length} fragor)
          </span>
        </div>
      )}

      {/* Empty state */}
      {filteredQuestions.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-neutral-500 dark:text-neutral-400">
              Inga fragor matchar den valda svarighetsgraden i denna kategori.
            </p>
            <Button onClick={() => handleDifficultyChange("alla")} className="mt-4">
              Visa alla fragor
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
              Forsok igen
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
                Fraga {currentIndex + 1} / {filteredQuestions.length}
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
                  {currentIndex + 1 >= filteredQuestions.length ? "Se resultat" : "Nasta fraga"}
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
            {score} ratt hittills
          </p>
        </div>
      )}
    </div>
  );
}
