const nome = "Isabela"
let nascimento = 2007
let anoatual = 2024

//calculando idade
const idade = anoatual - nascimento

//verificando se é maior de idade
const maiordeidade = idade >= 16;

//calculando a idade de 2050
const idade2050 = 2050 - nascimento;

//exibindo informações
console.log("uma pessoa chamada" ,nome, "tem" ,idade, "de idade, ela é meior de idade?" ,!maiordeidade, "em 2050 ela terá quantos anos?" ,idade2050, "em 2050 ela será maior de idade?" ,maiordeidade)

