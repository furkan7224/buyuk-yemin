/* =====================================================================
   v49 · 1.1.5
   1) Komuta merkezi: Mareşal ve devlet makamında harekâtı İHA görüntüsünden
      canlı izle, tim lideriyle telsizden konuş, her aşamada emri sen ver.
   2) Harekât haritası: fethedilen bölgeler haritada; bölgeye dokun, yönet.
   ===================================================================== */

/* ---------- 1) KOMUTA MERKEZİ ---------- */
const CC49 = [
 {ti: 'Rehine kurtarma', in: 'Sınır köyündeki bir evde iki mühendis rehin tutuluyor. Bozkurt timi köyün iki kilometre dışında. Canlı yayın ekranında.', lay: 0, ph: [
  {b: 'Köy girişindeyiz. Evin önünde iki silahlı nöbetçi var. Emir bekliyorum.', s: 'Arka bahçede kimse görünmüyor. Çatıda bir ısı izi var.',
   o: [['Arka bahçeden sessiz yaklaşın, çatıyı nişancıyla kapatın', 1], ['Önden iki nöbetçiyi aynı anda etkisiz hâle getirin', .5], ['Bekleyin, takviye gelsin', .15]]},
  {b: 'Duvarın dibindeyiz. İçeriden ses geliyor, rehineler alt katta olabilir.', s: 'Evin yanına bir araç yanaştı, üç kişi indi.',
   o: [['Nişancı araçtakileri gözetlesin, tim hemen içeri girsin', 1], ['Önce araçtakileri vurun', .4], ['Çekilin, yeni plan yapalım', .1]]},
  {b: 'İçerideyiz! Rehineler alt katta, biri yaralı. Bir şüpheli bodruma kaçtı.', s: 'Tahliye helikopteri dört dakika uzakta.',
   o: [['Rehineleri çıkarın, bodrumu kapatıp tutun', 1], ['Şüpheliyi bodrumda yakalayın', .5], ['Rehineleri bırakın, şüpheliyi kovalayın', .1]]}],
  w: 'Rehineler sağ salim kurtarıldı. Tim kayıpsız döndü.', l: 'Rehinelerden biri yaralandı, şüpheliler kaçtı.'},
 {ti: 'Silah deposu baskını', in: 'İstihbarat, sınırın ötesinde saldırılarda kullanılan bir silah deposu tespit etti. Bozkurt timi gece sızmaya hazır.', lay: 1, ph: [
  {b: 'Depoya sekiz yüz metre kala mevzi aldık. Etraf açık arazi.', s: 'Depo çevresinde dört kişilik devriye dönüyor, arası yaklaşık iki dakika.',
   o: [['Devriye arasındaki boşlukta kuru dere yatağından ilerleyin', 1], ['Açık araziden hızla koşarak geçin', .4], ['Depoyu uzaktan topçuyla vurdurun', .3]]},
  {b: 'Depo kapısındayız. Kilit sağlam, içeride jeneratör sesi var.', s: 'Doğu tarafta bir pencere açık.',
   o: [['Açık pencereden sessizce girin', 1], ['Kapıyı patlayıcıyla açın', .5], ['Jeneratörü kesip karanlıkta bekleyin', .3]]},
  {b: 'İçerisi roket ve mühimmat dolu, belgeler de var. Devriye geri dönüyor!', s: 'İki araç depoya yaklaşıyor, üç dakikanız var.',
   o: [['Belgeleri alın, depoyu imha düzeneğiyle havaya uçurup çekilin', 1], ['Her şeyi taşımaya çalışın', .2], ['Depoyu bırakın, hemen çekilin', .4]]}],
  w: 'Depo imha edildi, belgeler istihbarata ulaştı.', l: 'Tim çatışmaya girdi, depo kısmen imha edilebildi.'},
 {ti: 'Tepe karakolunu geri al', in: 'Düşman gece baskınıyla sınırdaki tepe karakolunu ele geçirdi. Bozkurt timi yamacın altında, emrini bekliyor.', lay: 2, ph: [
  {b: 'Yamacın altındayız. Karakol tam tepemizde.', s: 'Tepede bir ağır makineli mevzisi ve altı asker görüyorum.',
   o: [['Bir takım ateşle tutsun, diğeri kuzey yamaçtan dolaşsın', 1], ['Bütün tim cepheden hücum etsin', .2], ['Hava desteği gelene kadar bekleyin', .5]]},
  {b: 'Kuzey yamaçtayız. Makineli bize sırtı dönük. Bir asker yaralı ama yürüyebiliyor.', s: 'Düşman takviyesi vadiden yaklaşıyor, on dakika.',
   o: [['Makineliyi el bombasıyla susturun, yaralıyı sıhhiyeci taşısın', 1], ['Yaralıyı geride bırakıp hızla ilerleyin', .3], ['Geri çekilip yaralıyı tahliye edin', .4]]},
  {b: 'Karakol bizde! Düşman takviyesi yamaca tırmanıyor.', s: 'Topçu bataryası hazır, koordinat bekliyor.',
   o: [['Topçuya vadi yolunun koordinatını ver, tim mevzileri tutsun', 1], ['Karakolu bırakıp çekilin', .1], ['Tim takviyeyi karşılamak için aşağı insin', .3]]}],
  w: 'Karakol geri alındı, sınır hattı güvende.', l: 'Karakol tutulamadı, tim geri çekilmek zorunda kaldı.'},
 {ti: 'Konvoy koruma', in: 'Cepheye mühimmat taşıyan konvoy dağ yolunda ilerliyor. Bozkurt timi konvoyun önünde, İHA havada.', lay: 3, ph: [
  {b: 'Konvoyun önündeyiz. Yolda bir köprü var, altı kontrol edilmedi.', s: 'Köprünün altında şüpheli bir hareket var.',
   o: [['Konvoyu durdurun, istihkâm köprüyü arasın', 1], ['Hızla köprüden geçin', .2], ['Köprüyü dolaşan toprak yola sapın', .6]]},
  {b: 'Köprü altında tuzaklanmış patlayıcı bulundu, etkisiz hâle getiriliyor. Sırtta bir dürbün parladı.', s: 'Sırtta dört kişi var, birinde roketatar.',
   o: [['Tim sırtı kuşatsın, konvoy siper alsın', 1], ['Sırtı makineliyle tarayın', .5], ['Patlayıcıyı bırakıp yola devam edin', .1]]},
  {b: 'Sırttakiler kaçıyor, biri teslim oldu. Konvoy hazır.', s: 'Kaçanlar bir köy yoluna giriyor.',
   o: [['Şahin kaçanları izlesin, konvoy yoluna devam etsin', 1], ['Köye kadar kovalayın', .3], ['Tutukluyu bırakın, hemen dönün', .1]]}],
  w: 'Konvoy kayıpsız hedefe ulaştı, bir şüpheli yakalandı.', l: 'Konvoy hasar aldı, yaralılarımız var.'}];

const cc49On = () => !!(S && S.rank >= 18);
const cc49Ready = () => cc49On() && S.cc49 !== S.day;
let CCR49 = null;

