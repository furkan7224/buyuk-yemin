import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route('**/*',r=>r.request().url().startsWith('file:')||r.request().url().startsWith('data:')?r.continue():r.abort());
await p.goto('file://'+process.cwd()+'/demir-yemin.html');
const rep=await p.evaluate(()=>{const out={};
 const v=(x,st,fl)=>typeof x==='function'?x(st,fl):x;const cl=x=>Math.max(0,Math.min(100,Math.round(x)));
 for(const t of TALES){if(t.custom)continue;const r={problems:[],ends:{},visited:new Set(),steps:[]};const S=t.scenes;
  /* statik kontroller */
  for(const [id,sc] of Object.entries(S)){
   if(!sc.end&&(!sc.ch||!sc.ch.length))r.problems.push('Seçeneksiz sahne: '+id);
   if(sc.end&&sc.ch&&sc.ch.length)r.problems.push('Sonda seçenek var: '+id);
   (sc.ch||[]).forEach((o,i)=>{for(const k of ['go','ok','no'])if(typeof o[k]==='string'&&!S[o[k]])r.problems.push(`Hedef yok: ${id}[${i}].${k} → ${o[k]}`);
    if(o.p==null&&o.go==null)r.problems.push(`Hedefsiz seçenek: ${id}[${i}]`);if(o.p!=null&&(o.ok==null||o.no==null))r.problems.push(`Şans seçeneğinde ok/no eksik: ${id}[${i}]`)})}
  if(!S[t.start])r.problems.push('Başlangıç sahnesi yok');
  /* rastgele oynanış */
  const N=30000;let maxLen=0;
  for(let n=0;n<N;n++){let sc=t.start;const st=Object.assign({},t.stats),fl={};let steps=0;
   while(true){steps++;if(steps>300){r.problems.push('Döngü: '+sc);break}
    const s=S[sc];r.visited.add(sc);
    let body;try{body=v(s.b,st,fl);if(typeof body!=='string')r.problems.push('Metin metin değil: '+sc);else if(/undefined|NaN|\[object|\$\{/.test(body))r.problems.push('Bozuk metin: '+sc+' → '+body.match(/.{0,30}(undefined|NaN|\[object|\$\{).{0,20}/)[0])}catch(e){r.problems.push('Metin hatası '+sc+': '+e.message);break}
    try{v(s.art,st,fl)}catch(e){r.problems.push('Çizim hatası '+sc)}
    if(s.end){r.ends[s.end.k]=(r.ends[s.end.k]||0)+1;break}
    const opts=s.ch.filter(o=>!o.req||v(o.req,st,fl));
    if(!opts.length){r.problems.push('Seçilebilir seçenek yok: '+sc+' '+JSON.stringify(fl));break}
    opts.forEach(o=>{const tx=v(o.t,st,fl);if(!tx||/undefined/.test(tx))r.problems.push('Seçenek metni bozuk: '+sc)});
    const o=opts[Math.floor(Math.random()*opts.length)];
    let go=o.go,fx=o.fx,set=o.set;
    if(o.p!=null){const pr=v(o.p,st,fl);if(!(pr>=0&&pr<=1))r.problems.push('Şans aralık dışı: '+sc+' '+pr);const ok=Math.random()<pr;go=ok?o.ok:o.no;fx=Object.assign({},o.fx||{},ok?o.okfx:o.nofx);set=Object.assign({},o.set||{},ok?o.okset:o.noset)}
    if(fx)for(const k in fx){if(!(k in st))r.problems.push('Bilinmeyen gösterge: '+k+' @'+sc);else st[k]=cl(st[k]+v(fx[k],st,fl))}
    if(set)Object.assign(fl,set);
    if(typeof t.fail==='function'){const f=t.fail(st,fl,s.c);if(f){go=f;fl._failC=s.c}}
    if(typeof go==='function')go=go(st,fl);
    if(!S[go]){r.problems.push('Gidilecek sahne yok: '+sc+' → '+go);break}
    sc=go}
   maxLen=Math.max(maxLen,steps)}
  const all=Object.keys(S);r.unreached=all.filter(k=>!r.visited.has(k));
  out[t.id]={scenes:all.length,problems:[...new Set(r.problems)].slice(0,40),probCount:r.problems.length,ends:r.ends,unreached:r.unreached,maxLen}}
 return out});
console.log(JSON.stringify(rep,null,1));console.log('PAGE ERRORS',JSON.stringify(errs));await b.close();
