const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { token, clientId, guildId} = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);
rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });

rest.get(Routes.applicationCommands(clientId))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationCommands(clientId)}/${command.id}`
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });