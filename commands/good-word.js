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
			"GOOD WORD!!! IT'S GOT FLAVOR, STYLE, AND A KICK LIKE A LINGUISTIC ESPRESSO SHOT!!! ☕💬💥",
			"GOOD WORD!!! THAT'S A VERBAL HIGH-FIVE TO THE COSMOS!!! 🌌👐🚀"
		]

		response = responses[Math.floor(Math.random() * responses.length)];
		interaction.send(response);

	}

};