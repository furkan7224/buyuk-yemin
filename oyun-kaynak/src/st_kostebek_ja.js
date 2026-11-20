/* =====================================================================
   HİKÂYE · KÖSTEBEK · Japonca sürüm
   Kural ve kayıt yapısı Türkçe dosyayla birebir aynıdır (newRun oradan gelir).
   ===================================================================== */
(function(){
const KB=window.__KB;if(!KB)return;
const DAYS=10,AP=3,LEAK=[3,6,9],DROP=[4,8];
const HAND={sağlak:'右利き',solak:'左利き'};
const SU={
 kaya:{n:'カン・カヤ大尉',k:'カヤ',r:'作戦将校',c:'#c9a64a',hand:'sağlak',smoke:1,
  bio:'士官学校の同期で、長年の一番の親友。最近は借金で首が回らないという噂だ。',
  duty:'あの夜のうち二晩は当直将校でした。二時に司令部を巡回し、そのあとは作戦室で計画をまとめていました。',
  sleep:'あの夜は早く寝ました。一日中計画にかかりきりで、立っているのもやっとでした。',
  early:'朝早く町へ下りました。銀行に用があったので。',
  secret:'カヤを尾行すると、町の裏通りの茶屋に入っていく。テーブルには恰幅のいい男が座っている。カヤが封筒を渡し、男は金を数えて立ち去る。高利貸しだ。カヤは長いあいだ頭を抱えて座り込んでいる。\n\n親友は借金で溺れかけている。だが、それは反逆ではない。',
  press:'カヤは最初笑うが、その笑みが顔に凍りつく。\n\n——俺を疑っているのか？十五年だぞ……十五年、一緒に歩哨に立ってきたんだ。',
  pressX:'カヤはしばらく黙り込み、やがてすべてを話す。賭博の借金、高利貸し、何か月も続く利息の支払い。\n\n——恥ずかしくて誰にも言えなかった。だが誓って、祖国を売ってはいない。'},
 aras:{n:'レヴェント・アラス少佐',k:'アラス',r:'作戦計画課',c:'#b8453a',hand:'solak',smoke:0,
  bio:'厳しく、野心家で、規則一辺倒。昇進名簿に名前があり、そのためなら何でもすると言われている。',
  duty:'深夜過ぎは作戦センターにいました。大佐に頼まれた報告書を仕上げていたのです。',
  sleep:'十一時に消灯しました。私は規律を重んじる人間です、少佐。',
  early:'毎朝六時に走りに出ます。門の記録簿を見てください。',
  secret:'深夜、アラスは司令部を出て町のホテルのレストランへ向かう。テーブルには師団司令部の参謀大佐が座っている。アラスは高価な腕時計を渡す。会話から、昇進名簿の話をしているのは明らかだ。\n\n見苦しく、規則違反だ。だが、スパイ行為ではない。',
  press:'アラスはまばたきもせずに君を見る。\n\n——私を調べる権利はあなたにある。だが私の経歴に一つでも汚点をつけたら、その責任は取ってもらう。',
  pressX:'アラスは顎を食いしばり、それから短く認める。昇進の口利きを求めて参謀大佐に会っていたのだ。\n\n——それは懲戒の問題です、少佐。反逆ではない。'},
 deniz:{n:'デニズ・ユルマズ軍曹',k:'デニズ',r:'通信軍曹',c:'#70a3c4',hand:'sağlak',smoke:1,
  bio:'すべての無線通信が彼の手を通る。夜勤ではたいてい通信室に一人きりだ。',
  duty:'夜勤は私でした。朝まで通信室の無線機の前にいました。',
  sleep:'あの夜は勤務ではありませんでした。兵舎で寝ていました。',
  early:'朝早く町の郵便局へ行きました。母が小包を送ってくれたので。',
  secret:'午前一時、デニズは兵舎を抜け出し、正門脇の公衆電話へ向かう。三十分ほど小声で話し、ときどき笑う。電話を切ると、一枚の写真を見つめる。婚約者だ。\n\n禁じられた深夜の電話。懲戒処分には値するが、スパイ行為ではない。',
  press:'デニズはつばを飲み込み、目が扉のほうへ泳ぐ。\n\n——自分は無線を担当しているだけであります。聞いたことはすべて報告しました。',
  pressX:'デニズは真っ赤になって白状する。夜中にこっそり婚約者に電話していたのだ。\n\n——どんな罰でも受けます。ですが、自分は裏切り者ではありません。'},
 leyla:{n:'通訳レイラ・サラン',k:'レイラ',r:'民間人通訳',c:'#a78bfa',hand:'solak',smoke:1,
  bio:'敵の言葉を母語のように話す。家族の一部は今も国境の向こう側に住んでいる。',
  duty:'遅くまで傍受した無線を翻訳していました。終わったのは二時半ごろです。',
  sleep:'寝ていました。通訳は夜は働きません、少佐。少なくとも、あの夜の私は。',
  early:'朝、町の市場へ下りました。月に一度行くんです。',
  secret:'夜、レイラは将校宿舎の裏庭に出て、隠し持った携帯電話で国境の向こうへ電話をかける。通話は短く途切れがちで、最後に彼女は泣く。病気の母親と話しているのは明らかだ。\n\n禁じられた回線。だが君が聞いたのは、母を恋しがる娘の声であって、工作員の報告ではない。',
  press:'レイラは腕を組む。\n\n——家族が国境の向こうにいるから、私が真っ先に疑われるんでしょう？慣れていますよ、少佐。',
  pressX:'レイラは隠していた電話をテーブルに置く。\n\n——母が病気なんです。電話をかけている、それだけです。よければ全部の通話を聞いてください。'},
 emre:{n:'エムレ・トゥンチ中尉',k:'エムレ',r:'兵站将校',c:'#7fb35a',hand:'sağlak',smoke:0,
  bio:'物静かで礼儀正しく、仕事は完璧。完璧すぎるかもしれない。彼を悪く言う者は一人もいない。',
  duty:'倉庫で夜間の棚卸しがありました。弾薬のリストを確認していました。',
  sleep:'十一時に寝ました。翌日に輸送があったので、休んでおく必要がありました。',
  early:'朝早く補給車列を出迎えに出ました。輸送書類に私の署名があります。',
  secret:'午前二時、エムレは宿舎を出てジムへ行き、一時間サンドバッグを殴り続ける。それからベンチに座って携帯電話を見る。入院中の父親からの古いメッセージだ。\n\n眠れずに一人で苦しむ男。だが、反逆の兆候はない。',
  press:'エムレは落ち着いている。落ち着きすぎているほどに。\n\n——ご質問の意図は分かります。隠すことは何もありません。何でもお答えします。',
  pressX:'初めてエムレの声が震える。父親が入院していて、夜眠れないのだという。\n\n——誰にも知られたくなかったのです。弱く見られたくなかった。'},
 tekin:{n:'ニハト・テキン大佐',k:'テキン',r:'司令部司令官',c:'#e39540',hand:'solak',smoke:1,
  bio:'君の上官。すべての作戦計画が彼の机を通る。彼を取り調べれば、君の経歴が終わるかもしれない。',
  duty:'私はこの司令部の司令官だ、少佐。昼も夜も勤務中だ。あの夜は作戦センターにいた。',
  sleep:'自室にいた。大佐が夜どこにいたかを問いただすには、度胸がいるぞ。',
  early:'朝は会議で師団司令部へ行った。',
  secret:'夜、大佐は私服で町へ下り、終夜営業の薬局の裏にある診療所に入っていく。出てきたときには薬の箱を抱えている。翌日、君は真相を知る。彼は重い病を抱えており、退役させられないよう誰にも隠しているのだ。\n\n秘密ではある。だが、祖国を裏切った男の秘密ではない。',
  press:'テキン大佐は椅子の背にもたれる。\n\n——つまり、私も君のリストに載ったわけか。勇敢だな、少佐。君が正しいことを願うよ。さもなければ、この部屋から出るのに苦労するかもしれん。',
  pressX:'大佐は長いあいだ窓の外を見つめ、それから自分の病について語る。\n\n——三十年この軍服を着てきた。最後の日まで着ていたい。それが罪かね？'}
};
const IDS=Object.keys(SU);
const nm=id=>SU[id].n,kn=id=>SU[id].k;
const list=a=>a.map(nm).join('、');
const CLUES=['telsiz','nobet','defter','not','izmarit','banka'];
const CN={telsiz:'無線記録',nobet:'当直表',defter:'門の記録簿',not:'焼け残ったメモ',izmarit:'接触地点',banka:'銀行取引明細'};
const CW='矛盾';
function str(R,x){if(R.cleared[x])return {s:-1,tags:[['容疑晴れ','o']]};let s=0;const tags=[];
 for(const c of CLUES)if(R.got[c]&&R.sets[c].includes(x)){if(c==='banka'&&R.expl[x]){tags.push(['銀行：説明済み','o']);continue}s++;tags.push([CN[c],'c'])}
 if(R.contra[x]){const n=Object.keys(R.contra[x]).length;s+=2*n;tags.push([n>1?'矛盾2件':'矛盾','r'])}
 if(R.nervous[x]){s+=1;tags.push(['動揺','r'])}
 if(R.tail[x]==='witness'){s+=3;tags.push(['連絡員と接触','r'])}
 if(R.trap&&R.trap.res==='hit'&&R.trap.hit===x){s+=3;tags.push(['罠：漏洩','r'])}
 if(R.tail[x]==='secret')tags.push(['秘密が判明','o']);
 return {s,tags}}
const C_N=x=>`${nm(x)}は、あの夜は寝ていたと言った。だが当直表によれば、漏洩のあった三晩とも、02:00から03:00のあいだ司令部で起きていた。`;
const C_D=x=>`${nm(x)}は、朝は兵舎から一歩も出なかったと言った。だが門の記録簿によれば、漏洩の翌朝、05:40に正門から外出している。`;
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
 {ti:'閉ざされた扉の向こう',b:`参謀本部情報部長のセヴィム・アテシュ准将は、話を始める前に執務室の扉に鍵をかける。

——直近の三つの作戦が待ち伏せに遭った、少佐。三つとも、敵は我々より先に計画を知っていた。二十三人の兵士を失った。

彼女はテーブルに三冊のファイルを置く。どの表紙にも赤い印が押されている。極秘。

——情報は東部司令部から漏れている。内部の誰かだ。`},
 {ti:'任務',b:`——「人事監査」を名目に、君を新たにあちらへ配属する。君の本当の任務は誰にも知らせない。司令官にもだ。

准将は窓のほうを向く。

——期限は十日。漏洩が続く限り、兵士たちは死に続ける。間違った人間を告発すれば無実の人生を壊し、本物の裏切り者は逃げおおせる。

——承知しました。

——もう一つ、少佐。誰も信じるな。`},
 {ti:'六人の名前',b:`東部司令部で作戦計画に触れられるのは六人。スパイはその中にいる。

一日に使える行動は三回。*供述を取る*、*証拠を集める*、あるいは夜に誰かを*尾行する*ことができる。五日目からは偽情報で*罠を仕掛け*られ、準備ができたら誰かを*告発*できる。

矛盾を見抜き、手がかりをつなげ。証拠ボードが、疑いがどこに集まっているかを示してくれる。

だが気をつけろ。スパイが気づけば、痕跡を消し始める。`}];
function morning(R){const d=R.day,N=[];
 if(d===1)N.push('「人事監査」の名目で東部司令部に着任した。テキン大佐は冷たい握手で君を迎えた。部屋と机と鍵が与えられた。');
 if(d===2)N.push('朝食の席で、カヤ大尉が隣に座った。「ここで会えるなんて嬉しいよ。今夜、昔みたいにお茶でも飲もう」目の下にくまができている。');
 if(d===5)N.push('町の羊飼いが言うには、ここ数週間、国境道路の古い泉のそばで夜な夜な誰かが待っているという。接触地点かもしれない。');
 if(d===10)N.push('最終日。日没までにスパイを告発しなければ、准将は捜査を打ち切り、漏洩は続く。');
 return N.concat(R.notes)}
function nightEvents(R){const d=R.day,m=R.mole,ev=[];
 if(LEAK.includes(d)){if(R.trap&&R.trap.res==null&&R.trap.day<=d){const T=R.trap;if(T.a===m||T.b===m){T.res='hit';T.hit=m;ev.push(`今夜、敵は${T.hit===T.a?'北の谷':'南の橋'}に関する偽情報に基づいて動いた。それを知っていたのは**${nm(m)}**だけだ。`)}else{T.res='clear';R.cleared[T.a]=1;R.cleared[T.b]=1;ev.push(`今夜、敵は罠の二つの偽情報のどちらにも反応しなかった。**${nm(T.a)}**と**${nm(T.b)}**の容疑は晴れた。`)}}
  const k=2+Math.floor(Math.random()*4);R.kia+=k;ev.push(`漏洩は続いている。今夜、偵察部隊の一つが待ち伏せに遭った。**戦死${k}名。**損失の合計：${23+R.kia}名。`)}
 if(R.alert>=2&&!R.destroyed._done){R.destroyed._done=1;const c=['banka','izmarit','not'].find(x=>!R.got[x]);if(c){R.destroyed[c]=1;ev.push(`スパイが警戒している。${c==='banka'?'「技術的な障害」を理由に、銀行記録へのアクセスが遮断された。':c==='izmarit'?'古い泉の周辺が一晩で片づけられ、痕跡ひとつ残っていない。':'司令部のストーブの灰が一晩で捨てられ、焼け残ったメモは消えた。'}`)}}
 if(R.alert>=3&&!R.destroyed._comp){R.destroyed._comp=1;R.apPenalty=1;ev.push('君に対して匿名の苦情が出された。「監査官が職員に嫌がらせをしている」明朝、テキン大佐に釈明しなければならない。行動が一回減る。')}
 return ev}
function act(R,v){const [a,b,c]=String(v).split(':');
 if(a==='bn'){R.bi++;if(R.bi>=BRIEF.length){R.phase='day';R.bi=0}return}
 if(a==='menu'){R.menu=b||null;return}
 if(a==='ok'){R.res=null;if(R.ap<=0&&R.phase==='day')endDay(R);return}
 if(a==='night'){endDay(R);return}
 if(a==='morning'){R.phase='day';R.notes=[];return}
 if(a==='iv'){if(R.ap<=0||R.ivDay[b]===R.day)return;R.ap--;R.ivDay[b]=R.day;R.iv[b]=(R.iv[b]||0)+1;R.menu=null;
  const first=R.iv[b]===1;let body;
  const BAR='それに朝は兵舎にいました。どこにも行っていません。';
  if(first){const inN=R.sets.nobet.includes(b),inD=R.sets.defter.includes(b);
   const say=b===R.mole?SU[b].sleep+BAR:b===R.liar&&!R.tail[b]?SU[b].sleep+(inD?BAR:''):(inN?SU[b].duty:SU[b].sleep)+(inD?SU[b].early:'');
   body=`${nm(b)}が向かいに座る。漏洩のあった夜にどこにいたかを尋ねる。\n\n——${say}`;
   R.alibi=R.alibi||{};R.alibi[b]=say;R.alibiK=R.alibiK||{};R.alibiK[b]={s:say.indexOf(SU[b].sleep)===0,k:say.indexOf(BAR)>=0}}
  else{if(b===R.mole){R.alert++;R.nervous[b]=1;body=SU[b].press+`\n\n話しているあいだ、指がテーブルの縁を叩き続けている。何かを隠しているのかもしれない。`}
   else if(b===R.liar&&R.contra[b]){body=SU[b].pressX+`\n\n供述の食い違いの理由はこれだったのだ。だから${kn(b)}はあの夜の居場所を隠していた。`;delete R.contra[b];R.liarOk=1;if(b===R.herring)R.expl[b]=1}
   else if(R.tail[b]==='secret'||(b===R.herring&&R.got.banka)){body=SU[b].pressX;if(b===R.herring)R.expl[b]=1}
   else body=SU[b].press}
  const nw=contraCheck(R)||[];R.res={ti:'供述・'+kn(b),b:body+(nw.length?'\n\n'+nw.map(x=>CW+'：'+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='cl'){if(R.ap<=0||R.got[b]||R.destroyed[b])return;if(b==='banka'&&R.day<3)return;if(b==='izmarit'&&R.day<5&&!R.dropSeen)return;R.ap--;R.got[b]=1;R.menu=null;
  const S=R.sets[b];let body='';const noticed=Math.random()<.12;if(noticed)R.alert++;
  if(b==='telsiz')body=`通信室の録音機を調べる。漏洩のあった夜にはいつも、決まって02:10ごろに四十秒の暗号送信があった。外部からではなく、通信室の予備無線機から発信されている。\n\nあの部屋の鍵を持っているのは三人だけ：${list(S)}。`;
  if(b==='nobet')body=`当直表と入退室カードの記録を照合する。漏洩のあった三晩とも、02:00から03:00のあいだ司令部の建物で起きていたのは三人：${list(S)}。`;
  if(b==='defter')body=`門の記録簿を一ページずつ読む。漏洩の翌朝、日の出前に兵舎を出ている名前が三つ、繰り返し現れる：${list(S)}。`;
  if(b==='not')body=`司令部のストーブの灰をふるっていた兵の一人が、半分焼けた紙片を持ってくる。読めるのは一行だけ。「木曜。泉。02」${SU[R.mole].hand==='solak'?'インクはところどころ、行の上を滑った手でこすれている。書いたのは左利きだ':'インクはきれいで、文字は右に傾いている。書いたのは右利きだ'}。\n\n${HAND[SU[R.mole].hand]}の容疑者：${list(S)}。`;
  if(b==='izmarit')body=SU[R.mole].smoke?`夜、古い泉へ行き、懐中電灯で周囲を照らす。石の根元に、同じ銘柄の吸い殻がひとつかみ落ちている。ここで待っている者は煙草を吸う。\n\n煙草を吸う容疑者：${list(S)}。`:`夜、古い泉へ行き、懐中電灯で周囲を照らす。新しい足跡はあるが、吸い殻は一本もない。ここで何時間も待つ者は煙草を吸わないのだろう。\n\n煙草を吸わない容疑者：${list(S)}。`;
  if(b==='banka'){const m=R.mole;const t=x=>x==='kaya'?(x===m?'カヤの高利貸しへの借金が、漏洩のたびにその二日後、突然返済されている。':'カヤの口座には高利貸しへの定期的な支払いがある。借金で首が回らないのは明らかだ。'):x==='leyla'?(x===m?'レイラの国境の向こうへの少額送金に加え、漏洩のたびに多額の現金が口座に入金されている。':'レイラは毎月、国境の向こうへ少額の送金をしている。'):`${kn(x)}の口座に、漏洩の二日後ごとに計三回、現金が入金されている。`;
   body=`検察官の承認を得て、容疑者たちの過去三か月の銀行取引明細を調べる。不審な動きのある口座が二つある：\n\n${t(R.banka0=R.sets.banka[0])}\n\n${t(R.sets.banka[1])}`}
  if(noticed)body+='\n\n部屋を出るとき、廊下で誰かと目が合う。君が何を探していたか、気づかれたかもしれない。';
  const nw=contraCheck(R)||[];R.res={ti:CN[b],b:body+(nw.length?'\n\n'+nw.map(x=>CW+'：'+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='tail'){if(R.ap<=0||R.tailDay===R.day)return;R.ap--;R.tailDay=R.day;R.menu=null;let body;const m=R.mole;
  if(b===m){if(DROP.includes(R.day)){R.tail[b]='witness';R.dropSeen=1;body=`一時半、${nm(b)}がひっそりと司令部を抜け出す。距離を取ってあとを追う。国境道路の古い泉のそばで、人影が待っている。${kn(b)}が折りたたんだ封筒を手渡すと、人影はそれを上着の内側にしまい、闇に溶けていく。\n\n君は見た。もはや疑いではない。目撃証言だ。`}
   else{const seen=Math.random()<.3;if(seen)R.alert++;body=`一晩中${nm(b)}を見張る。早めに就寝し、一度だけ明かりがつき、あとは静寂。${seen?'\n\n夜明け前、部屋のカーテンが脇へ寄せられ、誰かが外を見る。ちょうど君が隠れている場所を。見つかったかもしれない。':'\n\n今夜は何も起こらなかった。'}`}}
  else{if(R.tail[b]!=='secret'){R.tail[b]='secret';body=SU[b].secret;if(b===R.herring)R.expl[b]=1;if(b===R.liar&&R.contra[b]){delete R.contra[b];R.liarOk=1;body+=`\n\nこれで${kn(b)}の供述の食い違いにも説明がつく。`}}else body=`再び${nm(b)}を尾行するが、今夜は変わったことは何も起こらない。`}
  R.res={ti:'夜間尾行・'+kn(b),b:body};return}
 if(a==='trap'){if(R.trap||R.day<5||R.day>9||R.ap<=0)return;if(b==='go'){const x=c.split(',');if(x.length!==2)return;R.ap--;R.trap={a:x[0],b:x[1],day:R.day,res:null};R.menu=null;R.tsel=[];
   R.res={ti:'罠を仕掛けた',b:`${nm(x[0])}には北の谷で計画中の急襲について、${nm(x[1])}には南の橋で待機する車列について話す。どちらも偽情報で、それぞれ一人にしか伝えていない。\n\nあとは待つだけだ。次の漏洩の夜、どちらの情報が敵に届いたかが分かる。`};return}
  R.tsel=R.tsel||[];const i=R.tsel.indexOf(b);if(i>=0)R.tsel.splice(i,1);else if(R.tsel.length<2)R.tsel.push(b);return}
 if(a==='acc'){R.menu='accuse';R.accSel=b;return}
 if(a==='accgo'){KB.confront(R,b);return}
 if(a==='fin'){R.end=b;return}}
function endDay(R){const ev=nightEvents(R);R.lastNight=ev;R.day++;R.res=null;R.menu=null;
 if(R.day>DAYS){R.end='kacti';R.endWhy='time';return}
 R.ap=AP-(R.apPenalty||0);R.apPenalty=0;R.phase='night'}
const av=(id,sz=40)=>`<span class="kav" style="--c:${SU[id].c};width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.38)}px">${SU[id].k.slice(0,1)}</span>`;
const md=s=>fmt32(String(s).replace(/\*\*([^*]+)\*\*/g,'⟦$1⟧')).replace(/⟦([^⟧]+)⟧/g,'<b>$1</b>').replace(/矛盾：|CONTRADICTION:|ÇELİŞKİ:/g,'<span class="kcontra">'+CW+'</span>');
function header(R){return `<div class="khead"><div><span class="lbl">日</span><b class="num">${Math.min(R.day,DAYS)}<small>/${DAYS}</small></b></div>
 <div><span class="lbl">行動</span><div class="kap">${Array.from({length:AP},(_,i)=>`<i class="${i<R.ap?'on':''}"></i>`).join('')}</div></div>
 <div><span class="lbl">戦死者</span><b class="num red">${23+R.kia}</b></div></div>${R.alert>=2?'<div class="kwarn">スパイは警戒し、痕跡を消し始めた。</div>':''}`}
function board(R){const rows=IDS.map(x=>({x,...(str(R,x)||{})}));const mx=Math.max(6,...rows.map(r=>r.s||0));
 return `<div class="card kboard"><div class="sec-h"><h2>証拠ボード</h2></div>
 ${rows.map(r=>`<div class="krow${r.s<0?' clr':''}">${av(r.x,34)}<div class="grow"><div class="kn"><b>${esc(SU[r.x].n)}</b>${r.s<0?'<span class="kclr">容疑晴れ</span>':''}</div>
  ${r.s>=0?`<div class="ksus"><i style="width:${Math.min(100,(r.s/mx)*100)}%"></i></div>`:''}${r.tags&&r.tags.length?`<div class="ktags">${r.tags.map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')}</div>`:''}</div></div>`).join('')}</div>`}
const CHS=[{ti:'任務',sub:'容疑者六人・1〜2日目'},{ti:'捜査',sub:'供述と記録・3〜6日目'},{ti:'罠',sub:'偽情報と尾行・7〜9日目'},{ti:'対決',sub:'取調室・10日目'}];
function chOf(R){return R.end?3:R.phase==='brief'?0:R.day<=2?0:R.day<=6?1:R.day<=9?2:3}
const KD={telsiz:'暗号送信はどこから？',nobet:'漏洩の夜に起きていたのは誰？',defter:'朝、兵舎を出たのは誰？',not:'ストーブで焼かれた紙',izmarit:'国境道路の古い泉',banka:'不審な金の動き'};
function view(R){const KI=VIEWTR.KI,ART=VIEWTR.ART;
 if(R.phase==='brief'){const B=BRIEF[R.bi];return `${R.bi===0?`<div class="tchap32"><span>第1章</span><b class="stencil">任務</b></div>`:''}<div class="tart32">${ART.hq()}</div><div class="tbody32"><h3 class="stencil">${esc(B.ti)}</h3>${md(B.b)}</div>
  ${R.bi===2?`<div class="ksus6">${IDS.map(x=>`<div>${av(x,36)}<span><b>${esc(SU[x].n)}</b><small>${esc(SU[x].bio)}</small></span></div>`).join('')}</div>`:''}
  <button class="btn block" data-a="kb" data-v="bn">${R.bi<2?'続ける':'捜査を始める'}</button>`}
 if(R.phase==='night'){const ch=chOf(R);const newCh=[3,7,10].includes(R.day);return `${newCh?`<div class="tchap32"><span>第${ch+1}章</span><b class="stencil">${esc(CHS[ch].ti)}</b></div>`:''}<div class="tart32">${ART.night()}</div>
  <div class="tbody32"><h3 class="stencil">夜</h3>${R.lastNight.length?md(R.lastNight.join('\n\n')):'<p>夜は静かに過ぎた。司令部の明かりが一つ、また一つと消えていく。</p>'}</div>
  <button class="btn block" data-a="kb" data-v="morning">${R.day}日目が始まる ›</button>`}
 if(R.phase==='turn'){return `<div class="tart32">${ART.room()}</div><div class="tbody32"><h3 class="stencil">好機</h3>${md(`取調室で、${nm(R.mole)}が君の向かいに座っている。証拠はテーブルの上にあり、言い逃れはできない。その肩が落ちる。\n\nだが、君にはある考えがある。スパイとは、敵に偽情報を運ぶ経路でもある。敵はまだこの人物を信用している。一度も警戒せず、痕跡を消すこともなかったからだ。逮捕する代わりに、利用することもできる。`)}</div>
  <div class="topts32"><button class="opt op2" data-a="kb" data-v="fin:ag"><span class="k">A</span><span class="grow">逮捕する。裏切り者には相応の報いを。</span></button><button class="opt op2" data-a="kb" data-v="fin:cift"><span class="k">B</span><span class="grow">取引を持ちかける。我々が選んだ情報を敵に運ぶ代わりに、命は助ける。</span></button></div>`}
 let h=header(R);
 if(R.res){return h+`<div class="tbody32 kres${R.res.contra?' hot':''}"><h3 class="stencil">${esc(R.res.ti)}</h3>${md(R.res.b)}</div><button class="btn block" data-a="kb" data-v="ok">${R.ap<=0?'一日を終える ›':'OK'}</button>`}
 const back=`<button class="btn ghost block" data-a="kb" data-v="menu:">‹ 戻る</button>`;
 if(R.menu==='iv')return h+`<div class="card"><div class="sec-h"><h2>誰の供述を取る？</h2></div><p class="small muted">各容疑者とは一日一回話せる。二度目の聴取では問い詰めることになる。</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="iv:${x}"${R.ivDay[x]===R.day?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${esc(SU[x].r)}・${R.iv[x]?(R.iv[x]===1?'一度話した':'問い詰めた'):'まだ聴取していない'}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='cl')return h+`<div class="card"><div class="sec-h"><h2>どこを調べる？</h2></div>${CLUES.map(c=>{const lock=c==='banka'&&R.day<3?'3日目から（検察官の承認）':c==='izmarit'&&R.day<5&&!R.dropSeen?'接触地点はまだ分からない':R.destroyed[c]?'スパイがこの証拠を処分した':R.got[c]?'調査済み':'';return `<button class="kpick" data-a="kb" data-v="cl:${c}"${lock?' disabled':''}><span class="kic">${KI[c]}</span><span class="grow"><b>${esc(CN[c])}</b><small>${esc(lock||KD[c])}</small></span>${lock?'':'<span class="chev">›</span>'}</button>`}).join('')}</div>`+back;
 if(R.menu==='tail')return h+`<div class="card"><div class="sec-h"><h2>今夜は誰を尾行する？</h2></div><p class="small muted">尾行できるのは一晩に一人だけ。スパイに気づかれれば、警戒される。</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="tail:${x}">${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.tail[x]==='secret'?'尾行済み':R.tail[x]==='witness'?'連絡員と接触':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='trap'){const sel=R.tsel||[];return h+`<div class="card"><div class="sec-h"><h2>罠を仕掛ける</h2></div><p class="small">容疑者を二人選ぶ。それぞれに異なる偽の作戦情報を与える。次の漏洩で敵がどちらかに基づいて動けば、その人物がスパイだ。どちらにも動かなければ、二人とも容疑が晴れる。<b>罠を仕掛けられるのは一度だけ。</b></p>${IDS.map(x=>`<button class="kpick${sel.includes(x)?' on':''}" data-a="kb" data-v="trap:${x}"${R.cleared[x]?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.cleared[x]?'容疑晴れ':sel.includes(x)?(sel.indexOf(x)===0?'北の谷の情報':'南の橋の情報'):esc(SU[x].r)}</small></span><span class="kchk">${sel.includes(x)?'✓':''}</span></button>`).join('')}</div>
  <button class="btn block" data-a="kb" data-v="trap:go:${sel.join(',')}"${sel.length===2?'':' disabled'}>偽情報を渡す</button>`+back}
 if(R.menu==='board')return h+board(R)+`<div class="card"><div class="sec-h"><h2>供述</h2></div>${IDS.filter(x=>R.alibi&&R.alibi[x]).map(x=>`<div class="kst">${av(x,28)}<p><b>${esc(SU[x].k)}：</b>「${esc(R.alibi[x])}」</p></div>`).join('')||'<p class="small muted">まだ誰の供述も取っていない。</p>'}</div>
  <div class="card"><div class="sec-h"><h2>証拠</h2></div>${CLUES.filter(c=>R.got[c]).map(c=>`<div class="kcl"><span class="kic">${KI[c]}</span><span><b>${esc(CN[c])}</b><small>${c==='banka'?esc(R.sets.banka.map(kn).join('と')+'：不審な動き'):c==='not'?esc('書いたのは'+HAND[SU[R.mole].hand]+'：'+R.sets.not.map(kn).join('、')):c==='izmarit'?esc((SU[R.mole].smoke?'喫煙者：':'非喫煙者：')+R.sets.izmarit.map(kn).join('、')):esc(R.sets[c].map(kn).join('、'))}</small></span></div>`).join('')||'<p class="small muted">まだ証拠を集めていない。</p>'}</div>`+back;
 if(R.menu==='accuse'){const x=R.accSel;if(x){const S=str(R,x);return h+`<div class="card kacc">${av(x,64)}<h2 class="stencil">${esc(SU[x].n)}</h2><p class="small muted">${esc(SU[x].r)}</p>
   <div class="ktags">${S.tags.filter(t=>t[1]!=='o').map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')||'<span class="small muted">この人物に不利な証拠はほとんどない。</span>'}</div>
   <p>取調室に連れていき、証拠をテーブルに並べることになる。間違っていれば、無実の人生が壊れ、本物のスパイは逃げる。<b>この決定は取り消せない。</b></p></div>
   <button class="btn warn block" data-a="kb" data-v="accgo:${x}">${esc(kn(x))}を告発する</button><button class="btn ghost block" data-a="kb" data-v="acc:">‹ 別の人を選ぶ</button>`}
  return h+`<div class="card"><div class="sec-h"><h2>誰を告発する？</h2></div>${IDS.map(x=>{const S=str(R,x);return `<button class="kpick" data-a="kb" data-v="acc:${x}"${S.s<0?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${S.s<0?'容疑晴れ':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`}).join('')}</div>`+back}
 const N=morning(R);
 return h+(N.length?`<div class="kmorn"><span class="lbl">朝の報告・${R.day}日目</span>${md(N.join('\n\n'))}</div>`:'')+
 `<div class="kacts">
  <button class="kact" data-a="kb" data-v="menu:iv"${R.ap?'':' disabled'}><span class="kic">${KI.iv}</span><b>供述を取る</b><small>容疑者と話す</small></button>
  <button class="kact" data-a="kb" data-v="menu:cl"${R.ap?'':' disabled'}><span class="kic">${KI.cl}</span><b>証拠を集める</b><small>記録、記録簿</small></button>
  <button class="kact" data-a="kb" data-v="menu:tail"${R.ap&&R.tailDay!==R.day?'':' disabled'}><span class="kic">${KI.tail}</span><b>夜間尾行</b><small>${R.tailDay===R.day?'今夜は尾行中':'誰かを追う'}</small></button>
  <button class="kact" data-a="kb" data-v="menu:trap"${R.ap&&!R.trap&&R.day>=5&&R.day<=9?'':' disabled'}><span class="kic">${KI.trap}</span><b>罠を仕掛ける</b><small>${R.trap?(R.trap.res?'罠は決着した':'罠を設置、待機中'):R.day<5?'5日目から':R.day>9?'時間がない':'偽情報を流す'}</small></button>
 </div>${rings(R)}
 <div class="kbar"><button class="btn ghost" data-a="kb" data-v="menu:accuse"${R.day>=5?'':' disabled'}>${R.day>=5?'告発する':'告発・5日目から'}</button><button class="btn" data-a="kb" data-v="night">一日を終える ›</button></div>`}
function rings(R){const rows=IDS.map(x=>({x,...str(R,x)}));const mx=Math.max(6,...rows.map(r=>r.s));
 return `<button class="kring-card" data-a="kb" data-v="menu:board"><div class="sec-h"><span class="lbl">証拠ボード</span><span class="small acc">詳細 ›</span></div><div class="krings">${rows.map(r=>{const h=r.s<0?0:Math.min(1,r.s/mx);return `<div class="kr${r.s<0?' clr':''}${r.s>0?' hot':''}" style="--h:${h.toFixed(2)}"><span class="kr-ring">${av(r.x,38)}${r.s>0?`<em>${r.s}</em>`:''}</span><small class="notr">${esc(SU[r.x].k)}</small></div>`}).join('')}</div></button>`}
function endText(R){const m=R.mole,x=R.accused,kia=23+R.kia;
 if(R.end==='ag')return `${R.bluff?`証拠は薄い。君自身もそれを分かっている。だが君は、すべてを知っているかのように${nm(m)}の向かいに座る。三時間目、相手は崩れる。`:`証拠を一つずつテーブルに並べる。${nm(m)}は最初は否定し、やがて黙り込み、そして話し始める。`}

——金のためだった、と相手は言う。それから恐怖になった。一度始めたら、もう止められない。

告げられた名前をもとに、国境の村の連絡員と二人の共犯者がその夜のうちに捕まる。ネットワークは崩壊する。

一週間後、アテシュ准将が君を執務室に呼ぶ。机の上には${kia}人の名前が並んだリストがある。

——彼らを取り戻すことはできない、少佐。だが、このリストに新しい名前が加わることはもうない。君がそうしたのだ。`;
 if(R.end==='cift')return `震える手で、${nm(m)}は君の申し出を受け入れる。

それから六か月、敵は信頼する情報源から、我々が書いた報告を受け取り続ける。偽の陣地、存在しない部隊、決して起こらない攻勢……

春が来ると、敵の最強の師団が三日間、空っぽの谷を包囲する。その三日間で、我が部隊は前線を突破する。

君の名前は誰にも知られない。この作戦のどの報告書にも載らない。アテシュ准将はただ君の手を握る。

——静かに勝ち取られる勝利もある、少佐。最も偉大な勝利は、たいていそうだ。`;
 if(R.end==='yanlis')return `${nm(x)}が逮捕される。手錠をかけられながら、君を見る。その目に怒りはなく、ただ戸惑いだけがある。

——あなたは間違っている、と相手は言う。いつか分かるでしょう。

三週間後、また別の作戦が待ち伏せに遭う。そしてまた一つ。

数か月後、国境で捕まった連絡員が一つの名前を口にする。${nm(m)}。だが${kn(m)}はとうに国境を越えて姿を消していた。

${nm(x)}は釈放される。君は門で出迎える。手を差し出すが、相手はその手を取らない。

誰も信じるなと言われた。どうやら、証拠も盲目的に信じてはいけなかったらしい。`;
 return R.endWhy==='weak'?`証拠が足りなかった。${nm(m)}は取調室で平静を保ち、あらゆる追及に答えを用意していた。検察官は釈放を命じた。

翌朝、${kn(m)}のベッドは空だった。国境検問所の記録には、真夜中に一台の車が向こう側へ渡ったことが残っていた。

君はスパイを見つけた。だが、捕まえることはできなかった。`:`十日が過ぎた。アテシュ准将は捜査を打ち切った。

東部司令部の漏洩はさらに二か月続いた。そしてある夜、${nm(m)}が跡形もなく姿を消した。一週間後、その人物は敵のテレビに映り、笑っていた。

戦死者のリストは${kia+11}人に達した。`}
const VIEWTR={KI:KB.KI,ART:KB.ART};
const T=KB.T;
T.ja={ti:'モグラ',genre:'スパイ・推理',sub:'10日以内に司令部の裏切り者を見つけ出せ',
 pitch:'直近の三つの作戦が待ち伏せに遭った。東部司令部の誰かが情報を漏らしている。期限は10日。供述を取り、記録を調べ、夜に容疑者を尾行し、偽情報で罠を仕掛けろ。スパイはゲームごとに別の人物になりうる。間違った人間を告発すれば、無実の者が破滅し、本物の裏切り者は逃げる。',
 chapters:CHS,
 endings:[{k:'ag',ti:'ネットワーク壊滅',medal:'影の狩人',tone:'good'},{k:'cift',ti:'二重スパイ',medal:'見えざる徽章',tone:'good'},{k:'yanlis',ti:'間違った人物',tone:'bad'},{k:'kacti',ti:'スパイは逃げた',tone:'bad'}],
 view,endText,subtitle:R=>R.end?'結末':R.phase==='brief'?'第1章・任務':`${Math.min(R.day,DAYS)}日目・${CHS[chOf(R)].ti}`};
window.__KBL=window.__KBL||{};window.__KBL.ja=act;
})();
