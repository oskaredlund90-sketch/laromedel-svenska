/**
 * Gemensam lista över feltyper/utvecklingsområden.
 *
 * Samma id:n används av Claude-färdigheten (/aterkoppling, /gruppanalys),
 * av elevsidans återkopplingsvy och av framtida nötning. Varje typ pekar på
 * övningssidor på sajten så att "nästa steg" alltid kan bli en länk.
 */

import type { AgeGroup } from "@/lib/supabase/types";

export type Omrade = "sprak" | "struktur" | "innehall";

export interface Ovningslank {
  /** Sökväg efter /{stadie}/, t.ex. "grammatik/stavning". */
  sokvag: string;
  titel: string;
  /** Stadier där sidan finns. Saknas = alla. */
  stadier?: AgeGroup[];
}

export interface Feltyp {
  id: string;
  omrade: Omrade;
  etikett: string;
  /** Kort förklaring riktad till eleven. */
  elevtips: string;
  ovningar: Ovningslank[];
}

const ALLA: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];
const FRAN_MEL: AgeGroup[] = ["mellanstadiet", "hogstadiet", "gymnasiet"];
const FRAN_HOG: AgeGroup[] = ["hogstadiet", "gymnasiet"];

const G = {
  ordklasser: { sokvag: "grammatik/ordklasser", titel: "Grammatik: Ordklasser", stadier: ALLA },
  skiljetecken: { sokvag: "grammatik/skiljetecken", titel: "Grammatik: Skiljetecken", stadier: ALLA },
  meningsbyggnad: { sokvag: "grammatik/meningsbyggnad", titel: "Grammatik: Meningsbyggnad", stadier: FRAN_MEL },
  stavning: { sokvag: "grammatik/stavning", titel: "Grammatik: Stavning", stadier: FRAN_MEL },
  ordbildning: { sokvag: "grammatik/ordbildning", titel: "Grammatik: Ordbildning", stadier: FRAN_HOG },
  textbindning: { sokvag: "grammatik/textbindning", titel: "Grammatik: Textbindning", stadier: FRAN_HOG },
  stilistik: { sokvag: "grammatik/stilistik", titel: "Grammatik: Stilistik", stadier: ["gymnasiet"] as AgeGroup[] },
} satisfies Record<string, Ovningslank>;

const S = {
  skiljetecken: { sokvag: "skrivverkstad/skiljetecken", titel: "Skrivverkstad: Skiljetecken" },
  stycken: { sokvag: "skrivverkstad/styckeindelning", titel: "Skrivverkstad: Styckeindelning" },
  meningsvariation: { sokvag: "skrivverkstad/meningsvariation", titel: "Skrivverkstad: Meningsvariation" },
  gestaltning: { sokvag: "skrivverkstad/gestaltning", titel: "Skrivverkstad: Gestaltning" },
  citat: { sokvag: "skrivverkstad/citatteknik", titel: "Skrivverkstad: Citatteknik" },
  berattande: { sokvag: "skrivverkstad/berattande-text", titel: "Skrivmall: Berättande text" },
  argumenterande: { sokvag: "skrivverkstad/argumenterande-text", titel: "Skrivmall: Argumenterande text", stadier: FRAN_MEL },
  faktatext: { sokvag: "skrivverkstad/faktatext", titel: "Skrivmall: Faktatext" },
  ordkunskap: { sokvag: "ordkunskap", titel: "Ordkunskap" },
} satisfies Record<string, Ovningslank>;

