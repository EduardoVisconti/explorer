### Estrutura Proj.

## src > server.js > controllers > utils > database/sqlite/migrations

# NODEJS

1. Iniciar Nodejs > cd 'pasta' > npm init -y

2. npm install express nodemon express-async-errors sqlite3 sqlite bcryptjs knex

3. Criar pasta src e dentro dela o `server.js` >

```
require('express-async-errors')
const express = require('express') //Importando o express

const app = express() //Inicializando o express
app.use(express.json()) //Fazer a aplicação entender o JSON

const PORT = 3333 //Qual porta/endereço que o express vai atender requisições
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)) //Fica escutando nessa PORT, e essa é sua função quando executar
```

4. Alterar o 'package.json' > Rodamos a app com 'npm run dev'

```
"scripts": {
  "start": "node ./src/server.js",
  "dev": "nodemon ./src/server.js",
  "migrate": "knex migrate:latest"
  },
```

5. Insomnia > Criar o projeto > User Create > Método POST (localhost:3333/users) JSON

6. Criar pasta `routes` > `index.js`: para reunir todas as rotas da aplicação

```
const { Router } = require('express')

const usersRouter = require('./users.routes') //Como importar rota**

const routes = Router()
routes.use('/users', usersRouter) //Como importar rota**

module.exports = routes
```

7. Criar rotas: users, movie_notes, movie_tags. `users.routes.js` > Importar (c/ variável) o Router de dentro do express

```
const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
  const { name, email, password } = request.body

  response.json({ name, email, password })
})

module.exports = usersRoutes
```

8. Criar pasta `controllers` > `UsersController.js`

```
class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    response.json({ name, email, password })
  }
}

module.exports = UsersController

```

E assim ficaria o `server.js`, `user.routes` e `index.js` (routes).

```index.js
const { Router } = require('express')

const usersRouter = require('./users.routes')

const routes = Router()
routes.use('/users', usersRouter)

module.exports = routes

```

```users.routes
const { Router } = require('express')

const UsersController = require('../controllers/UsersController.js')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)

module.exports = usersRoutes
```

```server.js
const express = require('express') //Importando o express

const routes = require('./routes/index.js') //Onde está todas as rotas

const app = express() //Inicializando o express
app.use(express.json()) //Fazer a aplicação entender o JSON

app.use(routes) //Aplicação usar essas rotas

const PORT = 3333 //Qual porta/endereço que o express vai atender requisições
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
```

9. Criar pasta `utils` > `AppError.js`: Para padronizar qual tipo de mensagem que vai aparecer quando estiver algum erro

```
class AppError {
  message
  statusCode //O fato de criar essas duas variáveis, faz com que toda a class tome conhecimento dela e consiga acessar ela dentro de qualquer outra funcionalidade

  constructor(message, statusCode = 400) { //toda classe tem um método construtor = método que é carregado automaticamente quando a classe é instanciada, e sempre que for usar eu quero saber do message, statusCode ... E como o statusCode não é informado vamos deixar 400 que é o Erro do cliente (4xx)
    this.message = message //repassando a mensagem para o contexto global (que é o acima) ^^
    this.statusCode = statusCode
  }
}

module.exports = AppError
```

Fazemos alterações nos arquivos: `server.js` e `UsersController.js`

```server.js

require('express-async-errors') ***

const AppError = require('./utils/AppError') ***

const express = require('express') //Importando o express

const routes = require('./routes/index.js') //Onde está todas as rotas

const app = express() //Inicializando o express
app.use(express.json()) //Fazer a aplicação entender o JSON

app.use(routes) //Aplicação usar essas rotas

app.use((error, request, response, next) => { //capturando error, request... error = capturar o erro da requisição, response = devolver a responsa (nesse caso verificamos se o erro é do cliente ou nosso)
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message //nome é obrigatório
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}) ***

const PORT = 3333 //Qual porta/endereço que o express vai atender requisições
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)) //Fica escutando nessa PORT, e essa é sua função quando executar
```

```UsersController.js
const AppError = require('../utils/AppError') ***

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if (!name) { ***
      throw new AppError('Nome é obrigatório')
    }

    response.status(201).json({ name, email, password }) ***
  }
}

module.exports = UsersController

```

10. Organizar pasta no Insomnia, criar variáveis de ambiente e recurso

```
{
	"BASE_URL": "localhost:3333"
}

{
  "RESOURCE": "users"
}

{{ _.BASE_URL }}{{ _.RESOURCE }}
```

# SQL Banco de Dados (Users, MovieNotes, MovieTags)

