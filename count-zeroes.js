function countZeroes(array) {
  // check a few special cases
  // all zeroes
  if (array[0] === 0) {
    return array.length;
  }
  // all 1's
  if (array[array.length - 1] === 1) {
    return 0;
  }
  // no special cases so find the 1/0 boundary
  let left = 0;
  let right = array.length - 1;

  while (left !== right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === 1) {
      if (array[middle + 1] === 0) {
        return array.length - middle - 1;
      } else {
        left = middle + 1;
      }
    } else if (array[middle] === 0) {
      if (array[middle - 1] === 1) {
        return array.length - middle;
      } else {
        right = middle - 1;
      }
    }
  }
}

module.exports = countZeroes;
