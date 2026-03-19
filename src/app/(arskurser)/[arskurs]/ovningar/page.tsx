import { notFound } from "next/navigation";
import { AGE_GROUPS } from "@/lib/skolverket/constants";
import type { AgeGroup } from "@/lib/supabase/types";
import { OvningarClient } from "./ovningar-client";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

interface Props {
  params: Promise<{ arskurs: string }>;
}

export async function generateStaticParams() {
  return AGE_GROUPS.map((g) => ({ arskurs: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { arskurs } = await params;
  const group = AGE_GROUPS.find((g) => g.slug === arskurs);
  if (!group) return {};
  return {
    title: `Ovningar – ${group.label}`,
    description: `Interaktiva ovningar i svenska for ${group.label.toLowerCase()} – testa dina kunskaper!`,
  };
}

export default async function OvningarPage({ params }: Props) {
  const { arskurs } = await params;
  if (!VALID_AGE_GROUPS.has(arskurs)) notFound();

  return <OvningarClient arskurs={arskurs as AgeGroup} />;
}
