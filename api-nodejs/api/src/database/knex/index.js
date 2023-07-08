const config = require('../../../knexfile') //Pegando as configs do knex
const knex = require('knex') //Importando o knex

const connection = knex(config.development) //Conexão knex > Dentro do config tem as configurações de desenvolvimento

module.exports = connection //Exportando
