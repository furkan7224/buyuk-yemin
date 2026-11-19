/* =====================================================================
   v33 · MAĞAZA, PREMIUM, ALTIN, TERFİ EMRİ, KARİYER YUVALARI
   Ödeme: uygulamada window.IAPBridge (iap.js, Apple/Google satın alma).
   Tarayıcıda köprü yoksa yalnızca test önizlemesi açılır.
   ===================================================================== */
const PID33={premium:'com.gulergamestudios.buyukyemin.premium',story:'com.gulergamestudios.buyukyemin.hikaye',
 goldL:'com.gulergamestudios.buyukyemin.altin_buyuk',goldS:'com.gulergamestudios.buyukyemin.altin_kucuk',terfi:'com.gulergamestudios.buyukyemin.terfi'};
const PROD33={premium:{ti:'Premium',price:'₺299,99',type:'non'},story:{ti:'Hikâye Paketi',price:'₺99,99',type:'non'},
 goldL:{ti:'2.200 altın',price:'₺99,99',type:'con',gold:2200},goldS:{ti:'800 altın',price:'₺49,99',type:'con',gold:800},terfi:{ti:'Terfi Emri',price:'₺49,99',type:'con'}};
const isPrem33=()=>!!ENT32.premium;
/* ---- altın cüzdanı (hesap düzeyinde; kariyerden bağımsız) ---- */
let GOLD33=0;try{GOLD33=+(localStorage.getItem('by_gold')||0)||0}catch(e){}
function goldSave33(){try{localStorage.setItem('by_gold',String(GOLD33))}catch(e){}}
function goldAdd33(n){GOLD33=Math.max(0,GOLD33+n);goldSave33()}
const fmtG33=n=>Number(n).toLocaleString('tr-TR');
/* ---- basit satın alma istatistikleri (cihazda) ---- */
function an33(ev,id){try{const a=JSON.parse(localStorage.getItem('by_an')||'{}');const k=ev+(id?':'+id:'');a[k]=(a[k]||0)+1;localStorage.setItem('by_an',JSON.stringify(a))}catch(e){}
 try{fl35(ev,id||'')}catch(e){}}
/* ---- fiyat: mağazanın yerel fiyatı varsa o, yoksa varsayılan ---- */
function price33(k){try{const p=window.IAPBridge&&window.IAPBridge.price(PID33[k]);if(p)return p}catch(e){}return PROD33[k].price}
/* ---- aylık premium altını ---- */
function monthly33(){if(!isPrem33())return;const d=new Date();const mk=d.getFullYear()+'-'+(d.getMonth()+1);if(ENT32.gm===mk)return;ENT32.gm=mk;entSave32();goldAdd33(500);setTimeout(()=>toast('Premium: bu ayın 500 altını hesabına eklendi.'),600)}

/* ---- hakları ver ---- */
function grant33(k,silent){
 if(k==='premium'){ENT32.premium=1;ENT32.story=1;entSave32();monthly33();if(!silent)pushModal({k:'Premium',ti:'Premium aktif',body:`<p>Teşekkürler! Bütün Premium özellikler açıldı:</p>${premList33().map(x=>`<div class="pr33-li"><i>✓</i>${x}</div>`).join('')}`})}
 else if(k==='story'){ENT32.story=1;entSave32();if(!silent)toast('Hikâye Paketi açıldı. Bütün hikâyeler senin.')}
 else if(k==='goldL'||k==='goldS'){goldAdd33(PROD33[k].gold);if(!silent)toast(fmtG33(PROD33[k].gold)+' altın hesabına eklendi.')}
 else if(k==='terfi'){terfiNow33()}
 save33();render()}
function save33(){try{if(S)save()}catch(e){}}

