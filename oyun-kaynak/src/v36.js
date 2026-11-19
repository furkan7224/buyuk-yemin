/* =====================================================================
   v36 · 1.1.1 güncellemesi
   1) Altın kalktı: tek para birimi oyun parası (₺). Paketler oyun parası verir.
   2) Hızlı öğün: tek dokunuşla bütün günün öğünleri, istersen her gün otomatik.
   3) Rütbe ilerlemesi biraz daha dengeli (daha çok tecrübe ve gün).
   4) Reklam yoksa anlaşılır mesaj.
   ===================================================================== */

/* ---------- 1) OYUN PARASI ---------- */
const CASH36={goldS:50000,goldL:150000,monthly:30000,rate:65};
PROD33.goldS.ti='50.000 ₺ oyun parası';PROD33.goldS.cash=CASH36.goldS;
PROD33.goldL.ti='150.000 ₺ oyun parası';PROD33.goldL.cash=CASH36.goldL;
/* hesap düzeyinde bekleyen para: kariyer yokken alınan paketler burada bekler */
let PEND36=0;try{PEND36=+(localStorage.getItem('by_cashp')||0)||0}catch(e){}
function pendSave36(){try{localStorage.setItem('by_cashp',String(PEND36))}catch(e){}}
/* eski altın bakiyesi oyun parasına çevrilir (kimse kaybetmez) */
if(GOLD33>0){PEND36+=Math.round(GOLD33*CASH36.rate);GOLD33=0;goldSave33();pendSave36();try{localStorage.setItem('by_goldconv','1')}catch(e){}}
function cashAdd36(n,msg){if(S){S.money+=n;try{save()}catch(e){}if(msg)toast(msg)}else{PEND36+=n;pendSave36();if(msg)toast(msg+' Kariyerine başlayınca hesabına geçecek.')}}
function pendApply36(){if(!S||PEND36<=0)return;const n=PEND36;PEND36=0;pendSave36();S.money+=n;try{save()}catch(e){}
 setTimeout(()=>toast(money(n)+' oyun parası hesabına geçti.'),500)}
monthly33=function(){if(!isPrem33())return;const d=new Date();const mk=d.getFullYear()+'-'+(d.getMonth()+1);if(ENT32.gm===mk)return;ENT32.gm=mk;entSave32();
 cashAdd36(CASH36.monthly);setTimeout(()=>toast('Premium: bu ayın '+money(CASH36.monthly)+' oyun parası hesabına eklendi.'),600)};
{const _g=grant33;grant33=function(k,silent){if(k==='goldL'||k==='goldS'){cashAdd36(PROD33[k].cash,silent?'':money(PROD33[k].cash)+' oyun parası hesabına eklendi.');save33();render();return}return _g(k,silent)}}
window.IAPGrant=function(k){if(k==='premium'){if(!isPrem33())grant33('premium',true);return}if(k==='story'){if(!hasStory32())grant33('story',true);return}
 if(k==='terfi'&&terfiWhy33()){cashAdd36(CASH36.goldS,'Terfi Emri şu an kullanılamadığı için karşılığı olan '+money(CASH36.goldS)+' oyun parası eklendi.');render();return}
 grant33(k)};
