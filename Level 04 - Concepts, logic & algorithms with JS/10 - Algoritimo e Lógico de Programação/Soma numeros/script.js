/*
    Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário
*/

alert('Iremos somar 2 números')
let numberOne = prompt('Digite o primeiro número:') //o valor do prompt é dado como uma String
let numberTwo = prompt('Digite o segundo número:')
let result = Number(numberOne) + Number(numberTwo)

//alert ('Resultado final: ' + (Number(numberOne) + Number(numberTwo))) - Nesse caso nós precisamos botar entre parentereses pois estamos usando o '+' para fazer concatenação
alert('Resultado final: ' + result)
