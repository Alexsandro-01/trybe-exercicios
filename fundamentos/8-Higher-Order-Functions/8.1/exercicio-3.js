/* Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
e quando não houver resposta ("N.A") não altera-se a contagem. */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calc = (gab, resp) => {
  let count = 0
  for (let ind = 0; ind < resp.length; ind += 1) {
    if (resp[ind] === 'N.A') {
      continue;
    } else if (resp[ind] !== gab[ind]) {
      count -= 0.5; 
    } else if(resp[ind] === gab[ind]) {
      count += 1;
    }
  }
  return count;
}

const nota = (gab, resp, func) => {
  const resultado = func(gab, resp);

  return resultado;
};

/* const arr1 = ['A', 'B', 'C', 'A'];
const arr2 = ['A', 'B', 'D', 'A']; */

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, calc));