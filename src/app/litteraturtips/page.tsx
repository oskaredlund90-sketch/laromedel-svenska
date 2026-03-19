import { Library } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Litteraturtips",
  description: "Bokrekommendationer i svenska för alla åldrar – från lågstadiet till gymnasiet.",
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

interface Book {
  title: string;
  author: string;
  genre: string;
  description: string;
  difficulty: "Enkel" | "Medel" | "Utmanande";
  kursplanArea: string;
}

interface AgeGroup {
  label: string;
  slug: string;
  books: Book[];
}

const AGE_GROUPS: AgeGroup[] = [
  {
    label: "Lågstadiet (åk 1\u20133)",
    slug: "lagstadiet",
    books: [
      {
        title: "Pippi Långstrump",
        author: "Astrid Lindgren",
        genre: "Barnbok / Fantasi",
        description: "Klassisk barnbok om ett starkt och fantasifullt barn som lever på egen hand.",
        difficulty: "Enkel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "LasseMajas detektivbyrå",
        author: "Martin Widmark",
        genre: "Deckare",
        description: "Korta lättlästa deckare för unga läsare.",
        difficulty: "Enkel",
        kursplanArea: "Läsa och skriva",
      },
      {
        title: "Alfons Åberg",
        author: "Gunilla Bergström",
        genre: "Bilderbok",
        description: "Vardagsnära bilderböcker om en pojke och hans pappa.",
        difficulty: "Enkel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Mamma Mu",
        author: "Jujja Wieslander & Sven Nordqvist",
        genre: "Bilderbok / Humor",
        description: "Humoristiska bilderböcker om en nyfiken och äventyrslysten ko.",
        difficulty: "Enkel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Dogge doggelansen",
        author: "Frida Nilsson",
        genre: "Kapitelbok",
        description: "Lättläst kapitelbok om en hund som ger sig ut på äventyr.",
        difficulty: "Medel",
        kursplanArea: "Läsa och skriva",
      },
    ],
  },
  {
    label: "Mellanstadiet (åk 4\u20136)",
    slug: "mellanstadiet",
    books: [
      {
        title: "Bröderna Lejonhjärta",
        author: "Astrid Lindgren",
        genre: "Fantasi / Äventyr",
        description: "Fantasyroman om brödraskap, mod och kampen mellan gott och ont.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Berts dagbok",
        author: "Sören Olsson & Anders Jacobsson",
        genre: "Humor / Dagbok",
        description: "Humoristisk dagboksroman om en tonårspojkes vardag.",
        difficulty: "Enkel",
        kursplanArea: "Läsa och skriva",
      },
      {
        title: "Sandvargen",
        author: "Åsa Lind",
        genre: "Fantasi / Realism",
        description: "Poetisk berättelse om en flicka och en magisk varelse gjord av sand.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Tsatsiki och morsan",
        author: "Moni Nilsson",
        genre: "Realistisk barnbok",
        description: "Varm berättelse om en pojke, hans mamma och drömmen om en pappa i Grekland.",
        difficulty: "Enkel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Nils Holgerssons underbara resa",
        author: "Selma Lagerlöf",
        genre: "Äventyr / Klassiker",
        description: "Klassisk svensk äventyrsroman om en pojke som flyger genom Sverige med vildgäss.",
        difficulty: "Utmanande",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
    ],
  },
  {
    label: "Högstadiet (åk 7\u20139)",
    slug: "hogstadiet",
    books: [
      {
        title: "Hungerspelen",
        author: "Suzanne Collins",
        genre: "Dystopi / Science fiction",
        description: "Dystopisk ungdomsroman om överlevnad i ett framtida samhälle.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "En man som heter Ove",
        author: "Fredrik Backman",
        genre: "Realistisk roman / Humor",
        description: "Samtidsroman om en butter man och hans grannskap.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Djur",
        author: "Per Nilsson",
        genre: "Ungdomsroman",
        description: "Stark ungdomsroman om kärlek, identitet och svåra val.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Spelar död",
        author: "Stefan Casta",
        genre: "Ungdomsroman / Thriller",
        description: "Spännande ungdomsthriller med tematik kring utanförskap.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Pojkarna",
        author: "Jessica Schiefauer",
        genre: "Fantasi / Ungdomsroman",
        description: "Augustprisbelönad roman om identitet, kropp och förvandling.",
        difficulty: "Utmanande",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
    ],
  },
  {
    label: "Gymnasiet",
    slug: "gymnasiet",
    books: [
      {
        title: "Röda rummet",
        author: "August Strindberg",
        genre: "Klassiker / Samhällsroman",
        description: "Klassisk samhällskritisk roman som anses vara den första moderna svenska romanen.",
        difficulty: "Utmanande",
        kursplanArea: "Skönlitteratur och litteraturhistoria",
      },
      {
        title: "Kallocain",
        author: "Karin Boye",
        genre: "Dystopi / Science fiction",
        description: "Svensk dystopieklassiker om ett totalitärt samhälle och ett sanningsserum.",
        difficulty: "Utmanande",
        kursplanArea: "Skönlitteratur och litteraturhistoria",
      },
      {
        title: "Mördare utan ansikte",
        author: "Henning Mankell",
        genre: "Deckare",
        description: "Första boken om Wallander \u2013 en kriminalroman med samhällstematik.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och upplevelse",
      },
      {
        title: "Populärmusik från Vittula",
        author: "Mikael Niemi",
        genre: "Realistisk roman / Humor",
        description: "Uppväxtroman från Tornedalen med humor och allvar om kulturell identitet.",
        difficulty: "Medel",
        kursplanArea: "Skönlitteratur och litteraturhistoria",
      },
      {
        title: "Doktor Glas",
        author: "Hjalmar Söderberg",
        genre: "Klassiker / Dagboksroman",
        description: "Psykologisk klassiker i dagboksform som ställer etiska frågor om moral och handling.",
        difficulty: "Utmanande",
        kursplanArea: "Skönlitteratur och litteraturhistoria",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function difficultyColor(difficulty: Book["difficulty"]) {
  switch (difficulty) {
    case "Enkel":
      return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
    case "Medel":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300";
    case "Utmanande":
      return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
  }
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function LitteraturtipsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <Library className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Litteraturtips
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Bokrekommendationer per årskurs. Varje bok kopplas till kursplanens centrala innehåll.
        </p>
      </div>

      {/* Age group sections */}
      <div className="space-y-12">
        {AGE_GROUPS.map((group) => (
          <section key={group.slug}>
            <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
              {group.label}
            </h2>
            <div className="grid gap-4">
              {group.books.map((book) => (
                <Card key={book.title}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base">{book.title}</CardTitle>
                        <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                          {book.author} &middot; {book.genre}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyColor(book.difficulty)}`}
                      >
                        {book.difficulty}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {book.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">{book.kursplanArea}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
