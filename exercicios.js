// EXERCÍCIO 01
function inverteArray(array) {
  
}


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let numerosParesElevado = []
for(let i = 0; i < array.length; i ++) {
  if(array[i] % 2 === 0 ){
    numerosParesElevado.push(array[i]**2)
  }
} return numerosParesElevado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let pares = []
  for(let i = 0; i < array.length; i ++) {
  if(array[i] % 2 === 0 ) {
    pares.push(array[i])
  }
  } return pares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
 let maiorNumero = []
 for(let i = 0; i < array.length; i ++) {
  if(array[i] > maiorNumero) {
    maiorNumero = array[i]
  }
  } return maiorNumero
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let quantElementos = 0
 for(let i = 0; i < array.length; i ++) {
  if(array[i] = array.length) {
    quantElementos = array[i]
  }
  } return quantElementos
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true] 
  return respostas 
} 

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numero = 3
  let pares = []
  for(let i = 0; i < n; i ++) {
    pares.push(i*2)
  } return pares
} retornaNNumerosPares(numero)

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

 if(a === b && b === c && c === a){
  return 'Equilátero'
 }else if(a !== b && b !== c && c !== a) {
  return 'Escaleno'
 } else{
  return 'Isósceles'
 }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
 const comparacaoDeNumeros = {
  maiorNumero: 15,
  maiorDivisivelPorMenor: true,
  diferenca: 0
 }
   if(num1 > num2) {
  comparacaoDeNumeros.maiorNumero = num1
  comparacaoDeNumeros.maiorDivisivelPorMenor = (num1 % num2 ===0)
  comparacaoDeNumeros.diferenca = (num1 - num2)
  }else if (num2 > num1) {
  comparacaoDeNumeros.maiorNumero = num2
  comparacaoDeNumeros.maiorDivisivelPorMenor = (num2 % num1 ===0)
  comparacaoDeNumeros.diferenca = (num2 - num1)
 
 } return comparacaoDeNumeros
   
 }

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let arrayOriginal = [1 ,2 , 3, 4, 5, 6, 7]
  let novoArray = []
  
  for(let i = 0; i < arrayOriginal.length; i ++) {  
   if(array[i] > arrayOriginal) {
     novoArray.push = array[i]
   }else if(array[i] - 1 > arrayOriginal) {
     novoArray.push = array[i]
 
  }} return novoArray

}
       

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
const filmeFavorito1 = {
nome: "O Diabo Veste Prada",
ano: 2006,
diretor: "David Frankel",
atores: ["Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci"]

} 
return(`nome: ${filmeFavorito1.nome}, ano: ${filmeFavorito1.ano}, diretor: ${filmeFavorito1.diretor}, atores: ${filmeFavorito1.atores}`)
} 

// EXERCÍCIO 13

const filmeFavorito1 = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci"]
  } 
function imprimeChamada(filmeFavorito1) { 
    const immprimir = [imprimeChamada]

   return(`Venha assistir ao filme ${filmeFavorito1.nome}, de ${filmeFavorito1.ano}, dirigido por ${filmeFavorito1.diretor} e estrelado por ${filmeFavorito1.atores}.`)

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
let resultados = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1+lado2),
  area: (lado1 * lado2)
}
  return(`largura: ${resultados.largura}, altura:${resultados.altura}, perimetro:${resultados.perimetro}, area:${resultados.area}`)
} 


// EXERCÍCIO 15
function anonimizaPessoa() {
  const pessoa = {
    nome: "anonima",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
  }
   return(`${pessoa.nome}, ${pessoa.idade}, ${pessoa.email}, ${pessoa.endereco}`)


}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
 const pessoas =  [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]
  const maioresDeDezoito = pessoas.filter((numero) => {
   return numero.idade >= 18

  
  })
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const pessoas =  [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]
  const menoresDeDezoito = pessoas.filter((numero) => {
   return numero.idade < 18
  })
}


// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
const array = [1, 2, 3, 4, 5, 6] 
for(let i = 0; i < array.length; i ++) {
  if(array.length * 2){
    array.push
  }
} return array

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
