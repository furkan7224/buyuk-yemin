/* =====================================================================
   v16 · harekât sahaları, yeni görevler, zincir harekâtlar,
         icra anı (refleks), madalyalar, sinematik sonuç
   ===================================================================== */

/* ---------- Yeni görev türleri ---------- */
OPS.push(
 {id:'hvt',ti:'Yüksek değerli hedef baskını',k:['ozel','kara','jan'],t:[1,4],sc:'gece',ph:[
  ['İstihbarat, {dusman} destekli bir hücre liderinin {sehir} yakınındaki bir çiftlik evinde saklandığını doğruladı. Yanında 6 koruma var.',['Gece yarısı iki yönden eşzamanlı baskın, dış çember kur',1,'strat'],['Sabah ezanı vakti tek yönden hızlı giriş',.45,'dovus'],['Evi uzaktan gözetle, çıkmasını bekle',.5,'disiplin']],
  ['Kapı kırıldı. Hedef arka odaya kaçtı; koridorda iki koruma ateş açıyor.',['Flaş bombası, ikili ilerleme, korumaları etkisiz hâle getir',1,'dovus'],['Odaya doğrudan el bombası',.15,'nisan'],['Geri çekil, binayı kuşat',.45,'lider']],
  ['Hedef teslim oluyor ama elinde bir telefon var; birini aramaya çalışıyor.',['Telefonu al, kelepçele, belgeleri topla, hızla tahliye',1,'disiplin'],['Telefonu kırmasına izin ver, sadece onu al',.35,'strat'],['Aramayı tamamlamasına izin ver, kimi aradığını izle',.5,'strat']]]},
 {id:'kopru',ti:'Köprü sabotajı',k:['ozel','kara'],t:[1,3],sc:'gece',ph:[
  ['{dusman} zırhlı kolu sabaha karşı {sehir} yakınındaki köprüden geçecek. Köprü yıkılmalı.',['İstihkâm timini nehirden yüzerek götür, ayaklara patlayıcı yerleştir',1,'dayan'],['Kamyonla doğrudan köprüye git',.2,'strat'],['Topçudan köprüyü vurmasını iste',.5,'strat']],
  ['Köprü nöbetçisi ışık tutuyor; yerleştirme işinin yarısı bitti.',['Işık geçene kadar suyun altında bekle',1,'dayan'],['Nöbetçiyi susturucuyla etkisiz hâle getir',.55,'nisan'],['Kalan patlayıcıları hızla yerleştir',.35,'dayan']],
  ['Zırhlı kolun farları göründü. Ateşleme hattı hazır.',['Kolun ilk aracı köprünün ortasına gelince ateşle',1,'disiplin'],['Hemen ateşle',.5,'strat'],['Bütün kol köprüye girsin, sonra ateşle',.3,'strat']]]},
 {id:'csar',ti:'Düşen pilotu kurtarma',k:['ozel','hava','kara','deniz'],t:[1,4],sc:'dag',ph:[
  ['Bir savaş uçağımız {sehir} yakınında düşürüldü. Pilotun acil durum vericisi sinyal veriyor; {dusman} arama ekipleri de yolda.',['Helikopterle alçak irtifada gir, iki İHA ile gözetle',1,'strat'],['Kara yoluyla hızlı kol gönder',.4,'dayan'],['Pilota saklanmasını söyle, geceyi bekle',.45,'disiplin']],
  ['Pilot yaralı; düşman devriyesi 500 metre uzakta.',['Duman ve yanıltma ateşiyle devriyeyi oyala, pilotu sedyeyle al',1,'lider'],['Devriyeye doğrudan saldır',.35,'nisan'],['Pilotu kendi yürümeye zorla',.2,'dayan']],
  ['Helikopter havalanırken omuzdan atılan bir füze uyarısı geldi!',['Isı fişeği at, sert dönüş, alçaktan kaç',1,'nisan'],['Tırmanarak kaç',.25,'dayan'],['Yere geri in',.35,'disiplin']]]},
 {id:'tunel',ti:'Tünel ağı temizliği',k:['kara','ozel','jan'],t:[1,3],sc:'dag',ph:[
  ['{sehir} kırsalında, sınırın altından geçen bir tünel ağı bulundu. Girişlerden biri bir evin mutfağında.',['Önce yer radarı ve robotla haritala, girişleri tek tek kapat',1,'strat'],['Hemen içeri gir',.3,'dovus'],['Tüneli dışarıdan patlat',.5,'strat']],
  ['Dar ve karanlık tünelde 40 metre ilerlediniz. Önünüzde bir tuzak teli parlıyor.',['Durun; istihkâmcı teli etkisizleştirsin',1,'disiplin'],['Telin üstünden atla',.25,'dayan'],['Geri çekilip robotu gönder',.6,'strat']],
  ['Tünelin sonunda silah deposu ve bir harita var.',['Haritayı ve kayıtları al, depoyu kontrollü imha et',1,'strat'],['Silahları taşımaya çalış',.3,'dayan'],['Her şeyi orada patlat',.45,'disiplin']]]},
 {id:'avci',ti:'Keskin nişancı avı',k:['kara','ozel','jan'],t:[0,3],sc:'sehir',ph:[
  ['{sehir} çevresinde iki gündür bir {dusman} keskin nişancısı nöbetçileri hedef alıyor.',['Mermi izlerinden atış açısını hesapla, karşı nişancı yerleştir',1,'strat'],['Bütün binaları tek tek ara',.35,'dayan'],['Bölgeyi zırhlı araçla tara',.4,'lider']],
  ['Bir camda optik yansıma gördün. 800 metre, rüzgâr sağdan.',['Rüzgârı hesapla, nefesini tut, tek atış',1,'nisan'],['Makineliyle o pencereyi tara',.35,'nisan'],['Yerini değiştir, tekrar gözetle',.6,'disiplin']],
  ['Nişancının yerini ele geçirdiniz; geride bir defter kaldı.',['Defteri istihbarata ilet, hedef listesini çöz',1,'strat'],['Defteri yak',.15,'disiplin'],['Defteri kendin incele',.4,'strat']]]},
 {id:'ihaussu',m:1,ti:'İHA üssü baskını',k:['ozel','kara','hava'],t:[2,4],sc:'gece',ph:[
  ['Kamikaze İHA saldırılarının kalkış noktası bulundu: {sehir} yakınında, bir sera görünümlü hangar.',['Önce elektronik keşif, sonra gece sessiz sızma',1,'strat'],['Sabah hava saldırısı iste',.5,'strat'],['Hemen kara baskını',.35,'dovus']],
  ['Hangarda 30 İHA, yakıt tankları ve iki operatör var.',['Operatörleri sağ yakala, kontrol istasyonunu al',1,'dovus'],['Hangarı hemen ateşe ver',.4,'nisan'],['İHA\'ları tek tek sök',.2,'strat']],
  ['Kontrol istasyonu ekranında başka bir üssün koordinatları var.',['Koordinatları kaydet, verileri al, hangarı imha ederek çekil',1,'strat'],['Sadece hangarı imha et',.4,'disiplin'],['İkinci üsse hemen git',.25,'lider']]]},
 {id:'elcilik',ti:'Büyükelçilik tahliyesi',k:['ozel','kara','deniz','hava'],t:[2,4],sc:'sehir',ph:[
  ['{sehir} kaos içinde; büyükelçiliğimizin önünde kalabalık toplanmış, 140 vatandaşımız içeride.',['Helikopter ve kara konvoyu iki aşamalı tahliye planı',1,'strat'],['Herkesi tek konvoyla çıkar',.35,'lider'],['Kalabalığı dağıt',.15,'dovus']],
  ['Konvoy yolunda bir barikat; silahlı gruplar araç arıyor.',['Yerel güvenlikle müzakere et, alternatif rotayı hazırla',1,'lider'],['Barikatı zorla geç',.35,'dovus'],['Konvoyu geri çevir',.4,'disiplin']],
  ['Son helikopter dolu; iki vatandaş ve bir yerel tercüman kaldı.',['Bir sonraki tura kadar yanlarında kal, çevre güvenliği al',1,'lider'],['Tercümanı bırak',.2,'disiplin'],['Helikopteri aşırı yükle',.35,'strat']]]},
 {id:'liman',ti:'Liman baskını',k:['deniz','ozel','sahil'],t:[1,4],sc:'deniz',ph:[
  ['{dusman} bağlantılı bir şebeke {sehir} limanında silah dolu bir konteyner yüklüyor.',['Su altından SAT timi, aynı anda karadan sahil güvenlik',1,'strat'],['Limanı abluka altına al',.5,'disiplin'],['Gemiyi denizde yakala',.4,'strat']],
  ['Vinç operatörü alarm verdi; konteyner gemiye inmek üzere.',['Vinci kontrol altına al, gemiye çıkma ekibini gönder',1,'dovus'],['Vinç halatını vur',.35,'nisan'],['Gemiyi limandan çıkmadan engelle',.6,'strat']],
  ['Konteynerde silahların yanında sahte belgeler de var.',['Delil zincirini koru, belgeleri istihbarata ilet',1,'disiplin'],['Silahlara el koy, belgeleri boş ver',.4,'strat'],['Basına hemen açıkla',.2,'lider']]]},
 {id:'havaalani',ti:'Havaalanı ele geçirme',k:['ozel','kara','hava'],t:[3,4],sc:'masa',ph:[
  ['{sehir} havaalanı stratejik önemde; ele geçirilirse ikmal köprüsü kurulacak.',['Paraşütçülerle pisti ele geçir, ardından nakliye uçaklarıyla takviye',1,'strat'],['Kara kolunu uzun yoldan gönder',.4,'lider'],['Pisti bombalayıp kullanılmaz hâle getir',.3,'strat']],
  ['Pistin kenarında düşman zırhlıları toparlanıyor.',['Tanksavar ekipleri ve yakın hava desteğiyle karşı koy',1,'nisan'],['Pisti bırakıp terminale çekil',.35,'disiplin'],['Zırhlılara doğrudan hücum',.2,'dovus']],
  ['Havaalanı alındı; ilk nakliye uçağı 20 dakika uzakta.',['Pist hasarını onar, hava savunmasını kur, uçağı indir',1,'strat'],['Uçağı beklemeden ilerle',.35,'lider'],['Uçağı geri çevir',.3,'disiplin']]]});
