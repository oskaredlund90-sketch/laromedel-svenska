import type { AgeGroup } from "@/lib/supabase/types";

/**
 * Arbetsområden utanför grammatiken (språkhistoria, dialekter, källkritik …),
 * planerade utifrån förslaget till ny kursplan i svenska (remiss nov 2026).
 * Varje område har förtest, lektioner med bilder och elevmaterial samt slutprov.
 */
export interface AoFraga {
  fraga: string;
  alternativ: string[];
  /** Index för rätt alternativ. */
  ratt: number;
  forklaring?: string;
}

export type AoBild =
  | { typ: "punkter"; rubrik: string; punkter: string[] }
  | { typ: "jamfor"; rubrik: string; kolumner: [string, string]; rader: [string, string][] }
  | { typ: "fraga"; fraga: AoFraga }
  | { typ: "uppgift"; rubrik: string; text: string; punkter?: string[] }
  | { typ: "diskutera"; fragor: string[] };

export interface AoText {
  rubrik: string;
  stycken: string[];
}

export interface AoLektion {
  titel: string;
  /** Vad eleverna ska kunna efter lektionen. */
  mal: string;
  /** Lärarens upplägg, steg för steg. */
  upplagg: string[];
  bilder: AoBild[];
  /** Elevens material: faktatext och uppgifter (skrivs ut). */
  elevtext: AoText[];
  uppgifter: string[];
  /** Sidor på sajten som hör till lektionen: [titel, sökväg]. */
  lankar?: [string, string][];
}

export interface Arbetsomrade {
  id: string;
  titel: string;
  stadie: AgeGroup;
  /** Förslag på årskurs, t.ex. "9". */
  arskurs: string;
  ingress: string;
  /** Vad i förslaget till kursplan området bygger på (sammanfattat). */
  kursplan: string[];
  mal: string[];
  begrepp: [string, string][];
  lankar: [string, string][];
  fortest: AoFraga[];
  lektioner: AoLektion[];
  prov: { fragor: AoFraga[]; oppna: { fraga: string; bedomning: string[] }[] };
  /** Tips och anpassningar för läraren. */
  tips: string[];
}
