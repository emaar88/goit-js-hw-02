'use strict';
function checkForSpam(str) {
  const check =
    str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')
      ? true
      : false;
  return check;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