/* İHA görüntüsü (dil içermeyen HUD) */
function feed49(lay, ph, done, lbl) {
 const P = [[[40, 150], [150, 112], [212, 96]], [[30, 40], [140, 70], [205, 88]], [[60, 160], [118, 66], [190, 58]], [[30, 120], [130, 120], [230, 112]]][lay];
 const T = [[225, 86], [228, 92], [196, 50], [250, 70]][lay];
 const tm = P[Math.min(ph, 2)];
 const en = [[T[0] + 22, T[1] + 14], [T[0] - 20, T[1] + 22], [T[0] + 8, T[1] - 18], [T[0] + 34, T[1] - 6]];
 let s = '';
 for (let i = 0; i < 7; i++) s += `<ellipse cx="${80 + i * 30}" cy="${70 + (i % 3) * 30}" rx="${60 + i * 9}" ry="${26 + i * 5}" fill="none" stroke="#6fe08a" stroke-opacity=".09"/>`;
 if (lay === 3) s += `<path d="M0 130 C80 118 150 128 320 104" stroke="#9adf9c" stroke-opacity=".35" stroke-width="7" fill="none"/><rect x="150" y="114" width="26" height="14" fill="none" stroke="#c7f5c9" stroke-opacity=".6"/>`;
 else s += `<rect x="${T[0] - 14}" y="${T[1] - 10}" width="28" height="20" fill="#1c3524" stroke="#c7f5c9" stroke-opacity=".7"/><rect x="${T[0] + 18}" y="${T[1] - 4}" width="14" height="12" fill="#183020" stroke="#c7f5c9" stroke-opacity=".45"/>`;
 en.forEach(([x, y], i) => { const dead = done && i < 3; s += `<circle cx="${x}" cy="${y}" r="3.2" fill="${dead ? '#556' : '#ff5a4a'}"${dead ? '' : ' class="cc49-blink"'}/>` });
 for (let i = 0; i < 4; i++) s += `<circle cx="${tm[0] + (i % 2) * 7 - 3}" cy="${tm[1] + Math.floor(i / 2) * 7 - 3}" r="3" fill="#59b8ff" class="cc49-pulse"/>`;
 if (ph > 0) s += `<path d="M${P[0][0]} ${P[0][1]} L${P[1][0]} ${P[1][1]}${ph > 1 ? ` L${P[2][0]} ${P[2][1]}` : ''}" stroke="#59b8ff" stroke-dasharray="4 4" stroke-opacity=".7" fill="none"/>`;
 s += `<g stroke="#e9f7ea" stroke-opacity=".75" fill="none"><circle cx="${T[0]}" cy="${T[1]}" r="20"/><path d="M${T[0] - 28} ${T[1]}h14M${T[0] + 14} ${T[1]}h14M${T[0]} ${T[1] - 28}v14M${T[0]} ${T[1] + 14}v14"/></g>`;
 const mm = String(3 + ph).padStart(2, '0') + ':' + String(17 + ph * 13).padStart(2, '0');
 return `<svg class="cc49-feed" viewBox="0 0 320 180" role="img" aria-label="UAV"><defs><pattern id="sl49" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="#000" fill-opacity=".22"/></pattern><radialGradient id="vg49"><stop offset=".6" stop-opacity="0"/><stop offset="1" stop-opacity=".7"/></radialGradient></defs>
 <rect width="320" height="180" fill="#0c1a12"/>${s}<rect width="320" height="180" fill="url(#sl49)"/><rect width="320" height="180" fill="url(#vg49)"/>
 <g font-family="ui-monospace,Menlo,monospace" font-size="9" fill="#c7f5c9"><text x="10" y="16">UAV-2 <tspan fill="#ff5a4a" class="cc49-blink">●</tspan> REC</text><text x="310" y="16" text-anchor="end">${mm}</text><text x="10" y="172">37.${41 + lay}N 41.${8 + ph}E · ALT 3200</text><text x="310" y="172" text-anchor="end">${lbl || (Math.min(ph + 1, 3) + '/3')}</text></g>
 <path d="M6 24V6h18M296 6h18v18M314 156v18h-18M24 174H6v-18" stroke="#c7f5c9" stroke-opacity=".6" fill="none"/></svg>`
}
function radio49(who, role, txt) { return `<div class="cc49-r ${who === 'Şahin-2' ? 's' : ''}"><div class="cc49-w"><b>${esc(who)}</b> <span>${esc(role)}</span></div><span class="cc49-t">${esc(txt)}</span></div>` }
/* Komuta emirleri: sahadaki kararı tim verir, sen komuta emri verirsin */
const ORD49 = [['plan', 'Planı uygula, inisiyatifi tim liderine bırak'], ['giz', 'Gizliliği koru, sessiz ilerleyin'], ['hiz', 'Tempoyu artırın, hızlı bitirin'], ['temkin', 'Temkinli olun, kayıp vermeyin']];
const CC49T = [['giz', 'hiz', 'temkin'], ['giz', 'giz', 'hiz'], ['plan', 'hiz', 'temkin'], ['temkin', 'plan', 'plan']];
const CC49F = ['gizli', 'gizli', 'agir', 'agir'];
const TAG49 = {giz: ['giz'], hiz: ['hiz', 'atk'], temkin: ['yavas']};
/* tim, komuta emrine göre seçeneklerden birini kendisi seçer */
function teamPick49(opts, ord, bestBoost, k0) {
 const qs = opts.map(o => o[1]); const bq = Math.max(...qs);
 let k = (k0 || 2.6) + (S.st.lider || 30) / 45 + (ord === 'plan' ? 1.1 : 0);
 const w = opts.map((o, i) => { let x = Math.exp(k * o[1]); const tg = o[3] || ''; if (TAG49[ord] && TAG49[ord].includes(tg)) x *= 3; if (ord === 'temkin' && (tg === 'risk' || tg === 'kayip')) x *= .35; if (o[1] === bq && bestBoost) x *= bestBoost; return x });
 let r = R() * w.reduce((a, b) => a + b, 0); for (let i = 0; i < w.length; i++) { r -= w[i]; if (r <= 0) return i } return w.length - 1;
}
/* --- Devlet makamı: hazırlık -> canlı yayın -> komuta --- */
function cc49Start() {
 if (!cc49Ready()) return toast('Bugünkü harekât tamamlandı. Yarın yeni görev.');
 const pool = CC49.map((_, i) => i).filter(i => i !== S.cc49l);
 const i = pool[Math.floor(R() * pool.length)];
 CCR49 = {i, p: 0, sc: 0, last: null};
 const C = CC49[i];
 pushModal({k: 'Harekât hazırlığı · Tertip', ti: C.ti, art: feed49(C.lay, 0, false), body: `<p>${esc(C.in)}</p><div class="sec-t">Birliğin nasıl bir tertiple girsin?</div>`,
  ch: PKG.map(([k, n]) => ({t: n, fn: () => { CCR49.pkg = k; cc49Sup() }}))});
}
function cc49Sup() {
 const C = CC49[CCR49.i]; const L = supports().slice(0, 4);
 pushModal({k: 'Harekât hazırlığı · Destek', ti: C.ti, body: `<div class="sec-t">Hangi destek unsuru hazır beklesin?</div>${L.map(([k, n, d]) => `<div class="small"><b>${esc(n)}</b> <span class="muted">${esc(d)}</span></div>`).join('')}`,
  ch: L.map(([k, n]) => ({t: n, fn: () => { CCR49.sup = k; cc49Ready2() }}))});
}
function cc49Ready2() {
 const R_ = CCR49, C = CC49[R_.i]; const pn = PKG.find(p => p[0] === R_.pkg)[1], sn = (supports().find(s => s[0] === R_.sup) || ['', '—'])[1];
 pushModal({k: 'Komuta merkezi', ti: 'Hazırlık tamam', art: feed49(C.lay, 0, false), body: `<div class="aar"><div><span>Tertip</span><b>${esc(pn)}</b></div><div><span>Destek</span><b>${esc(sn)}</b></div></div><p class="small muted">${esc('Tim sahadaki kararı kendisi verip uygulayacak. Sen komuta emrini ver.')}</p>`,
  ch: [{t: 'Harekâta canlı yayınla başla', fn: () => cc49Phase()}]});
}
function cc49Phase() {
 const R_ = CCR49; if (!R_) return; const C = CC49[R_.i], P = C.ph[R_.p];
 const ack = R_.last ? `<div class="lc49-ack ${R_.last[1] ? 'ok' : 'bad'}"><span>Tim kararı</span> <b>${esc(R_.last[0])}</b> <em>${esc(R_.last[1] ? 'İcra başarılı' : 'İcra aksadı')}</em></div>` : '';
 const ch = ORD49.map(([k, t]) => ({t, fn: () => cc49Order(k)}));
 if (R_.sup && R_.sup !== 'yok' && !R_.used) ch.push({t: 'Destek unsurunu devreye sok', fn: () => { R_.used = 1; cc49Order('destek') }});
 pushModal({k: 'Canlı yayın · Komuta', ti: C.ti, art: feed49(C.lay, R_.p, false),
  body: `${ack}${radio49('Bozkurt-1', 'Tim lideri', P.b)}${radio49('Şahin-2', 'İHA operatörü', P.s)}<div class="sec-t">Komuta emrin ne?</div><p class="small muted">${esc('Tim sahadaki kararı kendisi verip uygulayacak. Sen komuta emrini ver.')}</p>`, ch});
}
function cc49Order(ord) {
 const R_ = CCR49; if (!R_) return; const C = CC49[R_.i], P = C.ph[R_.p];
 const fit = R_.pkg === CC49F[R_.i];
 const ideal = CC49T[R_.i][R_.p];
 const boost = (ord === ideal ? 3 : 1) * (ord === 'destek' ? 2.5 : 1);
 const j = teamPick49(P.o, ord === 'destek' ? 'plan' : ord, boost, fit ? 3.2 : 2.4);
 const q = P.o[j][1]; const ok = R() < clamp(.5 + q * .35 + (fit ? .08 : 0) + (ord === 'destek' ? .1 : 0), .1, .95);
 R_.sc += q * (ok ? 1 : .6); R_.last = [P.o[j][0], ok]; R_.p++;
 if (R_.p < C.ph.length) cc49Phase(); else cc49End();
}
function cc49End() {
 const R_ = CCR49; CCR49 = null; if (!R_) return; const C = CC49[R_.i];
 const avg = R_.sc / C.ph.length; const ok = R() < clamp(.1 + avg * .85, .05, .95);
 const P = S.pol, me = S.nation; S.cc49 = S.day; S.cc49l = R_.i; S.cc49n = (S.cc49n || 0) + (ok ? 1 : 0);
 const fx = [];
 const ack = R_.last ? `<div class="lc49-ack ${R_.last[1] ? 'ok' : 'bad'}"><span>Tim kararı</span> <b>${esc(R_.last[0])}</b> <em>${esc(R_.last[1] ? 'İcra başarılı' : 'İcra aksadı')}</em></div>` : '';
 if (ok) {
  if (P) { P.guv = clamp(P.guv + 6); P.onay = clamp(P.onay + 3); fx.push('İç güvenlik +6', 'Halk onayı +3') }
  S.trust = clamp(S.trust + 5); S.xp += 60; addSt('mental', 4); fx.push('Güven +5', 'Tecrübe +60');
  let reg = '';
  if (S.world && S.world.war && typeof transfer === 'function') { const n = transfer(S.world.war, me, 1); if (n) { S.warScore = (S.warScore || 0) + 1; reg = `<p class="small green">${esc('Cephede bir bölge ele geçirildi. Haritada gör: Dünya › Bölgeler')}</p>` } }
  pushModal({k: 'Harekât sonucu', ti: 'Harekât başarılı', art: feed49(C.lay, 2, true), body: `${ack}${radio49('Bozkurt-1', 'Tim lideri', C.w)}${reg}<div class="fx">${fx.map(t => `<span class="p">${esc(t)}</span>`).join('')}</div>`});
 } else {
  if (P) { P.onay = clamp(P.onay - 4); P.guv = clamp(P.guv - 2); fx.push('Halk onayı -4', 'İç güvenlik -2') }
  addSt('mental', -5); fx.push('Moral -5');
  pushModal({k: 'Harekât sonucu', ti: 'Harekât aksadı', art: feed49(C.lay, 2, false), body: `${ack}${radio49('Bozkurt-1', 'Tim lideri', C.l)}<div class="fx">${fx.map(t => `<span class="p">${esc(t)}</span>`).join('')}</div><p class="small muted">${esc('Yarın yeni bir harekât emrine hazır olacaklar.')}</p>`});
 }
 log(C.ti + ': ' + (ok ? 'başarılı' : 'aksadı') + '.'); save(); render();
}
function ccCard49() {
 if (!cc49On()) return '';
 const rd = cc49Ready();
 return `<div class="card cc49c"><div class="cc49-mini">${feed49(S.day % 4, 1, false)}</div><div class="lbl acc">Yeni harekât emri · Komuta merkezi</div><p class="small">Tertibi ve desteği seç, harekâtı canlı yayından izle. Sahadaki kararları tim verir, komuta emirleri senden.</p>${(S.cc49n || 0) ? `<div class="small muted">Başarılı harekâtlar: ${S.cc49n}</div>` : ''}<button class="btn block" data-a="cc49" ${rd ? '' : 'disabled'}>${rd ? 'Harekâtı hazırla' : 'Bugünkü harekât tamamlandı. Yarın yeni görev.'}</button></div>`
}
{const _co = civilOpCard31; civilOpCard31 = function () { const h = _co.apply(this, arguments); return h.replace('<div class="card dos">', ccCard49() + '$&').replace('<div class="card"><p class="small muted">Genelkurmay', ccCard49() + '$&') }}

