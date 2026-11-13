/* =====================================================================
   v9 · mini oyun temposu, benzersiz kadro, harekât yıldızı,
   bağlama duyarlı görüşmeler, kamuflajlı giriş arayüzü
   ===================================================================== */

/* ---------- Mini oyun temposu ---------- */
const TEMPOS=[['sakin','Sakin','Okumaya ve düşünmeye bol süre'],['normal','Normal','Dengeli süre'],['hizli','Hızlı','Refleks testi']];
const MGF=()=>({sakin:2.4,normal:1.5,hizli:1}[(S&&S.mgTempo)||'sakin']||2.4);
function mgT(f,ms){const k=ms>=300?Math.max(1,MGF()*.8):1;const t=setTimeout(f,ms*k);MG&&MG.t.push(t);return t}
function tempoSeg(){const cur=(S&&S.mgTempo)||'sakin';return `<div class="tempo"><span class="lbl">Tempo</span><div class="seg">${TEMPOS.map(([k,n])=>`<button class="${cur===k?'on':''}" data-a="mgtempo" data-v="${k}">${n}</button>`).join('')}</div><span class="small muted" id="tdesc">${TEMPOS.find(t=>t[0]===cur)[2]}</span></div>`}
function setTempo(v){if(!S)return;S.mgTempo=v;save();document.querySelectorAll('[data-a=mgtempo]').forEach(b=>b.classList.toggle('on',b.dataset.v===v));const d=document.getElementById('tdesc');if(d)d.textContent=TEMPOS.find(t=>t[0]===v)[2];if(UI.scr==='settings')render()}

