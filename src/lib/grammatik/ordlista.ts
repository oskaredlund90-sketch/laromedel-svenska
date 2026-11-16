import type { AgeGroup } from "@/lib/supabase/types";

/**
 * Ordlista över grammatiska termer, sist i grammatikboken. `fran` anger från
 * vilket stadium termen används – lågstadiets bok får bara de enklaste.
 */
export interface Term {
  term: string;
  forklaring: string;
  exempel?: string;
  fran: AgeGroup;
}

export const ORDLISTA: Term[] = [
  { term: "adjektiv", forklaring: "Ord som beskriver hur något är.", exempel: "stor, glad, röd", fran: "lagstadiet" },
  { term: "adverb", forklaring: "Ord som berättar hur, var, när eller hur mycket.", exempel: "snabbt, här, ofta", fran: "mellanstadiet" },
  { term: "adverbial", forklaring: "Satsdel som berättar när, var, hur eller varför något händer.", exempel: "I går åt vi glass på stranden.", fran: "mellanstadiet" },
  { term: "adverbiell bisats", forklaring: "Bisats som fungerar som adverbial: när, varför, på vilket villkor.", exempel: "Vi gick hem när det blev mörkt.", fran: "hogstadiet" },
  { term: "agent", forklaring: "Den som utför handlingen i en passiv mening. Inleds med av.", exempel: "Boken skrevs av Selma Lagerlöf.", fran: "gymnasiet" },
  { term: "aktiv form", forklaring: "Den som gör något är subjekt.", exempel: "Kommunen bygger en skola.", fran: "hogstadiet" },
  { term: "attribut", forklaring: "Ord eller fras som beskriver huvudordet i en fras.", exempel: "den lilla stugan vid sjön", fran: "hogstadiet" },
  { term: "avledning", forklaring: "Nytt ord som bildas med prefix eller suffix.", exempel: "olycklig, vänlighet", fran: "mellanstadiet" },
  { term: "BIFF", forklaring: "Bisatser: Inte Före Finita verbet – i bisatser står inte före verbet.", exempel: "… att han inte kommer", fran: "hogstadiet" },
  { term: "bisats", forklaring: "Sats som inte kan stå ensam. Inleds ofta med en subjunktion.", exempel: "… eftersom det regnade", fran: "mellanstadiet" },
  { term: "bestämd form", forklaring: "Formen som visar att vi vet vilken sak det gäller.", exempel: "bilen, huset", fran: "mellanstadiet" },
  { term: "böjning", forklaring: "Ändelser som ger en ny form av samma ord.", exempel: "bil – bilar, hoppar – hoppade", fran: "lagstadiet" },
  { term: "dubbelteckning", forklaring: "Två likadana konsonanter efter kort vokal.", exempel: "katt, boll", fran: "lagstadiet" },
  { term: "finit verb", forklaring: "Det böjda verbet i presens, preteritum eller imperativ – det första verbet i predikatet.", exempel: "Hon har ätit.", fran: "hogstadiet" },
  { term: "fundament", forklaring: "Det som står först i en huvudsats, före verbet.", exempel: "I dag läser vi.", fran: "hogstadiet" },
  { term: "huvudsats", forklaring: "Sats som kan stå ensam. Verbet står på plats två.", exempel: "Vi gick in.", fran: "mellanstadiet" },
  { term: "imperativ", forklaring: "Verbform för uppmaningar.", exempel: "Skriv! Läs!", fran: "hogstadiet" },
  { term: "indirekt objekt", forklaring: "Mottagaren i meningen. Fråga: till eller åt vem?", exempel: "Läraren gav eleverna en läxa.", fran: "hogstadiet" },
  { term: "infinitiv", forklaring: "Verbets grundform, ofta efter att.", exempel: "att skriva", fran: "mellanstadiet" },
  { term: "interjektion", forklaring: "Utrop eller ljud.", exempel: "aj, oj, hurra", fran: "hogstadiet" },
  { term: "kongruens", forklaring: "Att orden passar ihop i form, till exempel adjektiv och substantiv.", exempel: "ett stort hus, husen är stora", fran: "mellanstadiet" },
  { term: "konjunktion", forklaring: "Ord som binder ihop två likvärdiga led.", exempel: "och, men, eller, för, så", fran: "hogstadiet" },
  { term: "medgivande", forklaring: "Samband där något gäller trots något annat.", exempel: "Trots att det regnade gick vi ut.", fran: "hogstadiet" },
  { term: "morfem", forklaring: "Den minsta delen av ett ord som har betydelse.", exempel: "o-vän-lig", fran: "mellanstadiet" },
  { term: "nominalfras", forklaring: "Fras med ett substantiv eller pronomen som huvudord.", exempel: "min äldsta bror", fran: "hogstadiet" },
  { term: "objekt", forklaring: "Satsdel som handlingen riktas mot. Fråga: vem eller vad + predikat + subjekt?", exempel: "Elin läser en bok.", fran: "mellanstadiet" },
  { term: "omvänd ordföljd", forklaring: "Subjektet står efter verbet när något annat står först.", exempel: "I går köpte jag en jacka.", fran: "mellanstadiet" },
  { term: "particip", forklaring: "Verbform som fungerar som adjektiv.", exempel: "en springande hund, en stängd dörr", fran: "hogstadiet" },
  { term: "partikelverb", forklaring: "Verb med ett betonat småord som hör till verbet.", exempel: "tycka om, ge upp", fran: "hogstadiet" },
  { term: "passiv form", forklaring: "Det som påverkas är subjekt. Verbet får -s eller bli + particip.", exempel: "Skolan byggs.", fran: "hogstadiet" },
  { term: "predikat", forklaring: "Satsdel som säger vad som händer – verbet.", exempel: "Hunden skäller.", fran: "lagstadiet" },
  { term: "predikativ", forklaring: "Satsdel som beskriver subjektet efter vara, bli, heta.", exempel: "Maten var god.", fran: "hogstadiet" },
  { term: "prefix", forklaring: "Del som läggs till före roten.", exempel: "o-, miss-, be-", fran: "mellanstadiet" },
  { term: "preposition", forklaring: "Ord som visar läge eller förhållande.", exempel: "i, på, under", fran: "mellanstadiet" },
  { term: "preteritum", forklaring: "Verbform för det som hänt.", exempel: "skrev, lekte", fran: "mellanstadiet" },
  { term: "presens", forklaring: "Verbform för nu, ofta eller alltid.", exempel: "skriver, leker", fran: "mellanstadiet" },
  { term: "pronomen", forklaring: "Ord som ersätter eller pekar på ett substantiv.", exempel: "jag, hon, den, de", fran: "mellanstadiet" },
  { term: "referensbindning", forklaring: "Ord som syftar tillbaka på något som redan nämnts.", exempel: "Leo … han … pojken", fran: "mellanstadiet" },
  { term: "relativsats", forklaring: "Bisats som beskriver ett ord, ofta inledd med som.", exempel: "boken som jag läste", fran: "hogstadiet" },
  { term: "rot", forklaring: "Den del av ordet som bär grundbetydelsen.", exempel: "vän i ovänlig", fran: "mellanstadiet" },
  { term: "räkneord", forklaring: "Ord för antal eller ordning.", exempel: "tre, första", fran: "mellanstadiet" },
  { term: "sambandsmarkör", forklaring: "Ord eller uttryck som visar hur meningar hänger ihop.", exempel: "därför, dessutom, till sist", fran: "hogstadiet" },
  { term: "sammansatt ord", forklaring: "Ord som består av två eller fler ord.", exempel: "fotboll, solsken", fran: "lagstadiet" },
  { term: "satsadverbial", forklaring: "Adverbial som säger något om hela satsen.", exempel: "inte, aldrig, kanske", fran: "hogstadiet" },
  { term: "satsdel", forklaring: "Den roll ett ord eller en fras har i satsen.", exempel: "subjekt, predikat, objekt", fran: "mellanstadiet" },
  { term: "stilnivå", forklaring: "Hur formellt eller vardagligt något är skrivet.", exempel: "kolla – titta – granska", fran: "hogstadiet" },
  { term: "subjekt", forklaring: "Satsdel som säger vem eller vad som gör något.", exempel: "Hunden skäller.", fran: "lagstadiet" },
  { term: "subjunktion", forklaring: "Ord som inleder en bisats.", exempel: "att, eftersom, när, om", fran: "hogstadiet" },
  { term: "substantiv", forklaring: "Ord för saker, djur, människor, platser och känslor.", exempel: "hund, skola, glädje", fran: "lagstadiet" },
  { term: "suffix", forklaring: "Del som läggs till efter roten.", exempel: "-lig, -het, -are", fran: "mellanstadiet" },
  { term: "supinum", forklaring: "Verbform efter har och hade.", exempel: "har skrivit", fran: "hogstadiet" },
  { term: "särskrivning", forklaring: "Fel där ett sammansatt ord skrivs som två ord.", exempel: "fot boll → fotboll", fran: "mellanstadiet" },
  { term: "tematisk bindning", forklaring: "Texten håller sig till ämnet och kopplar nytt till det som redan sagts.", exempel: "en borg → borgen → där", fran: "hogstadiet" },
  { term: "tempus", forklaring: "Verbets tidsform.", exempel: "presens, preteritum, perfekt", fran: "hogstadiet" },
  { term: "verb", forklaring: "Ord för det som händer eller det man gör.", exempel: "springa, läsa, är", fran: "lagstadiet" },
];

const ORDNING: AgeGroup[] = ["lagstadiet", "mellanstadiet", "hogstadiet", "gymnasiet"];

export function ordlistaFor(stadie: AgeGroup): Term[] {
  const max = ORDNING.indexOf(stadie);
  return ORDLISTA.filter((t) => ORDNING.indexOf(t.fran) <= max).sort((a, b) => a.term.localeCompare(b.term, "sv"));
}
