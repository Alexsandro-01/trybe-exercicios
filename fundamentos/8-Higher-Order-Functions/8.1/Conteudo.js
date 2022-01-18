const up = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
  console.log(func());
}

doingThings(up);
doingThings(coffee);
doingThings(sleep);