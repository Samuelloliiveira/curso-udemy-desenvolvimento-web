var numero = 1;

{
    var numero = 2;
    console.log('dentro -', numero);
}

console.log('fora -', numero);
//O número 2 é impresso duas vezes por que estão no mesmo escopo
//Se tivesse dentro de uma função o escopo seria diferente, logo o resultado também
