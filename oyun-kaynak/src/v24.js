/* ============ v24: DENGELİ HALKA SESLENİŞ + BASIN SORULARI ============ */
const SPT={
 eko:['Ekonomi',['ekonomi','istihdam','iş imkan','maaş','enflasyon','fiyat','üretim','yatırım','çiftçi','esnaf','ihracat','vergi','kira','geçim','alım gücü']],
 guv:['Güvenlik',['güvenlik','terör','sınır','asker','ordu','savunma','şehit','kahraman','koru','huzur','polis','jandarma']],
 bir:['Birlik',['birlik','beraber','kardeş','millet','vatan','bayrak','hep birlikte','omuz omuza','tek yürek']],
 gen:['Gençlik ve eğitim',['genç','çocuk','gelecek','eğitim','okul','üniversite','öğretmen','öğrenci']],
 sag:['Sağlık ve emekliler',['sağlık','hastane','doktor','emekli','yaşlı','engelli','şefkat']],
 dis:['Dış politika',['dünya','komşu','barış','diplomasi','müttefik','uluslararası','dostluk']],
 ada:['Adalet',['adalet','hukuk','şeffaf','hesap vere','yolsuzluk','denetim','liyakat','eşitlik']]};
const SPW={umut:['umut','yarın','başaracağız','inşa','güçlü','gurur','başar','aydınlık','birlikte','güzel günler','huzur'],
 soz:['söz veriyorum','yapacağız','başlatıyoruz','hayata geçir','açacağız','kuracağız','artıracağız','indireceğiz','milyon','milyar','yüzde','bu ay','bu yıl','haftaya'],
 emp:['acı','yas','anlıyorum','yanınızdayım','geçmiş olsun','başınız sağ','teşekkür','minnet','fedakâr','hakkınızı'],
 sert:['haddini','alçak','hain','ezeceğiz','yok edeceğiz','cezalandır','pişman edeceğiz','gebertece','kökünü kazı'],
 bol:['ihanet','hainler','sözde','bazı çevreler','beşinci kol','vatan haini'],
 ego:['ben yaptım','benim sayemde','bana borçlu','tek başıma']};
const SEG=[['Gençler',['gen','eko']],['Emekliler',['sag','eko']],['İş dünyası',['eko','ada']],['Güvenlik çevreleri',['guv','bir']],['Muhalefet',['ada','dis']]];

function speechEval(t){const s=t.toLocaleLowerCase('tr');const has=w=>s.includes(w);const cnt=L=>L.filter(has).length;
 const th=Object.keys(SPT).filter(k=>SPT[k][1].some(has));const m={};Object.keys(SPW).forEach(k=>m[k]=cnt(SPW[k]));const digits=/\d/.test(s);
 const P=S.pol;let d=.5;const why=[];
 d+=Math.min(3,th.length)*.8;if(th.length)why.push(['p','Değindiğin konular: '+th.map(k=>SPT[k][0]).join(', ')]);else why.push(['n','Somut bir konuya değinmedin']);
 const weak=P.ekon<50?'eko':P.guv<50?'guv':null;if(weak&&th.includes(weak)){d+=2;why.push(['p',`Halkın en çok merak ettiği konuya (${SPT[weak][0].toLocaleLowerCase('tr')}) değindin`])}else if(weak){d-=1;why.push(['n',`Gündemdeki ${SPT[weak][0].toLocaleLowerCase('tr')} sorununa değinmedin`])}
 if(m.umut){d+=Math.min(1.5,m.umut*.75);why.push(['p','Umut veren bir dil'])}
 if(m.soz||digits){d+=1.5;why.push(['p','Somut vaatler ve rakamlar'])}
 if(m.emp){d+=1;why.push(['p','Empati ve teşekkür'])}
 if(m.sert){d-=2.5*m.sert;why.push(['n','Sert ve tehditkâr ifadeler'])}
 if(m.bol){d-=1.5*m.bol;why.push(['n','Ayrıştırıcı bir dil'])}
 if(m.ego){d-=2;why.push(['n','Başarıyı kendine mal ettin'])}
 if(t.length<60){d-=1;why.push(['n','Çok kısa kaldı'])}else if(t.length>=120&&t.length<=480)d+=1;else if(t.length>480){d-=1;why.push(['n','Fazla uzun; dikkat dağıldı'])}
 const main=th[0]||null;if(main&&P.lastTh===main){d-=1;why.push(['n','Aynı konuyu tekrar ettin'])}
 d=clamp(Math.round(d+(R()*2-1)),-7,8);
 const seg=SEG.map(([n,ks])=>{let v=d/3+ks.filter(k=>th.includes(k)).length*1.5-(n==='Muhalefet'?1.5:0)-(m.sert&&n!=='Güvenlik çevreleri'?1:0)+(m.sert&&n==='Güvenlik çevreleri'?.5:0);return[n,Math.round(clamp(50+v*6,5,95))]});
 return{d,th,m,why,main,seg}}

