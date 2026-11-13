/* ============ KOMUTAN KİŞİLİKLERİ ============ */
const CMDP={
 sert:{n:'Sert ve talepkâr',good:['Bu sefer kusur bulamadım {ad}. Bu, kusur aramayacağım anlamına gelmiyor.','Temiz iş. Şimdi git, adamlarına bir saat uyku ver; yarın daha zorunu vereceğim.','Kayıp yok, hedef tamam. Raporunu 06:00\'da masamda istiyorum, tek sayfa.','{sehir} kesiminden iyi haberler geliyor. Sicilinde bir artı daha var; şımarma.','Disiplinli ve soğukkanlı. Ordunun ihtiyacı olan tam olarak bu.','Planlamandan memnunum. İcrayı da böyle tutarsan seni yukarıda görürüm.','Bugün beni utandırmadın. Bunu sık duymazsın, hatırla.','Adamların seni dinliyor {ad}. Bunu hak etmeye devam et.'],
  mid:['Hedefe vardın ama yolda iki hata yaptın. Hangileri olduğunu bu gece yaz, yarın konuşacağız.','Yarım iş bitmiş iş değildir. Kayıp raporunu tek tek okuyacağım.','Şansın yaver gitti. Şansa güvenen komutan uzun yaşamaz.','Telsiz disiplini berbattı. Yarın tüm tim muhabere tatbikatına.','Sonuç kabul edilebilir, süreç değil. Bir dahakine planı benimle konuşmadan sahaya çıkma.','{sehir} hattı tutuldu ama gereğinden pahalıya. Bunun hesabını vereceksin.','Ortalama bir gün. Ben ortalama asker yetiştirmiyorum.','Kararın doğruydu, zamanlaman yanlış. Saati ben değil, düşman belirler.'],
  bad:['Hazır ol! Bu kararla adamlarını ölüme yürütüyordun!','Bunu siciline yazıyorum {ad}. Bir daha aynı hatayı görürsem rütbeni tartışırız.','Benim birliğimde bu tür emir olmaz. Odadan çık ve kendini topla.','Kayıp raporunu ailelere sen anlatacaksın. Ağır gelecek; gelmeli de.','Eğitimde öğrendiğin her şeyi unuttun mu? Yarın 05:00\'te poligonda ol.','Cesaret ile aptallık arasındaki farkı öğrenmen gerek. Hem de hemen.','Bu rezaletin bedelini bütün tabur ödedi. Gözümün önünden çekil.','Bir daha düşünmeden emir verdiğini görürsem seni masa başına alırım.']},
 babacan:{n:'Babacan ama dikkatli',good:['Aferin evlat. Bu gece adamlarınla bir çay iç; hak ettiniz.','Seni izlerken gençliğimi gördüm. Ama benden daha soğukkanlısın.','Herkes sağ salim döndü ya, gerisi teferruat. İyi iş çıkardın.','{sehir:de}ki halk birliğinizden memnun. Askerlik biraz da budur.','Bugün doğru olanı yaptın, kolay olanı değil. Bunu unutma.','Raporun benim masamda ama önce bir şey yesene. Sonra konuşuruz.','Senin gibi bir {rutbe} her komutana nasip olmaz.','İyi bir lider adamlarını tanır. Sen tanıyorsun. Devam.'],
  mid:['Olmadı demeyeceğim ama tam da oldu sayılmaz. Otur, bir harita açalım.','Hepimiz böyle günler yaşadık. Önemli olan yarın aynı yere düşmemek.','İki yaralın var, ziyaretlerine git. Onlar da senin kadar yorgun.','Planın iyiydi ama sahada esnek olman gerek. Plan ilk kurşuna kadar geçerlidir.','Kızmıyorum, öğreniyorsun. Ama çok yavaş öğrenme.','Telsizdeki sesin titriyordu. Korku normal; belli etmemek senin işin.','Fena başlamadın, kötü bitirmedin. Ortası üzerine konuşmamız lazım.','{sehir} için bir dahaki plan daha sağlam olsun; ben arkandayım.'],
  bad:['Oğlum ne yaptın sen? Otur. Önce sakinleş, sonra anlat.','Kızgın değilim, kırgınım. Bunu senden beklemezdim.','Bir şehit ailesine telefon açmak ne demek bilir misin? Bu gece öğreneceksin.','Hata yapmak insanlık; aynı hatayı tekrar etmek ihmal. Dikkat et.','Bugün gördüğün her şeyi deftere yaz. Bir daha asla yaşamamak için.','Bu kararların ağırlığını taşıyamayacaksan söyle, seni koruyayım.','Komuta yalnızlıktır evlat. Ama bugünkü yalnızlığı kendin seçtin.','Yarın sabah konuşacağız. Şimdi git, adamlarının yanında ol.']},
 soguk:{n:'Soğukkanlı stratejist',good:['Sonuçlar beklenen aralıkta. Tebrik ederim, verimlisin.','Düşman tepkisini doğru öngördün. Bu yetenek nadir bulunur.','Kayıp sıfır, hedef tamam. Bir sonraki aşama için seni değerlendiriyorum.','{sehir} kesiminde inisiyatif artık bizde. Bu senin hamlen.','Planlama, icra ve rapor tutarlı. Kurmay olabilirsin.','Satranç oynuyorsun {ad}, çoğu insan dama. Böyle kal.','Analiz ettim: kararlarının yüzde doksanı doğruydu. Kalan onu bul.','İyi. Şimdi aynısını daha az kaynakla yapmanı isteyeceğim.'],
  mid:['Hedef alındı, fiyatı yüksek. Maliyet de bir sonuçtur.','Verilerine baktım: ikinci fazda tereddüt ettin. Tereddüt bedava değildir.','Kabul edilebilir. Mükemmel değil. Aradaki farkı kapat.','Düşman senin bir adım önündeydi. Bunu bir daha yaşamayalım.','Raporunda üç tutarsızlık var. Yarın düzeltilmiş halini getir.','{sehir} hattında kazanım var ama kalıcı değil. Tahkim etmezsen kaybedersin.','Taktik doğru, stratejik okuma eksik. Büyük resme bak.','Bu sonuç ne beni ne de seni ilerletir. Bir dahakine sürpriz yap.'],
  bad:['Hesap basit: senin kararın, bizim kaybımız.','Bu bir hata değil, bir öngörü eksikliği. İkincisi daha tehlikeli.','Planında düşmanı hiç hesaba katmamışsın. Savaş tek kişilik oynanmaz.','Raporunu okudum. Bir daha okumak zorunda kalmak istemiyorum.','Rakamlar acımasızdır {ad}. Bugün sana karşı konuştular.','Kayıp oranı kabul edilemez. Planlama sürecinden geçici olarak alındın.','Duygularınla karar verdin. Burada duygu bir lükstür.','Bir sonraki hatanın bedelini başkası ödemesin. Kendine gel.']},
};
const PROMO=['Bu apoletler omzunda ağır olacak. Taşıyabileceğini biliyorum.','Yeni rütben hayırlı olsun. Artık daha fazla insanın hayatı senin kararlarına bağlı.','Bugün sadece bir rütbe almadın; bir sorumluluk aldın. Unutma.','Seni ilk gördüğümde bu günün geleceğini tahmin etmiştim. Yanılmadım.','Tebrik ederim. Şimdi daha az uyuyacak, daha çok düşüneceksin.','Rütbe kazanılır, saygı her gün yeniden kazanılır.'];
function cmdLine(kind){const p=CMDP[S.cmdP]||CMDP.sert;S.lastL=S.lastL||[];let pool=p[kind].filter(l=>!S.lastL.includes(l));if(!pool.length){S.lastL=[];pool=p[kind]}const l=pick(pool);S.lastL.push(l);S.lastL=S.lastL.slice(-14);
 return fill(l,{ad:S.name.split(' ').pop(),sehir:S.op?S.op.city[0]:NAT[S.nation].cities[0][0],rutbe:myRank()})}

