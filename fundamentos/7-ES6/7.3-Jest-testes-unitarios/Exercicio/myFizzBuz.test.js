function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('Testa a função myFizzBuzz()', () => {
  
  it('Um número divisível por 3 e 5 deve retornar "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it('Um número divisível apenas por 3 deve retornar "fizz"', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  })

  it('Um número divisível apenas por 5 deve retornar "buzz"', () => {
    expect(myFizzBuzz(25)).toMatch('buzz');
  })

  it('Um número não divisível por 5 ou 3 deve retornar o próprio número', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('caso o valor passado não seja um número o retorno deve ser false', () => {
    expect(myFizzBuzz('')).toBeFalsy();
  })

});

// console.log(typeof myFizzBuzz('s'))