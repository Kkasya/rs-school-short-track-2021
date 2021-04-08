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
  const zero = [];
  let result = 0;
  matrix.forEach((arr) => {
    arr.forEach((elem, ind) => {
      if (!zero.includes(ind)) {
        if (elem === 0) zero.push(ind);
        else result += elem;
      }
    });
  });
  return result;
}

module.exports = getMatrixElementsSum;
