// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _(underscore).

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ') //separando em arrays
let phraseWithUnderscore = myArray.join('_') //juntando os arrays e dentro escolhemos qual separador queremos.

console.log(phraseWithUnderscore.toLocaleLowerCase())