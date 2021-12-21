// Exercicio 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

//Primeiro comando

let resultado = bool1 && bool2
console.log("a.", resultado)

//a = false, Para o operador && todos os boleanos devem ser verdadeiros

//Segundo comando

let resultado2 = bool1 && bool2 && bool3
console.log("b.", resultado2)

//b= false, Para o operador && todos os boleanos devem ser verdadeiros bool3 = !bool2 (boleano false)

//Terceiro comando

let resultado3 = !resultado2 && (bool1 || bool2)
console.log("c.", resultado3)

//c= true
// let resultado3 = true && true C= true

//Quarto comando (não entendi) D = INDEFINIDO????

//Exercicio 2

/*let primeiroNumero = prompt("digite um numero!")
let segundoNumero = prompt("digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma)*/

//Solicitou que atribuisse valor numerico (já que estamos trabalhando com boleanos)

//Exercicio 3

//Usaria number antes do prompt para atribuir como valor.

//Exercicios de escrita de código

//1 a)Pergunte a idade do usuário = 25 anos

let idadeDoUsuario = Number(prompt("Qual a sua idade?"))
console.log(idadeDoUsuario)

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga = 26 anos

let idadeMelhorAmiga = Number(prompt("Qual a idade da melhor amiga?"))
console.log(idadeMelhorAmiga)

//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

let diferenca = idadeDoUsuario - idadeMelhorAmiga
console.log(diferenca)

let minhaIdadeEmaior = idadeDoUsuario > idadeMelhorAmiga
console.log(minhaIdadeEmaior)

// 25 - 26 = -1 (false)

// 2 a) Peça ao usuário que insira um número par

let numeroPar = Number(prompt("Insira um numero par"))
console.log(numeroPar)

//b) Imprima na console o resto da divisão desse número por 2

const restoDaDivisao = numeroPar / 2
console.log(restoDaDivisao)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Como não existe resto de divisão, informa o número do quociente.

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//O resultado vem com o resto da divisão

//3 Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
//a) A idade do usuário em meses b) A idade do usuário em dias c) A idade do usuário em horas

/*let idade = Number(prompt("Qual a sua idade?", "Exemplo 18 anos"))
console.log = idade

let idadeMeses = (idade * 12)
console.log(idadeMeses)

let idadeDias = (idade * 365)
console.log(idadeDias)

let idadeHoras = (idade * 8760)
console.log(idadeHoras)*/

//4 

let numeros1 = Number(prompt("digite um numero",))
console.log(numeros1)

let numeros2 = Number(prompt("digite um outro numero"))
console.log(numeros2)

let nummaior = numeros1 > numeros2
console.log(nummaior)

let menor2 = numeros1 = numeros2
console.log(menor2)

let div1 = numeros1 | numeros2
console.log(div1)

let div2 = numeros2 | numeros1
console.log(div2)




















