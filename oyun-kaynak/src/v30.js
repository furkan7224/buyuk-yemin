/* ============ v30: SIRADAKİ RÜTBE KARTI (net ilerleme + açıklama) ============ */
function reqFrac(k){const r=RANKS[S.rank];return clamp((k==='xp'?S.xp/r.xp:k==='d'?S.dIR/r.d:k==='tr'?S.trust/r.tr:k==='wins'?S.wins/((r.rq&&r.rq.wins)||1):S.st[k]/((r.rq&&r.rq[k])||1))*100)}
const REQI={xp:'⭐',d:'📅',tr:'🎖️',wins:'🏆'};
const REQH={xp:'Başarılı harekât ve görevler',d:'Her gün kendiliğinden ilerler',tr:'Harekât başarısı ve disiplin',wins:'Savaşta komuta zaferi'};
function rankCard(){if(S.rank>=18)return'';const L=reqs();const[pp]=promoPct();const r=RANKS[S.rank];const nr=rankName(S.rank+1,S.nation,B().rs);const cr=myRank();
 const ready=L.every(x=>x[2]);const left=Math.max(0,r.d-S.dIR);
 const C=2*Math.PI*44,off=C*(1-pp/100);
 return `<div class="rk30 ${ready?'ready':''}">
 <div class="rk-h"><span class="rk-lbl">SIRADAKİ RÜTBE</span><span class="rk-eta">${ready?'Terfi bu gece!':left?'En erken '+left+' gün sonra':'Şartları tamamla'}</span></div>
 <div class="rk-main">
  <div class="rk-ins"><div class="rk-from">${ins(S.rank,46)}<small>${esc(cr)}</small></div><span class="rk-arr">›</span><div class="rk-to">${ins(S.rank+1,66)}</div></div>
  <div class="rk-name"><b>${esc(nr)}</b>${RANKS[S.rank+1].tr_n!==nr?`<small>Karşılığı: ${esc(RANKS[S.rank+1].tr_n)}</small>`:''}</div>
  <div class="rk-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" class="rk-bg"/><circle cx="50" cy="50" r="44" class="rk-fg" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"/></svg><b>%${pp}</b></div>
 </div>
 <div class="rk-reqs">${L.map(([n,v,ok,k])=>`<div class="rk-r ${ok?'ok':''}"><div class="rk-rh"><span>${REQI[k]||'💪'} ${esc(n)}</span><b>${ok?'✓ ':''}${esc(v)}</b></div><div class="rk-pb"><i style="width:${ok?100:reqFrac(k)}%"></i></div><small>${esc(REQH[k]||'Antrenman ve görevlerle gelişir')}</small></div>`).join('')}</div>
 <div class="rk-info"><b>Rütben nasıl ilerler?</b><p>Rütben, harekât başarın ve gün içindeki görevlerini yerine getirmenle eşit ölçüde ilerler. Başarılı harekâtlar tecrübe ve komutan güveni kazandırır; antrenman, düzenli beslenme ve birlik görevleri yeteneklerini ve hazırlığını artırır. Tüm şartlar dolduğunda terfin o gecenin sonunda gerçekleşir.</p>
 <div class="rk-chips"><span>⚔️ Harekât başarısı → Tecrübe + Güven</span><span>📋 Günlük görevler → Yetenek + Hazırlık</span></div></div>
 </div>`}
