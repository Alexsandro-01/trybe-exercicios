function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

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
// console.log(sum(4,'5'))
module.exports = {};
module.exports.sum = sum;
module.exports.myRemove = myRemove;
module.exports.myFizzBuzz = myFizzBuzz;
module.exports.encode = encode;
module.exports.decode = decode;
