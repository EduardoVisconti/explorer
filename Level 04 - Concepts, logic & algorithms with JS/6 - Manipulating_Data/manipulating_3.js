// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar o ponto por vírgula

let number = 45454.322
console.log(number.toFixed(2).replace('.', ',')) 
//depois que fazemos a transformação de casas decimais, vira uma String e aí conseguimos fazer o replace.