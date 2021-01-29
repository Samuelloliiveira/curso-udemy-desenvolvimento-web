//Se tratando de var só tem dois escopo possíveis: Global ou Local

{{{{var sera = 'Será???'}}}}

console.log(sera);

//Escopo é o local onde aquela determinada variável é visível
//Uma variável com var fica visível fora do espoco

function teste() {
    /*Quando se declara uma variável dentro de uma função
    o escopo é somente dentro da função*/
    var local = 123;
    console.log(local);
}

teste();
console.log(local);//Variável não definida.

//Toda variável que está fora de uma função é global e está disponível no objeto window (ver anotações)
//Evitar construir aplicação com variáveis dentro do escopo global