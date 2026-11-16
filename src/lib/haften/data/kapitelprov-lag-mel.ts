import { kapitelprov as p } from "./kapitelprov-bygg";

export const KAPITELPROV_LAG_MEL = [
  /* ================================ Lågstadiet ============================== */
  p("lagstadiet", "ordklasser", [
    {
      i: "Vilken ordklass är ordet?",
      t: "val",
      r: `
        katt {*substantiv|verb|adjektiv}
        simma {substantiv|*verb|adjektiv}
        söt {substantiv|verb|*adjektiv}
        stol {*substantiv|verb|adjektiv}
        klättra {substantiv|*verb|adjektiv}
        kall {substantiv|verb|*adjektiv}
        moster {*substantiv|verb|adjektiv}
        måla {substantiv|*verb|adjektiv}
        rund {substantiv|verb|*adjektiv}
        päron {*substantiv|verb|adjektiv}
      `,
    },
    {
      i: "Skriv ordet i flertal.",
      t: "skriv",
      r: `
        en penna – två {pennor}
        en häst – två {hästar}
        en ko – två {kor}
        en stjärna – två {stjärnor}
        ett äpple – två {äpplen}
      `,
    },
    {
      i: "Skriv verbet i dåtid.",
      t: "skriv",
      r: `
        I dag målar jag. I går {målade} jag.
        I dag hoppar jag. I går {hoppade} jag.
        I dag dricker jag. I går {drack} jag.
        I dag står jag. I går {stod} jag.
        I dag åker jag. I går {åkte} jag.
      `,
    },
  ]),
  p("lagstadiet", "morfem", [
    {
      i: "Skriv ihop orden till ett ord.",
      t: "skriv",
      r: `
        snö + flinga = {snöflinga}
        sol + hatt = {solhatt}
        mjölk + paket = {mjölkpaket}
        cykel + hjälm = {cykelhjälm}
        regn + rock = {regnrock}
        brand + man = {brandman}
        lek + plats = {lekplats}
        natt + lampa = {nattlampa}
      `,
    },
    {
      i: "Vilka två ord är ordet byggt av?",
      t: "val",
      r: `
        husbåt = {*hus + båt|hu + sbåt|husb + åt}
        solros = {so + lros|*sol + ros|solr + os}
        ishall = {*is + hall|ish + all|i + shall}
        matbord = {ma + tbord|matb + ord|*mat + bord}
        hundkoja = {*hund + koja|hun + dkoja|hundk + oja}
        bokstav = {bo + kstav|*bok + stav|boks + tav}
      `,
    },
    {
      i: "Vilket ord betyder flera?",
      t: "val",
      r: `
        {*stolar|stolen|stol}
        {kon|*kor|ko}
        {flickan|flicka|*flickor}
        {*bilar|bilen|bil}
        {hunden|*hundar|hund}
        {lampan|lampa|*lampor}
      `,
    },
  ]),
  p("lagstadiet", "satsdelar", [
    {
      i: "Vem gör något i meningen?",
      t: "val",
      r: `
        Kalle springer fort. Vem? {*Kalle|springer|fort}
        Mormor sover i stolen. Vem? {sover|*Mormor|stolen}
        I dag simmar Elin. Vem? {I dag|simmar|*Elin}
        Fåglarna flyger. Vem? {*Fåglarna|flyger}
        Min hund gräver. Vem? {gräver|*Min hund}
        På kvällen läser pappa. Vem? {kvällen|läser|*pappa}
        Barnen bygger en koja. Vem? {*Barnen|bygger|koja}
        Ugglan tittar på oss. Vem? {tittar|*Ugglan|oss}
        Läraren ler. Vem? {*Läraren|ler}
        Där borta cyklar Sam. Vem? {Där borta|cyklar|*Sam}
      `,
    },
    {
      i: "Vad händer i meningen? Välj verbet.",
      t: "val",
      r: `
        Mormor stickar en mössa. {Mormor|*stickar|mössa}
        Katten jamar. {Katten|*jamar}
        Vi åker buss. {Vi|*åker|buss}
        Leo kastar bollen. {Leo|*kastar|bollen}
        Snön faller. {Snön|*faller}
        Hon skriver ett brev. {Hon|*skriver|brev}
        På morgonen äter vi gröt. {morgonen|*äter|gröt}
        Grodan hoppar i vattnet. {Grodan|*hoppar|vattnet}
        Pappa diskar. {Pappa|*diskar}
        Bebisen skrattar högt. {Bebisen|*skrattar|högt}
      `,
    },
  ]),
  p("lagstadiet", "meningsbyggnad", [
    {
      i: "Är det en hel mening?",
      t: "val",
      r: `
        Kaninen äter en morot. {*hel mening|inte hel}
        En stor röd ballong. {hel mening|*inte hel}
        Vi spelar kort. {*hel mening|inte hel}
        Springer till skolan. {hel mening|*inte hel}
        Mormor kommer i morgon. {*hel mening|inte hel}
        I skogen bakom huset. {hel mening|*inte hel}
        Det blåser. {*hel mening|inte hel}
        Min nya cykel. {hel mening|*inte hel}
      `,
    },
    {
      i: "Skriv meningen med stor bokstav och punkt.",
      t: "ratta",
      r: `
        vi går till parken => Vi går till parken.
        mamma köper mjölk => Mamma köper mjölk.
        katten jagar en fluga => Katten jagar en fluga.
        jag har en blå tröja => Jag har en blå tröja.
        det är kallt ute => Det är kallt ute.
        lisa bor i umeå => Lisa bor i Umeå.
      `,
    },
    {
      i: "Välj början så att det blir en fråga.",
      t: "val",
      r: `
        {*Har du|Du har} en penna?
        {Vi ska|*Ska vi} bada?
        {*Kommer hon|Hon kommer} snart?
        {Det snöar|*Snöar det} ute?
        {*Vill ni|Ni vill} ha mer saft?
        {Du kan|*Kan du} hjälpa mig?
      `,
    },
  ]),
  p("lagstadiet", "samband", [
    {
      i: "Välj eftersom, så eller om.",
      t: "val",
      r: `
        Jag tar på mig vantar {*eftersom|så|om} det är kallt.
        Det var mörkt, {eftersom|*så|om} vi tände en lampa.
        {Eftersom|Så|*Om} du är trött, kan du vila.
        Vi skrattade {*eftersom|så|om} filmen var rolig.
        Jag var törstig, {eftersom|*så|om} jag drack vatten.
        Du får gå ut {eftersom|så|*om} du har gjort läxan.
        Bollen var borta, {eftersom|*så|om} vi letade.
        Han grät {*eftersom|så|om} han hade tappat glassen.
        {Eftersom|Så|*Om} det slutar regna, går vi ut.
        Blomman dog {*eftersom|så|om} den inte fick vatten.
        Det var halt, {eftersom|*så|om} hon ramlade.
        Vi stannar hemma {eftersom|så|*om} du blir sjuk.
        Fisken simmade bort {*eftersom|så|om} den blev rädd.
        Jag ringer {så|därför|*om} jag kommer sent.
      `,
    },
    {
      i: "Vad berättar ordet med STORA BOKSTÄVER?",
      t: "val",
      r: `
        Vi åt glass EFTERSOM det var varmt. {*varför|vad som händer sedan|vad som måste hända först}
        Det var varmt, SÅ vi åt glass. {varför|*vad som händer sedan|vad som måste hända först}
        OM det är varmt, äter vi glass. {varför|vad som händer sedan|*vad som måste hända först}
        Hon log FÖR ATT hon var glad. {*varför|vad som händer sedan|vad som måste hända först}
        Han var trött. DÄRFÖR sov han. {varför|*vad som händer sedan|vad som måste hända först}
        Du får en kaka OM du dukar. {varför|vad som händer sedan|*vad som måste hända först}
      `,
    },
  ]),
  p("lagstadiet", "skiljetecken", [
    {
      i: "Välj rätt tecken i slutet.",
      t: "val",
      r: `
        Vill du ha mer glass{*?|.|!}
        Vi bor i ett gult hus{?|*.|!}
        Akta, bilen kommer{?|.|*!}
        Var bor du{*?|.|!}
        Min hund heter Bus{?|*.|!}
        Hjälp{?|.|*!}
        När slutar skolan{*?|.|!}
        Hon har en röd mössa{?|*.|!}
        Vad roligt det var{?|.|*!}
        Hur gammal är du{*?|.|!}
        Solen skiner i dag{?|*.|!}
        Får jag följa med{*?|.|!}
        Stopp{?|.|*!}
        Pappa lagar mat{?|*.|!}
      `,
    },
    {
      i: "Skriv meningarna rätt med stor bokstav och rätt tecken.",
      t: "ratta",
      r: `
        var är min väska => Var är min väska?
        vi åker hem nu => Vi åker hem nu.
        kan du simma => Kan du simma?
        hunden sover. katten leker => Hunden sover. Katten leker.
        vad heter du => Vad heter du?
        jag är sju år => Jag är sju år.
      `,
    },
  ]),
  p("lagstadiet", "stavning", [
    {
      i: "Välj rätt stavning.",
      t: "val",
      r: `
        Vi ska {*hoppa|hopa} hopprep.
        Jag fick en {*klocka|kloka} i present.
        Han har en {*katt|kat|kkatt}.
        Vi badar i {*sjön|schön|chön}.
        Hon räknade till {*tjugo|kjugo|schugo}.
        Vi åt {*glass|glas} på stranden.
        Fåglarna {*sjunger|schunger|chunger}.
        Det är en {*stjärna|sjärna|schärna} på himlen.
        Jag har en {*kjol|tjol|schol}.
        Hon har {*mössa|mösa} på sig.
        Vi har en {*kanin|kannin}.
        Pojken {*springer|sprinnger} fort.
        Vi bor i ett {*hus|huss}.
        Jag vill {*leka|lecka} med dig.
      `,
    },
    {
      i: "Stor eller liten bokstav?",
      t: "val",
      r: `
        Min kompis heter {*Ali|ali}.
        Vi åker till {*Göteborg|göteborg}.
        Jag fyller år i {*maj|Maj}.
        I dag är det {*tisdag|Tisdag}.
        Hunden heter {*Sigge|sigge}.
        Vi bor i {*Sverige|sverige}.
      `,
    },
  ]),
  p("lagstadiet", "textbindning", [
    {
      i: "Välj först, sedan eller till slut.",
      t: "val",
      r: `
        {*Först|Sedan|Till slut} tog vi på oss stövlarna. Sedan gick vi ut. Till slut hoppade vi i vattenpölar.
        Först fyllde vi hinken med sand. {Först|*Sedan|Till slut} vände vi den. Till slut stod där ett torn.
        Först öppnade jag boken. Sedan läste jag i en timme. {Först|Sedan|*Till slut} somnade jag.
        {*Först|Sedan|Till slut} skalade vi äpplena. Sedan bakade vi en paj. Till slut åt vi den.
        Först plockade vi blåbär. {Först|*Sedan|Till slut} sorterade vi dem. Till slut gjorde vi sylt.
        Först sydde hon en docka. Sedan målade hon ett ansikte. {Först|Sedan|*Till slut} fick dockan ett namn.
        {*Först|Sedan|Till slut} ringde klockan. Sedan sprang alla ut. Till slut var skolgården full.
        Först blåste det. {Först|*Sedan|Till slut} började det regna. Till slut kom solen fram.
      `,
    },
    {
      i: "Välj det ord som pekar tillbaka rätt.",
      t: "val",
      r: `
        Moa har en hamster. {*Den|Det|Han} heter Pip.
        Vi har ett akvarium. {Den|*Det|Hon} står i köket.
        Oskar fyller år. {*Han|Hon|Den} får en cykel.
        Farmor ringde. {Han|*Hon|Det} ville prata med pappa.
        Jag och Sam leker. {De|*Vi|Han} bygger ett slott.
        Mina bröder är ute. {Han|Vi|*De} spelar fotboll.
        Kakan är god. {*Den|Det|De} är nybakad.
        Bordet är trasigt. {Den|*Det|Han} har tre ben.
      `,
    },
    {
      i: "Skriv om så att du inte upprepar ordet.",
      t: "ratta",
      r: `
        Ella har en häst. Hästen heter Blixt. => Ella har en häst. Den heter Blixt.
        Farfar fiskar. Farfar fångar en gädda. => Farfar fiskar. Han fångar en gädda.
        Vi har ett tält. Tältet är grönt. => Vi har ett tält. Det är grönt.
        Lisa och Moa sjunger. Lisa och Moa sjunger fint. => Lisa och Moa sjunger. De sjunger fint.
      `,
    },
  ]),

  /* ============================== Mellanstadiet ============================= */
  p("mellanstadiet", "ordklasser", [
    {
      i: "Vilken ordklass är ordet med STORA BOKSTÄVER?",
      t: "val",
      r: `
        HON läser en bok. {substantiv|*pronomen|verb|adverb}
        Boken ligger UNDER sängen. {adverb|substantiv|*preposition|pronomen}
        Vi har FYRA kaniner. {adjektiv|*räkneord|substantiv|pronomen}
        Han springer FORT. {adjektiv|verb|*adverb|preposition}
        Det var en LÅNG film. {adverb|*adjektiv|substantiv|verb}
        Mormor STICKAR en tröja. {substantiv|adjektiv|*verb|adverb}
        Vi åkte till STRANDEN. {*substantiv|adjektiv|verb|preposition}
        Katten sover I korgen. {adverb|*preposition|pronomen|räkneord}
        De kom HEM sent. {substantiv|preposition|*adverb|verb}
        Det är MIN cykel. {adjektiv|substantiv|*pronomen|räkneord}
      `,
    },
    {
      i: "Böj adjektivet så att det passar.",
      t: "skriv",
      r: `
        ett {stort} hus (stor)
        två {röda} bilar (röd)
        den {gamla} katten (gammal)
        ett {kallt} bad (kall)
        en {glad} hund (glad)
      `,
    },
    {
      i: "Skriv verbet i har-form (supinum) – formen som står efter har.",
      t: "skriv",
      r: `
        Jag har {läst} boken. (läsa)
        Vi har {ätit} middag. (äta)
        Hon har {sovit} länge. (sova)
        De har {spelat} match. (spela)
        Du har {skrivit} ett brev. (skriva)
      `,
    },
  ]),
  p("mellanstadiet", "morfem", [
    {
      i: "Skriv motsatsen med o-.",
      t: "skriv",
      r: `
        ärlig → {oärlig}
        klok → {oklok}
        bekväm → {obekväm}
        sann → {osann}
        skadad → {oskadad}
      `,
    },
    {
      i: "Vilken del är roten?",
      t: "val",
      r: `
        ovänlig {o|*vän|lig}
        läsare {*läs|are}
        frihet {*fri|het}
        misslyckas {miss|*lyck|as}
        oärlig {o|*ärlig}
      `,
    },
    {
      i: "Skriv rätt form. Utgå från roten.",
      t: "skriv",
      r: `
        ett {svart} lock (svart)
        ett {fritt} land (fri)
        ett {sött} äpple (söt)
        ett {hett} bad (het)
        ett {blått} hav (blå)
      `,
    },
    {
      i: "Bilda ett nytt ord med suffixet.",
      t: "skriv",
      r: `
        simma + are = {simmare}
        sjuk + dom = {sjukdom}
        kamrat + skap = {kamratskap}
        tvätt + bar = {tvättbar}
        trött + het = {trötthet}
      `,
    },
  ]),
  p("mellanstadiet", "satsdelar", [
    {
      i: "Vilken satsdel är delen med STORA BOKSTÄVER?",
      t: "val",
      r: `
        MORMOR bakar bröd. {*subjekt|predikat|objekt|adverbial}
        Mormor BAKAR bröd. {subjekt|*predikat|objekt|adverbial}
        Mormor bakar BRÖD. {subjekt|predikat|*objekt|adverbial}
        Mormor bakar bröd PÅ SÖNDAGAR. {subjekt|predikat|objekt|*adverbial}
        I SOMRAS seglade vi. {subjekt|predikat|objekt|*adverbial}
        I somras SEGLADE vi. {subjekt|*predikat|objekt|adverbial}
        I somras seglade VI. {*subjekt|predikat|objekt|adverbial}
        Hunden hittade EN PINNE. {subjekt|predikat|*objekt|adverbial}
        Barnen sjöng HÖGT. {subjekt|predikat|objekt|*adverbial}
        DEN NYA LÄRAREN heter Anna. {*subjekt|predikat|objekt|adverbial}
        Vi besökte MUSEET i går. {subjekt|predikat|*objekt|adverbial}
        Vi besökte museet I GÅR. {subjekt|predikat|objekt|*adverbial}
        Klassen PLANERAR en fest. {subjekt|*predikat|objekt|adverbial}
        Efter maten spelade VI kort. {*subjekt|predikat|objekt|adverbial}
        Efter maten spelade vi KORT. {subjekt|predikat|*objekt|adverbial}
        UTE I TRÄDGÅRDEN sover katten. {subjekt|predikat|objekt|*adverbial}
      `,
    },
    {
      i: "Välj rätt svar.",
      t: "val",
      r: `
        Hur hittar du subjektet? {*Fråga vem eller vad + verbet.|Fråga var det händer.|Ta det sista ordet.}
        Hur hittar du objektet? {Fråga när det händer.|*Fråga vem eller vad + verbet + subjektet.|Ta det första ordet.}
        Vad svarar ett adverbial på? {vem eller vad|*när, var eller hur|vilket verb}
        Vad kallas verbet i en mening? {subjekt|*predikat|objekt}
      `,
    },
  ]),
  p("mellanstadiet", "meningsbyggnad", [
    {
      i: "Välj den ordföljd som är rätt.",
      t: "val",
      r: `
        I går {*åt vi|vi åt} pizza.
        På lördag {vi ska|*ska vi} till badhuset.
        Efter skolan {*spelar jag|jag spelar} piano.
        I somras {vi var|*var vi} i Norge.
        Nu {*börjar filmen|filmen börjar}.
        På morgonen {jag dricker|*dricker jag} te.
        Sedan {*gick vi|vi gick} hem.
        I morgon {hon kommer|*kommer hon} tillbaka.
      `,
    },
    {
      i: "Är delen med STORA BOKSTÄVER en huvudsats eller en bisats?",
      t: "val",
      r: `
        VI GICK HEM när det blev mörkt. {*huvudsats|bisats}
        Vi gick hem NÄR DET BLEV MÖRKT. {huvudsats|*bisats}
        EFTERSOM JAG VAR TRÖTT somnade jag tidigt. {huvudsats|*bisats}
        Eftersom jag var trött SOMNADE JAG TIDIGT. {*huvudsats|bisats}
        Jag vet ATT DU GILLAR HUNDAR. {huvudsats|*bisats}
        BOKEN är spännande. {*huvudsats|bisats}
      `,
    },
    {
      i: "Skriv om meningen med rätt ordföljd.",
      t: "ratta",
      r: `
        I går vi åkte till stan. => I går åkte vi till stan.
        Efter maten jag diskade. => Efter maten diskade jag.
        På vintern vi åker skidor. => På vintern åker vi skidor.
        Jag vet att du kommer inte. => Jag vet att du inte kommer.
        Sedan hon sprang hem. => Sedan sprang hon hem.
        När jag kom hem jag åt. => När jag kom hem åt jag.
      `,
    },
  ]),
  p("mellanstadiet", "samband", [
    {
      i: "Välj det ord som passar bäst.",
      t: "val",
      r: `
        Vi stannade inne {*eftersom|så|om} det stormade.
        Det stormade, {eftersom|*så|om} vi stannade inne.
        {Eftersom|Därför|*Om} du övar, blir du bättre.
        Isen var tunn. {Eftersom|*Därför|Om} fick ingen åka skridskor.
        Hon fick ont i halsen {så|*på grund av att|om} hon hade skrikit.
        Ta med mössa {så|därför|*ifall} det blir kallt.
        Han hade glömt nyckeln, {eftersom|*vilket gjorde att|om} han inte kom in.
        {*Eftersom|Därför|Så} det var lördag, sov vi länge.
        Vi missade tåget. {Eftersom|*Därför|Om} kom vi sent.
        Vi går på bio {eftersom|därför|*om} vi hinner.
      `,
    },
    {
      i: "Visar meningen orsak, följd eller villkor?",
      t: "val",
      r: `
        Vi åkte hem eftersom det började regna. {*orsak|följd|villkor}
        Det började regna, så vi åkte hem. {orsak|*följd|villkor}
        Om det börjar regna, åker vi hem. {orsak|följd|*villkor}
        Han vann. Därför fick han en medalj. {orsak|*följd|villkor}
        Ifall du är hungrig finns det mackor. {orsak|följd|*villkor}
        Matchen ställdes in på grund av snön. {*orsak|följd|villkor}
      `,
    },
    {
      i: "Skriv om meningen så att sambandsordet blir rätt.",
      t: "ratta",
      r: `
        Vi gick in därför det var kallt. => Vi gick in eftersom det var kallt.
        Det var kallt, eftersom vi gick in. => Det var kallt, så vi gick in.
        Därför du vill, kan du följa med. => Om du vill, kan du följa med.
        Hon var sjuk, eftersom hon stannade hemma. => Hon var sjuk, så hon stannade hemma.
      `,
    },
  ]),
  p("mellanstadiet", "skiljetecken", [
    {
      i: "Ska det stå komma? (_ = inget komma)",
      t: "val",
      r: `
        Vi köpte äpplen{*,|_} päron och bananer.
        Jag gillar katter{,|*_} och hundar.
        Hon ville stanna{*,|_} men hon måste gå.
        Ta med penna{*,|_} sudd och linjal.
        Han är snabb{,|*_} och stark.
        Jag ringde{*,|_} men ingen svarade.
        Vi åkte till Malmö{*,|_} Lund och Ystad.
        Mamma{,|*_} och pappa kommer i morgon.
      `,
    },
    {
      i: "Skriv repliken med talstreck. Ny talare – ny rad.",
      t: "ratta",
      r: `
        Kommer du frågade Ali. => – Kommer du? frågade Ali.
        Ja svarade Elsa. => – Ja, svarade Elsa.
        Vad heter du undrade hon. => – Vad heter du? undrade hon.
        Hjälp skrek pojken. => – Hjälp! skrek pojken.
      `,
    },
    {
      i: "Välj rätt tecken.",
      t: "val",
      r: `
        Vad är klockan{*?|.|!}
        Ta med följande{*:|,|.} matsäck, vatten och mössa.
        Vi åkte hem{?|*.|!}
        Hon sa{*:|?|!} ”Nu går vi.”
        Sluta{?|.|*!}
        Packa detta{*:|?|!} tandborste, pyjamas och bok.
        Vem har ätit min kaka{*?|.|:}
        Vi har tre katter{?|*.|:}
      `,
    },
  ]),
  p("mellanstadiet", "stavning", [
    {
      i: "Välj rätt stavning.",
      t: "val",
      r: `
        Jag har en ny {*skjorta|sjorta|schorta}.
        Vi gick till {*kyrkan|tjyrkan|chyrkan}.
        Han vill {*hjälpa|jälpa|gjälpa} till.
        Det är {*ljust|just|hljust} ute.
        Vi såg ett {*djur|jur|gjur} i skogen.
        Hon {*gjorde|jorde|djorde} läxan.
        Det var {*sju|schu|chu} katter.
        Hon är en glad {*tjej|kjej|schej}.
      `,
    },
    {
      i: "Ett eller två m/n?",
      t: "val",
      r: `
        Jag är {*hem|hemm} nu.
        Vi är {*hemma|hema}.
        Han går {*fram|framm}.
        Lampan i {rumet|*rummet} är tänd.
        Det var {*dumt|dummt} gjort.
        Det kan vara {*vem|vemm} som helst.
      `,
    },
    {
      i: "O eller å?",
      t: "val",
      r: `
        Jag vill {*sova|såva}.
        Vi åker {*båt|bot}.
        Han är min {*son|sån}.
        Vi ska {*gå|go} hem.
        Hon sjöng en {*sång|song}.
        Kan du {*komma|kåmma}?
      `,
    },
  ]),
  p("mellanstadiet", "ordbildning", [
    {
      i: "Sätt ihop orden. Tänk på foge-s.",
      t: "skriv",
      r: `
        tidning + bud = {tidningsbud}
        arbete + dag = {arbetsdag}
        skola + bänk = {skolbänk}
        födelsedag + fest = {födelsedagsfest}
        fotboll + lag = {fotbollslag}
        sommar + lov = {sommarlov}
      `,
    },
    {
      i: "Skriv ut förkortningen.",
      t: "skriv",
      r: `
        t.ex. = {till exempel}
        osv. = {och så vidare}
        bl.a. = {bland annat}
        m.m. = {med mera}
        kl. = {klockan}
        ca = {cirka}
      `,
    },
    {
      i: "Sammansatt ord eller avledning (med prefix eller suffix)?",
      t: "val",
      r: `
        snögubbe {*sammansatt|avledning}
        olycklig {sammansatt|*avledning}
        vänskap {sammansatt|*avledning}
        regnjacka {*sammansatt|avledning}
        läsbar {sammansatt|*avledning}
        kaffekopp {*sammansatt|avledning}
        missförstå {sammansatt|*avledning}
        bokhylla {*sammansatt|avledning}
      `,
    },
  ]),
  p("mellanstadiet", "textbindning", [
    {
      i: "Välj det sambandsord som passar.",
      t: "val",
      r: `
        Vi packade väskan. {*Sedan|Men|Eftersom} åkte vi.
        Jag ville spela, {*men|därför|sedan} det var stängt.
        Det regnade. {Men|*Därför|Först} tog vi bussen.
        Han är snäll. {*Dessutom|Därför|Men} är han rolig.
        {*Först|Därför|Men} läste vi texten. Sedan svarade vi på frågorna.
        Hon tränade mycket. {Först|*Till slut|Men} vann hon.
        Filmen var lång, {*men|så|eftersom} den var bra.
        Vi var hungriga. {*Därför|Men|Dessutom} lagade vi mat.
      `,
    },
    {
      i: "Vem eller vad syftar ordet med STORA BOKSTÄVER på?",
      t: "val",
      r: `
        Sara och Moa spelar. HON vinner. Ordet är otydligt eftersom {*det kan vara både Sara och Moa|det inte syftar på någon}.
        Leo hittade en valp. HAN tog med DEN hem. DEN = {Leo|*valpen}
        Vi köpte äpplen och päron. FRUKTEN var god. FRUKTEN = {*äpplena och päronen|en ny frukt}
        Kalle tappade bollen. HAN letade efter den. HAN = {*Kalle|bollen}
        Pappa lagade cykeln. SEDAN var DEN som ny. DEN = {pappa|*cykeln}
        Ali har två systrar. DE heter Mina och Sara. DE = {*systrarna|Ali}
        Klassen åkte till zoo. DÄR såg de lejon. DÄR = {*på zoo|i klassen}
        Mormor bakade en tårta. DEN tog slut direkt. DEN = {mormor|*tårtan}
      `,
    },
    {
      i: "Välj rätt svar.",
      t: "val",
      r: `
        När ska du börja ett nytt stycke? {*När något nytt händer eller ett nytt ämne börjar.|Efter varje mening.|Aldrig.}
        Vilket ord passar för att börja ett nytt stycke? {*Nästa dag|Och|Men}
        Vad är bra textbindning? {*Att meningarna hänger ihop.|Att alla meningar börjar med jag.|Att texten är kort.}
        Hur gör du för att inte upprepa samma ord? {*Använder pronomen som han, hon och den.|Skriver ordet två gånger.|Stryker meningen.}
      `,
    },
  ]),
];
