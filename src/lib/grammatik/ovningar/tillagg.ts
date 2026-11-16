/**
 * Nya övningar till befintliga ämnen: textbindning (referens- och tematisk
 * bindning, styckeindelning), meningsbyggnad (ordföljd, bisatser, variation),
 * ordklasser (hitta ordklasser i löpande text) och stavning.
 */
import { bygg } from "./bygg";

/* ================================ Textbindning ============================== */

const tbLag = bygg("textbindning", "lagstadiet");
tbLag.l("Först borstade jag tänderna. ____ gick jag och la mig.", ["*Sedan", "Men", "Eftersom"], "Sedan visar vad som hände efter.");
tbLag.l("Vi har en katt. ____ heter Misse.", ["*Den", "Det", "Katt"], "Den syftar tillbaka på en katt. Då slipper vi upprepa ordet.");
tbLag.l("Pelle har en ny cykel. ____ är röd.", ["Pelle", "*Den", "Han"], "Den syftar på cykeln.");
tbLag.l("Jag och Ali spelade fotboll. Sedan åt ____ glass.", ["*vi", "dom", "jag och Ali och"], "Vi = jag och Ali.");
tbLag.l("Det var en gång en drake. ____ bodde i ett berg.", ["*Draken", "En drake", "Berget"], "När vi har berättat om draken skriver vi draken (bestämd form).");
tbLag.v("Vilket ord berättar vad som hände sist?", ["först", "sedan", "*till slut"], "Först – sedan – till slut.");
tbLag.v("Vem är ”han” i: ”Omar tappade sin mössa. Han letade länge.”?", ["*Omar", "mössan", "någon annan"], "Han syftar tillbaka på Omar.");
tbLag.m("Klicka på ordet som pekar tillbaka på Elsa.", "Elsa har en hund. [Hon] går ut med den varje dag. Hunden tycker att det är roligt.");
tbLag.m("Klicka på orden som visar ordningen.", "[Först] packade vi väskan. [Sedan] åkte vi till stranden. [Till slut] somnade vi i bilen.");
tbLag.o("Sätt meningarna i rätt ordning.", ["Först tog vi fram mjöl, mjölk och ägg.", "Sedan vispade vi en smet.", "Till slut stekte vi pannkakorna."], { meningar: true });
tbLag.o("Sätt meningarna i rätt ordning.", ["Det var en gång en liten mus.", "Musen var mycket hungrig.", "Därför letade den efter ost i köket."], { meningar: true });

const tbMel = bygg("textbindning", "mellanstadiet");
tbMel.m("Klicka på alla ord som syftar på Leo.", "Leo hade glömt nyckeln hemma. [Han] ringde på dörren, men ingen öppnade. Då satte [pojken] ner väskan och väntade.");
tbMel.m("Klicka på alla ord som syftar på hunden.", "Vi fick en valp i julklapp. [Den] var svart och vit. [Valpen] somnade direkt i min famn. Nu heter [den] Sigge.");
tbMel.m("Klicka på alla sambandsord.", "Det regnade hela dagen. [Därför] stannade vi inne. Vi spelade spel, [men] det blev tråkigt. [Till slut] slutade det regna.");
tbMel.m("Klicka på ordet som syftar tillbaka på ”äpplen, päron och bananer”.", "Vi köpte äpplen, päron och bananer. [Frukten] åt vi upp samma dag.");
tbMel.v("Vad är referensbindning?", ["*att syfta tillbaka på något man redan har skrivit om", "att använda så många sambandsord som möjligt", "att skriva en referenslista"], "Hon, den, pojken, frukten – ord som pekar tillbaka binder ihop texten.");
tbMel.v("Vilken text har bäst referensbindning?", ["Lisa gick till Lisas skola. Lisa var glad.", "*Lisa gick till sin skola. Hon var glad.", "Lisa gick. Glad var det."], "Hon och sin syftar tillbaka – texten blir mindre upprepande.");
tbMel.v("Varför är detta otydligt: ”Sara träffade Moa. Hon var arg.”?", ["*Man vet inte vem hon syftar på.", "Det saknas ett sambandsord.", "Det är inget fel."], "Skriv hellre Moa var arg eller Sara var arg.");
tbMel.v("När ska du börja ett nytt stycke?", ["*när något nytt händer eller ett nytt ämne börjar", "efter varje mening", "bara i början av texten"], "Nytt stycke = ny tid, ny plats, ny person eller nytt delämne.");
tbMel.v("Vilket ord passar för att börja ett stycke om något som hände senare?", ["*Nästa morgon", "Och", "Men"], "Tidsord som nästa morgon, efter en stund, på kvällen visar att något nytt börjar.");
tbMel.o("Ordna meningarna så att det blir en text som hänger ihop.", ["Igelkotten är ett däggdjur som lever i Sverige.", "Den äter maskar, sniglar och insekter.", "På vintern går den i ide under en hög med löv."], { meningar: true, explanation: "Först vad det är, sedan vad den äter, sist vad den gör på vintern. Den syftar på igelkotten." });
tbMel.o("Ordna meningarna till en berättelse.", ["Ella hittade en karta på vinden.", "Den visade vägen till en skatt i skogen.", "Hon tog med sig sin bror och gick dit.", "Under en gammal gran grävde de fram en låda."], { meningar: true });
tbMel.o("Ordna meningarna så att texten hänger ihop.", ["Vi borde få längre rast.", "Det första skälet är att vi behöver röra på oss.", "Dessutom hinner vi inte äta i lugn och ro.", "Därför tycker jag att rasten ska bli tio minuter längre."], { meningar: true, explanation: "Åsikt – skäl – fler skäl – avslutning." });
tbMel.r("Morfar har en båt. {Båten den|Den} är blå.", "Båten den är blå har två subjekt. Skriv antingen Båten är blå eller Den är blå.");
tbMel.r("Jag har en hund. {Hunden hon|Hon} heter Bella.", "Hunden hon heter Bella har två subjekt. Skriv antingen Hunden heter Bella eller Hon heter Bella.");

