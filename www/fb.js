/* Büyük Yemin · Firebase Analytics + Crashlytics köprüsü (@capacitor-firebase)
   Oyun window.FBLog(olay, değer) çağırır. Oyundaki JavaScript hataları Crashlytics'e
   "non-fatal" olarak gönderilir. Kişisel veri gönderilmez. */
(function(){
  var cap=window.Capacitor;
  if(!(cap&&cap.isNativePlatform&&cap.isNativePlatform()))return;
  var reg=function(n){return (cap.Plugins&&cap.Plugins[n])||cap.registerPlugin(n)};
  var A=reg('FirebaseAnalytics'),C=reg('FirebaseCrashlytics');
  var clean=function(s,n){return String(s==null?'':s).replace(/[^A-Za-z0-9_]/g,'_').slice(0,n)};

  window.FBLog=function(ev,v){
    try{
      var name=clean(ev,40);if(!name||/^[0-9_]/.test(name))return;
      var params={};if(v!==''&&v!=null)params.item=String(v).slice(0,100);
      A.logEvent({name:name,params:params}).catch(function(){});
      C.log({message:name+(params.item?' '+params.item:'')}).catch(function(){});
    }catch(e){}
  };

  var sent=0;
  function report(msg,stack){
    if(sent++>20)return; /* aynı oturumda hata yağmurunu sınırla */
    try{C.recordException({message:String(msg||'JS hatası').slice(0,300)}).catch(function(){})}catch(e){}
    try{C.log({message:String(stack||'').slice(0,900)}).catch(function(){})}catch(e){}
  }
  window.addEventListener('error',function(e){report(e.message,e.error&&e.error.stack)});
  window.addEventListener('unhandledrejection',function(e){var r=e.reason;report(r&&r.message||String(r),r&&r.stack)});

  try{C.setCustomKey({key:'lang',value:localStorage.getItem('by-lang')||'tr',type:'string'}).catch(function(){})}catch(e){}
})();
