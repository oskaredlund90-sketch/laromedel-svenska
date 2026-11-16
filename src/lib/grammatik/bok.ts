import type { AgeGroup } from "@/lib/supabase/types";
import { hamtaHafte } from "@/lib/haften";
import type { Hafte } from "@/lib/haften/typer";
import { AMNEN, type GrammatikAmne } from "./amnen";

/**
 * Övningsboken: vilka övningshäften som hör till varje kapitel på varje
 * stadium, i den ordning de bör göras. Lättast först. Ett häfte kan finnas på
 * flera stadier – då som repetition eller som utmaning.
 */
export const HAFTEN_PER_KAPITEL: Record<AgeGroup, Partial<Record<GrammatikAmne, string[]>>> = {
  lagstadiet: {
    ordklasser: ["ordklasser-1-substantiv-verb-adjektiv", "genus-1-en-eller-ett"],
    morfem: ["morfem-1-sammansatta-ord-andelser"],
    satsdelar: ["satsdelar-1-subjekt-predikat"],
    meningsbyggnad: ["meningsbyggnad-5-hela-meningar"],
    samband: ["samband-1-eftersom-sa-om"],
    skiljetecken: ["skiljetecken-1-punkt"],
    stavning: ["stavning-1-dubbelteckning", "stavning-6-stor-bokstav"],
    textbindning: ["textbindning-0-forst-sedan"],
  },
  mellanstadiet: {
    ordklasser: ["ordklasser-1-substantiv-verb-adjektiv", "genus-2-bestamd-form", "grammatik-2-starka-verb"],
    morfem: ["morfem-1-sammansatta-ord-andelser", "morfem-2-prefix-suffix"],
    satsdelar: ["satsdelar-1-subjekt-predikat", "satsdelar-2-objekt-adverbial"],
    meningsbyggnad: ["meningsbyggnad-3-subjekt-verb", "grammatik-3-ordfoljd"],
    samband: ["samband-1-eftersom-sa-om", "meningsbyggnad-1-sambandsord"],
    skiljetecken: ["skiljetecken-1-punkt", "skiljetecken-3-dialog"],
    stavning: ["stavning-3-sj-ljud", "stavning-4-tj-och-j-ljud", "stavning-5-sarskrivning", "stavning-8-o-a", "stavning-9-vanliga-ord"],
    ordbildning: ["morfem-2-prefix-suffix", "stavning-5-sarskrivning"],
    textbindning: ["textbindning-0-forst-sedan", "textbindning-1-referensbindning"],
  },
  hogstadiet: {
    ordklasser: ["ordklasser-2-alla-tio", "grammatik-4-verbform", "grammatik-1-de-dem", "genus-3-adjektiv"],
    morfem: ["morfem-2-prefix-suffix", "morfem-3-rot-och-stavning"],
    satsdelar: ["satsdelar-2-objekt-adverbial", "satsdelar-3-predikativ-indirekt-objekt"],
    meningsbyggnad: ["grammatik-3-ordfoljd", "meningsbyggnad-2-bisats-inte", "meningsbyggnad-4-perspektiv"],
    samband: ["meningsbyggnad-1-sambandsord", "samband-2-uttryck-samband"],
    skiljetecken: ["skiljetecken-3-dialog", "skiljetecken-2-komma"],
    stavning: ["stavning-2-dubbelteckning-m-n", "stavning-7-versaler-gemener", "morfem-3-rot-och-stavning"],
    ordbildning: ["ordbildning-1-forkortningar-lanord", "morfem-2-prefix-suffix"],
    textbindning: ["textbindning-1-referensbindning", "meningsbyggnad-1-sambandsord"],
    stilistik: ["stilistik-1-stilniva-bildsprak", "meningsbyggnad-4-perspektiv"],
  },
  gymnasiet: {
    ordklasser: ["ordklasser-2-alla-tio", "ordklasser-3-pronomen-particip", "grammatik-5-kongruens", "genus-4-den-det"],
    morfem: ["morfem-3-rot-och-stavning", "morfem-4-fackord"],
    satsdelar: ["satsdelar-3-predikativ-indirekt-objekt", "satsdelar-4-fullstandig-satsanalys"],
    meningsbyggnad: ["meningsbyggnad-2-bisats-inte", "meningsbyggnad-6-stil-och-ordfoljd"],
    samband: ["samband-2-uttryck-samband", "samband-3-formella-samband"],
    skiljetecken: ["skiljetecken-2-komma", "skiljetecken-4-skrivregler"],
    stavning: ["stavning-7-versaler-gemener", "stavning-10-sprakriktighet"],
    ordbildning: ["ordbildning-1-forkortningar-lanord", "morfem-4-fackord"],
    textbindning: ["textbindning-1-referensbindning", "textbindning-3-rod-trad"],
    stilistik: ["stilistik-1-stilniva-bildsprak", "stilistik-2-retorik-och-genre"],
  },
};

