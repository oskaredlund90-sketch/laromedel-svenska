import type { HafteKalla } from "../typer";
import {
  ENKLA_MENINGAR, ENKLA_MENINGAR_2,
  HOG_MENINGAR,
  SPOA_MENINGAR,
  SYFTNING_RADER,
  avledningarSkriv,
  rotBojningSkriv,
  sambandEftersomPaGrundAv,
  sambandOrdfoljd,
  sambandValEnkel,
  sammansattaDela,
  sammansattaSkriv,
  skrivSatsdel,
  valjSatsdel,
} from "./grammatik-banker";

/**
 * Häften till de utbyggda grammatikdelarna: satsdelar, orsak/följd/villkor,
 * ordets byggstenar (morfem) och textbindning. Att göra på skärmen eller
 * skriva ut med facit.
 */
export const GRAMMATIK_UTBYGGD: HafteKalla[] = [
  /* ------------------------------- Satsdelar ------------------------------ */
  {
    id: "satsdelar-1-subjekt-predikat",
    titel: "Vem gör vad?",
    underrubrik: "Subjekt och predikat",
    omrade: "Satsdelar",
    steg: 1,
    feltyper: ["grammatik.subjekt-verb"],
    regel: [
      "Predikatet är verbet – det som händer: Hunden skäller.",
      "Subjektet är den som gör något. Fråga: vem eller vad + verbet? Vem skäller? – Hunden.",
      "Subjektet behöver inte stå först: I dag regnar det. På rasten spelar vi fotboll.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Skriv subjektet – den som gör något.",
        typ: "skriv",
        rader: `
          Katten sover i soffan. Subjekt: {katten}
          Mamma lagar mat. Subjekt: {mamma}
          Barnen leker på gården. Subjekt: {barnen}
          I dag cyklar Ali till skolan. Subjekt: {Ali}
          Fåglarna sjunger i träden. Subjekt: {fåglarna}
          På kvällen läser pappa en saga. Subjekt: {pappa}
          Vi åker till stranden. Subjekt: {vi}
          Läraren skriver på tavlan. Subjekt: {läraren}
          Efter skolan spelar Elsa piano. Subjekt: {Elsa}
          Hästen springer över ängen. Subjekt: {hästen}
          Min bror har en ny cykel. Subjekt: {min bror}
          I skogen bor en räv. Subjekt: {en räv}
          Solen skiner. Subjekt: {solen}
          Klockan ringer. Subjekt: {klockan}
          Hela klassen åkte på utflykt. Subjekt: {hela klassen}
          Där borta står min mormor. Subjekt: {min mormor}
          Hon gillar glass. Subjekt: {hon}
          I morgon börjar sommarlovet. Subjekt: {sommarlovet}
          Bebisen skrattar. Subjekt: {bebisen}
          De bygger en koja. Subjekt: {de}
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv predikatet – verbet.",
        typ: "skriv",
        rader: `
          Hunden skäller. Predikat: {skäller}
          Vi badar i sjön. Predikat: {badar}
          Omar ritar en drake. Predikat: {ritar}
          I går snöade det. Predikat: {snöade}
          Mormor bakar bullar. Predikat: {bakar}
          Bussen kom för sent. Predikat: {kom}
          Jag tycker om äpplen. Predikat: {tycker}
          Barnen sprang ut på rasten. Predikat: {sprang}
          Katten jagar en mus. Predikat: {jagar}
          Pappa sover på soffan. Predikat: {sover}
          Läraren läste en dikt. Predikat: {läste}
          Fisken simmar i akvariet. Predikat: {simmar}
          På morgonen vaknade jag tidigt. Predikat: {vaknade}
          Lisa hoppar hopprep. Predikat: {hoppar}
          Vinden blåser. Predikat: {blåser}
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Välj det ord som är subjekt.",
        typ: "val",
        rader: `
          {*Hunden|Bollen|Parken} hämtar bollen i parken.
          I morgon åker {*vi|morgon|bussen} buss.
          {Glassen|*Barnen|Stranden} äter glass på stranden.
          Efter maten diskar {maten|*pappa|disken}.
          {*Elin|Boken|Biblioteket} lånar en bok på biblioteket.
          På vintern åker {*de|vintern|skidor} skidor.
          {Mössan|*Jag|Vintern} tar på mig mössan.
          I skolan lär {skolan|*eleverna|mycket} sig mycket.
          {*Kon|Gräset|Hagen} äter gräs i hagen.
          Varje lördag städar {lördag|*familjen|huset} huset.
        `,
      },
      { rubrik: "Del D", instruktion: "Skriv subjektet.", typ: "skriv", rader: skrivSatsdel(ENKLA_MENINGAR, "S") },
      { rubrik: "Del E", instruktion: "Skriv predikatet.", typ: "skriv", rader: skrivSatsdel(ENKLA_MENINGAR_2, "P") },
    ],
  },
  {
    id: "satsdelar-2-objekt-adverbial",
    titel: "Vad? När? Var? Hur?",
    underrubrik: "Objekt och adverbial",
    omrade: "Satsdelar",
    steg: 2,
    feltyper: ["grammatik.subjekt-verb"],
    regel: [
      "Objekt: det som handlingen riktas mot. Fråga: vem/vad + predikat + subjekt? Elin läser EN BOK.",
      "Adverbial: berättar när, var, hur eller varför. I GÅR åt vi glass PÅ STRANDEN.",
      "Arbeta i ordning: predikat → subjekt → objekt → det som är kvar är oftast adverbial.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Skriv objektet.",
        typ: "skriv",
        rader: `
          Elin läser en bok. Objekt: {en bok}
          Hunden jagade katten. Objekt: {katten}
          Vi köpte glass. Objekt: {glass}
          Pappa lagade cykeln i går. Objekt: {cykeln}
          Jag har en hamster. Objekt: {en hamster}
          Läraren delade ut proven. Objekt: {proven}
          I går såg vi en älg. Objekt: {en älg}
          Mormor stickar en tröja. Objekt: {en tröja}
          Laget vann matchen. Objekt: {matchen}
          Hon målade en tavla på lektionen. Objekt: {en tavla}
          Barnen byggde en snögubbe. Objekt: {en snögubbe}
          Ali sparkade bollen över staketet. Objekt: {bollen}
          Jag glömde min mössa. Objekt: {min mössa}
          Vi planterade tomater i trädgården. Objekt: {tomater}
          Katten fångade en mus. Objekt: {en mus}
          Klassen skrev en saga tillsammans. Objekt: {en saga}
          Mamma ringde mig. Objekt: {mig}
          Hon träffade sin kusin i stan. Objekt: {sin kusin}
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Vad svarar adverbialet med STORA BOKSTÄVER på?",
        typ: "val",
        rader: `
          Vi badade I GÅR. {*när|var|hur}
          Katten sover I SOFFAN. {när|*var|hur}
          Han sprang SNABBT. {när|var|*hur}
          PÅ KVÄLLEN läser jag. {*när|var|hur}
          Vi stannade inne EFTERSOM DET REGNADE. {när|var|*varför}
          Hon gömde nyckeln UNDER MATTAN. {när|*var|hur}
          De pratade TYST. {när|var|*hur}
          NÄSTA VECKA har vi prov. {*när|var|hur}
          Barnen leker UTE. {när|*var|hur}
          Jag gick hem PÅ GRUND AV REGNET. {när|var|*varför}
          Han svarade ARGT. {när|var|*hur}
          Vi träffas EFTER SKOLAN. {*när|var|hur}
          Fåglarna flög SÖDERUT. {när|*var|hur}
          Hon skrev FÖRSIKTIGT. {när|var|*hur}
          I SOMRAS var vi i Grekland. {*när|var|hur}
          Vi åt middag HOS MORMOR. {när|*var|hur}
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Vilken satsdel är ordet med STORA BOKSTÄVER?",
        typ: "val",
        rader: `
          LISA spelar fotboll. {*subjekt|predikat|objekt|adverbial}
          Lisa SPELAR fotboll. {subjekt|*predikat|objekt|adverbial}
          Lisa spelar FOTBOLL. {subjekt|predikat|*objekt|adverbial}
          Lisa spelar fotboll PÅ LÖRDAGAR. {subjekt|predikat|objekt|*adverbial}
          I GÅR köpte vi en ny soffa. {subjekt|predikat|objekt|*adverbial}
          I går köpte VI en ny soffa. {*subjekt|predikat|objekt|adverbial}
          I går köpte vi EN NY SOFFA. {subjekt|predikat|*objekt|adverbial}
          I går KÖPTE vi en ny soffa. {subjekt|*predikat|objekt|adverbial}
          Hunden gräver ett hål I TRÄDGÅRDEN. {subjekt|predikat|objekt|*adverbial}
          HUNDEN gräver ett hål. {*subjekt|predikat|objekt|adverbial}
          Hunden gräver ETT HÅL. {subjekt|predikat|*objekt|adverbial}
          Mormor ringde MIG i morse. {subjekt|predikat|*objekt|adverbial}
          Mormor ringde mig I MORSE. {subjekt|predikat|objekt|*adverbial}
          På rasten ÅT vi frukt. {subjekt|*predikat|objekt|adverbial}
        `,
      },
      {
        rubrik: "Del D",
        instruktion: "Vilken satsdel är delen med STORA BOKSTÄVER?",
        typ: "val",
        rader: valjSatsdel(SPOA_MENINGAR.slice(5), ["S", "P", "O", "A"]),
      },
    ],
  },
  {
    id: "satsdelar-3-predikativ-indirekt-objekt",
    titel: "Till vem? Hurdan?",
    underrubrik: "Indirekt objekt och predikativ",
    omrade: "Satsdelar",
    steg: 3,
    feltyper: ["grammatik.subjekt-verb"],
    regel: [
      "Indirekt objekt = mottagaren. Läraren gav ELEVERNA en läxa. Fråga: till/åt vem?",
      "Predikativ beskriver subjektet efter vara, bli, heta, verka, kallas: Maten var GOD. Hon blev LÄKARE.",
      "Objekt är något annat än subjektet, predikativ är samma sak som subjektet.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Vilken satsdel är delen med STORA BOKSTÄVER?",
        typ: "val",
        rader: `
          Läraren gav ELEVERNA en läxa. {objekt|*indirekt objekt|predikativ}
          Läraren gav eleverna EN LÄXA. {*objekt|indirekt objekt|predikativ}
          Maten var GOD. {objekt|indirekt objekt|*predikativ}
          Hon blev LÄKARE. {objekt|indirekt objekt|*predikativ}
          Hon träffade EN LÄKARE. {*objekt|indirekt objekt|predikativ}
          Vi skickade MORMOR ett vykort. {objekt|*indirekt objekt|predikativ}
          Filmen verkade SPÄNNANDE. {objekt|indirekt objekt|*predikativ}
          Han lånade MIG sin cykel. {objekt|*indirekt objekt|predikativ}
          Han lånade mig SIN CYKEL. {*objekt|indirekt objekt|predikativ}
          Rummet kändes KALLT. {objekt|indirekt objekt|*predikativ}
          Tränaren visade LAGET en ny taktik. {objekt|*indirekt objekt|predikativ}
          Min hund heter SIGGE. {objekt|indirekt objekt|*predikativ}
          Jag köpte SIGGE ett nytt koppel. {objekt|*indirekt objekt|predikativ}
          Spelarna var TRÖTTA efter matchen. {objekt|indirekt objekt|*predikativ}
          De önskade OSS lycka till. {objekt|*indirekt objekt|predikativ}
          Hennes förslag verkade GENOMTÄNKT. {objekt|indirekt objekt|*predikativ}
          Hon berättade EN HEMLIGHET för mig. {*objekt|indirekt objekt|predikativ}
          Huset är RÖTT. {objekt|indirekt objekt|*predikativ}
          Pappa gav HUNDEN ett ben. {objekt|*indirekt objekt|predikativ}
          Han kallas BUSEN i klassen. {objekt|indirekt objekt|*predikativ}
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Predikativet böjs efter subjektet. Välj rätt form.",
        typ: "val",
        rader: `
          Huset är {röd|*rött|röda}.
          Husen är {röd|rött|*röda}.
          Bilen var {*ny|nytt|nya}.
          Äpplena var {sur|surt|*sura}.
          Vattnet blev {kall|*kallt|kalla}.
          Eleverna blev {glad|glatt|*glada}.
          Provet verkade {svår|*svårt|svåra}.
          Uppgiften var {*lätt|lätta}.
          Barnen var {trött|*trötta}.
          Rummet var {stor|*stort|stora}.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Vilken satsdel är delen med STORA BOKSTÄVER?",
        typ: "val",
        rader: valjSatsdel(HOG_MENINGAR, ["S", "P", "O", "IO", "A", "PV"]),
      },
    ],
  },

  /* ------------------------ Orsak, följd och villkor ---------------------- */
  {
    id: "samband-1-eftersom-sa-om",
    titel: "Eftersom, så, om",
    underrubrik: "Orsak, följd och villkor",
    omrade: "Samband",
    steg: 1,
    feltyper: ["struktur.textbindning"],
    regel: [
      "Orsak – varför? eftersom, för att: Vi stannade inne EFTERSOM det regnade.",
      "Följd – vad händer sedan? så, därför: Det regnade, SÅ vi stannade inne.",
      "Villkor – vad måste hända först? om: OM det regnar, stannar vi inne.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som passar.",
        typ: "val",
        rader: `
          Jag tar på mig jackan {*eftersom|så|om} det är kallt.
          Det är kallt, {eftersom|*så|om} jag tar på mig jackan.
          {Eftersom|Så|*Om} det regnar, tar vi med paraply.
          Hunden skäller {*för att|så|om} den är hungrig.
          Jag var trött, {eftersom|*så|om} jag gick och la mig.
          Du får glass {eftersom|så|*om} du äter upp maten.
          Vi stannade inne {*eftersom|så|om} det åskade.
          Det åskade, {eftersom|*därför|om} stannade vi inne.
          {Eftersom|Så|*Om} du skyndar dig, hinner du med bussen.
          Maja grät {*eftersom|så|om} hon hade ramlat.
          Bussen var sen, {eftersom|*så|om} vi gick i stället.
          Vi går ut {eftersom|så|*om} solen kommer fram.
          Han skrattade {*eftersom|så|om} clownen ramlade.
          Isen var tunn, {eftersom|*så|om} vi åkte inte skridskor.
          {Eftersom|Så|*Om} du vill, kan du följa med.
          Jag vattnar blommorna {*eftersom|så|om} jorden är torr.
          Jorden är torr, {eftersom|*så|om} jag vattnar blommorna.
          Vi badar {eftersom|så|*om} vattnet är varmt nog.
          Hon log {*för att|så|om} hon var glad.
          Jag ringer dig {eftersom|så|*om} jag blir sen.
          Det var mörkt, {eftersom|*därför|om} tände vi lampan.
          Vi åt pannkakor {*eftersom|så|om} det var torsdag.
          {Eftersom|Därför|*Om} det snöar i morgon, bygger vi en snögubbe.
          Pelle blev blöt {*eftersom|så|om} han glömde paraplyet.
          Han glömde paraplyet, {eftersom|*så|om} han blev blöt.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Är det orsak, följd eller villkor?",
        typ: "val",
        rader: `
          Vi badade EFTERSOM DET VAR VARMT. {*orsak|följd|villkor}
          Det var varmt, SÅ VI BADADE. {orsak|*följd|villkor}
          OM DET ÄR VARMT, badar vi. {orsak|följd|*villkor}
          Hon grät EFTERSOM HON VAR LEDSEN. {*orsak|följd|villkor}
          Han vann, SÅ VI FIRADE. {orsak|*följd|villkor}
          Du får låna boken OM DU ÄR RÄDD OM DEN. {orsak|följd|*villkor}
          Matchen ställdes in PÅ GRUND AV REGNET. {*orsak|följd|villkor}
          Jag glömde väckarklockan. DÄRFÖR KOM JAG FÖR SENT. {orsak|*följd|villkor}
          IFALL DET REGNAR, tar vi bussen. {orsak|följd|*villkor}
          Vi stannade hemma FÖR ATT MORMOR KOM. {*orsak|följd|villkor}
          Det blåste, SÅ BÅTARNA STANNADE I HAMNEN. {orsak|*följd|villkor}
          OM DU TRÄNAR, blir du bättre. {orsak|följd|*villkor}
        `,
      },
      { rubrik: "Del C", instruktion: "Välj eftersom, så eller om.", typ: "val", rader: sambandValEnkel() },
    ],
  },
  {
    id: "samband-2-uttryck-samband",
    titel: "På grund av, vilket ledde till …",
    underrubrik: "Uttryck samband på olika sätt",
    omrade: "Samband",
    steg: 3,
    feltyper: ["struktur.textbindning", "grammatik.ordfoljd"],
    regel: [
      "Eftersom + sats: eftersom det snöade. På grund av + nominalfras: på grund av snön.",
      "Verb kan visa samband: beror på (orsak), leder till, medför (följd).",
      "Bisatser följer BIFF: …eftersom bussen INTE kom. När bisatsen står först kommer verbet direkt efter: Eftersom det regnade STANNADE VI inne.",
      "Skriv eftersom – inte ”eftersom att”.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det uttryck som passar.",
        typ: "val",
        rader: `
          Bussen var försenad {eftersom|*på grund av} en olycka.
          Bussen var försenad {*eftersom|på grund av} det hade skett en olycka.
          Matchen ställdes in {eftersom|*på grund av} regnet.
          Skolan stängde {*eftersom|på grund av} det var strömavbrott.
          Förseningen {*berodde på|ledde till} snön.
          Snöfallet {berodde på|*ledde till} stora förseningar.
          Rökning {beror på|*leder till} sjukdomar.
          Hon klarade provet {eftersom|*trots att} hon hade varit sjuk.
          Han var sjuk. {Därför|*Ändå} spelade han matchen.
          Priserna steg, {*vilket ledde till att|eftersom} många fick det svårt.
          {Annars|*Om} vi minskar utsläppen, kan vi bromsa uppvärmningen.
          Utsläppen måste minska. {*Annars|Därför} blir klimatet varmare.
          {*Till följd av|Eftersom} stormen ställdes alla flyg in.
          Många djur hotas {*eftersom|trots att} deras skogar huggs ner.
          Livsmiljöerna försvinner. {Eftersom|*Följaktligen} hotas många arter.
          Han tränade varje dag, {eftersom|*vilket gjorde att} han blev snabbare.
          Vi går ut i morgon {*förutsatt att|trots att} det inte regnar.
          {*Trots|Trots att} regnet gick vi ut.
          {Trots|*Trots att} det regnade gick vi ut.
          Ökningen {*beror främst på|leder främst till} den nya lagen.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv om meningen rätt.",
        typ: "ratta",
        rader: `
          Vi kom sent eftersom att tåget var försenat. => Vi kom sent eftersom tåget var försenat.
          Han kom för sent eftersom bussen kom inte. => Han kom för sent eftersom bussen inte kom.
          Eftersom det regnade vi stannade inne. => Eftersom det regnade stannade vi inne.
          Om du skyndar dig du hinner. => Om du skyndar dig hinner du.
          Matchen ställdes in eftersom regnet. => Matchen ställdes in på grund av regnet. || Matchen ställdes in eftersom det regnade.
          Jag svarade inte eftersom jag hörde inte telefonen. => Jag svarade inte eftersom jag inte hörde telefonen.
          Trots det regnade gick vi ut. => Trots att det regnade gick vi ut.
          Vi stannar hemma om det slutar inte regna. => Vi stannar hemma om det inte slutar regna.
          Eftersom isen var tunn vi åkte inte skridskor. => Eftersom isen var tunn åkte vi inte skridskor.
          Det regnade, vi gick in. => Det regnade, så vi gick in. || Det regnade. Vi gick in. || Det regnade, därför gick vi in.
          Förseningen berodde på grund av snön. => Förseningen berodde på snön.
          Hon klarade sig eftersom att hon var förberedd. => Hon klarade sig eftersom hon var förberedd.
        `,
      },
      { rubrik: "Del C", instruktion: "Eftersom + sats eller på grund av + nominalfras? Välj.", typ: "val", rader: sambandEftersomPaGrundAv() },
      { rubrik: "Del D", instruktion: "Orsaken står först. Skriv om så att verbet kommer direkt efter bisatsen.", typ: "ratta", rader: sambandOrdfoljd() },
    ],
  },

  /* --------------------------- Ordets byggstenar -------------------------- */
  {
    id: "morfem-1-sammansatta-ord-andelser",
    titel: "Sol + sken = solsken",
    underrubrik: "Sammansatta ord och ändelser",
    omrade: "Ordets byggstenar",
    steg: 1,
    feltyper: ["stavning.sarskrivning", "stavning.dubbelteckning"],
    regel: [
      "Två ord kan sättas ihop till ett nytt ord. Det skrivs ihop: sol + sken = solsken.",
      "Det sista ordet säger vad det är: en snögubbe är en gubbe.",
      "Stava ordet först, lägg sedan till ändelsen: hopp + ar = hoppar, katt + er = katter.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Skriv ihop orden till ett ord.",
        typ: "skriv",
        rader: `
          sol + sken = {solsken}
          fot + boll = {fotboll}
          snö + gubbe = {snögubbe}
          bok + hylla = {bokhylla}
          glass + bil = {glassbil}
          tand + borste = {tandborste}
          regn + båge = {regnbåge}
          is + björn = {isbjörn}
          sjö + stjärna = {sjöstjärna}
          sand + låda = {sandlåda}
          jord + gubbe = {jordgubbe}
          brand + bil = {brandbil}
          häst + sko = {hästsko}
          kaffe + kopp = {kaffekopp}
          fjäril + vinge = {fjärilsvinge} (ett s emellan)
          mat + säck = {matsäck}
          skol + väska = {skolväska}
          bad + kläder = {badkläder}
          hand + duk = {handduk}
          blå + bär = {blåbär}
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Lägg till ändelsen och skriv ordet.",
        typ: "skriv",
        rader: `
          bil + ar = {bilar}
          katt + er = {katter}
          hund + en = {hunden}
          flicka → flera: {flickor}
          hopp + ar = {hoppar}
          lek + te = {lekte}
          springa → nu: han {springer}
          boll + ar = {bollar}
          stol + en = {stolen}
          titt + ar = {tittar}
          sjunga → nu: hon {sjunger}
          glass + en = {glassen}
          hus + et = {huset}
          bok + en = {boken}
          läs + te = {läste}
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Välj rätt stavning.",
        typ: "val",
        rader: `
          Vi spelar {*fotboll|fot boll} på rasten.
          Jag har en ny {skol väska|*skolväska}.
          Mormor har en {*bokhylla|bok hylla}.
          Vi åt {jord gubbar|*jordgubbar}.
          Glöm inte {*tandborsten|tand borsten}!
          Barnen leker i {sand lådan|*sandlådan}.
          En {*brandbil|brand bil} körde förbi.
          Vi såg en {regn båge|*regnbåge}.
        `,
      },
      { rubrik: "Del D", instruktion: "Skriv ihop orden.", typ: "skriv", rader: sammansattaSkriv() },
      { rubrik: "Del E", instruktion: "Dela det sammansatta ordet i två ord.", typ: "skriv", rader: sammansattaDela() },
    ],
  },
  {
    id: "morfem-2-prefix-suffix",
    titel: "O-, miss-, -lig, -het",
    underrubrik: "Prefix och suffix",
    omrade: "Ordets byggstenar",
    steg: 2,
    feltyper: ["stavning.sarskrivning"],
    regel: [
      "Roten bär ordets betydelse: vän i ovänlig och vänskap.",
      "Prefix sätts före roten och ändrar betydelsen: o- (inte), miss- (fel), åter- (igen).",
      "Suffix sätts efter roten och gör ofta ett nytt ord: -lig (vänlig), -het (frihet), -skap (vänskap), -are (läsare), -bar (läsbar).",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Skriv motsatsen med prefixet o-.",
        typ: "skriv",
        rader: `
          lycklig → {olycklig}
          möjlig → {omöjlig}
          trevlig → {otrevlig}
          vänlig → {ovänlig}
          ärlig → {oärlig}
          säker → {osäker}
          viktig → {oviktig}
          rättvis → {orättvis}
          tydlig → {otydlig}
          snäll → {osnäll}
          artig → {oartig}
          vanlig → {ovanlig}
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Bilda ett nytt ord med suffixet.",
        typ: "skriv",
        rader: `
          vän + skap = {vänskap}
          fri + het = {frihet}
          trygg + het = {trygghet}
          läs + are = {läsare}
          bak + are = {bagare} (g i stället för k)
          läs + bar = {läsbar}
          drick + bar = {drickbar}
          tydlig + het = {tydlighet}
          barn + dom = {barndom}
          sjuk + dom = {sjukdom}
          vän + lig = {vänlig}
          tvätt + bar = {tvättbar}
          spel + are = {spelare}
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Välj det ord som passar.",
        typ: "val",
        rader: `
          Han {*missförstod|förstod|oförstod} frågan och svarade fel.
          Det är {*omöjligt|möjligt|möjlighet} att simma över Atlanten.
          Deras {vänlig|*vänskap|ovän} höll hela livet.
          Vi {*återvinner|vinner|missvinner} burkar och flaskor.
          Hon är en snabb {läsbar|*läsare|läsning}.
          Försöket {lyckades|*misslyckades} – det gick inte alls.
          Vattnet i bäcken är inte {drickare|*drickbart|drickning}.
          Det var {*orättvist|rättvisa|rätt} att bara en fick godis.
          Alla har rätt till {fri|*frihet|fritt}.
          En person som cyklar är en {*cyklist|cykelbar|cyklande}.
        `,
      },
      {
        rubrik: "Del D",
        instruktion: "Prefix eller suffix?",
        typ: "val",
        rader: `
          o- i ovän {*prefix|suffix}
          -lig i vänlig {prefix|*suffix}
          miss- i misslyckas {*prefix|suffix}
          -het i frihet {prefix|*suffix}
          -skap i vänskap {prefix|*suffix}
          be- i beskriva {*prefix|suffix}
          -are i läsare {prefix|*suffix}
          åter- i återvinna {*prefix|suffix}
          -bar i läsbar {prefix|*suffix}
          för- i förklara {*prefix|suffix}
        `,
      },
      { rubrik: "Del E", instruktion: "Bilda ett nytt ord. Ledtråden står i parentes.", typ: "skriv", rader: avledningarSkriv() },
      {
        rubrik: "Del F",
        instruktion: "Dela ordet i två delar: prefix + rot eller rot + suffix.",
        typ: "skriv",
        rader: `
          olycklig = {o} + {lycklig}
          missförstå = {miss} + {förstå}
          återvinna = {åter} + {vinna}
          beskriva = {be} + {skriva}
          omöjlig = {o} + {möjlig}
          förklara = {för} + {klara}
          misslyckas = {miss} + {lyckas}
          otrygg = {o} + {trygg}
          vänskap = {vän} + {skap}
          frihet = {fri} + {het}
          läsare = {läs} + {are}
          drickbar = {drick} + {bar}
          barndom = {barn} + {dom}
          trygghet = {trygg} + {het}
          vänlig = {vän} + {lig}
        `,
      },
    ],
  },
  {
    id: "morfem-3-rot-och-stavning",
    titel: "Hitta roten – stava rätt",
    underrubrik: "Rotmorfem, böjning och avledning",
    omrade: "Ordets byggstenar",
    steg: 3,
    feltyper: ["stavning.dubbelteckning", "stavning.sarskrivning"],
    regel: [
      "Roten stavas oftast likadant i alla ord som bildas av den: skriv – skriva – beskrivning.",
      "glad + t = glatt, röd + t = rött. Dubbelteckning försvinner ofta före en annan konsonant: känna – känd – kände.",
      "Böjning ger en ny form av samma ord (bilar, hoppade). Avledning ger ett nytt ord (vänlig, frihet).",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Skriv rätt form av ordet i parentesen.",
        typ: "skriv",
        rader: `
          Ett {glatt} barn. (glad)
          Ett {rött} hus. (röd)
          Ett {gott} äpple. (god)
          Ett {brett} band. (bred)
          Ett {sött} godis. (söt)
          Ett {vitt} papper. (vit)
          Ett {hett} bad. (het)
          Ett {fett} kött. (fet)
          Han {kände} henne väl. (känna, dåtid)
          Hon är {känd} i hela landet. (känna)
          Jag {glömde} nyckeln. (glömma, dåtid)
          Vi {tänkte} på dig. (tänka, dåtid)
          Hon {ställde} glaset på bordet. (ställa, dåtid)
          Han {fyllde} år i går. (fylla, dåtid)
          Jag {hörde} ett ljud. (höra, dåtid)
          De {byggde} en koja. (bygga, dåtid)
          Hon {kysste} honom. (kyssa, dåtid)
          Det är {känt} för alla. (känna)
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Böjning eller avledning?",
        typ: "val",
        rader: `
          bil → bilar {*böjning|avledning}
          vän → vänlig {böjning|*avledning}
          hoppa → hoppade {*böjning|avledning}
          fri → frihet {böjning|*avledning}
          stor → större {*böjning|avledning}
          läsa → läsare {böjning|*avledning}
          katt → katten {*böjning|avledning}
          dricka → drickbar {böjning|*avledning}
          snabb → snabbast {*böjning|avledning}
          skriva → beskrivning {böjning|*avledning}
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Skriv ett ord med samma rot.",
        typ: "skriv",
        rader: `
          Den som läser är en {läsare}.
          Något som går att äta är {ätbart/ätligt}.
          Att inte förstå rätt är att {missförstå}.
          Motsatsen till möjlig är {omöjlig}.
          När man är vänner har man {vänskap}.
          Den som spelar är en {spelare}.
          Att vinna tillbaka är att {återvinna}.
          Tiden när man är barn är {barndomen/barndom}.
        `,
      },
      { rubrik: "Del D", instruktion: "Skriv rätt form. Utgå från roten i parentesen.", typ: "skriv", rader: rotBojningSkriv() },
      {
        rubrik: "Del E",
        instruktion: "Skriv roten – den del som bär betydelsen.",
        typ: "skriv",
        rader: `
          beskrivning – roten är {skriv}
          ovänlig – roten är {vän}
          läsare – roten är {läs}
          spelade – roten är {spel}
          frihet – roten är {fri}
          misslyckas – roten är {lyck}
          oförklarlig – roten är {klar}
          tränare – roten är {trän}
          glädjande – roten är {glädj}
          hoppade – roten är {hopp}
          sjukdomar – roten är {sjuk}
          vänskapen – roten är {vän}
          upplösning – roten är {lös}
          byggnaden – roten är {bygg}
          lärarna – roten är {lär}
          otrolig – roten är {tro}
          utbildning – roten är {bild}
          dansare – roten är {dans}
        `,
      },
      {
        rubrik: "Del F",
        instruktion: "Böjning (ny form av samma ord) eller avledning (nytt ord)?",
        typ: "val",
        rader: `
          hund → hundar {*böjning|avledning}
          snäll → snällhet {böjning|*avledning}
          spela → spelade {*böjning|avledning}
          spela → spelare {böjning|*avledning}
          lätt → lättare {*böjning|avledning}
          lätt → lättnad {böjning|*avledning}
          tro → trolig {böjning|*avledning}
          tro → trodde {*böjning|avledning}
          bok → böcker {*böjning|avledning}
          sjuk → sjukdom {böjning|*avledning}
          glad → gladast {*böjning|avledning}
          öva → övning {böjning|*avledning}
          öva → övade {*böjning|avledning}
          vän → vännen {*böjning|avledning}
          vän → vänskap {böjning|*avledning}
          tydlig → tydlighet {böjning|*avledning}
          tydlig → tydligare {*böjning|avledning}
          bygga → byggnad {böjning|*avledning}
          bygga → byggde {*böjning|avledning}
          äta → ätbar {böjning|*avledning}
        `,
      },
    ],
  },

  /* ------------------------------ Textbindning ---------------------------- */
  {
    id: "textbindning-1-referensbindning",
    titel: "Han, den, därför, däremot",
    underrubrik: "Referensbindning, sambandsmarkörer och tematisk bindning",
    omrade: "Textbindning",
    steg: 2,
    feltyper: ["struktur.textbindning", "struktur.stycken"],
    regel: [
      "Syfta tillbaka i stället för att upprepa: Elsa har en hund. HON går ut med DEN.",
      "Du kan syfta med pronomen (hon, den, de), synonymer (hunden → valpen) eller ett ord för gruppen (äpplen och päron → frukten).",
      "Var tydlig: Sara träffade Moa. Hon var arg. – Vem? Skriv namnet om det kan missförstås.",
      "Sambandsmarkörer visar hur meningarna hänger ihop: tid (sedan), tillägg (dessutom), motsats (däremot), följd (därför).",
      "Tematisk bindning: varje mening tar upp något från den förra. Vi besökte en borg. BORGEN byggdes på 1300-talet.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som syftar tillbaka rätt.",
        typ: "val",
        rader: `
          Vi har en katt. {*Den|Det|De} heter Misse.
          Vi har ett marsvin. {Den|*Det|De} heter Pigge.
          Leo och Ali spelar fotboll. {Han|*De|Den} tränar varje dag.
          Mormor bakade bullar. {*De|Det|Hon} var goda.
          Mormor bakade bullar. {De|Det|*Hon} är bäst på att baka.
          Elsa har en ny cykel. {Hon|*Den|Det} är röd.
          Vi köpte äpplen, päron och bananer. All {*frukt|grönsak|godis} åt vi upp.
          Polisen grep en man. {*Mannen|En man|Polisen} hade stulit en cykel.
          Det var en gång en drake. {En drake|*Draken|Det} bodde i ett berg.
          Lärarna och eleverna åkte till museet. Där fick {*alla|han|den} se dinosaurier.
          Havet blir varmare och isarna smälter. {*Förändringarna|Isarna|Havet} påverkar många människor.
          Jag har två bröder. {Han|*De|Dem} är äldre än jag.
          Jag gav {de|*dem} varsin present.
          Valpen sov i korgen. {*Den|Han|Det} var trött efter promenaden.
          Greta började skolstrejka. Snart följde miljoner unga {*hennes|hans|deras} exempel.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv om så att du inte upprepar ordet. Använd han, hon, den, det eller de.",
        typ: "ratta",
        rader: `
          Elsa har en hund. Elsa går ut med hunden varje dag. => Elsa har en hund. Hon går ut med den varje dag.
          Pappa köpte en bil. Bilen är blå. => Pappa köpte en bil. Den är blå.
          Barnen byggde en koja. Barnen lekte i kojan hela dagen. => Barnen byggde en koja. De lekte i den hela dagen.
          Omar har ett husdjur. Husdjuret är en orm. => Omar har ett husdjur. Det är en orm.
          Mormor ringde. Mormor ville prata med mig. => Mormor ringde. Hon ville prata med mig.
          Vi köpte glass. Glassen smälte i solen. => Vi köpte glass. Den smälte i solen.
          Pelle och Lisa gick hem. Pelle och Lisa var trötta. => Pelle och Lisa gick hem. De var trötta.
          Jag har en bror. Min bror heter Sam. => Jag har en bror. Han heter Sam.
        `,
      },
      { rubrik: "Del C", instruktion: "Välj det ord som syftar tillbaka rätt.", typ: "val", rader: SYFTNING_RADER },
      {
        rubrik: "Del D",
        instruktion: "Välj den sambandsmarkör som passar.",
        typ: "val",
        rader: `
          Många vill förbjuda mobiler i skolan. {*Däremot|Dessutom|Därför} menar andra att de är ett hjälpmedel.
          Mobiler stör lektionerna. {*Dessutom|Däremot|Först} kan de leda till mobbning.
          {*För det första|Däremot|Till slut} sover tonåringar sämre på morgonen.
          {Först|*Sammanfattningsvis|Dessutom} finns det argument åt båda hållen.
          Det regnade hela dagen. {*Därför|Däremot|Dessutom} stannade vi inne.
          Vi packade väskorna. {*Därefter|Däremot|Därför} åkte vi till flygplatsen.
          Metoden är billig. {*Å andra sidan|Därför|Först} tar den lång tid.
          Han var sjuk. {Därför|*Ändå|Dessutom} spelade han matchen.
          {*Till exempel|Däremot|Till slut} kan man cykla i stället för att åka bil.
          Plast skadar djuren i havet. {*Därför|Däremot|Först} behövs nya regler.
          Vi åt middag. {*Efter det|Däremot|Dessutom} tittade vi på film.
          Sommaren var varm. Vintern {*däremot|därför|dessutom} var mycket kall.
          Läxor ger extra träning. {*Samtidigt|Först|Till slut} kan de skapa stress.
          {*Avslutningsvis|För det första|Dessutom} vill jag säga att alla kan hjälpa till.
        `,
      },
      {
        rubrik: "Del E",
        instruktion: "Vilken mening passar bäst som fortsättning?",
        typ: "val",
        rader: `
          Vi besökte en gammal borg. {*Borgen byggdes på 1300-talet.|Hundar är trevliga.|Jag gillar pizza.}
          Många unga sover för lite. {Fotboll är populärt.|*Sömnbristen gör det svårare att koncentrera sig.|Det finns många hus.}
          Igelkotten är ett däggdjur. {*Den äter maskar och sniglar.|Bilar är snabba.|Vi åkte till Norge.}
          Plast är ett stort miljöproblem. {*Varje år hamnar miljontals ton i haven.|Jag har en blå jacka.|Katter sover mycket.}
          Klockan var tre på natten när telefonen ringde. {*Amira famlade efter den i mörkret.|Telefoner uppfanns på 1800-talet.|Solen sken.}
          Vi köpte en karta. {*Kartan visade en stig genom skogen.|Skogen är grön.|Jag gillar glass.}
        `,
      },
      {
        rubrik: "Del F",
        instruktion: "Vad visar sambandsmarkören?",
        typ: "val",
        rader: `
          dessutom {*tillägg|motsats|tid|följd}
          däremot {tillägg|*motsats|tid|följd}
          därefter {tillägg|motsats|*tid|följd}
          därför {tillägg|motsats|tid|*följd}
          även {*tillägg|motsats|tid|följd}
          men {tillägg|*motsats|tid|följd}
          sedan {tillägg|motsats|*tid|följd}
          alltså {tillägg|motsats|tid|*följd}
          vidare {*tillägg|motsats|tid|följd}
          ändå {tillägg|*motsats|tid|följd}
          till slut {tillägg|motsats|*tid|följd}
          följaktligen {tillägg|motsats|tid|*följd}
          också {*tillägg|motsats|tid|följd}
          å andra sidan {tillägg|*motsats|tid|följd}
          samtidigt {tillägg|motsats|*tid|följd}
          så {tillägg|motsats|tid|*följd}
          likaså {*tillägg|motsats|tid|följd}
          trots det {tillägg|*motsats|tid|följd}
          först {tillägg|motsats|*tid|följd}
          därmed {tillägg|motsats|tid|*följd}
          ytterligare {*tillägg|motsats|tid|följd}
          emellertid {tillägg|*motsats|tid|följd}
          efter en stund {tillägg|motsats|*tid|följd}
          således {tillägg|motsats|tid|*följd}
          dels … dels {*tillägg|motsats|tid|följd}
          i stället {tillägg|*motsats|tid|följd}
          nästa dag {tillägg|motsats|*tid|följd}
          på så sätt {tillägg|motsats|tid|*följd}
        `,
      },
    ],
  },

];
