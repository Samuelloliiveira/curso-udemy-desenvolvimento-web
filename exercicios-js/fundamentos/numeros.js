const peso1 = 1.2;
const peso2 =  Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avalicao1 = 9.871;
const avalicao2 = 6.871;

const total = avalicao1 * peso1 + avalicao2 * peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));
console.log(media.toString(2));

console.log(typeof media);

console.log(typeof Number); //Number com N maiúsculo é uma função
console.log(typeof number); //com n minúsculo é o tipo do dado
