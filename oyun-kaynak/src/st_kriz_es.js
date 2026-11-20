/* HİKÂYE · KRİZ MASASI · İspanyolca metin katmanı (mantık st_kriz.js'ten gelir) */
(function(){
const sel=fl=>fl.savak?'yok':fl.tahliye?'bos':fl.gecUyari?'hafif':'agir';
const bildi=fl=>fl.iddia||fl.nuri||fl.sor||fl.dosya||fl.ucuncu;
TALE_ES.kriz={
 meta:{ti:'Gabinete de crisis',genre:'Política · Thriller',sub:'48 horas, 14 rehenes, una presa y un informe que nadie leyó',
  pitch:'A medianoche, unos hombres armados toman el edificio de control de una presa: catorce rehenes dentro y un pueblo dormido nueve kilómetros más abajo. Diriges el gabinete de crisis. A un lado, una general que quiere asaltar el edificio; al otro, una negociadora que quiere hablar; y al otro lado de la mesa, un viceministro que quiere acabar rápido. ¿El hombre que retiene a los rehenes es un terrorista o un denunciante al que nadie escuchó?',
  chapters:[{ti:'Primer contacto',sub:'Horas 00–06'},{ti:'Negociación',sub:'Horas 06–18'},{ti:'Punto de ruptura',sub:'Horas 18–30'},{ti:'Última oferta',sub:'Horas 30–42'},{ti:'Amanecer',sub:'Horas 42–48'}],
  statDefs:[['rehine','Confianza de los rehenes','var(--green)'],['kamuoyu','Opinión pública','var(--acc)'],['masa','Unidad del equipo','var(--blue)']]},
 medal:'Medalla del Gabinete de Crisis',
 end:{gercek:'La verdad',sessiz:'Victoria silenciosa',baskin:'Asalto en la tormenta',bedel:'Un precio muy alto',sel:'Yeşilova',azil:'Destituido',kayip:'Mañana oscura'},
 scenes:{
k1:{b:`03:12. El teléfono te despierta al segundo tono.

—Señor, han tomado el edificio de control de la presa de Yıldızdere. Cinco hombres armados. Catorce empleados dentro.

Veinte minutos después tienes delante el informe. La presa está nueve kilómetros por encima del pueblo de Yeşilova. Allí duermen veintidós mil personas. Quien controle el edificio puede abrir las compuertas del aliviadero cuando quiera.

El líder de los asaltantes ha llamado una vez y ha dicho una sola frase: «Hablaré con quien esté al mando».

El decreto se firmó hace cinco minutos. Ahora eres el jefe del gabinete de crisis.

¿Adónde vas primero?`,
 ch:['Ir en helicóptero a la presa. Ver el lugar con tus propios ojos.','Quedarte en el centro de crisis de la capital. Dirigir desde allí.']},
k2:{b:(st,fl)=>`${fl.yer==='saha'
 ?'Han convertido el puesto de la gendarmería, tres kilómetros por debajo de la presa, en centro de crisis. Por la ventana se ven los focos de la presa, cada uno como un ojo colgado en la oscuridad.'
 :'La pared del centro de crisis de la capital está cubierta de pantallas. Las cámaras de seguridad de la presa llevan diez minutos a oscuras.'}

Hay tres personas sentadas a la mesa.

La general de brigada Oya Demirel, de Fuerzas Especiales. Pelo corto, pocas palabras. «Deme dos horas y conoceré cada rincón de ese edificio».

La inspectora jefe Selin Uçar, quince años como negociadora. «No le haga esperar. El que espera empieza a hablar solo».

El viceministro Haldun Sezer. Lleva la corbata perfecta incluso a medianoche. «La prensa se enterará pronto. Controlemos primero el flujo de noticias».

Los tres te miran. ¿Cuál es tu primera orden?`,
 ch:['Selin tiene razón. Llamadlo ya y mantened la línea abierta.','Primero cerrad el perímetro y colocad a los francotiradores. La llamada puede esperar una hora.','Primero, apagón informativo. Luego llamamos.']},
k3:{b:(st,fl)=>`${fl.bekletti
 ?`Una hora y catorce minutos después se abre la línea. La voz es fría:

—Me ha hecho esperar una hora. Una hora más y habría abierto una de las compuertas. Que lo sepa.`
 :'La línea se abre al segundo tono.'}

—Me llamo Arman Kesk. Trabajé nueve años en esta presa como técnico. No soy un terrorista. Pero esta noche no pienso irme de aquí con las manos vacías.

Habla con calma; elige con cuidado las palabras. Selin escribe una sola palabra en un papel y te la enseña: *Culto.*

—Tengo tres exigencias. Primera, que liberen a mi hermano Serdar Kesk. Segunda, hablar en directo por televisión. Tercera…

Hace una pausa.

—La tercera se la diré después. Primero quiero ver que me toman en serio.

¿Qué respondes?`,
 ch:['«Le escucho. Primero demuéstreme que los rehenes están bien».','«No negocio a punta de pistola. Suelte a los rehenes y luego hablamos».','«Dígame ahora su tercera exigencia. Lo digo en serio».']},
k4:{b:(st,fl)=>`${fl.kanit
 ?`Arman le pasa el teléfono a alguien. Una voz temblorosa y mayor:

—Soy Halil Turan, jefe de turno. Estamos todos bien. No han hecho daño a nadie.

Luego baja la voz:

—Señor, que revisen la tercera galería…

La línea se corta.`
 :fl.ucuncu
 ?`Arman guarda silencio un buen rato.

—La tercera es un informe —dice por fin—. El informe de recepción de la presa. El de verdad, no el que les enseñaron.

La línea se corta.`
 :`Arman suelta una risa breve.

—Comandante, en este edificio hay catorce personas. Y nueve kilómetros más abajo, veintidós mil. Si no va a negociar, ¿para qué ha llamado?

La línea se corta.`}

04:50. El oficial de guardia aparece en la puerta.

—Señor, hay un anciano al teléfono. Nuri Bilgin. Dice que fue uno de los ingenieros que construyeron la presa. «Conozco a Arman, tengo que hablar con el comandante», dice. Ha llamado once veces esta noche.

Haldun niega con la cabeza.

—Esta noche llamará todo entrometido que exista. No perdamos el tiempo.`,
 ch:['Pasadme a Nuri Bilgin. Le daré cinco minutos.','Que lo escuche un oficial. Si es importante, que me lo transmita.']},
k5:{b:(st,fl)=>`${fl.nuri?`La voz de Nuri Bilgin suena cansada pero clara:

—Arman fue mi aprendiz. Ese chico no mataría a nadie. Pero tiene miedo de algo, y puede que con razón. Necesito hablar con usted cara a cara.

Mandas un coche a buscarlo.

`:''}05:40. Selin deja su tableta sobre la mesa. Se ha filtrado en internet un vídeo de cuarenta segundos grabado con el móvil de uno de los rehenes. La ingeniera en prácticas Ece Yalın llora y llama a su madre. Lleva dos millones de reproducciones en una hora.

${fl.yasak?'El apagón informativo no ha impedido que el vídeo se difunda. Al contrario, ha alimentado la pregunta: «¿Qué están ocultando?».':'Los canales de noticias ya han empezado a emitirlo en sus rótulos.'}

Haldun se levanta.

—El ministro espera una declaración. Ya.

¿Qué dirás?`,
 ch:['«La situación está totalmente bajo nuestro control».','«Trabajamos por la seguridad de los rehenes. Ahora mismo no puedo dar detalles».','No hacer ninguna declaración. Guardar silencio.']},
k6:{b:(st,fl)=>`06:05. Amanece. El equipo de Oya ha pasado la noche cartografiando el edificio.

—Señor, hemos observado el cambio de guardia. A las 06:30, dos de los cinco de dentro se van a dormir. Si entramos a la vez por la puerta principal y por el tejado, podemos sacar a la mayoría de los catorce rehenes.

*La mayoría.* La palabra queda flotando sobre la mesa.

Selin interviene de inmediato:

—Arman quiere a su hermano, no morir. Ni siquiera hemos hablado como es debido.

Haldun mira el reloj. No dice nada, pero está claro lo que piensa.

La decisión es tuya.`,
 ch:['Nada de asalto. Seguimos hablando.','Autorizar el asalto al amanecer.']},
k7a:{b:`El equipo está dentro en seis minutos. Sacan del edificio a seis rehenes, entre ellos Ece Yalın, la joven del vídeo.

Pero Arman y sus hombres se repliegan a la sala de turbinas con los ocho rehenes restantes. Sueldan la puerta de acero por dentro. Nadie ha muerto; aun así, entrar ahora es mucho más difícil.

Veinte minutos después llama Arman. Le tiembla la voz, pero no de miedo. De rabia.

—Me ha mentido. Vuelva a intentarlo y abro las compuertas. Todas.`,ch:['Continuar.']},
k7b:{b:`La puerta del tejado tiene una trampa explosiva. La onda lanza hacia atrás al hombre de cabeza. Desde dentro abren fuego; al técnico Mehmet Er le dan en la pierna. Oya tiene que retirar al equipo.

Luego, la voz de Arman:

—Ustedes se lo han buscado.

La primera compuerta del aliviadero se abre medio metro. Nueve kilómetros más abajo, empiezan a sonar las sirenas de Yeşilova. Diez minutos después la compuerta vuelve a cerrarse. Era una advertencia.`,ch:['Continuar.']},
m1:{b:(st,fl)=>`08:00. ${fl.ihanet
 ?`Arman lleva dos horas sin coger el teléfono. Cuando por fin lo hace, pone una sola condición:

—A partir de ahora solo hablo con la policía esa. Con usted, no.`
 :'Esta vez llama el propio Arman. En su voz se nota la noche sin dormir.'}

—Tienen doce horas para mi hermano. Si a las 20:00 Serdar no está delante de esta presa, abro del todo la primera compuerta.

Selin deja el bolígrafo.

—Pedirán comida y medicinas —dice—. Ahí dentro se están quedando sin agua. Podríamos pedir unos cuantos rehenes a cambio.

Haldun se opone:

—Nada de canjes de presos. El Estado no hace eso.

Arman sigue en la línea, esperando respuesta.`,
 ch:['Pedir dos rehenes a cambio de comida y medicinas.','Ofrecerle hablar por teléfono con Serdar.','Ganar tiempo con la excusa de un «problema técnico».']},
m2:{b:(st,fl)=>`${fl.takas?`09:40. Dejan las cajas de comida en la puerta. Diez minutos después salen dos personas con las manos en alto: ${fl.alti?'el viejo vigilante nocturno Rıza y el técnico Yusuf':'la becaria Ece Yalın y el viejo vigilante nocturno Rıza'}. Los dos están ilesos.

`:fl.takasRed?`09:40. Arman rechaza la oferta. «No sale nadie. Llévense la comida y cómansela ustedes».

`:fl.kardes?`09:40. Pasas a Serdar desde la prisión. Los dos hermanos hablan tres minutos. Incluso después de colgar, la voz de Arman es más suave.

`:''}${fl.nuri
 ?`10:30. Nuri Bilgin llega al centro de crisis. Tiene setenta y un años y lleva un cuaderno amarillento.

—Construimos esta presa hace treinta años —dice—. El contratista fue Construcciones Akbel. El hormigón de la tercera galería no pasó las pruebas de laboratorio. Me opuse y me apartaron del proyecto. Arman era entonces mi aprendiz. Lo sabe todo.

Abre el cuaderno: mediciones, fechas, firmas.

—Arman usa a su hermano como pretexto —dice—. Lo que de verdad quiere es ese informe. El informe de recepción de la presa es falso.`
 :`10:30. El dron de Oya recorre el paramento de aguas abajo de la presa. Algo te llama la atención en las imágenes: en pleno verano, un hilo de agua fino pero constante se filtra por la salida de la tercera galería.

—Seguramente no es nada —dice Oya—. Las presas viejas sudan.`}`,
 ch:['Iniciar discretamente una inspección estructural de la presa.','La estructura de la presa no es ahora nuestra prioridad. Centrarse en los rehenes.']},
m3:{b:(st,fl)=>`${fl.kontrol?`11:20. Llega un breve informe del equipo de mantenimiento de la presa: los instrumentos de control de la tercera galería se apagaron hace dos años por estar «averiados». Desde entonces nadie ha tomado una lectura.

`:''}12:00. Haldun cuelga y se acerca a la mesa.

—El ministro quiere esto resuelto antes del telediario de la noche. La general Demirel está lista. Si aprueba un asalto a mediodía, le respaldaremos.

El teléfono de Haldun vuelve a vibrar. Ves la pantalla de reojo: *Construcciones Akbel · Consejo de administración.*

${fl.kontrol||fl.nuri?'Haldun se guarda el teléfono sin contestar. Se da cuenta de que lo estás mirando.':'Haldun rechaza la llamada.'}`,
 ch:['No tomo decisiones según la agenda política. Nada de asalto.','Quiero en mi mesa los expedientes de la presa de Construcciones Akbel. Ya.','Preparad un asalto a mediodía. Pero la última palabra es mía.'],
 why:[null,'No tienes ninguna sospecha sobre la presa.']},
m4:{b:(st,fl)=>`14:00. ${fl.ogle?`Mientras el equipo de Oya toma posiciones, llama Arman. Como si lo viera todo:

—Veo a sus hombres en el tejado. Retírelos o se acabó la conversación.

Oya retira al equipo. El asalto de mediodía se cancela.

`:''}Arman repite su segunda exigencia: televisión en directo. Tres minutos. Sin cortes.

Haldun se mantiene firme:

—No podemos darle una tribuna a un hombre armado.

Selin lo ve de otra manera:

—Si habla, se calmará. Si no puede, explotará.

Oya propone una solución técnica:

—Podríamos montar una emisión falsa. La cámara graba, pero no sale nada al aire.`,
 ch:['Permitir una emisión controlada con diez segundos de retardo.','Montar una emisión falsa.','Rechazar la emisión.']},
m4b:{b:(st,fl)=>fl.yakalandi
 ?`Arman comprueba la emisión con una radio pequeña que tienen dentro. Al no oír su propia voz en ninguna cadena, estrella la cámara contra el suelo.

Por la línea se oye un disparo. A uno de los técnicos le han dado en el hombro.

—Vuelva a mentirme —dice Arman— y la próxima bala no fallará.`
 :`${fl.sahte?'Arman habla a la cámara. Sus palabras solo aparecen en la pantalla del centro de crisis.':'La cara de Arman aparece en las pantallas. Agotado, sin afeitar, mirando fijamente a la cámara.'}

—Me llamo Arman Kesk. Soy del pueblo de Taşlıca. Mi pueblo está bajo el embalse de esta presa. Lo que he hecho esta noche es un delito, lo sé. Pero hay una grieta en la tercera galería. Esta presa se construyó hace treinta años con hormigón defectuoso, y los que lo sabían callaron. Me dirijo a todos los vecinos de Yeşilova: exijan una evacuación. Cuando acabe esta emisión, hagan conmigo lo que quieran.

${fl.sahte?'La pantalla se queda en negro. Nadie lo ha oído. Solo tú y los de esta mesa.':'Cuando las pantallas se apagan, nadie en la mesa dice nada. Haldun está blanco como el papel.'}`,ch:['Continuar.']},
m5:{b:(st,fl)=>`17:30. Selin levanta la vista de la línea.

—Puede que Halil Turan esté sufriendo un infarto. Tiene sesenta y dos años y la medicación está en su casa. Arman pide un médico.

Oya ve una oportunidad al instante:

—Tengo un sanitario de combate. Entra disfrazado de médico, ve el interior y quizá coloca un micrófono.

Selin se opone:

—Si lo descubren, se acabó todo. ${fl.ihanet?'Ya no confía en nosotros. No volverá a hacerlo nunca.':'No volverá a confiar en nosotros nunca.'}`,
 ch:['Enviar a un médico de verdad.','Enviar al sanitario disfrazado de médico.','Nada de médico. Primero, que libere a dos rehenes.']},
r1:{b:(st,fl)=>`${fl.doktor?'El médico se queda una hora dentro y estabiliza a Halil. Al salir te dice una sola cosa: «La gente de ahí dentro le tiene más miedo al hombre que está junto a Arman que a ustedes».':fl.icerde?'El sanitario vuelve una hora después. Dentro hay cuatro hombres armados, no cinco. Los explosivos son reales, pero solo están conectados a los motores de las compuertas. Uno de ellos, un chaval llamado Bora, está al borde del llanto. El micrófono está colocado.':fl.doktorYak?'Descubren al sanitario en el registro de la puerta. Arman le da una paliza y lo devuelve. La medicación de Halil no entra hasta una hora después.':'Arman no libera a nadie. Tampoco dice nada sobre el estado de Halil.'}

22:10. Salta la alarma de nivel del embalse. El nivel ha bajado doce centímetros en una hora. El río que atraviesa Yeşilova se acerca al nivel de desbordamiento.

Oya: —Ha abierto las compuertas. Es una advertencia.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin se inclina hacia la pantalla. Le tiemblan las manos. —No —dice—. Las compuertas están cerradas, mire los registros de los motores. Esta agua viene de la tercera galería. La grieta se está abriendo.'
 :'Pero los registros de los motores de las compuertas no muestran ningún movimiento. El agua viene de otra parte, y nadie sabe de dónde.'}`,
 ch:['Evacuar discretamente Yeşilova esta noche.','Una evacuación provocaría el pánico. Esperar y observar.','Preguntar directamente a Arman por la grieta.'],
 why:[null,null,'No sabes nada de ninguna grieta.']},
r2:{b:(st,fl)=>fl.sor
 ?`—Así que lo sabe —dice Arman. Por primera vez se le quiebra la voz.

—Hace treinta años el maestro Nuri se opuso y lo echaron. Llevo diez años guardando el original de ese informe. Lo envié al gobernador, al ministerio, a los periódicos. Nadie abrió siquiera el sobre.

Respira hondo.

—No tiene que liberar a mi hermano, comandante. Haga público el informe. Evacúe Yeşilova. Me entregaré. Pero los que están conmigo… Cevdet quiere otras cosas. Yo no lo traje. Fue él quien me encontró.`
 :fl.ihanet
 ?`Arman coge el teléfono pero no habla. De fondo se oye a un hombre gritar:

—¡Nos están dando largas! ¡Abre la compuerta!

Arman le grita: «¡Cevdet, cállate!». Luego la línea se corta. Unos minutos después vuelve a abrirse.

—Ya son más de las 20:00 —dice Arman—. No he abierto la compuerta. ¿No se pregunta por qué?`
 :`Arman suena cansado.

—Ya son más de las 20:00 —dice—. No he abierto la compuerta. ¿No se pregunta por qué? Solo le pido una cosa: lea el informe de recepción de esta presa. El de verdad. Luego llámeme.`,
 ch:['«Se lo prometo: el informe se hará público».','«Primero libere a los rehenes. Luego hablaremos de todo».','Darle largas. Ganar tiempo para Oya.'],
 why:['No sabes a qué informe se refiere.']},
r3:{b:(st,fl)=>`02:00. En el centro de crisis solo quedáis Haldun y tú. Haldun cierra la puerta.

—Seré franco. El dueño de Construcciones Akbel es el cuñado del ministro. ${fl.dosya?'Han llegado los expedientes que pidió. No está el informe de laboratorio de la tercera galería. Alguien arrancó esas páginas.':'Si ese informe es real y sale a la luz, no hundirá solo a una empresa. Hundirá al gobierno.'}

Se queda callado un momento.

—Salve a los rehenes y detenga a ese hombre. Del informe hablaremos más adelante, con calma. Se lo digo por su carrera. De verdad.`,
 ch:['«No. El informe consta en el registro de la crisis».','«De acuerdo. El informe no se tratará en esta mesa».','No decir nada. Por la mañana, filtrar el informe a un periodista.'],
 why:[null,null,'No tienes nada que filtrar.']},
r4:{b:(st,fl)=>`${fl.sizinti?'04:30. Marcas el número de un periodista. La llamada dura cuatro minutos. El titular de la edición de la mañana está listo: «Acusan de falsear el informe de Yıldızdere».\n\n':''}05:00. Llega un susurro ${fl.icerde?'por el micrófono':'por la línea de Selin'}. Bora. Diecinueve años, sobrino de Arman. Ha encontrado un teléfono con la excusa de ir al baño.

—Señora —le dice a Selin—. Yo nunca quise esto. Cevdet tiene el detonador de los explosivos. Ni siquiera Arman puede tocarlo. Quiero salir.

Selin te mira. Sacar a Bora podría cambiar todo el equilibrio de dentro. O podría hacer que Cevdet lo comprendiera todo.`,
 ch:['Ayudar a Bora a entregarse.','Bora se queda dentro. Será nuestros ojos y oídos.']},
r5:{b:(st,fl)=>`${fl.bora?'Bora sale por la puerta de servicio de la presa con las manos en alto. El equipo de Oya lo inmoviliza y lo arrastra a cubierto. Sus primeras palabras: «Cevdet tiene el detonador. Rojo. Bolsillo izquierdo».':fl.boraYak?'Antes de que Bora llegue a la puerta, Cevdet lo atrapa. Se oyen gritos dentro. Han atado a Bora con los rehenes. Ahora Cevdet sospecha de todos, incluso de Arman.':'Bora se ha quedado dentro. Cada dos horas envía mensajes breves: «Duermen». «Cevdet no duerme».'}

12:00. El servicio meteorológico emite un aviso: una fuerte tormenta azotará la zona esta noche a partir de las 20:00. Los helicópteros no podrán volar.

${fl.tahliye?'La evacuación de Yeşilova está al ochenta por ciento. La gente se refugia en las escuelas de las colinas.':'En Yeşilova la vida sigue como siempre. El mercado está abierto y hay clase en las escuelas.'}

El ministerio está listo para traer a Serdar Kesk desde la prisión hasta el lugar. Esperan tu aprobación.`,
 ch:['Traed a Serdar.','Serdar se queda en prisión.']},
s1:{b:(st,fl)=>`${fl.serdar
 ?`15:00. Traen a Serdar Kesk al centro de crisis. Esposado, delgado; se parece a su hermano.

—Mi hermano no dispararía a nadie —dice—. Pero Cevdet sí. Lo conocí en la cárcel. A mi hermano le importa la presa; a Cevdet, el dinero. Alguien le pagó por esto. No sé quién. Mi hermano tampoco.`
 :`15:00. Oya deja un expediente de inteligencia sobre la mesa.

—Cevdet Arı. Dos atracos a mano armada, un intento de homicidio. Conoció a Arman el año pasado. La semana pasada le ingresaron una gran suma en su cuenta. Origen desconocido.`}

${(fl.dosya||fl.kayit||fl.sizinti)&&bildi(fl)?'La unidad de delitos financieros rastrea el dinero. El rastro acaba en una empresa pantalla. El año pasado esa empresa tuvo un único cliente: Construcciones Akbel.\n\nNuri Bilgin se hunde en la silla. —Iban a volar la presa —dice—. Arman cargaría con la culpa. Y el informe falso se quedaría para siempre en el fondo del embalse.\n\n':''}Oya continúa:

—Tenemos que separar a Cevdet de Arman. Si Arman se queda solo, se entregará. Si Cevdet sigue ahí, morirá alguien.`,
 ch:['Preparar a Selin para una última conversación con Arman.','Que Oya prepare un plan de asalto para aislar a Cevdet.','Mostrar a Arman el rastro del dinero. Que sepa para quién trabaja de verdad.'],
 why:[null,null,'No tienes pruebas para seguir el dinero.']},
s2:{b:(st,fl)=>`19:00. Las primeras rachas de la tormenta sacuden las ventanas del centro de crisis. Dentro de una hora los helicópteros no podrán despegar.

${fl.para
 ?`Le lees a Arman la transferencia, línea por línea. Un largo silencio.

—Cevdet… me ha utilizado —dice por fin—. Iba a volar la presa y yo cargaría con la culpa. Y todo lo que llevo años intentando contar se lo llevaría el agua.`
 :`Llama Arman. Suena agotado.

—Comandante, a los dos se nos acaba el tiempo. Diga su última palabra.`}

¿Cuál es tu última oferta?`,
 ch:['«El informe se hará público. Usted libera a los rehenes y se entrega».','Poner a Serdar al teléfono. Que convenza a su hermano para que se entregue.','Se acabó la conversación. Asalto antes de que llegue la tormenta.'],
 why:['No tienes poder para publicar el informe o nunca le diste tu palabra a Arman.','Serdar no está aquí.']},
s3t:{b:(st,fl)=>`20:40. La tormenta descarga sobre la presa. Arman acepta.

—Llevo a los rehenes a la puerta —dice.

Luego, por la línea, ruido de forcejeo. La voz de Cevdet:

—¡No sale nadie! ¡Tengo el detonador!

${fl.bora?'Tal como dijo Bora: detonador rojo, bolsillo izquierdo. ':''}El francotirador de Oya está en posición, pero la lluvia le arruina la visión. Selin se quita la chaqueta:

—Entraré desarmada. Si Arman está conmigo, puedo convencer a Cevdet.`,
 ch:['Dejar que Selin entre desarmada.','Autorizar al francotirador a abatir a Cevdet.']},
s3b:{b:(st,fl)=>`19:50. La tormenta está a diez minutos. El equipo de Oya espera a la sombra de la presa.

—Dentro hay ${fl.bora?'tres':'cuatro'} hombres armados —dice Oya—. ${fl.bora||fl.icerde?'Sabemos quién tiene el detonador. ':'No sabemos quién tiene el detonador. '}${fl.alti?'La puerta de la sala de turbinas está soldada; entrar será difícil. ':''}¿Por dónde entramos?`,
 ch:['Por la vieja galería de mantenimiento que conoce el maestro Nuri.','Por el tejado y la puerta principal a la vez.','Cortar primero la luz y entrar a oscuras.'],
 why:['Nadie conoce los planos antiguos de la presa.']},
f1:{b:(st,fl)=>`${{
 teslim:'Selin sale de la tormenta con Arman del brazo. Tras ellos salen los rehenes en fila. Arman ha reducido él mismo a Cevdet; el detonador rojo está en el barro. No ha muerto nadie.',
 atis:'Un solo disparo. Cevdet cae, herido pero vivo. Arman sale por la puerta con las manos en alto. Los rehenes van detrás. No ha muerto nadie.',
 baskin:'Cuando el equipo irrumpe, Cevdet busca el detonador. El primer operador es más rápido. Arman deja el arma y cae de rodillas. Todos los rehenes son rescatados; dos operadores resultan heridos leves.',
 kayip:'Algo sale mal. Cevdet pulsa el detonador; uno de los motores de las compuertas explota. Disparos en la oscuridad. Al hacer recuento por la mañana, dos rehenes, Halil Turan y el técnico Mehmet Er, han muerto. Cevdet ha muerto. Arman ha sido capturado herido.'
}[fl.sonuc]}

23:30. La tormenta está en su peor momento. Pero el verdadero peligro no ha pasado.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin grita por la radio: —¡La tercera galería! ¡La filtración se ha duplicado! ¡Si no bajamos ya el embalse, la presa no aguantará!'
 :'Hacia medianoche, del cuerpo de la presa sale un gemido largo y profundo. Los ingenieros de guardia no saben qué es.'}

${fl.tahliye?'Yeşilova está vacía. Todo el mundo está en las escuelas de las colinas.':'En Yeşilova duermen veintidós mil personas.'}`,
 ch:['Abrir los desagües de fondo. Bajar el embalse de forma controlada.',(st,fl)=>fl.tahliye?'Terminar la evacuación. Que no quede nadie en el pueblo.':'Avisar al pueblo. Que suenen las sirenas.','No es un problema estructural, es la tormenta. Esperar.'],
 why:['Nadie conoce el estado de la presa.']},
f2:{b:(st,fl)=>`${{
 yok:'Siguiendo las indicaciones del maestro Nuri, se abren los desagües de fondo. El agua baja al valle en un caudal controlado. Al amanecer el embalse ha bajado dos metros. La grieta deja de crecer. La presa aguanta.',
 bos:'Antes del amanecer se derrumba la pared de la tercera galería. El flanco de la presa se abre; el agua se precipita al valle. Los barrios bajos de Yeşilova quedan inundados. Pero el pueblo estaba vacío. No murió nadie.',
 hafif:'Las sirenas suenan a medianoche. La gente corre hacia las colinas bajo la lluvia, en pijama. Antes del amanecer se derrumba la pared de la galería; el agua llega a los barrios bajos. Se salva la mayoría. Pero no todos.',
 agir:'Antes del amanecer se derrumba la pared de la tercera galería. El flanco de la presa se abre. El agua cae sobre Yeşilova, que duerme.'
}[sel(fl)]}

09:00. La sala de prensa está a rebosar. Haldun está a tu lado con una declaración preparada para ti. El titular va en negrita: *Frustrado con éxito un atentado terrorista.*

Las cámaras se vuelven hacia ti.`,
 ch:['Contar la verdad: el informe, Construcciones Akbel, todo.','Leer la declaración de Haldun.'],
 why:['No conoces ninguna verdad que contar.']},
end_gercek:{b:(st,fl)=>`Dejas la declaración sobre la mesa y abres tu propio expediente.

Los resultados de laboratorio de la tercera galería. La objeción por escrito de Nuri Bilgin, de hace treinta años. Las firmas de Construcciones Akbel.${fl.para?' El dinero ingresado en la cuenta de Cevdet Arı y la empresa pantalla de la que salió.':''}

Haldun sale de la sala. Antes de que anochezca, el ministro anuncia su dimisión.

${fl.savak?'Se vacía la presa de Yıldızdere para repararla. El informe de los ingenieros es breve: la presa podría haberse derrumbado en cuestión de semanas. En Yeşilova nadie entiende del todo lo cerca que estuvieron; tú sí.':'El flanco derrumbado de la presa sale en las noticias durante meses. Pero Yeşilova no perdió ni una sola vida. Un año después se colocan los cimientos de una presa nueva; esta vez, todos los informes son públicos.'}

Arman Kesk es juzgado. Cumplirá condena por la toma de rehenes; él mismo lo acepta. El último día del juicio, el maestro Nuri se sienta en primera fila. Le hace un gesto con la cabeza a Arman.

Seis meses después llega una carta. Es de la ingeniera en prácticas Ece Yalın: «Estoy en el nuevo equipo de inspección. Compruebo yo misma cada lote de hormigón».

Algunas crisis son el único camino hacia la verdad.`},
end_sessiz:{b:(st,fl)=>`«El atentado terrorista fue frustrado gracias a la determinación de nuestras fuerzas de seguridad».

Flashes de cámaras. A la mañana siguiente tu foto está en la portada de todos los periódicos.

Todos los rehenes volvieron a casa. Arman Kesk es juzgado como «cabecilla terrorista». Cuando intenta mencionar el informe ante el tribunal, el juez lo interrumpe.

${fl.savak?'La presa se vacía discretamente por «mantenimiento rutinario». Construcciones Akbel se adjudica el contrato de reparación.':'El derrumbe de la presa se presenta como un «desastre natural provocado por la tormenta». Construcciones Akbel se adjudica el contrato de reconstrucción.'}${fl.sizinti?'\n\nLa noticia que filtraste dura una semana en los medios. Luego el ministerio la califica de «acusación infundada» y el asunto se cierra.':''}

Una noche recibes un mensaje breve de Nuri Bilgin: «Usted también calló».

Guardas la medalla en un cajón.

Salvaste a los rehenes. No pudiste salvar la verdad.`},
end_baskin:{b:(st,fl)=>`«El atentado terrorista fue frustrado gracias a la determinación de nuestras fuerzas de seguridad».

Las imágenes de las cámaras de casco del equipo de Oya se emiten en todas las pantallas: una operación impecable en plena tormenta, a oscuras. Los canales de noticias la llaman «la operación del año».

Todos los rehenes fueron rescatados. Cevdet Arı y Arman Kesk están detenidos.

Pero en el interrogatorio Arman hace una sola pregunta, siempre la misma:

—¿Leyó el informe?

${fl.savak?'La presa se vacía discretamente por «mantenimiento rutinario». Construcciones Akbel se adjudica el contrato de reparación.':'El derrumbe de la presa se presenta como un «desastre natural provocado por la tormenta». Nadie hace preguntas.'}

Oya y su equipo reciben medallas. El día de la ceremonia, Oya se te acerca y te pregunta en voz baja: «Señor, ¿tenía razón aquel hombre?».

No contestas.

Ganaste una operación. La verdadera batalla ni siquiera empezó.`},
end_bedel:{b:(st,fl)=>`${fl.acik?'En la sala de prensa cuentas la verdad: el informe, Construcciones Akbel, todo. Pero nadie escucha. Todos preguntan por dos nombres.':'Lees la declaración de Haldun. Pero nadie escucha. Todos preguntan por dos nombres.'}

Halil Turan. Mehmet Er.

Vas al funeral de Halil. Pasó treinta y un años en esa presa; le faltaban cuatro meses para jubilarse. Mehmet tenía veintiséis. Se casaba en dos meses. Su prometida ni siquiera te mira.

La comisión de investigación examina tus decisiones una por una. Ninguna fue ilegal. Ninguna fue lo bastante buena.

A Arman lo capturaron herido. Desde la cama del hospital te mira y dice: «Yo nunca quise esto». Le crees. No cambia nada.

${fl.acik?'Al final el informe sale a la luz y Construcciones Akbel va a juicio. Pero en las noticias siempre aparecen esas dos fotos.':'El informe nunca sale a la luz.'}

Cada decisión que se toma en un gabinete de crisis toca la vida de alguien.`},
end_sel:{b:(st,fl)=>`Cuando la luz de la mañana llega al valle, la mitad baja de Yeşilova ha desaparecido. Tejados, minaretes y la canasta de baloncesto del patio del colegio asoman de un lago de barro.

${sel(fl)==='hafif'?'Las sirenas que sonaron por la noche salvaron a miles. Pero once personas no volvieron.':'Nadie fue avisado. El número de muertos crece cada hora.'}

${fl.sonuc==='kayip'?'Los nombres de los dos rehenes perdidos en el edificio de control casi desaparecen en esta larga lista.':'Todos los rehenes fueron rescatados. Pero ya nadie habla de eso.'}

${fl.yayin?'La advertencia de Arman Kesk en la emisión en directo se repite en televisión durante días: «Hay una grieta en la tercera galería».':'El cuaderno amarillento de Nuri Bilgin acaba en manos de un periódico. Su objeción por escrito de hace treinta años ocupa los titulares.'}

Ante la comisión de investigación te hacen una sola pregunta:

—¿No lo sabía?

Las señales estaban ahí. Leerlas era tu trabajo.`},
end_azil:{b:(st,fl)=>`${st.kamuoyu<=0
 ?'Tu cara está en todas las pantallas. Los titulares dicen «Se derrumba el gabinete de crisis» y «El Estado mira sin hacer nada». El ministro ni siquiera llama; te enteras por las noticias de que te han destituido.'
 :'Ya nadie en la mesa te mira. Oya cuestiona tus órdenes; Haldun manda sus informes directamente al ministro. Antes del amanecer llega una orden: el mando del gabinete de crisis pasa a otro general.'}

Ves el resto de la crisis en la televisión de una habitación de hotel. El final lo escribe otro.

En una crisis, la confianza es la munición más valiosa. La tuya se agotó.

La historia no tenía por qué terminar aquí. ¿Podrías haber mantenido a la vez la mesa y la opinión pública?`},
end_kayip:{b:`Al otro lado de la línea, Arman ha dejado de hablar. En su lugar oyes a uno de los hombres que están con él, una voz dura y fría:

—Se acabó el tiempo.

Dos disparos.

Diez minutos después el equipo de Oya está dentro. El dueño de esa voz fría, Cevdet Arı, intenta salir a tiros y muere. Arman está sentado entre los rehenes con la cabeza entre las manos.

Por la mañana se hace el recuento. El jefe de turno Halil Turan y el técnico Mehmet Er han muerto.

Una vez rota la confianza de los rehenes, ya no quedaba tiempo para recuperarla.

La historia no tenía por qué terminar aquí. ¿En qué decisión perdiste a los rehenes?`}
 }};
})();
