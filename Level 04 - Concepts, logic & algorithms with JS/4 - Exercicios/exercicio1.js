let n1 = Number(prompt('Insira o primeiro número'))
let n2 = Number(prompt('Insira o segundo número'))

let sum = n1 + n2
alert('A soma dos dois números é: ' + sum)

let sub = Math.abs(n1 - n2)
alert('A subtração dos dois números é: ' + sub)

let multi = n1 * n2
alert('A multiplicação dos dois números é: ' + multi)

let div = Math.round(n1 / n2)
alert('A divisão dos dois números é: ' + div)

let rest = n1 % n2
alert('O resto da divisão dos dois números é: ' + rest)

if (sum % 2 === 0) {
  alert('A soma dos dois números são par: ' + sum)
} else {
  alert('A soma dos dois números são ímpar: ' + sum)
}

if (n1 === n2) {
  alert('Os números inseridos são iguais.')
} else {
  alert('Os números inseridos são diferentes.')
}