const tbHog = bygg("textbindning", "hogstadiet");
tbHog.m("Klicka på alla ord och uttryck som syftar på ”mobiltelefoner”.", "Mobiltelefoner finns i nästan varje ficka. [De] har förändrat hur vi umgås. [Apparaterna] gör det lätt att hålla kontakten, men [skärmarna] tar också mycket tid.");
tbHog.m("Klicka på alla ord som syftar på ”Greta”.", "Greta började skolstrejka för klimatet när [hon] var femton år. Snart följde miljoner unga [hennes] exempel. [Aktivisten] har talat inför världens ledare.");
tbHog.m("Klicka på ordet som sammanfattar det som står före (en sammanfattande referens).", "Havet blir varmare, isarna smälter och havsnivån stiger. [Förändringarna] påverkar miljontals människor.");
tbHog.m("Klicka på alla sambandsmarkörer.", "Många vill förbjuda mobiler i skolan. [Däremot] menar andra att de kan vara ett hjälpmedel. [Dessutom] behöver eleverna lära sig att använda dem klokt. [Sammanfattningsvis] finns det argument åt båda hållen.");
tbHog.v("Vad är tematisk bindning?", ["*att texten håller sig till samma ämne och att nytt kopplas till det som redan sagts", "att texten har en rubrik", "att alla meningar börjar med samma ord"], "Temat (det kända) står ofta först, det nya (remat) sist. Det nya blir sedan tema i nästa mening.");
tbHog.v("Vilken textbit har bäst tematisk bindning?", ["Vi besökte en borg. Det var fint väder. Hundar är trevliga.", "*Vi besökte en borg. Borgen byggdes på 1300-talet. Där bodde en kung i tvåhundra år.", "En borg. Byggd. Kung."], "Varje mening tar upp något från meningen innan: borg → borgen → där.");
tbHog.v("Vad kallas det när ett ord som ”förändringen” syftar på en hel mening före?", ["*sammanfattande referens", "inversion", "särskrivning"], "Ord som detta, förändringen, problemet, beslutet kan sammanfatta ett helt resonemang.");
tbHog.v("Vilken mening fortsätter bäst efter: ”Många unga sover för lite.”?", ["Fotboll är populärt.", "*Sömnbristen gör det svårare att koncentrera sig i skolan.", "Jag gillar katter."], "Sömnbristen tar upp det som sades (för lite sömn) och för texten vidare.");
tbHog.v("Varför bör du inte börja varje mening med ”Sedan”?", ["*Texten blir enformig – variera med andra sambandsord och med referensord.", "Det är grammatiskt fel.", "Sedan får bara stå sist."], "Variera: därefter, efter en stund, när det var klart, nästa dag …");
tbHog.v("Vad ska en styckesinledning (kärnmening) göra i en faktatext?", ["*tala om vad stycket handlar om", "upprepa rubriken ordagrant", "avsluta texten"], "Kärnmeningen säger vad stycket handlar om, resten av stycket utvecklar.");
tbHog.k("Vilken typ av bindning är det?", { Referensbindning: ["hon, den, de", "pojken → han", "problemet (syftar bakåt)"], Sambandsmarkörer: ["därför, dessutom", "å andra sidan", "sammanfattningsvis"], "Tematisk bindning": ["samma ämne genom texten", "det nya blir tema i nästa mening"] });
tbHog.o("Ordna meningarna så att stycket hänger ihop.", ["Plast är ett av vår tids största miljöproblem.", "Varje år hamnar miljontals ton i haven.", "Där bryts den ned till mikroplast som fiskar och fåglar får i sig.", "Därför behövs både mindre användning och bättre återvinning."], { meningar: true, explanation: "Kärnmening → fakta → följd → slutsats. Där och därför binder ihop." });
tbHog.o("Ordna meningarna i den argumenterande texten.", ["Skoldagen borde börja klockan nio.", "För det första sover tonåringar sämre tidigt på morgonen.", "För det andra visar studier att resultaten blir bättre med senare start.", "Visserligen blir dagen längre, men vinsterna är större än nackdelarna."], { meningar: true });
tbHog.o("Ordna meningarna i berättelsen.", ["Klockan var tre på natten när telefonen ringde.", "Amira famlade efter den i mörkret.", "En okänd röst viskade hennes namn.", "Sedan blev det tyst."], { meningar: true });
tbHog.r("Klimatet förändras. {Det här förändringen|Förändringen} märks redan i Sverige.", "Antingen denna förändring eller förändringen. Det här förändringen är fel.");
tbHog.r("Forskarna gjorde ett försök. {Dem|De} fick tydliga resultat.", "Subjektsform: de.");
tbHog.r("Eleverna fick välja bok. {Dom|De} valde mest fantasy.", "I skrift: de (subjekt) och dem (objekt).");

