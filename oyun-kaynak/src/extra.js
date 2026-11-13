/* ============ TÜRKÇE EKLER (ünlü uyumu ve kaynaştırma) ============ */
const PRON={ABD:'abede'};
function ek(w,t){if(!w)return w;const raw=String(w);const base=(PRON[raw]||raw).toLocaleLowerCase('tr').replace(/\([^)]*\)/g,'').replace(/[^a-zçğıöşüâîû]/g,'');const V='aeıioöuüâîû';let lv='e';for(let i=base.length-1;i>=0;i--){if(V.includes(base[i])){lv=base[i];break}}
 const back='aıouâû'.includes(lv),round='oöuü'.includes(lv),last=base[base.length-1]||'e',endV=V.includes(last),hard='çfhkpsşt'.includes(last);
 const A=back?'a':'e',I=back?(round?'u':'ı'):(round?'ü':'i');let s;
 switch(t){case'nin':s=(endV?'n':'')+I+'n';break;case'e':s=(endV?'y':'')+A;break;case'i':s=(endV?'y':'')+I;break;case'de':s=(hard?'t':'d')+A;break;case'den':s=(hard?'t':'d')+A+'n';break;case'le':s=(endV?'y':'')+'l'+A;break;default:s=''}
 return raw+"'"+s}
/* "X bölgesi" gibi tamlamalar için (kesme işareti yok) */
const bek=(n,t)=>n+({nin:'nin',e:'ne',de:'nde',i:'ni',den:'nden'}[t]||'');
const UNITP=['timin','takımın','bölüğün','taburun','tugayın'];
function fill(s,map){return s.replace(/\{(\w+)(?::(\w+))?\}/g,(m,k,t)=>{const v=map[k];if(v==null)return m;return t?ek(v,t):v})}

/* ============ İSİMLER ============ */
const FN={TR:['Elif','Zeynep','Can','Mert','Deniz','Ece','Emre','Selin','Burak','Defne'],ABD:['Emily','Jake','Olivia','Ryan','Sophia','Ethan','Mia','Noah','Ava','Liam'],RUS:['Anna','Dmitri','Olga','Ivan','Katya','Sergei','Mariya','Pavel','Irina','Alexei'],CIN:['Li Na','Wei','Mei','Jun','Xiu','Hao','Lan','Bo','Ying','Chen'],ALM:['Lena','Jonas','Mia','Lukas','Hannah','Felix','Lea','Paul','Sophie','Leon'],IGB:['Emma','Oliver','Grace','Harry','Chloe','Jack','Lucy','George','Amelia','James'],FRA:['Camille','Lucas','Chloé','Hugo','Léa','Louis','Manon','Jules','Inès','Théo'],JPN:['Yui','Haruto','Sakura','Ren','Aoi','Sota','Hina','Kaito','Mio','Yuto'],PAK:['Ayesha','Ali','Fatima','Hamza','Zainab','Bilal','Sana','Usman','Hira','Zain'],AZE:['Aysel','Elvin','Leyla','Rauf','Günel','Murad','Nərmin','Orxan','Səbinə','Kamran'],ISR:['Noa','Yonatan','Tamar','Itai','Shira','Omer','Maya','Eitan','Yael','Ariel'],ITA:['Giulia','Marco','Sofia','Luca','Chiara','Matteo','Elena','Andrea','Francesca','Davide'],SUR:['Leyla','Ömer','Nur','Halid','Rima','Samir','Hiba','Yusuf','Lina','Karim'],UZB:['Madina','Jasur','Dilnoza','Sardor','Nilufar','Bekzod','Zarina','Aziz','Shahnoza','Timur']};
const JOBS=['öğretmen','hemşire','mimar','gazeteci','mühendis','müzisyen','doktor','grafik tasarımcı','avukat','aşçı','fotoğrafçı','eczacı'];
const fname=()=>pick(FN[S.nation]||FN.TR);

/* ============ SİLAHLAR (ülkeye ve birliğe göre, rütbeyle açılır) ============ */
const WCAT={tufek:['Piyade tüfeği',0,'all',[62,50,60]],karabina:['Karabina',1,'all',[58,46,45]],mg:['Hafif makineli tüfek',1,'inf cdo para mar gend',[45,72,70]],dmr:['Nişancı tüfeği',2,'inf cdo para mar gend arm art sf nsf gsf',[76,60,80]],
 tabanca:['Tabanca',3,'all',[42,30,15]],atgm:['Tanksavar füzesi',4,'inf cdo para mar arm sf',[82,95,88]],sniper:['Keskin nişancı tüfeği',6,'inf cdo para mar sf nsf gsf gend',[93,86,96]],
 tank:['Ana muharebe tankı',8,'arm',[70,100,85]],topcu:['Obüs / roket sistemi',8,'art',[60,96,100]],gemi:['Savaş gemisi',8,'navy coast mar nsf',[72,100,100]],jet:['Savaş uçağı',8,'air',[82,100,100]],iha:['Silahlı İHA',10,'all',[86,80,100]]};
