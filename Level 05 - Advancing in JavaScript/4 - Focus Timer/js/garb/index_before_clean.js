import Controls from '../controls.js'
import Timer from '../timer.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut, 
  resetControls,
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', function () { //quando clicar no botão set
  let newMinutes = prompt('Quantos minutos?') //irá fazer um promp pro cliente

  if (!minutes) {
    timer.resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})
