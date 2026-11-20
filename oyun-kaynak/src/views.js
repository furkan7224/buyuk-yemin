/* ============ EKRANLAR ============ */
function render(){
 if(typeof fictOn==='function'){if(S&&S.nation)fictOn(S.nation);else fictOff()}if(typeof rolesFix==='function')rolesFix();
 const app=$('#app');
 applyTheme(curNat());
 const back=t=>`<div class="top gut"><button class="mini" data-a="back">‹ Geri</button><div class="who"><b>${t}</b></div></div>`;
 if(UI.scr==='title')app.innerHTML=vTitleX();
 else if(UI.scr==='story')app.innerHTML=vStory();
 else if(UI.scr==='create')app.innerHTML=vCreate();
 else if(UI.scr==='ledger')app.innerHTML=back('Rütbe cetveli')+`<div class="scr plain gut" id="scr">${vLedger()}</div>`;
 else if(UI.scr==='howto')app.innerHTML=back('Nasıl oynanır')+`<div class="scr plain gut" id="scr">${vHow()}</div>`;
 else if(UI.scr==='settings')app.innerHTML=back('Ayarlar')+`<div class="scr plain gut" id="scr">${vSettings()}</div>`;
 else{app.innerHTML=vGame();UI.anim=false}
 camoBg();
 if(UI.scr==='title')titleScene();else stopTitle();
 const ld=$('#ladder'),cu=ld&&ld.querySelector('.cur');if(cu)ld.scrollLeft=cu.offsetLeft-ld.clientWidth/2+cu.clientWidth/2;
}
function vTitle(){
 const sv=loadSave();
 return `<div class="title gut"><canvas id="tcv" aria-hidden="true"></canvas>
 <div><div class="lbl acc" style="letter-spacing:.24em">Askerî kariyer · Strateji · Yaşam</div><h1 class="logo">BÜYÜK<br><span>YEMİN</span></h1></div>
 <p class="tag">Erden en üst rütbeye. Kaybettiklerin için, vatanın için, kendin için.</p>
 <div class="menu">
 ${sv?`<button class="mrow primary" data-a="cont"><span class="mi">${avatarSafe(sv)}</span><span><b>Devam et</b><small>${esc(sv.name)} · ${esc(rankName(sv.rank,sv.nation,(brList(sv.nation).find(b=>b.id===sv.branch)||brList(sv.nation)[0]).rs))} · Gün ${sv.day}</small></span><span class="chev">›</span></button>`:''}
 <button class="mrow ${sv?'':'primary'}" data-a="new"><span class="mi">${ico('plus',22)}</span><span><b>Yeni oyun</b><small>Hikâyeni yaz, ülkeni ve birliğini seç</small></span><span class="chev">›</span></button>
 <button class="mrow" data-a="ledger"><span class="mi">${ico('rank',22)}</span><span><b>Rütbe cetvelleri</b><small>10 ülkenin ordusu ve rütbe sistemi</small></span><span class="chev">›</span></button>
 <div class="row"><button class="mrow grow" data-a="howto"><span class="mi">${ico('book',22)}</span><span><b>Rehber</b></span></button><button class="mrow grow" data-a="settings"><span class="mi">${ico('gear',22)}</span><span><b>Ayarlar</b></span></button></div>
 </div></div>`;
}
function avatarSafe(sv){try{const br=brList(sv.nation).find(b=>b.id===sv.branch)||brList(sv.nation)[0];return avatar(40,br,sv.rank,sv.look||DEFLOOK,sv.nation,sv.name)}catch(e){return ico('play',22)}}
function vStory(){
 const d=UI.d;
 return `<div class="scr plain gut" id="scr"><div class="step">Adım 1 / 2</div><h1 class="big-q">NEDEN BURADASIN,<br>ASKER?</h1>
 <p class="muted">Hikâyeni anlat. Ne yaşadın, kimi kaybettin, bu üniformayı neden giyiyorsun? Yazdıkların oyun boyunca karşına çıkacak.</p>
 <div class="field"><textarea id="story" data-f="story" maxlength="2000" placeholder="Örnek: O gece nöbetten eve döndüğümde...">${esc(d.story)}</textarea><div class="small muted num" id="cnt">${d.story.length} / 2000 · en az 40 karakter</div></div>
 <div class="sec-t">Hikâyenin çekirdeği</div><div class="tiles">${TRAUMA.map(t=>`<button class="tile ${d.trauma===t.id?'sel':''}" data-a="trauma" data-v="${t.id}"><b>${t.n}</b><small>${t.d}</small></button>`).join('')}</div>
 <div class="row"><button class="btn ghost" data-a="home">İptal</button><button class="btn grow" data-a="toCreate">Devam</button></div></div>`;
}
function vCreate(){
 const d=UI.d;const bl=brList(d.nation);if(!bl.find(b=>b.id===d.branch)||bl.find(b=>b.id===d.branch).lock)d.branch=bl[0].id;const pb=bl.find(b=>b.id===d.branch);
 const lk=d.look,fem=lk.g==='k';
 const sw=(arr,key)=>arr.map((c,i)=>`<button class="sw ${lk[key]===i?'sel':''}" data-a="look" data-v="${key}|${i}" style="background:${Array.isArray(c)?c[0]:c}" aria-label="${Array.isArray(c)?c[1]:'Ten '+(i+1)}"></button>`).join('');
 const chips=(arr,key)=>arr.map(([v,n])=>`<button class="mini ${lk[key]===v?'on':''}" data-a="look" data-v="${key}|${v}">${n}</button>`).join('');
 return `<div class="scr plain gut" id="scr"><div class="step">Adım 2 / 2</div><h1 class="big-q">KİMLİK</h1>
 <div class="pv"><div id="pv">${avatar(124,pb,PATHS.find(p=>p.id===d.path).r,lk,d.nation)}</div><div class="grow" style="display:flex;flex-direction:column;gap:4px"><div class="lbl">${flag(d.nation,20)} ${esc(NAT[d.nation].n)}</div><b style="font:700 18px var(--font-c)">${esc(d.name||'İsimsiz asker')}</b><span class="small acc">${esc(pb.n)}</span><span class="small muted">${esc(rankName(PATHS.find(p=>p.id===d.path).r,d.nation,pb.rs))}</span><span class="small muted num" id="bfx">${bfxText(lk)}</span></div></div>
 <div class="row" style="align-items:flex-end"><div class="field grow"><label class="lbl" for="nm">Adın ve soyadın</label><input id="nm" type="text" data-f="name" maxlength="28" value="${esc(d.name)}" placeholder="Örn. Kaan Demirtaş"></div>
 <div class="field" style="width:84px"><label class="lbl" for="ag">Yaş</label><input id="ag" type="number" data-f="age" min="18" max="35" value="${esc(d.age)}"></div></div>
 <div class="sec-t">Ülke</div><div class="tiles">${NK.map(k=>`<button class="tile ${d.nation===k?'sel':''}" data-a="nation" data-v="${k}" style="min-height:0;flex-direction:row;align-items:center;gap:10px">${flag(k,30)}<b>${NAT[k].n}</b></button>`).join('')}</div>
 <p class="small muted">Ülke seçimi ordunu, birliklerini, rütbe adlarını, yemekleri, haritaları ve oyunun renklerini belirler.</p>
 <div class="sec-t">${esc(NAT[d.nation].n)} · Kuvvet ve birlik</div><div style="display:flex;flex-direction:column;gap:6px">${bl.map(b=>`<button class="tile ${d.branch===b.id?'sel':''}" data-a="branch" data-v="${b.id}" ${b.lock?'disabled':''} style="flex-direction:row;align-items:center;gap:12px;min-height:0">${avatar(52,b,0,lk,d.nation)}<span class="grow" style="display:flex;flex-direction:column;gap:2px"><b>${esc(b.n)}</b><small>${b.lock?'Kilitli · '+rankName(2,d.nation,b.rs)+' ve üstü, seçme sınavıyla katılınır.':esc(b.d)}</small></span></button>`).join('')}</div>
 <div class="sec-t">Giriş yolu</div>${PATHS.map(p=>`<button class="tile ${d.path===p.id?'sel':''}" data-a="path" data-v="${p.id}" style="flex-direction:row;align-items:center;gap:12px;min-height:0;margin-bottom:6px">${ins(p.r,52,pb.bc)}<span class="grow" style="display:flex;flex-direction:column;gap:2px"><b>${p.n}</b><small>Başlangıç: ${esc(rankName(p.r,d.nation,pb.rs))}. ${p.d}</small></span></button>`).join('')}
 <div class="card"><div class="sec-h"><h2>Görünüm</h2><button class="mini ${lk.hat?'on':''}" data-a="look" data-v="hat|${lk.hat?0:1}">${lk.hat?'Başlık açık':'Başlık kapalı'}</button></div>
 <div class="field"><div class="lbl">Cinsiyet</div><div class="row wrap" style="gap:6px">${chips([['e','Erkek'],['k','Kadın']],'g')}</div></div>
 <div class="field"><div class="lbl">Ten rengi</div><div class="row wrap" style="gap:10px">${sw(SKINS,'skin')}</div></div>
 <div class="field"><div class="lbl">Saç modeli</div><div class="row wrap" style="gap:6px">${chips(HS,'hs')}</div></div>
 <div class="field"><div class="lbl">Saç rengi</div><div class="row wrap" style="gap:10px">${sw(HAIRC,'hc')}</div></div>
 <div class="field"><div class="lbl">Göz rengi</div><div class="row wrap" style="gap:10px">${sw(EYES,'eye')}</div></div>
 ${fem?'':`<div class="field"><div class="lbl">Sakal ve bıyık</div><div class="row wrap" style="gap:6px">${chips(BEARDS,'beard')}</div></div>`}
 <div class="field"><label class="lbl" for="lboy">Boy: <span id="vboy" class="num">${lk.boy}</span> cm</label><input id="lboy" type="range" min="155" max="205" value="${lk.boy}" data-lf="boy"></div>
 <div class="field"><label class="lbl" for="lkilo">Kilo: <span id="vkilo" class="num">${lk.kilo}</span> kg</label><input id="lkilo" type="range" min="50" max="115" value="${lk.kilo}" data-lf="kilo"></div>
 <p class="small muted">Ağır vücut güç, dengeli vücut dayanıklılık, uzun boy erişim (yakın dövüş) kazandırır.</p></div>
 <div class="sec-t">İlk dövüş sporun</div><div class="tiles">${SPORTS.map(s=>`<button class="tile ${d.sport===s[0]?'sel':''}" data-a="sport" data-v="${s[0]}" style="min-height:0"><b>${s[1]}</b></button>`).join('')}</div>
 <div class="sec-t">Özel hayat</div>${d.trauma==='esi'?'<p class="muted small">Eşini kaybettin. Kalbin şimdilik kapalı; zamanla, belki.</p>':`<div class="row wrap">${[['bekar','Bekâr'],['sevgili','Sevgilim var'],['evli','Evliyim']].map(([v,n])=>`<button class="mini ${d.rel===v?'on':''}" data-a="rel" data-v="${v}">${n}</button>`).join('')}</div>${d.rel!=='bekar'?`<input type="text" data-f="pname" maxlength="20" value="${esc(d.pname)}" placeholder="Onun adı">`:''}`}
 <div class="row"><button class="btn ghost" data-a="toStory">Geri</button><button class="btn grow" data-a="start">Yemin et ve başla</button></div></div>`;
}
function bar(n,v,c){return `<div class="bar"><span>${n}</span><div class="t"><i style="width:${clamp(v)}%;${c?'background:'+c:''}"></i></div><span class="v">${Math.round(v)}</span></div>`}
function vGame(){
 const tabs=[['hq','Karargâh'],['train','Eğitim'],['life','Yaşam'],['mission','Harekât'],['world','Harita'],['prof','Profil']];
 const body={hq:vHQ,train:vTrain,life:vLife,mission:vMission,world:vWorld,prof:vProf}[UI.tab]();
 const r=RANKS[S.rank];const xpP=S.rank<18?clamp(S.xp/r.xp*100):100;
 return `<div class="top gut"><span class="face">${avatar(42)}</span><div class="who"><b>${esc(S.name)}</b><span>${esc(myRank())}</span></div><div class="day"><b class="num">${flag(S.nation,18)} Gün ${S.day}</b><span class="small muted">${gDate()} ${['Pzt','Sal','Çar','Per','Cum','Cmt','Paz'][(S.day-1)%7]}${S.wx?' · '+S.wx.i+' '+S.wx.t+'°':''}</span><div class="pips">${[...Array(Math.max(APB,S.ap))].map((_,i)=>`<i class="pip ${i<S.ap?'on':''}"></i>`).join('')}</div></div><div class="xpline"><i style="width:${xpP}%"></i></div></div>
 <div class="scr gut ${UI.anim?'anim':''}" id="scr">${S.world.war?`<div class="banner war">${S.world.warLim?'SINIRLI ÇATIŞMA':'SAVAŞ DURUMU'} · ${flag(S.world.war,18)} ${esc(NAT[S.world.war].n)} · Harekât tecrübesi ×1,5${S.world.warWhy?`<div class="small" style="font-weight:500;letter-spacing:0;margin-top:4px">${esc(S.world.warWhy)}</div>`:''}</div>`:''}${body}</div>
 <nav class="nav">${tabs.map(([k,n])=>`<button class="${UI.tab===k?'on':''}" data-a="tab" data-v="${k}" aria-label="${n}">${ico(k==='train'?'train':k,21)}${n}${k==='mission'&&!S.mDone?'<i class="dot"></i>':''}</button>`).join('')}</nav>`;
}
function vHQ(){
 const [mn,mc,md]=mood();const L=reqs();const wk=Math.floor((S.day-1)/7)*7;const br=B();
 const mealN=['k','o','a'].filter(k=>S.meals[k]!==null).length;
 return `<div class="card hero"><div class="row">${avatar(104)}<div class="grow" style="display:flex;flex-direction:column;gap:5px"><div class="lbl">${flag(S.nation,16)} ${esc(NAT[S.nation].n)}</div><h2 class="stencil" style="font-size:21px;line-height:1.05">${esc(myRank())}</h2><span class="small muted">${esc(br.n)}</span><span class="chip" style="color:${mc};align-self:flex-start">${mn}</span><span class="small">${ico('coin',13)} ${money(S.money)} · İzin ${S.leave||0} gün</span></div>${ins(S.rank,62)}</div>
 <div class="wpn eq" style="padding:8px 10px"><div class="wimg">${wpnSVG(equipped().p.id,96)}</div><div class="grow"><small>Kuşanılan silah</small><b>${esc(equipped().p.n)}</b></div><button class="mini" data-a="tab" data-v="train">Cephanelik</button></div>
 <div class="small muted">Komutanın: <b style="color:var(--fg)">${esc(cmdr())}</b></div>${bar('Komutan güveni',S.trust,S.trust<30?'var(--red)':'')}</div>
 ${adCards()}${flowCard()}${eraCard()}${S.rank>=18?`<button class="btn block" data-a="tab" data-v="mission" onclick="UI.msub='state'">${esc(S.pol?gov().o[S.pol.i][0]:'Devlet makamı')} · Devlet ›</button>`:govTeaser()}
 ${S.izin?`<div class="card leave"><div class="row"><div class="grow"><b class="stencil" style="font-size:20px">Bugün izinlisin</b><div class="small muted">Harekât yok. Dışarı çık, sosyalleş.</div></div><button class="btn" data-a="goto" data-v="life" onclick="UI.life='social';UI.lifeLock=1;setTimeout(()=>UI.lifeLock=0)">Dışarı çık</button></div></div>`:''}
 ${intelCard()}

 <div class="card"><div class="sec-h"><h2>Haftalık spor</h2><span class="small ${S.week.length>=3?'green':'muted'}">${S.week.length} / 3 gün</span></div>
 <div class="week">${DAYS.map((n,i)=>{const dd=wk+i+1;return`<div class="${S.week.includes(dd)||(dd===S.day&&S.trainT)?'done':''} ${dd===S.day?'today':''}">${n.slice(0,3)}</div>`}).join('')}</div></div>
 <div class="card"><div class="sec-h"><h2>Rütbe yolu</h2><span class="small muted">${S.rank+1}/19</span></div>${rankLadder()}
 ${S.rank<18?`<div class="small"><b class="acc">${esc(rankName(S.rank+1,S.nation,br.rs))}</b> <span class="muted">· karşılığı ${esc(RANKS[S.rank+1].tr_n)} · en erken ${Math.max(0,RANKS[S.rank].d-S.dIR)} gün sonra</span></div><div class="req">${L.map(([a,b,ok])=>`<div><span>${a}</span><span class="num ${ok?'ok':'no'}">${b}${ok?' ✓':''}</span></div>`).join('')}</div>`:'<p class="acc">En üst rütbedesin.</p>'}</div>
 <div class="card"><div class="sec-h"><h2>Beden ve zihin</h2></div><div class="bars">${bar('Sağlık',S.st.saglik,'var(--green)')}${bar('Ruh hali',S.st.mental,mc)}${bar('Yorgunluk',S.fatigue,'var(--amber)')}${bar('Beslenme',S.nutri,'var(--blue)')}</div><p class="small muted">${md}</p></div>
 <div class="card"><div class="sec-h"><h2>Kayıt defteri</h2></div><div class="list">${S.log.slice(0,6).map(l=>`<div><span class="num muted">G${l.d}</span> · ${esc(l.t)}</div>`).join('')}</div></div>`;
}
function intelCard(){const al=alarm();const W=S.world;const wars=(W.wars||[]);
 return `<div class="card"><div class="sec-h"><h2>İstihbarat brifingi</h2><span class="chip" style="color:${al[2]}">Alarm ${al[0]} · ${al[1]}</span></div>
 ${W.war?`<div class="banner">${flag(S.nation,18)} ${esc(NAT[S.nation].n)} ⚔ ${flag(W.war,18)} ${esc(NAT[W.war].n)} · ${W.warD||0}. gün · Cephe: ${count(S.nation)} – ${count(W.war)} bölge</div>`:''}
 ${wars.length?`<div class="small muted">Süren çatışmalar</div>${wars.slice(0,4).map(w=>`<div class="row small" style="gap:8px">${flag(w.a,18)} ${esc(NAT[w.a].n)} <span class="red">⚔</span> ${flag(w.b,18)} ${esc(NAT[w.b].n)} <span class="muted">· ${w.d}. gün</span></div>`).join('')}`:''}
 <div class="ticker"><span class="live">SON DAKİKA</span><div class="tk"><div class="tki">${(W.feed||[]).slice(0,6).map(f=>`<span>${esc(CHN[f.ch][0])}: ${esc(f.h)}</span>`).join('<i>•</i>')}</div></div></div>
 ${S.rank>=NEWSR&&(W.feed||[]).filter(f=>f.r&&!f.done).length?`<button class="btn ghost block" data-a="wsub" data-v="haber" onclick="UI.nch='bekleyen'">${ico('news',16)} Cevap bekleyen ${(W.feed||[]).filter(f=>f.r&&!f.done).length} haber</button>`:''}
 <div class="row"><button class="mini b" data-a="wsub" data-v="haber">Haber kanalları ›</button>${(S.regions||[]).length?`<button class="mini b" data-a="wsub" data-v="bolge">Bölgelerim (${S.regions.length}) ›</button>`:''}</div></div>`}
