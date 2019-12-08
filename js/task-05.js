'use strict';
function checkForSpam(str) {
  let low_string = str.toLowerCase();
  if (low_string.includes('spam') || low_string.includes('sale')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));
