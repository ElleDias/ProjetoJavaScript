/*
.lenght() => tamanho
---------------------------------------------------------------------------------------
let fruta = [
 "Abacate", "Abacaxi", "Acerola", "Ameixa",
   "Banana",
  "Cajá Manga", "Carambola", "Caju", "Ciriguela", "Cupuaçu",
 "Goiaba", "Graviola",
 "Ingá-Cipó",
  "Maçã", "Mangostim", "Maracujá", "Morango",
  "Pitomba",
 "Romã",
 "Uva"
 ];
console.log(frutas)
---------------------------------------------------------------------------------------
let numeros = [70, 100, 120, 1000];
numeros.reverse();  isso faz a ordem mudar a ordem (reverter ela)
console.log(numeros
---------------------------------------------------------------------------------------

let nomes = ["Valdemir", "Edson", "Anna", "Ana"];
//.push() => adiciona um elemento no final do nosso array
nomes.push("Matheus");

//unshift() => adiciona um elemento no inicio do nosso array
nomes.unshift("Sophia");

//.pop() => remover no final
nomes.pop();

//.splice() => para remover o ultimo elemento 
nomes.splice();

//.shift() => para remover o elemento inicial
nomes.shift();

//para exibir os nomes finais
console.log(nomes);
----------------------------------------------------------------------------------------

let nomeAnimais = ["julie", "meg", "mel", "mel"]
//.include() => se existe no array, se existir retornara true
console.log(nomeAnimais.includes("Bob"))

----------------------------------------------------------------------------------------

let valores = [30, 55, 70, 99]
//quero os valores maiores que 50
valores.filter(num => num > 50);
const maiores = valores.filter(num => num > 50)
console.log(maiores)

----------------------------------------------------------------------------------------

//.map() percorre e modifica 

let alunos = [
    {nome: "Aurora", nota: 8},
    {nome: "Ester", nota: 8},
    {nome: "Rahab", nota: 8}
];
//lista de nomes:
let AlunoNomes = alunos.map(aluno => aluno.nome);

//lista de nomes:
let AlunoNomesDois = alunos.map(function(aluno){
    return aluno.nome;
})

//funcao:
let alunoNotas = alunos.map(aluno => aluno.nota);

console.log(AlunoNomes, alunoNotas);

let mensagem = nomes.map(itemdoArraysNomes => `ola, ${itemdoArraysNomes}`);
console.log(mensagem)

let nomes = ["caetano", "rubi", "rose"]

let inicialNomes = nomes.map(element => element(0));

*/
let emails = [
    "danielle00@gmail.com", "lindinha@gmail.com", "fafa@gmail.com"
]
let dominios = emails.map(element => element)
console.log(dominios)