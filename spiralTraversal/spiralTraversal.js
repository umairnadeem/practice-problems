/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

/*
[[1,2],
[3,4]]

output = [1,2,4,3]

0,0
0,1
1,1
1,0

[[1,2,3],
[4,5,6]]

output = [1,2,3,6,5,4]

0,0 -> 0,1 -> 0,2 -> 1,2 -> 1,

[[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]]

output = [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

[1,2,3,4,5]
[5,6,7,8,9]
[9,10,11,12,13]
[13,14,15,16,17]

output = [1,2,3,4,5,9,13,17,16,15,14,13,9,5,6,7,8,12,11,10]

[[1],
[2],
[3]
]

output = [1,2,3]


[[]]

output = [];
*/

var spiralTraversal = function (matrix) {

  // declare output array
  let output = [];

  // while array has entries
  while (matrix.length) {
    debugger;
    // push right
    if (matrix[0]) {
      matrix[0].forEach((entry, i, array) => {
      output.push(entry);
    });
    matrix.shift();
    }
  
    // delete row
    // push down 
    if (matrix[0]) {
      matrix.forEach((row) => {
        output.push(row[row.length - 1]);
        //delete column
        row.pop();
      });
      matrix.forEach((row, i) => row === [] ? matrix.splice(i,1) : 0);
    }
  
    // push left
    if (matrix[matrix.length - 1]) {
      matrix[matrix.length - 1].forEach((entry, i, arr) => {
        let index = arr.length - 1 - i;
        output.push(arr[index]);
      });
      // delete row
      matrix.pop();
    }
  
    // push up
    // delete column (entry by entry)
    if (matrix[matrix.length - 1]) {
      matrix.forEach((row, i, arr) => {
        let index = matrix.length - 1 - i;
        output.push(arr[index][0]);
        arr[index].shift();
      });
      matrix.forEach((row, i) => row === [] ? matrix.splice(i,1) : 0);
    }
  }

  return output;
};

// console.log(spiralTraversal([[1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16]]))