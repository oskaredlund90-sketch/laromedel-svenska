import type { Arbetsomrade } from "../typer";

export const SKRIVA_LARA_GY: Arbetsomrade = {
  id: "skriva-for-att-lara-studieteknik",
  titel: "Skriva för att lära – studieteknik och akademisk läsning",
  stadie: "gymnasiet",
  arskurs: "1",
  ingress:
    "Skrivandet som verktyg för att förstå och minnas i alla ämnen: eleverna antecknar effektivt under föreläsningar, läser och antecknar ur fackprosa och vetenskapliga texter, skriver sammanfattningar och abstract, använder en lärlogg för reflektion och tränar återkallning i stället för att bara läsa om.",
  kursplan: [
    "Att använda skrivande som redskap för lärande och reflektion.",
    "Läsning av och strategier för att förstå sakprosa och vetenskapliga texter.",
    "Att sammanfatta, referera och använda källor i egna texter.",
    "Förberedelse för vidare studier och gymnasiearbetet.",
  ],
  mal: [
    "Anteckna strukturerat under en genomgång eller föreläsning.",
    "Läsa en fackprosatext strategiskt: överblick, frågor, läsning och sammanfattning.",
    "Skriva en sammanfattning och ett kort abstract.",
    "Använda en lärlogg för att reflektera över sitt lärande.",
    "Använda återkallning och spridd repetition i stället för att bara läsa om.",
  ],
  begrepp: [
    ["återkallning", "att plocka fram kunskap ur minnet, t.ex. genom att förhöra sig själv – ett av de effektivaste sätten att lära"],
    ["spridd repetition", "att repetera vid flera tillfällen över tid i stället för allt på en gång"],
    ["överblicksläsning", "att först skumma rubriker, sammanfattning och bilder för att förstå textens struktur"],
    ["abstract", "kort sammanfattning av en vetenskaplig text: syfte, metod, resultat och slutsats"],
    ["lärlogg", "regelbundna korta texter om vad man lärt sig och vad som är oklart"],
  ],
  lankar: [
    ["Arbetsområde: Vetenskapligt skrivande och källhantering", "arbetsomraden/vetenskapligt-skrivande"],
    ["Lässtrategier", "lasstrategier"],
    ["Elevtips", "elevtips"],
  ],
  fortest: [
    { fraga: "Vilket sätt att plugga ger oftast bäst resultat på sikt?", alternativ: ["att förhöra sig själv vid flera tillfällen", "att läsa om texten många gånger samma kväll", "att stryka under nästan allt"], ratt: 0 },
    { fraga: "Vad är ett abstract?", alternativ: ["en kort sammanfattning av en vetenskaplig text", "en lista med källor", "en inledning med en fråga"], ratt: 0 },
    { fraga: "Vad är överblicksläsning?", alternativ: ["att först skumma rubriker och sammanfattning", "att läsa allt noggrant från början", "att bara läsa slutet"], ratt: 0 },
    { fraga: "Vad är syftet med anteckningar under en föreläsning?", alternativ: ["att välja ut och bearbeta det viktigaste", "att skriva ner allt ordagrant", "att hålla händerna sysselsatta"], ratt: 0 },
    { fraga: "Vad är en lärlogg?", alternativ: ["korta texter om vad man lärt sig och vad som är oklart", "en dagbok om fritiden", "ett prov"], ratt: 0 },
  ],
  lektioner: [
    {
      titel: "Anteckna under en föreläsning",
      mal: "Eleverna kan anteckna strukturerat och bearbeta anteckningarna efteråt.",
      upplagg: ["Förtestet (10 min).", "Kort föreläsning (10–15 min) i ett ämne – eleverna antecknar med tvåkolumnsmetoden.", "Eleverna formulerar frågor till sina anteckningar och förhör varandra (15 min).", "Diskussion: för hand eller digitalt?"],
      bilder: [
        { typ: "jamfor", rubrik: "Tvåkolumnsmetoden", kolumner: ["Del", "Innehåll"], rader: [["Höger (under föreläsningen)", "nyckelord, korta fraser, pilar, egna förkortningar"], ["Vänster (efteråt)", "frågor och centrala begrepp"], ["Nederst", "sammanfattning i några meningar"]] },
        { typ: "punkter", rubrik: "Effektiva anteckningar", punkter: ["Skriv med egna ord – inte ordagrant.", "Markera det du inte förstår med ett frågetecken.", "Gå igenom anteckningarna samma dag.", "Förhör dig själv med frågorna i vänsterkolumnen."] },
      ],
      elevtext: [{ rubrik: "Anteckna för att förstå", stycken: ["Anteckningar är ett verktyg för att tänka, inte en kopia av föreläsningen. När du väljer ut och formulerar om bearbetar du innehållet – och då lär du dig. Vissa studier tyder på att anteckningar för hand gör att man bearbetar mer, eftersom man inte hinner skriva allt – men forskningen är inte entydig. Testa vad som fungerar för dig.", "Efteråt skriver du frågor till anteckningarna. Genom att besvara dem utan att titta tränar du återkallning, ett av de effektivaste sätten att minnas."] }],
      uppgifter: ["Anteckna under föreläsningen med tvåkolumnsmetoden.", "Skriv minst fem frågor i vänsterkolumnen och en sammanfattning.", "Förhör en kamrat – och låt kamraten förhöra dig."],
    },
    {
      titel: "Läsa och anteckna ur fackprosa",
      mal: "Eleverna kan läsa en fackprosatext strategiskt och anteckna det viktigaste.",
      upplagg: ["Visa läsgången på bilden (10 min).", "Eleverna läser en artikel eller ett kapitel från ett annat ämne med läsgången (25 min).", "Jämför anteckningar i grupp (10 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Läsgång för fackprosa", kolumner: ["Steg", "Gör så här"], rader: [["Överblick", "Läs rubrik, ingress, mellanrubriker, sammanfattning och bilder."], ["Frågor", "Gör om rubrikerna till frågor: Vad är …? Varför …?"], ["Läs", "Läs ett avsnitt i taget och leta svar på frågorna."], ["Återberätta", "Skriv svaret med egna ord utan att titta."], ["Repetera", "Gå igenom frågorna igen efter några dagar."]] },
      ],
      elevtext: [{ rubrik: "Strategisk läsning", stycken: ["Fackprosa läses bäst i flera steg. Börja med en överblick, så att du vet vad texten handlar om och hur den är byggd. Gör rubrikerna till frågor och läs för att hitta svaren. Skriv sedan svaren med egna ord utan att titta i texten – då märker du vad du har förstått."] }],
      uppgifter: ["Läs texten med läsgången. Skriv dina frågor och svar.", "Markera ett ställe du inte förstod och formulera en fråga till läraren."],
      lankar: [["Lässtrategier", "lasstrategier"]],
    },
    {
      titel: "Sammanfattning och abstract",
      mal: "Eleverna kan skriva en sammanfattning och ett abstract.",
      upplagg: ["Visa skillnaden mellan sammanfattning och abstract (10 min).", "Eleverna skriver en sammanfattning av texten från förra lektionen (20 min).", "De skriver ett abstract på högst 120 ord av en vetenskaplig artikel eller rapport (15 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Två korta texter", kolumner: ["Typ", "Innehåll"], rader: [["Sammanfattning", "det viktigaste i texten, med egna ord och källa"], ["Abstract", "syfte, metod, resultat och slutsats – på 100–250 ord"]] },
        { typ: "fraga", fraga: { fraga: "Vad ingår i ett abstract?", alternativ: ["syfte, metod, resultat och slutsats", "egna åsikter om texten", "en lista med alla källor"], ratt: 0 } },
      ],
      elevtext: [{ rubrik: "Kort och exakt", stycken: ["En sammanfattning tar med det viktigaste i en text, kort och med egna ord, och anger källan. Ett abstract är en särskild sorts sammanfattning som inleder vetenskapliga texter. Det beskriver syfte, metod, resultat och slutsats så att läsaren snabbt kan avgöra om texten är relevant."] }],
      uppgifter: ["Skriv en sammanfattning (högst 150 ord) av texten ni läste.", "Skriv ett abstract (högst 120 ord) av en vetenskaplig artikel eller rapport."],
      lankar: [["Arbetsområde: Vetenskapligt skrivande", "arbetsomraden/vetenskapligt-skrivande"]],
    },
    {
      titel: "Lärlogg, återkallning och repetition",
      mal: "Eleverna kan använda lärlogg, återkallning och spridd repetition i sina studier.",
      upplagg: ["Genomgång: vad forskningen säger om effektiva studiestrategier (15 min).", "Eleverna gör en studieplan inför ett kommande prov i valfritt ämne (20 min).", "Första lärloggsinlägget (10 min)."],
      bilder: [
        { typ: "jamfor", rubrik: "Vad fungerar?", kolumner: ["Mindre effektivt", "Mer effektivt"], rader: [["läsa om texten", "förhöra sig själv (återkallning)"], ["plugga allt kvällen före", "repetera vid flera tillfällen (spridd repetition)"], ["stryka under mycket", "förklara med egna ord för någon annan"], ["läsa passivt", "skriva egna frågor och svara på dem"]] },
        { typ: "punkter", rubrik: "Lärlogg", punkter: ["Vad lärde jag mig i dag?", "Hur hänger det ihop med det jag redan kunde?", "Vad är fortfarande oklart?", "Vad gör jag nästa gång?"] },
      ],
      elevtext: [{ rubrik: "Plugga smartare", stycken: ["Att läsa om en text känns effektivt, men ger ofta mindre än man tror. Forskning om lärande visar att det fungerar bättre att förhöra sig själv (återkallning) och att repetera vid flera tillfällen över tid (spridd repetition).", "En lärlogg är korta texter där du skriver vad du har lärt dig, hur det hänger ihop och vad som är oklart. Det gör ditt lärande synligt – för dig och för läraren."] }],
      uppgifter: ["Gör en studieplan med minst tre repetitionstillfällen inför ett prov.", "Skriv tio frågor att förhöra dig själv med.", "Skriv ett lärloggsinlägg med de fyra frågorna."],
    },
  ],
  prov: {
    fragor: [
      { fraga: "Vad skriver man i vänsterkolumnen i tvåkolumnsmetoden?", alternativ: ["frågor och centrala begrepp", "allt föreläsaren säger", "datum och namn"], ratt: 0 },
      { fraga: "Vad är det första steget i läsgången för fackprosa?", alternativ: ["överblick", "noggrann läsning", "sammanfattning"], ratt: 0 },
      { fraga: "Vad är återkallning?", alternativ: ["att plocka fram kunskap ur minnet", "att läsa om texten", "att skriva av en text"], ratt: 0 },
      { fraga: "Vad betyder spridd repetition?", alternativ: ["att repetera vid flera tillfällen över tid", "att repetera allt på en gång", "att låta bli att repetera"], ratt: 0 },
      { fraga: "Vad ingår INTE i ett abstract?", alternativ: ["egna åsikter om ämnet", "syfte", "resultat"], ratt: 0 },
      { fraga: "Vilket påstående stämmer bäst?", alternativ: ["Att förhöra sig själv ger ofta bättre resultat än att läsa om.", "Att stryka under allt är den bästa metoden.", "Det spelar ingen roll hur man pluggar."], ratt: 0 },
    ],
    oppna: [
      { fraga: "Läs texten som läraren ger dig. Anteckna, skriv fem frågor och en sammanfattning på högst 150 ord.", bedomning: ["Relevant urval i anteckningarna", "Frågor som täcker det centrala", "Sammanfattning med egna ord och källa"] },
      { fraga: "Beskriv hur du skulle förbereda dig inför ett stort prov och motivera med det du har lärt dig om effektiva studiestrategier.", bedomning: ["Konkret plan över tid", "Återkallning och spridd repetition används", "Motiveringar"] },
    ],
  },
  tips: ["Gör arbetsområdet tidigt i år 1 – det hjälper eleverna i alla ämnen.", "Samarbeta med andra ämneslärare om texterna i lektion 2.", "Lärloggen kan bli ett återkommande inslag i svenskan."],
};
