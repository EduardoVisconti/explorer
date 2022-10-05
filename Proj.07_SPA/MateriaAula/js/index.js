import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/contact', '/pages/contact.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = router.handle()
window.route = () => router.route() //colocando no windows a função route.. criando uma função para disparar a função

/* 

class Passaro {
  voar() {
    alert('voar')
  }
}

class Pato extends Passaro {
  constructor() {
    super()
  }

  voar() {
    alert('n voa tao bem')
  }
}

const galinha = new Galinha()
galinha.voar()

*/
