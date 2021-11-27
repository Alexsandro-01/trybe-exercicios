let  nota =60

if(nota > 100 || nota < 0) {
  console.log("Nota inválida, adicione uma nota entre 0 e 100.")
}
else if(nota >= 80) {
  console.log("Parabéns, Você foi aprovado!!")
}
else if(nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera.")
}
else {
  console.log("Você está reprovado :/")
}