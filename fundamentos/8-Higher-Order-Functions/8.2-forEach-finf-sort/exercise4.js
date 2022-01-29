const books = require('./books');

// Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  let control = [];

  books.forEach(value => {
    control.push(value.releaseYear);
  });

  control = control.sort((a,b) => b - a);
  const result = [];

  control.forEach( (element) => {
    books.forEach((val) => {
      if (val.releaseYear === element) {
        result.push(val);
      }
    });
  });
  
  console.log(result);
}
booksOrderedByReleaseYearDesc();