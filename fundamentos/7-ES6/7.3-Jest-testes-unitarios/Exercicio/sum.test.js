const funs = require('./sum');

describe('Teste da função sum()', () => {

  it('Soma dois valores', () => {
    expect(funs.sum(4,5)).toBe(9);
  });
  
  it('Soma de 0 e 0 deve retornar 0', () => {
    expect(funs.sum(0,0)).toBe(0);
  });
  
  it('Deve retornar o erro "parameters must be numbers" caso seja passado "5" como parametro', () => {
    expect(() => {funs.sum(4,'5') }).toThrowError(new Error('parameters must be numbers'));
  });

});


describe('Testes da função myRemove()', () => {

  it('Se o parâmetro passado for 3, ele será removido do array', () => {
    expect(funs.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Se o parâmetro for 3, o array retornado não contêm o 3', () => {
    expect(funs.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  
  it('Se o parâmetro for 5, o array não dever ser alterado', () => {
    expect(funs.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});


describe('Testa a função myFizzBuzz()', () => {
  
  it('Um número divisível por 3 e 5 deve retornar "fizzbuzz"', () => {
    expect(funs.myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it('Um número divisível apenas por 3 deve retornar "fizz"', () => {
    expect(funs.myFizzBuzz(9)).toMatch('fizz');
  })

  it('Um número divisível apenas por 5 deve retornar "buzz"', () => {
    expect(funs.myFizzBuzz(25)).toMatch('buzz');
  })

  it('Um número não divisível por 5 ou 3 deve retornar o próprio número', () => {
    expect(funs.myFizzBuzz(7)).toBe(7);
  });

  it('caso o valor passado não seja um número o retorno deve ser false', () => {
    expect(funs.myFizzBuzz('')).toBeFalsy();
  })

});


describe('Testa as funções encode() e decode()', () => {

  it('encode e decode devem ser funções', () => {
    expect(typeof funs.encode).toBe('function');
  });

  it('decode e decode devem ser funções', () => {
    expect(typeof funs.decode).toBe('function');
  });

  it('As vogais "a, e, i, o, u" devem ser convertidas nos numeros "1, 2, 3, 4, 5" respectivamente', () => {
    expect(funs.encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
  });

  it('Os números "1, 2, 3, 4, 5" devem ser convertidos nas vogais "a, e, i, o, u" respectivamente', () => {
    expect(funs.decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
  });

  it('Consoantes não devem ser convertidasa em números', () => {
    expect(funs.encode('bcdfghjklmnpqrstvwxyz')).toMatch('bcdfghjklmnpqrstvwxyz');
  });

  it('Numeros fora do intervalo de 1 a 5 não devem ser convertidos em vogais', () => {
    expect(funs.decode('6, 7, 8, 9, 0')).toMatch('6, 7, 8, 9, 0');
  });

  it('A string retornada pela função encode() deve ter o mesmo tamanho da que foi passada', () => {
    expect(funs.encode('javaScript').length).toBe(10);
  });

  it('A string retornada pela função decode() deve ter o mesmo tamanho da que foi passada', () => {
    expect(funs.encode('j1v1Scr3pt').length).toBe(10);
  });
})

