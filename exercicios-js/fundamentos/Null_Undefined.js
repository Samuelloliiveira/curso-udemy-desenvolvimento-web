//PASSANDO VALOR POR REFERÊNCIA

const a = {name:'Teste'};//Nesse caso a const tem o endereço do objeto e não seu conteúdo
console.log(a);

const b = a; // b vai receber o mesmo endereço de a na memória
console.log(b);

b.name = 'Opa';

console.log(a);// Percebemos que ao rodar a const a tbm foi alterada para Opa

//Essa mudança acontece por que a e b apontam para o mesmo espaço na memória, mudando um, muda o outro

/////////////////////////////////////////////////

//CÓPIA POR VALOR

//Quando é tipo primitivo é feito uma cópia por valor
//Quando é um objeto é feito por referência

let c = 3;
console.log(3);

let d = c;
console.log(d);
d++;// ++ incrementa uma unidade ao valor da variável d
console.log(d);

////////////////////// TABALHANDO COM NUM E UNDEFINED ///////////////////////////////

let valor //não inicializada = undefined
console.log(valor);
//console.log(valor2); //Valor not defined (não declarado)

//null = ausência de valor
//obs: Ela foi declarada, mas não aponta pra nenhum local de memória
valor = null; //null não aponta pra nenhum espaço na memória que contenha um valor

//obs: Não é uma boa pratica apontar uma variável para undefined

//console.log(valor.toString());//Gera um erro porquê não se pode ler uma propriedade de null


const produto = {};
console.log(produto.preco);//Gera undefined por que preco não esta definido
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite atrivuir undefined
console.log(!!produto.preco);
//delete produto.preco; //Pra o objeto voltar a ser vázio
console.log(produto);

produto.preco = null //sem preço
console.log(!!produto.preco);
console.log(produto);