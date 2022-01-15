const sum = require('./sum');

it('Soma dois valores', () => {
  expect(sum(4,5)).toBe(9);
});

it('Soma de 0 e 0 deve retornar 0', () => {
  expect(sum(0,0)).toBe(0);
});

it('Deve retornar o erro "parameters must be numbers" caso seja passado "5" como parametro', () => {
  expect(() => { sum(4,'5') }).toThrowError(new Error('parameters must be numbers'));
});

// ========================= //

/* const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});
 */