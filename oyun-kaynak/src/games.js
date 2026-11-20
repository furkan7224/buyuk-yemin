/* ============ MİNİ OYUN ALTYAPISI ============ */
let MG=null;
function mgT(f,ms){const t=setTimeout(f,ms);MG&&MG.t.push(t);return t}
const MGK=id=>SPORTS.find(s=>s[0]===id)?LT[lessonOf(id,S.day)]:COND.find(c=>c[0]===id)?'tempo':({atis:'shoot',taktik:'war',harita:'nav',lider:'lead'})[id];
function startMG(id){
 const sp=SPORTS.find(s=>s[0]===id),cd=COND.find(c=>c[0]===id),ed=EDU.find(e=>e[0]===id);
 const kind=MGK(id);
 const help={fight:'Ekranda çıkan hareketin tuşuna süre bitmeden bas. 10 raunt.',tempo:'Beyaz çizgi yeşil bölgedeyken ADIM tuşuna bas. Ritmi koru. 10 adım.',
  shoot:'Parmağını ekranda sürükleyerek nişan al, bırakınca ateş edersin. Nişangâh nefesinle salınır; "Nefes tut" ile kısa süre sabitle. Kafa 10, göğüs 8, gövde 5 puan. 10 maket.',
  war:`${NAT[S.nation].n} kurmay haritası üzerinde 4 görev: ihtiyat konuşlandırma, hava savunma ve harp tarihi. Haritaya dokunarak cevap ver.`,
  nav:'1:50.000 topografik paftada 4 görev: grid koordinatı, en yüksek tepe, azimut ile ilerleme ve su kaynağı. Her kare 1 km.',
  lead:'4 kişilik timinin başındasın. Karşına çıkan 4 durumda karar ver. Her karar askerlerin moralini ve tim bütünlüğünü etkiler.'}[kind];
 MG={id,kind,t:[],raf:null,done:false,score:0,cleanup:[],lesson:sp?lessonOf(id,S.day):null,learn:false};
 const help2=sp?`<b>${esc(lessonName(id,MG.lesson))}</b> · ${LTD[kind]}${MG.lesson==='teknik'?' Bugün öğreneceğin: '+esc((curOf(id)[S.tech[id]||0]||{n:'tekrar'}).n)+'.':''}`:help;
 const el=$('#mg');el.hidden=false;
 el.innerHTML=`<div class="mg"><div class="mg-top gut"><div><div class="lbl acc">${sp?'Spor salonu · '+esc(DAYS[(S.day-1)%7]):'Eğitim · '+esc(ed?ed[3]:'Kondisyon')}</div><b>${esc((sp||cd||ed)[1])}</b></div><button class="mini" data-a="mgquit">Bırak</button></div><div class="gut" style="display:flex;flex-direction:column;gap:12px;flex:1;min-height:0" id="mgb"><div class="brief"><span class="n">!</span><div><b>${sp?'Bugünün dersi':'Brifing'}</b><span class="small muted">${help2}</span></div></div>${tempoSeg()}<div class="mg-stage">${kind==='lead'?ico('team',64):kind==='nav'?ico('topo',64):kind==='war'?ico('map',64):kind==='shoot'?ico('target',64):sp?`<div class="mg-cmd stencil" style="font-size:30px">${esc(lessonName(id,MG.lesson).toLocaleUpperCase(typeof LANG!=='undefined'&&LANG!=='tr'?'en':'tr'))}</div><div class="small muted">${beltOf(id)} · Müfredat ${Math.min(S.tech[id]||0,curOf(id).length)}/${curOf(id).length}</div>`:'<div class="mg-cmd stencil">HAZIR OL</div>'}</div><button class="btn block" data-a="mggo">Başla</button></div></div>`;
}
function mgEnd(score,extra=''){
 if(!MG||MG.done)return;MG.done=true;MG.t.forEach(clearTimeout);if(MG.raf)cancelAnimationFrame(MG.raf);MG.cleanup.forEach(f=>f());
 MG.score=clamp(score,0,1);const pc=Math.round(MG.score*100);const v=Math.round((.6+MG.score)*100);
 const msg=pc>=85?'Kusursuz. Eğitmenin seni örnek gösterecek.':pc>=60?'İyi iş. Terledin ama değdi.':pc>=35?'Ortalama. Odaklanmalısın.':'Kötü bir seans. Yarın daha iyisini yap.';
 $('#mgb').innerHTML=`<div class="mg-stage" style="padding:20px"><div class="lbl">Değerlendirme</div><div class="mg-cmd ${pc>=60?'g':pc<35?'r':''}">%${pc}</div><p class="muted" style="text-align:center;max-width:32ch">${msg}</p>${extra}<div class="fx"><span class="p">Gelişim verimi %${v}</span>${S.best[MG.id]?`<span>Rekor %${Math.max(S.best[MG.id],pc)}</span>`:''}</div></div>${rwBtn('train2','Gelişimi 2 kat al')}<button class="btn block" data-a="mgdone">Eğitimi tamamla</button>`;
}
function mgClose(){const el=$('#mg');el.hidden=true;el.innerHTML='';if(MG){MG.t.forEach(clearTimeout);if(MG.raf)cancelAnimationFrame(MG.raf);MG.cleanup.forEach(f=>f())}}
function mgGo(){({fight:mgFight,tempo:mgTempo,shoot:mgShoot,war:mgWar,nav:mgNav,lead:mgLead,order:lgOrder,mitts:lgMitts,bag:lgBag,arrows:lgArrows,spar:lgSpar,subm:lgSubm})[MG.kind]()}

