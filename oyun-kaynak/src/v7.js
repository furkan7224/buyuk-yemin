/* ============ GÜNLÜK DÜZEN ============ */
const APB=5;const APN=['Sabah','Öğle','İkindi','Akşam','Gece','Ek'];
const WX=[['Açık','☀',24],['Parçalı bulutlu','⛅',19],['Yağmurlu','🌧',13],['Sisli','🌫',11],['Rüzgârlı','🌬',16],['Ayaz','❄',2]];
function newWeather(){const w=pick(WX);S.wx={n:w[0],i:w[1],t:w[2]+Math.round(R()*8-4)}}

/* ============ EFEKT KUYRUĞU (gün geçişi, tören) ============ */
const FXQ=[];let FXON=false;
function fxPush(f){FXQ.push(f);if(!FXON)fxNext()}
function fxNext(){const f=FXQ.shift();if(!f){FXON=false;return}FXON=true;f(()=>{FXON=false;fxNext()})}
function fxLayer(html,cls){let el=$('#fx');if(!el){el=document.createElement('div');el.id='fx';document.body.appendChild(el)}el.className=cls||'';el.innerHTML=html;el.hidden=false;return el}
function fxClose(done){const el=$('#fx');if(el){el.classList.add('out');setTimeout(()=>{el.hidden=true;el.innerHTML='';el.className=''},380)}setTimeout(done,390)}
const RM=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function dayFX(prev,sum){fxPush(done=>{
 const stars=[...Array(40)].map(()=>`<i style="left:${(R()*100).toFixed(1)}%;top:${(R()*60).toFixed(1)}%;animation-delay:${(R()*2).toFixed(2)}s"></i>`).join('');
 const el=fxLayer(`<div class="dfx"><div class="sky"></div><div class="stars">${stars}</div><div class="moon"></div><div class="sun"></div><div class="hills"></div>
 <div class="dtxt"><div class="d1"><div class="lbl">Gün ${prev} sona erdi</div><div class="clock num" id="fxc">22:00</div><div class="sumr">${sum}</div></div>
 <div class="d2"><div class="lbl">${esc(DAYS[(S.day-1)%7])} · ${S.wx?esc(S.wx.i+' '+S.wx.n+' · '+S.wx.t+'°C'):''}</div><div class="big stencil">GÜN ${S.day}</div><div class="sub">${S.izin?'İzin günü. Üniformayı çıkar.':S.world.war?'Cephe seni bekliyor.':'Yeni harekât emri masanda.'}</div></div></div>
 <button class="fxskip" id="fxs">Devam ›</button></div>`,'day');
 let t=0;const c=el.querySelector('#fxc');const iv=setInterval(()=>{t++;const h=(22+t)%24;if(c)c.textContent=String(h).padStart(2,'0')+':00';if(t>=8)clearInterval(iv)},RM()?10:190);
 const go=()=>{clearInterval(iv);clearTimeout(a);clearTimeout(z);fxClose(done)};
 const a=setTimeout(()=>{const fc=el.firstElementChild;if(fc)fc.classList.add('dawn')},RM()?50:1900);const z=setTimeout(go,RM()?900:4300);
 el.querySelector('#fxs').addEventListener('click',go);
})}
function ceremony(old,neu,unl,quote){fxPush(done=>{
 const nr=rankName(neu,S.nation,B().rs);
 const el=fxLayer(`<div class="cer"><canvas id="cfx"></canvas><div class="cflag"><svg viewBox="0 0 30 20" preserveAspectRatio="none">${flagInner(S.nation)}</svg></div><div class="spot"></div>
 <div class="cin"><div class="lbl acc" style="letter-spacing:.3em">Terfi töreni</div><div class="ins2"><div class="iold">${ins(old,96)}</div><div class="inew">${ins(neu,150)}<i class="shine"></i></div></div>
 <h2 class="stencil ctitle">${esc(nr)}</h2><div class="small muted">Karşılığı: ${esc(RANKS[neu].tr_n)} · ${esc(RANKS[neu].c)}</div>
 <p class="cq">"${esc(quote)}"<br><span class="small muted">— ${esc(cmdr())}</span></p>${unl.length?`<div class="cunl">${unl.map(u=>`<div>${ico('lock',13)} <span>${esc(u)}</span></div>`).join('')}</div>`:''}
 <button class="btn" id="csal">Selam ver</button></div></div>`,'cer');
 const cv=el.querySelector('#cfx'),ctx=cv.getContext('2d');const W=cv.width=innerWidth,H=cv.height=innerHeight;const acc=getAcc();
 const P=[...Array(RM()?0:140)].map(()=>({x:W/2+(R()-.5)*60,y:H*.38,vx:(R()-.5)*9,vy:-R()*11-3,r:2+R()*3,c:pick(['#e2bd55','#fff3b8',acc,'#ffffff']),a:R()*6}));let raf;
 const tick=()=>{ctx.clearRect(0,0,W,H);P.forEach(p=>{p.vy+=.22;p.x+=p.vx;p.y+=p.vy;p.a+=.2;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.fillStyle=p.c;ctx.fillRect(-p.r,-p.r/2,p.r*2,p.r);ctx.restore()});if(P.some(p=>p.y<H+20))raf=requestAnimationFrame(tick)};setTimeout(tick,500);
 el.querySelector('#csal').addEventListener('click',()=>{cancelAnimationFrame(raf);fxClose(done)});
})}

