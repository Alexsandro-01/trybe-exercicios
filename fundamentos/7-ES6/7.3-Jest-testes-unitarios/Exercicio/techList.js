const value = ['CSS', 'HTML', 'JavaScript', 'Jest', 'React'];

function techList(value, name) {
  // seu código aqui
  
  if (value.length == 0) {
    return 'Vazio!';
  }

  let ordList = value.sort();
  let result = [];

  for (let val of ordList) {
    let obj = {
      tech: val,
      name: name
    };

    result.push(obj);
  }

  return result;
}

module.exports = techList;