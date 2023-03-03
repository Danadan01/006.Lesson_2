// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numArray = [];

for (let i = 20; i <= 30; i += 0.5) {
  numArray.push(i);
}
console.log(numArray.join(" "));

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let dollarCost = [];

for (let i = 10; i <= 100; i += 10) {
  dollarCost.push(i*27);
}
console.log(dollarCost.join());

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let numArray01 = [];
let number = 530;

for (let i = 1; i <= 100; i++) {
  if (i**2 <= number){
    numArray01.push(i);
  }
}
console.log(numArray01.join());

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number01 = 13;
let divQuantity = 0;

for (let i = 1; i <= number01; i++) {
  if (number01 % i === 0){
    divQuantity++;
  }
}

if (divQuantity === 2) {
  console.log(`${number01} is a simple number!`);
} else {
  console.log(`${number01} is not a simple number!`);
}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number02 = 27;
let canGetNumber;
let degree = -1;

for (let i = 0; 3**i <= number02; i++) {
  degree++;
  if (number02 === 3**i) {
    canGetNumber = true;
  } else {
    canGetNumber = false;
  }
}

if (canGetNumber) {
  console.log(`You can get ${number02} out of 3 in ${degree} degree`);
} else {
  console.log(`You can't get ${number02} out of 3 in any degree`);
}