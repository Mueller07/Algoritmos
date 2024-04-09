const fatorial = require('./fatorial');

test('Fatorial de 5 deve ser igual a 120', () => {
  expect(fatorial(5)).toBe(120);
});

test('Fatorial de 0 deve ser igual a 1', () => {
  expect(fatorial(0)).toBe(1);
});

test('Fatorial de 1 deve ser igual a 1', () => {
  expect(fatorial(1)).toBe(1);
});

test('Fatorial de 10 deve ser igual a 3628800', () => {
  expect(fatorial(10)).toBe(3628800);
});


function fatorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  module.exports = fatorial;