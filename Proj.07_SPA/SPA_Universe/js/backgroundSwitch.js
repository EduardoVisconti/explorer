export function switchBackground({ bodyPage }) {
  
  function home() {
    bodyPage.classList.add('homeBackground')
    bodyPage.classList.remove('universeBackground')
    bodyPage.classList.remove('explorationBackground')
  }

  function universe() {
    bodyPage.classList.remove('homeBackground')
    bodyPage.classList.add('universeBackground')
    bodyPage.classList.remove('explorationBackground')
  }

  function exploration() {
    bodyPage.classList.remove('homeBackground')
    bodyPage.classList.remove('universeBackground')
    bodyPage.classList.add('explorationBackground')
  }

  return {
    home,
    exploration,
    universe
  }
}
