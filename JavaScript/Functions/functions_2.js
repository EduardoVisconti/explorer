// function expression, function anonymous

let total = 0

//(paremeters)
const sum = function(number1, number2){ //não importa o nome que vamos passar mas sim qual e quantos parametros, eles só funcionam dentro da função
  let total = number1 + number2 //sempre usar um operador, palavra-chave (let, const)
  return total //retorna a função inteira, especificamente o total
}

//sum(2, 3) // dentro () passamos os arguments

//passar argumentos para a invocação de uma função, criar parametros que vão receber os parametros da função

let number1 = 34
let number2 = 25

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 1 é ${number2}`)

console.log(`a soma é ${sum(number1, number2)}`)

console.log(total) //só recebemos o valor do total aqui pois ele vem depois que a função é executada ^, se fosse acima não iria funcionar pois ainda não tem valor. E depois de adicionarmos o let, o total de fora fica 0 e de dentro do scopo faz a soma (59)