/* ============ v23: SAVAŞIN GİDİŞATINA GÖRE KOMUTA YETKİLERİ ============ */
/* Her yetki: t=gereken dönem, c=komuta puanı, rel(o,s)=[önem 0-100, neden] , f(o)=etkiler */
const pct=x=>Math.round(x*100);
ABIL.splice(0,ABIL.length,
 {id:'adr',t:0,c:1,ic:'⚡',n:'Adrenalin',fx:'ADRENALİN',
  rel:(o,s)=>s.tm?[95,'Kritik an: süre işliyor']:[30,'Bu adıma odaklan'],
  f:o=>{o.nb=(o.nb||0)+.15;if(o.steps[o.st]&&o.steps[o.st].tm&&UI.kt)UI.kt.end+=10000;return{nb:.15,ext:o.steps[o.st]&&o.steps[o.st].tm?'Karar süresi +10 sn':''}}},
 {id:'sip',t:0,c:1,ic:'🛡',n:'Mevzilen',fx:'SİPER AL!',
  rel:o=>o.hp<45?[98,`Kuvvet %${o.hp}: ağır kayıp riski`]:o.hp<70?[60,`Kuvvet %${o.hp}`]:[10,'Kuvvetin yerinde'],
  f:o=>{o.hp=clamp(o.hp+10);o.shield=.5;o.mom=clamp(o.mom-4);return{hp:10,mom:-4,sh:'Bu adımda kayıplar yarıya iner'}}},
 {id:'gzl',t:0,c:1,ic:'🌑',n:'Işık ve ses disiplini',fx:'SESSİZLİK',
  rel:o=>o.giz<40?[90,`Gizlilik %${o.giz}: fark edilmek üzeresin`]:o.giz<65?[50,`Gizlilik %${o.giz}`]:[8,'Gizlisin'],
  f:o=>{o.giz=clamp(o.giz+22);o.mom=clamp(o.mom-5);return{giz:22,mom:-5,sh:'Gizli seçeneklerde şans +%8'}}},
 {id:'ikm',t:1,c:1,ic:'📦',n:'Acil ikmal',fx:'İKMAL GELDİ',
  rel:o=>o.amm<30?[97,`Mühimmat %${o.amm}: ateş kesilmek üzere`]:o.amm<55?[55,`Mühimmat %${o.amm}`]:[6,'Mühimmat yeterli'],
  f:o=>{o.amm=clamp(o.amm+40);o.giz=clamp(o.giz-6);return{amm:40,giz:-6}}},
 {id:'kes',t:1,c:1,ic:'🛰',n:'Keşif İHA’sı',fx:'GÖZ HAVADA',
  rel:(o,s)=>s.t==='core'||s.t==='mod'||s.t==='krz'||s.t==='cmd'?[s.tm?80:70,'Belirsiz durum: hedefi önce gör']:[25,'Rotayı kontrol et'],
  f:o=>{o.rev=o.st;o.giz=clamp(o.giz-4);return{giz:-4,sh:'En doğru seçenek işaretlendi'}}},
 {id:'tim',t:1,c:1,ic:'🎯',n:'Ateş serbest',fx:'ATEŞ SERBEST!',
  rel:(o,s)=>o.mom<40?[85,`İnisiyatif %${o.mom}: düşman baskın`]:s.k==='hed'?[65,'Hedefte üstünlük kur']:[30,'Baskı kur'],
  f:o=>{o.mom=clamp(o.mom+15);o.giz=clamp(o.giz-10);o.amm=clamp(o.amm-8);o.nb=(o.nb||0)+.10;return{mom:15,giz:-10,amm:-8,nb:.10}}},
 {id:'tah',t:1,c:1,ic:'🚑',n:'Yaralı tahliyesi',fx:'MEDEVAC YOLDA',
  rel:o=>o.hp<40?[94,`Kuvvet %${o.hp}: yaralılar var`]:o.hp<65?[45,'Yaralıları güvene al']:[5,'Yaralı yok'],
  f:o=>{o.hp=clamp(o.hp+16);o.medevac=1;o.mom=clamp(o.mom-6);return{hp:16,mom:-6,sh:'Harekât sonunda şehit riski düşer'}}},
 {id:'kom',t:2,c:1,ic:'📣',n:'Moral konuşması',fx:'BENİ İZLEYİN!',
  rel:o=>o.mom<45?[80,`İnisiyatif %${o.mom}: birlik sarsıldı`]:[18,'Moral yerinde'],
  f:o=>{o.mom=clamp(o.mom+22);if(S.tim)S.tim.m.forEach(m=>m.mor=clamp(m.mor+3));return{mom:22,sh:'Birlik morali +3'}}},
 {id:'des',t:2,c:1,ic:'💥',n:'Destek ateşi',fx:'DESTEK ATEŞİ GELİYOR',
  rel:(o,s)=>s.k==='hed'||s.k==='kri'?[75,'Hedefi ateşle yumuşat']:o.mom<50?[55,'Baskıyı kır']:[25,'Ağır ateş'],
  f:o=>{o.nb=(o.nb||0)+.2;o.giz=clamp(o.giz-15);o.shield=Math.min(o.shield||1,.7);let sv=0;if((o.saha||'yurtici')!=='dusman'&&R()<.2){o.sivil++;sv=1}return{nb:.2,giz:-15,sh:'Bu adımda kayıplar %30 azalır',sv}}},
 {id:'sis',t:2,c:1,ic:'🌫',n:'Sis perdesi',fx:'SİS ATILDI',
  rel:o=>o.giz<50&&o.hp<70?[78,'Açıkta ve kayıp veriyorsun']:[22,'Hareketi gizle'],
  f:o=>{o.giz=clamp(o.giz+18);o.shield=Math.min(o.shield||1,.6);return{giz:18,sh:'Bu adımda kayıplar %40 azalır'}}},
 {id:'eh',t:3,c:1,ic:'📡',n:'Elektronik harp',fx:'DÜŞMAN KÖR',
  rel:(o,s)=>o.mod==='eh'?[90,'Düşman karıştırması aktif']:s.t==='cmd'?[60,'Karşı tarafın haberleşmesini kes']:[40,'Telsizlerini sustur'],
  f:o=>{o.nb=(o.nb||0)+.2;o.mom=clamp(o.mom+12);o.giz=clamp(o.giz+8);return{nb:.2,mom:12,giz:8}}},
 {id:'iht',t:3,c:2,ic:'🪖',n:'İhtiyatı sür',fx:'İHTİYAT CEPHEDE',
  rel:o=>o.hp<50||o.amm<40?[92,'Birlik yıprandı: taze kuvvet şart']:[20,'Son darbe için sakla'],
  f:o=>{o.hp=clamp(o.hp+28);o.amm=clamp(o.amm+25);o.mom=clamp(o.mom+6);return{hp:28,amm:25,mom:6}}},
 {id:'hava',t:4,c:2,ic:'✈',n:'Hava harekâtı',fx:'HAVA HAREKÂTI BAŞLADI',
  rel:(o,s)=>s.k==='hed'||s.tm?[88,'Belirleyici an: hava gücünü kullan']:[35,'Derinliğe vur'],
  f:o=>{o.nb=(o.nb||0)+.3;o.mom=clamp(o.mom+20);o.giz=clamp(o.giz-12);o.sb=(o.sb||0)+.03;return{nb:.3,mom:20,giz:-12,sh:'Harekât sonucuna +%3'}}},
 {id:'mut',t:4,c:1,ic:'🤝',n:'Müttefik desteği',fx:'MÜTTEFİK DEVREDE',
  rel:o=>o.al?[o.hp<60?80:45,'Müttefik kuvvet hazır bekliyor']:[0,''],
  f:o=>{o.hp=clamp(o.hp+14);o.mom=clamp(o.mom+10);o.sb=(o.sb||0)+.02;return{hp:14,mom:10,sh:'Harekât sonucuna +%2'}}}
);
const CPMAX=[1,2,2,3,3];
function cpOf(o){if(o.cp==null)o.cp=CPMAX[T()];return o.cp}

