'use strict';
const numbers = [];
let total = 0;

do {
  total = prompt('Введите пожалуйста число: ');
  numbers = numbers.push(total);
} while (input !== null);

if (numbers.length) {
  for (let number of numbers) {
    total = total + number;
  }
}
console.log(`Общая сумма чисел равна  ${total}`);
