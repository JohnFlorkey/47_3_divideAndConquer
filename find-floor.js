function findFloor(array, number) {
  if (array[0] > number) return -1;
  let left = 0;
  let right = array.length - 1;

  while (left != right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] > number) {
      right = middle - 1;
    } else if (array[middle] < number) {
      left = middle + 1;
    }
  }
  return array[left] <= number ? array[left] : array[left - 1];
}

module.exports = findFloor;
