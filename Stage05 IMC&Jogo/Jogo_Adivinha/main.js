// Variáveis
const btnSubmit = document.querySelector('#btnSubmit')
const btnRetry = document.querySelector('#btnRetry')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnSubmit.addEventListener('click', handleSubmitClick)
btnRetry.addEventListener('click', handleRetryClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) { //se o screen1 contém com o hide
    handleRetryClick()
  }
})

// Funções callback
function handleSubmitClick(event) {
  event.preventDefault() //não faça o padrão, não envie o formulário

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector(
      'h2'
    ).innerText = `acertou em ${xAttempts} tentativa(s)` //pesquisando dentro do elemento
  }
  inputNumber.value = '' //Limpar o campo de texto depois da tentativa
  xAttempts++
}

function handleRetryClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

//refaturar a função > tem que ter número e apenas números entre 1-10
