/**
 * Meningsbanker som blir många häftesuppgifter. En mening med markerade
 * satsdelar ger en uppgift per satsdel, ett orsak–följd-par ger flera.
 * Funktionerna returnerar rader i häftesformatet (se ../typer.ts).
 */

const stor = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* -------------------------------- Satsdelar -------------------------------- */

type Roll = "S" | "P" | "O" | "A" | "IO" | "PV" | "AG" | "FS" | "ES";
const ROLLNAMN: Record<Roll, string> = {
  S: "subjekt",
  P: "predikat",
  O: "objekt",
  A: "adverbial",
  IO: "indirekt objekt",
  PV: "predikativ",
  AG: "agent",
  FS: "formellt subjekt",
  ES: "egentligt subjekt",
};

/** "[S:Katten] [P:sover] [A:i soffan]." → delar med roller. */
function tolka(mening: string): { text: string; delar: { roll: Roll; text: string; start: number }[] } {
  const delar: { roll: Roll; text: string; start: number }[] = [];
  let text = "";
  let pos = 0;
  for (const m of mening.matchAll(/\[(S|P|O|A|IO|PV|AG|FS|ES):([^\]]+)\]/g)) {
    text += mening.slice(pos, m.index);
    delar.push({ roll: m[1] as Roll, text: m[2], start: text.length });
    text += m[2];
    pos = m.index! + m[0].length;
  }
  text += mening.slice(pos);
  return { text, delar };
}

/** Skriv-uppgifter: "Katten sover i soffan. Subjekt: {katten}". */
export function skrivSatsdel(meningar: string[], roll: Roll): string {
  return meningar
    .map((m) => {
      const t = tolka(m);
      const d = t.delar.find((x) => x.roll === roll);
      return d ? `${t.text} ${stor(ROLLNAMN[roll])}: {${d.text}}` : null;
    })
    .filter(Boolean)
    .join("\n");
}

/** Val-uppgifter: en per satsdel, delen skrivs med VERSALER. */
export function valjSatsdel(meningar: string[], roller: Roll[]): string {
  const rader: string[] = [];
  for (const m of meningar) {
    const t = tolka(m);
    for (const d of t.delar) {
      if (!roller.includes(d.roll)) continue;
      const markerad = t.text.slice(0, d.start) + d.text.toUpperCase() + t.text.slice(d.start + d.text.length);
      const alt = roller.map((r) => (r === d.roll ? "*" : "") + ROLLNAMN[r]).join("|");
      rader.push(`${markerad} {${alt}}`);
    }
  }
  return rader.join("\n");
}

export const ENKLA_MENINGAR = [
  "[S:Hunden] [P:springer] i parken.",
  "[S:Pappa] [P:dammsuger] hela huset.",
  "I dag [P:fyller] [S:Moa] år.",
  "[S:Fåglarna] [P:bygger] ett bo.",
  "[S:Vi] [P:spelar] kort på kvällen.",
  "På morgonen [P:dricker] [S:mormor] kaffe.",
  "[S:Snön] [P:smälter] i solen.",
  "[S:Min kompis] [P:bor] i ett gult hus.",
  "I skolan [P:lär] [S:barnen] sig läsa.",
  "[S:Grodan] [P:hoppar] i dammen.",
  "[S:Läraren] [P:skrattar] åt skämtet.",
  "Efter maten [P:diskar] [S:Sam].",
  "[S:Tåget] [P:går] klockan åtta.",
  "[S:Kaninen] [P:äter] en morot.",
  "Varje sommar [P:åker] [S:familjen] till landet.",
  "[S:Det lilla barnet] [P:somnar] i vagnen.",
  "[S:Ni] [P:sjunger] så fint.",
  "I trädgården [P:växer] [S:äppelträd].",
  "[S:Brevbäraren] [P:kommer] med posten.",
  "[S:Isak] [P:målar] en tavla.",
  "På vintern [P:fryser] [S:sjön].",
  "[S:Ugglan] [P:jagar] på natten.",
  "[S:Mina föräldrar] [P:arbetar] på sjukhuset.",
  "[S:Jag] [P:cyklar] till skolan.",
  "[S:Bussen] [P:stannar] vid skolan.",
  "[S:Lejonet] [P:vilar] i skuggan.",
  "[S:Hon] [P:skriver] en dikt.",
  "Nu [P:börjar] [S:filmen].",
  "[S:Barnen] [P:plaskar] i vattnet.",
  "[S:Farfar] [P:fiskar] vid bryggan.",
];

