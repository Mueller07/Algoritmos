let array //Criando um array
console.log('a. ', array)//imprime a. e  undefined pq n tem nada dentro da variavel 

array = null// altera o valor do array let e torna ele nulo
console.log('b. ', array) // imprime b. e não imprime nada, pois esta nulo 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]// troca o valor da variavel para lista de números
console.log('c. ', array.length)// vai imprimir c. e irá mostrar a quantidade de caracteres dentro do array

let i = 0 // criando variavel i = 0
console.log('d. ', array[i])// imprimindo "d." e 3, que é o valor de i

array[i+1] = 19 // array se torna 1 que é igual a 4, e a variavel ta tornando ele = 19
console.log('e. ', array)// imprime e. 19

const valor = array[i+6] // tornando o valor da array 6
console.log('f. ', valor) // imprime f e o valor que é 9