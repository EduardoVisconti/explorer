const { Router } = require('express')

const NotesController = require('../controllers/NotesController.js')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.get('/', notesController.index) //Como passamos como query não precisa de parâmetro = / 
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes
