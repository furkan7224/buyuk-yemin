import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();const errs=[];const out={};
for(const loc of ['tr','en']){
const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,locale:loc});
p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{try{localStorage.setItem('by-fict','1');localStorage.setItem('by_music','0')}catch(e){}});
await p.goto('file://'+process.cwd()+'/demir-yemin.html');await p.waitForTimeout(1200);
await p.evaluate(()=>{UI.d.name='Test Asker';UI.d.trauma=TRAUMA[0].id;newGame()});await p.waitForTimeout(600);
await p.evaluate(()=>{while(MO)nextModal();UI.scr='game';UI.tab='hq';render()});await p.waitForTimeout(400);
await p.screenshot({path:`v37-hq-${loc}.png`});
out[loc+'_oldcard']=await p.evaluate(()=>document.querySelectorAll('.pcard33').length+'/'+document.querySelectorAll('.ptop36').length);
// başarısız harekât simülasyonu
out[loc+'_q']=await p.evaluate(()=>{S.mRes={res:0,xp:5,trs:-2};pushModal({k:'Harekât sonrası rapor · TEST',ti:'Başarısız',body:'<p>rapor</p>'});const a=[MO&&MO.ti,Q.map(x=>x.ti)];nextModal();return [a,MO&&MO.ti]});
await p.waitForTimeout(400);await p.screenshot({path:`v37-fail-${loc}.png`});
out[loc+'_again']=await p.evaluate(()=>{nextModal();pushModal({k:'x',ti:'baska',body:''});return Q.length});
await p.evaluate(()=>{while(MO)nextModal()});
// başarılıda çıkmasın
out[loc+'_succ']=await p.evaluate(()=>{S.mRes={res:2};pushModal({k:'x',ti:'ok',body:''});const n=Q.length;while(MO)nextModal();return n});
// butonla mağaza açılıyor mu
await p.evaluate(()=>{S.mRes={res:0};pushModal({k:'x',ti:'r',body:''});nextModal()});
await p.click('#modal button:has-text("'+(loc==='tr'?"Premium'a geç":'Go Premium')+'")').catch(e=>errs.push('click '+e.message));
await p.waitForTimeout(400);out[loc+'_scr']=await p.evaluate(()=>UI.scr+'/'+UI.st33);
// premium sahibi görmesin
out[loc+'_prem']=await p.evaluate(()=>{ENT32.premium=1;UI.scr='game';UI.tab='hq';render();const c=document.querySelectorAll('.ptop36').length;S.mRes={res:0};pushModal({k:'x',ti:'r',body:''});const n=Q.length;while(MO)nextModal();ENT32.premium=0;return c+'/'+n});
await p.close()}
console.log(JSON.stringify(out));console.log('ERR',errs);await b.close();
