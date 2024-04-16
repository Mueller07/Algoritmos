/*Gerar um número aleatório entre 1 e 100 e pedir ao usuário para adivinhar o
número: Utilize um loop while para gerar um número aleatório entre 1 e 100 e
pedir ao usuário para adivinhar o número. Dê dicas ao usuário se o chute for maior
ou menor que o número aleatório.*/

const readlineSync = require('readline-sync');

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let chute = 0;

console.log("Adivinhe o número entre 1 e 100.");

while (chute !== numeroAleatorio) {
    chute = parseInt(readlineSync.question("Digite seu palpite: "));

    if (chute < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else if (chute > numeroAleatorio) {
        console.log("Tente um número menor.");
    }

    tentativas++;
}

console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
