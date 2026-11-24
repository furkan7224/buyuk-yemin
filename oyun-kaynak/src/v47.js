/* =====================================================================
   v47 · 1.1.4 — satışı artıran üç şey
   1) Acemi Paketi: ilk 3 gün görünen ucuz, tek seferlik paket
      (75.000 ₺ oyun parası + 3 gün reklamsız + 3 gün 2 kat tecrübe)
   2) Mağazada "Ücretsiz / Premium" karşılaştırması
   3) Günlük giriş ödülü (7 günlük seri, Premium'da 2 kat)
   ===================================================================== */

/* ---------- 1) ACEMİ PAKETİ ---------- */
PROD33.acemi = {ti: 'Acemi Paketi', price: '₺99,99', type: 'non'};
PID33.acemi = 'com.gulergamestudios.buyukyemin.acemi';
const ACEMI47 = {cash: 150000, days: 3, show: 3};
const DAY47 = 864e5;
(function () { try { if (!localStorage.getItem('by_first')) localStorage.setItem('by_first', String(Date.now())) } catch (e) {} })();
function first47() { try { return +localStorage.getItem('by_first') || Date.now() } catch (e) { return Date.now() } }
function acemiOwned47() { return !!ENT32.acemi }
function acemiOn47() { return !!ENT32.acemiTs && Date.now() < ENT32.acemiTs + ACEMI47.days * DAY47 }
function acemiLeft47() { return first47() + ACEMI47.show * DAY47 - Date.now() }
function acemiShow47() { return !acemiOwned47() && !isPrem33() && acemiLeft47() > 0 }
function left47(ms) { const h = Math.max(0, Math.floor(ms / 36e5)); const d = Math.floor(h / 24); return d > 0 ? d + ' gün ' + (h % 24) + ' saat' : h + ' saat ' + Math.max(0, Math.floor(ms / 6e4) % 60) + ' dk' }
function acemiGrant47(silent) {
  if (ENT32.acemi) return; ENT32.acemi = 1; ENT32.acemiTs = Date.now(); entSave32();
  cashAdd36(ACEMI47.cash, '');
  an33('purchase', 'acemi');
  if (!silent) pushModal({k: 'Acemi Paketi', ti: 'Paketin hazır, asker.', art: `<div class="po37-art">${crown33(40)}</div>`,
    body: `<div class="pr33-li"><i>✓</i>${money(ACEMI47.cash)} oyun parası hesabına eklendi</div><div class="pr33-li"><i>✓</i>3 gün reklamsız oyun başladı</div><div class="pr33-li"><i>✓</i>3 gün 2 kat tecrübe başladı</div>`,
    ch: [{t: 'Göreve dön', fn: () => {}}]});
  try { save33() } catch (e) {} try { render() } catch (e) {}
}
{ const _g = grant33; grant33 = function (k, silent) { if (k === 'acemi') return acemiGrant47(silent); return _g.apply(this, arguments) } }
{ const _ig = window.IAPGrant; window.IAPGrant = function (k) { if (k === 'acemi') { if (!acemiOwned47()) acemiGrant47(true); return } return _ig(k) } }
{ const _sb = storeBuy; storeBuy = function (k) { if (k === 'acemi' && acemiOwned47()) return toast('Acemi Paketi\'ni zaten aldın.'); return _sb.apply(this, arguments) } }
/* geri yükleme: tüketilmeyen ürün olduğu için RevenueCat eşitlemesi IAPGrant('acemi') ile geri verir */
/* etkiler: reklamsız + 2 kat tecrübe (Premium yoksa) */
{ const _sa = showAd; showAd = function (kind, done) { if (!isPrem33() && acemiOn47()) { done && done(true); return } return _sa(kind, done) } }
{ const _ps = preSave33; preSave33 = function () { _ps.apply(this, arguments); try { if (!S || isPrem33() || !acemiOn47()) return;
  if (S._axl == null || S.rank !== S._axr) { S._axl = S.xp; S._axr = S.rank } const d = S.xp - S._axl; if (d > 0) S.xp += d; S._axl = S.xp; S._axr = S.rank } catch (e) {} } }