/* ============ PARA ============ */
const CUR_S={TR:'₺',ABD:'$',RUS:'₽',CIN:'¥',ALM:'€',IGB:'£',FRA:'€',JPN:'¥',PAK:'₨',AZE:'₼',ISR:'₪'};
const money=v=>Math.round(v).toLocaleString('tr-TR')+' '+(CUR_S[S.nation]||'');
const SALARY=[3500,6000,9500,15000,24000];

/* ============ İLİŞKİ ============ */
const NEEDS={
 ara:{t:p=>`${p}: "Bu akşam beni arar mısın? Sesini duymak istiyorum."`,dl:1,fix:'msg',miss:7,ok:5},
 bulus:{t:p=>`${p}: "Bu hafta bir akşam görüşebilir miyiz? Seni çok özledim."`,dl:3,fix:'date',miss:15,ok:10},
 goruntu:{t:p=>`${p}: "Görüntülü konuşalım mı? Yüzünü unutacağım neredeyse."`,dl:2,fix:'video',miss:9,ok:7},
};
function partnerTick(notes){
 const P=S.partner;if(!P)return;P.last=P.last??S.day;const gap=S.day-P.last;
 let dec=(P.m?.8:1.6)+Math.max(0,gap-2)*(P.m?.6:1.2);P.aff=clamp(P.aff-dec);
 if(P.need&&S.day>P.need.dl){const N=NEEDS[P.need.k];P.aff=clamp(P.aff-N.miss);notes.push(`<span class="red">${ek(esc(P.name),'nin')} isteğini karşılamadın.</span> Kırgın: bağlılık −${N.miss}.`);P.need=null}
 if(!P.need&&R()<.28){const k=pick(Object.keys(NEEDS));P.need={k,dl:S.day+NEEDS[k].dl}}
 if(P.aff<=0)return partnerBreak('ihmal');
 if(R()<.12)partnerEvent();
}
function needDone(kind){const P=S.partner;if(P&&P.need&&NEEDS[P.need.k].fix===kind){P.aff=clamp(P.aff+NEEDS[P.need.k].ok);toast(P.name+' çok mutlu oldu. Bağlılık +'+NEEDS[P.need.k].ok);P.need=null}if(P)P.last=S.day}
function partnerEvent(){
 const P=S.partner;if(!P)return;const n=esc(P.name);const L=[];
 L.push({ti:'Doğum günü',body:`<p>Bugün ${ek(n,'nin')} doğum günü. Takvimde kırmızıyla işaretlemiştin… değil mi?</p>`,ch:[['Komutandan kısa izin al, sürpriz yap',()=>{P.aff=clamp(P.aff+20);S.trust=clamp(S.trust-2);P.last=S.day;addSt('mental',6)}],[`Çiçek ve hediye gönder (${money(800)})`,()=>{if(S.money<800){toast('Paran yetmedi; sadece mesaj attın.');P.aff=clamp(P.aff-6);return}S.money-=800;P.aff=clamp(P.aff+11);P.last=S.day}],['Sadece mesaj at',()=>{P.aff=clamp(P.aff-6)}]]});
 L.push({ti:'Kıskançlık',body:`<p>${n}, birliğin paylaştığı bir fotoğrafta yanındaki kişiyi sordu. Sesi gergindi.</p>`,ch:[['Sakince açıkla, güven ver',()=>{P.aff=clamp(P.aff+5);P.last=S.day}],['"Bana güvenmiyor musun?" diye sinirlen',()=>{P.aff=clamp(P.aff-12)}]]});
 if(P.aff<55)L.push({ti:'Uzaklaşma',body:`<p>${n}: "Seni çok az görüyorum. Bu ilişki böyle yürümez."</p>`,ch:[['Söz ver: ilk izinde onunla olacaksın',()=>{P.aff=clamp(P.aff+8);P.need={k:'bulus',dl:S.day+4}}],['"Görevim önemli, anlamalısın"',()=>{P.aff=clamp(P.aff-10);addSt('hirs',3)}],['"Belki de bitirmeliyiz"',()=>partnerBreak('sen')]]});
 if(P.aff>70&&!P.m)L.push({ti:'Ailesiyle tanışma',body:`<p>${n} ailesiyle tanışmanı istiyor. Bu hafta sonu bir akşam yemeği.</p>`,ch:[['Kabul et, en iyi kıyafetini giy',()=>{P.aff=clamp(P.aff+12);addSt('mental',5);P.last=S.day}],['Görevi bahane edip ertele',()=>{P.aff=clamp(P.aff-8)}]]});
 if(S.world.war&&P.aff<60)L.push({ti:'Ültimatom',body:`<p>${n} ağlayarak aradı: "Her gece haberleri izleyip seni ölü mü diri mi diye bekliyorum. Ya ben ya o üniforma."</p>`,ch:[['"Bu üniforma benim kaderim"',()=>{P.aff=clamp(P.aff-30);addSt('hirs',8)}],['"Savaş bitince izin alacağım, söz"',()=>{P.aff=clamp(P.aff+12);addSt('hirs',-3)}]]});
 const e=pick(L);pushModal({k:'Özel hayat',ti:e.ti,body:e.body,ch:e.ch.map(([t,f])=>({t,fn:()=>{f();log(P.name+': '+e.ti)}}))});
}
function partnerBreak(why){
 const P=S.partner;if(!P)return;const n=esc(P.name);S.partner=null;S.exes=[...(S.exes||[]),P.name];S.heartbreak=S.day+10;
 addSt('hirs',12);addSt('mental',-15);S.dark=clamp(S.dark+4);log(P.name+' ile ayrıldınız.');
 const txt=why==='sen'?`<p>"Belki de bitirmeliyiz" dedin. Telefonun öbür ucunda uzun bir sessizlik oldu. Sonra ${n} sadece "Peki" dedi.</p>`:`<p>${n} son mesajını gönderdi: <i>"Seni bekleyemem. Hep bir sonraki görev, hep bir sonraki gece. Kendine iyi bak."</i></p>`;
 pushModal({k:'Ayrılık',ti:'Kapanan bir kapı',art:scene('kisla'),body:txt+`<p>O gece koğuşa dönmedin. Spor salonunda torbaya saatlerce vurdun, ta ki eldivenlerin kanla ıslanana dek. Sabah içtimasında gözlerinde başka bir şey vardı: <b>hırs</b>.</p>${fx({'Hırs':12,'Ruh hali':-15})}<p class="small muted">10 gün boyunca ruh halin daha zor toparlanacak, ama antrenmanlarda daha hırslı olacaksın.</p>`});
}

