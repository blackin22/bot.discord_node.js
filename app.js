const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./comandos/`);

['command', 'event'].forEach(x => require(`./handlers/${x}`)(client));

client.login('token-do-bot')
