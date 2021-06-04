//EXERCICIO DE INTERPRETAÇÃO DE CODIGO

//1)a) O que vai ser impresso no console?
// console.log -> matheus nachtergaele
// console.log -> imprimi todo o elenco dentro do array
// console.log -> 41 (Imprimi numero de caracteres do elenco menos o ultimo)
// console.log -> globo, horario: 14hr

//2)a) O que vai ser impresso no console?
// connsole.log JUCA
// connsole.log JUBA (substitui juca por juba)
// connsole.log GOTO (troca a por o)

//2)B) trocar o nome do objeto

//3)a) O que vai ser impresso no console?
// falso
// indefined

//3)b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// backender está definido como falso e altura não foi definida

//                EXERCICIOS DE ESCRITA DE CODIGO

//1)a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const dados = {
nome: "Nathalia",
sobre:["nati", "tata", "nana"]
}
console.log(`Eu sou ${dados.nome}, mas pode me chamar de: ${dados.sobre[0]}, ${dados.sobre[1]} ou ${dados.sobre[2]}`)


//1)b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto




//           voltar pra tentar fazer






//2a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoa1 = {
    nome: "Fabiana",
    idade: 25,
    profissao: "Médica",
}
const pessoa2 = {
    nome: "Zé",
    idade: 27,
    profissao: "Professor", 
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// valor de nome    o número de caracteres do valor nome   o valor de idade   o valor de profissão     o número de caracteres do valor profissao

function imprimirPessoas(pessoa1, pessoa2) {
    const retornarArray = [imprimirPessoas]
}
console.log(`${pessoa1.nome}, numero de caracteres do nome: ${pessoa1.nome.length}, idade: ${pessoa1.idade}; profissão: ${pessoa1.profissao}, numero de caracteres de profissão: ${pessoa1.profissao.length}, ${pessoa2.nome}, numero de caracteres do nome: ${pessoa2.nome.length}, idade: ${pessoa2.idade}; profissão: ${pessoa2.profissao}, numero de caracteres da profissão: ${pessoa2.profissao.length}`)

//3A)Crie uma variável de escopo global que guarde um array vazio chamada carrinho



// voltar para fazer



//b)Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome e disponibilidade(boolean) - devem começar como true

const fruta1 = {
    nome: "maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "pêra",
    disponibilidade: true
}

const fruta3 = {
    nome: "mamão",
    disponibilidade: true
}

//C)Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

function imprimirFrutas (fruta1, fruta2) {
const carrinho = [imprimirFrutas]
}
console.log(`Carrinho: ${fruta1.nome}, ${fruta2.nome}, ${fruta3.nome}`)