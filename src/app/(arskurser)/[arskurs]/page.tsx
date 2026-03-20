import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  GraduationCap,
  Users,
  Sparkles,
  BookA,
  PenLine,
  Dumbbell,
  BookText,
  ClipboardCheck,
  Library,
  MessageSquareText,
  BarChart3,
  BookOpenCheck,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

/* Accent colors per age group */
const ACCENT: Record<string, { icon: string; bg: string; border: string }> = {
  lagstadiet: {
    icon: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-100 group-hover:bg-sky-200 dark:bg-sky-900/30 dark:group-hover:bg-sky-900/50",
    border: "hover:border-sky-300 dark:hover:border-sky-700",
  },
  mellanstadiet: {
    icon: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 group-hover:bg-emerald-200 dark:bg-emerald-900/30 dark:group-hover:bg-emerald-900/50",
    border: "hover:border-emerald-300 dark:hover:border-emerald-700",
  },
  hogstadiet: {
    icon: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 group-hover:bg-violet-200 dark:bg-violet-900/30 dark:group-hover:bg-violet-900/50",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
  },
  gymnasiet: {
    icon: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 group-hover:bg-amber-200 dark:bg-amber-900/30 dark:group-hover:bg-amber-900/50",
    border: "hover:border-amber-300 dark:hover:border-amber-700",
  },
};

/* Section type */
interface Section {
  slug: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
}

/* Group type */
interface SectionGroup {
  groupTitle: string;
  groupIcon: typeof BookOpen;
  defaultOpen?: boolean;
  sections: Section[];
}

