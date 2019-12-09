'use strict';
let message;
function formatString(string) {
  let str_array = string.split('');
  //   console.log(str_array);
  if (string.length < 40) {
    message = string;
  } else {
    message = string.slice(0, 40);
    message = message.concat('...');
  }
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
