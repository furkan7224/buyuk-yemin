/* ============ v27: KURGUSAL DÜNYA + KURGUSAL SİLAH ADLARI ============ */
/* Oyuncunun ülkesi gerçektir; dünyadaki diğer tüm devletler, ittifaklar ve şehirler kurgusaldır. */
const FICT={
 TR:{n:'Anadria',code:'AND',c:'#9a6b3c',f:['tri-h','#7a1f1f','#e8dcc0','#2f4a2a'],ci:['Velkara','Doruhan','Sarepta','Kumdere','Aspira','Belgrat','Taşkale','Morvan','Elbeyi','Karadoru'],thr:['doğu dağ geçidi','güney sınır hattı','batı kıyısı','kuzey kıyısı']},
 ABD:{n:'Valdoria',code:'VAL',c:'#5a6f8c',f:['star-band','#1f2f4f','#d8d2c0','#8c2a2a'],ci:['Port Aldren','Kestwick','Hallbrook','Granmoor','Redstone','Westvale','Lowmarsh','Ashford Bay','Coldwater','Brightmere'],thr:['batı kıyısı','güney sınırı','kuzey ormanları','doğu limanları']},
 RUS:{n:'Krasnar',code:'KRS',c:'#7d8796',f:['tri-v','#e6e2d6','#3a4f6a','#6b2a2a'],ci:['Velgrad','Ostrova','Zelmir','Karsk','Dravinsk','Belomar','Torvask','Yarnek','Sumirsk','Polvana'],thr:['batı ovaları','kuzey limanları','güney bozkırı','doğu taygası']},
 CIN:{n:'Kaldera',code:'KAL',c:'#a85a45',f:['canton-star','#8c2b23','#e3c45a','#8c2b23'],ci:['Hanzhel','Lumao','Qirang','Tesh-Wu','Paolin','Xunda','Merrow Bay','Taikun','Shoren','Gaolin'],thr:['doğu kıyısı','güney denizi','batı dağları','kuzey sınırı']},
 ALM:{n:'Brenhal',code:'BRE',c:'#6d6a5c',f:['tri-h','#222','#9c7a2a','#5c1c1c'],ci:['Holmstadt','Reinwald','Kessler','Ebbing','Morhaven','Taubenfeld','Grenzau','Wittmar','Altdorn','Lindheim'],thr:['doğu sınırı','kuzey kıyısı','güney Alpleri','batı nehri']},
 IGB:{n:'Albryn',code:'ALB',c:'#4c5e7a',f:['cross','#23355a','#d6d0c0','#7a2a2a'],ci:['Kingsmarch','Dunmere','Hollowford','Carrick','Bramwell','Eastholm','Penrith Vale','Thornby','Wexmoor','Saltcombe'],thr:['kuzey denizi','batı adaları','güney kanalı','doğu kıyısı']},
 FRA:{n:'Lorvane',code:'LOR',c:'#5f6f9a',f:['tri-v','#2a3f7a','#e3dccb','#7a2a3a'],ci:['Valcourt','Beaurive','Montclair','Sainte-Orre','Larnac','Brévine','Corlay','Aubenval','Pontmoreau','Ravel-sur-Mer'],thr:['doğu sınırı','güney kıyısı','batı okyanusu','kuzey kanalı']},
 JPN:{n:'Teshar',code:'TES',c:'#8a5a6a',f:['disc','#e6e0d2','#7a2030'],ci:['Hanaori','Kurosawa Bay','Mitsune','Okaido','Shirane','Tokuma','Asamura','Yorikawa','Senkai','Fujihama'],thr:['kuzey adaları','batı denizi','güney adaları','doğu okyanusu']},
 PAK:{n:'Zerkan',code:'ZER',c:'#3f6a4a',f:['crescent-side','#1f4a2c','#e3dccb'],ci:['Qasimabad','Dera Noor','Shahkot','Mirpani','Karvan','Lalgarh','Bahrani','Sultanpur Kal','Jhelmir','Rozabad'],thr:['doğu sınırı','batı dağları','güney kıyısı','kuzey geçitleri']},
 ISR:{n:'Morvane',code:'MOR',c:'#5b7896',f:['bands-emblem','#e6e2d6','#2a4f7a'],ci:['Aven Tal','Kerem Or','Sadot','Nahalim','Beit Arav','Midron','Yaval','Ein Sorek','Galim','Tzurah'],thr:['kuzey sınırı','güney çölü','doğu vadisi','batı kıyısı']},
 ITA:{n:'Ardenya',code:'ARD',c:'#6a7a4a',f:['tri-v','#2f5a3a','#e3dccb','#8a2f2f'],ci:['Valtorre','Sanvero','Montalba','Castellino','Porto Lume','Riva d’Oro','Brenna','Seravalle','Lucerra','Campodoro'],thr:['kuzey Alpleri','güney adaları','doğu kıyısı','batı kıyısı']},
 SUR:{n:'Qasirah',code:'QAS',c:'#7a6a4a',f:['tri-h-stars','#2f5a3a','#e3dccb','#222'],ci:['Al-Marun','Dayr Saba','Hamrat','Qal’at Nur','Bayda','Sufran','Tell Amar','Maskun','Raqim','Wadi Sahr'],thr:['kuzey sınırı','doğu çölü','güney dağları','batı kıyısı']},
 UZB:{n:'Tavros',code:'TAV',c:'#4a7a7a',f:['tri-h-thin','#2a6a8a','#e3dccb','#3a7a3a'],ci:['Samarkel','Bukhan','Ferzana','Tashmir','Navoyat','Qarshan','Khojal','Termezh','Andijar','Urgench Tal'],thr:['güney sınırı','doğu vadisi','batı çölü','kuzey bozkırı']},
 AZE:{n:'Liyandra',code:'LIY',c:'#4a6f8a',f:['tri-h-sun','#2a6a8a','#8a2f2f','#2f6a3a'],ci:['Ganjar','Sumgay','Lenkoran Tal','Shamaxa','Qubal','Mingar','Naftaly','Sheki Dar','Barda Su','Zaqatel'],thr:['batı sınırı','güney sınırı','doğu denizi','kuzey dağları']}
};
const FBLOC={NATO:['Batı Savunma İttifakı','Kolektif savunma · ortak savunma maddesi'],TDT:['Bozkır Devletleri Konseyi','Siyasi, ekonomik ve kültürel işbirliği'],SCO:['Doğu Güvenlik Örgütü','Güvenlik işbirliği örgütü'],AUKUS:['Ortak Teknoloji Paktı','Savunma teknolojisi ortaklığı']};
let FICT_ON=null;const ORIG={};
function isFict(k){return !!(FICT_ON&&k!==FICT_ON&&FICT[k])}
function natCode(k){return isFict(k)?FICT[k].code:k}
function rngK(k){let h=0;for(const c of k)h=(h*31+c.charCodeAt(0))>>>0;return()=>{h=(h*1664525+1013904223)>>>0;return h/4294967296}}
function blobOut(k){const C=NAT[k].cities.map(c=>[c[2],c[1]]);const cx=C.reduce((a,c)=>a+c[0],0)/C.length,cy=C.reduce((a,c)=>a+c[1],0)/C.length;
 let r=Math.max(...C.map(c=>Math.hypot(c[0]-cx,c[1]-cy)))*1.18+.6;const rnd=rngK(k);const N=34;const ph=[rnd()*6,rnd()*6,rnd()*6];const pts=[];
 for(let i=0;i<N;i++){const a=i/N*Math.PI*2;const m=1+.14*Math.sin(a*3+ph[0])+.08*Math.sin(a*5+ph[1])+.05*Math.sin(a*9+ph[2]);
  let rr=r*m;C.forEach(c=>{const ca=Math.atan2(c[1]-cy,c[0]-cx);const d=Math.hypot(c[0]-cx,c[1]-cy);let da=Math.abs(((a-ca+Math.PI*3)%(Math.PI*2))-Math.PI);if(da<.5)rr=Math.max(rr,d*1.12+.4)});
  pts.push([cx+Math.cos(a)*rr,cy+Math.sin(a)*rr*.82])}return[pts]}
