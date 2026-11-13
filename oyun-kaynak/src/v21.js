/* ============ v21: GENİŞ CEPHANELİK · SUBAY MENÜLERİ · RÜTBE BAŞI MAAŞ ============ */

/* ---- Maaş: her terfide artar ---- */
const SAL19=[7000,7800,8600, 10000,10900,11800,12800,13900, 15500,16800,18200, 22000,24000,26500, 32000,35000,38500,42000,46000];
function maas(r){r=r==null?S.rank:r;return SAL19[Math.max(0,Math.min(SAL19.length-1,r|0))]}

/* ---- Cephanelik: rütbeyle açılan yeni silah ve sistemler ---- */
const WCAT2={
 pompali:['Pompalı tüfek',2,'inf cdo para mar gend sf nsf gsf',[48,78,25]],
 bombaatar:['Bombaatar',3,'inf cdo para mar gend sf nsf gsf arm',[55,74,58]],
 havan:['Havan',5,'inf cdo para mar arm art gend',[58,84,74]],
 fpv:['Dolanan mühimmat (kamikaze İHA)',7,'all',[88,82,84]],
 zpt:['Zırhlı muharebe aracı',9,'inf cdo para mar arm gend sf',[64,86,72]],
 heli:['Taarruz helikopteri',11,'all',[80,94,90]],
 hsa:['Hava savunma sistemi',12,'all',[86,90,96]],
 denizalti:['Denizaltı',13,'navy coast mar nsf',[78,98,98]],
 seyir:['Seyir füzesi',14,'all',[92,97,100]],
 ew:['Elektronik harp sistemi',15,'all',[90,70,96]],
 balistik:['Taktik balistik füze',16,'all',[90,100,100]]
};
Object.assign(WCAT,WCAT2);WKEYS.push(...Object.keys(WCAT2));
PERS.push('pompali');PLAT.push('bombaatar','havan','fpv','zpt','heli','hsa','denizalti','seyir','ew','balistik');
const WPN2={"ABD": "XRSG-590|XRGL-320|XRH-252|Wasp-9|Stonecrest|Nightrail|Bulwark|Deepwatch|Longreach|Hushwire|Emberfall", "RUS": "VKSG-12|VKGL-34|VKH-2|Osa-7|Zubr|Veter|Shchit|Glubina|Strela-D|Tuman|Zarya", "CIN": "QXSG-09|QXGL-87|QXH-87|Fengyi|Shilong|Feihu|Tiandun|Shenhai|Changjian|Wuying|Huoyun", "ALM": "GWSG-4|GWGL-40|GWH-81|Hornisse|Steinbock|Windjäger|Schildwall|Tiefgang|Fernpfeil|Nebelwand|Feuersturm", "IGB": "BRSG-4|BRGL-123|BRH-16|Hornet-6|Ironside|Merlin Hawk|Rampart|Deepsound|Longshot|Greyveil|Tempest Fire", "FRA": "FXSG-4|FXGL-1|FXH-81|Frelon|Bastion|Vautour|Rempart|Abysse|Trait-Long|Brume|Foudre", "JPN": "TKSG-101|TKGL-06|TKH-16|Suzume|Ishigaki|Kazekiri|Tatekabe|Shinkai|Tōya|Kasumi|Homura", "PAK": "PFSG-101|PFGL-40|PFH-81|Bhanwra|Faulad|Toofan-H|Hisar-e-Asman|Gehrai|Teer-e-Door|Dhund|Shola", "AZE": "ARSG-101|ARGL-25|ARH-82|Arı|Polad|Külək|Qalxan|Dərinlik|Uzaq Ox|Duman|Alov", "ISR": "NVSG-101|NVGL-203|NVH-115|Tzir’a|Sela|Ruach|Magen-Or|Mamakim|Chetz-Rachok|Arafel|Lehava", "ITA": "LVSG-4|LVGL-160|LVH-81|Calabrone|Rocca|Vento|Scudo|Abisso|Saetta|Nebbia|Fiamma", "SUR": "DMSG-101|DMGL-25|DMH-2|Dabbur|Sakhr|Rih|Dir’|Umq|Sahm|Dabab|Lahab", "UZB": "SXSG-12|SXGL-25|SXH-2|Ari|Po‘lat|Shamol|Qalqon|Chuqurlik|Uzoq O‘q|Tuman|Olov", "TR": "MTSG-101|MTGL-40|MTH-81|Arıkuşu|Çelikyele|Doğanbey|Gökkalkan|Derinsu|Okyay|Sisperde|Yalaz"};
Object.keys(WPN).forEach(n=>{WPN[n]+='|'+(WPN2[n]||WPN2.TR)});

