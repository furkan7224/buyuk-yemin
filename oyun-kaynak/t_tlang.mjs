import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();const res={};
for(const lg of ['en','ja','es','fr','de']){const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(l=>{try{localStorage.setItem('by-fict','1');localStorage.setItem('by-lang',l)}catch(e){}},lg);
await p.goto('file://'+process.cwd()+'/demir-yemin.html');await p.waitForTimeout(900);
res[lg]={};
for(const id of ['esir','kostebek','kriz','efsane']){
 await p.evaluate(id=>{ENT32.story=1;T32.id=id;UI.tintro=false;taleStart32(id,true)},id);await p.waitForTimeout(250);
 // ilk 3 seçimi yap
 for(let k=0;k<3;k++){await p.evaluate(()=>{const b=document.querySelector('#tscr [data-a="tch"], #tscr [data-a="kb"], #tscr [data-a="tnext"], #tscr [data-a="tcont"]');if(b)b.click()});await p.waitForTimeout(150)}
 const txt=await p.evaluate(()=>{try{trNode(document.body)}catch(e){}return (document.querySelector('#tscr')||document.body).innerText||''});
 const tr=(txt.match(/\b\w*[ğışĞİŞ]\w*\b/g)||[]).filter(w=>!/^(Kaya|Aras|Emre|Yıldırım|Hasan|Çelik|Zeynep|Nazlı|Hatice|Gülsüm|Akpınar|Çamlık|Tuğba|Barış|Şahin|İlker|Çetin|Doğan|Kılıç|Şimşek|Güneş|Aydın|Öztürk|Yılmaz|Erdoğan|Özdemir|Koç|Kurt)$/.test(w));
 const en=lg==='en'?[]:(txt.match(/\b(the|and|you|your|with|this)\b/gi)||[]);
 res[lg][id]={len:txt.length,tr:[...new Set(tr)].slice(0,6),en:en.length};
 if(id==='kriz'||id==='kostebek')await p.screenshot({path:`tl_${lg}_${id}.png`});
 await p.evaluate(()=>{UI.scr='tales';render()});
}
res[lg].errs=errs;await p.close()}
console.log(JSON.stringify(res,null,1));await b.close();
