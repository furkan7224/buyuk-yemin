import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();const errs=[];
for(const L of ['tr','en']){
const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(l=>{try{localStorage.setItem('by-fict','1');localStorage.setItem('by-lang',l)}catch(e){}},L);
await p.goto('file://'+process.cwd()+'/demir-yemin.html');await p.waitForTimeout(1200);
const o={L};
await p.evaluate(()=>{UI.d.name='Deneme';UI.d.trauma='vatan';newGame();while(MO)nextModal();UI.tab='hq';render()});
o.before=await p.evaluate(()=>[S.rank,!!document.querySelector('.c45')]);
await p.evaluate(()=>grant33('premium',false));await p.waitForTimeout(600);
o.modals=await p.evaluate(()=>[MO&&MO.ti,Q.map(m=>m.ti)]);
await p.evaluate(()=>{nextModal()});await p.waitForTimeout(300);
o.pick=await p.evaluate(()=>MO&&MO.ti);
await p.screenshot({path:`v45-pick-${L}.png`});
await p.evaluate(()=>{nextModal()});await p.waitForTimeout(300);
await p.screenshot({path:`v45-hq-${L}.png`});
o.card=await p.evaluate(()=>!!document.querySelector('.c45'));
await p.click('.c45');await p.waitForTimeout(300);
await p.click('[data-a=rk45][data-v="12"]');await p.waitForTimeout(400);
o.after=await p.evaluate(()=>[S.rank,myRank(),MO&&MO.ti]);
await p.evaluate(()=>{A.rk45(18)});await p.waitForTimeout(400);
o.mar=await p.evaluate(()=>[S.rank,!!S.pol,!!document.querySelector('.c45')]);
await p.screenshot({path:`v45-mar-${L}.png`});
console.log(JSON.stringify(o));await p.close();}
console.log('ERR',errs);await b.close();
{const b2=await chromium.launch();for(const L of ['tr','de']){const p=await b2.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const er=[];p.on('pageerror',e=>er.push(e.message));
await p.addInitScript(l=>{try{localStorage.setItem('by-fict','1');localStorage.setItem('by-lang',l)}catch(e){}},L);
await p.goto('file://'+process.cwd()+'/demir-yemin.html');await p.waitForTimeout(1200);
await p.evaluate(()=>{UI.d.name='Deneme';UI.d.trauma='vatan';newGame();while(MO)nextModal();UI.tab='hq';render()});
const free=await p.evaluate(()=>document.querySelector('.t45')?.innerText);
await p.evaluate(()=>grant33('premium',false));await p.waitForTimeout(500);await p.evaluate(()=>nextModal());await p.waitForTimeout(200);
const ch=await p.evaluate(()=>MO&&MO.ch.map(c=>c.t));
await p.evaluate(()=>{const i=MO.ch.findIndex(c=>/Hikâye/.test(c.t));A.mc(i)});await p.waitForTimeout(400);
const scr=await p.evaluate(()=>UI.scr);await p.screenshot({path:`v45-tales-${L}.png`});
await p.click('[data-a=back]');await p.waitForTimeout(300);const back=await p.evaluate(()=>UI.scr);
await p.screenshot({path:`v45-hq2-${L}.png`});
console.log(JSON.stringify({L,free,ch,scr,back,er}));await p.close()}await b2.close()}
