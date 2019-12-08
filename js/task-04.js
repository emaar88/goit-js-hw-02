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
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
