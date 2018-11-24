const getSum = arr => {
  let runningSum = [];
  runningSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    runningSum[i] = runningSum[i - 1] + arr[i];
  }

  let sum = 0;
  let tempSum = 0;
  let sequence = [];
  let result = [];
  for (let i = 0; i < runningSum.length - 1; i++) {
    if (runningSum[i] < runningSum[i + 1] && arr[i + 1] > 0) {
      tempSum += runningSum[i];
      sequence.push (arr[i + 1]);
      if (sum < tempSum) {
        sum = tempSum;
        result = sequence;
      }
    } else {
      tempSum = runningSum[i];
      sequence = [];
    }
  }

  return result;
};

console.log (getSum ([-4, 3, 4, -2, 5, 1, 2, -3]));
