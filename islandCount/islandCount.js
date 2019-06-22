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
      if (point === '0') {
        islands++;
        mark(matrix, x, y);
      }
    });
  });

  function mark(matrix, x, y) {
    debugger;
    matrix[x][y] = 1;
    if (matrix[x + 1] && matrix[x + 1][y] === '0') {
      mark(matrix, x + 1, y);
    }
    if (matrix[x - 1] && matrix[x - 1][y] === '0') {
      mark(matrix, x - 1, y);
    }
    if (matrix[x][y + 1] && matrix[x][y + 1] === '0') {
      mark(matrix, x, y + 1);
    }
    if (matrix[x][y - 1] && matrix[x][y - 1] === '0') {
      mark(matrix, x, y - 1);
    }
  }

  return islands;

}

var inputs = ['.0...\n.00..\n....0', '..000.\n..000.\n..000.\n.0....\n..000.', '..000.\n..0...\n..0.0.\n..0...\n..000.', '0....0\n......\n..00..\n......\n0....0', '00...0\n0...00\n......\n0.0.0.\n0.....', '0...0\n0...0\n00000', '0...0\n..0..\n0...0', '.', '0', '...\n..0\n.00', '.....\n..0..\n.000.\n..0..\n.....', '00..00\n..00..\n00..00\n..00..'];

    var outputs = [2, 3, 2, 5, 5, 1, 5, 0, 1, 1, 1, 6];

    inputs.forEach(function (input, i) {
      console.log(countIslands(input))
    });


// console.log(countIslands('.0...\n.00..\n....0'));