/** Andra uppsättningen enkla meningar, så att två delar i samma häfte inte upprepar varandra. */
export const ENKLA_MENINGAR_2 = [
  "[S:Snön] [P:faller] tyst.",
  "[S:Mamma] [P:cyklar] till jobbet.",
  "[S:Bebisen] [P:skrattar] högt.",
  "På morgonen [P:sjunger] [S:fåglarna].",
  "[S:Tåget] [P:går] klockan åtta.",
  "[S:Ella] [P:ritar] en häst.",
  "[S:Vinden] [P:blåser] hårt i dag.",
  "[S:Min kompis] [P:bor] i Luleå.",
  "Efter maten [P:diskar] [S:pappa].",
  "[S:Grodan] [P:hoppar] i dammen.",
  "[S:Läraren] [P:hämtar] böckerna.",
  "[S:Solen] [P:lyser] över sjön.",
  "[S:Vi] [P:väntar] på bussen.",
  "I helgen [P:tävlar] [S:Omar] i simning.",
  "[S:Kaninen] [P:äter] en morot.",
  "[S:Farfar] [P:berättar] en historia.",
  "[S:Klockan] [P:ringer] varje morgon.",
  "[S:Barnen] [P:åker] pulka.",
  "På kvällen [P:läser] [S:jag] en bok.",
  "[S:Hunden] [P:sover] i sin korg.",
  "[S:Alla] [P:applåderar].",
  "[S:Regnet] [P:smattrar] mot rutan.",
  "[S:Sara] [P:spelar] piano.",
  "I morgon [P:börjar] [S:skolan].",
  "[S:Katterna] [P:leker] med ett nystan.",
  "[S:Brandbilen] [P:tutar].",
  "[S:Min bror] [P:bakar] pizza.",
  "Plötsligt [P:slocknade] [S:lampan].",
  "[S:Hästarna] [P:springer] på ängen.",
  "[S:Fröken] [P:skriver] på tavlan.",
];

export const SPOA_MENINGAR = [
  "[S:Lisa] [P:spelar] [O:fotboll] [A:på lördagar].",
  "[A:I går] [P:köpte] [S:vi] [O:en ny soffa].",
  "[S:Hunden] [P:gräver] [O:ett hål] [A:i trädgården].",
  "[S:Mormor] [P:ringde] [O:mig] [A:i morse].",
  "[A:På rasten] [P:åt] [S:vi] [O:frukt].",
  "[S:Läraren] [P:läste] [O:en saga] [A:högt].",
  "[S:Katten] [P:fångade] [O:en mus] [A:i köket].",
  "[A:Efter skolan] [P:gör] [S:jag] [O:läxorna].",
  "[S:Barnen] [P:byggde] [O:en koja] [A:i skogen].",
  "[S:Pappa] [P:lagade] [O:cykeln] [A:snabbt].",
  "[A:Nästa vecka] [P:spelar] [S:laget] [O:en viktig match].",
  "[S:Elsa] [P:glömde] [O:sin mössa] [A:på bussen].",
  "[S:Vi] [P:planterade] [O:tomater] [A:i våras].",
  "[A:I skogen] [P:hittade] [S:vi] [O:blåbär].",
  "[S:Ali] [P:sparkade] [O:bollen] [A:över staketet].",
  "[S:Min syster] [P:tränar] [O:simning] [A:tre gånger i veckan].",
  "[A:På kvällen] [P:såg] [S:familjen] [O:en film].",
  "[S:Eleverna] [P:skrev] [O:en berättelse] [A:tillsammans].",
  "[S:Farmor] [P:stickar] [O:vantar] [A:varje vinter].",
  "[A:I morse] [P:såg] [S:jag] [O:ett rådjur].",
  "[S:Hästen] [P:hoppade] [O:hindret] [A:elegant].",
  "[S:Kocken] [P:lagar] [O:soppa] [A:i ett stort kök].",
  "[A:Varje morgon] [P:borstar] [S:jag] [O:tänderna].",
  "[S:De] [P:besökte] [O:ett museum] [A:i Stockholm].",
  "[S:Hon] [P:läste] [O:boken] [A:på en dag].",
];

