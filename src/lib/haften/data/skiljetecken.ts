import type { HafteKalla } from "../typer";

export const SKILJETECKEN_HAFTEN: HafteKalla[] = [
  {
    id: "skiljetecken-1-punkt",
    titel: "Punkt, frågetecken eller utropstecken?",
    underrubrik: "Meningar och meningsgränser",
    omrade: "Skiljetecken",
    steg: 1,
    feltyper: ["skiljetecken.punkt"],
    regel: [
      "En mening börjar med stor bokstav och slutar med punkt, frågetecken eller utropstecken.",
      "Frågetecken när man frågar något. Utropstecken när man ropar, blir arg, glad eller förvånad.",
      "När en tanke är klar sätter man punkt. Skriv inte 'och sen … och sen' – sätt punkt i stället!",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj punkt, frågetecken eller utropstecken.",
        typ: "val",
        rader: `
          Vi åt glass på stranden{*.|?|!}
          Vad heter du{.|*?|!}
          Hjälp, det brinner{.|?|*!}
          Min katt heter Måns{*.|?|!}
          Kommer du på festen{.|*?|!}
          Akta dig{.|?|*!}
          Idag regnar det{*.|?|!}
          Var bor du{.|*?|!}
          Grattis på födelsedagen{.|?|*!}
          Jag gillar att läsa{*.|?|!}
          Varför gråter du{.|*?|!}
          Stopp{.|?|*!}
          Bussen kommer klockan åtta{*.|?|!}
          Har du sett min mössa{.|*?|!}
          Vad roligt{.|?|*!}
          Hunden sover i korgen{*.|?|!}
          När slutar skolan{.|*?|!}
          Aj, det gjorde ont{.|?|*!}
          Vi har svenska på måndag{*.|?|!}
          Vill du ha mer saft{.|*?|!}
          Tyst{.|?|*!}
          Mormor bor i Umeå{*.|?|!}
          Hur gammal är du{.|*?|!}
          Vi vann{.|?|*!}
          Jag har två syskon{*.|?|!}
          Vem har tagit min penna{.|*?|!}
          Spring{.|?|*!}
          Solen går ner tidigt på vintern{*.|?|!}
          Kan du hjälpa mig{.|*?|!}
          Vilken tur{.|?|*!}
          Jag cyklar till skolan{*.|?|!}
          Vad är klockan{.|*?|!}
          Hurra{.|?|*!}
          Det finns många sjöar i Sverige{*.|?|!}
          Får jag låna din sudd{.|*?|!}
          Kom hit genast{.|?|*!}
          Pappa lagar mat{*.|?|!}
          Vilken färg gillar du{.|*?|!}
          Vad gott{.|?|*!}
          Vi ska åka till mormor{*.|?|!}
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Det ska vara två meningar. Sätt punkt och stor bokstav där den nya meningen börjar. Ändra inga ord.",
        typ: "ratta",
        rader: `
          Vi gick hem sen åt vi mat. => Vi gick hem. Sen åt vi mat.
          Jag har en hund han heter Sigge. => Jag har en hund. Han heter Sigge.
          Det regnade vi stannade inne. => Det regnade. Vi stannade inne.
          Jag vaknade tidigt jag var hungrig. => Jag vaknade tidigt. Jag var hungrig.
          Vi åkte till stranden vattnet var kallt. => Vi åkte till stranden. Vattnet var kallt.
          Min syster är sju år hon går i ettan. => Min syster är sju år. Hon går i ettan.
          Katten sprang ut den klättrade upp i ett träd. => Katten sprang ut. Den klättrade upp i ett träd.
          Vi spelade fotboll jag gjorde två mål. => Vi spelade fotboll. Jag gjorde två mål.
          Mamma bakade bullar de var jättegoda. => Mamma bakade bullar. De var jättegoda.
          Det var mörkt ute vi tände ett ljus. => Det var mörkt ute. Vi tände ett ljus.
          Jag läste en bok den handlade om en drake. => Jag läste en bok. Den handlade om en drake.
          Vi kom till skolan klockan var åtta. => Vi kom till skolan. Klockan var åtta.
          Pappa ringde han var sen. => Pappa ringde. Han var sen.
          Jag tappade min glass den hamnade på marken. => Jag tappade min glass. Den hamnade på marken.
          Vi gick till parken där fanns en stor gunga. => Vi gick till parken. Där fanns en stor gunga.
          Det snöade hela natten på morgonen var allt vitt. => Det snöade hela natten. På morgonen var allt vitt.
          Jag har ont i halsen jag stannar hemma. => Jag har ont i halsen. Jag stannar hemma.
          Hunden skällde någon stod vid dörren. => Hunden skällde. Någon stod vid dörren.
          Vi åt middag sedan tittade vi på film. => Vi åt middag. Sedan tittade vi på film.
          Min bästa vän heter Noor hon bor bredvid mig. => Min bästa vän heter Noor. Hon bor bredvid mig.
          Bussen var full vi fick stå. => Bussen var full. Vi fick stå.
          Jag hittade en sten den glittrade. => Jag hittade en sten. Den glittrade.
          Vi badade länge efteråt frös vi. => Vi badade länge. Efteråt frös vi.
          Läraren läste högt alla lyssnade. => Läraren läste högt. Alla lyssnade.
          Jag fick en cykel den är röd. => Jag fick en cykel. Den är röd.
          Det blev tyst alla tittade på mig. => Det blev tyst. Alla tittade på mig.
          Vi tältade i skogen på natten hörde vi en uggla. => Vi tältade i skogen. På natten hörde vi en uggla.
          Mormor kom på besök hon hade med sig kakor. => Mormor kom på besök. Hon hade med sig kakor.
          Jag sprang så fort jag kunde jag kom först. => Jag sprang så fort jag kunde. Jag kom först.
          Vi var trötta vi gick och la oss. => Vi var trötta. Vi gick och la oss.
        `,
      },
      {
        rubrik: "Del C",
        instruktion: "Ta bort 'och sen' och 'och' där en ny mening ska börja. Sätt punkt och stor bokstav i stället. Ändra inga andra ord.",
        typ: "ratta",
        rader: `
          Vi gick till stranden och sen badade vi. => Vi gick till stranden. Sen badade vi.
          Jag vaknade och sen åt jag frukost. => Jag vaknade. Sen åt jag frukost.
          Vi åkte till stan och sen köpte vi skor. => Vi åkte till stan. Sen köpte vi skor.
          Hon kom hem och sen gjorde hon läxan. => Hon kom hem. Sen gjorde hon läxan.
          Vi spelade spel och sen åt vi popcorn. => Vi spelade spel. Sen åt vi popcorn.
          Jag borstade tänderna och sen somnade jag. => Jag borstade tänderna. Sen somnade jag.
          Vi gick in i skogen och sen hörde vi ett ljud. => Vi gick in i skogen. Sen hörde vi ett ljud.
          Han öppnade dörren och sen sprang katten ut. => Han öppnade dörren. Sen sprang katten ut.
          Vi bakade en kaka och sen åt vi upp den. => Vi bakade en kaka. Sen åt vi upp den.
          Jag ringde mormor och sen pratade vi länge. => Jag ringde mormor. Sen pratade vi länge.
          Vi kom fram och sen packade vi upp. => Vi kom fram. Sen packade vi upp.
          Det började regna och sen sprang vi hem. => Det började regna. Sen sprang vi hem.
          Vi åt lunch och sen gick vi ut. => Vi åt lunch. Sen gick vi ut.
          Jag läste klart boken och sen lånade jag en ny. => Jag läste klart boken. Sen lånade jag en ny.
          Vi byggde en koja och sen lekte vi där. => Vi byggde en koja. Sen lekte vi där.
          Jag kom till skolan och sen började lektionen. => Jag kom till skolan. Sen började lektionen.
          Vi såg en film och sen diskuterade vi den. => Vi såg en film. Sen diskuterade vi den.
          Hon målade en tavla och sen hängde hon upp den. => Hon målade en tavla. Sen hängde hon upp den.
          Vi plockade blåbär och sen gjorde vi sylt. => Vi plockade blåbär. Sen gjorde vi sylt.
          Jag tränade och sen duschade jag. => Jag tränade. Sen duschade jag.
          Vi gick till affären och sen köpte vi mjölk och sen gick vi hem. => Vi gick till affären. Sen köpte vi mjölk. Sen gick vi hem.
          Jag vaknade och sen klädde jag på mig och sen åt jag. => Jag vaknade. Sen klädde jag på mig. Sen åt jag.
          Vi åkte buss och sen gick vi av och sen gick vi till simhallen. => Vi åkte buss. Sen gick vi av. Sen gick vi till simhallen.
          Han kom hem och sen åt han och sen sov han. => Han kom hem. Sen åt han. Sen sov han.
          Vi spelade match och sen vann vi och sen firade vi. => Vi spelade match. Sen vann vi. Sen firade vi.
          Jag hittade en katt och sen tog jag hem den. => Jag hittade en katt. Sen tog jag hem den.
          Vi grillade korv och sen sjöng vi sånger. => Vi grillade korv. Sen sjöng vi sånger.
          Hon skrev ett brev och sen postade hon det. => Hon skrev ett brev. Sen postade hon det.
          Vi gick upp på berget och sen tittade vi på utsikten. => Vi gick upp på berget. Sen tittade vi på utsikten.
          Jag tappade nyckeln och sen letade jag länge. => Jag tappade nyckeln. Sen letade jag länge.
        `,
      },
    ],
  },
  {
    id: "skiljetecken-2-komma",
    titel: "Var ska kommat stå?",
    underrubrik: "Komma vid uppräkning, men och bisatser",
    omrade: "Skiljetecken",
    steg: 3,
    feltyper: ["skiljetecken.komma"],
    regel: [
      "Uppräkning: komma mellan sakerna, men inte före och: äpplen, päron och bananer.",
      "Före men sätter man komma: Jag ville gå ut, men det regnade.",
      "Börjar meningen med en bisats (när, om, eftersom, fast …) sätter man komma efter den: När jag kom hem, åt jag mat.",
      "Komma efter hälsning och när man vänder sig till någon: Hej, Sara! Kom hit, Leo!",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Ska det vara komma eller inget? Välj.",
        typ: "val",
        rader: `
          Vi köpte äpplen{*,|_} päron och bananer.
          Vi köpte äpplen, päron{,|*_} och bananer.
          Jag ville gå ut{*,|_} men det regnade.
          När jag kom hem{*,|_} åt jag mat.
          Hej{*,|_} Sara!
          Jag gillar fotboll{,|*_} och handboll.
          Om det regnar{*,|_} stannar vi inne.
          Kom hit{*,|_} Leo!
          Hon är snäll{*,|_} men lite blyg.
          Vi tog med oss korv{*,|_} bröd och saft.
          Eftersom jag var sjuk{*,|_} stannade jag hemma.
          Jag stannade hemma{,|*_} eftersom jag var sjuk.
          Vi har en hund{*,|_} två katter och en kanin.
          Fast det var kallt{*,|_} badade vi.
          Vi badade{,|*_} fast det var kallt.
          Tack{*,|_} mamma!
          Jag vill ha en glass{*,|_} men jag har inga pengar.
          Innan vi åt{*,|_} tvättade vi händerna.
          Vi tvättade händerna{,|*_} innan vi åt.
          Han sprang{*,|_} hoppade och skrek.
          Medan jag läste{*,|_} sov katten.
          Katten sov{,|*_} medan jag läste.
          God morgon{*,|_} allihop!
          Jag tog på mig mössa{*,|_} vantar och halsduk.
          Boken var tjock{*,|_} men spännande.
          Om du vill{*,|_} kan du följa med.
          Du kan följa med{,|*_} om du vill.
          Vi åkte till Malmö{*,|_} Lund och Ystad.
          Det var sent{*,|_} men vi var inte trötta.
          När filmen var slut{*,|_} gick vi hem.
          Vi gick hem{,|*_} när filmen var slut.
          Ja{*,|_} det vill jag!
          Han är lång{*,|_} smal och snabb.
          Jag ringde{*,|_} men ingen svarade.
          Eftersom bussen var sen{*,|_} kom vi för sent.
          Vi kom för sent{,|*_} eftersom bussen var sen.
          Ja{*,|_} gärna!
          Vi spelade kort{*,|_} fia och schack.
          Hon ville sova{*,|_} men hon kunde inte.
          Om vi skyndar oss{*,|_} hinner vi.
          Vi hinner{,|*_} om vi skyndar oss.
          Hallå{*,|_} är det någon där?
          Jag åt soppa{,|*_} och bröd.
          Vi målade{*,|_} klippte och klistrade.
          När solen gick ner{*,|_} blev det kallt.
          Det blev kallt{,|*_} när solen gick ner.
          Grattis{*,|_} Ella!
          Jag letade överallt{*,|_} men hittade inget.
          Fast jag var trött{*,|_} gick jag på träningen.
          Hon köpte mjölk{*,|_} ägg och smör.
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Det saknas ett eller flera komman. Skriv meningen rätt.",
        typ: "ratta",
        rader: `
          Vi köpte äpplen päron och bananer. => Vi köpte äpplen, päron och bananer.
          Jag ville gå ut men det regnade. => Jag ville gå ut, men det regnade.
          När jag kom hem åt jag mat. => När jag kom hem, åt jag mat.
          Hej Sara! => Hej, Sara!
          Om det regnar stannar vi inne. => Om det regnar, stannar vi inne.
          Kom hit Leo! => Kom hit, Leo!
          Hon är snäll men lite blyg. => Hon är snäll, men lite blyg.
          Vi tog med oss korv bröd och saft. => Vi tog med oss korv, bröd och saft.
          Eftersom jag var sjuk stannade jag hemma. => Eftersom jag var sjuk, stannade jag hemma.
          Vi har en hund två katter och en kanin. => Vi har en hund, två katter och en kanin.
          Fast det var kallt badade vi. => Fast det var kallt, badade vi.
          Tack mamma! => Tack, mamma!
          Innan vi åt tvättade vi händerna. => Innan vi åt, tvättade vi händerna.
          Han sprang hoppade och skrek. => Han sprang, hoppade och skrek.
          Medan jag läste sov katten. => Medan jag läste, sov katten.
          God morgon allihop! => God morgon, allihop!
          Jag tog på mig mössa vantar och halsduk. => Jag tog på mig mössa, vantar och halsduk.
          Boken var tjock men spännande. => Boken var tjock, men spännande.
          Om du vill kan du följa med. => Om du vill, kan du följa med.
          Vi åkte till Malmö Lund och Ystad. => Vi åkte till Malmö, Lund och Ystad.
          Det var sent men vi var inte trötta. => Det var sent, men vi var inte trötta.
          När filmen var slut gick vi hem. => När filmen var slut, gick vi hem.
          Ja det vill jag! => Ja, det vill jag!
          Han är lång smal och snabb. => Han är lång, smal och snabb.
          Jag ringde men ingen svarade. => Jag ringde, men ingen svarade.
          Eftersom bussen var sen kom vi för sent. => Eftersom bussen var sen, kom vi för sent.
          Ja gärna! => Ja, gärna!
          Vi spelade kort fia och schack. => Vi spelade kort, fia och schack.
          Hon ville sova men hon kunde inte. => Hon ville sova, men hon kunde inte.
          Om vi skyndar oss hinner vi. => Om vi skyndar oss, hinner vi.
          Hallå är det någon där? => Hallå, är det någon där?
          Vi målade klippte och klistrade. => Vi målade, klippte och klistrade.
          När solen gick ner blev det kallt. => När solen gick ner, blev det kallt.
          Grattis Ella! => Grattis, Ella!
          Jag letade överallt men hittade inget. => Jag letade överallt, men hittade inget.
          Fast jag var trött gick jag på träningen. => Fast jag var trött, gick jag på träningen.
          Hon köpte mjölk ägg och smör. => Hon köpte mjölk, ägg och smör.
          Vi sjöng dansade och skrattade. => Vi sjöng, dansade och skrattade.
          Om det är fint väder grillar vi. => Om det är fint väder, grillar vi.
          Jag har en bror två systrar och en hund. => Jag har en bror, två systrar och en hund.
          Hon ville följa med men hon var sjuk. => Hon ville följa med, men hon var sjuk.
          När vi kom fram var det mörkt. => När vi kom fram, var det mörkt.
          Välkommen Omar! => Välkommen, Omar!
          Vi åt pizza drack läsk och tittade på film. => Vi åt pizza, drack läsk och tittade på film.
          Eftersom det var lördag sov vi länge. => Eftersom det var lördag, sov vi länge.
          Jag försökte men det gick inte. => Jag försökte, men det gick inte.
          Medan vi väntade läste jag en serie. => Medan vi väntade, läste jag en serie.
          Hon är rolig smart och snäll. => Hon är rolig, smart och snäll.
          Innan jag somnar läser jag. => Innan jag somnar, läser jag.
          Förlåt Sam! => Förlåt, Sam!
        `,
      },
    ],
  },
  {
    id: "skiljetecken-3-dialog",
    titel: "– Hej, sa Ali.",
    underrubrik: "Skriva dialog med talstreck",
    omrade: "Skiljetecken",
    steg: 2,
    feltyper: ["skiljetecken.dialog"],
    regel: [
      "Varje gång någon säger något börjar man på en ny rad med ett talstreck: – Hej!",
      "Kommer 'sa hon' efter repliken sätter man komma, och fortsätter med liten bokstav: – Jag är trött, sa Ali.",
      "Är repliken en fråga eller ett utrop behålls frågetecknet eller utropstecknet – men det blir ändå liten bokstav efteråt: – Kommer du? frågade hon.",
    ],
    delar: [
      {
        rubrik: "Del A",
        instruktion: "Välj rätt tecken efter repliken.",
        typ: "val",
        rader: `
          – Jag är trött{*,|.} sa Ali.
          – Vad heter du{*?|,} frågade läraren.
          – Akta dig{*!|,} skrek hon.
          – Det är kallt ute{*,|.} sa mamma.
          – Kommer du{*?|.} undrade Leo.
          – Hjälp{*!|.} ropade pojken.
          – Jag vill ha glass{*,|.} sa Ella.
          – Var är katten{*?|,} frågade pappa.
          – Vi vann{*!|.} jublade laget.
          – Jag har glömt boken{*,|.} viskade Noor.
          – Får jag följa med{*?|,} frågade lillebror.
          – Stopp{*!|.} skrek vakten.
          – Det låter bra{*,|.} svarade hon.
          – Hur gammal är du{*?|.} frågade tanten.
          – Kom hit{*!|.} ropade mormor.
          – Jag förstår inte{*,|.} sa Sam.
          – Vem där{*?|,} frågade en röst.
          – Vilken tur{*!|.} sa hon glatt.
          – Vi ses imorgon{*,|.} sa Maja.
          – Är du säker{*?|.} frågade han.
          – Aj{*!|,} skrek Omar.
          – Jag älskar sommaren{*,|.} sa Lisa.
          – Varför då{*?|,} undrade Alva.
          – Spring{*!|.} ropade tränaren.
          – Det var inte jag{*,|.} sa Hugo.
          – Jag är hungrig, {*sa|Sa} Leo.
          – Vad gör du? {*frågade|Frågade} mamma.
          – Hjälp! {*ropade|Ropade} hon.
          – Kom nu, {*sa|Sa} pappa.
          – Är du där? {*viskade|Viskade} Ali.
          – Tyst! {*väste|Väste} bibliotekarien.
          – Jag vet, {*svarade|Svarade} Noor.
          – Varför? {*undrade|Undrade} Sam.
          – Vi gör det, {*sa|Sa} Ella.
          – Vad konstigt! {*utbrast|Utbrast} Maja.
          {*– Hej!|Hej!} sa Sara.
          Hon vände sig om. {*– Vem är du?|Vem är du?} frågade hon.
          {*– Kom hit, sa mamma.|Kom hit sa mamma.}
          {*– Jag vet inte, sa han.|– Jag vet inte. Sa han.}
          {*– Får jag? frågade hon.|– Får jag, frågade hon?}
          {*– Nej! skrek han.|– Nej, skrek han!}
          {*– Vad bra, sa läraren.|– Vad bra. Sa läraren.}
          {*– Var bor du? frågade Ali.|– Var bor du. Frågade Ali.}
          {*– Spring! ropade de.|– Spring, ropade de!}
          {*– God natt, sa pappa.|– God natt sa pappa.}
          {*– Är det sant? undrade Leo.|– Är det sant, undrade Leo?}
          {*– Jag kommer, svarade hon.|– Jag kommer svarade hon.}
          {*– Akta! skrek han.|– Akta skrek han.}
          {*– Tack, sa Noor.|– Tack. sa Noor.}
          {*– Vad heter hunden? frågade jag.|– Vad heter hunden frågade jag?}
        `,
      },
      {
        rubrik: "Del B",
        instruktion: "Repliken är fel skriven. Skriv den rätt med talstreck, rätt tecken och liten bokstav.",
        typ: "ratta",
        rader: `
          – Jag är hungrig. Sa Leo. => – Jag är hungrig, sa Leo.
          – Vad heter du, frågade hon. => – Vad heter du? frågade hon.
          – Hjälp, skrek han. => – Hjälp! skrek han.
          Jag är trött, sa Ali. => – Jag är trött, sa Ali.
          – Kom hit. Sa mamma. => – Kom hit, sa mamma.
          – Var är katten. Frågade pappa. => – Var är katten? frågade pappa.
          – Vi vann. Jublade de. => – Vi vann! jublade de.
          – Det är kallt, Sa mormor. => – Det är kallt, sa mormor.
          – Får jag följa med frågade Sam. => – Får jag följa med? frågade Sam.
          Akta dig! skrek hon. => – Akta dig! skrek hon.
          – Jag vet inte sa Noor. => – Jag vet inte, sa Noor.
          – Hur mår du. Undrade Ella. => – Hur mår du? undrade Ella.
          – Stopp. Ropade vakten. => – Stopp! ropade vakten.
          – Vi ses imorgon. sa Maja. => – Vi ses imorgon, sa Maja.
          – Varför då, frågade Leo? => – Varför då? frågade Leo.
          Det var inte jag, sa Hugo. => – Det var inte jag, sa Hugo.
          – Spring, ropade tränaren! => – Spring! ropade tränaren.
          – Jag älskar glass. Sa Lisa. => – Jag älskar glass, sa Lisa.
          – Är du säker, frågade han? => – Är du säker? frågade han.
          – Aj. Skrek Omar. => – Aj! skrek Omar.
          – God natt. Sa pappa. => – God natt, sa pappa.
          – Vem är du frågade draken. => – Vem är du? frågade draken.
          – Vilken tur, Sa hon. => – Vilken tur, sa hon.
          Kommer du? frågade Alva. => – Kommer du? frågade Alva.
          – Vad gott. Sa Ali. => – Vad gott, sa Ali.
          – Tyst. Väste bibliotekarien. => – Tyst! väste bibliotekarien.
          – Jag kommer. Svarade hon. => – Jag kommer, svarade hon.
          – Vad konstigt, utbrast Maja! => – Vad konstigt! utbrast Maja.
          – Tack så mycket. Sa Noor. => – Tack så mycket, sa Noor.
          – Var bor du. Frågade Sam. => – Var bor du? frågade Sam.
          – Det låter bra, Svarade hon. => – Det låter bra, svarade hon.
          – Hjälp mig, ropade pojken! => – Hjälp mig! ropade pojken.
          Vad gör du? frågade mamma. => – Vad gör du? frågade mamma.
          – Jag har glömt boken viskade Noor. => – Jag har glömt boken, viskade Noor.
          – Hur gammal är du, frågade tanten? => – Hur gammal är du? frågade tanten.
          – Vi gör det. Sa Ella. => – Vi gör det, sa Ella.
          – Kom nu, Sa pappa. => – Kom nu, sa pappa.
          – Är det sant. Undrade Leo. => – Är det sant? undrade Leo.
          – Hej, Sa Sara. => – Hej, sa Sara.
          – Nej. Skrek han. => – Nej! skrek han.
          – Vad heter hunden, frågade jag? => – Vad heter hunden? frågade jag.
          – Jag förstår. Sa Sam. => – Jag förstår, sa Sam.
          – Kom hit, ropade mormor! => – Kom hit! ropade mormor.
          Får jag låna din penna? frågade Hugo. => – Får jag låna din penna? frågade Hugo.
          – Det är min tur. Sa Alva. => – Det är min tur, sa Alva.
          – Vart ska du. Frågade mamma. => – Vart ska du? frågade mamma.
          – Vi är framme, Sa chauffören. => – Vi är framme, sa chauffören.
          – Titta. Ropade Leo. => – Titta! ropade Leo.
          – Jag hjälper dig sa Omar. => – Jag hjälper dig, sa Omar.
          – Hur gick det, undrade pappa? => – Hur gick det? undrade pappa.
        `,
      },
    ],
  },
];
