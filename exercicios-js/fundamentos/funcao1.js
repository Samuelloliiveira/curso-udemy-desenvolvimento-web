//Função é uma subrotina usada em um programa

/*OBS:
    Uma função pode não receber nenhum parâmetro.
    Pode não retornar dados.
    Pode retornar ou não dados de saída.
    Pode receber dados de entrada.
*/

//FUNÇÃO SEM RETORNO 
function imprimirSona(a, b) {
    console.log(a + b);//Imprimindo a soma dos valores passados 
};

imprimirSona(2, 3);//Chamando e passando valores para a função
imprimirSona(2); //Pode passar aprenas um valor por que a linguagem é fracamente tipada
imprimirSona(2, 4, 5, 6, 7, 8); //Pode fazer isso também.
imprimirSona();//Pode não passar nada também.Nesses três ultimos casos é sempre bom fazer um tratamento

//FUNÇÃO COM RETORNO
function soma(a, b = 1) { //No caso de b está sendo definido um valor padrão
    return a + b; //Retornando o valor
};

console.log(soma(2, 3));
console.log(soma(2));//Vai imprimir 3 por que por padrão b = 1
console.log();//O resultado é NaN por que não teve tratamento, mas funciona.