export const HOG_MENINGAR = [
  "[S:Läraren] [P:gav] [IO:eleverna] [O:en läxa].",
  "[S:Maten] [P:var] [PV:god].",
  "[S:Min kusin] [P:blev] [PV:läkare] [A:förra året].",
  "[A:I går] [P:skickade] [S:jag] [IO:mormor] [O:ett vykort].",
  "[S:Filmen] [P:verkade] [PV:spännande].",
  "[S:Tränaren] [P:visade] [IO:laget] [O:en ny taktik].",
  "[A:Efter matchen] [P:var] [S:spelarna] [PV:trötta].",
  "[S:Hon] [P:gav] [IO:sin bror] [O:tusen kronor].",
  "[S:Rummet] [P:kändes] [PV:kallt] [A:på morgonen].",
  "[S:Vi] [P:önskade] [IO:henne] [O:lycka till].",
  "[S:Ordföranden] [P:heter] [PV:Sara].",
  "[S:Pappa] [P:köpte] [IO:mig] [O:en ny jacka] [A:i går].",
  "[S:Vattnet] [P:blev] [PV:varmt] [A:i solen].",
  "[S:Rektorn] [P:skickade] [IO:föräldrarna] [O:ett brev].",
  "[S:Uppgiften] [P:var] [PV:svår].",
  "[S:Han] [P:visade] [IO:oss] [O:vägen].",
  "[S:Barnen] [P:blev] [PV:glada] [A:av överraskningen].",
  "[S:Mormor] [P:stickade] [IO:barnbarnen] [O:varsin tröja].",
  "[S:Huset] [P:är] [PV:rött].",
  "[S:Grannen] [P:lånade] [IO:oss] [O:sin gräsklippare].",
  "[S:Hennes förslag] [P:verkade] [PV:genomtänkt].",
  "[A:På mötet] [P:gav] [S:rektorn] [IO:lärarna] [O:nya scheman].",
  "[S:Valpen] [P:kallas] [PV:Busen].",
  "[S:Jag] [P:skickade] [IO:min vän] [O:ett meddelande] [A:i kväll].",
  "[S:Äpplena] [P:var] [PV:sura].",
  "[S:Sjuksköterskan] [P:gav] [IO:patienten] [O:medicin].",
  "[S:Hon] [P:blev] [PV:förvånad] [A:i går].",
  "[S:Läraren] [P:gav] [IO:klassen] [O:proven] [A:på fredagen].",
];

