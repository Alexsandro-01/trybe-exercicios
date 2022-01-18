const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newColab = (nome) => {
  const obj = {};
  let arrNome = nome.split(' ');
  let stg = '';

  for (let val of arrNome) {
    if (val !== arrNome[arrNome.length - 1]) {
      stg += `${val}_`
    } else {
      stg += `${val}`
    }
  }

  const email = `${stg}@trybe.com`;
  obj.nomeCompleto = nome;
  obj.email = email;

  return obj;
}

 console.log(newEmployees(newColab));

