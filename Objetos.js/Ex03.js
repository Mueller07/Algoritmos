const GenteGrande = {
    diretor: 'Dennis Dugan',
    AnoLançamento: 2010,
    elenco: ['Adam Sendler', 'Kevin James', 'David Spade', 'Chris Rock', 'Rob Schneider'],
    assistiu: true
}

//Exercicio 2
GenteGrande.Personagens = ["Lenny Feder", 'Eric Lamonsoff', 'Marcus Higgins', 'Kurt McKeinzie', 'Rob Hilliard']

console.log(GenteGrande.elenco + '\n', GenteGrande.Personagens + '\n')

GenteGrande.elenco[0] = 'Xuxa'

console.log(GenteGrande)