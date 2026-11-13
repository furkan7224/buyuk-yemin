/* Büyük Yemin · uygulama içi satın alma köprüsü (cordova-plugin-purchase v13)
   Oyun tarafı window.IAPBridge'i kullanır: price(id), buy(id), restore(), log().
   Mağazadan kendiliğinden gelen satın alımlar (uygulama kapanırken tamamlanan,
   geri yüklenen vb.) window.IAPGrant(anahtar) ile oyuna iletilir. */
(function(){
  var cap=window.Capacitor;
  if(!(cap&&cap.isNativePlatform&&cap.isNativePlatform()))return;
  var BASE='com.gulergamestudios.buyukyemin.';
  var PRODUCTS=[
    {key:'premium',id:BASE+'premium',type:'NON_CONSUMABLE'},
    {key:'story',id:BASE+'hikaye',type:'NON_CONSUMABLE'},
    {key:'goldL',id:BASE+'altin_buyuk',type:'CONSUMABLE'},
    {key:'goldS',id:BASE+'altin_kucuk',type:'CONSUMABLE'},
    {key:'terfi',id:BASE+'terfi',type:'CONSUMABLE'}
  ];
  var keyOf=function(id){for(var i=0;i<PRODUCTS.length;i++)if(PRODUCTS[i].id===id)return PRODUCTS[i].key;return null};
  var store=null,C=null,started=false,pending={};
  /* aynı işlemi iki kez vermemek için işlem kimliği defteri */
  var seen={};try{seen=JSON.parse(localStorage.getItem('by_tx')||'{}')}catch(e){}
  function mark(tx){if(!tx)return;seen[tx]=1;try{localStorage.setItem('by_tx',JSON.stringify(seen))}catch(e){}}

  function init(){
    if(started)return;C=window.CdvPurchase;if(!C||!C.store)return;started=true;store=C.store;
    var plat=cap.getPlatform()==='ios'?C.Platform.APPLE_APPSTORE:C.Platform.GOOGLE_PLAY;
    store.verbosity=C.LogLevel.WARNING;
    store.register(PRODUCTS.map(function(p){return{id:p.id,type:C.ProductType[p.type],platform:plat}}));
    store.when()
      .approved(function(t){t.verify()})
      .verified(function(r){r.finish()})
      .finished(function(t){
        var tx=t.transactionId;
        (t.products||[]).forEach(function(pr){
          var id=pr.id,k=keyOf(id);if(!k)return;
          if(pending[id]){var res=pending[id];delete pending[id];mark(tx);res({ok:true});return}
          if(tx&&seen[tx])return;mark(tx);
          try{window.IAPGrant&&window.IAPGrant(k)}catch(e){}
        });
      });
    store.error(function(e){/* sessizce geç; buy() kendi hatasını döndürür */});
    store.initialize([plat]).catch(function(){});
  }
  document.addEventListener('deviceready',init,false);
  var tries=0;(function poll(){init();if(!started&&tries++<40)setTimeout(poll,500)})();

  window.IAPBridge={
    price:function(id){try{var p=store&&store.get(id);return p&&p.pricing&&p.pricing.price||null}catch(e){return null}},
    buy:function(id){
      return new Promise(function(res){
        if(!store)return res({ok:false,msg:'Mağaza henüz hazır değil. Birkaç saniye sonra tekrar dene.'});
        var p=store.get(id);
        if(!p)return res({ok:false,msg:'Bu ürün şu an mağazada bulunamadı. Daha sonra tekrar dene.'});
        var o=p.getOffer();
        if(!o)return res({ok:false,msg:'Bu ürün şu an satın alınamıyor.'});
        pending[id]=res;
        o.order().then(function(err){
          if(err){delete pending[id];
            if(err.code===C.ErrorCode.PAYMENT_CANCELLED)res({cancelled:true});
            else res({ok:false,msg:'Satın alma tamamlanamadı. Hesabından ücret alınmadı.'});}
        }).catch(function(){delete pending[id];res({ok:false,msg:'Satın alma tamamlanamadı. Hesabından ücret alınmadı.'})});
        /* onay çok uzun sürerse (ör. aile onayı bekleniyor) oyuncuyu bekletme */
        setTimeout(function(){if(pending[id]){delete pending[id];res({ok:false,msg:'Satın alma onay bekliyor. Onaylandığında ürün otomatik olarak hesabına eklenecek.'})}},180000);
      });
    },
    restore:function(){
      if(!store)return Promise.reject();
      return store.restorePurchases().then(function(){
        return PRODUCTS.filter(function(p){return p.type==='NON_CONSUMABLE'&&store.owned(p.id)}).map(function(p){return p.id});
      });
    },
    log:function(){}
  };
})();
