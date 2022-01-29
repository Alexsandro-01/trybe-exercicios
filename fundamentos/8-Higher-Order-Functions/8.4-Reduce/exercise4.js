// eslint-disable-next-line no-undef
const books = require('./books');

// Encontre o livro com o maior nome.


// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
// },
//   releaseYear: 1991,
// };

function longestNamedBook() {
  // escreva seu código aqui
  const result = books.reduce( (acc, curr) => {
    if(curr.name.length > acc.name.length) {
      return curr;
    }
    return acc
  })
  console.log(result);
}

longestNamedBook()