/* ---------- Benzersiz isim ve görünüm ---------- */
const FNX={TR:['Kerem','Onur','Tolga','Serkan','Barış','Kaan','Volkan','Uğur','Hakan','Cem'],ABD:['Tyler','Marcus','Derek','Connor','Mason','Caleb','Logan','Austin'],RUS:['Nikolai','Artyom','Maxim','Yuri','Andrei','Oleg','Roman','Kirill'],CIN:['Lei','Feng','Tao','Jian','Ming','Qiang','Yong','Gang'],ALM:['Tobias','Jan','Niklas','Florian','Stefan','Moritz','Kai','Tim'],IGB:['Thomas','William','Charlie','Daniel','Ben','Sam','Alfie','Callum'],FRA:['Antoine','Maxime','Julien','Nicolas','Romain','Adrien','Bastien','Quentin'],JPN:['Takeshi','Daiki','Riku','Kenta','Shun','Hiroshi','Yamato','Ryota'],PAK:['Imran','Faisal','Tariq','Junaid','Asad','Kamran','Waqas','Danish'],ITA:['Alessandro','Giorgio','Simone','Stefano','Riccardo','Federico','Paolo','Lorenzo'],SUR:['Mahmud','Tarık','Firas','Bassam','Rami','Adnan','Ziyad','Velid'],UZB:['Rustam','Dilshod','Otabek','Farrukh','Javlon','Sherzod','Bobur','Ulugbek'],AZE:['Tural','Rəşad','Elnur','Vüqar','Anar','Ramil','Səbuhi','Fərid'],ISR:['Avi','Gil','Nadav','Ido','Roi','Tal','Uri','Amit']};
const SQX={TR:['Koç','Kurt','Polat','Erdem','Aksoy','Tekin','Güneş','Karaca','Bulut','Ateş'],ABD:['Carter','Mitchell','Hayes','Coleman','Bennett','Foster','Ramirez','Sullivan'],RUS:['Fedorov','Orlov','Lebedev','Kozlov','Novikov','Zaitsev','Belov','Gromov'],CIN:['Wu','Xu','Sun','Ma','Zhu','Hu','Guo','Lin'],ALM:['Schulz','Neumann','Schwarz','Zimmermann','Braun','Krüger','Hartmann','Lange'],IGB:['Davies','Roberts','Walker','Thompson','White','Edwards','Green','Hall'],FRA:['Lefebvre','Roux','Fournier','Morel','Simon','Michel','Garnier','Faure'],JPN:['Kobayashi','Katō','Yoshida','Yamada','Sasaki','Matsumoto','Inoue','Kimura'],PAK:['Siddiqui','Chaudhry','Abbasi','Mirza','Sheikh','Javed','Bhatti','Akhtar'],ITA:['Marino','Greco','Bruno','Gallo','Conti','De Luca','Mancini','Costa'],SUR:['Atasi','Kabbani','Mardini','Şami','Hamvi','Halebi','Darwiş','Zaim'],UZB:['Karimov','Saidov','Ergashev','Xolmatov','Aliyev','Sobirov','Usmonov','Jurayev'],AZE:['Abbasov','Cəfərov','Nəsirov','Səfərov','Bağırov','Vəliyev','Orucov','Mustafayev'],ISR:['Katz','Shapiro','Golan','Ben-David','Azoulay','Ohana','Segal','Rosen']};
const FEMTR=['Elif','Zeynep','Ece','Selin','Defne'];
const isFem=(nat,n)=>nat==='TR'?FEMTR.includes(n):(FN[nat]||[]).indexOf(n)%2===0&&!['Ariel'].includes(n);
const femRate=nat=>['PAK','SUR','UZB','AZE'].includes(nat)?.08:['ISR','ABD','IGB','ALM','FRA','ITA'].includes(nat)?.25:.15;
function allPeople(){return[...(S.kogus||[]),...((S.tim&&S.tim.m)||[]),...(S.name?[{n:S.name.trim().replace(/\s+/g,' ')+(S.name.trim().includes(' ')?'':' _'),look:null}]:[])]}
function uniqName(exclude,force){const nat=S.nation;const fem=force!=null?force:R()<femRate(nat);const base=FN[nat]||FN.TR;const firsts=fem?base.filter(n=>isFem(nat,n)):[...base.filter(n=>!isFem(nat,n)),...(FNX[nat]||FNX.TR)];const lasts=[...(SQN[nat]||SQN.TR),...(SQX[nat]||SQX.TR)];
 const P=allPeople().filter(p=>p!==exclude);const tf=new Set(P.map(p=>p.n.split(' ')[0])),tl=new Set(P.map(p=>p.n.split(' ').slice(1).join(' ')));
 const f=firsts.filter(x=>!tf.has(x)),l=lasts.filter(x=>!tl.has(x));return{n:(pick(f.length?f:firsts))+' '+(pick(l.length?l:lasts)),fem}}
function uniqLook(fem,exclude){const used=new Set(allPeople().filter(p=>p!==exclude).map(p=>p.look?[p.look.g,p.look.skin,p.look.hs,p.look.hc,p.look.beard].join('|'):''));let lk;for(let i=0;i<40;i++){
  lk=fem?{g:'k',skin:Math.floor(R()*5),hs:pick(['topuz','uzun','kisa','dalgali']),hc:Math.floor(R()*6),beard:'yok',eye:Math.floor(R()*4),boy:160+Math.round(R()*16),kilo:52+Math.round(R()*16),hat:false}
  :{g:'e',skin:Math.floor(R()*5),hs:pick(['asker','kisa','kel','dalgali','asker']),hc:Math.floor(R()*6),beard:pick(['yok','kirli','biyik','sakal','yok']),eye:Math.floor(R()*4),boy:168+Math.round(R()*22),kilo:64+Math.round(R()*30),hat:false};
  if(!used.has([lk.g,lk.skin,lk.hs,lk.hc,lk.beard].join('|')))break}return lk}
