/* =====================================================================
   v34 · Hikâyelerin İngilizce sürümü
   Türkçe dışındaki bütün dillerde hikâyeler İngilizce gösterilir.
   Sahne hikâyelerinde mantık (etki, şans, hedef) Türkçe dosyadan gelir;
   İngilizce katman yalnızca metinleri değiştirir: TALE_EN[id] = {meta, scenes, end}
   Özel motorlu hikâyeler (Köstebek) kendi t.en nesnesini verir.
   ===================================================================== */
const TALE_EN={};
const TALE_META34=['ti','genre','sub','pitch','chapters','statDefs'];
const taleEnOn34=()=>typeof LANG!=='undefined'&&LANG!=='tr';
function taleBuildEn34(t){const E=TALE_EN[t.id];if(!E)return null;if(t._enBuilt)return t._enBuilt;
 const o=Object.assign({},E.meta||{});
 if(t.scenes&&E.scenes){const sc={};for(const id in t._trv.scenes){const s=t._trv.scenes[id],e=E.scenes[id]||{};const s2=Object.assign({},s);
   if(e.b!=null)s2.b=e.b;if(e.ti!=null)s2.ti=e.ti;
   if(s.ch)s2.ch=s.ch.map((c,i)=>{const c2=Object.assign({},c);if(e.ch&&e.ch[i]!=null)c2.t=e.ch[i];if(e.why&&e.why[i]!=null)c2.why=e.why[i];return c2});
   if(s.end)s2.end=Object.assign({},s.end,{ti:(E.end&&E.end[s.end.k])||s.end.ti},s.end.medal&&E.medal?{medal:E.medal}:{});
   sc[id]=s2}o.scenes=sc}
 return t._enBuilt=o}
function taleLang34(){TALES.forEach(t=>{
 if(!t._trv){t._trv={};TALE_META34.concat(['scenes','view','endText','subtitle','endArt','endings']).forEach(k=>{if(k in t)t._trv[k]=t[k]})}
 Object.assign(t,t._trv);
 if(taleEnOn34()){const en=t.en||taleBuildEn34(t);if(en)Object.assign(t,en)}})}
{const _sl=setLang;setLang=function(v){_sl(v);taleLang34();render()}}
setTimeout(()=>{taleLang34();try{render()}catch(e){}},0);
/* hikâye arayüzündeki kalıp metinler */
`Kararların sonu belirler|Your choices decide the ending|選択が結末を決める|Tus decisiones deciden el final|Tes choix décident de la fin|Deine Entscheidungen bestimmen das Ende
1. bölüm ücretsiz|Chapter 1 free|第1章無料|Capítulo 1 gratis|Chapitre 1 gratuit|Kapitel 1 kostenlos
Devam ediyor|In progress|進行中|En curso|En cours|Läuft
Açık|Unlocked|解放済み|Desbloqueada|Débloquée|Freigeschaltet
Kaldığın yerden|Continue|続きから|Continuar|Reprendre|Fortsetzen
Bölümler|Chapters|章|Capítulos|Chapitres|Kapitel
Sonlar|Endings|結末|Finales|Fins|Enden
Devam et|Continue|続ける|Continuar|Continuer|Weiter
Hikâye burada bitmiyor.|The story doesn't end here.|物語はここで終わらない。|La historia no termina aquí.|L'histoire ne s'arrête pas là.|Die Geschichte endet hier nicht.
Paketi aç|Unlock pack|パックを解放|Desbloquear paquete|Débloquer le pack|Paket freischalten
Paketi aç ve devam et|Unlock pack and continue|パックを解放して続ける|Desbloquear y continuar|Débloquer et continuer|Freischalten und weiterspielen
Daha sonra|Later|あとで|Más tarde|Plus tard|Später
tek seferlik|one-time|1回限り|pago único|paiement unique|einmalig
tek seferlik ödeme|one-time payment|1回限りの支払い|pago único|paiement unique|Einmalzahlung
Her hikâyede farklı sonlar|Multiple endings in every story|各物語に複数の結末|Varios finales en cada historia|Plusieurs fins dans chaque histoire|Mehrere Enden in jeder Geschichte
Kariyer modunda özel madalyalar|Exclusive medals in career mode|キャリアモードの限定勲章|Medallas exclusivas en el modo carrera|Médailles exclusives en mode carrière|Exklusive Medaillen im Karrieremodus
Kariyer ödülü|Career reward|キャリア報酬|Recompensa de carrera|Récompense de carrière|Karriere-Belohnung
Kariyer modundaki profilinde görünür.|Shown on your career profile.|キャリアのプロフィールに表示されます。|Aparece en tu perfil de carrera.|Visible sur ton profil de carrière.|Wird in deinem Karriereprofil angezeigt.
Hikâye madalyaları|Story medals|ストーリー勲章|Medallas de historia|Médailles d'histoire|Story-Medaillen
Hikâye modunda kazanıldı|Earned in story mode|ストーリーモードで獲得|Obtenida en el modo historia|Obtenue en mode histoire|Im Story-Modus verdient
Son|Ending|結末|Final|Fin|Ende`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6&&!I18N[c[0]])I18N[c[0]]=c});

