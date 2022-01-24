const books = require('./books');

// Encontre o primeiro livro cujo nome possui 26 caracteres.

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  const result = books.find((value) => {
    return value.name.length === 26;
  });

  let res = Object.entries(result);
  let objOrdem = {};
  res = res.sort();

  res.forEach((value) => {
    objOrdem[value[0]] = value[1];
  });
  
  console.log(objOrdem);
}
getNamedBook();