function lvl(n){return n>=90?'Usta':n>=50?'Uzman':n>=25?'İleri':n>=10?'Amatör':n>0?'Acemi':'Başlamadı'}
function vTrain(){
 const inj=S.injured>0;const EI={atis:'target',taktik:'map',lider:'team',harita:'topo'};
 return `<div class="card"><div class="sec-h"><h2>Eğitim merkezi</h2><span class="small muted">${S.ap} eylem hakkı</span></div>
 ${inj?rwBtn('heal','Revir tedavisi · iyileşme 1 gün kısalır'):''}<p class="small muted">Gelişim hızın beslenmene (${Math.round(S.nutri)}), ruh haline, sağlığına ve hırsına bağlı. Yorgunluk 70'i geçince verim düşer, sakatlanma riski artar.</p>
 <div class="field"><div class="lbl">Antrenman modu</div><div class="seg">${[['ask','Her seferinde sor'],['play','Hep mini oyun'],['auto','Hep otomatik']].map(([v,n])=>`<button class="${S.trainMode===v?'on':''}" data-a="tmode" data-v="${v}">${n}</button>`).join('')}</div></div>
 <div class="bars">${bar('Yorgunluk',S.fatigue,'var(--amber)')}</div>${inj?`<div class="banner">Sakatsın (${S.injured} gün). Sadece askerî eğitimlere katılabilirsin.</div>`:''}</div>
 <div class="card"><div class="sec-h"><h2>Cephanelik</h2><span class="small muted">${esc(B().n.split('·').pop().trim())}</span></div>
 <p class="small muted">Birliğinin silahları rütbene göre açılır. Kuşandığın piyade silahı atış isabetini ve harekât başarısını etkiler.</p>
 <div style="display:flex;flex-direction:column;gap:8px">${myWeapons().map(w=>{const lock=S.rank<w.r;const eq=Object.values(S.wpn||{}).includes(w.id);return`<div class="wpn ${lock?'lock':''} ${eq?'eq':''}"><div class="wimg">${wpnSVG(w.id,86)}</div><div class="grow" style="min-width:0"><b>${esc(w.n)}</b><small>${esc(w.cat)}</small><div class="wst"><span>İsabet ${w.st[0]}</span><span>Güç ${w.st[1]}</span><span>Menzil ${w.st[2]}</span></div></div>${lock?`<span class="small muted" style="text-align:right">${ico('lock',14)}<br>${esc(rankName(w.r,S.nation,B().rs))}</span>`:eq?'<span class="chip" style="color:var(--green)">Kuşanıldı</span>':`<button class="mini b" data-a="equip" data-v="${w.id}">Kuşan</button>`}</div>`}).join('')}</div></div>
 <div class="sec-t">Askerî eğitim</div>
 <div style="display:flex;flex-direction:column;gap:8px">${EDU.map(e=>`<button class="tile" data-a="train" data-v="${e[0]}" style="flex-direction:row;align-items:center;gap:12px;min-height:0"><span class="ico" style="margin:0;width:46px;height:46px">${ico(EI[e[0]],26)}</span><span class="grow" style="display:flex;flex-direction:column;gap:2px"><b>${e[1]}</b><small>${e[4]}</small><small class="acc">${e[3]} ${Math.round(S.st[e[2]])}${S.best[e[0]]?' · Rekor %'+S.best[e[0]]:''}</small></span><span class="chev muted" style="font:700 22px var(--font-c)">›</span></button>`).join('')}</div>
 <div class="sec-t">Dövüş sporları · Yakın dövüş ${Math.round(S.st.dovus)}</div>
 <p class="small muted">Her sporun gerçek bir haftalık programı var: bugün ${esc(DAYS[(S.day-1)%7])}. Teknik derslerinde müfredattaki bir sonraki tekniği öğrenirsin.</p>
 <div class="tiles">${SPORTS.slice().sort((a,b)=>(S.sports[b[0]]||0)-(S.sports[a[0]]||0)||(a[0]===S.main?-1:0)).map(s=>{const n=S.sports[s[0]]||0,ls=lessonOf(s[0],S.day),C=curOf(s[0]),k=Math.min(S.tech[s[0]]||0,C.length);return`<button class="tile" data-a="train" data-v="${s[0]}" ${inj?'disabled':''}><b>${s[1]}${S.main===s[0]?' ★':''}</b><small class="acc">Bugün: ${esc(lessonName(s[0],ls))}</small><small><b class="acc">Sv. ${mlv(s[0])}</b> · ${beltOf(s[0])} · Teknik ${k}/${C.length}</small><div class="lv"><i style="width:${k/C.length*100}%"></i></div></button>`}).join('')}</div>
 <div class="sec-t">Kondisyon · Güç ${Math.round(S.st.guc)} · Dayanıklılık ${Math.round(S.st.dayan)}</div>
 <div class="tiles">${COND.map(c=>`<button class="tile" data-a="train" data-v="${c[0]}" ${inj?'disabled':''}><span class="ico">${ico('run',18)}</span><b>${c[1]}</b><small>Güç ${c[2]>=1?'++':'+'} · Dayanıklılık ${c[3]>=1?'++':'+'}</small></button>`).join('')}</div>`;
}
function vLife(){
 const sub=UI.life;
 const tabs=`<div class="seg vseg">${[['mind','Zihin'],['food','Beslenme'],['kogus',S.rank>=8?'Kadro':'Koğuş'],['social','Sosyal'],['varlik','Varlık'],['love','İlişki']].map(([k,n])=>`<button class="${sub===k?'on':''}" data-a="lifetab" data-v="${k}">${n}</button>`).join('')}</div>`;
 return tabs+({mind:lifeMind,food:lifeFood,kogus:lifeKogus,social:lifeSocial,varlik:lifeVarlik,love:lifeLove}[sub])();
}
function lifeMind(){
 const [mn,mc,md]=mood();const t=S.trauma;
 return `${S.ap<=0?`<div class="card leave"><div class="row"><div class="grow"><b class="stencil" style="font-size:19px">Yoruldun</b><div class="small muted">Eylem hakkın bitti. Dinlen, toparlan ve günü kapat.</div></div></div>${rwBtn('ap','+1 eylem hakkı')}<button class="btn block" data-a="restend">${ico('moon',16)} Dinlen ve günü bitir</button></div>`:''}<div class="card hero"><div class="lbl">Ruh hali</div><h2 class="stencil" style="font-size:30px;color:${mc}">${mn}</h2><p class="small">${md}</p>
 <div class="bars">${bar('Ruh hali',S.st.mental,mc)}${bar('Hırs',S.st.hirs,'var(--red)')}${['esi','aile','kardes'].includes(t)?bar('Yas süreci',S.heal*4,'var(--blue)'):''}${bar('İntikam ateşi',S.dark,'var(--acc2)')}</div>
 ${S.st.mental<40?`<p class="small" style="color:var(--amber)">${t==='esi'?'Eşinin yokluğu her gün ağır. Mentalini toparlaman gerek: danışmanla görüş, günlük yaz, uykuna ve beslenmene dikkat et.':t==='aile'?'Öfken seni ayakta tutuyor ama tüketiyor da. Hırsını antrenmana yönlendir.':'Kendine zaman ayır. Kötü günler geçer.'}</p>`:''}</div>
 <div class="card"><div class="sec-h"><h2>Uyku düzeni</h2><span class="small muted">Bu gece</span></div><div class="seg">${[[5,'5 saat'],[7,'7 saat'],[9,'9 saat']].map(([v,n])=>`<button class="${S.sleep===v?'on':''}" data-a="sleep" data-v="${v}">${n}</button>`).join('')}</div>
 <p class="small muted">${S.sleep===5?'Erken kalkarsın: yarın 4 eylem hakkı, ama daha az toparlanma ve ruh hali −4.':S.sleep===9?'Derin uyku: yorgunluk çok düşer, ruh hali +3.':'Dengeli uyku: normal toparlanma.'}</p></div>
 <div class="card"><div class="sec-h"><h2>Psikoloji</h2><span class="small muted">1 eylem</span></div><div class="tiles">
 <button class="tile" data-a="psy" data-v="psk"><span class="ico">${ico('brain',18)}</span><b>Psikolojik danışman</b><small>Ruh hali ++ · yas sürecini ilerletir</small></button>
 <button class="tile" data-a="psy" data-v="med"><span class="ico">${ico('moon',18)}</span><b>Nefes ve meditasyon</b><small>Ruh hali + · Disiplin +</small></button>
 ${['esi','aile','kardes'].includes(t)?`<button class="tile" data-a="psy" data-v="anma"><span class="ico">${ico('heart',18)}</span><b>Kaybettiklerini an</b><small>Ruh hali + · Hırs +</small></button>`:''}
 <button class="tile" data-a="psy" data-v="aile"><span class="ico">${ico('people',18)}</span><b>${t==='aile'?'Akrabanı ara':'Aileni ara'}</b><small>Ruh hali +</small></button>
 <button class="tile" data-a="psy" data-v="dinlen"><span class="ico">${ico('moon',18)}</span><b>Dinlen</b><small>Yorgunluk −25</small></button></div></div>
 <div class="card"><div class="sec-h"><h2>Günlük</h2><span class="small muted">Ücretsiz · günde 1</span></div>
 <textarea id="diaryIn" style="min-height:90px" placeholder="Bugün neler hissettin?"></textarea><button class="btn ghost block" data-a="soc" data-v="diary">Günlüğe yaz</button>
 ${S.diary.length?`<div class="list">${S.diary.slice(0,3).map(x=>`<div class="small"><span class="muted num">G${x.d}</span> · ${esc(x.t)}</div>`).join('')}</div>`:''}</div>`;
}
function lifeFood(){
 let q=0,kc=0,pr=0;['k','o','a'].forEach(k=>{const m=menuOf(S.nation,k)[S.meals[k]??2];q+=m[1];kc+=m[3];pr+=m[4]});S.ex.forEach(e=>{q+=EXTRAS.find(x=>x[0]===e)[2]});
 return `${mealOutNote()}<div class="card hero"><div class="row"><div class="grow"><div class="lbl">${flag(S.nation,16)} ${esc(NAT[S.nation].n)} mutfağı</div><h2 class="stencil" style="font-size:24px">Günlük beslenme</h2></div><div style="text-align:right"><div class="num" style="font-size:26px;font-weight:700;color:${q>=4?'var(--green)':q<0?'var(--red)':'var(--fg)'}">${q>0?'+':''}${q}</div><div class="small muted">gün puanı</div></div></div>
 <div class="row" style="gap:18px"><span class="small"><b class="num">${kc}</b> kcal</span><span class="small"><b class="num">${pr}</b> g protein</span><span class="small muted">Ortalama ${Math.round(S.nutri)}</span></div>
 <div class="bars">${bar('Beslenme',S.nutri,'var(--blue)')}</div><p class="small muted">Seçmediğin öğün atlanmış sayılır; günü bitirirken uyarılırsın. İyi beslenme sağlığını ve antrenman verimini artırır.</p></div>
 ${['k','o','a'].map(k=>`<div class="sec-t">${MEALN[k]}</div><div class="meals">${menuOf(S.nation,k).map((m,i)=>`<button class="meal ${S.meals[k]===i?'sel':''}" data-a="meal" data-v="${k}|${i}">${plate(m[2],!m[2].length)}<span class="q" style="color:${m[1]>0?'var(--green)':m[1]<0?'var(--red)':'#ddd'}">${m[1]>0?'+':''}${m[1]}</span><span class="mt"><b>${esc(m[0])}</b><small>${m[3]?m[3]+' kcal · '+m[4]+' g protein':'Öğün yok'}</small></span></button>`).join('')}</div>`).join('')}
 <div class="sec-t">Ek</div><div class="row wrap" style="gap:6px">${EXTRAS.map(e=>`<button class="mini ${S.ex.includes(e[0])?(e[2]>0?'on':'r'):''}" data-a="extra" data-v="${e[0]}">${e[1]}</button>`).join('')}</div>`;
}
function lifeKogus(){const K=S.kogus||[];
 return `<div class="card hero"><div class="sec-h"><h2>${kname()}</h2><span class="chip" style="color:${S.kh>65?'var(--green)':S.kh<40?'var(--red)':'var(--amber)'}">${S.kh>65?'Kenetlenmiş':S.kh<40?'Gergin':'Normal'}</span></div>${bar('Koğuş havası',S.kh,S.kh<40?'var(--red)':'var(--green)')}<p class="small muted">Koğuşun havası ruh halini her gün etkiler; 70'in üstünde harekâtlarda da avantaj sağlar. Anlaşmazlıkları nasıl çözdüğün herkesin gözü önünde.</p><button class="btn ghost block" data-a="kog" data-v="cay|0" ${S.soc.cay===S.day||S.money<250?'disabled':''}>Koğuşa çay ve simit ısmarla (${money(250)})</button></div>
 <div style="display:flex;flex-direction:column;gap:8px">${K.map((m,i)=>`<div class="card" style="padding:11px"><div class="row">${avatar(58,B(),Math.max(0,S.rank-2),m.look,S.nation,m.n)}<div class="grow"><b style="font:700 16px var(--font-c)">${esc(m.n)}</b><div class="small muted">${TRAITS[m.t]} · ${m.b>70?'Yakın dost':m.b>45?'İyi geçiniyorsunuz':m.b>25?'Mesafeli':'Gergin'}</div><div class="bar" style="grid-template-columns:44px 1fr 30px"><span class="small">Bağ</span><div class="t"><i style="width:${m.b}%;background:${m.b<30?'var(--red)':'var(--blue)'}"></i></div><span class="v">${Math.round(m.b)}</span></div></div><button class="mini b" data-a="kog" data-v="konus|${i}">Konuş</button></div></div>`).join('')}</div>`}
