/*
Finds the largest area, in the matrix, with most connected cells with a value of "1".
Connected cells are any cells that are either top, bottom, left, right or diagonal from each other.
*/

// initialize our matrix
const generateMatrix = (rows, cells) => {
  const matrix = [];
  for (let r = 0; r < rows; r++) {
    matrix[r] = [];
    for (let c = 0; c < cells; c++) {
      let random = Math.floor (Math.random () * 10 + 1);
      let val = 0;
      if (random < 4) {
        val = 1;
      }
      matrix[r][c] = val;
      process.stdout.write (val.toString ());
    }
    process.stdout.write ('\n');
  }

  return matrix;
};

// get largest area
const getLargestArea = matrix => {
  // this is the recursive function that is checking the surrounding area
  const getArea = (matrix, row, column) => {
    // check that we are within the bounds
    if (
      row < 0 ||
      column < 0 ||
      row >= matrix.length ||
      column >= matrix[row].length
    ) {
      return 0;
    }

    if (matrix[row][column] == 0) {
      return 0;
    }

    // reset the matrix current position to 0 so we don't visit it again
    matrix[row][column] = 0;

    // initial size is one, because this function is call from the parent method when we hit "1" in the matrix
    let size = 1;

    // now check all the possible neighbors
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = column - 1; c <= column + 1; c++) {
        // ignore the current row/column, so we don't over-count
        if (r != row || c != column) {
          size += getArea (matrix, r, c);
        }
      }
    }

    return size;
  };

  // this does the search for initial "1" value, and then calls getArea, to check the surrounding cells
  let maxArea = 0;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 1) {
        let size = getArea (matrix, r, c);
        maxArea = Math.max (maxArea, size);
      }
    }
  }

  return maxArea;
};

const matrix = generateMatrix (7, 7);
console.log ('largest area:' + getLargestArea (matrix));
