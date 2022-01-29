function hydrate(value) {
  // seu código aqui

  let vet = value.split('');

  let res = 0;

  for (let i of vet) {
    switch (i) {
      case '1':
        res += parseInt(i);
        break;
      case '2':
        res += parseInt(i);
        break;
      case '3':
        res += parseInt(i);
        break;
      case '4':
        res += parseInt(i);
        break;
      case '5':
        res += parseInt(i);
        break;
      case '6':
        res += parseInt(i);
        break;
      case '7':
        res += parseInt(i);
        break;
      case '8':
        res += parseInt(i);
        break;
      case '9':
        res += parseInt(i);
        break;
    }
  }

  if (res > 1) {
    return res += ' copos de água';
  }
  else {
    return res += ' copo de água';
  }
}

module.exports = hydrate;