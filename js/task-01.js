'use strict';

// const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
  return array;
}

// logItems(array);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