/* ---- satın al ---- */
let BUSY33=false;
function storeBuy(k){if(!PROD33[k])return;if(BUSY33)return;
 if((k==='premium'&&isPrem33())||(k==='story'&&hasStory32()))return toast('Bu zaten sende.');
 if(k==='terfi'){const w=terfiWhy33();if(w)return toast(w)}
 an33('buy_click',k);
 const B=window.IAPBridge;
 if(B&&B.buy){BUSY33=true;toast('Mağaza açılıyor…');
  Promise.resolve(B.buy(PID33[k])).then(r=>{BUSY33=false;if(r&&r.ok){an33('buy_ok',k);grant33(k)}else if(r&&r.cancelled){an33('buy_cancel',k)}else{an33('buy_fail',k);toast((r&&r.msg)||'Satın alma tamamlanamadı. Hesabından ücret alınmadı.')}})
  .catch(()=>{BUSY33=false;an33('buy_fail',k);toast('Satın alma tamamlanamadı. Hesabından ücret alınmadı.')});return}
 if(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())return toast('Mağazaya şu an ulaşılamıyor. İnternet bağlantını kontrol edip tekrar dene.');
 /* tarayıcı önizlemesi */
 pushModal({k:'Önizleme',ti:PROD33[k].ti+' · '+price33(k),body:`<p class="small muted">Bu tarayıcı önizlemesidir; gerçek ödeme yalnızca uygulamada, App Store veya Google Play üzerinden alınır.</p>`,
  ch:[{t:'Test olarak al',fn:()=>{an33('buy_ok',k);grant33(k)}},{t:'Vazgeç',fn:()=>{}}]})}
function restore33(){an33('restore');const B=window.IAPBridge;
 if(!B||!B.restore)return toast('Geri yükleme yalnızca uygulamada çalışır.');
 toast('Satın alımlar kontrol ediliyor…');
 Promise.resolve(B.restore()).then(ids=>{ids=ids||[];let n=0;
  if(ids.includes(PID33.premium)&&!isPrem33()){grant33('premium',true);n++}
  if(ids.includes(PID33.story)&&!hasStory32()){grant33('story',true);n++}
  render();toast(n?'Satın alımların geri yüklendi.':(isPrem33()||hasStory32()?'Satın alımların zaten yüklü.':'Geri yüklenecek bir satın alım bulunamadı.'))})
 .catch(()=>toast('Geri yükleme şu an yapılamadı. Biraz sonra tekrar dene.'))}

/* ---- Terfi Emri ---- */
function terfiWhy33(){if(!S)return 'Terfi Emri için önce bir kariyere başlamalısın.';if(S.rank>=17)return 'Mareşallik ve devlet makamı Terfi Emri ile alınamaz.';
 if((S.terfi||[]).includes(S.rank))return 'Bu rütbede Terfi Emri\'ni zaten kullandın. Bir sonraki rütbede tekrar kullanabilirsin.';return ''}
function terfiNow33(){if(terfiWhy33())return;S.terfi=S.terfi||[];S.terfi.push(S.rank);
 const old=S.rank;S.xp=0;S.rank++;S.dIR=0;S.trust=clamp(Math.round(S.trust*.7+15));S.apB=(S.apB||0)+1;S.ap++;
 log('TERFİ EMRİ: '+myRank());
 try{ceremony(old,S.rank,['Terfi Emri ile anında terfi','Kalıcı +1 günlük eylem hakkı (toplam +'+S.apB+')','Maaş: '+money(maas(old))+' → '+money(maas())+' / hafta'],pick(PROMO))}catch(e){toast('Terfi ettin: '+myRank())}
 if(S.dl)S.dl.r=S.rank}

