// Tam tıklama taraması: her ekranda görünen her [data-a] butonuna tıklar, hata/donma arar.
// node t_crawl.mjs <html> <lang> [prem0|prem1] [rank]
import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const [file,L='tr',PM='prem0',RK='0']=process.argv.slice(2);
const SKIP=new Set(['reset','del','delSave','wipe','resetAll','buy33','storeBuy','restore33','rate','share','ext','link','mail','quit','slotDel33']);
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:390,height:844},hasTouch:false});
const errs=[];let cur='';p.on('pageerror',e=>errs.push(cur+' :: '+e.message));
await p.addInitScript(([l,pm])=>{try{localStorage.setItem('by-fict','1');localStorage.setItem('by-lang',l);window.open=()=>null;window.alert=()=>{};window.confirm=()=>true;window.prompt=()=>''}catch(e){}},[L,PM]);
await p.goto('file://'+file);await p.waitForTimeout(1500);
const res={title:[],game:{},stuck:[]};
const snapTitle=async()=>{await p.evaluate(()=>{S=null;Q.length=0;MO=null;const m=document.querySelector('#modal');if(m){m.hidden=true;m.innerHTML=''}UI.scr='title';render()});await p.waitForTimeout(80)};
// ---------- 1) başlık ekranı (kariyer yok) ----------
await snapTitle();
const tbtn=await p.evaluate(()=>[...document.querySelectorAll('#app [data-a]')].filter(e=>e.offsetParent).map(e=>[e.dataset.a,e.dataset.v||'']));
for(const [a,v] of tbtn){if(SKIP.has(a))continue;cur='title>'+a+':'+v;await snapTitle();
 const r=await p.evaluate(([a,v])=>{const sel=`#app [data-a="${a}"]`+(v?`[data-v="${v}"]`:'');const el=document.querySelector(sel);if(!el)return 'yok';el.click();return 'ok'},[a,v]);
 await p.waitForTimeout(120);
 // ikinci seviye: açılan ekrandaki butonlar
 const st=await p.evaluate(()=>[UI.scr,(document.querySelector('#app').innerText||'').length,!!MO]);
 res.title.push([a,v,r,st[0],st[1]]);
 if(st[1]<20&&!st[2])res.stuck.push(cur+' boş ekran');
 const sub=await p.evaluate(()=>[...document.querySelectorAll('#app [data-a],#modal [data-a]')].filter(e=>e.offsetParent).map(e=>[e.dataset.a,e.dataset.v||'']).slice(0,40));
 for(const [a2,v2] of sub){if(SKIP.has(a2)||a2==='buy33'||/buy/i.test(a2))continue;cur='title>'+a+'>'+a2+':'+v2;
  await snapTitle();await p.evaluate(([a,v])=>{const el=document.querySelector(`#app [data-a="${a}"]`+(v?`[data-v="${v}"]`:''));el&&el.click()},[a,v]);await p.waitForTimeout(60);
  await p.evaluate(([a,v])=>{const el=document.querySelector(`#app [data-a="${a}"]`+(v?`[data-v="${v}"]`:'')+`,#modal [data-a="${a}"]`+(v?`[data-v="${v}"]`:''));el&&el.click()},[a2,v2]);await p.waitForTimeout(60);
  const t=await p.evaluate(()=>(document.querySelector('#app').innerText||'').length+(MO?1000:0));if(t<20)res.stuck.push(cur+' boş ekran');}
}
// ---------- 2) kariyer ----------
await p.evaluate(([pm,rk])=>{if(pm==='prem1'){ENT32.premium=1;ENT32.story=1;entSave32()}UI.d.name='Tarama';UI.d.trauma='vatan';if(+rk>0&&isPrem33())UI.d.srank=+rk;newGame();Q.length=0;nextModal();if(+rk>0){S.rank=+rk;try{if(+rk>=18)polInit()}catch(e){}}S.money=500000;save()},[PM,RK]);
const SNAP=await p.evaluate(()=>JSON.stringify(S));
const reset=async(tab)=>{await p.evaluate(([s,tab])=>{S=JSON.parse(s);Q.length=0;MO=null;const m=document.querySelector('#modal');if(m){m.hidden=true;m.innerHTML=''}UI.scr='game';UI.tab=tab;UI.life=null;render()},[SNAP,tab]);await p.waitForTimeout(60)};
const tabs=await p.evaluate(()=>[...document.querySelectorAll('.nav [data-a=tab]')].map(e=>e.dataset.v));
for(const tab of tabs){cur='game>'+tab;await reset(tab);
 const btns=await p.evaluate(()=>{const s=new Set();return [...document.querySelectorAll('#app [data-a]')].filter(e=>e.offsetParent&&!e.closest('.nav')).map(e=>[e.dataset.a,e.dataset.v||'']).filter(k=>{const j=k.join('|');if(s.has(j))return false;s.add(j);return true})});
 res.game[tab]=btns.length;
 for(const [a,v] of btns){if(SKIP.has(a)||/buy|del|reset|wipe/i.test(a))continue;cur='game>'+tab+'>'+a+':'+v;await reset(tab);
  await p.evaluate(([a,v])=>{const el=document.querySelector(`#app [data-a="${a}"]`+(v?`[data-v="${CSS.escape(v)}"]`:''));el&&el.click()},[a,v]);await p.waitForTimeout(50);
  const st=await p.evaluate(()=>[(document.querySelector('#app').innerText||'').length,!!MO,UI.scr]);
  if(st[0]<20&&!st[1])res.stuck.push(cur+' boş ekran');
  // modal açıldıysa ilk seçeneği seç
  if(st[1]){await p.evaluate(()=>{const b=document.querySelector('#modal [data-a]');b&&b.click()});await p.waitForTimeout(40)}
  // açılan alt ekran butonlarından birkaçını dene
  const sub=await p.evaluate(()=>[...document.querySelectorAll('#app [data-a],#modal [data-a]')].filter(e=>e.offsetParent&&!e.closest('.nav')).map(e=>[e.dataset.a,e.dataset.v||'']).slice(0,12));
  for(const [a2,v2] of sub){if(SKIP.has(a2)||/buy|del|reset|wipe/i.test(a2))continue;cur='game>'+tab+'>'+a+'>'+a2+':'+v2;
   await p.evaluate(([a,v])=>{const el=document.querySelector(`#app [data-a="${a}"]`+(v?`[data-v="${CSS.escape(v)}"]`:'')+`,#modal [data-a="${a}"]`);el&&el.click()},[a2,v2]);await p.waitForTimeout(30);
   const t=await p.evaluate(()=>(document.querySelector('#app').innerText||'').length+(MO?1000:0));if(t<20){res.stuck.push(cur+' boş ekran');break}}
 }}
// gün sonu x5
cur='endDay';await reset('hq');for(let i=0;i<5;i++){await p.evaluate(()=>{try{A.endDay&&A.endDay()}catch(e){throw e}let n=0;while(MO&&n++<30){const b=document.querySelector('#modal [data-a]');b?b.click():nextModal()}});await p.waitForTimeout(80)}
// başlığa dön, mağaza, dil
cur='game>title';await p.evaluate(()=>{UI.scr='title';render()});await p.waitForTimeout(80);
for(const l of ['en','ja','es','fr','de','tr']){cur='lang '+l;await p.evaluate(l=>{const el=document.querySelector(`#app [data-a=lang][data-v="${l}"]`);el&&el.click()},l);await p.waitForTimeout(150)}
const lang=await p.evaluate(()=>LANG);
console.log(JSON.stringify({L,PM,RK,titleButtons:res.title.length,game:res.game,stuck:[...new Set(res.stuck)].slice(0,30),lang,errCount:errs.length}));
const uniq=[...new Set(errs.map(e=>e.replace(/:\d+/g,'')))];console.log('ERRORS',uniq.length);uniq.slice(0,40).forEach(e=>console.log(' -',e.slice(0,260)));
await b.close();