function acemiCard47(compact) {
  if (!acemiShow47()) return '';
  const pr = esc(price33('acemi'));
  if (compact) return `<button class="card ac47 ac47c" data-a="buy" data-v="acemi"><span class="ac47-b">YENİ ASKER</span><span class="grow"><b>Acemi Paketi</b><small>${money(ACEMI47.cash)} + 3 gün reklamsız + 2 kat tecrübe · ${left47(acemiLeft47())} kaldı</small></span><span class="ac47-p">${pr}<em>›</em></span></button>`;
  return `<div class="card ac47"><div class="tpk-shine"></div><div class="ac47-h"><span class="ac47-b">YENİ ASKERLERE ÖZEL</span><span class="ac47-t">⏱ ${left47(acemiLeft47())} kaldı</span></div>
   <b class="stencil ac47-ti">Acemi Paketi</b>
   <div class="pr33-li"><i>✓</i>${money(ACEMI47.cash)} oyun parası</div><div class="pr33-li"><i>✓</i>3 gün reklamsız oyun</div><div class="pr33-li"><i>✓</i>3 gün 2 kat tecrübe</div>
   <button class="btn block ac47-buy" data-a="buy" data-v="acemi"><span>Paketi al</span><b>${pr}</b></button><small class="pr33-n">Tek seferlik. Yalnızca ilk 3 gün.</small></div>`;
}
/* Karargâh: Premium kartının altında kısa şerit */
{ const _hq = vHQ; vHQ = function () { const h = _hq.apply(this, arguments); const c = acemiCard47(true); if (!c) return h; const i = h.indexOf('</button>'); return h.indexOf('ptop36') >= 0 && i > 0 ? h.slice(0, i + 9) + c + h.slice(i + 9) : c + h } }

/* ---------- 2) KARŞILAŞTIRMA TABLOSU ---------- */
function cmp47() {
  const R = [['Tecrübe', '1×', '2×'], ['Günlük eylem hakkı', 'Standart', '+2'], ['Reklamlar', 'Var', 'Yok'], ['Hikâye modu', 'İlk bölümler', '4 hikâyenin tamamı'],
    ['Başlangıç rütbesi', 'Er', 'İstediğin rütbe'], ['Kariyer yuvası', '1', '3'], ['Aylık oyun parası', '—', money(CASH36.monthly)]];
  return `<div class="card cmp47"><div class="cmp47-r cmp47-hd"><span></span><span>Ücretsiz</span><span>${crown33(14)} Premium</span></div>${R.map(r => `<div class="cmp47-r"><span>${r[0]}</span><span>${r[1]}</span><span>${r[2]}</span></div>`).join('')}<p class="cmp47-n">Tek seferlik ödeme · abonelik yok · ömür boyu senin</p></div>`;
}
{ const _vs = vStore33; vStore33 = function () { let h = _vs.apply(this, arguments); if ((UI.st33 || 'p') !== 'p') return h;
  /* sıra: Premium kartı → karşılaştırma → Acemi Paketi (Premium her zaman en üstte) */
  const ins = (isPrem33() ? '' : cmp47()) + acemiCard47(false);
  if (ins) { const i = h.indexOf('<div class="card prem33'); const j = i >= 0 ? h.indexOf('</div>', h.indexOf('pr33-n', i)) : -1;
    if (j > 0) h = h.slice(0, j + 6) + ins + h.slice(j + 6); else if (i >= 0) h = h.slice(0, i) + ins + h.slice(i) } return h } }

/* ---------- 3) GÜNLÜK GİRİŞ ÖDÜLÜ ---------- */
const DREW47 = [10000, 15000, 20000, 25000, 30000, 40000, 100000];
function dkey47(d) { d = d || new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() }
function dget47() { try { return JSON.parse(localStorage.getItem('by_daily') || '{}') } catch (e) { return {} } }
function dset47(o) { try { localStorage.setItem('by_daily', JSON.stringify(o)) } catch (e) {} }
function dnext47() { const o = dget47(); const today = dkey47(); if (o.last === today) return null;
  const y = new Date(); y.setDate(y.getDate() - 1); const cont = o.last === dkey47(y); const n = cont ? ((o.n || 0) % 7) + 1 : 1; return n }
