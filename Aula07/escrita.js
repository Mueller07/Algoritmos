//1 
let idade = 20

if(idade >= 18){
    console.log("você pode dirigir!")
} else 
    console.log('Você não pode dirigir!')


//2
const turno = "M"

if (turno === "M") {
    console.log("Bom dia!");
} else if (turno === "V") {
    console.log("Boa tarde!");
} else if (turno === "N") {
    console.log("Boa Noite");
} else {
    console.log("turno inválido");
}

//3 
const turno1 = "M"
switch (turno1) {
    case "M":
      console.log("Bom Dia!");
      break;
    case "V":
      console.log("Boa Tarde!");
      break;
    case "N":
      console.log("Boa Noite!");
      break;
    default:
      console.log("Turno inválido. Por favor, digite M para Matutino, V para Vespertino ou N para Noturno.");
      break;
}

// 4. Definindo o gênero do filme e o preço do ingresso
const generoDoFilme = "fantasia";
const precoDoIngresso = 12;

// Verificando se o filme é do gênero fantasia e o preço do ingresso é abaixo de 15 reais
if (generoDoFilme === "fantasia" && precoDoIngresso < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme.");
}