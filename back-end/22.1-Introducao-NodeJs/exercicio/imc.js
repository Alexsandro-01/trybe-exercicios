const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso (em kg)? ');
const altura = readline.questionFloat('Qual sua altura (em cm)? ');

const alturaEmMetros = altura / 100;

const imc = (pe, al) => {
  const resultImc = (pe / (al * al)).toFixed(2);

  if (resultImc < 18.5) console.log(`${resultImc}, Abaixo do peso (magreza)`);
  if (resultImc >= 18.5 && resultImc < 25) console.log(`${resultImc}, Peso normal`);
  if (resultImc >= 25 && resultImc < 30) console.log(`${resultImc}, Acima do peso (sobrepeso`);
  if (resultImc >= 30 && resultImc < 35) console.log(`${resultImc}, Obesidade grau I`);
  if (resultImc >= 35 && resultImc < 40) console.log(`${resultImc}, Obesidade grau II`);
  if (resultImc > 40) console.log(`${resultImc}, Obesidade grau III e IV`);
};

imc(peso, alturaEmMetros);