function fictOn(me){if(FICT_ON===me)return;fictOff();
 NK.forEach(k=>{if(!ORIG[k])ORIG[k]={n:NAT[k].n,c:NAT[k].c,ci:NAT[k].cities.map(c=>c[0]),thr:NAT[k].thr.map(t=>t[0]),out:OUT[k]}});
 BLOCS.forEach(b=>{if(!b._o)b._o=[b.n,b.t]});
 NK.forEach(k=>{if(k===me||!FICT[k])return;const F=FICT[k];NAT[k].n=F.n;NAT[k].c=F.c;NAT[k].cities.forEach((c,i)=>c[0]=F.ci[i%F.ci.length]);NAT[k].thr.forEach((t,i)=>t[0]=F.thr[i%F.thr.length]);OUT[k]=blobOut(k)});
 FICT_ON=me;
 BLOCS.forEach(b=>{if(FBLOC[b.id]){b.n=FBLOC[b.id][0];b.t=FBLOC[b.id][1]}else{const ns=b.m.map(k=>NAT[k].n);b.n=ns.join('–')+' '+(b.def?'Savunma Antlaşması':'Stratejik Ortaklığı');b.t=b.def?'İkili savunma antlaşması':'Askerî ve ekonomik işbirliği'}})}
function fictOff(){if(FICT_ON==null)return;NK.forEach(k=>{const o=ORIG[k];if(!o)return;NAT[k].n=o.n;NAT[k].c=o.c;NAT[k].cities.forEach((c,i)=>c[0]=o.ci[i]);NAT[k].thr.forEach((t,i)=>t[0]=o.thr[i]);OUT[k]=o.out});BLOCS.forEach(b=>{if(b._o){b.n=b._o[0];b.t=b._o[1]}});FICT_ON=null}
function fictFlag(k){const f=FICT[k].f;const t=f[0];const S3=(a,b,c)=>`<rect width="30" height="20" fill="${b}"/><rect width="30" height="6.67" fill="${a}"/><rect y="13.33" width="30" height="6.67" fill="${c}"/>`;
 const star=(x,y,r,col)=>`<polygon points="${starPts(x,y,r)}" fill="${col}"/>`;
 switch(t){
 case'tri-h':return S3(f[1],f[2],f[3]);
 case'tri-v':return`<rect width="30" height="20" fill="${f[2]}"/><rect width="10" height="20" fill="${f[1]}"/><rect x="20" width="10" height="20" fill="${f[3]}"/>`;
 case'star-band':return`<rect width="30" height="20" fill="${f[2]}"/><rect y="13" width="30" height="7" fill="${f[3]}"/><rect width="11" height="13" fill="${f[1]}"/>${star(5.5,6.5,3.2,f[2])}`;
 case'canton-star':return`<rect width="30" height="20" fill="${f[1]}"/><circle cx="7" cy="7" r="4.2" fill="none" stroke="${f[2]}" stroke-width="1"/>${star(7,7,2.4,f[2])}`;
 case'cross':return`<rect width="30" height="20" fill="${f[1]}"/><path d="M11 0V20M0 10H30" stroke="${f[2]}" stroke-width="5"/><path d="M11 0V20M0 10H30" stroke="${f[3]}" stroke-width="2"/>`;
 case'disc':return`<rect width="30" height="20" fill="${f[1]}"/><circle cx="15" cy="10" r="5.5" fill="none" stroke="${f[2]}" stroke-width="2"/><circle cx="15" cy="10" r="2" fill="${f[2]}"/>`;
 case'crescent-side':return`<rect width="30" height="20" fill="${f[1]}"/><rect x="22" width="8" height="20" fill="${f[2]}"/><circle cx="11" cy="10" r="5" fill="${f[2]}"/><circle cx="13" cy="9" r="4.4" fill="${f[1]}"/>`;
 case'bands-emblem':return`<rect width="30" height="20" fill="${f[1]}"/><rect y="3" width="30" height="2" fill="${f[2]}"/><rect y="15" width="30" height="2" fill="${f[2]}"/><circle cx="15" cy="10" r="3.4" fill="none" stroke="${f[2]}" stroke-width="1.2"/><path d="M15 6.6V13.4M11.6 10H18.4" stroke="${f[2]}" stroke-width="1"/>`;
 case'tri-h-stars':return S3(f[1],f[2],f[3])+star(11,10,1.7,'#8a2f2f')+star(19,10,1.7,'#8a2f2f');
 case'tri-h-thin':return S3(f[1],f[2],f[3])+'<rect y="6.4" width="30" height=".6" fill="#8a2f2f"/><rect y="13" width="30" height=".6" fill="#8a2f2f"/>'+`<circle cx="6" cy="3.3" r="2" fill="#e3dccb"/>`;
 case'tri-h-sun':return S3(f[1],f[2],f[3])+`<circle cx="15" cy="10" r="2.6" fill="#e3c45a"/>`;
 }return'<rect width="30" height="20" fill="#666"/>'}
