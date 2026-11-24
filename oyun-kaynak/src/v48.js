/* =====================================================================
   v48 · Rütbeye uygun olaylar
   Binbaşı ve üstü (ve devlet makamı) için er/erbaş hayatına ait olaylar
   ("içtimada ol", "botlarını ararken geç kal", koğuş cezaları…) artık çıkmaz;
   yerine komutana yakışan karşılıkları gelir: birlik denetimi, yatak başı
   içtimayı denetlemek, karargâh gerginliği…
   ===================================================================== */
const HIGH48 = () => !!S && (S.rank >= 11 || !!S.pol);
const ALT48 = {
  'Gece alarmı': () => ({ti: 'Habersiz alarm tatbikatı', body: '<p>Saat 03:00. Bağlı birliklerin ne kadar hazır olduğunu görmek için habersiz alarm verdirdin. Hazırlık süresi kronometreyle ölçülüyor.</p>',
    ch: [['Sahaya in, yatak başı içtimayı ve teçhizatı bizzat denetle', {disiplin: 2, lider: 1}, () => { S.trust = clamp(S.trust + 3); S.fatigue = clamp(S.fatigue + 8) }],
         ['Komuta merkezinden takip et, sabah raporunu iste', {strat: 1}, () => { S.fatigue = clamp(S.fatigue + 3) }]]}),
  'Sürpriz teftiş': () => ({ti: 'Birlik denetimi', body: '<p>Bugün bağlı birliklerinden birine habersiz denetime gidiyorsun. Komutanlar seni beklemiyor.</p>',
    ch: [['Koğuşları, silah bakımını ve mutfağı tek tek denetle', {disiplin: 2, lider: 1}, () => { S.trust = clamp(S.trust + 4); S.fatigue = clamp(S.fatigue + 6) }],
         ['Komutanlarla toplantı yap, eksiklerin listesini iste', {strat: 1}, () => { S.trust = clamp(S.trust + 1) }]]}),
  'Koğuşta provokasyon': () => ({ti: 'Karargâhta gerginlik', body: '<p>Brifingde iki kurmay subay arasındaki tartışma büyüdü. Herkes senin ne diyeceğini bekliyor.</p>',
    ch: [['İkisini ayrı ayrı dinle, kararı gerekçesiyle sen ver', {lider: 2, disiplin: 1}, () => { S.trust = clamp(S.trust + 2) }],
         ['Toplantıyı bitir, konuyu yazılı rapora bağla', {disiplin: 1}]]}),
  'Yağmurda talim': () => ({ti: 'Sağanakta tatbikat', body: '<p>Tugay tatbikatını bütün gün yağmur altında gözlemledin. Birlikler zorlandı ama düzen bozulmadı.</p>', e: {strat: 1, mental: -1}, fat: 6}),
  'Takdir': () => ({ti: 'Takdir', body: `<p>${esc(cmdr())} brifingde komutandaki birlikleri örnek gösterdi.</p>`, e: {mental: 6, lider: 1}}),
  'Birlikler arası atış yarışması': () => ({ti: 'Atış yarışması töreni', body: '<p>Tugaylar arası atış yarışmasının ödüllerini sen verdin. Birliğin ikinci oldu.</p>',
    ch: [['Kazananları kutla, kendi birliğine ek atış eğitimi planla', {lider: 1}, () => { S.trust = clamp(S.trust + 2) }],
         ['Kısa bir konuşma yap ve törenden ayrıl', {mental: 2}]]}),
  'Koğuş arkadaşı': () => ({ti: 'Genç subayın mektubu', body: '<p>Emrindeki genç bir teğmen, şehit düşen erinin ailesine yazdığı taziye mektubunu okumanı rica etti.</p>',
    ch: [['Mektubu birlikte düzeltin, altına sen de bir not ekle', {mental: 4, lider: 1}], ['Kısa bir öneri ver, işine dön', {}]]}),
  'Silah bakım denetimi': () => ({ti: 'Cephanelik denetimi', body: '<p>Bağlı birliklerin cephanelik ve silah bakım kayıtlarını inceledin. Bir taburda eksikler var.</p>',
    ch: [['Tabur komutanını çağır, bir hafta süre ver ve takip et', {disiplin: 2}, () => { S.trust = clamp(S.trust + 2) }], ['Rapora not düş, sonra bakarsın', {}, () => { S.trust = clamp(S.trust - 1) }]]})
};
(function () {
  try {
    EV.forEach(ev => {
      const of = ev.f; ev.f0 = of;
      ev.f = function () { const r = of.apply(this, arguments); if (HIGH48() && r && ALT48[r.ti]) return ALT48[r.ti](); return r };
    });
  } catch (e) {}
})();
/* er/erbaş hayatına özgü olaylar (nöbet, 40 km yürüyüş, kantin borcu…) yüksek rütbede hiç çıkmasın */
const LOWONLY48 = ['Yağmurda 40 kilometre', 'Gece nöbetinde ses', 'Kantin borcu', 'Eğitim filmi gecesi', 'Astının hatası', 'Usta asker'];
(function () { try { EV.forEach(ev => { const src = String(ev.f0 || ev.f); if (LOWONLY48.some(t => src.includes("ti:'" + t + "'"))) { const oc = ev.c; ev.c = function () { return !HIGH48() && oc.apply(this, arguments) } } }) } catch (e) {} })();
/* koğuş olayları (ranza, koğuş cezası, bot şakası…) subaylar için çıkmasın */
{ const _ke = kogusEvent; kogusEvent = function () { if (S && S.rank >= 8) return; return _ke.apply(this, arguments) } }

