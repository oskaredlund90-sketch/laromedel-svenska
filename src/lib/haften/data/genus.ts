/**
 * Häften om utrum och neutrum (en/ett). Uppgifterna byggs från en
 * kontrollerad ordlista så att varje häfte får många uppgifter utan att
 * böjningsformer behöver skrivas om för hand.
 */

import type { HafteKalla } from "../typer";

type Kategori = "sak" | "djur" | "mat" | "plats" | "natur";

interface Ord {
  art: "en" | "ett";
  ord: string;
  bestamd: string;
  kat: Kategori;
}

// artikel ord bestämd form – grupperade efter kategori
const LEXIKON_TEXT: Record<Kategori, string> = {
  sak: `
    en bil bilen · ett bord bordet · en stol stolen · en lampa lampan · ett fönster fönstret
    en dörr dörren · en säng sängen · en soffa soffan · ett skåp skåpet · en spegel spegeln
    en kudde kudden · ett täcke täcket · en matta mattan · en klocka klockan · en tallrik tallriken
    ett glas glaset · en kopp koppen · en sked skeden · en gaffel gaffeln · en kniv kniven
    en kastrull kastrullen · ett kylskåp kylskåpet · en penna pennan · ett suddgummi suddgummit · en linjal linjalen
    ett papper pappret · en bok boken · ett häfte häftet · en väska väskan · ett skrivbord skrivbordet
    en dator datorn · en telefon telefonen · ett tangentbord tangentbordet · en tavla tavlan · ett kort kortet
    en karta kartan · ett paraply paraplyet · en jacka jackan · en mössa mössan · en tröja tröjan
    ett linne linnet · en sko skon · en kjol kjolen · en klänning klänningen · ett halsband halsbandet
    en ring ringen · ett armband armbandet · en boll bollen · ett spel spelet · en cykel cykeln
    ett tåg tåget · en buss bussen · ett flygplan flygplanet · en båt båten · ett skepp skeppet
    en lastbil lastbilen · ett hjul hjulet · en nyckel nyckeln · ett lås låset · en låda lådan
    ett paket paketet · en present presenten · ett brev brevet · en ballong ballongen · ett ljus ljuset
    ett tält tältet · en hink hinken · ett staket staketet · en spade spaden · en hatt hatten`,
  mat: `
    en tårta tårtan · ett äpple äpplet · en banan bananen · ett päron päronet · en apelsin apelsinen
    ett ägg ägget · en ost osten · ett bröd brödet · en smörgås smörgåsen · ett kex kexet
    en kaka kakan · en citron citronen · en tomat tomaten · en morot moroten · en gurka gurkan`,
  djur: `
    en hund hunden · en katt katten · ett lejon lejonet · en häst hästen · ett får fåret
    en ko kon · en gris grisen · ett lamm lammet · en mus musen · ett bi biet
    en fågel fågeln · ett marsvin marsvinet · en kanin kaninen · en räv räven · ett rådjur rådjuret
    en björn björnen · en orm ormen · en fisk fisken · en groda grodan · en uggla ugglan
    en myra myran · en anka ankan · ett föl fölet · en tiger tigern · en elefant elefanten
    en apa apan · en säl sälen · en igelkott igelkotten · en ekorre ekorren · en älg älgen
    en varg vargen · en hamster hamstern · en papegoja papegojan · en kamel kamelen · en zebra zebran
    en giraff giraffen · ett lodjur lodjuret · en spindel spindeln · en fjäril fjärilen · ett djur djuret`,
  plats: `
    ett hus huset · ett kök köket · en skola skolan · ett sjukhus sjukhuset · en affär affären
    ett bibliotek biblioteket · en kyrka kyrkan · ett museum museet · en park parken · ett slott slottet
    en stuga stugan · ett rum rummet · en trädgård trädgården · ett garage garaget · en gata gatan
    ett kontor kontoret · en bro bron · ett torn tornet · ett torg torget · en strand stranden`,
  natur: `
    en sten stenen · ett löv lövet · en blomma blomman · ett träd trädet · en buske busken
    ett berg berget · en sjö sjön · ett hav havet · en skog skogen · ett moln molnet`,
};

export const LEXIKON: Ord[] = (Object.keys(LEXIKON_TEXT) as Kategori[]).flatMap((kat) =>
  LEXIKON_TEXT[kat]
    .split(/[·\n]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const [art, ord, bestamd] = s.split(/\s+/);
      if ((art !== "en" && art !== "ett") || !ord || !bestamd) throw new Error(`Felaktig rad i lexikon: ${s}`);
      return { art, ord, bestamd, kat } as Ord;
    }),
);

