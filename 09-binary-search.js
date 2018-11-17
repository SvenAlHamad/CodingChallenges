const doBinarySearch = (arr, val) => {
  let midPoint = Math.ceil (arr.length / 2);
  const midPointValue = arr[midPoint];

  if (midPointValue == val) {
    return true;
  }

  if (arr.length <= 1) {
    return false;
  }

  if (midPointValue > val) {
    // element is on the left side
    const newArray = arr.slice (0, midPoint);
    console.log ('going left');
  } else {
    // element is on the right side
    const newArray = arr.slice (midPoint + 1, arr.length);
    console.log ('going right');
  }

  return doBinarySearch (newArray, val);
};

console.log (doBinarySearch ([1, 3, 4, 5, 13, 20, 25, 40, 42, 44, 53], 26));