function lifeSocial(){
 const fr=S.friends||[];
 const out=S.izin?`<div class="card hero"><div class="sec-h"><h2>Dış dünya</h2><span class="chip" style="color:var(--green)">İzinlisin</span></div><p class="small muted">Üniformasız bir gün. Her etkinlik 1 eylem harcar; bazılarında yeni insanlarla tanışabilirsin.</p>
 <div class="tiles">${Object.entries(OUTA).map(([id,[n,e,c,m,d]])=>`<button class="tile" data-a="out" data-v="${id}" ${(S.outDone||{})[id]===S.day||S.money<c?'disabled':''}><b>${id==='aile'&&S.trauma==='aile'?'Akrabanı ziyaret et':n}</b><small>${Object.entries(e).map(([k,v])=>STATN[k]+' +'+v).join(' · ')}${c?' · '+money(c):''}</small>${m?`<small class="acc">Tanışma şansı %${Math.round(m*100)}</small>`:''}</button>`).join('')}</div></div>`
 :`<div class="card"><div class="sec-h"><h2>Dış dünya</h2>${ico('lock',18)}</div><p class="small muted">${S.world.war?'Savaş sürüyor: tüm izinler kaldırıldı.':`Dışarı çıkmak için izin günü gerekir. Haftalık iznin Pazar günü${S.leave>0?`; ayrıca ${S.leave} gün ödül iznin var`:''}.`}</p>${S.leave>0&&!S.world.war&&!S.izinNext?'<button class="btn ghost block" data-a="useleave">Yarın ödül iznimi kullan</button>':S.izinNext?'<p class="small green">Yarın izinlisin.</p>':''}</div>`;
 return out+`<div class="card"><div class="sec-h"><h2>Arkadaşlar</h2><span class="small muted">${fr.length} kişi</span></div>${fr.length?fr.map((f,i)=>`<div class="row" style="border-bottom:1px solid var(--line);padding-bottom:9px"><span class="ico" style="width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:color-mix(in srgb,var(--acc) 16%,transparent);color:var(--acc);font:700 16px var(--font-c)">${esc(f.n[0])}</span><div class="grow"><b>${esc(f.n)}</b><div class="small muted">${esc(f.job)}</div><div class="bar" style="grid-template-columns:60px 1fr 30px"><span class="small">Bağ</span><div class="t"><i style="width:${f.b}%;background:var(--blue)"></i></div><span class="v">${Math.round(f.b)}</span></div></div><button class="mini b" data-a="friend" data-v="${i}" ${!S.izin||f.last===S.day?'disabled':''}>Buluş</button></div>`).join(''):'<p class="small muted">Henüz arkadaşın yok. İzin günlerinde dışarı çıkıp yeni insanlarla tanışabilirsin.</p>'}</div>
 <div class="card"><div class="sec-h"><h2>Kışla hayatı</h2><span class="small muted">1 eylem · günde bir kez</span></div>
 <div class="tiles">${Object.entries(SOC).map(([id,[n,e]])=>`<button class="tile" data-a="soc" data-v="${id}" ${S.soc[id]===S.day?'disabled':''}><span class="ico">${ico(id==='kitap'?'book':id==='kart'?'people':id==='gonullu'?'heart':'moon',18)}</span><b>${n}</b><small>${Object.entries(e).map(([k,v])=>STATN[k]+' +'+v).join(' · ')}</small></button>`).join('')}</div></div>`;
}
function lifeLove(){
 const P=S.partner,t=S.trauma;
 return `<div class="card hero"><div class="sec-h"><h2>İlişki</h2></div>${P?`<div class="row"><span class="ico" style="width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:color-mix(in srgb,var(--red) 18%,transparent);color:var(--red)">${ico('heart',26)}</span><div class="grow"><b style="font:700 20px var(--font-c)">${esc(P.name)}</b><div class="small muted">${P.m?'Eşin':'Sevgilin'} · ${P.aff>75?'Çok bağlı':P.aff>45?'İyi':P.aff>20?'Mesafeli':'Kopmak üzere'}</div></div></div>${bar('Bağlılık',P.aff,'var(--red)')}
 <div class="small">Son iletişim: <b>${S.day-(P.last??S.day)===0?'bugün':(S.day-(P.last??S.day))+' gün önce'}</b>${S.day-(P.last??S.day)>2?' <span class="red">· ihmal ediliyor</span>':''}</div>
 ${P.need?`<div class="brief"><span class="n" style="color:var(--red)">!</span><div><b>Bekleyen istek · son ${Math.max(0,P.need.dl-S.day)} gün</b><span class="small">${esc(NEEDS[P.need.k].t(P.name))}</span></div></div>`:''}
 <div class="tiles"><button class="tile" data-a="psy" data-v="msg" ${S.msg?'disabled':''}><b>Mesaj at</b><small>Ücretsiz · günde 1 · +3</small></button><button class="tile" data-a="psy" data-v="video"><b>Görüntülü konuş</b><small>1 eylem · +7</small></button><button class="tile" data-a="psy" data-v="date"><b>Buluş</b><small>1 eylem · +9 · savaşta kapalı</small></button><button class="tile" data-a="psy" data-v="gift" ${S.money<600?'disabled':''}><b>Hediye gönder</b><small>${money(600)} · +8</small></button></div>
 ${!P.m&&P.aff>=90&&S.rank>=2?'<button class="btn block" data-a="psy" data-v="propose">Evlilik teklif et</button>':''}<p class="small muted">İlgi göstermezsen bağlılık her gün düşer; 0'a inerse ayrılırsınız. İstekleri zamanında karşıla.</p><button class="btn ghost block brk" data-a="breakup">${P.m?'Boşan':'Ayrıl'}</button>`:`${(S.exes||[]).length?`<p class="small muted">Geçmiş: ${S.exes.map(esc).join(', ')}</p>`:''}<p class="muted small">${t==='esi'?'Henüz kimseye yer yok kalbinde. Zaman ve yas süreci ilerledikçe biriyle tanışabilirsin.':'Şu an kimse yok. İzin günlerinde biriyle tanışabilirsin.'}</p>`}</div>`;
}
function vMission(){
 if(S.izin)return `<div class="card hero leave"><div class="lbl acc">İzin belgesi</div><h2 class="stencil" style="font-size:28px">Bugün izinlisin</h2><p>${(S.day-1)%7===6?'Haftalık dinlenme günü.':'Komutanının verdiği ödül iznini kullanıyorsun.'} Harekât yok. Üniformayı çıkar, şehre in, sevdiklerinle vakit geçir.</p><div class="row wrap"><button class="btn grow" data-a="goto" data-v="life" onclick="UI.life='social';UI.lifeLock=1;setTimeout(()=>UI.lifeLock=0)">Dışarı çık</button>${S.partner?`<button class="btn ghost grow" data-a="lifetab" data-v="love" onclick="UI.tab='life'">${esc(S.partner.name)} ile buluş</button>`:''}</div></div>`;
 const o=S.op;if(!o)return'';const def=OPS.find(x=>x.id===o.id);const al=alarm();const e=equipped();
 const head=`<div class="dossier"><div class="dz-top"><span>GİZLİ · HAREKÂT EMRİ</span><span class="num">Gün ${S.day} · H+${String(4+(S.day*7)%18).padStart(2,'0')}:00</span></div>
 ${scene(def.sc)}<div class="dz-body"><div class="stamp">GİZLİ</div><div class="lbl acc">Harekât ${esc(o.code||'')}</div><h2 class="stencil" style="font-size:26px;line-height:1.02">${esc(def.ti)}</h2>
 <div class="meta"><div><span>Birlik</span><b>${esc(UNIT[T()][0].toLocaleUpperCase(typeof LANG!=='undefined'&&LANG!=='tr'?'en':'tr')+UNIT[T()].slice(1))} · ${esc(B().n.split('·').pop().trim())}</b></div><div><span>Bölge</span><b>${ico('pin',12)} ${esc(o.city[0])}</b></div><div><span>Karşı taraf</span><b>${flag(o.en,16)} ${esc(NAT[o.en].n)}</b></div><div><span>${o.al?'Müttefik':'Alarm'}</span><b>${o.al?flag(o.al,16)+' '+esc(NAT[o.al].n):`<span style="color:${al[2]}">${al[1]}</span>`}</b></div><div><span>Yön</span><b>${esc(o.thr[0])}</b></div><div><span>Silahın</span><b>${esc(e.p?e.p.n:'—')}</b></div></div>
 <div class="mapwrap">${opMap()}</div>
 <div class="steps">${PHN.map((p,i)=>`<div class="${i<o.ph||S.mDone?'ok':i===o.ph?'now':''}"><i>${i<o.ph||S.mDone?'✓':i+1}</i><span>${p}</span></div>`).join('')}</div></div></div>`;
 const log_=o.notes.length?`<div class="card"><div class="sec-h"><h2>Harekât günlüğü</h2></div><div class="list">${o.notes.map(([p,t,q,ok])=>`<div><span class="small muted">${p}</span><br>${esc(t)} <span class="small ${q>=.8?'green':q>=.4?'':'red'}">${q>=.8?'· doğru':q>=.4?'· riskli':'· hatalı'}${!ok&&q>=.4?' · icra aksadı':''}</span></div>`).join('')}</div></div>`:'';
 if(S.mDone){const r=S.mRes||{};return head+log_+`<div class="card"><div class="lbl">Bugünkü harekât tamamlandı</div><h2 class="stencil" style="font-size:22px">${['Başarısız','Kısmi başarı','Görev başarılı'][r.res??1]}</h2><div class="fx"><span class="p">Tecrübe +${r.xp||0}</span><span class="${(r.trs||0)>=0?'p':'n'}">Güven ${(r.trs||0)>=0?'+':''}${r.trs||0}</span></div><p class="small muted">Yarın sabah yeni harekât emri gelecek.</p><button class="btn block" data-a="wsub" data-v="strateji">Strateji haritasına git</button></div>`}
 if(!o.prep){const I=o.intel||intelOf(o);const fit=fitOf(def.id);return head+`<div class="card"><div class="sec-h"><h2>İstihbarat brifingi</h2><span class="chip" style="color:var(--acc)">${S.wx?esc(S.wx.i+' '+S.wx.n):''}</span></div>
 <div class="aar"><div><span>Tahmini düşman</span><b>~${I.en} personel</b></div><div><span>Zırhlı araç</span><b>${I.veh||'Yok'}</b></div><div><span>Kendi kuvvetin</span><b>${I.own} personel</b></div><div><span>Arazi</span><b>${esc(I.terr)}</b></div></div></div>
 <div class="sec-t">1 · Kuvvet tertibi</div><div style="display:flex;flex-direction:column;gap:8px">${PKG.map(([k,n,d])=>`<button class="opt op2 ${o.pkgSel===k?'sel':''}" data-a="oprep" data-v="${k}|"><span class="k">${o.pkgSel===k?'✓':'·'}</span><span class="grow"><b>${n}</b><br><span class="small muted">${d}</span></span></button>`).join('')}</div>
 <div class="sec-t">2 · Destek</div><div style="display:flex;flex-direction:column;gap:8px">${supports().map(([k,n,d])=>`<button class="opt op2 ${o.supSel===k?'sel':''}" data-a="oprep" data-v="|${k}"><span class="k">${o.supSel===k?'✓':'·'}</span><span class="grow"><b>${n}</b><br><span class="small muted">${d}</span></span></button>`).join('')}</div>
 <p class="small muted">Görevin türüne, araziye ve havaya uygun tertip başarı şansını artırır. Seçimini yaptığında harekât başlar (1 eylem).</p>`}
 const ph=def.ph[o.ph];
 return head+log_+`<div class="brief sit"><span class="n">${o.ph+1}</span><div><b>${PHN[o.ph]} · Durum</b><span>${esc(opText(ph[0]))}</span></div></div>
 ${o.ord[o.ph].map((idx,j)=>{const op=ph[idx];return`<button class="opt op2" data-a="opick" data-v="${idx}"><span class="k">${'ABC'[j]}</span><span class="grow">${esc(opText(op[0]))}<span class="tag">${STATN[op[2]]} ${Math.round(S.st[op[2]])}</span></span></button>`}).join('')}
 ${o.ph===0?'<p class="small muted">Harekât 1 eylem hakkı harcar. Üç fazın sonunda komutanın raporu değerlendirir.</p>':''}`;
}
function vWorld(){const sub=UI.wsub||'strateji';
 return `<div class="seg">${[['strateji','Strateji'],['diplo','Diplomasi'],['haber','Haberler'],['bolge','Bölgeler'+((S.regions||[]).length?' ('+S.regions.length+')':'')]].map(([k,n])=>`<button class="${sub===k?'on':''}" data-a="wsub" data-v="${k}">${n}</button>`).join('')}</div>`+(sub==='haber'?vNews():sub==='bolge'?vRegions():sub==='diplo'?vDiplo():vStrat())}
