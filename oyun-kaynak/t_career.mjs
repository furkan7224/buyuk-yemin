import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();
for(const prem of [false,true]){const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{localStorage.setItem('by-fict','1');localStorage.setItem('by_music','0')});
await p.goto('file://'+process.cwd()+'/demir-yemin.html');await p.waitForTimeout(800);
const r=await p.evaluate(async(prem)=>{if(prem){ENT32.premium=1;ENT32.story=1;entSave32()}UI.d.name='Test Asker';UI.d.trauma=TRAUMA[0].id;newGame();
 const close=()=>{let g=0;while(MO&&g++<50){const ch=MO.ch;try{if(ch&&ch[0]&&ch[0].fn)ch[0].fn()}catch(e){}nextModal()}const f=document.getElementById('fx');if(f)f.remove();try{FXON=false}catch(e){}Q.length=0;if(MO){MO=null}};
 close();const tabs=['hq','train','life','mission','world','prof'];
 for(let d=0;d<120;d++){for(const t of tabs){UI.tab=t;render()}
  for(const id of Object.keys(A).filter(k=>/^(do|tr|act)/.test(k)).slice(0,0)){}
  try{endDay(true)}catch(e){return 'endDay hata gün '+S.day+': '+e.message}close();try{if(S.rank<18&&Math.random()<.3){S.xp+=400;S.trust=Math.max(S.trust,80);promoCheck();close()}}catch(e){return 'promo hata '+e.message}}
 return {day:S.day,rank:S.rank,ap:S.ap,xp:S.xp}},prem);
console.log(prem?'PREMIUM':'NORMAL',JSON.stringify(r),'HATALAR',JSON.stringify(errs.slice(0,5)));await p.close()}
await b.close();
