function dividirFraseEmPalavras(frase) {
    // Usa o método split para dividir a frase em palavras, utilizando os espaços como separadores
    return frase.split(' ')
  }
  
  const frase = "eu estou com sono";
  const array = dividirFraseEmPalavras(frase);
  console.log(array);
  