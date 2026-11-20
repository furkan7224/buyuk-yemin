/* ===== v38 · Görünür dil seçici (1.1.1) ===== */
const globe38=(s=17)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`;
function langBtn38(cls){const cur=(LANGS.find(x=>x[0]===LANG)||LANGS[0]);return `<button class="lang38 ${cls||''} notr" data-a="langpick38" aria-label="Language">${globe38()}<b>${LANG.toUpperCase()}</b></button>`}
function langPick38(){const el=document.getElementById('modal');
 pushModal({k:'Dil · Language',ti:'Dil seç',body:`<p class="small muted notr">Choose your language · 言語を選択 · Elige tu idioma · Choisis ta langue · Sprache wählen</p><div class="lp38 notr">${LANGS.map(([k,n])=>`<button class="lp38-b ${LANG===k?'on':''}" data-l="${k}">${n}${LANG===k?' ✓':''}</button>`).join('')}</div>`,
  ch:[{t:'Kapat',fn:()=>{}}]});
 setTimeout(()=>{document.querySelectorAll('#modal .lp38-b').forEach(b=>b.onclick=()=>{const l=b.dataset.l;try{while(MO)nextModal()}catch(e){}setLang(l)})},0)}
var A38={langpick38:langPick38};
/* oyun üst çubuğu: müzik butonunun yanına */
{const _vg=vGame;vGame=function(){return _vg().replace('<button class="mus31',langBtn38()+'<button class="mus31')}}
/* ana ekran: sağ üst köşe */
{const _vt=vTitleX;vTitleX=function(){return _vt().replace(/<div class="title[^"]*">/,m=>m+langBtn38('lang38t'))}}
`Dil seç|Choose language|言語を選択|Elige idioma|Choisir la langue|Sprache wählen
Kapat|Close|閉じる|Cerrar|Fermer|Schließen`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
