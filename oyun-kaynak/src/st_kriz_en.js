/* HİKÂYE · KRİZ MASASI · İngilizce metin katmanı (mantık st_kriz.js'ten gelir) */
(function(){
const sel=fl=>fl.savak?'yok':fl.tahliye?'bos':fl.gecUyari?'hafif':'agir';
const bildi=fl=>fl.iddia||fl.nuri||fl.sor||fl.dosya||fl.ucuncu;
TALE_EN.kriz={
 meta:{ti:'Crisis Room',genre:'Politics · Thriller',sub:'48 hours, 14 hostages, a dam and a report nobody read',
  pitch:'At midnight, armed men seize a dam\'s control building: fourteen hostages inside, a sleeping town nine kilometers below. You head the Crisis Room. On one side, a general who wants to storm the building; on the other, a negotiator who wants to talk; and across the table, a deputy minister who wants it over fast. Is the man holding the hostages a terrorist, or a whistleblower nobody listened to?',
  chapters:[{ti:'First Contact',sub:'Hours 00–06'},{ti:'Negotiation',sub:'Hours 06–18'},{ti:'Breaking Point',sub:'Hours 18–30'},{ti:'Final Offer',sub:'Hours 30–42'},{ti:'Dawn',sub:'Hours 42–48'}],
  statDefs:[['rehine','Hostage trust','var(--green)'],['kamuoyu','Public opinion','var(--acc)'],['masa','Team unity','var(--blue)']]},
 medal:'Crisis Room Medal',
 end:{gercek:'The truth',sessiz:'Silent victory',baskin:'Raid in the storm',bedel:'A heavy price',sel:'Yeşilova',azil:'Relieved of command',kayip:'Dark morning'},
 scenes:{
k1:{b:`03:12. The phone wakes you on the second ring.

— Sir, the control building of Yıldızdere Dam has been seized. Five armed men. Fourteen staff inside.

Twenty minutes later the briefing file is in front of you. The dam sits nine kilometers above the town of Yeşilova. Twenty-two thousand people are asleep there. Whoever holds the control building can open the spillway gates whenever they like.

The leader of the attackers called once and said a single sentence: "Whoever is in charge, I'll talk to them."

The decree was signed five minutes ago. You are now head of the Crisis Room.

Where do you go first?`,
 ch:['Take a helicopter to the dam. See the scene with your own eyes.','Stay at the crisis center in the capital. Run the room from there.']},
k2:{b:(st,fl)=>`${fl.yer==='saha'
 ?'They\'ve turned the gendarmerie post three kilometers below the dam into a crisis center. Through the window you can see the dam\'s floodlights, each one an eye hanging in the dark.'
 :'The wall of the capital\'s crisis center is covered in screens. The dam\'s security cameras have been dark for ten minutes.'}

Three people sit at the table.

Brigadier General Oya Demirel, Special Forces. Short hair, few words. "Give me two hours and I'll know every corner of that building."

Chief Inspector Selin Uçar, fifteen years as a negotiator. "Don't make him wait. A man who waits starts talking to himself."

Deputy Minister Haldun Sezer. His tie is perfect even at midnight. "The press will hear soon. Let's get the news flow under control first."

All three are looking at you. What's your first order?`,
 ch:['Selin is right. Call him now and keep the line open.','Seal the perimeter first and get the snipers in place. The call can wait an hour.','Issue a media blackout first. Then we call.']},
k3:{b:(st,fl)=>`${fl.bekletti
 ?`An hour and fourteen minutes later the line opens. The voice is cold:

— You kept me waiting an hour. One more hour and I'd have opened one of the gates. Know that.`
 :'The line opens on the second ring.'}

— My name is Arman Kesk. I worked at this dam as a technician for nine years. I'm not a terrorist. But I'm not leaving here empty-handed tonight.

His voice is calm; he chooses his words carefully. Selin writes a single word on a piece of paper and shows it to you: *Educated.*

— I have three demands. First, my brother Serdar Kesk is released. Second, I speak on live television. Third…

He pauses.

— I'll tell you the third later. First I want to see that you take me seriously.

How do you answer?`,
 ch:['"I\'m listening. First, prove the hostages are alright."','"I don\'t negotiate at gunpoint. Release the hostages, then we talk."','"Tell me your third demand now. I mean it."']},
k4:{b:(st,fl)=>`${fl.kanit
 ?`Arman hands the phone to someone. A shaky, old voice:

— This is Halil Turan, shift supervisor. We're all fine. They haven't hurt anyone.

Then he lowers his voice:

— Sir, have them check the third gallery…

The line goes dead.`
 :fl.ucuncu
 ?`Arman is silent for a long time.

— The third is a report, he says at last. The dam's acceptance report. The real one, not the one you were shown.

The line goes dead.`
 :`Arman lets out a short laugh.

— Commander, there are fourteen people in this building. And twenty-two thousand nine kilometers below. If you won't negotiate, why did you call?

The line goes dead.`}

04:50. The duty officer appears at the door.

— Sir, there's an old man on the line. Nuri Bilgin. Says he was one of the engineers who built the dam. "I know Arman, I need to speak to the commander," he says. He's called eleven times tonight.

Haldun shakes his head.

— Every busybody will call tonight. Let's not waste our time.`,
 ch:['Put Nuri Bilgin through. I\'ll give him five minutes.','Have an officer listen. If it\'s important, they can pass it on.']},
k5:{b:(st,fl)=>`${fl.nuri?`Nuri Bilgin's voice is tired but clear:

— Arman was my apprentice. That boy wouldn't kill anyone. But he's afraid of something, and he may be right to be. I need to talk to you face to face.

You send a car to bring him in.

`:''}05:40. Selin puts her tablet on the table. A forty-second video, filmed on one of the hostages' phones, has leaked online. Trainee engineer Ece Yalın is crying, calling out to her mother. It's been viewed two million times in an hour.

${fl.yasak?'The media blackout didn\'t stop the video from spreading. If anything, it fed the question: "What are they hiding?"':'News channels have already started running it in their tickers.'}

Haldun stands up.

— The minister expects a statement. Now.

What will you say?`,
 ch:['"The situation is completely under our control."','"We are working for the safety of the hostages. I can\'t give details right now."','Make no statement. Stay silent.']},
k6:{b:(st,fl)=>`06:05. Day is breaking. Oya's team spent the night mapping the building.

— Sir, we've observed the guard change. At 06:30 two of the five inside go to sleep. If we go in through the front door and the roof at the same time, we can get most of the fourteen hostages out.

*Most.* The word hangs over the table.

Selin cuts in at once:

— Arman wants his brother, not to die. We haven't even talked properly yet.

Haldun looks at his watch. He says nothing, but it's clear what he's thinking.

The decision is yours.`,
 ch:['No raid. We keep talking.','Authorize the dawn raid.']},
k7a:{b:`The team is inside in six minutes. They bring six hostages out of the building, among them Ece Yalın, the young woman from the video.

But Arman and his men retreat into the turbine hall with the remaining eight hostages. They weld the steel door shut from the inside. No one died; still, getting in is now much harder.

Twenty minutes later Arman calls. His voice is shaking, but not from fear. From rage.

— You lied to me. Try that again and I'll open the gates. All of them.`,ch:['Continue.']},
k7b:{b:`The roof door is booby-trapped. The blast throws the team's lead man back. Fire opens up from inside; technician Mehmet Er is hit in the leg. Oya has to pull the team back.

Then Arman's voice:

— You asked for this.

The first spillway gate opens half a meter. Nine kilometers below, Yeşilova's sirens start to wail. Ten minutes later the gate closes again. That was a warning.`,ch:['Continue.']},
m1:{b:(st,fl)=>`08:00. ${fl.ihanet
 ?`Arman hasn't picked up the phone for two hours. When he finally does, he sets a single condition:

— From now on I talk only to that policewoman. Not to you.`
 :'This time Arman calls himself. You can hear the sleeplessness in his voice.'}

— You have twelve hours for my brother. If Serdar isn't standing in front of this dam by 20:00, I open the first gate all the way.

Selin puts her pen down.

— They'll ask for food and medicine, she says. They're running out of water in there. We could ask for a few hostages in exchange.

Haldun objects:

— No prisoner swaps. The state doesn't do that.

Arman is still on the line, waiting for an answer.`,
 ch:['Ask for two hostages in exchange for food and medicine.','Offer to let him talk to Serdar on the phone.','Buy time with a "technical problem" excuse.']},
m2:{b:(st,fl)=>`${fl.takas?`09:40. The food boxes are left at the door. Ten minutes later two people walk out with their hands up: ${fl.alti?'old night watchman Rıza and technician Yusuf':'trainee Ece Yalın and old night watchman Rıza'}. Both are unharmed.

`:fl.takasRed?`09:40. Arman refuses the offer. "Nobody comes out. Take your food back and eat it yourselves."

`:fl.kardes?`09:40. You patch Serdar through from prison. The two brothers talk for three minutes. Even after hanging up, Arman's voice is softer.

`:''}${fl.nuri
 ?`10:30. Nuri Bilgin arrives at the crisis center. He's seventy-one and carries a yellowed notebook.

— We built this dam thirty years ago, he says. The contractor was Akbel Construction. The concrete in the third gallery failed the lab tests. I objected, and they took me off the project. Arman was my apprentice back then. He knows everything.

He opens the notebook: measurements, dates, signatures.

— Arman is using his brother as a pretext, he says. What he really wants is that report. The dam's acceptance report is a fake.`
 :`10:30. Oya's drone scans the downstream face of the dam. Something catches your eye in the footage: in the middle of summer, a thin but steady trickle of water is seeping from the outlet of the third gallery.

— Probably nothing, says Oya. Old dams sweat.`}`,
 ch:['Quietly start a structural inspection of the dam.','The dam\'s structure isn\'t our priority right now. Focus on the hostages.']},
m3:{b:(st,fl)=>`${fl.kontrol?`11:20. A short report comes in from the dam's maintenance crew: the monitoring instruments in the third gallery were switched off as "faulty" two years ago. No one has taken a reading since.

`:''}12:00. Haldun hangs up and comes over to the table.

— The minister wants this finished before the evening news. General Demirel is ready. If you approve a noon raid, we'll back you.

Haldun's phone buzzes again. You catch a glimpse of the screen: *Akbel Construction · Board.*

${fl.kontrol||fl.nuri?'Haldun puts the phone in his pocket without answering. He notices you watching him.':'Haldun declines the call.'}`,
 ch:['I don\'t make decisions on a political schedule. No raid.','I want Akbel Construction\'s dam files on my desk. Now.','Prepare a noon raid. But I make the final call.'],
 why:[null,'You have no suspicions about the dam.']},
m4:{b:(st,fl)=>`14:00. ${fl.ogle?`As Oya's team moves into position, Arman calls. As if he can see everything:

— I can see your men on the roof. Pull them back, or the talking ends.

Oya pulls the team back. The noon raid is off.

`:''}Arman repeats his second demand: live television. Three minutes. Uncut.

Haldun is firm:

— We can't give an armed man a podium.

Selin sees it differently:

— If he talks, he'll calm down. If he can't, he'll explode.

Oya suggests a technical solution:

— We could set up a fake broadcast. The camera records, but nothing goes on air.`,
 ch:['Allow a controlled broadcast with a ten-second delay.','Set up a fake broadcast.','Refuse the broadcast.']},
m4b:{b:(st,fl)=>fl.yakalandi
 ?`Arman checks the broadcast on a small radio inside. When he can't hear his own voice on any channel, he smashes the camera on the floor.

A single gunshot comes over the line. One of the technicians has been hit in the shoulder.

— Lie to me again, Arman says, and the next bullet won't miss.`
 :`${fl.sahte?'Arman speaks to the camera. His words appear only on the screen in the crisis center.':'Arman\'s face appears on the screens. Tired, unshaven, looking straight into the camera.'}

— My name is Arman Kesk. I'm from the village of Taşlıca. My village lies under this dam's reservoir. What I did tonight is a crime, I know. But there's a crack in the third gallery. This dam was built thirty years ago with substandard concrete, and the people who knew kept quiet. I'm speaking to everyone in Yeşilova: demand an evacuation. When this broadcast ends, do with me what you will.

${fl.sahte?'The screen goes black. No one heard it. Only you and the people at this table.':'When the screens go dark, nobody at the table speaks. Haldun\'s face is white.'}`,ch:['Continue.']},
m5:{b:(st,fl)=>`17:30. Selin looks up from the line.

— Halil Turan may be having a heart attack. He's sixty-two, and his medication is at home. Arman is asking for a doctor.

Oya sees an opportunity at once:

— I have a combat medic. He goes in dressed as a doctor, sees the inside, maybe plants a listening device.

Selin objects:

— If he's caught, it's all over. ${fl.ihanet?'He already doesn\'t trust us. He never will again.':'He\'ll never trust us again.'}`,
 ch:['Send a real doctor.','Send the medic disguised as a doctor.','No doctor. Two hostages released first.']},
r1:{b:(st,fl)=>`${fl.doktor?'The doctor stays inside for an hour and stabilizes Halil. On the way out he tells you one thing: "The people in there are more afraid of the man next to Arman than of you."':fl.icerde?'The medic returns an hour later. There are four armed men inside, not five. The explosives are real, but wired only to the gate motors. One of them, a young kid named Bora, is close to tears. The listening device is in place.':fl.doktorYak?'The medic is caught during the search at the door. Arman roughs him up and sends him back. Halil\'s medication only gets inside an hour later.':'Arman releases no one. He says nothing about Halil\'s condition either.'}

22:10. The reservoir level alarm goes off. The level dropped twelve centimeters in an hour. The stream that runs through Yeşilova is nearing flood level.

Oya: — He's opened the gates. It's a warning.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin leans toward the screen. His hands are shaking. — No, he says. The gates are closed, look at the motor logs. This water is coming from the third gallery. The crack is opening.'
 :'But the gate motor logs show no movement at all. The water is coming from somewhere else, and no one knows where.'}`,
 ch:['Quietly evacuate Yeşilova tonight.','An evacuation would cause panic. Wait and watch.','Ask Arman directly about the crack.'],
 why:[null,null,'You know nothing about a crack.']},
r2:{b:(st,fl)=>fl.sor
 ?`— So you know, Arman says. For the first time his voice breaks.

— Thirty years ago Master Nuri objected, and they fired him. I've kept the original copy of that report for ten years. I sent it to the governor, the ministry, the newspapers. Nobody even opened the envelope.

He takes a deep breath.

— You don't have to release my brother, Commander. Make the report public. Evacuate Yeşilova. I'll surrender. But the men with me… Cevdet wants other things. I didn't bring him. He found me.`
 :fl.ihanet
 ?`Arman picks up the phone but doesn't speak. In the background you hear a man shouting:

— They're stalling! Open the gate!

Arman yells back: "Cevdet, shut up!" Then the line goes dead. A few minutes later it opens again.

— It's past 20:00, Arman says. I didn't open the gate. Don't you wonder why?`
 :`Arman sounds tired.

— It's past 20:00, he says. I didn't open the gate. Don't you wonder why? I ask you one thing: read this dam's acceptance report. The real one. Then call me.`,
 ch:['"I promise you: the report will be made public."','"Release the hostages first. Then we\'ll talk about everything."','Stall him. Buy Oya time.'],
 why:['You don\'t know which report he means.']},
r3:{b:(st,fl)=>`02:00. Only you and Haldun are left in the crisis center. Haldun closes the door.

— I'll be frank. The owner of Akbel Construction is the minister's brother-in-law. ${fl.dosya?'The files you asked for arrived. The lab report for the third gallery isn\'t in them. Someone removed those pages.':'If that report is real and it comes out, it won\'t just bring down a company. It\'ll bring down the government.'}

He is quiet for a moment.

— Save the hostages, arrest the man. We'll discuss the report later, calmly. I'm saying this for your career. Truly.`,
 ch:['"No. The report goes into the crisis record."','"Fine. The report won\'t be discussed at this table."','Say nothing. In the morning, leak the report to a journalist.'],
 why:[null,null,'You have nothing to leak.']},
r4:{b:(st,fl)=>`${fl.sizinti?'04:30. You dial a journalist\'s number. The call lasts four minutes. The morning edition\'s headline is ready: "Fake report allegation at Yıldızdere."\n\n':''}05:00. A whisper comes ${fl.icerde?'through the listening device':'over Selin\'s line'}. Bora. Nineteen, Arman's nephew. He found a phone on the pretext of going to the toilet.

— Ma'am, he says to Selin. I never wanted this. Cevdet keeps the detonator for the explosives. Not even Arman can touch it. I want out.

Selin looks at you. Getting Bora out could change the whole balance inside. Or it could make Cevdet realize everything.`,
 ch:['Help Bora surrender.','Bora stays inside. He\'ll be our eyes and ears.']},
r5:{b:(st,fl)=>`${fl.bora?'Bora comes out through the dam\'s service door with his hands up. Oya\'s team pins him down and drags him behind cover. His first words: "Cevdet has the detonator. Red. Left pocket."':fl.boraYak?'Before Bora can reach the door, Cevdet catches him. Shouting comes from inside. They\'ve tied Bora up with the hostages. Cevdet suspects everyone now, even Arman.':'Bora stayed inside. Every two hours he sends short messages: "They\'re sleeping." "Cevdet isn\'t sleeping."'}

12:00. The weather service issues a warning: a severe storm will hit the area after 20:00 this evening. Helicopters won't be able to fly.

${fl.tahliye?'The evacuation of Yeşilova is eighty percent complete. People are sheltering in schools up in the hills.':'Life in Yeşilova goes on as usual. The market is open, the schools are in session.'}

The ministry is ready to bring Serdar Kesk from prison to the site. They're waiting for your approval.`,
 ch:['Bring Serdar.','Serdar stays in prison.']},
s1:{b:(st,fl)=>`${fl.serdar
 ?`15:00. They bring Serdar Kesk to the crisis center. Handcuffed, thin; he looks like his brother.

— My brother wouldn't shoot anyone, he says. But Cevdet would. I met him in prison. My brother cares about the dam; Cevdet cares about money. Someone paid him for this. I don't know who. My brother doesn't know either.`
 :`15:00. Oya puts an intelligence file on the table.

— Cevdet Arı. Two armed robberies, one attempted murder. Met Arman last year. A large sum was deposited into his account last week. Source unknown.`}

${(fl.dosya||fl.kayit||fl.sizinti)&&bildi(fl)?'The financial crimes unit traces the money. The trail ends at a shell company. Last year the company had a single client: Akbel Construction.\n\nNuri Bilgin sinks into his chair. — They were going to blow up the dam, he says. Arman would take the blame. And the fake report would stay at the bottom of the reservoir forever.\n\n':''}Oya continues:

— We need to separate Cevdet from Arman. If Arman is alone, he'll surrender. If Cevdet stays, someone dies.`,
 ch:['Prepare Selin for a final conversation with Arman.','Have Oya draw up a raid plan to isolate Cevdet.','Show Arman the money trail. Let him learn who he\'s really working for.'],
 why:[null,null,'You have no evidence to follow the money.']},
s2:{b:(st,fl)=>`19:00. The first gusts of the storm rattle the crisis center's windows. In an hour the helicopters will be grounded.

${fl.para
 ?`You read Arman the money transfer, line by line. A long silence.

— Cevdet… used me, he says at last. He was going to blow up the dam and I'd take the blame. And everything I've been trying to tell people for years would be washed away with the water.`
 :`Arman calls. He sounds exhausted.

— Commander, we're both out of time. Say your last word.`}

What's your final offer?`,
 ch:['"The report will be made public. You release the hostages and surrender."','Put Serdar on the line. Let him persuade his brother to surrender.','The talking is over. Raid before the storm hits.'],
 why:['You don\'t have the power to release the report, or you never gave Arman your word.','Serdar isn\'t here.']},
s3t:{b:(st,fl)=>`20:40. The storm crashes down on the dam. Arman agrees.

— I'm bringing the hostages to the door, he says.

Then the sound of a struggle on the line. Cevdet's voice:

— Nobody leaves! I've got the detonator!

${fl.bora?'Just as Bora said: red detonator, left pocket. ':''}Oya's sniper is in position, but the rain is ruining his view. Selin takes off her jacket:

— I'll go in unarmed. If Arman is with me, I can talk Cevdet down.`,
 ch:['Let Selin go in unarmed.','Clear the sniper to take Cevdet down.']},
s3b:{b:(st,fl)=>`19:50. The storm is ten minutes away. Oya's team waits in the shadow of the dam.

— There are ${fl.bora?'three':'four'} armed men inside, says Oya. ${fl.bora||fl.icerde?'We know who has the detonator. ':'We don\'t know who has the detonator. '}${fl.alti?'The turbine hall door is welded; getting in will be hard. ':''}Where do we go in?`,
 ch:['Through the old maintenance gallery Master Nuri knows.','Through the roof and the front door at the same time.','Cut the power first, then go in in the dark.'],
 why:['No one knows the dam\'s old plans.']},
f1:{b:(st,fl)=>`${{
 teslim:'Selin walks out of the storm with Arman on her arm. Behind them the hostages come out in single file. Arman tackled Cevdet himself; the red detonator lies in the mud. No one died.',
 atis:'A single shot. Cevdet goes down, wounded but alive. Arman walks out the door with his hands raised. The hostages are behind him. No one died.',
 baskin:'As the team storms in, Cevdet reaches for the detonator. The first operator is faster. Arman lays down his weapon and drops to his knees. All the hostages are rescued; two operators are lightly wounded.',
 kayip:'Something goes wrong. Cevdet presses the detonator; one of the gate motors explodes. Gunfire in the dark. When the count is taken in the morning, two of the hostages, Halil Turan and technician Mehmet Er, are dead. Cevdet is dead. Arman is captured, wounded.'
}[fl.sonuc]}

23:30. The storm is at its worst. But the real danger hasn't passed.

${fl.nuri||fl.kontrol
 ?'Nuri Bilgin shouts over the radio: — The third gallery! The leak has doubled! If we don\'t lower the reservoir now, the dam won\'t hold!'
 :'Around midnight a deep, long groan comes from the body of the dam. The engineers on duty can\'t tell what it is.'}

${fl.tahliye?'Yeşilova is empty. Everyone is in the schools up in the hills.':'Twenty-two thousand people are asleep in Yeşilova.'}`,
 ch:['Open the bottom outlets. Lower the reservoir in a controlled way.',(st,fl)=>fl.tahliye?'Finish the evacuation. Nobody stays in town.':'Warn the town. Sound the sirens.','It\'s not a structural problem, it\'s the storm. Wait.'],
 why:['No one knows the condition of the dam.']},
f2:{b:(st,fl)=>`${{
 yok:'Following Master Nuri\'s instructions, the bottom outlets are opened. Water flows into the valley in a controlled stream. By early morning the reservoir has dropped two meters. The crack stops growing. The dam holds.',
 bos:'Before dawn the wall of the third gallery collapses. The side of the dam tears open; water pours into the valley. The lower neighborhoods of Yeşilova are flooded. But the town was empty. No one died.',
 hafif:'The sirens sound at midnight. People run for the hills in the rain, in their pajamas. Before dawn the gallery wall collapses; the water reaches the lower neighborhoods. Most people are saved. But not everyone.',
 agir:'Before dawn the wall of the third gallery collapses. The side of the dam tears open. The water rushes down on sleeping Yeşilova.'
}[sel(fl)]}

09:00. The press room is packed. Haldun stands beside you holding a statement prepared for you. The headline is in bold: *Terror attack successfully prevented.*

The cameras turn to you.`,
 ch:['Tell the truth: the report, Akbel Construction, everything.','Read Haldun\'s statement.'],
 why:['You don\'t know any truth to tell.']},
end_gercek:{b:(st,fl)=>`You set the statement down on the table and open your own file.

The lab results for the third gallery. Nuri Bilgin's thirty-year-old written objection. Akbel Construction's signatures.${fl.para?' The money deposited into Cevdet Arı\'s account, and the shell company it came from.':''}

Haldun walks out of the room. Before evening the minister announces his resignation.

${fl.savak?'Yıldızdere Dam is drained for repairs. The engineers\' report is short: the dam could have collapsed within weeks. In Yeşilova no one quite understands how close it was; but you do.':'The collapsed side of the dam is shown on the news for months. But Yeşilova did not lose a single life. A year later the foundation of a new dam is laid; this time every report is public.'}

Arman Kesk is tried. He will serve his sentence for taking hostages; he accepts that himself. On the last day of the trial Master Nuri sits in the front row. He nods to Arman.

Six months later a letter arrives. It's from trainee engineer Ece Yalın: "I'm on the new inspection team. I check every batch of concrete myself."

Some crises are the only road to the truth.`},
end_sessiz:{b:(st,fl)=>`"The terror attack was prevented by the determination of our security forces."

Camera flashes. The next morning your photo is on the front page of every newspaper.

All the hostages went home. Arman Kesk is tried as a "terrorist leader". When he tries to mention the report in court, the judge cuts him off.

${fl.savak?'The dam is quietly drained for "routine maintenance". Akbel Construction wins the repair contract.':'The collapse of the dam is announced as a "natural disaster caused by the storm". Akbel Construction wins the rebuilding contract.'}${fl.sizinti?'\n\nThe story you leaked stays in the news for a week. Then the ministry calls it a "baseless allegation" and the matter is closed.':''}

One night you get a short message from Nuri Bilgin: "You kept quiet too."

You keep your medal in a drawer.

You saved the hostages. You couldn't save the truth.`},
end_baskin:{b:(st,fl)=>`"The terror attack was prevented by the determination of our security forces."

Helmet-camera footage of Oya's team plays on every screen: a flawless operation in the storm, in the dark. The news channels call it "the operation of the year".

All the hostages were rescued. Cevdet Arı and Arman Kesk are under arrest.

But in interrogation Arman asks only one question, the same question every time:

— Did you read the report?

${fl.savak?'The dam is quietly drained for "routine maintenance". Akbel Construction wins the repair contract.':'The collapse of the dam is announced as a "natural disaster caused by the storm". No one asks any questions.'}

Oya and her team receive medals. On the day of the ceremony Oya comes up to you and asks quietly: "Sir, was that man right?"

You don't answer.

You won an operation. The real battle never began.`},
end_bedel:{b:(st,fl)=>`${fl.acik?'In the press room you tell the truth: the report, Akbel Construction, everything. But nobody is listening. Everyone is asking about two names.':'You read Haldun\'s statement. But nobody is listening. Everyone is asking about two names.'}

Halil Turan. Mehmet Er.

You go to Halil's funeral. He spent thirty-one years at that dam; he was four months from retirement. Mehmet was twenty-six. He was getting married in two months. His fiancée won't even look at you.

The board of inquiry examines your decisions one by one. None of them was illegal. None of them was good enough.

Arman was captured wounded. From his hospital bed he looks at you and says, "I never wanted this." You believe him. It changes nothing.

${fl.acik?'The report does come out in the end; Akbel Construction goes on trial. But the news always shows those two photos.':'The report never comes out.'}

Every decision made in a crisis room touches someone's life.`},
end_sel:{b:(st,fl)=>`When the morning light reaches the valley, the lower half of Yeşilova is gone. Rooftops, minarets, the basketball hoop in the schoolyard rise out of a muddy lake.

${sel(fl)==='hafif'?'The sirens that sounded in the night saved thousands. But eleven people never came back.':'No one was warned. The death toll rises every hour.'}

${fl.sonuc==='kayip'?'The names of the two hostages lost in the control building almost disappear in this long list.':'All the hostages were rescued. But no one talks about that anymore.'}

${fl.yayin?'Arman Kesk\'s warning from the live broadcast is replayed on television for days: "There\'s a crack in the third gallery."':'Nuri Bilgin\'s yellowed notebook ends up in a newspaper\'s hands. His thirty-year-old written objection makes the headlines.'}

Before the board of inquiry, you are asked a single question:

— Didn't you know?

The signs were there. Reading them was your job.`},
end_azil:{b:(st,fl)=>`${st.kamuoyu<=0
 ?'Your face is on every screen. Headlines read "Crisis room collapses" and "The state stands by and watches". The minister doesn\'t even call; you learn from the news that you\'ve been relieved of command.'
 :'No one at the table looks at you anymore. Oya questions your orders; Haldun sends his reports straight to the minister. Before dawn an order arrives: command of the Crisis Room has been handed to another general.'}

You watch the rest of the crisis on a hotel-room television. Someone else writes the ending.

In a crisis, trust is the most valuable ammunition. Yours ran out.

The story didn't have to end here. Could you have held both the room and the public at the same time?`},
end_kayip:{b:`On the other end of the line, Arman has stopped talking. Instead you hear one of the men with him, a hard, cold voice:

— Your time is up.

Two gunshots.

Ten minutes later Oya's team is inside. The owner of that cold voice, Cevdet Arı, tries to shoot his way out and is killed. Arman sits among the hostages with his head in his hands.

In the morning the count is taken. Shift supervisor Halil Turan and technician Mehmet Er are dead.

Once the hostages' trust was broken, there was no time left to win it back.

The story didn't have to end here. At which decision did you lose the hostages?`}
 }};
})();
