const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 5

      --minutes
    }

    updateTimerDisplay(minutes, seconds)

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  countdown()
})
