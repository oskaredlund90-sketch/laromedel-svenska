/**
 * Grammatikens kapitel: titel, beskrivning och genomgång (lärobokstexten) per
 * ämne. Används av ämnessidorna och av grammatikboken (utskrift).
 */
import type { ReactNode } from "react";
import type { AgeGroup } from "@/lib/supabase/types";
import { SatsdelarGenomgang } from "./genomgang-satsdelar";
import { SambandGenomgang } from "./genomgang-samband";
import { MorfemGenomgang } from "./genomgang-morfem";
import { TextbindningGenomgang } from "./genomgang-textbindning";
import { OrdklasserGenomgang } from "./genomgang-ordklasser";
import { MeningsbyggnadGenomgang } from "./genomgang-meningsbyggnad";
import { SkiljeteckenGenomgang } from "./genomgang-skiljetecken";
import { StavningGenomgang } from "./genomgang-stavning";
import { OrdbildningGenomgang } from "./genomgang-ordbildning";
import { StilistikGenomgang } from "./genomgang-stilistik";

/* ------------------------------------------------------------------ */
/*  Topic content                                                      */
/* ------------------------------------------------------------------ */

export const KAPITEL: Record<
  string,
  { title: string; description: string; content: (p: { stadie: AgeGroup }) => ReactNode }
> = {
  morfem: {
    title: "Ordets byggstenar",
    description: "Rot, ändelser, prefix, suffix och sammansatta ord",
    content: MorfemGenomgang,
  },
  satsdelar: {
    title: "Satsdelar",
    description: "Subjekt, predikat, objekt, adverbial och fler satsdelar",
    content: SatsdelarGenomgang,
  },
  samband: {
    title: "Orsak, följd och villkor",
    description: "Hur du uttrycker varför något händer, vad det leder till och vad som måste gälla",
    content: SambandGenomgang,
  },
  ordklasser: {
    title: "Ordklasser",
    description: "De tio ordklasserna i svenskan",
    content: OrdklasserGenomgang,
  },
  meningsbyggnad: {
    title: "Meningsbyggnad",
    description: "Huvudsats, bisats, ordföljd, BIFF-regeln och variation",
    content: MeningsbyggnadGenomgang,
  },
  skiljetecken: {
    title: "Skiljetecken",
    description: "Regler för punkt, komma, kolon och mer",
    content: SkiljeteckenGenomgang,
  },
  stavning: {
    title: "Stavning",
    description: "Stavningsregler och vanliga fallgropar",
    content: StavningGenomgang,
  },
  ordbildning: {
    title: "Ordbildning",
    description: "Sammansättning, avledning och lånord",
    content: OrdbildningGenomgang,
  },
  textbindning: {
    title: "Textbindning",
    description: "Sambandsmarkörer, referensbindning, tematisk bindning och stycken",
    content: TextbindningGenomgang,
  },
  stilistik: {
    title: "Stilistik",
    description: "Stilfigurer, ton och språknivå",
    content: StilistikGenomgang,
  },
};