const SPH={eko:['Ekonomi mesajı piyasaları rahatlattı','Geçim derdine dokunan konuşma','Ekonomi vaatleri tartışılıyor'],guv:['Güvenlik vurgusu güven verdi','Askerlere ve ailelere güçlü mesaj','Güvenlik mesajı sert bulundu'],bir:['Birlik çağrısı geniş kesimden destek aldı','Kardeşlik vurgusu öne çıktı','Birlik çağrısı inandırıcı bulunmadı'],gen:['Gençlere umut aşılayan konuşma','Eğitim vaatleri gündemde','Gençler konuşmayı soğuk karşıladı'],sag:['Emeklilere sıcak mesaj','Sağlık vaatleri olumlu karşılandı','Emekliler somut adım bekliyor'],dis:['Dış politikada ölçülü mesaj','Barış vurgusu dikkat çekti','Dış politika mesajı kafa karıştırdı'],ada:['Şeffaflık sözü güven tazeledi','Adalet vurgusu alkış aldı','Adalet vaadi şüpheyle karşılandı'],_:['Konuşma geniş yankı uyandırdı','Ölçülü bir konuşma','Konuşma tepki çekti']};
const PRS=['Ulusal Haber','Ekonomi Gazetesi','Gece Bülteni','Bağımsız Medya','Sabah Ajansı','Meclis Muhabiri'];
const PQ=[
 {k:'eko',q:'Market fiyatları her hafta artıyor. Vatandaşa somut bir müjdeniz var mı?',a:[['Temel gıdada vergi indirimi ve kira desteği önümüzdeki ay başlıyor.',3,{ekon:1}],['Rakamlar yakında düzelecek, biraz sabır istiyorum.',-1],['Bu soruyu size muhalefet mi yazdırdı?',-3]]},
 {k:'eko',q:'Gençler iş bulamıyor. İşsizlik için planınız ne?',a:[['İlk iş programıyla iki yüz bin gence staj ve istihdam sağlayacağız.',3,{ekon:1}],['Girişimciliği destekleyecek teşvikler hazırlıyoruz.',1],['İş var ama beğenmiyorlar.',-4]]},
 {k:'eko',q:'Bütçe açığı büyürken yeni harcama vaatlerini nasıl karşılayacaksınız?',a:[['İsrafı keseceğiz; kaynak planını yarın kalem kalem açıklıyoruz.',3,{ekon:1}],['Kaynak sorunu yok.',-1],['Hesap uzmanları sizden iyi bilir.',-2]]},
 {k:'guv',q:'Sınırdaki son saldırının ardından askerlerimizin güvenliği yeterli mi?',a:[['Komutanlarla görüştüm; ek birlik ve İHA desteği bölgeye sevk edildi.',3,{guv:1}],['Ordumuz durumu yönetiyor, endişeye gerek yok.',0],['Bu tür sorular düşmanın işine yarar.',-2]]},
 {k:'guv',q:'Şehit aileleri yeterli destek göremediklerini söylüyor. Ne diyorsunuz?',a:[['Haklılar. Bu hafta ailelerle görüşüp destek yasasını Meclis’e getiriyoruz.',4],['Devletimiz her zaman şehit ailelerinin yanındadır.',0],['Bu konuyu siyasete alet etmeyin.',-2]]},
 {k:'guv',q:'Orduda terfilerde kayırmacılık yapıldığı iddia ediliyor.',a:[['Liyakat esastır; terfi kurulu kayıtlarını denetime açıyorum.',3,{guv:1}],['Ordumuz siyasetin üstündedir.',1],['Bu iddialar orduya saldırıdır.',-2]]},
 {k:'bir',q:'Birlik vurgusu yaptınız ama muhalefet dışlandığını söylüyor.',a:[['Muhalefet liderlerini bu hafta ortak bir toplantıya davet ediyorum.',3],['Kapımız herkese açık.',1],['Onların derdi ülke değil, koltuk.',-3]]},
 {k:'gen',q:'Okullardaki öğretmen açığı ne zaman kapanacak?',a:[['Bu yıl kırk bin öğretmen ataması yapılacak, takvimi de açıklandı.',3],['Bakanlığımız konu üzerinde çalışıyor.',0],['Eğitim benim görev alanım değil.',-3]]},
 {k:'sag',q:'Emekliler maaşlarının yetmediğini söylüyor.',a:[['En düşük emekli aylığını artırıyoruz, bayram ikramiyesi de geliyor.',3,{ekon:-1}],['Bütçe imkânları ölçüsünde değerlendireceğiz.',0],['Herkes fedakârlık yapmak zorunda.',-2]]},
 {k:'sag',q:'Hastanelerde randevu bulmak haftalar sürüyor.',a:[['Akşam poliklinikleri ve beş bin yeni hekim kadrosu açıyoruz.',3,{ekon:-1}],['Sistemimiz dünyada örnek gösteriliyor.',-1],['Herkes en yakın hastaneye koşmasın.',-2]]},
 {k:'dis',q:'Bölgede gerilim tırmanıyor. Savaş ihtimali var mı?',a:[['Diplomasi kanalları açık; ama sınırlarımız konusunda tavizimiz yok.',3,{guv:1}],['Spekülasyonlara cevap vermem.',0],['Gerekirse hepsini haritadan sileriz.',-4]]},
 {k:'ada',q:'Bir bakanınız hakkında yolsuzluk iddiaları var. Görevden alacak mısınız?',a:[['Soruşturma bağımsız yürüsün; sonuçlanana kadar görevden el çektirdim.',4],['İddialar asılsız.',-1],['Bu bir karalama kampanyası.',-2]]},
 {k:'_',q:'Askerlik yıllarınız sizi nasıl değiştirdi?',a:[['Bir timin sorumluluğu, bir ülkenin sorumluluğunu anlamamı sağladı.',3],['Bana disiplini öğretti.',1],['Bunlar sizi ilgilendirmez.',-2]]},
 {k:'_',q:'Bugünkü konuşmanız bir seçim konuşması mıydı?',a:[['Seçim değil sorumluluk konuşmasıydı; vaatlerimin takvimini paylaşacağım.',2],['Halk neyin ne olduğunu biliyor.',0],['Sizin gazeteniz zaten taraflı.',-3]]},
 {k:'neg',q:'Konuşmanız sert bulundu. Sözlerinizin arkasında mısınız?',a:[['Yanlış anlaşıldıysa açayım: amacım huzur ve güvenlik.',3],['Her kelimesinin arkasındayım.',0],['Kimin ne düşündüğü umurumda değil.',-3]]},
 {k:'pos',q:'Konuşmanız çok beğenildi. Vaatlerinizin takvimi ne?',a:[['İlk otuz günün takvimini bu akşam yayımlıyoruz.',3],['Yakında açıklayacağız.',0],['Vaat değil, gerçek bunlar.',-1]]}];

