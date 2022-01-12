// I

const test = (number) => {

  if (number < 0) {
    return false
  } 
  
  return number === 0 ? 1 : number * test(number - 1);
  
}

console.log(test(5));

// II
const longestWord = (phrase) => { console.log(phrase.split(' ').sort((a,b) => a.length - b.length).pop()) };

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')

// III

/* Está no HTML */

// IV
const someStg = 'Tryber x aqui!';
const habil = ['HTML', 'CSS', 'JavaScript', 'BASH', 'GIT'];
habil.sort();

const fun1 = (stg) => someStg.replace('x', stg);

const fun2 = (param) => {
  return  `${param} Minhas cinco principais habilidades são:
  
  ${habil[0]};
  ${habil[1]};
  ${habil[2]};
  ${habil[3]};
  ${habil[4]}; ... #goTrybe.
  `
}

console.log( fun2( fun1('Alex') ) )

