import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN_PER_STADIUM } from "@/lib/grammatik/amnen";
import { ARSPLAN } from "@/lib/grammatik/arsplan";

const STADIER: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];

/** Avsnitt som inte finns på alla stadier – byte dit leder till stadiets startsida. */
const SAKNAS: Record<string, AgeGroup[]> = {
  kallkritik: ["lagstadiet"],
  retorik: ["lagstadiet"],
  litteraturbegrepp: ["lagstadiet"],
  "nordiska-sprak": ["lagstadiet", "mellanstadiet"],
  sprakhistoria: ["lagstadiet", "mellanstadiet"],
};

/** Parametrar som betyder samma sak på alla stadier och får följa med. */
const BEHALL = ["version", "haften"];

/**
 * Samma sida på ett annat stadium: /hogstadiet/grammatik/satsdelar →
 * /mellanstadiet/grammatik/satsdelar. Finns sidan inte där går vi till närmaste
 * nivå som finns (avsnittet eller stadiets startsida).
 */
export function bytStadium(pathname: string, search: string, mal: AgeGroup): string {
  const delar = pathname.split("/").filter(Boolean);

  if (delar[0] === "ovningshaften" && delar.length === 1) return `/ovningshaften?stadium=${mal}`;
  if (!STADIER.includes(delar[0] as AgeGroup)) return `/${mal}`;

  const [, avsnitt, tredje] = delar;
  if (!avsnitt || SAKNAS[avsnitt]?.includes(mal)) return `/${mal}`;
  if (avsnitt !== "grammatik") return `/${mal}/${avsnitt}`;

  if (!tredje) return `/${mal}/grammatik`;
  if (tredje === "bok") {
    const in_ = new URLSearchParams(search);
    const ut = new URLSearchParams();
    for (const k of BEHALL) if (in_.get(k)) ut.set(k, in_.get(k)!);
    const q = ut.toString();
    return `/${mal}/grammatik/bok${q ? `?${q}` : ""}`;
  }
  if (tredje === "planering") return `/${mal}/grammatik/planering/${ARSPLAN[mal][0].ak}`;
  return (AMNEN_PER_STADIUM[mal] as string[]).includes(tredje) ? `/${mal}/grammatik/${tredje}` : `/${mal}/grammatik`;
}
