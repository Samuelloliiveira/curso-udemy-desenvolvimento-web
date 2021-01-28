//Em JS vários tipos podem ser convertidos para verdadeiro ou falso (boolean)

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//No js além do false/true você pode usar 1 para representar boolean
isAtivo = 1;

//Como transformar um valor em boolean

/*
    ! Nega
    !! Volta ao original (Desnega kkkk)
*/

console.log(!!isAtivo);

//Tipos verdadeiros no contexto
//Números inteiros são verdadeiros com exceção do 0
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//Tipos falsos no contexto
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(!!('' || null || 0 || ' ')); //Essa expressão mostra o unico valor verdadeiro. Usando OU

//Exemplo de expressão OU
// Como o nome está vázio ele dá falso e o resultado é Desconhecido
let nome = '';
console.log(nome || 'Desconhecido!');