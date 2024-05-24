/*Switch:

Crie uma declaração switch que irá mostrar "Olá" se fruits for "banana" e "Bem-vindo" se fruits for "maçã".*/
let fruits = "maçã"

switch (fruits) {
    case "banana":
        console.log("Olá");
        break;
    case "maçã":
        console.log("Bem-vindo");
        break;
    default:
        console.log("Fruta não encontrada");
        break;
}

//Adicione uma seção que irá alertar "Nem um nem outro" se fruits não for nem "banana" nem "maçã".
let fruits1 = "melancia"

switch (fruits1) {
    case "banana":
        console.log("Olá");
        break;
    case "maçã":
        console.log("Bem-vindo");
        break;
    default:
        console.log("Nem um Nem outro");
        break;
}
