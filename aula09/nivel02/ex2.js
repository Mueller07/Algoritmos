function usuario(nome, idade) {
    
    if (idade => 18) {
        return "cadastrado feito com sucesso. "
    } else {
    return "O usuário deve ser maior de idade para se cadastrar. "
    }
}
let login = usuario( "Isabela" + 19)

console.log(login)

function consultarUsuario(nome, idade) {
    if ((usuario.nome === nome) && (usuario.idade === idade)) {
     return "usuário já está cadastrado!" 
} else {
    return "usuário não cadastrado!"
}
}
let consultar = consultarUsuario( "Isabela" + 19)
console.log(consultar)