//Template String ajuda na hora de concatenar e deixar o código mais orgaziado
const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!'; //Forma normal de concatenar

//Usando Template String
//Aqui ele está interpolando, mas não é necessário.
const template = `
    Olá
    ${nome}!
`;

console.log(concatenacao, template);

//Também podemos colocar expressões dentro do template string
console.log(`1 + 1 = ${1 + 1}`);

//arrow function 
const up = texto => texto.toUpperCase(); //Converte o texto para maiúsculo
//Dentro de Template String podemos chamar uma função
console.log(`Ei... ${up('cuidado')}!`);