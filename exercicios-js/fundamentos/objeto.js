//Objeto é uma coleção de chave é valor
//Você tem um nome indentificador e passa um valor para ele
//Um objeto pode ter outros objetos dentro dele

//OBS: Aqui a chave e valor foi feita tanto dentro quando fora do objeto
//OBS1: Não é a mesma coisa que um JSON


//Criação literal de objeto
const prod1 = {
    outroNome: 'Samuel',
    idade: 23,
    //Objeto dentro de um objeto
    obj: {
        numero: 1,
        maisUmObjeto: {
            //Vários objetos dentro de um objeto
        }
    }
};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.98;
prod1['Desconto Legal'] = 0.40;//Não é uma boa pratica nomes com espaço


console.log(prod1); 

//Para efeito de comparação
'{"nome": "Camisa Polo", "Preco": 79.90}' // JSON

//Reforçando. Objeto não é a mesma coisa que JSON
//É possivel de um objeto gerar um JSON!