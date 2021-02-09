let createCharacter = document.querySelector('.btn');
let counter = 1;
let options = document.querySelector('.options');

function randomCharacteristic(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

createCharacter.onclick = function () {
  let newCharacter = document.createElement('div');
  let nameCharacter = document.createElement('div');
  let levelCharacter = document.createElement('div');
  let characteristicsCharacter = document.createElement('ul');

  let obj = {
    name: "newMob" + counter,
    characteristic: {
      strength: randomCharacteristic(1,6),
      agility: randomCharacteristic(1,6),
      stamina: randomCharacteristic(1,6),
      education: randomCharacteristic(1,6),
      intellect: randomCharacteristic(1,6),
      charisma: randomCharacteristic(1,6),
      luck: randomCharacteristic(1,6),
    },
    level: 1,
  };
  newCharacter.classList.add('newCharacter');
  nameCharacter.classList.add('nameCharacter');
  levelCharacter.classList.add('levelCharacter');
  characteristicsCharacter.classList.add('characterisic');

  options.appendChild(newCharacter);
  newCharacter.appendChild(nameCharacter);
  newCharacter.appendChild(levelCharacter);
  newCharacter.appendChild(characteristicsCharacter);

  nameCharacter.innerText = 'Имя: ' + obj.name;
  levelCharacter.innerText = 'Уровень: ' + obj.level;

  for (let char in obj.characteristic) {
    let chars = document.createElement('li');
    chars.innerText = char + ':' + obj.characteristic[char];
    characteristicsCharacter.appendChild(chars);
  }

  counter++;
}
