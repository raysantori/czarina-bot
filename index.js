require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [
        Partials.Message,
        Partials.GuildMember,
        Partials.Reaction,
        Partials.User,
        Partials.Channel,
    ],
});


client.on('ready', () => {
    console.log(`${client.user.tag} está online!`);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;

    if(message.content === `.ping`) 
        message.channel.send(`Pong! ${client.ws.ping}ms 🏓`);

    if(message.content === `.oi`) 
        message.channel.send(`Olá! 😎👍`);
});

client.login(process.env.TOKEN);