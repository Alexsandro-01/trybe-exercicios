// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let result = names.reduce( (acc, curr) => {

    acc += curr.split('').reduce( (acu, curen) => {
      if(curen === 'A' || curen === 'a') {
        // console.log(acu)
        return acu += 1
      }
      return acu
    }, 0)

    return acc;

  }, 0)

  return result;
}

console.log(containsA())