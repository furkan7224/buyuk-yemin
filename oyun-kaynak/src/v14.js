/* =====================================================================
   v14 · REKLAMLAR (geçiş + ödüllü)
   Tüm sınırlar ADCFG içinde. Yayında Firebase Remote Config ile
   window.AD_REMOTE nesnesi verilirse bu değerlerin üzerine yazılır.
   Gerçek reklam için uygulama kabuğu window.AdBridge sağlar:
     AdBridge.showRewarded()     -> Promise<boolean> (ödül hak edildi mi)
     AdBridge.showInterstitial() -> Promise<void>
   AdBridge yoksa test ekranı gösterilir.
   ===================================================================== */
const ADCFG={
 inter:{everyDays:2,skipFirstDays:3,quietAfterRewardMin:30},
 rw:{ /* daily: günlük sınır (0 = sınırsız), cd: bekleme (dk), perOp: harekât başına */
  ap:{daily:3,cd:20,n:'+1 eylem hakkı'},
  xp2:{perOp:1,n:'Harekât tecrübesi ×2'},
  redo:{perOp:1,n:'Yeniden değerlendir'},
  time:{perOp:1,n:'Kritik an +15 saniye'},
  train2:{daily:2,cd:0,n:'Antrenman gelişimi ×2'},
  heal:{daily:0,cd:0,n:'Revir tedavisi'},
  salary:{weekly:1,n:'Maaş ikramiyesi'},
  rally:{perCamp:1,n:'Ek miting'}}};
(function(){try{const R_=window.AD_REMOTE;if(R_){Object.assign(ADCFG.inter,R_.inter||{});Object.keys(R_.rw||{}).forEach(k=>Object.assign(ADCFG.rw[k]||(ADCFG.rw[k]={}),R_.rw[k]))}}catch(e){}})();
function adS(){S.ads=S.ads||{day:S.day,cnt:{},last:{},lastRw:0,lastInter:0,week:{}};if(S.ads.day!==S.day){S.ads.day=S.day;S.ads.cnt={}}return S.ads}
/* ödüllü reklam şu an izlenebilir mi? [ok, neden] */
function rwCan(id){const c=ADCFG.rw[id];if(!c)return[false,''];const A_=adS();const now=Date.now();
 if(c.daily&&(A_.cnt[id]||0)>=c.daily)return[false,'Bugünkü destek hakkın doldu'];
 if(c.cd&&A_.last[id]&&now-A_.last[id]<c.cd*60000){const m=Math.ceil((c.cd*60000-(now-A_.last[id]))/60000);return[false,`Bir sonraki destek ${m} dk sonra`]}
 if(c.weekly&&(A_.week[id]||-99)>S.day-7)return[false,'Bu hafta kullanıldı'];
 if(c.perOp&&S.op&&((S.op.adu||{})[id]||0)>=c.perOp)return[false,'Bu harekâtta kullanıldı'];
 if(c.perCamp&&S.pol&&S.pol.camp&&S.pol.camp.ad)return[false,'Bu kampanyada kullanıldı'];
 return[true,'']}
function rwMark(id){const A_=adS();A_.cnt[id]=(A_.cnt[id]||0)+1;A_.last[id]=Date.now();A_.lastRw=Date.now();if(ADCFG.rw[id].weekly)A_.week[id]=S.day;if(ADCFG.rw[id].perOp&&S.op){S.op.adu=S.op.adu||{};S.op.adu[id]=(S.op.adu[id]||0)+1}if(id==='rally'&&S.pol&&S.pol.camp)S.pol.camp.ad=1}
/* reklam göster */
let ADON=false;
function showAd(kind,done){if(ADON)return;ADON=true;const fin=ok=>{ADON=false;done&&done(ok)};
 if(window.AdBridge){try{(kind==='rw'?window.AdBridge.showRewarded():window.AdBridge.showInterstitial().then(()=>true)).then(ok=>fin(!!ok)).catch(()=>fin(false))}catch(e){fin(false)}return}
 const el=document.createElement('div');el.id='adx';const sec=kind==='rw'?5:3;
 el.innerHTML=`<div class="adx"><div class="adx-top"><span>REKLAM</span><span id="adt">${sec}</span></div><div class="adx-c"><div class="adx-box"><svg viewBox="0 0 48 48" width="54" height="54"><circle cx="24" cy="24" r="21" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/><path d="M19 15 L34 24 L19 33Z" fill="#fff" fill-opacity=".7"/></svg><b>Reklam alanı</b><small>Uygulama sürümünde burada ${kind==='rw'?'ödüllü video reklam':'geçiş reklamı'} gösterilir.</small></div>${kind==='rw'?'<p class="small">Reklam bitince ödülün verilecek.</p>':''}</div><button class="adx-x" id="adclose" disabled>Kapat ✕</button></div>`;
 document.body.appendChild(el);let n=sec;const iv=setInterval(()=>{n--;const t=el.querySelector('#adt');if(t)t.textContent=Math.max(0,n);if(n<=0){clearInterval(iv);const b=el.querySelector('#adclose');b.disabled=false;b.textContent=kind==='rw'?'Ödülü al ✓':'Kapat ✕'}},1000);
 el.querySelector('#adclose').addEventListener('click',()=>{el.remove();fin(true)})}
