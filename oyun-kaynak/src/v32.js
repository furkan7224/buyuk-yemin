const P32=k=>{try{if(typeof price33==='function')return price33(k)}catch(e){}return({story:'₺99,99',premium:'₺299,99'})[k]};
/* =====================================================================
   v32 · HİKÂYE MODU MOTORU
   Hikâyeler TALES dizisine registerTale() ile eklenir.
   Sahne: {c:bölüm, ti?, sp?:konuşan, b:metin|fn(st,fl), art?:anahtar, ch:[seçenek], end?:{...}}
   Seçenek: {t, go?, fx?, set?, req?, why?, p?, ok?, no?, okfx?, nofx?, okset?, noset?}
   ===================================================================== */
const TALES=[];
function registerTale(t){TALES.push(t)}
/* ---- satın alma hakları (mağaza güncellemesinde IAP'ye bağlanacak) ---- */
const ENT32=(()=>{let e={};try{e=JSON.parse(localStorage.getItem('by_ent')||'{}')}catch(x){}return e})();
function entSave32(){try{localStorage.setItem('by_ent',JSON.stringify(ENT32))}catch(e){}}
const hasStory32=()=>!!(ENT32.story||ENT32.premium);
/* ---- ilerleme kaydı ---- */
let TP32={};try{TP32=JSON.parse(localStorage.getItem('by_tales')||'{}')}catch(e){TP32={}}
function tpSave32(){try{localStorage.setItem('by_tales',JSON.stringify(TP32))}catch(e){}}
function tp32(id){return TP32[id]||(TP32[id]={run:null,done:[],plays:0})}
const T32={id:null};
const tale32=id=>TALES.find(t=>t.id===id);
const clampS32=v=>Math.max(0,Math.min(100,Math.round(v)));
const val32=(x,st,fl)=>typeof x==='function'?x(st,fl):x;
/* ---- metin biçimi: "— " ile başlayan satırlar konuşma, *...* vurgu ---- */
function fmt32(s){return String(s).split(/\n\n+/).map(p=>{p=p.trim();if(!p)return'';
 const q=/^— /.test(p);p=esc(p).replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\n/g,'<br>');
 return q?`<p class="tq">${p}</p>`:`<p>${p}</p>`}).join('')}

/* ---- oyun akışı ---- */
function talEnds32(t){return t.endings||Object.values(t.scenes).filter(s=>s.end).map(s=>s.end)}
function taleStart32(id,fresh){const t=tale32(id);const P=tp32(id);
 if(fresh||!P.run){P.run=t.custom?t.newRun():{sc:t.start,st:Object.assign({},t.stats),fl:{},hist:[],chSeen:-1};P.plays++}
 T32.id=id;UI.scr='tale';tpSave32();render();window.scrollTo(0,0)}
function taleScene32(){const t=tale32(T32.id),P=tp32(T32.id);return t.scenes[P.run.sc]}
function taleChoose32(i){const t=tale32(T32.id),P=tp32(T32.id),R=P.run,sc=t.scenes[R.sc];if(!sc||sc.end)return;
 const opts=taleOpts32(sc,R);const o=opts[+i];if(!o||o._locked)return;
 let go=o.go,fx=o.fx,set=o.set,roll=null;
 if(o.p!=null){const p=val32(o.p,R.st,R.fl);const ok=Math.random()<p;roll={p,ok};go=ok?o.ok:o.no;fx=Object.assign({},o.fx||{},ok?o.okfx:o.nofx);set=Object.assign({},o.set||{},ok?o.okset:o.noset)}
 const before=Object.assign({},R.st);
 if(fx)for(const k in fx)if(k in R.st)R.st[k]=clampS32(R.st[k]+val32(fx[k],R.st,R.fl));
 if(set)Object.assign(R.fl,set);
 R.hist.push(R.sc);
 /* göstergeler sıfırlanırsa hikâyenin kendi yenilgi sahnesi */
 if(typeof t.fail==='function'){const f=t.fail(R.st,R.fl,sc.c);if(f&&t.scenes[f]){go=f;R.fl._failC=sc.c}}
 else if(t.fail)for(const k in t.fail)if(R.st[k]<=0&&t.scenes[t.fail[k]]){go=t.fail[k];break}
 if(typeof go==='function')go=go(R.st,R.fl);
 if(!t.scenes[go]){console.error('Hikâye: sahne yok',T32.id,go);return}
 R.last={d:taleDelta32(before,R.st,t),roll};
 R.sc=go;tpSave32();render();const el=$('#tscr');if(el)el.scrollTop=0}
