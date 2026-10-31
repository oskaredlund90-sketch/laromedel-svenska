/**
 * Innehållet på /lasformagor/[h|d|s|g] – hur man tränar varje läsförmåga.
 * Egna texter och frågor (fria att publicera).
 */

import type { Lasformaga } from "./typer";

export interface Flerval {
  fraga: string;
  alternativ: string[];
  ratt: number;
  forklaring: string;
}

export interface Formagesida {
  formaga: Lasformaga;
  slug: string;
  rubrik: string;
  ingress: string;
  /** Ord i frågan som visar att det är den här förmågan. */
  signalord: string[];
  steg: { rubrik: string; text: string }[];
  misstag: string[];
  meningsstartare: string[];
  exempel: { fraga: string; svagt: string; starkt: string; varfor: string };
  ovning: {
    rubrik: string;
    text: string;
    flerval: Flerval[];
    oppen: { fraga: string; modellsvar: string; checklista: string[] };
  };
}

const TEXT_FYRTORNET = `Fyrvaktarens dotter

Varje kväll klättrade Elin de hundrasju trappstegen upp till lampan i fyren på Stora Skär. Pappa hade blivit sämre i knät sedan i våras, så nu var det hennes uppgift att tända ljuset innan mörkret föll.

Den här kvällen låg dimman tät över vattnet. Elin hörde ett avlägset motorljud men kunde inte se någon båt. Hon skyndade sig uppför trapporna, två steg i taget, och kände hur hjärtat bultade. När ljuset äntligen svepte ut över havet tystnade motorljudet för ett ögonblick. Sedan hördes det igen – nu på väg bort från grynnorna vid udden.

Nästa morgon låg en lapp i brevlådan vid bryggan. ”Tack för ljuset i går. Utan det hade vi gått på grund. /Familjen på Ljungö.” Elin vek ihop lappen och stoppade den i fickan. Hon sa ingenting till pappa, men hela dagen gick hon och log.`;

const TEXT_SOPOR = `Varför sorterar vi sopor?

Varje svensk slänger i genomsnitt omkring 450 kilo hushållsavfall per år. Tidigare hamnade nästan allt på soptippen, där det låg kvar i hundratals år. I dag återvinns eller förbränns det mesta i stället.

När vi sorterar kan materialet användas igen. En aluminiumburk kan till exempel smältas ner och bli en ny burk på några veckor, och det kräver bara en bråkdel av den energi som behövs för att tillverka en helt ny. Papper kan återvinnas ungefär sju gånger innan fibrerna blir för korta. Matavfall kan bli biogas som driver bussar.

Men sortering är inte hela lösningen. Det bästa för miljön är att slänga mindre från början – att laga det som går sönder, låna i stället för att köpa och bara handla det man behöver. Återvinning är bra, men det som aldrig blir sopor är ännu bättre.`;

