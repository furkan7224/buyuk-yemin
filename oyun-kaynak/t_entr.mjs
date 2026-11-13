import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+process.cwd()+'/demir-yemin.html');
const r=await p.evaluate(()=>{LANG='en';taleLang34();const v=(x,st,fl)=>typeof x==='function'?x(st,fl):x;const bad=new Set();
 const NM=/Aydın|Çelik|Yıldırım|Kâzım|Yıldızdere|Yeşilova|Akpınar|Taşlıca|Çamlık|Arı|Uçar|Ateş|Gülsüm|Şükrü|Rıfat|Nazlı|Rıza|Yalın/g;
 for(const t of TALES){if(t.custom)continue;for(let n=0;n<4000;n++){let sc=t.start;const st=Object.assign({},t.stats),fl={};for(let k=0;k<80;k++){const s=t.scenes[sc];const txt=v(s.b,st,fl);if(/[ğışçöüĞİŞÇÖÜ]/.test(txt.replace(NM,'')))bad.add(t.id+':'+sc+':'+txt.replace(NM,'').match(/.{0,25}[ğışçöüĞİŞÇÖÜ].{0,25}/)[0]);
   if(s.end)break;const os=s.ch.filter(o=>!o.req||v(o.req,st,fl));os.forEach(o=>{const tt=v(o.t,st,fl);if(/[ğışçöüĞİŞÇÖÜ]/.test(tt.replace(NM,'')))bad.add(t.id+':'+sc+':opt:'+tt)});const o=os[Math.floor(Math.random()*os.length)];let go=o.go,fx=o.fx,set=o.set;if(o.p!=null){const ok=Math.random()<v(o.p,st,fl);go=ok?o.ok:o.no;fx=Object.assign({},o.fx||{},ok?o.okfx:o.nofx);set=Object.assign({},o.set||{},ok?o.okset:o.noset)}if(fx)for(const q in fx)st[q]=Math.max(0,Math.min(100,st[q]+v(fx[q],st,fl)));if(set)Object.assign(fl,set);if(typeof t.fail==='function'){const f=t.fail(st,fl,s.c);if(f){go=f;fl._failC=s.c}}if(typeof go==='function')go=go(st,fl);sc=go}}}
 return [...bad]});console.log(r.length?r.join('\n'):'TEMİZ');await b.close();
