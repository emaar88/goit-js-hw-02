'use strict';
let message;
function formatString(string) {
  // let str_array = string.split('');
  //   console.log(str_array);
  (string.length < 40) ? message = string : message = string.slice(0, 40).concat('...');
  return message;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
