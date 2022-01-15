function encode(value) {
  // seu código aqui
  let vetor = value.split('');
  let result = '';

  for (let i = 0; i < vetor.length; i += 1) {
    switch (vetor[i]) {
      case 'a':
        result += 1;
        break;
      case 'e':
        result += 2;
        break;
      case 'i':
        result += 3;
        break;
      case 'o':
        result += 4;
        break;
      case 'u':
        result += 5;
        break;
      default:
        result += vetor[i];
    }
  }

  return result;
}

function decode(value) {
  // seu código aqui
  let vetor = value.split('');
  let result = '';

  for (let i = 0; i < vetor.length; i += 1) {
    switch (vetor[i]) {
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += vetor[i];
    }
  }

  return result;
}

 //console.log(encode('dasdfas f').length)

describe('Testa as funções encode() e decode()', () => {

  it('encode e decode devem ser funções', () => {
    expect(typeof encode).toBe('function');
  });

  it('decode e decode devem ser funções', () => {
    expect(typeof decode).toBe('function');
  });

  it('As vogais "a, e, i, o, u" devem ser convertidas nos numeros "1, 2, 3, 4, 5" respectivamente', () => {
    expect(encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
  });

  it('Os números "1, 2, 3, 4, 5" devem ser convertidos nas vogais "a, e, i, o, u" respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
  });

  it('Consoantes não devem ser convertidasa em números', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toMatch('bcdfghjklmnpqrstvwxyz');
  });

  it('Numeros fora do intervalo de 1 a 5 não devem ser convertidos em vogais', () => {
    expect(decode('6, 7, 8, 9, 0')).toMatch('6, 7, 8, 9, 0');
  });

  it('A string retornada pela função encode() deve ter o mesmo tamanho da que foi passada', () => {
    expect(encode('javaScript').length).toBe(10);
  });

  it('A string retornada pela função decode() deve ter o mesmo tamanho da que foi passada', () => {
    expect(encode('j1v1Scr3pt').length).toBe(10);
  });
})