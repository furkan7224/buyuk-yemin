/* ============ YARDIMCILAR ============ */
const $=s=>document.querySelector(s);
const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
const R=Math.random, pick=a=>a[Math.floor(R()*a.length)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='demir-yemin-v1';
let S=null;
const UI={scr:'title',tab:'hq',life:'mind',d:null,confirmReset:false};
const newDraft=()=>({age:21,nation:'TR',branch:'piyade',path:'er',sport:'',rel:'bekar',trauma:'',story:'',name:'',pname:'',look:{...DEFLOOK}});
UI.d=newDraft();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function loadSave(){try{const r=localStorage.getItem(KEY);return r?JSON.parse(r):null}catch(e){return null}}
function shade(h,a){const n=parseInt(h.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const t=a<0?0:255,p=Math.abs(a);r=Math.round((t-r)*p+r);g=Math.round((t-g)*p+g);b=Math.round((t-b)*p+b);return'#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}
function starPts(cx,cy,r){let p=[];for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,rr=k%2?r*.42:r;p.push((cx+rr*Math.cos(a)).toFixed(1)+','+(cy+rr*Math.sin(a)).toFixed(1))}return p.join(' ')}
function toast(t){const el=$('#toast');el.textContent=t;el.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(()=>el.hidden=true,2800)}
function log(t){S.log.unshift({d:S.day,t});S.log=S.log.slice(0,40)}
function news(t,ch){S.world.news.unshift({d:S.day,t});S.world.news=S.world.news.slice(0,30);if(typeof feed==='function')feed(ch||(/SAVAŞ|Cephe|cephe|ÇATIŞMA|harekât|bölge/i.test(t)?'saha':/İTTİFAK|ittifak|NATO|BARIŞ|ATEŞKES|GERGİNLİK/.test(t)?'global':/sanayii|yaptırım|enerji/.test(t)?'ekonomi':'global'),t)}
function addSt(k,v){S.st[k]=clamp(S.st[k]+v)}
function fx(o){return '<div class="fx">'+Object.entries(o).filter(([k,v])=>v).map(([k,v])=>`<span class="${v>0?'p':'n'}">${esc(k)} ${v>0?'+':''}${Math.round(v*10)/10}</span>`).join('')+'</div>'}

/* ============ TEMA ============ */
const curNat=()=>S?S.nation:(UI.scr==='create'?UI.d.nation:(loadSave()||{}).nation);
function getAcc(){const n=curNat();return n&&NAT[n]?NAT[n].th.acc:'#c9a64a'}
function applyTheme(nat){
 const r=document.documentElement.style;const th=nat&&NAT[nat]?NAT[nat].th:{bg:'#141510',acc:'#c9a64a',on:'#17150c',acc2:'#b8453a'};
 const bg=th.bg;r.setProperty('--bg',bg);r.setProperty('--bg2',shade(bg,.035));r.setProperty('--panel',shade(bg,.06));r.setProperty('--panel2',shade(bg,.11));r.setProperty('--line',shade(bg,.2));
 r.setProperty('--acc',th.acc);r.setProperty('--on-acc',th.on);r.setProperty('--acc2',th.acc2);
 const s=`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420" fill="none" stroke="${th.acc}" stroke-opacity=".07" stroke-width="1.2">${[40,70,100,130,160].map((rr,i)=>`<path d="M${210-rr} 200 Q${210-rr} ${200-rr*.9} ${210+rr*.2} ${200-rr} Q${210+rr*1.1} ${200-rr*.8} ${210+rr} ${205} Q${210+rr*.9} ${200+rr} ${200} ${200+rr*.95} Q${210-rr*1.05} ${200+rr*.7} ${210-rr} 200Z"/>`).join('')}${[30,55,80].map(rr=>`<ellipse cx="60" cy="360" rx="${rr}" ry="${rr*.7}"/><ellipse cx="370" cy="40" rx="${rr*.8}" ry="${rr*.55}"/>`).join('')}</svg>`;
 r.setProperty('--tex',`url("data:image/svg+xml;utf8,${encodeURIComponent(s)}")`);
 const m=document.querySelector('meta[name=theme-color]');if(m)m.content=bg;
}

/* ============ BİRLİKLER / RÜTBELER ============ */
function brList(nat){return(BRN[nat]||BRN.TR).map(([id,n,type,rs,beret,desc])=>{const t=BT[type];const nc=NAT[nat].camo;
 const bc=t.k==='deniz'||t.k==='sahil'?'#1e2c47':t.k==='hava'?'#2f4458':shade(nc[1],-.05);
 const hc=t.hat==='beret'?(beret||'#3f6b3c'):t.hat==='sailor'?'#e9e6dc':t.hat==='pilot'?'#7b8a95':t.hat==='cap'?shade(nc[1],-.1):nc[0];
 return{id,n,type,rs,k:t.k,hat:t.hat,hc,bc,d:desc||t.d,b:t.b,lock:t.lock,nv:rs==='navy'}})}
const B=()=>brList(S.nation).find(b=>b.id===S.branch)||brList(S.nation)[0];
const T=()=>TIER(S.rank);
const rankName=(i,nat,rs)=>{const sys=RS[nat]||RS.TR;return(sys[rs]||sys.land)[i]};
const myRank=()=>rankName(S.rank,S.nation,B().rs);
const tr=()=>TRAUMA.find(t=>t.id===S.trauma)||TRAUMA[5];
function cmdr(){const n=NAT[S.nation].cm;if(S.rank>=18)return'Başkomutanlık Makamı';if(S.rank>=16)return'Genelkurmay Başkanı '+rankName(17,S.nation,B().rs)+' '+n;return rankName(Math.min(S.rank+3,17),S.nation,B().rs)+' '+n}
function bodyFx(l){const bmi=l.kilo/((l.boy/100)**2);const o={guc:Math.round(clamp((l.kilo-70)/5,-3,6)),dayan:bmi>28?-4:bmi>25?0:bmi<19?-1:3,dovus:l.boy>=185?2:l.boy<=165?1:0};o.bmi=bmi;return o}
function bfxText(l){const b=bodyFx(l);const f=(n,v)=>v?n+' '+(v>0?'+':'')+v:'';return 'VKİ '+b.bmi.toFixed(1)+' · '+([f('Güç',b.guc),f('Dayanıklılık',b.dayan),f('Dövüş',b.dovus)].filter(Boolean).join(' · ')||'etki yok')}

/* ============ GÖRSELLER ============ */
let INSN=0;
function ins(idx,h=46,bc,gray){
 bc=bc||(S?B().bc:'#4a5530');const [t,k]=RANKS[idx].i;const id='in'+(INSN++);const g=`url(#${id}g)`;let c='';
 if(t==='chev')for(let j=0;j<k;j++){const y=46+j*12;c+=`<polyline points="8,${y} 20,${y+9} 32,${y}" fill="none" stroke="${g}" stroke-width="4.2" stroke-linejoin="round" filter="url(#${id}s)"/>`}
 if(t==='bar')for(let j=0;j<k;j++)c+=`<rect x="10" y="${78-j*9}" width="20" height="4.6" rx="1" fill="${g}" filter="url(#${id}s)"/>`;
 if(t==='star'||t==='field'||t==='gen'){const top=t==='star'?40:32;for(let j=0;j<k;j++)c+=`<polygon points="${starPts(20,top+j*14-(k-1)*3,6.6)}" fill="${g}" filter="url(#${id}s)"/>`;}
 if(t==='field')c+=`<rect x="7" y="80" width="26" height="5" rx="1" fill="${g}"/>`;
 if(t==='gen')c+=`<path d="M8 87 Q11 70 20 78 Q29 70 32 87" fill="none" stroke="${g}" stroke-width="2.6"/><path d="M10 80 l-3 -4 M30 80 l3 -4 M12 75 l-3 -4 M28 75 l3 -4" stroke="${g}" stroke-width="2"/><rect x="7" y="88" width="26" height="3.4" rx="1" fill="${g}"/>`;
 if(t==='mar')c+=`<circle cx="20" cy="56" r="14" fill="none" stroke="${g}" stroke-width="2.8" stroke-dasharray="3 2"/><polygon points="${starPts(20,56,8.5)}" fill="${g}" filter="url(#${id}s)"/><path d="M7 85 L33 72 M7 72 L33 85" stroke="${g}" stroke-width="3.4"/>`;
 return `<svg viewBox="0 0 40 100" height="${h}" width="${h*.4}" aria-hidden="true" style="${gray?'filter:grayscale(1) brightness(.55)':''}"><defs><linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3b8"/><stop offset=".45" stop-color="#e2bd55"/><stop offset="1" stop-color="#8a6420"/></linearGradient><linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(bc,-.25)}"/><stop offset=".5" stop-color="${shade(bc,.12)}"/><stop offset="1" stop-color="${shade(bc,-.3)}"/></linearGradient><filter id="${id}s"><feDropShadow dx="0" dy=".8" stdDeviation=".5" flood-opacity=".6"/></filter></defs>
 <rect x="3" y="3" width="34" height="94" rx="7" fill="url(#${id}b)" stroke="#000a"/><rect x="5.5" y="5.5" width="29" height="89" rx="5" fill="none" stroke="#ffffff22" stroke-dasharray="1.6 1.6"/><circle cx="20" cy="15" r="4.4" fill="${g}" filter="url(#${id}s)"/><circle cx="20" cy="15" r="1.6" fill="#00000055"/>${c}</svg>`;
}
function flagInnerReal(k){
 const s=(cx,cy,r,f)=>`<polygon points="${starPts(cx,cy,r)}" fill="${f}"/>`;
 switch(k){
 case'TR':return`<rect width="30" height="20" fill="#e30a17"/><circle cx="11" cy="10" r="5" fill="#fff"/><circle cx="12.3" cy="10" r="4" fill="#e30a17"/><polygon points="${starPts(17.2,10,2.4)}" fill="#fff" transform="rotate(-18 17.2 10)"/>`;
 case'ABD':{let r='<rect width="30" height="20" fill="#fff"/>';for(let i=0;i<13;i+=2)r+=`<rect y="${(i*20/13).toFixed(2)}" width="30" height="${(20/13).toFixed(2)}" fill="#b22234"/>`;r+='<rect width="12" height="10.77" fill="#3c3b6e"/>';for(let y=0;y<5;y++)for(let x=0;x<6;x++)r+=`<circle cx="${1+x*2}" cy="${1.1+y*2.1}" r=".45" fill="#fff"/>`;return r}
 case'RUS':return'<rect width="30" height="20" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#0039a6"/><rect y="13.33" width="30" height="6.67" fill="#d52b1e"/>';
 case'CIN':return`<rect width="30" height="20" fill="#ee1c25"/>${s(5,5,3,'#ffde00')}${s(10,2,1,'#ffde00')}${s(12,4,1,'#ffde00')}${s(12,7,1,'#ffde00')}${s(10,9,1,'#ffde00')}`;
 case'ALM':return'<rect width="30" height="20" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#dd0000"/><rect y="13.33" width="30" height="6.67" fill="#ffce00"/>';
 case'IGB':return'<rect width="30" height="20" fill="#012169"/><path d="M0 0L30 20M30 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0L30 20M30 0L0 20" stroke="#c8102e" stroke-width="1.4"/><path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="6"/><path d="M15 0V20M0 10H30" stroke="#c8102e" stroke-width="3.4"/>';
 case'FRA':return'<rect width="30" height="20" fill="#fff"/><rect width="10" height="20" fill="#0055a4"/><rect x="20" width="10" height="20" fill="#ef4135"/>';
 case'JPN':return'<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#bc002d"/>';
 case'PAK':return`<rect width="30" height="20" fill="#01411c"/><rect width="7.5" height="20" fill="#fff"/><circle cx="19" cy="10.5" r="5.8" fill="#fff"/><circle cx="20.6" cy="9" r="5" fill="#01411c"/><polygon points="${starPts(22,7.6,1.8)}" fill="#fff" transform="rotate(-30 22 7.6)"/>`;
 case'ISR':return`<rect width="30" height="20" fill="#fff"/><rect y="2.2" width="30" height="2.8" fill="#0038b8"/><rect y="15" width="30" height="2.8" fill="#0038b8"/><path d="M15 6.2 L18.3 11.9 L11.7 11.9Z M15 13.8 L18.3 8.1 L11.7 8.1Z" fill="none" stroke="#0038b8" stroke-width=".9"/>`;
 case'ITA':return'<rect width="30" height="20" fill="#fff"/><rect width="10" height="20" fill="#009246"/><rect x="20" width="10" height="20" fill="#ce2b37"/>';
 case'SUR':return`<rect width="30" height="20" fill="#fff"/><rect width="30" height="6.67" fill="#007a3d"/><rect y="13.33" width="30" height="6.67" fill="#000"/>${s(9,10,1.9,'#ce1126')}${s(15,10,1.9,'#ce1126')}${s(21,10,1.9,'#ce1126')}`;
 case'UZB':return`<rect width="30" height="20" fill="#fff"/><rect width="30" height="6.4" fill="#0099b5"/><rect y="13.6" width="30" height="6.4" fill="#1eb53a"/><rect y="6.4" width="30" height=".5" fill="#ce1126"/><rect y="13.1" width="30" height=".5" fill="#ce1126"/><circle cx="4.6" cy="3.2" r="2.2" fill="#fff"/><circle cx="5.4" cy="3.2" r="1.9" fill="#0099b5"/>${[...Array(12)].map((_,i)=>`<circle cx="${8+(i%5)*1.3}" cy="${1.2+Math.floor(i/5)*1.5}" r=".35" fill="#fff"/>`).join('')}`;
 case'AZE':{let p=[];for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?.8:1.6;p.push((17.6+r*Math.cos(a)).toFixed(2)+','+(10+r*Math.sin(a)).toFixed(2))}return`<rect width="30" height="20" fill="#00af66"/><rect width="30" height="13.33" fill="#e4002b"/><rect width="30" height="6.67" fill="#0092bc"/><circle cx="14" cy="10" r="3.6" fill="#fff"/><circle cx="15" cy="10" r="3" fill="#e4002b"/><polygon points="${p.join(' ')}" fill="#fff"/>`}
 }return'<rect width="30" height="20" fill="#777"/>';
}
const flag=(k,w=22)=>`<svg class="flag" viewBox="0 0 30 20" width="${w}" height="${(w*2/3).toFixed(1)}" aria-label="${NAT[k].n} bayrağı" role="img">${flagInner(k)}</svg>`;
function camoOf(nat,k){if(k==='deniz'||k==='sahil')return[['#2b3a55','#1e2a40','#3d5070','#172033'],1];if(k==='hava')return[['#5b6b78','#46545f','#7d8b95','#38434c'],0];return[NAT[nat].camo,NAT[nat].dig]}
let AVN=0;
function avatar(sz=96,br,rk,lk,nat,nameOverride){
 nat=nat||(S?S.nation:UI.d.nation);br=br||(S?B():brList(nat)[0]);rk=rk??(S?S.rank:0);lk=lk||(S&&S.look)||DEFLOOK;
 const id='av'+(AVN++),fem=lk.g==='k';
 const sk=SKINS[lk.skin]||SKINS[1],skD=shade(sk,-.22),skDD=shade(sk,-.4),skL=shade(sk,.14);
 const hc=(HAIRC[lk.hc]||HAIRC[1])[0],ey=(EYES[lk.eye]||EYES[0])[0];
 const w=clamp(1+(lk.kilo-75)/110,.84,1.26)*(fem?.9:1),hw=1+(lk.kilo-75)/400;
 const [cm,dig]=camoOf(nat,br.k);
 const pat=dig?`<rect width="24" height="24" fill="${cm[0]}"/>${[[0,0,4,4,1],[8,4,4,4,2],[16,0,4,8,3],[4,12,8,4,1],[16,16,4,4,2],[0,20,4,4,3],[12,8,4,4,3],[20,12,4,4,1]].map(([x,y,a,b,c])=>`<rect x="${x}" y="${y}" width="${a}" height="${b}" fill="${cm[c]}"/>`).join('')}`
  :`<rect width="44" height="44" fill="${cm[0]}"/><path d="M0 6 Q9 1 17 7 Q24 4 27 11 Q20 17 12 14 Q5 17 0 13Z" fill="${cm[1]}"/><path d="M24 22 Q33 17 42 23 Q44 31 36 33 Q30 29 25 33 Q20 28 24 22Z" fill="${cm[2]}"/><path d="M3 28 Q10 24 16 30 Q14 37 8 38 Q2 35 3 28Z" fill="${cm[3]}"/><path d="M30 2 Q38 0 42 6 Q38 11 32 9Z" fill="${cm[3]}"/><path d="M14 36 Q22 34 26 40 Q20 44 13 42Z" fill="${cm[1]}"/>`;
 const L=80-58*w,Rr=80+58*w,sh=80-40*w,sr=80+40*w;
 const surname=(nameOverride||(S&&S.name)||UI.d.name||'ASKER').trim().split(/\s+/).pop().toLocaleUpperCase(typeof LANG!=='undefined'&&LANG!=='tr'?'en':'tr').slice(0,10);
 const officer=rk>=8;const kind=!lk.hat?'none':officer&&br.hat!=='beret'&&br.hat!=='pilot'?'peak':br.hat;
 let back='';
 if(lk.hs==='uzun')back=`<path d="M55 66 Q50 30 80 30 Q110 30 105 66 L109 114 Q98 120 93 106 L67 106 Q62 120 51 114Z" fill="${hc}"/>`;
 if(lk.hs==='topuz'&&kind!=='helmet'&&kind!=='pilot')back=`<circle cx="80" cy="33" r="10" fill="${hc}"/>`;
 const front={asker:`<path d="M58.5 63 Q57 38 80 36.5 Q103 38 101.5 63 Q99 47 80 45.5 Q61 47 58.5 63Z" fill="${hc}" opacity=".75"/>`,
  kisa:`<path d="M57 64 Q54 33 80 32 Q106 33 103 64 Q101 49 93 45 Q82 50 68 45.5 Q60 51 57 64Z" fill="${hc}"/>`,
  kel:`<ellipse cx="74" cy="46" rx="9" ry="4" fill="#fff" opacity=".12"/>`,
  dalgali:`<path d="M55 70 Q49 29 80 28 Q111 29 105 70 Q104 52 96 44 Q88 52 76 46 Q66 51 59 55 Q56 62 55 70Z" fill="${hc}"/>`,
  topuz:`<path d="M58 62 Q56 36 80 35 Q104 36 102 62 Q99 46 80 44 Q61 46 58 62Z" fill="${hc}"/>`,
  uzun:`<path d="M57 70 Q53 33 80 32 Q107 33 103 70 Q100 52 90 46 Q78 54 64 50 Q59 58 57 70Z" fill="${hc}"/>`}[lk.hs]||'';
 let beard='';
 if(!fem){
  if(lk.beard==='kirli')beard=`<path d="M60 74 Q61 95 80 101 Q99 95 100 74 Q97 90 89 92 Q80 96 71 92 Q63 90 60 74Z" fill="${hc}" opacity=".3"/><path d="M71 86 Q80 83 89 86 L88 88 Q80 86 72 88Z" fill="${hc}" opacity=".35"/>`;
  if(lk.beard==='biyik')beard=`<path d="M70.5 86.5 Q80 82 89.5 86.5 Q86 89.5 80 87.5 Q74 89.5 70.5 86.5Z" fill="${hc}"/>`;
  if(lk.beard==='sakal')beard=`<path d="M59 72 Q59 100 80 106 Q101 100 101 72 Q98 88 90 91 Q84 86.5 80 87.5 Q76 86.5 70 91 Q62 88 59 72Z" fill="${hc}"/><path d="M70.5 86.5 Q80 82 89.5 86.5 Q86 89.5 80 87.5 Q74 89.5 70.5 86.5Z" fill="${shade(hc,-.15)}"/>`;
 }
 const hcap=br.hc;let hat='';
 if(kind==='helmet')hat=`<path d="M54 63 Q52 28 80 27 Q108 28 106 63 L111 67 Q80 59 49 67Z" fill="url(#${id}h)"/><path d="M58 40 h44 M55 50 h50" stroke="#0003" stroke-width="1" stroke-dasharray="2 3"/><path d="M57 66 Q59 86 70 97 M103 66 Q101 86 90 97" stroke="#1a1a14" stroke-width="1.6" fill="none" opacity=".7"/>`;
 if(kind==='beret')hat=`<path d="M56 55 Q48 35 74 31 Q105 27 109 44 Q102 51 88 48 L58 57Z" fill="${hcap}"/><path d="M56 55 Q80 50 105 52" stroke="#151515" stroke-width="2.2" fill="none"/><circle cx="65" cy="48" r="3.6" fill="#d6b04a"/>`;
 if(kind==='sailor')hat=`<ellipse cx="80" cy="40" rx="28" ry="8" fill="#f1eee6"/><path d="M56 41 L104 41 L103 49 L57 49Z" fill="#1a2440"/><path d="M57 46 h46" stroke="#d6b04a" stroke-width=".8"/>`;
 if(kind==='pilot')hat=`<path d="M53 68 Q51 25 80 25 Q109 25 107 68 Z" fill="url(#${id}h)"/><path d="M58 50 Q80 43 102 50 L101 58 Q80 52 59 58 Z" fill="#1d2b33" opacity=".9"/>`;
 if(kind==='cap'||kind==='peak'){const crown=kind==='peak'?(br.nv?'#f1eee6':shade(hcap,.05)):hcap;hat=`<path d="M55 51 Q80 25 105 51 L104 57 L56 57Z" fill="${crown}"/>${kind==='peak'?`<rect x="56" y="51" width="48" height="6" fill="${br.nv?'#1a2440':shade(hcap,-.25)}"/><circle cx="80" cy="47" r="4" fill="#d6b04a"/>`:''}<path d="M55 57 Q80 53 105 57 Q103 64 80 62.5 Q57 64 55 57Z" fill="#141414"/>`}
 return `<svg viewBox="0 0 160 160" width="${sz}" height="${sz}" aria-hidden="true"><defs>
 <radialGradient id="${id}bg" cx=".5" cy=".38" r=".7"><stop offset="0" stop-color="${shade(NAT[nat].th.bg,.22)}"/><stop offset="1" stop-color="${shade(NAT[nat].th.bg,-.2)}"/></radialGradient>
 <radialGradient id="${id}s" cx=".42" cy=".4" r=".7"><stop offset="0" stop-color="${skL}"/><stop offset=".65" stop-color="${sk}"/><stop offset="1" stop-color="${skD}"/></radialGradient>
 <linearGradient id="${id}h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${shade(hcap,.18)}"/><stop offset="1" stop-color="${shade(hcap,-.3)}"/></linearGradient>
 <linearGradient id="${id}t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></linearGradient>
 <pattern id="${id}c" width="${dig?24:44}" height="${dig?24:44}" patternUnits="userSpaceOnUse">${pat}</pattern></defs>
 <rect width="160" height="160" fill="url(#${id}bg)"/>${back}
 <path d="M${L} 160 Q${L+2} 124 ${sh} 115 L67 105 L93 105 L${sr} 115 Q${Rr-2} 124 ${Rr} 160Z" fill="url(#${id}c)"/>
 <path d="M${L} 160 Q${L+2} 124 ${sh} 115 L67 105 L93 105 L${sr} 115 Q${Rr-2} 124 ${Rr} 160Z" fill="url(#${id}t)"/>
 <path d="M66 104 Q73 108 80 120 Q87 108 94 104 L94 100 L66 100Z" fill="${shade(cm[0],-.35)}"/>
 <path d="M68 103 L80 122 L62 116Z M92 103 L80 122 L98 116Z" fill="${shade(cm[0],-.1)}" stroke="#0004" stroke-width=".6"/>
 <rect x="${sr-30}" y="132" width="26" height="7" fill="${shade(cm[0],-.2)}"/><text x="${sr-17}" y="137.5" text-anchor="middle" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-weight="700" font-size="5.6" fill="#ece7d4">${esc(surname)}</text>
 <svg x="${L+9}" y="128" width="15" height="10" viewBox="0 0 30 20">${flagInner(nat)}</svg>
 <path d="M70 86 L70 104 Q80 110 90 104 L90 86Z" fill="${skD}"/><path d="M70 92 Q80 100 90 92 L90 98 Q80 104 70 98Z" fill="${skDD}" opacity=".35"/>
 <ellipse cx="${58.5-hw}" cy="72" rx="4" ry="6.5" fill="${skD}"/><ellipse cx="${101.5+hw}" cy="72" rx="4" ry="6.5" fill="${skD}"/>
 <path d="${fem?'M60 68 Q60 41 80 40 Q100 41 100 68 Q100 88 90 96 Q85 100 80 100 Q75 100 70 96 Q60 88 60 68Z':'M58 67 Q58 40 80 39 Q102 40 102 67 Q102 86 93 94 Q86 101 80 101 Q74 101 67 94 Q58 86 58 67Z'}" fill="url(#${id}s)" transform="translate(80 70) scale(${hw} 1) translate(-80 -70)"/>
 <ellipse cx="66" cy="80" rx="5" ry="3" fill="#c0504a" opacity="${fem?.16:.06}"/><ellipse cx="94" cy="80" rx="5" ry="3" fill="#c0504a" opacity="${fem?.16:.06}"/>
 ${front}
 <path d="M64.5 63.5 Q70 ${fem?60:61} 76 63" stroke="${shade(hc,-.1)}" stroke-width="${fem?1.7:2.6}" fill="none" stroke-linecap="round"/><path d="M84 63 Q90 ${fem?60:61} 95.5 63.5" stroke="${shade(hc,-.1)}" stroke-width="${fem?1.7:2.6}" fill="none" stroke-linecap="round"/>
 <ellipse cx="70.5" cy="69" rx="4.6" ry="2.5" fill="#f4efe6"/><ellipse cx="89.5" cy="69" rx="4.6" ry="2.5" fill="#f4efe6"/>
 <circle cx="70.8" cy="69" r="2.2" fill="${ey}"/><circle cx="89.8" cy="69" r="2.2" fill="${ey}"/><circle cx="70.8" cy="69" r="1" fill="#111"/><circle cx="89.8" cy="69" r="1" fill="#111"/><circle cx="71.5" cy="68.3" r=".55" fill="#fff"/><circle cx="90.5" cy="68.3" r=".55" fill="#fff"/>
 <path d="M65.6 68.3 Q70.5 65.6 75.4 68.3 M84.6 68.3 Q89.5 65.6 94.4 68.3" stroke="${fem?'#1a1410':skDD}" stroke-width="${fem?1.3:.9}" fill="none"/>
 <path d="M80 70 L78 80.5 Q80 82.5 82.6 80.5" stroke="${skDD}" stroke-width="1.3" fill="none" stroke-linecap="round" opacity=".8"/><ellipse cx="80" cy="81.2" rx="3.6" ry="1.1" fill="${skDD}" opacity=".25"/>
 ${beard}
 <path d="M73 89.5 Q80 91.2 87 89.5" stroke="${fem?'#9a4a46':shade(sk,-.42)}" stroke-width="${fem?2.2:1.6}" fill="none" stroke-linecap="round"/><path d="M75.5 91.6 Q80 93 84.5 91.6" stroke="${skL}" stroke-width=".9" fill="none" opacity=".7"/>
 ${hat}</svg>`;
}
function scene(t){
 const sky={gece:'#141a24',dag:'#2b3328',sehir:'#262624',deniz:'#1b2a36',hava:'#22303c',masa:'#2a2620',kisla:'#25291f',atis:'#2b3328'}[t]||'#25291f';
 let c='';
 if(t==='gece')c=`<circle cx="270" cy="30" r="13" fill="#d8d2b8"/><path d="M0 92 H320" stroke="#5a5a4c" stroke-width="2"/>${[...Array(9)].map((_,i)=>`<path d="M${i*38+8} 82 l10 14 m0 -14 l-10 14" stroke="#77776a" stroke-width="1.5"/>`).join('')}<rect x="30" y="58" width="22" height="44" fill="#1d2418"/>`;
 if(t==='dag')c=`<path d="M0 120 L70 46 L120 88 L180 30 L250 96 L290 66 L320 90 V120Z" fill="#3c4733"/><path d="M0 120 L50 92 L130 110 L210 86 L320 112 V120Z" fill="#2e3726"/>`;
 if(t==='sehir')c=`${[[10,40,40],[56,60,30],[92,30,50],[148,50,36],[190,24,44],[240,56,30],[276,38,40]].map(([x,y,w])=>`<rect x="${x}" y="${y}" width="${w}" height="${120-y}" fill="#383832"/>`).join('')}`;
 if(t==='deniz')c=`<path d="M60 74 L260 74 L240 94 L80 94 Z" fill="#46525a"/><rect x="140" y="50" width="44" height="24" fill="#56626a"/><rect x="158" y="34" width="6" height="16" fill="#56626a"/><path d="M0 96 Q20 90 40 96 T80 96 T120 96 T160 96 T200 96 T240 96 T280 96 T320 96 V120 H0Z" fill="#2b4252"/>`;
 if(t==='hava')c=`<path d="M60 70 L200 60 L250 50 L262 56 L210 68 L170 70 L130 96 L116 96 L136 72 L90 76 L74 90 L64 90 L70 74 Z" fill="#8a96a0"/><path d="M0 104 Q80 96 160 104 T320 102 V120 H0Z" fill="#2f3d36"/>`;
 if(t==='masa')c=`<rect x="30" y="34" width="260" height="76" rx="4" fill="#4d4636"/><path d="M50 50 Q110 40 140 70 T260 60" stroke="${getAcc()}" stroke-width="2" fill="none" stroke-dasharray="6 4"/><polygon points="250,56 262,60 250,66" fill="#d0563a"/><circle cx="90" cy="84" r="5" fill="#72a0bf"/><circle cx="200" cy="90" r="5" fill="#d0563a"/>`;
 if(t==='kisla')c=`<rect x="40" y="46" width="240" height="64" fill="#3a3f31"/><path d="M30 48 L160 22 L290 48Z" fill="#4a4f3e"/>${[0,1,2,3,4].map(i=>`<rect x="${62+i*44}" y="62" width="20" height="16" fill="${getAcc()}" opacity=".35"/>`).join('')}<rect x="150" y="84" width="20" height="26" fill="#22261c"/>`;
 if(t==='atis')c=`<circle cx="250" cy="60" r="28" fill="#e9e3cc"/><circle cx="250" cy="60" r="19" fill="#2b3328"/><circle cx="250" cy="60" r="10" fill="#e9e3cc"/><path d="M0 104 H320" stroke="#4a5530" stroke-width="16"/>`;
 return `<svg viewBox="0 0 320 120" style="width:100%;height:auto;display:block" aria-hidden="true"><rect width="320" height="120" fill="${sky}"/>${c}</svg>`;
}
const IC={
 hq:'<path d="M4 20V9l8-5 8 5v11h-5v-6H9v6z"/>',
 train:'<path d="M3 10h3v4H3zM18 10h3v4h-3zM6 8h3v8H6zM15 8h3v8h-3zM9 11h6v2H9z"/>',
 life:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
 mission:'<path d="M12 3l3 6 6 .8-4.5 4.3 1 6.2L12 17l-5.5 3.3 1-6.2L3 9.8 9 9z"/>',
 world:'<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2c1.2 1.4 2 3.8 2.2 6H9.8c.2-2.2 1-4.6 2.2-6zM5.1 11a7 7 0 0 1 3.1-5.1c-.7 1.5-1.2 3.3-1.4 5.1zm0 2h1.7c.2 1.8.7 3.6 1.4 5.1A7 7 0 0 1 5.1 13zm4.7 0h4.4c-.2 2.2-1 4.6-2.2 6-1.2-1.4-2-3.8-2.2-6zm7.4 0h1.7a7 7 0 0 1-3.1 5.1c.7-1.5 1.2-3.3 1.4-5.1zm0-2c-.2-1.8-.7-3.6-1.4-5.1a7 7 0 0 1 3.1 5.1z"/>',
 prof:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 4-7 8-7s8 2 8 7z"/>',
 play:'<path d="M7 4l13 8-13 8z"/>',plus:'<path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z"/>',book:'<path d="M5 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H5zM19 4h-3a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h3z"/>',gear:'<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8.6 5.3l1.9 1.5-2 3.4-2.3-.9a7.6 7.6 0 0 1-2 1.2l-.3 2.5h-4l-.4-2.5a7.6 7.6 0 0 1-2-1.2l-2.2.9-2-3.4 1.9-1.5a7.6 7.6 0 0 1 0-2.6L1.5 9.2l2-3.4 2.3.9c.6-.5 1.3-.9 2-1.2L8.1 3h4l.3 2.5c.7.3 1.4.7 2 1.2l2.3-.9 2 3.4-1.9 1.5a7.6 7.6 0 0 1 0 2.6z"/>',
 rank:'<path d="M4 5l8 5 8-5v4l-8 5-8-5zM4 12l8 5 8-5v4l-8 5-8-5z"/>',
 target:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1.8"/>',
 map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" fill="none" stroke="currentColor" stroke-width="1.8"/>',
 team:'<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 19c0-3.5 2.7-5 6-5s6 1.5 6 5zM12 19c.3-2.6 1.6-4.3 4-4.8 3.5-.4 6 1.3 6 4.8z"/>',
 topo:'<path d="M3 17c3-4 5-2 8-6s5-5 10-3M3 21c4-3 6-1 9-4s5-3 9-2M7 9c2-2 3-1 5-3" fill="none" stroke="currentColor" stroke-width="1.8"/>',
 fist:'<path d="M7 7a2 2 0 0 1 4 0v-1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 1v6c0 4-3 7-7 7H11c-3 0-5-2-5-5v-3a2 2 0 0 1 1-2z"/>',
 run:'<circle cx="14" cy="4" r="2"/><path d="M8 21l3-6 3 2v5h2v-6l-3-3 1-4 2 3h4v-2h-3l-3-4H9L6 9v4h2v-3l2-1-1 4-3 6z"/>',
 brain:'<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3V3zm6 0v16a3 3 0 0 0 3-3 3 3 0 0 0 2-5 3 3 0 0 0-2-5 3 3 0 0 0-3-3z"/>',
 food:'<path d="M7 2v8a2 2 0 0 0 2 2v10h2V12a2 2 0 0 0 2-2V2h-1.5v6h-1V2h-1v6h-1V2zM17 2c-2 0-3 2.5-3 6s1 4 2 4v10h2V2z"/>',
 people:'<circle cx="9" cy="7" r="3.5"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6z"/><circle cx="17.5" cy="8.5" r="2.5"/><path d="M16.5 13c3 0 5.5 1.5 5.5 5h-4.5c0-2-.4-3.7-1-5z"/>',
 heart:'<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',
 moon:'<path d="M20 15A8 8 0 1 1 9 4a6.5 6.5 0 0 0 11 11z"/>',
 lock:'<path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0h6V8a3 3 0 0 0-6 0z"/>',
 pin:'<path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
 news:'<path d="M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2h-1zM7 8h7v2H7zm0 4h7v1.5H7zm0 3h5v1.5H7z"/>',
 coin:'<circle cx="12" cy="12" r="9"/><path d="M12 6v12M9 9h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5" stroke="var(--bg)" stroke-width="1.8" fill="none"/>',
 shield:'<path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5z"/>',
};
const ico=(k,s=20)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" aria-hidden="true">${IC[k]}</svg>`;

/* ============ DÜNYA (strateji haritası) ============ */
const COLS=14,ROWS=9,HR=12.5,HW=Math.sqrt(3)*HR,HH=1.5*HR;
const hxy=i=>{const c=i%COLS,r=Math.floor(i/COLS);return[HW*c+(r%2?HW/2:0)+HW/2+3,HH*r+HR+3]};
const pk=(a,b)=>a<b?a+'|'+b:b+'|'+a;
const rel=(a,b)=>S.world.rel[pk(a,b)]??0;
const setRel=(a,b,v)=>S.world.rel[pk(a,b)]=clamp(v,-100,100);
const allied=(a,b)=>S.world.al.includes(pk(a,b));
function initWorld(){
 const cells=[];for(let i=0;i<COLS*ROWS;i++){const[x,y]=hxy(i);let best=null,bd=1e9;for(const k of NK){const[nx,ny]=hxy(NAT[k].y*COLS+NAT[k].x);const d=Math.hypot(x-nx,y-ny)/NAT[k].w;if(d<bd){bd=d;best=k}}cells.push(best)}
 const relm={},p={};NK.forEach(k=>p[k]=NAT[k].p);
 for(let a=0;a<NK.length;a++)for(let b=a+1;b<NK.length;b++)relm[pk(NK[a],NK[b])]=Math.round(R()*60-20);
 [['TR','AZE',85],['ABD','IGB',85],['ABD','JPN',75],['RUS','CIN',60],['ALM','FRA',70],['IGB','FRA',55],['PAK','CIN',70],['PAK','TR',60],['PAK','AZE',55],['JPN','IGB',40],['ABD','RUS',-55],['RUS','IGB',-55],['RUS','FRA',-45],['RUS','ALM',-45],['RUS','JPN',-35],['CIN','JPN',-45],['ABD','CIN',-40],['CIN','IGB',-20],['TR','ABD',30],['TR','ALM',20],['TR','FRA',5],['TR','RUS',10],['TR','CIN',5],['AZE','RUS',-10],['AZE','FRA',-40],['PAK','ABD',5],['RUS','PAK',5],['ALM','IGB',50],['ISR','ABD',75],['ISR','TR',-45],['ISR','AZE',55],['ISR','ALM',45],['ISR','IGB',30],['ISR','FRA',15],['ISR','JPN',20],['ISR','RUS',-5],['ISR','CIN',-10],['ISR','PAK',-60],['ITA','FRA',55],['ITA','ALM',55],['ITA','ABD',60],['ITA','IGB',50],['ITA','TR',35],['ITA','RUS',-40],['ITA','ISR',20],['SUR','TR',65],['SUR','ISR',-40],['SUR','ABD',15],['SUR','RUS',0],['SUR','AZE',30],['SUR','ITA',15],['SUR','FRA',10],['UZB','RUS',45],['UZB','CIN',40],['UZB','TR',60],['UZB','AZE',55],['UZB','PAK',25],['UZB','ABD',15]].forEach(([a,b,v])=>relm[pk(a,b)]=v);
 const al=[];BLOCS.filter(b=>b.def).forEach(b=>{for(let i=0;i<b.m.length;i++)for(let j=i+1;j<b.m.length;j++){const k=pk(b.m[i],b.m[j]);if(!al.includes(k))al.push(k)}});
 Object.assign(p,{ITA:68,SUR:40,UZB:52,ISR:70,ABD:98,CIN:92,RUS:85,TR:74,FRA:72,IGB:70,JPN:68,ALM:64,PAK:62,AZE:42});
 return{cells,p,rel:relm,al,war:null,warW:0,wars:[],req:{},news:[{d:1,t:'Senaryo başladı. Oyuncunun ülkesi dışındaki tüm devletler, ittifaklar ve olaylar kurgusaldır.'}]};
}
function count(k){return S.world.cells.filter(c=>c===k).length}
function pwr(k){return Math.round(S.world.p[k]+count(k)*.8)}
function transfer(from,to,n){
 const W=S.world;const mine=W.cells.map((c,i)=>c===to?i:-1).filter(i=>i>=0);const theirs=W.cells.map((c,i)=>c===from?i:-1).filter(i=>i>=0);
 if(!theirs.length)return 0;
 const sc=theirs.map(i=>{const[x,y]=hxy(i);let m=1e9;for(const j of mine){const[a,b]=hxy(j);m=Math.min(m,Math.hypot(x-a,y-b))}return[i,m]}).sort((a,b)=>a[1]-b[1]);
 const k=Math.min(n,sc.length);for(let j=0;j<k;j++){const ci=sc[j][0];W.cells[ci]=to;if(S&&typeof addRegion==='function'){if(to===S.nation)addRegion(ci,from);else if(from===S.nation)loseRegion(ci,NAT[to].n+' ele geçirdi')}}return k;
}
function mapSVG(){
 const W=S.world;const w=HW*COLS+HW/2+6,h=HH*(ROWS-1)+HR*2+6;let s='';const acc=getAcc();
 W.cells.forEach((k,i)=>{const[x,y]=hxy(i);const pts=[...Array(6)].map((_,j)=>{const a=Math.PI/180*(60*j-90);return(x+HR*.94*Math.cos(a)).toFixed(1)+','+(y+HR*.94*Math.sin(a)).toFixed(1)}).join(' ');
  const mine=k===S.nation, war=W.war===k, al=allied(S.nation,k)&&!mine;
  s+=`<polygon points="${pts}" fill="${NAT[k].c}" fill-opacity="${mine?1:.72}" stroke="${mine?acc:war?'#ff6a4a':al?'#d8d4c0':'#0b0c09'}" stroke-width="${mine||war?1.6:1}" ${al?'stroke-dasharray="2 2"':''}/>`});
 NK.forEach(k=>{const idx=W.cells.map((c,i)=>c===k?i:-1).filter(i=>i>=0);if(!idx.length)return;let sx=0,sy=0;idx.forEach(i=>{const[x,y]=hxy(i);sx+=x;sy+=y});const cx=sx/idx.length,cy=sy/idx.length;
  s+=`<svg x="${(cx-9).toFixed(1)}" y="${(cy-12).toFixed(1)}" width="18" height="12" viewBox="0 0 30 20">${flagInner(k)}</svg><text x="${cx.toFixed(1)}" y="${(cy+9).toFixed(1)}" text-anchor="middle" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-weight="700" font-size="8.5" fill="#fff" stroke="#000" stroke-opacity=".6" stroke-width="2.2" paint-order="stroke">${natCode(k)}</text>`});
 return `<svg viewBox="0 0 ${w.toFixed(0)} ${h.toFixed(0)}" role="img" aria-label="Strateji haritası"><rect width="${w}" height="${h}" fill="#0c1418"/>${s}</svg>`;
}
function worldTick(){
 const W=S.world,me=S.nation;
 for(let n=0;n<4;n++){const a=pick(NK),b=pick(NK);if(a!==b)setRel(a,b,rel(a,b)+Math.round(R()*22-14))}
 const others=NK.filter(k=>k!==me);
 const pairs=[];for(let a=0;a<NK.length;a++)for(let b=a+1;b<NK.length;b++){const x=NK[a],y=NK[b];if(x!==me&&y!==me&&rel(x,y)<-45)pairs.push([x,y])}
 others.forEach(k=>{W.p[k]=clamp(W.p[k]+R()*2-.8,20,120)});
}

/* ============ OLAYLAR ============ */
const EV=[
 {c:()=>true,f:()=>({ti:'Kötü bir gece',body:'<p>Uykun bölündü, sabaha karşı tavana bakıp durdun.</p>',e:{mental:-6},fat:10})},
 {c:()=>S.trauma!=='aile',f:()=>({ti:'Evden mektup',body:'<p>Annenden el yazısıyla bir mektup geldi. Kokusu bile tanıdık.</p>',e:{mental:7}})},
 {c:()=>['esi','aile','kardes'].includes(S.trauma),f:()=>({ti:'Cüzdandaki fotoğraf',body:`<p>Cüzdanındaki fotoğrafa takıldın. ${esc(tr().s)}… Boğazın düğümlendi.</p>`,ch:[['Kendine söz ver: onların hatırasına layık olacaksın',{hirs:5,mental:-3}],['Koğuştaki arkadaşınla konuş',{mental:7}]]})},
 {c:()=>S.trauma==='esi'&&S.heal<20,f:()=>({ti:'Kâbus',body:'<p>Yine aynı gece. Aralık kapı, duvardaki kırmızı iz. Ter içinde uyandın.</p>',ch:[['Bugün psikolojik danışmana git',{mental:8},()=>{S.heal+=2}],['İçine at, kimse bilmesin',{hirs:4,mental:-7}]]})},
 {c:()=>true,f:()=>({ti:'Koğuşta provokasyon',body:'<p>Bir devre arkadaşın herkesin önünde seni küçümsedi ve omzuna çarptı.</p>',ch:[['Sakin kal, durumu komutanına bildir',{disiplin:3},()=>{S.trust=clamp(S.trust+2)}],['Karşılık ver',{dovus:1,disiplin:-4,mental:2},()=>{S.trust=clamp(S.trust-6)}]]})},
 {c:()=>S.partner,f:()=>({ti:'Mesaj',body:`<p>${esc(S.partner.name)}: "Seni düşündüm bugün. Kendine iyi bak, tamam mı?"</p>`,e:{mental:5},aff:3})},
 {c:()=>S.partner&&!S.partner.m,f:()=>({ti:'Tartışma',body:`<p>${esc(S.partner.name)} ile telefonda tartıştınız. Çok az aradığını söyledi.</p>`,ch:[['Akşam ara ve gerçekten konuş',{mental:2},()=>{S.partner.aff=clamp(S.partner.aff+5)}],['Görmezden gel, işin var',{mental:-4},()=>{S.partner.aff=clamp(S.partner.aff-12)}]]})},
 {c:()=>!S.partner&&S.day>6&&(S.trauma!=='esi'||(S.day>40&&S.heal>=10)),f:()=>{const n=socialName();return{ti:'Yeni biri',body:`<p>Hafta sonu izninde kafede ${esc(n)} ile tanıştın. Saatler su gibi geçti.</p>`,ch:[['Numarasını al',{mental:6},()=>{S.partner={name:n,aff:30,m:false}}],['Şimdi değil',{}]]}}},
 {c:()=>S.nutri<45,f:()=>({ti:'Grip',body:'<p>Kötü beslenme bağışıklığını düşürdü. Ateşin var, revire gittin.</p>',e:{saglik:-8},fat:20})},
 {c:()=>S.trust>72,f:()=>({ti:'Takdir',body:`<p>${esc(cmdr())} içtimada adınla seni örnek gösterdi.</p>`,e:{mental:6,disiplin:1}})},
 {c:()=>true,f:()=>({ti:'Yağmurda talim',body:'<p>Bütün gün sağanak altında arazi eğitimi. Botların hâlâ ıslak.</p>',e:{dayan:1,mental:-3},fat:12})},
 {c:()=>true,f:()=>({ti:'Gece alarmı',body:'<p>Saat 03:00, siren çaldı. Birlik 8 dakika içinde tam teçhizat toplanmalı.</p>',ch:[['Hazırladığın çantayla 5 dakikada içtimada ol',{disiplin:2},()=>{S.trust=clamp(S.trust+3);S.fatigue=clamp(S.fatigue+10)}],['Botlarını ararken geç kal',{mental:-3},()=>{S.trust=clamp(S.trust-4)}]]})},
 {c:()=>true,f:()=>({ti:'Sürpriz teftiş',body:`<p>${esc(cmdr())} habersiz teftişe geldi. Dolabın ve silahın kontrol edilecek.</p>`,ch:[['Silah bakımın tam, dolap nizami',{disiplin:2},()=>{S.trust=clamp(S.trust+4)}],['Son dakika toparlamaya çalış',{},()=>{S.trust=clamp(S.trust+(S.st.disiplin>55?2:-5))}]]})},
 {c:()=>true,f:()=>({ti:'Birlikler arası atış yarışması',body:'<p>Tugay atış yarışmasına birliğini temsilen seçildin.</p>',ch:[['Katıl',{},()=>{const ok=R()<S.st.nisan/100+.15;addSt('nisan',ok?1.5:.5);S.trust=clamp(S.trust+(ok?5:0));toast(ok?'Derece aldın! Güven +5':'Derece alamadın ama tecrübe kazandın.')}],['Başkası gitsin',{}]]})},
 {c:()=>S.world.war,f:()=>({ti:'Cepheden haber',body:`<p>${esc(NAT[S.world.war].n)} cephesinde bir birlik ağır kayıp verdi. Herkes sessiz.</p>`,e:{mental:-6,hirs:5}})},
 {c:()=>alarm()[0]<=3&&!S.world.war,f:()=>({ti:'Sınırda hareketlilik',body:'<p>İstihbarat, sınırın öte yanında zırhlı birlik yığınağı tespit etti. Birliğin teyakkuzda.</p>',e:{disiplin:1},fat:6})},
 {c:()=>NK.some(k=>k!==S.nation&&allied(S.nation,k)),f:()=>{const a=pick(NK.filter(k=>k!==S.nation&&allied(S.nation,k)));return{ti:'Müttefik tatbikatı',body:`<p>${flag(a,20)} ${esc(NAT[a].n)} birlikleriyle ortak tatbikata katıldın. Farklı doktrinler gördün.</p>`,e:{strat:1,lider:1}}}},
 {c:()=>S.rank>=3&&R()<.4,f:()=>({ti:'Kötü haber',body:'<p>Eski birliğinden bir devre arkadaşın görevde ağır yaralandı.</p>',e:{mental:-12,hirs:6}})},
 {c:()=>!S.world.war&&R()<.4,f:()=>({ti:'Bayram izni',body:'<p>Üç günlük izin çıktı. Sevdiklerinle vakit geçirdin.</p>',e:{mental:9},fat:-20})},
 {c:()=>S.st.mental<25,f:()=>({ti:'Dip',body:'<p>Göğsünde bir ağırlık var. Yemek yemek bile zor geliyor.</p>',ch:[['Psikolojik danışmana git',{mental:12},()=>{S.heal+=2}],['Yalnız kal',{mental:-4,hirs:3}]]})},
 {c:()=>S.fatigue>70,f:()=>({ti:'Sakatlık',body:'<p>Aşırı yorgunluk sonunda bileğin burkuldu. 3 gün ağır antrenman yok.</p>',e:{saglik:-6},inj:3})},
 {c:()=>true,f:()=>({ti:'Usta asker',body:'<p>Kıdemli bir astsubay sana eski bir harp hikâyesi anlattı. Bir şey öğrendin.</p>',e:{strat:1,lider:1}})},
 {c:()=>S.story&&R()<.35,f:()=>({ti:'Defterindeki satırlar',body:`<p>Gece nöbetinden sonra defterini açtın. Yemin günü yazdıkların hâlâ orada:</p><p class="quote">${esc(excerpt())}</p>`,ch:[['Bu satırlar için savaşıyorum',{hirs:5,mental:2}],['Biraz uzaklaşmam gerek',{mental:4}]]})},
 {c:()=>(S.exes||[]).length&&R()<.3,f:()=>({ti:'Eski bir fotoğraf',body:`<p>Telefonunda ${esc(S.exes[S.exes.length-1])} ile çekilmiş eski bir fotoğraf çıktı karşına.</p>`,ch:[['Sil ve antrenmana git',{hirs:4,mental:-2}],['Biraz bak, sonra kapat',{mental:-4}]]})},
 {c:()=>R()<.4,f:()=>({ti:'Koğuş arkadaşı',body:'<p>Yan ranzadaki asker gece senden yardım istedi: ailesine yazdığı mektubu düzeltmeni rica etti.</p>',ch:[['Yardım et',{mental:4,lider:1}],['Yorgunum, yarın',{}]]})},
];
function runEvent(){
 const ok=EV.filter(e=>e.c());if(!ok.length||R()>.7)return;let ev;for(let t=0;t<5;t++){ev=pick(ok).f();if(!(S.evSeen||[]).includes(ev.ti))break}S.evSeen=[...(S.evSeen||[]),ev.ti].slice(-10);
 const apply=(e,fn)=>{const d={};Object.entries(e||{}).forEach(([k,v])=>{addSt(k,v);d[STATN[k]]=v});if(ev.fat)S.fatigue=clamp(S.fatigue+ev.fat);if(ev.inj)S.injured=ev.inj;if(ev.aff&&S.partner)S.partner.aff=clamp(S.partner.aff+ev.aff);fn&&fn();log(ev.ti);return d};
 if(ev.ch)pushModal({k:'Günün olayı',ti:ev.ti,body:ev.body,ch:ev.ch.map(([t,e,fn])=>({t,fn:()=>{const d=apply(e,fn);if(Object.keys(d).length)toast(Object.entries(d).map(([k,v])=>k+' '+(v>0?'+':'')+v).join(' · '))}}))});
 else{const d=apply(ev.e);pushModal({k:'Günün olayı',ti:ev.ti,body:ev.body+fx(d)})}
}

/* ============ HİKÂYE ============ */
const CH=[
 {r:-1,ti:'I · Yemin',body:()=>`<p>${LOSS[S.trauma]}</p><p>Bugün kışla kapısından tek bir çantayla girdin. Ranzanın soğuk demiri, içtimanın düdüğü, pas kokan dolaplar. Yeni hayatının ilk satırları.</p><p class="quote">${esc(excerpt())}</p><p>Yemin ederken sesin titremedi.</p>`,ch:[['Disiplin benim zırhım olacak',{disiplin:6},-5],['Öfkem benim yakıtım olacak',{hirs:8,mental:-3},10]]},
 {r:2,ti:'II · Ateş Hattı',body:()=>`<p>Bir kontrol noktasında durdurulan kamyonun kasasından silah sandıkları çıktı. Kapakların içinde aynı işaret: <b class="red">kızıl pençe</b>.</p><p>Elin titriyor. Sandıkları kayda geçiren astsubay arkasını döndü; sevk irsaliyesi önünde duruyor.</p>`,ch:[['Her şeyi resmi raporla bildir',{disiplin:4},-5,6],['İrsaliyenin fotoğrafını gizlice çek',{hirs:5},12,0]]},
 {r:6,ti:'III · Gölgedeki Ad',body:()=>`<p>Yakalanan bir kaçakçı sorgu odasında bir isim fısıldıyor: <b>Kuzgun</b>. Kızıl Pençe'nin sahibi. Senin ${esc(tr().s)} için o geceyi planlayan ağın başı.</p><p>Kamera arızalı. Adam sana bakıp gülüyor.</p>`,ch:[['Kurala göre sorgula, istihbarata devret',{disiplin:5},-6,5],['Kamera kapalıyken onu konuşturacaksın',{hirs:6},15,-10]]},
 {r:10,ti:'IV · İçerideki',body:()=>`<p>Biriminde birinin Kuzgun'a bilgi sızdırdığını öğreniyorsun. Elinde kesin delil yok, ama telefon kayıtları şüpheli.</p><p>Kızıl Pençe artık kendi saflarınızda.</p>`,ch:[['Askerî savcılığa ve istihbarata bildir',{lider:3,disiplin:3},-4,6],['Ona sahte bilgi ver, tuzağa düşür',{strat:4},6,2]]},
 {r:13,ti:'V · Kızıl Pençe',body:()=>`<p>Kuzgun'un sınır ötesindeki ana deposunun yeri belli oldu. Plan masanda.</p><p>Kurmaylarından biri eğilip fısıldıyor: "Esir almasak kimse sormaz komutanım."</p>`,ch:[['Harp hukukuna göre plan: teslim olan esir alınır',{disiplin:6},-10,6],['Sessiz kal, emri muğlak bırak',{hirs:5},15,-6]]},
 {r:16,ti:'VI · Hesap',body:()=>`<p>Yıllar sonra Kuzgun karşında: kelepçeli, yaşlanmış, hâlâ gülümsüyor.</p><p>"O gece emri ben vermedim," diyor. "Ben sadece silah sattım. Savaşı satanlar başkaları." Bir saat sonra adli makamlara teslim edilecek.</p>`,ch:[['Mahkemeye teslim et. Hesabı kanun sorsun.',{mental:15},-20,5],['Odadaki herkesi dışarı çıkar',{hirs:8,mental:-6},25,-5]]},
];
function excerpt(){const s=(S.story||'').trim().replace(/\s+/g,' ');return s.length>180?s.slice(0,177)+'…':s}
function chapterCheck(){
 const c=CH[S.chapter];if(!c)return;if(S.chapter>0&&S.rank<c.r)return;
 pushModal({k:'Hikâye',ti:c.ti,art:scene(S.chapter===0?'kisla':S.chapter===5?'gece':'masa'),body:c.body(),ch:c.ch.map(([t,e,dk,trs])=>({t,fn:()=>{Object.entries(e).forEach(([k,v])=>addSt(k,v));S.dark=clamp(S.dark+dk);if(trs)S.trust=clamp(S.trust+trs);S.chlog.push(c.ti+': '+t);log('Hikâye: '+c.ti)}}))});
 S.chapter++;
}
function ending(){
 const d=S.dark;const[t,x]=d<=35?['Adaletin Komutanı','Kaybettiklerinin intikamını değil, adaletini aldın. Ordun sana güveniyor, düşmanların senden korkuyor.']:d<=65?['Büyük Yemin','Kanunla öfken arasında yürüdün. Bazen biri kazandı, bazen diğeri. Bazı geceler hâlâ uyuyamıyorsun.']:['Karanlık Komutan','Zirvedesin, ama yolu kan ve sessizlikle döşedin. Aynaya bakınca gördüğün yüzü tanımıyorsun.'];
 pushModal({k:'Son',ti:t,art:`<div class="row" style="justify-content:center">${ins(18,120)}</div>`,body:`<p><b>${esc(myRank())} ${esc(S.name)}</b>. ${S.day}. gün.</p><p>${x}</p><p class="muted small">İntikam ateşi: ${Math.round(d)}/100 · Zaferler: ${S.wins}. Oyun devam ediyor.</p>`});
}

/* ============ MODAL KUYRUĞU ============ */
const Q=[];let MO=null;
function pushModal(m){Q.push(m);if(!MO)nextModal()}
function nextModal(){MO=Q.shift()||null;const el=$('#modal');if(!MO){el.hidden=true;el.innerHTML='';render();return}
 const ch=MO.ch||[{t:'Devam'}];
 el.innerHTML=`<div class="sheet gut" role="dialog" aria-modal="true">${MO.k?`<div class="lbl acc">${esc(MO.k)}</div>`:''}<h3>${esc(MO.ti)}</h3>${MO.art?`<div class="art">${MO.art}</div>`:''}<div class="body">${MO.body||''}</div><div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">${ch.map((c,i)=>`<button class="btn ${ch.length>1&&i>0?'ghost':''} block" data-a="mc" data-v="${i}">${esc(c.t)}</button>`).join('')}</div></div>`;
 el.hidden=false;el.querySelector('button')?.focus({preventScroll:true});
}

/* ============ OYUN MANTIĞI ============ */
function newGame(){
 const d=UI.d,t=TRAUMA.find(x=>x.id===d.trauma),br=brList(d.nation).find(b=>b.id===d.branch)||brList(d.nation)[0],pa=PATHS.find(p=>p.id===d.path);
 const st={guc:20,dayan:20,dovus:10,nisan:15,strat:10,lider:10,disiplin:40,hirs:t.h,saglik:72,mental:t.m};
 const bf=bodyFx(d.look);
 [br.b,pa.b,{guc:bf.guc,dayan:bf.dayan,dovus:bf.dovus}].forEach(o=>Object.entries(o).forEach(([k,v])=>st[k]=clamp(st[k]+v)));
 const sports={};if(d.sport){sports[d.sport]=8;st.dovus+=6}
 S={v:2,name:d.name.trim(),age:+d.age||21,nation:d.nation,branch:br.id,path:d.path,story:d.story.trim(),trauma:d.trauma,
  rank:pa.r,xp:0,trust:pa.r>=8?45:40,day:1,ap:APB,st,sports,main:d.sport,week:[],meals:{k:null,o:null,a:null},ex:[],nutri:55,fatigue:10,injured:0,
  partner:(d.rel==='sevgili'&&d.trauma!=='esi')?{name:(d.pname||'Elif').trim(),aff:55,m:false}:(d.rel==='evli'&&d.trauma!=='esi')?{name:(d.pname||'Elif').trim(),aff:75,m:true}:null,
  heal:0,dark:0,chapter:0,chlog:[],mDone:false,mid:null,mSwap:false,mRes:null,seen:[],dIR:0,wins:0,log:[],world:null,opCd:0,dipCd:0,msg:false,trainT:0,warScore:0,
  look:{...d.look},trainMode:'ask',sleep:7,diary:[],soc:{},best:{},tech:{},op:null,opSeen:[],money:2000,treasury:0,regions:[],cmdP:pick(Object.keys(CMDP)),exes:[],wpn:{p:'tufek'},leave:0,friends:[],izin:false,kogus:mkKogus(d.nation),kh:55,letters:[],trade:{},bases:[],evSeen:[]};
 newWeather();
 if(S.partner)S.partner.last=1;
 S.world=initWorld();pickOp();
 log('Yemin ettin ve '+br.n+' saflarına katıldın.');
 S.dl={xp:0,tr:S.trust,r:S.rank};save();applyTheme(S.nation);UI.scr='game';UI.tab='hq';render();if(typeof fictWarn==='function')fictWarn();chapterCheck();
}
function fixS(){if(!S.look)S.look={...DEFLOOK};if(!S.trainMode)S.trainMode='ask';if(!S.sleep)S.sleep=7;if(!S.diary)S.diary=[];if(!S.soc)S.soc={};if(!S.best)S.best={};if(!brList(S.nation).find(b=>b.id===S.branch))S.branch=brList(S.nation)[0].id;if(!S.tech)S.tech={};if(!S.world.wars)S.world.wars=[];if(!S.world.req)S.world.req={};if(!S.op)pickOp();if(S.money==null)S.money=2000;if(!S.treasury)S.treasury=0;if(!S.regions)S.regions=[];if(!S.cmdP)S.cmdP=pick(Object.keys(CMDP));if(!S.exes)S.exes=[];if(!S.world.feed)S.world.feed=[];if(!S.wpn)S.wpn={p:'tufek'};if(S.leave==null)S.leave=0;if(!S.friends)S.friends=[];if(!S.kogus)S.kogus=mkKogus(S.nation);if(S.kh==null)S.kh=55;if(!S.trade)S.trade={};if(!S.bases)S.bases=[];if(!S.letters)S.letters=[];if(!S.wx)newWeather();if(!S.dl)S.dl={xp:S.xp,tr:S.trust,r:S.rank}}
function pickMission(){
 const t=T(),k=B().k;let pool=MS.filter(m=>(m.t===t||(m.t===-1&&(m.k===k||(k==='ozel'&&m.k==='kara'))))&&!S.seen.includes(m.id));
 if(!pool.length){S.seen=[];pool=MS.filter(m=>m.t===t||(m.t===-1&&m.k===k))}
 const spec=pool.filter(m=>m.t===-1),gen=pool.filter(m=>m.t!==-1);const m=(spec.length&&R()<.35)||!gen.length?pick(spec.length?spec:pool):pick(gen);
 S.mid=m.id;S.mSwap=R()<.5;S.mRes=null;
}
function gmult(){return(owns('dambil')?1.06:1)*(.55+S.nutri/100*.75)*(.7+S.st.mental/100*.5)*(.85+S.st.hirs/200)*(S.fatigue>70?.6:1)*(.6+S.st.saglik/250)}
const gain=(base,cur)=>base*Math.max(.12,1.1-cur/115)*gmult()*eraMul();
function useAP(){if(S.ap<=0){toast('Bugün için eylem hakkın kalmadı. Dinlenip günü bitirebilirsin.');return false}S.ap--;S.xp+=1;addGP(2);return true}
function train(id){
 const sp=SPORTS.find(s=>s[0]===id),cd=COND.find(c=>c[0]===id);
 if((sp||cd)&&S.injured>0)return toast('Sakatsın. Ağır antrenman yok; askerî eğitimlere katılabilirsin.');
 if(S.ap<=0)return toast('Bugün için eylem hakkın kalmadı. Dinlenip günü bitirebilirsin.');
 const auto=()=>applyTrain(id,.85+R()*.25,null,sp&&lessonOf(id,S.day)==='teknik'&&R()<.6);
 if(S.trainMode==='auto')return auto();

 const nm=(sp||cd||EDU.find(e=>e[0]===id))[1];
 let body=`<p>Mini oyunu oynarsan performansına göre gelişim <b>%60 ile %160</b> arasında olur. Otomatik simülasyon ortalama bir seans sayılır (%85–110).</p>`;
 if(sp){const ls=lessonOf(id,S.day),C=curOf(id),k=S.tech[id]||0;body=`<div class="brief"><span class="n">${DAYS[(S.day-1)%7].slice(0,3)}</span><div><b>Bugün: ${esc(lessonName(id,ls))}</b><span class="small muted">${LTD[LT[ls]]}</span></div></div><p class="small">Kuşak/derece: <b class="acc">${beltOf(id)}</b> · Müfredat ${Math.min(k,C.length)}/${C.length}${ls==='teknik'&&k<C.length?` · Bugünkü teknik: <b>${esc(C[k].n)}</b>`:''}</p><div class="week">${(CYC[id]||CYC.boks).map((l,i)=>`<div class="${i===(S.day-1)%7?'today done':''}" title="${lessonName(id,l)}">${DAYS[i].slice(0,3)}<br><span style="font-size:9px">${esc(lessonName(id,l).split(' ')[0])}</span></div>`).join('')}</div>`+body}
 if(S.trainMode==='play')return startMG(id);
 pushModal({k:sp?'Spor salonu':'Antrenman',ti:nm,body,ch:[{t:'Dersi oyna',fn:()=>setTimeout(()=>startMG(id),0)},{t:'Otomatik simüle et',fn:auto}]});
}
function applyTrain(id,mult,score,learn){
 const sp=SPORTS.find(s=>s[0]===id),cd=COND.find(c=>c[0]===id),ed=EDU.find(e=>e[0]===id);
 if(!useAP())return;
 const d={};const add=(k,v)=>{const g=gain(v*mult,S.st[k]);addSt(k,g);d[STATN[k]]=(d[STATN[k]]||0)+g};
 if(sp){const ls=lessonOf(id,S.day);const LB={lapa:{dovus:.5},pao:{dovus:.5},torba:{dayan:.6,guc:.3},drill:{dayan:.5,guc:.2},ayak:{dayan:.4},kata:{disiplin:.6},sparring:{dovus:.8},randori:{dovus:.7,guc:.3},senaryo:{dovus:.7},sub:{guc:.4,dovus:.5},klinc:{guc:.5,dovus:.3},teknik:{dovus:.3,disiplin:.3}}[ls]||{};
  add('dovus',2.4*Math.max(sp[2],.6));add('guc',1.6*Math.max(sp[3],.5));add('dayan',1.4*Math.max(sp[4],.5));addSt('mental',1);Object.entries(LB).forEach(([k,v])=>add(k,v));S.sports[id]=(S.sports[id]||0)+1;S.fatigue=clamp(S.fatigue+(ls==='sparring'||ls==='randori'?28:22));S.trainT++;
  martialUp(id,score)}
 if(cd){add('guc',1.3*cd[2]);add('dayan',1.3*cd[3]);S.fatigue=clamp(S.fatigue+20);S.trainT++}
 if(ed){add(ed[2],1.7);if(id==='lider')add('disiplin',.6);if(id==='atis')add('disiplin',.3);S.fatigue=clamp(S.fatigue+8)}
 if(score!=null)S.best[id]=Math.max(S.best[id]||0,Math.round(score*100));
 S.xp+=Math.round(6*mult);addGP(Math.round(10*mult));
 let inj='';if((sp||cd)&&S.fatigue>78&&R()<.3){S.injured=3;addSt('saglik',-7);inj=' Aşırı yükten sakatlandın: 3 gün dinlen.'}
 const name=(sp||cd||ed)[1];log(name+(score!=null?` (mini oyun %${Math.round(score*100)})`:' (otomatik)')+' tamamlandı.');
 toast(name+' · verim %'+Math.round(mult*100)+': '+Object.entries(d).map(([k,v])=>v?k+' +'+v.toFixed(1):k).join(' · ')+inj);save();render();
}
const SOC={
 kart:['Arkadaşlarla tavla ve kart',{mental:5,lider:.5},'Koğuşta kahkahalar. Takım ruhu güçlendi.'],
 kitap:['Kitap oku',{mental:3,strat:1},'Bir harp tarihi kitabının iki bölümünü bitirdin.'],
 muzik:['Müzik ve gitar',{mental:6},'Akşam gitarı eline aldın; koğuş şarkıya eşlik etti.'],
 ibadet:['Maneviyat ve sessizlik',{mental:5,disiplin:1},'Kendinle baş başa kaldın. İçin sakinledi.'],
 spor_izle:['Maç izle',{mental:4},'Kantinde maç izlediniz, bir süreliğine her şeyi unuttun.'],
 gonullu:['Gönüllü faaliyet',{mental:5,lider:1},'Yakındaki okulda çocuklara ilk yardım anlattın.'],
};
function social(id){
 if(id==='diary'){const el=$('#diaryIn');const t=(el&&el.value||'').trim();if(t.length<5)return toast('Günlüğe en az birkaç kelime yaz.');if(S.soc.diary===S.day)return toast('Bugün zaten günlük yazdın.');S.diary.unshift({d:S.day,t:t.slice(0,600)});S.diary=S.diary.slice(0,30);S.soc.diary=S.day;addSt('mental',3);if(S.trauma==='esi'||S.trauma==='aile'||S.trauma==='kardes')S.heal=Math.min(25,S.heal+.8);toast('Günlüğe yazdın. Ruh hali +3');save();return render()}
 const s=SOC[id];if(!s)return;if(S.soc[id]===S.day)return toast('Bunu bugün zaten yaptın.');if(!useAP())return;
 S.soc[id]=S.day;Object.entries(s[1]).forEach(([k,v])=>addSt(k,v));S.fatigue=clamp(S.fatigue-6);log(s[0]+'.');toast(s[2]);save();render();
}
function psy(id){
 const t=S.trauma;
 if(id==='msg'){if(S.msg)return toast('Bugün zaten yazdın.');S.msg=true;S.partner.aff=clamp(S.partner.aff+3);addSt('mental',2);toast(S.partner.name+' hemen cevap verdi. Ruh hali +2');needDone('msg');return fin()}
 if(id==='gift'){if(S.money<600)return toast('Hediye için yeterli paran yok.');S.money-=600;S.partner.aff=clamp(S.partner.aff+8);S.partner.last=S.day;toast('Hediyen ulaştı. Bağlılık +8');return fin()}
 if(id==='date'&&S.world.war)return toast('Savaş durumunda izinler kaldırıldı.');
 if(id==='propose'){if(S.partner.aff<90||S.rank<2)return;S.partner.m=true;S.partner.aff=100;addSt('mental',15);pushModal({k:'Hayat',ti:'Evet dedi',body:`<p>${esc(S.partner.name)} gözleri dolarak evet dedi. Birliğinde herkes seni tebrik ediyor.</p>`});log(S.partner.name+' ile evlendin.');return fin()}
 if(id==='dinlen'&&S.ap<=0)return restEnd();
 if(!useAP())return;
 const M={psk:[{mental:10},'Psikolojik danışmanla görüştün. Yükün biraz hafifledi.',()=>{S.heal=Math.min(25,S.heal+2.5);S.fatigue=clamp(S.fatigue-5)}],
  med:[{mental:5,disiplin:1},'Nefes ve meditasyon. Zihnin berraklaştı.'],
  anma:[{mental:4,hirs:4},'Kaybettiklerini andın. Acı, kararlılığa dönüştü.',()=>{S.heal=Math.min(25,S.heal+1)}],
  aile:[{mental:6},t==='aile'?'Hayatta kalan tek akrabanı aradın. Sesini duymak iyi geldi.':'Aileni görüntülü aradın. Evdeki sesler sana güç verdi.'],
  video:[{mental:6},'Görüntülü konuştunuz. Ekranda bile gülüşü iyi geldi.',()=>{S.partner.aff=clamp(S.partner.aff+7);needDone('video')}],
  dinlen:[{mental:3},'Dinlendin. Kasların toparlandı.',()=>{S.fatigue=clamp(S.fatigue-25)}],
  date:[{mental:9},'Buluştunuz. Bir akşamlığına üniformayı unuttun.',()=>{S.partner.aff=clamp(S.partner.aff+9);S.msg=true;S.fatigue=clamp(S.fatigue-5);needDone('date')}]}[id];
 Object.entries(M[0]).forEach(([k,v])=>addSt(k,v));M[2]&&M[2]();log(M[1]);toast(M[1]);fin();
 function fin(){save();render()}
}
function doMission(opt){
 const m=MS.find(x=>x.id===S.mid);if(!m||S.mDone)return;if(!useAP())return;
 const o=m[opt],good=!!o[1],stv=S.st[o[2]];
 const base=[14,18,24,30,38][T()]*(S.world.war?1.5:1);
 const p=clamp(.42+stv/160+(S.st.mental-50)/250-S.fatigue/350-(S.injured?.15:0),.12,.93);
 const ok=R()<p;const d={};let xp,trs,q,line,cls='';
 if(good&&ok){xp=base;trs=7;addSt(o[2],1.2);d[STATN[o[2]]]=1.2;addSt('disiplin',1);d.Disiplin=1;line=pick(PRAISE);q='Doğru karar, temiz icra.'}
 else if(good){xp=Math.round(base*.5);trs=2;line='Plan doğruydu ama icrada aksadın. Daha çok çalış.';q='Doğru karar, zayıf icra.';cls='bad';if(R()<.25){S.injured=2;addSt('saglik',-6);d['Sağlık']=-6;q+=' Hafif yaralandın.'}}
 else{xp=3;trs=-9;addSt('mental',-4);d['Ruh hali']=-4;addSt('disiplin',-1);d.Disiplin=-1;line=pick(SCOLD);q='Yanlış karar.';cls='bad'}
 if(S.world.war)S.warScore=(S.warScore||0)+(good?1:0);
 S.xp+=Math.round(xp);S.trust=clamp(S.trust+trs);S.mDone=true;S.seen.push(m.id);S.fatigue=clamp(S.fatigue+12);
 S.mRes={g:good,ok,xp:Math.round(xp),trs,q};log(m.ti+': '+q);
 pushModal({k:'Komutanın değerlendirmesi',ti:q,body:`<p class="quote ${cls}">"${esc(line)}"<br><span class="small muted">— ${esc(cmdr())}</span></p>${good?'':`<p class="small"><b>Doğrusu:</b> ${esc(m.w)}</p>`}<div class="fx"><span class="p">Tecrübe +${Math.round(xp)}</span><span class="${trs>=0?'p':'n'}">Komutan güveni ${trs>=0?'+':''}${trs}</span></div>${fx(d)}`});
 save();render();
}
function reqs(){
 const r=RANKS[S.rank];if(S.rank>=18)return[];const L=[];
 L.push(['Tecrübe',Math.round(S.xp)+' / '+r.xp,S.xp>=r.xp,'xp']);
 L.push(['Rütbede gün',S.dIR+' / '+r.d,S.dIR>=r.d,'d']);
 L.push(['Komutan güveni',Math.round(S.trust)+' / '+r.tr,S.trust>=r.tr,'tr']);
 Object.entries(r.rq||{}).forEach(([k,v])=>{if(k==='wins')L.push(['Komuta zaferi',S.wins+' / '+v,S.wins>=v,'wins']);else L.push([STATN[k],Math.round(S.st[k])+' / '+v,S.st[k]>=v,k])});
 return L;
}
function promoCheck(){
 if(S.rank>=18)return;const L=reqs();if(!L.every(x=>x[2]))return;
 const old=S.rank,r=RANKS[old];S.xp-=r.xp;S.rank++;S.dIR=0;S.trust=clamp(Math.round(S.trust*.7+15));
 const nr=myRank();log('TERFİ: '+nr);if(!S.world.war)S.leave=(S.leave||0)+1;
 const unl=['Maaş: '+money(maas(old))+' → '+money(maas())+' / hafta',...offUnl(),...abilUnl(),...timUnl(),...myWeapons().filter(w=>w.r===S.rank).map(w=>'Yeni silah: '+w.n),...AUTH.filter(x=>x[0]===S.rank).map(x=>'Yeni yetki: '+x[1]),...(r.gate?[r.gate]:[]),...(!S.world.war?['1 gün terfi izni']:[])];
 ceremony(old,S.rank,unl,pick(PROMO));
 if(S.rank===18)ending();
}
/* Günün önerileri */
function suggest(){
 const L=[];const left=7-((S.day-1)%7);const need=3-S.week.length;
 if(S.world.war&&S.rank>=1)L.push(['h','Savaş sürüyor',`${NAT[S.world.war].n} cephesinde gönüllü görev al ya da günlük görevini 1,5 kat tecrübeyle tamamla.`,'world']);
 if(S.injured)L.push(['h',`Sakatlığın sürüyor (${S.injured} gün)`,'Ağır antrenman yok. Atış poligonu, harp oyunu veya arazi okuma gibi askerî eğitimlere yönel.','train']);
 if(S.st.mental<30)L.push(['h','Ruh halin çok düşük','Psikolojik danışmanla görüş ya da sevdiklerinle konuş. Düşük moral görev başarını düşürüyor.','life']);
 if(need>0&&!S.injured)L.push([need>=left?'h':'m',need>=left?'Haftalık spor hedefi tehlikede':`Bu hafta ${need} gün daha spor`,`Haftanın bitmesine ${left} gün var, ${S.week.length}/3 gün antrenman yaptın.`,'train']);
 if(S.fatigue>65)L.push(['m','Yorgunluk yüksek',`Yorgunluk ${Math.round(S.fatigue)}. Bu gece 9 saat uyu ya da bir eylemini dinlenmeye ayır.`,'life']);
 if(S.nutri<52)L.push(['m','Beslenmen zayıf','Bugün üç öğünü de sağlıklı seç ve su iç; gelişim hızın beslenmeye bağlı.','life']);
 if(S.partner&&S.partner.aff<40)L.push(['m',`${S.partner.name} seni özlüyor`,'Bir mesaj atmak bile ilişkiyi ayakta tutar.','life']);
 if(S.izin)L.unshift(['l','Bugün izinlisin','Dışarı çık: kafe, maç, doğa, ailen ya da yeni insanlarla tanış.','life']);
 if(!S.mDone&&S.op)L.push([S.world.war?'h':'l','Günlük harekât emri seni bekliyor',`${OPS.find(o=>o.id===S.op.id).ti} · ${S.op.city[0]} · ${NAT[S.op.en].n}`,'mission']);
 {const al=alarm();if(al[0]<=2&&!S.world.war)L.push(['m','Alarm seviyesi: '+al[1],'Sınırda gerginlik yüksek. Harekâtlara hazır ol.','world'])}
 const r=reqs().filter(x=>!x[2]);
 r.forEach(([n,v,ok,k])=>{if(k==='strat')L.push(['l',`Terfi için Strateji: ${v}`,'Harp oyunu ve topografik arazi okuma eğitimlerine katıl.','train']);
  if(k==='lider')L.push(['l',`Terfi için Liderlik: ${v}`,'Tim liderliği eğitimi en hızlı yol.','train']);
  if(k==='disiplin')L.push(['l',`Terfi için Disiplin: ${v}`,'Görevlerde kurala uygun karar ver; meditasyon da disiplini artırır.','mission']);
  if(k==='tr')L.push(['m',`Komutan güveni düşük: ${v}`,'Görevlerde yanlış karar verme; takdir alan kararlar güveni yükseltir.','mission'])});
 if(!r.length&&S.rank<18)L.push(['l','Terfi şartlarının hepsi tamam','Gün sonunda terfi kuruluna çıkacaksın.','hq']);
 const o={h:0,m:1,l:2};return L.sort((a,b)=>o[a[0]]-o[b[0]]).slice(0,4);
}
function sugHTML(list){return list.map(([p,t,d,tab])=>`<div class="sug"><span class="si ${p}">${p==='h'?'!':p==='m'?'•':'›'}</span><div class="grow"><b>${esc(t)}</b><span>${esc(d)}</span></div>${tab&&tab!=='hq'?`<button class="mini b" data-a="goto" data-v="${tab}">Git</button>`:''}</div>`).join('')}
function endDay(force){
 if(Q.length||MO||FXON)return;
 const miss=['k','o','a'].filter(k=>S.meals[k]==null&&!(S.skip||[]).includes(k));if(miss.length&&force!==true)return mealWarn(miss);
 const notes=[];const prevDay=S.day,dl=S.dl||{xp:S.xp,tr:S.trust,r:S.rank};const dTr=Math.round(S.trust-dl.tr),dXp=S.rank>dl.r?null:Math.round(S.xp-dl.xp);const sumH=`<div class="fxchips">${dXp!=null?`<span>Tecrübe ${dXp>=0?'+':''}${dXp}</span>`:'<span>Terfi aldın</span>'}<span>Güven ${dTr>=0?'+':''}${dTr}</span><span>${S.trainT} antrenman</span><span>${S.izin?'İzin günü':S.mDone&&S.mRes?['Harekât başarısız','Kısmi başarı','Harekât başarılı'][S.mRes.res]:'Harekât yapılmadı'}</span></div>`;
 let q=0;const skp=(S.skip||[]).filter(k=>S.meals[k]==null);['k','o','a'].forEach(k=>{const m=menuOf(S.nation,k);if(skp.includes(k)){q-=2;return}const i=S.meals[k]??2;q+=m[i][1]});if(skp.length){addSt('mental',-2*skp.length);notes.push(`<span class="red">${skp.length} öğün atladın.</span> Aç yatmak bedenini ve moralini yordu.`)}S.skip=[];S.ex.forEach(e=>{const x=EXTRAS.find(y=>y[0]===e);if(x)q+=x[2]});
 const tgt=clamp(50+q*4.2);S.nutri=clamp(S.nutri*.7+tgt*.3);
 if(S.meals.a===4)addSt('mental',2);
 notes.push(`Beslenme: günün puanı <b class="${q>=4?'green':q<0?'red':''}">${q>0?'+':''}${q}</b>, ortalaman ${Math.round(S.nutri)}.`);
 if(S.trainT>0&&!S.week.includes(S.day))S.week.push(S.day);
 addSt('saglik',(S.nutri-50)*.07+(S.fatigue<50?.6:0)-(S.fatigue>85?1.5:0)+(S.injured?-.5:0)+(S.ex.includes('sigara')?-1:0));
 const sl=S.sleep||7;const rec=sl===5?22:sl===9?55:40;
 S.fatigue=clamp(S.fatigue-(S.st.mental<30?rec*.6:rec));if(S.injured>0)S.injured--;
 if(sl===5)addSt('mental',-4);if(sl===9)addSt('mental',3);
 const base=tr().base+S.heal+(S.partner&&S.partner.aff>60?8:0)+(S.partner&&S.partner.m?4:0)+(S.week.length>=3?4:0)+(S.nutri>65?3:S.nutri<40?-4:0)+(S.fatigue>75?-8:0)+(S.injured?-5:0)+(S.st.saglik<40?-6:0)+((S.heartbreak||0)>S.day?-8:0);
 S.st.mental=clamp(S.st.mental+(base-S.st.mental)*.08);
 partnerTick(notes);
 if(S.day%7===0){const n=S.week.length;if(n>=3){addSt('dayan',2);addSt('mental',5);notes.push(`Haftalık spor hedefi tamam (<b>${n}/3</b>). Dayanıklılık +2, Ruh hali +5.`)}else{addSt('dayan',-2);addSt('guc',-1);addSt('mental',-3);notes.push(`<span class="red">Haftalık spor hedefi kaçtı (${n}/3).</span> Vücudun gevşedi.`)}S.week=[];worldTick();S.money+=maas();S.salaryAd={d:S.day+1};vWeekly(notes);notes.push(`Haftalık maaş yattı: <b>${money(maas())}</b> · hesabın ${money(S.money)}.`)}
 notes.push(...worldDaily());regionDaily(notes);foreignDaily(notes);worldNewsDaily();newsFollow();kogusTick();timTick();polDaily(notes);vDaily(notes);planTick(notes);
 if(S.trust<12){S.xp=Math.max(0,S.xp-25);S.trust=20;notes.push('<b class="red">Disiplin kuruluna sevk edildin.</b> Sicilin lekelendi, 25 tecrübe kaybettin.');log('Disiplin kurulu.')}
 if(S.opCd>0)S.opCd--;if(S.dipCd>0)S.dipCd--;
 S.day++;S.dIR++;newWeather();S.ap=sl===5&&!S.injured?APB+1:APB;S.mDone=false;S.trainT=0;S.msg=false;S.meals={k:null,o:null,a:null};S.mealOut={};S.ex=[];
 const sunday=(S.day-1)%7===6;S.izin=!S.world.war&&(sunday||!!S.izinNext);if(S.izinNext&&S.izin&&!sunday)S.leave=Math.max(0,S.leave-1);if(S.izinNext&&S.world.war)notes.push('<span class="red">Savaş nedeniyle iznin iptal edildi.</span>');S.izinNext=false;
 if(S.izin&&carOf())S.ap+=carOf()[4];if(S.izin){S.op=null;S.mDone=true;notes.push(`<b class="green">Bugün izinlisin.</b> ${sunday?'Haftalık dinlenme günü.':'Ödül iznini kullanıyorsun.'} Dışarı çık, sosyalleş, kafanı dağıt.`)}else pickOp();
 if((S.day-1)%7===6&&S.world.war)notes.push('<span class="red">Savaş sürdüğü için haftalık izin yok.</span>');
 friendTick();
 const sg=suggest();
 pushModal({k:DAYS[(S.day-1)%7]+' · Sabah raporu',ti:'Gün '+S.day,body:`<div class="list">${notes.map(n=>`<div>${n}</div>`).join('')}<div>Ruh halin: <b style="color:${mood()[1]}">${mood()[0]}</b>${sl===5?' · Erken kalktın: bugün 4 eylem hakkın var.':''}</div></div><div class="sec-t">Bugün yapman gerekenler</div><div>${sugHTML(sg)}</div>`});
 dayFX(prevDay,sumH);promoCheck();chapterCheck();runEvent();S.dl={xp:S.xp,tr:S.trust,r:S.rank};save();interQueue(dl.r);setTimeout(interTry,1500);
}
function mood(m=S.st.mental){
 if(m<20)return['Çökmüş','var(--red)','Her şey üstüne geliyor. Kararların bulanık, görev başarın düşer.'];
 if(m<40)return['Kederli ve gergin','var(--amber)','İçinde bir ağırlık var. Dikkatin dağılabilir.'];
 if(m<60)return['Durgun','var(--muted)','Ne iyi ne kötü. Gün nasıl geçerse öyle.'];
 if(m<80)return['Kararlı','var(--green)','Kafan net. Antrenman ve görevde verimlisin.'];
 return['Odaklanmış','var(--acc)','Zihnin keskin. En zor görevlere hazırsın.'];
}
function staffReport(){if(!useAP())return;addSt('strat',gain(1.6,S.st.strat));const good=S.st.strat>=40;S.trust=clamp(S.trust+(good?3:-1));log('Kurmay raporu hazırladın.');toast(good?'Raporun beğenildi. Komutan güveni +3':'Rapor yüzeysel bulundu. Komutan güveni -1');save();render()}
function volunteer(){
 if(S.injured)return toast('Yaralıyken cepheye gidemezsin.');if(!useAP())return;
 const p=clamp(.35+(S.st.dovus+S.st.nisan+S.st.dayan)/450+(S.st.mental-50)/300,.15,.88);const ok=R()<p;
 if(ok){const xp=[20,26,32,40,48][T()];S.xp+=xp;S.trust=clamp(S.trust+5);S.warScore=(S.warScore||0)+2;addSt('hirs',2);log('Cephe görevi başarılı.');pushModal({k:'Cephe',ti:'Hat tutuldu',art:scene('gece'),body:`<p>Gece boyu süren çatışmada mevziini terk etmedin. Birliğin ilerledi.</p><div class="fx"><span class="p">Tecrübe +${xp}</span><span class="p">Güven +5</span></div>`})}
 else{S.injured=4;addSt('saglik',-14);addSt('mental',-8);S.fatigue=clamp(S.fatigue+25);log('Cephede yaralandın.');pushModal({k:'Cephe',ti:'Yaralandın',art:scene('gece'),body:'<p>Şarapnel parçası. Sıhhiyeciler seni hatlardan çekti. 4 gün tedavi.</p>'+fx({'Sağlık':-14,'Ruh hali':-8})})}
 save();render();
}
function diplo(k,kind){
 const me=S.nation;if(S.dipCd>0)return toast('Diplomatik kanal '+S.dipCd+' gün sonra tekrar açılır.');
 if(kind==='ally'){const p=clamp((rel(me,k)+40)/120,.05,.9);S.dipCd=3;if(R()<p){S.world.al.push(pk(me,k));setRel(me,k,rel(me,k)+10);news(NAT[me].n+' ile '+NAT[k].n+' ittifak kurdu.');S.trust=clamp(S.trust+4);pushModal({k:'Diplomasi',ti:'İttifak kuruldu',body:`<p>${flag(k,24)} ${esc(NAT[k].n)} teklifini kabul etti. Ortak harekâtlarda yanında olacaklar.</p>`})}else{setRel(me,k,rel(me,k)-5);toast(NAT[k].n+' teklifini reddetti. İlişki -5')}}
 if(kind==='talk'){S.dipCd=2;setRel(me,k,rel(me,k)+8);toast(NAT[k].n+' ile görüşme yapıldı. İlişki +8')}
 if(kind==='leave'){S.world.al=S.world.al.filter(x=>x!==pk(me,k));setRel(me,k,rel(me,k)-20);news(NAT[me].n+', '+NAT[k].n+' ile ittifaktan çekildi.')}
 save();render();
}
function opStart(k){
 if(S.opCd>0)return toast('Ordu toparlanıyor: '+S.opCd+' gün sonra yeni harekât.');if(!useAP())return;
 const q=pick(OPQ),sw=R()<.5;const me=S.nation;
 const allies=NK.filter(a=>a!==me&&a!==k&&allied(me,a)&&!allied(a,k)&&rel(a,k)<25&&R()<.75);
 const run=g=>{
  const atk=pwr(me)+allies.reduce((s,a)=>s+pwr(a)*.5,0)+(g?18:-18)+S.st.strat/4+(S.st.mental-50)/5;
  const defA=NK.filter(a=>a!==k&&allied(a,k)&&a!==me);const def=pwr(k)*1.1+defA.reduce((s,a)=>s+pwr(a)*.35,0);
  const won=R()<clamp(atk/(atk+def),.15,.85);S.opCd=7;setRel(me,k,rel(me,k)-30);
  if(won){const n=transfer(k,me,2+Math.floor(R()*3));S.world.p[me]+=3;S.world.p[k]-=6;S.wins++;const xp=T()>=3?[90,140][T()-3]:120;S.xp+=xp;S.trust=clamp(S.trust+12);addSt('mental',6);news(`ZAFER: ${NAT[me].n}${allies.length?' ve müttefikleri':''}, ${NAT[k].n} karşısında ${n} bölge kazandı.`);log(NAT[k].n+' harekâtı: zafer.');
   pushModal({k:'Harekât sonucu',ti:'Zafer',art:mapSVG(),body:`<p>${n} bölge ele geçirildi. ${allies.length?'Müttefikler: '+allies.map(a=>NAT[a].n).join(', ')+'.':'Tek başına savaştın.'}</p><div class="fx"><span class="p">Tecrübe +${xp}</span><span class="p">Güven +12</span><span class="p">Komuta zaferi ${S.wins}</span></div>`})}
  else{S.world.p[me]-=5;S.trust=clamp(S.trust-12);addSt('mental',-10);const n=transfer(me,k,1);news(`${NAT[k].n}, harekâtımızı püskürttü.`);log(NAT[k].n+' harekâtı: yenilgi.');
   pushModal({k:'Harekât sonucu',ti:'Yenilgi',body:`<p>Taarruz durduruldu, ${n} bölge kaybedildi. Komuta heyeti hesap soruyor.</p><p class="quote bad">"${esc(pick(SCOLD))}"</p>`})}
  if(!S.world.war){S.world.war=k;S.world.warW=0}
  save();render();
 };
 const o1=sw?q.B:q.A,o2=sw?q.A:q.B;
 pushModal({k:'Harekât planı · '+NAT[k].n,ti:'Strateji kararı',art:scene('masa'),body:`<p>${esc(q.tx)}</p><p class="small muted">Katılacak müttefikler: ${allies.length?allies.map(a=>esc(NAT[a].n)).join(', '):'yok'}.</p>`,ch:[{t:o1[0],fn:()=>run(!!o1[1])},{t:o2[0],fn:()=>run(!!o2[1])}]});
 save();
}
function transferBranch(id){
 const b=brList(S.nation).find(x=>x.id===id),L=b.lock;if(S.rank<L.rank||S.st.dovus<L.dovus||S.st.dayan<L.dayan||S.st.nisan<L.nisan)return;
 if(!useAP())return;const p=clamp(.45+(S.st.dovus+S.st.dayan-L.dovus-L.dayan)/80,.2,.9);
 if(R()<p){S.branch=id;addSt('mental',10);S.trust=clamp(S.trust+5);log(b.n+' seçmesini geçtin.');pushModal({k:'Seçme',ti:'Bereni hak ettin',art:avatar(110),body:`<p>Haftalar süren uykusuzluk, açlık ve yük yürüyüşünden sonra <b>${esc(b.n)}</b> saflarına katıldın.</p>`})}
 else{addSt('mental',-8);S.fatigue=clamp(S.fatigue+30);log(b.n+' seçmesinde elendin.');pushModal({k:'Seçme',ti:'Elendin',body:'<p>Son gün, 40 km yük yürüyüşünde bacakların taşımadı. Bir dahaki sefere.</p>'})}
 save();render();
}
