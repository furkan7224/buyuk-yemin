/* ===== v37 · Premium görünürlüğü (1.1.1) =====
   1) Karargâhın en üstünde büyük Premium kartı (aşağıdaki eski küçük kart kaldırıldı)
   2) Başarısız harekâttan sonra Premium teklifi penceresi */

/* eski "Rütbe yolu" üstündeki küçük kartı kapat */
premCard33=function(){return ''};

function premTop36(){if(!S||isPrem33())return '';
 const nx=S.rank<18?RANKS[S.rank+1]:null;
 return `<button class="card ptop36" data-a="store33" data-v="p"><div class="tpk-shine"></div>
 <div class="pt36-h"><span class="pt36-cr">${crown33(20)}</span><span class="pt36-tag">PREMIUM</span><span class="pt36-once">Tek seferlik ödeme</span></div>
 <b class="stencil pt36-t">Rütbeleri bekleme.</b><span class="pt36-s">İstediğin rütbeden başla, ${nx?'sıradaki terfine':'zirveye'} 2 kat hızlı ulaş.</span>
 <span class="pt36-l"><span><i>✓</i>2 kat tecrübe</span><span><i>✓</i>Her gün +2 eylem</span><span><i>✓</i>Reklamsız oyun</span><span><i>✓</i>4 hikâyenin tamamı</span></span>
 <span class="pt36-cta"><span>Premium'a geç</span><b>${esc(price33('premium'))}</b><em>›</em></span></button>`}
{const _hq=vHQ;vHQ=function(){return premTop36()+_hq.apply(this,arguments)}}

/* başarısız harekât → Premium teklifi (rapor penceresinin hemen ardından) */
function opFailed37(r){return !!r&&(r.res===0||(r.res==null&&r.ok===false))}
function premOffer37(){an33('prem_offer','fail');
 pushModal({k:'Premium',ti:'Bu harekât olmadı.',
  art:`<div class="po37-art">${crown33(44)}</div>`,
  body:`<p>Başarısız harekâtlar terfini geciktirir. Premium ile tecrüben 2 katına çıkar, her gün 2 eylem hakkı fazlası kazanırsın ve istediğin rütbeden başlayabilirsin.</p>
  ${premList33().slice(0,5).map(x=>`<div class="pr33-li"><i>✓</i>${x}</div>`).join('')}
  <p class="small muted po37-p"><span>Tek seferlik ödeme</span> · <b>${esc(price33('premium'))}</b></p>`,
  ch:[{t:"Premium'a geç",fn:()=>{an33('prem_offer_ok','fail');setTimeout(()=>A.store33('p'),0)}},{t:'Şimdi değil',fn:()=>{}}]})}
{const _pm=pushModal;pushModal=function(m){_pm.apply(this,arguments);
 try{if(S&&!isPrem33()&&opFailed37(S.mRes)&&!S.mRes._po37){S.mRes._po37=1;premOffer37()}}catch(e){}}}

/* kilitli her yerde "Premium ile hemen aç" seçeneği */
function unl37(){if(!S||isPrem33())return '';return `<button class="unl37" data-a="store33" data-v="p"><span class="u37-c">${crown33(18)}</span><span class="grow"><b>Premium ile hemen aç</b><small>İstediğin rütbeden, devlet kademesinden bile başla.</small></span><span class="u37-p">${esc(price33('premium'))}<em>›</em></span></button>`}
{const _gt=govTeaser;govTeaser=function(){const h=_gt.apply(this,arguments);return h?h.replace(/<\/div><\/div><\/div>$/,'</div></div>'+unl37()+'</div>'):h}}
{const _vs=vState;vState=function(){let h=_vs.apply(this,arguments);if(!S.pol)h=h.replace('<p class="small muted">Askerî rütbelerin',unl37()+'$&');return h}}
{const _rl=rankLadder;rankLadder=function(){return _rl.apply(this,arguments)+(S.rank<18?unl37():'')}}
{const _vt=vTrain;vTrain=function(){return _vt.apply(this,arguments).replace('<div class="wpn lock',unl37()+'$&')}}
{const _vd=vDiplo;vDiplo=function(){let h=_vd.apply(this,arguments);if(typeof AUTH!=='undefined'&&AUTH.some(a=>S.rank<a[0]))h=h.replace('<div class="auth">',unl37()+'$&');return h}}
{const _vr=vRegions;vRegions=function(){let h=_vr.apply(this,arguments);if(typeof RACT!=='undefined'&&Object.values(RACT).some(a=>S.rank<a[1]))h=h.replace('<div class="tiles">',unl37()+'$&');return h}}
{const _vn=vNews;vNews=function(){return _vn.apply(this,arguments).replace('<div class="lockn">',unl37()+'$&')}}
{const _ar=abilRow;abilRow=function(){const h=_ar.apply(this,arguments);return h.replace(/(yeni yetki açılacak\.<\/p>)/,'$1'+unl37())}}

