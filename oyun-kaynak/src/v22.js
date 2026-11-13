/* ============ v22: RÜTBEYLE BÜYÜYEN KOMUTA SORUMLULUĞU ============ */
/* Yetki seviyesi: 0 Er/Onbaşı/Çavuş · 1 Astsubay · 2 Teğmen–Yüzbaşı · 3 Binbaşı–Albay · 4 General */
const AUTHLV=()=>T();
const AUTHN=['Tim','Astsubay yetkisi','Bölük komutanı yetkisi','Karargâh yetkisi','General yetkisi'];

/* Yetki seçenekleri: [metin, kalite, stat, etiket] — rütbe arttıkça ek seçenek olarak gelir */
const AX={
 1:{kara:[['Ateş ve hareket: bir grup bastırsın, diğeri ilerlesin',.9,'lider',''],['Keskin nişancıyı yüksek noktaya al, gözetleyerek ilerleyin',.85,'nisan','giz'],['El bombasıyla temizleyin, sonra girin',.5,'guc','atk'],['Herkes kendi hedefine, tim liderleri inisiyatif alsın',.35,'hirs','risk'],['Yedek mühimmatı dağıt, düzeni bozmadan devam',.8,'disiplin',''],['Telsizden üst komutadan teyit iste, beklet',.45,'disiplin','yavas']],
    deniz:[['Botları ikiye ayır: biri kollasın, diğeri yaklaşsın',.9,'lider',''],['Radar gölgesini kullanarak sessiz yaklaş',.85,'strat','giz'],['Uyarı atışıyla gücünü göster',.5,'nisan','atk'],['Tam yolla doğrudan üzerine git',.35,'hirs','risk'],['Hasar kontrol ekibini önceden hazır et',.8,'disiplin',''],['Merkezden teyit gelene kadar rotayı koru',.45,'disiplin','yavas']],
    hava:[['Kolu böl: biri örtü versin, diğeri hedefe girsin',.9,'lider',''],['Alçak irtifada arazi maskesi kullan',.85,'nisan','giz'],['Tüm mühimmatı ilk geçişte bırak',.5,'guc','atk'],['Yakıtı hiç düşünmeden takibe geç',.35,'hirs','risk'],['Kaçış koridorunu önceden işaretle',.8,'strat',''],['AWACS teyidini bekle, devriyede kal',.45,'disiplin','yavas']],
    masa:[['Ekipleri ikiye böl: biri izlesin, biri müdahale etsin',.9,'lider',''],['Kaynakları sessizce izole et, iz bırakma',.85,'strat','giz'],['Tüm hatları aynı anda kes',.5,'guc','atk'],['Onay beklemeden karşı saldırı başlat',.35,'hirs','risk'],['Yedek sistemleri devreye hazır tut',.8,'disiplin',''],['Raporu yaz, üst makamdan talimat bekle',.45,'disiplin','yavas']]},
 2:{kara:[['Takımları kademele: biri emniyet, biri manevra, biri ihtiyat',.9,'strat',''],['Havan ekibine sis atışı emret, örtü altında ilerle',.85,'strat','giz'],['Kanat takımını geniş bir çevirmeye gönder',.8,'lider','yavas'],['Bölüğün tamamıyla cepheden yüklen',.3,'hirs','kayip'],['Sağlık ekibini öne al, tahliye hattını kur',.75,'lider',''],['İHA görüntüsü gelene kadar bölüğü durdur',.5,'strat','yavas']],
    deniz:[['Filotillayı kademele: öncü, ana grup, ihtiyat',.9,'strat',''],['Helikopteri sonar taramasına gönder',.85,'strat','giz'],['Eskort gemiyi ticaret hattına kaydır',.8,'lider','yavas'],['Bütün gemilerle tek hatta hücum et',.3,'hirs','kayip'],['Hastane güvertesini ve kurtarma botlarını hazırla',.75,'lider',''],['Uydu görüntüsü gelene kadar manevrayı durdur',.5,'strat','yavas']],
    hava:[['Paketi kademele: SEAD önde, vuruş ortada, eskort arkada',.9,'strat',''],['Elektronik karıştırma altında giriş yap',.85,'strat','giz'],['Tanker rotasını öne çek, süreyi uzat',.8,'lider','yavas'],['Bütün kolu tek dalgada hedefe sok',.3,'hirs','kayip'],['CSAR ekibini havada beklet',.75,'lider',''],['Yeni keşif geçişi gelene kadar bekle',.5,'strat','yavas']],
    masa:[['Birimleri kademele: tespit, müdahale, ihtiyat',.9,'strat',''],['Sahte trafikle karşı tarafı oyala',.85,'strat','giz'],['Komşu birimden destek ekip iste',.8,'lider','yavas'],['Tüm ekiple tek noktaya yüklen',.3,'hirs','kayip'],['Kritik altyapı sahiplerini önceden uyar',.75,'lider',''],['Analiz tamamlanana kadar müdahaleyi durdur',.5,'strat','yavas']]},
 3:[['Tabur topçusuyla hazırlık atışı, ardından mekanize taarruz',.85,'strat','atk'],['Elektronik harple düşman haberleşmesini kör et',.9,'strat','giz'],['Komşu birlikle eşzamanlı baskı koordine et',.85,'lider',''],['İhtiyat bölüğünü erkenden harcayıp hızlı sonuç al',.4,'hirs','risk'],['Hava desteğini doğrudan ana hedefe tahsis et',.7,'strat','sivil'],['Karargâhtan yeni emir gelene kadar mevzide kal',.3,'disiplin','yavas']],
 4:[['Kolordu ateş desteğini tek ağırlık noktasında topla',.85,'strat','atk'],['Müttefik istihbaratıyla ortak hedefleme yap',.9,'strat',''],['Harekâtı basına kapat, sürprizi koru',.8,'disiplin','giz'],['Siyasi onayı beklemeden derinliğe taarruz et',.35,'hirs','risk'],['Kuvvetleri yeniden dağıt, ağırlık merkezini değiştir',.85,'lider',''],['Taarruzu bir gün ertele, durumu netleştir',.3,'disiplin','yavas']]
};
function axPool(lv,g){const P=AX[lv];return Array.isArray(P)?P:(P[g]||P.kara)}

