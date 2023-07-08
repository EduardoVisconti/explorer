const knex = require('../database/knex')

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body //Pegando tudo da requisição do corpo
    const { user_id } = request.params //params contém o parâmetro da URL

    const { note_id } = await knex('notes').insert({ //inserindo um novo registro na tabela "notes" e armazena o valor do ID desse novo registro na variável note_id. método insert é chamado passando um objeto contendo os valores para os campos title, description e user_id do novo registro.
      title,
      description,
      user_id
    })

    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link
      }
    })

    await knex('links').insert(linksInsert)

    const tagsInsert = tags.map(name => {
      //criando um novo array chamado 'tagsInsert' usando o método map. O array tags é um array de tags que queremos inserir no banco de dados. Para cada tag no array, estamos mapeando e transformando em um objeto que contém os campos note_id, name e user_id V.
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex('tags').insert(tagsInsert) //usando o objeto knex para inserir os objetos contidos no array tagsInsert na tabela chamada "tags"

    response.json()
  }

  async show(request, response) {
    const { id } = request.params

    const note = await knex('notes').where({ id }).first()
    const tags = await knex('tags').where({ note_id: id }).orderBy('name')
    const links = await knex('links')
      .where({ note_id: id })
      .orderBy('created_at')

    return response.json({
      ...note,
      tags,
      links
    })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('notes').where({ id }).delete()

    return response.json()
  }

  async index(request, response) {
    const { title, user_id, tags } = request.query

    let notes

    if (tags) {
      const filterTags = tags.split(',').map(tag => tag.trim())

      notes = await knex('tags')
        .select([ //Passamos um array com quais campos queremos selecionar
          'notes.id',
          'notes.title',
          'notes.user_id',
        ])

        .where('notes.user_id', user_id) //Filtrando baseado no ID do usuário
        .whereLike('notes.title', `%${title}%`)
        .whereIn('name', filterTags) //Analisando baseado na tag > Nome da Tag e passo o vetor para comparar pra ver se existe
        .innerJoin('notes', 'notes.id', 'tags.note_id') //Conectando uma tabela com a outra > conectar tabela notas > quais campos vou usar para conectar elas > campo que tenho em comum
        .orderBy('notes.title') //Ordem alfabética por nome do titulo
    } else {
      notes = await knex('notes') //Só mostrar as notas feito por esse usuário
        .where({ user_id })
        .whereLike('title', `%${title}%`) //whereLike ajuda a buscar por valores que contenham alguma palavra > % antes e depois > dizendo que verifique antes e depois da palavra
        .orderBy('title')
    }

    const userTags = await knex('tags').where({user_id}) //Fazer um filtro em todas as tags sejam iguais ao user_id
    const notesWithTags = notes.map(note => { //Percorrendo todas as notas
      const noteTags = userTags.filter(tag => tag.note_id === note.id)//Filtrando as tags da nota, onde o ID da nota está vinculado com o id tag

      return {
        ...note,
        tags: noteTags
      }
    })
    return response.json(notesWithTags)
  }
}

module.exports = NotesController