/* ---- Premium özellikleri ---- */
function premList33(){return ['Hikâye Paketi dahil: 4 hikâyenin tamamı','İstediğin rütbeden başla: erden mareşale, devlet kademesine','Kalıcı 2 kat tecrübe','Her gün +2 eylem hakkı','Reklamsız oyun; ödüller reklam izlemeden','Her ay 500 altın hediye','3 ayrı kariyer yuvası','Özel altın nişan ve profil çerçevesi']}
/* 2 kat tecrübe: kayıt anında kazanılan tecrübe ikiye katlanır */
{const _s=save;save=function(){preSave33();return _s.apply(this,arguments)}}
/* günlük eylem hakkı: Premium +2, Terfi Emri kalıcı +1'ler */
function preSave33(){try{if(!S)return;
 /* yeni gün: Premium +2, Terfi Emri kalıcı bonusları (gün başına bir kez) */
 if(S._apd==null)S._apd=S.day;else if(S.day!==S._apd){S._apd=S.day;S.ap+=(isPrem33()?2:0)+(S.apB||0)}
 /* 2 kat tecrübe */
 if(isPrem33()){if(S._xl==null||S.rank!==S._xr){S._xl=S.xp;S._xr=S.rank}const d=S.xp-S._xl;if(d>0)S.xp+=d;S._xl=S.xp;S._xr=S.rank}}catch(e){}}
/* reklamsız: Premium'da reklam gösterilmez, ödül doğrudan verilir */
{const _sa=showAd;showAd=function(kind,done){if(isPrem33()){done&&done(true);return}return _sa(kind,done)}}

/* ---- kariyer yuvaları ---- */
let SLOT33=0;try{SLOT33=+(localStorage.getItem('by_slot')||0)||0}catch(e){}
const slotKey33=n=>n?KEY+'-s'+n:KEY;
const curSlot33=()=>isPrem33()?SLOT33:0;
save=(_s=>function(){const k=curSlot33();if(!k)return _s.apply(this,arguments);preSave33();try{localStorage.setItem(slotKey33(k),JSON.stringify(S))}catch(e){}})(save);
loadSave=(_l=>function(){const k=curSlot33();if(!k)return _l.apply(this,arguments);try{const r=localStorage.getItem(slotKey33(k));return r?JSON.parse(r):null}catch(e){return null}})(loadSave);
function slotInfo33(n){try{const r=localStorage.getItem(slotKey33(n));if(!r)return null;const s=JSON.parse(r);return s&&s.name?s:null}catch(e){return null}}
function slotsModal33(){pushModal({k:'Premium',ti:'Kariyer yuvaları',body:`<p class="small muted">Üç ayrı kariyeri aynı anda sürdürebilirsin. Bir yuva seç; boş yuvada yeni bir kariyere başlarsın.</p>`+[0,1,2].map(n=>{const s=slotInfo33(n);
  return `<button class="mrow sl33${curSlot33()===n?' on':''}" data-a="slot33" data-v="${n}"><span class="mi">${n+1}</span><span><b>${s?esc(s.name):'Boş yuva'}</b><small>${s?esc(rankName(s.rank,s.nation,(brList(s.nation).find(b=>b.id===s.branch)||brList(s.nation)[0]).rs))+' · Gün '+s.day:'Yeni bir kariyere başla'}</small></span>${curSlot33()===n?'<span class="tag">Seçili</span>':'<span class="chev">›</span>'}</button>`}).join('')})}

