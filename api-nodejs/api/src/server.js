const express = require('express') //colocando toda a pasta express que está dentro do node_modules / importando o express

const app = express() //inicializando o express

app.post('/users', (request, response) => {
  response.send('Você chamou o POST')
})

const PORT = 3333 //definindo o numero da porta que a API vai ficar observando, esperando requisições e devolvendo respostas

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)) //fique escutando essa porta, e quando iniciar irá executar essa mensagem no terminal







/* app.get('/home/:id/:user', (request, response) => {
  response.send(
    `Mensagem ID: ${request.params.id}.
    Para o usuário: ${request.params.user}.
    `
  )
}) // Método GET - Quando um cliente faz uma solicitação GET para a raiz do servidor, o servidor responde com essa mensagem.

app.get("/users", (request, response) => {
  const { page, limit } = request.query

  response.send(`Página: ${page}. Mostrar: ${limit}.`)
}) */
