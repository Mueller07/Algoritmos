/* Criar um programa que lê uma frase do usuário e conta o número de vogais e
consoantes na frase: Utilize um loop for para iterar sobre a frase e contar o
número de vogais e consoantes. Mostre os resultados no console. */

const readlineSync = require('readline-sync');

let frase = readlineSync.question("Digite uma frase: ").toLowerCase();
let vogais = 0;
let consoantes = 0;

for (let i = 0; i < frase.length; i++) {
    let caractere = frase[i];
    if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
        vogais++;
    } else if (caractere === ' '){
        consoantes++;
    }
}

console.log(`Número de vogais na frase: ${vogais}`);
console.log(`Número de consoantes na frase: ${consoantes}`);