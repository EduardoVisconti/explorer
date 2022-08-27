# DOM

// Event-driven - tudo que é direcionado a eventos
// programação imperativa - que dá ordens, passo a passo do que tem que ser feito
// callback - passar função como argumento

buttonSet.addEventListener('click', function () { //quando clicar no botão set

minutes = prompt('Quantos minutos?') //irá fazer um promp pro cliente

minutesDisplay.textContent = String(minutes).padStart(2, '0') //pega o conteudo/número digitado do cliente e passa pra uma string adicionando 2 caracteres e o 0 na frente
})

\\\\\\\

function countdown() {
setTimeout(function () { //
let seconds = Number(secondsDisplay.textContent) //passando em numeros para fazermos o if
let minutes = Number(minutesDisplay.textContent)

    if (seconds <= 0) { //se o segundos for menos ou igual a 0 - qnd o segundos chegar a 0
      seconds = 60 //volta para o 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0') //pega o conteúdo(numero digitado pelo client) e forma em String, fazendo a subtração (qnd o segundos chega a 0) e com o pad fazendo ser 2 caracteres e caso não tenha a primeira fazemos o preenchimento com '0'
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0') //pega o segundos do conteudo digitado, forma em string e faz subtração dos segundos e adição de caracter

    if (minutes <= 0) { //quando o minutos zerar
      return //pare a função
    }

    countdown() //rodar dnv. A CADA 1 SEGUNDO V V

}, 1000) //de quanto em quanto tempo fazer as pausas/repetições, 1s
}

\\\\\\\\\\\\\\\\
