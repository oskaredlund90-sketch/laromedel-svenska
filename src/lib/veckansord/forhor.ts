/**
 * Förhör, lucktext och export för veckans ord. Allt är deterministiskt så att
 * samma vecka alltid ger samma förhör (och samma facit).
 */

import { KATEGORIER, arskursNamn, grundord, type Arskursord, type Kategori, type Ord, type Vecka } from "./typer";

/** Blandar en lista på ett förutsägbart sätt utifrån ett frö. */
export function blanda<T>(lista: T[], fro: number): T[] {
  const a = [...lista];
  let s = fro * 9301 + 49297;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  // Undvik att allt hamnar på samma plats som i ordlistan.
  if (a.length > 1 && a.every((x, i) => x === lista[i])) a.push(a.shift()!);
  return a;
}

/**
 * Exempelmeningen med ordet bortplockat. Returnerar null om ordet inte går
 * att hitta säkert i meningen.
 */
export function lucka(o: Ord): { fore: string; svar: string; efter: string } | null {
  const forsta = grundord(o.ord).split(/\s+/)[0];
  const stam = forsta.slice(0, Math.max(3, Math.min(forsta.length - 1, 5))).toLowerCase();
  const ordRe = /[\p{L}-]+/gu;
  let m: RegExpExecArray | null;
  while ((m = ordRe.exec(o.exempel))) {
    if (m[0].toLowerCase().startsWith(stam)) {
      // Flerordsuttryck: ta med resten av uttrycket om det står direkt efter.
      const resten = grundord(o.ord).split(/\s+/).slice(1).join(" ");
      let slut = m.index + m[0].length;
      if (resten && o.exempel.slice(slut).trimStart().toLowerCase().startsWith(resten.toLowerCase())) {
        const mellan = o.exempel.slice(slut).length - o.exempel.slice(slut).trimStart().length;
        slut += mellan + resten.length;
      }
      return { fore: o.exempel.slice(0, m.index), svar: o.exempel.slice(m.index, slut), efter: o.exempel.slice(slut) };
    }
  }
  // Ordet sitter inne i ett sammansatt ord (t.ex. favoritårstid): lucka på den delen.
  const ordRe2 = /[\p{L}-]+/gu;
  while ((m = ordRe2.exec(o.exempel))) {
    const i = m[0].toLowerCase().indexOf(stam);
    if (i > 0) {
      const start = m.index + i;
      const slut = m.index + m[0].length;
      return { fore: o.exempel.slice(0, start), svar: o.exempel.slice(start, slut), efter: o.exempel.slice(slut) };
    }
  }
  return null;
}

export interface Forhor {
  /** Koppla ord (A, B, …) till förklaringar (1, 2, …). Veckans temaord. */
  koppla: { ord: string[]; forklaringar: string[]; facit: string[] };
  /** Lucktext med ämnesorden och några temaord. */
  luckor: { fore: string; efter: string; svar: string }[];
  /** Ord att skriva en egen mening med. */
  egnaMeningar: string[];
  /** Stavningsord som läraren läser upp (diktamen). */
  diktamen: string[];
}

export function skapaForhor(v: Vecka): Forhor {
  const tema = v.ord.filter((o) => o.kategori === "tema");
  const amne = v.ord.filter((o) => o.kategori === "amne");
  const stavning = v.ord.filter((o) => o.kategori === "stavning");
  const kopplaOrd = tema.length ? tema : v.ord;
  const forklaringar = blanda(kopplaOrd, v.nummer);
  const bokstav = (i: number) => String.fromCharCode(65 + i);
  const luckOrd = amne.length ? [...amne, ...blanda(tema, v.nummer + 3).slice(0, 2)] : v.ord;
  return {
    koppla: {
      ord: kopplaOrd.map((o) => o.ord),
      forklaringar: forklaringar.map((o) => o.forklaring),
      // Facit: för varje förklaring (1, 2 …) vilken bokstav som hör ihop.
      facit: forklaringar.map((o) => bokstav(kopplaOrd.indexOf(o))),
    },
    luckor: blanda(luckOrd, v.nummer + 7)
      .map(lucka)
      .filter((x): x is NonNullable<typeof x> => x !== null),
    egnaMeningar: blanda(kopplaOrd, v.nummer + 13)
      .slice(0, Math.min(2, kopplaOrd.length))
      .map((o) => o.ord),
    diktamen: stavning.map((o) => o.ord),
  };
}

/** Text att klistra in i Classroom, mejl eller veckobrev. */
export function classroomText(a: Arskursord, v: Vecka, kalendervecka?: number): string {
  const rubrik = `Veckans ord – ${arskursNamn(a.arskurs)}, ${kalendervecka ? `vecka ${kalendervecka}` : `läsårsvecka ${v.nummer}`} (${v.tema})`;
  const grupper = (Object.keys(KATEGORIER) as Kategori[])
    .map((k) => {
      const ord = v.ord.filter((o) => o.kategori === k);
      if (!ord.length) return "";
      const rader = ord.map((o) => `• ${o.ord} (${o.ordklass}) – ${o.forklaring}\n  Exempel: ${o.exempel}`).join("\n\n");
      return `${KATEGORIER[k].namn.toUpperCase()}\n${rader}`;
    })
    .filter(Boolean)
    .join("\n\n");
  return `${rubrik}\n\n${grupper}\n\nUppgift: Skriv en egen mening med varje ord. Lycka till!`;
}

function csvCell(s: string): string {
  return /[",;\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** CSV för kalkylark: vecka, tema, ord, ordklass, förklaring, exempel. */
export function csv(a: Arskursord, veckor: Vecka[] = a.veckor): string {
  const rader = [["Läsårsvecka", "Tema", "Kategori", "Ord", "Ordklass", "Förklaring", "Exempel"]];
  for (const v of veckor)
    for (const o of v.ord) rader.push([String(v.nummer), v.tema, KATEGORIER[o.kategori].namn, o.ord, o.ordklass, o.forklaring, o.exempel]);
  return "﻿" + rader.map((r) => r.map(csvCell).join(",")).join("\n") + "\n";
}

/** Import till Quizlet/Kahoot-liknande verktyg: ord<TAB>förklaring per rad. */
export function kortText(veckor: Vecka[]): string {
  return veckor.flatMap((v) => v.ord.map((o) => `${o.ord}\t${o.forklaring}`)).join("\n");
}