const WKEYS=Object.keys(WCAT);
const WPN={"ABD": "XRA-4|XRK-7|XRM-249|XRD-110|XRP-17|XRAT-148|XRS-107|Ironvale|Granite|Tidebreaker|Duskhawk|Skyreach", "RUS": "VKA-12|VKK-74|VKM-31|VKD-38|VKP-15|VKAT-9|VKS-59|Medved|Grom-9|Severyana|Berkut-X|Sokolik", "CIN": "QXA-191|QXK-95|QXM-201|QXD-191|QXP-92|QXAT-12|QXS-10|Tieshan|Leiting|Haiyan|Jinying|Tianmu", "ALM": "GWA-416|GWK-36|GWM-5|GWD-28|GWP-8|GWAT-52|GWS-29|Eisenwolf|Donnerkeil|Seewacht|Falkner|Himmelsauge", "IGB": "BRA-80|BRK-403|BRM-7|BRD-129|BRP-17|BRAT-52|BRS-115|Bulldog|Thundercourt|Seawarden|Kestrel|Skyward", "FRA": "FXA-416|FXK-1|FXM-31|FXD-417|FXP-17|FXAT-52|FXS-59|Lionceau|Tonnerre|Gardemer|Faucon|Œil-du-Ciel", "JPN": "TKA-20|TKK-89|TKM-31|TKD-20|TKP-9|TKAT-01|TKS-24|Tetsuryū|Raijin-K|Umimori|Hayabusa-X|Sora-me", "PAK": "PFA-3|PFK-56|PFM-3|PFD-90|PFP-17|PFAT-52|PFS-69|Sher-e-Koh|Garaj|Sahil Pasban|Shaheen-X|Nigah", "AZE": "ARA-74|ARK-24|ARM-31|ARD-38|ARP-45|ARAT-52|ARS-14|Qartal|Ildırım|Dəniz Keşik|Şahin|Göz", "ISR": "NVA-95|NVK-4|NVM-7|NVD-24|NVP-19|NVAT-2|NVS-338|Aryeh|Ra’am|Shomer Yam|Netz|Ayin", "ITA": "LVA-160|LVK-70|LVM-31|LVD-200|LVP-45|LVAT-52|LVS-42|Lupo|Tuono|Guardamare|Sparviero|Occhio", "SUR": "DMA-17|DMK-74|DMM-31|DMD-38|DMP-45|DMAT-9|DMS-96|Asad|Ra’d|Haris al-Bahr|Saqr|Ayn", "UZB": "SXA-74|SXK-74|SXM-31|SXD-38|SXP-45|SXAT-9|SXS-98|Burgut|Chaqmoq|Dengiz Qo‘riq|Lochin|Ko‘z", "TR": "MTA-76|MTK-55|MTM-3|MTD-76|MTP-16|MTAT-52|MTS-308|Bozkurt|Gürz|Dalgakıran|Şahbaz|Gökbörü"};
function weapons(nat,type){const names=(WPN[nat]||WPN.TR).split('|');return WKEYS.map((k,i)=>{const c=WCAT[k];const ok=c[2]==='all'||c[2].split(' ').includes(type);return{id:k,n:names[i],cat:c[0],r:c[1],ok,st:c[3]}}).filter(w=>w.ok).sort((x,y)=>x.r-y.r)}
const myWeapons=()=>weapons(S.nation,B().type);
const PERS=['tufek','karabina','mg','dmr','sniper'],PLAT=['atgm','tank','topcu','gemi','jet','iha'];
function equipped(){const W=myWeapons();const get=id=>W.find(w=>w.id===id);return{p:get(S.wpn&&S.wpn.p)||get('tufek'),s:get(S.wpn&&S.wpn.s),x:get(S.wpn&&S.wpn.x)}}
function wBonus(){const e=equipped();let b=(e.p?(e.p.st[0]-55)/700:0);if(e.x)b+=.025;if(e.s)b+=.005;return b}
function equip(v){const W=myWeapons().find(w=>w.id===v);if(!W)return;if(S.rank<W.r)return toast('Bu silah için rütben yetmiyor: '+rankName(W.r,S.nation,B().rs));S.wpn=S.wpn||{};const slot=PERS.includes(v)?'p':v==='tabanca'?'s':'x';S.wpn[slot]=v;toast(W.n+' kuşanıldı.');save();render()}
function wpnSVG(id,w=150){const g='url(#wg'+id+')';const body=(typeof WSVG2!=='undefined'&&WSVG2[id])||{
 tufek:'<path d="M8 30 L30 26 L34 22 L120 22 L124 26 L148 26 L148 30 L124 30 L110 34 L64 34 L58 46 L48 46 L52 34 L36 34 L18 40 L8 40Z"/><rect x="64" y="16" width="30" height="6" rx="2"/><rect x="66" y="34" width="9" height="14" rx="2"/>',
 karabina:'<path d="M14 30 L32 26 L36 22 L112 22 L116 26 L136 26 L136 30 L116 30 L104 34 L64 34 L58 46 L48 46 L52 34 L38 34 L22 38 L14 38Z"/><rect x="62" y="16" width="26" height="6" rx="2"/><rect x="66" y="34" width="9" height="14" rx="2"/>',
 mg:'<path d="M6 30 L28 26 L32 22 L118 22 L122 26 L150 26 L150 30 L122 30 L112 34 L60 34 L54 46 L44 46 L48 34 L34 34 L16 40 L6 40Z"/><rect x="58" y="34" width="22" height="16" rx="3"/><path d="M126 30 L118 46 M126 30 L134 46" stroke="#000" stroke-width="2"/>',
 dmr:'<path d="M6 30 L28 26 L32 22 L122 22 L126 26 L152 26 L152 30 L126 30 L112 34 L62 34 L56 46 L46 46 L50 34 L34 34 L16 40 L6 40Z"/><rect x="56" y="10" width="44" height="9" rx="4"/><rect x="66" y="34" width="9" height="12" rx="2"/>',
 sniper:'<path d="M4 32 L30 26 L36 24 L126 24 L130 27 L158 27 L158 30 L130 30 L118 34 L60 34 L54 46 L44 46 L48 34 L32 36 L14 42 L4 42Z"/><rect x="50" y="10" width="54" height="10" rx="5"/><path d="M134 30 L126 46 M134 30 L142 46" stroke="#000" stroke-width="2"/>',
 tabanca:'<path d="M40 18 L112 18 L114 30 L74 30 L70 34 L66 52 L48 52 L54 32 L40 30Z"/>',
 atgm:'<rect x="14" y="20" width="132" height="14" rx="7"/><rect x="58" y="10" width="26" height="10" rx="3"/><rect x="62" y="34" width="10" height="14" rx="2"/>',
 tank:'<path d="M10 40 L150 40 L144 52 L16 52Z"/><path d="M24 30 L136 30 L142 40 L18 40Z"/><path d="M54 18 L100 18 L108 30 L48 30Z"/><rect x="100" y="21" width="56" height="4" rx="2"/>',
 topcu:'<path d="M14 40 L130 40 L126 52 L18 52Z"/><path d="M60 26 L110 26 L114 40 L56 40Z"/><rect x="94" y="14" width="64" height="5" rx="2" transform="rotate(-14 94 16)"/>',
 gemi:'<path d="M4 40 L156 40 L140 52 L18 52Z"/><path d="M40 30 L120 30 L124 40 L36 40Z"/><rect x="70" y="16" width="16" height="14"/><rect x="76" y="6" width="3" height="10"/>',
 jet:'<path d="M10 30 L70 26 L110 12 L118 14 L96 28 L150 30 L96 32 L118 46 L110 48 L70 34Z"/><path d="M14 30 L4 20 L10 30 L4 40Z"/>',
 iha:'<path d="M20 30 L140 30 L146 33 L20 33Z"/><path d="M70 30 L60 6 L68 6 L84 30Z"/><path d="M70 33 L60 56 L68 56 L84 33Z"/><path d="M24 30 L14 22 L18 30 L14 40Z"/>'}[id];
 return `<svg viewBox="0 0 160 60" width="${w}" aria-hidden="true"><defs><linearGradient id="wg${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5c6158"/><stop offset=".5" stop-color="#2a2d28"/><stop offset="1" stop-color="#121310"/></linearGradient></defs><g fill="${g}" stroke="#000" stroke-width=".8">${body}</g><path d="M30 23 H120" stroke="#ffffff30" stroke-width="1"/></svg>`}