const WSVG2={
 pompali:'<path d="M10 30 L30 27 L34 24 L118 24 L118 29 L36 31 L20 38 L10 38Z"/><rect x="40" y="29" width="78" height="5" rx="2.5"/><rect x="72" y="31" width="30" height="7" rx="3"/><path d="M50 31 L46 44 L38 44 L42 31Z"/>',
 bombaatar:'<path d="M10 30 L28 26 L34 24 L80 24 L80 36 L52 36 L48 48 L38 48 L42 36 L30 36 L16 40 L10 40Z"/><rect x="78" y="19" width="62" height="20" rx="9"/><rect x="74" y="16" width="10" height="26" rx="2"/>',
 havan:'<rect x="56" y="10" width="12" height="78" rx="5" transform="rotate(38 62 30)"/><path d="M24 50 L74 50 L76 54 L22 54Z"/><path d="M78 36 L100 54 M78 36 L64 54" stroke="#000" stroke-width="3"/>',
 fpv:'<rect x="62" y="24" width="36" height="12" rx="4"/><path d="M80 24 L80 16 M80 36 L80 44" stroke="#000" stroke-width="2"/><path d="M98 30 L116 30" stroke="#000" stroke-width="2"/><ellipse cx="40" cy="22" rx="18" ry="3"/><ellipse cx="120" cy="22" rx="18" ry="3"/><ellipse cx="40" cy="40" rx="18" ry="3"/><ellipse cx="120" cy="40" rx="18" ry="3"/><path d="M62 26 L44 22 M98 26 L116 22 M62 34 L44 40 M98 34 L116 40" stroke="#000" stroke-width="3"/>',
 zpt:'<path d="M12 34 L22 22 L118 22 L148 34 L148 44 L12 44Z"/><path d="M58 22 L64 12 L96 12 L100 22Z"/><rect x="96" y="14" width="44" height="3" rx="1.5"/><circle cx="32" cy="48" r="7"/><circle cx="58" cy="48" r="7"/><circle cx="102" cy="48" r="7"/><circle cx="128" cy="48" r="7"/>',
 heli:'<path d="M30 30 Q40 18 70 20 L96 22 L148 26 L148 30 L96 32 Q84 42 56 40 Q34 40 30 30Z"/><rect x="40" y="10" width="110" height="3" rx="1.5"/><rect x="74" y="12" width="4" height="9"/><path d="M146 18 L152 36" stroke="#000" stroke-width="3"/><path d="M50 40 L44 50 L84 50" stroke="#000" stroke-width="2" fill="none"/><rect x="34" y="27" width="14" height="5" rx="2"/>',
 hsa:'<path d="M14 42 L120 42 L120 52 L14 52Z"/><path d="M120 34 L146 34 L150 52 L120 52Z"/><rect x="30" y="16" width="64" height="20" rx="3" transform="rotate(-24 62 26)"/><circle cx="28" cy="54" r="5"/><circle cx="60" cy="54" r="5"/><circle cx="128" cy="54" r="5"/>',
 denizalti:'<path d="M8 36 Q10 26 34 26 L132 26 Q154 28 154 36 Q152 44 132 44 L34 44 Q10 44 8 36Z"/><path d="M60 26 L64 12 L92 12 L94 26Z"/><rect x="74" y="4" width="3" height="8"/><path d="M140 30 L152 22 L152 50 L140 42Z"/>',
 seyir:'<path d="M12 28 L120 28 Q146 28 152 31 Q146 34 120 34 L12 34Z"/><path d="M58 34 L48 46 L64 46 L72 34Z"/><path d="M58 28 L48 16 L64 16 L72 28Z"/><path d="M12 28 L4 20 L8 31 L4 42 L12 34Z"/>',
 ew:'<path d="M14 40 L146 40 L140 52 L20 52Z"/><path d="M30 28 L100 28 L104 40 L26 40Z"/><rect x="62" y="10" width="4" height="18"/><path d="M40 10 Q64 0 88 10 Q64 18 40 10Z"/><path d="M104 14 Q118 20 104 34 M112 10 Q132 22 112 38" stroke="#000" stroke-width="2" fill="none"/>',
 balistik:'<path d="M10 44 L150 44 L146 54 L14 54Z"/><rect x="24" y="22" width="108" height="14" rx="7" transform="rotate(-12 78 29)"/><path d="M128 18 L150 14 L132 26Z"/><path d="M40 44 L52 34 L60 44" stroke="#000" stroke-width="3" fill="none"/>'
};