/* --- Mareşal (ordu başı): normal harekât; hazırlık seçilir, canlı yayınla başlatılır, sorulara tim karar verir --- */
const lc49On = () => !!(S && S.rank >= 18 && !civil31());
{const _op = opPrep; opPrep = function (v) {
 if (!lc49On()) return _op.apply(this, arguments);
 const [p, s] = String(v).split('|'); const o = S.op; if (!o || o.prep) return; if (p) o.pkgSel = p; if (s) o.supSel = s; save(); render() }}
function lcGo49() {
 const o = S.op; if (!o || o.prep || !o.pkgSel || !o.supSel) return; if (!useAP()) return;
 o.prep = {p: o.pkgSel, s: o.supSel}; o.lc49 = 1; if (typeof opIntro === 'function') opIntro(); save(); render();
}
function lcOrder49(ord) {
 const o = S.op; if (!o || !o.prep || S.mDone) return; upgradeOp(); const def = OPS.find(x => x.id === o.id);
 const [sit, opts] = stepData(o, o.st, def); if (!opts || !opts.length) return;
 const fit = o.prep.p === fitOf(def.id);
 const j = teamPick49(opts, ord, 1, fit ? 3.2 : 2.6);
 o.ord49 = (o.ord49 || 0) + 1; clearTimeout(UI.ktT); clearInterval(UI.ktI); UI.kt = null;
 opStep(String(j));
}
function lcSection49(o, def) {
 const [sit, opts] = stepData(o, o.st, def); const n = (o.steps || []).length || 6;
 const last = (o.notes || []).length ? o.notes[o.notes.length - 1] : null;
 const lay = Math.abs([...String(o.id)].reduce((a, c) => a + c.charCodeAt(0), 0)) % 4;
 return `<section id="evc" class="evc lc49"><div class="evc-bar"><span class="evc-live"><i></i>${esc('Canlı yayın · Komuta')}</span><span class="evc-st">${o.st + 1}/${n}</span></div>
 <div class="lc49-feed">${feed49(lay, Math.min(2, Math.floor(o.st * 3 / n)), false, (o.st + 1) + '/' + n)}</div>
 ${last ? `<div class="lc49-ack ${last[3] ? 'ok' : 'bad'}"><span>Tim kararı</span> <b>${esc(opText(last[1]))}</b> <em>${esc(last[3] ? 'İcra başarılı' : 'İcra aksadı')}</em></div>` : ''}
 <div class="evc-body"><div class="evc-k">${esc(stepLabel(o, o.st))}</div>${radio49((S.tim && S.tim.name ? S.tim.name : 'Bozkurt') + '-1', 'Tim lideri', opText(sit))}</div>
 <div class="evc-q"><span>Komuta emrin ne?</span><small>${esc('Tim sahadaki kararı kendisi verip uygulayacak. Sen komuta emrini ver.')}</small></div>
 <div class="evc-opts">${ORD49.map(([k, t], j) => `<button class="opt op2 evo" data-a="lc49" data-v="${k}"><span class="k">${'ABCD'[j]}</span><span class="grow"><span class="evt">${esc(t)}</span></span></button>`).join('')}</div></section>`
}
{const _vm = vMission; vMission = function () {
 const h = _vm.apply(this, arguments); if (!lc49On() || (UI.msub || 'op') !== 'op' || !S.op || S.izin) return h;
 const o = S.op;
 if (!o.prep) {
  const rdy = o.pkgSel && o.supSel;
  const btn = `<button class="btn block lc49-go" data-a="lc49go" ${rdy ? '' : 'disabled'}>${esc('Harekâta canlı yayınla başla')}</button>`;
  let x = h.replace(/(<div class="prep-go[^"]*">[\s\S]*?<small>)[\s\S]*?(<\/small><\/div>)/, `$1${esc('Seçimlerini yap, sonra harekâtı canlı yayınla başlat (1 eylem).')}$2${btn}`);
  return x;
 }
 if (S.mDone) return h;
 clearTimeout(UI.ktT); clearInterval(UI.ktI);
 const def = OPS.find(x => x.id === o.id);
 return h.replace(/<section id="evc"[\s\S]*?<\/section>/, lcSection49(o, def));
}}

/* ---------- 2) HAREKÂT HARİTASI ---------- */
function regMap49(sel) {
 const W = S.world, me = S.nation, Rg = S.regions || [];
 const rc = {}; Rg.forEach((r, i) => rc[r.c] = [r, i]);
 const focus = W.cells.map((k, i) => (k === me || rc[i] || (W.war && k === W.war)) ? i : -1).filter(i => i >= 0);
 let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
 (focus.length ? focus : W.cells.map((_, i) => i)).forEach(i => { const [x, y] = hxy(i); x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) });
 const pad = HR * 2.4; x0 -= pad; y0 -= pad; x1 += pad; y1 += pad;
 if (x1 - x0 < 150) { const c = (x0 + x1) / 2; x0 = c - 75; x1 = c + 75 }
 if (y1 - y0 < 90) { const c = (y0 + y1) / 2; y0 = c - 45; y1 = c + 45 }
 const acc = getAcc(); let s = '', top = '';
 W.cells.forEach((k, i) => {
  const [x, y] = hxy(i); const pts = [...Array(6)].map((_, j) => { const a = Math.PI / 180 * (60 * j - 90); return (x + HR * .93 * Math.cos(a)).toFixed(1) + ',' + (y + HR * .93 * Math.sin(a)).toFixed(1) }).join(' ');
  const R0 = rc[i];
  if (R0) {
   const r = R0[0], col = r.guv < 30 ? '#ff5a4a' : r.guv < 50 ? '#f3b54a' : '#5fd38a', on = sel && sel.c === i;
   top += `<g data-a="rg49" data-v="${i}" style="cursor:pointer"><polygon points="${pts}" fill="${NAT[k].c}" stroke="${on ? '#fff' : col}" stroke-width="${on ? 2.6 : 1.8}"${on ? ' class="rg49-on"' : ''}/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.6" fill="#0b0c09" stroke="${col}" stroke-width="1.4"/><text x="${x.toFixed(1)}" y="${(y + 2.6).toFixed(1)}" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Barlow Condensed,Arial Narrow,sans-serif">${R0[1] + 1}</text></g>`;
  } else {
   const mine = k === me, war = W.war === k;
   s += `<polygon points="${pts}" fill="${NAT[k].c}" fill-opacity="${mine ? .95 : .45}" stroke="${mine ? acc : war ? '#ff6a4a' : '#0b0c09'}" stroke-width="${mine || war ? 1.2 : .8}"/>`;
  }
 });
 NK.forEach(k => { const idx = W.cells.map((c, i) => c === k ? i : -1).filter(i => i >= 0 && !rc[i]); if (!idx.length) return; let sx = 0, sy = 0; idx.forEach(i => { const [x, y] = hxy(i); sx += x; sy += y }); const cx = sx / idx.length, cy = sy / idx.length;
  if (cx < x0 || cx > x1 || cy < y0 || cy > y1) return;
  s += `<svg x="${(cx - 8).toFixed(1)}" y="${(cy - 11).toFixed(1)}" width="16" height="11" viewBox="0 0 30 20" style="pointer-events:none">${flagInner(k)}</svg><text x="${cx.toFixed(1)}" y="${(cy + 8).toFixed(1)}" text-anchor="middle" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-weight="700" font-size="7.5" fill="#fff" stroke="#000" stroke-opacity=".6" stroke-width="2" paint-order="stroke" style="pointer-events:none">${natCode(k)}</text>` });
 const vb = `${x0.toFixed(0)} ${y0.toFixed(0)} ${(x1 - x0).toFixed(0)} ${(y1 - y0).toFixed(0)}`;
 return `<svg class="rg49-map" viewBox="${vb}" role="img" aria-label="Map"><defs><pattern id="rg49g" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern></defs><rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" fill="#0a1216"/><rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" fill="url(#rg49g)"/>${s}${top}</svg>`
}
function regCard49(sel) {
 const Rg = S.regions || [];
 const inc = Rg.reduce((a, r) => a + r.eko * r.pop * 1.5, 0), avg = Rg.length ? Math.round(Rg.reduce((a, r) => a + r.guv, 0) / Rg.length) : 0;
 return `<div class="card rg49c"><div class="sec-h"><h2>Harekât haritası</h2><span class="small muted">${Rg.length ? esc('Bir bölgeye dokun, yönetimini aç.') : ''}</span></div>
 <div class="rg49-stats"><div><small>Bölge</small><b>${Rg.length}</b></div><div><small>Günlük gelir</small><b>${money(Math.round(inc))}</b></div><div><small>Ort. güvenlik</small><b>${avg}</b></div></div>
 <div class="mapwrap rg49-wrap">${regMap49(sel)}</div>
 <div class="rg49-leg"><span><i style="background:${getAcc()}"></i>Senin toprağın</span><span><i style="background:#5fd38a"></i>Güvende</span><span><i style="background:#f3b54a"></i>Gergin</span><span><i style="background:#ff5a4a"></i>Güvenlik düşük</span></div>
 ${Rg.length > 1 ? `<div class="rg49-chips">${Rg.map((r, i) => `<button class="mini ${sel && sel.c === r.c ? 'on' : ''}" data-a="rg49" data-v="${r.c}"><b>${i + 1}</b> ${esc(r.n)}</button>`).join('')}</div>` : ''}</div>`
}
{const _vr = vRegions; vRegions = function () {
 const Rg = S.regions || []; if (!S.world) return _vr.apply(this, arguments);
 let sel = Rg.find(r => r.c === UI.rg49) || Rg[0] || null;
 let h; const keep = S.regions;
 try { if (sel) S.regions = [sel]; h = _vr.apply(this, arguments) } finally { S.regions = keep }
 const card = regCard49(sel) + (sel ? `<div class="sec-t">Seçili bölge</div>` : '');
 const k = h.indexOf('</p></div>');
 return k > 0 ? h.slice(0, k + 10) + card + h.slice(k + 10) : card + h;
}}
{const _fl = fxLayer; fxLayer = function (html, cls) { if (typeof html === 'string' && lc49On() && S.op && S.op.lc49) html = html.replace('<div class="bt-order"><span>Emrin</span>', '<div class="bt-order"><span>Tim kararı</span>'); return _fl.call(this, html, cls) }}
const A49 = {cc49: cc49Start, rg49(v) { UI.rg49 = +v; render() }, lc49: lcOrder49, lc49go: lcGo49};

