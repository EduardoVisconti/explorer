* Quando fazemos o POST no INSOMNIA ele vai para src/server.js 

* No server.js: app.use(routes) - Aplicação usar essa rotas

* No index.js: routes.use('/users', usersRouter) - Como fizemos o POST com o endereço /users, ele já entende que é ele que estamos querendo acessar, e então me leve para o usersRouter (rotas do usuário)

* No users.routes.js: usersRoute.post('/', ... - Pasta raiz qual vai aparecer