/* ============ KOĞUŞ ============ */
const TRAITS={kavgaci:'Kavgacı',sakaci:'Şakacı',sessiz:'Sessiz',kidemli:'Kıdemli',yetenekli:'Yetenekli',kurnaz:'Kurnaz'};
function mkKogus(nat){const fn=FN[nat]||FN.TR,sn=SQN[nat]||SQN.TR;const tr=Object.keys(TRAITS).sort(()=>R()-.5);return[0,1,2,3,4].map(i=>({n:fn[(i*3+2)%fn.length]+' '+sn[(i*2+1)%sn.length],t:tr[i],b:40+Math.round(R()*20),look:{g:'e',skin:Math.floor(R()*5),hs:pick(['asker','kisa','kel']),hc:Math.floor(R()*4),beard:pick(['yok','yok','kirli','biyik']),eye:Math.floor(R()*4),boy:175,kilo:68+Math.round(R()*22),hat:false}}))}
const kname=()=>S.rank>=8?'Birlik kadron':'Koğuş';
function kb(i,v){const m=S.kogus[i];if(m)m.b=clamp(m.b+v)}
function kall(v){S.kogus.forEach(m=>m.b=clamp(m.b+v))}
function kfight(a){const m=S.kogus[a];const p=clamp(.3+S.st.dovus/140+S.st.guc/300+(S.main&&S.sports[S.main]?.06:0),.1,.9);
 pushModal({k:kname()+' · Kavga',ti:'Yumruklar havada',art:scene('kisla'),body:`<p>${esc(m.n)} üstüne yürüdü. Etraf bir anda çember oldu; biri "Komutan geliyor!" diye bağırıyor ama kimse kıpırdamıyor.</p>`,ch:[
  {t:'Dövüş sporundaki tekniğinle kontrol al, yere indir, vurma',fn:()=>{if(R()<p){kb(a,5);kall(4);S.kh=clamp(S.kh+4);addSt('dovus',1);S.trust=clamp(S.trust-3);toast('Kavgayı kontrollü bitirdin. Saygı kazandın ama komutan duydu: güven −3.');log('Koğuşta kavga: kontrollü kazandın.')}else{addSt('saglik',-6);addSt('mental',-5);kb(a,-6);toast('Yere düştün, kaşın açıldı. Sağlık −6');log('Koğuşta kavgayı kaybettin.')}}},
  {t:'Sert bir yumruk savur',fn:()=>{const w=R()<p*.9;S.trust=clamp(S.trust-7);addSt('disiplin',-3);kb(a,-15);S.kh=clamp(S.kh-6);if(w){toast('Rakibin yere düştü ama disiplin kurulu kapıda: güven −7.')}else{addSt('saglik',-8);toast('Karşılık sert geldi. Sağlık −8, güven −7.')}log('Koğuşta yumruklu kavga.')}},
  {t:'Ellerini kaldır, geri çekil: "Değmez"',fn:()=>{addSt('disiplin',2);kb(a,2);S.kh=clamp(S.kh+1);addSt('mental',-2);toast('Kavga çıkmadı. Bazıları korktuğunu düşündü, komutan ise olgunluğunu not etti.');S.trust=clamp(S.trust+2)}}]})}