// [utrum, neutrum] – bara adjektiv där formerna skiljer sig åt
const ADJEKTIV: Record<Kategori, [string, string][]> = {
  sak: [
    ["stor", "stort"], ["liten", "litet"], ["ny", "nytt"], ["gammal", "gammalt"], ["fin", "fint"],
    ["ful", "fult"], ["ren", "rent"], ["smutsig", "smutsigt"], ["dyr", "dyrt"], ["billig", "billigt"],
    ["trasig", "trasigt"], ["röd", "rött"], ["grön", "grönt"], ["gul", "gult"], ["blå", "blått"],
    ["vit", "vitt"], ["tung", "tungt"],
  ],
  mat: [["stor", "stort"], ["liten", "litet"], ["god", "gott"], ["färsk", "färskt"], ["gammal", "gammalt"]],
  djur: [
    ["stor", "stort"], ["liten", "litet"], ["gammal", "gammalt"], ["ung", "ungt"], ["söt", "sött"],
    ["snäll", "snällt"], ["arg", "argt"], ["glad", "glatt"], ["hungrig", "hungrigt"], ["lugn", "lugnt"],
    ["vild", "vilt"], ["farlig", "farligt"],
  ],
  plats: [
    ["stor", "stort"], ["liten", "litet"], ["ny", "nytt"], ["gammal", "gammalt"], ["fin", "fint"],
    ["ful", "fult"], ["ren", "rent"], ["smutsig", "smutsigt"], ["röd", "rött"], ["gul", "gult"],
    ["vit", "vitt"], ["mörk", "mörkt"], ["ljus", "ljust"], ["känd", "känt"],
  ],
  natur: [["stor", "stort"], ["liten", "litet"], ["gammal", "gammalt"], ["grön", "grönt"], ["vacker", "vackert"], ["fin", "fint"]],
};

function adjektiv(o: Ord, i: number): [string, string] {
  const lista = ADJEKTIV[o.kat];
  return lista[(i * 7 + o.ord.length) % lista.length];
}

