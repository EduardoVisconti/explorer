// callback function

function sayMyName(name) { //passando uma função
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)