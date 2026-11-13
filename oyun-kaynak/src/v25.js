/* ============ v25: ASKERÎ PALET (tüm ülkelerde ortak) ============ */
const MILTH={bg:'#11130e',acc:'#c2a25a',on:'#15130b',acc2:'#6f7d4b'};
function getAcc(){return MILTH.acc}
function applyTheme(nat){
 const r=document.documentElement.style;const th=MILTH;const bg=th.bg;
 r.setProperty('--bg',bg);r.setProperty('--bg2','#161811');r.setProperty('--panel','#1b1d16');r.setProperty('--panel2','#24261d');r.setProperty('--line','#353829');
 r.setProperty('--acc',th.acc);r.setProperty('--on-acc',th.on);r.setProperty('--acc2',th.acc2);
 r.setProperty('--red','#c25a40');r.setProperty('--green','#8daf5c');r.setProperty('--amber','#d39b4c');r.setProperty('--blue','#7fa1ae');
 r.setProperty('--fg','#ece7d6');r.setProperty('--muted','#a8a48e');r.setProperty('--dim','#77745f');
 const s=`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420" fill="none" stroke="${th.acc}" stroke-opacity=".05" stroke-width="1.1">${[40,70,100,130,160].map(rr=>`<path d="M${210-rr} 200 Q${210-rr} ${200-rr*.9} ${210+rr*.2} ${200-rr} Q${210+rr*1.1} ${200-rr*.8} ${210+rr} ${205} Q${210+rr*.9} ${200+rr} ${200} ${200+rr*.95} Q${210-rr*1.05} ${200+rr*.7} ${210-rr} 200Z"/>`).join('')}</svg>`;
 r.setProperty('--tex',`url("data:image/svg+xml;utf8,${encodeURIComponent(s)}")`);
 const m=document.querySelector('meta[name=theme-color]');if(m)m.content=bg}
