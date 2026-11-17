import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import type { AgeGroup } from "@/lib/supabase/types";
import { hamtaArbetsomrade } from "@/lib/arbetsomraden";
import { fortestBilder, lektionsBilder } from "@/components/arbetsomraden/bilder";
import { Presentation, type Bild } from "@/components/grammatik/presentation";

interface Props {
  params: Promise<{ arskurs: string; id: string }>;
  searchParams: Promise<{ lektion?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, id } = await params;
  const ao = hamtaArbetsomrade(arskurs as AgeGroup, id);
  return ao ? { title: `${ao.titel} – presentation` } : {};
}

export default async function AoPresentationPage({ params, searchParams }: Props) {
  const { arskurs, id } = await params;
  const { lektion } = await searchParams;
  const stadie = arskurs as AgeGroup;
  const ao = hamtaArbetsomrade(stadie, id);
  if (!ao) notFound();
  // Lektion 1 i listan = förtestet (nr 1), därefter lektionerna (nr 2 …).
  const lektioner = [{ nr: 1, titel: "Förtest" }, ...ao.lektioner.map((l, i) => ({ nr: i + 2, titel: `Lektion ${i + 1}: ${l.titel}` }))];
  const bilder: Bild[] = [
    ...fortestBilder(ao).map((innehall) => ({ lektion: 1, innehall })),
    ...ao.lektioner.flatMap((l, i) => lektionsBilder(ao, l, i + 1).map((innehall) => ({ lektion: i + 2, innehall }))),
  ];
  const n = Number(lektion);
  const start = n >= 1 && n <= lektioner.length ? n : 1;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
        <Link href={`/${stadie}/arbetsomraden`} className="hover:text-neutral-900 dark:hover:text-white">
          Arbetsområden
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${stadie}/arbetsomraden/${ao.id}`} className="hover:text-neutral-900 dark:hover:text-white">
          {ao.titel}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">Presentation</span>
      </nav>
      <Presentation bilder={bilder} lektioner={lektioner} startLektion={start} />
    </div>
  );
}
