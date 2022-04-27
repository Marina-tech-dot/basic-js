const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map((item) => item.split('.').reverse())

  let newArr = []
  arr = arr.map(el => el.map((item, index) => {
    if (index === 0) {
      newArr = []
      newArr.push(`.${item}`)
      return `.${item}`
    } else {
      newArr.push(`.${item}`)
      return `${newArr.join('')}`
    }
  }))

  return arr.flat().reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
}

module.exports = {
  getDNSStats
};
