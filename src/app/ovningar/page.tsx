"use client";

import { useState, useCallback } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw, Dumbbell } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface Question {
  id: string;
  sentence: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Category {
  key: string;
  label: string;
  description: string;
  questions: Question[];
}

/* -------------------------------------------------------------------------- */
/*  Data – 5 questions per category                                           */
/* -------------------------------------------------------------------------- */

const CATEGORIES: Category[] = [
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
      },
      {
        id: "ok2",
        sentence: 'Den **stora** hunden skallde.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 2,
        explanation: '"Stora" ar ett adjektiv eftersom det beskriver hur hunden ar.',
      },
      {
        id: "ok3",
        sentence: '**Hon** laser en bok.',
        options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"],
        correct: 3,
        explanation: '"Hon" ar ett pronomen eftersom det ersatter ett substantiv.',
      },
      {
        id: "ok4",
        sentence: 'Vi sprang **snabbt** hem.',
        options: ["Adjektiv", "Verb", "Adverb", "Preposition"],
        correct: 2,
        explanation: '"Snabbt" ar ett adverb eftersom det beskriver hur man sprang.',
      },
      {
        id: "ok5",
        sentence: 'Bollen rullade **under** bordet.',
        options: ["Adverb", "Konjunktion", "Preposition", "Pronomen"],
        correct: 2,
        explanation: '"Under" ar en preposition eftersom det anger var bollen rullade.',
      },
    ],
  },
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
      },
      {
        id: "sb2",
        sentence: "Hon studerade mycket. ___ fick hon bra betyg.",
        options: ["Men", "Dessutom", "Darfor", "Fastän"],
        correct: 2,
        explanation: '"Darfor" visar orsak och verkan – studier ledde till bra betyg.',
      },
      {
        id: "sb3",
        sentence: "Vi kan aka till stranden ___ till skogen.",
        options: ["men", "darfor", "eller", "eftersom"],
        correct: 2,
        explanation: '"Eller" visar ett val mellan tva alternativ.',
      },
      {
        id: "sb4",
        sentence: "Han var trott ___ han hade sovit daligt.",
        options: ["men", "eftersom", "eller", "dessutom"],
        correct: 1,
        explanation: '"Eftersom" forklarar orsaken till att han var trott.',
      },
      {
        id: "sb5",
        sentence: "Maten var god. ___ var den billig.",
        options: ["Men", "Dessutom", "Darfor", "Trots att"],
        correct: 1,
        explanation: '"Dessutom" lagger till ytterligare information.',
      },
    ],
  },
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
      },
      {
        id: "st2",
        sentence: "Jag kopte mjolk_ brod och ost.",
        options: [".", "!", ";", ","],
        correct: 3,
        explanation: "Kommatecken anvands for att separera delar i en upprakning.",
      },
      {
        id: "st3",
        sentence: "Se upp_",
        options: [".", "!", "?", ","],
        correct: 1,
        explanation: "Utrop och varningar avslutas med utropstecken.",
      },
      {
        id: "st4",
        sentence: '"Hej_ sa Anna.',
        options: [",", ".", "!", "?"],
        correct: 0,
        explanation: "Nar repliken foljs av en talstreck-fras anvands kommatecken.",
      },
      {
        id: "st5",
        sentence: "Han alskar att lasa_ det ar hans hobby.",
        options: [",", ".", ";", "!"],
        correct: 2,
        explanation: "Semikolon binder ihop tva sjalvstandiga satser som hanger ihop.",
      },
    ],
  },
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
      },
      {
        id: "sp2",
        sentence: "Valj ratt stavning:",
        options: ["inteligent", "intiligent", "intelligent", "intelegent"],
        correct: 2,
        explanation: '"Intelligent" stavas med dubbelt-l och -ent.',
      },
      {
        id: "sp3",
        sentence: "Valj ratt stavning:",
        options: ["miljö", "miljo", "milje", "miljoe"],
        correct: 0,
        explanation: '"Miljo" stavas med o-prick (o).',
      },
      {
        id: "sp4",
        sentence: "Valj ratt stavning:",
        options: ["aggresiv", "aggressiv", "agressiv", "aggresiv"],
        correct: 1,
        explanation: '"Aggressiv" stavas med dubbelt-g och dubbelt-s.',
      },
      {
        id: "sp5",
        sentence: "Valj ratt stavning:",
        options: ["restaurang", "restarang", "resturang", "restraurang"],
        correct: 0,
        explanation: '"Restaurang" – tänk pa det franska ursprunget.',
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
  if (pct === 1) return "Perfekt! Fantastiskt jobbat! 🌟";
  if (pct >= 0.8) return "Bra jobbat! Nastan alla ratt! 💪";
  if (pct >= 0.6) return "Bra forsok! Ovning ger farighet! 📚";
  return "Fortsatt ova – du blir battre for varje gang! 🚀";
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function OvningarPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const category = CATEGORIES.find((c) => c.key === activeCategory)!;
  const question = category.questions[currentIndex];

  const handleCategoryChange = useCallback((key: string) => {
    setActiveCategory(key);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, []);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (answered) return;
      setSelectedOption(optionIndex);
      setAnswered(true);
      if (optionIndex === question.correct) {
        setScore((s) => s + 1);
      }
    },
    [answered, question.correct]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= category.questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  }, [currentIndex, category.questions.length]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, []);

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
            Interaktiva ovningar i svenska – valj en kategori och borja!
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
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

      {/* Finished view */}
      {finished ? (
        <Card>
          <CardHeader>
            <CardTitle>Resultat – {category.label}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-3xl font-bold text-neutral-900 dark:text-white">
              {score} / {category.questions.length}
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {encouragement(score, category.questions.length)}
            </p>
            <Button onClick={handleReset} className="mt-4 gap-2">
              <RotateCcw className="h-4 w-4" />
              Forsok igen
            </Button>
          </CardContent>
        </Card>
      ) : (
        /* Question view */
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{category.label}</CardTitle>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                Fraga {currentIndex + 1} / {category.questions.length}
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
                  {currentIndex + 1 >= category.questions.length ? "Se resultat" : "Nasta fraga"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Progress bar */}
      <div className="mt-6">
        <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-full rounded-full bg-neutral-900 transition-all dark:bg-white"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / category.questions.length) * 100}%`,
            }}
          />
        </div>
        <p className="mt-1 text-right text-xs text-neutral-400">
          {score} ratt hittills
        </p>
      </div>
    </div>
  );
}
