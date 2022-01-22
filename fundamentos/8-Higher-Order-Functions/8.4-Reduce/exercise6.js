

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(alunos, notas) {
  // escreva seu código aqui
  const result = notas.map( (value, index) => { // map acessa cada array com as notas

    const res = value.reduce( (acc, curr) => acc += curr, 0) // reduce soma as notas em cada array;

    return { // retorna a soma das notas de cada array dividido pelo seu tamanho.
      name: alunos[index],
      average: res / value.length,
    };
  })

  console.log(result)
}

studentAverage(students, grades);



const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

