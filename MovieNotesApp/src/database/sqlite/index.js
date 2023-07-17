const sqlite3 = require('sqlite3') // Importando o driver SQLite3 para estabelecer a conexão com o banco de dados.
const sqlite = require('sqlite') // Importando a biblioteca SQLite para realizar a conexão.

const path = require('path') // Importando o módulo "path" para lidar com caminhos de arquivos.

async function sqliteConnection() { // Definindo a função "sqliteConnection" que estabelecerá a conexão com o banco de dados.
  const database = await sqlite.open({ // Abrindo a conexão com o banco de dados.
    filename: path.resolve(__dirname, '..', 'database.db'), // Definindo o caminho do arquivo do banco de dados. __dirname é a pasta atual, '..', navega uma pasta acima (voltando para a pasta raiz).
    driver: sqlite3.Database // Definindo o driver SQLite3 como o driver a ser utilizado para a conexão.
  })

  return database // Retornando o objeto da conexão com o banco de dados.
}

module.exports = sqliteConnection // Exportando a função "sqliteConnection" para ser utilizada em outros arquivos.
