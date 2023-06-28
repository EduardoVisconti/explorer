const { Router } = require('express') //importando o router direto do express

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)

module.exports = usersRoutes //estou exportando pra quem quiser utilizar esse arquivo
