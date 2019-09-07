/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

*/

const markRow = (matrix, row, col) => {
  let c = 0;

  while (matrix[row] && matrix[row][c] !== undefined) {
      if (matrix[row][c])
          matrix[row][c] = Infinity;
      c++;
  }
};

const markCol = (matrix, row, col) => {
  let r = 0;
  
  while (matrix[r] && matrix[r][col] !== undefined) {
      if (matrix[r][col])
          matrix[r][col] = Infinity;
      r++;
  }
};

const setZeroes = function(matrix) {
  matrix.forEach((row, r) => {
      row.forEach((col, c) => {
          if (!col) {
              markRow(matrix, r, c);
              markCol(matrix, r, c);
          }
      });
  });
  
  matrix.forEach((row, r) => {
      row.forEach((col, c) => {
          if (!Number.isFinite(col)) {
              matrix[r][c] = 0;
          }
      });
  });
};