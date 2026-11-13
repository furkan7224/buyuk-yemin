/* ============ v26: ÇOK DİL DESTEĞİ (TR · EN · JA · ES · FR · DE) ============ */
/* Arayüz metinleri ekrana çizildikten sonra seçilen dile çevrilir. Satır biçimi: tr|en|ja|es|fr|de */
const LANGS=[['tr','Türkçe'],['en','English'],['ja','日本語'],['es','Español'],['fr','Français'],['de','Deutsch']];
const LIDX={tr:0,en:1,ja:2,es:3,fr:4,de:5};
const I18N_SRC=`
Askerî kariyer · Strateji · Yaşam|Military career · Strategy · Life|軍歴 · 戦略 · 人生|Carrera militar · Estrategia · Vida|Carrière militaire · Stratégie · Vie|Militärkarriere · Strategie · Leben
Erden mareşale|From private to marshal|二等兵から元帥へ|De soldado a mariscal|De simple soldat à maréchal|Vom Soldaten zum Marschall
Kaybettiklerin için, vatanın için, kendin için.|For those you lost, for your country, for yourself.|失った者のために、祖国のために、自分のために。|Por los que perdiste, por tu patria, por ti.|Pour ceux que tu as perdus, pour ta patrie, pour toi.|Für die, die du verloren hast, für dein Land, für dich.
GİZLİ|CLASSIFIED|機密|CLASIFICADO|CONFIDENTIEL|GEHEIM
Devam et|Continue|続きから|Continuar|Continuer|Fortsetzen
Yeni oyun|New game|ニューゲーム|Nueva partida|Nouvelle partie|Neues Spiel
Hikâyeni yaz, ülkeni ve birliğini seç|Write your story, pick your country and unit|物語を書き、国と部隊を選ぶ|Escribe tu historia, elige país y unidad|Écris ton histoire, choisis ton pays et ton unité|Schreib deine Geschichte, wähle Land und Einheit
Rütbe cetvelleri|Rank charts|階級表|Tablas de rangos|Tableaux des grades|Ranglisten
14 ülkenin ordusu ve rütbe sistemi|Armies and rank systems of 14 nations|14か国の軍隊と階級制度|Ejércitos y rangos de 14 países|Armées et grades de 14 pays|Armeen und Rangsysteme von 14 Ländern
Rehber|Guide|ガイド|Guía|Guide|Anleitung
Ayarlar|Settings|設定|Ajustes|Paramètres|Einstellungen
Dil|Language|言語|Idioma|Langue|Sprache
‹ Geri|‹ Back|‹ 戻る|‹ Atrás|‹ Retour|‹ Zurück
Geri|Back|戻る|Atrás|Retour|Zurück
Nasıl oynanır|How to play|遊び方|Cómo jugar|Comment jouer|So wird gespielt
Temel kural|Core rule|基本ルール|Regla básica|Règle de base|Grundregel
Ülke ve ordu|Country and army|国と軍|País y ejército|Pays et armée|Land und Armee
Görevler|Missions|任務|Misiones|Missions|Einsätze
Eğitim|Training|訓練|Entrenamiento|Entraînement|Ausbildung
Terfi|Promotion|昇進|Ascenso|Promotion|Beförderung
Beden ve zihin|Body and mind|心と体|Cuerpo y mente|Corps et esprit|Körper und Geist
Antrenman modu|Training mode|訓練モード|Modo de entrenamiento|Mode d'entraînement|Trainingsmodus
Oyun başladığında ayarlanır.|Set once the game starts.|ゲーム開始後に設定できます。|Se ajusta al empezar la partida.|Réglable une fois la partie lancée.|Wird nach Spielstart eingestellt.
Mini oyun temposu|Mini-game pace|ミニゲームのテンポ|Ritmo de minijuegos|Rythme des mini-jeux|Minispiel-Tempo
Kayıt|Save|セーブ|Guardado|Sauvegarde|Speicherstand
Oyun her adımda bu cihaza otomatik kaydedilir.|The game saves automatically on this device.|ゲームはこの端末に自動保存されます。|La partida se guarda automáticamente en este dispositivo.|La partie est sauvegardée automatiquement sur cet appareil.|Das Spiel speichert automatisch auf diesem Gerät.
Kayıtlı oyun yok.|No saved game.|セーブデータがありません。|No hay partida guardada.|Aucune sauvegarde.|Kein Spielstand.
Rütbe cetveli|Rank chart|階級表|Tabla de rangos|Tableau des grades|Rangliste
Kara|Land|陸軍|Tierra|Terre|Heer
Deniz|Navy|海軍|Armada|Marine|Marine
Hava|Air / Weather|空 / 天候|Aire / Clima|Air / Météo|Luft / Wetter
Er ve Erbaş|Enlisted|兵卒|Tropa|Militaires du rang|Mannschaften
Astsubay|NCO|下士官|Suboficial|Sous-officier|Unteroffizier
Subay|Officer|将校|Oficial|Officier|Offizier
Üst Subay|Senior officer|佐官|Oficial superior|Officier supérieur|Stabsoffizier
General / Amiral|General / Admiral|将官 / 提督|General / Almirante|Général / Amiral|General / Admiral
En üst rütbe|Highest rank|最高位|Rango supremo|Grade suprême|Höchster Rang
Adım 1 / 2|Step 1 / 2|ステップ 1 / 2|Paso 1 / 2|Étape 1 / 2|Schritt 1 / 2
Adım 2 / 2|Step 2 / 2|ステップ 2 / 2|Paso 2 / 2|Étape 2 / 2|Schritt 2 / 2
NEDEN BURADASIN,|WHY ARE YOU HERE,|なぜここにいる、|¿POR QUÉ ESTÁS AQUÍ,|POURQUOI ES-TU ICI,|WARUM BIST DU HIER,
ASKER?|SOLDIER?|兵士よ?|SOLDADO?|SOLDAT ?|SOLDAT?
Hikâyeni anlat. Ne yaşadın, kimi kaybettin, bu üniformayı neden giyiyorsun? Yazdıkların oyun boyunca karşına çıkacak.|Tell your story. What did you live through, whom did you lose, why do you wear this uniform? What you write will follow you through the game.|あなたの物語を語ってください。何を経験し、誰を失い、なぜこの軍服を着るのか。書いたことはゲーム中ずっとあなたについて回ります。|Cuenta tu historia. ¿Qué viviste, a quién perdiste, por qué llevas este uniforme? Lo que escribas te acompañará toda la partida.|Raconte ton histoire. Qu'as-tu vécu, qui as-tu perdu, pourquoi portes-tu cet uniforme ? Ce que tu écris te suivra tout au long du jeu.|Erzähl deine Geschichte. Was hast du erlebt, wen verloren, warum trägst du diese Uniform? Was du schreibst, begleitet dich das ganze Spiel.
Hikâyenin çekirdeği|Core of your story|物語の核心|Núcleo de tu historia|Cœur de ton histoire|Kern deiner Geschichte
Eşimi kaybettim|I lost my spouse|配偶者を亡くした|Perdí a mi pareja|J'ai perdu mon conjoint|Ich habe meinen Partner verloren
Ailem savaşta öldü|My family died in the war|家族を戦争で失った|Mi familia murió en la guerra|Ma famille est morte à la guerre|Meine Familie starb im Krieg
Kardeşim şehit düştü|My brother fell in service|兄弟が殉職した|Mi hermano cayó en servicio|Mon frère est tombé au combat|Mein Bruder fiel im Dienst
Vatanım için buradayım|I'm here for my country|祖国のためにここにいる|Estoy aquí por mi patria|Je suis là pour ma patrie|Ich bin hier für mein Land
Geçmişimden kaçıyorum|I'm running from my past|過去から逃げている|Huyo de mi pasado|Je fuis mon passé|Ich fliehe vor meiner Vergangenheit
Benim hikâyem farklı|My story is different|私の物語は違う|Mi historia es distinta|Mon histoire est différente|Meine Geschichte ist anders
İptal|Cancel|キャンセル|Cancelar|Annuler|Abbrechen
Devam|Continue|次へ|Continuar|Continuer|Weiter
KİMLİK|IDENTITY|身元|IDENTIDAD|IDENTITÉ|IDENTITÄT
İsimsiz asker|Unnamed soldier|名もなき兵士|Soldado sin nombre|Soldat anonyme|Namenloser Soldat
Adın ve soyadın|Full name|氏名|Nombre y apellido|Prénom et nom|Vor- und Nachname
Yaş|Age|年齢|Edad|Âge|Alter
Ülke|Country|国籍|País|Pays|Land
Türkiye|Türkiye|トルコ|Turquía|Turquie|Türkei
Rusya|Russia|ロシア|Rusia|Russie|Russland
Çin|China|中国|China|Chine|China
Almanya|Germany|ドイツ|Alemania|Allemagne|Deutschland
Birleşik Krallık|United Kingdom|イギリス|Reino Unido|Royaume-Uni|Vereinigtes Königreich
Fransa|France|フランス|Francia|France|Frankreich
Japonya|Japan|日本|Japón|Japon|Japan
Pakistan|Pakistan|パキスタン|Pakistán|Pakistan|Pakistan
İsrail|Israel|イスラエル|Israel|Israël|Israel
İtalya|Italy|イタリア|Italia|Italie|Italien
Suriye|Syria|シリア|Siria|Syrie|Syrien
Özbekistan|Uzbekistan|ウズベキスタン|Uzbekistán|Ouzbékistan|Usbekistan
Azerbaycan|Azerbaijan|アゼルバイジャン|Azerbaiyán|Azerbaïdjan|Aserbaidschan
ABD|USA|アメリカ|EE. UU.|États-Unis|USA
Giriş yolu|Entry path|入隊ルート|Vía de ingreso|Voie d'entrée|Einstiegsweg
Er olarak katıl|Join as a private|二等兵として入隊|Ingresar como soldado|S'engager comme soldat|Als Soldat eintreten
Astsubay okulu mezunu|NCO school graduate|下士官学校卒業|Graduado de suboficiales|Diplômé de l'école des sous-officiers|Absolvent der Unteroffiziersschule
Harp okulu mezunu (subay)|Military academy graduate (officer)|士官学校卒業(将校)|Graduado de la academia (oficial)|Diplômé de l'académie (officier)|Absolvent der Militärakademie (Offizier)
Görünüm|Appearance|外見|Apariencia|Apparence|Aussehen
Başlık açık|Headgear off|帽子なし|Sin casco|Sans couvre-chef|Ohne Kopfbedeckung
Cinsiyet|Gender|性別|Género|Genre|Geschlecht
Erkek|Male|男性|Hombre|Homme|Mann
Kadın|Female|女性|Mujer|Femme|Frau
Ten rengi|Skin tone|肌の色|Tono de piel|Teint|Hautton
Saç modeli|Hairstyle|髪型|Peinado|Coiffure|Frisur
Saç rengi|Hair color|髪の色|Color de pelo|Couleur des cheveux|Haarfarbe
Göz rengi|Eye color|目の色|Color de ojos|Couleur des yeux|Augenfarbe
Sakal ve bıyık|Beard and moustache|ひげ|Barba y bigote|Barbe et moustache|Bart und Schnurrbart
Yok|None|なし|Ninguno|Aucun|Keiner
Boy:|Height:|身長:|Altura:|Taille :|Größe:
Kilo:|Weight:|体重:|Peso:|Poids :|Gewicht:
İlk dövüş sporun|Your first combat sport|最初の格闘技|Tu primer deporte de combate|Ton premier sport de combat|Deine erste Kampfsportart
Özel hayat|Private life|私生活|Vida privada|Vie privée|Privatleben
Bekâr|Single|独身|Soltero|Célibataire|Ledig
Sevgilim var|In a relationship|恋人がいる|Tengo pareja|En couple|In einer Beziehung
Evliyim|Married|既婚|Casado|Marié|Verheiratet
Yemin et ve başla|Take the oath and begin|宣誓して開始|Jurar y empezar|Prêter serment et commencer|Schwören und beginnen
Kuşanılan silah|Equipped weapon|装備中の武器|Arma equipada|Arme équipée|Waffe
Cephanelik|Armory|武器庫|Arsenal|Armurerie|Waffenkammer
Komutanın:|Your commander:|指揮官:|Tu comandante:|Ton commandant :|Dein Kommandeur:
Komutan güveni|Commander's trust|指揮官の信頼|Confianza del comandante|Confiance du commandant|Vertrauen des Kommandeurs
Günün akışı|Today's schedule|本日の予定|Agenda del día|Programme du jour|Tagesablauf
Sabah: kahvaltı|Morning: breakfast|朝:朝食|Mañana: desayuno|Matin : petit-déjeuner|Morgens: Frühstück
Sıradaki ›|Next ›|次へ ›|Siguiente ›|Suivant ›|Weiter ›
Harekât|Operation|作戦|Operación|Opération|Einsatz
Akşam: birlik ve koğuş|Evening: unit and barracks|夜:部隊と兵舎|Tarde: unidad y barracón|Soir : unité et chambrée|Abends: Einheit und Stube
Bağlar ve moral harekâtı destekler.|Bonds and morale support the operation.|絆と士気が作戦を支える。|Los lazos y la moral apoyan la operación.|Les liens et le moral soutiennent l'opération.|Bindungen und Moral stärken den Einsatz.
Günü bitir|End the day|一日を終える|Terminar el día|Terminer la journée|Tag beenden
Gece raporu ve yeni gün.|Night report and a new day.|夜間報告と新しい一日。|Informe nocturno y nuevo día.|Rapport de nuit et nouveau jour.|Nachtbericht und neuer Tag.
Bugünkü harekât bonusun|Today's operation bonus|本日の作戦ボーナス|Bonificación de operación de hoy|Bonus d'opération du jour|Heutiger Einsatzbonus
Antrenman, harekât ve birlik işleri seni geliştirir. Her seviyede en zayıf dört yeteneğin +1,5 artar.|Training, operations and unit duties improve you. Each level raises your four weakest skills by +1.5.|訓練、作戦、部隊の任務があなたを成長させる。レベルごとに最も弱い4つの能力が+1.5上がる。|El entrenamiento, las operaciones y la unidad te mejoran. Cada nivel sube +1,5 tus cuatro habilidades más débiles.|Entraînement, opérations et unité te font progresser. Chaque niveau augmente de +1,5 tes quatre compétences les plus faibles.|Training, Einsätze und Dienst machen dich besser. Jede Stufe hebt deine vier schwächsten Fähigkeiten um +1,5.
Dönemin|Your era|現在の段階|Tu etapa|Ton époque|Deine Ära
Er ve erbaş|Enlisted|兵卒|Tropa|Militaires du rang|Mannschaften
Emirleri uygulayan asker.|A soldier who carries out orders.|命令を遂行する兵士。|Un soldado que cumple órdenes.|Un soldat qui exécute les ordres.|Ein Soldat, der Befehle ausführt.
Devlet makamları|State offices|国家の要職|Cargos de Estado|Fonctions d'État|Staatsämter
Mareşal olunca açılır|Unlocks at Marshal|元帥で解放|Se desbloquea como mariscal|Débloqué au grade de maréchal|Ab Marschall freigeschaltet
İstihbarat brifingi|Intelligence briefing|情報ブリーフィング|Informe de inteligencia|Briefing de renseignement|Lagebesprechung
SON DAKİKA|BREAKING|速報|ÚLTIMA HORA|DERNIÈRE MINUTE|EILMELDUNG
Haber kanalları ›|News channels ›|ニュースチャンネル ›|Canales de noticias ›|Chaînes d'info ›|Nachrichtenkanäle ›
Haftalık spor|Weekly workouts|週間トレーニング|Deporte semanal|Sport hebdomadaire|Wöchentlicher Sport
Paz|Sun|日曜|Dom|Dim|So
Pzt|Mon|月曜|Lun|Lun|Mo
Sal|Tue|火曜|Mar|Mar|Di
Çar|Wed|水曜|Mié|Mer|Mi
Per|Thu|木曜|Jue|Jeu|Do
Cum|Fri|金曜|Vie|Ven|Fr
Cmt|Sat|土曜|Sáb|Sam|Sa
Rütbe yolu|Rank path|階級の道|Camino de rangos|Parcours des grades|Rangweg
Şu anki rütben|Current rank|現在の階級|Rango actual|Grade actuel|Aktueller Rang
Sıradaki|Next|次の階級|Siguiente|Suivant|Nächster
Tecrübe|Experience|経験値|Experiencia|Expérience|Erfahrung
Rütbede gün|Days in rank|在級日数|Días en el rango|Jours au grade|Tage im Rang
Sağlık|Health|健康|Salud|Santé|Gesundheit
Ruh hali|Mood|気分|Ánimo|Moral|Stimmung
Yorgunluk|Fatigue|疲労|Fatiga|Fatigue|Müdigkeit
Beslenme|Nutrition|栄養|Nutrición|Nutrition|Ernährung
Kayıt defteri|Logbook|記録|Bitácora|Journal de bord|Logbuch
Karargâh|HQ|司令部|Cuartel|QG|Basis
Yaşam|Life|生活|Vida|Vie|Leben
Harita|Map|地図|Mapa|Carte|Karte
Profil|Profile|プロフィール|Perfil|Profil|Profil
Hikâye|Story|物語|Historia|Histoire|Geschichte
Eğitim merkezi|Training center|訓練センター|Centro de entrenamiento|Centre d'entraînement|Ausbildungszentrum
Her seferinde sor|Ask every time|毎回確認|Preguntar siempre|Demander à chaque fois|Jedes Mal fragen
Hep mini oyun|Always mini-game|常にミニゲーム|Siempre minijuego|Toujours mini-jeu|Immer Minispiel
Hep otomatik|Always automatic|常に自動|Siempre automático|Toujours automatique|Immer automatisch
Piyade|Infantry|歩兵|Infantería|Infanterie|Infanterie
Birliğinin silahları rütbene göre açılır. Kuşandığın piyade silahı atış isabetini ve harekât başarısını etkiler.|Your unit's weapons unlock with rank. Your equipped rifle affects accuracy and operation success.|武器は階級に応じて解放される。装備中の武器は命中率と作戦の成否に影響する。|Las armas se desbloquean según el rango. El arma equipada afecta a la puntería y al éxito de las operaciones.|Les armes se débloquent selon le grade. L'arme équipée influe sur la précision et la réussite des opérations.|Waffen werden mit dem Rang freigeschaltet. Die ausgerüstete Waffe beeinflusst Treffsicherheit und Einsatzerfolg.
Kuşanıldı|Equipped|装備中|Equipada|Équipée|Ausgerüstet
Kuşan|Equip|装備|Equipar|Équiper|Ausrüsten
Piyade tüfeği|Service rifle|小銃|Fusil de asalto|Fusil d'assaut|Sturmgewehr
Karabina|Carbine|カービン|Carabina|Carabine|Karabiner
Hafif makineli tüfek|Light machine gun|軽機関銃|Ametralladora ligera|Mitrailleuse légère|Leichtes Maschinengewehr
Nişancı tüfeği|Marksman rifle|選抜射手ライフル|Fusil de tirador|Fusil de précision|Zielfernrohrgewehr
Pompalı tüfek|Shotgun|ショットガン|Escopeta|Fusil à pompe|Schrotflinte
Tabanca|Pistol|拳銃|Pistola|Pistolet|Pistole
Bombaatar|Grenade launcher|グレネードランチャー|Lanzagranadas|Lance-grenades|Granatwerfer
Tanksavar füzesi|Anti-tank missile|対戦車ミサイル|Misil antitanque|Missile antichar|Panzerabwehrrakete
Havan|Mortar|迫撃砲|Mortero|Mortier|Mörser
Keskin nişancı tüfeği|Sniper rifle|狙撃銃|Fusil de francotirador|Fusil de sniper|Scharfschützengewehr
Dolanan mühimmat (kamikaze İHA)|Loitering munition (kamikaze drone)|徘徊型弾薬(自爆ドローン)|Munición merodeadora (dron kamikaze)|Munition rôdeuse (drone kamikaze)|Loitering Munition (Kamikazedrohne)
Zırhlı muharebe aracı|Armored fighting vehicle|装甲戦闘車両|Vehículo blindado de combate|Véhicule blindé de combat|Gepanzertes Kampffahrzeug
Silahlı İHA|Armed drone|武装ドローン|Dron armado|Drone armé|Bewaffnete Drohne
Taarruz helikopteri|Attack helicopter|攻撃ヘリコプター|Helicóptero de ataque|Hélicoptère d'attaque|Kampfhubschrauber
Hava savunma sistemi|Air defense system|防空システム|Sistema de defensa aérea|Système de défense aérienne|Luftverteidigungssystem
Seyir füzesi|Cruise missile|巡航ミサイル|Misil de crucero|Missile de croisière|Marschflugkörper
Elektronik harp sistemi|Electronic warfare system|電子戦システム|Sistema de guerra electrónica|Système de guerre électronique|System für elektronische Kampfführung
Taktik balistik füze|Tactical ballistic missile|戦術弾道ミサイル|Misil balístico táctico|Missile balistique tactique|Taktische ballistische Rakete
Ana muharebe tankı|Main battle tank|主力戦車|Carro de combate|Char de combat|Kampfpanzer
Obüs / roket sistemi|Howitzer / rocket system|榴弾砲 / ロケットシステム|Obús / sistema de cohetes|Obusier / lance-roquettes|Haubitze / Raketenwerfer
Savaş gemisi|Warship|軍艦|Buque de guerra|Navire de guerre|Kriegsschiff
Savaş uçağı|Fighter jet|戦闘機|Avión de combate|Avion de chasse|Kampfjet
Denizaltı|Submarine|潜水艦|Submarino|Sous-marin|U-Boot
İsabet|Accuracy|命中|Precisión|Précision|Präzision
Güç|Strength|威力|Fuerza|Force|Kraft
Menzil|Range|射程|Alcance|Portée|Reichweite
Askerî eğitim|Military training|軍事訓練|Instrucción militar|Instruction militaire|Militärausbildung
Atış poligonu|Shooting range|射撃場|Campo de tiro|Stand de tir|Schießstand
Harp oyunu ve harp tarihi|War game and military history|兵棋演習と戦史|Juego de guerra e historia militar|Jeu de guerre et histoire militaire|Kriegsspiel und Kriegsgeschichte
Tim liderliği|Team leadership|分隊指揮|Liderazgo de equipo|Commandement d'équipe|Truppführung
Topografik arazi okuma|Land navigation|地形判読|Navegación terrestre|Lecture de terrain|Geländeorientierung
Kondisyon|Conditioning|体力強化|Acondicionamiento|Condition physique|Kondition
Koşu · 10 km|Run · 10 km|ランニング · 10 km|Carrera · 10 km|Course · 10 km|Lauf · 10 km
Yüzme|Swimming|水泳|Natación|Natation|Schwimmen
Ağırlık|Weights|ウェイト|Pesas|Musculation|Gewichte
Kalisteni|Calisthenics|自重トレーニング|Calistenia|Callisthénie|Calisthenics
Yüklü yürüyüş · 25 kg|Ruck march · 25 kg|重装行軍 · 25 kg|Marcha con carga · 25 kg|Marche chargée · 25 kg|Gepäckmarsch · 25 kg
Engel parkuru|Obstacle course|障害物コース|Pista de obstáculos|Parcours d'obstacles|Hindernisbahn
Zihin|Mind|精神|Mente|Esprit|Geist
Koğuş|Barracks|兵舎|Barracón|Chambrée|Stube
Kadro|Staff|幕僚|Plantilla|État-major|Stab
Sosyal|Social|交流|Social|Social|Soziales
Varlık|Assets|資産|Bienes|Patrimoine|Besitz
İlişki|Relationship|恋愛|Relación|Relation|Beziehung
Hırs|Ambition|野心|Ambición|Ambition|Ehrgeiz
Yas süreci|Grief|喪の過程|Duelo|Deuil|Trauer
İntikam ateşi|Thirst for revenge|復讐心|Sed de venganza|Soif de vengeance|Rachedurst
Uyku düzeni|Sleep schedule|睡眠|Horario de sueño|Sommeil|Schlafrhythmus
Bu gece|Tonight|今夜|Esta noche|Cette nuit|Heute Nacht
Psikoloji|Psychology|心理|Psicología|Psychologie|Psychologie
Psikolojik danışman|Counselor|カウンセラー|Psicólogo|Psychologue|Psychologe
Nefes ve meditasyon|Breathing and meditation|呼吸と瞑想|Respiración y meditación|Respiration et méditation|Atmung und Meditation
Kaybettiklerini an|Remember the fallen|失った人を偲ぶ|Recordar a los caídos|Se souvenir des disparus|Der Gefallenen gedenken
Akrabanı ara|Call a relative|親族に電話する|Llamar a un familiar|Appeler un proche|Verwandte anrufen
Dinlen|Rest|休む|Descansar|Se reposer|Ausruhen
Dinlen ve günü bitir|Rest and end the day|休んで一日を終える|Descansar y terminar el día|Se reposer et finir la journée|Ausruhen und Tag beenden
Günlük|Diary|日記|Diario|Journal|Tagebuch
Günlüğe yaz|Write in diary|日記を書く|Escribir en el diario|Écrire dans le journal|Ins Tagebuch schreiben
Bugün neler hissettin?|How did you feel today?|今日はどう感じた?|¿Cómo te sentiste hoy?|Qu'as-tu ressenti aujourd'hui ?|Wie hast du dich heute gefühlt?
Günlük beslenme|Daily nutrition|一日の栄養|Nutrición diaria|Nutrition du jour|Tägliche Ernährung
gün puanı|day score|日間スコア|puntuación del día|score du jour|Tageswert
Kahvaltı|Breakfast|朝食|Desayuno|Petit-déjeuner|Frühstück
Öğle yemeği|Lunch|昼食|Almuerzo|Déjeuner|Mittagessen
Akşam yemeği|Dinner|夕食|Cena|Dîner|Abendessen
Kahvaltıyı atladım|Skipped breakfast|朝食を抜いた|Me salté el desayuno|Petit-déjeuner sauté|Frühstück ausgelassen
Öğün yok|No meal|食事なし|Sin comida|Pas de repas|Keine Mahlzeit
Koğuş havası|Barracks mood|兵舎の雰囲気|Ambiente del barracón|Ambiance de la chambrée|Stimmung in der Stube
Konuş|Talk|話す|Hablar|Parler|Reden
Bağ|Bond|絆|Vínculo|Lien|Bindung
Dış dünya|Outside world|外の世界|Mundo exterior|Monde extérieur|Außenwelt
Arkadaşlar|Friends|友人|Amigos|Amis|Freunde
Kışla hayatı|Barracks life|兵舎生活|Vida en el cuartel|Vie à la caserne|Kasernenleben
Kitap oku|Read a book|読書|Leer un libro|Lire un livre|Ein Buch lesen
Müzik ve gitar|Music and guitar|音楽とギター|Música y guitarra|Musique et guitare|Musik und Gitarre
Maç izle|Watch a match|試合観戦|Ver un partido|Regarder un match|Ein Spiel schauen
Gönüllü faaliyet|Volunteering|ボランティア|Voluntariado|Bénévolat|Ehrenamt
Cüzdan|Wallet|財布|Cartera|Portefeuille|Geldbörse
Statü|Status|ステータス|Estatus|Statut|Status
Haftalık maaş|Weekly salary|週給|Salario semanal|Solde hebdomadaire|Wochensold
Haftalık gider|Weekly costs|週間支出|Gastos semanales|Dépenses hebdo|Wöchentliche Kosten
Haftalık net|Weekly net|週間収支|Neto semanal|Net hebdo|Netto pro Woche
Varlık değeri|Asset value|資産価値|Valor de bienes|Valeur du patrimoine|Vermögenswert
Satın alımlar her gün yapılabilir. Tatile yalnızca izin gününde çıkılır.|You can buy every day. Vacations only on leave days.|購入は毎日可能。旅行は休暇日のみ。|Puedes comprar cada día. Las vacaciones, solo en días de permiso.|Achats possibles chaque jour. Vacances seulement les jours de permission.|Kaufen ist täglich möglich. Urlaub nur an Urlaubstagen.
Ev|Home|住まい|Casa|Logement|Zuhause
Giyim|Clothing|衣類|Ropa|Vêtements|Kleidung
Teknoloji|Technology|テクノロジー|Tecnología|Technologie|Technik
Hobi ve spor|Hobbies and sports|趣味とスポーツ|Aficiones y deporte|Loisirs et sport|Hobby und Sport
Ev eşyası|Furniture|家具|Hogar|Maison|Einrichtung
Araç|Vehicle|車両|Vehículo|Véhicule|Fahrzeug
Evcil hayvan|Pet|ペット|Mascota|Animal|Haustier
Tatil|Vacation|旅行|Vacaciones|Vacances|Urlaub
Yatırım|Investment|投資|Inversión|Investissement|Investition
Senin|Yours|所有中|Tuyo|À toi|Deins
Ücretsiz|Free|無料|Gratis|Gratuit|Kostenlos
Taşın|Move in|引っ越す|Mudarse|Emménager|Einziehen
Hepsini sat|Sell all|すべて売却|Vender todo|Tout vendre|Alles verkaufen
Altın|Gold|金(ゴールド)|Oro|Or|Gold
Vadeli mevduat|Term deposit|定期預金|Depósito a plazo|Dépôt à terme|Festgeld
Devlet|State|国家|Estado|État|Staat
Birlik|Unit|部隊|Unidad|Unité|Einheit
Bölge|Region|地域|Región|Région|Region
Karşı taraf|Enemy|敵勢力|Enemigo|Ennemi|Gegner
Müttefik|Ally|同盟国|Aliado|Allié|Verbündeter
Silahın|Your weapon|武器|Tu arma|Ton arme|Deine Waffe
Hazırlık|Preparation|準備|Preparación|Préparation|Vorbereitung
Bugünkü hazırlığın|Today's readiness|本日の準備|Preparación de hoy|Préparation du jour|Heutige Bereitschaft
Tahmini düşman|Estimated enemy|推定敵兵力|Enemigo estimado|Ennemi estimé|Geschätzter Feind
Zırhlı araç|Armored vehicles|装甲車両|Vehículos blindados|Blindés|Panzerfahrzeuge
Kendi kuvvetin|Your force|自軍兵力|Tus fuerzas|Tes forces|Eigene Kräfte
Arazi|Terrain|地形|Terreno|Terrain|Gelände
Birlik hazırlığı|Unit readiness|部隊の練度|Preparación de la unidad|Préparation de l'unité|Einsatzbereitschaft
Görev süresi|Duration|所要時間|Duración|Durée|Dauer
Kuvvet tertibi|Force package|部隊編成|Composición de fuerzas|Dispositif|Kräfteansatz
Destek|Support|支援|Apoyo|Appui|Unterstützung
Destek yok|No support|支援なし|Sin apoyo|Sans appui|Keine Unterstützung
Sürpriz korunur.|Surprise is preserved.|奇襲効果を維持。|Se conserva la sorpresa.|L'effet de surprise est préservé.|Der Überraschungseffekt bleibt.
Hız|Speed|速度|Velocidad|Vitesse|Tempo
Koruma|Protection|防護|Protección|Protection|Schutz
Ateş gücü|Firepower|火力|Potencia de fuego|Puissance de feu|Feuerkraft
Gizlilik|Stealth|隠密性|Sigilo|Discrétion|Tarnung
Kuvvet|Strength|戦力|Fuerzas|Effectifs|Kampfkraft
Mühimmat|Ammo|弾薬|Munición|Munitions|Munition
İnisiyatif|Initiative|主導権|Iniciativa|Initiative|Initiative
Ateş|Fire|火力|Fuego|Feu|Feuer
Hassasiyet|Precision|精度|Precisión|Précision|Präzision
Sürpriz|Surprise|奇襲|Sorpresa|Surprise|Überraschung
Telsiz|Radio|無線|Radio|Radio|Funk
● CANLI|● LIVE|● ライブ|● EN VIVO|● EN DIRECT|● LIVE
Emrin nedir?|What are your orders?|命令は?|¿Cuáles son tus órdenes?|Quels sont tes ordres ?|Wie lautet dein Befehl?
Kararın yeteneklerine, yorgunluğuna, ruh haline, silahına ve birliğinin hazırlığına göre icra edilir.|Your decision plays out according to your skills, fatigue, mood, weapon and unit readiness.|決断の結果は能力、疲労、気分、武器、部隊の練度で決まる。|Tu decisión depende de tus habilidades, fatiga, ánimo, arma y preparación de la unidad.|Ta décision dépend de tes compétences, ta fatigue, ton moral, ton arme et la préparation de l'unité.|Deine Entscheidung hängt von Fähigkeiten, Müdigkeit, Stimmung, Waffe und Einsatzbereitschaft ab.
Karar süresi|Time to decide|決断までの時間|Tiempo para decidir|Temps de décision|Entscheidungszeit
Komuta sorumluluğu|Command responsibility|指揮責任|Responsabilidad de mando|Responsabilité de commandement|Führungsverantwortung
Komuta yetkileri|Command powers|指揮権限|Poderes de mando|Pouvoirs de commandement|Befehlsbefugnisse
ÖNERİLEN|RECOMMENDED|推奨|RECOMENDADO|RECOMMANDÉ|EMPFOHLEN
İntikal|Movement|移動|Desplazamiento|Mouvement|Verlegung
Yaklaşma|Approach|接近|Aproximación|Approche|Annäherung
Beklenmedik durum|Unexpected event|不測の事態|Imprevisto|Imprévu|Unerwartete Lage
Kritik an|Critical moment|決定的瞬間|Momento crítico|Moment critique|Kritischer Moment
Hedefte|On target|目標地点|En el objetivo|Sur l'objectif|Am Ziel
Tahliye|Extraction|撤収|Extracción|Exfiltration|Exfiltration
Dönüş|Return|帰還|Regreso|Retour|Rückkehr
Konsolidasyon|Consolidation|確保|Consolidación|Consolidation|Konsolidierung
Komuta kararı|Command decision|指揮判断|Decisión de mando|Décision de commandement|Führungsentscheidung
Karargâh kararı|HQ decision|司令部判断|Decisión del cuartel general|Décision d'état-major|Stabsentscheidung
Stratejik karar|Strategic decision|戦略判断|Decisión estratégica|Décision stratégique|Strategische Entscheidung
Temkinli|Cautious|慎重|Prudente|Prudent|Vorsichtig
Riskli|Risky|危険|Arriesgado|Risqué|Riskant
Hızlı|Fast|迅速|Rápido|Rapide|Schnell
Saldırgan|Aggressive|攻撃的|Agresivo|Agressif|Aggressiv
Başarılı|Successful|成功|Exitosas|Réussies|Erfolgreich
Şehit|Fallen|戦死|Caídos|Tombés|Gefallene
Moral|Morale|士気|Moral|Moral|Moral
Moral toplantısı|Morale meeting|士気向上ミーティング|Reunión de moral|Réunion de moral|Moralbesprechung
Birlik tatbikatı|Unit drill|部隊演習|Ejercicio de la unidad|Exercice d'unité|Einheitsübung
Tim arkadaşların|Your teammates|戦友たち|Tus compañeros|Tes équipiers|Deine Kameraden
Komuta yolu|Chain of command|指揮の道|Cadena de mando|Chaîne de commandement|Führungsweg
Tim|Fireteam|分隊|Equipo|Équipe|Trupp
Takım|Platoon|小隊|Pelotón|Section|Zug
Bölük|Company|中隊|Compañía|Compagnie|Kompanie
Tabur|Battalion|大隊|Batallón|Bataillon|Bataillon
Alay|Regiment|連隊|Regimiento|Régiment|Regiment
Tugay|Brigade|旅団|Brigada|Brigade|Brigade
Tümen|Division|師団|División|Division|Division
Kolordu|Corps|軍団|Cuerpo de ejército|Corps d'armée|Korps
Ordu|Army|軍|Ejército|Armée|Armee
Kuvvet Komutanlığı|Service Command|軍種司令部|Mando de la fuerza|Commandement de l'armée|Teilstreitkraftkommando
Strateji|Strategy|戦略|Estrategia|Stratégie|Strategie
Diplomasi|Diplomacy|外交|Diplomacia|Diplomatie|Diplomatie
Haberler|News|ニュース|Noticias|Actualités|Nachrichten
Bölgeler|Regions|地域|Regiones|Régions|Regionen
Strateji haritası|Strategic map|戦略地図|Mapa estratégico|Carte stratégique|Strategische Karte
Kurgusal senaryo|Fictional scenario|架空のシナリオ|Escenario ficticio|Scénario fictif|Fiktives Szenario
Komuta yetkin|Your command authority|指揮権限|Tu autoridad de mando|Ton autorité|Deine Befehlsgewalt
Çatışmalar ve ittifaklar|Conflicts and alliances|紛争と同盟|Conflictos y alianzas|Conflits et alliances|Konflikte und Bündnisse
İttifak blokları|Alliance blocs|同盟ブロック|Bloques de alianzas|Blocs d'alliances|Bündnisblöcke
Ülkeler|Countries|国々|Países|Pays|Länder
Güç · ilişki|Power · relations|国力 · 関係|Poder · relaciones|Puissance · relations|Stärke · Beziehungen
(sen)|(you)|(あなた)|(tú)|(toi)|(du)
müttefik|ally|同盟|aliado|allié|verbündet
Dünya haberleri|World news|世界のニュース|Noticias mundiales|Actualités mondiales|Weltnachrichten
Yetenekler|Skills|能力|Habilidades|Compétences|Fähigkeiten
Dayanıklılık|Endurance|持久力|Resistencia|Endurance|Ausdauer
Yakın dövüş|Close combat|近接戦闘|Combate cuerpo a cuerpo|Corps à corps|Nahkampf
Nişancılık|Marksmanship|射撃|Puntería|Tir|Schießen
Liderlik|Leadership|統率力|Liderazgo|Leadership|Führung
Disiplin|Discipline|規律|Disciplina|Discipline|Disziplin
Spor geçmişi|Sports background|スポーツ歴|Historial deportivo|Parcours sportif|Sportlicher Hintergrund
Acemi|Novice|初心者|Novato|Novice|Anfänger
Hikâyen|Your story|あなたの物語|Tu historia|Ton histoire|Deine Geschichte
Seçmeli birlikler|Selection units|選抜部隊|Unidades de selección|Unités d'élite|Eliteeinheiten
Seçmeye gir|Apply for selection|選抜試験を受ける|Presentarse a la selección|Passer la sélection|Zur Auswahl antreten
Ana menü|Main menu|メインメニュー|Menú principal|Menu principal|Hauptmenü
Satın al|Buy|購入|Comprar|Acheter|Kaufen
Sahiplen|Adopt|迎える|Adoptar|Adopter|Adoptieren
Rezervasyon yap|Book|予約する|Reservar|Réserver|Buchen
Aracını sat|Sell your vehicle|車を売る|Vender tu vehículo|Vendre ton véhicule|Fahrzeug verkaufen
Halk onayı|Public approval|国民の支持|Aprobación popular|Approbation publique|Zustimmung
Ekonomi|Economy|経済|Economía|Économie|Wirtschaft
İç güvenlik|Internal security|国内治安|Seguridad interior|Sécurité intérieure|Innere Sicherheit
Ordu güveni|Army's trust|軍の信頼|Confianza del ejército|Confiance de l'armée|Vertrauen der Armee
Günün dosyaları|Today's files|本日の案件|Expedientes del día|Dossiers du jour|Akten des Tages
Halka sesleniş|Address to the nation|国民への演説|Discurso a la nación|Discours à la nation|Ansprache an die Nation
Canlı yayına çık|Go live|生放送に出る|Salir en directo|Passer en direct|Live gehen
Makam yolu|Path of office|官職への道|Camino del cargo|Parcours des fonctions|Ämterweg
Basın sorularını al|Take press questions|記者の質問を受ける|Responder a la prensa|Répondre à la presse|Fragen der Presse beantworten
Kesimlerin tepkisi|Reaction by group|層別の反応|Reacción por sectores|Réaction par groupe|Reaktionen der Gruppen
Gençler|Youth|若者|Jóvenes|Jeunes|Jugend
Emekliler|Retirees|年金受給者|Jubilados|Retraités|Rentner
İş dünyası|Business|経済界|Empresarios|Monde des affaires|Wirtschaft
Güvenlik çevreleri|Security circles|治安関係者|Círculos de seguridad|Milieux sécuritaires|Sicherheitskreise
Muhalefet|Opposition|野党|Oposición|Opposition|Opposition
Durgun|Calm|平静|Tranquilo|Calme|Ruhig
Normal|Normal|普通|Normal|Normal|Normal
Kilitli|Locked|ロック中|Bloqueado|Verrouillé|Gesperrt
Kullanıldı|Used|使用済み|Usado|Utilisé|Benutzt
Selam ver|Salute|敬礼|Saludar|Saluer|Salutieren
Terfi töreni|Promotion ceremony|昇進式|Ceremonia de ascenso|Cérémonie de promotion|Beförderungszeremonie
Başarısız|Failed|失敗|Fallida|Échec|Gescheitert
Kısmi başarı|Partial success|部分的成功|Éxito parcial|Succès partiel|Teilerfolg
Görev başarılı|Mission accomplished|任務成功|Misión cumplida|Mission accomplie|Auftrag erfüllt
Bugünkü harekât tamamlandı|Today's operation complete|本日の作戦は完了|Operación de hoy completada|Opération du jour terminée|Heutiger Einsatz abgeschlossen
Birliğine git|Go to your unit|部隊へ|Ir a tu unidad|Aller à ton unité|Zur Einheit
Bugün izinlisin|You're on leave today|今日は休暇|Hoy tienes permiso|Tu es en permission aujourd'hui|Heute hast du frei
İzin belgesi|Leave pass|休暇証|Pase de permiso|Titre de permission|Urlaubsschein
Sevgili vatandaşlarım,|My dear citizens,|親愛なる国民の皆さん、|Queridos ciudadanos:|Mes chers concitoyens,|Liebe Mitbürgerinnen und Mitbürger,
Örnek: O gece nöbetten eve döndüğümde...|Example: That night, coming home from guard duty...|例:あの夜、当直から帰宅すると…|Ejemplo: Aquella noche, al volver de la guardia...|Exemple : Cette nuit-là, en rentrant de garde...|Beispiel: In jener Nacht, als ich von der Wache heimkam...
Örn. Kaan Demirtaş|e.g. Alex Carter|例:佐藤 健|p. ej. Álex Romero|ex. Alex Martin|z. B. Alex Becker
Durum|Situation|状況|Situación|Situation|Lage
Komuta puanı|Command points|指揮ポイント|Puntos de mando|Points de commandement|Befehlspunkte
Tim yetkisi|Fireteam authority|分隊権限|Autoridad de equipo|Autorité d'équipe|Truppbefugnis
Astsubay yetkisi|NCO authority|下士官権限|Autoridad de suboficial|Autorité de sous-officier|Unteroffiziersbefugnis
Bölük komutanı yetkisi|Company commander authority|中隊長権限|Autoridad de jefe de compañía|Autorité de commandant de compagnie|Kompaniechef-Befugnis
Karargâh yetkisi|HQ authority|司令部権限|Autoridad de cuartel general|Autorité d'état-major|Stabsbefugnis
General yetkisi|General's authority|将官権限|Autoridad de general|Autorité de général|Generalsbefugnis
Ne iyi ne kötü. Gün nasıl geçerse öyle.|Neither good nor bad. Depends on how the day goes.|良くも悪くもない。一日の過ごし方次第。|Ni bien ni mal. Depende de cómo vaya el día.|Ni bien ni mal. Ça dépend de la journée.|Weder gut noch schlecht. Kommt auf den Tag an.
Dengeli uyku: normal toparlanma.|Balanced sleep: normal recovery.|バランスの良い睡眠:通常の回復。|Sueño equilibrado: recuperación normal.|Sommeil équilibré : récupération normale.|Ausgewogener Schlaf: normale Erholung.
İyi beslenme harekâtta +%2.|Good nutrition: +2% in operations.|良い栄養:作戦で+2%。|Buena nutrición: +2 % en operaciones.|Bonne nutrition : +2 % en opération.|Gute Ernährung: +2 % im Einsatz.
Her seans harekâtta +%2,5 (en çok 2).|Each session: +2.5% in operations (max 2).|1回ごとに作戦+2.5%(最大2回)。|Cada sesión: +2,5 % en operaciones (máx. 2).|Chaque séance : +2,5 % en opération (max 2).|Jede Einheit: +2,5 % im Einsatz (max. 2).
Rol|Role|役割|Rol|Rôle|Rolle
Karar|Decision|決断|Decisión|Décision|Entscheidung
Tecrübe +|Experience +|経験値 +|Experiencia +|Expérience +|Erfahrung +
Kara Kuvvetleri|Land Forces|陸軍|Fuerzas Terrestres|Armée de terre|Landstreitkräfte
Komando|Commando|コマンド|Comando|Commando|Kommando
Topçu|Artillery|砲兵|Artillería|Artillerie|Artillerie
Zırhlı|Armor|機甲|Blindados|Blindé|Panzertruppe
Deniz Kuvvetleri|Naval Forces|海軍|Armada|Marine nationale|Marine
Hava Kuvvetleri|Air Force|空軍|Fuerza Aérea|Armée de l'air|Luftwaffe
Jandarma|Gendarmerie|憲兵隊|Gendarmería|Gendarmerie|Gendarmerie
Sahil Güvenlik|Coast Guard|沿岸警備隊|Guardia Costera|Garde-côtes|Küstenwache
Özel Kuvvetler|Special Forces|特殊部隊|Fuerzas Especiales|Forces spéciales|Spezialkräfte
Kuvvet ve birlik|Service and unit|軍種と部隊|Fuerza y unidad|Armée et unité|Teilstreitkraft und Einheit
Günün akışı · |Today's schedule · |本日の予定 · |Agenda del día · |Programme du jour · |Tagesablauf · 
Sıradaki rütbe|Next rank|次の階級|Siguiente rango|Grade suivant|Nächster Rang
Eksik|Missing|不足|Falta|Manque|Fehlt
İzin|Leave|休暇|Permiso|Permission|Urlaub
maaş|pay|給料|sueldo|solde|Sold
Kalan komuta puanı|Command points left|残り指揮ポイント|Puntos de mando restantes|Points de commandement restants|Verbleibende Befehlspunkte
Komuta yetenekleri · harekât başına 1 kez|Command abilities · once per operation|指揮能力 · 作戦ごとに1回|Habilidades de mando · una vez por operación|Capacités de commandement · une fois par opération|Führungsfähigkeiten · einmal pro Einsatz
Bu oyun tamamen kurgusaldır. Oyuncunun seçtiği ülke dışındaki tüm devletler, ittifaklar, şehirler, kişiler, olaylar ve silah sistemleri hayal ürünüdür; gerçek kurum ve kişilerle benzerlik tesadüftür.|This game is entirely fictional. Apart from the country you choose, all states, alliances, cities, people, events and weapon systems are imaginary; any resemblance to real organizations or persons is coincidental.|本作は完全なフィクションです。プレイヤーが選んだ国以外の国家、同盟、都市、人物、出来事、兵器はすべて架空のものであり、実在の団体や人物とは関係ありません。|Este juego es totalmente ficticio. Salvo el país que elijas, todos los Estados, alianzas, ciudades, personas, hechos y sistemas de armas son imaginarios; cualquier parecido con organizaciones o personas reales es pura coincidencia.|Ce jeu est entièrement fictif. Hormis le pays que tu choisis, tous les États, alliances, villes, personnes, événements et systèmes d'armes sont imaginaires ; toute ressemblance avec des organisations ou des personnes réelles est fortuite.|Dieses Spiel ist frei erfunden. Abgesehen vom gewählten Land sind alle Staaten, Bündnisse, Städte, Personen, Ereignisse und Waffensysteme fiktiv; Ähnlichkeiten mit realen Organisationen oder Personen sind zufällig.
Kurgu uyarısı|Fiction notice|フィクションに関するお知らせ|Aviso de ficción|Avertissement de fiction|Hinweis zur Fiktion
Bilgilendirme|Notice|お知らせ|Aviso|Information|Hinweis
Anladım|Understood|了解|Entendido|Compris|Verstanden
Senaryo başladı. Oyuncunun ülkesi dışındaki tüm devletler, ittifaklar ve olaylar kurgusaldır.|The scenario has begun. Except for your country, all states, alliances and events are fictional.|シナリオ開始。プレイヤーの国以外の国家、同盟、出来事はすべて架空です。|Comienza el escenario. Salvo tu país, todos los Estados, alianzas y hechos son ficticios.|Le scénario commence. Hormis ton pays, tous les États, alliances et événements sont fictifs.|Das Szenario beginnt. Außer deinem Land sind alle Staaten, Bündnisse und Ereignisse fiktiv.
BÜYÜK|GRAND|大いなる|EL GRAN|LE GRAND|DER GROSSE
YEMİN|OATH|誓い|JURAMENTO|SERMENT|EID
BÜYÜK YEMİN|GRAND OATH|大いなる誓い|EL GRAN JURAMENTO|LE GRAND SERMENT|DER GROSSE EID
Büyük Yemin|Grand Oath|大いなる誓い|El Gran Juramento|Le Grand Serment|Der Große Eid
TAMAMLANDI|FULFILLED|成就|CUMPLIDO|ACCOMPLI|ERFÜLLT
CANLI GELİŞME|LIVE UPDATE|最新の状況|ÚLTIMA HORA|EN DIRECT|LIVE-LAGE
ACİL KARAR|URGENT DECISION|緊急判断|DECISIÓN URGENTE|DÉCISION URGENTE|DRINGENDE ENTSCHEIDUNG
SIRADAKİ RÜTBE|NEXT RANK|次の階級|SIGUIENTE RANGO|GRADE SUIVANT|NÄCHSTER RANG
Terfi bu gece!|Promotion tonight!|今夜昇進!|¡Ascenso esta noche!|Promotion ce soir !|Beförderung heute Nacht!
Şartları tamamla|Meet the requirements|条件を満たそう|Cumple los requisitos|Remplis les conditions|Erfülle die Bedingungen
Rütben nasıl ilerler?|How does your rank progress?|階級の上げ方|¿Cómo asciendes?|Comment progresse ton grade ?|Wie steigt dein Rang?
Rütben, harekât başarın ve gün içindeki görevlerini yerine getirmenle eşit ölçüde ilerler. Başarılı harekâtlar tecrübe ve komutan güveni kazandırır; antrenman, düzenli beslenme ve birlik görevleri yeteneklerini ve hazırlığını artırır. Tüm şartlar dolduğunda terfin o gecenin sonunda gerçekleşir.|Your rank advances equally through operation success and completing your daily duties. Successful operations earn experience and your commander's trust; training, regular meals and unit duties raise your skills and readiness. Once every requirement is met, you are promoted at the end of that night.|階級は作戦の成功と日々の任務の達成によって均等に上がります。作戦に成功すると経験値と指揮官の信頼が得られ、訓練・規則正しい食事・部隊任務で能力と練度が上がります。すべての条件を満たすと、その夜の終わりに昇進します。|Tu rango avanza por igual con el éxito en las operaciones y el cumplimiento de tus tareas diarias. Las operaciones exitosas dan experiencia y confianza del comandante; el entrenamiento, las comidas regulares y las tareas de la unidad mejoran tus habilidades y preparación. Cuando cumples todos los requisitos, asciendes al final de esa noche.|Ton grade progresse à parts égales grâce au succès des opérations et à l'accomplissement de tes tâches quotidiennes. Les opérations réussies apportent expérience et confiance du commandant ; l'entraînement, des repas réguliers et les tâches d'unité augmentent tes compétences et ta préparation. Quand toutes les conditions sont remplies, tu es promu à la fin de la nuit.|Dein Rang steigt gleichermaßen durch Einsatzerfolge und erfüllte Tagesaufgaben. Erfolgreiche Einsätze bringen Erfahrung und das Vertrauen deines Kommandeurs; Training, regelmäßige Mahlzeiten und Einheitsdienste steigern Fähigkeiten und Bereitschaft. Sind alle Bedingungen erfüllt, wirst du am Ende dieser Nacht befördert.
Başarılı harekât ve görevler|Successful operations and duties|作戦と任務の成功|Operaciones y tareas exitosas|Opérations et tâches réussies|Erfolgreiche Einsätze und Aufgaben
Her gün kendiliğinden ilerler|Advances automatically each day|毎日自動で進む|Avanza solo cada día|Progresse chaque jour|Steigt jeden Tag automatisch
Harekât başarısı ve disiplin|Operation success and discipline|作戦の成功と規律|Éxito en operaciones y disciplina|Succès des opérations et discipline|Einsatzerfolg und Disziplin
Savaşta komuta zaferi|Command victory in war|戦争での指揮勝利|Victoria de mando en guerra|Victoire de commandement en guerre|Führungssieg im Krieg
Antrenman ve görevlerle gelişir|Improves with training and duties|訓練と任務で伸びる|Mejora con entrenamiento y tareas|Progresse avec l'entraînement et les tâches|Wächst durch Training und Aufgaben
⚔️ Harekât başarısı → Tecrübe + Güven|⚔️ Operation success → Experience + Trust|⚔️ 作戦の成功 → 経験値 + 信頼|⚔️ Éxito en operaciones → Experiencia + Confianza|⚔️ Succès d'opération → Expérience + Confiance|⚔️ Einsatzerfolg → Erfahrung + Vertrauen
📋 Günlük görevler → Yetenek + Hazırlık|📋 Daily duties → Skills + Readiness|📋 日々の任務 → 能力 + 練度|📋 Tareas diarias → Habilidades + Preparación|📋 Tâches quotidiennes → Compétences + Préparation|📋 Tagesaufgaben → Fähigkeiten + Bereitschaft
`;
const I18N={};I18N_SRC.trim().split('\n').forEach(l=>{const c=l.split('|');if(c.length===6)I18N[c[0]]=c});
const MON=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
const MONL={en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],ja:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],es:['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],fr:['janv','févr','mars','avr','mai','juin','juil','août','sept','oct','nov','déc'],de:['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']};
/* sayılı kalıplar */
const I18P=[
 [/^En erken (\d+) gün sonra$/,['Earliest in $1 days','最短で$1日後','Como pronto en $1 días','Au plus tôt dans $1 jours','Frühestens in $1 Tagen']],
 [/^(\d+) seçenek · birini seç$/,['$1 options · pick one','$1つの選択肢 · 1つ選ぶ','$1 opciones · elige una','$1 options · choisis-en une','$1 Optionen · wähle eine']],
 [/^Gün (\d+)$/,['Day $1','$1日目','Día $1','Jour $1','Tag $1']],
 [/^G(\d+)$/,['D$1','D$1','D$1','J$1','T$1']],
 [/^(\d+) eylem hakkı$/,['$1 actions','行動 $1回','$1 acciones','$1 actions','$1 Aktionen']],
 [/^(\d+) eylem$/,['$1 action(s)','行動 $1回','$1 acción(es)','$1 action(s)','$1 Aktion(en)']],
 [/^Aşama (\d+)\/(\d+)$/,['Phase $1/$2','フェーズ $1/$2','Fase $1/$2','Phase $1/$2','Phase $1/$2']],
 [/^(\d+) aşama$/,['$1 phases','$1フェーズ','$1 fases','$1 phases','$1 Phasen']],
 [/^(\d+) kişi$/,['$1 people','$1人','$1 personas','$1 personnes','$1 Personen']],
 [/^(\d+) gün$/,['$1 day(s)','$1日','$1 día(s)','$1 jour(s)','$1 Tag(e)']],
 [/^(\d+) saat$/,['$1 hours','$1時間','$1 horas','$1 heures','$1 Stunden']],
 [/^~?([\d.]+) personel$/,['~$1 personnel','約$1人','~$1 efectivos','~$1 hommes','~$1 Soldaten']],
 [/^(\d+) yaş$/,['$1 years old','$1歳','$1 años','$1 ans','$1 Jahre']],
 [/^Asker seviyesi (\d+)$/,['Soldier level $1','兵士レベル $1','Nivel de soldado $1','Niveau de soldat $1','Soldatenstufe $1']],
 [/^≈ ([\d,]+) haftalık maaş$/,['≈ $1 weeks of pay','≈ 週給 $1週分','≈ $1 semanas de sueldo','≈ $1 semaines de solde','≈ $1 Wochensold']],
 [/^Sonraki maaş (\d+) gün sonra$/,['Next pay in $1 days','次の給料まで$1日','Próximo sueldo en $1 días','Prochaine solde dans $1 jours','Nächster Sold in $1 Tagen']],
 [/^(\d+) \/ 3 gün$/,['$1 / 3 days','$1 / 3 日','$1 / 3 días','$1 / 3 jours','$1 / 3 Tage']]
];
let LANG=(()=>{try{const s=localStorage.getItem('by-lang');if(s&&LIDX[s]!=null)return s}catch(e){}const n=(navigator.language||'tr').slice(0,2).toLowerCase();return LIDX[n]!=null?n:'tr'})();
function trS(s){if(LANG==='tr'||!s)return s;const li=LIDX[LANG];const m=s.match(/^(\s*)([\s\S]*?)(\s*)$/);const core=m[2];if(!core)return s;const out=tr1(core,li);return out==null?s:m[1]+out+m[3]}
function tr1(c,li){const d=I18N[c];if(d)return d[li];
 for(const[re,L]of I18P){const mm=c.match(re);if(mm)return c.replace(re,L[li-1])}
 const dm=c.match(/^(\d+) (Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)( (\w+))?(.*)$/);if(dm){const mo=MONL[LANG][MON.indexOf(dm[2])];const dy=dm[4]?(I18N[dm[4]]?I18N[dm[4]][li]:dm[4]):'';const rest=dm[5]?(tr1(dm[5].replace(/^ · /,''),li)||dm[5].replace(/^ · /,'')):'';return LANG==='ja'?`${mo}${dm[1]}日${dy?'('+dy+')':''}${dm[5]?' · '+rest:''}`:`${dm[1]} ${mo}${dy?' '+dy:''}${dm[5]?' · '+rest:''}`}
 if(c.includes(' · ')){const P=c.split(' · ');let ch=false;const o=P.map(p=>{const t=tr1(p,li);if(t!=null&&t!==p){ch=true;return t}return p});return ch?o.join(' · '):null}
 const hm=c.match(/^(.+?)(\s*[:]?\s+[+−\-–]?[\d.,]+\s?%?.*|\s+\+{1,2}|\s+−{1,2}|\s+\d+\s*\/\s*\d+)$/);if(hm&&I18N[hm[1]])return I18N[hm[1]][li]+hm[2];
 const km=c.match(/^(.+?) ([★☆]+)$/);if(km&&I18N[km[1]])return I18N[km[1]][li]+' '+km[2];
 const lm=c.match(/^Kilitli · (.+)$/);if(lm)return (I18N['Kilitli'][li])+' · '+(tr1(lm[1],li)||lm[1]);
 return null}
let I18BUSY=false;
function trNode(root){if(LANG==='tr'||!root)return;I18BUSY=true;try{
 if(root.nodeType===3){const v=root.nodeValue;const t=trS(v);if(t!==v)root.nodeValue=t;return}
 if(root.nodeType!==1)return;if(root.closest&&root.closest('script,style,textarea'))return;
 const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement&&n.parentElement.closest('script,style,textarea,svg text.raw')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let n;while(n=w.nextNode()){const v=n.nodeValue;if(!/[A-Za-zÇĞİÖŞÜçğıöşü]/.test(v))continue;const t=trS(v);if(t!==v)n.nodeValue=t}
 (root.querySelectorAll?root.querySelectorAll('[placeholder],[aria-label]'):[]).forEach(e=>{['placeholder','aria-label'].forEach(a=>{const v=e.getAttribute(a);if(v){const t=trS(v);if(t!==v)e.setAttribute(a,t)}})})
 }finally{I18BUSY=false}}
function i18nInit(){document.documentElement.lang=LANG;setTitle();const mo=new MutationObserver(recs=>{if(LANG==='tr')return;const set=new Set();recs.forEach(r=>{if(r.type==='characterData')set.add(r.target);else r.addedNodes.forEach(n=>set.add(n))});set.forEach(trNode)});mo.observe(document.body,{childList:true,subtree:true,characterData:true});trNode(document.body)}
const GAMET={tr:'Büyük Yemin',en:'Grand Oath',ja:'大いなる誓い',es:'El Gran Juramento',fr:'Le Grand Serment',de:'Der Große Eid'};
function setTitle(){try{document.title=GAMET[LANG]||GAMET.tr}catch(e){}}
function setLang(v){if(LIDX[v]==null)return;LANG=v;try{localStorage.setItem('by-lang',v)}catch(e){}document.documentElement.lang=v;setTitle();render();trNode(document.body)}
function langPicker(){return `<div class="langp">${LANGS.map(([k,n])=>`<button class="${LANG===k?'on':''}" data-a="lang" data-v="${k}">${n}</button>`).join('')}</div>`}
/* Başlık ekranı ve ayarlara dil seçici */
function vSettingsLang(){return `<div class="card"><div class="sec-h"><h2>Dil</h2><span class="small muted">Language</span></div>${langPicker()}<p class="small muted">${LANG==='tr'?'Arayüz seçtiğin dile çevrilir. Hikâye ve olay metinlerinin çevirisi aşamalı olarak ekleniyor.':'Interface translated. Story and event texts are being translated in stages and may still appear in Turkish.'}</p></div>`}
var A26={lang:setLang};
