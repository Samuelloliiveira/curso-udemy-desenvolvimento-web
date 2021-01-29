//Quando uma variável é declarada com var acontece o hoisting(explico nas anotações o que é)
console.log('a -', a);
var a = 2; //No caso aqui acontece o içamento e não gera erro como em outras linguagens
console.log('a -', a);

//Mesmo colocando o código acima dentro de uma função o efeito seria o mesmo
//obs: Não é uma boa pratica, comece declarando suas variáveis

//////////////////////////////////////////

console.log('b =', b);
let b = 2;
console.log('b =', b);//Gera um erro por que com let não gera o efeito hoisting
