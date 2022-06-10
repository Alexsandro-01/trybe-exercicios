const fs = require('fs');

function leArquivo(nomeArquivo) {
  try {
    const conteudo = fs.readFileSync(nomeArquivo, 'utf-8');

    return conteudo;
  } catch (error) {
    return null;
  }
};

module.exports = leArquivo;