/* ---- yeni oyunda başlangıç rütbesi (Premium) ---- */
{const _vc=vCreate;vCreate=function(){const h=_vc();const p=isPrem33();const nat=UI.d.nation||'TR';const br=brList(nat).find(b=>b.id===UI.d.branch)||brList(nat)[0];
 const sel=UI.d.sr==null?-1:UI.d.sr;
 const card=`<div class="card sr33${p?'':' lk'}"><div class="sec-h"><h2>Başlangıç rütbesi</h2><span class="pbadge33">${crown33(14)} Premium</span></div>
 ${p?`<p class="small muted">İstersen kariyerine doğrudan üst bir rütbeden başla. Devlet kademesine bile.</p><div class="sr33-grid"><button class="mini${sel<0?' on':''}" data-a="sr33" data-v="-1">Seçtiğin yoldan</button>${RANKS.map((r,i)=>`<button class="mini${sel===i?' on':''}" data-a="sr33" data-v="${i}">${esc(rankName(i,nat,br.rs))}</button>`).join('')}</div>`
 :`<p class="small muted">Premium ile kariyerine istediğin rütbeden başlayabilirsin: erden mareşale, hatta devlet kademesine.</p><button class="btn ghost block" data-a="store33" data-v="p">Premium'u incele</button>`}</div>`;
 return h.replace('<div class="row"><button class="btn ghost" data-a="toStory">',card+'<div class="row"><button class="btn ghost" data-a="toStory">')}}
{const _ng=newGame;newGame=function(){const sr=UI.d.sr;const r=_ng.apply(this,arguments);
 if(S&&isPrem33()&&sr!=null&&sr>=0&&sr!==S.rank){S.rank=sr;S.xp=0;S.trust=Math.max(S.trust,50);S.money=Math.max(S.money,2000+sr*1500);S.dl={xp:0,tr:S.trust,r:S.rank};try{pickOp()}catch(e){}log('Kariyerine '+myRank()+' olarak başladın.');save();render()}
 return r}}

/* ---- simgeler ve parçalar ---- */
const crown33=(s=18)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" fill="currentColor"/><rect x="5" y="20" width="14" height="2" rx="1" fill="currentColor"/></svg>`;
const coin33=(s=16)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e3b341"/><circle cx="12" cy="12" r="7" fill="none" stroke="#9a6f12" stroke-width="1.6"/><path d="M12 7.5l1.4 2.9 3.1.4-2.3 2.2.6 3.1-2.8-1.5-2.8 1.5.6-3.1-2.3-2.2 3.1-.4z" fill="#9a6f12"/></svg>`;
function premCard33(){if(isPrem33())return '';return `<button class="card pcard33" data-a="store33" data-v="p"><div class="tpk-shine"></div><span class="pc33-c">${crown33(26)}</span><span class="grow"><b class="stencil">Rütbeleri beklemek istemiyor musun?</b><small>Premium ile istediğin rütbeden başla, 2 kat tecrübe ve her gün +2 eylem hakkı kazan.</small></span><span class="pc33-p">${esc(price33('premium'))}<em>›</em></span></button>`}
/* üst bar tacı + rütbe yolunun üstünde Premium kartı */
{const _vg=vGame;vGame=function(){let h=_vg().replace('<div class="day">',`<button class="crown33${isPrem33()?' on':''}" data-a="store33" aria-label="Mağaza">${crown33(18)}</button><div class="day">`);
 const pc=premCard33();if(pc)h=h.replace(/<div class="card"><div class="sec-h"><h2>Rütbe yolu<\/h2>/,pc+'$&');
 if(isPrem33())h=h.replace('<span class="face">','<span class="face pface33">');return h}}
/* ana menü: mağaza satırı ve kariyer yuvaları */
{const _vt=vTitleX;vTitleX=function(){const p=isPrem33();
 const row=`<button class="mrow store33row" data-a="store33"><span class="mi">${crown33(22)}</span><span><b>${p?'Mağaza · Premium aktif':'Mağaza ve Premium'}</b><small>${p?'Altın paketleri ve Terfi Emri':'Premium, Hikâye Paketi, altın ve Terfi Emri'}</small></span>${p?'<span class="chev">›</span>':`<span class="tag33">${esc(price33('premium'))}</span>`}</button>`;
 const slot=p?`<button class="mrow" data-a="slots33"><span class="mi">${ico('rank',22)}</span><span><b>Kariyer yuvaları</b><small>Yuva ${curSlot33()+1} / 3 seçili</small></span><span class="chev">›</span></button>`:'';
 return _vt().replace('<button class="mrow tmrow32" data-a="tales">',row+slot+'<button class="mrow tmrow32" data-a="tales">')}}

