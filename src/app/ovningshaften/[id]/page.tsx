import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HAFTEN, hamtaHafte } from "@/lib/haften";
import { HafteVy } from "./hafte-vy";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return HAFTEN.map((h) => ({ id: h.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const h = hamtaHafte((await params).id);
  if (!h) return {};
  return {
    title: `${h.titel} – Övningshäfte`,
    description: `${h.underrubrik}. ${h.antalUppgifter} uppgifter som rättas direkt eller skrivs ut med facit.`,
  };
}

export default async function HaftePage({ params }: Props) {
  const h = hamtaHafte((await params).id);
  if (!h) notFound();
  return <HafteVy hafte={h} />;
}