/* ============ İZİN ve DIŞ HAYAT ============ */
const OUTA={
 kafe:['Kafede vakit geçir',{mental:5},150,.35,'Sıcak bir kahve, sakin bir köşe, üniformasız birkaç saat.'],
 sinema:['Sinema ya da konser',{mental:7},250,.18,'Salon karardığında savaş da bir süreliğine uzaklaştı.'],
 mac:['Stadyumda maç',{mental:6,hirs:1},300,.22,'Tribünde bağırırken içindeki gerginlik dağıldı.'],
 doga:['Doğa yürüyüşü',{mental:6,dayan:1},50,.1,'Temiz hava, sessiz bir patika; zihnin berraklaştı.'],
 aile:['Ailenle akşam yemeği',{mental:9},200,0,'Sofrada senin sevdiğin yemek vardı; kimse savaştan bahsetmedi.'],
 etkinlik:['Bir etkinliğe katıl',{mental:4},200,.75,'Kalabalık bir ortamda yeni yüzler gördün.'],
};
function outAct(id){
 if(!S.izin)return toast('Dışarı çıkmak için izin günü gerekiyor.');const o=OUTA[id];if(!o)return;if((S.outDone||{})[id]===S.day)return toast('Bunu bugün zaten yaptın.');if(S.money<o[2])return toast('Bunun için yeterli paran yok.');if(!useAP())return;
 S.outDone=S.outDone||{};S.outDone[id]=S.day;S.money-=o[2];Object.entries(o[1]).forEach(([k,v])=>addSt(k,v));S.fatigue=clamp(S.fatigue-10);log(o[0]+'.');
 if(id==='aile'&&S.trauma==='aile')toast('Hayatta kalan akrabanla yemek yedin. Ruh hali +9');else toast(o[4]);
 if(id==='doga'&&owns('kamp'))addSt('mental',3);if(R()<o[3]+(owns('tisort')?.05:0)+(owns('ceket')?.05:0))meet();save();render();
}
function meet(){
 const n=socialName(),job=pick(JOBS);const canLove=!S.partner&&!(S.trauma==='esi'&&(S.heal<10||S.day<30));
 const ch=[];if(canLove)ch.push({t:'Bir sonraki buluşmayı ayarla',fn:()=>{S.partner={name:n,aff:32,m:false,last:S.day};log(n+' ile flört başladı.');toast(n+' ile yeni bir hikâye başlıyor.')}});
 ch.push({t:'Arkadaş olarak tanışmaya devam et',fn:()=>{S.friends=[...(S.friends||[]),{n,job,b:35,last:S.day}].slice(-8);log(n+' ile arkadaş oldunuz.');toast(n+' artık arkadaşın.')}});
 ch.push({t:'Kibarca vedalaş',fn:()=>{}});
 pushModal({k:'Yeni biri',ti:n,body:`<p>${esc(n)} ile tanıştın. ${esc(job[0].toLocaleUpperCase('tr')+job.slice(1))} ve sohbeti çok keyifli. Üniformanı sordu; bir süre görevden değil hayattan konuştunuz.</p>`,ch});
}
function friendAct(i){const f=(S.friends||[])[+i];if(!f)return;if(!S.izin)return toast('Arkadaşlarınla buluşmak için izin günü gerekiyor.');if(f.last===S.day)return toast('Bugün zaten görüştünüz.');if(!useAP())return;f.b=clamp(f.b+12);f.last=S.day;addSt('mental',8);S.fatigue=clamp(S.fatigue-8);toast(f.n+' ile güzel bir gün geçirdin. Ruh hali +8');log(f.n+' ile buluştun.');save();render()}
function friendTick(){(S.friends||[]).forEach(f=>{f.b=clamp(f.b-.6)});S.friends=(S.friends||[]).filter(f=>f.b>2);
 if(S.friends.length&&R()<.08){const f=pick(S.friends);pushModal({k:'Arkadaşın',ti:f.n,body:`<p>${esc(f.n)}: "${pick(['Hafta sonu bir yere gidelim mi? Seni çok gördüğüm yok.','Haberlerde senin birliği gördüm. İyi misin?','Doğum günü partim var, gelebilirsen çok sevinirim.','Bir şeye ihtiyacın olursa ben buradayım, bunu bil.'])}"</p>`,ch:[{t:'Hemen cevap ver',fn:()=>{f.b=clamp(f.b+6);addSt('mental',3)}},{t:'Sonra yazarım',fn:()=>{f.b=clamp(f.b-4)}}]})}}
function useLeave(){if(S.world.war)return toast('Savaş sürerken izin kullanılamaz.');if(!(S.leave>0))return toast('Kullanılabilir izin günün yok.');S.izinNext=true;toast('Yarın izinlisin.');save();render()}
const CODE_A=['DEMİR','KARA','GÖK','ÇELİK','KIZIL','SESSİZ','GECE','YILDIRIM','BOZ','ALAZ','AYAZ','POLAT'],CODE_B=['ŞAHİN','KURT','KARTAL','POYRAZ','KALKAN','MIZRAK','KILIÇ','TUFAN','PARS','DOĞAN','ATMACA','OKLU'];