I18P.push(
 [/^Bölüm (\d+)$/,['Chapter $1','第$1章','Capítulo $1','Chapitre $1','Kapitel $1']],
 [/^(\d+)\/(\d+) bulundu$/,['$1/$2 found','$1/$2 発見','$1/$2 encontrados','$1/$2 trouvées','$1/$2 gefunden']],
 [/^Başarı şansı %(\d+)$/,['Success chance $1%','成功率 $1%','Probabilidad de éxito $1%','Chance de réussite $1 %','Erfolgschance $1 %']],
 [/^(\d+) hikâye · tek paket$/,['$1 stories · one pack','$1つの物語・1パック','$1 historias · un paquete','$1 histoires · un pack','$1 Geschichten · ein Paket']],
 [/^(\d+) hikâyenin tamamı$/,['All $1 stories','全$1話','Las $1 historias completas','Les $1 histoires complètes','Alle $1 Geschichten']],
 [/^(\d+) bölüm açık$/,['$1 chapters unlocked','$1章解放','$1 capítulos desbloqueados','$1 chapitres débloqués','$1 Kapitel freigeschaltet']],
 [/^(\d+)\/(\d+) son$/,['$1/$2 endings','結末 $1/$2','$1/$2 finales','$1/$2 fins','$1/$2 Enden']]);
`‹ Hikâyeler|‹ Stories|‹ ストーリー|‹ Historias|‹ Histoires|‹ Geschichten
Her hikâyenin tamamı, tüm sonlar ve kariyer madalyaları|Every story in full, all endings and career medals|全ストーリー、全結末、キャリア勲章|Todas las historias completas, todos los finales y medallas|Toutes les histoires, toutes les fins et médailles de carrière|Alle Geschichten, alle Enden und Karriere-Medaillen
paket dahil, reklamsız ve tüm özellikler ›|pack included, no ads and every feature ›|パック込み・広告なし・全機能 ›|paquete incluido, sin anuncios y todo ›|pack inclus, sans pub et tout le reste ›|Paket inklusive, werbefrei, alle Funktionen ›
Hikâye Paketi + reklamsız oyun + 2 kat tecrübe + istediğin rütbeden başla ›|Story Pack + no ads + 2× experience + start at any rank ›|ストーリーパック+広告なし+経験値2倍+好きな階級から ›|Paquete de historias + sin anuncios + experiencia ×2 + cualquier rango ›|Pack d'histoires + sans pub + expérience ×2 + n'importe quel grade ›|Story-Paket + werbefrei + doppelte Erfahrung + beliebiger Startrang ›
Kaldığın yer kaydedildi. Paketi aç,|Your progress is saved. Unlock the pack to continue|進行状況は保存されました。パックを解放して続きを：|Tu progreso se ha guardado. Desbloquea el paquete para continuar|Ta progression est sauvegardée. Débloque le pack pour reprendre|Dein Fortschritt ist gespeichert. Schalte das Paket frei, um
hikâyesine tam buradan devam et.|right where you left off.|をここから。|justo donde lo dejaste.|là où tu t'es arrêté.|genau hier weiterzuspielen.
Hikâyeye başla|Start the story|物語を始める|Empezar la historia|Commencer l'histoire|Geschichte starten
Hikâye Paketi açık|Story Pack unlocked|ストーリーパック解放済み|Paquete de historias desbloqueado|Pack d'histoires débloqué|Story-Paket freigeschaltet
Esir ve diğer hikâyeler · kararların sonu belirler|Captive and more · your choices decide the ending|捕虜ほか・選択が結末を決める|Cautivo y más · tus decisiones deciden el final|Captif et plus · tes choix décident de la fin|Gefangen und mehr · deine Entscheidungen bestimmen das Ende`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