/* ---- mağaza ekranı ---- */
const GITEMS33=[
 {id:'ap',ti:'+1 eylem hakkı',d:'Bugün bir eylem daha yap. Günde en fazla 2 kez.',g:60,ok:()=>S&&(S.gAp||{}).d===S.day&&S.gAp.n>=2?'Bugün için sınıra ulaştın.':'',fn:()=>{S.gAp=(S.gAp&&S.gAp.d===S.day)?S.gAp:{d:S.day,n:0};S.gAp.n++;S.ap++;toast('+1 eylem hakkı.')}},
 {id:'heal',ti:'Tam iyileşme',d:'Sakatlığın hemen geçer, sağlığın toparlanır.',g:150,ok:()=>S&&!S.injured&&S.st.saglik>=80?'Şu an iyileşmeye ihtiyacın yok.':'',fn:()=>{S.injured=0;S.st.saglik=clamp(Math.max(S.st.saglik,85));toast('Tamamen iyileştin.')}},
 {id:'cash',ti:'Maaş avansı',d:'Hesabına anında 3.000 ₺ yatar.',g:100,ok:()=>'',fn:()=>{S.money+=3000;toast('3.000 ₺ hesabına yattı.')}},
 {id:'trust',ti:'Komutanla özel görüşme',d:'Komutan güvenin +8 artar. Her rütbede bir kez.',g:200,ok:()=>S&&(S.gTr||[]).includes(S.rank)?'Bu rütbede zaten kullandın.':'',fn:()=>{S.gTr=S.gTr||[];S.gTr.push(S.rank);S.trust=clamp(S.trust+8);toast('Komutan güveni +8.')}},
 {id:'morale',ti:'Moral desteği',d:'Ailenden bir koli gelir. Moralin +20.',g:80,ok:()=>'',fn:()=>{S.st.mental=clamp(S.st.mental+20);toast('Moralin yükseldi.')}}];
