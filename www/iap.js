/* Büyük Yemin · uygulama içi satın alma köprüsü (RevenueCat, @revenuecat/purchases-capacitor)
   Oyun tarafı window.IAPBridge'i kullanır: price(id), buy(id), restore(), log().
   Mağazadan kendiliğinden gelen satın alımlar (uygulama kapanırken tamamlanan,
   aile onayıyla sonradan onaylanan vb.) window.IAPGrant(anahtar) ile oyuna iletilir. */
(function(){
  var cap=window.Capacitor;
  if(!(cap&&cap.isNativePlatform&&cap.isNativePlatform()))return;

  /* RevenueCat herkese açık SDK anahtarları (uygulamaya gömülmek için tasarlanmıştır, gizli değildir) */
  var RC_KEYS={ios:'appl_HYEAZqoiaElJuPUTyHtawSeWJnx',android:'RC_ANDROID_KEY'};

  var BASE='com.gulergamestudios.buyukyemin.';
  var PRODUCTS=[
    {key:'premium',id:BASE+'premium',non:true},
    {key:'story',id:BASE+'hikaye',non:true},
    {key:'acemi',id:BASE+'acemi',non:true},
    {key:'goldL',id:BASE+'altin_buyuk'},
    {key:'goldS',id:BASE+'altin_kucuk'},
    {key:'terfi',id:BASE+'terfi'}
  ];
  var byId={};PRODUCTS.forEach(function(p){byId[p.id]=p});
  var plat=cap.getPlatform();
  var apiKey=RC_KEYS[plat];
  if(!apiKey||/^RC_/.test(apiKey))return; /* anahtar girilmeden köprü açılmaz */

  var P=(cap.Plugins&&cap.Plugins.Purchases)||cap.registerPlugin('Purchases');
  var ready=null,store={},pending={};

  /* aynı işlemi iki kez vermemek için işlem defteri */
  var seen={};try{seen=JSON.parse(localStorage.getItem('by_tx')||'{}')}catch(e){}
  function mark(tx){if(!tx)return;seen[tx]=1;try{localStorage.setItem('by_tx',JSON.stringify(seen))}catch(e){}}
  var baseKey='by_rc_base';
  function grant(k){try{window.IAPGrant&&window.IAPGrant(k)}catch(e){}}

  /* Müşteri bilgisi geldikçe: tüketilmeyenleri (Premium, Hikâye) her zaman eşitle,
     tüketilenlerde yalnızca daha önce görülmemiş ve oyunun beklemediği işlemleri ver. */
  function sync(info){
    if(!info)return;
    var txs=info.nonSubscriptionTransactions||[];
    var first=false;try{first=!localStorage.getItem(baseKey)}catch(e){}
    txs.forEach(function(t){
      var p=byId[t.productIdentifier];if(!p)return;
      var tx=t.transactionIdentifier;
      if(p.non){grant(p.key);mark(tx);return}
      if(seen[tx])return;
      if(first){mark(tx);return} /* ilk açılışta geçmiş altın alımlarını tekrar verme */
      if(pending[p.id])return;  /* buy() kendisi verecek */
      mark(tx);grant(p.key);
    });
    try{localStorage.setItem(baseKey,'1')}catch(e){}
  }

  function init(){
    if(ready)return ready;
    ready=P.configure({apiKey:apiKey}).then(function(){
      try{P.setLogLevel({level:'WARN'})}catch(e){}
      try{P.addCustomerInfoUpdateListener(function(info){sync(info)})}catch(e){}
      P.getCustomerInfo().then(function(r){sync(r&&r.customerInfo)}).catch(function(){});
      return P.getProducts({productIdentifiers:PRODUCTS.map(function(p){return p.id}),type:'NON_SUBSCRIPTION'})
        .then(function(r){(r&&r.products||[]).forEach(function(pr){store[pr.identifier]=pr})})
        .catch(function(){});
    }).catch(function(){ready=null});
    return ready;
  }
  init();

  function txOf(r){
    try{var txs=(r.customerInfo&&r.customerInfo.nonSubscriptionTransactions)||[];
      for(var i=txs.length-1;i>=0;i--)if(txs[i].productIdentifier===r.productIdentifier)return txs[i].transactionIdentifier;
    }catch(e){}
    return r&&r.transaction&&r.transaction.transactionIdentifier;
  }

  window.IAPBridge={
    price:function(id){var p=store[id];return p&&p.priceString||null},
    buy:function(id){
      return new Promise(function(res){
        (init()||Promise.resolve()).then(function(){
          var pr=store[id];
          if(!pr)return P.getProducts({productIdentifiers:[id],type:'NON_SUBSCRIPTION'}).then(function(r){
            pr=r&&r.products&&r.products[0];if(pr)store[id]=pr;return pr});
          return pr;
        }).then(function(pr){
          if(!pr)return res({ok:false,msg:'Bu ürün şu an mağazada bulunamadı. Daha sonra tekrar dene.'});
          pending[id]=1;
          P.purchaseStoreProduct({product:pr}).then(function(r){
            delete pending[id];mark(txOf(r));res({ok:true});
          }).catch(function(err){
            delete pending[id];
            var c=err&&String(err.code);
            if(c==='1'||(err&&err.userCancelled))return res({cancelled:true});
            if(c==='6'&&byId[id]&&byId[id].non)return res({ok:true}); /* zaten satın alınmış */
            if(c==='20')return res({ok:false,msg:'Satın alma onay bekliyor. Onaylandığında ürün otomatik olarak hesabına eklenecek.'});
            res({ok:false,msg:'Satın alma tamamlanamadı. Hesabından ücret alınmadı.'});
          });
        }).catch(function(){res({ok:false,msg:'Mağaza henüz hazır değil. Birkaç saniye sonra tekrar dene.'})});
      });
    },
    restore:function(){
      return (init()||Promise.resolve()).then(function(){return P.restorePurchases()}).then(function(r){
        var info=r&&r.customerInfo,ids={};
        ((info&&info.nonSubscriptionTransactions)||[]).forEach(function(t){var p=byId[t.productIdentifier];if(p&&p.non)ids[p.id]=1});
        return Object.keys(ids);
      });
    },
    log:function(){}
  };
})();
