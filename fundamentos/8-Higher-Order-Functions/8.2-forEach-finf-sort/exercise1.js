const books = require('./books');

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// Adicione o código do exercício aqui:
function authorBornIn1947() {
  // escreva aqui o seu código
  const result = books.find((value) => {
    return value.author.birthYear === 1947;
  });

  console.log(result.author.name);
}

authorBornIn1947();