import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARSKURSORD, hamtaArskurs } from "@/lib/veckansord";
import { arskursFranSlug, arskursNamn, arskursSlug } from "@/lib/veckansord/typer";
import { Veckovy } from "./veckovy";

interface Props {
  params: Promise<{ arskurs: string; vecka: string }>;
}

export function generateStaticParams() {
  return ARSKURSORD.flatMap((a) => a.veckor.map((v) => ({ arskurs: arskursSlug(a.arskurs), vecka: String(v.nummer) })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const ak = arskursFranSlug(p.arskurs);
  return ak ? { title: `Veckans ord vecka ${p.vecka} – ${arskursNamn(ak)}` } : {};
}

export default async function VeckaPage({ params }: Props) {
  const p = await params;
  const ak = arskursFranSlug(p.arskurs);
  const a = ak ? hamtaArskurs(ak) : undefined;
  const v = a?.veckor.find((x) => x.nummer === Number(p.vecka));
  if (!a || !v) notFound();
  return <Veckovy arskurs={a.arskurs} vecka={v} antalVeckor={a.veckor.length} />;
}
