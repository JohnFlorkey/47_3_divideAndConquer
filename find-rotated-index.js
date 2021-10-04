function findRotatedIndex(array, number) {
  let left = 0;
  let right = array.length - 1;

  while (left !== right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] !== number) {
      if (array[middle] > number) {
        if (array[right] > number) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      } else {
        if (array[left] < number) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
    } else {
      return middle;
    }
  }
  return array[left] === number ? left : -1;
}

module.exports = findRotatedIndex;
