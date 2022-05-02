const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = [], addRes = [];
  let repTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
  let repAddTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
  let separator = options.hasOwnProperty("separator") ? options.separator + "" : "+";
  let addSep = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : "|";
  let addition = options.hasOwnProperty("addition") ? options.addition + "" : "";
  for (let i = 0; i < repAddTimes; i++) {
    addRes.push(addition);
  }

  addRes = addRes.join(addSep);

  for (let i = 0; i < repTimes; i++) {
    result.push(str+addRes);
  }
  return result.join(separator);
}

module.exports = {
  repeater
};
