// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')
  console.log(Number(num1)*Number(num2))
}
// Exercício 2
function imprimeIdade() {
 var anoAtual = prompt('Digite o ano atual')
 var dataNascimento = prompt('Digite sua data de nacimento')          
console.log(anoAtual - dataNascimento)

}

// Exercício 3
function calculaIMC() {
var peso = prompt('Qual o seu peso corporal?')
var altura = prompt('Qual a sua altura?')
console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
const nome = prompt("Digite seu nome")
const idade = Number(prompt("Digite sua idade"))
const email = prompt("Digite seu e-mail")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Primeira cor")
  const cor2 = prompt("Segunda cor")
  const cor3 = prompt("Terceira cor")
  const arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
const palavra = prompt("Escreva uma palavra aleatoria")
const palavraMaiuscula = palavra.toUpperCase()
console.log(palavraMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
const custoEspetaculo = prompt("Qual o custo do espetaculo?")
const valorCadaIngresso = prompt("Qual o valor de cada ingresso?")
const quantosIngressosPrecisaVender = custoEspetaculo / valorCadaIngresso
console.log(quantosIngressosPrecisaVender)
}
3
// Exercício 8
function checaStringsMesmoTamanho() {
const fruta = prompt("Digite nome de uma fruta")                        
const carro = prompt("digite um nome de carro")
const tamanho = fruta.length == carro.length
console.log(tamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
const cor1 = prompt("Digite uma cor")
const cor2 = prompt("Digite outra cor")                
const igual = cor1.toUpperCase() == cor2.toUpperCase()
console.log(igual) 
}

// Exercício 10
function checaRenovacaoRG() {
const anoAtual = prompt("Digite o ano atual")
const anonascimento = prompt("Digite ano de nascimento")
const emissaoId = prompt("Digite emissão da carteira de identidade")
const idade = anoAtual - anonascimento
const tempoEmissaoId = anoAtual - emissaoId
console.log((idade<=20&&tempoEmissaoId>=5)||(idade>20&&idade<=50&&tempoEmissaoId>=10)||(idade>50&&tempoEmissaoId>=15))
}

// Exercício 11
function checaAnoBissexto() {
const umAno = Number(prompt("Digite um ano"))
const quatrocentos = (umAno%400===0)
const quatro = (umAno%4===0)
const cem = (umAno%100!==0)
console.log(quatro && cem || quatrocentos)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
const idade = prompt("Você tem mais de 18 anos?")
const ensMedio = prompt("Você possui ensino medio?")
const hora = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
console.log(idade =="sim" && ensMedio =="sim" && hora =="sim")

}