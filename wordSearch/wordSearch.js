/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

[
  ['A','B','F','E'],
  ['B','F','C','S'],
  ['F','D','E','E']
]

word = ABFD
*/

const exist = (board, word) => {
  // I: board, word
  // O: whether the word can be formed
  // C: linear time, constant space
  // E: empty word, board empty, multiple matches

  const wordExists = (r = 0, c = 0, i = 0) => {
    if (i === word.length) {
      return true;
    }
    if (board[r][c] !== word[i]) {
      return false;
    }
    const store = board[r][c];
    board[r][c] = 0;
    const output = wordExists(r + 1, c, i + 1)
      || wordExists(r - 1, c, i + 1)
      || wordExists(r, c + 1, i + 1)
      || wordExists(r, c - 1, i + 1);
    board[r][c] = store;
    return output;
  };

  board.forEach((row, r) => {
    row.forEach((col, c) => {
      if (wordExists(r, c)) return true;
    });
  });

  return false;
};