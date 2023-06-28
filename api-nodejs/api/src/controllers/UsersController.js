/* Controller pode ter no máximo 5 métodos/funções, caso precise de mais é necessário criar um outro controller.

  * index - GET para listar vários registros
  * show - GET para exibir um registro especifico 
  * create - POST para criar um registro
  * update - PUT para atualizar um registro
  * delete - DELETE para remover um registro
*/

class UsersController { //estamos usando classe porque ela permite que eu possa criar e acessar varias funções
  create(request, response) { // request para acessar o body, e usando o response para devolver o conteúdo (nome, etc)
    const { name, email, password } = request.body

    response.json({ name, email, password })
  }
}

module.exports = UsersController
