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
let number = 8
/*
for(let i = 1; i <= number; i+=1) {
  line = ''
  let space = number - i
  
  for(space; space > 0; space -= 1 ){
    line += ' '
  }
  for(let j = line.length; j < number; j += 1){
    line += '*'
  }
  console.log(line)
}
*/

/* var n = 5;
var output = "";

for (var i = 0; i < n; i++) {

  var myspace = "";

  for (let s = 0; s < (n - i - 1); s++) {
    myspace += " ";
  }

  for (var j = 1; j <= 2 * i + 1; j++) {
    output += "*";
  }

  console.log(myspace + output);
  output = "";
} */

let num = 4
let out = ''

for(let i = 0; i < num; i++) {

  let space = ''

  for(let s = 0; s < (num - i - 1); s++){
    space += ' '
  }
  for(let j = 1; j <= 2 * i +1; j++) {
    out += '*'
  }

  console.log(space + out)
  out = ''
}