premList33=(_p=>function(){return _p().map(x=>x==='Her ay 500 altın hediye'?'Her ay '+money(CASH36.monthly)+' oyun parası hediye':x)})(premList33);
/* oyun parasıyla alınan ürünler */
GITEMS33.length=0;
[{id:'ap',ti:'+1 eylem hakkı',d:'Bugün bir eylem daha yap. Günde en fazla 2 kez.',c:6000,ok:()=>S&&(S.gAp||{}).d===S.day&&S.gAp.n>=2?'Bugün için sınıra ulaştın.':'',fn:()=>{S.gAp=(S.gAp&&S.gAp.d===S.day)?S.gAp:{d:S.day,n:0};S.gAp.n++;S.ap++;toast('+1 eylem hakkı.')}},
 {id:'morale',ti:'Moral desteği',d:'Ailenden bir koli gelir. Moralin +20.',c:8000,ok:()=>'',fn:()=>{S.st.mental=clamp(S.st.mental+20);toast('Moralin yükseldi.')}},
 {id:'heal',ti:'Tam iyileşme',d:'Sakatlığın hemen geçer, sağlığın toparlanır.',c:15000,ok:()=>S&&!S.injured&&S.st.saglik>=80?'Şu an iyileşmeye ihtiyacın yok.':'',fn:()=>{S.injured=0;S.st.saglik=clamp(Math.max(S.st.saglik,85));toast('Tamamen iyileştin.')}},
 {id:'trust',ti:'Komutanla özel görüşme',d:'Komutan güvenin +8 artar. Her rütbede bir kez.',c:25000,ok:()=>S&&(S.gTr||[]).includes(S.rank)?'Bu rütbede zaten kullandın.':'',fn:()=>{S.gTr=S.gTr||[];S.gTr.push(S.rank);S.trust=clamp(S.trust+8);toast('Komutan güveni +8.')}}
].forEach(x=>GITEMS33.push(x));
const cash36=(s=16)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2.5" fill="#5f8f4e"/><rect x="4" y="8" width="16" height="8" rx="1.5" fill="none" stroke="#cfe3b8" stroke-width="1.2"/><circle cx="12" cy="12" r="2.6" fill="#cfe3b8"/></svg>`;
function bal36(){return S?S.money:PEND36}
vStore33=function(){monthly33();const tab=UI.st33||'p';const p=isPrem33(),hs=hasStory32();
 const top=`<div class="top gut"><button class="mini" data-a="back">‹ Geri</button><div class="who"><b>Mağaza</b><span>${p?'Premium aktif':'Premium ve paketler'}</span></div><span class="gold33">${cash36(16)} <b class="num">${money(bal36())}</b></span></div>`;
 const tabs=`<div class="st33-tabs"><button class="${tab==='p'?'on':''}" data-a="st33tab" data-v="p">Premium ve Paketler</button><button class="${tab==='g'?'on':''}" data-a="st33tab" data-v="g">Oyun parasıyla al</button></div>`;
 let body='';
 if(tab==='p'){
  body+=p?`<div class="card prem33 owned"><span class="pr33-k">${crown33(18)} Premium aktif</span>${premList33().map(x=>`<div class="pr33-li"><i>✓</i>${x}</div>`).join('')}</div>`
  :`<div class="card prem33"><div class="tpk-shine"></div><span class="pr33-best">En iyi değer</span><span class="pr33-k">${crown33(18)} Premium</span><b class="stencil pr33-h">Tüm oyun, sınırsız.</b>
   ${premList33().map(x=>`<div class="pr33-li"><i>✓</i>${x}</div>`).join('')}
   <button class="btn block pr33-buy" data-a="buy" data-v="premium"><span>Premium'u al</span><b>${esc(price33('premium'))}</b></button><small class="pr33-n">Tek seferlik ödeme. Abonelik değildir.</small></div>`;
  if(!hs)body+=`<div class="card it33"><div class="it33-art">${TALES.slice(0,4).map(t=>`<div style="--tc:${t.color}">${sl32(taleArt32(t.cover,t))}</div>`).join('')}</div><div class="it33-b"><b>Hikâye Paketi</b><small>${TALES.length} hikâyenin tamamı, bütün sonlar ve madalyalar. Tek seferlik.</small></div><button class="btn it33-btn" data-a="buy" data-v="story">${esc(price33('story'))}</button></div>`;
  const tw=terfiWhy33();
  body+=`<div class="card it33"><span class="it33-i">${ico('rank',26)}</span><div class="it33-b"><b>Terfi Emri</b><small>Anında 1 rütbe terfi + kalıcı +1 günlük eylem hakkı. Her rütbede bir kez kullanılır.</small>${tw?`<small class="it33-w">${esc(tw)}</small>`:''}</div><button class="btn it33-btn${tw?' dis':''}" data-a="buy" data-v="terfi">${esc(price33('terfi'))}</button></div>`;
  body+=`<span class="lbl st33-l">Oyun parası paketleri</span><p class="small muted st33-sub">Ev, araba, evcil hayvan, tatil ve mağazadaki her şey için.</p><div class="gp33">
   <button class="card gpk33" data-a="buy" data-v="goldS">${cash36(32)}<b class="num">50.000 ₺</b><small>oyun parası</small><span class="btn">${esc(price33('goldS'))}</span></button>
   <button class="card gpk33 big" data-a="buy" data-v="goldL"><span class="gp33-t">+%50 daha fazla</span>${cash36(36)}<b class="num">150.000 ₺</b><small>oyun parası</small><span class="btn">${esc(price33('goldL'))}</span></button></div>`;
  body+=`<button class="ti2-link" data-a="restore33">Satın alımları geri yükle</button><p class="fnote">Ödemeler App Store veya Google Play hesabından alınır. Premium ve Hikâye Paketi bir kez satın alınır ve aynı hesapla geri yüklenebilir. Oyun parası ve Terfi Emri tükenen ürünlerdir; oyun parası aktif kariyerinin hesabına yatar.</p>`}
 else{
  body+=`<div class="card gbal33">${cash36(30)}<div class="grow"><span class="lbl">${S?'Hesabındaki para':'Bekleyen oyun paran'}</span><b class="num">${money(bal36())}</b></div><button class="mini" data-a="st33tab" data-v="p">Para al</button></div>`;
  if(!S)body+=`<p class="small muted">Bu ürünler kariyerinde kullanılır. Önce bir kariyere başla ya da devam et.</p>`;
  body+=GITEMS33.map(it=>{const w=S?it.ok():'Kariyer yok';const no=!S||!!w||S.money<it.c;return `<div class="card it33"><div class="it33-b"><b>${esc(it.ti)}</b><small>${esc(it.d)}</small>${S&&w?`<small class="it33-w">${esc(w)}</small>`:''}</div><button class="btn it33-btn g${no?' dis':''}" data-a="gbuy33" data-v="${it.id}">${money(it.c)}</button></div>`}).join('')}
 return top+`<div class="scr plain gut st33" id="scr">${tabs}${body}</div>`};
