//ARMAZENANDO FUNÇÃO EM UMA VARIÁVEL
const imprimirSona = function (a,b) {//Usando função anonima (explico em anotações)
console.log(a + b);
};

imprimirSona(2,3);

//Armazenando uma função arrow em uma variável
const soma = (a,b) => {//Função arrow é uma forma reduzida de função
    return a + b;
};

console.log(soma(2,3));

//Retorno implícito - Retorna sem usar a palavra return
const subtracao = (a,b) => a - b;
console.log(subtracao(5,5));