function flagInner(k){return isFict(k)?fictFlag(k):flagInnerReal(k)}

/* ---- Kurgusal silah adları (görseller aynı) ---- */
const WCODE={TR:'MT',ABD:'XR',RUS:'VK',CIN:'QX',ALM:'GW',IGB:'BR',FRA:'FX',JPN:'TK',PAK:'PF',AZE:'AR',ISR:'NV',ITA:'LV',SUR:'DM',UZB:'SX'};
const WLET={tufek:'A',karabina:'K',mg:'M',dmr:'D',tabanca:'P',atgm:'AT',sniper:'S',pompali:'SG',bombaatar:'GL',havan:'H'};
const WPLAT=['tank','topcu','gemi','jet','iha','fpv','zpt','heli','hsa','denizalti','seyir','ew','balistik'];
const WWORD={
 TR:['Bozkurt','Gürz','Dalgakıran','Şahbaz','Gökbörü','Arıkuşu','Çelikyele','Doğanbey','Gökkalkan','Derinsu','Okyay','Sisperde','Yalaz'],
 ABD:['Ironvale','Granite','Tidebreaker','Duskhawk','Skyreach','Wasp-9','Stonecrest','Nightrail','Bulwark','Deepwatch','Longreach','Hushwire','Emberfall'],
 RUS:['Medved','Grom-9','Severyana','Berkut-X','Sokolik','Osa-7','Zubr','Veter','Shchit','Glubina','Strela-D','Tuman','Zarya'],
 CIN:['Tieshan','Leiting','Haiyan','Jinying','Tianmu','Fengyi','Shilong','Feihu','Tiandun','Shenhai','Changjian','Wuying','Huoyun'],
 ALM:['Eisenwolf','Donnerkeil','Seewacht','Falkner','Himmelsauge','Hornisse','Steinbock','Windjäger','Schildwall','Tiefgang','Fernpfeil','Nebelwand','Feuersturm'],
 IGB:['Bulldog','Thundercourt','Seawarden','Kestrel','Skyward','Hornet-6','Ironside','Merlin Hawk','Rampart','Deepsound','Longshot','Greyveil','Tempest Fire'],
 FRA:['Lionceau','Tonnerre','Gardemer','Faucon','Œil-du-Ciel','Frelon','Bastion','Vautour','Rempart','Abysse','Trait-Long','Brume','Foudre'],
 JPN:['Tetsuryū','Raijin-K','Umimori','Hayabusa-X','Sora-me','Suzume','Ishigaki','Kazekiri','Tatekabe','Shinkai','Tōya','Kasumi','Homura'],
 PAK:['Sher-e-Koh','Garaj','Sahil Pasban','Shaheen-X','Nigah','Bhanwra','Faulad','Toofan-H','Hisar-e-Asman','Gehrai','Teer-e-Door','Dhund','Shola'],
 AZE:['Qartal','Ildırım','Dəniz Keşik','Şahin','Göz','Arı','Polad','Külək','Qalxan','Dərinlik','Uzaq Ox','Duman','Alov'],
 ISR:['Aryeh','Ra’am','Shomer Yam','Netz','Ayin','Tzir’a','Sela','Ruach','Magen-Or','Mamakim','Chetz-Rachok','Arafel','Lehava'],
 ITA:['Lupo','Tuono','Guardamare','Sparviero','Occhio','Calabrone','Rocca','Vento','Scudo','Abisso','Saetta','Nebbia','Fiamma'],
 SUR:['Asad','Ra’d','Haris al-Bahr','Saqr','Ayn','Dabbur','Sakhr','Rih','Dir’','Umq','Sahm','Dabab','Lahab'],
 UZB:['Burgut','Chaqmoq','Dengiz Qo‘riq','Lochin','Ko‘z','Ari','Po‘lat','Shamol','Qalqon','Chuqurlik','Uzoq O‘q','Tuman','Olov']};
