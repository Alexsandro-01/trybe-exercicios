// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melancia', 'maçã', 'ingá'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abil', 'banana', 'uva'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// =========================================================


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allInfo = {... user, ...jobInfos};
const {name, age, nationality, profession, squad, squadInitials} = allInfo;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// ======================================================
// array destructuring
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá
const [ola, saudacao] = saudacoes;
saudacao(ola);

