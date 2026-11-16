import type { AgeGroup } from "@/lib/supabase/types";
import type { GrammatikAmne } from "./amnen";

/**
 * "Använd i din text": en skrivuppgift sist i varje kapitel, så att grammatiken
 * används i elevens egen text och inte bara i isolerade övningar.
 */
export const SKRIV_SJALV: Record<GrammatikAmne, Partial<Record<AgeGroup, string>>> = {
  ordklasser: {
    lagstadiet: "Skriv tre meningar om ditt favoritdjur. Ringa in substantiven, stryk under verben och sätt en prick över adjektiven.",
    mellanstadiet: "Beskriv ditt rum i fem meningar. Använd minst sex adjektiv – och kontrollera att de passar ihop med substantiven (en mjuk kudde, ett mjukt täcke).",
    hogstadiet: "Skriv ett stycke (6–8 meningar) om något som hände i somras, i preteritum. Byt sedan med en kompis: stryk under alla verb och kontrollera att tempus är detsamma hela vägen. Finns det sin, sitt, sina – syftar de på subjektet?",
    gymnasiet: "Ta ett stycke ur en egen text. Skriv om två meningar från aktiv till passiv form, eller tvärtom. Vilken version passar bäst i texten – och varför?",
  },
  morfem: {
    lagstadiet: "Hitta på tre egna sammansatta ord, till exempel glassbil. Rita ett av dem och skriv vad det betyder.",
    mellanstadiet: "Välj ett ord, till exempel glad. Bygg så många nya ord du kan med prefix, suffix och sammansättning (glädje, gladare, glädjande …). Använd tre av dem i varsin mening.",
    hogstadiet: "Leta upp fem långa ord i en text du läser i något ämne. Dela dem i morfem och förklara hur delarna ger betydelsen.",
    gymnasiet: "Välj fem fackord från ett annat ämne (till exempel biologi eller samhällskunskap). Dela dem i morfem och förklara dem för en elev i årskurs 7.",
  },
  ordbildning: {
    mellanstadiet: "Skriv en kort reklamtext för en påhittad uppfinning. Ge den ett sammansatt namn och använd minst tre sammansatta ord till.",
    hogstadiet: "Skriv ett sms och ett formellt mejl med samma innehåll. Använd förkortningar i sms:et – och skriv ut dem i mejlet.",
    gymnasiet: "Skriv ett stycke om ett ämne du kan mycket om. Stryk under alla lånord och avledningar. Finns det svenska ord som fungerar lika bra?",
  },
  stavning: {
    lagstadiet: "Skriv fem meningar där varje mening har ett ord med dubbelteckning (till exempel katt, boll, glass).",
    mellanstadiet: "Gå igenom en egen text och leta efter ord du är osäker på. Skriv upp dem, kontrollera stavningen i en ordlista och skriv en regel som hjälper dig.",
    hogstadiet: "Skriv en kort berättelse (8–10 meningar) som innehåller minst fem ord med m eller n i slutet (rum, sann, kam …). Kontrollera dubbelteckningen med hjälp av roten.",
    gymnasiet: "Korrekturläs en egen text från i år. Gör en lista över dina tre vanligaste stavfel och skriv en regel eller ett knep för vart och ett.",
  },
  satsdelar: {
    lagstadiet: "Skriv tre meningar om din skoldag. Stryk under den som gör något och ringa in det som händer.",
    mellanstadiet: "Skriv fem meningar om en utflykt. Börja varje mening med en ny satsdel: subjekt, tid, plats …",
    hogstadiet: "Skriv ett stycke där minst tre meningar har ett indirekt objekt eller ett predikativ. Markera dem med IO och PV.",
    gymnasiet: "Skriv två meningar med formellt subjekt (Det finns …, Det är viktigt att …). Skriv sedan om dem utan formellt subjekt. Vilken version är tydligast?",
  },
  meningsbyggnad: {
    lagstadiet: "Skriv en kort berättelse i fem meningar. Börja varje mening med stor bokstav och avsluta med punkt, frågetecken eller utropstecken.",
    mellanstadiet: "Skriv en berättelse där minst tre meningar börjar med något annat än subjektet (I morse …, Plötsligt …). Kontrollera att verbet står på plats två.",
    hogstadiet: "Skriv samma händelse två gånger: en gång spännande med korta meningar och en gång lugnt med längre meningar med bisatser. Kontrollera BIFF i bisatserna.",
    gymnasiet: "Skriv om ett stycke i nominalstil till verbalstil (eller tvärtom). Vilken version passar mottagaren bäst?",
  },
  samband: {
    lagstadiet: "Skriv tre meningar om varför du tycker om något. Använd eftersom, så och om.",
    mellanstadiet: "Skriv en kort faktatext om ett djur. Förklara minst två saker med eftersom, därför eller på grund av.",
    hogstadiet: "Skriv ett argumenterande stycke med en tes och två skäl. Uttryck orsak och följd på minst tre olika sätt (bisats, sambandsord, verb som leder till).",
    gymnasiet: "Skriv ett resonemang om ett samband i samhället. Skilj tydligt på samband och orsak, och använd minst ett villkor och ett medgivande.",
  },
  skiljetecken: {
    lagstadiet: "Skriv en kort dialog mellan två djur. Använd punkt, frågetecken och utropstecken.",
    mellanstadiet: "Skriv en dialog på sex repliker. Använd talstreck eller citattecken och glöm inte kommat vid uppräkningar.",
    hogstadiet: "Skriv en instruktion med en uppräkning efter kolon, en mening med semikolon och en mening med en inskjuten bisats inom kommatecken.",
    gymnasiet: "Skriv ett stycke med ett citat, en källhänvisning och minst en siffra och en förkortning – enligt skrivreglerna.",
  },
  textbindning: {
    lagstadiet: "Skriv vad du gjorde i går i fyra meningar. Börja meningarna med först, sedan, efter det och till sist.",
    mellanstadiet: "Skriv en kort berättelse om ett husdjur. Byt ut namnet mot han, hon, den eller ett annat ord så att du inte upprepar det.",
    hogstadiet: "Skriv ett stycke på 6–8 meningar med en tydlig kärnmening först. Ringa in sambandsmarkörerna och dra pilar från pronomen till det de syftar på.",
    gymnasiet: "Ta en egen text och markera tema och rema i ett stycke. Skriv om stycket så att den röda tråden blir tydligare, och lägg till en mening metatext.",
  },
  stilistik: {
    hogstadiet: "Skriv samma budskap tre gånger: till en kompis, till klassen och till rektorn. Vad ändrade du – ord, meningsbyggnad eller ton?",
    gymnasiet: "Skriv en inledning till ett tal med minst tre retoriska grepp (till exempel retorisk fråga, trekomponentsregel och kontrast). Markera dem.",
  },
};
