import {chromium} from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route('**/*',r=>r.request().url().startsWith('file:')||r.request().url().startsWith('data:')?r.continue():r.abort());
await p.goto('file://'+process.cwd()+'/demir-yemin.html');
const rep=await p.evaluate(()=>{const K=window.__KB;const T=TALES.find(t=>t.id==='kostebek');const probs=new Set();const ends={};const ok={smart:0,smartN:0};
 const chk=(R,where)=>{let h;try{h=T.view(R)}catch(e){probs.add('view hatası '+where+': '+e.message);return}
  if(/undefined|NaN|\[object|\$\{/.test(h))probs.add('bozuk metin '+where+': '+h.match(/.{0,40}(undefined|NaN|\[object|\$\{).{0,20}/)[0]);
  if(R.end){try{const t=T.endText(R);if(/undefined|NaN/.test(t))probs.add('son metni bozuk '+R.end)}catch(e){probs.add('son hatası '+e.message)}}};
 const opts=R=>{const o=[];
  if(R.phase==='brief')return['bn'];if(R.phase==='night')return['morning'];if(R.phase==='turn')return['fin:ag','fin:cift'];
  if(R.res)return['ok'];
  if(R.menu==='accuse'){if(R.accSel)return['accgo:'+R.accSel,'acc:'];return K.IDS.filter(x=>!R.cleared[x]).map(x=>'acc:'+x)}
  if(R.menu)return['menu:'];
  if(R.ap>0){K.IDS.forEach(x=>{if(R.ivDay[x]!==R.day)o.push('iv:'+x)});['telsiz','nobet','defter','not','izmarit','banka'].forEach(c=>{if(!R.got[c]&&!R.destroyed[c]&&!(c==='banka'&&R.day<3)&&!(c==='izmarit'&&R.day<5&&!R.dropSeen))o.push('cl:'+c)});
   if(R.tailDay!==R.day)K.IDS.forEach(x=>o.push('tail:'+x));
   if(!R.trap&&R.day>=5&&R.day<=9){const a=K.IDS.filter(x=>!R.cleared[x]);if(a.length>=2){const s=a.sort(()=>Math.random()-.5);R.tsel=[s[0],s[1]];o.push('trap:go:'+s[0]+','+s[1])}}}
  if(R.day>=5&&Math.random()<.04)o.push('menu:accuse');
  o.push('night');return o};
 /* rastgele oyuncu */
 for(let n=0;n<4000;n++){const R=K.newRun();let g=0;while(!R.end&&g<400){g++;const o=opts(R);const v=o[Math.floor(Math.random()*o.length)];
   if(v==='menu:accuse'){R.menu='accuse';chk(R,'accuse');continue}
   try{K.act(R,v)}catch(e){probs.add('act hatası '+v+': '+e.message);break}chk(R,v)}
  if(!R.end)probs.add('bitmedi');ends[R.end]=(ends[R.end]||0)+1}
 /* akıllı oyuncu: her şeyi topla, takip et, tuzak kur, en şüpheliyi suçla */
 for(let n=0;n<3000;n++){const R=K.newRun();ok.smartN++;let g=0;
  const doA=v=>{K.act(R,v);if(R.res)K.act(R,'ok');if(R.phase==='night')K.act(R,'morning')};
  while(R.phase==='brief')K.act(R,'bn');
  while(!R.end&&g<200){g++;
   if(R.day>=9||(R.day>=5&&(()=>{const sc=K.IDS.map(x=>[x,K.str(R,x).s]).sort((a,b)=>b[1]-a[1]);return sc[0][1]>=7&&sc[0][1]-sc[1][1]>=3})())){const sc=K.IDS.map(x=>[x,K.str(R,x).s]).sort((a,b)=>b[1]-a[1]);if(R.day>=9||sc[0][1]>=7){K.act(R,'acc:'+sc[0][0]);K.act(R,'accgo:'+sc[0][0]);if(R.phase==='turn')K.act(R,'fin:cift');break}}
   const todo=[];['telsiz','nobet','defter','not','izmarit','banka'].forEach(c=>{if(!R.got[c]&&!R.destroyed[c]&&!(c==='banka'&&R.day<3)&&!(c==='izmarit'&&R.day<5&&!R.dropSeen))todo.push('cl:'+c)});
   K.IDS.forEach(x=>{if(!R.iv[x]&&R.ivDay[x]!==R.day)todo.push('iv:'+x)});
   let used=0;while(R.ap>0&&todo.length){doA(todo.shift());used++}
   if(R.ap>0&&!R.trap&&R.day>=5&&R.day<=8){const sc=K.IDS.filter(x=>!R.cleared[x]).map(x=>[x,K.str(R,x).s]).sort((a,b)=>b[1]-a[1]);R.tsel=[sc[0][0],sc[1][0]];doA('trap:go:'+sc[0][0]+','+sc[1][0])}
   if(R.ap>0&&R.tailDay!==R.day&&[4,8].includes(R.day)){const sc=K.IDS.filter(x=>!R.cleared[x]).map(x=>[x,K.str(R,x).s]).sort((a,b)=>b[1]-a[1]);doA('tail:'+sc[0][0])}
   if(R.end)break;K.act(R,'night');if(R.phase==='night')K.act(R,'morning')}
  if(R.end==='ag'||R.end==='cift')ok.smart++;ends['akıllı_'+R.end]=(ends['akıllı_'+R.end]||0)+1}
 return {probs:[...probs].slice(0,30),ends,smartWin:(ok.smart/ok.smartN).toFixed(3)}});
console.log(JSON.stringify(rep,null,1));console.log('ERR',JSON.stringify(errs));await b.close();
