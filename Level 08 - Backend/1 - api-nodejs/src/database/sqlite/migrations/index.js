const sqliteConnection = require('../../sqlite') //drive que vai estabelecer a conexão com minha Base de Dados

const createUsers = require('./createUsers')

async function migrationsRun() {
  const schemas = [createUsers].join('') //armazenando a string de instruções SQL do createUsers, e com join transformando o array em uma única string

  sqliteConnection() //função que retorna uma promessa
    .then(db => db.exec(schemas)) //Objeto db é usado para interagir com o banco de dados SQLite, executando consultas SQL e recuperando dados que são passados como parâmetro para a função dentro do .then()
    .catch(error => console.error(error))
}

module.exports = migrationsRun