function polSpeech(){const P=S.pol;if(!P||P.speech)return;const el=document.getElementById('pspeech');const t=(el&&el.value||'').trim();if(t.length<20)return toast('Halka seslenişin en az bir iki cümle olmalı.');
 const E=speechEval(t);P.onay=clamp(P.onay+E.d);if(E.th.includes('eko')&&E.d>0)P.ekon=clamp(P.ekon+1);if(E.th.includes('guv')&&E.d>0)P.guv=clamp(P.guv+1);P.speech=1;P.lastTh=E.main;
 const band=E.d>=4?0:E.d>=0?1:2;const head=(SPH[E.main]||SPH._)[band];
 feed('ulusal',`${gov().o[P.i][0]} ${S.name}: ${head}`,`"${t.length>160?t.slice(0,158)+'…':t}"`,[S.nation]);
 const segH=`<div class="spseg">${E.seg.map(([n,v])=>`<div><span>${esc(n)}</span><i><b style="width:${v}%;background:${v>=60?'var(--green)':v>=40?'var(--amber)':'var(--red)'}"></b></i><em>%${v}</em></div>`).join('')}</div>`;
 const qs=pickPress(E);P.press={qs,i:0,sum:0,d:E.d};
 pushModal({k:'Halka sesleniş · canlı yayın',ti:head,body:`<div class="quote">"${esc(t)}"</div><div class="fx"><span class="${E.d>=0?'p':'n'}">Halk onayı ${E.d>=0?'+':''}${E.d}</span></div><div class="spwhy">${E.why.map(([c,x])=>`<span class="${c}">${c==='p'?'▲':'▼'} ${esc(x)}</span>`).join('')}</div><div class="lbl" style="margin-top:4px">Kesimlerin tepkisi</div>${segH}<p class="small muted">Kürsünün önünde muhabirler bekliyor. ${qs.length} kısa soru.</p>`,
  ch:[{t:'Basın sorularını al',fn:()=>setTimeout(pressNext,0)},{t:'Soru almadan ayrıl (onay −1)',fn:()=>{P.onay=clamp(P.onay-1);P.press=null;feed('ulusal',`${S.name} gazetecilerin sorularını yanıtsız bıraktı`,'',[S.nation]);save();render()}}]});save();render()}

