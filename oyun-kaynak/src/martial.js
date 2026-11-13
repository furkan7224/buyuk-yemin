/* ============ DÖVÜŞ SPORLARI: HAFTALIK PROGRAM ve MÜFREDAT ============ */
/* Ders türleri → mini oyun mekaniği */
const LT={teknik:'order',lapa:'mitts',pao:'mitts',torba:'bag',drill:'bag',ayak:'arrows',kata:'arrows',sparring:'spar',senaryo:'spar',randori:'spar',sub:'subm',klinc:'subm'};
const LTN={teknik:'Teknik dersi',lapa:'Lapa günü',pao:'Pao günü',torba:'Torba çalışması',drill:'Drill tekrarı',ayak:'Ayak hareketi',kata:'Form çalışması',sparring:'Sparring',senaryo:'Tehdit senaryosu',randori:'Randori',sub:'Submission günü',klinc:'Klinç günü'};
const LTD={order:'Hoca yeni tekniği adım adım gösterir; sen adımları doğru sırayla uygularsın.',mitts:'Hoca lapaları tutar ve kombinasyon çağırır; sırayla, hızlı vur.',bag:'Raunt boyunca doğru ritimle vur; kondisyonun bitince vuruşların zayıflar.',arrows:'Hocanın gösterdiği hareket dizisini aklında tut ve tekrarla.',spar:'Rakibin saldırısını oku, doğru savunmayı yap, açığı bul ve karşılık ver.',subm:'Pozisyondan kilide adım adım ilerle, sonra baskıyı doğru ayarla.'};
const CYC={
 boks:['teknik','lapa','torba','ayak','sparring','lapa','teknik'],kick:['teknik','lapa','torba','ayak','sparring','lapa','teknik'],
 muay:['teknik','pao','torba','klinc','sparring','pao','teknik'],gures:['teknik','drill','sub','ayak','randori','drill','teknik'],
 judo:['teknik','drill','randori','sub','randori','drill','teknik'],bjj:['teknik','sub','drill','randori','sub','drill','teknik'],
 karate:['teknik','kata','lapa','ayak','sparring','kata','teknik'],tkd:['teknik','ayak','lapa','kata','sparring','lapa','teknik'],
 krav:['teknik','senaryo','lapa','torba','senaryo','drill','teknik'],sambo:['teknik','drill','sub','randori','sub','torba','teknik'],
 mma:['teknik','lapa','sub','sparring','randori','torba','teknik'],aikido:['teknik','drill','kata','randori','drill','kata','teknik'],
 kungfu:['teknik','kata','ayak','lapa','sparring','kata','teknik'],kendo:['teknik','kata','lapa','ayak','sparring','kata','teknik'],
 systema:['teknik','senaryo','drill','torba','senaryo','drill','teknik'],capo:['teknik','ayak','drill','sparring','kata','ayak','teknik'],
};
const LNX={judo:{drill:'Uchikomi',randori:'Randori',sub:'Ne-waza günü'},bjj:{drill:'Pozisyon drill',randori:'Rolling',sub:'Submission günü'},gures:{drill:'Dalma drill',randori:'Güreş maçı',sub:'Tuş günü',ayak:'Duruş ve hareket'},
 karate:{kata:'Kata',sparring:'Kumite',ayak:'Kihon ve ayak'},tkd:{kata:'Poomsae',sparring:'Kyorugi',ayak:'Step çalışması'},kungfu:{kata:'Taolu',sparring:'Sanda'},
 kendo:{kata:'Kendo no kata',lapa:'Kakari-geiko',sparring:'Ji-geiko',ayak:'Ashi sabaki'},capo:{ayak:'Ginga',sparring:'Roda',kata:'Sequência',drill:'Akrobasi drill'},
 aikido:{drill:'Ukemi',kata:'Tai sabaki',randori:'Randori'},krav:{drill:'Savunma drill'},systema:{senaryo:'Çoklu saldırgan',drill:'Nefes drill'},
 sambo:{sub:'Kilit günü',drill:'Atış drill'},mma:{sub:'Submission günü',randori:'Yer sparring'},muay:{torba:'Torba (kick bag)'}};
