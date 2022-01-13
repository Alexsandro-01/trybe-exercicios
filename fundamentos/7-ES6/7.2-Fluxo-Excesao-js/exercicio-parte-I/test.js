/* let n1 = 1;
let n2 = '';
// console.log(n)

const very = (n1, n2) => {
  if (typeof n1 !== 'number' ||typeof n2 !== 'number') {
    throw new Error('Não é um numero');
  }
  return 'É um número';
}

const a = (n1, n2) => {
  try {
    very(n1,n2);
    return very(n1,n2)
  } catch (error) {
    throw error.message;
  }
}
console.log(a(n1,n2)) */

const n = parseInt('');
const n2 = 1 + n;
const n3 = 2;
//console.log(isNaN(n2))

const fun = (v) => {
  try {
    if (isNaN(v)) {
      throw new Error('Ocorreu um erro');
    }
    else {
      return 'É um numero';
    }
  } catch (e) {
    return e.message;
  }
}

console.log(fun(n2))

'👨‍💻'