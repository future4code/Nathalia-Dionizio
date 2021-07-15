//1)a) será impresso respectivamente console.log(10) console.log(50)
//b) indefined

//2)A) Tolowercase = transforma todas as  letras das strings em minuscula
//b) console.log(eu.)   console.log(ii.)  console.log(iii.)


//EXERCICIOS DE ESCRITA DE CÓDIGO

//1A) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
 
const dados = {
nome: "Nathalia",
idade: 25,
moro: "Belo Horizonte",
sou: "estudante",
}
console.log(`Eu sou ${dados.nome}, tenho ${dados.idade} anos, moro em ${dados.moro} e sou ${dados.sou}`)


//B)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou[nome], tenho [anos], moro em [endereço] e sou [profissão].

const nome = prompt("Digite seu nome")
const idade = prompt("Digite sua idade")
const cidade = prompt("Digite sua cidade")
const profissao = prompt("Digite sua profissão")
function imprimirDados(nome, idade, cidade, profissao){
}
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

//2 a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))
function imprimirSoma(num1, num2){
}
console.log(num1 + num2)

//2B) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))
function imprimirMaiorOuIgual(num1, num2){
}
console.log(num1 >= num2)

//2C)Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// NÃO CONSEGUI FAZER

//2D)Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.

const fruta = prompt("Digite uma fruta")
function imprimirFruta(fruta) {   
}
console.log(fruta.length)
console.log(fruta.toUpperCase())

//3) Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, 
//peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
//Por fim, mostre no console o resultado das operações:

const num1 = Number(prompt("digite um número"))
const num2 = Number(prompt("digite outro número"))
function imprimirNumeros(num1, num2) {   
}
console.log(`Números inseridos: ${num1} e ${num2}`)
console.log("Soma:", num1 + num2)
console.log("Diferença:", num1 !== num2)
console.log("Multiplicação:", num1 * num2)
console.log("Divisão:", num1 / num2)
