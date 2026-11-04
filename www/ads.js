/* Büyük Yemin · AdMob köprüsü
   Oyun window.AdBridge'i bulursa gerçek reklam gösterir; bulamazsa test ekranı açar.
   1) TEST = true iken Google'ın test reklamları gösterilir. Mağazaya göndermeden önce
      false yap ve aşağıdaki kimlikleri kendi AdMob reklam birimlerinle değiştir.
   2) Kendi reklamlarına asla tıklama; hesabın kapatılabilir. Kendi telefonunda test reklamı kullan. */
(function(){
  var TEST = true;
  var IDS = {
    /* Android uygulama kimliği: ca-app-pub-4370898434583301~4996418525 (AndroidManifest.xml'de) */
    android: { inter: 'ca-app-pub-4370898434583301/7462799760', rewarded: 'ca-app-pub-4370898434583301/5994851605' },  /* Büyük Yemin Android */
    ios:     { inter: 'ca-app-pub-4370898434583301/3808049262', rewarded: 'ca-app-pub-4370898434583301/6657573885' }  /* Büyük Yemin iOS */
  };

  function cap(){ return window.Capacitor; }
  function native(){ var c = cap(); return !!(c && c.isNativePlatform && c.isNativePlatform()); }
  if (!native()) return; /* tarayıcıda: oyun test ekranını kullanır */

  var C = cap();
  var AdMob = (C.Plugins && C.Plugins.AdMob) || C.registerPlugin('AdMob');
  var plat = C.getPlatform() === 'ios' ? 'ios' : 'android';
  var ids = IDS[plat];
  var ready = { inter: false, rewarded: false };

  function loadInter(){ return AdMob.prepareInterstitial({ adId: ids.inter, isTesting: TEST }).then(function(){ ready.inter = true; }).catch(function(){ ready.inter = false; }); }
  function loadRewarded(){ return AdMob.prepareRewardVideoAd({ adId: ids.rewarded, isTesting: TEST }).then(function(){ ready.rewarded = true; }).catch(function(){ ready.rewarded = false; }); }

  async function init(){
    try {
      await AdMob.initialize({ initializeForTesting: TEST });
      /* Avrupa için izin formu (GDPR / UMP) */
      try {
        var ci = await AdMob.requestConsentInfo();
        if (ci.isConsentFormAvailable && ci.status === 'REQUIRED') await AdMob.showConsentForm();
      } catch (e) {}
      /* iOS takip izni (ATT) */
      if (plat === 'ios') {
        try {
          var t = await AdMob.trackingAuthorizationStatus();
          if (t.status === 'notDetermined') await AdMob.requestTrackingAuthorization();
        } catch (e) {}
      }
      loadInter(); loadRewarded();
    } catch (e) { console.log('AdMob başlatılamadı', e); }
  }

  function once(evt){ return new Promise(function(res){ var h; AdMob.addListener(evt, function(info){ if (h) h.remove(); res(info); }).then(function(x){ h = x; }); }); }

  window.AdBridge = {
    showRewarded: async function(){
      if (!ready.rewarded) { await loadRewarded(); if (!ready.rewarded) return false; }
      var got = false;
      var rh = await AdMob.addListener('onRewardedVideoAdReward', function(){ got = true; });
      try {
        ready.rewarded = false;
        var end = Promise.race([ once('onRewardedVideoAdDismissed'), once('onRewardedVideoAdFailedToShow') ]);
        await AdMob.showRewardVideoAd();
        await end;
      } catch (e) {}
      rh.remove(); loadRewarded();
      return got;
    },
    showInterstitial: async function(){
      if (!ready.inter) { loadInter(); return; } /* hazır değilse bu sefer atla, oyuncuyu bekletme */
      try {
        ready.inter = false;
        var end = Promise.race([ once('interstitialAdDismissed'), once('interstitialAdFailedToShow') ]);
        await AdMob.showInterstitial();
        await end;
      } catch (e) {}
      loadInter();
    }
  };

  document.addEventListener('deviceready', init); /* bazı sürümlerde */
  if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
