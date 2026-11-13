/* =====================================================================
   v11 · dövüş seviyeleri, rütbe dönemleri, harekât yetenekleri
   ===================================================================== */

/* ---------- Dövüş sporu seviyesi: her seansta ilerler ---------- */
const mlv=sp=>(S.mlv&&S.mlv[sp])||0;
function beltOf(sp){const L=BELTS[sp]||['Acemi','Amatör','Turnuva','Lisanslı','Usta'];const i=Math.min(L.length-1,Math.floor(mlv(sp)/3));return L[i]+(mlv(sp)>=L.length*3?' '+(Math.floor((mlv(sp)-L.length*3)/3)+1)+'. derece':'')}
function martialUp(id,score){S.mlv=S.mlv||{};const before=beltOf(id);const step=score==null?1:score>=.8?2:1;S.mlv[id]=mlv(id)+step;const lv=mlv(id);
 const C=curOf(id),k=S.tech[id]||0;let tech='';if(k<C.length&&(score==null||score>=.3)){S.tech[id]=k+1;tech=C[k].n}
 const nb=beltOf(id)!==before;const bonus=1+Math.floor(lv/5)*.5;addSt('dovus',bonus);addSt('guc',bonus*.6);
 const nm=SPORTS.find(s=>s[0]===id)[1];log(`${nm}: seviye ${lv}${tech?' · '+tech:''}`);
 setTimeout(()=>{fxPush(done=>{const el=fxLayer(`<div class="lvup"><div class="lu-c"><div class="lbl">${esc(nm)}</div><div class="lu-n">SEVİYE <b>${lv}</b></div>${nb?`<div class="lu-belt">Yeni kuşak: ${esc(beltOf(id))}</div>`:`<div class="lu-belt dim">${esc(beltOf(id))}</div>`}${tech?`<div class="lu-t">Yeni teknik: <b>${esc(tech)}</b></div>`:''}<div class="fxchips"><span>Yakın dövüş +${bonus.toFixed(1)}</span><span>Güç +${(bonus*.6).toFixed(1)}</span>${step>1?'<span>Kusursuz seans: çift seviye</span>':''}</div><div class="bt-tap">Dokun</div></div></div>`,'');const t=setTimeout(()=>fxClose(done),2600);el.addEventListener('click',()=>{clearTimeout(t);fxClose(done)},{once:true})})},150)}

/* ---------- Rütbe dönemleri ---------- */
const ERA=[
 {n:'Er ve erbaş',r:'Emirleri uygulayan asker',d:'Antrenman ve disiplinle temelini kurarsın. Harekâtta kendi hamleni yaparsın.',ab:'Adrenalin'},
 {n:'Astsubay',r:'Tim lideri',d:'Artık bir timi yönetiyorsun. Tim emri verebilir, birlik tatbikatı yaptırabilirsin.',ab:'Tim emri'},
 {n:'Subay',r:'Takım ve bölük komutanı',d:'Harekâtta topçu ve İHA desteği çağırırsın. Yüzbaşı olunca haberlere ülken adına yanıt verir, mektup yazarsın.',ab:'Destek çağır'},
 {n:'Üst subay',r:'Tabur ve alay komutanı',d:'İhtiyat birliklerini savaşa sürersin. Ticaret anlaşması ve yurt dışında üs kurma yetkin açılır.',ab:'İhtiyatı sür'},
 {n:'General',r:'Tugay, tümen, kolordu, ordu',d:'Hava harekâtı emredersin. Savaş ilanı, fetih ve kazanılan toprakların yönetimi senin elinde.',ab:'Hava harekâtı'}];
const eraMul=()=>1+T()*.25;
function eraCard(){const t=T();return `<div class="card era"><div class="sec-h"><h2>Dönemin</h2><span class="chip" style="color:var(--acc)">${t+1}/5</span></div>
 <div class="eras">${ERA.map((e,i)=>`<div class="${i<t?'ok':i===t?'now':''}"><b>${esc(e.n)}</b><small>${i<=t?esc(e.ab):ico('lock',11)}</small></div>`).join('')}</div>
 <p><b>${esc(ERA[t].r)}.</b> ${esc(ERA[t].d)}</p>
 <div class="fx"><span class="p">Gelişim hızı ×${eraMul().toFixed(2).replace('.',',')}</span><span class="p">Harekât tecrübesi ×${(1+t*.2).toFixed(1).replace('.',',')}</span><span>${ABIL.filter(a=>a.t<=t).length} harekât yeteneği</span></div>
 ${t<4?`<p class="small muted">Sıradaki dönem: <b>${esc(ERA[t+1].n)}</b> · ${esc(ERA[t+1].ab)} açılır.</p>`:''}</div>`}
