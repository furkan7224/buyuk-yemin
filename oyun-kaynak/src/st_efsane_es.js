/* HİKÂYE · EFSANE BİRLİK · İspanyolca metin katmanı (mantık st_efsane.js'ten gelir) */
(function(){
TALE_ES.efsane={
 meta:{ti:'La Unidad Legendaria',genre:'Drama · Guerra',sub:'Un secreto de setenta años en la habitación de una residencia',
  pitch:'Un veterano de noventa y un años le cuenta a una joven estudiante de historia la leyenda de la Unidad Legendaria: doce soldados que defendieron un paso durante nueve días para salvar una aldea. Pero cuanto más habla, menos encajan las piezas. Una promesa guardada setenta años, una chapa de identificación y un nombre.',
  chapters:[{ti:'La visita',sub:'La residencia y el primer recuerdo'},{ti:'El paso',sub:'El Paso del Águila y la aldea de Akpınar'},{ti:'Nueve días',sub:'Hambre, frío y una bandera blanca'},{ti:'La última noche',sub:'La cornisa de nieve y la chapa'},{ti:'La verdad',sub:'La última pregunta'}],
  statDefs:[['hafiza','Memoria','var(--blue)'],['birlik','Espíritu de unidad','var(--green)'],['vicdan','Conciencia','var(--acc)']]},
 medal:'Medalla de la Unidad Legendaria',
 end:{gercek:'Dos nombres',efsane:'La leyenda',emanet:'El legado',bedel:'Medio día',sis:'La niebla'},
 scenes:{
z1:{b:`Residencia Çamlık, noviembre. La lluvia dibuja líneas finas en la ventana.

Tienes noventa y un años. Por las mañanas te duelen primero las rodillas y después los recuerdos.

Sevim, la enfermera, llama a la puerta:

—Abuelo Kâzım, tiene visita. Una chica de la universidad. Estudia historia y graba los relatos de los viejos soldados. Ha preguntado por usted. Por la Compañía Lobo.

La Compañía Lobo. En los libros de texto la llaman «la Unidad Legendaria»: doce soldados que defendieron el Paso del Águila durante nueve días y salvaron una aldea. Y a ti te conocen como su único superviviente.

En el cajón de la mesilla, envuelta en un pañuelo, guardas una medalla. Hace años que no la desenvuelves.`,
 ch:['«Que pase. Quizá ya sea hora de contarlo».','Dices: «Estoy cansado, otro día».']},
z2:{b:(st,fl)=>`${fl.isteksiz
 ?'Antes de irse, Sevim deja una fotografía en la mesilla: «Ella quería que usted la viera». Un minuto después, la chica está en la puerta. No entra sin permiso, pero tampoco parece dispuesta a rendirse.'
 :'La chica entra. No tendrá más de veinticuatro años. En la mano, una grabadora; en el bolso, una carpeta gruesa.'}

—Me llamo Zeynep —dice—. Quería enseñarle una fotografía.

Conoces esa fotografía. Doce jóvenes en la nieve. Algunos sonríen, otros miran a la cámara con el ceño fruncido. Detrás, las rocas del Paso del Águila.

—Esta foto aparece en todos los libros —dice Zeynep—. Pero no lleva nombres debajo. ¿Cuál es usted?

Tu dedo se detiene sobre la foto.`,
 ch:['Señalas al sargento ancho de hombros que sonríe en el centro.','Señalas al muchacho flaco que tirita en la nieve, en un extremo.']},
z2b:{b:`Zeynep mira la foto y luego a ti.

—Pero ese chico… según los registros es el soldado Hasan Çelik. Cayó la novena noche.

Por un momento solo se oye la lluvia.

—Mis ojos ya no ven como antes, hija —dices—. Es la edad.

Zeynep anota algo en su cuaderno. Luego sonríe:

—¿Me lo cuenta desde el principio? Desde el día en que llegó a la unidad.`,ch:['Cierras los ojos y empiezas a contar.']},
z3:{b:(st,fl)=>`${fl.gosterdi==='cavus'?`Zeynep mira la foto.

—Sargento Kâzım Yıldırım —dice—. Veintitrés años.

Y enciende la grabadora.

—Cuéntemelo desde el principio. Desde el día en que llegó a la unidad.

Cierras los ojos.

`:''}*Hace setenta y dos años. Frente oriental.*

Saltas a la nieve desde la caja del camión. Tienes diecinueve años. Todo lo que tienes desde que saliste del orfanato cabe en la mochila que llevas a la espalda.

Las tiendas de la Compañía Lobo se alinean junto al arroyo. El capitán Ateş Kaya te mira de arriba abajo y, sin decir nada, marca tu nombre en la lista.

Luego, una voz:

—¿Este es el novato?

Un sargento ancho de hombros, con bigote. Cuando se ríe, los ojos le desaparecen. Al ver tus manos amoratadas, se quita los guantes y te los tiende:

—Toma. En mi pueblo a esto ni lo llamamos nieve.

En la placa de su pecho pone: *K. Yıldırım*.`,
 ch:['Aceptas los guantes. Le das las gracias.','Dices: «No, gracias». No quieres deberle nada a nadie.','Preguntas por el nombre de la compañía. ¿Por qué «Lobo»?']},
z4:{b:(st,fl)=>`${fl.eldiven
 ?'El sargento te da una palmada en el hombro: —Soy Kâzım. Tú me llamas sargento y yo te llamo novato. ¿Trato hecho?'
 :fl.kurt
 ?'El sargento se ríe: —Porque el lobo no abandona la manada. Si uno cae, la manada no lo deja atrás. Soy Kâzım. Ahora tú también eres de la manada, novato.'
 :'El sargento se encoge de hombros: —Como quieras. Pero en esta montaña todos acaban debiéndole algo a alguien. Soy Kâzım.'}

Las primeras semanas pasan entre nieve, guardias y las historias interminables de Kâzım. Te habla de su madre, mamá Hatice, que perdió a dos hijos mayores en otros frentes. Y de su hermana de ocho años, Nazlı: «En cada fiesta le doy su propina. Si esta fiesta no vuelvo, se armará una buena».

En la compañía hay otros: el cabo Bekir, un francotirador callado; Yakup, el radiotelegrafista; Şükrü, el cocinero, que canta canciones populares mientras remueve la olla; y Rıfat, el sanitario.

Una noche de guardia, Kâzım te pregunta:

—¿Y tú a quién tienes, novato? ¿A quién le escribes?`,
 ch:['Dices: «A nadie». Le cuentas la verdad.','Dices: «Tengo una tía». No quieres parecer solo.','No contestas. Cambias de tema.']},
z5:{b:(st,fl)=>`${fl.yetim
 ?'Kâzım se queda callado un buen rato. Luego saca una carta arrugada del bolsillo: —Entonces, desde ahora, la mitad de mis cartas son tuyas —dice—. Mi madre ya está acostumbrada a rezar por más de uno.'
 :'Kâzım no pregunta más. Pero desde esa noche añade una línea al final de cada carta: «Tengo a un novato conmigo. Reza por él también, madre».'}

Al abrir los ojos, Zeynep te está mirando. La luz roja de la grabadora parpadea.

—Mamá Hatice —dice despacio—. Nazlı. Ha pronunciado esos nombres con mucho cariño.

Luego saca una hoja de la carpeta:

—¿Puedo preguntarle algo? No se ofenda, por favor. En la hoja de servicio de Kâzım Yıldırım figura el grupo sanguíneo 0. En el historial médico de esta residencia, el suyo es A.

Se te seca la garganta.`,
 ch:['«Un error del escribiente, hija. Entonces todo se escribía a mano».','Te quedas callado un momento. Luego dices: «Hablemos mañana».','Das un sorbo al té. Intentas ocultar el temblor de las manos.']},
g1:{b:(st,fl)=>`Al día siguiente Zeynep vuelve. ${fl.katip
 ?'No vuelve a mencionar el grupo sanguíneo. Pero la ves anotar algo en el margen del cuaderno.'
 :fl.yarin?'Se sienta con una sonrisa: «Ayer me dijo que hablaríamos mañana. Hoy es ese mañana».':'Deja en la mesilla las pastas que ha traído.'}

—Hábleme del Paso del Águila —dice—. En los libros hay tres líneas. El resto solo lo sabe usted.

A veces los recuerdos llegan solos; otras hay que arrancarlos.`,
 ch:['Empiezas a contar de inmediato.','Primero miras la foto un buen rato. Recuerdas las caras una a una.']},
g2:{b:`*Marzo. El Paso del Águila.*

El capitán Ateş extiende el mapa sobre una roca:

—El enemigo ha roto la línea principal. Este paso es el único camino que baja a la aldea de Akpınar. En la aldea viven trescientas personas. Las evacuaremos por el camino de la meseta, detrás de la montaña. Necesitamos tres días. Durante tres días, defenderemos este paso.

Al llegar a Akpınar, os recibe el alcalde, el abuelo Kerim. Su nieta de diez años, Gülsüm, intenta reunir las cabras. Las mujeres se atan los colchones a la espalda. Ancianos, enfermos, bebés en brazos…

Kâzım se vuelve hacia ti:

—Tenemos que empezar a cavar las posiciones, pero… mira a esa gente, novato.

El capitán te deja decidir qué hacer el primer día.`,
 ch:['Ayudas a los aldeanos a llevar sus cosas al camino de la meseta.','Empiezas a cavar las posiciones. Si no defendemos el paso, no se salva nadie.','Vas con Bekir a explorar las rocas sobre el paso.']},
g3:{b:(st,fl)=>`${fl.yardim
 ?'Al anochecer los brazos se te caen. Gülsüm te tiende la cuerda de una de las cabras: «Soldado, cuídamela. Es la más terca».'
 :fl.mevzi?'Cavas la tierra helada hasta el anochecer. Tienes las manos ensangrentadas, pero la posición es profunda.'
 :'En las rocas sobre el paso, Bekir y tú encontráis una senda de cabras que el enemigo podría usar para rodearos. Bekir solo asiente: «Tienes buen ojo».'}

Primera noche, las tres. En la ladera de enfrente aparecen luces. Ruido de motores. Luego, silencio.

Bekir se desliza a tu lado:

—Sin prisa. Déjalos acercarse. Si disparamos demasiado pronto, sabrán lo pocos que somos.

A tu lado, la respiración de Yakup se acelera. Una bengala sube al cielo.`,
 ch:['Haces caso a Bekir. Esperas a que se acerquen.','Disparas ya. Hay que ahuyentarlos.']},
g4:{b:(st,fl)=>`${fl.gece1==='iyi'
 ?'La avanzadilla enemiga cayó en la emboscada y se retiró. La compañía no tiene heridos. Por la mañana, Kâzım te pasa el primer té.'
 :'El enemigo se dio cuenta de que erais pocos. El fuego de morteros duró toda la noche. La olla de Şükrü quedó agujereada y Rıfat recibió un balazo en el brazo.'}

*Día tres.* El capitán Ateş está herido en la pierna. Aprieta los dientes mientras Rıfat le cambia el vendaje. Yakup levanta la cabeza de la radio:

—Orden del cuartel general, mi capitán: retirada. Inmediata.

Pero media aldea sigue en el camino de la meseta. Por la noche nevó y el camino quedó cortado. Los ancianos y los enfermos avanzan despacio. Hace falta un día más, quizá dos.

El capitán reúne a todos. Su voz es débil, pero firme:

—La orden es clara. Pero no quiero abandonar esta aldea. Si nos quedamos, la mayoría no volverá. Quiero oír lo que pensáis. Tú primero, novato. En esta compañía habla primero el más joven.

Kâzım te mira. Sabes lo que está pensando.`,
 ch:['«Nos quedamos, mi capitán. Hasta que pase la aldea».','«Una orden es una orden, mi capitán. Retirémonos».','«Que se queden los voluntarios y que los demás se retiren».']},
g4b:{b:`El capitán baja la cabeza. Comienza la retirada.

Medio día después, alguien viene corriendo por la nieve del valle. Es Gülsüm. Descalza, con la cara hinchada de llorar:

—¡Están llegando! ¡El abuelo y los demás siguen en el camino!

Kâzım se cuelga el fusil al hombro y da media vuelta. Ni siquiera mira atrás. El capitán se detiene un instante y luego grita:

—¡Compañía! ¡Media vuelta!

Cuando llegáis al paso, el enemigo ya ha alcanzado las primeras casas a las afueras de la aldea. Lo hacéis retroceder, pero se ha perdido medio día. Del último grupo del camino de la meseta, catorce personas no volvieron.

Durante años, cada noche, contarás esos catorce nombres uno por uno.`,ch:['Continuar.']},
g5:{b:(st,fl)=>`La voz de Zeynep te devuelve al presente:

—¿Abuelo Kâzım? ¿Se encuentra bien?

Por un momento no sabes quién es. Ese pelo, la forma de esos ojos…

—¿Nazlı? —dices—. Te he traído la propina de la fiesta…

Zeynep se queda inmóvil. Se le llenan los ojos de lágrimas. Luego alarga la mano y toma la tuya:

—Soy Zeynep —dice despacio—. Pero Nazlı… también es un nombre muy querido para mí.

${fl.geri?'Te quedas un rato sin hablar. Nunca le contaste a nadie lo de aquel medio día. Tampoco está en los libros.':'Todavía te tiemblan las manos.'}`,
 ch:['Descansas un poco. Miras la lluvia por la ventana.','Sigues. Tienes que contarlo antes de olvidarlo.']},
d1:{b:(st,fl)=>`*Día cinco.*

Se ha acabado la comida. Şükrü hace una sopa con el último bulgur y nieve derretida. Toda la compañía se reúne alrededor del vapor que sale de la olla.

${fl.geri
 ?'Los supervivientes del grupo perdido, una veintena, esperan en el aprisco justo debajo del paso.'
 :'El último grupo de la aldea, un centenar de ancianos y enfermos, espera en el aprisco justo debajo del paso, rezando para que se abra el camino cortado por la nieve.'} Los niños tiritan junto al fuego.

Kâzım está de pie junto a la olla y te mira. La sopa no llega ni para doce.`,
 ch:['Compartes la sopa con la gente del aprisco.','Un soldado tiene que conservar fuerzas para luchar. La sopa es de la compañía.','Le llevas tu ración a Gülsüm. No tocas el resto.']},
d2:{b:(st,fl)=>`${fl.paylas?'Sin decir nada, Kâzım te quita el cucharón y le da el primer cuenco al abuelo Kerim. Esa noche media compañía se acuesta con hambre. Nadie se queja.\n\n':fl.gulsum?'Gülsüm sostiene el cuenco con las dos manos y comparte la mitad con su hermano pequeño.\n\n':''}*Día seis.* El capitán Ateş murió en silencio antes del amanecer. Sus últimas palabras fueron para Kâzım: «La compañía es tuya».

La radio también ha muerto. Yakup estuvo toda la noche con los cables, sin éxito. El cuartel general no sabe dónde estáis, ni siquiera si seguís vivos.

Kâzım está ante el mapa:

—Alguien tiene que bajar. Llegar a las tropas del valle y pedir ayuda. Pero el camino está justo bajo los ojos del enemigo.

Todos callan. Y oyes tu propia voz:`,
 ch:['«Voy yo, mi sargento».','«Intentemos arreglar la radio otra vez con Yakup».','«No va nadie. Pase lo que pase, estamos juntos».']},
d3:{b:(st,fl)=>`${fl.haber==='kosu'
 ?'De noche te deslizas por la nieve hacia el valle. Antes del amanecer llegas a una unidad de artillería. «El noveno día», dice su comandante. «Antes no podemos llegar». A la vuelta, Kâzım te espera a la entrada del paso. Te abraza y te da una palmada en la espalda.'
 :fl.yaralandi?'A mitad de camino te topas con una patrulla. Mientras corres, una bala te roza el hombro. Vuelves arrastrándote por la nieve. Mientras Kâzım te mete en la posición, lo oyes gritar por primera vez: «Si vuelves a irte a algún sitio sin preguntarme…». No termina la frase.'
 :fl.haber==='telsiz'?'Antes del amanecer, Yakup grita de alegría. Una voz entrecortada por la radio: «El noveno día. Aguantad. El noveno día».'
 :fl.telsizYok?'La radio no vuelve a hablar. Aun así, Yakup la carga a la espalda; «quién sabe», dice.'
 :'No va nadie. Esa noche la compañía se aprieta más alrededor del fuego.'}

*Día siete.* Una bandera blanca en la ladera de enfrente. Un oficial enemigo camina con un intérprete hasta el centro del paso:

—Rendíos. A las mujeres y a los niños no les pasará nada. Tenéis mi palabra.

Kâzım te susurra:

—El camino del último grupo se abre mañana. Necesitamos un día más.`,
 ch:['Le propones a Kâzım: «Alarguemos la negociación y ganemos tiempo».','«No nos rendimos. Que se vaya».','Preguntas: «¿Y si confiamos en su palabra y le entregamos el grupo?».']},
d4:{b:(st,fl)=>`${{
 oyalama:'Kâzım pasa medio día regateando con el oficial enemigo entre tazas de té: a cada propuesta, una pregunta; a cada pregunta, una historia. Al anochecer, el último grupo ya está en el camino de la meseta.',
 anladi:'La negociación dura una hora. Luego el oficial enemigo se da cuenta de que le hacéis perder el tiempo. Por la tarde llega el ataque más duro hasta entonces. Ese día cae Şükrü. Su olla sigue junto al fuego.',
 red:'El oficial se encoge de hombros y se marcha. Esa noche llega el ataque. Cae Şükrü. Su olla sigue junto al fuego.',
 teklif:'No olvidarás en setenta años la mirada que te echa Kâzım. —El lobo no abandona la manada, novato —es todo lo que dice. Despide al oficial. Esa noche llega el ataque. Cae Şükrü.'
}[fl.d7]}

Zeynep apaga la grabadora. Saca el móvil:

—Quiero que escuche algo. Es una grabación de una casete muy vieja; la mandé digitalizar.

Por el altavoz sale la voz de una mujer mayor: «…Mi hermano volvía en cada fiesta. Caramelos en la mano, propina en el bolsillo. Incluso cuando mi madre ya no veía, reconocía sus pasos…».

Conoces esa voz. Más vieja de lo que nunca la oíste, pero la conoces.

—Nazlı —dices.`,
 ch:['Lloras. Las lágrimas que has contenido setenta años.','Te recompones. Dices: «Sigamos».']},
s1:{b:(st,fl)=>`*La novena noche.*

Quedáis siete. ${fl.yaralandi?'Llevas el hombro vendado; sostienes el fusil con una sola mano. ':''}Los últimos aldeanos del aprisco, con el abuelo Kerim y Gülsüm, han salido hacia el camino de la meseta. Si defendéis el paso hasta la mañana, se salvarán.

Pero esta vez el enemigo viene con todo. La ladera de enfrente está llena de faroles.

Kâzım os reúne y os enseña los últimos explosivos:

—La cornisa de nieve sobre el paso. Si la volamos, el alud cerrará el camino y nadie podrá pasar en semanas. Pero la mecha es corta. Quien la encienda quizá no llegue a escapar.

Silencio.

—Me quedo yo —dice Kâzım—. Los demás, seguid a los aldeanos a la meseta.`,
 ch:['«Me quedo yo, mi sargento. Yo no tengo a nadie».','«Nos quedamos los dos. Uno enciende y el otro lo saca a rastras».','Obedeces la orden. Te retiras con los demás.']},
s2:{b:(st,fl)=>`${{
 ben:'Kâzım se ríe. Setenta años después, todavía oyes esa risa. —¿Que no tienes a nadie? —dice—. ¿Y yo qué soy? Y te agarra del cuello y te empuja. Cuando te levantas, ya ha encendido la mecha.',
 birlikte:'Encendéis la mecha juntos. Corréis. A vuestra espalda, la montaña gime.',
 cekil:'Avanzas cien metros. Luego te detienes. Das media vuelta. Encuentras a Kâzım junto a la mecha. Te ve, suelta una maldición y luego se ríe: —Cabra tozuda —dice—. Igualita que la de Gülsüm.'
}[fl.son]}

La explosión. Luego, un estruendo, como si la montaña entera se deslizara. La cornisa se desploma sobre el paso.

Y después, silencio.

Es Kâzım quien te desentierra de la nieve. Pero él no puede levantarse. Tiene una esquirla de roca clavada en el pecho. Una mancha oscura se extiende por la nieve.`,ch:['Te arrodillas a su lado.']},
s3:{b:`Kâzım respira corto y superficial. Le coges la mano.

—Escucha, novato —dice—. No hay tiempo.

Se quita la chapa del cuello y te la aprieta en la palma. Luego arranca la tuya y rompe la cadena.

—Mi madre ha enterrado a dos hijos. Si entierra al tercero, no lo soportará. Vuelve tú a casa. En mi lugar. Dale a Nazlı la propina de la fiesta.

—Mi sargento, yo…

—Es una orden —dice—. La última.

Saca del bolsillo del pecho una carta a medio escribir:

—Para mi madre —dice—. Termínala tú.`,
 ch:['Coges la chapa y la carta. «Se lo prometo, mi sargento».','«No puedo, mi sargento. Sería una mentira».']},
s4:{b:(st,fl)=>`${fl.reddettim
 ?`Kâzım no responde. Sigue sujetándote la mano, con los ojos abiertos, mirando al cielo. Luego todo se oscurece.

Despiertas en un hospital de campaña. Una enfermera te recibe con una sonrisa: «Bienvenido, sargento Kâzım». La chapa te cuelga del cuello; debió de ponértela mientras estabas inconsciente. La carta también está en tu bolsillo.`
 :`Kâzım muere con tu mano entre las suyas. Los ojos abiertos, mirando al cielo.

Despiertas en un hospital de campaña. Una enfermera te recibe con una sonrisa: «Bienvenido, sargento Kâzım».`}

Según los registros, el soldado Hasan Çelik cayó la novena noche. El sargento Kâzım Yıldırım es el único soldado superviviente de la Unidad Legendaria.

Un mes después estás ante la puerta de una casa de pueblo. Mamá Hatice ya no ve. Al oír tu voz, sus manos buscan tu cara. Sus dedos recorren tu frente, tu nariz, tus labios. Durante mucho, mucho tiempo.

Detrás de ella hay una niña de ocho años. Nazlı. Te mira. Primero entiende algo; luego decide algo.

—Hermano —dice—. Bienvenido a casa.`,
 ch:['Le susurras la verdad al oído a mamá Hatice.','Callas. Te conviertes en su hijo.']},
r1:{b:(st,fl)=>`${fl.anneBildi
 ?'Mamá Hatice oye tu susurro. Luego atrae tu cabeza contra su pecho. «Lo sé, hijo», dice. «Los pasos de Kâzım no sonaban así. Pero ahora tú también eres mi hijo».'
 :'Mamá Hatice te estrecha contra su pecho. No pregunta nada. Durante veintiún años, hasta el día de su muerte, reza por ti cada mañana.'}

Setenta años. Llevaste a hombros el ataúd de mamá Hatice. Llevaste a Nazlı del brazo el día de su boda. La propina, en cada fiesta… Y cada año fuiste solo a la tumba del Paso del Águila. A la piedra que dice «Soldado Hasan Çelik».

En la habitación de la residencia, Zeynep está sentada frente a ti. La grabadora, sobre la mesa. La luz roja, encendida.

—La última pregunta —dice. Le tiembla la voz.

—¿Quién es usted?`,
 ch:['«Soy Hasan Çelik. Kâzım Yıldırım murió la novena noche. Salvándome a mí».','«Soy Kâzım Yıldırım, hija. Digan lo que digan los libros».','No contestas. Sacas del cajón la chapa y la carta a medio escribir, y se las das.']},
end_gercek:{b:`Zeynep no apaga la grabadora. Llora, pero sonríe.

—Lo sabía —dice—. Me lo dijo mi abuela. Nazlı Yıldırım. Murió la primavera pasada. En sus últimos días me cogió la mano y me dijo: «Ve a la Residencia Çamlık. Dale las gracias al tío Hasan. Fue nuestra familia toda la vida, la de mi madre y la mía. Mi hermano Kâzım también lo habría querido así».

Creías que Nazlı no lo sabía. Durante setenta años, Nazlı lo supo y no dijo una palabra.

Seis meses después se celebra una pequeña ceremonia en el Paso del Águila. En la lápida que durante setenta años dijo «Soldado Hasan Çelik» se graba por fin el nombre correcto: *Sargento Kâzım Yıldırım.* En el mármol del monumento, dos nombres uno junto al otro. Bajo los dos, la misma línea: *Compañía Lobo.*

Estás en tu silla de ruedas, junto a Zeynep. El viento baja por el paso. Por un instante te parece que alguien, a lo lejos, se ríe.

—Novato —dice el viento—, ¿llegaste a casa?

Llegué, mi sargento. Tal como usted quería.`},
end_efsane:{b:`Zeynep te mira largo rato. Luego apaga la grabadora.

—Mi abuela también lo decía así —dice despacio—: «mi hermano Kâzım». Siempre lo decía así. Nazlı Yıldırım. Murió la primavera pasada.

Se levanta y se detiene en la puerta:

—En sus últimos días me pidió que le diera las gracias. No le pregunté por qué. Creo que ahora lo entiendo.

Los libros no cambian. En los actos escolares, los maestros siguen contando la historia de «Kâzım Yıldırım, el último héroe vivo». Bajo la foto aparece impreso un nombre: bajo el sargento que sonríe en el centro.

Una mañana de invierno, Sevim te encuentra dormido junto a la ventana. En la mano aprietas la chapa. Tiene un nombre grabado, pero nadie lo lee con atención.

A veces una leyenda no protege una mentira, sino una promesa.`},
end_emanet:{b:`No dices nada. Abres el cajón. Debajo de la medalla envuelta en el pañuelo hay una chapa de setenta años y una carta amarillenta a medio escribir.

Zeynep le da la vuelta a la chapa: *K. Yıldırım*. La primera línea de la carta: «Madre, si esta fiesta no vuelvo…». La carta está sin terminar. Debajo, con otra letra, se han ido añadiendo líneas a lo largo de los años. Una por cada fiesta.

A medida que lee, Zeynep comprende. Luego te mira.

—Mi abuela Nazlı… —susurra—. Lo sabía. Siempre lo supo. Me pidió que le diera las gracias.

Aprieta la chapa en la mano:

—¿Qué quiere que haga?

—Decide tú —le dices—. Ahora el legado es tuyo.

Un año después se publica el libro de Zeynep: *El Paso del Águila: dos soldados, un nombre*. En la primera página, una dedicatoria de una línea: *A todos los que cumplen sus promesas.*`},
end_bedel:{b:(st,fl)=>`${fl.secim==='gercek'
 ?'—Soy Hasan Çelik —dices. Y sigues, porque esta noche has decidido contarlo todo. Que el tercer día dijiste «retirémonos». El medio día perdido. Las catorce personas que no volvieron del camino de la meseta.'
 :fl.secim==='emanet'?'Le das a Zeynep la chapa y la carta. Y una hoja más: una lista que has guardado setenta años. Catorce nombres.'
 :'—Soy Kâzım Yıldırım —dices. Pero te tiembla la voz. Dentro de la leyenda de los «nueve días» de los libros hay medio día que nadie conoce.'}

Zeynep escucha en silencio. Luego apaga la grabadora.

—Mi abuela Nazlı —dice— me pidió que le diera las gracias. Por haber sido su hermano toda la vida.

Gratitud. Para un hombre que lleva setenta años contando catorce nombres cada noche.

Los libros siguen diciendo «nueve días». Pero tú nunca olvidaste aquel medio día. La tarde en que Gülsüm vino corriendo descalza por la nieve. A Kâzım dando media vuelta sin mirar atrás.

A veces la historia de un héroe se levanta sobre un remordimiento.

La historia no tenía por qué terminar así. ¿No podrías haber dicho otra cosa el tercer día?`},
end_sis:{b:`Zeynep te pregunta algo, pero las palabras se enredan. La chica que tienes delante se convierte en Nazlı, luego en Gülsüm, y luego en nadie.

—¿Mi sargento? —dices a la habitación vacía—. La mecha… la mecha es corta…

Sevim entra y te ayuda a acostarte. Zeynep recoge la grabadora en silencio. Se detiene en la puerta y te mira un rato.

Vuelve a la semana siguiente. Y a la otra. Pero la historia nunca vuelve a recomponerse.

Algunos secretos no los guarda una promesa, sino la niebla.

La historia no tenía por qué terminar así. ¿No podrías haberte dado un respiro mientras la contabas?`}
 }};
})();
