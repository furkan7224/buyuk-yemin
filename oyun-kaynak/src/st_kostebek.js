/* =====================================================================
   HİKÂYE · KÖSTEBEK  (özel mekanikli dedektiflik hikâyesi)
   Oyuncu: Binbaşı (Genelkurmay İstihbarat). 10 gün, günde 3 eylem.
   Köstebek her oyunda 6 şüpheliden rastgele biri; ipuçları buna göre üretilir.
   ===================================================================== */
(function(){
const DAYS=10,AP=3,LEAK=[3,6,9],DROP=[4,8];
const SU={
 kaya:{n:'Yüzbaşı Can Kaya',k:'Kaya',r:'Harekât subayı',c:'#c9a64a',hand:'sağlak',smoke:1,
  bio:'Akademiden devren; yıllardır en yakın arkadaşın. Son aylarda borç içinde olduğu konuşuluyor.',
  duty:'O gecelerin ikisinde nöbetçi subaydım. Saat ikide karargâhı dolaştım, sonra brifing odasında plan çalıştım.',
  sleep:'O gece erken yattım. Bütün gün planlarla uğraşmıştık, ayakta duracak hâlim yoktu.',
  early:'Sabah erkenden kasabaya indim; bankada işim vardı.',
  secret:'Kaya\'yı kasabanın arka sokaklarındaki bir kahvehaneye kadar izliyorsun. Masada iri yarı bir adam var; Kaya ona bir zarf uzatıyor, adam parayı sayıp kalkıyor. Bir tefeci. Kaya başını ellerinin arasına alıp uzun süre öyle oturuyor.\n\nArkadaşın borç batağında ama bu, ihanet değil.',
  press:'Kaya önce gülüyor, sonra gülmesi yüzünde donuyor.\n\n— Benden mi şüpheleniyorsun? On beş yıl… On beş yıl birlikte nöbet tuttuk.',
  pressX:'Kaya bir süre susuyor, sonra her şeyi anlatıyor: kumar borcu, tefeci, aylardır ödediği faizler.\n\n— Utancımdan kimseye söyleyemedim. Ama yemin ederim, vatanımı satmadım.'},
 aras:{n:'Binbaşı Levent Aras',k:'Aras',r:'Harekât planlama şubesi',c:'#b8453a',hand:'solak',smoke:0,
  bio:'Sert, hırslı ve kuralcı. Terfi listesinde adı geçiyor; bunun için her şeyi yapabileceği söyleniyor.',
  duty:'Gece yarısından sonra harekât merkezindeydim. Albayın istediği raporu bitiriyordum.',
  sleep:'Saat on birde ışığımı söndürdüm. Disiplinli bir adamım, Binbaşı.',
  early:'Her sabah altıda koşuya çıkarım. Nizamiye defterine bakabilirsiniz.',
  secret:'Aras gece yarısı karargâhtan çıkıp kasabadaki otelin lokantasına gidiyor. Masada tümen karargâhından bir kurmay albay var. Aras ona pahalı bir saat hediye ediyor; konuşmalarından terfi listesinden söz ettikleri anlaşılıyor.\n\nYakışıksız ve kurallara aykırı. Ama casusluk değil.',
  press:'Aras gözünü kırpmadan sana bakıyor.\n\n— Beni soruşturmak sizin hakkınız. Ama dosyama tek bir leke sürerseniz, bunun hesabını sorarım.',
  pressX:'Aras dişlerini sıkıyor, sonra kısaca kabul ediyor: kurmay albayla görüşmüş, terfi için torpil aramış.\n\n— Bu bir disiplin meselesi Binbaşı. İhanet değil.'},
 deniz:{n:'Çavuş Deniz Yılmaz',k:'Deniz',r:'Muhabere çavuşu',c:'#70a3c4',hand:'sağlak',smoke:1,
  bio:'Tüm telsiz trafiği onun elinden geçiyor. Gece vardiyalarında muhabere odasında çoğunlukla yalnız.',
  duty:'Gece vardiyası benimdi. Muhabere odasında sabaha kadar telsiz başındaydım.',
  sleep:'O gece vardiyam yoktu, koğuşta uyuyordum.',
  early:'Sabah erken kasabaya, postaneye gittim. Annem paket göndermişti.',
  secret:'Deniz gece saat birde koğuştan sıvışıp nizamiyenin yanındaki ankesörlü telefona gidiyor. Yarım saat boyunca alçak sesle konuşuyor, bir ara gülüyor. Telefonu kapattıktan sonra bir fotoğrafa bakıyor: nişanlısı.\n\nYasak bir gece görüşmesi. Disiplin cezası gerektirir ama casusluk değil.',
  press:'Deniz yutkunuyor, gözleri kapıya kayıyor.\n\n— Komutanım, ben sadece telsizlerden sorumluyum. Ne duyduysam rapor ettim.',
  pressX:'Deniz kızarıyor ve itiraf ediyor: geceleri gizlice nişanlısını arıyormuş.\n\n— Ceza neyse çekerim komutanım. Ama ben hain değilim.'},
 leyla:{n:'Tercüman Leyla Saran',k:'Leyla',r:'Sivil tercüman',c:'#a78bfa',hand:'solak',smoke:1,
  bio:'Düşmanın dilini anadili gibi konuşuyor. Ailesinin bir kısmı hâlâ sınırın öbür yanında yaşıyor.',
  duty:'Geç saate kadar ele geçirilen telsiz konuşmalarını çeviriyordum. Saat iki buçuk gibi bitirdim.',
  sleep:'Uyuyordum. Tercümanlar gece çalışmaz Binbaşı; en azından o gece çalışmadım.',
  early:'Sabah kasabadaki pazara indim. Ayda bir giderim.',
  secret:'Leyla gece lojmanının arka bahçesine çıkıyor ve gizli bir cep telefonundan sınırın öbür yanını arıyor. Konuşma kısa ve kırık; sonunda ağlıyor. Hasta annesiyle konuştuğu anlaşılıyor.\n\nYasak bir hat. Ama dinlediğin şey bir kızın annesine duyduğu özlem, bir ajanın raporu değil.',
  press:'Leyla kollarını kavuşturuyor.\n\n— Ailem sınırın öbür yanında diye ilk şüpheli ben oluyorum, değil mi? Buna alışkınım Binbaşı.',
  pressX:'Leyla gizli telefonu masaya bırakıyor.\n\n— Annem hasta. Onu arıyorum. Hepsi bu. İsterseniz bütün konuşmaları dinleyin.'},
 emre:{n:'Teğmen Emre Tunç',k:'Emre',r:'Lojistik subayı',c:'#7fb35a',hand:'sağlak',smoke:0,
  bio:'Sessiz, kibar, işinde kusursuz. Belki biraz fazla kusursuz. Kimse onun hakkında kötü bir şey söylemiyor.',
  duty:'Depoda gece sayımı vardı. Mühimmat listelerini kontrol ediyordum.',
  sleep:'Saat on birde yattım. Ertesi gün sevkiyat vardı, dinlenmem gerekiyordu.',
  early:'Sabah erken saatte ikmal konvoyunu karşılamaya çıktım; sevk evraklarında imzam var.',
  secret:'Emre gece saat ikide lojmandan çıkıp spor salonuna gidiyor ve bir saat boyunca torbaya yumruk atıyor. Sonra bankta oturup telefonuna bakıyor: hastanedeki babasından gelen eski mesajlar.\n\nUykusuz, yalnız ve acı içinde bir adam. Ama ihanetin izi yok.',
  press:'Emre sakin, hatta fazla sakin.\n\n— Sorularınızı anlıyorum komutanım. Saklayacak bir şeyim yok. Ne isterseniz cevaplarım.',
  pressX:'Emre ilk kez sesini titreterek konuşuyor: babası hastanede, geceleri uyuyamıyormuş.\n\n— Kimse bilmesin istedim komutanım. Zayıf görünmek istemedim.'},
 tekin:{n:'Albay Nihat Tekin',k:'Tekin',r:'Karargâh komutanı',c:'#e39540',hand:'solak',smoke:1,
  bio:'Komutanın. Bütün harekât planları onun masasından geçiyor. Onu sorgulamak kariyerine mal olabilir.',
  duty:'Ben bu karargâhın komutanıyım Binbaşı; gece de gündüz de görevdeyim. O gece harekât merkezindeydim.',
  sleep:'Odamdaydım. Bir albayın gece nerede olduğunu sorgulamak cesaret ister.',
  early:'Sabah tümen karargâhına, toplantıya gittim.',
  secret:'Albay gece sivil kıyafetlerle kasabaya iniyor ve nöbetçi eczanenin arkasındaki bir muayenehaneye giriyor. Çıkarken elinde ilaç kutuları var. Ertesi gün öğreniyorsun: ağır bir hastalığı var ve emekliye ayrılmamak için herkesten saklıyor.\n\nBir sır, ama vatanına ihanet eden birinin sırrı değil.',
  press:'Albay Tekin sandalyesinde geriye yaslanıyor.\n\n— Demek beni de listenize aldınız. Cesursunuz Binbaşı. Umarım haklı çıkarsınız; yoksa bu odadan çıkışınız zor olur.',
  pressX:'Albay uzun süre pencereden dışarı bakıyor, sonra hastalığını anlatıyor.\n\n— Otuz yıl bu üniformayı taşıdım. Son günüme kadar taşımak istiyorum. Bu bir suç mu?'}
};
const IDS=Object.keys(SU);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const nm=id=>SU[id].n,kn=id=>SU[id].k;
const VW='aeıioöuü';function lastV(w){for(let i=w.length-1;i>=0;i--){const c=w[i].toLocaleLowerCase('tr');if(VW.includes(c))return c}return 'e'}
function ek(w,t){const v=lastV(w),endV=VW.includes(w[w.length-1].toLocaleLowerCase('tr'));const h4={a:'ı',ı:'ı',e:'i',i:'i',o:'u',u:'u',ö:'ü',ü:'ü'}[v];const h2='aıou'.includes(v)?'a':'e';
 const suf=t==='acc'?(endV?'y':'')+h4:t==='gen'?(endV?'n':'')+h4+'n':(endV?'y':'')+h2;return w+"'"+suf}

const list=a=>a.map(nm).join(', ').replace(/, ([^,]*)$/,' ve $1');
function withMole(mole,base,size){const s=new Set(base);s.add(mole);const rest=shuffle(IDS.filter(x=>!s.has(x)));while(s.size<size)s.add(rest.pop());return shuffle([...s])}

/* ---- yeni oyun ---- */
function newRun(){const mole=pick(IDS);
 const herring=mole==='kaya'?'leyla':'kaya';
 const hand=SU[mole].hand;const smoke=SU[mole].smoke;
 const r={day:1,ap:AP,phase:'brief',bi:0,menu:null,res:null,mole,
  sets:{nobet:withMole(mole,[],3),defter:withMole(mole,[],3),
   telsiz:withMole(mole,['deniz','tekin'].filter(x=>x!==mole).slice(0,mole==='deniz'||mole==='tekin'?1:2),3),
   not:IDS.filter(x=>SU[x].hand===hand),izmarit:IDS.filter(x=>!!SU[x].smoke===!!smoke),banka:shuffle([mole,herring])},
  herring,got:{},iv:{},ivDay:{},contra:{},nervous:{},tail:{},tailDay:0,trap:null,cleared:{},expl:{},alert:0,
  destroyed:{},kia:0,notes:[],apPenalty:0,end:null,trapOffer:false};
 const cand=IDS.filter(x=>x!==mole&&(r.sets.nobet.includes(x)||r.sets.defter.includes(x)));r.liar=pick(cand);return r}
/* ---- güç (şüphe) hesabı ---- */
const CLUES=['telsiz','nobet','defter','not','izmarit','banka'];
const CN={telsiz:'Telsiz kayıtları',nobet:'Nöbet çizelgesi',defter:'Giriş-çıkış defteri',not:'Yanmış not',izmarit:'Buluşma noktası',banka:'Banka dökümleri'};
function str(R,x){if(R.cleared[x])return {s:-1,tags:[['Temize çıktı','o']]};let s=0;const tags=[];
 for(const c of CLUES)if(R.got[c]&&R.sets[c].includes(x)){if(c==='banka'&&R.expl[x]){tags.push(['Banka: açıklandı','o']);continue}s++;tags.push([CN[c],'c'])}
 if(R.contra[x]){const n=Object.keys(R.contra[x]).length;s+=2*n;tags.push([n>1?'2 çelişki':'Çelişki','r'])}
 if(R.nervous[x]){s+=1;tags.push(['Huzursuz','r'])}
 if(R.tail[x]==='witness'){s+=3;tags.push(['Kuryeyle görüldü','r'])}
 if(R.trap&&R.trap.res==='hit'&&R.trap.hit===x){s+=3;tags.push(['Tuzak: sızdırdı','r'])}
 if(R.tail[x]==='secret')tags.push(['Sırrı ortaya çıktı','o']);
 return {s,tags}}
function contraCheck(R){let nw=[];const L=R.liar;
 if(L&&R.iv[L]&&!R.liarOk&&R.alibi&&R.alibi[L]&&R.alibi[L].indexOf(SU[L].sleep)===0){R.contra[L]=R.contra[L]||{};
  if(R.got.nobet&&R.sets.nobet.includes(L)&&!R.contra[L].nobet){R.contra[L].nobet=1;nw.push(`${nm(L)} o gecelerde uyuduğunu söylemişti. Ama nöbet çizelgesine göre üç sızıntı gecesinde de saat 02.00 ile 03.00 arasında karargâhta uyanıktı.`)}
  if(R.got.defter&&R.sets.defter.includes(L)&&!R.contra[L].defter&&/kışladaydım/.test(R.alibi[L])){R.contra[L].defter=1;nw.push(`${nm(L)} sabahları kışladan çıkmadığını söylemişti. Ama giriş-çıkış defterine göre sızıntılardan sonraki sabahlarda 05.40'ta nizamiyeden çıkmış.`)}
  if(!Object.keys(R.contra[L]).length)delete R.contra[L]}
 const m=R.mole;if(!R.iv[m])return nw;R.contra[m]=R.contra[m]||{};
 if(R.got.nobet&&!R.contra[m].nobet){R.contra[m].nobet=1;nw.push(`${nm(m)} o gecelerde uyuduğunu söylemişti. Ama nöbet çizelgesine göre üç sızıntı gecesinde de saat 02.00 ile 03.00 arasında karargâhta uyanıktı.`)}
 if(R.got.defter&&!R.contra[m].defter){R.contra[m].defter=1;nw.push(`${nm(m)} sabahları kışladan çıkmadığını söylemişti. Ama giriş-çıkış defterine göre sızıntılardan sonraki sabahlarda 05.40'ta nizamiyeden çıkmış.`)}
 if(!Object.keys(R.contra[m]).length)delete R.contra[m];return nw}

/* ---- metinler ---- */
const BRIEF=[
 {ti:'Kapalı kapılar ardında',b:`Genelkurmay İstihbarat Daire Başkanı Tuğgeneral Sevim Ateş, odasının kapısını kilitledikten sonra konuşmaya başlıyor:

— Son üç harekâtımız baskına uğradı Binbaşı. Üçünde de düşman, planı bizden önce biliyordu. Yirmi üç askerimizi kaybettik.

Masaya üç dosya bırakıyor. Kapaklarında kırmızı bir damga: ÇOK GİZLİ.

— Bilgi Doğu Karargâhı'ndan sızıyor. İçeride biri var.`},
 {ti:'Görev',b:`— Seni oraya yeni bir görevle, "personel denetimi" bahanesiyle gönderiyorum. Kimse gerçek görevini bilmeyecek; komutan da dahil.

Tuğgeneral pencereye dönüyor.

— On günün var. Sızıntı devam ettikçe askerlerimiz ölmeye devam edecek. Yanlış kişiyi suçlarsan masum birinin hayatını mahvedersin, gerçek hain de elimizden kayar.

— Anlaşıldı komutanım.

— Bir şey daha, Binbaşı. Kimseye güvenme.`},
 {ti:'Altı isim',b:`Doğu Karargâhı'nda planlara erişimi olan altı kişi var. Köstebek bunlardan biri.

Her gün üç eylem hakkın var: *ifade alabilir*, *kanıt toplayabilir*, gece birini *takip edebilirsin*. Beşinci günden itibaren sahte bilgiyle *tuzak kurabilir* ve hazır olduğunda birini *suçlayabilirsin*.

Çelişkileri yakala, ipuçlarını birleştir. Kanıt panosu sana kimin üzerinde yoğunlaştığını gösterecek.

Ama dikkatli ol: köstebek fark ederse izlerini örtmeye başlar.`}];
function morning(R){const d=R.day,m=R.mole,N=[];
 if(d===1)N.push('Doğu Karargâhı\'na "personel denetimi" görevlendirmesiyle geldin. Albay Tekin seni soğuk bir tokalaşmayla karşıladı. Sana bir oda, bir masa ve bir anahtar verdiler.');
 if(d===2)N.push('Kahvaltıda Yüzbaşı Kaya yanına oturdu: "Seni burada görmek ne güzel. Akşam bir çay içeriz, eski günlerdeki gibi." Gözlerinin altı mor.');
 if(d===5)N.push('Kasabadan bir çoban, sınır yolundaki eski çeşmenin başında son haftalarda geceleri birinin beklediğini söyledi. Buluşma noktası orası olabilir.');
 if(d===10)N.push('Son gün. Gün batana kadar köstebeği suçlamazsan, Tuğgeneral soruşturmayı kapatacak ve sızıntı sürecek.');
 return N.concat(R.notes)}
function nightEvents(R){const d=R.day,m=R.mole,ev=[];
 if(LEAK.includes(d)){if(R.trap&&R.trap.res==null&&R.trap.day<=d){const T=R.trap;if(T.a===m||T.b===m){T.res='hit';T.hit=m;ev.push(`Gece düşman, ${T.hit===T.a?'kuzey vadisi':'güney köprüsü'} hakkındaki sahte bilgiye göre hareket etti. O bilgiyi yalnızca **${nm(m)}** biliyordu.`)}else{T.res='clear';R.cleared[T.a]=1;R.cleared[T.b]=1;ev.push(`Gece düşman, kurduğun tuzaktaki iki sahte bilgiden hiçbirine göre hareket etmedi. **${nm(T.a)}** ve **${nm(T.b)}** temize çıktı.`)}}
  const k=2+Math.floor(Math.random()*4);R.kia+=k;ev.push(`Sızıntı devam ediyor: gece bir keşif birliğimiz pusuya düştü. **${k} şehit.** Toplam kayıp: ${23+R.kia}.`)}
 if(R.alert>=2&&!R.destroyed._done){R.destroyed._done=1;const c=['banka','izmarit','not'].find(x=>!R.got[x]);if(c){R.destroyed[c]=1;ev.push(`Köstebek tetikte. ${c==='banka'?'Banka kayıtlarına erişim "teknik arıza" bahanesiyle kapatıldı.':c==='izmarit'?'Eski çeşmenin çevresi gece temizlenmiş; ardında hiçbir iz kalmamış.':'Karargâh sobasının külleri gece boşaltılmış; yanmış not artık yok.'}`)}}
 if(R.alert>=3&&!R.destroyed._comp){R.destroyed._comp=1;R.apPenalty=1;ev.push('Hakkında isimsiz bir şikâyet dilekçesi verilmiş: "Denetçi personeli taciz ediyor." Yarın sabah Albay Tekin\'e açıklama yapmak zorundasın; bir eylem hakkın gidecek.')}
 return ev}

/* ---- eylemler ---- */
function act(R,v){const [a,b,c]=String(v).split(':');
 if(a==='bn'){R.bi++;if(R.bi>=BRIEF.length){R.phase='day';R.bi=0}return}
 if(a==='menu'){R.menu=b||null;return}
 if(a==='ok'){R.res=null;if(R.ap<=0&&R.phase==='day')endDay(R);return}
 if(a==='night'){endDay(R);return}
 if(a==='morning'){R.phase='day';R.notes=[];return}
 if(a==='iv'){if(R.ap<=0||R.ivDay[b]===R.day)return;R.ap--;R.ivDay[b]=R.day;R.iv[b]=(R.iv[b]||0)+1;R.menu=null;
  const first=R.iv[b]===1;let body;
  if(first){const inN=R.sets.nobet.includes(b),inD=R.sets.defter.includes(b);
   const say=b===R.mole?SU[b].sleep+' Sabahları da kışladaydım, hiçbir yere çıkmadım.':b===R.liar&&!R.tail[b]?SU[b].sleep+(inD?' Sabahları da kışladaydım, hiçbir yere çıkmadım.':''):(inN?SU[b].duty:SU[b].sleep)+(inD?' '+SU[b].early:'');
   body=`${nm(b)} karşına oturuyor. Sızıntı gecelerinde nerede olduğunu soruyorsun.\n\n— ${say}`;
   R.alibi=R.alibi||{};R.alibi[b]=say}
  else{if(b===R.mole){R.alert++;R.nervous[b]=1;body=SU[b].press+`\n\nKonuşurken parmakları masanın kenarında durmadan tıkırdıyor. Bir şey saklıyor olabilir.`}
   else if(b===R.liar&&R.contra[b]){body=SU[b].pressX+`\n\nİfadesindeki tutarsızlığın sebebi buymuş. ${kn(b)} o gece nerede olduğunu bu yüzden saklamış.`;delete R.contra[b];R.liarOk=1;if(b===R.herring)R.expl[b]=1}
   else if(R.tail[b]==='secret'||(b===R.herring&&R.got.banka)){body=SU[b].pressX;if(b===R.herring)R.expl[b]=1}
   else body=SU[b].press}
  const nw=contraCheck(R)||[];R.res={ti:'İfade · '+kn(b),b:body+(nw.length?'\n\n'+nw.map(x=>'ÇELİŞKİ: '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='cl'){if(R.ap<=0||R.got[b]||R.destroyed[b])return;if(b==='banka'&&R.day<3)return;if(b==='izmarit'&&R.day<5&&!R.dropSeen)return;R.ap--;R.got[b]=1;R.menu=null;
  const S=R.sets[b];let body='';const noticed=Math.random()<.12;if(noticed)R.alert++;
  if(b==='telsiz')body=`Muhabere odasının kayıt cihazlarını inceliyorsun. Sızıntı gecelerinde, her seferinde saat 02.10 civarında, kırk saniyelik şifreli yayınlar yapılmış. Yayınlar dışarıdan değil, muhabere odasındaki yedek telsizden çıkmış.\n\nO odanın anahtarı yalnızca üç kişide var: ${list(S)}.`;
  if(b==='nobet')body=`Nöbet çizelgelerini ve kapı kartı kayıtlarını karşılaştırıyorsun. Üç sızıntı gecesinde de saat 02.00 ile 03.00 arasında karargâh binasında uyanık olan üç kişi var: ${list(S)}.`;
  if(b==='defter')body=`Nizamiyedeki giriş-çıkış defterini sayfa sayfa okuyorsun. Sızıntılardan sonraki sabahlarda kışladan güneş doğmadan çıkan üç isim tekrar ediyor: ${list(S)}.`;
  if(b==='not')body=`Karargâh sobasının küllerini eleyen erlerden biri sana yarısı yanmış bir kâğıt parçası getiriyor. Üzerinde tek satır okunuyor: "Perşembe. Çeşme. 02." ${SU[R.mole].hand==='solak'?'Mürekkep, satırın üzerinden geçen elin altında yer yer bulaşmış; yazan kişi solak':'Mürekkep temiz, harfler sağa yatık; yazan kişi sağlak'}.\n\nŞüphelilerden ${SU[R.mole].hand} olanlar: ${list(S)}.`;
  if(b==='izmarit')body=SU[R.mole].smoke?`Gece eski çeşmeye gidip el feneriyle etrafı tarıyorsun. Taşın dibinde, aynı markadan bir avuç sigara izmariti var. Burada bekleyen kişi sigara içiyor.\n\nŞüphelilerden sigara içenler: ${list(S)}.`:`Gece eski çeşmeye gidip el feneriyle etrafı tarıyorsun. Taze ayak izleri var ama tek bir izmarit bile yok. Burada saatlerce bekleyen kişi sigara içmiyor olmalı.\n\nŞüphelilerden sigara içmeyenler: ${list(S)}.`;
  if(b==='banka'){const m=R.mole,h=R.herring;const t=x=>x==='kaya'?(x===m?'Kaya\'nın tefecilere olan borçları, her sızıntıdan iki gün sonra bir anda kapanmış.':'Kaya\'nın hesabından tefecilere düzenli ödemeler yapılmış; borç batağında olduğu belli.'):x==='leyla'?(x===m?'Leyla\'nın sınırın öbür yanına yaptığı küçük havalelerin yanında, her sızıntıdan sonra hesabına yüklü nakit yatırılmış.':'Leyla sınırın öbür yanına her ay küçük havaleler gönderiyor.'):`${ek(kn(x),'gen')} hesabına üç kez, her biri bir sızıntıdan iki gün sonra olmak üzere nakit para yatırılmış.`;
   body=`Savcılık izniyle şüphelilerin son üç aylık banka dökümlerini inceliyorsun. İki hesapta olağan dışı hareket var:\n\n${t(R.banka0=R.sets.banka[0])}\n\n${t(R.sets.banka[1])}`}
  if(noticed)body+='\n\nÇıkarken koridorda biriyle göz göze geliyorsun. Ne aradığını anlamış olabilir.';
  const nw=contraCheck(R)||[];R.res={ti:CN[b],b:body+(nw.length?'\n\n'+nw.map(x=>'ÇELİŞKİ: '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='tail'){if(R.ap<=0||R.tailDay===R.day)return;R.ap--;R.tailDay=R.day;R.menu=null;let body;const m=R.mole;
  if(b===m){if(DROP.includes(R.day)){R.tail[b]='witness';R.dropSeen=1;body=`${nm(b)} gece saat bir buçukta karargâhtan sessizce çıkıyor. Arayla takip ediyorsun. Sınır yolundaki eski çeşmenin başında bir gölge bekliyor. ${kn(b)} ona katlanmış bir zarf uzatıyor; gölge zarfı ceketine sokup karanlığa karışıyor.\n\nGördün. Artık şüphe değil, tanıklık bu.`}
   else{const seen=Math.random()<.3;if(seen)R.alert++;body=`${ek(nm(b),'acc')} gece boyunca izliyorsun. Erken yatıyor, ışığı bir kez yanıp sönüyor, sonra sessizlik.${seen?'\n\nSabaha karşı odasının perdesi aralanıyor; biri dışarıya, tam saklandığın yere bakıyor. Fark edilmiş olabilirsin.':'\n\nBu gece bir şey olmadı.'}`}}
  else{if(R.tail[b]!=='secret'){R.tail[b]='secret';body=SU[b].secret.replace(/\\n/g,'\n');if(b===R.herring)R.expl[b]=1;if(b===R.liar&&R.contra[b]){delete R.contra[b];R.liarOk=1;body+=`\n\n${ek(kn(b),'gen')} ifadesindeki tutarsızlık da böylece açıklandı.`}}else body=`${ek(nm(b),'acc')} yeniden izliyorsun ama bu gece olağan dışı bir şey olmuyor.`}
  R.res={ti:'Gece takibi · '+kn(b),b:body};return}
 if(a==='trap'){if(R.trap||R.day<5||R.day>9||R.ap<=0)return;if(b==='go'){const x=c.split(',');if(x.length!==2)return;R.ap--;R.trap={a:x[0],b:x[1],day:R.day,res:null};R.menu=null;R.tsel=[];
   R.res={ti:'Tuzak kuruldu',b:`${ek(nm(x[0]),'dat')} kuzey vadisinde yapılacak bir baskın planından, ${ek(nm(x[1]),'dat')} de güney köprüsünde bekleyen bir konvoydan söz ediyorsun. İkisi de sahte; ikisi de yalnızca birer kişiye söylendi.\n\nŞimdi beklemek gerekiyor. Bir sonraki sızıntı gecesi hangi bilginin düşmana ulaştığını gösterecek.`};return}
  R.tsel=R.tsel||[];const i=R.tsel.indexOf(b);if(i>=0)R.tsel.splice(i,1);else if(R.tsel.length<2)R.tsel.push(b);return}
 if(a==='acc'){R.menu='accuse';R.accSel=b;return}
 if(a==='accgo'){confront(R,b);return}
 if(a==='fin'){R.end=b;return}}
function endDay(R){const ev=nightEvents(R);R.lastNight=ev;R.day++;R.res=null;R.menu=null;
 if(R.day>DAYS){R.end='kacti';R.endWhy='time';return}
 R.ap=AP-(R.apPenalty||0);R.apPenalty=0;R.phase='night'}
function confront(R,x){const m=R.mole;const S=str(R,x);R.accused=x;
 if(x!==m){R.end='yanlis';return}
 const strong=R.tail[m]==='witness'||(R.trap&&R.trap.res==='hit');
 if(S.s>=6||(strong&&S.s>=4)){if(R.trap&&R.trap.res==='hit'&&R.alert<2){R.phase='turn';R.menu=null;return}R.end='ag';return}
 const p=Math.min(.75,.25+S.s*.08);if(Math.random()<p){R.end='ag';R.bluff=1}else{R.end='kacti';R.endWhy='weak'}}

/* ---- görünüm ---- */
const av=(id,sz=40)=>`<span class="kav" style="--c:${SU[id].c};width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.38)}px">${SU[id].k.slice(0,1)}</span>`;
const md=s=>fmt32(String(s).replace(/\*\*([^*]+)\*\*/g,'⟦$1⟧')).replace(/⟦([^⟧]+)⟧/g,'<b>$1</b>').replace(/ÇELİŞKİ:/g,'<span class="kcontra">ÇELİŞKİ</span>');
function header(R){return `<div class="khead"><div><span class="lbl">Gün</span><b class="num">${Math.min(R.day,DAYS)}<small>/${DAYS}</small></b></div>
 <div><span class="lbl">Eylem</span><div class="kap">${Array.from({length:AP},(_,i)=>`<i class="${i<R.ap?'on':''}"></i>`).join('')}</div></div>
 <div><span class="lbl">Şehit</span><b class="num red">${23+R.kia}</b></div></div>${R.alert>=2?'<div class="kwarn">Köstebek tetikte; izlerini örtmeye başladı.</div>':''}`}
function board(R,full){const rows=IDS.map(x=>({x,...(str(R,x)||{})}));const mx=Math.max(6,...rows.map(r=>r.s||0));
 return `<div class="card kboard"><div class="sec-h"><h2>Kanıt panosu</h2>${!full?'<button class="mini" data-a="kb" data-v="menu:board">Ayrıntı ›</button>':''}</div>
 ${rows.map(r=>`<div class="krow${r.s<0?' clr':''}">${av(r.x,34)}<div class="grow"><div class="kn"><b>${esc(SU[r.x].n)}</b>${r.s<0?'<span class="kclr">Temize çıktı</span>':''}</div>
  ${r.s>=0?`<div class="ksus"><i style="width:${Math.min(100,(r.s/mx)*100)}%"></i></div>`:''}${full&&r.tags&&r.tags.length?`<div class="ktags">${r.tags.map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')}</div>`:''}</div></div>`).join('')}</div>`}
function view(R){
 if(R.phase==='brief'){const B=BRIEF[R.bi];return `${R.bi===0?`<div class="tchap32"><span>Bölüm 1</span><b class="stencil">Görev</b></div>`:''}<div class="tart32">${ART.hq()}</div><div class="tbody32"><h3 class="stencil">${esc(B.ti)}</h3>${md(B.b)}</div>
  ${R.bi===2?`<div class="ksus6">${IDS.map(x=>`<div>${av(x,36)}<span><b>${esc(SU[x].n)}</b><small>${esc(SU[x].bio)}</small></span></div>`).join('')}</div>`:''}
  <button class="btn block" data-a="kb" data-v="bn">${R.bi<2?'Devam et':'Soruşturmaya başla'}</button>`}
 if(R.phase==='night'){const ch=chOf(R);const newCh=[3,7,10].includes(R.day);return `${newCh?`<div class="tchap32"><span>Bölüm ${ch+1}</span><b class="stencil">${esc(T.chapters[ch].ti)}</b></div>`:''}<div class="tart32">${ART.night()}</div>
  <div class="tbody32"><h3 class="stencil">Gece</h3>${R.lastNight.length?md(R.lastNight.join('\n\n')):'<p>Gece sessiz geçti. Karargâhın ışıkları birer birer sönüyor.</p>'}</div>
  <button class="btn block" data-a="kb" data-v="morning">Gün ${R.day} başlıyor ›</button>`}
 if(R.phase==='turn'){return `<div class="tart32">${ART.room()}</div><div class="tbody32"><h3 class="stencil">Bir fırsat</h3>${md(`${nm(R.mole)} sorgu odasında, karşında. Kanıtlar masada; inkâr edemiyor. Omuzları çöküyor.\n\nAma aklında bir fikir var: köstebek, sahte bilgiyi düşmana taşıyan bir kanal. Düşman hâlâ ona güveniyor; çünkü tetikte olmadığı için izlerini hiç örtmedi. Onu tutuklamak yerine kullanabilirsin.`)}</div>
  <div class="topts32"><button class="opt op2" data-a="kb" data-v="fin:ag"><span class="k">A</span><span class="grow">Tutukla. Hain hak ettiği cezayı alsın.</span></button><button class="opt op2" data-a="kb" data-v="fin:cift"><span class="k">B</span><span class="grow">Teklif et: düşmana bizim istediğimiz bilgileri taşıyacak, karşılığında hayatı bağışlanacak.</span></button></div>`}
 let h=header(R);
 if(R.res){return h+`<div class="tbody32 kres${R.res.contra?' hot':''}"><h3 class="stencil">${esc(R.res.ti)}</h3>${md(R.res.b)}</div><button class="btn block" data-a="kb" data-v="ok">${R.ap<=0?'Günü bitir ›':'Tamam'}</button>`}
 if(R.menu==='iv')return h+`<div class="card"><div class="sec-h"><h2>Kimin ifadesini alacaksın?</h2></div><p class="small muted">Her şüpheliyle günde bir kez konuşabilirsin. İkinci görüşmede üstüne gidersin.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="iv:${x}"${R.ivDay[x]===R.day?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${esc(SU[x].r)} · ${R.iv[x]?(R.iv[x]===1?'Bir kez konuşuldu':'Üstüne gidildi'):'Henüz konuşulmadı'}</small></span><span class="chev">›</span></button>`).join('')}</div><button class="btn ghost block" data-a="kb" data-v="menu:">‹ Geri</button>`;
 if(R.menu==='cl')return h+`<div class="card"><div class="sec-h"><h2>Nereye bakacaksın?</h2></div>${CLUES.map(c=>{const lock=c==='banka'&&R.day<3?'3. günden itibaren (savcılık izni)':c==='izmarit'&&R.day<5&&!R.dropSeen?'Buluşma noktası henüz bilinmiyor':R.destroyed[c]?'Köstebek bu kanıtı yok etti':R.got[c]?'İncelendi':'';return `<button class="kpick" data-a="kb" data-v="cl:${c}"${lock?' disabled':''}><span class="kic">${KI[c]}</span><span class="grow"><b>${esc(CN[c])}</b><small>${esc(lock||KD[c])}</small></span>${lock?'':'<span class="chev">›</span>'}</button>`}).join('')}</div><button class="btn ghost block" data-a="kb" data-v="menu:">‹ Geri</button>`;
 if(R.menu==='tail')return h+`<div class="card"><div class="sec-h"><h2>Bu gece kimi izleyeceksin?</h2></div><p class="small muted">Her gece yalnızca bir kişiyi izleyebilirsin. Köstebek fark ederse tetikte olur.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="tail:${x}">${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.tail[x]==='secret'?'Daha önce izlendi':R.tail[x]==='witness'?'Kuryeyle görüldü':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`).join('')}</div><button class="btn ghost block" data-a="kb" data-v="menu:">‹ Geri</button>`;
 if(R.menu==='trap'){const sel=R.tsel||[];return h+`<div class="card"><div class="sec-h"><h2>Tuzak kur</h2></div><p class="small">İki şüpheli seç. Her birine farklı bir sahte harekât bilgisi vereceksin. Bir sonraki sızıntıda düşman hangisine göre hareket ederse köstebek o kişidir; hiçbirine göre hareket etmezse ikisi de temize çıkar. <b>Tuzağı yalnızca bir kez kurabilirsin.</b></p>${IDS.map(x=>`<button class="kpick${sel.includes(x)?' on':''}" data-a="kb" data-v="trap:${x}"${R.cleared[x]?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.cleared[x]?'Temize çıktı':sel.includes(x)?(sel.indexOf(x)===0?'Kuzey vadisi bilgisi':'Güney köprüsü bilgisi'):esc(SU[x].r)}</small></span><span class="kchk">${sel.includes(x)?'✓':''}</span></button>`).join('')}</div>
  <button class="btn block" data-a="kb" data-v="trap:go:${sel.join(',')}"${sel.length===2?'':' disabled'}>Sahte bilgileri ver</button><button class="btn ghost block" data-a="kb" data-v="menu:">‹ Geri</button>`}
 if(R.menu==='board')return h+board(R,true)+`<div class="card"><div class="sec-h"><h2>İfadeler</h2></div>${IDS.filter(x=>R.alibi&&R.alibi[x]).map(x=>`<div class="kst">${av(x,28)}<p><b>${esc(SU[x].k)}:</b> "${esc(R.alibi[x])}"</p></div>`).join('')||'<p class="small muted">Henüz kimsenin ifadesini almadın.</p>'}</div>
  <div class="card"><div class="sec-h"><h2>Kanıtlar</h2></div>${CLUES.filter(c=>R.got[c]).map(c=>`<div class="kcl"><span class="kic">${KI[c]}</span><span><b>${esc(CN[c])}</b><small>${c==='banka'?esc(R.sets.banka.map(kn).join(' ve ')+': olağan dışı hareket'):c==='not'?esc('Yazan '+SU[R.mole].hand+': '+R.sets.not.map(kn).join(', ')):c==='izmarit'?esc((SU[R.mole].smoke?'Sigara içen: ':'Sigara içmeyen: ')+R.sets.izmarit.map(kn).join(', ')):esc(R.sets[c].map(kn).join(', '))}</small></span></div>`).join('')||'<p class="small muted">Henüz kanıt toplamadın.</p>'}</div><button class="btn ghost block" data-a="kb" data-v="menu:">‹ Geri</button>`;
 if(R.menu==='accuse'){const x=R.accSel;if(x){const S=str(R,x);return h+`<div class="card kacc">${av(x,64)}<h2 class="stencil">${esc(SU[x].n)}</h2><p class="small muted">${esc(SU[x].r)}</p>
   <div class="ktags">${S.tags.filter(t=>t[1]!=='o').map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')||'<span class="small muted">Elinde bu kişiye karşı neredeyse hiç kanıt yok.</span>'}</div>
   <p>Onu sorgu odasına alıp kanıtları masaya koyacaksın. Yanılırsan masum birinin hayatı kararır ve gerçek köstebek kaçar. <b>Bu kararı geri alamazsın.</b></p></div>
   <button class="btn warn block" data-a="kb" data-v="accgo:${x}">${esc(ek(kn(x),'acc'))} suçla</button><button class="btn ghost block" data-a="kb" data-v="acc:">‹ Başka birini seç</button>`}
  return h+`<div class="card"><div class="sec-h"><h2>Kimi suçlayacaksın?</h2></div>${IDS.map(x=>{const S=str(R,x);return `<button class="kpick" data-a="kb" data-v="acc:${x}"${S.s<0?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${S.s<0?'Temize çıktı':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`}).join('')}</div><button class="btn ghost block" data-a="kb" data-v="menu:">‹ Geri</button>`}
 /* ana gün ekranı */
 const N=morning(R);
 return h+(N.length?`<div class="kmorn"><span class="lbl">Sabah raporu · Gün ${R.day}</span>${md(N.join('\n\n'))}</div>`:'')+
 `<div class="kacts">
  <button class="kact" data-a="kb" data-v="menu:iv"${R.ap?'':' disabled'}><span class="kic">${KI.iv}</span><b>İfade al</b><small>Şüpheliyle konuş</small></button>
  <button class="kact" data-a="kb" data-v="menu:cl"${R.ap?'':' disabled'}><span class="kic">${KI.cl}</span><b>Kanıt topla</b><small>Kayıtlar, defterler</small></button>
  <button class="kact" data-a="kb" data-v="menu:tail"${R.ap&&R.tailDay!==R.day?'':' disabled'}><span class="kic">${KI.tail}</span><b>Gece takibi</b><small>${R.tailDay===R.day?'Bu gece biri izleniyor':'Birini izle'}</small></button>
  <button class="kact" data-a="kb" data-v="menu:trap"${R.ap&&!R.trap&&R.day>=5&&R.day<=9?'':' disabled'}><span class="kic">${KI.trap}</span><b>Tuzak kur</b><small>${R.trap?(R.trap.res?'Tuzak sonuçlandı':'Tuzak kuruldu, bekleniyor'):R.day<5?'5. günden itibaren':R.day>9?'Artık zaman yok':'Sahte bilgi ver'}</small></button>
 </div>${rings(R)}
 <div class="kbar"><button class="btn ghost" data-a="kb" data-v="menu:accuse"${R.day>=5?'':' disabled'}>${R.day>=5?'Suçla':'Suçla · 5. gün'}</button><button class="btn" data-a="kb" data-v="night">Günü bitir ›</button></div>`}
function rings(R){const rows=IDS.map(x=>({x,...str(R,x)}));const mx=Math.max(6,...rows.map(r=>r.s));
 return `<button class="kring-card" data-a="kb" data-v="menu:board"><div class="sec-h"><span class="lbl">Kanıt panosu</span><span class="small acc">Ayrıntı ›</span></div><div class="krings">${rows.map(r=>{const h=r.s<0?0:Math.min(1,r.s/mx);return `<div class="kr${r.s<0?' clr':''}${r.s>0?' hot':''}" style="--h:${h.toFixed(2)}"><span class="kr-ring">${av(r.x,38)}${r.s>0?`<em>${r.s}</em>`:''}</span><small>${esc(SU[r.x].k)}</small></div>`}).join('')}</div></button>`}
const KI={iv:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v10H9l-5 4z"/></svg>',
 cl:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10" cy="10" r="6"/><path d="M15 15l5 5"/></svg>',
 tail:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
 trap:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v6M5 9h14l-2 11H7z"/><path d="M9 13h6"/></svg>',
 telsiz:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="8" width="12" height="13" rx="2"/><path d="M9 8V3M10 13h4M10 17h4"/></svg>',
 nobet:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 defter:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h11l3 3v13H5z"/><path d="M8 10h8M8 14h8M8 18h5"/></svg>',
 not:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l3 3v15H6z"/><path d="M12 13c-2 2-1 4 0 5 1-1 3-3 0-5z" fill="currentColor"/></svg>',
 izmarit:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 15h14v3H3zM17 15h3v3h-3M18 12c0-2 2-2 2-4"/></svg>',
 banka:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-5 9 5M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18"/></svg>'};
const KD={telsiz:'Şifreli yayınlar nereden yapıldı?',nobet:'Sızıntı gecelerinde kim uyanıktı?',defter:'Sabahları kim kışladan çıktı?',not:'Sobadaki yanmış kâğıtlar',izmarit:'Sınır yolundaki eski çeşme',banka:'Olağan dışı para hareketleri'};
const ART={hq:()=>`<svg viewBox="0 0 360 140" width="100%" style="display:block;border-radius:12px" aria-hidden="true"><rect width="360" height="140" fill="#0f1114"/><rect x="40" y="20" width="280" height="96" rx="4" fill="#1b1f24" stroke="#2c3138"/>${[0,1,2,3,4,5].map(i=>`<rect x="${58+i*44}" y="34" width="32" height="42" fill="#e9e0c8" opacity=".9" transform="rotate(${(i%2?3:-3)} ${74+i*44} 55)"/><circle cx="${74+i*44}" cy="32" r="3" fill="#c8302a"/>`).join('')}<path d="M74 32 L162 32 L250 32 M118 32 L206 32 L294 32" stroke="#c8302a" stroke-width="1" opacity=".8" fill="none"/><rect x="0" y="116" width="360" height="24" fill="#0a0b0d"/><rect x="150" y="96" width="60" height="6" fill="#c9a64a" opacity=".6"/></svg>`,
 night:()=>`<svg viewBox="0 0 360 120" width="100%" style="display:block;border-radius:12px" aria-hidden="true"><rect width="360" height="120" fill="#05070d"/>${Array.from({length:30},(_,i)=>`<circle cx="${(i*67)%360}" cy="${(i*29)%60}" r=".8" fill="#fff" opacity=".5"/>`).join('')}<path d="M0 120 L0 86 L50 82 L50 64 L90 64 L90 80 L140 80 L140 56 L200 56 L200 78 L260 78 L260 66 L300 66 L300 84 L360 84 L360 120Z" fill="#0d1016"/>${[64,100,160,176,272].map((x,i)=>`<rect x="${x}" y="${70+(i%2)*6}" width="6" height="5" fill="#ffd98a" opacity="${i===2?.9:.35}"/>`).join('')}</svg>`,
 room:()=>`<svg viewBox="0 0 360 140" width="100%" style="display:block;border-radius:12px" aria-hidden="true"><rect width="360" height="140" fill="#0c0b08"/><path d="M180 26 L96 140 L264 140Z" fill="#ffd98a" opacity=".12"/><rect x="60" y="104" width="240" height="10" fill="#2a2418"/><g fill="#050605"><circle cx="128" cy="78" r="9"/><path d="M116 90h24l4 14h-32z"/><circle cx="232" cy="78" r="9"/><path d="M220 90h24l4 14h-32z"/></g><rect x="160" y="96" width="40" height="8" fill="#e8e0c8" opacity=".6"/></svg>`};
function chOf(R){return R.end?3:R.phase==='brief'?0:R.day<=2?0:R.day<=6?1:R.day<=9?2:3}
/* ---- sonlar ---- */
function endText(R){const m=R.mole,x=R.accused,kia=23+R.kia;
 if(R.end==='ag')return `${R.bluff?`Kanıtların yetersiz; bunu sen de biliyorsun. Ama ${ek(nm(m),'gen')} karşısında, sanki her şeyi biliyormuş gibi oturuyorsun. Üçüncü saatte çöküyor.`:`Kanıtları tek tek masaya diziyorsun. ${nm(m)} önce inkâr ediyor, sonra susuyor, sonra konuşmaya başlıyor.`}

— Para içindi, diyor. Sonra korku. Bir kez başladın mı, duramıyorsun.

Verdiği isimlerle aynı gece sınır köyündeki kurye ve iki yardakçısı yakalanıyor. Ağ çöküyor.

Bir hafta sonra Tuğgeneral Ateş seni odasına çağırıyor. Masada ${kia} ismin yazılı olduğu bir liste var.

— Onları geri getiremeyiz Binbaşı. Ama listeye yeni bir isim eklenmeyecek. Bunu sen sağladın.`;
 if(R.end==='cift')return `${nm(m)} titreyen elleriyle teklifini kabul ediyor.

Sonraki altı ay boyunca düşman, güvendiği kaynaktan bizim yazdığımız raporları alıyor. Sahte mevziler, var olmayan birlikler, hiç yapılmayacak taarruzlar…

Bahar geldiğinde düşmanın en güçlü tümeni, boş bir vadiyi kuşatmak için üç gün harcıyor. O üç günde bizim birlikler cepheyi yararak ilerliyor.

Kimse senin adını bilmeyecek. Bu harekâtın hiçbir raporunda adın geçmeyecek. Tuğgeneral Ateş yalnızca elini sıkıyor:

— Bazı zaferler sessiz kazanılır Binbaşı. En büyükleri genellikle öyledir.`;
 if(R.end==='yanlis')return `${nm(x)} tutuklanıyor. Kelepçeler takılırken sana bakıyor; gözlerinde öfke yok, yalnızca şaşkınlık var.

— Yanılıyorsun, diyor. Bir gün bunu anlayacaksın.

Üç hafta sonra bir harekât daha baskına uğruyor. Sonra bir tane daha.

Aylar sonra, sınırda yakalanan bir kurye tek bir isim veriyor: ${nm(m)}. Ama ${kn(m)} çoktan sınırı geçip izini kaybettirmiş.

${nm(x)} serbest bırakılıyor. Kapıda onu karşılamaya gidiyorsun. Elini uzatıyorsun; o uzatmıyor.

Kimseye güvenme demişlerdi. Kanıtlara da körü körüne güvenmemek gerekiyormuş.`;
 return R.endWhy==='weak'?`Kanıtların yetersiz kaldı. ${nm(m)} sorgu odasında soğukkanlılığını korudu, her suçlamaya bir cevap buldu. Savcı serbest bırakılmasına karar verdi.

Ertesi sabah ${ek(kn(m),'gen')} yatağı boştu. Sınır karakolunun kayıtlarında, gece yarısı karşı tarafa geçen bir araç vardı.

Köstebeği buldun ama yakalayamadın.`:`On gün doldu. Tuğgeneral Ateş soruşturmayı kapattı.

Doğu Karargâhı'ndaki sızıntı iki ay daha sürdü. Sonunda ${nm(m)}, bir gece hiçbir iz bırakmadan ortadan kayboldu. Bir hafta sonra düşman televizyonunda, gülümseyerek konuşuyordu.

Kayıp listesi ${kia+11} isme ulaştı.`}
const T={id:'kostebek',ti:'Köstebek',genre:'Casusluk · Dedektiflik',color:'#b8453a',cover:'cover',custom:true,
 sub:'Karargâhtaki haini 10 günde bul',
 pitch:'Son üç harekât baskına uğradı. Doğu Karargâhı\'nda biri bilgi sızdırıyor ve 10 günün var. İfade al, kayıtları incele, geceleri iz sür, sahte bilgiyle tuzak kur. Köstebek her oyunda farklı biri olabilir. Yanlış kişiyi suçlarsan masum biri yanar, gerçek hain kaçar.',
 chapters:[{ti:'Görev',sub:'Altı şüpheli · 1–2. gün'},{ti:'Soruşturma',sub:'İfadeler ve kayıtlar · 3–6. gün'},{ti:'Tuzak',sub:'Sahte bilgi ve takip · 7–9. gün'},{ti:'Yüzleşme',sub:'Sorgu odası · 10. gün'}],
 endings:[{k:'ag',ti:'Ağı çökerttin',medal:'Gölge Avcısı',tone:'good'},{k:'cift',ti:'Çift ajan',medal:'Görünmez Nişan',tone:'good'},{k:'yanlis',ti:'Yanlış kişi',tone:'bad'},{k:'kacti',ti:'Köstebek kaçtı',tone:'bad'}],
 arts:{cover:()=>ART.hq()},newRun,chapterOf:chOf,view,endText,endArt:()=>ART.room(),
 subtitle:R=>R.end?'Son':R.phase==='brief'?'Bölüm 1 · Görev':`Gün ${Math.min(R.day,DAYS)} · ${T.chapters[chOf(R)].ti}`};
registerTale(T);
A32.kb=v=>{const P=tp32('kostebek');if(!P.run)return;act(P.run,v);tpSave32();render();const el=$('#tscr');if(el)el.scrollTop=0;window.scrollTo(0,0)};
window.__KB={SU,IDS,newRun,act,str,endDay,confront,DAYS};
})();