/* ============ HİMAYE BÖLGELERİ ============ */
function addRegion(ci,from){S.regions=S.regions||[];if(S.regions.find(r=>r.c===ci))return;const used=S.regions.map(r=>r.n);
 const cs=NAT[from].cities.filter(c=>!c[3]).map(c=>c[0]+' bölgesi').filter(n=>!used.includes(n));const dirs=['kuzey','güney','doğu','batı','orta','iç'];const n=cs.length?cs[0]:`${NAT[from].n} ${dirs.find(d=>!used.includes(`${NAT[from].n} ${d} sınır bölgesi`))||'yeni'} sınır bölgesi`;
 S.regions.push({c:ci,n,from,guv:35+Math.round(R()*15),eko:30+Math.round(R()*15),mem:30+Math.round(R()*15),pop:20+Math.round(R()*60),d:S.day,act:0});
 log('Yeni himaye bölgesi: '+n);news(`${NAT[S.nation].n}, ${bek(n,'de')} yönetimi devraldı.`,'saha')}
function loseRegion(ci,why){const r=(S.regions||[]).find(x=>x.c===ci);if(!r)return;S.regions=S.regions.filter(x=>x!==r);addSt('mental',-5);S.trust=clamp(S.trust-4);news(`${r.n} elden çıktı: ${why}.`,'saha');log(r.n+' kaybedildi.')}
const RACT={
 devriye:['Garnizon devriyesi',0,{guv:7}],guclen:['Garnizonu güçlendir',0,{guv:14,mem:-3}],polis:['Yerel güvenlik gücü eğit',3,{guv:8,mem:5}],
 ticaret:['Pazar ve ticaret yolu aç',8,{eko:12,mem:4}],yardim:['İnsani yardım ve altyapı',8,{mem:14,eko:3}],tahkim:['Sınırı tahkim et',11,{guv:10,tah:1}],
};
function regionAct(v){const[ci,a]=v.split('|');const r=S.regions.find(x=>x.c===+ci);const A=RACT[a];if(!r||!A)return;if(S.rank<A[1])return toast('Bu karar için rütben yetmiyor.');if(r.act===S.day)return toast('Bu bölgeye bugün zaten bir karar verdin.');if(!useAP())return;
 Object.entries(A[2]).forEach(([k,v])=>{if(k==='tah')r.tah=(r.tah||0)+1;else r[k]=clamp(r[k]+v*(.8+S.st.lider/250))});r.act=S.day;S.xp+=4;log(r.n+': '+A[0]);toast(r.n+': '+A[0]+' kararı uygulandı.');save();render()}