(function () { const st = document.createElement('style'); st.textContent = `
.cc49-feed{width:100%;height:auto;display:block;border-radius:10px;border:1px solid rgba(199,245,201,.25)}
.cc49-blink{animation:cc49b 1s steps(2) infinite}@keyframes cc49b{50%{opacity:.15}}
.cc49-pulse{animation:cc49p 1.6s ease-in-out infinite}@keyframes cc49p{50%{opacity:.45}}
.cc49-r{border-left:3px solid #59b8ff;background:rgba(89,184,255,.08);border-radius:0 10px 10px 0;padding:8px 10px;margin:8px 0}
.cc49-r.s{border-left-color:#6fe08a;background:rgba(111,224,138,.07)}
.cc49-w{font:700 13px var(--font-c,inherit);letter-spacing:.04em;margin-bottom:2px}.cc49-w span{font-weight:500;opacity:.65;font-size:11px;letter-spacing:0}
.cc49-t{display:block;line-height:1.4}.cc49-ack{color:#59b8ff;font-style:italic;margin:0 0 4px}
.cc49c{border:1px solid rgba(89,184,255,.35);background:linear-gradient(180deg,rgba(89,184,255,.08),transparent)}
.cc49-mini{margin:-4px -4px 10px}.cc49c .btn{margin-top:10px}
.lc49-ack{display:flex;flex-wrap:wrap;gap:4px 8px;align-items:baseline;border-radius:10px;padding:8px 10px;margin:8px 0;background:rgba(95,211,138,.08);border:1px solid rgba(95,211,138,.3);font-size:13px}
.lc49-ack.bad{background:rgba(255,90,74,.08);border-color:rgba(255,90,74,.35)}.lc49-ack span{opacity:.7;font-size:11px;text-transform:uppercase;letter-spacing:.06em}.lc49-ack em{font-style:normal;font-size:11px;font-weight:700;color:#5fd38a}.lc49-ack.bad em{color:#ff6a5a}
.lc49-feed{padding:10px 12px 0}.lc49 .cc49-r{margin:6px 0 0}.lc49-go{margin-top:12px}
.rg49c{border:1px solid rgba(243,198,107,.3)}
.rg49-map{width:100%;height:auto;display:block;border-radius:10px}.rg49-wrap{padding:0;overflow:hidden;border-radius:10px}
.rg49-on{animation:rg49p 1.4s ease-in-out infinite}@keyframes rg49p{50%{stroke-opacity:.35}}
.rg49-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:6px 0 10px}.rg49-stats div{background:rgba(255,255,255,.04);border-radius:10px;padding:8px;text-align:center}
.rg49-stats small{display:block;font-size:11px;opacity:.7}.rg49-stats b{font:700 18px var(--font-c,inherit);color:#f3c66b}
.rg49-leg{display:flex;flex-wrap:wrap;gap:6px 12px;font-size:11px;opacity:.8;margin-top:8px}.rg49-leg i{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:5px;vertical-align:-1px}
.rg49-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.rg49-chips b{color:#f3c66b;margin-right:2px}
`; document.head.appendChild(st) })();

