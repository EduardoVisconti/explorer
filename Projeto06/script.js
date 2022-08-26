// DOM
// Document Object Model

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// Event-driven - tudo que é direcionado a eventos
// programação imperativa - que dá ordens, passo a passo do que tem que ser feito
// callback - passar função como argumento

function countdown() {
  setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
    }

    secondsDisplay.textContent = seconds - 1
    countdown() //rodar dnv

  }, 1000)//depois de quanto tempo queremos realizar a função, 1s
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  countdown()
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')

  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', function () {
  minutes = prompt ('Quantos minutos?')
  minutesDisplay.textContent = minutes
})
