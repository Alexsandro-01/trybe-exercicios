/* Exercicio I */

const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

/* Exercicio II */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const order = (param) => {
  const arr = param.sort((a,b) => a - b);
  return arr;
}

console.log(order(oddsAndEvens)); // será necessário alterar essa linha 😉