function mkMember(role){const nm=uniqName(null);return{n:nm.n,r:role,xp:15+Math.round(R()*25),mor:55+Math.round(R()*20),w:0,since:S.day,look:uniqLook(nm.fem,null)}}
function fixPeople(){if(!S)return;const pn=(S.name||'').trim().split(/\s+/);const seenN=new Set(),seenF=new Set([pn[0]]),seenL=new Set([pn.slice(1).join(' ')]),seenK=new Set();
 const fixOne=(p,isTim)=>{const kmate=isTim&&(S.kogus||[]).some(k=>k.n===p.n);const parts=p.n.split(' ');const f=parts[0],l=parts.slice(1).join(' ');
  if(!kmate&&(seenN.has(p.n)||seenF.has(f)||seenL.has(l))){const nm=uniqName(p);p.n=nm.n;p.look=uniqLook(nm.fem,p)}
  const fem=isFem(S.nation,p.n.split(' ')[0]);if(!p.look||(fem&&p.look.g!=='k')||(!fem&&p.look.g==='k'))p.look=uniqLook(fem,p);
  const sig=[p.look.g,p.look.skin,p.look.hs,p.look.hc,p.look.beard].join('|');if(!kmate&&seenK.has(sig))p.look=uniqLook(p.look.g==='k',p);
  seenN.add(p.n);seenF.add(p.n.split(' ')[0]);seenL.add(p.n.split(' ').slice(1).join(' '));seenK.add([p.look.g,p.look.skin,p.look.hs,p.look.hc,p.look.beard].join('|'))};
 const pf=(S.look&&S.look.g)==='k';const ren={};(S.kogus||[]).forEach(p=>{if(isFem(S.nation,p.n.split(' ')[0])!==pf||p.n.split(' ')[0]===pn[0]){const old=p.n;const nm=uniqName(p,pf);p.n=nm.n;p.look=uniqLook(pf,p);ren[old]=p}});if(S.tim)S.tim.m.forEach(m=>{const k=ren[m.n];if(k){m.n=k.n;m.look=Object.assign({},k.look)}});
 (S.kogus||[]).forEach(p=>fixOne(p,false));if(S.tim)S.tim.m.forEach(p=>fixOne(p,true));}
function timSync(){const r=timSync0();fixPeople();return r}

/* ---------- Harekât yıldızı (performansa göre, dönüşümlü) ---------- */
const STROLE={nisan:['Nişancı','Keskin nişancı','Makineli tüfekçi','Keskin nişancı'],lider:['Tim lideri','1. Tim lideri','2. Tim lideri','3. Tim lideri','Takım çavuşu','Kurmay başkanı','komutanı'],strat:['Telsizci','Dron operatörü','İstihbarat','Harekât','Muhabere'],dayan:['Sıhhiyeci','Sıhhiye','İstihkâmcı','Makineli tüfekçi'],disiplin:['Takım çavuşu','Bölük başçavuşu','Lojistik','İstihkâmcı'],dovus:['Makineli tüfekçi','Tim lideri','Nişancı']};
function pickMvp(o){if(!S.tim)return null;const h=healthy();if(!h.length)return null;S.tim.mvps=S.tim.mvps||[];
 const good=(o.notes||[]).filter(x=>x[3]&&x[2]>=.8);const st=good.length?pick(good)[5]:null;const roles=st?STROLE[st]||[]:[];
 const pool=h.filter(m=>!S.tim.mvps.slice(-2).includes(m.n));const P=pool.length?pool:h;
 const w=P.map(m=>(roles.some(r=>m.r.includes(r))?3:1)*(1+m.xp/100));let s=w.reduce((a,b)=>a+b,0)*R();let mv=P[0];for(let i=0;i<P.length;i++){s-=w[i];if(s<=0){mv=P[i];break}}
 S.tim.mvps=[...S.tim.mvps,mv.n].slice(-4);return mv}