/* ödüllü reklam akışı: izle -> ödülü ver */
function rwWatch(id,give){const[ok,why]=rwCan(id);if(!ok)return toast(why);showAd('rw',got=>{if(!got)return toast('Reklam tamamlanmadı; ödül verilmedi.');rwMark(id);give();save();render()})}
function rwBtn(id,label,act,v,cls){const[ok,why]=rwCan(id);return `<button class="rwb ${cls||''}" data-a="${act||'rw'}" data-v="${v||id}" ${ok?'':'disabled'}><span class="rwi">▶</span><span class="rwt"><b>${label}</b><small>${ok?'Destek talep et · kısa reklam':esc(why)}</small></span></button>`}

/* ---------- Ödüller ---------- */
function rwAction(v){const[id,arg]=String(v).split('|');
 if(id==='ap')return rwWatch('ap',()=>{S.ap++;toast('Destek geldi: +1 eylem hakkı.')});
 if(id==='heal')return rwWatch('heal',()=>{S.injured=Math.max(0,(S.injured||0)-1);addSt('saglik',3);toast(S.injured?`Revir tedavisi: iyileşmene ${S.injured} gün kaldı.`:'Revir tedavisi: tamamen iyileştin!')});
 if(id==='salary')return rwWatch('salary',()=>{const m=maas();S.money+=m;S.salaryAd=null;toast('Maaş ikramiyesi: +'+money(m))});
 if(id==='rally')return rwWatch('rally',()=>{S.pol.onay=clamp(S.pol.onay+4);toast('Ek miting meydanları doldurdu. Onay +4')});
 if(id==='time')return rwWatch('time',()=>{if(UI.kt)UI.kt.end=Math.max(UI.kt.end,Date.now())+15000;toast('Telsiz: "15 saniye kazandınız!"')});
 if(id==='train2')return rwWatch('train2',()=>{if(MG){MG.dbl=true;const b=document.querySelector('[data-v="train2"]');if(b){b.disabled=true;b.querySelector('small').textContent='Gelişim ×2 aktif'}}})}
/* kritik an: reklam izlenirken sayaç durur */
function rwTime(){const[ok,why]=rwCan('time');if(!ok)return toast(why);const rem=UI.kt?Math.max(0,UI.kt.end-Date.now()):0;clearTimeout(UI.ktT);UI.ktPause=true;
 showAd('rw',got=>{UI.ktPause=false;if(UI.kt)UI.kt.end=Date.now()+rem+(got?15000:0);if(got){rwMark('time');toast('Telsiz: "15 saniye kazandınız!"')}save();render()})}
/* harekât tecrübesi ×2 (rapor ekranından) */
function rwXp2(xp){const[ok,why]=rwCan('xp2');if(!ok){toast(why);return false}showAd('rw',got=>{if(got){rwMark('xp2');S.xp+=xp;if(S.mRes)S.mRes.xp=(S.mRes.xp||0)+xp;toast('Destek onaylandı: +'+xp+' ek tecrübe.');save();render()}});return true}
/* yeniden değerlendir: son kararı geri al */
function opSnap(){const o=S.op;if(!o)return;S.opSnap=JSON.stringify({op:Object.assign({},o,{snapX:undefined}),xp:S.xp,st:S.st,tim:S.tim?S.tim.m.map(m=>({n:m.n,w:m.w,mor:m.mor})):null})}
function rwRedo(){const[ok,why]=rwCan('redo');if(!ok)return toast(why);if(!S.opSnap||S.mDone)return toast('Geri alınacak karar yok.');
 showAd('rw',got=>{if(!got)return;const sn=JSON.parse(S.opSnap);const adu=(S.op.adu||{});S.op=sn.op;S.op.adu=Object.assign({},adu);S.xp=sn.xp;S.st=sn.st;if(sn.tim&&S.tim)sn.tim.forEach(x=>{const m=S.tim.m.find(y=>y.n===x.n);if(m){m.w=x.w;m.mor=x.mor}});rwMark('redo');S.opSnap=null;UI.kt=null;
  const el=$('#fx');if(el){el.hidden=true;el.innerHTML=''}FXQ.length=0;FXON=false;toast('Zaman geri sarıldı: kararını yeniden ver.');save();render()})}

/* ---------- Geçiş reklamı: 2 günde bir, yeni güne geçişte ---------- */
function interDue(rankBefore){const c=ADCFG.inter;const A_=adS();if(S.day<=c.skipFirstDays+1)return false;if(S.rank!==rankBefore)return false;if(A_.lastRw&&Date.now()-A_.lastRw<c.quietAfterRewardMin*60000)return false;if(A_.lastInter&&S.day-A_.lastInter<c.everyDays)return false;return true}
function interQueue(rankBefore){if(!interDue(rankBefore))return;S.interPending=true}
function interTry(){if(!S||!S.interPending||ADON)return;if(MO||Q.length||FXON||FXQ.length||$('#mg:not([hidden])')){setTimeout(interTry,800);return}S.interPending=false;adS().lastInter=S.day;save();showAd('inter',()=>{})}
function adCards(){let h='';if(S.ap<=0&&!S.izin)h+=`<div class="card adc"><div class="row" style="justify-content:space-between"><b class="stencil">Eylem hakkın bitti</b><span class="small muted">Dinlen ya da destek iste</span></div>${rwBtn('ap','+1 eylem hakkı')}<button class="btn ghost block" data-a="restend">Dinlen ve günü bitir</button></div>`;
 if(S.salaryAd&&S.salaryAd.d===S.day)h+=`<div class="card adc"><div class="row" style="justify-content:space-between"><b class="stencil">Maaş günü</b><span class="small muted">${money(maas())} yattı</span></div>${rwBtn('salary','Maaş ikramiyesi · maaşın kadar ek ödeme')}</div>`;return h}
const A14={rw:rwAction,rwtime:rwTime};
