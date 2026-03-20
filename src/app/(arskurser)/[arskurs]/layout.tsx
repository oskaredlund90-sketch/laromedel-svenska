import { notFound } from "next/navigation";
import { AGE_GROUPS } from "@/lib/skolverket/constants";

const VALID_AGE_GROUPS = new Set<string>(AGE_GROUPS.map((g) => g.slug));

interface Props {
  children: React.ReactNode;
  params: Promise<{ arskurs: string }>;
}

export default async function AgeGroupLayout({ children, params }: Props) {
  const { arskurs } = await params;

  if (!VALID_AGE_GROUPS.has(arskurs)) {
    notFound();
  }

  return <>{children}</>;
}
