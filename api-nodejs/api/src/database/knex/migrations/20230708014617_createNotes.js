exports.up = knex => knex.schema.createTable('notes', table => { //Processo de criar a tabela - Criando tabela chamada notes
  table.increments('id') //Dentro da minha tabela eu vou ter um campo incremental chamado ID
  table.text('title') //Campo tipo texto
  table.text('description') //Campo tipo texto
  table.integer('user_id').references('id').inTable('users') //Campo tipo inteiro chamado 'user_id' e ele faz uma referencia ao 'id' que existe dentro da tabela 'users'

  table.timestamp('created_at').default(knex.fn.now()) //Default dele é knex > dentro dele tem uma função (fn) chamada now que é quem vai rodar
  table.timestamp('updated_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('notes') //Processo de deletar a tabela