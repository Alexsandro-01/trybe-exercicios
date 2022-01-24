const fatorial = (numero) => {
  if (numero < 0) {
    return false;
  }
  return numero === 0 ? 1 : numero * fatorial(numero - 1);
};

console.log(fatorial(5));