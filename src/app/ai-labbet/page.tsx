import Link from "next/link";
import { Sparkles, MessageSquare, PenLine, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-labbet",
  description: "Lär dig använda AI-verktyg i svenskundervisningen med praktiska exempel och promptmallar.",
};

const SECTIONS = [
  {
    href: "/ai-labbet/promptguide",
    title: "Promptguide",
    description: "Lär dig skriva bra promptar med KRAFT-modellen",
    detail: "Kontext, Roll, Aufgift, Format och Ton – en enkel modell för att formulera bra frågor till AI.",
    icon: MessageSquare,
  },
  {
    href: "/ai-labbet/skrivhjalp",
    title: "Skrivhjälp med AI",
    description: "Använd AI som verktyg i skrivprocessen",
    detail: "Brainstorming, disposition, feedback och språkpolering – arbetsflöden för AI-assisterat skrivande.",
    icon: PenLine,
  },
  {
    href: "/ai-labbet/kallkritik",
    title: "Källkritik och AI",
    description: "Granska AI-genererad text kritiskt",
    detail: "Övningar i att identifiera felaktigheter, hallucineringar och bristande trovärdighet i AI-text.",
    icon: ShieldCheck,
  },
];

export default function AiLabbet() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Sparkles className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          AI-labbet
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Lär dig använda AI-verktyg i svenskundervisningen.
          AI är ett verktyg &ndash; inte en genväg. Här lär du dig använda det klokt.
        </p>
      </div>

      <div className="grid gap-6">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.href} href={section.href}>
              <Card className="group transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription className="mt-1">{section.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {section.detail}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