function regionDaily(notes){
 const R_=S.regions||[];if(!R_.length)return;let inc=0,good=0;const war=S.world.war;let ev=false;
 R_.slice().forEach(r=>{r.guv=clamp(r.guv-1.2+(r.tah||0)*.3);r.eko=clamp(r.eko+(r.guv>50?.8:-1)+(r.mem>50?.6:-.6));r.mem=clamp(r.mem+(r.guv>40?.3:-1.4)+(r.eko>50?.5:-.4)-(war?.8:0));
  inc+=r.eko*r.pop*1.5;if(r.mem>60&&r.guv>60)good++;
  if(r.guv<12||r.mem<8){loseRegion(r.c,'yerel ayaklanma');transferCell(r.c,r.from);notes.push(`<span class="red">${esc(r.n)} ayaklanmayla elden çıktı.</span>`);return}
  if(!ev&&R()<.13){ev=true;regionEvent2(r)}});
 S.treasury=(S.treasury||0)+inc;if(good){S.trust=clamp(S.trust+good*.4);S.xp+=good*2}
 notes.push(`Himaye bölgeleri: ${R_.length} bölge · günlük gelir <b>${money(inc)}</b> · ulusal hazine ${money(S.treasury)}.`);
}
function regionEvent(r){const n=esc(r.n);const atk=(S.world.war===r.from)||rel(S.nation,r.from)<-50;
 const L=[];
 if(atk)L.push({ti:'Karşı taarruz',body:`<p>${flag(r.from,20)} ${esc(NAT[r.from].n)} kuvvetleri ${bek(n,'i')} geri almak için taarruza geçti! Bölge güvenliği: ${Math.round(r.guv)}.</p>`,ch:[['Garnizonu tahkimatlara çek, takviye ve hava desteği iste',()=>{const p=clamp(.35+r.guv/150+(r.tah||0)*.08+S.st.strat/300,.1,.92);if(R()<p){r.guv=clamp(r.guv+5);S.trust=clamp(S.trust+4);toast('Taarruz püskürtüldü. Bölge elimizde.');news(`${bek(r.n,'e')} yönelik taarruz püskürtüldü.`,'saha')}else{loseRegion(r.c,'düşman karşı taarruzu');transferCell(r.c,r.from)}}],['Sivilleri tahliye edip bölgeyi boşalt',()=>{loseRegion(r.c,'kontrollü çekilme');transferCell(r.c,r.from);addSt('lider',.5)}]]});
 if(r.mem<45)L.push({ti:'Protesto',body:`<p>${bek(n,'de')} halk su ve elektrik kesintilerini protesto ediyor. Kalabalık büyüyor.</p>`,ch:[['Temsilcilerle görüş, acil altyapı ekibi gönder',()=>{r.mem=clamp(r.mem+12);r.eko=clamp(r.eko-3)}],['Sokağa çıkma yasağı ilan et',()=>{r.guv=clamp(r.guv+8);r.mem=clamp(r.mem-15)}]]});
 if(r.guv<55)L.push({ti:'Kaçakçı çetesi',body:`<p>${bek(n,'de')} silah ve yakıt kaçakçılığı yapan bir çete tespit edildi.</p>`,ch:[['Yerel polisle ortak operasyon',()=>{r.guv=clamp(r.guv+12);r.mem=clamp(r.mem+3)}],['Görmezden gel, ticaret aksamasın',()=>{r.eko=clamp(r.eko+4);r.guv=clamp(r.guv-8)}]]});
 L.push({ti:'Pazar yeri',body:`<p>${bek(n,'de')} yeniden açılan pazar yerine tüccarlar akın ediyor. Vergi düzenlemesi isteniyor.</p>`,ch:[['Düşük vergi, ticareti canlandır',()=>{r.eko=clamp(r.eko+10);r.mem=clamp(r.mem+4)}],['Yüksek vergi, hazineye kaynak',()=>{S.treasury=(S.treasury||0)+r.pop*120;r.mem=clamp(r.mem-8)}]]});
 L.push({ti:'Okul açılışı',body:`<p>${bek(n,'de')}ki köylüler, savaşta yıkılan okulun yeniden açılmasını istiyor.</p>`,ch:[['Askerî istihkâmla okulu onar',()=>{r.mem=clamp(r.mem+14)}],['Şimdi önceliğimiz güvenlik',()=>{r.guv=clamp(r.guv+4);r.mem=clamp(r.mem-4)}]]});
 const e=pick(L);pushModal({k:'Himaye bölgesi · '+r.n,ti:e.ti,body:e.body,ch:e.ch.map(([t,f])=>({t,fn:()=>{f();log(r.n+': '+e.ti)}}))});
}
function transferCell(ci,to){S.world.cells[ci]=to}

