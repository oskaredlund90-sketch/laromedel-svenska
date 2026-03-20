import Link from "next/link";
import {
  Bot,
  MessageSquare,
  PenLine,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const SECTIONS = [
  {
    href: "/ai-labbet/promptguide",
    title: "Promptguide",
    description:
      "Lar dig skriva effektiva promptar for att fa ut det basta av AI-verktyg i svenskamnet.",
    icon: MessageSquare,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    href: "/ai-labbet/skrivhjalp",
    title: "Skrivhjalp med AI",
    description:
      "Anvand AI som ett stod i skrivprocessen utan att tappa din egen rost.",
    icon: PenLine,
    color:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  {
    href: "/ai-labbet/kallkritik",
    title: "Kallkritik och AI",
    description:
      "Granska AI-genererad text kritiskt. Lar dig varfor AI kan ha fel och hur du kontrollerar.",
    icon: ShieldCheck,
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  },
];

export default function AiLabbetPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Bot className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          AI-labbet
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Lar dig anvanda AI-verktyg pa ett kritiskt, kreativt och ansvarsfullt
          satt i svenskundervisningen. Har hittar du guider, ovningar och
          praktiska tips.
        </p>
      </div>

      {/* Intro box */}
      <div className="mb-10 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
        <div className="text-sm text-neutral-700 dark:text-neutral-300">
          <p className="font-medium">Varfor AI-labbet?</p>
          <p className="mt-1">
            AI-verktyg som ChatGPT och liknande sprakmodeller ar kraftfulla
            hjalmedel, men de kraver kunskap for att anvandas ratt. I AI-labbet
            lar du dig att skriva bra promptar, anvanda AI som skrivstod och
            &mdash; viktigast av allt &mdash; granska AI-svar kritiskt.
          </p>
        </div>
      </div>

      {/* Section cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.href} href={section.href}>
              <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                <CardHeader>
                  <div
                    className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${section.color}`}
                  >
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

      {/* Bottom note */}
      <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-500">
        AI-labbet ar under utveckling. Innehallet uppdateras lopande i takt med
        att AI-verktygen och skolans behov forandras.
      </p>
    </div>
  );
}
