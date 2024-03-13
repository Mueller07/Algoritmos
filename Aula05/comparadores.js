const variavel1 = 50
const variavel2 = 35

//Atriubuição de valor: =

//Igual: ""===" verifica de dois valores sãoi iguais 
console.log(variavel1 === (2*25)) // true
console.log(variavel1 === 50) // true
console.log(variavel1 === variavel2) // false


//Diferente: "!==" Verifica se dois valores são diferentes
console.log(variavel1 !== variavel2) // true


//Maior: ">" verifica se o valor da esquerda é maior que o valor da direita
console.log(variavel1 > variavel2) // true
console.log(variavel2 > variavel1) // false

//maior ou igual: >= Verifica se o valor da esquerda é maior ou igual o valor da direita
console.log(variavel1 >= variavel2) // true
console.log(50 >= 35) // true
console.log(50 >= 50) // true
console.log(35 >= 50) //false

//menor: < verifica se o valor da esquerda é menor que o da direita
console.log(variavel1 < variavel2) // false
console.log(23 < 90) // true

//menor ou igual: <= verifica se o valor da esquerda é menor ou igual que o da direita
console.log(variavel1 <= variavel2) // false
console.log(variavel1 <= 50) //true