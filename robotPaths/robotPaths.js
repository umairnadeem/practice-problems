/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

class Board {
  constructor(n) {
    this.rows = [];
    for (var i = 0; i < n; i++) {
      this.rows.push([]);
      for (var j = 0; j < n; j++) {
        this.rows[i].push(false);
      }
    }
  }

  togglePiece(i, j) {
    this.rows[i][j] = !this.rows[i][j];
  };

  hasBeenVisited(i, j) {
    return !!this.rows[i][j];
  };
}

let paths = 0;

var robotPaths = function(n, board = new Board(n), i = 0, j = 0) {
  // mark current point as visited
  // if current point is the last point, increment paths
  // for each up, down, left, right unvisited and valid path
    // call function recursively
  let newBoard = new Board(n);

  board.rows[i][j] = true;
  newBoard.rows = board.rows;

  if (i === n - 1 && j === n - 1) {
    paths++;
    return;
  }

  // Check above
  if (board.rows[i - 1] !== undefined && board.rows[i - 1][j] !== true) {
    robotPaths(n, newBoard, i - 1, j);
  }

  // check below
  if (board.rows[i + 1] !== undefined && board.rows[i + 1][j] !== true) {
    robotPaths(n, newBoard, i + 1, j);
  }

  // check left
  if (board.rows[i][j - 1] !== undefined && board.rows[i][j - 1] !== true) {
    robotPaths(n, newBoard, i, j - 1);
  }

  // check right
  if (board.rows[i][j + 1] !== undefined && board.rows[i][j + 1] !== true) {
    robotPaths(n, newBoard, i, j + 1);
  }

  return paths;
};


console.log(robotPaths(2));