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
  const sortArr = [];
  [...arr].sort((a, b) => a - b).forEach((elem) => {
    if (elem !== -1) sortArr.push(elem);
  });
  const result = arr.map((elem) => {
    if (elem === -1) return elem;
    const firstElem = sortArr[0];
    sortArr.splice(0, 1);
    return firstElem;
  });
  return result;
}

module.exports = sortByHeight;
