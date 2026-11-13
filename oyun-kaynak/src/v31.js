/* =====================================================================
   v31 · Beta geri bildirimleri (1.0.1)
   - Şehre göre tayin (görev yeri)          - Rütbeyle uyumlu yaşlanma
   - Özel birliklerden davet (SAT, ÖKK...)   - Mareşal sonrası: cephe yok, kurum ve politika
   - Askerî fon müziği (aç/kapat)
   ===================================================================== */

/* ---------- YAŞ ---------- */
/* Her rütbede geçirilen ortalama yıl (gerçek kariyer süreleriyle orantılı). Er → Mareşal ≈ 35 yıl */
const YRS31=[.5,.5,1,1.5,1.5,1.5,1.5,1.5,2,2.5,3,3,3,3.5,2,2.5,2.5,2];
const typAge31=r=>20+YRS31.slice(0,r).reduce((a,b)=>a+b,0);
function ageF31(){return S&&S.ageF!=null?S.ageF:(S?S.age:21)}
function agePhys31(a=ageF31()){return a<=30?1:a<=40?1-(a-30)*.01:Math.max(.55,.9-(a-40)*.015)}
function ageWise31(a=ageF31()){return 1+Math.min(.2,Math.max(0,a-28)*.008)}
function ageInit31(){if(S.ageF!=null)return;const pa=(typeof PATHS!=='undefined'&&PATHS.find(p=>p.id===S.path))||{r:0};const st=Math.min(pa.r||0,S.rank);
 S.ageF=(+S.age||21)+YRS31.slice(st,S.rank).reduce((a,b)=>a+b,0);S.age=Math.floor(S.ageF)}
function ageDaily31(notes){if(S.ageF==null)ageInit31();const before=Math.floor(S.ageF);
 const typ=RANKS[S.rank]?RANKS[S.rank].d*1.45:8;const rate=S.rank>=18?1/24:(S.dIR<=typ*1.6?YRS31[S.rank]/typ:1/360);S.ageF+=rate;S.age=Math.floor(S.ageF);
 if(S.age>before){const a=S.age;const ms=a%10===0?` <b>${a}</b> yaş bir dönüm noktası.`:'';
  notes.push(`🎂 <b>Bugün ${a} yaşına girdin.</b>${S.partner?' '+esc(S.partner.name)+' sabah ilk sen uyanmadan mesaj atmış.':' Koğuşta küçük bir pasta kesildi.'}${ms}`);log(a+' yaşına girdin.');addSt('mental',3);
  if(a===40)notes.push('<span class="muted">Kırk yaşından sonra beden eskisi kadar hızlı gelişmez; ama tecrübe kararlarına derinlik katar.</span>');
  if(a===50)notes.push('<span class="muted">Elli yaş: sağlığına daha çok dikkat etmen gerekiyor. Beslenme ve uyku artık daha önemli.</span>')}
 if(S.ageF>=50)addSt('saglik',-.03*(S.ageF-49))}
/* yaş etkisi: fiziksel gelişim yavaşlar, strateji ve liderlik tecrübeyle hızlanır */
{const _addSt=addSt;addSt=function(k,v){if(S&&v>0){if(k==='guc'||k==='dayan'||k==='dovus')v*=agePhys31();else if(k==='strat'||k==='lider')v*=ageWise31()*(postType31()==='karargah'?1.1:1)}return _addSt(k,v)}}
/* saçlar zamanla kırlaşır */
HAIRC.push(['#6f6a62','Kırlaşmış']);
{const _av=avatar;avatar=function(sz,br,rk,lk,nat,n){if(!lk&&S&&S.look&&ageF31()>=46)lk=Object.assign({},S.look,{hc:ageF31()>=56?5:6});return _av(sz,br,rk,lk,nat,n)}}

/* ---------- GÖREV YERİ / TAYİN ---------- */
const PTN31={
 karargah:['Karargâh','Başkent, kurmay merkezi',['Komutan güveni haftada +1','Strateji ve liderlik gelişimi +%10']],
 sinir:['Sınır garnizonu','Tehdit hattına yakın zorlu bölge',['Zorlu bölge tazminatı: maaş +%20','Zor görev ihtimali (tecrübe ×1,25)','Ruh hali günde −0,3','Kayıp riski daha yüksek']],
 metropol:['Büyükşehir','Kalabalık, sosyal hayat canlı',['Ruh hali günde +0,4','Haftalık yaşam gideri: maaşın %8’i']],
 garnizon:['İç bölge garnizonu','Sakin ve düzenli kışla hayatı',['Yorgunluk günde −3','Ruh hali günde +0,2']]};
function postType31(i,nat){if(!S)return'garnizon';nat=nat||S.nation;i=i??S.post;const C=NAT[nat].cities;const c=C[i];if(!c)return'garnizon';if(c[3])return'karargah';if(i<=2)return'metropol';
 const th=NAT[nat].thr||[];const d=th.length?Math.min(...th.map(t=>hav([c[2],c[1]],[t[2],t[1]]))):9999;return d<=260?'sinir':'garnizon'}
function postCity31(){return S&&S.post!=null?NAT[S.nation].cities[S.post]:null}
function postInit31(first){if(S.post!=null&&NAT[S.nation].cities[S.post])return;const C=NAT[S.nation].cities;const idx=C.map((_,i)=>i);
 let pool=idx.filter(i=>!C[i][3]);const sn=pool.filter(i=>postType31(i)==='sinir');if(S.rank>=14)pool=idx.filter(i=>C[i][3]);else if(sn.length&&R()<.4)pool=sn;
 S.post=pick(pool.length?pool:idx);S.postSince=S.day;S.postCd=S.day+10;
 if(first)log('İlk görev yerin: '+C[S.post][0]+'.')}
