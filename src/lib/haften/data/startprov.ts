import type { HafteKalla } from "../typer";

/**
 * Startprov – en kartläggning i början av varje stadium (50 minuter).
 *
 * Proven följer Skolverkets förslag till ny kursplan i svenska för den tioåriga
 * grundskolan (remiss november 2026), där stadierna är åk 1, åk 2, åk 3–4,
 * åk 5–7 och åk 8–10. Varje prov prövar det som eleverna ska ha lärt sig under
 * stadiet före. Varje del motsvarar ett område i grammatikboken, så att läraren
 * ser vad varje elev behöver repetera.
 */
export const STARTPROV: HafteKalla[] = [
  {
    id: "startprov-ak3",
    titel: "Startprov – början av årskurs 3",
    underrubrik: "Det du har lärt dig i årskurs 1 och 2 · 50 minuter",
    omrade: "Startprov",
    steg: 1,
    feltyper: ["stavning.dubbelteckning", "stavning.ljud", "stavning.stor-bokstav", "skiljetecken.punkt", "grammatik.ordfoljd"],
    regel: [
      "Provet tar 50 minuter. Varje rätt svar ger 1 poäng.",
      "Provet visar vad du redan kan och vad vi ska öva mer på. Gör så gott du kan.",
      "Läs instruktionen före varje del. Läs igenom dina svar när du är klar.",
    ],
    delar: [
      {
        rubrik: "Del 1: Alfabetet",
        instruktion: "Välj rätt bokstav.",
        typ: "val",
        rader: `
          Vilken bokstav kommer efter D? {C|*E|F}
          Vilken bokstav kommer före K? {L|*J|M}
          Vilken bokstav kommer efter R? {*S|Q|T}
          Vilka tre bokstäver kommer sist i alfabetet? {*å, ä, ö|x, y, z|ä, ö, å}
        `,
      },
      {
        rubrik: "Del 2: Vokaler och konsonanter",
        instruktion: "Vokalerna är a, e, i, o, u, y, å, ä och ö. Alla andra bokstäver är konsonanter. Välj rätt svar.",
        typ: "val",
        rader: `
          Vilken bokstav är en vokal? {s|*o|t}
          Vilken bokstav är en konsonant? {*m|e|ä}
          Ordet "orm" börjar med en {*vokal|konsonant}.
          I vilket ord är vokalen lång? {katt|*tak|tack}
          I vilket ord är vokalen kort? {*boll|bok|sol}
        `,
      },
      {
        rubrik: "Del 3: Två lika bokstäver",
        instruktion: "Efter en kort vokal skriver man ofta två lika konsonanter: katt, boll. Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Vi har en {*katt|kat} som heter Sigge.
          Jag sparkar på {bolen|*bollen}.
          Det är {*varmt|varrmt} ute i dag.
          Hon {*hoppar|hopar} hopprep.
          Vi {*tittar|titar} på en film.
          Mamma {*sitter|siter} på bänken.
        `,
      },
      {
        rubrik: "Del 4: Ord som inte stavas som de låter",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Hon {*är|e} sju år.
          {Va|*Vad} heter din hund?
          Jag tycker om sol {*och|å} bad.
          Katten {såver|*sover} i soffan.
          {*Jag|Ja} har en blå cykel.
        `,
      },
      {
        rubrik: "Del 5: Stor bokstav och punkt",
        instruktion: "Skriv meningen rätt. Tänk på stor bokstav i början av meningen och i namn, och tecken i slutet.",
        typ: "ratta",
        rader: `
          lisa bor i umeå => Lisa bor i Umeå.
          min bror heter adam => Min bror heter Adam.
          i dag ska vi bada => I dag ska vi bada.
          vill du leka med mig => Vill du leka med mig?
        `,
      },
      {
        rubrik: "Del 6: Vilket tecken?",
        instruktion: "Välj det tecken som ska stå sist i meningen.",
        typ: "val",
        rader: `
          Hur gammal är du{.|*?|!}
          Vi bor i ett gult hus{*.|?|!}
          Var bor du{.|*?|!}
        `,
      },
      {
        rubrik: "Del 7: Ordföljd",
        instruktion: "Vilken mening har rätt ordföljd?",
        typ: "val",
        rader: `
          {*Jag har en hund.|Har en hund jag.|Hund jag har en.}
          {Spelar fotboll vi.|*Vi spelar fotboll.|Fotboll vi spelar.}
          {Leker parken i barnen.|Parken barnen leker i.|*Barnen leker i parken.}
        `,
      },
      {
        rubrik: "Del 8: Dela och bygga ord",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vilka två ord är "snögubbe" byggt av? {*snö + gubbe|snög + ubbe|sn + ögubbe}
          Vilka två ord är "fotboll" byggt av? {fo + tboll|*fot + boll|fotb + oll}
          Vilket ord kan du bygga av "sol" + "stol"? {*solstol|stolsol|sol stol}
          Vilket ord kan du bygga av "glass" + "bil"? {glass bil|bilglass|*glassbil}
        `,
      },
    ],
  },
  {
    id: "startprov-ak5",
    titel: "Startprov – början av årskurs 5",
    underrubrik: "Det du har lärt dig i årskurs 3 och 4 · 50 minuter",
    omrade: "Startprov",
    steg: 2,
    feltyper: ["stavning.dubbelteckning", "stavning.ljud", "stavning.sarskrivning", "grammatik.bojning", "grammatik.genus", "skiljetecken.punkt"],
    regel: [
      "Provet tar 50 minuter. Varje rätt svar ger 1 poäng.",
      "Provet visar vad du redan kan och vad vi ska öva mer på. Gör så gott du kan.",
      "Läs instruktionen före varje del. Läs igenom dina svar när du är klar.",
    ],
    delar: [
      {
        rubrik: "Del 1: Alfabetisk ordning",
        instruktion: "Vilket ord kommer först i alfabetisk ordning?",
        typ: "val",
        rader: `
          {sol|*bok|katt}
          {*apa|hund|mus}
          {sko|*sax|sten}
          {bok|buss|*bil}
        `,
      },
      {
        rubrik: "Del 2: Dubbelteckning",
        instruktion: "Efter en kort vokal skriver man ofta två lika konsonanter. Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Vi {*simmade|simade} i sjön.
          Hon {*kommer|komer} snart hem.
          Han {*hoppade|hopade} över diket.
          Vi {*äter|ätter} middag klockan fem.
          Hon har en {*grön|grönn} jacka.
          Jag {*glömde|glömmde} min mössa.
        `,
      },
      {
        rubrik: "Del 3: Ng-, j- och sje-ljudet",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Kan du {jälpa|*hjälpa} mig?
          Vi såg ett stort {*djur|jur} i skogen.
          Han har en blå {sjorta|*skjorta}.
          Vi badade i {*sjön|schön}.
          Jag ska {*tänka|tängka} på saken.
          På himlen lyser en {sjärna|*stjärna}.
        `,
      },
      {
        rubrik: "Del 4: Ordets delar",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vad betyder o- i "olycklig"? {*inte|igen|mycket}
          Vilket ord är byggt med ändelsen -het? {hetta|*frihet|heta}
          Vilken del bär betydelsen i "lekte"? {*lek|te|lekt}
          Hur skrivs "glass" + "bil"? {glass bil|*glassbil|glass-bil}
          Hur skrivs "tand" + "borste"? {tand borste|tand-borste|*tandborste}
        `,
      },
      {
        rubrik: "Del 5: Substantiv",
        instruktion: "Skriv ordet i rätt form. Ordet och formen står inom parentes.",
        typ: "skriv",
        rader: `
          Vi har en katt. {Katten} heter Sigge. (katt, bestämd form)
          Jag har två {hundar}. (hund, plural)
          Jag har tre {böcker} i väskan. (bok, plural)
          {Huset} är gult. (hus, bestämd form)
          Hon har tre {syskon}. (syskon, plural)
        `,
      },
      {
        rubrik: "Del 6: Verb och adjektiv",
        instruktion: "Skriv ordet i rätt form. Grundformen står inom parentes.",
        typ: "skriv",
        rader: `
          I går {lekte} vi i parken. (leka)
          Nu {springer} jag hem. (springa)
          I går {åt} vi pannkakor. (äta)
          Vi har ett {stort} hus. (stor)
          Hon har en {röd} mössa. (röd)
          Vi har två {små} katter. (liten)
        `,
      },
      {
        rubrik: "Del 7: Stor bokstav och skiljetecken",
        instruktion: "Skriv meningen rätt med stor bokstav och rätt tecken.",
        typ: "ratta",
        rader: `
          vi åkte till göteborg i somras => Vi åkte till Göteborg i somras.
          har du sett min mobil => Har du sett min mobil?
          på lördag ska sara och omar bada => På lördag ska Sara och Omar bada.
          när kommer mormor => När kommer mormor?
        `,
      },
      {
        rubrik: "Del 8: Bygga ut meningar",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vilket ord är ett adjektiv i "Den glada hunden springer"? {hunden|*glada|springer}
          Vilket ord berättar hur hunden springer i "Hunden springer snabbt"? {hunden|springer|*snabbt}
          Vilken mening har en bisats? {Vi gick in.|*Vi gick in när det regnade.|Det regnade hela dagen.}
          Vilken mening börjar med något annat än den som gör något? {Vi badade i går.|*I går badade vi.|Vi badade i sjön.}
        `,
      },
    ],
  },
  {
    id: "startprov-ak8",
    titel: "Startprov – början av årskurs 8",
    underrubrik: "Det du har lärt dig i årskurs 5–7 · 50 minuter",
    omrade: "Startprov",
    steg: 3,
    feltyper: [
      "grammatik.verbform",
      "grammatik.tempus",
      "grammatik.bojning",
      "grammatik.subjekt-verb",
      "stavning.dubbelteckning",
      "stavning.ljud",
      "skiljetecken.komma",
      "struktur.textbindning",
      "ordval.stilniva",
    ],
    regel: [
      "Provet tar 50 minuter. Varje rätt svar ger 1 poäng.",
      "Provet visar vad du redan kan och vad vi behöver repetera i början av högstadiet. Gör så gott du kan.",
      "Ord i VERSALER är de ord som frågan gäller. Läs instruktionen före varje del.",
    ],
    delar: [
      {
        rubrik: "Del 1: Ordklasser",
        instruktion: "Vilken ordklass hör ordet i VERSALER till?",
        typ: "val",
        rader: `
          Vi köpte en ny CYKEL. {verb|*substantiv|adjektiv|pronomen}
          Hon SPRINGER till bussen. {*verb|substantiv|adjektiv|pronomen}
          Det var en KALL morgon. {verb|substantiv|*adjektiv|pronomen}
          HON har en hund. {verb|substantiv|adjektiv|*pronomen}
          Vi åt GLASS efter maten. {verb|*substantiv|adjektiv|pronomen}
          Jag tycker om DIG. {verb|substantiv|adjektiv|*pronomen}
        `,
      },
      {
        rubrik: "Del 2: Verb – tempus och hjälpverb",
        instruktion: "Skriv verbet i rätt form. Grundformen står inom parentes.",
        typ: "skriv",
        rader: `
          I går {skrev} jag ett brev. (skriva)
          Jag har redan {ätit} lunch. (äta)
          Hon {läser} en bok just nu. (läsa)
          Vi ska {åka} till mormor i morgon. (åka)
          När vi kom hade filmen redan {börjat}. (börja)
          Du kan {bli} vad du vill. (bli)
        `,
      },
      {
        rubrik: "Del 3: Substantiv och adjektiv",
        instruktion: "Välj rätt form.",
        typ: "val",
        rader: `
          Jag åt {en|*ett} äpple.
          Vi har {ett|*en} katt.
          Min väska är {tung|*tyngre|tyngst} än din.
          Det här är den {*bästa|bra|bättre} filmen jag har sett.
          Vi bor i ett {gul|*gult|gula} hus.
          De {*röda|röd|rött} skorna är mina.
        `,
      },
      {
        rubrik: "Del 4: Subjekt, predikat och objekt",
        instruktion: "Vilken satsdel är orden i VERSALER?",
        typ: "val",
        rader: `
          HUNDEN skäller. {*subjekt|predikat|objekt}
          Elsa LÄSER en bok. {subjekt|*predikat|objekt}
          Elsa läser EN BOK. {subjekt|predikat|*objekt}
          I går köpte PAPPA en cykel. {*subjekt|predikat|objekt}
          Vi åt PIZZA till middag. {subjekt|predikat|*objekt}
          Min lillebror SOVER. {subjekt|*predikat|objekt}
        `,
      },
      {
        rubrik: "Del 5: Meningsbyggnad",
        instruktion: "Skriv om meningen så att den blir rätt.",
        typ: "ratta",
        rader: `
          I går vi åt pizza. => I går åt vi pizza.
          Sedan vi gick hem. => Sedan gick vi hem.
          På lördag jag ska spela match. => På lördag ska jag spela match.
          Det var kallt, vi gick in. => Det var kallt, så vi gick in. || Det var kallt. Vi gick in. || Det var kallt, och vi gick in. || Eftersom det var kallt gick vi in. || Vi gick in eftersom det var kallt.
        `,
      },
      {
        rubrik: "Del 6: Stavning",
        instruktion: "Välj det ord som är rätt stavat.",
        typ: "val",
        rader: `
          Vi {*hämtade|hämmtade} paketet.
          Han {*kom|komm} sent i går.
          Jag {*kände|kännde} igen henne.
          Hon har en ny {sjorta|*skjorta}.
          Vi {jälper|*hjälper} varandra.
          Det var {*roligt|rolit} på lägret.
        `,
      },
      {
        rubrik: "Del 7: Ordets byggstenar",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vilken del är roten i "ovänlig"? {o|*vän|lig}
          Vad betyder prefixet miss- i "missförstå"? {igen|*fel|inte}
          Vilket ord är ett nytt ord som bildats med ett suffix? {*läsbar|läsa|läser}
          Vilket ord är en böjningsform av "bil"? {*bilar|bilist|bilfri}
          Hur skrivs "skola" + "gård"? {skola gård|*skolgård|skolagård}
        `,
      },
      {
        rubrik: "Del 8: Stor bokstav och skiljetecken",
        instruktion: "Skriv meningen rätt med stor bokstav och skiljetecken.",
        typ: "ratta",
        rader: `
          vi åkte till stockholm i juli => Vi åkte till Stockholm i juli.
          vad heter din bror => Vad heter din bror?
          jag köpte äpplen päron och bananer => Jag köpte äpplen, päron och bananer.
          – jag är trött sa ali => – Jag är trött, sa Ali.
          jag ville gå ut men det regnade => Jag ville gå ut, men det regnade. || Jag ville gå ut men det regnade.
        `,
      },
      {
        rubrik: "Del 9: Binda ihop text",
        instruktion: "Välj det ord som passar bäst.",
        typ: "val",
        rader: `
          Elsa har en hund. {*Den|Det|De} heter Bamse.
          Vi har ett nytt hus. {Den|*Det|De} är gult.
          Leo och Moa är syskon. {Den|Det|*De} bor i Lund.
          Jag ville gå ut. {*Men|Dessutom|Till exempel} det regnade.
          Först åt vi. {Men|*Sedan|Eftersom} diskade vi.
        `,
      },
      {
        rubrik: "Del 10: Ordval",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vilken mening passar i ett mejl till rektorn? {Tja! Vi vill ha längre rast typ.|*Hej! Vi undrar om rasten kan bli längre.|Asså rasten är för kort!!}
          Vilket ord är negativt laddat? {sparsam|*snål|noggrann}
          Vilket ord betyder nästan samma sak som "ledsen"? {arg|*sorgsen|trött}
        `,
      },
    ],
  },
  {
    id: "startprov-gy",
    titel: "Startprov – början av gymnasiet",
    underrubrik: "Det du har lärt dig i årskurs 8–10 · 50 minuter",
    omrade: "Startprov",
    steg: 4,
    feltyper: [
      "grammatik.de-dem",
      "grammatik.verbform",
      "grammatik.ordfoljd",
      "stavning.dubbelteckning",
      "stavning.stor-bokstav",
      "skiljetecken.komma",
      "skiljetecken.dialog",
      "struktur.textbindning",
      "ordval.stilniva",
    ],
    regel: [
      "Provet tar 50 minuter. Varje rätt svar ger 1 poäng.",
      "Provet visar vad du redan kan och vad vi behöver repetera i början av gymnasiet. Gör så gott du kan.",
      "Ord i VERSALER är de ord som frågan gäller. Läs instruktionen före varje del.",
    ],
    delar: [
      {
        rubrik: "Del 1: Ordklasser",
        instruktion: "Vilken ordklass hör ordet i VERSALER till?",
        typ: "val",
        rader: `
          Hon sprang SNABBT. {adjektiv|*adverb|verb|preposition}
          Boken ligger PÅ bordet. {adverb|konjunktion|*preposition|pronomen}
          Jag stannade hemma EFTERSOM jag var sjuk. {konjunktion|*subjunktion|preposition|adverb}
          Vi åt OCH drack. {*konjunktion|subjunktion|preposition|adverb}
          AJ, det gjorde ont! {adverb|*interjektion|pronomen|verb}
          Hon köpte TRE böcker. {adjektiv|*räkneord|substantiv|adverb}
        `,
      },
      {
        rubrik: "Del 2: Satsdelar",
        instruktion: "Vilken satsdel är orden i VERSALER?",
        typ: "val",
        rader: `
          Läraren gav ELEVERNA en läxa. {direkt objekt|*indirekt objekt|subjekt|adverbial}
          Maten var GOD. {direkt objekt|*predikativ|adverbial|subjekt}
          I GÅR regnade det. {direkt objekt|predikativ|*adverbial|subjekt}
          Hon blev LÄKARE. {direkt objekt|*predikativ|adverbial|subjekt}
          Vi såg EN FILM. {*direkt objekt|indirekt objekt|predikativ|adverbial}
        `,
      },
      {
        rubrik: "Del 3: Huvudsats och bisats",
        instruktion: "Skriv om meningen så att den blir rätt.",
        typ: "ratta",
        rader: `
          Jag åt inget eftersom jag gillar inte fisk. => Jag åt inget eftersom jag inte gillar fisk.
          Han sa att han kunde inte komma. => Han sa att han inte kunde komma.
          När jag kom hem jag åt middag. => När jag kom hem åt jag middag. || När jag kom hem, åt jag middag.
          Om det regnar vi stannar inne. => Om det regnar stannar vi inne. || Om det regnar, stannar vi inne.
        `,
      },
      {
        rubrik: "Del 4: Orsak, följd, villkor och syfte",
        instruktion: "Välj det ord eller uttryck som passar.",
        typ: "val",
        rader: `
          Matchen ställdes in {eftersom|*på grund av|därför} regnet.
          Det regnade, {*så|eftersom|om} vi stannade inne.
          {Därför|*Om|Så} du tränar varje dag blir du starkare.
          Hon sparar pengar {*för att|eftersom|därför} kunna köpa en cykel.
          Vi kom för sent {så|om|*eftersom} bussen var försenad.
        `,
      },
      {
        rubrik: "Del 5: Stavning",
        instruktion: "Välj den form som är rätt.",
        typ: "val",
        rader: `
          Vi stannade {hema|*hemma} hela dagen.
          Hon {glömmde|*glömde} sin nyckel.
          Jag såg {*dem|de} i skolan.
          {Dem|*De} flesta eleverna var nöjda.
          Vi firar {Midsommar|*midsommar} i juni.
          Jag pratar {Svenska|*svenska} och arabiska.
        `,
      },
      {
        rubrik: "Del 6: Ordets byggstenar",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vilket ord är en avledning (ett nytt ord) av "glad"? {gladare|*glädje|glada}
          Vilket ord är en böjningsform av "skriva"? {*skrev|skrivare|beskrivning}
          Vilken del är roten i "oläslig"? {o|*läs|lig}
          Vad kallas ett ord som "bil" (av automobil)? {initialord|*kortord|akronym}
          Varför har "arbetsplats" ett s i mitten? {*det är ett foge-s|det är plural|det är genitiv}
        `,
      },
      {
        rubrik: "Del 7: Textbindning",
        instruktion: "Välj det som passar bäst.",
        typ: "val",
        rader: `
          Vi besökte en borg. {*Borgen|En borg|Borgar} byggdes på 1300-talet.
          Leo köpte äpplen och päron. {*Frukten|Den|Han} var mogen.
          Biffen är god. Fisken är {*däremot|dessutom|därför} torr.
          Det snöade hela natten. {Däremot|*Därför|Dessutom} var vägarna hala.
          Vilket ord visar tid? {dessutom|däremot|*sedan}
        `,
      },
      {
        rubrik: "Del 8: Skiljetecken",
        instruktion: "Skriv meningen rätt med skiljetecken.",
        typ: "ratta",
        rader: `
          När vi kom hem åt vi middag => När vi kom hem, åt vi middag. || När vi kom hem åt vi middag.
          – Kommer du frågade hon => – Kommer du? frågade hon.
          Kan du hjälpa mig Sara => Kan du hjälpa mig, Sara?
          Vi behöver tre saker: mjöl socker och ägg. => Vi behöver tre saker: mjöl, socker och ägg.
        `,
      },
      {
        rubrik: "Del 9: Språkhistoria och språklig variation",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Från vilket språk kom många lånord under Hansans tid på medeltiden? {engelska|*lågtyska|franska}
          Från vilket språk kom många lånord på 1700-talet? {engelska|lågtyska|*franska}
          Vilket språk är INTE ett nationellt minoritetsspråk i Sverige? {finska|samiska|*engelska|jiddisch}
          Vilket språk är svenskan närmast släkt med? {finska|*norska|estniska}
          Vad kallas en variant av svenska som talas i ett visst område? {*dialekt|sociolekt|slang}
        `,
      },
      {
        rubrik: "Del 10: Stil och ordval",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vilken mening passar i en formell rapport? {Resultatet var typ jättebra.|*Resultatet var mycket positivt.|Resultatet var asbra.}
          Vilket ord är neutralt? {snål|*sparsam|gnidig}
          ”Han är en klippa.” Vilket bildspråk är det? {liknelse|*metafor|besjälning}
        `,
      },
    ],
  },
];
