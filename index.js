const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const { ClassificationPipeline } = require('./classes/classification-pipeline');
const { Interaction } = require('./classes/interaction.js');

const { token, prefix, operators } = require('./config.json');

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Collection();

// Set up commands.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {

    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

    command.aliases.forEach(alias => {
        client.commands.set(alias, command);
    });

}

client.once('ready', () => {
    console.log('GoodWordBot is now online!');
});

client.on('interactionCreate', async interaction => {

    if (!interaction.isCommand()) return;

    const command = interaction.commandName.toLowerCase();
    const args = [];

    if (typeof interaction.options !== 'undefined') {
        interaction.options._hoistedOptions.forEach(option => {
            option.value.split(/\s+/).forEach(arg => {
                args.push('' + arg);
            });
        });
    }

    execute(interaction, command, args);

});

client.on('messageCreate', async (message) => {

    const lowered = message.content.toLowerCase();

    if (message.author.bot) {return;}
    if (!lowered.includes('word')) {return;}
    if (lowered.includes('word of the day:')) {return;}
    if (lowered.includes('word of the day is')) {return;}
    if (lowered.includes('is the word of the day')) {return;}
    if (lowered.includes('good') && lowered.includes('bot')) {return;}

    const classifier = await ClassificationPipeline.getInstance();
    response = await classifier(message.content);
    console.log(message.content, response);

    label = response[0]['label']
    score = response[0]['score']

    if (label != 'positive') {return;}
    if (score < 0.8) {return;}

    execute(message, 'good-word', []);

});

client.login(token);

function execute(interaction, command, args) {

    if (typeof client.commands.get(command) === 'undefined') {
        return;
    }

    interaction = new Interaction(interaction);

    if (client.commands.get(command).operatorOnly && !operators.includes(id)) {
        interaction.send("You don't have sufficient permission to use this command");
        return;
    }

    client.commands.get(command).execute(interaction, command, args, client);

}