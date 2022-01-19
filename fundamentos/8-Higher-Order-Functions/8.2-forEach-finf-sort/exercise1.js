const books = require('./books');

// Adicione o código do exercício aqui:
function authorBornIn1947() {
  // escreva aqui o seu código
  const result = books.find((value) => {
    return value.author.birthYear === 1947;
  });

  console.log(result.author.name);
}

authorBornIn1947();