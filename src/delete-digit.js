const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 String.prototype.replaceAt = function(index, replacement) {
   if(replacement) {
     return this.substring(0, index) + replacement + this.substring(index + replacement.length);
   }
   else {
     return this.substring(0, index) + this.substring(index + 1);
   }
}

function deleteDigit(n) {
  let stringN = String(n);
  let max = stringN.replaceAt(0,'');

  for(let i = 1; i < stringN.length; i++) {
    if(Number(stringN.replaceAt(i,'')) > Number(max)) {
      max = stringN.replaceAt(i,'')
    }
  }
  return Number(max);
}

module.exports = {
  deleteDigit
};
