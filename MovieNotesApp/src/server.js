require('express-async-errors')
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError')

const express = require('express') //Importando o express

const routes = require('./routes/index.js') //Onde está todas as rotas
migrationsRun()

const app = express() //Inicializando o express
app.use(express.json()) //Fazer a aplicação entender o JSON

app.use(routes) //Aplicação usar essas rotas

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

const PORT = 3333 //Qual porta/endereço que o express vai atender requisições
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)) //Fica escutando nessa PORT, e essa é sua função quando executar
