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
		interaction.send('GOOD WORD!!!');
	}

};