/* =====================================================================
   v10 · bağlantılı gün akışı, gelişim seviyesi, rütbeyle açılan
   haber yanıtları, sinematik harekât ve taktik ekran
   ===================================================================== */
AUTH[0][1]='Haberlere resmî yanıt · diplomatik mektup';
const NEWSR=10;

/* ---------- Gelişim seviyesi ---------- */
const lvNeed=l=>Math.round(100*(1+l*.35));
function addGP(n){if(!S)return;S.gp=(S.gp||0)+n;S.lvl=S.lvl||1;let up=0;while(S.gp>=lvNeed(S.lvl)){S.gp-=lvNeed(S.lvl);S.lvl++;up++;['dovus','guc','dayan','nisan','strat','lider','disiplin'].sort((a,b)=>S.st[a]-S.st[b]).slice(0,4).forEach(k=>addSt(k,1.5));addSt('mental',2);addSt('saglik',3)}
 if(up){log('Asker seviyesi '+S.lvl+'.');setTimeout(()=>toast(`SEVİYE ${S.lvl} · En zayıf dört yeteneğin +1,5 arttı, sağlığın +3. Bedenin ve zihnin güçleniyor.`),400)}}

/* ---------- Terfi ilerlemesi ---------- */
function promoPct(){if(S.rank>=18)return[100,null];const L=reqs();let s=0;L.forEach(([n,v,ok,k])=>{if(ok){s+=1;return}const r=RANKS[S.rank];const f=k==='xp'?S.xp/r.xp:k==='d'?S.dIR/r.d:k==='tr'?S.trust/r.tr:k==='wins'?S.wins/(r.rq.wins||1):S.st[k]/(r.rq[k]||1);s+=clamp(f*100,0,99)/100});const miss=L.find(x=>!x[2]);return[Math.round(s/L.length*100),miss]}

/* ---------- Gün akışı (her şey birbirine bağlı) ---------- */
function dayBonus(){return Math.min(2,S.trainT||0)*.025+((S.kh||50)>65?.02:0)+(['k','o'].every(k=>S.meals[k]!=null)?.02:0)}
function flowCard(){const izin=S.izin;const kog=Object.values(S.kd||{}).includes(S.day)||String(S.unitD||'').startsWith(String(S.day));
 const st=izin?[
  ['Kahvaltı',S.meals.k!=null,'Güne enerjiyle başla.','life','food'],
  ['Şehre çık',Object.values(S.outDone||{}).includes(S.day)||Object.values(S.eat||{}).includes(S.day),'Etkinlik, yemek, yeni insanlar.','life','social'],
  ['Sevdiklerin',S.msg||(S.partner&&S.partner.last===S.day)||(S.friends||[]).some(f=>f.last===S.day),'Bir mesaj bile bağları korur.','life',S.partner?'love':'social'],
  ['Günü bitir',false,'Yarın göreve dönüş.','end']]
 :[
  ['Sabah: kahvaltı',S.meals.k!=null,'İyi beslenme harekâtta +%2.','life','food'],
  ['Eğitim',S.trainT>0,'Her seans harekâtta +%2,5 (en çok 2).','train'],
  ['Harekât',!!S.mDone,S.op?esc(OPS.find(x=>x.id===S.op.id).ti)+' · '+esc(S.op.city[0]):'Günlük görev','mission'],
  ['Akşam: birlik ve koğuş',kog,'Bağlar ve moral harekâtı destekler.','life','kogus'],
  ['Günü bitir',false,'Gece raporu ve yeni gün.','end']];
 const cur=st.findIndex(x=>!x[1]);const[pp,miss]=promoPct();const nr=S.rank<18?rankName(S.rank+1,S.nation,B().rs):null;
 return `${nr?rankCard():''}<div class="card hero flow"><div class="sec-h"><h2>${izin?'İzin günü':'Günün akışı'}</h2><span class="small muted">${S.ap} eylem hakkı</span></div>
 <div class="fl">${st.map((x,i)=>`<button class="fs ${x[1]?'ok':i===cur?'now':''}" ${x[3]==='end'?'data-a="endDay"':x[4]?`data-a="goto" data-v="${x[3]}" onclick="UI.life='${x[4]}';UI.lifeLock=1;setTimeout(()=>UI.lifeLock=0)"`:`data-a="tab" data-v="${x[3]}"`}><i>${x[1]?'✓':i+1}</i><span><b>${x[0]}</b><small>${x[2]}</small></span>${i===cur?'<em>Sıradaki ›</em>':''}</button>`).join('')}</div>
 ${!izin?`<div class="chips2"><span>Bugünkü harekât bonusun</span><b class="green">+%${Math.round(dayBonus()*100)}</b></div>`:''}
 
 <div class="promo"><div class="row" style="justify-content:space-between"><span class="lbl">Asker seviyesi ${S.lvl||1}</span><span class="small muted">${S.gp||0} / ${lvNeed(S.lvl||1)}</span></div><div class="pb lv"><i style="width:${clamp((S.gp||0)/lvNeed(S.lvl||1)*100)}%"></i></div><span class="small muted">Antrenman, harekât ve birlik işleri seni geliştirir. Her seviyede en zayıf dört yeteneğin +1,5 artar.</span></div></div>`}

