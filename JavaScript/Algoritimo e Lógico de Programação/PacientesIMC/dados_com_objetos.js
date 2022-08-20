/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: 'Rodrigo',
    age: 35,
    weight: 88,
    height: 1.68
  },
  {
    name: 'Gabriel',
    age: 27,
    weight: 55,
    height: 1.52
  },
  {
    name: 'Lucas',
    age: 21,
    weight: 75,
    height: 1.82
  }
]

let patientsNames = []

for (let patient of patients) { //patient pega os objetos pra nós
  patientsNames.push(patient.name) //adicionando no Array
}

alert (patientsNames) //printa o array com os nomes dos pacientes


/*let patientsNames = []

for(let i = 0; i < patients.length; i++) {
  patientsNames[i] = patients[i].name
}

alert (patientsNames)
*/