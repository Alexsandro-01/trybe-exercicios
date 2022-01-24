const books = require('./books');

const expectedResult = false;

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  let res = books.every( (value) => {
    let result = value.author.birthYear < 2000 && value.author.birthYear >= 1900;
    return result;
  });

  return res;
}

console.log(everyoneWasBornOnSecXX())