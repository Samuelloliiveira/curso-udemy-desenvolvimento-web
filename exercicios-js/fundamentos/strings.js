//string é um conjunto de caracteres

const escola = "Cod3r"

//charAt mostra o que tem no indice passado
console.log(escola.charAt(4));

//Se passar um indice acima do conteúdo ele mostra vázio

console.log(escola.charCodeAt(3));//Mostra o valor na tabela ascii

//Também pode mostrar em que possição o indice se encontra na palavra
console.log(escola.indexOf('3'));

console.log(escola.substring(1));//Mostra o resultado a partir do indice passado
console.log(escola.substring(0, 3));//Vai do indice 0 a 3 sem incluir o 3


//Concatenar
console.log('Escola '.concat(escola).concat("!")); /* + também pode ser usado para concatenar, mas se deve ter cuido
                                                    já que também é usado para expressões matemáticas*/

//Literal é um dado sem armazenar numa varíavel

console.log(escola.replace(3, 'e'));//replace significa substituir
console.log(escola.replace(/\w/g, 'e')); //regex. Expressão regular

//Pegando string e transformando em Arrey
console.log('Ana,Samuel,Marco,Lucas'.split(','));//split gera um array a partir do que for passado como quebra de linha
