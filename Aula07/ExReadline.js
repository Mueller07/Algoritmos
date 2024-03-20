const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let idade 

rl.question("qual a idade do usuário? ", (idade) => {
    
    if (idade >= 18 ){
        console.log("maior de idade!")
} else {
    console.log("Não é maior de idade!") }

rl.close ();
})