const { Router } = require('express') //importando o router direto do express

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes //estou exportando pra quem quiser utilizar esse arquivo

/*
  MIDDLEWARE
  
  function myMiddleware(request, response, next) {
  if (!request.body.isAdmin) {
    return response.json({ message: user unauthorized})
  }
  next()
  }

  usersRoutes.post('/', myMiddleware, usersController.create)

 */