/* Grouped section configs per age group */
const GROUPED_SECTION_CONFIGS: Record<string, SectionGroup[]> = {
  lagstadiet: [
    {
      groupTitle: "Läsa",
      groupIcon: BookOpen,
      defaultOpen: true,
      sections: [
        { slug: "lasforstaelse", title: "Läsförståelse", description: "Interaktiva läsförståelseövningar med direkt feedback", icon: BookOpenCheck },
        { slug: "textbank", title: "Textbank", description: "Korta exempeltexter att läsa och diskutera i klassen", icon: BookText },
      ],
    },
    {
      groupTitle: "Skriva",
      groupIcon: PenLine,
      defaultOpen: true,
      sections: [
        { slug: "skrivverkstad", title: "Skrivverkstad", description: "Skriv sagor, brev och enkla berättelser med hjälp av mallar", icon: PenLine },
        { slug: "grammatik", title: "Grammatik", description: "Ordklasser och meningsbyggnad på en enkel nivå", icon: BookA },
        { slug: "ordkunskap", title: "Ordkunskap", description: "Veckans ord och ordövningar för åk 1–3", icon: MessageSquareText },
      ],
    },
    {
      groupTitle: "Tala",
      groupIcon: MessageSquareText,
      sections: [
        { slug: "ovningar", title: "Övningar", description: "Interaktiva övningar i stavning, ordklasser och läsförståelse", icon: Dumbbell },
        { slug: "elevtips", title: "Elevtips", description: "Roliga tips för att läsa och skriva – anpassat för de yngsta", icon: GraduationCap },
      ],
    },
    {
      groupTitle: "För lärare",
      groupIcon: Users,
      sections: [
        { slug: "lararhandledning", title: "Lärarhandledning", description: "Lektionsplaneringar för högläsning, bokstäver och enkel berättelse", icon: Users },
        { slug: "kursplan", title: "Kursplan", description: "Centralt innehåll och kunskapskrav från Skolverket för åk 1–3", icon: BookOpen },
      ],
    },
    {
      groupTitle: "Verktyg",
      groupIcon: Sparkles,
      sections: [
        { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella provet i åk 3", icon: ClipboardCheck },
        { slug: "framsteg", title: "Mina framsteg", description: "Se hur det går – ord du lärt dig, quizresultat och svit", icon: BarChart3 },
        { slug: "ai-i-svenskan", title: "AI i svenskan", description: "Hur lärare kan använda AI-verktyg i undervisningen", icon: Sparkles },
      ],
    },
  ],
  mellanstadiet: [
    {
      groupTitle: "Läsa",
      groupIcon: BookOpen,
      defaultOpen: true,
      sections: [
        { slug: "lasforstaelse", title: "Läsförståelse", description: "Läs texter och svara på frågor med direkt feedback", icon: BookOpenCheck },
        { slug: "textbank", title: "Textbank", description: "Exempeltexter i olika genrer med analysfrågor", icon: BookText },
        { slug: "litteraturhistoria", title: "Litteraturhistoria", description: "En första introduktion till svenska författare och epoker", icon: Library },
      ],
    },
    {
      groupTitle: "Skriva",
      groupIcon: PenLine,
      defaultOpen: true,
      sections: [
        { slug: "skrivverkstad", title: "Skrivverkstad", description: "Skriv faktatexter, berättelser och enkla argumentationer", icon: PenLine },
        { slug: "grammatik", title: "Grammatik", description: "Ordklasser, meningsbyggnad och grundläggande skiljetecken", icon: BookA },
        { slug: "ordkunskap", title: "Ordkunskap", description: "Veckans ord och ordberikning för åk 4–6", icon: MessageSquareText },
      ],
    },
    {
      groupTitle: "Tala",
      groupIcon: MessageSquareText,
      sections: [
        { slug: "ovningar", title: "Övningar", description: "Övningar i grammatik, stavning och läsförståelse", icon: Dumbbell },
        { slug: "elevtips", title: "Elevtips", description: "Strategier för att bli en bättre läsare och skribent", icon: GraduationCap },
      ],
    },
    {
      groupTitle: "För lärare",
      groupIcon: Users,
      sections: [
        { slug: "lararhandledning", title: "Lärarhandledning", description: "Lektionsplaneringar för lässtrategier, faktatexter och kamratrespons", icon: Users },
        { slug: "kursplan", title: "Kursplan", description: "Centralt innehåll och kunskapskrav från Skolverket för åk 4–6", icon: BookOpen },
      ],
    },
    {
      groupTitle: "Verktyg",
      groupIcon: Sparkles,
      sections: [
        { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella provet i åk 6", icon: ClipboardCheck },
        { slug: "framsteg", title: "Mina framsteg", description: "Se hur det går – ord du lärt dig, quizresultat och svit", icon: BarChart3 },
        { slug: "ai-i-svenskan", title: "AI i svenskan", description: "AI som verktyg för skrivande och lärande", icon: Sparkles },
      ],
    },
  ],
  hogstadiet: [
    {
      groupTitle: "Läsa",
      groupIcon: BookOpen,
      defaultOpen: true,
      sections: [
        { slug: "lasforstaelse", title: "Läsförståelse", description: "Läs och analysera texter med fördjupande frågor", icon: BookOpenCheck },
        { slug: "textbank", title: "Textbank", description: "Modelltexter i alla genrer med fördjupande analysfrågor", icon: BookText },
        { slug: "litteraturhistoria", title: "Litteraturhistoria", description: "Svenska litteraturens epoker från medeltid till nutid", icon: Library },
      ],
    },
    {
      groupTitle: "Skriva",
      groupIcon: PenLine,
      defaultOpen: true,
      sections: [
        { slug: "skrivverkstad", title: "Skrivverkstad", description: "Argumenterande, utredande och berättande texter med responsmallar", icon: PenLine },
        { slug: "grammatik", title: "Grammatik", description: "Satsanalys, textbindning, ordbildning och avancerad meningsbyggnad", icon: BookA },
        { slug: "ordkunskap", title: "Ordkunskap", description: "Veckans ord, akademiska ord och stilnivåer", icon: MessageSquareText },
      ],
    },
    {
      groupTitle: "Tala",
      groupIcon: MessageSquareText,
      sections: [
        { slug: "ovningar", title: "Övningar", description: "Övningar i textanalys, grammatik och retorik", icon: Dumbbell },
        { slug: "elevtips", title: "Elevtips", description: "Tips för uppsatsskrivning, muntliga presentationer och läsförståelse", icon: GraduationCap },
      ],
    },
    {
      groupTitle: "För lärare",
      groupIcon: Users,
      sections: [
        { slug: "lararhandledning", title: "Lärarhandledning", description: "Lektionsplaneringar för argumentation, litteraturanalys och kritisk läsning", icon: Users },
        { slug: "kursplan", title: "Kursplan", description: "Centralt innehåll och kunskapskrav från Skolverket för åk 7–9", icon: BookOpen },
      ],
    },
    {
      groupTitle: "Verktyg",
      groupIcon: Sparkles,
      sections: [
        { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella provet i åk 9 – delprov och bedömning", icon: ClipboardCheck },
        { slug: "framsteg", title: "Mina framsteg", description: "Se hur det går – ord du lärt dig, quizresultat och svit", icon: BarChart3 },
        { slug: "ai-i-svenskan", title: "AI i svenskan", description: "AI-verktyg för skrivande, källkritik och språkutveckling", icon: Sparkles },
      ],
    },
  ],
  gymnasiet: [
    {
      groupTitle: "Läsa",
      groupIcon: BookOpen,
      defaultOpen: true,
      sections: [
        { slug: "lasforstaelse", title: "Läsförståelse", description: "Läs, analysera och värdera texter på avancerad nivå", icon: BookOpenCheck },
        { slug: "textbank", title: "Textbank", description: "Kvalificerade exempeltexter med fördjupande analys", icon: BookText },
        { slug: "litteraturhistoria", title: "Litteraturhistoria", description: "Fördjupning i litteraturhistoria från antiken till samtiden", icon: Library },
      ],
    },
    {
      groupTitle: "Skriva",
      groupIcon: PenLine,
      defaultOpen: true,
      sections: [
        { slug: "skrivverkstad", title: "Skrivverkstad", description: "Vetenskapligt skrivande, essäer, recensioner och retorisk analys", icon: PenLine },
        { slug: "grammatik", title: "Grammatik", description: "Avancerad grammatik, stilistik och språklig variation", icon: BookA },
        { slug: "ordkunskap", title: "Ordkunskap", description: "Akademiskt ordförråd, facktermer och etymologi", icon: MessageSquareText },
      ],
    },
    {
      groupTitle: "Tala",
      groupIcon: MessageSquareText,
      sections: [
        { slug: "ovningar", title: "Övningar", description: "Övningar i textanalys, retorik, stilistik och språkhistoria", icon: Dumbbell },
        { slug: "elevtips", title: "Elevtips", description: "Strategier för akademiskt skrivande och muntliga presentationer", icon: GraduationCap },
      ],
    },
    {
      groupTitle: "För lärare",
      groupIcon: Users,
      sections: [
        { slug: "lararhandledning", title: "Lärarhandledning", description: "Lektionsplaneringar för vetenskapligt skrivande, retorik och litteratur", icon: Users },
        { slug: "kursplan", title: "Kursplan", description: "Kursplaner för Svenska 1–3 och SVA 1–3 från Skolverket", icon: BookOpen },
      ],
    },
    {
      groupTitle: "Verktyg",
      groupIcon: Sparkles,
      sections: [
        { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella proven i Svenska 1 och 3", icon: ClipboardCheck },
        { slug: "framsteg", title: "Mina framsteg", description: "Se hur det går – ord du lärt dig, quizresultat och svit", icon: BarChart3 },
        { slug: "ai-i-svenskan", title: "AI i svenskan", description: "AI i akademiskt skrivande – möjligheter, risker och källkritik", icon: Sparkles },
      ],
    },
  ],
};

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `${group.label} (${group.description})`,
    description: `Laromedel i svenska for ${group.label.toLowerCase()} - kursplan, lararhandledningar, elevtips, grammatik, ovningar och mer.`,
  };
}

export default async function AgeGroupPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;
  const groups = GROUPED_SECTION_CONFIGS[arskurs] ?? GROUPED_SECTION_CONFIGS.hogstadiet;
  const accent = ACCENT[arskurs] ?? ACCENT.hogstadiet;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-10 animate-fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {group.label}
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          {group.description} &ndash; Svenska och svenska som andraspr&aring;k
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {groups.map((g) => {
          const GroupIcon = g.groupIcon;
          return (
            <Accordion
              key={g.groupTitle}
              title={g.groupTitle}
              icon={<GroupIcon className="h-5 w-5" />}
              defaultOpen={g.defaultOpen}
              accentColor={accent.icon}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Link key={section.slug} href={`/${arskurs}/${section.slug}`}>
                      <Card className={`group h-full hover:-translate-y-1 hover:shadow-lg ${accent.border}`}>
                        <CardHeader>
                          <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${accent.bg}`}>
                            <Icon className={`h-5 w-5 ${accent.icon}`} />
                          </div>
                          <CardTitle className="text-base">{section.title}</CardTitle>
                          <CardDescription>{section.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
