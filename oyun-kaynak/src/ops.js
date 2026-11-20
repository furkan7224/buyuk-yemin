/* ============ HAREKÂTLAR (üç fazlı günlük görevler) ============ */
const UNIT=['tim','takım','bölük','tabur','tugay'];
const PHN=['Planlama','Temas','Sonuç'];
/* k: birlik kategorileri, t: [min,max] seviye, sc: sahne, ph: [durum, [seçenek, kalite, yetenek]...] */
const OPS=[
 {id:'devriye',ti:'Sınır devriyesi',k:['kara','jan','ozel'],t:[0,1],sc:'gece',ph:[
  ['{sehir} yakınında, {yon} hattında gece devriyesindesin. Yolda taze ayak izleri ve kırık dallar var.',['Telsizle bildir, izleri takip etmeden önce gözetleme kur',1,'strat'],['İzleri hemen takip et',.4,'dayan'],['Devriyeye devam et, görmezden gel',.1,'disiplin']],
  ['200 metre ileride silahlı bir grup hareket ediyor; sizi görmediler.',['Pusu mevzii al, termal dürbünle kimlik tespiti yap, emir bekle',1,'nisan'],['Uyarı atışı yap',.3,'nisan'],['Sessizce geri çekil ve raporla',.6,'disiplin']],
  ['Grup {dusman} sınır birliği çıktı; sınırı 300 metre ihlal etmişler.',['Angajman kurallarına göre uyar, görüntü kaydı al, üst komutaya bildir',1,'disiplin'],['Doğrudan ateş aç',.2,'nisan'],['Onları sınır ötesine kadar takip et',.05,'strat']]]},
 {id:'pusu',ti:'Gece pusu harekâtı',k:['kara','ozel','jan'],t:[0,2],sc:'gece',ph:[
  ['İstihbarat: {dusman} ikmal kolu gece {sehir}–sınır yolundan geçecek. {birlik} pusu yerini seçmeli.',['Yolun kıvrıldığı, iki yanı yüksek dar geçit',1,'strat'],['Açık düzlükte yol kenarı',.3,'strat'],['Köprünün hemen üstü',.5,'strat']],
  ['Kol yaklaşıyor: önde bir zırhlı araç, arkada iki kamyon.',['Önce zırhlıyı tanksavarla durdur, sonra öldürme bölgesini ateş altına al',1,'nisan'],['Kamyonlara ateş aç, zırhlı geçsin',.4,'nisan'],['Herkes erken ateş açsın',.1,'disiplin']],
  ['Kol dağıldı. Telsizde düşman takviyesinin yola çıktığı duyuluyor.',['Önceden belirlenen rotadan sıyrıl, buluşma noktasında personel say',1,'disiplin'],['Araçları aramak için kal',.3,'strat'],['Takviyeyi de vurmak için bekle',.15,'dayan']]]},
 {id:'kesif',ti:'Derin keşif',k:['kara','ozel','jan'],t:[0,2],sc:'dag',ph:[
  ['{dusman} kuvvetlerinin {yon} yönündeki mevzilerini tespit etmen gerekiyor.',['Gündüz uzaktan gözetle, gece yakın keşfe çık',1,'strat'],['Gündüz yaklaşıp fotoğrafla',.3,'dayan'],['Yalnızca İHA görüntüsüyle yetin',.5,'strat']],
  ['Bir çoban timinizi gördü.',['Zarar verme; hemen konum değiştir ve raporla',1,'disiplin'],['Çobanı alıkoy',.3,'lider'],['Görevi iptal edip dön',.4,'strat']],
  ['Düşmanın tank parkını tespit ettin.',['Konum, sayı, tip ve saati standart formatta raporla',1,'strat'],['Hemen topçu ateşi iste',.6,'strat'],['Daha yakından bakmak için sız',.2,'dayan']]]},
 {id:'karakol',ti:'Karakol savunması',k:['kara','jan'],t:[0,2],sc:'gece',ph:[
  ['{sehir} yakınındaki karakolunuza {yon} yönünden gece taarruzu bekleniyor.',['Ateş planı hazırla: ana ve yedek mevziler, mayın ve aydınlatma',1,'strat'],['Herkes ön siperde beklesin',.3,'lider'],['Normal nöbet düzeni yeterli',.1,'disiplin']],
  ['Saat 02:10. Havan atışı başladı, ardından piyade yaklaşıyor.',['Mevzilere geç, aydınlatma fişeği at, ateş disiplini koru',1,'lider'],['Havan bitene kadar sığınakta kal',.4,'disiplin'],['Hemen karşı hücuma kalk',.1,'dovus']],
  ['Düşman tel örgüye ulaştı.',['Son savunma hattı ateşini aç, ihtiyat timini kanada at',1,'nisan'],['Geri çekilme emri ver',.3,'strat'],['Göğüs göğüse savaşa hazırlan',.4,'dovus']]]},
 {id:'kontrol',ti:'Kontrol noktası',k:['jan','kara'],t:[0,1],sc:'sehir',ph:[
  ['{sehir} girişinde kontrol noktası kuruyorsun. Bölgede araçlı saldırı ihbarı var.',['Zikzak bariyer, ayrı arama alanı, gözcü ve nişancı mevzii',1,'strat'],['Tek bariyer yeterli',.3,'strat'],['Araçları yol kenarında durdur',.2,'disiplin']],
  ['Bir araç işaretlere uymadan hızla yaklaşıyor.',['Kademeli uyarı: el işareti, uyarı atışı, sonra motor bloğu',1,'disiplin'],['Doğrudan sürücüye ateş et',.2,'nisan'],['Bariyeri açıp geçir',.05,'disiplin']],
  ['Araç durdu; sürücü panik içinde, arkada bir aile var.',['Sakinleştir, aracı mesafeli arat, kaydı tut',1,'lider'],['Herkesi yere yatır ve kelepçele',.4,'dovus'],['Aramadan geçmesine izin ver',.2,'disiplin']]]},
 {id:'konvoy',ti:'Konvoy refakati',k:['kara','jan'],t:[1,2],sc:'dag',ph:[
  ['Yakıt konvoyunu {sehir:den} cepheye ulaştıracaksın.',['Rota keşfi, önde mayın tarama, araç aralığı 50 metre',1,'strat'],['En hızlı rota, araçlar yakın',.2,'strat'],['Gece, farlar açık',.1,'disiplin']],
  ['Öndeki araç yol kenarı bombasıyla vuruldu.',['Konvoyu durdur, çevreyi kontrol et, güvenlik çemberi kur, yaralıyı tahliye et',1,'disiplin'],['Hemen yaralıya koş',.3,'dayan'],['Konvoyu yoldan çıkarıp araziden git',.2,'strat']],
  ['Tepeden makineli tüfek ateşi açıldı.',['Ateşle bastır, konvoyu bölgeden çıkar, hava desteği iste',1,'lider'],['Herkes araçtan insin',.2,'lider'],['Karşılık verme, bekle',.1,'nisan']]]},
 {id:'koy',ti:'Yerleşim yeri temizliği',k:['kara','jan','ozel'],t:[1,2],sc:'sehir',ph:[
  ['{dusman} birlikleri {sehir} yakınındaki bir köye sızdı; köyde siviller var.',['Köyü kuşat, tahliye koridoru aç, hoparlörle duyur',1,'strat'],['Topçuyla köyü döv',0,'disiplin'],['Hemen evlere gir',.4,'dovus']],
  ['Ev ev temizlik: bir kapı kilitli, içeriden ses geliyor.',['Dörtlü tim, köşe kontrolü, önce seslen',1,'dovus'],['Kapıdan el bombası at',.1,'disiplin'],['Tek kişi girsin',.2,'dovus']],
  ['İki düşman askeri teslim oldu.',['Silahsızlandır, ilk yardım yap, esir olarak teslim et',1,'disiplin'],['Sorguyu orada sert şekilde yap',.1,'disiplin'],['Bırak gitsinler',.2,'strat']]]},
 {id:'tepe',ti:'Hâkim tepe taarruzu',k:['kara','ozel'],t:[2,3],sc:'dag',ph:[
  ['{birlik}, {sehir} batısındaki hâkim tepeyi almalı. {dusman} mevzileri belli.',['Gece, topçu hazırlık ateşinin ardından iki kollu taarruz',1,'strat'],['Gündüz tek kolla taarruz',.2,'strat'],['Hazırlık ateşi olmadan sürpriz baskın',.5,'strat']],
  ['Sol kol mayın tarlasına girdi, ilerleme durdu.',['Sağ kolla baskıyı sürdür, istihkâmı sol kola gönder',1,'lider'],['Tüm taarruzu durdur',.4,'strat'],['Sol kolu mayının içinden zorla ilerlet',.1,'lider']],
  ['Tepe alındı; düşman karşı taarruza geçiyor.',['Mevzileri ters yöne çevir, topçu baraj ateşi iste',1,'strat'],['Tepeyi bırakıp geri çekil',.2,'lider'],['Kaçan düşmanı takip et',.3,'dayan']]]},
 {id:'hat',ti:'Savunma hattı',k:['kara','jan'],t:[3,4],sc:'masa',ph:[
  ['{dusman} kuvvetleri {yon} yönünden {sehir} hattına yükleniyor. Elinde üç tabur ve bir tank taburu var.',['Derinlikte savunma: ileri hat geciktirsin, tanklar ihtiyatta',1,'strat'],['Tüm taburlar ön hatta',.3,'strat'],['Tankları ileri sürüp karşı taarruz',.4,'strat']],
  ['Düşman sağ kanatta yarma yaptı.',['Tank ihtiyatıyla yarmanın omzuna karşı taarruz',1,'strat'],['Tüm hattı geri çek',.3,'lider'],['İhtiyatı parça parça gönder',.1,'strat']],
  ['Düşman durdu ve tahkim ediyor.',['Hattı yeniden kur, ikmal ve yaralı tahliyesi, kayıp raporu',1,'disiplin'],['Hemen genel taarruz',.35,'strat'],['Hiçbir şey yapma',.3,'strat']]]},
 {id:'kusatma',ti:'Kuşatma harekâtı',k:['kara','ozel','jan'],t:[3,4],sc:'masa',ph:[
  ['{dusman} tümeni {sehir} çevresinde bir çıkıntı oluşturdu.',['İki kolla çıkıntının tabanına kıskaç taarruzu',1,'strat'],['Cepheden yüklen',.2,'strat'],['Sadece hava bombardımanı',.4,'strat']],
  ['Kıskaç kapanıyor; düşman çekilmeye çalışıyor.',['Çekilme yollarını hava gücüyle kes, kapanmayı hızlandır',1,'strat'],['Kollar dursun, ikmal beklesin',.3,'lider'],['Çekilmelerine izin ver',.2,'strat']],
  ['Kuşatılan düşman teslim olmayı teklif etti.',['Harp hukukuna göre teslim al, esirleri koru',1,'disiplin'],['Teklifi reddet ve imha et',0,'disiplin'],['Pazarlık için zaman tanı',.4,'lider']]]},
 {id:'cephe',ti:'Müttefik cephe komutanlığı',k:['kara','deniz','hava','jan','sahil','ozel'],t:[4,4],sc:'masa',ph:[
  ['{muttefik} ile birlikte {dusman:e} karşı ortak cephe kuruluyor.',['Birleşik komuta, ortak muhabere, net sorumluluk bölgeleri',1,'strat'],['Herkes kendi bölgesinde bağımsız savaşsın',.3,'strat'],['Müttefiki öne sür, kendi kuvvetini koru',.2,'lider']],
  ['{dusman} siber saldırı ve dezenformasyon kampanyası başlattı.',['Ağı izole et, yedek muhabereyi aç, kamuoyuna şeffaf bilgi ver',1,'strat'],['Sessiz kal',.2,'lider'],['Karşı propagandayla cevap ver',.5,'strat']],
  ['Diplomatik kanal açıldı: ateşkes teklifi var.',['Kazanımları tahkim edip şartlı müzakereyi destekle',1,'strat'],['Teklifi reddet, tam zafer iste',.3,'strat'],['Koşulsuz kabul et',.3,'lider']]]},
 {id:'onleme',ti:'Deniz önleme harekâtı',k:['deniz','sahil'],t:[0,4],sc:'deniz',ph:[
  ['{dusman} bayraklı bir gemi {sehir} açıklarında karasularına yaklaşıyor.',['Telsizle uyar, refakat et, kayıt al; angajman kurallarını uygula',1,'disiplin'],['Pruvasına uyarı atışı yap',.4,'nisan'],['Görmezden gel',.1,'disiplin']],
  ['Gemi rotasını değiştirmiyor; silah taşıdığından şüpheleniliyor.',['Gemiye çıkma timi gönder, helikopterle gözetle',1,'strat'],['Gemiyi batır',.1,'disiplin'],['Limana kadar takip et',.6,'strat']],
  ['Ambarda kayıtsız mühimmat bulundu.',['Gemiye el koy, mürettebatı gözaltına al, delilleri kayda geçir',1,'disiplin'],['Mühimmatı denize at',.2,'disiplin'],['Kaptanla pazarlık yap',.1,'lider']]]},
 {id:'denizalti',ti:'Denizaltı avı',k:['deniz'],t:[1,4],sc:'deniz',ph:[
  ['Sonar, {sehir} açıklarında şüpheli bir temas aldı.',['Sonobuoy hattı kur, helikopteri havalandır',1,'strat'],['Tam yol temasa koş',.2,'strat'],['Yanlış alarm olabilir, devam et',.1,'disiplin']],
  ['Temas derine dalıp yön değiştirdi.',['Pasif sonarla izle, gemiler arasında üçgenleme yap',1,'strat'],['Sürekli aktif sonar kullan',.5,'strat'],['Derinlik bombası at',.1,'disiplin']],
  ['Denizaltı yüzeye çıktı, kimlik vermiyor: {dusman} donanmasına ait.',['Uyar, uluslararası sulara kadar refakat et, raporla',1,'disiplin'],['Torpido ateşle',.05,'disiplin'],['Bırak gitsin',.3,'strat']]]},
 {id:'cikarma',ti:'Amfibi çıkarma',k:['deniz','ozel'],t:[1,4],sc:'deniz',ph:[
  ['{birlik}, {sehir} yakınındaki kumsala çıkarma yapacak.',['Önce keşif yüzücüleri kumsalı ve engelleri tespit etsin',1,'strat'],['Gündüz doğrudan çıkarma',.2,'strat'],['Hazırlık ateşi olmadan gece çıkarma',.5,'strat']],
  ['Kumsaldaki makineli tüfek yuvaları ateş açtı.',['Deniz topçusu ve yakın hava desteği iste, duman perdesi kur',1,'strat'],['Çıkarmayı durdur',.3,'lider'],['Herkes ileri koşsun',.2,'dovus']],
  ['Kumsal başı tutuldu.',['Kumsal başını genişlet, ikmal ve yaralı tahliye düzeni kur',1,'strat'],['İçeri hızla ilerle',.4,'dayan'],['Yerinde bekle',.3,'disiplin']]]},
 {id:'kurtarma',ti:'Arama-kurtarma',k:['sahil','deniz','jan'],t:[0,3],sc:'deniz',ph:[
  ['Fırtınada aşırı yüklü bir bot {sehir} açıklarında imdat sinyali veriyor.',['Önce can kurtar: bot, sağlık ekibi, helikopter',1,'dayan'],['Karasularına girmesini bekle',.1,'disiplin'],['Botu römorkla geri çek',.3,'strat']],
  ['Dalgalar büyüyor; denizde dağılmış insanlar var.',['Arama alanını sektörlere böl, ışık ve termal kamerayla tara',1,'strat'],['En yakındakilere odaklan, gerisi sonra',.4,'lider'],['Hava düzelene kadar bekle',.1,'disiplin']],
  ['Kurtarılanlar arasında silah taşıyan biri var.',['Güvenli şekilde etkisiz hale getir, diğerlerine bakım sürsün',1,'dovus'],['Herkesi kelepçele',.3,'disiplin'],['Görmezden gel',.1,'disiplin']]]},
 {id:'onleme_hava',ti:'Hava önleme',k:['hava'],t:[0,4],sc:'hava',ph:[
  ['Radar: {dusman} yönünden hava sahasına yaklaşan iki iz.',['Önleme uçuşu kaldır, telsizle tanımla',1,'strat'],['Hemen füzeyle angaje ol',.2,'nisan'],['Takip et ama tanımlama yapma',.4,'strat']],
  ['İzler savaş uçağı; uyarılara cevap vermiyor.',['Görsel tanımlama, uluslararası önleme prosedürü, kurallara uy',1,'disiplin'],['Kilitlen ve ateşle',.3,'nisan'],['Geri dön',.2,'lider']],
  ['Biri sana kilitlendi; radar uyarı alıcısı ötüyor.',['Karşı tedbir at, savunma manevrası yap, kontrolöre bildir',1,'nisan'],['Düz uç, hızlan',.2,'dayan'],['Kafa kafaya karşı kilitlen',.5,'nisan']]]},
 {id:'yhd',ti:'Yakın hava desteği',k:['hava'],t:[1,4],sc:'hava',ph:[
  ['Kara birlikleri {sehir} yakınında sıkıştı, yakın hava desteği istiyor.',['Hava kontrolörüyle koordine ol, dost konumunu teyit et',1,'strat'],['Hemen bomba bırak',.2,'nisan'],['Yüksekte bekle',.3,'strat']],
  ['Hedef, dost birliklere 300 metre uzakta.',['Hassas güdümlü mühimmat, dost hatta paralel yaklaşma',1,'nisan'],['Salkım bomba kullan',.1,'disiplin'],['Görevi iptal et',.3,'strat']],
  ['Uçaksavar ateşi başladı.',['Alçak irtifadan kaç, karşı tedbir at, bir sonraki geçişte rota değiştir',1,'dayan'],['Aynı rotadan tekrar gir',.2,'strat'],['Ateşi bastırmak için dal',.4,'nisan']]]},
 {id:'radar',ti:'Radar istasyonu baskını',k:['ozel','hava','deniz'],t:[1,4],sc:'gece',ph:[
  ['Gece {dusman:nin} sınırdaki radar istasyonunu imha edeceksin.',['Yüksek irtifadan serbest atlayışla uzaktan sız, yaya yaklaş',1,'dayan'],['Helikopterle doğrudan hedefe in',.3,'strat'],['Araçla ana yoldan git',.1,'strat']],
  ['Nöbetçi devriye rotanı kesiyor.',['Saklan, devriyenin geçmesini bekle',1,'disiplin'],['Sessizce etkisiz hale getir',.6,'dovus'],['Ateş aç',.1,'nisan']],
  ['Patlayıcılar yerleştirildi.',['Zamanlayıcıyı kur, sessizce çekil, tahliye noktasında say',1,'disiplin'],['Patlamayı izlemek için kal',.2,'disiplin'],['İkinci bir hedef ara',.3,'strat']]]},
 {id:'kacak',ti:'Silah kaçakçılığı operasyonu',k:['jan','sahil','ozel'],t:[0,3],sc:'dag',ph:[
  ['{sehir} sınırında silah kaçakçılığı ihbarı var.',['Gözetleme kur, geçiş saatini tespit et, kontrollü yakalama planla',1,'strat'],['Hemen baskın yap',.4,'dovus'],['İhbarı ciddiye alma',.1,'disiplin']],
  ['Kaçakçılar katırlarla geliyor; silahlılar.',['Kuşatma kur, teslim çağrısı yap',1,'lider'],['Önden ateş aç',.2,'nisan'],['Geçsinler, sonra takip et',.4,'strat']],
  ['Bir sandıkta kızıl pençe işareti var.',['Delilleri koru, zinciri bozmadan istihbarata devret',1,'disiplin'],['Sandığı açıp kendin incele',.3,'strat'],['Kaçakçıyı orada sert sorgula',.1,'disiplin']]]},
 {id:'ihasurusu',m:1,ti:'Kamikaze İHA sürüsü',k:['kara','jan','hava','ozel'],t:[0,4],sc:'gece',ph:[
  ['Radar, {yon} yönünden alçaktan gelen 12 küçük İHA tespit etti. Hedef {sehir} yakınındaki üssünüz.',['Elektronik harp karıştırıcısını aç, kısa menzilli hava savunmasını ve İHA avcı timini konuşlandır',1,'strat'],['Herkes tüfekle ateş etsin',.3,'nisan'],['Sığınağa gir ve bekle',.4,'disiplin']],
  ['Karıştırmaya rağmen üç İHA fiber optik kontrollü; yaklaşmaya devam ediyor.',['Ağ ve saçma kullanan nokta savunma timleri, araçları dağıt',1,'strat'],['Elektronik harp gücünü artır',.3,'strat'],['Araçları tek yerde topla ve kamufle et',.2,'strat']],
  ['Saldırı püskürtüldü; enkaz parçaları var.',['Enkazı topla, parça numaralarını istihbarata gönder, kalkış noktasını tespit et',1,'strat'],['Enkazı imha et',.2,'disiplin'],['Görüntüleri sosyal medyada paylaş',.05,'disiplin']]]},
 {id:'fpv',m:1,ti:'FPV dron taarruzu',k:['kara','ozel'],t:[1,3],sc:'dag',ph:[
  ['{birlik}, {dusman} mevzilerine FPV dron ekibiyle baskı uygulayacak.',['Keşif dronuyla hedefleri tespit et, sonra FPV ile hassas vuruş yap',1,'strat'],['Gözetlemeden FPV\'leri körlemesine gönder',.3,'nisan'],['Operatörleri açık arazide konuşlandır',.1,'disiplin']],
  ['Düşman elektronik harple sinyalleri karıştırıyor.',['Frekans değiştir, röle dron kullan, operatör konumunu değiştir',1,'strat'],['Aynı frekansta denemeye devam et',.2,'strat'],['Görevi iptal et',.4,'lider']],
  ['Düşman topçusu operatör mevziinize yöneldi.',['Hemen yer değiştir, yayın disiplini uygula',1,'disiplin'],['Son bir uçuş daha yap',.2,'nisan'],['Sığınakta kalıp yayına devam et',.3,'strat']]]},
 {id:'refakat',m:1,ti:'Ticari gemi refakati',k:['deniz','sahil','hava'],t:[0,4],sc:'deniz',ph:[
  ['{sehir} çıkışlı ticari konvoyu, insansız deniz araçlarıyla tehdit edilen bir boğazdan geçireceksin.',['Konvoyu sıkı düzende topla, helikopter ve İHA ile önden gözetle',1,'strat'],['Gemiler dağınık geçsin',.2,'strat'],['Gece ışıksız geç',.5,'strat']],
  ['Su üstünden hızla yaklaşan iki insansız deniz aracı (kamikaze bot)!',['Yakın savunma silahıyla angaje ol, konvoyu manevrayla uzaklaştır',1,'nisan'],['Telsizle uyar',.1,'disiplin'],['Konvoyu durdur',.2,'strat']],
  ['Balistik füze uyarısı geldi.',['Hava savunma radarını tam moda al, önleyici füzeyi hazırla, gemileri uyar',1,'strat'],['Uyarıyı görmezden gel',.05,'disiplin'],['Tüm konvoyu geri çevir',.4,'lider']]]},
 {id:'kablo',m:1,ti:'Deniz altı kablosu sabotajı',k:['deniz','sahil','ozel'],t:[1,4],sc:'deniz',ph:[
  ['{sehir} açıklarındaki deniz altı veri kablosunda kesinti var. Yakında bir ticari gemi çapasını sürükleyerek geçmiş.',['Gemiyi telsizle durdur, sahil güvenliği yönlendir, insansız denizaltıyla hasarı incele',1,'strat'],['Gemiye ateş aç',.1,'disiplin'],['Kaza deyip dosyayı kapat',.2,'strat']],
  ['Gemi uluslararası sulara kaçmaya çalışıyor; mürettebatın {dusman} bağlantısı var.',['Uluslararası hukuka uygun şekilde bayrak devletine bildir, gemiyi gözetimde tut',1,'disiplin'],['Gemiye zorla çık',.4,'dovus'],['Bırak gitsin',.1,'strat']],
  ['Benzer saldırılara karşı kritik altyapı korunmalı.',['Müttefiklerle ortak deniz gözetim ağı kur',1,'strat'],['Her kablonun başına bir gemi koy',.3,'strat'],['Bir şey yapma',.05,'disiplin']]]},
 {id:'siber',m:1,ti:'Siber saldırı',k:['kara','deniz','hava','jan','sahil','ozel'],t:[2,4],sc:'masa',ph:[
  ['{sehir:de}ki askerî lojistik ağına fidye yazılımı bulaştı.',['Ağı izole et, yedekten dön, siber savunma ekibini çağır',1,'strat'],['Fidyeyi öde',.05,'disiplin'],['Sistemleri kapatmadan incele',.3,'strat']],
  ['Saldırının izleri {dusman} bağlantılı bir gruba çıkıyor.',['Delilleri koru, istihbarat ve müttefiklerle paylaş',1,'strat'],['Hemen karşı siber saldırı başlat',.3,'strat'],['Basına açıkla',.2,'lider']],
  ['GPS karıştırması sivil uçuşları da etkiliyor.',['Havacılık uyarısı yayınlat, alternatif seyrüsefere geç, sivil havacılıkla koordine ol',1,'strat'],['Askerî öncelik, sivilleri boş ver',.1,'disiplin'],['Kendi GPS sistemlerimizi de kapat',.3,'strat']]]},
 {id:'fuze',m:1,ti:'Füze savunması',k:['hava','deniz','kara'],t:[2,4],sc:'hava',ph:[
  ['Erken uyarı sistemi {dusman} yönünden balistik füze fırlatması tespit etti; hedef {sehir} olabilir.',['Katmanlı hava savunmasını aktive et, sivil alarm sistemini çalıştır',1,'strat'],['Sadece en yakın bataryayı uyar',.3,'strat'],['Doğrulama gelene kadar bekle',.2,'disiplin']],
  ['Füze manevra yapıyor; önleme penceresi daralıyor.',['İki önleyiciyle salvo atışı yap',1,'nisan'],['Tek önleyiciyle dene',.4,'nisan'],['Angaje olma',.05,'disiplin']],
  ['Füze önlendi; parçalar bir yerleşim yerine düştü.',['Arama-kurtarma ve bomba imha ekiplerini gönder, halkı bilgilendir',1,'lider'],['Haberi gizle',.1,'disiplin'],['Sadece askerî bölgeyi kontrol et',.3,'strat']]]},

];
function threatInfo(){const N=NAT[S.nation];const W=S.world;
 const en=W.war||NK.filter(k=>k!==S.nation&&!allied(S.nation,k)).sort((a,b)=>rel(S.nation,a)-rel(S.nation,b))[0];
 const th=pick(N.thr);const cities=N.cities.filter(c=>!c[3]).slice().sort((a,b)=>hav([a[2],a[1]],[th[2],th[1]])-hav([b[2],b[1]],[th[2],th[1]]));
 const al=NK.filter(k=>k!==S.nation&&allied(S.nation,k));return{en,th,city:cities[0]||N.cities[0],al:al.length?pick(al):null}}