export const GY_MENINGAR = [
  "[FS:Det] [P:sitter] [ES:en fågel] [A:på taket].",
  "[S:Boken] [P:skrevs] [AG:av Selma Lagerlöf].",
  "[FS:Det] [P:är] [PV:viktigt] [ES:att sova ordentligt].",
  "[S:Beslutet] [P:fattades] [AG:av styrelsen] [A:i går].",
  "[S:Hon] [P:erbjöd] [IO:de nyanlända] [O:hjälp].",
  "[FS:Det] [P:kom] [ES:många besökare] [A:till utställningen].",
  "[S:Vägen] [P:stängdes] [AG:av polisen] [A:efter olyckan].",
  "[FS:Det] [P:blev] [PV:tyst] [A:i salen].",
  "[S:Regeringen] [P:gav] [IO:myndigheten] [O:ett nytt uppdrag].",
  "[S:Tavlan] [P:målades] [AG:av en okänd konstnär].",
  "[FS:Det] [P:står] [ES:en cykel] [A:utanför dörren].",
  "[FS:Det] [P:är] [PV:svårt] [ES:att lära sig ett nytt språk].",
  "[S:Förslaget] [P:har granskats] [AG:av tre experter].",
  "[A:I natt] [P:inträffade] [S:en olycka].",
  "[FS:Det] [P:finns] [ES:flera skäl] [A:i rapporten].",
  "[S:Rapporten] [P:publicerades] [AG:av myndigheten] [A:i våras].",
  "[S:Resultatet] [P:var] [PV:oväntat].",
  "[FS:Det] [P:saknas] [ES:pengar] [A:i budgeten].",
  "[S:Hon] [P:valdes] [PV:till ordförande] [AG:av medlemmarna].",
  "[S:Läraren] [P:visade] [IO:eleverna] [O:sina omdömen] [A:i fredags].",
  "[FS:Det] [P:var] [PV:roligt] [ES:att träffa dig].",
  "[S:Huset] [P:byggdes] [AG:av hans farfar] [A:på 1920-talet].",
  "[FS:Det] [P:hördes] [ES:ett skrik] [A:från källaren].",
  "[S:Studien] [P:visar] [O:ett tydligt samband].",
  "[S:Romanen] [P:har översatts] [A:till fyrtio språk].",
];

/* ----------------------------- Orsak och följd ----------------------------- */

/** [orsak, följd, följd med omvänd ordföljd, orsak som nominalfras] */
export const ORSAK_FOLJD: [string, string, string, string][] = [
  ["det regnade", "vi stannade inne", "stannade vi inne", "regnet"],
  ["det snöade", "bussen blev sen", "blev bussen sen", "snön"],
  ["det var halt", "vi gick försiktigt", "gick vi försiktigt", "halkan"],
  ["hon var förkyld", "hon stannade hemma", "stannade hon hemma", "förkylningen"],
  ["det blåste", "båtarna låg kvar i hamnen", "låg båtarna kvar i hamnen", "blåsten"],
  ["det åskade", "matchen avbröts", "avbröts matchen", "åskan"],
  ["vägen var avstängd", "vi körde en omväg", "körde vi en omväg", "avstängningen"],
  ["jag var hungrig", "jag åt två mackor", "åt jag två mackor", "hungern"],
  ["det var mörkt", "vi tände ljus", "tände vi ljus", "mörkret"],
  ["han hade tränat mycket", "han vann loppet", "vann han loppet", "träningen"],
  ["strömmen gick", "datorerna stängdes av", "stängdes datorerna av", "strömavbrottet"],
  ["isen var tunn", "ingen fick åka skridskor", "fick ingen åka skridskor", "den tunna isen"],
  ["tåget var försenat", "vi missade filmen", "missade vi filmen", "förseningen"],
  ["det var varmt", "vi badade i sjön", "badade vi i sjön", "värmen"],
  ["han hade ont i foten", "han kunde inte springa", "kunde han inte springa", "skadan"],
  ["det var dimma", "planet kunde inte landa", "kunde planet inte landa", "dimman"],
  ["eleverna pratade högt", "läraren blev irriterad", "blev läraren irriterad", "pratet"],
  ["det var rea", "affären var full av folk", "var affären full av folk", "rean"],
  ["hunden skällde", "bebisen vaknade", "vaknade bebisen", "skällandet"],
  ["det var mycket trafik", "vi kom för sent", "kom vi för sent", "trafiken"],
  ["priserna steg", "många handlade mindre", "handlade många mindre", "prisökningarna"],
  ["skogarna huggs ner", "många djur hotas", "hotas många djur", "avverkningen"],
  ["det var torka", "skörden blev dålig", "blev skörden dålig", "torkan"],
  ["vi tränade varje dag", "vi blev bättre", "blev vi bättre", "träningen"],
  ["bron var trasig", "bilarna fick köra runt", "fick bilarna köra runt", "den trasiga bron"],
  ["det var kallt", "vattenledningen frös", "frös vattenledningen", "kylan"],
  ["hon övade mycket", "hon klarade provet", "klarade hon provet", "övningen"],
  ["det var stormvarning", "färjan låg kvar", "låg färjan kvar", "stormvarningen"],
  ["han hade glömt matsäcken", "han var hungrig hela dagen", "var han hungrig hela dagen", "den glömda matsäcken"],
  ["det var en olycka på vägen", "trafiken stod still", "stod trafiken still", "olyckan"],
];