/* Durumu değerlendiren, en uygun 4 yetkiyi öne çıkaran panel */
function abilRow(o){if(S.mDone||!o.prep)return'';o.used=o.used||[];const s=o.steps&&o.steps[o.st]||{};const cp=cpOf(o);
 const L=ABIL.filter(a=>T()>=a.t&&!o.used.includes(a.id)).map(a=>{const[r,why]=a.rel(o,s);return{a,r,why}}).filter(x=>x.r>0).sort((x,y)=>y.r-x.r).slice(0,4);
 const act=[];if(o.nb)act.push('Şans +%'+pct(o.nb));if(o.shield&&o.shield<1)act.push('Kayıp −%'+pct(1-o.shield));if(o.rev===o.st)act.push('İstihbarat: en iyi emir işaretli');
 const locked=ABIL.filter(a=>T()<a.t).length;
 return `<div class="abil ab23"><div class="ab-h"><span>Komuta yetkileri</span><em>Komuta puanı ${'<i class="on"></i>'.repeat(cp)}${'<i></i>'.repeat(Math.max(0,CPMAX[T()]-cp))}</em></div>
 ${act.length?`<div class="ab-act">${act.map(a=>`<span>${esc(a)}</span>`).join('')}</div>`:''}
 ${cp<=0?'<p class="small muted">Komuta puanın bitti. Kalan adımları birliğinle sen yöneteceksin.</p>':
 `<div class="abr">${L.map(({a,r,why})=>{const cant=a.c>cp;const hot=r>=75;return `<button class="ab ${hot?'hot':''} ${cant?'lock':''}" data-a="abil" data-v="${a.id}" ${cant?'disabled':''}><span class="ab-t"><span class="ai">${a.ic}</span>${hot?'<em>ÖNERİLEN</em>':''}${a.c>1?`<em class="c2">${a.c} puan</em>`:''}</span><b>${esc(a.n)}</b><small>${esc(why)}</small></button>`}).join('')}</div>`}
 ${locked?`<p class="small muted ab-lk">${ico('lock',11)} Rütben yükseldikçe ${locked} yeni yetki açılacak.</p>`:''}</div>`}

