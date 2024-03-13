//operador OU (OR) ||
//retorna false se, e somante se, todos booleanos envolvidos também foram false

true || true //true
false || true // true 
true || false // true
false || false // false

const a = true
const b = false 
const c = true

console.log(a || b) //true
console.log(b || c) //true
console.log(a || c) //true
console.log(a || b || c) //true