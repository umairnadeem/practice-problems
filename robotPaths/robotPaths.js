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

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};


var robotPaths = function(n, board = makeBoard(n), i = 0, j = 0) {
  let paths = 0;

  function traverse(i, j) {
    board.togglePiece(i, j);
  
    if (i === n - 1 && j === n - 1) {
      board.togglePiece(i, j);
      paths++;
      return;
    }
  
    // Check above
    if (board[i - 1] !== undefined && !board.hasBeenVisited(i - 1,j)) {
      traverse(i - 1, j);
    }
  
    // check below
    if (board[i + 1] !== undefined && !board.hasBeenVisited(i + 1,j)) {
      traverse(i + 1, j);
    }
  
    // check left
    if (board[i][j - 1] !== undefined && !board.hasBeenVisited(i,j - 1)) {
      traverse(i, j - 1);
    }
  
    // check right
    if (board[i][j + 1] !== undefined && !board.hasBeenVisited(i,j + 1)) {
      traverse(i, j + 1);
    }

    board.togglePiece(i, j);
  }

  traverse(i, j);

  return paths;
};

console.log(robotPaths(6));
