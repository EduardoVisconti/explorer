// for .. in

let person = {
  name: 'Eduardo',
  age: 23,
  weight: 80.2
}

for (let property in person) { //no person(obj) pegue a propriedade e atribua na variável let
  console.log(property)
  console.log(person[property]) //property é convertido para uma string e pega os valores

  //Obs: No console os dois valores dão o "resultado" ao "mesmo tempo".
}