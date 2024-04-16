const professor = {
    nome: 'Vitor',
    idade: 27,
    email: 'Vitor@gmail.com',
    tarefas: ['Dar aula', "responder duvidas"],
    contarPiada: function() {
        console.log('É pa vê ou pa cume?')
    }
}
professor.nome = 'Mika'
professor[email] = 'profMika@gmail.com'
console.log(professor["email"])
console.log(professor.idade)