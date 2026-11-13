/* =====================================================================
   HİKÂYE · KÖSTEBEK · İngilizce sürüm
   Kural ve kayıt yapısı Türkçe dosyayla birebir aynıdır (newRun oradan gelir),
   böylece dil değişse de devam eden soruşturma bozulmaz.
   ===================================================================== */
(function(){
const KB=window.__KB;if(!KB)return;
const DAYS=10,AP=3,LEAK=[3,6,9],DROP=[4,8];
const HAND={sağlak:'right-handed',solak:'left-handed'};
const SU={
 kaya:{n:'Captain Can Kaya',k:'Kaya',r:'Operations officer',c:'#c9a64a',hand:'sağlak',smoke:1,
  bio:'Your classmate from the academy and your closest friend for years. Rumor has it he\'s been drowning in debt lately.',
  duty:'I was duty officer on two of those nights. At two I did my rounds of the HQ, then worked on plans in the briefing room.',
  sleep:'I went to bed early that night. We\'d been on the plans all day; I could barely stand.',
  early:'Early in the morning I went down to town; I had business at the bank.',
  secret:'You follow Kaya to a teahouse in the back streets of town. A heavyset man sits at the table; Kaya hands him an envelope, the man counts the money and leaves. A loan shark. Kaya sits with his head in his hands for a long time.\n\nYour friend is drowning in debt, but that isn\'t treason.',
  press:'Kaya laughs at first, then the laugh freezes on his face.\n\n— You suspect me? Fifteen years… We stood watch together for fifteen years.',
  pressX:'Kaya is silent for a while, then tells you everything: gambling debts, the loan shark, months of interest payments.\n\n— I was too ashamed to tell anyone. But I swear, I didn\'t sell out my country.'},
 aras:{n:'Major Levent Aras',k:'Aras',r:'Operations planning branch',c:'#b8453a',hand:'solak',smoke:0,
  bio:'Harsh, ambitious and by-the-book. His name is on the promotion list; people say he\'d do anything for it.',
  duty:'After midnight I was in the operations center, finishing the report the colonel asked for.',
  sleep:'Lights out at eleven. I\'m a disciplined man, Major.',
  early:'I go running at six every morning. Check the gate log.',
  secret:'At midnight Aras leaves the HQ and goes to the restaurant of the hotel in town. A staff colonel from division HQ sits at the table. Aras gives him an expensive watch; from their talk, it\'s clear they\'re discussing the promotion list.\n\nUnbecoming and against the rules. But not espionage.',
  press:'Aras looks at you without blinking.\n\n— You have every right to investigate me. But put a single stain on my record, and I\'ll make you answer for it.',
  pressX:'Aras clenches his jaw, then briefly admits it: he met the staff colonel, looking for an inside track to promotion.\n\n— That\'s a disciplinary matter, Major. Not treason.'},
 deniz:{n:'Sergeant Deniz Yılmaz',k:'Deniz',r:'Signals sergeant',c:'#70a3c4',hand:'sağlak',smoke:1,
  bio:'All radio traffic passes through his hands. On night shifts he\'s usually alone in the signals room.',
  duty:'The night shift was mine. I was at the radio in the signals room until morning.',
  sleep:'I wasn\'t on shift that night; I was asleep in the barracks.',
  early:'Early in the morning I went to the post office in town. My mother had sent a package.',
  secret:'At one in the morning Deniz sneaks out of the barracks to the pay phone by the main gate. He talks quietly for half an hour, laughing now and then. After hanging up, he looks at a photograph: his fiancée.\n\nA forbidden late-night call. It calls for a disciplinary penalty, but it isn\'t espionage.',
  press:'Deniz swallows; his eyes slide to the door.\n\n— Sir, I\'m only responsible for the radios. I reported everything I heard.',
  pressX:'Deniz turns red and confesses: he\'s been secretly calling his fiancée at night.\n\n— I\'ll take whatever punishment there is, sir. But I\'m not a traitor.'},
 leyla:{n:'Interpreter Leyla Saran',k:'Leyla',r:'Civilian interpreter',c:'#a78bfa',hand:'solak',smoke:1,
  bio:'Speaks the enemy\'s language like a native. Part of her family still lives on the other side of the border.',
  duty:'I was translating intercepted radio traffic until late. I finished around two-thirty.',
  sleep:'I was asleep. Interpreters don\'t work nights, Major; at least I didn\'t that night.',
  early:'In the morning I went down to the market in town. I go once a month.',
  secret:'At night Leyla steps into the back garden of the officers\' quarters and calls across the border on a hidden mobile phone. The call is short and broken; at the end she cries. It\'s clear she\'s talking to her sick mother.\n\nA forbidden line. But what you heard was a daughter missing her mother, not an agent\'s report.',
  press:'Leyla folds her arms.\n\n— Because my family is across the border, I\'m the first suspect, right? I\'m used to it, Major.',
  pressX:'Leyla puts the hidden phone on the table.\n\n— My mother is ill. I call her. That\'s all. Listen to every call if you like.'},
 emre:{n:'Lieutenant Emre Tunç',k:'Emre',r:'Logistics officer',c:'#7fb35a',hand:'sağlak',smoke:0,
  bio:'Quiet, polite, flawless at his job. Perhaps a little too flawless. No one has a bad word to say about him.',
  duty:'There was a night inventory at the depot. I was checking the ammunition lists.',
  sleep:'I went to bed at eleven. There was a shipment the next day; I needed rest.',
  early:'Early in the morning I went out to meet the supply convoy; my signature is on the shipping papers.',
  secret:'At two in the morning Emre leaves his quarters and goes to the gym, where he punches the bag for an hour. Then he sits on a bench and looks at his phone: old messages from his father in hospital.\n\nA sleepless, lonely man in pain. But no sign of treason.',
  press:'Emre is calm, almost too calm.\n\n— I understand your questions, sir. I have nothing to hide. I\'ll answer whatever you ask.',
  pressX:'For the first time Emre\'s voice trembles: his father is in hospital, and he can\'t sleep at night.\n\n— I didn\'t want anyone to know, sir. I didn\'t want to look weak.'},
 tekin:{n:'Colonel Nihat Tekin',k:'Tekin',r:'HQ commander',c:'#e39540',hand:'solak',smoke:1,
  bio:'Your commander. Every operational plan crosses his desk. Questioning him could cost you your career.',
  duty:'I am the commander of this headquarters, Major; I\'m on duty day and night. That night I was in the operations center.',
  sleep:'I was in my room. It takes courage to question where a colonel was at night.',
  early:'In the morning I went to division HQ for a meeting.',
  secret:'At night the colonel goes down to town in civilian clothes and enters a doctor\'s office behind the all-night pharmacy. He comes out carrying boxes of medicine. The next day you learn the truth: he has a serious illness and is hiding it from everyone so he won\'t be retired.\n\nA secret, but not the secret of a man who betrayed his country.',
  press:'Colonel Tekin leans back in his chair.\n\n— So you\'ve put me on your list too. Brave of you, Major. I hope you\'re right; otherwise you may find it hard to leave this room.',
  pressX:'The colonel stares out of the window for a long time, then tells you about his illness.\n\n— I\'ve worn this uniform for thirty years. I want to wear it until my last day. Is that a crime?'}
};
const IDS=Object.keys(SU);
const nm=id=>SU[id].n,kn=id=>SU[id].k,pos=w=>w+(/s$/.test(w)?'\'':'\'s');
const list=a=>a.map(nm).join(', ').replace(/, ([^,]*)$/,' and $1');
const CLUES=['telsiz','nobet','defter','not','izmarit','banka'];
const CN={telsiz:'Radio logs',nobet:'Duty roster',defter:'Gate log',not:'Burned note',izmarit:'Meeting point',banka:'Bank statements'};
function str(R,x){if(R.cleared[x])return {s:-1,tags:[['Cleared','o']]};let s=0;const tags=[];
 for(const c of CLUES)if(R.got[c]&&R.sets[c].includes(x)){if(c==='banka'&&R.expl[x]){tags.push(['Bank: explained','o']);continue}s++;tags.push([CN[c],'c'])}
 if(R.contra[x]){const n=Object.keys(R.contra[x]).length;s+=2*n;tags.push([n>1?'2 contradictions':'Contradiction','r'])}
 if(R.nervous[x]){s+=1;tags.push(['Nervous','r'])}
 if(R.tail[x]==='witness'){s+=3;tags.push(['Seen with courier','r'])}
 if(R.trap&&R.trap.res==='hit'&&R.trap.hit===x){s+=3;tags.push(['Trap: leaked','r'])}
 if(R.tail[x]==='secret')tags.push(['Secret revealed','o']);
 return {s,tags}}
const C_N=x=>`${nm(x)} said they were asleep on those nights. But according to the duty roster, on all three leak nights they were awake in the HQ between 02:00 and 03:00.`;
const C_D=x=>`${nm(x)} said they never left the barracks in the mornings. But according to the gate log, they went out through the main gate at 05:40 on the mornings after the leaks.`;
function contraCheck(R){let nw=[];const L=R.liar;
 const AK=x=>R.alibiK&&R.alibiK[x]?R.alibiK[x]:{s:false,k:false};
 if(L&&R.iv[L]&&!R.liarOk&&R.alibi&&R.alibi[L]&&AK(L).s){R.contra[L]=R.contra[L]||{};
  if(R.got.nobet&&R.sets.nobet.includes(L)&&!R.contra[L].nobet){R.contra[L].nobet=1;nw.push(C_N(L))}
  if(R.got.defter&&R.sets.defter.includes(L)&&!R.contra[L].defter&&AK(L).k){R.contra[L].defter=1;nw.push(C_D(L))}
  if(!Object.keys(R.contra[L]).length)delete R.contra[L]}
 const m=R.mole;if(!R.iv[m])return nw;R.contra[m]=R.contra[m]||{};
 if(R.got.nobet&&!R.contra[m].nobet){R.contra[m].nobet=1;nw.push(C_N(m))}
 if(R.got.defter&&!R.contra[m].defter){R.contra[m].defter=1;nw.push(C_D(m))}
 if(!Object.keys(R.contra[m]).length)delete R.contra[m];return nw}
const BRIEF=[
 {ti:'Behind closed doors',b:`Brigadier General Sevim Ateş, head of General Staff Intelligence, locks her office door before she begins:

— Our last three operations were ambushed, Major. In all three, the enemy knew the plan before we did. We lost twenty-three soldiers.

She puts three files on the table. Each cover bears a red stamp: TOP SECRET.

— The information is leaking from Eastern HQ. Someone on the inside.`},
 {ti:'The assignment',b:`— I'm sending you there on a new posting, under cover of a "personnel audit". No one will know your real assignment, not even the commander.

The general turns to the window.

— You have ten days. As long as the leak continues, our soldiers keep dying. Accuse the wrong person and you'll ruin an innocent life, and the real traitor slips away.

— Understood, ma'am.

— One more thing, Major. Trust no one.`},
 {ti:'Six names',b:`Six people at Eastern HQ have access to the plans. The mole is one of them.

Each day you have three actions: you can *take a statement*, *gather evidence*, or *tail* someone at night. From day five you can *set a trap* with false information, and when you're ready, you can *accuse* someone.

Catch the contradictions, connect the clues. The evidence board will show you where suspicion is building.

But be careful: if the mole notices, they'll start covering their tracks.`}];
function morning(R){const d=R.day,N=[];
 if(d===1)N.push('You\'ve arrived at Eastern HQ on a "personnel audit" posting. Colonel Tekin greeted you with a cold handshake. They gave you a room, a desk and a key.');
 if(d===2)N.push('At breakfast Captain Kaya sat down next to you: "Great to see you here. Let\'s have tea tonight, like the old days." There are dark circles under his eyes.');
 if(d===5)N.push('A shepherd from town said that in recent weeks someone has been waiting at night by the old fountain on the border road. That could be the meeting point.');
 if(d===10)N.push('The last day. If you don\'t accuse the mole by sunset, the general will close the investigation and the leak will go on.');
 return N.concat(R.notes)}
function nightEvents(R){const d=R.day,m=R.mole,ev=[];
 if(LEAK.includes(d)){if(R.trap&&R.trap.res==null&&R.trap.day<=d){const T=R.trap;if(T.a===m||T.b===m){T.res='hit';T.hit=m;ev.push(`Tonight the enemy acted on the false information about the ${T.hit===T.a?'north valley':'south bridge'}. Only **${nm(m)}** knew that.`)}else{T.res='clear';R.cleared[T.a]=1;R.cleared[T.b]=1;ev.push(`Tonight the enemy acted on neither of the two false leads in your trap. **${nm(T.a)}** and **${nm(T.b)}** are cleared.`)}}
  const k=2+Math.floor(Math.random()*4);R.kia+=k;ev.push(`The leak continues: tonight one of our reconnaissance units was ambushed. **${k} killed.** Total losses: ${23+R.kia}.`)}
 if(R.alert>=2&&!R.destroyed._done){R.destroyed._done=1;const c=['banka','izmarit','not'].find(x=>!R.got[x]);if(c){R.destroyed[c]=1;ev.push(`The mole is on alert. ${c==='banka'?'Access to the bank records has been shut off, citing a "technical fault".':c==='izmarit'?'The area around the old fountain was cleaned up overnight; not a trace is left.':'The ashes of the HQ stove were emptied overnight; the burned note is gone.'}`)}}
 if(R.alert>=3&&!R.destroyed._comp){R.destroyed._comp=1;R.apPenalty=1;ev.push('An anonymous complaint has been filed against you: "The auditor is harassing personnel." Tomorrow morning you must explain yourself to Colonel Tekin; you\'ll lose one action.')}
 return ev}
function act(R,v){const [a,b,c]=String(v).split(':');
 if(a==='bn'){R.bi++;if(R.bi>=BRIEF.length){R.phase='day';R.bi=0}return}
 if(a==='menu'){R.menu=b||null;return}
 if(a==='ok'){R.res=null;if(R.ap<=0&&R.phase==='day')endDay(R);return}
 if(a==='night'){endDay(R);return}
 if(a==='morning'){R.phase='day';R.notes=[];return}
 if(a==='iv'){if(R.ap<=0||R.ivDay[b]===R.day)return;R.ap--;R.ivDay[b]=R.day;R.iv[b]=(R.iv[b]||0)+1;R.menu=null;
  const first=R.iv[b]===1;let body;
  const BAR=' And in the mornings I stayed in the barracks; I didn\'t go anywhere.';
  if(first){const inN=R.sets.nobet.includes(b),inD=R.sets.defter.includes(b);
   const say=b===R.mole?SU[b].sleep+BAR:b===R.liar&&!R.tail[b]?SU[b].sleep+(inD?BAR:''):(inN?SU[b].duty:SU[b].sleep)+(inD?' '+SU[b].early:'');
   body=`${nm(b)} sits down across from you. You ask where they were on the leak nights.\n\n— ${say}`;
   R.alibi=R.alibi||{};R.alibi[b]=say;R.alibiK=R.alibiK||{};R.alibiK[b]={s:say.indexOf(SU[b].sleep)===0,k:say.indexOf(BAR)>=0}}
  else{if(b===R.mole){R.alert++;R.nervous[b]=1;body=SU[b].press+`\n\nAs they talk, their fingers keep drumming on the edge of the table. They may be hiding something.`}
   else if(b===R.liar&&R.contra[b]){body=SU[b].pressX+`\n\nSo that was the reason for the inconsistency in the statement. That's why ${kn(b)} hid where they were that night.`;delete R.contra[b];R.liarOk=1;if(b===R.herring)R.expl[b]=1}
   else if(R.tail[b]==='secret'||(b===R.herring&&R.got.banka)){body=SU[b].pressX;if(b===R.herring)R.expl[b]=1}
   else body=SU[b].press}
  const nw=contraCheck(R)||[];R.res={ti:'Statement · '+kn(b),b:body+(nw.length?'\n\n'+nw.map(x=>'CONTRADICTION: '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='cl'){if(R.ap<=0||R.got[b]||R.destroyed[b])return;if(b==='banka'&&R.day<3)return;if(b==='izmarit'&&R.day<5&&!R.dropSeen)return;R.ap--;R.got[b]=1;R.menu=null;
  const S=R.sets[b];let body='';const noticed=Math.random()<.12;if(noticed)R.alert++;
  if(b==='telsiz')body=`You examine the recorders in the signals room. On each leak night, every time around 02:10, there were forty-second encrypted transmissions. They didn't come from outside, but from the backup radio in the signals room.\n\nOnly three people have a key to that room: ${list(S)}.`;
  if(b==='nobet')body=`You compare the duty rosters with the door-card records. On all three leak nights, three people were awake in the HQ building between 02:00 and 03:00: ${list(S)}.`;
  if(b==='defter')body=`You read the gate log page by page. On the mornings after the leaks, three names keep appearing, leaving the barracks before sunrise: ${list(S)}.`;
  if(b==='not')body=`One of the privates sifting the ashes of the HQ stove brings you a half-burned scrap of paper. A single line is legible: "Thursday. Fountain. 02." ${SU[R.mole].hand==='solak'?'The ink is smudged in places by the hand that moved across the line; the writer is left-handed':'The ink is clean, the letters slant to the right; the writer is right-handed'}.\n\nThe ${HAND[SU[R.mole].hand]} suspects: ${list(S)}.`;
  if(b==='izmarit')body=SU[R.mole].smoke?`At night you go to the old fountain and sweep the area with a flashlight. At the foot of the stone lies a handful of cigarette butts, all the same brand. Whoever waits here smokes.\n\nThe suspects who smoke: ${list(S)}.`:`At night you go to the old fountain and sweep the area with a flashlight. There are fresh footprints, but not a single cigarette butt. Whoever waits here for hours must not smoke.\n\nThe suspects who don't smoke: ${list(S)}.`;
  if(b==='banka'){const m=R.mole;const t=x=>x==='kaya'?(x===m?'Kaya\'s debts to the loan sharks were suddenly paid off, each time two days after a leak.':'Kaya\'s account shows regular payments to loan sharks; he is clearly drowning in debt.'):x==='leyla'?(x===m?'Alongside Leyla\'s small transfers across the border, a large cash deposit landed in her account after every leak.':'Leyla sends small transfers across the border every month.'):`Cash was deposited into ${pos(kn(x))} account three times, each two days after a leak.`;
   body=`With the prosecutor's approval you examine the suspects' bank statements for the last three months. Two accounts show unusual activity:\n\n${t(R.banka0=R.sets.banka[0])}\n\n${t(R.sets.banka[1])}`}
  if(noticed)body+='\n\nOn your way out you lock eyes with someone in the corridor. They may have realized what you were looking for.';
  const nw=contraCheck(R)||[];R.res={ti:CN[b],b:body+(nw.length?'\n\n'+nw.map(x=>'CONTRADICTION: '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='tail'){if(R.ap<=0||R.tailDay===R.day)return;R.ap--;R.tailDay=R.day;R.menu=null;let body;const m=R.mole;
  if(b===m){if(DROP.includes(R.day)){R.tail[b]='witness';R.dropSeen=1;body=`At half past one ${nm(b)} quietly slips out of the HQ. You follow at a distance. A shadow is waiting by the old fountain on the border road. ${kn(b)} hands over a folded envelope; the shadow tucks it inside a jacket and melts into the dark.\n\nYou saw it. This is no longer suspicion; it's an eyewitness account.`}
   else{const seen=Math.random()<.3;if(seen)R.alert++;body=`You watch ${nm(b)} all night. Early to bed, the light flicks on once, then silence.${seen?'\n\nBefore dawn the curtain in the room moves aside; someone looks out, right at where you\'re hiding. You may have been spotted.':'\n\nNothing happened tonight.'}`}}
  else{if(R.tail[b]!=='secret'){R.tail[b]='secret';body=SU[b].secret;if(b===R.herring)R.expl[b]=1;if(b===R.liar&&R.contra[b]){delete R.contra[b];R.liarOk=1;body+=`\n\nThat also explains the inconsistency in ${pos(kn(b))} statement.`}}else body=`You tail ${nm(b)} again, but nothing unusual happens tonight.`}
  R.res={ti:'Night tail · '+kn(b),b:body};return}
 if(a==='trap'){if(R.trap||R.day<5||R.day>9||R.ap<=0)return;if(b==='go'){const x=c.split(',');if(x.length!==2)return;R.ap--;R.trap={a:x[0],b:x[1],day:R.day,res:null};R.menu=null;R.tsel=[];
   R.res={ti:'Trap set',b:`You tell ${nm(x[0])} about a raid planned in the north valley, and ${nm(x[1])} about a convoy waiting at the south bridge. Both are false, and each was told to only one person.\n\nNow you wait. The next leak night will show which lead reached the enemy.`};return}
  R.tsel=R.tsel||[];const i=R.tsel.indexOf(b);if(i>=0)R.tsel.splice(i,1);else if(R.tsel.length<2)R.tsel.push(b);return}
 if(a==='acc'){R.menu='accuse';R.accSel=b;return}
 if(a==='accgo'){KB.confront(R,b);return}
 if(a==='fin'){R.end=b;return}}
function endDay(R){const ev=nightEvents(R);R.lastNight=ev;R.day++;R.res=null;R.menu=null;
 if(R.day>DAYS){R.end='kacti';R.endWhy='time';return}
 R.ap=AP-(R.apPenalty||0);R.apPenalty=0;R.phase='night'}
const av=(id,sz=40)=>`<span class="kav" style="--c:${SU[id].c};width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.38)}px">${SU[id].k.slice(0,1)}</span>`;
const md=s=>fmt32(String(s).replace(/\*\*([^*]+)\*\*/g,'⟦$1⟧')).replace(/⟦([^⟧]+)⟧/g,'<b>$1</b>').replace(/CONTRADICTION:|ÇELİŞKİ:/g,'<span class="kcontra">CONTRADICTION</span>');
function header(R){return `<div class="khead"><div><span class="lbl">Day</span><b class="num">${Math.min(R.day,DAYS)}<small>/${DAYS}</small></b></div>
 <div><span class="lbl">Actions</span><div class="kap">${Array.from({length:AP},(_,i)=>`<i class="${i<R.ap?'on':''}"></i>`).join('')}</div></div>
 <div><span class="lbl">Killed</span><b class="num red">${23+R.kia}</b></div></div>${R.alert>=2?'<div class="kwarn">The mole is on alert and has started covering their tracks.</div>':''}`}
function board(R){const rows=IDS.map(x=>({x,...(str(R,x)||{})}));const mx=Math.max(6,...rows.map(r=>r.s||0));
 return `<div class="card kboard"><div class="sec-h"><h2>Evidence board</h2></div>
 ${rows.map(r=>`<div class="krow${r.s<0?' clr':''}">${av(r.x,34)}<div class="grow"><div class="kn"><b>${esc(SU[r.x].n)}</b>${r.s<0?'<span class="kclr">Cleared</span>':''}</div>
  ${r.s>=0?`<div class="ksus"><i style="width:${Math.min(100,(r.s/mx)*100)}%"></i></div>`:''}${r.tags&&r.tags.length?`<div class="ktags">${r.tags.map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')}</div>`:''}</div></div>`).join('')}</div>`}
const CHS=[{ti:'The Assignment',sub:'Six suspects · days 1–2'},{ti:'Investigation',sub:'Statements and records · days 3–6'},{ti:'The Trap',sub:'False leads and tailing · days 7–9'},{ti:'Confrontation',sub:'The interrogation room · day 10'}];
function chOf(R){return R.end?3:R.phase==='brief'?0:R.day<=2?0:R.day<=6?1:R.day<=9?2:3}
const KD={telsiz:'Where did the encrypted broadcasts come from?',nobet:'Who was awake on the leak nights?',defter:'Who left the barracks in the mornings?',not:'Burned papers in the stove',izmarit:'The old fountain on the border road',banka:'Unusual money movements'};
function view(R){const KI=VIEWTR.KI,ART=VIEWTR.ART;
 if(R.phase==='brief'){const B=BRIEF[R.bi];return `${R.bi===0?`<div class="tchap32"><span>Chapter 1</span><b class="stencil">The Assignment</b></div>`:''}<div class="tart32">${ART.hq()}</div><div class="tbody32"><h3 class="stencil">${esc(B.ti)}</h3>${md(B.b)}</div>
  ${R.bi===2?`<div class="ksus6">${IDS.map(x=>`<div>${av(x,36)}<span><b>${esc(SU[x].n)}</b><small>${esc(SU[x].bio)}</small></span></div>`).join('')}</div>`:''}
  <button class="btn block" data-a="kb" data-v="bn">${R.bi<2?'Continue':'Begin the investigation'}</button>`}
 if(R.phase==='night'){const ch=chOf(R);const newCh=[3,7,10].includes(R.day);return `${newCh?`<div class="tchap32"><span>Chapter ${ch+1}</span><b class="stencil">${esc(CHS[ch].ti)}</b></div>`:''}<div class="tart32">${ART.night()}</div>
  <div class="tbody32"><h3 class="stencil">Night</h3>${R.lastNight.length?md(R.lastNight.join('\n\n')):'<p>The night passed quietly. One by one, the lights of the HQ go out.</p>'}</div>
  <button class="btn block" data-a="kb" data-v="morning">Day ${R.day} begins ›</button>`}
 if(R.phase==='turn'){return `<div class="tart32">${ART.room()}</div><div class="tbody32"><h3 class="stencil">An opportunity</h3>${md(`${nm(R.mole)} sits across from you in the interrogation room. The evidence is on the table; there's no denying it. Their shoulders sag.\n\nBut you have an idea: the mole is a channel that carries false information to the enemy. The enemy still trusts them, because they were never on alert and never covered their tracks. Instead of arresting them, you could use them.`)}</div>
  <div class="topts32"><button class="opt op2" data-a="kb" data-v="fin:ag"><span class="k">A</span><span class="grow">Arrest them. Let the traitor get what they deserve.</span></button><button class="opt op2" data-a="kb" data-v="fin:cift"><span class="k">B</span><span class="grow">Make an offer: they'll carry the information we choose to the enemy, and in return their life will be spared.</span></button></div>`}
 let h=header(R);
 if(R.res){return h+`<div class="tbody32 kres${R.res.contra?' hot':''}"><h3 class="stencil">${esc(R.res.ti)}</h3>${md(R.res.b)}</div><button class="btn block" data-a="kb" data-v="ok">${R.ap<=0?'End the day ›':'OK'}</button>`}
 const back=`<button class="btn ghost block" data-a="kb" data-v="menu:">‹ Back</button>`;
 if(R.menu==='iv')return h+`<div class="card"><div class="sec-h"><h2>Whose statement will you take?</h2></div><p class="small muted">You can talk to each suspect once a day. On the second conversation, you press them.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="iv:${x}"${R.ivDay[x]===R.day?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${esc(SU[x].r)} · ${R.iv[x]?(R.iv[x]===1?'Talked once':'Pressed'):'Not yet questioned'}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='cl')return h+`<div class="card"><div class="sec-h"><h2>Where will you look?</h2></div>${CLUES.map(c=>{const lock=c==='banka'&&R.day<3?'From day 3 (prosecutor\'s approval)':c==='izmarit'&&R.day<5&&!R.dropSeen?'The meeting point isn\'t known yet':R.destroyed[c]?'The mole destroyed this evidence':R.got[c]?'Examined':'';return `<button class="kpick" data-a="kb" data-v="cl:${c}"${lock?' disabled':''}><span class="kic">${KI[c]}</span><span class="grow"><b>${esc(CN[c])}</b><small>${esc(lock||KD[c])}</small></span>${lock?'':'<span class="chev">›</span>'}</button>`}).join('')}</div>`+back;
 if(R.menu==='tail')return h+`<div class="card"><div class="sec-h"><h2>Who will you tail tonight?</h2></div><p class="small muted">You can tail only one person a night. If the mole notices, they'll go on alert.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="tail:${x}">${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.tail[x]==='secret'?'Tailed before':R.tail[x]==='witness'?'Seen with courier':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='trap'){const sel=R.tsel||[];return h+`<div class="card"><div class="sec-h"><h2>Set a trap</h2></div><p class="small">Choose two suspects. You'll give each of them a different false operational lead. If the enemy acts on one of them at the next leak, that person is the mole; if it acts on neither, both are cleared. <b>You can set the trap only once.</b></p>${IDS.map(x=>`<button class="kpick${sel.includes(x)?' on':''}" data-a="kb" data-v="trap:${x}"${R.cleared[x]?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.cleared[x]?'Cleared':sel.includes(x)?(sel.indexOf(x)===0?'North valley lead':'South bridge lead'):esc(SU[x].r)}</small></span><span class="kchk">${sel.includes(x)?'✓':''}</span></button>`).join('')}</div>
  <button class="btn block" data-a="kb" data-v="trap:go:${sel.join(',')}"${sel.length===2?'':' disabled'}>Give the false leads</button>`+back}
 if(R.menu==='board')return h+board(R)+`<div class="card"><div class="sec-h"><h2>Statements</h2></div>${IDS.filter(x=>R.alibi&&R.alibi[x]).map(x=>`<div class="kst">${av(x,28)}<p><b>${esc(SU[x].k)}:</b> "${esc(R.alibi[x])}"</p></div>`).join('')||'<p class="small muted">You haven\'t taken anyone\'s statement yet.</p>'}</div>
  <div class="card"><div class="sec-h"><h2>Evidence</h2></div>${CLUES.filter(c=>R.got[c]).map(c=>`<div class="kcl"><span class="kic">${KI[c]}</span><span><b>${esc(CN[c])}</b><small>${c==='banka'?esc(R.sets.banka.map(kn).join(' and ')+': unusual activity'):c==='not'?esc('Writer is '+HAND[SU[R.mole].hand]+': '+R.sets.not.map(kn).join(', ')):c==='izmarit'?esc((SU[R.mole].smoke?'Smokers: ':'Non-smokers: ')+R.sets.izmarit.map(kn).join(', ')):esc(R.sets[c].map(kn).join(', '))}</small></span></div>`).join('')||'<p class="small muted">You haven\'t gathered any evidence yet.</p>'}</div>`+back;
 if(R.menu==='accuse'){const x=R.accSel;if(x){const S=str(R,x);return h+`<div class="card kacc">${av(x,64)}<h2 class="stencil">${esc(SU[x].n)}</h2><p class="small muted">${esc(SU[x].r)}</p>
   <div class="ktags">${S.tags.filter(t=>t[1]!=='o').map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')||'<span class="small muted">You have almost no evidence against this person.</span>'}</div>
   <p>You'll take them into the interrogation room and lay the evidence on the table. If you're wrong, an innocent life is ruined and the real mole gets away. <b>You can't take this decision back.</b></p></div>
   <button class="btn warn block" data-a="kb" data-v="accgo:${x}">Accuse ${esc(kn(x))}</button><button class="btn ghost block" data-a="kb" data-v="acc:">‹ Choose someone else</button>`}
  return h+`<div class="card"><div class="sec-h"><h2>Who will you accuse?</h2></div>${IDS.map(x=>{const S=str(R,x);return `<button class="kpick" data-a="kb" data-v="acc:${x}"${S.s<0?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${S.s<0?'Cleared':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`}).join('')}</div>`+back}
 const N=morning(R);
 return h+(N.length?`<div class="kmorn"><span class="lbl">Morning report · Day ${R.day}</span>${md(N.join('\n\n'))}</div>`:'')+
 `<div class="kacts">
  <button class="kact" data-a="kb" data-v="menu:iv"${R.ap?'':' disabled'}><span class="kic">${KI.iv}</span><b>Take a statement</b><small>Talk to a suspect</small></button>
  <button class="kact" data-a="kb" data-v="menu:cl"${R.ap?'':' disabled'}><span class="kic">${KI.cl}</span><b>Gather evidence</b><small>Records, logs</small></button>
  <button class="kact" data-a="kb" data-v="menu:tail"${R.ap&&R.tailDay!==R.day?'':' disabled'}><span class="kic">${KI.tail}</span><b>Night tail</b><small>${R.tailDay===R.day?'Someone is being tailed tonight':'Follow someone'}</small></button>
  <button class="kact" data-a="kb" data-v="menu:trap"${R.ap&&!R.trap&&R.day>=5&&R.day<=9?'':' disabled'}><span class="kic">${KI.trap}</span><b>Set a trap</b><small>${R.trap?(R.trap.res?'Trap resolved':'Trap set, waiting'):R.day<5?'From day 5':R.day>9?'No time left':'Plant false info'}</small></button>
 </div>${rings(R)}
 <div class="kbar"><button class="btn ghost" data-a="kb" data-v="menu:accuse"${R.day>=5?'':' disabled'}>${R.day>=5?'Accuse':'Accuse · day 5'}</button><button class="btn" data-a="kb" data-v="night">End the day ›</button></div>`}
function rings(R){const rows=IDS.map(x=>({x,...str(R,x)}));const mx=Math.max(6,...rows.map(r=>r.s));
 return `<button class="kring-card" data-a="kb" data-v="menu:board"><div class="sec-h"><span class="lbl">Evidence board</span><span class="small acc">Details ›</span></div><div class="krings">${rows.map(r=>{const h=r.s<0?0:Math.min(1,r.s/mx);return `<div class="kr${r.s<0?' clr':''}${r.s>0?' hot':''}" style="--h:${h.toFixed(2)}"><span class="kr-ring">${av(r.x,38)}${r.s>0?`<em>${r.s}</em>`:''}</span><small class="notr">${esc(SU[r.x].k)}</small></div>`}).join('')}</div></button>`}
function endText(R){const m=R.mole,x=R.accused,kia=23+R.kia;
 if(R.end==='ag')return `${R.bluff?`Your evidence is thin; you know it too. But you sit across from ${nm(m)} as if you know everything. In the third hour, they break.`:`You lay the evidence on the table piece by piece. ${nm(m)} denies it at first, then goes silent, then starts talking.`}

— It was for the money, they say. Then it was fear. Once you start, you can't stop.

With the names they give, the courier in the border village and two accomplices are caught the same night. The network collapses.

A week later General Ateş calls you to her office. On the desk is a list of ${kia} names.

— We can't bring them back, Major. But no new name will be added to this list. You made sure of that.`;
 if(R.end==='cift')return `With trembling hands, ${nm(m)} accepts your offer.

For the next six months the enemy receives reports we wrote from the source it trusts. Fake positions, units that don't exist, offensives that will never happen…

When spring comes, the enemy's strongest division spends three days encircling an empty valley. In those three days our units break through the front.

No one will know your name. It won't appear in any report on this operation. General Ateş simply shakes your hand:

— Some victories are won in silence, Major. The greatest ones usually are.`;
 if(R.end==='yanlis')return `${nm(x)} is arrested. As the handcuffs go on, they look at you; there's no anger in their eyes, only bewilderment.

— You're wrong, they say. One day you'll understand.

Three weeks later another operation is ambushed. Then another.

Months later a courier caught at the border gives a single name: ${nm(m)}. But ${kn(m)} has long since crossed the border and vanished.

${nm(x)} is released. You go to meet them at the gate. You offer your hand; they don't take it.

They told you to trust no one. It turns out you shouldn't blindly trust the evidence either.`;
 return R.endWhy==='weak'?`Your evidence wasn't enough. ${nm(m)} kept their composure in the interrogation room and had an answer for every accusation. The prosecutor ordered their release.

The next morning ${pos(kn(m))} bed was empty. The border post's records showed a vehicle crossing to the other side at midnight.

You found the mole, but you couldn't catch them.`:`The ten days are up. General Ateş closed the investigation.

The leak at Eastern HQ went on for two more months. Then one night ${nm(m)} vanished without a trace. A week later they were on enemy television, smiling.

The casualty list reached ${kia+11} names.`}
const VIEWTR={KI:KB.KI,ART:KB.ART};
const T=KB.T;
T.en={ti:'The Mole',genre:'Espionage · Detective',sub:'Find the traitor at HQ in 10 days',
 pitch:'The last three operations were ambushed. Someone at Eastern HQ is leaking information, and you have 10 days. Take statements, examine records, tail suspects at night, set traps with false information. The mole can be a different person every game. Accuse the wrong one and an innocent person burns while the real traitor escapes.',
 chapters:CHS,
 endings:[{k:'ag',ti:'Network dismantled',medal:'Shadow Hunter',tone:'good'},{k:'cift',ti:'Double agent',medal:'Invisible Insignia',tone:'good'},{k:'yanlis',ti:'The wrong person',tone:'bad'},{k:'kacti',ti:'The mole escaped',tone:'bad'}],
 view,endText,subtitle:R=>R.end?'Ending':R.phase==='brief'?'Chapter 1 · The Assignment':`Day ${Math.min(R.day,DAYS)} · ${CHS[chOf(R)].ti}`};
const actTR=KB.act;
A32.kb=v=>{const P=tp32('kostebek');if(!P.run)return;(taleEnOn34()?act:actTR)(P.run,v);tpSave32();render();const el=$('#tscr');if(el)el.scrollTop=0;window.scrollTo(0,0)};
window.__KBEN={SU,act,str,endDay,view,endText};
})();