const lessonOf=(sp,day)=>(CYC[sp]||CYC.boks)[(day-1)%7];
const lessonName=(sp,t)=>(LNX[sp]&&LNX[sp][t])||LTN[t];
const GRAP=['gures','judo','bjj','sambo','aikido'];
/* Müfredat: 'Ad|adım;adım;adım;adım' — sub:1 olanlar kilit/tuş teknikleri */
const CUR={
 boks:['Jab|Ön ayak hafif önde, ağırlık ortada;Ön eli omuz döndürerek düz uzat;Vuruş anında avuç içi aşağı dönsün;Eli aynı hattan hızla gardaya geri çek','Düz (cross)|Arka ayağı tabanından döndür;Kalça ve omzu hedefe çevir;Arka eli çene hizasından düz uzat;Ön el çeneyi korurken eli geri getir','Sol kroşe|Ağırlığı ön ayağa al;Dirseği 90 derece bükerek omuz hizasına kaldır;Ön ayak ve kalçayı içe döndür;Yumruğu kısa bir yayla çeneye savur','Aparkat|Dizleri hafif kır, ağırlığı öne ver;Omzu hafifçe düşür;Kalçadan yukarı itiş al;Yumruğu avuç içi sana dönük dikey çıkar','Slip ve karşılık|Rakibin jabını omzundan oku;Başını yumruğun dışına kaydır;Ağırlığı ön dizine yükle;Aynı anda düz ile karşılık ver'],
 kick:['Jab-düz-alçak tekme|Jab ile mesafeyi ölç;Düz ile rakibi kapat;Kalçayı döndürüp arka ayakla alçak tekme at;Gardaya dönüp açıdan çık','Ön tekme|Ön dizini göğsüne çek;Kalçayı ileri it;Ayak tabanıyla karına it;Ayağı hızla geri al','Yüksek tekme|Ön ayağın parmak ucunda dön;Kalçayı tamamen çevir;Kaval kemiğiyle başa savur;Kolu aşağı sallayarak denge kur','Tekme yakalama|Tekmeyi kolunla kaburgana sar;Ayağı kalçana yasla;Destek bacağını süpür;Düşen rakibe pozisyon al','Kontra kroşe|Rakibin düzünü pariye et;Ağırlığı ön ayağa kaydır;Kısa sol kroşe at;Açıdan çık'],
 muay:['Teep|Ön dizini kaldır;Kalçayı ileri it;Tabanla karına bas;Ayağı hızla geri çek','Yuvarlak tekme|Ön ayakla açıya adım at;Ön ayak üzerinde dön;Kalçayı çevirip kaval kemiğiyle vur;Kolu savurarak dengeni koru','Diz vuruşu|Rakibin ensesini kavra;Kalçayı ileri it;Dizi göğse doğru sür;Rakibi aşağı çekerek vuruşa yaklaştır','Dirsek|Mesafeyi kapat;Dirseği omuz hizasına kaldır;Gövdeyi döndür;Dirseği yatay savur','Klinç kontrolü|Elleri ensede üst üste kilitle;Dirsekleri göğse sık;Rakibin başını aşağı çek;Dengesini bozup diz vur|1'],
 gures:['El ense|Rakibin ensesini kavra;Diğer elle dirseğini tut;Başını aşağı bastır;Açı alıp arkaya geç','Tek dalma|Seviyeni düşür;Ön dizin mindere yakın dal;Rakibin bacağını kucakla;Başı içeride tutup kaldır ve düşür','Çift dalma|Mesafeyi ayarla, seviyeni düşür;Penetrasyon adımıyla dal;İki bacağı sar;Omuzla iterek yere indir','Köprü ile kurtulma|Topukları kalçana çek;Kalçayı yukarı patlat;Omuz üstünden dön;Rakibin üstüne çık','Tuş|Rakibi sırtüstü kontrol et;Kolunu boynunun altından geçir;Göğsünle bastır;İki omzunu mindere yapıştır|1'],
 judo:['O-soto-gari|Yaka ve kolu kavra;Rakibi arka topuğuna doğru dengesizleştir;Yanına adım at;Bacağını arkadan biçerek düşür','Seoi-nage|Kolu çek, yakayı tut;Rakibin önüne dönerek gir;Kalçanı rakibin altına yerleştir;Öne eğilip omuz üstünden at','Uchi-mata|Rakibi öne dengesizleştir;Destek ayağını içe döndür;Atış bacağını iç uyluğa savur;Kalçayı döndürerek tamamla','Kesa-gatame|Rakibin yanına otur;Kolunu koltuğunun altına sıkıştır;Boynunu sar;Bacaklarını açarak taban kur|1','Juji-gatame|Kolu iki elle göğsüne kilitle;Bacakları göğsü ve yüzü üzerine at;Dizleri birleştir;Kalçayı kaldırarak kolu düzleştir|1'],
 bjj:['Kapalı guard|Bacakları belin arkasında kilitle;Yaka ve kolu tut;Rakibi kendine çek;Duruşunu bozup başını aşağıda tut','Armbar (guard)|Kolu göğsüne kontrol et;Kalçayı açıp açı al;Bacağını yüzünün üstüne at;Dizleri sıkıp kalçayı kaldır|1','Triangle choke|Bir kolu içeride, birini dışarıda bırak;Bacağını boynun arkasına at;Diğer bacakla üçgeni kilitle;Başı çekip dizleri sık|1','Kimura|Bilekten kavra;Diğer kolunu dirseğin üstünden geçir;Kendi bileğini tut (figür 4);Kolu sırtına doğru döndür|1','Rear naked choke|Sırtı al, kancaları tak;Bir kolunu boynun altından geçir;Diğer elinin pazısını tut;Elini başın arkasına koyup sık|1'],
 karate:['Gyaku-zuki|Zenkutsu-dachi duruşu al;Kalçayı döndür;Arka elle düz yumruk at;Kime: tüm kasları anında sık','Mae-geri|Dizini kaldır;Ayak parmaklarını geri çek;Ayağın önüyle ileri vur;Ayağı geri çekip dur','Mawashi-geri|Dizi yana kaldır;Destek ayağında dön;Ayak üstüyle yay çiz;Hızla geri çek','Age-uke|Kolu başın önünden kaldır;Önkolu çapraz tut;Darbeyi yukarı saptır;Karşı yumruğa hazırlan','Kumite girişi|Mesafeyi koru;Sahte jab at;İleri kay;Gyaku-zuki ile sayı al'],
 tkd:['Ap chagi|Dizini kaldır;Ayak tabanının önüyle vur;Kalçayı ileri it;Geri çekip dur','Dollyo chagi|Destek ayağında dön;Dizini yatay kaldır;Ayak üstüyle savur;Dengeye dön','Yop chagi|Dizini göğse çek;Kalçayı yana çevir;Topukla düz it;Geri çek','Dwi chagi|Sırtını dön;Omuz üstünden hedefe bak;Arka tekmeyi düz it;Dönüp gardaya geç','Taegeuk 1 başlangıcı|Hazır duruş (junbi);Sola dön, alçak blok;İleri adım, orta yumruk;Sağa dön, alçak blok'],
 krav:['Düz saldırıya 360 savunma|Kolu dirsekten büküp blok yap;Aynı anda karşı vuruş at;Rakibe yüklen;Mesafeyi kapatıp kontrol et','Boğaz sıkmadan kurtulma|Elleri kanca yapıp parmakları çek;Aynı anda kasığa diz vur;Çeneni indir, omuzları kaldır;Dirsek ve itişle çık|1','Bıçak tehdidi|Bıçaklı eli yönlendir;Bileği iki elle kontrol et;Vücudunun dışına çevir;Silahı alıp mesafe koy','Arkadan sarılma|Ağırlığını düşür;Dirsekle geriye vur;Topukla ayağına bas;Dönüp karşı atak yap','Tabanca tehdidi|Namluyu hattan çıkar;Tabancayı tutup bileği bük;Karşı vuruş yap;Silahı alıp geri çekil'],
 sambo:['Kalçadan atış|Ceket ve kemeri kavra;Kalçanı rakibin önüne sok;Dizlerini bük;Kalçayı patlatıp at','Diz kilidi|Bacağı kucakla;Diz eklemini kalçanın üstüne yerleştir;Bacaklarınla sar;Kalçayı iterek dizi düzleştir|1','Ayak bileği kilidi|Ayağı koltuk altına sıkıştır;Önkolu aşil tendonuna yerleştir;Göğsünü öne it;Kalçayı geri yaslayıp bas|1','Yere indir ve kontrol|Rakibi dengesizleştir;Atışla yere indir;Yan kontrole geç;Kilit için kolu izole et','Kol kilidi (yerden)|Kolu iki elle kavra;Bacakları göğse at;Dizleri sık;Kalçayı kaldır|1'],
 mma:['Jab-düz-dalma|Jab ile rakibi gardaya zorla;Düz at;Seviyeni düşürüp dal;Yere indirip pozisyon al','Sprawl|Dalmayı gör;Kalçayı geri ve aşağı fırlat;Göğsünle bastır;Önden kalkıp karşı vur','Ground and pound|Üst pozisyonu sabitle;Bir kolu kontrol et;Kısa yumruk ve dirsek at;Rakip dönerse sırtını al','Kafese yaslanıp kalkış|Bir dirseği yere koy;Sırtını kafese yasla;Ayaklarını altına al;Ellerle iterek ayağa kalk','Guillotine|Dalan rakibin başını koltuk altına al;Kolunu boynun altına sar;Kapalı guard çek;Kalçayı kaldırıp sık|1'],
 aikido:['Mae ukemi|Ön kolu daire gibi tut;Omuzdan mindere değ;Çapraz kalçaya yuvarlan;Ayağa kalkıp kamae al','Ikkyo|Saldıranın bileğini tut;Dirseğine bastır;Öne doğru yönlendir;Yüzüstü kontrol et|1','Shiho-nage|Bileği iki elle kavra;Kolun altından dön;Kolu omzun üstüne taşı;Arkaya düşür','Irimi-nage|Saldırı hattından çık;Rakibin arkasına gir;Başını omzuna çek;Kolunla yay çizerek düşür','Kote-gaeshi|Bileği dışa çevir;Avuç içini kavra;Spiral hareketle döndür;Yere indirip kilitle|1'],
 kungfu:['Mabu (at duruşu)|Ayakları omuzdan geniş aç;Dizleri bük;Sırtı dik tut;Nefesi karına al','Chong quan|Yumruğu belden başlat;Döndürerek uzat;Omzu öne düşürme;Geri çekerken diğer el çıksın','Deng tui|Dizini kaldır;Topukla it;Kalçayı ileri ver;Geri çek','Pao chui|Alçak duruştan kalk;Bilekle yukarı blok yap;Diğer elle düz yumruk at;Duruşa geri dön','Taolu dizisi|Selamla başla;Duruş geçişi yap;Blok ve yumruk;Tekme ve kapanış'],
 kendo:['Chudan no kamae|Shinai ucunu rakibin boğazına doğrult;Sol el göbek hizasında;Sağ ayak önde;Sol topuk hafif yukarıda','Men uchi|Shinai\'yi başın üstüne kaldır;Sağ ayakla fumikomi yap;Başa vur ve "Men!" diye bağır;Zanshin ile geç','Kote uchi|Kısa kaldır;Bileğe doğru ileri vur;"Kote!" kiai;Geçip dön','Do uchi|Shinai\'yi kaldır;Çapraz inerek gövdeye vur;"Do!" kiai;Yanından geç','Hiki-waza|Tsubazeriai pozisyonunda kal;Rakibi it;Geri adım atarken vur;Mesafede zanshin'],
 systema:['Nefes kontrolü|Burundan al;Ağızdan ver;Darbe anında nefesi bırak;Gevşek kal','Yere düşüş|Dizini bük;Yana yuvarlan;Omurgayı yuvarlak tut;Ayağa kalk','Kısa vuruş|Gevşek yumruk yap;Kısa mesafeden vur;Ağırlığı aktar;Geri gevşe','Bıçak savunması|Hattan çık;Bileği yönlendir;Dengesini boz;Kontrol et','Çoklu saldırgan|Hareketli kal;Saldırganları tek hatta diz;Kısa vur ve geç;Kaçış yolunu açık tut'],
 capo:['Ginga|Bir ayak geride, kol yüzü korusun;Ağırlığı aktar;Ayakları değiştir;Ritmi koru','Meia lua de frente|Gingadan çık;Bacağı içeriden dışa yay çiz;Dengeyi koru;Gingaya dön','Armada|Arka ayakla dön;Omuz üstünden bak;Bacağı dışa savur;Gingaya dön','Esquiva|Gövdeyi alçalt;Kolla yüzü koru;Tekmenin altından eğil;Kalkıp karşılık ver','Au (çember)|Elleri yere koy;Bacakları çember çizerek geçir;Gövdeyi dik tut;Ayağa in'],
};
const curOf=sp=>(CUR[sp]||CUR.boks).map(s=>{const[n,st,sub]=s.split('|');return{n,st:st.split(';'),sub:!!sub}});
const BELTS={bjj:['Beyaz','Mavi','Mor','Kahverengi','Siyah'],judo:['Beyaz','Sarı','Turuncu','Yeşil','Mavi','Kahverengi','Siyah'],karate:['Beyaz','Sarı','Turuncu','Yeşil','Mavi','Kahverengi','Siyah'],tkd:['Beyaz','Sarı','Yeşil','Mavi','Kırmızı','Siyah'],aikido:['6. kyu','4. kyu','2. kyu','1. kyu','1. dan'],kendo:['6. kyu','4. kyu','2. kyu','1. kyu','1. dan'],capo:['Crua','Laranja','Azul','Verde','Mestre'],sambo:['Başlangıç','3. derece','2. derece','1. derece','Usta adayı'],gures:['Minder','Küçük','Yıldız','Genç','Büyük']};
function beltOf(sp){const n=S.sports[sp]||0,t=(S.tech&&S.tech[sp])||0;const L=BELTS[sp]||['Acemi','Amatör','Turnuva','Lisanslı','Usta'];const i=Math.min(L.length-1,Math.min(t,Math.floor(n/12)));return L[i]}
/* Lapa/pao tuş setleri ve gerçek kombinasyonlar */
const PADS={
 boks:{b:['1 Jab','2 Düz','3 Sol kroşe','4 Sağ kroşe','5 Sol aparkat','6 Sağ aparkat','Eğil','Slip'],c:[[0,1],[0,1,2],[0,0,1],[1,2,1],[0,5,2,1],[0,1,6,1],[2,1,2],[0,1,4,1],[0,7,1,2],[0,1,2,1]]},
 muay:{b:['Jab','Düz','Sol tekme','Sağ tekme','Diz','Dirsek','Teep','Kaval blok'],c:[[0,1,3],[6,0,1],[0,5],[1,4],[0,1,7,3],[3,1,2],[0,1,5,4]]},
 tkd:{b:['Ap chagi','Dollyo','Yop chagi','Dwi chagi','Yumruk','Blok','Geri adım','Kayma'],c:[[1,1],[0,1],[5,4,1],[6,3],[2,1],[7,1,3]]},
 kendo:{b:['Men','Kote','Do','Tsuki','Hiki-men','Seme','Geri adım','Kiai'],c:[[1,0],[5,0],[1,2],[5,1,0],[4],[7,0],[3,0]]},
 _:{b:['Jab','Düz','Kroşe','Aparkat','Ön tekme','Yuvarlak tekme','Eğil','Blok'],c:[[0,1,5],[0,1,2,5],[4,0,1],[0,6,1],[5,7,1],[0,1,3,2],[2,1,4]]},
};
const padOf=sp=>PADS[sp]||PADS._;
const FORMS={karate:['Gedan-barai','Oi-zuki','Age-uke','Soto-uke','Mae-geri','Shuto-uke'],tkd:['Arae makki','Momtong jireugi','Olgul makki','Ap chagi','Momtong makki','Sonnal'],kungfu:['Mabu','Gongbu','Chong quan','Deng tui','Pao chui','Tan tui'],kendo:['Kamae','Men','Kote','Do','Tsuki','Zanshin'],aikido:['Irimi','Tenkan','Tenshin','Mae ukemi','Ushiro ukemi','Shikko'],capo:['Ginga','Meia lua','Armada','Esquiva','Au','Negativa']};
const STEPS=['↖ Sol ileri','↑ İleri','↗ Sağ ileri','← Sol','● Pivot','→ Sağ','↙ Sol geri','↓ Geri','↘ Sağ geri'];
const SPAR={
 strike:{d:['Slip','Eğil','Blok','Geri adım'],a:[['Jab geliyor',0],['Düz geliyor',0],['Sağ kroşe geliyor',1],['Sol kroşe geliyor',1],['Aparkat geliyor',2],['Yüksek tekme geliyor',3],['Ön tekme geliyor',3],['Gövdeye kroşe',2]],k:['Düz ile karşılık','Kroşe ile karşılık','Aparkat ile karşılık','Ön tekme ile karşılık']},
 grap:{d:['Sprawl','Çerçeve + kalça kaçışı','Kolu çek, stack yap','Tabanı genişlet'],a:[['Rakip tek dalma yapıyor',0],['Rakip çift dalmaya giriyor',0],['Rakip guard\'ını geçiyor',1],['Rakip yan kontrole oturdu',1],['Rakip armbar kuruyor',2],['Rakip triangle atıyor',2],['Rakip atış için kalçasını sokuyor',3],['Rakip süpürmeye çalışıyor',3]],k:['Sırtını al','Guard\'ı geç','Süpür','Atışla indir']},
 self:{d:['Bileği kontrol et','Parmakları çek + diz','Ağırlık düşür + dirsek','Namluyu hattan çıkar'],a:[['Bıçaklı saldırgan yaklaşıyor',0],['Önden boğaz sıkma',1],['Arkadan sarılma',2],['Tabanca tehdidi',3],['Yukarıdan bıçak darbesi',0],['Duvara yaslayıp boğaz sıkma',1]],k:['Silahı al','Kasığa diz','Dirsek ve kaç','Mesafe koy']},
};
const sparOf=(sp,t)=>t==='senaryo'||sp==='krav'||sp==='systema'?SPAR.self:GRAP.includes(sp)||t==='randori'?SPAR.grap:SPAR.strike;

