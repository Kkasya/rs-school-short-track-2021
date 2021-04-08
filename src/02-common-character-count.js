/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const sArr1 = s1.split('');
  const sArr2 = s2.split('');
  let result = 0;

  sArr1.forEach((item, ind1) => {
    const ind2 = sArr2.indexOf(item);
    if (ind2 !== -1) {
      result += 1;
      sArr1[ind1] = '-';
      sArr2[ind2] = '--';
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
