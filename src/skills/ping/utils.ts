import axios from 'axios';
import { getRandom } from '../../utils';

export const getCurrency = async (): Promise<number> => {
    const currencyAPI = axios.create({ baseURL: process.env.CURRENCY_API });
    try {
        const { data }: { data: { USD_BRL: number } } = await currencyAPI.get(
            `/convert?q=USD_BRL&compact=ultra&apiKey=${process.env.CURRENCY_API_KEY}`,
        );
        return data.USD_BRL;
    } catch (err) {
        console.log(err.message);
    }
};

export const getAnswer = async () => {
    const curr = await getCurrency();
    const baseStr = `Dólar ${curr}\n`;
    switch (true) {
        case curr < 4:
            return `${baseStr} Gran is sad ;(`;
        default:
            return `${baseStr} ${randomStrings[getRandom(0, randomStrings.length - 1)]}`;
    }
};

const randomStrings = [
    'Já dá pra emendar uma viagem pra BRUSQUÉ em ;))',
    `MODA FOCA RICH BITCH ̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ `,
    'California girls ༼ つ ◕_◕ ༽つ',
    'PC 20K INCOMING??',
    'Vamo de importação? ;)',
    'Luise requer produtos coreanos..........',
];
