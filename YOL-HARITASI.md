# Büyük Yemin — Yol Haritası ve Kararlar

_Son güncelleme: 13 Kasım 2026_

## Durum
- **Android:** 1.0.1 (sürüm kodu 2) kapalı testte, Google incelemesinde.
  İçerik: şehre göre tayin, rütbeyle uyumlu yaşlanma, dengeli terfi, mareşal sonrası devlet kariyeri,
  SAT/ÖKK davetleri, yanlış kararlarda şehit, askerî fon müziği.
- **iOS:** 1.0 (yapı 7) App Store incelemesinde. 4 Kasım'da gönderildi, 12 Kasım'da hızlandırma istendi ve kabul edildi.
  13 Kasım'da Apple Destek'e yazıldı, vaka no **30000014208626**.
- Apple hesabı e-postası: nefilim.123@icloud.com · App Review iletişim: furkan.glr1@outlook.com

## Sonraki güncelleme (1.0.1 iOS / 1.0.2 Android) — Apple 1.0'ı onaylayınca
1. **Yeni ad:** "Büyük Yemin: Senin Hikâyen" (EN: "Grand Oath: Your Story"). Telefondaki simge adı "Büyük Yemin" kalır.
2. **Fon müziği:** "Kurultay": karanlık savaş davulları + "HUH!" diyen savaşçılar, tiz ses yok
   (kodda hazır: game/src/v31.js → MUS31).
3. **Mağaza sekmesi:** Alt menüde "Mağaza", üst çubukta taç, ana menüde "Mağaza ve Premium".
   İki sekme: "Premium ve Paketler" / "Altınla Al". Satın alımları geri yükle düğmesi. Altın harcamada onay ekranı.
4. **Premium kartı** Karargâh'ta Rütbe Yolu'nun hemen üstünde. Kilitli rütbelerde taç simgesi.
   Satın alınınca kart kalkar, yerine "Rütbe seç" gelir.
5. **Satın alma verileri** toplanacak (görüntülenme / satın alma), birkaç hafta sonra değerlendirilecek.

## Mağaza ve fiyatlar (kesin)
| Paket | Fiyat | İçerik |
|---|---|---|
| Premium | 399 TL | Hikâye Paketi + rütbe seçerek başlama (Er → Cumhurbaşkanı) + kalıcı 2× tecrübe + günde +2 eylem + reklamsız + her ay 500 altın + günde 1 harekât tekrarı + 3 kariyer yuvası + özel üniforma/rozet |
| Hikâye Paketi | 149 TL | Esir, Köstebek, Kriz Masası, Efsane Birlik (tamamı) |
| Büyük altın | 149 TL | 2.200 altın (%40 bonus) |
| Terfi Emri | 79 TL | Anında 1 rütbe + kalıcı +1 eylem (aynı rütbede bir kez) |
| Küçük altın | 79 TL | 800 altın |

- **Reklamsız ayrı paket ilk etapta YOK** (deneme). Premium = reklamsız oyunun tek yolu. Satış verisine göre geri eklenebilir.
- Premium değer yazısı: "Hikâye Paketi + 12 ay altın: 700 TL'den fazla" (149 + ~590 = ~739 TL). Sahte indirim yok.
- Altınla rütbe alınamaz; ev, araba, silah, kozmetik, eylem hakkı alınır.
- Baskı unsuru yok (geri sayım vb.); fiyatlar açıkça TL.
- Gerekenler (Furkan): Google ödeme profili, Apple Paid Apps sözleşmesi, AB tacir (DSA) beyanı.

## Hikâye modu
- Her hikâyenin **ilk bölümü ücretsiz**; tamamı Hikâye Paketi ya da Premium ile açılır.
- Hepsi **kurgusal** ülke ve kişilerle; gerçek savaş, kişi ve hassas olay yok. 13+ uygun.
- Sıra: önce mağaza/premium güncellemesi, sonra **Esir** ve **Köstebek**, ardından Kriz Masası ve Efsane Birlik.

### Esir
Gece keşfinde pusuya düşen çavuş ve iki arkadaşı esir alınır. Bölümler: Pusu (ücretsiz) → Hücre (sorgu) →
Plan (kampı gözle, kime güvenilir?) → Kaçış (tel örgü, takip) → Dönüş (mayınlı arazi).
Göstergeler: moral, sağlık, arkadaş bağı. Sonlar: Kahraman dönüşü / Acı zafer / Tek başına / Bedel.
Ödül: kariyerde "Esaretten Dönen" madalyası.

### Köstebek
Son 3 harekât baskına uğradı. Genelkurmay İstihbarat seni gizlice görevlendirir: köstebeği 10 günde bul.
Şüpheliler: Yzb. Kaya (yakın arkadaş, borçlu), Bnb. Aras (hırslı), Muhabere Çvş. Deniz (gece vardiyası),
Tercüman Leyla (ailesi sınırın öbür yanında), Lojistik Sb. Emre (fazla kusursuz), Alb. Tekin (komutan).
Günlük eylemler: ifade alma (çelişkiler not defterine), kanıt toplama (telsiz kaydı, nöbet çizelgesi,
giriş-çıkış defteri, yanmış not, banka dökümü), takip (fark edilme riski), **tuzak** (sahte bilgi ver, sızıyor mu bak),
**kanıt panosu** (ipliklerle bağla). Baskı: sızıntı sürdükçe şehit; köstebek seni fark edip kanıt yok edebilir.
Final: 10. gün suçlama + sorgu odası yüzleşmesi. **Köstebek her oyunda farklı kişi olabilir.**
Sonlar: ağı çökert / yanlış kişi (gerçek sonra ortaya çıkar) / köstebeği çift ajana çevir (gizli en iyi son).

### Kriz Masası
Cumhurbaşkanı olarak kurgusal bir ülkede basılan büyükelçilik, 23 rehine, 48 saat. Danışmanlar
(istihbarat, dışişleri, özel kuvvetler) farklı öneriyor; saat saat gelişmeler (basın sızıntısı, rehine videosu,
müttefik telefonu). Etkiler: halk onayı, diplomasi, rehinelerin hayatı.

### Efsane Birlik
Huzurevindeki 94 yaşındaki son hayatta kalan askerin anlattıkları geri dönüşlerle oynanır (kuruluş,
köprü savunması, kayıplar). Sonda birliğin neden unutturulduğu ortaya çıkar.
