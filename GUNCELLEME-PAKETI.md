# Onay sonrası büyük güncelleme paketi

Bu dosya, Apple 1.0 sürümünü onayladıktan sonra çıkacak büyük güncellemede mağazalara girilecek her şeyi içerir.
Oyun kodu hazırdır (ana kol `main`). Apple'a şu an gönderilecek sade sürüm `surum-1.0-ios` kolundadır.

## Güncellemede açılacaklar
- Yeni isim: **Büyük Yemin: Senin Hikâyen** (EN: *Grand Oath: Your Story*). Kod: `oyun-kaynak/src/v33.js` sonundaki yorum bloğu açılacak.
- Hikâye modu: Esir, Köstebek, Kriz Masası, Efsane Birlik (Türkçe ve İngilizce; diğer dillerde İngilizce).
- Mağaza: Premium, Hikâye Paketi, altın paketleri, Terfi Emri, kariyer yuvaları.
- Sürümler: iOS 1.1 · Android 1.0.2 (versionCode 3, taslak yapı hazır).

## Senin yapacakların (bir kez)
1. App Store Connect → Business: Paid Apps sözleşmesi, banka hesabı, vergi formları.
2. App Store Connect → Business: DSA (trader) beyanı.
3. Google Play Console → Ödeme profili (Payments profile) etkin mi kontrol.

## Satın alma ürünleri (iki mağazada aynı kimlikler)

| Kimlik (Product ID) | Tür | Fiyat | TR adı | EN adı |
|---|---|---|---|---|
| com.gulergamestudios.buyukyemin.premium | Tüketilmeyen (Non-consumable) | 399 TL | Premium | Premium |
| com.gulergamestudios.buyukyemin.hikaye | Tüketilmeyen (Non-consumable) | 149 TL | Hikâye Paketi | Story Pack |
| com.gulergamestudios.buyukyemin.altin_buyuk | Tüketilen (Consumable) | 149 TL | 2.200 Altın | 2,200 Gold |
| com.gulergamestudios.buyukyemin.altin_kucuk | Tüketilen (Consumable) | 79 TL | 800 Altın | 800 Gold |
| com.gulergamestudios.buyukyemin.terfi | Tüketilen (Consumable) | 79 TL | Terfi Emri | Promotion Order |

Diğer ülkelerin fiyatı: mağazanın TL fiyatına göre otomatik eşdeğer fiyatı.

### Ürün açıklamaları (en fazla 45 karakter, Apple sınırı)
- Premium · TR: Tüm oyun: 4 hikâye, 2× tecrübe, reklamsız · EN: All stories, 2× XP, no ads and more
- Hikâye Paketi · TR: 4 hikâyenin tamamı ve tüm sonlar · EN: All 4 stories and every ending
- 2.200 Altın · TR: Kariyerinde harcamak için 2.200 altın · EN: 2,200 gold to spend in your career
- 800 Altın · TR: Kariyerinde harcamak için 800 altın · EN: 800 gold to spend in your career
- Terfi Emri · TR: Anında 1 rütbe terfi ve +1 eylem hakkı · EN: Instant promotion and +1 daily action

### Apple inceleme notu (her ürün için ortak)
> Open the app → main menu → "Mağaza ve Premium" (Store and Premium), or tap the crown icon in the top bar during a career. Premium and the Story Pack are one-time purchases and can be restored with "Satın alımları geri yükle" (Restore purchases). Gold is spent in the "Altınla Al" (Buy with gold) tab. The Promotion Order requires an active career and can be used once per rank.

### İnceleme ekran görüntüleri
`magaza-paketi/iap/` klasöründe: `premium.png`, `hikaye.png`, `terfi-ve-altin.png` (1170×2532).

## Mağaza metinleri

### Yeni ad
- TR: Büyük Yemin: Senin Hikâyen
- EN: Grand Oath: Your Story

### Alt başlık (30 karakter)
- TR: Askerî kariyer ve hikâyeler
- EN: Military career and stories

### Açıklamaya eklenecek bölüm (TR)
> HİKÂYE MODU
> Kararlarınla şekillenen dört özgün hikâye: Esir, Köstebek, Kriz Masası ve Efsane Birlik. Düşman hattında esir düşen bir timin kaçışı, karargâhtaki haini on günde bulmaya çalışan bir istihbaratçı, kırk sekiz saatlik bir rehine krizi ve yetmiş yıllık bir sır. Her hikâyenin birden fazla sonu var; her hikâyenin ilk bölümü ücretsiz.
>
> PREMIUM
> İstediğin rütbeden başla, iki kat tecrübe kazan, her gün fazladan eylem hakkı al, reklamsız oyna. Hikâye Paketi dahil. Tek seferlik ödeme, abonelik değildir.

### Açıklamaya eklenecek bölüm (EN)
> STORY MODE
> Four original stories shaped by your choices: Captive, The Mole, Crisis Room and Legendary Unit. A squad escaping captivity behind enemy lines, an intelligence officer hunting a traitor at HQ in ten days, a 48-hour hostage crisis, and a seventy-year-old secret. Every story has multiple endings, and the first chapter of each is free.
>
> PREMIUM
> Start at any rank, earn double experience, get extra actions every day and play without ads. Story Pack included. One-time payment, not a subscription.

### Bu sürümdeki yenilikler (TR)
> • Yeni isim: Büyük Yemin: Senin Hikâyen
> • Hikâye modu: 4 özgün hikâye, her birinde farklı sonlar (1. bölümler ücretsiz)
> • Mağaza: Premium, Hikâye Paketi, altın paketleri ve Terfi Emri
> • Premium ile istediğin rütbeden başlama ve 3 kariyer yuvası
> • Hata düzeltmeleri ve iyileştirmeler

### Bu sürümdeki yenilikler (EN)
> • New name: Grand Oath: Your Story
> • Story mode: 4 original stories with multiple endings (first chapters free)
> • Store: Premium, Story Pack, gold packs and Promotion Order
> • Premium: start at any rank and use 3 career slots
> • Bug fixes and improvements

### Yeni ekran görüntüleri
`magaza-paketi/ekran/` klasöründe, TR ve EN, 1290×2796 (iPhone 6.9"): hikâye listesi, Efsane Birlik girişi, hikâye sahnesi, Köstebek soruşturması, Premium, rütbe yolu.

## Gizlilik ve yaş derecesi
- App Store gizlilik bilgisi: "Purchases" (Satın alma geçmişi) eklenecek; kimliğe bağlı değil, takip için kullanılmıyor, amaç "App Functionality".
- Google Play Veri güvenliği: "Satın alma geçmişi" eklenecek, aynı şekilde.
- Yaş derecesi: "Gerçekçi şiddet: seyrek/hafif" (kayıplar metinle anlatılıyor). Uygulama içi satın alma var olarak işaretlenecek.

## Gönderim sırası (onaydan sonra)
1. Sözleşme ve banka adımları tamam mı kontrol.
2. Ürünleri iki mağazada tanımla, inceleme görüntülerini yükle.
3. Test hesabıyla (Apple Sandbox / Google lisans testçisi) her ürünü bir kez satın al ve geri yüklemeyi dene.
4. Yeni adı ve metinleri mağazalara gir, ekran görüntülerini yükle.
5. iOS 1.1 yapısını derle (`main` kolu, reklam modu: gercek); Android 1.0.2 yapısını yükle.
6. Kullanıcı onayıyla incelemeye gönder.
