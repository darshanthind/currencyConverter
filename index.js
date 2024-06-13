import 'dotenv/config';
import { currency } from "./fetch.js";
async function CurrencyConverter(base, convert, money) {
    let data = await currency();

    for (let i in data.results) {
        if (i === convert) {
            return ((data.results[i] * money).toFixed(2));
        }
    }
}




export default CurrencyConverter;
