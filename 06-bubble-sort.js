/*
TODO:
With bubble sort, each pass ensures that the last element is always sorted.
This means that the inner "for" loop doesn't need to always be limited to arr.length-1, 
but that we can reduce that by 1 on each pass.
*/
const bubbleSort = arr => {
  const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
  };

  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1);
        isSorted = false;
      }
    }
  }

  return arr;
};

console.log(bubbleSort([6, 7, 3, 2, 1, 4, 9]));
