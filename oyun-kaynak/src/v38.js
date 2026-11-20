/* =====================================================================
   v38 · Çeviri tamamlama: değişkenli kalıplar
   Satır biçimi v26 ile aynı: tr|en|ja|es|fr|de
   Türkçe sütunda {} = herhangi bir metin (isim, ülke, rütbe…), # = sayı.
   Diğer sütunlarda yer tutucular sırayla $1, $2… olarak yazılır.
   {} ile yakalanan metin de ayrıca çevrilmeye çalışılır (ör. "Bugün: {}").
   Yer tutucusu olmayan satırlar doğrudan I18N sözlüğüne eklenir.
   ===================================================================== */
const I18T={};            /* ilk harfe göre kalıp kovaları */
const I18T_ANY=[];        /* yer tutucuyla başlayan kalıplar */
const I18C={};            /* dil başına önbellek */
function i18Native(v){if(!i18Native.S){const S=new Set();try{for(const n in RS)for(const k in RS[n]){const a=RS[n][k];if(Array.isArray(a))a.forEach(x=>{S.add(x);S.add(x.replace(/ \(.*\)$/,''))})}}catch(e){}i18Native.S=S}return i18Native.S.has(v)}
function i18Esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function i18Add(src){src.trim().split('\n').forEach(l=>{if(!l.trim())return;const c=l.split('|');if(c.length!==6)return;
 const k=c[0];if(!/\{\}|#/.test(k)){if(!I18N[k])I18N[k]=c;return}
 const kinds=[];const re=new RegExp('^'+k.split(/(\{\}|#)/).map(p=>{if(p==='{}'){kinds.push('t');return '(.*?)'}if(p==='#'){kinds.push('n');return '([+\\-−]?\\d[\\d.,]*)'}return i18Esc(p)}).join('')+'$');
 const e={re,kinds,L:c.slice(1),w:k.replace(/\{\}|#/g,'').length};const h=k[0];I18T_SORTED=false;
 if(h==='{'||h==='#')I18T_ANY.push(e);else(I18T[h]=I18T[h]||[]).push(e)})}
let I18T_SORTED=false,I18UP=null;
/* daha çok sabit metin içeren kalıp önce denenir */
function i18Sort(){const f=(a,b)=>b.w-a.w;for(const h in I18T)I18T[h].sort(f);I18T_ANY.sort(f);I18T_SORTED=true}
/* BÜYÜK HARFLE yazılmış metinler: sözlükteki karşılığını bul, çeviriyi de büyük harfle ver */
function i18Upper(c,li){if(!/[A-ZÇĞİÖŞÜ]/.test(c)||(c!==c.toLocaleUpperCase('tr')&&c!==c.toUpperCase()))return null;
 if(!I18UP){I18UP={};for(const k in I18N){const u=k.toLocaleUpperCase('tr');if(u!==k&&!I18UP[u])I18UP[u]=k;const u2=k.toUpperCase();if(u2!==k&&!I18UP[u2])I18UP[u2]=k}}
 const k=I18UP[c];if(!k)return null;const t=tr1(k,li);return t==null?null:t.toLocaleUpperCase(['tr','en','ja','es','fr','de'][li])}
function i18Tpl(c,li){if(!I18T_SORTED)i18Sort();const B=I18T[c[0]];const lists=B?[B,I18T_ANY]:[I18T_ANY];
 for(const L of lists)for(const e of L){const m=c.match(e.re);if(!m)continue;let bad=false;
  const out=e.L[li-1].replace(/\$(\d+)/g,(_,n)=>{let v=m[+n];if(v==null)return '';if(e.kinds[n-1]==='t'&&v){if(v.includes('·')||/^\s*[0-9IVX]+\.\s*$/.test(v)){bad=true;return v}const sx=v.match(/^([^'’]+)['’][a-zçğıöşü]{1,5}$/);if(sx)v=sx[1];else v=v.replace(/ (bölgesi|sınır bölgesi)n(de|den|e|i|in)$/,' $1');const t=tr1(v.trim(),li);if(t!=null)return v.replace(v.trim(),t);if(v.includes('–')&&!v.includes(' ')||/^[^ ]+–[^ ]+$/.test(v.trim())){const ps=v.trim().split('–');const tp=ps.map(x=>{const y=tr1(x,li);return y==null?x:y});if(tp.some((y,i)=>y!==ps[i]))return v.replace(v.trim(),tp.join('–'))}if(v.includes(', ')){const ps=v.split(', ');const tp=ps.map(x=>{const y=tr1(x.trim(),li);return y==null?x:y});if(tp.some((y,i)=>y!==ps[i]))return tp.join(li===2?'、':', ')}if(!i18Native(v.trim())&&(/(^|\s)[a-zâî]*[çğıöşü][a-zçğıöşüâî]*/.test(v)||/(^|\s)(ve|ile|bir|için|olarak|kadar|sonra|önce|daha|gibi|her|yeni|eski|büyük|küçük|tabur|alay|birlik|tugay|komutan|subay|asker|harekât|görev|bölge|bölgesi|başla|merkez|karargâh|hava|deniz|kara|yardım|destek|eğitim|kalem|ordu|kuvvet|kuvvetleri)(?=\s|$|[.,;:])/.test(v)))bad=true}return v});if(!bad)return li===1?out.replace(/\b([Tt]he) the\b/g,'$1'):out}
 return null}
function i18Wrap(c,li){const m=c.match(/^(["“])([\s\S]+)(["”])$/);if(m&&!/["“”]/.test(m[2])){const t=tr1(m[2],li);if(t==null)return null;const Q=[['"','"'],['“','”'],['「','」'],['“','”'],['« ',' »'],['„','“']][li];return Q[0]+t+Q[1]}
 if(c.includes(' → ')){const ps=c.split(' → ');const tp=ps.map(x=>{const y=tr1(x,li);return y==null?x:y});if(tp.some((y,i)=>y!==ps[i]))return tp.join(' → ')}return null}
function i18Low(c,li){const f=c.charAt(0);if(!f||f===f.toLocaleUpperCase('tr')||f===f.toLocaleLowerCase('tr')&&f.toLocaleUpperCase('tr')===f)return null;const u=f.toLocaleUpperCase('tr')+c.slice(1);const r=tr1(u,li);if(r==null||r===u)return null;return li===2||li===5?r:r.charAt(0).toLowerCase()+r.slice(1)}
{const _tr1=tr1;tr1=function(c,li){const C=I18C[li]||(I18C[li]=new Map());if(C.has(c))return C.get(c);
 C.set(c,null);/* özyineleme koruması */
 let r=null;const d=I18N[c];if(d)r=d[li];else{if(c.includes(' → '))r=i18Wrap(c,li);if(r==null)r=i18Tpl(c,li);if(r==null)r=_tr1(c,li);if(r==null)r=i18Upper(c,li);if(r==null)r=i18Low(c,li);if(r==null)r=i18Wrap(c,li)}
 if(C.size>20000)C.clear();C.set(c,r);return r}}
