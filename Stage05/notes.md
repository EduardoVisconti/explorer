# Element and Node
**** As tags HTML, quando usadas pelo DOM,  podemos chamar de node (nó) ou de element (elemento)

[-] 
  const h1 = document.querySelector('h1') - HtmlElement

[-] Pegando vários elementos
  const links = document.querySelectorAll('a') //NodeList

[-] Alterando o estilo
  h1.style.backgroundColor = 'red'

[-] Adicionando classe
  h1.classList.add('hide')

[-] Removendo classes
  h1.classList.remove('hide')

[-] Alterando entre classes
  h1.classList.toggle('hide')


#