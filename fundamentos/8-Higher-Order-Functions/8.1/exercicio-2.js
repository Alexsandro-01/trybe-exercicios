// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como 
// parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve 
// ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const rnd = (num, func) => {
  const rndNumber = Math.round(Math.random() * 4) + 1;
  console.log(rndNumber);
  return func(num, rndNumber);
};

const checkNumber = (numApostado, rndNumber) => {
  if (numApostado === rndNumber) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente'
}

console.log(rnd(3, checkNumber));