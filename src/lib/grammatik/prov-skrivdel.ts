import type { AgeGroup } from "@/lib/supabase/types";
import type { GrammatikAmne } from "./amnen";

/**
 * Skrivdel till kapitelproven (från mellanstadiet). Den ligger utanför de
 * 20 poängen och bedöms med kriterierna: provar om eleven kan använda det
 * kapitlet tar upp i en egen text och förklara sina val.
 */
export interface Skrivdel {
  uppgift: string;
  kriterier: string[];
}

type Niva = "mellanstadiet" | "hogstadiet" | "gymnasiet";

export const PROV_SKRIVDEL: Record<GrammatikAmne, Partial<Record<Niva, Skrivdel>>> = {
  ordklasser: {
    mellanstadiet: { uppgift: "Beskriv en plats du tycker om i fyra meningar. Stryk under två substantiv, två verb och två adjektiv.", kriterier: ["Fyra meningar", "Rätt ordklass på de understrukna orden", "Adjektiven passar ihop med substantiven (en stor sjö, ett stort hus)"] },
    hogstadiet: { uppgift: "Skriv ett kort referat (5–6 meningar) av något som hänt i skolan, i preteritum. Använd minst en mening i passiv form och ett sin/sitt/sina. Förklara sedan med en mening varför du valde passiv just där.", kriterier: ["Samma tempus genom texten", "Passiv form används rätt", "Sin syftar på subjektet", "Eleven motiverar valet av passiv"] },
    gymnasiet: { uppgift: "Skriv ett stycke sakprosa (6–8 meningar) där du medvetet växlar mellan aktiv och passiv form. Markera två ställen och förklara vilken effekt formen har.", kriterier: ["Korrekt kongruens och syftning", "Medveten växling mellan aktiv och passiv", "Förklaringen visar förståelse för effekten (fokus, ansvar)"] },
  },
  morfem: {
    mellanstadiet: { uppgift: "Välj två långa ord från en text du läst. Dela dem i delar och förklara hur delarna hjälper dig att förstå och stava orden.", kriterier: ["Två ord delade rätt", "Förklaring av vad delarna betyder", "Koppling till stavning"] },
    hogstadiet: { uppgift: "Förklara med egna exempel hur kunskap om rot, prefix och suffix kan hjälpa dig att förstå nya ord och stava rätt.", kriterier: ["Begreppen rot, prefix och suffix används rätt", "Minst två egna exempel", "En tydlig koppling till både förståelse och stavning"] },
    gymnasiet: { uppgift: "Analysera tre fackord från ett annat ämne med morfemanalys och förklara hur lånmorfemen bidrar till betydelsen.", kriterier: ["Korrekt morfemanalys", "Lånmorfemens betydelse förklaras", "Tydlig och saklig framställning"] },
  },
  ordbildning: {
    mellanstadiet: { uppgift: "Hitta på en uppfinning och ge den ett sammansatt namn. Skriv tre meningar om den med minst tre sammansatta ord.", kriterier: ["Sammansatta ord skrivs ihop", "Minst tre sammansatta ord", "Foge-s där det behövs"] },
    hogstadiet: { uppgift: "Skriv ett kort mejl till en myndighet (4–5 meningar) där du använder minst två förkortningar korrekt. Förklara varför du valde att skriva ut eller förkorta.", kriterier: ["Förkortningarna skrivs rätt", "Inga särskrivningar", "Motiveringen tar hänsyn till mottagaren"] },
    gymnasiet: { uppgift: "Skriv om ett stycke i tung nominalstil till verbalstil och kommentera skillnaden för läsaren.", kriterier: ["Nominaliseringar ersätts med verb", "Innehållet är detsamma", "Kommentaren tar upp läsbarhet"] },
  },
  stavning: {
    mellanstadiet: { uppgift: "Skriv fem meningar om en utflykt. Använd minst fem ord med dubbelteckning och ett namn på en plats.", kriterier: ["Dubbelteckning rätt", "Stor bokstav på namn och i början av mening", "Fem meningar"] },
    hogstadiet: { uppgift: "Korrekturläs en egen text. Skriv upp tre ord du stavade fel eller var osäker på och förklara med en regel eller med roten varför de stavas som de gör.", kriterier: ["Tre ord med rätt stavning", "Varje ord har en regel eller en rotförklaring", "Förklaringarna stämmer"] },
    gymnasiet: { uppgift: "Skriv ett kort sakprosastycke med siffror, datum, en förkortning och ett citat. Följ skrivreglerna.", kriterier: ["Siffror och datum enligt skrivreglerna", "Förkortningen är korrekt", "Citatet är korrekt markerat"] },
  },
  satsdelar: {
    mellanstadiet: { uppgift: "Skriv tre meningar om en fotbollsmatch. Märk ut subjekt (S), predikat (P) och objekt (O) i en av dem.", kriterier: ["Hela meningar", "Satsdelarna rätt markerade"] },
    hogstadiet: { uppgift: "Skriv ett stycke (5–6 meningar) där du varierar vad som står först i meningarna. Markera en mening med predikativ och en med indirekt objekt.", kriterier: ["Varierade meningsbörjor med verbet på plats två", "Predikativ och indirekt objekt rätt markerade", "Texten hänger ihop"] },
    gymnasiet: { uppgift: "Skriv ett stycke där du använder formellt subjekt och en bisats som subjekt eller objekt. Förklara vilken effekt konstruktionerna får.", kriterier: ["Formellt subjekt används rätt", "Bisatsen har rätt funktion", "Förklaringen tar upp slutfokus eller betoning"] },
  },
  meningsbyggnad: {
    mellanstadiet: { uppgift: "Skriv en kort berättelse (5–6 meningar) där minst två meningar börjar med något annat än subjektet och minst en mening har en bisats.", kriterier: ["Verbet på plats två", "Minst en bisats", "Varierade meningsbörjor"] },
    hogstadiet: { uppgift: "Skriv två korta texter om samma händelse: en spännande med korta meningar och en lugn med längre meningar och bisatser. Förklara skillnaden i en mening.", kriterier: ["Tydlig skillnad i meningslängd", "BIFF i bisatserna", "Förklaringen kopplar form till effekt"] },
    gymnasiet: { uppgift: "Skriv ett stycke där du använder utbrytning och slutfokus för att lyfta fram det viktigaste. Förklara dina val.", kriterier: ["Utbrytning används rätt", "Det viktigaste står sist", "Förklaringen visar medvetenhet om informationsstruktur"] },
  },
  samband: {
    mellanstadiet: { uppgift: "Förklara i fyra meningar varför man ska äta frukost. Använd eftersom, därför och om.", kriterier: ["Alla tre sambandsorden används rätt", "Orsak och följd hänger ihop logiskt"] },
    hogstadiet: { uppgift: "Skriv ett argumenterande stycke med en tes och två skäl. Uttryck orsak på minst två olika sätt och använd ett villkor.", kriterier: ["Tydlig tes", "Orsak uttrycks på två sätt", "Ett villkor", "Inga påståenden om orsak som bara är samband"] },
    gymnasiet: { uppgift: "Skriv ett resonerande stycke om ett samhällsfenomen. Skilj på samband och orsak och använd ett medgivande.", kriterier: ["Samband och orsak hålls isär", "Medgivande med tydlig vändning", "Försiktiga formuleringar där det behövs"] },
  },
  skiljetecken: {
    mellanstadiet: { uppgift: "Skriv en dialog med fyra repliker mellan två personer. Använd talstreck eller citattecken och minst en uppräkning.", kriterier: ["Repliker korrekt markerade", "Komma vid uppräkning", "Rätt tecken i slutet av meningarna"] },
    hogstadiet: { uppgift: "Skriv en kort instruktion eller faktatext (5–6 meningar) med kolon före en uppräkning, en relativsats med extra information inom kommatecken och ingen satsradning.", kriterier: ["Kolon före uppräkningen", "Komma runt den extra informationen", "Ingen satsradning"] },
    gymnasiet: { uppgift: "Skriv ett stycke med ett citat och en källhänvisning, ett tankstreck och ett semikolon – enligt skrivreglerna.", kriterier: ["Citat och källhänvisning korrekta", "Tankstreck och semikolon används rätt"] },
  },
  textbindning: {
    mellanstadiet: { uppgift: "Skriv ett stycke på fem meningar om ett djur. Använd minst tre sambandsord och byt ut djurets namn mot pronomen.", kriterier: ["Minst tre sambandsord", "Pronomen syftar tydligt", "Texten hänger ihop"] },
    hogstadiet: { uppgift: "Skriv ett stycke (6–8 meningar) med en kärnmening först. Ringa in sambandsmarkörerna och dra pilar från referensorden till det de syftar på.", kriterier: ["Kärnmening först", "Varierade sambandsmarkörer", "Tydliga syftningar", "Tematisk bindning – det nya tas upp i nästa mening"] },
    gymnasiet: { uppgift: "Skriv två stycken med metatext och minst en sammanfattande referens. Markera tema och rema i tre meningar.", kriterier: ["Metatext", "Sammanfattande referens", "Tema och rema rätt markerade"] },
  },
  stilistik: {
    hogstadiet: { uppgift: "Skriv samma budskap till en kompis och till rektorn (3–4 meningar var). Förklara två skillnader i ordval och meningsbyggnad.", kriterier: ["Tydlig skillnad i stilnivå", "Två skillnader förklaras", "Den formella texten är saklig och korrekt"] },
    gymnasiet: { uppgift: "Skriv inledningen till ett tal med minst tre retoriska grepp. Namnge greppen och förklara deras effekt.", kriterier: ["Tre grepp används", "Greppen namnges rätt", "Effekten förklaras"] },
  },
};

export function skrivdelFor(amne: GrammatikAmne, stadie: AgeGroup): Skrivdel | undefined {
  return stadie === "lagstadiet" ? undefined : PROV_SKRIVDEL[amne][stadie];
}
