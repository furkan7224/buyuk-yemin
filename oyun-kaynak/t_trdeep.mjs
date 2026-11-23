import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.dismiss());
await p.addInitScript(lg=>{try{localStorage.setItem('by-fict','1');localStorage.setItem('by_music','0');localStorage.setItem('by-lang',lg)}catch(e){}},process.env.LG||'en');
await p.goto('file://'+process.cwd()+'/demir-yemin.html');await p.waitForTimeout(1000);
await p.exposeFunction('noop',()=>{});
await p.evaluate(()=>{window.open=()=>null;window.__TRF=new Map();window.__grab=(tag)=>{try{if(LANG!=='tr'){trNode(document.body);const m=document.getElementById('modal');if(m)trNode(m)}}catch(e){}const TR=/[çğıöşüÇĞİÖŞÜ]|\b(ve|bir|ile|için|gün|olarak|bu|daha|çok|yok|var|sil|Sor|Sakin|Otomatik|yap|al|ver|kez|kalan|hafta|Kilitli)\b/;
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){const pe=n.parentElement;if(!pe||pe.closest('script,style,textarea,svg,.notr,.langp'))continue;const t=n.nodeValue.trim();if(t&&TR.test(t)&&!__TRF.has(t))__TRF.set(t,tag)}
 document.querySelectorAll('[placeholder]').forEach(e=>{const v=e.getAttribute('placeholder');if(v&&TR.test(v)&&!__TRF.has(v))__TRF.set(v,tag)})}});
const SKIP=/^(reset|reset2|lang|buy|restore33|music|share|rate|link|ext|quit|del|delete|wipe|slot|newslot|dev)/i;
const run=async(label,setup)=>{
 await p.evaluate(setup);await p.waitForTimeout(200);
 const snap=await p.evaluate(()=>JSON.stringify(S));
 for(const t of ['hq','train','life','mission','world','prof']){
  await p.evaluate(t=>{UI.scr='game';UI.tab=t;render();__grab('tab')},t);
  // alt sekmeleri ve butonları dolaş
  const subs=await p.evaluate(()=>[...document.querySelectorAll('#scr [data-a]')].filter(e=>/(sub|tab)$/i.test(e.dataset.a)).map(e=>[e.dataset.a,e.dataset.v??'']));
  const states=[null,...subs];
  for(const st of states){
   const ui=await p.evaluate(()=>JSON.stringify(Object.fromEntries(Object.entries(UI).filter(([k,v])=>typeof v!=='object'))));
   if(st)await p.evaluate(([a,v])=>{const e=document.querySelector(`#scr [data-a="${a}"][data-v="${v}"]`)||document.querySelector(`#scr [data-a="${a}"]`);e&&e.click();__grab('sub')},st);
   const btns=await p.evaluate(()=>[...document.querySelectorAll('#scr button[data-a]:not([disabled])')].map(e=>[e.dataset.a,e.dataset.v??'']).filter(x=>!/(sub|tab)$/i.test(x[0])));
   const ui2=await p.evaluate(()=>JSON.stringify(Object.fromEntries(Object.entries(UI).filter(([k,v])=>typeof v!=='object'))));
   const seen=new Set();
   for(const [a,v] of btns.slice(0,40)){if(SKIP.test(a)||seen.has(a))continue;seen.add(a);
    await p.evaluate(([a,v])=>{try{const e=document.querySelector(`#scr [data-a="${a}"][data-v="${CSS.escape(v)}"]`)||document.querySelector(`#scr [data-a="${a}"]`);if(!e)return;e.click();__grab('btn:'+a);
      for(let k=0;k<4&&MO;k++){__grab('modal:'+a);const c=document.querySelector('#modal button[data-a]');if(c&&k<2){c.click();__grab('modal2:'+a)}else nextModal()}while(MO)nextModal()}catch(err){}},[a,v]);
    await p.evaluate(([s,u])=>{try{S=JSON.parse(s);Object.assign(UI,JSON.parse(u));Q.length=0;MO=null;const m=document.querySelector('#modal');if(m){m.hidden=true;m.innerHTML=''}render()}catch(e){}},[snap,ui2]);
   }
   await p.evaluate(([s,u])=>{S=JSON.parse(s);Object.assign(UI,JSON.parse(u));render()},[snap,ui]);
  }
 }};
await p.evaluate(()=>{UI.d.name='Test Asker';UI.d.trauma=TRAUMA[0].id;newGame();while(MO)nextModal()});
await run('r0',()=>{for(let i=0;i<4;i++){S.mDone=1;endDay(true);while(MO)nextModal()}});
await run('r10',()=>{S.rank=10;S.money=500000;S.leave=3;for(let i=0;i<3;i++){S.mDone=1;endDay(true);while(MO)nextModal()}});
await run('r15',()=>{S.rank=15;for(let i=0;i<3;i++){S.mDone=1;endDay(true);while(MO)nextModal()}});
await run('r18',()=>{S.rank=18;try{if(typeof polStart==='function')polStart()}catch(e){}for(let i=0;i<2;i++){S.mDone=1;endDay(true);while(MO)nextModal()}});
const arr=await p.evaluate(()=>[...__TRF.entries()]);
fs.writeFileSync('trdeep-'+(process.env.LG||'en')+'.json',JSON.stringify(arr,null,1));
console.log('toplam',arr.length,'<=160',arr.filter(x=>x[0].length<=160).length,'>160',arr.filter(x=>x[0].length>160).length);console.log('ERR',[...new Set(errs)].slice(0,8));await b.close();
