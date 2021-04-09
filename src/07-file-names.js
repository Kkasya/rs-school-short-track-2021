/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  [...names].forEach((file) => {
    const repeatArr = [...result].filter((item) => item.startsWith(file));
    if (!repeatArr[0]) {
      result.push(file);
    } else {
      const lastRepeat = repeatArr[repeatArr.length - 1];
      if (lastRepeat === file) result.push(`${file}(1)`);
      else {
        const numberRepeat = lastRepeat.slice(lastRepeat.length - 2, lastRepeat.length - 1);
        result.push(`${file}(${+numberRepeat + 1})`);
      }
    }
  });
  return result;
}

module.exports = renameFiles;