/** [villkor, huvudsats med omvänd ordföljd, huvudsats med rak ordföljd] */
export const VILLKOR: [string, string, string][] = [
  ["det regnar", "tar vi bussen", "vi tar bussen"],
  ["du skyndar dig", "hinner du med tåget", "du hinner med tåget"],
  ["det snöar", "bygger vi en snögubbe", "vi bygger en snögubbe"],
  ["du tränar", "blir du starkare", "du blir starkare"],
  ["solen skiner", "äter vi ute", "vi äter ute"],
  ["du är hungrig", "finns det mat i kylen", "det finns mat i kylen"],
  ["vi vinner", "firar vi med glass", "vi firar med glass"],
  ["det blir kallt", "tar jag på mig mössan", "jag tar på mig mössan"],
  ["bussen är sen", "går vi i stället", "vi går i stället"],
  ["du vill", "kan du följa med", "du kan följa med"],
  ["du läser mycket", "blir du en bättre läsare", "du blir en bättre läsare"],
  ["vi sparar", "kan vi köpa en cykel", "vi kan köpa en cykel"],
  ["det är fint väder", "åker vi till stranden", "vi åker till stranden"],
  ["du är trött", "kan du vila en stund", "du kan vila en stund"],
  ["telefonen ringer", "svarar jag", "jag svarar"],
];

/** Steg 1: eftersom/så/om i båda riktningar. */
export function sambandValEnkel(): string {
  const rader: string[] = [];
  for (const [orsak, foljd] of ORSAK_FOLJD) {
    rader.push(`${stor(foljd)} {*eftersom|så|om} ${orsak}.`);
    rader.push(`${stor(orsak)}, {*så|eftersom|om} ${foljd}.`);
  }
  for (const [villkor, omvand, rak] of VILLKOR) {
    rader.push(`{*Om|Så|Därför} ${villkor}, ${omvand}.`);
    rader.push(`${stor(rak)} {*om|så|därför} ${villkor}.`);
  }
  return rader.join("\n");
}

/** Steg 3: eftersom + sats eller på grund av + nominalfras. */
export function sambandEftersomPaGrundAv(): string {
  const rader: string[] = [];
  for (const [orsak, foljd, , nomen] of ORSAK_FOLJD) {
    rader.push(`${stor(foljd)} {*på grund av|eftersom} ${nomen}.`);
    rader.push(`${stor(foljd)} {*eftersom|på grund av} ${orsak}.`);
  }
  return rader.join("\n");
}

/** Steg 3: rätta ordföljden när orsaksbisatsen står först. */
export function sambandOrdfoljd(): string {
  return ORSAK_FOLJD.map(
    ([orsak, foljd, omvand]) => `Eftersom ${orsak} ${foljd}. => Eftersom ${orsak} ${omvand}. || Eftersom ${orsak}, ${omvand}.`,
  ).join("\n");
}

/* ----------------------------- Ordets byggstenar ---------------------------- */