`Habersiz alarm tatbikatı|Surprise alert drill|抜き打ち警報訓練|Simulacro de alerta sorpresa|Exercice d'alerte surprise|Unangekündigte Alarmübung
Saat 03:00. Bağlı birliklerin ne kadar hazır olduğunu görmek için habersiz alarm verdirdin. Hazırlık süresi kronometreyle ölçülüyor.|03:00. You ordered a surprise alert to test how ready your units are. Their readiness time is being clocked.|午前3時。部隊の即応性を確かめるため抜き打ちの警報を出させた。準備時間が計測されている。|Las 03:00. Ordenaste una alerta sorpresa para comprobar la preparación de tus unidades. Se cronometra su tiempo de respuesta.|03 h 00. Tu as déclenché une alerte surprise pour tester la préparation de tes unités. Leur temps de réaction est chronométré.|03:00 Uhr. Du hast einen unangekündigten Alarm ausgelöst, um die Bereitschaft deiner Einheiten zu prüfen. Die Zeit wird gestoppt.
Sahaya in, yatak başı içtimayı ve teçhizatı bizzat denetle|Go down yourself and inspect the bedside roll call and gear|自ら現場に出て点呼と装備を確認する|Baja tú mismo y revisa la formación y el equipo|Descends sur place et inspecte l'appel et l'équipement|Geh selbst hin und kontrolliere Appell und Ausrüstung
Komuta merkezinden takip et, sabah raporunu iste|Follow from the command center and ask for a morning report|司令部から見守り、朝の報告を求める|Síguelo desde el centro de mando y pide un informe por la mañana|Suis depuis le centre de commandement et demande un rapport le matin|Verfolge es von der Kommandozentrale und fordere einen Morgenbericht an
Birlik denetimi|Unit inspection|部隊視察|Inspección de unidad|Inspection d'unité|Truppeninspektion
Bugün bağlı birliklerinden birine habersiz denetime gidiyorsun. Komutanlar seni beklemiyor.|Today you pay a surprise inspection visit to one of your units. Its commanders aren't expecting you.|今日は配下の部隊の一つを抜き打ちで視察する。指揮官たちは予期していない。|Hoy haces una inspección sorpresa a una de tus unidades. Sus mandos no te esperan.|Aujourd'hui, tu inspectes à l'improviste l'une de tes unités. Ses chefs ne t'attendent pas.|Heute besuchst du unangekündigt eine deiner Einheiten. Die Kommandeure erwarten dich nicht.
Koğuşları, silah bakımını ve mutfağı tek tek denetle|Inspect the barracks, weapon care and kitchen one by one|兵舎・武器整備・炊事場を一つずつ確認する|Revisa uno a uno los dormitorios, el mantenimiento de armas y la cocina|Inspecte un à un les chambrées, l'entretien des armes et la cuisine|Kontrolliere Unterkünfte, Waffenpflege und Küche einzeln
Komutanlarla toplantı yap, eksiklerin listesini iste|Meet the commanders and ask for a list of shortcomings|指揮官と会議し、不備のリストを求める|Reúnete con los mandos y pide una lista de carencias|Réunis les chefs et demande la liste des manques|Triff die Kommandeure und fordere eine Mängelliste an
Karargâhta gerginlik|Tension at headquarters|司令部の緊張|Tensión en el cuartel general|Tension au quartier général|Spannung im Hauptquartier
Brifingde iki kurmay subay arasındaki tartışma büyüdü. Herkes senin ne diyeceğini bekliyor.|An argument between two staff officers escalated during the briefing. Everyone is waiting for your word.|ブリーフィングで二人の参謀の口論が激しくなった。皆があなたの言葉を待っている。|En la reunión, la discusión entre dos oficiales de Estado Mayor fue a más. Todos esperan tu palabra.|Pendant le briefing, la dispute entre deux officiers d'état-major s'est envenimée. Tout le monde attend ta décision.|Im Briefing eskalierte ein Streit zwischen zwei Stabsoffizieren. Alle warten auf dein Wort.
İkisini ayrı ayrı dinle, kararı gerekçesiyle sen ver|Hear each separately and make the call with your reasons|二人を別々に聞き、理由を添えて自ら決める|Escucha a cada uno por separado y decide tú con argumentos|Écoute chacun séparément et tranche en expliquant pourquoi|Hör beide einzeln an und entscheide begründet selbst
Toplantıyı bitir, konuyu yazılı rapora bağla|End the meeting and ask for a written report|会議を終え、書面報告にまとめさせる|Termina la reunión y pide un informe por escrito|Mets fin à la réunion et exige un rapport écrit|Beende die Sitzung und verlange einen schriftlichen Bericht
Sağanakta tatbikat|Exercise in the downpour|豪雨の中の演習|Maniobras bajo el aguacero|Exercice sous l'averse|Übung im Platzregen
Tugay tatbikatını bütün gün yağmur altında gözlemledin. Birlikler zorlandı ama düzen bozulmadı.|You watched the brigade exercise in the rain all day. The units struggled but held formation.|一日中雨の中で旅団演習を視察した。部隊は苦戦したが規律は崩れなかった。|Observaste las maniobras de la brigada bajo la lluvia todo el día. Las unidades sufrieron, pero mantuvieron el orden.|Tu as observé l'exercice de la brigade sous la pluie toute la journée. Les unités ont peiné mais sont restées en ordre.|Du hast die Brigadeübung den ganzen Tag im Regen beobachtet. Die Einheiten hatten zu kämpfen, blieben aber geordnet.
Atış yarışması töreni|Shooting competition ceremony|射撃大会の表彰式|Ceremonia del concurso de tiro|Cérémonie du concours de tir|Siegerehrung des Schießwettbewerbs
Tugaylar arası atış yarışmasının ödüllerini sen verdin. Birliğin ikinci oldu.|You handed out the prizes at the inter-brigade shooting competition. Your unit came second.|旅団対抗射撃大会で表彰を行った。あなたの部隊は2位だった。|Entregaste los premios del concurso de tiro entre brigadas. Tu unidad quedó segunda.|Tu as remis les prix du concours de tir inter-brigades. Ton unité a fini deuxième.|Du hast beim Schießwettbewerb der Brigaden die Preise überreicht. Deine Einheit wurde Zweite.
Kazananları kutla, kendi birliğine ek atış eğitimi planla|Congratulate the winners and plan extra marksmanship training|勝者を称え、自隊に追加射撃訓練を計画する|Felicita a los ganadores y planifica más entrenamiento de tiro|Félicite les gagnants et planifie un entraînement de tir supplémentaire|Gratuliere den Siegern und plane zusätzliches Schießtraining
Genç subayın mektubu|A young officer's letter|若い将校の手紙|La carta de un joven oficial|La lettre d'un jeune officier|Der Brief eines jungen Offiziers
Emrindeki genç bir teğmen, şehit düşen erinin ailesine yazdığı taziye mektubunu okumanı rica etti.|A young lieutenant under your command asked you to read the condolence letter he wrote to the family of a fallen soldier.|配下の若い少尉が、戦死した兵の家族に宛てたお悔やみの手紙を読んでほしいと頼んできた。|Un joven teniente a tus órdenes te pidió que leyeras la carta de pésame que escribió a la familia de un soldado caído.|Un jeune lieutenant sous tes ordres t'a demandé de relire la lettre de condoléances qu'il a écrite à la famille d'un soldat tombé.|Ein junger Leutnant unter deinem Kommando bat dich, seinen Kondolenzbrief an die Familie eines gefallenen Soldaten zu lesen.
Mektubu birlikte düzeltin, altına sen de bir not ekle|Polish it together and add a note of your own|一緒に手直しし、自分も一言添える|Corregidla juntos y añade tú una nota|Corrigez-la ensemble et ajoute un mot de ta main|Überarbeitet ihn gemeinsam und füge selbst eine Notiz hinzu
Kısa bir öneri ver, işine dön|Give a quick tip and get back to work|短く助言して仕事に戻る|Da un consejo rápido y vuelve al trabajo|Donne un conseil rapide et retourne au travail|Gib einen kurzen Rat und mach weiter
Cephanelik denetimi|Armory inspection|武器庫の監査|Inspección del arsenal|Inspection de l'armurerie|Waffenkammer-Inspektion
Bağlı birliklerin cephanelik ve silah bakım kayıtlarını inceledin. Bir taburda eksikler var.|You reviewed the armory and weapon-maintenance records of your units. One battalion has shortcomings.|配下部隊の武器庫と整備記録を確認した。ある大隊に不備がある。|Revisaste los registros de arsenal y mantenimiento de tus unidades. Un batallón tiene carencias.|Tu as examiné les registres d'armurerie et d'entretien de tes unités. Un bataillon présente des manques.|Du hast die Waffenkammer- und Wartungsprotokolle deiner Einheiten geprüft. Ein Bataillon hat Mängel.
Tabur komutanını çağır, bir hafta süre ver ve takip et|Summon the battalion commander, give a week and follow up|大隊長を呼び、1週間の猶予を与えて追跡する|Llama al jefe del batallón, dale una semana y haz seguimiento|Convoque le chef de bataillon, donne-lui une semaine et assure le suivi|Bestell den Bataillonskommandeur ein, gib eine Woche Frist und kontrolliere nach
Rapora not düş, sonra bakarsın|Note it in the report and look later|報告書にメモして後で確認する|Anótalo en el informe y ya lo mirarás|Note-le dans le rapport et vois plus tard|Notier es im Bericht und sieh später nach
Kısa bir konuşma yap ve törenden ayrıl|Give a short speech and leave the ceremony|短いスピーチをして式を後にする|Da un breve discurso y abandona la ceremonia|Fais un bref discours et quitte la cérémonie|Halte eine kurze Rede und verlasse die Zeremonie`.split('\n').forEach(l => { const c = l.split('|'); if (c.length === 6) I18N[c[0]] = c });
i18Add(`{} brifingde komutandaki birlikleri örnek gösterdi.|$1 held up the units under your command as an example in the briefing.|$1はブリーフィングであなたの指揮下の部隊を手本として挙げた。|$1 puso como ejemplo a tus unidades en la reunión.|$1 a cité tes unités en exemple pendant le briefing.|$1 hob im Briefing deine Einheiten als Vorbild hervor.`);
