export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls
}) {
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0) //minutos que é do prompt
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      //
      let seconds = Number(secondsDisplay.textContent) //passando em numeros para fazermos o if
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(minutes, 0)

      if (minutes <= 0) {
        //quando o minutos zerar
        resetControls()
        return //pare a função
      }

      if (seconds <= 0) {
        //quando o 0 for maior ou igual a segundos/ quando o segundos chega no zero
        seconds = 60 //volta para o 60

        --minutes //diminui o minuto e já 'atualiza' no update abaixo
      }

      updateTimerDisplay(minutes, String(seconds - 1))

      countdown() //rodar dnv. A CADA 1 SEGUNDO V V
    }, 1000) //de quanto em quanto tempo fazer as repetições, 1s
  }

  return {
    countdown,
    resetTimer
  }
}