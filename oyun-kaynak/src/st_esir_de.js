/* HİKÂYE · ESİR · Almanca metin katmanı (mantık st_esir.js'ten gelir) */
(function(){
const gaveLine=fl=>fl.gave?`\n\nDu erzählst dem Bataillonskommandeur selbst von der kleinen Information, die du im Verhörraum preisgegeben hast. Er schweigt lange, dann legt er dir die Hand auf die Schulter:\n\n– Jeder hat eine Grenze, Feldwebel. Selbst an deiner hast du deinen Kameraden gewählt.`:'';
TALE_DE.esir={
 meta:{ti:'Der Gefangene',genre:'Überleben · Flucht',sub:'Eine hinter feindlichen Linien gefangene Gruppe und ihre Flucht',
  pitch:'Deine Gruppe gerät bei einer Nachtpatrouille in einen Hinterhalt und in Gefangenschaft. Ein verwundeter Gefreiter, ein junger Soldat auf seinem ersten Einsatz und ein geduldiger Major, der im Verhörraum auf dich wartet. Wem wirst du vertrauen, und wen lässt du zurück? Vielleicht kommen nicht alle nach Hause.',
  chapters:[{ti:'Hinterhalt',sub:'Nachtpatrouille und Gefangennahme'},{ti:'Die Zelle',sub:'Verhör und Wille'},{ti:'Der Plan',sub:'Beobachtung und Vertrauen'},{ti:'Die Flucht',sub:'Stacheldraht und Verfolgung'},{ti:'Die Rückkehr',sub:'Minenfeld und der Weg nach Hause'}],
  statDefs:[['moral','Moral','var(--acc)'],['saglik','Gesundheit','var(--green)'],['bag','Gruppenzusammenhalt','var(--blue)']]},
 medal:'Aus der Gefangenschaft heimgekehrt',
 end:{kahraman:'Die Rückkehr eines Helden',aci:'Bitterer Sieg',yalniz:'Allein',bedel:'Der Preis',karanlik:'Dunkelheit'},
 scenes:{
p1:{b:`02:40 Uhr. Du stehst am Fuß des Adlerkamms; die Grenzlinie ist nur ein paar Hundert Meter entfernt.

Bei der Abendbesprechung hat sich der Bataillonskommandeur kurz gefasst: „Auf der anderen Seite gibt es Bewegung. Nähert euch, schaut, zählt, kommt zurück. Kein Gefecht.“

Zwei Männer sind bei dir. Gefreiter Selim Kara trägt seit zwölf Jahren Uniform; er redet selten, und wenn, dann meistens einen Witz. Soldat Mert Aydın ist zwanzig, und dies ist seine erste Nachtpatrouille. In der Dunkelheit hörst du, wie er versucht, den Atem anzuhalten.

Es gibt zwei Wege. Das Bett des Grauen Bachs ist verdeckt, aber langsam. Der Kammweg ist schnell, aber im Mondlicht ungeschützt.`,
 ch:['Dem Bachbett folgen. Langsam, aber unsichtbar.','Den Kammweg nehmen. Die Zeit drängt.','Vor dem Aufbruch zu Mert gehen.']},
p1b:{b:`Du legst Mert die Hand auf die Schulter. Du spürst, wie er zittert.

– Jeder hat in der ersten Nacht Angst, sagst du leise. Wer keine hat, lügt entweder oder hat es noch nicht begriffen.

– Dann lüge ich nicht, Feldwebel, flüstert Mert. Seine Stimme wird etwas ruhiger.

Selim grinst im Dunkeln:

– Ich hab's nach zwölf Jahren immer noch nicht begriffen. Los, sehen wir zu, dass wir zum Frühstück zurück sind.`,
 ch:['Dem Bachbett folgen. Langsam, aber unsichtbar.','Den Kammweg nehmen. Die Zeit drängt.']},
p2:{b:(st,fl)=>(fl.path==='dere'
 ?`Eine halbe Stunde lang bewegt ihr euch über die nassen Steine des Bachbetts. Gerade als ihr auf die Ebene gegenüber dem Kamm steigt, wird der Himmel plötzlich weiß: eine Leuchtrakete.`
 :`Ihr kommt auf dem Kamm schnell voran, aber der Mond steht direkt über euch. Zwischen den Felsen blitzt Metall auf. Zu spät. Der Himmel wird plötzlich weiß: eine Leuchtrakete.`)+`

Dann das Rattern eines Maschinengewehrs. Du wirfst dich hinter die Felsen. Du hörst Selims gedämpften Schrei; er ist am Bein getroffen.

Mert ist am Funkgerät erstarrt. Von drei Seiten wird geschossen. Ihr seid in einen Hinterhalt geraten.`,
 ch:['Das Hauptquartier anfunken: Hinterhalt und Koordinaten melden.','Selim hinter die Felsen ziehen.','Das Feuer erwidern und Mert decken.']},
p3a:{b:`Du nimmst Mert das Funkgerät aus den Händen.

– Adler Eins, Adler Eins, hier Nachtvogel! Hinterhalt! Planquadrat vier-eins, acht-sieben. Feuer von drei Seiten, ein Verwundeter!

Rauschen. Dann eine abgehackte Stimme: „…verstanden… durchhalten…“

Die Meldung ist durch. Aber in diesen wenigen Sekunden ist Selim allein zwischen den Felsen zurückgeblieben, und der Feuerring zieht sich zu.`,ch:['Weiter.']},
p3b:{b:`Du packst Selim am Koppel und ziehst ihn hinter die Felsen. Eine Kugel pfeift dicht an deinem Ohr vorbei; Steinsplitter schneiden dir ins Gesicht.

– Lassen Sie mich, Feldwebel, stöhnt Selim. Ans Funkgerät!

– Halt den Mund, sagst du. Hier lässt keiner keinen zurück.

Selim ist jetzt in Deckung. Aber das Funkgerät ist in Merts Händen, und Mert liegt im Freien.`,ch:['Weiter.']},
p3c:{b:(st,fl)=>fl.cover==='ok'
 ?`Du legst das Gewehr an und feuerst kurze Feuerstöße auf das Mündungsfeuer. Eine der Waffen gegenüber verstummt.

Währenddessen zieht Mert Selim in Deckung. So verängstigt er ist, der Junge hat das Richtige getan.`
 :`Du legst das Gewehr an und schießt auf das Mündungsfeuer. Etwas schlägt dir in die linke Schulter, wie ein Vorschlaghammer. Warme Nässe läuft dir den Arm hinunter.

Trotzdem schießt du weiter. Währenddessen zieht Mert Selim in Deckung.`,ch:['Weiter.']},
p4:{b:`Das Feuer verstummt. Das ist kein gutes Zeichen.

Schritte in der Dunkelheit, rings um die Felsen. Dann eine Stimme in stark akzentuiertem Türkisch:

– Feldwebel! Ihr seid umzingelt. Ergebt euch, und euer Verwundeter lebt. Leistet Widerstand, und ihr sterbt alle.

Du prüfst dein Magazin: die letzten paar Schuss. Mert sieht dich an. Selims Gesicht ist kreideweiß.`,
 ch:['Sich ergeben. Deine Männer am Leben zu halten, geht vor.','Mert das Codebuch verbrennen lassen, dann ergeben.','Versuchen, bis zur letzten Kugel durchzuhalten.']},
p5:{b:(st,fl)=>`Man fesselt dir die Hände mit Kabelbindern auf dem Rücken und stülpt dir einen rauen Sack über den Kopf. Ihr werdet auf die Ladefläche eines Pick-ups geworfen. Du hörst Selim stöhnen und Mert hastig atmen.${fl.fought?`

Der Kolbenschlag gegen deinen Kopf pocht noch. Deine Ohren klingeln.`:''}${fl.burn?`

Bevor du dich ergeben hast, hast du gesehen, wie Mert das Codebuch mit seinem Feuerzeug angezündet hat. Wenigstens fallen diese Seiten ihnen nicht in die Hände.`:''}

Der Wagen rumpelt auf die Straße.`,
 ch:['Mert zuflüstern: „Bleib ruhig. Wir kommen zusammen raus.“','Still die Kurven und Geräusche zählen. Die Route einprägen.','Nichts tun. Kräfte sparen.']},
p6:{b:(st,fl)=>(fl.route?`Links. Links. Eine lange Gerade. Unter den Rädern der hohle Klang einer Brücke; Holz, kein Metall. Dann eine scharfe Rechtskurve. Vierzig Minuten. Das darfst du nicht vergessen.

`:'')+`Der Wagen hält. Hundegebell, das Quietschen eines Eisentors, Rufe in einer Sprache, die du nicht verstehst.

Als man dir den Sack abnimmt, siehst du hohe Stacheldrahtzäune, Wachtürme und Suchscheinwerfer. Ein Gefangenenlager.

Ein Offizier in tadelloser Uniform kommt auf dich zu und lächelt:

– Willkommen, Feldwebel. Ich bin Major Rehn. Wir werden uns viel unterhalten.`,ch:['Warten, bis man dich in eine Zelle bringt.']},
h1:{b:`Eine Betonzelle. Drei Schritte lang, zwei Schritte breit. Oben ein kleines vergittertes Fenster. In der Ecke ein Eimer.

Der Verband an Selims Bein ist blutgetränkt, und sein Fieber steigt. Mert sitzt an die Wand gelehnt und umklammert seine Knie.

An der Tür hält ein alter Wärter Wache. Er brüllt nicht wie die anderen; ab und zu schaut er durch die Gitterstäbe herein.`,
 ch:['Dein Hemd zerreißen und Selims Wunde neu verbinden.','Den alten Wärter um Wasser und ein sauberes Tuch bitten.','Selim sagen, er soll durchhalten. Kräfte sparen.']},
h1b:{b:`– Wasser, sagst du zum Wärter. Wir haben einen Verwundeten. Bitte.

Der Mann sieht dich eine Weile an. Dann geht er wortlos davon. Zehn Minuten später kommt er mit einer Flasche Wasser und einem sauberen, gefalteten Tuch zurück und reicht sie durch die Gitterstäbe.

– Tobas, sagt er und klopft sich auf die Brust. Das muss sein Name sein.

– Danke, Tobas.

Er nickt und kehrt auf seinen Posten zurück. Vielleicht ist in diesem Lager nicht jeder ein Feind.`,ch:['Weiter.']},
h2:{b:(st,fl)=>`Vor der Morgendämmerung holt man dich aus der Zelle. Ein kleiner fensterloser Raum. Auf dem Tisch: eine Lampe, eine Akte und ein Glas Tee.

Major Rehn spricht höflich, ruhig, fast freundlich:

– Trinken Sie Ihren Tee, Feldwebel. Nennen Sie uns die Stellungen Ihrer Einheit und die Funkcodes, und Sie und Ihre Freunde sehen heute Abend einen Arzt. Sie haben mein Wort.${fl.burn?`

Er hält kurz inne.

– Ihr Codebuch war verbrannt. Klug. Aber ich bin ein geduldiger Mann.`:''}`,
 ch:['Nur Namen, Dienstgrad und Dienstnummer nennen.','Falsche Stellungen nennen, um Zeit zu gewinnen.','Nichts sagen. Ihm in die Augen sehen.']},
h3:{b:(st,fl)=>`Rehn lässt die Tür öffnen. Zwei Soldaten schleifen Mert herein. Die Lippe des Jungen ist aufgeplatzt.${fl.lie?`

– Die Stellungen, die Sie uns genannt haben, waren leer, Feldwebel, sagt Rehn mit derselben ruhigen Stimme. Lügen haben ihren Preis.`:''}

– Wenn Sie nicht reden, sagt Rehn, redet vielleicht er. Er ist jung, er hat Angst. Wer Angst hat, erzählt alles.

Mert sieht dich an. In seinen Augen liegt kein Flehen; es ist der Blick eines Soldaten, der auf Befehle wartet.`,
 ch:['Eine unbedeutende, aber wahre Information preisgeben, um Mert zu retten.','„Ich habe das Kommando, er weiß nichts.“ Die Last selbst tragen.','Schweigen. Mert bedeuten, ebenfalls zu schweigen.']},
h4:{b:(st,fl)=>`In dieser Nacht liegt ihr zu dritt nebeneinander in der Zelle. ${fl.mertHurt?'Mert liegt mit dem Gesicht zur Wand und weint leise; er wurde heute im Verhörraum schwer geschlagen.':'Mert weint leise.'} ${fl.band?'Selims Fieber ist etwas gesunken; der Verband hat geholfen.':'Selims Fieber ist immer noch hoch.'}

Selim zieht ein zerknittertes Foto aus der Tasche. Ein Mädchen von etwa sechs Jahren, das mit Zahnlücken lächelt.

– Elif, sagt er. Ich habe versprochen, zu ihrem Geburtstag da zu sein. Noch drei Wochen.`,
 ch:['Von deinem Zuhause erzählen, deinem Dorf, was du tust, wenn du zurück bist.','Anfangen, über eine Flucht zu flüstern.','Ihnen sagen, sie sollen schlafen. Ihr braucht eure Kräfte.']},
k1:{b:(st,fl)=>`Die Tage verschwimmen. Jeden Mittag werdet ihr für einen halbstündigen Rundgang in den Hof geführt. Es ist die einzige Gelegenheit, das Lager zu sehen.${fl.plan?`

Jetzt denkt ihr alle drei nur noch an Flucht. Jeder Rundgang ist eine Erkundung.`:''}

Worauf achtest du heute?`,
 ch:['Auf die Wachwechsel und die Zeiten der Türme.','Auf Schwachstellen im Stacheldrahtzaun.','Auf die Menschen: Wer behandelt wen, und wie?']},
k1b:{b:(st,fl)=>`Am nächsten Tag bist du wieder im Hof. ${fl.shift?'Gestern ist dir aufgefallen, dass die Turmwachen um drei Uhr wechseln; während des Wechsels leuchten die Scheinwerfer ein paar Minuten lang nicht in den Hof.':fl.fence?'Gestern ist dir aufgefallen, dass an der Nordostecke der Boden am Fuß eines Pfostens abgesackt und der Draht locker ist.':'Gestern ist dir aufgefallen, dass die anderen Wärter den alten Tobas kaum respektieren und dass er die Gefangenen nicht so behandelt wie sie.'}

Worauf achtest du heute noch?`,
 ch:['Auf die Wachwechsel und die Zeiten der Türme.','Auf Schwachstellen im Stacheldrahtzaun.','Auf die Menschen: Wer behandelt wen, und wie?']},
k2:{b:`Beim Abendessen öffnet sich die Tür einen Spalt. Tobas schiebt dir eine zusätzliche Scheibe Brot und ein Stück Käse unter den Teller.

– Mein Sohn, sagt er in gebrochenem Türkisch. Er ist auch Soldat. Wie du. Vielleicht ist er auch irgendwo… Niemand gibt ihm Brot.

Seine Augen sind feucht. Kannst du diesem Mann vertrauen?`,
 ch:['Tobas um Hilfe bitten: das Türschloss, der Wachplan.','Ihm danken, aber um nichts bitten. Kein Risiko eingehen.','Versuchen, ihm die Schlüssel zu stehlen, wenn er einnickt.']},
k3ok:{b:`Tobas schweigt lange. Dann senkt er die Stimme:

– Donnerstagnacht habe ich Wache. Um drei wechseln die Turmwachen; zehn Minuten lang schaut niemand in den Hof. Der Riegel eurer Tür… könnte vergessen werden.

Er streckt die Hand durch die Gitterstäbe. Du schüttelst sie. Euch beiden zittern die Hände.`,ch:['Weiter.']},
k3no:{b:`Tobas' Gesicht verändert sich augenblicklich. Er weicht zurück und geht wortlos.

Eine halbe Stunde später betreten zwei Wärter die Zelle. Sie bringen dich hinaus und schlagen dich. Rehn steht mit verschränkten Armen in der Tür und sieht zu:

– Ein Fluchtplan, Feldwebel? Von nun an habe ich Sie im Auge.

Tobas siehst du nie wieder auf Wache.`,ch:['Weiter.']},
k3:{b:`Du dankst Tobas mit einem Nicken. Ihr teilt euch zu dritt Brot und Käse.

Selim schluckt seinen Bissen herunter und lächelt:

– Der beste Käse, den ich je gegessen habe. Sagt's nicht Elif, sonst sind die Backwaren ihrer Mutter beleidigt.`,ch:['Weiter.']},
k3key:{b:`Tobas schnarcht auf seinem Stuhl, den Kopf auf der Brust. Vorsichtig ziehst du einen einzigen Schlüssel vom Ring an seinem Gürtel. Damit das Klimpern nicht anders klingt, steckst du ein Stück Draht an seine Stelle.

Der Schlüssel liegt in deiner Handfläche. Dein Herz hämmert gegen die Rippen.`,ch:['Weiter.']},
k3no2:{b:`In dem Moment, in dem deine Hand seinen Gürtel erreicht, öffnet Tobas die Augen. Er sagt nichts; in seinem Gesicht liegt nur tiefe Enttäuschung. Dann bläst er in seine Pfeife.

In dieser Nacht musst du bis zum Morgen stehen. Rehn sieht von der Tür aus zu:

– Ein Fluchtplan, Feldwebel? Von nun an habe ich Sie im Auge.`,ch:['Weiter.']},
k4:{b:(st,fl)=>`Im Eisenrahmen der Pritsche findest du ein lockeres Teil. Tagelang schleifst du sein Ende auf dem Betonboden flach und scharf.${fl.fence?' Am Zaun, den du ausgespäht hast, könnte es funktionieren.':''}${fl.watched?`

Rehn hat nicht geblufft: Jetzt kommen jede Nacht zwei zusätzliche Streifen an eurer Zelle vorbei.`:''}

Aber das eigentliche Problem ist Selim. Sein Bein ist nicht verheilt; er hinkt.

– Ich halte euch auf, Feldwebel, sagt er. Geht. Ich bleibe hier. Ich komme schon irgendwie zurecht.`,
 ch:['„Nein. Zu dritt sind wir rein, zu dritt gehen wir raus.“ Du wirst Selim tragen.','Selim versprechen, ihn zu holen, sobald du draußen bist.','Selim sorgt im Lager für Ablenkung, während ihr flieht.']},
k5:{b:`Der Plan steht. Nur eine Entscheidung bleibt: Wann?`,
 ch:['Um drei Uhr, während des Wechsels der Turmwachen.','Donnerstagnacht, wenn Tobas Wache hat.','In der ersten Regennacht. Regen überdeckt Geräusche und Spuren.'],
 why:['Du hast den Wachplan nicht beobachtet.','Du hast Tobas\' Hilfe nicht.']},
e1:{b:(st,fl)=>(fl.time==='shift'?`02:55 Uhr. Du zählst die Schwenks des Turmscheinwerfers: einmal alle vierzig Sekunden.`
 :fl.time==='tobas'?`Donnerstagnacht. Tobas' schwere Schritte gehen einmal den Gang entlang, dann verstummen sie.`
 :`Du hast drei Tage gewartet. Endlich grollt der Donner; Regen trommelt aufs Dach.`)+`

Mert ist bereit. `+(fl.carry?`Du hast dir Selims Arm über die Schulter gelegt; er beißt die Zähne zusammen und steht auf.`
 :fl.leaveSelim?`Selim liegt mit geschlossenen Augen auf seiner Pritsche und stellt sich schlafend. Ihr habt euch nicht verabschiedet; so ist es leichter.`
 :`Selim richtet sich auf seiner Pritsche auf und zwinkert dir zu, als wolle er sagen: „Wartet auf mein Zeichen.“`),
 ch:['Die Tür sanft aufdrücken. Tobas wird sein Wort gehalten haben.','Den gestohlenen Schlüssel ins Schloss stecken.','Versuchen, den Riegel mit dem Eisenstück anzuheben.']},
e1x:{b:`Das Eisen schrammt mit einem schrillen Quietschen über den Riegel. Im Gang geht eine Taschenlampe an.

Du hältst den Atem an. Das Licht verharrt eine Weile vor der Tür… dann entfernt es sich. Der Wärter hat wohl an eine Ratte gedacht.

Beim zweiten Versuch hebt sich der Riegel.`,ch:['Weiter.']},
e2:{b:(st,fl)=>`Du huschst durch die dunkle Ecke des Hofs und erreichst den Zaun.${fl.fence?' Das ist die Stelle, die du ausgesucht hast: Der Boden am Pfosten ist abgesackt, der Draht locker.':' Der Draht ist straff gespannt, die Lücken sind nicht breiter als eine Hand.'}`,
 ch:['Am lockeren Pfosten unter dem Draht hindurchkriechen.','Die Drähte mit dem Eisenstück aufbiegen und eine Lücke öffnen.']},
e3:{b:(st,fl)=>(fl.alarm?`Ein Draht reißt und wirft die daran gebundene Blechdose herunter. Ein Moment der Stille… dann die Sirene!`
 :`Du bist auf der anderen Seite des Zauns. Gerade als du zum Waldrand rennen willst, gleitet der Scheinwerfer über das Gras auf dich zu.`)+(fl.diversion?`

Genau in diesem Moment bricht am anderen Ende des Lagers Geschrei los. Selim! Er hämmert gegen die Gitter der Zelle und brüllt aus vollem Hals. Die Scheinwerfer schwenken dorthin.`:''),
 ch:['Die Chance nutzen, die Selim dir verschafft hat. Lauf!','Lauf! Halte nicht an bis zum Wald.','Hinlegen. Nicht bewegen, bis das Licht vorbei ist.','Auf das Licht zurennen und die Aufmerksamkeit auf dich ziehen. Die anderen entkommen lassen.']},
e3b:{b:(st,fl)=>`Eine MG-Garbe pflügt den Boden um.${fl.carry?' Selims Gewicht bremst dich. Als eine Kugel vorbeizischt, zuckt Selim zusammen und stöhnt; er ist getroffen.':' Eine Kugel streift deine Wade.'}

Trotzdem erreichst du die Dunkelheit der Bäume.`,ch:['Weiter.']},
e4:{b:(st,fl)=>`Hinter dir bellen Hunde. Lichtkegel von Taschenlampen tanzen zwischen den Bäumen.${fl.route?`

Die Route, die du im Wagen gezählt hast, ist noch in deinem Kopf: die Holzbrücke, die lange Gerade… Die Brücke muss im Süden liegen. Dort ist die Grenze.`:''}`,
 ch:['In den Bach steigen. Das Wasser verbirgt deine Witterung vor den Hunden.','Auf den Kamm klettern und schnell wegkommen.','Der Route folgen, die du dir im Wagen eingeprägt hast. Zur Brücke.']},
b1:{b:(st,fl)=>`Du rennst direkt in den Lichtkegel des Scheinwerfers. Du breitest die Arme aus und schreist. Alle Läufe richten sich auf dich.

Hinter dir in der Dunkelheit siehst du, wie ${fl.carry?'Mert Selim auf die Schulter hievt und':'Mert'} zwischen den Bäumen verschwindet. Dann ein Gewehrkolben, und Dunkelheit.`,ch:['…']},
d1:{b:(st,fl)=>`Im Morgengrauen sucht ihr Schutz in einer Felsmulde. Du bist durchnässt und halb verhungert; deine Füße sind blutig.

${fl.carry?(fl.selimHit?'Selims Wunde blutet weiter, und sein Fieber ist wieder gestiegen. Seine Lippen sind aufgesprungen; immer wieder murmelt er Elifs Namen.':'Selims Fieber ist wieder gestiegen. Seine Lippen sind aufgesprungen; er fantasiert.'):'Mert schläft zitternd neben dir. Ab und zu schreckt er hoch und dämmert dann wieder weg.'}`,
 ch:['Einen Tag hier ausruhen und nachts weitergehen.','Jetzt weitergehen. Suchtrupps könnten näher kommen.','Selim deine letzten Vorräte und dein Wasser geben.']},
d2:{b:`Am Nachmittag lichten sich die Bäume. In der Ferne siehst du auf einem Hügel eine Fahne wehen: unsere.

Dazwischen liegt ein Kilometer offenes Gelände. Mert zeigt auf ein rostiges Schild, halb in der Erde vergraben. Darauf ein roter Totenkopf.

Ein Minenfeld.`,
 ch:['Den Boden mit dem Messer sondieren und Zentimeter für Zentimeter vorrücken.','Den Tierspuren folgen; dort hinüber, wo die Ziegen gegangen sind.','Hinüberrennen. Je kürzer, desto besser.']},
d3:{b:(st,fl)=>`Auf halber Strecke erstarrt Mert.

– Feldwebel, flüstert er. Unter meinem Fuß hat etwas geklickt.

Er steht auf einer Druckmine. Sobald er den Fuß hebt, geht sie hoch.${fl.run?' Er ist im Laufen daraufgetreten; jetzt balanciert er auf einem Bein.':''}`,
 ch:['Versuchen, Merts Gewicht durch einen gleich schweren Stein zu ersetzen.','Bei ihm bleiben und ihn beruhigen. Den eigenen Leuten Zeichen geben.','Mert sagen, er soll sich nach vorne werfen.']},
d3ok:{b:`Einen Moment lang steht alles still. Dann passiert nichts.

Mert liegt ein paar Schritte entfernt auf dem Bauch, die Hände in die Erde gekrallt. Er lebt. Er sieht dich an und versucht zu lachen, aber er weint. Du auch.

Den Rest des Weges gehst du in seinen Fußstapfen.`,ch:['Weiter.']},
d3help:{b:(st,fl)=>`Sie müssen euch vom Graben auf dem Hügel aus mit dem Fernglas beobachten. Eine halbe Stunde später robbt ein Pionierfeldwebel mit einem Minensuchgerät zu euch.${fl.msg?`

– Wir haben eure Funkmeldung bekommen, sagt er. Wir suchen euch seit Tagen.`:''}

Mit geübten Händen entschärft er die Mine. Mert sinkt schluchzend auf die Knie. Du lässt ihn weinen.

Der Pionier führt euch über den sicheren Pfad, den er geräumt hat, zu den Gräben.`,ch:['Weiter.']},
d3x:{b:`Die Explosion, ein Moment weißer Stille. Dann ein Pfeifen in den Ohren.

Du kriechst dorthin, wo Mert liegt. Seine Augen sind offen und sehen dich an. Er versucht etwas zu sagen, aber es kommt kein Laut. Du hältst seine Hand; er hält deine. Dann nicht mehr.

Er war zwanzig. Es war seine erste Nachtpatrouille.`,ch:['Weiter.']},
d4:{b:`Die letzten hundert Meter. Aus dem Graben auf dem Hügel erhebt sich eine Stimme:

– Halt! Wer da? Keine Bewegung!

Läufe sind auf euch gerichtet. Ihr tragt die zerrissene Gefangenenkleidung des feindlichen Lagers. Die eigenen Leute erkennen euch nicht.`,
 ch:['Die Hände heben und die Parole des Bataillons rufen.','Hinlegen; Namen, Dienstgrad und Einheit rufen.','„Nachtvogel! Nachtvogel kommt nach Hause!“ rufen.']},
end_kahraman:{b:(st,fl)=>`Zu dritt stürzt ihr in eurer zerfetzten Gefangenenkleidung in den Graben. Jemand bringt Decken, jemand Wasser. Der Bataillonskommandeur kommt angerannt; er umarmt zuerst dich, dann Selim, dann Mert.

Drei Wochen später sitzt du im Krankenhausgarten. Selim sitzt im Rollstuhl, Elif auf dem Schoß. Er hat ihren Geburtstag geschafft. Mert zündet die Kerzen auf dem Kuchen an; seine Hand zittert nicht mehr.

Einen Monat später wird dir auf dem Exerzierplatz ein Orden an die Brust geheftet. Du suchst in der Menge zwei Gesichter. Sie stehen in der ersten Reihe, beide aufrecht, und applaudieren.${gaveLine(fl)}

Zu dritt seid ihr hinein. Zu dritt seid ihr herausgekommen.`},
end_aci:{b:(st,fl)=>{const mDead=fl.mert==='dead',sDead=fl.carry&&fl.selimDead===1;
 let t=`Als du unseren Graben erreichst, geben deine Knie nach. Decken, Wasser, Funkrauschen… alles scheint von sehr weit her zu kommen.`;
 if(mDead)t+=`

Zwei Tage später wird Merts Leichnam, so wie die Pioniere ihn aus dem Minenfeld geborgen haben, in sein Dorf geschickt. Den Brief an seine Mutter schreibst du selbst. Dreimal fängst du neu an; kein Satz reicht.`;
 if(sDead)t+=`

Selim hat die Grenze nie gesehen. In der letzten Nacht, in der Felsmulde, glühend vor Fieber, murmelte er immer wieder Elifs Namen. Du hast ihn auf dem Rücken nach Hause getragen. Einer Tochter konntest du den Vater nicht zurückgeben, aber deinem Land hast du einen Soldaten zurückgebracht.`;
 else if(!fl.carry)t+=`

Du hast Selim im Lager zurückgelassen. Jede Nacht denkst du an ihn. Vier Monate später taucht sein Name auf einer Liste für einen Gefangenenaustausch auf. Er ist abgemagert, sein Haar ist grau geworden, aber er lebt. Elifs Geburtstag hat er verpasst; er verspricht, beim nächsten da zu sein. Diesmal hält er sein Wort.`;
 return t+gaveLine(fl)+`

Der Orden an deiner Brust wird jeden Morgen ein wenig schwerer.`}},
end_yalniz:{b:(st,fl)=>`Du betrittst den Graben allein.

Mert hast du im Minenfeld zurückgelassen, und Selim ${fl.carry?'in der letzten Nacht in jener Felsmulde':'hinter dem Stacheldraht'}. Ihr seid als Gruppe aufgebrochen; du bist der Einzige, der zurückgekommen ist.

Wochenlang sprichst du nicht. Nachts hörst du im Schlaf Funkrauschen: „…durchhalten…“

Eines Morgens setzt sich im Krankenhausgarten jemand neben dich. Selims Frau, Elif auf dem Schoß. Sie ist dir nicht böse; sie will nur wissen, was passiert ist. Du erzählst ihr alles. Zum ersten Mal weinst du.

Manchmal ist Überleben kein Sieg, sondern eine Verantwortung.`},
end_bedel:{b:(st,fl)=>`Als man dich zurück in die Zelle stößt, liegt ein seltsamer Frieden auf deinem Gesicht.${fl.leaveSelim||fl.diversion?' Selim ist auf der anderen Seite der Wand; ihr seid beide geblieben, aber Mert ist entkommen.':''}

Zwei Wochen später bleibt Rehn vor deiner Zelle stehen:

– ${fl.carry?'Ihre Freunde haben':'Ihr Soldat hat'} die Grenze überquert, Feldwebel. Glückwunsch. Sie haben verloren… und doch gewonnen. Das sehe ich selten.

Sieben Monate später findet an einem nebligen Morgen auf der Brücke zwischen den beiden Ländern ein Gefangenenaustausch statt.${fl.carry?'':' Selim geht neben dir, auf deinen Arm gestützt.'} Am anderen Ende der Brücke wartet eine Gestalt; je näher du kommst, desto deutlicher wird das Gesicht. Mert. Neben ihm ${fl.carry?'Selim auf Krücken':'der Bataillonskommandeur'}.

Mert salutiert. Du erwiderst den Gruß.

Manche Siege gewinnt der, der den Preis bezahlt.`},
end_karanlik:{b:(st,fl)=>st.saglik<=0&&fl._failC>=3
 ?`Deine Wunden und die Erschöpfung zwingen dich schließlich zu Boden. Die Erde ist kalt; der Himmel ist sehr weit weg.

${fl.mert==='dead'?'Niemand ist bei dir. Das Letzte, woran du denkst, ist der Moment, in dem du Merts Hand gehalten hast.':'Mert versucht, dich zu ziehen, dann bricht er neben dir zusammen und nimmt deine Hand. „Ich lasse nicht los, Feldwebel“, sagt er. „Sie haben auch nicht losgelassen.“'}

${fl.mert==='dead'?'Tage später findet eine Streife deine Erkennungsmarke in einer Felsmulde wenige Kilometer vor der Grenze und bringt sie deinem Bataillon.':'Zwei Tage später erreicht Mert allein unseren Graben. Er legt dem Bataillonskommandeur eine Erkennungsmarke in die Hand: deine.'}

Die Geschichte hätte nicht hier enden müssen. Wie sehr haben deine Entscheidungen deinen Körper ausgezehrt?`
 :st.saglik<=0
 ?`Dein Körper konnte nicht mehr. Eines Morgens kommst du nicht mehr von deiner Pritsche hoch; Selims und Merts Stimmen werden immer leiser.

Als der Lagerarzt kommt, ist es zu spät.

Monate später wird bei einem Gefangenenaustausch eine Liste übergeben, mit einem Zeichen neben deinem Namen. Mert wird diese Liste jahrelang in seiner Brieftasche tragen.

Die Geschichte hätte nicht hier enden müssen. Wie sehr haben deine Entscheidungen Körper und Geist ausgezehrt?`
 :`Eines Tages merkst du Rehn gegenüber, dass deine Stimme nicht mehr deine eigene ist. Du erzählst ihm alles, was er wissen will. Deine Hoffnung ist erloschen.

Nach jener Nacht spricht Selim nicht mehr mit dir. Mert kann dir nicht ins Gesicht sehen.

Jeder hat einen Punkt, an dem er zerbricht. Deiner lag hier.

Die Geschichte hätte nicht hier enden müssen. Hättest du Entscheidungen treffen können, die deine Moral aufrecht hielten?`}
 }};
})();
