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
  let newStr = ''
  let answer = ''
  let basicRepeter = ''

  if (typeof str !== 'string') str = String(str)

  // if (!options.hasOwnProperty('additionSeparator')) {
  //   options['additionSeparator'] = '|'
  // }

  if (!options.hasOwnProperty('separator')) {
    options.separator = '+'
  } 
  

  if (options.hasOwnProperty('addition')) {
    basicRepeter += options['addition']
  }


  if (options.hasOwnProperty('additionSeparator')) {
    basicRepeter += options['additionSeparator']
  }

  if (options.hasOwnProperty('separator')) {
    newStr += str

    while (newStr.length < basicRepeter.length * options['additionRepeatTimes'] + str.length) {
      newStr += basicRepeter
    }
    if (options['additionSeparator']) {
      let cut = options['additionSeparator'].length
      newStr = newStr.slice(0, -cut)
    }
    newStr += options['separator']
  }

  if (options.hasOwnProperty('repeatTimes')) {
    while (answer.length < newStr.length * options['repeatTimes']) {
      answer += newStr
    }
    let cut = options['separator'].length
    answer = answer.slice(0, -cut)
  }

  if (!options.hasOwnProperty('repeatTimes')) {
    str += basicRepeter
    let cut = options['additionSeparator'].length
    str = str.slice(0, -cut)
    return str
  }

  return answer
}

module.exports = {
  repeater
};





