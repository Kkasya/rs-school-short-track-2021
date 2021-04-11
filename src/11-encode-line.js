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
  const strArr = str.split('');
  let result = '';
  let sum = 0;
  let prev = '';
  const { length } = strArr;

  strArr.forEach((letter, ind) => {
    if (letter === prev) {
      sum += 1;
    } else {
      if (sum) result += (sum === 1) ? `${prev}` : `${sum}${prev}`;
      sum = 1;
      prev = letter;
    }
    if (length === ind + 1) result += (sum === 1) ? `${prev}` : `${sum}${prev}`;
  });
  return result;
}

module.exports = encodeLine;