gbuy33=function(id){const it=GITEMS33.find(x=>x.id===id);if(!it)return;if(!S)return toast('Önce bir kariyere başla.');const w=it.ok();if(w)return toast(w);
 if(S.money<it.c){UI.st33='p';render();return toast('Yeterli paran yok. Oyun parası paketlerine göz at.')}
 pushModal({k:'Satın al',ti:it.ti,body:`<p><b>${money(it.c)}</b> harcanacak. Kalan paran: ${money(S.money-it.c)}.</p>`,ch:[{t:'Onayla',fn:()=>{S.money-=it.c;it.fn();an33('cash_spend',id);save();render()}},{t:'Vazgeç',fn:()=>{}}]})};
A33.gbuy33=v=>gbuy33(v);
{const _vt=vTitleX;vTitleX=function(){return _vt().replace('Premium, Hikâye Paketi, altın ve Terfi Emri','Premium, Hikâye Paketi, oyun parası ve Terfi Emri').replace('Altın paketleri ve Terfi Emri','Oyun parası paketleri ve Terfi Emri')}}
/* kariyer açılınca bekleyen para hesaba geçer */
{const _r=render;render=function(){const r=_r.apply(this,arguments);if(S&&PEND36>0)pendApply36();return r}}

/* ---------- 2) HIZLI ÖĞÜN ---------- */
function mealsSet36(mode){if(!S)return;['k','o','a'].forEach(k=>{S.meals[k]=mode==='best'?bestMeal(k):2})}
function mealsMissing36(){return ['k','o','a'].some(k=>S.meals[k]==null)}
{const _lf=lifeFood;lifeFood=function(){const h=_lf();const am=S.autoMeal||'';
 const all=['k','o','a'].every(k=>S.meals[k]!=null);
 const quick=`<div class="card qm36"><div class="sec-h"><h2>Hızlı öğün</h2>${all?'<span class="chip" style="color:var(--green)">Bugün tamam</span>':'<span class="chip" style="color:var(--amber)">Seçilmedi</span>'}</div>
  <div class="qm36-b"><button class="btn${am!=='mess'&&all&&['k','o','a'].every(k=>S.meals[k]===bestMeal(k))?'':' ghost'}" data-a="qmeal36" data-v="best"><b>Sağlıklı menü</b><small>3 öğünün en besleyicisi</small></button>
  <button class="btn${all&&['k','o','a'].every(k=>S.meals[k]===2)?'':' ghost'}" data-a="qmeal36" data-v="mess"><b>Yemekhane menüsü</b><small>Klasik, dengeli</small></button></div>
  <div class="qm36-a"><span class="small">Her gün otomatik seç:</span><div class="seg">${[['','Kapalı'],['best','Sağlıklı'],['mess','Yemekhane']].map(([v,t])=>`<button class="${am===v?'on':''}" data-a="automeal36" data-v="${v}">${t}</button>`).join('')}</div></div></div>`;
 const i=h.indexOf(`<div class="sec-t">${MEALN.k}</div>`),j=h.indexOf('<div class="sec-t">Ek</div>');
 if(i<0||j<0)return quick+h;
 return h.slice(0,i)+quick+`<details class="qm36-d"><summary>Öğünleri tek tek seç</summary>${h.slice(i,j)}</details>`+h.slice(j)}}