export const FORMAGESIDOR: Formagesida[] = [
  {
    formaga: "H",
    slug: "h",
    rubrik: "Hitta information i texten",
    ingress: "Svaret står i texten – din uppgift är att hitta det och skriva ner precis det som frågan frågar efter.",
    signalord: ["Vem", "Vad", "Var", "När", "Hur många", "Nämn", "Ge exempel från texten", "Vilket år …"],
    steg: [
      { rubrik: "Läs frågan två gånger", text: "Ringa in frågeordet (vem, var, när …) och det viktigaste ordet i frågan. Hur många saker ska du svara med?" },
      { rubrik: "Leta efter nyckelordet", text: "Skumma texten och leta efter ordet från frågan – eller ett ord som betyder samma sak." },
      { rubrik: "Läs runt omkring", text: "När du hittat ordet: läs hela meningen, och meningen före och efter. Där står oftast svaret." },
      { rubrik: "Svara med textens ord", text: "Skriv svaret med hela meningar. Använd gärna samma ord som i texten." },
      { rubrik: "Räkna dina exempel", text: "Ber frågan om tre exempel? Kontrollera att du har tre – och att alla faktiskt står i texten." },
    ],
    misstag: [
      "Att svara på minnet i stället för att gå tillbaka till texten.",
      "Att ge färre exempel än frågan ber om.",
      "Att skriva något som är sant men som inte står i texten.",
      "Att svara på en annan fråga än den som ställs – till exempel varför i stället för vad.",
    ],
    meningsstartare: ["I texten står det att …", "Tre exempel från texten är …, … och …", "Det framgår i stycke två att …"],
    exempel: {
      fraga: "Varför är det bra att sortera aluminiumburkar? (Text: Varför sorterar vi sopor?)",
      svagt: "För att det är bra för miljön.",
      starkt: "För att burken kan smältas ner och bli en ny burk, och det kräver bara en liten del av energin som behövs för att göra en helt ny.",
      varfor: "Det svaga svaret är sant, men det står i nästan varje text om miljö. Det starka svaret använder det som står i just den här texten.",
    },
    ovning: {
      rubrik: "Varför sorterar vi sopor?",
      text: TEXT_SOPOR,
      flerval: [
        { fraga: "Hur mycket hushållsavfall slänger varje svensk i genomsnitt per år?", alternativ: ["45 kilo", "150 kilo", "450 kilo", "4 500 kilo"], ratt: 2, forklaring: "Det står i första meningen: omkring 450 kilo." },
        { fraga: "Hur många gånger kan papper återvinnas?", alternativ: ["En gång", "Ungefär sju gånger", "Hur många gånger som helst", "Ungefär hundra gånger"], ratt: 1, forklaring: "Andra stycket: ungefär sju gånger innan fibrerna blir för korta." },
        { fraga: "Vad kan matavfall bli?", alternativ: ["Papper", "Aluminium", "Biogas", "Gödsel till krukväxter"], ratt: 2, forklaring: "Matavfall kan bli biogas som driver bussar." },
        { fraga: "Var hamnade nästan allt avfall tidigare?", alternativ: ["I havet", "På soptippen", "I förbränningen", "Hos återvinningen"], ratt: 1, forklaring: "Tidigare hamnade nästan allt på soptippen." },
      ],
      oppen: {
        fraga: "Vad är enligt texten det allra bästa för miljön? Ge tre exempel från texten på hur man kan göra.",
        modellsvar: "Det bästa är att slänga mindre från början. Man kan laga det som går sönder, låna i stället för att köpa och bara handla det man behöver.",
        checklista: ["Har jag svarat på vad som är det bästa?", "Har jag tre exempel?", "Står alla tre exemplen i texten?"],
      },
    },
  },
  {
    formaga: "D",
    slug: "d",
    rubrik: "Dra enkla slutsatser",
    ingress: "Svaret står inte rakt ut, men du kan räkna ut det genom att lägga ihop två saker som står i texten.",
    signalord: ["Varför …?", "Hur kommer det sig …?", "Vad betyder det att …?", "Hur kände …?", "Vad tycker …?"],
    steg: [
      { rubrik: "Förstå frågan", text: "Vad är det du ska räkna ut? Skriv frågan med egna ord." },
      { rubrik: "Hitta ledtrådarna", text: "Leta upp de ställen i texten som handlar om det frågan gäller. Ofta finns två ledtrådar på olika ställen." },
      { rubrik: "Lägg ihop", text: "Det står att … och det står att … – alltså måste … Så fungerar en slutsats." },
      { rubrik: "Kolla att det stämmer", text: "Går din slutsats ihop med resten av texten? Finns det något som säger emot?" },
      { rubrik: "Skriv med ett därför", text: "Svara och visa hur du kom fram till det: … eftersom det står att …" },
    ],
    misstag: [
      "Att gissa utan stöd i texten.",
      "Att bara upprepa en mening från texten utan att svara på varför.",
      "Att missa att ledtråden finns längre fram eller tidigare i texten.",
    ],
    meningsstartare: ["Det står att … och …, alltså …", "Man förstår att … eftersom …", "Jag drar slutsatsen att … för att …"],
    exempel: {
      fraga: "Varför ville Elin inte berätta om lappen för pappa, tror du? (Text: Fyrvaktarens dotter)",
      svagt: "För att hon inte ville.",
      starkt: "Hon ville kanske inte att pappa skulle bli orolig över att båten nästan hade gått på grund – och hon var stolt över att ha klarat det själv. Det står att hon gick och log hela dagen.",
      varfor: "Det starka svaret drar en slutsats och stöder den med något som står i texten.",
    },
    ovning: {
      rubrik: "Fyrvaktarens dotter",
      text: TEXT_FYRTORNET,
      flerval: [
        { fraga: "Varför är det Elin som tänder ljuset i fyren?", alternativ: ["Hon tycker det är roligt", "Pappa har ont i knät", "Pappa är bortrest", "Det är hennes födelsedag"], ratt: 1, forklaring: "Pappa hade blivit sämre i knät – därför är det hennes uppgift nu." },
        { fraga: "Varför skyndar sig Elin uppför trapporna den här kvällen?", alternativ: ["Hon är sen till middagen", "Hon hör en båt i dimman", "Hon vill se solnedgången", "Pappa ropar på henne"], ratt: 1, forklaring: "Hon hör ett motorljud men ser ingen båt – den behöver ljuset." },
        { fraga: "Varför tystnar motorljudet ett ögonblick när ljuset tänds?", alternativ: ["Båten har gått på grund", "Båten stannar för att se var den är", "Båten sjunker", "Elin håller för öronen"], ratt: 1, forklaring: "När båtens folk ser ljuset stannar de och orienterar sig – sedan åker de bort från grynnorna." },
        { fraga: "Hur känner sig Elin efter att ha läst lappen?", alternativ: ["Rädd", "Arg", "Glad och stolt", "Uttråkad"], ratt: 2, forklaring: "Hon går och ler hela dagen." },
      ],
      oppen: {
        fraga: "Vad hade kunnat hända om Elin inte hade hunnit tända ljuset? Motivera med texten.",
        modellsvar: "Båten hade troligen gått på grund vid grynnorna vid udden. Det står på lappen att de hade gått på grund utan ljuset, och att båten åkte bort från grynnorna när ljuset tändes.",
        checklista: ["Har jag svarat på vad som hade kunnat hända?", "Har jag stöd från texten?", "Har jag skrivit eftersom eller det står att?"],
      },
    },
  },
  {
    formaga: "S",
    slug: "s",
    rubrik: "Tolka och sammanföra",
    ingress: "Här ska du använda hela texten – och dina egna tankar – för att förstå något på djupet. Det finns ofta flera rimliga svar, men du måste alltid motivera.",
    signalord: ["… tror du?", "Vad menas med …?", "Förklara …", "Jämför …", "Koppla bilden till texten", "Motivera ditt svar", "Hur förändras …?"],
    steg: [
      { rubrik: "Läs frågan noga", text: "Ska du tolka ett ord, en person, en förändring eller en bild? Ska du motivera? Hur många delar har frågan?" },
      { rubrik: "Samla från hela texten", text: "Tolkningsfrågor kräver ofta information från flera ställen. Skriv ner det du hittar." },
      { rubrik: "Tänk själv", text: "Vad betyder det du hittat? Vad säger det om personen eller händelsen? Lägg till dina egna kunskaper." },
      { rubrik: "Svara och motivera", text: "Skriv din tolkning – och direkt efter: eftersom det står att … Utan motivering blir det oftast halva poängen." },
      { rubrik: "Svara på alla delar", text: "Frågar de både vad och varför? Kontrollera att du har svarat på båda." },
    ],
    misstag: [
      "Att inte motivera sin tolkning.",
      "Att bara svara på halva frågan (t.ex. vilket straff, men inte hur det hänger ihop med namnet).",
      "Att återberätta texten i stället för att tolka den.",
      "Att tolka ordet bokstavligt när det betyder något annat i sammanhanget.",
    ],
    meningsstartare: ["Jag tror att … eftersom det står att …", "Det här visar att …", "I början … men i slutet …", "Bilden passar ihop med texten genom att …"],
    exempel: {
      fraga: "Hur förändras Elin från början till slutet av texten? (Text: Fyrvaktarens dotter)",
      svagt: "Hon blir glad.",
      starkt: "I början är hon stressad och nervös – hjärtat bultar och hon springer två steg i taget. I slutet är hon lugn och stolt, hon går och ler hela dagen eftersom hon vet att hon har räddat en familj.",
      varfor: "En förändring kräver två lägen: hur det var före och efter – och stöd från texten för båda.",
    },
    ovning: {
      rubrik: "Fyrvaktarens dotter",
      text: TEXT_FYRTORNET,
      flerval: [
        { fraga: "Vad betyder ”grynnorna” i texten?", alternativ: ["Små båtar", "Stenar strax under vattenytan", "Fiskarter", "Bryggor"], ratt: 1, forklaring: "Båten riskerar att gå på grund vid grynnorna – alltså stenar och grund under ytan." },
        { fraga: "Vilket ord beskriver Elin bäst?", alternativ: ["Lat", "Ansvarsfull", "Elak", "Skrytsam"], ratt: 1, forklaring: "Hon tar över pappas uppgift och skyndar sig när det behövs – och skryter inte om det efteråt." },
        { fraga: "Varför stoppar Elin lappen i fickan i stället för att slänga den, tror du?", alternativ: ["Den är skräp", "Den betyder mycket för henne", "Hon ska ge den till pappa", "Hon har ingen papperskorg"], ratt: 1, forklaring: "Hon sparar den – den är ett bevis på att hon gjort något viktigt." },
      ],
      oppen: {
        fraga: "Varför har texten fått titeln ”Fyrvaktarens dotter”, tror du? Motivera ditt svar.",
        modellsvar: "Jag tror att titeln visar att det är Elin som är huvudpersonen och inte pappan som är fyrvaktare. Fast det är pappas jobb är det hon som gör det viktiga i texten – hon tänder ljuset som räddar familjen.",
        checklista: ["Har jag skrivit vad jag tror?", "Har jag motiverat med något från texten?", "Har jag tänkt på hela texten, inte bara början?"],
      },
    },
  },
  {
    formaga: "G",
    slug: "g",
    rubrik: "Granska och värdera",
    ingress: "Nu tittar du på texten utifrån: vilken sorts text är det, vad vill den, hur är den skriven och vad tycker du om den?",
    signalord: ["Vilken texttyp/genre …?", "Vad är syftet …?", "Vad vill texten lära oss?", "Hur kan man se att …?", "Vad utmärker …?", "Vad tycker du …?"],
    steg: [
      { rubrik: "Bestäm texttyp", text: "Berättande, beskrivande, förklarande, instruerande eller argumenterande? Fråga dig vad texten vill göra med läsaren." },
      { rubrik: "Leta efter kännetecken", text: "Har den rubrik, stycken, jag-form, dialog, ett öppet slut, en tes, instruktioner i ordning? Det är textens kännetecken." },
      { rubrik: "Hitta konkreta exempel", text: "När frågan ber om exempel: citera eller peka på ett ställe i texten för varje kännetecken." },
      { rubrik: "Fundera på syfte och budskap", text: "Vad vill skribenten att du ska tänka, känna eller göra efter att du har läst?" },
      { rubrik: "Värdera", text: "Ge ett eget omdöme och motivera: Texten är övertygande eftersom … / Jag håller inte med, för att …" },
    ],
    misstag: [
      "Att nämna kännetecken utan att ge ett exempel från texten.",
      "Att blanda ihop texttyp (t.ex. berättande) och genre (t.ex. myt, novell).",
      "Att tycka något utan att motivera.",
    ],
    meningsstartare: ["Texten är en … eftersom …", "Ett kännetecken är … till exempel när det står …", "Syftet med texten är att …", "Jag tycker att texten … eftersom …"],
    exempel: {
      fraga: "Till vilken texttyp hör texten Varför sorterar vi sopor? Motivera.",
      svagt: "Faktatext.",
      starkt: "Det är en förklarande text. Den förklarar varför vi sorterar sopor, med fakta och exempel som aluminiumburken och pappret. I sista stycket finns också en uppmaning, att det bästa är att slänga mindre.",
      varfor: "Det starka svaret säger vilken texttyp och visar med exempel ur texten varför.",
    },
    ovning: {
      rubrik: "Varför sorterar vi sopor?",
      text: TEXT_SOPOR,
      flerval: [
        { fraga: "Vilken texttyp är texten?", alternativ: ["Berättande", "Instruerande", "Förklarande", "Dikt"], ratt: 2, forklaring: "Den förklarar varför vi sorterar och hur återvinning fungerar." },
        { fraga: "Vad är textens viktigaste budskap?", alternativ: ["Aluminium är bäst", "Det bästa är att slänga mindre från början", "Soptippar är bra", "Papper kan inte återvinnas"], ratt: 1, forklaring: "Sista stycket: det som aldrig blir sopor är ännu bättre." },
        { fraga: "Varför använder skribenten exempel med siffror (450 kilo, sju gånger)?", alternativ: ["För att texten ska bli längre", "För att göra texten trovärdig och konkret", "För att det är en mattetext", "För att förvirra läsaren"], ratt: 1, forklaring: "Siffror och exempel gör en förklarande text trovärdig." },
      ],
      oppen: {
        fraga: "Är texten övertygande? Ge ditt omdöme och motivera med två exempel från texten.",
        modellsvar: "Ja, jag tycker att den är övertygande. Den använder konkreta exempel, som att en aluminiumburk bara kräver en bråkdel av energin om den återvinns. Den avslutar också med en tydlig poäng som får läsaren att tänka efter: det som aldrig blir sopor är ännu bättre.",
        checklista: ["Har jag gett ett tydligt omdöme?", "Har jag två exempel från texten?", "Har jag förklarat varför exemplen gör texten övertygande (eller inte)?"],
      },
    },
  },
];

export function hamtaFormagesida(slug: string): Formagesida | undefined {
  return FORMAGESIDOR.find((f) => f.slug === slug);
}