export const FELTYPER: Feltyp[] = [
  // --- Språk: stavning ---
  {
    id: "stavning.dubbelteckning",
    omrade: "sprak",
    etikett: "Dubbelteckning",
    elevtips: "Kort vokal följs oftast av dubbel konsonant: glass, komma, hoppa.",
    ovningar: [G.stavning],
  },
  {
    id: "stavning.ljud",
    omrade: "sprak",
    etikett: "Ljud som stavas på olika sätt",
    elevtips: "Sj-, tj- och j-ljudet kan stavas på många sätt (skjorta, kjol, gjorde). Lär dig de vanligaste orden utantill.",
    ovningar: [G.stavning],
  },
  {
    id: "stavning.sarskrivning",
    omrade: "sprak",
    etikett: "Särskrivning",
    elevtips: "Sammansatta ord skrivs ihop: fotbollsmatch, inte fotbolls match.",
    ovningar: [G.ordbildning, G.stavning],
  },
  {
    id: "stavning.stor-bokstav",
    omrade: "sprak",
    etikett: "Stor och liten bokstav",
    elevtips: "Stor bokstav i början av meningen och på namn. Veckodagar och månader skrivs med liten bokstav.",
    ovningar: [G.skiljetecken, G.stavning],
  },
  {
    id: "stavning.ovrigt",
    omrade: "sprak",
    etikett: "Stavning",
    elevtips: "Läs texten högt för dig själv och leta efter ord som ser konstiga ut.",
    ovningar: [G.stavning],
  },
  // --- Språk: grammatik ---
  {
    id: "grammatik.de-dem",
    omrade: "sprak",
    etikett: "De eller dem",
    elevtips: "Byt ut ordet: passar 'vi' ska det vara de, passar 'oss' ska det vara dem.",
    ovningar: [G.ordklasser],
  },
  {
    id: "grammatik.genus",
    omrade: "sprak",
    etikett: "En eller ett (utrum/neutrum)",
    elevtips: "Säg ordet i bestämd form: bilen → en bil, huset → ett hus. Kolla att adjektivet passar: ett stort hus.",
    ovningar: [G.ordklasser],
  },
  {
    id: "grammatik.bojning",
    omrade: "sprak",
    etikett: "Böjning av ord",
    elevtips: "Kolla att verb står i rätt tid och att adjektiv passar ihop med substantivet (ett stort hus, stora hus).",
    ovningar: [G.ordklasser],
  },
  {
    id: "grammatik.tempus",
    omrade: "sprak",
    etikett: "Tempus (tid)",
    elevtips: "Håll dig till samma tid genom texten. Berättelser skrivs ofta i dåtid.",
    ovningar: [G.ordklasser],
  },
  {
    id: "grammatik.ordfoljd",
    omrade: "sprak",
    etikett: "Ordföljd",
    elevtips: "Verbet kommer på andra plats i en huvudsats: Igår åt jag glass.",
    ovningar: [G.meningsbyggnad],
  },
  // --- Språk: skiljetecken ---
  {
    id: "skiljetecken.punkt",
    omrade: "sprak",
    etikett: "Punkt och meningsgräns",
    elevtips: "Sätt punkt när en tanke är klar. Läs högt – där du gör en paus behövs ofta en punkt.",
    ovningar: [G.skiljetecken, S.skiljetecken],
  },
  {
    id: "skiljetecken.komma",
    omrade: "sprak",
    etikett: "Kommatering",
    elevtips: "Komma används vid uppräkning och för att göra långa meningar lättare att läsa.",
    ovningar: [G.skiljetecken, S.skiljetecken],
  },
  {
    id: "skiljetecken.dialog",
    omrade: "sprak",
    etikett: "Dialog och anföring",
    elevtips: "Ny talare – ny rad, och markera repliken med talstreck eller citattecken.",
    ovningar: [S.skiljetecken, S.citat],
  },
  // --- Språk: ordval ---
  {
    id: "ordval.precision",
    omrade: "sprak",
    etikett: "Exakta ord",
    elevtips: "Byt allmänna ord som 'bra', 'sak' och 'gjorde' mot mer exakta ord.",
    ovningar: [S.ordkunskap, G.stilistik],
  },
  {
    id: "ordval.upprepning",
    omrade: "sprak",
    etikett: "Upprepningar",
    elevtips: "Om samma ord eller meningsbörjan kommer ofta – variera!",
    ovningar: [S.meningsvariation],
  },
  {
    id: "ordval.stilniva",
    omrade: "sprak",
    etikett: "Stilnivå",
    elevtips: "Anpassa språket efter texttypen. Talspråk passar i dialog men inte i en faktatext.",
    ovningar: [G.stilistik, S.ordkunskap],
  },
  // --- Struktur ---
  {
    id: "struktur.stycken",
    omrade: "struktur",
    etikett: "Styckeindelning",
    elevtips: "Nytt stycke när du byter tid, plats, person eller tanke.",
    ovningar: [S.stycken],
  },
  {
    id: "struktur.textbindning",
    omrade: "struktur",
    etikett: "Sambandsord",
    elevtips: "Bind ihop texten med ord som först, sedan, därför, men och till slut.",
    ovningar: [G.textbindning, S.meningsvariation],
  },
  {
    id: "struktur.meningsvariation",
    omrade: "struktur",
    etikett: "Variation i meningar",
    elevtips: "Blanda korta och långa meningar och börja dem på olika sätt.",
    ovningar: [S.meningsvariation],
  },
  {
    id: "struktur.inledning-avslutning",
    omrade: "struktur",
    etikett: "Inledning och avslutning",
    elevtips: "En bra inledning väcker intresse och en bra avslutning knyter ihop texten.",
    ovningar: [S.berattande, S.argumenterande],
  },
  // --- Innehåll ---
  {
    id: "innehall.gestaltning",
    omrade: "innehall",
    etikett: "Gestaltning",
    elevtips: "Visa i stället för att berätta: 'Händerna skakade' i stället för 'Hon var rädd'.",
    ovningar: [S.gestaltning],
  },
  {
    id: "innehall.utveckla",
    omrade: "innehall",
    etikett: "Utveckla innehållet",
    elevtips: "Ge fler detaljer, exempel och förklaringar. Fråga dig: varför? hur? vad hände sen?",
    ovningar: [S.berattande, S.faktatext],
  },
  {
    id: "innehall.argumentation",
    omrade: "innehall",
    etikett: "Argumentation",
    elevtips: "Varje argument behöver en förklaring eller ett exempel som stödjer det.",
    ovningar: [S.argumenterande],
  },
  {
    id: "innehall.kallor",
    omrade: "innehall",
    etikett: "Källor och citat",
    elevtips: "Skriv var du hittat informationen och markera citat tydligt.",
    ovningar: [S.citat],
  },
  {
    id: "innehall.syfte-mottagare",
    omrade: "innehall",
    etikett: "Syfte och mottagare",
    elevtips: "Tänk på vem som ska läsa texten och vad den ska uppnå.",
    ovningar: [S.faktatext, S.argumenterande],
  },
];

