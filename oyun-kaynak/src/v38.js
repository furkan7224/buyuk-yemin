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
function i18Upper(c,li){if(!/[A-ZÇĞİÖŞÜ]/.test(c)||c!==c.toLocaleUpperCase('tr'))return null;
 if(!I18UP){I18UP={};for(const k in I18N){const u=k.toLocaleUpperCase('tr');if(u!==k&&!I18UP[u])I18UP[u]=k}}
 const k=I18UP[c];if(!k)return null;const t=tr1(k,li);return t==null?null:t.toLocaleUpperCase(['tr','en','ja','es','fr','de'][li])}
function i18Tpl(c,li){if(!I18T_SORTED)i18Sort();const B=I18T[c[0]];const lists=B?[B,I18T_ANY]:[I18T_ANY];
 for(const L of lists)for(const e of L){const m=c.match(e.re);if(!m)continue;
  return e.L[li-1].replace(/\$(\d+)/g,(_,n)=>{const v=m[+n];if(v==null)return '';if(e.kinds[n-1]==='t'&&v){const t=tr1(v.trim(),li);if(t!=null)return v.replace(v.trim(),t)}return v})}
 return null}
{const _tr1=tr1;tr1=function(c,li){const C=I18C[li]||(I18C[li]=new Map());if(C.has(c))return C.get(c);
 C.set(c,null);/* özyineleme koruması */
 let r=null;const d=I18N[c];if(d)r=d[li];else{r=i18Tpl(c,li);if(r==null)r=_tr1(c,li);if(r==null)r=i18Upper(c,li)}
 if(C.size>20000)C.clear();C.set(c,r);return r}}
