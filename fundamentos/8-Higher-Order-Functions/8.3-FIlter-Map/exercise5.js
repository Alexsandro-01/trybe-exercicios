const books = require('./books');

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors(books) {
  // escreva seu código aqui
  const result = books.filter( (book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      return book.name;
    };
  }).map( (res) => res.author.name).sort();

  console.log(result);
}
fantasyOrScienceFictionAuthors(books);
