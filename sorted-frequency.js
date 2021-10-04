function sortedFrequency(array, number) {
  // check special cases that all for early exit
  if (array[0] > number || array[array.length - 1] < number) {
    return -1;
  }

  // find an ocurrence of the number so we know where to divide to look for boundaries
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (array[middle] !== number) {
    middle = Math.floor((left + right) / 2);
    if (array[middle] < number) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  if (middle === 0 || middle === array.length - 1) {
    return 1;
  }

  // Find the boundaries
  let leftBoundaryLeft = 0;
  let rightBoundaryRight = array.length - 1;
  let leftBoundaryRight = middle;
  let rightBoundaryLeft = middle;

  while (
    leftBoundaryLeft != leftBoundaryRight ||
    rightBoundaryLeft != rightBoundaryRight
  ) {
    let leftMiddle = Math.floor((leftBoundaryLeft + leftBoundaryRight) / 2);
    let rightMiddle = Math.ceil((rightBoundaryLeft + rightBoundaryRight) / 2);
    if (leftBoundaryLeft != leftBoundaryRight) {
      if (array[leftMiddle] < number) {
        leftBoundaryLeft = leftMiddle + 1;
      } else if (array[leftMiddle] > number) {
        leftBoundaryRight = leftMiddle - 1;
      } else {
        if (leftBoundaryLeft != rightBoundaryRight) {
          leftBoundaryRight = leftMiddle;
        }
      }
    }
    if (rightBoundaryLeft != rightBoundaryRight) {
      if (array[rightMiddle] > number) {
        rightBoundaryRight = rightMiddle - 1;
      } else if (array[rightMiddle] < number) {
        rightBoundaryLeft = rightMiddle + 1;
      } else {
        if (rightBoundaryLeft != rightBoundaryRight) {
          rightBoundaryLeft = rightMiddle;
        }
      }
    }
  }
  if (leftBoundaryLeft === rightBoundaryRight) {
    return 1;
  } else {
    return rightBoundaryLeft - leftBoundaryRight + 1;
  }
}

module.exports = sortedFrequency;
