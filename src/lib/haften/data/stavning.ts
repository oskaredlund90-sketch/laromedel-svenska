import type { HafteKalla } from "../typer";

export const STAVNING_HAFTEN: HafteKalla[] = [
  {
    id: "stavning-1-dubbelteckning",
    titel: "Glass eller glas?",
    underrubrik: "Dubbelteckning – en eller två konsonanter",
    omrade: "Stavning",
    steg: 1,
    feltyper: ["stavning.dubbelteckning"],
    regel: [
      "Lyssna på vokalen. Är den kort skriver man oftast två konsonanter efter: glass, katt, hoppa.",
      "Är vokalen lång skriver man en konsonant: glas, hus, bil, mat.",
      "Säg ordet högt och lyssna: glaaas (lång) – glass (kort).",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Vi åt {*glass|glas} på stranden.
          Jag dricker ur ett {glass|*glas}.
          Katten {hopar|*hoppar} upp i soffan.
          Min {*mamma|mama} heter Eva.
          Kan du {koma|*komma} hit?
          Han {*kom|komm} hem sent.
          Vi ska {*simma|sima} i sjön.
          Det är {kalt|*kallt} ute idag.
          Sätt på dig {*mössan|mösan}!
          Jag har en {kat|*katt}.
          Solen {*skiner|skinner} idag.
          Vi bor i ett gult {*hus|huss}.
          Vill du {tita|*titta} på film?
          Han {*sitter|siter} på stolen.
          Boken {liger|*ligger} på bordet.
          Det är {*sommar|somar} nu.
          Vi badar i {vatnet|*vattnet}.
          Jag {*tappade|tapade} min penna.
          Det står en {kop|*kopp} på bordet.
          Vi åker {*bil|bill} till skolan.
          Jag tycker om god {matt|*mat}.
          Hon har en röd {*hatt|hat}.
          Han är {tröt|*trött}.
          Min {*pappa|papa} lagar mat.
          Vi {lekker|*leker} på rasten.
          Klockan är {*fem|femm}.
          Vi går {hemm|*hem} nu.
          Hunden {*skäller|skäler} på katten.
          Barnen {roppar|*ropar} på hjälp.
          Vi {*äter|ätter} middag klockan sex.
          Jag har en {pena|*penna} i väskan.
          Den här {*boken|bocken} är spännande.
          Han {van|*vann} matchen.
          Hon {*kan|kann} läsa.
          Bollen {rular|*rullar} iväg.
          Snön är {*vit|vitt}.
          Vi {*packar|pakar} väskan.
          Fisken {simar|*simmar} i sjön.
          Han tog ett {*steg|stegg} fram.
          Vi spelar {bol|*boll} på rasten.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv den bokstav eller de bokstäver som fattas. Står det (p/pp) ska du välja p eller pp.",
        typ: "skriv",
        rader: `
          Vi ska ho{pp}a hopprep. (p/pp)
          Det är ka{ll}t ute. (l/ll)
          Jag åt en gla{ss}. (s/ss)
          Ka{tt}en sover. (t/tt)
          Jag dricker ur en ko{pp}. (p/pp)
          Det är so{mm}ar. (m/mm)
          Vi äter ma{t}. (t/tt)
          Han har en ha{tt}. (t/tt)
          Det bor ett tro{ll} i skogen. (l/ll)
          Boken li{gg}er där. (g/gg)
          Hon si{tt}er still. (t/tt)
          Vi åker bi{l}. (l/ll)
          Han är min vä{n}. (n/nn)
          Vi är vä{nn}er. (n/nn)
          Saften står i en ka{nn}a. (n/nn)
          Jag har en blå pe{nn}a. (n/nn)
          Ta på dig mö{ss}an! (s/ss)
          Ett gla{s} mjölk, tack. (s/ss)
          Under en blå hi{mm}el. (m/mm)
          Ett ga{mm}alt hus. (m/mm)
          Vi går he{m}. (m/mm)
          Jag är he{mm}a. (m/mm)
          Mitt ru{m} är stort. (m/mm)
          Jag går ti{ll} skolan. (l/ll)
          Jag vi{ll} ha glass. (l/ll)
          A{ll}a får vara med. (l/ll)
          Glaset är fu{ll}t. (l/ll)
          En liten mu{s}. (s/ss)
          Dörren är ö{pp}en. (p/pp)
          Det var lä{tt}. (t/tt)
          Vi ska gö{mm}a oss. (m/mm)
          En dro{pp}e vatten. (p/pp)
          En fi{n} dag. (n/nn)
          Pappa dricker ka{ff}e. (f/ff)
          Katten är sö{t}. (t/tt)
          Vi dricker va{tt}en. (t/tt)
          Jag ve{t} inte. (t/tt)
          Ett vitt pa{pp}er. (p/pp)
          Solen ski{n}er. (n/nn)
          Jag ti{tt}ar på tv. (t/tt)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns ett stavfel i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Vi åt glas på stranden. => Vi åt glass på stranden.
          Katen sover i soffan. => Katten sover i soffan.
          Jag vill sima i sjön. => Jag vill simma i sjön.
          Det är kalt ute. => Det är kallt ute.
          Min mama är snäll. => Min mamma är snäll.
          Kan du koma hit? => Kan du komma hit?
          Boken liger på bordet. => Boken ligger på bordet.
          Hon siter på stolen. => Hon sitter på stolen.
          Solen skinner idag. => Solen skiner idag.
          Jag har en röd hat. => Jag har en röd hatt.
          Vi badar i vatnet. => Vi badar i vattnet.
          Det är somar nu. => Det är sommar nu.
          Vi spelar bol på rasten. => Vi spelar boll på rasten.
          Dörren är öpen. => Dörren är öppen.
          Pappa dricker kafe. => Pappa dricker kaffe.
          Det bor ett trol i skogen. => Det bor ett troll i skogen.
          Ala barn får vara med. => Alla barn får vara med.
          Jag vil ha mer glass. => Jag vill ha mer glass.
          Vi åker bill till stan. => Vi åker bil till stan.
          Ett gamalt hus låg vid sjön. => Ett gammalt hus låg vid sjön.
        `,
      },
    ],
  },
  {
    id: "stavning-2-dubbelteckning-m-n",
    titel: "Hem eller hemm?",
    underrubrik: "Dubbelteckning – m och n, och när bokstaven försvinner",
    omrade: "Stavning",
    steg: 3,
    feltyper: ["stavning.dubbelteckning"],
    regel: [
      "Inga ord slutar på mm: hem, rum, kom, som, fem. Men när ordet får en ändelse blir det mm: hemma, rummet, komma.",
      "Småord slutar sällan på nn: man, men, han, hon, vän. Men med ändelse: mannen, vännen.",
      "Verb som glömma, känna och tömma tappar en bokstav före -de: glömde, kände, tömde. Uppmaningen blir också kort: Glöm inte! Kom hit!",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Mitt {*rum|rumm} är litet.
          Vi målade {rumet|*rummet}.
          Vi går {*hem|hemm}.
          Jag är {hema|*hemma}.
          Han {*kom|komm} sent.
          Kan du {koma|*komma} imorgon?
          Det var {*dumt|dummt} gjort.
          Det var det {dumaste|*dummaste} jag hört.
          Jag har {*fem|femm} kronor.
          Han är {somm|*som} sin pappa.
          Min {*vän|vänn} heter Ali.
          Jag ringde till {vänen|*vännen} igår.
          Mina {*vänner|väner} kommer ikväll.
          En {mann|*man} gick förbi.
          {*Mannen|Manen} hade en hatt.
          Barnen {stanade|*stannade} vid vägen.
          Öppna {*munnen|munen}!
          Han har en stor {munn|*mun}.
          Isen är {*tunn|tun}.
          Vi kom {*fram|framm} till skolan.
          Hon är {snäl|*snäll}.
          Hunden är {*snällare|snälare} än katten.
          {Himmlen|*Himlen} är blå.
          Under en blå {*himmel|himel}.
          Vi {*glömde|glömmde} nyckeln.
          Jag {glömer|*glömmer} alltid saker.
          {*Glöm|Glömm} inte mössan!
          Hon {drömmde|*drömde} om sommaren.
          Jag {*drömmer|drömer} ofta.
          Han {*kände|kännde} sig trött.
          Jag {käner|*känner} henne.
          Det {*brann|bran} i skogen.
          Ljuset {briner|*brinner}.
          Han {*vann|van} loppet.
          Jag {viner|*vinner} alltid.
          Hon {*tömde|tömmde} glaset.
          Kan du {töma|*tömma} soporna?
          Vi {*simmade|simade} länge.
          Jag {*minns|mins} inte.
          {*Kom|Komm} hit!
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv m eller mm, n eller nn.",
        typ: "skriv",
        rader: `
          Vi gick he{m}. (m/mm)
          Jag stannar he{mm}a. (m/mm)
          Ett stort ru{m}. (m/mm)
          Städa ru{mm}et! (m/mm)
          Han ko{m} hem. (m/mm)
          Vi ska ko{mm}a. (m/mm)
          Det var du{m}t. (m/mm)
          Klockan är fe{m}. (m/mm)
          Hon är so{m} jag. (m/mm)
          Min vä{n} är snäll. (n/nn)
          Vi är vä{nn}er. (n/nn)
          En ma{n} stod där. (n/nn)
          Ma{nn}en log. (n/nn)
          Öppna mu{nn}en. (n/nn)
          Isen är tu{nn}. (n/nn)
          Vi glö{m}de bort det. (m/mm)
          Glö{m} inte mössan! (m/mm)
          Kä{nn}er du henne? (n/nn)
          Hon kä{n}de sig glad. (n/nn)
          Ljuset bri{nn}er. (n/nn)
          Huset bra{nn} ner. (n/nn)
          Vi vi{nn}er! (n/nn)
          Vi va{nn} matchen. (n/nn)
          Han drö{m}de. (m/mm)
          Jag drö{mm}er. (m/mm)
          Tö{m} papperskorgen! (m/mm)
          Hon tö{m}de glaset. (m/mm)
          Vi si{mm}ade. (m/mm)
          Si{m} fort! (m/mm)
          Jag mi{nn}s det. (n/nn)
          Ko{m} hit! (m/mm)
          Hi{m}len är grå. (m/mm)
          En blå hi{mm}el. (m/mm)
          Ha{n} är snäll. (n/nn)
          Ho{n} läser. (n/nn)
          Me{n} varför? (n/nn)
          Ma{nn}en och kvi{nn}an pratar. (n/nn)
          Skär tu{nn}a skivor. (n/nn)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns ett stavfel i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Vi gick hemm efter skolan. => Vi gick hem efter skolan.
          Mitt rumm är blått. => Mitt rum är blått.
          Jag städade rumet. => Jag städade rummet.
          Hon är hema idag. => Hon är hemma idag.
          Han komm för sent. => Han kom för sent.
          Glömm inte nyckeln! => Glöm inte nyckeln!
          Hon glömmde boken. => Hon glömde boken.
          Jag kännde mig trött. => Jag kände mig trött.
          Min vänn heter Sara. => Min vän heter Sara.
          Vi är bästa väner. => Vi är bästa vänner.
          Manen hade en röd mössa. => Mannen hade en röd mössa.
          Isen är för tun. => Isen är för tunn.
          Ljuset briner på bordet. => Ljuset brinner på bordet.
          Vårt lag van matchen. => Vårt lag vann matchen.
          Han drömmde om sommaren. => Han drömde om sommaren.
          Jag mins inte hans namn. => Jag minns inte hans namn.
          Komm hit och titta! => Kom hit och titta!
          Hon tömmde glaset. => Hon tömde glaset.
          Öppna munen! => Öppna munnen!
          Himmlen var mörk. => Himlen var mörk.
          Jag käner igen dig. => Jag känner igen dig.
        `,
      },
    ],
  },
  {
    id: "stavning-3-sj-ljud",
    titel: "Sjö, skjorta, stjärna",
    underrubrik: "Sj-ljudet",
    omrade: "Stavning",
    steg: 2,
    feltyper: ["stavning.ljud"],
    regel: [
      "Sj-ljudet kan stavas på många sätt: sj (sjö), skj (skjorta), stj (stjärna), sk före e, i, y, ä, ö (sked, skina, skön), sch (schampo), ch (choklad) och ti/si i -tion/-sion (station).",
      "Det finns ingen regel för alla ord – lär dig de vanligaste orden utantill.",
      "Skj och stj finns bara i några få ord: skjorta, skjuta, skjuts, stjärna, stjäla, stjärt.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Vi badar i {*sjön|skjön|chön}.
          Jag har en blå {sjorta|*skjorta|chorta}.
          På himlen lyser en {sjärna|skjärna|*stjärna}.
          Jag tvättar håret med {*schampo|sjampo|champo}.
          Vi äter soppa med en {sjed|*sked|schked}.
          Solen {sjiner|chiner|*skiner}.
          Pappa är {*sjuk|skjuk|schuk} idag.
          Vi spelar {sjack|*schack|skack}.
          Jag älskar {sjoklad|schoklad|*choklad}.
          Bussen stannar vid {*stationen|stasjonen|staschonen}.
          Vi har {leksjon|*lektion|lekschon} i svenska.
          Hon {skjunger|*sjunger|chunger} i kör.
          Klockan är {skju|schu|*sju}.
          Han {*skjuter|sjuter|schuter} bollen i mål.
          Mamma är {schef|*chef|sjef} på jobbet.
          Vi åkte {sjidor|chidor|*skidor}.
          En {*sköldpadda|sjöldpadda|chöldpadda} går långsamt.
          Det är {sjönt|*skönt|schönt} att vila.
          Vi tittar på en {sjärm|chärm|*skärm}.
          Får jag {*skära|sjära|chära} brödet?
          Tjuven försökte {själa|*stjäla|skjäla} cykeln.
          Hon har en röd {schal|skjal|*sjal}.
          Det ligger ett {*sjukhus|skjukhus|chukhus} i stan.
          Vi läser {sjemat|*schemat|chemat}.
          Han är {skjutton|*sjutton|chutton} år.
          Kan du ge mig {sjuts|schuts|*skjuts} till träningen?
          Ett {*skepp|sjepp|chepp} seglar förbi.
          Vi {sjickar|*skickar|chickar} ett brev.
          Jag fick {informasjon|*information|informaschon} om resan.
          Jag {*skäms|sjäms|chäms} lite.
          Hunden viftar på {sjärten|skjärten|*stjärten}.
          Vi {*sjöng|skjöng|chöng} en sång.
          Bilen står i {garasjet|*garaget|garachet}.
          Vi bor på {*sjunde|skjunde|chunde} våningen.
          Hon är {skjuksköterska|*sjuksköterska|chuksköterska}.
          Jag tar en {dush|dusj|*dusch}.
          Det var en svår {*situation|situasjon|situaschon}.
          Vi kan {sjutsa|*skjutsa|chutsa} dig hem.
          På stranden låg en {*sjöstjärna|skjöstjärna|sjösjärna}.
          {Skjörövaren|*Sjörövaren|Chörövaren} hade en papegoja.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv det som fattas: sj, skj, stj, sk, sch, ch eller ti.",
        typ: "skriv",
        rader: `
          Klockan är {sj}u.
          Vi ska {sj}unga.
          Han har en vit {skj}orta.
          En {stj}ärna lyser.
          Solen {sk}iner.
          Jag behöver {sch}ampo.
          Vi åt {ch}oklad.
          Ge mig en {sk}ed.
          Vi åker {sk}idor.
          Det fanns en {sj}östjärna på stranden.
          Hon är {sj}uk.
          Kan du {skj}uta bollen?
          Någon försökte {stj}äla min cykel.
          Hon är {ch}ef.
          Tåget står på sta{ti}onen.
          Vi har lek{ti}on nu.
          Vi spelar {sch}ack.
          Kan du {sk}ära brödet?
          Det är {sk}önt att sova.
          Jag tittar på en {sk}ärm.
          Hon har en {sj}al.
          Jag tar en du{sch}.
          Vi läser {sch}emat.
          Morfar ligger på {sj}ukhus.
          Ett {sk}epp seglar förbi.
          Jag {sk}äms.
          Vi {sj}öng tillsammans.
          Han bor på {sj}unde våningen.
          Vi {sk}ickar ett vykort.
          Pappa {skj}utsar mig.
          Katten har en lång {stj}ärt.
          En {sk}öldpadda går långsamt.
          Vi fick mer informa{ti}on.
          Det var en konstig situa{ti}on.
          Jag kom på {sj}ätte plats.
          Jag kan göra det {sj}älv.
          Hon fick en {ch}ock.
          Det fanns inga moln på {sk}yn.
          Vi åker till {sj}ön.
          Det blev en stor sensa{ti}on.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns ett stavfel i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Vi badade i schön. => Vi badade i sjön.
          Han har en blå sjorta. => Han har en blå skjorta.
          Vi såg en sjärna. => Vi såg en stjärna.
          Jag åt sjoklad. => Jag åt choklad.
          Solen sjiner idag. => Solen skiner idag.
          Hon är skjuk idag. => Hon är sjuk idag.
          Vi har leksjon nu. => Vi har lektion nu.
          Jag tvättar håret med sjampo. => Jag tvättar håret med schampo.
          Vi spelade sjack. => Vi spelade schack.
          Bussen står på stasjonen. => Bussen står på stationen.
          Vi åkte sjidor i fjällen. => Vi åkte skidor i fjällen.
          Han sjöt bollen i mål. => Han sköt bollen i mål.
          Jag tar en dusj. => Jag tar en dusch.
          Hon har en röd schal. => Hon har en röd sjal.
          Pappa sjutsar mig till träningen. => Pappa skjutsar mig till träningen.
          Hon är sjef på företaget. => Hon är chef på företaget.
          Vi läste sjemat. => Vi läste schemat.
          Det är sjönt att vila. => Det är skönt att vila.
          Vi sjickade ett brev. => Vi skickade ett brev.
          Klockan är schu. => Klockan är sju.
        `,
      },
    ],
  },
  {
    id: "stavning-4-tj-och-j-ljud",
    titel: "Kjol, tjugo, gjorde, hjärta",
    underrubrik: "Tj-ljudet och j-ljudet",
    omrade: "Stavning",
    steg: 2,
    feltyper: ["stavning.ljud"],
    regel: [
      "Tj-ljudet stavas tj (tjugo), kj (kjol) eller k före e, i, y, ä, ö (kind, kök, kär).",
      "J-ljudet stavas oftast j (ja), men också g (göra, ge), gj (gjorde), hj (hjärta), lj (ljus) och dj (djur).",
      "Hj, lj, dj och gj finns bara i början av ord: hjälpa, ljud, djup, gjorde.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Jag fyller {*tjugo|kjugo|chugo} år.
          Hon har en röd {tjol|*kjol|chol}.
          Katten är {*tjock|kjock|schock}.
          Vi sjunger i en {tjör|*kör|kjör}.
          Jag {tjänner|*känner|kjänner} honom.
          Han pussade henne på {*kinden|tjinden|kjinden}.
          Vi lagar mat i {tjöket|kjöket|*köket}.
          Han är {*kär|tjär|kjär} i henne.
          En {*tjuv|kjuv|chuv} tog väskan.
          Jag {tjöpte|kjöpte|*köpte} en bok.
          Vi tittade i {tjikaren|*kikaren|kjikaren}.
          Hon är en glad {*tjej|kjej|chej}.
          Det är {*tjugoett|kjugoett|chugoett} grader varmt.
          Vi köpte ett {*kilo|tjilo|kjilo} mjöl.
          Mamma {tjör|kjör|*kör} bil.
          Jag vill {*göra|jöra|gjöra} läxan.
          Hon {jorde|*gjorde|hjorde} det själv.
          Kan du {*ge|je|gje} mig pennan?
          Mitt {järta|gjärta|*hjärta} slår fort.
          Kan du {*hjälpa|jälpa|gjälpa} mig?
          Han är en {jälte|*hjälte|gjälte}.
          Tänd ett {*ljus|jus|hjus}.
          Vi hörde ett konstigt {jud|hjud|*ljud}.
          Vi gick till {jurparken|gjurparken|*djurparken}.
          Sjön är {jup|*djup|gjup}.
          Bilen har fyra {*hjul|jul|ljul}.
          Vi firar {*jul|hjul|gjul} i december.
          Jag hjälper {*gärna|järna|hjärna} till.
          Hon har en snabb {järna|*hjärna|gjärna}.
          Jag {*ljuger|juger|hjuger} aldrig.
          Vi har en {*gäst|jäst|hjäst} hemma.
          Han {*gäspar|jäspar|hjäspar} för att han är trött.
          En {jort|*hjort|gjort} sprang över vägen.
          Det har jag redan {jort|hjort|*gjort}.
          Vi {*gömde|jömde|hjömde} oss bakom stenen.
          Det är {*ljust|just|hjust} ute på kvällen.
          Han {*gick|jick|gjick} hem.
          Hunden {*jagar|gjagar|hjagar} katten.
          En {*hjälm|jälm|gjälm} skyddar huvudet.
          Vi såg en {*jättestor|gjättestor|hjättestor} ballong.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv det som fattas: tj, kj, k, j, g, gj, hj, lj eller dj.",
        typ: "skriv",
        rader: `
          Jag har {tj}ugo kronor.
          Hon har en lång {kj}ol.
          Vi lagar mat i {k}öket.
          En {tj}uv stal cykeln.
          Jag ska {k}öpa mjölk.
          Hon är en snäll {tj}ej.
          Han rodnade på {k}inderna.
          De är {k}ära i varandra.
          Boken är {tj}ock.
          Ett {k}ilo äpplen, tack.
          Vad ska vi {g}öra nu?
          Vem {gj}orde det här?
          Kan du {g}e mig vattnet?
          Mitt {hj}ärta slår.
          Kan du {hj}älpa mig?
          Hon är en {hj}älte.
          Tänd ett {lj}us.
          Jag hörde ett {lj}ud.
          Vilket {dj}ur är snabbast?
          Vattnet är {dj}upt.
          Cykeln har två {hj}ul.
          God {j}ul!
          Jag vill {g}ärna komma.
          Tänk med {hj}ärnan.
          Han {lj}uger inte.
          Vi har en {g}äst.
          Hon {g}äspar stort.
          En {hj}ort i skogen.
          Det har jag {gj}ort.
          Vi {g}ömde nyckeln.
          Hon {g}ick till skolan.
          Katten {j}agar en mus.
          Ta på dig {hj}älmen!
          Det var en {j}ättestor hund.
          Han har en {lj}usblå tröja.
          Svaret är {j}a.
          Vi har {g}ympa idag.
          Han är {tj}ugofem år.
          Vi {k}ör till stan.
          Det är {lj}ust ute.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns ett stavfel i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Hon har en ny tjol. => Hon har en ny kjol.
          Jag är kjugo år. => Jag är tjugo år.
          Vi är i tjöket. => Vi är i köket.
          En kjuv tog min väska. => En tjuv tog min väska.
          Jag jorde läxan. => Jag gjorde läxan.
          Kan du jälpa mig? => Kan du hjälpa mig?
          Mitt järta slår fort. => Mitt hjärta slår fort.
          Vi hörde ett jud. => Vi hörde ett ljud.
          Han tände ett jus. => Han tände ett ljus.
          Sjön är jup. => Sjön är djup.
          Vi såg många jur. => Vi såg många djur.
          Bilen har fyra jul. => Bilen har fyra hjul.
          Jag vill jöra det. => Jag vill göra det.
          Kan du je mig boken? => Kan du ge mig boken?
          Han är en riktig jälte. => Han är en riktig hjälte.
          Jag juger aldrig. => Jag ljuger aldrig.
          Vi har en jäst hemma. => Vi har en gäst hemma.
          Jag tjöpte en glass. => Jag köpte en glass.
          Hon är en glad kjej. => Hon är en glad tjej.
          En jort sprang över vägen. => En hjort sprang över vägen.
        `,
      },
    ],
  },
  {
    id: "stavning-5-sarskrivning",
    titel: "Fotbollsmatch – inte fotbolls match",
    underrubrik: "Sammansatta ord skrivs ihop",
    omrade: "Stavning",
    steg: 2,
    feltyper: ["stavning.sarskrivning"],
    regel: [
      "Ord som består av två eller flera ord skrivs ihop: fotboll, skolgård, jättebra.",
      "Om man delar ordet kan betydelsen ändras: en kycklinglever (lever av kyckling) – en kyckling lever (kycklingen är vid liv).",
      "Ibland kommer ett s mellan delarna: fotbollsmatch, vardagsrum, kvällsmat.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det som är rätt skrivet.",
        typ: "val",
        rader: `
          Vi såg en {*fotbollsmatch|fotbolls match}.
          Vi leker på {skol gården|*skolgården}.
          Jag glömde mina {*solglasögon|sol glasögon}.
          Jag fick en {jul klapp|*julklapp}.
          Mjölken står i {*kylskåpet|kyl skåpet}.
          Där kommer {glass bilen|*glassbilen}!
          Var är min {*tandborste|tand borste}?
          Jag packar {skol väskan|*skolväskan}.
          Katten äter {*kattmat|katt mat}.
          Hunden sover i {hund kojan|*hundkojan}.
          Jag skriver i min {*dagbok|dag bok}.
          Ta på dig {regn jackan|*regnjackan}.
          Vi byggde en {*snögubbe|snö gubbe}.
          Det var {jätte roligt|*jätteroligt}.
          Filmen var {*superbra|super bra}.
          Vi går till {lek parken|*lekparken}.
          Böckerna står i {*bokhyllan|bok hyllan}.
          Mormor bakade {äpple paj|*äppelpaj}.
          Jag köpte en {*chokladkaka|choklad kaka}.
          Vi äter i {mat salen|*matsalen}.
          En {*brandbil|brand bil} körde förbi.
          Morfar ligger på {sjuk huset|*sjukhuset}.
          Torka dig med {*handduken|hand duken}.
          Jag spelar {dator spel|*datorspel}.
          Tvätta händerna i {*badrummet|bad rummet}.
          Jag sover i mitt {sov rum|*sovrum}.
          Vi tittar på tv i {*vardagsrummet|vardags rummet}.
          Grattis på {födelse dagen|*födelsedagen}!
          Vi tränar på {*fotbollsplanen|fotbolls planen}.
          Vi har gympa i {idrotts hallen|*idrottshallen}.
          Vad blir det till {*kvällsmat|kvälls mat}?
          Nu är det {sommar lov|*sommarlov}!
          Vi bakar {*pepparkakor|peppar kakor}.
          Jag vill ha en {glass strut|*glasstrut}.
          Jag tappade {*nyckelknippan|nyckel knippan}.
          Jag ska gå till {tand läkaren|*tandläkaren}.
          Vi åkte {*skolbuss|skol buss} till badhuset.
          Vi gick på {bad huset|*badhuset}.
          Vi åt {*pannkakor|pann kakor} till lunch.
          Jag sover i en {sov säck|*sovsäck}.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Sätt ihop orden till ett ord. Tänk på att det ibland behövs ett s mellan delarna.",
        typ: "skriv",
        rader: `
          fot + boll = {fotboll}
          skola + gård = {skolgård}
          sol + glasögon = {solglasögon}
          jul + klapp = {julklapp}
          kyl + skåp = {kylskåp}
          glass + bil = {glassbil}
          tand + borste = {tandborste}
          skola + väska = {skolväska}
          katt + mat = {kattmat}
          hund + koja = {hundkoja}
          dag + bok = {dagbok}
          regn + jacka = {regnjacka}
          snö + gubbe = {snögubbe}
          jätte + rolig = {jätterolig}
          lek + park = {lekpark}
          bok + hylla = {bokhylla}
          choklad + kaka = {chokladkaka}
          mat + sal = {matsal}
          brand + bil = {brandbil}
          sjuk + hus = {sjukhus}
          hand + duk = {handduk}
          dator + spel = {datorspel}
          bad + rum = {badrum}
          sova + rum = {sovrum}
          vardag + rum = {vardagsrum}
          födelse + dag = {födelsedag}
          fotboll + match = {fotbollsmatch}
          idrott + hall = {idrottshall}
          kväll + mat = {kvällsmat}
          sommar + lov = {sommarlov}
          jul + lov = {jullov}
          peppar + kaka = {pepparkaka}
          nyckel + knippa = {nyckelknippa}
          ägg + kopp = {äggkopp}
          tand + läkare = {tandläkare}
          skola + buss = {skolbuss}
          bad + hus = {badhus}
          super + snabb = {supersnabb}
          fönster + bräda = {fönsterbräda}
          hem + väg = {hemväg}
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns en särskrivning i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Vi såg en fotbolls match. => Vi såg en fotbollsmatch.
          Det var jätte roligt. => Det var jätteroligt.
          Vi leker på skol gården. => Vi leker på skolgården.
          Jag fick en jul klapp. => Jag fick en julklapp.
          Var är min tand borste? => Var är min tandborste?
          Mjölken står i kyl skåpet. => Mjölken står i kylskåpet.
          Vi byggde en snö gubbe. => Vi byggde en snögubbe.
          Filmen var super bra. => Filmen var superbra.
          Vi äter i mat salen. => Vi äter i matsalen.
          Jag spelar dator spel. => Jag spelar datorspel.
          Grattis på födelse dagen! => Grattis på födelsedagen!
          Nu är det sommar lov! => Nu är det sommarlov!
          Vi bakade peppar kakor. => Vi bakade pepparkakor.
          Böckerna står i bok hyllan. => Böckerna står i bokhyllan.
          Jag tappade min nyckel knippa. => Jag tappade min nyckelknippa.
          Vi gick till lek parken. => Vi gick till lekparken.
          Hunden sover i hund kojan. => Hunden sover i hundkojan.
          Vi åkte skol buss. => Vi åkte skolbuss.
          Jag ska till tand läkaren. => Jag ska till tandläkaren.
          Vi tittar på tv i vardags rummet. => Vi tittar på tv i vardagsrummet.
        `,
      },
    ],
  },
  {
    id: "stavning-6-stor-bokstav",
    titel: "Stor eller liten bokstav?",
    underrubrik: "Versaler och gemener – meningens början, namn, dagar och språk",
    omrade: "Stavning",
    steg: 1,
    feltyper: ["stavning.stor-bokstav"],
    regel: [
      "Stor bokstav kallas versal (A), liten bokstav kallas gemen (a).",
      "Stor bokstav i början av en mening.",
      "Stor bokstav på namn: personer (Sara), djur (Måns), platser (Malmö), länder (Norge) och gator (Storgatan).",
      "Liten bokstav på veckodagar (måndag), månader (maj), högtider (jul) och språk (svenska, engelska).",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det som är rätt skrivet.",
        typ: "val",
        rader: `
          Min kompis heter {*Ali|ali}.
          Vi bor i {göteborg|*Göteborg}.
          Idag är det {*måndag|Måndag}.
          Jag fyller år i {Juni|*juni}.
          Vi firar {*jul|Jul} hemma.
          Hon pratar {Engelska|*engelska}.
          Vi åkte till {*Spanien|spanien}.
          Min katt heter {måns|*Måns}.
          På {*fredag|Fredag} har vi gympa.
          Vi läser {Svenska|*svenska} på morgonen.
          Jag bor på {*Storgatan|storgatan} 5.
          Han kommer från {norge|*Norge}.
          Skolan slutar i {*juni|Juni}.
          Vi åker till {*Skåne|skåne} i sommar.
          Min mormor heter {*Ingrid|ingrid}.
          {*Igår|igår} regnade det.
          Hon är född i {Mars|*mars}.
          Vi har {*påsklov|Påsklov} i april.
          Jag kan prata {Arabiska|*arabiska}.
          Floden {*Göta älv|göta älv} rinner genom stan.
          Vi bor i {sverige|*Sverige}.
          Vår hund heter {*Ludde|ludde}.
          På {Lördag|*lördag} ska vi bada.
          {*Det|det} var en gång en drake.
          Vi läste en bok av {*Astrid Lindgren|astrid lindgren}.
          Han heter {Erik larsson|*Erik Larsson}.
          Vi ska till {*London|london}.
          I {December|*december} snöar det.
          {*Hon|hon} springer fort.
          Jag gillar {*midsommar|Midsommar}.
          Vi bor nära {vättern|*Vättern}.
          Mitt favoritlag är {*Hammarby|hammarby}.
          Läraren heter {*Anna|anna}.
          Vi åkte tåg till {*Kiruna|kiruna}.
          Jag föddes en {Tisdag|*tisdag}.
          Han talar {*finska|Finska} med sin pappa.
          Min bror bor i {*Umeå|umeå}.
          Vi firar {Nyår|*nyår} med raketer.
          {*Varför|varför} är himlen blå?
          Vi tittade på {*Eiffeltornet|eiffeltornet}.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Välj stor eller liten bokstav i början av ordet.",
        typ: "val",
        rader: `
          {*A|a}lla barn får vara med.
          Vi åkte till {*D|d}anmark.
          Imorgon är det {T|*t}orsdag.
          Jag heter {*S|s}ofia.
          Vi har {E|*e}ngelska på tisdagar.
          Han bor i {*L|l}uleå.
          Vi firade {J|*j}ul hos mormor.
          {*N|n}är kommer bussen?
          Vi badar i {*M|m}älaren.
          Det snöade i {J|*j}anuari.
          Vår katt heter {*S|s}igge.
          Vi var i {*I|i}talien i somras.
          Jag pratar {S|*s}panska.
          Min lärare heter {*J|j}ohan.
          Vi går på {*D|d}rottninggatan.
          Det är {S|*s}öndag idag.
          {*V|v}i åt pizza.
          Han kommer från {*S|s}omalia.
          I {A|*a}ugusti börjar skolan.
          Vi firar {M|*m}idsommar i juni.
          Jag har en vän som heter {*K|k}im.
          Vi bor i {*F|f}alun.
          De pratar {T|*t}yska.
          Jag läser om {*Z|z}latan.
          Vi åker till {*F|f}rankrike.
          {*M|m}in hund är brun.
          Det regnade hela {O|*o}nsdagen.
          Vi var på {*S|s}kansen.
          Mamma kommer från {*P|p}olen.
          Vi läser {S|*s}venska.
          Min farfar heter {*G|g}östa.
          Vi åkte till {*T|t}yskland.
          Det är {P|*p}åsk snart.
          {*H|h}ar du sett min katt?
          Mitt lag heter {*D|d}jurgården.
          Vi har prov på {M|*m}åndag.
          Vi seglade till {*G|g}otland.
          Han är född i {J|*j}uli.
          Min kusin bor i {*K|k}anada.
          De pratar {N|*n}orska hemma.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Det finns ett fel med stor eller liten bokstav i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          vi åkte till skolan. => Vi åkte till skolan.
          Min kompis heter sara. => Min kompis heter Sara.
          Vi bor i malmö. => Vi bor i Malmö.
          Idag är det Måndag. => Idag är det måndag.
          Jag fyller år i Maj. => Jag fyller år i maj.
          Hon pratar Engelska. => Hon pratar engelska.
          Vi åkte till norge. => Vi åkte till Norge.
          Vi firar Jul hemma. => Vi firar jul hemma.
          Min hund heter bamse. => Min hund heter Bamse.
          På Fredag har vi idrott. => På fredag har vi idrott.
          hunden skällde högt. => Hunden skällde högt.
          Vi läser Svenska nu. => Vi läser svenska nu.
          Han bor i sverige. => Han bor i Sverige.
          Jag föddes i Oktober. => Jag föddes i oktober.
          Vi åker till london. => Vi åker till London.
          Mormor heter karin. => Mormor heter Karin.
          Vi badade i vättern. => Vi badade i Vättern.
          Det snöar i December. => Det snöar i december.
          var är min mössa? => Var är min mössa?
          Vi firar Midsommar på landet. => Vi firar midsommar på landet.
        `,
      },
    ],
  },
  {
    id: "stavning-7-versaler-gemener",
    titel: "Versal eller gemen?",
    underrubrik: "Svårare fall: titlar, organisationer, platser och förkortningar",
    omrade: "Stavning",
    steg: 3,
    feltyper: ["stavning.stor-bokstav"],
    regel: [
      "Versal (stor bokstav) på egennamn: personer, platser, länder, hav, gator, företag och organisationer: Atlanten, Kungsgatan, Röda korset.",
      "Gemen (liten bokstav) på titlar framför namn (kung Carl Gustaf, doktor Lund), invånare och nationaliteter (svensk, norrman), högtider (jul, nationaldagen), historiska perioder (medeltiden) och väderstreck (södra Sverige).",
      "Riksdagen och regeringen skrivs med gemen. Bok- och filmtitlar får versal bara på första ordet och på namn: Ronja rövardotter.",
      "Förkortningar av namn skrivs ofta med versaler (FN, EU, USA). Vanliga förkortningar skrivs med gemener (t.ex., bl.a.).",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det som är rätt skrivet.",
        typ: "val",
        rader: `
          Vi seglade över {*Atlanten|atlanten}.
          Hon är {Svensk|*svensk} men bor i Norge.
          Han är {Norrman|*norrman}.
          {Kung|*kung} Carl Gustaf höll ett tal.
          Det beslutade {Riksdagen|*riksdagen} igår.
          Vi läste {*Ronja rövardotter|Ronja Rövardotter}.
          Jag läser {*Bröderna Lejonhjärta|Bröderna lejonhjärta}.
          Hon jobbar på {*Röda korset|Röda Korset}.
          Vi bor i {Södra|*södra} Sverige.
          Han kommer från {*Sydamerika|sydamerika}.
          På {Medeltiden|*medeltiden} byggdes många borgar.
          Vi firar {Nationaldagen|*nationaldagen} den 6 juni.
          Sverige är med i {*EU|Eu|eu}.
          Vi badade i {*Medelhavet|medelhavet}.
          Hon är {Göteborgare|*göteborgare}.
          Pappa kör en {Volvo|*volvo}.
          Pappa jobbar på {*Volvo|volvo}.
          {Doktor|*doktor} Lund undersökte mig.
          Vi läste om {Andra världskriget|*andra världskriget}.
          De bor i {Norra|*norra} Norrland.
          Min mormor bor i {*Norrland|norrland}.
          Vi åkte till {*USA|Usa|usa}.
          Vi tog med oss frukt, {T.ex.|*t.ex.} äpplen.
          {*FN|Fn|fn} arbetar för fred.
          Vi såg filmen {*Sagan om ringen|Sagan Om Ringen}.
          Vi tittade på {*SVT|Svt|svt}.
          Många {Muslimer|*muslimer} firar ramadan.
          Han tror på {*Gud|gud}.
          Jag gillar {Engelsk|*engelsk} musik.
          {*Östersjön|östersjön} är ett innanhav.
          Vi besökte {*Vasamuseet|vasamuseet}.
          Vår {Statsminister|*statsminister} höll presskonferens.
          {Påven|*påven} bor i Vatikanen.
          Vi läser {Kristendom|*kristendom} och islam i religion.
          Hon bor på {*Drottninggatan|drottninggatan}.
          Hon jobbar på {*Apple|apple}.
          Tomten bor på {*Nordpolen|nordpolen}.
          Han talar {*arabiska|Arabiska} och {*svenska|Svenska}.
          Vi gick på {*Liseberg|liseberg}.
          Jag läste {*Harry Potter och de vises sten|Harry Potter Och De Vises Sten}.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Det finns ett fel med versal eller gemen i varje mening. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Vi seglade över atlanten. => Vi seglade över Atlanten.
          Han är Svensk. => Han är svensk.
          Vi träffade Kung Carl Gustaf. => Vi träffade kung Carl Gustaf.
          Hon bor i Södra Sverige. => Hon bor i södra Sverige.
          Vi läste Ronja Rövardotter. => Vi läste Ronja rövardotter.
          Jag är med i röda korset. => Jag är med i Röda korset.
          På Medeltiden fanns riddare. => På medeltiden fanns riddare.
          Vi firar Nationaldagen i juni. => Vi firar nationaldagen i juni.
          Sverige är med i Eu. => Sverige är med i EU.
          Vi badade i medelhavet. => Vi badade i Medelhavet.
          Hon är Göteborgare. => Hon är göteborgare.
          Mamma kör en Volvo. => Mamma kör en volvo.
          Jag gick till Doktor Lund. => Jag gick till doktor Lund.
          Andra Världskriget slutade 1945. => Andra världskriget slutade 1945.
          Vi åkte till usa. => Vi åkte till USA.
          Vi tog med frukt, T.ex. äpplen. => Vi tog med frukt, t.ex. äpplen.
          Fn arbetar för fred. => FN arbetar för fred.
          Vi tittade på Sagan Om Ringen. => Vi tittade på Sagan om ringen.
          Vi läser om Islam. => Vi läser om islam.
          Hon talar Engelska hemma. => Hon talar engelska hemma.
          Vi besökte vasamuseet. => Vi besökte Vasamuseet.
          Det beslutade Riksdagen. => Det beslutade riksdagen.
          Vår Statsminister talade. => Vår statsminister talade.
          Vi gick på liseberg. => Vi gick på Liseberg.
          Min kusin är Norrman. => Min kusin är norrman.
          Hon bor i norrland. => Hon bor i Norrland.
          Vi firar Påsk i april. => Vi firar påsk i april.
          Östersjön ligger öster om sverige. => Östersjön ligger öster om Sverige.
          Jag tittar på svt. => Jag tittar på SVT.
          Han är Muslim. => Han är muslim.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Välj det som är rätt skrivet.",
        typ: "val",
        rader: `
          Vi bor i {*Europa|europa}.
          Hon är {Europé|*europé}.
          Vi flög till {*Thailand|thailand}.
          Han är {Thailändare|*thailändare}.
          Vi såg {Prinsessan|*prinsessan} Estelle.
          Vi firar {Midsommarafton|*midsommarafton}.
          Vi läste om {Vikingatiden|*vikingatiden}.
          Hon studerar vid {*Lunds universitet|Lunds Universitet}.
          Vi åkte till {*Mallorca|mallorca}.
          Han är {Dansk|*dansk} medborgare.
          Vi tittade på {*Melodifestivalen|melodifestivalen}.
          Vi läste {*Pippi Långstrump|Pippi långstrump}.
          Vi är lediga på {Allhelgonahelgen|*allhelgonahelgen}.
          Han är {Kristen|*kristen}.
          Vi bor nära {*Mälaren|mälaren}.
          Hon kommer från {*Mellanöstern|mellanöstern}.
          Han var {President|*president} i USA.
          Prästen läste ur {*Bibeln|bibeln}.
          Vi har {Fysik|*fysik} på tisdagar.
          Vi gick förbi {*Stockholms slott|Stockholms Slott}.
          Hon fick {Nobelpriset|*nobelpriset} i litteratur.
          Vi åkte karusell på {*Gröna Lund|Gröna lund}.
          Vi läser om {Hinduism|*hinduism}.
          Han är {Stockholmare|*stockholmare}.
          De bor i {*Stockholms län|Stockholms Län}.
          Vi åkte med {*SJ|Sj|sj}.
          Sverige ligger i {*Skandinavien|skandinavien}.
          Han är {Skandinav|*skandinav}.
          Barn har rättigheter enligt {Barnkonventionen|*barnkonventionen}.
          Vi flög till {*Kanarieöarna|kanarieöarna}.
        `,
      },
    ],
  },
];