/* ---------- ÇEVİRİLER ---------- */
`Rehine kurtarma|Hostage rescue|人質救出|Rescate de rehenes|Libération d'otages|Geiselbefreiung
Sınır köyündeki bir evde iki mühendis rehin tutuluyor. Bozkurt timi köyün iki kilometre dışında. Canlı yayın ekranında.|Two engineers are being held hostage in a house in a border village. Team Bozkurt is two kilometres outside the village. The live feed is on screen.|国境の村の一軒家で技師2人が人質に取られている。ボズクルト班は村の2キロ手前にいる。ライブ映像が画面に映っている。|Dos ingenieros están retenidos como rehenes en una casa de un pueblo fronterizo. El equipo Bozkurt está a dos kilómetros del pueblo. La señal en directo está en pantalla.|Deux ingénieurs sont retenus en otage dans une maison d'un village frontalier. L'équipe Bozkurt est à deux kilomètres du village. Le direct est à l'écran.|Zwei Ingenieure werden in einem Haus in einem Grenzdorf als Geiseln festgehalten. Team Bozkurt ist zwei Kilometer vor dem Dorf. Das Live-Bild ist auf dem Schirm.
Köy girişindeyiz. Evin önünde iki silahlı nöbetçi var. Emir bekliyorum.|We're at the village entrance. Two armed guards in front of the house. Awaiting orders.|村の入口に到着。家の前に武装した見張りが2人。命令を待つ。|Estamos en la entrada del pueblo. Hay dos guardias armados frente a la casa. Espero órdenes.|Nous sommes à l'entrée du village. Deux gardes armés devant la maison. J'attends les ordres.|Wir sind am Dorfeingang. Zwei bewaffnete Wachen vor dem Haus. Erwarte Befehle.
Arka bahçede kimse görünmüyor. Çatıda bir ısı izi var.|No one visible in the back garden. One heat signature on the roof.|裏庭に人影なし。屋根に熱源が1つ。|No se ve a nadie en el patio trasero. Hay una firma térmica en el tejado.|Personne dans le jardin arrière. Une signature thermique sur le toit.|Im Hinterhof ist niemand zu sehen. Eine Wärmesignatur auf dem Dach.
Arka bahçeden sessiz yaklaşın, çatıyı nişancıyla kapatın|Approach quietly from the back garden, cover the roof with the sniper|裏庭から静かに接近し、屋根は狙撃手で押さえろ|Acercaos en silencio por el patio trasero, cubrid el tejado con el francotirador|Approchez discrètement par le jardin arrière, couvrez le toit avec le tireur d'élite|Leise über den Hinterhof annähern, Dach mit dem Scharfschützen abdecken
Önden iki nöbetçiyi aynı anda etkisiz hâle getirin|Take out both guards at the front at the same time|正面の見張り2人を同時に無力化しろ|Neutralizad a los dos guardias de delante a la vez|Neutralisez les deux gardes de devant en même temps|Beide Wachen vorne gleichzeitig ausschalten
Bekleyin, takviye gelsin|Hold, wait for reinforcements|待機しろ、増援を待て|Esperad a que lleguen refuerzos|Attendez les renforts|Wartet auf Verstärkung
Duvarın dibindeyiz. İçeriden ses geliyor, rehineler alt katta olabilir.|We're at the foot of the wall. Voices inside, the hostages may be downstairs.|壁際に到着。中から声がする、人質は1階にいるかもしれない。|Estamos al pie del muro. Se oyen voces dentro, los rehenes pueden estar en la planta baja.|Nous sommes au pied du mur. Des voix à l'intérieur, les otages sont peut-être au rez-de-chaussée.|Wir sind an der Mauer. Stimmen von drinnen, die Geiseln könnten unten sein.
Evin yanına bir araç yanaştı, üç kişi indi.|A vehicle pulled up beside the house, three people got out.|家の横に車両が停車、3人が降りた。|Un vehículo se ha detenido junto a la casa, han bajado tres personas.|Un véhicule s'est arrêté près de la maison, trois personnes en sont descendues.|Ein Fahrzeug hielt neben dem Haus, drei Personen stiegen aus.
Nişancı araçtakileri gözetlesin, tim hemen içeri girsin|Sniper watches the vehicle group, team goes in now|狙撃手は車両の連中を監視、班は直ちに突入しろ|Que el francotirador vigile a los del vehículo y el equipo entre ya|Le tireur surveille ceux du véhicule, l'équipe entre tout de suite|Scharfschütze beobachtet die Fahrzeuggruppe, Team geht sofort rein
Önce araçtakileri vurun|Hit the vehicle group first|先に車両の連中を撃て|Disparad primero a los del vehículo|Tirez d'abord sur ceux du véhicule|Zuerst die Fahrzeuggruppe ausschalten
Çekilin, yeni plan yapalım|Pull back, we'll make a new plan|後退しろ、作戦を練り直す|Retiraos, haremos un nuevo plan|Repliez-vous, on refait un plan|Zieht euch zurück, wir planen neu
İçerideyiz! Rehineler alt katta, biri yaralı. Bir şüpheli bodruma kaçtı.|We're in! Hostages downstairs, one wounded. A suspect fled to the basement.|突入成功！人質は1階、1人負傷。容疑者1人が地下室へ逃げた。|¡Estamos dentro! Rehenes en la planta baja, uno herido. Un sospechoso huyó al sótano.|Nous sommes entrés ! Otages au rez-de-chaussée, un blessé. Un suspect s'est enfui à la cave.|Wir sind drin! Geiseln unten, eine verletzt. Ein Verdächtiger floh in den Keller.
Tahliye helikopteri dört dakika uzakta.|Evacuation helicopter is four minutes out.|救出ヘリはあと4分。|El helicóptero de evacuación está a cuatro minutos.|L'hélicoptère d'évacuation est à quatre minutes.|Der Evakuierungshubschrauber ist vier Minuten entfernt.
Rehineleri çıkarın, bodrumu kapatıp tutun|Get the hostages out, seal and hold the basement|人質を連れ出し、地下室を封鎖して押さえろ|Sacad a los rehenes, cerrad el sótano y mantenedlo|Sortez les otages, bouclez la cave et tenez-la|Geiseln rausbringen, Keller abriegeln und halten
Şüpheliyi bodrumda yakalayın|Catch the suspect in the basement|地下室で容疑者を確保しろ|Capturad al sospechoso en el sótano|Attrapez le suspect dans la cave|Den Verdächtigen im Keller festnehmen
Rehineleri bırakın, şüpheliyi kovalayın|Leave the hostages, chase the suspect|人質は置いて容疑者を追え|Dejad a los rehenes, perseguid al sospechoso|Laissez les otages, poursuivez le suspect|Geiseln zurücklassen, Verdächtigen verfolgen
Rehineler sağ salim kurtarıldı. Tim kayıpsız döndü.|The hostages were rescued safe and sound. The team returned without losses.|人質は無事救出された。班は損害なしで帰還した。|Los rehenes fueron rescatados sanos y salvos. El equipo volvió sin bajas.|Les otages ont été libérés sains et saufs. L'équipe est rentrée sans pertes.|Die Geiseln wurden wohlbehalten befreit. Das Team kehrte ohne Verluste zurück.
Rehinelerden biri yaralandı, şüpheliler kaçtı.|One of the hostages was wounded, the suspects escaped.|人質の1人が負傷し、容疑者は逃走した。|Uno de los rehenes resultó herido y los sospechosos huyeron.|Un des otages a été blessé, les suspects se sont enfuis.|Eine Geisel wurde verletzt, die Verdächtigen entkamen.
Silah deposu baskını|Weapons depot raid|武器庫急襲|Asalto al depósito de armas|Raid sur le dépôt d'armes|Überfall auf das Waffenlager
İstihbarat, sınırın ötesinde saldırılarda kullanılan bir silah deposu tespit etti. Bozkurt timi gece sızmaya hazır.|Intelligence has located a weapons depot across the border used in attacks. Team Bozkurt is ready to infiltrate tonight.|情報部が国境の向こうで攻撃に使われている武器庫を特定した。ボズクルト班は夜間潜入の準備ができている。|Inteligencia ha localizado un depósito de armas al otro lado de la frontera usado en ataques. El equipo Bozkurt está listo para infiltrarse esta noche.|Le renseignement a repéré un dépôt d'armes de l'autre côté de la frontière utilisé pour des attaques. L'équipe Bozkurt est prête à s'infiltrer cette nuit.|Der Nachrichtendienst hat jenseits der Grenze ein Waffenlager entdeckt, das für Angriffe genutzt wird. Team Bozkurt ist bereit für die nächtliche Infiltration.
Depoya sekiz yüz metre kala mevzi aldık. Etraf açık arazi.|We've taken position eight hundred metres from the depot. Open ground all around.|武器庫の800メートル手前で陣取った。周囲は開けた土地だ。|Hemos tomado posición a ochocientos metros del depósito. Todo alrededor es terreno abierto.|Nous avons pris position à huit cents mètres du dépôt. Terrain découvert tout autour.|Wir haben achthundert Meter vor dem Lager Stellung bezogen. Ringsum offenes Gelände.
Depo çevresinde dört kişilik devriye dönüyor, arası yaklaşık iki dakika.|A four-man patrol circles the depot, about two minutes apart.|武器庫の周りを4人の巡回が回っている、間隔は約2分。|Una patrulla de cuatro hombres rodea el depósito, cada dos minutos aproximadamente.|Une patrouille de quatre hommes tourne autour du dépôt, environ deux minutes d'intervalle.|Eine Viermann-Streife umrundet das Lager, etwa zwei Minuten Abstand.
Devriye arasındaki boşlukta kuru dere yatağından ilerleyin|Move up the dry creek bed in the gap between patrols|巡回の合間に涸れた川床を進め|Avanzad por el cauce seco en el hueco entre patrullas|Avancez par le lit de ruisseau à sec entre deux patrouilles|In der Lücke zwischen den Streifen durch das trockene Bachbett vorrücken
Açık araziden hızla koşarak geçin|Sprint across the open ground|開けた土地を一気に駆け抜けろ|Cruzad corriendo el terreno abierto|Traversez le terrain découvert en courant|Schnell über das offene Gelände laufen
Depoyu uzaktan topçuyla vurdurun|Have artillery hit the depot from afar|砲兵に遠距離から武器庫を砲撃させろ|Que la artillería golpee el depósito desde lejos|Faites frapper le dépôt par l'artillerie à distance|Das Lager aus der Ferne mit Artillerie beschießen lassen
Depo kapısındayız. Kilit sağlam, içeride jeneratör sesi var.|We're at the depot door. The lock is solid, a generator is running inside.|武器庫の扉に到着。錠は頑丈、中で発電機の音がする。|Estamos en la puerta del depósito. La cerradura es sólida y dentro se oye un generador.|Nous sommes à la porte du dépôt. La serrure est solide, un générateur tourne à l'intérieur.|Wir sind an der Lagertür. Das Schloss ist stabil, drinnen läuft ein Generator.
Doğu tarafta bir pencere açık.|A window is open on the east side.|東側の窓が開いている。|Hay una ventana abierta en el lado este.|Une fenêtre est ouverte côté est.|Auf der Ostseite ist ein Fenster offen.
Açık pencereden sessizce girin|Enter quietly through the open window|開いた窓から静かに侵入しろ|Entrad en silencio por la ventana abierta|Entrez discrètement par la fenêtre ouverte|Leise durch das offene Fenster eindringen
Kapıyı patlayıcıyla açın|Blow the door with explosives|爆薬で扉を破れ|Abrid la puerta con explosivos|Faites sauter la porte|Die Tür sprengen
Jeneratörü kesip karanlıkta bekleyin|Cut the generator and wait in the dark|発電機を止めて暗闇で待て|Cortad el generador y esperad a oscuras|Coupez le générateur et attendez dans le noir|Generator abschalten und im Dunkeln warten
İçerisi roket ve mühimmat dolu, belgeler de var. Devriye geri dönüyor!|It's full of rockets and ammo, and there are documents. The patrol is coming back!|中はロケット弾と弾薬だらけ、書類もある。巡回が戻ってくる！|Está lleno de cohetes y munición, y hay documentos. ¡La patrulla vuelve!|C'est plein de roquettes et de munitions, il y a aussi des documents. La patrouille revient !|Voller Raketen und Munition, auch Dokumente. Die Streife kommt zurück!
İki araç depoya yaklaşıyor, üç dakikanız var.|Two vehicles approaching the depot, you have three minutes.|車両2台が武器庫に接近中、残り3分。|Dos vehículos se acercan al depósito, tenéis tres minutos.|Deux véhicules approchent du dépôt, vous avez trois minutes.|Zwei Fahrzeuge nähern sich dem Lager, ihr habt drei Minuten.
Belgeleri alın, depoyu imha düzeneğiyle havaya uçurup çekilin|Take the documents, rig the depot to blow and pull out|書類を回収し、爆破装置で武器庫を吹き飛ばして撤退しろ|Coged los documentos, volad el depósito con cargas y retiraos|Prenez les documents, piégez le dépôt pour le faire sauter et repliez-vous|Dokumente mitnehmen, Lager zur Sprengung vorbereiten und abziehen
Her şeyi taşımaya çalışın|Try to carry everything out|全部運び出せ|Intentad llevároslo todo|Essayez de tout emporter|Versucht, alles mitzunehmen
Depoyu bırakın, hemen çekilin|Leave the depot, pull out now|武器庫は放棄、直ちに撤退しろ|Dejad el depósito y retiraos ya|Laissez le dépôt, repliez-vous immédiatement|Lager aufgeben, sofort abziehen
Depo imha edildi, belgeler istihbarata ulaştı.|The depot was destroyed and the documents reached intelligence.|武器庫は破壊され、書類は情報部に届いた。|El depósito fue destruido y los documentos llegaron a inteligencia.|Le dépôt a été détruit et les documents sont parvenus au renseignement.|Das Lager wurde zerstört, die Dokumente erreichten den Nachrichtendienst.
Tim çatışmaya girdi, depo kısmen imha edilebildi.|The team got into a firefight; the depot was only partly destroyed.|班は交戦に入り、武器庫は一部しか破壊できなかった。|El equipo entró en combate; el depósito solo se destruyó en parte.|L'équipe a été accrochée ; le dépôt n'a été que partiellement détruit.|Das Team geriet in ein Feuergefecht; das Lager wurde nur teilweise zerstört.
Tepe karakolunu geri al|Retake the hilltop outpost|丘の監視所を奪還せよ|Recupera el puesto de la colina|Reprends l'avant-poste de la colline|Hügelposten zurückerobern
Düşman gece baskınıyla sınırdaki tepe karakolunu ele geçirdi. Bozkurt timi yamacın altında, emrini bekliyor.|The enemy seized the border hilltop outpost in a night raid. Team Bozkurt is at the foot of the slope, awaiting your order.|敵が夜襲で国境の丘の監視所を占拠した。ボズクルト班は斜面の下で命令を待っている。|El enemigo tomó el puesto fronterizo de la colina en un asalto nocturno. El equipo Bozkurt está al pie de la ladera esperando tu orden.|L'ennemi a pris l'avant-poste frontalier de la colline lors d'un raid nocturne. L'équipe Bozkurt est au pied de la pente et attend ton ordre.|Der Feind hat den Hügelposten an der Grenze bei einem Nachtangriff eingenommen. Team Bozkurt wartet am Hangfuß auf deinen Befehl.
Yamacın altındayız. Karakol tam tepemizde.|We're at the foot of the slope. The outpost is right above us.|斜面の下にいる。監視所は真上だ。|Estamos al pie de la ladera. El puesto está justo encima.|Nous sommes au pied de la pente. L'avant-poste est juste au-dessus.|Wir sind am Hangfuß. Der Posten liegt direkt über uns.
Tepede bir ağır makineli mevzisi ve altı asker görüyorum.|I see a heavy machine-gun nest and six soldiers on top.|頂上に重機関銃陣地と兵士6人を確認。|Veo un nido de ametralladora pesada y seis soldados arriba.|Je vois un nid de mitrailleuse lourde et six soldats au sommet.|Ich sehe oben ein schweres MG-Nest und sechs Soldaten.
Bir takım ateşle tutsun, diğeri kuzey yamaçtan dolaşsın|One squad pins them with fire, the other flanks via the north slope|一班が射撃で釘付けにし、もう一班は北斜面から回り込め|Que un pelotón fije con fuego y el otro flanquee por la ladera norte|Un groupe fixe par le feu, l'autre contourne par la pente nord|Ein Trupp hält mit Feuer nieder, der andere umgeht über den Nordhang
Bütün tim cepheden hücum etsin|Whole team assaults head-on|班全員で正面から突撃しろ|Que todo el equipo asalte de frente|Toute l'équipe attaque de front|Das ganze Team greift frontal an
Hava desteği gelene kadar bekleyin|Wait until air support arrives|航空支援が来るまで待て|Esperad hasta que llegue el apoyo aéreo|Attendez l'appui aérien|Wartet auf Luftunterstützung
Kuzey yamaçtayız. Makineli bize sırtı dönük. Bir asker yaralı ama yürüyebiliyor.|We're on the north slope. The machine gun has its back to us. One soldier is wounded but can walk.|北斜面に到達。機関銃はこちらに背を向けている。兵士1人負傷、歩行は可能。|Estamos en la ladera norte. La ametralladora nos da la espalda. Un soldado está herido pero puede andar.|Nous sommes sur la pente nord. La mitrailleuse nous tourne le dos. Un soldat est blessé mais peut marcher.|Wir sind am Nordhang. Das MG zeigt von uns weg. Ein Soldat ist verletzt, kann aber gehen.
Düşman takviyesi vadiden yaklaşıyor, on dakika.|Enemy reinforcements coming up the valley, ten minutes.|敵の増援が谷から接近中、あと10分。|Refuerzos enemigos se acercan por el valle, diez minutos.|Des renforts ennemis arrivent par la vallée, dix minutes.|Feindliche Verstärkung kommt durchs Tal, zehn Minuten.
Makineliyi el bombasıyla susturun, yaralıyı sıhhiyeci taşısın|Silence the machine gun with grenades, the medic carries the wounded|手榴弾で機関銃を黙らせ、負傷者は衛生兵が運べ|Silenciad la ametralladora con granadas, que el sanitario lleve al herido|Faites taire la mitrailleuse à la grenade, l'infirmier porte le blessé|MG mit Granaten ausschalten, der Sanitäter trägt den Verletzten
Yaralıyı geride bırakıp hızla ilerleyin|Leave the wounded behind and push forward fast|負傷者を残して素早く前進しろ|Dejad atrás al herido y avanzad rápido|Laissez le blessé en arrière et avancez vite|Verletzten zurücklassen und schnell vorrücken
Geri çekilip yaralıyı tahliye edin|Pull back and evacuate the wounded|後退して負傷者を後送しろ|Retiraos y evacuad al herido|Repliez-vous et évacuez le blessé|Zurückziehen und den Verletzten evakuieren
Karakol bizde! Düşman takviyesi yamaca tırmanıyor.|The outpost is ours! Enemy reinforcements are climbing the slope.|監視所を確保！敵の増援が斜面を登ってくる。|¡El puesto es nuestro! Refuerzos enemigos suben por la ladera.|L'avant-poste est à nous ! Des renforts ennemis montent la pente.|Der Posten gehört uns! Feindliche Verstärkung klettert den Hang hoch.
Topçu bataryası hazır, koordinat bekliyor.|The artillery battery is ready, awaiting coordinates.|砲兵中隊は準備完了、座標を待っている。|La batería de artillería está lista, espera coordenadas.|La batterie d'artillerie est prête, elle attend les coordonnées.|Die Artilleriebatterie ist bereit und wartet auf Koordinaten.
Topçuya vadi yolunun koordinatını ver, tim mevzileri tutsun|Give artillery the valley road coordinates, the team holds its positions|砲兵に谷の道の座標を送れ、班は陣地を守れ|Da a la artillería las coordenadas del camino del valle y que el equipo mantenga posiciones|Donne à l'artillerie les coordonnées de la route de la vallée, l'équipe tient ses positions|Artillerie die Koordinaten der Talstraße geben, Team hält die Stellungen
Karakolu bırakıp çekilin|Abandon the outpost and pull back|監視所を放棄して後退しろ|Abandonad el puesto y retiraos|Abandonnez l'avant-poste et repliez-vous|Posten aufgeben und zurückziehen
Tim takviyeyi karşılamak için aşağı insin|Team goes down to meet the reinforcements|班は増援を迎え撃つため下山しろ|Que el equipo baje a enfrentarse a los refuerzos|L'équipe descend affronter les renforts|Das Team steigt ab, um die Verstärkung abzufangen
Karakol geri alındı, sınır hattı güvende.|The outpost was retaken, the border line is secure.|監視所を奪還し、国境線は安全だ。|El puesto fue recuperado; la línea fronteriza está segura.|L'avant-poste a été repris, la ligne frontière est sûre.|Der Posten ist zurückerobert, die Grenzlinie ist sicher.
Karakol tutulamadı, tim geri çekilmek zorunda kaldı.|The outpost couldn't be held; the team had to pull back.|監視所を維持できず、班は後退を余儀なくされた。|No se pudo mantener el puesto; el equipo tuvo que retirarse.|L'avant-poste n'a pas pu être tenu ; l'équipe a dû se replier.|Der Posten konnte nicht gehalten werden; das Team musste sich zurückziehen.
Konvoy koruma|Convoy escort|輸送隊護衛|Escolta de convoy|Escorte de convoi|Konvoischutz
Cepheye mühimmat taşıyan konvoy dağ yolunda ilerliyor. Bozkurt timi konvoyun önünde, İHA havada.|A convoy carrying ammunition to the front is moving along a mountain road. Team Bozkurt is ahead of it, the drone is airborne.|前線へ弾薬を運ぶ輸送隊が山道を進んでいる。ボズクルト班が先導し、ドローンが上空にいる。|Un convoy que lleva munición al frente avanza por una carretera de montaña. El equipo Bozkurt va delante y el dron está en el aire.|Un convoi transportant des munitions vers le front avance sur une route de montagne. L'équipe Bozkurt ouvre la route, le drone est en vol.|Ein Konvoi mit Munition für die Front fährt auf einer Bergstraße. Team Bozkurt fährt voraus, die Drohne ist in der Luft.
Konvoyun önündeyiz. Yolda bir köprü var, altı kontrol edilmedi.|We're ahead of the convoy. There's a bridge on the road, nobody has checked underneath.|輸送隊の前方にいる。道に橋があるが、下は未確認だ。|Vamos delante del convoy. Hay un puente en la carretera y no se ha revisado por debajo.|Nous sommes devant le convoi. Il y a un pont sur la route, le dessous n'a pas été vérifié.|Wir sind vor dem Konvoi. Auf der Straße ist eine Brücke, darunter wurde nicht kontrolliert.
Köprünün altında şüpheli bir hareket var.|Suspicious movement under the bridge.|橋の下に不審な動きがある。|Hay un movimiento sospechoso bajo el puente.|Mouvement suspect sous le pont.|Verdächtige Bewegung unter der Brücke.
Konvoyu durdurun, istihkâm köprüyü arasın|Stop the convoy, have the engineers search the bridge|輸送隊を止め、工兵に橋を調べさせろ|Detened el convoy y que los zapadores registren el puente|Arrêtez le convoi, que le génie fouille le pont|Konvoi anhalten, Pioniere sollen die Brücke absuchen
Hızla köprüden geçin|Cross the bridge fast|急いで橋を渡れ|Cruzad el puente a toda velocidad|Traversez le pont à toute vitesse|Schnell über die Brücke fahren
Köprüyü dolaşan toprak yola sapın|Take the dirt road that bypasses the bridge|橋を迂回する未舗装路へ回れ|Desviaos por el camino de tierra que rodea el puente|Prenez le chemin de terre qui contourne le pont|Den Feldweg nehmen, der die Brücke umgeht
Köprü altında tuzaklanmış patlayıcı bulundu, etkisiz hâle getiriliyor. Sırtta bir dürbün parladı.|A booby-trapped explosive was found under the bridge and is being defused. Binoculars glinted on the ridge.|橋の下で仕掛け爆弾を発見、処理中。尾根で双眼鏡が光った。|Se ha encontrado un explosivo trampa bajo el puente y se está desactivando. Unos prismáticos brillaron en la cresta.|Un explosif piégé a été trouvé sous le pont, il est en cours de désamorçage. Des jumelles ont brillé sur la crête.|Unter der Brücke wurde eine Sprengfalle gefunden und wird entschärft. Auf dem Kamm blitzte ein Fernglas auf.
Sırtta dört kişi var, birinde roketatar.|Four people on the ridge, one with a rocket launcher.|尾根に4人、1人はロケットランチャー所持。|Cuatro personas en la cresta, una con lanzacohetes.|Quatre personnes sur la crête, l'une avec un lance-roquettes.|Vier Personen auf dem Kamm, eine mit Raketenwerfer.
Tim sırtı kuşatsın, konvoy siper alsın|Team encircles the ridge, the convoy takes cover|班は尾根を包囲し、輸送隊は遮蔽物に隠れろ|Que el equipo rodee la cresta y el convoy se ponga a cubierto|L'équipe encercle la crête, le convoi se met à couvert|Team umstellt den Kamm, Konvoi geht in Deckung
Sırtı makineliyle tarayın|Rake the ridge with machine-gun fire|尾根を機関銃で掃射しろ|Barred la cresta con la ametralladora|Arrosez la crête à la mitrailleuse|Den Kamm mit MG-Feuer bestreichen
Patlayıcıyı bırakıp yola devam edin|Leave the explosive and keep driving|爆発物は放置して進め|Dejad el explosivo y seguid adelante|Laissez l'explosif et continuez la route|Sprengsatz liegen lassen und weiterfahren
Sırttakiler kaçıyor, biri teslim oldu. Konvoy hazır.|The ridge group is fleeing, one surrendered. The convoy is ready.|尾根の連中は逃走中、1人が投降した。輸送隊は準備完了。|Los de la cresta huyen, uno se rindió. El convoy está listo.|Ceux de la crête s'enfuient, l'un s'est rendu. Le convoi est prêt.|Die Gruppe auf dem Kamm flieht, einer hat sich ergeben. Der Konvoi ist bereit.
Kaçanlar bir köy yoluna giriyor.|The fugitives are turning onto a village road.|逃走者は村への道に入った。|Los fugitivos toman un camino hacia un pueblo.|Les fuyards s'engagent sur une route de village.|Die Flüchtigen biegen auf eine Dorfstraße ab.
Şahin kaçanları izlesin, konvoy yoluna devam etsin|Şahin tracks the fugitives, the convoy carries on|シャヒンは逃走者を追跡、輸送隊は前進を続けろ|Que Şahin siga a los fugitivos y el convoy continúe|Şahin suit les fuyards, le convoi poursuit sa route|Şahin verfolgt die Flüchtigen, der Konvoi fährt weiter
Köye kadar kovalayın|Chase them all the way to the village|村まで追跡しろ|Perseguidlos hasta el pueblo|Poursuivez-les jusqu'au village|Verfolgt sie bis ins Dorf
Tutukluyu bırakın, hemen dönün|Release the prisoner and turn back now|捕虜を解放して直ちに引き返せ|Soltad al detenido y volved ya|Relâchez le prisonnier et faites demi-tour|Gefangenen freilassen und sofort umkehren
Konvoy kayıpsız hedefe ulaştı, bir şüpheli yakalandı.|The convoy reached its destination without losses, and a suspect was captured.|輸送隊は損害なしで目的地に到着し、容疑者1人を確保した。|El convoy llegó a su destino sin bajas y se capturó a un sospechoso.|Le convoi est arrivé à destination sans pertes, un suspect a été capturé.|Der Konvoi erreichte sein Ziel ohne Verluste, ein Verdächtiger wurde gefasst.
Konvoy hasar aldı, yaralılarımız var.|The convoy took damage, we have wounded.|輸送隊が損傷し、負傷者が出た。|El convoy sufrió daños y tenemos heridos.|Le convoi a été touché, nous avons des blessés.|Der Konvoi wurde beschädigt, wir haben Verwundete.
Bugünkü harekât tamamlandı. Yarın yeni görev.|Today's operation is done. New mission tomorrow.|本日の作戦は完了。明日新たな任務。|La operación de hoy ha terminado. Nueva misión mañana.|L'opération du jour est terminée. Nouvelle mission demain.|Der heutige Einsatz ist abgeschlossen. Morgen ein neuer Auftrag.
Komuta merkezi · Canlı|Command centre · Live|指揮センター · ライブ|Centro de mando · En directo|Centre de commandement · En direct|Kommandozentrale · Live
Her aşamada tim liderini dinle ve emrini ver. Kararların sonucu belirler.|At each stage, listen to the team leader and give your order. Your decisions decide the outcome.|各段階で班長の報告を聞き、命令を下せ。君の判断が結果を決める。|En cada fase, escucha al jefe de equipo y da tu orden. Tus decisiones deciden el resultado.|À chaque étape, écoute le chef d'équipe et donne ton ordre. Tes décisions font le résultat.|Hör in jeder Phase dem Teamführer zu und gib deinen Befehl. Deine Entscheidungen bestimmen das Ergebnis.
Canlı yayına bağlan|Connect to live feed|ライブ映像に接続|Conectar con la señal en directo|Se connecter au direct|Live-Bild aufschalten
Anlaşıldı, emriniz uygulanıyor.|Understood, carrying out your order.|了解、命令を実行中。|Entendido, cumpliendo su orden.|Bien reçu, nous exécutons votre ordre.|Verstanden, Befehl wird ausgeführt.
Tim lideri|Team leader|班長|Jefe de equipo|Chef d'équipe|Teamführer
İHA operatörü|Drone operator|ドローン操縦士|Operador de dron|Opérateur de drone|Drohnenpilot
Emrin ne?|Your order?|命令は？|¿Cuál es tu orden?|Quel est ton ordre ?|Dein Befehl?
Harekât sonucu|Operation result|作戦結果|Resultado de la operación|Résultat de l'opération|Einsatzergebnis
Harekât başarılı|Operation successful|作戦成功|Operación con éxito|Opération réussie|Einsatz erfolgreich
Harekât aksadı|Operation went wrong|作戦は難航した|La operación salió mal|L'opération a mal tourné|Einsatz ging schief
İç güvenlik +6|Internal security +6|治安 +6|Seguridad interior +6|Sécurité intérieure +6|Innere Sicherheit +6
Halk onayı +3|Public approval +3|支持率 +3|Aprobación popular +3|Approbation populaire +3|Zustimmung +3
Güven +5|Trust +5|信頼 +5|Confianza +5|Confiance +5|Vertrauen +5
Tecrübe +60|Experience +60|経験値 +60|Experiencia +60|Expérience +60|Erfahrung +60
Halk onayı -4|Public approval -4|支持率 -4|Aprobación popular -4|Approbation populaire -4|Zustimmung -4
İç güvenlik -2|Internal security -2|治安 -2|Seguridad interior -2|Sécurité intérieure -2|Innere Sicherheit -2
Moral -5|Morale -5|士気 -5|Moral -5|Moral -5|Moral -5
Cephede bir bölge ele geçirildi. Haritada gör: Dünya › Bölgeler|A region was captured on the front. See it on the map: World › Regions|前線で1地域を奪取した。地図で確認：世界 › 地域|Se conquistó una región en el frente. Mírala en el mapa: Mundo › Regiones|Une région a été prise sur le front. Vois-la sur la carte : Monde › Régions|An der Front wurde eine Region erobert. Auf der Karte ansehen: Welt › Regionen
Yarın yeni bir harekât emrine hazır olacaklar.|They'll be ready for a new operation order tomorrow.|明日には新たな作戦命令に備えているだろう。|Mañana estarán listos para una nueva orden de operación.|Ils seront prêts demain pour un nouvel ordre d'opération.|Morgen sind sie bereit für einen neuen Einsatzbefehl.
Canlı harekât · Komuta merkezi|Live operation · Command centre|ライブ作戦 · 指揮センター|Operación en directo · Centro de mando|Opération en direct · Centre de commandement|Live-Einsatz · Kommandozentrale
Harekâtları uzaktan, İHA görüntüsünden izle. Tim liderini telsizden dinle ve emri sen ver.|Watch operations remotely through the drone feed. Listen to the team leader on the radio and give the orders yourself.|ドローン映像で作戦を遠隔監視せよ。無線で班長の報告を聞き、自ら命令を下せ。|Sigue las operaciones a distancia desde la imagen del dron. Escucha al jefe de equipo por radio y da tú las órdenes.|Suis les opérations à distance via l'image du drone. Écoute le chef d'équipe à la radio et donne toi-même les ordres.|Verfolge Einsätze aus der Ferne über das Drohnenbild. Hör den Teamführer über Funk und gib selbst die Befehle.
Harekâtı başlat|Start operation|作戦開始|Iniciar operación|Lancer l'opération|Einsatz starten
Harekât haritası|Operations map|作戦地図|Mapa de operaciones|Carte des opérations|Einsatzkarte
Bir bölgeye dokun, yönetimini aç.|Tap a region to manage it.|地域をタップして統治画面を開く。|Toca una región para gestionarla.|Touche une région pour la gérer.|Tippe auf eine Region, um sie zu verwalten.
Bölge|Regions|地域|Regiones|Régions|Regionen
Günlük gelir|Daily income|日収|Ingresos diarios|Revenu quotidien|Tageseinkommen
Ort. güvenlik|Avg. security|平均治安|Seguridad media|Sécurité moy.|Ø Sicherheit
Senin toprağın|Your territory|自国領|Tu territorio|Ton territoire|Dein Gebiet
Güvende|Secure|安定|Segura|Sûre|Sicher
Gergin|Tense|緊張|Tensa|Tendue|Angespannt
Güvenlik düşük|Low security|治安悪化|Seguridad baja|Sécurité faible|Geringe Sicherheit
Memnuniyet|Satisfaction|満足度|Satisfacción|Satisfaction|Zufriedenheit
Tahkimat|Fortification|要塞化|Fortificación|Fortification|Befestigung
Planı uygula, inisiyatifi tim liderine bırak|Execute the plan, leave the initiative to the team leader|計画を実行し、判断は班長に任せる|Ejecutad el plan, la iniciativa queda en manos del jefe de equipo|Exécutez le plan, laissez l'initiative au chef d'équipe|Plan ausführen, Initiative dem Teamführer überlassen
Gizliliği koru, sessiz ilerleyin|Keep it covert, move in silence|隠密を保ち、静かに前進せよ|Mantened el sigilo, avanzad en silencio|Restez discrets, avancez en silence|Tarnung wahren, leise vorrücken
Tempoyu artırın, hızlı bitirin|Pick up the pace, finish it fast|テンポを上げ、素早く終わらせろ|Aumentad el ritmo, acabad rápido|Accélérez, finissez vite|Tempo erhöhen, schnell abschließen
Temkinli olun, kayıp vermeyin|Be cautious, no casualties|慎重に行動し、損害を出すな|Sed prudentes, sin bajas|Soyez prudents, pas de pertes|Vorsichtig sein, keine Verluste
Harekât hazırlığı · Tertip|Operation prep · Formation|作戦準備 · 編成|Preparación · Formación|Préparation · Dispositif|Einsatzvorbereitung · Aufstellung
Birliğin nasıl bir tertiple girsin?|What formation should your unit go in with?|部隊はどの編成で突入する？|¿Con qué formación entra tu unidad?|Avec quel dispositif ton unité doit-elle entrer ?|In welcher Aufstellung soll deine Einheit vorgehen?
Harekât hazırlığı · Destek|Operation prep · Support|作戦準備 · 支援|Preparación · Apoyo|Préparation · Appui|Einsatzvorbereitung · Unterstützung
Hangi destek unsuru hazır beklesin?|Which support element should stand by?|どの支援部隊を待機させる？|¿Qué elemento de apoyo debe estar listo?|Quel élément d'appui doit se tenir prêt ?|Welche Unterstützung soll bereitstehen?
Komuta merkezi|Command centre|指揮センター|Centro de mando|Centre de commandement|Kommandozentrale
Hazırlık tamam|Preparation complete|準備完了|Preparación lista|Préparation terminée|Vorbereitung abgeschlossen
Tertip|Formation|編成|Formación|Dispositif|Aufstellung
Destek|Support|支援|Apoyo|Appui|Unterstützung
Tim sahadaki kararı kendisi verip uygulayacak. Sen komuta emrini ver.|The team makes and carries out the field decisions itself. You give the command orders.|現場の判断は班が自ら下して実行する。君は指揮命令を出せ。|El equipo toma y ejecuta por sí mismo las decisiones sobre el terreno. Tú das las órdenes de mando.|L'équipe prend et exécute elle-même les décisions sur le terrain. Toi, tu donnes les ordres de commandement.|Das Team trifft und vollzieht die Entscheidungen vor Ort selbst. Du gibst die Führungsbefehle.
Harekâta canlı yayınla başla|Start the operation on live feed|ライブ映像で作戦開始|Iniciar la operación en directo|Lancer l'opération en direct|Einsatz mit Live-Bild starten
Tim kararı|Team decision|班の判断|Decisión del equipo|Décision de l'équipe|Teamentscheidung
İcra başarılı|Executed well|実行成功|Ejecución con éxito|Exécution réussie|Erfolgreich ausgeführt
İcra aksadı|Execution faltered|実行に支障|La ejecución falló|Exécution ratée|Ausführung misslang
Destek unsurunu devreye sok|Bring in the support element|支援部隊を投入せよ|Haz entrar el elemento de apoyo|Engage l'élément d'appui|Unterstützung einsetzen
Canlı yayın · Komuta|Live feed · Command|ライブ映像 · 指揮|En directo · Mando|En direct · Commandement|Live-Bild · Führung
Komuta emrin ne?|Your command order?|指揮命令は？|¿Cuál es tu orden de mando?|Quel est ton ordre de commandement ?|Dein Führungsbefehl?
Yeni harekât emri · Komuta merkezi|New operation order · Command centre|新たな作戦命令 · 指揮センター|Nueva orden de operación · Centro de mando|Nouvel ordre d'opération · Centre de commandement|Neuer Einsatzbefehl · Kommandozentrale
Tertibi ve desteği seç, harekâtı canlı yayından izle. Sahadaki kararları tim verir, komuta emirleri senden.|Choose the formation and support, then watch the operation live. The team makes the field decisions; the command orders come from you.|編成と支援を選び、作戦をライブ映像で見守れ。現場の判断は班が下し、指揮命令は君が出す。|Elige la formación y el apoyo y sigue la operación en directo. El equipo decide sobre el terreno; las órdenes de mando son tuyas.|Choisis le dispositif et l'appui, puis suis l'opération en direct. L'équipe décide sur le terrain, les ordres de commandement viennent de toi.|Wähle Aufstellung und Unterstützung und verfolge den Einsatz live. Das Team entscheidet vor Ort, die Führungsbefehle kommen von dir.
Harekâtı hazırla|Prepare operation|作戦を準備|Preparar operación|Préparer l'opération|Einsatz vorbereiten
Seçimlerini yap, sonra harekâtı canlı yayınla başlat (1 eylem).|Make your choices, then start the operation on live feed (1 action).|選択を済ませたら、ライブ映像で作戦を開始せよ（1行動）。|Haz tus elecciones y luego inicia la operación en directo (1 acción).|Fais tes choix, puis lance l'opération en direct (1 action).|Triff deine Auswahl und starte dann den Einsatz mit Live-Bild (1 Aktion).
HEDEF SUSTURULDU|TARGET SILENCED|目標沈黙|OBJETIVO SILENCIADO|CIBLE RÉDUITE AU SILENCE|ZIEL AUSGESCHALTET
HAT YARILDI|LINE BROKEN|戦線突破|LÍNEA ROTA|LIGNE PERCÉE|LINIE DURCHBROCHEN
KANAT KAPANDI|FLANK CLOSED|側面封鎖|FLANCO CERRADO|FLANC FERMÉ|FLANKE GESCHLOSSEN
CEPHE TUTUNDU|FRONT HELD|戦線維持|FRENTE MANTENIDO|FRONT TENU|FRONT GEHALTEN
BASKI KURULDU|PRESSURE ESTABLISHED|圧力確立|PRESIÓN ESTABLECIDA|PRESSION ÉTABLIE|DRUCK AUFGEBAUT
HEDEF SUSTU|TARGET DOWN|目標沈黙|OBJETIVO ABATIDO|CIBLE NEUTRALISÉE|ZIEL STILL
SABIR KAZANDIRDI|PATIENCE PAID OFF|忍耐が実った|LA PACIENCIA DIO FRUTOS|LA PATIENCE A PAYÉ|GEDULD HAT SICH GELOHNT
TOPARLANIYORUZ|REGROUPING|態勢立て直し中|REAGRUPÁNDONOS|ON SE REGROUPE|WIR SAMMELN UNS
ZAMAN KAYBI|TIME LOST|時間の損失|TIEMPO PERDIDO|TEMPS PERDU|ZEITVERLUST
KIL PAYI|BY A HAIR|間一髪|POR LOS PELOS|DE JUSTESSE|HAARSCHARF
PUSU!|AMBUSH!|待ち伏せ！|¡EMBOSCADA!|EMBUSCADE !|HINTERHALT!
KAOS|CHAOS|混乱|CAOS|CHAOS|CHAOS
TEMAS KAYBI|CONTACT LOST|連絡途絶|CONTACTO PERDIDO|CONTACT PERDU|KONTAKT VERLOREN
KAYIP VAR|CASUALTIES|損害発生|HAY BAJAS|DES PERTES|VERLUSTE
Seçili bölge|Selected region|選択中の地域|Región seleccionada|Région sélectionnée|Ausgewählte Region`.split('\n').forEach(l => { const c = l.split('|'); if (c.length === 6) I18N[c[0]] = c });
i18Add(`Başarılı harekâtlar: #|Successful operations: $1|成功した作戦：$1|Operaciones con éxito: $1|Opérations réussies : $1|Erfolgreiche Einsätze: $1`);
