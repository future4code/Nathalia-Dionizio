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

    console.log("Bem vindo(a) ao jogo de Blackjack!") // imprimir no console "Bem vindo ao jogo de Blackjack!"

    let jogo = confirm(`Deseja jogar?`)
    
    if(jogo) { 
    console.log("Inicio da rodada")
    }
    else {
       console.log(`o jogo acabou`)      
    }
    // 8  e 9         
    
    let cartaUsuario1 = comprarCarta()
    let cartaUsuario2 =  comprarCarta() 
    let cartaComputador1 = comprarCarta()
    let cartaComputador2 =  comprarCarta()
    
    if(cartaUsuario1.texto && cartaUsuario2.texto === "A") {
       cartaUsuario1 = comprarCarta()
       cartaUsuario2 = comprarCarta()
    }
    else {
       cartaComputador1.texto && cartaComputador2.texto === "A" 
          cartaComputador1 = comprarCarta()
          cartaComputador2 = comprarCarta()
       }
    
    console.log(`Usuario suas cartas são: ${cartaUsuario1.texto} ${cartaUsuario2.texto} pontuação : ${cartaUsuario1.valor + cartaUsuario2.valor}
    A carta revelada do computador é ${cartaComputador1.texto} Deseja comprar mais cartas?`) 
    
    //10
    
    
    
    
    
    
    
    
    
    //7
    
    
    //if(resultadoUsuario > resultadoComputador) {
      // console.log("Usuário ganhou")
    //}
    //else if(resultadoUsuario < resultadoComputador) {
      // console.log("Computador ganhou")
    //}
    //else {
    //   console.log("Empate")
    //}
    
    
    
    