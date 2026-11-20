/* =====================================================================
   v20 · himaye bölgesi olayları: geniş havuz, koşullar, tekrar yok
   ===================================================================== */
function hz(cost){if((S.treasury||0)<cost){toast(`Ulusal hazinede yeterli kaynak yok (${money(cost)} gerekiyor).`);return false}S.treasury-=cost;return true}
const REV=[
 {ti:'Sahra hastanesi',w:r=>r.mem<75,b:n=>`${n} bölgesindeki tek hastane savaşta yıkıldı. Yaralılar en yakın şehre saatlerce taşınıyor.`,ch:[['Askerî sahra hastanesi kur',r=>{if(hz(r.pop*60)){r.mem=clamp(r.mem+14);toast('Hastane kuruldu. Halk minnettar.')}},'pop60'],['Sivil sağlık ekiplerini davet et',r=>{r.mem=clamp(r.mem+5)}]]},
 {ti:'Kuraklık ve su kuyusu',b:n=>`Uzun süren kuraklık ${n} bölgesindeki tarlaları kuruttu. Köylüler su istiyor.`,ch:[['İstihkâmla derin su kuyusu açtır',r=>{r.eko=clamp(r.eko-2);r.mem=clamp(r.mem+11)}],['Hazine bütçesiyle su tankerleri gönder',r=>{if(hz(r.pop*30)){r.mem=clamp(r.mem+7);r.eko=clamp(r.eko+2)}},'pop30']]},
 {ti:'Yerel liderin ziyareti',b:n=>`${n} bölgesinin sözü dinlenen yaşlılarından biri karargâha geldi. Sadakat karşılığında yolların yapılmasını istiyor.`,ch:[['Teklifi kabul et, yol yapımını başlat',r=>{r.guv=clamp(r.guv+8);r.mem=clamp(r.mem+5);r.eko=clamp(r.eko-3)}],['Şartlı kabul: önce silahların teslimi',r=>{if(R()<.6){r.guv=clamp(r.guv+12);toast('Silahlar teslim edildi; anlaşma tamam.')}else{r.mem=clamp(r.mem-5);toast('Lider şartı ağır buldu ve gücendi.')}}],['Mesafeli kal',r=>{r.mem=clamp(r.mem-3)}]]},
 {ti:'Mayınlı tarlalar',b:n=>`${n} bölgesinde çiftçiler tarlalarına giremiyor; savaştan kalma mayınlar her yerde.`,ch:[['İstihkâm timiyle mayın temizliği',r=>{r.eko=clamp(r.eko+9);r.guv=clamp(r.guv+3);if(R()<.2){addSt('mental',-4);toast('Temizlikte bir istihkâmcımız yaralandı.')}}],['Uyarı levhaları dik, sonra temizlenir',r=>{r.mem=clamp(r.mem-4)}]]},
 {ti:'Yabancı gazeteci',b:n=>`Uluslararası bir haber ajansı ${n} bölgesindeki yaşam koşulları hakkında belgesel çekmek istiyor.`,ch:[['Şeffaf ol, bölgeyi gezdir',r=>{r.mem=clamp(r.mem+4);if(r.guv>50){S.trust=clamp(S.trust+2);toast('Belgesel olumlu yayınlandı.')}else toast('Belgeselde güvenlik sorunları da yer aldı.')}],['Erişimi kısıtla',r=>{r.guv=clamp(r.guv+3);r.mem=clamp(r.mem-3)}]]},
 {ti:'Göç edenler dönüyor',b:n=>`Savaşta ${n} bölgesinden kaçan yüzlerce aile evlerine dönmek istiyor.`,ch:[['Kontrollü dönüş: kimlik kontrolü ve yardım paketi',r=>{r.pop=Math.round(r.pop*1.05+1);r.mem=clamp(r.mem+8);r.guv=clamp(r.guv-3)}],['Güvenlik sağlanana kadar ertele',r=>{r.guv=clamp(r.guv+3);r.mem=clamp(r.mem-6)}]]},
 {ti:'Elektrik santrali',w:r=>r.eko<80,b:n=>`${n} bölgesindeki santral hasarlı; şehir günde 4 saat elektrik alabiliyor.`,ch:[['Santrali onar',r=>{if(hz(r.pop*80)){r.eko=clamp(r.eko+12);r.mem=clamp(r.mem+6)}},'pop80'],['Askerî jeneratörleri paylaştır',r=>{r.eko=clamp(r.eko+4);r.mem=clamp(r.mem+2)}]]},
 {ti:'Hasat festivali',b:n=>`${n} bölgesinin halkı yıllardır yapılamayan hasat festivalini düzenlemek istiyor ve seni de davet ediyor.`,ch:[['Festivale bizzat katıl',r=>{r.mem=clamp(r.mem+10);addSt('mental',4);if(r.guv<40&&R()<.25){r.guv=clamp(r.guv-6);toast('Festivalde bir provokasyon girişimi oldu ama önlendi.')}}],['Güvenlik gerekçesiyle ertele',r=>{r.guv=clamp(r.guv+3);r.mem=clamp(r.mem-6)}]]},
 {ti:'Sınır ötesi sızma',w:r=>r.guv<75,b:n=>`Gece ${n} bölgesine sınır ötesinden silahlı bir grup sızdı; bir köyde saklanıyorlar.`,ch:[['Şafakta baskın düzenle',r=>{if(R()<clamp(.4+S.st.strat/200+(r.tah||0)*.05,.2,.9)){r.guv=clamp(r.guv+12);S.trust=clamp(S.trust+2);toast('Grup etkisiz hâle getirildi.')}else{r.guv=clamp(r.guv-6);r.mem=clamp(r.mem-4);toast('Grup kaçtı; köyde gerginlik var.')}}],['Köyü kuşat, teslim çağrısı yap',r=>{r.guv=clamp(r.guv+6);r.mem=clamp(r.mem+2)}]]},
 {ti:'Yolsuzluk iddiası',b:n=>`${n} bölgesine gönderilen yardım malzemelerinin bir kısmının yerel bir yetkili tarafından satıldığı ortaya çıktı.`,ch:[['Görevden al ve soruştur',r=>{r.mem=clamp(r.mem+8);r.guv=clamp(r.guv-2)}],['Sessizce uyar',r=>{r.mem=clamp(r.mem-4)}]]},
 {ti:'Tarihi çarşı',b:n=>`${n} bölgesinin yüzyıllık çarşısı bombardımanda hasar gördü. Esnaf, restorasyon istiyor.`,ch:[['Restorasyonu başlat',r=>{if(hz(r.pop*50)){r.eko=clamp(r.eko+7);r.mem=clamp(r.mem+7)}},'pop50'],['Esnafa geçici çadır çarşı kur',r=>{r.eko=clamp(r.eko+3)}]]},
 {ti:'Salgın uyarısı',b:n=>`${n} bölgesindeki kamplarda bulaşıcı hastalık vakaları artıyor.`,ch:[['Aşı ve hijyen kampanyası',r=>{if(hz(r.pop*35)){r.mem=clamp(r.mem+8)}},'pop35'],['Karantina ilan et',r=>{r.guv=clamp(r.guv+4);r.eko=clamp(r.eko-6);r.mem=clamp(r.mem-3)}]]},
 {ti:'Gençlik ve spor sahası',b:n=>`${n} bölgesindeki gençler savaştan beri boşta; bir öğretmen spor sahası yapılmasını öneriyor.`,ch:[['Spor sahası ve gençlik merkezi kur',r=>{r.mem=clamp(r.mem+8);r.guv=clamp(r.guv+2)}],['Gençleri meslek kurslarına yönlendir',r=>{r.eko=clamp(r.eko+5);r.mem=clamp(r.mem+3)}]]},
 {ti:'Okul ve öğretmen',b:n=>`${n} bölgesinde okul yeniden açılmaya hazır ama öğretmen yok.`,ch:[['Askerî öğretmenleri görevlendir',r=>{r.mem=clamp(r.mem+10)}],['Gönüllü öğretmen çağrısı yap',r=>{r.mem=clamp(r.mem+5)}]]},
 {ti:'Köprü ve yol',b:n=>`${n} bölgesini merkeze bağlayan köprü yıkık; ticaret kervanları 3 saatlik yolu dolanıyor.`,ch:[['İstihkâmla geçici köprü kur',r=>{r.eko=clamp(r.eko+9);r.guv=clamp(r.guv+2)}],['Kalıcı köprü ihalesi aç',r=>{if(hz(r.pop*70)){r.eko=clamp(r.eko+14)}},'pop70']]},
 {ti:'Kayıp çocuk',b:n=>`${n} bölgesinde 9 yaşında bir çocuk kayboldu; aile karargâhın kapısında.`,ch:[['Tüm birlikleri ve İHA\'ları aramaya kat',r=>{if(R()<.8){r.mem=clamp(r.mem+12);addSt('mental',5);toast('Çocuk bir mağarada bulundu; sağ salim ailesine teslim edildi.')}else{r.mem=clamp(r.mem+4);addSt('mental',-3);toast('Arama gece boyunca sürdü; çocuk ertesi sabah kendi evine döndü.')}}],['Yerel polise bildir',r=>{r.mem=clamp(r.mem-5)}]]}];
