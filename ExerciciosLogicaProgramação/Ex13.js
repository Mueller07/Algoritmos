/*13. Calcular a soma dos números ímpares de 1 a 100: Utilize um loop for para
calcular a soma dos números ímpares de 1 a 100. Mostre o resultado no console. */

let soma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
}

console.log("A soma dos números ímpares de 1 a 100 é:", soma);
