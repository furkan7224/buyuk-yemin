/* HİKÂYE · KRİZ MASASI · Almanca metin katmanı (mantık st_kriz.js'ten gelir) */
(function(){
const sel=fl=>fl.savak?'yok':fl.tahliye?'bos':fl.gecUyari?'hafif':'agir';
const bildi=fl=>fl.iddia||fl.nuri||fl.sor||fl.dosya||fl.ucuncu;
TALE_DE.kriz={
 meta:{ti:'Krisenstab',genre:'Politik · Thriller',sub:'48 Stunden, 14 Geiseln, ein Staudamm und ein Bericht, den niemand gelesen hat',
  pitch:'Um Mitternacht besetzen bewaffnete Männer das Kontrollgebäude eines Staudamms: vierzehn Geiseln drinnen, neun Kilometer weiter unten eine schlafende Stadt. Du leitest den Krisenstab. Auf der einen Seite eine Generalin, die stürmen will; auf der anderen eine Verhandlerin, die reden will; und dir gegenüber ein Vizeminister, der es schnell beenden will. Ist der Mann, der die Geiseln festhält, ein Terrorist – oder ein Whistleblower, dem niemand zugehört hat?',
  chapters:[{ti:'Erster Kontakt',sub:'Stunde 00–06'},{ti:'Verhandlung',sub:'Stunde 06–18'},{ti:'Zerreißprobe',sub:'Stunde 18–30'},{ti:'Letztes Angebot',sub:'Stunde 30–42'},{ti:'Morgengrauen',sub:'Stunde 42–48'}],
  statDefs:[['rehine','Vertrauen der Geiseln','var(--green)'],['kamuoyu','Öffentliche Meinung','var(--acc)'],['masa','Zusammenhalt im Team','var(--blue)']]},
 medal:'Medaille des Krisenstabs',
 end:{gercek:'Die Wahrheit',sessiz:'Stiller Sieg',baskin:'Sturm im Sturm',bedel:'Ein hoher Preis',sel:'Yeşilova',azil:'Abgesetzt',kayip:'Dunkler Morgen'},
 scenes:{
k1:{b:`03:12 Uhr. Das Telefon weckt dich beim zweiten Klingeln.

– Das Kontrollgebäude des Yıldızdere-Staudamms ist besetzt worden. Fünf bewaffnete Männer. Vierzehn Mitarbeiter drinnen.

Zwanzig Minuten später liegt die Akte vor dir. Der Damm liegt neun Kilometer oberhalb der Stadt Yeşilova. Dort schlafen zweiundzwanzigtausend Menschen. Wer das Kontrollgebäude hält, kann die Hochwasserschütze öffnen, wann immer er will.

Der Anführer der Angreifer hat einmal angerufen und nur einen Satz gesagt: „Ich rede mit dem, der das Sagen hat.“

Der Erlass wurde vor fünf Minuten unterzeichnet. Du bist jetzt Leiter des Krisenstabs.

Wohin gehst du zuerst?`,
 ch:['Mit dem Hubschrauber zum Damm. Den Ort mit eigenen Augen sehen.','In der Krisenzentrale der Hauptstadt bleiben. Von dort aus führen.']},
k2:{b:(st,fl)=>`${fl.yer==='saha'
 ?'Man hat den Gendarmerieposten drei Kilometer unterhalb des Damms in eine Krisenzentrale verwandelt. Durchs Fenster siehst du die Scheinwerfer des Damms, jeder wie ein Auge, das in der Dunkelheit hängt.'
 :'Die Wand der Krisenzentrale in der Hauptstadt ist mit Bildschirmen bedeckt. Die Sicherheitskameras des Damms sind seit zehn Minuten schwarz.'}

Drei Personen sitzen am Tisch.

Brigadegeneralin Oya Demirel, Spezialkräfte. Kurze Haare, wenige Worte. „Geben Sie mir zwei Stunden, und ich kenne jeden Winkel dieses Gebäudes.“

Erste Kriminalhauptkommissarin Selin Uçar, seit fünfzehn Jahren Verhandlerin. „Lassen Sie ihn nicht warten. Wer wartet, fängt an, mit sich selbst zu reden.“

Vizeminister Haldun Sezer. Seine Krawatte sitzt selbst um Mitternacht perfekt. „Die Presse wird bald davon erfahren. Bekommen wir zuerst den Nachrichtenfluss in den Griff.“

Alle drei sehen dich an. Was ist dein erster Befehl?`,
 ch:['Selin hat recht. Ruft ihn sofort an und haltet die Leitung offen.','Zuerst den Umkreis abriegeln und die Scharfschützen in Stellung bringen. Der Anruf kann eine Stunde warten.','Zuerst eine Nachrichtensperre. Dann rufen wir an.']},
k3:{b:(st,fl)=>`${fl.bekletti
 ?`Eine Stunde und vierzehn Minuten später geht die Leitung auf. Die Stimme ist kalt:

– Sie haben mich eine Stunde warten lassen. Noch eine Stunde, und ich hätte eines der Schütze geöffnet. Merken Sie sich das.`
 :'Beim zweiten Klingeln geht die Leitung auf.'}

– Mein Name ist Arman Kesk. Ich habe neun Jahre als Techniker an diesem Damm gearbeitet. Ich bin kein Terrorist. Aber ich gehe heute Nacht nicht mit leeren Händen hier raus.

Seine Stimme ist ruhig; er wählt seine Worte sorgfältig. Selin schreibt ein einziges Wort auf einen Zettel und zeigt es dir: *Gebildet.*

– Ich habe drei Forderungen. Erstens wird mein Bruder Serdar Kesk freigelassen. Zweitens spreche ich live im Fernsehen. Drittens…

Er macht eine Pause.

– Die dritte sage ich Ihnen später. Erst will ich sehen, dass Sie mich ernst nehmen.

Was antwortest du?`,
 ch:['„Ich höre. Beweisen Sie mir zuerst, dass es den Geiseln gut geht.“','„Ich verhandle nicht mit vorgehaltener Waffe. Lassen Sie die Geiseln frei, dann reden wir.“','„Sagen Sie mir Ihre dritte Forderung jetzt. Ich meine es ernst.“']},
k4:{b:(st,fl)=>`${fl.kanit
 ?`Arman reicht das Telefon jemandem. Eine zittrige, alte Stimme:

– Hier ist Halil Turan, Schichtleiter. Es geht uns allen gut. Sie haben niemandem etwas getan.

Dann senkt er die Stimme:

– Lassen Sie die dritte Galerie überprüfen…

Die Leitung ist tot.`
 :fl.ucuncu
 ?`Arman schweigt lange.

– Die dritte ist ein Bericht, sagt er schließlich. Der Abnahmebericht des Damms. Der echte, nicht der, den man Ihnen gezeigt hat.

Die Leitung ist tot.`
 :`Arman lacht kurz auf.

– Kommandant, in diesem Gebäude sind vierzehn Menschen. Und neun Kilometer weiter unten zweiundzwanzigtausend. Wenn Sie nicht verhandeln, warum haben Sie dann angerufen?

Die Leitung ist tot.`}

04:50 Uhr. Der Offizier vom Dienst erscheint in der Tür.

– Ein alter Mann ist am Telefon. Nuri Bilgin. Er sagt, er sei einer der Ingenieure gewesen, die den Damm gebaut haben. „Ich kenne Arman, ich muss mit dem Kommandanten sprechen“, sagt er. Er hat heute Nacht elfmal angerufen.

Haldun schüttelt den Kopf.

– Heute Nacht ruft jeder Wichtigtuer an. Verschwenden wir keine Zeit.`,
 ch:['Stellt Nuri Bilgin durch. Ich gebe ihm fünf Minuten.','Ein Offizier soll zuhören. Wenn es wichtig ist, gibt er es weiter.']},
k5:{b:(st,fl)=>`${fl.nuri?`Nuri Bilgins Stimme ist müde, aber klar:

– Arman war mein Lehrling. Der Junge würde niemanden töten. Aber er hat vor etwas Angst, und vielleicht zu Recht. Ich muss mit Ihnen von Angesicht zu Angesicht sprechen.

Du schickst einen Wagen, um ihn zu holen.

`:''}05:40 Uhr. Selin legt ihr Tablet auf den Tisch. Ein vierzigsekündiges Video, mit dem Handy einer Geisel gefilmt, ist im Netz aufgetaucht. Die Ingenieurpraktikantin Ece Yalın weint und ruft nach ihrer Mutter. Zwei Millionen Aufrufe in einer Stunde.

${fl.yasak?'Die Nachrichtensperre hat die Verbreitung des Videos nicht verhindert. Im Gegenteil, sie hat die Frage befeuert: „Was verheimlichen sie?“':'Die Nachrichtensender zeigen es bereits in ihren Laufbändern.'}

Haldun steht auf.

– Der Minister erwartet eine Erklärung. Sofort.

Was wirst du sagen?`,
 ch:['„Die Lage ist vollständig unter unserer Kontrolle.“','„Wir arbeiten für die Sicherheit der Geiseln. Details kann ich derzeit nicht nennen.“','Keine Erklärung abgeben. Schweigen.']},
k6:{b:(st,fl)=>`06:05 Uhr. Der Tag bricht an. Oyas Team hat die Nacht damit verbracht, das Gebäude zu kartieren.

– Wir haben den Wachwechsel beobachtet. Um 06:30 Uhr gehen zwei der fünf drinnen schlafen. Wenn wir gleichzeitig durch die Vordertür und über das Dach reingehen, können wir die meisten der vierzehn Geiseln herausholen.

*Die meisten.* Das Wort hängt über dem Tisch.

Selin geht sofort dazwischen:

– Arman will seinen Bruder, nicht sterben. Wir haben noch nicht einmal richtig mit ihm geredet.

Haldun sieht auf die Uhr. Er sagt nichts, aber es ist klar, was er denkt.

Die Entscheidung liegt bei dir.`,
 ch:['Kein Zugriff. Wir reden weiter.','Den Zugriff im Morgengrauen genehmigen.']},
k7a:{b:`Das Team ist in sechs Minuten drin. Es holt sechs Geiseln aus dem Gebäude, darunter Ece Yalın, die junge Frau aus dem Video.

Aber Arman und seine Männer ziehen sich mit den übrigen acht Geiseln in die Turbinenhalle zurück. Sie schweißen die Stahltür von innen zu. Niemand ist gestorben; trotzdem ist es jetzt viel schwerer hineinzukommen.

Zwanzig Minuten später ruft Arman an. Seine Stimme zittert, aber nicht vor Angst. Vor Wut.

– Sie haben mich belogen. Versuchen Sie das noch einmal, und ich öffne die Schütze. Alle.`,ch:['Weiter.']},
k7b:{b:`Die Dachtür ist mit einer Sprengfalle gesichert. Die Detonation schleudert den Vordermann des Teams zurück. Von drinnen wird das Feuer eröffnet; der Techniker Mehmet Er wird am Bein getroffen. Oya muss das Team zurückziehen.

Dann Armans Stimme:

– Das haben Sie sich selbst zuzuschreiben.

Das erste Hochwasserschütz öffnet sich einen halben Meter. Neun Kilometer weiter unten beginnen die Sirenen von Yeşilova zu heulen. Zehn Minuten später schließt sich das Schütz wieder. Das war eine Warnung.`,ch:['Weiter.']},
m1:{b:(st,fl)=>`08:00 Uhr. ${fl.ihanet
 ?`Arman geht seit zwei Stunden nicht ans Telefon. Als er endlich abnimmt, stellt er eine einzige Bedingung:

– Ab jetzt rede ich nur noch mit der Polizistin. Nicht mit Ihnen.`
 :'Diesmal ruft Arman selbst an. In seiner Stimme hört man die schlaflose Nacht.'}

– Sie haben zwölf Stunden für meinen Bruder. Wenn Serdar um 20:00 Uhr nicht vor diesem Damm steht, öffne ich das erste Schütz ganz.

Selin legt ihren Stift hin.

– Sie werden Essen und Medikamente verlangen, sagt sie. Drinnen geht ihnen das Wasser aus. Wir könnten im Gegenzug ein paar Geiseln verlangen.

Haldun widerspricht:

– Kein Gefangenenaustausch. So etwas macht der Staat nicht.

Arman ist noch in der Leitung und wartet auf eine Antwort.`,
 ch:['Für Essen und Medikamente zwei Geiseln verlangen.','Ihm anbieten, mit Serdar zu telefonieren.','Mit dem Vorwand eines „technischen Problems“ Zeit gewinnen.']},
m2:{b:(st,fl)=>`${fl.takas?`09:40 Uhr. Die Essenskisten werden vor der Tür abgestellt. Zehn Minuten später kommen zwei Menschen mit erhobenen Händen heraus: ${fl.alti?'der alte Nachtwächter Rıza und der Techniker Yusuf':'die Praktikantin Ece Yalın und der alte Nachtwächter Rıza'}. Beide sind unverletzt.

`:fl.takasRed?`09:40 Uhr. Arman lehnt das Angebot ab. „Niemand kommt raus. Nehmen Sie Ihr Essen wieder mit und essen Sie es selbst.“

`:fl.kardes?`09:40 Uhr. Du lässt Serdar aus dem Gefängnis durchstellen. Die beiden Brüder sprechen drei Minuten. Selbst nach dem Auflegen klingt Armans Stimme sanfter.

`:''}${fl.nuri
 ?`10:30 Uhr. Nuri Bilgin trifft in der Krisenzentrale ein. Er ist einundsiebzig und trägt ein vergilbtes Notizbuch bei sich.

– Wir haben diesen Damm vor dreißig Jahren gebaut, sagt er. Bauunternehmer war Akbel Bau. Der Beton der dritten Galerie ist bei den Labortests durchgefallen. Ich habe Einspruch erhoben, und man hat mich vom Projekt abgezogen. Arman war damals mein Lehrling. Er weiß alles.

Er schlägt das Notizbuch auf: Messwerte, Daten, Unterschriften.

– Arman benutzt seinen Bruder als Vorwand, sagt er. Was er wirklich will, ist dieser Bericht. Der Abnahmebericht des Damms ist gefälscht.`
 :`10:30 Uhr. Oyas Drohne tastet die Luftseite des Damms ab. In den Aufnahmen fällt dir etwas auf: Mitten im Sommer sickert ein dünnes, aber stetiges Rinnsal aus dem Auslass der dritten Galerie.

– Wahrscheinlich nichts, sagt Oya. Alte Dämme schwitzen.`}`,
 ch:['Unauffällig eine Bauwerksprüfung des Damms beginnen.','Die Bausubstanz des Damms hat jetzt keine Priorität. Konzentration auf die Geiseln.']},
m3:{b:(st,fl)=>`${fl.kontrol?`11:20 Uhr. Vom Wartungsteam des Damms kommt ein kurzer Bericht: Die Messinstrumente in der dritten Galerie wurden vor zwei Jahren als „defekt“ abgeschaltet. Seitdem hat niemand mehr Werte abgelesen.

`:''}12:00 Uhr. Haldun legt auf und kommt an den Tisch.

– Der Minister will das vor den Abendnachrichten erledigt haben. Generalin Demirel ist bereit. Wenn Sie einen Zugriff am Mittag genehmigen, stehen wir hinter Ihnen.

Halduns Telefon vibriert erneut. Du erhaschst einen Blick auf das Display: *Akbel Bau · Vorstand.*

${fl.kontrol||fl.nuri?'Haldun steckt das Telefon ein, ohne abzunehmen. Er bemerkt, dass du ihn beobachtest.':'Haldun lehnt den Anruf ab.'}`,
 ch:['Ich entscheide nicht nach einem politischen Zeitplan. Kein Zugriff.','Ich will die Dammakten von Akbel Bau auf meinem Tisch. Sofort.','Bereitet einen Zugriff am Mittag vor. Aber die letzte Entscheidung treffe ich.'],
 why:[null,'Du hast keinen Verdacht gegen den Damm.']},
m4:{b:(st,fl)=>`14:00 Uhr. ${fl.ogle?`Während Oyas Team in Stellung geht, ruft Arman an. Als könne er alles sehen:

– Ich sehe Ihre Männer auf dem Dach. Ziehen Sie sie ab, oder das Gespräch ist vorbei.

Oya zieht das Team ab. Der Mittagszugriff ist abgeblasen.

`:''}Arman wiederholt seine zweite Forderung: Live-Fernsehen. Drei Minuten. Ungeschnitten.

Haldun bleibt hart:

– Wir können einem Bewaffneten keine Bühne geben.

Selin sieht das anders:

– Wenn er reden darf, beruhigt er sich. Wenn nicht, explodiert er.

Oya schlägt eine technische Lösung vor:

– Wir könnten eine Scheinübertragung aufbauen. Die Kamera nimmt auf, aber nichts geht auf Sendung.`,
 ch:['Eine kontrollierte Übertragung mit zehn Sekunden Verzögerung erlauben.','Eine Scheinübertragung aufbauen.','Die Übertragung verweigern.']},
m4b:{b:(st,fl)=>fl.yakalandi
 ?`Arman prüft die Übertragung mit einem kleinen Radio drinnen. Als er seine eigene Stimme auf keinem Sender hört, zerschmettert er die Kamera auf dem Boden.

Durch die Leitung kommt ein einzelner Schuss. Einer der Techniker ist an der Schulter getroffen.

– Lügen Sie mich noch einmal an, sagt Arman, und die nächste Kugel geht nicht daneben.`
 :`${fl.sahte?'Arman spricht in die Kamera. Seine Worte erscheinen nur auf dem Bildschirm in der Krisenzentrale.':'Armans Gesicht erscheint auf den Bildschirmen. Erschöpft, unrasiert, er blickt direkt in die Kamera.'}

– Mein Name ist Arman Kesk. Ich komme aus dem Dorf Taşlıca. Mein Dorf liegt unter dem Stausee dieses Damms. Was ich heute Nacht getan habe, ist ein Verbrechen, das weiß ich. Aber in der dritten Galerie ist ein Riss. Dieser Damm wurde vor dreißig Jahren mit minderwertigem Beton gebaut, und die, die es wussten, haben geschwiegen. Ich spreche zu allen in Yeşilova: Fordert eine Evakuierung. Wenn diese Sendung zu Ende ist, macht mit mir, was ihr wollt.

${fl.sahte?'Der Bildschirm wird schwarz. Niemand hat es gehört. Nur du und die Leute an diesem Tisch.':'Als die Bildschirme dunkel werden, spricht niemand am Tisch. Halduns Gesicht ist kreideweiß.'}`,ch:['Weiter.']},
m5:{b:(st,fl)=>`17:30 Uhr. Selin blickt von der Leitung auf.

– Halil Turan hat möglicherweise einen Herzinfarkt. Er ist zweiundsechzig, und seine Medikamente liegen zu Hause. Arman verlangt einen Arzt.

Oya sieht sofort eine Chance:

– Ich habe einen Kampfsanitäter. Er geht als Arzt verkleidet hinein, sieht sich drinnen um und platziert vielleicht eine Wanze.

Selin widerspricht:

– Wenn er auffliegt, ist alles vorbei. ${fl.ihanet?'Er vertraut uns schon jetzt nicht. Dann nie wieder.':'Dann vertraut er uns nie wieder.'}`,
 ch:['Einen echten Arzt schicken.','Den Sanitäter als Arzt verkleidet schicken.','Kein Arzt. Zuerst werden zwei Geiseln freigelassen.']},
r1:{b:(st,fl)=>`${fl.doktor?'Der Arzt bleibt eine Stunde drinnen und stabilisiert Halil. Beim Herauskommen sagt er dir nur eines: „Die Leute da drinnen haben mehr Angst vor dem Mann neben Arman als vor Ihnen.“':fl.icerde?'Der Sanitäter kommt eine Stunde später zurück. Drinnen sind vier Bewaffnete, nicht fünf. Der Sprengstoff ist echt, aber nur mit den Schützmotoren verbunden. Einer von ihnen, ein junger Kerl namens Bora, ist den Tränen nahe. Die Wanze ist platziert.':fl.doktorYak?'Der Sanitäter fliegt bei der Durchsuchung an der Tür auf. Arman verprügelt ihn und schickt ihn zurück. Halils Medikamente kommen erst eine Stunde später hinein.':'Arman lässt niemanden frei. Auch über Halils Zustand sagt er nichts.'}

22:10 Uhr. Der Pegelalarm des Stausees schlägt an. Der Wasserstand ist in einer Stunde um zwölf Zentimeter gefallen. Der Fluss durch Yeşilova nähert sich der Hochwassermarke.

Oya: – Er hat die Schütze geöffnet. Eine Warnung.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin beugt sich zum Bildschirm. Seine Hände zittern. – Nein, sagt er. Die Schütze sind geschlossen, sehen Sie sich die Motorprotokolle an. Dieses Wasser kommt aus der dritten Galerie. Der Riss öffnet sich.'
 :'Aber die Protokolle der Schützmotoren zeigen keinerlei Bewegung. Das Wasser kommt von woanders her, und niemand weiß, woher.'}`,
 ch:['Yeşilova heute Nacht unauffällig evakuieren.','Eine Evakuierung würde Panik auslösen. Abwarten und beobachten.','Arman direkt nach dem Riss fragen.'],
 why:[null,null,'Du weißt nichts von einem Riss.']},
r2:{b:(st,fl)=>fl.sor
 ?`– Sie wissen es also, sagt Arman. Zum ersten Mal bricht seine Stimme.

– Vor dreißig Jahren hat Meister Nuri Einspruch erhoben, und man hat ihn gefeuert. Ich bewahre das Original dieses Berichts seit zehn Jahren auf. Ich habe es an den Gouverneur geschickt, ans Ministerium, an die Zeitungen. Niemand hat auch nur den Umschlag geöffnet.

Er atmet tief durch.

– Sie müssen meinen Bruder nicht freilassen, Kommandant. Machen Sie den Bericht öffentlich. Evakuieren Sie Yeşilova. Ich ergebe mich. Aber die Männer bei mir… Cevdet will etwas anderes. Ich habe ihn nicht mitgebracht. Er hat mich gefunden.`
 :fl.ihanet
 ?`Arman nimmt ab, sagt aber nichts. Im Hintergrund hört man einen Mann schreien:

– Die spielen auf Zeit! Mach das Schütz auf!

Arman brüllt zurück: „Cevdet, halt die Klappe!“ Dann ist die Leitung tot. Ein paar Minuten später geht sie wieder auf.

– Es ist nach 20:00 Uhr, sagt Arman. Ich habe das Schütz nicht geöffnet. Fragen Sie sich nicht, warum?`
 :`Arman klingt müde.

– Es ist nach 20:00 Uhr, sagt er. Ich habe das Schütz nicht geöffnet. Fragen Sie sich nicht, warum? Ich bitte Sie um eines: Lesen Sie den Abnahmebericht dieses Damms. Den echten. Dann rufen Sie mich an.`,
 ch:['„Ich verspreche Ihnen: Der Bericht wird veröffentlicht.“','„Lassen Sie zuerst die Geiseln frei. Dann reden wir über alles.“','Ihn hinhalten. Oya Zeit verschaffen.'],
 why:['Du weißt nicht, welchen Bericht er meint.']},
r3:{b:(st,fl)=>`02:00 Uhr. In der Krisenzentrale sind nur noch du und Haldun. Haldun schließt die Tür.

– Ich will offen sein. Der Eigentümer von Akbel Bau ist der Schwager des Ministers. ${fl.dosya?'Die Akten, die Sie angefordert haben, sind da. Der Laborbericht zur dritten Galerie fehlt. Jemand hat diese Seiten entfernt.':'Wenn dieser Bericht echt ist und herauskommt, stürzt er nicht nur eine Firma. Er stürzt die Regierung.'}

Er schweigt einen Moment.

– Retten Sie die Geiseln, verhaften Sie den Mann. Über den Bericht reden wir später, in Ruhe. Ich sage das für Ihre Karriere. Wirklich.`,
 ch:['„Nein. Der Bericht kommt ins Krisenprotokoll.“','„Gut. Der Bericht wird an diesem Tisch nicht besprochen.“','Nichts sagen. Am Morgen den Bericht einem Journalisten zuspielen.'],
 why:[null,null,'Du hast nichts, was du zuspielen könntest.']},
r4:{b:(st,fl)=>`${fl.sizinti?'04:30 Uhr. Du wählst die Nummer eines Journalisten. Das Gespräch dauert vier Minuten. Die Schlagzeile der Morgenausgabe steht: „Verdacht auf gefälschten Bericht in Yıldızdere“.\n\n':''}05:00 Uhr. Ein Flüstern kommt ${fl.icerde?'über die Wanze':'über Selins Leitung'}. Bora. Neunzehn, Armans Neffe. Unter dem Vorwand, zur Toilette zu gehen, hat er ein Telefon gefunden.

– Frau Kommissarin, sagt er zu Selin. Ich wollte das nie. Cevdet hat den Zünder für den Sprengstoff. Nicht mal Arman darf ihn anfassen. Ich will raus.

Selin sieht dich an. Bora herauszuholen könnte das ganze Gleichgewicht drinnen verändern. Oder Cevdet alles begreifen lassen.`,
 ch:['Bora helfen, sich zu ergeben.','Bora bleibt drinnen. Er wird unsere Augen und Ohren.']},
r5:{b:(st,fl)=>`${fl.bora?'Bora kommt mit erhobenen Händen durch die Diensttür des Damms. Oyas Team drückt ihn zu Boden und zieht ihn in Deckung. Seine ersten Worte: „Cevdet hat den Zünder. Rot. Linke Tasche.“':fl.boraYak?'Bevor Bora die Tür erreicht, erwischt ihn Cevdet. Von drinnen hört man Geschrei. Sie haben Bora zu den Geiseln gefesselt. Cevdet verdächtigt jetzt jeden, sogar Arman.':'Bora ist drinnen geblieben. Alle zwei Stunden schickt er kurze Nachrichten: „Sie schlafen.“ „Cevdet schläft nicht.“'}

12:00 Uhr. Der Wetterdienst gibt eine Warnung heraus: Heute Abend ab 20:00 Uhr trifft ein schweres Unwetter die Region. Hubschrauber werden nicht fliegen können.

${fl.tahliye?'Die Evakuierung von Yeşilova ist zu achtzig Prozent abgeschlossen. Die Menschen haben in den Schulen auf den Hügeln Schutz gesucht.':'In Yeşilova geht das Leben weiter wie immer. Der Markt ist offen, in den Schulen ist Unterricht.'}

Das Ministerium ist bereit, Serdar Kesk aus dem Gefängnis zum Einsatzort zu bringen. Man wartet auf deine Zustimmung.`,
 ch:['Holt Serdar.','Serdar bleibt im Gefängnis.']},
s1:{b:(st,fl)=>`${fl.serdar
 ?`15:00 Uhr. Serdar Kesk wird in die Krisenzentrale gebracht. In Handschellen, mager; er sieht seinem Bruder ähnlich.

– Mein Bruder würde auf niemanden schießen, sagt er. Aber Cevdet schon. Ich habe ihn im Gefängnis kennengelernt. Meinem Bruder geht es um den Damm, Cevdet ums Geld. Jemand hat ihn dafür bezahlt. Ich weiß nicht, wer. Mein Bruder auch nicht.`
 :`15:00 Uhr. Oya legt eine Geheimdienstakte auf den Tisch.

– Cevdet Arı. Zwei bewaffnete Raubüberfälle, ein versuchter Mord. Hat Arman letztes Jahr kennengelernt. Letzte Woche ist eine große Summe auf seinem Konto eingegangen. Herkunft unbekannt.`}

${(fl.dosya||fl.kayit||fl.sizinti)&&bildi(fl)?'Die Abteilung für Finanzdelikte verfolgt das Geld. Die Spur endet bei einer Briefkastenfirma. Letztes Jahr hatte die Firma einen einzigen Kunden: Akbel Bau.\n\nNuri Bilgin sinkt in seinen Stuhl. – Sie wollten den Damm sprengen, sagt er. Arman sollte die Schuld bekommen. Und der gefälschte Bericht wäre für immer auf dem Grund des Stausees geblieben.\n\n':''}Oya fährt fort:

– Wir müssen Cevdet von Arman trennen. Wenn Arman allein ist, ergibt er sich. Wenn Cevdet bleibt, stirbt jemand.`,
 ch:['Selin auf ein letztes Gespräch mit Arman vorbereiten.','Oya einen Zugriffsplan ausarbeiten lassen, um Cevdet zu isolieren.','Arman die Geldspur zeigen. Er soll erfahren, für wen er wirklich arbeitet.'],
 why:[null,null,'Du hast keine Beweise, um dem Geld zu folgen.']},
s2:{b:(st,fl)=>`19:00 Uhr. Die ersten Böen des Unwetters rütteln an den Fenstern der Krisenzentrale. In einer Stunde bleiben die Hubschrauber am Boden.

${fl.para
 ?`Du liest Arman die Überweisung vor, Zeile für Zeile. Ein langes Schweigen.

– Cevdet… hat mich benutzt, sagt er schließlich. Er wollte den Damm sprengen, und ich sollte die Schuld bekommen. Und alles, was ich den Leuten seit Jahren zu sagen versuche, wäre mit dem Wasser weggespült worden.`
 :`Arman ruft an. Er klingt erschöpft.

– Kommandant, uns beiden läuft die Zeit davon. Sagen Sie Ihr letztes Wort.`}

Was ist dein letztes Angebot?`,
 ch:['„Der Bericht wird veröffentlicht. Sie lassen die Geiseln frei und ergeben sich.“','Serdar ans Telefon holen. Er soll seinen Bruder überzeugen, sich zu ergeben.','Das Reden ist vorbei. Zugriff, bevor das Unwetter kommt.'],
 why:['Du hast nicht die Macht, den Bericht zu veröffentlichen, oder du hast Arman nie dein Wort gegeben.','Serdar ist nicht hier.']},
s3t:{b:(st,fl)=>`20:40 Uhr. Das Unwetter bricht über den Damm herein. Arman willigt ein.

– Ich bringe die Geiseln zur Tür, sagt er.

Dann Geräusche eines Handgemenges in der Leitung. Cevdets Stimme:

– Keiner geht raus! Ich habe den Zünder!

${fl.bora?'Genau wie Bora gesagt hat: roter Zünder, linke Tasche. ':''}Oyas Scharfschütze ist in Stellung, aber der Regen verdirbt ihm die Sicht. Selin zieht ihre Jacke aus:

– Ich gehe unbewaffnet rein. Wenn Arman auf meiner Seite ist, kann ich Cevdet zur Vernunft bringen.`,
 ch:['Selin unbewaffnet hineingehen lassen.','Dem Scharfschützen die Freigabe für Cevdet erteilen.']},
s3b:{b:(st,fl)=>`19:50 Uhr. Das Unwetter ist noch zehn Minuten entfernt. Oyas Team wartet im Schatten des Damms.

– Drinnen sind ${fl.bora?'drei':'vier'} Bewaffnete, sagt Oya. ${fl.bora||fl.icerde?'Wir wissen, wer den Zünder hat. ':'Wir wissen nicht, wer den Zünder hat. '}${fl.alti?'Die Tür zur Turbinenhalle ist verschweißt; hineinzukommen wird schwer. ':''}Wo gehen wir rein?`,
 ch:['Durch die alte Wartungsgalerie, die Meister Nuri kennt.','Gleichzeitig über das Dach und durch die Vordertür.','Erst den Strom abschalten, dann im Dunkeln rein.'],
 why:['Niemand kennt die alten Pläne des Damms.']},
f1:{b:(st,fl)=>`${{
 teslim:'Selin kommt mit Arman am Arm aus dem Sturm. Hinter ihnen kommen die Geiseln im Gänsemarsch heraus. Arman hat Cevdet selbst überwältigt; der rote Zünder liegt im Schlamm. Niemand ist gestorben.',
 atis:'Ein einziger Schuss. Cevdet geht zu Boden, verwundet, aber lebendig. Arman tritt mit erhobenen Händen aus der Tür. Die Geiseln folgen ihm. Niemand ist gestorben.',
 baskin:'Als das Team hineinstürmt, greift Cevdet nach dem Zünder. Der erste Operator ist schneller. Arman legt seine Waffe nieder und sinkt auf die Knie. Alle Geiseln werden gerettet; zwei Operatoren sind leicht verletzt.',
 kayip:'Etwas geht schief. Cevdet drückt den Zünder; einer der Schützmotoren explodiert. Schüsse im Dunkeln. Als am Morgen gezählt wird, sind zwei der Geiseln tot, Halil Turan und der Techniker Mehmet Er. Cevdet ist tot. Arman wird verwundet festgenommen.'
}[fl.sonuc]}

23:30 Uhr. Das Unwetter ist auf seinem Höhepunkt. Aber die eigentliche Gefahr ist nicht vorbei.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin schreit über Funk: – Die dritte Galerie! Das Leck hat sich verdoppelt! Wenn wir den Stausee nicht sofort absenken, hält der Damm nicht!'
 :'Gegen Mitternacht dringt ein tiefes, langes Stöhnen aus dem Dammkörper. Die diensthabenden Ingenieure wissen nicht, was es ist.'}

${fl.tahliye?'Yeşilova ist leer. Alle sind in den Schulen auf den Hügeln.':'In Yeşilova schlafen zweiundzwanzigtausend Menschen.'}`,
 ch:['Die Grundablässe öffnen. Den Stausee kontrolliert absenken.',(st,fl)=>fl.tahliye?'Die Evakuierung abschließen. Niemand bleibt in der Stadt.':'Die Stadt warnen. Die Sirenen auslösen.','Das ist kein Bauwerksproblem, das ist das Unwetter. Abwarten.'],
 why:['Niemand kennt den Zustand des Damms.']},
f2:{b:(st,fl)=>`${{
 yok:'Nach Meister Nuris Anweisungen werden die Grundablässe geöffnet. Das Wasser fließt in einem kontrollierten Strom ins Tal. Bis zum frühen Morgen ist der Stausee um zwei Meter gesunken. Der Riss wächst nicht weiter. Der Damm hält.',
 bos:'Vor dem Morgengrauen stürzt die Wand der dritten Galerie ein. Die Flanke des Damms reißt auf; das Wasser stürzt ins Tal. Die unteren Viertel von Yeşilova werden überflutet. Aber die Stadt war leer. Niemand ist gestorben.',
 hafif:'Um Mitternacht heulen die Sirenen. Die Menschen rennen im Regen, im Schlafanzug, auf die Hügel. Vor dem Morgengrauen stürzt die Galeriewand ein; das Wasser erreicht die unteren Viertel. Die meisten werden gerettet. Aber nicht alle.',
 agir:'Vor dem Morgengrauen stürzt die Wand der dritten Galerie ein. Die Flanke des Damms reißt auf. Das Wasser stürzt auf das schlafende Yeşilova hinab.'
}[sel(fl)]}

09:00 Uhr. Der Presseraum ist überfüllt. Haldun steht neben dir, eine für dich vorbereitete Erklärung in der Hand. Die Überschrift ist fett gedruckt: *Terroranschlag erfolgreich vereitelt.*

Die Kameras richten sich auf dich.`,
 ch:['Die Wahrheit sagen: der Bericht, Akbel Bau, alles.','Halduns Erklärung vorlesen.'],
 why:['Du kennst keine Wahrheit, die du sagen könntest.']},
end_gercek:{b:(st,fl)=>`Du legst die Erklärung auf den Tisch und schlägst deine eigene Akte auf.

Die Laborergebnisse der dritten Galerie. Nuri Bilgins dreißig Jahre alter schriftlicher Einspruch. Die Unterschriften von Akbel Bau.${fl.para?' Das Geld, das auf Cevdet Arıs Konto eingegangen ist, und die Briefkastenfirma, von der es kam.':''}

Haldun verlässt den Raum. Noch vor dem Abend gibt der Minister seinen Rücktritt bekannt.

${fl.savak?'Der Yıldızdere-Damm wird zur Reparatur entleert. Der Bericht der Ingenieure ist kurz: Der Damm hätte innerhalb von Wochen brechen können. In Yeşilova begreift niemand so recht, wie knapp es war; du schon.':'Die eingestürzte Flanke des Damms ist monatelang in den Nachrichten. Aber Yeşilova hat kein einziges Leben verloren. Ein Jahr später wird der Grundstein für einen neuen Damm gelegt; diesmal sind alle Berichte öffentlich.'}

Arman Kesk wird der Prozess gemacht. Er wird seine Strafe für die Geiselnahme verbüßen; er akzeptiert das selbst. Am letzten Verhandlungstag sitzt Meister Nuri in der ersten Reihe. Er nickt Arman zu.

Sechs Monate später kommt ein Brief. Er ist von der Ingenieurpraktikantin Ece Yalın: „Ich bin im neuen Prüfteam. Jede Betoncharge prüfe ich selbst.“

Manche Krisen sind der einzige Weg zur Wahrheit.`},
end_sessiz:{b:(st,fl)=>`„Der Terroranschlag wurde durch die Entschlossenheit unserer Sicherheitskräfte vereitelt.“

Blitzlichter. Am nächsten Morgen ist dein Foto auf der Titelseite jeder Zeitung.

Alle Geiseln sind nach Hause gekommen. Arman Kesk wird als „Terroristenführer“ vor Gericht gestellt. Als er vor Gericht den Bericht erwähnen will, unterbricht ihn der Richter.

${fl.savak?'Der Damm wird unauffällig wegen „routinemäßiger Wartung“ entleert. Akbel Bau erhält den Reparaturauftrag.':'Der Dammbruch wird als „durch das Unwetter verursachte Naturkatastrophe“ dargestellt. Akbel Bau erhält den Auftrag für den Wiederaufbau.'}${fl.sizinti?'\n\nDie Geschichte, die du durchgestochen hast, bleibt eine Woche in den Nachrichten. Dann nennt das Ministerium sie eine „haltlose Behauptung“, und die Sache ist erledigt.':''}

Eines Nachts bekommst du eine kurze Nachricht von Nuri Bilgin: „Sie haben auch geschwiegen.“

Deinen Orden bewahrst du in einer Schublade auf.

Du hast die Geiseln gerettet. Die Wahrheit konntest du nicht retten.`},
end_baskin:{b:(st,fl)=>`„Der Terroranschlag wurde durch die Entschlossenheit unserer Sicherheitskräfte vereitelt.“

Die Helmkamera-Aufnahmen von Oyas Team laufen auf allen Bildschirmen: ein makelloser Einsatz im Sturm, im Dunkeln. Die Nachrichtensender nennen ihn „den Einsatz des Jahres“.

Alle Geiseln wurden gerettet. Cevdet Arı und Arman Kesk sind in Haft.

Aber im Verhör stellt Arman nur eine Frage, jedes Mal dieselbe:

– Haben Sie den Bericht gelesen?

${fl.savak?'Der Damm wird unauffällig wegen „routinemäßiger Wartung“ entleert. Akbel Bau erhält den Reparaturauftrag.':'Der Dammbruch wird als „durch das Unwetter verursachte Naturkatastrophe“ dargestellt. Niemand stellt Fragen.'}

Oya und ihr Team werden ausgezeichnet. Am Tag der Zeremonie kommt Oya zu dir und fragt leise: „War dieser Mann im Recht?“

Du antwortest nicht.

Du hast einen Einsatz gewonnen. Die eigentliche Schlacht hat nie begonnen.`},
end_bedel:{b:(st,fl)=>`${fl.acik?'Im Presseraum sagst du die Wahrheit: der Bericht, Akbel Bau, alles. Aber niemand hört zu. Alle fragen nach zwei Namen.':'Du liest Halduns Erklärung vor. Aber niemand hört zu. Alle fragen nach zwei Namen.'}

Halil Turan. Mehmet Er.

Du gehst zu Halils Beerdigung. Er hat einunddreißig Jahre an diesem Damm gearbeitet; vier Monate vor der Rente. Mehmet war sechsundzwanzig. In zwei Monaten wollte er heiraten. Seine Verlobte sieht dich nicht einmal an.

Der Untersuchungsausschuss prüft deine Entscheidungen eine nach der anderen. Keine war rechtswidrig. Keine war gut genug.

Arman wurde verwundet festgenommen. Aus seinem Krankenhausbett sieht er dich an und sagt: „Das wollte ich nie.“ Du glaubst ihm. Es ändert nichts.

${fl.acik?'Der Bericht kommt am Ende ans Licht; Akbel Bau steht vor Gericht. Aber in den Nachrichten sieht man immer diese zwei Fotos.':'Der Bericht kommt nie ans Licht.'}

Jede Entscheidung, die in einem Krisenstab fällt, berührt das Leben eines Menschen.`},
end_sel:{b:(st,fl)=>`Als das Morgenlicht das Tal erreicht, ist die untere Hälfte von Yeşilova verschwunden. Dächer, Minarette, der Basketballkorb auf dem Schulhof ragen aus einem See aus Schlamm.

${sel(fl)==='hafif'?'Die Sirenen in der Nacht haben Tausende gerettet. Aber elf Menschen sind nie zurückgekommen.':'Niemand wurde gewarnt. Die Zahl der Toten steigt stündlich.'}

${fl.sonuc==='kayip'?'Die Namen der beiden im Kontrollgebäude gestorbenen Geiseln verschwinden fast in dieser langen Liste.':'Alle Geiseln wurden gerettet. Aber darüber spricht niemand mehr.'}

${fl.yayin?'Arman Kesks Warnung aus der Live-Sendung läuft tagelang im Fernsehen: „In der dritten Galerie ist ein Riss.“':'Nuri Bilgins vergilbtes Notizbuch landet bei einer Zeitung. Sein dreißig Jahre alter schriftlicher Einspruch macht Schlagzeilen.'}

Vor dem Untersuchungsausschuss wird dir eine einzige Frage gestellt:

– Haben Sie es nicht gewusst?

Die Zeichen waren da. Sie zu lesen, war deine Aufgabe.`},
end_azil:{b:(st,fl)=>`${st.kamuoyu<=0
 ?'Dein Gesicht ist auf allen Bildschirmen. Die Schlagzeilen lauten „Krisenstab bricht zusammen“ und „Der Staat sieht tatenlos zu“. Der Minister ruft nicht einmal an; aus den Nachrichten erfährst du, dass du abgesetzt bist.'
 :'Niemand am Tisch sieht dich mehr an. Oya stellt deine Befehle infrage; Haldun schickt seine Berichte direkt an den Minister. Vor dem Morgengrauen kommt ein Befehl: Die Leitung des Krisenstabs geht an einen anderen General.'}

Den Rest der Krise verfolgst du im Fernseher eines Hotelzimmers. Das Ende schreibt jemand anderes.

In einer Krise ist Vertrauen die wertvollste Munition. Deine ist aufgebraucht.

Die Geschichte hätte nicht hier enden müssen. Hättest du den Tisch und die Öffentlichkeit gleichzeitig halten können?`},
end_kayip:{b:`Am anderen Ende der Leitung spricht Arman nicht mehr. Stattdessen hörst du einen der Männer bei ihm, eine harte, kalte Stimme:

– Ihre Zeit ist um.

Zwei Schüsse.

Zehn Minuten später ist Oyas Team drinnen. Der Besitzer dieser kalten Stimme, Cevdet Arı, versucht, sich den Weg freizuschießen, und wird getötet. Arman sitzt zwischen den Geiseln, den Kopf in den Händen.

Am Morgen wird gezählt. Schichtleiter Halil Turan und der Techniker Mehmet Er sind tot.

Als das Vertrauen der Geiseln einmal zerbrochen war, blieb keine Zeit mehr, es zurückzugewinnen.

Die Geschichte hätte nicht hier enden müssen. Bei welcher Entscheidung hast du die Geiseln verloren?`}
 }};
})();