function tayinChance31(i){const t=postType31(i);let p=.4+(S.trust-50)/120+T()*.07;p+=({sinir:.3,garnizon:.1,metropol:-.1,karargah:-.2+(S.rank>=11?.25:0)})[t];return clamp(p,.1,.95)}
function postMap31(i){try{const k=S.nation,f=projFor(k,340,200,14);const c=NAT[k].cities[i];const[x,y]=f(c[2],c[1]);
 return `<div class="mapwrap">${nationMap(k,f,`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="none" stroke="var(--acc)" stroke-width="2.2"><animate attributeName="r" values="6;13;6" dur="1.8s" repeatCount="indefinite"/></circle><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.6" fill="var(--acc)"/>`)}</div>`}catch(e){return''}}
function postMove31(i,why){const C=NAT[S.nation].cities;const old=S.post;S.post=i;S.postSince=S.day;S.postCd=S.day+20;
 const t=postType31(i);let extra='';
 if(S.partner&&old!==i){if(S.partner.m){addSt('mental',2);extra=`<p class="small">${esc(S.partner.name)} da seninle yeni lojmana taşınıyor.</p>`}else{S.partner.aff=clamp(S.partner.aff-6);extra=`<p class="small red">${esc(S.partner.name)} ile aranıza mesafe girdi. İlişkiyi ayakta tutmak için daha çok emek gerekecek.</p>`}}
 log('Tayin: '+C[i][0]+' ('+PTN31[t][0]+').');try{newWeather()}catch(e){}
 pushModal({k:'Tayin',ti:C[i][0]+' · '+PTN31[t][0],art:postMap31(i),body:`<p>${why||'Yeni görev yerine katıldın.'}</p>${extra}<div class="fx">${PTN31[t][2].map(x=>`<span class="p">${esc(x)}</span>`).join('')}</div>`})}
function tayinOpen31(){if(S.rank>=18)return toast('Görev yerin başkenttir; devlet görevi tayin kapsamında değildir.');
 if(S.postCd>S.day)return toast(`Yeni tayin talebi için ${S.postCd-S.day} gün beklemelisin.`);
 const C=NAT[S.nation].cities;const L=C.map((c,i)=>i).filter(i=>i!==S.post);
 pushModal({k:'Personel Başkanlığı',ti:'Tayin talebi',body:`<p>Hangi şehre tayin istiyorsun? Dilekçe <b>1 eylem</b> harcar. Kabul şansı komutan güvenine, rütbene ve şehrin türüne bağlıdır: zorlu bölgeler kolay, başkent zor kabul edilir.</p>`,
  ch:[...L.map(i=>({t:`${C[i][0]} · ${PTN31[postType31(i)][0]} · %${Math.round(tayinChance31(i)*100)}`,fn:()=>setTimeout(()=>tayinReq31(i),0)})),{t:'Vazgeç'}],neu:1})}
function tayinReq31(i){if(!useAP())return;const C=NAT[S.nation].cities;
 if(R()<tayinChance31(i)){postMove31(i,`Dilekçen kabul edildi. <b>${esc(C[i][0])}</b>’deki yeni birliğine katıldın.`)}
 else{S.postCd=S.day+7;log('Tayin talebi reddedildi: '+C[i][0]+'.');pushModal({k:'Personel Başkanlığı',ti:'Talebin reddedildi',body:`<p>${pick(['Hedef birlikte kadro dolu.','Komutanın seni bırakmak istemiyor; şu an birliğine ihtiyaç var.','Personel Başkanlığı talebini ihtiyaç fazlası olarak değerlendirdi.'])} 7 gün sonra yeniden dilekçe verebilirsin.</p>`})}
 save();render()}
/* terfiyle gelen tayin: devlet seni ihtiyaca göre yeni bir şehre gönderir */
function tayinPromo31(tierUp){const C=NAT[S.nation].cities;if(S.rank>=18){if(!C[S.post]||!C[S.post][3]){const ci=C.findIndex(c=>c[3]);if(ci>=0){S.post=ci;S.postSince=S.day;log('Görev yeri: '+C[ci][0]+' (Genelkurmay).')}}return}
 if(!tierUp&&R()>.55)return;const idx=C.map((_,i)=>i).filter(i=>i!==S.post);let pool=idx;
 if(S.rank>=14&&R()<.5)pool=idx.filter(i=>C[i][3]);else if(R()<.45){const sn=idx.filter(i=>postType31(i)==='sinir');if(sn.length)pool=sn}
 const to=pick(pool.length?pool:idx);const t=postType31(to);
 pushModal({k:'Tayin dönemi',ti:'Yeni görev yerin: '+C[to][0],art:postMap31(to),body:`<p>Terfinle birlikte Personel Başkanlığı seni <b>${esc(C[to][0])}</b>’e (${esc(PTN31[t][0].toLocaleLowerCase('tr'))}) tayin etti.</p><div class="fx">${PTN31[t][2].map(x=>`<span>${esc(x)}</span>`).join('')}</div>`,
  ch:[{t:'Emri kabul et',fn:()=>setTimeout(()=>postMove31(to,'Emri tereddütsüz kabul ettin. Komutanlar bunu not etti.'),0)},
   {t:'Kalmak için dilekçe ver',fn:()=>{const ok=R()<clamp(.3+(S.trust-50)/100,.1,.75);if(ok){S.trust=clamp(S.trust-1);S.postCd=S.day+10;log('Tayin itirazı kabul edildi.');setTimeout(()=>pushModal({k:'Personel Başkanlığı',ti:'İtirazın kabul edildi',body:`<p>${esc(C[S.post][0])}’de görevine devam ediyorsun.</p>`}),0)}else{S.trust=clamp(S.trust-3);setTimeout(()=>postMove31(to,'İtirazın reddedildi; emir yerine getirildi. Komutan güveni −3.'),0)}}}]})}
function postCard31(){const C=NAT[S.nation].cities;if(S.post==null||!C[S.post])return'';const t=postType31();const c=C[S.post];const a=ageF31();const ta=typAge31(S.rank);
 const wise=Math.round((ageWise31(a)-1)*100),phys=Math.round(agePhys31(a)*100);
 return `<div class="card p31"><div class="sec-h"><h2>Görev yerin</h2><span class="chip" style="color:var(--acc)">${esc(PTN31[t][0])}</span></div>
 <div class="row" style="align-items:flex-start;gap:12px"><div class="p31pin">${ico('pin',22)}</div><div class="grow"><b class="stencil" style="font-size:22px;line-height:1">${esc(c[0])}</b><div class="small muted">${esc(PTN31[t][1])} · ${S.day-(S.postSince||1)} gündür burada</div></div></div>
 <div class="fx">${PTN31[t][2].map(x=>`<span>${esc(x)}</span>`).join('')}</div>
 <div class="age31"><div><span class="lbl">Yaş</span><b class="num">${Math.floor(a)}</b></div><div class="grow small"><span class="muted">Bu rütbedeki akranların ortalama ${Math.round(ta)} yaşında.</span><br>${phys<100?`Fiziksel gelişim <b class="${phys<80?'red':''}">%${phys}</b>`:'Fiziksel gelişim tam'}${wise?` · Tecrübe bonusu <b class="green">+%${wise}</b>`:''}</div></div>
 ${S.rank<18?`<button class="btn ghost block" data-a="tayin">${S.postCd>S.day?`Tayin talebi · ${S.postCd-S.day} gün sonra`:'Tayin talebi ver'}</button>`:''}</div>`}
/* görev yeri etkileri */
function postDaily31(notes){const t=postType31();
 if(t==='sinir'){addSt('mental',-.3);if(!S.nextHard&&R()<.22){S.nextHard=true;notes.push('<span style="color:var(--amber)">Sınır hattında hareketlilik var: yarın zor bir görev bekleniyor (tecrübe ×1,25).</span>')}}
 if(t==='metropol')addSt('mental',.4);
 if(t==='garnizon'){S.fatigue=clamp(S.fatigue-3);addSt('mental',.2)}
 if(S.day%7===0){if(t==='karargah')S.trust=clamp(S.trust+1);if(t==='metropol'){const g=Math.round(maas()*.08);S.money-=g;notes.push(`Büyükşehirde haftalık yaşam gideri: <b>${money(g)}</b>.`)}}}
{const _m=maas;maas=function(...a){const v=_m(...a);return S&&postType31()==='sinir'&&S.rank<18?Math.round(v*1.2):v}}
{const _nw=newWeather;newWeather=function(c){return _nw(c||postCity31()||undefined)}}
function postKia(kp){return postType31()==='sinir'?Math.min(1,kp*1.15):kp}

/* ---------- ÖZEL BİRLİK DAVETLERİ ---------- */
function eliteList31(){return brList(S.nation).filter(b=>b.lock&&b.id!==S.branch)}
function inviteDaily31(){if(S.rank>13||S.rank>=18||S.inv&&S.inv.exp>=S.day)return;if(S.inv&&S.inv.exp<S.day)S.inv=null;S.invCd=S.invCd||{};
 const meds=(S.medals||[]).length;const won=S.mRes&&S.mRes.res===2;
 const el=eliteList31().filter(b=>{const L=b.lock;return S.rank>=L.rank&&!(S.invCd[b.id]>S.day)&&S.st.dovus>=L.dovus*.8&&S.st.dayan>=L.dayan*.8&&S.st.nisan>=L.nisan*.8&&S.trust>=42});
 if(!el.length)return;const p=Math.min(.25,.05+meds*.01+(won?.06:0)+(S.trust>65?.04:0));if(R()>p)return;
 const b=pick(el);S.inv={id:b.id,d:S.day,exp:S.day+5};log(b.n+' seçmelerine davet edildin.');
 setTimeout(()=>inviteModal31(),0)}
function inviteModal31(){const b=S.inv&&brList(S.nation).find(x=>x.id===S.inv.id);if(!b)return;
 pushModal({k:'Davet mektubu',ti:b.n+' seni istiyor',art:`<div class="letter"><div class="seal">${flag(S.nation,26)}</div><div class="lh">${esc(b.n)} Komutanlığı<br><span>Sayın ${esc(myRank())} ${esc(S.name)}</span></div><p>Son harekâtlardaki soğukkanlılığın ve sahadaki performansın komutanlığımızın dikkatini çekti. Seni bir sonraki seçme dönemine <b>davetli aday</b> olarak çağırıyoruz.</p><p>Davetli adaylar ön elemeden muaf tutulur. Davetimiz ${S.inv.exp-S.day+1} gün geçerlidir.</p><div class="sig">${esc(b.n)} Seçme Kurulu</div></div>`,
  body:`<p class="small muted">Kabul edersen seçmeye hemen girersin. Şartların sana yaklaşık %${Math.round(inviteP31(b)*100)} başarı şansı veriyor.</p>`,
  ch:[{t:'Daveti kabul et, seçmeye gir',fn:()=>setTimeout(()=>inviteAccept31(),0)},{t:'Düşüneceğim (profilde bekler)'},{t:'Teşekkür et, birliğimde kalacağım',fn:()=>{S.invCd=S.invCd||{};S.invCd[b.id]=S.day+25;S.inv=null;S.trust=clamp(S.trust+3);log(b.n+' davetini kibarca geri çevirdin.');toast('Birliğine bağlılığın takdir edildi. Komutan güveni +3')}}]})}
function inviteP31(b){const L=b.lock;return clamp(.6+(S.st.dovus+S.st.dayan+S.st.nisan-L.dovus-L.dayan-L.nisan)/90,.35,.95)}
function inviteAccept31(){const b=S.inv&&brList(S.nation).find(x=>x.id===S.inv.id);if(!b)return;S.inv=null;S.invCd=S.invCd||{};
 if(R()<inviteP31(b)){S.branch=b.id;addSt('mental',12);S.trust=clamp(S.trust+8);log('Davetle '+b.n+' saflarına katıldın.');
  pushModal({k:'Seçme',ti:'Davetle gelen bere',art:avatar(110),body:`<p>Davetli aday olarak girdiğin seçmenin son gününde bereni <b>${esc(b.n)}</b> komutanı kendi eliyle taktı. Davetle gelenler azdır; adın artık birlikte konuşuluyor.</p><div class="fx"><span class="p">Ruh hali +12</span><span class="p">Komutan güveni +8</span></div>`})}
 else{S.invCd[b.id]=S.day+15;addSt('mental',-6);S.fatigue=clamp(S.fatigue+25);log(b.n+' seçmesinde son aşamada elendin.');
  pushModal({k:'Seçme',ti:'Son aşamada elendin',body:'<p>Son gün, yük yürüyüşünün son kilometrelerinde bedenin teslim oldu. Seçme kurulu kapıyı kapatmadı: 15 gün sonra yeniden davet alabilirsin.</p>'})}
 save();render()}
function inviteCard31(){const b=S.inv&&S.inv.exp>=S.day&&brList(S.nation).find(x=>x.id===S.inv.id);if(!b)return'';
 return `<div class="card inv31"><div class="row">${avatar(52,b)}<div class="grow"><span class="chip" style="color:var(--acc)">DAVET · ${S.inv.exp-S.day+1} gün</span><b class="stencil" style="display:block;font-size:19px;margin-top:4px">${esc(b.n)}</b><span class="small muted">Seni davetli aday olarak seçmeye çağırıyor · başarı %${Math.round(inviteP31(b)*100)}</span></div></div><div class="row"><button class="btn grow" data-a="invacc">Kabul et</button><button class="btn ghost" data-a="invshow">Mektubu oku</button></div></div>`}

/* ---------- MAREŞAL SONRASI: KURUM VE POLİTİKA ---------- */
const civil31=()=>!!(S&&S.rank>=18&&S.pol&&S.pol.i>=1);
const armyHead31=()=>!!(S&&S.rank>=18&&!civil31());
{const _po=pickOp;pickOp=function(){if(civil31()){S.op=null;S.mDone=true;return}return _po.apply(this,arguments)}}
{const _ur=urole;urole=function(l){return S&&S.rank>=18?'Genelkurmay · harekât yönetimi':_ur(l)}}
{const _vol=volunteer;volunteer=function(){if(S.rank>=18)return toast('Mareşal cepheye çıkmaz: harekâtı karargâhtan yönetirsin.');return _vol()}}
{const _pr=polRise;polRise=function(){const was=S.pol?S.pol.i:0;_pr.apply(this,arguments);if(was===0&&S.pol&&S.pol.i===1&&!S.civilOn){S.civilOn=true;S.op=null;S.mDone=true;
  pushModal({k:'Yeni dönem',ti:'Üniformayı çıkardın',art:govSeal(70),body:`<p>Silahlı Kuvvetler’deki görevinden emekliye ayrıldın ve sivil bir devlet görevine başladın. Bundan sonra sahaya değil devletin kurumlarına bakacaksın: kabine toplantıları, Meclis, bütçe, diplomasi ve halkın onayı.</p><p class="small muted">Ordunun sahadaki harekâtlarını artık Genelkurmay yürütür. Sen planları onaylar, sonuçlarından siyasi olarak sorumlu olursun.</p>`});save()}}}
/* Genelkurmay brifingi: sivil makamdayken ordu harekâtları onaya gelir */
const BRF31=[
 {ti:'Sınır ötesi harekât planı',b:'Genelkurmay, {x} sınırındaki silahlı grupları hedef alan sınırlı bir harekât planı sundu. Meclis’ten tezkere gerekiyor.',o:[['Planı onayla, Meclis’ten tezkere iste',{guv:4,onay:2,rel:-6,ws:1}],['Önce {x}’e diplomatik nota ver',{rel:2,guv:1}],['Planı reddet',{guv:-3,onay:-1}]]},
 {ti:'Yüksek Askerî Şûra',b:'Şûra, generallerin terfi ve emeklilik listesini onayına sundu. Basın listedeki bazı isimleri sorguluyor.',o:[['Listeyi liyakate göre revize et',{guv:3,onay:2,ekon:-1}],['Listeyi olduğu gibi onayla',{guv:2}],['Sadık isimleri öne çıkar',{onay:-5,guv:-4}]]},
 {ti:'Büyük tatbikat',b:'Kuvvet komutanlıkları {x} sınırına yakın bölgede ortak tatbikat yapmak istiyor.',o:[['Tatbikata izin ver ve basına duyur',{guv:3,rel:-4,onay:1}],['Tatbikatı iç bölgeye kaydır',{guv:1,rel:1}],['Bu yıl tatbikat yapılmasın',{guv:-2,ekon:1}]]},
 {ti:'Mühimmat ve tedarik',b:'Genelkurmay, stokların kritik seviyeye indiğini ve acil mühimmat alımı gerektiğini bildirdi.',o:[['Yerli sanayiden acil alım',{guv:3,ekon:-3,onay:2}],['Müttefikten hızlı tedarik',{guv:4,ekon:-4}],['Bütçe yok, ertele',{guv:-4}]]}];
const BRFW31={ti:'Savaş durumu brifingi',b:'Genelkurmay Başkanı {x} cephesindeki durumu harita başında anlattı. Kararını bekliyorlar.',o:[['Taarruz planını onayla',{ws:2,onay:-2,guv:2}],['Savunma hattını tahkim et',{ws:1,guv:3}],['Ateşkes için arabulucu ara',{rel:10,onay:2,ceasefire:1}]]};
function brfDaily31(){if(!civil31())return;if(S.brf&&S.brf.done==null&&S.day-S.brf.d<4)return;if(S.brf&&S.day-S.brf.d<3)return;
 const me=S.nation;const riv=NK.filter(k=>k!==me).sort((a,b)=>rel(me,a)-rel(me,b));const war=S.world.war;
 S.brf={d:S.day,i:war&&R()<.7?-1:Math.floor(R()*BRF31.length),x:war||riv[0],done:null}}
function brfDecide31(v){const B_=S.brf;if(!B_||B_.done!=null)return;const D=B_.i<0?BRFW31:BRF31[B_.i];const o=D.o[+v];if(!o)return;const e=o[1],P=S.pol,me=S.nation;
 ['onay','ekon','guv'].forEach(k=>{if(e[k])P[k]=clamp(P[k]+e[k])});if(e.rel)setRel(me,B_.x,rel(me,B_.x)+e.rel);if(e.ws)S.warScore=(S.warScore||0)+e.ws;
 if(e.ceasefire&&S.world.war&&R()<.45){const f=S.world.war;S.world.war=null;S.world.warD=0;S.warScore=0;feed('ulusal',`${NAT[f].n} ile ateşkes`,`${gov().o[P.i][0]} ${S.name}’in girişimiyle ateşkes sağlandı.`,[me]);toast('Arabuluculuk sonuç verdi: ateşkes imzalandı.')}
 B_.done=+v;const txt=fill(o[0],{x:NAT[B_.x].n});feed('ulusal',`${gov().o[P.i][0]} ${S.name}: ${D.ti.toLocaleLowerCase('tr')}`,`Karar: ${txt}.`,[me]);log('Genelkurmay brifingi: '+txt);
 if(!e.ceasefire)toast(`${D.ti}: ${txt}`);save();render()}
function civilOpCard31(){const P=S.pol;const B_=S.brf;const D=B_?(B_.i<0?BRFW31:BRF31[B_.i]):null;
 return `<div class="card hero gov"><div class="row" style="gap:14px">${govSeal(64)}<div class="grow"><div class="lbl">${esc(NAT[S.nation].n)} · ${esc(gov().o[P.i][0])}</div><h2 class="stencil" style="font-size:22px;line-height:1.05">Ordu ve harekâtlar</h2></div></div>
 <p>Sahadaki harekâtları artık <b>Genelkurmay</b> yürütür. Sen kurumların başındasın: planları onaylar, bütçeyi belirler, sonuçlarından Meclis’e ve halka karşı sorumlu olursun.</p>
 <div class="bars">${bar('İç güvenlik',P.guv,P.guv<35?'var(--red)':'var(--green)')}${bar('Halk onayı',P.onay,P.onay<35?'var(--red)':'var(--amber)')}</div></div>
 ${D?`<div class="card dos"><div class="dz-top"><span>GENELKURMAY BRİFİNGİ · GİZLİ</span><span>${flag(B_.x,14)}</span></div><div class="dz-body"><h2 class="stencil" style="font-size:20px">${esc(D.ti)}</h2><p>${esc(fill(D.b,{x:NAT[B_.x].n}))}</p>
 ${B_.done!=null?`<div class="small green">Kararın: ${esc(fill(D.o[B_.done][0],{x:NAT[B_.x].n}))}</div><p class="small muted">Bir sonraki brifing birkaç gün içinde gelecek.</p>`:D.o.map((o,i)=>`<button class="opt op2" data-a="brf" data-v="${i}"><span class="k">${'ABC'[i]}</span><span class="grow">${esc(fill(o[0],{x:NAT[B_.x].n}))}</span></button>`).join('')}</div></div>`:'<div class="card"><p class="small muted">Genelkurmay’dan yeni brifing bekleniyor.</p></div>'}
 <button class="btn block" data-a="msub" data-v="state">Devlet dosyalarına git ›</button>`}
{const _vm=vMission;vMission=function(){const sub=UI.msub||'op';
 if(civil31()&&sub==='op'){const seg=`<div class="seg"><button class="on" data-a="msub" data-v="op">Ordu</button><button data-a="msub" data-v="unit">${esc(S.tim&&uLv()<=3?S.tim.name+' '+uName():'Birliğim')}</button><button data-a="msub" data-v="state">Devlet</button></div>`;return seg+civilOpCard31()}
 const h=_vm();if(armyHead31()&&sub==='op'&&!S.izin)return h.replace('</div>',`</div><div class="card hq31"><div class="lbl acc">Genelkurmay Harekât Merkezi</div><p class="small">Mareşal cepheye çıkmaz. Kuvvet komutanlarına emir verir, harekâtı karargâhtaki harita masasından yönetirsin. Kararların tüm orduyu bağlar.</p></div>`);return h}}
/* güncel politika dosyaları */
DOS.push(
 {s:'eko',ti:'Bütçe görüşmeleri',b:'Yeni yıl bütçesi Meclis Genel Kurulu’nda. Muhalefet sosyal harcamaların yetersiz olduğunu söylüyor.',o:[['Bütçeyi olduğu gibi geçir',{ekon:3,onay:-2}],['Muhalefetle uzlaşıp sosyal kalemleri artır',{onay:4,ekon:-2}],['Tasarruf paketini genişlet',{ekon:5,onay:-5}]]},
 {s:'eko',ti:'Faiz kararı',b:'Merkez bankası bağımsız ama piyasalar hükümetin sinyalini bekliyor. Döviz kuru son haftada sert yükseldi.',o:[['Bankanın bağımsızlığına saygı göster',{ekon:3,onay:-1}],['Faiz artışını açıkça destekle',{ekon:5,onay:-3}],['Düşük faiz için baskı yap',{onay:2,ekon:-6}]]},
 {s:'eko',ti:'Asgari ücret',b:'Asgari ücret komisyonunda işçi ve işveren temsilcileri anlaşamadı; son söz hükümette.',o:[['Enflasyonun üzerinde zam',{onay:6,ekon:-4}],['Enflasyon kadar zam',{onay:1}],['Zam yerine vergi indirimi',{onay:2,ekon:-2}]]},
 {s:'eko',ti:'Gençlerde işsizlik',b:'Genç işsizliği son on yılın zirvesinde. Üniversite mezunları iş bulamıyor.',o:[['Kamu ve özel sektörde staj seferberliği',{onay:5,ekon:-3}],['Genç girişimci kredisi',{onay:3,ekon:-2}],['Piyasa kendi dengesini bulur',{onay:-4,ekon:1}]]},
 {s:'ic',ti:'Gensoru önergesi',b:'Muhalefet, kabinedeki bir bakan hakkında gensoru önergesi verdi. İddialar basında geniş yer buluyor.',o:[['Bakanı görevden al',{onay:4,guv:-1}],['Bakanı savun, iddiaları yanıtla',{onay:-2,guv:1}],['Bağımsız soruşturma başlat',{onay:3}]]},
 {s:'ic',ti:'Orman yangınları',b:'Güney sahillerinde aynı anda onlarca noktada orman yangını çıktı. Rüzgâr şiddetli.',o:[['Tüm hava araçlarını ve orduyu seferber et',{onay:6,ekon:-3,guv:2}],['Uluslararası söndürme uçağı talep et',{onay:2,rel:3}],['Koordinasyonu valiliklere bırak',{onay:-5}]]},
 {s:'ic',ti:'Basın özgürlüğü raporu',b:'Uluslararası bir rapor, ülkenin basın özgürlüğü sıralamasında gerilediğini söylüyor.',o:[['Gazetecilerle görüş, yasal güvence sözü ver',{onay:3,rel:2}],['Raporu taraflı ilan et',{onay:-1,rel:-2}],['Yanıt verme',{onay:-1}]]},
 {s:'ic',ti:'Kentsel dönüşüm',b:'Uzmanlar, büyükşehirdeki depreme dayanıksız binalar için acil dönüşüm planı istiyor.',o:[['Devlet destekli dönüşüm seferberliği',{onay:5,ekon:-4,guv:2}],['Belediyelerle ortak plan',{onay:2,ekon:-1}],['Kaynak yok, ertele',{onay:-4}]]},
 {s:'dip',ti:'Uluslararası zirve',b:'Dünya liderlerinin katıldığı zirvede {x} lideriyle aynı masaya oturacaksın.',o:[['İkili görüşme talep et',{rel:7,onay:1}],['Ortak bildiriye imza at',{rel:4,onay:2}],['{x}’i kürsüden sert biçimde eleştir',{rel:-8,onay:3}]]},
 {s:'dip',ti:'Vatandaşlar mahsur kaldı',b:'{x}’te çıkan iç karışıklıkta yüzlerce vatandaşımız mahsur kaldı.',o:[['Askerî uçaklarla tahliye operasyonu',{onay:7,ekon:-2,guv:2}],['{x} hükümetiyle koridor müzakeresi',{rel:4,onay:2}],['Vatandaşlara kendi imkânlarıyla dönmelerini söyle',{onay:-7}]]},
 {s:'dev',ti:'Kabine revizyonu',b:'Anketler hükümetin yıprandığını gösteriyor. Danışmanların kabinede değişiklik öneriyor.',o:[['Geniş kapsamlı revizyon',{onay:5,ekon:-1}],['İki bakanlıkta sınırlı değişiklik',{onay:2}],['Değişiklik yapma',{onay:-3}]]},
 {s:'dev',ti:'Seçim takvimi',b:'Anketlerde öndesin. Danışmanların erken seçime gitmeyi öneriyor.',o:[['Erken seçim çağrısı yap',{onay:2,guv:-1}],['Takvime sadık kal',{onay:1}],['Görev süresini uzatacak bir değişiklik öner',{onay:-8,guv:1}]]},
 {s:'mil',ti:'Yüksek Askerî Şûra',b:'Şûra toplanıyor. Generallerin terfi ve emeklilik listesini sen hazırlayacaksın.',o:[['Liyakate göre liste',{guv:3,onay:2,trust:3}],['Kıdem sırasına sadık kal',{guv:1,trust:1}],['Siyasetin istediği isimleri öne al',{onay:-3,trust:-6}]]},
 {s:'mil',ti:'Kuvvet komutanları toplantısı',b:'Kara, deniz ve hava kuvvetleri komutanları önümüzdeki yılın harekât önceliklerini tartışıyor.',o:[['Sınır güvenliğini öne al',{guv:4,ekon:-1}],['Deniz yetki alanlarına odaklan',{guv:2,rel:-3,pw:1}],['Modernizasyona ağırlık ver',{ekon:-3,pw:2,onay:1}]]});

/* ---------- ASKERÎ FON MÜZİĞİ (özgün, WebAudio ile üretilir) ---------- */
const MUS31=(function(){
 /* "Kurultay" — karanlık savaş davulları ve "HUH!" diyen savaşçılar; tiz ses yok */
 let ctx=null,master=null,comp=null,rev=null,noise=null,timer=null,nextT=0,step=0,on=true,running=false,hidden=false;
 try{if(localStorage.getItem('by_music')==='0')on=false}catch(e){}
 const BPM=76,SPB=60/BPM,S16=SPB/4,VOL=.24;
 const mtof=m=>440*Math.pow(2,(m-69)/12);
 const DR=[1,0,0,0,0,0,.65,0,1,0,0,0,.55,0,.8,0];
 const MEL=[[62,1],[65,1],[67,2],[69,3],[67,1],[65,1],[67,1],[69,1],[72,1],[69,4],[62,1],[65,1],[67,2],[69,2],[71,1],[69,1],[67,1],[65,1],[64,1],[62,1],[62,4]];
 const EV={};{let b=0;MEL.forEach(([m,d])=>{EV[Math.round(b*4)]=[m,d];b+=d})}
 function build(){if(!ctx)ctx=new (window.AudioContext||window.webkitAudioContext)();
  comp=ctx.createDynamicsCompressor();comp.threshold.value=-16;comp.ratio.value=5;comp.attack.value=.003;comp.release.value=.25;comp.connect(ctx.destination);
  const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1900;lp.Q.value=.5;lp.connect(comp);master=ctx.createGain();master.gain.value=0;master.connect(lp);
  rev=ctx.createConvolver();const len=ctx.sampleRate*3.5,ir=ctx.createBuffer(2,len,ctx.sampleRate);for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.2)}rev.buffer=ir;
  const rg=ctx.createGain();rg.gain.value=.4;rev.connect(rg);rg.connect(master);
  noise=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const nd=noise.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1}
 function out(node,send){node.connect(master);if(send){const g=ctx.createGain();g.gain.value=send;node.connect(g);g.connect(rev)}}
 function env(g,t,a,peak,hold,rel){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(peak,t+a);g.gain.setValueAtTime(peak,t+a+hold);g.gain.exponentialRampToValueAtTime(.0001,t+a+hold+rel)}
 function nz(t,dur,type,fq,vol,send,q){const s=ctx.createBufferSource();s.buffer=noise;s.playbackRate.value=.7+Math.random()*.6;const f=ctx.createBiquadFilter();f.type=type;f.frequency.value=fq;if(q)f.Q.value=q;const g=ctx.createGain();s.connect(f);f.connect(g);env(g,t,.002,vol,.005,dur);out(g,send);s.start(t);s.stop(t+dur+.05)}
 /* derin savaş davulu (deri davul) */
 function drum(t,v,f0){const o=ctx.createOscillator(),g=ctx.createGain();o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f0*.55,t+.35);o.connect(g);env(g,t,.004,.9*v,.04,.7);out(g,.45);o.start(t);o.stop(t+.9);
  const o2=ctx.createOscillator(),g2=ctx.createGain();o2.type='sine';o2.frequency.setValueAtTime(f0*1.8,t);o2.frequency.exponentialRampToValueAtTime(f0*.9,t+.06);o2.connect(g2);env(g2,t,.001,.3*v,.005,.08);out(g2,.3);o2.start(t);o2.stop(t+.2);
  nz(t,.22,'lowpass',260,.6*v,.55)}
 /* toplu el çırpışı */
 function clap(t,v){for(let k=0;k<7;k++){const d=Math.random()*.025;nz(t+d,.06,'bandpass',900+Math.random()*900,.16*v,.7,1.5)}}
 /* "HUH!" — savaşçı bağırışı (formantlı insan sesi taklidi) */
 function shout(t,v,vow){const g=ctx.createGain(),mix=ctx.createGain();const F=vow==='e'?[[480,1,7],[1750,.55,9],[2500,.25,9]]:[[400,1,5],[720,.75,6],[1100,.3,6]];
  for(let k=0;k<12;k++){const o=ctx.createOscillator();o.type='sawtooth';const f=82+Math.random()*40;o.frequency.setValueAtTime(f*1.12,t);o.frequency.exponentialRampToValueAtTime(f*.86,t+.3);const og=ctx.createGain();og.gain.value=.5+Math.random()*.5;o.connect(og);og.connect(mix);const st=t+Math.random()*.03;o.start(st);o.stop(st+.5)}
  const s=ctx.createBufferSource();s.buffer=noise;const ng=ctx.createGain();ng.gain.value=.5;s.connect(ng);ng.connect(mix);s.start(t);s.stop(t+.5);
  F.forEach(([fq,a,q])=>{const bp=ctx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=fq;bp.Q.value=q;const ag=ctx.createGain();ag.gain.value=a;mix.connect(bp);bp.connect(ag);ag.connect(g)});
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.55*v,t+.025);g.gain.exponentialRampToValueAtTime(.2*v,t+.12);g.gain.exponentialRampToValueAtTime(.0001,t+.38);out(g,.85)}
 /* uğultu (yaylı drone) */
 function drone(t,dur){[[38,0],[45,0],[38,-1200]].forEach(([n,dc])=>{const g=ctx.createGain(),f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=520;f.Q.value=.9;
  [-7,6].forEach(dt=>{const o=ctx.createOscillator();o.type='sawtooth';o.frequency.value=mtof(n);o.detune.value=dt+dc;o.connect(f);o.start(t);o.stop(t+dur+1.2)});
  const tr=ctx.createOscillator(),tg=ctx.createGain();tr.frequency.value=.35+Math.random()*.3;tg.gain.value=.012;tr.connect(tg);tg.connect(g.gain);tr.start(t);tr.stop(t+dur+1.2);
  f.connect(g);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.035,t+1);g.gain.setValueAtTime(.035,t+dur);g.gain.linearRampToValueAtTime(0,t+dur+1.1);out(g,.6)})}
 /* savaş borusu: uzun, yükselen, boğuk */
 function horn(t,dur){const g=ctx.createGain(),f=ctx.createBiquadFilter(),f2=ctx.createBiquadFilter();f.type='lowpass';f.Q.value=6;f.frequency.setValueAtTime(250,t);f.frequency.linearRampToValueAtTime(1300,t+.6);f.frequency.linearRampToValueAtTime(900,t+dur);f2.type='peaking';f2.frequency.value=700;f2.gain.value=8;
  [[45,0],[45,9],[33,0],[57,-8]].forEach(([n,dt])=>{const o=ctx.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(mtof(n-2),t);o.frequency.exponentialRampToValueAtTime(mtof(n),t+.35);o.frequency.setValueAtTime(mtof(n),t+dur*.7);o.frequency.exponentialRampToValueAtTime(mtof(n+5),t+dur*.85);o.detune.value=dt;o.connect(f);o.start(t);o.stop(t+dur+.8)});
  f.connect(f2);f2.connect(g);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.12,t+.25);g.gain.setValueAtTime(.12,t+dur*.9);g.gain.exponentialRampToValueAtTime(.0001,t+dur+.7);out(g,.9)}
 /* yaylı ezgi (tagelharpa/kemençe benzeri) */
 function fid(m,t,dur){const g=ctx.createGain(),mix=ctx.createGain();[[m,0],[m,8],[m-12,0]].forEach(([n,dt])=>{const o=ctx.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(mtof(n)*.985,t);o.frequency.linearRampToValueAtTime(mtof(n),t+.06);o.detune.value=dt;const vb=ctx.createOscillator(),vg=ctx.createGain();vb.frequency.value=5.6;vg.gain.setValueAtTime(0,t);vg.gain.linearRampToValueAtTime(14,t+Math.min(.6,dur));vb.connect(vg);vg.connect(o.detune);o.connect(mix);o.start(t);o.stop(t+dur+.4);vb.start(t);vb.stop(t+dur+.4)});
  [[820,1,4],[1700,.6,5],[3100,.25,6]].forEach(([fq,a,q])=>{const bp=ctx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=fq;bp.Q.value=q;const ag=ctx.createGain();ag.gain.value=a;mix.connect(bp);bp.connect(ag);ag.connect(g)});
  env(g,t,.08,.2,Math.max(.05,dur-.2),.3);out(g,.55)}
 /* alçak erkek korosu */
 function choir(t,dur,notes){const g=ctx.createGain(),mix=ctx.createGain();notes.forEach(n=>[-14,0,13].forEach(dt=>{const o=ctx.createOscillator();o.type='sawtooth';o.frequency.value=mtof(n);o.detune.value=dt;const vb=ctx.createOscillator(),vg=ctx.createGain();vb.frequency.value=4.5+Math.random();vg.gain.value=7;vb.connect(vg);vg.connect(o.detune);o.connect(mix);o.start(t);o.stop(t+dur+1.2);vb.start(t);vb.stop(t+dur+1.2)}));
  [[400,1,8],[800,.5,8],[2600,.12,9]].forEach(([fq,a,q])=>{const bp=ctx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=fq;bp.Q.value=q;const ag=ctx.createGain();ag.gain.value=a;mix.connect(bp);bp.connect(ag);ag.connect(g)});
  env(g,t,.9,.075,Math.max(.1,dur-1),1.1);out(g,.9)}
 function sub(t,dur){const g=ctx.createGain();[26,38].forEach((n,k)=>{const o=ctx.createOscillator();o.type=k?'triangle':'sine';o.frequency.value=mtof(n);o.connect(g);o.start(t);o.stop(t+dur+1.5)});g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.09,t+1.2);g.gain.setValueAtTime(.09,t+dur);g.gain.linearRampToValueAtTime(0,t+dur+1.4);out(g,.2)}
 function thunder(t){const s=ctx.createBufferSource();s.buffer=noise;s.playbackRate.value=.25;const f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=140;const g=ctx.createGain();s.connect(f);f.connect(g);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.7,t+.15);g.gain.exponentialRampToValueAtTime(.0001,t+2.6);out(g,.6);s.start(t);s.stop(t+2.8)}
 const H1=[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];                 /* HUH .... HUH .... */
 const H2=[1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0];                 /* HUH .. HUH HUH .... */
 const H3=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0];                 /* hızlanan */
 const D1=[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
 const D2=[1,0,0,0,0,0,.6,0,1,0,0,0,.5,0,.75,0];
 const D3=[1,0,.45,0,.7,0,.6,0,1,0,.45,.5,.7,0,.8,.55];
 function sched(s,t){const bar=Math.floor(s/16),pos=s%16;
  if(pos===0&&bar%4===0)sub(t,SPB*16);
  if(pos===0&&(bar===0||bar===8))thunder(t);
  const H=bar<4?H1:bar<8?H2:(bar%4===3?H3:H2);const D=bar<2?null:bar<4?D1:bar<8?D2:D3;
  if(H[pos])shout(t,pos===0?1.1:.9,'u');
  if(D&&D[pos])drum(t,D[pos],pos%8===0?46:pos%4===0?54:62);
  if(bar>=8&&pos===0)drum(t+S16*.5,.35,44);
  if((bar===7||bar===15)&&pos>=8){drum(t,.55+(pos-8)/12,58);if(pos%2===0)shout(t,.8+(pos-8)/20,'u')}
  if(bar>=4&&pos===0&&bar%2===0)choir(t,SPB*8,[26+12,33+12]);}
 function tick(){if(!ctx)return;while(nextT<ctx.currentTime+.2){sched(step,nextT);nextT+=S16;step=(step+1)%256;if(step===0)step=64}}
 function start(){if(!on||running||hidden)return;try{if(!master)build();ctx.resume();nextT=ctx.currentTime+.08;step=0;master.gain.cancelScheduledValues(ctx.currentTime);master.gain.setValueAtTime(0,ctx.currentTime);master.gain.linearRampToValueAtTime(VOL,ctx.currentTime+1.5);clearInterval(timer);timer=setInterval(tick,25);running=true}catch(e){running=false}}
 function stop(soft){if(!ctx||!running)return;running=false;clearInterval(timer);const t=ctx.currentTime;master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(master.gain.value,t);master.gain.linearRampToValueAtTime(0,t+(soft?.6:.15));setTimeout(()=>{if(!running&&ctx)ctx.suspend()},soft?700:250)}
 function set(v){on=!!v;try{localStorage.setItem('by_music',on?'1':'0')}catch(e){}if(on)start();else stop(true)}
 document.addEventListener('pointerdown',()=>{if(on&&!running)start()},true);
 document.addEventListener('visibilitychange',()=>{hidden=document.hidden;if(hidden)stop(false);else if(on)start()});
 return {set,toggle(){set(!on)},get on(){return on},pause(){stop(false)},resume(){if(on)start()},_render:async c=>{ctx=c;build();master.gain.value=VOL;let t=.1,k=0;for(let i=0;i<256+128;i++){sched(k,t);t+=S16;k=(k+1)%256;if(k===0)k=64}return ctx.startRendering()}};
})();
{const _sa=showAd;showAd=function(kind,done){const was=MUS31.on;MUS31.pause();return _sa(kind,ok=>{if(was)MUS31.resume();done&&done(ok)})}}
function musBtn31(){return `<button class="mus31 ${MUS31.on?'on':''}" data-a="music" aria-label="${MUS31.on?'Müziği kapat':'Müziği aç'}" title="Fon müziği"><svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M4 9 H8 L13 5 V19 L8 15 H4Z" fill="currentColor"/>${MUS31.on?'<path d="M16 9 Q18.5 12 16 15 M18.5 6.5 Q23 12 18.5 17.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>':'<path d="M16 9 L22 15 M22 9 L16 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'}</svg></button>`}
function musCard31(){return `<div class="card"><div class="sec-h"><h2>Fon müziği</h2>${musBtn31()}</div><div class="seg"><button class="${MUS31.on?'on':''}" data-a="music" data-v="1">Açık</button><button class="${MUS31.on?'':'on'}" data-a="music" data-v="0">Kapalı</button></div><p class="small muted">Savaş davulları, savaşçı bağırışları, savaş borusu ve koroyla oyuna özel bestelenmiş bir savaş müziği. Üst çubuktaki hoparlör simgesiyle de açıp kapatabilirsin.</p></div>`}
{const _vs=vSettings;vSettings=function(){return musCard31()+_vs()}}
{const _vg=vGame;vGame=function(){return _vg().replace('<div class="day">',musBtn31()+'<div class="day">')}}

