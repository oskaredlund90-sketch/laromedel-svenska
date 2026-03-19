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
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
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

/* Section descriptions change per age group */
const SECTION_CONFIGS: Record<
  string,
  { slug: string; title: string; description: string; icon: typeof BookOpen }[]
> = {
  lagstadiet: [
    { slug: "kursplan", title: "Kursplan", description: "Centralt inneh\u00e5ll och kunskapskrav fr\u00e5n Skolverket f\u00f6r \u00e5k 1\u20133", icon: BookOpen },
    { slug: "lararhandledning", title: "L\u00e4rarhandledning", description: "Lektionsplaneringar f\u00f6r h\u00f6gl\u00e4sning, bokst\u00e4ver och enkel ber\u00e4ttelse", icon: Users },
    { slug: "elevtips", title: "Elevtips", description: "Roliga tips f\u00f6r att l\u00e4sa och skriva \u2013 anpassat f\u00f6r de yngsta", icon: GraduationCap },
    { slug: "grammatik", title: "Grammatik", description: "Ordklasser och meningsbyggnad p\u00e5 en enkel niv\u00e5", icon: BookA },
    { slug: "skrivverkstad", title: "Skrivverkstad", description: "Skriv sagor, brev och enkla ber\u00e4ttelser med hj\u00e4lp av mallar", icon: PenLine },
    { slug: "ovningar", title: "\u00d6vningar", description: "Interaktiva \u00f6vningar i stavning, ordklasser och l\u00e4sf\u00f6rst\u00e5else", icon: Dumbbell },
    { slug: "textbank", title: "Textbank", description: "Korta exempeltexter att l\u00e4sa och diskutera i klassen", icon: BookText },
    { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella provet i \u00e5k 3", icon: ClipboardCheck },
    { slug: "ordkunskap", title: "Ordkunskap", description: "Veckans ord och ord\u00f6vningar f\u00f6r \u00e5k 1\u20133", icon: MessageSquareText },
    { slug: "framsteg", title: "Mina framsteg", description: "Se hur det g\u00e5r \u2013 ord du l\u00e4rt dig, quizresultat och svit", icon: BarChart3 },
    { slug: "ai-i-svenskan", title: "AI i svenskan", description: "Hur l\u00e4rare kan anv\u00e4nda AI-verktyg i undervisningen", icon: Sparkles },
  ],
  mellanstadiet: [
    { slug: "kursplan", title: "Kursplan", description: "Centralt inneh\u00e5ll och kunskapskrav fr\u00e5n Skolverket f\u00f6r \u00e5k 4\u20136", icon: BookOpen },
    { slug: "lararhandledning", title: "L\u00e4rarhandledning", description: "Lektionsplaneringar f\u00f6r l\u00e4sstrategier, faktatexter och kamratrespons", icon: Users },
    { slug: "elevtips", title: "Elevtips", description: "Strategier f\u00f6r att bli en b\u00e4ttre l\u00e4sare och skribent", icon: GraduationCap },
    { slug: "grammatik", title: "Grammatik", description: "Ordklasser, meningsbyggnad och grundl\u00e4ggande skiljetecken", icon: BookA },
    { slug: "skrivverkstad", title: "Skrivverkstad", description: "Skriv faktatexter, ber\u00e4ttelser och enkla argumentationer", icon: PenLine },
    { slug: "ovningar", title: "\u00d6vningar", description: "\u00d6vningar i grammatik, stavning och l\u00e4sf\u00f6rst\u00e5else", icon: Dumbbell },
    { slug: "textbank", title: "Textbank", description: "Exempeltexter i olika genrer med analysfr\u00e5gor", icon: BookText },
    { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella provet i \u00e5k 6", icon: ClipboardCheck },
    { slug: "litteraturhistoria", title: "Litteraturhistoria", description: "En f\u00f6rsta introduktion till svenska f\u00f6rfattare och epoker", icon: Library },
    { slug: "ordkunskap", title: "Ordkunskap", description: "Veckans ord och ordberikning f\u00f6r \u00e5k 4\u20136", icon: MessageSquareText },
    { slug: "framsteg", title: "Mina framsteg", description: "Se hur det g\u00e5r \u2013 ord du l\u00e4rt dig, quizresultat och svit", icon: BarChart3 },
    { slug: "ai-i-svenskan", title: "AI i svenskan", description: "AI som verktyg f\u00f6r skrivande och l\u00e4rande", icon: Sparkles },
  ],
  hogstadiet: [
    { slug: "kursplan", title: "Kursplan", description: "Centralt inneh\u00e5ll och kunskapskrav fr\u00e5n Skolverket f\u00f6r \u00e5k 7\u20139", icon: BookOpen },
    { slug: "lararhandledning", title: "L\u00e4rarhandledning", description: "Lektionsplaneringar f\u00f6r argumentation, litteraturanalys och kritisk l\u00e4sning", icon: Users },
    { slug: "elevtips", title: "Elevtips", description: "Tips f\u00f6r uppsatsskrivning, muntliga presentationer och l\u00e4sf\u00f6rst\u00e5else", icon: GraduationCap },
    { slug: "grammatik", title: "Grammatik", description: "Satsanalys, textbindning, ordbildning och avancerad meningsbyggnad", icon: BookA },
    { slug: "skrivverkstad", title: "Skrivverkstad", description: "Argumenterande, utredande och ber\u00e4ttande texter med responsmallar", icon: PenLine },
    { slug: "ovningar", title: "\u00d6vningar", description: "\u00d6vningar i textanalys, grammatik och retorik", icon: Dumbbell },
    { slug: "textbank", title: "Textbank", description: "Modelltexter i alla genrer med f\u00f6rdjupande analysfr\u00e5gor", icon: BookText },
    { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella provet i \u00e5k 9 \u2013 delprov och bed\u00f6mning", icon: ClipboardCheck },
    { slug: "litteraturhistoria", title: "Litteraturhistoria", description: "Svenska litteraturens epoker fr\u00e5n medeltid till nutid", icon: Library },
    { slug: "ordkunskap", title: "Ordkunskap", description: "Veckans ord, akademiska ord och stilniv\u00e5er", icon: MessageSquareText },
    { slug: "framsteg", title: "Mina framsteg", description: "Se hur det g\u00e5r \u2013 ord du l\u00e4rt dig, quizresultat och svit", icon: BarChart3 },
    { slug: "ai-i-svenskan", title: "AI i svenskan", description: "AI-verktyg f\u00f6r skrivande, k\u00e4llkritik och spr\u00e5kutveckling", icon: Sparkles },
  ],
  gymnasiet: [
    { slug: "kursplan", title: "Kursplan", description: "Kursplaner f\u00f6r Svenska 1\u20133 och SVA 1\u20133 fr\u00e5n Skolverket", icon: BookOpen },
    { slug: "lararhandledning", title: "L\u00e4rarhandledning", description: "Lektionsplaneringar f\u00f6r vetenskapligt skrivande, retorik och litteratur", icon: Users },
    { slug: "elevtips", title: "Elevtips", description: "Strategier f\u00f6r akademiskt skrivande och muntliga presentationer", icon: GraduationCap },
    { slug: "grammatik", title: "Grammatik", description: "Avancerad grammatik, stilistik och spr\u00e5klig variation", icon: BookA },
    { slug: "skrivverkstad", title: "Skrivverkstad", description: "Vetenskapligt skrivande, ess\u00e4er, recensioner och retorisk analys", icon: PenLine },
    { slug: "ovningar", title: "\u00d6vningar", description: "\u00d6vningar i textanalys, retorik, stilistik och spr\u00e5khistoria", icon: Dumbbell },
    { slug: "textbank", title: "Textbank", description: "Kvalificerade exempeltexter med f\u00f6rdjupande analys", icon: BookText },
    { slug: "nationella-prov", title: "Nationella prov", description: "Information om nationella proven i Svenska 1 och 3", icon: ClipboardCheck },
    { slug: "litteraturhistoria", title: "Litteraturhistoria", description: "F\u00f6rdjupning i litteraturhistoria fr\u00e5n antiken till samtiden", icon: Library },
    { slug: "ordkunskap", title: "Ordkunskap", description: "Akademiskt ordf\u00f6rr\u00e5d, facktermer och etymologi", icon: MessageSquareText },
    { slug: "framsteg", title: "Mina framsteg", description: "Se hur det g\u00e5r \u2013 ord du l\u00e4rt dig, quizresultat och svit", icon: BarChart3 },
    { slug: "ai-i-svenskan", title: "AI i svenskan", description: "AI i akademiskt skrivande \u2013 m\u00f6jligheter, risker och k\u00e4llkritik", icon: Sparkles },
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
  const sections = SECTION_CONFIGS[arskurs] ?? SECTION_CONFIGS.hogstadiet;
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <AnimateOnScroll key={section.slug} delay={i * 60}>
              <Link href={`/${arskurs}/${section.slug}`}>
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
            </AnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
}
