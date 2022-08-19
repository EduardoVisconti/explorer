// throw

function sayMyName(name = '') {
  if (name === '') {
      throw 'Nome é obrigatório'
  }

  console.log(name)
}

// try .. catch
try {
  sayMyName('Eduardo')
} catch(e) {
  console.log(e)
}

console.log('após try/catch')