function pickOp(){
 const t=T(),k=B().k;let pool=OPS.filter(o=>o.k.includes(k)&&t>=o.t[0]&&t<=o.t[1]);if(!pool.length)pool=OPS.filter(o=>t>=o.t[0]&&t<=o.t[1]);if(!pool.length)pool=OPS;
 const fresh=pool.filter(o=>!(S.opSeen||[]).includes(o.id));const fm=fresh.filter(o=>o.m);const o=fm.length&&R()<.45?pick(fm):pick(fresh.length?fresh:pool);S.opSeen=[...(S.opSeen||[]),o.id].slice(-6);
 const ti=threatInfo();S.op={intel:null,code:pick(CODE_A)+' '+pick(CODE_B),id:o.id,en:ti.en,thr:ti.th,city:ti.city,al:ti.al,ph:0,picks:[],ord:o.ph.map(p=>p.slice(1).map((_,i)=>i+1).sort(()=>R()-.5)),notes:[]};S.op.intel=intelOf(S.op);
}
function opText(s){const o=S.op;return fill(s,{sehir:o.city[0],dusman:NAT[o.en].n,yon:o.thr[0],birlik:'Senin '+UNITP[T()],muttefik:o.al?NAT[o.al].n:'müttefik kuvvetler'})}
function opPick(i){
 const o=S.op;if(!o||S.mDone)return;const def=OPS.find(x=>x.id===o.id);const ph=def.ph[o.ph];const opt=ph[i];if(!opt)return;
 if(!o.prep)return toast('Önce harekât hazırlığını tamamla.');
 const p=clamp(.45+S.st[opt[2]]/170+(S.st.mental-50)/250-S.fatigue/350-(S.injured?.15:0)+wBonus()+prepMod(def,opt),.1,.95);const ok=R()<p;const eff=opt[1]*(ok?1:.6);
 o.picks.push(eff);o.notes.push([PHN[o.ph],opt[0],opt[1],ok]);addSt(opt[2],opt[1]>=.8?.5:0);o.ph++;
 if(o.ph>=def.ph.length)return opFinish(def);save();render();
}
function opFinish(def){
 const o=S.op;const q=o.picks.reduce((a,b)=>a+b,0)/o.picks.length;const res=q>=.78?2:q>=.5?1:0;const war=!!S.world.war;
 const base=[18,24,32,40,50][T()]*(war?1.5:1);const xp=Math.round(base*[.25,.65,1][res]);const trs=[-10,2,8][res];
 S.xp+=xp;S.trust=clamp(S.trust+trs);S.mDone=true;S.fatigue=clamp(S.fatigue+14);addSt('disiplin',res===2?1:res===0?-1:0);
 const cas=[['1 şehit, 3 yaralı','Ağır kayıp verdin.'],['2 yaralı','Görev kısmen tamamlandı.'],['Kayıp yok','Görev başarıyla tamamlandı.']][res];
 if(res===0){addSt('mental',-8);addSt('hirs',3)}if(res===2)addSt('mental',3);
 let front='';if(war&&o.en===S.world.war){S.warScore=(S.warScore||0)+res;if(res===2&&R()<.45){const n=transfer(o.en,S.nation,1);if(n){front=`<p class="small green">Cephe ilerledi: ${NAT[o.en].n} hattında 1 bölge alındı.</p>`;news(`${UNIT[T()].toLocaleUpperCase(typeof LANG!=='undefined'&&LANG!=='tr'?'en':'tr')} harekâtı: ${o.city[0]} kesiminde cephe ilerledi.`)}}}
 S.mRes={res,xp,trs};let lv='';if(res===2&&!war&&R()<.3){S.leave=(S.leave||0)+1;lv=`<p class="small green">${esc(cmdr())} inisiyatif kullandı: <b>1 gün ödül izni</b> kazandın.</p>`}log(def.ti+': '+['başarısız','kısmi başarı','başarılı'][res]+'.');
 const ln=cmdLine(['bad','mid','good'][res]);const I=o.intel||intelOf(o);const sh=res===0?1+T()*2:res===1&&T()>=2&&R()<.4?1:0,yr=res===2?Math.floor(R()*2):res===1?1+Math.floor(R()*3)+T():3+T()*4;const el=Math.round(I.en*[.08,.25,.5][res]*(.7+R()*.6)),hrs=2+Math.floor(R()*12),amm=Math.round(I.own*(40+R()*80));
 pushModal({k:'Harekât raporu · '+def.ti,ti:['Başarısız','Kısmi başarı','Görev başarılı'][res],body:`<div class="list">${o.notes.map(([p,t,qq,ok])=>`<div><span class="small muted">${p}</span><br>${esc(t)} <span class="small ${qq>=.8?'green':qq>=.4?'':'red'}">${qq>=.8?'· doğru karar':qq>=.4?'· riskli':'· hatalı'}${qq>=.4&&!ok?' · icra aksadı':''}</span></div>`).join('')}</div>
 <div class="aar"><div><span>Süre</span><b>${hrs} saat</b></div><div><span>Kuvvet</span><b>${I.own} personel</b></div><div><span>Şehit / yaralı</span><b class="${sh?'red':''}">${sh} / ${yr}</b></div><div><span>Düşman kaybı</span><b>${el} etkisiz</b></div><div><span>Mühimmat</span><b>${amm.toLocaleString('tr-TR')} fişek</b></div><div><span>Hazırlık</span><b>${o.prep?PKG.find(p=>p[0]===o.prep.p)[1]:'—'}${o.prep&&o.prep.p===fitOf(def.id)?' ✓':''}</b></div></div><p class="small muted">${cas[1]} Hava: ${S.wx?esc(S.wx.n):'—'}.</p>${front}
 <div class="fx"><span class="p">Tecrübe +${xp}</span><span class="${trs>=0?'p':'n'}">Komutan güveni ${trs>=0?'+':''}${trs}</span></div>${lv}`,ch:[{t:'Rapor ver: komutanın odasına git',fn:()=>setTimeout(()=>cmdrTalk(res,ln),0)}]});
 save();render();
}
function opMap(){const o=S.op;const k=S.nation,f=projFor(k,340,200,14);const[cx,cy]=f(o.city[2],o.city[1]);const[tx,ty]=f(o.thr[2],o.thr[1]);
 const ex=`<defs><marker id="oah" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#ff5a3a"/></marker></defs><path d="M${tx.toFixed(1)} ${ty.toFixed(1)} L${(cx+(tx-cx)*.25).toFixed(1)} ${(cy+(ty-cy)*.25).toFixed(1)}" stroke="#ff5a3a" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#oah)"/><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="9" fill="none" stroke="${getAcc()}" stroke-width="2"><animate attributeName="r" values="7;12;7" dur="2s" repeatCount="indefinite"/></circle>`;
 return nationMap(k,f,ex)}

