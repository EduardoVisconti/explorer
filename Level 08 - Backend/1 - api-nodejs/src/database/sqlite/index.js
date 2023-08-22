const sqlite3 = require('sqlite3') //drive que vai estabelecer a conexão com minha Base de Dados
const sqlite = require('sqlite') //responsável por conectar
const path = require('path') //resolve os endereços de acordo com o ambiente

async function sqliteConnection() {
  const database = await sqlite.open({ //Abrindo conexão.. Depois passamos os objetos com configuração da minha conexão
    filename: path.resolve(__dirname, '..', 'database.db'), //Onde o arquivo vai ficar salvo do Banco de Dados... Pega de forma automática onde que eu estou dentro do projeto, voltamos uma pasta para atrás (database), aí criamos o arq. database.db
    driver:sqlite3.Database
  })
  
  return database
}

module.exports = sqliteConnection
