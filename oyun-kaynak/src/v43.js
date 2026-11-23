/* ===== v43 · Türkiye rütbe adları seçilen dilde (1.1.2) =====
   Diğer ülkeler kendi yerel rütbe adlarını korur; Türkiye'nin rütbeleri Türkçe dışındaki dillerde karşılığıyla gösterilir. */
(function(){
 const L={
 land:{en:'Private|Corporal|Sergeant|Staff Sergeant|Sergeant First Class|Master Sergeant|First Sergeant|Sergeant Major|Second Lieutenant|First Lieutenant|Captain|Major|Lieutenant Colonel|Colonel|Brigadier General|Major General|Lieutenant General|General|Marshal',
  ja:'二等兵|伍長|軍曹|一等軍曹|曹長|上級曹長|先任曹長|最先任曹長|少尉|中尉|大尉|少佐|中佐|大佐|准将|少将|中将|大将|元帥',
  es:'Soldado|Cabo|Sargento|Sargento primero|Sargento mayor|Brigada|Subteniente|Suboficial mayor|Alférez|Teniente|Capitán|Comandante|Teniente coronel|Coronel|General de brigada|General de división|Teniente general|General de ejército|Mariscal',
  fr:'Soldat|Caporal|Sergent|Sergent-chef|Adjudant|Adjudant-chef|Major|Major principal|Sous-lieutenant|Lieutenant|Capitaine|Commandant|Lieutenant-colonel|Colonel|Général de brigade|Général de division|Général de corps d\'armée|Général d\'armée|Maréchal',
  de:'Soldat|Gefreiter|Unteroffizier|Stabsunteroffizier|Feldwebel|Oberfeldwebel|Hauptfeldwebel|Stabsfeldwebel|Leutnant|Oberleutnant|Hauptmann|Major|Oberstleutnant|Oberst|Brigadegeneral|Generalmajor|Generalleutnant|General|Marschall'},
 navy:{en:'Seaman|Leading Seaman|Petty Officer|Petty Officer Second Class|Petty Officer First Class|Chief Petty Officer|Senior Chief Petty Officer|Master Chief Petty Officer|Ensign|Lieutenant (junior grade)|Lieutenant|Lieutenant Commander|Commander|Captain|Rear Admiral (lower half)|Rear Admiral|Vice Admiral|Admiral|Fleet Admiral',
  ja:'二等水兵|水兵長|三等兵曹|二等兵曹|一等兵曹|上等兵曹|先任上等兵曹|最先任上等兵曹|少尉|中尉|大尉|少佐|中佐|大佐|准将|少将|中将|大将|元帥',
  es:'Marinero|Cabo|Sargento|Sargento primero|Brigada|Subteniente|Suboficial mayor|Suboficial mayor primero|Alférez de fragata|Alférez de navío|Teniente de navío|Capitán de corbeta|Capitán de fragata|Capitán de navío|Contraalmirante|Vicealmirante segundo|Vicealmirante|Almirante|Almirante general',
  fr:'Matelot|Quartier-maître|Second maître|Maître|Premier maître|Maître principal|Major|Major principal|Enseigne de vaisseau|Enseigne de 1re classe|Lieutenant de vaisseau|Capitaine de corvette|Capitaine de frégate|Capitaine de vaisseau|Contre-amiral|Vice-amiral|Vice-amiral d\'escadre|Amiral|Amiral de la flotte',
  de:'Matrose|Gefreiter|Maat|Obermaat|Bootsmann|Oberbootsmann|Hauptbootsmann|Stabsbootsmann|Leutnant zur See|Oberleutnant zur See|Kapitänleutnant|Korvettenkapitän|Fregattenkapitän|Kapitän zur See|Flottillenadmiral|Konteradmiral|Vizeadmiral|Admiral|Großadmiral'}};
 const ORIG={};for(const k in RS.TR)ORIG[k]=RS.TR[k].slice();
 const ORIGN=(typeof RANKS!=='undefined')?RANKS.map(r=>r.tr_n):[];
 window.rankApply43=function(){const lg=typeof LANG!=='undefined'?LANG:'tr';for(const k in RS.TR){const src=(lg!=='tr'&&L[k]&&L[k][lg])?L[k][lg].split('|'):ORIG[k];if(src.length!==ORIG[k].length)continue;for(let i=0;i<src.length;i++)RS.TR[k][i]=src[i]}
  try{if(ORIGN.length){const src=(lg!=='tr'&&L.land[lg])?L.land[lg].split('|'):ORIGN;RANKS.forEach((r,i)=>{if(src[i])r.tr_n=src[i]})}}catch(e){}
  try{if(typeof i18Native==='function')i18Native.S=null}catch(e){}};
 rankApply43();
 const _sl=setLang;setLang=function(v){rankApply43.call(null);const r=_sl.apply(this,arguments);rankApply43();try{render()}catch(e){}return r};
})();
