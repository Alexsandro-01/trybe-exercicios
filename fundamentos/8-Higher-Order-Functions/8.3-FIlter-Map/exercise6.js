// eslint-disable-next-line no-undef
const books = require('./books');

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

/* const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
]; */

function oldBooks(books) {
  // escreva seu código aqui
  const result = books.filter( (book) => {
    if(2022 - book.releaseYear > 60) {
      return book;
    }
  }).map( (val) => val.name);
  
  console.log(result);
}
oldBooks(books);
