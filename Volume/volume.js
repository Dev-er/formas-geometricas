alert('Olá :)!!! Este programa calcula o volume de uma lata de óleo')

let raio = Number(prompt('Entre com a dimensão do raio da lata'))
let altura = Number(prompt('Entre com o valor da altura da lata'))

let volume = (2 * raio * altura)* Math.PI

alert('O volume da lata de óleo é: ' + volume)