function daily47() {
  const n = dnext47(); if (!n || !S) return; const p = isPrem33(); const amt = DREW47[n - 1] * (p ? 2 : 1);
  const boxes = DREW47.map((v, i) => `<div class="dr47${i + 1 < n ? ' got' : ''}${i + 1 === n ? ' now' : ''}${i === 6 ? ' big' : ''}"><small>${i + 1}. gün</small><b>${i + 1 < n ? '✓' : money(v * (p ? 2 : 1)).replace(' ₺', '')}</b>${i === 6 ? '<em>+2 eylem</em>' : ''}</div>`).join('');
  pushModal({k: 'Günlük ödül', ti: n === 7 ? 'Haftanın büyük ödülü!' : 'Günlük maaş primi', art: `<div class="dr47-g">${boxes}</div>`,
    body: `<p>Her gün gel, seriyi bozma. 7. gün büyük ödül seni bekliyor.</p>${p ? `<p class="small acc">${crown33(14)} Premium: ödüllerin 2 kat.</p>` : `<p class="small muted">Premium sahipleri her gün 2 katını alır: ${money(DREW47[n - 1] * 2)}.</p>`}`,
    ch: [{t: 'Al · ' + money(amt), fn: () => { const o = dget47(); o.last = dkey47(); o.n = n; dset47(o); S.money += amt; if (n === 7) S.ap += 2; an33('daily', String(n)); try { save() } catch (e) {} toast(money(amt) + ' hesabına eklendi.' + (n === 7 ? ' +2 eylem hakkı.' : '')); try { render() } catch (e) {} }}]
      .concat(p ? [] : [{t: 'Premium ile 2 kat al', fn: () => { setTimeout(() => A.store33('p'), 0) }}])});
}
{ const _vg = vGame; vGame = function () { const h = _vg.apply(this, arguments);
  try { if (S && !MO && !Q.length && !window.__d47 && dnext47() && S.day >= 1) { window.__d47 = 1; setTimeout(() => { if (!MO && !Q.length && UI.scr === 'game') daily47(); else window.__d47 = 0 }, 700) } } catch (e) {}
  return h } }

(function () { const st = document.createElement('style'); st.textContent = `
.ac47{position:relative;overflow:hidden;border:1.5px solid #e9c46a;background:linear-gradient(160deg,rgba(233,196,106,.16),rgba(20,18,12,.6));padding:16px;margin-bottom:12px}
.ac47-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.ac47-b{font-size:11px;letter-spacing:.14em;font-weight:800;color:#1a140a;background:linear-gradient(180deg,#f7dc8c,#c9962e);padding:3px 8px;border-radius:6px}
.ac47-t{font-size:12px;color:#f3c66b;font-weight:700}
.ac47-ti{font-size:24px;display:block;margin:4px 0 8px}
.ac47-buy{margin-top:10px;display:flex;justify-content:space-between;align-items:center}
.ac47c{display:flex!important;flex-direction:row!important;align-items:center;gap:10px;width:100%;text-align:left;padding:12px 14px}
.ac47c .grow{display:flex;flex-direction:column;gap:2px;flex:1}.ac47c small{opacity:.8;font-size:12px}.ac47-p{font-weight:800;color:#f3c66b;white-space:nowrap}.ac47-p em{font-style:normal;margin-left:4px}
.cmp47{padding:12px 14px;margin-bottom:12px}
.cmp47-r{display:grid;grid-template-columns:1.25fr .9fr 1.1fr;gap:6px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:13px;align-items:center}
.cmp47-r span:nth-child(2){opacity:.6;text-align:center}.cmp47-r span:nth-child(3){color:#f3c66b;font-weight:700;text-align:center}
.cmp47-hd{font-size:11px;letter-spacing:.1em;text-transform:uppercase;border-bottom:1px solid rgba(233,196,106,.35)}.cmp47-hd span:nth-child(2){opacity:.75}
.cmp47-n{font-size:11.5px;opacity:.7;text-align:center;margin:8px 0 0}
.dr47-g{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:4px 0 2px}
.dr47{border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:7px 4px;text-align:center;display:flex;flex-direction:column;gap:2px;background:rgba(255,255,255,.03)}
.dr47 small{font-size:10px;opacity:.7}.dr47 b{font-size:13px}.dr47 em{font-size:10px;font-style:normal;color:#f3c66b}
.dr47.got{opacity:.45}.dr47.now{border-color:#e9c46a;background:rgba(233,196,106,.16);box-shadow:0 0 14px rgba(233,196,106,.35)}
.dr47.big{grid-column:span 2;background:linear-gradient(160deg,rgba(233,196,106,.22),rgba(255,255,255,.03))}`; document.head.appendChild(st) })();

