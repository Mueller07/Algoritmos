/*2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`*/

    //a
    const pessoa1 = {
        nome: 'isabela',
        idade: 16,
        profissao:'Programa'
    }
    const pessoa2 = {
        nome1: 'Ronaldo',
        idade1: 20,
        profissao1:'engenheiro'
    }


    //b
     function imprima() {
        const valores = [
            {valor: objeto.nome},
            {caracteres: objeto.nome.length},
            {VIdade: objeto.idade},
            {VProfissão: objeto.profissao},
            {caraProfissao: objeto.profissao.length},
        ]
         
    }
    imprima(pessoa1)
    imprima(pessoa2)

     