Object.assign(OPFIT,{});OPFIT.gizli.push('hvt','kopru','tunel','avci','ihaussu','liman');OPFIT.agir.push('havaalani');OPFIT.hafif.push('csar','elcilik');

/* ---------- Harekât sahası: şehir çeşitliliği, yurt dışı, düşman toprağı ---------- */
const DEEP=['hvt','kopru','radar','ihaussu','kesif','csar','liman','havaalani'];
function threatInfo(){const me=S.nation,N=NAT[me];const W=S.world;
 const en=W.war||NK.filter(k=>k!==me&&!allied(me,k)).sort((a,b)=>rel(me,a)-rel(me,b))[Math.floor(R()*Math.min(3,NK.length-1))]||NK.find(k=>k!==me);
 const al=NK.filter(k=>k!==me&&allied(me,k));S.citySeen=S.citySeen||[];
 const pickCity=(nat)=>{const C=NAT[nat].cities.filter(c=>!S.citySeen.includes(c[0]));return pick(C.length?C:NAT[nat].cities)};
 const th=pick(N.thr);let cn=me,city,saha='yurtici';
 const r=R();
 if(T()>=1&&al.length&&r<.18){cn=pick(al);city=pickCity(cn);saha='muttefik'}
 else if(T()>=2&&r<.33){cn=en;city=pickCity(cn);saha='dusman'}
 else{const near=N.cities.slice().sort((a,b)=>hav([a[2],a[1]],[th[2],th[1]])-hav([b[2],b[1]],[th[2],th[1]])).filter(c=>!S.citySeen.includes(c[0]));city=pick((near.length?near:N.cities).slice(0,4))}
 S.citySeen=[...S.citySeen,city[0]].slice(-5);
 return{en,th:saha==='yurtici'?th:[NAT[cn].n+' içleri',city[1]+(R()-.5)*1.5,city[2]+(R()-.5)*1.5],city,al:al.length?pick(al):null,cn,saha}}
