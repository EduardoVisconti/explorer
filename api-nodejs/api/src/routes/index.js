//a missão deste index.js é reunir todas as rotas

const {Router} = require("express")

const usersRoutes = require("./users.routes") //grupo de rotas do usuário

const routes = Router()

routes.use('/users', usersRoutes) //toda vez que alguém acessar o /users será redirecionado ao usersRoute (que é o grupo de rotas do usuário ^^)

module.exports = routes //que é o que contém todas as rotas da aplicação