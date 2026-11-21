/* ===== v41 · Geçiş reklamı sıklığı (1.1.2) =====
   Her oyun gününün sonunda geçiş reklamı; ilk 3 gün yok; ödüllü reklamdan sonra 5 dk sessiz.
   Premium sahiplerine hiç reklam çıkmaz (v33). Ayarlar furkan7224.github.io/ads.json ile uzaktan değiştirilebilir. */
Object.assign(ADCFG.inter,{everyDays:1,skipFirstDays:2,quietAfterRewardMin:5});
(function(){
 const apply=j=>{try{if(!j||typeof j!=='object')return;if(j.inter)Object.assign(ADCFG.inter,j.inter);if(j.rw)Object.keys(j.rw).forEach(k=>{if(ADCFG.rw[k])Object.assign(ADCFG.rw[k],j.rw[k])})}catch(e){}};
 try{apply(JSON.parse(localStorage.getItem('by_adcfg')||'null'))}catch(e){}
 try{if(typeof fetch==='function')fetch('https://furkan7224.github.io/ads.json?t='+Math.floor(Date.now()/36e5),{cache:'no-store'}).then(r=>r.ok?r.json():null).then(j=>{if(!j)return;apply(j);try{localStorage.setItem('by_adcfg',JSON.stringify(j))}catch(e){}}).catch(()=>{})}catch(e){}
})();
/* oyuncuyu sıkmama: iki geçiş reklamı arasında en az 3 dk gerçek zaman */
ADCFG.inter.minGapMin=ADCFG.inter.minGapMin||3;
ADCFG.inter.premEvery=ADCFG.inter.premEvery||3;   // her 3 geçiş reklamında bir "reklamsız oyna" önerisi
{const _d=interDue;interDue=function(rb){if(!_d(rb))return false;const A_=adS();return !(A_.interTs&&Date.now()-A_.interTs<ADCFG.inter.minGapMin*60000)}}
{const _sa=showAd;showAd=function(kind,done){
 if(kind!=='inter'||isPrem33())return _sa(kind,done);
 const A_=adS();A_.interTs=Date.now();A_.interN=(A_.interN||0)+1;
 return _sa(kind,ok=>{done&&done(ok);try{if(A_.interN%ADCFG.inter.premEvery===0&&!(A_.premTipTs&&Date.now()-A_.premTipTs<20*60000)){A_.premTipTs=Date.now();save();setTimeout(noAdTip41,500)}}catch(e){}})}}
function noAdTip41(){if(isPrem33()||document.getElementById('nat41'))return;window.__nat41=(window.__nat41||0)+1;an33('prem_offer','noads');
 const el=document.createElement('div');el.id='nat41';el.className='nat41';
 el.innerHTML=`<span class="nat41-c">${crown33(22)}</span><span class="grow"><b>Reklamsız oyna</b><small>Premium ile reklam yok, 2 kat tecrübe ve her gün +2 eylem.</small></span><button class="nat41-b">${esc(price33('premium'))}</button><button class="nat41-x" aria-label="Kapat">×</button>`;
 document.body.appendChild(el);requestAnimationFrame(()=>el.classList.add('on'));
 const close=()=>{el.classList.remove('on');setTimeout(()=>el.remove(),300)};
 el.querySelector('.nat41-x').onclick=close;
 el.querySelector('.nat41-b').onclick=()=>{close();an33('prem_offer_ok','noads');try{A.store33('p')}catch(e){}};
 setTimeout(close,9000);
 try{if(typeof trNode==='function'&&LANG!=='tr')trNode(el)}catch(e){}}
`Reklamsız oyna|Play ad-free|広告なしで遊ぶ|Juega sin anuncios|Joue sans pub|Werbefrei spielen
Premium ile reklam yok, 2 kat tecrübe ve her gün +2 eylem.|Premium: no ads, double experience and +2 actions every day.|プレミアムなら広告なし、経験値2倍、毎日+2行動。|Premium: sin anuncios, el doble de experiencia y +2 acciones al día.|Premium : sans pub, expérience doublée et +2 actions par jour.|Premium: keine Werbung, doppelte Erfahrung und täglich +2 Aktionen.`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
