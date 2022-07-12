const fs = require('fs').promises;

const file = 'simpsons.json';

async function recoverFileAndConvert() {
  const data = await fs.readFile(file, 'utf-8');
  const arr = JSON.parse(data);
  return arr;
}

async function readAll() {
  const arr = await recoverFileAndConvert();

  arr.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
}

// readAll();

async function findCharacter(characterId) {
  const arr = await recoverFileAndConvert();

  try {
    const character = arr.find(({id}) => id == characterId);
    if (!character) throw new Error('Id não encontrado')
    console.log(character);
  } catch (error) {
    console.error('Erro: ', error.message);    
  }

}

// findCharacter(11);

async function removeCharacter() {
  const arr = await recoverFileAndConvert();

  const response = arr.filter(({id}) => id !== '10' && id !== '6');
  console.log(response);
    
}

// removeCharacter()

async function newSimpsons() {
  const arr = await recoverFileAndConvert();
  try {
    const response = arr.slice(0, 4);
    const string = JSON.stringify(response);
    fs.writeFile('./simpsonFamily.json', string);
    console.log('Succses!');
  } catch (error) {
    console.error(error.message);
  }
  // console.log(response);
}

newSimpsons();