/* ---------- Harekâta göre değişen birebir görüşme ---------- */
function gorOpts(m){const c=S.lastOpCtx&&S.day-S.lastOpCtx.d<=1?S.lastOpCtx:null;const f=m.n.split(' ')[0];const L=[];
 if(c){
  if(c.mvp===m.n)L.push(['Bugünkü performansını takdir et',`"${c.ti} boyunca sadece görevimi yaptım komutanım… ama bunu sizden duymak başka."`,{mor:12,xp:2}]);
  if(m.w>0&&(c.wiaL||[]).includes(m.n))L.push(['Revirde yanında kal, yarasını sor',`"Doktor birkaç güne ayağa kalkarsın dedi. Sizi burada görmek… sağ olun komutanım."`,{mor:14,heal:1}]);
  if((c.kia||[]).length)L.push([`${c.kia[0].split(' ')[0]} için birlikte anın`,`"O benim ranza arkadaşımdı. Son gece bana ailesinin fotoğrafını göstermişti…" Sessizce oturdunuz; ${f} gözlerini sildi.`,{mor:10,mental:-2}]);
  if(c.res===0){L.push(['Neyin yanlış gittiğini birlikte konuş',`"Bence ${c.worst?c.worst[0].toLocaleLowerCase('tr')+' aşamasında':'temas anında'} dağıldık komutanım. Bir dahakine işaretleri önceden konuşalım."`,{mor:6,xp:4}]);L.push(['Onu suçlama, moral ver',`"Haklısınız komutanım. ${c.city} hattında kaybettiğimizi yarın geri alacağız."`,{mor:12}])}
  if(c.res===1)L.push(['Kısmi başarıyı birlikte değerlendir',`"Hedefe vardık ama bedeli ağır oldu. ${c.best?c.best[0]+' aşaması iyiydi, ':''}gerisinden ders çıkarıyoruz."`,{mor:6,xp:3}]);
  if(c.res===2)L.push(['Başarıyı kutla',`"${c.city} hattında bizi kimse durduramazdı! Akşam çayları benden komutanım."`,{mor:9}]);
  if(c.hes)L.push(['Kritik anda ne hissettiğini sor',`"Telsiz sustuğunda bir an donduk komutanım. Sizden emir bekledik… Bir dahakine kendi inisiyatifimizi kullanmamıza izin verin."`,{mor:5,lider:.6}]);
  if(c.sivil)L.push(['Sivil olayında ne gördüğünü sor',`"Bir aile vardı… Çocuğun yüzünü unutamıyorum komutanım." Uzun süre konuştunuz.`,{mor:7,mental:-1}]);
  if(c.giz>=70&&c.res>=1)L.push(['Gizli sızmayı konuş',`"Düşman nöbetçisinin yanından iki metre geçtik komutanım. Kalbim hâlâ küt küt atıyor!"`,{mor:7}])}
 if(m.mor<40)L.push(['Moralini yükselt',`"Son günlerde kafam çok karışık komutanım. Konuşmamız iyi geldi."`,{mor:15}]);
 const G=[['Ailesini sor',`"Annem her gün arıyor. Ona sizi anlattım, sizi merak ediyor."`,{mor:8}],['Gelecek planlarını sor',`"Bu iş bitince bir çiftlik almak istiyorum. Belki siz de gelirsiniz, ha?"`,{mor:7}],['Performansını değerlendir',`"Haklısınız komutanım. Atış ortalamamı düzelteceğim."`,{mor:5,xp:4}],['Korkularını konuş',`"Gece gözümü kapatınca son harekâtı görüyorum. Kimseye söylememiştim."`,{mor:10}]];
 for(const g of G){if(L.length>=4)break;L.push(g)}return L.slice(0,4)}
