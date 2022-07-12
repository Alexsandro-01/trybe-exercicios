const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.error('Erro: %s', err.message);
  });

  // https://nodejs.org/api/fs.html#fs_file_system_flags; flags para uso no writeFiles


// =================== utilizando async/await

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()