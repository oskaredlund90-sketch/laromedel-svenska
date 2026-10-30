import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Briefcase, Compass, GraduationCap, Landmark, MessagesSquare, Newspaper, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Varför behöver jag bli bättre på svenska?",
  description: "Språket är nyckeln till att förstå världen, göra din röst hörd och klara livets viktiga situationer.",
};

const SKAL = [
  {
    ikon: Newspaper,
    rubrik: "Förstå världen",
    text: "Nyheter, debatter och beslut som påverkar ditt liv kommer i form av text och tal. Ju fler ord du kan, desto bättre förstår du vad som händer – och desto svårare blir det för någon att lura dig med falska nyheter eller vinklade budskap.",
    exempel: ["Följa nyheterna och förstå vad politiker egentligen lovar", "Avgöra om en källa går att lita på", "Läsa det finstilta innan du skriver under"],
  },
  {
    ikon: MessagesSquare,
    rubrik: "Bli förstådd",
    text: "Språket är ditt verktyg för att säga vad du tycker, förklara hur du känner och reda ut missförstånd. Den som kan uttrycka sig tydligt blir lyssnad på – bland vänner, i laget, i klassrummet och på nätet.",
    exempel: ["Förklara din sida när det blivit fel", "Övertyga någon med bra argument", "Skriva ett meddelande som inte missförstås"],
  },
  {
    ikon: Landmark,
    rubrik: "Klara formella situationer",
    text: "Förr eller senare ska du söka jobb, prata med en läkare, ringa en myndighet, skriva ett hyreskontrakt eller överklaga ett beslut. Då räcker inte vardagsspråket – du behöver kunna välja rätt ord och rätt ton.",
    exempel: ["Skriva ett personligt brev som ger dig jobbet", "Förklara dina symtom för en läkare", "Förstå ett brev från Försäkringskassan eller Skatteverket"],
  },
  {
    ikon: Compass,
    rubrik: "Tänka klarare",
    text: "Vi tänker med ord. Med ett större ordförråd kan du sätta ord på känslor, se nyanser och resonera om svåra frågor. Språket gör inte bara att andra förstår dig – det hjälper dig att förstå dig själv.",
    exempel: ["Skilja på att vara besviken, ledsen och frustrerad", "Se flera sidor av en fråga", "Planera och strukturera dina tankar"],
  },
];

export default function VarforSvenskaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-12">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/40">
          <Sparkles className="h-6 w-6 text-sky-700 dark:text-sky-300" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Varför behöver jag bli bättre på svenska?</h1>
        <p className="mt-4 text-xl text-neutral-700 dark:text-neutral-300">
          Svenska är inte bara ett ämne i skolan. Det är verktyget du använder för att förstå världen, göra din röst hörd och klara de
          viktiga stunderna i livet. Ju bättre du behärskar språket, desto mer frihet får du.
        </p>
      </div>

      <div className="space-y-6">
        {SKAL.map((s) => (
          <Card key={s.rubrik}>
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <s.ikon className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">{s.rubrik}</h2>
                <p className="mt-2 text-neutral-800 dark:text-neutral-200">{s.text}</p>
                <ul className="mt-3 space-y-1">
                  {s.exempel.map((e) => (
                    <li key={e} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-emerald-600">✓</span> {e}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
          <GraduationCap className="h-5 w-5" /> Och ja – det påverkar också betyg och framtid
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-5 text-neutral-800 dark:text-neutral-200">
              Godkänt i svenska eller svenska som andraspråk krävs för att komma in på gymnasiets nationella program. Och svenska påverkar
              alla andra ämnen: du läser och skriver i SO, NO och matte också.
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex gap-3 p-5 text-neutral-800 dark:text-neutral-200">
              <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
              <span>
                Nästan alla jobb kräver att du kan läsa instruktioner, skriva rapporter och mejl och prata med kunder eller kollegor. Språket
                följer med dig – oavsett vad du väljer.
              </span>
            </CardContent>
          </Card>
        </div>
      </section>

      <Link
        href="/bli-battre"
        className="mt-12 flex items-center justify-between gap-4 rounded-xl border border-emerald-300 bg-emerald-50 p-6 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/40"
      >
        <span>
          <span className="block text-lg font-semibold text-neutral-900 dark:text-white">Så blir du bättre</span>
          <span className="text-neutral-700 dark:text-neutral-300">Det viktigaste du kan göra – och hur du kommer igång i dag.</span>
        </span>
        <ArrowRight className="h-6 w-6 shrink-0 text-emerald-700" />
      </Link>
    </div>
  );
}
