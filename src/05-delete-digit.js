/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = n.toString().split('');
  let max = 0;
  nArr.forEach((elem, ind) => {
    const newArr = [...nArr];
    newArr.splice(ind, 1);
    const newNumber = Number(newArr.join(''));
    if (newNumber > max) max = newNumber;
  });

  return max;
}

module.exports = deleteDigit;
