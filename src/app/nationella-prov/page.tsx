import Link from "next/link";
import { ClipboardCheck, BookOpen, PenLine, GraduationCap, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nationella prov i svenska",
  description:
    "Allt om nationella proven i svenska: vad de testar, hur de bedöms och hur du förbereder dig. Information för elever och lärare i årskurs 3, 6, 9 och gymnasiet.",
};

const GRADE_LEVELS = [
  {
    title: "Årskurs 3",
    slug: "arskurs-3",
    description: "Läsa, skriva och tala. Grundläggande färdigheter bedöms.",
    badge: "Lågstadiet",
    icon: BookOpen,
    details: "Godkänt / Ej godkänt",
  },
  {
    title: "Årskurs 6",
    slug: "arskurs-6",
    description: "Läsförståelse, skrivande och muntlig framställning.",
    badge: "Mellanstadiet",
    icon: PenLine,
    details: "Betyg E\u2013A",
  },
  {
    title: "Årskurs 9",
    slug: "arskurs-9",
    description: "Avancerad läsförståelse, argumentation och analys.",
    badge: "Högstadiet",
    icon: GraduationCap,
    details: "Betyg E\u2013A",
  },
  {
    title: "Gymnasiet",
    slug: "gymnasiet",
    description: "Svenska 1 och Svenska 3. PM-skrivande, retorik och litteraturanalys.",
    badge: "Gymnasiet",
    icon: Sparkles,
    details: "Betyg E\u2013A",
  },
];

export default function NationellaProvPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <ClipboardCheck className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Nationella prov i svenska
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Information, tips och f&ouml;rberedelser f&ouml;r elever och l&auml;rare.
        </p>
      </div>

      {/* What are national tests */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
          Vad &auml;r nationella prov?
        </h2>
        <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
          <p>
            Nationella prov &auml;r prov som alla elever i Sverige g&ouml;r vid
            vissa &aring;rskurser. Proven &auml;r framtagna av universitet p&aring;
            uppdrag av Skolverket och &auml;r samma f&ouml;r alla skolor i hela
            landet.
          </p>
          <p>
            Syftet med proven &auml;r att st&ouml;dja en r&auml;ttvis och likv&auml;rdig
            bed&ouml;mning och betygss&auml;ttning. Proven ska ocks&aring; ge
            underlag f&ouml;r att analysera om utbildningens m&aring;l uppn&aring;s
            p&aring; skolniv&aring; och nationell niv&aring;.
          </p>
          <p>
            I svenska g&ouml;rs nationella prov i <strong>&aring;rskurs 3</strong>,{" "}
            <strong>&aring;rskurs 6</strong>, <strong>&aring;rskurs 9</strong> och
            p&aring; <strong>gymnasiet</strong> (kurserna Svenska 1 och Svenska 3).
          </p>
        </div>
      </section>

      {/* Grade level cards */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
          V&auml;lj &aring;rskurs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {GRADE_LEVELS.map((level) => {
            const Icon = level.icon;
            return (
              <Link key={level.slug} href={`/nationella-prov/${level.slug}`}>
                <Card className="group h-full transition-all hover:border-neutral-400 hover:shadow-md dark:hover:border-neutral-600">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary">{level.badge}</Badge>
                    </div>
                    <CardTitle>{level.title}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Bed&ouml;mning: {level.details}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick info for students */}
      <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="mb-3 font-semibold text-neutral-900 dark:text-white">
          Bra att veta f&ouml;r dig som elev
        </h3>
        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li>
            &bull; Nationella prov &auml;r inte som vanliga prov &ndash; de &auml;r
            till f&ouml;r att hj&auml;lpa din l&auml;rare att s&auml;tta ett
            r&auml;ttvist betyg.
          </li>
          <li>
            &bull; Du kan inte &ldquo;plugga&rdquo; till proven p&aring; samma s&auml;tt
            som till ett matteprov, men du kan f&ouml;rbereda dig.
          </li>
          <li>
            &bull; Proven testar saker du redan &ouml;vat p&aring; i skolan: l&auml;sa,
            skriva och prata.
          </li>
          <li>
            &bull; Det &auml;r helt normalt att vara nerv&ouml;s. L&auml;s vidare
            p&aring; sidan f&ouml;r din &aring;rskurs f&ouml;r konkreta tips!
          </li>
        </ul>
      </section>
    </div>
  );
}
