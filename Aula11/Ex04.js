let comida = ["sushi", "pizza", "hamburguer", "strogonoff", "batata"]
console.log(comida)

console.log(`\nb) Essas são minhas comidas preferidas:`)
console.log(comida.join("\n"))

const readlineSync = require("readline-sync");
const comidafav = readlineSync.question(" qual a sua comida favorita?");

comida.push(comidafav)
console.log(comida.splice(1, 1))
console.log(comida)


