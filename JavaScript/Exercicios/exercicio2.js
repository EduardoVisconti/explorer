/*

https://efficient-sloth-d85.notion.site/Exerc-cio-02-41080263d073491a908e37c6e4145361#8a1e7ac5b96f479299c83aad3a04dfad

💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

Dica: para quebrar uma linha no alert() basta usar um \n na mensagem. 😛

*/

const students = [
  {
    name: 'Eduardo',
    firstFinal: 8,
    secondFinal: 7
  },
  {
    name: 'Gabriel',
    firstFinal: 6,
    secondFinal: 2
  }
]

for (let student of students) {
  if ()
  alert(gradeResult)
}

function gradeCalculator(firstFinal, secondFinal) {
  return (firstFinal + secondFinal) / 2
}


// function gradeCalculator(firstFinal, secondFinal) {
//   return (firstFinal + secondFinal) / 2
// }


// function printGrades(students) {
//   return `A média do(a) aluno(a) ${students.name} é de: ${gradeCalculator(
//     students.firstFinal,
//     students.secondFinal
//   )} \n Parabéns, ${students.name}! Você foi aprovado(a) no concurso!`
// }

// for (let student of students) {
//   let gradeResult = printGrades(student)
//   alert(gradeResult)
// }
