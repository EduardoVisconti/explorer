import { Router } from './router.js'
import { switchBackground } from './backgroundSwitch.js'

const homePage = document.querySelector('nav :nth-child(2)')
const universePage = document.querySelector('nav :nth-child(3)')
const explorationPage = document.querySelector('nav :nth-child(4)')

const bodyPage = document.querySelector('body')

const backgroundSwitch = switchBackground({ bodyPage })

homePage.addEventListener('click', backgroundSwitch.home)
universePage.addEventListener('click', backgroundSwitch.universe)
explorationPage.addEventListener('click', backgroundSwitch.exploration)

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/index.html', './pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = router.handle()
window.route = () => router.route()