const KEV=[
 {ti:'Omuz atma',w:m=>m.t==='kavgaci',tx:(a)=>`Yemekhane kuyruğunda ${a} bilerek omuz attı; tepsin yere düştü. Çorba botlarına sıçradı. Bütün masa susup size bakıyor.`,ch:[
  ['Sakin kal, gözünün içine bak: "Bir daha dikkat et."',(i)=>{addSt('disiplin',1);kb(i,3);S.kh=clamp(S.kh+2);toast('Sesini yükseltmeden sınır çizdin. Koğuş bunu fark etti.')}],
  ['Hesabını sor, sen de omuz at',(i)=>{kfight(i)}],
  ['Görmezden gel, tepsini topla',(i)=>{addSt('mental',-3);kb(i,-4);S.kh=clamp(S.kh-2);toast('Kimse bir şey demedi ama arkandan gülüşmeler duydun.')}],
  ['Takım komutanına bildir',(i)=>{S.trust=clamp(S.trust+2);kall(-5);kb(i,-10);toast('Kural işledi ama koğuşta "ispiyoncu" fısıltıları başladı.')}]]},
 {ti:'Kayıp saat',tx:(a,b)=>`${ek(a,'nin')} babasından kalan saati kayboldu. ${ek(b,'den')} şüpheleniyor, ikisi ranzaların arasında bağırışıyor.`,ch:[
  ['Arabulucu ol: önce sakinleştir, sonra birlikte ara',(i,j)=>{if(R()<.6){kb(i,10);kb(j,8);S.kh=clamp(S.kh+6);toast('Saat dolabın arkasına düşmüş. Koğuşta gerginlik bitti.')}else{kb(i,4);kb(j,4);toast('Saat çıkmadı ama kavga da çıkmadı.')}addSt('lider',1)}],
  ['Komutandan dolap araması iste',(i,j)=>{kb(j,-12);S.kh=clamp(S.kh-5);S.trust=clamp(S.trust+1);toast('Arama yapıldı, saat bulunamadı. Herkes birbirine şüpheyle bakıyor.')}],
  ['Kanıt yokken suçlama yapılamaz, de',(i,j)=>{kb(j,10);kb(i,-6);addSt('disiplin',1);toast(`${j>=0?S.kogus[j].n:''} sana minnettar; ${S.kogus[i].n} ise kırgın.`)}]]},
 {ti:'Horlama savaşı',tx:(a,b)=>`${a} her gece traktör gibi horluyor. Gece 03:00'te ${b} ona yastık fırlattı, koğuş uyandı.`,ch:[
  ['Gülerek ortamı yumuşat, ranza değişimi öner',(i,j)=>{kb(i,6);kb(j,6);S.kh=clamp(S.kh+5);addSt('mental',2);toast('Kahkahalar yatıştı; ertesi gün ranzalar değişti.')}],
  ['Herkesi sustur, sabah içtiması var',(i,j)=>{addSt('disiplin',1);S.kh=clamp(S.kh-1)}],
  ['Kulak tıkacı al, kendi işine bak',(i,j)=>{addSt('mental',-1);S.fatigue=clamp(S.fatigue+6)}]]},
 {ti:'Nöbet takası',tx:(a)=>`${a} sevgilisinin doğum günü için cumartesi gecesi nöbetini seninle değiştirmek istiyor.`,ch:[
  ['Kabul et, sen tut',(i)=>{kb(i,15);S.fatigue=clamp(S.fatigue+12);S.kh=clamp(S.kh+3);toast(`${S.kogus[i].n} sana borçlu. Koğuşta adın "dost" diye geçiyor.`)}],
  ['Kabul et ama karşılığında bir iyilik iste',(i)=>{kb(i,6);S.fatigue=clamp(S.fatigue+12);S.money+=200}],
  ['Reddet, kendi planın var',(i)=>{kb(i,-6)}]]},
 {ti:'Yeniye sataşma',w:m=>m.t==='kavgaci'||m.t==='kidemli',tx:(a)=>`Koğuşa yeni gelen bir er var. ${a} ona "acemi" diye sataşıp yatağını dağıttı. Çocuğun gözleri doldu.`,ch:[
  ['Araya gir: "Burada kimse kimseyi ezmez."',(i)=>{kb(i,-8);kall(3);S.kh=clamp(S.kh+6);addSt('lider',1.2);toast('Yeni er sana minnettar. Koğuşta sözün dinleniyor.')}],
  ['Yeni erle sonradan konuş, ona destek ol',(i)=>{addSt('lider',.6);S.kh=clamp(S.kh+2)}],
  ['Karışma, herkes bu yollardan geçti',(i)=>{kb(i,4);S.kh=clamp(S.kh-6);addSt('mental',-2)}]]},
 {ti:'Kart masasında hile',w:m=>m.t==='kurnaz',tx:(a,b)=>`Akşam kart oyununda ${b}, ${ek(a,'i')} hile yapmakla suçladı. Masada maaşın bir kısmı duruyor.`,ch:[
  ['Kartları kontrol et, adil davran',(i,j)=>{if(R()<.5){kb(i,-8);kb(j,8);toast('Kartlar işaretliymiş. Para sahiplerine döndü.')}else{kb(i,8);kb(j,-4);toast('Hile yokmuş; herkes özür diledi.')}S.kh=clamp(S.kh+2)}],
  ['Oyunu bitir, parayı geri dağıt',(i,j)=>{kall(1);addSt('disiplin',1)}],
  ['Sen de oyuna katıl, ortamı değiştir',(i,j)=>{S.money-=150;addSt('mental',3);kall(2)}]]},
 {ti:'Mektup gelmiyor',w:m=>m.t==='sessiz',tx:(a)=>`${a} üç haftadır evden haber alamıyor. Yemek yemiyor, nöbette dalgın.`,ch:[
  ['Yanına otur, telefonunu ver: "Ara onları."',(i)=>{kb(i,18);S.kh=clamp(S.kh+4);addSt('mental',2);toast('Annesine ulaştı; telefon bozukmuş. Gülümsedi.')}],
  ['Takım komutanına durumunu bildir, destek iste',(i)=>{kb(i,8);S.trust=clamp(S.trust+2)}],
  ['Kendi derdin yeter',(i)=>{kb(i,-8);S.kh=clamp(S.kh-3)}]]},
 {ti:'Doğum günü sürprizi',w:m=>m.t==='sakaci',tx:(a)=>`Bugün ${ek(a,'nin')} doğum günü. Koğuş kantinden pasta almak için para topluyor.`,ch:[
  ['Katıl, en büyük payı sen ver',(i)=>{S.money-=300;kb(i,14);kall(5);S.kh=clamp(S.kh+8);addSt('mental',5);toast('Gece yarısı mumlar yandı, koğuşta kahkahalar. Ruh hali +5')}],
  ['Az da olsa katıl',(i)=>{S.money-=100;kb(i,6);kall(2)}],
  ['Katılma',(i)=>{kb(i,-5);S.kh=clamp(S.kh-2)}]]},
 {ti:'Kıdemli baskısı',w:m=>m.t==='kidemli',tx:(a)=>`Kıdemli ${a}, kendi ranzasını toplamanı ve botlarını boyamanı istiyor. "Burada usul böyle," diyor.`,ch:[
  ['Saygıyla reddet: "Herkes kendi işini yapar."',(i)=>{kb(i,-6);kall(4);addSt('disiplin',1);addSt('hirs',2)}],
  ['Yap, sorun çıkmasın',(i)=>{kb(i,6);addSt('mental',-4);addSt('hirs',-1)}],
  ['Bunu komutana taşı',(i)=>{kb(i,-12);S.trust=clamp(S.trust+2);kall(-2)}]]},
 {ti:'Gece sohbeti',tx:(a)=>`Nöbetten sonra ${a} ile sigara içmeyen iki adam olarak soğukta çay içtiniz. Konu bir anda ailelere, korkulara geldi.`,ch:[
  ['Kendi hikâyeni anlat',(i)=>{kb(i,16);addSt('mental',5);S.kh=clamp(S.kh+2);toast(`${S.kogus[i].n} uzun süre sustu, sonra omzuna dokundu. Ruh hali +5`)}],
  ['Sadece dinle',(i)=>{kb(i,10);addSt('lider',.6)}]]},
 {ti:'Ortak ceza',tx:(a)=>`${ek(a,'nin')} dolabında yasak telefon bulundu. Bütün koğuş gece 02:00'de tam teçhizat koşuya çıkarıldı.`,ch:[
  ['Koğuşu topla: "Hep birlikte bitireceğiz."',(i)=>{kall(5);kb(i,10);S.kh=clamp(S.kh+6);addSt('lider',1);addSt('dayan',.8);S.fatigue=clamp(S.fatigue+15)}],
  ['Suçluya kızgınlığını belli et',(i)=>{kb(i,-12);S.kh=clamp(S.kh-4);S.fatigue=clamp(S.fatigue+15)}]]},
 {ti:'Şaka sınırı aştı',w:m=>m.t==='sakaci',tx:(a,b)=>`${ek(a,'nin')} botların içine diş macunu sıkma şakası ${ek(b,'i')} çok kızdırdı. Kavga çıkmak üzere.`,ch:[
  ['İkisini ayır, şakanın sınırını konuşun',(i,j)=>{kb(i,4);kb(j,6);S.kh=clamp(S.kh+4);addSt('lider',.8)}],
  ['Sen de gül, büyütme',(i,j)=>{kb(i,6);kb(j,-8)}],
  ['Şakacıyı sert uyar',(i,j)=>{kb(i,-6);kb(j,8);addSt('disiplin',1)}]]},
];
function kogusEvent(){if(!S.kogus||!S.kogus.length)return;const ev=pick(KEV.filter(e=>!(S.kev||[]).includes(e.ti)));if(!ev)return;S.kev=[...(S.kev||[]),ev.ti].slice(-6);
 let i=Math.floor(R()*S.kogus.length);if(ev.w){const c=S.kogus.findIndex(ev.w);if(c>=0)i=c}let j=(i+1+Math.floor(R()*(S.kogus.length-1)))%S.kogus.length;const A=S.kogus[i].n,Bn=S.kogus[j].n;
 pushModal({k:kname(),ti:ev.ti,art:`<div class="row" style="justify-content:center;gap:10px;padding:8px">${avatar(64,B(),Math.max(0,S.rank-2),S.kogus[i].look,S.nation,A)}${ev.tx.length>1?avatar(64,B(),Math.max(0,S.rank-2),S.kogus[j].look,S.nation,Bn):''}</div>`,body:`<p>${esc(ev.tx(A,Bn))}</p><p class="small muted">${esc(A)}: ${TRAITS[S.kogus[i].t]}</p>`,ch:ev.ch.map(([t,fn])=>({t,fn:()=>{fn(i,j);log(kname()+': '+ev.ti)}}))})}