const tbGy = bygg("textbindning", "gymnasiet");
tbGy.m("Klicka på alla referensuttryck som syftar på ”Selma Lagerlöf”.", "Selma Lagerlöf fick Nobelpriset 1909. [Hon] var den första kvinnan som fick priset. [Författarinnan från Mårbacka] skrev bland annat Nils Holgerssons underbara resa.");
tbGy.m("Klicka på alla sammanfattande referenser.", "Utsläppen ökar, skogarna avverkas och arter dör ut. [Denna utveckling] är oroande. [Problemet] kräver internationellt samarbete.");
tbGy.m("Klicka på alla metatextuella markörer – ord som visar läsaren hur texten är byggd.", "[I det följande] diskuteras tre orsaker. [Den första] gäller ekonomin. [Avslutningsvis] sammanfattas resonemanget.");
tbGy.v("Vad menas med tema och rema?", ["*Tema är det kända som meningen utgår från, rema är det nya som sägs om det.", "Tema är rubriken, rema är slutsatsen.", "Det är två ord för samma sak."], "Tema–rema-kedjor skapar flyt: det nya i en mening blir utgångspunkt i nästa.");
tbGy.v("Vad kallas det när remat i en mening blir tema i nästa?", ["*progression med nytt tema (tematisk kedja)", "konstant tema", "inversion"], "Vi besökte en stad. Staden hade ett torg. Torget …");
tbGy.v("Vilken risk finns med sammanfattande referenser som ”detta” utan substantiv?", ["*Det kan bli oklart vad detta syftar på.", "Det är alltid talspråk.", "Det gör texten för lång."], "Skriv hellre denna utveckling, detta problem, detta beslut.");
tbGy.v("Vilken sambandsmarkör passar för att visa ett motargument som bemöts?", ["följaktligen", "*visserligen … men", "dessutom"], "Visserligen kostar det mycket, men vinsterna är större.");
tbGy.v("Vilken textbit har konstant tema?", ["*Maskrosen är en vanlig växt. Den blommar på våren. Den sprider sina frön med vinden.", "Vi köpte en bil. Bilen var röd. Rött är en varm färg.", "Det regnade. Hundar skäller. Vi åt."], "Samma tema (maskrosen/den) i varje mening – vanligt i beskrivande texter.");
tbGy.v("Vad är en ”röd tråd” i en text?", ["*att alla delar tydligt hör ihop med syftet och frågeställningen", "att texten är skriven med röd penna", "att varje stycke har en rubrik"], "Den röda tråden byggs med tematisk bindning, tydliga kärnmeningar och sambandsmarkörer.");
tbGy.k("Sortera sambandsmarkörerna efter funktion.", { Tillägg: ["dessutom", "vidare", "därtill"], Motsats: ["emellertid", "däremot", "å andra sidan"], Följd: ["således", "följaktligen", "därmed"], Sammanfattning: ["sammanfattningsvis", "kort sagt", "avslutningsvis"] });
tbGy.o("Ordna meningarna i inledningen till en utredande text.", ["Under de senaste tio åren har läsförståelsen bland svenska elever försämrats.", "Utvecklingen har förklarats på flera sätt.", "Syftet med denna text är att undersöka tre av de vanligaste förklaringarna.", "Inledningsvis behandlas den ökade skärmtiden."], { meningar: true, explanation: "Bakgrund → sammanfattande referens (utvecklingen) → syfte → disposition." });
tbGy.o("Ordna meningarna så att tema–rema-kedjan fungerar.", ["Fotosyntesen sker i växternas gröna delar.", "Där omvandlas solljusets energi till socker.", "Sockret används sedan som byggmaterial och bränsle.", "Detta gör växterna till grunden för nästan allt liv på jorden."], { meningar: true });
tbGy.r("Studien visar att unga läser mindre. {Den|Detta} kan bero på flera faktorer.", "Det som kan bero på något är att unga läser mindre – hela påståendet. Detta (eller denna utveckling) passar.");
tbGy.r("Enkäten besvarades av 200 elever. {Dom|De} flesta var positiva.", "I formell text: de.");