/* ---------- KANCALAR ---------- */
{const _vd=vDaily;vDaily=function(notes){_vd(notes);try{ageDaily31(notes);postDaily31(notes);inviteDaily31();brfDaily31()}catch(e){}}}
{const _fx=fixS;fixS=function(){_fx();ageInit31();postInit31(false);if(civil31()){S.op=null;S.mDone=true}}}
{const _ng=newGame;newGame=function(){_ng();ageInit31();postInit31(true);save();render()}}
{const _pc=promoCheck;promoCheck=function(){const r0=S.rank;_pc();if(S.rank>r0)setTimeout(()=>tayinPromo31(TIER(S.rank)>TIER(r0)),0)}}
{const _ec=eraCard;eraCard=function(){return inviteCard31()+postCard31()+_ec()}}
{const _vp=vProf;vProf=function(){return inviteCard31()+_vp().replace(/Seçmeli birlikler<\/h2><\/div>/,'Seçmeli birlikler</h2></div><p class="small muted">Başvurabilir ya da performansınla davet bekleyebilirsin. Davetli adaylar ön elemeden muaf tutulur.</p>')}}
var A31={tayin:tayinOpen31,invacc:inviteAccept31,invshow:inviteModal31,brf:brfDecide31,music(v){if(v==null)MUS31.toggle();else MUS31.set(v==='1');render()}};

