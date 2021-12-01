let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
  };
  
  //diasDaSemana.1; // SyntaxError: Unexpected number
  //console.log(diasDaSemana['1']); // domingo

  /* No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número. */


  /**Prática */
let player = {

  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
}

//console.log('A jogagora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor jogadora do mundo por ' + (player.bestInTheWorld.length) + ' vezes.')

console.log('A jogadora possui ' + (player.medals.golden) + ' medalhas de ouro e ' + (player.medals.silver) + ' medalhas de prata.')