/* =============================== Meningsbyggnad ============================= */

const mbLag = bygg("meningsbyggnad", "lagstadiet");
mbLag.o("Bygg en mening.", ["jag", "har", "en", "röd", "boll"], { end: "." });
mbLag.o("Bygg en mening.", ["katten", "sover", "i", "soffan"], { end: "." });
mbLag.o("Bygg en fråga.", ["vill", "du", "leka", "med", "mig"], { end: "?" });
mbLag.o("Bygg en fråga.", ["var", "bor", "du"], { end: "?" });
mbLag.o("Bygg en mening.", ["i dag", "är", "det", "fredag"], { end: ".", alternatives: [["det", "är", "fredag", "i dag"]] });
mbLag.m("Klicka på ordet som ska ha stor bokstav.", "[vi] åker till mormor.");
mbLag.m("Klicka på orden som ska ha stor bokstav.", "Jag och [lisa] åkte till [stockholm].");

const mbMel = bygg("meningsbyggnad", "mellanstadiet");
mbMel.o("Bygg meningen så att den börjar med ”i morgon”. Verbet ska stå på plats två.", ["i morgon", "ska", "vi", "åka", "skridskor"], { end: "." });
mbMel.o("Bygg meningen så att den börjar med ”efter skolan”.", ["efter skolan", "spelar", "jag", "fotboll"], { end: "." });
mbMel.o("Bygg meningen så att den börjar med ”på sommaren”.", ["på sommaren", "badar", "vi", "i sjön"], { end: "." });
mbMel.o("Ordna bisatsen rätt.", ["jag", "vet", "att", "du", "inte", "gillar", "fisk"], { end: "." });
mbMel.o("Ordna bisatsen rätt.", ["hon", "blev", "glad", "när", "hon", "fick", "brevet"], { end: "." });
mbMel.o("Gör en fråga.", ["har", "du", "gjort", "läxan"], { end: "?" });
mbMel.m("Klicka på bisatsen – den del som inte kan stå ensam.", "Vi gick in [när det började regna].");
mbMel.m("Klicka på bisatsen.", "[Eftersom jag var hungrig] åt jag två mackor.");
mbMel.m("Klicka på bisatsen.", "Jag tror [att det blir sol i morgon].");
mbMel.m("Klicka på bisatsen.", "Boken [som jag läser] är spännande.");
mbMel.v("Vilken mening har rätt ordföljd?", ["I går jag åt pizza.", "*I går åt jag pizza.", "I går pizza åt jag."], "Verbet står på plats två: I går (1) åt (2) jag …");
mbMel.v("Vilken mening har rätt ordföljd?", ["*På lördag ska vi gå på bio.", "På lördag vi ska gå på bio.", "Vi på lördag ska gå på bio."], "På lördag (1) ska (2) vi …");
mbMel.v("Vilken del är en huvudsats?", ["*Vi åt glass", "eftersom det var varmt", "när vi kom hem"], "En huvudsats kan stå ensam: Vi åt glass.");
mbMel.v("Vilket ord inleder ofta en bisats?", ["och", "men", "*eftersom"], "Bisatser inleds ofta av att, som, när, om, eftersom, medan.");
mbMel.v("Hur blir texten mer varierad?", ["Jag vaknade. Jag åt. Jag gick.", "*När jag hade vaknat åt jag frukost. Sedan gick jag till skolan.", "Jag vaknade och jag åt och jag gick."], "Variera meningsbörjan och blanda korta och långa meningar.");
mbMel.r("I går {vi spelade|spelade vi} innebandy.", "Verbet på plats två: I går spelade vi.");
mbMel.r("Sedan {vi gick|gick vi} hem.", "Sedan gick vi hem.");
mbMel.r("Hon sa att hon {kommer inte|inte kommer}.", "I bisatsen står inte före verbet.");