1. Conectar com o Banco de Dados

2. Criar pastas `database` > `sqlite` e dentro o `index.js`
```conexão com o banco de dados
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const path = require('path')

async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, '..', 'database.db'),
    driver: sqlite3.Database
  })

  return database
}

module.exports = sqliteConnection
```

3. Utilizar a conexão com o banco de dados no `server.js`
```
const database = require('./database/sqlite')

database()
```

4. Beekeeper - Visualizar o que tem dentro do Banco, incluir, ejetar, etc.

5. Dentro no Beekeeper > Procurar pela `database.db`

6. Automatizar criação de tabelas > Dentro da pasta `sqlite` > Criar pasta `migrations` > Criar arq. `createUsers.js` e fazer CREATE TABLE
```
const createUsers = `
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`

module.exports = createUsers
```

7. Dentro da `migrations` > criar `index.js`
```
const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers')

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}

module.exports = migrationsRun
```

8. Alterar database no `server.js`
```
const database = require('./database/sqlite')
database()

TROCAR PARA >

const migrationsRun = require('./database/sqlite/migrations')
migrationsRun()
```
9. Checkar se o email existe, alterar `UsersController.js`
```
const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if (checkUserExists) {
      throw new AppError('Este e-mail já está em uso.')
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController
```

10. Cadastrar usuário / Inserir registro > Dentro da `UsersController.js` e depois criar usuário no Insomnia e verificar o banco com o Beekeeper
```dentro da class UsersController
await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    )
```

11. Criptografar senha > Importar hash dentro do `UsersController.js`
```npm install bcryptjs, compare para quando formos comparar a senha dps
const { hash, compare } = require('bcryptjs')
```

Alterar dentro da class UsersController, no async create > E DEPOIS VERIFICAR SE A SENHA ESTA CRIPTOGRAFADA E SE ME DEIXA USAR O MESMO EMAIL PARA OUTRO USUÁRIO > DELETE FROM users WHERE ID = #
```
const hashedPassword = await hash(password, 8)

await database.run(
  'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
  [name, email, hashedPassword] <- ALTERANDO SENHA **
)
```

12. Criar rota para att usuário (Insomnia: Update do tipo PUT) e dentro da Class UsersController, criar o async update
```
async update(request, response) {
  const { name, email } = request.body
  const { id } = request.params

  const database = await sqliteConnection()
  const user = await database.get('SELECT * FROM users WHERE id = (?)', [id])

  if (!user) {
    throw new AppError('Usuário não encontrado')
  }

  const userWithUpdatedEmail = await database.get(
    'SELECT * FROM users WHERE email = (?)',
    [email]
  )

  if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
    throw new AppError('Este email já está em uso')
  }

  user.name = name ?? user.name
  user.email = email ?? user.email

  await database.run(
    `
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
    [user.name, user.email, user.password, id]
  )

  return response.json()
}
```

Depois criar uma nova rota no arq. `users.routes.js` > VERIFICAR NO INSOMNIA + BEEKEEPER SE ESTÁ FUNCIONANDO A ATT > CRIAR UM OUTRO USUÁRIO E TENTAR FAZER UMA ATT C/ O EMAIL DESTE USUÁRIO
```
usersRoutes.put('/:id', usersController.update)
```

13. Atualizar senha > Atualizar `UsersController.js` >> VERIFICAR A ATT DE SENHA+
```
const { hash, compare } = require('bcryptjs')

