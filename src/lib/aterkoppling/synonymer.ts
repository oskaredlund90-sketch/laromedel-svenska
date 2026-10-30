/**
 * Synonymförslag för ord som elever ofta överanvänder. Räknas fram ur texten
 * (ingen AI). Claude kan lägga till egna förslag i återkopplingen
 * (`synonymer`), som då visas först.
 */

export interface SynonymForslag {
  /** Ordet så som det visas för eleven, t.ex. "sa". */
  ord: string;
  antal: number;
  forslag: string[];
  tips?: string;
}

interface Post {
  ord: string;
  /** Former som räknas, i gemener. */
  former: string[];
  /** Räknas även ord som börjar så här (t.ex. "jätte"). */
  prefix?: string;
  /** Antal förekomster som krävs för att föreslå synonymer. */
  min: number;
  yngre: string[];
  aldre: string[];
  tips?: string;
}

const LISTA: Post[] = [
  { ord: "bra", former: ["bra"], min: 3, yngre: ["fin", "toppen", "härlig", "lyckad", "utmärkt"], aldre: ["givande", "värdefull", "lyckad", "förträfflig", "imponerande"] },
  { ord: "dålig", former: ["dålig", "dåligt", "dåliga"], min: 2, yngre: ["tråkig", "usel", "misslyckad", "svag"], aldre: ["bristfällig", "undermålig", "otillräcklig", "svag"] },
  { ord: "kul/rolig", former: ["kul", "rolig", "roligt", "roliga"], min: 3, yngre: ["spännande", "härlig", "skojig", "underhållande"], aldre: ["underhållande", "fängslande", "givande", "lustig"] },
  { ord: "tråkig", former: ["tråkig", "tråkigt", "tråkiga"], min: 2, yngre: ["långtråkig", "seg", "enformig"], aldre: ["enformig", "händelselös", "monoton", "trist"] },
  { ord: "sa", former: ["sa", "sade", "säger"], min: 3, yngre: ["viskade", "ropade", "svarade", "frågade", "skrek", "mumlade"], aldre: ["utbrast", "förklarade", "väste", "invände", "muttrade", "konstaterade"], tips: "Ett annat ord än sa visar hur personen säger något." },
  { ord: "gick", former: ["gick", "går", "gå"], min: 4, yngre: ["sprang", "smög", "traskade", "skyndade", "klev"], aldre: ["vandrade", "promenerade", "stegade", "släntrade", "hastade"], tips: "Välj ett verb som visar hur personen rör sig." },
  { ord: "tittade", former: ["tittade", "tittar", "titta"], min: 3, yngre: ["kikade", "stirrade", "glodde", "spanade"], aldre: ["betraktade", "granskade", "iakttog", "stirrade"] },
  { ord: "stor", former: ["stor", "stort", "stora"], min: 3, yngre: ["jättelik", "enorm", "väldig", "hög"], aldre: ["omfattande", "betydande", "massiv", "kolossal"] },
  { ord: "liten", former: ["liten", "litet", "lilla", "små"], min: 3, yngre: ["pytteliten", "kort", "smal", "späd"], aldre: ["obetydlig", "minimal", "begränsad", "diminutiv"] },
  { ord: "fin", former: ["fin", "fint", "fina"], min: 3, yngre: ["vacker", "snygg", "söt", "ljuvlig"], aldre: ["elegant", "förtjusande", "tilltalande", "smakfull"] },
  { ord: "glad", former: ["glad", "glatt", "glada"], min: 3, yngre: ["lycklig", "förtjust", "uppspelt", "nöjd"], aldre: ["upprymd", "lättad", "euforisk", "tacksam"] },
  { ord: "ledsen", former: ["ledsen", "ledset", "ledsna"], min: 2, yngre: ["sorgsen", "olycklig", "nere", "besviken"], aldre: ["nedstämd", "förtvivlad", "modfälld", "bedrövad"] },
  { ord: "arg", former: ["arg", "argt", "arga"], min: 2, yngre: ["sur", "ilsken", "rasande", "irriterad"], aldre: ["upprörd", "förbittrad", "ursinnig", "frustrerad"] },
  { ord: "rädd", former: ["rädd", "rädda"], min: 2, yngre: ["skräckslagen", "nervös", "orolig", "skärrad"], aldre: ["ängslig", "skräckslagen", "skrämd", "oroad"] },
  { ord: "konstig", former: ["konstig", "konstigt", "konstiga"], min: 2, yngre: ["märklig", "underlig", "mystisk", "knasig"], aldre: ["egendomlig", "säregen", "besynnerlig", "obegriplig"] },
  { ord: "läskig", former: ["läskig", "läskigt", "läskiga"], min: 2, yngre: ["kuslig", "otäck", "hemsk", "skrämmande"], aldre: ["obehaglig", "olycksbådande", "kuslig", "skrämmande"] },
  { ord: "snäll", former: ["snäll", "snällt", "snälla"], min: 3, yngre: ["vänlig", "omtänksam", "hjälpsam", "generös"], aldre: ["omtänksam", "tillmötesgående", "hänsynsfull", "generös"] },
  { ord: "mycket", former: ["mycket", "massa", "jättemycket"], min: 4, yngre: ["massor", "en hel del", "väldigt", "riktigt"], aldre: ["oerhört", "avsevärt", "betydligt", "synnerligen"] },
  { ord: "jätte-", former: [], prefix: "jätte", min: 2, yngre: ["riktigt", "otroligt", "väldigt", "verkligen"], aldre: ["oerhört", "synnerligen", "ytterst", "särskilt"], tips: "Byt jätte- mot ett mer exakt ord, eller beskriv i stället." },
  { ord: "sen/sedan", former: ["sen", "sedan"], min: 3, yngre: ["efter det", "en stund senare", "plötsligt", "till slut"], aldre: ["därefter", "efter en stund", "så småningom", "slutligen"], tips: "Variera hur du binder ihop händelser." },
  { ord: "sak", former: ["sak", "saker", "saken", "sakerna", "grej", "grejer", "grejen"], min: 2, yngre: ["säg vad det är: leksak, verktyg, present …"], aldre: ["föremål", "företeelse", "aspekt", "fenomen"], tips: "Skriv vad saken faktiskt är." },
  { ord: "gjorde", former: ["gjorde", "gör", "göra"], min: 4, yngre: ["byggde", "lagade", "ritade", "skapade", "fixade"], aldre: ["genomförde", "utförde", "skapade", "åstadkom"], tips: "Skriv vad personen faktiskt gjorde." },
  { ord: "fick", former: ["fick"], min: 3, yngre: ["tog emot", "vann", "hittade", "lyckades"], aldre: ["mottog", "erhöll", "tilldelades", "lyckades"] },
  { ord: "tycker", former: ["tycker", "tyckte"], min: 3, yngre: ["tror", "menar", "känner"], aldre: ["anser", "menar", "hävdar", "upplever", "är övertygad om"], tips: "I argumenterande text: variera hur du uttrycker åsikter." },
  { ord: "viktig", former: ["viktig", "viktigt", "viktiga"], min: 3, yngre: ["betydelsefull", "nödvändig", "central"], aldre: ["avgörande", "väsentlig", "betydelsefull", "central"] },
  { ord: "typ", former: ["typ"], min: 2, yngre: ["ungefär", "till exempel", "som"], aldre: ["ungefär", "till exempel", "såsom", "i stil med"], tips: "Typ är talspråk. Stryk det eller skriv ungefär/till exempel." },
];

