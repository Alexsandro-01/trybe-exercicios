// eslint-disable-next-line no-undef
const books = require('./books');

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados

// const expectedResult = 43;

function averageAge() {

  const totalAge = books.reduce( (acc, curr) => {
    acc += curr.releaseYear - curr.author.birthYear
    return acc;
  }, 0);

  return totalAge / books.length;
}

console.log(averageAge())