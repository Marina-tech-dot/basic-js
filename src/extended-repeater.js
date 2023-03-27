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
  str = String(str);
  options.hasOwnProperty("addition")
    ? (options.addition = String(options.addition))
    : false;

  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }

  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }

  let basicRepeater = (options.addition || "") + options.additionSeparator;
  let finalRepeater = str;
  let newStr = "";

  if (options.hasOwnProperty("additionRepeatTimes")) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      finalRepeater += basicRepeater;
    }
    finalRepeater = finalRepeater.slice(0, -options.additionSeparator.length);
  } else {
    finalRepeater += basicRepeater.slice(0, -options.additionSeparator.length);
  }

  if (options.hasOwnProperty("repeatTimes")) {
    for (let i = 0; i < options.repeatTimes; i++) {
      newStr += finalRepeater + options.separator;
    }
    newStr = newStr.slice(0, -options.separator.length);
  } else {
    newStr = finalRepeater 
  }

  return newStr;
}


module.exports = {
  repeater
};





