//2.Leia o código abaixo
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?
//1 - vai imprimir tudo oque esta dentro do objeto
//2- vai imprimir o nome do gato = juba e todos as outras caracteristicas do cachorro
//3- vai imprimir tdas as caracteristicas do gato e so vai alterar o nome colocando no lugar do "a" a letra "o", ou seja com o nome "jubo"




//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
