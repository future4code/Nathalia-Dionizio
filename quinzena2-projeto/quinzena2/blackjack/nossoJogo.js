/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    // 1 2 3 e 4

console.log("Bem vindo(a) ao jogo de Blackjack!") // imprimir no console "Bem vindo ao jogo de Blackjack!"

let jogo = confirm(`Deseja jogar?`)

if(jogo) {            // enviar um confirm para perguntar o usuario se deseja jogar uma nova rodada
console.log("Inicio da rodada")
}
else {
   console.log(`o jogo acabou`)                 // se não quiser iniciar nova jogada imprimi "o jogo acabou"
}

//5 e 6            // declarar variaveis e comprar cartas - mostrar no console as cartas e pontuação

const cartaUsuario1 = comprarCarta()
const cartaUsuario2 =  comprarCarta() 
const cartaComputador1 = comprarCarta()
const cartaComputador2 =  comprarCarta()

console.log(`Usuario - cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${cartaUsuario1.valor + cartaUsuario2.valor}
Computador - cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${cartaComputador1.valor + cartaComputador2.valor}`) // imprimir o texto da carta e imprimir valor da carta

//7

const resultadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
const resultadoComputador = cartaComputador1.valor + cartaComputador2.valor

if(resultadoUsuario > resultadoComputador) {
   console.log("Usuário ganhou")
}
else if(resultadoUsuario < resultadoComputador) {
   console.log("Computador ganhou")
}
else {
   console.log("Empate")
}