/** [förled, efterled, sammansatt ord] */
export const SAMMANSATTA: [string, string, string][] = [
  ["kyl", "skåp", "kylskåp"], ["dator", "spel", "datorspel"], ["mat", "sal", "matsal"], ["fot", "spår", "fotspår"],
  ["sol", "glasögon", "solglasögon"], ["snö", "boll", "snöboll"], ["regn", "jacka", "regnjacka"], ["tand", "läkare", "tandläkare"],
  ["sjö", "häst", "sjöhäst"], ["bok", "mal", "bokmal"], ["sten", "bro", "stenbro"], ["is", "glass", "isglass"],
  ["skol", "bänk", "skolbänk"], ["bil", "dörr", "bildörr"], ["katt", "unge", "kattunge"], ["sand", "slott", "sandslott"],
  ["måne", "sken", "månsken"], ["fågel", "bo", "fågelbo"], ["hus", "nyckel", "husnyckel"], ["blå", "val", "blåval"],
  ["grön", "sak", "grönsak"], ["natt", "linne", "nattlinne"], ["hand", "boll", "handboll"], ["vatten", "glas", "vattenglas"],
  ["sov", "säck", "sovsäck"], ["stjärn", "himmel", "stjärnhimmel"], ["korv", "bröd", "korvbröd"], ["sommar", "lov", "sommarlov"],
  ["plommon", "träd", "plommonträd"], ["fisk", "pinne", "fiskpinne"],
];

export function sammansattaSkriv(): string {
  return SAMMANSATTA.map(([a, b, ord]) => `${a} + ${b} = {${ord}}`).join("\n");
}

export function sammansattaDela(): string {
  return SAMMANSATTA.filter(([a, b, ord]) => ord === a + b).map(([a, b, ord]) => `${ord} = {${a}} + {${b}}`).join("\n");
}

/** [rot, ord med prefix/suffix, ledtråd] */
export const AVLEDNINGAR: [string, string, string][] = [
  ["lycklig", "olycklig", "motsatsen"], ["förstå", "missförstå", "förstå fel"], ["vinna", "återvinna", "vinna tillbaka"],
  ["skriva", "beskriva", "berätta hur något ser ut"], ["glad", "glädje", "substantiv"], ["mörk", "mörker", "substantiv"],
  ["sjuk", "sjukdom", "substantiv"], ["kär", "kärlek", "substantiv"], ["vacker", "skönhet", "substantiv, annat ord!"],
  ["svag", "svaghet", "substantiv"], ["stark", "styrka", "substantiv"], ["ung", "ungdom", "substantiv"],
  ["vän", "vänlig", "adjektiv"], ["tro", "trolig", "adjektiv"], ["fara", "farlig", "adjektiv"], ["smak", "smaklig", "adjektiv"],
  ["äta", "ätbar", "som går att äta"], ["använda", "användbar", "som går att använda"], ["undervisa", "lärare", "person, annat ord!"],
  ["simma", "simmare", "person"], ["löpa", "löpare", "person"], ["dansa", "dansare", "person"], ["måla", "målare", "person"],
  ["förklara", "förklaring", "substantiv"], ["beskriva", "beskrivning", "substantiv"], ["öva", "övning", "substantiv"],
  ["tävla", "tävling", "substantiv"], ["lösa", "lösning", "substantiv"], ["möjlig", "omöjlig", "motsatsen"], ["säker", "osäker", "motsatsen"],
];

export function avledningarSkriv(): string {
  return AVLEDNINGAR.filter(([, , l]) => !l.includes("annat ord")).map(([rot, ord, l]) => `${rot} → {${ord}} (${l})`).join("\n");
}

