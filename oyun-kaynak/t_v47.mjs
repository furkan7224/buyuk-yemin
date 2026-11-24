import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const file=process.argv[2]||process.cwd()+'/demir-yemin.html';
const b=await chromium.launch();const errs=[];
for(const L of ['tr','en']){
const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>errs.push(L+': '+e.message));
await p.addInitScript(l=>{try{localStorage.setItem('by-fict','1');localStorage.setItem('by-lang',l)}catch(e){}},L);
await p.goto('file://'+file);await p.waitForTimeout(1200);
const o={L};
await p.evaluate(()=>{UI.d.name='Deneme';UI.d.trauma='vatan';newGame();Q.length=0;nextModal();UI.tab='hq';render()});
await p.waitForTimeout(1000);
o.daily=await p.evaluate(()=>MO&&MO.ti);
await p.screenshot({path:`v47-daily-${L}.png`});
// günlük al
await p.evaluate(()=>{const b=document.querySelector('#modal [data-a]');b&&b.click()});await p.waitForTimeout(300);
o.after=await p.evaluate(()=>[S.money,JSON.parse(localStorage.getItem('by_daily')||'{}').n,!!MO]);
o.hqCard=await p.evaluate(()=>!!document.querySelector('.ac47c'));
await p.screenshot({path:`v47-hq-${L}.png`});
await p.evaluate(()=>A.store33('p'));await p.waitForTimeout(300);
o.store=await p.evaluate(()=>[!!document.querySelector('.ac47'),!!document.querySelector('.cmp47')]);
await p.screenshot({path:`v47-store-${L}.png`,fullPage:true});
// satın al (önizleme yolu yerine doğrudan grant)
const m0=await p.evaluate(()=>S.money);
await p.evaluate(()=>grant33('acemi',false));await p.waitForTimeout(300);
o.grant=await p.evaluate(m0=>[S.money-m0,acemiOn47(),acemiShow47(),MO&&MO.ti],m0);
await p.evaluate(()=>nextModal());
o.ad=await p.evaluate(()=>new Promise(r=>showAd('inter',ok=>r(ok))));
await p.evaluate(()=>{UI.scr='game';UI.tab='hq';render()});
o.hqAfter=await p.evaluate(()=>!!document.querySelector('.ac47c'));
// xp çift
o.xp=await p.evaluate(()=>{save();const x0=S.xp;S.xp+=10;save();return S.xp-x0});
// premium: tablo gizli, paket gizli
await p.evaluate(()=>grant33('premium',true));await p.evaluate(()=>A.store33('p'));
o.prem=await p.evaluate(()=>[!!document.querySelector('.ac47'),!!document.querySelector('.cmp47')]);
// ertesi gün seri
o.streak=await p.evaluate(()=>{const o=JSON.parse(localStorage.getItem('by_daily'));const y=new Date();y.setDate(y.getDate()-1);o.last=y.getFullYear()+'-'+(y.getMonth()+1)+'-'+y.getDate();localStorage.setItem('by_daily',JSON.stringify(o));return dnext47()});
console.log(JSON.stringify(o));await p.close()}
console.log('ERR',errs);await b.close();
