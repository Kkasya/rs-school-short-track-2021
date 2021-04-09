/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const sum = (number) => {
    const arrNumber = number.toString().split('');
    return arrNumber.reduce((acc, curr) => Number(acc) + Number(curr));
  };
  let result = sum(n);
  while (result > 9) result = sum(result);
  return result;
}

module.exports = getSumOfDigits;
