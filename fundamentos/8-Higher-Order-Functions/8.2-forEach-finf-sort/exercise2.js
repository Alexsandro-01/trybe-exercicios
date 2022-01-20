const books = require('./books');

// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook = 0;
  // escreva aqui o seu código
  books.forEach((value) => {
    if ( nameBook === 0) {
      nameBook = value.name;
    } else if (value.name.length < nameBook.length) {
      nameBook = value.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());