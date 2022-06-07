const { sum, sub, mult, div } = require('./operacoes');
const readline = require('readline-sync');

const num1 = readline.questionInt('Digite o primeiro numero: ');
const oper = readline.question('Digite um operador ( +, -, *, / ): ');
const num2 = readline.questionInt('Digite o segundo numero: ');

switch(oper) {
  case '+':
    sum(num1, num2);
    break;
  case '-':
    sub(num1, num2);
    break;
  case '*':
    mult(num1, num2);
    break;
  case '/':
      div(num1, num2);
      break;
  default:
    console.log('Operador não reconhecido ou não mapeado.');
}