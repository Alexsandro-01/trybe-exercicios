const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dmgDragon = (character) => {
  let dmgRnd = Math.round( Math.random() * (character.strength - 15) + 15 );
  return dmgRnd;
}

const dmgWarrior = (character) => {
  let dmgRnd = Math.round( Math.random() * ((character.strength * character.weaponDmg) - character.strength) + character.strength);
  return dmgRnd;
}

const manaDispend = (character) => {
    let dano;
    let mana;
  if (character.mana < 15) {
    dano = "Não possui mana suficiente";
    mana = 0;
    return {dano, mana};
  }
  dano = Math.round( Math.random() * ((character.intelligence * 2) - character.intelligence) + character.intelligence);
  mana = character.mana - 15;
  return {dano, mana};
}

console.log(dmgWarrior(warrior))