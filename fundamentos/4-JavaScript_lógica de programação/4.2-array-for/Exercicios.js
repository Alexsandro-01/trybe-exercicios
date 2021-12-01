let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() */
/* for(let number of numbers) {
  console.log(number)
}
 */

/* Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
/* let sun = 0
for(let number of numbers) {
  sun += number
}
console.log(sun) */

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/* let sun = 0
for(let number of numbers) {
  sun += number
}
let media = sun / numbers.length
console.log(media)

if(media > 20){
  console.log('Numero maior que 20')
}else {
  console.log('Numero menor ou igual a 20')
} */


/* Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let big = 0
for(let number of numbers) {
  if (number > big) {
    big = number
  }
}
console.log(big) */

// console.log()


// Descubra quantos valores ímpares existem no array e imprima o resultado.
/* let sun = 0
for(let number of numbers) {
  if(number % 2 !== 0) {
    sun++
  }
}
if(sun === 0) {
  console.log('Nenhum valor Ímpar')
}
else {
  console.log(sun)
} */


/* Utilizando for , descubra qual o menor valor contido no array e imprima-o
let sun = null
for(let number of numbers) {
  if(sun == null) {
    sun = number
  }
  else if(number < sun) {
    sun = number
  }
}
console.log(sun) */

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arr = []
for(let i = 1; i <= 25; i += 1) {
  arr.push(i)
}
console.log(arr)


/* git  */
for(let val of arr) {
  console.log(val + " / " + '2' + " = " + (val / 2))
}