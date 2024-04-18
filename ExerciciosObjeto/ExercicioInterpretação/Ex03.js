//Leia o código abaixo
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
//1- vai imprimir false, pois 'backender' = false
//2- vai imprimir undfined pois não tem nenhum valor atribuido a altura

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//não sei 