# Büyük Yemin · Uygulama ve AdMob kurulumu

**Senin iOS kimliklerin (ads.js'e işlendi):**
- Uygulama kimliği: `ca-app-pub-4370898434583301~6904985896` → Info.plist `GADApplicationIdentifier`
- Geçiş reklamı: `ca-app-pub-4370898434583301/3808049262`
- Ödüllü reklam: `ca-app-pub-4370898434583301/6657573885`

`ads.js` içinde `TEST = true` iken bu kimliklerle Google test reklamları gelir. App Store'a göndermeden hemen önce `TEST = false` yap.

## 0. Gerekenler
- Bilgisayarına **Node.js 20 veya üstü** (nodejs.org)
- Android için **Android Studio**
- iOS için **Mac + Xcode** (iOS uygulaması yalnızca Mac'te derlenir)
- **AdMob hesabı** (admob.google.com), **Google Play geliştirici hesabı** (tek seferlik 25 $), **Apple Developer Program** (yıllık 99 $)

## 1. Projeyi kur
Bu klasörde bir terminal aç:
```
npm install
npx cap add android
npx cap add ios        (sadece Mac'te)
npx cap sync
```
`capacitor.config.json` içindeki `com.SIRKETIN.buyukyemin` kısmını kendine ait benzersiz bir adla değiştir (ör. `com.ahmetyilmaz.buyukyemin`). Mağazaya bir kez yüklendikten sonra değiştirilemez.

## 2. AdMob'da uygulamayı ve reklam birimlerini oluştur
AdMob panelinde **Uygulamalar → Uygulama ekle**: önce Android, sonra iOS için ayrı ayrı.
Her biri için iki reklam birimi oluştur:
- **Geçiş reklamı** (Interstitial)
- **Ödüllü reklam** (Rewarded)

Elinde şunlar olacak:
- Android uygulama kimliği: `ca-app-pub-XXXX~YYYY`
- iOS uygulama kimliği: `ca-app-pub-XXXX~ZZZZ`
- 4 reklam birimi kimliği: `ca-app-pub-XXXX/....`

## 3. Uygulama kimliğini ekle
**Android:** `android/app/src/main/AndroidManifest.xml` dosyasında `<application>` etiketinin içine:
```xml
<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-XXXX~YYYY"/>
```

**iOS:** `ios/App/App/Info.plist` içine:
```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-XXXX~ZZZZ</string>
<key>NSUserTrackingUsageDescription</key>
<string>Sana daha uygun reklamlar göstermek için kullanılır.</string>
```
Ayrıca Google'ın güncel **SKAdNetworkItems** listesini de Info.plist'e ekle (AdMob iOS kurulum sayfasında hazır liste var).

Test aşamasında kendi kimliklerin yerine Google'ın test uygulama kimliklerini kullanabilirsin:
- Android: `ca-app-pub-3940256099942544~3347511713`
- iOS: `ca-app-pub-3940256099942544~1458002511`

## 4. Önce test reklamlarıyla dene
`www/ads.js` dosyasında `TEST = true` ve test reklam birimleri hazır. 
```
npx cap sync
npx cap open android     (Android Studio açılır → telefonu bağla → Run)
```
Kontrol et: eylem hakkı bitince "+1 eylem hakkı" gerçek test videosunu açmalı ve video bitince hak gelmeli. 4. günden sonra 2 günde bir geçiş reklamı çıkmalı.

## 5. Gerçek reklamlara geç
`www/ads.js` içinde:
- `TEST = false`
- `IDS` içindeki 4 kimliği kendi reklam birimlerinle değiştir.
Sonra `npx cap sync`.

**Uyarı:** Kendi reklamlarına asla tıklama ve kendini izleme; AdMob hesabı kapatılabilir. Kendi telefonunu AdMob panelinde "test cihazı" olarak ekle.

## 6. Mağaza öncesi zorunlular
- **app-ads.txt:** Bir web sitende (basit bir sayfa yeter) `app-ads.txt` dosyası yayınla; AdMob sana içeriğini verir. Mağaza sayfandaki web sitesi adresi bu siteyi göstermeli.
- **Gizlilik politikası** sayfası (reklam ve veri kullanımı yazmalı). İki mağaza da istiyor.
- **Avrupa izin formu:** AdMob panelinde **Gizlilik ve mesajlaşma → GDPR** mesajını oluştur; oyun açılışta otomatik gösterir.
- **Google Play veri güvenliği formu** ve **Apple gizlilik etiketleri:** "Reklam kimliği toplanır, reklam için kullanılır" diye işaretle.
- **Yaş sınırı:** Savaş içeriği nedeniyle muhtemelen 12+ / 16+.

## Sınırları değiştirmek
Reklam sınırlarının hepsi oyun kodundaki `ADCFG` ayarında (geçiş reklamı 2 günde bir, +1 eylem günde 3 ve 20 dk ara, vb.).