function taleDelta32(a,b,t){return t.statDefs.map(([k,n])=>[n,b[k]-a[k]]).filter(x=>x[1])}
function taleOpts32(sc,R){return (sc.ch||[]).filter(o=>!o.req||val32(o.req,R.st,R.fl)||o.why).map(o=>{const ok=!o.req||val32(o.req,R.st,R.fl);return ok?o:Object.assign({},o,{_locked:true})})}

/* ---- görünümler ---- */
function taleArt32(k,t){const A=t&&t.arts&&t.arts[k];return A?A():''}
function vTales32(){
 return `<div class="top gut"><button class="mini" data-a="back">‹ Geri</button><div class="who"><b>Hikâye modu</b><span>${hasStory32()?'Hikâye Paketi açık':'Her hikâyenin 1. bölümü ücretsiz'}</span></div></div>
 <div class="scr plain gut" id="scr"><p class="small muted">Elle yazılmış, kararlarınla şekillenen hikâyeler. Her hikâyenin birden fazla sonu var.</p>
 ${TALES.map(t=>{const P=tp32(t.id);const ends=talEnds32(t).length;return `<button class="tcard32" data-a="tale" data-v="${t.id}" style="--tc:${t.color}">
  <div class="tc-art">${taleArt32(t.cover,t)}</div><div class="tc-b"><span class="lbl">${esc(t.genre)}</span><b class="stencil">${esc(t.ti)}</b><small>${esc(t.sub)}</small>
  <div class="tc-m"><span>${t.chapters.length} bölüm</span><span>${P.done.length}/${ends} son</span>${P.run?'<span class="acc">Devam ediyor</span>':''}${!hasStory32()?'<span>1. bölüm ücretsiz</span>':''}</div></div></button>`}).join('')}
 ${TALES.length<4?`<div class="card tsoon32"><span class="lbl">Yakında</span><p class="small muted">Yeni hikâyeler hazırlanıyor.</p></div>`:''}</div>`}
function vTaleIntro32(t){const P=tp32(t.id);if(P.run&&(t.custom?P.run.end:(!t.scenes[P.run.sc]||t.scenes[P.run.sc].end))){P.run=null;tpSave32()}const ends=talEnds32(t);
 return `<div class="tintro32"><div class="ti-art">${taleArt32(t.cover,t)}</div><span class="lbl">${esc(t.genre)}</span><h2 class="stencil">${esc(t.ti)}</h2><p>${esc(t.pitch)}</p>
 <div class="ti-ch">${t.chapters.map((c,i)=>`<div class="${i>0&&!hasStory32()?'lk':''}"><i>${i+1}</i><span><b>${esc(c.ti)}</b><small>${esc(c.sub)}</small></span>${i===0&&!hasStory32()?'<em>Ücretsiz</em>':i>0&&!hasStory32()?'<em>Paket</em>':''}</div>`).join('')}</div>
 <div class="ti-end"><span class="lbl">Bulduğun sonlar · ${P.done.length}/${ends.length}</span><div>${ends.map(e=>P.done.includes(e.k)?`<span class="ok">${esc(e.ti)}</span>`:'<span>???</span>').join('')}</div></div>
 ${P.run?`<button class="btn block" data-a="talego">Kaldığın yerden devam et</button><button class="btn ghost block" data-a="talenew">Baştan başla</button>`:`<button class="btn block" data-a="talenew">Hikâyeye başla</button>`}</div>`}
