alert('Olá :)!!! Este programa calcula a área e o perímetro de um circulo') // mostra mensagem para o usuário

const raio = Number(prompt('Por favor, digite a dimensão do raio do circulo'))

let area = Number(prompt('A área deste círculo é: ' + (raio * raio * Math.PI )))
let perimetro = Number(prompt('O perímetro deste círculo é: ' + (2 * raio * Math.PI)))

alert('Atualize a página para realizar novo cálculo')