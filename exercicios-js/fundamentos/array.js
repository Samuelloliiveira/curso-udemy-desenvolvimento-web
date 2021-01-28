//Array é uma forma de agrupar elementros(valores)
//Array suporta multiplos valores, mas não é uma boa pratica
//Array é dinâmico

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //Não existe pois a contagem dos valores começa do 0, resulta em indefinido

valores[4] = 10; //Atribui um valor para o indice 4
valores[10] = 10; //Mostra que tem itens vazios até o indice 10
console.log(valores);

console.log(valores.length); // length mostra quantos elementos tem1

valores.push({id:3}, false, null, 'texte');//push adiciona novos elementos num array

console.log(valores.pop()); //A função pop tira o ultimo elemento do array

delete valores[0]; //Apaga um valor presente no indice passado
console.log(valores);

console.log(typeof valores); //Em JS array é um objeto