function vStore33(){monthly33();const tab=UI.st33||'p';const p=isPrem33(),hs=hasStory32();
 const top=`<div class="top gut"><button class="mini" data-a="back">‹ Geri</button><div class="who"><b>Mağaza</b><span>${p?'Premium aktif':'Premium ve paketler'}</span></div><span class="gold33">${coin33(16)} <b class="num">${fmtG33(GOLD33)}</b></span></div>`;
 const tabs=`<div class="st33-tabs"><button class="${tab==='p'?'on':''}" data-a="st33tab" data-v="p">Premium ve Paketler</button><button class="${tab==='g'?'on':''}" data-a="st33tab" data-v="g">Altınla Al</button></div>`;
 let body='';
 if(tab==='p'){
  body+=p?`<div class="card prem33 owned"><span class="pr33-k">${crown33(18)} Premium aktif</span>${premList33().map(x=>`<div class="pr33-li"><i>✓</i>${x}</div>`).join('')}</div>`
  :`<div class="card prem33"><div class="tpk-shine"></div><span class="pr33-best">En iyi değer</span><span class="pr33-k">${crown33(18)} Premium</span><b class="stencil pr33-h">Tüm oyun, sınırsız.</b>
   ${premList33().map(x=>`<div class="pr33-li"><i>✓</i>${x}</div>`).join('')}
   <button class="btn block pr33-buy" data-a="buy" data-v="premium"><span>Premium'u al</span><b>${esc(price33('premium'))}</b></button><small class="pr33-n">Tek seferlik ödeme. Abonelik değildir.</small></div>`;
  if(!hs)body+=`<div class="card it33"><div class="it33-art">${TALES.slice(0,4).map(t=>`<div style="--tc:${t.color}">${sl32(taleArt32(t.cover,t))}</div>`).join('')}</div><div class="it33-b"><b>Hikâye Paketi</b><small>${TALES.length} hikâyenin tamamı, bütün sonlar ve madalyalar. Tek seferlik.</small></div><button class="btn it33-btn" data-a="buy" data-v="story">${esc(price33('story'))}</button></div>`;
  const tw=terfiWhy33();
  body+=`<div class="card it33"><span class="it33-i">${ico('rank',26)}</span><div class="it33-b"><b>Terfi Emri</b><small>Anında 1 rütbe terfi + kalıcı +1 günlük eylem hakkı. Her rütbede bir kez kullanılır.</small>${tw?`<small class="it33-w">${esc(tw)}</small>`:''}</div><button class="btn it33-btn${tw?' dis':''}" data-a="buy" data-v="terfi">${esc(price33('terfi'))}</button></div>`;
  body+=`<span class="lbl st33-l">Altın paketleri</span><div class="gp33">
   <button class="card gpk33" data-a="buy" data-v="goldS">${coin33(30)}<b class="num">800</b><small>altın</small><span class="btn">${esc(price33('goldS'))}</span></button>
   <button class="card gpk33 big" data-a="buy" data-v="goldL"><span class="gp33-t">+%40 altın</span>${coin33(34)}<b class="num">2.200</b><small>altın</small><span class="btn">${esc(price33('goldL'))}</span></button></div>`;
  body+=`<button class="ti2-link" data-a="restore33">Satın alımları geri yükle</button><p class="fnote">Ödemeler App Store veya Google Play hesabından alınır. Premium ve Hikâye Paketi bir kez satın alınır ve aynı hesapla geri yüklenebilir. Altın ve Terfi Emri tükenen ürünlerdir.</p>`}
 else{
  body+=`<div class="card gbal33">${coin33(30)}<div class="grow"><span class="lbl">Altın bakiyen</span><b class="num">${fmtG33(GOLD33)}</b></div><button class="mini" data-a="st33tab" data-v="p">Altın al</button></div>`;
  if(!S)body+=`<p class="small muted">Altınla alınan ürünler kariyerinde kullanılır. Önce bir kariyere başla ya da devam et.</p>`;
  body+=GITEMS33.map(it=>{const w=S?it.ok():'Kariyer yok';const no=!S||!!w||GOLD33<it.g;return `<div class="card it33"><div class="it33-b"><b>${esc(it.ti)}</b><small>${esc(it.d)}</small>${S&&w?`<small class="it33-w">${esc(w)}</small>`:''}</div><button class="btn it33-btn g${no?' dis':''}" data-a="gbuy33" data-v="${it.id}">${coin33(14)} ${it.g}</button></div>`}).join('')}
 return top+`<div class="scr plain gut st33" id="scr">${tabs}${body}</div>`}
function gbuy33(id){const it=GITEMS33.find(x=>x.id===id);if(!it)return;if(!S)return toast('Önce bir kariyere başla.');const w=it.ok();if(w)return toast(w);
 if(GOLD33<it.g){UI.st33='p';render();return toast('Yeterli altının yok. Altın paketlerine göz at.')}
 pushModal({k:'Altınla al',ti:it.ti,body:`<p><b>${it.g} altın</b> harcanacak. Kalan bakiyen: ${fmtG33(GOLD33-it.g)} altın.</p>`,ch:[{t:'Onayla',fn:()=>{goldAdd33(-it.g);it.fn();an33('gold_spend',id);save();render()}},{t:'Vazgeç',fn:()=>{}}]})}

