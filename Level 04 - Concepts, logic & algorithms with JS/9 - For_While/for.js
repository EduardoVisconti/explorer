// Estrutura de repetição
// for (inicialização de uma variável; condição de continuação para o loop; expressão final)

// break - para a execução do loop
// cotinue - pula a execução do momento

for (let i = 0; i < 10; i++) {
  // i é 0; i menor que 10?(sim); adiciona+1;
  if (i === 5) {
    //se o i for igual a 5, o loop continua mas ignora o 5
    continue
  }

  if (i === 8) {
    //se o i for igual a 8, pare!
    break
  }

  console.log(i)
}
