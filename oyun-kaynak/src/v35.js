/* v35 · Firebase Analytics olayları (uygulamada window.FBLog, fb.js). Tarayıcıda sessizce geçer. */
function fl35(ev,v){try{window.FBLog&&window.FBLog(ev,v==null?'':String(v))}catch(e){}}
{const _ts=taleStart32;taleStart32=function(id,fresh){if(fresh)fl35('story_start',id);return _ts.apply(this,arguments)}}
{const _ng=newGame;newGame=function(){const r=_ng.apply(this,arguments);try{fl35('career_start',(S&&S.rank!=null)?S.rank:'')}catch(e){}return r}}
{const _ed=endDay;endDay=function(){const d0=S&&S.day;const r=_ed.apply(this,arguments);try{if(S&&S.day!==d0&&S.day%10===0)fl35('career_day',S.day)}catch(e){}return r}}
