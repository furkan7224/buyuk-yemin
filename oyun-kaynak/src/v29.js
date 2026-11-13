/* ============ v29: DAHA AKICI DEVLET KARİYERİ · KAMPANYA, MÜNAZARA, YENİ DOSYALAR ============ */
OREQ.splice(0,4,[4,48],[5,52],[5,55],[6,58]);
function campChance(){const P=S.pol;const m=(P.camp&&P.camp.mom)||0;return clamp(.3+(P.onay-45)/45+m/100,.15,.95)}

/* Rakip aday ve partiler (kurgusal) */
const PARTIES=['Ufuk Hareketi','Çınar Partisi','Pusula Partisi','Meydan Birliği','Yeni Şafak İttifakı','Bereket Cephesi'];
function rivalName(){const fn=FN[S.nation]||FN.TR,sn=SQN[S.nation]||SQN.TR;return pick(fn)+' '+pick(sn)}
function campStart(){const P=S.pol;const c=P.camp;c.riv=rivalName();c.party=pick(PARTIES);c.mom=0;c.ral=-1;c.log=[]}

/* Münazara turları: rakibin iddiası + 3 cevap (karışık sırada) */
const DEB=[
 {t:'Ekonomi',q:'"Rakibim üniformadan çıktı ama mutfaktaki yangını hiç görmedi. Fiyatlar her hafta artıyor."',a:[['Somut plan: temel gıdada vergi indirimi ve üreticiye mazot desteği.',5],['Siz iktidardayken enflasyon iki katıydı, hatırlatırım.',2],['Ekonomi uzmanların işi; ben güvenliğe odaklanırım.',-3]]},
 {t:'Güvenlik',q:'"Bir asker devleti yönetirse her sorun silahla çözülür."',a:[['Savaşın bedelini en iyi bilen benim; bu yüzden barışı en çok ben isterim.',6],['Güvenlik olmadan özgürlük de olmaz.',2],['Bu sözler askerlerimize hakarettir!',-2]]},
 {t:'Gençlik',q:'"Gençler ülkeyi terk ediyor ve sizin elinizde onlara verecek bir plan yok."',a:[['İlk iş programı, yurt kapasitesini ikiye katlama ve girişim fonu.',5],['Gençlere inanıyorum, onlar bu ülkenin geleceği.',1],['Gidenler zaten burada kalmak istemiyordu.',-5]]},
 {t:'Adalet',q:'"Bakanlığınız döneminde ihaleler hep aynı şirketlere gitti."',a:[['Tüm ihale kayıtlarını bu gece kamuoyuna açıyorum.',6],['Bu iddiaların hiçbiri kanıtlanmadı.',1],['Asıl sizin dönemin dosyalarını açalım!',0]]},
 {t:'Dış politika',q:'"Komşularla gerginliği tırmandıran sizsiniz."',a:[['Kararlı ama diyaloğa açığım; ilk 100 günde bölge zirvesi topluyorum.',5],['Caydırıcılık barışın teminatıdır.',3],['Komşularımız bizden korkmalı.',-4]]},
 {t:'Sağlık',q:'"Hastanelerde randevu bulunamıyor, siz hâlâ tank konuşuyorsunuz."',a:[['Akşam poliklinikleri ve beş bin yeni hekim kadrosu açacağız.',5],['Sağlık sistemimiz güçlü, düzelteceğiz.',1],['Bunlar abartılı haberler.',-3]]},
 {t:'Deneyim',q:'"Siyaset tecrübeniz yok; kışla ile devlet aynı şey değil."',a:[['Kışlada öğrendiğim tek şey sorumluluktur; ekibimde en iyi uzmanlar var.',5],['Siz yıllardır siyasettesiniz ve sonuç ortada.',3],['Benim tecrübem sizinkinden fazla.',-1]]},
 {t:'Eğitim',q:'"Öğretmen açığını kapatamayan bir yönetimin parçasıydınız."',a:[['Bu yıl kırk bin atama ve köy okullarına ulaşım desteği.',5],['Eğitime en büyük bütçeyi biz ayırdık.',2],['Öğretmenler fazla şikâyet ediyor.',-4]]}];