function kogusTick(){if(!S.kogus)return;const avg=S.kogus.reduce((a,m)=>a+m.b,0)/S.kogus.length;S.kh=clamp((S.kh??55)*.85+avg*.15);addSt('mental',(S.kh-50)/40);if(R()<.4)kogusEvent()}
function kogusAct(v){const[a,i]=v.split('|');if(a==='cay'){if(S.money<250)return toast('Paran yetmiyor.');if(S.soc.cay===S.day)return toast('Bugün zaten ısmarladın.');S.money-=250;S.soc.cay=S.day;kall(4);S.kh=clamp(S.kh+5);toast('Kantinden çay ve simit geldi. Koğuşun havası ısındı.')}
 if(a==='konus'){if(!useAP())return;const m=S.kogus[+i];kb(+i,12);addSt('mental',2);toast(m.n+' ile uzun uzun konuştunuz. Bağ +12')}save();render()}

/* ============ DİPLOMASİ ============ */
const AUTH=[[10,'Diplomatik mektup'],[11,'Ticaret anlaşması'],[13,'Yurt dışında üs ve ticaret karakolu'],[14,'Savaş ilanı ve fetih harekâtı']];
const LETP=[['baris','İşbirliği ve barış önerisi',6],['uyari','Resmî uyarı',-4],['tehdit','Askerî tehdit',-12],['ozur','Özür ve yatıştırma',8],['ittifak','İttifak daveti',4]];
const LETT=[['resmi','Resmî ve ölçülü',0],['sicak','Sıcak ve dostane',3],['sert','Sert ve kesin',-4]];
function letterStart(k){if(S.rank<10)return toast('Diplomatik yazışma yetkisi Yüzbaşı karşılığı rütbede açılır.');if(S.letD===S.day)return toast('Bugün zaten bir mektup gönderdin.');
 pushModal({k:'Diplomatik mektup · '+NAT[k].n,ti:'Mektubun amacı',art:`<div class="letter mini"><div class="seal">${flag(S.nation,22)}</div><b>${esc(NAT[S.nation].n)} ${S.rank>=14?'Genelkurmayı':'Askerî Ataşeliği'}</b><span>Alıcı: ${esc(NAT[k].n)} Dışişleri Bakanlığı</span></div>`,body:'<p class="small muted">Mektubun amacını seç. Ardından üslubunu belirleyeceksin.</p>',ch:LETP.map(([id,n])=>({t:n,fn:()=>setTimeout(()=>letterTone(k,id),0)}))})}
function letterTone(k,pid){pushModal({k:'Diplomatik mektup · '+NAT[k].n,ti:'Üslup',body:`<p class="small muted">${esc(LETP.find(p=>p[0]===pid)[1])} · Üslup, cevabı doğrudan etkiler.</p>`,ch:LETT.map(([id,n])=>({t:n,fn:()=>setTimeout(()=>letterSend(k,pid,id),0)}))})}
function letterSend(k,pid,tid){const me=S.nation;const P=LETP.find(p=>p[0]===pid),T_=LETT.find(t=>t[0]===tid);const r=rel(me,k);
 let score=r/50+(T_[2]/6)+(R()-.5)*.8+(pid==='tehdit'?(pwr(me)>pwr(k)*1.2?.6:-.6):0);const out=score>.5?'olumlu':score>-.3?'notr':'olumsuz';
 let dr=P[2]+T_[2]+(out==='olumlu'?4:out==='olumsuz'?-5:0);if(pid==='ittifak'&&out==='olumlu'&&r>30&&!allied(me,k)){S.world.al.push(pk(me,k));news(`İTTİFAK: ${NAT[me].n} ile ${NAT[k].n} mektuplaşmanın ardından ittifak kurdu.`,'global')}
 if(S.letMine){const sm=sentiment8(S.letMine);dr+=clamp(sm.score,-8,4)}setRel(me,k,r+dr);S.letD=S.day;S.xp+=5;
 const REP={baris:{olumlu:'Önerinizi memnuniyetle karşılıyoruz. Teknik heyetlerimizin en kısa sürede bir araya gelmesini öneriyoruz.',notr:'Mektubunuzu aldık. Önerinizi değerlendirmeye alacağız; somut adımları görmek isteriz.',olumsuz:'Sözlerinizle eylemleriniz arasındaki çelişki ortadayken bu öneriyi ciddiye almamız mümkün değildir.'},
  uyari:{olumlu:'Endişelerinizi anlıyoruz. Sınır bölgesindeki faaliyetlerimizi gözden geçireceğiz.',notr:'Uyarınızı not ettik. Egemenlik haklarımız konusunda taviz vermeyeceğimizi hatırlatırız.',olumsuz:'İç işlerimize karışma girişimini kesinlikle reddediyoruz.'},
  tehdit:{olumlu:'Gerilimin tırmanmasını istemiyoruz. Bölgedeki birliklerimizi geri çekmeyi değerlendiriyoruz.',notr:'Tehdit diliyle sonuç alınamaz. Diplomatik kanallar açıktır.',olumsuz:'Her türlü saldırıya karşılık vermeye hazırız. Bu mektubu uluslararası kamuoyuyla paylaşacağız.'},
  ozur:{olumlu:'Yapıcı tutumunuzu takdir ediyoruz. Sayfayı çevirmeye hazırız.',notr:'Özrünüzü kabul ediyoruz; güvenin yeniden kurulması zaman alacak.',olumsuz:'Bu açıklama yaşanan zararı telafi etmekten uzaktır.'},
  ittifak:{olumlu:'Davetinizi onurla kabul ediyoruz. Ortak savunma protokolünün taslağını gönderiyoruz.',notr:'Davetiniz için teşekkür ederiz. Şu aşamada stratejik ortaklığı derinleştirmeyi tercih ediyoruz.',olumsuz:'Mevcut taahhütlerimiz böyle bir ittifaka izin vermemektedir.'}}[pid][out];
 S.letters=[{d:S.day,k,p:P[1],t:T_[1],o:out,txt:REP,mine:S.letMine||''},...(S.letters||[])].slice(0,20);
 feed('global',`${NAT[k].n}, ${ek(NAT[me].n,'nin')} mektubuna ${out==='olumlu'?'olumlu':out==='notr'?'temkinli':'sert'} yanıt verdi`,REP,[k,me]);
 S.letMine=null;pushModal({k:'Gelen yanıt',ti:NAT[k].n+' Dışişleri Bakanlığı',art:`<div class="letter"><div class="seal">${flag(k,30)}</div><div class="lh">${esc(NAT[k].n)} Dışişleri Bakanlığı<br><span>Sayın ${esc(S.name)}, ${esc(myRank())}</span></div><p>${esc(REP)}</p><div class="sig">Saygılarımızla</div></div>`,body:`<div class="fx"><span class="${dr>=0?'p':'n'}">İlişki ${dr>=0?'+':''}${dr}</span><span>${out==='olumlu'?'Olumlu yanıt':out==='notr'?'Temkinli yanıt':'Olumsuz yanıt'}</span></div>`});save();render()}
