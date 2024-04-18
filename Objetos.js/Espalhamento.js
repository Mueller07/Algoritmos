//spread 
const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'Prof@gmail.com',
    cidade: 'São Paulo'
}

const novoUsuario = {
    ...usuario,
    nome: 'Joao',
    idade: 28
}

console.log(usuario, novoUsuario)