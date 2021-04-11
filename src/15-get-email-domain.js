/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = Array.from(email.matchAll(/@/g));
  return email.slice(arr[arr.length - 1].index + 1);
}

module.exports = getEmailDomain;
