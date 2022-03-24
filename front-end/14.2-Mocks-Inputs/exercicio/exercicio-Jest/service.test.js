const services = require("./service");

test('1 - Verifica se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  services.random = jest.fn().mockImplementation(() => 10);
  
  services.random();
  expect(services.random).toBeCalled();
  expect(services.random).toBeCalledTimes(1);
  expect(services.random()).toBe(10);
})

test('2 - Fazer mock da função anterior que divide o 1º numero pelo 2º', () => {
  services.random = jest.fn().mockImplementation((a,b) => a / b);

  services.random();
  expect(services.random).toBeCalled();
  expect(services.random).toBeCalledTimes(1);
  expect(services.random(8,2)).toBe(4);
})

test('3 - Verifica se afunção recebe 3 parametros e multiplica eles', () => {
  services.random = jest.fn().mockImplementation((a,b,c) => a * b * c);

  services.random();
  expect(services.random).toBeCalled();
  expect(services.random(2,3,4)).toBe(24);
  expect(services.random(2,3)).toBeNaN();

  services.random.mockClear();

  services.random = jest.fn().mockImplementation((a) => a * 2);
  expect(services.random(10)).toBe(20)
})

describe('4 - Crie três funções', () => {

  test('4A - Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa', () => {
    const upper = jest.spyOn(services, 'upCase').mockImplementation((stg) => stg.toLowerCase());
    
    expect(upper('ALEX')).toEqual('alex');
  });

  test('4A - Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string', () => {
    const lastCharacter = jest.spyOn(services, 'firstCharacter').mockImplementation((stg) => stg[stg.length - 1]);
    
    expect(lastCharacter('ALEX')).toEqual('X');
  });

  test('4A - Implemente, na terceira função: ela deve receber três strings e concatená-las', () => {
    const concatThree = jest.spyOn(services, 'concat').mockImplementation((stg, stg1, stg2) => stg + stg1 + stg2);
    
    expect(concatThree('parale', 'lepi', 'pedo')).toEqual('paralelepipedo');
  });

  test('4C - Após criar os testes, restaure a implementação da primeira função', () => {
    services.upCase.mockRestore();

    expect(services.upCase('ALEX')).not.toEqual('alex');
    expect(services.upCase('alex')).toEqual('ALEX');
  });


});