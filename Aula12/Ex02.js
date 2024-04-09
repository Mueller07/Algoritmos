function encontrarMaiorNumero(array) {
    let maior = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i]; 
      }
    }
  
    return ("O maior número é " + maior);
  }
  
  let numeros = [30, 44, 18, 14, 12, 99];
  
  console.log(encontrarMaiorNumero(numeros))
  