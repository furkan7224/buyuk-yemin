/* =====================================================================
   HİKÂYE · KÖSTEBEK · Almanca sürüm
   Kural ve kayıt yapısı Türkçe dosyayla birebir aynıdır (newRun oradan gelir).
   ===================================================================== */
(function(){
const KB=window.__KB;if(!KB)return;
const DAYS=10,AP=3,LEAK=[3,6,9],DROP=[4,8];
const HAND={sağlak:'Rechtshänder',solak:'Linkshänder'};
const SU={
 kaya:{n:'Hauptmann Can Kaya',k:'Kaya',r:'Einsatzoffizier',c:'#c9a64a',hand:'sağlak',smoke:1,
  bio:'Dein Jahrgangskamerad von der Akademie und seit Jahren dein engster Freund. Man munkelt, er stecke in letzter Zeit bis zum Hals in Schulden.',
  duty:'In zwei dieser Nächte war ich Offizier vom Dienst. Um zwei habe ich meinen Rundgang durchs Hauptquartier gemacht und danach im Besprechungsraum an den Plänen gearbeitet.',
  sleep:'In der Nacht bin ich früh ins Bett. Wir hatten den ganzen Tag an den Plänen gesessen; ich konnte kaum noch stehen.',
  early:'Am frühen Morgen bin ich in die Stadt runter; ich hatte etwas bei der Bank zu erledigen.',
  secret:'Du folgst Kaya in ein Teehaus in den Seitengassen der Stadt. Am Tisch sitzt ein massiger Mann; Kaya reicht ihm einen Umschlag, der Mann zählt das Geld und geht. Ein Kredithai. Kaya sitzt lange da, den Kopf in den Händen.\n\nDein Freund ertrinkt in Schulden, aber das ist kein Verrat.',
  press:'Kaya lacht zuerst, dann gefriert ihm das Lachen im Gesicht.\n\n„Du verdächtigst mich? Fünfzehn Jahre … Fünfzehn Jahre haben wir zusammen Wache geschoben.“',
  pressX:'Kaya schweigt eine Weile, dann erzählt er dir alles: Spielschulden, der Kredithai, monatelange Zinszahlungen.\n\n„Ich habe mich zu sehr geschämt, um es jemandem zu sagen. Aber ich schwöre dir, ich habe mein Land nicht verkauft.“'},
 aras:{n:'Major Levent Aras',k:'Aras',r:'Abteilung Einsatzplanung',c:'#b8453a',hand:'solak',smoke:0,
  bio:'Hart, ehrgeizig und streng nach Vorschrift. Sein Name steht auf der Beförderungsliste; es heißt, dafür würde er alles tun.',
  duty:'Nach Mitternacht war ich in der Operationszentrale und habe den Bericht fertiggestellt, den der Oberst verlangt hatte.',
  sleep:'Um elf war bei mir Licht aus. Ich bin ein disziplinierter Mann, Herr Major.',
  early:'Ich gehe jeden Morgen um sechs laufen. Sehen Sie im Wachbuch nach.',
  secret:'Um Mitternacht verlässt Aras das Hauptquartier und geht ins Restaurant des Hotels in der Stadt. Am Tisch sitzt ein Stabsoberst vom Divisionskommando. Aras schenkt ihm eine teure Uhr; aus dem Gespräch geht klar hervor, dass es um die Beförderungsliste geht.\n\nUnschicklich und gegen die Vorschriften. Aber keine Spionage.',
  press:'Aras sieht dich an, ohne zu blinzeln.\n\n„Sie haben jedes Recht, gegen mich zu ermitteln. Aber hinterlassen Sie auch nur einen Fleck in meiner Akte, und Sie werden sich dafür verantworten.“',
  pressX:'Aras beißt die Zähne zusammen, dann gibt er es kurz zu: Er hat sich mit dem Stabsoberst getroffen, um bei der Beförderung nachzuhelfen.\n\n„Das ist eine Disziplinarsache, Herr Major. Kein Verrat.“'},
 deniz:{n:'Feldwebel Deniz Yılmaz',k:'Deniz',r:'Fernmeldefeldwebel',c:'#70a3c4',hand:'sağlak',smoke:1,
  bio:'Der gesamte Funkverkehr geht durch seine Hände. In den Nachtschichten ist er meist allein im Fernmelderaum.',
  duty:'Die Nachtschicht hatte ich. Ich saß bis zum Morgen am Funkgerät im Fernmelderaum.',
  sleep:'In der Nacht hatte ich keinen Dienst; ich habe in der Kaserne geschlafen.',
  early:'Am frühen Morgen war ich bei der Post in der Stadt. Meine Mutter hatte ein Paket geschickt.',
  secret:'Um ein Uhr nachts schleicht sich Deniz aus der Kaserne zum Münztelefon am Haupttor. Eine halbe Stunde spricht er leise, lacht ab und zu. Nach dem Auflegen betrachtet er ein Foto: seine Verlobte.\n\nEin verbotener nächtlicher Anruf. Das verdient eine Disziplinarstrafe, ist aber keine Spionage.',
  press:'Deniz schluckt; seine Augen wandern zur Tür.\n\n„Herr Major, ich bin nur für die Funkgeräte zuständig. Ich habe alles gemeldet, was ich gehört habe.“',
  pressX:'Deniz läuft rot an und gesteht: Er ruft nachts heimlich seine Verlobte an.\n\n„Ich nehme jede Strafe hin, Herr Major. Aber ich bin kein Verräter.“'},
 leyla:{n:'Dolmetscherin Leyla Saran',k:'Leyla',r:'Zivile Dolmetscherin',c:'#a78bfa',hand:'solak',smoke:1,
  bio:'Spricht die Sprache des Feindes wie eine Muttersprachlerin. Ein Teil ihrer Familie lebt noch auf der anderen Seite der Grenze.',
  duty:'Ich habe bis spät abgefangenen Funkverkehr übersetzt. Gegen halb drei war ich fertig.',
  sleep:'Ich habe geschlafen. Dolmetscher arbeiten nachts nicht, Herr Major; ich jedenfalls nicht in dieser Nacht.',
  early:'Morgens war ich auf dem Markt in der Stadt. Ich gehe einmal im Monat hin.',
  secret:'Nachts tritt Leyla in den hinteren Garten der Offiziersunterkunft und telefoniert mit einem versteckten Handy über die Grenze. Das Gespräch ist kurz und abgehackt; am Ende weint sie. Offensichtlich spricht sie mit ihrer kranken Mutter.\n\nEine verbotene Leitung. Aber was du gehört hast, war eine Tochter, die ihre Mutter vermisst, nicht der Bericht einer Agentin.',
  press:'Leyla verschränkt die Arme.\n\n„Weil meine Familie jenseits der Grenze lebt, bin ich die erste Verdächtige, oder? Daran bin ich gewöhnt, Herr Major.“',
  pressX:'Leyla legt das versteckte Handy auf den Tisch.\n\n„Meine Mutter ist krank. Ich rufe sie an. Das ist alles. Hören Sie sich jedes Gespräch an, wenn Sie wollen.“'},
 emre:{n:'Leutnant Emre Tunç',k:'Emre',r:'Logistikoffizier',c:'#7fb35a',hand:'sağlak',smoke:0,
  bio:'Still, höflich, tadellos in seiner Arbeit. Vielleicht ein wenig zu tadellos. Niemand hat ein schlechtes Wort über ihn.',
  duty:'Im Depot war Nachtinventur. Ich habe die Munitionslisten geprüft.',
  sleep:'Ich bin um elf ins Bett. Am nächsten Tag stand eine Lieferung an; ich brauchte Ruhe.',
  early:'Am frühen Morgen bin ich dem Versorgungskonvoi entgegengefahren; meine Unterschrift steht auf den Lieferpapieren.',
  secret:'Um zwei Uhr nachts verlässt Emre seine Unterkunft und geht in die Sporthalle, wo er eine Stunde lang auf den Sandsack einschlägt. Dann setzt er sich auf eine Bank und sieht auf sein Handy: alte Nachrichten von seinem Vater im Krankenhaus.\n\nEin schlafloser, einsamer Mann mit Kummer. Aber keine Spur von Verrat.',
  press:'Emre ist ruhig, fast zu ruhig.\n\n„Ich verstehe Ihre Fragen, Herr Major. Ich habe nichts zu verbergen. Ich beantworte alles, was Sie fragen.“',
  pressX:'Zum ersten Mal zittert Emres Stimme: Sein Vater liegt im Krankenhaus, und er kann nachts nicht schlafen.\n\n„Ich wollte nicht, dass es jemand erfährt, Herr Major. Ich wollte nicht schwach wirken.“'},
 tekin:{n:'Oberst Nihat Tekin',k:'Tekin',r:'Kommandeur des Hauptquartiers',c:'#e39540',hand:'solak',smoke:1,
  bio:'Dein Kommandeur. Jeder Einsatzplan geht über seinen Schreibtisch. Ihn zu verhören, könnte dich die Karriere kosten.',
  duty:'Ich bin der Kommandeur dieses Hauptquartiers, Herr Major; ich bin Tag und Nacht im Dienst. In dieser Nacht war ich in der Operationszentrale.',
  sleep:'Ich war in meinem Zimmer. Es gehört Mut dazu, einen Oberst zu fragen, wo er nachts war.',
  early:'Am Morgen war ich zu einer Besprechung beim Divisionskommando.',
  secret:'Nachts fährt der Oberst in Zivil in die Stadt und betritt eine Arztpraxis hinter der Notdienstapotheke. Er kommt mit Medikamentenschachteln heraus. Am nächsten Tag erfährst du die Wahrheit: Er ist schwer krank und verheimlicht es vor allen, um nicht in den Ruhestand versetzt zu werden.\n\nEin Geheimnis, aber nicht das eines Mannes, der sein Land verraten hat.',
  press:'Oberst Tekin lehnt sich in seinem Stuhl zurück.\n\n„Ich stehe also auch auf Ihrer Liste. Mutig, Herr Major. Ich hoffe, Sie haben recht; sonst könnte es Ihnen schwerfallen, diesen Raum wieder zu verlassen.“',
  pressX:'Der Oberst blickt lange aus dem Fenster, dann erzählt er dir von seiner Krankheit.\n\n„Ich trage diese Uniform seit dreißig Jahren. Ich will sie bis zu meinem letzten Tag tragen. Ist das ein Verbrechen?“'}
};
const IDS=Object.keys(SU);
const nm=id=>SU[id].n,kn=id=>SU[id].k,g=(id,m,f)=>id==='leyla'?f:m,er=id=>g(id,'er','sie'),Er=id=>g(id,'Er','Sie');
const pos=w=>w+(/[sxzß]$/.test(w)?'’':'s');
const list=a=>a.map(nm).join(', ').replace(/, ([^,]*)$/,' und $1');
const CLUES=['telsiz','nobet','defter','not','izmarit','banka'];
const CN={telsiz:'Funkprotokolle',nobet:'Dienstplan',defter:'Wachbuch',not:'Verbrannte Notiz',izmarit:'Treffpunkt',banka:'Kontoauszüge'};
const CW='WIDERSPRUCH';
function str(R,x){if(R.cleared[x])return {s:-1,tags:[['Entlastet','o']]};let s=0;const tags=[];
 for(const c of CLUES)if(R.got[c]&&R.sets[c].includes(x)){if(c==='banka'&&R.expl[x]){tags.push(['Bank: erklärt','o']);continue}s++;tags.push([CN[c],'c'])}
 if(R.contra[x]){const n=Object.keys(R.contra[x]).length;s+=2*n;tags.push([n>1?'2 Widersprüche':'Widerspruch','r'])}
 if(R.nervous[x]){s+=1;tags.push(['Nervös','r'])}
 if(R.tail[x]==='witness'){s+=3;tags.push(['Mit Kurier gesehen','r'])}
 if(R.trap&&R.trap.res==='hit'&&R.trap.hit===x){s+=3;tags.push(['Falle: geleakt','r'])}
 if(R.tail[x]==='secret')tags.push(['Geheimnis gelüftet','o']);
 return {s,tags}}
const C_N=x=>`${nm(x)} sagte, in diesen Nächten geschlafen zu haben. Laut Dienstplan war ${er(x)} aber in allen drei Leck-Nächten zwischen 02:00 und 03:00 wach im Hauptquartier.`;
const C_D=x=>`${nm(x)} sagte, morgens nie die Kaserne verlassen zu haben. Laut Wachbuch ging ${er(x)} aber an den Morgen nach den Lecks um 05:40 durch das Haupttor hinaus.`;
function contraCheck(R){let nw=[];const L=R.liar;
 const AK=x=>R.alibiK&&R.alibiK[x]?R.alibiK[x]:{s:false,k:false};
 if(L&&R.iv[L]&&!R.liarOk&&R.alibi&&R.alibi[L]&&AK(L).s){R.contra[L]=R.contra[L]||{};
  if(R.got.nobet&&R.sets.nobet.includes(L)&&!R.contra[L].nobet){R.contra[L].nobet=1;nw.push(C_N(L))}
  if(R.got.defter&&R.sets.defter.includes(L)&&!R.contra[L].defter&&AK(L).k){R.contra[L].defter=1;nw.push(C_D(L))}
  if(!Object.keys(R.contra[L]).length)delete R.contra[L]}
 const m=R.mole;if(!R.iv[m])return nw;R.contra[m]=R.contra[m]||{};
 if(R.got.nobet&&!R.contra[m].nobet){R.contra[m].nobet=1;nw.push(C_N(m))}
 if(R.got.defter&&!R.contra[m].defter){R.contra[m].defter=1;nw.push(C_D(m))}
 if(!Object.keys(R.contra[m]).length)delete R.contra[m];return nw}
const BRIEF=[
 {ti:'Hinter verschlossenen Türen',b:`Brigadegeneralin Sevim Ateş, Leiterin des Nachrichtendienstes im Generalstab, schließt ihre Bürotür ab, bevor sie beginnt:

„Unsere letzten drei Operationen sind in Hinterhalte geraten, Herr Major. Alle drei Male kannte der Feind den Plan vor uns. Wir haben dreiundzwanzig Soldaten verloren.“

Sie legt drei Akten auf den Tisch. Jeder Deckel trägt einen roten Stempel: STRENG GEHEIM.

„Die Informationen sickern aus dem Hauptquartier Ost durch. Jemand von innen.“`},
 {ti:'Der Auftrag',b:`„Ich schicke Sie mit einer neuen Versetzung dorthin, getarnt als ‚Personalprüfung‘. Niemand wird Ihren wahren Auftrag kennen, nicht einmal der Kommandeur.“

Die Generalin wendet sich zum Fenster.

„Sie haben zehn Tage. Solange das Leck weiterbesteht, sterben unsere Soldaten weiter. Beschuldigen Sie die falsche Person, ruinieren Sie ein unschuldiges Leben, und der wahre Verräter entkommt.“

„Verstanden, Frau Generalin.“

„Noch etwas, Herr Major. Trauen Sie niemandem.“`},
 {ti:'Sechs Namen',b:`Im Hauptquartier Ost haben sechs Personen Zugang zu den Plänen. Der Maulwurf ist einer von ihnen.

Jeden Tag hast du drei Aktionen: Du kannst *eine Aussage aufnehmen*, *Beweise sammeln* oder nachts jemanden *beschatten*. Ab dem fünften Tag kannst du mit Falschinformationen *eine Falle stellen*, und wenn du so weit bist, kannst du jemanden *beschuldigen*.

Finde die Widersprüche, verbinde die Spuren. Die Beweistafel zeigt dir, wo sich der Verdacht verdichtet.

Aber Vorsicht: Wenn der Maulwurf etwas merkt, beginnt er, seine Spuren zu verwischen.`}];
function morning(R){const d=R.day,N=[];
 if(d===1)N.push('Du bist zur „Personalprüfung“ im Hauptquartier Ost eingetroffen. Oberst Tekin hat dich mit einem kalten Händedruck empfangen. Man hat dir ein Zimmer, einen Schreibtisch und einen Schlüssel gegeben.');
 if(d===2)N.push('Beim Frühstück hat sich Hauptmann Kaya neben dich gesetzt: „Schön, dich hier zu sehen. Lass uns heute Abend einen Tee trinken, wie in alten Zeiten.“ Er hat dunkle Ringe unter den Augen.');
 if(d===5)N.push('Ein Hirte aus der Stadt erzählt, dass in den letzten Wochen nachts jemand am alten Brunnen an der Grenzstraße wartet. Das könnte der Treffpunkt sein.');
 if(d===10)N.push('Der letzte Tag. Wenn du den Maulwurf nicht bis Sonnenuntergang beschuldigst, schließt die Generalin die Ermittlungen, und das Leck geht weiter.');
 return N.concat(R.notes)}
function nightEvents(R){const d=R.day,m=R.mole,ev=[];
 if(LEAK.includes(d)){if(R.trap&&R.trap.res==null&&R.trap.day<=d){const T=R.trap;if(T.a===m||T.b===m){T.res='hit';T.hit=m;ev.push(`Heute Nacht hat der Feind auf die Falschinformation über ${T.hit===T.a?'das Nordtal':'die Südbrücke'} reagiert. Nur **${nm(m)}** wusste davon.`)}else{T.res='clear';R.cleared[T.a]=1;R.cleared[T.b]=1;ev.push(`Heute Nacht hat der Feind auf keine der beiden falschen Spuren deiner Falle reagiert. **${nm(T.a)}** und **${nm(T.b)}** sind entlastet.`)}}
  const k=2+Math.floor(Math.random()*4);R.kia+=k;ev.push(`Das Leck geht weiter: Heute Nacht ist eine unserer Aufklärungseinheiten in einen Hinterhalt geraten. **${k} Gefallene.** Verluste insgesamt: ${23+R.kia}.`)}
 if(R.alert>=2&&!R.destroyed._done){R.destroyed._done=1;const c=['banka','izmarit','not'].find(x=>!R.got[x]);if(c){R.destroyed[c]=1;ev.push(`Der Maulwurf ist alarmiert. ${c==='banka'?'Der Zugang zu den Bankunterlagen wurde wegen einer „technischen Störung“ gesperrt.':c==='izmarit'?'Die Umgebung des alten Brunnens wurde über Nacht gesäubert; keine Spur ist geblieben.':'Die Asche aus dem Ofen des Hauptquartiers wurde über Nacht ausgeleert; die verbrannte Notiz ist verschwunden.'}`)}}
 if(R.alert>=3&&!R.destroyed._comp){R.destroyed._comp=1;R.apPenalty=1;ev.push('Gegen dich wurde eine anonyme Beschwerde eingereicht: „Der Prüfer schikaniert das Personal.“ Morgen früh musst du dich vor Oberst Tekin rechtfertigen; du verlierst eine Aktion.')}
 return ev}
function act(R,v){const [a,b,c]=String(v).split(':');
 if(a==='bn'){R.bi++;if(R.bi>=BRIEF.length){R.phase='day';R.bi=0}return}
 if(a==='menu'){R.menu=b||null;return}
 if(a==='ok'){R.res=null;if(R.ap<=0&&R.phase==='day')endDay(R);return}
 if(a==='night'){endDay(R);return}
 if(a==='morning'){R.phase='day';R.notes=[];return}
 if(a==='iv'){if(R.ap<=0||R.ivDay[b]===R.day)return;R.ap--;R.ivDay[b]=R.day;R.iv[b]=(R.iv[b]||0)+1;R.menu=null;
  const first=R.iv[b]===1;let body;
  const BAR=' Und morgens bin ich in der Kaserne geblieben; ich war nirgendwo.';
  if(first){const inN=R.sets.nobet.includes(b),inD=R.sets.defter.includes(b);
   const say=b===R.mole?SU[b].sleep+BAR:b===R.liar&&!R.tail[b]?SU[b].sleep+(inD?BAR:''):(inN?SU[b].duty:SU[b].sleep)+(inD?' '+SU[b].early:'');
   body=`${nm(b)} setzt sich dir gegenüber. Du fragst, wo ${er(b)} in den Leck-Nächten war.\n\n„${say}“`;
   R.alibi=R.alibi||{};R.alibi[b]=say;R.alibiK=R.alibiK||{};R.alibiK[b]={s:say.indexOf(SU[b].sleep)===0,k:say.indexOf(BAR)>=0}}
  else{if(b===R.mole){R.alert++;R.nervous[b]=1;body=SU[b].press+`\n\nWährend ${er(b)} spricht, trommeln ${g(b,'seine','ihre')} Finger unablässig auf die Tischkante. Vielleicht verbirgt ${er(b)} etwas.`}
   else if(b===R.liar&&R.contra[b]){body=SU[b].pressX+`\n\nDas war also der Grund für die Ungereimtheit in der Aussage. Deshalb hat ${kn(b)} verschwiegen, wo ${er(b)} in jener Nacht war.`;delete R.contra[b];R.liarOk=1;if(b===R.herring)R.expl[b]=1}
   else if(R.tail[b]==='secret'||(b===R.herring&&R.got.banka)){body=SU[b].pressX;if(b===R.herring)R.expl[b]=1}
   else body=SU[b].press}
  const nw=contraCheck(R)||[];R.res={ti:'Aussage · '+kn(b),b:body+(nw.length?'\n\n'+nw.map(x=>CW+': '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='cl'){if(R.ap<=0||R.got[b]||R.destroyed[b])return;if(b==='banka'&&R.day<3)return;if(b==='izmarit'&&R.day<5&&!R.dropSeen)return;R.ap--;R.got[b]=1;R.menu=null;
  const S=R.sets[b];let body='';const noticed=Math.random()<.12;if(noticed)R.alert++;
  if(b==='telsiz')body=`Du untersuchst die Aufzeichnungsgeräte im Fernmelderaum. In jeder Leck-Nacht gab es, immer gegen 02:10, verschlüsselte Sendungen von vierzig Sekunden. Sie kamen nicht von außen, sondern vom Reservefunkgerät im Fernmelderaum.\n\nNur drei Personen haben einen Schlüssel zu diesem Raum: ${list(S)}.`;
  if(b==='nobet')body=`Du vergleichst die Dienstpläne mit den Aufzeichnungen der Zugangskarten. In allen drei Leck-Nächten waren drei Personen zwischen 02:00 und 03:00 wach im Gebäude des Hauptquartiers: ${list(S)}.`;
  if(b==='defter')body=`Du liest das Wachbuch Seite für Seite. An den Morgen nach den Lecks tauchen immer wieder drei Namen auf, die die Kaserne vor Sonnenaufgang verlassen haben: ${list(S)}.`;
  if(b==='not')body=`Einer der Soldaten, die die Asche aus dem Ofen des Hauptquartiers durchsieben, bringt dir einen halb verbrannten Zettel. Nur eine Zeile ist lesbar: „Donnerstag. Brunnen. 02.“ ${SU[R.mole].hand==='solak'?'Die Tinte ist stellenweise von der Hand verwischt, die über die Zeile glitt; der Schreiber ist Linkshänder':'Die Tinte ist sauber, die Buchstaben neigen sich nach rechts; der Schreiber ist Rechtshänder'}.\n\nDie Verdächtigen, die ${HAND[SU[R.mole].hand]} sind: ${list(S)}.`;
  if(b==='izmarit')body=SU[R.mole].smoke?`Nachts gehst du zum alten Brunnen und suchst die Umgebung mit der Taschenlampe ab. Am Fuß des Steins liegt eine Handvoll Zigarettenstummel, alle von derselben Marke. Wer hier wartet, raucht.\n\nDie Verdächtigen, die rauchen: ${list(S)}.`:`Nachts gehst du zum alten Brunnen und suchst die Umgebung mit der Taschenlampe ab. Es gibt frische Fußspuren, aber keinen einzigen Zigarettenstummel. Wer hier stundenlang wartet, raucht offenbar nicht.\n\nDie Verdächtigen, die nicht rauchen: ${list(S)}.`;
  if(b==='banka'){const m=R.mole;const t=x=>x==='kaya'?(x===m?'Kayas Schulden bei den Kredithaien wurden plötzlich beglichen, jedes Mal zwei Tage nach einem Leck.':'Kayas Konto zeigt regelmäßige Zahlungen an Kredithaie; er steckt offensichtlich bis zum Hals in Schulden.'):x==='leyla'?(x===m?'Neben Leylas kleinen Überweisungen über die Grenze ging nach jedem Leck eine große Bareinzahlung auf ihrem Konto ein.':'Leyla überweist jeden Monat kleine Beträge über die Grenze.'):`Auf ${pos(kn(x))} Konto wurde dreimal Bargeld eingezahlt, jeweils zwei Tage nach einem Leck.`;
   body=`Mit Genehmigung des Staatsanwalts prüfst du die Kontoauszüge der Verdächtigen aus den letzten drei Monaten. Zwei Konten zeigen ungewöhnliche Bewegungen:\n\n${t(R.banka0=R.sets.banka[0])}\n\n${t(R.sets.banka[1])}`}
  if(noticed)body+='\n\nAuf dem Weg nach draußen kreuzt sich dein Blick im Flur mit dem von jemandem. Vielleicht hat er gemerkt, wonach du gesucht hast.';
  const nw=contraCheck(R)||[];R.res={ti:CN[b],b:body+(nw.length?'\n\n'+nw.map(x=>CW+': '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='tail'){if(R.ap<=0||R.tailDay===R.day)return;R.ap--;R.tailDay=R.day;R.menu=null;let body;const m=R.mole;
  if(b===m){if(DROP.includes(R.day)){R.tail[b]='witness';R.dropSeen=1;body=`Um halb zwei schlüpft ${nm(b)} leise aus dem Hauptquartier. Du folgst mit Abstand. Am alten Brunnen an der Grenzstraße wartet ein Schatten. ${kn(b)} übergibt einen gefalteten Umschlag; der Schatten steckt ihn in die Jacke und verschwindet in der Dunkelheit.\n\nDu hast es gesehen. Das ist kein Verdacht mehr; das ist eine Augenzeugenaussage.`}
   else{const seen=Math.random()<.3;if(seen)R.alert++;body=`Du beobachtest ${nm(b)} die ganze Nacht. Früh ins Bett, einmal geht das Licht an, dann Stille.${seen?'\n\nVor der Morgendämmerung wird der Vorhang im Zimmer beiseitegeschoben; jemand sieht hinaus, genau dorthin, wo du dich versteckst. Vielleicht hat man dich entdeckt.':'\n\nHeute Nacht ist nichts passiert.'}`}}
  else{if(R.tail[b]!=='secret'){R.tail[b]='secret';body=SU[b].secret;if(b===R.herring)R.expl[b]=1;if(b===R.liar&&R.contra[b]){delete R.contra[b];R.liarOk=1;body+=`\n\nDas erklärt auch die Ungereimtheit in ${pos(kn(b))} Aussage.`}}else body=`Du beschattest ${nm(b)} erneut, aber heute Nacht passiert nichts Ungewöhnliches.`}
  R.res={ti:'Nachtbeschattung · '+kn(b),b:body};return}
 if(a==='trap'){if(R.trap||R.day<5||R.day>9||R.ap<=0)return;if(b==='go'){const x=c.split(',');if(x.length!==2)return;R.ap--;R.trap={a:x[0],b:x[1],day:R.day,res:null};R.menu=null;R.tsel=[];
   R.res={ti:'Falle gestellt',b:`Du erzählst ${nm(x[0])} von einem geplanten Angriff im Nordtal und ${nm(x[1])} von einem Konvoi, der an der Südbrücke wartet. Beides ist falsch, und jedes wurde nur einer Person erzählt.\n\nJetzt heißt es warten. Die nächste Leck-Nacht wird zeigen, welche Spur den Feind erreicht hat.`};return}
  R.tsel=R.tsel||[];const i=R.tsel.indexOf(b);if(i>=0)R.tsel.splice(i,1);else if(R.tsel.length<2)R.tsel.push(b);return}
 if(a==='acc'){R.menu='accuse';R.accSel=b;return}
 if(a==='accgo'){KB.confront(R,b);return}
 if(a==='fin'){R.end=b;return}}
function endDay(R){const ev=nightEvents(R);R.lastNight=ev;R.day++;R.res=null;R.menu=null;
 if(R.day>DAYS){R.end='kacti';R.endWhy='time';return}
 R.ap=AP-(R.apPenalty||0);R.apPenalty=0;R.phase='night'}
const av=(id,sz=40)=>`<span class="kav" style="--c:${SU[id].c};width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.38)}px">${SU[id].k.slice(0,1)}</span>`;
const md=s=>fmt32(String(s).replace(/\*\*([^*]+)\*\*/g,'⟦$1⟧')).replace(/⟦([^⟧]+)⟧/g,'<b>$1</b>').replace(/WIDERSPRUCH:|CONTRADICTION:|ÇELİŞKİ:/g,'<span class="kcontra">'+CW+'</span>');
function header(R){return `<div class="khead"><div><span class="lbl">Tag</span><b class="num">${Math.min(R.day,DAYS)}<small>/${DAYS}</small></b></div>
 <div><span class="lbl">Aktionen</span><div class="kap">${Array.from({length:AP},(_,i)=>`<i class="${i<R.ap?'on':''}"></i>`).join('')}</div></div>
 <div><span class="lbl">Gefallene</span><b class="num red">${23+R.kia}</b></div></div>${R.alert>=2?'<div class="kwarn">Der Maulwurf ist alarmiert und hat begonnen, seine Spuren zu verwischen.</div>':''}`}
function board(R){const rows=IDS.map(x=>({x,...(str(R,x)||{})}));const mx=Math.max(6,...rows.map(r=>r.s||0));
 return `<div class="card kboard"><div class="sec-h"><h2>Beweistafel</h2></div>
 ${rows.map(r=>`<div class="krow${r.s<0?' clr':''}">${av(r.x,34)}<div class="grow"><div class="kn"><b>${esc(SU[r.x].n)}</b>${r.s<0?'<span class="kclr">Entlastet</span>':''}</div>
  ${r.s>=0?`<div class="ksus"><i style="width:${Math.min(100,(r.s/mx)*100)}%"></i></div>`:''}${r.tags&&r.tags.length?`<div class="ktags">${r.tags.map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')}</div>`:''}</div></div>`).join('')}</div>`}
const CHS=[{ti:'Der Auftrag',sub:'Sechs Verdächtige · Tag 1–2'},{ti:'Die Ermittlung',sub:'Aussagen und Akten · Tag 3–6'},{ti:'Die Falle',sub:'Falsche Spuren und Beschattung · Tag 7–9'},{ti:'Die Konfrontation',sub:'Der Verhörraum · Tag 10'}];
function chOf(R){return R.end?3:R.phase==='brief'?0:R.day<=2?0:R.day<=6?1:R.day<=9?2:3}
const KD={telsiz:'Woher kamen die verschlüsselten Sendungen?',nobet:'Wer war in den Leck-Nächten wach?',defter:'Wer hat morgens die Kaserne verlassen?',not:'Verbrannte Papiere im Ofen',izmarit:'Der alte Brunnen an der Grenzstraße',banka:'Ungewöhnliche Geldbewegungen'};
function view(R){const KI=VIEWTR.KI,ART=VIEWTR.ART;
 if(R.phase==='brief'){const B=BRIEF[R.bi];return `${R.bi===0?`<div class="tchap32"><span>Kapitel 1</span><b class="stencil">Der Auftrag</b></div>`:''}<div class="tart32">${ART.hq()}</div><div class="tbody32"><h3 class="stencil">${esc(B.ti)}</h3>${md(B.b)}</div>
  ${R.bi===2?`<div class="ksus6">${IDS.map(x=>`<div>${av(x,36)}<span><b>${esc(SU[x].n)}</b><small>${esc(SU[x].bio)}</small></span></div>`).join('')}</div>`:''}
  <button class="btn block" data-a="kb" data-v="bn">${R.bi<2?'Weiter':'Ermittlung beginnen'}</button>`}
 if(R.phase==='night'){const ch=chOf(R);const newCh=[3,7,10].includes(R.day);return `${newCh?`<div class="tchap32"><span>Kapitel ${ch+1}</span><b class="stencil">${esc(CHS[ch].ti)}</b></div>`:''}<div class="tart32">${ART.night()}</div>
  <div class="tbody32"><h3 class="stencil">Nacht</h3>${R.lastNight.length?md(R.lastNight.join('\n\n')):'<p>Die Nacht verlief ruhig. Eins nach dem anderen gehen die Lichter des Hauptquartiers aus.</p>'}</div>
  <button class="btn block" data-a="kb" data-v="morning">Tag ${R.day} beginnt ›</button>`}
 if(R.phase==='turn'){const M=R.mole;return `<div class="tart32">${ART.room()}</div><div class="tbody32"><h3 class="stencil">Eine Gelegenheit</h3>${md(`${nm(M)} sitzt dir im Verhörraum gegenüber. Die Beweise liegen auf dem Tisch; leugnen ist zwecklos. ${g(M,'Seine','Ihre')} Schultern sinken.\n\nAber du hast eine Idee: Der Maulwurf ist ein Kanal, der dem Feind Falschinformationen zuträgt. Der Feind vertraut ${g(M,'ihm','ihr')} noch, weil ${er(M)} nie alarmiert war und nie ${g(M,'seine','ihre')} Spuren verwischt hat. Statt ${g(M,'ihn','sie')} zu verhaften, könntest du ${g(M,'ihn','sie')} benutzen.`)}</div>
  <div class="topts32"><button class="opt op2" data-a="kb" data-v="fin:ag"><span class="k">A</span><span class="grow">Verhaften. Der Verräter soll bekommen, was er verdient.</span></button><button class="opt op2" data-a="kb" data-v="fin:cift"><span class="k">B</span><span class="grow">Ein Angebot machen: ${Er(M)} überbringt dem Feind die Informationen, die wir auswählen, und dafür wird ${g(M,'sein','ihr')} Leben verschont.</span></button></div>`}
 let h=header(R);
 if(R.res){return h+`<div class="tbody32 kres${R.res.contra?' hot':''}"><h3 class="stencil">${esc(R.res.ti)}</h3>${md(R.res.b)}</div><button class="btn block" data-a="kb" data-v="ok">${R.ap<=0?'Tag beenden ›':'OK'}</button>`}
 const back=`<button class="btn ghost block" data-a="kb" data-v="menu:">‹ Zurück</button>`;
 if(R.menu==='iv')return h+`<div class="card"><div class="sec-h"><h2>Wessen Aussage nimmst du auf?</h2></div><p class="small muted">Du kannst mit jedem Verdächtigen einmal am Tag sprechen. Beim zweiten Gespräch setzt du ihn unter Druck.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="iv:${x}"${R.ivDay[x]===R.day?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${esc(SU[x].r)} · ${R.iv[x]?(R.iv[x]===1?'Einmal gesprochen':'Unter Druck gesetzt'):'Noch nicht befragt'}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='cl')return h+`<div class="card"><div class="sec-h"><h2>Wo suchst du?</h2></div>${CLUES.map(c=>{const lock=c==='banka'&&R.day<3?'Ab Tag 3 (Genehmigung des Staatsanwalts)':c==='izmarit'&&R.day<5&&!R.dropSeen?'Der Treffpunkt ist noch nicht bekannt':R.destroyed[c]?'Der Maulwurf hat dieses Beweisstück vernichtet':R.got[c]?'Untersucht':'';return `<button class="kpick" data-a="kb" data-v="cl:${c}"${lock?' disabled':''}><span class="kic">${KI[c]}</span><span class="grow"><b>${esc(CN[c])}</b><small>${esc(lock||KD[c])}</small></span>${lock?'':'<span class="chev">›</span>'}</button>`}).join('')}</div>`+back;
 if(R.menu==='tail')return h+`<div class="card"><div class="sec-h"><h2>Wen beschattest du heute Nacht?</h2></div><p class="small muted">Du kannst nur eine Person pro Nacht beschatten. Wenn der Maulwurf es merkt, wird er alarmiert.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="tail:${x}">${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.tail[x]==='secret'?'Schon beschattet':R.tail[x]==='witness'?'Mit Kurier gesehen':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='trap'){const sel=R.tsel||[];return h+`<div class="card"><div class="sec-h"><h2>Eine Falle stellen</h2></div><p class="small">Wähle zwei Verdächtige. Jeder bekommt von dir eine andere falsche Einsatzinformation. Reagiert der Feind beim nächsten Leck auf eine davon, ist diese Person der Maulwurf; reagiert er auf keine, sind beide entlastet. <b>Die Falle kannst du nur einmal stellen.</b></p>${IDS.map(x=>`<button class="kpick${sel.includes(x)?' on':''}" data-a="kb" data-v="trap:${x}"${R.cleared[x]?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.cleared[x]?'Entlastet':sel.includes(x)?(sel.indexOf(x)===0?'Spur Nordtal':'Spur Südbrücke'):esc(SU[x].r)}</small></span><span class="kchk">${sel.includes(x)?'✓':''}</span></button>`).join('')}</div>
  <button class="btn block" data-a="kb" data-v="trap:go:${sel.join(',')}"${sel.length===2?'':' disabled'}>Falsche Spuren ausgeben</button>`+back}
 if(R.menu==='board')return h+board(R)+`<div class="card"><div class="sec-h"><h2>Aussagen</h2></div>${IDS.filter(x=>R.alibi&&R.alibi[x]).map(x=>`<div class="kst">${av(x,28)}<p><b>${esc(SU[x].k)}:</b> „${esc(R.alibi[x])}“</p></div>`).join('')||'<p class="small muted">Du hast noch von niemandem eine Aussage aufgenommen.</p>'}</div>
  <div class="card"><div class="sec-h"><h2>Beweise</h2></div>${CLUES.filter(c=>R.got[c]).map(c=>`<div class="kcl"><span class="kic">${KI[c]}</span><span><b>${esc(CN[c])}</b><small>${c==='banka'?esc(R.sets.banka.map(kn).join(' und ')+': ungewöhnliche Bewegungen'):c==='not'?esc('Schreiber ist '+HAND[SU[R.mole].hand]+': '+R.sets.not.map(kn).join(', ')):c==='izmarit'?esc((SU[R.mole].smoke?'Raucher: ':'Nichtraucher: ')+R.sets.izmarit.map(kn).join(', ')):esc(R.sets[c].map(kn).join(', '))}</small></span></div>`).join('')||'<p class="small muted">Du hast noch keine Beweise gesammelt.</p>'}</div>`+back;
 if(R.menu==='accuse'){const x=R.accSel;if(x){const S=str(R,x);return h+`<div class="card kacc">${av(x,64)}<h2 class="stencil">${esc(SU[x].n)}</h2><p class="small muted">${esc(SU[x].r)}</p>
   <div class="ktags">${S.tags.filter(t=>t[1]!=='o').map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')||'<span class="small muted">Du hast fast keine Beweise gegen diese Person.</span>'}</div>
   <p>Du bringst ${g(x,'ihn','sie')} in den Verhörraum und legst die Beweise auf den Tisch. Liegst du falsch, ist ein unschuldiges Leben ruiniert, und der wahre Maulwurf entkommt. <b>Diese Entscheidung kannst du nicht zurücknehmen.</b></p></div>
   <button class="btn warn block" data-a="kb" data-v="accgo:${x}">${esc(kn(x))} beschuldigen</button><button class="btn ghost block" data-a="kb" data-v="acc:">‹ Jemand anderen wählen</button>`}
  return h+`<div class="card"><div class="sec-h"><h2>Wen beschuldigst du?</h2></div>${IDS.map(x=>{const S=str(R,x);return `<button class="kpick" data-a="kb" data-v="acc:${x}"${S.s<0?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${S.s<0?'Entlastet':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`}).join('')}</div>`+back}
 const N=morning(R);
 return h+(N.length?`<div class="kmorn"><span class="lbl">Morgenbericht · Tag ${R.day}</span>${md(N.join('\n\n'))}</div>`:'')+
 `<div class="kacts">
  <button class="kact" data-a="kb" data-v="menu:iv"${R.ap?'':' disabled'}><span class="kic">${KI.iv}</span><b>Aussage aufnehmen</b><small>Mit einem Verdächtigen sprechen</small></button>
  <button class="kact" data-a="kb" data-v="menu:cl"${R.ap?'':' disabled'}><span class="kic">${KI.cl}</span><b>Beweise sammeln</b><small>Akten, Protokolle</small></button>
  <button class="kact" data-a="kb" data-v="menu:tail"${R.ap&&R.tailDay!==R.day?'':' disabled'}><span class="kic">${KI.tail}</span><b>Nachtbeschattung</b><small>${R.tailDay===R.day?'Heute Nacht wird schon jemand beschattet':'Jemandem folgen'}</small></button>
  <button class="kact" data-a="kb" data-v="menu:trap"${R.ap&&!R.trap&&R.day>=5&&R.day<=9?'':' disabled'}><span class="kic">${KI.trap}</span><b>Falle stellen</b><small>${R.trap?(R.trap.res?'Falle aufgelöst':'Falle gestellt, warten'):R.day<5?'Ab Tag 5':R.day>9?'Keine Zeit mehr':'Falschinfos streuen'}</small></button>
 </div>${rings(R)}
 <div class="kbar"><button class="btn ghost" data-a="kb" data-v="menu:accuse"${R.day>=5?'':' disabled'}>${R.day>=5?'Beschuldigen':'Beschuldigen · Tag 5'}</button><button class="btn" data-a="kb" data-v="night">Tag beenden ›</button></div>`}
function rings(R){const rows=IDS.map(x=>({x,...str(R,x)}));const mx=Math.max(6,...rows.map(r=>r.s));
 return `<button class="kring-card" data-a="kb" data-v="menu:board"><div class="sec-h"><span class="lbl">Beweistafel</span><span class="small acc">Details ›</span></div><div class="krings">${rows.map(r=>{const h=r.s<0?0:Math.min(1,r.s/mx);return `<div class="kr${r.s<0?' clr':''}${r.s>0?' hot':''}" style="--h:${h.toFixed(2)}"><span class="kr-ring">${av(r.x,38)}${r.s>0?`<em>${r.s}</em>`:''}</span><small class="notr">${esc(SU[r.x].k)}</small></div>`}).join('')}</div></button>`}
function endText(R){const m=R.mole,x=R.accused,kia=23+R.kia;
 if(R.end==='ag')return `${R.bluff?`Deine Beweise sind dünn; das weißt du selbst. Aber du sitzt ${nm(m)} gegenüber, als wüsstest du alles. In der dritten Stunde bricht ${er(m)} zusammen.`:`Du legst die Beweise Stück für Stück auf den Tisch. ${nm(m)} leugnet zuerst, verstummt dann und beginnt schließlich zu reden.`}

„Es war wegen des Geldes“, sagt ${er(m)}. „Dann war es die Angst. Wenn man einmal angefangen hat, kann man nicht mehr aufhören.“

Mit den Namen, die ${er(m)} nennt, werden noch in derselben Nacht der Kurier im Grenzdorf und zwei Komplizen gefasst. Das Netzwerk bricht zusammen.

Eine Woche später ruft dich Generalin Ateş in ihr Büro. Auf dem Schreibtisch liegt eine Liste mit ${kia} Namen.

„Wir können sie nicht zurückholen, Herr Major. Aber kein neuer Name wird dieser Liste hinzugefügt. Dafür haben Sie gesorgt.“`;
 if(R.end==='cift')return `Mit zitternden Händen nimmt ${nm(m)} dein Angebot an.

In den folgenden sechs Monaten erhält der Feind von der Quelle, der er vertraut, Berichte, die wir geschrieben haben. Falsche Stellungen, Einheiten, die es nicht gibt, Offensiven, die nie stattfinden werden …

Als der Frühling kommt, verbringt die stärkste Division des Feindes drei Tage damit, ein leeres Tal einzukesseln. In diesen drei Tagen durchbrechen unsere Einheiten die Front.

Niemand wird deinen Namen kennen. Er wird in keinem Bericht über diese Operation stehen. Generalin Ateş drückt dir nur die Hand:

„Manche Siege werden in der Stille errungen, Herr Major. Die größten meistens.“`;
 if(R.end==='yanlis')return `${nm(x)} wird verhaftet. Als die Handschellen klicken, sieht ${er(x)} dich an; in ${g(x,'seinen','ihren')} Augen ist keine Wut, nur Fassungslosigkeit.

„Sie irren sich“, sagt ${er(x)}. „Eines Tages werden Sie es verstehen.“

Drei Wochen später gerät eine weitere Operation in einen Hinterhalt. Dann noch eine.

Monate später nennt ein an der Grenze gefasster Kurier einen einzigen Namen: ${nm(m)}. Doch ${kn(m)} hat die Grenze längst überquert und ist verschwunden.

${nm(x)} wird freigelassen. Du gehst ${g(x,'ihm','ihr')} am Tor entgegen. Du streckst die Hand aus; ${er(x)} nimmt sie nicht.

Man hat dir gesagt, du sollst niemandem trauen. Wie sich zeigt, hättest du auch den Beweisen nicht blind trauen dürfen.`;
 return R.endWhy==='weak'?`Deine Beweise haben nicht gereicht. ${nm(m)} blieb im Verhörraum gefasst und hatte auf jeden Vorwurf eine Antwort. Der Staatsanwalt ordnete die Freilassung an.

Am nächsten Morgen war ${pos(kn(m))} Bett leer. Die Aufzeichnungen des Grenzpostens zeigten ein Fahrzeug, das um Mitternacht auf die andere Seite gefahren war.

Du hast den Maulwurf gefunden, aber nicht fassen können.`:`Die zehn Tage sind um. Generalin Ateş hat die Ermittlungen eingestellt.

Das Leck im Hauptquartier Ost bestand noch zwei weitere Monate. Dann verschwand ${nm(m)} eines Nachts spurlos. Eine Woche später war ${er(m)} im feindlichen Fernsehen zu sehen, lächelnd.

Die Verlustliste erreichte ${kia+11} Namen.`}
const VIEWTR={KI:KB.KI,ART:KB.ART};
const T=KB.T;
T.de={ti:'Der Maulwurf',genre:'Spionage · Krimi',sub:'Finde den Verräter im Hauptquartier in 10 Tagen',
 pitch:'Die letzten drei Operationen sind in Hinterhalte geraten. Jemand im Hauptquartier Ost gibt Informationen weiter, und du hast 10 Tage. Nimm Aussagen auf, prüfe Akten, beschatte Verdächtige nachts, stelle Fallen mit Falschinformationen. Der Maulwurf kann in jedem Spiel eine andere Person sein. Beschuldigst du die falsche, wird ein Unschuldiger ruiniert, und der wahre Verräter entkommt.',
 chapters:CHS,
 endings:[{k:'ag',ti:'Netzwerk zerschlagen',medal:'Schattenjäger',tone:'good'},{k:'cift',ti:'Doppelagent',medal:'Unsichtbares Abzeichen',tone:'good'},{k:'yanlis',ti:'Die falsche Person',tone:'bad'},{k:'kacti',ti:'Der Maulwurf ist entkommen',tone:'bad'}],
 view,endText,subtitle:R=>R.end?'Ende':R.phase==='brief'?'Kapitel 1 · Der Auftrag':`Tag ${Math.min(R.day,DAYS)} · ${CHS[chOf(R)].ti}`};
window.__KBL=window.__KBL||{};window.__KBL.de=act;
})();