/* ============ HABER KANALLARI ============ */
const CHN={ulusal:['Harbiye Haber','#c8453b'],global:['Küresel Güvenlik Ağı','#3f86e8'],saha:['Cephe Hattı','#e39540'],ekonomi:['Savunma Ekonomisi','#33aa5f']};
function feed(ch,h,b,c,resp){const W=S.world;W.feed=W.feed||[];W.feed.unshift({id:'f'+S.day+'_'+Math.floor(R()*1e6),d:S.day,ch,h,b:b||'',c:c||[],r:resp||null,done:false});W.feed=W.feed.slice(0,40)}
const GUN=[
 ['global','{a} yeni nesil hava savunma sistemini envantere aldı','Analistler, sistemin bölgedeki güç dengesini etkileyebileceğini söylüyor.',(a)=>{S.world.p[a]+=1}],
 ['ekonomi','{a} savunma bütçesini yüzde {n} artırdı','Artışın büyük bölümü İHA, mühimmat ve siber birliklere ayrılacak.',(a)=>{S.world.p[a]+=1}],
 ['ekonomi','{a} ile {b} arasında savunma sanayii görüşmeleri','İki ülke ortak üretim ve teknoloji transferini masaya yatırdı.',(a,b)=>setRel(a,b,rel(a,b)+3)],
 ['saha','{a} sınır bölgesinde büyük çaplı tatbikat başlattı','Tatbikata tank, topçu ve İHA birlikleri katılıyor; komşular tedirgin.',(a,b)=>setRel(a,b,rel(a,b)-3)],
 ['global','{a} dışişleri: "{b:nin} askerî hareketliliği bölgesel istikrarı tehdit ediyor"','Açıklama sonrası iki ülke büyükelçileri karşılıklı olarak bakanlıklara çağrıldı.',(a,b)=>setRel(a,b,rel(a,b)-4)],
 ['ekonomi','{a} yeni enerji koridoru projesini açıkladı','Proje bölgesel ticaret ve güvenlik dengelerini değiştirebilir.'],
 ['global','{a} askerî keşif uydusunu yörüngeye yerleştirdi','Uydunun gerçek zamanlı görüntü sağlayacağı belirtiliyor.',(a)=>{S.world.p[a]+=.5}],
 ['saha','{a} donanması yeni insansız deniz aracını test etti','Test, kritik deniz yollarının güvenliği tartışmasını yeniden alevlendirdi.'],
 ['global','{a} ile {b} arasında esir ve mahkûm takası','Arabulucu ülkelerin desteğiyle gerçekleşen takas, gerginliği bir miktar azalttı.',(a,b)=>setRel(a,b,rel(a,b)+5)],
 ['ekonomi','{a} kritik mineral ihracatına kısıtlama getirdi','Karar, savunma sanayilerinde tedarik endişesine yol açtı.'],
];
const RESP=[
 {h:'{x}, {me} ordusunu sınır ihlaliyle suçladı',o:[['Resmî açıklamayla reddet ve kanıt sun',{rel:-1,trust:1}],['Diplomatik görüşme öner',{rel:6}],['Sınırda gövde gösterisi tatbikatı yap',{rel:-8,hirs:2}],['Cevap verme',{rel:-2,trust:-1}]]},
 {h:'{x}, {me:e} savunma sanayii işbirliği teklif etti',o:[['Kabul et',{rel:8,pw:2}],['Şartlı kabul: teknoloji transferi iste',{rel:4,pw:3}],['Reddet',{rel:-5}]]},
 {h:'{x} medyası, {me} askerlerini sivillere zarar vermekle suçluyor',o:[['Bağımsız soruşturma başlat, şeffaf açıklama yap',{rel:3,trust:2}],['Haberi yalanla',{rel:-3}],['Karşı propaganda kampanyası başlat',{rel:-6}]]},
 {h:'{x}, {me} ile ortak tatbikat önerdi',o:[['Katıl',{rel:7,strat:1}],['Reddet',{rel:-4}]]},
 {h:'{x} araştırma gemisi {me} karasularına yaklaştı',o:[['Donanma refakati ve diplomatik nota',{rel:-3,trust:2}],['Gemiyi zorla bölgeden çıkar',{rel:-10,hirs:2}],['Görmezden gel',{trust:-2}]]},
 {h:'{x}, {me:nin} İHA ihracatını "bölgesel tehdit" ilan etti',o:[['Uluslararası hukuka uygun olduğunu açıkla',{rel:-1}],['Ekonomik karşı yaptırım uygula',{rel:-8,pw:1}],['Görüşme masası öner',{rel:4}]]},
];
function worldNewsDaily(){
 const me=S.nation,W=S.world;const others=NK.filter(k=>k!==me);
 const GA=GUN.concat(GUN2);W.gs=W.gs||[];for(let i=0;i<3;i++){const cand=GA.filter((x,j)=>!W.gs.includes(j));const g=pick(cand.length?cand:GA);W.gs=[...W.gs,GA.indexOf(g)].slice(-12);const a=pick(NK),b=pick(NK.filter(k=>k!==a));const h=fill(g[1],{a:NAT[a].n,b:NAT[b].n,n:String(3+Math.floor(R()*12))});if(g[3])g[3](a,b);feed(g[0],h,fill(g[2],{a:NAT[a].n,b:NAT[b].n}),[a,b].filter((x,j)=>g[1].includes('{b}')||j===0))}
 const live=BLOCS.filter(b=>b.def&&b.m.every((x,i)=>b.m.slice(i+1).every(y=>allied(x,y))));if(live.length&&R()<.35){const b=pick(live);feed('global',`${b.n} zirvesi toplandı`,`Zirvede ${b.m.map(k=>NAT[k].n).join(', ')} liderleri ortak savunma planlarını ve İHA/siber tehditlere karşı işbirliğini görüştü.`,b.m)}
 if(R()<.55){const AR=RESPA();const W_=S.world;W_.rs=W_.rs||[];const cand=AR.filter((x,i)=>!W_.rs.includes(i));const t=pick(cand.length?cand:AR);W_.rs=[...W_.rs,AR.indexOf(t)].slice(-6);const x=pick(others.filter(k=>t.h.includes('ortak tatbikat')?rel(me,k)>0:true))||pick(others);feed(pick(['ulusal','global']),fill(t.h,{x:NAT[x].n,me:NAT[me].n}),'Ülkenin vereceği cevap, ikili ilişkileri ve bölgedeki dengeyi etkileyecek.',[x,me],{t:RESPA().indexOf(t),x})}
}
function respond(v){const[id,i]=v.split('|');const it=(S.world.feed||[]).find(f=>f.id===id);if(!it||it.done||!it.r)return;const t=RESPA()[it.r.t];const o=t.o[+i];if(!o)return;const e=o[1],x=it.r.x,me=S.nation;
 if(e.rel)setRel(me,x,rel(me,x)+e.rel);if(e.trust)S.trust=clamp(S.trust+e.trust);if(e.pw)S.world.p[me]+=e.pw;if(e.hirs)addSt('hirs',e.hirs);if(e.strat)addSt('strat',e.strat);
 it.done=o[0];S.world.fu=[...(S.world.fu||[]),{d:S.day+1,x,dr:e.rel||0,ans:o[0]}];feed('ulusal',`${ek(NAT[me].n,'den')} ${ek(NAT[x].n,'e')} yanıt: ${o[0].toLocaleLowerCase('tr')}`,'Açıklama uluslararası ajanslarda geniş yer buldu.',[me,x]);toast('Ülkenin yanıtı açıklandı.');save();render()}