const SAHA={yurtici:['YURT İÇİ','Kendi topraklarında'],muttefik:['MÜTTEFİK TOPRAĞI','Ortak harekât'],dusman:['DÜŞMAN TOPRAĞI','Derin harekât']};
function opMap(){const o=S.op;const k=o.cn||S.nation,f=projFor(k,340,200,14);const[cx,cy]=f(o.city[2],o.city[1]);const[tx,ty]=f(o.thr[2],o.thr[1]);
 const ex=`<defs><marker id="oah" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#ff5a3a"/></marker></defs><path d="M${tx.toFixed(1)} ${ty.toFixed(1)} L${(cx+(tx-cx)*.25).toFixed(1)} ${(cy+(ty-cy)*.25).toFixed(1)}" stroke="#ff5a3a" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#oah)"/><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="9" fill="none" stroke="${getAcc()}" stroke-width="2"><animate attributeName="r" values="7;12;7" dur="2s" repeatCount="indefinite"/></circle>`;
 return nationMap(k,f,ex)}

/* ---------- Görev seçimi: zincir harekâtlar ve sahaya uygun görevler ---------- */
function pickOp(){
 const t=T(),k=B().k;let pool=OPS.filter(o=>o.k.includes(k)&&t>=o.t[0]&&t<=o.t[1]);if(!pool.length)pool=OPS.filter(o=>t>=o.t[0]&&t<=o.t[1]);if(!pool.length)pool=OPS;
 const ti=threatInfo();let chain=null;
 if(S.chain&&S.chain.d<=S.day){chain=S.chain;S.chain=null}
 let o;if(chain){o=OPS.find(x=>x.id===chain.id)||pick(pool);ti.city=chain.city;ti.cn=chain.cn;ti.en=chain.en;ti.saha=chain.cn===S.nation?'yurtici':'dusman';ti.th=chain.cn===S.nation?ti.th:[NAT[chain.cn].n+' içleri',chain.city[1]+.6,chain.city[2]+.6]}
 else{if(ti.saha!=='yurtici'){const dp=pool.filter(x=>DEEP.includes(x.id));if(dp.length)pool=dp}
  const fresh=pool.filter(x=>!(S.opSeen||[]).includes(x.id));const fm=fresh.filter(x=>x.m);o=fm.length&&R()<.4?pick(fm):pick(fresh.length?fresh:pool)}
 if(o.id==='elcilik'&&ti.cn===S.nation){ti.cn=pick(NK.filter(x=>x!==S.nation));ti.city=pick(NAT[ti.cn].cities);ti.saha=allied(S.nation,ti.cn)?'muttefik':'dusman';ti.th=[NAT[ti.cn].n+' içleri',ti.city[1]+.5,ti.city[2]+.5]}
 S.opSeen=[...(S.opSeen||[]),o.id].slice(-10);
 const ms=mkSteps(o);timSync();
 S.op={intel:null,code:pick(CODE_A)+' '+pick(CODE_B),id:o.id,en:ti.en,thr:ti.th,city:ti.city,cn:ti.cn,saha:ti.saha,al:ti.al,ph:0,picks:[],notes:[],g:ms.g,steps:ms.steps,mod:ms.mod,saat:String(Math.floor(R()*5)).padStart(2,'0')+':'+String(Math.floor(R()*6)*10).padStart(2,'0'),st:0,ords:ms.steps.map(()=>[0,1,2].sort(()=>R()-.5)),hp:100,amm:100,giz:ms.g==='masa'?50:70,mom:50,sivil:0,clk:0,logs:[],hes:0,wia:[],uye:uye(),km:4+Math.floor(R()*14),hard:!!S.nextHard,chain:chain?chain.from:null};
 S.nextHard=false;S.op.intel=intelOf(S.op);if(S.op.hard)S.op.intel.en=Math.round(S.op.intel.en*1.4);if(chain){S.op.intel.en=Math.round(S.op.intel.en*.85)}if(S.wx&&ti.cn===S.nation)newWeather(ti.city)}