function tradeDeal(k){const me=S.nation;if(S.rank<11)return toast('Ticaret anlaşması yetkisi Binbaşı karşılığı rütbede açılır.');if(S.world.war===k)return toast('Savaştığın ülkeyle ticaret olmaz.');S.trade=S.trade||{};if(S.trade[k])return toast('Bu ülkeyle zaten ticaret anlaşman var.');
 if(rel(me,k)<10){setRel(me,k,rel(me,k)-3);return pushModal({k:'Ticaret',ti:'Teklif reddedildi',body:`<p>${esc(NAT[k].n)}, mevcut ilişkiler nedeniyle ticaret teklifini reddetti. İlişki en az +10 olmalı.</p>`})}
 S.trade[k]={d:S.day,v:Math.round(8000+pwr(k)*120)};setRel(me,k,rel(me,k)+8);news(`${NAT[me].n} ile ${NAT[k].n} savunma ve enerji ticareti anlaşması imzaladı.`,'ekonomi');
 pushModal({k:'Ticaret',ti:'Anlaşma imzalandı',body:`<p>${flag(k,22)} ${esc(NAT[k].n)} ile ticaret anlaşması imzalandı. Hazineye günlük yaklaşık <b>${money(S.trade[k].v)}</b> gelir sağlayacak.</p><p class="small muted">İlişkiler bozulursa anlaşma askıya alınabilir.</p>`});save();render()}
function baseOpen(k){const me=S.nation;if(S.rank<13)return toast('Yurt dışı üs yetkisi Albay karşılığı rütbede açılır.');S.bases=S.bases||[];if(S.bases.find(b=>b.k===k))return toast('Bu ülkede zaten bir varlığın var.');const al=allied(me,k);const cost=al?40000:65000;
 if(!(S.trade&&S.trade[k])&&!al)return toast('Önce ticaret anlaşması ya da ittifak gerekiyor.');if(rel(me,k)<30)return toast('İlişki en az +30 olmalı.');if((S.treasury||0)<cost)return toast('Hazinede yeterli kaynak yok: '+money(cost));
 S.treasury-=cost;const city=pick(NAT[k].cities.filter(c=>!c[3]));S.bases.push({k,city:city[0],t:al?'Askerî üs':'Ticaret karakolu',lv:1,sec:60,eko:45,d:S.day});news(`${NAT[me].n}, ${ek(city[0],'de')} ${al?'askerî üs':'ticaret karakolu'} açtı.`,'global');
 pushModal({k:'Yurt dışı varlık',ti:(al?'Askerî üs':'Ticaret karakolu')+' · '+city[0],art:nationMap(k,projFor(k,340,200,14),(()=>{const f=projFor(k,340,200,14);const[x,y]=f(city[2],city[1]);return`<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="${getAcc()}" stroke-width="2.5"/><polygon points="${starPts(x,y,5)}" fill="${getAcc()}"/>`})()),body:`<p>${flag(k,22)} ${esc(NAT[k].n)} topraklarında, ${esc(city[0])} yakınında ilk varlığını kurdun. Bölgeler sekmesinden yönetebilirsin.</p>`});save();render()}
function baseAct(v){const[i,a]=v.split('|');const b=(S.bases||[])[+i];if(!b)return;if(b.act===S.day)return toast('Bugün bu varlık için zaten karar verdin.');
 const cost={yatirim:15000,guvenlik:8000,genis:30000}[a];if((S.treasury||0)<cost)return toast('Hazine yetersiz: '+money(cost));if(!useAP())return;S.treasury-=cost;b.act=S.day;
 if(a==='yatirim')b.eko=clamp(b.eko+14);if(a==='guvenlik')b.sec=clamp(b.sec+15);if(a==='genis'){b.lv++;b.eko=clamp(b.eko+6)}toast(b.city+': karar uygulandı.');save();render()}
function foreignDaily(notes){let inc=0;const me=S.nation;Object.entries(S.trade||{}).forEach(([k,t])=>{if(rel(me,k)<-10||S.world.war===k){delete S.trade[k];notes.push(`<span class="red">${esc(NAT[k].n)} ile ticaret anlaşması askıya alındı.</span>`)}else inc+=t.v});
 (S.bases||[]).slice().forEach(b=>{b.sec=clamp(b.sec-.8);b.eko=clamp(b.eko+(b.sec>50?.6:-.8));inc+=b.eko*b.lv*220;if(rel(me,b.k)<-10||S.world.war===b.k||b.sec<10){S.bases=S.bases.filter(x=>x!==b);notes.push(`<span class="red">${esc(NAT[b.k].n)}, ${ek(b.city,'de')}ki ${b.t.toLocaleLowerCase('tr')} varlığına el koydu.</span>`);news(`${NAT[b.k].n}, ${ek(NAT[me].n,'nin')} ${ek(b.city,'de')}ki varlığına el koydu.`,'global')}});
 if(inc){S.treasury=(S.treasury||0)+inc;notes.push(`Ticaret ve yurt dışı varlık geliri: <b>${money(inc)}</b>.`)}}
