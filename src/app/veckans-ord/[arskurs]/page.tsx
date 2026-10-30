import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARSKURSORD, hamtaArskurs } from "@/lib/veckansord";
import { arskursFranSlug, arskursNamn, arskursSlug } from "@/lib/veckansord/typer";
import { Arskursvy } from "./arskursvy";

interface Props {
  params: Promise<{ arskurs: string }>;
}

export function generateStaticParams() {
  return ARSKURSORD.map((a) => ({ arskurs: arskursSlug(a.arskurs) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ak = arskursFranSlug((await params).arskurs);
  return ak ? { title: `Veckans ord – ${arskursNamn(ak)}` } : {};
}

export default async function ArskursPage({ params }: Props) {
  const ak = arskursFranSlug((await params).arskurs);
  const a = ak ? hamtaArskurs(ak) : undefined;
  if (!a) notFound();
  return <Arskursvy data={a} />;
}
