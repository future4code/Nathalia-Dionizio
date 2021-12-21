// filter
//numeros pares de um array

let array= [1,2,3,4,5,6,7,8,9,10]

function arrayPares (value) {
    if(value %2 === 0)
    return value
}

let arrayNovo = array.filter(arrayPares);
console.log('Os números pares são', arrayNovo)

//numeros impares de um array

let array2= [1,2,3,4,5,6,7,8,9,10]

function arrayPares2 (value) {
    if(value %2 !== 0)
    return value
}

let arrayNovo2 = array2.filter(arrayPares2);
console.log('Os números ímpares são', arrayNovo2)

//reduce

//atividade 1
const array3 = [5,8];

function somaNumeros (array3) {
    return array3.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log('A soma dos números são:', somaNumeros(array3))

//atividade 2

//calcular saldo

const lista = [
    {
        name: 'leite',
        preco: 7,
    },

    {
        name: 'chocolate',
        preco: 10,
    },

    {
        name: 'cereal',
        preco: 4,
    },
];

const saldoDisponivel = 100;

function calcularSaldo (saldoDisponivel, lista) {
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log('Seu saldo disponível é de:',calcularSaldo(saldoDisponivel, lista));

//MAP

//multiplicar elementos de um array por 2

const numeros= [ 2,3,7,9,4,12];

function mapMultiplicar(array4) {
    return array4.map(function(value){
        return value * 2;
    })
}
console.log('Resultado:', mapMultiplicar(numeros))

