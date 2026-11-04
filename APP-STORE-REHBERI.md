# Büyük Yemin · App Store yayın rehberi

iOS sürümü **GitHub Actions** üzerinde, GitHub'ın Mac sunucusunda derlenir ve doğrudan **TestFlight**'a yüklenir. Mac gerekmez.

---

## 1. Apple Geliştirici hesabı (bir kez)
1. developer.apple.com/programs → **Enroll** → Apple hesabınla giriş yap.
2. Bireysel (Individual) kayıt yeterli. Yıllık **99 $**. Onay genelde 1–2 gün sürer.
3. Onaylandıktan sonra developer.apple.com → **Membership** sayfasındaki **Team ID**'yi not al (10 karakter, ör. `AB12CD34EF`).

## 2. App Store Connect'te uygulamayı oluştur
appstoreconnect.apple.com → **Uygulamalar → + → Yeni Uygulama**
- Platform: **iOS**
- Ad: **Büyük Yemin: Erden Mareşale**
- Birincil dil: **Türkçe**
- Paket kimliği (Bundle ID): **com.gulergamestudios.buyukyemin**
  - Listede yoksa: developer.apple.com → Certificates, IDs & Profiles → Identifiers → + → App IDs → bu kimliği **Explicit** olarak kaydet.
- SKU: `buyukyemin-ios`

## 3. App Store Connect API anahtarı (otomatik imza ve yükleme için)
App Store Connect → **Kullanıcılar ve Erişim → Entegrasyonlar → App Store Connect API → Takım Anahtarları → +**
- Ad: `GitHub Actions`
- Erişim: **Admin** (sertifika ve profilleri otomatik oluşturabilmesi için gerekli)
- **.p8 dosyasını indir.** Yalnızca bir kez indirilebilir; sakla.
- Sayfadaki **Issuer ID** ve anahtarın **Key ID** değerini not al.

## 4. GitHub deposuna gizli değişkenleri ekle
Depo → **Settings → Secrets and variables → Actions → New repository secret**

| Ad | Değer |
|---|---|
| `APP_STORE_KEY_ID` | Key ID (ör. `2X9R4HXF34`) |
| `APP_STORE_ISSUER_ID` | Issuer ID (uzun UUID) |
| `APP_STORE_KEY_P8` | .p8 dosyasının **tüm içeriği** (`-----BEGIN PRIVATE KEY-----` dahil) |
| `APPLE_TEAM_ID` | Team ID |

Bu değerleri kimseyle paylaşma ve sohbete yapıştırma. Doğrudan GitHub'a kendin gir.

## 5. Derle ve TestFlight'a yükle
Depo → **Actions → "iOS → TestFlight" → Run workflow**
- `reklam_modu`: TestFlight denemesi için **test**, App Store'a gönderilecek sürüm için **gercek**.
- Yaklaşık 15–25 dakika sürer. Bitince yapı App Store Connect → **TestFlight**'ta görünür (işlenmesi 10–30 dk).
- Her çalıştırmada yapı numarası otomatik artar.

## 6. Mağaza sayfası (App Store Connect → Uygulama → iOS Uygulaması 1.0)

**Türkçe**
- Ad (30): `Büyük Yemin: Erden Mareşale`
- Alt başlık (30): `Askerî kariyer ve strateji`
- Tanıtım metni (170): `Er olarak başla, gerçek zamanlı harekâtları yönet, rütbe rütbe yüksel ve devletin zirvesine çık. Kurgusal bir dünyada kariyer, strateji ve hayat tek oyunda!`
- Anahtar kelimeler (100): `asker,strateji,savaş,simülasyon,harekat,komutan,ordu,rütbe,mareşal,taktik,kariyer,devlet,general,tim`
- Açıklama: Google Play'deki tam açıklamanın aynısı (`MAGAZA-METINLERI.md`).
- Destek URL'si: gizlilik politikası sayfası veya Vercel adresin
- Gizlilik Politikası URL'si: `https://claude.ai/artifact/B2nPepMZ5ygLVw7YCnKbdp`

**English (Çeviri ekle → İngilizce)**
- Name: `Grand Oath: Private to Marshal`
- Subtitle: `Military career & strategy`
- Keywords: `army,soldier,war,strategy,simulator,military,commander,tactics,rank,career,general,officer,battle`

**Görseller**
- iPhone 6.9" ekran görüntüleri: `appstore-ekran-1.png` … `appstore-ekran-8.png` (1320×2868)
- Uygulama simgesi yapıdan otomatik alınır (`appstore-ikon-1024.png` yedek).
- Uygulama yalnızca iPhone için ayarlandı; iPad ekran görüntüsü gerekmez.

**Kategori:** Oyunlar → Strateji (ikincil: Simülasyon)

## 7. Yaş derecelendirmesi (anket cevapları)
- Gerçekçi şiddet: **Seyrek/Hafif** (metin temelli, kan yok)
- Çizgi/fantastik şiddet: Yok
- Alkol, tütün veya uyuşturucu kullanımı/atfı: **Seyrek/Hafif**
- Cinsellik / çıplaklık: Yok · Kaba dil: Yok · Korku: Yok
- Kumar / simüle kumar: Yok · Yarışma: Yok
- Kullanıcılar arası sohbet / kullanıcı içeriği: Yok · Sınırsız web erişimi: Yok
- Beklenen sonuç: **13+**

## 8. Uygulama Gizliliği (veri etiketleri)
"Veri topluyor musunuz?" → **Evet** (AdMob nedeniyle)

| Veri türü | Kullanım | Kimliğe bağlı mı | İzleme için mi |
|---|---|---|---|
| Tanımlayıcılar → Cihaz kimliği | Üçüncü taraf reklam, Analiz | Hayır | **Evet** |
| Konum → Yaklaşık konum | Üçüncü taraf reklam, Analiz | Hayır | **Evet** |
| Kullanım verileri → Ürün etkileşimi, Reklam verileri | Üçüncü taraf reklam, Analiz | Hayır | **Evet** |
| Tanılama → Çökme ve performans verileri | Analiz | Hayır | Hayır |

Oyun iOS'ta açılışta **izleme izni (ATT)** ister; Info.plist'e açıklama metni eklendi.

## 9. İncelemeye gönder
- TestFlight'ta kendi iPhone'unda dene (TestFlight uygulaması → davet e-postası).
- **İnceleme notu** (App Review Information → Notes): `Oyun hesap gerektirmez. Tüm devletler, kişiler ve silah adları kurgusaldır; yalnızca oyuncunun seçtiği ülke gerçektir. Reklamlar Google AdMob ile gösterilir.`
- Sürüm sayfasında yapıyı seç → **İncelemeye Gönder**. İnceleme genelde 1–3 gün sürer.

## Hazır olanlar
- Capacitor iOS projesi (iPhone, dikey, sürüm 1.0.0, Bundle ID `com.gulergamestudios.buyukyemin`)
- AdMob iOS kimliği `ca-app-pub-4370898434583301~6904985896`, ATT açıklaması, 50 SKAdNetwork kimliği, şifreleme beyanı (`ITSAppUsesNonExemptEncryption = NO`)
- GitHub Actions iş akışı: `.github/workflows/ios-testflight.yml`
