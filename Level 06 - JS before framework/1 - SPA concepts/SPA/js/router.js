export class Router {
  routes = {} //obj vazio

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault() //não faça o padrão

    window.history.pushState({}, '', event.target.href)
    //coloque o estado no histórico
    //tipo de dado, string, url q quero colocar no histórico

    this.handle() //sempre que quiser usar uma função ou propriedade temos que usar o this
  }

  handle() {
    const { pathname } = window.location //pega o pathname dentro da location e bota na const
    const route = this.routes[pathname] || this.routes[404] //se n tiver rota, mostra o 404

    fetch(route) //vai buscar a rota
      .then(data => data.text()) //transforma o data em texto/ quando concluir prometo q vou retornar uma função (arrow function, retorna direto)
      .then(html => {
        document.querySelector('#app').innerHTML = html //colocando o html
      })
  }
}
