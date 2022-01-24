// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...arg) => {
  const result = arg.reduce((acc, curr) => acc + curr, 0);
  return result;
}
console.log(sum(1,2,3,4,5));