/* otomatik öğün: gün başında ve günü bitirmeden önce eksikleri doldurur */
{const _ed=endDay;endDay=function(force){if(S&&S.autoMeal&&mealsMissing36())['k','o','a'].forEach(k=>{if(S.meals[k]==null)S.meals[k]=S.autoMeal==='best'?bestMeal(k):2});
 const r=_ed.apply(this,arguments);if(S&&S.autoMeal)mealsSet36(S.autoMeal);return r}}
var A36={
 qmeal36(v){mealsSet36(v);save();render();toast(v==='best'?'Bugünün öğünleri: sağlıklı menü.':'Bugünün öğünleri: yemekhane menüsü.')},
 automeal36(v){S.autoMeal=v||'';if(v)mealsSet36(v);save();render();toast(v?'Öğünler artık her gün otomatik seçilecek.':'Otomatik öğün kapatıldı.')}};

/* ---------- 3) RÜTBE DENGESİ ---------- */
RANKS.forEach((r,i)=>{if(i>=18)return;
 r.xp=Math.round(r.xp*(i<3?1.35:i<8?1.45:1.5)/10)*10;
 r.d=[4,4,5,5,5,5,5,5,5,6,6,7,7,7,7,8,8,9][i]});

/* ---------- 4) REKLAM YOKSA ANLAŞILIR MESAJ ---------- */
rwWatch=function(id,give){const[ok,why]=rwCan(id);if(!ok)return toast(why);
 showAd('rw',got=>{if(!got)return toast(window.__adNoFill?'Şu an gösterilecek reklam yok. Biraz sonra tekrar dene.':'Reklam yarıda kaldı; ödül verilmedi.');rwMark(id);give();save();render()})};

`Oyun parasıyla al|Buy with cash|ゲーム内通貨で購入|Comprar con dinero|Acheter avec de l'argent|Mit Spielgeld kaufen
Oyun parası paketleri|Cash packs|資金パック|Paquetes de dinero|Packs d'argent|Geldpakete
oyun parası|in-game cash|ゲーム内通貨|dinero del juego|argent du jeu|Spielgeld
Ev, araba, evcil hayvan, tatil ve mağazadaki her şey için.|For a home, a car, pets, holidays and everything in the store.|家、車、ペット、休暇、ストアのすべてに。|Para casa, coche, mascotas, vacaciones y todo lo de la tienda.|Pour une maison, une voiture, des animaux, des vacances et toute la boutique.|Für Haus, Auto, Haustiere, Urlaub und alles im Shop.
+%50 daha fazla|+50% more|50%お得|+50% más|+50 % de plus|+50 % mehr
Hesabındaki para|Your balance|残高|Tu saldo|Ton solde|Dein Guthaben
Bekleyen oyun paran|Pending cash|保留中の資金|Dinero pendiente|Argent en attente|Ausstehendes Geld
Para al|Get cash|資金を購入|Comprar dinero|Obtenir de l'argent|Geld kaufen
Satın al|Buy|購入|Comprar|Acheter|Kaufen
Hızlı öğün|Quick meals|クイック食事|Comidas rápidas|Repas rapides|Schnelle Mahlzeiten
Sağlıklı menü|Healthy menu|ヘルシーメニュー|Menú saludable|Menu sain|Gesundes Menü
3 öğünün en besleyicisi|The most nutritious of all 3 meals|3食で最も栄養のある組み合わせ|Lo más nutritivo de las 3 comidas|Le plus nourrissant des 3 repas|Das Nahrhafteste aller 3 Mahlzeiten
Yemekhane menüsü|Mess hall menu|食堂メニュー|Menú del comedor|Menu du réfectoire|Kantinenmenü
Klasik, dengeli|Classic, balanced|定番でバランス良く|Clásico y equilibrado|Classique, équilibré|Klassisch, ausgewogen
Her gün otomatik seç:|Auto-pick every day:|毎日自動で選ぶ：|Elegir automáticamente cada día:|Choisir automatiquement chaque jour :|Jeden Tag automatisch wählen:
Kapalı|Off|オフ|Desactivado|Désactivé|Aus
Sağlıklı|Healthy|ヘルシー|Saludable|Sain|Gesund
Yemekhane|Mess hall|食堂|Comedor|Réfectoire|Kantine
Öğünleri tek tek seç|Choose each meal yourself|食事を個別に選ぶ|Elegir cada comida|Choisir chaque repas|Jede Mahlzeit selbst wählen
Bugün tamam|Done today|今日は完了|Hecho hoy|Fait aujourd'hui|Heute erledigt
Seçilmedi|Not chosen|未選択|Sin elegir|Non choisi|Nicht gewählt`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