const CHAINS={kesif:'hvt',koy:'hvt',hvt:'tunel',tunel:'ihaussu',avci:'hvt',ihasurusu:'ihaussu',kacak:'liman',liman:'hvt',radar:'havaalani',kontrol:'avci',devriye:'tunel'};
function chainAfter(def,res){const nx=CHAINS[def.id];if(!nx||res<2||R()>.6)return null;const o=S.op;const next=OPS.find(x=>x.id===nx);if(!next)return null;
 S.chain={id:nx,city:o.city,cn:o.cn||S.nation,en:o.en,d:S.day+1,from:def.ti};return next}

/* ---------- İcra anı: kritik kararda refleks testi ---------- */
function opPickQ(v){const o=S.op;if(o&&o.prep&&!S.mDone&&o.st===KTI&&!o.qte&&S.trainMode!=='auto'){clearTimeout(UI.ktT);UI.ktPause=true;qteRun(mod=>{o.qte=1;o.nb=(o.nb||0)+mod;UI.ktPause=false;opStep(v)});return}opStep(v)}
function qteRun(cb){const el=document.createElement('div');el.id='qte';const spd=1.15/Math.sqrt(MGF()/1.4);
 el.innerHTML=`<div class="qte"><div class="q-k">İCRA ANI</div><div class="q-t">Nişangâh yeşil bölgedeyken dokun</div><div class="q-bar"><i class="q-g"></i><i class="q-p"></i><b id="qm"></b></div><div class="q-r" id="qr"></div><button class="q-btn" id="qb">ATEŞ!</button></div>`;
 document.body.appendChild(el);let x=0,d=1,last=performance.now(),done=false,raf;const m=el.querySelector('#qm');const t0=performance.now();
 const tick=now=>{if(done)return;const dt=(now-last)/1000;last=now;x+=d*spd*dt;if(x>1){x=1;d=-1}if(x<0){x=0;d=1}m.style.left=(x*100)+'%';if(now-t0>4200*MGF()/1.4)return fin(null);raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);
 const fin=hit=>{if(done)return;done=true;cancelAnimationFrame(raf);const dd=hit==null?1:Math.abs(x-.5);const[mod,txt,cl]=hit==null?[-.06,'TEPKİ GECİKTİ','b']:dd<.06?[.2,'KUSURSUZ İCRA','p']:dd<.16?[.1,'İSABETLİ','g']:[-.08,'ISKALADIN','b'];
  const r=el.querySelector('#qr');r.textContent=txt+(mod>0?` · şans +%${Math.round(mod*100)}`:` · şans −%${Math.round(-mod*100)}`);r.className='q-r '+cl;el.querySelector('.qte').classList.add('end',cl);setTimeout(()=>{el.remove();cb(mod)},850)};
 el.querySelector('#qb').addEventListener('pointerdown',e=>{e.preventDefault();fin(true)});el.querySelector('.qte').addEventListener('pointerdown',e=>{if(e.target.id!=='qb')fin(true)})}

