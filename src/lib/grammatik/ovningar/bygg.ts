/**
 * Kompakta byggare för grammatikövningar, så att hundratals övningar kan
 * skrivas utan upprepad kod. Id:n skapas automatiskt: <ämne>-<typ>-<stadium>-n<nr>.
 *
 *   v("Fråga?", ["*rätt", "fel", "fel"], "Förklaring")        flerval (* = rätt)
 *   l("Jag stannade hemma ____ jag var sjuk.", ["*eftersom", "därför"], "…")
 *   r("Hon sa att hon {kommer inte|inte kommer}.", "…")         välj rätt form (fel|rätt)
 *   k("Instruktion", { Orsak: ["eftersom"], Villkor: ["om"] })   sortera
 *   s("Instruktion", "Katten:Subjekt | sover:Predikat", roller) satsanalys
 *   m("Klicka på alla verb.", "Hunden [springer] och [skäller].", "…")
 *   d("o|vän|lig", "o- (prefix) + vän (rot) + -lig (suffix)")    dela i morfem
 *   o("Instruktion", ["att", "hon", "inte", "kommer"], { end: "." })
 */

import type { AgeGroup } from "@/lib/supabase/types";
import type {
  CategorizationExercise,
  DelaExercise,
  ErrorCorrectionExercise,
  FillInBlankExercise,
  GrammarExercise,
  MarkeraExercise,
  MultipleChoiceExercise,
  OrdnaExercise,
  SentenceAnalysisExercise,
} from "@/lib/data/grammatik-ovningar";

/** Blandar i en ordning som bara beror på `nyckel` – samma på webben och i utskriften. */
export function blandaFast<T>(lista: T[], nyckel: string): T[] {
  let h = 2166136261;
  for (const c of nyckel) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const slump = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(slump() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const KORT: Record<AgeGroup, string> = { lagstadiet: "lag", mellanstadiet: "mel", hogstadiet: "hog", gymnasiet: "gy" };

export function bygg(topic: string, ageGroup: AgeGroup) {
  const ut: GrammarExercise[] = [];
  const nr: Record<string, number> = {};
  const bas = (typ: string) => {
    nr[typ] = (nr[typ] ?? 0) + 1;
    return { id: `${topic}-${typ}-${KORT[ageGroup]}-n${nr[typ]}`, topic, ageGroup };
  };
  /** Alternativen blandas (fast ordning per övning) så att rätt svar inte alltid står först. */
  const rattIndex = (alt: string[], nyckel: string) => {
    if (alt.filter((a) => a.startsWith("*")).length !== 1) throw new Error(`Exakt ett rätt alternativ krävs: ${alt.join(", ")}`);
    const blandade = blandaFast(alt, nyckel);
    const i = blandade.findIndex((a) => a.startsWith("*"));
    return { i, options: blandade.map((a) => a.replace(/^\*/, "")) };
  };

  return {
    ovningar: ut,

    v(prompt: string, alt: string[], explanation: string, instruction = "Välj rätt svar.") {
      const b = bas("mc");
      const { i, options } = rattIndex(alt, b.id);
      ut.push({ ...b, type: "multiple-choice", instruction, prompt, options, correct: i, explanation } satisfies MultipleChoiceExercise);
    },

    l(sentence: string, alt: string[], explanation: string, instruction = "Välj det ord som passar bäst.") {
      if (!sentence.includes("____")) throw new Error(`Lucka saknas: ${sentence}`);
      const b = bas("fib");
      const { i, options } = rattIndex(alt, b.id);
      ut.push({ ...b, type: "fill-in-blank", instruction, sentence, options, correct: options[i], explanation } satisfies FillInBlankExercise);
    },

    r(mall: string, explanation: string, instruction = "Ett ord eller en del av meningen är fel. Välj det som är rätt.") {
      const m = mall.match(/\{([^|}]+)\|([^}]+)\}/);
      if (!m) throw new Error(`{fel|rätt} saknas: ${mall}`);
      const [hel, fel, ratt] = m;
      ut.push({
        ...bas("ec"),
        type: "error-correction",
        instruction,
        sentence: mall.replace(hel, fel),
        correctedSentence: mall.replace(hel, ratt),
        errorWord: fel,
        correctWord: ratt,
        explanation,
      } satisfies ErrorCorrectionExercise);
    },

    k(instruction: string, grupper: Record<string, string[]>) {
      const correctMapping: Record<string, string> = {};
      for (const [kat, ord] of Object.entries(grupper)) for (const o of ord) correctMapping[o] = kat;
      const items = Object.keys(correctMapping);
      ut.push({ ...bas("cat"), type: "categorization", instruction, items, categories: Object.keys(grupper), correctMapping } satisfies CategorizationExercise);
    },

    s(instruction: string, analys: string, roleOptions: string[]) {
      const parts = analys.split("|").map((d) => {
        const i = d.lastIndexOf(":");
        return { text: d.slice(0, i).trim(), role: d.slice(i + 1).trim() };
      });
      for (const p of parts) if (!roleOptions.includes(p.role)) throw new Error(`Okänd roll ${p.role} i ${analys}`);
      if (new Set(parts.map((p) => p.text)).size !== parts.length) throw new Error(`Samma del två gånger: ${analys}`);
      const sentence = parts.map((p) => p.text).join(" ").replace(/^./, (c) => c.toUpperCase()) + ".";
      ut.push({ ...bas("sa"), type: "sentence-analysis", instruction, sentence, parts, roleOptions } satisfies SentenceAnalysisExercise);
    },

    m(instruction: string, text: string, explanation?: string) {
      if (!/\[[^\]]+\]/.test(text)) throw new Error(`Inget [rätt] ord: ${text}`);
      ut.push({ ...bas("mark"), type: "markera", instruction, text, explanation } satisfies MarkeraExercise);
    },

    d(word: string, explanation?: string, instruction = "Dela ordet i morfem. Klicka mellan bokstäverna där en ny del börjar.") {
      if (!word.includes("|")) throw new Error(`Ingen delning: ${word}`);
      ut.push({ ...bas("dela"), type: "dela", instruction, word, explanation } satisfies DelaExercise);
    },

    o(
      instruction: string,
      parts: string[],
      extra: { end?: string; alternatives?: string[][]; meningar?: boolean; explanation?: string } = {},
    ) {
      ut.push({ ...bas("ordna"), type: "ordna", instruction, parts, ...extra } satisfies OrdnaExercise);
    },
  };
}

/** Delar ett markera-textstycke i klickbara bitar. Rätta bitar stod inom [ ]. */
export function delaMarkera(text: string): { ord: string; fore: string; efter: string; ratt: boolean }[] {
  const ut: { ord: string; fore: string; efter: string; ratt: boolean }[] = [];
  for (const m of text.matchAll(/\[([^\]]+)\]([^\s[]*)|(\S+)/g)) {
    if (m[1] !== undefined) ut.push({ fore: "", ord: m[1], efter: m[2] ?? "", ratt: true });
    else {
      const t = m[3].match(/^([«"”(–-]*)(.*?)([.,!?:;»"”)…]*)$/)!;
      ut.push({ fore: t[1], ord: t[2], efter: t[3], ratt: false });
    }
  }
  return ut;
}

/** Positionerna (efter bokstav nr i) där ordet ska delas, och ordet utan |. */
export function delningar(word: string): { ord: string; grans: number[] } {
  const grans: number[] = [];
  let n = 0;
  for (const c of word) {
    if (c === "|") grans.push(n);
    else n++;
  }
  return { ord: word.replace(/\|/g, ""), grans };
}
