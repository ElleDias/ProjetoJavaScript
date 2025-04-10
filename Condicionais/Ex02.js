var prompt = require('prompt-sync')();

let idade = Number(prompt("Qual a sua idade:"));

if ( idade >=18){
console.log("Voce podera tirar a carteira");
}else if(idade < 18){
    console.log("Voce nao podera tirar a carteira");
}else{
    console.log("invalido");
}