const mbHog = bygg("meningsbyggnad", "hogstadiet");
mbHog.o("Ordna bisatsen rätt. Tänk på BIFF – Bisats: Inte Före Finita verbet.", ["jag", "förstår", "varför", "han", "aldrig", "svarar"], { end: "." });
mbHog.o("Ordna bisatsen rätt.", ["det", "är", "synd", "att", "du", "inte", "kan", "komma"], { end: "." });
mbHog.o("Ordna bisatsen rätt.", ["hon", "frågade", "om", "jag", "redan", "hade", "ätit"], { end: "." });
mbHog.o("Gör en mening där bisatsen kommer först.", ["om", "du", "inte", "skyndar dig", "missar", "du", "bussen"], { end: "." });
mbHog.o("Gör om så att tiden betonas – sätt den först.", ["under hela vintern", "låg", "snön", "kvar"], { end: "." });
mbHog.m("Klicka på alla bisatser.", "[När vi kom fram] var affären stängd, [vilket gjorde oss besvikna].");
mbHog.m("Klicka på alla bisatser.", "Läraren sa [att provet blir svårt] men [att alla kommer att klara det om de pluggar].");
mbHog.m("Klicka på satsadverbialet i bisatsen.", "Jag är ledsen att jag [inte] kom i tid.");
mbHog.v("Vilken mening följer BIFF-regeln?", ["Han sa att han kunde inte komma.", "*Han sa att han inte kunde komma.", "Han sa inte att han kunde komma inte."], "Inte före det finita verbet (kunde) i bisatsen.");
mbHog.v("Vilken mening passar bäst för att skapa spänning i en berättelse?", ["Jag gick in i huset och det var mörkt och jag hörde ett ljud.", "*Mörkt. Tyst. Då hörde jag det.", "Huset var mörkt, vilket gjorde att jag hörde ett ljud."], "Korta meningar och fragment skapar tempo och spänning.");
mbHog.v("Vilken mening passar bäst i en faktatext?", ["Wow, vulkaner är sjukt coola!", "*Vulkaner bildas där jordskorpans plattor möts.", "Vulkaner. Farliga. Heta."], "Faktatexter har hela, sakliga meningar.");
mbHog.v("Vad kallas det när något annat än subjektet står först i meningen?", ["*inversion (omvänd ordföljd)", "BIFF", "satsradning"], "I går (1) åt (2) jag (3) – subjektet hamnar efter verbet.");
mbHog.v("Vad är en satsradning?", ["*när huvudsatser skarvas ihop med komma i stället för punkt eller sambandsord", "en mening med många bisatser", "en lista med kommatecken"], "Fel: Det regnade, vi gick in. Rätt: Det regnade, så vi gick in.");
mbHog.v("Hur kan du variera meningsbyggnaden?", ["*Blanda korta och långa meningar och börja med olika satsdelar.", "Börja alltid med subjektet.", "Skriv bara korta meningar."], "Variation ger rytm och låter dig betona det viktiga.");
mbHog.k("Huvudsats eller bisats?", { Huvudsats: ["Vi åkte hem", "Hon skrattade", "Bussen var sen"], Bisats: ["eftersom det var sent", "som jag träffade", "om du vill", "när filmen slutade"] });
mbHog.r("Det regnade{, vi|, så vi} gick in.", "Två huvudsatser med bara komma emellan är satsradning. Lägg till ett sambandsord eller sätt punkt.");
mbHog.r("Jag undrar varför {kommer han inte|han inte kommer}.", "Bisats: subjekt + inte + verb.");
mbHog.r("Om det regnar {vi stannar|stannar vi} inne.", "När bisatsen står först kommer verbet direkt efter: … stannar vi inne.");

