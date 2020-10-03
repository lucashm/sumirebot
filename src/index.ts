import Discord from 'discord.js';
import skills from './skills';

require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const connect = () => {
    client.login(process.env.BOT_TOKEN);
    skills.map(skill => skill(client));
};

connect();