// Variáveis e tipos de dados

// declaration
var name

// value assignment
name = 'Mike'

// que tipo de dado foi colocado na variável
console.log(typeof name)

// agrupamento de declarações
let age, isHuman

age = 18
isHuman = true

// multiplos argumentos na função
console.log(name, age, isHuman)

// escrita de texto + variáveis
// concatenando valores
console.log('O ' + name + ' tem ' + age + ' anos.')

// interpolando valores com template literals/strings
console.log(`O ${name} tem ${age} anos.`)

/* ------------------------------------------------------------------------------*/

// Object

const person = {
  name: 'John',
  age: 30,
  weight: 88.6,
  isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)

/* ------------------------------------------------------------------------------*/

// Array

const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]

// acessar valores dentro do Array
console.log(animals[0])

// acessar valores do objeto dentro do Array
console.log(animals[2].age)