const mbGy = bygg("meningsbyggnad", "gymnasiet");
mbGy.o("Ordna bisatsen rätt.", ["det", "är", "oklart", "om", "regeringen", "någonsin", "kommer", "att", "agera"], { end: "." });
mbGy.o("Flytta det viktigaste till slutet (slutfokus).", ["det", "som", "avgjorde", "matchen", "var", "ett", "självmål", "i sista minuten"], { end: "." });
mbGy.o("Skriv om med formellt subjekt.", ["det", "finns", "flera", "skäl", "att", "ifrågasätta", "studien"], { end: "." });
mbGy.m("Klicka på alla bisatser.", "[Även om förslaget har brister] är det värt att pröva, [eftersom alternativet är att ingenting görs].");
mbGy.m("Klicka på den utbrutna delen (det som betonas med ”det är … som”).", "Det var [inte regeringen] som tog initiativet, utan oppositionen.");
mbGy.v("Vilken konstruktion är en utbrytning?", ["*Det var Anna som vann.", "Anna vann.", "Vann gjorde Anna."], "Det är/var … som betonar en del av meningen.");
mbGy.v("Vad är slutfokus?", ["*att den viktigaste eller nya informationen placeras sist i meningen", "att meningen slutar med punkt", "att man sammanfattar sist i texten"], "Svenskan lägger gärna tyngden i slutet.");
mbGy.v("Vilken mening har onödigt tung nominalstil?", ["*Genomförandet av en förbättring av rutinerna sker under hösten.", "Vi förbättrar rutinerna i höst.", "Rutinerna ska bli bättre."], "Många substantiv bildade av verb gör texten svårläst. Använd verb.");
mbGy.v("När passar passiv form bäst?", ["*när den som utför handlingen är okänd eller oviktig", "alltid i berättelser", "aldrig i sakprosa"], "Provet rättades under veckan – vem som rättade är inte viktigt.");
mbGy.v("Vad är ett anakoluti?", ["*en mening som börjar på ett sätt och slutar på ett annat, så att den inte hänger ihop", "en mycket kort mening", "ett stavfel"], "T.ex. Den boken som jag läste, den var den bra.");
mbGy.k("Vilken stil har meningen?", { Nominalstil: ["Utredningens genomförande krävde en prioritering av resurser.", "En minskning av utsläppen är nödvändig."], Verbalstil: ["För att genomföra utredningen måste vi prioritera.", "Vi måste minska utsläppen."] });
mbGy.r("Jag vet inte varför {kan hon inte|hon inte kan} komma.", "Bisats: subjekt + satsadverbial + finit verb.");
mbGy.r("Förslaget avslogs{, styrelsen| eftersom styrelsen} ansåg det för dyrt.", "Undvik satsradning – visa sambandet.");

/* ================================= Ordklasser =============================== */

const okLag = bygg("ordklasser", "lagstadiet");
okLag.m("Klicka på alla substantiv – saker, djur, människor och platser.", "[Hunden] tuggar på en [pinne] i [parken].");
okLag.m("Klicka på alla verb – det man gör.", "Vi [springer], [hoppar] och [skrattar].");
okLag.m("Klicka på alla adjektiv – ord som beskriver.", "Jag har en [stor] och [mjuk] nalle.");
okLag.m("Klicka på alla substantiv.", "[Mamma] köpte [äpplen] och [bröd].");

