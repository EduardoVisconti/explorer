/* DARK MODE */
const buttonDark = document.querySelector('.dark')
const buttonLight = document.querySelector('.light')

buttonLight.addEventListener('click', function () {
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  document.body.classList.add('dark-mode')
})

buttonDark.addEventListener('click', function () {
  buttonDark.classList.add('hide')
  buttonLight.classList.remove('hide')
  document.body.classList.remove('dark-mode')
})

/* TIMER */
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
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    let isFinished = seconds === 0 && minutes === 0

    if (seconds <= 0) {
      seconds = 60

      --minutes
    }

    if (isFinished) {
      resetTimer()
      return
    }

    updateTimerDisplay(minutes, --seconds)

    countdown()
  }, 1000)
}

function resetTimer() {
  clearTimeout(timerTimeOut)
  updateTimerDisplay(minutes, 0)
  stopSounds()
}

/* TIMER CONTROL */
buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  resetTimer()
})

buttonIncrease.addEventListener('click', function () {
  let minutes = (minutesDisplay.textContent =
    Number(minutesDisplay.textContent) + 5)

  if (minutes >= 60) {
    minutes = 60
  }

  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})

buttonDecrease.addEventListener('click', function () {
  let minutes = (minutesDisplay.textContent =
    Number(minutesDisplay.textContent) - 5)

  if (minutes <= 0) {
    minutes = 0
  }

  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})

/* SOUND */
const buttonNature = document.querySelector('.nature')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')

const audioNature = new Audio('./sounds/Floresta.wav')
const audioRain = new Audio('./sounds/Chuva.wav')
const audioCoffeeShop = new Audio('./sounds/Cafeteria.wav')
const audioFirePlace = new Audio('./sounds/Lareira.wav')

const volumeNature = document.querySelector('#volNature')
const volumeRain = document.querySelector('#volRain')
const volumeCoffeeShop = document.querySelector('#volCoffeeShop')
const volumeFirePlace = document.querySelector('#volFirePlace')

volumeNature.addEventListener('input', function () {
  audioNature.volume = volumeNature.value
})

volumeRain.addEventListener('input', function () {
  audioRain.volume = volumeRain.value
})

volumeCoffeeShop.addEventListener('input', function () {
  audioCoffeeShop.volume = volumeCoffeeShop.value
})

volumeFirePlace.addEventListener('input', function () {
  audioFirePlace.volume = volumeFirePlace.value
})

let playSound

function stopSounds() {
  if (playSound) {
    playSound.pause()
  }
}

function playSounds(sound) {
  stopSounds()

  playSound = sound
  playSound.loop = true
  playSound.play()
}

buttonNature.addEventListener('click', function () {
  playSounds(audioNature)
})

buttonRain.addEventListener('click', function () {
  playSounds(audioRain)
})

buttonCoffeeShop.addEventListener('click', function () {
  playSounds(audioCoffeeShop)
})

buttonFirePlace.addEventListener('click', function () {
  playSounds(audioFirePlace)
})

/* RANGE INPUT */
const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  }
  const min = target.min
  const max = target.max
  const val = target.value

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