function warDeclare(k){if(S.rank<14)return toast('Savaş ilanı yetkisi general/amiral rütbesinde açılır.');if(S.world.war)return toast('Zaten bir savaşın içindesin.');if(allied(S.nation,k))return toast('Müttefikine savaş ilan edemezsin.');
 const reasons=WHY.slice().sort(()=>R()-.5).slice(0,3).map(w=>w.replace(/\{x\}/g,NAT[k].n));
 pushModal({k:'Savaş kararı · '+NAT[k].n,ti:'Gerekçeni seç',art:mapSVG(),body:`<p>${flag(S.nation,22)} ${esc(NAT[S.nation].n)} – ${flag(k,22)} ${esc(NAT[k].n)} · Güç ${pwr(S.nation)} : ${pwr(k)}</p><p class="small muted">Savaş ilanı müttefiklerinin ve dünya kamuoyunun tepkisine yol açar. ${esc(NAT[k].n)} ile ittifaklı ülkeler sana karşı tavır alacak.</p>`,ch:[...reasons.map(r=>({t:r,fn:()=>{declareWar(k,r);S.world.warWhy=r;NK.filter(z=>z!==k&&allied(z,k)).forEach(z=>setRel(S.nation,z,rel(S.nation,z)-15));NK.filter(z=>z!==S.nation&&!allied(z,k)&&z!==k).forEach(z=>setRel(S.nation,z,rel(S.nation,z)-4));feed('global',`Dünya, ${ek(NAT[S.nation].n,'nin')} ${ek(NAT[k].n,'e')} savaş ilanını tartışıyor`,'Birçok başkent itidal çağrısı yaptı; müttefikler ise kriz masası kurdu.',[S.nation,k])}})),{t:'Vazgeç',fn:()=>{}}]})}

/* ============ HABERLER (çeşitlilik ve takip) ============ */
const GUN2=[
 ['ekonomi','{a} yerli savaş uçağı projesinde ilk prototipi tanıttı','Proje ülkenin savunma sanayisinde yeni bir eşik olarak görülüyor.',(a)=>{S.world.p[a]+=1}],
 ['global','{a}, deprem bölgesine askerî kargo uçaklarıyla insani yardım gönderdi','Yardım kolisinde çadır, jeneratör ve tıbbi malzeme bulunuyor.'],
 ['saha','{a} özel kuvvetleri gece paraşüt tatbikatı yaptı','Tatbikata ilk kez yerli üretim paraşüt sistemleri katıldı.'],
 ['ekonomi','{a} ile {b} arasında doğal gaz boru hattı anlaşması','Anlaşmanın bölgedeki enerji güvenliğini güçlendirmesi bekleniyor.',(a,b)=>setRel(a,b,rel(a,b)+4)],
 ['global','{a} askerî heyeti {b:de} yapılan tatbikatı gözlemci olarak izledi','Ziyaret, iki ülke arasındaki güven artırıcı önlemlerin parçası.',(a,b)=>setRel(a,b,rel(a,b)+2)],
 ['saha','{a} hava savunması kimliği belirsiz bir İHA\'yı düşürdü','Enkaz incelemeye alındı; resmî açıklama bekleniyor.'],
 ['ekonomi','{a} mühimmat üretimini iki katına çıkarıyor','Yeni fabrikanın 18 ayda tam kapasiteye ulaşması planlanıyor.',(a)=>{S.world.p[a]+=.8}],
 ['global','{a} ile {b} deniz kuvvetleri ortak arama-kurtarma tatbikatı yaptı','Tatbikat, deniz yollarında acil durum koordinasyonunu test etti.',(a,b)=>setRel(a,b,rel(a,b)+3)],
 ['saha','{a} siber komutanlığı büyük bir saldırı girişimini engelledi','Saldırının enerji altyapısını hedef aldığı bildirildi.'],
 ['global','{a} askerî akademisine {b:den} öğrenci subaylar geldi','Değişim programı önümüzdeki yıl genişletilecek.',(a,b)=>setRel(a,b,rel(a,b)+3)],
 ['ekonomi','{a} uzay ajansı askerî iletişim uydusu fırlattı','Uydunun güvenli muhabere kapasitesini üçe katlayacağı açıklandı.'],
 ['saha','{a} sınırında kaçakçılık şebekesi çökertildi','Operasyonda çok sayıda silah ve mühimmat ele geçirildi.'],
 ['global','{a}, {b} ile esir değişimi için arabuluculuk teklif etti','Teklif uluslararası kamuoyunda olumlu karşılandı.'],
 ['ekonomi','{a} yeni zırhlı araç ihracatı için {b} ile görüşüyor','Anlaşmanın toplam değerinin milyarlarca doları bulması bekleniyor.',(a,b)=>setRel(a,b,rel(a,b)+2)],
 ['saha','{a} donanması tartışmalı sularda devriyeyi artırdı','Komşu ülkeler gelişmeyi yakından izliyor.',(a)=>NK.forEach(k=>k!==a&&R()<.2&&setRel(a,k,rel(a,k)-2))],
 ['global','{a} genelkurmay başkanı {b:i} resmî olarak ziyaret etti','Ziyarette ortak eğitim ve savunma sanayii işbirliği konuşuldu.',(a,b)=>setRel(a,b,rel(a,b)+4)],
];
const RESP2=[
 {h:'{x}, {me} ile sınırda ortak gözetleme hattı kurulmasını önerdi',o:[['Kabul et',{rel:7}],['Teknik heyet gönder, şartları görüş',{rel:4,strat:1}],['Reddet, egemenlik meselesi',{rel:-5}]]},
 {h:'{x}, {me} askerî uçağının hava sahasını ihlal ettiğini iddia etti',o:[['Radar kayıtlarını yayımla',{rel:-1,trust:2}],['Teknik bir hata olabilir, incele',{rel:4}],['İddiayı sertçe reddet',{rel:-7,hirs:1}]]},
 {h:'{x}, {me} ile ortak savunma sanayii projesi teklif etti',o:[['Ortak üretime gir',{rel:8,pw:2}],['Sadece alıcı ol',{rel:3,pw:1}],['Teşekkür et, reddet',{rel:-3}]]},
 {h:'{x} parlamentosu, {me} aleyhine yaptırım tasarısını görüşüyor',o:[['Diplomatik lobi faaliyeti başlat',{rel:4}],['Karşı yaptırım hazırlığını duyur',{rel:-8,pw:1}],['Sessiz kal',{rel:-2}]]},
 {h:'{x}, {me} askerlerine madalya verilmesini önerdi',o:[['Teşekkürle kabul et',{rel:6,trust:2}],['Mütevazı bir dille reddet',{rel:2}]]},
 {h:'{x} istihbaratı, {me} topraklarında bir sabotaj hücresi hakkında bilgi paylaştı',o:[['Bilgiyi doğrula ve teşekkür et',{rel:6,strat:1}],['Kaynağı sorgula, temkinli ol',{rel:-1}],['Kamuoyuyla paylaş',{rel:-4}]]},
];
function newsFollow(){const W=S.world;W.fu=(W.fu||[]).filter(f=>{if(f.d>S.day)return true;const r=rel(S.nation,f.x);const up=f.dr>=0;
 feed('global',up?`${NAT[f.x].n}, ${ek(NAT[S.nation].n,'nin')} yanıtını memnuniyetle karşıladı`:`${NAT[f.x].n}, ${ek(NAT[S.nation].n,'nin')} açıklamasına sert tepki gösterdi`,up?`Dışişleri sözcüsü, "${f.ans}" yaklaşımının ilişkilere olumlu katkı sağlayacağını söyledi.`:`Dışişleri, açıklamanın "kabul edilemez" olduğunu belirterek büyükelçiyi bakanlığa çağırdı.`,[f.x,S.nation]);
 if(!up&&R()<.4){setRel(S.nation,f.x,r-3);feed('saha',`${NAT[f.x].n}, ${ek(NAT[S.nation].n,'nin')} sınırına yakın bölgede tatbikat başlattı`,'Tatbikatın son yaşanan diplomatik gerginliğe yanıt olduğu yorumları yapılıyor.',[f.x])}return false})}
