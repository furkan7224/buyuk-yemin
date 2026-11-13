/* =====================================================================
   HİKÂYE · ESİR
   Karakterler: Sen (Çavuş) · Onbaşı Selim Kara (34, kızı Elif) · Er Mert Aydın (20)
   Binbaşı Rehn (sorgucu) · Tobas (yaşlı gardiyan). Düşman: kurgusal Vaskar Cumhuriyeti.
   ===================================================================== */
(function(){
/* ---- sahne çizimleri ---- */
function sc(o){const W=360,H=150;const sky=o.sky||['#05070d','#121a2e'];let g=`<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;border-radius:12px" aria-hidden="true"><defs><linearGradient id="es${o.k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#es${o.k})"/>`;
 if(o.stars){let s=7;for(let i=0;i<34;i++){s=(s*9301+49297)%233280;const x=s%W;s=(s*9301+49297)%233280;const y=s%90;g+=`<circle cx="${x}" cy="${y}" r="${i%5?0.7:1.2}" fill="#fff" opacity="${0.35+(i%4)*0.15}"/>`}}
 if(o.moon)g+=`<circle cx="${o.moon[0]}" cy="${o.moon[1]}" r="13" fill="#efe8cf"/><circle cx="${o.moon[0]+5}" cy="${o.moon[1]-3}" r="12" fill="${sky[0]}" opacity=".18"/>`;
 if(o.sun)g+=`<circle cx="${o.sun[0]}" cy="${o.sun[1]}" r="26" fill="#ffcf7a" opacity=".9"/><circle cx="${o.sun[0]}" cy="${o.sun[1]}" r="46" fill="#ffb84a" opacity=".18"/>`;
 if(o.flare)g+=`<circle cx="230" cy="26" r="7" fill="#fff6d6"/><circle cx="230" cy="26" r="60" fill="#fff6d6" opacity=".16"/><path d="M230 33 Q226 70 231 120" stroke="#fff6d6" stroke-width="1" opacity=".4" fill="none"/>`;
 if(o.hills)g+=`<path d="M0 ${H} L0 98 Q40 78 80 92 T170 84 T260 96 T360 80 L360 ${H}Z" fill="${o.hills}"/>`;
 if(o.ridge)g+=`<path d="M0 ${H} L0 118 L60 96 L95 108 L150 70 L190 92 L240 64 L300 100 L360 86 L360 ${H}Z" fill="${o.ridge}"/>`;
 if(o.rocks)g+=`<path d="M20 150 L34 122 L58 118 L70 150Z M250 150 L262 126 L290 121 L304 150Z" fill="#0b0d0a"/>`;
 if(o.men)o.men.forEach(([x,y,s=1])=>{g+=`<g transform="translate(${x} ${y}) scale(${s})" fill="#050605"><circle cx="0" cy="-26" r="4.4"/><path d="M-5 -21 L5 -21 L7 -4 L4 12 L1 12 L0 0 L-1 12 L-4 12 L-7 -4Z"/><path d="M5 -18 L16 -24 L17 -22 L6 -14Z"/></g>`});
 if(o.wire){g+=`<g stroke="#8b8f86" stroke-width="1" fill="none" opacity=".85">`;for(let x=10;x<W;x+=58)g+=`<line x1="${x}" y1="70" x2="${x}" y2="${H}" stroke-width="2.4" stroke="#2a2c27"/>`;for(let y=78;y<140;y+=14){g+=`<path d="M0 ${y} `;for(let x=0;x<=W;x+=12)g+=`L${x} ${y+((x/12)%2?3:-3)} `;g+=`"/>`}g+=`</g>`}
 if(o.tower)g+=`<g fill="#0a0b09"><rect x="292" y="34" width="34" height="14"/><path d="M296 48 L300 132 L304 132 L307 48Z M318 48 L321 132 L325 132 L322 48Z"/><path d="M288 34 L330 34 L309 22Z"/></g><path d="M300 42 L120 150 L230 150Z" fill="#fff8d8" opacity=".1"/>`;
 if(o.trees){for(let i=0;i<14;i++){const x=i*27+((i*37)%11),h=58+((i*53)%36);g+=`<path d="M${x} 150 L${x+12} ${150-h} L${x+24} 150Z" fill="${i%2?'#070a07':'#0c110c'}"/>`}}
 if(o.bars){g+=`<rect width="${W}" height="${H}" fill="#14140f"/><rect x="128" y="18" width="104" height="58" fill="${sky[1]}"/><circle cx="210" cy="36" r="5" fill="#efe8cf" opacity=".8"/>`;for(let x=140;x<232;x+=16)g+=`<rect x="${x}" y="18" width="4" height="58" fill="#2b2a24"/>`;g+=`<path d="M128 76 L60 150 L300 150 L232 76Z" fill="#cfd6ff" opacity=".05"/>`}
 if(o.lamp)g+=`<rect width="${W}" height="${H}" fill="#0c0b08"/><path d="M180 30 L90 150 L270 150Z" fill="#ffd98a" opacity=".13"/><path d="M164 20 L196 20 L190 32 L170 32Z" fill="#3a352a"/><rect x="70" y="112" width="220" height="10" fill="#2a2418"/><rect x="160" y="100" width="16" height="12" rx="2" fill="#c9a64a" opacity=".7"/><rect x="190" y="104" width="34" height="8" fill="#e8e0c8" opacity=".6"/>`;
 if(o.truck)g+=`<g fill="#060706"><rect x="96" y="96" width="120" height="30"/><rect x="216" y="104" width="40" height="22"/><rect x="226" y="108" width="16" height="10" fill="#1d2433"/><circle cx="122" cy="128" r="10"/><circle cx="236" cy="128" r="10"/></g><path d="M256 112 L360 92 L360 136Z" fill="#fff6d6" opacity=".08"/>`;
 if(o.mines){for(let i=0;i<9;i++){const x=24+i*38,y=112+(i%3)*12;g+=`<circle cx="${x}" cy="${y}" r="3.5" fill="#3b3a32"/>`}g+=`<g transform="translate(70 92)"><rect x="-1.5" y="0" width="3" height="40" fill="#3a3326"/><rect x="-14" y="-2" width="28" height="18" fill="#7a2a1e"/><circle cx="0" cy="7" r="4" fill="#e9dfc5"/></g>`}
 if(o.flag)g+=`<g transform="translate(300 52)"><rect x="0" y="0" width="2" height="34" fill="#20231d"/><path d="M2 2 Q12 -1 22 3 T40 4 L40 18 Q30 14 22 18 T2 16Z" fill="#c8302a"/><circle cx="18" cy="10" r="3.4" fill="#fff"/><circle cx="19.4" cy="10" r="2.8" fill="#c8302a"/></g>`;
 if(o.rain){for(let i=0;i<60;i++){const x=(i*61)%W,y=(i*37)%H;g+=`<line x1="${x}" y1="${y}" x2="${x-4}" y2="${y+12}" stroke="#9fb3c8" stroke-width=".7" opacity=".35"/>`}}
 if(o.fog)g+=`<rect y="96" width="${W}" height="54" fill="#cfd8d0" opacity=".08"/>`;
 return g+'</svg>'}
const ARTS={
 cover:()=>sc({k:'cv',sky:['#0b0d12','#2a1d18'],stars:1,moon:[300,28],wire:1,tower:1,men:[[150,138,1.1]]}),
 night:()=>sc({k:'n',stars:1,moon:[290,30],ridge:'#0a0d0a',men:[[110,118,.8],[134,120,.8],[156,122,.8]]}),
 flare:()=>sc({k:'f',sky:['#1b2232','#2a3140'],flare:1,rocks:1,ridge:'#0a0c0a',men:[[150,136,.9],[180,140,.9]]}),
 truck:()=>sc({k:'t',sky:['#020304','#0b0e14'],stars:1,hills:'#060806',truck:1}),
 camp:()=>sc({k:'c',sky:['#05070b','#161c28'],stars:1,wire:1,tower:1}),
 cell:()=>sc({k:'h',sky:['#0a0e18','#1d2840'],bars:1}),
 interro:()=>sc({k:'i',lamp:1,men:[[132,112,1],[236,112,1]]}),
 yard:()=>sc({k:'y',sky:['#5f6b74','#9aa3a3'],hills:'#4b5048',wire:1,tower:1,men:[[90,140,.9],[118,140,.9],[146,140,.9]]}),
 fence:()=>sc({k:'w',sky:['#030407','#0d121c'],wire:1,tower:1,rain:0}),
 rain:()=>sc({k:'r',sky:['#06080c','#141a22'],wire:1,tower:1,rain:1}),
 forest:()=>sc({k:'o',sky:['#020302','#0a110c'],stars:1,trees:1,fog:1}),
 dawn:()=>sc({k:'d',sky:['#2b3b5a','#e0905a'],sun:[300,118],ridge:'#14140f',rocks:1}),
 mines:()=>sc({k:'m',sky:['#8aa0b0','#d9c7a0'],hills:'#6b6044',mines:1,flag:1}),
 home:()=>sc({k:'e',sky:['#7aa0c8','#f2d9a8'],sun:[60,40],hills:'#3e4a32',flag:1,men:[[150,136,1],[176,138,1]]})
};

/* ---- yardımcılar ---- */
const selimAlive=(st,fl)=>!!fl.carry&&fl.selimDead!==1;
const route=(st,fl)=>{if(fl.carry&&fl.selimHit&&!fl.selimFed&&!fl.rested)fl.selimDead=1;
 const m=fl.mert!=='dead',s=selimAlive(st,fl);return m&&s?'end_kahraman':(m||s)?'end_aci':'end_yalniz'};
const gaveLine=fl=>fl.gave?`\n\nSorgu odasında verdiğin o küçük bilgiyi tabur komutanına kendin anlatıyorsun. Uzun süre susuyor, sonra omzuna dokunuyor:\n\n— Herkesin bir sınırı var Çavuş. Sen o sınırda bile arkadaşını seçmişsin.`:'';

const S={
/* ================= BÖLÜM 1 · PUSU ================= */
p1:{c:0,art:'night',b:`Saat 02.40. Kartal Sırtı'nın eteklerindesin; sınır hattına yalnızca birkaç yüz metre var.

Tabur komutanı akşamki brifingde kısa kesmişti: "Karşı tarafta hareketlilik var. Yaklaşın, görün, sayın, dönün. Çatışmaya girmek yok."

Yanında iki kişi var. Onbaşı Selim Kara on iki yıllık asker; az konuşur, konuştuğunda da genellikle şaka yapar. Er Mert Aydın ise yirmi yaşında ve bu onun ilk gece keşfi. Karanlıkta nefesini tutmaya çalıştığını duyabiliyorsun.

Önünde iki yol var. Gri Dere'nin yatağı gizli ama yavaş. Sırt yolu hızlı ama ay ışığında açıkta kalıyor.`,
 ch:[{t:'Dere yatağından ilerle. Yavaş ama görünmez.',set:{path:'dere'},go:'p2'},
     {t:'Sırt yolunu kullan. Zaman kazanmak önemli.',set:{path:'sirt'},go:'p2'},
     {t:'Yola çıkmadan önce Mert\'in yanına git.',fx:{bag:10,moral:5},go:'p1b'}]},
p1b:{c:0,art:'night',b:`Mert'in omzuna dokunuyorsun. Titrediğini hissediyorsun.

— İlk gecede herkes korkar, diyorsun alçak sesle. Korkmayan ya yalan söyler ya da henüz anlamamıştır.

— O zaman ben yalan söylemiyorum Çavuşum, diye fısıldıyor Mert. Sesi biraz olsun düzeliyor.

Selim karanlıkta sırıtıyor:

— Ben de anlamadım hâlâ, on iki yıldır. Hadi, kahvaltıya yetişelim.`,
 ch:[{t:'Dere yatağından ilerle. Yavaş ama görünmez.',set:{path:'dere'},go:'p2'},
     {t:'Sırt yolunu kullan. Zaman kazanmak önemli.',set:{path:'sirt'},go:'p2'}]},
p2:{c:0,art:'flare',b:(st,fl)=>(fl.path==='dere'
 ?`Dere yatağında, ıslak taşların üzerinde yarım saat ilerliyorsunuz. Tam sırta bakan düzlüğe çıkarken gökyüzü bir anda beyaza kesiyor: işaret fişeği.`
 :`Sırt yolunda hızla ilerliyorsunuz ama ay tam tepenizde. Kayalıkların arasında bir metal parıltısı görüyorsun. Geç kaldın. Gökyüzü bir anda beyaza kesiyor: işaret fişeği.`)+`

Ardından makineli tüfek sesi. Kayalara siper alıyorsunuz. Selim'in boğuk bir çığlık attığını duyuyorsun; bacağından vurulmuş.

Mert telsizin başında donup kalmış. Ateş üç yönden geliyor. Pusuya düştünüz.`,
 ch:[{t:'Telsizden karargâha pusu haberini ve koordinatı geç.',fx:{bag:-5},set:{msg:1},go:'p3a'},
     {t:'Selim\'i kayalıkların arkasına sürükle.',fx:{bag:15,saglik:-10},go:'p3b'},
     {t:'Karşılık ateşi aç, Mert\'e siper ol.',p:.55,ok:'p3c',no:'p3c',okfx:{moral:5},nofx:{saglik:-20},okset:{cover:'ok'},noset:{cover:'hit'}}]},
p3a:{c:0,art:'flare',b:`Mert'in elinden telsizi alıyorsun.

— Kartal Bir, Kartal Bir, burası Gece Kuşu! Pusu! Pafta kırk bir, seksen yedi. Üç yönden ateş, bir yaralı!

Cızırtı. Sonra kesik kesik bir ses: "…anlaşıldı… dayanın…"

Mesaj gitti. Ama o birkaç saniyede Selim kayaların arasında yalnız kaldı ve ateş çemberi daralıyor.`,
 ch:[{t:'Devam et.',go:'p4'}]},
p3b:{c:0,art:'flare',b:`Selim'i kemerinden yakalayıp kayalıkların arkasına sürüklüyorsun. Bir mermi kulağının dibinden geçiyor, taş parçaları yüzünü kesiyor.

— Bırak beni Çavuşum, diye inliyor Selim. Telsize bak!

— Kes sesini, diyorsun. Kimse kimseyi bırakmıyor.

Selim artık siperde. Ama telsiz Mert'in elinde ve Mert açıkta kaldı.`,
 ch:[{t:'Devam et.',go:'p4'}]},
p3c:{c:0,art:'flare',b:(st,fl)=>fl.cover==='ok'
 ?`Tüfeğini omzuna alıp namlu alevlerine doğru kısa atışlar yapıyorsun. Karşıdaki silahlardan biri susuyor.

Mert bu arada Selim'i siperin arkasına çekiyor. Çocuk, korkusuna rağmen doğru olanı yaptı.`
 :`Tüfeğini omzuna alıp namlu alevlerine doğru ateş ediyorsun. Sol omzuna bir şey çarpıyor; sanki bir balyoz. Sıcak bir ıslaklık koluna yayılıyor.

Yine de ateşi kesmiyorsun. Mert bu arada Selim'i siperin arkasına çekiyor.`,
 ch:[{t:'Devam et.',go:'p4'}]},
p4:{c:0,art:'flare',b:`Ateş kesiliyor. Bu iyiye işaret değil.

Karanlıkta, kayalıkların çevresinde ayak sesleri. Sonra yabancı aksanlı bir Türkçe:

— Çavuş! Etrafınız sarıldı. Teslim olun, yaralınız yaşasın. Direnirseniz hepiniz ölürsünüz.

Şarjörünü yokluyorsun: son birkaç mermi. Mert sana bakıyor. Selim'in yüzü kireç gibi.`,
 ch:[{t:'Teslim ol. Arkadaşlarını yaşatmak her şeyden önemli.',fx:{bag:10,moral:-5},go:'p5'},
     {t:'Mert\'e şifre defterini yaktır, sonra teslim ol.',fx:{moral:5},set:{burn:1},go:'p5'},
     {t:'Son mermiye kadar direnmeye çalış.',fx:{saglik:-20,bag:-10,moral:5},set:{fought:1},go:'p5'}]},
p5:{c:0,art:'truck',b:(st,fl)=>`Ellerin plastik kelepçeyle arkadan bağlanıyor, başına kaba bir çuval geçiriliyor. Bir kamyonetin kasasına atılıyorsunuz. Selim'in iniltisini, Mert'in hızlı nefesini duyuyorsun.${fl.fought?`

Kafana yediğin dipçik darbesi hâlâ zonkluyor. Kulaklarında bir çınlama var.`:''}${fl.burn?`

Teslim olmadan önce Mert'in şifre defterini çakmakla tutuşturduğunu gördün. En azından o sayfalar onların eline geçmeyecek.`:''}

Araç sarsılarak yola çıkıyor.`,
 ch:[{t:'Mert\'e fısılda: "Sakin ol. Birlikte çıkacağız."',fx:{bag:10,moral:5},go:'p6'},
     {t:'Sessizce dönüşleri ve sesleri say. Yolu aklında tut.',set:{route:1},go:'p6'},
     {t:'Hiçbir şey yapma, gücünü topla.',fx:{saglik:5},go:'p6'}]},
p6:{c:0,art:'camp',b:(st,fl)=>(fl.route?`Sol. Sol. Uzun, düz bir yol. Tekerleklerin altında tahta bir köprünün tok sesi; metal değil, tahta. Sonra sağa sert bir dönüş. Kırk dakika. Bunu unutmamalısın.

`:'')+`Araç duruyor. Köpek havlamaları, demir bir kapının gıcırtısı, anlamadığın bir dilde bağrışmalar.

Çuval başından çekildiğinde yüksek tel örgüleri, gözetleme kulelerini ve projektörleri görüyorsun. Bir esir kampı.

Temiz üniformalı bir subay yaklaşıyor ve gülümsüyor:

— Hoş geldiniz Çavuş. Ben Binbaşı Rehn. Sizinle çok konuşacağız.`,
 ch:[{t:'Hücreye götürülmeyi bekle.',go:'h1'}]},

/* ================= BÖLÜM 2 · HÜCRE ================= */
h1:{c:1,art:'cell',b:`Beton bir hücre. Üç adım boyunda, iki adım eninde. Yüksekte, parmaklıklı küçük bir pencere. Köşede bir kova.

Selim'in bacağındaki sargı kana bulanmış, ateşi yükseliyor. Mert duvara yaslanmış, dizlerini kucaklamış.

Kapının önünde yaşlı bir gardiyan nöbet tutuyor. Diğerleri gibi bağırmıyor; arada bir parmaklıklardan içeri bakıyor.`,
 ch:[{t:'Gömleğini yırtıp Selim\'in yarasını yeniden sar.',fx:{saglik:-5,bag:10},set:{band:1},go:'h2'},
     {t:'Yaşlı gardiyandan su ve temiz bez iste.',fx:{bag:5},set:{tobas:1,band:1},go:'h1b'},
     {t:'Selim\'e dayanmasını söyle, gücünü sakla.',fx:{bag:-10,saglik:5},go:'h2'}]},
h1b:{c:1,art:'cell',b:`— Su, diyorsun gardiyana. Yaralımız var. Lütfen.

Adam bir süre yüzüne bakıyor. Sonra tek kelime etmeden uzaklaşıyor. On dakika sonra geri geldiğinde elinde bir şişe su ve katlanmış, temiz bir bez var. Parmaklıkların arasından uzatıyor.

— Tobas, diyor göğsüne vurarak. Adı bu olmalı.

— Teşekkürler Tobas.

Adam başını sallayıp yerine dönüyor. Bu kampta herkes düşman olmayabilir.`,
 ch:[{t:'Devam et.',go:'h2'}]},
h2:{c:1,art:'interro',b:(st,fl)=>`Sabaha karşı seni hücreden alıyorlar. Küçük, penceresiz bir oda. Masada bir lamba, bir dosya ve bir bardak çay.

Binbaşı Rehn kibar, sakin, neredeyse dostça konuşuyor:

— Çayınızı için Çavuş. Bize birliğinizin mevzilerini ve telsiz şifrelerini anlatın, siz de arkadaşlarınız da bu akşam doktor görür. Sözüm söz.${fl.burn?`

Bir an duraksıyor.

— Şifre defteriniz yanmış. Akıllıca. Ama ben sabırlı bir adamım.`:''}`,
 ch:[{t:'Sadece adını, rütbeni ve sicil numaranı söyle.',fx:{moral:10,saglik:-15},go:'h3'},
     {t:'Yanlış mevzi bilgileri ver, onları oyala.',fx:{moral:-5},set:{lie:1},go:'h3'},
     {t:'Hiçbir şey söyleme. Gözlerinin içine bak.',fx:{moral:5,saglik:-20},go:'h3'}]},
h3:{c:1,art:'interro',b:(st,fl)=>`Rehn kapıyı açtırıyor. İki asker Mert'i içeri sürüklüyor. Çocuğun dudağı patlamış.${fl.lie?`

— Verdiğiniz mevziler boş çıktı Çavuş, diyor Rehn aynı sakin sesle. Yalanın bir bedeli olur.`:''}

— Siz konuşmazsanız, diyor Rehn, belki o konuşur. Gençtir, korkar. Korkan insan her şeyi anlatır.

Mert sana bakıyor. Gözlerinde yalvarma yok; emir bekleyen bir askerin bakışı var.`,
 ch:[{t:'Önemsiz ama doğru bir bilgi ver, Mert\'i kurtar.',fx:{bag:10,moral:-15},set:{gave:1},go:'h4'},
     {t:'"Komutan benim, o hiçbir şey bilmiyor" de. Yükü üstüne al.',fx:{saglik:-15,bag:15,moral:5},go:'h4'},
     {t:'Sus. Mert\'e de susmasını işaret et.',fx:{bag:-15,moral:5},set:{mertHurt:1},go:'h4'}]},
h4:{c:1,art:'cell',b:(st,fl)=>`Gece hücrede üçünüz yan yanasınız. ${fl.mertHurt?'Mert yüzü duvara dönük, sessizce ağlıyor; bugün sorgu odasında ağır dayak yedi.':'Mert sessizce ağlıyor.'} ${fl.band?'Selim\'in ateşi biraz düşmüş; sargı işe yaramış.':'Selim\'in ateşi hâlâ yüksek.'}

Selim cebinden buruşmuş bir fotoğraf çıkarıyor. Altı yaşlarında bir kız çocuğu, eksik dişleriyle gülümsüyor.

— Elif, diyor. Doğum gününe yetişeceğime söz verdim. Üç hafta var.`,
 ch:[{t:'Onlara evini, köyünü, döndüğünüzde yapacaklarınızı anlat.',fx:{moral:10,bag:10},go:'k1'},
     {t:'Fısıltıyla kaçış hakkında konuşmaya başla.',fx:{moral:5},set:{plan:1},go:'k1'},
     {t:'Uyumalarını söyle. Güç toplamak lazım.',fx:{saglik:10},go:'k1'}]},

/* ================= BÖLÜM 3 · PLAN ================= */
k1:{c:2,art:'yard',b:(st,fl)=>`Günler birbirine karışıyor. Her öğlen avluda yarım saatlik yürüyüşe çıkarılıyorsunuz. Kampı görebildiğin tek an bu.${fl.plan?`

Kaçış fikri artık üçünüzün de aklında. Her yürüyüş bir keşif.`:''}

Bugün neye dikkat edeceksin?`,
 ch:[{t:'Nöbet değişimlerine ve kule saatlerine.',set:{shift:1},go:'k1b'},
     {t:'Tel örgünün zayıf noktalarına.',set:{fence:1},go:'k1b'},
     {t:'İnsanlara: kim kime nasıl davranıyor?',set:{people:1},go:'k1b'}]},
k1b:{c:2,art:'yard',b:(st,fl)=>`Ertesi gün yine avludasınız. ${fl.shift?'Dün kulelerdeki nöbetçilerin saat üçte değiştiğini fark ettin; değişim sırasında projektörler birkaç dakika boyunca avluya bakmıyor.':fl.fence?'Dün kuzeydoğu köşesindeki direğin dibinde toprağın çöktüğünü ve telin gevşediğini fark ettin.':'Dün gardiyanların yaşlı Tobas\'a pek saygı göstermediğini, onun da esirlere diğerleri gibi davranmadığını fark ettin.'}

Bugün başka neye bakacaksın?`,
 ch:[{t:'Nöbet değişimlerine ve kule saatlerine.',req:(st,fl)=>!fl.shift,set:{shift:1},go:'k2'},
     {t:'Tel örgünün zayıf noktalarına.',req:(st,fl)=>!fl.fence,set:{fence:1},go:'k2'},
     {t:'İnsanlara: kim kime nasıl davranıyor?',req:(st,fl)=>!fl.people,set:{people:1},go:'k2'}]},
k2:{c:2,art:'cell',b:`Akşam yemeği sırasında kapı aralanıyor. Tobas, tabağının altına fazladan bir dilim ekmekle bir parça peynir sıkıştırıyor.

— Oğlum, diyor kırık bir Türkçeyle. O da asker. Sizin gibi. Belki o da bir yerde… Kimse ona ekmek vermez.

Gözleri dolu. Bu adama güvenebilir misin?`,
 ch:[{t:'Tobas\'tan yardım iste: kapının kilidi, nöbet saati.',p:(st,fl)=>Math.min(.9,(fl.tobas?.45:.15)+(fl.people?.25:0)+st.bag/400),ok:'k3ok',no:'k3no',okset:{ally:1},nofx:{saglik:-15},noset:{watched:1}},
     {t:'Teşekkür et ama hiçbir şey isteme. Riske girme.',fx:{moral:5},go:'k3'},
     {t:'Uyuyakaldığında anahtarlarını çalmayı dene.',p:(st,fl)=>fl.people?.4:.25,ok:'k3key',no:'k3no2',okset:{key:1},nofx:{saglik:-20},noset:{watched:1}}]},
k3ok:{c:2,art:'cell',b:`Tobas uzun süre susuyor. Sonra sesini alçaltıyor:

— Perşembe gecesi nöbet bende. Saat üçte kuledekiler değişir; on dakika kimse avluya bakmaz. Kapınızın sürgüsü… unutulabilir.

Elini parmaklıkların arasından uzatıyor. Sıkıyorsun. İkinizin de eli titriyor.`,
 ch:[{t:'Devam et.',go:'k4'}]},
k3no:{c:2,art:'interro',b:`Tobas'ın yüzü bir anda değişiyor. Geri çekiliyor ve tek kelime etmeden gidiyor.

Yarım saat sonra iki gardiyan hücreye giriyor. Seni dışarı çıkarıp dövüyorlar. Rehn kapıda, kollarını kavuşturmuş izliyor:

— Kaçış planı mı Çavuş? Artık gözüm üzerinizde.

Tobas'ı bir daha nöbette görmüyorsun.`,
 ch:[{t:'Devam et.',go:'k4'}]},
k3:{c:2,art:'cell',b:`Tobas'a başınla teşekkür ediyorsun. Ekmeği ve peyniri üçe bölüyorsunuz.

Selim ağzındaki lokmayı yutup gülümsüyor:

— Ömrümde yediğim en güzel peynir. Elif'e söylemeyin, annesinin börekleri gücenir.`,
 ch:[{t:'Devam et.',go:'k4'}]},
k3key:{c:2,art:'cell',b:`Tobas sandalyesinde başı önüne düşmüş, horluyor. Kemerindeki anahtarlıktan tek bir anahtarı sessizce çıkarıyorsun. Şıngırtı eksik olmasın diye yerine bir tel parçası takıyorsun.

Anahtar avucunda. Kalbin göğsünü yumrukluyor.`,
 ch:[{t:'Devam et.',go:'k4'}]},
k3no2:{c:2,art:'interro',b:`Elini kemerine uzattığın an Tobas gözlerini açıyor. Hiçbir şey söylemiyor; yüzünde yalnızca derin bir hayal kırıklığı var. Sonra düdüğünü çalıyor.

O gece seni sabaha kadar ayakta tutuyorlar. Rehn kapıda izliyor:

— Kaçış planı mı Çavuş? Artık gözüm üzerinizde.`,
 ch:[{t:'Devam et.',go:'k4'}]},
k4:{c:2,art:'cell',b:(st,fl)=>`Ranzanın demir çerçevesinde gevşemiş bir parça buluyorsun. Günlerce beton zemine sürterek ucunu yassılaştırıp sivriltiyorsun.${fl.fence?' Gözüne kestirdiğin tel örgü için iş görebilir.':''}${fl.watched?`

Rehn'in sözü boş değilmiş: artık geceleri hücrenizin önünden iki kez fazla devriye geçiyor.`:''}

Ama asıl sorun Selim. Bacağı iyileşmedi; topallayarak yürüyor.

— Ben sizi yavaşlatırım Çavuşum, diyor. Gidin. Ben burada kalırım, bir şekilde dayanırım.`,
 ch:[{t:'"Hayır. Üçümüz girdik, üçümüz çıkacağız." Selim\'i taşıyacaksın.',fx:{bag:15},set:{carry:1},go:'k5'},
     {t:'Selim\'e söz ver: çıkınca onu kurtarmak için geri döneceksin.',fx:{bag:-15,moral:-10},set:{leaveSelim:1},go:'k5'},
     {t:'Selim kampta bir oyalama yaratsın, siz o sırada kaçın.',fx:{bag:-5},set:{diversion:1},go:'k5'}]},
k5:{c:2,art:'camp',b:`Plan hazır. Geriye tek bir karar kalıyor: ne zaman?`,
 ch:[{t:'Saat üçte, kule nöbeti değişirken.',req:(st,fl)=>!!fl.shift,why:'Nöbet saatlerini gözlemlemedin.',set:{time:'shift'},go:'e1'},
     {t:'Tobas\'ın nöbet tuttuğu perşembe gecesi.',req:(st,fl)=>!!fl.ally,why:'Tobas\'ın yardımını almadın.',set:{time:'tobas'},go:'e1'},
     {t:'İlk yağmurlu gece. Yağmur sesleri ve izleri örter.',fx:{saglik:-10},set:{time:'rain'},go:'e1'}]},

/* ================= BÖLÜM 4 · KAÇIŞ ================= */
e1:{c:3,art:(st,fl)=>fl.time==='rain'?'rain':'fence',b:(st,fl)=>(fl.time==='shift'?`Saat 02.55. Kuledeki projektörün dönüşlerini sayıyorsun: kırk saniyede bir.`
 :fl.time==='tobas'?`Perşembe gecesi. Koridorda Tobas'ın ağır ayak sesleri bir kez geçiyor, sonra kesiliyor.`
 :`Üç gün bekledin. Sonunda gök gürlüyor; yağmur çatıda bir davul gibi çalıyor.`)+`

Mert hazır. `+(fl.carry?`Selim'in kolunu omzuna atmışsın; dişlerini sıkarak ayağa kalkıyor.`
 :fl.leaveSelim?`Selim ranzasında gözlerini kapatmış, uyuyor numarası yapıyor. Vedalaşmadınız; böylesi daha kolay.`
 :`Selim ranzasında doğrulmuş, sana göz kırpıyor. "İşaretimi bekleyin" der gibi.`),
 ch:[{t:'Kapıyı yavaşça it. Tobas sözünü tutmuş olmalı.',req:(st,fl)=>fl.ally&&fl.time==='tobas',go:'e2'},
     {t:'Çaldığın anahtarı kilide sok.',req:(st,fl)=>!!fl.key,go:'e2'},
     {t:'Demir parçasıyla sürgüyü kaldırmayı dene.',p:(st,fl)=>fl.time==='rain'?.7:.55,ok:'e2',no:'e1x'}]},
e1x:{c:3,art:'fence',b:`Demir parça sürgüye sürtünürken keskin bir gıcırtı çıkıyor. Koridorda bir el feneri yanıyor.

Nefesinizi tutuyorsunuz. Işık kapının önünde bir süre bekliyor… sonra uzaklaşıyor. Gardiyan sesi bir fareye yormuş olmalı.

İkinci denemede sürgü kalkıyor.`,
 ch:[{t:'Devam et.',fx:{moral:-5},go:'e2'}]},
e2:{c:3,art:'fence',b:(st,fl)=>`Avlunun karanlık köşesinden geçip tel örgüye ulaşıyorsunuz.${fl.fence?' Gözüne kestirdiğin yer burası: direğin dibinde toprak çökmüş, tel gevşek.':' Tel sıkı gerilmiş, aralarında el genişliğinde boşluk var.'}`,
 ch:[{t:'Gevşek direğin dibinden, telin altından geç.',req:(st,fl)=>!!fl.fence,go:'e3'},
     {t:'Demir parçasıyla telleri bük ve bir geçit aç.',p:(st,fl)=>fl.fence?.8:.55,ok:'e3',no:'e3',nofx:{saglik:-10},noset:{alarm:1}}]},
e3:{c:3,art:'fence',b:(st,fl)=>(fl.alarm?`Bir tel kopup ucuna bağlı teneke kutuyu düşürüyor. Bir anlık sessizlik… sonra siren!`
 :`Tel örgünün öbür yanındasınız. Tam ormanın kenarına koşacakken projektörün ışığı otların üzerinden size doğru kayıyor.`)+(fl.diversion?`

Tam o anda kampın öbür ucunda bağrışmalar yükseliyor. Selim! Hücrenin parmaklıklarına vurup avazı çıktığı kadar bağırıyor. Projektörler o tarafa dönüyor.`:''),
 ch:[{t:'Selim\'in kazandırdığı fırsatı kullan. Koş!',req:(st,fl)=>!!fl.diversion,go:'e4'},
     {t:'Koşun! Ormana kadar durmak yok.',req:(st,fl)=>!fl.diversion,p:(st,fl)=>fl.carry?.45:.7,ok:'e4',no:'e3b'},
     {t:'Yere yat. Işık geçene kadar kıpırdama.',req:(st,fl)=>!fl.diversion,p:(st,fl)=>fl.alarm?.35:.75,ok:'e4',no:'e3b'},
     {t:'Işığa doğru koşup dikkatleri üstüne çek. Onlar kaçsın.',req:(st,fl)=>!fl.diversion,set:{sac:1},go:'b1'}]},
e3b:{c:3,art:'forest',b:(st,fl)=>`Bir makineli tüfek dizisi toprağı dövüyor.${fl.carry?' Selim\'in ağırlığı seni yavaşlatıyor. Bir mermi yanınızdan geçerken Selim inleyerek sarsılıyor; vurulmuş.':' Bir mermi baldırını sıyırıyor.'}

Yine de ağaçların karanlığına ulaşıyorsunuz.`,
 ch:[{t:'Devam et.',fx:{saglik:-15},set:{selimHit:1},go:'e4'}]},
e4:{c:3,art:'forest',b:(st,fl)=>`Arkanızda köpek havlamaları. El fenerlerinin ışığı ağaçların arasında dans ediyor.${fl.route?`

Kamyonda saydığın yol aklında: tahta köprü, uzun düz yol… Köprü güneyde olmalı. Sınır o yönde.`:''}`,
 ch:[{t:'Dereye gir. Su, izinizi köpeklerden saklar.',fx:{saglik:-15,moral:5},go:'d1'},
     {t:'Sırta tırman, hızla uzaklaş.',p:.6,ok:'d1',no:'d1',nofx:{saglik:-10}},
     {t:'Kamyonda ezberlediğin yolu izle, köprüye yönel.',req:(st,fl)=>!!fl.route,fx:{moral:10},go:'d1'}]},
b1:{c:3,art:'fence',b:(st,fl)=>`Doğruca projektörün ışığına koşuyorsun. Kollarını açıp bağırıyorsun. Bütün namlular sana dönüyor.

Arkanda, karanlıkta, ${fl.carry?'Mert\'in Selim\'i omzuna alıp':'Mert\'in'} ağaçların arasına daldığını görüyorsun. Sonra bir dipçik darbesi ve karanlık.`,
 ch:[{t:'…',go:'end_bedel'}]},

/* ================= BÖLÜM 5 · DÖNÜŞ ================= */
d1:{c:4,art:'dawn',b:(st,fl)=>`Şafak sökerken bir kaya oyuğuna sığınıyorsunuz. Islaksınız, açsınız; ayaklarınız kan içinde.

${fl.carry?(fl.selimHit?'Selim\'in yarası kanamaya devam ediyor, ateşi de yeniden yükseldi. Dudakları çatlamış; Elif\'in adını sayıklıyor.':'Selim\'in ateşi yeniden yükseldi. Dudakları çatlamış, sayıklıyor.'):'Mert yanında titreyerek uyuyor. Ara sıra irkilip uyanıyor, sonra tekrar dalıyor.'}`,
 ch:[{t:'Bir gün burada dinlenin, gece yola çıkın.',fx:{saglik:15,moral:-5},set:{rested:1},go:'d2'},
     {t:'Hemen yola devam edin. Arama ekipleri yaklaşıyor olabilir.',fx:{saglik:-10,moral:5},go:'d2'},
     {t:'Son yiyeceğini ve suyunu Selim\'e ver.',req:(st,fl)=>!!fl.carry,fx:{saglik:-10,bag:10},set:{selimFed:1},go:'d2'}]},
d2:{c:4,art:'mines',b:`Öğleden sonra ağaçlar seyreliyor. Uzakta, bir tepenin üzerinde dalgalanan bayrağı görüyorsun: bizimkiler.

Arada bir kilometrelik çıplak bir arazi var. Mert yarısı toprağa gömülü, paslı bir tabelayı gösteriyor. Üzerinde kırmızı bir kurukafa.

Mayın tarlası.`,
 ch:[{t:'Bıçağınla toprağı yoklayarak santim santim ilerleyin.',fx:{saglik:-10},set:{slow:1},go:'d3'},
     {t:'Hayvan izlerini takip edin; keçilerin geçtiği yerden geçin.',go:'d3'},
     {t:'Koşarak geçin. Ne kadar kısa sürerse o kadar iyi.',set:{run:1},go:'d3'}]},
d3:{c:4,art:'mines',b:(st,fl)=>`Yolun yarısındayken Mert donup kalıyor.

— Çavuşum, diyor fısıltıyla. Ayağımın altında bir şey tıkladı.

Basınçlı bir mayının üzerinde duruyor. Ayağını kaldırdığı an patlayacak.${fl.run?' Koşarken bastı; şimdi tek ayağının üzerinde, dengede kalmaya çalışıyor.':''}`,
 ch:[{t:'Mert\'in ağırlığını eşit bir taşla değiştirmeyi dene.',p:(st,fl)=>Math.min(.85,.3+st.moral/250+(fl.slow?.15:0)-(fl.run?.1:0)),ok:'d3ok',no:'d3x'},
     {t:'Yanında kal ve sakinleştir. Bizimkilere işaret verin.',p:(st,fl)=>fl.msg?.85:.4,ok:'d3help',no:'d3x'},
     {t:'Mert\'e kendini ileri atmasını söyle.',p:.3,ok:'d3ok',no:'d3x',okfx:{saglik:-15}}]},
d3ok:{c:4,art:'mines',b:`Bir an her şey duruyor. Sonra hiçbir şey olmuyor.

Mert birkaç adım ötede yüzüstü yatıyor, ellerini toprağa gömmüş. Yaşıyor. Sana bakıp gülmeye çalışıyor ama ağlıyor. Sen de.

Kalan yolu onun ayak izlerine basarak yürüyorsunuz.`,
 ch:[{t:'Devam et.',go:'d4'}]},
d3help:{c:4,art:'mines',b:(st,fl)=>`Tepedeki siperden dürbünle izliyor olmalılar. Yarım saat sonra bir istihkâm çavuşu, elinde mayın dedektörüyle sürünerek yanınıza geliyor.${fl.msg?`

— Telsiz mesajınızı aldık, diyor. Günlerdir sizi arıyorduk.`:''}

Usta elleriyle mayını etkisiz hâle getiriyor. Mert dizlerinin üzerine çöküp hıçkıra hıçkıra ağlıyor. Ağlamasına izin veriyorsun.

İstihkâmcı sizi açtığı güvenli yoldan siperlere götürüyor.`,
 ch:[{t:'Devam et.',set:{mert:'alive'},go:route}]},
d3x:{c:4,art:'mines',b:`Patlama, bir anlık beyaz bir sessizlik. Sonra kulaklarında bir çınlama.

Mert'in yattığı yere sürünüyorsun. Gözleri açık, sana bakıyor. Bir şey söylemeye çalışıyor ama ses çıkmıyor. Elini tutuyorsun; o da tutuyor. Sonra tutmuyor.

Yirmi yaşındaydı. İlk gece keşfiydi.`,
 ch:[{t:'Devam et.',fx:{moral:-25},set:{mert:'dead'},go:'d4'}]},
d4:{c:4,art:'mines',b:`Son yüz metre. Tepedeki siperden bir ses yükseliyor:

— Dur! Kimsin? Kıpırdama!

Namlular size çevrilmiş. Üzerinizde düşman kampının yırtık esir kıyafetleri var. Bizimkiler sizi tanımıyor.`,
 ch:[{t:'Ellerini kaldır ve taburun parolasını bağır.',go:route},
     {t:'Yere yat; adını, rütbeni ve birliğini haykır.',go:route},
     {t:'"Gece Kuşu! Gece Kuşu dönüyor!" diye bağır.',req:(st,fl)=>!!fl.msg,fx:{moral:10},go:route}]},

/* ================= SONLAR ================= */
end_kahraman:{c:4,art:'home',end:{k:'kahraman',ti:'Kahraman dönüşü',medal:'Esaretten Dönen',tone:'good'},b:(st,fl)=>`Üçünüz, yırtık esir kıyafetlerinizle siperden içeri yuvarlanıyorsunuz. Biri battaniye getiriyor, biri su. Tabur komutanı koşarak geliyor; önce sana sarılıyor, sonra Selim'e, sonra Mert'e.

Üç hafta sonra hastanenin bahçesindesiniz. Selim tekerlekli sandalyede, kucağında Elif. Doğum gününe yetişti. Mert pastanın mumlarını yakıyor; eli artık titremiyor.

Bir ay sonra tören alanında göğsüne bir madalya takılıyor. Kalabalıkta iki yüz arıyorsun. Ön sıradalar; ikisi de ayakta alkışlıyor.${gaveLine(fl)}

Üçünüz girdiniz. Üçünüz çıktınız.`,ch:[]},
end_aci:{c:4,art:'home',end:{k:'aci',ti:'Acı zafer',medal:'Esaretten Dönen',tone:'mid'},b:(st,fl)=>{const mDead=fl.mert==='dead',sDead=fl.carry&&fl.selimDead===1;
 let t=`Bizimkilerin siperine ulaştığında dizlerinin bağı çözülüyor. Battaniyeler, su, telsiz cızırtıları… Hepsi çok uzaktan geliyor gibi.`;
 if(mDead)t+=`

Mert'in naaşı iki gün sonra, istihkâmcıların mayın tarlasından çıkardığı hâliyle köyüne gönderiliyor. Annesine mektubu sen yazıyorsun. Üç kez baştan başlıyorsun; hiçbir cümle yetmiyor.`;
 if(sDead)t+=`

Selim sınırı göremedi. Son gece, kaya oyuğunda, ateşler içinde Elif'in adını sayıkladı. Onu sırtında getirdin. Bir babayı kızına teslim edemedin ama bir askeri vatanına getirdin.`;
 else if(!fl.carry)t+=`

Selim'i kampta bıraktın. Her gece onu düşünüyorsun. Dört ay sonra bir esir takasında adı listede çıkıyor. Zayıflamış, saçları ağarmış ama yaşıyor. Elif'in doğum gününü kaçırdı; bir sonrakine yetişeceğine söz veriyor. Bu sefer sözünü tutuyor.`;
 return t+gaveLine(fl)+`

Göğsüne takılan madalya her sabah biraz daha ağır geliyor.`},ch:[]},
end_yalniz:{c:4,art:'dawn',end:{k:'yalniz',ti:'Tek başına',medal:'Esaretten Dönen',tone:'bad'},b:(st,fl)=>`Siperden içeri tek başına giriyorsun.

Mert'i mayın tarlasında, ${fl.carry?'Selim\'i de son gece o kaya oyuğunda':'Selim\'i de dikenli tellerin ardında'} bıraktın. Bir tim olarak çıktınız; geri dönen yalnızca sensin.

Haftalarca konuşmuyorsun. Geceleri, uykuda, bir telsizin cızırtısını duyuyorsun: "…dayanın…"

Bir sabah hastane bahçesinde biri yanına oturuyor. Selim'in eşi. Kucağında Elif. Sana kızmıyor; yalnızca neler olduğunu bilmek istiyor. Ona her şeyi anlatıyorsun. İlk kez ağlıyorsun.

Hayatta kalmak bazen bir zafer değil, bir sorumluluktur.`,ch:[]},
end_bedel:{c:3,art:'cell',end:{k:'bedel',ti:'Bedel',medal:'Esaretten Dönen',tone:'mid'},b:(st,fl)=>`Seni tekrar hücreye attıklarında yüzünde tuhaf bir huzur var.${fl.leaveSelim||fl.diversion?' Selim duvarın öbür yanında; ikiniz de kaldınız ama Mert gitti.':''}

İki hafta sonra Rehn hücrenin önünde duruyor:

— ${fl.carry?'Arkadaşlarınız':'Eriniz'} sınırı geçmiş Çavuş. Tebrikler. Kaybettiniz… ama kazandınız. Bunu nadiren görürüm.

Yedi ay sonra, sisli bir sabah, iki ülkenin arasındaki köprüde bir esir takası yapılıyor.${fl.carry?'':' Selim yanında, koluna yaslanarak yürüyor.'} Köprünün öbür ucunda bir figür bekliyor; yaklaştıkça yüzü netleşiyor. Mert. Yanında ${fl.carry?'koltuk değnekleriyle Selim':'tabur komutanı'}.

Mert sana selam duruyor. Sen de ona.

Bazı zaferler, bedelini ödeyen tarafından kazanılır.`,ch:[]},
end_karanlik:{c:2,art:(st,fl)=>fl._failC>=3?'forest':'cell',end:{k:'karanlik',ti:'Karanlık',tone:'bad'},b:(st,fl)=>st.saglik<=0&&fl._failC>=3
 ?`Yaralar ve yorgunluk sonunda seni yere seriyor. Toprak soğuk; gökyüzü çok uzakta.

${fl.mert==='dead'?'Yanında kimse yok. Son düşündüğün şey Mert\'in elini tuttuğun an oluyor.':'Mert seni sürüklemeye çalışıyor, sonra yanına çöküp elini tutuyor. "Bırakmam Çavuşum," diyor. "Siz de bırakmadınız."'}

${fl.mert==='dead'?'Günler sonra bir devriye, sınıra birkaç kilometre mesafede, bir kaya oyuğunda bulduğu künyeni taburuna teslim ediyor.':'İki gün sonra Mert tek başına bizimkilerin siperine ulaşıyor. Tabur komutanının avucuna bir künye bırakıyor: seninkini.'}

Hikâye burada bitmek zorunda değildi. Kararların bedenini ne kadar yıprattı?`
 :st.saglik<=0
 ?`Bedenin daha fazla dayanamadı. Bir sabah ranzadan kalkamıyorsun; Selim'in ve Mert'in sesleri giderek uzaklaşıyor.

Kamp doktoru geldiğinde çok geçti.

Aylar sonra, bir esir takasında, adının yanına bir işaret konmuş bir liste teslim ediliyor. Mert o listeyi yıllarca cüzdanında taşıyacak.

Hikâye burada bitmek zorunda değildi. Kararların bedenini ve ruhunu ne kadar yıprattı?`
 :`Bir gün Rehn'in karşısında, sesinin kendi sesin olmadığını fark ediyorsun. Sorulan her şeyi anlatıyorsun. Umudun bitti.

Selim o geceden sonra seninle konuşmuyor. Mert yüzüne bakamıyor.

Herkesin bir sınırı vardır. Seninki burada kırıldı.

Hikâye burada bitmek zorunda değildi. Moralini ayakta tutacak kararlar verebilir miydin?`,ch:[]}
};

registerTale({id:'esir',ti:'Esir',genre:'Hayatta kalma · Kaçış',color:'#c9a64a',cover:'cover',
 sub:'Düşman hattında esir düşen bir timin kaçış hikâyesi',
 pitch:'Gece keşfinde pusuya düşen timin esir alınır. Yaralı bir onbaşı, ilk görevindeki genç bir er ve sorgu odasında seni bekleyen sabırlı bir binbaşı. Kime güveneceksin, kimi geride bırakacaksın? Herkes eve dönemeyebilir.',
 chapters:[{ti:'Pusu',sub:'Gece keşfi ve esaret'},{ti:'Hücre',sub:'Sorgu ve irade'},{ti:'Plan',sub:'Gözlem ve güven'},{ti:'Kaçış',sub:'Tel örgü ve takip'},{ti:'Dönüş',sub:'Mayınlı arazi ve eve yolculuk'}],
 stats:{moral:70,saglik:85,bag:55},statDefs:[['moral','Moral','var(--acc)'],['saglik','Sağlık','var(--green)'],['bag','Tim bağı','var(--blue)']],
 fail:(st,fl,c)=>st.saglik<=0?'end_karanlik':(st.moral<=0&&c>=1&&c<=2?'end_karanlik':null),start:'p1',arts:ARTS,scenes:S});
})();
