//                                                           EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO


//1A) Se o resto da divisão do número informado pelo usuario for = 0 "passou no teste" se não for = 0 "não passou no teste"

//1B) numeros em que divididos por 2 o resto da divisão seja = 0

//1c) numeros em que divididos por 2 o resto da divisão é diferente de 0


//2A) Para informar o preço das frutas conforme o perguntado pelo usuario

//2B) console.log = O preço da fruta, Maça é R$, 2,25

//2C) indefined ou default


//3A) solicita ao usuario um número

//3B) Para os dois: Essa mensagem é secreta.

//3C) Sim, porque quando se utiliza if para todo if deverá existir um else.




//                                                           EXERCICIOS DE ESCRITA DE CÓDIGO

//1A)B)C)


const podeDirigir = prompt("Pode dirigir?")
const idade = Number(prompt("Digite sua idade"))
if (idade >= 18) {
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir")
}

//2)

const turnoDeEstudo = prompt("Qual turno do dia você estuda? digite M se for matutino, V se for vespertino ou N para noturno")
if (turnoDeEstudo === "M") {
    console.log("Bom dia")
}
else if (turnoDeEstudo === "V") {
    console.log("Boa tarde")
}
else {
    console.log("Boa noite") 
}

//3)

const turnoDeEstudo = prompt("Qual turno do dia você estuda? digite M se for matutino, V se for vespertino ou N para noturno")
switch (turnoDeEstudo) {
  case 'M':
  console.log("Bom dia")
}
switch (turnoDeEstudo) {
    case 'V':
    console.log("Boa tarde")
  }
  switch (turnoDeEstudo) {
    case 'N':
    console.log("Boa noite")
  }

 //4)
 
 const generoDoFilme = prompt("Qual o gênero do filme?")
 const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))
 if (generoDoFilme === "fantasia") {
     console.log("Bom filme!")
 }
 else if (precoDoIngresso < 15,00)
     console.log("Bom filme!")
 else {
     console.log("Escolha outro filme!")
 }