import Discord from 'discord.js';
import skills from './skills';

require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

const connect = () => {
    client.login(process.env.BOT_TOKEN);
    skills.map(skill => skill(client));
};

connect();