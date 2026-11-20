/* HİKÂYE · KRİZ MASASI · Fransızca metin katmanı (mantık st_kriz.js'ten gelir) */
(function(){
const sel=fl=>fl.savak?'yok':fl.tahliye?'bos':fl.gecUyari?'hafif':'agir';
const bildi=fl=>fl.iddia||fl.nuri||fl.sor||fl.dosya||fl.ucuncu;
TALE_FR.kriz={
 meta:{ti:'Cellule de crise',genre:'Politique · Thriller',sub:'48 heures, 14 otages, un barrage et un rapport que personne n’a lu',
  pitch:'À minuit, des hommes armés s’emparent du bâtiment de contrôle d’un barrage : quatorze otages à l’intérieur, une ville endormie neuf kilomètres plus bas. Tu diriges la cellule de crise. D’un côté, une générale qui veut donner l’assaut ; de l’autre, une négociatrice qui veut parler ; et en face, un vice-ministre qui veut en finir vite. L’homme qui détient les otages est-il un terroriste, ou un lanceur d’alerte que personne n’a écouté ?',
  chapters:[{ti:'Premier contact',sub:'Heures 00–06'},{ti:'Négociation',sub:'Heures 06–18'},{ti:'Point de rupture',sub:'Heures 18–30'},{ti:'Dernière offre',sub:'Heures 30–42'},{ti:'L’aube',sub:'Heures 42–48'}],
  statDefs:[['rehine','Confiance des otages','var(--green)'],['kamuoyu','Opinion publique','var(--acc)'],['masa','Unité de l’équipe','var(--blue)']]},
 medal:'Médaille de la cellule de crise',
 end:{gercek:'La vérité',sessiz:'Victoire silencieuse',baskin:'Assaut dans la tempête',bedel:'Un lourd tribut',sel:'Yeşilova',azil:'Relevé de ses fonctions',kayip:'Matin noir'},
 scenes:{
k1:{b:`03 h 12. Le téléphone te réveille à la deuxième sonnerie.

— Monsieur, le bâtiment de contrôle du barrage de Yıldızdere a été pris. Cinq hommes armés. Quatorze employés à l’intérieur.

Vingt minutes plus tard, le dossier est devant toi. Le barrage domine la ville de Yeşilova, neuf kilomètres plus bas. Vingt-deux mille personnes y dorment. Qui tient le bâtiment de contrôle peut ouvrir les vannes de l’évacuateur quand il veut.

Le chef des assaillants a appelé une fois et n’a dit qu’une phrase : « Je parlerai à celui qui commande. »

Le décret a été signé il y a cinq minutes. Tu diriges désormais la cellule de crise.

Où vas-tu d’abord ?`,
 ch:['Prendre un hélicoptère jusqu’au barrage. Voir les lieux de tes propres yeux.','Rester au centre de crise de la capitale. Diriger la cellule de là-bas.']},
k2:{b:(st,fl)=>`${fl.yer==='saha'
 ?'On a transformé le poste de gendarmerie, trois kilomètres sous le barrage, en centre de crise. Par la fenêtre, tu vois les projecteurs du barrage, chacun comme un œil suspendu dans le noir.'
 :'Le mur du centre de crise de la capitale est couvert d’écrans. Les caméras de sécurité du barrage sont noires depuis dix minutes.'}

Trois personnes sont assises à la table.

La générale de brigade Oya Demirel, des forces spéciales. Cheveux courts, peu de mots. « Donnez-moi deux heures et je connaîtrai chaque recoin de ce bâtiment. »

La commissaire divisionnaire Selin Uçar, quinze ans de négociation. « Ne le faites pas attendre. Un homme qui attend se met à se parler à lui-même. »

Le vice-ministre Haldun Sezer. Sa cravate est impeccable, même à minuit. « La presse sera bientôt au courant. Maîtrisons d’abord le flux d’informations. »

Tous les trois te regardent. Quel est ton premier ordre ?`,
 ch:['Selin a raison. Appelez-le tout de suite et gardez la ligne ouverte.','D’abord bouclez le périmètre et placez les tireurs d’élite. L’appel peut attendre une heure.','D’abord un black-out médiatique. Ensuite on appelle.']},
k3:{b:(st,fl)=>`${fl.bekletti
 ?`Une heure et quatorze minutes plus tard, la ligne s’ouvre. La voix est froide :

— Vous m’avez fait attendre une heure. Une heure de plus et j’ouvrais une des vannes. Sachez-le.`
 :'La ligne s’ouvre à la deuxième sonnerie.'}

— Je m’appelle Arman Kesk. J’ai travaillé neuf ans comme technicien dans ce barrage. Je ne suis pas un terroriste. Mais je ne repartirai pas d’ici les mains vides ce soir.

Sa voix est calme ; il choisit ses mots avec soin. Selin écrit un seul mot sur un papier et te le montre : *Instruit.*

— J’ai trois exigences. Un, qu’on libère mon frère Serdar Kesk. Deux, que je parle en direct à la télévision. Trois…

Il marque une pause.

— La troisième, je vous la dirai plus tard. D’abord, je veux voir que vous me prenez au sérieux.

Que réponds-tu ?`,
 ch:['« Je vous écoute. Prouvez-moi d’abord que les otages vont bien. »','« Je ne négocie pas sous la menace d’une arme. Libérez les otages, ensuite nous parlerons. »','« Dites-moi votre troisième exigence maintenant. Je suis sérieux. »']},
k4:{b:(st,fl)=>`${fl.kanit
 ?`Arman passe le téléphone à quelqu’un. Une voix âgée et tremblante :

— Ici Halil Turan, chef d’équipe. Nous allons tous bien. Ils n’ont fait de mal à personne.

Puis il baisse la voix :

— Monsieur, faites vérifier la troisième galerie…

La ligne est coupée.`
 :fl.ucuncu
 ?`Arman se tait longtemps.

— La troisième, c’est un rapport, dit-il enfin. Le rapport de réception du barrage. Le vrai, pas celui qu’on vous a montré.

La ligne est coupée.`
 :`Arman lâche un rire bref.

— Commandant, il y a quatorze personnes dans ce bâtiment. Et vingt-deux mille neuf kilomètres plus bas. Si vous ne négociez pas, pourquoi avez-vous appelé ?

La ligne est coupée.`}

04 h 50. L’officier de permanence apparaît à la porte.

— Monsieur, il y a un vieil homme au téléphone. Nuri Bilgin. Il dit qu’il était l’un des ingénieurs qui ont construit le barrage. « Je connais Arman, je dois parler au commandant », dit-il. Il a appelé onze fois cette nuit.

Haldun secoue la tête.

— Tous les fouineurs vont appeler cette nuit. Ne perdons pas notre temps.`,
 ch:['Passez-moi Nuri Bilgin. Je lui accorde cinq minutes.','Qu’un officier l’écoute. Si c’est important, il me le transmettra.']},
k5:{b:(st,fl)=>`${fl.nuri?`La voix de Nuri Bilgin est fatiguée mais claire :

— Arman était mon apprenti. Ce garçon ne tuerait personne. Mais il a peur de quelque chose, et il a peut-être raison. Je dois vous parler en face.

Tu envoies une voiture le chercher.

`:''}05 h 40. Selin pose sa tablette sur la table. Une vidéo de quarante secondes, filmée avec le téléphone d’un des otages, a fuité sur Internet. L’ingénieure stagiaire Ece Yalın pleure et appelle sa mère. Deux millions de vues en une heure.

${fl.yasak?'Le black-out médiatique n’a pas empêché la vidéo de circuler. Il a même nourri la question : « Que cachent-ils ? »':'Les chaînes d’information la passent déjà dans leurs bandeaux.'}

Haldun se lève.

— Le ministre attend une déclaration. Maintenant.

Que vas-tu dire ?`,
 ch:['« La situation est entièrement sous notre contrôle. »','« Nous œuvrons pour la sécurité des otages. Je ne peux pas donner de détails pour l’instant. »','Ne faire aucune déclaration. Garder le silence.']},
k6:{b:(st,fl)=>`06 h 05. Le jour se lève. L’équipe d’Oya a passé la nuit à cartographier le bâtiment.

— Monsieur, nous avons observé la relève. À 6 h 30, deux des cinq hommes vont dormir. Si nous entrons en même temps par la porte principale et par le toit, nous pouvons sortir la plupart des quatorze otages.

*La plupart.* Le mot reste suspendu au-dessus de la table.

Selin intervient aussitôt :

— Arman veut son frère, pas mourir. Nous n’avons même pas encore vraiment parlé.

Haldun regarde sa montre. Il ne dit rien, mais on voit bien ce qu’il pense.

La décision t’appartient.`,
 ch:['Pas d’assaut. On continue de parler.','Autoriser l’assaut à l’aube.']},
k7a:{b:`L’équipe est à l’intérieur en six minutes. Elle fait sortir six otages, dont Ece Yalın, la jeune femme de la vidéo.

Mais Arman et ses hommes se replient dans la salle des turbines avec les huit otages restants. Ils soudent la porte d’acier de l’intérieur. Personne n’est mort ; mais entrer est désormais bien plus difficile.

Vingt minutes plus tard, Arman appelle. Sa voix tremble, mais pas de peur. De rage.

— Vous m’avez menti. Recommencez et j’ouvre les vannes. Toutes.`,ch:['Continuer.']},
k7b:{b:`La porte du toit est piégée. L’explosion projette en arrière l’homme de tête. On ouvre le feu de l’intérieur ; le technicien Mehmet Er est touché à la jambe. Oya doit replier l’équipe.

Puis la voix d’Arman :

— Vous l’avez cherché.

La première vanne de l’évacuateur s’ouvre d’un demi-mètre. Neuf kilomètres plus bas, les sirènes de Yeşilova se mettent à hurler. Dix minutes plus tard, la vanne se referme. C’était un avertissement.`,ch:['Continuer.']},
m1:{b:(st,fl)=>`08 h 00. ${fl.ihanet
 ?`Arman ne décroche plus depuis deux heures. Quand il répond enfin, il pose une seule condition :

— Désormais, je ne parle qu’à la policière. Pas à vous.`
 :'Cette fois, c’est Arman qui appelle. On entend la nuit blanche dans sa voix.'}

— Vous avez douze heures pour mon frère. Si Serdar n’est pas devant ce barrage à 20 h, j’ouvre la première vanne en grand.

Selin pose son stylo.

— Ils vont demander de la nourriture et des médicaments, dit-elle. Ils manquent d’eau là-dedans. Nous pourrions demander quelques otages en échange.

Haldun s’y oppose :

— Pas d’échange de détenus. L’État ne fait pas ça.

Arman est toujours en ligne, il attend une réponse.`,
 ch:['Demander deux otages contre de la nourriture et des médicaments.','Lui proposer de parler à Serdar au téléphone.','Gagner du temps avec un prétexte de « problème technique ».']},
m2:{b:(st,fl)=>`${fl.takas?`09 h 40. Les caisses de nourriture sont déposées à la porte. Dix minutes plus tard, deux personnes sortent les mains en l’air : ${fl.alti?'le vieux gardien de nuit Rıza et le technicien Yusuf':'la stagiaire Ece Yalın et le vieux gardien de nuit Rıza'}. Tous deux sont indemnes.

`:fl.takasRed?`09 h 40. Arman refuse l’offre. « Personne ne sort. Reprenez votre nourriture et mangez-la vous-mêmes. »

`:fl.kardes?`09 h 40. Tu mets Serdar en ligne depuis la prison. Les deux frères parlent trois minutes. Même après avoir raccroché, la voix d’Arman est plus douce.

`:''}${fl.nuri
 ?`10 h 30. Nuri Bilgin arrive au centre de crise. Il a soixante et onze ans et porte un carnet jauni.

— Nous avons construit ce barrage il y a trente ans, dit-il. L’entrepreneur était Akbel Construction. Le béton de la troisième galerie a échoué aux essais de laboratoire. Je me suis opposé, et on m’a écarté du projet. Arman était mon apprenti à l’époque. Il sait tout.

Il ouvre le carnet : mesures, dates, signatures.

— Arman se sert de son frère comme prétexte, dit-il. Ce qu’il veut vraiment, c’est ce rapport. Le rapport de réception du barrage est un faux.`
 :`10 h 30. Le drone d’Oya balaie le parement aval du barrage. Un détail attire ton regard sur les images : en plein été, un mince filet d’eau continu suinte de la sortie de la troisième galerie.

— Sans doute rien, dit Oya. Les vieux barrages transpirent.`}`,
 ch:['Lancer discrètement une inspection structurelle du barrage.','La structure du barrage n’est pas notre priorité. Se concentrer sur les otages.']},
m3:{b:(st,fl)=>`${fl.kontrol?`11 h 20. Un bref rapport arrive de l’équipe de maintenance du barrage : les instruments de surveillance de la troisième galerie ont été coupés il y a deux ans pour « panne ». Personne n’a fait de relevé depuis.

`:''}12 h 00. Haldun raccroche et vient à la table.

— Le ministre veut que ce soit réglé avant le journal du soir. La générale Demirel est prête. Si vous approuvez un assaut à midi, nous vous couvrirons.

Le téléphone de Haldun vibre de nouveau. Tu aperçois l’écran : *Akbel Construction · Conseil d’administration.*

${fl.kontrol||fl.nuri?'Haldun range le téléphone sans répondre. Il remarque que tu l’observes.':'Haldun rejette l’appel.'}`,
 ch:['Je ne décide pas selon un calendrier politique. Pas d’assaut.','Je veux les dossiers du barrage d’Akbel Construction sur mon bureau. Maintenant.','Préparez un assaut à midi. Mais c’est moi qui trancherai.'],
 why:[null,'Tu n’as aucun soupçon concernant le barrage.']},
m4:{b:(st,fl)=>`14 h 00. ${fl.ogle?`Alors que l’équipe d’Oya prend position, Arman appelle. Comme s’il voyait tout :

— Je vois vos hommes sur le toit. Retirez-les, ou la discussion est finie.

Oya retire l’équipe. L’assaut de midi est annulé.

`:''}Arman répète sa deuxième exigence : la télévision en direct. Trois minutes. Sans coupure.

Haldun est catégorique :

— Nous ne pouvons pas offrir une tribune à un homme armé.

Selin voit les choses autrement :

— S’il parle, il se calmera. S’il ne peut pas, il explosera.

Oya propose une solution technique :

— Nous pourrions monter une fausse émission. La caméra enregistre, mais rien ne passe à l’antenne.`,
 ch:['Autoriser une diffusion contrôlée avec dix secondes de différé.','Monter une fausse émission.','Refuser la diffusion.']},
m4b:{b:(st,fl)=>fl.yakalandi
 ?`Arman vérifie la diffusion sur une petite radio à l’intérieur. Quand il n’entend sa voix sur aucune chaîne, il fracasse la caméra par terre.

Un coup de feu résonne dans la ligne. Un des techniciens est touché à l’épaule.

— Mentez-moi encore, dit Arman, et la prochaine balle ne manquera pas sa cible.`
 :`${fl.sahte?'Arman parle à la caméra. Ses mots n’apparaissent que sur l’écran du centre de crise.':'Le visage d’Arman apparaît sur les écrans. Épuisé, mal rasé, il regarde droit dans l’objectif.'}

— Je m’appelle Arman Kesk. Je viens du village de Taşlıca. Mon village est sous la retenue de ce barrage. Ce que j’ai fait cette nuit est un crime, je le sais. Mais il y a une fissure dans la troisième galerie. Ce barrage a été construit il y a trente ans avec un béton non conforme, et ceux qui savaient se sont tus. Je m’adresse à tous les habitants de Yeşilova : exigez une évacuation. Quand cette émission sera finie, faites de moi ce que vous voudrez.

${fl.sahte?'L’écran devient noir. Personne ne l’a entendu. Seulement toi et ceux qui sont à cette table.':'Quand les écrans s’éteignent, personne à la table ne parle. Haldun est livide.'}`,ch:['Continuer.']},
m5:{b:(st,fl)=>`17 h 30. Selin lève les yeux de la ligne.

— Halil Turan fait peut-être une crise cardiaque. Il a soixante-deux ans et ses médicaments sont chez lui. Arman demande un médecin.

Oya y voit aussitôt une occasion :

— J’ai un infirmier de combat. Il entre déguisé en médecin, voit l’intérieur, et pose peut-être un micro.

Selin s’y oppose :

— S’il est démasqué, tout est fini. ${fl.ihanet?'Il ne nous fait déjà plus confiance. Il ne nous fera plus jamais confiance.':'Il ne nous fera plus jamais confiance.'}`,
 ch:['Envoyer un vrai médecin.','Envoyer l’infirmier déguisé en médecin.','Pas de médecin. D’abord, deux otages libérés.']},
r1:{b:(st,fl)=>`${fl.doktor?'Le médecin reste une heure à l’intérieur et stabilise Halil. En sortant, il te dit une seule chose : « Les gens là-dedans ont plus peur de l’homme à côté d’Arman que de vous. »':fl.icerde?'L’infirmier revient une heure plus tard. Il y a quatre hommes armés à l’intérieur, pas cinq. Les explosifs sont réels, mais reliés uniquement aux moteurs des vannes. L’un d’eux, un gamin nommé Bora, est au bord des larmes. Le micro est en place.':fl.doktorYak?'L’infirmier est démasqué lors de la fouille à la porte. Arman le malmène et le renvoie. Les médicaments de Halil n’entrent qu’une heure plus tard.':'Arman ne libère personne. Il ne dit rien non plus de l’état de Halil.'}

22 h 10. L’alarme de niveau de la retenue se déclenche. Le niveau a baissé de douze centimètres en une heure. La rivière qui traverse Yeşilova approche de la cote de crue.

Oya : — Il a ouvert les vannes. C’est un avertissement.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin se penche vers l’écran. Ses mains tremblent. — Non, dit-il. Les vannes sont fermées, regardez les journaux des moteurs. Cette eau vient de la troisième galerie. La fissure s’ouvre.'
 :'Mais les journaux des moteurs des vannes n’indiquent aucun mouvement. L’eau vient d’ailleurs, et personne ne sait d’où.'}`,
 ch:['Évacuer discrètement Yeşilova cette nuit.','Une évacuation provoquerait la panique. Attendre et observer.','Interroger directement Arman sur la fissure.'],
 why:[null,null,'Tu ne sais rien d’une fissure.']},
r2:{b:(st,fl)=>fl.sor
 ?`— Alors vous savez, dit Arman. Pour la première fois, sa voix se brise.

— Il y a trente ans, maître Nuri s’est opposé, et on l’a renvoyé. Je garde l’original de ce rapport depuis dix ans. Je l’ai envoyé au préfet, au ministère, aux journaux. Personne n’a même ouvert l’enveloppe.

Il prend une grande inspiration.

— Vous n’êtes pas obligé de libérer mon frère, commandant. Rendez le rapport public. Évacuez Yeşilova. Je me rendrai. Mais les hommes qui sont avec moi… Cevdet veut autre chose. Ce n’est pas moi qui l’ai amené. C’est lui qui m’a trouvé.`
 :fl.ihanet
 ?`Arman décroche mais ne parle pas. En fond, on entend un homme crier :

— Ils gagnent du temps ! Ouvre la vanne !

Arman hurle : « Cevdet, tais-toi ! » Puis la ligne est coupée. Quelques minutes plus tard, elle se rouvre.

— Il est plus de 20 h, dit Arman. Je n’ai pas ouvert la vanne. Vous ne vous demandez pas pourquoi ?`
 :`Arman semble fatigué.

— Il est plus de 20 h, dit-il. Je n’ai pas ouvert la vanne. Vous ne vous demandez pas pourquoi ? Je vous demande une seule chose : lisez le rapport de réception de ce barrage. Le vrai. Ensuite, rappelez-moi.`,
 ch:['« Je vous le promets : le rapport sera rendu public. »','« Libérez d’abord les otages. Ensuite, on parlera de tout. »','Le faire patienter. Faire gagner du temps à Oya.'],
 why:['Tu ne sais pas de quel rapport il parle.']},
r3:{b:(st,fl)=>`02 h 00. Il ne reste que toi et Haldun au centre de crise. Haldun ferme la porte.

— Je vais être franc. Le propriétaire d’Akbel Construction est le beau-frère du ministre. ${fl.dosya?'Les dossiers que vous avez demandés sont arrivés. Le rapport de laboratoire de la troisième galerie n’y est pas. Quelqu’un a retiré ces pages.':'Si ce rapport est authentique et qu’il sort, il ne fera pas tomber qu’une entreprise. Il fera tomber le gouvernement.'}

Il se tait un instant.

— Sauvez les otages, arrêtez cet homme. Nous parlerons du rapport plus tard, à tête reposée. Je vous dis ça pour votre carrière. Sincèrement.`,
 ch:['« Non. Le rapport figurera au registre de la crise. »','« Très bien. Le rapport ne sera pas évoqué à cette table. »','Ne rien dire. Au matin, faire fuiter le rapport à un journaliste.'],
 why:[null,null,'Tu n’as rien à faire fuiter.']},
r4:{b:(st,fl)=>`${fl.sizinti?'04 h 30. Tu composes le numéro d’un journaliste. L’appel dure quatre minutes. Le titre de l’édition du matin est prêt : « Soupçons de faux rapport à Yıldızdere ».\n\n':''}05 h 00. Un murmure arrive ${fl.icerde?'par le micro':'sur la ligne de Selin'}. Bora. Dix-neuf ans, le neveu d’Arman. Il a trouvé un téléphone en prétextant aller aux toilettes.

— Madame, dit-il à Selin. Je n’ai jamais voulu ça. C’est Cevdet qui a le détonateur des explosifs. Même Arman ne peut pas y toucher. Je veux sortir.

Selin te regarde. Faire sortir Bora pourrait changer tout l’équilibre à l’intérieur. Ou faire comprendre tout à Cevdet.`,
 ch:['Aider Bora à se rendre.','Bora reste à l’intérieur. Il sera nos yeux et nos oreilles.']},
r5:{b:(st,fl)=>`${fl.bora?'Bora sort par la porte de service du barrage, les mains en l’air. L’équipe d’Oya le plaque au sol et le tire à couvert. Ses premiers mots : « C’est Cevdet qui a le détonateur. Rouge. Poche gauche. »':fl.boraYak?'Avant que Bora atteigne la porte, Cevdet le rattrape. Des cris montent de l’intérieur. Ils ont attaché Bora avec les otages. Désormais, Cevdet soupçonne tout le monde, même Arman.':'Bora est resté à l’intérieur. Toutes les deux heures, il envoie de courts messages : « Ils dorment. » « Cevdet ne dort pas. »'}

12 h 00. Le service météo lance une alerte : un violent orage frappera la région ce soir après 20 h. Les hélicoptères ne pourront plus voler.

${fl.tahliye?'L’évacuation de Yeşilova est achevée à quatre-vingts pour cent. Les habitants sont abrités dans les écoles sur les collines.':'À Yeşilova, la vie suit son cours. Le marché est ouvert, les écoles font cours.'}

Le ministère est prêt à amener Serdar Kesk de la prison jusqu’au site. On attend ton feu vert.`,
 ch:['Amenez Serdar.','Serdar reste en prison.']},
s1:{b:(st,fl)=>`${fl.serdar
 ?`15 h 00. On amène Serdar Kesk au centre de crise. Menotté, maigre ; il ressemble à son frère.

— Mon frère ne tirerait sur personne, dit-il. Mais Cevdet, si. Je l’ai connu en prison. Mon frère se soucie du barrage ; Cevdet, de l’argent. Quelqu’un l’a payé pour ça. Je ne sais pas qui. Mon frère non plus.`
 :`15 h 00. Oya pose un dossier de renseignement sur la table.

— Cevdet Arı. Deux vols à main armée, une tentative de meurtre. A rencontré Arman l’an dernier. Une grosse somme a été versée sur son compte la semaine dernière. Origine inconnue.`}

${(fl.dosya||fl.kayit||fl.sizinti)&&bildi(fl)?'La brigade financière remonte l’argent. La piste s’arrête à une société écran. L’an dernier, cette société n’avait qu’un seul client : Akbel Construction.\n\nNuri Bilgin s’effondre sur sa chaise. — Ils allaient faire sauter le barrage, dit-il. Arman porterait le chapeau. Et le faux rapport resterait pour toujours au fond de la retenue.\n\n':''}Oya poursuit :

— Il faut séparer Cevdet d’Arman. Si Arman est seul, il se rendra. Si Cevdet reste, quelqu’un mourra.`,
 ch:['Préparer Selin à une dernière conversation avec Arman.','Demander à Oya un plan d’assaut pour isoler Cevdet.','Montrer à Arman la piste de l’argent. Qu’il sache pour qui il travaille vraiment.'],
 why:[null,null,'Tu n’as aucune preuve pour suivre l’argent.']},
s2:{b:(st,fl)=>`19 h 00. Les premières rafales de l’orage font trembler les vitres du centre de crise. Dans une heure, les hélicoptères seront cloués au sol.

${fl.para
 ?`Tu lis à Arman le virement, ligne par ligne. Un long silence.

— Cevdet… s’est servi de moi, dit-il enfin. Il allait faire sauter le barrage, et c’est moi qui porterais le chapeau. Et tout ce que j’essaie de dire depuis des années serait emporté par l’eau.`
 :`Arman appelle. Il semble épuisé.

— Commandant, nous n’avons plus de temps, ni vous ni moi. Dites votre dernier mot.`}

Quelle est ta dernière offre ?`,
 ch:['« Le rapport sera rendu public. Vous libérez les otages et vous vous rendez. »','Mettre Serdar en ligne. Qu’il persuade son frère de se rendre.','La discussion est terminée. Assaut avant l’orage.'],
 why:['Tu n’as pas le pouvoir de publier le rapport, ou tu n’as jamais donné ta parole à Arman.','Serdar n’est pas ici.']},
s3t:{b:(st,fl)=>`20 h 40. L’orage s’abat sur le barrage. Arman accepte.

— J’amène les otages à la porte, dit-il.

Puis des bruits de lutte sur la ligne. La voix de Cevdet :

— Personne ne sort ! C’est moi qui ai le détonateur !

${fl.bora?'Comme l’a dit Bora : détonateur rouge, poche gauche. ':''}Le tireur d’élite d’Oya est en position, mais la pluie gâche sa visée. Selin retire sa veste :

— J’entre sans arme. Si Arman est avec moi, je peux raisonner Cevdet.`,
 ch:['Laisser Selin entrer sans arme.','Autoriser le tireur d’élite à neutraliser Cevdet.']},
s3b:{b:(st,fl)=>`19 h 50. L’orage est à dix minutes. L’équipe d’Oya attend dans l’ombre du barrage.

— Il y a ${fl.bora?'trois':'quatre'} hommes armés à l’intérieur, dit Oya. ${fl.bora||fl.icerde?'Nous savons qui a le détonateur. ':'Nous ne savons pas qui a le détonateur. '}${fl.alti?'La porte de la salle des turbines est soudée ; entrer sera difficile. ':''}Par où entrons-nous ?`,
 ch:['Par la vieille galerie de maintenance que connaît maître Nuri.','Par le toit et la porte principale en même temps.','Couper d’abord le courant, puis entrer dans le noir.'],
 why:['Personne ne connaît les anciens plans du barrage.']},
f1:{b:(st,fl)=>`${{
 teslim:'Selin sort de la tempête, Arman à son bras. Derrière eux, les otages sortent en file indienne. Arman a lui-même plaqué Cevdet au sol ; le détonateur rouge gît dans la boue. Personne n’est mort.',
 atis:'Un seul coup de feu. Cevdet s’effondre, blessé mais vivant. Arman franchit la porte les mains levées. Les otages le suivent. Personne n’est mort.',
 baskin:'Quand l’équipe fait irruption, Cevdet tend la main vers le détonateur. Le premier opérateur est plus rapide. Arman pose son arme et tombe à genoux. Tous les otages sont sauvés ; deux opérateurs sont légèrement blessés.',
 kayip:'Quelque chose tourne mal. Cevdet presse le détonateur ; un des moteurs de vanne explose. Des tirs dans le noir. Au matin, on fait le compte : deux otages, Halil Turan et le technicien Mehmet Er, sont morts. Cevdet est mort. Arman est capturé, blessé.'
}[fl.sonuc]}

23 h 30. L’orage est à son paroxysme. Mais le vrai danger n’est pas passé.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin crie à la radio : — La troisième galerie ! La fuite a doublé ! Si on n’abaisse pas la retenue tout de suite, le barrage ne tiendra pas !'
 :'Vers minuit, un long gémissement sourd monte du corps du barrage. Les ingénieurs de garde ne savent pas ce que c’est.'}

${fl.tahliye?'Yeşilova est vide. Tout le monde est dans les écoles sur les collines.':'Vingt-deux mille personnes dorment à Yeşilova.'}`,
 ch:['Ouvrir les vidanges de fond. Abaisser la retenue de façon contrôlée.',(st,fl)=>fl.tahliye?'Achever l’évacuation. Personne ne reste en ville.':'Prévenir la ville. Faire sonner les sirènes.','Ce n’est pas un problème de structure, c’est l’orage. Attendre.'],
 why:['Personne ne connaît l’état du barrage.']},
f2:{b:(st,fl)=>`${{
 yok:'Suivant les instructions de maître Nuri, on ouvre les vidanges de fond. L’eau s’écoule dans la vallée en un flot contrôlé. Au petit matin, la retenue a baissé de deux mètres. La fissure cesse de s’agrandir. Le barrage tient.',
 bos:'Avant l’aube, la paroi de la troisième galerie s’effondre. Le flanc du barrage se déchire ; l’eau se rue dans la vallée. Les quartiers bas de Yeşilova sont inondés. Mais la ville était vide. Personne n’est mort.',
 hafif:'Les sirènes retentissent à minuit. Les gens courent vers les collines sous la pluie, en pyjama. Avant l’aube, la paroi de la galerie s’effondre ; l’eau atteint les quartiers bas. La plupart sont sauvés. Mais pas tous.',
 agir:'Avant l’aube, la paroi de la troisième galerie s’effondre. Le flanc du barrage se déchire. L’eau déferle sur Yeşilova endormie.'
}[sel(fl)]}

09 h 00. La salle de presse est comble. Haldun est à côté de toi, une déclaration préparée à la main. Le titre est en gras : *Attentat terroriste déjoué avec succès.*

Les caméras se tournent vers toi.`,
 ch:['Dire la vérité : le rapport, Akbel Construction, tout.','Lire la déclaration de Haldun.'],
 why:['Tu ne connais aucune vérité à dire.']},
end_gercek:{b:(st,fl)=>`Tu poses la déclaration sur la table et ouvres ton propre dossier.

Les résultats de laboratoire de la troisième galerie. L’objection écrite de Nuri Bilgin, vieille de trente ans. Les signatures d’Akbel Construction.${fl.para?' L’argent versé sur le compte de Cevdet Arı, et la société écran d’où il venait.':''}

Haldun quitte la salle. Avant le soir, le ministre annonce sa démission.

${fl.savak?'Le barrage de Yıldızdere est vidé pour réparation. Le rapport des ingénieurs est bref : le barrage aurait pu céder en quelques semaines. À Yeşilova, personne ne mesure vraiment à quel point on est passé près ; toi, si.':'Le flanc effondré du barrage passe aux informations pendant des mois. Mais Yeşilova n’a pas perdu une seule vie. Un an plus tard, on pose les fondations d’un nouveau barrage ; cette fois, tous les rapports sont publics.'}

Arman Kesk est jugé. Il purgera sa peine pour la prise d’otages ; il l’accepte lui-même. Le dernier jour du procès, maître Nuri est assis au premier rang. Il adresse un signe de tête à Arman.

Six mois plus tard, une lettre arrive. Elle vient de l’ingénieure stagiaire Ece Yalın : « Je fais partie de la nouvelle équipe d’inspection. Je contrôle moi-même chaque gâchée de béton. »

Certaines crises sont le seul chemin vers la vérité.`},
end_sessiz:{b:(st,fl)=>`« L’attentat terroriste a été déjoué grâce à la détermination de nos forces de sécurité. »

Flashs des appareils photo. Le lendemain matin, ta photo fait la une de tous les journaux.

Tous les otages sont rentrés chez eux. Arman Kesk est jugé comme « chef terroriste ». Quand il tente d’évoquer le rapport devant le tribunal, le juge l’interrompt.

${fl.savak?'Le barrage est discrètement vidé pour « maintenance de routine ». Akbel Construction remporte le marché de réparation.':'L’effondrement du barrage est présenté comme une « catastrophe naturelle due à l’orage ». Akbel Construction remporte le marché de reconstruction.'}${fl.sizinti?'\n\nL’affaire que tu as fait fuiter reste une semaine dans l’actualité. Puis le ministère la qualifie d’« accusation infondée » et le dossier est clos.':''}

Un soir, tu reçois un court message de Nuri Bilgin : « Vous aussi, vous vous êtes tu. »

Tu gardes ta médaille dans un tiroir.

Tu as sauvé les otages. Tu n’as pas pu sauver la vérité.`},
end_baskin:{b:(st,fl)=>`« L’attentat terroriste a été déjoué grâce à la détermination de nos forces de sécurité. »

Les images des caméras de casque de l’équipe d’Oya passent sur tous les écrans : une opération parfaite, dans la tempête, dans le noir. Les chaînes d’information parlent de « l’opération de l’année ».

Tous les otages ont été sauvés. Cevdet Arı et Arman Kesk sont en état d’arrestation.

Mais en interrogatoire, Arman ne pose qu’une question, toujours la même :

— Vous avez lu le rapport ?

${fl.savak?'Le barrage est discrètement vidé pour « maintenance de routine ». Akbel Construction remporte le marché de réparation.':'L’effondrement du barrage est présenté comme une « catastrophe naturelle due à l’orage ». Personne ne pose de questions.'}

Oya et son équipe sont décorées. Le jour de la cérémonie, Oya s’approche de toi et demande à voix basse : « Monsieur, cet homme avait-il raison ? »

Tu ne réponds pas.

Tu as gagné une opération. La vraie bataille n’a jamais commencé.`},
end_bedel:{b:(st,fl)=>`${fl.acik?'Dans la salle de presse, tu dis la vérité : le rapport, Akbel Construction, tout. Mais personne n’écoute. Tout le monde pose des questions sur deux noms.':'Tu lis la déclaration de Haldun. Mais personne n’écoute. Tout le monde pose des questions sur deux noms.'}

Halil Turan. Mehmet Er.

Tu vas à l’enterrement de Halil. Il a passé trente et un ans dans ce barrage ; il était à quatre mois de la retraite. Mehmet avait vingt-six ans. Il se mariait dans deux mois. Sa fiancée ne te regarde même pas.

La commission d’enquête examine tes décisions une par une. Aucune n’était illégale. Aucune n’était assez bonne.

Arman a été capturé blessé. De son lit d’hôpital, il te regarde et dit : « Je n’ai jamais voulu ça. » Tu le crois. Ça ne change rien.

${fl.acik?'Le rapport finit par sortir ; Akbel Construction est jugée. Mais les informations montrent toujours ces deux photos.':'Le rapport ne sort jamais.'}

Chaque décision prise dans une cellule de crise touche la vie de quelqu’un.`},
end_sel:{b:(st,fl)=>`Quand la lumière du matin atteint la vallée, la moitié basse de Yeşilova a disparu. Des toits, des minarets, le panier de basket de la cour d’école émergent d’un lac de boue.

${sel(fl)==='hafif'?'Les sirènes de la nuit ont sauvé des milliers de personnes. Mais onze ne sont jamais revenues.':'Personne n’a été prévenu. Le bilan s’alourdit d’heure en heure.'}

${fl.sonuc==='kayip'?'Les noms des deux otages perdus dans le bâtiment de contrôle disparaissent presque dans cette longue liste.':'Tous les otages ont été sauvés. Mais plus personne n’en parle.'}

${fl.yayin?'L’avertissement d’Arman Kesk lors de l’émission en direct passe en boucle à la télévision pendant des jours : « Il y a une fissure dans la troisième galerie. »':'Le carnet jauni de Nuri Bilgin finit entre les mains d’un journal. Son objection écrite vieille de trente ans fait les gros titres.'}

Devant la commission d’enquête, on ne te pose qu’une question :

— Vous ne saviez pas ?

Les signes étaient là. Les lire, c’était ton travail.`},
end_azil:{b:(st,fl)=>`${st.kamuoyu<=0
 ?'Ton visage est sur tous les écrans. Les titres disent « La cellule de crise s’effondre » et « L’État regarde sans rien faire ». Le ministre n’appelle même pas ; tu apprends par les informations que tu es relevé de tes fonctions.'
 :'Plus personne à la table ne te regarde. Oya remet en cause tes ordres ; Haldun envoie ses rapports directement au ministre. Avant l’aube arrive un ordre : le commandement de la cellule de crise est confié à un autre général.'}

Tu suis la fin de la crise sur la télévision d’une chambre d’hôtel. C’est quelqu’un d’autre qui écrit le dénouement.

Dans une crise, la confiance est la munition la plus précieuse. La tienne est épuisée.

L’histoire n’avait pas à finir ainsi. Aurais-tu pu tenir à la fois la table et l’opinion ?`},
end_kayip:{b:`À l’autre bout du fil, Arman ne parle plus. À la place, tu entends l’un des hommes qui sont avec lui, une voix dure et froide :

— Le temps est écoulé.

Deux coups de feu.

Dix minutes plus tard, l’équipe d’Oya est à l’intérieur. Le propriétaire de cette voix froide, Cevdet Arı, tente de sortir en tirant et il est abattu. Arman est assis parmi les otages, la tête entre les mains.

Au matin, on fait le compte. Le chef d’équipe Halil Turan et le technicien Mehmet Er sont morts.

Une fois la confiance des otages brisée, il ne restait plus de temps pour la regagner.

L’histoire n’avait pas à finir ainsi. À quelle décision as-tu perdu les otages ?`}
 }};
})();
