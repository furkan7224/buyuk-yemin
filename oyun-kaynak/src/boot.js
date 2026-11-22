/* ============ OLAY BAĞLAMA ============ */
const A={
 new(){UI.scr='story';UI.d=newDraft();S=null;render()},
 cont(){S=loadSave();if(!S)return;fixS();UI.scr='game';UI.tab='hq';render()},
 ledger(){UI.prev=UI.scr;UI.scr='ledger';render()}, howto(){UI.prev=UI.scr;UI.scr='howto';render()}, settings(){UI.prev=UI.scr==='settings'?UI.prev:UI.scr;UI.scr='settings';UI.confirmReset=false;render()},
 back(){UI.scr=UI.prev&&UI.prev!==UI.scr?UI.prev:(S?'game':'title');render()},
 home(){UI.scr='title';UI.confirmReset=false;S=null;render()},
 lnat(v){UI.lnat=v;render()}, lrs(v){UI.lrs=v;render()},
 trauma(v){UI.d.trauma=v;if(v==='esi')UI.d.rel='bekar';render()},
 toCreate(){if(UI.d.story.trim().length<40)return toast('Hikâyeni biraz daha anlat: en az 40 karakter.');if(!UI.d.trauma)return toast('Hikâyenin çekirdeğini seç.');UI.scr='create';render();$('#scr')?.scrollTo(0,0)},
 toStory(){UI.scr='story';render()},
 nation(v){UI.d.nation=v;render()}, branch(v){UI.d.branch=v;render()}, path(v){UI.d.path=v;render()}, sport(v){UI.d.sport=UI.d.sport===v?'':v;render()}, rel(v){UI.d.rel=v;render()},
 look(v){const[k,x]=v.split('|');const L=UI.d.look;L[k]=(k==='g'||k==='hs'||k==='beard')?x:+x;if(k==='hat')L.hat=!!+x;if(k==='g'&&x==='k')L.beard='yok';render()},
 start(){const d=UI.d;if(d.name.trim().length<2)return toast('Adını yaz, asker.');const a=+d.age;if(!(a>=18&&a<=35))return toast('Yaş 18 ile 35 arasında olmalı.');if(!d.sport)return toast('Başlamak için bir dövüş sporu seç.');newGame()},
 tab(v){UI.anim=UI.tab!==v;UI.tab=v;render();$('#scr')?.scrollTo(0,0)},
 goto(v){if(MO){Q.length=0;MO=null;$('#modal').hidden=true}UI.tab=v;if(v==='life'&&!UI.lifeLock){UI.life=S.st.mental<30?'mind':S.nutri<52?'food':S.fatigue>65?'mind':S.partner&&S.partner.aff<40?'love':'mind'}render();$('#scr')?.scrollTo(0,0)},
 lifetab(v){UI.anim=true;UI.life=v;render()},
 endDay, train, psy, report:staffReport, volunteer, soc:social,
 sleep(v){S.sleep=+v;save();render()},
 meal(v){const[k,i]=v.split('|');S.meals[k]=S.meals[k]===+i?null:+i;save();render()},
 extra(v){S.ex=S.ex.includes(v)?S.ex.filter(x=>x!==v):[...S.ex,v];save();render()},
 mopt(v){doMission(v)},
 tmode(v){S.trainMode=v;save();render()},
 mggo(){mgGo()},
 mgquit(){if(!MG)return mgClose();const id=MG.id,done=MG.done,sc=MG.score,l=MG.learn;mgClose();MG=null;done?applyTrain(id,.6+sc,sc,l):applyTrain(id,.8,null,false)},
 mgdone(){const id=MG.id,sc=MG.score,l=MG.learn,dbl=MG.dbl;mgClose();MG=null;applyTrain(id,(.6+sc)*(dbl?2:1),sc,l)},
 opick(v){opPick(+v)},
 equip, out:outAct, kog:kogusAct, oprep:opPrep, letter:letterStart, trade:tradeDeal, base:baseOpen, baseact:baseAct, declare:warDeclare, dsel(v){UI.dsel=v;render()}, friend:friendAct, useleave:useLeave,
 wsub(v){UI.anim=true;UI.tab='world';UI.wsub=v;render();$('#scr')?.scrollTo(0,0)}, nch(v){UI.nch=v;render()}, resp:respond, reg:regionAct,
 ally(v){diplo(v,'ally')}, talk(v){diplo(v,'talk')}, leave(v){diplo(v,'leave')}, op(v){opStart(v)},
 transfer:transferBranch,
 reset(){UI.confirmReset=true;render()},
 reset2(){try{localStorage.removeItem(KEY)}catch(e){}S=null;UI.confirmReset=false;UI.scr='title';render()},
 mc(v){const c=(MO&&MO.ch||[])[+v];c&&c.fn&&c.fn();if(S)save();nextModal()},
};
Object.assign(A,A8,A9,A10,A11,A13,A14,A15,A16,A17,A19,A20,A26,A29,A31,A32,A33,typeof A36!=='undefined'?A36:{},typeof A40!=='undefined'?A40:{},typeof A42!=='undefined'?A42:{});
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b||b.disabled)return;const f=A[b.dataset.a];if(f){const sc=document.getElementById('scr')?.scrollTop;f(b.dataset.v);const s=document.getElementById('scr');if(s&&sc!=null&&!['tab','toCreate','goto','lifetab','cont','new'].includes(b.dataset.a))s.scrollTop=sc}});
document.addEventListener('input',e=>{const lf=e.target.dataset.lf;
 if(lf){UI.d.look[lf]=+e.target.value;$('#v'+lf).textContent=e.target.value;const bl=brList(UI.d.nation);$('#pv').innerHTML=avatar(124,bl.find(b=>b.id===UI.d.branch)||bl[0],PATHS.find(p=>p.id===UI.d.path).r,UI.d.look,UI.d.nation);$('#bfx').textContent=bfxText(UI.d.look);return}
 const f=e.target.dataset.f;if(!f)return;UI.d[f]=e.target.value;
 if(f==='name'&&$('#pv')){const bl=brList(UI.d.nation);$('#pv').innerHTML=avatar(124,bl.find(b=>b.id===UI.d.branch)||bl[0],PATHS.find(p=>p.id===UI.d.path).r,UI.d.look,UI.d.nation)}
 if(f==='story'){const c=$('#cnt');if(c)c.textContent=e.target.value.length+' / 2000 · isteğe bağlı'}});
window.claude?.hot?.snapshot?.(()=>({S,scr:UI.scr,tab:UI.tab}));
function boot(d){if(d&&d.S){S=d.S;fixS();UI.scr=d.scr||'game';UI.tab=d.tab||'hq'}render()}
try{i18nInit()}catch(e){}
window.claude?.hot?.ready?window.claude.hot.ready(boot):boot(window.claude?.hot?.data??{});