function unitAct(v){const[a,i]=v.split('|');timSync();const M=S.tim.m;
 if(a==='tatbikat'){if(S.unitD===S.day+'t')return;if(!useAP())return;S.unitD=S.day+'t';M.forEach(m=>{m.xp=Math.min(100,m.xp+6);m.mor=clamp(m.mor-2)});addSt('lider',1);S.fatigue=clamp(S.fatigue+8);toast(pick(['Gece tatbikatı tamam: baskın, tahliye ve yaralı taşıma prova edildi.','Canlı atışlı tatbikatta birliğin tempoyu yakaladı.','Muhabere ve harita tatbikatı: herkes kendi rolünü ezbere biliyor.'])+' Tecrübe +6')}
 if(a==='moral'){if(S.unitD===S.day+'m')return;if(!useAP())return;S.unitD=S.day+'m';M.forEach(m=>m.mor=clamp(m.mor+8));addSt('lider',.5);toast(pick(['Herkesi topladın, açık konuştun. Omuzlar dikleşti.','Kantinde birlikte yemek yediniz; şakalar geri geldi.','Şehitlerimizi andınız ve geleceği konuştunuz.'])+' Moral +8')}
 if(a==='gor'){const m=M[+i];if(!m)return;const c=S.lastOpCtx&&S.day-S.lastOpCtx.d<=1?S.lastOpCtx:null;const O=gorOpts(m);
  pushModal({k:uName()+' · Birebir görüşme',ti:m.n,art:`<div class="row" style="justify-content:center;padding:8px">${avatar(84,B(),Math.max(0,S.rank-2),m.look,S.nation,m.n)}</div>`,body:`<p class="small muted">${esc(m.r)} · Moral ${Math.round(m.mor)}${m.w?' · yaralı':''}</p>${c?`<p class="small">Son harekât: <b>${esc(c.ti)}</b> · <span class="${c.res===2?'green':c.res===0?'red':''}">${['başarısız','kısmi başarı','başarılı'][c.res]}</span>${c.mvp===m.n?' · <span class="acc">harekâtın yıldızı</span>':''}</p>`:''}<p>Neyi konuşmak istersin? (1 eylem)</p>`,
   ch:O.map(([t,l,e])=>({t,fn:()=>{if(!useAP())return;if(e.mor)m.mor=clamp(m.mor+e.mor);if(e.xp)m.xp=Math.min(100,m.xp+e.xp);if(e.heal&&m.w>0)m.w--;if(e.mental)addSt('mental',e.mental);if(e.lider)addSt('lider',e.lider);addSt('lider',.3);
    setTimeout(()=>pushModal({k:'Birebir görüşme',ti:m.n.split(' ')[0],art:`<div class="row" style="gap:12px;padding:10px;align-items:flex-start">${avatar(64,B(),Math.max(0,S.rank-2),m.look,S.nation,m.n)}<div class="speech"><p>${esc(l)}</p></div></div>`,body:`<div class="fx">${e.mor?`<span class="p">Moral +${e.mor}</span>`:''}${e.xp?`<span class="p">Tecrübe +${e.xp}</span>`:''}${e.heal?'<span class="p">İyileşme hızlandı</span>':''}${e.mental?`<span class="n">Ruh hali ${e.mental}</span>`:''}</div>`}),0)}})).concat([{t:'Vazgeç',fn:()=>{}}])})}
 save();render()}

