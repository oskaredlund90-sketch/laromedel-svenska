import type { HafteKalla } from "../typer";

export const PROV_LAG_MEL: HafteKalla[] = [
  {
    id: "prov-lagstadiet",
    titel: "Grammatikprov – lågstadiet",
    underrubrik: "Åk 1–3: alfabetet, ordklasser, böjning och skiljetecken",
    omrade: "Grammatikprov",
    steg: 1,
    feltyper: ["stavning.stor-bokstav", "skiljetecken.punkt", "grammatik.bojning", "grammatik.genus", "stavning.sarskrivning"],
    regel: [
      "Provet har 100 uppgifter. Varje rätt ger 1 poäng.",
      "Läs instruktionen för varje del innan du börjar.",
      "Ta god tid på dig och läs igenom dina svar när du är klar.",
    ],
    delar: [
      {
        rubrik: "Del 1: Alfabetet och alfabetisk ordning",
        instruktion: "Välj rätt svar.",
        typ: "val",
        rader: `
          Vilken bokstav kommer efter B? {A|*C|D}
          Vilken bokstav kommer före G? {H|E|*F}
          Vilken bokstav kommer efter M? {*N|L|O}
          Vilken bokstav kommer före S? {T|*R|Q}
          Den sista bokstaven i alfabetet är {Z|Å|*Ö}.
          Vilket ord kommer först i alfabetisk ordning? {katt|*boll|sol}
          Vilket ord kommer först i alfabetisk ordning? {mus|hund|*apa}
          Vilket ord kommer sist i alfabetisk ordning? {*ört|ål|äpple}
          Vilket ord kommer först i alfabetisk ordning? {sten|*sax|sko}
          Vilket ord kommer sist i alfabetisk ordning? {bil|*buss|bok}
        `,
      },
      {
        rubrik: "Del 2: Vokaler och konsonanter",
        instruktion: "Vokalerna är a, e, i, o, u, y, å, ä och ö. Alla andra bokstäver är konsonanter. Välj rätt svar.",
        typ: "val",
        rader: `
          Vilken bokstav är en vokal? {b|*e|t}
          Vilken bokstav är en vokal? {k|s|*y}
          Vilken bokstav är en konsonant? {a|*m|ö}
          Vilken bokstav är en konsonant? {*r|i|u}
          Vilken bokstav är en vokal? {*å|p|l}
          Hur många vokaler finns det i svenska alfabetet? {7|*9|5}
          Ordet "sol" börjar med en {vokal|*konsonant}.
          Ordet "is" börjar med en {*vokal|konsonant}.
          Vilket ord börjar med en vokal? {hus|*ägg|mat}
          Vilket ord börjar med en konsonant? {orm|ost|*fisk}
        `,
      },
      {
        rubrik: "Del 3: Stor bokstav och punkt",
        instruktion: "Skriv meningen rätt. Tänk på stor bokstav i början av meningen och i namn, och punkt i slutet.",
        typ: "ratta",
        rader: `
          lisa har en katt. => Lisa har en katt.
          vi bor i malmö. => Vi bor i Malmö.
          Min kompis heter omar => Min kompis heter Omar.
          idag är det sol. => Idag är det sol. || I dag är det sol.
          jag åker till norge. => Jag åker till Norge.
          Hunden springer fort Katten sover. => Hunden springer fort. Katten sover.
          Pappa heter erik. => Pappa heter Erik.
          vi badar i vättern. => Vi badar i Vättern.
        `,
      },
      {
        rubrik: "Del 4: Punkt, frågetecken och utropstecken",
        instruktion: "Välj rätt tecken: punkt (.), frågetecken (?) eller utropstecken (!).",
        typ: "val",
        rader: `
          Vad heter du{.|*?|!}
          Jag har en röd cykel{*.|?|!}
          Var bor du{.|*?|!}
          Hunden heter Bamse{*.|?|!}
          Hurra, vi vann{.|?|*!}
          Kan du hjälpa mig{.|*?|!}
          Vi äter fisk på fredag{*.|?|!}
          Aj, jag slog mig{.|?|*!}
        `,
      },
      {
        rubrik: "Del 5: Substantiv, verb och adjektiv",
        instruktion: "Substantiv är namn på saker, djur och personer. Verb är något man gör. Adjektiv beskriver hur något är. Välj rätt svar.",
        typ: "val",
        rader: `
          Flickan hoppar. Hoppar är ett {substantiv|*verb|adjektiv}.
          Bollen är röd. Röd är ett {substantiv|verb|*adjektiv}.
          Katten sover. Katten är ett {*substantiv|verb|adjektiv}.
          Vi läser en bok. Bok är ett {*substantiv|verb|adjektiv}.
          Huset är stort. Stort är ett {substantiv|verb|*adjektiv}.
          Pojken springer. Springer är ett {substantiv|*verb|adjektiv}.
          Vilket ord är ett substantiv? {glad|*stol|äter}
          Vilket ord är ett verb? {*simmar|blå|bord}
          Vilket ord är ett adjektiv? {cykel|skriver|*mjuk}
          Vilket ord är ett substantiv? {snabb|*äpple|sjunger}
          Vilket ord är ett verb? {liten|*dansar|fönster}
          Vilket ord är ett adjektiv? {*kall|lampa|ritar}
        `,
      },
      {
        rubrik: "Del 6: En- och ett-ord",
        instruktion: "Välj en eller ett.",
        typ: "val",
        rader: `
          Jag har {*en|ett} bil.
          Vi bor i {en|*ett} hus.
          Hon äter {*en|ett} banan.
          Där står {en|*ett} bord.
          Jag ser {*en|ett} fågel.
          Han dricker {en|*ett} glas mjölk.
          Vi har {*en|ett} katt.
          Jag fick {en|*ett} brev.
          Det ligger {*en|ett} sten på vägen.
          Mamma köpte {en|*ett} äpple.
        `,
      },
      {
        rubrik: "Del 7: Ental och flertal",
        instruktion: "Skriv ordet i flertal.",
        typ: "skriv",
        rader: `
          en bil – två {bilar}
          en katt – tre {katter}
          ett hus – två {hus}
          en flicka – fyra {flickor}
          en stol – fem {stolar}
          ett äpple – två {äpplen}
          en bok – tre {böcker}
          en fot – två {fötter}
          ett barn – många {barn}
          en mus – två {möss}
        `,
      },
      {
        rubrik: "Del 8: Nutid och dåtid",
        instruktion: "Skriv verbet i rätt tid. Igår = dåtid. Idag = nutid.",
        typ: "skriv",
        rader: `
          Igår {lekte} jag i parken. (leker)
          Igår {åt} vi pannkakor. (äter)
          Igår {sprang} hunden i skogen. (springer)
          Igår {skrev} jag ett brev. (skriver)
          Igår {hoppade} vi studsmatta. (hoppar)
          Igår {såg} jag en film. (ser)
          Idag {läser} jag en bok. (läste)
          Idag {simmar} vi i sjön. (simmade)
          Idag {sover} katten i soffan. (sov)
          Igår {var} det kallt ute. (är)
        `,
      },
      {
        rubrik: "Del 9: Motsatsord och synonymer",
        instruktion: "Motsatsord betyder det motsatta. Synonymer betyder ungefär samma sak. Välj rätt ord.",
        typ: "val",
        rader: `
          Motsatsen till stor är {lång|*liten|tung}.
          Motsatsen till varm är {het|*kall|blöt}.
          Motsatsen till glad är {*ledsen|snäll|trött}.
          Motsatsen till upp är {in|*ner|ut}.
          Motsatsen till ljus är {*mörk|vit|klar}.
          Motsatsen till gammal är {*ung|äldre|liten}.
          Ett annat ord för snabb är {långsam|*kvick|stark}.
          Ett annat ord för glad är {*lycklig|sur|rädd}.
          Ett annat ord för börja är {sluta|*starta|vänta}.
          Ett annat ord för prata är {*tala|tiga|höra}.
          Ett annat ord för vacker är {ful|*fin|arg}.
          Ett annat ord för rädd är {modig|*skrämd|glad}.
        `,
      },
      {
        rubrik: "Del 10: Sammansatta ord",
        instruktion: "Sätt ihop de två orden till ett nytt ord. Skriv ihop!",
        typ: "skriv",
        rader: `
          fot + boll = {fotboll}
          snö + gubbe = {snögubbe}
          tand + borste = {tandborste}
          jul + gran = {julgran}
          cykel + hjälm = {cykelhjälm}
          regn + jacka = {regnjacka}
          bok + hylla = {bokhylla}
          katt + mat = {kattmat}
          sand + låda = {sandlåda}
          hus + båt = {husbåt}
        `,
      },
    ],
  },
  {
    id: "prov-mellanstadiet",
    titel: "Grammatikprov – mellanstadiet",
    underrubrik: "Åk 4–6: ordklasser, böjning, satsdelar och skiljetecken",
    omrade: "Grammatikprov",
    steg: 2,
    feltyper: [
      "grammatik.verbform",
      "grammatik.bojning",
      "grammatik.de-dem",
      "grammatik.subjekt-verb",
      "skiljetecken.komma",
      "skiljetecken.dialog",
      "stavning.sarskrivning",
    ],
    regel: [
      "Provet har 100 uppgifter. Varje rätt ger 1 poäng.",
      "Läs instruktionen för varje del noga innan du svarar.",
      "Läs igenom dina svar när du är klar.",
    ],
    delar: [
      {
        rubrik: "Del 1: Ordklasser",
        instruktion: "Vilken ordklass hör ordet efter strecket till i meningen? Välj rätt svar.",
        typ: "val",
        rader: `
          Hunden skäller högt. – högt: {adjektiv|*adverb|verb|substantiv}
          Katten ligger under bordet. – under: {adverb|*preposition|konjunktion|pronomen}
          Hon har tre syskon. – tre: {*räkneord|adjektiv|pronomen|substantiv}
          Jag gillar äpplen och päron. – och: {preposition|adverb|*konjunktion|räkneord}
          Vi ska träffas imorgon. – vi: {substantiv|*pronomen|räkneord|adverb}
          Elefanten är ett stort djur. – stort: {adverb|*adjektiv|verb|substantiv}
          Barnen sjunger i kören. – sjunger: {substantiv|adjektiv|*verb|adverb}
          Lisa cyklar till skolan. – Lisa: {*substantiv|pronomen|verb|adjektiv}
          Jag kommer, men jag är sen. – men: {adverb|preposition|*konjunktion|pronomen}
          Han kom fjärde i loppet. – fjärde: {adjektiv|*räkneord|adverb|substantiv}
          Vi går ofta till biblioteket. – ofta: {*adverb|adjektiv|preposition|verb}
          Boken ligger på hyllan. – på: {adverb|*preposition|konjunktion|verb}
          Ge den till mig! – mig: {substantiv|räkneord|*pronomen|preposition}
          Solen lyser idag. – solen: {*substantiv|verb|adjektiv|pronomen}
          De skrattade åt skämtet. – skrattade: {substantiv|*verb|adverb|adjektiv}
          Vill du ha te eller kaffe? – eller: {preposition|*konjunktion|adverb|pronomen}
        `,
      },
      {
        rubrik: "Del 2: Substantivets böjning",
        instruktion: "Skriv den form som saknas. Ordningen är: obestämd form ental – bestämd form ental – obestämd form flertal – bestämd form flertal.",
        typ: "skriv",
        rader: `
          en bok – boken – böcker – {böckerna}
          en stol – {stolen} – stolar – stolarna
          ett hus – huset – {hus} – husen
          ett äpple – {äpplet} – äpplen – äpplena
          en flicka – flickan – {flickor} – flickorna
          en man – mannen – {män} – männen
          en fot – foten – fötter – {fötterna}
          ett barn – {barnet} – barn – barnen
          en nyckel – nyckeln – {nycklar} – nycklarna
          ett öga – ögat – ögon – {ögonen}
          en mus – {musen} – möss – mössen
          ett land – landet – {länder} – länderna
        `,
      },
      {
        rubrik: "Del 3: Verbets tempus",
        instruktion: "Skriv verbet i den tempusform som står inom parentes: presens, preteritum, perfekt eller futurum.",
        typ: "skriv",
        rader: `
          Igår {skrev} jag en dikt. (skriva, preteritum)
          Just nu {läser} hon en tidning. (läsa, presens)
          Jag har {ätit} lunch redan. (äta, perfekt)
          Jag {ska resa/kommer att resa} till Spanien i sommar. (resa, futurum)
          Förra veckan {sprang} vi fem kilometer. (springa, preteritum)
          Varje morgon {dricker} pappa kaffe. (dricka, presens)
          Hon har {skrivit} tre böcker. (skriva, perfekt)
          I fredags {gick} vi på bio. (gå, preteritum)
          Har du {sett} min mobil? (se, perfekt)
          Förra natten {sov} hunden i min säng. (sova, preteritum)
          Vi har {vunnit} matchen! (vinna, perfekt)
          Vi {ska baka/kommer att baka} bullar i kväll. (baka, futurum)
        `,
      },
      {
        rubrik: "Del 4: Adjektivets komparation",
        instruktion: "Skriv den form av adjektivet som saknas: positiv – komparativ – superlativ.",
        typ: "skriv",
        rader: `
          lång – {längre} – längst
          stor – större – {störst}
          glad – {gladare} – gladast
          gammal – {äldre} – äldst
          bra – bättre – {bäst}
          liten – {mindre} – minst
          snabb – snabbare – {snabbast}
          dålig – {sämre} – sämst
          många – {fler} – flest
          ung – yngre – {yngst}
        `,
      },
      {
        rubrik: "Del 5: Subjekt och predikat",
        instruktion: "Predikatet är verbet som visar vad som händer. Subjektet är den eller det som gör något. Välj rätt svar.",
        typ: "val",
        rader: `
          Vad är subjektet? Mormor bakar bullar. {*Mormor|bakar|bullar}
          Vad är subjektet? Igår spelade Ali fotboll. {Igår|spelade|*Ali|fotboll}
          Vad är subjektet? På lördag ska vi bada. {lördag|ska|*vi|bada}
          Vad är subjektet? Bussen kom för sent. {*Bussen|kom|sent}
          Vad är subjektet? I skogen bor en räv. {skogen|bor|*en räv}
          Vad är predikatet? Eleverna skriver en uppsats. {Eleverna|*skriver|uppsats}
          Vad är predikatet? Solen lyste hela dagen. {Solen|*lyste|dagen}
          Vad är predikatet? Min bror cyklar till jobbet. {bror|*cyklar|jobbet}
          Vad är predikatet? Katten jagade en mus. {Katten|*jagade|mus}
          Vad är predikatet? Imorgon åker vi till Göteborg. {Imorgon|*åker|vi|Göteborg}
        `,
      },
      {
        rubrik: "Del 6: Huvudsats och bisats",
        instruktion: "En huvudsats kan stå ensam som en mening. En bisats kan inte stå ensam och börjar ofta med ord som att, när, om, eftersom och fast. Välj rätt svar.",
        typ: "val",
        rader: `
          Vilken del är en bisats? Jag stannar inne eftersom det regnar. {Jag stannar inne|*eftersom det regnar}
          Vilken del är en bisats? När skolan slutar går vi hem. {*När skolan slutar|går vi hem}
          Vilken del är en bisats? Hon sa att hon var trött. {Hon sa|*att hon var trött}
          Vilken del är en huvudsats? Om det snöar åker vi pulka. {Om det snöar|*åker vi pulka}
          Vilken del är en huvudsats? Jag vet inte var nyckeln är. {*Jag vet inte|var nyckeln är}
          Vilket ord inleder bisatsen? Vi åt glass fast det var kallt. {Vi|åt|*fast|kallt}
          Vilket ord inleder bisatsen? Hunden skällde när brevbäraren kom. {Hunden|skällde|*när|kom}
          Kan "eftersom jag var hungrig" stå ensam som en mening? {ja|*nej}
        `,
      },
      {
        rubrik: "Del 7: De eller dem",
        instruktion: "Välj de eller dem. Byt ut ordet mot vi eller oss: passar vi ska det vara de, passar oss ska det vara dem.",
        typ: "val",
        rader: `
          {*De|Dem} har en stor trädgård.
          Jag pratade med {de|*dem} igår.
          Vi såg {*de|dem} nya filmerna.
          Läraren hjälpte {de|*dem} med uppgiften.
          Vet du var {*de|dem} bor?
          {*De|Dem} flesta gillar sommaren.
          Jag ska ringa {de|*dem} ikväll.
          Igår spelade {*de|dem} schack.
        `,
      },
      {
        rubrik: "Del 8: Skiljetecken – uppräkning och dialog",
        instruktion: "Skriv meningen rätt. Sätt komma mellan orden i en uppräkning (men inte före och). Använd talstreck (–) eller citattecken (” ”) när någon pratar.",
        typ: "ratta",
        rader: `
          Jag köpte mjölk bröd och ost. => Jag köpte mjölk, bröd och ost.
          Vi har en hund en katt och två kaniner. => Vi har en hund, en katt och två kaniner.
          Han tycker om att läsa rita och simma. => Han tycker om att läsa, rita och simma.
          Måndag tisdag och onsdag har vi idrott. => Måndag, tisdag och onsdag har vi idrott.
          Kom hit sa mamma. => – Kom hit, sa mamma. || ”Kom hit”, sa mamma.
          Var bor du frågade Leo. => – Var bor du? frågade Leo. || ”Var bor du?” frågade Leo.
          Jag är hungrig sa Sara. => – Jag är hungrig, sa Sara. || ”Jag är hungrig”, sa Sara.
          Akta dig ropade pappa. => – Akta dig! ropade pappa. || ”Akta dig!” ropade pappa.
        `,
      },
      {
        rubrik: "Del 9: Sammansatta ord",
        instruktion: "Sammansatta ord skrivs ihop. Välj rätt svar.",
        typ: "val",
        rader: `
          Vi spelade {fot boll|*fotboll} på rasten.
          Jag tappade min {*skolväska|skol väska}.
          Han köpte en {glass strut|*glasstrut}.
          Mormor bakade en {*chokladtårta|choklad tårta}.
          Vad betyder "en sjuk sköterska"? {*en sköterska som är sjuk|en person som arbetar i vården}
          Vilket ord är ett sammansatt ord? {sommar|*sommarlov|lov}
          Vilket ord är ett sammansatt ord? {springer|*tandläkare|vacker}
          Vi såg en {*fotbollsmatch|fotbolls match} i helgen.
        `,
      },
      {
        rubrik: "Del 10: Särskrivning",
        instruktion: "Meningen har ett särskrivet ord. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Jag borstar tänderna med en tand borste. => Jag borstar tänderna med en tandborste.
          Vi åt potatis mos till middag. => Vi åt potatismos till middag.
          Min lill bror är fem år. => Min lillebror är fem år. || Min lillbror är fem år.
          Han har en ny dator skärm. => Han har en ny datorskärm.
          Vi badade i sim hallen. => Vi badade i simhallen.
          Ta på dig regn kläderna! => Ta på dig regnkläderna!
          Jag läser en serie tidning. => Jag läser en serietidning.
          Hon fick en present på sin födelse dag. => Hon fick en present på sin födelsedag.
        `,
      },
    ],
  },
];