async update(request, response) {
  const { name, email, password, old_password } = request.body
  const { id } = request.params

  const database = await sqliteConnection()
  const user = await database.get('SELECT * FROM users WHERE id = (?)', [id])

  if (!user) {
      throw new AppError('Usuário não encontrado')
  }

  const userWithUpdatedEmail = await database.get(
    'SELECT * FROM users WHERE email = (?)',
    [email]
  )

  if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
    throw new AppError('Este email já está em uso')
  }

  user.name = name ?? user.name
  user.email = email ?? user.email

  if ( password && !old_password){
    throw new AppError('Informe a senha antiga para redefinir a senha')
  }

  if (password && old_password) {
    const checkOldPassword = await compare(old_password, user.password)

    if(!checkOldPassword) {
        throw new AppError ('A senha antiga não confere')
    }

    user.password = await hash(password, 8)
  }

  await database.run(
    `
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
    [user.name, user.email, user.password, id]
  )

  return response.json()
}
```

# Query Builder

1. Instalar Query Builder: npm install knex > npx knex init: cria o arq. `knexfile.js` e alterar > apagar comentários e deixar apenas development

2. Criar uma variável para o path > Trocar o caminho do filename, deixando o path resolver e adicionar 'useNullAsDefault: true'
```
const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.db')
    },
    useNullAsDefault: true
  }
};

```

3. Dentro de database criar pasta knex e dentro o arq. `index.js`
```
const config = require('../../../knexfile')
const knex = require('knex')

const connection = knex(config.development)

module.exports = connection
```

4. Criar pasta migration dentro da pasta knex > No arq. `knexfile.js` adicionar o diretório para essa pasta migration
```
migrations: {
  directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
},
```

5. As migrations do knex são gerenciadas pelo próprio knex > npx knex migrate:make createMovieNotes

6. `...createMovieNotes` > Limpar e criar a tabela > NPM RUN MIGRATE
```
exports.up = knex => knex.schema.createTable('movie_notes', table => {
  table.increments('id')
  table.text('title')
  table.text('description')
  table.integer('rating')
  table.integer('user_id').references('id').inTable('users')

  table.timestamp('created_at').default(knex.fn.now())
  table.timestamp('updated_at').default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('movie_notes');
```

7. Migration para Tag > npx knex migrate:make createMovieTags
```
exports.up = knex =>
  knex.schema.createTable('movie_tags', table => {
    table.increments('id')
    table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE')
    table.integer('user_id').references('id').inTable('users')
    table.text('name').notNullable()
  })

exports.down = knex => knex.schema.dropTable('movie_tags')

```

Alterar `knexfile.js` > Adicionar o 'pool' para que quando deletar, deletar em CASCADE
```
pool: {
  afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)
},
```

8. Cadastrar nota (Insomnia) > Criar environment >
```
{
	"RESOURCE": "movie_notes"
}
```

Dentro da pasta controllers > Criar `NotesController.js`
```
const knex = require('../database/knex')

class NotesController {
  async create(request, response) {
    const { title, description, rating, movie_tags } = request.body
    const { user_id } = request.params

    const [note_id] = await knex('movie_notes').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = movie_tags.map(name => {
      return {
        note_id,
        user_id,
        name
      }
    })

    await knex('movie_tags').insert(tagsInsert)

    return response.json()
  }
}

module.exports = NotesController
```

Dentro da pasta routes > Criar `notes.routes.js` (Duplicar o do users e fazer ajustes)
```
const { Router } = require('express')

const NotesController = require('../controllers/NotesController.js')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.post('/:user_id', notesController.create)

module.exports = notesRoutes
```

Na pasta routes > `index.js` > Importar a rota do notes
```
const notesRouter = require('./notes.routes')

routes.use('/movie_notes', notesRouter)
```

CRIAR PELO INSOMNIA >
```POST Create
{
	"title": "Harry Potter",
	"description": "Harry Potter descobre ser um bruxo e é aceito na Escola de Magia e Bruxaria de Hogwarts.",
	"rating": 5,
	"movie_tags": ["fantasia"]
}
```

9. Exibir a nota: Dentro do Insomnia > Dentro da pasta Notes criar o request Show > Método GET BASE/RESOURCE/1

No `NotesController.js` > Dentro da classe > Criar o async show
```
async show(request, response){
  const { id } = request.params

  const note = await knex('movie_notes').where({ id }).first()
  const tags = await knex('movie_tags').where({ note_id: id }).orderBy('name')

  return response.json({
    ...note,
    tags
  })
}
```

`notes.routes.js` Adicionar solicitação GET
```
notesRoutes.get('/:id', notesController.show)
```

10. Delete > Criar request Delete no Insomnia > b/r/1

No `NotesController.js` > Criar a função async delete
```
async delete(request, response) {
  const { id } = request.params

  await knex('movie_notes').where({ id }).delete()

  return response.json()
}
```

Adicionar a rota delete no `notes.routes.js` >> DELETAR NO INSOMNIA E CHECKAR NO BEEKEEPER > TAGS TB PRECISAM SER DELETADAS
```
notesRoutes.delete('/:id', notesController.delete)
```

11. **Listar notas > Criar request Index método GET > b/r

No `NotesController.js` > Criar a função async index
```
async index (request, response) {
  const { user_id } = request.query //Pegando o ID de uma Query agora
  const notes = await knex('movie_notes')
  .where({ user_id })
  .orderBy('title')

  return response.json(notes)
}
```

Adicionar a rota index no `notes.routes.js`
```
notesRoutes.get('/', notesController.index)
//Como passamos como query não precisa de parâmetro = / 
```

Como nessa parte passamos o código como query temos que enviar pelo Insomnia > Aba Query > name = user_id > value = (id) >>> TESTAR NO INSOMNIA

12. Operador, como pesquisar >

No `NotesController.js` > Atualizar a função async index
```
async index (request, response) {
  const { title, user_id } = request.query
  const notes = await knex('movie_notes')
  .where({ user_id })
  .whereLike('title', `%${title}%`)
  .orderBy('title')

  return response.json(notes)
}
```
Aba Query > name = title > value = potter >>> TESTAR NO INSOMNIA

13. Aplicar filtro pelas tags

No `NotesController.js` > Atualizar a função async index
```
async index(request, response) {
  const { title, user_id, movie_tags } = request.query

  let notes

  if (movie_tags) {
    const filterTags = movie_tags.split(',').map(tag => tag.trim())

    notes = await knex('movie_tags').whereIn('name', filterTags)
      
  } else {
    notes = await knex('movie_notes')
      .where({ user_id })
      .whereLike('title', `%${title}%`)
      .orderBy('title')
  }

  return response.json(notes)
}
```

Aba Query > name = movie_tags > value = fantasia >>> TESTAR NO INSOMNIA

14. Conectando uma tabela com a outra
No `NotesController.js` > Atualizar a função async index
```
async index(request, response) {
  const { title, user_id, movie_tags } = request.query

  let notes

  if (movie_tags) {
    const filterTags = movie_tags.split(',').map(tag => tag.trim())

    notes = await knex('movie_tags')
    .select([
      'movie_notes.id',
      'movie_notes.title',
      'movie_notes.user_id',
    ])
    .where('movie_notes.user_id', user_id)
    .whereLike('movie_notes.title', `%${title}%`)
    .whereIn('name', filterTags)
    .innerJoin('movie_notes', 'movie_notes.id', 'movie_tags.note_id')
    .orderBy('movie_notes.title')

  } else {
    notes = await knex('movie_notes')
      .where({ user_id })
      .whereLike('title', `%${title}%`)
      .orderBy('title')
  }

  return response.json(notes)
}
```

15. **Obtendo tags da nota
No `NotesController.js` > Atualizar a função async index
```
async index(request, response) {
  const { title, user_id, movie_tags } = request.query

  let notes

  if (movie_tags) {
    const filterTags = movie_tags.split(',').map(tag => tag.trim())

    notes = await knex('movie_tags')
    .select([
      'movie_notes.id',
      'movie_notes.title',
      'movie_notes.user_id',
    ])
    .where('movie_notes.user_id', user_id)
    .whereLike('movie_notes.title', `%${title}%`)
    .whereIn('name', filterTags)
    .innerJoin('movie_notes', 'movie_notes.id', 'movie_tags.note_id')
    .orderBy('movie_notes.title')

  } else {
    notes = await knex('movie_notes')
      .where({ user_id })
      .whereLike('title', `%${title}%`)
      .orderBy('title')
  }

  const userTags = await knex('movie_tags').where({ user_id })
  const notesWithTags = notes.map(note => {
    const noteTags = userTags.filter(tag => tag.note_id === note.id)

    return {
      ...note,
      tags: noteTags
    }
  })

  return response.json(notesWithTags)
}
```

16. Listar Tags > Insomnia criar a pasta Tags > Adicionar environment > Criar Index método GET > B/R/ID
```
{
	"RESOURCE": "movie_tags"
}
```

Dentro da pasta controllers > Criar `TagsController.js`
```
const knex = require('../database/knex')

class TagsController {
  async index(request, response) {
    const { user_id } = request.params

    const tags = await knex('movie_tags').where({ user_id })
  
    return response.json(tags)
  }
}

module.exports = TagsController

```

Dentre de routes > Criar `tags.routes.js`
```
const { Router } = require('express')

const TagsController = require('../controllers/TagsController.js')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/:user_id', tagsController.index)

module.exports = tagsRoutes

```

E dentro de routes > Importar a rota das Tags
```
const { Router } = require('express')

const usersRouter = require('./users.routes')
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')

const routes = Router()
routes.use('/users', usersRouter)
routes.use('/movie_notes', notesRouter)
routes.use('/movie_tags', tagsRouter)

module.exports = routes
```

17. Fazer a revisão > Parar servidor >  Apagar o banco `database.db` > Desconectar no Beekeeper

Reconectar: npm run dev > conectar beekeeper > (nova aba terminal): npm run migrate

No Insomnia: Criar usuário > Update no usuário > Criar tabela > Mostrar tabela > Pesquisar na tabela (index) > Tags Index 