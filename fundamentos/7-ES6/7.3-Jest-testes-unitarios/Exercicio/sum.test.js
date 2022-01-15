const sum = require('./sum');

describe('Teste da função sum()', () => {

  it('Soma dois valores', () => {
    expect(sum(4,5)).toBe(9);
  });
  
  it('Soma de 0 e 0 deve retornar 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  
  it('Deve retornar o erro "parameters must be numbers" caso seja passado "5" como parametro', () => {
    expect(() => { sum(4,'5') }).toThrowError(new Error('parameters must be numbers'));
  });

});



