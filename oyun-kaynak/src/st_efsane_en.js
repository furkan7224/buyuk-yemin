/* HİKÂYE · EFSANE BİRLİK · İngilizce metin katmanı (mantık st_efsane.js'ten gelir) */
(function(){
TALE_EN.efsane={
 meta:{ti:'Legendary Unit',genre:'Drama · War',sub:'A seventy-year-old secret in a nursing-home room',
  pitch:'A ninety-one-year-old veteran tells a young history student the story of his legendary unit: twelve soldiers who held a mountain pass for nine days to save a village. But the more he tells, the less some things add up. A promise kept for seventy years, a dog tag and a name.',
  chapters:[{ti:'The Visitor',sub:'The nursing home and first memories'},{ti:'The Pass',sub:'Eagle Pass and the village of Akpınar'},{ti:'Nine Days',sub:'Hunger, cold and a white flag'},{ti:'The Last Night',sub:'The snow cornice and the dog tag'},{ti:'The Truth',sub:'The last question'}],
  statDefs:[['hafiza','Memory','var(--blue)'],['birlik','Unit spirit','var(--green)'],['vicdan','Conscience','var(--acc)']]},
 medal:'Legendary Unit Medal',
 end:{gercek:'Two names',efsane:'Legend',emanet:'The keepsake',bedel:'Half a day',sis:'Fog'},
 scenes:{
z1:{b:`Çamlık Nursing Home, November. Rain draws thin lines on the window.

You are ninety-one. In the mornings, first your knees ache, then your memories.

Nurse Sevim knocks on the door:

— Uncle Kâzım, you have a visitor. A girl from the university. She studies history and records old soldiers' stories. She asked for you specifically. About the Wolf Company.

The Wolf Company. In school textbooks they're called "the Legendary Unit": twelve soldiers who held Eagle Pass for nine days and saved a village. You are known as the only one still alive.

In the drawer of your nightstand lies a medal wrapped in a handkerchief. You haven't opened it in years.`,
 ch:['"Let her come in. Maybe it\'s finally time to tell it."','Say, "I\'m tired, another time."']},
z2:{b:(st,fl)=>`${fl.isteksiz
 ?'Before she leaves, Sevim puts a photograph on the nightstand. "The girl asked me to show you this." A minute later the girl herself is at the door; she doesn\'t come in uninvited, but she has no intention of giving up either.'
 :'The girl comes in. She can\'t be more than twenty-four; a recorder in her hand, a thick folder in her bag.'}

— I'm Zeynep, she says. I'd like to show you a photograph.

You know the photo. Twelve young men in the snow. Some are laughing, some are glaring at the lens. Behind them, the rocks of Eagle Pass.

— This photo is in every book, says Zeynep. But there are no names under it. Which one is you?

Your finger pauses over the photograph.`,
 ch:['Point to the broad-shouldered, laughing sergeant in the middle.','Point to the thin boy at the end, shivering in the snow.']},
z2b:{b:`Zeynep looks at the photo, then at you.

— But that boy… According to the records, that's Private Hasan Çelik. Killed on the ninth night.

For a moment there's only the sound of the rain.

— My eyes aren't what they were, child, you say. Old age.

Zeynep writes something in her notebook. Then she smiles.

— Could you start from the beginning? From the day you joined the unit.`,ch:['Close your eyes and begin.']},
z3:{b:(st,fl)=>`${fl.gosterdi==='cavus'?`— Sergeant Kâzım Yıldırım, Zeynep says, looking at the photo. Twenty-three years old. Then she switches on the recorder. — Start from the beginning. From the day you joined the unit.

You close your eyes.

`:''}*Sixty-nine years ago. The eastern front.*

You jump from the back of the truck into the snow. You are nineteen. Everything you've owned since you left the orphanage is in the pack on your back.

The Wolf Company's tents are lined up beside a stream. Captain Ateş Kaya looks you up and down and, without a word, ticks a name on his list.

Then a voice:

— This the new rookie?

A broad-shouldered sergeant with a mustache. When he laughs, his eyes disappear. Seeing that your hands have gone purple, he pulls off his own gloves and holds them out.

— Take them. Where I come from, they wouldn't even call this snow.

The name tape on his chest reads *K. Yıldırım*.`,
 ch:['Take the gloves. Thank him.','Say, "No need." You don\'t want to owe anyone.','Ask about the company\'s name: why "Wolf"?']},
z4:{b:(st,fl)=>`${fl.eldiven
 ?'The sergeant slaps your shoulder: — My name\'s Kâzım. You call me Sarge, I call you Rookie. Deal?'
 :fl.kurt
 ?'The sergeant laughs: — Because a wolf doesn\'t leave the pack. If one falls, the pack doesn\'t abandon him. My name\'s Kâzım. You\'re part of the pack now, Rookie.'
 :'The sergeant shrugs: — Suit yourself. But on this mountain, everyone ends up owing someone. My name\'s Kâzım.'}

The first weeks pass in snow, guard duty and Kâzım's endless stories. He talks about his mother, Hatice Ana, who lost his two older brothers on other fronts. And about his eight-year-old little sister, Nazlı: "I always give her holiday money. If I don't make it back for this holiday, there'll be hell to pay."

There are others in the company too: the quiet sniper Corporal Bekir, Yakup the radioman, Şükrü the cook, who sings folk songs over his pot, and Rıfat the medic.

One night on watch Kâzım asks you:

— Who've you got, Rookie? Who do you write letters to?`,
 ch:['Say, "I don\'t have anyone." Tell the truth.','Say, "I have an aunt." You don\'t want to look alone.','Don\'t answer. Change the subject.']},
z5:{b:(st,fl)=>`${fl.yetim
 ?'Kâzım is quiet for a long time. Then he takes a crumpled letter from his pocket. — Then from now on half my letters are yours, he says. My mother\'s used to praying for more than one anyway.'
 :'Kâzım doesn\'t press. But from that night on, he adds a line to the end of every letter: "There\'s a rookie with me, pray for him too, Mother."'}

When you open your eyes, Zeynep is looking at you. The red light of the recorder is blinking.

— Hatice Ana, she says slowly. Nazlı. You said those names with so much love.

Then she takes a sheet of paper out of her folder.

— May I ask something? Please don't be upset. Kâzım Yıldırım's military record lists his blood type as O. The nursing home's medical record says A.

Your throat goes dry.`,
 ch:['"A clerk\'s mistake, child. Back then everything was written by hand."','Stay silent for a while. Then say, "I\'ll tell you tomorrow."','Sip your tea. Try to hide that your hand is shaking.']},
g1:{b:(st,fl)=>`The next day Zeynep comes again. ${fl.katip
 ?'She doesn\'t bring up the blood type again. But you see her write something in the margin of her notebook.'
 :fl.yarin?'— Yesterday you said "tomorrow", she says with a smile. Today is that tomorrow.':'She leaves the pastries she brought on the nightstand.'}

— Tell me about Eagle Pass, she says. The books have three lines about it. You're the only one who knows the rest.

Sometimes memories come on their own; sometimes you have to drag them out.`,
 ch:['Start telling it right away.','First, look at the photo for a long time. Remember the faces one by one.']},
g2:{b:`*March. Eagle Pass.*

Captain Ateş spreads the map on a rock.

— The enemy has broken through the main line. This pass is the only road down to the village of Akpınar. Three hundred people live there. They'll be evacuated over the highland trail behind the mountain. We need three days. For three days, we hold this pass.

When you reach Akpınar, the village elder, Grandpa Kerim, greets you. His granddaughter Gülsüm, ten years old, is trying to round up her goats. Women have tied quilts to their backs. Old people, sick people, babies in arms…

Kâzım turns to you:

— We need to start digging, but… look at them, Rookie.

The captain gives you the first day to decide what to do.`,
 ch:['Help the villagers carry their belongings to the highland trail.','Start digging positions. If the pass isn\'t held, no one survives.','Go scout the upper rocks of the pass with Bekir.']},
g3:{b:(st,fl)=>`${fl.yardim
 ?'By evening your arms feel like they\'ll fall off. Gülsüm hands you the rope of one of her goats: "You take this one, soldier. He\'s the most stubborn."'
 :fl.mevzi?'Until evening you dig at the frozen ground. Your hands are bloody, but the position is deep.'
 :'Up in the rocks above the pass, you and Bekir find a goat track the enemy could use to get behind you. Bekir only nods: "Good eye."'}

On the first night, at three o'clock, lights appear on the slope opposite. Engines. Then silence.

Bekir slides in next to you:

— Don't rush. Let them get close. If we fire too early, they'll know how few we are.

Beside you, Yakup's breathing quickens. A flare climbs into the sky.`,
 ch:['Listen to Bekir. Wait for them to get close.','Open fire now. Scare them off.']},
g4:{b:(st,fl)=>`${fl.gece1==='iyi'
 ?'The enemy vanguard walked into the ambush and pulled back. No one in the company was wounded. In the morning, Kâzım hands you the first cup of tea.'
 :'The enemy figured out how few you are. Mortar fire went on all night. Şükrü\'s pot was punctured, and Rıfat was hit in the arm.'}

*Day three.* Captain Ateş is wounded in the leg; he grits his teeth as Rıfat changes the dressing. Yakup looks up from the radio:

— HQ has ordered a withdrawal, sir. Immediately.

But half the village is still on the highland trail. Snow fell overnight and blocked the path; the old and the sick can only move slowly, on foot. They need another day, maybe two.

The captain gathers everyone. His voice is weak but firm:

— The order is clear. But I don't want to abandon this village. If we stay, most of us won't make it back. I'm asking what you think. You first, Rookie. In this company, the youngest speaks first.

Kâzım looks at you. You know what he's thinking.`,
 ch:['"Let\'s stay, sir. Until the village is through."','"Orders are orders, sir. Let\'s withdraw."','"Let volunteers stay, and the rest withdraw."']},
g4b:{b:`The captain lowers his head. The withdrawal begins.

Half a day later, down in the valley, someone comes running through the snow. Gülsüm. Barefoot, her face swollen from crying.

— They're coming! Grandpa and the others are still on the trail!

Kâzım slings his rifle over his shoulder and turns back; he doesn't even look behind him. The captain stops for a moment, then shouts:

— Company! We're going back!

By the time you reach the pass, the enemy has reached the first houses at the edge of the village. You drive them back, but half a day has been lost. Fourteen people from the last group on the highland trail never came back.

Years later you will still count those fourteen names, one by one, every night.`,ch:['Continue.']},
g5:{b:(st,fl)=>`Zeynep's voice calls you back to the present:

— Uncle Kâzım? Are you alright?

For a moment you don't know who she is. Her hair, the shape of her eyes…

— Nazlı? you say. I brought your holiday money…

Zeynep freezes. Her eyes fill with tears. Then she reaches out and takes your hand.

— I'm Zeynep, she says slowly. But Nazlı… is a name I love dearly too.

${fl.geri?'You don\'t speak for a while. You never told anyone about that half day. It isn\'t in the books either.':'Your hands are still shaking.'}`,
 ch:['Rest a little. Watch the rain through the window.','Keep going. You have to tell it before you forget.']},
d1:{b:(st,fl)=>`*Day five.*

The rations are gone. Şükrü boils the last of the bulgur with snowmelt and makes a soup. The steam rising from the pot draws the whole company around it.

${fl.geri
 ?'The survivors of the lost group, about twenty people, are waiting in the sheepfold just below the pass.'
 :'The village\'s last group, about a hundred old and sick people, are waiting in the sheepfold just below the pass, waiting for the snowbound trail to open.'} Children shiver by the fire.

Kâzım stands at the pot and looks at you. The soup is barely enough for twelve.`,
 ch:['Share the soup with the people in the sheepfold.','The soldiers have to stay strong enough to fight. The soup is for the company.','Take your own share to Gülsüm. Leave the rest alone.']},
d2:{b:(st,fl)=>`${fl.paylas?'Without a word, Kâzım takes the ladle from you and hands the first bowl to Grandpa Kerim. That night half the company goes to sleep hungry; no one complains.\n\n':fl.gulsum?'Gülsüm holds the bowl in both hands and gives half of it to her little brother.\n\n':''}*Day six.* Captain Ateş died quietly before dawn. His last words were to Kâzım: "The company is yours."

The radio is dead too. Yakup spent all night working on the wires; no use. HQ doesn't know where you are, or whether you're alive.

Kâzım stands over the map:

— Someone has to go down. Reach the unit in the valley and ask for help. But the road is right under the enemy's eyes.

Everyone is silent. Then you hear your own voice.`,
 ch:['"I\'ll go, Sarge."','"Let\'s try to fix the radio with Yakup one more time."','"Nobody goes. Whatever happens, happens to all of us together."']},
d3:{b:(st,fl)=>`${fl.haber==='kosu'
 ?'At night you slip down through the snow into the valley. Before dawn you reach an artillery unit. "Day nine," their commander says. "We can\'t come any sooner." On the way back, Kâzım is waiting for you at the mouth of the pass; he hugs you and slaps your back.'
 :fl.yaralandi?'Halfway down you run into a patrol. As you run, a bullet grazes your shoulder. You crawl back through the snow. As Kâzım pulls you into the position, you hear him shout for the first time: "If you ever go anywhere again without asking me…" He can\'t finish the sentence.'
 :fl.haber==='telsiz'?'Before dawn Yakup shouts with joy. A crackling voice over the radio: "Day nine. Hold on. Day nine."'
 :fl.telsizYok?'The radio never speaks again. Yakup carries it on his back anyway; "maybe," he says.'
 :'Nobody goes. That night the company huddles even closer around the fire.'}

*Day seven.* A white flag on the opposite slope. An enemy officer, with an interpreter, walks out to the middle of the pass.

— Surrender. The women and children will not be touched. You have my word.

Kâzım whispers to you:

— The last group's trail opens tomorrow. We need one more day.`,
 ch:['Suggest to Kâzım: "Let\'s drag out the talks and buy time."','"We don\'t surrender. Send him away."','Ask: "Should we trust his word and hand the group over to them?"']},
d4:{b:(st,fl)=>`${{
 oyalama:'Kâzım spends half the day drinking tea and haggling with the enemy officer; every offer gets a question, every question a story. By evening, the last group is on the highland trail.',
 anladi:'The talks last an hour. Then the enemy officer realizes he\'s being stalled. In the afternoon comes the hardest attack yet. Şükrü falls that day; his pot is still by the fire.',
 red:'The officer shrugs and walks back. That night the attack comes. Şükrü falls; his pot is still by the fire.',
 teklif:'Kâzım gives you a look you won\'t forget for seventy years. — A wolf doesn\'t abandon the pack, Rookie, is all he says. He sends the officer back. That night the attack comes. Şükrü falls.'
}[fl.d7]}

Zeynep switches off the recorder. She takes out her phone.

— I'd like you to hear something. It was a very old cassette recording; I had it digitized.

An old woman's voice comes from the speaker: "…my brother came every holiday. Candy in his hand, money in his pocket. Even when my mother's eyes could no longer see, she knew the sound of his footsteps…"

You know the voice. Older than you've ever heard it, but you know it.

— Nazlı, you say.`,
 ch:['Cry. Let go of the tears you\'ve held back for seventy years.','Pull yourself together. Say, "Let\'s go on."']},
s1:{b:(st,fl)=>`*The ninth night.*

Seven of you are left. ${fl.yaralandi?'Your shoulder is bandaged; you hold your rifle with one hand. ':''}The last villagers in the sheepfold, Grandpa Kerim and Gülsüm among them, have set off on the highland trail. If you hold the pass until morning, they'll be safe.

But this time the enemy is coming with everything. The opposite slope is full of lanterns.

Kâzım gathers you and shows you the last of the explosives:

— The snow cornice above the pass. If we blow it, the avalanche closes the road; nobody gets through for weeks. But the fuse is short. Whoever lights it might not get away.

Silence.

— I'll stay, says Kâzım. The rest of you follow the villagers up to the highlands.`,
 ch:['"I\'ll stay, Sarge. I don\'t have anyone."','"Let\'s stay together. One lights the fuse, the other pulls him away."','Obey the order. Withdraw with the others.']},
s2:{b:(st,fl)=>`${{
 ben:'Kâzım laughs. Seventy years later you can still hear that laugh. — You don\'t have anyone? he says. What am I, then? Then he grabs you by the collar and shoves you back. By the time you get up, he has already lit the fuse.',
 birlikte:'You light the fuse together. You run. Behind you, the mountain groans.',
 cekil:'You go a hundred meters. Then you stop. You turn back. You find Kâzım at the fuse. When he sees you, he curses, then laughs. — Stubborn goat, he says. Just like Gülsüm\'s goat.'
}[fl.son]}

The explosion. Then a roar; it's as if the mountain itself is sliding. The snow cornice comes crashing down onto the pass.

Then silence.

It's Kâzım who digs you out of the snow. But he can't get up himself. A shard of rock is lodged in his chest. A dark stain is spreading across the snow.`,ch:['Kneel beside him.']},
s3:{b:`Kâzım's breath comes short and shallow. You hold his hand.

— Listen, Rookie, he says. There's no time.

He takes the dog tag from around his neck and presses it into your palm. Then he pulls yours off and snaps the chain.

— My mother has buried two sons. If she buries a third, she won't survive it. You go home. In my place. Give Nazlı her holiday money.

— Sarge, I…

— That's an order, he says. The last one.

From his breast pocket he takes an unfinished letter.

— To my mother, he says. You finish it.`,
 ch:['Take the dog tag and the letter. "I promise, Sarge."','"I can\'t, Sarge. It would be a lie."']},
s4:{b:(st,fl)=>`${fl.reddettim
 ?`Kâzım doesn't answer. His hand in yours, his eyes open, he is looking at the sky. Then everything goes dark.

When you wake up you're in a field hospital. A nurse greets you with a smile: "Welcome back, Sergeant Kâzım." The dog tag is around your neck. He must have put it on you while you were unconscious. The letter is in your pocket too.`
 :`Kâzım breathes his last with his hand in yours. His eyes are open, looking at the sky.

When you wake up you're in a field hospital. A nurse greets you with a smile: "Welcome back, Sergeant Kâzım."`}

According to the records, Private Hasan Çelik was killed on the ninth night. Sergeant Kâzım Yıldırım is the only surviving soldier of the Legendary Unit.

A month later you're standing at the door of a village house. Hatice Ana's eyes can no longer see. When she hears your voice, her hands search for your face. Her fingers move over your forehead, your nose, your lips. For a long, long time.

Behind her stands an eight-year-old girl. Nazlı. She looks at you. First she understands something, then she decides something.

— Brother, she says. Welcome home.`,
 ch:['Whisper the truth into Hatice Ana\'s ear.','Stay silent. Be her son.']},
r1:{b:(st,fl)=>`${fl.anneBildi
 ?'Hatice Ana listens to your whisper. Then she presses your head to her chest. "I know, my child," she says. "Kâzım\'s footsteps didn\'t sound like that. But now you are my son too."'
 :'Hatice Ana holds you to her heart. She asks nothing. For twenty-one years, until the day she dies, she prays for you every morning.'}

Seventy years. You carried Hatice Ana's coffin. You gave Nazlı away at her wedding; you held her hand. Holiday money, every holiday… And every year, alone, you went to the grave at Eagle Pass, the stone that reads "Private Hasan Çelik".

In the nursing-home room, Zeynep sits across from you. The recorder is on the table. The red light is on.

— One last question, she says. Her voice is trembling.

— Who are you?`,
 ch:['"I am Hasan Çelik. Kâzım Yıldırım died on the ninth night. Saving me."','"I am Kâzım Yıldırım, child. Whatever the books say."','Don\'t answer. Take the dog tag and the unfinished letter from the drawer and hand them to her.']},
end_gercek:{b:`Zeynep doesn't switch off the recorder. She's crying, but she's smiling.

— I knew, she says. My grandmother told me. Nazlı Yıldırım. She passed away last spring. In her last days she held my hand and said: "Go to Çamlık Nursing Home. Thank your Uncle Hasan. He was a brother to me and my mother for a lifetime. My brother Kâzım would have wanted that."

You thought she never knew. For seventy years Nazlı knew, and never said a word.

Six months later a small ceremony is held at Eagle Pass. On the gravestone that has read "Private Hasan Çelik" for seventy years, the right name is finally carved: *Sergeant Kâzım Yıldırım.* On the marble of the memorial, two names are written side by side. Beneath both, the same line: *The Wolf Company.*

You sit in your wheelchair next to Zeynep. The wind blows down through the pass. For a moment, from very far away, you think you hear someone laugh.

— Rookie, says the wind. Did you make it home?

You did, Sarge. Just the way you wanted.`},
end_efsane:{b:`Zeynep looks at you for a long time. Then she switches off the recorder.

— My grandmother used to say that too, she says slowly. "My brother Kâzım." She always said that. Nazlı Yıldırım. She passed away last spring.

She stands up and pauses at the door.

— In her last days she asked me to thank you. I didn't ask why. I think I know now.

The books don't change. At school ceremonies, teachers still tell the story of "the last living hero, Kâzım Yıldırım". A name is printed under the photograph: under the laughing sergeant in the middle.

One winter morning Sevim finds you by the window, asleep, a dog tag in your hand. There's a name on the tag, but no one reads it closely.

Sometimes a legend protects not a lie, but a promise.`},
end_emanet:{b:`You say nothing. You open the drawer. Under the medal in the handkerchief lie a seventy-year-old dog tag and a yellowed, unfinished letter.

Zeynep turns the tag over. It reads *K. Yıldırım*. The first line of the letter: "Dear Mother, if I don't make it back for this holiday…" The letter is unfinished; beneath it, another hand has added more lines over the years. One line for every holiday.

As she reads, Zeynep understands. Then she looks at you.

— My grandmother Nazlı, she whispers. She knew. She always knew. She asked me to thank you.

She closes her hand around the dog tag.

— What would you like me to do?

— You decide, child, you say. It's yours to keep now.

A year later Zeynep's book is published: *Eagle Pass: Two Soldiers, One Name.* On the first page there's a one-line dedication: *To everyone who keeps their word.*`},
end_bedel:{b:(st,fl)=>`${fl.secim==='gercek'
 ?'— I am Hasan Çelik, you say. Then you keep going, because tonight you\'ve decided to say everything. How on the third day you said, "Let\'s withdraw." The half day that was lost. The fourteen people on the highland trail who never came back.'
 :fl.secim==='emanet'?'You hand Zeynep the dog tag and the letter. Then one more sheet of paper: a list you\'ve kept for seventy years. Fourteen names.'
 :'— I am Kâzım Yıldırım, you say. But your voice is shaking. Inside the legend of "nine days" in the books, there is half a day no one knows about.'}

Zeynep listens in silence. Finally she switches off the recorder.

— My grandmother Nazlı, she says. She asked me to thank you. For being a brother to her for a lifetime.

Thanks. Thanks, to a man who has counted fourteen names every night for seventy years.

The books still say "nine days". But you never forgot that half day: the afternoon Gülsüm ran barefoot through the snow. The way Kâzım turned back without looking behind him.

Sometimes a hero's story is built on top of a regret.

The story didn't have to end here. Could you have said something different on the third day?`},
end_sis:{b:`Zeynep asks something, but the words get tangled. The girl in front of you becomes Nazlı, then Gülsüm, then no one at all.

— Sarge? you say to the empty room. The fuse… the fuse is short…

Sevim comes in and helps you lie down. Zeynep quietly packs up the recorder. She stops at the door and looks at you for a while.

She comes again the next week. And the week after. But the story never comes together again.

Some secrets are kept not by a promise, but by a fog.

The story didn't have to end here. Could you have given yourself room to rest while you told it?`}
 }};
})();
