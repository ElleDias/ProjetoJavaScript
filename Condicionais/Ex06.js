var prompt = require('prompt-sync')();

let dia = Number(prompt("Digite um numero do dia da semana: "));

switch(dia){
    case 1:
        console.log("o dia escolhido foi:Domingo")
        break;
        case 2:
        console.log("o dia escolhido foi:Segunda")
        break;
        case 3:
        console.log("o dia escolhido foi:Terça")
        break;
        case 4:
        console.log("o dia escolhido foi:Quarta")
        break;
        case 5:
        console.log("o dia escolhido foi:Quinta")
        break;
        case 6:
        console.log("o dia escolhido foi:Sexta")
        break;
        case 7:
        console.log("o dia escolhido foi:Sabado")
        break;
        case 8:
            console.log("o dia escolhido foi: INVALIDO")
            break;


}