//Padronizar qual tipo de mensagem que vai aparecer quando estiver algum erro

class AppError {
  message
  statusCode //O fato de criar essas duas variáveis, faz com que toda a class tome conhecimento dela e consiga acessar ela dentro de qualquer outra funcionalidade

  constructor(message, statusCode = 400) { //toda classe tem um método construtor = método que é carregado automaticamente quando a classe é instanciada, e sempre que for usar eu quero saber do message, statusCode ... E como o statusCode não é informado vamos deixar 400 que é o Erro do cliente (4xx)
    this.message = message //repassando a mensagem para o contexto global (que é o acima) ^^
    this.statusCode = statusCode
  }
}

module.exports = AppError