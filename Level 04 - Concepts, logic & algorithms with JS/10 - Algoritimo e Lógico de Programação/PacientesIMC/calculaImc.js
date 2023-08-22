/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Crie uma função para fazer o cálculo de IMC
*/

const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180
  }
]

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function printPacientes(patient){
  return `Paciente ${patient.name} possui o IMC de: ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
  let IMCmessage = printPacientes(patient)
  alert(IMCmessage)
}