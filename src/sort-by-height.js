const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let position = []
  let forSorting = []

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== -1) {
      forSorting.push(arr[i])
      position.push(i)
    }
  }

  forSorting.sort((a, b) => a - b)

  return arr.map((item, index) => {
    if (item === -1) {
      return item
    } else {
      for (let i = 0; i <= forSorting.length; i++) {
        if (index === position[i]) {
          return item = forSorting[i]
        }
      }
    }
  })
}

module.exports = {
  sortByHeight
};