/** Ord som eleven använder ofta och förslag på synonymer, mest använda först. */
export function synonymForslag(text: string, arskurs: number, max = 6): SynonymForslag[] {
  const ord = (text.toLowerCase().match(/[\p{L}]+/gu) ?? []);
  const aldre = arskurs >= 7;
  return LISTA.map((p) => ({
    p,
    antal: ord.filter((o) => p.former.includes(o) || (p.prefix && o.startsWith(p.prefix) && o.length > p.prefix.length + 2)).length,
  }))
    .filter(({ p, antal }) => antal >= p.min)
    .sort((a, b) => b.antal - b.p.min - (a.antal - a.p.min))
    .slice(0, max)
    .map(({ p, antal }) => ({ ord: p.ord, antal, forslag: aldre ? p.aldre : p.yngre, tips: p.tips }));
}

/**
 * Slår ihop Claudes egna förslag (visas först) med de uträknade.
 */
export function allaSynonymer(
  text: string,
  arskurs: number,
  egna: { ord: string; forslag: string[] }[] = [],
): SynonymForslag[] {
  const ord = text.toLowerCase().match(/[\p{L}]+/gu) ?? [];
  const fran = egna.map((e) => ({
    ord: e.ord,
    antal: ord.filter((o) => o === e.ord.toLowerCase()).length,
    forslag: e.forslag,
  }));
  const tagna = new Set(fran.map((e) => e.ord.toLowerCase()));
  return [...fran, ...synonymForslag(text, arskurs).filter((s) => !tagna.has(s.ord.toLowerCase()))];
}
