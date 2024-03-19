// 1. a) Explique o que o código faz. Qual o teste que ele realiza? 
// Este código recebe uma resposta do usuário, que é armazenada na variável respostaDoUsuario. Em seguida, converte essa resposta para um número usando Number() e armazena na variável numero. Então, ele verifica se o número é par usando o operador de módulo %. Se o resto da divisão por 2 for igual a 0, significa que o número é par, então ele imprime "Passou no teste.". Caso contrário, imprime "Não passou no teste.".

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//  Ele imprime "Passou no teste" para números pares, ou seja, números que têm resto 0 quando divididos por 2.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// Ele imprime "Não passou no teste" para números ímpares, ou seja, números que têm resto diferente de 0 quando divididos por 2.






// 2.a) Para que sirva o código acima? O código acima serve para determinar o preço de uma determinada fruta com base em uma lista pré-definida de frutas. Ele usa a estrutura de controle switch para isso.

//b) Qual será a mensagem impressa no console, se o valor da fruta for "Maçã"?Se o valor da variável fruta for "Maçã", o código atribuirá o preço de 2.25 à variável preco e então imprimirá a mensagem no console.

//c) Considera que um usuário deseja comprar uma Pêra, qual seria a mensagem impressa no console se retiraríamos ou que breakestá logo acima do default(o breakindicado pelo comentário "BREAK PARA O ITEM c.")? 
//Se retirarmos o break logo acima do default (aquele indicado pelo comentário "BREAK PARA O ITEM c."), o código não parará a execução do switch nesse ponto e continuará executando os casos abaixo. Nesse caso, se o usuário desejar comprar uma Pêra, o código atribuirá o preço de 5.5 à variável preco e então imprimirá a mensagem no console. No entanto, isso significa que mesmo se a fruta for "Pêra", ele continuará verificando os casos abaixo do default, o que pode resultar em comportamento indesejado, a menos que haja uma lógica específica para isso.





//3.a) O que a primeira linha está fazendo?
// A primeira lina troca a palavra "50" para um número

//b) Considere um usuário digitado o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// se o número fosse dez, a mensagem impressa seria "esse número passou no teste". Se o número fosse -10, a mensagem impressa seria "esta mensagem é secreta" pos não passará no teste.

//c) Haverá algum erro no console? 
//Sim, haverá um erro no console. Quando tentamos acessar a variável mensagem fora do bloco de código onde ela foi declarada, ocorrerá um erro de referência não definida. Isso porque a variável mensagem foi declarada dentro do escopo do bloco if, tornando-se inacessível fora desse bloco. Portanto, o console exibirá uma mensagem de erro indicando que mensagem não está definida.




