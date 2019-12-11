'use strict';
let numbers = [];
let total = 0;

do {
  total = prompt('Введите пожалуйста число: ');
  numbers.push(Number(total));
} while (total !== null);

if (numbers.length) {
  for (let number of numbers) {
    total = total + number;
  }
}
console.log(`Общая сумма чисел равна  ${total}`);
