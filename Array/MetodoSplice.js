const letras = ["A","B","C","D","E","F","G","H"]
//indices (1)    0   1   2   3    4   4   5   6

letras.splice(2, 1)
//      letras ["a", "b", "d", "e", "f", "g", "h"]
// indices (i)   0    1    2    3    4    5    6    

letras.splice(3, 2)
//letras = a b d g h

console.log(letras.splice(2, 1))
console.log(letras.splice(3, 2))
