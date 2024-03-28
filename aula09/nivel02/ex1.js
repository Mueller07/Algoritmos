function verificarNumero(numero) {
    if (numero > 0) {
      return "positivo";

    } else if (numero < 0) {
      return "negativo";

    } else {
      return "zero";
    }
  }
let resultado = verificarNumero(-19)
console.log(resultado)