const okMel = bygg("ordklasser", "mellanstadiet");
okMel.m("Klicka på alla verb.", "Elsa [vaknade] tidigt. Hon [åt] frukost och [cyklade] sedan till skolan.");
okMel.m("Klicka på alla adjektiv.", "Det var en [kall] och [mörk] kväll. Den [gamla] stugan var [tom].");
okMel.m("Klicka på alla pronomen.", "[Vi] träffade Sara. [Hon] gav [oss] kartan.");
okMel.m("Klicka på alla prepositioner.", "Katten hoppade [från] stolen och sprang [under] bordet.");
okMel.m("Klicka på alla substantiv.", "På [lördagen] åkte [familjen] till [stranden] med en [korg].");

const okHog = bygg("ordklasser", "hogstadiet");
okHog.m("Klicka på alla adverb.", "Hon sprang [mycket] [snabbt] och kom [ändå] [sist].");
okHog.m("Klicka på alla konjunktioner.", "Jag ville åka [men] bussen var full, [så] jag gick hem [och] lagade mat.");
okHog.m("Klicka på alla subjunktioner.", "Vi stannade inne [eftersom] det regnade, men gick ut [när] solen kom fram.");
okHog.m("Klicka på alla räkneord.", "[Tre] elever kom på [första] plats och [två] på [andra].");
okHog.m("Klicka på alla verb – även hjälpverben.", "Vi [har] [planerat] resan länge och [ska] [åka] i morgon.");
okHog.m("Klicka på interjektionen.", "[Aj], vad det gjorde ont!");

const okGy = bygg("ordklasser", "gymnasiet");
okGy.m("Klicka på alla adverb.", "Resultaten var [förvånansvärt] goda, men kunde [knappast] förklaras [helt].");
okGy.m("Klicka på alla particip (verbformer som fungerar som adjektiv).", "Den [stängda] dörren och det [brinnande] ljuset skapade en [skrämmande] stämning.");
okGy.m("Klicka på alla subjunktioner.", "[Om] förslaget antas, vilket är troligt, måste kommunen anställa fler [så att] köerna minskar.");
okGy.m("Klicka på alla prepositioner.", "Debatten [om] skolan pågick [under] hela kvällen [i] riksdagen.");

/* ================================== Stavning ================================ */

const stLag = bygg("stavning", "lagstadiet");
stLag.l("Vi ska ____ i sjön.", ["*bada", "badda", "bbada"], "Bada – kort och lång vokal låter olika. A:et är långt här.");
stLag.l("Jag har en ____ som heter Måns.", ["*katt", "kat", "kkatt"], "Kort a före tt: katt.");
stLag.l("Vi åt ____ på kalaset.", ["glas", "*glass", "glasss"], "Glass (att äta) har dubbel-s. Glas är det man dricker ur.");
stLag.l("Solen ____ på himlen.", ["*skiner", "skinner", "sjiner"], "Skiner – långt i, en konsonant.");
stLag.l("Jag ska ____ en bok.", ["*läsa", "lässa", "lesa"], "Läsa – långt ä.");
stLag.l("Hunden ____ efter bollen.", ["*springer", "sprigner", "springgerr"], "Springer – kort i före ng.");
stLag.v("Vilket ord är rätt stavat?", ["*sjö", "schö", "sjjö"], "Sj-ljudet stavas oftast sj: sjö, sju, sjunga.");
stLag.v("Vilket ord är rätt stavat?", ["tjugge", "*tjugo", "kjugo"], "Tjugo – tj-ljudet.");
stLag.v("Vilket ord har kort vokal och dubbelteckning?", ["*hoppa", "hopa", "sola"], "Kort o → pp: hoppa.");
stLag.m("Klicka på orden som har dubbelteckning (två likadana konsonanter efter en kort vokal).", "Vi [hoppade] i [vattnet] och åt [glass].");

export const TILLAGG = [
  ...tbLag.ovningar, ...tbMel.ovningar, ...tbHog.ovningar, ...tbGy.ovningar,
  ...mbLag.ovningar, ...mbMel.ovningar, ...mbHog.ovningar, ...mbGy.ovningar,
  ...okLag.ovningar, ...okMel.ovningar, ...okHog.ovningar, ...okGy.ovningar,
  ...stLag.ovningar,
];
