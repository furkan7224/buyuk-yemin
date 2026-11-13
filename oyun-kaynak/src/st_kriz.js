/* =====================================================================
   HİKÂYE · KRİZ MASASI
   48 saat. Yıldızdere Barajı'nın kontrol binasında 14 rehine.
   Masa: Tuğgeneral Oya Demirel (Özel Kuvvetler) · Başkomiser Selin Uçar (müzakereci)
   Bakan Yardımcısı Haldun Sezer · Emekli mühendis Nuri Bilgin
   Karşı taraf: Arman Kesk (eski baraj teknisyeni) · Cevdet Arı · Bora (19)
   Rehineler: vardiya şefi Halil Turan · stajyer Ece Yalın · teknisyen Mehmet Er …
   Tüm yer ve kişiler kurgusaldır.
   ===================================================================== */
(function(){
/* ---- sahne çizimleri ---- */
function sc(o){const W=360,H=150;const sky=o.sky||['#04070c','#0f1a28'];let g=`<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;border-radius:12px" aria-hidden="true"><defs><linearGradient id="kr${o.k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#kr${o.k})"/>`;
 if(o.stars){let s=11;for(let i=0;i<30;i++){s=(s*9301+49297)%233280;const x=s%W;s=(s*9301+49297)%233280;const y=s%70;g+=`<circle cx="${x}" cy="${y}" r="${i%5?0.6:1.1}" fill="#fff" opacity="${0.3+(i%4)*0.15}"/>`}}
 if(o.mount)g+=`<path d="M0 ${H} L0 70 L50 44 L96 66 L150 30 L210 62 L262 36 L318 60 L360 48 L360 ${H}Z" fill="${o.mount}"/>`;
 if(o.dam){g+=`<path d="M70 58 L290 58 L304 132 L56 132Z" fill="#1c232b"/><path d="M70 58 L290 58 L292 66 L68 66Z" fill="#2c3540"/>`;
  for(let x=100;x<=260;x+=40)g+=`<rect x="${x}" y="66" width="14" height="66" fill="#141a20"/>`;
  g+=`<path d="M56 132 L304 132 L320 ${H} L40 ${H}Z" fill="#0c1a24"/><rect x="164" y="44" width="32" height="14" fill="#262e37"/>`;
  [86,150,210,274].forEach(x=>g+=`<circle cx="${x}" cy="60" r="2.2" fill="#ffe7a8"/><path d="M${x} 62 L${x-26} 132 L${x+26} 132Z" fill="#ffe7a8" opacity=".06"/>`);
  g+=`<path d="M0 66 L70 58 L68 66 L0 74Z M290 58 L360 62 L360 72 L292 66Z" fill="#0a2030" opacity=".9"/>`;
  if(o.leak)g+=`<path d="M238 70 L241 92 L237 110 L242 132" stroke="#8fd0ff" stroke-width="1.6" fill="none" opacity=".75"/><path d="M232 74 L236 84 L231 96" stroke="#05080b" stroke-width="1.4" fill="none"/>`}
 if(o.room){g+=`<rect width="${W}" height="${H}" fill="#0a0d11"/>`;
  [[18,14,96,56],[126,10,108,64],[244,14,96,56]].forEach(([x,y,w,h],i)=>{g+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#122030" stroke="#2a3a4c"/>`;
   if(i===1)g+=`<path d="M${x+8} ${y+50} L${x+30} ${y+30} L${x+52} ${y+40} L${x+76} ${y+18} L${x+100} ${y+26}" stroke="#70a3c4" stroke-width="1.6" fill="none"/>`;
   else g+=`<rect x="${x+8}" y="${y+10}" width="${w*0.5}" height="5" fill="#70a3c4" opacity=".5"/><rect x="${x+8}" y="${y+22}" width="${w*0.7}" height="4" fill="#3d5568"/><rect x="${x+8}" y="${y+32}" width="${w*0.4}" height="4" fill="#3d5568"/><circle cx="${x+w-14}" cy="${y+14}" r="4" fill="#c84a3a" opacity="${o.alarm?1:.5}"/>`});
  g+=`<path d="M30 112 L330 112 L350 ${H} L10 ${H}Z" fill="#1a1f25"/><ellipse cx="180" cy="112" rx="150" ry="10" fill="#232a32"/>`;
  [[90,104],[150,100],[214,100],[272,104]].forEach(([x,y])=>g+=`<g fill="#050608"><circle cx="${x}" cy="${y-16}" r="7"/><path d="M${x-13} ${y+4} Q${x} ${y-14} ${x+13} ${y+4}Z"/></g>`)}
 if(o.phone)g+=`<rect width="${W}" height="${H}" fill="#0b0a08"/><path d="M180 0 L80 ${H} L280 ${H}Z" fill="#ffd98a" opacity=".09"/><rect x="40" y="112" width="280" height="38" fill="#221d15"/><g transform="translate(150 84)"><rect x="0" y="16" width="64" height="16" rx="4" fill="#15130f"/><path d="M-6 14 Q32 -10 70 14 L62 20 Q32 4 2 20Z" fill="#0d0c0a"/><rect x="18" y="20" width="28" height="8" rx="2" fill="#3a3326"/></g><circle cx="244" cy="104" r="3" fill="#c84a3a"/><path d="M226 92 Q244 80 262 92 M232 98 Q244 90 256 98" stroke="#c84a3a" stroke-width="1.4" fill="none" opacity=".7"/><rect x="70" y="104" width="54" height="8" fill="#e8e0c8" opacity=".5"/>`;
 if(o.press){g+=`<rect width="${W}" height="${H}" fill="#0c0d10"/><rect x="0" y="0" width="${W}" height="88" fill="#121a26"/><rect x="146" y="70" width="68" height="80" fill="#1b2430"/><rect x="170" y="62" width="20" height="10" fill="#2d3846"/>`;
  [[40,40],[90,30],[280,36],[320,48]].forEach(([x,y])=>g+=`<circle cx="${x}" cy="${y}" r="10" fill="#fff6d6" opacity=".55"/><circle cx="${x}" cy="${y}" r="30" fill="#fff6d6" opacity=".08"/>`);
  for(let i=0;i<9;i++)g+=`<g fill="#050608"><circle cx="${18+i*40}" cy="128" r="9"/><path d="M${4+i*40} ${H} Q${18+i*40} 128 ${32+i*40} ${H}Z"/></g>`}
 if(o.gallery){g+=`<rect width="${W}" height="${H}" fill="#07090b"/><path d="M80 ${H} L150 30 L210 30 L280 ${H}Z" fill="#161b20"/><path d="M150 30 L210 30 L206 40 L154 40Z" fill="#232a31"/><circle cx="180" cy="36" r="3" fill="#ffd98a"/><path d="M180 38 L130 ${H} L230 ${H}Z" fill="#ffd98a" opacity=".07"/><path d="M196 46 L202 66 L194 84 L204 108 L198 128" stroke="#05080b" stroke-width="2" fill="none"/><path d="M200 70 L200 150" stroke="#8fd0ff" stroke-width="1.4" opacity=".6"/><ellipse cx="200" cy="146" rx="40" ry="4" fill="#8fd0ff" opacity=".18"/>`}
 if(o.tv){g+=`<rect width="${W}" height="${H}" fill="#08090b"/><rect x="70" y="14" width="220" height="112" rx="6" fill="#1a1f26"/><rect x="78" y="22" width="204" height="96" fill="#2a3542"/><g fill="#0b0e12"><circle cx="180" cy="62" r="18"/><path d="M144 118 Q180 74 216 118Z"/></g><rect x="84" y="100" width="70" height="12" fill="#c84a3a"/><text x="90" y="109" font-size="8" fill="#fff" font-family="sans-serif" font-weight="700">CANLI</text><rect x="160" y="126" width="40" height="10" fill="#1a1f26"/>`}
 if(o.rain){for(let i=0;i<70;i++){const x=(i*53)%W,y=(i*29)%H;g+=`<line x1="${x}" y1="${y}" x2="${x-5}" y2="${y+13}" stroke="#a9bdd2" stroke-width=".7" opacity=".35"/>`}}
 if(o.bolt)g+=`<path d="M250 0 L238 34 L250 34 L232 72" stroke="#eef4ff" stroke-width="2.2" fill="none"/><rect width="${W}" height="${H}" fill="#cfe0ff" opacity=".06"/>`;
 if(o.men)o.men.forEach(([x,y,s=1])=>{g+=`<g transform="translate(${x} ${y}) scale(${s})" fill="#030405"><circle cx="0" cy="-26" r="4.4"/><path d="M-5 -21 L5 -21 L7 -4 L4 12 L1 12 L0 0 L-1 12 L-4 12 L-7 -4Z"/><path d="M5 -18 L16 -24 L17 -22 L6 -14Z"/></g>`});
 if(o.heli)g+=`<g fill="#050709" transform="translate(70 30)"><ellipse cx="0" cy="0" rx="20" ry="8"/><rect x="16" y="-2" width="34" height="3"/><rect x="-36" y="-12" width="72" height="2"/><rect x="-1" y="-11" width="2" height="4"/></g>`;
 if(o.flood){g+=`<path d="M0 96 L360 96 L360 ${H} L0 ${H}Z" fill="#3b4a52" opacity=".9"/>`;[[30,70,40],[90,62,30],[150,74,44],[230,66,34],[300,72,40]].forEach(([x,y,w])=>g+=`<path d="M${x} 104 L${x} ${y} L${x+w/2} ${y-14} L${x+w} ${y} L${x+w} 104Z" fill="#14181b"/>`);g+=`<path d="M0 100 Q60 94 120 100 T240 100 T360 98" stroke="#9fb6c2" stroke-width="1" fill="none" opacity=".5"/>`}
 if(o.sun)g+=`<circle cx="${o.sun[0]}" cy="${o.sun[1]}" r="22" fill="#ffcf7a" opacity=".85"/><circle cx="${o.sun[0]}" cy="${o.sun[1]}" r="44" fill="#ffb84a" opacity=".14"/>`;
 return g+'</svg>'}
const ARTS={
 cover:()=>sc({k:'cv',sky:['#03060a','#14263a'],stars:1,mount:'#070b10',dam:1,leak:1}),
 dam:()=>sc({k:'d',stars:1,mount:'#070b10',dam:1}),
 damLeak:()=>sc({k:'dl',stars:1,mount:'#070b10',dam:1,leak:1}),
 dawn:()=>sc({k:'dw',sky:['#2b3b5a','#d88c5c'],mount:'#14161a',dam:1,sun:[300,40]}),
 room:()=>sc({k:'r',room:1}),
 alarm:()=>sc({k:'ra',room:1,alarm:1}),
 phone:()=>sc({k:'p',phone:1}),
 press:()=>sc({k:'pr',press:1}),
 gallery:()=>sc({k:'g',gallery:1}),
 tv:()=>sc({k:'tv',tv:1}),
 storm:()=>sc({k:'s',sky:['#05070a','#1a222c'],mount:'#06080b',dam:1,leak:1,rain:1,bolt:1}),
 raid:()=>sc({k:'rd',sky:['#04060a','#121b26'],mount:'#06080b',dam:1,rain:1,men:[[120,140,.9],[146,142,.9],[172,140,.9]]}),
 heli:()=>sc({k:'h',sky:['#060a10','#18283a'],stars:1,mount:'#070b10',dam:1,heli:1}),
 flood:()=>sc({k:'f',sky:['#5d6870','#a3a9a6'],flood:1})
};

const cl=x=>Math.max(0.05,Math.min(0.92,x));
/* ---- son belirleme ---- */
function sel(fl){return fl.savak?'yok':fl.tahliye?'bos':fl.gecUyari?'hafif':'agir'}
function route(st,fl){const s=sel(fl);
 if(s==='agir'||s==='hafif')return 'end_sel';
 if(fl.sonuc==='kayip')return 'end_bedel';
 if(fl.acik)return 'end_gercek';
 return fl.sonuc==='baskin'?'end_baskin':'end_sessiz'}
const bildi=fl=>fl.iddia||fl.nuri||fl.sor||fl.dosya||fl.ucuncu;
const damLine=fl=>fl.savak
 ?'Yıldızdere Barajı onarım için boşaltılıyor. Mühendislerin raporu kısa: gövde birkaç hafta içinde yıkılabilirdi.'
 :'Barajın yıkılan yan gövdesi aylarca haberlerde gösteriliyor.';

const S={
/* ================= BÖLÜM 1 · İLK TEMAS (00.00–06.00) ================= */
k1:{c:0,art:'dam',b:`Saat 03.12. Telefon ikinci çalışında seni uyandırıyor.

— Komutanım, Yıldızdere Barajı'nın kontrol binası basıldı. Silahlı beş kişi. İçeride on dört çalışan var.

Yirmi dakika sonra brifing dosyası önünde. Baraj, Yeşilova kasabasının dokuz kilometre yukarısında. Kasabada yirmi iki bin kişi uyuyor. Kontrol binasını ele geçirenler, istedikleri an dolusavak kapaklarını açabilir.

Baskıncıların lideri bir kez aradı ve tek bir cümle söyledi: "Sorumlu kimse, onunla konuşacağım."

Kararname beş dakika önce imzalandı. Kriz Masası'nın başkanı artık sensin.

Önce nereye gideceksin?`,
 ch:[{t:'Helikopterle barajın yanına git. Sahayı kendi gözünle gör.',set:{yer:'saha'},fx:{masa:5},go:'k2'},
     {t:'Başkentteki kriz merkezinde kal. Masayı oradan yönet.',set:{yer:'merkez'},fx:{kamuoyu:5},go:'k2'}]},

k2:{c:0,art:'room',b:(st,fl)=>`${fl.yer==='saha'
 ?'Barajın üç kilometre aşağısındaki jandarma karakolunu kriz merkezine çevirdiler. Pencereden barajın projektörleri görünüyor; her biri karanlığa asılmış bir göz gibi.'
 :'Başkentteki kriz merkezinin duvarı ekranlarla kaplı. Barajın güvenlik kameraları on dakikadır karanlık.'}

Masada üç kişi var.

Tuğgeneral Oya Demirel, Özel Kuvvetler. Kısa saçlı, az konuşan biri. "Bana iki saat verin, binanın her köşesini öğrenirim."

Başkomiser Selin Uçar, on beş yıllık müzakereci. "Onu bekletmeyin. Bekleyen adam kafasının içinde kendi kendine konuşmaya başlar."

Bakan Yardımcısı Haldun Sezer. Kravatı gece yarısı bile düzgün. "Basın birazdan duyar. Önce haber akışını kontrol altına alalım."

Üçü de sana bakıyor. İlk emrin ne olacak?`,
 ch:[{t:'Selin haklı. Hemen ara ve hattı açık tut.',fx:{rehine:5},set:{ilk:'selin'},go:'k3'},
     {t:'Önce çevreyi kapatın, keskin nişancılar yerleşsin. Arama bir saat bekleyebilir.',fx:{rehine:-10,masa:5},set:{ilk:'oya',bekletti:1},go:'k3'},
     {t:'Önce yayın yasağı çıkarın. Sonra ararız.',fx:{masa:5,kamuoyu:-5},set:{ilk:'haldun',yasak:1},go:'k3'}]},

k3:{c:0,art:'phone',b:(st,fl)=>`${fl.bekletti
 ?`Bir saat on dört dakika sonra hat açılıyor. Ses soğuk:

— Bir saat beklettiniz. Bir saat daha bekleseydim kapaklardan birini açacaktım. Bunu bilin.`
 :'Hat ikinci çalışta açılıyor.'}

— Adım Arman Kesk. Bu barajda dokuz yıl teknisyen olarak çalıştım. Terörist değilim. Ama bu gece buradan eli boş çıkmayacağım.

Sesi sakin; kelimelerini dikkatle seçiyor. Selin bir kâğıda tek kelime yazıp sana gösteriyor: *Eğitimli.*

— Üç isteğim var. Birincisi, kardeşim Serdar Kesk serbest bırakılacak. İkincisi, canlı yayında konuşacağım. Üçüncüsü…

Bir an duraklıyor.

— Üçüncüsünü sonra söyleyeceğim. Önce beni ciddiye aldığınızı görmek istiyorum.

Ne cevap vereceksin?`,
 ch:[{t:'"Seni dinliyorum. Önce rehinelerin iyi olduğunu kanıtla."',fx:{rehine:10},set:{kanit:1},go:'k4'},
     {t:'"Silah zoruyla pazarlık yapmam. Rehineleri bırak, sonra konuşuruz."',fx:{rehine:-10,masa:5},set:{sert:1},go:'k4'},
     {t:'"Üçüncü isteğini şimdi söyle. Ciddiyim."',fx:{rehine:5},set:{ucuncu:1},go:'k4'}]},

k4:{c:0,art:'phone',b:(st,fl)=>`${fl.kanit
 ?`Arman telefonu birine uzatıyor. Titrek, yaşlı bir ses:

— Ben Halil Turan, vardiya şefiyim. Hepimiz iyiyiz. Kimseye bir şey yapmadılar.

Sonra sesini alçaltıyor:

— Komutanım, üçüncü galeriyi kontrol ettirin…

Hat kesiliyor.`
 :fl.ucuncu
 ?`Arman uzun süre susuyor.

— Üçüncüsü bir rapor, diyor sonunda. Barajın kabul raporu. Asıl olanı, size gösterilen değil.

Hat kapanıyor.`
 :`Arman kısa bir gülüş çıkarıyor.

— Komutan, bu binada on dört kişi var. Dokuz kilometre aşağıda da yirmi iki bin. Pazarlık yapmayacaksanız neden aradınız?

Hat kapanıyor.`}

Saat 04.50. Nöbetçi subay kapıda beliriyor.

— Komutanım, hatta yaşlı bir adam var. Nuri Bilgin. Barajı inşa eden mühendislerden biriymiş. "Arman'ı tanıyorum, komutanla konuşmam lazım" diyor. Gece boyunca on bir kez aramış.

Haldun başını iki yana sallıyor.

— Bu gece her meraklı arayacak. Vaktimizi harcamayalım.`,
 ch:[{t:'Nuri Bilgin\'i bağlayın. Beş dakikamı ayırırım.',fx:{masa:-5},set:{nuri:1},go:'k5'},
     {t:'Bir subay dinlesin. Önemli bir şey varsa bana iletsin.',go:'k5'}]},

k5:{c:0,art:'press',b:(st,fl)=>`${fl.nuri?`Nuri Bilgin'in sesi yorgun ama net:

— Arman benim çırağımdı. O çocuk kimseyi öldürmez. Ama bir şeyden korkuyor ve korkmakta haklı olabilir. Sizinle yüz yüze konuşmalıyım.

Onu getirmesi için bir araç gönderiyorsun.

`:''}Saat 05.40. Selin tabletini masaya bırakıyor. Rehinelerden birinin telefonuyla çekilmiş kırk saniyelik bir video internete düşmüş. Stajyer mühendis Ece Yalın ağlayarak annesine sesleniyor. Video bir saatte iki milyon kez izlenmiş.

${fl.yasak?'Yayın yasağı videonun yayılmasını durdurmadı. Tersine, "Neyi saklıyorlar?" sorusunu büyüttü.':'Haber kanalları altyazı geçmeye başladı bile.'}

Haldun ayağa kalkıyor.

— Bakan bir açıklama bekliyor. Hemen.

Ne açıklayacaksın?`,
 ch:[{t:'"Durum tamamen kontrolümüz altındadır."',fx:{kamuoyu:10},set:{yalan:1},go:'k6'},
     {t:'"Rehinelerin güvenliği için çalışıyoruz. Şu an ayrıntı veremem."',fx:{kamuoyu:-5,masa:5},set:{durust:1},go:'k6'},
     {t:'Açıklama yapma. Sessiz kal.',fx:{kamuoyu:-10},go:'k6'}]},

k6:{c:0,art:'dawn',b:(st,fl)=>`Saat 06.05. Gün ağarıyor. Oya'nın ekibi gece boyunca binanın planlarını çıkardı.

— Komutanım, nöbet değişimini gördük. Saat 06.30'da içerideki beş kişiden ikisi uyumaya gidiyor. Ön kapıdan ve çatıdan aynı anda girersek on dört rehinenin çoğunu çıkarabiliriz.

*Çoğunu.* Bu kelime masada asılı kalıyor.

Selin hemen araya giriyor:

— Arman kardeşini istiyor, ölmeyi değil. Daha doğru dürüst konuşmadık bile.

Haldun saatine bakıyor. Hiçbir şey söylemiyor ama ne düşündüğü belli.

Kararı sen vereceksin.`,
 ch:[{t:'Baskın yok. Konuşmaya devam ediyoruz.',fx:{rehine:5},go:'m1'},
     {t:'Şafak baskınına izin ver.',p:(st,fl)=>cl(fl.kanit?0.45:0.35),ok:'k7a',no:'k7b',set:{erken:1},okfx:{kamuoyu:10,rehine:10},nofx:{rehine:-25,kamuoyu:-10}}]},

/* ================= BÖLÜM 2 · PAZARLIK (06.00–18.00) ================= */
k7a:{c:1,art:'raid',b:`Ekip altı dakikada içeride. Altı rehineyi binadan çıkarıyorlar; aralarında videodaki genç kadın Ece Yalın da var.

Ama Arman ve adamları kalan sekiz rehineyle türbin salonuna çekiliyor. Çelik kapıyı içeriden kaynakla kapatıyorlar. Kimse ölmedi; yine de içeri girmek artık çok daha zor.

Yirmi dakika sonra Arman arıyor. Sesi titriyor ama korkudan değil, öfkeden.

— Bana yalan söylediniz. Bir daha denerseniz kapakları açarım. Hepsini.`,
 ch:[{t:'Devam et.',set:{ihanet:1,alti:1},go:'m1'}]},
k7b:{c:1,art:'raid',b:`Çatı kapısına tuzak kurulmuş. Patlama ekibin ilk adamını geri fırlatıyor. İçeriden ateş açılıyor; teknisyen Mehmet Er bacağından yaralanıyor. Oya ekibi geri çekmek zorunda kalıyor.

Ardından Arman'ın sesi:

— Bunu siz istediniz.

Birinci dolusavak kapağı yarım metre açılıyor. Dokuz kilometre aşağıda Yeşilova'nın sirenleri çalmaya başlıyor. Kapak on dakika sonra yeniden kapanıyor. Bu bir uyarıydı.`,
 ch:[{t:'Devam et.',set:{ihanet:1,yarali:1},go:'m1'}]},

m1:{c:1,art:'room',b:(st,fl)=>`Saat 08.00. ${fl.ihanet
 ?`Arman iki saattir telefonu açmıyor. Sonunda açtığında tek bir şart koyuyor:

— Bundan sonra yalnızca o kadın polisle konuşurum. Sizinle değil.`
 :'Arman bu kez kendisi arıyor. Uykusuzluğu sesinden belli.'}

— Kardeşim için on iki saatiniz var. Saat 20.00'ye kadar Serdar bu barajın önünde olmazsa ilk kapağı tamamen açarım.

Selin kalemini bırakıyor.

— Yiyecek ve ilaç isteyecekler, diyor. İçeride su bitiyor. Karşılığında birkaç rehine isteyebiliriz.

Haldun itiraz ediyor:

— Mahkûm takası olmaz. Devlet bunu yapmaz.

Arman hâlâ hatta, cevap bekliyor.`,
 ch:[{t:'Yiyecek ve ilaç karşılığında iki rehine iste.',p:(st,fl)=>cl(0.5+(fl.kanit?0.15:0)-(fl.ihanet?0.2:0)-(fl.sert?0.1:0)),ok:'m2',no:'m2',okfx:{rehine:10},nofx:{rehine:-5},okset:{takas:1},noset:{takasRed:1}},
     {t:'Serdar\'la telefonda konuşmasını teklif et.',fx:{rehine:10,masa:-10},set:{kardes:1},go:'m2'},
     {t:'Teknik arıza bahanesiyle zaman kazan.',fx:{rehine:-5},set:{oyalama:1},go:'m2'}]},

m2:{c:1,art:(st,fl)=>fl.nuri?'room':'damLeak',b:(st,fl)=>`${fl.takas?`Saat 09.40. Yiyecek kolileri kapıya bırakılıyor. On dakika sonra iki kişi ellerini kaldırarak dışarı çıkıyor: ${fl.alti?'yaşlı bekçi Rıza ve teknisyen Yusuf':'stajyer Ece Yalın ve yaşlı bekçi Rıza'}. İkisi de sağlıklı.

`:fl.takasRed?`Saat 09.40. Arman teklifi reddediyor. "Kimse çıkmıyor. Yiyeceği de alın, kendiniz yiyin."

`:fl.kardes?`Saat 09.40. Serdar'ı cezaevinden telefona bağlıyorsunuz. İki kardeş üç dakika konuşuyor. Arman'ın sesi telefonu kapattıktan sonra bile daha yumuşak.

`:''}${fl.nuri
 ?`Saat 10.30. Nuri Bilgin kriz merkezine geliyor. Yetmiş bir yaşında; elinde sararmış bir defter var.

— Bu barajı otuz yıl önce biz yaptık, diyor. Yüklenici Akbel Yapı'ydı. Üçüncü galerinin betonu laboratuvar testinden geçmedi. İtiraz ettim, beni projeden aldılar. Arman o zaman benim çırağımdı. Her şeyi biliyor.

Defteri açıyor: ölçümler, tarihler, imzalar.

— Arman kardeşini bahane ediyor, diyor. Asıl istediği o rapor. Barajın kabul raporu sahte.`
 :`Saat 10.30. Oya'nın insansız hava aracı barajın arka yüzünü tarıyor. Görüntülerde bir şey dikkatini çekiyor: üçüncü galerinin çıkışından, yazın ortasında, ince ama sürekli bir su sızıyor.

— Muhtemelen önemli bir şey değil, diyor Oya. Eski barajlar terler.`}`,
 ch:[{t:'Barajda sessizce yapısal kontrol başlatın.',fx:{masa:-5},set:{kontrol:1},go:'m3'},
     {t:'Barajın yapısı şu an önceliğimiz değil. Rehinelere odaklanın.',go:'m3'}]},

m3:{c:1,art:'room',b:(st,fl)=>`${fl.kontrol?`Saat 11.20. Barajın bakım ekibinden kısa bir rapor geliyor: üçüncü galerideki ölçüm cihazları iki yıl önce "arızalı" diye kapatılmış. O tarihten beri kimse ölçüm yapmamış.

`:''}Saat 12.00. Haldun telefonu kapatıp masaya yaklaşıyor.

— Bakan akşam haberlerinden önce bu işin bitmesini istiyor. Oya Hanım hazır. Öğlen baskınına onay verirseniz arkanızda dururuz.

Haldun'un telefonu yeniden titriyor. Ekranı bir an görüyorsun: *Akbel Yapı · Yönetim Kurulu.*

${fl.kontrol||fl.nuri?'Haldun telefonu açmadan cebine koyuyor. Onu izlediğini fark ediyor.':'Haldun aramayı reddediyor.'}`,
 ch:[{t:'Siyasi takvime göre karar vermem. Baskın yok.',fx:{masa:-10,rehine:5},set:{direnc:1},go:'m4'},
     {t:'Akbel Yapı\'nın baraj dosyaları masama gelsin. Hemen.',req:(st,fl)=>fl.kontrol||fl.nuri||fl.ucuncu,why:'Barajla ilgili bir şüphen yok.',fx:{masa:-5},set:{dosya:1},go:'m4'},
     {t:'Öğlen baskınına hazırlanın. Ama son kararı ben veririm.',fx:{masa:10},set:{ogle:1},go:'m4'}]},

m4:{c:1,art:'tv',b:(st,fl)=>`Saat 14.00. ${fl.ogle?`Oya'nın ekibi pozisyon alırken Arman arıyor. Sanki her şeyi görüyormuş gibi:

— Çatıdaki adamlarınızı görüyorum. Geri çekin, yoksa konuşma biter.

Oya ekibi geri çekiyor. Öğlen baskını iptal.

`:''}Arman ikinci isteğini yineliyor: canlı yayın. Üç dakika. Kesintisiz.

Haldun kesin konuşuyor:

— Silahlı bir adama kürsü veremeyiz.

Selin başka türlü düşünüyor:

— Konuşursa rahatlar. Konuşamazsa patlar.

Oya teknik bir çözüm öneriyor:

— Sahte bir yayın kurabiliriz. Kamera kayıt yapar ama hiçbir şey yayına çıkmaz.`,
 ch:[{t:'On saniye gecikmeli, kontrollü bir yayına izin ver.',fx:{kamuoyu:-10,rehine:15},set:{yayin:1,iddia:1},go:'m4b'},
     {t:'Sahte yayın kur.',p:()=>0.5,ok:'m4b',no:'m4b',okfx:{rehine:5},nofx:{rehine:-20},okset:{sahte:1,iddia:1},noset:{yakalandi:1,ihanet:1}},
     {t:'Yayın isteğini reddet.',fx:{rehine:-10,masa:5},set:{yayinRed:1},go:'m5'}]},

m4b:{c:1,art:'tv',b:(st,fl)=>fl.yakalandi
 ?`Arman yayını içerideki küçük bir radyodan kontrol ediyor. Hiçbir kanalda kendi sesini duymayınca kamerayı yere çalıyor.

Hattan bir el silah sesi geliyor. Teknisyenlerden biri omzundan yaralandı.

— Bir daha bana yalan söylerseniz, diyor Arman, sonraki mermi boşa gitmeyecek.`
 :`${fl.sahte?'Arman kameraya konuşuyor. Söyledikleri yalnızca kriz merkezindeki ekrana düşüyor.':'Ekranlarda Arman\'ın yüzü beliriyor. Yorgun, sakallı, kameraya doğrudan bakıyor.'}

— Adım Arman Kesk. Taşlıca köyündenim. Köyüm bu barajın gölünün altında kaldı. Bu gece yaptığım şey suç, biliyorum. Ama üçüncü galeride çatlak var. Bu baraj otuz yıl önce eksik betonla yapıldı ve bunu bilenler sustu. Yeşilova'daki herkese sesleniyorum: tahliye isteyin. Bu yayın bitince bana ne yaparsanız yapın.

${fl.sahte?'Ekran kararıyor. Bunu kimse duymadı. Yalnızca sen ve masadakiler.':'Ekranlar karardığında masada kimse konuşmuyor. Haldun\'un yüzü bembeyaz.'}`,
 ch:[{t:'Devam et.',go:'m5'}]},

m5:{c:1,art:'room',b:(st,fl)=>`Saat 17.30. Selin hattan başını kaldırıyor.

— Halil Turan kalp krizi geçiriyor olabilir. Altmış iki yaşında, ilaçları evde kalmış. Arman doktor istiyor.

Oya hemen bir fırsat görüyor:

— Benim sağlıkçı bir operatörüm var. Doktor kılığında girer, içeriyi görür, belki bir dinleme cihazı bırakır.

Selin itiraz ediyor:

— Yakalanırsa her şey biter. ${fl.ihanet?'Zaten bize güvenmiyor. Bir daha asla güvenmez.':'Bir daha bize asla güvenmez.'}`,
 ch:[{t:'Gerçek bir doktor gönder.',fx:{rehine:10},set:{doktor:1},go:'r1'},
     {t:'Operatörü doktor kılığında gönder.',p:(st,fl)=>cl(fl.ihanet?0.4:0.6),ok:'r1',no:'r1',okfx:{rehine:5,masa:5},nofx:{rehine:-20},okset:{icerde:1},noset:{ihanet:1,doktorYak:1}},
     {t:'Doktor yok. Önce iki rehine bırakılsın.',fx:{rehine:-15,masa:5},set:{doktorRed:1},go:'r1'}]},

/* ================= BÖLÜM 3 · KIRILMA (18.00–30.00) ================= */
r1:{c:2,art:'alarm',b:(st,fl)=>`${fl.doktor?'Doktor bir saat içeride kalıyor. Halil Usta\'yı stabil hâle getiriyor. Çıkarken sana tek cümle söylüyor: "İçeridekiler sizden çok Arman\'ın yanındaki adamdan korkuyor."':fl.icerde?'Operatör bir saat sonra dönüyor. İçeride beş değil dört silahlı var. Patlayıcılar gerçek ama yalnızca kapak motorlarına bağlı. Biri, Bora adında genç bir çocuk, ağlamaklı. Dinleme cihazı yerinde.':fl.doktorYak?'Operatör üst aramasında yakalanıyor. Arman onu hırpalayıp geri gönderiyor. Halil Usta\'nın ilaçları içeri ancak bir saat sonra ulaşabiliyor.':'Arman rehine bırakmıyor. Halil Usta\'nın durumu hakkında da bir şey söylemiyor.'}

Saat 22.10. Baraj gölünün su seviyesi alarmı çalıyor. Seviye bir saatte on iki santim düştü. Yeşilova'dan geçen dere taşkın sınırına yaklaşıyor.

Oya: — Kapakları açtı. Uyarı veriyor.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin ekrana eğiliyor. Elleri titriyor. — Hayır, diyor. Kapaklar kapalı, motor kayıtlarına bakın. Bu su üçüncü galeriden geliyor. Çatlak açılıyor.'
 :'Ama kapak motorlarının kayıtlarında hiçbir hareket yok. Su başka bir yerden geliyor ve kimse nereden geldiğini bilmiyor.'}`,
 ch:[{t:'Yeşilova\'yı gece sessizce tahliye edin.',fx:{kamuoyu:-15,masa:-5},set:{tahliye:1},go:'r2'},
     {t:'Tahliye panik yaratır. Bekleyin ve izleyin.',go:'r2'},
     {t:'Arman\'a doğrudan çatlağı sor.',req:(st,fl)=>bildi(fl)||fl.kontrol||fl.kanit,why:'Çatlak hakkında bir bilgin yok.',fx:{rehine:5},set:{sor:1},go:'r2'}]},

r2:{c:2,art:'phone',b:(st,fl)=>fl.sor
 ?`— Demek biliyorsunuz, diyor Arman. Sesi ilk kez kırılıyor.

— Otuz yıl önce Nuri Usta itiraz etti, onu kovdular. Ben o raporun asıl kopyasını on yıldır saklıyorum. Valiliğe, bakanlığa, gazetelere gönderdim. Kimse zarfı açmadı bile.

Derin bir nefes alıyor.

— Kardeşimi bırakmasanız da olur komutan. Raporu açıklayın. Yeşilova'yı boşaltın. Ben teslim olurum. Ama yanımdakiler… Cevdet başka şeyler istiyor. Onu ben getirmedim. O beni buldu.`
 :fl.ihanet
 ?`Arman telefonu açıyor ama konuşmuyor. Arkadan bir adamın bağırdığını duyuyorsun:

— Oyalıyorlar! Aç şu kapağı!

Arman ona bağırıyor: "Cevdet, sus!" Sonra hat kesiliyor. Birkaç dakika sonra yeniden açılıyor.

— Saat 20.00 geçti, diyor Arman. Kapağı açmadım. Neden açmadığımı merak etmiyor musunuz?`
 :`Arman yorgun.

— Saat 20.00 geçti, diyor. Kapağı açmadım. Neden açmadığımı merak etmiyor musunuz? Sizden tek bir şey istiyorum: bu barajın kabul raporunu okuyun. Asıl olanı. Sonra beni arayın.`,
 ch:[{t:'"Söz veriyorum: rapor açıklanacak."',req:(st,fl)=>fl.sor||fl.iddia||fl.nuri,why:'Hangi rapordan söz ettiğini bilmiyorsun.',fx:{rehine:15},set:{soz:1},go:'r3'},
     {t:'"Önce rehineleri bırak. Sonra her şeyi konuşuruz."',fx:{rehine:-5},go:'r3'},
     {t:'Onu oyala. Oya\'ya zaman kazandır.',fx:{masa:5,rehine:-5},set:{oyala2:1},go:'r3'}]},

r3:{c:2,art:'room',b:(st,fl)=>`Saat 02.00. Kriz merkezinde yalnızca sen ve Haldun kaldınız. Haldun kapıyı kapatıyor.

— Açık konuşacağım. Akbel Yapı'nın sahibi bakanın kayınbiraderi. ${fl.dosya?'İstediğiniz dosyalar geldi. İçlerinde üçüncü galeriye ait laboratuvar raporu yok. Biri o sayfaları çıkarmış.':'O rapor gerçekse ve ortaya çıkarsa, bu yalnızca bir şirketi değil, hükümeti de götürür.'}

Bir süre susuyor.

— Rehineleri kurtarın, adamı tutuklayın. Rapor meselesini sonra, sakin kafayla konuşuruz. Kariyeriniz için söylüyorum. Gerçekten.`,
 ch:[{t:'"Hayır. Rapor kriz kayıtlarına girecek."',fx:{masa:-10},set:{kayit:1},go:'r4'},
     {t:'"Tamam. Rapor bu masada konuşulmayacak."',fx:{masa:10},set:{gom:1},go:'r4'},
     {t:'Hiçbir şey söyleme. Sabah raporu bir gazeteciye sızdır.',req:(st,fl)=>bildi(fl),why:'Elinde sızdıracak bir bilgi yok.',fx:{kamuoyu:15,masa:-15},set:{sizinti:1},go:'r4'}]},

r4:{c:2,art:'dam',b:(st,fl)=>`${fl.sizinti?'Saat 04.30. Bir gazetecinin numarasını çeviriyorsun. Konuşma dört dakika sürüyor. Sabah ilk baskıda manşet hazır: "Yıldızdere\'de sahte rapor iddiası."\n\n':''}Saat 05.00. ${fl.icerde?'Dinleme cihazından':'Selin\'in hattından'} bir fısıltı geliyor. Bora. On dokuz yaşında, Arman'ın yeğeni. Tuvalete gitme bahanesiyle bir telefon bulmuş.

— Abla, diyor Selin'e. Ben bunu istemedim. Cevdet patlayıcıların kumandasını kendinde tutuyor. Arman abi bile dokunamıyor. Ben çıkmak istiyorum.

Selin sana bakıyor. Bora'yı dışarı almak içerideki dengeyi tamamen değiştirebilir. Ya da Cevdet'in her şeyi fark etmesine yol açabilir.`,
 ch:[{t:'Bora\'nın teslim olmasına yardım et.',p:(st,fl)=>cl(fl.icerde?0.7:0.5),ok:'r5',no:'r5',okfx:{rehine:10},nofx:{rehine:-15},okset:{bora:1},noset:{boraYak:1}},
     {t:'Bora içeride kalsın. Gözümüz ve kulağımız olsun.',fx:{masa:5},set:{boraIc:1},go:'r5'}]},

r5:{c:2,art:'storm',b:(st,fl)=>`${fl.bora?'Bora ellerini havaya kaldırıp barajın servis kapısından çıkıyor. Oya\'nın ekibi onu yere yatırıp siperin arkasına sürüklüyor. İlk sözü şu oluyor: "Kumanda Cevdet\'te. Kırmızı. Sol cebinde."':fl.boraYak?'Bora kapıya ulaşamadan Cevdet onu yakalıyor. İçeriden bağırışlar geliyor. Bora\'yı rehinelerin yanına bağladılar. Cevdet artık herkesten şüpheleniyor, Arman\'dan bile.':'Bora içeride kaldı. Her iki saatte bir kısa mesajlar gönderiyor: "Uyuyorlar." "Cevdet uyumuyor."'}

Saat 12.00. Meteoroloji uyarı veriyor: akşam 20.00'den sonra bölgeye sert bir fırtına giriyor. Helikopterler uçamayacak.

${fl.tahliye?'Yeşilova\'nın tahliyesi yüzde seksen tamamlandı. İnsanlar tepelerdeki okullarda.':'Yeşilova\'da hayat normal akıyor. Pazar kurulmuş, okullar açık.'}

Bakanlık, Serdar Kesk'i cezaevinden bölgeye getirmeye hazır. Senin onayını bekliyorlar.`,
 ch:[{t:'Serdar\'ı getirin.',fx:{kamuoyu:-10},set:{serdar:1},go:'s1'},
     {t:'Serdar cezaevinde kalsın.',fx:{masa:5},go:'s1'}]},

/* ================= BÖLÜM 4 · SON TEKLİF (30.00–42.00) ================= */
s1:{c:3,art:'room',b:(st,fl)=>`${fl.serdar
 ?`Saat 15.00. Serdar Kesk'i kriz merkezine getiriyorlar. Kelepçeli, zayıf; abisine benziyor.

— Abim kimseyi vurmaz, diyor. Ama Cevdet vurur. Onunla cezaevinde tanıştım. Abimin derdi baraj, Cevdet'in derdi para. Biri ona bu iş için para verdi. Kim olduğunu bilmiyorum. Abim de bilmiyor.`
 :`Saat 15.00. Oya istihbarattan gelen dosyayı masaya bırakıyor.

— Cevdet Arı. İki silahlı soygun, bir cinayete teşebbüs. Arman'la geçen yıl tanışmış. Hesabına geçen hafta yüklü bir para yatmış. Kaynağı belirsiz.`}

${(fl.dosya||fl.kayit||fl.sizinti)&&bildi(fl)?'Mali suçlar ekibi parayı takip ediyor. İz bir paravan şirkette bitiyor. Şirketin geçen yıl tek bir müşterisi olmuş: Akbel Yapı.\n\nNuri Bilgin sandalyesine çöküyor. — Barajı patlatacaklardı, diyor. Suç Arman\'ın olacaktı. Sahte rapor da gölün dibinde sonsuza kadar kalacaktı.\n\n':''}Oya devam ediyor:

— Cevdet'i Arman'dan ayırmamız lazım. Arman tek başına kalırsa teslim olur. Cevdet kalırsa biri ölür.`,
 ch:[{t:'Selin\'i Arman\'la son görüşmeye hazırla.',set:{plan:'konus'},go:'s2'},
     {t:'Oya\'ya Cevdet\'i ayıracak bir baskın planı hazırlat.',set:{plan:'baskin'},go:'s2'},
     {t:'Para izini Arman\'a göster. Kimin için çalıştığını öğrensin.',req:(st,fl)=>(fl.dosya||fl.kayit||fl.sizinti)&&bildi(fl),why:'Para izini sürecek kanıtın yok.',fx:{rehine:10},set:{para:1,plan:'konus'},go:'s2'}]},

s2:{c:3,art:'storm',b:(st,fl)=>`Saat 19.00. Fırtınanın ilk rüzgârı kriz merkezinin camlarını titretiyor. Bir saat sonra helikopterler yere çakılı kalacak.

${fl.para
 ?`Arman'a para transferini satır satır okuyorsun. Uzun bir sessizlik oluyor.

— Cevdet… beni kullandı, diyor sonunda. Barajı patlatacaktı ve suç benim olacaktı. Benim yıllardır anlatmaya çalıştığım her şey de suyla birlikte gidecekti.`
 :`Arman arıyor. Sesi çok yorgun.

— Komutan, ikimizin de vakti doldu. Son sözünüzü söyleyin.`}

Son teklifin ne olacak?`,
 ch:[{t:'"Rapor açıklanacak. Sen de rehineleri bırakıp teslim olacaksın."',req:(st,fl)=>fl.soz&&(fl.kayit||fl.sizinti),why:'Raporu açıklama gücün yok ya da Arman\'a söz vermedin.',fx:{rehine:10},go:'s3t'},
     {t:'Serdar\'ı hatta bağla. Abisini teslim olmaya ikna etsin.',req:(st,fl)=>fl.serdar,why:'Serdar burada değil.',p:(st,fl)=>cl(0.55+(fl.para?0.2:0)-(fl.ihanet?0.15:0)),ok:'s3t',no:'s3b',okfx:{rehine:10},nofx:{rehine:-10}},
     {t:'Konuşma bitti. Fırtına başlamadan baskın.',go:'s3b'}]},

s3t:{c:3,art:'storm',b:(st,fl)=>`Saat 20.40. Fırtına barajın üstüne çöküyor. Arman kabul ediyor.

— Rehineleri kapıya getiriyorum, diyor.

Sonra hatta bir boğuşma sesi. Cevdet'in sesi:

— Kimse çıkmıyor! Kumanda bende!

${fl.bora?'Bora\'nın söylediği gibi: kırmızı kumanda, sol cep. ':''}Oya'nın keskin nişancısı yerinde ama yağmur görüşü bozuyor. Selin ceketini çıkarıyor:

— Silahsız girerim. Arman yanımda olursa Cevdet'i konuşturabilirim.`,
 ch:[{t:'Selin\'in silahsız girmesine izin ver.',p:(st,fl)=>cl(0.5+(fl.para?0.2:0)+(fl.doktor?0.1:0)+(fl.soz?0.1:0)),ok:'f1',no:'f1',okset:{sonuc:'teslim'},noset:{sonuc:'kayip'},okfx:{rehine:20},nofx:{rehine:-30}},
     {t:'Keskin nişancıya izin ver. Cevdet etkisiz hâle getirilsin.',p:(st,fl)=>cl(0.45+(fl.bora?0.25:0)+(fl.icerde?0.15:0)),ok:'f1',no:'f1',okset:{sonuc:'atis'},noset:{sonuc:'kayip'},okfx:{rehine:15},nofx:{rehine:-30}}]},

s3b:{c:3,art:'raid',b:(st,fl)=>`Saat 19.50. Fırtına on dakika uzakta. Oya'nın ekibi barajın gölgesinde bekliyor.

— İçeride ${fl.bora?'üç':'dört'} silahlı var, diyor Oya. ${fl.bora||fl.icerde?'Kumandanın kimde olduğunu biliyoruz. ':'Kumandanın kimde olduğunu bilmiyoruz. '}${fl.alti?'Türbin salonunun kapısı kaynaklı; içeri girmek zor olacak. ':''}Nereden gireceğiz?`,
 ch:[{t:'Nuri Usta\'nın bildiği eski bakım galerisinden.',req:(st,fl)=>fl.nuri,why:'Barajın eski planlarını bilen biri yok.',p:(st,fl)=>cl(0.7+(fl.icerde?0.1:0)+(fl.bora?0.1:0)),ok:'f1',no:'f1',okset:{sonuc:'baskin'},noset:{sonuc:'kayip'},okfx:{rehine:10},nofx:{rehine:-30}},
     {t:'Çatıdan ve ön kapıdan aynı anda.',p:(st,fl)=>cl(0.45+(fl.icerde?0.15:0)+(fl.bora?0.15:0)-(fl.erken?0.1:0)),ok:'f1',no:'f1',okset:{sonuc:'baskin'},noset:{sonuc:'kayip'},okfx:{rehine:10},nofx:{rehine:-30}},
     {t:'Önce elektriği kes, karanlıkta gir.',p:(st,fl)=>cl(0.5+(fl.bora?0.15:0)-(fl.boraYak?0.1:0)),ok:'f1',no:'f1',okset:{sonuc:'baskin'},noset:{sonuc:'kayip'},okfx:{rehine:10},nofx:{rehine:-30}}]},

/* ================= BÖLÜM 5 · ŞAFAK (42.00–48.00) ================= */
f1:{c:4,art:(st,fl)=>fl.sonuc==='kayip'?'raid':'damLeak',b:(st,fl)=>`${{
 teslim:'Selin, Arman\'ın koluna girmiş, fırtınanın içinden çıkıyor. Arkalarında rehineler tek sıra hâlinde yürüyor. Cevdet\'i Arman kendisi yere yatırmış; kırmızı kumanda çamurun içinde. Kimse ölmedi.',
 atis:'Tek bir atış. Cevdet yere yığılıyor; yaralı ama yaşıyor. Arman ellerini havaya kaldırarak kapıdan çıkıyor. Arkasında rehineler. Kimse ölmedi.',
 baskin:'Ekip içeri girdiğinde Cevdet kumandaya uzanıyor. İlk operatör ondan hızlı davranıyor. Arman silahını yere bırakıp diz çöküyor. Rehinelerin hepsi kurtarıldı; iki operatör hafif yaralı.',
 kayip:'Bir şeyler ters gidiyor. Cevdet kumandaya basıyor; kapak motorlarından biri patlıyor. Karanlıkta silah sesleri. Sabah sayım yapıldığında rehinelerden ikisi, Halil Turan ve teknisyen Mehmet Er, hayatını kaybetmiş. Cevdet öldü. Arman yaralı olarak yakalandı.'
}[fl.sonuc]}

Saat 23.30. Fırtına en sert hâlinde. Ama asıl tehlike geçmedi.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin telsizden bağırıyor: — Üçüncü galeri! Sızıntı iki katına çıktı! Göl seviyesini hemen düşürmezsek gövde dayanmaz!'
 :'Gece yarısı barajın gövdesinden derin, uzun bir çatırtı geliyor. Nöbetteki mühendisler ne olduğunu anlayamıyor.'}

${fl.tahliye?'Yeşilova boş. Herkes tepelerdeki okullarda.':'Yeşilova\'da yirmi iki bin kişi uyuyor.'}`,
 ch:[{t:'Dip savaklarını açın. Göl seviyesini kontrollü düşürün.',req:(st,fl)=>fl.nuri||fl.kontrol,why:'Barajın durumunu bilen kimse yok.',set:{savak:1},go:'f2'},
     {t:(st,fl)=>fl.tahliye?'Tahliyeyi tamamlayın. Kasabada kimse kalmasın.':'Kasabayı uyarın. Sirenler çalsın.',fx:{kamuoyu:-10},set:{gecUyari:1},go:'f2'},
     {t:'Bu bir yapı sorunu değil, fırtınanın etkisi. Bekleyin.',set:{bekle:1},go:'f2'}]},

f2:{c:4,art:(st,fl)=>sel(fl)==='yok'?'dawn':'flood',b:(st,fl)=>`${{
 yok:'Nuri Usta\'nın talimatlarıyla dip savakları açılıyor. Su, kontrollü olarak vadiye akıyor. Sabaha karşı göl seviyesi iki metre düşüyor. Çatlağın büyümesi duruyor. Baraj ayakta.',
 bos:'Sabaha karşı üçüncü galerinin duvarı çöküyor. Barajın yan gövdesi yırtılıyor; su vadiye boşalıyor. Yeşilova\'nın aşağı mahalleleri sular altında kalıyor. Ama kasaba boştu. Kimse ölmedi.',
 hafif:'Sirenler gece yarısı çalıyor. İnsanlar yağmurun altında, pijamalarıyla tepelere koşuyor. Sabaha karşı galerinin duvarı çöküyor; su aşağı mahallelere iniyor. Çoğu kişi kurtuluyor. Ama herkes değil.',
 agir:'Sabaha karşı üçüncü galerinin duvarı çöküyor. Barajın yan gövdesi yırtılıyor. Su, uyuyan Yeşilova\'ya iniyor.'
}[sel(fl)]}

Saat 09.00. Basın salonu dolu. Haldun yanında; elinde senin için hazırlanmış bir metin var. Başlığı kalın harflerle yazılmış: *Terör saldırısı başarıyla önlendi.*

Kameralar sana dönüyor.`,
 ch:[{t:'Gerçeği anlat: rapor, Akbel Yapı, her şey.',req:(st,fl)=>bildi(fl),why:'Anlatacak bir gerçek bilmiyorsun.',fx:{masa:-10},set:{acik:1},go:route},
     {t:'Haldun\'un metnini oku.',go:route}]},

/* ================= SONLAR ================= */
end_gercek:{c:4,art:'dawn',end:{k:'gercek',ti:'Gerçek',medal:'Kriz Masası Nişanı',tone:'good'},b:(st,fl)=>`Metni masaya bırakıyorsun ve kendi dosyanı açıyorsun.

Üçüncü galerinin laboratuvar sonuçları. Nuri Bilgin'in otuz yıllık itiraz dilekçesi. Akbel Yapı'nın imzaları.${fl.para?' Cevdet Arı\'nın hesabına yatan para ve o paranın geldiği paravan şirket.':''}

Haldun salonu terk ediyor. Akşam olmadan bakan istifasını açıklıyor.

${fl.savak?'Yıldızdere Barajı onarım için boşaltılıyor. Mühendislerin raporu kısa: gövde birkaç hafta içinde yıkılabilirdi. Yeşilova\'da kimse bunun ne kadar yakın olduğunu tam olarak anlamıyor; ama sen anlıyorsun.':'Barajın yıkılan yan gövdesi aylarca haberlerde gösteriliyor. Ama Yeşilova\'da tek bir can kaybı olmadı. Yeni barajın temeli bir yıl sonra atılıyor; bu kez bütün raporlar halka açık.'}

Arman Kesk yargılanıyor. Rehine almanın cezasını çekecek; bunu kendisi de kabul ediyor. Duruşmanın son günü Nuri Usta ön sırada oturuyor. Arman'a başıyla selam veriyor.

Altı ay sonra bir mektup geliyor. Stajyer mühendis Ece Yalın yazmış: "Yeni denetim ekibindeyim. Her betonu kendim kontrol ediyorum."

Bazı krizler, gerçeğe giden tek yoldur.`,ch:[]},

end_sessiz:{c:4,art:'press',end:{k:'sessiz',ti:'Sessiz zafer',medal:'Kriz Masası Nişanı',tone:'mid'},b:(st,fl)=>`"Terör saldırısı, güvenlik güçlerimizin kararlılığıyla önlenmiştir."

Flaşlar patlıyor. Ertesi sabah bütün gazetelerin ilk sayfasında senin fotoğrafın var.

Rehinelerin hepsi evlerine döndü. Arman Kesk "terör örgütü lideri" olarak yargılanıyor. Mahkemede rapordan söz etmeye çalıştığında hâkim sözünü kesiyor.

${fl.savak?'Baraj "rutin bakım" gerekçesiyle sessizce boşaltılıyor. Onarım ihalesini yine Akbel Yapı kazanıyor.':'Barajın çöküşü "fırtınanın yol açtığı doğal afet" olarak açıklanıyor. Yeniden yapım ihalesini yine Akbel Yapı kazanıyor.'}${fl.sizinti?'\n\nSızdırdığın haber bir hafta gündemde kalıyor. Sonra bakanlık "asılsız iddia" açıklaması yapıyor ve konu kapanıyor.':''}

Bir gece Nuri Bilgin'den kısa bir mesaj alıyorsun: "Siz de sustunuz."

Madalyanı bir çekmecede saklıyorsun.

Rehineleri kurtardın. Gerçeği kurtaramadın.`,ch:[]},

end_baskin:{c:4,art:'raid',end:{k:'baskin',ti:'Fırtınadaki baskın',medal:'Kriz Masası Nişanı',tone:'mid'},b:(st,fl)=>`"Terör saldırısı, güvenlik güçlerimizin kararlılığıyla önlenmiştir."

Ekranlarda Oya'nın ekibinin kask kamerası görüntüleri dönüyor: fırtınada, karanlıkta, kusursuz bir operasyon. Haber kanalları buna "Yılın operasyonu" diyor.

Rehinelerin hepsi kurtuldu. Cevdet Arı ve Arman Kesk tutuklandı.

Ama Arman sorgusunda yalnızca tek bir soru soruyor, her seferinde aynı soruyu:

— Raporu okudunuz mu?

${fl.savak?'Baraj "rutin bakım" gerekçesiyle sessizce boşaltılıyor. Onarım ihalesini yine Akbel Yapı kazanıyor.':'Barajın çöküşü "fırtınanın yol açtığı doğal afet" olarak açıklanıyor. Kimse soru sormuyor.'}

Oya'ya ve ekibine madalya veriliyor. Tören günü Oya yanına gelip alçak sesle soruyor: "Komutanım, o adam haklı mıydı?"

Cevap vermiyorsun.

Bir operasyonu kazandın. Asıl savaş ise hiç başlamadı.`,ch:[]},

end_bedel:{c:4,art:'raid',end:{k:'bedel',ti:'Ağır bedel',tone:'bad'},b:(st,fl)=>`${fl.acik?'Basın salonunda gerçeği anlatıyorsun: rapor, Akbel Yapı, her şey. Ama kimse dinlemiyor. Herkes yalnızca iki ismi soruyor.':'Haldun\'un metnini okuyorsun. Ama kimse dinlemiyor. Herkes yalnızca iki ismi soruyor.'}

Halil Turan. Mehmet Er.

Halil Usta'nın cenazesine gidiyorsun. Otuz bir yılını o barajda geçirmiş, emekliliğine dört ay kalmış. Mehmet yirmi altı yaşındaymış. İki ay sonra evlenecekmiş. Nişanlısı sana bakmıyor bile.

Soruşturma kurulu kararlarını tek tek inceliyor. Hiçbiri yasa dışı değil. Hiçbiri de yeterince iyi değil.

Arman yaralı yakalandı. Hastane yatağında sana bakıp "Ben bunu istemedim" diyor. Ona inanıyorsun. Bu hiçbir şeyi değiştirmiyor.

${fl.acik?'Rapor sonunda ortaya çıkıyor; Akbel Yapı yargılanıyor. Ama haberlerde hep o iki fotoğraf var.':'Rapor hiç ortaya çıkmıyor.'}

Bir kriz masasında verilen her karar, birinin hayatına dokunur.`,ch:[]},

end_sel:{c:4,art:'flood',end:{k:'sel',ti:'Yeşilova',tone:'bad'},b:(st,fl)=>`Sabah ışığı vadiye vurduğunda Yeşilova'nın aşağı yarısı yok. Çatılar, minareler, okul bahçesindeki basketbol potası çamurlu bir gölün içinden yükseliyor.

${sel(fl)==='hafif'?'Gece çalan sirenler binlerce kişiyi kurtardı. Ama on bir kişi geri dönemedi.':'Kimse uyarılmadı. Kayıp sayısı her saat artıyor.'}

${fl.sonuc==='kayip'?'Kontrol binasında kaybedilen iki rehinenin adı, bu kalabalık listede neredeyse kayboluyor.':'Rehinelerin hepsi kurtuldu. Ama artık bunu kimse konuşmuyor.'}

${fl.yayin?'Arman Kesk\'in canlı yayındaki uyarısı günlerce televizyonlarda gösteriliyor: "Üçüncü galeride çatlak var."':'Nuri Bilgin\'in sararmış defteri bir gazetenin eline geçiyor. Otuz yıl önceki itiraz dilekçesi manşetlerde.'}

Soruşturma kurulunun karşısında sana tek bir soru soruluyor:

— Bilmiyor muydunuz?

İşaretler oradaydı. Okumak senin işindi.`,ch:[]},

end_azil:{c:4,art:'press',end:{k:'azil',ti:'Görevden alındın',tone:'bad'},b:(st,fl)=>`${st.kamuoyu<=0
 ?'Ekranlarda yüzün dönüyor. "Kriz masası çöktü", "Devlet seyrediyor" manşetleri. Bakan seni aramıyor bile; görevden alındığını haberlerden öğreniyorsun.'
 :'Masadaki kimse artık sana bakmıyor. Oya emirlerini sorguluyor, Haldun raporlarını doğrudan bakana gönderiyor. Sabaha karşı bir emir geliyor: Kriz Masası\'nın başkanlığı başka bir generale devredildi.'}

Krizin geri kalanını bir otel odasındaki televizyondan izliyorsun. Sonunu başkası yazıyor.

Bir krizde güven, en değerli cephanedir. Seninki bitti.

Hikâye burada bitmek zorunda değildi. Masayı ve kamuoyunu aynı anda tutabilir miydin?`,ch:[]},

end_kayip:{c:4,art:'raid',end:{k:'kayip',ti:'Karanlık sabah',tone:'bad'},b:`Hattın öbür ucunda Arman artık konuşmuyor. Onun yerine yanındaki adamlardan birinin sert, soğuk sesi geliyor:

— Süreniz doldu.

İki el silah sesi.

Oya'nın ekibi on dakika sonra içeride. O sert sesin sahibi, Cevdet Arı, ateş açarak kaçmaya çalışıyor ve vuruluyor. Arman, rehinelerin arasında, başını ellerinin arasına almış oturuyor.

Sabah sayım yapılıyor. Vardiya şefi Halil Turan ve teknisyen Mehmet Er hayatını kaybetti.

Rehinelerin güveni bir kez kırıldığında, onu geri kazanmaya vakit kalmadı.

Hikâye burada bitmek zorunda değildi. Rehinelerin hayatını hangi kararda kaybettin?`,ch:[]}
};

registerTale({id:'kriz',ti:'Kriz Masası',genre:'Siyaset · Gerilim',color:'#70a3c4',cover:'cover',
 sub:'48 saat, 14 rehine, bir baraj ve kimsenin okumadığı bir rapor',
 pitch:'Gece yarısı bir barajın kontrol binası basılır; içeride on dört rehine, dokuz kilometre aşağıda uyuyan bir kasaba vardır. Kriz Masası\'nın başındasın. Bir yanında baskın isteyen bir general, bir yanında konuşmak isteyen bir müzakereci, karşında ise bir an önce bitmesini isteyen bir bakan yardımcısı. Rehineleri alan adam terörist mi, yoksa kimsenin dinlemediği bir uyarıcı mı?',
 chapters:[{ti:'İlk Temas',sub:'Saat 00.00–06.00'},{ti:'Pazarlık',sub:'Saat 06.00–18.00'},{ti:'Kırılma',sub:'Saat 18.00–30.00'},{ti:'Son Teklif',sub:'Saat 30.00–42.00'},{ti:'Şafak',sub:'Saat 42.00–48.00'}],
 stats:{rehine:60,kamuoyu:60,masa:65},statDefs:[['rehine','Rehine güveni','var(--green)'],['kamuoyu','Kamuoyu','var(--acc)'],['masa','Masa uyumu','var(--blue)']],
 fail:(st,fl,c)=>c<1?null:st.rehine<=0?'end_kayip':(st.kamuoyu<=0||st.masa<=0)?'end_azil':null,
 start:'k1',arts:ARTS,scenes:S});
})();
