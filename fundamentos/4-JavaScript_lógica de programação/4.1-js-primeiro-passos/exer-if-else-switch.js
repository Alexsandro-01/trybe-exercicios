let nota = 102
let state

if (nota > 100 || nota < 0) {
  state = 'Nota inválida.'
} 
else if (nota >= 80) {
  state = 'aprovado'
} 
else if (nota < 80 && nota >= 60) {
  state = 'espera'
} 
else {
  state = 'reprovado'
}

switch (state) {
  case 'aprovado':
    console.log("Parabéns, Você foi aprovado!!")
    break

  case 'espera':
    console.log("Você está na nossa lista de espera.")
    break

  case 'reprovado':
    console.log("Você está reprovado :/")
    break

  default:
    console.log("Nota inválida, adicione uma nota entre 0 e 100.")
}