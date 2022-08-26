# ES6 Modules
`
\\ ` import e export simples ` \\
`
[-] Podemos importar qualquer arquivo e ele será executado imediatamente, como uma função executada.

-**** utils.js ****-
const message = 'mensagem' : essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar

-**** main.js ****-
import './utils.js' : nessa linha ele importa e já executa o arquivo

`
\\ ` default import e export ` \\
`
[-] Exportamos qualquer tipo de dado e, ao importar, podemos dar qualquer nome.
[-] Apenas um default por arquivo.

-**** utils.js ****-
export default 'algum dado'

---- ou, para um dado já existente ----
const text = 'alguma coisa'
export default text : default não fala o nome especifíco

-**** main.js ****-
import qualquerNome from './utils.js' : É como se esse importe estivesse criando a variável

--------

-**** utils.js ****-
export default 'function () {
  return 'alo'
}

-**** main.js ****-
import nomeQualquer from './utils.js'

console.log(nomeQualquer())

`
\\ ` named export ` \\
`
[-] Exportamos uma variável ou função e, ao importar, devemos colocar o mesmo nome.

-**** utils.js ****-
export const today = Date.now()

-- exportando um valor já existente --
const double = number => number * 2
export { double }

-- exportando diversos --
export { today, double}

-**** main.js ****-
import { double, today } from './utils.js'

console.log(double(5))

`
\\ ` mixed (named & default) ` \\
`
[-] Poderemos usar um default export por arquivo e um (ou mais) named export.

-**** utils.js ****-
const date = new Date()
const greeting = name => 'hello ${name}'

export default function (argument) {
  console.log(date, greeting(argument))
}

export { date, greeting}

-**** main.js ****-
import funcaoPadrao { date, greeting } from './utils.js'

funcaoPadrao('Eduardo')

`
\\ ` import as ` \\
`
[-] É possível renomear um ou mais dados que foram exportados

-**** utils.js ****-
export function sum(a, b) {
  return a + b
}

-**** main.js ****-
import { sum as soma } from './utils.js' : usamos o "as" para trocar o sum pelo soma

console.log(soma(18, 2))

`
\\ ` import * as ` \\
`
[-] Podemos importar todos os named exports e dar um nome padrão

-**** utils.js ****-
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtractum = (a, b) => a - b
export const dividem = (a, b) => a / b

-- ou --
export { sum, multiplay, subtract, divide }

-**** main.js ****-
import * as calculator from './utils.js' : * = importa tudo e chama de calculator.

console.log(calculator.subtract(15, 9))