function regionEvent2(r){const atk=(S.world.war===r.from)||rel(S.nation,r.from)<-50;if(atk&&R()<.5)return regionEvent(r);
 S.revSeen=S.revSeen||[];const n=r.n;let pool=REV.filter(e=>(!e.w||e.w(r))&&!S.revSeen.includes(e.ti));if(!pool.length)pool=REV;
 if(r.mem<45&&R()<.35)return regionEvent(r);
 const e=pick(pool);S.revSeen=[...S.revSeen,e.ti].slice(-10);
 const costTxt=k=>k&&k.startsWith('pop')?` · hazine ${money(r.pop*+k.slice(3))}`:'';
 pushModal({k:'Himaye bölgesi · '+n,ti:e.ti,body:`<p>${esc(e.b(n.replace(/ bölgesi$/,'')))}</p><div class="aar"><div><span>Güvenlik</span><b>${Math.round(r.guv)}</b></div><div><span>Memnuniyet</span><b>${Math.round(r.mem)}</b></div></div><p class="small muted">Ulusal hazine: ${money(S.treasury||0)}</p>`,ch:e.ch.map(([t,f,c])=>({t:t+costTxt(c),fn:()=>{f(r);log(n+': '+e.ti)}}))})}

/* ---------- İlişkiyi bitirme ---------- */
function breakStart(){const P=S.partner;if(!P)return;const n=P.name;const m=P.m;
 pushModal({k:'İlişki',ti:m?'Boşanmak mı?':'Ayrılmak mı?',body:`<p>${esc(n)} ile ${m?'evliliğinizi':'ilişkinizi'} bitirmeyi düşünüyorsun. Bu kararın geri dönüşü yok.</p><p class="small muted">Ayrılık ruh halini düşürür ama hırsını artırır. Nasıl ayrıldığın, ne kadar acıtacağını belirler.</p>`,ch:[
  {t:'Yüz yüze, açıkça ve saygıyla konuş',fn:()=>setTimeout(()=>breakDo('saygi'),0)},
  {t:'Bir mesajla bitir',fn:()=>setTimeout(()=>breakDo('mesaj'),0)},
  {t:'Vazgeç, bir şans daha ver',fn:()=>{P.aff=clamp(P.aff+3);toast('Vazgeçtin. Belki bu sefer farklı olur.')}}]})}
