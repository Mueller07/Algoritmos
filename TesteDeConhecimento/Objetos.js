//Objetos:

//Mostre a informação "John" em um console.log, extraindo essa informação do objeto:

const person = {
  firstName: "John",
  lastName: "Doe"
};

console.log(person.firstName)


//Adicione a seguinte propriedade e valor ao objeto person: country: Norway.

const person1 = {
  firstName: "John",
  lastName: "Doe" 

};

person1.country = 'Norway'
console.log(person1)


/*Crie um objeto chamado person com name = John e age = 50.
Em seguida, acesse o objeto para exibir a mensagem "John tem 50 anos.".*/

const person2 = {
    name: 'John',
    age: 50
}

console.log(`${person2.name} tem ${person2.age} anos.`)

//Alterei o nome de algumas variaveis para não aparecer erros ao imprimir os resultados no teminal.