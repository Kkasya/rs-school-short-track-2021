/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((str) => {
    const arrStr = str.split('.').reverse();
    let dom = '';
    arrStr.forEach((item) => {
      dom += `.${item}`;
      if (res[dom] !== undefined) res[dom] += 1;
      else res[dom] = 1;
    });
  });
  return res;
}

module.exports = getDNSStats;
