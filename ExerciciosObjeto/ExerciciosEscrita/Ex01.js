//1. Resolva os passos a seguir: 
    
/*a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**/

const eu = {
    nome: "Isabela ",
    apelido: ['Isa ', 'Bela ', 'Bebela']
}

function pessoa(eu){
    console.log(`eu sou ${eu.nome}, mas pode me chamar de: ${eu.apelido}`)
}

pessoa(eu)


//b) Agora, usando o operador spread/espalhamento , crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novoEu = {
    ...eu,
    apelido: ['Bebel ', 'Muéler ', 'Muela ']
}
pessoa(novoEu)
