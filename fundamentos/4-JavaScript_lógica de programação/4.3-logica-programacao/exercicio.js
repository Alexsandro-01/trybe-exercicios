//Quadrado de asteriscos
/*
let line = ''
let number = 10
for(let i = 1; i <= number; i+=1) {
  line += '*'
}
for(let j = 1; j <= number; j+=1){
  console.log(line)
}
*/

// Triangulo retangulo de asteriscos
/* let line = ''
let number = 10
for(let i = 1; i <= number; i+=1) {
  line += '*'
  console.log(line)
} */

let line = ''
let number = 5
for(let i = 1; i <= number; i+=1) {
  line = ''
  let space = number - i
  
  for(space; space > 0; space -= 1 ){
    line += '/'
  }
  for(let j = line.length; j < number; j += 1){
    line += '*'
  }
  console.log(line)
}