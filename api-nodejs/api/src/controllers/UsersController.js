/* Controller pode ter no máximo 5 métodos/funções, caso precise de mais é necessário criar um outro controller.

  * index - GET para listar vários registros
  * show - GET para exibir um registro especifico 
  * create - POST para criar um registro
  * update - PUT para atualizar um registro
  * delete - DELETE para remover um registro
*/
const { hash, compare } = require('bcryptjs') //Adicionamos o compare junto com hash (compare verifica se o valor fornecido corresponde ao hash criptografado)

const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite') //importando conexão com banco de dados
const { application } = require('express')

class UsersController {
  //estamos usando classe porque ela permite que eu possa criar e acessar varias funções
  async create(request, response) {
    // request para acessar o body, e usando o response para devolver o conteúdo (nome, etc)
    const { name, email, password } = request.body

    const database = await sqliteConnection() //estamos conectando com banco de dados e não acontece na mesma hr

    const checkUserExists = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    ) //selecionando todos os campos da tabele de users, onde o email seja igual o email que a pessoa está tentando cadastrar

    if (checkUserExists) {
      throw new AppError('Este e-mail já está em uso.')
    }

    const hashedPassword = await hash(password, 8)

    await database.run(
      'INSERT INTO users (name, email, password) VALUES(?, ?, ?)', //inserir na tabela user. nas colunas name, email, password. 3 interrogações pq são 3 valores
      [name, email, hashedPassword]
    )

    return response.status(201).json() //transformando a resposta-erro em json
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params //pegando o ID

    const database = await sqliteConnection()
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]) //Selecione todos os campos da tabela DE usuários ONDE o id seja igual ao id que estou procurando

    if (!user) {
      throw new AppError('Usuário não encontrado')
    }

    const userWithUpdatedEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      //verificando se já existe um usuário no banco de dados com o e-mail atualizado e se esse usuário é diferente do usuário atual
      throw new AppError('Este e-mail já está em uso.')
    }

    user.name = name ?? user.name //se existir o conteúdo dentro de name, é ele quem vai ser utilizado, senão então o user.name (continuar o que estava)
    user.email = email ?? user.email

    if (password && !old_password) {
      //Se digitou a senha nova mas não digitou a senha antiga
      throw new AppError(
        'Você precisa informar a senha antiga para definir a nova senha'
      )
    }

    if (password && old_password) {
      //Se digitou as duas senhas
      const checkOldPassword = await compare(old_password, user.password) //comparando se a senha antiga é igual a que esta salva no Banco (user.password)
      if (!checkOldPassword) {
        // Se a comparação der errado
        throw new AppError('A senha antiga não confere.')
      }

      user.password = await hash(password, 8) //atribuindo um novo valor à propriedade password do objeto user, 8 representa a complexidade
    }

    await database.run(
      `
    UPDATE users SET 
    name = ?,
    email = ?,
    password = ?,
    updated_at = datetime('now', 'localtime')
    WHERE id = ?`,
      [user.name, user.email, user.password, id]
    )

    return response.json()
  }
}

module.exports = UsersController
