const { SlashCommandBuilder } = require('@discordjs/builders');

const name = 'good-word';
const description = 'For when there is a good word.';
const aliases = [];
const operatorOnly = false;

module.exports = {

    name: name,
    description: description,
    aliases: aliases,
	operatorOnly: operatorOnly,

	data: 	[
				new SlashCommandBuilder()
				.setName(name)
				.setDescription(description)
			],

	async execute(interaction, command, args, client) {

		const responses = [
			"GOOD WORD!!! ABSOLUTELY DELICIOUS SYLLABLES!!! I'M VIBRATING WITH LINGUISTIC JOY!!! 📢✨💃",
			"GOOD WORD!!! THAT ONE HIT ME RIGHT IN THE SYNAPTIC PLEASURE CENTER!!! 🤯💫📣",
			"GOOD WORD!!! THAT'S A WHOLE FEAST FOR THE MOUTH AND MIND!!! 🍽️🧠💥",
			"GOOD WORD!!! THAT'S A LINGUISTIC LASER BEAM STRAIGHT TO THE SOUL!!! 🎯💡⚡",
			"GOOD WORD!!! I'M GONNA NEED A MINUTE TO RECOVER FROM THAT LEVEL OF EXCELLENCE!!! 😵🔥⏳",
			"GOOD WORD!!! THAT BELONGS IN THE MUSEUM OF VERBAL MASTERPIECES!!! 🏛️🖼️🎤",
			"GOOD WORD!!! THAT'S A 12/10 ON THE BLISS-O-METER!!! 📊😍💖",
			"GOOD WORD!!! IT'S GOT FLAVOUR, STYLE, AND A KICK LIKE A LINGUISTIC ESPRESSO SHOT!!! ☕💬💥",
			"GOOD WORD!!! THAT'S A VERBAL HIGH-FIVE TO THE COSMOS!!! 🌌👐🚀",
			"GOOD WORD!!! I HAVE HARNESSED THIS SYLLABLE TO A SWARM OF BEES AND RELEASED IT INTO SOCIETY!!! 🐝📢🚨",
			"GOOD WORD!!! MY NEURONS ARE SLAM-DANCING AND ONE OF THEM JUST DECLARED MUTINY!!! 🧠🎸💣",
			"GOOD WORD!!! IT PEELED REALITY LIKE A BANANA AND REVEALED A TYPEWRITER INSIDE!!! 🍌⌨️💥",
			"GOOD WORD!!! THAT SYLLABLE JUST CONVINCED GRAVITY TO TAKE A LUNCH BREAK!!! 🌍🚫🍔",
			"GOOD WORD!!! IT'S THE TURBO BOOST OF LANGUAGE!!! 🚀🏁💬",
			"GOOD WORD!!! FULL THROTTLE TO AWESOME TOWN!!! 🏁🚀🎉",
			"GOOD WORD!!! OH MY GOODNESS GRACIOUS, YESSS!!! 💥🎉🙌",
			"GOOD WORD!!! DROPPED IT HARDER THAN REALITY AT 3 AM!!! 🌀🕒🔊",
			"GOOD WORD!!! I'd write it in lipstick on a mirror. 💄🪞✨",
			"GOOD WORD!!! You dropped it like a name in a breakup track. 💔📢🎧",
			"GOOD WORD!!! Strong root structure, crisp phonemes, impeccable mouthfeel. 🦷🗣️📏",
			"GOOD WORD!!! If that were a Scrabble play, it would end friendships. 🎲🧩🔥",
			"GOOD WORD!!! The bards shall sing of this utterance for ten thousand moons! 🧝‍♂️🎶🌕",
			"GOOD WORD!!! I dropped that word and walked away from the explosion. 💣🚶‍♂️🔥",
			"GOOD WORD!!! Sound trumpets! Ring bells! Call forth the muse! 📣🎺🔔",
			"GOOD WORD!!! Someone get this word a trophy!! 🏆📢🎆",
			"GOOD WORD!!! Summoned from the darkest grimoire. 🕯️📚⚡",
			"GOOD WORD!!! That phrase just floored it and left the rest in the dust! 🏎️💨🔥",
			"GOOD WORD!!! Darling, that phrase is pure runway magic! 💃✨👠",
			"GOOD WORD!!! Hacked into the mainframe of meaning. 💾⚡🕶️",
			"GOOD WORD!!! Whispered in glades where magic hums. 🌿✨🧙‍♂️",
			"GOOD WORD!!! Honey, that phrase is giving runway SLAYAGE! 👑✨🔥",
			"GOOD WORD!!! Serving looks, beats, and words—ALL SLAYED! 💃🎤✨",
			"GOOD WORD!!! The tea is HOT and the word is HOTTER! ☕🔥💋",
			"GOOD WORD!!! Werk that word like a fierce queen! 💃💄💅",
			"GOOD WORD!!! I want it written on a Polaroid I keep in my wallet forever. 📸📅💗",
			"GOOD WORD!!! That belongs scribbled in sharpie on my high school sneakers. 👟🖊️💔",
			"GOOD WORD!!! It's the voice memo I never deleted. 🎤📱🕰️",
			"GOOD WORD!!! I said it as the sky cracked open and my heels didn’t even wobble. 🌋👠💅",
			"GOOD WORD!!! I screamed it into the firestorm and it came back in reverb. 🔥🔊💄",
			"GOOD WORD!!! The meteor paused to hear me say that. ☄️🗣️💋",
			"GOOD WORD!!! That phrase melted steel and ruined my mascara. 🧨🖤🔥",
			"GOOD WORD!!! You said it like the world wasn't ending behind us. 🌪️💋🚁",
			"GOOD WORD!!! I'll remember it long after the credits roll. 🧠🎞️🌌",
			"GOOD WORD!!! It rang off the pillars and cracked the stained glass. ⛪🔊💔",
			"GOOD WORD!!! You said it and the entire court went still. 👑😱🥂",
			"GOOD WORD!!! The chandelier fell right on cue. 💡💣🪩",
			"GOOD WORD!!! Said with a smile full of secrets and arsenic. 😊💀🍇",
			"GOOD WORD!!! I didn't care if we drowned, I needed to hear it again. 🌊💞😭",
			"GOOD WORD!!! You said it like thunder, and I fell. ⚡🫠💋",
			"GOOD WORD!!! I read it aloud and the attic got colder. ❄️📖🏚️",
			"GOOD WORD!!! My grandmother warned me about that phrase. 👵🕯️📜",
			"GOOD WORD!!! That phrase tasted like dust and regret. 🫦🪦😓",
			"GOOD WORD!!! The spirits stirred. They were impressed. 👻👏🕰️",
			"GOOD WORD!!! I felt every ancestor flinch. 🧬💀📣",
			"GOOD WORD!!! I dropped my sword. That line cut deeper. 🗡️💔😵",
			"GOOD WORD!!! You spoke it, and the wolves howled in answer! 🐺🌕🌙",
			"GOOD WORD!!! Wrapped in velvet, your words strike deep! 🧤💉🔥",
			"GOOD WORD!!! The prophecy never mentioned how cool it'd sound. 🔮😎💬",
			"GOOD WORD!!! It's giving reputation, it's giving red. 🖤❤️🧣",
			"GOOD WORD!!! That's the kind of phrase I'd stitch into a denim jacket after a breakup. 🌟🧥😭",
			"GOOD WORD!!! Like a saxophone solo at closing time. 🎷🕛🖤",
			"GOOD WORD!!! That phrase spun like vinyl on a Sunday night. 📀🌙🎧",
			"GOOD WORD!!! It's got the grit of the desert sun. ☀️🏜️🖤",
			"GOOD WORD!!! Soft like a cassette tape's final rewind. 📼🔁💖",
			"GOOD WORD... Drenched in nostalgia and gentle ache. 🕰️💔🌙",
			"GOOD WORD... You poured that phrase like vintage vengeance. 🍷💅🩸",
			"GOOD WORD... If the world's ending, I want that phrase on my lips. 🌍📝❤️",
			"GOOD WORD... I saw every outcome, and this was always the best one. 👁️📈💬",
			"GOOD WORD... We're standing in the wreckage and you're still poetic. 🏚️📝🌹",
			"GOOD WORD... My heart cracked perfectly when you said that. 💔📖✨",
			"GOOD WORD... If love is doomed, let it sound like that. 💘🧨📝",
			"GOOD WORD... I whispered it, and the candles trembled. 🕯️🌫️😮",
			"GOOD WORD... It hums like a late-night train rolling by. 🚆🎶💨",
			"GOOD WORD... I will be emotionally unpacking this for years. 🧳😢💭",
			"GOOD WORD... That phrase is the scarf he never gave back. 🧣📦💔",
			"GOOD WORD... It's autumn leaves and late-night drives. 🍂🚗🌙",
			"GOOD WORD... Like a whispered promise in a midnight text. 📱🌙✨",
			"GOOD WORD... Smoother than the finest bourbon on the rocks. 🥃🎶💫",
			"GOOD WORD... Like a cigarette's last puff, it leaves its mark. 🚬💨🖤",
			"GOOD WORD... I've seen many words, but none as sharp as this. 🔦🚬💥",
			"GOOD WORD... That syllable carries ancient weight—like it was spoken in the first dawn. ☀️🗝️⏳",
			"GOOD WORD... Something about it feels... prophetic. Like it knew I needed it. 🕯️📜👁️",
			"GOOD WORD... That was no ordinary utterance—that was spellcraft. 🧙‍♂️✨📘",
			"GOOD WORD... A linguistic artifact, dusted off and still humming with mystery. 🧳🏺🎙️",
			"GOOD WORD... It shimmered through the veil like a secret only stars understand. 🌌🔮📖",
			"GOOD WORD... Forged in the ancient fires of the Lexicon Mountains. ⛰️🔥📘",
			"GOOD WORD... Say it again and I shall swoon upon this chaise. 💌🛋️🌹",
			"GOOD WORD... If words be hearts, thine is the one that beats for me. 💘📝🫀",
			"GOOD WORD... That utterance just held my hand under starlight. 🌠🤝💫",
			"GOOD WORD... It floated in like moonlight on a midnight tide. 🌊🌙💭",
			"GOOD WORD... That felt like a lullaby spoken by the wind itself. 🍃🎶💫",
			"GOOD WORD... It brushed my soul like petals in passing. 🌸🌬️💗",
			"GOOD WORD... Soft as starlight, sharp as morning frost. ❄️✨📖",
			"GOOD WORD... A perfect note in the song of thought. 🎼📝🌠",
			"GOOD WORD... Crisp like cool shade on a hot thought. 🧊🌴💭",
			"GOOD WORD... It just vibed into the conversation like it's always belonged. 🎧🛋️📞",
			"GOOD WORD... That's got flow, finesse, and a little jazzy soul. 🎷🌀🌃",
			"GOOD WORD... You can almost hear it sipping coffee and reading poetry. ☕📖🕊️",
			"GOOD WORD... That one just hummed its way into my brain and parked in peace. 🧘‍♂️🚗🌈",
			"GOOD WORD... The ravens paused mid-flight to hear it whispered again. 🦅🌑📣",
		];

		response = responses[Math.floor(Math.random() * responses.length)];
		interaction.send(response);

	}

};