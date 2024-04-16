/*12 Simular um jogo de cara ou coroa: Utilize um loop while para simular um jogo de
cara ou coroa. O jogo termina quando o usuário obtém o resultado desejado (cara
ou coroa).*/

const readlineSync = require('readline-sync');

console.log("Bem-vindo ao jogo de Cara ou Coroa!");


let resultado;
let jogadas = 0;

while (resultado !== resultadoDesejado) {
    let resultadoDesejado = readlineSync.question("Voce quer cara ou coroa? ").toLowerCase();
    if (resultado = Math.random() < 0.5 ? "cara" : "coroa");
    jogadas++;
}

console.log(`Parabens! Voce obteve ${resultadoDesejado} após ${jogadas} jogadas.`);