function vTale32(){const t=tale32(T32.id);if(!t){UI.scr='tales';return vTales32()}const P=tp32(t.id);
 if(!P.run||UI.tintro)return `<div class="top gut"><button class="mini" data-a="tales">‹ Hikâyeler</button><div class="who"><b>${esc(t.ti)}</b><span>${esc(t.genre)}</span></div></div><div class="scr plain gut" id="tscr">${vTaleIntro32(t)}</div>`;
 if(t.custom){const ci=t.chapterOf(P.run);const chp=t.chapters[ci]||t.chapters[0];const top=`<div class="top gut"><button class="mini" data-a="tales">‹ Hikâyeler</button><div class="who"><b>${esc(t.ti)}</b><span>${esc(t.subtitle?t.subtitle(P.run):chp.ti)}</span></div></div>`;
  if(ci>0&&!hasStory32()&&!P.run.end)return top+`<div class="scr plain gut" id="tscr">${vTaleLock32(t,chp,ci)}</div>`;
  if(P.run.end)return top+`<div class="scr plain gut tale32" id="tscr">${taleEndBlock32(t,P.run.end,t.endText(P.run),t.endArt?t.endArt(P.run):'')}</div>`;
  return top+`<div class="scr plain gut tale32" id="tscr">${t.view(P.run)}</div>`}
 const R=P.run,sc=t.scenes[R.sc];if(!sc){R.sc=t.start;return vTale32()}
 const chap=t.chapters[sc.c]||t.chapters[0];
 /* paket kilidi: 1. bölümden sonrası */
 if(sc.c>0&&!hasStory32())return `<div class="top gut"><button class="mini" data-a="tales">‹ Hikâyeler</button><div class="who"><b>${esc(t.ti)}</b><span>${esc(chap.ti)}</span></div></div><div class="scr plain gut" id="tscr">${vTaleLock32(t,chap,sc.c)}</div>`;
 const newCh=R.chSeen!==sc.c;if(newCh){R.chSeen=sc.c;tpSave32()}
 const stats=`<div class="tst32">${t.statDefs.map(([k,n,c])=>`<div><span>${esc(n)}</span><i><em style="width:${R.st[k]}%;background:${c}"></em></i><b class="num">${R.st[k]}</b></div>`).join('')}</div>`;
 const last=R.last&&R.last.d.length?`<div class="tdl32">${R.last.roll?`<span class="${R.last.roll.ok?'p':'n'}">${R.last.roll.ok?'Başardın':'Başaramadın'}</span>`:''}${R.last.d.map(([n,v])=>`<span class="${v>0?'p':'n'}">${esc(n)} ${v>0?'+':''}${v}</span>`).join('')}</div>`:(R.last&&R.last.roll?`<div class="tdl32"><span class="${R.last.roll.ok?'p':'n'}">${R.last.roll.ok?'Başardın':'Başaramadın'}</span></div>`:'');
 const body=val32(sc.b,R.st,R.fl);
 if(sc.end)return vTaleEnd32(t,sc,R,body);
 const opts=taleOpts32(sc,R);
 return `<div class="top gut"><button class="mini" data-a="tales">‹ Hikâyeler</button><div class="who"><b>${esc(t.ti)}</b><span>Bölüm ${sc.c+1} · ${esc(chap.ti)}</span></div></div>
 <div class="scr plain gut tale32" id="tscr">${newCh?`<div class="tchap32"><span>Bölüm ${sc.c+1}</span><b class="stencil">${esc(chap.ti)}</b></div>`:''}
 ${stats}${last}
 ${sc.art?`<div class="tart32">${taleArt32(val32(sc.art,R.st,R.fl),t)}</div>`:''}
 <div class="tbody32">${sc.ti?`<h3 class="stencil">${esc(sc.ti)}</h3>`:''}${fmt32(body)}</div>
 <div class="topts32">${opts.map((o,i)=>{const p=o.p!=null?Math.round(val32(o.p,R.st,R.fl)*100):null;return `<button class="opt op2${o._locked?' lk':''}" data-a="tch" data-v="${i}"${o._locked?' disabled':''}><span class="k">${'ABCD'[i]}</span><span class="grow">${esc(val32(o.t,R.st,R.fl))}${p!=null?`<span class="tag">Başarı şansı %${p}</span>`:''}${o._locked?`<span class="tag">${esc(o.why)}</span>`:''}</span></button>`}).join('')}</div></div>`}
