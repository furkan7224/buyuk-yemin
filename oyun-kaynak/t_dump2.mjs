import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';import fs from 'fs';
const id=process.argv[2],lg=process.argv[3]||'tr';
const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+process.cwd()+'/demir-yemin.html');
const out=await p.evaluate(([id,lg])=>{LANG=lg;taleLang34();const t=TALES.find(x=>x.id===id);const v=(x,st,fl)=>typeof x==='function'?x(st,fl):x;const V={},C={};
 for(let n=0;n<20000;n++){let sc=t.start;const st=Object.assign({},t.stats),fl={};for(let k=0;k<80;k++){const s=t.scenes[sc];const txt=v(s.b,st,fl);(V[sc]=V[sc]||new Set()).add(txt);
  if(s.end)break;const os=s.ch.filter(o=>!o.req||v(o.req,st,fl));s.ch.forEach(o=>{(C[sc]=C[sc]||new Set()).add(v(o.t,st,fl)+(o.why?'  [kilit: '+o.why+']':''))});const o=os[Math.floor(Math.random()*os.length)];let go=o.go,fx=o.fx,set=o.set;if(o.p!=null){const ok=Math.random()<v(o.p,st,fl);go=ok?o.ok:o.no;fx=Object.assign({},o.fx||{},ok?o.okfx:o.nofx);set=Object.assign({},o.set||{},ok?o.okset:o.noset)}if(fx)for(const q in fx)st[q]=Math.max(0,Math.min(100,st[q]+v(fx[q],st,fl)));if(set)Object.assign(fl,set);if(typeof t.fail==='function'){const f=t.fail(st,fl,s.c);if(f){go=f;fl._failC=s.c}}if(typeof go==='function')go=go(st,fl);sc=go}}
 let o='';for(const id of Object.keys(t.scenes)){o+=`\n######## ${id}\n`;[...(V[id]||[])].forEach((x,i)=>{o+=`--- varyant ${i+1}\n${x}\n`});(C[id]?[...C[id]]:[]).forEach(c=>o+=`  > ${c}\n`)}return o},[id,lg]);
fs.writeFileSync(`dump_${id}_${lg}.txt`,out);console.log(id,lg,out.length);await b.close();
