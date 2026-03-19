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
/*  Data – 6 categories, 10 questions each = 60 total                        */
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
