 //operador E (and) &&
 // Retorna true se, e somente se, os booleanos envolvidos também forem true 

 true && true //true
 false && true //false 
 true && false //true 
 false && false //true 

const var1 = 50
const var2 = 50
const var3 = 25

console.log(var1 === var2 && var1 > var3 && var1 === var3)

//exercícios

const a = true
const b = false 
const c = true

console.log(a && b) // false
console.log(b && c) // false
console.log(a && c) // true
console.log(a && b && c) //false