/** Böjda former där roten behålls: [grundform, böjd form, beskrivning]. */
export const ROT_BOJNING: [string, string, string][] = [
  ["blå", "blått", "ett ___ hav"], ["ny", "nytt", "ett ___ år"], ["fri", "fritt", "ett ___ land"], ["död", "dött", "ett ___ träd"],
  ["lätt", "lätt", "ett ___ prov"], ["trött", "trött", "ett ___ barn"], ["glad", "glada", "två ___ barn"], ["röd", "röda", "de ___ husen"],
  ["hänga, dåtid", "hängde", "jag ___ upp jackan"], ["skämmas, dåtid", "skämdes", "han ___ över det"], ["minnas, dåtid", "mindes", "jag ___ allt"],
  ["springa, dåtid", "sprang", "hon ___ fort"], ["dricka, dåtid", "drack", "vi ___ saft"], ["sjunga, dåtid", "sjöng", "de ___ en sång"], ["skriva, dåtid", "skrev", "jag ___ ett brev"],
  ["tömma, dåtid", "tömde", "hon ___ lådan"], ["bränna, dåtid", "brände", "han ___ sig på spisen"], ["stämma, dåtid", "stämde", "det ___ inte"],
  ["känna", "känd", "hon är ___ i hela landet"], ["bränna", "bränd", "en ___ macka"], ["stänga", "stängd", "en ___ dörr"], ["tömma", "tömd", "en ___ låda"],
  ["glömma", "glömd", "en ___ mössa"], ["fylla", "fylld", "en ___ påse"], ["ställa", "ställd", "en ___ fråga"], ["bygga", "byggd", "ett nyligen ___ hus"],
];

export function rotBojningSkriv(): string {
  return ROT_BOJNING.map(([grund, form, mening]) => `${stor(mening.replace("___", `{${form}}`))}. (${grund})`).join("\n");
}

/* ------------------------------- Textbindning ------------------------------ */

/** Välj rätt syftning – pronomen ska passa ordet det syftar på (en/ett, en/flera, person/sak). */
export const SYFTNING_RADER = `
  Vi har en katt. {*Den|Det|De} sover hela dagarna.
  Vi har ett marsvin. {Den|*Det|De} äter morötter.
  Jag har två kusiner. {*De|Dem|Den} bor i Malmö.
  Jag träffade mina kusiner. Jag träffade {de|*dem|den} i somras.
  Elsa fick en present. {*Hon|Den|Han} blev jätteglad.
  Elsa fick en present. {Hon|*Den|Det} var inslagen i rött papper.
  Omar har en hund. {*Han|Den|Hon} går ut med den varje kväll.
  Vi köpte ett nytt bord. {Den|*Det|De} är gjort av ek.
  Vi köpte nya stolar. {Den|Det|*De} är blå.
  Pappa bakade en kaka. {Han|*Den|Det} smakade choklad.
  Mormor bakade bullar. {*De|Den|Det} var nybakade.
  Mormor bakade bullar. {De|Den|*Hon} är bäst på att baka.
  Läraren delade ut proven. {*De|Den|Hon} var svåra.
  Ali och Sam spelar schack. {Han|*De|Dem} spelar varje fredag.
  Barnet grät. {Den|*Det|Hon} hade tappat sin napp.
  Huset brann. {Den|*Det|De} låg vid sjön.
  Bilen startade inte. {*Den|Det|Han} var för gammal.
  Fåglarna flög söderut. {Den|*De|Dem} kommer tillbaka på våren.
  Vi hittade ett gammalt brev. {Den|*Det|De} var skrivet 1920.
  Saga skrev en bok. {*Hon|Den|Han} skrev den på ett år.
  Saga skrev en bok. {Hon|*Den|Det} handlar om en drake.
  Polisen grep två män. {Han|*De|Dem} hade stulit cyklar.
  Polisen grep två män. Polisen grep {de|*dem|den} i natt.
  Vi köpte äpplen och päron. {Grönsakerna|*Frukten|Bären} var söt.
  Det var en gång en prinsessa. {En prinsessa|*Prinsessan|Det} bodde i ett slott.
  Hunden och katten bråkade. {*Djuren|Barnen|Hundarna} fick sova i olika rum.
  Jag lånade en bok på biblioteket. Jag lämnade tillbaka {*den|det|dem} i dag.
  Jag lånade två böcker. Jag lämnade tillbaka {den|de|*dem} i dag.
  Mina föräldrar ringde. {*De|Dem|Den} undrade när jag skulle komma hem.
  Lisa och jag gick på bio. Sedan åt {*vi|de|oss} pizza.
`;