function wBonus(){const e=equipped();let b=(e.p?(e.p.st[0]-55)/700:0);if(e.x)b+=.02+Math.min(.03,(e.x.r||0)*.0018);if(e.s)b+=.005;return b}

/* ---- Subay gazinosu: Teğmenden itibaren menü çeşitlenir ---- */
const OFFM=[
 [8,{k:[['Subay gazinosu: omlet, peynir tabağı, taze sıkma',3,['omelette','cheese','tomato','tea'],540,32],['Subay gazinosu: kruvasan ve kahve',0,['croissant','coffee'],430,9]],
     o:[['Subay gazinosu: dana bonfile, sebze sote',3,['steak','broccoli','salad','water'],720,52],['Subay gazinosu: fırın makarna',0,['pasta','cheese','ayran'],820,28]],
     a:[['Subay gazinosu: fırında somon, kinoa',3,['fish','quinoa','greens','water'],610,45],['Subay gazinosu: kuzu tandır ve pilav',1,['meat','rice','yogurt'],880,46]]}],
 [10,{k:[['Gazino brunch: yumurta, tereyağlı ekmek, kahve',1,['egg','bread','cream','coffee'],620,26]],
      o:[['Gazino: midyeli deniz ürünleri pilavı',2,['mussels','rice','lemon','water'],640,34]],
      a:[['Gazino: hindi göğsü, tatlı patates',3,['chicken','sweetpot','greenbeans','water'],600,48]]}],
 [11,{k:[['Karargâh kahvaltısı: granola, yoğurt, orman meyvesi',3,['oats','yogurt','berries','nuts'],500,24]],
      o:[['Karargâh: ızgara antrikot, fırın patates',2,['steak','potato','salad'],860,55]],
      a:[['Karargâh: Akdeniz mezeleri ve levrek',3,['fish','olives','salad','lemon'],580,40]]}],
 [14,{k:[['Generaller salonu: tam kahvaltı servisi',2,['egg','cheese','olives','honey','tea'],700,34]],
      o:[['Generaller salonu: protokol menüsü',2,['soup_clear','steak','rice','salad'],900,58]],
      a:[['Generaller salonu: resmî akşam yemeği',1,['soup_red','fish','potato','wine'],940,48]]}]
];
function offMenu(meal){if(typeof S==='undefined'||!S||S.rank==null)return[];const L=[];OFFM.forEach(([r,m])=>{if(S.rank>=r)L.push(...m[meal])});return L}
function offUnl(){const x=OFFM.find(o=>o[0]===S.rank);if(!x)return[];return[S.rank===8?'Subay gazinosu açıldı: yeni menüler':S.rank>=14?'Generaller salonu açıldı: yeni menüler':'Yemekhanede yeni menüler']}
