'use strict';
let input = 0;
const numbers = [];
let total = 0;
const message = 'Общая сумма чисел равна';

do {
  let input = prompt('Введите пожалуйста число: ');
  numbers = numbers.push(input);
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total = total + number;
  }
}
console.log(`${message}  ${total}`);
