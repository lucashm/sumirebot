import { Client } from 'discord.js';
import { getAnswer } from './utils';

const keywords = ['dolar', 'usd', '$'];

export default (client: Client): void => {
    client.on('message', async msg => {
        if (keywords.some(keyword => msg.content.includes(keyword))) {
            const answer = await getAnswer();
            msg.reply(answer);
        }
    });
};