/* ============ SAVAŞ SEBEPLERİ ============ */
const WHY=['Sınır karakoluna düzenlenen gece baskınında 3 askerimiz şehit oldu; saldırganların {x} topraklarından geldiği tespit edildi.','Tartışmalı deniz yetki alanındaki doğal gaz sahasına {x} sondaj gemisi ve savaş gemileri gönderdi.','{x}, sınır nehri üzerindeki barajda suyu keserek tarım bölgelerimizi kuraklığa sürükledi.','Ulusal enerji şebekesini 48 saat karanlıkta bırakan siber saldırının {x} askerî istihbaratına ait olduğu kanıtlandı.','Kızıl Pençe ağının silah sevkiyatlarının {x} limanlarından yapıldığı ve ağın orada korunduğu ortaya çıktı.','{x} insansız hava araçları hava sahamızı ihlal ederek bir lojistik üssümüzü vurdu; 7 asker yaralandı.'];
const WHYS=['deniz yetki alanı anlaşmazlığı','sınır karakolu saldırısı','su krizi','siber saldırı','enerji koridoru anlaşmazlığı','İHA saldırısı'];

/* ============ RÜTBE YOLU (kilitli) ============ */
function rankLadder(){const rs=B().rs;return `<div style="display:flex;gap:10px;overflow-x:auto;padding:4px 2px 10px;scroll-snap-type:x mandatory" id="ladder">${RANKS.map((r,i)=>{const st=i<S.rank?'done':i===S.rank?'cur':'lock';
 return `<div class="rk ${st}" style="scroll-snap-align:center">${st==='lock'?`<div class="lk">${ico('lock',16)}</div>`:''}<div class="ri">${ins(i,62)}</div><b>${esc(rankName(i,S.nation,rs))}</b><small>${st==='done'?'Kazanıldı':st==='cur'?'Şu anki rütben':i===S.rank+1?'Sıradaki':'Kilitli · '+r.c}</small></div>`}).join('')}</div>`}
