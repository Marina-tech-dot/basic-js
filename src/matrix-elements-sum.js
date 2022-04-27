const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let step = matrix[0].length
  let matrixI = matrix.flat().length - step
  matrix = matrix.flat()

  let posZero = []
  let posForDelete = []

  for (let i = 0; i <= matrixI; i++) {
    if (matrix[i] === 0) {
      posZero.push(i)
    }
  }

  for (let j = 0; j <= posZero.length; j++) {
    posForDelete.push(posZero[j] + step)
  }

  posForDelete = posForDelete.filter(item => item ? item : false)

  let count = 0
  for (let j = 0; j < posForDelete.length; j++) {
    matrix.splice(`${posForDelete[j] - count}`, 1)
    count++
  }

  return matrix.reduce((acc, el) => acc + el, 0)
}

module.exports = {
  getMatrixElementsSum
};
