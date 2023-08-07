const { Router } = require('express')

const usersRoutes = require('./users.routes')
const notesRoutes = require('./notes.routes')

const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/movie_notes', notesRoutes)

module.exports = routes