const EV2=[
 {c:()=>true,f:()=>({ti:'Silah bakım denetimi',body:`<p>Armacı başçavuş silahını söktü, namluya ışık tuttu ve uzun uzun baktı. "${pick(['Bu namlu sana küsmüş asker.','Fena değil. Yağı az koy, toz tutar.','Böyle bakımla savaşa gidilmez.'])}"</p>`,ch:[['Gece boyunca baştan temizle',{disiplin:2,nisan:.5},()=>{S.fatigue=clamp(S.fatigue+8)}],['Yarın hallederim',{},()=>{S.trust=clamp(S.trust-2)}]]})},
 {c:()=>true,f:()=>({ti:'Yağmurda 40 kilometre',body:'<p>Tabur, gece yarısı başlayan 40 kilometrelik yürüyüşe çıkarıldı. Yolun yarısında bir arkadaşın ayağını burktu.</p>',ch:[['Çantasını sen taşı',{dayan:1.5,lider:1},()=>{S.fatigue=clamp(S.fatigue+20);if(S.kogus)kall(3)}],['Sıhhiyeyi çağır, kendi temponu koru',{dayan:1}]]})},
 {c:()=>true,f:()=>({ti:'Gece nöbetinde ses',body:'<p>Saat 03:15. Mühimmat deposunun arkasından metal sesi geliyor. Telsiz cızırdıyor.</p>',ch:[['Parola sor, mevziye geç, nöbetçi amirine bildir',{disiplin:2},()=>{S.trust=clamp(S.trust+3);toast('Sokak kedisiymiş ama prosedüre uydun. Güven +3')}],['Feneri yakıp kendin bak',{},()=>{S.trust=clamp(S.trust-2);toast('Kediymiş. Ama nöbet yerini terk ettin; güven −2')}]]})},
 {c:()=>S.rank>=3,f:()=>({ti:'Astının hatası',body:'<p>Sorumluluğundaki bir er, tatbikatta telsizini kaybetti. Kaybın raporlanması gerekiyor.</p>',ch:[['Sorumluluğu üstlen, raporu kendin yaz',{lider:1.5},()=>{S.trust=clamp(S.trust+1);if(S.kogus)kall(3)}],['Eri disipline sevk et',{disiplin:1},()=>{if(S.kogus)kall(-3)}]]})},
 {c:()=>true,f:()=>({ti:'Tıbbi kontrol',body:`<p>Yıllık sağlık kontrolünde doktor tansiyonunu ölçtü ve beslenme alışkanlıklarını sordu. Sağlık değerin: ${Math.round(S.st.saglik)}.</p>`,ch:[['Doktorun programına uy',{saglik:3},()=>{S.nutri=clamp(S.nutri+4)}],['Bir şeyim yok, geç',{}]]})},
 {c:()=>true,f:()=>({ti:'Eğitim filmi gecesi',body:'<p>Bölük, salonda eski bir harp belgeseli izledi. Kurmay subay sonunda soru sordu: "Siz olsaydınız ne yapardınız?"</p>',ch:[['Söz al, planını anlat',{strat:1.2,lider:.5}],['Dinle, not al',{strat:.8}]]})},
 {c:()=>S.world.war,f:()=>({ti:'Cepheden dönen konvoy',body:'<p>Kışlaya yaralılarla dolu bir konvoy girdi. İçlerinden biri senin eski devre arkadaşın.</p>',ch:[['Revirde yanında kal',{mental:-3,hirs:4},()=>{S.fatigue=clamp(S.fatigue+6)}],['Görevine dön, akşam uğra',{disiplin:1,mental:-4}]]})},
 {c:()=>true,f:()=>({ti:'Kantin borcu',body:'<p>Kantinci, birliğinden birinin üç haftadır veresiye aldığını ve ödemediğini söyledi. Senin adını referans vermiş.</p>',ch:[['Borcu öde, sonra onunla konuş',{lider:.5},()=>{S.money-=300}],['Kantinciye "beni ilgilendirmez" de',{}]]})},
];

EV.push(...EV2);
const RESPA=()=>RESP.concat(RESP2);
/* ============ HAREKÂT HAZIRLIĞI ============ */
const PKG=[['hafif','Hafif ve hızlı','Hız ve hareket kabiliyeti; koruma az.'],['agir','Ağır ve korumalı','Zırh ve ateş gücü; hareket yavaş.'],['gizli','Gizli sızma','Sürpriz ve sessizlik; ateş gücü sınırlı.']];
const OPFIT={gizli:['devriye','pusu','kesif','radar','fpv','kacak','denizalti'],agir:['karakol','tepe','hat','kusatma','koy','cikarma','ihasurusu','fuze','cephe'],hafif:['kontrol','konvoy','kurtarma','refakat','onleme','onleme_hava','yhd','kablo','siber']};
const fitOf=id=>Object.keys(OPFIT).find(k=>OPFIT[k].includes(id))||'hafif';
function supports(){const k=B().k;const L=[['yok','Destek yok','Sürpriz korunur.']];if(S.rank>=3)L.push(['topcu','Topçu ve havan desteği','Ağır ateş; yerleşim yerinde sivil risk.']);if(S.rank>=8||(myWeapons().find(w=>w.id==='iha')&&S.rank>=10))L.push(['iha','Silahlı İHA desteği','Gözetleme ve hassas vuruş.']);if(S.rank>=11)L.push(['hava','Yakın hava desteği','Yüksek ateş gücü; hava koşullarına bağlı.']);if(k==='deniz'||k==='sahil')L.push(['deniz','Deniz topçusu','Kıyı hedeflerine etkili.']);return L}
function intelOf(o){const sc=[12,35,120,600,3000][T()];const en=Math.round(sc*(.7+R()*.8));const veh=T()>=1?Math.round(en/18*(.5+R())):0;return{en,veh,own:sc,terr:{gece:'Gece, sınırlı görüş',dag:'Engebeli dağlık arazi',sehir:'Yerleşim yeri, siviller var',deniz:'Açık deniz ve kıyı',hava:'Hava sahası',masa:'Geniş cephe',kisla:'Üs çevresi',atis:'Açık arazi'}[OPS.find(x=>x.id===o.id).sc]||'Karışık arazi'}}
function opPrep(v){const[p,s]=v.split('|');const o=S.op;if(!o||o.prep)return;if(p){o.pkgSel=p}if(s){o.supSel=s}if(o.pkgSel&&o.supSel){if(!useAP())return;o.prep={p:o.pkgSel,s:o.supSel}}save();render()}
function prepMod(def,opt){const o=S.op;if(!o||!o.prep)return 0;let m=0;const fit=fitOf(def.id);m+=o.prep.p===fit?.08:-.04;if(o.prep.s!=='yok')m+=.04;if(def.id==='koy'&&['topcu','hava'].includes(o.prep.s))m-=.12;if(o.prep.p==='gizli'&&['topcu','hava'].includes(o.prep.s))m-=.03;
 const w=S.wx&&S.wx.n;if(w==='Sisli'||def.sc==='gece'){if(o.prep.p==='gizli')m+=.05}if((w==='Yağmurlu'||w==='Sisli')&&(def.k.includes('hava')&&B().k==='hava'||o.prep.s==='hava'))m-=.06;if(w==='Açık'&&o.prep.s==='hava')m+=.03;if(w==='Ayaz'&&opt[2]==='dayan')m-=.03;if((S.kh||50)>70)m+=.02;return m}
/* ============ KOMUTANLA KONUŞMA ============ */
const CREP=[['sorumluluk','Sorumluluk benim, komutanım.'],['adamlar','Adamlarım takdiri hak ediyor.'],['kaynak','Daha fazla destek ve kaynak gerekiyor.']];
const CRES={sert:{sorumluluk:[['Bu cevabı sevdim. Sorumluluk alan subay, emir veren subaydan değerlidir.',3],['Sorumluluk almak yetmez; hatayı tekrar etmeyeceksin.',1]],adamlar:[['Haklısın, iyi savaştılar. Onlara benden selam söyle.',2],['Adamlarını övmeden önce kendi planını düzelt.',-2]],kaynak:[['Kaynak istemek kolay. Önce elindekini verimli kullan.',-2],['Eksiklerini yazılı getir. Haklıysan veririm.',1]]},
 babacan:{sorumluluk:[['Yükü sırtlanman güzel ama tek başına taşıma evlat.',2],['Ağır bir gün. Sorumluluğu birlikte taşıyacağız.',2]],adamlar:[['Bak bu hoşuma gitti. Adamlarını kollayan komutanı adamları da kollar.',3],['Onlar da üzgün. Bu akşam yanlarında ol.',2]],kaynak:[['Haklısın, ikmal birimini arayacağım. Bir şey eksik kalmasın.',2],['Elimizden geleni yapacağız; ama sabır da lazım.',1]]},
 soguk:{sorumluluk:[['Kayda geçti. Şimdi bir sonraki adımı konuşalım.',1],['Sorumluluk bir duygu değil, bir süreçtir. Hata analizini getir.',0]],adamlar:[['Performans verileri bunu destekliyor. Takdir yazısını onaylıyorum.',2],['Veriler bu yorumu desteklemiyor.',-2]],kaynak:[['Talebin mantıklı. Ek İHA tahsisini onaylıyorum.',3],['Kaynak artışının etkisini rakamlarla göster, değerlendiririm.',1]]}};
function cmdrFace(){return avatar(76,B(),Math.min(17,S.rank+3),{g:'e',skin:2,hs:'kisa',hc:5,beard:'biyik',eye:0,boy:182,kilo:86,hat:true},S.nation,NAT[S.nation].cm)}
function cmdrTalk(res,line){const P=CMDP[S.cmdP]?S.cmdP:'sert';
 pushModal({k:'Komutanın odası',ti:cmdr(),art:`<div class="row" style="gap:12px;padding:10px;align-items:flex-start">${cmdrFace()}<div class="speech">"${esc(line)}"</div></div>`,body:`<p class="small muted">Kişiliği: ${esc(CMDP[P].n)}. Cevabın ilişkinizi etkiler.</p>`,ch:CREP.map(([k,t])=>({t,fn:()=>{const[ok,bad]=CRES[P][k];const g=res===2?ok:(k==='kaynak'&&res<2&&P!=='sert')||(k==='sorumluluk'&&P==='sert')||(k==='adamlar'&&P==='babacan')?ok:bad;S.trust=clamp(S.trust+g[1]);
  setTimeout(()=>pushModal({k:'Komutanın odası',ti:'Komutanın yanıtı',art:`<div class="row" style="gap:12px;padding:10px;align-items:flex-start">${cmdrFace()}<div class="speech">"${esc(g[0])}"</div></div>`,body:`<div class="fx"><span class="${g[1]>=0?'p':'n'}">Komutan güveni ${g[1]>=0?'+':''}${g[1]}</span></div>`}),0)}}))})}
