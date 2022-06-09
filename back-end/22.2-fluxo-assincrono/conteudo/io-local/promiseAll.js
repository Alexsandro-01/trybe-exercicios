const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });


  // Vamos reescrever quase o mesmo código que vimos em Promise, evitando assim um callback hell. Desta vez, vamos escrever no final a soma do tamanho de todos os arquivos. Além disso, utilizar o módulo ('fs').promises para usarmos os métodos já com a implementação de promises internamente, dispensando assim o tratamento das callbacks.

  // Pronto! Agora, estamos lendo os três arquivos ao mesmo tempo, e nosso .then será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises.  