function fictWpnName(nat,id,orig){const code=WCODE[nat]||'XX';const num=((orig||'').match(/\d+/)||[])[0];
 if(WLET[id])return `${code}${WLET[id]}-${num&&num.length<=3?num:(17+WKEYS.indexOf(id)*7)}`;
 const i=WPLAT.indexOf(id);const w=(WWORD[nat]||WWORD.TR)[i]||'Kartal';return w}
(function(){NK.forEach(nat=>{const names=(WPN[nat]||WPN.TR).split('|');WPN[nat]=WKEYS.map((k,i)=>fictWpnName(nat,k,names[i])).join('|')})})();

/* ---- Kurgu uyarısı ---- */
const FICTNOTE='Bu oyun tamamen kurgusaldır. Oyuncunun seçtiği ülke dışındaki tüm devletler, ittifaklar, şehirler, kişiler, olaylar ve silah sistemleri hayal ürünüdür; gerçek kurum ve kişilerle benzerlik tesadüftür.';
function fictWarn(){try{if(localStorage.getItem('by-fict'))return}catch(e){}pushModal({k:'Bilgilendirme',ti:'Kurgu uyarısı',body:`<p>${FICTNOTE}</p>`,ch:[{t:'Anladım',fn:()=>{try{localStorage.setItem('by-fict','1')}catch(e){}}}]})}