/* ---------- Kamuflaj ---------- */
function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const CAMOC={};
function camoSVG(cols,dig,seed){const key=cols.join()+dig+seed;if(CAMOC[key])return CAMOC[key];const rr=rng(seed||7);const W=520;let s=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${W}" viewBox="0 0 ${W} ${W}"><rect width="${W}" height="${W}" fill="${cols[0]}"/>`;
 if(dig){const C=8,N=W/C;const grid=[];for(let k=1;k<4;k++){for(let b=0;b<16;b++){const cx=rr()*N,cy=rr()*N,rad=2+rr()*5;for(let y=-8;y<=8;y++)for(let x=-8;x<=8;x++){const d=Math.hypot(x*1.2,y)+rr()*2.2;if(d<rad){const gx=((Math.round(cx+x)%N)+N)%N,gy=((Math.round(cy+y)%N)+N)%N;grid[gy*N+gx]=k}}}}
  for(let i=0;i<grid.length;i++)if(grid[i])s+=`<rect x="${(i%N)*C}" y="${Math.floor(i/N)*C}" width="${C}" height="${C}" fill="${cols[grid[i]]}"/>`}
 else{for(let k=1;k<4;k++){for(let b=0;b<11;b++){const cx=rr()*W,cy=rr()*W,r=26+rr()*48,n=7+Math.floor(rr()*4);const pts=[...Array(n)].map((_,j)=>{const a=j/n*Math.PI*2,rad=r*(.55+rr()*.7)*(j%2?1:1.25);return[Math.cos(a)*rad*(1.4),Math.sin(a)*rad*.8]});const rot=rr()*Math.PI;
   const P=pts.map(([x,y])=>[x*Math.cos(rot)-y*Math.sin(rot),x*Math.sin(rot)+y*Math.cos(rot)]);let d='';for(let j=0;j<n;j++){const p0=P[j],p1=P[(j+1)%n];const mx=(p0[0]+p1[0])/2,my=(p0[1]+p1[1])/2;d+=(j?'':`M${((P[n-1][0]+p0[0])/2).toFixed(1)} ${((P[n-1][1]+p0[1])/2).toFixed(1)}`)+`Q${p0[0].toFixed(1)} ${p0[1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`}
   [[0,0],[W,0],[-W,0],[0,W],[0,-W],[W,W],[-W,-W],[W,-W],[-W,W]].forEach(([ox,oy])=>{const x=cx+ox,y=cy+oy;if(x>-r*2&&x<W+r*2&&y>-r*2&&y<W+r*2)s+=`<path transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" d="${d}Z" fill="${cols[k]}"/>`})}}}
 s+='</svg>';CAMOC[key]=`url("data:image/svg+xml;utf8,${encodeURIComponent(s)}")`;return CAMOC[key]}
function camoNat(){const sv=UI.scr==='create'?null:loadSave();return S&&UI.scr==='game'?S.nation:(UI.scr==='create'||UI.scr==='story')?(UI.d&&UI.d.nation)||'TR':sv?sv.nation:'TR'}
function camoBg(){const app=$('#app');if(!app)return;const pre=['title','story','create','ledger','howto','settings'].includes(UI.scr);app.classList.toggle('camo',pre);if(!pre)return;const nat=NAT[camoNat()]?camoNat():'TR';app.style.setProperty('--camo',camoSVG(NAT[nat].camo,NAT[nat].dig,nat.charCodeAt(0)*31+nat.charCodeAt(1)))}
function dogTags(nm){return `<svg class="tags" viewBox="0 0 120 170" aria-hidden="true"><defs><linearGradient id="tgm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9ecef"/><stop offset=".45" stop-color="#9aa1a8"/><stop offset=".55" stop-color="#cfd4d8"/><stop offset="1" stop-color="#6f767c"/></linearGradient></defs>
 <path d="M60 0 C40 30 34 50 44 74 M60 0 C78 30 86 52 76 80" fill="none" stroke="#b9bec2" stroke-width="2" stroke-dasharray="3 2"/>
 <g transform="rotate(-10 44 110)"><rect x="14" y="74" width="60" height="88" rx="18" fill="url(#tgm)" stroke="#555" stroke-width="1"/><circle cx="44" cy="84" r="3.4" fill="#333"/><text x="44" y="108" text-anchor="middle" font-family="Courier New,monospace" font-weight="700" font-size="9" fill="#2a2d30">${esc(nm)}</text><text x="44" y="122" text-anchor="middle" font-family="Courier New,monospace" font-size="7.5" fill="#2a2d30">KAN 0 RH+</text><text x="44" y="135" text-anchor="middle" font-family="Courier New,monospace" font-size="7.5" fill="#2a2d30">NO 1923-0451</text></g>
 <g transform="rotate(12 80 116)"><rect x="54" y="80" width="56" height="82" rx="17" fill="url(#tgm)" stroke="#555" stroke-width="1" opacity=".92"/><circle cx="82" cy="90" r="3.2" fill="#333"/></g></svg>`}
