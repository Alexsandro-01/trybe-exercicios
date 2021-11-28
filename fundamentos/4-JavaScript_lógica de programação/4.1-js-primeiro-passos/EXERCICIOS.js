const a = 13
const b = 7
const c = 4
/*
console.log('soma: ', a + b)
console.log('subtração: ', a - b)
console.log('divisão: ', a / b)
console.log('multiplicação: ', a * b)
console.log('módulo: ', a % b)
*/
/*
if(a > b) {
  console.log('maior: ', a)
}
else {
  console.log('maior: ', b)
}
*/

/*
if(a > b && a > c) {
  console.log('maior: ', a)
}
else if(b > c) {
  console.log('maior: ', b)
}
else {
  console.log('maior: ', c)
}
*/

const polar = 0
/*
if(polar >= 0) {
  console.log('positivo')
}
else {
  console.log('negativo')
}
*/

/* TRIÂNGULO

const ang1 = 60
const ang2 = 80
const ang3 = 40
const sunAng = ang1 + ang2 + ang3
if(sunAng === 180) {
  console.log(true)
}
else {
  console.log(false)
}
*/
/*
if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(true)
}
else {
  console.log(false)
}
*/

/*LUCRO*/

const value = 139.50
const price = 199.00
const imposto = 20

const totalValue = (value * (imposto / 100)) + value
const lucro = price - totalValue

if(value < 0 || price < 0) {
  console.log('Valores inválidos.')
}
else {
  console.log('R$ ', lucro * 1000)
}
