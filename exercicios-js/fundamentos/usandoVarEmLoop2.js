var funcs = [];

for (var i = 0; i < 10; i++){
    /*O método push() adiciona um ou mais elementos ao final de um array 
    e retorna o novo comprimento desse array*/
    funcs.push(function(){
        console.log(i);
    });
};

funcs[2]();
funcs[8]();

/*O resultado vai ser sempre o mesmo por que var não tem escopo de função
e dentro do for temos uma função */