/** Övningshäften som hör till ett kapitel, för ett stadium. */
export function haftenForKapitel(amne: GrammatikAmne, stadie: AgeGroup): Hafte[] {
  return (HAFTEN_PER_KAPITEL[stadie][amne] ?? []).map((id) => hamtaHafte(id)).filter((h): h is Hafte => !!h);
}

const ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];

/** Kapitelprovet (20 poäng) för ett kapitel på ett stadium. */
export function kapitelprovFor(amne: GrammatikAmne, stadie: AgeGroup): Hafte | undefined {
  return hamtaHafte(`kapitelprov-${stadie}-${amne}`);
}

/** Stadierna där ett häfte ingår i grammatikboken. Prov hör till sitt eget stadium. */
/** Startprovet i början av stadiet (tioårig grundskola: åk 3, 5, 8 och gymnasiet). */
export const STARTPROV_FOR: Record<AgeGroup, string> = {
  lagstadiet: "startprov-ak3",
  mellanstadiet: "startprov-ak5",
  hogstadiet: "startprov-ak8",
  gymnasiet: "startprov-gy",
};

export function stadierForHafte(id: string): AgeGroup[] {
  const start = ORDNING.find((s) => STARTPROV_FOR[s] === id);
  if (start) return [start];
  const prov = ORDNING.find((s) => id === `prov-${s}` || id.startsWith(`kapitelprov-${s}-`));
  if (prov) return [prov];
  return ORDNING.filter((s) => Object.values(HAFTEN_PER_KAPITEL[s]).some((ids) => ids?.includes(id)));
}

/**
 * Blandad repetition efter varje del i boken: några uppgifter från varje
 * kapitel i delen, hämtade ur kapitlets övningshäften (som inte står i själva
 * boken). Uppgifterna är spridda över häftet så att de inte är de första.
 */
export function repetitionForDel(stadie: AgeGroup, del: { nr: number; titel: string; kapitel: { amne: GrammatikAmne; nr: number }[] }): Hafte | undefined {
  const anvanda = new Set<string>();
  const delar: Hafte["delar"] = [];
  for (const { amne, nr } of del.kapitel) {
    let i = 0;
    const hafte = haftenForKapitel(amne, stadie).find((h) => !anvanda.has(h.id)) ?? haftenForKapitel(amne, stadie)[0];
    if (!hafte) continue;
    anvanda.add(hafte.id);
    // Två delar ur häftet (de sista, som oftast är svårast), tre uppgifter ur varje.
    for (const d of hafte.delar.slice(-2)) {
      const n = d.uppgifter.length;
      if (n === 0) continue;
      const valda = [Math.floor(n / 3), Math.floor((2 * n) / 3), n - 1].filter((v, i, a) => a.indexOf(v) === i).map((i) => d.uppgifter[i]);
      // Häftets egna delbokstäver (Del E …) stämmer inte med kapitlet – visa kapitlet i stället.
      i++;
      delar.push({ ...d, rubrik: `Kapitel ${nr}: ${AMNEN[amne].titel}${i > 1 ? " – fler uppgifter" : ""}`, uppgifter: valda.map((u) => ({ ...u, id: `rep-${del.nr}-${u.id}` })) });
    }
  }
  if (delar.length === 0) return undefined;
  const antal = delar.reduce((s, d) => s + d.uppgifter.length, 0);
  return {
    id: `repetition-${stadie}-${del.nr}`,
    titel: `Repetition – del ${del.nr}: ${del.titel}`,
    underrubrik: "Blandade uppgifter från alla kapitel i delen",
    omrade: "Grammatik",
    steg: 1,
    feltyper: [],
    regel: ["Uppgifterna blandar kapitlen i delen. Det är meningen – så minns du bättre.", "Är du osäker? Bläddra tillbaka till kapitlet och läs genomgången igen."],
    delar,
    antalUppgifter: antal,
    antalRader: antal,
  };
}
