// Operadores de comparação

// Irá comparar valors e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

//  ==  igual á
console.log(two == 1) //false
console.log(one == '1') //true

//  !=    diferente de
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != '1') //false

/* ----------------------------------- */

//   === estritamento igual a
console.log(one === '1') //false (diferente type)
console.log(two === 1) //true

//   === estritamento diferente a
console.log(one !== '1') //true
console.log(two !== 1) //false

/* ----------------------------------- */

//  >  Maior que 
console.log(one > two) //false

//  >=  Maior igual a 
console.log(one >= 1) //true
console.log(two >= 1) //true

//  <  Menor que 
console.log(one < two) //true

//  <=  Menor igual a
console.log(one <= two) //true
console.log(one <= 1) //true
console.log(one <= 0) //false