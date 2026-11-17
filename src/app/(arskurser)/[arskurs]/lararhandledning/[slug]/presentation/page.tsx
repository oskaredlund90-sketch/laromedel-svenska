import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { getGuideBySlug } from "@/lib/data/lararhandledningar";
import { handledningsBilder } from "@/components/lararhandledning/bilder";
import { Presentation } from "@/components/grammatik/presentation";

interface Props {
  params: Promise<{ arskurs: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, slug } = await params;
  const g = getGuideBySlug(arskurs, slug);
  return g ? { title: `${g.title} – bilder` } : {};
}

export default async function HandledningPresentation({ params }: Props) {
  const { arskurs, slug } = await params;
  const g = getGuideBySlug(arskurs, slug);
  if (!g) notFound();
  const bilder = handledningsBilder(g).map((innehall) => ({ lektion: 1, innehall }));
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
        <Link href={`/${arskurs}/lararhandledning`} className="hover:text-neutral-900 dark:hover:text-white">
          Lärarhandledningar
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${arskurs}/lararhandledning/${slug}`} className="hover:text-neutral-900 dark:hover:text-white">
          {g.title}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">Bilder</span>
      </nav>
      <Presentation bilder={bilder} lektioner={[{ nr: 1, titel: g.title }]} startLektion={1} />
    </div>
  );
}