/* ---------- Haber yanıtı: rütbeyle açılır ---------- */
function govAuto(){const me=S.nation;(S.world.feed||[]).forEach(f=>{if(!f.r||f.done||S.day-f.d<1)return;const O=respOpts(f);if(!O.length)return;let bi=0,bs=-99;O.forEach((o,i)=>{const e=o[1];const s=(e.rel||0)*.6+(e.trust||0)*2-Math.abs(e.rel||0)*.2;if(s>bs){bs=s;bi=i}});const e=O[bi][1];if(e.rel)setRel(me,f.r.x,rel(me,f.r.x)+e.rel);f.done=O[bi][0];f.gov=1})}
function respond(v){if(S.rank<NEWSR)return toast('Ülke adına yanıt vermek için Yüzbaşı rütbesi gerekir.');const[id,i]=v.split('|');const it=(S.world.feed||[]).find(f=>f.id===id);if(!it||it.done||!it.r)return;const o=respOpts(it)[+i];if(!o)return;respApply(it,o[0],o[1])}

/* ---------- Taktik ekran ---------- */
function tacMap(o,def){const g=o.g||'kara',night=def.sc==='gece';const W=340,H=190;const p=t=>{const x=26+t*(W-70),y=H-30-Math.sin(t*Math.PI*.9)*40-t*(H-90);return[x,y]};
 const done=Math.min(o.st,6)/6;const[ux,uy]=p(done);const[ox,oy]=p(1);const last=(o.logs||[])[o.logs.length-1];
 const bg=g==='deniz'?'#0b1a2c':g==='hava'?'#0b1218':'#121710';let ter='';const rr=rng(o.code.length*97+o.km);
 if(g==='deniz'){ter=`<path d="M0 ${H*.25} Q60 ${H*.18} 110 ${H*.3} T230 ${H*.2} T${W} ${H*.28} L${W} 0 L0 0Z" fill="#26301f"/>`+[...Array(6)].map((_,i)=>`<path d="M0 ${60+i*22} Q90 ${50+i*22} 170 ${64+i*22} T${W} ${58+i*22}" fill="none" stroke="#2c5a86" stroke-opacity=".25"/>`).join('')}
 else if(g==='hava'){ter=[1,2,3,4].map(i=>`<circle cx="${ox}" cy="${oy}" r="${i*38}" fill="none" stroke="#3fae7a" stroke-opacity=".18"/>`).join('')+`<path d="M${ox} ${oy} L${ox+150} ${oy}" stroke="#3fae7a" stroke-opacity=".5" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 ${ox} ${oy}" to="360 ${ox} ${oy}" dur="4s" repeatCount="indefinite"/></path>`}
 else{ter=[...Array(7)].map((_,i)=>{const cx=rr()*W,cy=rr()*H,r=20+rr()*40;return[0,1,2].map(k=>`<ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" rx="${(r+k*14).toFixed(0)}" ry="${(r*.6+k*9).toFixed(0)}" fill="none" stroke="#7b8a5a" stroke-opacity="${.22-k*.05}"/>`).join('')}).join('')+`<path d="M0 ${H*.7} C80 ${H*.55} 120 ${H*.95} 210 ${H*.75} S${W} ${H*.6} ${W} ${H*.65}" fill="none" stroke="#3d6d8f" stroke-width="5" stroke-opacity=".5"/>`}
 const path=[...Array(25)].map((_,i)=>p(i/24));const pd=a=>a.map((q,i)=>(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)).join(' ');const cut=Math.round(done*24);
 const en=o.st>=2?Math.max(1,Math.min(5,Math.round((o.intel&&o.intel.en||12)/((o.intel&&o.intel.own)||12)*3))):0;const kill=Math.round(en*clamp((o.mom-40)/60,0,1));
 const enemies=[...Array(en)].map((_,i)=>{const a=i/en*Math.PI*1.4+.6,ex=ox-20+Math.cos(a)*34,ey=oy+18+Math.sin(a)*22;const dead=i<kill;return`<g transform="translate(${ex.toFixed(1)} ${ey.toFixed(1)})" opacity="${dead?.45:1}"><path d="M0 -7 L7 0 L0 7 L-7 0Z" fill="#c8402e" stroke="#ffb0a0" stroke-width=".8"/>${dead?'<path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="#fff" stroke-width="1.5"/>':''}</g>`}).join('');
 let fire='';if(last&&o.st>=2&&!S.mDone){const tgt=[ox-20,oy+18];const n=last.k==='g'?3:last.k==='b'?4:2;for(let i=0;i<n;i++){const fr=last.k==='b'?[tgt[0]+(rr()-.5)*30,tgt[1]+(rr()-.5)*20]:[ux,uy],to=last.k==='b'?[ux+(rr()-.5)*10,uy+(rr()-.5)*10]:[tgt[0]+(rr()-.5)*30,tgt[1]+(rr()-.5)*20];fire+=`<line x1="${fr[0].toFixed(1)}" y1="${fr[1].toFixed(1)}" x2="${to[0].toFixed(1)}" y2="${to[1].toFixed(1)}" stroke="${last.k==='b'?'#ff6a3a':'#9cff7a'}" stroke-width="1.6" stroke-dasharray="6 40" class="tracer" style="animation-delay:${(i*.25).toFixed(2)}s"/>`}}
 const sym=g==='deniz'?'<path d="M-9 -2 L9 -2 L6 5 L-6 5Z" fill="none" stroke="#fff" stroke-width="1.4"/>':g==='hava'?'<path d="M-8 3 Q0 -8 8 3" fill="none" stroke="#fff" stroke-width="1.4"/>':'<path d="M-9 -6 L9 6 M9 -6 L-9 6" stroke="#fff" stroke-width="1.3"/>';
 return `<div class="tac ${night?'nvg':''}"><svg viewBox="0 0 ${W} ${H}" aria-hidden="true"><rect width="${W}" height="${H}" fill="${bg}"/>${ter}
 <defs><pattern id="tg" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#ffffff" stroke-opacity=".06"/></pattern></defs><rect width="${W}" height="${H}" fill="url(#tg)"/>
 <path d="${pd(path.slice(cut))}" fill="none" stroke="#ffffff" stroke-opacity=".45" stroke-width="1.6" stroke-dasharray="4 5"/><path d="${pd(path.slice(0,cut+1))}" fill="none" stroke="var(--acc)" stroke-width="2.6"/>
 ${[1,2,3,4,5].map(i=>{const[x,y]=p(i/6);return`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${i<=o.st?'var(--acc)':'#ffffff55'}"/>`}).join('')}
 <g transform="translate(${ox.toFixed(1)} ${oy.toFixed(1)})"><circle r="16" fill="none" stroke="#ff5a3a" stroke-width="1.4"><animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite"/></circle><path d="M0 -8 L8 0 L0 8 L-8 0Z" fill="none" stroke="#ff5a3a" stroke-width="2"/><text y="-14" text-anchor="middle" font-family="Oswald,Arial Narrow,sans-serif" font-size="9" letter-spacing="1.5" fill="#ffb0a0">HEDEF</text></g>
 ${enemies}${fire}
 <g transform="translate(${ux.toFixed(1)} ${uy.toFixed(1)})"><circle r="15" fill="var(--acc)" fill-opacity=".18"><animate attributeName="r" values="12;18;12" dur="1.6s" repeatCount="indefinite"/></circle><rect x="-11" y="-8" width="22" height="16" rx="2" fill="#2f6fd0" stroke="#fff" stroke-width="1.4"/>${sym}<text y="22" text-anchor="middle" font-family="Oswald,Arial Narrow,sans-serif" font-size="8.5" letter-spacing="1" fill="#fff">${esc((S.tim?S.tim.name:'').toLocaleUpperCase('tr'))}</text></g>
 <text x="10" y="16" font-family="Oswald,Arial Narrow,sans-serif" font-size="10" letter-spacing="2" fill="#ffffffaa">TAKTİK EKRAN · ${esc(o.code)}</text><text x="${W-10}" y="16" text-anchor="end" font-family="Oswald,Arial Narrow,sans-serif" font-size="10" letter-spacing="1" fill="#ffffffaa">${clk8(o.clk)}</text>
 <text x="${W-10}" y="${H-10}" text-anchor="end" font-family="Oswald,Arial Narrow,sans-serif" font-size="9" letter-spacing="1.5" fill="#ffffff88">${S.mDone?'HAREKÂT SONA ERDİ':stepLabel(o,Math.min(o.st,5)).toLocaleUpperCase('tr')}</text></svg><div class="scan"></div></div>`}
function prepChips(o){const L=[['Eğitim',Math.min(2,S.trainT||0)*2.5],['Beslenme',['k','o'].every(k=>S.meals[k]!=null)?2:0],['Koğuş havası',(S.kh||50)>65?2:0],['Birlik hazırlığı',Math.round(timBonus()*100)],['Silah',Math.round(wBonus()*100)],['Yorgunluk',-Math.round(S.fatigue/3.5)],['Ruh hali',Math.round((S.st.mental-50)/2.5)]];
 return `<div class="pchips"><span class="lbl">Bugünkü hazırlığın</span><div>${L.map(([n,v])=>`<em class="${v>0?'p':v<0?'n':''}">${n} ${v>0?'+':''}${v}%</em>`).join('')}</div></div>`}

/* ---------- Sinematik katmanlar ---------- */
function opIntro(){const o=S.op;if(!o)return;const def=OPS.find(x=>x.id===o.id);fxPush(done=>{const el=fxLayer(`<div class="opin"><div class="oi-scan"></div><div class="oi-c"><div class="lbl">${esc(NAT[S.nation].n)} · ${esc(uName())}</div><div class="oi-code">HAREKÂT<br><b>${esc(o.code)}</b></div><div class="oi-ti">${esc(def.ti)} · ${esc(o.city[0])}</div><div class="oi-cd" id="oicd">3</div><div class="small" style="opacity:.75">${S.wx?esc(S.wx.i+' '+S.wx.n+' · '+S.wx.t+'°'):''} · ${esc(PKG.find(p=>p[0]===o.prep.p)[1])}</div></div></div>`,'');
 let n=3;const iv=setInterval(()=>{n--;const c=el.querySelector('#oicd');if(c){c.textContent=n>0?n:'İLERLE!';c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop')}if(n<=0){clearInterval(iv);setTimeout(()=>fxClose(done),700)}},800);el.addEventListener('click',()=>{clearInterval(iv);fxClose(done)},{once:true})})}
function opBeat(l,label){fxPush(done=>{const col=l.k==='g'?'g':l.k==='m'?'m':'b';const head={g:'✓ EMİR İCRA EDİLDİ',m:'⚠ İCRA AKSADI',b:'✕ AĞIR DARBE'}[col];const el=fxLayer(`<div class="beat ${col}"><div class="bt-band"><span>${esc(label)}</span><b>${head}</b></div><div class="bt-radio"><span class="tm">${l.c} · ${esc(l.w)}</span><p>${esc(l.t)}</p>${l.d?`<div class="dl">${l.d.hp?`<em class="${l.d.hp<0?'n':'p'}">Kuvvet ${l.d.hp}</em>`:''}${l.d.mom?`<em class="${l.d.mom<0?'n':'p'}">İnisiyatif ${l.d.mom>0?'+':''}${l.d.mom}</em>`:''}${l.d.giz?`<em class="${l.d.giz<0?'n':'p'}">Gizlilik ${l.d.giz>0?'+':''}${l.d.giz}</em>`:''}</div>`:''}</div><div class="bt-tap">Devam etmek için dokun</div></div>`,'');
 const t=setTimeout(()=>fxClose(done),3400*Math.min(1.4,MGF()/1.7));el.addEventListener('click',()=>{clearTimeout(t);fxClose(done)},{once:true})})}
function opPrep(v){const[p,s]=v.split('|');const o=S.op;if(!o||o.prep)return;if(p){o.pkgSel=p}if(s){o.supSel=s}if(o.pkgSel&&o.supSel){if(!useAP())return;o.prep={p:o.pkgSel,s:o.supSel};opIntro()}save();render()}

/* ---------- Giriş ekranı: ülke seçilmeden bayrak yok ---------- */
const NEUTRAL_CAMO=['#4f5536','#353a25','#6b6748','#25281b'];
function camoBg(){const app=$('#app');if(!app)return;const pre=['title','story','create','ledger','howto','settings'].includes(UI.scr);app.classList.toggle('camo',pre);if(!pre)return;
 const sv=loadSave();let nat=null;if((UI.scr==='create'||UI.scr==='story')&&UI.d&&UI.d.nation&&UI.scr==='create')nat=UI.d.nation;else if(UI.scr==='ledger'||UI.scr==='howto'||UI.scr==='settings'){nat=sv?sv.nation:null}
 app.style.setProperty('--camo',nat&&NAT[nat]?camoSVG(NAT[nat].camo,NAT[nat].dig,nat.charCodeAt(0)*31+nat.charCodeAt(1)):camoSVG(NEUTRAL_CAMO,0,11))}
const _vTitle9=vTitle;
function vTitleX(){const sv=loadSave();let h=_vTitle9();h=h.replace(/<div class="tpatch">[\s\S]*?<\/div>/,`<div class="tpatch star"><svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true"><path d="M20 4 L24.5 15 L36 15.5 L27 23 L30 35 L20 28.5 L10 35 L13 23 L4 15.5 L15.5 15Z" fill="#d6c793"/></svg></div>`);return h}

const A10={};
