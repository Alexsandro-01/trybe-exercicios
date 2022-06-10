const numero = require('../numero');
const { expect } = require('chai');

describe('Testa se os valores retornados correspondem ao esperado', () => {
  it('Verifica se o retorno é uma string', () => {
    const response = numero(5);

    expect(response).to.be.a('string');
  });
  
  it('verifica se o retorno é "positivo" caso o numero passado seja maior que zero', () => {
    const response = numero(5);
  
    expect(response).to.be.equals('positivo');
  });
  
  it('verifica se o retorno é "negativo" caso o numero passado seja menor que zero', () => {
    const response = numero(-5);
  
    expect(response).to.be.equals('negativo');
  });
  
  it('verifica se o retorno é "neutro" caso o numero passado seja igual a zero', () => {
    const response = numero(0);
  
    expect(response).to.be.equals('neutro');
  });
  
});

describe('Testa em caso de o valor passado não seja um numero', () => {
  
  it('verifica se responde a mensagem esperada caso o valor passado para a função não seja um numero', () => {
    const response = numero('oi');
  
    expect(response).to.be.equals('o valor deve ser um número');
  })
});