/* ============ GÜNÜMÜZ İTTİFAKLARI (2026 itibarıyla) ============ */
const BLOCS=[
 {id:'NATO',n:'NATO',m:['ABD','TR','ALM','IGB','FRA','ITA'],t:'Kolektif savunma · Madde 5',def:1},
 {id:'USJ',n:'ABD–Japonya Güvenlik Antlaşması',m:['ABD','JPN'],t:'İkili savunma antlaşması',def:1},
 {id:'SUSA',n:'Şuşa Beyannamesi',m:['TR','AZE'],t:'Türkiye–Azerbaycan müttefiklik beyannamesi',def:1},
 {id:'CPK',n:'Çin–Pakistan Stratejik Ortaklığı',m:['CIN','PAK'],t:'Her koşulda stratejik ortaklık',def:1},
 {id:'USI',n:'ABD–İsrail Stratejik Ortaklığı',m:['ABD','ISR'],t:'Askerî yardım ve stratejik ortaklık (resmî savunma antlaşması değil)',def:0},
 {id:'AUKUS',n:'AUKUS',m:['ABD','IGB'],t:'Savunma teknolojisi ortaklığı',def:0},
 {id:'RC',n:'Rusya–Çin Kapsamlı Ortaklığı',m:['RUS','CIN'],t:'Stratejik ortaklık (resmî ittifak değil)',def:0},
 {id:'TDT',n:'Türk Devletleri Teşkilatı',m:['TR','AZE','UZB'],t:'Siyasi, ekonomik ve kültürel işbirliği',def:0},
 {id:'TRSUR',n:'Türkiye–Suriye Askerî İşbirliği',m:['TR','SUR'],t:'Askerî eğitim ve danışmanlık anlaşması',def:0},
 {id:'SCO',n:'Şanghay İşbirliği Örgütü',m:['RUS','CIN','PAK','UZB'],t:'Güvenlik işbirliği örgütü',def:0},
];
const NUC=['ABD','RUS','CIN','IGB','FRA','PAK'];
const inNato=k=>BLOCS[0].m.includes(k);
function warChance(a,b){const r=rel(a,b);const na=NUC.includes(a),nb=NUC.includes(b);if(na&&nb)return r<-80?.01:0;if(na||nb)return r<-60?.04:0;return r<-55?.08:0}
/* ============ GÜNLÜK DÜNYA ============ */
const INC0=0;const INC={neg:[['askerî gerginlik',-7],['hava sahası ihlali',-4],['İHA ile hava sahası ihlali',-5],['deniz dalaşı',-5],['siber saldırı',-4],['GPS karıştırma',-3],['deniz altı kablosu hasarı',-6],['diplomat sınır dışı',-5],['casusluk skandalı',-4],['yaptırım paketi',-5]],pos:[['ortak tatbikat',5],['savunma sanayii anlaşması',6],['istihbarat paylaşım protokolü',4]]};
function alarm(){const W=S.world,me=S.nation;if(W.war)return[1,'SAVAŞ','var(--red)'];const mn=Math.min(...NK.filter(k=>k!==me&&!allied(me,k)).map(k=>rel(me,k)));if(mn<-55)return[2,'YÜKSEK TEHDİT','var(--red)'];if(mn<-35)return[3,'GERGİN','var(--amber)'];if((W.wars||[]).length)return[4,'TEYAKKUZ','var(--amber)'];return[5,'NORMAL','var(--green)']}
function worldDaily(){
 const W=S.world,me=S.nation;W.wars=W.wars||[];W.req=W.req||{};const notes=[];
 const atWar=(a,b)=>W.wars.some(w=>(w.a===a&&w.b===b)||(w.a===b&&w.b===a));
 // olaylar
 for(let n=0;n<2;n++){const a=pick(NK),b=pick(NK);if(a===b)continue;const r=rel(a,b);const L=r<-20?INC.neg:r>25?INC.pos:(R()<.6?INC.neg:INC.pos);const[t,v]=pick(L);setRel(a,b,r+v);if(R()<.6)news(`${NAT[a].n} – ${NAT[b].n}: ${t}.`)}
 if(R()<.12){const a=pick(NK),b=pick(NK);if(a!==b&&rel(a,b)<-25){setRel(a,b,rel(a,b)-12);news(`KRİZ: ${NAT[a].n} ile ${NAT[b].n} arasında askerî gerilim tırmanıyor.`)}}
 {const h=NK.filter(k=>k!==me&&!allied(me,k)&&rel(me,k)<-20);if(h.length&&R()<.3){const x=pick(h);const[t,v]=pick(INC.neg);setRel(me,x,rel(me,x)+v);news(`${NAT[me].n} – ${NAT[x].n}: ${t}.`)}}
 // ittifaklar (yapay zekâ)
 for(let n=0;n<3;n++){const a=pick(NK),b=pick(NK);if(a===b||a===me||b===me)continue;if(!allied(a,b)&&rel(a,b)>58&&R()<.25){W.al.push(pk(a,b));news(`İTTİFAK: ${NAT[a].n} ve ${NAT[b].n} savunma ittifakı kurdu.`)}else if(allied(a,b)&&rel(a,b)<(BLOCS.some(x=>x.def&&x.m.includes(a)&&x.m.includes(b))?-30:12)){W.al=W.al.filter(x=>x!==pk(a,b));news(`${NAT[a].n} ile ${NAT[b].n} ittifakı çöktü.`)}}
 // yapay zekâ savaşları
 for(let a=0;a<NK.length;a++)for(let b=a+1;b<NK.length;b++){const x=NK[a],y=NK[b];if(x===me||y===me||atWar(x,y)||allied(x,y))continue;if(R()<warChance(x,y)){W.wars.push({a:x,b:y,d:0});news(`SAVAŞ: ${NAT[x].n}, ${ek(NAT[y].n,'e')} savaş ilan etti. Sebep: ${pick(WHYS)}.`);
   if(inNato(y)&&!inNato(x)){news(BLOCS[0].n+' ortak savunma maddesini işletti: ittifak üyeleri '+NAT[y].n+' için savaşa giriyor.');BLOCS[0].m.filter(z=>z!==y&&z!==me&&allied(z,y)&&!atWar(z,x)).forEach(z=>W.wars.push({a:z,b:x,d:0}));if(inNato(me)&&allied(me,y)&&!W.war)declareWar(x,'NATO Madde 5 gereği müttefik '+NAT[y].n+' savunuluyor.')}
   NK.filter(z=>z!==x&&z!==y&&z!==me&&allied(z,y)&&rel(z,x)<20&&!atWar(z,x)).forEach(z=>{W.wars.push({a:z,b:x,d:0});news(`${NAT[z].n}, müttefiki ${ek(NAT[y].n,'nin')} yanında savaşa girdi.`)})}}
 for(let n=0;n<2;n++){const x=pick(NK),y=pick(NK);if(x===y||x===me||y===me||atWar(x,y)||allied(x,y))continue;if(rel(x,y)<-45&&R()<.12){W.wars.push({a:x,b:y,d:0,lim:1});news(`SINIRLI ÇATIŞMA: ${NAT[x].n} ile ${NAT[y].n} birlikleri sınırda çatışıyor.`)}}
 W.wars.forEach(w=>{w.d++;if(R()<.4){const win=R()<pwr(w.a)/(pwr(w.a)+pwr(w.b))?w.a:w.b,los=win===w.a?w.b:w.a;if(w.lim&&R()<.6){news(`${NAT[win].n} – ${NAT[los].n} hattında karşılıklı topçu ve İHA saldırıları.`);setRel(w.a,w.b,rel(w.a,w.b)-2)}else{const n=transfer(los,win,1);if(n)news(`Cephe: ${NAT[win].n}, ${NAT[los].n} karşısında ilerledi.`)}}});
 W.wars=W.wars.filter(w=>{if((w.d>(w.lim?3:8)&&R()<(w.lim?.3:.15))||count(w.a)<=2||count(w.b)<=2){news(`${w.lim?'GERGİNLİK DÜŞTÜ':'BARIŞ'}: ${NAT[w.a].n} ile ${NAT[w.b].n} ateşkes imzaladı.`);setRel(w.a,w.b,rel(w.a,w.b)+25);return false}return true});
 // müttefik yardım çağrısı
 if(!W.war){for(const w of W.wars){const ally=allied(me,w.a)?w.a:allied(me,w.b)?w.b:null;if(!ally)continue;const foe=ally===w.a?w.b:w.a;if(allied(me,foe))continue;if(W.req[pk(w.a,w.b)])continue;W.req[pk(w.a,w.b)]=1;
  if(S.rank>=14){pushModal({k:'Müttefik yardım çağrısı',ti:`${NAT[ally].n} yardım istiyor`,art:mapSVG(),body:`<p>${flag(ally,22)} ${esc(NAT[ally].n)}, ${flag(foe,22)} ${esc(NAT[foe].n)} ile savaşta. İttifak antlaşması gereği askerî destek talep ediyor. Kararı komuta heyeti olarak sen vereceksin.</p>`,ch:[
   {t:'Savaşa katıl',fn:()=>{declareWar(foe,`${ek(NAT[ally].n,'nin')} yanında savaşa girdin.`);setRel(me,ally,rel(me,ally)+15)}},
   {t:'Lojistik ve istihbarat desteği ver',fn:()=>{setRel(me,ally,rel(me,ally)+6);setRel(me,foe,rel(me,foe)-10);news(`${NAT[me].n}, ${ek(NAT[ally].n,'e')} lojistik destek veriyor.`)}},
   {t:'Tarafsız kal',fn:()=>{setRel(me,ally,rel(me,ally)-18);news(`${NAT[me].n} tarafsız kaldı; ${NAT[ally].n} hayal kırıklığında.`)}}]})}
  else if(rel(me,foe)<-5&&R()<.6){declareWar(foe,`Hükümet, müttefik ${ek(NAT[ally].n,'nin')} yanında savaşa girme kararı aldı.`)}
  else news(`${NAT[me].n}, ${NAT[ally].n}–${NAT[foe].n} savaşında tarafsız kaldı.`);break}}
 // düşman saldırısı
 if(!W.war){for(const f of NK.filter(k=>k!==me&&!allied(me,k))){if(rel(me,f)<-45&&R()<.05){declareWar(f,'Sınırda çatışma çıktı; sınırlı çatışma durumu ilan edildi.',1);break}if(R()<warChance(f,me)*.8){declareWar(f,'Sınır ihlal edildi; savaş durumu ilan edildi.');if(inNato(me)&&!inNato(f)){news(BLOCS[0].n+' ortak savunma maddesini işletti.');BLOCS[0].m.filter(z=>z!==me&&allied(z,me)).forEach(z=>W.wars.push({a:z,b:f,d:0}))}break}}}
 // oyuncunun cephesi
 if(W.war){W.warD=(W.warD||0)+1;if(R()<.45){const sc=S.warScore||0;const my=pwr(me)+sc*2+NK.filter(k=>allied(me,k)).length*4;const won=R()<my/(my+pwr(W.war));
   if(won){const n=transfer(W.war,me,1);news(`Cephe raporu: ${NAT[W.war].n} hattında ${n} bölge ilerledik.`);if(S.rank>=11&&R()<.35){S.wins++;log('Komuta ettiğin cephe kesiminde zafer.')}}else{const n=transfer(me,W.war,1);news(`Cephe raporu: ${NAT[W.war].n} karşı taarruzla ${n} bölge aldı.`);addSt('mental',-2)}}
  if((W.warD>(W.warLim?4:10)&&R()<(W.warLim?.3:.12))||count(W.war)<=2||count(me)<=3){const f=W.war;news(`ATEŞKES: ${NAT[me].n} ile ${NAT[f].n} ateşkes imzaladı.`);notes.push(`<b class="green">${esc(NAT[f].n)} ile ateşkes imzalandı.</b>`);setRel(me,f,rel(me,f)+25);W.war=null;W.warD=0;S.warScore=0}}
 return notes;
}
function declareWar(f,why,lim){const W=S.world;if(S.izin){S.izin=false;pickOp();S.mDone=false}S.izinNext=false;W.war=f;W.warD=0;W.warLim=!!lim;W.warWhy=/müttefik|Madde 5|yanında/.test(why)?why:pick(WHY).replace(/\{x\}/g,NAT[f].n);S.warScore=0;news(`SAVAŞ: ${NAT[S.nation].n} – ${NAT[f].n}. ${why}`);
 pushModal({k:lim?'Sınır alarmı':'Seferberlik',ti:lim?'Sınırlı çatışma':'Savaş durumu',art:mapSVG(),body:`<p>${flag(S.nation,22)} ${esc(NAT[S.nation].n)} ile ${flag(f,22)} ${esc(NAT[f].n)} arasında ${lim?'sınırlı çatışma':'savaş'} başladı.</p><div class="brief"><span class="n">?</span><div><b>Neden savaşıyoruz?</b><span class="small">${esc(W.warWhy)}</span></div></div><p>İzinler kaldırıldı. Harekâtlardan alınan tecrübe <b>1,5 kat</b>. Her başarılı harekât cepheyi ilerletebilir.</p><p class="muted small">${esc(S.partner?S.partner.name+' sana ağlayarak sarıldı.':'Arkanda bekleyen kimse yok; belki de bu yüzden korkmuyorsun.')}</p>`});addSt('mental',-6);addSt('hirs',4)}
