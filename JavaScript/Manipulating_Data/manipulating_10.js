// Manipulando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('node.js')

// adicionar no começo
techs.unshift('sql')

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3)) //onde começa e onde termina

// remover 1 ou mais items em qualquer posição do array
//techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css') //qual o index do css?! Procura onde está o 'css' no Array
techs.splice(index, 1) //remover a posição index(2) e quantos elementos quero remover

console.log(techs)