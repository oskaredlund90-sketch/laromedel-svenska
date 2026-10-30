import type { HafteKalla } from "../typer";

export const MENINGSBYGGNAD_HAFTEN: HafteKalla[] = [
  {
    id: "meningsbyggnad-1-sambandsord",
    titel: "Och, men, eftersom …",
    underrubrik: "Sambandsord som binder ihop texten",
    omrade: "Meningsbyggnad",
    steg: 2,
    feltyper: ["struktur.textbindning", "struktur.meningsvariation"],
    regel: [
      "Sambandsord visar hur saker hänger ihop: och (lägger till), men (motsats), eftersom/för att (orsak), så/därför (följd), när/innan/sedan (tid), om (villkor).",
      "Variera! Skriv inte bara 'och sen'. Pröva: först, sedan, efter det, till slut.",
      "Tips: läs meningen med olika sambandsord och lyssna vilket som passar.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj det sambandsord som passar bäst.",
        typ: "val",
        rader: `
          Jag ville gå ut, {*men|och|så} det regnade.
          Vi stannade inne {*eftersom|men|fast} det regnade.
          Det regnade, {*så|men|fast} vi stannade inne.
          Jag gillar äpplen {*och|men|så} päron.
          Han var trött, {*men|eftersom|så} han kunde inte sova.
          Vi tog på oss jackor {*eftersom|men|fast} det var kallt.
          Det var kallt, {*så|men|eftersom} vi tog på oss jackor.
          {*När|Men|Så} jag kom hem, åt jag mat.
          Vi badade {*fast|eftersom|så} vattnet var kallt.
          {*Om|Men|Och} du vill, kan du följa med.
          Jag tvättade händerna {*innan|men|fast} jag åt.
          Hon läste en bok {*medan|men|så} hon väntade.
          Jag har en katt {*och|men|fast} en hund.
          Han sprang fort, {*men|så|eftersom} han kom ändå sist.
          Vi skyndade oss {*för att|men|fast} hinna med bussen.
          Jag är hungrig, {*så|men|fast} jag ska äta nu.
          Hon log {*eftersom|men|fast} hon var glad.
          {*Först|Men|Fast} åt vi, sedan diskade vi.
          Vi åt. {*Sedan|Men|Fast} diskade vi.
          Jag vill gärna komma, {*men|så|eftersom} jag kan inte.
          Han fick en present {*eftersom|men|fast} han fyllde år.
          Det var mörkt, {*men|så|eftersom} vi var inte rädda.
          {*Eftersom|Men|Och} bussen var sen, kom vi för sent.
          Vi väntade {*tills|men|fast} regnet slutade.
          Jag ringde, {*men|så|för att} ingen svarade.
          Hon tränar varje dag {*för att|men|fast} bli bättre.
          {*Innan|Men|Så} vi gick, städade vi.
          Det var roligt, {*men|eftersom|för att} jag blev trött.
          Han hade ont i foten, {*så|men|fast} han stannade hemma.
          Jag kan inte simma, {*men|så|eftersom} jag vill lära mig.
          {*Till slut|Men|Fast} hittade vi vägen hem.
          Vi gick hem {*när|men|fast} filmen var slut.
          Hon är snäll {*och|men|fast} rolig.
          Jag glömde mössan, {*så|men|eftersom} jag frös.
          Vi gick ut {*trots att|eftersom|så} det snöade.
          {*Medan|Men|Så} mamma lagade mat, dukade jag.
          Han vann {*eftersom|men|fast} han hade tränat mycket.
          Jag tycker om sommaren {*eftersom|men|fast} det är varmt.
          Vi har prov imorgon, {*så|men|fast} jag måste plugga.
          Hon ville sova, {*men|så|eftersom} grannen spelade musik.
          {*Sedan|Men|Fast} gick vi och la oss.
          Vi kan gå på bio {*eller|men|fast} spela spel.
          Jag lånade en bok {*som|men|fast} handlade om rymden.
          Han kom för sent {*fast|så|för att} han sprang.
          {*Efter det|Men|Fast} åkte vi hem.
          Jag stannade hemma {*för att|men|fast} jag var sjuk.
          Vi kan inte gå ut {*förrän|men|så} vi har ätit.
          Hon blev glad {*när|men|fast} hon fick brevet.
          Det var svårt, {*men|eftersom|så} jag gav inte upp.
          {*Om|Men|Fast} det blir fint väder, grillar vi.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Välj det sambandsord som passar bäst. Här finns svårare ord.",
        typ: "val",
        rader: `
          Det regnade. {*Därför|Dessutom|Däremot} stannade vi inne.
          Han är duktig på matte. {*Dessutom|Därför|Alltså} är han bra på svenska.
          Jag gillar te. Min syster, {*däremot|därför|dessutom}, gillar kaffe.
          Bussen var försenad. {*Därför|Däremot|Dessutom} kom vi för sent.
          Vi gick ut {*trots att|eftersom|därför} det stormade.
          Alla var trötta. {*Ändå|Därför|Dessutom} fortsatte vi.
          Djuret har päls, fyra ben och skäller. Det är {*alltså|däremot|dessutom} en hund.
          {*Å ena sidan|Därför|Dessutom} är det dyrt, å andra sidan håller det länge.
          Hon tränade hårt. {*Till slut|Däremot|Dessutom} vann hon.
          Vi har ingen bil. {*Istället|Dessutom|Därför} cyklar vi.
          Glass är gott. {*Dessutom|Däremot|Alltså} är det kallt och skönt på sommaren.
          Det var kallt ute. {*Trots det|Därför|Dessutom} badade vi.
          Han svarade inte. Han var {*nämligen|däremot|dessutom} sjuk.
          {*För det första|Däremot|Ändå} är skoldagarna för långa. För det andra är lunchen för kort.
          Mobiler kan vara bra i skolan. {*Samtidigt|Därför|Alltså} kan de störa.
          Hon hade inte pluggat. {*Ändå|Därför|Dessutom} klarade hon provet.
          Jag tycker om hundar. Katter, {*däremot|därför|alltså}, är jag rädd för.
          Det är viktigt att röra på sig. {*Därför|Däremot|Ändå} borde vi ha mer idrott.
          Vi missade bussen. {*Följaktligen|Däremot|Dessutom} kom vi försent.
          {*Sammanfattningsvis|Däremot|Ändå} anser jag att läxor behövs.
          Vi tappade bort kartan. {*Därför|Dessutom|Däremot} gick vi vilse.
          Jag har en cykel. {*Dessutom|Därför|Ändå} har jag en sparkcykel.
          Pizzan var kall. {*Ändå|Därför|Alltså} åt vi upp den.
          Han tycker om vinter. Hans bror, {*däremot|därför|alltså}, längtar efter sommaren.
          Det var mitt i natten. Det var {*alltså|däremot|dessutom} mörkt ute.
          Vi har inget mjöl. Vi kan {*därför|däremot|dessutom} inte baka.
          Hon är bra på att rita. {*Dessutom|Därför|Ändå} sjunger hon fint.
          Jag hade glömt nyckeln. {*Som tur var|Däremot|Därför} var mamma hemma.
          Filmen var lång. {*Trots det|Därför|Alltså} var den aldrig tråkig.
          {*Till sist|Däremot|Dessutom} vill jag säga tack till alla.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Skriv ett sambandsord som passar. Flera svar kan vara rätt.",
        typ: "skriv",
        rader: `
          Jag ville följa med, {men} jag var sjuk.
          Vi stannade inne {eftersom/för att/då} det regnade.
          Det regnade, {så/därför} vi stannade inne.
          {När/Efter att/Sedan} jag ätit, borstade jag tänderna.
          Han sprang fort, {men/ändå} han kom sist.
          {Om} du vill, får du låna min cykel.
          Vi badade {fast/trots att/även om} vattnet var kallt.
          Jag läste {medan/när} jag väntade.
          Hon tränar varje dag {för att} bli snabbare.
          Jag tvättade händerna {innan/före} jag åt.
          Det var mörkt, {men} vi var inte rädda.
          Jag är trött, {så/därför} jag går och lägger mig.
          Vi väntade {tills/till} bussen kom.
          {Eftersom/Då} det var lördag, sov vi länge.
          Hon blev glad {när/då/eftersom} hon fick brevet.
          Jag har en hund {och} en katt.
          Vill du ha glass {eller} kaka?
          {Först} åt vi. Sedan gick vi ut.
          Vi åt. {Sedan/Sen/Efter det/Därefter} gick vi ut.
          Det var svårt. {Ändå/Men} gav jag inte upp.
        `,
      },
    ],
  },
  {
    id: "meningsbyggnad-2-bisats-inte",
    titel: "Jag gillar inte – eftersom jag inte gillar",
    underrubrik: "Bisatser och var 'inte' ska stå",
    omrade: "Meningsbyggnad",
    steg: 3,
    feltyper: ["grammatik.ordfoljd", "struktur.meningsvariation"],
    regel: [
      "I en huvudsats står inte (och andra ord som aldrig, alltid, ofta) efter verbet: Jag gillar inte fisk.",
      "I en bisats står inte före verbet: …eftersom jag inte gillar fisk. Minnesregel: BIFF – Bisats Inte Före Finit verb.",
      "Bisatser börjar ofta med att, som, om, när, eftersom, fast, därför att, medan.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj rätt ordföljd. Är det en huvudsats eller en bisats?",
        typ: "val",
        rader: `
          Jag {*gillar inte|inte gillar} fisk.
          Jag äter inte fisk eftersom jag {*inte gillar|gillar inte} det.
          Han {*kom inte|inte kom} till skolan.
          Han var hemma eftersom han {*inte mådde|mådde inte} bra.
          Vi {*har aldrig|aldrig har} varit i Spanien.
          Det är synd att vi {*aldrig har|har aldrig} varit där.
          Hon {*läser ofta|ofta läser} på kvällen.
          Jag vet att hon {*ofta läser|läser ofta} på kvällen.
          Jag {*förstår inte|inte förstår} uppgiften.
          Läraren märkte att jag {*inte förstod|förstod inte} uppgiften.
          Vi {*ska inte|inte ska} åka bort i sommar.
          Mormor blev ledsen när vi sa att vi {*inte skulle|skulle inte} komma.
          Katten {*vill inte|inte vill} gå ut.
          Det är konstigt att katten {*inte vill|vill inte} gå ut.
          Han {*svarar alltid|alltid svarar} snabbt.
          Jag gillar honom eftersom han {*alltid svarar|svarar alltid} snabbt.
          Jag {*hittar inte|inte hittar} mina skor.
          Jag är sen därför att jag {*inte hittade|hittade inte} mina skor.
          Hon {*kunde inte|inte kunde} sova.
          Hon var trött eftersom hon {*inte kunde|kunde inte} sova.
          Vi {*hann inte|inte hann} med bussen.
          Vi kom för sent, eftersom vi {*inte hann|hann inte} med bussen.
          Han {*äter aldrig|aldrig äter} frukost.
          Det är dumt att han {*aldrig äter|äter aldrig} frukost.
          Jag {*tycker inte|inte tycker} om spindlar.
          Alla vet att jag {*inte tycker|tycker inte} om spindlar.
          Bussen {*kom inte|inte kom}.
          Vi gick hem när bussen {*inte kom|kom inte}.
          De {*har inte|inte har} gjort läxan.
          Läraren blev arg för att de {*inte hade|hade inte} gjort läxan.
          Jag {*kan inte|inte kan} simma.
          Jag badar bara där jag bottnar, eftersom jag {*inte kan|kan inte} simma.
          Hon {*kommer kanske|kanske kommer} imorgon.
          Hon sa att hon {*kanske kommer|kommer kanske} imorgon.
          Vi {*får inte|inte får} springa i korridoren.
          Det är en regel att vi {*inte får|får inte} springa i korridoren.
          Han {*vet inte|inte vet} svaret.
          Det syns att han {*inte vet|vet inte} svaret.
          Jag {*vill inte|inte vill} gå och lägga mig.
          Mamma blev trött på att jag {*inte ville|ville inte} gå och lägga mig.
          Det {*snöar sällan|sällan snöar} i Skåne.
          Barnen är ledsna över att det {*sällan snöar|snöar sällan} i Skåne.
          Jag {*glömmer aldrig|aldrig glömmer} den dagen.
          Det var en dag som jag {*aldrig glömmer|glömmer aldrig}.
          Vi {*behöver inte|inte behöver} skynda oss.
          Ta det lugnt, eftersom vi {*inte behöver|behöver inte} skynda oss.
          Han {*ringde inte|inte ringde}.
          Hon undrade varför han {*inte ringde|ringde inte}.
          Jag {*orkar inte|inte orkar} mer.
          Jag slutar nu, eftersom jag {*inte orkar|orkar inte} mer.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Ordet inte (eller aldrig) står på fel plats i bisatsen. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Jag äter inte fisk eftersom jag gillar inte det. => Jag äter inte fisk eftersom jag inte gillar det.
          Han stannade hemma eftersom han mådde inte bra. => Han stannade hemma eftersom han inte mådde bra.
          Jag vet att hon läser inte så mycket. => Jag vet att hon inte läser så mycket.
          Läraren märkte att jag förstod inte. => Läraren märkte att jag inte förstod.
          Det är synd att vi har aldrig varit där. => Det är synd att vi aldrig har varit där.
          Hon var trött eftersom hon kunde inte sova. => Hon var trött eftersom hon inte kunde sova.
          Vi kom för sent eftersom vi hann inte med bussen. => Vi kom för sent eftersom vi inte hann med bussen.
          Det är dumt att han äter aldrig frukost. => Det är dumt att han aldrig äter frukost.
          Alla vet att jag tycker inte om spindlar. => Alla vet att jag inte tycker om spindlar.
          Vi gick hem när bussen kom inte. => Vi gick hem när bussen inte kom.
          Läraren blev arg för att de hade inte gjort läxan. => Läraren blev arg för att de inte hade gjort läxan.
          Jag badar inte där eftersom jag kan inte simma. => Jag badar inte där eftersom jag inte kan simma.
          Det är en regel att vi får inte springa. => Det är en regel att vi inte får springa.
          Det syns att han vet inte svaret. => Det syns att han inte vet svaret.
          Hon undrade varför han ringde inte. => Hon undrade varför han inte ringde.
          Jag slutar nu eftersom jag orkar inte mer. => Jag slutar nu eftersom jag inte orkar mer.
          Det var en dag som jag glömmer aldrig. => Det var en dag som jag aldrig glömmer.
          Mamma sa att vi behöver inte skynda oss. => Mamma sa att vi inte behöver skynda oss.
          Jag är ledsen för att du kan inte komma. => Jag är ledsen för att du inte kan komma.
          Han sa att han ville inte följa med. => Han sa att han inte ville följa med.
          Om du vill inte gå, kan du stanna. => Om du inte vill gå, kan du stanna.
          Fast jag hade inte pluggat, klarade jag provet. => Fast jag inte hade pluggat, klarade jag provet.
          Vi vet inte varför katten äter inte. => Vi vet inte varför katten inte äter.
          När han kom inte, gick vi. => När han inte kom, gick vi.
          Jag hoppas att det regnar inte imorgon. => Jag hoppas att det inte regnar imorgon.
          Hon blev glad att hon behövde inte städa. => Hon blev glad att hon inte behövde städa.
          Det är konstigt att du har aldrig sett snö. => Det är konstigt att du aldrig har sett snö.
          Han skämdes för att han kunde inte svaret. => Han skämdes för att han inte kunde svaret.
          Jag förstår att du orkar inte. => Jag förstår att du inte orkar.
          Det var tur att vi glömde inte biljetterna. => Det var tur att vi inte glömde biljetterna.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Bind ihop de två meningarna med ordet i parentesen. Tänk på var inte ska stå!",
        typ: "ratta",
        rader: `
          Jag kom inte. Jag var sjuk. (eftersom) => Jag kom inte eftersom jag var sjuk.
          Han åt inte. Han var inte hungrig. (eftersom) => Han åt inte eftersom han inte var hungrig.
          Vi gick hem. Bussen kom inte. (eftersom) => Vi gick hem eftersom bussen inte kom.
          Hon sa något. Hon kunde inte komma. (att) => Hon sa att hon inte kunde komma.
          Jag vet något. Du gillar inte fisk. (att) => Jag vet att du inte gillar fisk.
          Vi badade. Det var inte varmt. (fast) => Vi badade fast det inte var varmt.
          Han frös. Han hade inte jacka. (eftersom) => Han frös eftersom han inte hade jacka.
          Mamma blev arg. Jag hade inte städat. (för att) => Mamma blev arg för att jag inte hade städat.
          Jag stannar hemma. Jag mår inte bra. (eftersom) => Jag stannar hemma eftersom jag inte mår bra.
          Det är synd. Du kan inte komma. (att) => Det är synd att du inte kan komma.
          Vi väntade. Han svarade inte. (men) => Vi väntade, men han svarade inte.
          Jag frågade. Varför kom du inte? (varför) => Jag frågade varför du inte kom.
          Hon var glad. Hon behövde inte gå. (för att) => Hon var glad för att hon inte behövde gå.
          Vi skyndade oss. Vi ville inte missa tåget. (eftersom) => Vi skyndade oss eftersom vi inte ville missa tåget.
          Jag tror något. Det regnar inte imorgon. (att) => Jag tror att det inte regnar imorgon.
          Han ljög. Han ville inte få skäll. (eftersom) => Han ljög eftersom han inte ville få skäll.
          Det är bra. Du gav inte upp. (att) => Det är bra att du inte gav upp.
          Jag läser. Jag kan inte sova. (när) => Jag läser när jag inte kan sova.
          Hon skrattade. Hon förstod inte skämtet. (fast) => Hon skrattade fast hon inte förstod skämtet.
          Vi gick in. Det var inte kallt. (fast) => Vi gick in fast det inte var kallt.
        `,
      },
    ],
  },
];
