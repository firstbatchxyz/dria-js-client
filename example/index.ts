import { Dria } from "dria";

const apiKey = process.env.DRIA_API_KEY;
const contractId = "-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0";
console.log(`Using contract: https://dria.co/knowledge/${contractId}`);
const dria = new Dria({ apiKey, contractId });

const question = "What is a union type?";
console.time(question);
const res = await dria.search(question);
console.timeEnd(question);

console.log();
console.log(res[0].metadata);