/* ---------- Dövüş ---------- */
function mgFight(){
 const id=MG.id;const grap=['gures','judo','bjj','sambo','aikido'].includes(id),kick=['tkd','karate','kick','muay','capo','kungfu','krav','mma','systema'].includes(id);
 const mv=id==='kendo'?['Men','Kote','Do','Savun']:grap?['Kavra','Fırlat','Kilit','Savun']:kick?['Yumruk','Tekme','Diz / Dirsek','Blok']:['Jab','Kroşe','Aparkat','Blok'];
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Raunt <b id="mr">0</b>/6</span><span>İsabet <b id="mh">0</b></span></div>
 <div class="mg-stage"><svg class="opp" id="opp" viewBox="0 0 100 140" width="110" height="154" aria-hidden="true"><ellipse cx="50" cy="134" rx="34" ry="5" fill="#00000055"/><path d="M28 136 L34 92 L66 92 L72 136Z" fill="#2a2a2a"/><path d="M22 96 Q20 54 50 48 Q80 54 78 96Z" fill="#9a6a4a"/><circle cx="50" cy="30" r="17" fill="#a87452"/><path d="M33 26 Q50 6 67 26 L67 20 Q50 2 33 20Z" fill="#7a2e26"/><circle cx="22" cy="66" r="12" fill="#b0302a"/><circle cx="78" cy="62" r="12" fill="#b0302a"/><path d="M42 30 h5 M53 30 h5" stroke="#2a1a10" stroke-width="2.4"/></svg><div class="mg-cmd stencil" id="mc">HAZIR</div><div class="mg-tbar"><i id="mt"></i></div></div>
 <div class="mg-pad">${mv.map((m,i)=>`<button class="mg-btn" data-i="${i}">${m}</button>`).join('')}</div>`;
 let round=0,hits=0,cur=-1,t0=0,lim=0,open=false;const mc=$('#mc'),mt=$('#mt'),opp=$('#opp');
 const fb=ok=>{mc.textContent=ok?'İSABET':'KAÇTI';mc.className='mg-cmd stencil '+(ok?'g':'r');if(ok){opp.classList.add('hit');mgT(()=>opp.classList.remove('hit'),160)}};
 function next(){if(round>=6)return mgEnd(hits/6);round++;$('#mr').textContent=round;cur=Math.floor(R()*4);lim=(1750-round*85)*MGF();t0=performance.now();open=true;mc.textContent=mv[cur].toLocaleUpperCase(typeof LANG!=='undefined'&&LANG!=='tr'?'en':'tr');mc.className='mg-cmd stencil';tick()}
 function tick(){if(!open||!MG||MG.done)return;const e=performance.now()-t0;mt.style.width=Math.max(0,100*(1-e/lim))+'%';if(e>=lim){open=false;fb(false);mgT(next,500)}else MG.raf=requestAnimationFrame(tick)}
 document.querySelectorAll('.mg-pad .mg-btn').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(!open)return;open=false;const ok=+b.dataset.i===cur;if(ok){hits++;$('#mh').textContent=hits}else{b.classList.add('bad');mgT(()=>b.classList.remove('bad'),250)}fb(ok);mgT(next,420)}));
 mgT(next,700);
}
/* ---------- Kondisyon ---------- */
function mgTempo(){
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Adım <b id="ms">0</b>/10</span><span>Ritim <b id="mh">0</b></span></div>
 <div class="mg-stage"><div class="mg-cmd stencil" id="mc">TEMPO</div><div class="track"><div class="z" id="mz"></div><div class="m" id="mm"></div></div></div>
 <button class="mg-btn" id="step" style="min-height:96px;font-size:24px">Adım</button>`;
 let pos=0,dir=1,v=.75/Math.sqrt(MGF()),taps=0,good=0,zc=.5,zw=.32,last=performance.now();const mz=$('#mz'),mm=$('#mm'),mc=$('#mc');
 const place=()=>{mz.style.left=((zc-zw/2)*100)+'%';mz.style.width=(zw*100)+'%'};place();
 function tick(now){if(!MG||MG.done)return;const dt=(now-last)/1000;last=now;pos+=dir*v*dt;if(pos>1){pos=1;dir=-1}if(pos<0){pos=0;dir=1}mm.style.left=(pos*100)+'%';MG.raf=requestAnimationFrame(tick)}
 MG.raf=requestAnimationFrame(t=>{last=t;tick(t)});
 $('#step').addEventListener('pointerdown',e=>{e.preventDefault();if(MG.done)return;taps++;const ok=Math.abs(pos-zc)<=zw/2;if(ok){good++;$('#mh').textContent=good}mc.textContent=ok?'TAM RİTİM':'TEMPO KAÇTI';mc.className='mg-cmd stencil '+(ok?'g':'r');$('#ms').textContent=taps;
  if(taps>=10)return mgT(()=>mgEnd(good/10),350);zw=Math.max(.12,zw-.02);v+=.09/Math.sqrt(MGF());zc=.2+R()*.6;place()});
}

