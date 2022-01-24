const books = require('./books');

const expectedResult = false;
// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique() {
  // escreva seu código aqui
  let result = 0;

  books.forEach( (val) => {

    books.forEach( (element) => {
      if (val.author.birthYear === element.author.birthYear ) {
        result += 1;
      }
    });
    
  });
  
  if (result > books.length) {
    return false;
  }

  return true;
}

console.log(authorUnique());