function vTaleLock32(t,chap,ci){return `<div class="tlock32"><div class="ti-art">${taleArt32(t.cover,t)}</div><span class="lbl">Bölüm ${ci+1} · ${esc(chap.ti)}</span><h2 class="stencil">Hikâye devam ediyor…</h2>
 <p>Ücretsiz bölümü bitirdin. <b>${esc(t.ti)}</b> hikâyesinin devamı ve diğer tüm hikâyeler <b>Hikâye Paketi</b>'nde. Kaldığın yer kaydedildi; paketi alınca buradan devam edersin.</p>
 <div class="fx">${TALES.map(x=>`<span>${esc(x.ti)}</span>`).join('')}</div>
 <button class="btn block" data-a="buy" data-v="story">Hikâye Paketi · ${P32('story')}</button><button class="btn ghost block" data-a="buy" data-v="premium">Premium · ${P32('premium')} (paket dahil)</button>
 <button class="btn ghost block" data-a="tales">Hikâyelere dön</button></div>`}
function taleEndBlock32(t,k,body,art){const P=tp32(t.id);const E=talEnds32(t).find(e=>e.k===k)||{k,ti:k};const first=!P.done.includes(E.k);
 if(first){try{fl35('story_end',T32.id+':'+E.k)}catch(e){}P.done.push(E.k);if(E.medal){TP32._medals=TP32._medals||[];if(!TP32._medals.includes(E.medal))TP32._medals.push(E.medal)}tpSave32()}
 const ends=talEnds32(t);
 return `<div class="tend32 ${E.tone||''}"><span class="lbl">Son · ${P.done.length}/${ends.length}</span><h2 class="stencil">${esc(E.ti)}</h2>${first?'<span class="chip" style="color:var(--acc)">Yeni son açıldı</span>':''}</div>
 ${art?`<div class="tart32">${art}</div>`:''}<div class="tbody32">${fmt32(body)}</div>
 ${E.medal?`<div class="card tmed32"><div class="row"><div class="tm-i">★</div><div class="grow"><span class="lbl">Kariyer ödülü</span><b>${esc(E.medal)}</b><small class="muted">Kariyer modundaki profilinde görünür.</small></div></div></div>`:''}
 <div class="card"><span class="lbl">Bulduğun sonlar</span><div class="ti-end"><div>${ends.map(e=>P.done.includes(e.k)?`<span class="ok">${esc(e.ti)}</span>`:'<span>???</span>').join('')}</div></div></div>
 <button class="btn block" data-a="talenew">Tekrar oyna, başka bir son bul</button><button class="btn ghost block" data-a="tales">Hikâyelere dön</button>`}
function vTaleEnd32(t,sc,R,body){const P=tp32(t.id);const E=sc.end;const first=!P.done.includes(E.k);
 if(first){try{fl35('story_end',T32.id+':'+E.k)}catch(e){}P.done.push(E.k);if(E.medal){TP32._medals=TP32._medals||[];if(!TP32._medals.includes(E.medal))TP32._medals.push(E.medal)}tpSave32()}
 const ends=Object.values(t.scenes).filter(s=>s.end);
 return `<div class="top gut"><button class="mini" data-a="tales">‹ Hikâyeler</button><div class="who"><b>${esc(t.ti)}</b><span>Son</span></div></div>
 <div class="scr plain gut tale32" id="tscr"><div class="tend32 ${E.tone||''}"><span class="lbl">Son · ${P.done.length}/${ends.length}</span><h2 class="stencil">${esc(E.ti)}</h2>${first?'<span class="chip" style="color:var(--acc)">Yeni son açıldı</span>':''}</div>
 ${sc.art?`<div class="tart32">${taleArt32(val32(sc.art,R.st,R.fl),t)}</div>`:''}<div class="tbody32">${fmt32(body)}</div>
 ${E.medal?`<div class="card tmed32"><div class="row"><div class="tm-i">★</div><div class="grow"><span class="lbl">Kariyer ödülü</span><b>${esc(E.medal)}</b><small class="muted">Kariyer modundaki profilinde görünür.</small></div></div></div>`:''}
 <div class="card"><span class="lbl">Bulduğun sonlar</span><div class="ti-end"><div>${ends.map(s=>P.done.includes(s.end.k)?`<span class="ok">${esc(s.end.ti)}</span>`:'<span>???</span>').join('')}</div></div></div>
 <button class="btn block" data-a="talenew">Tekrar oyna, başka bir son bul</button><button class="btn ghost block" data-a="tales">Hikâyelere dön</button></div>`}

