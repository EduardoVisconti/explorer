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
    secondFinal: 5
  },
  {
    name: 'Luiz',
    firstFinal: 5,
    secondFinal: 7
  },
  {
    name: 'Noah',
    firstFinal: 8,
    secondFinal: 9
  }
]

function gradeCalculator(firstFinal, secondFinal) {
  return (firstFinal + secondFinal) / 2
}


function printGrades(student) {
  const averageGrade = gradeCalculator(student.firstFinal, student.secondFinal)

  if (averageGrade >= 7) {
    return `A média de ${student.name} é de: ${gradeCalculator(student.firstFinal, student.secondFinal)} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `A média de ${student.name} é de: ${gradeCalculator(student.firstFinal, student.secondFinal)} \n Você foi reprovado(a) no concurso!`
  }
}

for (let student of students) {
  let gradeResult = printGrades(student)
  alert(gradeResult)
}