/* ---- yönlendirme ---- */
{const _r=render;render=function(){if(UI.scr==='store33'){const app=$('#app');try{applyTheme(curNat())}catch(e){}if(typeof fictOff==='function'&&!S)fictOff();app.innerHTML=vStore33();try{camoBg()}catch(e){}try{stopTitle()}catch(e){}return}return _r()}}
var A33={
 store33(v){an33('store_open');if(UI.scr!=='store33')UI.prev=UI.scr==='tale'||UI.scr==='tales'?UI.scr:(S&&UI.scr==='game'?'game':UI.scr);UI.st33=v==='g'?'g':'p';UI.scr='store33';render();window.scrollTo(0,0)},
 st33tab(v){UI.st33=v;render()},
 restore33(){restore33()},
 gbuy33(v){gbuy33(v)},
 slots33(){slotsModal33()},
 slot33(v){v=+v;if(!isPrem33())return;SLOT33=v;try{localStorage.setItem('by_slot',String(v))}catch(e){}S=null;UI.scr='title';Q.length=0;nextModal();toast('Yuva '+(v+1)+' seçildi.')},
 sr33(v){UI.d.sr=+v<0?null:+v;render()},
 reset2(){try{localStorage.removeItem(slotKey33(curSlot33()))}catch(e){}S=null;UI.confirmReset=false;UI.scr='title';render()}};
setTimeout(()=>monthly33(),1500);

`Mağaza|Store|ストア|Tienda|Boutique|Shop
Mağaza ve Premium|Store and Premium|ストアとプレミアム|Tienda y Premium|Boutique et Premium|Shop und Premium
Premium ve Paketler|Premium and Packs|プレミアムとパック|Premium y paquetes|Premium et packs|Premium und Pakete
Altınla Al|Buy with gold|ゴールドで購入|Comprar con oro|Acheter avec de l'or|Mit Gold kaufen
Altın paketleri|Gold packs|ゴールドパック|Paquetes de oro|Packs d'or|Goldpakete
Satın alımları geri yükle|Restore purchases|購入を復元|Restaurar compras|Restaurer les achats|Käufe wiederherstellen
En iyi değer|Best value|一番お得|Mejor valor|Meilleure offre|Bester Wert
Terfi Emri|Promotion Order|昇進命令|Orden de ascenso|Ordre de promotion|Beförderungsbefehl
Hikâye Paketi|Story Pack|ストーリーパック|Paquete de historias|Pack d'histoires|Story-Paket
Kariyer yuvaları|Career slots|キャリアスロット|Espacios de carrera|Emplacements de carrière|Karriere-Plätze
Başlangıç rütbesi|Starting rank|開始階級|Rango inicial|Grade de départ|Startrang
Onayla|Confirm|確認|Confirmar|Confirmer|Bestätigen
Vazgeç|Cancel|キャンセル|Cancelar|Annuler|Abbrechen`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
/* mağazadan kendiliğinden gelen satın alımlar (geri yükleme, yarım kalan ödeme vb.) */
window.IAPGrant=function(k){if(k==='premium'){if(!isPrem33())grant33('premium',true);return}if(k==='story'){if(!hasStory32())grant33('story',true);return}
 if(k==='terfi'&&terfiWhy33()){goldAdd33(800);toast('Terfi Emri şu an kullanılamadığı için karşılığı olan 800 altın hesabına eklendi.');render();return}
 grant33(k)};

