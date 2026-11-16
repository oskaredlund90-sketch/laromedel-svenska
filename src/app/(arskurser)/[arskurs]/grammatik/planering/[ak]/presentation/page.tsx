import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { arskursFor } from "@/lib/grammatik/arsplan";
import { lektionerFor } from "@/lib/grammatik/lektioner";
import { sidnummerFor } from "@/lib/grammatik/sidnummer";
import { bilderForLektion } from "@/components/grammatik/lektionsbilder";
import { Presentation, type Bild } from "@/components/grammatik/presentation";

interface Props {
  params: Promise<{ arskurs: string; ak: string }>;
  searchParams: Promise<{ lektion?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { arskurs, ak } = await params;
  const ar = arskursFor(arskurs as AgeGroup, ak);
  return ar ? { title: `Grammatik ${ar.titel.toLowerCase()} – presentation` } : {};
}

export default async function PresentationPage({ params, searchParams }: Props) {
  const { arskurs, ak } = await params;
  const { lektion } = await searchParams;
  const stadie = arskurs as AgeGroup;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  const ar = arskursFor(stadie, ak);
  if (!group || !ar) notFound();
  const lektioner = lektionerFor(stadie, ak);
  const sidor = sidnummerFor(stadie, false);
  const bilder: Bild[] = lektioner.flatMap((l) => bilderForLektion(stadie, ak, l, sidor).map((innehall) => ({ lektion: l.nr, innehall })));
  const start = lektioner.some((l) => String(l.nr) === lektion) ? Number(lektion) : 1;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href={`/${stadie}/grammatik`} className="hover:text-neutral-900 dark:hover:text-white">
          Grammatik – {group.label}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${stadie}/grammatik/planering/${ak}`} className="hover:text-neutral-900 dark:hover:text-white">
          Lektionsplan {ar.titel.toLowerCase()}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900 dark:text-white">Presentation</span>
      </nav>
      <Presentation bilder={bilder} lektioner={lektioner.map((l) => ({ nr: l.nr, titel: l.titel }))} startLektion={start} />
    </div>
  );
}