/* ---------- Ders oyunları ---------- */
function curTech(sp,needSub){const C=curOf(sp);const k=(S.tech[sp]||0);if(needSub){const subs=C.filter(c=>c.sub);if(!subs.length)return C[Math.min(k,C.length-1)];const learned=subs.filter(c=>C.indexOf(c)<Math.max(1,k));return (learned.length?pick(learned):subs[0])}return k<C.length?C[k]:pick(C)}
function lgOrder(){
 const sp=MG.id,C=curOf(sp),k=S.tech[sp]||0,tech=k<C.length?C[k]:pick(C),isNew=k<C.length;MG.techNew=isNew;
 $('#mgb').innerHTML=`<div class="brief"><span class="n">${isNew?k+1:'↺'}</span><div><b>${esc(tech.n)}</b><span class="small muted">${isNew?`Müfredat ${k+1}/${C.length}: hoca yeni tekniği gösteriyor.`:'Müfredat tamamlandı: tekrar dersi.'}</span></div></div>
 <div class="card" id="demo">${tech.st.map((s,i)=>`<div class="row" style="gap:10px"><span class="stencil acc" style="font-size:22px;min-width:22px">${i+1}</span><span>${esc(s)}</span></div>`).join('')}<div class="mg-tbar" style="width:100%"><i id="mt"></i></div></div>
 <button class="btn block" id="ok">Anladım, uygula</button>`;
 let t0=performance.now();const lim=7000+tech.st.join('').length*40;
 const tick=()=>{if(!MG||MG.done||!$('#mt'))return;const e=performance.now()-t0;$('#mt').style.width=Math.max(0,100*(1-e/lim))+'%';if(e>=lim){$('#mt').style.width='0%'}else MG.raf=requestAnimationFrame(tick)};tick();
 const go=()=>{if(!$('#ok'))return;cancelAnimationFrame(MG.raf);const sh=tech.st.map((s,i)=>[s,i]).sort(()=>R()-.5);let pos=0,err=0;const st=performance.now();
  $('#mgb').innerHTML=`<div class="brief"><span class="n">?</span><div><b>${esc(tech.n)}</b><span class="small muted">Adımları doğru sırayla dokun.</span></div></div><div id="done" style="display:flex;flex-direction:column;gap:6px"></div><div id="opts" style="display:flex;flex-direction:column;gap:8px">${sh.map(([s,i])=>`<button class="opt" data-i="${i}"><span class="k">·</span><span class="grow">${esc(s)}</span></button>`).join('')}</div>`;
  document.querySelectorAll('#opts .opt').forEach(b=>b.addEventListener('click',()=>{if(+b.dataset.i===pos){$('#done').insertAdjacentHTML('beforeend',`<div class="brief" style="padding:8px 12px"><span class="n" style="font-size:18px">${pos+1}</span><span class="small">${esc(tech.st[pos])}</span></div>`);b.remove();pos++;
   if(pos>=tech.st.length){const tm=(performance.now()-st)/1000;const s=clamp(1-err*.22-0,0,1);MG.learn=s>=.55&&isNew;mgEnd(s,`<p class="small">${MG.learn?`<b class="green">Yeni teknik öğrenildi: ${esc(tech.n)}</b>`:isNew?'<span class="red">Teknik henüz oturmadı. Bir sonraki teknik dersinde tekrar.</span>':'Tekrar tamamlandı.'} · Hata: ${err}</p>`)}}
   else{err++;b.classList.add('bad');setTimeout(()=>b.classList.remove('bad'),300);toast('Yanlış sıra. Hoca: "Önce temeli kur!"')}}))};
 $('#ok').addEventListener('click',go);
}
function lgMitts(){
 const sp=MG.id,P=padOf(sp);const N=5;let r=0,good=0,seq=[],pos=0,t0=0,open=false;
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Kombinasyon <b id="mr">0</b>/${N}</span><span>Temiz <b id="mh">0</b></span></div>
 <div class="mg-stage" style="min-height:190px"><svg viewBox="0 0 120 90" width="150" aria-hidden="true"><circle cx="60" cy="28" r="14" fill="#8a6a50"/><path d="M30 90 Q30 52 60 48 Q90 52 90 90Z" fill="#2c3c50"/><ellipse id="ml" cx="30" cy="40" rx="13" ry="15" fill="#c8402e"/><ellipse id="mr2" cx="90" cy="40" rx="13" ry="15" fill="#c8402e"/></svg><div class="mg-cmd stencil" id="mc" style="font-size:30px">HAZIR</div><div class="small muted" id="seq"></div><div class="mg-tbar"><i id="mt"></i></div></div>
 <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px">${P.b.map((n,i)=>`<button class="mg-btn" data-i="${i}" style="min-height:58px;font-size:13px">${n}</button>`).join('')}</div>`;
 const mc=$('#mc'),sq=$('#seq'),mt=$('#mt');
 const next=()=>{if(r>=N)return mgEnd(good/N);r++;$('#mr').textContent=r;seq=pick(P.c).slice(0,3);pos=0;mc.textContent='"'+seq.map(i=>P.b[i].split(' ')[0]).join(' – ')+'!"';mc.className='mg-cmd stencil';sq.textContent=seq.map(i=>P.b[i]).join(' → ');t0=performance.now();open=true;tick()};
 const lim=()=>(900+seq.length*650-r*40)*MGF();
 const tick=()=>{if(!open||!MG||MG.done)return;const e=performance.now()-t0;mt.style.width=Math.max(0,100*(1-e/lim()))+'%';if(e>lim()){open=false;mc.textContent='GEÇ KALDIN';mc.className='mg-cmd stencil r';mgT(next,650)}else MG.raf=requestAnimationFrame(tick)};
 document.querySelectorAll('.mg-btn').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(!open)return;const i=+b.dataset.i;
  const m=$(pos%2?'#mr2':'#ml');if(m){m.setAttribute('fill','#ffd23a');setTimeout(()=>m.setAttribute('fill','#c8402e'),120)}
  if(i===seq[pos]){pos++;if(pos>=seq.length){open=false;good++;$('#mh').textContent=good;mc.textContent='TEMİZ!';mc.className='mg-cmd stencil g';mgT(next,550)}}
  else{open=false;b.classList.add('bad');setTimeout(()=>b.classList.remove('bad'),250);mc.textContent='KOMBİNASYON BOZULDU';mc.className='mg-cmd stencil r';mgT(next,700)}}));
 mgT(next,600);
}
function lgBag(){
 const sp=MG.id,g=GRAP.includes(sp);const L=sp==='systema'?['Nefes al','Nefes ver']:g?['Giriş','Atış']:['Sol','Sağ'];
 let round=1,last=-1,q=0,tot=0,sta=100,tEnd=0,rest=false;const RN=2,RT=8000;
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Raunt <b id="mr">1</b>/${RN}</span><span>Kaliteli <b id="mh">0</b></span></div>
 <div class="mg-stage" style="min-height:200px"><svg viewBox="0 0 80 120" width="70" aria-hidden="true"><path d="M40 0V14" stroke="#888" stroke-width="2"/><rect id="bagr" x="20" y="14" width="40" height="100" rx="12" fill="#7a2e26"/><rect x="20" y="40" width="40" height="5" fill="#00000040"/><rect x="20" y="80" width="40" height="5" fill="#00000040"/></svg><div class="mg-cmd stencil" id="mc" style="font-size:28px">${g?'UCHİKOMİ':'TORBA'}</div><div class="mg-tbar"><i id="mt"></i></div><div class="bar" style="width:86%"><span>Kondisyon</span><div class="t"><i id="sta" style="width:100%;background:var(--green)"></i></div><span class="v" id="stv">100</span></div></div>
 <div class="mg-pad">${L.map((n,i)=>`<button class="mg-btn" data-i="${i}" style="min-height:110px;font-size:22px">${n}</button>`).join('')}</div>`;
 const mc=$('#mc'),mt=$('#mt');let lastT=performance.now();tEnd=performance.now()+RT;
 const tick=now=>{if(!MG||MG.done)return;const dt=(now-lastT)/1000;lastT=now;sta=clamp(sta+dt*(rest?30:7));$('#sta').style.width=sta+'%';$('#stv').textContent=Math.round(sta);
  const left=tEnd-now;mt.style.width=Math.max(0,100*left/(rest?3000:RT))+'%';
  if(left<=0){if(rest){rest=false;round++;$('#mr').textContent=round;tEnd=now+RT;mc.textContent='BAŞLA';mc.className='mg-cmd stencil'}else if(round>=RN)return mgEnd(clamp(q/(RN*20)));else{rest=true;tEnd=now+3000;mc.textContent='DİNLEN';mc.className='mg-cmd stencil'}}
  MG.raf=requestAnimationFrame(tick)};MG.raf=requestAnimationFrame(tick);
 document.querySelectorAll('.mg-btn').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(rest||!MG||MG.done)return;const i=+b.dataset.i;tot++;const bag=$('#bagr');
  if(i!==last&&sta>25){q++;$('#mh').textContent=q;sta-=6;bag.setAttribute('transform',`rotate(${i?4:-4} 40 0)`);mc.textContent=sta>60?'GÜÇLÜ':'DEVAM';mc.className='mg-cmd stencil g'}
  else{sta-=3;mc.textContent=i===last?'RİTMİ KORU':'NEFES AL';mc.className='mg-cmd stencil r'}last=i;setTimeout(()=>bag&&bag.setAttribute('transform',''),90)}));
}
function lgArrows(){
 const sp=MG.id,t=MG.lesson;const moves=t==='kata'&&FORMS[sp]?FORMS[sp]:STEPS;const lens=[2,3,3,4];let lv=0,ok=0,seq=[],pos=0,acc=false;
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Seri <b id="mr">1</b>/4</span><span>Doğru <b id="mh">0</b></span></div>
 <div class="mg-stage" style="min-height:130px"><div class="mg-cmd stencil" id="mc" style="font-size:24px">İZLE</div><div class="small muted" id="sq">Hoca gösteriyor…</div></div>
 <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px">${moves.map((n,i)=>`<button class="mg-btn" data-i="${i}" style="min-height:62px;font-size:14px">${n}</button>`).join('')}</div>`;
 const btns=[...document.querySelectorAll('.mg-btn')],mc=$('#mc');
 const lit=(i,ms,c)=>{const b=btns[i];b.style.background=c||'var(--acc)';b.style.color='var(--on-acc)';setTimeout(()=>{b.style.background='';b.style.color=''},ms)};
 const next=()=>{if(lv>=4)return mgEnd(ok/4);seq=[...Array(lens[lv])].map(()=>Math.floor(R()*moves.length));pos=0;acc=false;$('#mr').textContent=lv+1;mc.textContent='İZLE';mc.className='mg-cmd stencil';$('#sq').textContent='Hoca gösteriyor…';
  seq.forEach((m,k)=>mgT(()=>{lit(m,420*Math.min(2,MGF()));mc.textContent=moves[m]},500+k*650));mgT(()=>{acc=true;mc.textContent='SIRA SENDE';$('#sq').textContent=seq.length+' hareket'},500+seq.length*650)};
 btns.forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(!acc)return;const i=+b.dataset.i;
  if(i===seq[pos]){lit(i,160);pos++;if(pos>=seq.length){acc=false;ok++;lv++;$('#mh').textContent=ok;mc.textContent='DOĞRU';mc.className='mg-cmd stencil g';mgT(next,800)}}
  else{acc=false;lit(i,300,'var(--red)');lv++;mc.textContent='SIRA BOZULDU';mc.className='mg-cmd stencil r';mgT(next,900)}}));
 mgT(next,400);
}
function lgSpar(){
 const sp=MG.id,P=sparOf(sp,MG.lesson);let me=100,op=100,round=1,n=0,phase='def',cur=null,t0=0,open=false,ctr=0;const RN=2,PER=4;
 $('#mgb').innerHTML=`<div class="mg-hud"><span>Raunt <b id="mr">1</b>/${RN}</span><span id="ph">Savunma</span></div>
 <div class="card" style="padding:12px;gap:8px">${bar('Sen',me,'var(--green)').replace('class="bar"','class="bar" id="hb1"')}${bar('Rakip',op,'var(--red)').replace('class="bar"','class="bar" id="hb2"')}</div>
 <div class="mg-stage" style="min-height:150px"><div class="mg-cmd stencil" id="mc" style="font-size:26px">HAZIR</div><div class="small acc" id="hint" style="min-height:20px"></div><div class="mg-tbar"><i id="mt"></i></div></div>
 <div class="mg-pad" id="pad"></div>`;
 const mc=$('#mc'),mt=$('#mt');
 const hp=()=>{$('#hb1').querySelector('i').style.width=me+'%';$('#hb1').querySelector('.v').textContent=Math.round(me);$('#hb2').querySelector('i').style.width=op+'%';$('#hb2').querySelector('.v').textContent=Math.round(op)};
 const pad=(arr,fn)=>{$('#pad').innerHTML=arr.map((x,i)=>`<button class="mg-btn" data-i="${i}" style="min-height:64px;font-size:15px">${x}</button>`).join('');document.querySelectorAll('#pad .mg-btn').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();fn(+b.dataset.i,b)}))};
 const tick=()=>{if(!open||!MG||MG.done)return;const e=performance.now()-t0,lim=(phase==='def'?1500-round*120:1200)*MGF();mt.style.width=Math.max(0,100*(1-e/lim))+'%';if(e>lim){open=false;if(phase==='def'){me-=12;hp();mc.textContent='YEDİN!';mc.className='mg-cmd stencil r'}else{mc.textContent='FIRSAT KAÇTI';mc.className='mg-cmd stencil r'}mgT(attack,700)}else MG.raf=requestAnimationFrame(tick)};
 const fin=()=>mgEnd(clamp((op<=0?1:0)*.2+(100-op)/100*.55+me/100*.45-.1),`<p class="small">Sen ${Math.round(me)} · Rakip ${Math.round(op)}</p>`);
 const attack=()=>{if(me<=0||op<=0)return fin();if(n>=PER){n=0;round++;if(round>RN)return fin();$('#mr').textContent=round;mc.textContent='RAUNT '+round;mc.className='mg-cmd stencil';return mgT(attack,900)}
  n++;phase='def';$('#ph').textContent='Savunma';cur=pick(P.a);mc.textContent=cur[0].toLocaleUpperCase('tr');{const h=$('#hint');if(h)h.textContent=(S.mgTempo||'sakin')==='sakin'?'İpucu: '+P.d[cur[1]]:''}mc.className='mg-cmd stencil';t0=performance.now();open=true;
  pad(P.d,(i,b)=>{if(!open)return;open=false;if(i===cur[1]){mc.textContent='SAVUNDUN · KARŞILIK!';mc.className='mg-cmd stencil g';ctr=Math.floor(R()*P.k.length);phase='ctr';$('#ph').textContent='Karşılık';const opts=[ctr,(ctr+1+Math.floor(R()*(P.k.length-1)))%P.k.length].sort(()=>R()-.5);
    mgT(()=>{{const h=$('#hint');if(h)h.textContent=(S.mgTempo||'sakin')==='sakin'?'Komutu oku ve aynı isimli tuşa bas':''}mc.textContent=P.k[ctr].toLocaleUpperCase('tr');t0=performance.now();open=true;pad(opts.map(o=>P.k[o]),(j)=>{if(!open)return;open=false;if(opts[j]===ctr){op-=14+S.st.dovus/12;hp();mc.textContent='İSABET';mc.className='mg-cmd stencil g'}else{me-=5;hp();mc.textContent='YANLIŞ AÇI';mc.className='mg-cmd stencil r'}mgT(attack,650)});tick()},350)}
   else{me-=14;hp();b.classList.add('bad');mc.textContent='YANLIŞ SAVUNMA';mc.className='mg-cmd stencil r';mgT(attack,750)}});tick()};
 mgT(attack,700);
}
function lgSubm(){
 const sp=MG.id,clinch=MG.lesson==='klinc';const C=curOf(sp);const tech=clinch?(C.find(c=>/Klinç/.test(c.n))||C[0]):curTech(sp,true);
 const others=C.filter(c=>c!==tech).flatMap(c=>c.st);let st=0,right=0;
 const stage1=()=>{if(st>=tech.st.length)return stage2();const opts=[tech.st[st],...others.sort(()=>R()-.5).slice(0,2)].sort(()=>R()-.5);
  $('#mgb').innerHTML=`<div class="mg-hud"><span>Adım <b>${st+1}</b>/${tech.st.length}</span><span>Doğru <b>${right}</b></span></div><div class="brief"><span class="n">${st+1}</span><div><b>${esc(tech.n)}</b><span class="small muted">${st?'Sıradaki hamle ne?':'Pozisyon kuruldu. İlk hamle ne?'}</span></div></div>${opts.map(o=>`<button class="opt" data-o="${esc(o)}"><span class="k">›</span><span class="grow">${esc(o)}</span></button>`).join('')}`;
  document.querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.o===tech.st[st]){right++;toast('Doğru hamle')}else toast('Rakip boşluğu fark etti! Doğrusu: '+tech.st[st]);st++;stage1()}))};
 const stage2=()=>{let pr=20,esc_=0,hold=false,inz=0,last=performance.now();
  $('#mgb').innerHTML=`<div class="brief"><span class="n">!</span><div><b>${clinch?'Klinçte dengeyi koru':'Kilidi sık'}</b><span class="small muted">Basılı tut: baskı artar. Bırak: azalır. Baskıyı yeşil bölgede tut; fazlası kontrolü kaybettirir, azı kaçırır.</span></div></div>
  <div class="mg-stage" style="min-height:170px"><div class="mg-cmd stencil" id="mc" style="font-size:26px">BASKI</div><div class="track" style="height:30px"><div class="z" style="left:45%;width:40%"></div><div class="m" id="pm"></div></div><div class="bar" style="width:88%"><span>Rakip kaçıyor</span><div class="t"><i id="eb" style="width:0%;background:var(--red)"></i></div><span class="v" id="ev">0</span></div><div class="bar" style="width:88%"><span>${clinch?'Kontrol':'Teslim'}</span><div class="t"><i id="tb" style="width:0%;background:var(--green)"></i></div><span class="v" id="tv">0</span></div></div>
  <button class="mg-btn" id="hold" style="min-height:96px;font-size:22px">BASILI TUT</button>`;
  const h=$('#hold');h.addEventListener('pointerdown',e=>{e.preventDefault();hold=true});['pointerup','pointerleave','pointercancel'].forEach(ev=>h.addEventListener(ev,()=>hold=false));
  const tick=now=>{if(!MG||MG.done)return;const dt=(now-last)/1000;last=now;pr=clamp(pr+(hold?55:-40)*dt+(R()-.5)*8*dt*10*.2);$('#pm').style.left=pr+'%';
   const z=pr>=45&&pr<=85;if(z){inz+=dt}else esc_+=dt*(pr>85?14:10);$('#eb').style.width=clamp(esc_)+'%';$('#ev').textContent=Math.round(esc_);const tp=clamp(inz/2.5*100);$('#tb').style.width=tp+'%';$('#tv').textContent=Math.round(tp);
   $('#mc').textContent=z?(clinch?'KONTROL SENDE':'SIKIYOR…'):pr>80?'ÇOK SERT!':'GEVŞEK';$('#mc').className='mg-cmd stencil '+(z?'g':'r');
   if(inz>=2.5)return mgEnd(right/tech.st.length*.6+.4,`<p class="small"><b class="green">${clinch?'Rakip dengesini kaybetti, diz vuruşu!':'Rakip tap attı!'}</b> ${esc(tech.n)} · Doğru adım ${right}/${tech.st.length}</p>`);
   if(esc_>=100)return mgEnd(right/tech.st.length*.6+inz/2.5*.4*.5,`<p class="small red">Rakip kurtuldu. ${esc(tech.n)} · Doğru adım ${right}/${tech.st.length}</p>`);
   MG.raf=requestAnimationFrame(tick)};MG.raf=requestAnimationFrame(tick)};
 stage1();
}
