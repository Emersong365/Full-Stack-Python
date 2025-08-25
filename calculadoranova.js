const numero1 = 10;
const numero2 = 5;
const operador = "*";

let resultado;

switch (operador) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      resultado = "Erro: divisão por zero.";
    }
    break;
  default:
    resultado = "Operador inválido.";
}

console.log(`Resultado: ${resultado}`);