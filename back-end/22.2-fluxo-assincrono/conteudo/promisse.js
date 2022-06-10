function calculaDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode dividir por zero')); //rejeição

    const result = num1 / num2;
    resolve(result); // resolvida
  });

  return promise;
}

// console.log(calculaDivisao(2,4)); retorna uma promise

calculaDivisao(2,0)
  .then((result) => console.log(result))
  .catch((e) => console.log('erro: %s', e.message));