/* Komuta kararı adımları: rütbe arttıkça harekâta yeni karar noktaları eklenir */
const CMDX={
 2:{n:'Komuta kararı',L:[
  ['İki takımdan biri telsizde sustu. Aynı anda hedefte bir fırsat penceresi açıldı.',['Fırsatı kullan, sessiz takımı en yakın timle kontrol ettir',.9,'lider',''],['Herkesi durdur, kayıp takımı bul',.55,'disiplin','yavas'],['Fırsatın üzerine bütün bölükle atıl',.3,'hirs','risk'],['Durumu üst komutana bildir, emir bekle',.45,'disiplin','yavas']],
  ['Bir mangan {dusman} mevzisinin önünde sıkıştı; destek ateşin ancak bir noktaya yetiyor.',['Havanı sıkışan mangaya ver, geri çek',.9,'strat',''],['Ateşi ana hedefe ver, manga kendini kurtarsın',.35,'hirs','kayip'],['Sis perdesi kur, iki noktayı da hafif besle',.75,'strat','giz'],['Kendin bir timle sıkışan mangaya git',.55,'hirs','risk']],
  ['Mühimmat beklenenden hızlı tükeniyor. İkmal aracı iki kilometre geride.',['İkmali öne çek, bir takımla yolunu emniyete al',.9,'lider',''],['Ateş disiplini emret, sadece görülen hedefe',.8,'disiplin',''],['Düşmandan ele geçirilen mühimmatı kullanın',.5,'guc','risk'],['Taarruzu durdur, ikmali bekle',.4,'disiplin','yavas']],
  ['{sehir} kesiminde siviller bir okula sığınmış; düşman da aynı binanın yakınında.',['Binayı ateş serbest bölgeden çıkar, sivilleri koridorla tahliye et',.9,'disiplin',''],['Binayı dolaşarak düşmanı kanattan kuşat',.75,'strat','yavas'],['Hızlı baskınla düşmanı temizle',.4,'hirs','sivil'],['Bölgeyi tamamen atla, başka hattan ilerle',.5,'strat','yavas']]]},
 3:{n:'Karargâh kararı',L:[
  ['Komşu tabur ağır baskı altında ve destek istiyor. Senin hedefin de henüz yarım.',['Bir bölüğü komşuya ayır, kalanla devam et',.9,'strat',''],['Kendi hedefini bitir, sonra destek ver',.55,'hirs','yavas'],['Bütün taburu komşuya kaydır',.4,'lider','risk'],['Kolordudan başka birlik gönderilmesini iste',.7,'disiplin','yavas']],
  ['İstihbarat, {dusman} komutasının 20 dakika sonra yer değiştireceğini bildiriyor.',['Hassas vuruş paketini hemen hazırla, teyitle vur',.9,'strat',''],['Özel kuvvetleri pusuya gönder',.75,'lider','giz'],['Teyit beklemeden bölgeyi topçuyla döv',.3,'hirs','sivil'],['Fırsatı bırak, ana plana sadık kal',.5,'disiplin','yavas']],
  ['Bir yüzbaşın emre rağmen geri çekildi; birliği dağılmak üzere.',['Yerine yardımcısını ata, birliği yeniden düzenle',.9,'lider',''],['Yüzbaşıyı telsizden ikna et, emri tekrarla',.6,'lider',''],['Hemen görevden al ve bölüğü ihtiyatla değiştir',.75,'disiplin','yavas'],['Görmezden gel, harekât bitince hesap sor',.35,'hirs','risk']],
  ['Basın, harekât bölgesinde canlı yayın yapmak istiyor.',['Güvenli bir noktada kontrollü erişim ver',.8,'disiplin',''],['Bölgeyi tamamen kapat',.7,'disiplin','giz'],['Serbest bırak, şeffaflık kazandırır',.35,'hirs','risk'],['Halkla ilişkiler subayına devret, işine dön',.85,'strat','']]]},
 4:{n:'Stratejik karar',L:[
  ['Hükümet ateşkes teklifini değerlendiriyor. Sahada üstünlük sende ama kayıplar artıyor.',['Kazanımları sabitle, ateşkese güçlü pozisyondan hazırlan',.9,'strat',''],['Son bir taarruzla daha çok toprak al',.4,'hirs','kayip'],['Hükümete açık rapor ver, kararı siyasete bırak',.75,'disiplin','yavas'],['Ateşkesi beklemeden birliklerini geri çek',.35,'disiplin','risk']],
  ['Müttefik taraf ({muttefik}) ortak harekâta katılmak için komutanın kendilerinde olmasını istiyor.',['Ortak karargâh kur, sektörleri paylaş',.9,'lider',''],['Teklifi reddet, tek başına devam et',.5,'hirs','yavas'],['Komutayı devret, desteği kesinleştir',.4,'disiplin','risk'],['Kararı Genelkurmay ile birlikte ver',.75,'strat','yavas']],
  ['İki cephe aynı anda ihtiyat istiyor. Elinde yalnızca bir zırhlı tugay var.',['Ağırlık merkezindeki cepheye ver, diğerini topçuyla tut',.9,'strat',''],['Tugayı ikiye böl, her cepheye yarısı',.35,'lider','kayip'],['Bekle, hangisi çökerse oraya gönder',.5,'disiplin','yavas'],['Tugayı kendi taarruzuna kat',.4,'hirs','risk']],
  ['Uluslararası gözlemciler sivil kayıp iddialarını soruşturmak istiyor.',['Kapıları aç, kayıtları ve görüntüleri paylaş',.85,'disiplin',''],['Kendi soruşturmanı başlat, sonuçları açıkla',.8,'strat','yavas'],['Erişimi güvenlik gerekçesiyle reddet',.35,'hirs','risk'],['Siyasi makama havale et',.55,'disiplin','yavas']]]}
};

