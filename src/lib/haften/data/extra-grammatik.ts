import type { HafteKalla } from "../typer";

export const EXTRA_GRAMMATIK: HafteKalla[] = [
  {
    id: "grammatik-4-verbform",
    titel: "Att bli, inte att blir",
    underrubrik: "Rätt verbform efter att, ska, kan och har",
    omrade: "Grammatik",
    steg: 2,
    feltyper: ["grammatik.verbform", "grammatik.bojning"],
    regel: [
      "Efter att och efter hjälpverb som ska, kan, vill, måste och får står verbet i infinitiv (grundform): att bli, jag ska gå, hon kan simma.",
      "Nutid (presens) slutar oftast på -r eller -er: blir, gäller, betyder, läser. Skriv aldrig 'att blir' eller 'det gällar'. Men om det kommer ett subjekt efter att blir det nutid: Jag hoppas att du blir frisk.",
      "Dåtid (preteritum) står ensam: Jag gjorde läxan. Efter har och hade står supinum: Jag har gjort läxan. Hon hade skrivit klart.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj rätt verbform.",
        typ: "val",
        rader: `
          Det är svårt att {blir|*bli} vuxen.
          Jag vill {*lära|lär} mig spela gitarr.
          Regeln {gällar|*gäller} alla elever.
          Vad {betydar|*betyder} ordet?
          Hon måste {*gå|går} hem nu.
          Jag har {gjorde|*gjort} läxan.
          I går {*gjorde|gjort} vi en utflykt.
          Vi ska {åker|*åka} till Göteborg.
          Det är viktigt att {*få|får} sova.
          Han kan {springer|*springa} fort.
          Det {*gäller|gällar} att vara snabb.
          Hon har {skrev|*skrivit} en dikt.
          Jag glömde att {ringer|*ringa} mormor.
          Vi har {*varit|var} i Spanien.
          Du får inte {*glömma|glömmer} nyckeln.
          Det {*betyder|betydar} mycket för mig.
          Jag tycker om att {läser|*läsa}.
          Han har {*sprungit|sprang} fem kilometer.
          I somras {*var|varit} vi i fjällen.
          Jag vill inte {blir|*bli} sjuk.
          Hon {*kör|köra} bil till jobbet varje dag.
          Vi har {åt|*ätit} middag.
          Kan du {hjälper|*hjälpa} mig?
          Han {*vet|veta} inte svaret.
          Jag har aldrig {såg|*sett} en val.
          Det är roligt att {*spela|spelar} fotboll.
          Läraren {*förklarar|förklara} uppgiften.
          Vi måste {städar|*städa} rummet.
          Hon har {*bott|bodde} här i tio år.
          Förra veckan {*bodde|bott} vi hos farmor.
          Man behöver inte {är|*vara} rädd.
          Det {*händer|händar} ofta.
          Jag har {*fått|fick} ett brev.
          Ska vi {*äta|äter} nu?
          Hon {*berättar|berätta} alltid roliga historier.
          Jag försökte att {*förstå|förstår} uppgiften.
          Han hade {*glömt|glömde} sin väska.
          De hade {skrev|*skrivit} klart provet.
          Jag lovar att {*komma|kommer} i tid.
          Det är dags att {går|*gå} hem.
          Vi {*får|få} gå ut på rasten.
          Hon vill {blir|*bli} läkare.
          Jag hoppas att du {*blir|bli} frisk snart.
          Det är bra att {*vara|är} förberedd.
          Det är bra att du {*är|vara} förberedd.
          Allt {*verkar|verka} lugnt.
          Han har {*tagit|tog} bussen hem.
          Vi brukar {spelar|*spela} kort på kvällen.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv verbet i rätt form. Grundformen står i parentesen.",
        typ: "skriv",
        rader: `
          Det är svårt att {bli} vuxen. (bli)
          Regeln {gäller} alla. (gälla)
          Vad {betyder} det? (betyda)
          Jag har {gjort} läxan. (göra)
          I går {gjorde} jag läxan. (göra)
          Hon har {skrivit} ett brev. (skriva)
          Han ska {spela} match i kväll. (spela)
          Vi har {varit} trötta hela veckan. (vara)
          Jag {läser} en bok varje vecka. (läsa)
          Det är kul att {simma}. (simma)
          Hon har {sjungit} i kör i tre år. (sjunga)
          Förra året {sjöng} hon i en kör. (sjunga)
          Vi måste {skynda} oss. (skynda)
          Han {heter} Ali. (heta)
          Jag har {ätit} frukost. (äta)
          Det {hände} något konstigt i går. (hända)
          Sådant {händer} ibland. (hända)
          De har {köpt} en ny bil. (köpa)
          Kan du {stänga} dörren? (stänga)
          Jag har {sovit} dåligt. (sova)
          Hon vill {bli} fotbollsproffs. (bli)
          Det {blir} regn i morgon. (bli)
          Han har {blivit} lång. (bli)
          Vi {behöver} mer tid. (behöva)
          Läraren {säger} att vi ska vara tysta. (säga)
          I går {sa/sade} läraren att vi skulle vara tysta. (säga)
          Jag har {sagt} det förut. (säga)
          Det är dags att {gå} hem. (gå)
          Har du {gått} hem? (gå)
          Vi {gick} hem tidigt i går. (gå)
          Hon {kör} bil varje dag. (köra)
          Det har {regnat} hela dagen. (regna)
          Jag glömde att {låsa} cykeln. (låsa)
          Han hade {glömt} att låsa cykeln. (glömma)
          I går {gällde} det att vara snabb. (gälla)
          Vi har {förstått} uppgiften. (förstå)
          Jag {förstår} inte frågan. (förstå)
          Mina föräldrar {tycker} att jag ska plugga. (tycka)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Varje mening har ett fel i verbformen. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Det är svårt att blir vuxen. => Det är svårt att bli vuxen.
          Det gällar att vara snabb. => Det gäller att vara snabb.
          Vad betydar ordet? => Vad betyder ordet?
          Jag har gjorde läxan. => Jag har gjort läxan.
          Hon vill blir lärare. => Hon vill bli lärare.
          Vi ska åker till stan. => Vi ska åka till stan.
          Han kan springer fort. => Han kan springa fort.
          Jag tycker om att läser. => Jag tycker om att läsa.
          De har skrev ett brev. => De har skrivit ett brev.
          Vi måste städar nu. => Vi måste städa nu.
          Regeln gällar alla. => Regeln gäller alla.
          Jag har aldrig såg en björn. => Jag har aldrig sett en björn.
          Det är dags att går hem. => Det är dags att gå hem.
          Hon har sprang hela vägen. => Hon har sprungit hela vägen.
          Kan du hjälper mig? => Kan du hjälpa mig?
          Vad händar nu? => Vad händer nu?
          Han glömde att ringer. => Han glömde att ringa.
          Jag har fick ett pris. => Jag har fått ett pris.
          Du får inte glömmer boken. => Du får inte glömma boken.
          Vi har åt glass. => Vi har ätit glass.
          Det betydar mycket för mig. => Det betyder mycket för mig.
          Man måste kan simma. => Man måste kunna simma.
          Jag vill inte blir sjuk. => Jag vill inte bli sjuk.
          Hon har tog bussen. => Hon har tagit bussen.
          Det är viktigt att lyssnar. => Det är viktigt att lyssna.
          Han ska försöker igen. => Han ska försöka igen.
          Vi hade redan åt när de kom. => Vi hade redan ätit när de kom.
        `,
      },
    ],
  },
  {
    id: "grammatik-5-kongruens",
    titel: "De var tvungna",
    underrubrik: "Ord som ska passa ihop",
    omrade: "Grammatik",
    steg: 3,
    feltyper: ["grammatik.kongruens", "grammatik.bojning"],
    regel: [
      "Adjektiv och particip ska passa ihop med ordet de beskriver.",
      "En-ord: en stor bil, bilen är stor. Ett-ord får -t: ett stort hus, huset är stort.",
      "Plural får -a: stora hus, barnen är glada, vi var tvungna (men: jag var tvungen).",
      "Ord som beskriver hur något görs får ofta -t: hon sjunger vackert, han springer snabbt, det går riktigt bra.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj den form som passar ihop med resten av meningen.",
        typ: "val",
        rader: `
          Vi var {tvungen|*tvungna} att gå hem.
          Jag var {*tvungen|tvungna} att stanna.
          Det är ett {stor|*stort} hus.
          Barnen är {glad|*glada}.
          Hon sjunger {vacker|*vackert}.
          Det gick {*riktigt|riktig} bra.
          Bilen är {*ny|nytt}.
          Huset är {ny|*nytt}.
          Mina skor är {*smutsiga|smutsig}.
          Vi blev {*glada|glad} när vi vann.
          Han springer {snabb|*snabbt}.
          Det var ett {*svårt|svår} prov.
          Provet var {svår|*svårt}.
          Proven var {svårt|*svåra}.
          De var {trött|*trötta} efter matchen.
          Fönstret var {*stängt|stängd}.
          Dörren var {*stängd|stängt}.
          Alla fönster var {stängt|*stängda}.
          Breven var {skrivet|*skrivna} för hand.
          Brevet var {*skrivet|skriven} för hand.
          Han pratar {tydlig|*tydligt}.
          Det är {*viktigt|viktig} att sova.
          Vädret var {*fint|fin} i går.
          Vi har en {*fin|fint} utsikt.
          Hon är {*duktig|duktigt} på matte.
          Hon löste uppgiften {snabb|*snabbt}.
          Det var {*roligt|rolig} på festen.
          Mina föräldrar är {sträng|*stränga}.
          Filmen var {riktig|*riktigt} spännande.
          Han är en {*riktig|riktigt} vän.
          Eleverna var {nöjd|*nöjda} med betyget.
          Äpplet är {röd|*rött}.
          Äpplena är {*röda|rött}.
          Det är ett {*gammalt|gammal} träd.
          Träden är {gammal|*gamla}.
          Hon dansar {*fantastiskt|fantastisk}.
          Det luktar {*gott|god}.
          Maten är {*god|gott}.
          Vi var {*rädda|rädd} för hunden.
          Jag var {*rädd|rädda} för hunden.
          Rummet var {*tomt|tom}.
          Han kom {sen|*sent} till skolan.
          Bussen var {*sen|sent}.
          Barnet är {*litet|liten}.
          Det var {*kallt|kall} ute.
          Hon log {glad|*glatt}.
          Huset var {*målat|målad} rött.
          Husen var {målat|*målade} gula.
          Han svarade {*ärligt|ärlig} på frågan.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv ordet i parentesen i rätt form.",
        typ: "skriv",
        rader: `
          Vi var {tvungna} att vänta. (tvungen)
          Hon var {tvungen} att vänta. (tvungen)
          Jag åt ett {stort} äpple. (stor)
          Hundarna är {glada}. (glad)
          Barnet är {glatt}. (glad)
          Hon sjunger {vackert}. (vacker)
          Det gick {riktigt} bra. (riktig)
          Han springer {snabbt}. (snabb)
          Vi var {trötta} efter resan. (trött)
          Huset är {rött}. (röd)
          Bilarna är {röda}. (röd)
          Det är {viktigt} att äta frukost. (viktig)
          Fönstren var {stängda}. (stängd)
          Fönstret var {stängt}. (stängd)
          Breven var {skrivna} på engelska. (skriven)
          Hon pratar {tydligt}. (tydlig)
          Vi bor i ett {litet} hus. (liten)
          De bor i {små} lägenheter. (liten)
          Det var ett {gammalt} slott. (gammal)
          Mina kläder är {blöta}. (blöt)
          Tröjan är {blöt}. (blöt)
          Golvet är {blött}. (blöt)
          Han svarade {ärligt}. (ärlig)
          Det luktar {gott}. (god)
          Vi blev {förvånade}. (förvånad)
          Hon blev {förvånad}. (förvånad)
          Barnet blev {förvånat}. (förvånad)
          Läraren talade {långsamt}. (långsam)
          Eleverna var {nöjda}. (nöjd)
          Det var ett {svårt} beslut. (svår)
          Uppgifterna var {lätta}. (lätt)
          Hon löste det {enkelt}. (enkel)
          Han är {riktigt} snäll. (riktig)
          Det var en {riktig} överraskning. (riktig)
          Spelarna var {besvikna}. (besviken)
          Laget var {besviket}. (besviken)
          Han är {besviken}. (besviken)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Ett ord passar inte ihop med resten. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Vi var tvungen att gå. => Vi var tvungna att gå.
          Det går riktig bra nu. => Det går riktigt bra nu.
          Hon sjunger vacker. => Hon sjunger vackert.
          Det är ett stor hus. => Det är ett stort hus.
          Barnen var glad. => Barnen var glada.
          Han springer snabb. => Han springer snabbt.
          De var trött efter matchen. => De var trötta efter matchen.
          Huset är ny. => Huset är nytt.
          Provet var svår. => Provet var svårt.
          Det är viktig att lyssna. => Det är viktigt att lyssna.
          Fönstren var stängd. => Fönstren var stängda.
          Hon pratade tydlig. => Hon pratade tydligt.
          Vi blev glad när vi vann. => Vi blev glada när vi vann.
          Det var ett gammal träd. => Det var ett gammalt träd.
          Äpplet är röd. => Äpplet är rött.
          Spelarna var besviken. => Spelarna var besvikna.
          Han kom sen till lektionen. => Han kom sent till lektionen.
          Mina skor är smutsig. => Mina skor är smutsiga.
          Filmen var riktig läskig. => Filmen var riktigt läskig.
          Hon dansar fantastisk. => Hon dansar fantastiskt.
          Vi var rädd för åskan. => Vi var rädda för åskan.
          Maten luktade god. => Maten luktade gott.
          Eleverna var nöjd. => Eleverna var nöjda.
          Det var ett svår beslut. => Det var ett svårt beslut.
          Han svarade ärlig. => Han svarade ärligt.
          Breven var skriven för hand. => Breven var skrivna för hand.
          De var tvungen att springa. => De var tvungna att springa.
        `,
      },
    ],
  },
  {
    id: "meningsbyggnad-3-subjekt-verb",
    titel: "Vem gör vad?",
    underrubrik: "Varje mening behöver subjekt och verb",
    omrade: "Meningsbyggnad",
    steg: 2,
    feltyper: ["grammatik.subjekt-verb"],
    regel: [
      "Varje mening behöver ett verb (vad händer?) och ett subjekt (vem eller vad gör det?): Kalle springer.",
      "Hitta verbet först. Fråga sedan: vem eller vad? Då hittar du subjektet.",
      "Ibland finns ingen som gör något. Då skriver man det eller man: Det regnar. I dag vill man ha snabba svar.",
      "Börjar meningen med något annat än subjektet kommer verbet först och sedan subjektet: I morgon åker vi.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj rätt svar. Ibland ska du hitta subjektet eller verbet, ibland välja ordet som saknas (inget betyder att inget ord saknas).",
        typ: "val",
        rader: `
          Hunden skäller hela natten. Subjekt: {skäller|*Hunden|natten}
          Min syster spelar piano. Subjekt: {spelar|piano|*Min syster}
          I morgon åker vi till stan. Subjekt: {I morgon|*vi|stan}
          På rasten spelade killarna fotboll. Subjekt: {fotboll|*killarna|rasten}
          Läraren delade ut proven. Verb: {*delade|Läraren|proven}
          Efter skolan cyklar jag hem. Verb: {jag|*cyklar|skolan}
          Det regnar. Subjekt: {*Det|regnar}
          Det regnar. Verb: {Det|*regnar}
          I går såg jag en älg. Subjekt: {I går|*jag|en älg}
          Bussen kom för sent. Verb: {Bussen|sent|*kom}
          Vem har ätit upp kakan? Subjekt: {kakan|*Vem}
          Mina kompisar tycker om film. Subjekt: {film|*Mina kompisar}
          Varje morgon dricker pappa kaffe. Subjekt: {kaffe|*pappa|morgon}
          Varje morgon dricker pappa kaffe. Verb: {*dricker|pappa|kaffe}
          I dag vill man ha snabba svar. Subjekt: {svar|I dag|*man}
          Boken ligger på bordet. Verb: {Boken|*ligger|bordet}
          Snön föll hela natten. Subjekt: {natten|*Snön}
          Telefonen ringde mitt i lektionen. Verb: {Telefonen|*ringde|lektionen}
          Där borta står min bror. Subjekt: {Där borta|*min bror}
          Skolan börjar i augusti. Subjekt: {augusti|*Skolan}
          Nu ska vi äta. Subjekt: {Nu|*vi|äta}
          Hon skrattade högt. Verb: {Hon|högt|*skrattade}
          Det är kallt i dag. Subjekt: {kallt|*Det|i dag}
          Därför valde hon att stanna. Subjekt: {Därför|*hon|stanna}
          {*Det|Man|_} snöar ute.
          I dag vill {det|*man|_} ha allt på en gång.
          {Man|*Det|_} är kallt i dag.
          När {det|*man|_} är trött är det svårt att lyssna.
          {Det|_|*Man} kan inte få allt.
          {*Det|Man|_} blåser mycket vid havet.
          I Sverige firar {det|*man|_} midsommar.
          På vintern {*är|_} det mörkt tidigt.
          Min bror {_|*är} tolv år.
          {*Det|Man|_} finns många sätt att lära sig.
          Jag tror att {_|man|*det} blir regn i morgon.
          Om {*man|det|_} tränar mycket blir man starkare.
          Hon {*spelar|_} gitarr varje dag.
          {Det|*Man|_} lär sig av sina misstag.
          Det är viktigt att {*man|det|_} lyssnar.
          {_|*Det|Man} var en gång en kung.
          Nu {_|*går} vi hem.
          Efter maten {*diskade|_} vi.
          {Man|_|*Det} är mörkt ute.
          I framtiden kommer {det|*man|_} att behöva kunna programmera.
          {*Det|Man|_} tog lång tid att bli klar.
          Här får {det|*man|_} inte röka.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv ordet som saknas. Ledtråden står i parentesen.",
        typ: "skriv",
        rader: `
          {Det} snöar. (det eller man)
          {Man} ska inte ljuga. (det eller man)
          I dag vill {man} ha allt direkt. (det eller man)
          {Det} är varmt ute. (det eller man)
          När {man} är hungrig blir man lätt arg. (det eller man)
          {Det} finns mycket att göra. (det eller man)
          Jag tror att {det} blir sol. (det eller man)
          Om {man} övar blir man bättre. (det eller man)
          {Det} tar tid att lära sig. (det eller man)
          På sommaren badar {man} i sjön. (det eller man)
          {Det} åskar i kväll. (det eller man)
          I Sverige äter {man} mycket potatis. (det eller man)
          {Det} hände något konstigt. (det eller man)
          {Man} vet aldrig vad som händer. (det eller man)
          Här kan {man} hyra cyklar. (det eller man)
          {Det} var en gång en drake. (det eller man)
          Varför blåser {det} så mycket? (det eller man)
          Hur stavar {man} till det här ordet? (det eller man)
          Min mamma {jobbar} på sjukhus. (jobba, nutid)
          I går {regnade} det hela dagen. (regna, dåtid)
          Vi {är} tolv i klassen. (vara, nutid)
          Han {heter} Omar. (heta, nutid)
          Nu {börjar} lektionen. (börja, nutid)
          Förra året {vann} vi cupen. (vinna, dåtid)
          Det {finns} mjölk i kylen. (finnas, nutid)
          I morgon {har} vi prov. (ha, nutid)
          Lisa är sjuk. Därför stannar {hon} hemma. (pronomen)
          Mina kusiner kommer i dag. {De} bor i Malmö. (pronomen)
          Bilen är ny. {Den} är röd. (pronomen)
          Huset är gammalt. {Det} byggdes 1910. (pronomen)
          Ali och jag spelar fotboll. {Vi} tränar tre gånger i veckan. (pronomen)
          Erik har en hund. {Han} går ut med den varje dag. (pronomen)
          Pappa lagar mat. Sedan diskar {han}. (pronomen)
          Barnen leker ute. Efter en stund går {de} in. (pronomen)
          Ett äpple ligger på bordet. {Det} är grönt. (pronomen)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Subjektet eller verbet saknas. Lägg till det och skriv meningen rätt.",
        typ: "ratta",
        rader: `
          I dag vill ha snabba svar. => I dag vill man ha snabba svar.
          Regnar ute. => Det regnar ute.
          Är kallt i dag. => Det är kallt i dag.
          I nutidens samhälle vill ha arbetare som kan språk. => I dagens samhälle vill man ha arbetare som kan språk. || I nutidens samhälle vill man ha arbetare som kan språk.
          På fritiden kan riktigt slappna av. => På fritiden kan man riktigt slappna av. || På fritiden kan man slappna av riktigt.
          Finns många böcker i biblioteket. => Det finns många böcker i biblioteket.
          När är trött blir det svårt att lyssna. => När man är trött blir det svårt att lyssna.
          Min bror tolv år. => Min bror är tolv år.
          Hon trött efter träningen. => Hon är trött efter träningen. || Hon var trött efter träningen.
          Snöar mycket i norr. => Det snöar mycket i norr.
          I Sverige firar midsommar i juni. => I Sverige firar man midsommar i juni. || I Sverige firar vi midsommar i juni.
          Om tränar varje dag blir man starkare. => Om man tränar varje dag blir man starkare.
          Tar lång tid att lära sig ett språk. => Det tar lång tid att lära sig ett språk.
          Här får inte cykla. => Här får man inte cykla.
          Jag tror att blir regn. => Jag tror att det blir regn.
          Var en gång en prinsessa. => Det var en gång en prinsessa.
          Mina föräldrar snälla. => Mina föräldrar är snälla.
          I skolan lär sig mycket. => I skolan lär man sig mycket. || I skolan lär vi oss mycket.
          Viktigt att sova ordentligt. => Det är viktigt att sova ordentligt.
          Lisa är sjuk, därför stannar hemma. => Lisa är sjuk, därför stannar hon hemma.
          Boken är bra, men är lite lång. => Boken är bra, men den är lite lång.
          Behövs mer tid. => Det behövs mer tid.
          I framtiden måste kunna mycket om datorer. => I framtiden måste man kunna mycket om datorer.
          Nu dags att gå hem. => Nu är det dags att gå hem.
          Efter matchen var trötta. => Efter matchen var vi trötta. || Efter matchen var de trötta. || Efter matchen var alla trötta.
          Ibland är svårt att koncentrera sig. => Ibland är det svårt att koncentrera sig.
        `,
      },
    ],
  },
  {
    id: "meningsbyggnad-4-perspektiv",
    titel: "Man, du eller jag?",
    underrubrik: "Samma perspektiv och tydlig syftning",
    omrade: "Meningsbyggnad",
    steg: 3,
    feltyper: ["ordval.perspektiv"],
    regel: [
      "Välj ett perspektiv och håll fast vid det: man … man, du … du, jag … jag, vi … vi. Fel: Om man tränar blir du starkare. Rätt: Om man tränar blir man starkare.",
      "Man heter en när det inte är subjekt: Det gör en glad. Man ska ta hand om sina saker.",
      "Den, det och de ska syfta på rätt ord: en katt → den, ett hus → det, flera skor → de.",
      "Sin, sitt och sina syftar på subjektet i samma sats: Anna tog sin väska (sin egen). De kan inte stå i subjektet: Anna och hennes bror (inte sin bror).",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det ord som håller samma perspektiv eller syftar rätt.",
        typ: "val",
        rader: `
          Om man tränar varje dag blir {du|*man} starkare.
          När du är trött blir {*du|man} lätt arg.
          Om jag får välja tar {*jag|man} pizza.
          Om man tror på sig själv kan {*man|du} nå allt {du|*man} har drömt om.
          Man ska alltid ta hand om {dina|*sina} saker.
          Vi gick till parken och sedan åt {man|*vi} glass.
          Jag har en katt. {Det|*Den} är svart.
          Jag har ett marsvin. {Den|*Det} heter Pelle.
          Jag köpte nya skor. {Den|Det|*De} var dyra.
          Hon läste boken och tyckte att {det|*den} var bra.
          Vi har ett nytt hus. {Den|*Det} är gult.
          Anna är glad. {*Hennes|Sin} bror har kommit hem.
          Kalle och {sin|*hans} hund går en promenad.
          När man är ny i en klass känner {*man|du} sig ofta ensam.
          Det är svårt när {*man|du} inte förstår och ingen hjälper en.
          Du måste göra {*din|sin} läxa.
          Vi tog med oss {*våra|sina} väskor.
          Jag glömde {sin|*min} mobil hemma.
          Man behöver {*sina|dina} vänner.
          Om du vill bli bra måste {man|*du} träna.
          Om vi skyndar oss hinner {*vi|man} med bussen.
          Jag har två bröder. {Han|*De} heter Leo och Sam.
          Min mobil gick sönder, så jag lämnade in {det|*den} på lagning.
          Vi har en ny lärare. {*Hon|Det} heter Maria.
          Fönstret var öppet, så jag stängde {den|*det}.
          Jag tappade nycklarna men hittade {*dem|den} sedan.
          Äpplet var ruttet, så jag slängde {den|*det}.
          Sara frågade Emma om {*hennes|sin} cykel var lagad.
          Man blir glad när någon hjälper {*en|dig}.
          Har man tränat mycket är {*man|du} trött efteråt.
          Jag älskar att resa, för då får {*jag|du} se nya platser.
          Om du övar får {*du|man} bättre betyg.
          Vi bestämde att {*vi|man} skulle gå tidigt.
          Min syster och {*hennes|sin} kompis kom hem.
          Man kan inte alltid få som {du|*man} vill.
          Ju mer du läser, desto bättre blir {*du|man} på att skriva.
          Hunden letade efter {*sitt|sin} ben.
          Flickan kramade {*sitt|sin} gosedjur.
          Eleverna packade {sin|*sina} väskor.
          Vi har köpt ett bord. {*Det|Den} var billigt.
          Ni ska ta med {sina|*era} böcker.
          Pappa och {sin|*hans} kollega åt lunch.
          Jag köpte en tröja, men {*den|det} var för liten.
          Om man inte äter frukost blir {du|*man} hungrig.
          Barnen lekte med {deras|*sina} leksaker.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Skriv det ord som passar. Välj bland orden i parentesen.",
        typ: "skriv",
        rader: `
          Om man tränar blir {man} starkare. (man, du eller jag)
          Om du övar blir {du} bättre. (man, du eller jag)
          När jag var liten trodde {jag} på tomten. (man, du eller jag)
          Man ska ta hand om {sina} vänner. (sin, sitt eller sina)
          Anna glömde {sin} jacka. (sin, sitt eller sina)
          Pelle tappade {sitt} busskort. (sin, sitt eller sina)
          Barnen hängde upp {sina} jackor. (sin, sitt eller sina)
          Jag har en hund. {Den} heter Sixten. (den, det eller de)
          Vi har ett akvarium. {Det} står i köket. (den, det eller de)
          Jag har nya glasögon. {De} är blå. (den, det eller de)
          Hon köpte en klänning, men {den} var för stor. (den, det eller de)
          Jag läste brevet och la {det} i lådan. (den, det eller dem)
          Han köpte äpplen och åt upp {dem}. (den, det eller dem)
          Sara och {hennes} bror är tvillingar. (sin eller hennes)
          Omar lånade ut {sin} bok till Ella. (sin eller hans)
          Vi tog med {våra} cyklar. (våra eller sina)
          Du har glömt {din} mössa. (din eller sin)
          Jag har gjort {mina} läxor. (mina eller sina)
          Om man inte sover blir {man} trött. (man eller du)
          Om man är snäll mot andra blir andra snälla mot {en}. (en eller dig)
          Läraren rättade proven och delade ut {dem}. (den, det eller dem)
          Kalle och {hans} pappa åkte och fiskade. (sin eller hans)
          Lisa ringde till {sin} pappa. (sin eller hennes)
          Hönan värpte {sitt} första ägg. (sin, sitt eller sina)
          Ett barn behöver {sina} föräldrar. (sin, sitt eller sina)
          När vi kom hem åt {vi} middag. (vi eller man)
          Om ni vill kan {ni} följa med. (ni eller man)
          Jag tror att {jag} klarar provet. (jag eller man)
          Man tror att allt {man} har drömt om ska hända. (man eller du)
          Jag köpte ett paraply men glömde {det} på bussen. (den, det eller de)
          Ni ska ta med {era} böcker. (era eller sina)
          Man vet aldrig vad som väntar {en}. (en eller dig)
          Om du lyssnar lär {du} dig mycket. (man eller du)
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Perspektivet byts eller ett ord syftar fel. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Om man tränar varje dag blir du starkare. => Om man tränar varje dag blir man starkare. || Om du tränar varje dag blir du starkare.
          Tror man på sig själv kan du nå allt du har drömt om. => Tror man på sig själv kan man nå allt man har drömt om. || Tror du på dig själv kan du nå allt du har drömt om.
          Man ska ta hand om dina saker. => Man ska ta hand om sina saker. || Du ska ta hand om dina saker.
          Jag har en katt. Det är svart. => Jag har en katt. Den är svart.
          Vi har ett nytt hus. Den ligger vid sjön. => Vi har ett nytt hus. Det ligger vid sjön.
          Lisa och sin syster gick på bio. => Lisa och hennes syster gick på bio.
          Kalle och sin pappa fiskade. => Kalle och hans pappa fiskade.
          Du måste göra sin läxa. => Du måste göra din läxa.
          Jag glömde sin mobil. => Jag glömde min mobil.
          När man är ny känner du dig ensam. => När man är ny känner man sig ensam. || När du är ny känner du dig ensam.
          Vi gick till stranden och sedan badade man. => Vi gick till stranden och sedan badade vi.
          Jag köpte nya skor, men den var för små. => Jag köpte nya skor, men de var för små.
          Hon läste boken och tyckte att det var bra. => Hon läste boken och tyckte att den var bra.
          Om du vill bli bra måste man träna. => Om du vill bli bra måste du träna. || Om man vill bli bra måste man träna.
          Vi tog med sina väskor. => Vi tog med våra väskor.
          Fönstret var öppet, så jag stängde den. => Fönstret var öppet, så jag stängde det.
          Hunden letade efter sin ben. => Hunden letade efter sitt ben.
          Man kan inte alltid få som du vill. => Man kan inte alltid få som man vill. || Du kan inte alltid få som du vill.
          Jag tappade nycklarna men hittade den sen. => Jag tappade nycklarna men hittade dem sen.
          Om jag får välja tar man pizza. => Om jag får välja tar jag pizza.
          Ni ska ta med sina böcker. => Ni ska ta med era böcker.
          Min syster och sin kompis kom hem. => Min syster och hennes kompis kom hem.
          Om man övar får du bättre betyg. => Om man övar får man bättre betyg. || Om du övar får du bättre betyg.
          Vi har en ny lärare. Det heter Maria. => Vi har en ny lärare. Hon heter Maria.
          Ett barn behöver sin föräldrar. => Ett barn behöver sina föräldrar.
          Man blir glad när någon hjälper dig. => Man blir glad när någon hjälper en. || Du blir glad när någon hjälper dig.
          I dag vill man ha allt direkt, och du blir arg om du måste vänta. => I dag vill man ha allt direkt, och man blir arg om man måste vänta.
        `,
      },
    ],
  },
];