function vTitle(){
 const sv=loadSave();const nat=sv&&NAT[sv.nation]?sv.nation:'TR';
 return `<div class="title t2 gut">
 <div class="ttape"><span>GİZLİ</span><span>DOSYA NO ${String(1000+((sv&&sv.day)||0)*37%9000)}</span><span>${new Date().getFullYear()}</span></div>
 <div class="tpatch">${flag(nat,46)}</div>${dogTags(sv?sv.name.split(' ').pop().toLocaleUpperCase('tr').slice(0,10):'ASKER')}
 <div class="plate"><i class="rv a"></i><i class="rv b"></i><i class="rv c"></i><i class="rv d"></i><div class="lbl">Askerî kariyer · Strateji · Yaşam</div><h1 class="logo">BÜYÜK<br><span>YEMİN</span></h1><div class="stencilbar"><span></span>Erden mareşale<span></span></div></div>
 <p class="tag">Kaybettiklerin için, vatanın için, kendin için.</p>
 <div class="menu">
 ${sv?`<button class="mrow primary" data-a="cont"><span class="mi">${avatarSafe(sv)}</span><span><b>Devam et</b><small>${esc(sv.name)} · ${esc(rankName(sv.rank,sv.nation,(brList(sv.nation).find(b=>b.id===sv.branch)||brList(sv.nation)[0]).rs))} · Gün ${sv.day}</small></span><span class="chev">›</span></button>`:''}
 <button class="mrow ${sv?'':'primary'}" data-a="new"><span class="mi">${ico('plus',22)}</span><span><b>Yeni oyun</b><small>Hikâyeni yaz, ülkeni ve birliğini seç</small></span><span class="chev">›</span></button>
 <button class="mrow" data-a="ledger"><span class="mi">${ico('rank',22)}</span><span><b>Rütbe cetvelleri</b><small>${NK.length} ülkenin ordusu ve rütbe sistemi</small></span><span class="chev">›</span></button>
 <div class="row"><button class="mrow grow" data-a="howto"><span class="mi">${ico('book',22)}</span><span><b>Rehber</b></span></button><button class="mrow grow" data-a="settings"><span class="mi">${ico('gear',22)}</span><span><b>Ayarlar</b></span></button></div>
 ${typeof langPicker==='function'?langPicker():''}${typeof FICTNOTE!=='undefined'?`<p class="fnote">${FICTNOTE}</p>`:''}</div></div>`}
function vSettings(){
 const tm=S?S.trainMode:'ask';const tp=(S&&S.mgTempo)||'sakin';
 return `<div class="card"><div class="sec-h"><h2>Antrenman modu</h2></div>${S?`<div class="seg">${[['ask','Sor'],['play','Mini oyun'],['auto','Otomatik']].map(([v,n])=>`<button class="${tm===v?'on':''}" data-a="tmode" data-v="${v}">${n}</button>`).join('')}</div>`:'<p class="small muted">Oyun başladığında ayarlanır.</p>'}</div>
 <div class="card"><div class="sec-h"><h2>Mini oyun temposu</h2></div>${S?`<div class="seg">${TEMPOS.map(([k,n])=>`<button class="${tp===k?'on':''}" data-a="mgtempo" data-v="${k}">${n}</button>`).join('')}</div><p class="small muted">${TEMPOS.find(t=>t[0]===tp)[2]}. Sakin tempoda komutları okumak ve cevap vermek için süre yaklaşık 2,5 kat uzar, raundlar arasında da nefes alırsın.</p>`:'<p class="small muted">Oyun başladığında ayarlanır.</p>'}</div>
 <div class="card"><div class="sec-h"><h2>Kayıt</h2></div><p class="small muted">Oyun her adımda bu cihaza otomatik kaydedilir.</p>
 ${loadSave()?(UI.confirmReset?'<button class="btn warn block" data-a="reset2">Evet, kaydı kalıcı olarak sil</button>':'<button class="btn ghost block" data-a="reset">Kayıtlı oyunu sil</button>'):'<p class="small muted">Kayıtlı oyun yok.</p>'}</div>${typeof vSettingsLang==='function'?vSettingsLang():''}`}

const A9={mgtempo:setTempo};
