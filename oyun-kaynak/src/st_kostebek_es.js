/* =====================================================================
   HİKÂYE · KÖSTEBEK · İspanyolca sürüm
   Kural ve kayıt yapısı Türkçe dosyayla birebir aynıdır (newRun oradan gelir).
   ===================================================================== */
(function(){
const KB=window.__KB;if(!KB)return;
const DAYS=10,AP=3,LEAK=[3,6,9],DROP=[4,8];
const HAND={sağlak:'diestro',solak:'zurdo'};
const SU={
 kaya:{n:'Capitán Can Kaya',k:'Kaya',r:'Oficial de operaciones',c:'#c9a64a',hand:'sağlak',smoke:1,
  bio:'Tu compañero de promoción en la academia y tu mejor amigo durante años. Se rumorea que últimamente está ahogado en deudas.',
  duty:'Dos de esas noches estuve de oficial de guardia. A las dos hice la ronda por el cuartel y después trabajé en los planes en la sala de reuniones.',
  sleep:'Esa noche me acosté pronto. Llevábamos todo el día con los planes; no me tenía en pie.',
  early:'Temprano por la mañana bajé al pueblo; tenía asuntos en el banco.',
  secret:'Sigues a Kaya hasta una tetería en las callejuelas del pueblo. En la mesa hay un hombre corpulento; Kaya le entrega un sobre, el hombre cuenta el dinero y se va. Un usurero. Kaya se queda mucho rato con la cabeza entre las manos.\n\nTu amigo se ahoga en deudas, pero eso no es traición.',
  press:'Kaya se ríe al principio, pero la risa se le congela en la cara.\n\n—¿Sospechas de mí? Quince años… Quince años haciendo guardias juntos.',
  pressX:'Kaya calla un rato y luego te lo cuenta todo: deudas de juego, el usurero, meses pagando intereses.\n\n—Me daba demasiada vergüenza contárselo a nadie. Pero te lo juro, no he vendido a mi país.'},
 aras:{n:'Comandante Levent Aras',k:'Aras',r:'Sección de planificación de operaciones',c:'#b8453a',hand:'solak',smoke:0,
  bio:'Duro, ambicioso y estricto con el reglamento. Su nombre está en la lista de ascensos; dicen que haría cualquier cosa por ello.',
  duty:'Pasada la medianoche estaba en el centro de operaciones, terminando el informe que me pidió el coronel.',
  sleep:'Apagué la luz a las once. Soy un hombre disciplinado, comandante.',
  early:'Salgo a correr todas las mañanas a las seis. Mire el registro de la entrada.',
  secret:'A medianoche Aras sale del cuartel y va al restaurante del hotel del pueblo. En la mesa le espera un coronel de estado mayor del cuartel de división. Aras le regala un reloj caro; por la conversación, está claro que hablan de la lista de ascensos.\n\nImpropio y contrario al reglamento. Pero no es espionaje.',
  press:'Aras te mira sin pestañear.\n\n—Tiene todo el derecho a investigarme. Pero si me deja una sola mancha en el expediente, me rendirá cuentas.',
  pressX:'Aras aprieta la mandíbula y luego lo admite brevemente: se reunió con el coronel de estado mayor buscando un enchufe para el ascenso.\n\n—Eso es un asunto disciplinario, comandante. No es traición.'},
 deniz:{n:'Sargento Deniz Yılmaz',k:'Deniz',r:'Sargento de transmisiones',c:'#70a3c4',hand:'sağlak',smoke:1,
  bio:'Todo el tráfico de radio pasa por sus manos. En los turnos de noche suele estar solo en la sala de transmisiones.',
  duty:'El turno de noche era mío. Estuve en la radio de la sala de transmisiones hasta la mañana.',
  sleep:'Esa noche no estaba de turno; dormía en el barracón.',
  early:'Temprano por la mañana fui a la oficina de correos del pueblo. Mi madre me había enviado un paquete.',
  secret:'A la una de la madrugada Deniz se escabulle del barracón hasta el teléfono público junto a la entrada principal. Habla en voz baja media hora, riéndose de vez en cuando. Al colgar, mira una fotografía: su prometida.\n\nUna llamada nocturna prohibida. Merece una sanción disciplinaria, pero no es espionaje.',
  press:'Deniz traga saliva; los ojos se le van hacia la puerta.\n\n—Mi comandante, yo solo me encargo de las radios. He informado de todo lo que he oído.',
  pressX:'Deniz se pone rojo y confiesa: llama en secreto a su prometida por las noches.\n\n—Aceptaré el castigo que sea, mi comandante. Pero no soy un traidor.'},
 leyla:{n:'Intérprete Leyla Saran',k:'Leyla',r:'Intérprete civil',c:'#a78bfa',hand:'solak',smoke:1,
  bio:'Habla la lengua del enemigo como una nativa. Parte de su familia sigue viviendo al otro lado de la frontera.',
  duty:'Estuve traduciendo comunicaciones de radio interceptadas hasta tarde. Terminé hacia las dos y media.',
  sleep:'Estaba dormida. Los intérpretes no trabajan de noche, comandante; al menos yo no lo hice esa noche.',
  early:'Por la mañana bajé al mercado del pueblo. Voy una vez al mes.',
  secret:'De noche Leyla sale al jardín trasero del pabellón de oficiales y llama al otro lado de la frontera con un móvil escondido. La llamada es corta y entrecortada; al final llora. Está claro que habla con su madre enferma.\n\nUna línea prohibida. Pero lo que has oído es a una hija que echa de menos a su madre, no el informe de una agente.',
  press:'Leyla se cruza de brazos.\n\n—Como mi familia está al otro lado de la frontera, soy la primera sospechosa, ¿verdad? Ya estoy acostumbrada, comandante.',
  pressX:'Leyla pone el teléfono escondido sobre la mesa.\n\n—Mi madre está enferma. La llamo. Nada más. Escuche todas las llamadas si quiere.'},
 emre:{n:'Teniente Emre Tunç',k:'Emre',r:'Oficial de logística',c:'#7fb35a',hand:'sağlak',smoke:0,
  bio:'Callado, educado, impecable en su trabajo. Quizá demasiado impecable. Nadie tiene una mala palabra sobre él.',
  duty:'Había inventario nocturno en el depósito. Estaba revisando las listas de munición.',
  sleep:'Me acosté a las once. Al día siguiente había un envío; necesitaba descansar.',
  early:'Temprano por la mañana salí a recibir el convoy de suministros; mi firma está en los papeles del envío.',
  secret:'A las dos de la madrugada Emre sale de su alojamiento y va al gimnasio, donde golpea el saco durante una hora. Luego se sienta en un banco y mira el móvil: mensajes antiguos de su padre, que está en el hospital.\n\nUn hombre insomne, solo y dolido. Pero ni rastro de traición.',
  press:'Emre está tranquilo, casi demasiado tranquilo.\n\n—Entiendo sus preguntas, mi comandante. No tengo nada que ocultar. Le responderé a lo que me pregunte.',
  pressX:'Por primera vez a Emre le tiembla la voz: su padre está en el hospital y él no puede dormir por las noches.\n\n—No quería que nadie lo supiera, mi comandante. No quería parecer débil.'},
 tekin:{n:'Coronel Nihat Tekin',k:'Tekin',r:'Comandante del cuartel general',c:'#e39540',hand:'solak',smoke:1,
  bio:'Tu comandante. Todos los planes de operaciones pasan por su mesa. Interrogarlo podría costarte la carrera.',
  duty:'Soy el comandante de este cuartel general, comandante; estoy de servicio día y noche. Esa noche estaba en el centro de operaciones.',
  sleep:'Estaba en mi habitación. Hace falta valor para preguntarle a un coronel dónde estuvo por la noche.',
  early:'Por la mañana fui al cuartel de división para una reunión.',
  secret:'De noche el coronel baja al pueblo vestido de paisano y entra en una consulta médica detrás de la farmacia de guardia. Sale cargado con cajas de medicamentos. Al día siguiente descubres la verdad: tiene una enfermedad grave y la oculta a todos para que no lo retiren.\n\nUn secreto, sí, pero no el de un hombre que ha traicionado a su país.',
  press:'El coronel Tekin se recuesta en la silla.\n\n—Así que también me ha puesto en su lista. Valiente, comandante. Espero que tenga razón; si no, puede que le cueste salir de esta habitación.',
  pressX:'El coronel mira largo rato por la ventana y luego te habla de su enfermedad.\n\n—Llevo treinta años con este uniforme. Quiero llevarlo hasta mi último día. ¿Es eso un delito?'}
};
const IDS=Object.keys(SU);
const nm=id=>SU[id].n,kn=id=>SU[id].k;
const NF={kaya:'el capitán Can Kaya',aras:'el comandante Levent Aras',deniz:'el sargento Deniz Yılmaz',leyla:'la intérprete Leyla Saran',emre:'el teniente Emre Tunç',tekin:'el coronel Nihat Tekin'};
const nf=id=>NF[id],Nf=id=>NF[id][0].toUpperCase()+NF[id].slice(1),aN=id=>('a '+NF[id]).replace(/^a el /,'al '),g=(id,m,f)=>id==='leyla'?f:m;
const list=a=>a.map(nm).join(', ').replace(/, ([^,]*)$/,' y $1');
const CLUES=['telsiz','nobet','defter','not','izmarit','banka'];
const CN={telsiz:'Registros de radio',nobet:'Cuadrante de guardias',defter:'Registro de la entrada',not:'Nota quemada',izmarit:'Punto de encuentro',banka:'Extractos bancarios'};
const CW='CONTRADICCIÓN';
function str(R,x){if(R.cleared[x])return {s:-1,tags:[['Descartado','o']]};let s=0;const tags=[];
 for(const c of CLUES)if(R.got[c]&&R.sets[c].includes(x)){if(c==='banka'&&R.expl[x]){tags.push(['Banco: explicado','o']);continue}s++;tags.push([CN[c],'c'])}
 if(R.contra[x]){const n=Object.keys(R.contra[x]).length;s+=2*n;tags.push([n>1?'2 contradicciones':'Contradicción','r'])}
 if(R.nervous[x]){s+=1;tags.push(['Nervioso','r'])}
 if(R.tail[x]==='witness'){s+=3;tags.push(['Visto con el enlace','r'])}
 if(R.trap&&R.trap.res==='hit'&&R.trap.hit===x){s+=3;tags.push(['Trampa: filtró','r'])}
 if(R.tail[x]==='secret')tags.push(['Secreto revelado','o']);
 return {s,tags}}
const C_N=x=>`${Nf(x)} dijo que esas noches estaba durmiendo. Pero según el cuadrante de guardias, las tres noches de filtración estuvo ${g(x,'despierto','despierta')} en el cuartel entre las 02:00 y las 03:00.`;
const C_D=x=>`${Nf(x)} dijo que por las mañanas nunca salía del barracón. Pero según el registro de la entrada, las mañanas siguientes a las filtraciones salió por la entrada principal a las 05:40.`;
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
 {ti:'A puerta cerrada',b:`La general de brigada Sevim Ateş, jefa de Inteligencia del Estado Mayor, cierra con llave la puerta de su despacho antes de empezar:

—Nuestras tres últimas operaciones cayeron en emboscadas, comandante. En las tres, el enemigo conocía el plan antes que nosotros. Hemos perdido a veintitrés soldados.

Pone tres carpetas sobre la mesa. Cada portada lleva un sello rojo: ALTO SECRETO.

—La información se filtra desde el Cuartel General del Este. Alguien de dentro.`},
 {ti:'La misión',b:`—Le envío allí con un nuevo destino, bajo la tapadera de una «auditoría de personal». Nadie conocerá su verdadera misión, ni siquiera el comandante.

La general se vuelve hacia la ventana.

—Tiene diez días. Mientras siga la filtración, nuestros soldados seguirán muriendo. Si acusa a la persona equivocada, arruinará una vida inocente y el verdadero traidor se escapará.

—Entendido, mi general.

—Una cosa más, comandante. No se fíe de nadie.`},
 {ti:'Seis nombres',b:`Seis personas del Cuartel General del Este tienen acceso a los planes. El topo es una de ellas.

Cada día tienes tres acciones: puedes *tomar declaración*, *reunir pruebas* o *seguir* a alguien por la noche. A partir del quinto día puedes *tender una trampa* con información falsa y, cuando estés listo, *acusar* a alguien.

Detecta las contradicciones, conecta las pistas. El tablero de pruebas te mostrará dónde se acumulan las sospechas.

Pero ten cuidado: si el topo se da cuenta, empezará a borrar su rastro.`}];
function morning(R){const d=R.day,N=[];
 if(d===1)N.push('Has llegado al Cuartel General del Este con un destino de «auditoría de personal». El coronel Tekin te ha recibido con un apretón de manos frío. Te han dado una habitación, una mesa y una llave.');
 if(d===2)N.push('En el desayuno, el capitán Kaya se ha sentado a tu lado: «Qué alegría verte aquí. Esta noche tomemos un té, como en los viejos tiempos». Tiene ojeras.');
 if(d===5)N.push('Un pastor del pueblo cuenta que en las últimas semanas alguien espera de noche junto a la vieja fuente de la carretera fronteriza. Podría ser el punto de encuentro.');
 if(d===10)N.push('El último día. Si no acusas al topo antes del atardecer, la general cerrará la investigación y la filtración continuará.');
 return N.concat(R.notes)}
function nightEvents(R){const d=R.day,m=R.mole,ev=[];
 if(LEAK.includes(d)){if(R.trap&&R.trap.res==null&&R.trap.day<=d){const T=R.trap;if(T.a===m||T.b===m){T.res='hit';T.hit=m;ev.push(`Esta noche el enemigo ha actuado según la información falsa sobre ${T.hit===T.a?'el valle norte':'el puente sur'}. Solo **${nf(m)}** lo sabía.`)}else{T.res='clear';R.cleared[T.a]=1;R.cleared[T.b]=1;ev.push(`Esta noche el enemigo no ha actuado según ninguna de las dos pistas falsas de tu trampa. **${Nf(T.a)}** y **${nf(T.b)}** quedan descartados.`)}}
  const k=2+Math.floor(Math.random()*4);R.kia+=k;ev.push(`La filtración continúa: esta noche una de nuestras unidades de reconocimiento ha caído en una emboscada. **${k} muertos.** Bajas totales: ${23+R.kia}.`)}
 if(R.alert>=2&&!R.destroyed._done){R.destroyed._done=1;const c=['banka','izmarit','not'].find(x=>!R.got[x]);if(c){R.destroyed[c]=1;ev.push(`El topo está alerta. ${c==='banka'?'Se ha cortado el acceso a los registros bancarios alegando un «fallo técnico».':c==='izmarit'?'Los alrededores de la vieja fuente se han limpiado durante la noche; no queda ni rastro.':'Las cenizas de la estufa del cuartel se han vaciado durante la noche; la nota quemada ha desaparecido.'}`)}}
 if(R.alert>=3&&!R.destroyed._comp){R.destroyed._comp=1;R.apPenalty=1;ev.push('Se ha presentado una queja anónima contra ti: «El auditor acosa al personal». Mañana por la mañana tendrás que dar explicaciones al coronel Tekin; perderás una acción.')}
 return ev}
function act(R,v){const [a,b,c]=String(v).split(':');
 if(a==='bn'){R.bi++;if(R.bi>=BRIEF.length){R.phase='day';R.bi=0}return}
 if(a==='menu'){R.menu=b||null;return}
 if(a==='ok'){R.res=null;if(R.ap<=0&&R.phase==='day')endDay(R);return}
 if(a==='night'){endDay(R);return}
 if(a==='morning'){R.phase='day';R.notes=[];return}
 if(a==='iv'){if(R.ap<=0||R.ivDay[b]===R.day)return;R.ap--;R.ivDay[b]=R.day;R.iv[b]=(R.iv[b]||0)+1;R.menu=null;
  const first=R.iv[b]===1;let body;
  const BAR=' Y por las mañanas me quedaba en el barracón; no fui a ninguna parte.';
  if(first){const inN=R.sets.nobet.includes(b),inD=R.sets.defter.includes(b);
   const say=b===R.mole?SU[b].sleep+BAR:b===R.liar&&!R.tail[b]?SU[b].sleep+(inD?BAR:''):(inN?SU[b].duty:SU[b].sleep)+(inD?' '+SU[b].early:'');
   body=`${Nf(b)} se sienta frente a ti. Le preguntas dónde estaba las noches de las filtraciones.\n\n—${say}`;
   R.alibi=R.alibi||{};R.alibi[b]=say;R.alibiK=R.alibiK||{};R.alibiK[b]={s:say.indexOf(SU[b].sleep)===0,k:say.indexOf(BAR)>=0}}
  else{if(b===R.mole){R.alert++;R.nervous[b]=1;body=SU[b].press+`\n\nMientras habla, sus dedos no dejan de tamborilear en el borde de la mesa. Puede que oculte algo.`}
   else if(b===R.liar&&R.contra[b]){body=SU[b].pressX+`\n\nAsí que esa era la razón de la incoherencia en la declaración. Por eso ${kn(b)} ocultó dónde estuvo aquella noche.`;delete R.contra[b];R.liarOk=1;if(b===R.herring)R.expl[b]=1}
   else if(R.tail[b]==='secret'||(b===R.herring&&R.got.banka)){body=SU[b].pressX;if(b===R.herring)R.expl[b]=1}
   else body=SU[b].press}
  const nw=contraCheck(R)||[];R.res={ti:'Declaración · '+kn(b),b:body+(nw.length?'\n\n'+nw.map(x=>CW+': '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='cl'){if(R.ap<=0||R.got[b]||R.destroyed[b])return;if(b==='banka'&&R.day<3)return;if(b==='izmarit'&&R.day<5&&!R.dropSeen)return;R.ap--;R.got[b]=1;R.menu=null;
  const S=R.sets[b];let body='';const noticed=Math.random()<.12;if(noticed)R.alert++;
  if(b==='telsiz')body=`Examinas las grabadoras de la sala de transmisiones. Cada noche de filtración, siempre hacia las 02:10, hubo transmisiones cifradas de cuarenta segundos. No venían de fuera, sino de la radio de reserva de la sala de transmisiones.\n\nSolo tres personas tienen llave de esa sala: ${list(S)}.`;
  if(b==='nobet')body=`Comparas los cuadrantes de guardia con los registros de las tarjetas de acceso. Las tres noches de filtración, había tres personas despiertas en el edificio del cuartel entre las 02:00 y las 03:00: ${list(S)}.`;
  if(b==='defter')body=`Lees el registro de la entrada página por página. Las mañanas siguientes a las filtraciones se repiten tres nombres que salen del cuartel antes del amanecer: ${list(S)}.`;
  if(b==='not')body=`Uno de los soldados que criban las cenizas de la estufa del cuartel te trae un trozo de papel medio quemado. Solo se lee una línea: «Jueves. Fuente. 02». ${SU[R.mole].hand==='solak'?'La tinta está corrida en algunos puntos por la mano que pasó sobre la línea; quien lo escribió es zurdo':'La tinta está limpia y las letras se inclinan a la derecha; quien lo escribió es diestro'}.\n\nLos sospechosos ${SU[R.mole].hand==='solak'?'zurdos':'diestros'}: ${list(S)}.`;
  if(b==='izmarit')body=SU[R.mole].smoke?`De noche vas a la vieja fuente y barres la zona con una linterna. Al pie de la piedra hay un puñado de colillas, todas de la misma marca. Quien espera aquí fuma.\n\nLos sospechosos que fuman: ${list(S)}.`:`De noche vas a la vieja fuente y barres la zona con una linterna. Hay huellas recientes, pero ni una sola colilla. Quien espera aquí durante horas no debe de fumar.\n\nLos sospechosos que no fuman: ${list(S)}.`;
  if(b==='banka'){const m=R.mole;const t=x=>x==='kaya'?(x===m?'Las deudas de Kaya con los usureros se saldaron de golpe, cada vez dos días después de una filtración.':'La cuenta de Kaya muestra pagos regulares a usureros; está claro que se ahoga en deudas.'):x==='leyla'?(x===m?'Además de las pequeñas transferencias de Leyla al otro lado de la frontera, tras cada filtración entró en su cuenta un gran ingreso en efectivo.':'Leyla envía pequeñas transferencias al otro lado de la frontera cada mes.'):`En la cuenta de ${kn(x)} se ingresó dinero en efectivo tres veces, cada una dos días después de una filtración.`;
   body=`Con la autorización del fiscal examinas los extractos bancarios de los sospechosos de los últimos tres meses. Dos cuentas muestran movimientos inusuales:\n\n${t(R.banka0=R.sets.banka[0])}\n\n${t(R.sets.banka[1])}`}
  if(noticed)body+='\n\nAl salir, cruzas la mirada con alguien en el pasillo. Puede que se haya dado cuenta de lo que buscabas.';
  const nw=contraCheck(R)||[];R.res={ti:CN[b],b:body+(nw.length?'\n\n'+nw.map(x=>CW+': '+x).join('\n\n'):''),contra:nw.length>0};return}
 if(a==='tail'){if(R.ap<=0||R.tailDay===R.day)return;R.ap--;R.tailDay=R.day;R.menu=null;let body;const m=R.mole;
  if(b===m){if(DROP.includes(R.day)){R.tail[b]='witness';R.dropSeen=1;body=`A la una y media ${nf(b)} sale sigilosamente del cuartel. ${g(b,'Lo','La')} sigues a distancia. Junto a la vieja fuente de la carretera fronteriza espera una sombra. ${kn(b)} le entrega un sobre doblado; la sombra lo guarda en la chaqueta y se funde en la oscuridad.\n\nLo has visto. Ya no es una sospecha; es el testimonio de un testigo presencial.`}
   else{const seen=Math.random()<.3;if(seen)R.alert++;body=`Vigilas ${aN(b)} toda la noche. Se acuesta pronto, la luz se enciende una vez y luego silencio.${seen?'\n\nAntes del amanecer se aparta la cortina de la habitación; alguien mira afuera, justo hacia donde te escondes. Puede que te hayan visto.':'\n\nEsta noche no ha pasado nada.'}`}}
  else{if(R.tail[b]!=='secret'){R.tail[b]='secret';body=SU[b].secret;if(b===R.herring)R.expl[b]=1;if(b===R.liar&&R.contra[b]){delete R.contra[b];R.liarOk=1;body+=`\n\nEso también explica la incoherencia en la declaración de ${kn(b)}.`}}else body=`Vuelves a seguir ${aN(b)}, pero esta noche no ocurre nada fuera de lo normal.`}
  R.res={ti:'Seguimiento nocturno · '+kn(b),b:body};return}
 if(a==='trap'){if(R.trap||R.day<5||R.day>9||R.ap<=0)return;if(b==='go'){const x=c.split(',');if(x.length!==2)return;R.ap--;R.trap={a:x[0],b:x[1],day:R.day,res:null};R.menu=null;R.tsel=[];
   R.res={ti:'Trampa tendida',b:`${(s=>s[0].toUpperCase()+s.slice(1))(aN(x[0]))} le hablas de una incursión prevista en el valle norte, y ${aN(x[1])} de un convoy que espera en el puente sur. Las dos son falsas, y cada una se la has contado a una sola persona.\n\nAhora toca esperar. La próxima noche de filtración mostrará qué pista llegó al enemigo.`};return}
  R.tsel=R.tsel||[];const i=R.tsel.indexOf(b);if(i>=0)R.tsel.splice(i,1);else if(R.tsel.length<2)R.tsel.push(b);return}
 if(a==='acc'){R.menu='accuse';R.accSel=b;return}
 if(a==='accgo'){KB.confront(R,b);return}
 if(a==='fin'){R.end=b;return}}
function endDay(R){const ev=nightEvents(R);R.lastNight=ev;R.day++;R.res=null;R.menu=null;
 if(R.day>DAYS){R.end='kacti';R.endWhy='time';return}
 R.ap=AP-(R.apPenalty||0);R.apPenalty=0;R.phase='night'}
const av=(id,sz=40)=>`<span class="kav" style="--c:${SU[id].c};width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.38)}px">${SU[id].k.slice(0,1)}</span>`;
const md=s=>fmt32(String(s).replace(/\*\*([^*]+)\*\*/g,'⟦$1⟧')).replace(/⟦([^⟧]+)⟧/g,'<b>$1</b>').replace(/CONTRADICCIÓN:|CONTRADICTION:|ÇELİŞKİ:/g,'<span class="kcontra">'+CW+'</span>');
function header(R){return `<div class="khead"><div><span class="lbl">Día</span><b class="num">${Math.min(R.day,DAYS)}<small>/${DAYS}</small></b></div>
 <div><span class="lbl">Acciones</span><div class="kap">${Array.from({length:AP},(_,i)=>`<i class="${i<R.ap?'on':''}"></i>`).join('')}</div></div>
 <div><span class="lbl">Caídos</span><b class="num red">${23+R.kia}</b></div></div>${R.alert>=2?'<div class="kwarn">El topo está alerta y ha empezado a borrar su rastro.</div>':''}`}
function board(R){const rows=IDS.map(x=>({x,...(str(R,x)||{})}));const mx=Math.max(6,...rows.map(r=>r.s||0));
 return `<div class="card kboard"><div class="sec-h"><h2>Tablero de pruebas</h2></div>
 ${rows.map(r=>`<div class="krow${r.s<0?' clr':''}">${av(r.x,34)}<div class="grow"><div class="kn"><b>${esc(SU[r.x].n)}</b>${r.s<0?'<span class="kclr">Descartado</span>':''}</div>
  ${r.s>=0?`<div class="ksus"><i style="width:${Math.min(100,(r.s/mx)*100)}%"></i></div>`:''}${r.tags&&r.tags.length?`<div class="ktags">${r.tags.map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')}</div>`:''}</div></div>`).join('')}</div>`}
const CHS=[{ti:'La misión',sub:'Seis sospechosos · días 1–2'},{ti:'La investigación',sub:'Declaraciones y registros · días 3–6'},{ti:'La trampa',sub:'Pistas falsas y seguimientos · días 7–9'},{ti:'El careo',sub:'La sala de interrogatorios · día 10'}];
function chOf(R){return R.end?3:R.phase==='brief'?0:R.day<=2?0:R.day<=6?1:R.day<=9?2:3}
const KD={telsiz:'¿De dónde salían las emisiones cifradas?',nobet:'¿Quién estaba despierto las noches de filtración?',defter:'¿Quién salía del cuartel por las mañanas?',not:'Papeles quemados en la estufa',izmarit:'La vieja fuente de la carretera fronteriza',banka:'Movimientos de dinero inusuales'};
function view(R){const KI=VIEWTR.KI,ART=VIEWTR.ART;
 if(R.phase==='brief'){const B=BRIEF[R.bi];return `${R.bi===0?`<div class="tchap32"><span>Capítulo 1</span><b class="stencil">La misión</b></div>`:''}<div class="tart32">${ART.hq()}</div><div class="tbody32"><h3 class="stencil">${esc(B.ti)}</h3>${md(B.b)}</div>
  ${R.bi===2?`<div class="ksus6">${IDS.map(x=>`<div>${av(x,36)}<span><b>${esc(SU[x].n)}</b><small>${esc(SU[x].bio)}</small></span></div>`).join('')}</div>`:''}
  <button class="btn block" data-a="kb" data-v="bn">${R.bi<2?'Continuar':'Empezar la investigación'}</button>`}
 if(R.phase==='night'){const ch=chOf(R);const newCh=[3,7,10].includes(R.day);return `${newCh?`<div class="tchap32"><span>Capítulo ${ch+1}</span><b class="stencil">${esc(CHS[ch].ti)}</b></div>`:''}<div class="tart32">${ART.night()}</div>
  <div class="tbody32"><h3 class="stencil">Noche</h3>${R.lastNight.length?md(R.lastNight.join('\n\n')):'<p>La noche ha pasado tranquila. Una a una, las luces del cuartel se apagan.</p>'}</div>
  <button class="btn block" data-a="kb" data-v="morning">Empieza el día ${R.day} ›</button>`}
 if(R.phase==='turn'){return `<div class="tart32">${ART.room()}</div><div class="tbody32"><h3 class="stencil">Una oportunidad</h3>${md(`${Nf(R.mole)} está ${g(R.mole,'sentado','sentada')} frente a ti en la sala de interrogatorios. Las pruebas están sobre la mesa; no hay forma de negarlo. Se le hunden los hombros.\n\nPero tienes una idea: el topo es un canal que lleva información falsa al enemigo. El enemigo aún confía en ${g(R.mole,'él','ella')}, porque nunca se puso en alerta ni borró su rastro. En lugar de ${g(R.mole,'arrestarlo','arrestarla')}, podrías ${g(R.mole,'utilizarlo','utilizarla')}.`)}</div>
  <div class="topts32"><button class="opt op2" data-a="kb" data-v="fin:ag"><span class="k">A</span><span class="grow">${g(R.mole,'Arrestarlo','Arrestarla')}. Que el traidor reciba lo que merece.</span></button><button class="opt op2" data-a="kb" data-v="fin:cift"><span class="k">B</span><span class="grow">Hacerle una oferta: llevará al enemigo la información que elijamos y, a cambio, salvará la vida.</span></button></div>`}
 let h=header(R);
 if(R.res){return h+`<div class="tbody32 kres${R.res.contra?' hot':''}"><h3 class="stencil">${esc(R.res.ti)}</h3>${md(R.res.b)}</div><button class="btn block" data-a="kb" data-v="ok">${R.ap<=0?'Terminar el día ›':'De acuerdo'}</button>`}
 const back=`<button class="btn ghost block" data-a="kb" data-v="menu:">‹ Volver</button>`;
 if(R.menu==='iv')return h+`<div class="card"><div class="sec-h"><h2>¿A quién tomarás declaración?</h2></div><p class="small muted">Puedes hablar con cada sospechoso una vez al día. En la segunda conversación, lo presionas.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="iv:${x}"${R.ivDay[x]===R.day?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${esc(SU[x].r)} · ${R.iv[x]?(R.iv[x]===1?'Hablado una vez':'Presionado'):'Aún sin interrogar'}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='cl')return h+`<div class="card"><div class="sec-h"><h2>¿Dónde vas a buscar?</h2></div>${CLUES.map(c=>{const lock=c==='banka'&&R.day<3?'Desde el día 3 (autorización del fiscal)':c==='izmarit'&&R.day<5&&!R.dropSeen?'Aún no se conoce el punto de encuentro':R.destroyed[c]?'El topo ha destruido esta prueba':R.got[c]?'Examinado':'';return `<button class="kpick" data-a="kb" data-v="cl:${c}"${lock?' disabled':''}><span class="kic">${KI[c]}</span><span class="grow"><b>${esc(CN[c])}</b><small>${esc(lock||KD[c])}</small></span>${lock?'':'<span class="chev">›</span>'}</button>`}).join('')}</div>`+back;
 if(R.menu==='tail')return h+`<div class="card"><div class="sec-h"><h2>¿A quién seguirás esta noche?</h2></div><p class="small muted">Solo puedes seguir a una persona por noche. Si el topo se da cuenta, se pondrá alerta.</p>${IDS.map(x=>`<button class="kpick" data-a="kb" data-v="tail:${x}">${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.tail[x]==='secret'?'Ya seguido':R.tail[x]==='witness'?'Visto con el enlace':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`).join('')}</div>`+back;
 if(R.menu==='trap'){const sel=R.tsel||[];return h+`<div class="card"><div class="sec-h"><h2>Tender una trampa</h2></div><p class="small">Elige a dos sospechosos. A cada uno le darás una pista operativa falsa distinta. Si en la próxima filtración el enemigo actúa según una de ellas, esa persona es el topo; si no actúa según ninguna, ambos quedan descartados. <b>Solo puedes tender la trampa una vez.</b></p>${IDS.map(x=>`<button class="kpick${sel.includes(x)?' on':''}" data-a="kb" data-v="trap:${x}"${R.cleared[x]?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${R.cleared[x]?'Descartado':sel.includes(x)?(sel.indexOf(x)===0?'Pista del valle norte':'Pista del puente sur'):esc(SU[x].r)}</small></span><span class="kchk">${sel.includes(x)?'✓':''}</span></button>`).join('')}</div>
  <button class="btn block" data-a="kb" data-v="trap:go:${sel.join(',')}"${sel.length===2?'':' disabled'}>Dar las pistas falsas</button>`+back}
 if(R.menu==='board')return h+board(R)+`<div class="card"><div class="sec-h"><h2>Declaraciones</h2></div>${IDS.filter(x=>R.alibi&&R.alibi[x]).map(x=>`<div class="kst">${av(x,28)}<p><b>${esc(SU[x].k)}:</b> «${esc(R.alibi[x])}»</p></div>`).join('')||'<p class="small muted">Aún no has tomado declaración a nadie.</p>'}</div>
  <div class="card"><div class="sec-h"><h2>Pruebas</h2></div>${CLUES.filter(c=>R.got[c]).map(c=>`<div class="kcl"><span class="kic">${KI[c]}</span><span><b>${esc(CN[c])}</b><small>${c==='banka'?esc(R.sets.banka.map(kn).join(' y ')+': movimientos inusuales'):c==='not'?esc('Quien escribió es '+HAND[SU[R.mole].hand]+': '+R.sets.not.map(kn).join(', ')):c==='izmarit'?esc((SU[R.mole].smoke?'Fumadores: ':'No fumadores: ')+R.sets.izmarit.map(kn).join(', ')):esc(R.sets[c].map(kn).join(', '))}</small></span></div>`).join('')||'<p class="small muted">Aún no has reunido ninguna prueba.</p>'}</div>`+back;
 if(R.menu==='accuse'){const x=R.accSel;if(x){const S=str(R,x);return h+`<div class="card kacc">${av(x,64)}<h2 class="stencil">${esc(SU[x].n)}</h2><p class="small muted">${esc(SU[x].r)}</p>
   <div class="ktags">${S.tags.filter(t=>t[1]!=='o').map(([t,c])=>`<em class="${c}">${esc(t)}</em>`).join('')||'<span class="small muted">Casi no tienes pruebas contra esta persona.</span>'}</div>
   <p>${g(x,'Lo','La')} llevarás a la sala de interrogatorios y pondrás las pruebas sobre la mesa. Si te equivocas, arruinarás una vida inocente y el verdadero topo escapará. <b>No podrás echarte atrás.</b></p></div>
   <button class="btn warn block" data-a="kb" data-v="accgo:${x}">Acusar a ${esc(kn(x))}</button><button class="btn ghost block" data-a="kb" data-v="acc:">‹ Elegir a otra persona</button>`}
  return h+`<div class="card"><div class="sec-h"><h2>¿A quién vas a acusar?</h2></div>${IDS.map(x=>{const S=str(R,x);return `<button class="kpick" data-a="kb" data-v="acc:${x}"${S.s<0?' disabled':''}>${av(x,38)}<span class="grow"><b>${esc(SU[x].n)}</b><small>${S.s<0?'Descartado':esc(SU[x].r)}</small></span><span class="chev">›</span></button>`}).join('')}</div>`+back}
 const N=morning(R);
 return h+(N.length?`<div class="kmorn"><span class="lbl">Parte de la mañana · Día ${R.day}</span>${md(N.join('\n\n'))}</div>`:'')+
 `<div class="kacts">
  <button class="kact" data-a="kb" data-v="menu:iv"${R.ap?'':' disabled'}><span class="kic">${KI.iv}</span><b>Tomar declaración</b><small>Hablar con un sospechoso</small></button>
  <button class="kact" data-a="kb" data-v="menu:cl"${R.ap?'':' disabled'}><span class="kic">${KI.cl}</span><b>Reunir pruebas</b><small>Registros, archivos</small></button>
  <button class="kact" data-a="kb" data-v="menu:tail"${R.ap&&R.tailDay!==R.day?'':' disabled'}><span class="kic">${KI.tail}</span><b>Seguimiento nocturno</b><small>${R.tailDay===R.day?'Esta noche ya sigues a alguien':'Seguir a alguien'}</small></button>
  <button class="kact" data-a="kb" data-v="menu:trap"${R.ap&&!R.trap&&R.day>=5&&R.day<=9?'':' disabled'}><span class="kic">${KI.trap}</span><b>Tender una trampa</b><small>${R.trap?(R.trap.res?'Trampa resuelta':'Trampa tendida, esperando'):R.day<5?'Desde el día 5':R.day>9?'No queda tiempo':'Sembrar información falsa'}</small></button>
 </div>${rings(R)}
 <div class="kbar"><button class="btn ghost" data-a="kb" data-v="menu:accuse"${R.day>=5?'':' disabled'}>${R.day>=5?'Acusar':'Acusar · día 5'}</button><button class="btn" data-a="kb" data-v="night">Terminar el día ›</button></div>`}
function rings(R){const rows=IDS.map(x=>({x,...str(R,x)}));const mx=Math.max(6,...rows.map(r=>r.s));
 return `<button class="kring-card" data-a="kb" data-v="menu:board"><div class="sec-h"><span class="lbl">Tablero de pruebas</span><span class="small acc">Detalles ›</span></div><div class="krings">${rows.map(r=>{const h=r.s<0?0:Math.min(1,r.s/mx);return `<div class="kr${r.s<0?' clr':''}${r.s>0?' hot':''}" style="--h:${h.toFixed(2)}"><span class="kr-ring">${av(r.x,38)}${r.s>0?`<em>${r.s}</em>`:''}</span><small class="notr">${esc(SU[r.x].k)}</small></div>`}).join('')}</div></button>`}
function endText(R){const m=R.mole,x=R.accused,kia=23+R.kia;
 if(R.end==='ag')return `${R.bluff?`Tus pruebas son escasas; tú también lo sabes. Pero te sientas frente ${aN(m)} como si lo supieras todo. A la tercera hora, se derrumba.`:`Pones las pruebas sobre la mesa una a una. ${Nf(m)} lo niega al principio, luego se calla y después empieza a hablar.`}

—Fue por el dinero —dice—. Luego fue el miedo. Una vez que empiezas, ya no puedes parar.

Con los nombres que da, esa misma noche detienen al enlace de la aldea fronteriza y a dos cómplices. La red se derrumba.

Una semana después, la general Ateş te llama a su despacho. Sobre la mesa hay una lista de ${kia} nombres.

—No podemos devolverles la vida, comandante. Pero no se añadirá ningún nombre nuevo a esta lista. Usted se ha encargado de ello.`;
 if(R.end==='cift')return `Con las manos temblorosas, ${nf(m)} acepta tu oferta.

Durante los seis meses siguientes, el enemigo recibe de la fuente en la que confía informes escritos por nosotros. Posiciones falsas, unidades que no existen, ofensivas que nunca llegarán…

Cuando llega la primavera, la división más fuerte del enemigo pasa tres días cercando un valle vacío. En esos tres días, nuestras unidades rompen el frente.

Nadie sabrá tu nombre. No aparecerá en ningún informe de esta operación. La general Ateş se limita a estrecharte la mano:

—Algunas victorias se ganan en silencio, comandante. Las más grandes, casi siempre.`;
 if(R.end==='yanlis')return `${Nf(x)} es ${g(x,'arrestado','arrestada')}. Mientras le ponen las esposas, te mira; en sus ojos no hay rabia, solo desconcierto.

—Se equivoca —dice—. Algún día lo entenderá.

Tres semanas después, otra operación cae en una emboscada. Y luego otra.

Meses más tarde, un enlace capturado en la frontera da un solo nombre: ${nm(m)}. Pero ${kn(m)} hace tiempo que cruzó la frontera y desapareció.

${Nf(x)} queda en libertad. Vas a ${g(x,'esperarlo','esperarla')} a la puerta. Le tiendes la mano; no la acepta.

Te dijeron que no te fiaras de nadie. Resulta que tampoco debías fiarte ciegamente de las pruebas.`;
 return R.endWhy==='weak'?`Tus pruebas no bastaron. ${Nf(m)} mantuvo la calma en la sala de interrogatorios y tuvo respuesta para cada acusación. El fiscal ordenó su puesta en libertad.

A la mañana siguiente, la cama de ${kn(m)} estaba vacía. Los registros del puesto fronterizo mostraban un vehículo que cruzó al otro lado a medianoche.

Encontraste al topo, pero no pudiste atraparlo.`:`Se acabaron los diez días. La general Ateş cerró la investigación.

La filtración del Cuartel General del Este siguió dos meses más. Luego, una noche, ${nf(m)} desapareció sin dejar rastro. Una semana después aparecía en la televisión enemiga, sonriendo.

La lista de bajas llegó a ${kia+11} nombres.`}
const VIEWTR={KI:KB.KI,ART:KB.ART};
const T=KB.T;
T.es={ti:'El Topo',genre:'Espionaje · Detectives',sub:'Encuentra al traidor del cuartel general en 10 días',
 pitch:'Las tres últimas operaciones cayeron en emboscadas. Alguien del Cuartel General del Este está filtrando información, y tienes 10 días. Toma declaraciones, examina registros, sigue a los sospechosos de noche, tiende trampas con información falsa. El topo puede ser una persona distinta en cada partida. Si acusas a quien no es, un inocente pagará y el verdadero traidor escapará.',
 chapters:CHS,
 endings:[{k:'ag',ti:'Red desmantelada',medal:'Cazador de Sombras',tone:'good'},{k:'cift',ti:'Agente doble',medal:'Insignia Invisible',tone:'good'},{k:'yanlis',ti:'La persona equivocada',tone:'bad'},{k:'kacti',ti:'El topo escapó',tone:'bad'}],
 view,endText,subtitle:R=>R.end?'Final':R.phase==='brief'?'Capítulo 1 · La misión':`Día ${Math.min(R.day,DAYS)} · ${CHS[chOf(R)].ti}`};
window.__KBL=window.__KBL||{};window.__KBL.es=act;
})();
