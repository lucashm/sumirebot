import { Client } from 'discord.js';

export default (client: Client): void => {
    client.on('message', async msg => {
        if (msg.content.includes('ping')) {
            msg.reply('Pong!');
        }
    });
};