/* ---------- Atış poligonu ---------- */
function mgShoot(){
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Maket <b id="ms">0</b>/10</span><span>Puan <b id="mp">0</b></span><span>Şarjör <b id="ma">10</b>/10</span></div><div class="small muted">Silah: <b class="acc">${esc(equipped().p.n)}</b></div>
 <canvas class="mg-canvas" id="cv" style="height:min(62vh,460px)"></canvas>
 <div class="row"><button class="btn ghost grow" id="breath">Nefes tut</button><div class="small muted grow" id="mmsg" style="text-align:right">Sürükle, nişan al, bırak.</div></div>`;
 const cv=$('#cv'),ctx=cv.getContext('2d');const dpr=Math.min(2,devicePixelRatio||1);
 let W=cv.clientWidth,H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
 const hz=H*.36,skill=S.st.nisan,fat=S.fatigue;
 const DEP=[{y:H*.86,s:1,life:1900,lab:'25 m'},{y:H*.66,s:.6,life:2300,lab:'50 m'},{y:H*.52,s:.36,life:2700,lab:'100 m'}];
 const T=[];let spawned=0,total=0,ammo=10,reload=0,aim={x:W/2,y:H*.6},down=false,flash=0,recoil=0,kick=0,breath=0,breathCd=0,shake=0,puffs=[];
 const ew=equipped().p;const amp=()=>{let a=(3+(100-skill)/9+fat/22)*(1.25-(ew?ew.st[0]:60)/160);if(breath>0)a*=.25;else if(breathCd>3)a*=1.5;return a};
 function sway(t){const a=amp();return[Math.sin(t/620)*a+Math.sin(t/233)*a*.35,Math.cos(t/810)*a*.8+Math.sin(t/171)*a*.3]}
 function spawn(){if(!MG||MG.done)return;if(spawned>=10)return;spawned++;$('#ms').textContent=spawned;const d=DEP[spawned<4?Math.floor(R()*2):Math.floor(R()*3)];const lane=(R()*2-1)*.9;
  T.push({d,x:W/2+lane*W*.42*(.45+d.s*.55),t0:performance.now(),life:d.life,state:'up',best:0,holes:[],fallAt:0});
  mgT(spawn,spawned<6?1500:1150+R()*600);if(spawned>=6&&R()<.35)mgT(spawn,450)}
 function silPath(c,s){c.beginPath();c.arc(0,-88*s,11*s,0,Math.PI*2);c.moveTo(-9*s,-77*s);c.lineTo(-30*s,-70*s);c.quadraticCurveTo(-37*s,-66*s,-37*s,-55*s);c.lineTo(-34*s,0);c.lineTo(34*s,0);c.lineTo(37*s,-55*s);c.quadraticCurveTo(37*s,-66*s,30*s,-70*s);c.lineTo(9*s,-77*s);c.closePath()}
 function hit(t,px,py,now){const s=t.d.s*1.35*(t.raise||1);const lx=(px-t.x)/(t.d.s*1.35),ly=(py-t.d.y)/(t.d.s*1.35);
  if(Math.hypot(lx,ly+88)<=11)return 10;if(((lx)/14)**2+((ly+50)/18)**2<=1)return 8;
  const c=ctx;c.save();c.translate(t.x,t.d.y);silPath(c,t.d.s*1.35);const ins=c.isPointInPath(px*dpr,py*dpr);c.restore();return ins?5:0}
 function fire(){if(MG.done)return;if(reload>0){$('#mmsg').textContent='Şarjör değiştiriliyor…';return}if(ammo<=0)return;
  const now=performance.now();const[sx,sy]=sway(now);const px=aim.x+sx,py=aim.y+sy-kick;ammo--;$('#ma').textContent=ammo;flash=1;recoil=1;kick+=16;shake=4;
  let best=null,bp=0;for(const t of T){if(t.state==='down'||t.state==='gone')continue;const p=hit(t,px,py,now);if(p>bp){bp=p;best=t}}
  if(best){best.holes.push([(px-best.x)/best.d.s,(py-best.d.y)/best.d.s]);if(bp>best.best){total+=bp-best.best;best.best=bp}$('#mp').textContent=total;$('#mmsg').textContent=bp===10?'Kafa! +10':bp===8?'Göğüs +8':'Gövde +5';if(bp>=8&&!best.fallAt)best.fallAt=now+240}
  else{puffs.push({x:px,y:Math.max(py,hz+6),t:now});$('#mmsg').textContent='Iska'}
  if(ammo<=0){reload=1;$('#mmsg').textContent='Şarjör değiştiriliyor…';mgT(()=>{ammo=10;reload=0;$('#ma').textContent=ammo;$('#mmsg').textContent='Hazır'},1300)}}
 const pos=e=>{const r=cv.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
 const pd=e=>{e.preventDefault();down=true;aim=pos(e);cv.setPointerCapture&&cv.setPointerCapture(e.pointerId)},pm=e=>{if(down)aim=pos(e)},pu=e=>{if(!down)return;down=false;aim=pos(e);fire()};
 cv.addEventListener('pointerdown',pd);cv.addEventListener('pointermove',pm);cv.addEventListener('pointerup',pu);
 $('#breath').addEventListener('click',()=>{if(breathCd>0)return;breath=2.4;breathCd=6.5});
 let last=performance.now();
 function draw(now){if(!MG||MG.done)return;const dt=Math.min(.05,(now-last)/1000);last=now;breath=Math.max(0,breath-dt);breathCd=Math.max(0,breathCd-dt);kick*=Math.pow(.02,dt);recoil*=Math.pow(.004,dt);flash=Math.max(0,flash-dt*14);shake*=Math.pow(.01,dt);
  $('#breath').textContent=breath>0?'Nefes tutuluyor…':breathCd>0?`Nefes al (${Math.ceil(breathCd)})`:'Nefes tut';
  const ox=(R()-.5)*shake,oy=(R()-.5)*shake;ctx.save();ctx.translate(ox,oy);
  let g=ctx.createLinearGradient(0,0,0,hz);g.addColorStop(0,'#1d2733');g.addColorStop(.75,'#5c6a6c');g.addColorStop(1,'#b08a5a');ctx.fillStyle=g;ctx.fillRect(-10,-10,W+20,hz+10);
  ctx.fillStyle='#2f3a2c';ctx.beginPath();ctx.moveTo(-10,hz);for(let x=0;x<=W+10;x+=20)ctx.lineTo(x,hz-10-Math.sin(x*.03)*8-Math.sin(x*.011)*12);ctx.lineTo(W+10,hz);ctx.fill();
  ctx.fillStyle='#232b20';for(let x=0;x<W;x+=9){const h=6+((x*7)%11);ctx.beginPath();ctx.moveTo(x,hz);ctx.lineTo(x+4.5,hz-h);ctx.lineTo(x+9,hz);ctx.fill()}
  g=ctx.createLinearGradient(0,hz,0,H);g.addColorStop(0,'#5c5a3c');g.addColorStop(1,'#3a3a26');ctx.fillStyle=g;ctx.fillRect(-10,hz,W+20,H-hz+10);
  ctx.fillStyle='#6a5a3c';ctx.fillRect(-10,hz,W+20,8);
  ctx.strokeStyle='#ffffff14';ctx.lineWidth=1;for(let i=-4;i<=4;i++){ctx.beginPath();ctx.moveTo(W/2+i*8,hz+8);ctx.lineTo(W/2+i*W*.32,H);ctx.stroke()}
  DEP.forEach(d=>{ctx.fillStyle='#00000040';ctx.fillRect(0,d.y-1,W,2);ctx.fillStyle='#e8e2c8';ctx.font=`600 ${Math.round(9+d.s*3)}px Barlow Condensed,sans-serif`;ctx.fillText(d.lab,6,d.y-4)});
  puffs=puffs.filter(p=>now-p.t<500);puffs.forEach(p=>{const a=1-(now-p.t)/500;ctx.fillStyle=`rgba(190,170,130,${a*.7})`;ctx.beginPath();ctx.arc(p.x,p.y,4+(1-a)*10,0,6.3);ctx.fill()});
  T.sort((a,b)=>a.d.y-b.d.y).forEach(t=>{const el=now-t.t0;let r=1;
   if(t.state==='up'){r=Math.min(1,el/220);if(el>t.life||(t.fallAt&&now>t.fallAt)){t.state='fall';t.tf=now}}
   if(t.state==='fall'){r=Math.max(0,1-(now-t.tf)/200);if(r<=0)t.state='gone'}if(t.state==='gone')return;t.raise=r;
   const s=t.d.s*1.35;ctx.save();ctx.translate(t.x,t.d.y);ctx.fillStyle='#2a2418';ctx.fillRect(-3*s,0,6*s,14*s);ctx.scale(1,r);
   silPath(ctx,s);ctx.fillStyle='#55603a';ctx.fill();ctx.lineWidth=1.4;ctx.strokeStyle='#1f2416';ctx.stroke();
   ctx.strokeStyle='#ffffff30';ctx.beginPath();ctx.ellipse(0,-50*s,14*s,18*s,0,0,6.3);ctx.stroke();ctx.beginPath();ctx.ellipse(0,-50*s,7*s,9*s,0,0,6.3);ctx.stroke();
   ctx.fillStyle='#111';t.holes.forEach(([hx,hy])=>{ctx.beginPath();ctx.arc(hx*t.d.s,hy*t.d.s,Math.max(1.4,2.4*t.d.s),0,6.3);ctx.fill()});
   ctx.restore()});
  const[sx,sy]=sway(now);const ax=aim.x+sx,ay=aim.y+sy-kick;
  // tüfek (birinci şahıs)
  const bx=W*.6,by=H+46;const ang=Math.atan2(ay-by,ax-bx);const len=H*.5;const rx=bx-Math.cos(ang)*recoil*18,ry=by-Math.sin(ang)*recoil*18;
  ctx.save();ctx.translate(rx,ry);ctx.rotate(ang);
  let gg=ctx.createLinearGradient(0,-30,0,30);gg.addColorStop(0,'#4a4d44');gg.addColorStop(.45,'#23251f');gg.addColorStop(1,'#0c0d0b');
  ctx.fillStyle=gg;ctx.beginPath();ctx.moveTo(-10,-34);ctx.lineTo(len*.62,-15);ctx.lineTo(len*.62,15);ctx.lineTo(-10,34);ctx.closePath();ctx.fill();
  ctx.fillStyle='#34372f';ctx.fillRect(-6,-30,len*.66,6);for(let i=0;i<12;i++)ctx.fillRect(len*.04*i+4,-33+i*1.1,len*.022,5);
  ctx.fillStyle='#16171400';ctx.strokeStyle='#00000066';ctx.lineWidth=1;for(let i=1;i<5;i++){ctx.beginPath();ctx.moveTo(len*.12*i,-20+i*2);ctx.lineTo(len*.12*i,20-i*2);ctx.stroke()}
  gg=ctx.createLinearGradient(0,-7,0,7);gg.addColorStop(0,'#3a3c37');gg.addColorStop(1,'#0e0f0d');ctx.fillStyle=gg;ctx.fillRect(len*.62,-6,len*.33,12);
  ctx.fillStyle='#0b0b0a';ctx.fillRect(len*.92,-9,len*.08+4,18);for(let i=0;i<3;i++)ctx.fillRect(len*.935+i*5,-11,2.4,22);
  ctx.fillStyle='#0b0b0a';ctx.beginPath();ctx.moveTo(len*.84,-6);ctx.lineTo(len*.86,-26);ctx.lineTo(len*.885,-26);ctx.lineTo(len*.9,-6);ctx.fill();
  ctx.fillStyle='#3d3226';ctx.beginPath();ctx.ellipse(len*.34,22,len*.13,13,0,0,6.3);ctx.fill();ctx.fillStyle='#2c241b';ctx.beginPath();ctx.ellipse(len*.34,20,len*.11,7,0,0,6.3);ctx.fill();
  if(flash>0){ctx.fillStyle=`rgba(255,190,80,${flash})`;ctx.beginPath();ctx.moveTo(len+4,0);ctx.lineTo(len+48,-16);ctx.lineTo(len+30,0);ctx.lineTo(len+48,16);ctx.closePath();ctx.fill();ctx.fillStyle=`rgba(255,250,220,${flash})`;ctx.beginPath();ctx.arc(len+10,0,10,0,6.3);ctx.fill()}
  ctx.restore();
  // nişangâh
  ctx.strokeStyle=breath>0?'#7fe07a':'#ff5a3a';ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(ax,ay,13,0,6.3);ctx.moveTo(ax-22,ay);ctx.lineTo(ax-6,ay);ctx.moveTo(ax+6,ay);ctx.lineTo(ax+22,ay);ctx.moveTo(ax,ay-22);ctx.lineTo(ax,ay-6);ctx.moveTo(ax,ay+6);ctx.lineTo(ax,ay+22);ctx.stroke();ctx.fillStyle=ctx.strokeStyle;ctx.beginPath();ctx.arc(ax,ay,1.8,0,6.3);ctx.fill();
  ctx.restore();
  if(spawned>=10&&T.every(t=>t.state==='gone'))return mgEnd(clamp(total/80),`<p class="small">Toplam puan: <b>${total}</b> / 100</p>`);
  MG.raf=requestAnimationFrame(draw)}
 MG.raf=requestAnimationFrame(draw);mgT(spawn,700);
}

/* ---------- Harp oyunu (ülke haritası) ---------- */
function mgWar(){
 const k=S.nation,N=NAT[k],f=projFor(k);const cap=N.cities.find(c=>c[3])||N.cities[0];
 const diag=hav(f.inv(0,0),f.inv(f.W,f.H));
 const bats=N.bat.slice().sort(()=>R()-.5);
 const tasks=[{t:'res',th:pick(N.thr)},{t:'air',th:pick(N.thr)},{t:'his',b:bats[0]},{t:'his',b:bats[1]}].sort(()=>R()-.5);
 let i=0,sc=0,wait=false;
 const box=$('#mgb');
 function arrow(th){const[x,y]=f(th[2],th[1]);const cx=f.W/2,cy=f.H/2;const dx=x-cx,dy=y-cy,l=Math.hypot(dx,dy)||1;const sx=x+dx/l*46,sy=y+dy/l*46;
  return `<defs><marker id="ah" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#ff5a3a"/></marker></defs><path d="M${sx.toFixed(1)} ${sy.toFixed(1)} Q${((sx+x)/2+dy/l*10).toFixed(1)} ${((sy+y)/2-dx/l*10).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}" stroke="#ff5a3a" stroke-width="3" fill="none" marker-end="url(#ah)" stroke-dasharray="6 3"/><circle cx="${x}" cy="${y}" r="5" fill="none" stroke="#ff5a3a" stroke-width="1.5"/><text x="${(sx).toFixed(1)}" y="${(sy-6).toFixed(1)}" font-size="8" fill="#ff8a6a" font-weight="700" text-anchor="middle" font-family="Barlow Condensed,sans-serif" stroke="#000" stroke-width="2" paint-order="stroke">DÜŞMAN</text>`}
 function show(extra='',fb=''){const tk=tasks[i];let title,txt,ex=extra;
  if(tk.t==='res'){title='İhtiyat konuşlandırma';txt=`İstihbarat: düşman ${tk.th[0]} yönünden ana taarruza hazırlanıyor. Kolordu ihtiyatını hangi şehre kaydırırsın? Bir şehre dokun.`;ex=arrow(tk.th)+ex}
  if(tk.t==='air'){title='Hava savunma bataryası';txt=`Düşman füzeleri ${tk.th[0]} yönünden gelecek. Bataryayı stratejik merkez ${ek(cap[0],'i')} koruyacak noktaya yerleştir: haritaya dokun.`;ex=arrow(tk.th)+ex}
  if(tk.t==='his'){title='Harp tarihi';txt=`${tk.b[0]} (${tk.b[1]<0?'MÖ '+(-tk.b[1]):tk.b[1]}) nerede yapıldı? Haritada yerini işaretle.`}
  box.innerHTML=`<div class="mg-hud"><span>Görev <b>${i+1}</b>/4</span><span>Puan <b>${Math.round(sc*25)}</b>/100</span></div>
  <div class="brief"><span class="n">${i+1}</span><div><b>${title}</b><span class="small">${esc(txt)}</span></div></div>
  <div class="mapwrap" id="mw" style="touch-action:manipulation">${nationMap(k,f,ex)}</div>${fb}`;
  const svg=box.querySelector('svg.tmap');svg.style.cursor='crosshair';
  svg.addEventListener('click',e=>{if(wait)return;const pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;const p=pt.matrixTransform(svg.getScreenCTM().inverse());answer(p.x,p.y)});
 }
 function mk(x,y,c,l){return`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="none" stroke="${c}" stroke-width="2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="${c}"/>${l?`<text x="${(x+8).toFixed(1)}" y="${(y-7).toFixed(1)}" font-size="8" font-weight="700" fill="${c}" font-family="Barlow Condensed,sans-serif" stroke="#000" stroke-width="2" paint-order="stroke">${esc(l)}</text>`:''}`}
 function answer(x,y){const tk=tasks[i];const[lo,la]=f.inv(x,y);let s=0,ex='',msg='';
  if(tk.t==='res'){let near=null,nd=1e9;N.cities.forEach(c=>{const[cx,cy]=f(c[2],c[1]);const d=Math.hypot(cx-x,cy-y);if(d<nd){nd=d;near=c}});if(nd>26){toast('Bir şehrin üzerine dokun.');return}
   const order=N.cities.slice().sort((a,b)=>hav([a[2],a[1]],[tk.th[2],tk.th[1]])-hav([b[2],b[1]],[tk.th[2],tk.th[1]]));const r=order.indexOf(near);s=[1,.7,.45][r]??.15;
   const[bx,by]=f(order[0][2],order[0][1]),[nx,ny]=f(near[2],near[1]);ex=mk(nx,ny,'#ffffff','Senin seçimin')+(r?mk(bx,by,'#7fe07a','En uygun: '+order[0][0]):'');
   msg=r===0?`Doğru. ${near[0]}, tehdide en yakın lojistik merkez; ihtiyat en kısa sürede cepheye ulaşır.`:`${near[0]} tehdide ${Math.round(hav([near[2],near[1]],[tk.th[2],tk.th[1]]))} km uzakta. En uygun merkez ${order[0][0]} olurdu.`}
  if(tk.t==='air'){const tg=[cap[2]+(tk.th[2]-cap[2])*.35,cap[1]+(tk.th[1]-cap[1])*.35];const err=hav([lo,la],tg);s=clamp(1-err/(diag*.2),0,1);const[tx,ty]=f(tg[0],tg[1]);
   ex=mk(x,y,'#ffffff','Batarya')+mk(tx,ty,'#7fe07a','İdeal')+`<path d="M${f(cap[2],cap[1]).join(' ')} L${f(tk.th[2],tk.th[1]).join(' ')}" stroke="#7fe07a" stroke-dasharray="3 3" opacity=".6"/>`;
   msg=`Hata payı ${Math.round(err)} km. İdeal konum, başkent ile tehdit ekseni arasında, başkente yakın bir noktadır.`}
  if(tk.t==='his'){const tg=[tk.b[3],tk.b[2]];const err=hav([lo,la],tg);s=clamp(1-err/(diag*.16),0,1);const[tx,ty]=f(tg[0],tg[1]);ex=mk(x,y,'#ffffff','Senin işaretin')+mk(tx,ty,'#7fe07a',tk.b[0]);msg=`Hata payı ${Math.round(err)} km. ${tk.b[4]}`}
  sc+=s/4;wait=true;const grade=s>=.85?'Mükemmel':s>=.6?'İyi':s>=.35?'Orta':'Zayıf';
  show(ex,`<div class="brief"><span class="n" style="color:${s>=.6?'var(--green)':s>=.35?'var(--amber)':'var(--red)'}">${Math.round(s*100)}</span><div><b>${grade}</b><span class="small">${esc(msg)}</span></div></div><button class="btn block" id="nx">${i<3?'Sonraki görev':'Değerlendirmeyi gör'}</button>`);
  $('#nx').addEventListener('click',()=>{wait=false;i++;if(i>=4)return mgEnd(sc);show()})}
 show();
}

