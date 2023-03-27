const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  return matrix.map((el, ind, arr) => {
    return el.map((_, i, array) => {
      return (
        (array[i - 1] === true ? Number(array[i - 1]) : 0) +
        (array[i + 1] === true ? Number(array[i + 1]) : 0) +
        (arr[ind - 1] != undefined && arr[ind - 1][i]
          ? Number(arr[ind - 1][i])
          : 0) +
        (arr[ind - 1] != undefined && arr[ind - 1][i - 1]
          ? Number(arr[ind - 1][i - 1])
          : 0) +
        (arr[ind - 1] != undefined && arr[ind - 1][i + 1]
          ? Number(arr[ind - 1][i + 1])
          : 0) +
        (arr[ind + 1] != undefined && arr[ind + 1][i]
          ? Number(arr[ind + 1][i])
          : 0) +
        (arr[ind + 1] != undefined && arr[ind + 1][i - 1]
          ? Number(arr[ind + 1][i - 1])
          : 0) +
        (arr[ind + 1] != undefined && arr[ind + 1][i + 1]
          ? Number(arr[ind + 1][i + 1])
          : 0)
      );
    });
  });
}


module.exports = {
  minesweeper
};