`Acemi Paketi|Recruit Pack|新兵パック|Pack de Recluta|Pack Recrue|Rekrutenpaket
Paketin hazır, asker.|Your pack is ready, soldier.|パックの準備ができた、兵士よ。|Tu pack está listo, soldado.|Ton pack est prêt, soldat.|Dein Paket ist bereit, Soldat.
3 gün reklamsız oyun başladı|3 days ad-free started|3日間の広告なしが開始|Comenzaron 3 días sin anuncios|3 jours sans pub ont commencé|3 Tage werbefrei gestartet
3 gün 2 kat tecrübe başladı|3 days of double experience started|3日間の経験値2倍が開始|Comenzaron 3 días de experiencia doble|3 jours d'expérience double ont commencé|3 Tage doppelte Erfahrung gestartet
Göreve dön|Back to duty|任務に戻る|Volver al deber|Retour au devoir|Zurück zum Dienst
Acemi Paketi'ni zaten aldın.|You already bought the Recruit Pack.|新兵パックは購入済みです。|Ya compraste el Pack de Recluta.|Tu as déjà acheté le Pack Recrue.|Du hast das Rekrutenpaket bereits gekauft.
YENİ ASKER|NEW RECRUIT|新兵|NUEVO RECLUTA|NOUVELLE RECRUE|NEUER REKRUT
YENİ ASKERLERE ÖZEL|FOR NEW RECRUITS ONLY|新兵限定|SOLO PARA NUEVOS RECLUTAS|RÉSERVÉ AUX NOUVELLES RECRUES|NUR FÜR NEUE REKRUTEN
3 gün reklamsız oyun|3 days ad-free|3日間広告なし|3 días sin anuncios|3 jours sans pub|3 Tage werbefrei
3 gün 2 kat tecrübe|3 days double experience|3日間経験値2倍|3 días de experiencia doble|3 jours d'expérience double|3 Tage doppelte Erfahrung
Paketi al|Get the pack|パックを購入|Comprar el pack|Prendre le pack|Paket holen
Tek seferlik. Yalnızca ilk 3 gün.|One-time. First 3 days only.|1回限り。最初の3日間のみ。|Único. Solo los primeros 3 días.|Unique. Seulement les 3 premiers jours.|Einmalig. Nur in den ersten 3 Tagen.
Ücretsiz|Free|無料|Gratis|Gratuit|Kostenlos
Tecrübe|Experience|経験値|Experiencia|Expérience|Erfahrung
Günlük eylem hakkı|Daily actions|1日の行動回数|Acciones diarias|Actions quotidiennes|Tägliche Aktionen
Standart|Standard|標準|Estándar|Standard|Standard
Reklamlar|Ads|広告|Anuncios|Publicités|Werbung
Var|Yes|あり|Sí|Oui|Ja
Yok|None|なし|No|Non|Keine
Hikâye modu|Story mode|ストーリーモード|Modo historia|Mode histoire|Story-Modus
İlk bölümler|First chapters|最初の章|Primeros capítulos|Premiers chapitres|Erste Kapitel
4 hikâyenin tamamı|All 4 stories|4つの物語すべて|Las 4 historias|Les 4 histoires|Alle 4 Geschichten
Başlangıç rütbesi|Starting rank|開始階級|Rango inicial|Grade de départ|Startrang
Er|Private|二等兵|Soldado|Soldat|Gefreiter
İstediğin rütbe|Any rank|好きな階級|Cualquier rango|Grade au choix|Beliebiger Rang
Kariyer yuvası|Career slots|キャリア枠|Ranuras de carrera|Emplacements de carrière|Karriereplätze
Aylık oyun parası|Monthly game money|毎月のゲーム内マネー|Dinero mensual del juego|Argent mensuel du jeu|Monatliches Spielgeld
Tek seferlik ödeme · abonelik yok · ömür boyu senin|One-time payment · no subscription · yours forever|買い切り・サブスクなし・永久にあなたのもの|Pago único · sin suscripción · tuyo para siempre|Paiement unique · sans abonnement · à toi pour toujours|Einmalzahlung · kein Abo · für immer deins
Günlük ödül|Daily reward|デイリー報酬|Recompensa diaria|Récompense quotidienne|Tägliche Belohnung
Haftanın büyük ödülü!|The big weekly reward!|今週の大きな報酬！|¡La gran recompensa semanal!|La grande récompense de la semaine !|Die große Wochenbelohnung!
Günlük maaş primi|Daily bonus pay|日替わりボーナス|Bono diario|Prime quotidienne|Täglicher Bonus
Her gün gel, seriyi bozma. 7. gün büyük ödül seni bekliyor.|Come back every day and keep the streak. A big reward awaits on day 7.|毎日ログインして連続記録を守ろう。7日目には大きな報酬が待っている。|Vuelve cada día y no rompas la racha. El día 7 te espera una gran recompensa.|Reviens chaque jour sans casser la série. Une grande récompense t'attend le 7e jour.|Komm jeden Tag wieder und halte die Serie. Am 7. Tag wartet eine große Belohnung.
Premium ile 2 kat al|Get 2× with Premium|プレミアムで2倍もらう|Consigue 2× con Premium|Obtiens 2× avec Premium|Mit Premium 2× erhalten
+2 eylem|+2 actions|+2行動|+2 acciones|+2 actions|+2 Aktionen`.split('\n').forEach(l => { const c = l.split('|'); if (c.length === 6) I18N[c[0]] = c });
i18Add(`# gün|Day $1|$1日目|Día $1|Jour $1|Tag $1
{} oyun parası hesabına eklendi|$1 game money added to your account|ゲーム内マネー$1を追加しました|$1 de dinero del juego añadido a tu cuenta|$1 d'argent du jeu ajouté à ton compte|$1 Spielgeld deinem Konto gutgeschrieben
Premium: ödüllerin 2 kat.|Premium: your rewards are doubled.|プレミアム：報酬が2倍。|Premium: tus recompensas se duplican.|Premium : tes récompenses sont doublées.|Premium: Deine Belohnungen sind verdoppelt.
Premium sahipleri her gün 2 katını alır: {}.|Premium owners get double every day: $1.|プレミアム会員は毎日2倍：$1。|Los usuarios Premium reciben el doble cada día: $1.|Les membres Premium reçoivent le double chaque jour : $1.|Premium-Besitzer bekommen jeden Tag das Doppelte: $1.
Al · {}|Claim · $1|受け取る · $1|Reclamar · $1|Récupérer · $1|Abholen · $1
{} hesabına eklendi.|$1 added to your account.|$1を追加しました。|$1 añadido a tu cuenta.|$1 ajouté à ton compte.|$1 gutgeschrieben.
{} hesabına eklendi. +2 eylem hakkı.|$1 added to your account. +2 actions.|$1を追加しました。+2行動。|$1 añadido a tu cuenta. +2 acciones.|$1 ajouté à ton compte. +2 actions.|$1 gutgeschrieben. +2 Aktionen.
{} + 3 gün reklamsız + 2 kat tecrübe · {} kaldı|$1 + 3 days ad-free + 2× XP · $2 left|$1＋3日間広告なし＋経験値2倍・残り$2|$1 + 3 días sin anuncios + 2× XP · quedan $2|$1 + 3 jours sans pub + 2× XP · encore $2|$1 + 3 Tage werbefrei + 2× EP · noch $2
⏱ {} kaldı|⏱ $1 left|⏱ 残り$1|⏱ quedan $1|⏱ encore $1|⏱ noch $1
# gün # saat|$1 d $2 h|$1日$2時間|$1 d $2 h|$1 j $2 h|$1 T $2 Std
# saat # dk|$1 h $2 min|$1時間$2分|$1 h $2 min|$1 h $2 min|$1 Std $2 Min`);
`150.000 ₺ oyun parası|₺150,000 game money|ゲーム内マネー₺150,000|₺150.000 de dinero del juego|150 000 ₺ d'argent du jeu|150.000 ₺ Spielgeld`.split('\n').forEach(l => { const c = l.split('|'); if (c.length === 6) I18N[c[0]] = c });
