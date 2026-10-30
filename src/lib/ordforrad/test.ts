/**
 * Ordförrådstest: ett ord i taget, välj rätt förklaring bland fyra.
 * Testet anpassar sig: rätt svar → svårare ord (högre årskurs), fel eller
 * "vet inte" → lättare. Resultatet blir den årskursnivå där eleven svarar
 * rätt på de flesta ord. Inget sparas.
 */

export interface Testord {
  ord: string;
  ordklass: string;
  forklaring: string;
  /** Årskurs 1–12 (gymnasiet 10–12) som ordet hör till. */
  niva: number;
}

export interface Fraga {
  ord: Testord;
  alternativ: string[];
  ratt: number;
}

export interface Svar {
  fraga: Fraga;
  /** Index i alternativ, eller -1 för "vet inte". */
  val: number;
}

export const ANTAL_FRAGOR = 50;
export const MIN_NIVA = 1;
export const MAX_NIVA = 12;

export const STARTNIVA: Record<string, number> = {
  lagstadiet: 2,
  mellanstadiet: 5,
  hogstadiet: 8,
  gymnasiet: 10,
};

function slumpa<T>(a: T[], slump: () => number): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(slump() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

/** Skapar en fråga på given nivå med tre felaktiga förklaringar, helst av samma ordklass. */
export function skapaFraga(bank: Testord[], niva: number, anvanda: Set<string>, slump: () => number = Math.random): Fraga | null {
  const kandidater = bank.filter((o) => o.niva === niva && !anvanda.has(o.ord));
  if (!kandidater.length) return null;
  const ord = kandidater[Math.floor(slump() * kandidater.length)];
  // Felaktiga alternativ från samma nivå och helst samma ordklass, så att de inte går att utesluta direkt.
  const nara = bank.filter((o) => o.ord !== ord.ord && Math.abs(o.niva - niva) <= 1 && o.forklaring !== ord.forklaring);
  const sammaKlass = nara.filter((o) => o.ordklass === ord.ordklass);
  const pool = sammaKlass.length >= 3 ? sammaKlass : nara;
  const fel = slumpa(pool, slump).slice(0, 3).map((o) => o.forklaring);
  const alternativ = slumpa([ord.forklaring, ...fel], slump);
  return { ord, alternativ, ratt: alternativ.indexOf(ord.forklaring) };
}

export function nastaNiva(niva: number, ratt: boolean): number {
  return Math.min(MAX_NIVA, Math.max(MIN_NIVA, niva + (ratt ? 1 : -1)));
}

export interface Resultat {
  /** Uppskattad nivå (årskurs 1–12). */
  niva: number;
  ratt: number;
  totalt: number;
  missade: Testord[];
}

/**
 * Uppskattning: den nivågräns som stämmer bäst med svaren – rätt på ord upp
 * till nivån och fel (eller "vet inte") på ord över den. Vid lika väljs
 * medelvärdet av de bästa gränserna.
 */
export function uppskatta(svar: Svar[]): Resultat {
  const ratt = (s: Svar) => s.val === s.fraga.ratt;
  let basta = -1;
  let gransar: number[] = [];
  for (let n = MIN_NIVA - 1; n <= MAX_NIVA; n++) {
    const traff = svar.filter((s) => (s.fraga.ord.niva <= n ? ratt(s) : !ratt(s))).length;
    if (traff > basta) {
      basta = traff;
      gransar = [n];
    } else if (traff === basta) gransar.push(n);
  }
  const medel = gransar.reduce((a, b) => a + b, 0) / gransar.length;
  return {
    niva: Math.max(MIN_NIVA, Math.round(medel)),
    ratt: svar.filter(ratt).length,
    totalt: svar.length,
    missade: svar.filter((s) => !ratt(s)).map((s) => s.fraga.ord),
  };
}

export function nivaText(niva: number): string {
  if (niva >= 12) return "gymnasiets sista år eller mer";
  return niva >= 10 ? `gymnasiet år ${niva - 9}` : `årskurs ${niva}`;
}