/* ---------- Madalyalar ---------- */
const MEDALS={kusursuz:['Kusursuz Harekât Nişanı','Kuvvetin %90\'ın üstünde kalarak görevi tamamladın.','#e2c160'],golge:['Gölge Nişanı','Düşman seni hiç görmedi.','#8fb0d0'],cesaret:['Üstün Cesaret Madalyası','Zor bir görevi kayıpsız tamamladın.','#c8302a'],seri:['Seri Komutan Nişanı','Üst üste dört kusursuz karar.','#5fe08a'],derin:['Derin Harekât Nişanı','Düşman topraklarında görev başarısı.','#b07ad0'],zincir:['Zincirin Halkası','Bir istihbarat zincirini sonuna kadar takip ettin.','#e0a040']};
function medalsFor(o,res,kia){const L=[];if(res<2)return L;if(o.hp>=90)L.push('kusursuz');if(o.giz>=75)L.push('golge');if(o.hard&&!kia)L.push('cesaret');if((o.streak||0)>=4)L.push('seri');if(o.saha==='dusman')L.push('derin');if(o.chain)L.push('zincir');return L.slice(0,2)}
function medalSVG(k,sz=46){const c=MEDALS[k][2];return `<svg viewBox="0 0 40 56" width="${sz*.72}" height="${sz}" aria-hidden="true"><path d="M8 0 H32 L26 20 H14Z" fill="${c}" opacity=".85"/><path d="M14 0 L20 20 L26 0" fill="#00000030"/><circle cx="20" cy="36" r="15" fill="url(#mdg)" stroke="#6b4a12" stroke-width="1.5"/><defs><radialGradient id="mdg" cx=".35" cy=".3"><stop offset="0" stop-color="#fff6c8"/><stop offset=".6" stop-color="#e2b84a"/><stop offset="1" stop-color="#8a6418"/></radialGradient></defs><path d="M20 26 l3 6 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1Z" fill="${c}"/></svg>`}