/* ---------- Topografik arazi okuma ---------- */
function mgNav(){
 const N=96;const seed=R()*1000;const hsh=(x,y)=>{const s=Math.sin(x*127.1+y*311.7+seed)*43758.5453;return s-Math.floor(s)};
 const noise=(x,y)=>{const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi;const u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);const a=hsh(xi,yi),b=hsh(xi+1,yi),c=hsh(xi,yi+1),d=hsh(xi+1,yi+1);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v};
 const Hm=new Float32Array(N*N);let mx=0,mn=9;const rv=R()*6.28;
 for(let y=0;y<N;y++)for(let x=0;x<N;x++){let h=0,a=1,fq=1/24,sum=0;for(let o=0;o<5;o++){h+=noise(x*fq,y*fq)*a;sum+=a;a*=.5;fq*=2}h/=sum;
  const rx=(x/N-.5)*Math.cos(rv)+(y/N-.5)*Math.sin(rv),ry=-(x/N-.5)*Math.sin(rv)+(y/N-.5)*Math.cos(rv);const river=Math.abs(ry-Math.sin(rx*7)*.08);h-=Math.max(0,.07-river)*2.2;
  Hm[y*N+x]=h;mx=Math.max(mx,h);mn=Math.min(mn,h)}
 for(let i=0;i<N*N;i++)Hm[i]=(Hm[i]-mn)/(mx-mn);
 const WL=.18;const hAt=(u,v)=>{const x=clamp(u*(N-1),0,N-1),y=clamp(v*(N-1),0,N-1);const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi;const g=(a,b)=>Hm[Math.min(N-1,b)*N+Math.min(N-1,a)];return g(xi,yi)*(1-xf)*(1-yf)+g(xi+1,yi)*xf*(1-yf)+g(xi,yi+1)*(1-xf)*yf+g(xi+1,yi+1)*xf*yf};
 const elev=h=>Math.round(320+h*1480);
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Görev <b id="mi">1</b>/4</span><span>Puan <b id="mp">0</b>/100</span></div><div class="brief"><span class="n" id="bn">1</span><div><b id="bt"></b><span class="small" id="bx"></span></div></div><canvas class="mg-canvas" id="cv"></canvas><div id="fb"></div>`;
 const cv=$('#cv'),ctx=cv.getContext('2d');const W=cv.clientWidth,Hh=W;cv.style.height=Hh+'px';const dpr=Math.min(2,devicePixelRatio||1);const RES=Math.min(360,Math.round(W));
 const off=document.createElement('canvas');off.width=RES;off.height=RES;const oc=off.getContext('2d');const img=oc.createImageData(RES,RES);
 const pal=[[0,[86,120,70]],[.3,[110,138,78]],[.5,[150,145,92]],[.7,[150,118,80]],[.88,[180,160,140]],[1,[232,228,220]]];
 const col=h=>{for(let i=1;i<pal.length;i++)if(h<=pal[i][0]){const[a,ca]=pal[i-1],[b,cb]=pal[i];const t=(h-a)/(b-a);return ca.map((c,j)=>c+(cb[j]-c)*t)}return pal[pal.length-1][1]};
 const H2=new Float32Array(RES*RES);for(let y=0;y<RES;y++)for(let x=0;x<RES;x++)H2[y*RES+x]=hAt(x/(RES-1),y/(RES-1));
 for(let y=0;y<RES;y++)for(let x=0;x<RES;x++){const i=y*RES+x,h=H2[i];let c;
  if(h<WL){const t=h/WL;c=[50+t*30,95+t*30,140+t*20]}else{c=col((h-WL)/(1-WL));const dx=H2[i+(x<RES-1?1:0)]-H2[i-(x>0?1:0)],dy=H2[i+(y<RES-1?RES:0)]-H2[i-(y>0?RES:0)];const sh=clamp(1+(-dx-dy)*14,.55,1.35,);c=c.map(v=>v*sh)}
  const lv=Math.floor(h*24),lr=x<RES-1?Math.floor(H2[i+1]*24):lv,lb=y<RES-1?Math.floor(H2[i+RES]*24):lv;if(h>=WL&&(lv!==lr||lv!==lb)){const idx=lv%5===0;c=c.map(v=>v*(idx?.45:.68))}
  img.data[i*4]=c[0];img.data[i*4+1]=c[1];img.data[i*4+2]=c[2];img.data[i*4+3]=255}
 oc.putImageData(img,0,0);
 cv.width=W*dpr;cv.height=Hh*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
 const e0=30+Math.floor(R()*50),n0=10+Math.floor(R()*50);const KM=W/10;
 const toKm=(x,y)=>[x/KM,(Hh-y)/KM];
 function base(){ctx.imageSmoothingEnabled=true;ctx.drawImage(off,0,0,W,Hh);ctx.strokeStyle='#00000055';ctx.lineWidth=1;ctx.font='600 9px Barlow Condensed,sans-serif';ctx.fillStyle='#111';
  for(let i=0;i<=10;i++){ctx.beginPath();ctx.moveTo(i*KM,0);ctx.lineTo(i*KM,Hh);ctx.moveTo(0,i*KM);ctx.lineTo(W,i*KM);ctx.stroke()}
  ctx.fillStyle='rgba(255,255,255,.85)';for(let i=0;i<10;i++){ctx.fillText(String(e0+i).padStart(2,'0'),i*KM+2,9);ctx.fillText(String(n0+9-i).padStart(2,'0'),2,i*KM+KM-3)}
  ctx.save();ctx.translate(W-22,26);ctx.fillStyle='#000a';ctx.beginPath();ctx.arc(0,0,14,0,6.3);ctx.fill();ctx.fillStyle=getAcc();ctx.beginPath();ctx.moveTo(0,-11);ctx.lineTo(4,2);ctx.lineTo(0,-1);ctx.lineTo(-4,2);ctx.fill();ctx.fillStyle='#fff';ctx.fillText('K',-3,-13+0);ctx.restore();
  ctx.fillStyle='#000a';ctx.fillRect(W-86,Hh-20,80,15);ctx.fillStyle='#fff';ctx.fillText('1:50.000 · 1 kare = 1 km',W-83,Hh-9)}
 let peak=[0,0,0];for(let y=0;y<RES;y+=2)for(let x=0;x<RES;x+=2){const h=H2[y*RES+x];if(h>peak[2])peak=[x/(RES-1)*W,y/(RES-1)*Hh,h]}
 const hs=[];for(let y=0;y<RES;y+=3)for(let x=0;x<RES;x+=3)hs.push(H2[y*RES+x]);hs.sort((a,b)=>a-b);const hmed=hs[hs.length>>1];
 const pickPt=()=>[KM*(2+R()*6),KM*(2+R()*6)];
 const tasks=[];
 {const gx=Math.floor(R()*10),gy=Math.floor(R()*10);tasks.push({t:'grid',gx,gy,ti:'Grid koordinatı',tx:`Paftada ${String(e0+gx).padStart(2,'0')} ${String(n0+9-gy).padStart(2,'0')} karesini işaretle (önce sağa doğu, sonra yukarı kuzey).`})}
 tasks.push({t:'peak',ti:'Hâkim tepe',tx:'Gözetleme noktası kurulacak. Bölgedeki en yüksek tepeyi işaretle (koyu eş yükselti eğrileri 100 m aralıklı).'});
 {const A=pickPt();const az=15*Math.floor(R()*24);const dk=2+Math.floor(R()*3);const tx=A[0]+Math.sin(az*Math.PI/180)*dk*KM,ty=A[1]-Math.cos(az*Math.PI/180)*dk*KM;const B=[clamp(tx,KM*.5,W-KM*.5),clamp(ty,KM*.5,Hh-KM*.5)];
  tasks.push({t:'az',A,B,ti:'Azimut ile ilerleme',tx:`A noktasından ${String(az).padStart(3,'0')}° azimutla ${dk} km ilerle. Varış noktasını işaretle.`})}
 {const A=pickPt();let best=null,bd=1e9;for(let y=0;y<RES;y+=2)for(let x=0;x<RES;x+=2)if(H2[y*RES+x]<WL){const px=x/(RES-1)*W,py=y/(RES-1)*Hh;const d=Math.hypot(px-A[0],py-A[1]);if(d<bd){bd=d;best=[px,py]}}
  tasks.push({t:'water',A,B:best||[W/2,Hh/2],ti:'Su kaynağı',tx:'Timin suyu bitti. A noktasına en yakın su kaynağını (mavi alan) işaretle.'})}
 let i=0,sc=0,wait=false;
 function mark(x,y,c,l){ctx.strokeStyle=c;ctx.lineWidth=2.2;ctx.beginPath();ctx.arc(x,y,7,0,6.3);ctx.stroke();ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y,2.4,0,6.3);ctx.fill();if(l){ctx.font='700 11px Barlow Condensed,sans-serif';ctx.lineWidth=3;ctx.strokeStyle='#000';ctx.strokeText(l,x+9,y-8);ctx.fillText(l,x+9,y-8)}}
 function show(){const tk=tasks[i];$('#mi').textContent=i+1;$('#bn').textContent=i+1;$('#bt').textContent=tk.ti;$('#bx').textContent=tk.tx;$('#fb').innerHTML='';base();if(tk.A)mark(tk.A[0],tk.A[1],'#ffffff','A')}
 cv.addEventListener('click',e=>{if(wait||!MG||MG.done)return;const r=cv.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;const tk=tasks[i];let s=0,msg='';base();
  if(tk.A)mark(tk.A[0],tk.A[1],'#ffffff','A');
  if(tk.t==='grid'){const cx=Math.floor(x/KM),cy=Math.floor(y/KM);const d=Math.hypot(cx-tk.gx,cy-tk.gy);s=d===0?1:clamp(1-d/3.5);ctx.strokeStyle='#7fe07a';ctx.lineWidth=3;ctx.strokeRect(tk.gx*KM,tk.gy*KM,KM,KM);mark(x,y,'#ffd23a','Sen');msg=d===0?'Tam isabet.':`Hedef karenin ${d.toFixed(1)} kare uzağına işaretledin.`}
  if(tk.t==='peak'){const h=hAt(x/W,y/Hh);s=clamp((h-hmed)/(peak[2]-hmed));mark(peak[0],peak[1],'#7fe07a','Zirve '+elev(peak[2])+' m');mark(x,y,'#ffd23a',elev(h)+' m');msg=`İşaretlediğin nokta ${elev(h)} m, zirve ${elev(peak[2])} m.`}
  if(tk.t==='az'||tk.t==='water'){const err=Math.hypot(x-tk.B[0],y-tk.B[1])/KM;s=clamp(1-err/(tk.t==='az'?1.6:1.3));ctx.setLineDash([5,4]);ctx.strokeStyle='#7fe07a';ctx.beginPath();ctx.moveTo(tk.A[0],tk.A[1]);ctx.lineTo(tk.B[0],tk.B[1]);ctx.stroke();ctx.setLineDash([]);mark(tk.B[0],tk.B[1],'#7fe07a',tk.t==='az'?'Varış':'Su');mark(x,y,'#ffd23a','Sen');msg=`Hata ${err.toFixed(2).replace('.',',')} km.`}
  sc+=s/4;$('#mp').textContent=Math.round(sc*100);wait=true;
  $('#fb').innerHTML=`<div class="brief" style="margin-top:10px"><span class="n" style="color:${s>=.6?'var(--green)':s>=.35?'var(--amber)':'var(--red)'}">${Math.round(s*100)}</span><div><b>${s>=.85?'Mükemmel':s>=.6?'İyi':s>=.35?'Orta':'Zayıf'}</b><span class="small">${esc(msg)}</span></div></div><button class="btn block" id="nx" style="margin-top:10px">${i<3?'Sonraki görev':'Değerlendirmeyi gör'}</button>`;
  $('#nx').addEventListener('click',()=>{wait=false;i++;if(i>=4)return mgEnd(sc);show()})});
 show();
}

/* ---------- Tim liderliği ---------- */
const LEADS=[
 {tx:'{n} nöbette uyurken yakalandı. Tim ne yapacağını izliyor.',o:[['Tek başına çağır, ciddi uyar, nöbet listesini düzenle ve raporla',{t:-5,c:10},'Haklısınız komutanım. Bir daha olmayacak.'],['Herkesin önünde bağırarak aşağıla',{t:-25,c:-10},'…'],['Görmezden gel, arkadaşlık bozulmasın',{t:5,c:-14},'Bu adaletsizlik.']]},
 {tx:'{n} ailesinden kötü haber aldı, içine kapandı.',o:[['Yanına otur, dinle, izin ve destek için girişimde bulun',{t:25,c:8},'Sağ olun komutanım.'],['Görev bitince konuşuruz de',{t:-10,c:0},'Anladım.'],['Daha çok iş ver, kafası dağılsın',{t:-15,c:-4},'…']]},
 {tx:'{n} ile {m} yemek kuyruğunda kavga etti.',o:[['İkisini ayır, ayrı ayrı dinle, birlikte bir görev ver',{t:6,m:6,c:15},'Tamam, anlaştık.'],['İkisine de ceza ver, konuyu kapat',{t:-8,m:-8,c:3},'Emredersiniz.'],['Haklı olanı herkesin önünde destekle',{t:12,m:-20,c:-10},'Taraf tuttunuz.']]},
 {tx:'Görev öncesi brifing: plan karmaşık, tim tedirgin.',o:[['Planı sadeleştir, herkese görevini tek tek tekrarlat',{a:6,c:14},'Şimdi net.'],['"Soru yok, emre uyun" de',{a:-6,c:-2},'…'],['Emin olmasan da özgüvenli görün, geç',{a:0,c:-6},'Bir şeyler eksik gibi.']]},
 {tx:'Yeni katılan {n} çatışma tatbikatında donup kaldı.',o:[['Deneyimli bir askerle eşleştir, kademeli zorlaştır',{t:20,c:6},'Bir daha deneyeceğim.'],['Herkesin önünde korkak de',{t:-25,c:-6},'…'],['Cephe gerisi görevlere al',{t:-6,c:0},'Demek ki işe yaramıyorum.']]},
 {tx:'Tim üç gündür uykusuz. Bir emir daha geldi.',o:[['Rotasyon kur: yarısı 2 saat uyusun, nöbeti sen tut',{a:12,c:10},'Komutanımız bizimle.'],['Herkes devam etsin',{a:-12,c:-4},'Ayakta uyuyoruz.'],['Emri reddet, tim dinlensin',{a:8,c:4,tr:-5},'Başın derde girecek.']]},
 {tx:'{n} çok başarılı bir atışla görevi kurtardı.',o:[['Herkesin önünde takdir et, raporuna yaz',{t:15,c:6},'Teşekkürler komutanım!'],['"Sadece işini yaptı" de',{t:-8,c:-2},'Peki.'],['Övgüyü kendine mal et',{t:-20,c:-15},'Bunu unutmayacağım.']]},
 {tx:'Tim deposundan ekipman kayboldu. Kimin olduğu belli değil.',o:[['Timle açık konuş, sorumluluğu tim olarak al, sayım sistemi kur',{a:4,c:12},'Doğru olan bu.'],['Herkesin dolabını ara',{a:-8,c:-10},'Güvenmiyor bize.'],['En zayıf askere yükle',{t:-25,c:-15},'Ben almadım!']]},
];
function mgLead(){
 const nm=SQN[S.nation]||SQN.TR;const names=nm.slice().sort(()=>R()-.5).slice(0,4);
 const sq=names.map((n,i)=>({n,m:52+Math.round(R()*20),look:{g:R()<.2?'k':'e',skin:Math.floor(R()*5),hs:pick(['asker','kisa','kel']),hc:Math.floor(R()*4),beard:pick(['yok','yok','kirli','biyik']),eye:Math.floor(R()*4),boy:175,kilo:70+Math.round(R()*20),hat:true}}));
 sq.forEach(s=>{if(s.look.g==='k'){s.look.hs='topuz';s.look.beard='yok'}});
 let coh=50,i=0;const sit=LEADS.slice().sort(()=>R()-.5).slice(0,4);const lb=.8+S.st.lider/250;let bub={};
 const box=$('#mgb');const br=B();
 function draw(cur,fb=''){box.innerHTML=`<div class="mg-hud"><span>Durum <b>${Math.min(i+1,4)}</b>/4</span><span>Tim bütünlüğü <b>${Math.round(coh)}</b></span></div>
  <div class="card" style="padding:12px"><div class="squad">${sq.map((s,j)=>`<div class="sq ${cur&&(cur.t===j||cur.m===j)?'tgt':''}">${bub[j]?`<span class="bubble">${esc(bub[j])}</span>`:''}${avatar(80,br,Math.max(0,S.rank-3),s.look,S.nation,s.n)}<b>${esc(s.n)}</b><div class="mb"><i style="width:${s.m}%;background:${s.m<35?'var(--red)':s.m<60?'var(--amber)':'var(--green)'}"></i></div></div>`).join('')}</div>
  <div class="bar" style="margin-top:4px"><span>Tim bütünlüğü</span><div class="t"><i style="width:${coh}%"></i></div><span class="v">${Math.round(coh)}</span></div></div>${fb}`}
 function ask(){if(i>=4){const avg=sq.reduce((a,s)=>a+s.m,0)/4;return mgEnd(clamp((avg*.5+coh*.5-35)/50),`<p class="small">Ortalama moral ${Math.round(avg)} · Tim bütünlüğü ${Math.round(coh)}</p>`)}
  const s=sit[i];const t=Math.floor(R()*4);let m=(t+1+Math.floor(R()*3))%4;const cur={t,m};const tx=s.tx.replace('{n}',sq[t].n).replace('{m}',sq[m].n);
  const opts=s.o.map((o,k)=>[o,k]).sort(()=>R()-.5);bub={};
  draw(cur,`<div class="brief"><span class="n">${i+1}</span><div><b>Durum</b><span class="small">${esc(tx)}</span></div></div>${opts.map(([o,k])=>`<button class="opt" data-k="${k}"><span class="k">${'ABC'[opts.findIndex(x=>x[1]===k)]}</span><span class="grow">${esc(o[0])}</span></button>`).join('')}`);
  box.querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>{const o=s.o[+b.dataset.k];const e=o[1];const pos=v=>v>0?v*lb:v;
   if(e.t!=null){sq[t].m=clamp(sq[t].m+pos(e.t));bub[t]=o[2]}if(e.m!=null)sq[m].m=clamp(sq[m].m+pos(e.m));if(e.a)sq.forEach(q=>q.m=clamp(q.m+pos(e.a)));if(e.a&&e.t==null)bub[Math.floor(R()*4)]=o[2];
   coh=clamp(coh+pos(e.c||0));if(e.tr)S.trust=clamp(S.trust+e.tr);
   const good=(e.c||0)>=8;i++;draw(cur,`<div class="brief"><span class="n" style="color:${good?'var(--green)':(e.c||0)<0?'var(--red)':'var(--amber)'}">${(e.c||0)>0?'+':''}${Math.round(pos(e.c||0))}</span><div><b>${good?'İyi liderlik':(e.c||0)<0?'Tim güveni sarsıldı':'İdare eder'}</b><span class="small">${esc(o[0])}</span></div></div><button class="btn block" id="nx">${i<4?'Sonraki durum':'Değerlendirmeyi gör'}</button>`);
   $('#nx').addEventListener('click',ask)}))}
 ask();
}
