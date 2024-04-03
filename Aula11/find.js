//definição de array
const numeros = [1, 2, 3, 4, 5];
//numero que estamos procurando
const numeroProcurado = 9;
//função para verificar se um numeor é igual ao numero procurado
function encontrar(numero){
    return numero === numeroProcurado
}
//filtrando os numeros usando a função encontrar
const numerosEncontrados = numeros.filter(encontrar);
/* é uma função array em javaScript que cria um novo array conectando apenas os elementos que passam em um determinado teste, especificadno por uma função de callback. */

//exibindo os numeros encontrados
console.log(numerosEncontrados); //saída = 3