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
			"GOOD WORD!!! It shimmered through the veil like a secret only stars understand. 🌌🔮📖",
			"GOOD WORD!!! That syllable carries ancient weight—like it was spoken in the first dawn. ☀️🗝️⏳",
			"GOOD WORD!!! Something about it feels... prophetic. Like it knew I needed it. 🕯️📜👁️",
			"GOOD WORD!!! That was no ordinary utterance—that was spellcraft. 🧙‍♂️✨📘",
			"GOOD WORD!!! A linguistic artifact, dusted off and still humming with mystery. 🧳🏺🎙️",
			"GOOD WORD!!! It peeled reality like a banana and revealed a typewriter inside!!! 🍌⌨️💥",
			"GOOD WORD!!! That syllable just convinced gravity to take a lunch break!!! 🌍🚫🍔",
			"GOOD WORD!!! Strong root structure, crisp phonemes, impeccable mouthfeel. 🦷🗣️📏",
			"GOOD WORD!!! If that were a Scrabble play, it would end friendships. 🎲🧩🔥",
			"GOOD WORD!!! Forged in the ancient fires of the Lexicon Mountains. ⛰️🔥📘",
			"GOOD WORD!!! The bards shall sing of this utterance for ten thousand moons! 🧝‍♂️🎶🌕",
			"GOOD WORD... Say it again and I shall swoon upon this chaise. 💌🛋️🌹",
			"GOOD WORD... If words be hearts, thine is the one that beats for me. 💘📝🫀",
			"GOOD WORD... That utterance just held my hand under starlight. 🌠🤝💫",
			"GOOD WORD... It floated in like moonlight on a midnight tide. 🌊🌙💭",
			"GOOD WORD... That felt like a lullaby spoken by the wind itself. 🍃🎶💫",
			"GOOD WORD... It brushed my soul like petals in passing. 🌸🌬️💗",
			"GOOD WORD... Soft as starlight, sharp as morning frost. ❄️✨📖",
			"GOOD WORD... A perfect note in the song of thought. 🎼📝🌠",
			"GOOD WORD... crisp like cool shade on a hot thought. 🧊🌴💭",
			"GOOD WORD... it just vibed into the conversation like it's always belonged. 🎧🛋️📞",
			"GOOD WORD... That's got flow, finesse, and a little jazzy soul. 🎷🌀🌃",
			"GOOD WORD... you can almost hear it sipping coffee and reading poetry. ☕📖🕊️",
			"GOOD WORD... That one just hummed its way into my brain and parked in peace. 🧘‍♂️🚗🌈",
			"GOOD WORD... The ravens paused mid-flight to hear it whispered again. 🦅🌑📣",
		]

		response = responses[Math.floor(Math.random() * responses.length)];
		interaction.send(response);

	}

};