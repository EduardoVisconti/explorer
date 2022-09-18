/* DARK MODE */
const buttonDark = document.querySelector('.dark')
const buttonLight = document.querySelector('.light')

buttonLight.addEventListener('click', function () {
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  document.body.classList.add('dark-mode')
})

buttonDark.addEventListener('click', function() {
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
      return
    }

    updateTimerDisplay(minutes, --seconds)

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  up
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
