/* ===== v45 · Premium: mevcut kariyerde istediğin rütbeye geç =====
   Önceden "istediğin rütbeden başla" yalnızca yeni kariyer kurarken çalışıyordu;
   kariyer ortasında Premium alan oyuncu kilitlerin açılmadığını görüyordu.
   Artık Premium sahibi her an üst bir rütbeye geçebilir (Karargâh kartı, rütbe yolu,
   satın alma sonrası açılan pencere). */
function jumpRank45(i){i=+i;if(!S||!isPrem33()||!(i>S.rank)||i>18)return;
 S.rank=i;S.xp=0;S.dIR=0;S.trust=Math.max(S.trust||0,50);S.money=Math.max(S.money||0,2000+i*1500);S.dl={xp:0,tr:S.trust,r:S.rank};
 try{pickOp()}catch(e){}
 log('Premium: kariyerine '+myRank()+' olarak devam ediyorsun.');
 try{if(i>=18&&typeof polInit==='function')polInit()}catch(e){}
 try{an33('prem_jump',String(i))}catch(e){}
 save();render();toast(myRank()+' oldun.')}
function rankPick45(fresh){if(!S||!isPrem33()||S.rank>=18)return;const rs=B().rs;
 pushModal({k:'Premium',ti:fresh?'Premium aktif. Rütbeni seç.':'İstediğin rütbeye geç',
  art:`<div class="po37-art">${crown33(40)}</div>`,
  body:`<p class="small muted">Kariyerine kaldığın yerden, seçtiğin rütbeyle devam edersin. Tecrüben yeni rütbede sıfırdan başlar.</p>
  <div class="rk45-grid">${RANKS.map((r,i)=>i<=S.rank?'':`<button class="mini rk45" data-a="rk45" data-v="${i}">${esc(rankName(i,S.nation,rs))}${i===18?' ★':''}</button>`).join('')}</div>`,
  ch:[{t:'Hikâye modlarına git',fn:()=>{setTimeout(()=>A.tales(),0)}},{t:'Şimdilik kalsın',fn:()=>{}}]})}
function card45(){if(!S||!isPrem33()||S.rank>=18)return '';
 return `<button class="card ptop36 c45" data-a="rkpick45"><div class="tpk-shine"></div>
 <div class="pt36-h"><span class="pt36-cr">${crown33(20)}</span><span class="pt36-tag">PREMIUM</span></div>
 <b class="stencil pt36-t">Rütbeni seç.</b><span class="pt36-s">Premium sende. Mareşalliğe, hatta devlet kademesine şimdi geç.</span>
 <span class="pt36-cta"><span>Rütbe seç</span><em>›</em></span></button>`}
function tales45(){if(!S||typeof TALES==='undefined')return '';const prem=isPrem33();const n=TALES.length;
 return `<button class="card t45" data-a="tales"><span class="t45-ic">📖</span><span class="grow"><b class="stencil">Hikâye modu</b><small>${prem?n+' hikâyenin tamamı açık. Kararların sonu belirler.':n+' ayrı hikâye. Kararların sonu belirler.'}</small></span><em>›</em></button>`}
{const _hq=vHQ;vHQ=function(){const h=_hq.apply(this,arguments);return card45()+(isPrem33()?tales45()+h:h+tales45())}}
{const _rl=rankLadder;rankLadder=function(){const h=_rl.apply(this,arguments);return (S&&isPrem33()&&S.rank<18)?h+`<button class="btn block rk45b" data-a="rkpick45">${crown33(16)} Premium: istediğin rütbeye geç</button>`:h}}
{const _gt=govTeaser;govTeaser=function(){const h=_gt.apply(this,arguments);return (h&&S&&isPrem33())?h.replace(/<\/div><\/div><\/div>$/,'</div></div><button class="btn ghost block rk45b" data-a="rk45" data-v="18">'+crown33(16)+' Premium: hemen Mareşal ol</button></div>'):h}}
/* satın alınca doğrudan rütbe seçimi */
{const _g=grant33;grant33=function(k,silent){const was=isPrem33();const r=_g.apply(this,arguments);try{if(k==='premium'&&!was&&S&&S.rank<18)setTimeout(()=>rankPick45(true),250)}catch(e){}return r}}
var A45={rkpick45(){rankPick45(false)},rk45(v){if(MO)nextModal();jumpRank45(v)}};

