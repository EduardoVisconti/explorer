const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.plus')
const buttonDecrease = document.querySelector('.minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    let isFinished = seconds === 0 && minutes === 0

    if (seconds <= 0) {
      seconds = 60

      --minutes
    }

    if (isFinished) {
      stopSounds()
      return
    }

    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(--seconds).padStart(2, '0')

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  stopSounds()
  clearTimeout(timerTimeOut)
  updateTimerDisplay(minutes, 0)
})

buttonIncrease.addEventListener('click', function () {
  let minutes = minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5 //precisei criar uma variavel minutes para fazer funcionar

  if (minutes >= 60) {
    minutes = 60
  }

  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})

buttonDecrease.addEventListener('click', function () {
  let minutes = minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5

  if (minutes <= 0) {
    minutes = 0
  }

  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})

/* SOUNDS */

const soundNature = new Audio('./sounds/Floresta.wav')
const soundCoffeeShop = new Audio('./sounds/Cafeteria.wav')
const soundRain = new Audio('./sounds/Chuva.wav')
const soundFirePlace = new Audio('./sounds/Lareira.wav')

const buttonNature = document.querySelector('.nature')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')

let playSound

function playSounds(sound) {
  stopSounds()

  playSound = sound
  playSound.loop = true
  playSound.play()
}

function stopSounds() {
  if (playSound) {
    playSound.pause()
  }
}

buttonNature.addEventListener('click', function () {
  playSounds(soundNature)
})

buttonCoffeeShop.addEventListener('click', function () {
  playSounds(soundCoffeeShop)
})

buttonRain.addEventListener('click', function () {
  playSounds(soundRain)
})

buttonFirePlace.addEventListener('click', function () {
  playSounds(soundFirePlace)
})
