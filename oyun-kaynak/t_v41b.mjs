import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.stack.split('\n').slice(0,3).join(' | ')));
await p.addInitScript(()=>{try{localStorage.setItem('by-fict','1')}catch(e){}});
await p.goto('file://'+process.cwd()+'/demir-yemin.html');await p.waitForTimeout(1200);
const r=await p.evaluate(async()=>{UI.d.name='T';UI.d.trauma=TRAUMA[0].id;newGame();while(MO)nextModal();
 const shown=[];window.AdBridge={showInterstitial:async()=>{shown.push('i'+S.day)},showRewarded:async()=>true};
 const day=async()=>{S.mDone=1;FXON=false;FXQ.length=0;endDay(true);while(MO)nextModal();FXON=false;FXQ.length=0;interTry();await new Promise(r=>setTimeout(r,40))};
 for(let i=0;i<6;i++)await day();const gap=shown.slice();
 // 3 dk sınırı: zamanı geri al
 const res={gap};const tips=[];
 for(let i=0;i<6;i++){adS().interTs-=4*60000;await day();await new Promise(r=>setTimeout(r,600));}
 res.all=shown;res.tipCount=window.__nat41||0;adS().premTipTs-=21*60000;for(let i=0;i<4;i++){adS().interTs-=4*60000;await day();await new Promise(r=>setTimeout(r,600))}res.tipAfter20=window.__nat41;UI.scr='game';UI.tab='hq';render();return res});
await p.evaluate(()=>{document.getElementById('nat41')||noAdTip41()});await p.waitForTimeout(500);await p.screenshot({path:'v41-tip.png'});
console.log(JSON.stringify(r));console.log('ERR',errs);await b.close();
