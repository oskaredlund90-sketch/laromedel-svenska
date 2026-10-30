import type { HafteKalla } from "../typer";

export const GRAMMATIK_HAFTEN: HafteKalla[] = [
  {
    id: "grammatik-1-de-dem",
    titel: "De eller dem?",
    underrubrik: "Och varför man inte skriver dom",
    omrade: "Grammatik",
    steg: 2,
    feltyper: ["grammatik.de-dem"],
    regel: [
      "Byt ut ordet mot vi eller oss. Passar vi ska det vara de. Passar oss ska det vara dem.",
      "De spelar fotboll (vi spelar). Jag såg dem (jag såg oss).",
      "Före adjektiv och ord som här, flesta, andra skriver man alltid de: de röda skorna, de flesta, de andra.",
      "Dom är talspråk. I skrift ska det vara de eller dem.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj de eller dem. Testa med vi och oss!",
        typ: "val",
        rader: `
          {*De|Dem} spelar fotboll varje dag.
          Jag träffade {de|*dem} igår.
          {*De|Dem} bor i ett gult hus.
          Vi hjälpte {de|*dem} med läxan.
          Har du sett {de|*dem}?
          {*De|Dem} kommer snart.
          Jag ringde till {de|*dem}.
          Mamma gav {de|*dem} en present.
          {*De|Dem} är mina bästa vänner.
          Kan du fråga {de|*dem}?
          Igår åkte {*de|dem} till stan.
          Jag tycker om {de|*dem}.
          Varför skrattar {*de|dem}?
          Vi väntade på {de|*dem} i en timme.
          {*De|Dem} hade glömt nycklarna.
          Läraren berömde {de|*dem}.
          Efter skolan går {*de|dem} hem.
          Jag lånade en bok av {de|*dem}.
          Hunden skällde på {de|*dem}.
          {*De|Dem} vann matchen!
          Var är {*de|dem} nu?
          Vi bjöd {de|*dem} på kakor.
          Ibland är {*de|dem} trötta.
          Jag skickade ett sms till {de|*dem}.
          Om {*de|dem} kommer blir jag glad.
          Vi såg {de|*dem} på bion.
          Hon pratade med {de|*dem}.
          {*De|Dem} sa hej till oss.
          Jag vet inte vad {*de|dem} heter.
          Pappa körde {de|*dem} till träningen.
          När {*de|dem} kom hem var det mörkt.
          Jag saknar {de|*dem}.
          Det var {*de|dem} som vann.
          Katten följde efter {de|*dem}.
          {*De|Dem} gillar att läsa.
          Jag hörde {de|*dem} sjunga.
          Tror {*de|dem} på spöken?
          Vi lekte med {de|*dem} hela dagen.
          {*De|Dem} har en hund som heter Bella.
          Jag hälsade på {de|*dem}.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Välj de eller dem. Kom ihåg: före adjektiv och ord som här, flesta och andra är det alltid de.",
        typ: "val",
        rader: `
          Jag gillar {*de|dem} röda skorna.
          {*De|Dem} små barnen sov.
          Kan du ge mig {*de|dem} blå pennorna?
          Vi köpte {*de|dem} sista biljetterna.
          {*De|Dem} flesta tycker om glass.
          Jag läste {*de|dem} två första böckerna.
          Var lägger du {*de|dem} gamla tidningarna?
          Har du sett {*de|dem} nya eleverna?
          {*De|Dem} stora husen ligger vid sjön.
          Jag tog {*de|dem} varma vantarna.
          Hon känner {de|*dem} väl.
          {*De|Dem} andra kom senare.
          Jag vill ha {*de|dem} här skorna.
          Vi tittade på {*de|dem} vackra blommorna.
          Skorna? Jag köpte {de|*dem} igår.
          Böckerna är bra. Jag har läst {de|*dem}.
          {*De|Dem} här kakorna är goda.
          Glöm inte {*de|dem} viktiga papperen.
          Barnen? Jag såg {de|*dem} nyss.
          Jag gav bort {*de|dem} gamla leksakerna.
          {*De|Dem} som vill får gå ut.
          Jag hjälper {de|*dem} som behöver hjälp.
          Vi pratade med {de|*dem} som bodde där.
          {*De|Dem} tre bröderna är lika.
          Ta {*de|dem} gröna äpplena.
          Var är {*de|dem} andra?
          Jag har inte träffat {de|*dem} än.
          {*De|Dem} båda skrattade.
          Ge pengarna till {de|*dem}.
          Ser du {*de|dem} två fåglarna?
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Byt ut det felaktiga ordet (dom, de eller dem). Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Dom spelar fotboll. => De spelar fotboll.
          Jag såg dom igår. => Jag såg dem igår.
          Dom bor nära skolan. => De bor nära skolan.
          Vi hjälpte dom. => Vi hjälpte dem.
          Har du träffat dom? => Har du träffat dem?
          Dom kommer imorgon. => De kommer imorgon.
          Jag ringde dom. => Jag ringde dem.
          Igår åkte dom till stan. => Igår åkte de till stan.
          Jag gillar dom röda skorna. => Jag gillar de röda skorna.
          Vi väntade på dom. => Vi väntade på dem.
          Dom vann matchen. => De vann matchen.
          Läraren berömde dom. => Läraren berömde dem.
          Varför skrattar dom? => Varför skrattar de?
          Hon gav dom en kaka. => Hon gav dem en kaka.
          Dom flesta gillar sommar. => De flesta gillar sommar.
          Jag pratade med dom. => Jag pratade med dem.
          När dom kom hem åt vi. => När de kom hem åt vi.
          Hunden skällde på dom. => Hunden skällde på dem.
          Dom små barnen sov. => De små barnen sov.
          Jag saknar dom. => Jag saknar dem.
          Dem spelar fotboll varje dag. => De spelar fotboll varje dag.
          Jag träffade de på bussen. => Jag träffade dem på bussen.
          Dem är mina kusiner. => De är mina kusiner.
          Kan du hjälpa de? => Kan du hjälpa dem?
          Igår åkte dem hem. => Igår åkte de hem.
          Vi bjöd de på glass. => Vi bjöd dem på glass.
          Dem andra kom sent. => De andra kom sent.
          Jag hörde de skratta. => Jag hörde dem skratta.
          Dem vill ha mer mat. => De vill ha mer mat.
          Mamma körde de hem. => Mamma körde dem hem.
        `,
      },
    ],
  },
  {
    id: "grammatik-2-starka-verb",
    titel: "Sprang, inte springde",
    underrubrik: "Verb i dåtid (preteritum)",
    omrade: "Grammatik",
    steg: 2,
    feltyper: ["grammatik.bojning", "grammatik.tempus"],
    regel: [
      "Många verb får -de, -te eller -dde i dåtid: hoppa – hoppade, läsa – läste, bo – bodde.",
      "Starka verb byter vokal i stället: springa – sprang, komma – kom, äta – åt, skriva – skrev.",
      "De vanligaste starka verben behöver man lära sig utantill. Tips: säg 'Igår …' framför verbet.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Skriv verbet i dåtid.",
        typ: "skriv",
        rader: `
          Igår {sprang} jag till skolan. (springa)
          Han {kom} hem sent. (komma)
          Vi {gick} till parken. (gå)
          Jag {såg} en älg i skogen. (se)
          Vi {åt} pannkakor. (äta)
          Hon {drack} ett glas mjölk. (dricka)
          Katten {satt} i fönstret. (sitta)
          Boken {låg} på golvet. (ligga)
          Jag {sov} länge i morse. (sova)
          Hon {skrev} ett brev. (skriva)
          Hunden {bet} i benet. (bita)
          Vårt lag {vann}! (vinna)
          Han {tog} bussen. (ta)
          Mormor {gav} mig en bok. (ge)
          Vi {fick} glass. (få)
          Jag {gjorde} läxan. (göra)
          Hon {sa/sade} hej. (säga)
          Jag {visste} svaret. (veta)
          Han {ville} inte gå. (vilja)
          Vi {kunde} inte sova. (kunna)
          Jag {hade} ont i magen. (ha)
          Det {var} kallt ute. (vara)
          Det {blev} mörkt. (bli)
          Vi {stod} i kön. (stå)
          Fågeln {flög} iväg. (flyga)
          Han {ljög} för mig. (ljuga)
          Vi {sjöng} en sång. (sjunga)
          Hon {drog} i repet. (dra)
          Klockan {slog} tolv. (slå)
          Han {sköt} bollen i mål. (skjuta)
          Jag {frös} om fötterna. (frysa)
          De {bjöd} oss på tårta. (bjuda)
          Hon {valde} den röda. (välja)
          Vi {sålde} cykeln. (sälja)
          Jag {la/lade} boken på bordet. (lägga)
          Hon {satte} sig ner. (sätta)
          Barnet {grät}. (gråta)
          Det {lät} konstigt. (låta)
          Han {föll} av cykeln. (falla)
          Hon {höll} min hand. (hålla)
          Han {högg} ved. (hugga)
          Jag {stack} mig på en tagg. (sticka)
          Bollen {försvann}. (försvinna)
          Hon {red} på en häst. (rida)
          Han {rev} sönder pappret. (riva)
          Vi {klev} på tåget. (kliva)
          Solen {steg} upp. (stiga)
          Barnen {skrek} av glädje. (skrika)
          Vi {njöt} av solen. (njuta)
          Han {bröt} benet. (bryta)
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Välj rätt form av verbet i dåtid.",
        typ: "val",
        rader: `
          Igår {*kom|komade} min kusin.
          Hon {springde|*sprang} fort.
          Vi {*gick|gådde} hem.
          Jag {*sov|sovde} gott.
          Vi {ätde|*åt} middag.
          Han {*tog|tagde} min penna.
          Katten {sittade|*satt} på mattan.
          Han {*skrev|skrivde} sitt namn.
          Hon {drickte|*drack} saft.
          Fågeln {*flög|flygde} högt.
          Vi {*sjöng|sjungde} i kören.
          Jag {sägde|*sa} ingenting.
          Han {*gav|gedde} mig en kram.
          Vi {*fick|fådde} vänta.
          Jag {gjöde|*gjorde} mitt bästa.
          Hon {*visste|vetade} allt.
          Det {*blev|blidde} sent.
          Bollen {liggde|*låg} i gräset.
          Han {*stod|stådde} still.
          Vi {vinnade|*vann} pokalen.
          Hunden {*bet|bitade} honom.
          Jag {*såg|sedde} en stjärna.
          Han {ljugade|*ljög} om läxan.
          Vi {*frös|fryste} hela natten.
          Hon {*föll|fallde} i snön.
          Han {hållde|*höll} i ratten.
          Det {låtade|*lät} som en bil.
          Hon {*valde|välde} blå.
          Vi {*sålde|säljde} lotter.
          Barnet {gråtade|*grät}.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Ett verb har fel form. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Igår springde jag till bussen. => Igår sprang jag till bussen.
          Hon komade för sent. => Hon kom för sent.
          Vi gådde till stranden. => Vi gick till stranden.
          Jag sovde hela natten. => Jag sov hela natten.
          Vi ätde glass. => Vi åt glass.
          Han tagde min mössa. => Han tog min mössa.
          Katten sittade på taket. => Katten satt på taket.
          Hon skrivde en dikt. => Hon skrev en dikt.
          Jag drickte saft. => Jag drack saft.
          Fågeln flygde bort. => Fågeln flög bort.
          Vi sjungde för mormor. => Vi sjöng för mormor.
          Han sägde nej. => Han sa nej.
          Vi fådde godis. => Vi fick godis.
          Det blidde regn. => Det blev regn.
          Jag sedde en film. => Jag såg en film.
          Han vinnade loppet. => Han vann loppet.
          Hon fallde av gungan. => Hon föll av gungan.
          Vi fryste om händerna. => Vi frös om händerna.
          Barnet gråtade länge. => Barnet grät länge.
          Han ljugade för läraren. => Han ljög för läraren.
        `,
      },
    ],
  },
  {
    id: "grammatik-3-ordfoljd",
    titel: "Igår åt vi glass",
    underrubrik: "Ordföljd – verbet på andra plats",
    omrade: "Grammatik",
    steg: 2,
    feltyper: ["grammatik.ordfoljd"],
    regel: [
      "I en vanlig mening står verbet alltid på andra plats: Vi åt glass igår.",
      "Börjar meningen med något annat än den som gör något, så byter verbet och subjektet plats: Igår åt vi glass. På lördag ska jag simma.",
      "I frågor kommer verbet först eller direkt efter frågeordet: Kommer du? Varför kommer du?",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj rätt ordföljd.",
        typ: "val",
        rader: `
          Igår {*åt vi|vi åt} glass.
          På lördag {jag ska|*ska jag} simma.
          Efter skolan {*går jag|jag går} hem.
          Sedan {vi spelade|*spelade vi} fotboll.
          I morgon {*kommer mormor|mormor kommer}.
          Varje dag {jag läser|*läser jag} en bok.
          På sommaren {*badar vi|vi badar} i sjön.
          Ibland {hon är|*är hon} trött.
          Därför {*kom han|han kom} sent.
          Nu {vi ska|*ska vi} äta.
          I Sverige {*finns det|det finns} många sjöar.
          Klockan sju {jag vaknade|*vaknade jag}.
          Till slut {*hittade vi|vi hittade} nyckeln.
          Hemma {vi har|*har vi} en katt.
          Förra veckan {*var jag|jag var} sjuk.
          I parken {barnen leker|*leker barnen}.
          Plötsligt {*hörde vi|vi hörde} ett ljud.
          Efter maten {vi diskade|*diskade vi}.
          På vintern {*åker vi|vi åker} skidor.
          Den här boken {jag gillar|*gillar jag}.
          Snart {*kommer de|de kommer} hit.
          På morgonen {hon äter|*äter hon} gröt.
          Sedan {*gick vi|vi gick} hem.
          I skolan {vi lär|*lär vi} oss mycket.
          Först {*borstar jag|jag borstar} tänderna.
          Om en timme {tåget går|*går tåget}.
          Där borta {*står min cykel|min cykel står}.
          I fjol {vi åkte|*åkte vi} till Norge.
          Tyvärr {*kan jag|jag kan} inte komma.
          Varje morgon {pappa dricker|*dricker pappa} kaffe.
          {*Kommer du|Du kommer} på festen?
          Varför {du gråter|*gråter du}?
          {*Har du|Du har} sett min mössa?
          Var {*bor du|du bor}?
          När {*slutar skolan|skolan slutar}?
          Vad {du heter|*heter du}?
          {*Vill du|Du vill} ha mer?
          Hur {*mår du|du mår}?
          Vem {du träffade|*träffade du}?
          Vilken färg {*gillar du|du gillar}?
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Ordföljden är fel. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Igår vi åt pizza. => Igår åt vi pizza.
          På måndag jag har prov. => På måndag har jag prov.
          Efter skolan vi spelar fotboll. => Efter skolan spelar vi fotboll.
          Sedan hon gick hem. => Sedan gick hon hem.
          I morgon vi ska bada. => I morgon ska vi bada.
          Varje kväll jag läser. => Varje kväll läser jag.
          På sommaren vi åker till landet. => På sommaren åker vi till landet.
          Ibland han är arg. => Ibland är han arg.
          Därför hon kom sent. => Därför kom hon sent.
          Nu vi måste gå. => Nu måste vi gå.
          Klockan åtta skolan börjar. => Klockan åtta börjar skolan.
          Till slut vi hittade katten. => Till slut hittade vi katten.
          Hemma vi har två hundar. => Hemma har vi två hundar.
          Förra året jag var i Spanien. => Förra året var jag i Spanien.
          Plötsligt det började regna. => Plötsligt började det regna.
          På vintern vi åker pulka. => På vintern åker vi pulka.
          Först jag äter frukost. => Först äter jag frukost.
          I fjol vi flyttade. => I fjol flyttade vi.
          Tyvärr jag kan inte komma. => Tyvärr kan jag inte komma.
          Efter maten vi tittade på film. => Efter maten tittade vi på film.
          I skogen vi såg en räv. => I skogen såg vi en räv.
          Snart han kommer hit. => Snart kommer han hit.
          På kvällen vi grillade. => På kvällen grillade vi.
          Om en stund maten är klar. => Om en stund är maten klar.
          Där borta min skola ligger. => Där borta ligger min skola.
          Varje sommar vi badar. => Varje sommar badar vi.
          I lördags jag fyllde år. => I lördags fyllde jag år.
          Sedan vi gick och la oss. => Sedan gick vi och la oss.
          På rasten vi leker kull. => På rasten leker vi kull.
          Ute det var mörkt. => Ute var det mörkt.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Skriv om meningen så att den börjar med ordet i parentesen.",
        typ: "ratta",
        rader: `
          Vi åt glass igår. (Igår) => Igår åt vi glass.
          Jag ska simma på lördag. (På lördag) => På lördag ska jag simma.
          Vi spelade fotboll efter skolan. (Efter skolan) => Efter skolan spelade vi fotboll.
          Hon läser varje kväll. (Varje kväll) => Varje kväll läser hon.
          Vi badar på sommaren. (På sommaren) => På sommaren badar vi.
          Jag har prov imorgon. (Imorgon) => Imorgon har jag prov.
          Han var sjuk förra veckan. (Förra veckan) => Förra veckan var han sjuk.
          Vi har en katt hemma. (Hemma) => Hemma har vi en katt.
          Det började regna plötsligt. (Plötsligt) => Plötsligt började det regna.
          Vi åker skidor på vintern. (På vintern) => På vintern åker vi skidor.
          Skolan börjar klockan åtta. (Klockan åtta) => Klockan åtta börjar skolan.
          Jag kan tyvärr inte komma. (Tyvärr) => Tyvärr kan jag inte komma.
          Vi såg en räv i skogen. (I skogen) => I skogen såg vi en räv.
          Vi tittade på film efter maten. (Efter maten) => Efter maten tittade vi på film.
          Jag fyllde år i lördags. (I lördags) => I lördags fyllde jag år.
          Vi grillade på kvällen. (På kvällen) => På kvällen grillade vi.
          Han kommer snart. (Snart) => Snart kommer han.
          Vi leker kull på rasten. (På rasten) => På rasten leker vi kull.
          Mormor kommer i morgon. (I morgon) => I morgon kommer mormor.
          Vi hittade nyckeln till slut. (Till slut) => Till slut hittade vi nyckeln.
          Jag vaknade tidigt i morse. (I morse) => I morse vaknade jag tidigt.
          Vi har svenska efter lunch. (Efter lunch) => Efter lunch har vi svenska.
          Det snöar mycket i Kiruna. (I Kiruna) => I Kiruna snöar det mycket.
          Hon cyklar till skolan varje dag. (Varje dag) => Varje dag cyklar hon till skolan.
          Vi åkte till Göteborg i somras. (I somras) => I somras åkte vi till Göteborg.
          Jag gick och la mig sedan. (Sedan) => Sedan gick jag och la mig.
          Han spelar gitarr på fritiden. (På fritiden) => På fritiden spelar han gitarr.
          Det fanns inga moln på himlen. (På himlen) => På himlen fanns det inga moln.
          Vi måste gå nu. (Nu) => Nu måste vi gå.
          Jag förstod uppgiften till slut. (Till slut) => Till slut förstod jag uppgiften.
        `,
      },
    ],
  },
];
