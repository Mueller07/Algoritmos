/*10. Mostrar a sequência de Fibonacci até o 10º termo: Utilize um loop for para
calcular e mostrar os 10 primeiros termos da sequência de Fibonacci no console.*/

let termoAnterior = 0;
let termoAtual = 1;

console.log("Sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(termoAnterior);
    let proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
}
