const { Router } = require('express') //importando o router direto do express

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.get('/', notesController.index)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes //estou exportando pra quem quiser utilizar esse arquivo

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
