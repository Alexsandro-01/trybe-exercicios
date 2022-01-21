// eslint-disable-next-line no-undef
const books = require('./books');

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(books) {
  // escreva seu código aqui
  const arrayNames = [];
  books.forEach(element => {
    arrayNames.push(element.author.name);
  });

  const result = arrayNames.find( (nome) => {
    let count = 0;
    nome.split('').forEach( e => {
      if (e === '.') {
        count += 1;
      }
    });

    if(count === 3) {
      return nome;
    }

    count = 0
  })

  
console.log(result);
}
authorWith3DotsOnName(books);
