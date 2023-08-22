// if = se, else = se não

if (condição) {
  //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}
