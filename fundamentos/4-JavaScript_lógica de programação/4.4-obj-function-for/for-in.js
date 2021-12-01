let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for(let key in names) {
  console.log('Olá ' + names[key])
}

/*-------------------------------------*/
console.log()
console.log('/*-------------------------------------------*/')
console.log()

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let chave in car) {
  console.log(chave, car[chave])
}

console.log()
console.log('/*-------------------------------------------*/')
console.log()

function q(base, alt) {
  let obj = {}

  let perimetro = (2 * base) + (2 * alt)
  let area = base * alt

  /* console.log(perimetro)
  console.log(area) */

  obj.perimetro = perimetro
  obj.area = area

  return obj
}

console.log(q(2,4))