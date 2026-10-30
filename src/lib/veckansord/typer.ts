/**
 * Veckans ord per årskurs – ett läsår med 36 skolveckor.
 *
 * Varje årskurs har en fil i data/ med ett kompakt textformat:
 *
 *   ## 1 | Skolstart
 *   en klasskamrat | substantiv | En person som går i samma klass som du. | Min klasskamrat Ali hjälpte mig med matten.
 *   nyfiken | adjektiv | Vill gärna veta och lära sig mer. | Hon var nyfiken på den nya skolan.
 *
 * Substantiv skrivs med en/ett framför. Exempelmeningen ska innehålla ordet.
 *
 * En femte kolumn anger kategori: tema (standard om den saknas), amne (ord
 * som behövs i skolans ämnen) eller stavning (vanliga ord som ofta stavas fel).
 * Varje vecka har 7 temaord, 4 ämnesord och 4 stavningsord = 15 ord.
 */

export const ANTAL_VECKOR = 36;

/** Gemensamt tema per läsårsvecka, så att olika årskurser kan arbeta parallellt. */
export const TEMAN: string[] = [
  "Skolstart", "Vänskap", "Känslor", "Hösten", "Naturen och skogen", "Mat och måltider",
  "Kroppen och hälsan", "Sport och rörelse", "Mysterier och spänning", "Hemmet och familjen",
  "Staden och trafiken", "Yrken och arbete", "Tid och väder", "Djur", "Rymden",
  "Ljus och mörker", "Vintern", "Högtider och traditioner",
  "Nytt år och mål", "Teknik och uppfinningar", "Kommunikation och språk", "Sagor och berättelser",
  "Rättvisa och demokrati", "Miljö och klimat", "Resor och kartor", "Historia", "Musik och konst",
  "Vetenskap och experiment", "Pengar och handel", "Våren", "Vatten och hav",
  "Medier och källkritik", "Drömmar och framtiden", "Lek och fritid", "Sommaren", "Avslutning och minnen",
];

export const ORDKLASSER = [
  "substantiv", "verb", "adjektiv", "adverb", "pronomen", "preposition",
  "konjunktion", "subjunktion", "interjektion", "räkneord", "uttryck",
] as const;

export type Ordklass = (typeof ORDKLASSER)[number];

export type Kategori = "tema" | "amne" | "stavning";

export const KATEGORIER: Record<Kategori, { namn: string; antal: number }> = {
  tema: { namn: "Veckans tema", antal: 7 },
  amne: { namn: "Ord i skolans ämnen", antal: 4 },
  stavning: { namn: "Stavningsord", antal: 4 },
};

export interface Ord {
  ord: string;
  ordklass: Ordklass;
  forklaring: string;
  exempel: string;
  kategori: Kategori;
}

export interface Vecka {
  nummer: number;
  tema: string;
  ord: Ord[];
}

export interface Arskursord {
  /** 1–9, gymnasiet 10–12. */
  arskurs: number;
  veckor: Vecka[];
}

/** Antal ord per vecka (alla årskurser). */
export function ordPerVecka(): number {
  return Object.values(KATEGORIER).reduce((n, k) => n + k.antal, 0);
}

export function arskursNamn(arskurs: number): string {
  return arskurs >= 10 ? `Gymnasiet år ${arskurs - 9}` : `Årskurs ${arskurs}`;
}

export function arskursSlug(arskurs: number): string {
  return arskurs >= 10 ? `gy${arskurs - 9}` : `ak${arskurs}`;
}

export function arskursFranSlug(slug: string): number | undefined {
  const m = slug.match(/^(ak|gy)(\d+)$/);
  if (!m) return undefined;
  const n = Number(m[2]);
  return m[1] === "ak" ? (n >= 1 && n <= 9 ? n : undefined) : n >= 1 && n <= 3 ? n + 9 : undefined;
}

export function tolka(arskurs: number, text: string): Arskursord {
  const veckor: Vecka[] = [];
  for (const rad of text.split("\n").map((r) => r.trim())) {
    if (!rad) continue;
    if (rad.startsWith("##")) {
      const [nr, tema] = rad.replace(/^##\s*/, "").split("|").map((s) => s.trim());
      veckor.push({ nummer: Number(nr), tema, ord: [] });
      continue;
    }
    if (rad.startsWith("#")) continue;
    const delar = rad.split("|").map((s) => s.trim());
    if (delar.length !== 4 && delar.length !== 5) throw new Error(`Åk ${arskurs}: raden ska ha fyra eller fem delar: ${rad}`);
    const v = veckor[veckor.length - 1];
    if (!v) throw new Error(`Åk ${arskurs}: ord före första veckan: ${rad}`);
    const [ord, ordklass, forklaring, exempel, kategori = "tema"] = delar;
    v.ord.push({ ord, ordklass: ordklass as Ordklass, forklaring, exempel, kategori: kategori as Kategori });
  }
  return { arskurs, veckor };
}

/** Ordet utan en/ett, t.ex. "en klasskamrat" → "klasskamrat". */
export function grundord(ord: string): string {
  return ord.replace(/^(en|ett)\s+/, "");
}

/** Kontrollerar en årskurs. Returnerar en lista med problem (tom = ok). */
export function kontrollera(a: Arskursord): string[] {
  const fel: string[] = [];
  const n = ordPerVecka();
  if (a.veckor.length !== ANTAL_VECKOR) fel.push(`${a.veckor.length} veckor i stället för ${ANTAL_VECKOR}`);
  const sedda = new Map<string, number>();
  a.veckor.forEach((v, i) => {
    if (v.nummer !== i + 1) fel.push(`vecka ${i + 1} har nummer ${v.nummer}`);
    if (v.ord.length !== n) fel.push(`vecka ${v.nummer}: ${v.ord.length} ord i stället för ${n}`);
    for (const [k, info] of Object.entries(KATEGORIER)) {
      const antal = v.ord.filter((o) => o.kategori === k).length;
      if (antal !== info.antal) fel.push(`vecka ${v.nummer}: ${antal} ord av kategorin ${k} i stället för ${info.antal}`);
    }
    for (const o of v.ord) {
      const g = grundord(o.ord).toLowerCase();
      if (sedda.has(g)) fel.push(`"${o.ord}" finns i både vecka ${sedda.get(g)} och ${v.nummer}`);
      sedda.set(g, v.nummer);
      if (!(o.kategori in KATEGORIER)) fel.push(`"${o.ord}": okänd kategori "${o.kategori}"`);
      if (!ORDKLASSER.includes(o.ordklass)) fel.push(`"${o.ord}": okänd ordklass "${o.ordklass}"`);
      if (o.ordklass === "substantiv" && !/^(en|ett) /.test(o.ord)) fel.push(`"${o.ord}": substantiv ska ha en/ett`);
      if (!o.forklaring || !o.exempel) fel.push(`"${o.ord}": saknar förklaring eller exempel`);
      // Exempelmeningen ska innehålla ordet (de första bokstäverna räcker, så att böjda former godkänns).
      const forsta = grundord(o.ord).split(/\s+/)[0].toLowerCase();
      const stam = forsta.slice(0, Math.max(3, Math.min(forsta.length - 1, 5)));
      if (!o.exempel.toLowerCase().includes(stam)) fel.push(`"${o.ord}": exemplet innehåller inte ordet: ${o.exempel}`);
    }
  });
  return fel;
}
