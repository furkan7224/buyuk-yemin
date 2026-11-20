/* HİKÂYE · EFSANE BİRLİK · Fransızca metin katmanı (mantık st_efsane.js'ten gelir) */
(function(){
TALE_FR.efsane={
 meta:{ti:'L’Unité légendaire',genre:'Drame · Guerre',sub:'Un secret de soixante-dix ans dans une chambre de maison de retraite',
  pitch:'Un vétéran de quatre-vingt-onze ans raconte à une jeune étudiante en histoire la légende de l’Unité légendaire : douze soldats qui ont tenu un col pendant neuf jours pour sauver un village. Mais plus il parle, moins les pièces s’emboîtent. Une promesse gardée soixante-dix ans, une plaque d’identité et un nom.',
  chapters:[{ti:'La visite',sub:'La maison de retraite et le premier souvenir'},{ti:'Le col',sub:'Le col de l’Aigle et le village d’Akpınar'},{ti:'Neuf jours',sub:'La faim, le froid et un drapeau blanc'},{ti:'La dernière nuit',sub:'La corniche de neige et la plaque'},{ti:'La vérité',sub:'La dernière question'}],
  statDefs:[['hafiza','Mémoire','var(--blue)'],['birlik','Esprit de corps','var(--green)'],['vicdan','Conscience','var(--acc)']]},
 medal:'Médaille de l’Unité légendaire',
 end:{gercek:'Deux noms',efsane:'La légende',emanet:'Le dépôt',bedel:'Une demi-journée',sis:'Le brouillard'},
 scenes:{
z1:{b:`Maison de retraite Çamlık, novembre. La pluie trace de fines lignes sur la vitre.

Tu as quatre-vingt-onze ans. Le matin, ce sont d’abord tes genoux qui te font mal, puis tes souvenirs.

Sevim, l’infirmière, frappe à la porte :

— Grand-père Kâzım, vous avez de la visite. Une étudiante de l’université. Elle fait des études d’histoire et enregistre les récits des anciens soldats. Elle vous a demandé par votre nom. C’est au sujet de la Compagnie du Loup.

La Compagnie du Loup. Dans les manuels, on l’appelle « l’Unité légendaire » : douze soldats qui ont tenu le col de l’Aigle pendant neuf jours et sauvé un village. Et toi, on te connaît comme son unique survivant.

Dans le tiroir de ta table de nuit, enveloppée dans un mouchoir, il y a une médaille. Tu ne l’as pas dépliée depuis des années.`,
 ch:['« Faites-la entrer. Il est peut-être temps de raconter. »','Tu dis : « Je suis fatigué, une autre fois. »']},
z2:{b:(st,fl)=>`${fl.isteksiz
 ?'Avant de partir, Sevim pose une photo sur la table de nuit : « Elle voulait que vous la voyiez. » Une minute plus tard, la jeune fille est sur le seuil. Elle n’entre pas sans permission, mais elle n’a pas l’air prête à renoncer.'
 :'La jeune fille entre. Elle n’a sûrement pas plus de vingt-quatre ans. Un enregistreur à la main, un épais dossier dans son sac.'}

— Je m’appelle Zeynep, dit-elle. Je voulais vous montrer une photo.

Cette photo, tu la connais. Douze jeunes hommes dans la neige. Certains sourient, d’autres fixent l’objectif en fronçant les sourcils. Derrière eux, les rochers du col de l’Aigle.

— Cette photo est dans tous les livres, dit Zeynep. Mais il n’y a pas de noms dessous. Lequel est vous ?

Ton doigt s’arrête sur la photo.`,
 ch:['Tu montres le sergent aux larges épaules qui sourit au centre.','Tu montres le garçon maigre qui grelotte dans la neige, sur le bord.']},
z2b:{b:`Zeynep regarde la photo, puis toi.

— Mais ce garçon… d’après les archives, c’est le soldat Hasan Çelik. Tombé la neuvième nuit.

Un instant, on n’entend plus que la pluie.

— Mes yeux ne sont plus ce qu’ils étaient, ma fille, dis-tu. C’est l’âge.

Zeynep note quelque chose dans son carnet. Puis elle sourit :

— Vous voulez bien tout me raconter depuis le début ? Depuis le jour où vous êtes arrivé dans l’unité.`,ch:['Tu fermes les yeux et tu commences à raconter.']},
z3:{b:(st,fl)=>`${fl.gosterdi==='cavus'?`Zeynep regarde la photo.

— Sergent Kâzım Yıldırım, dit-elle. Vingt-trois ans.

Et elle allume l’enregistreur.

— Racontez-moi depuis le début. Depuis le jour où vous êtes arrivé dans l’unité.

Tu fermes les yeux.

`:''}*Il y a soixante-douze ans. Front de l’Est.*

Tu sautes de la benne du camion dans la neige. Tu as dix-neuf ans. Tout ce que tu possèdes depuis que tu as quitté l’orphelinat tient dans le sac sur ton dos.

Les tentes de la Compagnie du Loup s’alignent au bord du ruisseau. Le capitaine Ateş Kaya te toise de la tête aux pieds et, sans un mot, coche ton nom sur la liste.

Puis une voix :

— C’est lui, le bleu ?

Un sergent moustachu, aux larges épaules. Quand il rit, ses yeux disparaissent. En voyant tes mains violacées, il retire ses gants et te les tend :

— Tiens. Chez moi, on n’appelle même pas ça de la neige.

Sur la plaque de sa poitrine : *K. Yıldırım*.`,
 ch:['Tu prends les gants. Tu le remercies.','Tu dis : « Non, merci. » Tu ne veux rien devoir à personne.','Tu demandes d’où vient le nom de la compagnie. Pourquoi « Loup » ?']},
z4:{b:(st,fl)=>`${fl.eldiven
 ?'Le sergent te tape sur l’épaule : — Moi, c’est Kâzım. Toi, tu m’appelles sergent, et moi je t’appelle le bleu. Marché conclu ?'
 :fl.kurt
 ?'Le sergent rit : — Parce que le loup ne quitte pas la meute. Si l’un tombe, la meute ne l’abandonne pas. Moi, c’est Kâzım. Maintenant, toi aussi tu es de la meute, le bleu.'
 :'Le sergent hausse les épaules : — Comme tu veux. Mais sur cette montagne, tout le monde finit par devoir quelque chose à quelqu’un. Moi, c’est Kâzım.'}

Les premières semaines passent entre la neige, les tours de garde et les histoires sans fin de Kâzım. Il te parle de sa mère, maman Hatice, qui a perdu deux fils aînés sur d’autres fronts. Et de sa petite sœur de huit ans, Nazlı : « À chaque fête, je lui donne son argent de poche. Si je ne rentre pas pour celle-ci, ça va barder. »

Il y a les autres aussi : le caporal Bekir, un tireur d’élite silencieux ; Yakup, le radio ; Şükrü, le cuisinier, qui chante des airs populaires en remuant sa marmite ; et Rıfat, l’infirmier.

Une nuit de garde, Kâzım te demande :

— Et toi, qui as-tu, le bleu ? À qui tu écris ?`,
 ch:['Tu dis : « Personne. » Tu lui dis la vérité.','Tu dis : « J’ai une tante. » Tu ne veux pas avoir l’air seul.','Tu ne réponds pas. Tu changes de sujet.']},
z5:{b:(st,fl)=>`${fl.yetim
 ?'Kâzım reste longtemps silencieux. Puis il sort une lettre froissée de sa poche : — Alors, à partir de maintenant, la moitié de mes lettres sont à toi, dit-il. Ma mère a l’habitude de prier pour plus d’un.'
 :'Kâzım ne pose plus de questions. Mais dès ce soir-là, il ajoute une ligne à la fin de chaque lettre : « J’ai un bleu avec moi. Prie pour lui aussi, maman. »'}

Quand tu rouvres les yeux, Zeynep te regarde. Le voyant rouge de l’enregistreur clignote.

— Maman Hatice, dit-elle lentement. Nazlı. Vous avez prononcé ces noms avec beaucoup de tendresse.

Puis elle sort une feuille du dossier :

— Je peux vous poser une question ? Ne le prenez pas mal, s’il vous plaît. Dans le dossier militaire de Kâzım Yıldırım, le groupe sanguin est O. Dans le dossier médical de cette maison de retraite, le vôtre est A.

Ta gorge se dessèche.`,
 ch:['« Une erreur du scribe, ma fille. À l’époque, tout s’écrivait à la main. »','Tu te tais un moment. Puis tu dis : « Parlons-en demain. »','Tu bois une gorgée de thé. Tu essaies de cacher le tremblement de tes mains.']},
g1:{b:(st,fl)=>`Le lendemain, Zeynep revient. ${fl.katip
 ?'Elle ne reparle plus du groupe sanguin. Mais tu la vois noter quelque chose dans la marge de son carnet.'
 :fl.yarin?'Elle s’assied en souriant : « Hier, vous m’avez dit qu’on en parlerait demain. Aujourd’hui, c’est demain. »':'Elle pose sur la table de nuit les gâteaux qu’elle a apportés.'}

— Parlez-moi du col de l’Aigle, dit-elle. Les livres y consacrent trois lignes. Le reste, vous êtes le seul à le savoir.

Parfois les souvenirs viennent d’eux-mêmes ; parfois il faut les arracher.`,
 ch:['Tu commences à raconter tout de suite.','Tu regardes d’abord longuement la photo. Tu te rappelles les visages un par un.']},
g2:{b:`*Mars. Le col de l’Aigle.*

Le capitaine Ateş déplie la carte sur un rocher :

— L’ennemi a percé la ligne principale. Ce col est la seule route qui descend vers le village d’Akpınar. Trois cents personnes vivent au village. Nous les évacuerons par la route du plateau, derrière la montagne. Il nous faut trois jours. Pendant trois jours, nous tiendrons ce col.

À votre arrivée à Akpınar, le maire, grand-père Kerim, vous accueille. Sa petite-fille de dix ans, Gülsüm, essaie de rassembler les chèvres. Les femmes s’attachent les matelas sur le dos. Des vieillards, des malades, des bébés dans les bras…

Kâzım se tourne vers toi :

— Il faut commencer à creuser les positions, mais… regarde ces gens, le bleu.

Le capitaine te laisse décider de ce que tu feras le premier jour.`,
 ch:['Tu aides les villageois à porter leurs affaires jusqu’à la route du plateau.','Tu commences à creuser les positions. Si le col tombe, personne ne sera sauvé.','Tu pars avec Bekir reconnaître les rochers au-dessus du col.']},
g3:{b:(st,fl)=>`${fl.yardim
 ?'Le soir, tu ne sens plus tes bras. Gülsüm te tend la corde d’une des chèvres : « Soldat, garde-la-moi. C’est la plus têtue. »'
 :fl.mevzi?'Jusqu’au soir, tu creuses la terre gelée. Tes mains saignent, mais la position est profonde.'
 :'Dans les rochers au-dessus du col, Bekir et toi trouvez un sentier de chèvres que l’ennemi pourrait emprunter pour vous prendre à revers. Bekir se contente d’un hochement de tête : « Tu as l’œil. »'}

Première nuit, trois heures. Des lumières apparaissent sur le versant d’en face. Un bruit de moteurs. Puis le silence.

Bekir se glisse à côté de toi :

— Pas de précipitation. Laisse-les approcher. Si on tire trop tôt, ils sauront combien on est peu.

À côté de toi, la respiration de Yakup s’accélère. Une fusée éclairante monte dans le ciel.`,
 ch:['Tu écoutes Bekir. Tu attends qu’ils approchent.','Tu tires tout de suite. Il faut les faire fuir.']},
g4:{b:(st,fl)=>`${fl.gece1==='iyi'
 ?'L’avant-garde ennemie est tombée dans l’embuscade et s’est repliée. La compagnie n’a aucun blessé. Le matin, Kâzım te tend le premier thé.'
 :'L’ennemi a compris que vous étiez peu nombreux. Les tirs de mortier ont duré toute la nuit. La marmite de Şükrü est trouée et Rıfat a pris une balle dans le bras.'}

*Troisième jour.* Le capitaine Ateş est blessé à la jambe. Il serre les dents pendant que Rıfat change son pansement. Yakup lève la tête de la radio :

— Ordre de l’état-major, mon capitaine : repli. Immédiat.

Mais la moitié du village est encore sur la route du plateau. Il a neigé dans la nuit et la route est coupée. Les vieillards et les malades avancent lentement. Il faut encore un jour, peut-être deux.

Le capitaine rassemble tout le monde. Sa voix est faible, mais ferme :

— L’ordre est clair. Mais je ne veux pas abandonner ce village. Si nous restons, la plupart d’entre nous ne rentreront pas. Je veux entendre ce que vous pensez. Toi d’abord, le bleu. Dans cette compagnie, c’est le plus jeune qui parle en premier.

Kâzım te regarde. Tu sais ce qu’il pense.`,
 ch:['« Restons, mon capitaine. Jusqu’à ce que le village soit passé. »','« Un ordre est un ordre, mon capitaine. Replions-nous. »','« Que les volontaires restent et que les autres se replient. »']},
g4b:{b:`Le capitaine baisse la tête. Le repli commence.

Une demi-journée plus tard, quelqu’un accourt dans la neige de la vallée. C’est Gülsüm. Pieds nus, le visage gonflé de larmes :

— Ils arrivent ! Grand-père et les autres sont encore sur la route !

Kâzım passe son fusil à l’épaule et fait demi-tour. Il ne se retourne même pas. Le capitaine s’arrête un instant, puis crie :

— Compagnie ! Demi-tour !

Quand vous atteignez le col, l’ennemi est déjà aux premières maisons à l’entrée du village. Vous le repoussez, mais une demi-journée a été perdue. Du dernier groupe sur la route du plateau, quatorze personnes ne sont pas revenues.

Pendant des années, chaque nuit, tu compteras ces quatorze noms un par un.`,ch:['Continuer.']},
g5:{b:(st,fl)=>`La voix de Zeynep te ramène au présent :

— Grand-père Kâzım ? Ça va ?

Un instant, tu ne sais plus qui elle est. Ces cheveux, la forme de ces yeux…

— Nazlı ? dis-tu. Je t’ai apporté ton argent de fête…

Zeynep se fige. Ses yeux s’emplissent de larmes. Puis elle tend la main et prend la tienne :

— Je suis Zeynep, dit-elle lentement. Mais Nazlı… c’est aussi un nom qui m’est très cher.

${fl.geri?'Tu restes un moment sans parler. Cette demi-journée, tu n’en as jamais parlé à personne. Elle n’est pas non plus dans les livres.':'Tes mains tremblent encore.'}`,
 ch:['Tu te reposes un peu. Tu regardes la pluie par la fenêtre.','Tu continues. Il faut raconter avant d’oublier.']},
d1:{b:(st,fl)=>`*Cinquième jour.*

Les vivres sont épuisés. Şükrü fait une soupe avec le dernier boulgour et de la neige fondue. Toute la compagnie se rassemble autour de la vapeur qui monte de la marmite.

${fl.geri
 ?'Les survivants du groupe perdu, une vingtaine, attendent dans la bergerie juste en dessous du col.'
 :'Le dernier groupe du village, une centaine de vieillards et de malades, attend dans la bergerie juste en dessous du col en priant pour que la route bloquée par la neige s’ouvre.'} Les enfants grelottent près du feu.

Kâzım se tient devant la marmite et te regarde. La soupe ne suffit même pas pour douze.`,
 ch:['Tu partages la soupe avec les gens de la bergerie.','Un soldat doit garder ses forces pour se battre. La soupe est pour la compagnie.','Tu portes ta part à Gülsüm. Tu ne touches pas au reste.']},
d2:{b:(st,fl)=>`${fl.paylas?'Sans un mot, Kâzım te prend la louche et tend le premier bol à grand-père Kerim. Ce soir-là, la moitié de la compagnie se couche le ventre vide. Personne ne se plaint.\n\n':fl.gulsum?'Gülsüm tient le bol à deux mains et en partage la moitié avec son petit frère.\n\n':''}*Sixième jour.* Le capitaine Ateş s’est éteint en silence avant l’aube. Ses derniers mots ont été pour Kâzım : « La compagnie est à toi. »

La radio aussi est morte. Yakup a passé la nuit sur les fils, en vain. L’état-major ne sait pas où vous êtes, ni même si vous êtes encore en vie.

Kâzım se tient devant la carte :

— Quelqu’un doit descendre. Rejoindre les troupes de la vallée et demander de l’aide. Mais le chemin passe juste sous les yeux de l’ennemi.

Tout le monde se tait. Et tu entends ta propre voix :`,
 ch:['« J’y vais, sergent. »','« Essayons encore de réparer la radio avec Yakup. »','« Personne n’y va. Quoi qu’il arrive, on reste ensemble. »']},
d3:{b:(st,fl)=>`${fl.haber==='kosu'
 ?'La nuit, tu glisses dans la neige jusqu’à la vallée. Avant l’aube, tu atteins une unité d’artillerie. « Le neuvième jour, dit son commandant. Pas avant. » Au retour, Kâzım t’attend à l’entrée du col. Il te serre dans ses bras et te tape dans le dos.'
 :fl.yaralandi?'À mi-chemin, tu tombes sur une patrouille. Dans ta fuite, une balle t’effleure l’épaule. Tu reviens en rampant dans la neige. Pendant que Kâzım te tire dans la position, tu l’entends crier pour la première fois : « Si tu repars encore quelque part sans me demander… » Il ne finit pas sa phrase.'
 :fl.haber==='telsiz'?'Avant l’aube, Yakup pousse un cri de joie. Une voix grésillante à la radio : « Le neuvième jour. Tenez bon. Le neuvième jour. »'
 :fl.telsizYok?'La radio ne parle plus jamais. Yakup la porte quand même sur son dos ; « on ne sait jamais », dit-il.'
 :'Personne n’y va. Ce soir-là, la compagnie se serre encore plus autour du feu.'}

*Septième jour.* Un drapeau blanc sur le versant d’en face. Un officier ennemi s’avance avec un interprète jusqu’au milieu du col :

— Rendez-vous. Il n’arrivera rien aux femmes ni aux enfants. Vous avez ma parole.

Kâzım te chuchote :

— La route du dernier groupe s’ouvre demain. Il nous faut un jour de plus.`,
 ch:['Tu proposes à Kâzım : « Faisons traîner la négociation pour gagner du temps. »','« On ne se rend pas. Qu’il s’en aille. »','Tu demandes : « Et si on se fiait à sa parole et qu’on lui livrait le groupe ? »']},
d4:{b:(st,fl)=>`${{
 oyalama:'Kâzım passe une demi-journée à marchander avec l’officier ennemi autour d’un thé : à chaque proposition, une question ; à chaque question, une histoire. Le soir, le dernier groupe est déjà sur la route du plateau.',
 anladi:'La négociation dure une heure. Puis l’officier ennemi comprend que vous jouez la montre. L’après-midi arrive l’attaque la plus violente jusque-là. Ce jour-là, Şükrü tombe. Sa marmite est encore près du feu.',
 red:'L’officier hausse les épaules et repart. Cette nuit-là, l’attaque arrive. Şükrü tombe. Sa marmite est encore près du feu.',
 teklif:'Le regard que te lance Kâzım, tu ne l’oublieras pas en soixante-dix ans. — Le loup n’abandonne pas la meute, le bleu, dit-il seulement. Il renvoie l’officier. Cette nuit-là, l’attaque arrive. Şükrü tombe.'
}[fl.d7]}

Zeynep éteint l’enregistreur. Elle sort son téléphone :

— Je voudrais vous faire écouter quelque chose. C’est l’enregistrement d’une très vieille cassette ; je l’ai fait numériser.

Du haut-parleur sort la voix d’une vieille femme : « … Mon frère rentrait à chaque fête. Des bonbons dans la main, de l’argent dans la poche. Même quand ma mère n’y voyait plus, elle reconnaissait son pas… »

Cette voix, tu la connais. Plus vieille que tu ne l’as jamais entendue, mais tu la connais.

— Nazlı, dis-tu.`,
 ch:['Tu pleures. Les larmes retenues pendant soixante-dix ans.','Tu te ressaisis. Tu dis : « Continuons. »']},
s1:{b:(st,fl)=>`*La neuvième nuit.*

Vous n’êtes plus que sept. ${fl.yaralandi?'Ton épaule est bandée ; tu tiens ton fusil d’une seule main. ':''}Les derniers villageois de la bergerie, avec grand-père Kerim et Gülsüm, sont partis vers la route du plateau. Si vous tenez le col jusqu’au matin, ils seront sauvés.

Mais cette fois, l’ennemi vient avec tout ce qu’il a. Le versant d’en face est couvert de lanternes.

Kâzım vous rassemble et vous montre les derniers explosifs :

— La corniche de neige au-dessus du col. Si on la fait sauter, l’avalanche fermera la route et personne ne passera pendant des semaines. Mais la mèche est courte. Celui qui l’allume n’aura peut-être pas le temps de s’enfuir.

Silence.

— Je reste, dit Kâzım. Les autres, suivez les villageois sur le plateau.`,
 ch:['« Je reste, sergent. Moi, je n’ai personne. »','« Restons tous les deux. L’un allume, l’autre le tire de là. »','Tu obéis à l’ordre. Tu te replies avec les autres.']},
s2:{b:(st,fl)=>`${{
 ben:'Kâzım rit. Soixante-dix ans plus tard, tu entends encore ce rire. — Tu n’as personne ? dit-il. Et moi, je suis quoi ? Puis il t’attrape par le col et te pousse. Quand tu te relèves, il a déjà allumé la mèche.',
 birlikte:'Vous allumez la mèche ensemble. Vous courez. Derrière vous, la montagne gémit.',
 cekil:'Tu fais cent mètres. Puis tu t’arrêtes. Tu fais demi-tour. Tu trouves Kâzım près de la mèche. Il te voit, jure, puis éclate de rire : — Tête de mule, dit-il. Pareil que la chèvre de Gülsüm.'
}[fl.son]}

L’explosion. Puis un grondement, comme si la montagne entière glissait. La corniche s’effondre sur le col.

Et puis le silence.

C’est Kâzım qui te dégage de la neige. Mais lui ne peut pas se relever. Un éclat de roche lui a transpercé la poitrine. Une tache sombre s’étend sur la neige.`,ch:['Tu t’agenouilles près de lui.']},
s3:{b:`Kâzım a le souffle court et faible. Tu lui tiens la main.

— Écoute, le bleu, dit-il. Il n’y a pas de temps.

Il retire la plaque de son cou et te la presse dans la paume. Puis il arrache la tienne et brise la chaîne.

— Ma mère a enterré deux fils. Si elle enterre le troisième, elle n’y survivra pas. Rentre à la maison, toi. À ma place. Donne à Nazlı son argent de fête.

— Sergent, je…

— C’est un ordre, dit-il. Le dernier.

Il sort de sa poche de poitrine une lettre inachevée :

— Pour ma mère, dit-il. Termine-la, toi.`,
 ch:['Tu prends la plaque et la lettre. « Je vous le promets, sergent. »','« Je ne peux pas, sergent. Ce serait un mensonge. »']},
s4:{b:(st,fl)=>`${fl.reddettim
 ?`Kâzım ne répond pas. Il te tient toujours la main, les yeux ouverts sur le ciel. Puis tout devient noir.

Tu te réveilles dans un hôpital de campagne. Une infirmière t’accueille avec un sourire : « Bon retour, sergent Kâzım. » La plaque pend à ton cou ; il a dû te la passer pendant que tu étais inconscient. La lettre est aussi dans ta poche.`
 :`Kâzım meurt ta main dans la sienne. Les yeux ouverts, tournés vers le ciel.

Tu te réveilles dans un hôpital de campagne. Une infirmière t’accueille avec un sourire : « Bon retour, sergent Kâzım. »`}

D’après les archives, le soldat Hasan Çelik est tombé la neuvième nuit. Le sergent Kâzım Yıldırım est le seul soldat survivant de l’Unité légendaire.

Un mois plus tard, tu te tiens devant la porte d’une maison de village. Maman Hatice n’y voit plus. En entendant ta voix, ses mains cherchent ton visage. Ses doigts parcourent ton front, ton nez, tes lèvres. Longtemps, très longtemps.

Derrière elle se tient une fillette de huit ans. Nazlı. Elle te regarde. D’abord elle comprend quelque chose ; puis elle décide quelque chose.

— Grand frère, dit-elle. Bienvenue à la maison.`,
 ch:['Tu murmures la vérité à l’oreille de maman Hatice.','Tu te tais. Tu deviens son fils.']},
r1:{b:(st,fl)=>`${fl.anneBildi
 ?'Maman Hatice entend ton murmure. Puis elle attire ta tête contre sa poitrine. « Je sais, mon fils, dit-elle. Ce n’était pas le pas de Kâzım. Mais maintenant, tu es mon fils toi aussi. »'
 :'Maman Hatice te serre contre sa poitrine. Elle ne pose aucune question. Pendant vingt et un ans, jusqu’au jour de sa mort, elle prie pour toi chaque matin.'}

Soixante-dix ans. Tu as porté le cercueil de maman Hatice sur ton épaule. Tu as conduit Nazlı à son mariage, à ton bras. L’argent de fête, à chaque fête… Et chaque année, tu es allé seul à la tombe du col de l’Aigle. Devant la pierre où il est écrit « Soldat Hasan Çelik ».

Dans la chambre de la maison de retraite, Zeynep est assise en face de toi. L’enregistreur est sur la table. Le voyant rouge est allumé.

— Dernière question, dit-elle. Sa voix tremble.

— Qui êtes-vous ?`,
 ch:['« Je suis Hasan Çelik. Kâzım Yıldırım est mort la neuvième nuit. En me sauvant. »','« Je suis Kâzım Yıldırım, ma fille. Quoi que disent les livres. »','Tu ne réponds pas. Tu sors du tiroir la plaque et la lettre inachevée, et tu les lui tends.']},
end_gercek:{b:`Zeynep n’éteint pas l’enregistreur. Elle pleure, mais elle sourit.

— Je le savais, dit-elle. Ma grand-mère me l’a dit. Nazlı Yıldırım. Elle est morte au printemps dernier. Dans ses derniers jours, elle m’a pris la main et m’a dit : « Va à la maison de retraite Çamlık. Remercie oncle Hasan. Toute sa vie, il a été notre famille, à ma mère et à moi. Mon frère Kâzım l’aurait voulu aussi. »

Tu croyais que Nazlı ne savait pas. Pendant soixante-dix ans, Nazlı a su, et n’a rien dit.

Six mois plus tard, une petite cérémonie a lieu au col de l’Aigle. Sur la pierre tombale qui portait depuis soixante-dix ans l’inscription « Soldat Hasan Çelik », on grave enfin le bon nom : *Sergent Kâzım Yıldırım.* Sur le marbre du monument, deux noms côte à côte. Sous les deux, la même ligne : *Compagnie du Loup.*

Tu es dans ton fauteuil roulant, à côté de Zeynep. Le vent descend du col. Un instant, il te semble entendre quelqu’un rire au loin.

— Le bleu, dit le vent. Tu es bien rentré ?

Je suis rentré, sergent. Comme vous le vouliez.`},
end_efsane:{b:`Zeynep te regarde longuement. Puis elle éteint l’enregistreur.

— Ma grand-mère le disait comme ça, elle aussi, dit-elle lentement : « mon frère Kâzım ». Toujours comme ça. Nazlı Yıldırım. Elle est morte au printemps dernier.

Elle se lève et s’arrête sur le seuil :

— Dans ses derniers jours, elle m’a demandé de vous remercier. Je ne lui ai pas demandé pourquoi. Je crois que maintenant je comprends.

Les livres ne changent pas. Aux cérémonies scolaires, les instituteurs racontent toujours l’histoire de « Kâzım Yıldırım, le dernier héros vivant ». Sous la photo, un nom est imprimé : sous le sergent qui sourit au centre.

Un matin d’hiver, Sevim te trouve endormi près de la fenêtre. Dans ta main, tu serres la plaque. Un nom y est gravé, mais personne ne le lit vraiment.

Parfois, une légende ne protège pas un mensonge, mais une promesse.`},
end_emanet:{b:`Tu ne dis rien. Tu ouvres le tiroir. Sous la médaille enveloppée dans le mouchoir, il y a une plaque vieille de soixante-dix ans et une lettre jaunie, inachevée.

Zeynep retourne la plaque : *K. Yıldırım*. La première ligne de la lettre : « Maman, si je ne rentre pas pour cette fête… » La lettre est inachevée. En dessous, d’une autre écriture, des lignes ont été ajoutées au fil des années. Une à chaque fête.

À mesure qu’elle lit, Zeynep comprend. Puis elle te regarde.

— Ma grand-mère Nazlı, murmure-t-elle. Elle savait. Elle a toujours su. Elle m’a demandé de vous remercier.

Elle serre la plaque dans sa main :

— Que voulez-vous que je fasse ?

— C’est à toi de décider, lui dis-tu. C’est toi qui en as la garde, maintenant.

Un an plus tard paraît le livre de Zeynep : *Le col de l’Aigle : deux soldats, un nom*. À la première page, une dédicace d’une ligne : *À tous ceux qui tiennent leurs promesses.*`},
end_bedel:{b:(st,fl)=>`${fl.secim==='gercek'
 ?'— Je suis Hasan Çelik, dis-tu. Et tu continues, parce que ce soir tu as décidé de tout raconter. Que le troisième jour, tu as dit « replions-nous ». La demi-journée perdue. Les quatorze personnes qui ne sont pas revenues de la route du plateau.'
 :fl.secim==='emanet'?'Tu tends à Zeynep la plaque et la lettre. Puis une autre feuille : une liste que tu as gardée soixante-dix ans. Quatorze noms.'
 :'— Je suis Kâzım Yıldırım, dis-tu. Mais ta voix tremble. Dans la légende des « neuf jours » que racontent les livres, il y a une demi-journée que personne ne connaît.'}

Zeynep écoute en silence. Puis elle éteint l’enregistreur.

— Ma grand-mère Nazlı, dit-elle, m’a demandé de vous remercier. D’avoir été son frère toute sa vie.

De la gratitude. Pour un homme qui compte quatorze noms chaque nuit depuis soixante-dix ans.

Les livres disent toujours « neuf jours ». Mais toi, tu n’as jamais oublié cette demi-journée. L’après-midi où Gülsüm est arrivée en courant pieds nus dans la neige. Kâzım faisant demi-tour sans se retourner.

Parfois, l’histoire d’un héros se bâtit sur un remords.

L’histoire n’avait pas à finir ainsi. N’aurais-tu pas pu dire autre chose le troisième jour ?`},
end_sis:{b:`Zeynep te demande quelque chose, mais les mots s’emmêlent. La jeune fille devant toi devient Nazlı, puis Gülsüm, puis plus personne.

— Sergent ? dis-tu à la chambre vide. La mèche… la mèche est courte…

Sevim entre et t’aide à t’allonger. Zeynep range l’enregistreur sans bruit. Elle s’arrête sur le seuil et te regarde un moment.

Elle revient la semaine suivante. Et celle d’après. Mais l’histoire ne se recompose jamais.

Certains secrets ne sont pas gardés par une promesse, mais par le brouillard.

L’histoire n’avait pas à finir ainsi. N’aurais-tu pas pu t’accorder un peu de repos en la racontant ?`}
 }};
})();
