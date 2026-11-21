/* ===== v41 · Geçiş reklamı sıklığı (1.1.2) =====
   Her oyun gününün sonunda geçiş reklamı; ilk 3 gün yok; ödüllü reklamdan sonra 5 dk sessiz.
   Premium sahiplerine hiç reklam çıkmaz (v33). Ayarlar furkan7224.github.io/ads.json ile uzaktan değiştirilebilir. */
Object.assign(ADCFG.inter,{everyDays:1,skipFirstDays:2,quietAfterRewardMin:5});
(function(){
 const apply=j=>{try{if(!j||typeof j!=='object')return;if(j.inter)Object.assign(ADCFG.inter,j.inter);if(j.rw)Object.keys(j.rw).forEach(k=>{if(ADCFG.rw[k])Object.assign(ADCFG.rw[k],j.rw[k])})}catch(e){}};
 try{apply(JSON.parse(localStorage.getItem('by_adcfg')||'null'))}catch(e){}
 try{if(typeof fetch==='function')fetch('https://furkan7224.github.io/ads.json?t='+Math.floor(Date.now()/36e5),{cache:'no-store'}).then(r=>r.ok?r.json():null).then(j=>{if(!j)return;apply(j);try{localStorage.setItem('by_adcfg',JSON.stringify(j))}catch(e){}}).catch(()=>{})}catch(e){}
})();