function useAbil(id){const o=S.op;const a=ABIL.find(x=>x.id===id);if(!o||!a||S.mDone||!o.prep||T()<a.t)return;o.used=o.used||[];if(o.used.includes(id))return;
 const cp=cpOf(o);if(a.c>cp)return toast('Komuta puanın yetmiyor.');o.cp=cp-a.c;o.used.push(id);
 const g0={hp:o.hp,amm:o.amm,giz:o.giz,mom:o.mom};const r=a.f(o)||{};const d={hp:o.hp-g0.hp,mom:o.mom-g0.mom,giz:o.giz-g0.giz};const damm=o.amm-g0.amm;
 const parts=[];if(r.nb)parts.push(['p','Bu adımda icra şansı +%'+pct(r.nb)]);[['hp','Kuvvet'],['amm','Mühimmat'],['giz','Gizlilik'],['mom','İnisiyatif']].forEach(([k,n])=>{const v=k==='amm'?damm:d[k];if(v)parts.push([v>0?'p':'n',n+' '+(v>0?'+':'')+v])});if(r.sh)parts.push(['p',r.sh]);if(r.ext)parts.push(['p',r.ext]);if(r.sv)parts.push(['n','Sivil zarar haberi geldi']);
 o.logs.push({c:clk8(o.clk),w:'Komuta',t:`${a.n} emri verildi. ${parts.filter(p=>!/^(Kuvvet|Gizlilik|İnisiyatif) /.test(p[1])).map(p=>p[1]).join(' · ')}`.trim(),k:r.sv?'m':'g',d});
 fxPush(done=>{const el=fxLayer(`<div class="abfx"><div class="af-i">${a.ic}</div><div class="af-t">${esc(a.fx)}</div><div class="af-fx">${parts.map(([c,t])=>`<span class="${c}">${esc(t)}</span>`).join('')}</div><small class="af-cp">Kalan komuta puanı: ${o.cp}</small></div>`,'');setTimeout(()=>fxClose(done),2300);el.addEventListener('click',()=>fxClose(done),{once:true})});save();render()}

/* Göstergeler artık sonucu etkiler */
function opChance(o,def,opt,to){const tag=opt[3]||'';let g=0;if(o.amm<25)g-=.08;else if(o.amm<40)g-=.03;if(o.giz>=65&&tag==='giz')g+=.08;if(o.giz<30&&tag==='giz')g-=.06;if(o.hp<35)g-=.05;
 return clamp(.45+S.st[opt[2]]/170+(S.st.mental-50)/250-S.fatigue/350-(S.injured?.15:0)+wBonus()+prepMod(def,opt)+timBonus()+(o.mom-50)/400-(o.hard?.05:0)-(to?.2:0)+dayBonus()+(o.nb||0)+g,.1,.97)}