function mkSteps(def){const g=grp8(def);S.oxSeen=S.oxSeen||[];const pk_=(pool,key)=>{const fr=pool.map((_,i)=>i).filter(i=>!S.oxSeen.includes(key+i));const i=fr.length?pick(fr):Math.floor(R()*pool.length);S.oxSeen=[...S.oxSeen,key+i].slice(-60);return i};
 const mod=R()<.55&&!['siber','kablo','fuze'].includes(def.id)?pick(modsFor(g)):null;const alt=k=>R()<.55?pk_(ALT8[k][g],k+g):null;let a0=alt('yak'),a1=alt('kri'),a2=alt('hed');if(a0!=null&&a1!=null&&a2!=null)a1=null;
 const steps=[{t:'int',p:pk_(OX_INT[g],'i'+g)},{t:'core',i:0,k:'yak',alt:a0},mod?{t:'mod'}:{t:'krz',p:pk_(OX_KRZ[g],'k'+g)},{t:'core',i:1,tm:1,k:'kri',alt:a1},{t:'core',i:2,k:'hed',alt:a2}];
 const lv=AUTHLV();
 /* rütbe arttıkça yeni karar noktaları */
 for(let L=2;L<=Math.min(4,lv);L++)steps.push({t:'cmd',lv:L,p:pk_(CMDX[L].L,'c'+L)});
 steps.push({t:'thl',p:pk_(OX_THL[g],'t'+g)});
 /* rütbe arttıkça mevcut adımlarda ek yetki seçenekleri */
 if(lv>=1){const used=new Set();const pickAx=L=>{const P=axPool(L,g);const fr=P.map((_,i)=>i).filter(i=>!used.has(L+':'+i));const i=fr.length?pick(fr):0;used.add(L+':'+i);return[L,i]};
  steps.forEach(s=>{if(s.t==='cmd')return;s.ax=[pickAx(Math.min(2,lv))];if(lv>=3&&(s.t==='core'||s.t==='int'))s.ax.push(pickAx(Math.min(4,lv)))})}
 return{g,mod,steps}}

