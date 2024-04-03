//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem: O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const readlineSync = require("readline-sync")

const nome = readlineSync.question("Qualseu nome? ");
const email = readlineSync.question("Qual o seu e-mail? ");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja Bem-vinda(o) ${nome}`);