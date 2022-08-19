/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Qual o nome da(o) aluna(o)?')

let n1 = prompt('Qual foi a nota da primeira prova?')
let n2 = prompt('Qual foi a nota da segunda prova?')
let n3 = prompt('Qual foi a nota da terceira prova?')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
average = average.toFixed(2)

// let result = average >= 6.5

if (average >= 6.5) {
  alert('Parabens, ' + student + '! Você passou! Sua nota foi: ' + average)

} else if (average <= 5){
  alert(student + ', infelizmente você foi reprovado! Sua nota foi: ' + average)

} else {
  alert(student + ' sua nota foi de: ' + average + ', infelizmente você ainda não passou mas tem sua prova de recuperação, dê o seu melhor!')
}