const KUR=[
 {q:'Delegeler parti içi demokrasiyi soruyor.',a:[['İl başkanlarını üyeler seçecek; söz veriyorum.',5],['Birliğimizi bozacak tartışmalara gerek yok.',1],['Disiplin her şeyden önce gelir.',-2]]},
 {q:'Gençlik kolları yönetimde daha fazla söz istiyor.',a:[['Yönetimin üçte biri 35 yaş altı olacak.',5],['Gençlerimizin önü açık.',1],['Önce sıralarını beklesinler.',-3]]},
 {q:'Rakip delegasyon ortak liste öneriyor.',a:[['Kabul; birlikte daha güçlüyüz.',4],['Liste başı ben olursam kabul.',2],['Ortak liste yok.',-2]]}];
const KOA=[
 {q:'Küçük ortak Ekonomi Bakanlığı’nı istiyor.',a:[['Verelim; karşılığında savunma bütçesine destek alalım.',5],['Ekonomi değil, Sanayi Bakanlığı teklif et.',3],['Bakanlık pazarlığı yapmam.',-3]]},
 {q:'Ortaklar ortak bir hükümet programı yazmak istiyor.',a:[['Üç ana başlıkta uzlaşalım: ekonomi, güvenlik, eğitim.',5],['Programı biz yazarız, onlar imzalar.',0],['Programa gerek yok, güven yeter.',-2]]},
 {q:'Bir milletvekili destek karşılığında makam istiyor.',a:[['Liyakate göre değerlendiririz.',4],['Kabul, bir sandalye önemli.',1],['Bu pazarlığa girmem.',2]]}];
const FINAL=[
 {ti:'Son anket',b:'Seçime bir gün kala anketler başa baş gösteriyor. Son mesajın ne olacak?',a:[['Birlik çağrısı: "Hepimizin ülkesi."',4],['Somut vaatlerin özeti ve takvimi.',5],['Rakibin zayıf noktalarına sert saldırı.',-1]]},
 {ti:'Skandal iddiası',b:'Bir gazete, eski bir harekâtla ilgili belgeleri manşete taşıdı.',a:[['Belgeleri doğrula ve tüm kayıtları aç.',5],['Hukuki süreç başlat, yorum yapma.',2],['Gazeteyi hedef göster.',-5]]},
 {ti:'Büyük miting',b:'Kapanış mitingi için meydan seçmen gerekiyor.',a:[['Sınır şehrinde, gazilerle birlikte.',4],['Büyükşehirde gençlik konseriyle.',4],['Mitingi iptal et, televizyona çık.',1]]}];

function shuffleIdx(n){return [...Array(n).keys()].sort(()=>R()-.5)}
function campRounds(list,title,n,done){const P=S.pol,c=P.camp;const ids=shuffleIdx(list.length).slice(0,n);let i=0;
 const next=()=>{if(i>=ids.length)return done();const it=list[ids[i]];const ord=shuffleIdx(it.a.length);
  pushModal({neu:1,k:`${title} · ${i+1}/${ids.length}`,ti:it.t?it.t+(c.riv?' · '+c.riv:''):c.riv||title,art:typeof micArt==='function'?micArt():'',body:`<div class="quote">${esc(it.q)}</div>`,
   ch:ord.map(j=>({t:it.a[j][0],fn:()=>{const v=it.a[j][1]+(R()<.25?(R()<.5?-1:1):0);c.mom+=v;P.onay=clamp(P.onay+Math.round(v/2));c.log.push([it.q,it.a[j][0],v]);i++;toast((v>=4?'Salon alkışladı':v>=1?'Puan aldın':v===0?'Etkisiz kaldı':'Geri tepti')+' · ivme '+(v>=0?'+':'')+v);setTimeout(next,0)}}))})};next()}