(function(){const st=document.createElement('style');st.textContent=`
.rk45-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:10px}
.rk45-grid .mini{padding:10px 8px;font-size:14px;text-align:center}
.rk45b{margin-top:10px;display:flex;align-items:center;justify-content:center;gap:8px}
.c45 .pt36-cta{justify-content:space-between}
.card.t45{display:flex!important;flex-direction:row!important;align-items:center!important;gap:12px;width:100%;text-align:left;padding:14px 16px;margin-bottom:12px}
.t45-ic{font-size:26px}.t45 .grow{flex:1;display:flex;text-align:left;flex-direction:column;gap:3px}.t45 b{font-size:17px}.t45 small{opacity:.75;font-size:13px}.t45 em{font-style:normal;font-size:22px;opacity:.7}`;document.head.appendChild(st)})();

`Premium aktif. Rütbeni seç.|Premium is active. Choose your rank.|プレミアム有効。階級を選ぼう。|Premium activo. Elige tu rango.|Premium activé. Choisis ton grade.|Premium aktiv. Wähle deinen Rang.
İstediğin rütbeye geç|Jump to any rank|好きな階級へ|Pasa al rango que quieras|Passe au grade de ton choix|Wechsle in jeden Rang
Kariyerine kaldığın yerden, seçtiğin rütbeyle devam edersin. Tecrüben yeni rütbede sıfırdan başlar.|You continue your career where you left off, at the rank you choose. Your experience starts from zero in the new rank.|キャリアはそのまま、選んだ階級で続く。経験値は新しい階級で0から始まる。|Sigues tu carrera donde la dejaste, con el rango que elijas. Tu experiencia empieza de cero en el nuevo rango.|Tu reprends ta carrière là où tu l'as laissée, au grade choisi. Ton expérience repart de zéro dans ce grade.|Du setzt deine Karriere dort fort, wo du warst, im gewählten Rang. Deine Erfahrung beginnt im neuen Rang bei null.
Şimdilik kalsın|Not now|今はやめておく|Ahora no|Pas maintenant|Später
Rütbeni seç.|Choose your rank.|階級を選ぼう。|Elige tu rango.|Choisis ton grade.|Wähle deinen Rang.
Premium sende. Mareşalliğe, hatta devlet kademesine şimdi geç.|You have Premium. Become marshal, or go straight to state leadership, right now.|プレミアム所持中。今すぐ元帥へ、国家要職へも。|Tienes Premium. Pasa ya a mariscal, incluso al gobierno.|Tu as Premium. Deviens maréchal, voire dirigeant, dès maintenant.|Du hast Premium. Werde jetzt Marschall, sogar Staatsführung.
Rütbe seç|Choose rank|階級を選ぶ|Elegir rango|Choisir le grade|Rang wählen
Premium: istediğin rütbeye geç|Premium: jump to any rank|プレミアム：好きな階級へ|Premium: pasa a cualquier rango|Premium : passe à n'importe quel grade|Premium: in jeden Rang wechseln
Hikâye modu|Story mode|ストーリーモード|Modo historia|Mode histoire|Story-Modus
Hikâye modlarına git|Go to story modes|ストーリーモードへ|Ir a los modos historia|Aller aux histoires|Zu den Story-Modi
Premium: hemen Mareşal ol|Premium: become marshal now|プレミアム：今すぐ元帥に|Premium: hazte mariscal ya|Premium : deviens maréchal maintenant|Premium: jetzt Marschall werden`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
i18Add(`# hikâyenin tamamı açık. Kararların sonu belirler.|All $1 stories unlocked. Your choices decide the ending.|$1つの物語すべて解放。結末は選択次第。|Las $1 historias desbloqueadas. Tus decisiones deciden el final.|Les $1 histoires débloquées. Tes choix décident de la fin.|Alle $1 Geschichten freigeschaltet. Deine Entscheidungen bestimmen das Ende.
# ayrı hikâye. Kararların sonu belirler.|$1 different stories. Your choices decide the ending.|$1つの物語。結末は選択次第。|$1 historias distintas. Tus decisiones deciden el final.|$1 histoires différentes. Tes choix décident de la fin.|$1 verschiedene Geschichten. Deine Entscheidungen bestimmen das Ende.
{} oldun.|You are now $1.|$1になった。|Ahora eres $1.|Tu es maintenant $1.|Du bist jetzt $1.
Premium: kariyerine {} olarak devam ediyorsun.|Premium: you continue your career as $1.|プレミアム：$1としてキャリアを続ける。|Premium: sigues tu carrera como $1.|Premium : tu poursuis ta carrière en tant que $1.|Premium: Du setzt deine Karriere als $1 fort.`);
