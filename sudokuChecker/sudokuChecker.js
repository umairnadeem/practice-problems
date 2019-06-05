/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Check rows
  const rows = board.split('\n');
  const rowsBool = rows.reduce((accum, row) => accum && checkNumbers(row), true);

  // Check cols
  const cols = rows.map((row, i) => rows.map(col => col[i]).join(''));
  const colsBool = cols.reduce((accum, col) => accum && checkNumbers(col), true);

  // Check matrices
  let matrices = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let str = '';
      for (let x = j * 3; x < j * 3 + 3; x++) {
        str += rows[x].slice(i * 3, i * 3 + 3);
      }
      matrices.push(str);
    }
  }
  const matricesBool = matrices.reduce((accum, matrix) => accum && checkNumbers(matrix), true);
  
  return rowsBool && colsBool && matricesBool ? 'solved' : 'invalid';
}

function checkNumbers(string) {
  let sum = 0;
  for (let char of string) {
    sum += +char;
  }
  return sum === 45 && string.length === 9 && string.split('').filter((char, index, array) => array.indexOf(char) === index).length === 9;
}

// console.log(sudokuChecker(`735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429`));
