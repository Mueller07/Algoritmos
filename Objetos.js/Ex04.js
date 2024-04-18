const pessoa = {
    nome: 'Isabela',
    idade: 16, 
    GeneroMusical: 'Sertanejo'
}

function exercicio2(objeto) {
const novaPessoa = {
    ...objeto,
    ComidaPreferida: ['hamburguer ', 'pizza ', 'strogonoff ', 'e ', 'batata '],
    melhorAmigo: 'Eduarda Duane',
    idade: 18
}
console.log(`O nome da pessoa e ${objeto.nome} e suas comidas preferidas são ${novaPessoa.ComidaPreferida} e seu melhor amigo se chama ${novaPessoa.melhorAmigo} e tem ${novaPessoa.idade} anos.`)
}


exercicio2(pessoa)