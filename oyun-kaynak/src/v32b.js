/* =====================================================================
   v32b · Hikâye modu: sinematik ve sade arayüz (afiş kartları, altın paket bandı, satış ekranı)
   Bu dosyadaki işlevler v32.js'teki aynı adlı işlevlerin yerine geçer.
   ===================================================================== */
const sl32=h=>String(h).replace('<svg ','<svg preserveAspectRatio="xMidYMid slice" ');
const SOON32=[{id:'kriz',ti:'Kriz Masası',genre:'Siyaset · Gerilim',color:'#70a3c4'},{id:'efsane',ti:'Efsane Birlik',genre:'Dram · Savaş',color:'#7fb35a'}];
function soonArt32(c){return `<svg viewBox="0 0 360 150" width="100%" style="display:block" aria-hidden="true"><rect width="360" height="150" fill="#0d0f12"/><rect width="360" height="150" fill="${c}" opacity=".12"/><path d="M0 150 L0 110 Q90 80 180 104 T360 92 L360 150Z" fill="#07080a"/><circle cx="180" cy="62" r="20" fill="none" stroke="${c}" stroke-width="2" opacity=".5"/><path d="M174 56 h12 v12 h-12z" fill="${c}" opacity=".5"/></svg>`}
function allPosters32(){return TALES.map(t=>({t,soon:false})).concat(SOON32.filter(s=>!TALES.find(t=>t.id===s.id)).map(s=>({t:s,soon:true})))}
function poster32(t,soon,big){const P=soon?null:tp32(t.id);const ends=soon?0:talEnds32(t).length;
 const badge=soon?'Yakında':hasStory32()?(P&&P.done.length?`${P.done.length}/${ends} son`:'Açık'):'1. bölüm ücretsiz';
 return `<button class="tposter${big?' big':''}${soon?' soon':''}" ${soon?'disabled':`data-a="tale" data-v="${t.id}"`} style="--tc:${t.color}">
 <div class="tp-art">${sl32(soon?soonArt32(t.color):taleArt32(t.cover,t))}</div><div class="tp-ov"><span class="tp-g">${esc(t.genre)}</span><b class="stencil">${esc(t.ti)}</b>${!soon&&t.sub?`<small>${esc(t.sub)}</small>`:''}</div>
 <span class="tp-badge${!soon&&!hasStory32()?' free':''}">${esc(badge)}</span>${P&&P.run?'<span class="tp-run">Devam ediyor</span>':''}</button>`}
function packBanner32(){if(hasStory32())return '';const all=allPosters32();
 return `<div class="tpack"><div class="tpk-shine"></div><div class="tpk-h"><span class="tpk-k">Hikâye Paketi</span><b class="stencil">${all.length} hikâye · tek paket</b><small>Her hikâyenin tamamı, tüm sonlar ve kariyer madalyaları</small></div>
 <div class="tpk-mini">${all.map(({t,soon})=>`<div style="--tc:${t.color}">${sl32(soon?soonArt32(t.color):taleArt32(t.cover,t))}<span>${esc(t.ti)}</span></div>`).join('')}</div>
 <div class="tpk-buy"><div><span class="tpk-p">${P32('story')}</span><small>tek seferlik</small></div><button class="btn tpk-btn" data-a="buy" data-v="story">Paketi aç</button></div>
 <button class="tpk-prem" data-a="buy" data-v="premium"><span class="tpk-best">En iyi değer</span>Premium · ${P32('premium')} <em>paket dahil, reklamsız ve tüm özellikler ›</em></button></div>`}
function vTales32(){const runs=TALES.filter(t=>tp32(t.id).run&&!(t.custom?tp32(t.id).run.end:false));
 return `<div class="top gut"><button class="mini" data-a="back">‹ Geri</button><div class="who"><b>Hikâye modu</b><span>Kararların sonu belirler</span></div></div>
 <div class="scr plain gut" id="scr">
 <div class="tcar">${allPosters32().map(({t,soon})=>poster32(t,soon,true)).join('')}</div>
 ${packBanner32()}
 ${runs.length?`<div class="tcont"><span class="lbl">Kaldığın yerden</span>${runs.map(t=>`<button class="tcont-r" data-a="tale" data-v="${t.id}" style="--tc:${t.color}"><span class="tc-dot"></span><b>${esc(t.ti)}</b><span class="chev">›</span></button>`).join('')}</div>`:''}
 </div>`}
function vTaleIntro32(t){const P=tp32(t.id);if(P.run&&(t.custom?P.run.end:(!t.scenes[P.run.sc]||t.scenes[P.run.sc].end))){P.run=null;tpSave32()}const ends=talEnds32(t);
 return `<div class="tintro2" style="--tc:${t.color}"><div class="ti2-hero"><div class="ti2-art">${sl32(taleArt32(t.cover,t))}</div><div class="ti2-ov"><span class="tp-g">${esc(t.genre)}</span><h2 class="stencil">${esc(t.ti)}</h2></div></div>
 <p class="ti2-pitch">${esc(t.pitch)}</p>
 <div class="ti2-meta"><div><span class="lbl">Bölümler</span><div class="ti2-dots">${t.chapters.map((c,i)=>`<i class="${i===0||hasStory32()?'open':''}" title="${esc(c.ti)}"></i>`).join('')}</div><small>${hasStory32()?`${t.chapters.length} bölüm açık`:'1. bölüm ücretsiz'}</small></div>
 <div><span class="lbl">Sonlar</span><div class="ti2-dots">${ends.map(e=>`<i class="${P.done.includes(e.k)?'got':''}"></i>`).join('')}</div><small>${P.done.length}/${ends.length} bulundu</small></div></div>
 ${P.run?`<button class="btn block ti2-go" data-a="talego">Devam et</button><button class="ti2-link" data-a="talenew">Baştan başla</button>`:`<button class="btn block ti2-go" data-a="talenew">Hikâyeye başla</button>`}</div>`}
function vTaleLock32(t,chap,ci){const all=allPosters32();
 return `<div class="tpw" style="--tc:${t.color}"><div class="tpw-bg">${sl32(taleArt32(t.cover,t))}</div>
 <div class="tpw-in"><span class="tpw-k">Bölüm ${ci+1} · ${esc(chap.ti)}</span><h2 class="stencil">Hikâye burada bitmiyor.</h2>
 <p>Kaldığın yer kaydedildi. Paketi aç, <b>${esc(t.ti)}</b> hikâyesine tam buradan devam et.</p>
 <div class="tpw-card"><div class="tpk-shine"></div><span class="tpk-k">Hikâye Paketi</span>
  <div class="tpw-grid">${all.map(({t:x,soon})=>`<div style="--tc:${x.color}">${sl32(soon?soonArt32(x.color):taleArt32(x.cover,x))}<span>${esc(x.ti)}</span></div>`).join('')}</div>
  <ul class="tpw-ul"><li>${all.length} hikâyenin tamamı</li><li>Her hikâyede farklı sonlar</li><li>Kariyer modunda özel madalyalar</li></ul>
  <div class="tpw-price"><span class="tpk-p">${P32('story')}</span><small>tek seferlik ödeme</small></div>
  <button class="btn block tpk-btn big" data-a="buy" data-v="story">Paketi aç ve devam et</button></div>
 <button class="tpk-prem big" data-a="buy" data-v="premium"><span class="tpk-best">En iyi değer</span>Premium · ${P32('premium')} <em>Hikâye Paketi + reklamsız oyun + 2 kat tecrübe + istediğin rütbeden başla ›</em></button>
 <button class="ti2-link" data-a="tales">Daha sonra</button></div></div>`}
