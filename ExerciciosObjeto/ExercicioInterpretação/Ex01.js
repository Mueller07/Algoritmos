//01.Leia o código abaixo
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console? 
//no primeiro console será empresso o indice 0 do array elenco, que é "Matheus Nachtergaele"
//no segundo console será impresso a quantidade de caracteres presentes no array -1
//no terceiro console "canal globo, horario 14h.

