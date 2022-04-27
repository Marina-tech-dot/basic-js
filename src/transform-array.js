const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

    let newArr = []

    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!")
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-prev' && arr[i - 1] && arr[i - 2] != '--discard-next') {
        newArr.splice(newArr.length - 1, 1)
      } else if (arr[i] === '--double-prev' && arr[i - 1] && arr[i - 2] != '--discard-next') {
        newArr.push(newArr[newArr.length - 1])
      } else if (arr[i + 1] && arr[i] === '--double-next') {
        newArr.push(arr[i + 1])
      } else if (arr[i - 1] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--discard-next' && arr[i] != '--double-prev' && arr[i] != '--double-next') {
        newArr.push(arr[i])
      }
    }
    return newArr
}

module.exports = {
  transform
};
