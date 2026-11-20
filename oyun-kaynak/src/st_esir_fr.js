/* HİKÂYE · ESİR · Fransızca metin katmanı (mantık st_esir.js’ten gelir) */
(function(){
const gaveLine=fl=>fl.gave?`\n\nTu racontes toi-même au commandant du bataillon la petite information que tu as livrée dans la salle d’interrogatoire. Il se tait longtemps, puis te touche l’épaule :\n\n— Tout le monde a une limite, sergent. Même à la tienne, tu as choisi ton camarade.`:'';
TALE_FR.esir={
 meta:{ti:'Le Captif',genre:'Survie · Évasion',sub:'Un groupe capturé derrière les lignes ennemies et son évasion',
  pitch:'Ton groupe est capturé après une embuscade lors d’une patrouille de nuit. Un caporal blessé, un jeune soldat en première mission et un commandant patient qui t’attend dans la salle d’interrogatoire. À qui feras-tu confiance, et qui laisseras-tu derrière toi ? Tout le monde ne rentrera peut-être pas.',
  chapters:[{ti:'Embuscade',sub:'Patrouille de nuit et capture'},{ti:'La cellule',sub:'Interrogatoire et volonté'},{ti:'Le plan',sub:'Observation et confiance'},{ti:'L’évasion',sub:'Barbelés et poursuite'},{ti:'Le retour',sub:'Champ de mines et chemin du retour'}],
  statDefs:[['moral','Moral','var(--acc)'],['saglik','Santé','var(--green)'],['bag','Lien du groupe','var(--blue)']]},
 medal:'Revenu de captivité',
 end:{kahraman:'Le retour d’un héros',aci:'Victoire amère',yalniz:'Seul',bedel:'Le prix',karanlik:'Ténèbres'},
 scenes:{
p1:{b:`02 h 40. Tu es au pied de la crête de l’Aigle ; la frontière n’est qu’à quelques centaines de mètres.

Au briefing du soir, le commandant du bataillon a été bref : « Il y a du mouvement de l’autre côté. Approchez-vous, regardez, comptez, revenez. Pas d’accrochage. »

Deux hommes t’accompagnent. Le caporal Selim Kara a douze ans d’uniforme ; il parle peu, et quand il parle, c’est souvent pour plaisanter. Le soldat Mert Aydın a vingt ans, et c’est sa première patrouille de nuit. Dans le noir, tu l’entends essayer de retenir son souffle.

Deux chemins s’offrent à vous. Le lit du ruisseau Gris est à couvert, mais lent. Le sentier de crête est rapide, mais exposé sous la lune.`,
 ch:['Suivre le lit du ruisseau. Lent mais invisible.','Prendre le sentier de crête. Le temps compte.','Avant de partir, aller voir Mert.']},
p1b:{b:`Tu poses la main sur l’épaule de Mert. Tu le sens trembler.

— Tout le monde a peur la première nuit, dis-tu à voix basse. Celui qui n’a pas peur, soit il ment, soit il n’a pas encore compris.

— Alors je ne mens pas, sergent, murmure Mert. Sa voix se raffermit un peu.

Selim sourit dans le noir :

— Moi, au bout de douze ans, je n’ai toujours pas compris. Allez, tâchons d’être rentrés pour le petit-déjeuner.`,
 ch:['Suivre le lit du ruisseau. Lent mais invisible.','Prendre le sentier de crête. Le temps compte.']},
p2:{b:(st,fl)=>(fl.path==='dere'
 ?`Pendant une demi-heure, vous avancez sur les pierres mouillées du ruisseau. Au moment où vous montez sur le replat face à la crête, le ciel devient soudain blanc : une fusée éclairante.`
 :`Vous avancez vite sur la crête, mais la lune est juste au-dessus de vous. Entre les rochers, tu aperçois un éclat de métal. Trop tard. Le ciel devient soudain blanc : une fusée éclairante.`)+`

Puis le bruit d’une mitrailleuse. Tu plonges derrière les rochers. Tu entends Selim pousser un cri étouffé ; il est touché à la jambe.

Mert est figé près de la radio. Les tirs viennent de trois directions. Vous êtes tombés dans une embuscade.`,
 ch:['Appeler le QG par radio : signaler l’embuscade et vos coordonnées.','Traîner Selim derrière les rochers.','Riposter et couvrir Mert.']},
p3a:{b:`Tu arraches la radio des mains de Mert.

— Aigle Un, Aigle Un, ici Oiseau de Nuit ! Embuscade ! Carré quatre-un, huit-sept. Tirs sur trois côtés, un blessé !

Grésillements. Puis une voix hachée : « …reçu… tenez bon… »

Le message est passé. Mais pendant ces quelques secondes, Selim est resté seul entre les rochers, et l’étau de feu se resserre.`,ch:['Continuer.']},
p3b:{b:`Tu attrapes Selim par le ceinturon et le traînes derrière les rochers. Une balle te frôle l’oreille ; des éclats de pierre t’entaillent le visage.

— Laissez-moi, sergent, gémit Selim. Allez à la radio !

— Tais-toi, dis-tu. Personne n’abandonne personne.

Selim est à couvert maintenant. Mais la radio est entre les mains de Mert, et Mert est à découvert.`,ch:['Continuer.']},
p3c:{b:(st,fl)=>fl.cover==='ok'
 ?`Tu épaules ton fusil et tires de courtes rafales vers les lueurs de départ. Une des armes en face se tait.

Pendant ce temps, Mert tire Selim à couvert. Malgré sa peur, le gamin a fait ce qu’il fallait.`
 :`Tu épaules ton fusil et tires vers les lueurs de départ. Quelque chose te frappe l’épaule gauche, comme un coup de masse. Une chaleur humide coule le long de ton bras.

Tu continues pourtant à tirer. Pendant ce temps, Mert tire Selim à couvert.`,ch:['Continuer.']},
p4:{b:`Les tirs cessent. Ce n’est pas bon signe.

Des pas dans le noir, tout autour des rochers. Puis une voix, dans un turc à fort accent :

— Sergent ! Vous êtes encerclés. Rendez-vous et votre blessé vivra. Résistez, et vous mourrez tous.

Tu vérifies ton chargeur : les dernières cartouches. Mert te regarde. Le visage de Selim est blanc comme de la craie.`,
 ch:['Se rendre. Garder tes hommes en vie passe avant tout.','Faire brûler le carnet de codes par Mert, puis se rendre.','Tenter de tenir jusqu’à la dernière balle.']},
p5:{b:(st,fl)=>`On t’attache les mains dans le dos avec des colliers de serrage et on t’enfile un sac rêche sur la tête. On vous jette à l’arrière d’un pick-up. Tu entends Selim gémir et Mert respirer vite.${fl.fought?`

Le coup de crosse reçu à la tête t’élance encore. Tes oreilles bourdonnent.`:''}${fl.burn?`

Avant de te rendre, tu as vu Mert enflammer le carnet de codes avec son briquet. Au moins, ces pages ne tomberont pas entre leurs mains.`:''}

Le pick-up s’élance sur la route en cahotant.`,
 ch:['Murmurer à Mert : « Reste calme. On sortira ensemble. »','Compter en silence les virages et les bruits. Mémoriser l’itinéraire.','Ne rien faire. Garder tes forces.']},
p6:{b:(st,fl)=>(fl.route?`Gauche. Gauche. Une longue ligne droite. Sous les roues, le bruit creux d’un pont ; du bois, pas du métal. Puis un virage serré à droite. Quarante minutes. Tu ne dois pas l’oublier.

`:'')+`Le pick-up s’arrête. Des aboiements, le grincement d’un portail en fer, des cris dans une langue que tu ne comprends pas.

Quand on t’ôte le sac, tu vois de hautes clôtures barbelées, des miradors et des projecteurs. Un camp de prisonniers.

Un officier à l’uniforme impeccable s’approche et sourit :

— Bienvenue, sergent. Je suis le commandant Rehn. Nous allons beaucoup parler.`,ch:['Attendre d’être conduit en cellule.']},
h1:{b:`Une cellule en béton. Trois pas de long, deux de large. Tout en haut, une petite fenêtre à barreaux. Un seau dans un coin.

Le pansement à la jambe de Selim est trempé de sang et sa fièvre monte. Mert est assis contre le mur, les genoux serrés contre lui.

Un vieux gardien monte la garde près de la porte. Il ne crie pas comme les autres ; de temps en temps, il jette un œil entre les barreaux.`,
 ch:['Déchirer ta chemise et refaire le pansement de Selim.','Demander au vieux gardien de l’eau et un linge propre.','Dire à Selim de tenir bon. Garder tes forces.']},
h1b:{b:`— De l’eau, dis-tu au gardien. Nous avons un blessé. S’il vous plaît.

L’homme te regarde un moment. Puis il s’éloigne sans un mot. Dix minutes plus tard, il revient avec une bouteille d’eau et un linge propre plié, qu’il te passe entre les barreaux.

— Tobas, dit-il en se tapotant la poitrine. Ce doit être son nom.

— Merci, Tobas.

Il hoche la tête et retourne à son poste. Dans ce camp, tout le monde n’est peut-être pas un ennemi.`,ch:['Continuer.']},
h2:{b:(st,fl)=>`Avant l’aube, on te sort de la cellule. Une petite pièce sans fenêtre. Sur la table : une lampe, un dossier et un verre de thé.

Le commandant Rehn parle poliment, calmement, presque gentiment :

— Buvez votre thé, sergent. Donnez-nous les positions de votre unité et les codes radio, et vous et vos amis verrez un médecin ce soir. Vous avez ma parole.${fl.burn?`

Il marque une pause.

— Votre carnet de codes avait brûlé. Malin. Mais je suis un homme patient.`:''}`,
 ch:['Ne donner que ton nom, ton grade et ton matricule.','Donner de fausses positions pour gagner du temps.','Ne rien dire. Le regarder dans les yeux.']},
h3:{b:(st,fl)=>`Rehn fait ouvrir la porte. Deux soldats traînent Mert à l’intérieur. Le garçon a la lèvre fendue.${fl.lie?`

— Les positions que vous nous avez données étaient vides, sergent, dit Rehn de la même voix calme. Les mensonges ont un prix.`:''}

— Si vous ne parlez pas, dit Rehn, lui parlera peut-être. Il est jeune, il a peur. Les gens qui ont peur racontent tout.

Mert te regarde. Il n’y a pas de supplication dans ses yeux ; c’est le regard d’un soldat qui attend des ordres.`,
 ch:['Donner une information mineure mais vraie pour sauver Mert.','Dire « C’est moi qui commande, il ne sait rien. » Porter le poids toi-même.','Te taire. Faire signe à Mert de se taire aussi.']},
h4:{b:(st,fl)=>`Cette nuit-là, vous êtes allongés tous les trois côte à côte dans la cellule. ${fl.mertHurt?'Mert, tourné vers le mur, pleure en silence ; il a été durement battu aujourd’hui dans la salle d’interrogatoire.':'Mert pleure en silence.'} ${fl.band?'La fièvre de Selim a un peu baissé ; le pansement a fait effet.':'Selim a toujours beaucoup de fièvre.'}

Selim sort de sa poche une photo froissée. Une fillette d’environ six ans, qui sourit avec des dents en moins.

— Elif, dit-il. Je lui ai promis d’être là pour son anniversaire. Plus que trois semaines.`,
 ch:['Leur parler de ta maison, de ton village, de ce que tu feras en rentrant.','Commencer à chuchoter au sujet de l’évasion.','Leur dire de dormir. Il vous faut des forces.']},
k1:{b:(st,fl)=>`Les jours se confondent. Chaque midi, on vous sort dans la cour pour une promenade d’une demi-heure. C’est le seul moment où tu peux voir le camp.${fl.plan?`

Désormais, tous les trois ne pensez qu’à l’évasion. Chaque promenade est une reconnaissance.`:''}

À quoi feras-tu attention aujourd’hui ?`,
 ch:['Les relèves de la garde et les horaires des miradors.','Les points faibles de la clôture barbelée.','Les gens : qui traite qui, et comment.']},
k1b:{b:(st,fl)=>`Le lendemain, tu es de nouveau dans la cour. ${fl.shift?'Hier, tu as remarqué que les gardes des miradors sont relevés à trois heures ; pendant la relève, les projecteurs ne couvrent pas la cour pendant quelques minutes.':fl.fence?'Hier, tu as remarqué qu’au coin nord-est, le sol s’est affaissé au pied d’un poteau et que le fil est lâche.':'Hier, tu as remarqué que les autres gardiens ne respectent guère le vieux Tobas, et qu’il ne traite pas les prisonniers comme eux.'}

Que vas-tu observer d’autre aujourd’hui ?`,
 ch:['Les relèves de la garde et les horaires des miradors.','Les points faibles de la clôture barbelée.','Les gens : qui traite qui, et comment.']},
k2:{b:`Au dîner, la porte s’entrouvre. Tobas glisse sous ton assiette une tranche de pain en plus et un morceau de fromage.

— Mon fils, dit-il dans un turc hésitant. Lui aussi est soldat. Comme toi. Peut-être qu’il est quelque part, lui aussi… Personne ne lui donne de pain.

Ses yeux sont humides. Peux-tu faire confiance à cet homme ?`,
 ch:['Demander de l’aide à Tobas : la serrure, les horaires de garde.','Le remercier sans rien demander. Ne pas prendre de risque.','Essayer de lui voler ses clés quand il s’assoupit.']},
k3ok:{b:`Tobas se tait longtemps. Puis il baisse la voix :

— Jeudi soir, je suis de garde. À trois heures, on relève les gardes des miradors ; pendant dix minutes, personne ne regarde la cour. Le verrou de votre porte… pourrait être oublié.

Il passe la main entre les barreaux. Tu la serres. Vos mains tremblent à tous les deux.`,ch:['Continuer.']},
k3no:{b:`Le visage de Tobas change en un instant. Il recule et s’en va sans un mot.

Une demi-heure plus tard, deux gardiens entrent dans la cellule. Ils te font sortir et te frappent. Rehn regarde depuis l’encadrement de la porte, les bras croisés :

— Un plan d’évasion, sergent ? Désormais, je vous ai à l'œil.

Tu ne revois plus jamais Tobas de garde.`,ch:['Continuer.']},
k3:{b:`Tu remercies Tobas d’un signe de tête. Vous partagez tous les trois le pain et le fromage.

Selim avale sa bouchée et sourit :

— Le meilleur fromage de ma vie. N’en dites rien à Elif, les pâtisseries de sa mère seraient vexées.`,ch:['Continuer.']},
k3key:{b:`Tobas ronfle sur sa chaise, la tête sur la poitrine. Tout doucement, tu fais glisser une seule clé du trousseau à sa ceinture. Pour que le tintement ne change pas, tu mets un bout de fil de fer à sa place.

La clé est dans ta paume. Ton cœur cogne contre tes côtes.`,ch:['Continuer.']},
k3no2:{b:`Au moment où ta main atteint sa ceinture, Tobas ouvre les yeux. Il ne dit rien ; il n’y a qu’une profonde déception sur son visage. Puis il donne un coup de sifflet.

Cette nuit-là, on te fait rester debout jusqu’au matin. Rehn regarde depuis la porte :

— Un plan d’évasion, sergent ? Désormais, je vous ai à l'œil.`,ch:['Continuer.']},
k4:{b:(st,fl)=>`Tu trouves une pièce desserrée dans le cadre en fer de la couchette. Pendant des jours, tu en frottes l’extrémité sur le sol en béton jusqu’à la rendre plate et tranchante.${fl.fence?' Elle pourrait servir sur la clôture que tu as repérée.':''}${fl.watched?`

Rehn ne bluffait pas : deux patrouilles supplémentaires passent désormais devant votre cellule chaque nuit.`:''}

Mais le vrai problème, c’est Selim. Sa jambe n’a pas guéri ; il boite.

— Je vais vous ralentir, sergent, dit-il. Partez. Je reste ici. Je me débrouillerai.`,
 ch:['« Non. On est entrés à trois, on sort à trois. » Tu porteras Selim.','Promettre à Selim de revenir le chercher une fois dehors.','Selim crée une diversion dans le camp pendant que vous vous évadez.']},
k5:{b:`Le plan est prêt. Il ne reste qu’une décision : quand ?`,
 ch:['À trois heures, pendant la relève des miradors.','Jeudi soir, quand Tobas est de garde.','La première nuit de pluie. La pluie couvre les bruits et les traces.'],
 why:['Tu n’as pas observé les horaires de garde.','Tu n’as pas l’aide de Tobas.']},
e1:{b:(st,fl)=>(fl.time==='shift'?`02 h 55. Tu comptes les balayages du projecteur du mirador : un toutes les quarante secondes.`
 :fl.time==='tobas'?`Jeudi soir. Les pas lourds de Tobas passent une fois dans le couloir, puis s’arrêtent.`
 :`Tu as attendu trois jours. Enfin, le tonnerre gronde ; la pluie martèle le toit.`)+`

Mert est prêt. `+(fl.carry?`Tu as passé le bras de Selim sur ton épaule ; il serre les dents et se lève.`
 :fl.leaveSelim?`Selim est allongé sur sa couchette, les yeux fermés, faisant semblant de dormir. Vous ne vous êtes pas dit au revoir ; c’est plus facile ainsi.`
 :`Selim se redresse sur sa couchette et te fait un clin d'œil, comme pour dire « attendez mon signal ».`),
 ch:['Pousser doucement la porte. Tobas a dû tenir parole.','Mettre la clé volée dans la serrure.','Essayer de soulever le verrou avec la pièce de fer.']},
e1x:{b:`Le fer racle le verrou dans un grincement aigu. Une lampe torche s’allume dans le couloir.

Tu retiens ton souffle. La lumière reste un moment devant la porte… puis s’éloigne. Le gardien a dû croire à un rat.

Au deuxième essai, le verrou se soulève.`,ch:['Continuer.']},
e2:{b:(st,fl)=>`Tu traverses le coin sombre de la cour et atteins la clôture.${fl.fence?' C’est l’endroit que tu as choisi : le sol s’est affaissé au pied du poteau et le fil est lâche.':' Le fil est tendu, avec des espaces pas plus larges qu’une main.'}`,
 ch:['Ramper sous le fil près du poteau desserré.','Écarter les fils avec la pièce de fer pour ouvrir un passage.']},
e3:{b:(st,fl)=>(fl.alarm?`Un fil casse et fait tomber la boîte de conserve qui y était attachée. Un instant de silence… puis la sirène !`
 :`Tu es de l’autre côté de la clôture. Au moment où tu vas courir vers la lisière de la forêt, le projecteur glisse sur l’herbe vers toi.`)+(fl.diversion?`

Au même instant, des cris éclatent à l’autre bout du camp. Selim ! Il frappe les barreaux de la cellule et hurle à pleins poumons. Les projecteurs pivotent dans sa direction.`:''),
 ch:['Saisir la chance que Selim t’a offerte. Cours !','Cours ! Ne t’arrête pas avant la forêt.','Te plaquer au sol. Ne pas bouger avant que la lumière passe.','Courir vers la lumière pour attirer leur attention. Laisser les autres s’échapper.']},
e3b:{b:(st,fl)=>`Une rafale de mitrailleuse laboure le sol.${fl.carry?' Le poids de Selim te ralentit. Au passage d’une balle, Selim sursaute et gémit ; il est touché.':' Une balle t’érafle le mollet.'}

Tu atteins pourtant l’obscurité des arbres.`,ch:['Continuer.']},
e4:{b:(st,fl)=>`Des aboiements derrière toi. Des faisceaux de lampes dansent entre les arbres.${fl.route?`

L’itinéraire compté dans le pick-up est encore dans ta tête : le pont de bois, la longue ligne droite… Le pont doit être au sud. La frontière est par là.`:''}`,
 ch:['Entrer dans le ruisseau. L’eau cachera ton odeur aux chiens.','Monter sur la crête et s’éloigner vite.','Suivre l’itinéraire mémorisé dans le pick-up. Se diriger vers le pont.']},
b1:{b:(st,fl)=>`Tu cours droit dans le faisceau du projecteur. Tu ouvres les bras et cries. Tous les canons se tournent vers toi.

Derrière toi, dans le noir, tu vois ${fl.carry?'Mert hisser Selim sur son épaule et':'Mert'} disparaître entre les arbres. Puis un coup de crosse, et le noir.`,ch:['…']},
d1:{b:(st,fl)=>`À l’aube, vous vous abritez dans un creux de rocher. Tu es trempé et affamé ; tes pieds sont en sang.

${fl.carry?(fl.selimHit?'La blessure de Selim ne cesse de saigner et sa fièvre est remontée. Ses lèvres sont gercées ; il murmure sans cesse le nom d’Elif.':'La fièvre de Selim est remontée. Ses lèvres sont gercées ; il délire.'):'Mert dort à côté de toi en grelottant. De temps en temps, il se réveille en sursaut, puis se rendort.'}`,
 ch:['Se reposer ici une journée et marcher de nuit.','Continuer maintenant. Les équipes de recherche approchent peut-être.','Donner à Selim tes dernières provisions et ton eau.']},
d2:{b:`L’après-midi, les arbres s’éclaircissent. Au loin, au sommet d’une colline, tu vois flotter un drapeau : le nôtre.

Entre vous, un kilomètre de terrain découvert. Mert montre un panneau rouillé, à moitié enterré. Dessus, une tête de mort rouge.

Un champ de mines.`,
 ch:['Sonder le sol au couteau et avancer centimètre par centimètre.','Suivre les traces des animaux ; passer là où sont passées les chèvres.','Traverser en courant. Plus ce sera court, mieux ce sera.']},
d3:{b:(st,fl)=>`À mi-chemin, Mert se fige.

— Sergent, murmure-t-il. Quelque chose a cliqué sous mon pied.

Il est sur une mine à pression. Dès qu’il lèvera le pied, elle explosera.${fl.run?' Il a marché dessus en courant ; maintenant, il tient en équilibre sur un pied.':''}`,
 ch:['Essayer de remplacer le poids de Mert par une pierre aussi lourde.','Rester avec lui et le calmer. Faire signe aux nôtres.','Dire à Mert de se jeter en avant.']},
d3ok:{b:`Un instant, tout s’arrête. Puis rien ne se passe.

Mert est étendu face contre terre à quelques pas, les mains enfoncées dans la terre. Il est vivant. Il te regarde et essaie de rire, mais il pleure. Toi aussi.

Tu fais le reste du chemin en marchant dans ses traces.`,ch:['Continuer.']},
d3help:{b:(st,fl)=>`Ils doivent vous observer à la jumelle depuis la tranchée sur la colline. Une demi-heure plus tard, un sergent du génie rampe jusqu’à vous avec un détecteur de mines.${fl.msg?`

— Nous avons reçu votre message radio, dit-il. Ça fait des jours qu’on vous cherche.`:''}

D’une main experte, il désamorce la mine. Mert tombe à genoux en sanglotant. Tu le laisses pleurer.

Le sapeur vous conduit jusqu’aux tranchées par le passage sûr qu’il a dégagé.`,ch:['Continuer.']},
d3x:{b:`L’explosion, un instant de silence blanc. Puis un sifflement dans les oreilles.

Tu rampes jusqu’à l’endroit où gît Mert. Ses yeux sont ouverts, il te regarde. Il essaie de dire quelque chose, mais aucun son ne sort. Tu lui tiens la main ; il tient la tienne. Puis il ne la tient plus.

Il avait vingt ans. C’était sa première patrouille de nuit.`,ch:['Continuer.']},
d4:{b:`Les cent derniers mètres. Une voix s’élève de la tranchée sur la colline :

— Halte ! Qui êtes-vous ? Ne bougez plus !

Les canons sont braqués sur vous. Vous portez les vêtements de prisonnier déchirés du camp ennemi. Les nôtres ne vous reconnaissent pas.`,
 ch:['Lever les mains et crier le mot de passe du bataillon.','Se plaquer au sol ; crier ton nom, ton grade et ton unité.','Crier « Oiseau de Nuit ! Oiseau de Nuit rentre à la maison ! »']},
end_kahraman:{b:(st,fl)=>`Vous dégringolez tous les trois dans la tranchée, dans vos vêtements de prisonnier en lambeaux. Quelqu’un apporte des couvertures, quelqu’un de l’eau. Le commandant du bataillon arrive en courant ; il te serre dans ses bras d’abord, puis Selim, puis Mert.

Trois semaines plus tard, tu es dans le jardin de l’hôpital. Selim est en fauteuil roulant, Elif sur les genoux. Il a été là pour son anniversaire. Mert allume les bougies du gâteau ; sa main ne tremble plus.

Un mois plus tard, on épingle une médaille sur ta poitrine sur le terrain de manœuvre. Tu cherches deux visages dans la foule. Ils sont au premier rang, debout tous les deux, et applaudissent.${gaveLine(fl)}

Vous étiez trois à entrer. Vous êtes trois à sortir.`},
end_aci:{b:(st,fl)=>{const mDead=fl.mert==='dead',sDead=fl.carry&&fl.selimDead===1;
 let t=`En atteignant notre tranchée, tes genoux lâchent. Couvertures, eau, grésillements de radio… tout semble venir de très loin.`;
 if(mDead)t+=`

Deux jours plus tard, le corps de Mert, tel que le génie l’a récupéré dans le champ de mines, est envoyé dans son village. Tu écris toi-même la lettre à sa mère. Tu recommences trois fois ; aucune phrase ne suffit.`;
 if(sDead)t+=`

Selim n’a jamais vu la frontière. La dernière nuit, dans le creux de rocher, brûlant de fièvre, il murmurait sans cesse le nom d’Elif. Tu l’as ramené sur ton dos. Tu n’as pas pu rendre un père à sa fille, mais tu as ramené un soldat à son pays.`;
 else if(!fl.carry)t+=`

Tu as laissé Selim au camp. Tu penses à lui chaque nuit. Quatre mois plus tard, son nom apparaît sur une liste d’échange de prisonniers. Il a maigri, ses cheveux ont blanchi, mais il est vivant. Il a manqué l’anniversaire d’Elif ; il promet d’être là pour le prochain. Cette fois, il tient parole.`;
 return t+gaveLine(fl)+`

La médaille épinglée sur ta poitrine pèse un peu plus lourd chaque matin.`}},
end_yalniz:{b:(st,fl)=>`Tu entres seul dans la tranchée.

Tu as laissé Mert dans le champ de mines, et Selim ${fl.carry?'dans ce creux de rocher, la dernière nuit':'derrière les barbelés'}. Vous êtes partis en groupe ; tu es le seul à être revenu.

Pendant des semaines, tu ne parles pas. La nuit, dans ton sommeil, tu entends des grésillements de radio : « …tenez bon… »

Un matin, dans le jardin de l’hôpital, quelqu’un s’assoit à côté de toi. La femme de Selim, Elif sur les genoux. Elle ne t’en veut pas ; elle veut seulement savoir ce qui s’est passé. Tu lui racontes tout. Pour la première fois, tu pleures.

Parfois, survivre n’est pas une victoire, mais une responsabilité.`},
end_bedel:{b:(st,fl)=>`Quand on te rejette dans la cellule, il y a une étrange paix sur ton visage.${fl.leaveSelim||fl.diversion?' Selim est de l’autre côté du mur ; vous êtes restés tous les deux, mais Mert s’est échappé.':''}

Deux semaines plus tard, Rehn s’arrête devant ta cellule :

— ${fl.carry?'Vos amis ont':'Votre soldat a'} passé la frontière, sergent. Félicitations. Vous avez perdu… et pourtant vous avez gagné. Je vois rarement ça.

Sept mois plus tard, par un matin de brouillard, un échange de prisonniers a lieu sur le pont entre les deux pays.${fl.carry?'':' Selim marche à côté de toi, appuyé sur ton bras.'} Une silhouette attend au bout du pont ; à mesure que tu approches, le visage se précise. Mert. À côté de lui, ${fl.carry?'Selim sur des béquilles':'le commandant du bataillon'}.

Mert te salue. Tu lui rends son salut.

Certaines victoires reviennent à celui qui en paie le prix.`},
end_karanlik:{b:(st,fl)=>st.saglik<=0&&fl._failC>=3
 ?`Tes blessures et l’épuisement finissent par te terrasser. Le sol est froid ; le ciel est très loin.

${fl.mert==='dead'?'Il n’y a personne à côté de toi. La dernière chose à laquelle tu penses, c’est le moment où tu as tenu la main de Mert.':'Mert essaie de te traîner, puis s’effondre à côté de toi et te prend la main. « Je ne vous lâcherai pas, sergent, dit-il. Vous ne m’avez pas lâché non plus. »'}

${fl.mert==='dead'?'Quelques jours plus tard, une patrouille retrouve ta plaque d’identité dans un creux de rocher à quelques kilomètres de la frontière et la rapporte à ton bataillon.':'Deux jours plus tard, Mert atteint seul notre tranchée. Il dépose une plaque d’identité dans la paume du commandant du bataillon : la tienne.'}

L’histoire n’avait pas à finir ainsi. À quel point tes choix ont-ils usé ton corps ?`
 :st.saglik<=0
 ?`Ton corps n’en pouvait plus. Un matin, tu n’arrives pas à te lever de ta couchette ; les voix de Selim et de Mert s’éloignent de plus en plus.

Quand le médecin du camp arrive, il est trop tard.

Des mois plus tard, lors d’un échange de prisonniers, on remet une liste avec une marque à côté de ton nom. Mert gardera cette liste dans son portefeuille pendant des années.

L’histoire n’avait pas à finir ainsi. À quel point tes choix ont-ils usé ton corps et ton esprit ?`
 :`Un jour, face à Rehn, tu te rends compte que ta voix ne t’appartient plus. Tu lui dis tout ce qu’il demande. Tu as perdu espoir.

Après cette nuit-là, Selim ne t’adresse plus la parole. Mert n’arrive plus à te regarder en face.

Tout le monde a un point de rupture. Le tien était ici.

L’histoire n’avait pas à finir ainsi. Aurais-tu pu faire des choix qui gardaient ton moral debout ?`}
 }};
})();
