/* ============ v28: KUVVETE GÖRE DOĞRU BİRLİK ve GÖREV ADLARI ============ */
UL8.kara.splice(0,12,'Tim','Çift Tim','Manga','Takım','Bölük','Tabur','Alay','Tugay','Tümen','Kolordu','Ordu','Kuvvet Komutanlığı');
UL8.deniz.splice(0,12,'Gemi Timi','Bölüm','Kısım','Hücumbot','Korvet','Filotilla','Filo','Görev Grubu','Filo Komutanlığı','Deniz Bölge Komutanlığı','Donanma','Deniz Kuvvetleri');
UL8.hava.splice(0,12,'Uçuş Ekibi','Kol','Takım','Filo Kısmı','Filo','Grup','Üs','Ana Jet Üssü','Taktik Hava Komutanlığı','Hava Bölge Komutanlığı','Hava Kuvveti','Hava Kuvvetleri');
const UROLEK={
 kara:['Tim eri','Tim lideri','Manga komutanı','Takım komutanı','Bölük komutanı','Tabur komutanı','Alay komutanı','Tugay komutanı','Tümen komutanı','Kolordu komutanı','Ordu komutanı','Kuvvet komutanı'],
 deniz:['Güverte eri','Bölüm sorumlusu','Kısım amiri','Hücumbot komutanı','Korvet komutanı','Filotilla komutanı','Filo komutanı','Görev grubu komutanı','Filo komutanlığı komutanı','Deniz bölge komutanı','Donanma komutanı','Deniz Kuvvetleri Komutanı'],
 hava:['Uçuş ekibi üyesi','Kol lideri','Takım komutanı','Filo kısım komutanı','Filo komutanı','Grup komutanı','Üs komutanı','Ana jet üs komutanı','Taktik hava komutanı','Hava bölge komutanı','Hava Kuvveti komutanı','Hava Kuvvetleri Komutanı']};
function urole(l){return (UROLEK[uKind()]||UROLEK.kara)[l]}
UROLE8.splice(0,12,...UROLEK.kara);
const KEYR={
 deniz:[['Bölüm sorumlusu','Topçu','Makineci'],['Topçu','Makineci','Sıhhiyeci','Telsizci','Güverte eri'],['1. Bölüm sorumlusu','2. Bölüm sorumlusu','Nişancı','Sıhhiyeci','Telsizci','Dron operatörü'],['Seyir astsubayı','Silah astsubayı','Makine astsubayı','Güverte çavuşu','Sıhhiye astsubayı','Muhabere astsubayı'],['Birinci zabit','Seyir subayı','Silah subayı','Makine başçavuşu','Muhabere astsubayı','Sıhhiye astsubayı'],['Kurmay başkanı','Harekât subayı','İstihbarat subayı','Lojistik subayı','1. Korvet komutanı','2. Korvet komutanı']],
 hava:[['Kol lideri','Uçak teknisyeni','Silah teknisyeni'],['Uçak teknisyeni','Silah teknisyeni','Sıhhiyeci','Telsizci','Yakıt teknisyeni'],['1. Kol lideri','2. Kol lideri','Bakım çavuşu','Sıhhiyeci','Muhabere','Dron operatörü'],['1. Kol lideri','2. Kol lideri','3. Kol lideri','Bakım astsubayı','Silah astsubayı','Sıhhiye astsubayı'],['1. Kısım komutanı','2. Kısım komutanı','Harekât subayı','Bakım subayı','İstihbarat astsubayı','Muhabere astsubayı'],['Kurmay başkanı','Harekât subayı','İstihbarat subayı','Lojistik subayı','1. Filo komutanı','2. Filo komutanı']]};
function keyRoles(lv){const kd=uKind();const sub=lv>=1?UL8[kd][Math.max(0,lv-1)]:'';
 if(KEYR[kd]&&KEYR[kd][lv])return KEYR[kd][lv];
 return [['Tim lideri','Nişancı','Makineli tüfekçi'],['Nişancı','Makineli tüfekçi','Sıhhiyeci','Telsizci','İstihkâmcı'],['1. Tim lideri','2. Tim lideri','Keskin nişancı','Sıhhiyeci','Telsizci','Dron operatörü'],['1. Manga komutanı','2. Manga komutanı','3. Manga komutanı','Takım çavuşu','Keskin nişancı','Sıhhiye astsubayı'],['1. Takım komutanı','2. Takım komutanı','3. Takım komutanı','Destek takım komutanı','Bölük başçavuşu','Muhabere astsubayı'],['Kurmay başkanı','Harekât subayı','İstihbarat subayı','Lojistik subayı','1. Bölük komutanı','2. Bölük komutanı']][lv]||['Kurmay başkanı','Harekât başkanı','İstihbarat başkanı','Lojistik başkanı','1. '+sub+' komutanı','2. '+sub+' komutanı']}
/* eski kayıtlarda görev adlarını düzelt */
function rolesFix(){if(!S||!S.tim||S.rolesV===2)return;const R_=keyRoles(S.tim.lv);S.tim.m.forEach((m,i)=>{if(R_[i])m.r=R_[i]});S.rolesV=2}
/* Birlik başlığı: üst kademelerde takma ad kullanılmaz, en üstte "… Komutanlığı" */
function forceName(){const n=B().n.split('·')[0].trim();return n}
function unitTitle(lv=uLv()){const u=UL8[uKind()][lv];if(lv>=11)return forceName()+' Komutanlığı';if(lv>=10)return u;return (S.tim?S.tim.name+' ':'')+u}
function emblemText(lv=uLv()){const t=(lv>=11?forceName():UL8[uKind()][lv]).toLocaleUpperCase(typeof LANG!=='undefined'&&LANG!=='tr'?'en':'tr');return t}
