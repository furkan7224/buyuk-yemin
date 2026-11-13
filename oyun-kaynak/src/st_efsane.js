/* =====================================================================
   HİKÂYE · EFSANE BİRLİK
   Çerçeve: Çamlık Huzurevi. 91 yaşındaki "Kâzım Yıldırım" ve tarih öğrencisi Zeynep.
   Geri dönüşler: Kurt Bölüğü, Kartal Geçidi, dokuz gün.
   Sır: Huzurevindeki adam aslında Er Hasan Çelik'tir ("Çaylak").
   Çavuş Kâzım Yıldırım son gece onu kurtarırken ölmüş, künyesini ona vermiştir.
   Zeynep, Kâzım'ın kız kardeşi Nazlı'nın torunudur.
   Tüm yer, kişi ve savaş kurgusaldır.
   ===================================================================== */
(function(){
function sc(o){const W=360,H=150;const sky=o.sky||['#0b0f14','#1e2833'];let g=`<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;border-radius:12px" aria-hidden="true"><defs><linearGradient id="ef${o.k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#ef${o.k})"/>`;
 if(o.stars){let s=5;for(let i=0;i<30;i++){s=(s*9301+49297)%233280;const x=s%W;s=(s*9301+49297)%233280;const y=s%80;g+=`<circle cx="${x}" cy="${y}" r="${i%5?0.6:1.1}" fill="#fff" opacity="${0.3+(i%4)*0.15}"/>`}}
 if(o.home){g+=`<rect width="${W}" height="${H}" fill="#14110d"/><rect x="200" y="18" width="120" height="84" fill="#3a4652"/><rect x="258" y="18" width="4" height="84" fill="#221c15"/><rect x="200" y="58" width="120" height="4" fill="#221c15"/>`;
  for(let i=0;i<26;i++){const x=204+(i*37)%112,y=22+(i*23)%76;g+=`<line x1="${x}" y1="${y}" x2="${x-2}" y2="${y+8}" stroke="#a9bdd2" stroke-width=".7" opacity=".5"/>`}
  g+=`<path d="M120 0 L60 ${H} L180 ${H}Z" fill="#ffd98a" opacity=".07"/><rect x="104" y="46" width="32" height="8" fill="#3a3326"/><rect x="40" y="104" width="140" height="46" fill="#2a2219"/><rect x="60" y="92" width="36" height="12" fill="#e8e0c8" opacity=".55"/><rect x="118" y="88" width="10" height="16" rx="2" fill="#c9a64a" opacity=".6"/>`;
  g+=`<g fill="#07060a"><path d="M232 150 L232 120 Q232 104 248 102 L262 102 Q276 104 276 120 L276 150Z"/><circle cx="255" cy="90" r="11"/></g>`}
 if(o.photo){g+=`<rect width="${W}" height="${H}" fill="#1a1612"/><rect x="58" y="14" width="244" height="124" fill="#d9cfb6"/><rect x="66" y="22" width="228" height="100" fill="#8d8a80"/><path d="M66 70 L120 40 L170 66 L220 34 L294 64 L294 122 L66 122Z" fill="#b5b2a8"/>`;
  for(let i=0;i<12;i++){const x=82+i*18,y=i%2?112:104;g+=`<g fill="#2b2a26"><circle cx="${x}" cy="${y-18}" r="4.4"/><path d="M${x-6} ${y-13} L${x+6} ${y-13} L${x+7} ${y+6} L${x-7} ${y+6}Z"/></g>`}
  g+=`<circle cx="226" cy="85" r="10" fill="none" stroke="#c9a64a" stroke-width="1.4" opacity="${o.mark?1:0}"/>`}
 if(o.snow){g+=`<path d="M0 ${H} L0 84 L60 54 L110 76 L170 36 L230 70 L290 44 L360 72 L360 ${H}Z" fill="#cfd8e0" opacity=".9"/><path d="M170 36 L184 50 L176 48 L168 56 L160 48Z M290 44 L304 58 L294 56Z" fill="#fff"/>`;
  for(let i=0;i<50;i++){const x=(i*47)%W,y=(i*31)%H;g+=`<circle cx="${x}" cy="${y}" r="${i%3?0.8:1.4}" fill="#fff" opacity=".7"/>`}}
 if(o.tents)[60,120,180].forEach(x=>g+=`<path d="M${x} 130 L${x+24} 104 L${x+48} 130Z" fill="#3f4a35"/><path d="M${x+24} 104 L${x+24} 130" stroke="#222a1c"/>`);
 if(o.pass)g+=`<path d="M0 ${H} L0 30 L60 40 L120 96 L150 ${H}Z M360 ${H} L360 26 L300 38 L236 94 L210 ${H}Z" fill="${o.pass}"/><path d="M150 ${H} L120 96 L180 110 L236 94 L210 ${H}Z" fill="#dfe6ec" opacity=".8"/><path d="M40 34 L120 20 L200 30 L260 18 L330 30 L300 38 L60 40Z" fill="#f1f5f8" opacity="${o.cornice?0.95:0}"/>`;
 if(o.village)[[60,104],[100,110],[150,100],[200,108],[250,102],[300,110]].forEach(([x,y])=>g+=`<path d="M${x} 130 L${x} ${y} L${x+16} ${y-12} L${x+32} ${y} L${x+32} 130Z" fill="#2a241c"/><rect x="${x+12}" y="${y+6}" width="7" height="7" fill="#ffd98a" opacity=".55"/>`);
 if(o.flare)g+=`<circle cx="220" cy="24" r="6" fill="#fff6d6"/><circle cx="220" cy="24" r="56" fill="#fff6d6" opacity=".14"/>`;
 if(o.lights){for(let i=0;i<16;i++)g+=`<circle cx="${210+(i*29)%140}" cy="${60+(i*13)%30}" r="1.6" fill="#ffcf7a" opacity=".85"/>`}
 if(o.radio)g+=`<rect width="${W}" height="${H}" fill="#12140f"/><rect x="110" y="54" width="140" height="70" rx="4" fill="#3b4234"/><circle cx="148" cy="88" r="16" fill="#1d2119"/><circle cx="148" cy="88" r="6" fill="#59624e"/><rect x="180" y="72" width="54" height="8" fill="#1d2119"/><rect x="180" y="88" width="54" height="8" fill="#1d2119"/><path d="M226 54 L262 10" stroke="#59624e" stroke-width="2"/><circle cx="226" cy="108" r="3" fill="#c84a3a"/>`;
 if(o.hospital)g+=`<rect width="${W}" height="${H}" fill="#d9d6cc"/><rect x="0" y="100" width="${W}" height="50" fill="#b9b4a6"/><rect x="40" y="84" width="150" height="30" fill="#f1efe8"/><rect x="40" y="76" width="34" height="14" rx="4" fill="#fff"/><rect x="250" y="20" width="70" height="60" fill="#a8c4d6"/><rect x="284" y="20" width="3" height="60" fill="#8a8578"/><rect x="214" y="40" width="20" height="40" fill="#8a8578" opacity=".5"/><path d="M110 30 l0 16 M102 38 l16 0" stroke="#c84a3a" stroke-width="5"/>`;
 if(o.monument)g+=`<rect x="150" y="40" width="60" height="96" fill="#b9b6ad"/><path d="M146 40 L214 40 L180 22Z" fill="#a19e95"/><rect x="160" y="64" width="40" height="3" fill="#6d6a62"/><rect x="160" y="74" width="40" height="3" fill="#6d6a62"/><rect x="160" y="96" width="40" height="3" fill="#6d6a62"/><rect x="160" y="106" width="40" height="3" fill="#6d6a62"/>`;
 if(o.men)o.men.forEach(([x,y,s=1])=>{g+=`<g transform="translate(${x} ${y}) scale(${s})" fill="#060706"><circle cx="0" cy="-26" r="4.4"/><path d="M-5 -21 L5 -21 L7 -4 L4 12 L1 12 L0 0 L-1 12 L-4 12 L-7 -4Z"/><path d="M5 -18 L16 -24 L17 -22 L6 -14Z"/></g>`});
 if(o.fall)g+=`<path d="M40 20 Q120 60 160 ${H} L80 ${H} Q60 80 20 40Z" fill="#f1f5f8" opacity=".85"/><path d="M300 20 Q240 60 210 ${H} L290 ${H} Q300 80 340 40Z" fill="#f1f5f8" opacity=".85"/>`;
 if(o.sun)g+=`<circle cx="${o.sun[0]}" cy="${o.sun[1]}" r="20" fill="#ffd98a" opacity=".85"/><circle cx="${o.sun[0]}" cy="${o.sun[1]}" r="40" fill="#ffb84a" opacity=".14"/>`;
 return g+'</svg>'}
const ARTS={
 cover:()=>sc({k:'cv',sky:['#1b2530','#6b7a86'],snow:1,men:[[160,140,1],[184,140,1]]}),
 home:()=>sc({k:'h',home:1}),
 photo:()=>sc({k:'p',photo:1}),
 photoMark:()=>sc({k:'pm',photo:1,mark:1}),
 camp:()=>sc({k:'c',sky:['#4f5c68','#a8b4be'],snow:1,tents:1,men:[[262,136,.9]]}),
 pass:()=>sc({k:'g',sky:['#5d6b78','#b9c4cc'],pass:'#3a4148',men:[[176,118,.7],[190,118,.7]]}),
 village:()=>sc({k:'v',sky:['#4b5864','#9fabb4'],snow:1,village:1}),
 night:()=>sc({k:'n',sky:['#04060a','#141c26'],stars:1,pass:'#0b0e12',lights:1,flare:1}),
 radio:()=>sc({k:'r',radio:1}),
 cornice:()=>sc({k:'co',sky:['#04060a','#141c26'],stars:1,pass:'#0b0e12',cornice:1,lights:1}),
 fall:()=>sc({k:'f',sky:['#0c1118','#2a3440'],pass:'#0b0e12',fall:1}),
 hospital:()=>sc({k:'hs',hospital:1}),
 monument:()=>sc({k:'m',sky:['#8aa0b4','#e6d2b4'],pass:'#5b6168',monument:1,sun:[300,36]})
};
const cl=x=>Math.max(0.05,Math.min(0.92,x));
function route(st,fl){if(fl.geri)return 'end_bedel';return {gercek:'end_gercek',efsane:'end_efsane',emanet:'end_emanet'}[fl.secim]}

const S={
/* ================= BÖLÜM 1 · ZİYARETÇİ ================= */
z1:{c:0,art:'home',b:`Çamlık Huzurevi, kasım. Yağmur camda ince çizgiler çiziyor.

Doksan bir yaşındasın. Sabahları kalkınca önce dizlerin, sonra hatıraların ağrıyor.

Hemşire Sevim kapıyı tıklatıyor:

— Kâzım Amca, bir ziyaretçin var. Üniversiteden bir kız. Tarih okuyormuş, eski askerlerin hikâyelerini kaydediyormuş. Özellikle seni sordu. Kurt Bölüğü'nü.

Kurt Bölüğü. Okul kitaplarında "Efsane Birlik" diye geçen on iki asker. Kartal Geçidi'ni dokuz gün tutup bir köyü kurtaran on iki kişi. Hayatta kalan tek kişi olarak bilinen sensin.

Komodinin çekmecesinde bir mendile sarılı bir madalya duruyor. Yıllardır açmadın.`,
 ch:[{t:'"Gelsin. Belki artık anlatmanın vakti gelmiştir."',fx:{vicdan:5},go:'z2'},
     {t:'"Yorgunum, başka zaman," de.',fx:{hafiza:-5},set:{isteksiz:1},go:'z2'}]},

z2:{c:0,art:'photo',b:(st,fl)=>`${fl.isteksiz
 ?'Sevim gitmeden önce komodinin üstüne bir fotoğraf bırakıyor. "Kız bunu sana göstermemi istedi." Bir dakika sonra kızın kendisi kapıda; izinsiz girmiyor ama vazgeçmeye de hiç niyeti yok.'
 :'Kız içeri giriyor. Yirmi dört yaşında var yok; elinde bir kayıt cihazı, çantasında kalın bir dosya.'}

— Ben Zeynep, diyor. Size bir fotoğraf göstermek istiyorum.

Fotoğrafı tanıyorsun. Karların içinde on iki genç adam. Kimi gülüyor, kimi objektife ters ters bakıyor. Arkada Kartal Geçidi'nin kayalıkları.

— Bu fotoğraf bütün kitaplarda var, diyor Zeynep. Ama altında isim yok. Hangisi sizsiniz?

Parmağın fotoğrafın üstünde bir an duruyor.`,
 ch:[{t:'Ortadaki, gülen, geniş omuzlu çavuşu göster.',fx:{vicdan:-10},set:{gosterdi:'cavus'},go:'z3'},
     {t:'En sondaki, karın içinde üşüyen zayıf çocuğu göster.',fx:{vicdan:10},set:{gosterdi:'caylak'},go:'z2b'}]},

z2b:{c:0,art:'photoMark',b:`Zeynep önce fotoğrafa, sonra sana bakıyor.

— Ama o çocuk… Kayıtlara göre o Er Hasan Çelik. Dokuzuncu gece şehit düşen.

Bir an odada yalnızca yağmurun sesi var.

— Gözlerim iyi görmüyor kızım, diyorsun. Yaşlılık.

Zeynep defterine bir şey yazıyor. Sonra gülümsüyor.

— Baştan anlatır mısınız? Birliğe ilk geldiğiniz günden.`,
 ch:[{t:'Gözlerini kapat ve anlatmaya başla.',go:'z3'}]},

z3:{c:0,art:'camp',b:(st,fl)=>`${fl.gosterdi==='cavus'?`— Çavuş Kâzım Yıldırım, diyor Zeynep, fotoğrafa bakarak. Yirmi üç yaşında. Sonra kayıt cihazını açıyor. — Baştan anlatın. Birliğe ilk geldiğiniz günden.

Gözlerini kapatıyorsun.

`:''}*Altmış dokuz yıl önce. Doğu cephesi.*

Kamyonun kasasından karın içine atlıyorsun. On dokuz yaşındasın. Yetimhaneden çıktığın günden beri sahip olduğun her şey sırtındaki çantada.

Kurt Bölüğü'nün çadırları bir derenin kenarına dizilmiş. Yüzbaşı Ateş Kaya seni baştan aşağı süzüyor ve tek kelime etmeden listeye bir işaret koyuyor.

Sonra bir ses:

— Yeni çaylak bu mu?

Geniş omuzlu, bıyıklı bir çavuş. Gülerken gözleri kayboluyor. Ellerinin morardığını görünce kendi eldivenlerini çıkarıp sana uzatıyor.

— Al. Bizim memlekette bu kara kar demezler.

Göğsündeki isim şeridinde *K. Yıldırım* yazıyor.`,
 ch:[{t:'Eldivenleri al. Teşekkür et.',fx:{birlik:10},set:{eldiven:1},go:'z4'},
     {t:'"Gerek yok," de. Kimseye borçlu kalmak istemezsin.',fx:{birlik:-5},go:'z4'},
     {t:'Bölüğün adını sor: neden "Kurt"?',fx:{birlik:5},set:{kurt:1},go:'z4'}]},

z4:{c:0,art:'camp',b:(st,fl)=>`${fl.eldiven
 ?'Çavuş omzuna vuruyor: — Adım Kâzım. Sen bana çavuşum de, ben sana çaylak derim. Anlaştık mı?'
 :fl.kurt
 ?'Çavuş gülüyor: — Kurt sürüden ayrılmaz da ondan. Biri düşerse sürü onu bırakmaz. Adım Kâzım. Sen de artık sürüdensin çaylak.'
 :'Çavuş omuz silkiyor: — Nasıl istersen. Ama bu dağda herkes birine borçlu kalır. Adım Kâzım.'}

İlk haftalar karla, nöbetle ve Kâzım'ın bitmeyen hikâyeleriyle geçiyor. Annesi Hatice Ana'yı anlatıyor; iki ağabeyini başka cephelerde kaybetmiş. Bir de sekiz yaşındaki kız kardeşi Nazlı'yı: "Her bayram harçlığını ben veririm. Bu bayram yetişemezsem kıyamet koparır."

Bölükte başkaları da var: az konuşan keskin nişancı Onbaşı Bekir, telsizci Yakup, kazanın başında türkü söyleyen aşçı Şükrü, sıhhiyeci Rıfat.

Bir gece nöbette Kâzım sana soruyor:

— Senin kimin var çaylak? Kime mektup yazıyorsun?`,
 ch:[{t:'"Kimsem yok," de. Doğruyu söyle.',fx:{birlik:10,vicdan:5},set:{yetim:1},go:'z5'},
     {t:'"Bir teyzem var," de. Yalnız görünmek istemezsin.',fx:{vicdan:-5},go:'z5'},
     {t:'Cevap verme. Konuyu değiştir.',fx:{birlik:-5},go:'z5'}]},

z5:{c:0,art:'home',b:(st,fl)=>`${fl.yetim
 ?'Kâzım uzun süre susuyor. Sonra cebinden buruşuk bir mektup çıkarıyor. — O zaman bundan sonra benim mektuplarımın yarısı senin, diyor. Annem iki kişiye dua etmeye alışkın zaten.'
 :'Kâzım üstelemiyor. Ama o geceden sonra her mektubunun sonuna bir satır ekliyor: "Yanımda bir çaylak var, ona da dua et ana."'}

Gözlerini açtığında Zeynep sana bakıyor. Kayıt cihazının kırmızı ışığı yanıp sönüyor.

— Hatice Ana, diyor yavaşça. Nazlı. Bu isimleri ne kadar sevgiyle söylediniz.

Sonra dosyasından bir kâğıt çıkarıyor.

— Bir şey soracağım, kızmayın. Kâzım Yıldırım'ın askerlik dosyasında kan grubu sıfır yazıyor. Huzurevinin sağlık kaydında ise A.

Boğazın kuruyor.`,
 ch:[{t:'"Kâtip hatasıdır kızım. O zamanlar her şey elle yazılırdı."',fx:{vicdan:-10},set:{katip:1},go:'g1'},
     {t:'Bir süre sus. Sonra "Yarın anlatırım," de.',fx:{hafiza:-5,vicdan:5},set:{yarin:1},go:'g1'},
     {t:'Çayını yudumla. Elinin titrediğini saklamaya çalış.',fx:{hafiza:5},go:'g1'}]},

/* ================= BÖLÜM 2 · GEÇİT ================= */
g1:{c:1,art:'home',b:(st,fl)=>`Ertesi gün Zeynep yine geliyor. ${fl.katip
 ?'Kan grubu meselesini bir daha açmıyor. Ama defterinin kenarına bir şey yazdığını görüyorsun.'
 :fl.yarin?'— Dün "yarın" demiştiniz, diyor gülümseyerek. Bugün o yarın.':'Getirdiği poğaçaları komodinin üstüne bırakıyor.'}

— Kartal Geçidi'ni anlatın, diyor. Kitaplarda üç satır var. Gerisini bilen tek kişi sizsiniz.

Hatıralar bazen kendiliğinden geliyor, bazen de onları zorla çağırmak gerekiyor.`,
 ch:[{t:'Hemen anlatmaya başla.',fx:{hafiza:-15},go:'g2'},
     {t:'Önce fotoğrafa uzun uzun bak. Yüzleri tek tek hatırla.',fx:{hafiza:5},go:'g2'}]},

g2:{c:1,art:'village',b:`*Mart. Kartal Geçidi.*

Yüzbaşı Ateş haritayı bir kayanın üstüne seriyor.

— Düşman ana hattı yarmış. Bu geçit, aşağıdaki Akpınar köyüne inen tek yol. Köyde üç yüz kişi var. Dağın arkasındaki yayla yolundan tahliye edilecekler. Bize üç gün lazım. Üç gün bu geçidi tutacağız.

Akpınar'a indiğinizde köyün yaşlısı Kerim Dede sizi karşılıyor. Torunu Gülsüm, on yaşında, keçilerini toplamaya çalışıyor. Kadınlar yorganları sırtlarına bağlamış. Yaşlılar, hastalar, kucaklarda bebekler…

Kâzım sana dönüyor:

— Kazmaya başlamamız lazım ama… şunlara bak çaylak.

Yüzbaşı ilk gün sana serbestlik veriyor.`,
 ch:[{t:'Köylülerin eşyalarını yayla yoluna taşımalarına yardım et.',fx:{birlik:5,vicdan:5},set:{yardim:1},go:'g3'},
     {t:'Mevzi kazmaya başla. Geçit tutulmazsa kimse kurtulamaz.',fx:{birlik:5},set:{mevzi:1},go:'g3'},
     {t:'Bekir\'le geçidin üst kayalıklarını keşfe çık.',set:{kesif:1},go:'g3'}]},

g3:{c:1,art:'night',b:(st,fl)=>`${fl.yardim
 ?'Akşam olduğunda kolların kopacak gibi. Gülsüm keçilerinden birinin yularını sana bırakıyor: "Bunu sen götür asker abi, en inatçısı bu."'
 :fl.mevzi?'Akşama kadar donmuş toprağı kazıyorsun. Ellerin kan içinde ama mevzi derin.'
 :'Bekir\'le birlikte geçidin üst kayalıklarında, düşmanın arkadan dolaşabileceği bir keçi yolu buluyorsunuz. Bekir yalnızca başını sallıyor: "İyi gördün."'}

İlk gece, saat üçte, karşı yamaçta ışıklar beliriyor. Motor sesleri. Sonra sessizlik.

Bekir yanına sokuluyor:

— Acele etme. Yaklaşsınlar. Erken ateş edersek kaç kişi olduğumuzu anlarlar.

Yanındaki Yakup'un nefesi hızlanıyor. Bir işaret fişeği gökyüzüne tırmanıyor.`,
 ch:[{t:'Bekir\'i dinle. Yaklaşmalarını bekle.',p:(st,fl)=>cl(0.55+(fl.mevzi?0.15:0)+(fl.kesif?0.15:0)),ok:'g4',no:'g4',okfx:{birlik:10},nofx:{birlik:-10},okset:{gece1:'iyi'},noset:{gece1:'kotu'}},
     {t:'Hemen ateş aç. Korkutup geri püskürt.',p:(st,fl)=>cl(0.35+(fl.mevzi?0.1:0)),ok:'g4',no:'g4',okfx:{birlik:5},nofx:{birlik:-10},okset:{gece1:'iyi'},noset:{gece1:'kotu'}}]},

g4:{c:1,art:'radio',b:(st,fl)=>`${fl.gece1==='iyi'
 ?'Düşman öncüsü pusuya düşüp geri çekildi. Bölükten kimse yaralanmadı. Kâzım sabah çayını sana ilk o uzatıyor.'
 :'Düşman kaç kişi olduğunuzu anladı. Gece boyunca havan atışı sürdü. Şükrü\'nün kazanı delindi, Rıfat kolundan yaralandı.'}

*Üçüncü gün.* Yüzbaşı Ateş bacağından yaralı; Rıfat sargısını değiştirirken dişlerini sıkıyor. Yakup telsizden başını kaldırıyor:

— Karargâh çekilme emri verdi efendim. Hemen.

Ama köyün yarısı hâlâ yayla yolunda. Gece yağan kar yolu kapatmış; yaşlılar ve hastalar ancak yürüyerek, yavaş yavaş ilerleyebiliyor. Bir gün, belki iki gün daha lazım.

Yüzbaşı herkesi topluyor. Sesi zayıf ama kararlı:

— Emir açık. Ama ben bu köyü bırakmak istemiyorum. Kalırsak çoğumuz dönmeyecek. Fikrinizi soruyorum. Önce sen çaylak. Bu bölükte en genç olan ilk konuşur.

Kâzım sana bakıyor. Ne düşündüğünü biliyorsun.`,
 ch:[{t:'"Kalalım komutanım. Köy geçene kadar."',fx:{birlik:15},set:{kal:1},go:'g5'},
     {t:'"Emir emirdir komutanım. Çekilelim."',fx:{birlik:-15},set:{geri:1},go:'g4b'},
     {t:'"Gönüllüler kalsın, diğerleri çekilsin."',fx:{birlik:5},set:{kal:1,gonullu:1},go:'g5'}]},

g4b:{c:1,art:'village',b:`Yüzbaşı başını eğiyor. Çekilme başlıyor.

Yarım gün sonra, aşağı vadideyken, karların içinden biri koşarak geliyor. Gülsüm. Ayakları çıplak, yüzü ağlamaktan şişmiş.

— Geliyorlar! Dedemler daha yolda!

Kâzım tüfeğini omzuna asıp geri dönüyor; arkasına bakmıyor bile. Yüzbaşı bir an duruyor, sonra bağırıyor:

— Bölük! Geri dönüyoruz!

Geçide ulaştığınızda düşman köyün girişindeki ilk evlere varmış. Onları geri püskürtüyorsunuz ama yarım gün kaybedildi. Yayla yolundaki son kafileden on dört kişi geri dönemedi.

O on dört ismi yıllar sonra bile, her gece, tek tek sayacaksın.`,
 ch:[{t:'Devam et.',fx:{vicdan:-15},go:'g5'}]},

g5:{c:1,art:'home',b:(st,fl)=>`Zeynep'in sesi seni bugüne çağırıyor:

— Kâzım Amca? İyi misiniz?

Bir an onun kim olduğunu bilmiyorsun. Saçları, gözlerinin şekli…

— Nazlı? diyorsun. Bayram harçlığını getirdim…

Zeynep donup kalıyor. Gözleri doluyor. Sonra uzanıp elini tutuyor.

— Ben Zeynep, diyor yavaşça. Ama Nazlı… benim de çok sevdiğim bir isim.

${fl.geri?'Bir süre konuşmuyorsun. O yarım günü kimseye anlatmadın. Kitaplarda da yazmıyor.':'Ellerin hâlâ titriyor.'}`,
 ch:[{t:'Biraz dinlen. Pencereden yağmuru izle.',fx:{hafiza:10},go:'d1'},
     {t:'Hemen devam et. Unutmadan anlatmalısın.',fx:{hafiza:-20,vicdan:5},go:'d1'}]},

/* ================= BÖLÜM 3 · DOKUZ GÜN ================= */
d1:{c:2,art:'pass',b:(st,fl)=>`*Beşinci gün.*

Erzak bitti. Şükrü son bulguru kar suyuyla kaynatıp bir çorba yapıyor. Kazandan yükselen buhar bütün bölüğü etrafına topluyor.

${fl.geri
 ?'Geri dönemeyen kafileden kurtulabilenler, yirmi kadar kişi, geçidin hemen altındaki ağılda bekliyor.'
 :'Köyün son kafilesi, yüz kadar yaşlı ve hasta, geçidin hemen altındaki ağılda bekliyor. Karla kapanan yolun açılmasını bekliyorlar.'} Çocuklar ateşin başında titriyor.

Kâzım kazanın başında durup sana bakıyor. Çorba on iki kişiye ancak yetiyor.`,
 ch:[{t:'Çorbayı ağıldakilerle paylaş.',fx:{birlik:10,vicdan:10},set:{paylas:1},go:'d2'},
     {t:'Askerler savaşacak güçte kalmalı. Çorba bölüğün.',fx:{birlik:-5,vicdan:-5},go:'d2'},
     {t:'Kendi payını Gülsüm\'e götür. Gerisine karışma.',fx:{vicdan:5,birlik:5},set:{gulsum:1},go:'d2'}]},

d2:{c:2,art:'radio',b:(st,fl)=>`${fl.paylas?'Kâzım hiçbir şey söylemeden kepçeyi senden alıp ilk tası Kerim Dede\'ye uzatıyor. O akşam bölüğün yarısı aç yatıyor; kimse şikâyet etmiyor.\n\n':fl.gulsum?'Gülsüm tası iki eliyle tutuyor ve yarısını küçük kardeşine içiriyor.\n\n':''}*Altıncı gün.* Yüzbaşı Ateş sabaha karşı sessizce öldü. Son sözleri Kâzım'aydı: "Bölük senin."

Telsiz de bozuldu. Yakup bütün gece tellerle uğraştı; nafile. Karargâh nerede olduğunuzu, yaşayıp yaşamadığınızı bilmiyor.

Kâzım haritanın başında:

— Biri aşağı inmeli. Vadideki birliğe ulaşıp yardım istemeli. Ama yol düşmanın gözünün önünde.

Herkes susuyor. Sonra kendi sesini duyuyorsun.`,
 ch:[{t:'"Ben giderim çavuşum."',p:(st,fl)=>cl(0.5+(fl.kesif?0.2:0)),ok:'d3',no:'d3',okfx:{birlik:10},nofx:{hafiza:-10,birlik:-5},okset:{haber:'kosu'},noset:{yaralandi:1}},
     {t:'"Yakup\'la telsizi bir kez daha onarmayı deneyelim."',p:()=>0.35,ok:'d3',no:'d3',okfx:{birlik:5},nofx:{birlik:-5},okset:{haber:'telsiz'},noset:{telsizYok:1}},
     {t:'"Kimse gitmesin. Ne olacaksa birlikte olsun."',fx:{birlik:10},go:'d3'}]},

d3:{c:2,art:'night',b:(st,fl)=>`${fl.haber==='kosu'
 ?'Gece karların içinden süzülüp vadiye iniyorsun. Sabaha karşı bir topçu birliğine ulaşıyorsun. "Dokuzuncu gün," diyor komutanları. "Daha erken gelemeyiz." Dönüş yolunda Kâzım seni geçidin ağzında bekliyor; sarılıp sırtına vuruyor.'
 :fl.yaralandi?'Yarı yolda bir devriyeye yakalanıyorsun. Kaçarken bir kurşun omzunu sıyırıyor. Karların içinde sürünerek geri dönüyorsun. Kâzım seni mevziye çekerken ilk kez bağırdığını duyuyorsun: "Bir daha bana sormadan bir yere gidersen…" Cümlesini bitiremiyor.'
 :fl.haber==='telsiz'?'Sabaha karşı Yakup sevinçle bağırıyor. Telsizden cızırtılı bir ses: "Dokuzuncu gün. Dayanın. Dokuzuncu gün."'
 :fl.telsizYok?'Telsiz bir daha hiç konuşmuyor. Yakup onu yine de sırtında taşıyor; "belki" diyor.'
 :'Kimse gitmiyor. O gece bölük ateşin etrafında birbirine daha da sokuluyor.'}

*Yedinci gün.* Karşı yamaçta beyaz bir bayrak. Bir düşman subayı, yanında bir tercümanla geçidin ortasına kadar yürüyor.

— Teslim olun. Kadınlara ve çocuklara dokunulmayacak. Söz.

Kâzım sana fısıldıyor:

— Son kafilenin yolu yarın açılır. Bir gün daha lazım.`,
 ch:[{t:'Kâzım\'a öner: "Pazarlığı uzatalım, zaman kazanalım."',p:(st,fl)=>cl(0.6+(fl.haber?0.1:0)),ok:'d4',no:'d4',okfx:{birlik:10},nofx:{birlik:-10},okset:{d7:'oyalama'},noset:{d7:'anladi'}},
     {t:'"Teslim olmayız. Gitsin."',fx:{birlik:5},set:{d7:'red'},go:'d4'},
     {t:'"Sözlerine güvenip kafileyi onlara mı teslim etsek?" diye sor.',fx:{birlik:-15,vicdan:-10},set:{d7:'teklif'},go:'d4'}]},

d4:{c:2,art:'home',b:(st,fl)=>`${{
 oyalama:'Kâzım düşman subayıyla yarım gün çay içip pazarlık ediyor; her teklife bir soru, her soruya bir hikâye. Akşam olduğunda son kafile yayla yoluna çıkmış.',
 anladi:'Pazarlık bir saat sürüyor. Sonra düşman subayı oyalandığını anlıyor. Öğleden sonra en sert saldırı geliyor. Şükrü o gün düşüyor; kazanı hâlâ ateşin başında.',
 red:'Subay omuz silkip geri dönüyor. O gece saldırı geliyor. Şükrü düşüyor; kazanı hâlâ ateşin başında.',
 teklif:'Kâzım sana öyle bir bakıyor ki o bakışı yetmiş yıl unutmuyorsun. — Kurt sürüsünü bırakmaz çaylak, diyor sadece. Subayı geri gönderiyor. O gece saldırı geliyor. Şükrü düşüyor.'
}[fl.d7]}

Zeynep kayıt cihazını kapatıyor. Telefonunu çıkarıyor.

— Size bir şey dinletmek istiyorum. Çok eski bir kaset kaydıydı, dijitale aktardım.

Hoparlörden yaşlı bir kadının sesi geliyor: "…abim her bayram gelirdi. Elinde şeker, cebinde harçlık. Annem gözleri görmezken bile onun ayak sesini tanırdı…"

Sesi tanıyorsun. Hiç duymadığın kadar yaşlı ama tanıyorsun.

— Nazlı, diyorsun.`,
 ch:[{t:'Ağla. Yetmiş yıldır tuttuğun gözyaşlarını bırak.',fx:{vicdan:15,hafiza:-10},go:'s1'},
     {t:'Kendini topla. "Devam edelim," de.',fx:{hafiza:5,vicdan:-5},go:'s1'}]},

/* ================= BÖLÜM 4 · SON GECE ================= */
s1:{c:3,art:'cornice',b:(st,fl)=>`*Dokuzuncu gece.*

Bölükten yedi kişi kaldınız. ${fl.yaralandi?'Omzun sargılı; tüfeği tek elle tutuyorsun. ':''}Ağıldaki son köylüler, Kerim Dede ve Gülsüm de aralarında, yayla yoluna çıktı. Sabaha kadar geçidi tutarsanız kurtulacaklar.

Ama düşman bu kez bütün gücüyle geliyor. Karşı yamaç fenerlerle dolu.

Kâzım sizi toplayıp son patlayıcıları gösteriyor:

— Geçidin üstündeki kar saçağı. Patlatırsak çığ yolu kapatır; haftalarca kimse geçemez. Ama fitil kısa. Patlatan kaçamayabilir.

Bir sessizlik.

— Ben kalırım, diyor Kâzım. Siz köylülerin arkasından yaylaya çekilin.`,
 ch:[{t:'"Ben kalırım çavuşum. Benim kimsem yok."',fx:{birlik:10,hafiza:-5},set:{son:'ben'},go:'s2'},
     {t:'"Birlikte kalalım. Biri fitili yakar, diğeri onu çeker."',fx:{birlik:15,hafiza:-5},set:{son:'birlikte'},go:'s2'},
     {t:'Emre uy. Diğerleriyle çekil.',fx:{vicdan:-10,hafiza:-5},set:{son:'cekil'},go:'s2'}]},

s2:{c:3,art:'fall',b:(st,fl)=>`${{
 ben:'Kâzım gülüyor. Yetmiş yıl sonra bile o gülüşü duyabiliyorsun. — Senin kimsen yok mu? diyor. Ben ne güne duruyorum? Sonra seni yakandan tutup geri itiyor. Sen yerinden doğrulana kadar fitili yakmış bile.',
 birlikte:'Fitili birlikte yakıyorsunuz. Koşuyorsunuz. Arkanızda dağ inliyor.',
 cekil:'Yüz metre gidiyorsun. Sonra duruyorsun. Geri dönüyorsun. Kâzım\'ı fitilin başında buluyorsun. Seni görünce söyleniyor, sonra gülüyor. — İnatçı keçi, diyor. Gülsüm\'ün keçisi gibi.'
}[fl.son]}

Patlama. Ardından bir uğultu; sanki dağın kendisi kayıyor. Kar saçağı geçidin üstüne çöküyor.

Sonra sessizlik.

Seni karın içinden çıkaran Kâzım oluyor. Ama kendisi kalkamıyor. Göğsüne bir kaya parçası saplanmış. Karın üstünde koyu bir leke büyüyor.`,
 ch:[{t:'Yanına diz çök.',fx:{hafiza:-5},go:'s3'}]},

s3:{c:3,art:'night',b:`Kâzım'ın nefesi kısa kısa. Elini tutuyorsun.

— Dinle çaylak, diyor. Vakit yok.

Boynundaki künyeyi çıkarıp avucuna bastırıyor. Sonra seninkini çekip koparıyor.

— Annem iki oğlunu toprağa verdi. Üçüncüsünü verirse yaşamaz. Sen eve dön. Benim yerime. Nazlı'ya bayram harçlığını sen ver.

— Çavuşum, ben…

— Bu bir emir, diyor. Son emir.

Göğüs cebinden yarım kalmış bir mektup çıkarıyor.

— Anneme, diyor. Sen bitir.`,
 ch:[{t:'Künyeyi ve mektubu al. "Söz veriyorum çavuşum."',fx:{birlik:10},set:{soz:1},go:'s4'},
     {t:'"Yapamam çavuşum. Bu yalan olur."',fx:{vicdan:5},set:{reddettim:1},go:'s4'}]},

s4:{c:3,art:'hospital',b:(st,fl)=>`${fl.reddettim
 ?`Kâzım cevap vermiyor. Elin elinde, gözleri açık, gökyüzüne bakıyor. Sonra her şey kararıyor.

Uyandığında bir sahra hastanesindesin. Hemşire gülümseyerek seni selamlıyor: "Hoş geldin Kâzım Çavuş." Künye boynunda. Sen bayılmışken takmış olmalı. Mektup da cebinde.`
 :`Kâzım son nefesini elin elindeyken veriyor. Gözleri açık, gökyüzüne bakıyor.

Uyandığında bir sahra hastanesindesin. Hemşire gülümseyerek seni selamlıyor: "Hoş geldin Kâzım Çavuş."`}

Kayıtlara göre Er Hasan Çelik dokuzuncu gece şehit düştü. Çavuş Kâzım Yıldırım ise Efsane Birlik'in hayatta kalan tek askeri.

Bir ay sonra bir köy evinin kapısındasın. Hatice Ana'nın gözleri görmüyor. Sesini duyunca elleriyle yüzünü arıyor. Parmakları alnında, burnunda, dudaklarında geziniyor. Uzun, çok uzun bir süre.

Arkasında sekiz yaşında bir kız duruyor. Nazlı. Sana bakıyor. Önce bir şey anlıyor, sonra bir şeye karar veriyor.

— Abi, diyor. Hoş geldin.`,
 ch:[{t:'Hatice Ana\'nın kulağına gerçeği fısılda.',fx:{vicdan:15},set:{anneBildi:1},go:'r1'},
     {t:'Sus. Onun oğlu ol.',fx:{vicdan:-5},go:'r1'}]},

/* ================= BÖLÜM 5 · GERÇEK ================= */
r1:{c:4,art:'home',b:(st,fl)=>`${fl.anneBildi
 ?'Hatice Ana fısıltını dinliyor. Sonra başını göğsüne bastırıyor. "Biliyorum yavrum," diyor. "Kâzım\'ın ayak sesi böyle değildi. Ama sen de artık benim oğlumsun."'
 :'Hatice Ana seni bağrına basıyor. Hiçbir şey sormuyor. Yirmi bir yıl boyunca, ölene kadar, her sabah senin için dua ediyor.'}

Yetmiş yıl. Hatice Ana'nın cenazesini sen kaldırdın. Nazlı'yı sen evlendirdin; düğününde onun elini sen tuttun. Her bayram harçlık… Kartal Geçidi'ndeki o mezara, üstünde "Er Hasan Çelik" yazan taşa, her yıl tek başına gittin.

Huzurevinin odasında Zeynep karşında oturuyor. Kayıt cihazı masada. Kırmızı ışık yanıyor.

— Son bir soru, diyor. Sesi titriyor.

— Siz kimsiniz?`,
 ch:[{t:'"Ben Hasan Çelik\'im. Kâzım Yıldırım dokuzuncu gece öldü. Beni kurtarırken."',set:{secim:'gercek'},fx:{vicdan:20},go:route},
     {t:'"Ben Kâzım Yıldırım\'ım kızım. Kitaplarda ne yazıyorsa o."',set:{secim:'efsane'},go:route},
     {t:'Cevap verme. Çekmeceden künyeyi ve yarım mektubu çıkarıp ona uzat.',set:{secim:'emanet'},fx:{vicdan:10},go:route}]},

/* ================= SONLAR ================= */
end_gercek:{c:4,art:'monument',end:{k:'gercek',ti:'İki isim',medal:'Efsane Birlik Madalyası',tone:'good'},b:(st,fl)=>`Zeynep kayıt cihazını kapatmıyor. Ağlıyor ama gülümsüyor.

— Biliyordum, diyor. Anneannem söyledi. Nazlı Yıldırım. Geçen bahar öldü. Son günlerinde elimi tuttu ve dedi ki: "Çamlık Huzurevi'ne git. Hasan abine teşekkür et. Bana ve anneme bir ömür abilik etti. Kâzım abim de bunu isterdi."

Sen hiç bilmediğini sanıyordun. Nazlı yetmiş yıl boyunca bildi ve hiç söylemedi.

Altı ay sonra Kartal Geçidi'nde küçük bir tören yapılıyor. Yetmiş yıldır "Er Hasan Çelik" yazan mezar taşına sonunda doğru isim kazınıyor: *Çavuş Kâzım Yıldırım.* Anıtın mermerine ise iki isim yan yana yazılıyor. İkisinin de altında aynı satır: *Kurt Bölüğü.*

Tekerlekli sandalyende, Zeynep'in yanında oturuyorsun. Rüzgâr geçitten aşağı esiyor. Bir an, çok uzaklardan, birinin gülüşünü duyar gibi oluyorsun.

— Çaylak, diyor rüzgâr. Eve döndün mü?

Döndün çavuşum. Tam istediğin gibi.`,ch:[]},

end_efsane:{c:4,art:'photo',end:{k:'efsane',ti:'Efsane',medal:'Efsane Birlik Madalyası',tone:'mid'},b:(st,fl)=>`Zeynep uzun süre sana bakıyor. Sonra kayıt cihazını kapatıyor.

— Anneannem de öyle derdi, diyor yavaşça. "Kâzım abim." Hep öyle derdi. Nazlı Yıldırım. Geçen bahar öldü.

Ayağa kalkıyor; kapıda bir an duruyor.

— Son günlerinde size teşekkür etmemi istedi. Neden diye sormadım. Sanırım artık biliyorum.

Kitaplar değişmiyor. Okul törenlerinde öğretmenler hâlâ "son yaşayan kahraman Kâzım Yıldırım"ı anlatıyor. Fotoğrafın altına bir isim yazılıyor; ortadaki gülen çavuşun altına.

Bir kış sabahı Sevim seni pencerenin önünde, elinde bir künyeyle, uyurken buluyor. Künyede bir isim yazıyor ama kimse dikkatle okumuyor.

Efsaneler bazen bir yalanı değil, bir sözü korur.`,ch:[]},

end_emanet:{c:4,art:'home',end:{k:'emanet',ti:'Emanet',medal:'Efsane Birlik Madalyası',tone:'good'},b:(st,fl)=>`Hiçbir şey söylemiyorsun. Çekmeceyi açıyorsun. Mendildeki madalyanın altında yetmiş yıllık bir künye ve sararmış, yarım bir mektup duruyor.

Zeynep künyeyi çeviriyor. Üstünde *K. Yıldırım* yazıyor. Mektubun ilk satırı: "Anacığım, bu bayram yetişemezsem…" Mektup yarım; altına başka bir el, yıllar içinde, başka satırlar eklemiş. Her bayram bir satır.

Zeynep okudukça anlıyor. Sonra sana bakıyor.

— Anneannem Nazlı, diyor fısıltıyla. Bunu biliyordu. Hep biliyordu. Size teşekkür etmemi istedi.

Künyeyi avucunda sıkıyor.

— Ne yapmamı istersiniz?

— Sen karar ver kızım, diyorsun. Artık o senin emanetin.

Bir yıl sonra Zeynep'in kitabı yayımlanıyor: *Kartal Geçidi: İki Asker, Bir İsim.* İlk sayfada tek satırlık bir ithaf var: *Sözünü tutan herkese.*`,ch:[]},

end_bedel:{c:4,art:'village',end:{k:'bedel',ti:'Yarım gün',tone:'bad'},b:(st,fl)=>`${fl.secim==='gercek'
 ?'— Ben Hasan Çelik\'im, diyorsun. Sonra devam ediyorsun, çünkü bu gece her şeyi söylemeye karar verdin. Üçüncü gün "Çekilelim" dediğini. Kaybedilen yarım günü. Yayla yolunda geri dönemeyen on dört kişiyi.'
 :fl.secim==='emanet'?'Künyeyi ve mektubu Zeynep\'e uzatıyorsun. Sonra bir kâğıt daha: yetmiş yıldır sakladığın bir liste. On dört isim.'
 :'— Ben Kâzım Yıldırım\'ım, diyorsun. Ama sesin titriyor. Kitaplardaki "dokuz gün" efsanesinin içinde kimsenin bilmediği yarım bir gün var.'}

Zeynep sessizce dinliyor. Sonunda kayıt cihazını kapatıyor.

— Anneannem Nazlı, diyor. Size teşekkür etmemi istedi. Bir ömür abilik ettiğiniz için.

Teşekkür. Yetmiş yıldır o on dört ismi her gece sayan bir adama teşekkür.

Kitaplar yine "dokuz gün" diyor. Ama sen o yarım günü hiç unutmadın: Gülsüm'ün çıplak ayaklarıyla karların içinden koştuğu o öğleden sonrayı. Kâzım'ın arkasına bakmadan geri dönüşünü.

Bir kahramanlık hikâyesi bazen bir pişmanlığın üstüne kurulur.

Hikâye burada bitmek zorunda değildi. Üçüncü gün başka bir şey söyleyebilir miydin?`,ch:[]},

end_sis:{c:4,art:'home',end:{k:'sis',ti:'Sis',tone:'bad'},b:`Zeynep bir şey soruyor ama kelimeler birbirine karışıyor. Karşındaki kızın yüzü bir Nazlı, bir Gülsüm, bir hiç kimse oluyor.

— Çavuşum? diyorsun boş odaya. Fitil… fitil kısa…

Sevim içeri girip seni yatırıyor. Zeynep kayıt cihazını sessizce topluyor. Kapıda duruyor, bir süre sana bakıyor.

Ertesi hafta yine geliyor. Ondan sonraki hafta da. Ama hikâye bir daha hiç toparlanmıyor.

Bazı sırlar bir sözle değil, bir sisle korunur.

Hikâye burada bitmek zorunda değildi. Anlatırken kendine dinlenme payı bırakabilir miydin?`,ch:[]}
};

registerTale({id:'efsane',ti:'Efsane Birlik',genre:'Dram · Savaş',color:'#7fb35a',cover:'cover',
 sub:'Bir huzurevi odasında, yetmiş yıllık bir sır',
 pitch:'Doksan bir yaşındaki bir gazi, ziyaretine gelen genç bir tarih öğrencisine efsaneleşmiş birliğini anlatır: bir köyü kurtarmak için dokuz gün boyunca bir dağ geçidini tutan on iki asker. Ama anlattıkça bazı şeyler birbirini tutmuyor. Yetmiş yıldır saklanan bir söz, bir künye ve bir isim.',
 chapters:[{ti:'Ziyaretçi',sub:'Huzurevi ve ilk hatıralar'},{ti:'Geçit',sub:'Kartal Geçidi ve Akpınar köyü'},{ti:'Dokuz Gün',sub:'Açlık, soğuk ve beyaz bayrak'},{ti:'Son Gece',sub:'Kar saçağı ve künye'},{ti:'Gerçek',sub:'Son soru'}],
 stats:{hafiza:60,birlik:60,vicdan:50},statDefs:[['hafiza','Hafıza','var(--blue)'],['birlik','Birlik ruhu','var(--green)'],['vicdan','Vicdan','var(--acc)']],
 fail:(st,fl,c)=>c>=1&&st.hafiza<=0?'end_sis':null,
 start:'z1',arts:ARTS,scenes:S});
})();
