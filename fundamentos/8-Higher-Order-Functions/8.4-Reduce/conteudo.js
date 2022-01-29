// Retornar o maior numero do Array

const numbers = [50, 85, -30, 3, 15];
let count = 0;
for (let index = 0; index < numbers.length; ++index) {
  if (numbers[index] > count) {
    count = numbers[index];
  }
}

console.log('Solução com For(): ',count);

const bigNumber = numbers.reduce( (result, number) => {
  if (number > result) {
    result = number;
  }
  return result;
})

console.log('Solução com reduce: ', bigNumber);

// =====================================  //

/// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const Numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// com filter e reduce
const sumPair = Numbers.filter( (number) => (number % 2 === 0) ? number : false).reduce( (result, num) => result + num);
console.log(sumPair);

// apenas com reduce
const pairSum = Numbers.reduce( (result, number) => {
  /* if (number % 2 === 0) {
    result += number;
  }
  return result; */
  
  return (number % 2 === 0) ? result + number : result;
  
});

/* const pairSum = (res, num) => (
  (num % 2 === 0) ? res + num : res
);
const sumNumbers = (array) => array.reduce(pairSum);*/
console.log(pairSum); 