function versal(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Sprider ut orden så att en- och ett-ord och kategorier blandas. */
function blanda(ord: Ord[], fro: number): Ord[] {
  return ord
    .map((o, i) => ({ o, k: (i * 37 + fro) % 101 }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.o);
}

function delaUpp(ord: Ord[], storlek: number): Ord[][] {
  const delar: Ord[][] = [];
  for (let i = 0; i < ord.length; i += storlek) delar.push(ord.slice(i, i + storlek));
  return delar;
}

const ALLA = blanda(LEXIKON, 3);
const UTAN_PLATS = LEXIKON.filter((o) => o.kat !== "plats");

function valArtikel(o: Ord): string {
  return o.art === "en" ? `{*en|ett} ${o.ord}` : `{en|*ett} ${o.ord}`;
}

export const GENUS_HAFTEN: HafteKalla[] = [
  {
    id: "genus-1-en-eller-ett",
    titel: "En eller ett?",
    underrubrik: "Utrum och neutrum",
    omrade: "Utrum och neutrum",
    steg: 1,
    feltyper: ["grammatik.genus"],
    regel: [
      "Alla substantiv i svenskan är antingen en-ord (utrum) eller ett-ord (neutrum).",
      "Ungefär tre av fyra substantiv är en-ord. Det finns ingen regel som alltid fungerar – därför behöver man lära sig orden.",
      "Tips: Säg ordet i bestämd form. Slutar det på -en eller -n är det oftast ett en-ord (bilen). Slutar det på -et eller -t är det ett ett-ord (huset).",
    ],
    delar: delaUpp(ALLA, 40)
      .slice(0, 4)
      .map((grupp, i) => ({
        rubrik: `Del ${String.fromCharCode(65 + i)}`,
        instruktion: "Välj en eller ett.",
        typ: "val" as const,
        rader: grupp.map(valArtikel).join("\n"),
      })),
  },
  {
    id: "genus-2-bestamd-form",
    titel: "Bilen eller bilet?",
    underrubrik: "Bestämd form av en- och ett-ord",
    omrade: "Utrum och neutrum",
    steg: 2,
    feltyper: ["grammatik.genus", "grammatik.bojning"],
    regel: [
      "En-ord får -en eller -n i bestämd form: en bil → bilen, en ko → kon.",
      "Ett-ord får -et eller -t i bestämd form: ett hus → huset, ett äpple → äpplet.",
      "Ord som slutar på -el, -er och -en tappar ofta e:et: en cykel → cykeln, ett fönster → fönstret.",
    ],
    delar: [
      ...delaUpp(blanda(LEXIKON, 11), 40)
        .slice(0, 3)
        .map((grupp, i) => ({
          rubrik: `Del ${String.fromCharCode(65 + i)}`,
          instruktion: "Skriv ordet i bestämd form.",
          typ: "skriv" as const,
          rader: grupp.map((o) => `${o.art} ${o.ord} → {${o.bestamd}}`).join("\n"),
        })),
    ],
  },
  {
    id: "genus-3-adjektiv",
    titel: "En stor bil – ett stort hus",
    underrubrik: "Adjektiv efter en och ett",
    omrade: "Utrum och neutrum",
    steg: 3,
    feltyper: ["grammatik.genus", "grammatik.bojning"],
    regel: [
      "Adjektivet ska passa ihop med substantivet.",
      "Efter ett-ord får adjektivet oftast ett -t: en stor bil – ett stort hus, en röd boll – ett rött äpple.",
      "Några adjektiv ändras mer: en liten katt – ett litet lamm, en ny jacka – ett nytt spel.",
    ],
    delar: [
      ...delaUpp(blanda(LEXIKON, 23), 35)
        .slice(0, 2)
        .map((grupp, i) => ({
          rubrik: `Del ${String.fromCharCode(65 + i)}`,
          instruktion: "Välj rätt form av adjektivet.",
          typ: "val" as const,
          rader: grupp
            .map((o, j) => {
              const [u, n] = adjektiv(o, j + i * 35);
              return o.art === "en" ? `${o.art} {*${u}|${n}} ${o.ord}` : `${o.art} {${u}|*${n}} ${o.ord}`;
            })
            .join("\n"),
        })),
      ...delaUpp(blanda(LEXIKON, 41), 35)
        .slice(0, 1)
        .map((grupp) => ({
          rubrik: "Del C",
          instruktion: "Skriv adjektivet i rätt form.",
          typ: "skriv" as const,
          rader: grupp
            .map((o, j) => {
              const [u, n] = adjektiv(o, j + 3);
              return `${o.art} {${o.art === "en" ? u : n}} ${o.ord} (${u})`;
            })
            .join("\n"),
        })),
    ],
  },
  {
    id: "genus-4-den-det",
    titel: "Den eller det?",
    underrubrik: "Pronomen och adjektiv efter är",
    omrade: "Utrum och neutrum",
    steg: 4,
    feltyper: ["grammatik.genus", "grammatik.bojning"],
    regel: [
      "När man pratar om ett en-ord igen använder man den: Jag har en katt. Den heter Måns.",
      "När man pratar om ett ett-ord igen använder man det: Jag har ett lamm. Det heter Lisa.",
      "Adjektivet får -t även efter är: Bilen är stor. Huset är stort.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj den eller det.",
        typ: "val",
        rader: blanda(UTAN_PLATS, 5)
          .slice(0, 40)
          .map((o, i) => {
            // Fortsättningar utan adjektiv, så att formen inte avslöjar svaret
            const slut =
              o.kat === "djur"
                ? ["är min", "sover nu", "heter Sigge", "springer fort", "bor hos oss"][i % 5]
                : ["är min", "ligger där borta", "är borta", "kostade mycket", "kommer från farmor"][i % 5];
            return `Där är ${o.art} ${o.ord}. ${o.art === "en" ? "{*Den|Det}" : "{Den|*Det}"} ${slut}.`;
          })
          .join("\n"),
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv adjektivet i rätt form.",
        typ: "skriv",
        rader: blanda(LEXIKON, 17)
          .slice(0, 40)
          .map((o, i) => {
            const [u, n] = adjektiv(o, i + 5);
            return `${versal(o.bestamd)} är {${o.art === "en" ? u : n}}. (${u})`;
          })
          .join("\n"),
      },
      {
        rubrik: "Del C",
        instruktion: "Skriv meningen rätt. Det finns ett fel i varje mening.",
        typ: "ratta",
        rader: blanda(UTAN_PLATS, 29)
          .slice(0, 25)
          .map((o, i) => {
            const [u, n] = adjektiv(o, i + 9);
            const fel = o.art === "en" ? "ett" : "en";
            const adj = o.art === "en" ? u : n;
            return `Vi har ${fel} ${adj} ${o.ord}. => Vi har ${o.art} ${adj} ${o.ord}.`;
          })
          .join("\n"),
      },
    ],
  },
];
