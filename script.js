const dividendo = Number(prompt("Informe o dividendo")) // "5"
const divisor = Number(prompt("Informe o divisor")) // "10" -> Number("10") -> 10

console.log(`Dividendo ${dividendo}`)
console.log("Divisor " + divisor)

let resultado = 0

// Se o valor do divisor for igual a zero, 
// não faz o calculo. 
// Senão, pode seguir com o calculo.

if (divisor != 0) {
  resultado = dividendo / divisor
} else {
  resultado = 1
}

// DOM - Document Object Model
const elementoMensagem = document.createElement("h1")
// <h1>mensagem</h1>
elementoMensagem.textContent = `A divisão de ${dividendo} por ${divisor} é igual a ${resultado}`
document.body.appendChild(elementoMensagem)