function random() {
  return Math.floor(Math.random() * 101);
}

function upCase(stg) {
  return stg.toUpperCase();
}

function firstCharacter(stg) {
  return stg[0];
}

function concat(stg1, stg2) {
  return stg1 + stg2;
}

// console.log(concat('2', '1'))
module.exports = { random, upCase, firstCharacter, concat };