export default function Controls() {

  function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }
  return {
    resetControls
  }
}
