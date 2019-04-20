/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

/*
f(2) = [rr, rp, rs, pr, pp, ps, sr, sp, ss]
f(3) = [rrr, rrp, ]
*/

var rockPaperScissors = function (n) {
  // TODO: your solution here
  var arr = ['R', 'P', 'S'];
  var multiArr = [];
  var output = [];
  var tempString = '';
  //I: number of rouds
  //O: an array of strings containing all permutations of moves
  //C: none
  //E: input is 0

  for (var i = 0; i < n; i++) {
      multiArr.push(arr);
  }

  multiArr.forEach((row, x) => {
    row.forEach((col, y) => {
        tempString = '';
        multiArr.forEach((elem, z) => {
            tempString += multiArr[x][y];
        })
        output.push(tempString);
    })
  })

  return output;

    // arr.forEach(x => {
    //     arr.forEach(y => {
    //         arr.forEach(z => {
    //             tempString = '';
    //             tempString += x;
    //             tempString += y;
    //             tempString += z;
    //             output.push(tempString);
    //         });
    //     });
    // });

    // return output;
};

console.log(rockPaperScissors(5));

