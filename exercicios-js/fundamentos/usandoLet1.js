var numero = 1;

{
    let numero = 2; //let tem o escopo dentro de um bloco mesmo não sendo uma função
    console.log('dentro -', numero);//resultado é 2
}

console.log('fora -', numero);//O resultado é 1 porquê let tem escopo de bloco

//obs: Mesmo mudando var para let o resultado ainda seria diferente já que as duas estão em blocos diferentes

/* PRA RESALTAR:
    Variáveis declaradas com var tem escopo global e de função.
        //        //      // let //    //  global, função e de bloco.
*/
