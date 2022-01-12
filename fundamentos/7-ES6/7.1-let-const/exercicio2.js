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