/* ---------- ÇEVİRİLER ---------- */
`Görev yerin|Your posting|赴任地|Tu destino|Ton affectation|Dein Standort
Karargâh|Headquarters|司令部|Cuartel general|Quartier général|Hauptquartier
Sınır garnizonu|Border garrison|国境駐屯地|Guarnición fronteriza|Garnison frontalière|Grenzgarnison
Büyükşehir|Metropolis|大都市|Gran ciudad|Métropole|Großstadt
İç bölge garnizonu|Inland garrison|内陸駐屯地|Guarnición interior|Garnison intérieure|Binnengarnison
Tayin talebi ver|Request a transfer|転属を申請|Solicitar traslado|Demander une mutation|Versetzung beantragen
Tayin talebi|Transfer request|転属申請|Solicitud de traslado|Demande de mutation|Versetzungsantrag
Tayin|Transfer|転属|Traslado|Mutation|Versetzung
Tayin dönemi|Posting season|人事異動|Periodo de destinos|Période de mutations|Versetzungsperiode
Emri kabul et|Accept the order|命令を受ける|Aceptar la orden|Accepter l'ordre|Befehl annehmen
Kalmak için dilekçe ver|Petition to stay|残留を申請|Pedir quedarse|Demander à rester|Bleiben beantragen
Vazgeç|Cancel|やめる|Cancelar|Annuler|Abbrechen
Yaş|Age|年齢|Edad|Âge|Alter
Fiziksel gelişim tam|Full physical growth|身体成長：最大|Desarrollo físico pleno|Développement physique maximal|Volle körperliche Entwicklung
Fon müziği|Background music|BGM|Música de fondo|Musique de fond|Hintergrundmusik
Açık|On|オン|Activada|Activée|An
Kapalı|Off|オフ|Desactivada|Désactivée|Aus
Davet mektubu|Letter of invitation|招待状|Carta de invitación|Lettre d'invitation|Einladungsschreiben
Kabul et|Accept|受ける|Aceptar|Accepter|Annehmen
Mektubu oku|Read the letter|手紙を読む|Leer la carta|Lire la lettre|Brief lesen
Daveti kabul et, seçmeye gir|Accept and enter selection|招待を受け選抜へ|Aceptar y entrar en la selección|Accepter et entrer en sélection|Annehmen und zur Auswahl
Düşüneceğim (profilde bekler)|I'll think about it (kept in profile)|考えておく（プロフィールに保存）|Lo pensaré (queda en el perfil)|Je vais réfléchir (gardé dans le profil)|Ich überlege es mir (im Profil)
Teşekkür et, birliğimde kalacağım|Thank them, I'll stay in my unit|感謝して部隊に残る|Agradecer y quedarme en mi unidad|Remercier et rester dans mon unité|Danken und in meiner Einheit bleiben
Davetle gelen bere|A beret earned by invitation|招待で得たベレー帽|Una boina por invitación|Un béret gagné sur invitation|Ein Barett auf Einladung
Son aşamada elendin|Eliminated at the final stage|最終段階で脱落|Eliminado en la fase final|Éliminé à l'étape finale|In der letzten Phase ausgeschieden
Ordu ve harekâtlar|Army and operations|軍と作戦|Ejército y operaciones|Armée et opérations|Armee und Einsätze
Ordu|Army|軍|Ejército|Armée|Armee
Devlet|State|国家|Estado|État|Staat
Devlet dosyalarına git ›|Go to state files ›|国家案件へ ›|Ir a los asuntos de Estado ›|Aller aux dossiers d'État ›|Zu den Staatsakten ›
Genelkurmay Harekât Merkezi|General Staff Operations Center|統合幕僚作戦センター|Centro de Operaciones del Estado Mayor|Centre d'opérations de l'état-major|Einsatzzentrale des Generalstabs
Üniformayı çıkardın|You took off the uniform|軍服を脱いだ|Te quitaste el uniforme|Tu as quitté l'uniforme|Du hast die Uniform abgelegt
Yeni dönem|A new era|新たな時代|Una nueva etapa|Une nouvelle ère|Eine neue Ära
Personel Başkanlığı|Personnel Command|人事部|Jefatura de Personal|Direction du personnel|Personalamt
Talebin reddedildi|Request denied|申請却下|Solicitud denegada|Demande refusée|Antrag abgelehnt
İtirazın kabul edildi|Petition accepted|申請受理|Petición aceptada|Requête acceptée|Antrag angenommen`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
