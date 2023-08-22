// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num1 = 22
let num2 = 14
let soma = num1 + num2
console.log(soma)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let numero = 2
if (typeof numero === 'number') {
  console.log('É um número')
} else {
  console.log('Não é um número')
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let nome = 'Julio'
if (typeof nome === 'string') {
  console.log('É uma string')
} else {
  console.log('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let booleano = false
if (typeof booleano === 'boolean') {
  console.log('É um booleano')
} else {
  console.log('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let subtrai = num1 - num2
console.log(subtrai)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let multi = num1 * num2
console.log(multi)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let div = num1 / num2
console.log(div)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let evenNum = 6
if (evenNum % 2 === 0) {
  console.log('É um número par')
} else {
  console.log('Não é um número par')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let oddNum = 5
if (oddNum % 2 !== 0) {
  console.log('É um número ímpar')
} else {
  console.log('Não é um número ímpar')
}