function breakDo(how){const P=S.partner;if(!P)return;const n=P.name;const m=P.m;
 S.partner=null;S.exes=[...(S.exes||[]),n];S.plans=(S.plans||[]).filter(x=>x.k!=='p');
 const dm=how==='saygi'?-8:-12,dh=how==='saygi'?8:10;S.heartbreak=S.day+(how==='saygi'?6:10);addSt('mental',dm);addSt('hirs',dh);if(m&&S.money>0){const share=Math.round(S.money*.3);S.money-=share;log(`Boşanma: ${money(share)} nafaka/paylaşım.`)}
 log(n+' ile '+(m?'boşandınız.':'ayrıldınız.'));
 const txt=how==='saygi'?`<p>Sahilde, ilk buluştuğunuz bankta oturdunuz. Uzun süre konuştunuz; ikiniz de ağladınız. ${esc(n)} sonunda elini omzuna koydu: "Umarım aradığını bulursun."</p>`:`<p>Mesajı üç kez yazıp sildin. Sonunda gönderdin. Ekranda "görüldü" yazısı belirdi ama cevap hiç gelmedi.</p>`;
 pushModal({k:m?'Boşanma':'Ayrılık',ti:'Kapanan bir kapı',art:scene('kisla'),body:txt+`<p>O gece kışlada uyuyamadın. Sabah ilk iş spor salonuna gittin.</p><div class="fx"><span class="n">Ruh hali ${dm}</span><span class="p">Hırs +${dh}</span>${m?'<span class="n">Mal paylaşımı: birikiminin %30\'u</span>':''}</div><p class="small muted">${how==='saygi'?'Saygılı bir ayrılık daha az acıtır; 6 gün içinde toparlanırsın.':'10 gün boyunca ruh halin daha zor toparlanacak.'}</p>`});save();render()}
