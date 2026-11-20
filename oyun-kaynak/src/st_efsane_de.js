/* HİKÂYE · EFSANE BİRLİK · Almanca metin katmanı (mantık st_efsane.js'ten gelir) */
(function(){
TALE_DE.efsane={
 meta:{ti:'Die legendäre Einheit',genre:'Drama · Krieg',sub:'Ein siebzig Jahre altes Geheimnis in einem Zimmer im Altenheim',
  pitch:'Ein einundneunzigjähriger Veteran erzählt einer jungen Geschichtsstudentin die Legende der legendären Einheit: zwölf Soldaten, die neun Tage lang einen Pass hielten, um ein Dorf zu retten. Doch je mehr er erzählt, desto weniger passt zusammen. Ein siebzig Jahre gehütetes Versprechen, eine Erkennungsmarke und ein Name.',
  chapters:[{ti:'Der Besuch',sub:'Das Altenheim und die erste Erinnerung'},{ti:'Der Pass',sub:'Der Adlerpass und das Dorf Akpınar'},{ti:'Neun Tage',sub:'Hunger, Kälte und eine weiße Fahne'},{ti:'Die letzte Nacht',sub:'Die Schneewechte und die Marke'},{ti:'Die Wahrheit',sub:'Die letzte Frage'}],
  statDefs:[['hafiza','Erinnerung','var(--blue)'],['birlik','Korpsgeist','var(--green)'],['vicdan','Gewissen','var(--acc)']]},
 medal:'Medaille der legendären Einheit',
 end:{gercek:'Zwei Namen',efsane:'Die Legende',emanet:'Das Vermächtnis',bedel:'Ein halber Tag',sis:'Der Nebel'},
 scenes:{
z1:{b:`Altenheim Çamlık, November. Der Regen zieht dünne Linien über das Fenster.

Du bist einundneunzig. Morgens tun dir zuerst die Knie weh, dann die Erinnerungen.

Sevim, die Pflegerin, klopft an die Tür:

„Opa Kâzım, Sie haben Besuch. Ein Mädchen von der Universität. Sie studiert Geschichte und nimmt die Erzählungen alter Soldaten auf. Sie hat nach Ihnen gefragt. Wegen der Wolfskompanie.“

Die Wolfskompanie. In den Schulbüchern heißt sie „die legendäre Einheit“: zwölf Soldaten, die den Adlerpass neun Tage lang hielten und ein Dorf retteten. Und dich kennt man als ihren einzigen Überlebenden.

In der Schublade deines Nachttischs liegt, in ein Taschentuch gewickelt, eine Medaille. Du hast sie seit Jahren nicht ausgewickelt.`,
 ch:['„Lassen Sie sie herein. Vielleicht ist es Zeit, es zu erzählen.“','Du sagst: „Ich bin müde, ein andermal.“']},
z2:{b:(st,fl)=>`${fl.isteksiz
 ?'Bevor sie geht, legt Sevim ein Foto auf den Nachttisch: „Sie wollte, dass Sie das sehen.“ Eine Minute später steht das Mädchen in der Tür. Ungefragt kommt sie nicht herein, aber aufgeben will sie offenbar auch nicht.'
 :'Das Mädchen kommt herein. Sie ist bestimmt nicht älter als vierundzwanzig. In der Hand ein Aufnahmegerät, in der Tasche ein dicker Ordner.'}

„Ich heiße Zeynep“, sagt sie. „Ich wollte Ihnen ein Foto zeigen.“

Das Foto kennst du. Zwölf junge Männer im Schnee. Manche lächeln, andere starren mit gerunzelter Stirn in die Kamera. Hinter ihnen die Felsen des Adlerpasses.

„Dieses Foto ist in jedem Buch“, sagt Zeynep. „Aber darunter stehen keine Namen. Welcher sind Sie?“

Dein Finger bleibt über dem Foto stehen.`,
 ch:['Du zeigst auf den breitschultrigen Unteroffizier, der in der Mitte lächelt.','Du zeigst auf den mageren Jungen, der am Rand im Schnee zittert.']},
z2b:{b:`Zeynep sieht auf das Foto, dann auf dich.

„Aber dieser Junge … laut den Akten ist das der Gefreite Hasan Çelik. In der neunten Nacht gefallen.“

Einen Moment lang ist nur der Regen zu hören.

„Meine Augen sind nicht mehr, was sie waren, Kind“, sagst du. „Das Alter.“

Zeynep notiert etwas in ihr Heft. Dann lächelt sie:

„Erzählen Sie es mir von Anfang an? Von dem Tag an, an dem Sie zur Einheit kamen.“`,ch:['Du schließt die Augen und beginnst zu erzählen.']},
z3:{b:(st,fl)=>`${fl.gosterdi==='cavus'?`Zeynep sieht auf das Foto.

„Unteroffizier Kâzım Yıldırım“, sagt sie. „Dreiundzwanzig Jahre alt.“

Und sie schaltet das Aufnahmegerät ein.

„Erzählen Sie von Anfang an. Von dem Tag an, an dem Sie zur Einheit kamen.“

Du schließt die Augen.

`:''}*Vor zweiundsiebzig Jahren. Ostfront.*

Du springst von der Ladefläche des Lastwagens in den Schnee. Du bist neunzehn. Alles, was du besitzt, seit du das Waisenhaus verlassen hast, passt in den Rucksack auf deinem Rücken.

Die Zelte der Wolfskompanie stehen in einer Reihe am Bach. Hauptmann Ateş Kaya mustert dich von Kopf bis Fuß und hakt wortlos deinen Namen auf der Liste ab.

Dann eine Stimme:

„Ist das der Neue?“

Ein breitschultriger Unteroffizier mit Schnurrbart. Wenn er lacht, verschwinden seine Augen. Als er deine blau gefrorenen Hände sieht, zieht er seine Handschuhe aus und reicht sie dir:

„Nimm. Bei uns zu Hause nennt man das nicht mal Schnee.“

Auf dem Namensschild an seiner Brust steht: *K. Yıldırım*.`,
 ch:['Du nimmst die Handschuhe. Du bedankst dich.','Du sagst: „Nein, danke.“ Du willst niemandem etwas schulden.','Du fragst nach dem Namen der Kompanie. Warum „Wolf“?']},
z4:{b:(st,fl)=>`${fl.eldiven
 ?'Der Unteroffizier klopft dir auf die Schulter: „Ich bin Kâzım. Du nennst mich Unteroffizier, ich nenne dich Neuer. Abgemacht?“'
 :fl.kurt
 ?'Der Unteroffizier lacht: „Weil der Wolf das Rudel nicht verlässt. Wenn einer fällt, lässt ihn das Rudel nicht zurück. Ich bin Kâzım. Jetzt gehörst du auch zum Rudel, Neuer.“'
 :'Der Unteroffizier zuckt mit den Schultern: „Wie du willst. Aber auf diesem Berg schuldet am Ende jeder irgendwem etwas. Ich bin Kâzım.“'}

Die ersten Wochen vergehen mit Schnee, Wachen und Kâzıms endlosen Geschichten. Er erzählt dir von seiner Mutter, Mutter Hatice, die zwei ältere Söhne an anderen Fronten verloren hat. Und von seiner achtjährigen Schwester Nazlı: „Zu jedem Fest bekommt sie ihr Taschengeld von mir. Wenn ich dieses Fest nicht heimkomme, gibt es Ärger.“

Auch die anderen sind da: Obergefreiter Bekir, ein schweigsamer Scharfschütze; Yakup, der Funker; Şükrü, der Koch, der beim Umrühren Volkslieder singt; und Rıfat, der Sanitäter.

Eines Nachts auf Wache fragt dich Kâzım:

„Und wen hast du, Neuer? Wem schreibst du?“`,
 ch:['Du sagst: „Niemanden.“ Du sagst ihm die Wahrheit.','Du sagst: „Ich habe eine Tante.“ Du willst nicht allein wirken.','Du antwortest nicht. Du wechselst das Thema.']},
z5:{b:(st,fl)=>`${fl.yetim
 ?'Kâzım schweigt lange. Dann zieht er einen zerknitterten Brief aus der Tasche: „Dann gehört ab jetzt die Hälfte meiner Briefe dir“, sagt er. „Meine Mutter ist es ohnehin gewohnt, für mehr als einen zu beten.“'
 :'Kâzım fragt nicht weiter. Aber von dieser Nacht an fügt er jedem Brief am Ende eine Zeile hinzu: „Ich habe einen Neuen bei mir. Bete auch für ihn, Mutter.“'}

Als du die Augen öffnest, sieht Zeynep dich an. Das rote Licht des Aufnahmegeräts blinkt.

„Mutter Hatice“, sagt sie langsam. „Nazlı. Sie haben diese Namen sehr liebevoll ausgesprochen.“

Dann nimmt sie ein Blatt aus dem Ordner:

„Darf ich Sie etwas fragen? Bitte nehmen Sie es mir nicht übel. In der Militärakte von Kâzım Yıldırım steht Blutgruppe 0. In der Krankenakte dieses Altenheims steht bei Ihnen A.“

Deine Kehle wird trocken.`,
 ch:['„Ein Fehler des Schreibers, Kind. Damals wurde alles von Hand geschrieben.“','Du schweigst einen Moment. Dann sagst du: „Reden wir morgen.“','Du nimmst einen Schluck Tee. Du versuchst, das Zittern deiner Hände zu verbergen.']},
g1:{b:(st,fl)=>`Am nächsten Tag kommt Zeynep wieder. ${fl.katip
 ?'Die Blutgruppe erwähnt sie nicht mehr. Aber du siehst, wie sie etwas an den Rand ihres Hefts schreibt.'
 :fl.yarin?'Sie setzt sich lächelnd: „Gestern haben Sie gesagt, wir reden morgen. Heute ist dieses Morgen.“':'Sie legt das mitgebrachte Gebäck auf den Nachttisch.'}

„Erzählen Sie mir vom Adlerpass“, sagt sie. „In den Büchern stehen drei Zeilen. Den Rest wissen nur Sie.“

Manchmal kommen Erinnerungen von selbst; manchmal muss man sie herauszerren.`,
 ch:['Du fängst sofort an zu erzählen.','Du betrachtest zuerst lange das Foto. Du erinnerst dich an die Gesichter, eins nach dem anderen.']},
g2:{b:`*März. Der Adlerpass.*

Hauptmann Ateş breitet die Karte auf einem Felsen aus:

„Der Feind hat die Hauptlinie durchbrochen. Dieser Pass ist der einzige Weg hinunter ins Dorf Akpınar. Im Dorf leben dreihundert Menschen. Wir evakuieren sie über den Hochlandweg hinter dem Berg. Wir brauchen drei Tage. Drei Tage lang halten wir diesen Pass.“

Als ihr in Akpınar ankommt, empfängt euch der Dorfvorsteher, Opa Kerim. Seine zehnjährige Enkelin Gülsüm versucht, die Ziegen zusammenzutreiben. Die Frauen binden sich Matratzen auf den Rücken. Alte, Kranke, Säuglinge auf dem Arm …

Kâzım dreht sich zu dir um:

„Wir müssen anfangen, Stellungen zu graben, aber … sieh dir diese Leute an, Neuer.“

Der Hauptmann lässt dich entscheiden, was du am ersten Tag tust.`,
 ch:['Du hilfst den Dorfbewohnern, ihre Sachen zum Hochlandweg zu tragen.','Du fängst an, Stellungen zu graben. Wenn der Pass fällt, wird niemand gerettet.','Du gehst mit Bekir die Felsen über dem Pass erkunden.']},
g3:{b:(st,fl)=>`${fl.yardim
 ?'Am Abend fallen dir fast die Arme ab. Gülsüm reicht dir den Strick einer der Ziegen: „Soldat, pass auf sie auf. Sie ist die sturste.“'
 :fl.mevzi?'Bis zum Abend gräbst du im gefrorenen Boden. Deine Hände sind blutig, aber die Stellung ist tief.'
 :'In den Felsen über dem Pass findet ihr, Bekir und du, einen Ziegenpfad, über den der Feind euch umgehen könnte. Bekir nickt nur: „Du hast ein gutes Auge.“'}

Erste Nacht, drei Uhr. Am gegenüberliegenden Hang tauchen Lichter auf. Motorengeräusch. Dann Stille.

Bekir gleitet neben dich:

„Keine Eile. Lass sie näher kommen. Wenn wir zu früh schießen, wissen sie, wie wenige wir sind.“

Neben dir geht Yakups Atem schneller. Eine Leuchtkugel steigt in den Himmel.`,
 ch:['Du hörst auf Bekir. Du wartest, bis sie näher sind.','Du schießt sofort. Du willst sie vertreiben.']},
g4:{b:(st,fl)=>`${fl.gece1==='iyi'
 ?'Die feindliche Vorhut lief in den Hinterhalt und zog sich zurück. Die Kompanie hat keine Verwundeten. Am Morgen reicht dir Kâzım den ersten Tee.'
 :'Der Feind hat gemerkt, dass ihr wenige seid. Das Mörserfeuer dauerte die ganze Nacht. Şükrüs Kessel hat ein Loch, und Rıfat hat einen Schuss in den Arm bekommen.'}

*Dritter Tag.* Hauptmann Ateş ist am Bein verwundet. Er beißt die Zähne zusammen, während Rıfat den Verband wechselt. Yakup hebt den Kopf vom Funkgerät:

„Befehl vom Hauptquartier, Herr Hauptmann: Rückzug. Sofort.“

Aber das halbe Dorf ist noch auf dem Hochlandweg. In der Nacht hat es geschneit, und der Weg ist versperrt. Die Alten und Kranken kommen nur langsam voran. Es braucht noch einen Tag, vielleicht zwei.

Der Hauptmann ruft alle zusammen. Seine Stimme ist schwach, aber fest:

„Der Befehl ist klar. Aber ich will dieses Dorf nicht im Stich lassen. Wenn wir bleiben, kommen die meisten von uns nicht zurück. Ich will hören, was ihr denkt. Du zuerst, Neuer. In dieser Kompanie spricht der Jüngste zuerst.“

Kâzım sieht dich an. Du weißt, was er denkt.`,
 ch:['„Wir bleiben, Herr Hauptmann. Bis das Dorf durch ist.“','„Befehl ist Befehl, Herr Hauptmann. Ziehen wir uns zurück.“','„Die Freiwilligen bleiben, die anderen ziehen sich zurück.“']},
g4b:{b:`Der Hauptmann senkt den Kopf. Der Rückzug beginnt.

Einen halben Tag später kommt jemand durch den Schnee im Tal gerannt. Es ist Gülsüm. Barfuß, das Gesicht verweint:

„Sie kommen! Opa und die anderen sind noch auf dem Weg!“

Kâzım hängt sich das Gewehr um und kehrt um. Er blickt sich nicht einmal um. Der Hauptmann hält einen Moment inne, dann ruft er:

„Kompanie! Kehrt!“

Als ihr den Pass erreicht, ist der Feind schon bei den ersten Häusern am Dorfrand. Ihr drängt ihn zurück, aber ein halber Tag ist verloren. Von der letzten Gruppe auf dem Hochlandweg kehrten vierzehn Menschen nicht zurück.

Jahrelang wirst du jede Nacht diese vierzehn Namen einzeln zählen.`,ch:['Weiter.']},
g5:{b:(st,fl)=>`Zeyneps Stimme holt dich in die Gegenwart zurück:

„Opa Kâzım? Geht es Ihnen gut?“

Einen Moment lang weißt du nicht, wer sie ist. Dieses Haar, die Form dieser Augen …

„Nazlı?“, sagst du. „Ich habe dir dein Festgeld mitgebracht …“

Zeynep erstarrt. Ihre Augen füllen sich mit Tränen. Dann streckt sie die Hand aus und nimmt deine:

„Ich bin Zeynep“, sagt sie langsam. „Aber Nazlı … ist auch für mich ein sehr teurer Name.“

${fl.geri?'Eine Weile sprichst du nicht. Von diesem halben Tag hast du nie jemandem erzählt. In den Büchern steht er auch nicht.':'Deine Hände zittern noch.'}`,
 ch:['Du ruhst dich ein wenig aus. Du siehst durchs Fenster in den Regen.','Du machst weiter. Du musst es erzählen, bevor du es vergisst.']},
d1:{b:(st,fl)=>`*Fünfter Tag.*

Die Vorräte sind aufgebraucht. Şükrü kocht aus dem letzten Bulgur und geschmolzenem Schnee eine Suppe. Die ganze Kompanie versammelt sich um den Dampf, der aus dem Kessel steigt.

${fl.geri
 ?'Die Überlebenden der verlorenen Gruppe, etwa zwanzig, warten im Schafstall direkt unterhalb des Passes.'
 :'Die letzte Gruppe aus dem Dorf, etwa hundert Alte und Kranke, wartet im Schafstall direkt unterhalb des Passes und betet, dass sich der verschneite Weg öffnet.'} Die Kinder zittern am Feuer.

Kâzım steht vor dem Kessel und sieht dich an. Die Suppe reicht nicht einmal für zwölf.`,
 ch:['Du teilst die Suppe mit den Leuten im Schafstall.','Ein Soldat muss bei Kräften bleiben, um zu kämpfen. Die Suppe gehört der Kompanie.','Du bringst deine Portion zu Gülsüm. Den Rest rührst du nicht an.']},
d2:{b:(st,fl)=>`${fl.paylas?'Wortlos nimmt Kâzım dir die Kelle ab und reicht die erste Schale Opa Kerim. In dieser Nacht geht die halbe Kompanie hungrig schlafen. Niemand beklagt sich.\n\n':fl.gulsum?'Gülsüm hält die Schale mit beiden Händen und teilt die Hälfte mit ihrem kleinen Bruder.\n\n':''}*Sechster Tag.* Hauptmann Ateş ist vor dem Morgengrauen still gestorben. Seine letzten Worte galten Kâzım: „Die Kompanie gehört dir.“

Auch das Funkgerät ist tot. Yakup hat die ganze Nacht an den Drähten gearbeitet, vergeblich. Das Hauptquartier weiß nicht, wo ihr seid, nicht einmal, ob ihr noch lebt.

Kâzım steht vor der Karte:

„Einer muss runter. Die Truppen im Tal erreichen und Hilfe holen. Aber der Weg führt direkt unter den Augen des Feindes entlang.“

Alle schweigen. Und du hörst deine eigene Stimme:`,
 ch:['„Ich gehe, Herr Unteroffizier.“','„Versuchen wir mit Yakup noch einmal, das Funkgerät zu reparieren.“','„Niemand geht. Was auch passiert, wir bleiben zusammen.“']},
d3:{b:(st,fl)=>`${fl.haber==='kosu'
 ?'Nachts rutschst du durch den Schnee ins Tal. Vor dem Morgengrauen erreichst du eine Artillerieeinheit. „Am neunten Tag“, sagt ihr Kommandant. „Früher schaffen wir es nicht.“ Auf dem Rückweg wartet Kâzım am Eingang des Passes. Er umarmt dich und klopft dir auf den Rücken.'
 :fl.yaralandi?'Auf halbem Weg stößt du auf eine Patrouille. Beim Wegrennen streift eine Kugel deine Schulter. Du kriechst durch den Schnee zurück. Als Kâzım dich in die Stellung zieht, hörst du ihn zum ersten Mal brüllen: „Wenn du noch einmal irgendwohin gehst, ohne mich zu fragen …“ Er bringt den Satz nicht zu Ende.'
 :fl.haber==='telsiz'?'Vor dem Morgengrauen jubelt Yakup. Eine knisternde Stimme im Funk: „Am neunten Tag. Haltet durch. Am neunten Tag.“'
 :fl.telsizYok?'Das Funkgerät spricht nie wieder. Yakup trägt es trotzdem auf dem Rücken; „vielleicht“, sagt er.'
 :'Niemand geht. In dieser Nacht rückt die Kompanie noch enger ums Feuer.'}

*Siebter Tag.* Eine weiße Fahne am gegenüberliegenden Hang. Ein feindlicher Offizier geht mit einem Dolmetscher bis in die Mitte des Passes:

„Ergebt euch. Den Frauen und Kindern geschieht nichts. Ihr habt mein Wort.“

Kâzım flüstert dir zu:

„Der Weg der letzten Gruppe ist morgen frei. Wir brauchen noch einen Tag.“`,
 ch:['Du schlägst Kâzım vor: „Ziehen wir die Verhandlung in die Länge und gewinnen Zeit.“','„Wir ergeben uns nicht. Schick ihn weg.“','Du fragst: „Was, wenn wir seinem Wort trauen und ihm die Gruppe übergeben?“']},
d4:{b:(st,fl)=>`${{
 oyalama:'Kâzım feilscht einen halben Tag lang bei Tee mit dem feindlichen Offizier: auf jedes Angebot eine Frage, auf jede Frage eine Geschichte. Am Abend ist die letzte Gruppe schon auf dem Hochlandweg.',
 anladi:'Die Verhandlung dauert eine Stunde. Dann merkt der feindliche Offizier, dass ihr auf Zeit spielt. Am Nachmittag kommt der bisher heftigste Angriff. An diesem Tag fällt Şükrü. Sein Kessel steht noch am Feuer.',
 red:'Der Offizier zuckt mit den Schultern und geht zurück. In dieser Nacht kommt der Angriff. Şükrü fällt. Sein Kessel steht noch am Feuer.',
 teklif:'Den Blick, den Kâzım dir zuwirft, wirst du siebzig Jahre nicht vergessen. „Der Wolf verlässt das Rudel nicht, Neuer“, sagt er nur. Er schickt den Offizier weg. In dieser Nacht kommt der Angriff. Şükrü fällt.'
}[fl.d7]}

Zeynep schaltet das Aufnahmegerät aus. Sie holt ihr Handy hervor:

„Ich möchte, dass Sie sich etwas anhören. Es ist die Aufnahme einer sehr alten Kassette; ich habe sie digitalisieren lassen.“

Aus dem Lautsprecher kommt die Stimme einer alten Frau: „… Mein Bruder kam zu jedem Fest heim. Bonbons in der Hand, Taschengeld in der Tasche. Selbst als meine Mutter nicht mehr sehen konnte, erkannte sie seinen Schritt …“

Diese Stimme kennst du. Älter, als du sie je gehört hast, aber du kennst sie.

„Nazlı“, sagst du.`,
 ch:['Du weinst. Die Tränen, die du siebzig Jahre zurückgehalten hast.','Du fasst dich. Du sagst: „Machen wir weiter.“']},
s1:{b:(st,fl)=>`*Die neunte Nacht.*

Ihr seid noch sieben. ${fl.yaralandi?'Deine Schulter ist verbunden; du hältst das Gewehr mit einer Hand. ':''}Die letzten Dorfbewohner aus dem Schafstall sind mit Opa Kerim und Gülsüm zum Hochlandweg aufgebrochen. Wenn ihr den Pass bis zum Morgen haltet, sind sie gerettet.

Aber diesmal kommt der Feind mit allem, was er hat. Der gegenüberliegende Hang ist voller Laternen.

Kâzım ruft euch zusammen und zeigt euch den letzten Sprengstoff:

„Die Schneewechte über dem Pass. Wenn wir sie sprengen, versperrt die Lawine den Weg, und wochenlang kommt keiner durch. Aber die Zündschnur ist kurz. Wer sie anzündet, schafft es vielleicht nicht mehr weg.“

Stille.

„Ich bleibe“, sagt Kâzım. „Die anderen folgen den Dorfbewohnern ins Hochland.“`,
 ch:['„Ich bleibe, Herr Unteroffizier. Ich habe niemanden.“','„Wir bleiben beide. Einer zündet, der andere zieht ihn weg.“','Du gehorchst dem Befehl. Du ziehst dich mit den anderen zurück.']},
s2:{b:(st,fl)=>`${{
 ben:'Kâzım lacht. Noch siebzig Jahre später hörst du dieses Lachen. „Du hast niemanden?“, sagt er. „Und was bin ich?“ Dann packt er dich am Kragen und stößt dich weg. Als du wieder aufstehst, hat er die Zündschnur schon angezündet.',
 birlikte:'Ihr zündet die Schnur gemeinsam an. Ihr rennt. Hinter euch ächzt der Berg.',
 cekil:'Du gehst hundert Meter. Dann bleibst du stehen. Du kehrst um. Du findest Kâzım bei der Zündschnur. Er sieht dich, flucht, dann lacht er: „Sturer Bock“, sagt er. „Genau wie Gülsüms Ziege.“'
}[fl.son]}

Die Explosion. Dann ein Donnern, als rutsche der ganze Berg ab. Die Wechte stürzt auf den Pass.

Und dann Stille.

Es ist Kâzım, der dich aus dem Schnee gräbt. Aber er selbst kann nicht aufstehen. Ein Felssplitter steckt in seiner Brust. Ein dunkler Fleck breitet sich im Schnee aus.`,ch:['Du kniest dich neben ihn.']},
s3:{b:`Kâzıms Atem geht kurz und flach. Du hältst seine Hand.

„Hör zu, Neuer“, sagt er. „Es ist keine Zeit.“

Er nimmt die Erkennungsmarke von seinem Hals und drückt sie dir in die Handfläche. Dann reißt er dir deine ab und zerbricht die Kette.

„Meine Mutter hat zwei Söhne begraben. Wenn sie den dritten begräbt, überlebt sie das nicht. Geh du nach Hause. An meiner Stelle. Gib Nazlı ihr Festgeld.“

„Herr Unteroffizier, ich …“

„Das ist ein Befehl“, sagt er. „Der letzte.“

Er zieht einen halb geschriebenen Brief aus der Brusttasche:

„Für meine Mutter“, sagt er. „Schreib du ihn zu Ende.“`,
 ch:['Du nimmst die Marke und den Brief. „Ich verspreche es, Herr Unteroffizier.“','„Ich kann nicht, Herr Unteroffizier. Das wäre eine Lüge.“']},
s4:{b:(st,fl)=>`${fl.reddettim
 ?`Kâzım antwortet nicht. Er hält noch immer deine Hand, die Augen offen, zum Himmel gerichtet. Dann wird alles schwarz.

Du wachst in einem Feldlazarett auf. Eine Krankenschwester begrüßt dich lächelnd: „Willkommen zurück, Unteroffizier Kâzım.“ Die Marke hängt an deinem Hals; er muss sie dir umgelegt haben, während du bewusstlos warst. Auch der Brief steckt in deiner Tasche.`
 :`Kâzım stirbt mit deiner Hand in seiner. Die Augen offen, zum Himmel gerichtet.

Du wachst in einem Feldlazarett auf. Eine Krankenschwester begrüßt dich lächelnd: „Willkommen zurück, Unteroffizier Kâzım.“`}

Laut den Akten fiel der Gefreite Hasan Çelik in der neunten Nacht. Unteroffizier Kâzım Yıldırım ist der einzige überlebende Soldat der legendären Einheit.

Einen Monat später stehst du vor der Tür eines Dorfhauses. Mutter Hatice kann nicht mehr sehen. Als sie deine Stimme hört, suchen ihre Hände dein Gesicht. Ihre Finger tasten über deine Stirn, deine Nase, deine Lippen. Lange, sehr lange.

Hinter ihr steht ein achtjähriges Mädchen. Nazlı. Sie sieht dich an. Zuerst begreift sie etwas; dann entscheidet sie etwas.

„Bruder“, sagt sie. „Willkommen zu Hause.“`,
 ch:['Du flüsterst Mutter Hatice die Wahrheit ins Ohr.','Du schweigst. Du wirst ihr Sohn.']},
r1:{b:(st,fl)=>`${fl.anneBildi
 ?'Mutter Hatice hört dein Flüstern. Dann zieht sie deinen Kopf an ihre Brust. „Ich weiß, mein Junge“, sagt sie. „So klang Kâzıms Schritt nicht. Aber jetzt bist du auch mein Sohn.“'
 :'Mutter Hatice drückt dich an ihre Brust. Sie fragt nichts. Einundzwanzig Jahre lang, bis zu ihrem Todestag, betet sie jeden Morgen für dich.'}

Siebzig Jahre. Du hast Mutter Hatices Sarg auf der Schulter getragen. Du hast Nazlı am Arm zu ihrer Hochzeit geführt. Das Festgeld, zu jedem Fest … Und jedes Jahr bist du allein zum Grab am Adlerpass gegangen. Zu dem Stein, auf dem „Gefreiter Hasan Çelik“ steht.

Im Zimmer des Altenheims sitzt Zeynep dir gegenüber. Das Aufnahmegerät liegt auf dem Tisch. Das rote Licht leuchtet.

„Die letzte Frage“, sagt sie. Ihre Stimme zittert.

„Wer sind Sie?“`,
 ch:['„Ich bin Hasan Çelik. Kâzım Yıldırım ist in der neunten Nacht gestorben. Als er mich rettete.“','„Ich bin Kâzım Yıldırım, Kind. Egal, was in den Büchern steht.“','Du antwortest nicht. Du nimmst die Marke und den halb geschriebenen Brief aus der Schublade und gibst sie ihr.']},
end_gercek:{b:`Zeynep schaltet das Aufnahmegerät nicht aus. Sie weint, aber sie lächelt.

„Ich wusste es“, sagt sie. „Meine Großmutter hat es mir gesagt. Nazlı Yıldırım. Sie ist letzten Frühling gestorben. In ihren letzten Tagen hat sie meine Hand genommen und gesagt: ‚Geh ins Altenheim Çamlık. Bedank dich bei Onkel Hasan. Er war sein ganzes Leben lang unsere Familie, für meine Mutter und für mich. Mein Bruder Kâzım hätte es auch so gewollt.‘“

Du dachtest, Nazlı wüsste es nicht. Siebzig Jahre lang wusste Nazlı es und sagte kein Wort.

Sechs Monate später findet am Adlerpass eine kleine Zeremonie statt. In den Grabstein, auf dem siebzig Jahre lang „Gefreiter Hasan Çelik“ stand, wird endlich der richtige Name gemeißelt: *Unteroffizier Kâzım Yıldırım.* Auf dem Marmor des Denkmals stehen zwei Namen nebeneinander. Unter beiden dieselbe Zeile: *Wolfskompanie.*

Du sitzt im Rollstuhl neben Zeynep. Der Wind weht vom Pass herab. Einen Augenblick lang ist es dir, als lache irgendwo in der Ferne jemand.

„Neuer“, sagt der Wind. „Bist du nach Hause gekommen?“

Bin ich, Herr Unteroffizier. So, wie Sie es wollten.`},
end_efsane:{b:`Zeynep sieht dich lange an. Dann schaltet sie das Aufnahmegerät aus.

„Meine Großmutter hat es auch so gesagt“, sagt sie langsam. „‚Mein Bruder Kâzım.‘ Immer so. Nazlı Yıldırım. Sie ist letzten Frühling gestorben.“

Sie steht auf und bleibt in der Tür stehen:

„In ihren letzten Tagen hat sie mich gebeten, Ihnen zu danken. Ich habe nicht gefragt, warum. Ich glaube, jetzt verstehe ich es.“

Die Bücher ändern sich nicht. Bei Schulfeiern erzählen die Lehrer noch immer die Geschichte von „Kâzım Yıldırım, dem letzten lebenden Helden“. Unter dem Foto ist ein Name gedruckt: unter dem Unteroffizier, der in der Mitte lächelt.

An einem Wintermorgen findet Sevim dich schlafend am Fenster. In deiner Hand hältst du die Marke. Ein Name ist darauf eingraviert, aber niemand liest ihn genau.

Manchmal schützt eine Legende keine Lüge, sondern ein Versprechen.`},
end_emanet:{b:`Du sagst nichts. Du öffnest die Schublade. Unter der Medaille im Taschentuch liegen eine siebzig Jahre alte Erkennungsmarke und ein vergilbter, halb geschriebener Brief.

Zeynep dreht die Marke um: *K. Yıldırım*. Die erste Zeile des Briefs: „Mutter, wenn ich dieses Fest nicht heimkomme …“ Der Brief ist unvollendet. Darunter wurden in einer anderen Handschrift über die Jahre Zeilen hinzugefügt. Eine zu jedem Fest.

Während sie liest, begreift Zeynep. Dann sieht sie dich an.

„Meine Großmutter Nazlı“, flüstert sie. „Sie wusste es. Sie hat es immer gewusst. Sie hat mich gebeten, Ihnen zu danken.“

Sie schließt die Hand um die Marke:

„Was soll ich tun?“

„Entscheide du“, sagst du. „Jetzt ist es dein Vermächtnis.“

Ein Jahr später erscheint Zeyneps Buch: *Der Adlerpass: Zwei Soldaten, ein Name*. Auf der ersten Seite eine einzeilige Widmung: *Für alle, die ihre Versprechen halten.*`},
end_bedel:{b:(st,fl)=>`${fl.secim==='gercek'
 ?'„Ich bin Hasan Çelik“, sagst du. Und du sprichst weiter, denn heute Abend hast du beschlossen, alles zu erzählen. Dass du am dritten Tag „ziehen wir uns zurück“ gesagt hast. Den verlorenen halben Tag. Die vierzehn Menschen, die vom Hochlandweg nicht zurückkehrten.'
 :fl.secim==='emanet'?'Du gibst Zeynep die Marke und den Brief. Und noch ein Blatt: eine Liste, die du siebzig Jahre aufbewahrt hast. Vierzehn Namen.'
 :'„Ich bin Kâzım Yıldırım“, sagst du. Aber deine Stimme zittert. In der Legende der „neun Tage“ aus den Büchern steckt ein halber Tag, von dem niemand weiß.'}

Zeynep hört schweigend zu. Dann schaltet sie das Aufnahmegerät aus.

„Meine Großmutter Nazlı“, sagt sie, „hat mich gebeten, Ihnen zu danken. Dafür, dass Sie ihr ganzes Leben lang ihr Bruder waren.“

Dankbarkeit. Für einen Mann, der seit siebzig Jahren jede Nacht vierzehn Namen zählt.

Die Bücher sagen noch immer „neun Tage“. Aber du hast diesen halben Tag nie vergessen. Den Nachmittag, an dem Gülsüm barfuß durch den Schnee gerannt kam. Kâzım, wie er umkehrte, ohne sich umzusehen.

Manchmal steht die Geschichte eines Helden auf einer Reue.

Die Geschichte hätte nicht so enden müssen. Hättest du am dritten Tag nicht etwas anderes sagen können?`},
end_sis:{b:`Zeynep fragt etwas, aber die Worte verheddern sich. Das Mädchen vor dir wird zu Nazlı, dann zu Gülsüm, dann zu niemandem.

„Herr Unteroffizier?“, sagst du ins leere Zimmer. „Die Zündschnur … die Zündschnur ist kurz …“

Sevim kommt herein und hilft dir, dich hinzulegen. Zeynep packt leise das Aufnahmegerät ein. In der Tür bleibt sie stehen und sieht dich eine Weile an.

In der nächsten Woche kommt sie wieder. Und in der übernächsten. Aber die Geschichte fügt sich nie wieder zusammen.

Manche Geheimnisse bewahrt kein Versprechen, sondern der Nebel.

Die Geschichte hätte nicht so enden müssen. Hättest du dir beim Erzählen nicht eine Pause gönnen können?`}
 }};
})();