function campSummary(title){const P=S.pol,c=P.camp;const s=c.log.slice(-3).reduce((a,l)=>a+l[2],0);
 feed('ulusal',`${title}: ${S.name} ${s>=8?'rakibini geride bıraktı':s>=3?'öne çıktı':s>=0?'başa baş':'zor anlar yaşadı'}`,`${c.riv?c.riv+' ('+c.party+') ile ':''}karşılaşmanın ardından kampanya ivmesi ${s>=0?'+':''}${s}.`,[S.nation]);
 pushModal({k:title+' · sonuç',ti:s>=8?'Galip geldin':s>=3?'Öne geçtin':s>=0?'Başa baş':'Zor bir gece',body:`${c.log.slice(-3).map(([q,a,v])=>`<div class="pq"><small>${esc(q)}</small><p>"${esc(a)}"</p><em class="${v>=0?'p':'n'}">${v>=0?'+':''}${v}</em></div>`).join('')}<div class="fx"><span class="${s>=0?'p':'n'}">Kampanya ivmesi ${s>=0?'+':''}${s}</span><span>Kazanma şansı ~%${Math.round(campChance()*100)}</span></div>`});save();render()}
function campEvent(){const P=S.pol,c=P.camp;if(!c)return;if(c.riv==null)campStart();
 if(c.left===2){const [L,T]=c.how==='kurultay'?[KUR,'Kurultay konuşması']:c.how==='koalisyon'?[KOA,'Koalisyon masası']:[DEB,'Canlı yayında münazara'];
  pushModal({k:HOWN[c.how],ti:T,body:`<p>${c.how==='secim'?`Rakibin <b>${esc(c.riv)}</b> (${esc(c.party)}) ile bu akşam canlı yayında karşılaşıyorsun. Üç tur, her turda bir iddia.`:c.how==='kurultay'?'Delegelerin önüne çıkıyorsun. Üç soru, üç cevap.':'Ortaklarla masaya oturuyorsun. Üç pazarlık konusu var.'}</p><p class="small muted">İyi cevaplar kampanya ivmeni ve kazanma şansını artırır.</p>`,ch:[{t:'Hazırım',fn:()=>setTimeout(()=>campRounds(L,T,3,()=>campSummary(T)),0)}]})}
 else if(c.left===1){const F=pick(FINAL);const ord=shuffleIdx(F.a.length);
  pushModal({neu:1,k:HOWN[c.how]+' · son gün',ti:F.ti,body:`<p>${esc(F.b)}</p>`,ch:ord.map(j=>({t:F.a[j][0],fn:()=>{const v=F.a[j][1];c.mom+=v;P.onay=clamp(P.onay+Math.round(v/2));toast(`${F.ti}: ivme ${v>=0?'+':''}${v} · şans ~%${Math.round(campChance()*100)}`);save();render()}}))})}}
function campRally(v){const P=S.pol,c=P.camp;if(!c||c.ral===P.d)return toast('Bugün zaten miting yaptın.');c.ral=P.d;
 const weak=P.ekon<P.guv?'eko':'guv';const good=(v==='eko'&&weak==='eko')||(v==='guv'&&weak==='guv')||v==='gen';const g=good?4:2;c.mom+=g;P.onay=clamp(P.onay+1);
 toast(`${{eko:'Ekonomi',guv:'Güvenlik',gen:'Gençlik'}[v]} mitingi: ivme +${g}${good?' (gündemle örtüştü)':''}`);save();render()}
function campCard(){const P=S.pol,c=P.camp,O=gov().o;if(c.riv==null)campStart();const ch=Math.round(campChance()*100);
 return `<div class="camp"><div class="cp-h"><span class="cp-d">${c.left}</span><div class="grow"><b>${esc(O[c.to][0])} · ${HOWN[c.how]}</b><small>${c.left} gün kaldı${c.how==='secim'?` · Rakip: ${esc(c.riv)} (${esc(c.party)})`:''}</small></div></div>
 <div class="cp-bar"><i style="width:${ch}%"></i><span>Kazanma şansı ~%${ch}</span></div>
 <div class="cp-m"><span>Kampanya ivmesi <b class="${c.mom>=0?'green':'red'}">${c.mom>=0?'+':''}${c.mom}</b></span><span>Onay %${Math.round(P.onay)}</span></div>
 ${c.ral===P.d?'<p class="small green">Bugünkü miting yapıldı. Yarın yeni bir meydan seni bekliyor.</p>':`<div class="small muted">Miting düzenle (günde 1):</div><div class="row wrap" style="gap:6px"><button class="mini b" data-a="rally2" data-v="eko">Ekonomi</button><button class="mini b" data-a="rally2" data-v="guv">Güvenlik</button><button class="mini b" data-a="rally2" data-v="gen">Gençlik</button></div>`}
 <p class="small muted">${c.left===3?'Yarın akşam '+(c.how==='secim'?'münazara':c.how==='kurultay'?'kurultay konuşması':'koalisyon masası')+' var.':c.left===2?'Son gün yaklaşıyor; her karar sayılır.':'Yarın sonuç açıklanacak.'}</p>${rwBtn('rally','Ek miting · onay +4')}</div>`}