var A20={breakup:breakStart};

/* ---------- Arkadaşa sevgililik teklifi ---------- */
const canLove2=()=>!S.partner&&!(S.trauma==='esi'&&(S.heal<10||S.day<30));
function confessStart(i){const f=(S.friends||[])[+i];if(!f)return;if(!canLove2())return toast(S.partner?'Zaten bir ilişkin var.':'Kalbin henüz yeni birine hazır değil.');if((f.cf||-99)>S.day-7)return toast('Daha yeni konuştunuz; biraz zaman tanı.');
 if(f.b<45)return toast(`${f.n} ile bağınız henüz zayıf (${Math.round(f.b)}). Önce birlikte vakit geçirin.`);
 pushModal({k:'Duygular',ti:f.n,body:`<p>Bir süredir ${esc(f.n)} ile buluşmalardan sonra eve dönerken hep onu düşünüyorsun. Söylemenin vakti geldi mi?</p><p class="small muted">Kabul etme ihtimali bağınıza, ruh haline ve kendine güvenine bağlı. Reddedilirsen arkadaşlığınız zarar görebilir.</p>`,ch:[
  {t:'Bir akşam yürüyüşünde duygularını açıkla',fn:()=>setTimeout(()=>confessDo(+i,'yuz'),0)},
  {t:'Bir mektup yaz',fn:()=>setTimeout(()=>confessDo(+i,'mektup'),0)},
  {t:'Şimdilik arkadaş kalın',fn:()=>{}}]})}
