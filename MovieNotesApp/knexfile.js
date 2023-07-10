const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3', //usando o SQLite como banco de dados
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.db')
    },

    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)
    } /* `pool`: Configura o pool de conexões do banco de dados.

          `afterCreate`: Define uma função a ser executada após a criação de uma nova conexão.

          `(conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)`: A função após a criação de uma conexão executa o comando SQL `PRAGMA foreign_keys = ON` para ativar a restrição de chave estrangeira. O parâmetro `conn` representa a conexão com o banco de dados e `cb` é um callback para indicar a conclusão da execução.
        */,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'sqlite', 'knex', 'migrations')
    },

    useNullAsDefault: true
  }
}
