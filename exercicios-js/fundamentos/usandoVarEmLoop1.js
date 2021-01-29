for (var i = 0; i < 10; i++) {//Estrutura de repetição
    console.log(i);
};

//Não acontece nenhum erro por que var é de escopo global
console.log('i -', i);//i = 10 por que ele sai do laço quando chega a 10