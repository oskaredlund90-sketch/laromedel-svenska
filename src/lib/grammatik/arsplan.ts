import type { AgeGroup } from "@/lib/supabase/types";
import { AMNEN_PER_STADIUM, type GrammatikAmne } from "./amnen";

/**
 * Grammatikbokens kapitel fördelade på årskurser – samma uppdelning som i
 * planeringsguiden. Årskurserna följer förslaget till tioårig grundskola
 * (Skolverkets remiss november 2026): lågstadiet åk 1–4, mellanstadiet åk 5–7,
 * högstadiet åk 8–10. I boken (?ak=8) kommer årets kapitel med i sin helhet och
 * tidigare års kapitel som kort repetition.
 */
export interface Arskurs {
  /** Används i adressen: ?ak=8 */
  ak: string;
  /** "Årskurs 8", "År 1" */
  titel: string;
  /** Årets nya kapitel, i den ordning de tas. */
  kapitel: GrammatikAmne[];
  /** Årets fokus i en mening. */
  fokus: string;
  /** Antal lektioner (lågstadiet: korta pass) per kapitel, i samma ordning som kapitel. */
  lektioner: number[];
  /** Repetitionslektioner av tidigare år i början av läsåret. */
  repetition?: number;
  /** Repetitionslektioner inför slutprovet (sista året). */
  slutRepetition?: number;
}

export const ARSPLAN: Record<AgeGroup, Arskurs[]> = {
  lagstadiet: [
    { ak: "1", titel: "Årskurs 1", kapitel: ["meningsbyggnad", "skiljetecken"], fokus: "Meningen: stor bokstav, punkt och orden i rätt ordning.", lektioner: [10, 10] },
    { ak: "2", titel: "Årskurs 2", kapitel: ["stavning", "satsdelar"], fokus: "Stavning med dubbelteckning – och vem som gör vad i en mening.", lektioner: [12, 8], repetition: 2 },
    { ak: "3", titel: "Årskurs 3", kapitel: ["ordklasser", "morfem"], fokus: "Ordklasser och böjning – och att dela och bygga ord.", lektioner: [12, 8], repetition: 2 },
    { ak: "4", titel: "Årskurs 4", kapitel: ["samband", "textbindning"], fokus: "Från mening till text: eftersom, så, om och ord som binder ihop.", lektioner: [8, 8], repetition: 2 },
  ],
  mellanstadiet: [
    { ak: "5", titel: "Årskurs 5", kapitel: ["ordklasser", "morfem", "stavning"], fokus: "Ordet: ordklasser och böjning, rot, prefix och suffix samt stavningsmönster.", lektioner: [7, 5, 6] },
    { ak: "6", titel: "Årskurs 6", kapitel: ["ordbildning", "satsdelar", "meningsbyggnad"], fokus: "Sammansättning och avledning, satsdelar samt huvudsats och bisats.", lektioner: [4, 7, 6], repetition: 2 },
    { ak: "7", titel: "Årskurs 7", kapitel: ["samband", "skiljetecken", "textbindning"], fokus: "Samband, kommatering och dialog – och hur meningar binds ihop till text.", lektioner: [5, 5, 5], repetition: 2 },
  ],
  hogstadiet: [
    { ak: "8", titel: "Årskurs 8", kapitel: ["ordklasser", "morfem", "stavning", "satsdelar"], fokus: "Ordet och satsen: alla ordklasser, morfem, stavning och satsdelar.", lektioner: [5, 3, 3, 5] },
    { ak: "9", titel: "Årskurs 9", kapitel: ["ordbildning", "meningsbyggnad", "samband", "skiljetecken"], fokus: "Ordbildning med lånord – och meningen: BIFF, samband och kommatering.", lektioner: [3, 5, 4, 4], repetition: 2 },
    { ak: "10", titel: "Årskurs 10", kapitel: ["textbindning", "stilistik"], fokus: "Texten: textbindning och stil – och repetition inför slutprovet.", lektioner: [4, 4], repetition: 2, slutRepetition: 3 },
  ],
  gymnasiet: [
    { ak: "1", titel: "År 1", kapitel: ["ordklasser", "satsdelar", "stavning", "skiljetecken"], fokus: "Fullständig satsanalys och skrivregler för utredande text.", lektioner: [3, 3, 2, 3] },
    { ak: "2", titel: "År 2", kapitel: ["meningsbyggnad", "samband", "textbindning"], fokus: "Meningsbyggnad, exakta samband och röd tråd.", lektioner: [3, 3, 4], repetition: 1 },
    { ak: "3", titel: "År 3", kapitel: ["morfem", "ordbildning", "stilistik"], fokus: "Fackord och lånmorfem, stil och retorik – och repetition.", lektioner: [2, 2, 4], repetition: 1 },
  ],
};

export function arskursFor(stadie: AgeGroup, ak: string | undefined | null): Arskurs | undefined {
  return ak ? ARSPLAN[stadie].find((a) => a.ak === ak) : undefined;
}

/** Kapitel från tidigare årskurser i stadiet – repeteras kort det här året. */
export function repetitionsKapitel(stadie: AgeGroup, ak: string): GrammatikAmne[] {
  const plan = ARSPLAN[stadie];
  const i = plan.findIndex((a) => a.ak === ak);
  const tidigare = plan.slice(0, Math.max(i, 0)).flatMap((a) => a.kapitel);
  // I bokens ordning
  return AMNEN_PER_STADIUM[stadie].filter((a) => tidigare.includes(a));
}

/** Sista året i stadiet – då hör slutprovet till. */
export function arSistaAret(stadie: AgeGroup, ak: string): boolean {
  const plan = ARSPLAN[stadie];
  return plan[plan.length - 1]?.ak === ak;
}
