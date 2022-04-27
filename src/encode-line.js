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
  let counter = 1
  let arr = []

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    } else {
      arr.push(`${counter}${str[i]}`)
      counter = 1
    }
  }

  return arr.join('').split('').filter(item => item != 1).join('')
}

module.exports = {
  encodeLine
};
