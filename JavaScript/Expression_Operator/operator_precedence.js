/* 
    Operator precedence (Precedência de operadores)

De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

console.log(3 > 2/*true*/ > 1/*false*/) //false

console.log(3 > 2 && 2 > 1) //true e true é = true