// Exercícios de interpretação de código

//1) nome e apelido de cada um.

//2) um novo array em cima do array A

//3) léticia Chijo


// EXERCICIOS DE ESCRITA DE CÓDIGO


//1)

const pets = [{nome : "Lupin", raca : "salsicha"}, {nome : "Polly", raca : "Lhasa Apso"}, {nome : "Madame", raca : "Poodle"}, {nome : "Quentinho", raca : "salsicha"}, {nome : "Fluffy", raca : "Poodle"}, {nome : "caramelo", raca : "Vira-lata"}, ]
console.log(pets)


//A) 

const filtrarNomeDosDogs = (pets) => {
    return pets.nome
}

const dogsFiltrados = pets.filter(filtrarNomeDosDogs)
console.log(filtrarNomeDosDogs)

const nomesDogsFiltrados = dogsFiltrados.map((pets) => {
    return pets.nome
})
console.log(nomesDogsFiltrados)

//B)

const filtrarRacaDosDogs = (pets) => {
    return pets.raca === "salsicha"
  }
  
  const racaFiltrada = pets.filter(filtrarRacaDosDogs)
  console.log(filtrarRacaDosDogs)
  
  const racaDogsFiltrados = racaFiltrada.map((pets) => {
     return pets.raca
  })
  console.log(racaDogsFiltrados)

//C

const filtrarRacaDosDogs = (pets) => {
    return pets.raca === "Poodle"
  }
  
  const racaFiltrada = pets.filter(filtrarRacaDosDogs)
  console.log(filtrarRacaDosDogs)
  
  const racaDogsFiltrados = racaFiltrada.map((pets) => {
     return pets.nome
  })
  console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a`, racaDogsFiltrados)


//2)


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

 //A)

const filtrarNomeDeCadaItem = (produtos) => {
    return produtos.nome
  }
  
  const nomeItensFiltrar = produtos.filter(filtrarNomeDeCadaItem)
  console.log(nomeItensFiltrar)
  
  const nomeItensFiltrados = nomeItensFiltrar.map((produtos) => {
     return produtos.nome
  })
  console.log(nomeItensFiltrados)

//B)

//const filtrarNomePreco = (produtos) => {
  //  return produtos.preco === nome                                                  /// (((DUVIDAAAAAA)))
//}

//const precoFiltrado = produtos.filter(filtrarNomePreco)
//console.log(precoFiltrado)

//const nomePrecoFiltrados = precoFiltrado.map((produtos) => {
  //  return produtos.nome
//})
//console.log(nomePrecoFiltrados)

//C)

const filtrarNomeBebidas = (produtos) => {
  return produtos.categoria === "Bebidas"
}
  
const nomeBebidasFiltrar = produtos.filter(filtrarNomeBebidas)
  console.log(nomeBebidasFiltrar)                                        
  
  const nomeBebidasFiltradas = nomeBebidasFiltrar.map((produtos) => {
  return produtos.nome
  })
  console.log(nomeBebidasFiltradas)

//D)

//const filtrarNomeYpe = (produtos) => {
  //  return produtos.nome === "Ypê"
  //}
  
  //const nomeYpeFiltrar = produtos.filter(filtrarNomeYpe)                           /// (((DUVIDAAAAAA)))
  //console.log(filtrarNomeYpe)
  
 // const nomeYpeFiltradas = nomeYpeFiltrar.map((produtos) => {
  //return produtos.nome
 // })
  //console.log(nomeYpeFiltradas)


//E)    /// (((DUVIDAAAAAA)))