function confessDo(i,how){const f=S.friends[i];if(!f)return;f.cf=S.day;const p=clamp((f.b-45)/55*.75+.12+(S.st.mental-50)/300+(typeof statu==='function'?statu()*.006:0)+(how==='yuz'?.05:0),.05,.92);
 if(R()<p){S.partner={name:f.n,aff:clamp(Math.max(55,f.b)),m:false,last:S.day};S.friends.splice(i,1);S.plans=(S.plans||[]).filter(x=>x.k!=='f'+i);addSt('mental',12);log(f.n+' ile ilişki başladı.');
  pushModal({k:'Duygular',ti:'Evet!',art:ART.sahil?ART.sahil():'',body:`<p>${how==='yuz'?`${esc(f.n)} bir an durdu, sonra gülümsedi: "Ben de aynı şeyi düşünüyordum. Neden bu kadar beklettin?"`:`Ertesi sabah telefonun çaldı. ${esc(f.n)}: "Mektubunu üç kez okudum. Bu akşam buluşalım mı?"`}</p><div class="fx"><span class="p">Ruh hali +12</span><span class="p">Yeni ilişki: ${esc(f.n)}</span></div><p class="small muted">${esc(f.n)} artık sevgilin. İlişki sekmesinden ilgilenmeyi unutma.</p>`})}
 else{const soft=f.b>=70;f.b=clamp(f.b-(soft?6:15));addSt('mental',soft?-4:-8);log(f.n+' teklifi geri çevirdi.');
  pushModal({k:'Duygular',ti:f.n,body:`<p>${soft?`"Seni çok önemsiyorum, gerçekten. Ama bu dostluğu kaybetmekten korkuyorum. Arkadaş kalalım mı?"`:`"Ben… seni hiç öyle düşünmemiştim. Biraz zamana ihtiyacım var."`}</p><div class="fx"><span class="n">Ruh hali ${soft?-4:-8}</span><span class="n">Bağ −${soft?6:15}</span></div><p class="small muted">Bir hafta sonra yeniden deneyebilirsin.</p>`})}
 save();render()}
/* buluşmadan sonra kendiliğinden bir an */
function confessMoment(k){if(!k||!k.startsWith('f')||!canLove2())return;const f=S.friends[+k.slice(1)];if(!f||f.b<70||R()>.35||(f.cf||-99)>S.day-7)return;
 setTimeout(()=>pushModal({k:'Bir an',ti:f.n,body:`<p>Gecenin sonunda ${esc(f.n)} ile kapının önünde durdunuz. Kimse "iyi geceler" demiyor; ikiniz de bir şey söylemek ister gibisiniz.</p>`,ch:[{t:'Duygularını açıkla',fn:()=>setTimeout(()=>confessDo(+k.slice(1),'yuz'),0)},{t:'"İyi geceler" de, arkadaşlığı koru',fn:()=>{f.b=clamp(f.b+2)}}]}),50)}
Object.assign(A20,{confess:confessStart});

/* ---------- Sosyal çevrede benzersiz isimler ---------- */
function takenFirst(){const s=new Set();const add=n=>{if(n)s.add(String(n).split(' ')[0])};add(S.name);(S.friends||[]).forEach(f=>add(f.n));if(S.partner)add(S.partner.name);(S.exes||[]).forEach(add);(S.kogus||[]).forEach(k=>add(k.n));if(S.tim)S.tim.m.forEach(m=>add(m.n));return s}
function socialName(){const nat=S.nation;const T_=takenFirst();const firsts=[...(FN[nat]||FN.TR),...(FNX[nat]||[])];const free=firsts.filter(x=>!T_.has(x));if(free.length)return pick(free);
 const lasts=[...(SQN[nat]||SQN.TR),...(SQX[nat]||[])];const full=new Set([...(S.friends||[]).map(f=>f.n),S.partner&&S.partner.name,...(S.exes||[])]);for(let i=0;i<30;i++){const n=pick(firsts)+' '+pick(lasts);if(!full.has(n))return n}return pick(firsts)+' '+pick(lasts)}
function fixFriends(){const F=S.friends||[];const seen=new Set();if(S.partner)seen.add(S.partner.name.split(' ')[0]);(S.kogus||[]).forEach(k=>seen.add(k.n.split(' ')[0]));seen.add((S.name||'').split(' ')[0]);
 F.forEach(f=>{const fn=f.n.split(' ')[0];if(seen.has(fn)){const lasts=[...(SQN[S.nation]||SQN.TR),...(SQX[S.nation]||[])];let n;for(let i=0;i<20;i++){n=fn+' '+pick(lasts);if(!F.some(x=>x.n===n))break}f.n=n}seen.add(f.n.split(' ')[0])})}