function pickPress(E){const P=S.pol;P.pqSeen=P.pqSeen||[];const free=PQ.map((_,i)=>i).filter(i=>!P.pqSeen.includes(i));const pool=free.length>=6?free:PQ.map((_,i)=>i);const out=[];
 const take=f=>{const c=pool.filter(i=>!out.includes(i)&&f(PQ[i]));if(c.length)out.push(pick(c))};
 if(E.d<0)take(q=>q.k==='neg');else if(E.d>=5)take(q=>q.k==='pos');
 if(E.main)take(q=>q.k===E.main);
 const weak=P.ekon<P.guv?'eko':'guv';take(q=>q.k===weak);
 while(out.length<3)take(q=>q.k!=='neg'&&q.k!=='pos');
 P.pqSeen=[...P.pqSeen,...out].slice(-10);return out.slice(0,3)}

function pressNext(){const P=S.pol,R_=P&&P.press;if(!R_)return;if(R_.i>=R_.qs.length)return pressEnd();
 const Qd=PQ[R_.qs[R_.i]];const ord=[0,1,2].sort(()=>R()-.5);const who=fname()+' · '+pick(PRS);
 pushModal({neu:1,k:`Basın toplantısı · Soru ${R_.i+1}/${R_.qs.length}`,ti:who,art:micArt(),body:`<div class="quote">"${esc(Qd.q)}"</div>`,ch:ord.map(j=>({t:Qd.a[j][0],fn:()=>pressAns(j)}))})}

function pressAns(j){const P=S.pol,R_=P.press;const Qd=PQ[R_.qs[R_.i]];const a=Qd.a[j];const v=a[1]+(R()<.25?(R()<.5?-1:1):0);R_.sum+=v;P.onay=clamp(P.onay+v);const e=a[2]||{};if(e.ekon)P.ekon=clamp(P.ekon+e.ekon);if(e.guv)P.guv=clamp(P.guv+e.guv);
 R_.log=R_.log||[];R_.log.push([Qd.q,a[0],v]);R_.i++;save();
 const r=v>=3?['Salonda başlar sallandı','Net ve güven veren bir cevap.']:v>=1?['Kabul gören bir cevap','Muhabir not alıp bir sonraki soruya geçti.']:v===0?['Kaçamak bulundu','Salonda kısa bir sessizlik oldu.']:['Salon karıştı','Cevabın sosyal medyada hızla yayılıyor.'];
 toast(`${r[0]} · onay ${v>=0?'+':''}${v}`);setTimeout(pressNext,0)}

function pressEnd(){const P=S.pol,R_=P.press;P.press=null;const s=R_.sum;
 const ti=s>=7?'Basın toplantısı damga vurdu':s>=3?'Basın toplantısı olumlu geçti':s>=0?'Basın toplantısı dengede kaldı':'Basın toplantısı aleyhine döndü';
 feed('ulusal',`${S.name} basın toplantısı: ${ti.replace('Basın toplantısı ','')}`,R_.log.map(l=>'Soru: '+l[0]).slice(0,1).join(''),[S.nation]);
 pushModal({k:'Basın toplantısı · özet',ti,body:`${R_.log.map(([q,a,v])=>`<div class="pq"><small>${esc(q)}</small><p>"${esc(a)}"</p><em class="${v>=0?'p':'n'}">${v>=0?'+':''}${v}</em></div>`).join('')}<div class="fx"><span class="${s>=0?'p':'n'}">Basın toplantısı ${s>=0?'+':''}${s}</span><span class="${R_.d+s>=0?'p':'n'}">Bugünkü toplam ${R_.d+s>=0?'+':''}${R_.d+s}</span><span>Halk onayı %${P.onay}</span></div>`});save();render()}

function micArt(){return `<svg viewBox="0 0 240 90" width="240" aria-hidden="true"><defs><linearGradient id="mcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4d44"/><stop offset="1" stop-color="#16170f"/></linearGradient></defs><rect x="60" y="56" width="120" height="30" rx="4" fill="url(#mcg)" stroke="#c9a64a55"/>${[78,100,120,140,162].map((x,i)=>`<g transform="rotate(${(i-2)*9} ${x} 60)"><rect x="${x-2}" y="22" width="4" height="36" fill="#222"/><rect x="${x-7}" y="10" width="14" height="18" rx="7" fill="${['#c33','#36c','#eee','#3a3','#e93'][i]}"/></g>`).join('')}<circle cx="30" cy="30" r="3" fill="#fff8" /><circle cx="214" cy="22" r="4" fill="#fff6"/><circle cx="200" cy="44" r="2" fill="#fff5"/></svg>`}
