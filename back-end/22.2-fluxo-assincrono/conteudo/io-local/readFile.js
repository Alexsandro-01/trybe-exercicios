// ================= Modo normal

// const fs = require('fs');

// const arquivo = 'meu-arquivo.txt';

// fs.readFile(arquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${arquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });



// ============ Com promisses;

const fs = require('fs').promises;

const arquivo = 'meu-arquivo.txt';

fs.readFile(arquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${arquivo}\n Erro: ${err}`);
    process.exit(1);
  })