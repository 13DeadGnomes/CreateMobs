let createCharacter = document.querySelector('.btn');
let counter = 1;
let options = document.querySelector('.options');
let changeLevel = document.querySelector('.changeLevel');
let p = document.querySelector('#one');

changeLevel.oninput = function () {
  p.innerHTML=changeLevel.value;
}

function randomCharacteristic(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
/* Создание блока персонажа */
createCharacter.onclick = function () {
  let newCharacter = document.createElement('div');
  let nameCharacter = document.createElement('div');
  let levelCharacter = document.createElement('div');
  let characteristicsCharacter = document.createElement('ul');
  let minCharacteristic;
  let maxCharacteristic;
/* Генерирования характеристик в зависимости от выбранного уровня */
  if (changeLevel.value <= 3) {
    minCharacteristic = 1;
    maxCharacteristic = 3;
  } else if (changeLevel.value > 3 && changeLevel.value <= 6) {
    minCharacteristic = 2;
    maxCharacteristic = 5;
  } else {
    minCharacteristic = 3;
    maxCharacteristic = 5;
  }
/* Сам персонаж */
  let obj = {
    name: "newMob" + counter,
    characteristic: {
      strength: {
        value: randomCharacteristic(minCharacteristic,maxCharacteristic),
        fistFight: 0,
        closeCombat: 0,
        intimidation: 0,
        weightlifting: 0,
      },
      agility: randomCharacteristic(minCharacteristic,maxCharacteristic),
      stamina: randomCharacteristic(minCharacteristic,maxCharacteristic),
      education: randomCharacteristic(minCharacteristic,maxCharacteristic),
      intellect: randomCharacteristic(minCharacteristic,maxCharacteristic),
      charisma: randomCharacteristic(minCharacteristic,maxCharacteristic),
      luck: 1,
    },
    level: changeLevel.value,
  };
/* Вывод на экран */
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
/* Проверка на количество характеристик со значением 1 и исправление их 2 */
  let checkOne = 0;

  for (let char in obj.characteristic) {
    if (changeLevel.value <= 3 ) {
      if (obj.characteristic[char] == 1) {
        if (checkOne >= 2) {
          obj.characteristic[char] = 2;
        } else {
          checkOne++;
        }
      }
    }
    let chars = document.createElement('li');
    let abilitys = document.createElement('ul');
    let ability = document.createElement('li');
    chars.innerText = char + ':' + obj.characteristic[char];
    characteristicsCharacter.appendChild(chars);
  }

  counter++;
}
