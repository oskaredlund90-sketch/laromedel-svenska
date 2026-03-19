import { notFound } from "next/navigation";
import Link from "next/link";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import { Sparkles, MessageSquare, PenLine, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Props {
  params: Promise<{ arskurs: string }>;
}

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

const AI_SECTIONS = [
  {
    href: "/ai-labbet/promptguide",
    title: "Promptguide",
    description: "Lär dig skriva bra promptar för att få hjälp med svenska",
    icon: MessageSquare,
  },
  {
    href: "/ai-labbet/skrivhjalp",
    title: "Skrivhjälp med AI",
    description: "Använd AI som verktyg i skrivprocessen",
    icon: PenLine,
  },
  {
    href: "/ai-labbet/kallkritik",
    title: "Källkritik och AI",
    description: "Granska AI-genererad text kritiskt",
    icon: ShieldCheck,
  },
];

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `AI i svenskan ${group.label}`,
    description: `Hur du kan använda AI-verktyg i svenskundervisningen för ${group.label.toLowerCase()}.`,
  };
}

export default async function AiISvenskanPage({ params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  const group = AGE_GROUPS.find((g) => g.slug === arskurs)!;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Sparkles className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          AI i svenskan &ndash; {group.label}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Hur du kan använda AI-verktyg i svenskundervisningen för {group.description.toLowerCase()}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {AI_SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.href} href={section.href}>
              <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
