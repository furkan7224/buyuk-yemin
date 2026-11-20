/* =====================================================================
   HİKÂYE · KÖSTEBEK · Fransızca sürüm
   Kural ve kayıt yapısı Türkçe dosyayla birebir aynıdır (newRun oradan gelir).
   ===================================================================== */
(function(){
const KB=window.__KB;if(!KB)return;
const DAYS=10,AP=3,LEAK=[3,6,9],DROP=[4,8];
const HAND={sağlak:'droitier',solak:'gaucher'};
const SU={
 kaya:{n:'Capitaine Can Kaya',k:'Kaya',r:'Officier des opérations',c:'#c9a64a',hand:'sağlak',smoke:1,
  bio:'Ton camarade de promotion à l’académie et ton meilleur ami depuis des années. On dit qu’il croule sous les dettes ces derniers temps.',
  duty:'J’étais officier de permanence deux de ces nuits-là. À deux heures, j’ai fait ma ronde dans le QG, puis j’ai travaillé sur les plans dans la salle de briefing.',
  sleep:'Cette nuit-là, je me suis couché tôt. On avait passé la journée sur les plans ; je tenais à peine debout.',
  early:'Tôt le matin, je suis descendu en ville ; j’avais à faire à la banque.',
  secret:'Tu suis Kaya jusqu’à un salon de thé dans les ruelles de la ville. Un homme corpulent est assis à la table ; Kaya lui tend une enveloppe, l’homme compte l’argent et s’en va. Un usurier. Kaya reste longtemps la tête entre les mains.\n\nTon ami croule sous les dettes, mais ce n’est pas de la trahison.',
  press:'Kaya rit d’abord, puis son rire se fige.\n\n— Tu me soupçonnes ? Quinze ans… Quinze ans qu’on monte la garde ensemble.',
  pressX:'Kaya se tait un moment, puis te raconte tout : des dettes de jeu, l’usurier, des mois à payer les intérêts.\n\n— J’avais trop honte pour en parler à qui que ce soit. Mais je te le jure, je n’ai pas vendu mon pays.'},
 aras:{n:'Commandant Levent Aras',k:'Aras',r:'Bureau de planification des opérations',c:'#b8453a',hand:'solak',smoke:0,
  bio:'Dur, ambitieux, à cheval sur le règlement. Son nom figure sur la liste d’avancement ; on dit qu’il ferait n’importe quoi pour ça.',
  duty:'Après minuit, j’étais au centre des opérations, à finir le rapport que le colonel m’avait demandé.',
  sleep:'Extinction des feux à onze heures. Je suis un homme discipliné, commandant.',
  early:'Je vais courir tous les matins à six heures. Consultez le registre du poste de garde.',
  secret:'À minuit, Aras quitte le QG et se rend au restaurant de l’hôtel en ville. Un colonel d’état-major de la division est assis à la table. Aras lui offre une montre de prix ; à les entendre, il est clair qu’ils parlent de la liste d’avancement.\n\nInconvenant et contraire au règlement. Mais ce n’est pas de l’espionnage.',
  press:'Aras te regarde sans ciller.\n\n— Vous avez tout à fait le droit d’enquêter sur moi. Mais si vous laissez une seule tache sur mon dossier, vous en répondrez.',
  pressX:'Aras serre la mâchoire, puis l’admet brièvement : il a rencontré le colonel d’état-major pour obtenir un coup de pouce dans son avancement.\n\n— C’est une affaire disciplinaire, commandant. Pas une trahison.'},
 deniz:{n:'Sergent Deniz Yılmaz',k:'Deniz',r:'Sergent des transmissions',c:'#70a3c4',hand:'sağlak',smoke:1,
  bio:'Tout le trafic radio passe entre ses mains. Pendant les gardes de nuit, il est généralement seul dans la salle des transmissions.',
  duty:'La garde de nuit, c’était moi. J’étais à la radio dans la salle des transmissions jusqu’au matin.',
  sleep:'Je n’étais pas de service cette nuit-là ; je dormais à la caserne.',
  early:'Tôt le matin, je suis allé à la poste en ville. Ma mère m’avait envoyé un colis.',
  secret:'À une heure du matin, Deniz se faufile hors de la caserne jusqu’à la cabine téléphonique près de l’entrée principale. Il parle à voix basse pendant une demi-heure, en riant de temps en temps. Après avoir raccroché, il regarde une photo : sa fiancée.\n\nUn appel nocturne interdit. Ça mérite une sanction disciplinaire, mais ce n’est pas de l’espionnage.',
  press:'Deniz déglutit ; ses yeux glissent vers la porte.\n\n— Mon commandant, je ne m’occupe que des radios. J’ai signalé tout ce que j’ai entendu.',
  pressX:'Deniz rougit et avoue : il appelle sa fiancée en cachette la nuit.\n\n— J’accepterai la sanction, quelle qu’elle soit, mon commandant. Mais je ne suis pas un traître.'},
 leyla:{n:'Interprète Leyla Saran',k:'Leyla',r:'Interprète civile',c:'#a78bfa',hand:'solak',smoke:1,
  bio:'Elle parle la langue de l’ennemi comme une native. Une partie de sa famille vit encore de l’autre côté de la frontière.',
  duty:'Je traduisais des communications radio interceptées jusque tard. J’ai fini vers deux heures et demie.',
  sleep:'Je dormais. Les interprètes ne travaillent pas la nuit, commandant ; moi, en tout cas, pas cette nuit-là.',
  early:'Le matin, je suis descendue au marché en ville. J’y vais une fois par mois.',
  secret:'La nuit, Leyla sort dans le jardin derrière le logement des officiers et appelle de l’autre côté de la frontière avec un portable caché. L’appel est court et haché ; à la fin, elle pleure. Elle parle de toute évidence à sa mère malade.\n\nUne ligne interdite. Mais ce que tu as entendu, c’est une fille à qui sa mère manque, pas le rapport d’une agente.',
  press:'Leyla croise les bras.\n\n— Comme ma famille est de l’autre côté de la frontière, je suis la première suspecte, c’est ça ? J’ai l’habitude, commandant.',
  pressX:'Leyla pose le téléphone caché sur la table.\n\n— Ma mère est malade. Je l’appelle. C’est tout. Écoutez tous les appels si vous voulez.'},
 emre:{n:'Lieutenant Emre Tunç',k:'Emre',r:'Officier logistique',c:'#7fb35a',hand:'sağlak',smoke:0,
  bio:'Discret, poli, irréprochable dans son travail. Peut-être un peu trop irréprochable. Personne n’a un mot à dire contre lui.',
  duty:'Il y avait un inventaire de nuit au dépôt. Je vérifiais les listes de munitions.',
  sleep:'Je me suis couché à onze heures. Il y avait une livraison le lendemain ; j’avais besoin de repos.',
  early:'Tôt le matin, je suis allé accueillir le convoi de ravitaillement ; ma signature est sur les bons de livraison.',
  secret:'À deux heures du matin, Emre quitte son logement et va à la salle de sport, où il frappe le sac pendant une heure. Puis il s’assied sur un banc et regarde son téléphone : de vieux messages de son père, hospitalisé.\n\nUn homme insomniaque, seul et qui souffre. Mais aucune trace de trahison.',
  press:'Emre est calme, presque trop calme.\n\n— Je comprends vos questions, mon commandant. Je n’ai rien à cacher. Je répondrai à tout ce que vous voudrez.',
  pressX:'Pour la première fois, la voix d’Emre tremble : son père est à l’hôpital, et il n’arrive pas à dormir la nuit.\n\n— Je ne voulais pas que quelqu’un le sache, mon commandant. Je ne voulais pas paraître faible.'},
 tekin:{n:'Colonel Nihat Tekin',k:'Tekin',r:'Commandant du QG',c:'#e39540',hand:'solak',smoke:1,
  bio:'Ton chef. Tous les plans d’opération passent par son bureau. L’interroger pourrait te coûter ta carrière.',
  duty:'Je commande ce quartier général, commandant ; je suis de service jour et nuit. Cette nuit-là, j’étais au centre des opérations.',
  sleep:'J’étais dans ma chambre. Il faut du courage pour demander à un colonel où il était la nuit.',
  early:'Le matin, je suis allé à l’état-major de la division pour une réunion.',
  secret:'La nuit, le colonel descend en ville en civil et entre dans un cabinet médical derrière la pharmacie de garde. Il en ressort avec des boîtes de médicaments. Le lendemain, tu apprends la vérité : il est gravement malade et le cache à tout le monde pour ne pas être mis à la retraite.\n\nUn secret, mais pas celui d’un homme qui a trahi son pays.',
  press:'Le colonel Tekin se cale dans son fauteuil.\n\n— Alors je suis sur votre liste, moi aussi. Courageux, commandant. J’espère que vous avez raison ; sinon, vous aurez peut-être du mal à sortir de cette pièce.',
  pressX:'Le colonel regarde longuement par la fenêtre, puis te parle de sa maladie.\n\n— Je porte cet uniforme depuis trente ans. Je veux le porter jusqu’à mon dernier jour. Est-ce un crime ?'}
};
const IDS=Object.keys(SU);
const nm=id=>SU[id].n,kn=id=>SU[id].k;
const NF={kaya:'le capitaine Can Kaya',aras:'le commandant Levent Aras',deniz:'le sergent Deniz Yılmaz',leyla:'l’interprète Leyla Saran',emre:'le lieutenant Emre Tunç',tekin:'le colonel Nihat Tekin'};
const cap=s=>s[0].toUpperCase()+s.slice(1);
const nf=id=>NF[id],Nf=id=>cap(NF[id]),aN=id=>('à '+NF[id]).replace(/^à le /,'au '),dN=id=>('de '+NF[id]).replace(/^de le /,'du ').replace(/^de l’/,'de l’'),g=(id,m,f)=>id==='leyla'?f:m;
const list=a=>a.map(nm).join(', ').replace(/, ([^,]*)$/,' et $1');
const CLUES=['telsiz','nobet','defter','not','izmarit','banka'];
const CN={telsiz:'Journaux radio',nobet:'Tableau de service',defter:'Registre du poste de garde',not:'Note brûlée',izmarit:'Point de rendez-vous',banka:'Relevés bancaires'};
const CW='CONTRADICTION';
function str(R,x){if(R.cleared[x])return {s:-1,tags:[['Innocenté','o']]};let s=0;const tags=[];
 for(const c of CLUES)if(R.got[c]&&R.sets[c].includes(x)){if(c==='banka'&&R.expl[x]){tags.push(['Banque : expliqué','o']);continue}s++;tags.push([CN[c],'c'])}
 if(R.contra[x]){const n=Object.keys(R.contra[x]).length;s+=2*n;tags.push([n>1?'2 contradictions':'Contradiction','r'])}
 if(R.nervous[x]){s+=1;tags.push(['Nerveux','r'])}
 if(R.tail[x]==='witness'){s+=3;tags.push(['Vu avec le courrier','r'])}
 if(R.trap&&R.trap.res==='hit'&&R.trap.hit===x){s+=3;tags.push(['Piège : a fuité','r'])}
 if(R.tail[x]==='secret')tags.push(['Secret révélé','o']);
 return {s,tags}}
const C_N=x=>`${Nf(x)} a dit dormir ces nuits-là. Mais d’après le tableau de service, les trois nuits de fuite, ${g(x,'il','elle')} était ${g(x,'éveillé','éveillée')} dans le QG entre 02:00 et 03:00.`;
const C_D=x=>`${Nf(x)} a dit ne jamais quitter la caserne le matin. Mais d’après le registre du poste de garde, les matins suivant les fuites, ${g(x,'il','elle')} est ${g(x,'sorti','sortie')} par l’entrée principale à 05:40.`;
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
 {ti:'À huis clos',b:`La générale de brigade Sevim Ateş, cheffe du renseignement de l’état-major, verrouille la porte de son bureau avant de commencer :

— Nos trois dernières opérations sont tombées dans des embuscades, commandant. Les trois fois, l’ennemi connaissait le plan avant nous. Nous avons perdu vingt-trois soldats.

Elle pose trois dossiers sur la table. Chaque couverture porte un tampon rouge : TRÈS SECRET.

— L’information fuit du QG Est. Quelqu’un de l’intérieur.`},
 {ti:'La mission',b:`— Je vous envoie là-bas sur une nouvelle affectation, sous couvert d’un « audit du personnel ». Personne ne connaîtra votre vraie mission, pas même le commandant.

La générale se tourne vers la fenêtre.

— Vous avez dix jours. Tant que la fuite continue, nos soldats continuent de mourir. Accusez la mauvaise personne et vous briserez une vie innocente, tandis que le vrai traître vous échappera.

— Compris, ma générale.

— Encore une chose, commandant. Ne faites confiance à personne.`},
 {ti:'Six noms',b:`Au QG Est, six personnes ont accès aux plans. La taupe est l’une d’elles.

Chaque jour, tu disposes de trois actions : tu peux *recueillir une déposition*, *réunir des preuves* ou *filer* quelqu’un la nuit. À partir du cinquième jour, tu peux *tendre un piège* avec de fausses informations et, quand tu es prêt, *accuser* quelqu’un.

Repère les contradictions, relie les indices. Le tableau des preuves te montrera où les soupçons s’accumulent.

Mais attention : si la taupe s’en aperçoit, elle commencera à effacer ses traces.`}];
function morning(R){const d=R.day,N=[];
 if(d===1)N.push('Tu es arrivé au QG Est pour un « audit du personnel ». Le colonel Tekin t’a accueilli d’une poignée de main glaciale. On t’a donné une chambre, un bureau et une clé.');
 if(d===2)N.push('Au petit-déjeuner, le capitaine Kaya s’est assis à côté de toi : « Ça fait plaisir de te voir ici. Prenons un thé ce soir, comme au bon vieux temps. » Il a des cernes sous les yeux.');
 if(d===5)N.push('Un berger de la ville raconte que, ces dernières semaines, quelqu’un attend la nuit près de la vieille fontaine sur la route de la frontière. Ce pourrait être le point de rendez-vous.');
 if(d===10)N.push('Dernier jour. Si tu n’accuses pas la taupe avant le coucher du soleil, la générale clôturera l’enquête et la fuite continuera.');
 return N.concat(R.notes)}
function nightEvents(R){const d=R.day,m=R.mole,ev=[];
 if(LEAK.includes(d)){if(R.trap&&R.trap.res==null&&R.trap.day<=d){const T=R.trap;if(T.a===m||T.b===m){T.res='hit';T.hit=m;ev.push(`Cette nuit, l’ennemi a agi sur la fausse information concernant ${T.hit===T.a?'la vallée nord':'le pont sud'}. Seul${g(m,'','e')} **${nf(m)}** était au courant.`)}else{T.res='clear';R.cleared[T.a]=1;R.cleared[T.b]=1;ev.push(`Cette nuit, l’ennemi n’a agi sur aucune des deux fausses pistes de ton piège. **${Nf(T.a)}** et **${nf(T.b)}** sont innocentés.`)}}
  const k=2+Math.floor(Math.random()*4);R.kia+=k;ev.push(`La fuite continue : cette nuit, une de nos unités de reconnaissance est tombée dans une embuscade. **${k} tués.** Pertes totales : ${23+R.kia}.`)}
 if(R.alert>=2&&!R.destroyed._done){R.destroyed._done=1;const c=['banka','izmarit','not'].find(x=>!R.got[x]);if(c){R.destroyed[c]=1;ev.push(`La taupe est sur ses gardes. ${c==='banka'?'L’accès aux relevés bancaires a été coupé, pour cause de « panne technique ».':c==='izmarit'?'Les abords de la vieille fontaine ont été nettoyés pendant la nuit ; il ne reste aucune trace.':'Les cendres du poêle du QG ont été vidées pendant la nuit ; la note brûlée a disparu.'}`)}}
 if(R.alert>=3&&!R.destroyed._comp){R.destroyed._comp=1;R.apPenalty=1;ev.push('Une plainte anonyme a été déposée contre toi : « L’auditeur harcèle le personnel. » Demain matin, tu devras t’expliquer devant le colonel Tekin ; tu perdras une action.')}
 return ev}
function act(R,v){const [a,b,c]=String(v).split(':');
 if(a==='bn'){R.bi++;if(R.bi>=BRIEF.length){R.phase='day';R.bi=0}return}
 if(a==='menu'){R.menu=b||null;return}
 if(a==='ok'){R.res=null;if(R.ap<=0&&R.phase==='day')endDay(R);return}
 if(a==='night'){endDay(R);return}
 if(a==='morning'){R.phase='day';R.notes=[];return}
 if(a==='iv'){if(R.ap<=0||R.ivDay[b]===R.day)return;R.ap--;R.ivDay[b]=R.day;R.iv[b]=(R.iv[b]||0)+1;R.menu=null;
  const first=R.iv[b]===1;let body;
  const BAR=' Et le matin, je restais à la caserne ; je ne suis allé nulle part.';
  if(first){const inN=R.sets.nobet.includes(b),inD=R.sets.defter.includes(b);
   const say=b===R.mole?SU[b].sleep+BAR:b===R.liar&&!R.tail[b]?SU[b].sleep+(inD?BAR:''):(inN?SU[b].duty:SU[b].sleep)+(inD?' '+SU[b].early:'');
   body=`${Nf(b)} s’assied en face de toi. Tu lui demandes où ${g(b,'il','elle')} était les nuits des fuites.\n\n— ${say}`;
   R.alibi=R.alibi||{};R.alibi[b]=say;R.alibiK=R.alibiK||{};R.alibiK[b]={s:say.indexOf(SU[b].sleep)===0,k:say.indexOf(BAR)>=0}}
  else{if(b===R.mole){R.alert++;R.nervous[b]=1;body=SU[b].press+`\n\nPendant qu’${g(b,'il','elle')} parle, ses doigts ne cessent de tambouriner sur le bord de la table. ${cap(g(b,'il','elle'))} cache peut-être quelque chose.`}
   else if(b===R.liar&&R.contra[b]){body=SU[b].pressX+`\n\nVoilà donc la raison de l’incohérence dans la déposition. C’est pour ça que ${kn(b)} a caché où ${g(b,'il','elle')} était cette nuit-là.`;delete R.contra[b];R.liarOk=1;if(b===R.herring)R.expl[b]=1}
   else if(R.tail[b]==='secret'||(b===R.herring&&R.got.banka)){body=SU[b].pressX;if(b===R.herring)R.expl[b]=1}
   else body=SU[b].press}
  const nw=contraCheck(R)||[];R.res={ti:'Déposition · '+kn(b),b:body+(nw.length?'\n\n'+nw.map(x=>CW+' : '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='cl'){if(R.ap<=0||R.got[b]||R.destroyed[b])return;if(b==='banka'&&R.day<3)return;if(b==='izmarit'&&R.day<5&&!R.dropSeen)return;R.ap--;R.got[b]=1;R.menu=null;
  const S=R.sets[b];let body='';const noticed=Math.random()<.12;if(noticed)R.alert++;
  if(b==='telsiz')body=`Tu examines les enregistreurs de la salle des transmissions. Chaque nuit de fuite, toujours vers 02:10, il y a eu des transmissions chiffrées de quarante secondes. Elles ne venaient pas de l’extérieur, mais de la radio de secours de la salle des transmissions.\n\nSeules trois personnes ont la clé de cette salle : ${list(S)}.`;
  if(b==='nobet')body=`Tu compares les tableaux de service avec les relevés des badges d’accès. Les trois nuits de fuite, trois personnes étaient éveillées dans le bâtiment du QG entre 02:00 et 03:00 : ${list(S)}.`;
  if(b==='defter')body=`Tu lis le registre du poste de garde page après page. Les matins suivant les fuites, trois noms reviennent sans cesse, sortis de la caserne avant le lever du soleil : ${list(S)}.`;
  if(b==='not')body=`L’un des soldats qui tamisent les cendres du poêle du QG t’apporte un bout de papier à moitié brûlé. Une seule ligne est lisible : « Jeudi. Fontaine. 02. » ${SU[R.mole].hand==='solak'?'L’encre est étalée par endroits par la main qui a glissé sur la ligne ; l’auteur est gaucher':'L’encre est nette, les lettres penchent vers la droite ; l’auteur est droitier'}.\n\nLes suspects ${HAND[SU[R.mole].hand]}s : ${list(S)}.`;
  if(b==='izmarit')body=SU[R.mole].smoke?`La nuit, tu vas à la vieille fontaine et tu balaies les alentours à la lampe torche. Au pied de la pierre gît une poignée de mégots, tous de la même marque. Celui qui attend ici fume.\n\nLes suspects qui fument : ${list(S)}.`:`La nuit, tu vas à la vieille fontaine et tu balaies les alentours à la lampe torche. Il y a des traces de pas récentes, mais pas un seul mégot. Celui qui attend ici pendant des heures ne doit pas fumer.\n\nLes suspects non-fumeurs : ${list(S)}.`;
  if(b==='banka'){const m=R.mole;const t=x=>x==='kaya'?(x===m?'Les dettes de Kaya auprès des usuriers ont soudain été remboursées, chaque fois deux jours après une fuite.':'Le compte de Kaya montre des paiements réguliers à des usuriers ; il croule de toute évidence sous les dettes.'):x==='leyla'?(x===m?'En plus des petits virements de Leyla de l’autre côté de la frontière, un important dépôt en espèces est arrivé sur son compte après chaque fuite.':'Leyla envoie chaque mois de petits virements de l’autre côté de la frontière.'):`Des espèces ont été déposées trois fois sur le compte de ${kn(x)}, chaque fois deux jours après une fuite.`;
   body=`Avec l’accord du procureur, tu examines les relevés bancaires des suspects sur les trois derniers mois. Deux comptes présentent des mouvements inhabituels :\n\n${t(R.banka0=R.sets.banka[0])}\n\n${t(R.sets.banka[1])}`}
  if(noticed)body+='\n\nEn sortant, tu croises le regard de quelqu’un dans le couloir. Il a peut-être compris ce que tu cherchais.';
  const nw=contraCheck(R)||[];R.res={ti:CN[b],b:body+(nw.length?'\n\n'+nw.map(x=>CW+' : '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='tail'){if(R.ap<=0||R.tailDay===R.day)return;R.ap--;R.tailDay=R.day;R.menu=null;let body;const m=R.mole;
  if(b===m){if(DROP.includes(R.day)){R.tail[b]='witness';R.dropSeen=1;body=`À une heure et demie, ${nf(b)} se glisse discrètement hors du QG. Tu ${g(b,'le','la')} suis à distance. Près de la vieille fontaine sur la route de la frontière, une ombre attend. ${kn(b)} lui tend une enveloppe pliée ; l’ombre la glisse dans sa veste et se fond dans l’obscurité.\n\nTu l’as vu. Ce n’est plus un soupçon ; c’est un témoignage oculaire.`}
   else{const seen=Math.random()<.3;if(seen)R.alert++;body=`Tu surveilles ${nf(b)} toute la nuit. Couché${g(b,'','e')} tôt, la lumière s’allume une fois, puis le silence.${seen?'\n\nAvant l’aube, le rideau de la chambre s’écarte ; quelqu’un regarde dehors, droit vers ta cachette. On t’a peut-être repéré.':'\n\nIl ne s’est rien passé cette nuit.'}`}}
  else{if(R.tail[b]!=='secret'){R.tail[b]='secret';body=SU[b].secret;if(b===R.herring)R.expl[b]=1;if(b===R.liar&&R.contra[b]){delete R.contra[b];R.liarOk=1;body+=`\n\nCela explique aussi l’incohérence dans la déposition de ${kn(b)}.`}}else body=`Tu files à nouveau ${nf(b)}, mais il ne se passe rien d’inhabituel cette nuit.`}
  R.res={ti:'Filature de nuit · '+kn(b),b:body};return}
 if(a==='trap'){if(R.trap||R.day<5||R.day>9||R.ap<=0)return;if(b==='go'){const x=c.split(',');if(x.length!==2)return;R.ap--;R.trap={a:x[0],b:x[1],day:R.day,res:null};R.menu=null;R.tsel=[];
   R.res={ti:'Piège tendu',b:`Tu parles ${aN(x[0])} d’un raid prévu dans la vallée nord, et ${aN(x[1])} d’un convoi qui attend au pont sud. Les deux sont faux, et chacun n’a été confié qu’à une seule personne.\n\nMaintenant, il faut attendre. La prochaine nuit de fuite montrera quelle piste est parvenue à l’ennemi.`};return}
  R.tsel=R.tsel||[];const i=R.tsel.indexOf(b);if(i>=0)R.tsel.splice(i,1);else if(R.tsel.length<2)R.tsel.push(b);return}
 if(a==='acc'){R.menu='accuse';R.accSel=b;return}
 if(a==='accgo'){KB.confront(R,b);return}
 if(a==='fin'){R.end=b;return}}
function endDay(R){const ev=nightEvents(R);R.lastNight=ev;R.day++;R.res=null;R.menu=null;
 if(R.day>DAYS){R.end='kacti';R.endWhy='time';return}
 R.ap=AP-(R.apPenalty||0);R.apPenalty=0;R.phase='night'}
const av=(id,sz=40)=>`<span class="kav" style="--c:${SU[id].c};width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.38)}px">${SU[id].k.slice(0,1)}</span>`;
const md=s=>fmt32(String(s).replace(/\*\*([^*]+)\*\*/g,'⟦$1⟧')).replace(/⟦([^⟧]+)⟧/g,'<b>$1</b>').replace(/CONTRADICTION :|CONTRADICTION:|ÇELİŞKİ:/g,'<span class="kcontra">'+CW+'</span>');
function header(R){return `<div class="khead"><div><span class="lbl">Jour</span><b class="num">${Math.min(R.day,DAYS)}<small>/${DAYS}</small></b></div>
 <div><span class="lbl">Actions</span><div class="kap">${Array.from({length:AP},(_,i)=>`<i class="${i<R.ap?'on':''}"></i>`).join('')}</div></div>
 <div><span class="lbl">Tués</span><b class="num red">${23+R.kia}</b></div></div>${R.alert>=2?'<div class="kwarn">La taupe est sur ses gardes et a commencé à effacer ses traces.</div>':''}`}
function board(R){const rows=IDS.map(x=>({x,...(str(R,x)||{})}));const mx=Math.max(6,...rows.map(r=>r.s||0));
 return `<div class="card kboard"><div class="sec-h"><h2>Tableau des preuves</h2></div>
 ${rows.map(r=>`<div class="krow${r.s<0?' clr':''}">${av(r.x,34)}<div class="grow"><div class="kn"><b>${esc(SU[r.x].n)}</b>${r.s<0?'<span class="kclr">Innocenté</span>':''}</div>
  ${r.s>=0?`<div class="ksus"><i style="width:${Math.min(100,(r.s/mx)*100)}%"></i></div>`:''}${r.tags&&r.tags.length?`<div class="ktags">${r.tags.map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')}</div>`:''}</div></div>`).join('')}</div>`}
const CHS=[{ti:'La mission',sub:'Six suspects · jours 1–2'},{ti:'L’enquête',sub:'Dépositions et registres · jours 3–6'},{ti:'Le piège',sub:'Fausses pistes et filatures · jours 7–9'},{ti:'La confrontation',sub:'La salle d’interrogatoire · jour 10'}];
function chOf(R){return R.end?3:R.phase==='brief'?0:R.day<=2?0:R.day<=6?1:R.day<=9?2:3}
const KD={telsiz:'D’où venaient les émissions chiffrées ?',nobet:'Qui était éveillé les nuits de fuite ?',defter:'Qui a quitté la caserne le matin ?',not:'Des papiers brûlés dans le poêle',izmarit:'La vieille fontaine sur la route de la frontière',banka:'Des mouvements d’argent inhabituels'};
function view(R){const KI=VIEWTR.KI,ART=VIEWTR.ART;
 if(R.phase==='brief'){const B=BRIEF[R.bi];return `${R.bi===0?`<div class="tchap32"><span>Chapitre 1</span><b class="stencil">La mission</b></div>`:''}<div class="tart32">${ART.hq()}</div><div class="tbody32"><h3 class="stencil">${esc(B.ti)}</h3>${md(B.b)}</div>
  ${R.bi===2?`<div class="ksus6">${IDS.map(x=>`<div>${av(x,36)}<span><b>${esc(SU[x].n)}</b><small>${esc(SU[x].bio)}</small></span></div>`).join('')}</div>`:''}
  <button class="btn block" data-a="kb" data-v="bn">${R.bi<2?'Continuer':'Commencer l’enquête'}</button>`}
 if(R.phase==='night'){const ch=chOf(R);const newCh=[3,7,10].includes(R.day);return `${newCh?`<div class="tchap32"><span>Chapitre ${ch+1}</span><b class="stencil">${esc(CHS[ch].ti)}</b></div>`:''}<div class="tart32">${ART.night()}</div>
  <div class="tbody32"><h3 class="stencil">Nuit</h3>${R.lastNight.length?md(R.lastNight.join('\n\n')):'<p>La nuit a été calme. Une à une, les lumières du QG s’éteignent.</p>'}</div>
  <button class="btn block" data-a="kb" data-v="morning">Le jour ${R.day} commence ›</button>`}
 if(R.phase==='turn'){const M=R.mole;return `<div class="tart32">${ART.room()}</div><div class="tbody32"><h3 class="stencil">Une occasion</h3>${md(`${Nf(M)} est ${g(M,'assis','assise')} en face de toi dans la salle d’interrogatoire. Les preuves sont sur la table ; impossible de nier. Ses épaules s’affaissent.\n\nMais tu as une idée : la taupe est un canal qui transmet de fausses informations à l’ennemi. L’ennemi lui fait toujours confiance, car ${g(M,'il','elle')} n’a jamais été sur ses gardes ni effacé ses traces. Au lieu de l’arrêter, tu pourrais t’en servir.`)}</div>
  <div class="topts32"><button class="opt op2" data-a="kb" data-v="fin:ag"><span class="k">A</span><span class="grow">L’arrêter. Que le traître reçoive ce qu’il mérite.</span></button><button class="opt op2" data-a="kb" data-v="fin:cift"><span class="k">B</span><span class="grow">Faire une offre : ${g(M,'il','elle')} transmettra à l’ennemi les informations que nous choisirons, et en échange, ${g(M,'il','elle')} aura la vie sauve.</span></button></div>`}
 let h=header(R);
 if(R.res){return h+`<div class="tbody32 kres${R.res.contra?' hot':''}"><h3 class="stencil">${esc(R.res.ti)}</h3>${md(R.res.b)}</div><button class="btn block" data-a="kb" data-v="ok">${R.ap<=0?'Terminer la journée ›':'OK'}</button>`}
 const back=`<button class="btn ghost block" data-a="kb" data-v="menu:">‹ Retour</button>`;
 if(R.menu==='iv')return h+`<div class="card"><div class="sec-h"><h2>Qui vas-tu interroger ?</h2></div><p class="small muted">Tu peux parler à chaque suspect une fois par jour. À la deuxième conversation, tu fais pression.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="iv:${x}"${R.ivDay[x]===R.day?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${esc(SU[x].r)} · ${R.iv[x]?(R.iv[x]===1?'Entendu une fois':'Mis sous pression'):'Pas encore interrogé'}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='cl')return h+`<div class="card"><div class="sec-h"><h2>Où vas-tu chercher ?</h2></div>${CLUES.map(c=>{const lock=c==='banka'&&R.day<3?'À partir du jour 3 (accord du procureur)':c==='izmarit'&&R.day<5&&!R.dropSeen?'Le point de rendez-vous n’est pas encore connu':R.destroyed[c]?'La taupe a détruit cette preuve':R.got[c]?'Examiné':'';return `<button class="kpick" data-a="kb" data-v="cl:${c}"${lock?' disabled':''}><span class="kic">${KI[c]}</span><span class="grow"><b>${esc(CN[c])}</b><small>${esc(lock||KD[c])}</small></span>${lock?'':'<span class="chev">›</span>'}</button>`}).join('')}</div>`+back;
 if(R.menu==='tail')return h+`<div class="card"><div class="sec-h"><h2>Qui vas-tu filer cette nuit ?</h2></div><p class="small muted">Tu ne peux filer qu’une personne par nuit. Si la taupe s’en aperçoit, elle se mettra sur ses gardes.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="tail:${x}">${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.tail[x]==='secret'?'Déjà filé':R.tail[x]==='witness'?'Vu avec le courrier':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='trap'){const sel=R.tsel||[];return h+`<div class="card"><div class="sec-h"><h2>Tendre un piège</h2></div><p class="small">Choisis deux suspects. Tu donneras à chacun une fausse piste opérationnelle différente. Si, lors de la prochaine fuite, l’ennemi agit sur l’une d’elles, cette personne est la taupe ; s’il n’agit sur aucune, les deux sont innocentés. <b>Tu ne peux tendre le piège qu’une seule fois.</b></p>${IDS.map(x=>`<button class="kpick${sel.includes(x)?' on':''}" data-a="kb" data-v="trap:${x}"${R.cleared[x]?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.cleared[x]?'Innocenté':sel.includes(x)?(sel.indexOf(x)===0?'Piste de la vallée nord':'Piste du pont sud'):esc(SU[x].r)}</small></span><span class="kchk">${sel.includes(x)?'✓':''}</span></button>`).join('')}</div>
  <button class="btn block" data-a="kb" data-v="trap:go:${sel.join(',')}"${sel.length===2?'':' disabled'}>Donner les fausses pistes</button>`+back}
 if(R.menu==='board')return h+board(R)+`<div class="card"><div class="sec-h"><h2>Dépositions</h2></div>${IDS.filter(x=>R.alibi&&R.alibi[x]).map(x=>`<div class="kst">${av(x,28)}<p><b>${esc(SU[x].k)} :</b> « ${esc(R.alibi[x])} »</p></div>`).join('')||'<p class="small muted">Tu n’as encore recueilli aucune déposition.</p>'}</div>
  <div class="card"><div class="sec-h"><h2>Preuves</h2></div>${CLUES.filter(c=>R.got[c]).map(c=>`<div class="kcl"><span class="kic">${KI[c]}</span><span><b>${esc(CN[c])}</b><small>${c==='banka'?esc(R.sets.banka.map(kn).join(' et ')+' : mouvements inhabituels'):c==='not'?esc('Auteur '+HAND[SU[R.mole].hand]+' : '+R.sets.not.map(kn).join(', ')):c==='izmarit'?esc((SU[R.mole].smoke?'Fumeurs : ':'Non-fumeurs : ')+R.sets.izmarit.map(kn).join(', ')):esc(R.sets[c].map(kn).join(', '))}</small></span></div>`).join('')||'<p class="small muted">Tu n’as encore réuni aucune preuve.</p>'}</div>`+back;
 if(R.menu==='accuse'){const x=R.accSel;if(x){const S=str(R,x);return h+`<div class="card kacc">${av(x,64)}<h2 class="stencil">${esc(SU[x].n)}</h2><p class="small muted">${esc(SU[x].r)}</p>
   <div class="ktags">${S.tags.filter(t=>t[1]!=='o').map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')||'<span class="small muted">Tu n’as presque aucune preuve contre cette personne.</span>'}</div>
   <p>Tu l’emmèneras dans la salle d’interrogatoire et tu poseras les preuves sur la table. Si tu te trompes, une vie innocente est brisée et la vraie taupe s’enfuit. <b>Cette décision est irrévocable.</b></p></div>
   <button class="btn warn block" data-a="kb" data-v="accgo:${x}">Accuser ${esc(kn(x))}</button><button class="btn ghost block" data-a="kb" data-v="acc:">‹ Choisir quelqu’un d’autre</button>`}
  return h+`<div class="card"><div class="sec-h"><h2>Qui vas-tu accuser ?</h2></div>${IDS.map(x=>{const S=str(R,x);return `<button class="kpick" data-a="kb" data-v="acc:${x}"${S.s<0?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${S.s<0?'Innocenté':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`}).join('')}</div>`+back}
 const N=morning(R);
 return h+(N.length?`<div class="kmorn"><span class="lbl">Rapport du matin · Jour ${R.day}</span>${md(N.join('\n\n'))}</div>`:'')+
 `<div class="kacts">
  <button class="kact" data-a="kb" data-v="menu:iv"${R.ap?'':' disabled'}><span class="kic">${KI.iv}</span><b>Recueillir une déposition</b><small>Parler à un suspect</small></button>
  <button class="kact" data-a="kb" data-v="menu:cl"${R.ap?'':' disabled'}><span class="kic">${KI.cl}</span><b>Réunir des preuves</b><small>Registres, journaux</small></button>
  <button class="kact" data-a="kb" data-v="menu:tail"${R.ap&&R.tailDay!==R.day?'':' disabled'}><span class="kic">${KI.tail}</span><b>Filature de nuit</b><small>${R.tailDay===R.day?'Quelqu’un est filé cette nuit':'Suivre quelqu’un'}</small></button>
  <button class="kact" data-a="kb" data-v="menu:trap"${R.ap&&!R.trap&&R.day>=5&&R.day<=9?'':' disabled'}><span class="kic">${KI.trap}</span><b>Tendre un piège</b><small>${R.trap?(R.trap.res?'Piège résolu':'Piège tendu, en attente'):R.day<5?'À partir du jour 5':R.day>9?'Plus le temps':'Semer de fausses infos'}</small></button>
 </div>${rings(R)}
 <div class="kbar"><button class="btn ghost" data-a="kb" data-v="menu:accuse"${R.day>=5?'':' disabled'}>${R.day>=5?'Accuser':'Accuser · jour 5'}</button><button class="btn" data-a="kb" data-v="night">Terminer la journée ›</button></div>`}
function rings(R){const rows=IDS.map(x=>({x,...str(R,x)}));const mx=Math.max(6,...rows.map(r=>r.s));
 return `<button class="kring-card" data-a="kb" data-v="menu:board"><div class="sec-h"><span class="lbl">Tableau des preuves</span><span class="small acc">Détails ›</span></div><div class="krings">${rows.map(r=>{const h=r.s<0?0:Math.min(1,r.s/mx);return `<div class="kr${r.s<0?' clr':''}${r.s>0?' hot':''}" style="--h:${h.toFixed(2)}"><span class="kr-ring">${av(r.x,38)}${r.s>0?`<em>${r.s}</em>`:''}</span><small class="notr">${esc(SU[r.x].k)}</small></div>`}).join('')}</div></button>`}
function endText(R){const m=R.mole,x=R.accused,kia=23+R.kia,il=id=>g(id,'il','elle');
 if(R.end==='ag')return `${R.bluff?`Tes preuves sont minces ; tu le sais aussi. Mais tu t’assieds en face ${dN(m)} comme si tu savais tout. À la troisième heure, ${il(m)} craque.`:`Tu poses les preuves sur la table, une à une. ${Nf(m)} nie d’abord, puis se tait, puis se met à parler.`}

— C’était pour l’argent, dit-${il(m)}. Puis ça a été la peur. Une fois qu’on a commencé, on ne peut plus s’arrêter.

Grâce aux noms qu’${il(m)} donne, le courrier du village frontalier et deux complices sont arrêtés la nuit même. Le réseau s’effondre.

Une semaine plus tard, la générale Ateş te convoque dans son bureau. Sur la table, une liste de ${kia} noms.

— Nous ne pouvons pas les ramener, commandant. Mais aucun nouveau nom ne s’ajoutera à cette liste. Vous y avez veillé.`;
 if(R.end==='cift')return `Les mains tremblantes, ${nf(m)} accepte ton offre.

Pendant les six mois suivants, l’ennemi reçoit de la source en qui il a confiance des rapports écrits par nous. Fausses positions, unités qui n’existent pas, offensives qui n’auront jamais lieu…

Au printemps, la division la plus puissante de l’ennemi passe trois jours à encercler une vallée vide. Pendant ces trois jours, nos unités percent le front.

Personne ne connaîtra ton nom. Il ne figurera dans aucun rapport sur cette opération. La générale Ateş se contente de te serrer la main :

— Certaines victoires se gagnent en silence, commandant. Les plus grandes, le plus souvent.`;
 if(R.end==='yanlis')return `${Nf(x)} est ${g(x,'arrêté','arrêtée')}. Pendant qu’on lui passe les menottes, ${il(x)} te regarde ; dans ses yeux, pas de colère, seulement de l’incompréhension.

— Vous vous trompez, dit-${il(x)}. Un jour, vous comprendrez.

Trois semaines plus tard, une autre opération tombe dans une embuscade. Puis une autre.

Des mois plus tard, un courrier arrêté à la frontière donne un seul nom : ${nm(m)}. Mais ${kn(m)} a depuis longtemps passé la frontière et disparu.

${Nf(x)} est ${g(x,'libéré','libérée')}. Tu vas l’attendre à la porte. Tu lui tends la main ; ${il(x)} ne la prend pas.

On t’avait dit de ne faire confiance à personne. Il semble que tu n’aurais pas dû non plus te fier aveuglément aux preuves.`;
 return R.endWhy==='weak'?`Tes preuves n’ont pas suffi. ${Nf(m)} a gardé son sang-froid dans la salle d’interrogatoire et avait réponse à chaque accusation. Le procureur a ordonné sa libération.

Le lendemain matin, le lit de ${kn(m)} était vide. Les registres du poste-frontière indiquaient qu’un véhicule était passé de l’autre côté à minuit.

Tu as trouvé la taupe, mais tu n’as pas pu l’attraper.`:`Les dix jours sont écoulés. La générale Ateş a clôturé l’enquête.

La fuite au QG Est a continué encore deux mois. Puis une nuit, ${nf(m)} a disparu sans laisser de trace. Une semaine plus tard, ${il(m)} apparaissait à la télévision ennemie, souriant${g(m,'','e')}.

La liste des pertes a atteint ${kia+11} noms.`}
const VIEWTR={KI:KB.KI,ART:KB.ART};
const T=KB.T;
T.fr={ti:'La Taupe',genre:'Espionnage · Enquête',sub:'Démasque le traître du QG en 10 jours',
 pitch:'Les trois dernières opérations sont tombées dans des embuscades. Quelqu’un au QG Est fait fuiter des informations, et tu as 10 jours. Recueille des dépositions, examine les registres, file les suspects la nuit, tends des pièges avec de fausses informations. La taupe peut être une personne différente à chaque partie. Accuse la mauvaise et un innocent paiera pendant que le vrai traître s’échappe.',
 chapters:CHS,
 endings:[{k:'ag',ti:'Réseau démantelé',medal:'Chasseur d’ombres',tone:'good'},{k:'cift',ti:'Agent double',medal:'Insigne invisible',tone:'good'},{k:'yanlis',ti:'La mauvaise personne',tone:'bad'},{k:'kacti',ti:'La taupe s’est échappée',tone:'bad'}],
 view,endText,subtitle:R=>R.end?'Fin':R.phase==='brief'?'Chapitre 1 · La mission':`Jour ${Math.min(R.day,DAYS)} · ${CHS[chOf(R)].ti}`};
window.__KBL=window.__KBL||{};window.__KBL.fr=act;
})();