/* ---- yönlendirme ---- */
{const _r=render;render=function(){if(UI.scr==='tales'||UI.scr==='tale'){const app=$('#app');try{applyTheme(curNat())}catch(e){}
  if(typeof fictOff==='function'&&!S)fictOff();
  app.innerHTML=UI.scr==='tales'?vTales32():vTale32();try{camoBg()}catch(e){}try{stopTitle()}catch(e){}return}return _r()}}
{const _vt=vTitleX;vTitleX=function(){return _vt().replace('<button class="mrow" data-a="ledger">',`<button class="mrow tmrow32" data-a="tales"><span class="mi"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5C4.7 20 4 19.3 4 18.5z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5c.8 0 1.5-.7 1.5-1.5z"/></svg></span><span><b>Hikâye modu</b><small>Esir ve diğer hikâyeler · kararların sonu belirler</small></span><span class="chev">›</span></button><button class="mrow" data-a="ledger">`)}}
var A32={
 tales(){UI.prev=S?'game':'title';UI.scr='tales';UI.tintro=false;render();window.scrollTo(0,0)},
 tale(id){T32.id=id;UI.scr='tale';UI.tintro=true;render()},
 talego(){UI.tintro=false;taleStart32(T32.id,false)},
 talenew(){UI.tintro=false;taleStart32(T32.id,true)},
 tch(i){taleChoose32(i)},
 buy(k){if(typeof storeBuy==='function')return storeBuy(k);toast('Mağaza bir sonraki güncellemeyle açılacak.')}};
`Hikâye modu|Story mode|ストーリーモード|Modo historia|Mode histoire|Story-Modus
Hikâyeler|Stories|ストーリー|Historias|Histoires|Geschichten
Hikâyeye başla|Start the story|物語を始める|Empezar la historia|Commencer l'histoire|Geschichte starten
Kaldığın yerden devam et|Continue where you left off|続きから|Continuar donde lo dejaste|Reprendre où tu t'es arrêté|Dort weitermachen, wo du aufgehört hast
Baştan başla|Start over|最初から|Empezar de nuevo|Recommencer|Neu beginnen
Hikâyelere dön|Back to stories|ストーリー一覧へ|Volver a las historias|Retour aux histoires|Zurück zu den Geschichten
Tekrar oyna, başka bir son bul|Play again, find another ending|もう一度遊んで別の結末へ|Juega de nuevo y encuentra otro final|Rejoue et trouve une autre fin|Nochmal spielen, ein anderes Ende finden
Yeni son açıldı|New ending unlocked|新しい結末を解放|Nuevo final desbloqueado|Nouvelle fin débloquée|Neues Ende freigeschaltet
Hikâye devam ediyor…|The story continues…|物語は続く…|La historia continúa…|L'histoire continue…|Die Geschichte geht weiter…
Başardın|Success|成功|Lo lograste|Réussi|Geschafft
Başaramadın|Failed|失敗|Fallaste|Échoué|Gescheitert
Yakında|Coming soon|近日公開|Próximamente|Bientôt|Demnächst
Ücretsiz|Free|無料|Gratis|Gratuit|Kostenlos
Paket|Pack|パック|Paquete|Pack|Paket`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
/* kariyer profilinde hikâye madalyaları */
{const _vp=vProf;vProf=function(){const m=(TP32._medals||[]);const h=_vp();if(!m.length)return h;
 return `<div class="card tmed32"><div class="sec-h"><h2>Hikâye madalyaları</h2></div>${m.map(x=>`<div class="row"><div class="tm-i">★</div><div class="grow"><b>${esc(x)}</b><small class="muted">Hikâye modunda kazanıldı</small></div></div>`).join('')}</div>`+h}}