const PER_ID = new Map(FELTYPER.map((f) => [f.id, f]));

export function hamtaFeltyp(id: string | undefined): Feltyp | undefined {
  return id ? PER_ID.get(id) : undefined;
}

export const OMRADE_ETIKETT: Record<Omrade, string> = {
  sprak: "Språk",
  struktur: "Struktur",
  innehall: "Innehåll",
};

const STADIE_ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];

export function stadieForArskurs(arskurs: number): AgeGroup {
  if (arskurs <= 3) return "lagstadiet";
  if (arskurs <= 6) return "mellanstadiet";
  if (arskurs <= 9) return "hogstadiet";
  return "gymnasiet";
}

/**
 * Bygger en länk till övningen på elevens stadie. Finns sidan inte där
 * används närmaste stadie (helst ett högre för yngre elever, annars lägre).
 */
export function ovningsHref(ovning: Ovningslank, stadie: AgeGroup): string {
  const tillgangliga = ovning.stadier ?? STADIE_ORDNING;
  if (tillgangliga.includes(stadie)) return `/${stadie}/${ovning.sokvag}`;
  const i = STADIE_ORDNING.indexOf(stadie);
  const narmast = [...tillgangliga].sort(
    (a, b) => Math.abs(STADIE_ORDNING.indexOf(a) - i) - Math.abs(STADIE_ORDNING.indexOf(b) - i),
  )[0];
  return `/${narmast}/${ovning.sokvag}`;
}