/* ---------- Sinematik sonuç ekranı ---------- */
function opOutro(d){fxPush(done=>{const col=['b','m','g'][d.res];const el=fxLayer(`<div class="outro ${col}"><div class="ou-scan"></div><div class="ou-c">
 <div class="lbl">HAREKÂT ${esc(d.code)} · ${esc(d.city)}</div><div class="ou-stamp">${['BAŞARISIZ','KISMİ BAŞARI','GÖREV TAMAM'][d.res]}</div>
 <div class="ou-grid"><div><b data-n="${d.el}">0</b><span>Düşman etkisiz</span></div><div><b data-n="${d.kia}">0</b><span>Şehit</span></div><div><b data-n="${d.wia}">0</b><span>Yaralı</span></div><div><b data-n="${d.xp}">0</b><span>Tecrübe</span></div></div>
 ${d.medals.length?`<div class="ou-med">${d.medals.map(m=>`<div>${medalSVG(m,54)}<b>${esc(MEDALS[m][0])}</b><small>${esc(MEDALS[m][1])}</small></div>`).join('')}</div>`:''}
 ${d.chain?`<div class="ou-chain">${ico('target',14)} İstihbarat zinciri: yarın <b>${esc(d.chain)}</b></div>`:''}
 <div class="bt-tap">Rapor için dokun</div></div></div>`,'');
 el.querySelectorAll('[data-n]').forEach(b=>{const n=+b.dataset.n;const t0=performance.now();const st=now=>{const k=Math.min(1,(now-t0)/1100);b.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(st)};setTimeout(()=>requestAnimationFrame(st),450)});
 el.addEventListener('click',()=>fxClose(done),{once:true})})}

/* ---------- Seçenek kartı etiketleri ---------- */
const TAGN={giz:['Gizli','eye'],atk:['Saldırgan','cross'],hiz:['Hızlı','bolt'],yavas:['Temkinli','glass'],risk:['Riskli','warn'],sivil:['Sivil risk','warn']};
const TAGI={eye:'<path d="M2 12 C6 5 18 5 22 12 C18 19 6 19 2 12Z M4 4 L20 20" fill="none" stroke="currentColor" stroke-width="2"/>',cross:'<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2 V7 M12 17 V22 M2 12 H7 M17 12 H22" stroke="currentColor" stroke-width="2"/>',bolt:'<path d="M13 2 L5 13 H11 L10 22 L19 10 H13Z" fill="currentColor"/>',glass:'<path d="M6 2 H18 M6 22 H18 M7 2 C7 9 17 9 17 12 C17 15 7 15 7 22 M17 2 C17 9 7 9 7 12" fill="none" stroke="currentColor" stroke-width="2"/>',warn:'<path d="M12 3 L22 20 H2Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 9 V14 M12 17 V17.5" stroke="currentColor" stroke-width="2.4"/>'};
function tagChip(t){const x=TAGN[t];if(!x)return'';return `<span class="ttag t-${t}"><svg viewBox="0 0 24 24" width="12" height="12">${TAGI[x[1]]}</svg>${x[0]}</span>`}

const A16={opick:v=>opPickQ(v)};
function medalRack(){const M=S.medals||[];if(!M.length)return'';const cnt={};M.forEach(m=>cnt[m.k]=(cnt[m.k]||0)+1);return `<div class="card medals"><div class="sec-h"><h2>Madalyaların</h2><span class="small muted">${M.length}</span></div><div class="mrk">${Object.entries(cnt).map(([k,n])=>`<div title="${esc(MEDALS[k][1])}">${medalSVG(k,50)}<b>${esc(MEDALS[k][0])}</b>${n>1?`<small>×${n}</small>`:''}</div>`).join('')}</div></div>`}
