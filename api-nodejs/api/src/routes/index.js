//a missão deste index.js é reunir todas as rotas

const { Router } = require('express')

const usersRouter = require('./users.routes') //grupo de rotas do usuário
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')

const routes = Router()

routes.use('/users', usersRouter) //toda vez que alguém acessar o /users será redirecionado ao usersRoute (que é o grupo de rotas do usuário ^^)
routes.use('/notes', notesRouter)
routes.use('/tags', tagsRouter)

module.exports = routes //que é o que contém todas as rotas da aplicação
