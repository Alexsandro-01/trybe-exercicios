function exercicio(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    for (const iterator of arguments) {
      if (typeof iterator !== "number") reject(new Error('Informe apenas numeros'));
    }

    const calculo = (num1 + num2) * num3;
    
    if (calculo < 50) reject(new Error('Valor muito baixo'));

    resolve(calculo);
  });

  return promise;
}

exercicio(15, 3, 4)
  .then(console.log)
  .catch((e) => console.error('Erro: %s', e.message));