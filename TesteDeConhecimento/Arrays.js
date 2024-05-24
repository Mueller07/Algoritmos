/*Arrays:

Mostre o valor "Volvo" do array "cars":*/

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1])

//Mude o primeiro item de "cars" para "Ford":

const cars1 = ["Saab", "Volvo", "BMW"];

cars1[0] = 'Ford'
console.log(cars1)

//Mostre o número de itens que há no array usando a propriedade certa:

const cars2 = ["Volvo", "Jeep", "Mercedes"];
console.log(cars2.length)

//Use o método correto de Array para remover o último item do array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop()
console.log(fruits)

//Use o método correto de Array para adicionar "Kiwi" ao array fruits.
const fruits1 = ["Banana", "Orange", "Apple"];
fruits1.push('Kiwi')
console.log(fruits1)

//Use o método splice() para remover "Orange" e "Apple" do array fruits.
const fruits2 = ["Banana", "Orange", "Apple"];

console.log(fruits2.splice([1,2]))