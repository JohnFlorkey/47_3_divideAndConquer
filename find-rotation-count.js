function findRotationCount(array) {
  let left = 0;
  let right = array.length - 1;

  // check for special case that allows early return
  if (array[left] < array[right]) {
    return 0;
  }

  // find rotation index
  while (left != right) {
    let middle = Math.floor((left + right) / 2);
    if (right - left > 1) {
      if (array[middle] < array[middle - 1]) {
        return middle;
      } else {
        if (array[right] < array[middle]) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
    } else {
      return middle + 1;
    }
  }
}

module.exports = findRotationCount;