function stepData(o,i,def){const s=o.steps[i];let r;
 if(s.t==='cmd'){const P=CMDX[s.lv].L[s.p];r=[P[0],P.slice(1)]}
 else if(s.t==='core'){if(s.alt!=null&&ALT8[s.k]&&ALT8[s.k][o.g]&&ALT8[s.k][o.g][s.alt]){const P=ALT8[s.k][o.g][s.alt];r=[P[0],P.slice(1)]}else{const ph=def.ph[s.i];r=[ph[0],ph.slice(1).map(x=>[x[0],x[1],x[2],''])]}}
 else if(s.t==='mod'){const P=MOD8[o.mod].ev;r=[P[0],P.slice(1)]}
 else{const P=(s.t==='int'?OX_INT:s.t==='krz'?OX_KRZ:OX_THL)[o.g][s.p];r=[P[0],P.slice(1)]}
 if(s.ax&&s.t!=='cmd'){const base=r[1].slice(0,3);s.ax.forEach(([L,k])=>{const x=axPool(L,o.g)[k];if(x)base.push([x[0],x[1],x[2],x[3],AUTHN[L]])});r=[r[0],base]}
 return r}

/* seçenek sırası: temel üç seçenek + yetki seçenekleri karışık ama sabit */
function ordsOf(o,opts){const base=(o.ords&&o.ords[o.st])||[0,1,2];const n=opts.length;if(n<=3)return base.filter(i=>i<n);const out=base.slice();for(let k=3;k<n;k++){const pos=(S.day*7+o.st*3+k*5)%(out.length+1);out.splice(pos,0,k)}return out}

function stepLabel(o,i){const s=o.steps&&o.steps[i];if(s&&s.t==='cmd')return CMDX[s.lv].n;const g=o.g||'kara';if(s&&s.t==='thl')return g==='masa'?'Konsolidasyon':g==='hava'||g==='deniz'?'Dönüş':'Tahliye';
 const bi=o.steps?o.steps.slice(0,i).filter(x=>x.t!=='cmd').length:i;if(bi===2&&o.mod&&MOD8[o.mod])return MOD8[o.mod].n;return OPSTEP8[bi]||'Karar'}

/* Komuta sorumluluğu şeridi */
const RESPL=[
 ['Kendi tüfeğin ve timin','Emirleri uygularsın.'],
 ['Tim ve takım düzeni','Ek taktik seçenekler: ateş ve hareket, mühimmat düzeni.'],
 ['Bölük, destek ateşi, tahliye','Ek komuta kararı ve bölük seçenekleri.'],
 ['Tabur/alay, topçu, elektronik harp','Karargâh kararları ve kademeli yetki seçenekleri.'],
 ['Tugay ve üstü, müttefik, siyaset','Stratejik kararlar; sonuçlar ülke çapında yankılanır.']];
function cmdStrip(o){const lv=AUTHLV();const n=o.steps?o.steps.length:6;const extra=o.steps?o.steps.filter(s=>s.t==='cmd').length:0;
 return `<div class="resp"><div class="resp-l"><span class="lbl">Komuta sorumluluğu</span><b>${esc(AUTHN[lv])}</b><small>${esc(RESPL[lv][0])}</small></div><div class="resp-r"><div class="pips">${[0,1,2,3,4].map(i=>`<i class="${i<=lv?'on':''}"></i>`).join('')}</div><small>${n} karar${extra?` · +${extra} komuta`:''}</small></div></div>`}


