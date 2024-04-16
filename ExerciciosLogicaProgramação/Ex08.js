/*Ler 10 números do usuário e mostrar o maior e o menor número digitado:
Utilize um loop for para ler 10 números do usuário e encontrar o maior e o menor
número digitado. Mostre os resultados no console.*/

const readlineSync = require('readline-sync');

let maior = 0
let menor = 0

for (let i = 1; i <= 10; i++) {
    let numero = readlineSync.question(`Digite o numero ${i}: `);

    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}

console.log("O maior numero digitado é:", maior);
console.log("O menor numero digitado é:", menor);
