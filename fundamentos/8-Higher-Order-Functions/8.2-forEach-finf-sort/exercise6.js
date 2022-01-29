const books = require('./books');

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  const result = books.some( (val) => {
    let res = val.releaseYear >= 1980 && val.releaseYear < 1990;
    return res;
  });

  return result;
}
console.log(someBookWasReleaseOnThe80s());