function abilUnl(){const o=TIER(S.rank-1),n=T();if(n<=o)return[];return['Yeni dönem: '+ERA[n].n+' · '+ERA[n].r,...ABIL.filter(a=>a.t===n).map(a=>'Harekât yeteneği: '+a.n),'Gelişim hızı ×'+eraMul().toFixed(2).replace('.',',')]}

/* ---------- Harekât yetenekleri ---------- */
const ABIL=[
 {id:'adr',t:0,ic:'⚡',n:'Adrenalin',d:'Bu adımda icra şansı +%15',fx:'ADRENALİN',f:o=>{o.nb=(o.nb||0)+.15}},
 {id:'tim',t:1,ic:'🎯',n:'Tim emri',d:'Nişancılara ateş serbest: inisiyatif +15, şans +%10',fx:'ATEŞ SERBEST!',f:o=>{o.mom=clamp(o.mom+15);o.giz=clamp(o.giz-8);o.nb=(o.nb||0)+.10}},
 {id:'des',t:2,ic:'💥',n:'Destek çağır',d:'Topçu ve İHA: şans +%20, gizlilik −15',fx:'DESTEK ATEŞİ GELİYOR',f:o=>{o.nb=(o.nb||0)+.2;o.giz=clamp(o.giz-15);o.amm=clamp(o.amm+10)}},
 {id:'iht',t:3,ic:'🛡',n:'İhtiyatı sür',d:'Taze birlik: kuvvet +25, mühimmat +20',fx:'İHTİYAT CEPHEDE',f:o=>{o.hp=clamp(o.hp+25);o.amm=clamp(o.amm+20);o.mom=clamp(o.mom+5)}},
 {id:'hava',t:4,ic:'✈',n:'Hava harekâtı',d:'Savaş uçakları: şans +%35, inisiyatif +20',fx:'HAVA HAREKÂTI BAŞLADI',f:o=>{o.nb=(o.nb||0)+.35;o.mom=clamp(o.mom+20);o.giz=clamp(o.giz-10)}}];
function abilRow(o){if(S.mDone||!o.prep)return'';o.used=o.used||[];return `<div class="abil"><div class="sec-t">Komuta yetenekleri · harekât başına 1 kez</div><div class="abr">${ABIL.map(a=>{const lock=T()<a.t,used=o.used.includes(a.id);return `<button class="ab ${lock?'lock':used?'used':''}" data-a="abil" data-v="${a.id}" ${lock||used?'disabled':''}><span class="ai">${lock?ico('lock',14):a.ic}</span><b>${esc(a.n)}</b><small>${lock?esc(ERA[a.t].n)+' döneminde':used?'Kullanıldı':esc(a.d)}</small></button>`}).join('')}</div>${o.nb?`<div class="small green">Aktif: bu adımda şans +%${Math.round(o.nb*100)}</div>`:''}</div>`}
function useAbil(id){const o=S.op;const a=ABIL.find(x=>x.id===id);if(!o||!a||S.mDone||!o.prep||T()<a.t)return;o.used=o.used||[];if(o.used.includes(id))return;o.used.push(id);a.f(o);
 o.logs.push({c:clk8(o.clk),w:'Komuta',t:`${a.n}: ${a.d}.`,k:'g'});
 fxPush(done=>{const el=fxLayer(`<div class="abfx"><div class="af-i">${a.ic}</div><div class="af-t">${esc(a.fx)}</div></div>`,'');setTimeout(()=>fxClose(done),1300);el.addEventListener('click',()=>fxClose(done),{once:true})});save();render()}
function opChance(o,def,opt,to){return clamp(.45+S.st[opt[2]]/170+(S.st.mental-50)/250-S.fatigue/350-(S.injured?.15:0)+wBonus()+prepMod(def,opt)+timBonus()+(o.mom-50)/400-(o.hard?.05:0)-(to?.2:0)+dayBonus()+(o.nb||0),.1,.97)}
const OPHEAD=['TİM GÖREV EMRİ','TAKIM HAREKÂT EMRİ','BÖLÜK HAREKÂT EMRİ','TABUR HAREKÂT PLANI','GENELKURMAY HAREKÂT DİREKTİFİ'];

const A11={abil:useAbil};
