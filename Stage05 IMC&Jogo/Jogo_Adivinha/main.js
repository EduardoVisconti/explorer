// Variáveis
const btnSubmit = document.querySelector('#btnSubmit')
const btnRetry = document.querySelector('#btnRetry')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnSubmit.addEventListener('click', handleSubmitClick)
btnRetry.addEventListener('click', handleRetryClick)

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
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
