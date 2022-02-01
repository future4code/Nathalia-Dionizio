function calcularRetangulo() {
   let altura = prompt("Informe a altura")
   let largura = prompt("Informe a largura")
   let areaRetangulo = altura * largura
   console.log(areaRetangulo)
}
//calcularRetangulo()


function calcularIdade() {
   let anoAtual = Number(prompt("Informe o ano atual"))
   let anoNascimento = Number(prompt("Informe o ano nascimento"))
   let idade = anoAtual - anoNascimento
   console.log(idade)
}
//calcularIdade()

function show(custo, valor) {
   let quantidade = custo / valor
   return quantidade
}
//console.log ( show(25, 1500) )


function imprimirDados(){
   let nome = prompt("Informe a altura")
   let idade = prompt("Informe a largura")
   let email = prompt("Informe a largura")

   console.log("Meu é nome "+ nome+ ", minha idade é "+idade+"e meu email é "+email)

   console.log(`Meu nome é ${nome}, minha idade é ${idade}, e meu email é ${email}`)
}
// imprimirDados()

function cores3(){
   let cores = []
   let cor1 = prompt("Informe a altura")
   let cor2 = prompt("Informe a largura")
   let cor3 = prompt("Informe a largura")
   cores.push(cor1, cor2, cor3)
   console.log(cores)
}
// cores3()

const nomes = ["Tayanne", "Matheus", "Clarice", "Jess", "Juan", "Andrea", "Samyr", "Matheus"]

const firstElement = (array) => {
   return array[0]
}
// console.log(firstElement(nomes))

const lastElement = (array) => {
   return array[array.length -1]
}
// console.log(lastElement(nomes))

const trocados = (array) => {
   const first = array[0]
   const last = array[array.length -1]
   
   array[0] = last
   array[array.length -1] = first

   return array
}
// console.log ( trocados(nomes) )

function compararString(string1, string2){
   return string1.toUpperCase() === string2.toUpperCase()
}

// console.log ( compararString("TAYANNE", "tayanne") )



/* 
   MAP E FILTER
*/



// EXERCICIO 01
const movies = [ 
   { "id": 70111470, "title": "Die Hard", "rating": 4.0 },
   { "id": 654356453, "title": "Bad Boys", "rating": 5.0 },
   { "id": 65432445,  "title": "The Chamber", "rating": 4.0 },
   { "id": 675465, "title": "Fracture", "rating": 5.0 }
]

const filmes = movies.filter(item => item.rating === 5.0)
// console.log(filmes)


// EXERCICIO 02
const pets = [ 
   { nome: "Lupin", raca: "Salsicha"}, 
   { nome: "Polly", raca: "Lhasa Apso"}, 
   { nome: "Madame", raca: "Poodle"}, 
   { nome: "Quentinho", raca: "Salsicha"}, 
   { nome: "Fluffy", raca: "Poodle"}, 
   { nome: "Caramelo", raca: "Vira-lata"} 
]

//criar um novo array apenas com o nome dos dogs
const nomesPet = pets.map((item, index, array) => {
   return item.nome
})
// console.log(nomesPet)

//crie um novo array apenas com os salsichas
const salsichas = pets.filter((item) => item.raca.includes('Salsicha'))
.map((item, index, array) => {
   return item.nome
})
// console.log(salsichas)

const poodles = pets.filter(dog => dog.raca === 'Poodle')
.map(dog => `Voce ganhou um desconto de 10% para o tosar ${dog.nome}`)
// console.log(poodles)

// EXERCICIO 03
const produtos = [ 
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 }, 
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 }, 
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 }, 
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 }, 
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 }, 
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 }, 
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 }, 
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 }, 
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 }, 
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 } 
]

const nomeProduto = produtos.map(item => item.nome)
// console.log(nomeProduto)

//um novo array com nome e preco de cada item
//APLICANDO 5% DE DESCONTO NO PRECO
const produtosPromocao = produtos.map(item => {
   let desconto = item.preco - 5 /100
   let novoPreco = item.preco - desconto
   return  {
      nome: "Tayanne",
      preco: novoPreco
   }
})
// console.log(produtosPromocao)

const bebidas = produtos.filter(item => item.categoria.includes('Bebidas'))
// console.log(bebidas)


// EXERCICIO 04
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]
// criar um novo array dos NOMES dospokemons EM ORDEM ALFABETICA
const pokeOrdenados = pokemons.map(item=> item.nome)
.sort()

// console.log(pokeOrdenados)

//um novo array com os TIPOS, sem repeticao
const noRep = new Set()

pokemons.map(item => {
   return noRep.add(item.tipo)
})
// console.log(noRep)

//PESQUISEM 
//OBJETO new Set()
//OBJETO new Map()