/* ---- yeni isim: Büyük Yemin: Senin Hikâyen (1.1 güncellemesi) ---- */
Object.assign(GAMET,{tr:'Büyük Yemin: Senin Hikâyen',en:'Grand Oath: Your Story',ja:'大いなる誓い：あなたの物語',es:'El Gran Juramento: Tu historia',fr:'Le Grand Serment : Ton histoire',de:'Der Große Eid: Deine Geschichte'});
try{setTitle()}catch(e){}
{const _vt=vTitleX;vTitleX=function(){return _vt().replace(/(<div class="stencilbar"><span><\/span>)Erden mareşale(<span><\/span>)/,'$1Senin hikâyen$2')}}
I18N['Senin hikâyen']=['Senin hikâyen','Your story','あなたの物語','Tu historia','Ton histoire','Deine Geschichte'];
`Premium, Hikâye Paketi, altın ve Terfi Emri|Premium, Story Pack, gold and Promotion Order|プレミアム、ストーリーパック、ゴールド、昇進命令|Premium, paquete de historias, oro y orden de ascenso|Premium, pack d'histoires, or et ordre de promotion|Premium, Story-Paket, Gold und Beförderungsbefehl
Altın paketleri ve Terfi Emri|Gold packs and Promotion Order|ゴールドパックと昇進命令|Paquetes de oro y orden de ascenso|Packs d'or et ordre de promotion|Goldpakete und Beförderungsbefehl
Mağaza · Premium aktif|Store · Premium active|ストア・プレミアム有効|Tienda · Premium activo|Boutique · Premium actif|Shop · Premium aktiv
Premium aktif|Premium active|プレミアム有効|Premium activo|Premium actif|Premium aktiv
Premium ve paketler|Premium and packs|プレミアムとパック|Premium y paquetes|Premium et packs|Premium und Pakete
Tüm oyun, sınırsız.|The whole game, unlimited.|ゲームのすべてを無制限に。|Todo el juego, sin límites.|Tout le jeu, sans limites.|Das ganze Spiel, unbegrenzt.
Hikâye Paketi dahil: 4 hikâyenin tamamı|Story Pack included: all 4 stories|ストーリーパック込み：全4話|Incluye el paquete de historias: las 4 historias|Pack d'histoires inclus : les 4 histoires|Story-Paket inklusive: alle 4 Geschichten
İstediğin rütbeden başla: erden mareşale, devlet kademesine|Start at any rank: from private to marshal, even state leadership|好きな階級から開始：二等兵から元帥、国家指導部まで|Empieza en cualquier rango: de soldado a mariscal, incluso el Estado|Commence à n'importe quel grade : de soldat à maréchal, jusqu'à l'État|Starte in jedem Rang: vom Soldaten zum Marschall, bis zur Staatsführung
Kalıcı 2 kat tecrübe|Permanent 2× experience|経験値が永久に2倍|Experiencia ×2 permanente|Expérience ×2 permanente|Dauerhaft doppelte Erfahrung
Her gün +2 eylem hakkı|+2 actions every day|毎日行動回数+2|+2 acciones cada día|+2 actions par jour|Jeden Tag +2 Aktionen
Reklamsız oyun; ödüller reklam izlemeden|No ads; rewards without watching ads|広告なし：広告を見ずに報酬|Sin anuncios; recompensas sin ver anuncios|Sans publicité ; récompenses sans regarder de pub|Werbefrei; Belohnungen ohne Werbung
Her ay 500 altın hediye|500 gold every month|毎月500ゴールド|500 de oro cada mes|500 or chaque mois|Jeden Monat 500 Gold
3 ayrı kariyer yuvası|3 separate career slots|3つのキャリアスロット|3 espacios de carrera|3 emplacements de carrière|3 Karriere-Plätze
Özel altın nişan ve profil çerçevesi|Exclusive gold badge and profile frame|限定ゴールド記章とプロフィール枠|Insignia dorada y marco de perfil exclusivos|Insigne doré et cadre de profil exclusifs|Exklusives Goldabzeichen und Profilrahmen
Premium'u al|Get Premium|プレミアムを購入|Obtener Premium|Obtenir Premium|Premium holen
Tek seferlik ödeme. Abonelik değildir.|One-time payment. Not a subscription.|1回限りの支払い。サブスクリプションではありません。|Pago único. No es una suscripción.|Paiement unique. Pas un abonnement.|Einmalzahlung. Kein Abo.
Rütbeleri beklemek istemiyor musun?|Don't want to wait for ranks?|昇進を待ちたくない？|¿No quieres esperar los ascensos?|Tu ne veux pas attendre les grades ?|Keine Lust, auf Ränge zu warten?
Altın bakiyen|Gold balance|ゴールド残高|Saldo de oro|Solde d'or|Goldguthaben
Altın al|Buy gold|ゴールドを購入|Comprar oro|Acheter de l'or|Gold kaufen
altın|gold|ゴールド|oro|or|Gold`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
