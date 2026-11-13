/* HİKÂYE · ESİR · İngilizce metin katmanı (mantık st_esir.js'ten gelir) */
(function(){
const gaveLine=fl=>fl.gave?`\n\nYou tell the battalion commander yourself about the small piece of information you gave in the interrogation room. He is silent for a long time, then touches your shoulder:\n\n— Everyone has a limit, Sergeant. Even at yours, you chose your friend.`:'';
TALE_EN.esir={
 meta:{ti:'Captive',genre:'Survival · Escape',sub:'A squad captured behind enemy lines and their escape',
  pitch:'Your squad is captured after an ambush on a night patrol. A wounded corporal, a young private on his first mission, and a patient major waiting for you in the interrogation room. Who will you trust, and who will you leave behind? Not everyone may make it home.',
  chapters:[{ti:'Ambush',sub:'Night patrol and capture'},{ti:'The Cell',sub:'Interrogation and will'},{ti:'The Plan',sub:'Observation and trust'},{ti:'Escape',sub:'Barbed wire and pursuit'},{ti:'Return',sub:'Minefield and the way home'}],
  statDefs:[['moral','Morale','var(--acc)'],['saglik','Health','var(--green)'],['bag','Squad bond','var(--blue)']]},
 medal:'Returned from Captivity',
 end:{kahraman:'A hero\'s return',aci:'Bitter victory',yalniz:'Alone',bedel:'The price',karanlik:'Darkness'},
 scenes:{
p1:{b:`02:40. You are at the foot of Eagle Ridge; the border line is only a few hundred meters away.

At the evening briefing the battalion commander kept it short: "There's movement on the other side. Get close, look, count, come back. No engagement."

Two men are with you. Corporal Selim Kara has twelve years in uniform; he rarely talks, and when he does it's usually a joke. Private Mert Aydın is twenty, and this is his first night patrol. In the dark you can hear him trying to hold his breath.

There are two ways forward. The bed of Grey Creek is hidden but slow. The ridge path is fast, but exposed under the moonlight.`,
 ch:['Follow the creek bed. Slow but unseen.','Take the ridge path. Time matters.','Before setting off, go to Mert.']},
p1b:{b:`You touch Mert's shoulder. You can feel him shaking.

— Everyone is scared on their first night, you say quietly. Anyone who isn't is either lying or hasn't understood yet.

— Then I'm not lying, Sergeant, Mert whispers. His voice steadies a little.

Selim grins in the dark:

— I still haven't understood, after twelve years. Come on, let's make it back for breakfast.`,
 ch:['Follow the creek bed. Slow but unseen.','Take the ridge path. Time matters.']},
p2:{b:(st,fl)=>(fl.path==='dere'
 ?`For half an hour you move over the wet stones of the creek bed. Just as you climb onto the flat ground facing the ridge, the sky suddenly turns white: a flare.`
 :`You move fast along the ridge, but the moon is right above you. Between the rocks you catch a glint of metal. Too late. The sky suddenly turns white: a flare.`)+`

Then the sound of a machine gun. You dive behind the rocks. You hear Selim cry out, muffled; he's been hit in the leg.

Mert is frozen at the radio. Fire is coming from three directions. You've walked into an ambush.`,
 ch:['Radio HQ: report the ambush and your coordinates.','Drag Selim behind the rocks.','Return fire and cover Mert.']},
p3a:{b:`You take the radio from Mert's hands.

— Eagle One, Eagle One, this is Nightbird! Ambush! Grid four-one, eight-seven. Fire from three sides, one wounded!

Static. Then a broken voice: "…copy… hold on…"

The message went through. But in those few seconds Selim was left alone among the rocks, and the ring of fire is closing.`,ch:['Continue.']},
p3b:{b:`You grab Selim by his belt and drag him behind the rocks. A bullet passes right by your ear; stone chips cut your face.

— Leave me, Sergeant, Selim groans. Get to the radio!

— Shut up, you say. Nobody leaves anybody.

Selim is in cover now. But the radio is in Mert's hands, and Mert is out in the open.`,ch:['Continue.']},
p3c:{b:(st,fl)=>fl.cover==='ok'
 ?`You shoulder your rifle and fire short bursts at the muzzle flashes. One of the guns opposite falls silent.

Meanwhile Mert pulls Selim behind cover. Scared as he is, the kid did the right thing.`
 :`You shoulder your rifle and fire at the muzzle flashes. Something slams into your left shoulder, like a sledgehammer. A warm wetness spreads down your arm.

Still, you keep firing. Meanwhile Mert pulls Selim behind cover.`,ch:['Continue.']},
p4:{b:`The firing stops. That is not a good sign.

Footsteps in the dark, all around the rocks. Then a voice in heavily accented Turkish:

— Sergeant! You are surrounded. Surrender and your wounded man lives. Resist, and you all die.

You check your magazine: the last few rounds. Mert is looking at you. Selim's face is white as chalk.`,
 ch:['Surrender. Keeping your men alive matters more than anything.','Have Mert burn the codebook, then surrender.','Try to hold out to the last bullet.']},
p5:{b:(st,fl)=>`Your hands are zip-tied behind your back and a rough sack is pulled over your head. You're thrown into the back of a pickup. You can hear Selim moaning and Mert breathing fast.${fl.fought?`

The rifle butt to your head is still throbbing. Your ears are ringing.`:''}${fl.burn?`

Before surrendering you saw Mert set the codebook alight with his lighter. At least those pages won't fall into their hands.`:''}

The truck lurches onto the road.`,
 ch:['Whisper to Mert: "Stay calm. We\'ll get out together."','Silently count the turns and sounds. Memorize the route.','Do nothing. Save your strength.']},
p6:{b:(st,fl)=>(fl.route?`Left. Left. A long straight road. Under the wheels, the hollow sound of a bridge; wood, not metal. Then a hard right. Forty minutes. You must not forget this.

`:'')+`The truck stops. Dogs barking, the creak of an iron gate, shouting in a language you don't understand.

When the sack is pulled off your head you see high wire fences, watchtowers and searchlights. A prison camp.

An officer in a clean uniform walks up and smiles:

— Welcome, Sergeant. I am Major Rehn. We are going to talk a great deal.`,ch:['Wait to be taken to a cell.']},
h1:{b:`A concrete cell. Three paces long, two paces wide. High up, a small barred window. A bucket in the corner.

The bandage on Selim's leg is soaked with blood and his fever is rising. Mert sits against the wall, hugging his knees.

An old guard stands watch by the door. He doesn't shout like the others; every now and then he looks in through the bars.`,
 ch:['Tear your shirt and re-dress Selim\'s wound.','Ask the old guard for water and a clean cloth.','Tell Selim to hold on. Save your strength.']},
h1b:{b:`— Water, you tell the guard. We have a wounded man. Please.

The man looks at you for a while. Then he walks away without a word. Ten minutes later he comes back with a bottle of water and a clean folded cloth, and passes them through the bars.

— Tobas, he says, tapping his chest. That must be his name.

— Thank you, Tobas.

He nods and goes back to his post. Not everyone in this camp may be an enemy.`,ch:['Continue.']},
h2:{b:(st,fl)=>`Before dawn they take you from the cell. A small windowless room. On the table: a lamp, a file and a glass of tea.

Major Rehn speaks politely, calmly, almost kindly:

— Drink your tea, Sergeant. Tell us your unit's positions and radio codes, and you and your friends will see a doctor tonight. You have my word.${fl.burn?`

He pauses for a moment.

— Your codebook was burned. Clever. But I am a patient man.`:''}`,
 ch:['Give only your name, rank and service number.','Give false positions to stall them.','Say nothing. Look him in the eye.']},
h3:{b:(st,fl)=>`Rehn has the door opened. Two soldiers drag Mert in. The boy's lip is split.${fl.lie?`

— The positions you gave us were empty, Sergeant, Rehn says in the same calm voice. Lies have a price.`:''}

— If you won't talk, Rehn says, perhaps he will. He's young, he's scared. Scared people tell you everything.

Mert looks at you. There is no pleading in his eyes; it's the look of a soldier waiting for orders.`,
 ch:['Give a minor but true piece of information to save Mert.','Say "I\'m in command, he knows nothing." Take the weight yourself.','Stay silent. Signal Mert to stay silent too.']},
h4:{b:(st,fl)=>`That night the three of you lie side by side in the cell. ${fl.mertHurt?'Mert faces the wall, crying quietly; he was badly beaten in the interrogation room today.':'Mert is crying quietly.'} ${fl.band?'Selim\'s fever has come down a little; the bandage worked.':'Selim\'s fever is still high.'}

Selim takes a crumpled photo out of his pocket. A girl of about six, smiling with missing teeth.

— Elif, he says. I promised I'd make it to her birthday. Three weeks left.`,
 ch:['Tell them about your home, your village, what you\'ll do when you get back.','Start whispering about escape.','Tell them to sleep. You need your strength.']},
k1:{b:(st,fl)=>`The days blur together. Every noon you're taken out to the yard for a half-hour walk. It's the only time you get to see the camp.${fl.plan?`

Escape is now on all three of your minds. Every walk is a reconnaissance.`:''}

What will you pay attention to today?`,
 ch:['The guard changes and tower schedules.','Weak spots in the wire fence.','The people: who treats whom, and how?']},
k1b:{b:(st,fl)=>`The next day you're in the yard again. ${fl.shift?'Yesterday you noticed that the tower guards change at three o\'clock; during the change the searchlights don\'t cover the yard for a few minutes.':fl.fence?'Yesterday you noticed that at the northeast corner the ground has sunk at the base of a post and the wire is loose.':'Yesterday you noticed that the other guards don\'t show old Tobas much respect, and that he doesn\'t treat the prisoners the way they do.'}

What else will you look at today?`,
 ch:['The guard changes and tower schedules.','Weak spots in the wire fence.','The people: who treats whom, and how?']},
k2:{b:`At dinner the door opens a crack. Tobas slips an extra slice of bread and a piece of cheese under your plate.

— My son, he says in broken Turkish. He's a soldier too. Like you. Maybe he's somewhere too… Nobody gives him bread.

His eyes are wet. Can you trust this man?`,
 ch:['Ask Tobas for help: the door lock, the guard schedule.','Thank him but ask for nothing. Don\'t take the risk.','Try to steal his keys when he dozes off.']},
k3ok:{b:`Tobas is silent for a long time. Then he lowers his voice:

— Thursday night I'm on watch. At three the tower guards change; for ten minutes nobody looks at the yard. The bolt on your door… might be forgotten.

He reaches his hand through the bars. You shake it. Both your hands are trembling.`,ch:['Continue.']},
k3no:{b:`Tobas's face changes in an instant. He steps back and leaves without a word.

Half an hour later two guards enter the cell. They take you outside and beat you. Rehn stands in the doorway with his arms folded, watching:

— An escape plan, Sergeant? From now on, my eyes are on you.

You never see Tobas on watch again.`,ch:['Continue.']},
k3:{b:`You thank Tobas with a nod. The three of you split the bread and cheese.

Selim swallows his bite and smiles:

— Best cheese I've ever eaten. Don't tell Elif; her mother's pastries would be offended.`,ch:['Continue.']},
k3key:{b:`Tobas is snoring in his chair, his head on his chest. You quietly slide a single key off the ring on his belt. So the jingle won't sound different, you put a piece of wire in its place.

The key is in your palm. Your heart is pounding against your ribs.`,ch:['Continue.']},
k3no2:{b:`The moment your hand reaches his belt, Tobas opens his eyes. He says nothing; there is only deep disappointment on his face. Then he blows his whistle.

That night they keep you standing until morning. Rehn watches from the doorway:

— An escape plan, Sergeant? From now on, my eyes are on you.`,ch:['Continue.']},
k4:{b:(st,fl)=>`You find a loose piece in the iron frame of the bunk. For days you grind its end flat and sharp against the concrete floor.${fl.fence?' It could work on the wire fence you spotted.':''}${fl.watched?`

Rehn wasn't bluffing: now two extra patrols pass your cell every night.`:''}

But the real problem is Selim. His leg hasn't healed; he walks with a limp.

— I'll slow you down, Sergeant, he says. Go. I'll stay here. I'll manage somehow.`,
 ch:['"No. Three of us came in, three of us go out." You\'ll carry Selim.','Promise Selim you\'ll come back for him once you\'re out.','Selim creates a diversion in the camp while you escape.']},
k5:{b:`The plan is ready. Only one decision remains: when?`,
 ch:['At three, during the tower guard change.','Thursday night, when Tobas is on watch.','The first rainy night. Rain covers sounds and tracks.'],
 why:['You didn\'t observe the guard schedule.','You don\'t have Tobas\'s help.']},
e1:{b:(st,fl)=>(fl.time==='shift'?`02:55. You count the sweeps of the tower searchlight: once every forty seconds.`
 :fl.time==='tobas'?`Thursday night. Tobas's heavy footsteps pass down the corridor once, then stop.`
 :`You waited three days. Finally thunder rolls; rain drums on the roof.`)+`

Mert is ready. `+(fl.carry?`You've put Selim's arm over your shoulder; he grits his teeth and stands up.`
 :fl.leaveSelim?`Selim lies on his bunk with his eyes closed, pretending to sleep. You didn't say goodbye; it's easier this way.`
 :`Selim sits up on his bunk and winks at you, as if to say "wait for my signal".`),
 ch:['Gently push the door. Tobas must have kept his word.','Put the stolen key in the lock.','Try to lift the bolt with the iron piece.']},
e1x:{b:`The iron scrapes against the bolt with a sharp screech. A flashlight comes on in the corridor.

You hold your breath. The light waits in front of the door for a while… then moves away. The guard must have thought it was a rat.

On the second try the bolt lifts.`,ch:['Continue.']},
e2:{b:(st,fl)=>`You slip across the dark corner of the yard and reach the wire.${fl.fence?' This is the spot you picked: the ground has sunk at the base of the post and the wire is loose.':' The wire is pulled tight, with gaps no wider than a hand.'}`,
 ch:['Crawl under the wire at the loose post.','Bend the wires with the iron piece and open a gap.']},
e3:{b:(st,fl)=>(fl.alarm?`A wire snaps and knocks down the tin can tied to it. A moment of silence… then the siren!`
 :`You're on the other side of the fence. Just as you're about to run for the edge of the forest, the searchlight slides across the grass toward you.`)+(fl.diversion?`

At that very moment shouting erupts at the far end of the camp. Selim! He's banging on the bars of the cell and yelling at the top of his lungs. The searchlights swing that way.`:''),
 ch:['Use the chance Selim bought you. Run!','Run! Don\'t stop until the forest.','Get down. Don\'t move until the light passes.','Run toward the light and draw their attention. Let the others escape.']},
e3b:{b:(st,fl)=>`A machine-gun burst churns the ground.${fl.carry?' Selim\'s weight slows you down. As a bullet passes by, Selim jerks and groans; he\'s been hit.':' A bullet grazes your calf.'}

Still, you reach the darkness of the trees.`,ch:['Continue.']},
e4:{b:(st,fl)=>`Dogs barking behind you. Flashlight beams dance between the trees.${fl.route?`

The route you counted in the truck is still in your head: the wooden bridge, the long straight road… The bridge must be to the south. The border lies that way.`:''}`,
 ch:['Get into the creek. The water will hide your scent from the dogs.','Climb the ridge and get away fast.','Follow the route you memorized in the truck. Head for the bridge.']},
b1:{b:(st,fl)=>`You run straight into the searchlight beam. You spread your arms and shout. Every barrel turns toward you.

Behind you, in the dark, you see ${fl.carry?'Mert hoist Selim onto his shoulder and':'Mert'} disappear into the trees. Then a rifle butt, and darkness.`,ch:['…']},
d1:{b:(st,fl)=>`At dawn you take shelter in a hollow in the rocks. You're soaked and starving; your feet are bloody.

${fl.carry?(fl.selimHit?'Selim\'s wound keeps bleeding and his fever has climbed again. His lips are cracked; he keeps murmuring Elif\'s name.':'Selim\'s fever has climbed again. His lips are cracked; he\'s delirious.'):'Mert sleeps beside you, shivering. Now and then he jerks awake, then drifts off again.'}`,
 ch:['Rest here for a day and move at night.','Keep moving now. Search teams may be closing in.','Give Selim your last food and water.']},
d2:{b:`In the afternoon the trees thin out. In the distance, on top of a hill, you see a flag waving: ours.

Between you lies a kilometer of open ground. Mert points to a rusty sign, half buried in the earth. On it, a red skull.

A minefield.`,
 ch:['Probe the ground with your knife and move inch by inch.','Follow the animal tracks; cross where the goats have crossed.','Run across. The shorter it takes, the better.']},
d3:{b:(st,fl)=>`Halfway across, Mert freezes.

— Sergeant, he whispers. Something clicked under my foot.

He's standing on a pressure mine. The moment he lifts his foot, it will go off.${fl.run?' He stepped on it while running; now he\'s balancing on one foot.':''}`,
 ch:['Try to replace Mert\'s weight with a stone of equal weight.','Stay with him and keep him calm. Signal our side.','Tell Mert to throw himself forward.']},
d3ok:{b:`For a moment everything stops. Then nothing happens.

Mert lies face down a few steps away, his hands dug into the dirt. He's alive. He looks at you and tries to laugh, but he's crying. So are you.

You walk the rest of the way stepping in his footprints.`,ch:['Continue.']},
d3help:{b:(st,fl)=>`They must be watching through binoculars from the trench on the hill. Half an hour later a combat engineer sergeant crawls up to you with a mine detector.${fl.msg?`

— We got your radio message, he says. We've been looking for you for days.`:''}

With expert hands he disarms the mine. Mert drops to his knees, sobbing. You let him cry.

The engineer leads you to the trenches along the safe path he has cleared.`,ch:['Continue.']},
d3x:{b:`The explosion, a moment of white silence. Then a ringing in your ears.

You crawl to where Mert is lying. His eyes are open, looking at you. He tries to say something but no sound comes out. You hold his hand; he holds yours. Then he doesn't.

He was twenty. It was his first night patrol.`,ch:['Continue.']},
d4:{b:`The last hundred meters. A voice rises from the trench on the hill:

— Halt! Who are you? Don't move!

Barrels are aimed at you. You're wearing the torn prisoner clothes of the enemy camp. Our own men don't recognize you.`,
 ch:['Raise your hands and shout the battalion password.','Get down; shout your name, rank and unit.','Shout "Nightbird! Nightbird is coming home!"']},
end_kahraman:{b:(st,fl)=>`The three of you tumble into the trench in your torn prisoner clothes. Someone brings blankets, someone water. The battalion commander comes running; he hugs you first, then Selim, then Mert.

Three weeks later you're in the hospital garden. Selim is in a wheelchair with Elif on his lap. He made it to her birthday. Mert lights the candles on the cake; his hand no longer shakes.

A month later a medal is pinned to your chest on the parade ground. You search the crowd for two faces. They're in the front row, both on their feet, applauding.${gaveLine(fl)}

Three of you went in. Three of you came out.`},
end_aci:{b:(st,fl)=>{const mDead=fl.mert==='dead',sDead=fl.carry&&fl.selimDead===1;
 let t=`When you reach our trench, your knees give way. Blankets, water, radio static… it all seems to come from very far away.`;
 if(mDead)t+=`

Two days later Mert's body, as the engineers recovered it from the minefield, is sent to his village. You write the letter to his mother yourself. You start over three times; no sentence is enough.`;
 if(sDead)t+=`

Selim never saw the border. On the last night, in the rock hollow, burning with fever, he kept murmuring Elif's name. You carried him home on your back. You couldn't return a father to his daughter, but you brought a soldier back to his country.`;
 else if(!fl.carry)t+=`

You left Selim in the camp. You think about him every night. Four months later his name appears on a prisoner exchange list. He's thinner, his hair has gone grey, but he's alive. He missed Elif's birthday; he promises to make the next one. This time he keeps his word.`;
 return t+gaveLine(fl)+`

The medal pinned to your chest feels a little heavier every morning.`}},
end_yalniz:{b:(st,fl)=>`You enter the trench alone.

You left Mert in the minefield, and ${fl.carry?'Selim in that rock hollow on the last night':'Selim behind the barbed wire'}. You set out as a squad; you're the only one who came back.

For weeks you don't speak. At night, in your sleep, you hear radio static: "…hold on…"

One morning in the hospital garden someone sits down beside you. Selim's wife, with Elif on her lap. She isn't angry with you; she only wants to know what happened. You tell her everything. For the first time, you cry.

Sometimes surviving isn't a victory, but a responsibility.`},
end_bedel:{b:(st,fl)=>`When they throw you back into the cell, there's a strange peace on your face.${fl.leaveSelim||fl.diversion?' Selim is on the other side of the wall; you both stayed, but Mert got away.':''}

Two weeks later Rehn stops in front of your cell:

— ${fl.carry?'Your friends':'Your private'} crossed the border, Sergeant. Congratulations. You lost… and yet you won. I rarely see that.

Seven months later, on a foggy morning, a prisoner exchange takes place on the bridge between the two countries.${fl.carry?'':' Selim walks beside you, leaning on your arm.'} A figure waits at the far end of the bridge; as you get closer, the face comes into focus. Mert. Beside him, ${fl.carry?'Selim on crutches':'the battalion commander'}.

Mert salutes you. You salute him back.

Some victories are won by the one who pays the price.`},
end_karanlik:{b:(st,fl)=>st.saglik<=0&&fl._failC>=3
 ?`Your wounds and exhaustion finally bring you down. The ground is cold; the sky is very far away.

${fl.mert==='dead'?'No one is beside you. The last thing you think of is the moment you held Mert\'s hand.':'Mert tries to drag you, then collapses beside you and takes your hand. "I won\'t let go, Sergeant," he says. "You didn\'t either."'}

${fl.mert==='dead'?'Days later a patrol finds your dog tag in a rock hollow a few kilometers from the border and returns it to your battalion.':'Two days later Mert reaches our trench alone. He places a dog tag in the battalion commander\'s palm: yours.'}

The story didn't have to end here. How much did your choices wear down your body?`
 :st.saglik<=0
 ?`Your body couldn't take any more. One morning you can't get up from your bunk; Selim's and Mert's voices grow more and more distant.

By the time the camp doctor arrives, it's too late.

Months later, at a prisoner exchange, a list is handed over with a mark beside your name. Mert will carry that list in his wallet for years.

The story didn't have to end here. How much did your choices wear down your body and mind?`
 :`One day, facing Rehn, you realize your voice is no longer your own. You tell him everything he asks. Your hope is gone.

Selim doesn't speak to you after that night. Mert can't look you in the face.

Everyone has a breaking point. Yours was here.

The story didn't have to end here. Could you have made choices that kept your morale standing?`}
 }};
})();
