/*  A FAZERES

- REFATURAR NOMES, ETC
- LET PLAY PRO SOUNDS ######
- FUNÇÃO PLAYSOUND(sound) E STOPSOUND
- ISFINISHED PRO COUNTDOWN #######

*/

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.plus')
const buttonDecrease = document.querySelector('.minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerStop
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
  clearTimeout(timerTimeOut)
  updateTimerDisplay(minutes, 0)
})

buttonIncrease.addEventListener('click', function () {
  minutesDisplay.textContent = String(
    Number(minutesDisplay.textContent) + 5
  ).padStart(2, '0')
})

buttonDecrease.addEventListener('click', function () {
  minutesDisplay.textContent = String(
    Number(minutesDisplay.textContent) - 5
  ).padStart(2, '0')
})

/* SOUNDS */

const soundFlorest = new Audio('./sounds/Floresta.wav')
const soundComfy = new Audio('./sounds/Cafeteria.wav')
const soundRain = new Audio('./sounds/Chuva.wav')
const soundChill = new Audio('./sounds/Lareira.wav')

const buttonFlorest = document.querySelector('.nature')
const buttonRain = document.querySelector('.rain')
const buttonComfy = document.querySelector('.comfy')
const buttonChill = document.querySelector('.chill')

let playSong

function playSounds(sound) {
  stopSounds()

  playSong = sound
  playSong.loop = true
  playSong.play()
}

function stopSounds() {
  if (playSong) {
    playSong.pause()
  }
}

buttonFlorest.addEventListener('click', function () {
  buttonFlorest.classList.add('buttonSoundsActive')
  buttonComfy.classList.remove('buttonSoundsActive')
  buttonRain.classList.remove('buttonSoundsActive')
  buttonChill.classList.remove('buttonSoundsActive')
  playSounds(soundFlorest)
})

buttonComfy.addEventListener('click', function () {
  playSounds(soundComfy)
})

buttonRain.addEventListener('click', function () {
  playSounds(soundRain)
})

buttonChill.addEventListener('click', function () {
  playSounds(soundChill)
})
