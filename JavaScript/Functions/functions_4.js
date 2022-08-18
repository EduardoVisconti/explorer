// function scope

let subject

function createThink () { //caso não tenha o parametro na função, o subject de baixo iria buscar o da variavel acima
  subject = 'study'
}

console.log(subject) //undefined
createThink() //executa a função
console.log(subject) //e agora o subject tem um valor