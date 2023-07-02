require('express-async-errors') //importando o async error, sempre fazer no começo de tudo

const migrationsRun = require('./database/sqlite/migrations')

const AppError = require('./utils/AppError')

const express = require('express') //colocando toda a pasta express que está dentro do node_modules / importando o express

const routes = require('./routes') //por padrão quando não diz qual arquivo queremos acessar ele carrega a pasta com nome index

migrationsRun() //executando banco de dados

const app = express() //inicializando o express
app.use(express.json())

app.use(routes) //falando para a aplicação usar essas rotas

app.use((error, request, response, next) => { //capturando error, request... error = capturar o erro da requisição, response = devolver a responsa (nesse caso verificamos se o erro é do cliente ou nosso)
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message //nome é obrigatório
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const PORT = 3333 //definindo o numero da porta que a API vai ficar observando, esperando requisições e devolvendo respostas
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)) //fique escutando essa porta, e quando iniciar irá executar essa mensagem no terminal

/* 
// POST
app.post('/users', (request, response) => {
  response.send('Você chamou o POST')
})




// Método GET - Quando um cliente faz uma solicitação GET para a raiz do servidor, o servidor responde com essa mensagem.

app.get('/home/:id/:user', (request, response) => {
  response.send(
    `Mensagem ID: ${request.params.id}.
    Para o usuário: ${request.params.user}.
    `
  )
}) 



// Query
app.get("/users", (request, response) => {
  const { page, limit } = request.query

  response.send(`Página: ${page}. Mostrar: ${limit}.`)
}) */
