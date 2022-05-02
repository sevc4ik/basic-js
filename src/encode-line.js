const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = '';
  let count = 0;
 
  for (let i = 0; i < str.split('').length; i++) {
      if (str.split('')[i] === str.split('')[i+1]) {
          count++;
      } else {
          count++;
          if(count > 1) {
            result = result + count + str.split('')[i]
          }
          else {
            result = result + str.split('')[i];
          }
          count = 0;
      }
  }
return result;
}

module.exports = {
  encodeLine
};