function vDiplo(){const me=S.nation;const k=UI.dsel&&UI.dsel!==me?UI.dsel:NK.find(x=>x!==me);const r=rel(me,k),al=allied(me,k),tr=S.trade&&S.trade[k],bs=(S.bases||[]).find(b=>b.k===k);
 const bl=BLOCS.filter(b=>b.m.includes(k)).map(b=>b.n);
 return `<div class="card"><div class="sec-h"><h2>Komuta yetkilerin</h2></div><div class="auth">${AUTH.map(([rk,n])=>`<div class="${S.rank>=rk?'on':''}">${S.rank>=rk?'✓':ico('lock',13)} <span>${n}</span><small>${esc(rankName(rk,me,B().rs))}</small></div>`).join('')}</div></div>
 <div class="row" style="gap:6px;overflow-x:auto;padding-bottom:4px">${NK.filter(x=>x!==me).map(x=>`<button class="mini ${x===k?'on':''}" data-a="dsel" data-v="${x}" style="flex:none">${flag(x,18)} ${NAT[x].n}</button>`).join('')}</div>
 <div class="card hero"><div class="row"><div style="flex:none;border-radius:8px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.4)">${flag(k,72)}</div><div class="grow"><h2 class="stencil" style="font-size:24px">${esc(NAT[k].n)}</h2><div class="small muted">Güç ${pwr(k)} · ${count(k)} bölge${S.world.war===k?' · <span class="red">savaştasınız</span>':''}</div><div class="small">${al?'<span class="green">Müttefik</span>':(S.world.broken||{})[k]?`<span class="red">İttifak bozuldu (Gün ${S.world.broken[k]})</span>`:''}${bl.length?' · '+bl.map(esc).join(', '):''}</div></div></div>
 ${bar('İlişki',(r+100)/2,r>30?'var(--green)':r<-30?'var(--red)':'var(--amber)').replace(`>${Math.round((r+100)/2)}<`,`>${r>0?'+':''}${r}<`)}
 <div class="aar"><div><span>Ticaret</span><b>${tr?money(tr.v)+'/gün':'Yok'}</b></div><div><span>Varlığın</span><b>${bs?esc(bs.t+' · '+bs.city):'Yok'}</b></div></div>
 <div class="tiles"><button class="tile" data-a="letter" data-v="${k}" ${S.rank<10?'disabled':''}><b>${ico('news',16)} Mektup gönder</b><small>${S.rank<10?'Kilitli':'Amaç ve üslup seç'}</small></button><button class="tile" data-a="trade" data-v="${k}" ${S.rank<11||tr?'disabled':''}><b>${ico('coin',16)} Ticaret anlaşması</b><small>${S.rank<11?'Kilitli':tr?'Mevcut':'İlişki +10 gerekir'}</small></button>
 <button class="tile" data-a="base" data-v="${k}" ${S.rank<13||bs?'disabled':''}><b>${ico('pin',16)} ${al?'Askerî üs kur':'Ticaret karakolu kur'}</b><small>${S.rank<13?'Kilitli':bs?'Mevcut':'İlişki +30 · '+money(al?40000:65000)}</small></button><button class="tile" data-a="declare" data-v="${k}" ${S.rank<14||al||S.world.war?'disabled':''} style="border-color:color-mix(in srgb,var(--red) 50%,var(--line))"><b class="red">${ico('target',16)} Savaş ilan et</b><small>${S.rank<14?'Kilitli':al?'Müttefik':'Gerekçe seçilir'}</small></button></div></div>
 ${(S.letters||[]).filter(l=>l.k===k).length?`<div class="card"><div class="sec-h"><h2>Yazışmalar</h2></div>${S.letters.filter(l=>l.k===k).slice(0,4).map(l=>`<div class="letter mini"><span class="small muted">Gün ${l.d} · ${esc(l.p)} · ${esc(l.t)}</span>${l.mine?`<p><i>Sen: "${esc(l.mine)}"</i></p>`:''}<p>${esc(l.txt)}</p></div>`).join('')}</div>`:''}`}