function polElect(){const P=S.pol,O=gov().o,c=P.camp;const p=campChance();const win=R()<p;const pct=win?50+Math.round(R()*10+(P.onay-50)/4):40+Math.round(R()*9);
 P.camp=null;if(win){pushModal({k:HOWN[c.how],ti:'Kazandın!',art:govSeal(80),body:`<p>${c.how==='secim'?`Oyların %${Math.max(51,pct)}'ini aldın. ${esc(c.riv||'Rakibin')} seni tebrik etti.`:c.how==='kurultay'?'Kurultay delegelerinin büyük çoğunluğu seni destekledi.':'Koalisyon ortakları seninle anlaştı.'}</p>`,ch:[{t:'Yemin et',fn:()=>polRise()}]})}
 else{const[rd]=OREQ[Math.min(P.i,3)];P.d=Math.max(0,rd-2);P.onay=clamp(P.onay-3);pushModal({k:HOWN[c.how],ti:'Kıl payı kaybettin',body:`<p>${c.how==='secim'?'Oyların %'+pct+'\'ini aldın; yetmedi.':'Gereken desteği bulamadın.'} Görevine devam ediyorsun. Onayını koruyabilirsen iki gün sonra yeniden aday olabilirsin.</p>`})}}

/* Yeni devlet dosyaları */
DOS.push(
 {s:'mil',ti:'Sınır gözetleme kuleleri',b:'Sınır hattına akıllı gözetleme kuleleri kurulması öneriliyor.',o:[['Tüm hatta kur',{guv:5,ekon:-3,onay:2}],['Kritik noktalarla sınırlı tut',{guv:3,ekon:-1}],['Ertele',{onay:-1,guv:-2}]]},
 {s:'mil',ti:'Askerî hastaneler',b:'Askerî hastanelerin sivil hastalara da açılması tartışılıyor.',o:[['Aç, kapasiteyi artır',{onay:5,ekon:-2,trust:-1}],['Yalnızca acil servisleri aç',{onay:3}],['Kapalı kalsın',{trust:2,onay:-2}]]},
 {s:'mil',ti:'Yedek subay programı',b:'Üniversite mezunları için kısa dönem yedek subay programı öneriliyor.',o:[['Başlat',{guv:3,onay:3,ekon:-1}],['Pilot uygulama',{guv:1,onay:1}],['Gerek yok',{onay:-1}]]},
 {s:'san',ti:'İHA ihracatı',b:'Yerli bir insansız hava aracı için büyük bir ihracat teklifi geldi; alıcı {x}.',o:[['Satışı onayla',{ekon:5,rel:6,onay:1}],['Teknoloji transferi olmadan sat',{ekon:3,rel:2}],['Satışı reddet',{guv:2,rel:-4}]]},
 {s:'san',ti:'Savunma teknoparkı',b:'Gençler için savunma teknolojisi kampüsü kurulması teklif ediliyor.',o:[['Kur ve burs ver',{ekon:-3,pw:2,onay:4}],['Özel sektörle ortak kur',{ekon:-1,pw:1,onay:2}],['Bütçe yok',{onay:-2}]]},
 {s:'san',ti:'Tersane yatırımı',b:'Yeni nesil korvet üretimi için tersane genişletmesi gerekiyor.',o:[['Kamu yatırımıyla genişlet',{ekon:-3,pw:2,guv:2}],['Özel tersanelere ihale et',{ekon:1,pw:1}],['Mevcut kapasiteyle devam',{pw:-1}]]},
 {s:'ic',ti:'Deprem tatbikatı',b:'Büyük şehirlerde ülke çapında deprem tatbikatı yapılması öneriliyor.',o:[['Ülke çapında yap',{onay:5,guv:2,ekon:-1}],['Yalnızca okullarda',{onay:2}],['Gerek yok',{onay:-4}]]},
 {s:'ic',ti:'Trafik denetimi',b:'Trafik kazaları arttı. Elektronik denetim sistemi önerisi masada.',o:[['Tüm yollara yay',{guv:3,onay:-1,ekon:1}],['Kara noktalarla sınırlı',{guv:2,onay:1}],['Eğitim kampanyası yap',{onay:2}]]},
 {s:'ic',ti:'Göç yönetimi',b:'Sınır şehirlerinde göç baskısı artıyor; valiler destek istiyor.',o:[['Ek personel ve kayıt merkezi',{guv:3,ekon:-2,onay:2}],['Uluslararası fon talep et',{ekon:1,onay:1}],['Sınırı tamamen kapat',{guv:2,onay:-2,rel:-2}]]},
 {s:'ic',ti:'Siber güvenlik merkezi',b:'Kamu kurumlarına yönelik siber saldırılar arttı.',o:[['Ulusal merkez kur',{guv:4,ekon:-2,onay:2}],['Özel şirketlerle anlaş',{guv:2,ekon:-1}],['Mevcut birimler yeter',{guv:-2}]]},
 {s:'eko',ti:'Asgari ücret',b:'Sendikalar asgari ücrete ara zam istiyor, işverenler karşı.',o:[['Ara zam yap',{onay:6,ekon:-3}],['İşverene prim desteğiyle zam',{onay:4,ekon:-2}],['Zam yok',{onay:-5,ekon:2}]]},
 {s:'eko',ti:'Turizm sezonu',b:'Turizm sektörü tanıtım kampanyası için destek istiyor.',o:[['Büyük kampanya',{ekon:4,onay:2}],['Ortak finansman',{ekon:2,onay:1}],['Destek yok',{ekon:-1}]]},
 {s:'eko',ti:'Tarım desteği',b:'Kuraklık nedeniyle çiftçiler zor durumda.',o:[['Doğrudan gelir desteği',{onay:5,ekon:-3}],['Sulama yatırımı',{ekon:-2,onay:3}],['Piyasa kendini düzeltir',{onay:-4}]]},
 {s:'dip',ti:'Bölgesel zirve',b:'{x} ile birlikte bir bölgesel güvenlik zirvesine ev sahipliği teklif ediliyor.',o:[['Ev sahipliği yap',{rel:8,onay:3,ekon:-1}],['Katıl ama ev sahipliği yapma',{rel:3}],['Katılma',{rel:-5,onay:-1}]]},
 {s:'dip',ti:'Esir takası',b:'{x}, karşılıklı esir takası öneriyor.',o:[['Kabul et',{onay:5,rel:6}],['Ara bulucuyla müzakere et',{rel:3,onay:2}],['Reddet',{rel:-6,guv:1}]]},
 {s:'dip',ti:'Kültür yılı',b:'{x} ile karşılıklı kültür yılı ilan edilmesi teklif ediliyor.',o:[['İlan et',{rel:6,onay:2}],['Sınırlı etkinlikler',{rel:2}],['Gerek yok',{rel:-2}]]},
 {s:'dev',ti:'Yerel seçim takvimi',b:'Muhalefet yerel seçimlerin öne alınmasını istiyor.',o:[['Kabul et',{onay:4,guv:-1}],['Meclise havale et',{onay:1}],['Reddet',{onay:-3}]]},
 {s:'dev',ti:'Anayasa komisyonu',b:'Tüm partilerin katıldığı bir anayasa komisyonu öneriliyor.',o:[['Kur ve başkanlık et',{onay:5}],['Uzmanlara bırak',{onay:2}],['Gündemde değil',{onay:-3}]]},
 {s:'dev',ti:'Basın özgürlüğü raporu',b:'Uluslararası bir rapor basın özgürlüğünü eleştirdi.',o:[['Reform paketi açıkla',{onay:4,rel:2}],['Raporu incele ve yanıtla',{onay:1}],['Raporu reddet',{onay:-3,rel:-2}]]}
);
OSCOPE.splice(0,5,['mil','san'],['mil','san'],['ic','san','eko'],['ic','eko','dip','dev'],['mil','ic','eko','dip','dev']);
var A29={rally2:campRally};
