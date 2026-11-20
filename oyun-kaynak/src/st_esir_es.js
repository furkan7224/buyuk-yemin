/* HİKÂYE · ESİR · İspanyolca metin katmanı (mantık st_esir.js'ten gelir) */
(function(){
const gaveLine=fl=>fl.gave?`\n\nTú mismo le cuentas al comandante del batallón la pequeña información que diste en la sala de interrogatorios. Él guarda silencio un buen rato y luego te toca el hombro:\n\n—Todo el mundo tiene un límite, sargento. Incluso en el tuyo, elegiste a tu compañero.`:'';
TALE_ES.esir={
 meta:{ti:'El cautivo',genre:'Supervivencia · Fuga',sub:'Un pelotón capturado tras las líneas enemigas y su huida',
  pitch:'Tu pelotón cae prisionero tras una emboscada en una patrulla nocturna. Un cabo herido, un soldado joven en su primera misión y un mayor paciente que te espera en la sala de interrogatorios. ¿En quién confiarás y a quién dejarás atrás? Puede que no todos vuelvan a casa.',
  chapters:[{ti:'Emboscada',sub:'Patrulla nocturna y captura'},{ti:'La celda',sub:'Interrogatorio y voluntad'},{ti:'El plan',sub:'Observación y confianza'},{ti:'La fuga',sub:'Alambre de espino y persecución'},{ti:'El regreso',sub:'Campo de minas y camino a casa'}],
  statDefs:[['moral','Moral','var(--acc)'],['saglik','Salud','var(--green)'],['bag','Vínculo del pelotón','var(--blue)']]},
 medal:'Regreso del cautiverio',
 end:{kahraman:'El regreso de un héroe',aci:'Victoria amarga',yalniz:'Solo',bedel:'El precio',karanlik:'Oscuridad'},
 scenes:{
p1:{b:`02:40. Estás al pie de la Cresta del Águila; la línea fronteriza está a solo unos cientos de metros.

En la reunión de la tarde, el comandante del batallón fue breve: «Hay movimiento al otro lado. Acercaos, mirad, contad y volved. Sin enfrentamientos».

Te acompañan dos hombres. El cabo Selim Kara lleva doce años de uniforme; habla poco y, cuando lo hace, casi siempre es para bromear. El soldado Mert Aydın tiene veinte años y esta es su primera patrulla nocturna. En la oscuridad lo oyes intentar contener la respiración.

Hay dos caminos. El cauce del arroyo Gris está oculto pero es lento. El sendero de la cresta es rápido, pero queda expuesto a la luz de la luna.`,
 ch:['Seguir el cauce del arroyo. Lento pero invisible.','Tomar el sendero de la cresta. El tiempo importa.','Antes de salir, acercarte a Mert.']},
p1b:{b:`Le tocas el hombro a Mert. Notas que tiembla.

—Todo el mundo tiene miedo la primera noche —le dices en voz baja—. El que no lo tiene, o miente o todavía no se ha enterado.

—Entonces no miento, sargento —susurra Mert. Su voz se calma un poco.

Selim sonríe en la oscuridad:

—Yo, después de doce años, todavía no me he enterado. Venga, a ver si volvemos para el desayuno.`,
 ch:['Seguir el cauce del arroyo. Lento pero invisible.','Tomar el sendero de la cresta. El tiempo importa.']},
p2:{b:(st,fl)=>(fl.path==='dere'
 ?`Durante media hora avanzáis sobre las piedras mojadas del cauce. Justo cuando subís al llano frente a la cresta, el cielo se vuelve blanco de golpe: una bengala.`
 :`Avanzáis rápido por la cresta, pero la luna está justo encima. Entre las rocas ves un destello de metal. Demasiado tarde. El cielo se vuelve blanco de golpe: una bengala.`)+`

Luego, el ruido de una ametralladora. Te lanzas tras las rocas. Oyes un grito ahogado de Selim; le han dado en la pierna.

Mert se ha quedado paralizado junto a la radio. Os disparan desde tres direcciones. Habéis caído en una emboscada.`,
 ch:['Llamar por radio al cuartel: informar de la emboscada y las coordenadas.','Arrastrar a Selim detrás de las rocas.','Devolver el fuego y cubrir a Mert.']},
p3a:{b:`Le quitas la radio a Mert de las manos.

—¡Águila Uno, Águila Uno, aquí Pájaro Nocturno! ¡Emboscada! Cuadrícula cuatro-uno, ocho-siete. ¡Fuego desde tres lados, un herido!

Estática. Luego una voz entrecortada: «…recibido… aguantad…».

El mensaje ha llegado. Pero en esos segundos Selim se ha quedado solo entre las rocas, y el cerco de fuego se estrecha.`,ch:['Continuar.']},
p3b:{b:`Agarras a Selim del cinturón y lo arrastras detrás de las rocas. Una bala te pasa rozando la oreja; las esquirlas de piedra te cortan la cara.

—Déjeme, sargento —gime Selim—. ¡Vaya a la radio!

—Cállate —le dices—. Aquí no se deja a nadie.

Selim ya está a cubierto. Pero la radio está en manos de Mert, y Mert está al descubierto.`,ch:['Continuar.']},
p3c:{b:(st,fl)=>fl.cover==='ok'
 ?`Te encaras el fusil y disparas ráfagas cortas a los fogonazos. Una de las armas de enfrente enmudece.

Mientras tanto, Mert arrastra a Selim a cubierto. Con todo el miedo que tiene, el chaval ha hecho lo correcto.`
 :`Te encaras el fusil y disparas a los fogonazos. Algo te golpea el hombro izquierdo como un mazo. Un calor húmedo te baja por el brazo.

Aun así, sigues disparando. Mientras tanto, Mert arrastra a Selim a cubierto.`,ch:['Continuar.']},
p4:{b:`El tiroteo cesa. No es buena señal.

Pasos en la oscuridad, rodeando las rocas. Luego una voz en un turco con mucho acento:

—¡Sargento! Estáis rodeados. Rendíos y vuestro herido vivirá. Resistid y moriréis todos.

Compruebas el cargador: las últimas balas. Mert te mira. Selim tiene la cara blanca como la tiza.`,
 ch:['Rendirse. Mantener con vida a tus hombres es lo primero.','Que Mert queme el libro de claves y luego rendirse.','Intentar resistir hasta la última bala.']},
p5:{b:(st,fl)=>`Te atan las manos a la espalda con bridas y te ponen un saco áspero en la cabeza. Os arrojan a la caja de una camioneta. Oyes gemir a Selim y a Mert respirar deprisa.${fl.fought?`

El culatazo en la cabeza todavía te late. Te pitan los oídos.`:''}${fl.burn?`

Antes de rendirte viste a Mert prender fuego al libro de claves con su mechero. Al menos esas páginas no caerán en sus manos.`:''}

La camioneta arranca dando tumbos.`,
 ch:['Susurrarle a Mert: «Tranquilo. Saldremos juntos».','Contar en silencio las curvas y los sonidos. Memorizar la ruta.','No hacer nada. Guardar fuerzas.']},
p6:{b:(st,fl)=>(fl.route?`Izquierda. Izquierda. Una larga recta. Bajo las ruedas, el sonido hueco de un puente; de madera, no de metal. Luego un giro brusco a la derecha. Cuarenta minutos. No debes olvidarlo.

`:'')+`La camioneta se detiene. Ladridos, el chirrido de una verja de hierro, gritos en un idioma que no entiendes.

Cuando te quitan el saco ves altas alambradas, torres de vigilancia y focos. Un campo de prisioneros.

Un oficial con el uniforme impecable se acerca y sonríe:

—Bienvenido, sargento. Soy el mayor Rehn. Vamos a hablar mucho.`,ch:['Esperar a que te lleven a una celda.']},
h1:{b:`Una celda de hormigón. Tres pasos de largo, dos de ancho. Arriba, un ventanuco con barrotes. Un cubo en un rincón.

El vendaje de la pierna de Selim está empapado de sangre y le sube la fiebre. Mert está sentado contra la pared, abrazado a las rodillas.

Un guardia viejo vigila junto a la puerta. No grita como los demás; de vez en cuando se asoma entre los barrotes.`,
 ch:['Rasgar tu camisa y volver a vendar la herida de Selim.','Pedir al guardia viejo agua y un paño limpio.','Decirle a Selim que aguante. Guardar fuerzas.']},
h1b:{b:`—Agua —le dices al guardia—. Tenemos un herido. Por favor.

El hombre te mira un rato. Luego se va sin decir nada. Diez minutos después vuelve con una botella de agua y un paño limpio doblado, y te los pasa entre los barrotes.

—Tobas —dice, dándose golpecitos en el pecho. Debe de ser su nombre.

—Gracias, Tobas.

Asiente y vuelve a su puesto. Puede que en este campo no todos sean enemigos.`,ch:['Continuar.']},
h2:{b:(st,fl)=>`Antes del amanecer te sacan de la celda. Un cuarto pequeño sin ventanas. En la mesa: una lámpara, un expediente y un vaso de té.

El mayor Rehn habla con educación, con calma, casi con amabilidad:

—Tómese el té, sargento. Díganos las posiciones de su unidad y los códigos de radio, y usted y sus amigos verán a un médico esta noche. Tiene mi palabra.${fl.burn?`

Hace una pausa.

—Su libro de claves estaba quemado. Ingenioso. Pero yo soy un hombre paciente.`:''}`,
 ch:['Dar solo tu nombre, rango y número de servicio.','Dar posiciones falsas para ganar tiempo.','No decir nada. Mirarlo a los ojos.']},
h3:{b:(st,fl)=>`Rehn manda abrir la puerta. Dos soldados entran arrastrando a Mert. El chico tiene el labio partido.${fl.lie?`

—Las posiciones que nos dio estaban vacías, sargento —dice Rehn con la misma calma—. Las mentiras tienen un precio.`:''}

—Si usted no habla —dice Rehn—, quizá hable él. Es joven, tiene miedo. Los asustados lo cuentan todo.

Mert te mira. No hay súplica en sus ojos; es la mirada de un soldado que espera órdenes.`,
 ch:['Dar una información menor pero cierta para salvar a Mert.','Decir «El que manda soy yo, él no sabe nada». Cargar tú con el peso.','Callar. Hacerle una señal a Mert para que también calle.']},
h4:{b:(st,fl)=>`Esa noche los tres os tumbáis uno junto a otro en la celda. ${fl.mertHurt?'Mert, de cara a la pared, llora en silencio; hoy le han dado una paliza en la sala de interrogatorios.':'Mert llora en silencio.'} ${fl.band?'A Selim le ha bajado un poco la fiebre; el vendaje ha funcionado.':'Selim sigue con fiebre alta.'}

Selim saca del bolsillo una foto arrugada. Una niña de unos seis años que sonríe mellada.

—Elif —dice—. Le prometí que llegaría a su cumpleaños. Faltan tres semanas.`,
 ch:['Hablarles de tu casa, de tu pueblo, de lo que harás al volver.','Empezar a susurrar sobre la fuga.','Decirles que duerman. Necesitáis fuerzas.']},
k1:{b:(st,fl)=>`Los días se confunden. Cada mediodía os sacan al patio a pasear media hora. Es el único momento en que puedes ver el campo.${fl.plan?`

Ahora los tres solo pensáis en escapar. Cada paseo es un reconocimiento.`:''}

¿En qué te fijarás hoy?`,
 ch:['Los relevos de la guardia y los horarios de las torres.','Los puntos débiles de la alambrada.','Las personas: quién trata a quién, y cómo.']},
k1b:{b:(st,fl)=>`Al día siguiente vuelves al patio. ${fl.shift?'Ayer te diste cuenta de que los guardias de las torres hacen el relevo a las tres; durante el cambio, los focos dejan de cubrir el patio unos minutos.':fl.fence?'Ayer te diste cuenta de que en la esquina noreste el suelo se ha hundido al pie de un poste y el alambre está flojo.':'Ayer te diste cuenta de que los demás guardias no respetan mucho al viejo Tobas, y de que él no trata a los prisioneros como ellos.'}

¿En qué más te fijarás hoy?`,
 ch:['Los relevos de la guardia y los horarios de las torres.','Los puntos débiles de la alambrada.','Las personas: quién trata a quién, y cómo.']},
k2:{b:`A la hora de la cena la puerta se entreabre. Tobas desliza bajo tu plato una rebanada de pan de más y un trozo de queso.

—Mi hijo —dice en un turco chapurreado—. También es soldado. Como tú. Quizá él también está en algún sitio… Nadie le da pan.

Tiene los ojos húmedos. ¿Puedes confiar en este hombre?`,
 ch:['Pedirle ayuda a Tobas: la cerradura, el horario de la guardia.','Darle las gracias pero no pedirle nada. No arriesgarse.','Intentar robarle las llaves cuando se quede dormido.']},
k3ok:{b:`Tobas guarda silencio un buen rato. Luego baja la voz:

—El jueves por la noche me toca guardia. A las tres hacen el relevo en las torres; durante diez minutos nadie mira al patio. El cerrojo de vuestra puerta… puede que se me olvide.

Mete la mano entre los barrotes. Se la estrechas. Os tiemblan las manos a los dos.`,ch:['Continuar.']},
k3no:{b:`A Tobas le cambia la cara al instante. Retrocede y se marcha sin decir palabra.

Media hora después entran dos guardias en la celda. Te sacan fuera y te dan una paliza. Rehn observa desde la puerta, con los brazos cruzados:

—¿Un plan de fuga, sargento? A partir de ahora, no le quito el ojo de encima.

No vuelves a ver a Tobas de guardia.`,ch:['Continuar.']},
k3:{b:`Le das las gracias a Tobas con un gesto. Los tres os repartís el pan y el queso.

Selim traga su bocado y sonríe:

—El mejor queso que he comido nunca. No se lo digáis a Elif, que los pasteles de su madre se ofenderían.`,ch:['Continuar.']},
k3key:{b:`Tobas ronca en su silla, con la cabeza caída sobre el pecho. Con cuidado, sacas una sola llave del aro de su cinturón. Para que el tintineo no suene distinto, pones un trozo de alambre en su lugar.

La llave está en tu palma. El corazón te golpea las costillas.`,ch:['Continuar.']},
k3no2:{b:`En cuanto tu mano llega a su cinturón, Tobas abre los ojos. No dice nada; en su cara solo hay una profunda decepción. Luego toca el silbato.

Esa noche te tienen de pie hasta la mañana. Rehn observa desde la puerta:

—¿Un plan de fuga, sargento? A partir de ahora, no le quito el ojo de encima.`,ch:['Continuar.']},
k4:{b:(st,fl)=>`Encuentras una pieza suelta en el marco de hierro de la litera. Durante días la limas contra el suelo de hormigón hasta dejarle la punta plana y afilada.${fl.fence?' Podría servir para la alambrada que localizaste.':''}${fl.watched?`

Rehn no iba de farol: ahora pasan dos patrullas más por delante de vuestra celda cada noche.`:''}

Pero el verdadero problema es Selim. La pierna no se le ha curado; cojea.

—Os voy a retrasar, sargento —dice—. Idos. Yo me quedo. Ya me las apañaré.`,
 ch:['«No. Entramos tres, salimos tres». Cargarás con Selim.','Prometer a Selim que volverás a por él cuando estés fuera.','Selim provoca una distracción en el campo mientras huís.']},
k5:{b:`El plan está listo. Solo queda una decisión: ¿cuándo?`,
 ch:['A las tres, durante el relevo de las torres.','El jueves por la noche, cuando Tobas esté de guardia.','La primera noche de lluvia. La lluvia tapa ruidos y huellas.'],
 why:['No observaste el horario de la guardia.','No cuentas con la ayuda de Tobas.']},
e1:{b:(st,fl)=>(fl.time==='shift'?`02:55. Cuentas los barridos del foco de la torre: uno cada cuarenta segundos.`
 :fl.time==='tobas'?`Jueves por la noche. Los pasos pesados de Tobas recorren el pasillo una vez y se detienen.`
 :`Has esperado tres días. Por fin truena; la lluvia golpea el tejado.`)+`

Mert está listo. `+(fl.carry?`Te has pasado el brazo de Selim por el hombro; aprieta los dientes y se pone en pie.`
 :fl.leaveSelim?`Selim está tumbado en la litera con los ojos cerrados, fingiendo dormir. No os habéis despedido; así es más fácil.`
 :`Selim se incorpora en la litera y te guiña un ojo, como diciendo «esperad mi señal».`),
 ch:['Empujar la puerta con suavidad. Tobas habrá cumplido su palabra.','Meter en la cerradura la llave robada.','Intentar levantar el cerrojo con la pieza de hierro.']},
e1x:{b:`El hierro roza el cerrojo con un chirrido agudo. En el pasillo se enciende una linterna.

Contienes la respiración. La luz se queda un rato delante de la puerta… y luego se aleja. El guardia habrá pensado que era una rata.

Al segundo intento, el cerrojo cede.`,ch:['Continuar.']},
e2:{b:(st,fl)=>`Cruzas el rincón oscuro del patio y llegas a la alambrada.${fl.fence?' Este es el punto que elegiste: el suelo se ha hundido al pie del poste y el alambre está flojo.':' El alambre está tenso, con huecos que no llegan a un palmo.'}`,
 ch:['Arrastrarte bajo el alambre junto al poste flojo.','Doblar los alambres con la pieza de hierro y abrir un hueco.']},
e3:{b:(st,fl)=>(fl.alarm?`Un alambre se parte y tira la lata atada a él. Un instante de silencio… ¡y la sirena!`
 :`Estás al otro lado de la alambrada. Justo cuando vas a echar a correr hacia el linde del bosque, el foco se desliza por la hierba hacia ti.`)+(fl.diversion?`

En ese mismo momento estalla un griterío en el otro extremo del campo. ¡Selim! Golpea los barrotes de la celda y grita con todas sus fuerzas. Los focos giran hacia allí.`:''),
 ch:['Aprovechar la ocasión que te ha dado Selim. ¡Corre!','¡Corre! No pares hasta el bosque.','Tirarte al suelo. No moverte hasta que pase la luz.','Correr hacia la luz y atraer su atención. Que escapen los demás.']},
e3b:{b:(st,fl)=>`Una ráfaga de ametralladora levanta la tierra.${fl.carry?' El peso de Selim te frena. Al pasar una bala, Selim se sacude y gime; le han dado.':' Una bala te roza la pantorrilla.'}

Aun así, alcanzas la oscuridad de los árboles.`,ch:['Continuar.']},
e4:{b:(st,fl)=>`Ladridos a tu espalda. Haces de linterna bailan entre los árboles.${fl.route?`

Aún tienes en la cabeza la ruta que contaste en la camioneta: el puente de madera, la larga recta… El puente debe de estar al sur. La frontera está por ahí.`:''}`,
 ch:['Meterte en el arroyo. El agua ocultará tu olor a los perros.','Subir a la cresta y alejarte rápido.','Seguir la ruta que memorizaste en la camioneta. Ir hacia el puente.']},
b1:{b:(st,fl)=>`Corres directamente hacia el haz del foco. Abres los brazos y gritas. Todos los cañones se vuelven hacia ti.

A tu espalda, en la oscuridad, ves cómo ${fl.carry?'Mert se carga a Selim al hombro y':'Mert'} desaparece entre los árboles. Luego, un culatazo, y oscuridad.`,ch:['…']},
d1:{b:(st,fl)=>`Al amanecer os refugiáis en una oquedad entre las rocas. Estás empapado y muerto de hambre; tienes los pies ensangrentados.

${fl.carry?(fl.selimHit?'La herida de Selim no deja de sangrar y la fiebre le ha vuelto a subir. Tiene los labios agrietados; no para de murmurar el nombre de Elif.':'A Selim le ha vuelto a subir la fiebre. Tiene los labios agrietados; delira.'):'Mert duerme a tu lado, tiritando. De vez en cuando se despierta sobresaltado y vuelve a quedarse dormido.'}`,
 ch:['Descansar aquí un día y moverse de noche.','Seguir ahora. Los equipos de búsqueda pueden estar cerca.','Darle a Selim tu última comida y agua.']},
d2:{b:`Por la tarde los árboles empiezan a clarear. A lo lejos, en lo alto de una colina, ves ondear una bandera: la nuestra.

Entre vosotros hay un kilómetro de terreno abierto. Mert señala un cartel oxidado, medio enterrado. En él, una calavera roja.

Un campo de minas.`,
 ch:['Sondear el suelo con el cuchillo y avanzar palmo a palmo.','Seguir el rastro de los animales; cruzar por donde han pasado las cabras.','Cruzar corriendo. Cuanto menos se tarde, mejor.']},
d3:{b:(st,fl)=>`A mitad de camino, Mert se queda petrificado.

—Sargento —susurra—. Algo ha hecho clic bajo mi pie.

Está pisando una mina de presión. En cuanto levante el pie, estallará.${fl.run?' La pisó corriendo; ahora se mantiene en equilibrio sobre un solo pie.':''}`,
 ch:['Intentar sustituir el peso de Mert por una piedra igual de pesada.','Quedarte con él y tranquilizarlo. Hacer señales a los nuestros.','Decirle a Mert que se lance hacia delante.']},
d3ok:{b:`Por un instante todo se detiene. Luego no pasa nada.

Mert está tendido boca abajo a unos pasos, con las manos clavadas en la tierra. Está vivo. Te mira e intenta reír, pero llora. Tú también.

Recorres el resto del camino pisando sus huellas.`,ch:['Continuar.']},
d3help:{b:(st,fl)=>`Deben de estar mirando con prismáticos desde la trinchera de la colina. Media hora después, un sargento zapador se arrastra hasta vosotros con un detector de minas.${fl.msg?`

—Recibimos vuestro mensaje de radio —dice—. Llevamos días buscándoos.`:''}

Con manos expertas desactiva la mina. Mert cae de rodillas, sollozando. Lo dejas llorar.

El zapador os guía hasta las trincheras por el camino seguro que ha despejado.`,ch:['Continuar.']},
d3x:{b:`La explosión, un instante de silencio blanco. Luego, un pitido en los oídos.

Te arrastras hasta donde yace Mert. Tiene los ojos abiertos y te mira. Intenta decir algo, pero no le sale la voz. Le coges la mano; él te la coge. Luego, ya no.

Tenía veinte años. Era su primera patrulla nocturna.`,ch:['Continuar.']},
d4:{b:`Los últimos cien metros. Una voz se alza desde la trinchera de la colina:

—¡Alto! ¿Quién va? ¡No os mováis!

Os apuntan con los fusiles. Lleváis la ropa de prisionero rota del campo enemigo. Los nuestros no os reconocen.`,
 ch:['Levantar las manos y gritar la contraseña del batallón.','Tirarse al suelo; gritar tu nombre, rango y unidad.','Gritar «¡Pájaro Nocturno! ¡Pájaro Nocturno vuelve a casa!».']},
end_kahraman:{b:(st,fl)=>`Los tres caéis rodando en la trinchera con vuestra ropa de prisionero hecha jirones. Alguien trae mantas, alguien agua. El comandante del batallón llega corriendo; te abraza primero a ti, luego a Selim, luego a Mert.

Tres semanas después estás en el jardín del hospital. Selim va en silla de ruedas con Elif en el regazo. Llegó a su cumpleaños. Mert enciende las velas de la tarta; ya no le tiembla la mano.

Un mes más tarde te prenden una medalla en el pecho en el patio de armas. Buscas dos caras entre la multitud. Están en primera fila, los dos de pie, aplaudiendo.${gaveLine(fl)}

Entrasteis tres. Salisteis tres.`},
end_aci:{b:(st,fl)=>{const mDead=fl.mert==='dead',sDead=fl.carry&&fl.selimDead===1;
 let t=`Cuando llegas a nuestra trinchera, te fallan las rodillas. Mantas, agua, estática de radio… todo parece llegar desde muy lejos.`;
 if(mDead)t+=`

Dos días después, el cuerpo de Mert, tal como los zapadores lo recuperaron del campo de minas, es enviado a su pueblo. La carta para su madre la escribes tú mismo. Empiezas tres veces; ninguna frase basta.`;
 if(sDead)t+=`

Selim nunca vio la frontera. La última noche, en la oquedad entre las rocas, ardiendo de fiebre, no dejaba de murmurar el nombre de Elif. Lo trajiste a casa a cuestas. No pudiste devolverle un padre a su hija, pero devolviste un soldado a su país.`;
 else if(!fl.carry)t+=`

Dejaste a Selim en el campo. Piensas en él cada noche. Cuatro meses después, su nombre aparece en una lista de intercambio de prisioneros. Está más delgado y tiene el pelo canoso, pero está vivo. Se perdió el cumpleaños de Elif; promete llegar al siguiente. Esta vez cumple su palabra.`;
 return t+gaveLine(fl)+`

La medalla que llevas en el pecho pesa un poco más cada mañana.`}},
end_yalniz:{b:(st,fl)=>`Entras solo en la trinchera.

Dejaste a Mert en el campo de minas y a Selim ${fl.carry?'en aquella oquedad entre las rocas la última noche':'tras la alambrada'}. Salisteis como pelotón; eres el único que ha vuelto.

Durante semanas no hablas. Por la noche, en sueños, oyes la estática de la radio: «…aguantad…».

Una mañana, en el jardín del hospital, alguien se sienta a tu lado. La mujer de Selim, con Elif en el regazo. No está enfadada contigo; solo quiere saber qué pasó. Se lo cuentas todo. Por primera vez, lloras.

A veces sobrevivir no es una victoria, sino una responsabilidad.`},
end_bedel:{b:(st,fl)=>`Cuando te devuelven a la celda, hay una paz extraña en tu cara.${fl.leaveSelim||fl.diversion?' Selim está al otro lado de la pared; los dos os quedasteis, pero Mert escapó.':''}

Dos semanas después, Rehn se detiene ante tu celda:

—${fl.carry?'Sus amigos':'Su soldado'} cruzaron la frontera, sargento. Enhorabuena. Ha perdido… y sin embargo ha ganado. Eso lo veo pocas veces.

Siete meses más tarde, una mañana de niebla, se celebra un intercambio de prisioneros en el puente entre los dos países.${fl.carry?'':' Selim camina a tu lado, apoyado en tu brazo.'} Una figura espera al otro extremo del puente; al acercarte, la cara se vuelve nítida. Mert. A su lado, ${fl.carry?'Selim con muletas':'el comandante del batallón'}.

Mert te saluda. Le devuelves el saludo.

Algunas victorias las gana quien paga el precio.`},
end_karanlik:{b:(st,fl)=>st.saglik<=0&&fl._failC>=3
 ?`Las heridas y el agotamiento acaban derribándote. El suelo está frío; el cielo, muy lejos.

${fl.mert==='dead'?'No hay nadie a tu lado. Lo último en lo que piensas es en el momento en que cogiste la mano de Mert.':'Mert intenta arrastrarte, luego se desploma a tu lado y te coge la mano. «No le voy a soltar, sargento», dice. «Usted tampoco me soltó».'}

${fl.mert==='dead'?'Días después, una patrulla encuentra tu placa de identificación en una oquedad entre rocas a pocos kilómetros de la frontera y la devuelve a tu batallón.':'Dos días después, Mert llega solo a nuestra trinchera. Deposita una placa de identificación en la palma del comandante del batallón: la tuya.'}

La historia no tenía por qué terminar aquí. ¿Cuánto desgastaron tu cuerpo tus decisiones?`
 :st.saglik<=0
 ?`Tu cuerpo no pudo más. Una mañana no consigues levantarte de la litera; las voces de Selim y Mert se oyen cada vez más lejos.

Cuando llega el médico del campo, ya es tarde.

Meses después, en un intercambio de prisioneros, entregan una lista con una marca junto a tu nombre. Mert llevará esa lista en la cartera durante años.

La historia no tenía por qué terminar aquí. ¿Cuánto desgastaron tus decisiones tu cuerpo y tu mente?`
 :`Un día, frente a Rehn, te das cuenta de que tu voz ya no es tuya. Le cuentas todo lo que pregunta. Has perdido la esperanza.

Después de aquella noche, Selim no te habla. Mert no puede mirarte a la cara.

Todo el mundo tiene un punto de quiebre. El tuyo estaba aquí.

La historia no tenía por qué terminar aquí. ¿Podrías haber tomado decisiones que mantuvieran tu moral en pie?`}
 }};
})();