`Premium ile hemen aç|Unlock now with Premium|プレミアムで今すぐ解放|Desbloquea ya con Premium|Débloque maintenant avec Premium|Jetzt mit Premium freischalten
İstediğin rütbeden, devlet kademesinden bile başla.|Start at any rank, even in state leadership.|好きな階級から、国家要職からでも始められる。|Empieza en cualquier rango, incluso en el gobierno.|Commence au grade de ton choix, même au sommet de l'État.|Starte in jedem Rang, sogar in der Staatsführung.
Tek seferlik ödeme|One-time payment|買い切り|Pago único|Paiement unique|Einmalzahlung
Rütbeleri bekleme.|Don't wait for ranks.|昇進を待たない。|No esperes los ascensos.|N'attends pas les grades.|Warte nicht auf Ränge.
İstediğin rütbeden başla, sıradaki terfine 2 kat hızlı ulaş.|Start at any rank and reach your next promotion twice as fast.|好きな階級から始め、次の昇進に2倍速で到達。|Empieza en cualquier rango y asciende el doble de rápido.|Commence au grade de ton choix et monte deux fois plus vite.|Starte in jedem Rang und erreiche die nächste Beförderung doppelt so schnell.
İstediğin rütbeden başla, zirveye 2 kat hızlı ulaş.|Start at any rank and reach the top twice as fast.|好きな階級から始め、頂点に2倍速で到達。|Empieza en cualquier rango y llega a la cima el doble de rápido.|Commence au grade de ton choix et atteins le sommet deux fois plus vite.|Starte in jedem Rang und erreiche die Spitze doppelt so schnell.
2 kat tecrübe|2× experience|経験値2倍|Experiencia ×2|Expérience ×2|2× Erfahrung
Her gün +2 eylem|+2 actions daily|毎日+2行動|+2 acciones al día|+2 actions par jour|+2 Aktionen täglich
Reklamsız oyun|No ads|広告なし|Sin anuncios|Sans publicité|Werbefrei
4 hikâyenin tamamı|All 4 stories|4つの物語すべて|Las 4 historias|Les 4 histoires|Alle 4 Geschichten
Premium'a geç|Go Premium|プレミアムにする|Hazte Premium|Passer à Premium|Premium holen
Bu harekât olmadı.|This operation failed.|この作戦は失敗した。|Esta operación fracasó.|Cette opération a échoué.|Dieser Einsatz ist gescheitert.
Başarısız harekâtlar terfini geciktirir. Premium ile tecrüben 2 katına çıkar, her gün 2 eylem hakkı fazlası kazanırsın ve istediğin rütbeden başlayabilirsin.|Failed operations delay your promotion. With Premium you earn double experience, get 2 extra actions every day and can start at any rank.|作戦の失敗は昇進を遅らせる。プレミアムなら経験値2倍、毎日2回多く行動でき、好きな階級から始められる。|Las operaciones fallidas retrasan tu ascenso. Con Premium ganas el doble de experiencia, 2 acciones extra cada día y puedes empezar en cualquier rango.|Les opérations ratées retardent ta promotion. Avec Premium, tu gagnes deux fois plus d'expérience, 2 actions de plus chaque jour et tu peux commencer au grade de ton choix.|Gescheiterte Einsätze verzögern deine Beförderung. Mit Premium bekommst du doppelte Erfahrung, täglich 2 Aktionen mehr und kannst in jedem Rang starten.
Şimdi değil|Not now|今はしない|Ahora no|Pas maintenant|Nicht jetzt`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
