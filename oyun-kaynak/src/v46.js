/* ===== v46 · Güvenlik ağı: bir ekran çizilirken hata olursa arayüz donmasın =====
   (1.1.1'de kariyer yokken Mağaza açılınca money() hata veriyordu; ekran Mağaza'da
   takılı kalıyor, sonraki dokunuşlar — dil seçimi dahil — hiçbir şey değiştirmiyordu.) */
{const _r=render;let busy=false;render=function(){try{return _r.apply(this,arguments)}catch(e){
 try{console.error('render',e);if(window.FBA&&FBA.err)FBA.err(e)}catch(_){}
 if(busy)throw e;busy=true;try{const bad=UI.scr;UI.scr=(S&&bad!=='game')?'game':'title';try{if(MO){Q.length=0;nextModal()}}catch(_){} _r.apply(this,arguments);toast('Bir sorun oldu, ekran yenilendi.')}finally{busy=false}}}}
`Bir sorun oldu, ekran yenilendi.|Something went wrong; the screen was refreshed.|問題が発生したため画面を更新しました。|Algo salió mal; se actualizó la pantalla.|Un problème est survenu ; l'écran a été actualisé.|Etwas ist schiefgelaufen; der Bildschirm wurde neu geladen.`.split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
