const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function imparoupar(num1) { 
    if (num1 % 2 === 0) {
    console.log(`par`);
} else {
    console.log(`ímpar`)
 }
  rl.close();
}
rl.question(`digite um número `, (num1) => {
    imparoupar(num1)
})