function vNews(){const F=S.world.feed||[];const ch=UI.nch||'hepsi';const L=F.filter(f=>ch==='hepsi'||f.ch===ch);
 return `<div class="row wrap" style="gap:6px"><button class="mini ${ch==='hepsi'?'on':''}" data-a="nch" data-v="hepsi">Tümü</button>${Object.entries(CHN).map(([k,[n,c]])=>`<button class="mini ${ch===k?'on':''}" data-a="nch" data-v="${k}"><i style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${c};margin-right:5px"></i>${n}</button>`).join('')}</div>
 ${L.length?L.slice(0,20).map(f=>`<div class="card news"><div class="row" style="justify-content:space-between"><span class="chan" style="--c:${CHN[f.ch][1]}">${esc(CHN[f.ch][0])}</span><span class="small muted num">Gün ${f.d}</span></div><b class="nh">${esc(f.h)}</b>${f.b?`<p class="small muted">${esc(f.b)}</p>`:''}${f.c.length?`<div class="row" style="gap:4px">${f.c.map(k=>NAT[k]?flag(k,20):'').join('')}</div>`:''}
 ${f.r?(f.done?`<div class="small green">Ülkenin yanıtı: ${esc(f.done)}</div>`:`<div class="sec-t">Ülkenin yanıtı ne olsun?</div><div style="display:flex;flex-direction:column;gap:6px">${RESPA()[f.r.t].o.map((o,i)=>`<button class="opt" data-a="resp" data-v="${f.id}|${i}" style="padding:10px 12px"><span class="k" style="width:26px;height:26px">${'ABCD'[i]}</span><span class="grow small">${esc(o[0])}</span></button>`).join('')}</div>`):''}</div>`).join(''):'<p class="muted">Henüz haber yok. Günü bitirince yeni bültenler gelir.</p>'}`}
function vRegions(){const Rg=S.regions||[];
 return `<div class="card hero"><div class="sec-h"><h2>Himaye bölgeleri</h2><span class="small">${ico('coin',14)} Hazine ${money(S.treasury||0)}</span></div><p class="small muted">Savaşta kazanılan topraklar senin himayene geçer. Güvenliği, ticareti ve halkın memnuniyetini yönet. Güvenlik çok düşerse ayaklanma çıkar; düşman karşı taarruzla bölgeyi geri almaya çalışır.</p></div>
 ${(S.bases||[]).length||Object.keys(S.trade||{}).length?`<div class="sec-t">Yurt dışı varlıklar</div>${(S.bases||[]).map((b,i)=>`<div class="card"><div class="row" style="justify-content:space-between"><div><b style="font:700 18px var(--font-c)">${esc(b.t)} · ${esc(b.city)}</b><div class="small muted">${flag(b.k,16)} ${esc(NAT[b.k].n)} · seviye ${b.lv}</div></div>${ico('pin',24)}</div><div class="bars">${bar('Güvenlik',b.sec,'var(--blue)')}${bar('Ticaret',b.eko,'var(--amber)')}</div><div class="small muted">Günlük gelir ≈ ${money(b.eko*b.lv*220)}</div><div class="row wrap"><button class="mini b" data-a="baseact" data-v="${i}|yatirim" ${b.act===S.day?'disabled':''}>Yatırım (${money(15000)})</button><button class="mini b" data-a="baseact" data-v="${i}|guvenlik" ${b.act===S.day?'disabled':''}>Güvenlik (${money(8000)})</button><button class="mini b" data-a="baseact" data-v="${i}|genis" ${b.act===S.day?'disabled':''}>Genişlet (${money(30000)})</button></div></div>`).join('')}${Object.entries(S.trade||{}).map(([k,t])=>`<div class="row small" style="gap:8px">${flag(k,18)} ${esc(NAT[k].n)} ticaret anlaşması · ${money(t.v)}/gün</div>`).join('')}<div class="sec-t">Fethedilen bölgeler</div>`:''}${Rg.length?Rg.map(r=>`<div class="card"><div class="row" style="justify-content:space-between"><div><b style="font:700 18px var(--font-c)">${esc(r.n)}</b><div class="small muted">${flag(r.from,16)} eski ${esc(NAT[r.from].n)} toprağı · nüfus ${r.pop} bin · ${S.day-r.d}. gün</div></div>${ico('shield',26)}</div>
 <div class="bars">${bar('Güvenlik',r.guv,r.guv<30?'var(--red)':'var(--blue)')}${bar('Ticaret',r.eko,'var(--amber)')}${bar('Halk memnuniyeti',r.mem,r.mem<30?'var(--red)':'var(--green)')}</div>
 <div class="small muted">Günlük gelir ≈ ${money(r.eko*r.pop*1.5)}${r.tah?' · Tahkimat '+r.tah:''}</div>
 <div class="tiles">${Object.entries(RACT).map(([k,[n,rk,e]])=>`<button class="tile" data-a="reg" data-v="${r.c}|${k}" ${S.rank<rk||r.act===S.day?'disabled':''} style="min-height:0"><b style="font-size:14px">${n}</b><small>${S.rank<rk?ico('lock',12)+' '+esc(rankName(rk,S.nation,B().rs)):Object.entries(e).map(([a,v])=>({guv:'Güvenlik',eko:'Ticaret',mem:'Memnuniyet',tah:'Tahkimat'})[a]+(v>0?' +':' ')+v).join(' · ')}</small></button>`).join('')}</div></div>`).join(''):`<div class="card"><p class="muted">Henüz himayende bir bölge yok. Savaşta başarılı harekâtlar ve cephe zaferleri düşman topraklarını sana kazandırır.</p></div>`}`}
function vStrat(){
 const W=S.world,me=S.nation,gen=S.rank>=14;
 return `<div class="card"><div class="sec-h"><h2>Strateji haritası</h2><span class="small muted">Kurgusal senaryo</span></div><div class="mapwrap">${mapSVG()}</div>
 <p class="small muted">Vurgulu çerçeve: senin ülken. Kesik çizgi: müttefik. Kırmızı: savaştığın ülke.</p></div>
 <div class="card"><div class="sec-h"><h2>${esc(NAT[me].n)} kurmay haritası</h2></div><div class="mapwrap">${nationMap(me,projFor(me))}</div></div>
 <div class="card"><div class="sec-h"><h2>Komuta yetkin</h2></div>
 ${gen?'<p class="small">General/amiral olarak ittifak kurabilir ve harekât başlatabilirsin.</p>':S.rank>=10?'<p class="small">Kurmay raporlarıyla stratejiye katkı verebilirsin. İttifak ve harekât yetkisi general/amiral rütbesiyle gelir.</p>':'<p class="small muted">Şimdilik emir alan bir askersin. Kurmay raporu yüzbaşı karşılığı, diplomasi ve harekât yetkisi general/amiral rütbesiyle açılır.</p>'}
 <div class="row wrap">${S.rank>=10?'<button class="btn ghost grow" data-a="report">Kurmay raporu (1 eylem)</button>':''}${W.war&&S.rank>=1&&S.rank<18?'<button class="btn warn grow" data-a="volunteer">Cepheye gönüllü (1 eylem)</button>':''}</div>
 ${gen?`<p class="small muted">Diplomasi: ${S.dipCd?S.dipCd+' gün bekle':'hazır'} · Harekât: ${S.opCd?S.opCd+' gün bekle':'hazır'} · Komuta zaferi: ${S.wins}</p>`:''}</div>
 <div class="card"><div class="sec-h"><h2>Çatışmalar ve ittifaklar</h2><span class="chip" style="color:${alarm()[2]}">Alarm ${alarm()[0]}</span></div>
 ${W.war?`<div class="row" style="gap:8px">${flag(me,22)} <b>${esc(NAT[me].n)}</b> <span class="red stencil">⚔</span> ${flag(W.war,22)} <b>${esc(NAT[W.war].n)}</b> <span class="small muted">${W.warD||0}. gün</span></div>`:''}
 ${(W.wars||[]).map(w=>`<div class="row small" style="gap:8px">${flag(w.a,20)} ${esc(NAT[w.a].n)} <span class="red">⚔</span> ${flag(w.b,20)} ${esc(NAT[w.b].n)} <span class="muted">${w.lim?'sınırlı çatışma · ':'savaş · '}${w.d}. gün</span></div>`).join('')||(!W.war?'<p class="small muted">Şu an açık savaş yok, ama gerginlik sürüyor.</p>':'')}
 <div class="sec-t">İttifak blokları</div><div style="display:flex;flex-direction:column;gap:8px">${BLOCS.map(b=>{const live=b.def?b.m.every((x,i)=>b.m.slice(i+1).every(y=>allied(x,y))):true;return`<div style="${live?'':'opacity:.45'}"><div class="row small" style="gap:4px">${b.m.map(k=>flag(k,18)).join('')} <b style="margin-left:4px">${esc(b.n)}</b>${live?'':' <span class="red">· dağıldı</span>'}</div><div class="small muted">${esc(b.t)}</div></div>`}).join('')}</div>
 ${(()=>{const bl=new Set();BLOCS.filter(b=>b.def).forEach(b=>b.m.forEach((x,i)=>b.m.slice(i+1).forEach(y=>bl.add(pk(x,y)))));const ex=W.al.filter(x=>!bl.has(x));return ex.length?`<div class="sec-t">Yeni ittifaklar</div>`+ex.map(x=>x.split('|')).map(([a,b])=>`<div class="row small" style="gap:6px">${flag(a,18)} ${esc(NAT[a].n)} <span class="green">⇄</span> ${flag(b,18)} ${esc(NAT[b].n)}</div>`).join(''):''})()}
 <p class="small muted">Nükleer güçler (${NUC.map(k=>NAT[k].n).join(', ')}) arasında doğrudan savaş çok nadirdir; gerilim daha çok vekâlet çatışması, siber saldırı ve sınır olaylarıyla yaşanır.</p></div>
 <div class="card"><div class="sec-h"><h2>Ülkeler</h2><span class="small muted">Güç · ilişki</span></div>
 ${NK.map(k=>{const r=k===me?null:rel(me,k),al=k!==me&&allied(me,k);return `<div class="leg">${flag(k,26)}<div style="min-width:0"><b>${NAT[k].n}</b>${k===me?' <span class="acc small">(sen)</span>':''}${al?' <span class="small green">müttefik</span>':''}${W.war===k?' <span class="small red">savaşta</span>':''}<div class="small muted num">Güç ${pwr(k)} · ${count(k)} bölge${r!==null?` · İlişki <span class="${r>30?'green':r<-30?'red':''}">${r>0?'+':''}${r}</span>`:''}</div></div>
 <div class="acts">${gen&&k!==me?(al?`<button class="mini" data-a="leave" data-v="${k}">Ayrıl</button>`:`<button class="mini b" data-a="ally" data-v="${k}">İttifak</button><button class="mini" data-a="talk" data-v="${k}">Görüş</button>${(r<0||W.war===k)?`<button class="mini r" data-a="op" data-v="${k}">Harekât</button>`:''}`):''}</div></div>`}).join('')}</div>
 <div class="card"><div class="sec-h"><h2>Dünya haberleri</h2></div><div class="list">${W.news.slice(0,8).map(n=>`<div><span class="num muted">G${n.d}</span> · ${esc(n.t)}</div>`).join('')}</div></div>`;
}
function vProf(){
 const st=S.st;const locked=brList(S.nation).filter(b=>b.lock&&b.id!==S.branch);
 return `<div class="card hero"><div class="row">${avatar(108)}<div class="grow"><h2 class="stencil" style="font-size:22px">${esc(S.name)}</h2><div class="small muted">${S.age} yaş · ${S.look.boy} cm · ${S.look.kilo} kg</div><div class="small">${flag(S.nation,16)} ${esc(NAT[S.nation].n)}</div><div class="small acc">${esc(myRank())}</div><div class="small muted">${esc(B().n)}</div><div class="small">${ico('coin',13)} ${money(S.money)} · maaş ${money(maas())}/hafta</div></div></div><div class="small muted">Komutanın: ${esc(cmdr())} · ${esc(CMDP[S.cmdP].n)}</div></div>
 <div class="card"><div class="sec-h"><h2>Rütbe yolu</h2></div>${rankLadder()}</div>
 <div class="card"><div class="sec-h"><h2>Yetenekler</h2></div><div class="bars">${['guc','dayan','dovus','nisan','strat','lider','disiplin','hirs'].map(k=>bar(STATN[k],st[k])).join('')}</div></div>
 <div class="card"><div class="sec-h"><h2>Spor geçmişi</h2></div><div class="list">${Object.entries(S.sports).length?Object.entries(S.sports).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`<div class="row"><span class="grow">${SPORTS.find(s=>s[0]===k)[1]}</span><span class="small acc">${lvl(n)}</span><span class="num muted">${n}</span></div>`).join(''):'<div class="muted small">Henüz dövüş antrenmanı yok.</div>'}</div></div>
 <div class="card"><div class="sec-h"><h2>Hikâyen</h2></div><p style="white-space:pre-wrap">${esc(S.story)}</p>${S.chlog.length?`<div class="list">${S.chlog.map(c=>`<div class="small">${esc(c)}</div>`).join('')}</div>`:''}</div>
 ${locked.length?`<div class="card"><div class="sec-h"><h2>Seçmeli birlikler</h2></div>${locked.map(b=>{const L=b.lock,ok=S.rank>=L.rank&&st.dovus>=L.dovus&&st.dayan>=L.dayan&&st.nisan>=L.nisan;return`<div class="row" style="border-bottom:1px solid var(--line);padding-bottom:10px">${avatar(48,b)}<div class="grow"><b>${esc(b.n)}</b><div class="small muted num">${esc(rankName(2,S.nation,b.rs))}+ · Dövüş ${L.dovus} · Dayanıklılık ${L.dayan} · Nişan ${L.nisan}</div></div><button class="mini ${ok?'b':''}" data-a="transfer" data-v="${b.id}" ${ok?'':'disabled'}>Seçmeye gir</button></div>`}).join('')}</div>`:''}
 <div class="card"><div class="sec-h"><h2>Rütbe cetveli</h2></div>${ledgerTable(S.nation,B().rs,S.rank)}</div>
 <div class="row"><button class="btn ghost grow" data-a="settings">${ico('gear',18)} Ayarlar</button><button class="btn ghost grow" data-a="home">Ana menü</button></div>`;
}
function ledgerTable(nat,rs,cur=-1){
 const sys=RS[nat];let lastC='',h='';
 RANKS.forEach((r,i)=>{if(r.c!==lastC){h+=`<tr><td class="c" colspan="3">${r.c}</td></tr>`;lastC=r.c}
  h+=`<tr class="${i===cur?'cur':''}"><td style="width:30px">${ins(i,34,nat==='TR'||!S?'#4a5530':undefined)}</td><td>${esc((sys[rs]||sys.land)[i])}${nat!=='TR'?`<div class="small muted">${esc(r.tr_n)}</div>`:''}</td><td class="num small muted" style="text-align:right">${i<18?r.d+' gün+':''}</td></tr>`});
 return `<div style="overflow-x:auto"><table class="ranks">${h}</table></div>`;
}
function vLedger(){
 const nat=UI.lnat||curNat()||'TR';const sys=RS[nat];const keys=Object.keys(sys);const rs=keys.includes(UI.lrs)?UI.lrs:'land';
 const lab={land:'Kara',navy:'Deniz',air:'Hava',mar:'Deniz Piyadesi'};
 return `<div class="row wrap" style="gap:6px">${NK.map(k=>`<button class="mini ${k===nat?'on':''}" data-a="lnat" data-v="${k}">${flag(k,18)} ${k}</button>`).join('')}</div>
 <div class="seg">${keys.map(k=>`<button class="${k===rs?'on':''}" data-a="lrs" data-v="${k}">${lab[k]}</button>`).join('')}</div>
 <div class="card">${ledgerTable(nat,rs)}<p class="small muted">Her ülkenin kendi rütbe adları, Türk Silahlı Kuvvetleri'ndeki karşılıklarıyla eşleştirilmiştir. Ülkeler arasında rütbe sayısı farklı olduğu için bazı basamaklar atama veya kıdem kademesi olarak gösterilir; (k) kurgusal, (tarihî) günümüzde verilmeyen rütbedir. Apolet çizimleri stilizedir.</p></div>`;
}
function vHow(){
 const c=(t,x)=>`<div class="card"><h2 class="stencil" style="font-size:21px">${t}</h2><p>${x}</p></div>`;
 return c('Temel kural','Her gün 3 eylem hakkın var. Görev, antrenman, psikolojik destek, sosyal faaliyet ya da buluşma bir hak harcar. Öğün seçmek, mesaj atmak ve günlük yazmak ücretsizdir. Gün bitince her şey hesaplanır ve sabah raporunda o gün yapman gerekenler önerilir.')
 +c('Ülke ve ordu','Seçtiğin ülke ordunu, birliklerini, rütbe adlarını, yemekleri, kurmay haritasını ve oyunun renklerini belirler.')
 +c('Görevler','Her gün iki seçenekli bir görev emri gelir. Doğru karar komutanın güvenini artırır; yanlış kararda azar işitirsin.')
 +c('Eğitim','Dövüş sporları, kondisyon ve dört askerî eğitim (atış poligonu, harp oyunu, arazi okuma, tim liderliği) var. İstersen mini oyunu oynarsın, istersen otomatik simüle edersin.')
 +c('Terfi','Tecrübe yetmez: rütbede belirli gün, komutan güveni ve bazı rütbelerde strateji/liderlik eşiği gerekir. En üst rütbe yalnızca savaşta komuta zaferiyle gelir.')
 +c('Beden ve zihin','Haftada en az 3 gün spor yap. Kötü beslenme gelişimini yavaşlatır. Ruh halin hikâyene göre başlar ve uyku, ilişkiler, sosyal hayat ve psikolojik destekle değişir.');
}
function vSettings(){
 const tm=S?S.trainMode:'ask';
 return `<div class="card"><div class="sec-h"><h2>Antrenman modu</h2></div>${S?`<div class="seg">${[['ask','Sor'],['play','Mini oyun'],['auto','Otomatik']].map(([v,n])=>`<button class="${tm===v?'on':''}" data-a="tmode" data-v="${v}">${n}</button>`).join('')}</div>`:'<p class="small muted">Oyun başladığında ayarlanır.</p>'}</div>
 <div class="card"><div class="sec-h"><h2>Kayıt</h2></div><p class="small muted">Oyun her adımda bu cihaza otomatik kaydedilir.</p>
 ${loadSave()?(UI.confirmReset?'<button class="btn warn block" data-a="reset2">Evet, kaydı kalıcı olarak sil</button>':'<button class="btn ghost block" data-a="reset">Kayıtlı oyunu sil</button>'):'<p class="small muted">Kayıtlı oyun yok.</p>'}</div>`;
}
/* ============ BAŞLIK SAHNESİ ============ */
let TRAF=null;
function stopTitle(){if(TRAF)cancelAnimationFrame(TRAF);TRAF=null}
function titleScene(){
 const cv=$('#tcv');if(!cv)return;const ctx=cv.getContext('2d');const red=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const sv=loadSave();let nat=sv?sv.nation:'TR';let fi=0;const imgs={};
 const getImg=k=>{if(!imgs[k]){const im=new Image();im.src='data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="150" height="100">${flagInner(k)}</svg>`);imgs[k]=im}return imgs[k]};
 NK.forEach(getImg);const parts=[...Array(40)].map(()=>[R(),R(),.2+R()*.8]);const t0=performance.now();
 function draw(now){const w=cv.clientWidth,h=cv.clientHeight,dpr=devicePixelRatio||1;if(cv.width!==Math.round(w*dpr)){cv.width=w*dpr;cv.height=h*dpr}
  ctx.setTransform(dpr,0,0,dpr,0,0);const t=Math.max(0,(now-t0)/1000);if(!sv||!NAT[nat])nat=NK[Math.floor(t/3.5)%NK.length];const acc=NAT[nat].th.acc;
  let g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'#0c0e12');g.addColorStop(.42,shade(acc,-.72));g.addColorStop(.58,shade(acc,-.35));g.addColorStop(.62,'#151510');g.addColorStop(1,'#0a0b08');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  ctx.fillStyle=shade(acc,.2);ctx.globalAlpha=.85;ctx.beginPath();ctx.arc(w*.3,h*.5,Math.min(w,h)*.12,0,6.3);ctx.fill();ctx.globalAlpha=1;
  const ridge=(yb,amp,f,c,ph)=>{ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(0,h);for(let x=0;x<=w;x+=6)ctx.lineTo(x,yb-Math.abs(Math.sin(x*f+ph))*amp-Math.sin(x*f*2.3+ph)*amp*.3);ctx.lineTo(w,h);ctx.fill()};
  ridge(h*.56,h*.08,.008,'#1c2019',1);ridge(h*.6,h*.06,.013,'#141712',2.3);
  const gx=w*.68,gy=h*.62-6;ctx.fillStyle='#090a07';ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(0,h*.66);ctx.quadraticCurveTo(w*.4,h*.6,gx,gy+4);ctx.quadraticCurveTo(w*.9,h*.6,w,h*.63);ctx.lineTo(w,h);ctx.fill();
  // asker
  ctx.save();ctx.translate(gx-26,gy);ctx.fillStyle='#070806';ctx.beginPath();ctx.ellipse(0,-58,7,7.5,0,0,6.3);ctx.fill();ctx.beginPath();ctx.ellipse(0,-63,9,5,0,Math.PI,0);ctx.fill();
  ctx.beginPath();ctx.moveTo(-11,-50);ctx.lineTo(11,-50);ctx.lineTo(9,-22);ctx.lineTo(-9,-22);ctx.fill();ctx.fillRect(-9,-24,7,26);ctx.fillRect(2,-24,7,26);ctx.save();ctx.translate(6,-42);ctx.rotate(-1.05);ctx.fillRect(0,-2,40,4);ctx.fillRect(-4,-4,12,8);ctx.restore();ctx.fillRect(-13,-48,4,20);ctx.restore();
  // bayrak direği
  const px=gx+16,py=gy+2;ctx.strokeStyle='#0d0e0b';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(px,py-118);ctx.stroke();
  const im=getImg(nat);if(im.complete&&im.naturalWidth){const FW=78,FH=52,N=26;for(let i=0;i<N;i++){const u=i/N;const off=Math.sin(u*5-t*3.2)*6*u;const sh=.82+Math.sin(u*5-t*3.2+1)*.18;ctx.globalAlpha=1;ctx.drawImage(im,u*150,0,150/N+1,100,px+u*FW,py-116+off,FW/N+.6,FH);ctx.fillStyle=`rgba(0,0,0,${(1-sh)*1.6})`;ctx.fillRect(px+u*FW,py-116+off,FW/N+.6,FH)}}
  parts.forEach(p=>{const y=(p[1]-t*.02*p[2])%1;const yy=(y<0?y+1:y)*h;ctx.fillStyle=`rgba(255,${180+p[2]*60},120,${.15+p[2]*.35})`;ctx.fillRect(p[0]*w+Math.sin(t+p[0]*9)*8,yy,1.6,1.6)});
  g=ctx.createLinearGradient(0,h*.5,0,h);g.addColorStop(0,'rgba(10,11,8,0)');g.addColorStop(1,'rgba(10,11,8,.94)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  if(!red)TRAF=requestAnimationFrame(draw)}
 stopTitle();TRAF=requestAnimationFrame(draw);
}
