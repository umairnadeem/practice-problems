/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // convert string to 2d array
  let matrix = mapStr.split('\n').map(elem => elem.split(''));

  // for each element
  // if element is dot
  // island count ++
  // call marker function

  // marker function:
  // mark as visited
  // for each unvisited dot up, down, left, right
  // call function recursively
  let islands = 0;

  matrix.forEach((row, x) => {
    row.forEach((point, y) => {
      if (point === '.') {
        islands++;
        mark(matrix, x, y);
      }
    });
  });

  function mark(matrix, x, y) {
    debugger;
    matrix[x][y] = 1;
    if (matrix[x + 1] && matrix[x + 1][y] === '.') {
      mark(matrix, x + 1, y);
    }
    if (matrix[x - 1] && matrix[x - 1][y] === '.') {
      mark(matrix, x - 1, y);
    }
    if (matrix[x][y + 1] && matrix[x][y + 1] === '.') {
      mark(matrix, x, y + 1);
    }
    if (matrix[x][y - 1] && matrix[x][y - 1] === '.') {
      mark(matrix, x, y - 1);
    }
  }

  return islands;

}

// console.log(countIslands('0.00\n0.00\n0..0.0'));
